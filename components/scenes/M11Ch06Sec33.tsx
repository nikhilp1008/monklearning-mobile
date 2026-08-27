/**
 * M11 Ch06 · Section 33 — "Integer solutions and lower bounds"
 * SEVENTH section of Subtopic "Total Selections, Grouping & Distribution
 * (Stars and Bars)". worked_examples section_type — TWO worked examples.
 * Example 3 is the plain textbook stars-and-bars application (Sec29/30's
 * (n+r-1)C(r) formula, n=12 units, k=4 variables → 455). Example 4 is the
 * section's centerpiece: the lower-bound / "give-minimum" trick (Sec30's
 * give-one trick, generalized to give-TWO here) made numerically concrete —
 * 15 chocolates, 4 children, each ≥ 2 — by literally pre-allocating 2
 * chocolates to each of 4 child icons on the board (running cumulative
 * tally 2→4→6→8), landing "8 used, 7 remain", then applying the same
 * non-negative formula to the remaining 7 → 120. Canvas 1080×620 · safe
 * x36-1044, y30-596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * ¹⁵C₃/¹⁰C₃ are literal NUMERIC cases → real super/subscript digits in
 * non-script (Anek) text, per the digit-coverage note in the maths spec.
 *
 * Beats (board_reveal_at_english [0,7.17,27.65,43.86,55.89,71.34,87.72],
 * hinglish [0,7.85,26.62,45.31,56.75,71.42,87.89]):
 *  0 heading: Example 3 (JEE Main) — a+b+c+d=12, non-negative
 *  [group A: aOn = beat 0..2, erased at beat>=3]
 *  1 setup: 12 identical units (drawn as a row of 12 small stars) into 4
 *    distinct variable boxes a,b,c,d (each tagged ≥0) — n=12, k=4
 *  2 (HIGH) formula: (12+4-1)C(4-1) = ¹⁵C₃ = (15×14×13)/6 = 455, boxed+checked
 *  [group A erased at beat>=3 — full board freed for Example 4]
 *  [group B: bOn = beat>=3, final, never erased]
 *  3 heading: Example 4 (JEE Advanced) — a+b+c+d=15, each ≥ 2
 *  4 THE GIVE-TWO TRICK, made concrete: 4 child icons (face-in-circle) drawn
 *    left to right, each immediately given 2 chocolate squares; a running
 *    cumulative tally (2, 4, 6, 8) lands under each child in turn; then the
 *    consolidated "4×2=8 used" and "15-8=7 remain" stamps land
 *  5 (HIGH) formula: (7+4-1)C(4-1) = ¹⁰C₃ = (10×9×8)/6 = 120, boxed+checked
 *  6 (red-margin guardrail, final) "Pre-allocate the minimum first —
 *    bounded problem → clean non-negative case."
 *
 * Layout plan (boxes = estimated render boxes; longer language counts):
 *  always | title (script 24, red)                                | T mid | x~330..750 y41..92
 *  b0 | title underline flourish (amber)                            | Draw | x400..680 y94
 *  [group A: aOn = beat 0..2, erased at beat>=3]
 *  a0 | label "Example 3 (JEE Main)" (15,amber-dk,w700)               | T mid | x~460..620 y106..123
 *  a0 | equation "a+b+c+d = 12" (24,ink,w800)                          | T mid | x~440..640 y138..162
 *  a0 | caption "(non-negative integer solutions...)" (14,muted)         | T mid | x~330..750 y169..193
 *  a1 | 12-star row (r8, amber) — "12 identical units"                    | Fade | x419..661 y207..223
 *  a1 | caption "12 identical units" (13,muted)                            | T mid | x~460..620 y234..248
 *  a1 | 4 boxes a,b,c,d (90×60 rounded) + "≥0" tags                         | Draw/T| x306..774 y260..340
 *  a1 | caption "n=12, k=4 → non-neg stars & bars" (14,amber-dk)              | T mid | x~330..750 y352..376
 *  a2 | row1 "(12+4-1)C(4-1)" "=" "¹⁵C₃" (22/20/26,w800/700/800,ink)          | T st | x392..688 y378..402
 *  a2 | row2 "=" "(15×14×13)/6" "=" "455"(green,boxed) (20/22/20/32,w700/800)  | T st | x400..680 y397..452
 *  a2 | hero box (green) around "455" + checkmark                              | Draw | ~x654..742 y397..452
 *  [group A erased at beat>=3]
 *  [group B: bOn = beat>=3, final]
 *  b3 | label "Example 4 (JEE Advanced)" (15,amber-dk,w700)                     | T mid | x~440..640 y106..123
 *  b3 | equation "a+b+c+d = 15 (each ≥ 2)" (22,ink,w800)                        | T mid | x~380..700 y138..162
 *  b3 | caption "15 identical chocolates, 4 children..." (14,muted)               | T mid | x~300..780 y170..194
 *  b4 | 4 child icons (circle r18, face) left→right                                | Draw/Fade| x333..747 y197..233
 *  b4 | 2 chocolate squares per child (12×12, amber-dk)                            | Fade | x323..757 y249..261
 *  b4 | per-child cumulative tally "2","4","6","8" (16,amber-dk/green,w800)         | T mid | per-col y280..292
 *  b4 | consolidated "4×2 = 8 used" (19,ink,w700)                                   | T mid | x~430..650 y303..323
 *  b4 | "15-8 = 7 remain" (24,green,w800) + underline                                | T mid | x~415..665 y337..364
 *  b5 | row1 "(7+4-1)C(4-1)" "=" "¹⁰C₃" (22/20/26,w800/700/800,ink)                  | T st | x399..681 y378..402
 *  b5 | row2 "=" "(10×9×8)/6" "=" "120"(green,boxed) (20/22/20/32,w700/800)          | T st | x413..667 y397..452
 *  b5 | hero box (green) around "120" + checkmark                                     | Draw | ~x635..723 y397..452
 *  b6 | guardrail card (dynamic w, h95, red outline, cream fill)                        | Draw | x~270..810 y470..565
 *  b6 | line1 "Pre-allocate the minimum first." (18,red,w800)                          | T mid | x~370..710 y494..514
 *  b6 | line2 "Bounded problem -> clean non-negative case." (15,ink,w600)                | T mid | x~270..810 y524..541
 */

import React from "react";
import { Circle, Path, Rect } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  INK,
  MUTED,
  GREEN,
  RED,
  AMBER,
  AMBER_DARK,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD, lineD, checkD, circleD } from "./math-kit";

/** 5-point star as a fillable path — local device, same as Sec29/30's own
 * (SCENE_AUTHORING_MATHS.md: no special star/bar primitive exists or is
 * needed, a drawn glyph is enough). Used here as the "12 identical units"
 * tally row. */
function starD(cx: number, cy: number, rOuter: number, rInner = rOuter * 0.42): string {
  const pts: string[] = [];
  for (let i = 0; i < 10; i++) {
    const r = i % 2 === 0 ? rOuter : rInner;
    const angle = -Math.PI / 2 + (i * Math.PI) / 5;
    const x = cx + r * Math.cos(angle);
    const y = cy + r * Math.sin(angle);
    pts.push(`${i === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(2)}`);
  }
  return pts.join(" ") + " Z";
}

type Seg = { text: string; size: number; weight: number; fill: string };

/** Estimate a text segment's render width (Anek sans, non-script) — same
 * over-estimate convention used throughout this chapter's sections. */
function wEst(s: string, size: number, weight: number): number {
  return (weight >= 700 ? 0.58 : 0.5) * size * s.length;
}

/** Lay out a row of same-baseline segments centered at cx with a fixed gap
 * between them — returns each segment's start-x for anchor="start" text. */
function layoutSegs(segs: Seg[], cx: number, gap: number) {
  const widths = segs.map((s) => wEst(s.text, s.size, s.weight));
  const total = widths.reduce((a, b) => a + b, 0) + gap * (segs.length - 1);
  let cursor = cx - total / 2;
  const xs = widths.map((w) => {
    const x = cursor;
    cursor += w + gap;
    return x;
  });
  return { widths, total, xs };
}

export default function M11Ch06Sec33({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  // Group A (beats 0-2: Example 3, the plain textbook stars-and-bars
  // application) is erased once Example 4 — the section's centerpiece, the
  // lower-bound/give-minimum trick made concrete — needs the full board at
  // beat 3; group B then owns the board for good. Each element's own `on`
  // is bounded to its beat window (aOn/bOn && beat >= k) rather than a
  // wrapper div's opacity, so the verifier's Fade-opacity visibility check
  // — which walks up to the nearest g.sc-fade, not an arbitrary ancestor —
  // sees the erasure correctly; seeking back into beat 0-2 restores
  // Example 3. Filled shapes (stars, chocolates, face dots) are wrapped in
  // <Fade>, never a filled <Draw> (a filled Draw paints permanently
  // regardless of beat state — the Sec28 gotcha).
  const aOn = beat >= 0 && beat < 3;
  const bOn = beat >= 3;

  /* ================= Group A, beat 1: 12-star row ================= */
  const N_STAR = 12;
  const STAR_SPACING = 22;
  const STAR_CY = 215;
  const STAR_R = 8;
  const starCenters = Array.from(
    { length: N_STAR },
    (_, i) => 540 - ((N_STAR - 1) * STAR_SPACING) / 2 + i * STAR_SPACING
  );

  /* ================= Group A, beat 1: 4 variable boxes ================= */
  const BOX_CXS = [351, 477, 603, 729];
  const BOX_W = 90;
  const BOX_H = 60;
  const BOX_Y = 260;
  const BOX_LETTERS = ["a", "b", "c", "d"];

  /* ================= Group A, beat 2: formula chain =================== */
  const a2Row1: Seg[] = [
    { text: "(12+4-1)C(4-1)", size: 22, weight: 800, fill: INK },
    { text: "=", size: 20, weight: 700, fill: INK },
    { text: "¹⁵C₃", size: 26, weight: 800, fill: INK },
  ];
  const a2Row1_L = layoutSegs(a2Row1, 540, 16);
  const A2_ROW1_Y = 390;

  const a2Row2: Seg[] = [
    { text: "=", size: 20, weight: 700, fill: INK },
    { text: "(15×14×13)/6", size: 22, weight: 800, fill: INK },
    { text: "=", size: 20, weight: 700, fill: INK },
    { text: "455", size: 32, weight: 800, fill: GREEN },
  ];
  const a2Row2_L = layoutSegs(a2Row2, 540, 16);
  const A2_ROW2_Y = 432;
  const a2Res = a2Row2[3];
  const a2BoxX = a2Row2_L.xs[3] - 14;
  const a2BoxW = a2Row2_L.widths[3] + 28;
  const a2BoxY = A2_ROW2_Y - 0.78 * a2Res.size - 10;
  const a2BoxH = (0.78 + 0.31) * a2Res.size + 20;

  /* ================= Group B, beat 4: 4 child icons + chocolates ======= */
  const CHILD_CXS = [351, 477, 603, 729];
  const CHILD_CY = 215;
  const CHILD_R = 18;
  const CHOC_Y = 249;
  const CHOC_SIZE = 12;
  const CHOC_GAP = 4;
  const TALLY_Y = 286;
  const TALLY_VALUES = ["2", "4", "6", "8"];

  /* ================= Group B, beat 5: formula chain ==================== */
  const b5Row1: Seg[] = [
    { text: "(7+4-1)C(4-1)", size: 22, weight: 800, fill: INK },
    { text: "=", size: 20, weight: 700, fill: INK },
    { text: "¹⁰C₃", size: 26, weight: 800, fill: INK },
  ];
  const b5Row1_L = layoutSegs(b5Row1, 540, 16);
  const B5_ROW1_Y = 390;

  const b5Row2: Seg[] = [
    { text: "=", size: 20, weight: 700, fill: INK },
    { text: "(10×9×8)/6", size: 22, weight: 800, fill: INK },
    { text: "=", size: 20, weight: 700, fill: INK },
    { text: "120", size: 32, weight: 800, fill: GREEN },
  ];
  const b5Row2_L = layoutSegs(b5Row2, 540, 16);
  const B5_ROW2_Y = 432;
  const b5Res = b5Row2[3];
  const b5BoxX = b5Row2_L.xs[3] - 14;
  const b5BoxW = b5Row2_L.widths[3] + 28;
  const b5BoxY = B5_ROW2_Y - 0.78 * b5Res.size - 10;
  const b5BoxH = (0.78 + 0.31) * b5Res.size + 20;

  /* ================= Group B, beat 6: guardrail ========================= */
  const g6Line1 = t("Pre-allocate the minimum first.", "Pehle minimum pre-allocate karo.");
  const g6Line2 = t(
    "Bounded problem -> clean non-negative case.",
    "Bounded problem -> clean non-negative case ban jaata hai."
  );
  const g6W = Math.max(wEst(g6Line1, 18, 800), wEst(g6Line2, 15, 600)) + 80;
  const g6X = 540 - g6W / 2;
  const g6Y = 470;
  const g6H = 95;

  return (
    <Scene>
      {/* title always-on */}
      <Fade on={true}>
        <T x={540} y={70} size={24} fill={RED} script>
          {t("Integer solutions and lower bounds", "Integer solutions aur lower bounds")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.4)} d={lineD(400, 94, 680, 94)} stroke={AMBER} sw={2} dur={0.6} />

      {/* ===================== Group A — Example 3 (beats 0-2) ===================== */}

      {/* beat 0 — heading: the given equation */}
      <Fade on={aOn} delay={dl(0, 0.3)}>
        <T x={540} y={118} size={15} fill={AMBER_DARK} weight={700}>
          {t("Example 3 (JEE Main)", "Example 3 (JEE Main)")}
        </T>
      </Fade>
      <Fade on={aOn} delay={dl(0, 0.9)}>
        <T x={540} y={155} size={24} fill={INK} weight={800}>
          {"a + b + c + d = 12"}
        </T>
      </Fade>
      <Fade on={aOn} delay={dl(0, 1.5)}>
        <T x={540} y={182} size={14} fill={MUTED}>
          {t("(non-negative integer solutions)", "(non-negative integer solutions chahiye)")}
        </T>
      </Fade>

      {/* beat 1 — setup: 12 identical units (stars) into 4 distinct boxes */}
      {starCenters.map((cx, i) => (
        <Fade key={`st${i}`} on={aOn && beat >= 1} delay={dl(1, 0.2 + i * 0.1)}>
          <Path d={starD(cx, STAR_CY, STAR_R)} fill={AMBER} stroke={AMBER_DARK} strokeWidth={1.4} />
        </Fade>
      ))}
      <Fade on={aOn && beat >= 1} delay={dl(1, 1.7)}>
        <T x={540} y={244} size={13} fill={MUTED}>
          {t("12 identical units", "12 identical units (same jaisa)")}
        </T>
      </Fade>

      {BOX_CXS.map((cx, i) => (
        <React.Fragment key={`box${i}`}>
          <Draw
            on={aOn && beat >= 1}
            delay={dl(1, 2.1 + i * 0.45)}
            d={roundRectD(cx - BOX_W / 2, BOX_Y, BOX_W, BOX_H, 10)}
            stroke={INK}
            sw={2}
            dur={0.5}
          />
          <Fade on={aOn && beat >= 1} delay={dl(1, 2.35 + i * 0.45)}>
            <T x={cx} y={BOX_Y + BOX_H / 2 + 7} size={20} fill={INK} weight={800}>
              {BOX_LETTERS[i]}
            </T>
          </Fade>
          <Fade on={aOn && beat >= 1} delay={dl(1, 2.55 + i * 0.45)}>
            <T x={cx} y={BOX_Y + BOX_H + 16} size={13} fill={MUTED} weight={600}>
              {"≥ 0"}
            </T>
          </Fade>
        </React.Fragment>
      ))}

      <Fade on={aOn && beat >= 1} delay={dl(1, 4.4)}>
        <T x={540} y={362} size={14} fill={AMBER_DARK} weight={600}>
          {t(
            "n = 12, k = 4 -> non-negative stars & bars",
            "n = 12, k = 4 -> non-negative stars & bars (wahi trick)"
          )}
        </T>
      </Fade>

      {/* beat 2 — formula chain, builds and lands boxed (HIGH) */}
      {a2Row1.map((s, i) => (
        <Fade key={`a2r1-${i}`} on={aOn && beat >= 2} delay={dl(2, i * 0.6)}>
          <T x={a2Row1_L.xs[i]} y={A2_ROW1_Y} size={s.size} fill={s.fill} weight={s.weight} anchor="start">
            {s.text}
          </T>
        </Fade>
      ))}
      {a2Row2.map((s, i) => (
        <Fade key={`a2r2-${i}`} on={aOn && beat >= 2} delay={dl(2, 2.2 + i * 0.6)}>
          <T x={a2Row2_L.xs[i]} y={A2_ROW2_Y} size={s.size} fill={s.fill} weight={s.weight} anchor="start">
            {s.text}
          </T>
        </Fade>
      ))}
      <Draw
        on={aOn && beat >= 2}
        delay={dl(2, 4.8)}
        d={roundRectD(a2BoxX, a2BoxY, a2BoxW, a2BoxH, 10)}
        stroke={GREEN}
        sw={2.2}
        dur={0.6}
      />
      <Draw
        on={aOn && beat >= 2}
        delay={dl(2, 5.4)}
        d={checkD(a2BoxX + a2BoxW + 16, A2_ROW2_Y - 8, 14)}
        stroke={GREEN}
        sw={2.4}
        dur={0.4}
      />

      {/* ===================== Group B — Example 4, the centerpiece (beats 3-6) ===================== */}

      {/* beat 3 — heading: the given equation with lower bound */}
      <Fade on={bOn} delay={dl(3, 0.3)}>
        <T x={540} y={118} size={15} fill={AMBER_DARK} weight={700}>
          {t("Example 4 (JEE Advanced)", "Example 4 (JEE Advanced)")}
        </T>
      </Fade>
      <Fade on={bOn} delay={dl(3, 0.9)}>
        <T x={540} y={155} size={22} fill={INK} weight={800}>
          {"a + b + c + d = 15  (each ≥ 2)"}
        </T>
      </Fade>
      <Fade on={bOn} delay={dl(3, 1.5)}>
        <T x={540} y={182} size={14} fill={MUTED}>
          {t(
            "15 identical chocolates, 4 children, each at least 2",
            "15 identical chocolates, 4 bacchon ko, har ek ko kam se kam 2"
          )}
        </T>
      </Fade>

      {/* beat 4 — THE GIVE-TWO TRICK, made concrete: 4 children each get 2 */}
      {CHILD_CXS.map((cx, i) => (
        <React.Fragment key={`child${i}`}>
          <Draw
            on={bOn && beat >= 4}
            delay={dl(4, 0.3 + i * 1.0)}
            d={circleD(cx, CHILD_CY, CHILD_R)}
            stroke={INK}
            sw={2}
            dur={0.4}
          />
          <Fade on={bOn && beat >= 4} delay={dl(4, 0.45 + i * 1.0)}>
            <Circle cx={cx - 6} cy={CHILD_CY - 4} r={2} fill={INK} />
            <Circle cx={cx + 6} cy={CHILD_CY - 4} r={2} fill={INK} />
          </Fade>
          <Draw
            on={bOn && beat >= 4}
            delay={dl(4, 0.5 + i * 1.0)}
            d={`M ${cx - 7} ${CHILD_CY + 5} Q ${cx} ${CHILD_CY + 11} ${cx + 7} ${CHILD_CY + 5}`}
            stroke={INK}
            sw={1.8}
            dur={0.3}
          />
          {/* 2 chocolate squares pre-allocated to this child */}
          <Fade on={bOn && beat >= 4} delay={dl(4, 0.7 + i * 1.0)}>
            <Rect
              x={cx - CHOC_SIZE - CHOC_GAP / 2}
              y={CHOC_Y}
              width={CHOC_SIZE}
              height={CHOC_SIZE}
              rx={2}
              fill={AMBER_DARK}
            />
          </Fade>
          <Fade on={bOn && beat >= 4} delay={dl(4, 0.8 + i * 1.0)}>
            <Rect
              x={cx + CHOC_GAP / 2}
              y={CHOC_Y}
              width={CHOC_SIZE}
              height={CHOC_SIZE}
              rx={2}
              fill={AMBER_DARK}
            />
          </Fade>
          {/* running cumulative tally: 2, 4, 6, 8 */}
          <Fade on={bOn && beat >= 4} delay={dl(4, 1.0 + i * 1.0)}>
            <T
              x={cx}
              y={TALLY_Y}
              size={16}
              fill={i === 3 ? GREEN : AMBER_DARK}
              weight={800}
            >
              {TALLY_VALUES[i]}
            </T>
          </Fade>
        </React.Fragment>
      ))}

      <Fade on={bOn && beat >= 4} delay={dl(4, 4.6)}>
        <T x={540} y={318} size={19} fill={INK} weight={700}>
          {t("4 × 2 = 8 used", "4 × 2 = 8 diye — used")}
        </T>
      </Fade>
      <Fade on={bOn && beat >= 4} delay={dl(4, 5.4)}>
        <T x={540} y={356} size={24} fill={GREEN} weight={800}>
          {t("15 − 8 = 7 remain", "15 − 8 = 7 bache")}
        </T>
      </Fade>
      <Draw
        on={bOn && beat >= 4}
        delay={dl(4, 6.0)}
        d={lineD(455, 366, 625, 366)}
        stroke={GREEN}
        sw={2}
        dur={0.4}
      />

      {/* beat 5 — formula chain on the remaining 7, builds and lands boxed (HIGH) */}
      {b5Row1.map((s, i) => (
        <Fade key={`b5r1-${i}`} on={bOn && beat >= 5} delay={dl(5, i * 0.6)}>
          <T x={b5Row1_L.xs[i]} y={B5_ROW1_Y} size={s.size} fill={s.fill} weight={s.weight} anchor="start">
            {s.text}
          </T>
        </Fade>
      ))}
      {b5Row2.map((s, i) => (
        <Fade key={`b5r2-${i}`} on={bOn && beat >= 5} delay={dl(5, 2.2 + i * 0.6)}>
          <T x={b5Row2_L.xs[i]} y={B5_ROW2_Y} size={s.size} fill={s.fill} weight={s.weight} anchor="start">
            {s.text}
          </T>
        </Fade>
      ))}
      <Draw
        on={bOn && beat >= 5}
        delay={dl(5, 4.8)}
        d={roundRectD(b5BoxX, b5BoxY, b5BoxW, b5BoxH, 10)}
        stroke={GREEN}
        sw={2.2}
        dur={0.6}
      />
      <Draw
        on={bOn && beat >= 5}
        delay={dl(5, 5.4)}
        d={checkD(b5BoxX + b5BoxW + 16, B5_ROW2_Y - 8, 14)}
        stroke={GREEN}
        sw={2.4}
        dur={0.4}
      />

      {/* beat 6 — guardrail: the generalized master move (final, red) */}
      <Draw
        on={bOn && beat >= 6}
        delay={dl(6, 0)}
        d={roundRectD(g6X, g6Y, g6W, g6H, 16)}
        stroke={RED}
        sw={2.2}
        dur={0.7}
      />
      <Fade on={bOn && beat >= 6} delay={dl(6, 0)}>
        <Rect x={g6X} y={g6Y} width={g6W} height={g6H} rx={16} fill={CREAM} opacity={0.6} />
      </Fade>
      <Fade on={bOn && beat >= 6} delay={dl(6, 0.8)}>
        <T x={540} y={g6Y + 38} size={18} fill={RED} weight={800}>
          {g6Line1}
        </T>
      </Fade>
      <Fade on={bOn && beat >= 6} delay={dl(6, 1.4)}>
        <T x={540} y={g6Y + 66} size={15} fill={INK} weight={600}>
          {g6Line2}
        </T>
      </Fade>
    </Scene>
  );
}
