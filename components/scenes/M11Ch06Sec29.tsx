/**
 * M11 Ch06 · Section 29 — "Selections, stars & bars, and distribution
 * formulas" THIRD section of Subtopic "Total Selections, Grouping &
 * Distribution (Stars and Bars)". This is a DENSE formula-recap: seven
 * formulas + one guardrail, stating the CLOSED FORMS for the tools Sec27
 * (Tool 1: 2ⁿ subsets) and Sec28 (Tool 2: star/bar model, Tool 3: grouping
 * vs distribution) set up conceptually. Full derivation of WHY stars-and-
 * bars works is Sec30's job — this section states + verifies with numbers,
 * it does NOT re-derive the models. Canvas 1080×620 · safe x36–1044,
 * y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md. All nCr-style
 * expressions here use SYMBOLIC letters (n, r, k, m, g are variables) → plain
 * inline text "(n+r-1)C(r)" etc, no attempted super/subscript positioning of
 * the composite. Exponents (2ⁿ, 2ᵈ, kⁿ) use real superscript characters,
 * matching Sec4/Sec27's precedent (nʳ, 2ⁿ). Color convention for this dense
 * recap: GREEN = the landed/closed-form answer of every formula; a full
 * hero box + tiny "verified" touch is reserved for the 3 HIGH-flagged beats
 * (1, 3, 4) to keep visual hierarchy readable; RED is reserved for the
 * closing guardrail.
 *
 * Beats (board_reveal_at_english [0,9.39,18.18,32.09,47.27,63.49,79.27,86.27],
 * hinglish [0,7.94,16.47,29.01,44.89,59.39,77.65,84.91]):
 *  0 heading (= title, always-on) + amber underline flourish
 *  [group A: aOn = beat 0..2, erased at beat>=3 — Tool 1 recap]
 *  1 (HIGH) subsets recap: 2ⁿ (incl. empty), at least one → 2ⁿ - 1, boxed
 *  2 mixed alike+distinct generalization: (p+1)(q+1)⋯2ᵈ, AND-multiply
 *  [group A erased at beat>=3]
 *  [group B: bOn = beat 3..4, erased at beat>=5 — Tool 2's payoff pair,
 *   given real visual weight: hero box + tiny star/bar icon callback]
 *  3 (HIGH) stars-and-bars closed formula: (n+r-1)C(r) = (n+r-1)C(n-1),
 *    boxed, tiny S S | S icon reference (Sec28's model, not rebuilt)
 *  4 (HIGH) classic application: x₁+⋯+xₖ=n → non-neg (n+k-1)C(k-1) card,
 *    positive (n-1)C(k-1) card, side by side
 *  [group B erased at beat>=5]
 *  [group C: cOn = beat>=5, final, never erased — Tool 3 + bonus]
 *  5 grouping formula: n!/(m₁!·m₂!⋯), ÷g! for g equal unlabelled groups
 *  6 new formula: n distinct objects into k distinct boxes → kⁿ
 *  7 (red guardrail, final) "at least one per box" → pre-give trick,
 *    ties back to beat 4's positive-solutions technique
 *
 * Layout plan (boxes = estimated render boxes; longer language counts):
 *  always | title (script 24, red)                         | T mid | x~330..750 y39..82
 *  [group A: aOn = beat 0..2, erased at beat>=3]
 *  b0 | title underline flourish (amber)                     | Draw | x380..700 y94
 *  b1 | line1 "Subsets...: " + "2ⁿ"(green,34) (22/34,w600/800) | T st | x~303..777 y126..168
 *  b1 | line2 "At least one...: " + "2ⁿ-1"(green,34)            | T st | x~303..777 y182..224
 *  b1 | caption "(Tool 1 recap - Sec27)" (14,muted)              | T mid| x~440..640 y238..252
 *  b1 | hero box (green, rounded)                                | Draw | x303..777 y108..266
 *  b2 | label "Mixed group: p alike..." (20,ink,w600)              | T mid| x~250..830 y300..322
 *  b2 | formula "(p+1)(q+1)⋯2ᵈ" (32,green,w800)                     | T mid| x~401..679 y339..380
 *  b2 | caption "(AND-multiply each group's count)" (14,amber-dk)     | T mid| x~350..730 y393..408
 *  [group A erased at beat>=3]
 *  [group B: bOn = beat 3..4, erased at beat>=5]
 *  b3 | formula "(n+r-1)C(r)" "=" "(n+r-1)C(n-1)"(green) (28,w800)      | T st | x275..805 y128..159
 *  b3 | checkmark (green)                                                | Draw | x~+20 y~146..160
 *  b3 | caption "(choose star-slots = bar-slots - Sec20)" (14,amber-dk)   | T mid| x~350..730 y174..192
 *  b3 | tiny S S | S icon (4 slots, 24px each)                            | Draw/Fade| x492..588 y208..236
 *  b3 | icon label "r star-slots, n-1 bar-slots" (13,muted)                | T mid| x~440..640 y254..267
 *  b3 | hero box (green, rounded)                                          | Draw | x275..805 y108..282
 *  b4 | equation "x₁+x₂+⋯+xₖ" "= n" (28,ink,w800)                          | T st | x~380..700 y308..338
 *  b4 | 2 cards (300×100, gap100)                                          | Draw | x190..890 y376..476
 *  b4 | card1 label "non-negative (xᵢ≥0)" (14,muted)                        | T mid| x220..460 y392..410
 *  b4 | card1 formula "(n+k-1)C(k-1)" (26,green,w800)                       | T mid| x235..445 y431..460
 *  b4 | card2 label "positive (xᵢ≥1)" (14,muted)                            | T mid| x620..860 y392..410
 *  b4 | card2 formula "(n-1)C(k-1)" (26,green,w800)                         | T mid| x650..830 y431..460
 *  b4 | caption "(positive: pre-give 1 each, then n-k freely)" (14,amber-dk)| T mid| x~300..780 y494..510
 *  [group B erased at beat>=5]
 *  [group C: cOn = beat>=5, final]
 *  b5 | label "Divide n into groups m₁, m₂,...:" (19,ink,w600)              | T mid| x~360..720 y104..126
 *  b5 | formula "n!/(m₁!·m₂!⋯)" (30,green,w800)                             | T mid| x~418..662 y145..178
 *  b5 | clause "÷ g! if g groups equal & unlabelled" (16,amber-dk,w600)      | T mid| x~340..740 y193..212
 *  b5 | caption "(Sec14/Sec23 recap)" (13,muted)                             | T mid| x~462..618 y228..242
 *  b6 | label "n distinct objects, k distinct boxes:" (19,ink,w600)          | T mid| x~360..720 y285..307
 *  b6 | formula "kⁿ" (32,green,w800)                                        | T mid| x~522..558 y325..360
 *  b6 | caption "(each object independently picks 1 of k)" (14,muted)        | T mid| x~379..701 y376..390
 *  b7 | guardrail card (dynamic w, h148, red outline)                        | Draw | x~262..818 y420..568
 *  b7 | warning triangle icon (red)                                          | Draw | x~524..556 y436..456
 *  b7 | line1 "'At least one per box' →" (19,red,w800)                       | T mid| x~370..710 y470..494
 *  b7 | line2 "give one to each first..." (17,ink,w600)                      | T mid| x~262..818 y504..521
 *  b7 | line3 "(same trick as positive-solutions above)" (13,amber-dk)        | T mid| x~340..740 y534..548
 */

import React from "react";
import { Circle, Path } from 'react-native-svg';
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
  Scene,
} from '@/components/scenes/kit';
import { roundRectD, lineD, checkD } from "./math-kit";

/** 5-point star as a fillable path — local device, same as Sec28's own
 * (SCENE_AUTHORING_MATHS.md: no special star/bar primitive exists or is
 * needed). Used here only as a tiny reference icon, not a full model. */
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

export default function M11Ch06Sec29({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  // Group A (beats 0-2: Tool 1 recap — subsets 2ⁿ/2ⁿ-1, the mixed alike+
  // distinct generalization) is erased once group B's payoff pair (beats
  // 3-4: the stars-and-bars closed formula + its classic equation-solutions
  // application) needs the full board; group B is in turn erased once the
  // closing group (beats 5-7: grouping formula, kⁿ, at-least-one-per-box
  // guardrail) lands for good. Each element's own `on` is bounded to its
  // beat window (aOn/bOn/cOn && beat >= k) rather than a wrapper div's
  // opacity, so the verifier's Fade-opacity visibility check — which walks
  // up to the nearest g.sc-fade, not an arbitrary ancestor — sees the
  // erasure correctly; seeking back into an earlier beat restores it.
  const aOn = beat >= 0 && beat < 3;
  const bOn = beat >= 3 && beat < 5;
  const cOn = beat >= 5;

  // ---- beat 1: subsets recap (HIGH) ----
  const b1Line1: Seg[] = [
    { text: t("Subsets of n distinct objects:", "n distinct objects ke subsets:"), size: 22, weight: 600, fill: INK },
    { text: "2ⁿ", size: 34, weight: 800, fill: GREEN },
  ];
  const b1Line2: Seg[] = [
    { text: t("At least one selected:", "Kam se kam ek selected:"), size: 22, weight: 600, fill: INK },
    { text: "2ⁿ - 1", size: 34, weight: 800, fill: GREEN },
  ];
  const b1L1 = layoutSegs(b1Line1, 540, 14);
  const b1L2 = layoutSegs(b1Line2, 540, 14);
  const b1BoxHalfW = Math.max(b1L1.total, b1L2.total) / 2 + 40;
  const b1BoxX = 540 - b1BoxHalfW;
  const b1BoxW = b1BoxHalfW * 2;

  // ---- beat 2: mixed alike+distinct generalization ----
  const b2Label = t(
    "Mixed group: p alike + q alike + ... + d distinct:",
    "Mixed group: p alike + q alike + ... + d distinct:"
  );
  const b2Formula = "(p+1)(q+1)⋯2ᵈ";
  const b2Caption = t(
    "(AND-multiply each group's own count)",
    "(har group ka count AND-multiply karo)"
  );

  // ---- beat 3: stars-and-bars closed formula (HIGH) ----
  const b3Formula: Seg[] = [
    { text: "(n+r-1)C(r)", size: 28, weight: 800, fill: INK },
    { text: "=", size: 28, weight: 800, fill: INK },
    { text: "(n+r-1)C(n-1)", size: 28, weight: 800, fill: GREEN },
  ];
  const b3L = layoutSegs(b3Formula, 540, 12);
  const b3Caption = t(
    "(choose star-slots = choose bar-slots - symmetry, Sec20)",
    "(star-slots choose = bar-slots choose - symmetry, Sec20)"
  );
  const b3CaptionW = wEst(b3Caption, 14, 400);
  const b3BoxHalfW = Math.max(b3L.total / 2 + 50, b3CaptionW / 2 + 40);
  const b3BoxX = 540 - b3BoxHalfW;
  const b3BoxW = b3BoxHalfW * 2;
  const b3CheckX = b3L.xs[2] + b3L.widths[2] + 20;

  // ---- beat 3 tiny star/bar icon: S S | S (a reference, not the full model) ----
  const iconPattern = [false, false, true, false];
  const iconSlotW = 24;
  const iconTotalW = iconPattern.length * iconSlotW;
  const iconLeft0 = 540 - iconTotalW / 2;
  const iconCenters = iconPattern.map((_, i) => iconLeft0 + i * iconSlotW + iconSlotW / 2);
  const iconCy = 222;
  const iconStarR = 8;
  const iconLabel = t("r star-slots, n-1 bar-slots", "r star-slots, n-1 bar-slots");

  // ---- beat 4: classic equation-solutions application (HIGH) ----
  const b4Eq: Seg[] = [
    { text: "x₁ + x₂ + ⋯ + xₖ", size: 28, weight: 800, fill: INK },
    { text: "= n", size: 28, weight: 800, fill: INK },
  ];
  const b4L = layoutSegs(b4Eq, 540, 10);
  const cardW = 300;
  const cardH = 100;
  const cardY = 376;
  const card1X = 190;
  const card2X = 590;
  const card1Cx = card1X + cardW / 2;
  const card2Cx = card2X + cardW / 2;
  const b4Card1Label = t("non-negative (each xᵢ ≥ 0)", "non-negative (har xᵢ ≥ 0)");
  const b4Card2Label = t("positive (each xᵢ ≥ 1)", "positive (har xᵢ ≥ 1)");
  const b4Caption = t(
    "(positive: pre-give 1 to each, then distribute n-k freely)",
    "(positive: pehle sabko 1 do, phir n-k freely baato)"
  );

  // ---- beat 5: grouping formula ----
  const b5Label = t(
    "Divide n into groups m₁, m₂, ...:",
    "n ko groups m₁, m₂, ... mein baato:"
  );
  const b5Formula = "n!/(m₁!·m₂!⋯)";
  const b5Clause = t(
    "÷ g! if g of those groups are equal & unlabelled",
    "÷ g! agar g groups equal & unlabelled hain"
  );
  const b5Caption = t("(Sec14/Sec23 recap)", "(Sec14/Sec23 wala)");

  // ---- beat 6: n distinct objects into k distinct boxes ----
  const b6Label = t(
    "n distinct objects, k distinct boxes:",
    "n distinct objects, k distinct boxes:"
  );
  const b6Formula = "kⁿ";
  const b6Caption = t(
    "(each object independently picks 1 of k boxes)",
    "(har object independently 1 box choose karta hai)"
  );

  // ---- beat 7: guardrail (final, red) ----
  const g7Line1 = t("'At least one per box' →", "'Har box mein kam se kam ek' →");
  const g7Line2 = t(
    "give one to each first, then non-negative stars & bars",
    "pehle sabko ek do, phir non-negative stars & bars"
  );
  const g7Line3 = t(
    "(same trick as the positive-solutions formula above)",
    "(positive-solutions wale formula ka trick, upar wala)"
  );
  const g7W =
    Math.max(wEst(g7Line1, 19, 800), wEst(g7Line2, 17, 600), wEst(g7Line3, 13, 400)) + 80;
  const g7X = 540 - g7W / 2;
  const g7Y = 420;
  const g7H = 148;

  return (
    <Scene>
      {/* title always-on */}
      <Fade on={true}>
        <T x={540} y={70} size={24} fill={RED} script>
          {t("Your counting-toolkit board", "Tumhara counting-toolkit board")}
        </T>
      </Fade>
      <Draw
        on={aOn && beat >= 0}
        delay={dl(0, 0.4)}
        d={lineD(380, 94, 700, 94)}
        stroke={AMBER}
        sw={2}
        dur={0.6}
      />

      {/* ===================== Group A — beats 1-2, Tool 1 recap ===================== */}

      {/* beat 1 — subsets recap (HIGH) */}
      {b1Line1.map((s, i) => (
        <Fade key={`b1l1-${i}`} on={aOn && beat >= 1} delay={dl(1, 0 + i * 0.6)}>
          <T x={b1L1.xs[i]} y={150} size={s.size} fill={s.fill} weight={s.weight} anchor="start">
            {s.text}
          </T>
        </Fade>
      ))}
      {b1Line2.map((s, i) => (
        <Fade key={`b1l2-${i}`} on={aOn && beat >= 1} delay={dl(1, 1.4 + i * 0.6)}>
          <T x={b1L2.xs[i]} y={210} size={s.size} fill={s.fill} weight={s.weight} anchor="start">
            {s.text}
          </T>
        </Fade>
      ))}
      <Fade on={aOn && beat >= 1} delay={dl(1, 2.8)}>
        <T x={540} y={248} size={14} fill={MUTED}>
          {t("(Tool 1 recap - Sec27)", "(Tool 1 recap - Sec27 wala)")}
        </T>
      </Fade>
      <Draw
        on={aOn && beat >= 1}
        delay={dl(1, 3.4)}
        d={roundRectD(b1BoxX, 108, b1BoxW, 158, 16)}
        stroke={GREEN}
        sw={2.2}
        dur={0.9}
      />

      {/* beat 2 — mixed alike+distinct generalization */}
      <Fade on={aOn && beat >= 2} delay={dl(2, 0)}>
        <T x={540} y={316} size={20} fill={INK} weight={600}>
          {b2Label}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 2} delay={dl(2, 0.8)}>
        <T x={540} y={368} size={32} fill={GREEN} weight={800}>
          {b2Formula}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 2} delay={dl(2, 1.6)}>
        <T x={540} y={404} size={14} fill={AMBER_DARK}>
          {b2Caption}
        </T>
      </Fade>

      {/* ===================== Group B — beats 3-4, Tool 2's payoff pair ===================== */}

      {/* beat 3 — stars-and-bars closed formula (HIGH) */}
      {b3Formula.map((s, i) => (
        <Fade key={`b3-${i}`} on={bOn && beat >= 3} delay={dl(3, 0 + i * 0.6)}>
          <T x={b3L.xs[i]} y={150} size={s.size} fill={s.fill} weight={s.weight} anchor="start">
            {s.text}
          </T>
        </Fade>
      ))}
      <Draw
        on={bOn && beat >= 3}
        delay={dl(3, 2.0)}
        d={checkD(b3CheckX, 146, 14)}
        stroke={GREEN}
        sw={2.6}
        dur={0.4}
      />
      <Fade on={bOn && beat >= 3} delay={dl(3, 2.6)}>
        <T x={540} y={188} size={14} fill={AMBER_DARK}>
          {b3Caption}
        </T>
      </Fade>
      {iconPattern.map((isBar, i) =>
        isBar ? (
          <Draw
            key={`ic-${i}`}
            on={bOn && beat >= 3}
            delay={dl(3, 3.4 + i * 0.3)}
            d={lineD(iconCenters[i], iconCy - 14, iconCenters[i], iconCy + 14)}
            stroke={INK}
            sw={2.6}
            dur={0.3}
          />
        ) : (
          // filled star — Fade (real opacity), never Draw with a fill, per
          // the CRITICAL GOTCHA (Draw's `on` only animates strokeDashoffset,
          // a filled Draw paints permanently regardless of beat state).
          <Fade key={`ic-${i}`} on={bOn && beat >= 3} delay={dl(3, 3.4 + i * 0.3)}>
            <Path
              d={starD(iconCenters[i], iconCy, iconStarR)}
              fill={AMBER}
              stroke={AMBER_DARK}
              strokeWidth={1.4}
            />
          </Fade>
        )
      )}
      <Fade on={bOn && beat >= 3} delay={dl(3, 4.8)}>
        <T x={540} y={262} size={13} fill={MUTED}>
          {iconLabel}
        </T>
      </Fade>
      <Draw
        on={bOn && beat >= 3}
        delay={dl(3, 5.4)}
        d={roundRectD(b3BoxX, 108, b3BoxW, 174, 16)}
        stroke={GREEN}
        sw={2.2}
        dur={1.0}
      />

      {/* beat 4 — classic application: integer-equation solutions (HIGH) */}
      {b4Eq.map((s, i) => (
        <Fade key={`b4eq-${i}`} on={bOn && beat >= 4} delay={dl(4, 0 + i * 0.6)}>
          <T x={b4L.xs[i]} y={330} size={s.size} fill={s.fill} weight={s.weight} anchor="start">
            {s.text}
          </T>
        </Fade>
      ))}
      <Draw
        on={bOn && beat >= 4}
        delay={dl(4, 1.4)}
        d={
          roundRectD(card1X, cardY, cardW, cardH, 14) +
          " " +
          roundRectD(card2X, cardY, cardW, cardH, 14)
        }
        stroke={INK}
        sw={2}
        dur={0.8}
      />
      <Fade on={bOn && beat >= 4} delay={dl(4, 2.4)}>
        <T x={card1Cx} y={402} size={14} fill={MUTED}>
          {b4Card1Label}
        </T>
      </Fade>
      <Fade on={bOn && beat >= 4} delay={dl(4, 2.9)}>
        <T x={card1Cx} y={452} size={26} fill={GREEN} weight={800}>
          (n+k-1)C(k-1)
        </T>
      </Fade>
      <Fade on={bOn && beat >= 4} delay={dl(4, 3.4)}>
        <T x={card2Cx} y={402} size={14} fill={MUTED}>
          {b4Card2Label}
        </T>
      </Fade>
      <Fade on={bOn && beat >= 4} delay={dl(4, 3.9)}>
        <T x={card2Cx} y={452} size={26} fill={GREEN} weight={800}>
          (n-1)C(k-1)
        </T>
      </Fade>
      <Fade on={bOn && beat >= 4} delay={dl(4, 4.6)}>
        <T x={540} y={502} size={14} fill={AMBER_DARK}>
          {b4Caption}
        </T>
      </Fade>

      {/* ===================== Group C — beats 5-7, Tool 3 + bonus (final) ===================== */}

      {/* beat 5 — grouping formula */}
      <Fade on={cOn && beat >= 5} delay={dl(5, 0)}>
        <T x={540} y={120} size={19} fill={INK} weight={600}>
          {b5Label}
        </T>
      </Fade>
      <Fade on={cOn && beat >= 5} delay={dl(5, 0.8)}>
        <T x={540} y={168} size={30} fill={GREEN} weight={800}>
          {b5Formula}
        </T>
      </Fade>
      <Fade on={cOn && beat >= 5} delay={dl(5, 1.6)}>
        <T x={540} y={206} size={16} fill={AMBER_DARK} weight={600}>
          {b5Clause}
        </T>
      </Fade>
      <Fade on={cOn && beat >= 5} delay={dl(5, 2.4)}>
        <T x={540} y={238} size={13} fill={MUTED}>
          {b5Caption}
        </T>
      </Fade>

      {/* beat 6 — n distinct objects into k distinct boxes */}
      <Fade on={cOn && beat >= 6} delay={dl(6, 0)}>
        <T x={540} y={300} size={19} fill={INK} weight={600}>
          {b6Label}
        </T>
      </Fade>
      <Fade on={cOn && beat >= 6} delay={dl(6, 0.7)}>
        <T x={540} y={350} size={32} fill={GREEN} weight={800}>
          {b6Formula}
        </T>
      </Fade>
      <Fade on={cOn && beat >= 6} delay={dl(6, 1.3)}>
        <T x={540} y={386} size={14} fill={MUTED}>
          {b6Caption}
        </T>
      </Fade>

      {/* beat 7 — guardrail: at-least-one-per-box (final, red) */}
      <Draw
        on={cOn && beat >= 7}
        delay={dl(7, 0)}
        d={roundRectD(g7X, g7Y, g7W, g7H, 16)}
        stroke={RED}
        sw={2.2}
        dur={0.8}
      />
      <Draw
        on={cOn && beat >= 7}
        delay={dl(7, 0.9)}
        d={`M540 ${g7Y + 16} L524 ${g7Y + 42} L556 ${g7Y + 42} Z M540 ${g7Y + 24} L540 ${g7Y + 34}`}
        stroke={RED}
        sw={2.2}
        dur={0.5}
      />
      <Fade on={cOn && beat >= 7} delay={dl(7, 1.4)}>
        <Circle cx={540} cy={g7Y + 38} r={1.8} fill={RED} />
      </Fade>
      <Fade on={cOn && beat >= 7} delay={dl(7, 1.8)}>
        <T x={540} y={g7Y + 62} size={19} fill={RED} weight={800}>
          {g7Line1}
        </T>
      </Fade>
      <Fade on={cOn && beat >= 7} delay={dl(7, 2.4)}>
        <T x={540} y={g7Y + 96} size={17} fill={INK} weight={600}>
          {g7Line2}
        </T>
      </Fade>
      <Fade on={cOn && beat >= 7} delay={dl(7, 3.0)}>
        <T x={540} y={g7Y + 126} size={13} fill={AMBER_DARK}>
          {g7Line3}
        </T>
      </Fade>
    </Scene>
  );
}
