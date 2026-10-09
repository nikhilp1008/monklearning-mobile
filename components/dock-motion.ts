import { useEffect } from 'react';
import { useDerivedValue, useSharedValue, type SharedValue } from 'react-native-reanimated';

/**
 * THE DOCK'S MOTION, IN ONE PLACE — the Ask follow-up dock on a doubt, from
 * the "20a" handoff in `export 8/ask-follow-up-dock`.
 *
 * The prototype runs a single frame loop that integrates every moving value
 * with springs, and the bar's width, the flag's fade, the disc's scale, the
 * level bars and both halves of the light are all read from that one set of
 * numbers. That is why it feels like one object: nothing is cross-faded on a
 * timer of its own, so nothing can arrive early or late relative to anything
 * else.
 *
 * This is that loop. It integrates the same springs with the same stiffness
 * and damping, every frame, on the UI thread, and hands back a snapshot that
 * the bar's animated styles and the footer light both read. Practice adopts
 * the identical motion by using this hook; it is not specific to doubts.
 */

/** The bar at rest and at full stretch, and its height. The handoff's W0/W1/H0. */
export const DOCK_W0 = 184;
export const DOCK_W1 = 300;
export const DOCK_H0 = 52;
/** The flag's share of the row: its 52 plus the 10 between it and the bar. */
export const DOCK_FLAG_SLOT = 62;

/** How long a touch counts as a press before it becomes listening. */
const PRESS_MS = 170;

export type DockPhase = 'idle' | 'listening' | 'thinking' | 'speaking';

export type DockMotion = {
  /** Bar width before the press squeeze. */
  w: number;
  /** 0 at rest → 1 at full stretch; drives the flag's fade and the centring. */
  ex: number;
  /** 0 → 1 while the finger is down. Squeezes the bar by 6 x 2. */
  pr: number;
  ring: number;
  foot: number;
  think: number;
  teach: number;
  /** Voice level, springs smoothed. */
  lvl: number;
  /** The disc's scale. */
  ds: number;
  /** The thinking arc's rotation, in degrees. */
  rot: number;
  /** Seconds, for anything that oscillates. */
  t: number;
  /** True while anything is still moving or lit — the light unmounts after. */
  live: boolean;
};

type S = { x: number; v: number };
const spring = (s: S, target: number, stiff: number, damp: number, dt: number) => {
  'worklet';
  s.v += (stiff * (target - s.x) - damp * s.v) * dt;
  s.x += s.v * dt;
  return s.x;
};
const clamp = (x: number, a = 0, b = 1) => {
  'worklet';
  return Math.max(a, Math.min(b, x));
};

export function useDockMotion({
  phase,
  level,
  clock,
  down,
  stretch = true,
}: {
  phase: DockPhase;
  /** The student's own voice from the recorder, 0..1. */
  level: SharedValue<number>;
  clock: SharedValue<number>;
  /** True from the instant a finger lands on the bar until it lifts. */
  down: SharedValue<boolean>;
  /**
   * Whether the bar may stretch from W0 to W1. Doubts' bar can: the only
   * thing beside it is the flag, which steps aside. Practice's cannot: Next
   * shares its row, and the bar has nowhere to grow without shoving or
   * hiding the page's main button. Unstretched, the width holds at W0 and
   * everything else — light, ring, disc, press squeeze — moves exactly as it
   * does on a doubt.
   */
  stretch?: boolean;
}): SharedValue<DockMotion> {
  const phaseSV = useSharedValue<DockPhase>(phase);
  useEffect(() => {
    phaseSV.value = phase;
  }, [phase, phaseSV]);

  const downAt = useSharedValue(0);
  const wasDown = useSharedValue(false);
  const last = useSharedValue(0);
  const rot = useSharedValue(0);
  const bump = useSharedValue(0);
  const nextBump = useSharedValue(0);

  const sp = useSharedValue({
    ring: { x: 0, v: 0 },
    foot: { x: 0, v: 0 },
    think: { x: 0, v: 0 },
    teach: { x: 0, v: 0 },
    lvl: { x: 0, v: 0 },
    press: { x: 0, v: 0 },
    w: { x: DOCK_W0, v: 0 },
    ds: { x: 1, v: 0 },
  });

  return useDerivedValue<DockMotion>(() => {
    const ms = clock.value;
    const t = ms / 1000;
    const dt = last.value === 0 ? 0 : Math.min(0.05, t - last.value);
    last.value = t;

    // A press is the first 170ms of a touch, before it has become listening.
    if (down.value && !wasDown.value) downAt.value = ms;
    wasDown.value = down.value;
    const p = phaseSV.value;
    const pressing =
      down.value && (p === 'idle' || (p === 'listening' && ms - downAt.value < PRESS_MS));
    const st = pressing ? 'press' : p;
    const talking = st === 'speaking';

    /*
     * THE LEVEL — the prototype's own formula, with one term made real.
     *
     * The prototype draws listening as `0.25 + 0.3 x wobble + 0.45 x bump`:
     * a floor, a slow organic rhythm, and random peaks standing in for a voice
     * it cannot hear. Here the peaks come from the student's actual voice and
     * the floor and rhythm stay exactly as designed.
     *
     * An earlier version mapped the voice straight onto the whole 0.25..1
     * range. A live microphone is rarely quiet, so the light sat pinned near
     * the top — taller and hotter than the design, and without the breathing
     * that makes it look alive rather than metered. Keeping the wobble keeps
     * the design's motion; the voice only decides how high the peaks go.
     *
     * The answer has no level to read — the audio is played, not metered — so
     * it keeps the prototype's speech envelope unchanged.
     */
    bump.value *= Math.exp(-dt * 5.5);
    if (talking && ms >= nextBump.value) {
      bump.value = 1;
      nextBump.value = ms + 160 + Math.random() * 210;
    }
    const wob = Math.abs(Math.sin(t * 7.3) + Math.sin(t * 11.1 + 1.3) + Math.sin(t * 3.7 + 2)) / 3;
    const raw =
      st === 'listening'
        ? 0.25 + 0.3 * wob + 0.45 * clamp(level.value)
        : talking
          ? 0.2 + 0.25 * wob + 0.4 * bump.value
          : 0;

    const s = sp.value;
    const lvl = spring(s.lvl, clamp(raw), 200, 24, dt);
    spring(s.foot, st === 'press' ? 0.45 : st === 'listening' ? 1 : st === 'thinking' || talking ? 0.9 : 0, 70, 16, dt);
    spring(s.ring, st === 'press' ? 1 : st === 'listening' ? 0.55 : 0, 260, 30, dt);
    spring(s.think, st === 'thinking' ? 1 : 0, 40, 13, dt);
    spring(s.teach, talking || st === 'thinking' ? 1 : 0, 40, 13, dt);
    spring(s.press, st === 'press' || st === 'listening' ? 1 : 0, 400, 30, dt);
    const w = spring(s.w, stretch && st !== 'idle' ? DOCK_W1 : DOCK_W0, 170, 24, dt);
    spring(
      s.ds,
      st === 'press' ? 0.9 : talking ? 1 + 0.07 * lvl : st === 'thinking' ? 0.96 + 0.03 * Math.sin(t * 2.4) : 1,
      300,
      20,
      dt
    );
    rot.value = (rot.value + dt * 330) % 360;

    const live =
      st !== 'idle' || s.ring.x > 0.005 || Math.abs(s.foot.x) > 0.005 || Math.abs(s.w.x - DOCK_W0) > 0.5;

    return {
      w,
      ex: clamp((w - DOCK_W0) / (DOCK_W1 - DOCK_W0)),
      pr: clamp(s.press.x, 0, 1.2),
      ring: clamp(s.ring.x),
      foot: clamp(s.foot.x, 0, 1.1),
      think: clamp(s.think.x),
      teach: clamp(s.teach.x),
      lvl,
      ds: s.ds.x,
      rot: rot.value,
      t,
      live,
    };
  });
}
