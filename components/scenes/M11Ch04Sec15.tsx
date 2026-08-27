/**
 * M11 Ch04 · Section 15 — "Triangle inequality & parallelogram identity"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept. No conjugate here — pure modulus, no Overline needed.
 *
 * Beats (board_reveal_at_english [0, 9.13, 18.6, 30.12, 39.94, 54.1, 61.7, 75.43]):
 *  0 anchor: heading "how moduli behave under addition"
 *  1 represent: formula |z1+z2| ≤ |z1|+|z2|
 *  2 guardrail (red-margin): modulus does NOT distribute over a sum
 *  3 explain: equality only when z1, z2 point the same way
 *  4 THE DIAGRAM: vector triangle — O→z1, z1→z1+z2, O→z1+z2 (the direct/shorter path)
 *  5 formula: ||z1|-|z2|| ≤ |z1-z2|  (companion lower bound)
 *  6 formula: |z1+z2|²+|z1-z2|² = 2(|z1|²+|z2|²)  (parallelogram identity)
 *  7 explain: the two diagonals and two sides are locked together
 *
 * Layout plan:
 *  b0 | heading (16,amber_dark,w700)      | T mid  | x540  y92
 *  b1 | formula (22,ink,w700)             | T mid  | x540  y130
 *  b2 | red bar + guardrail (16,red,w700) | Draw+T | x60 y162..192, text x76 y178
 *  b3 | explain (15,ink)                  | T mid  | x540  y228
 *  b4 | O dot + label                     | circle/T | (150,430)
 *  b4 | arrow O→z1 (ink), label z1        | Draw/T | (150,430)→(400,340), label (269,368)
 *  b4 | arrow z1→z1+z2 (green), label z2  | Draw/T | (400,340)→(620,270), label (505,288)
 *  b4 | arrow O→z1+z2 (amber, direct)     | Draw/T | (150,430)→(620,270), label (391,369)
 *  b5 | formula (18,ink,w700)             | T mid  | x540  y500
 *  b6 | formula (17,ink,w700)             | T mid  | x540  y535
 *  b7 | explain (14,ink)                  | T mid  | x540  y568
 */

import React from "react";
import { Circle } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, arrowD, INK, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch04Sec15({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const O = { x: 150, y: 430 };
  const Z1 = { x: 400, y: 340 };
  const Z12 = { x: 620, y: 270 };

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={22} fill={RED} anchor="middle" script>
          {t("Triangle Inequality & Parallelogram Identity", "Triangle Inequality & Parallelogram Identity")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={92} size={16} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("How moduli behave under addition", "Addition ke under moduli kaise behave karte hain")}
        </T>
      </Fade>

      {/* beat 1 — represent */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={130} size={22} fill={INK} anchor="middle" weight={700}>
          |z₁ + z₂| ≤ |z₁| + |z₂|
        </T>
      </Fade>

      {/* beat 2 — guardrail */}
      <Draw on={beat >= 2} delay={dl(2, 0.1)} d="M 60 162 L 60 192" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={76} y={178} size={16} fill={RED} anchor="start" weight={700}>
          {t("Modulus does NOT distribute over a sum — only ≤ holds!", "Modulus sum par distribute NAHI karta — sirf ≤ chalta hai!")}
        </T>
      </Fade>

      {/* beat 3 — explain */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={540} y={228} size={15} fill={INK} anchor="middle">
          {t("Equality only when z₁, z₂ point the same way.", "Equality tabhi jab z₁, z₂ same direction mein ho.")}
        </T>
      </Fade>

      {/* beat 4 — THE DIAGRAM: vector triangle */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <Circle cx={O.x} cy={O.y} r={3.5} fill={INK} />
        <T x={O.x - 14} y={O.y + 8} size={14} fill={INK} anchor="middle" weight={700}>O</T>
      </Fade>

      <Draw on={beat >= 4} delay={dl(4, 0.4)} d={arrowD(O.x, O.y, Z1.x, Z1.y)} stroke={INK} sw={2.4} dur={0.6} />
      <Fade on={beat >= 4} delay={dl(4, 1.1)}>
        <T x={269} y={368} size={15} fill={INK} anchor="middle" weight={700}>z₁</T>
      </Fade>

      <Draw on={beat >= 4} delay={dl(4, 1.5)} d={arrowD(Z1.x, Z1.y, Z12.x, Z12.y)} stroke={GREEN} sw={2.4} dur={0.6} />
      <Fade on={beat >= 4} delay={dl(4, 2.2)}>
        <T x={505} y={288} size={15} fill={GREEN} anchor="middle" weight={700}>z₂</T>
      </Fade>

      <Draw on={beat >= 4} delay={dl(4, 2.6)} d={arrowD(O.x, O.y, Z12.x, Z12.y)} stroke={AMBER_DARK} sw={2.2} dur={0.6} />
      <Fade on={beat >= 4} delay={dl(4, 3.3)}>
        <T x={391} y={369} size={14} fill={AMBER_DARK} anchor="middle" weight={700}>z₁ + z₂</T>
      </Fade>

      {/* beat 5 — companion lower bound */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={540} y={500} size={18} fill={INK} anchor="middle" weight={700}>
          ||z₁| - |z₂|| ≤ |z₁ - z₂|
        </T>
      </Fade>

      {/* beat 6 — parallelogram identity */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={540} y={535} size={17} fill={INK} anchor="middle" weight={700}>
          |z₁ + z₂|² + |z₁ - z₂|² = 2(|z₁|² + |z₂|²)
        </T>
      </Fade>

      {/* beat 7 — explain */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <T x={540} y={568} size={14} fill={INK} anchor="middle">
          {t("The two diagonals and two sides are locked together.", "Do diagonals aur do sides rigidly locked hain.")}
        </T>
      </Fade>
    </Scene>
  );
}
