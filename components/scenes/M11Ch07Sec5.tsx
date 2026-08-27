/**
 * M11 Ch07 · Section 5 — "Proving Pascal's rule and using the triangle"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. FLAGGED for extra eye-scrutiny.
 *
 * Two-part board: upper half is the ALGEBRAIC proof of Pascal's rule
 * (factorial definitions → common denominator → simplifies to (n+1)Cr),
 * lower half reuses the triangle (rows 0–4, row 4 ringed) to read off
 * (a+b)^4's coefficients and land the expansion beside it.
 *
 * Beats (en [0, 8.88, 30.38, 42.5, 65.97, 81.92, 104.97]):
 *  0 title (always-on)
 *  1 nCr + nC(r-1) written out as factorials
 *  2 short instruction: take the LCM, combine numerators
 *  3 the algebra collapses to (n+1)Cr — boxed payoff (HIGH)
 *  4 triangle rows 0–4 appear, row 4 ringed green + labeled
 *  5 (a+b)⁴ expanded, read off row 4 (non-script: literal numeric exponents)
 *  6 red-margin: triangle fast for small n, else use nCr directly
 *
 * Layout plan (Kalam bl−1.3s..+0.5s / Anek bl−0.78s..+0.31s):
 *  b0 | title script26 cx540 bl58
 *  b1 | label script14 x150 bl100 · formula script16 x150 bl145
 *  b2 | text script15 x150 bl190
 *  b3 | line1 script16 x150 bl234 · line2 script17 x150 bl282 (boxed x135..600 y262..302)
 *  b4 | triangle cx250 top340 rowH32 colW38 size16 (rows0-3 ink, row4 green) · ring cx250 cy464 rx95 ry26
 *  b5 | chunk1 NON-SCRIPT18 x550 bl436 · chunk2 NON-SCRIPT18 x550 bl468 · label script14 cx250 bl506
 *  b6 | red bar x150 y528..562 · text script15 x150 bl550
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  ringD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  GREEN_DARK,
  RED,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD, PascalsTriangle } from "./math-kit";

const ROWS = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]];
const CX = 250;
const TOP = 340;
const ROWH = 32;
const COLW = 38;

export default function M11Ch07Sec5({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true}>
        <T x={540} y={58} size={26} fill={INK} script>
          {t("Pascal's rule from factorials", "Pascal's rule, factorials se")}
        </T>
      </Fade>

      {/* beat 1 — write both sides as factorials */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={150} y={100} size={14} fill={AMBER_DARK} script anchor="start">
          {t("START — nCr + nC(r-1):", "SHURU — nCr + nC(r-1):")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={150} y={145} size={16} fill={INK} script anchor="start">
          nCr + nC(r-1) = n! / (r!(n-r)!) + n! / ((r-1)!(n-r+1)!)
        </T>
      </Fade>

      {/* beat 2 — take the LCM */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={150} y={190} size={15} fill={MUTED} script anchor="start">
          {t("take the LCM r!(n-r+1)!, combine numerators", "LCM r!(n-r+1)! lo, numerators combine karo")}
        </T>
      </Fade>

      {/* beat 3 — collapses to (n+1)Cr, boxed */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={150} y={234} size={16} fill={INK} script anchor="start">
          = [n!(n-r+1) + n!·r] / [r!(n-r+1)!]
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.3)}>
        <T x={150} y={282} size={17} fill={AMBER_DARK} script anchor="start">
          = (n+1)! / (r!(n+1-r)!) = (n+1)Cr
        </T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 2.3)}
        d={roundRectD(135, 262, 465, 40)}
        stroke={AMBER_DARK}
        sw={2.4}
        dur={1}
      />

      {/* beat 4 — the triangle, row 4 ringed */}
      {ROWS.slice(0, 4).map((row, i) => (
        <PascalsTriangle
          key={i}
          on={[beat >= 4]}
          delay={dl(4, 0.3)}
          cx={CX}
          top={TOP + i * ROWH}
          rows={[row]}
          rowHeight={ROWH}
          colWidth={COLW}
          size={16}
        />
      ))}
      <PascalsTriangle
        on={[beat >= 4]}
        delay={dl(4, 0.9)}
        cx={CX}
        top={TOP + 4 * ROWH}
        rows={[ROWS[4]]}
        rowHeight={ROWH}
        colWidth={COLW}
        size={16}
        fill={GREEN_DARK}
      />
      <Draw on={beat >= 4} delay={dl(4, 1.7)} d={ringD(CX, TOP + 4 * ROWH - 4, 95, 26)} stroke={GREEN} sw={2.2} dur={0.7} />

      {/* beat 5 — the expansion, read off row 4 */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={550} y={436} size={18} fill={INK} anchor="start">
          (a+b)⁴ =
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.1)}>
        <T x={550} y={468} size={18} fill={GREEN_DARK} anchor="start">
          a⁴ + 4a³b + 6a²b² + 4ab³ + b⁴
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <T x={250} y={506} size={14} fill={GREEN_DARK} script>
          {t("row 4 = coefficients of (a+b)^4", "row 4 = (a+b)^4 ke coefficients")}
        </T>
      </Fade>

      {/* beat 6 — red-margin: when to use the triangle */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 150 528 v 34" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={170} y={550} size={15} fill={RED} script anchor="start">
          {t("triangle: fast for n≤6 — else use nCr directly", "triangle: n≤6 ke liye fast — warna nCr use karo")}
        </T>
      </Fade>
    </Scene>
  );
}
