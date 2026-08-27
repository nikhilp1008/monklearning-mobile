/**
 * M11 Ch04 · Section 51 — "Worked (JEE Advanced): a product of omega-terms"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples — algebra-heavy; keeps the cube-roots-of-unity triangle as a
 * standing callback (top-right), ringing the vertices the algebra is currently using.
 *
 * Beats (board_reveal_at_english [0, 6.66, 17.32, 29.18, 44.54, 57.69, 62.29, 72.96]):
 *  0 heading: reduce exponents, then collapse (subtitle) — triangle callback appears
 *  1 text: evaluate (1+ω)(1+ω²)(1+ω⁴)(1+ω⁸)
 *  2 text: reduce mod 3: ω⁴=ω, ω⁸=ω² — ring the ω and ω² vertices
 *  3 formula: = (1+ω)(1+ω²)(1+ω)(1+ω²) = [(1+ω)(1+ω²)]²
 *  4 formula: (1+ω)(1+ω²) = 1+ω+ω²+ω³ = 0+1 = 1
 *  5 formula (high, boxed): value = 1² = 1
 *  6 text: the identity 1+ω+ω²=0 does all the work
 *  7 guardrail (red-margin): reduce ω powers first — that is the whole game
 *
 * Layout plan (left column x90 formulas, triangle callback top-right c(900,180) r55):
 *  b0 | subtitle                     | T mid | x540 y90
 *  b0 | triangle circle + 1,ω,ω²     | Draw/T| c(900,180) r55
 *  b1 | text row                     | T st  | x90 y128
 *  b2 | text row                     | T st  | x90 y163
 *  b2 | ring ω, ω² vertices          | Draw  |
 *  b3 | formula row                  | T st  | x90 y202
 *  b4 | formula row                  | T st  | x90 y242
 *  b5 | chip (high, green)           | Chip  | x90 y270..306
 *  b6 | text row                     | T st  | x90 y344
 *  b7 | red bar + guardrail text     | Draw/T| x70 y384..418 / x86 y406
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
  ringD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { pointOnCircle, circleD } from "./math-kit";

const TCX = 900, TCY = 180, TR = 55;
const triPts = [0, 1, 2].map((k) => pointOnCircle(TCX, TCY, TR, k * ((2 * Math.PI) / 3)));
const triLabelPts = [0, 1, 2].map((k) => pointOnCircle(TCX, TCY, TR + 22, k * ((2 * Math.PI) / 3)));
const triLabels = ["1", "ω", "ω²"];

export default function M11Ch04Sec51({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={22} fill={RED} anchor="middle" script>
          {t("Worked (JEE Advanced): A Product of ω-Terms", "Worked (JEE Advanced): ω-Terms ka Product")}
        </T>
      </Fade>

      {/* beat 0 — subtitle + the standing cube-roots-of-unity callback */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={90} size={15} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("Reduce exponents, then collapse", "Exponents reduce karo, phir collapse karo")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.4)} d={circleD(TCX, TCY, TR)} stroke={MUTED} sw={1.4} dur={0.6} />
      {[0, 1, 2].map((k, i) => (
        <React.Fragment key={k}>
          <Draw on={beat >= 0} delay={dl(0, 0.8 + i * 0.25)} d={arrowD(TCX, TCY, triPts[k].x, triPts[k].y)} stroke={k === 0 ? INK : AMBER_DARK} sw={1.8} dur={0.4} />
          <Fade on={beat >= 0} delay={dl(0, 1 + i * 0.25)}>
            <T x={triLabelPts[k].x} y={triLabelPts[k].y} size={13} fill={k === 0 ? INK : AMBER_DARK} anchor="middle" weight={700}>
              {triLabels[k]}
            </T>
          </Fade>
        </React.Fragment>
      ))}

      {/* beat 1 — the given */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={90} y={128} size={16} fill={INK} anchor="start">
          {t("Evaluate (1+ω)(1+ω²)(1+ω⁴)(1+ω⁸)", "Evaluate karo (1+ω)(1+ω²)(1+ω⁴)(1+ω⁸)")}
        </T>
      </Fade>

      {/* beat 2 — reduce exponents mod 3 */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={90} y={165} size={16} fill={INK} anchor="start">
          {t("Reduce mod 3: ω⁴=ω, ω⁸=ω²", "Mod 3 reduce karo: ω⁴=ω, ω⁸=ω²")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.6)} d={ringD(triPts[1].x, triPts[1].y, 15, 13)} stroke={RED} sw={2} dur={0.5} />
      <Draw on={beat >= 2} delay={dl(2, 1.1)} d={ringD(triPts[2].x, triPts[2].y, 15, 13)} stroke={RED} sw={2} dur={0.5} />

      {/* beat 3 */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={90} y={205} size={16} fill={INK} anchor="start">
          = (1+ω)(1+ω²)(1+ω)(1+ω²) = [(1+ω)(1+ω²)]²
        </T>
      </Fade>

      {/* beat 4 */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={90} y={245} size={16} fill={INK} anchor="start">
          (1+ω)(1+ω²) = 1+ω+ω²+ω³ = 0+1 = 1
        </T>
      </Fade>

      {/* beat 5 — land the result */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <Chip x={90} y={272} w={200} h={38} fill={CREAM} stroke={GREEN} textFill={INK} size={18} script={false}>
          value = 1² = 1
        </Chip>
      </Fade>

      {/* beat 6 */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={90} y={352} size={15} fill={INK} anchor="start">
          {t("The step 1+ω+ω² = 0 does all the work.", "Step 1+ω+ω² = 0 hi saara kaam karta hai.")}
        </T>
      </Fade>

      {/* beat 7 — guardrail */}
      <Draw on={beat >= 7} delay={dl(7, 0.1)} d="M 70 386 L 70 420" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={86} y={408} size={15} fill={RED} anchor="start" weight={700}>
          {t("Reduce ω powers first — that is the whole game.", "Pehle ω powers reduce karo — yehi poora game hai.")}
        </T>
      </Fade>
    </Scene>
  );
}
