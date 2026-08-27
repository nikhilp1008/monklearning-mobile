/**
 * M11 Ch06 · Section 21 — "Deriving nCr and the symmetry property"
 * THIRD section of Subtopic 3 "Combinations". FLAGGED FOR EXTRA SCRUTINY —
 * two real derivations back to back: (1) the algebraic select-then-order
 * bridge that lands nCr = n!/(r!(n-r)!), and (2) the combinatorial/bijective
 * proof of nCr = nC(n-r) — the ELEGANT proof, not a restatement of part 1's
 * algebra. Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md
 * + SCENE_AUTHORING_MATHS.md. nCr/nPr are SYMBOLIC throughout the derivation
 * (plain text) EXCEPT beat 6's "⁷C₅ = ⁷C₂ = 21", a literal NUMERIC case →
 * real super/subscript digits in non-script (Anek) text.
 *
 * Beats (board_reveal_at_english [0,9.9,24.75,32.09,54.36,60.84,78.85],
 * hinglish [0,7.59,22.44,28.16,52.48,57.51,71.51]):
 *  0 heading (= title, always-on): "Why nCr = n!/(r!(n-r)!)"
 *  [group A: aOn = beat 0..3, erased at beat>=4 — DERIVATION 1: the formula]
 *  1 the bridge diagram: box "SELECT (nCr ways)" → arrow → box "ORDER (r!
 *    ways)" — arranging r of n = select the r, then order them
 *  2 milestone equation: "nPr = nCr × r!" builds term by term (counting
 *    principle — the two stages multiply; callback to Sec1)
 *  3 (HIGH) real algebra: "divide both sides by r!" → "nCr = nPr/r!" →
 *    "substitute nPr = n!/(n-r)! (Sec13)" → final hero fraction
 *    "nCr = n!/(r!(n-r)!)" boxed + checked, green
 *  [group A erased at beat>=4 — full board freed for derivation 2]
 *  [group B: bOn = beat >= 4, final, never erased]
 *  4 NEW heading: "Symmetry: choosing to keep = choosing to reject" — the
 *    elegant/bijective proof begins, explicitly NOT more algebra
 *  5 THE BIJECTION: 7 dots appear neutral, then in ONE simultaneous act (a
 *    single Fade, same delay) 5 turn green ("kept") and the OTHER 2
 *    simultaneously turn red ("rejected") — one partitioning act, two labels
 *  6 (HIGH, final) general formula "nCr = nC(n-r)" ringed, then the numeric
 *    confirmation "⁷C₅ = ⁷C₂ = 21" boxed + checked, tying back to beat 5's
 *    same 7 dots (n=7, r=5, n-r=2)
 *
 * Layout plan (boxes = estimated render boxes; longer language counts):
 *  always | title (script 24, red)                                | T mid  | x~388..692 y39..82 (hinglish wider, ~x309..771)
 *  [group A: aOn = beat 0..3, erased at beat>=4]
 *  b1 | lead "reuse the bridge..." (16, ink)                       | T mid  | x~300..780 y97..115
 *  b1 | SELECT box (240×90, rounded)                                | Draw  | x210..450 y140..230
 *  b1 | ORDER box (240×90, rounded)                                   | Draw  | x630..870 y140..230
 *  b1 | "SELECT"(22,ink,w800) / "(nCr ways)"(15,amber-dk)              | T mid | x~260..400 y160..217 (box1)
 *  b1 | "ORDER"(22,ink,w800) / "(r! ways)"(15,green)                     | T mid | x~700..800 y160..217 (box2)
 *  b1 | arrow SELECT→ORDER                                                | Draw  | x458..625 y185
 *  b2 | caption "counting principle: stages multiply" (16,ink)              | T mid | x~330..750 y257..275
 *  b2 | "nPr = nCr × r!" (28,w800, ink/amber-dk/green)                       | T st  | x430..649 y293..324
 *  b2 | tag "(AND → multiply — Sec1)" (13,muted)                              | T mid | x~368..712 y340..354
 *  b3 | caption1 "divide both sides by r!:" (16,ink)                          | T mid | x~350..730 y370..387
 *  b3 | "nCr = nPr/r!" (26,w800, amber-dk/ink/green)                          | T st  | x440..639 y404..433
 *  b3 | caption2 "substitute nPr=n!/(n-r)!" (14,amber-dk)                     | T mid | x~380..700 y447..462
 *  b3 | hero: "nCr =" (26,green,w800,end)                                    | T end | x403..478 y519..545
 *  b3 | numerator "n!" (22,green,w800)                                       | T mid | x542..568 y495..518
 *  b3 | bar (green)                                                          | Draw  | x494..616 y528
 *  b3 | denominator "(r!(n-r)!)" (20,green,w800)                             | T mid | x497..613 y538..558
 *  b3 | hero box (green, rounded)                                           | Draw  | x385..630 y480..572
 *  b3 | checkmark (green)                                                   | Draw  | x644..660 y524..540
 *  [group A erased at beat>=4]
 *  [group B: bOn = beat>=4, final]
 *  b4 | heading "Symmetry" (28,red,w800)                                    | T mid | x467..613 y98..129
 *  b4 | subheading "choosing to keep = choosing to reject" (18,ink)            | T mid | x~364..716 y144..164
 *  b4 | amber underline flourish                                              | Draw  | x400..680 y178
 *  b5 | lead sentence "every group of r kept..." (17,ink)                      | T mid | x~300..780 y197..215
 *  b5 | tag "n = 7 objects:" (14,muted)                                        | T mid | x~470..610 y230..248
 *  b5 | 7 dots (r15), neutral then partitioned (single act)                     | circle| x327..753 y265..295
 *  b5 | "5 kept" label (15,green,w700)                                          | T mid | x416..466 y309..325
 *  b5 | "2 rejected" label (15,red,w700)                                        | T mid | x631..713 y309..325
 *  b5 | closing "same act, two names" (18,ink,w600)                             | T mid | x~350..730 y348..366
 *  b6 | "nCr = nC(n-r)" (26,ink,w800), ringed (amber)                           | T mid | x445..635 y390..414
 *  b6 | "⁷C₅ = ⁷C₂ = 21" (26,w800, ink/green/green, boxed+checked)               | T st  | x439..660 y455..482
 *  b6 | caption "(n=7,r=5→n-r=2 — same 7 dots)" (14,amber-dk)                    | T mid | x~400..680 y500..519
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
  arrowD,
  ringD,
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

export default function M11Ch06Sec21({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  // Group A (beats 0-3: the select-then-order bridge, landing the algebraic
  // formula) is erased once group B's bijective symmetry proof (beats 4-6)
  // needs the full board. Each element's own `on` is bounded to its beat
  // window (aOn/bOn && beat >= k) rather than a wrapper div's opacity, so the
  // verifier's Fade-opacity visibility check (which walks up to the nearest
  // g.sc-fade, not an arbitrary ancestor) sees the erasure correctly; seeking
  // back into an earlier beat correctly restores it.
  const aOn = beat >= 0 && beat < 4;
  const bOn = beat >= 4;

  // ---- beat2: "nPr = nCr × r!" built term by term ----
  const eq2Segs = [
    { text: "nPr", fill: INK },
    { text: "=", fill: INK },
    { text: "nCr", fill: AMBER_DARK },
    { text: "×", fill: INK },
    { text: "r!", fill: GREEN },
  ];
  const eq2Widths = eq2Segs.map((s) => 0.58 * 28 * s.text.length);
  const eq2Gap = 14;
  const eq2TotalW = eq2Widths.reduce((a, b) => a + b, 0) + (eq2Segs.length - 1) * eq2Gap;
  let eq2X0 = 540 - eq2TotalW / 2;
  const eq2Xs = eq2Segs.map((_, i) => {
    const x = eq2X0;
    eq2X0 += eq2Widths[i] + eq2Gap;
    return x;
  });

  // ---- beat3: "nCr = nPr/r!" built term by term ----
  const eq3Segs = [
    { text: "nCr", fill: AMBER_DARK },
    { text: "=", fill: INK },
    { text: "nPr", fill: INK },
    { text: "/", fill: INK },
    { text: "r!", fill: GREEN },
  ];
  const eq3Widths = eq3Segs.map((s) => 0.58 * 26 * s.text.length);
  const eq3Gap = 12;
  const eq3TotalW = eq3Widths.reduce((a, b) => a + b, 0) + (eq3Segs.length - 1) * eq3Gap;
  let eq3X0 = 540 - eq3TotalW / 2;
  const eq3Xs = eq3Segs.map((_, i) => {
    const x = eq3X0;
    eq3X0 += eq3Widths[i] + eq3Gap;
    return x;
  });

  // ---- beat5: the bijection — 7 dots, ONE partitioning act ----
  // 5 kept (green) + 2 rejected (red) turn color together, in the SAME Fade
  // (same delay) so it reads as a single act, not two separate diagrams.
  const dotXs = [342, 408, 474, 540, 606, 672, 738];
  const dotY = 280;
  const dotR = 15;
  const keepIdx = [0, 1, 2, 3, 4];
  const keepCx = (dotXs[0] + dotXs[4]) / 2; // 441
  const rejectCx = (dotXs[5] + dotXs[6]) / 2; // 705 -> midpoint used for label center

  // ---- beat6: "⁷C₅ = ⁷C₂ = 21" — numeric, real super/subscript digits ----
  const numSegs = [
    { text: "⁷C₅", fill: INK },
    { text: "=", fill: INK },
    { text: "⁷C₂", fill: GREEN },
    { text: "=", fill: INK },
    { text: "21", fill: GREEN },
  ];
  const numWidths = numSegs.map((s) => 0.5 * 26 * s.text.length);
  const numGap = 18;
  const numTotalW = numWidths.reduce((a, b) => a + b, 0) + (numSegs.length - 1) * numGap;
  let numX0 = 540 - numTotalW / 2;
  const numXs = numSegs.map((_, i) => {
    const x = numX0;
    numX0 += numWidths[i] + numGap;
    return x;
  });
  const box21X = numXs[4] - 6;
  const box21W = numWidths[4] + 12;

  return (
    <Scene>
      {/* title always-on */}
      <Fade on={true}>
        <T x={540} y={70} size={24} fill={RED} script>
          {t("Why nCr = n!/(r!(n-r)!)", "nCr = n!/(r!(n-r)!) kyun hota hai?")}
        </T>
      </Fade>

      {/* ===================== Group A — beats 1-3, DERIVATION 1 ===================== */}

      {/* beat 1 — the select-then-order bridge diagram */}
      <Fade on={aOn && beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={110} size={16} fill={INK} weight={600}>
          {t(
            "Reuse the bridge: first SELECT, then ORDER.",
            "Bridge dobara: pehle SELECT karo, phir ORDER karo."
          )}
        </T>
      </Fade>

      <Draw
        on={aOn && beat >= 1}
        delay={dl(1, 0.6)}
        d={roundRectD(210, 140, 240, 90, 12)}
        stroke={INK}
        sw={2}
        dur={0.9}
      />
      <Fade on={aOn && beat >= 1} delay={dl(1, 1.7)}>
        <T x={330} y={178} size={22} fill={INK} weight={800}>
          SELECT
        </T>
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 2.1)}>
        <T x={330} y={212} size={15} fill={AMBER_DARK} weight={600}>
          (nCr ways)
        </T>
      </Fade>

      <Draw
        on={aOn && beat >= 1}
        delay={dl(1, 2.7)}
        d={arrowD(458, 185, 625, 185)}
        stroke={INK}
        sw={2.4}
        dur={0.5}
      />

      <Draw
        on={aOn && beat >= 1}
        delay={dl(1, 3.4)}
        d={roundRectD(630, 140, 240, 90, 12)}
        stroke={INK}
        sw={2}
        dur={0.9}
      />
      <Fade on={aOn && beat >= 1} delay={dl(1, 4.5)}>
        <T x={750} y={178} size={22} fill={INK} weight={800}>
          ORDER
        </T>
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 4.9)}>
        <T x={750} y={212} size={15} fill={GREEN} weight={600}>
          (r! ways)
        </T>
      </Fade>

      {/* beat 2 — milestone equation: the two stages multiply */}
      <Fade on={aOn && beat >= 2} delay={dl(2, 0)}>
        <T x={540} y={270} size={16} fill={INK} weight={600}>
          {t(
            "By the counting principle, the two stages multiply:",
            "Counting principle se — dono stages multiply hote hain:"
          )}
        </T>
      </Fade>
      {eq2Segs.map((s, i) => (
        <Fade key={i} on={aOn && beat >= 2} delay={dl(2, 0.8 + i * 0.4)}>
          <T x={eq2Xs[i]} y={315} size={28} fill={s.fill} weight={800} anchor="start">
            {s.text}
          </T>
        </Fade>
      ))}
      <Fade on={aOn && beat >= 2} delay={dl(2, 3.0)}>
        <T x={540} y={350} size={13} fill={MUTED}>
          {t(
            "(AND → multiply — Sec1's Multiplication Principle)",
            "(AND → multiply — Sec1 wala Multiplication Principle)"
          )}
        </T>
      </Fade>

      {/* beat 3 — real algebra: divide both sides, substitute, land the hero */}
      <Fade on={aOn && beat >= 3} delay={dl(3, 0)}>
        <T x={540} y={382} size={16} fill={INK} weight={600}>
          {t("Divide both sides by r!:", "Dono taraf r! se divide karo:")}
        </T>
      </Fade>
      {eq3Segs.map((s, i) => (
        <Fade key={i} on={aOn && beat >= 3} delay={dl(3, 0.8 + i * 0.35)}>
          <T x={eq3Xs[i]} y={424} size={26} fill={s.fill} weight={800} anchor="start">
            {s.text}
          </T>
        </Fade>
      ))}
      <Fade on={aOn && beat >= 3} delay={dl(3, 2.6)}>
        <T x={540} y={458} size={14} fill={AMBER_DARK}>
          {t(
            "Substitute nPr = n!/(n-r)! (Sec13):",
            "nPr = n!/(n-r)! substitute karo (Sec13):"
          )}
        </T>
      </Fade>

      <Fade on={aOn && beat >= 3} delay={dl(3, 3.2)}>
        <T x={478} y={532} size={26} fill={GREEN} weight={800} anchor="end">
          nCr =
        </T>
      </Fade>
      <Fade on={aOn && beat >= 3} delay={dl(3, 3.6)}>
        <T x={555} y={512} size={22} fill={GREEN} weight={800}>
          n!
        </T>
      </Fade>
      <Draw
        on={aOn && beat >= 3}
        delay={dl(3, 4.0)}
        d={lineD(494, 528, 616, 528)}
        stroke={GREEN}
        sw={2.4}
        dur={0.4}
      />
      <Fade on={aOn && beat >= 3} delay={dl(3, 4.5)}>
        <T x={555} y={552} size={20} fill={GREEN} weight={800}>
          (r!(n-r)!)
        </T>
      </Fade>
      <Draw
        on={aOn && beat >= 3}
        delay={dl(3, 5.0)}
        d={roundRectD(385, 480, 245, 92, 14)}
        stroke={GREEN}
        sw={2.2}
        dur={0.8}
      />
      <Draw
        on={aOn && beat >= 3}
        delay={dl(3, 5.9)}
        d={checkD(652, 532, 16)}
        stroke={GREEN}
        sw={3}
        dur={0.4}
      />

      {/* ===================== Group B — beats 4-6, DERIVATION 2 ===================== */}

      {/* beat 4 — new heading: the elegant/bijective proof begins */}
      <Fade on={bOn && beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={120} size={28} fill={RED} weight={800}>
          {t("Symmetry", "Symmetry")}
        </T>
      </Fade>
      <Fade on={bOn && beat >= 4} delay={dl(4, 0.9)}>
        <T x={540} y={158} size={18} fill={INK} weight={600}>
          {t(
            "choosing to keep = choosing to reject",
            "rakhna choose karna = chhodna choose karna"
          )}
        </T>
      </Fade>
      <Draw
        on={bOn && beat >= 4}
        delay={dl(4, 1.4)}
        d={lineD(400, 178, 680, 178)}
        stroke={AMBER}
        sw={2}
        dur={0.5}
      />

      {/* beat 5 — THE BIJECTION: one partitioning act on 7 dots */}
      <Fade on={bOn && beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={210} size={17} fill={INK} weight={600}>
          {t(
            "Every group of r kept leaves a group of n-r rejected.",
            "Jitna r group rakha, utna hi n-r group chhoot gaya."
          )}
        </T>
      </Fade>
      <Fade on={bOn && beat >= 5} delay={dl(5, 1.0)}>
        <T x={540} y={244} size={14} fill={MUTED}>
          {t("n = 7 objects:", "n = 7 objects:")}
        </T>
      </Fade>

      {/* neutral dots — the un-partitioned set */}
      <Fade on={bOn && beat >= 5} delay={dl(5, 1.6)}>
        {dotXs.map((x, i) => (
          <Circle key={i} cx={x} cy={dotY} r={dotR} fill={CREAM} stroke={INK} strokeWidth={1.8} />
        ))}
      </Fade>

      {/* the SINGLE simultaneous act: 5 keepers turn green, the other 2
          rejects turn red, at the SAME delay inside the SAME Fade — one act,
          two descriptions, not two separate diagrams. */}
      <Fade on={bOn && beat >= 5} delay={dl(5, 3.2)}>
        {dotXs.map((x, i) => {
          const isKeep = keepIdx.includes(i);
          return (
            <Circle
              key={i}
              cx={x}
              cy={dotY}
              r={dotR}
              fill={isKeep ? GREEN : RED}
              stroke={isKeep ? GREEN : RED}
              strokeWidth={1.8}
            />
          );
        })}
      </Fade>

      <Fade on={bOn && beat >= 5} delay={dl(5, 3.9)}>
        <T x={keepCx} y={317} size={15} fill={GREEN} weight={700}>
          {t("5 kept", "5 rakhe")}
        </T>
      </Fade>
      <Fade on={bOn && beat >= 5} delay={dl(5, 4.3)}>
        <T x={rejectCx} y={317} size={15} fill={RED} weight={700}>
          {t("2 rejected", "2 chhode")}
        </T>
      </Fade>

      <Fade on={bOn && beat >= 5} delay={dl(5, 5.0)}>
        <T x={540} y={358} size={18} fill={INK} weight={600}>
          {t("Same act, two names for it.", "Ek hi act — do naam.")}
        </T>
      </Fade>

      {/* beat 6 — general formula ringed, numeric confirmation boxed+checked */}
      <Fade on={bOn && beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={410} size={26} fill={INK} weight={800}>
          nCr = nC(n-r)
        </T>
      </Fade>
      <Draw
        on={bOn && beat >= 6}
        delay={dl(6, 1.0)}
        d={ringD(540, 403.76, 109.42, 25)}
        stroke={AMBER}
        sw={2.2}
        dur={0.7}
      />

      {numSegs.map((s, i) => (
        <Fade key={i} on={bOn && beat >= 6} delay={dl(6, 1.8 + i * 0.5)}>
          <T x={numXs[i]} y={475} size={26} fill={s.fill} weight={800} anchor="start">
            {s.text}
          </T>
        </Fade>
      ))}
      <Draw
        on={bOn && beat >= 6}
        delay={dl(6, 4.4)}
        d={roundRectD(box21X, 449, box21W, 40, 8)}
        stroke={GREEN}
        sw={2}
        dur={0.5}
      />
      <Draw
        on={bOn && beat >= 6}
        delay={dl(6, 5.0)}
        d={checkD(662, 469, 14)}
        stroke={GREEN}
        sw={2.6}
        dur={0.4}
      />

      <Fade on={bOn && beat >= 6} delay={dl(6, 5.6)}>
        <T x={540} y={515} size={14} fill={AMBER_DARK}>
          {t(
            "(n=7, r=5 → n-r=2 — same 7 dots)",
            "(n=7, r=5 → n-r=2 — wahi 7 dots)"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
