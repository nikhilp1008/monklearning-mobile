/**
 * M11 Ch09 · Section 33 — "Worked example: symmetric form (advanced)"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples (Advanced) — subtopic 4 (Distance Formulas).
 *
 * Numbers verified from JSON: line through P(1,1), θ=60° meets 2x+y=8 at Q. Find PQ.
 * Parametrize: x=1+r/2 (cos60°=1/2), y=1+(√3/2)r (sin60°=√3/2). Substitute:
 * 2(1+r/2)+(1+(√3/2)r)=8 → 2+r+1+(√3/2)r=8 → r(1+√3/2)=5 → r=5/(1+√3/2)=10/(2+√3).
 * Rationalize: r=10(2-√3)/[(2+√3)(2-√3)]=10(2-√3)/(4-3)=10(2-√3)=20-10√3
 * ≈ 20-17.32=2.68. Matches JSON exactly (incl. the ≈2.68 approximation in the narration).
 * Q = (1+r/2, 1+(√3/2)r) with r=20-10√3≈2.6795: Q≈(2.3397,3.3205).
 * Verify Q on 2x+y=8: 2(2.3397)+3.3205=4.6794+3.3205=7.9999≈8 ✓ (rounding).
 * Screen mapping: scale=32px/unit, origin(380,553). toScreen(x,y)={380+32x,553-32y}.
 *   P(1,1)->(412,521)  LINE(0,8)->(380,297)  LINE(4,0)->(508,553)  Q->(454.87,446.74).
 *
 * Beat-index: board_content has 8 items. item[0]=heading -> always-on title.
 * items[1..7] gate at beat>=1..7. reveals_english=[0,8.02,20.39,37.8,48.21,59.73,70.49,82.09].
 *
 * Beats:
 *  0(title, always-on) | "Worked: Symmetric Form (Advanced)"
 *  1 | problem text + set up: axes, O, target line 2x+y=8 (2 clean points), P(1,1)
 *  2 | formula: x=1+r/2, y=1+(√3/2)r  + angle arc (θ=60°) + short direction stub at P
 *  3 | text: substitute into 2x+y=8 and solve directly for r (=distance)
 *  4 | formula: 2(1+r/2)+(1+(√3/2)r)=8
 *  5 | formula: r(1+√3/2)=5 ⇒ r=10/(2+√3)
 *  6 | LAND (boxed, high emphasis): r=10(2-√3)=20-10√3 + full ray P->Q (green), Q marked, "r≈2.68"
 *  7 | guardrail (red-margin): only the unit direction makes r the true length
 *
 * Layout plan:
 *  b1 | problem text (15,ink)                | T mid  | x540 y92
 *  b1 | axes c(380,553) 358..540/282..575     | CartesianAxes (no ticks)
 *  b1 | O dot + label                         | circle+T | (380,553) label x368 y566 end
 *  b1 | target line (0,8)->(4,0)              | Draw | (380,297)->(508,553)
 *  b1 | line endpoint dots                    | circle | (380,297) (508,553)
 *  b1 | line label "2x + y = 8"               | T start | x396 y314
 *  b1 | P dot + label "P(1,1)"                | circle+T | (412,521) label x420 y536 start
 *  b2 | formula (16,ink)                      | T mid | x540 y120
 *  b2 | horizontal ref stub (muted)           | Draw | (412,521)->(454,521)
 *  b2 | direction stub (ink, r=1 along ray)   | Draw | (412,521)->(428,493.29)
 *  b2 | angle arc r34 0->60°                  | Draw (amber_dark) | (412,521)
 *  b2 | "θ = 60°" label                       | T start | x466 y494
 *  b3 | text (14,ink)                         | T mid | x540 y148
 *  b4 | formula (15,ink)                      | T mid | x540 y176
 *  b5 | formula (16,ink)                      | T mid | x540 y204
 *  b6 | boxed chip "r=10(2-√3)=20-10√3"        | Chip | x400 y222 w280 h40
 *  b6 | full ray P->Q (green)                 | Draw | (412,521)->(454.87,446.74)
 *  b6 | Q dot (green) + label                 | circle+T | (454.87,446.74) label x466 y438 start
 *  b6 | "r" label (single glyph, clear of axis) | T end | x417 y476
 *  b7 | red-margin bar x600 y340..390 + 2-line text | Draw+T | x616 y360/384
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
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  GREEN_DARK,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { CartesianAxes, lineD, angleArcD } from "./math-kit";

const SCALE = 32;
const OX = 380;
const OY = 553;
function toScreen(x: number, y: number) {
  return { x: OX + x * SCALE, y: OY - y * SCALE };
}
function alongRay(r: number) {
  return toScreen(1 + r / 2, 1 + (Math.sqrt(3) / 2) * r);
}

const O = { x: OX, y: OY };
const P = toScreen(1, 1); // (412, 521)
const LINE1 = toScreen(0, 8); // (380, 297)
const LINE2 = toScreen(4, 0); // (508, 553)
const R_VAL = 20 - 10 * Math.sqrt(3); // ≈ 2.6795
const Q = alongRay(R_VAL); // (454.87, 446.74)
const STUB = alongRay(1.0); // (428, 493.29) — short direction indicator
const HORIZ_END = { x: P.x + 42, y: P.y };
const ARC_R = 34;

export default function M11Ch09Sec33({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={22} fill={RED} anchor="middle" script>
          {t("Worked: Symmetric Form (Advanced)", "Worked: Symmetric Form (Advanced)")}
        </T>
      </Fade>

      {/* beat 1 — problem statement + set up the given object */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={92} size={15} fill={INK} anchor="middle">
          {t(
            "A line through P(1,1) with θ = 60° meets 2x + y = 8 at Q. Find PQ.",
            "P(1,1) se θ = 60° wali line, 2x + y = 8 ko Q par milti hai. PQ nikaalo."
          )}
        </T>
      </Fade>
      <CartesianAxes on={beat >= 1} delay={dl(1, 0.6)} originX={OX} originY={OY} xLeft={358} xRight={540} yTop={282} yBottom={575} showTicks={false} />
      <Fade on={beat >= 1} delay={dl(1, 1.3)}>
        <Circle cx={O.x} cy={O.y} r={3} fill={INK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <T x={368} y={566} size={11} fill={MUTED} anchor="end">O</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.8)} d={lineD(LINE1.x, LINE1.y, LINE2.x, LINE2.y)} stroke={INK} sw={2.2} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 2.6)}>
        <Circle cx={LINE1.x} cy={LINE1.y} r={3} fill={INK} />
        <Circle cx={LINE2.x} cy={LINE2.y} r={3} fill={INK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.9)}>
        <T x={396} y={314} size={13} fill={INK} anchor="start" weight={700}>2x + y = 8</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.3)}>
        <Circle cx={P.x} cy={P.y} r={4.5} fill={INK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.6)}>
        <T x={420} y={536} size={12} fill={INK} anchor="start" weight={700}>P(1,1)</T>
      </Fade>

      {/* beat 2 — parametrize with the unit direction; mark θ=60° at P */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={540} y={120} size={16} fill={INK} anchor="middle">x = 1 + r/2,   y = 1 + (√3/2) r</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.6)} d={lineD(P.x, P.y, HORIZ_END.x, HORIZ_END.y)} stroke={MUTED} sw={1.4} dur={0.4} />
      <Draw on={beat >= 2} delay={dl(2, 1.1)} d={lineD(P.x, P.y, STUB.x, STUB.y)} stroke={INK} sw={2} dur={0.4} />
      <Draw on={beat >= 2} delay={dl(2, 1.8)} d={angleArcD(P.x, P.y, ARC_R, 0, Math.PI / 3)} stroke={AMBER_DARK} sw={2} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 2.4)}>
        <T x={466} y={494} size={12} fill={AMBER_DARK} anchor="start" weight={700}>θ = 60°</T>
      </Fade>

      {/* beat 3 — substitute into 2x+y=8 and solve directly for r */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={540} y={148} size={14} fill={INK} anchor="middle">
          {t(
            "Substitute into 2x + y = 8 and solve directly for r, which is the distance.",
            "2x + y = 8 mein substitute karke seedha r solve karo — wahi humari distance hai."
          )}
        </T>
      </Fade>

      {/* beat 4 — the substitution */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={540} y={176} size={15} fill={INK} anchor="middle">2(1 + r/2) + (1 + (√3/2) r) = 8</T>
      </Fade>

      {/* beat 5 — simplify and isolate r */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={540} y={204} size={16} fill={INK} anchor="middle">r(1 + √3/2) = 5   ⇒   r = 10/(2 + √3)</T>
      </Fade>

      {/* beat 6 — LAND: rationalize, box the result, complete the diagram */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <Chip x={400} y={222} w={280} h={40} fill={CREAM} stroke={GREEN} textFill={INK} size={18} script={false}>
          r = 10(2 - √3) = 20 - 10√3
        </Chip>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 0.6)} d={lineD(P.x, P.y, Q.x, Q.y)} stroke={GREEN} sw={3} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 1.3)}>
        <Circle cx={Q.x} cy={Q.y} r={5} fill={GREEN} />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={466} y={438} size={12} fill={GREEN_DARK} anchor="start" weight={700}>Q ≈ (2.34, 3.32)</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.0)}>
        <T x={417} y={476} size={13} fill={GREEN_DARK} anchor="end" weight={700}>r</T>
      </Fade>

      {/* beat 7 — guardrail: only the unit direction makes r the true length */}
      <Draw on={beat >= 7} delay={dl(7, 0)} d="M 600 340 L 600 390" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={616} y={360} size={15} fill={RED} anchor="start" weight={700}>
          {t("Only the UNIT direction makes r", "Sirf UNIT direction hi r ko")}
        </T>
        <T x={616} y={384} size={15} fill={RED} anchor="start" weight={700}>
          {t("the true length — others break it.", "sahi length banata hai — warna nahi.")}
        </T>
      </Fade>
    </Scene>
  );
}
