/**
 * M11 Ch04 · Section 24 — "Polar (trigonometric) form"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept.
 *
 * Continues the same worked point as Sec21/Sec23: z = 4+3i, r=5, θ=A=0.6435 rad
 * (36.87°, Q1) at board scale 40px/unit -> P=(700,260). The conjugate z̄ reuses
 * Sec23's Q4 mirror point (700,500) at angle -A — the SAME family of points,
 * now showing the polar-form + conjugate relationship on it.
 *
 * Beats (board_reveal_at_english [0, 10.24, 19.71, 31.23, 39.94, 54.53, 72.62, 81.41]):
 *  0 subtitle: writing z as r(cos + i sin)
 *  1 HERO formula: z = r(cosθ + i sinθ) = r cis θ
 *  2 THE DIAGRAM: axes, point z, radius arrow, angle arc, drop legs labeled
 *    "r cosθ" / "r sinθ" (= x, y to go back)
 *  3 guardrail (red-margin): standard polar uses a + between cos and sin
 *  4 text -> diagram: r(cosθ-isinθ) is NOT standard; add the conjugate point z̄
 *    at -θ (reflected across Re axis) to show the rewrite r(cos(-θ)+isin(-θ))
 *  5 caption: method — r, then α, then quadrant, then write it out
 *  6 formula chip: conjugate = r(cos(-θ) + i sin(-θ)) = r∠(-θ)
 *  7 caption: the conjugate keeps the same modulus, negates the argument
 *
 * Layout plan (origin CX=540 CY=380; axes xLeft330..xRight820 yTop240..yBottom540):
 *  b0 | subtitle (15,amber,w700)    | T mid | x540 y88
 *  b1 | hero chip                   | Chip  | x330..750 y100..146
 *  b2 | axes (no ticks)             | CartesianAxes | x330..820 y240..540
 *  b2 | Re/Im labels                | T st  | (805,395) (552,248)
 *  b2 | O dot, arrow O->z           | Draw  | (540,380)->(700,260)
 *  b2 | green leg + drop leg        | Draw  | (540,380)->(700,380)->(700,260)
 *  b2 | arc + θ label               | Draw/T| r50, label r75 mid .32175
 *  b2 | "r cosθ"/"r sinθ" labels    | T     | (620,398) (714,320)
 *  b3 | red bar + guardrail text    | Draw/T| x60 y168..202, (76,190)
 *  b4 | arrow O->z̄ (amber)          | Draw  | (540,380)->(700,500)
 *  b4 | mirror line extension       | Draw  | (700,380)->(700,500)
 *  b4 | "z" label + Overline (=z̄)   | T/Overline | (712,518)
 *  b5 | caption (13,amber_dark)     | T mid | x540 y560
 *  b6 | formula chip (conjugate)    | Chip  | x710..1030 y460..494
 *  b7 | caption (13,ink)            | T mid | x540 y585
 */

import React from "react";
import { Circle } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  arrowD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';
import { CartesianAxes, pointOnCircle, angleArcD, lineD, Overline } from "./math-kit";

const CX = 540;
const CY = 380;
const R = 200;
const THETA = 0.6435; // arctan(3/4), reused across Sec21/23/24
const Z = pointOnCircle(CX, CY, R, THETA);
const ZBAR = pointOnCircle(CX, CY, R, -THETA);
const FOOT = { x: Z.x, y: CY };
const ARC_LABEL = pointOnCircle(CX, CY, 75, THETA / 2);

export default function M11Ch04Sec24({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={22} fill={RED} anchor="middle" script>
          {t("Polar (Trigonometric) Form", "Polar (Trigonometric) Form")}
        </T>
      </Fade>

      {/* beat 0 — subtitle */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={88} size={15} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("Writing z as r(cos + i sin)", "z ko r(cos + i sin) ki tarah likhna")}
        </T>
      </Fade>

      {/* beat 1 — hero formula */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <Chip x={330} y={100} w={420} h={46} fill="#EEA31F" textFill={INK} size={18} script={false}>
          z = r(cosθ + i sinθ) = r cis θ
        </Chip>
      </Fade>

      {/* beat 2 — THE DIAGRAM */}
      <CartesianAxes on={beat >= 2} delay={dl(2, 0)} originX={CX} originY={CY} xLeft={330} xRight={820} yTop={240} yBottom={540} showTicks={false} />
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={805} y={395} size={13} fill={MUTED} anchor="start">Re</T>
        <T x={552} y={248} size={13} fill={MUTED} anchor="start">Im</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.35)}>
        <Circle cx={CX} cy={CY} r={3.5} fill={INK} />
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.55)} d={arrowD(CX, CY, Z.x, Z.y)} stroke={INK} sw={2.4} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 1.05)}>
        <T x={Z.x + 12} y={Z.y - 14} size={14} fill={INK} anchor="start" weight={700}>z</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.35)} d={lineD(CX, CY, FOOT.x, FOOT.y)} stroke={GREEN} sw={2.6} dur={0.4} />
      <Draw on={beat >= 2} delay={dl(2, 1.75)} d={lineD(FOOT.x, FOOT.y, Z.x, Z.y)} stroke={MUTED} sw={1.6} dur={0.4} />
      <Draw on={beat >= 2} delay={dl(2, 2.15)} d={angleArcD(CX, CY, 50, 0, THETA)} stroke={AMBER_DARK} sw={2} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 2.65)}>
        <T x={ARC_LABEL.x} y={ARC_LABEL.y} size={13} fill={AMBER_DARK} anchor="middle" weight={700}>θ</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3.0)}>
        <T x={620} y={398} size={13} fill={GREEN} anchor="middle" weight={700}>r cosθ</T>
        <T x={714} y={320} size={13} fill={INK} anchor="start" weight={700}>r sinθ</T>
      </Fade>

      {/* beat 3 — guardrail: standard uses a + */}
      <Draw on={beat >= 3} delay={dl(3, 0)} d="M 60 168 L 60 202" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <T x={76} y={190} size={16} fill={RED} anchor="start" weight={700}>
          {t("Standard polar form uses a + between cosine and sine.", "Standard polar form mein cosine aur sine ke beech + hota hai.")}
        </T>
      </Fade>

      {/* beat 4 — the conjugate point z̄ = r(cos(-θ) + i sin(-θ)) */}
      <Draw on={beat >= 4} delay={dl(4, 0)} d={arrowD(CX, CY, ZBAR.x, ZBAR.y)} stroke={AMBER_DARK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 4} delay={dl(4, 0.5)} d={lineD(FOOT.x, FOOT.y, ZBAR.x, ZBAR.y)} stroke={MUTED} sw={1.6} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 1.0)}>
        <T x={712} y={518} size={14} fill={INK} anchor="start" weight={700}>z</T>
      </Fade>
      <Overline on={beat >= 4} delay={dl(4, 1.0)} x={712} y={518} size={14} textWidth={10} anchor="start" />

      {/* beat 5 — the conversion method */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={540} y={560} size={13} fill={AMBER_DARK} anchor="middle">
          {t("Method: find r, then α, then place θ by quadrant, then write it out.", "Method: pehle r, phir α, phir θ ko quadrant se rakho, phir likho.")}
        </T>
      </Fade>

      {/* beat 6 — the conjugate formula */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <Chip x={710} y={460} w={320} h={34} fill="#FCF4E0" stroke={AMBER_DARK} textFill={INK} size={13} script={false}>
          conjugate = r(cos(-θ) + i sin(-θ)) = r∠(-θ)
        </Chip>
      </Fade>

      {/* beat 7 — closer */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <T x={540} y={585} size={13} fill={INK} anchor="middle">
          {t("The conjugate keeps the same modulus, and negates the argument.", "Conjugate same modulus rakhta hai, aur argument negate karta hai.")}
        </T>
      </Fade>
    </Scene>
  );
}
