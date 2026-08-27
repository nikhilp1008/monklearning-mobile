/**
 * M11 Ch04 · Section 26 — "De Moivre's theorem and cube roots of unity"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept — FLAGGED, real geometry (equilateral triangle), extra eye-check.
 *
 * Cube roots of unity plotted at exact angles 0°, 120° (2π/3), 240° (4π/3) on a
 * circle of radius R=165 centered (540,390) — a genuine equilateral triangle,
 * matching the JSON's own reference svg (1 at right, ω upper-left, ω² lower-left).
 * No full Cartesian axes here (the source diagram doesn't use them either) — just
 * the circle, the triangle, and the three position-vector arrows from O.
 *
 * Beats (board_reveal_at_english [0, 8.19, 21.08, 35.41, 49.07, 59.9, 74.24, 81.75]):
 *  0 subtitle: powers by angle-multiplication
 *  1 HERO formula: (cosθ+isinθ)ⁿ = cos nθ + i sin nθ
 *  2 text: zⁿ = rⁿ(cos nθ + i sin nθ) — raise modulus, multiply angle
 *  3 text: makes powers trivial, far faster than binomial theorem
 *  4 THE DIAGRAM: circle, equilateral triangle, O->1, O->ω, O->ω², 120° arc
 *  5 formula chip: ω = cos(2π/3) + i sin(2π/3) = -1/2 + (√3/2)i
 *  6 formula chip (HERO): ω³ = 1,  1 + ω + ω² = 0
 *  7 caption: equally spaced, 120° apart — sum to zero
 *
 * Layout plan (circle center CX=540 CY=390 R=165):
 *  b0 | subtitle (15,amber,w700)  | T mid | x540 y88
 *  b1 | hero chip                 | Chip  | x270..810 y104..146
 *  b2 | text (14,ink)             | T mid | x540 y168
 *  b3 | text (14,ink)             | T mid | x540 y191
 *  b4 | circle (muted)            | Draw  | c(540,390) r165
 *  b4 | triangle 1-ω-ω²           | Draw  | amber_dark
 *  b4 | O dot + label             | circle/T | (540,390)
 *  b4 | arrow O->1, dot, label    | Draw/T   | (705,390)
 *  b4 | arrow O->ω, dot, label    | Draw/T   | (457.5,247.1)
 *  b4 | arrow O->ω², dot, label   | Draw/T   | (457.5,532.9)
 *  b4 | 120° arc + label          | Draw/T   | r50, label r65 mid π/3 -> (573,334)
 *  b5 | formula chip              | Chip  | x760..1040 y270..304
 *  b6 | formula chip (hero)       | Chip  | x760..1040 y320..356
 *  b7 | caption (12,amber_dark)   | T st  | x760 y410
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
import { circleD, pointOnCircle, angleArcD } from "./math-kit";

const CX = 540;
const CY = 390;
const R = 165;
const ONE = pointOnCircle(CX, CY, R, 0);
const OMEGA = pointOnCircle(CX, CY, R, (2 * Math.PI) / 3);
const OMEGA2 = pointOnCircle(CX, CY, R, (4 * Math.PI) / 3);
const ARC_LABEL = pointOnCircle(CX, CY, 65, Math.PI / 3); // clears both the r50 arc and the 1-ω chord (chord sits at radius 82.5 from O)
const TRIANGLE_D = `M ${ONE.x} ${ONE.y} L ${OMEGA.x} ${OMEGA.y} L ${OMEGA2.x} ${OMEGA2.y} Z`;

export default function M11Ch04Sec26({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={22} fill={RED} anchor="middle" script>
          {t("De Moivre's Theorem and Cube Roots of Unity", "De Moivre's Theorem aur Cube Roots of Unity")}
        </T>
      </Fade>

      {/* beat 0 — subtitle */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={88} size={15} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("Powers by angle-multiplication", "Powers, angle-multiplication se")}
        </T>
      </Fade>

      {/* beat 1 — hero formula */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <Chip x={270} y={104} w={540} h={42} fill="#EEA31F" textFill={INK} size={17} script={false}>
          (cosθ + i sinθ)ⁿ = cos nθ + i sin nθ
        </Chip>
      </Fade>

      {/* beat 2 — general corollary */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={540} y={168} size={14} fill={INK} anchor="middle">
          {t(
            "So zⁿ = rⁿ(cos nθ + i sin nθ) — raise the modulus, multiply the angle.",
            "To zⁿ = rⁿ(cos nθ + i sin nθ) — modulus raise, angle multiply."
          )}
        </T>
      </Fade>

      {/* beat 3 — trivial vs binomial */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={540} y={191} size={14} fill={INK} anchor="middle" weight={700}>
          {t("This makes powers trivial — far faster than the binomial theorem.", "Isse powers trivial ho jaate hain — binomial theorem se kahin fast.")}
        </T>
      </Fade>

      {/* beat 4 — THE DIAGRAM: cube roots of unity */}
      <Draw on={beat >= 4} delay={dl(4, 0)} d={circleD(CX, CY, R)} stroke={MUTED} sw={1.6} dur={0.8} />
      <Draw on={beat >= 4} delay={dl(4, 0.5)} d={TRIANGLE_D} stroke={AMBER_DARK} sw={1.8} dur={0.8} />
      <Fade on={beat >= 4} delay={dl(4, 0.9)}>
        <Circle cx={CX} cy={CY} r={3} fill={INK} />
      </Fade>

      <Draw on={beat >= 4} delay={dl(4, 1.1)} d={arrowD(CX, CY, ONE.x, ONE.y)} stroke={INK} sw={2.4} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <Circle cx={ONE.x} cy={ONE.y} r={4} fill={INK} />
        <T x={717} y={394} size={14} fill={INK} anchor="start" weight={700}>1</T>
      </Fade>

      <Draw on={beat >= 4} delay={dl(4, 1.9)} d={arrowD(CX, CY, OMEGA.x, OMEGA.y)} stroke={GREEN} sw={2.4} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 2.3)}>
        <Circle cx={OMEGA.x} cy={OMEGA.y} r={4} fill={GREEN} />
        <T x={444} y={237} size={14} fill={GREEN} anchor="end" weight={700}>ω</T>
      </Fade>

      <Draw on={beat >= 4} delay={dl(4, 2.7)} d={arrowD(CX, CY, OMEGA2.x, OMEGA2.y)} stroke={AMBER_DARK} sw={2.4} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 3.1)}>
        <Circle cx={OMEGA2.x} cy={OMEGA2.y} r={4} fill={AMBER_DARK} />
        <T x={444} y={549} size={14} fill={AMBER_DARK} anchor="end" weight={700}>ω²</T>
      </Fade>

      <Draw on={beat >= 4} delay={dl(4, 3.5)} d={angleArcD(CX, CY, 50, 0, (2 * Math.PI) / 3)} stroke={INK} sw={1.6} dur={0.6} />
      <Fade on={beat >= 4} delay={dl(4, 4.1)}>
        <T x={ARC_LABEL.x} y={ARC_LABEL.y} size={12} fill={INK} anchor="middle" weight={700}>120°</T>
      </Fade>

      {/* beat 5 — ω in surd form */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <Chip x={760} y={270} w={280} h={34} fill="#FCF4E0" stroke={GREEN} textFill={INK} size={11} script={false}>
          ω = cos(2π/3)+isin(2π/3) = -1/2+(√3/2)i
        </Chip>
      </Fade>

      {/* beat 6 — the two facts, hero */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <Chip x={760} y={320} w={280} h={36} fill="#EEA31F" textFill={INK} size={14} script={false}>
          ω³ = 1,  1 + ω + ω² = 0
        </Chip>
      </Fade>

      {/* beat 7 — closing geometric read */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <T x={760} y={410} size={12} fill={AMBER_DARK} anchor="start">
          {t("120° apart, three arrows sum to zero.", "120° apart, teen arrows sum zero.")}
        </T>
      </Fade>
    </Scene>
  );
}
