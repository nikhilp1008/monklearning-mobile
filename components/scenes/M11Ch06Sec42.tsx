/**
 * M11 Ch06 · Section 42 — "Sum of all numbers formed, and derangements"
 * EIGHTH section of Subtopic 8 "Counting Applications & Advanced Tools"
 * (last worked-examples section before the closing tips section). Canvas
 * 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md (`worked_examples` flow: given → set up → work
 * step by step → answer boxed → sanity check).
 *
 * TWO worked examples in one section:
 *  Example 3 (JEE Main, beats 0-3) — direct numeric APPLICATION of
 *  M11Ch06Sec39's sum-of-numbers-formed PROOF: digits {2,3,4,5}, compact
 *  reuse of Sec39's Th/H/T/U four-slot diagram (one digit fixed, ring
 *  green, others arrange in (n-1)! ways), landing the answer in TWO visible
 *  multiplication steps (14×6=84, then 84×1111=93,324) rather than one leap.
 *  Example 4 (JEE Advanced, beats 4-6) — derangements D₅, computed via
 *  M11Ch06Sec37's closed form, then CROSS-CHECKED via M11Ch06Sec38's
 *  recursion — both routes land on the same boxed 44, a strong
 *  sanity-check moment made visually prominent (two short converging
 *  arrows into one shared "D₅ = 44" line).
 *
 * NOTATION: nCr not used here. Dₙ/D₅/D₄/D₃ are plain Unicode subscript
 * digits (already proven safe — Sec37/Sec38's Dₙ, Dₙ₋₁, Dₙ₋₂). Fractions
 * flattened inline (1/2, 1/6, 1/24, 1/120, 11/30) per the maths spec's
 * Chapter-6 convention. "−" is the proper minus sign throughout (not a
 * hyphen), matching Sec37/38/39's own usage.
 *
 * Beats (board_reveal_at_english [0,5.8,25.26,50.09,66.56,84.39,103.94],
 * hinglish [0,5.21,22.78,42.75,58.97,74.41,94.89]):
 *  0 Example 3 heading (JEE Main — sum of all 4-digit numbers from 2,3,4,5)
 *  1 diagram: compact Sec39-style Th/H/T/U row, digit "2" fixed into
 *    Units (green ring), {3,4,5} arrange elsewhere in (4-1)!=6 ways,
 *    captioned "each digit visits each column exactly (4-1)! = 6 times"
 *    and the formula preview "sum = (Σd) × 6 × 1111"
 *  2 text: three verified facts — digit sum 2+3+4+5=14, (4-1)!=3!=6,
 *    4-digit repunit=1111 — each landing its number in green, checkmark
 *    confirms the digit-sum
 *  3 (HIGH) formula lands, boxed, in TWO visible multiplication steps:
 *    "14 × 6 = 84" then "84 × 1111 = 93,324", checkmark
 *  [group A erased at beat>=4 — full board freed for Example 4]
 *  4 Example 4 heading (JEE Advanced — 5 letters into 5 envelopes, none
 *    correct) + compact 5-letter/5-envelope diagram (reused Sec37
 *    language), each column marked with a drawn red ✗
 *  5 closed form set up for n=5: recall Sec37's Dₙ formula, then
 *    substitute D₅ = 5!(1 − 1 + 1/2 − 1/6 + 1/24 − 1/120), checkmark
 *  6 (HIGH, final) TWO ROUTES CROSS-CHECKED, boxed: closed form
 *    "D₅ = 120 × 11/30 = 44" and recursion (Sec38) "D₅ = 4(D₄+D₃) =
 *    4(9+2) = 44" — two short converging arrows land on a shared
 *    "Both routes agree → D₅ = 44", checkmark
 *
 * Layout plan (boxes = estimated render boxes; longer language counts).
 *  always | title (script 24, red)                                 | T mid | x~250..830 y39..82
 *  b0 | title underline flourish (amber)                            | Draw | x260..820 y94
 *  [group A: aOn = beat 0..3, erased at beat>=4]
 *  b0 | heading "Example 3 (JEE Main): sum of..." (18,ink,w700)       | T mid | x243..837 y110..130
 *  b1 | lead "Each of 2,3,4,5 takes a turn..." (16,ink,w600)           | T mid | x348..732 y143..163
 *  b1 | 4 slots Th/H/T/U (40×40, muted) x442/494/546/598 y200..240      | Draw | x442..638 y200..240
 *  b1 | digit "2" in U slot (22,ink,w800) + green ring (fixed)           | Fade/Draw| x584..652 y178..263
 *  b1 | "← fixed" label (13,green,w700)                                  | T st | x665..~717 y219..229
 *  b1 | "?" in Th/H/T slots (18,muted)                                    | T mid| x462/514/566 y226
 *  b1 | slot labels Th/H/T/U (13,muted)                                    | T mid| per-slot y277..292
 *  b1 | caption1 "each digit visits...6 times" (15,green,w700)               | T mid| x330..750 y308..325
 *  b1 | caption2 "sum = (Σd) × 6 × 1111" (18,amber-dk,w800)                    | T mid| x430..650 y340..360
 *  b2 | line1 "Sum of digits...=14" (19,ink/green,w700/800, 2 segs)              | T st | x~340..740 y377..398
 *  b2 | checkmark after line1 (green, size14)                                    | Draw | x~756..772 y384..399
 *  b2 | line2 "(4-1)!=3!=6" (18,ink/green,w700/800, 2 segs)                        | T st | x~420..660 y414..434
 *  b2 | line3 "4-digit repunit=1111" (18,ink/green,w700/800, 2 segs)                | T st | x~390..690 y448..468
 *  b3 | box (480×104, amber)                                                        | Draw | x300..780 y480..584
 *  b3 | "14 × 6 = 84" (22,ink/green,w700/800, 2 segs)                                | T st | x478..602 y503..527
 *  b3 | "84 × 1111 = 93,324" (26,ink/green,w700/800, 2 segs)                          | T st | x397..683 y544..572
 *  b3 | checkmark after final line (green, size18)                                     | Draw | x~684..702 y552..568
 *  [group A erased at beat>=4]
 *  [group B: bOn = beat>=4, final group]
 *  b4 | heading "Example 4 (JEE Adv): 5 letters..." (18,ink,w700)                       | T mid | x243..837 y110..130
 *  b4 | 5 letter tiles (48×28) x270/405/540/675/810 y155..183                            | Draw | x246..834 y155..183
 *  b4 | 5 letter numbers (15,ink,w700)                                                    | T mid| per-tile y174
 *  b4 | row label "Letters" (13,muted)                                                     | T end| x179..225 y174
 *  b4 | 5 envelope tiles (50×34) y207..241                                                  | Draw | x245..835 y207..241
 *  b4 | 5 envelope numbers (15,ink,w700)                                                     | T mid| per-tile y229
 *  b4 | row label "Envelopes" (13,muted)                                                      | T end| x166..225 y229
 *  b4 | 5 red ✗ crosses (drawn, gap between rows)                                              | Draw | y183..207 per col
 *  b4 | caption "(every letter avoids its own envelope)" (12,muted)                             | T mid| x~... y258..268
 *  b5 | recall "Recall (Sec37): Dₙ = n!(1-1/1!+1/2!-...)" (14,amber-dk,w600)                      | T mid| x~305..775 y289..304
 *  b5 | substituted "D₅ = 5!(1-1+1/2-1/6+1/24-1/120)" (21,green,w800)                              | T mid| x284..796 y324..347
 *  b5 | checkmark after formula (green, size18)                                                    | Draw | x~803..821 y328..344
 *  b6 (HIGH) | box (700×170, amber)                                                                 | Draw | x190..890 y364..534
 *  b6 | label "Two routes to D₅:" (15,ink,w600)                                                      | T mid| x~460..620 y378..395
 *  b6 | left label "Closed form (Sec37):" (14,amber-dk,w600)                                          | T mid| cx380 y415..425
 *  b6 | right label "Recursion (Sec38):" (14,amber-dk,w600)                                            | T mid| cx700 y415..425
 *  b6 | left value "D₅=120×11/30=" +green"44" (16,ink/green,w700/800,2 segs)                            | T st | cx380 y444..457
 *  b6 | right value "D₅=4(D₄+D₃)=4(9+2)=" +green"44" (16,ink/green,w700/800,2 segs)                       | T st | cx700 y444..457
 *  b6 | 2 converging arrows (muted) from values → final line                                              | Draw | x380..555 / x700..555 y462..478
 *  b6 | final "Both routes agree → D₅ = 44" (22,ink/green,w700/800,2 segs)                                 | T st | x~305..775 y482..506
 *  b6 | checkmark after final line (green, size20)                                                          | Draw | x~..+16 y490..508
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
  crossD,
  arrowD,
  INK,
  MUTED,
  GREEN,
  RED,
  AMBER,
  AMBER_DARK,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD, lineD, checkD } from "./math-kit";

const mult = (weight?: number) => (weight && weight >= 800 ? 0.58 : 0.5);

type Seg = { text: string; fill: string; weight?: number; gapBefore?: number };

/** Left-anchored segments centered as a whole block at centerX — local
 * re-implementation of the device already used by Sec37/Sec41 (widths
 * depend on each file's own strings, so no shared export exists yet).
 * Also returns each segment's width `w` so callers can place a follow-on
 * element (checkmark, arrow) right after the block ends. */
function layoutSegs(segs: Seg[], size: number, centerX: number) {
  const widths = segs.map((s) => mult(s.weight) * size * s.text.length);
  const gaps = segs.map((s) => s.gapBefore ?? 0);
  const total = widths.reduce((a, b) => a + b, 0) + gaps.reduce((a, b) => a + b, 0);
  let x = centerX - total / 2;
  return segs.map((s, i) => {
    x += gaps[i];
    const sx = x;
    x += widths[i];
    return { ...s, x: sx, w: widths[i] };
  });
}

/** Envelope icon: rectangle + a V-flap line — local one-off device, same
 * reasoning as Sec37's own envelopeD (a single-occurrence drawn glyph
 * doesn't need a new math-kit primitive). */
function envelopeD(x: number, y: number, w: number, h: number): string {
  const flapY = y + h * 0.52;
  return `M ${x} ${y} L ${x + w} ${y} L ${x + w} ${y + h} L ${x} ${y + h} Z M ${x} ${y} L ${x + w / 2} ${flapY} L ${x + w} ${y}`;
}

export default function M11Ch06Sec42({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  // Group A (beats 0-3: Example 3, sum of all numbers formed) is fully
  // erased once Example 4 (beat 4) needs the whole board for its own
  // diagram + two-route cross-check. Group B (beats 4-6) is the final
  // group, never erased. Each element's own `on` is bounded to its beat
  // window (rather than a wrapper div's opacity) so the verifier's
  // Fade-opacity visibility check — which walks up to the nearest
  // g.sc-fade, not an arbitrary ancestor — sees the erasure too; seeking
  // back into an earlier beat correctly restores it.
  const aOn = beat >= 0 && beat < 4;
  const bOn = beat >= 4;

  // ---- beat 1: Th/H/T/U slots, digit 2 fixed into Units (compact reuse
  // of Sec39's proof diagram) ----
  const slotXs = [442, 494, 546, 598];
  const slotLabels = ["Th", "H", "T", "U"];
  const slotY = 200,
    slotW = 40,
    slotH = 40;
  const uCx = slotXs[3] + slotW / 2;
  const uCy = slotY + slotH / 2;

  // ---- beat 2: three verified facts, key numbers landed in green ----
  const factLine1 = layoutSegs(
    [
      { text: t("Sum of digits: 2 + 3 + 4 + 5 =", "Digits ka sum: 2 + 3 + 4 + 5 ="), fill: INK, weight: 700 },
      { text: "14", fill: GREEN, weight: 800, gapBefore: 10 },
    ],
    19,
    540
  );
  const factLine2 = layoutSegs(
    [
      { text: "(4 − 1)! = 3! =", fill: INK, weight: 700 },
      { text: "6", fill: GREEN, weight: 800, gapBefore: 10 },
    ],
    18,
    540
  );
  const factLine3 = layoutSegs(
    [
      { text: t("4-digit repunit =", "4-digit repunit ="), fill: INK, weight: 700 },
      { text: "1111", fill: GREEN, weight: 800, gapBefore: 10 },
    ],
    18,
    540
  );
  const fact1EndX = factLine1[1].x + factLine1[1].w;

  // ---- beat 3 (HIGH): two visible multiplication steps, boxed ----
  const stepA = layoutSegs(
    [
      { text: "14 × 6 =", fill: INK, weight: 700 },
      { text: "84", fill: GREEN, weight: 800, gapBefore: 10 },
    ],
    22,
    540
  );
  const stepB = layoutSegs(
    [
      { text: "84 × 1111 =", fill: INK, weight: 700 },
      { text: "93,324", fill: GREEN, weight: 800, gapBefore: 10 },
    ],
    26,
    540
  );
  const stepBEndX = stepB[1].x + stepB[1].w;

  // ---- beat 4: 5 letters / 5 envelopes, column-aligned, ✗ between ----
  const cols = [270, 405, 540, 675, 810];
  const letterY = 155,
    letterH = 28,
    letterW = 48;
  const envY = 207,
    envH = 34,
    envW = 50;
  const letterTilesD = cols.map((x) => roundRectD(x - letterW / 2, letterY, letterW, letterH, 6)).join(" ");
  const envTilesD = cols.map((x) => envelopeD(x - envW / 2, envY, envW, envH)).join(" ");
  const crossesD = cols.map((x) => crossD(x - 8, 187, 16, 16)).join(" ");

  // ---- beat 5: recall Sec37's closed form, then substitute n = 5 ----
  // (both lines are single-color, no segment split needed)

  // ---- beat 6 (HIGH): two routes cross-checked, converging on one line ----
  const leftVal = layoutSegs(
    [
      { text: "D₅ = 120 × 11/30 =", fill: INK, weight: 700 },
      { text: "44", fill: GREEN, weight: 800, gapBefore: 8 },
    ],
    16,
    380
  );
  const rightVal = layoutSegs(
    [
      { text: "D₅ = 4(D₄+D₃) = 4(9+2) =", fill: INK, weight: 700 },
      { text: "44", fill: GREEN, weight: 800, gapBefore: 8 },
    ],
    16,
    700
  );
  const finalLine = layoutSegs(
    [
      { text: t("Both routes agree →", "Dono raaste agree karte hain →"), fill: INK, weight: 700 },
      { text: "D₅ = 44", fill: GREEN, weight: 800, gapBefore: 12 },
    ],
    22,
    540
  );
  const finalLineEndX = finalLine[1].x + finalLine[1].w;

  return (
    <Scene>
      {/* title always-on */}
      <Fade on={true}>
        <T x={540} y={70} size={24} fill={RED} script>
          {t("Sum of all numbers formed, and derangements", "Numbers ka sum, aur derangements")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.4)} d={lineD(260, 94, 820, 94)} stroke={AMBER} sw={2} dur={0.6} />

      {/* ===================== Group A — beats 0-3 (Example 3) ===================== */}

      {/* beat 0 — Example 3 heading */}
      <Fade on={aOn && beat >= 0} delay={dl(0, 0.9)}>
        <T x={540} y={124} size={18} fill={INK} weight={700}>
          {t(
            "Example 3 (JEE Main): sum of all 4-digit numbers from 2, 3, 4, 5",
            "Example 3 (JEE Main): 2, 3, 4, 5 se bane 4-digit numbers ka sum"
          )}
        </T>
      </Fade>

      {/* beat 1 — compact Th/H/T/U diagram: digit 2 fixed, others arrange */}
      <Fade on={aOn && beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={158} size={16} fill={INK} weight={600}>
          {t(
            "Each of 2, 3, 4, 5 takes a turn in every place:",
            "2, 3, 4, 5 har ek place mein baari-baari aata hai:"
          )}
        </T>
      </Fade>
      <Draw
        on={aOn && beat >= 1}
        delay={dl(1, 0.8)}
        d={slotXs.map((x) => roundRectD(x, slotY, slotW, slotH, 8)).join(" ")}
        stroke={MUTED}
        sw={1.8}
        dur={0.6}
      />
      <Fade on={aOn && beat >= 1} delay={dl(1, 1.6)}>
        <T x={uCx} y={226} size={22} fill={INK} weight={800}>
          2
        </T>
      </Fade>
      <Draw on={aOn && beat >= 1} delay={dl(1, 2.1)} d={ringD(uCx, uCy, 34, 32)} stroke={GREEN} sw={2.2} dur={0.5} />
      <Fade on={aOn && beat >= 1} delay={dl(1, 2.7)}>
        <T x={665} y={225} size={13} fill={GREEN} weight={700} anchor="start">
          {t("← fixed", "← fixed hai")}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 3.2)}>
        {slotXs.slice(0, 3).map((x) => (
          <T key={x} x={x + slotW / 2} y={226} size={18} fill={MUTED}>
            ?
          </T>
        ))}
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 3.7)}>
        {slotXs.map((x, i) => (
          <T key={x} x={x + slotW / 2} y={288} size={13} fill={MUTED}>
            {slotLabels[i]}
          </T>
        ))}
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 4.3)}>
        <T x={540} y={320} size={15} fill={GREEN} weight={700}>
          {t(
            "each digit visits each column exactly (4 − 1)! = 6 times",
            "har digit har column mein exactly (4 − 1)! = 6 baar aata hai"
          )}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 5.0)}>
        <T x={540} y={354} size={18} fill={AMBER_DARK} weight={800}>
          sum = (Σd) × 6 × 1111
        </T>
      </Fade>

      {/* beat 2 — three verified facts feeding the formula */}
      {factLine1.map((s, i) => (
        <Fade key={i} on={aOn && beat >= 2} delay={dl(2, i * 0.6)}>
          <T x={s.x} y={392} size={19} fill={s.fill} weight={s.weight} anchor="start">
            {s.text}
          </T>
        </Fade>
      ))}
      <Draw
        on={aOn && beat >= 2}
        delay={dl(2, 1.3)}
        d={checkD(fact1EndX + 20, 388, 14)}
        stroke={GREEN}
        sw={2.2}
        dur={0.4}
      />
      {factLine2.map((s, i) => (
        <Fade key={i} on={aOn && beat >= 2} delay={dl(2, 1.9 + i * 0.6)}>
          <T x={s.x} y={428} size={18} fill={s.fill} weight={s.weight} anchor="start">
            {s.text}
          </T>
        </Fade>
      ))}
      {factLine3.map((s, i) => (
        <Fade key={i} on={aOn && beat >= 2} delay={dl(2, 3.1 + i * 0.6)}>
          <T x={s.x} y={462} size={18} fill={s.fill} weight={s.weight} anchor="start">
            {s.text}
          </T>
        </Fade>
      ))}

      {/* beat 3 (HIGH) — two visible multiplication steps, boxed */}
      <Draw
        on={aOn && beat >= 3}
        delay={dl(3, 0)}
        d={roundRectD(300, 480, 480, 104, 14)}
        stroke={AMBER}
        sw={2.4}
        dur={0.8}
      />
      {stepA.map((s, i) => (
        <Fade key={i} on={aOn && beat >= 3} delay={dl(3, 0.8 + i * 0.6)}>
          <T x={s.x} y={520} size={22} fill={s.fill} weight={s.weight} anchor="start">
            {s.text}
          </T>
        </Fade>
      ))}
      {stepB.map((s, i) => (
        <Fade key={i} on={aOn && beat >= 3} delay={dl(3, 2.2 + i * 0.6)}>
          <T x={s.x} y={564} size={26} fill={s.fill} weight={s.weight} anchor="start">
            {s.text}
          </T>
        </Fade>
      ))}
      <Draw
        on={aOn && beat >= 3}
        delay={dl(3, 3.6)}
        d={checkD(stepBEndX + 24, 560, 18)}
        stroke={GREEN}
        sw={2.6}
        dur={0.5}
      />

      {/* ===================== Group B — beats 4-6 (Example 4) ===================== */}

      {/* beat 4 — Example 4 heading + 5-letter/5-envelope setup */}
      <Fade on={bOn && beat >= 4} delay={dl(4, 0)}>
        <T x={540} y={124} size={18} fill={INK} weight={700}>
          {t(
            "Example 4 (JEE Adv): 5 letters into 5 envelopes, none correct",
            "Example 4 (JEE Adv): 5 letters, 5 envelopes — koi bhi sahi nahi"
          )}
        </T>
      </Fade>
      <Draw on={bOn && beat >= 4} delay={dl(4, 0.8)} d={letterTilesD} stroke={INK} sw={1.8} dur={0.5} />
      <Fade on={bOn && beat >= 4} delay={dl(4, 1.5)}>
        {cols.map((x, i) => (
          <T key={x} x={x} y={174} size={15} fill={INK} weight={700}>
            {i + 1}
          </T>
        ))}
      </Fade>
      <Fade on={bOn && beat >= 4} delay={dl(4, 1.9)}>
        <T x={225} y={174} size={13} fill={MUTED} anchor="end">
          {t("Letters", "Letters")}
        </T>
      </Fade>
      <Draw on={bOn && beat >= 4} delay={dl(4, 2.3)} d={envTilesD} stroke={AMBER_DARK} sw={1.8} dur={0.5} />
      <Fade on={bOn && beat >= 4} delay={dl(4, 3.0)}>
        {cols.map((x, i) => (
          <T key={x} x={x} y={229} size={15} fill={INK} weight={700}>
            {i + 1}
          </T>
        ))}
      </Fade>
      <Fade on={bOn && beat >= 4} delay={dl(4, 3.4)}>
        <T x={225} y={229} size={13} fill={MUTED} anchor="end">
          {t("Envelopes", "Envelopes")}
        </T>
      </Fade>
      <Draw on={bOn && beat >= 4} delay={dl(4, 3.8)} d={crossesD} stroke={RED} sw={2.2} dur={0.5} />
      <Fade on={bOn && beat >= 4} delay={dl(4, 4.4)}>
        <T x={540} y={263} size={12} fill={MUTED}>
          {t(
            "(every letter avoids its own envelope)",
            "(har letter apne hi envelope se bachta hai)"
          )}
        </T>
      </Fade>

      {/* beat 5 — recall Sec37's closed form, substitute n = 5 */}
      <Fade on={bOn && beat >= 5} delay={dl(5, 0)}>
        <T x={540} y={300} size={14} fill={AMBER_DARK} weight={600}>
          {t(
            "Recall (Sec37): Dₙ = n!(1 − 1/1! + 1/2! − ⋯ + (−1)ⁿ/n!)",
            "Yaad karo (Sec37 wala): Dₙ = n!(1 − 1/1! + 1/2! − ⋯ + (−1)ⁿ/n!)"
          )}
        </T>
      </Fade>
      <Fade on={bOn && beat >= 5} delay={dl(5, 1.0)}>
        <T x={540} y={340} size={21} fill={GREEN} weight={800}>
          D₅ = 5!(1 − 1 + 1/2 − 1/6 + 1/24 − 1/120)
        </T>
      </Fade>
      <Draw
        on={bOn && beat >= 5}
        delay={dl(5, 2.0)}
        d={checkD(812, 336, 18)}
        stroke={GREEN}
        sw={2.6}
        dur={0.5}
      />

      {/* beat 6 (HIGH, final) — two routes cross-checked, converging */}
      <Draw
        on={bOn && beat >= 6}
        delay={dl(6, 0)}
        d={roundRectD(190, 364, 700, 170, 16)}
        stroke={AMBER}
        sw={2.4}
        dur={0.8}
      />
      <Fade on={bOn && beat >= 6} delay={dl(6, 0.7)}>
        <T x={540} y={390} size={15} fill={INK} weight={600}>
          {t("Two routes to D₅:", "D₅ tak do raaste:")}
        </T>
      </Fade>
      <Fade on={bOn && beat >= 6} delay={dl(6, 1.3)}>
        <T x={380} y={424} size={14} fill={AMBER_DARK} weight={600}>
          {t("Closed form (Sec37):", "Closed form (Sec37 wala):")}
        </T>
      </Fade>
      <Fade on={bOn && beat >= 6} delay={dl(6, 1.6)}>
        <T x={700} y={424} size={14} fill={AMBER_DARK} weight={600}>
          {t("Recursion (Sec38):", "Recursion (Sec38 wala):")}
        </T>
      </Fade>
      {leftVal.map((s, i) => (
        <Fade key={i} on={bOn && beat >= 6} delay={dl(6, 2.1 + i * 0.4)}>
          <T x={s.x} y={456} size={16} fill={s.fill} weight={s.weight} anchor="start">
            {s.text}
          </T>
        </Fade>
      ))}
      {rightVal.map((s, i) => (
        <Fade key={i} on={bOn && beat >= 6} delay={dl(6, 2.5 + i * 0.4)}>
          <T x={s.x} y={456} size={16} fill={s.fill} weight={s.weight} anchor="start">
            {s.text}
          </T>
        </Fade>
      ))}
      <Draw
        on={bOn && beat >= 6}
        delay={dl(6, 3.4)}
        d={arrowD(380, 469, 522, 480)}
        stroke={MUTED}
        sw={1.6}
        dur={0.4}
      />
      <Draw
        on={bOn && beat >= 6}
        delay={dl(6, 3.6)}
        d={arrowD(700, 469, 558, 480)}
        stroke={MUTED}
        sw={1.6}
        dur={0.4}
      />
      {finalLine.map((s, i) => (
        <Fade key={i} on={bOn && beat >= 6} delay={dl(6, 4.2 + i * 0.6)}>
          <T x={s.x} y={499} size={22} fill={s.fill} weight={s.weight} anchor="start">
            {s.text}
          </T>
        </Fade>
      ))}
      <Draw
        on={bOn && beat >= 6}
        delay={dl(6, 5.6)}
        d={checkD(finalLineEndX + 22, 495, 18)}
        stroke={GREEN}
        sw={2.6}
        dur={0.5}
      />
    </Scene>
  );
}
