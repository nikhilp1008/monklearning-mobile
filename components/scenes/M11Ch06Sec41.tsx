/**
 * M11 Ch06 · Section 41 — "Divisors, and triangles with collinear points"
 * SEVENTH section of Subtopic 7 "Counting Applications & Advanced Tools".
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md (`worked_examples` flow: given → set up → work
 * step by step → answer boxed → sanity check).
 *
 * TWO short worked examples in one section:
 *  Example 1 (foundational, beats 0-2) — compact recap-application of
 *  M11Ch06Sec36's divisor-counting formula on N=360 (does NOT re-derive the
 *  general formula — that was fully taught in Sec36 — just applies it).
 *  Example 2 (the "trap", beats 3-5) — direct numeric application of
 *  M11Ch06Sec35's collinear-correction formulas: 10 points, 4 collinear,
 *  count triangles. The WHY (4 collinear points give 4 DEGENERATE/flat
 *  triangles, not real ones) is shown concretely: an ellipse rings 3 of the
 *  real collinear points, a thickened red segment shows they just retrace
 *  the line, and the ellipse is crossed out — not just the arithmetic.
 *
 * NOTATION: ¹⁰C₃ / ⁴C₃ are NUMERIC nCr cases (literal digits 10, 3, 4 — not
 * variables) → real super/subscript digits in non-script Anek text, per
 * SCENE_AUTHORING_MATHS's \binom{n}{r} rule. "2³ × 3² × 5¹" are literal
 * numeric exponents → real superscript digits, same rule, same device
 * Sec36 already used for its N=360 diagram.
 *
 * Beats (board_reveal_at_english [0,5.38,18.35,33.96,43.78,60.07],
 * hinglish [0,4.1,17.92,31.57,40.36,55.72]):
 *  0 Example 1 heading (foundational)
 *  1 formula: N = 360 = 2³ × 3² × 5¹ (built term by term) + a compact
 *    reuse of Sec36's "exponent → choice count" visual: a small dot-row of
 *    (power+1) dots directly under each prime power, with the count digit
 *    below
 *  2 (HIGH) formula lands, boxed: (3+1)(2+1)(1+1) = 4 × 3 × 2 = 24 + a
 *    drawn checkmark (sanity-check stamp)
 *  [group A erased at beat>=3]
 *  3 Example 2 heading (trap) + diagram sets up: 10 points — 4 solid points
 *    on one drawn line (genuinely collinear) + 6 hollow scattered points
 *  4 THE TRAP, made visual: a red ellipse rings 3 of the 4 real collinear
 *    points, a thickened red segment re-draws the line through them (they
 *    just retrace the line — no triangle), the ellipse is crossed out, then
 *    two formula lines land: "Unrestricted: ¹⁰C₃ = 120" and
 *    "4 collinear → ⁴C₃ = 4 flat triangles"
 *  5 (HIGH) formula lands, boxed: 120 − 4 = 116 + a drawn checkmark
 *
 * Layout plan (boxes = estimated render boxes; longer language counts):
 *  always | title (script 24, red)                                | T mid  | x~289..791 y39..82
 *  b0 | title underline flourish (amber)                           | Draw  | x310..770 y93..95
 *  [group A: aOn = beat 0..2, erased at beat>=3]
 *  b0 | "Example 1 (foundational): ..." (20,ink,w700)                | T mid | x265..815 y108..130
 *  b1 | "360 = 2³ × 3² × 5¹" (28,ink,w800, 4 segs)                    | T st  | x403..677 y150..181
 *  b1 | 3 dot-rows (4/3/2 dots, r3) under each term                    | Fade | cx511/569/644 y197..203
 *  b1 | 3 count digits "4"/"3"/"2" (14,green,w700) under dot-rows        | T mid| cx511/569/644 y215..230
 *  b1 | caption "→ (power+1) choices, multiply them" (13,amber-dk)       | T mid| x~426..654 y242..256
 *  b2 | box (500×100, amber)                                             | Draw | x290..790 y290..390
 *  b2 | "(3+1)(2+1)(1+1) = 4 × 3 × 2 = 24" (24,ink/green,w800, 3 segs)     | T st | x312..768 y335..350 (bl 346)
 *  b2 | checkmark (green, size18)                                          | Draw | x530..550 y404..419
 *  [group A erased at beat>=3]
 *  [group B: bOn = beat>=3, final group]
 *  b3 | "Example 2 (trap): ..." (20,ink,w700)                              | T mid | x230..850 y108..130
 *  b3 | 4 collinear points (r5, solid ink) + drawn line thru them            | circle/Draw | x145..635 y235..305
 *  b3 | 6 scattered points (r5, hollow cream/ink)                            | circle | x215..905 y145..315
 *  b4 | red ellipse ringing p1,p2,p3 (rx215,ry34)                             | Draw | x91..529 y243..317
 *  b4 | red thickened segment p1→p3 (over the amber line)                      | Draw | x150..470 y260..300
 *  b4 | red cross-out over the ellipse                                          | Draw | x91..529 y243..317
 *  b4 | label "→ 0 area, not a triangle" (14,red)                                | T st | x545..720 y269..284
 *  b4 | line A "Unrestricted: ¹⁰C₃ = 120" (22,ink,w700/800, 3 segs)               | T st | x401..679 y372..397
 *  b4 | line B "4 collinear → ⁴C₃ = 4 flat triangles" (20,ink/red,w700/800)         | T st | x360..720 y414..436
 *  b5 | box (400×80, amber)                                                        | Draw | x340..740 y485..565
 *  b5 | "120 − 4 = 116" (30,ink/red/green,w800, 3 segs)                             | T st | x430..650 y518..542 (bl 532)
 *  b5 | checkmark (green, size20)                                                    | Draw | x665..685 y520..535
 */

import React from "react";
import { Circle, Text as SvgText } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  ringD,
  crossD,
  INK,
  MUTED,
  GREEN,
  RED,
  AMBER,
  AMBER_DARK,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD, lineD, checkD } from "./math-kit";

const mult = (weight: number) => (weight >= 800 ? 0.58 : 0.5);

type Seg = { text: string; fill: string; weight?: number; gapBefore?: number };

/** Build a row of left-anchored text segments centered as a whole block at
 * centerX — same device as M11Ch06Sec36's layoutSegs (local re-implementation,
 * no shared export exists yet) so a formula can be assembled term-by-term.
 * Width is char-count heuristic; inter-segment spacing is an explicit
 * gapBefore (px), never a literal leading/trailing space character — SVG's
 * xml:space handling strips those from each <SvgText> element. */
function layoutSegs(segs: Seg[], size: number, centerX: number) {
  const widths = segs.map((s) => mult(s.weight ?? 600) * size * s.text.length);
  const gaps = segs.map((s) => s.gapBefore ?? 0);
  const total = widths.reduce((a, b) => a + b, 0) + gaps.reduce((a, b) => a + b, 0);
  let x = centerX - total / 2;
  return segs.map((s, i) => {
    x += gaps[i];
    const sx = x;
    x += widths[i];
    return { ...s, x: sx };
  });
}

export default function M11Ch06Sec41({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  // Group A (beats 0-2: Example 1, the divisor recap) is fully erased once
  // Example 2's diagram (beat 3) needs the whole board. Group B (beats 3-5)
  // is the final group, never erased. Each element's own `on` is bounded to
  // its beat window (rather than a wrapper div's opacity) so the verifier's
  // Fade-opacity visibility check — which walks up to the nearest g.sc-fade,
  // not an arbitrary ancestor — sees the erasure too; seeking back into an
  // earlier beat correctly restores it.
  const aOn = beat >= 0 && beat < 3;
  const bOn = beat >= 3;

  // ---- beat 1: N = 360 = 2³ × 3² × 5¹, built term by term ----
  const f1Segs = layoutSegs(
    [
      { text: "360 =", fill: INK, weight: 800 },
      { text: "2³", fill: INK, weight: 800, gapBefore: 10 },
      { text: "× 3²", fill: INK, weight: 800, gapBefore: 10 },
      { text: "× 5¹", fill: INK, weight: 800, gapBefore: 10 },
    ],
    28,
    540
  );
  // dot-row / count-digit centers sit directly under the 2³ / 3² / 5¹ terms
  // (f1Segs indices 1,2,3) so each choice-count visually ties to its term.
  const choiceCols = [
    { cx: f1Segs[1].x + 16.24, count: 4 },
    { cx: f1Segs[2].x + 32.48, count: 3 },
    { cx: f1Segs[3].x + 32.48, count: 2 },
  ];

  // ---- beat 2 (HIGH): (3+1)(2+1)(1+1) = 4 × 3 × 2 = 24, boxed ----
  const f2Segs = layoutSegs(
    [
      { text: "(3+1)(2+1)(1+1)", fill: INK, weight: 800 },
      { text: "= 4 × 3 × 2", fill: INK, weight: 800, gapBefore: 12 },
      { text: "= 24", fill: GREEN, weight: 800, gapBefore: 12 },
    ],
    24,
    540
  );

  // ---- beat 3: 4 collinear points (drawn line) + 6 scattered points ----
  const p1 = { x: 150, y: 300 };
  const p2 = { x: 310, y: 280 };
  const p3 = { x: 470, y: 260 };
  const p4 = { x: 630, y: 240 };
  const collinearLine = lineD(p1.x, p1.y, p4.x, p4.y);
  const scattered = [
    { x: 220, y: 160 },
    { x: 420, y: 150 },
    { x: 620, y: 160 },
    { x: 820, y: 180 },
    { x: 900, y: 260 },
    { x: 780, y: 310 },
  ];

  // ---- beat 4: ellipse rings p1,p2,p3 (the "trap" — connect any 3 of the
  // 4 collinear points and you just retrace the line, not a triangle) ----
  const ellCx = 310;
  const ellCy = 280;
  const ellRx = 215;
  const ellRy = 34;

  const lineASegs = layoutSegs(
    [
      { text: t("Unrestricted:", "Bina restriction:"), fill: INK, weight: 700 },
      { text: "¹⁰C₃", fill: INK, weight: 800, gapBefore: 10 },
      { text: "= 120", fill: INK, weight: 800, gapBefore: 10 },
    ],
    22,
    540
  );
  const lineBSegs = layoutSegs(
    [
      { text: "4 collinear →", fill: INK, weight: 700 },
      { text: "⁴C₃", fill: RED, weight: 800, gapBefore: 8 },
      { text: t("= 4 flat triangles", "= 4 flat triangles"), fill: RED, weight: 700, gapBefore: 8 },
    ],
    20,
    540
  );

  // ---- beat 5 (HIGH): 120 − 4 = 116, boxed ----
  const f5Segs = layoutSegs(
    [
      { text: "120", fill: INK, weight: 800 },
      { text: "− 4", fill: RED, weight: 800, gapBefore: 14 },
      { text: "= 116", fill: GREEN, weight: 800, gapBefore: 14 },
    ],
    30,
    540
  );

  return (
    <Scene>
      {/* title always-on */}
      <Fade on={true}>
        <T x={540} y={70} size={24} fill={RED} script>
          {t("Divisors, and the collinear-point trap", "Divisors, aur collinear-point ka trap")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.2)} d={lineD(310, 94, 770, 94)} stroke={AMBER} sw={2} dur={0.6} />

      {/* ===================== Group A — beats 0-2 (Example 1) ===================== */}

      {/* beat 0 — Example 1 heading */}
      <Fade on={aOn && beat >= 0} delay={dl(0, 0.9)}>
        <T x={540} y={124} size={20} fill={INK} weight={700}>
          {t(
            "Example 1 (foundational): number of divisors of 360",
            "Example 1 (foundational): 360 ke divisors kitne hain?"
          )}
        </T>
      </Fade>

      {/* beat 1 — 360 = 2³ × 3² × 5¹, then a compact choice-count under each term */}
      {f1Segs.map((s, i) => (
        <Fade key={i} on={aOn && beat >= 1} delay={dl(1, i * 0.5)}>
          <T x={s.x} y={172} size={28} fill={s.fill} weight={800} anchor="start">
            {s.text}
          </T>
        </Fade>
      ))}
      {choiceCols.map((c, i) => (
        <Fade key={i} on={aOn && beat >= 1} delay={dl(1, 1.0 + i * 0.5)}>
          {Array.from({ length: c.count }).map((_, j) => (
            <Circle
              key={j}
              cx={c.cx - ((c.count - 1) * 10) / 2 + j * 10}
              cy={200}
              r={3}
              fill={INK}
            />
          ))}
        </Fade>
      ))}
      {choiceCols.map((c, i) => (
        <Fade key={i} on={aOn && beat >= 1} delay={dl(1, 3.5 + i * 0.2)}>
          <T x={c.cx} y={226} size={14} fill={GREEN} weight={700}>
            {c.count}
          </T>
        </Fade>
      ))}
      <Fade on={aOn && beat >= 1} delay={dl(1, 4.3)}>
        <T x={540} y={252} size={13} fill={AMBER_DARK}>
          {t("→ (power+1) choices, multiply them", "→ (power+1) choices, multiply karo")}
        </T>
      </Fade>

      {/* beat 2 (HIGH) — formula lands, boxed, with a sanity-check stamp */}
      <Draw
        on={aOn && beat >= 2}
        delay={dl(2, 0)}
        d={roundRectD(290, 290, 500, 100, 14)}
        stroke={AMBER}
        sw={2.4}
        dur={0.8}
      />
      {f2Segs.map((s, i) => (
        <Fade key={i} on={aOn && beat >= 2} delay={dl(2, 1.0 + i * 0.6)}>
          <T x={s.x} y={346} size={24} fill={s.fill} weight={800} anchor="start">
            {s.text}
          </T>
        </Fade>
      ))}
      <Draw
        on={aOn && beat >= 2}
        delay={dl(2, 2.8)}
        d={checkD(540, 412, 18)}
        stroke={GREEN}
        sw={2.6}
        dur={0.5}
      />

      {/* ===================== Group B — beats 3-5 (Example 2) ===================== */}

      {/* beat 3 — Example 2 heading + diagram setup: 10 points, 4 collinear */}
      <Fade on={bOn && beat >= 3} delay={dl(3, 0)}>
        <T x={540} y={124} size={20} fill={INK} weight={700}>
          {t(
            "Example 2 (trap): 10 points, 4 collinear — how many triangles?",
            "Example 2 (trap): 10 points, 4 collinear — kitne triangles?"
          )}
        </T>
      </Fade>
      <Fade on={bOn && beat >= 3} delay={dl(3, 0.6)}>
        <Circle cx={p1.x} cy={p1.y} r={5} fill={INK} />
        <Circle cx={p2.x} cy={p2.y} r={5} fill={INK} />
        <Circle cx={p3.x} cy={p3.y} r={5} fill={INK} />
        <Circle cx={p4.x} cy={p4.y} r={5} fill={INK} />
      </Fade>
      <Draw on={bOn && beat >= 3} delay={dl(3, 1.2)} d={collinearLine} stroke={AMBER} sw={2.6} dur={0.6} />
      <Fade on={bOn && beat >= 3} delay={dl(3, 2.0)}>
        {scattered.map((s, i) => (
          <Circle key={i} cx={s.x} cy={s.y} r={5} fill={CREAM} stroke={INK} strokeWidth={1.8} />
        ))}
      </Fade>

      {/* beat 4 — THE TRAP made visual: ring 3 of the 4 real collinear
          points, re-trace the line through them, cross it out, then land
          the two formulas */}
      <Draw
        on={bOn && beat >= 4}
        delay={dl(4, 0)}
        d={ringD(ellCx, ellCy, ellRx, ellRy)}
        stroke={RED}
        sw={2.2}
        dur={0.8}
      />
      <Draw
        on={bOn && beat >= 4}
        delay={dl(4, 0.9)}
        d={lineD(p1.x, p1.y, p3.x, p3.y)}
        stroke={RED}
        sw={3.4}
        dur={0.5}
      />
      <Draw
        on={bOn && beat >= 4}
        delay={dl(4, 1.5)}
        d={crossD(ellCx - ellRx, ellCy - ellRy, ellRx * 2, ellRy * 2)}
        stroke={RED}
        sw={2.2}
        dur={0.5}
      />
      <Fade on={bOn && beat >= 4} delay={dl(4, 2.3)}>
        <T x={545} y={280} size={14} fill={RED} weight={700} anchor="start">
          {t("→ 0 area, not a triangle", "→ 0 area, triangle nahi")}
        </T>
      </Fade>
      {lineASegs.map((s, i) => (
        <Fade key={i} on={bOn && beat >= 4} delay={dl(4, 3.0 + i * 0.5)}>
          <T x={s.x} y={390} size={22} fill={s.fill} weight={s.weight} anchor="start">
            {s.text}
          </T>
        </Fade>
      ))}
      {lineBSegs.map((s, i) => (
        <Fade key={i} on={bOn && beat >= 4} delay={dl(4, 5.0 + i * 0.6)}>
          <T x={s.x} y={430} size={20} fill={s.fill} weight={s.weight} anchor="start">
            {s.text}
          </T>
        </Fade>
      ))}

      {/* beat 5 (HIGH) — final formula lands, boxed, with a sanity-check stamp */}
      <Draw
        on={bOn && beat >= 5}
        delay={dl(5, 0)}
        d={roundRectD(340, 485, 400, 80, 14)}
        stroke={AMBER}
        sw={2.4}
        dur={0.8}
      />
      {f5Segs.map((s, i) => (
        <Fade key={i} on={bOn && beat >= 5} delay={dl(5, 1.0 + i * 0.5)}>
          <T x={s.x} y={532} size={30} fill={s.fill} weight={800} anchor="start">
            {s.text}
          </T>
        </Fade>
      ))}
      <Draw
        on={bOn && beat >= 5}
        delay={dl(5, 2.6)}
        d={checkD(675, 528, 20)}
        stroke={GREEN}
        sw={2.8}
        dur={0.5}
      />
    </Scene>
  );
}
