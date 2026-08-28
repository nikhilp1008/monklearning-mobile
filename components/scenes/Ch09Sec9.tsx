/**
 * Ch09 · Section 9 — "The hydraulic car lift" (worked example)
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en reveals [0, 6.49, 7.49, 8.49, 9.49, 10.49, 11.49, 12.49, 20.42, 27.93]):
 *  0 title (always-on)
 *  1 two circles (r₁=2cm, r₂=20cm) drawn to scale, connected
 *  2 "car, 1200 kg" sits on the big piston
 *  3 output force must equal the car weight
 *  4 formula F₂ = mg = 1200×10 = 1.2×10⁴ N
 *  5 formula A₂/A₁ = (20/2)² = 100
 *  6 formula F₁ = F₂/100 = 120 N
 *  7 (b) same volume ⇒ input piston moves 100× farther
 *  8 formula h₁ = h₂×100 = 5 m
 *  9 red-margin note: energy check 120×5 = 600 J = 12000×0.05
 *
 * Layout plan — diagram at top (y88..220), calc rows x480 spaced 48px from y250:
 *  b1 | small circle r10       | circle | c(300,150)
 *  b1 | "r₁ = 2 cm" (12)       | T mid  | y182
 *  b1 | big circle r40         | circle | c(750,150)
 *  b1 | "r₂ = 20 cm" (12)      | T mid  | y210
 *  b1 | connector (dashed)     | line   | x310..710 y150
 *  b2 | "car, 1200 kg" (13)    | T mid  | x714..786 y85..99 (bl 95)
 *  b3 | text (14, muted)       | T st   | x480.. bl 250
 *  b4 | formula (17, w700)     | T st   | x480.. bl 298
 *  b5 | formula (17, w700)     | T st   | x480.. bl 346
 *  b6 | formula (17, w700)     | T st   | x480.. bl 394
 *  b7 | text (14, muted)       | T st   | x480.. bl 442
 *  b8 | formula (17, w700)     | T st   | x480.. bl 490
 *  b9 | margin bar (red)       | Draw   | x460  y526..550
 *  b9 | note (script 14, red)  | T st   | x476.. bl 538
 */

import React from "react";
import { Circle, Line } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch09Sec9({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={24} fill={RED} script>
          {t("JEE Main: hydraulic car lift", "JEE Main: hydraulic car lift")}
        </T>
      </Fade>

      {/* beat 1 — two pistons, to scale */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <Circle cx={300} cy={150} r={10} fill="none" stroke={INK} strokeWidth={2} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={300} y={182} size={12} fill={MUTED} anchor="middle">
          r₁ = 2 cm
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <Circle cx={750} cy={150} r={40} fill="none" stroke={INK} strokeWidth={2} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.6)}>
        <T x={750} y={210} size={12} fill={MUTED} anchor="middle">
          r₂ = 20 cm
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.2)}>
        <Line x1={310} y1={150} x2={710} y2={150} stroke={MUTED} strokeWidth={1.4} strokeDasharray="5 4" />
      </Fade>

      {/* beat 2 — a car sits on the big piston */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={750} y={95} size={13} fill={MUTED} script anchor="middle">
          {t("car, 1200 kg", "car, 1200 kg")}
        </T>
      </Fade>

      {/* beat 3 — force balance */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={480} y={250} size={14} fill={MUTED} script anchor="start">
          {t("output force must equal the car's weight", "output force = car ka weight")}
        </T>
      </Fade>

      {/* beat 4 */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={480} y={298} size={17} fill={INK} weight={700} anchor="start">
          F₂ = mg = 1200 × 10 = 1.2×10⁴ N
        </T>
      </Fade>

      {/* beat 5 */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={480} y={346} size={17} fill={INK} weight={700} anchor="start">
          A₂ / A₁ = (20/2)² = 100
        </T>
      </Fade>

      {/* beat 6 */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={480} y={394} size={17} fill={INK} weight={700} anchor="start">
          F₁ = F₂ / 100 = 120 N
        </T>
      </Fade>

      {/* beat 7 */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={480} y={442} size={14} fill={MUTED} script anchor="start">
          {t(
            "(b) same volume ⇒ input piston moves 100× farther",
            "(b) same volume ⇒ input piston 100× zyada chalta"
          )}
        </T>
      </Fade>

      {/* beat 8 */}
      <Fade on={beat >= 8} delay={dl(8, 0.3)}>
        <T x={480} y={490} size={17} fill={INK} weight={700} anchor="start">
          h₁ = h₂ × 100 = 5 m
        </T>
      </Fade>

      {/* beat 9 — energy check */}
      <Draw on={beat >= 9} delay={dl(9, 0.2)} d="M 460 526 L 460 550" stroke={RED} sw={3.2} dur={0.4} />
      <Fade on={beat >= 9} delay={dl(9, 0.5)}>
        <T x={476} y={538} size={14} fill={RED} script anchor="start">
          {t("energy check: 120×5 = 600 J = 12000×0.05", "energy check: 120×5 = 600 J = 12000×0.05")}
        </T>
      </Fade>
    </Scene>
  );
}
