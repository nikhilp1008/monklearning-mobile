/**
 * M11 Ch06 · Section 12 — "The permutation formulas"
 * THIRD section of Subtopic 2 "Permutations" (Sec11's "four flavours" map now
 * gets real formulas). Canvas 1080×620 · safe x36–1044, y30–596. Spec:
 * SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md. All nPr/nCr here are the
 * SYMBOLIC form (n, r are variables) → plain text "nPr"/"nCr", no attempted
 * super/subscript digit rendering.
 *
 * Beats (board_reveal_at_english [0,6.06,24.49,33.96,43.01,57.17,71.77,84.57],
 * hinglish [0,6.31,23.21,34.05,42.58,56.66,67.93,82.26]):
 *  0 heading (= title, always-on) + underline flourish
 *  [group A: aOn = beat 0..3, erased at beat>=4 — "the already-familiar half"]
 *  1 (HIGH) core identity: green "nPr" chip (callback to Sec11's chips) then
 *    falling-product form n·(n-1)⋯(n-r+1) builds term by term (callback:
 *    Sec6/Sec8 slot-filling), then factorial-quotient form n!/(n-r)! builds
 *    (callback: Sec3's n!), then domain "0 ≤ r ≤ n", landed in a green box
 *  2 three boundary/special cases: nPn = n! | nP0 = 1 (green) | nP1 = n
 *  3 repetition-allowed recap (already taught Sec4/Sec11): 3 small "n" boxes
 *    + "×" + "= nʳ", quick restatement, smaller scale than Sec4's original
 *  [group A erased at beat>=4 — full board freed for group B]
 *  [group B: bOn = beat >= 4, final, never erased]
 *  4 (HIGH) NEW formula: "not all distinct" n!/(p!·q!·s!⋯) builds (numerator
 *    ink, denominator amber-dark — callback to SAMOSA's repeat-letter
 *    coloring), then a live numeric gut-check reusing Sec11's SAMOSA icon:
 *    6!/(2!·2!) = 720/4 = 180, landed green + checked
 *  5 circular (n-1)! vs flippable (necklace) (n-1)!/2, two icons side by
 *    side: LEFT = plain round-table icon (5 dots + rotation arrow, exactly
 *    Sec11's motif) + green "(n-1)!" chip. RIGHT = the SAME icon PLUS a red
 *    mirror-axis line through the circle + a green "(n-1)!" chip with a
 *    RED "/2" chip stuck onto it — the red is the only new ink, making the
 *    "same base formula, plus an extra divide-by-2" relationship unmistakable
 *  6 guardrail-style chip (cream/red, "coming up" framing since nCr isn't
 *    taught yet): "Coming up: nPr = r! · nCr — bridge to combinations"
 *  7 closing sanity tip (text) + underline: nPr is always a positive
 *    integer; a fractional/non-integer answer means an arithmetic error
 *
 * Layout plan (boxes = estimated render boxes; longer language counts):
 *  always | title (script 24, red)                        | T mid  | x~250..830 y39..82
 *  [group A: aOn = beat 0..3, erased at beat>=4]
 *  b0 | title underline flourish (amber)                    | Draw  | x380..700 y94
 *  b1 | "nPr" chip (green/white, w110 h34)                    | Chip  | x340..450 y124..158
 *  b1 | "=" "n" "(n-1)" "⋯(n-r+1)" (30,ink,w800)                | T st  | x466..739 y124.6..157.3
 *  b1 | tag "(Sec6/Sec8 slots)" (14, amber-dk)                   | T st  | x755..888 y137..152
 *  b1 | "=" "n!/(n-r)!" (30,ink,w800)                              | T st | x457..623 y180.6..213.3
 *  b1 | tag "(Sec3's n!)" (14, amber-dk)                             | T st | x645..743 y193..208
 *  b1 | condition "0 ≤ r ≤ n" (16, muted)                              | T mid| x500..580 y233.5..251
 *  b1 | checkmark (green)                                                | Draw | x597..613 y238..254
 *  b1 | hero box (green, rounded)                                        | Draw | x310..940 y108..274
 *  b2 | "nPn = n!" | "nP0 = 1"(green) | "nP1 = n" (26,w800)                | T mid | x352..728 y313.7..348
 *  b2 | caption "(boundary cases: r = n,0,1)" (14,muted)                    | T mid| x?..?  y359..378
 *  b3 | 3 boxes (36×36, gap14) each "n"                                     | Draw | x434..570 y420..456
 *  b3 | 2 "×" (18, muted) + "= nʳ" (28, green, w800)                        | T mid/st| x477..646 y~430..453
 *  b3 | caption "repetition allowed (recap)" (14, muted)                     | T mid| x393..687 y475..490
 *  [group A erased at beat>=4]
 *  [group B: bOn = beat>=4, final]
 *  b4 | subheader "not all distinct..." (18, ink)                            | T mid | x?..?  y98..118
 *  b4 | "n!" (ink) "/" (ink) "(p!·q!·s!⋯)" (amber-dk) (28,w800)                | T st | x426..654 y128..167
 *  b4 | SAMOSA letters ×6 (22,w800, S red/A amber-dk/M,O ink)                    | T mid| x450..630 y183..210
 *  b4 | underlines under repeated S/A                                            | Draw | x440..640 y210..212
 *  b4 | equation "6!/(2!·2!)" "=" "720/4" "=" "180"(green) (18,w800)               | T st | x430..650 y224..244
 *  b4 | green box around "180" + checkmark                                         | Draw | x616..684 y220..250
 *  b5 | LEFT circle+5dots+rotation arrow (r20, cx300 cy310)                          | Draw | x272..338 y282..338
 *  b5 | RIGHT circle+5dots+rotation arrow + RED mirror line                           | Draw | x752..818 y282..338
 *  b5 | "vs" (18, muted)                                                                | T mid| x531..549 y296..316
 *  b5 | LEFT label "circular, rotate = same" (15,ink,w600)                              | T mid| x210..390 y351..368
 *  b5 | RIGHT label "flippable (necklace)" (15,ink,w600)                                 | T mid| x701..859 y351..368
 *  b5 | LEFT chip "(n-1)!" (green/white, w110 h30)                                        | Chip | x245..355 y383..413
 *  b5 | RIGHT chip1 "(n-1)!" (green/white,w90h30) + chip2 "/2" (cream/red,w50h30)           | Chip | x708..852 y383..413
 *  b6 | guardrail chip (cream/red, dynamic width)                                          | Chip | x~250..830 y437..489
 *  b7 | sanity text (16, ink, dynamic width)                                               | T mid | x~224..856 y527.5..545
 *  b7 | underline (amber, dynamic width)                                                    | Draw | y556
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
  INK,
  MUTED,
  GREEN,
  RED,
  AMBER,
  AMBER_DARK,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD, circleD, pointOnCircle, checkD, lineD } from "./math-kit";

export default function M11Ch06Sec12({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  // Group A (beats 0-3: the core nPr identity + its boundary cases + a quick
  // repetition-allowed recap — content students have mostly already met) is
  // erased once group B's genuinely new material (beats 4-7: the repeated-
  // items formula, circular vs flippable, the combinations bridge, sanity
  // tip) needs the full board. Each element's own `on` is bounded to its
  // beat window (aOn && beat>=k) rather than a wrapper div's opacity, so the
  // verifier's Fade-opacity visibility check (which walks up to the nearest
  // g.sc-fade, not an arbitrary ancestor) sees the erasure correctly; seeking
  // back into an earlier beat correctly restores it.
  const aOn = beat >= 0 && beat < 4;
  const bOn = beat >= 4;

  // ---- beat3 repetition-recap icon geometry ----
  const repBoxX = [434, 484, 534];
  const repBoxCenters = [452, 502, 552];
  const repGapCenters = [477, 527];

  // ---- beat4 SAMOSA geometry (compact recap of Sec11's icon) ----
  const samosaLetters = ["S", "A", "M", "O", "S", "A"];
  const samosaColors = [RED, AMBER_DARK, INK, INK, RED, AMBER_DARK];
  const samosaXs = [450, 480, 510, 540, 570, 600];
  const samosaY = 200;
  const underlineIdx = [0, 1, 4, 5];
  const underlinePath = underlineIdx
    .map((i) => `M ${samosaXs[i] - 9} ${samosaY + 9} L ${samosaXs[i] + 9} ${samosaY + 9}`)
    .join(" ");

  // ---- beat5 circular vs flippable icon geometry ----
  const iconR = 20;
  const leftCx = 300;
  const rightCx = 780;
  const iconCy = 310;
  const seatAngles = [0, 1, 2, 3, 4].map((i) => Math.PI / 2 - (i * 2 * Math.PI) / 5);
  const leftSeats = seatAngles.map((a) => pointOnCircle(leftCx, iconCy, iconR, a));
  const rightSeats = seatAngles.map((a) => pointOnCircle(rightCx, iconCy, iconR, a));
  const leftArrowStart = pointOnCircle(leftCx, iconCy, iconR + 8, Math.PI / 2);
  const leftArrowEnd = pointOnCircle(leftCx, iconCy, iconR + 8, Math.PI / 2 - (2 * Math.PI) / 5);
  const rightArrowStart = pointOnCircle(rightCx, iconCy, iconR + 8, Math.PI / 2);
  const rightArrowEnd = pointOnCircle(rightCx, iconCy, iconR + 8, Math.PI / 2 - (2 * Math.PI) / 5);

  // ---- beat6 bridge chip: dynamic width from the longer language string ----
  const bridgeText = t(
    "→ Coming up: nPr = r! · nCr — bridge to combinations",
    "→ Aage: nPr = r! · nCr — combinations se bridge banega"
  );
  const bridgeW = Math.max(560, 0.5 * 19 * bridgeText.length + 40);
  const bridgeX = 540 - bridgeW / 2;

  // ---- beat7 sanity line: dynamic underline width from the longer string ----
  const sanityText = t(
    "Sanity: nPr is always a positive integer; a fractional answer means you erred.",
    "Sanity check: nPr hamesha positive integer hota hai; fraction mila to galti hui hai."
  );
  const sanityHalf = Math.min(500, (0.5 * 16 * sanityText.length) / 2 + 8);

  return (
    <Scene>
      {/* title always-on */}
      <Fade on={true}>
        <T x={540} y={70} size={24} fill={RED} script>
          {t("Your permutation toolkit", "Tumhara permutation toolkit")}
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

      {/* ===================== beat 1 — the core nPr identity (HIGH) ===================== */}
      <Fade on={aOn && beat >= 1} delay={dl(1, 0)}>
        <Chip x={340} y={124} w={110} h={34} fill={GREEN} textFill="#fff" size={20} script={false}>
          nPr
        </Chip>
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 0.6)}>
        <T x={466} y={148} size={30} fill={INK} weight={800} anchor="start">
          =
        </T>
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 1.0)}>
        <T x={497} y={148} size={30} fill={INK} weight={800} anchor="start">
          n
        </T>
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 1.5)}>
        <T x={528} y={148} size={30} fill={INK} weight={800} anchor="start">
          (n-1)
        </T>
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 2.0)}>
        <T x={619} y={148} size={30} fill={INK} weight={800} anchor="start">
          ⋯(n-r+1)
        </T>
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 2.7)}>
        <T x={755} y={148} size={14} fill={AMBER_DARK} anchor="start">
          {t("(Sec6/Sec8 slots)", "(Sec6/Sec8 jaisa)")}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 3.4)}>
        <T x={457} y={204} size={30} fill={INK} weight={800} anchor="start">
          =
        </T>
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 3.8)}>
        <T x={488} y={204} size={30} fill={INK} weight={800} anchor="start">
          n!/(n-r)!
        </T>
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 4.4)}>
        <T x={645} y={204} size={14} fill={AMBER_DARK} anchor="start">
          {t("(Sec3's n!)", "(Sec3 wala n!)")}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 5.0)}>
        <T x={540} y={246} size={16} fill={MUTED}>
          0 ≤ r ≤ n
        </T>
      </Fade>
      <Draw
        on={aOn && beat >= 1}
        delay={dl(1, 5.6)}
        d={checkD(605, 246, 16)}
        stroke={GREEN}
        sw={2.6}
        dur={0.4}
      />
      <Draw
        on={aOn && beat >= 1}
        delay={dl(1, 6.2)}
        d={roundRectD(310, 108, 630, 166, 16)}
        stroke={GREEN}
        sw={2.2}
        dur={1.0}
      />

      {/* ===================== beat 2 — three boundary cases ===================== */}
      <Fade on={aOn && beat >= 2} delay={dl(2, 0)}>
        <T x={352} y={332} size={26} fill={INK} weight={800} anchor="start">
          nPn = n!
        </T>
      </Fade>
      <Fade on={aOn && beat >= 2} delay={dl(2, 0.5)}>
        <T x={472} y={332} size={26} fill={MUTED} weight={800} anchor="start">
          |
        </T>
      </Fade>
      <Fade on={aOn && beat >= 2} delay={dl(2, 0.9)}>
        <T x={501} y={332} size={26} fill={GREEN} weight={800} anchor="start">
          nP0 = 1
        </T>
      </Fade>
      <Fade on={aOn && beat >= 2} delay={dl(2, 1.3)}>
        <T x={608} y={332} size={26} fill={MUTED} weight={800} anchor="start">
          |
        </T>
      </Fade>
      <Fade on={aOn && beat >= 2} delay={dl(2, 1.7)}>
        <T x={637} y={332} size={26} fill={INK} weight={800} anchor="start">
          nP1 = n
        </T>
      </Fade>
      <Fade on={aOn && beat >= 2} delay={dl(2, 2.4)}>
        <T x={540} y={370} size={14} fill={MUTED}>
          {t("(the boundary cases: r = n, 0, 1)", "(boundary cases: r = n, 0, 1)")}
        </T>
      </Fade>

      {/* ===================== beat 3 — repetition-allowed recap ===================== */}
      <Draw
        on={aOn && beat >= 3}
        delay={dl(3, 0)}
        d={repBoxX.map((x) => roundRectD(x, 420, 36, 36, 8)).join(" ")}
        stroke={INK}
        sw={2}
        dur={0.7}
      />
      <Fade on={aOn && beat >= 3} delay={dl(3, 0.6)}>
        {repBoxCenters.map((x) => (
          <T key={x} x={x} y={443} size={16} fill={INK} weight={800}>
            n
          </T>
        ))}
      </Fade>
      <Fade on={aOn && beat >= 3} delay={dl(3, 1.0)}>
        {repGapCenters.map((x) => (
          <T key={x} x={x} y={443} size={18} fill={MUTED}>
            ×
          </T>
        ))}
      </Fade>
      <Fade on={aOn && beat >= 3} delay={dl(3, 1.4)}>
        <T x={590} y={445} size={28} fill={GREEN} weight={800} anchor="start">
          = nʳ
        </T>
      </Fade>
      <Fade on={aOn && beat >= 3} delay={dl(3, 2.0)}>
        <T x={540} y={482} size={14} fill={MUTED}>
          {t("repetition allowed (recap)", "repetition allowed (recap)")}
        </T>
      </Fade>

      {/* ===================== beat 4 — not-all-distinct formula (HIGH) ===================== */}
      <Fade on={bOn && beat >= 4} delay={dl(4, 0)}>
        <T x={540} y={112} size={18} fill={INK}>
          {t(
            "not all distinct — some items repeat (p, q, s... alike)",
            "sab alag nahi — kuch items repeat (p, q, s... alike)"
          )}
        </T>
      </Fade>
      <Fade on={bOn && beat >= 4} delay={dl(4, 0.6)}>
        <T x={426} y={158} size={28} fill={INK} weight={800} anchor="start">
          n!
        </T>
      </Fade>
      <Fade on={bOn && beat >= 4} delay={dl(4, 1.0)}>
        <T x={470} y={158} size={28} fill={INK} weight={800} anchor="start">
          /
        </T>
      </Fade>
      <Fade on={bOn && beat >= 4} delay={dl(4, 1.4)}>
        <T x={500} y={158} size={28} fill={AMBER_DARK} weight={800} anchor="start">
          (p!·q!·s!⋯)
        </T>
      </Fade>
      {samosaLetters.map((ch, i) => (
        <Fade key={i} on={bOn && beat >= 4} delay={dl(4, 2.2 + i * 0.12)}>
          <T x={samosaXs[i]} y={samosaY} size={22} fill={samosaColors[i]} weight={800}>
            {ch}
          </T>
        </Fade>
      ))}
      <Draw
        on={bOn && beat >= 4}
        delay={dl(4, 3.2)}
        d={underlinePath}
        stroke={RED}
        sw={2}
        dur={0.5}
      />
      <Fade on={bOn && beat >= 4} delay={dl(4, 4.0)}>
        <T x={430} y={238} size={18} fill={INK} weight={800} anchor="start">
          6!/(2!·2!)
        </T>
      </Fade>
      <Fade on={bOn && beat >= 4} delay={dl(4, 4.5)}>
        <T x={530} y={238} size={18} fill={INK} weight={800} anchor="start">
          =
        </T>
      </Fade>
      <Fade on={bOn && beat >= 4} delay={dl(4, 4.9)}>
        <T x={549} y={238} size={18} fill={INK} weight={800} anchor="start">
          720/4
        </T>
      </Fade>
      <Fade on={bOn && beat >= 4} delay={dl(4, 5.4)}>
        <T x={604} y={238} size={18} fill={INK} weight={800} anchor="start">
          =
        </T>
      </Fade>
      <Fade on={bOn && beat >= 4} delay={dl(4, 5.8)}>
        <T x={623} y={238} size={18} fill={GREEN} weight={800} anchor="start">
          180
        </T>
      </Fade>
      <Draw
        on={bOn && beat >= 4}
        delay={dl(4, 6.3)}
        d={roundRectD(616, 220, 40, 30, 8)}
        stroke={GREEN}
        sw={2}
        dur={0.5}
      />
      <Draw
        on={bOn && beat >= 4}
        delay={dl(4, 6.8)}
        d={checkD(672, 233, 14)}
        stroke={GREEN}
        sw={2.6}
        dur={0.4}
      />

      {/* ===================== beat 5 — circular vs flippable ===================== */}
      {/* LEFT — plain circular, exactly Sec11's round-table motif */}
      <Draw
        on={bOn && beat >= 5}
        delay={dl(5, 0)}
        d={circleD(leftCx, iconCy, iconR)}
        stroke={MUTED}
        sw={1.8}
        dur={0.5}
      />
      <Fade on={bOn && beat >= 5} delay={dl(5, 0.5)}>
        {leftSeats.map((p, i) => (
          <Circle key={i} cx={p.x} cy={p.y} r={3.5} fill={i === 0 ? RED : INK} />
        ))}
      </Fade>
      <Draw
        on={bOn && beat >= 5}
        delay={dl(5, 0.9)}
        d={arrowD(leftArrowStart.x, leftArrowStart.y, leftArrowEnd.x, leftArrowEnd.y)}
        stroke={AMBER_DARK}
        sw={1.8}
        dur={0.4}
      />
      <Fade on={bOn && beat >= 5} delay={dl(5, 1.3)}>
        <T x={leftCx} y={363} size={15} fill={INK} weight={600}>
          {t("circular, rotate = same", "circular, ghumao = same")}
        </T>
      </Fade>
      <Fade on={bOn && beat >= 5} delay={dl(5, 1.7)}>
        <Chip x={245} y={383} w={110} h={30} fill={GREEN} textFill="#fff" size={18} script={false}>
          (n-1)!
        </Chip>
      </Fade>

      <Fade on={bOn && beat >= 5} delay={dl(5, 1.9)}>
        <T x={540} y={316} size={18} fill={MUTED} weight={600}>
          {t("vs", "vs")}
        </T>
      </Fade>

      {/* RIGHT — same icon PLUS a red mirror-axis line (the only new ink) */}
      <Draw
        on={bOn && beat >= 5}
        delay={dl(5, 2.1)}
        d={circleD(rightCx, iconCy, iconR)}
        stroke={MUTED}
        sw={1.8}
        dur={0.5}
      />
      <Fade on={bOn && beat >= 5} delay={dl(5, 2.5)}>
        {rightSeats.map((p, i) => (
          <Circle key={i} cx={p.x} cy={p.y} r={3.5} fill={i === 0 ? RED : INK} />
        ))}
      </Fade>
      <Draw
        on={bOn && beat >= 5}
        delay={dl(5, 2.8)}
        d={arrowD(rightArrowStart.x, rightArrowStart.y, rightArrowEnd.x, rightArrowEnd.y)}
        stroke={AMBER_DARK}
        sw={1.8}
        dur={0.4}
      />
      <Draw
        on={bOn && beat >= 5}
        delay={dl(5, 3.3)}
        d={lineD(rightCx, iconCy - iconR, rightCx, iconCy + iconR)}
        stroke={RED}
        sw={2.4}
        dur={0.5}
      />
      <Fade on={bOn && beat >= 5} delay={dl(5, 3.9)}>
        <T x={rightCx} y={363} size={15} fill={INK} weight={600}>
          {t("flippable (necklace)", "flip sakte ho (necklace)")}
        </T>
      </Fade>
      <Fade on={bOn && beat >= 5} delay={dl(5, 4.3)}>
        <Chip x={708} y={383} w={90} h={30} fill={GREEN} textFill="#fff" size={16} script={false}>
          (n-1)!
        </Chip>
      </Fade>
      <Fade on={bOn && beat >= 5} delay={dl(5, 4.7)}>
        <Chip x={802} y={383} w={50} h={30} fill={CREAM} stroke={RED} textFill={RED} size={18} script={false}>
          /2
        </Chip>
      </Fade>

      {/* ===================== beat 6 — bridge to combinations (preview) ===================== */}
      <Fade on={bOn && beat >= 6} delay={dl(6, 0.3)}>
        <Chip x={bridgeX} y={437} w={bridgeW} h={52} fill={CREAM} stroke={RED} textFill={RED} size={17} script={false}>
          {bridgeText}
        </Chip>
      </Fade>

      {/* ===================== beat 7 — sanity tip ===================== */}
      <Fade on={bOn && beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={540} size={16} fill={INK}>
          {sanityText}
        </T>
      </Fade>
      <Draw
        on={bOn && beat >= 7}
        delay={dl(7, 1.0)}
        d={lineD(540 - sanityHalf, 556, 540 + sanityHalf, 556)}
        stroke={AMBER}
        sw={2}
        dur={0.6}
      />
    </Scene>
  );
}
