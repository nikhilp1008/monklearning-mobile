/**
 * M11 Ch08 · Section 60 — "Sum to infinity using the compact formula"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type=worked_examples.
 *
 * Math check: a=1,d=1,r=1/3. 1/(1-1/3)=1/(2/3)=3/2. (1/3)/(1-1/3)²=
 * (1/3)/(2/3)²=(1/3)/(4/9)=(1/3)(9/4)=3/4. S_∞=3/2+3/4=6/4+3/4=9/4 ✓.
 *
 * Beats (en [0, 11.43, 28.76, 37.38, 43.18, 55.3, 60.42]):
 *  0 title (always-on)
 *  1 formula: a, d, r
 *  2 formula: the S_infinity formula
 *  3 formula: first term evaluated
 *  4 formula: second term evaluated
 *  5 formula: the sum
 *  6 red-margin: check |r|<1 first
 *
 * Layout plan:
 *  b1 | text bl100 cx540
 *  b2 | text bl132 cx540
 *  b3 | text bl165 cx540
 *  b4 | text bl198 cx540
 *  b5 | text bl233 cx540 (bold)
 *  b6 | red bar x76 y258..328 · text bl278/318 x96
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch08Sec60({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={20} fill={INK} anchor="middle" script>
          {t("Sum to infinity: 1 + 2/3 + 3/3² + 4/3³ + …", "Sum to infinity: 1 + 2/3 + 3/3² + 4/3³ + …")}
        </T>
      </Fade>

      {/* beat 1 — a, d, r */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={540} y={100} size={16} fill={INK} anchor="middle">
          {"a = 1,   d = 1,   r = 1/3   (|r| < 1)"}
        </T>
      </Fade>

      {/* beat 2 — the formula */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={540} y={132} size={16} fill={INK} anchor="middle">
          {"S_∞ = a/(1-r) + dr/(1-r)²"}
        </T>
      </Fade>

      {/* beat 3 — first term */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={165} size={17} fill={INK} anchor="middle">
          {"1/(1-1/3) = 3/2"}
        </T>
      </Fade>

      {/* beat 4 — second term */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={198} size={17} fill={INK} anchor="middle">
          {"(1/3)/(1-1/3)² = (1/3)/(4/9) = 3/4"}
        </T>
      </Fade>

      {/* beat 5 — the sum */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={233} size={18} fill={AMBER_DARK} anchor="middle" weight={700}>
          {"S_∞ = 3/2 + 3/4 = 9/4"}
        </T>
      </Fade>

      {/* beat 6 — red-margin: check |r|<1 first */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 76 258 v 70" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={96} y={278} size={15} fill={RED} anchor="start" script>
          {t("check |r| < 1 first, then plug", "pehle |r| < 1 check karo, phir")}
        </T>
        <T x={96} y={318} size={15} fill={RED} anchor="start" script>
          {t("into the two-term S_∞", "two-term S_∞ mein daalo")}
        </T>
      </Fade>
    </Scene>
  );
}
