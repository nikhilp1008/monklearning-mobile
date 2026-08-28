/**
 * Ch13 · Section 53 — "Worked example (NEET): a floating cylinder"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 8.72, 24.51, 38.64, 49.85, 58.16, 69.79, 79.76]):
 *  0 shelf
 *  1 given: wooden cylinder, 16 cm submerged, pushed down & released; find T (g=9.8)
 *  2 hero (high): no mass, density, or area needed — only h matters
 *  3 T=2π√(h/g)=2π√(0.16/9.8)
 *  4 hero (high): =2π(0.1278)≈0.80 s
 *  5 T=2π√(h/g) is identical in form to a pendulum of length h
 *  6 floating body & pendulum of length=submerged depth keep same time
 *  7 hero (high): recognise the skeleton and the numbers fall out in one line
 *
 * Layout plan (Anek bl−0.78s..+0.31s), text-only (no diagram event this section):
 *  b0 | shelf y80 x60..1020
 *  b1 | st x70 bl110 size13 · st x70 bl142 size13
 *  b2 | box x70..640 y165..215 rx14 · line cx355 bl195 size16
 *  b3 | st x70 bl265 size14
 *  b4 | box x70..430 y300..360 rx14 · line cx250 bl336 size18
 *  b5 | st x70 bl400 size13
 *  b6 | st x70 bl430 size13
 *  b7 | box x140..940 y465..515 rx16 · line cx540 bl494 size13
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  INK,
  AMBER_DARK,
  GREEN,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch13Sec53({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={52} size={20} fill={INK} script>
          {t("Only the submerged depth matters", "Sirf submerged depth maayne rakhta hai")}
        </T>
      </Fade>

      {/* beat 0 — the shelf */}
      <Draw on={beat >= 0} delay={dl(0, 0.3)} d="M 60 80 L 1020 80" stroke={INK} sw={1.4} dur={0.6} />

      {/* beat 1 — the given data */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={70} y={110} size={13} fill={INK} anchor="start" weight={700}>
          {t(
            "wooden cylinder floats upright, 16 cm submerged",
            "wooden cylinder paani mein upright taira, 16 cm submerged"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={70} y={142} size={13} fill={INK} anchor="start" weight={700}>
          {t(
            "pushed down & released — find T (g=9.8 m/s²)",
            "neeche dhakka de kar chhoda gaya — T nikaalo (g=9.8 m/s²)"
          )}
        </T>
      </Fade>

      {/* beat 2 — the trap, high emphasis */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <Draw
          on={beat >= 2}
          delay={dl(2, 0.3)}
          d="M 84 165 h 542 q 14 0 14 14 v 22 q 0 14 -14 14 h -542 q -14 0 -14 -14 v -22 q 0 -14 14 -14"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.1)}>
        <T x={355} y={195} size={16} fill={INK} weight={800}>
          {t(
            "no mass, density, or area needed — only h matters",
            "mass, density, ya area ki zaroorat nahi — sirf h maayne rakhta hai"
          )}
        </T>
      </Fade>

      {/* beat 3 — substitute */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={70} y={265} size={14} fill={INK} anchor="start" weight={700}>
          T=2π√(h/g)=2π√(0.16/9.8)
        </T>
      </Fade>

      {/* beat 4 — the numeric answer, high emphasis */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <Draw
          on={beat >= 4}
          delay={dl(4, 0.3)}
          d="M 84 300 h 332 q 14 0 14 14 v 32 q 0 14 -14 14 h -332 q -14 0 -14 -14 v -32 q 0 -14 14 -14"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.1)}>
        <T x={250} y={336} size={18} fill={INK} weight={800}>
          =2π(0.1278)≈0.80 s
        </T>
      </Fade>

      {/* beat 5 — the identical form */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={70} y={400} size={13} fill={INK} anchor="start" weight={700}>
          {t(
            "T=2π√(h/g) is identical in form to a pendulum of length h",
            "T=2π√(h/g) ka form bilkul length h ke pendulum jaisa hai"
          )}
        </T>
      </Fade>

      {/* beat 6 — the twin fact */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={70} y={430} size={13} fill={INK} anchor="start" weight={700}>
          {t(
            "floating body & pendulum of length=submerged depth keep same time",
            "floating body & length=submerged depth wala pendulum same time rakhte hain"
          )}
        </T>
      </Fade>

      {/* beat 7 — the closing lesson, high emphasis */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Draw
          on={beat >= 7}
          delay={dl(7, 0.3)}
          d="M 156 465 h 768 q 16 0 16 16 v 18 q 0 16 -16 16 h -768 q -16 0 -16 -16 v -18 q 0 -16 16 -16"
          stroke={AMBER_DARK}
          sw={2.4}
          dur={0.7}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={540} y={494} size={13} fill={INK} weight={700}>
          {t(
            "recognise the skeleton and the numbers fall out in one line",
            "skeleton pehchaano, numbers ek hi line mein nikal aate hain"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
