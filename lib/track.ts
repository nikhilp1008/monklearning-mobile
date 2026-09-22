import AsyncStorage from '@react-native-async-storage/async-storage';
import Constants from 'expo-constants';
import * as Crypto from 'expo-crypto';
import { AppState, Platform } from 'react-native';

import { apiFetch } from '@/lib/api';

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
      body: JSON.stringify({ events: batch }),
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

/** A screen the student opened. Called from the root layout on route change. */
export function trackScreen(pathname: string): void {
  track('screen_view', undefined, pathname);
}
