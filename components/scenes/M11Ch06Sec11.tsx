/**
 * M11 Ch06 · Section 11 — "Four flavours of permutation"
 * SECOND section of Subtopic 2 "Permutations" (follows Sec10's "order
 * matters" anchor). Canvas 1080×620 · safe x36–1044, y30–596.
 * This is a MAP-OF-THE-TERRITORY section: 4 scenario cards + guardrail +
 * a closing trap, no derivations (those come in Sec12-14).
 *
 * Beats (board_reveal_at_english [0,8.28,19.29,32.17,45.65,58.45,73.9],
 * hinglish [0,9.05,20.48,33.11,46.59,57.34,70.31]):
 *  0 heading: "Recognising the flavour is half the battle."
 *  1 card 1 (top-left):  podium icon (staggered boxes, callback to Sec10) →
 *    "All distinct (podium)" → nPr
 *  2 card 2 (top-right): 3 equal boxes each "n" (callback to Sec4's
 *    repetition fork) → "Repeats allowed (PIN)" → nʳ
 *  3 card 3 (bottom-left): word SAMOSA, S's red + A's amber-dark, each
 *    underlined → "Repeated letters (SAMOSA)" → "divide out"
 *  4 card 4 (bottom-right): round table (5 dots via pointOnCircle, one red
 *    + a rotation arrow to the next seat) → "Round table, rotate = same" →
 *    (n-1)!
 *  5 guardrail (red note, all 4 cards still visible): "Spot the flavour
 *    FIRST - the right formula follows."
 *  [group A erased at beat>=6 — the map has done its job, full board freed
 *   for the closing trap, which needs its own room]
 *  6 the trap (final, never erased): a curved arc of 7 "bolted-down" chairs
 *    (pointOnCircle, large radius so the arc reads as gently curved, not a
 *    full circle) → verdict line "Still LINEAR, not circular." → paired
 *    icons (crossed-out circle = NOT circular / 3 dots+check = IS linear)
 *    → stamped "Don't be fooled."
 *
 * Layout plan (boxes = estimated render boxes; longer language counts):
 *  always | title (script 24, red)                     | T mid  | x~300..780 y39..82
 *  [group A: aOn = beat 0..5, erased at beat>=6]
 *  b0 | heading sentence (19, ink)                       | T mid  | x~332..748 y94..118
 *  b0 | amber underline under heading                     | Draw  | x340..740 y128
 *  card boxes (halves guide x=300/780; rows CT=140/333, W440 H165):
 *  b1 | card1 outline                                      | Draw  | x80..520  y140..305
 *  b1 | numeral "1."                                        | T st  | x98..112  y152..166
 *  b1 | podium icon (3 staggered boxes)                       | Draw  | x254..346 y176..214
 *  b1 | label "All distinct (podium)"                          | T mid | x216..384 y227..245
 *  b1 | chip "nPr" (green)                                       | Chip  | x245..355 y259..293
 *  b2 | card2 outline                                              | Draw  | x560..1000 y140..305
 *  b2 | numeral "2."                                              | T st  | x578..592 y152..166
 *  b2 | repetition icon (3 equal boxes, each "n")                  | Draw  | x716..844 y166..202
 *  b2 | label "Repeats allowed (PIN)"                                | T mid | x696..864 y227..245
 *  b2 | chip "nʳ" (green)                                             | Chip  | x730..830 y259..293
 *  b3 | card3 outline                                                  | Draw  | x80..520  y333..498
 *  b3 | numeral "3."                                                  | T st  | x98..112  y345..359
 *  b3 | SAMOSA word (6 letters, S red / A amber-dark / M,O ink)          | T mid | x206..394 y372..404
 *  b3 | underlines under repeated S's and A's                             | Draw  | x205..395 y400..410
 *  b3 | label "Repeated letters (SAMOSA)"                                  | T mid | x200..400 y420..438
 *  b3 | chip "divide out" (green)                                          | Chip  | x225..375 y452..486
 *  b4 | card4 outline                                                      | Draw  | x560..1000 y333..498
 *  b4 | numeral "4."                                                      | T st  | x578..592 y345..359
 *  b4 | round-table icon (circle + 5 dots + rotation arrow)                  | Draw  | x744..816 y347..409
 *  b4 | label "Round table, rotate = same"                                    | T mid | x676..884 y420..438
 *  b4 | chip "(n-1)!" (green)                                                  | Chip  | x725..835 y452..486
 *  b5 | guardrail chip (cream/red)                                              | Chip  | x140..940 y522..578
 *  [group A erased at beat>=6]
 *  [group B: bOn = beat >= 6, final, never erased]
 *  b6 | lead "A curved row of bolted-down chairs:"                              | T mid | x~340..740 y97..121
 *  b6 | connecting arc (pointOnCircle, R560, 45°..135°)                          | Draw  | x144..936 y200..364
 *  b6 | 7 chair squares along the arc                                            | Draw  | x136..944 y192..372
 *  b6 | 7 bolt dots beneath each chair                                            | Fade  | x134..946 y381..391
 *  b6 | verdict "Still LINEAR, not circular." (3-color)                            | T st  | x~390..710 y393..417
 *  b6 | crossed-out circle icon ("NOT circular")                                    | Draw  | x276..324 y427..473
 *  b6 | label "NOT circular" (red)                                                   | T mid | x252..348 y484..500
 *  b6 | 3-dot row + check icon ("IS linear")                                          | Draw  | x740..839 y433..467
 *  b6 | label "IS linear" (green)                                                      | T mid | x744..816 y484..500
 *  b6 | stamp chip "Don't be fooled." (cream/red)                                        | Chip  | x430..650 y518..562
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
  arrowD,
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
import { roundRectD, circleD, pointOnCircle, angleArcD } from "./math-kit";

export default function M11Ch06Sec11({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  // Group A (beats 0-5: heading + the 4 flavour cards + guardrail) all stay
  // on the board together — the whole point of this section is a side-by-
  // side comparison — and are erased as one block once the closing trap
  // (beat 6) needs the full board. Group B (beat 6) is final, never erased.
  // Each element's own `on` is bounded to its beat window (aOn && beat>=k),
  // not a wrapper div's opacity, so the verifier's Fade-opacity visibility
  // check (which walks up to the nearest g.sc-fade, not an arbitrary
  // ancestor) sees the erasure correctly; seeking back restores it.
  const aOn = beat >= 0 && beat < 6;
  const bOn = beat >= 6;

  // ---- shared card geometry (2×2 grid, halves guide x=300/780) ----
  const CARD_W = 440;
  const CARD_H = 165;
  const rowCT = [140, 333];
  const colCX = [300, 780];

  // card 1 — podium icon (staggered boxes, callback to Sec10)
  const c1CL = colCX[0] - CARD_W / 2; // 80
  const c1CT = rowCT[0]; // 140
  const podiumBase = c1CT + 74; // 214
  const podiumSteps = [
    { dx: 0, h: 26 },
    { dx: 32, h: 38 },
    { dx: 64, h: 18 },
  ];
  const podiumLeft = colCX[0] - 46; // 254 (3*28+2*4=92 wide, centered)
  const podiumPath = podiumSteps
    .map((s) => roundRectD(podiumLeft + s.dx, podiumBase - s.h, 28, s.h, 5))
    .join(" ");

  // card 2 — repetition boxes (callback to Sec4's repetition fork)
  const c2CL = colCX[1] - CARD_W / 2; // 560
  const c2CT = rowCT[0];
  const repBoxY = c2CT + 26; // 166
  const repBoxXs = [colCX[1] - 64, colCX[1] - 18, colCX[1] + 28]; // 716,762,808
  const repBoxPath = repBoxXs.map((x) => roundRectD(x, repBoxY, 36, 36, 8)).join(" ");

  // card 3 — SAMOSA, repeated letters flagged
  const c3CL = colCX[0] - CARD_W / 2;
  const c3CT = rowCT[1]; // 333
  const samosaY = c3CT + 62; // 395
  const samosaLetters = ["S", "A", "M", "O", "S", "A"];
  const samosaColors = [RED, AMBER_DARK, INK, INK, RED, AMBER_DARK];
  const samosaXs = [215, 249, 283, 317, 351, 385]; // centered on 300, pitch 34
  const underlineIdx = [0, 1, 4, 5]; // the repeated S's and A's
  const underlinePath = underlineIdx
    .map((i) => `M ${samosaXs[i] - 10} ${samosaY + 10} L ${samosaXs[i] + 10} ${samosaY + 10}`)
    .join(" ");

  // card 4 — round table (pointOnCircle, one seat highlighted + rotation arrow)
  const c4CL = colCX[1] - CARD_W / 2;
  const c4CT = rowCT[1];
  const tableCx = colCX[1];
  const tableCy = c4CT + 50; // 383
  const tableR = 26;
  const seatPts = [0, 1, 2, 3, 4].map((i) =>
    pointOnCircle(tableCx, tableCy, tableR, Math.PI / 2 - (i * 2 * Math.PI) / 5)
  );
  const arrowStart = pointOnCircle(tableCx, tableCy, tableR + 10, Math.PI / 2);
  const arrowEnd = pointOnCircle(tableCx, tableCy, tableR + 10, Math.PI / 2 - (2 * Math.PI) / 5);

  // shared label/chip rows for each card
  const labelY = [c1CT + 100, c2CT + 100, c3CT + 100, c4CT + 100]; // [240,240,433,433]
  const chipY = [c1CT + 119, c2CT + 119, c3CT + 119, c4CT + 119]; // [259,259,452,452]

  // ---- beat 6: curved row of bolted-down chairs ----
  const arcCx = 540;
  const arcCy = 760;
  const arcR = 560;
  const chairDegs = [45, 60, 75, 90, 105, 120, 135];
  const chairPts = chairDegs.map((d) => pointOnCircle(arcCx, arcCy, arcR, (d * Math.PI) / 180));
  const chairsPath = chairPts
    .map((p) => roundRectD(p.x - 8, p.y - 8, 16, 16, 3))
    .join(" ");
  const arcPath = angleArcD(arcCx, arcCy, arcR, Math.PI / 4, (3 * Math.PI) / 4);

  // verdict line — computed x-offsets so EN/HI settle correctly regardless
  // of string length (Anek non-script width ≈ 0.5 × size × chars)
  const vSize = 22;
  const vSegs: { text: string; fill: string; weight: number }[] = [
    { text: t("Still ", "Phir bhi "), fill: INK, weight: 700 },
    { text: "LINEAR", fill: GREEN, weight: 800 },
    { text: t(", not circular.", ", circular nahi."), fill: RED, weight: 700 },
  ];
  // small fixed gap between segments as insurance against bold-weight glyphs
  // rendering a touch wider than the 0.5×size×chars estimate
  const vGap = 6;
  const vWidths = vSegs.map((s) => 0.5 * vSize * s.text.length + vGap);
  const vTotal = vWidths.reduce((a, b) => a + b, 0) - vGap;
  let vCursor = 540 - vTotal / 2;
  const vXs = vWidths.map((w) => {
    const x = vCursor;
    vCursor += w;
    return x;
  });

  return (
    <Scene>
      {/* title always-on */}
      <Fade on={true}>
        <T x={540} y={70} size={24} fill={RED} script>
          {t("Four flavours of permutation", "Permutation ke chaar flavours")}
        </T>
      </Fade>

      {/* ===================== Group A — beats 0-5 ===================== */}

      {/* beat 0 — heading */}
      <Fade on={aOn && beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={112} size={19} fill={INK} weight={600}>
          {t(
            "Recognising the flavour is half the battle.",
            "Flavour pehchano - aadha kaam ho gaya."
          )}
        </T>
      </Fade>
      <Draw
        on={aOn && beat >= 0}
        delay={dl(0, 1.0)}
        d={`M340 128 L740 128`}
        stroke={AMBER}
        sw={2}
        dur={0.6}
      />

      {/* ---- card 1 — podium (all distinct, nPr) ---- */}
      <Draw
        on={aOn && beat >= 1}
        delay={dl(1, 0)}
        d={roundRectD(c1CL, c1CT, CARD_W, CARD_H, 14)}
        stroke={INK}
        sw={2}
        dur={0.7}
      />
      <Fade on={aOn && beat >= 1} delay={dl(1, 0.9)}>
        <T x={c1CL + 18} y={c1CT + 26} size={14} fill={AMBER_DARK} weight={800} anchor="start">
          1.
        </T>
      </Fade>
      <Draw on={aOn && beat >= 1} delay={dl(1, 1.3)} d={podiumPath} stroke={INK} sw={2} dur={0.7} />
      <Fade on={aOn && beat >= 1} delay={dl(1, 2.3)}>
        <T x={colCX[0]} y={labelY[0]} size={16} fill={INK} weight={600}>
          {t("All distinct (podium)", "Sab alag (podium)")}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 2.9)}>
        <Chip x={colCX[0] - 55} y={chipY[0]} w={110} h={34} fill={GREEN} textFill="#fff" size={20} script={false}>
          nPr
        </Chip>
      </Fade>

      {/* ---- card 2 — repetition boxes (repeats allowed, nʳ) ---- */}
      <Draw
        on={aOn && beat >= 2}
        delay={dl(2, 0)}
        d={roundRectD(c2CL, c2CT, CARD_W, CARD_H, 14)}
        stroke={INK}
        sw={2}
        dur={0.7}
      />
      <Fade on={aOn && beat >= 2} delay={dl(2, 0.9)}>
        <T x={c2CL + 18} y={c2CT + 26} size={14} fill={AMBER_DARK} weight={800} anchor="start">
          2.
        </T>
      </Fade>
      <Draw on={aOn && beat >= 2} delay={dl(2, 1.3)} d={repBoxPath} stroke={INK} sw={2} dur={0.7} />
      <Fade on={aOn && beat >= 2} delay={dl(2, 2.1)}>
        {repBoxXs.map((x, i) => (
          <T key={i} x={x + 18} y={repBoxY + 24} size={18} fill={INK} weight={800}>
            n
          </T>
        ))}
      </Fade>
      <Fade on={aOn && beat >= 2} delay={dl(2, 2.6)}>
        <T x={colCX[1]} y={labelY[1]} size={16} fill={INK} weight={600}>
          {t("Repeats allowed (PIN)", "Repeat allowed (PIN)")}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 2} delay={dl(2, 3.2)}>
        <Chip x={colCX[1] - 50} y={chipY[1]} w={100} h={34} fill={GREEN} textFill="#fff" size={20} script={false}>
          nʳ
        </Chip>
      </Fade>

      {/* ---- card 3 — SAMOSA (repeated letters, divide out) ---- */}
      <Draw
        on={aOn && beat >= 3}
        delay={dl(3, 0)}
        d={roundRectD(c3CL, c3CT, CARD_W, CARD_H, 14)}
        stroke={INK}
        sw={2}
        dur={0.7}
      />
      <Fade on={aOn && beat >= 3} delay={dl(3, 0.9)}>
        <T x={c3CL + 18} y={c3CT + 26} size={14} fill={AMBER_DARK} weight={800} anchor="start">
          3.
        </T>
      </Fade>
      {samosaLetters.map((ch, i) => (
        <Fade key={i} on={aOn && beat >= 3} delay={dl(3, 1.3 + i * 0.14)}>
          <T x={samosaXs[i]} y={samosaY} size={30} fill={samosaColors[i]} weight={800}>
            {ch}
          </T>
        </Fade>
      ))}
      <Draw
        on={aOn && beat >= 3}
        delay={dl(3, 2.3)}
        d={underlinePath}
        stroke={RED}
        sw={2.2}
        dur={0.6}
      />
      <Fade on={aOn && beat >= 3} delay={dl(3, 3.1)}>
        <T x={colCX[0]} y={labelY[2]} size={16} fill={INK} weight={600}>
          {t("Repeated letters (SAMOSA)", "Letters repeat (SAMOSA)")}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 3} delay={dl(3, 3.7)}>
        <Chip x={colCX[0] - 75} y={chipY[2]} w={150} h={34} fill={GREEN} textFill="#fff" size={18} script={false}>
          {t("divide out", "divide karo")}
        </Chip>
      </Fade>

      {/* ---- card 4 — round table (rotation, (n-1)!) ---- */}
      <Draw
        on={aOn && beat >= 4}
        delay={dl(4, 0)}
        d={roundRectD(c4CL, c4CT, CARD_W, CARD_H, 14)}
        stroke={INK}
        sw={2}
        dur={0.7}
      />
      <Fade on={aOn && beat >= 4} delay={dl(4, 0.9)}>
        <T x={c4CL + 18} y={c4CT + 26} size={14} fill={AMBER_DARK} weight={800} anchor="start">
          4.
        </T>
      </Fade>
      <Draw
        on={aOn && beat >= 4}
        delay={dl(4, 1.3)}
        d={circleD(tableCx, tableCy, tableR)}
        stroke={MUTED}
        sw={1.8}
        dur={0.6}
      />
      <Fade on={aOn && beat >= 4} delay={dl(4, 2.1)}>
        {seatPts.map((p, i) => (
          <Circle key={i} cx={p.x} cy={p.y} r={4} fill={i === 0 ? RED : INK} />
        ))}
      </Fade>
      <Draw
        on={aOn && beat >= 4}
        delay={dl(4, 2.5)}
        d={arrowD(arrowStart.x, arrowStart.y, arrowEnd.x, arrowEnd.y)}
        stroke={AMBER_DARK}
        sw={2}
        dur={0.5}
      />
      <Fade on={aOn && beat >= 4} delay={dl(4, 3.3)}>
        <T x={colCX[1]} y={labelY[3]} size={16} fill={INK} weight={600}>
          {t("Round table, rotate = same", "Gol table, ghumao = same")}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 4} delay={dl(4, 3.9)}>
        <Chip x={colCX[1] - 55} y={chipY[3]} w={110} h={34} fill={GREEN} textFill="#fff" size={20} script={false}>
          (n-1)!
        </Chip>
      </Fade>

      {/* beat 5 — guardrail, all 4 cards still visible for comparison */}
      <Fade on={aOn && beat >= 5} delay={dl(5, 0.3)}>
        <Chip x={140} y={522} w={800} h={56} fill={CREAM} stroke={RED} textFill={RED} size={19} script={false}>
          {t(
            "Spot the flavour FIRST - the right formula follows.",
            "Pehle flavour pehchano - formula khud aa jayega."
          )}
        </Chip>
      </Fade>

      {/* ===================== Group B — beat 6, the trap ===================== */}

      <Fade on={bOn} delay={dl(6, 0.2)}>
        <T x={540} y={115} size={19} fill={INK} weight={600}>
          {t("A curved row of bolted-down chairs:", "Curved row, par chairs bolted hain:")}
        </T>
      </Fade>

      <Draw on={bOn} delay={dl(6, 0.6)} d={arcPath} stroke={MUTED} sw={1.8} dur={0.8} />
      <Draw on={bOn} delay={dl(6, 1.6)} d={chairsPath} stroke={INK} sw={1.8} dur={0.9} />
      <Fade on={bOn} delay={dl(6, 2.7)}>
        {chairPts.map((p, i) => (
          <Circle key={i} cx={p.x} cy={p.y + 11} r={2} fill={MUTED} />
        ))}
      </Fade>

      <Fade on={bOn} delay={dl(6, 3.2)}>
        {vSegs.map((s, i) => (
          <T key={i} x={vXs[i]} y={410} size={vSize} fill={s.fill} weight={s.weight} anchor="start">
            {s.text}
          </T>
        ))}
      </Fade>

      {/* left — crossed-out circle: NOT circular */}
      <Draw
        on={bOn}
        delay={dl(6, 4.0)}
        d={circleD(300, 450, 20)}
        stroke={MUTED}
        sw={1.8}
        dur={0.5}
      />
      <Draw
        on={bOn}
        delay={dl(6, 4.7)}
        d={crossD(280, 430, 40, 40)}
        stroke={RED}
        sw={2.4}
        dur={0.5}
      />
      <Fade on={bOn} delay={dl(6, 5.3)}>
        <T x={300} y={496} size={16} fill={RED} weight={700}>
          {t("NOT circular", "circular NAHI")}
        </T>
      </Fade>

      {/* right — 3 dots in a straight line + check: IS linear */}
      <Fade on={bOn} delay={dl(6, 5.8)}>
        {[745, 775, 805].map((x, i) => (
          <Circle key={i} cx={x} cy={450} r={5} fill={INK} />
        ))}
      </Fade>
      <Draw
        on={bOn}
        delay={dl(6, 6.3)}
        d={`M821 450 L827.3 456.3 L839 442.8`}
        stroke={GREEN}
        sw={3}
        dur={0.4}
      />
      <Fade on={bOn} delay={dl(6, 6.9)}>
        <T x={780} y={496} size={16} fill={GREEN} weight={700}>
          {t("IS linear", "linear HAI")}
        </T>
      </Fade>

      {/* stamp */}
      <Fade on={bOn} delay={dl(6, 7.5)}>
        <Chip x={430} y={518} w={220} h={44} fill={CREAM} stroke={RED} textFill={RED} size={20} script={false}>
          {t("Don't be fooled.", "Dhoka mat khao.")}
        </Chip>
      </Fade>
    </Scene>
  );
}
