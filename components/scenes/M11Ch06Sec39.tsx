/**
 * M11 Ch06 · Section 39 — "Proofs I: collinear corrections, divisors, sum of
 * numbers" FIFTH section of Subtopic 5 "Counting Applications & Advanced
 * Tools" (section 5 of 9). Canvas 1080×620 · safe x36–1044, y30–596. Spec:
 * SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md ("concept" flow, but here
 * three compact PROOFS back to back rather than one Anchor→Land arc).
 *
 * This section derives, in front of the student, three results earlier
 * sections only STATED: the collinear correction (Sec35), the divisor-count
 * product formula (Sec36), and the sum-of-numbers-formed formula (Sec38).
 *
 * NOTATION: nCr/mCr symbolic → plain text ("nC2"/"mC2"/…). Compound
 * exponents (n−1 inside a power) use caret form "10^(n-1)", matching the
 * codebase's established convention for compound superscripts (Sec38's own
 * comment cites "u·e^(−kx)"/"r^(3⁄2)" as precedent) — a BARE single-symbol
 * superscript like "10ⁿ" (no compound) is fine natively per the glyph audit
 * and is reused verbatim from Sec38's own "(10ⁿ−1)/9" in the closing
 * caption. Subscripts eᵢ/aᵢ/pᵢ reuse the established plain-subscript device
 * (Sec36/Sec38). Σ used bare/prefix-style, same as Sec38's "Σd".
 *
 * Beats (board_reveal_at_english [0,8.96,25.09,38.49,60.33,72.62,88.58],
 * hinglish [0,7.94,24.23,40.79,61.61,73.3,85.33]):
 *  0 heading (= title, always-on) + amber underline flourish
 *  [group A: aOn = beat 1..3, erased at beat>=4 — PROOFS 1 & 2]
 *  1 PROOF 1 setup: baseline "no 3 collinear → lines = nC2" stated, then a
 *    compact 4-collinear-points diagram: a fan of 6 arced chords (one per
 *    pair, drawn RED as if each were "its own line") collapses onto the ONE
 *    real drawn line (AMBER) through the same 4 points — the over-count
 *    made visible — landing a GREEN reveal caption + a cross-out over the
 *    red "mC2 pairs?" claim.
 *  2 PROOF 1 landed: "lines = nC2 − mC2 + 1" (real GREEN ringed "+1" badge)
 *    vs "triangles = nC3 − mC3" (crossed ghost "+1" badge) — reuses Sec35's
 *    established asymmetric-badge vocabulary, scaled compact.
 *  3 PROOF 2 (single beat, compact): "Divisor d = p₁^e₁p₂^e₂⋯, 0≤eᵢ≤aᵢ" +
 *    a two-lane mini number-line diagram (one per prime's exponent range,
 *    side by side, joined by "×") visualizing INDEPENDENT choices, landing
 *    "→ independent choices multiply (FPC, Sec1)" then the boxed-free
 *    general formula "(a₁+1)(a₂+1)⋯".
 *  [group A erased at beat>=4 — full board freed for Proof 3]
 *  [group B: bOn = beat>=4, final group, never erased]
 *  4 PROOF 3 setup — THE KEY ARGUMENT, concrete: fix digit 3 into the UNITS
 *    slot of a Th/H/T/U four-slot row (resolving Sec36's own unfixed
 *    preview card), ring it green as FIXED; the other 3 slots hold {1,2,4}
 *    arranging in (n−1)!=3!=6 ways — landing "digit 3 sits in UNITS in
 *    exactly (n−1)!=6 of the n!=24 arrangements."
 *  5 PROOF 3 generalize: "the same argument works for ANY place" → "every
 *    digit sits in every place exactly (n−1)! times", then the repunit sum
 *    "1 + 10 + 100 + ⋯ + 10^(n-1)" assembled term by term and named.
 *  6 (HIGH, final) PROOF 3 landed, boxed: "sum = (Σd)(n−1)!(1 + 10 + ⋯ +
 *    10^(n-1))" + caption tying Σd back to Sec38's compact (10ⁿ−1)/9 form.
 *
 * Layout plan (boxes = estimated render boxes; longer language counts).
 *  always | title (script 24, red)                                 | T mid | x~210..870 y39..82
 *  b0 | title underline flourish (amber)                            | Draw | x350..730 y94
 *  [group A: aOn = beat 1..3, erased at beat>=4]
 *  b1 | L1 "no 3 collinear..." (15,ink,w600)                         | T mid| x~315..765 y96..111
 *  b1 | L2 "now suppose m..." (15,ink,w600)                           | T mid| x~342..738 y120..135
 *  b1 | 4 collinear dots (r5,ink) x260/360/460/560 y200                | circle| x255..565 y195..205
 *  b1 | 6-chord fan (red, one Draw path, bows above the row)             | Draw | x260..560 y154..200
 *  b1 | red label "mC2 pairs? (m=4 → 6)" (14,red,w700)                    | T st | x610..771 y167..182
 *  b1 | real line thru all 4 (amber, sw3)                                  | Draw | x250..570 y198..202
 *  b1 | green reveal "→ all mC2 pairs trace this ONE real line" (14,green) | T mid| x~263..557 y219..234
 *  b1 | cross-out over red label                                            | Draw | x610..775 y167..182
 *  b2 | row1 "lines = nC2 − mC2 + 1" (22,ink,w800)                          | T st | x210..478 y294..306
 *  b2 | row1 badge (r16, green "+1") + ring (rx22 ry18, amber)                | Fade/Draw| x494..574 y271..319
 *  b2 | row1 caption "→ add the 1 real line back" (13,green,w600)             | T st | x575..~763 y294..306
 *  b2 | row2 "triangles = nC3 − mC3" (22,ink,w800)                            | T st | x210..440 y366..378
 *  b2 | row2 ghost badge (r16 dashed) + crossed                                | Fade/Draw| x498..562 y343..391
 *  b2 | row2 caption "→ nothing to add back..." (13,red,w600)                   | T st | x575..~890 y366..378
 *  b3 | row1 "Divisor d = p₁^e₁ p₂^e₂⋯ : each eᵢ..." (14,ink,w600)               | T mid| x~320..760 y428..443
 *  b3 | axis1 [0,a₁] (closed dots) + axis2 [0,a₂] + "×"/"⋯"                       | Draw | x384..702 y472..490
 *  b3 | axis endpoint labels "0"/"a₁"/"0"/"a₂" (13,ink)                            | T mid| per-dot y494..508
 *  b3 | row3 "→ independent choices multiply (FPC, Sec1)" (14,amber-dk,w600)        | T mid| x~366..714 y521..536
 *  b3 | row4 "number of divisors = (a₁+1)(a₂+1)⋯" (22,green,w800)                    | T mid| x~281..799 y550..578
 *  [group A erased at beat>=4]
 *  [group B: bOn = beat>=4, final group]
 *  b4 | lead "fix ANY one digit — say 3 — into units" (17,ink,w600)                  | T mid| x~... y107..122
 *  b4 | 4 slots Th/H/T/U (40×40, muted)                                              | Draw | x442..638 y170..210
 *  b4 | digit "3" in U slot (22,ink,w800) + green ring (fixed)                        | Fade/Draw| x584..652 y158..222
 *  b4 | "← fixed" label (13,green,w700)                                                | T st | x665..~750 y189..201
 *  b4 | "?" in Th/H/T slots (18,muted)                                                  | T mid| per-slot y196
 *  b4 | slot labels Th/H/T/U (13,muted)                                                  | T mid| per-slot y227..237
 *  b4 | "{1,2,4} arrange...(n−1)!=3!=6 ways" (15,green,w700)                              | T mid| x~... y255..271
 *  b4 | "→ digit 3 sits in UNITS...n!=24 arrangements" (16,green,w700)                     | T mid| x~... y287..305
 *  b5 | row1 "same argument works for ANY place..." (16,ink,w600)                          | T mid| x~... y332..348
 *  b5 | row2 "→ every digit sits in every place...(n−1)! times" (16,green,w700)              | T mid| x~... y364..380
 *  b5 | row3 repunit sum, 5 segs assembled (20,ink,w700)                                     | T st | x404..676 y402..424
 *  b5 | row4 "called a REPUNIT..." (13,amber-dk,w600)                                          | T mid| x~... y441..456
 *  b6 (HIGH) | hero box (680×90, amber)                                                        | Draw | x200..880 y490..580
 *  b6 | formula "sum = (Σd)(n−1)!(1+10+⋯+10^(n-1))" (24,green,w800)                              | T mid| x~255..825 y516..542
 *  b6 | caption "(Σd = sum of digits; matches Sec38's (10ⁿ−1)/9 form)" (13,muted)                  | T mid| x~348..732 y555..569
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
import { roundRectD, lineD, IntervalDot } from "./math-kit";

/** Bowed chord (quadratic bezier) between two same-y points — local device
 * for the "fan of pairs" over collinear points (a one-off illustration, same
 * reasoning as Sec35's local triD: doesn't need a new math-kit primitive). */
function bowD(x1: number, x2: number, y: number, bow: number): string {
  return `M ${x1} ${y} Q ${(x1 + x2) / 2} ${y - bow} ${x2} ${y}`;
}

export default function M11Ch06Sec39({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  // Group A (beats 1-3: Proof 1 collinear correction + Proof 2 divisor FPC)
  // is fully erased once Proof 3 (beat 4) needs the whole board for its own
  // diagram. Group B (beats 4-6) is the final group, never erased. Each
  // element's own `on` is bounded to its beat window (rather than a wrapper
  // div's opacity) so the verifier's Fade-opacity visibility check — which
  // walks up to the nearest g.sc-fade, not an arbitrary ancestor — sees the
  // erasure too; seeking back into an earlier beat correctly restores it.
  const aOn = beat >= 1 && beat < 4;
  const bOn = beat >= 4;

  // ---- beat 1: 4 collinear points + 6-chord fan → collapses to ONE line ----
  const cx1 = 260, cx2 = 360, cx3 = 460, cx4 = 560, cy = 200;
  const fanD = [
    bowD(cx1, cx2, cy, 16),
    bowD(cx2, cx3, cy, 16),
    bowD(cx3, cx4, cy, 16),
    bowD(cx1, cx3, cy, 30),
    bowD(cx2, cx4, cy, 30),
    bowD(cx1, cx4, cy, 46),
  ].join(" ");
  const redLabelBox = { x: 610, y: 167.08, w: 161, h: 15.26 };

  // ---- beat 2: two corrected formulas, badges carry the asymmetry ----
  const row1Y = 300, row2Y = 372;
  const row1CenterY = row1Y - 0.24 * 22;
  const row2CenterY = row2Y - 0.24 * 22;
  const badgeCx = 530;

  // ---- beat 3: two mini number lines (independent exponent ranges) ----
  const axisY = 478;
  const ax1x1 = 390, ax1x2 = 480, ax2x1 = 550, ax2x2 = 640;

  // ---- beat 4: Th/H/T/U four-slot row, digit 3 fixed into U ----
  const slotXs = [442, 494, 546, 598];
  const slotLabels = ["Th", "H", "T", "U"];
  const slotY = 170, slotW = 40, slotH = 40;
  const uCx = slotXs[3] + slotW / 2;
  const uCy = slotY + slotH / 2;

  // ---- beat 5: repunit sum assembled term by term ----
  const sumSegs = [
    { text: "1", w: 10 },
    { text: "+ 10", w: 40 },
    { text: "+ 100", w: 50 },
    { text: "+ ⋯", w: 30 },
    { text: "+ 10^(n-1)", w: 110 },
  ];
  const sumGap = 8;
  const sumTotal = sumSegs.reduce((a, s) => a + s.w, 0) + sumGap * (sumSegs.length - 1);
  let sx0 = 540 - sumTotal / 2;
  const sumXs = sumSegs.map((s, i) => {
    if (i > 0) sx0 += sumGap;
    const x = sx0;
    sx0 += s.w;
    return x;
  });

  return (
    <Scene>
      {/* title always-on */}
      <Fade on={true}>
        <T x={540} y={70} size={24} fill={RED} script>
          {t("Why the geometric, divisor and sum formulas hold", "Geometry, divisor aur sum formulas kyun sach hain")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.4)} d={lineD(350, 94, 730, 94)} stroke={AMBER} sw={2} dur={0.6} />

      {/* ===================== Group A — beats 1-3 (Proofs 1 & 2) ===================== */}

      {/* beat 1 — PROOF 1 setup: baseline + the collinear over-count made visible */}
      <Fade on={aOn && beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={106} size={15} fill={INK} weight={600}>
          {t(
            "No 3 collinear ⇒ every pair is its own line: lines = nC2.",
            "Koi 3 collinear nahi ⇒ har pair apni line hai: lines = nC2."
          )}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 0.9)}>
        <T x={540} y={130} size={15} fill={INK} weight={600}>
          {t(
            "Now suppose m of the points lie on ONE shared line:",
            "Ab maano ki un points mein se m EK hi line par hain:"
          )}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 1.7)}>
        <Circle cx={cx1} cy={cy} r={5} fill={INK} />
        <Circle cx={cx2} cy={cy} r={5} fill={INK} />
        <Circle cx={cx3} cy={cy} r={5} fill={INK} />
        <Circle cx={cx4} cy={cy} r={5} fill={INK} />
      </Fade>
      <Draw on={aOn && beat >= 1} delay={dl(1, 2.3)} d={fanD} stroke={RED} sw={1.8} dur={0.9} />
      <Fade on={aOn && beat >= 1} delay={dl(1, 3.4)}>
        <T x={redLabelBox.x} y={178} size={14} fill={RED} weight={700} anchor="start">
          {t("mC2 pairs? (m = 4 → 6)", "mC2 pairs? (m = 4 → 6)")}
        </T>
      </Fade>
      <Draw
        on={aOn && beat >= 1}
        delay={dl(1, 4.1)}
        d={lineD(250, cy, 570, cy)}
        stroke={AMBER}
        sw={3}
        dur={0.6}
      />
      <Fade on={aOn && beat >= 1} delay={dl(1, 4.9)}>
        <T x={410} y={230} size={14} fill={GREEN} weight={700}>
          {t(
            "→ all mC2 pairs trace this ONE real line",
            "→ saare mC2 pairs isi EK real line ko banate hain"
          )}
        </T>
      </Fade>
      <Draw
        on={aOn && beat >= 1}
        delay={dl(1, 5.6)}
        d={crossD(redLabelBox.x, redLabelBox.y, redLabelBox.w, redLabelBox.h)}
        stroke={RED}
        sw={2}
        dur={0.4}
      />

      {/* beat 2 — PROOF 1 landed: the two corrected formulas, asymmetric badges */}
      <Fade on={aOn && beat >= 2} delay={dl(2, 0)}>
        <T x={210} y={row1Y} size={22} fill={INK} weight={800} anchor="start">
          lines = nC2 − mC2 + 1
        </T>
      </Fade>
      <Fade on={aOn && beat >= 2} delay={dl(2, 0.7)}>
        <Circle cx={badgeCx} cy={row1CenterY} r={16} fill={GREEN} />
        <T x={badgeCx} y={row1CenterY + 0.34 * 16} size={16} fill="#fff" weight={800}>
          +1
        </T>
      </Fade>
      <Draw
        on={aOn && beat >= 2}
        delay={dl(2, 1.3)}
        d={ringD(badgeCx, row1CenterY, 22, 18)}
        stroke={AMBER}
        sw={2}
        dur={0.5}
      />
      <Fade on={aOn && beat >= 2} delay={dl(2, 1.9)}>
        <T x={575} y={row1Y} size={13} fill={GREEN} weight={600} anchor="start">
          {t("→ add the 1 real line back", "→ 1 real line wapas add karo")}
        </T>
      </Fade>

      <Fade on={aOn && beat >= 2} delay={dl(2, 2.6)}>
        <T x={210} y={row2Y} size={22} fill={INK} weight={800} anchor="start">
          triangles = nC3 − mC3
        </T>
      </Fade>
      <Fade on={aOn && beat >= 2} delay={dl(2, 3.2)}>
        <Circle
          cx={badgeCx}
          cy={row2CenterY}
          r={16}
          fill={CREAM}
          stroke={MUTED}
          strokeWidth={1.8}
          strokeDasharray="5 4"
        />
        <T x={badgeCx} y={row2CenterY + 0.34 * 16} size={16} fill={MUTED} weight={800}>
          +1
        </T>
      </Fade>
      <Draw
        on={aOn && beat >= 2}
        delay={dl(2, 3.7)}
        d={crossD(badgeCx - 16, row2CenterY - 16, 32, 32)}
        stroke={RED}
        sw={2.2}
        dur={0.4}
      />
      <Fade on={aOn && beat >= 2} delay={dl(2, 4.3)}>
        <T x={575} y={row2Y} size={13} fill={RED} weight={600} anchor="start">
          {t(
            "→ nothing to add back (never a real triangle)",
            "→ kuch add nahi karna (kabhi real triangle nahi)"
          )}
        </T>
      </Fade>

      {/* beat 3 — PROOF 2: divisor FPC-independence argument, compact */}
      <Fade on={aOn && beat >= 3} delay={dl(3, 0)}>
        <T x={540} y={436} size={14} fill={INK} weight={600}>
          {t(
            "Divisor d = p₁^e₁ p₂^e₂⋯ : each eᵢ independent, 0 ≤ eᵢ ≤ aᵢ",
            "Divisor d = p₁^e₁ p₂^e₂⋯ : har eᵢ independent, 0 ≤ eᵢ ≤ aᵢ"
          )}
        </T>
      </Fade>
      <Draw
        on={aOn && beat >= 3}
        delay={dl(3, 0.9)}
        d={lineD(ax1x1, axisY, ax1x2, axisY)}
        stroke={INK}
        sw={2}
        dur={0.4}
      />
      <IntervalDot on={aOn && beat >= 3} delay={dl(3, 1.5)} x={ax1x1} y={axisY} open={false} r={6} />
      <IntervalDot on={aOn && beat >= 3} delay={dl(3, 1.7)} x={ax1x2} y={axisY} open={false} r={6} />
      <Fade on={aOn && beat >= 3} delay={dl(3, 2.0)}>
        <T x={ax1x1} y={500} size={13} fill={INK}>
          0
        </T>
        <T x={ax1x2} y={500} size={13} fill={INK}>
          a₁
        </T>
      </Fade>
      <Fade on={aOn && beat >= 3} delay={dl(3, 2.4)}>
        <T x={515} y={484} size={18} fill={INK} weight={700}>
          ×
        </T>
      </Fade>
      <Draw
        on={aOn && beat >= 3}
        delay={dl(3, 2.8)}
        d={lineD(ax2x1, axisY, ax2x2, axisY)}
        stroke={INK}
        sw={2}
        dur={0.4}
      />
      <IntervalDot on={aOn && beat >= 3} delay={dl(3, 3.4)} x={ax2x1} y={axisY} open={false} r={6} />
      <IntervalDot on={aOn && beat >= 3} delay={dl(3, 3.6)} x={ax2x2} y={axisY} open={false} r={6} />
      <Fade on={aOn && beat >= 3} delay={dl(3, 3.9)}>
        <T x={ax2x1} y={500} size={13} fill={INK}>
          0
        </T>
        <T x={ax2x2} y={500} size={13} fill={INK}>
          a₂
        </T>
      </Fade>
      <Fade on={aOn && beat >= 3} delay={dl(3, 4.3)}>
        <T x={675} y={484} size={18} fill={INK} weight={700}>
          ⋯
        </T>
      </Fade>
      <Fade on={aOn && beat >= 3} delay={dl(3, 4.9)}>
        <T x={540} y={528} size={14} fill={AMBER_DARK} weight={600}>
          {t(
            "→ independent choices multiply (FPC, Sec1)",
            "→ independent choices multiply hote hain (FPC, Sec1)"
          )}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 3} delay={dl(3, 5.6)}>
        <T x={540} y={571} size={22} fill={GREEN} weight={800}>
          number of divisors = (a₁+1)(a₂+1)⋯
        </T>
      </Fade>

      {/* ===================== Group B — beats 4-6 (Proof 3, centerpiece) ===================== */}

      {/* beat 4 — fix ANY one digit into the units place */}
      <Fade on={bOn && beat >= 4} delay={dl(4, 0)}>
        <T x={540} y={120} size={17} fill={INK} weight={600}>
          {t(
            "Fix ANY one digit — say 3 — into the units place:",
            "KOI bhi ek digit fix karo — jaise 3 — units place mein:"
          )}
        </T>
      </Fade>
      <Draw
        on={bOn && beat >= 4}
        delay={dl(4, 0.8)}
        d={slotXs.map((x) => roundRectD(x, slotY, slotW, slotH, 8)).join(" ")}
        stroke={MUTED}
        sw={1.8}
        dur={0.6}
      />
      <Fade on={bOn && beat >= 4} delay={dl(4, 1.6)}>
        <T x={uCx} y={196} size={22} fill={INK} weight={800}>
          3
        </T>
      </Fade>
      <Draw
        on={bOn && beat >= 4}
        delay={dl(4, 2.1)}
        d={ringD(uCx, uCy, 34, 32)}
        stroke={GREEN}
        sw={2.2}
        dur={0.5}
      />
      <Fade on={bOn && beat >= 4} delay={dl(4, 2.7)}>
        <T x={665} y={195} size={13} fill={GREEN} weight={700} anchor="start">
          {t("← fixed", "← fixed hai")}
        </T>
      </Fade>
      <Fade on={bOn && beat >= 4} delay={dl(4, 3.2)}>
        {slotXs.slice(0, 3).map((x) => (
          <T key={x} x={x + slotW / 2} y={196} size={18} fill={MUTED}>
            ?
          </T>
        ))}
      </Fade>
      <Fade on={bOn && beat >= 4} delay={dl(4, 3.7)}>
        {slotXs.map((x, i) => (
          <T key={x} x={x + slotW / 2} y={232} size={13} fill={MUTED}>
            {slotLabels[i]}
          </T>
        ))}
      </Fade>
      <Fade on={bOn && beat >= 4} delay={dl(4, 4.3)}>
        <T x={540} y={266} size={15} fill={GREEN} weight={700}>
          {t(
            "{1, 2, 4} arrange in the other 3 slots: (n−1)! = 3! = 6 ways",
            "{1, 2, 4} baaki 3 slots mein arrange: (n−1)! = 3! = 6 tareeke"
          )}
        </T>
      </Fade>
      <Fade on={bOn && beat >= 4} delay={dl(4, 5.1)}>
        <T x={540} y={300} size={16} fill={GREEN} weight={700}>
          {t(
            "→ digit 3 sits in UNITS in exactly (n−1)! = 6 of the n! = 24 arrangements",
            "→ digit 3 UNITS mein exactly (n−1)! = 6, total n! = 24 arrangements mein aata hai"
          )}
        </T>
      </Fade>

      {/* beat 5 — generalize to every place, build the repunit factor */}
      <Fade on={bOn && beat >= 5} delay={dl(5, 0)}>
        <T x={540} y={344} size={16} fill={INK} weight={600}>
          {t(
            "The same argument works for ANY place — tens, hundreds, …",
            "Yahi argument HAR place ke liye chalta hai — tens, hundreds, …"
          )}
        </T>
      </Fade>
      <Fade on={bOn && beat >= 5} delay={dl(5, 0.9)}>
        <T x={540} y={376} size={16} fill={GREEN} weight={700}>
          {t(
            "→ every digit sits in every place exactly (n−1)! times",
            "→ har digit har place mein exactly (n−1)! baar aata hai"
          )}
        </T>
      </Fade>
      {sumSegs.map((s, i) => (
        <Fade key={i} on={bOn && beat >= 5} delay={dl(5, 1.7 + i * 0.5)}>
          <T x={sumXs[i]} y={418} size={20} fill={INK} weight={700} anchor="start">
            {s.text}
          </T>
        </Fade>
      ))}
      <Fade on={bOn && beat >= 5} delay={dl(5, 4.5)}>
        <T x={540} y={452} size={13} fill={AMBER_DARK} weight={600}>
          {t(
            "called a REPUNIT — a number like 111...1",
            "isse REPUNIT kehte hain — jaise 111...1"
          )}
        </T>
      </Fade>

      {/* beat 6 (HIGH, final) — the proven formula, boxed */}
      <Draw
        on={bOn && beat >= 6}
        delay={dl(6, 0)}
        d={roundRectD(200, 490, 680, 90, 16)}
        stroke={AMBER}
        sw={2.4}
        dur={0.8}
      />
      <Fade on={bOn && beat >= 6} delay={dl(6, 0.9)}>
        <T x={540} y={535} size={24} fill={GREEN} weight={800}>
          sum = (Σd)(n−1)!(1 + 10 + ⋯ + 10^(n-1))
        </T>
      </Fade>
      <Fade on={bOn && beat >= 6} delay={dl(6, 1.6)}>
        <T x={540} y={565} size={13} fill={MUTED}>
          {t(
            "(Σd = sum of the digits; matches Sec38's (10ⁿ−1)/9 form)",
            "(Σd = digits ka sum; Sec38 wale (10ⁿ−1)/9 jaisa hi)"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
