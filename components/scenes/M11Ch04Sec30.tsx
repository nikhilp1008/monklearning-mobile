/**
 * M11 Ch04 · Section 30 — "Worked: powers via De Moivre"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples — subtopic 3 (The Argand Plane and Polar Representation).
 *
 * Beats (board_reveal_at_english [0, 8.19, 16.9, 30.63, 47.79, 59.39, 76.37, 91.82]):
 *  0 heading: big powers become one line
 *  1 text: write z=-√3+i in polar form, then find z⁶
 *  2 formula: r=√(3+1)=2, α=π/6 (Q II) ⇒ arg z=5π/6 — axes + point z plotted
 *  3 formula: z⁶=2⁶(cos6·5π/6+isin6·5π/6)=64(cos5π+isin5π)
 *  4 text: cos5π=-1, sin5π=0, so z⁶=-64 — z⁶ lands on the diagram (r grew,
 *    angle wrapped mod 2π back to the negative real axis) + boxed
 *  5 formula: (1+i)²⁰=(√2)²⁰(cos20π/4+isin20π/4) — second example, own column
 *  6 text: =2¹⁰(cos5π+isin5π)=1024·(-1)=-1024 — boxed
 *  7 guardrail (red-margin): polar + De Moivre beats the binomial theorem
 *
 * Layout plan (diagram c(540,350): z at r70/150°, z⁶ at r170/180° — the point
 * visibly grows and its swept angle reduces mod 2π back onto the -Re axis):
 *  b0 | subtitle (15,amber_dark,w700)   | T mid | x540 y90
 *  b1 | text line (15,ink)              | T mid | x540 y120
 *  b2 | formula line (15,ink)           | T mid | x540 y154
 *  b2 | axes c(540,350) x270..780 y195..420 | CartesianAxes (no ticks)
 *  b2 | arrow O→z, label "-√3 + i"      | Draw/T| θ=5π/6, r70
 *  b2 | arc 0→5π/6 r50 + "5π/6"         | Draw/T| r65 mid
 *  b3 | left-col formula (13,ink)       | T st  | x50 y480
 *  b4 | left-col chip (boxed)           | Chip  | x50..350 y500..534
 *  b4 | arrow O→z⁶, label "z⁶ = -64"    | Draw/T| θ=π, r170, GREEN
 *  b4 | full arc 0→π r130 + "5π ≡ π"    | Draw/T| (540,205)
 *  b5 | right-col formula (13,ink)      | T st  | x560 y480
 *  b6 | right-col chip (boxed)          | Chip  | x560..900 y500..534
 *  b7 | red bar + guardrail text        | Draw/T| x60 y562..594 / x76 y584
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
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { CartesianAxes, pointOnCircle, angleArcD } from "./math-kit";

const CX = 540;
const CY = 350;
const R_Z = 70;
const R_Z6 = 170;

const THETA_Z = (5 * Math.PI) / 6; // 150°
const THETA_Z6 = Math.PI; // 180° — 5π reduced mod 2π

const Z = pointOnCircle(CX, CY, R_Z, THETA_Z);
const Z6 = pointOnCircle(CX, CY, R_Z6, THETA_Z6);

const ARC_Z_LABEL = pointOnCircle(CX, CY, 65, THETA_Z / 2);
const ARC_Z6_LABEL = pointOnCircle(CX, CY, 145, Math.PI / 2);

export default function M11Ch04Sec30({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={22} fill={RED} anchor="middle" script>
          {t("Worked: Powers via De Moivre", "Worked: De Moivre se Powers")}
        </T>
      </Fade>

      {/* beat 0 — subtitle */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={90} size={15} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("Big powers become one line", "Bade powers ek line mein")}
        </T>
      </Fade>

      {/* beat 1 — the task */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={120} size={15} fill={INK} anchor="middle">
          {t(
            "Write z = -√3 + i in polar form, then find z⁶.",
            "z = -√3 + i ko polar form mein likho, phir z⁶ nikaalo."
          )}
        </T>
      </Fade>

      {/* beat 2 — r, α, arg z + plot z */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={540} y={154} size={15} fill={INK} anchor="middle">r = √(3 + 1) = 2,  α = π/6 (Q II)  ⇒  arg z = 5π/6</T>
      </Fade>
      <CartesianAxes on={beat >= 2} delay={dl(2, 0.4)} originX={CX} originY={CY} xLeft={270} xRight={780} yTop={195} yBottom={420} showTicks={false} />
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <Circle cx={CX} cy={CY} r={3.5} fill={INK} />
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.9)} d={arrowD(CX, CY, Z.x, Z.y)} stroke={INK} sw={2.4} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 1.4)}>
        <T x={Z.x - 14} y={Z.y - 10} size={14} fill={INK} anchor="end" weight={700}>-√3 + i</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.8)} d={angleArcD(CX, CY, 50, 0, THETA_Z)} stroke={AMBER_DARK} sw={2} dur={0.7} />
      <Fade on={beat >= 2} delay={dl(2, 2.5)}>
        <T x={ARC_Z_LABEL.x} y={ARC_Z_LABEL.y} size={13} fill={AMBER_DARK} anchor="middle" weight={700}>5π/6</T>
      </Fade>

      {/* beat 3 — z⁶ expression (left column) */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={50} y={480} size={13} fill={INK} anchor="start">
          z⁶ = 2⁶(cos 6·5π/6 + i sin 6·5π/6) = 64(cos 5π + i sin 5π)
        </T>
      </Fade>

      {/* beat 4 — simplify to z⁶ = -64, land it on the diagram */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <Chip x={50} y={500} w={330} h={34} fill={CREAM} stroke={GREEN} textFill={INK} size={13} script={false}>
          cos 5π = -1, sin 5π = 0  ⇒  z⁶ = -64
        </Chip>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 0.4)} d={arrowD(CX, CY, Z6.x, Z6.y)} stroke={GREEN} sw={2.6} dur={0.7} />
      <Fade on={beat >= 4} delay={dl(4, 1.1)}>
        <T x={Z6.x - 14} y={Z6.y - 10} size={14} fill={GREEN} anchor="end" weight={700}>z⁶ = -64</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1.5)} d={angleArcD(CX, CY, 130, 0, THETA_Z6)} stroke={MUTED} sw={1.6} dur={0.8} />
      <Fade on={beat >= 4} delay={dl(4, 2.3)}>
        <T x={ARC_Z6_LABEL.x} y={ARC_Z6_LABEL.y} size={13} fill={AMBER_DARK} anchor="middle" weight={700}>5π ≡ π (mod 2π)</T>
      </Fade>

      {/* beat 5 — second example (right column) */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={560} y={480} size={13} fill={INK} anchor="start">
          (1+i)²⁰ = (√2)²⁰(cos 20π/4 + i sin 20π/4)
        </T>
      </Fade>

      {/* beat 6 — second answer boxed */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <Chip x={560} y={500} w={340} h={34} fill={CREAM} stroke={GREEN} textFill={INK} size={13} script={false}>
          = 2¹⁰(cos 5π + i sin 5π) = 1024·(-1) = -1024
        </Chip>
      </Fade>

      {/* beat 7 — guardrail */}
      <Draw on={beat >= 7} delay={dl(7, 0.1)} d="M 60 562 L 60 594" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={76} y={584} size={16} fill={RED} anchor="start" weight={700}>
          {t(
            "Polar + De Moivre beats the binomial theorem — every time.",
            "Polar + De Moivre binomial theorem ko har baar beat karta hai."
          )}
        </T>
      </Fade>
    </Scene>
  );
}
