import AsyncStorage from '@react-native-async-storage/async-storage';
import Constants from 'expo-constants';
import * as Crypto from 'expo-crypto';
import { requireOptionalNativeModule } from 'expo-modules-core';
import { AppState, Platform } from 'react-native';

import { apiFetch } from '@/lib/api';
import { setTapSink } from '@/lib/tap';

/**
 * What the app does, sent to the server so /admin can see it.
 *
 * Everything the dashboard measured before this was what the SERVER recorded —
 * a practice answer, a classroom turn, a snapped doubt. So it could say 29
 * students signed up and 28 finished onboarding, and nothing at all about
 * which of the nine onboarding screens the one who left was looking at.
 *
 * Three rules this is built around, in order of how much they matter:
 *
 * 1. IT MUST NEVER BREAK THE APP. Every path here swallows its own errors.
 *    Analytics that can throw is analytics that can cost you a student mid
 *    lesson, and no funnel is worth that. There is no `throw` below and no
 *    unhandled promise.
 *
 * 2. IT MUST NEVER BLOCK. `track()` appends to an array and returns. The POST
 *    happens on a flush — when the app backgrounds, when the queue is big
 *    enough, or on the next launch. A student on a train tapping through
 *    onboarding should feel nothing.
 *
 * 3. IT MUST SURVIVE BEING OFFLINE. The queue is mirrored into AsyncStorage,
 *    so events generated on the Delhi metro are still there when signal comes
 *    back, carrying the time they actually happened rather than the time they
 *    were uploaded. The server keeps both clocks for exactly this reason.
 */

const QUEUE_KEY = 'monk.track.queue.v1';

/** One flush is one batch; the server caps at 200 and drops the rest, so
 *  there is no point sending more than it will take. */
const MAX_BATCH = 200;

/** Above this the queue stops growing and starts dropping its OLDEST events.
 *  A phone offline for a fortnight should not accumulate an unbounded array in
 *  memory, and the recent events are the ones worth keeping. */
const MAX_QUEUE = 1000;

/** Flush once this many are waiting, so a long session does not sit on
 *  everything until it happens to background. */
const FLUSH_AT = 25;

type Event = {
  event: string;
  screen?: string | null;
  props?: Record<string, unknown> | null;
  client_session_id: string;
  app_version?: string | null;
  platform?: string | null;
  at: string;
};

let queue: Event[] = [];
let flushing = false;
let started = false;

/**
 * One id per app launch. Two events sharing it were the same visit, which is
 * the only way in-app session length is computable at all — the server cannot
 * infer "they put the phone down" from a gap in arrival times, because arrival
 * times are when a batch flushed, not when anything happened.
 */
let launchId = '';

const APP_VERSION =
  (Constants.expoConfig?.version as string | undefined) ??
  (Constants.manifest2?.extra?.expoClient?.version as string | undefined) ??
  null;

type Device = {
  brand: string | null;
  model: string | null;
  os_version: string | null;
  device_type: string | null;
};

const DEVICE_TYPES: Record<number, string> = { 1: 'phone', 2: 'tablet', 3: 'desktop', 4: 'tv' };

function text(v: unknown): string | null {
  if (v === null || v === undefined) return null;
  const s = String(v).trim();
  return s ? s : null;
}

/**
 * The phone's own description of itself: brand, model, OS version, phone or
 * tablet. Nothing that identifies the handset — no serial, no advertising ID —
 * and nothing that needs a permission prompt. Sent once per batch beside the
 * events rather than on each one: a batch is one phone, and repeating it per
 * tap is bytes on a student's data plan.
 *
 * expo-device is loaded defensively. A dev client built before it was added
 * has no native module, and tracking must not be what breaks there; the
 * Platform constants fill in what they can without it (everything but the
 * iPhone model name).
 *
 * Location is not collected here. The server works out the state from the
 * request itself, so the app asks for no location permission.
 */
function describeDevice(): Device | null {
  try {
    let D: any = null;
    // Asked first, quietly. `require` on a build without the native half
    // throws, and the catch below did keep tracking alive — but in a dev
    // build the throw was still reported as a red "Uncaught Error" screen
    // on every launch. The optional lookup answers null instead of throwing.
    if (requireOptionalNativeModule('ExpoDevice')) {
      try {
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        D = require('expo-device');
      } catch {
        D = null;
      }
    }
    const c: any = (Platform as any).constants ?? {};
    const ios = Platform.OS === 'ios';

    const rawBrand = text(D?.brand) ?? text(c.Brand) ?? text(D?.manufacturer)
      ?? text(c.Manufacturer) ?? (ios ? 'Apple' : null);
    // Android reports brands as the maker typed them: "samsung", "xiaomi".
    const brand = rawBrand ? rawBrand.charAt(0).toUpperCase() + rawBrand.slice(1) : null;
    const model = text(D?.modelName) ?? text(c.Model);
    const os_version = text(D?.osVersion) ?? text(ios ? c.osVersion : c.Release);

    let device_type: string | null =
      typeof D?.deviceType === 'number' ? DEVICE_TYPES[D.deviceType] ?? null : null;
    if (!device_type && ios) {
      device_type = c.interfaceIdiom === 'pad' ? 'tablet'
        : c.interfaceIdiom === 'phone' ? 'phone' : null;
    }
    if (!brand && !model && !os_version) return null;
    return { brand, model, os_version, device_type };
  } catch {
    return null;
  }
}

let device: Device | null | undefined;

/** Worked out once per launch; a phone does not change mid-session. */
function currentDevice(): Device | null {
  if (device === undefined) device = describeDevice();
  return device;
}

function newId(): string {
  try {
    return Crypto.randomUUID();
  } catch {
    // randomUUID needs a secure context and is not guaranteed on every
    // runtime. A non-unique id would silently merge two students' visits into
    // one, so fall back to something with enough entropy to not collide.
    return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 12)}`;
  }
}

async function persist(): Promise<void> {
  try {
    await AsyncStorage.setItem(QUEUE_KEY, JSON.stringify(queue));
  } catch {
    // Out of space, or storage unavailable. The in-memory queue still works
    // for this session; only crash-survival is lost.
  }
}

/**
 * Send what is queued.
 *
 * Events are removed from the queue BEFORE the request and put back on
 * failure, rather than removed after success. Removing after success would
 * let a second flush racing the first send the same events twice, and a
 * double-counted screen view is a funnel that lies upward.
 */
export async function flush(): Promise<void> {
  if (flushing || queue.length === 0) return;
  flushing = true;
  const batch = queue.slice(0, MAX_BATCH);
  queue = queue.slice(batch.length);
  try {
    await apiFetch('/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ events: batch, device: currentDevice() }),
      timeoutMs: 10000,
    });
    await persist();
  } catch {
    // Offline, signed out, or the server said no. Put them back at the front
    // — they keep their original `at`, so arriving late costs nothing.
    queue = batch.concat(queue).slice(-MAX_QUEUE);
    await persist();
  } finally {
    flushing = false;
  }
}

/** Record one event. Returns immediately; never throws. */
export function track(
  event: string,
  props?: Record<string, unknown>,
  screen?: string,
): void {
  try {
    if (!started) return;   // nothing is tracked before initTracking() runs
    queue.push({
      event,
      screen: screen ?? null,
      props: props ?? null,
      client_session_id: launchId,
      app_version: APP_VERSION,
      platform: Platform.OS,
      at: new Date().toISOString(),
    });
    if (queue.length > MAX_QUEUE) queue = queue.slice(-MAX_QUEUE);
    void persist();
    if (queue.length >= FLUSH_AT) void flush();
  } catch {
    // A tracker that throws inside a render path is a crashed screen.
  }
}

/**
 * Start tracking. Safe to call more than once; only the first call does work.
 *
 * Restores anything left over from a previous launch — including a launch that
 * crashed — and flushes it, then registers a background flush. Nothing is sent
 * until the student is signed in, because the ingest endpoint is authenticated
 * and a flush without a token simply fails and re-queues.
 */
export function initTracking(): () => void {
  if (started) return () => {};
  started = true;
  launchId = newId();
  installErrorTracking();
  setTapSink(trackTap);   // lib/tap.ts: how promo and payment code reports an action without importing this file

  (async () => {
    try {
      const saved = await AsyncStorage.getItem(QUEUE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) queue = parsed.concat(queue).slice(-MAX_QUEUE);
      }
    } catch {
      // Corrupt queue. Losing it is strictly better than failing to start.
      try { await AsyncStorage.removeItem(QUEUE_KEY); } catch {}
    }
    track('app_open');
    void flush();
  })();

  // Backgrounding is the one moment a visit is definitely over, and the last
  // chance to send before the OS may stop giving us cycles.
  const sub = AppState.addEventListener('change', (state) => {
    if (state === 'background' || state === 'inactive') {
      track('app_background');
      void flush();
    } else if (state === 'active') {
      track('app_foreground');
    }
  });

  return () => {
    try { sub.remove(); } catch {}
  };
}

/** The screen the student is on, so an error or an action can say where it happened. */
let lastScreen: string | null = null;

/** A screen the student opened. Called from the root layout on route change. */
export function trackScreen(pathname: string): void {
  lastScreen = pathname;
  track('screen_view', undefined, pathname);
}

/**
 * A deliberate action that is not a screen: starting to pay, trying a promo
 * code. A screen view says a student reached the plans page; this says what
 * they did there. `name` is a fixed word chosen in code, never something typed.
 */
export function trackTap(name: string, props?: Record<string, unknown>): void {
  track('tap', { name, ...(props ?? {}) }, lastScreen ?? undefined);
}

/* ── Errors ────────────────────────────────────────────────────────────────
   There is no outside crash reporter, on purpose: nothing about a student
   leaves for a third party. An error is one more event on the queue above, so
   it goes to our own server with the screen it happened on, survives being
   offline, and is restored on the next launch if this one dies.

   What is sent: the error's message, its name and the top of its stack, each
   cut short. What is not: anything typed, anything on screen. */

/** One launch that loops on the same error must not fill the queue with it. */
const MAX_SAME_ERROR = 3;
const MAX_ERRORS_PER_LAUNCH = 20;
/** How long a fatal error's own handler is held back so the event can be saved first. */
const FATAL_SAVE_MS = 250;

const seenErrors = new Map<string, number>();
let errorCount = 0;
let errorsInstalled = false;

function clip(v: unknown, limit: number): string | null {
  const s = text(v);
  return s ? s.slice(0, limit) : null;
}

/**
 * Record an error. `where` is how it was caught: 'global' (an uncaught error),
 * 'promise' (a rejection nothing handled) or 'screen' (a screen failed to draw
 * and the student saw "Try again"). Never throws.
 */
export function trackError(error: unknown, where: 'global' | 'promise' | 'screen', fatal = false): void {
  try {
    const e = error as any;
    const message = clip(e?.message ?? e, 300) ?? 'unknown error';
    const key = message.slice(0, 120);
    const times = (seenErrors.get(key) ?? 0) + 1;
    seenErrors.set(key, times);
    if (times > MAX_SAME_ERROR) return;
    if (errorCount >= MAX_ERRORS_PER_LAUNCH) return;
    errorCount += 1;
    track('app_error', {
      message,
      name: clip(e?.name, 60),
      stack: clip(e?.stack, 1500),
      where,
      fatal,
    }, lastScreen ?? undefined);
    void flush();   // it may be the last thing this launch does
  } catch {
    // Reporting an error must never be the second error.
  }
}

/** Catch what nothing else caught. Once per launch; the handlers that were there still run. */
function installErrorTracking(): void {
  if (errorsInstalled) return;
  errorsInstalled = true;
  try {
    const EU: any = (globalThis as any).ErrorUtils;
    if (EU?.getGlobalHandler && EU?.setGlobalHandler) {
      const previous = EU.getGlobalHandler();
      EU.setGlobalHandler((error: unknown, isFatal?: boolean) => {
        trackError(error, 'global', !!isFatal);
        const pass = () => { try { previous?.(error, isFatal); } catch {} };
        // A fatal error ends the app. Give the event a moment to reach storage
        // first, or the one crash worth knowing about is the one never seen.
        // Not in development: the red screen should appear at once.
        if (isFatal && !__DEV__) setTimeout(pass, FATAL_SAVE_MS);
        else pass();
      });
    }
  } catch {
    // No global handler on this runtime. Screens still report through the boundary.
  }
  try {
    // In development React Native already shows unhandled rejections; leave that alone.
    const H: any = (globalThis as any).HermesInternal;
    if (!__DEV__ && H?.enablePromiseRejectionTracker) {
      H.enablePromiseRejectionTracker({
        allRejections: true,
        onUnhandled: (_id: number, error: unknown) => trackError(error, 'promise', false),
        onHandled: () => {},
      });
    }
  } catch {
    // Not Hermes, or the hook is gone: uncaught errors are still reported above.
  }
}
