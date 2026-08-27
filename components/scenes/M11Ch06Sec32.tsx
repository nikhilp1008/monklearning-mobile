/**
 * M11 Ch06 · Section 32 — "Total selections: distinct vs alike"
 * SIXTH section of Subtopic "Total Selections, Grouping & Distribution
 * (Stars and Bars)". worked_examples section_type — TWO worked examples,
 * the direct payoff of Sec27's 2ⁿ/2ⁿ-1 and Sec29/Sec31's mixed
 * alike+distinct formula (p+1)(q+1)⋯2ᵈ. Canvas 1080×620 · safe x36–1044,
 * y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 *
 * Beats (board_reveal_at_english [0,6.4,28.5,40.45,61.1,73.98],
 * hinglish [0,6.14,27.65,38.57,58.45,69.97]):
 *  0 heading (Example 1, foundational): 5 distinct keychains, buy ≥1
 *  [group A: aOn = beat 0..1, erased at beat>=2]
 *  1 (HIGH) setup 5 distinct keychains (5 outline circles, distinct
 *    letters A-E) → formula builds "2⁵ − 1" → "= 32 − 1" → boxed "= 31"
 *  [group A erased at beat>=2 — full board freed for Example 2]
 *  [group B: bOn = beat>=2, final, never erased — Example 2, the trap]
 *  2 heading + setup: pool of 6 fruit — 3 RED identical (clustered,
 *    boxed) + 2 GREEN identical (clustered, boxed) + 1 ORANGE alone (no
 *    box — visually "distinct/solo")
 *  3 text: each alike group's choice-count lands in its own column below
 *    the group — red "0 to 3 taken" → "4 choices", green "0 to 2 taken"
 *    → "3 choices", orange "in or out" → "2 choices"
 *  4 (HIGH) formula builds "4 × 3 × 2 − 1" → "= 24 − 1" → boxed "= 23"
 *    (directly reuses beat 3's landed 4/3/2)
 *  5 (red guardrail, final) the trap: "2⁶ − 1 = 64 − 1 = 63" with "63"
 *    crossed out in red, contrasted against the correct "23" — same chain-
 *    building pattern as the correct answer but landing in a cross instead
 *    of a box, so the visual parity itself sells the contrast
 *
 * Layout plan (boxes = estimated render boxes; longer language counts):
 *  always | title (script 24, red)                            | T mid | x~300..780 y39..82
 *  b0 | title underline flourish (amber)                        | Draw | x400..680 y94
 *  [group A: aOn = beat 0..1, erased at beat>=2]
 *  a0 | label "Example 1 (foundational)" (15,amber-dk,w700)       | T mid | x~440..640 y106..123
 *  a0 | statement "5 distinct keychains..." (20,ink,w600)          | T mid | x~335..745 y134..156
 *  a1 | 5 outline circles r22 + letters A-E (ink)                   | Draw/T| x378..702 y173..217
 *  a1 | caption "each keychain is different" (14,muted)               | T mid | x~440..640 y227..242
 *  a1 | chain "2⁵-1" "=" "32-1" "=" "31"(green,boxed) (30/26/36,w800/700)| T st | x~370..712 y268..324
 *  a1 | hero box (green) + checkmark                                   | Draw | ~x654..726 y258..319
 *  [group A erased at beat>=2]
 *  [group B: bOn = beat>=2, final]
 *  b2 | label "Example 2 (the trap)" (15,red,w700)                     | T mid | x~440..640 y106..123
 *  b2 | statement "3 red + 2 green..." (19,ink,w600)                    | T mid | x~255..825 y135..156
 *  b2 | RED cluster: 3 filled dots r14 + box (red)                       | Fade/Draw| x168..252 y172..248
 *  b2 | GREEN cluster: 2 filled dots r16 + box (green)                    | Fade/Draw| x496..584 y178..234
 *  b2 | ORANGE: 1 filled dot r20, no box (amber)                          | Fade | x850..890 y186..226
 *  b2 | captions "3 RED.." "2 GREEN.." "1 ORANGE.." (14,w700)               | T mid | per-col y261..274
 *  b3 | explain "Alike groups: count HOW MANY.." (18,ink,w600)               | T mid | x~330..750 y292..312
 *  b3 | per-col lineA (range, 14,muted) + lineB (choice count, 22,green,w800)| T mid | per-col y329..385
 *  b4 | chain "4×3×2-1" "=" "24-1" "=" "23"(green,boxed) (28/24/38,w800/700) | T st | x~355..725 y406..466
 *  b4 | hero box (green) + checkmark                                       | Draw | ~x666..742 y396..458
 *  b5 | guardrail card (700w, h110, red outline)                           | Draw | x190..890 y482..592
 *  b5 | title "Trap: treat all 6 as distinct?" (18,red,w800)                | T mid | x~380..700 y494..512
 *  b5 | formula "2⁶-1=64-1=" (ink) "63"(red,crossed) (20/22,w800)            | T st | x~420..660 y526..551
 *  b5 | caption "Over-counts..." (ink) "23"(green) (14/16)                   | T st | x~360..720 y563..581
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
  crossD,
  INK,
  MUTED,
  GREEN,
  RED,
  AMBER,
  AMBER_DARK,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD, lineD, checkD, circleD } from "./math-kit";

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
  return { widths, total, xs, endCursor: cursor };
}

export default function M11Ch06Sec32({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  // Group A (beats 0-1: Example 1, the short foundational all-distinct
  // reminder) is erased once Example 2 — the section's centerpiece "trap"
  // — needs the full board at beat 2; group B then owns the board for good.
  // Each element's own `on` is bounded to its beat window (aOn/bOn && beat
  // >= k) rather than a wrapper div's opacity, so the verifier's Fade-
  // opacity visibility check — which walks up to the nearest g.sc-fade, not
  // an arbitrary ancestor — sees the erasure correctly; seeking back into
  // beat 0/1 correctly restores Example 1. Filled shapes (the fruit dots)
  // are wrapped in <Fade>, never a filled <Draw> (a filled Draw paints
  // permanently regardless of beat state — the Sec28 gotcha).
  const aOn = beat >= 0 && beat < 2;
  const bOn = beat >= 2;

  /* ================= Group A, beat 1: 5-keychain pool ================= */
  const KEY_CXS = [400, 470, 540, 610, 680];
  const KEY_CY = 195;
  const KEY_R = 22;
  const KEY_LETTERS = ["A", "B", "C", "D", "E"];

  /* ================= Group A, beat 1: formula chain "2⁵-1=32-1=31" ===== */
  const chainA: Seg[] = [
    { text: "2⁵ − 1", size: 30, weight: 800, fill: INK },
    { text: "=", size: 26, weight: 700, fill: INK },
    { text: "32 − 1", size: 30, weight: 800, fill: INK },
    { text: "=", size: 26, weight: 700, fill: INK },
    { text: "31", size: 36, weight: 800, fill: GREEN },
  ];
  const chainA_L = layoutSegs(chainA, 540, 16);
  const CHAIN_A_Y = 296;
  const resA = chainA[4];
  const boxA_x = chainA_L.xs[4] - 14;
  const boxA_w = chainA_L.widths[4] + 28;
  const boxA_y = CHAIN_A_Y - 0.78 * resA.size - 10;
  const boxA_h = (0.78 + 0.31) * resA.size + 20;

  /* ================= Group B, beat 2: 6-fruit pool ====================== */
  const RED_CX = 210;
  const RED_DOTS = [
    { cx: 194, cy: 198, r: 14 },
    { cx: 226, cy: 198, r: 14 },
    { cx: 210, cy: 222, r: 14 },
  ];
  const RED_BOX = { x: 168, y: 172, w: 84, h: 76 };

  const GREEN_CX = 540;
  const GREEN_DOTS = [
    { cx: 524, cy: 206, r: 16 },
    { cx: 556, cy: 206, r: 16 },
  ];
  const GREEN_BOX = { x: 496, y: 178, w: 88, h: 56 };

  const ORANGE_CX = 870;
  const ORANGE_DOT = { cx: 870, cy: 206, r: 20 };

  const CAPTION_B_Y = 272;

  /* ================= Group B, beat 3: per-column choice counts ========== */
  const EXPLAIN_Y = 306;
  const LINE_A_Y = 340;
  const LINE_B_Y = 378;

  /* ================= Group B, beat 4: formula chain "4×3×2-1=24-1=23" === */
  const chainB: Seg[] = [
    { text: "4 × 3 × 2 − 1", size: 28, weight: 800, fill: INK },
    { text: "=", size: 24, weight: 700, fill: INK },
    { text: "24 − 1", size: 28, weight: 800, fill: INK },
    { text: "=", size: 24, weight: 700, fill: INK },
    { text: "23", size: 38, weight: 800, fill: GREEN },
  ];
  const chainB_L = layoutSegs(chainB, 540, 16);
  const CHAIN_B_Y = 436;
  const resB = chainB[4];
  const boxB_x = chainB_L.xs[4] - 14;
  const boxB_w = chainB_L.widths[4] + 28;
  const boxB_y = CHAIN_B_Y - 0.78 * resB.size - 10;
  const boxB_h = (0.78 + 0.31) * resB.size + 20;

  /* ================= Group B, beat 5: guardrail — the trap ============== */
  const CARD_X = 190;
  const CARD_Y = 482;
  const CARD_W = 700;
  const CARD_H = 110;
  const CARD_TITLE_Y = 508;
  const CARD_FORMULA_Y = 543;
  const CARD_CAPTION_Y = 576;

  const guardFormula: Seg[] = [
    { text: "2⁶ − 1 = 64 − 1 =", size: 20, weight: 800, fill: INK },
    { text: "63", size: 22, weight: 800, fill: RED },
  ];
  const guardFormula_L = layoutSegs(guardFormula, 540, 14);
  const wrongSeg = guardFormula[1];
  const crossX = guardFormula_L.xs[1];
  const crossW = guardFormula_L.widths[1];
  const crossY = CARD_FORMULA_Y - 0.78 * wrongSeg.size;
  const crossH = (0.78 + 0.31) * wrongSeg.size;

  const guardCaption: Seg[] = [
    {
      text: t(
        "Over-counts identical fruit — correct answer:",
        "Identical fruit over-count — sahi jawaab:"
      ),
      size: 14,
      weight: 600,
      fill: INK,
    },
    { text: "23", size: 16, weight: 800, fill: GREEN },
  ];
  const guardCaption_L = layoutSegs(guardCaption, 540, 10);

  return (
    <Scene>
      {/* title always-on */}
      <Fade on={true}>
        <T x={540} y={70} size={24} fill={RED} script>
          {t("Total selections: distinct vs alike", "Total selections: distinct ya alike")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.4)} d={lineD(400, 94, 680, 94)} stroke={AMBER} sw={2} dur={0.6} />

      {/* ===================== Group A — Example 1 (beats 0-1) ===================== */}

      {/* beat 0 — heading */}
      <Fade on={aOn} delay={dl(0, 0.3)}>
        <T x={540} y={118} size={15} fill={AMBER_DARK} weight={700}>
          {t("Example 1 (foundational)", "Example 1 (foundational)")}
        </T>
      </Fade>
      <Fade on={aOn} delay={dl(0, 0.9)}>
        <T x={540} y={150} size={20} fill={INK} weight={600}>
          {t(
            "5 distinct keychains — buy at least one.",
            "5 distinct keychains — kam se kam ek kharido."
          )}
        </T>
      </Fade>

      {/* beat 1 — setup: 5 distinct keychains */}
      {KEY_CXS.map((cx, i) => (
        <React.Fragment key={i}>
          <Draw
            on={aOn && beat >= 1}
            delay={dl(1, 0.3 + i * 0.4)}
            d={circleD(cx, KEY_CY, KEY_R)}
            stroke={INK}
            sw={2}
            dur={0.45}
          />
          <Fade on={aOn && beat >= 1} delay={dl(1, 0.5 + i * 0.4)}>
            <T x={cx} y={KEY_CY + 6} size={18} fill={INK} weight={800}>
              {KEY_LETTERS[i]}
            </T>
          </Fade>
        </React.Fragment>
      ))}
      <Fade on={aOn && beat >= 1} delay={dl(1, 2.6)}>
        <T x={540} y={238} size={14} fill={MUTED}>
          {t("each keychain is different", "har keychain alag hai")}
        </T>
      </Fade>

      {/* beat 1 — formula chain, builds and lands boxed (HIGH) */}
      {chainA.map((s, i) => (
        <Fade key={i} on={aOn && beat >= 1} delay={dl(1, 3.2 + i * 0.6)}>
          <T x={chainA_L.xs[i]} y={CHAIN_A_Y} size={s.size} fill={s.fill} weight={s.weight} anchor="start">
            {s.text}
          </T>
        </Fade>
      ))}
      <Draw
        on={aOn && beat >= 1}
        delay={dl(1, 6.2)}
        d={roundRectD(boxA_x, boxA_y, boxA_w, boxA_h, 10)}
        stroke={GREEN}
        sw={2.2}
        dur={0.6}
      />
      <Draw
        on={aOn && beat >= 1}
        delay={dl(1, 6.8)}
        d={checkD(boxA_x + boxA_w + 16, CHAIN_A_Y - 8, 14)}
        stroke={GREEN}
        sw={2.4}
        dur={0.4}
      />

      {/* ===================== Group B — Example 2, the trap (beats 2-5) ===================== */}

      {/* beat 2 — heading */}
      <Fade on={bOn} delay={dl(2, 0.3)}>
        <T x={540} y={118} size={15} fill={RED} weight={700}>
          {t("Example 2 (the trap)", "Example 2 (the trap)")}
        </T>
      </Fade>
      <Fade on={bOn} delay={dl(2, 0.9)}>
        <T x={540} y={150} size={19} fill={INK} weight={600}>
          {t(
            "3 red + 2 green (identical) + 1 orange — pick at least one.",
            "3 red + 2 green (identical) + 1 orange — kam se kam ek chuno."
          )}
        </T>
      </Fade>

      {/* beat 2 — setup: the 6-fruit pool, red+green clustered, orange alone */}
      {RED_DOTS.map((d, i) => (
        <Fade key={i} on={bOn} delay={dl(2, 1.6 + i * 0.25)}>
          <Circle cx={d.cx} cy={d.cy} r={d.r} fill={RED} />
        </Fade>
      ))}
      <Draw
        on={bOn}
        delay={dl(2, 2.6)}
        d={roundRectD(RED_BOX.x, RED_BOX.y, RED_BOX.w, RED_BOX.h, 12)}
        stroke={RED}
        sw={1.8}
        dur={0.5}
      />
      {GREEN_DOTS.map((d, i) => (
        <Fade key={i} on={bOn} delay={dl(2, 3.0 + i * 0.25)}>
          <Circle cx={d.cx} cy={d.cy} r={d.r} fill={GREEN} />
        </Fade>
      ))}
      <Draw
        on={bOn}
        delay={dl(2, 3.7)}
        d={roundRectD(GREEN_BOX.x, GREEN_BOX.y, GREEN_BOX.w, GREEN_BOX.h, 12)}
        stroke={GREEN}
        sw={1.8}
        dur={0.5}
      />
      <Fade on={bOn} delay={dl(2, 4.1)}>
        <Circle cx={ORANGE_DOT.cx} cy={ORANGE_DOT.cy} r={ORANGE_DOT.r} fill={AMBER} />
      </Fade>

      <Fade on={bOn} delay={dl(2, 4.6)}>
        <T x={RED_CX} y={CAPTION_B_Y} size={14} fill={RED} weight={700}>
          {t("3 RED — identical", "3 RED — same jaisa")}
        </T>
      </Fade>
      <Fade on={bOn} delay={dl(2, 5.0)}>
        <T x={GREEN_CX} y={CAPTION_B_Y} size={14} fill={GREEN} weight={700}>
          {t("2 GREEN — identical", "2 GREEN — same jaisa")}
        </T>
      </Fade>
      <Fade on={bOn} delay={dl(2, 5.4)}>
        <T x={ORANGE_CX} y={CAPTION_B_Y} size={14} fill={AMBER_DARK} weight={700}>
          {t("1 ORANGE — distinct", "1 ORANGE — alag")}
        </T>
      </Fade>

      {/* beat 3 — each alike group's choice-count lands in its own column */}
      <Fade on={bOn && beat >= 3} delay={dl(3, 0)}>
        <T x={540} y={EXPLAIN_Y} size={18} fill={INK} weight={600}>
          {t("Alike groups: count HOW MANY you take.", "Alike groups: KITNE liye — yehi count karo.")}
        </T>
      </Fade>

      <Fade on={bOn && beat >= 3} delay={dl(3, 0.8)}>
        <T x={RED_CX} y={LINE_A_Y} size={14} fill={MUTED} weight={600}>
          {t("0 to 3 taken", "0 se 3 liye")}
        </T>
      </Fade>
      <Fade on={bOn && beat >= 3} delay={dl(3, 1.1)}>
        <T x={GREEN_CX} y={LINE_A_Y} size={14} fill={MUTED} weight={600}>
          {t("0 to 2 taken", "0 se 2 liye")}
        </T>
      </Fade>
      <Fade on={bOn && beat >= 3} delay={dl(3, 1.4)}>
        <T x={ORANGE_CX} y={LINE_A_Y} size={14} fill={MUTED} weight={600}>
          {t("in or out", "in ya out")}
        </T>
      </Fade>

      <Fade on={bOn && beat >= 3} delay={dl(3, 1.9)}>
        <T x={RED_CX} y={LINE_B_Y} size={22} fill={GREEN} weight={800}>
          {t("4 choices", "4 choices")}
        </T>
      </Fade>
      <Fade on={bOn && beat >= 3} delay={dl(3, 2.2)}>
        <T x={GREEN_CX} y={LINE_B_Y} size={22} fill={GREEN} weight={800}>
          {t("3 choices", "3 choices")}
        </T>
      </Fade>
      <Fade on={bOn && beat >= 3} delay={dl(3, 2.5)}>
        <T x={ORANGE_CX} y={LINE_B_Y} size={22} fill={GREEN} weight={800}>
          {t("2 choices", "2 choices")}
        </T>
      </Fade>

      {/* beat 4 — formula chain, builds and lands boxed (HIGH) */}
      {chainB.map((s, i) => (
        <Fade key={i} on={bOn && beat >= 4} delay={dl(4, i * 0.7)}>
          <T x={chainB_L.xs[i]} y={CHAIN_B_Y} size={s.size} fill={s.fill} weight={s.weight} anchor="start">
            {s.text}
          </T>
        </Fade>
      ))}
      <Draw
        on={bOn && beat >= 4}
        delay={dl(4, 3.4)}
        d={roundRectD(boxB_x, boxB_y, boxB_w, boxB_h, 10)}
        stroke={GREEN}
        sw={2.2}
        dur={0.6}
      />
      <Draw
        on={bOn && beat >= 4}
        delay={dl(4, 4.0)}
        d={checkD(boxB_x + boxB_w + 16, CHAIN_B_Y - 8, 14)}
        stroke={GREEN}
        sw={2.4}
        dur={0.4}
      />

      {/* beat 5 — guardrail: the trap, crossed out, final */}
      <Draw
        on={bOn && beat >= 5}
        delay={dl(5, 0)}
        d={roundRectD(CARD_X, CARD_Y, CARD_W, CARD_H, 14)}
        stroke={RED}
        sw={2.2}
        dur={0.8}
      />
      <Fade on={bOn && beat >= 5} delay={dl(5, 0.8)}>
        <T x={540} y={CARD_TITLE_Y} size={18} fill={RED} weight={800}>
          {t("Trap: treat all 6 as distinct?", "Trap: sab 6 ko distinct maano?")}
        </T>
      </Fade>
      {guardFormula.map((s, i) => (
        <Fade key={i} on={bOn && beat >= 5} delay={dl(5, 1.4 + i * 0.4)}>
          <T
            x={guardFormula_L.xs[i]}
            y={CARD_FORMULA_Y}
            size={s.size}
            fill={s.fill}
            weight={s.weight}
            anchor="start"
          >
            {s.text}
          </T>
        </Fade>
      ))}
      <Draw
        on={bOn && beat >= 5}
        delay={dl(5, 2.3)}
        d={crossD(crossX, crossY, crossW, crossH)}
        stroke={RED}
        sw={2}
        dur={0.4}
      />
      {guardCaption.map((s, i) => (
        <Fade key={i} on={bOn && beat >= 5} delay={dl(5, 2.9 + i * 0.4)}>
          <T
            x={guardCaption_L.xs[i]}
            y={CARD_CAPTION_Y}
            size={s.size}
            fill={s.fill}
            weight={s.weight}
            anchor="start"
          >
            {s.text}
          </T>
        </Fade>
      ))}
      <Draw
        on={bOn && beat >= 5}
        delay={dl(5, 3.7)}
        d={checkD(
          guardCaption_L.xs[1] + guardCaption_L.widths[1] + 14,
          CARD_CAPTION_Y - 5,
          12
        )}
        stroke={GREEN}
        sw={2.2}
        dur={0.4}
      />
    </Scene>
  );
}
