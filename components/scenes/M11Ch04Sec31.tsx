/**
 * M11 Ch04 · Section 31 — "Worked: cube roots of unity"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples — subtopic 3 (The Argand Plane and Polar Representation).
 *
 * The JSON is pure algebra (factor z³-1, the sum identity, exponent-mod-3
 * reduction) — it never asks for a picture. But 1, ω, ω² are literally the
 * three points z=0..2 of a regular 3-gon inscribed in the unit circle (the
 * same picture Sec46 formalises later, in subtopic 5) — showing it here is
 * the "set up the right mathematical object" step the worked_examples arc
 * calls for, and the closed triangle at the end is the geometric payoff for
 * the closing line. Diagram position/radius/colors deliberately match
 * Sec46's later "cube-root workhorse" picture for visual continuity.
 *
 * Beats (board_reveal_at_english [0, 5.72, 13.82, 25.94, 41.64, 52.91, 66.22, 78.08]):
 *  0 heading: working with 1, ω, ω²
 *  1 formula: z³-1=(z-1)(z²+z+1)=0
 *  2 text: roots are 1 and ω, ω² (from z²+z+1=0) — diagram starts: circle +
 *    3 radius arrows to 1, ω, ω² (points only, no edges yet)
 *  3 formula (boxed): ω+ω²=-1 ⇒ 1+ω+ω²=0
 *  4 text: simplify (1+ω)³ using 1+ω=-ω²
 *  5 formula (boxed): (1+ω)³=(-ω²)³=-ω⁶=-(ω³)²=-1
 *  6 guardrail (red-margin): reduce every ω exponent mod 3, e.g. ω⁶=(ω³)²=1
 *  7 text (payoff): triangle edges close the loop + closing caption
 *
 * Layout plan (diagram c(540,380) r90, matches Sec46; right column x700-1024
 * for the algebra chips, clear of the diagram's rightmost vertex at x630):
 *  b0 | heading (15,amber_dark,w700)   | T mid | x540 y90
 *  b1 | formula line (16,ink)          | T mid | x540 y122
 *  b2 | text line (15,ink)             | T mid | x540 y154
 *  b2 | circle + 3 radius arrows/labels| Draw/T| c(540,380) r90, θ=0,120,240
 *  b3 | chip "ω+ω²=-1 ⇒ 1+ω+ω²=0"      | Chip  | x700..980 y270..306
 *  b4 | text line (14,ink)             | T st  | x712 y344
 *  b5 | chip (boxed identity)          | Chip  | x700..1020 y384..422
 *  b6 | red bar + guardrail 2 lines    | Draw/T| x690 y462..528 / x706 y490,520
 *  b7 | triangle edges (green)         | Draw  | v0-v1-v2-v0 at r90
 *  b7 | triangle caption (13,green)    | T mid | x540 y505
 *  b7 | closing caption (script)       | T mid | x540 y560
 */

import React from "react";
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
import { pointOnCircle, circleD } from "./math-kit";

const CX = 540, CY = 380, R = 90;

const triPts = [0, 1, 2].map((k) => pointOnCircle(CX, CY, R, k * ((2 * Math.PI) / 3)));
const triLabelPts = [0, 1, 2].map((k) => pointOnCircle(CX, CY, R + 24, k * ((2 * Math.PI) / 3)));
const triLabels = ["1", "ω", "ω²"];

const triEdges = `M ${triPts[0].x} ${triPts[0].y} L ${triPts[1].x} ${triPts[1].y} L ${triPts[2].x} ${triPts[2].y} Z`;

export default function M11Ch04Sec31({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={22} fill={RED} anchor="middle" script>
          {t("Worked: Cube Roots of Unity", "Worked: Cube Roots of Unity")}
        </T>
      </Fade>

      {/* beat 0 — heading */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={90} size={15} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("Working with 1, ω, ω²", "1, ω, ω² ke saath kaam")}
        </T>
      </Fade>

      {/* beat 1 — factor z³-1 */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={122} size={16} fill={INK} anchor="middle">z³ - 1 = (z - 1)(z² + z + 1) = 0</T>
      </Fade>

      {/* beat 2 — the roots + the diagram (set up the object) */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={540} y={154} size={15} fill={INK} anchor="middle">
          {t(
            "Roots: z = 1 and ω, ω² (from z² + z + 1 = 0).",
            "Roots: z = 1 aur ω, ω² (z² + z + 1 = 0 se)."
          )}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.5)} d={circleD(CX, CY, R)} stroke={MUTED} sw={1.6} dur={0.8} />
      {[0, 1, 2].map((k, i) => (
        <React.Fragment key={k}>
          <Draw
            on={beat >= 2}
            delay={dl(2, 1 + i * 0.4)}
            d={arrowD(CX, CY, triPts[k].x, triPts[k].y)}
            stroke={k === 0 ? INK : AMBER_DARK}
            sw={2.2}
            dur={0.5}
          />
          <Fade on={beat >= 2} delay={dl(2, 1.3 + i * 0.4)}>
            <T x={triLabelPts[k].x} y={triLabelPts[k].y} size={15} fill={k === 0 ? INK : AMBER_DARK} anchor="middle" weight={700}>
              {triLabels[k]}
            </T>
          </Fade>
        </React.Fragment>
      ))}

      {/* beat 3 — sum identity, boxed */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <Chip x={700} y={270} w={280} h={36} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={16} script={false}>
          ω + ω² = -1  ⇒  1 + ω + ω² = 0
        </Chip>
      </Fade>

      {/* beat 4 — set up the simplification */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={712} y={344} size={14} fill={INK} anchor="start">
          {t("Simplify (1 + ω)³ using 1 + ω = -ω²", "(1 + ω)³ simplify karo: 1 + ω = -ω²")}
        </T>
      </Fade>

      {/* beat 5 — the reduction chain, boxed */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <Chip x={700} y={384} w={320} h={38} fill={CREAM} stroke={GREEN} textFill={INK} size={14} script={false}>
          (1+ω)³ = (-ω²)³ = -ω⁶ = -(ω³)² = -1
        </Chip>
      </Fade>

      {/* beat 6 — guardrail: reduce every ω exponent mod 3 */}
      <Draw on={beat >= 6} delay={dl(6, 0.1)} d="M 690 462 L 690 528" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={706} y={490} size={15} fill={RED} anchor="start" weight={700}>
          {t("Reduce every ω exponent mod 3.", "Har ω exponent ko mod 3 reduce karo.")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.1)}>
        <T x={706} y={520} size={13} fill={INK} anchor="start">e.g. ω⁶ = (ω³)² = 1</T>
      </Fade>

      {/* beat 7 — the geometric payoff: close the triangle + closing line */}
      <Draw on={beat >= 7} delay={dl(7, 0)} d={triEdges} stroke={GREEN} sw={2.4} dur={1} />
      <Fade on={beat >= 7} delay={dl(7, 0.8)}>
        <T x={540} y={505} size={13} fill={GREEN} anchor="middle" weight={700}>
          {t("1, ω, ω² — an equilateral triangle", "1, ω, ω² — ek equilateral triangle")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.3)}>
        <T x={540} y={560} size={14} fill={AMBER_DARK} anchor="middle" script>
          {t(
            "Ugly ω-expressions collapse into single numbers",
            "Ugly ω-expressions single numbers mein simat jaate hain"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
