/**
 * Ch06 · Section 50 — "Common pitfalls and pro-tips" (Moment of Inertia)
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0,6.83,20.05,31.57,43.61,60.67,61.67,62.67] — b5,b6 fast in EN;
 * hi [0,7.17,18.18,27.14,39,55.64,71.34,85.93] — b7 fast in HI → those kept
 * ≤0.9 s, others use normal pacing):
 *  0 title + red underline
 *  1 trap 1: wrong r in mr² — must be ⊥ from the axis
 *  2 trap 1 example: corner on a square — half the diagonal, not half the side
 *  3 trap 2: ⊥-axis theorem only for flat laminae
 *  4 trap 3: don't mix standard values — two chips
 *  5 trap 4: K depends on geometry + axis only, never mass
 *  6 green pro-tip box: parallel-axis before integrating, perpendicular splits laminae
 *  7 closing line + underline
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | title script24 cx540 bl52 · underline y72 x300..780
 *  b1 | script14 st x80 bl125
 *  b2 | script12 st x100 bl153
 *  b3 | script14 st x80 bl205
 *  b4 | script14 st x80 bl265 · chips y285 h34: x100 w400 / x520 w400
 *  b5 | script14 st x80 bl350
 *  b6 | green box x80..1000 y385..455 · L1 script13 cx540 bl412 · L2 script12 cx540 bl440
 *  b7 | script13 cx540 bl480 · underline y500 x300..780
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  Chip,
  T,
  INK,
  MUTED,
  AMBER,
  GREEN,
  GREEN_DARK,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch06Sec50({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the traps */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={24} fill={INK} script>
          {t("moment-of-inertia traps", "moment-of-inertia ke traps")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 3.5)} d="M 300 72 h 480" stroke={RED} sw={2.2} dur={0.7} />

      {/* beat 1 — trap 1: wrong r */}
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <T x={80} y={125} size={14} fill={RED} script anchor="start">
          {t(
            "1 · wrong distance in mr² — r is the ⊥ distance from the AXIS",
            "1 · mr² mein galat distance — r AXIS se ⊥ distance hai"
          )}
        </T>
      </Fade>

      {/* beat 2 — the concrete example */}
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={100} y={153} size={12} fill={MUTED} script anchor="start">
          {t(
            "corner on a square, axis at centre: r = half the DIAGONAL — not half the side",
            "square ke corner par, axis centre par: r = aadhi DIAGONAL — aadha side nahi"
          )}
        </T>
      </Fade>

      {/* beat 3 — trap 2: laminae only */}
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={80} y={205} size={14} fill={RED} script anchor="start">
          {t(
            "2 · ⊥-axis theorem is for flat LAMINAE only",
            "2 · ⊥-axis theorem sirf flat LAMINAE ke liye"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 4.5)}>
        <T x={100} y={233} size={12} fill={MUTED} script anchor="start">
          {t(
            "spheres and cylinders — instant wrong answer",
            "spheres aur cylinders — turant galat answer"
          )}
        </T>
      </Fade>

      {/* beat 4 — trap 3: don't mix standard values */}
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={80} y={278} size={14} fill={RED} script anchor="start">
          {t(
            "3 · don't mix the standard values",
            "3 · standard values mat milao"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 4)}>
        <Chip x={100} y={298} w={400} h={34} fill={CREAM} stroke={AMBER} textFill={INK} size={13} script={false}>
          disc-centre ½MR² ≠ disc-diameter ¼MR²
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 7.5)}>
        <Chip x={520} y={298} w={400} h={34} fill={CREAM} stroke={AMBER} textFill={INK} size={13} script={false}>
          sphere (2/5)MR² ≠ shell (2/3)MR²
        </Chip>
      </Fade>

      {/* beat 5 — trap 4: K doesn't move with mass (fast in EN) */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={80} y={363} size={14} fill={RED} script anchor="start">
          {t(
            "4 · K depends on geometry + axis ONLY — never on how much mass",
            "4 · K sirf geometry + axis par — kabhi mass par nahi"
          )}
        </T>
      </Fade>

      {/* beat 6 — the pro-tips (fast in EN) */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.4)}
        d="M 92 385 h 896 q 12 0 12 12 v 46 q 0 12 -12 12 h -896 q -12 0 -12 -12 v -46 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.6}
        dur={0.6}
        fill={CREAM}
      />
      <Fade on={beat >= 6} delay={dl(6, 0.7)}>
        <T x={540} y={412} size={13} fill={GREEN_DARK} script>
          {t(
            "off-centre axis? reach for PARALLEL-axis before you integrate",
            "off-centre axis? integrate se pehle PARALLEL-axis pakdo"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.85)}>
        <T x={540} y={440} size={12} fill={MUTED} script>
          {t(
            "flat plate? PERPENDICULAR-axis splits one hard integral into two easy ones",
            "flat plate? PERPENDICULAR-axis ek mushkil integral ko do aasan mein todta hai"
          )}
        </T>
      </Fade>

      {/* beat 7 — the collapse (fast in HI) */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={480} size={13} fill={GREEN_DARK} script>
          {t(
            "one standard formula + one theorem — spot the pair and the work collapses",
            "ek standard formula + ek theorem — jodi pehchano, kaam simat jaata"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 0.6)} d="M 300 500 h 480" stroke={GREEN} sw={2.2} dur={0.6} />
    </Scene>
  );
}
