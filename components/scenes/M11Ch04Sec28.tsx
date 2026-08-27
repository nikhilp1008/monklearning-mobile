/**
 * M11 Ch04 · Section 28 — "Worked: polar form in Q1 and Q2"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples — subtopic 3 (The Argand Plane and Polar Representation).
 *
 * Beats (board_reveal_at_english [0, 5.38, 13.57, 24.83, 34.56, 51.54, 61.95, 69.46]):
 *  0 heading: modulus, principal argument, polar form
 *  1 z=1+i plotted (Q I) — diagram starts + left-column Case 1 heading
 *  2 r=√2, α=π/4 — left column two lines + angle arc (0→45°) on diagram
 *  3 polar form z=√2(cosπ/4+isinπ/4) — boxed (green chip)
 *  4 z=-1+i plotted (Q II) — diagram arrow + left-column Case 2 heading/subline
 *  5 α=π/4 ⇒ argz=π-π/4=3π/4 — left column line + full arg arc (0→135°) +
 *    small reference-angle arc (135°→180°) showing α is the SAME acute angle
 *  6 polar form z=√2(cos3π/4+isin3π/4) — boxed (green chip)
 *  7 guardrail (red-margin): same r, same α — only the quadrant changes arg
 *
 * Layout plan (diagram right side c(800,340) r110; left column x40-560 stays clear
 * of the diagram, which starts x650):
 *  b0 | subtitle (15,amber_dark,w700)      | T mid  | x540 y90
 *  b1 | axes c(800,340) x650..960 y200..430| CartesianAxes (no ticks)
 *  b1 | Re/Im labels                       | T st   | (965,358) (812,196)
 *  b1 | O dot                              | circle | (800,340) r3.5
 *  b1 | arrow O→Z1, label "1 + i"          | Draw/T | (800,340)→(877.78,262.22)
 *  b1 | Case 1 heading                     | T st   | x60 y118
 *  b2 | r-line, α-line                     | T st   | x60 y150 / y183
 *  b2 | arc 0→45° r55 + label "π/4"        | Draw/T | r80 mid .393
 *  b3 | chip "z=√2(cosπ/4+isinπ/4)"        | Chip   | x50..330 y208..246
 *  b4 | arrow O→Z2, label "-1 + i"         | Draw/T | (800,340)→(722.22,262.22)
 *  b4 | Case 2 heading + subline           | T st   | x60 y300 / y330
 *  b5 | formula line                       | T st   | x60 y362
 *  b5 | full arg arc 0→135° r68 + "3π/4"   | Draw/T | r90 angle100°
 *  b5 | reference arc 135°→180° r35, MUTED | Draw   | (no label — chip explains)
 *  b6 | chip "z=√2(cos3π/4+isin3π/4)"      | Chip   | x50..340 y393..431
 *  b7 | red bar + guardrail text           | Draw/T | x60 y478..512 / x76 y500
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

const CX = 800;
const CY = 340;
const R = 110;

const Z1 = pointOnCircle(CX, CY, R, Math.PI / 4); // 1+i, 45°
const Z2 = pointOnCircle(CX, CY, R, (3 * Math.PI) / 4); // -1+i, 135°

const ARC1_LABEL = pointOnCircle(CX, CY, 80, Math.PI / 8); // mid of 0-45°
const ARC2_LABEL = pointOnCircle(CX, CY, 90, (100 * Math.PI) / 180); // biased toward Z2 side, away from Z1 ray

export default function M11Ch04Sec28({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={22} fill={RED} anchor="middle" script>
          {t("Worked: Polar Form in Q1 and Q2", "Worked: Polar Form Q1 aur Q2 Mein")}
        </T>
      </Fade>

      {/* beat 0 — heading */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={90} size={15} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("Modulus, principal argument, polar form", "Modulus, principal argument, polar form")}
        </T>
      </Fade>

      {/* beat 1 — axes + point z = 1+i (Q I) */}
      <CartesianAxes on={beat >= 1} delay={dl(1, 0)} originX={CX} originY={CY} xLeft={650} xRight={960} yTop={200} yBottom={430} showTicks={false} />
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={965} y={358} size={13} fill={MUTED} anchor="start">Re</T>
        <T x={812} y={196} size={13} fill={MUTED} anchor="start">Im</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.35)}>
        <Circle cx={CX} cy={CY} r={3.5} fill={INK} />
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.55)} d={arrowD(CX, CY, Z1.x, Z1.y)} stroke={INK} sw={2.4} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 1.0)}>
        <T x={Z1.x + 14} y={Z1.y - 10} size={14} fill={INK} anchor="start" weight={700}>1 + i</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.4)}>
        <T x={60} y={118} size={16} fill={INK} anchor="start" weight={700}>
          {t("Case 1 — z = 1 + i (Quadrant I)", "Case 1 — z = 1 + i (Quadrant I)")}
        </T>
      </Fade>

      {/* beat 2 — r = √2, α = π/4 */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={60} y={150} size={15} fill={INK} anchor="start">r = √(1² + 1²) = √2</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={60} y={183} size={15} fill={INK} anchor="start">α = arctan(1) = π/4</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.9)} d={angleArcD(CX, CY, 55, 0, Math.PI / 4)} stroke={AMBER_DARK} sw={2} dur={0.6} />
      <Fade on={beat >= 2} delay={dl(2, 1.5)}>
        <T x={ARC1_LABEL.x} y={ARC1_LABEL.y} size={13} fill={AMBER_DARK} anchor="middle" weight={700}>π/4</T>
      </Fade>

      {/* beat 3 — polar form boxed */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <Chip x={50} y={208} w={280} h={38} fill={CREAM} stroke={GREEN} textFill={INK} size={15} script={false}>
          z = √2 (cos π/4 + i sin π/4)
        </Chip>
      </Fade>

      {/* beat 4 — point z = -1+i (Q II) */}
      <Draw on={beat >= 4} delay={dl(4, 0)} d={arrowD(CX, CY, Z2.x, Z2.y)} stroke={INK} sw={2.4} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <T x={Z2.x - 14} y={Z2.y - 10} size={14} fill={INK} anchor="end" weight={700}>-1 + i</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.9)}>
        <T x={60} y={300} size={16} fill={INK} anchor="start" weight={700}>
          {t("Case 2 — z = -1 + i (Quadrant II)", "Case 2 — z = -1 + i (Quadrant II)")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.3)}>
        <T x={60} y={330} size={14} fill={INK} anchor="start">
          {t("⇒ arg z = π - α  (measured from +Re axis)", "⇒ arg z = π - α  (+Re axis se measure)")}
        </T>
      </Fade>

      {/* beat 5 — α = π/4 ⇒ arg z = 3π/4, shown as full arg arc + a small reference-angle arc */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={60} y={362} size={15} fill={INK} anchor="start">α = π/4  ⇒  arg z = π - π/4 = 3π/4</T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 0.5)} d={angleArcD(CX, CY, 68, 0, (3 * Math.PI) / 4)} stroke={AMBER_DARK} sw={2} dur={0.8} />
      <Fade on={beat >= 5} delay={dl(5, 1.3)}>
        <T x={ARC2_LABEL.x} y={ARC2_LABEL.y} size={13} fill={AMBER_DARK} anchor="middle" weight={700}>3π/4</T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 1.7)} d={angleArcD(CX, CY, 35, (3 * Math.PI) / 4, Math.PI)} stroke={MUTED} sw={1.6} dur={0.5} />

      {/* beat 6 — second polar form boxed */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <Chip x={50} y={393} w={300} h={38} fill={CREAM} stroke={GREEN} textFill={INK} size={15} script={false}>
          z = √2 (cos 3π/4 + i sin 3π/4)
        </Chip>
      </Fade>

      {/* beat 7 — guardrail: same r, same α, only the quadrant changed the argument */}
      <Draw on={beat >= 7} delay={dl(7, 0.1)} d="M 60 478 L 60 512" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={76} y={500} size={16} fill={RED} anchor="start" weight={700}>
          {t("Same r, same α — only the quadrant changes the argument.", "r aur α same hain — sirf quadrant argument badalta hai.")}
        </T>
      </Fade>
    </Scene>
  );
}
