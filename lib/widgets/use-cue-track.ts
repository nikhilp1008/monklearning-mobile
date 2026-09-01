import { useEffect, useRef, useState } from 'react';
import {
  useSharedValue,
  withTiming,
  Easing,
  type SharedValue,
} from 'react-native-reanimated';
import type { AudioPlayer } from 'expo-audio';

import type { Cue, WidgetModule } from './types';

/**
 * Drives a widget's params from the narration timeline.
 *
 * Sync source is `player.currentTime` (expo-audio, SECONDS), read on a JS rAF
 * loop. We deliberately do NOT drive cues from `useAudioPlayerStatus`:
 *   - its default updateInterval is 500ms, far too coarse to land a cue on a word;
 *   - lowering it to ~50ms costs a React re-render per tick for the whole board;
 *   - it is documented as unreliable on Android (expo/expo#40129).
 * Reading `player.currentTime` directly costs no re-render, and the tween itself
 * runs on the UI thread through Reanimated, so the board never waits on JS.
 *
 * Pause, seek and scrub are handled for free: cue selection is a pure function
 * of playback position, so scrubbing backwards re-applies the correct cue.
 */
export function useCueTrack<P extends object>(
  module: WidgetModule<P>,
  basePar: P,
  cues: readonly Cue[] | undefined,
  player: AudioPlayer | null
): {
  params: P;
  motion: Record<string, SharedValue<number>>;
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
    if (!player || !cues || cues.length === 0) return;

    const ordered = [...cues].sort((a, b) => a.at - b.at);
    let frame = 0;

    const tick = () => {
      const t = player.currentTime; // seconds
      let next = -1;
      for (let i = 0; i < ordered.length; i++) {
        if (ordered[i].at <= t) next = i;
        else break;
      }

      if (next !== activeIndex.current) {
        activeIndex.current = next;
        const cue = next >= 0 ? ordered[next] : null;

        if (cue) {
          const merged = { ...basePar, ...(cue.patch as Partial<P>) };
          const checked = module.validate(merged);
          if (checked.ok) {
            const target = checked.params;
            setParams(target);
            setCaption(cue.caption ?? null);
            for (const [key, sv] of motionEntries) {
              const to = Number(target[key as keyof P] ?? 0);
              sv.value =
                cue.tween && cue.tween > 0
                  ? withTiming(to, {
                      duration: cue.tween,
                      easing: Easing.inOut(Easing.quad),
                    })
                  : to;
            }
          } else if (__DEV__) {
            console.warn('[drona/widgets] cue patch rejected', checked.errors);
          }
        } else {
          setParams(basePar);
          setCaption(null);
          for (const [key, sv] of motionEntries) {
            sv.value = Number(basePar[key as keyof P] ?? 0);
          }
        }
      }
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [player, cues, basePar, module]);

  return { params, motion, caption };
}
