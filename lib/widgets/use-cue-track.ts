import { useEffect, useRef, useState } from 'react';
import { useSharedValue, withTiming, Easing, type SharedValue } from 'react-native-reanimated';

import type { Cue, WidgetModule } from './types';

/**
 * Drives a widget's params from the live board's reveal order.
 *
 * There is no clock to poll here — a live session has no section audio track
 * and no `player.currentTime` (see lib/drona-voice-client.ts: BoardEvent
 * carries no timestamp of any kind). What it has instead is a strictly
 * ordered stream of board events, each revealed exactly when the audio_chunk
 * pairing it to a sentence starts playing (AudioPlaybackQueue.onItemStart).
 *
 * So cue selection is driven by `activeSeq` — the highest board-event `seq`
 * revealed so far in the turn — rather than by wall-clock or narration-clock
 * position. The active cue is the one with the greatest `Cue.seq` that is
 * `<= activeSeq`. This is not an approximation of the old audio-driven
 * design; it is strictly more robust than it, because a cue cannot fire
 * ahead of or behind its sentence — it fires WITH it, by construction. See
 * `Cue.seq`'s doc comment in ./types for the full reasoning, and
 * docs/cue-timing.md for the pre-recorded-lesson problem this sidesteps
 * entirely rather than solving.
 */
export function useCueTrack<P extends object>(
  module: WidgetModule<P>,
  basePar: P,
  cues: readonly Cue[] | undefined,
  activeSeq: number | null
): {
  params: P;
  motion: Record<string, SharedValue<number>>;
  /** The active cue's caption, with every {{token}} already interpolated from
   *  `module.computeDerived(params)`. Never the raw template — an unknown
   *  token drops the whole caption rather than rendering the braces; see
   *  interpolateCaption below. */
  caption: string | null;
} {
  const [params, setParams] = useState<P>(basePar);
  const [caption, setCaption] = useState<string | null>(null);
  const activeIndex = useRef<number>(-1);

  /*
   * Fixed pool of shared values, assigned to `module.animatable` in order.
   * A pool rather than one-per-key on purpose: hooks cannot be called in a loop
   * over data, and a hard cap of MAX_ANIMATABLE is a healthy constraint anyway
   * — a widget that needs five simultaneously tweening numbers is two widgets.
   */
  const sv0 = useSharedValue<number>(0);
  const sv1 = useSharedValue<number>(0);
  const sv2 = useSharedValue<number>(0);
  const sv3 = useSharedValue<number>(0);
  const pool = [sv0, sv1, sv2, sv3];

  if (__DEV__ && module.animatable.length > pool.length) {
    throw new Error(
      `[drona/widgets] ${module.id} declares ${module.animatable.length} animatable params; max is ${pool.length}`
    );
  }

  const motionEntries = module.animatable
    .slice(0, pool.length)
    .map((key, i) => [key, pool[i]] as const);
  const motion = Object.fromEntries(motionEntries) as Record<string, SharedValue<number>>;

  // Seed and reset when the payload itself changes (new board event).
  useEffect(() => {
    setParams(basePar);
    setCaption(null);
    activeIndex.current = -1;
    for (const [key, sv] of motionEntries) {
      sv.value = Number(basePar[key as keyof P] ?? 0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [basePar]);

  useEffect(() => {
    if (!cues || cues.length === 0 || activeSeq == null) return;

    const ordered = [...cues].sort((a, b) => a.seq - b.seq);
    let next = -1;
    for (let i = 0; i < ordered.length; i++) {
      if (ordered[i].seq <= activeSeq) next = i;
      else break;
    }

    if (next === activeIndex.current) return;
    activeIndex.current = next;
    const cue = next >= 0 ? ordered[next] : null;

    if (!cue) {
      setParams(basePar);
      setCaption(null);
      for (const [key, sv] of motionEntries) {
        sv.value = Number(basePar[key as keyof P] ?? 0);
      }
      return;
    }

    const merged = { ...basePar, ...(cue.patch as Partial<P>) };
    const checked = module.validate(merged);
    if (!checked.ok) {
      if (__DEV__) console.warn('[drona/widgets] cue patch rejected', checked.errors);
      return;
    }

    const target = checked.params;
    setParams(target);
    setCaption(interpolateCaption(cue.caption, module, target));
    for (const [key, sv] of motionEntries) {
      const to = Number(target[key as keyof P] ?? 0);
      sv.value =
        cue.tween && cue.tween > 0
          ? withTiming(to, { duration: cue.tween, easing: Easing.inOut(Easing.quad) })
          : to;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSeq, cues, basePar, module]);

  return { params, motion, caption };
}

/**
 * A cue for a REAL seekable local track — a synthesized narration file with
 * known, measured segment boundaries — as opposed to `Cue`, which is keyed to
 * a live board event's reveal order and has no timestamp at all. Deliberately
 * a separate type rather than an optional field bolted onto `Cue`: `Cue` is
 * the live/precomputed payload contract, and this has no reason to exist in
 * that contract unless the pre-recorded feel-test this was built for (see
 * dev-widget-preview.tsx) leads to the precompute pipeline actually being
 * built — CLAUDE.md's own cue-sync section names this exact fork ("a second
 * cue-selection strategy alongside this one") without committing to it.
 */
export interface TimedCue {
  /** Milliseconds into the track — measured from the synthesized audio's own
   *  PCM byte count, never estimated from word count or reading speed. */
  atMs: number;
  patch: Readonly<Record<string, number | string | boolean>>;
  tween?: number;
  caption?: string;
}

/**
 * `useCueTrack`'s counterpart for a real seekable track: selects on
 * `atMs <= currentTimeMs` instead of `seq <= activeSeq`. Same patch/validate/
 * tween logic, duplicated rather than shared — the two selectors' inputs are
 * different enough (a monotonic ms clock vs. a discrete reveal-order integer)
 * that forcing one implementation to serve both would obscure which cue model
 * a given line of code belongs to, for a function this short.
 *
 * `currentTimeMs` must come from a rAF loop reading `player.currentTime`
 * directly (CLAUDE.md's own rule 2: `useAudioPlayerStatus`'s polling is too
 * coarse and unreliable on Android for cue-accurate sync) — not from
 * `useAudioPlayerStatus`.
 */
export function useCueTrackByTime<P extends object>(
  module: WidgetModule<P>,
  basePar: P,
  cues: readonly TimedCue[] | undefined,
  currentTimeMs: number | null
): {
  params: P;
  motion: Record<string, SharedValue<number>>;
  caption: string | null;
} {
  const [params, setParams] = useState<P>(basePar);
  const [caption, setCaption] = useState<string | null>(null);
  const activeIndex = useRef<number>(-1);

  const sv0 = useSharedValue<number>(0);
  const sv1 = useSharedValue<number>(0);
  const sv2 = useSharedValue<number>(0);
  const sv3 = useSharedValue<number>(0);
  const pool = [sv0, sv1, sv2, sv3];

  if (__DEV__ && module.animatable.length > pool.length) {
    throw new Error(
      `[drona/widgets] ${module.id} declares ${module.animatable.length} animatable params; max is ${pool.length}`
    );
  }

  const motionEntries = module.animatable
    .slice(0, pool.length)
    .map((key, i) => [key, pool[i]] as const);
  const motion = Object.fromEntries(motionEntries) as Record<string, SharedValue<number>>;

  useEffect(() => {
    setParams(basePar);
    setCaption(null);
    activeIndex.current = -1;
    for (const [key, sv] of motionEntries) {
      sv.value = Number(basePar[key as keyof P] ?? 0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [basePar]);

  useEffect(() => {
    if (!cues || cues.length === 0 || currentTimeMs == null) return;

    const ordered = [...cues].sort((a, b) => a.atMs - b.atMs);
    let next = -1;
    for (let i = 0; i < ordered.length; i++) {
      if (ordered[i].atMs <= currentTimeMs) next = i;
      else break;
    }

    if (next === activeIndex.current) return;
    activeIndex.current = next;
    const cue = next >= 0 ? ordered[next] : null;

    if (!cue) {
      setParams(basePar);
      setCaption(null);
      for (const [key, sv] of motionEntries) {
        sv.value = Number(basePar[key as keyof P] ?? 0);
      }
      return;
    }

    const merged = { ...basePar, ...(cue.patch as Partial<P>) };
    const checked = module.validate(merged);
    if (!checked.ok) {
      if (__DEV__) console.warn('[drona/widgets] cue patch rejected', checked.errors);
      return;
    }

    const target = checked.params;
    setParams(target);
    setCaption(interpolateCaption(cue.caption, module, target));
    for (const [key, sv] of motionEntries) {
      const to = Number(target[key as keyof P] ?? 0);
      sv.value =
        cue.tween && cue.tween > 0
          ? withTiming(to, { duration: cue.tween, easing: Easing.inOut(Easing.quad) })
          : to;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTimeMs, cues, basePar, module]);

  return { params, motion, caption };
}

const TOKEN = /\{\{(\w+)\}\}/g;

/**
 * Fills `{{token}}` from `module.computeDerived(params)` — the same function
 * the widget's own readout uses, so the words and the number cannot disagree
 * about a value (docs/narration-diagram-alignment.md Rule 2).
 *
 * An unknown token drops the WHOLE caption rather than rendering the raw
 * template or a blank in its place — a literal "{{range}}" on screen is worse
 * than no caption, and a half-filled sentence reads as more broken than a
 * missing one. This is the client half of the rule; the server validates
 * tokens before a live doubt's payload ever reaches here (see
 * docs/narration-diagram-alignment.md's runtime-token section) — this is
 * defence in depth, not the primary gate.
 */
function interpolateCaption<P extends object>(
  caption: string | undefined,
  module: WidgetModule<P>,
  params: P
): string | null {
  if (!caption) return null;
  if (!TOKEN.test(caption)) return caption;
  TOKEN.lastIndex = 0;

  const values = module.computeDerived(params);
  let missing = false;
  const filled = caption.replace(TOKEN, (_match, key: string) => {
    if (!(key in values)) {
      missing = true;
      return '';
    }
    return formatDerived(values[key]);
  });
  if (missing) {
    if (__DEV__) {
      console.warn(
        `[drona/widgets] ${module.id}: caption references an unknown token — dropping the caption`,
        caption
      );
    }
    return null;
  }
  return filled;
}

/** One decimal place, trimmed — "49.3", not "49.34000000000001" or "49.0". */
function formatDerived(value: number): string {
  const rounded = Math.round(value * 10) / 10;
  return Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(1);
}
