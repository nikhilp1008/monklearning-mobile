/**
 * Ch13 · Section 54 — "Worked example (JEE Main): mercury in a U-tube"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 6.53, 20.36, 29.57, 38.41, 51.08, 61.83, 74.12]):
 *  0 shelf
 *  1 U-tube has mercury, total column length = 1.0 m; displace & release, find T (g=9.8)
 *  2 T=2π√(L/2g)=2π√(1.0/19.6)
 *  3 hero (high): =2π(0.2259)≈1.42 s
 *  4 hero (high): use the TOTAL length L, not the length in one arm
 *  5 period independent of density — mercury, water, oil give same answer
 *  6 restoring force & inertia both scale with density ⇒ cancels
 *  7 hero (high): column length and g alone set the period
 *
 * Layout plan (Anek bl−0.78s..+0.31s), text-only (no diagram event this section):
 *  b0 | shelf y80 x60..1020
 *  b1 | st x70 bl110 size13 · st x70 bl142 size13
 *  b2 | st x70 bl180 size14
 *  b3 | box x70..430 y210..265 rx14 · line cx250 bl244 size18
 *  b4 | box x70..620 y295..345 rx14 · line cx345 bl325 size15
 *  b5 | st x70 bl385 size13
 *  b6 | st x70 bl415 size13
 *  b7 | box x140..940 y450..500 rx16 · line cx540 bl480 size13
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

export default function Ch13Sec54({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={52} size={19} fill={INK} script>
          {t("Total column length, and density cancels", "Total column length, aur density cancel hoti hai")}
        </T>
      </Fade>

      {/* beat 0 — the shelf */}
      <Draw on={beat >= 0} delay={dl(0, 0.3)} d="M 60 80 L 1020 80" stroke={INK} sw={1.4} dur={0.6} />

      {/* beat 1 — the given data */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={70} y={110} size={13} fill={INK} anchor="start" weight={700}>
          {t(
            "U-tube has mercury, total column length = 1.0 m",
            "U-tube mein mercury hai, total column length = 1.0 m"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={70} y={142} size={13} fill={INK} anchor="start" weight={700}>
          {t(
            "displace slightly & release — find T (g=9.8 m/s²)",
            "thoda displace karke chhoda gaya — T nikaalo (g=9.8 m/s²)"
          )}
        </T>
      </Fade>

      {/* beat 2 — substitute */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={70} y={180} size={14} fill={INK} anchor="start" weight={700}>
          T=2π√(L/2g)=2π√(1.0/19.6)
        </T>
      </Fade>

      {/* beat 3 — the numeric answer, high emphasis */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <Draw
          on={beat >= 3}
          delay={dl(3, 0.3)}
          d="M 84 210 h 332 q 14 0 14 14 v 27 q 0 14 -14 14 h -332 q -14 0 -14 -14 v -27 q 0 -14 14 -14"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.1)}>
        <T x={250} y={244} size={18} fill={INK} weight={800}>
          =2π(0.2259)≈1.42 s
        </T>
      </Fade>

      {/* beat 4 — the length trap, high emphasis */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <Draw
          on={beat >= 4}
          delay={dl(4, 0.3)}
          d="M 84 295 h 522 q 14 0 14 14 v 22 q 0 14 -14 14 h -522 q -14 0 -14 -14 v -22 q 0 -14 14 -14"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.1)}>
        <T x={345} y={325} size={15} fill={INK} weight={800}>
          {t(
            "use the TOTAL length L, not the length in one arm",
            "TOTAL length L use karo, na ki ek arm ki length"
          )}
        </T>
      </Fade>

      {/* beat 5 — density independence */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={70} y={385} size={13} fill={INK} anchor="start" weight={700}>
          {t(
            "period independent of density — mercury, water, oil give same answer",
            "period density se independent hai — mercury, water, oil same answer dete hain"
          )}
        </T>
      </Fade>

      {/* beat 6 — why it cancels */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={70} y={415} size={13} fill={INK} anchor="start" weight={700}>
          {t(
            "restoring force & inertia both scale with density ⇒ cancels",
            "restoring force & inertia dono density ke saath scale karte hain ⇒ cancel"
          )}
        </T>
      </Fade>

      {/* beat 7 — the closing lesson, high emphasis */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Draw
          on={beat >= 7}
          delay={dl(7, 0.3)}
          d="M 156 450 h 768 q 16 0 16 16 v 18 q 0 16 -16 16 h -768 q -16 0 -16 -16 v -18 q 0 -16 16 -16"
          stroke={AMBER_DARK}
          sw={2.4}
          dur={0.7}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={540} y={480} size={13} fill={INK} weight={700}>
          {t(
            "column length and g alone set the period",
            "column length aur g akele period tay karte hain"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
