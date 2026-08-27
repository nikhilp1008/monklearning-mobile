/**
 * M11 Ch04 · Section 14 — "The modulus: distance from the origin"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept.
 *
 * Beats (board_reveal_at_english [0, 7.42, 15.27, 29.35, 44.37, 60.5, 71.68, 80.04]):
 *  0 anchor: heading "modulus: as the crow flies"
 *  1 represent: formula |z| = √(a²+b²) ≥ 0
 *  2 THE DIAGRAM: right triangle on the Argand plane — legs a, b; hypotenuse |z|
 *  3 guardrail (red-margin): never write |z| = ±z
 *  4 represent: |z|=|z̄|=|-z|, |z1z2|=|z1||z2|, |zⁿ|=|z|ⁿ (right column)
 *  5 explain: modulus is multiplicative
 *  6 formula: |Re(z)|≤|z|, |Im(z)|≤|z|
 *  7 explain: obvious from the right triangle — neither leg beats the hypotenuse
 *
 * Layout plan:
 *  b0 | heading (16,amber_dark,w700)      | T mid  | x540  y92
 *  b1 | formula (24,ink,w700)             | T mid  | x540  y135
 *  b2 | axes c(480,380) 330..650/290..460 | CartesianAxes (no ticks)
 *  b2 | Re/Im labels (13, muted)          | T st   | (632,398) (492,298)
 *  b2 | hypotenuse O→z, dot, label "z"    | Draw/T | (480,380)→(570,325)
 *  b2 | leg "a" (amber, along real axis)  | Draw/T | (480,380)→(570,380), label y404
 *  b2 | leg "b" (amber, vertical)         | Draw/T | (570,380)→(570,325), label x588
 *  b2 | right-angle marker + "|z|" label  | Draw/T | foot(570,380); label (514,334)
 *  b2 | caption (14,amber_dark,script)    | T mid  | x490  y496
 *  b3 | red bar + guardrail (15,red,w700) | Draw+T | x700 y282..314, text x716 y300
 *  b4 | 3 formula lines (16,ink,w700)     | T st   | x696  y352/387/422 (Overline #1)
 *  b5 | explain (14,ink)                  | T st   | x696  y460
 *  b6 | formula (16,ink,w700)             | T st   | x696  y500
 *  b7 | explain (14,ink)                  | T st   | x696  y540
 */

import React from "react";
import { Circle } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';
import { CartesianAxes, lineD, Overline } from "./math-kit";

export default function M11Ch04Sec14({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const O = { x: 480, y: 380 };
  const Z = { x: 570, y: 325 };
  const FOOT = { x: 570, y: 380 };

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={22} fill={RED} anchor="middle" script>
          {t("The Modulus: Distance from the Origin", "Modulus: Origin se Doori")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={92} size={16} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("Modulus: 'as the crow flies'", "Modulus: 'seedha fasla, jaise chidiya udti hai'")}
        </T>
      </Fade>

      {/* beat 1 — represent: the formula */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={135} size={24} fill={INK} anchor="middle" weight={700}>
          |z| = √(a² + b²) ≥ 0
        </T>
      </Fade>

      {/* beat 2 — THE DIAGRAM: right triangle, legs a/b, hypotenuse |z| */}
      <CartesianAxes on={beat >= 2} delay={dl(2, 0)} originX={O.x} originY={O.y} xLeft={330} xRight={650} yTop={290} yBottom={460} showTicks={false} />
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={632} y={398} size={13} fill={MUTED} anchor="start">Re</T>
        <T x={492} y={298} size={13} fill={MUTED} anchor="start">Im</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <Circle cx={O.x} cy={O.y} r={3.5} fill={INK} />
      </Fade>

      <Draw on={beat >= 2} delay={dl(2, 0.6)} d={lineD(O.x, O.y, Z.x, Z.y)} stroke={INK} sw={2.4} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 1.0)}>
        <Circle cx={Z.x} cy={Z.y} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.1)}>
        <T x={Z.x + 10} y={Z.y - 6} size={16} fill={INK} anchor="start" weight={700}>z</T>
      </Fade>

      <Draw on={beat >= 2} delay={dl(2, 1.4)} d={lineD(O.x, O.y, FOOT.x, FOOT.y)} stroke={AMBER} sw={3} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 1.8)}>
        <T x={525} y={404} size={15} fill={AMBER_DARK} anchor="middle" weight={700}>a</T>
      </Fade>

      <Draw on={beat >= 2} delay={dl(2, 2.0)} d={lineD(FOOT.x, FOOT.y, Z.x, Z.y)} stroke={AMBER} sw={3} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 2.4)}>
        <T x={588} y={357} size={15} fill={AMBER_DARK} anchor="start" weight={700}>b</T>
      </Fade>

      <Draw on={beat >= 2} delay={dl(2, 2.6)} d={`M ${FOOT.x} ${FOOT.y - 8} L ${FOOT.x - 8} ${FOOT.y - 8} L ${FOOT.x - 8} ${FOOT.y}`} stroke={INK} sw={1.4} dur={0.3} />
      <Fade on={beat >= 2} delay={dl(2, 2.9)}>
        <T x={514} y={334} size={15} fill={INK} anchor="middle" weight={700}>|z|</T>
      </Fade>

      <Fade on={beat >= 2} delay={dl(2, 3.3)}>
        <T x={490} y={496} size={14} fill={AMBER_DARK} anchor="middle" script>
          {t("Pythagoras on the grid.", "Grid par Pythagoras.")}
        </T>
      </Fade>

      {/* beat 3 — guardrail */}
      <Draw on={beat >= 3} delay={dl(3, 0.1)} d="M 700 282 L 700 314" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={716} y={300} size={15} fill={RED} anchor="start" weight={700}>
          {t("Never write |z| = ±z — it's always ≥ 0!", "Kabhi |z|=±z mat likho — hamesha ≥0 hai!")}
        </T>
      </Fade>

      {/* beat 4 — represent: three toolkit identities (right column) */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={696} y={352} size={16} fill={INK} anchor="start" weight={700}>|z| = |</T>
        <T x={760} y={352} size={16} fill={INK} anchor="start" weight={700}>z</T>
        <T x={770} y={352} size={16} fill={INK} anchor="start" weight={700}>| = |-z|</T>
      </Fade>
      <Overline on={beat >= 4} delay={dl(4, 0.3)} x={760} y={352} size={16} textWidth={9.6} anchor="start" stroke={INK} />
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={696} y={387} size={16} fill={INK} anchor="start" weight={700}>|z₁z₂| = |z₁||z₂|</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.0)}>
        <T x={696} y={422} size={16} fill={INK} anchor="start" weight={700}>|zⁿ| = |z|ⁿ</T>
      </Fade>

      {/* beat 5 — explain */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={696} y={460} size={14} fill={INK} anchor="start">
          {t("Modulus is multiplicative — factor by factor.", "Modulus multiplicative — factor by factor.")}
        </T>
      </Fade>

      {/* beat 6 — formula: coordinate bounds */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={696} y={500} size={16} fill={INK} anchor="start" weight={700}>|Re(z)| ≤ |z|,  |Im(z)| ≤ |z|</T>
      </Fade>

      {/* beat 7 — explain */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <T x={696} y={540} size={14} fill={INK} anchor="start">
          {t("Neither leg is longer than the hypotenuse.", "Koi bhi leg hypotenuse se lambi nahi hoti.")}
        </T>
      </Fade>
    </Scene>
  );
}
