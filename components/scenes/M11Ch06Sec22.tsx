/**
 * M11 Ch06 · Section 22 — "Pascal's rule and selection under constraints"
 * FOURTH section of Subtopic 3 "Combinations" (Sec20 STATED Pascal's rule in
 * a dashed "not yet proved" box; this section is that payoff — a genuine
 * bijective/case-based proof, same rigor as Sec21's symmetry proof). Canvas
 * 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. nCr here is SYMBOLIC throughout (n, r, k are
 * variables) → plain text "nCr"/"nC(r-1)"/"(n-k)Cr", no attempted
 * super/subscript letter rendering — this section has no numeric case.
 *
 * Beats (board_reveal_at_english [0,7.94,22.53,43.43,56.58,71.42,82.35],
 * hinglish [0,8.36,24.23,43.43,56.75,70.74,81.66]):
 *  0 heading (= title, always-on) + underline flourish
 *  [group A: aOn = beat 0..3, erased at beat>=4 — THE BIJECTIVE PROOF]
 *  1 THE DIAGRAM: n+1 objects drawn as dots, one singled out as ★ (drawn as
 *    the center dot, replaced by the glyph itself — no separate label
 *    needed). A drawn amber "fork" branches from ★ down into two boxes:
 *    LEFT "★ is IN" (green) — need r-1 more from n → nC(r-1); RIGHT "★ is
 *    OUT" (red) — all r from n → nC(r). One case-split, two named outcomes.
 *  2 THE WHY: two green-stroked chips "Mutually exclusive" & "Exhaustive"
 *    (★ is either in or out, never both; every selection is one or the
 *    other, no third option) + callback line to Sec2's Addition Principle
 *    (OR, no overlap → ADD) — this is that principle, satisfied exactly.
 *  3 (HIGH) formula lands: "(n+1)Cr = nC(r-1) + nCr" builds term by term
 *    (green term ↔ LEFT/IN box, amber "+" ↔ the counting-principle ADD, red
 *    term ↔ RIGHT/OUT box), boxed green + checked.
 *  [group A erased at beat>=4 — full board freed for group B]
 *  [group B: bOn = beat>=4, final, never erased]
 *  4 new heading: "Selection with forced objects" — Part 2 begins. LEFT card
 *    "Must INCLUDE k specific": pool of dots, 2 turn green ("pre-placed"),
 *    formula "→ (n-k)C(r-k)", numeric aside (n=10,k=2,r=5 → 8C3).
 *  5 RIGHT card "Must EXCLUDE k specific": same pool, 2 turn red then get
 *    crossed out ("dropped"), formula "→ (n-k)Cr", numeric aside (same
 *    n=10,k=2,r=5 → 8C5) — deliberately shares the LEFT card's numbers so
 *    the include/exclude contrast reads cleanly.
 *  6 (final, red-margin guardrail) "at least / at most" strategy: two
 *    red-stroked chips "Sum the individual cases" OR "Total − complement",
 *    tag "(pick whichever needs less arithmetic)".
 *
 * Layout plan (boxes = estimated render boxes; longer language counts):
 *  always | title (script 24, red)                              | T mid | x~290..790 y39..82
 *  [group A: aOn = beat 0..3, erased at beat>=4]
 *  b0 | title underline flourish (amber)                          | Draw  | x390..690 y94
 *  b1 | lead line "choose r from n+1... call it ★" (17,ink)         | T mid | x~300..780 y95..113
 *  b1 | 6 neutral dots (r13) + ★ glyph (size28,amber) at center      | circle/T | x341..739 y134..166
 *  b1 | amber fork: stem + 2 branches                                | Draw  | x310..770 y166..210
 *  b1 | LEFT box fill+outline (green, 340×130)                        | rect/Draw| x140..480 y215..345
 *  b1 | LEFT header "★ is IN"(19,green) / body(14,ink) / formula(19,green)| T mid | x~236..384 y233..322
 *  b1 | RIGHT box fill+outline (red, 340×130)                          | rect/Draw| x600..940 y215..345
 *  b1 | RIGHT header "★ is OUT"(19,red) / body(14,ink) / formula(19,red) | T mid | x~696..844 y233..322
 *  b2 | chip "Mutually exclusive" (green/cream, 260×44)                  | Chip  | x230..490 y372..416
 *  b2 | "&" (18,muted)                                                    | T mid | x~531..549 y392..403
 *  b2 | chip "Exhaustive" (green/cream, 260×44)                            | Chip  | x590..850 y372..416
 *  b2 | callback "Sec2's Addition Principle: OR..." (15,amber-dk)           | T mid | x~342..739 y432..449
 *  b3 | "(n+1)Cr =" (ink) "nC(r-1)"(green) "+"(amber-dk) "nCr"(red) (28,w800)| T st | x359..721 y508..539
 *  b3 | hero box (green, rounded, 460×95)                                  | Draw  | x310..770 y478..573
 *  b3 | checkmark (green)                                                   | Draw  | x733..751 y514..530
 *  [group A erased at beat>=4]
 *  [group B: bOn = beat>=4, final]
 *  b4 | heading "Selection with forced objects" (25,red,w800)                | T mid | x~330..750 y112..138
 *  b4 | underline flourish (amber)                                            | Draw  | x430..650 y150
 *  b4 | LEFT card outline (green, 420×170)                                     | Draw  | x90..510 y205..375
 *  b4 | LEFT header "Must INCLUDE k specific" (18,green,w800)                    | T mid | x~184..416 y218..238
 *  b4 | LEFT 6 dots (r8), 2 turn green ("pre-placed")                            | circle| x192..408 y250..266
 *  b4 | LEFT label "pre-place the k forced-in ones" (13,green)                    | T mid | x~199..401 y278..292
 *  b4 | LEFT formula "→ (n-k)C(r-k)" (20,green,w800)                              | T mid | x~222..378 y306..328
 *  b4 | LEFT example "(e.g. n=10,k=2,r=5 → 8C3)" (12,muted)                        | T mid | x~216..384 y344..358
 *  b5 | RIGHT card outline (red, 420×170)                                          | Draw  | x570..990 y205..375
 *  b5 | RIGHT header "Must EXCLUDE k specific" (18,red,w800)                        | T mid | x~664..896 y218..238
 *  b5 | RIGHT 6 dots (r8), 2 turn red then crossed out ("dropped")                    | circle/Draw| x672..888 y250..266
 *  b5 | RIGHT label "drop the k forced-out ones" (13,red)                             | T mid | x~692..868 y278..292
 *  b5 | RIGHT formula "→ (n-k)Cr" (20,red,w800)                                        | T mid | x~730..830 y306..328
 *  b5 | RIGHT example "(e.g. n=10,k=2,r=5 → 8C5)" (12,muted)                            | T mid | x~696..864 y344..358
 *  b6 | intro "'at least/at most' problems — two ways:" (16,ink)                        | T mid | x~368..712 y414..435
 *  b6 | chip "Sum the individual cases" (red/cream, 300×44)                              | Chip  | x170..470 y448..492
 *  b6 | "OR" (16,muted)                                                                    | T mid | x~527..553 y470..481
 *  b6 | chip "Total − complement" (red/cream, 300×44)                                       | Chip  | x610..910 y448..492
 *  b6 | tag "(pick whichever needs less arithmetic)" (13,amber-dk)                            | T mid | x~413..667 y506..520
 */

import React from "react";
import { Circle, Rect } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
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

// Very light tints for the IN/OUT case boxes — house palette accents (GREEN/
// RED) drive the stroke + text; these are just the pale fill behind them.
const GREEN_BG = "#E4F5EA";
const RED_BG = "#FBEAE7";

export default function M11Ch06Sec22({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  // Group A (beats 0-3: the Pascal's-rule bijective proof) is erased once
  // group B's constrained-selection toolkit (beats 4-6) needs the full
  // board. Each element's own `on` is bounded to its beat window (aOn/bOn &&
  // beat >= k) rather than a wrapper div's opacity, so the verifier's
  // Fade-opacity visibility check (which walks up to the nearest g.sc-fade,
  // not an arbitrary ancestor) sees the erasure correctly; seeking back into
  // an earlier beat correctly restores it.
  const aOn = beat >= 0 && beat < 4;
  const bOn = beat >= 4;

  // ---- beat 1: n+1 objects as dots, the middle one replaced by the ★ glyph
  // itself (no separate label needed — the glyph IS the marked object) ----
  const dotY = 150;
  const dotR = 13;
  const dotXs = [354, 416, 478, 602, 664, 726]; // the 6 neutral dots
  const starX = 540; // the 7th slot, rendered as the ★ glyph, not a circle
  const starY = 157; // baseline so the glyph's optical center ≈ dotY

  const leftBox = { x: 140, y: 215, w: 340, h: 130 };
  const rightBox = { x: 600, y: 215, w: 340, h: 130 };
  const leftCx = leftBox.x + leftBox.w / 2; // 310
  const rightCx = rightBox.x + rightBox.w / 2; // 770

  // ---- beat 3: "(n+1)Cr = nC(r-1) + nCr" built term by term ----
  const eqSegs = [
    { text: "(n+1)Cr =", fill: INK },
    { text: "nC(r-1)", fill: GREEN },
    { text: "+", fill: AMBER_DARK },
    { text: "nCr", fill: RED },
  ];
  const eqWidths = eqSegs.map((s) => 0.56 * 28 * s.text.length);
  const eqGap = 16;
  const eqTotalW = eqWidths.reduce((a, b) => a + b, 0) + (eqSegs.length - 1) * eqGap;
  let eqX0 = 540 - eqTotalW / 2;
  const eqXs = eqSegs.map((_, i) => {
    const x = eqX0;
    eqX0 += eqWidths[i] + eqGap;
    return x;
  });

  // ---- beats 4-5: the two constrained-selection cards, same pool numbers
  // (n=10, k=2, r=5) so INCLUDE (→8C3) and EXCLUDE (→8C5) read as a clean
  // contrasting pair ----
  const leftCard = { x: 90, y: 205, w: 420, h: 170 };
  const rightCard = { x: 570, y: 205, w: 420, h: 170 };
  const leftCardCx = leftCard.x + leftCard.w / 2; // 300
  const rightCardCx = rightCard.x + rightCard.w / 2; // 780
  const cardDotY = 258;
  const cardDotR = 8;
  const leftDotXs = [200, 240, 280, 320, 360, 400];
  const rightDotXs = [680, 720, 760, 800, 840, 880];
  const leftMarkedIdx = [2, 3]; // the k=2 "forced in" dots
  const rightMarkedIdx = [2, 3]; // the k=2 "forced out" dots

  return (
    <Scene>
      {/* title always-on */}
      <Fade on={true}>
        <T x={540} y={70} size={24} fill={RED} script>
          {t("Pascal's rule by one yes/no question", "Pascal ka rule — ek yes/no sawaal se")}
        </T>
      </Fade>

      {/* ===================== Group A — beats 1-3, THE PROOF ===================== */}

      <Draw
        on={aOn && beat >= 0}
        delay={dl(0, 0.4)}
        d={lineD(390, 94, 690, 94)}
        stroke={AMBER}
        sw={2}
        dur={0.6}
      />

      {/* beat 1 — the bijective diagram: ★ singled out, forks into IN / OUT */}
      <Fade on={aOn && beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={108} size={17} fill={INK} weight={600}>
          {t(
            "Choose r from n+1 objects. Single out one — call it ★.",
            "n+1 mein se r choose karna hai. Ek object alag karo — ★ bulate hain."
          )}
        </T>
      </Fade>

      <Fade on={aOn && beat >= 1} delay={dl(1, 1.0)}>
        {dotXs.map((x, i) => (
          <Circle key={i} cx={x} cy={dotY} r={dotR} fill={CREAM} stroke={INK} strokeWidth={1.8} />
        ))}
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 1.8)}>
        <T x={starX} y={starY} size={28} fill={AMBER} weight={800}>
          ★
        </T>
      </Fade>

      <Draw
        on={aOn && beat >= 1}
        delay={dl(1, 2.6)}
        d={lineD(540, 166, 540, 196)}
        stroke={AMBER}
        sw={2.2}
        dur={0.4}
      />
      <Draw
        on={aOn && beat >= 1}
        delay={dl(1, 3.2)}
        d={`${lineD(540, 196, leftCx, 210)} ${lineD(540, 196, rightCx, 210)}`}
        stroke={AMBER}
        sw={2.2}
        dur={0.6}
      />

      {/* LEFT box — ★ is IN */}
      <Fade on={aOn && beat >= 1} delay={dl(1, 4.0)}>
        <Rect x={leftBox.x} y={leftBox.y} width={leftBox.w} height={leftBox.h} rx={16} fill={GREEN_BG} />
      </Fade>
      <Draw
        on={aOn && beat >= 1}
        delay={dl(1, 4.2)}
        d={roundRectD(leftBox.x, leftBox.y, leftBox.w, leftBox.h, 16)}
        stroke={GREEN}
        sw={2.2}
        dur={0.9}
      />
      <Fade on={aOn && beat >= 1} delay={dl(1, 5.3)}>
        <T x={leftCx} y={250} size={19} fill={GREEN} weight={800}>
          {t("★ is IN", "★ IN hai")}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 5.7)}>
        <T x={leftCx} y={282} size={14} fill={INK} weight={500}>
          {t("need r-1 more from n", "n mein se r-1 aur chuno")}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 6.1)}>
        <T x={leftCx} y={316} size={19} fill={GREEN} weight={800}>
          → nC(r-1)
        </T>
      </Fade>

      {/* RIGHT box — ★ is OUT */}
      <Fade on={aOn && beat >= 1} delay={dl(1, 6.6)}>
        <Rect x={rightBox.x} y={rightBox.y} width={rightBox.w} height={rightBox.h} rx={16} fill={RED_BG} />
      </Fade>
      <Draw
        on={aOn && beat >= 1}
        delay={dl(1, 6.8)}
        d={roundRectD(rightBox.x, rightBox.y, rightBox.w, rightBox.h, 16)}
        stroke={RED}
        sw={2.2}
        dur={0.9}
      />
      <Fade on={aOn && beat >= 1} delay={dl(1, 7.9)}>
        <T x={rightCx} y={250} size={19} fill={RED} weight={800}>
          {t("★ is OUT", "★ OUT hai")}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 8.3)}>
        <T x={rightCx} y={282} size={14} fill={INK} weight={500}>
          {t("all r from n", "n mein se pura r chuno")}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 8.7)}>
        <T x={rightCx} y={316} size={19} fill={RED} weight={800}>
          → nCr
        </T>
      </Fade>

      {/* beat 2 — WHY the two cases add: mutually exclusive & exhaustive */}
      <Fade on={aOn && beat >= 2} delay={dl(2, 0)}>
        <Chip x={230} y={372} w={260} h={44} fill={CREAM} stroke={GREEN} textFill={GREEN} size={16} script={false}>
          {t("Mutually exclusive", "Mutually exclusive")}
        </Chip>
      </Fade>
      <Fade on={aOn && beat >= 2} delay={dl(2, 0.6)}>
        <T x={540} y={398} size={18} fill={MUTED} weight={700}>
          &amp;
        </T>
      </Fade>
      <Fade on={aOn && beat >= 2} delay={dl(2, 1.0)}>
        <Chip x={590} y={372} w={260} h={44} fill={CREAM} stroke={GREEN} textFill={GREEN} size={16} script={false}>
          {t("Exhaustive", "Exhaustive")}
        </Chip>
      </Fade>
      <Fade on={aOn && beat >= 2} delay={dl(2, 1.8)}>
        <T x={540} y={444} size={15} fill={AMBER_DARK} weight={500}>
          {t(
            "→ Sec2's Addition Principle: OR (no overlap) ⇒ ADD",
            "→ Sec2 wala Addition Principle: OR (overlap nahi) ⇒ ADD"
          )}
        </T>
      </Fade>

      {/* beat 3 — the formula lands (HIGH) */}
      {eqSegs.map((s, i) => (
        <Fade key={i} on={aOn && beat >= 3} delay={dl(3, 0 + i * 0.5)}>
          <T x={eqXs[i]} y={530} size={28} fill={s.fill} weight={800} anchor="start">
            {s.text}
          </T>
        </Fade>
      ))}
      <Draw
        on={aOn && beat >= 3}
        delay={dl(3, 2.2)}
        d={roundRectD(310, 478, 460, 95, 16)}
        stroke={GREEN}
        sw={2.2}
        dur={0.9}
      />
      <Draw
        on={aOn && beat >= 3}
        delay={dl(3, 3.3)}
        d={checkD(742, 522, 18)}
        stroke={GREEN}
        sw={3}
        dur={0.4}
      />

      {/* ===================== Group B — beats 4-6, THE TOOLKIT ===================== */}

      {/* beat 4 — new heading: Part 2 begins */}
      <Fade on={bOn && beat >= 4} delay={dl(4, 0)}>
        <T x={540} y={130} size={25} fill={RED} weight={800}>
          {t("Selection with forced objects", "Jab kuch objects forced hote hain")}
        </T>
      </Fade>
      <Draw
        on={bOn && beat >= 4}
        delay={dl(4, 0.6)}
        d={lineD(430, 150, 650, 150)}
        stroke={AMBER}
        sw={2}
        dur={0.5}
      />

      {/* LEFT card — must INCLUDE k specific */}
      <Draw
        on={bOn && beat >= 4}
        delay={dl(4, 1.4)}
        d={roundRectD(leftCard.x, leftCard.y, leftCard.w, leftCard.h, 14)}
        stroke={GREEN}
        sw={2}
        dur={0.8}
      />
      <Fade on={bOn && beat >= 4} delay={dl(4, 2.4)}>
        <T x={leftCardCx} y={232} size={18} fill={GREEN} weight={800}>
          {t("Must INCLUDE k specific", "k specific INCLUDE karne hain")}
        </T>
      </Fade>
      <Fade on={bOn && beat >= 4} delay={dl(4, 2.9)}>
        {leftDotXs.map((x, i) => (
          <Circle key={i} cx={x} cy={cardDotY} r={cardDotR} fill={CREAM} stroke={INK} strokeWidth={1.6} />
        ))}
      </Fade>
      <Fade on={bOn && beat >= 4} delay={dl(4, 3.6)}>
        {leftDotXs.map((x, i) =>
          leftMarkedIdx.includes(i) ? (
            <Circle key={i} cx={x} cy={cardDotY} r={cardDotR} fill={GREEN} stroke={GREEN} strokeWidth={1.6} />
          ) : null
        )}
      </Fade>
      <Fade on={bOn && beat >= 4} delay={dl(4, 4.1)}>
        <T x={leftCardCx} y={288} size={13} fill={GREEN} weight={600}>
          {t("pre-place the k forced-in ones", "k forced-in ones pehle se rakh do")}
        </T>
      </Fade>
      <Fade on={bOn && beat >= 4} delay={dl(4, 4.6)}>
        <T x={leftCardCx} y={322} size={20} fill={GREEN} weight={800}>
          → (n-k)C(r-k)
        </T>
      </Fade>
      <Fade on={bOn && beat >= 4} delay={dl(4, 5.1)}>
        <T x={leftCardCx} y={354} size={12} fill={MUTED}>
          {t("(e.g. n=10, k=2, r=5 → 8C3)", "(e.g. n=10, k=2, r=5 → 8C3)")}
        </T>
      </Fade>

      {/* beat 5 — RIGHT card — must EXCLUDE k specific */}
      <Draw
        on={bOn && beat >= 5}
        delay={dl(5, 0)}
        d={roundRectD(rightCard.x, rightCard.y, rightCard.w, rightCard.h, 14)}
        stroke={RED}
        sw={2}
        dur={0.8}
      />
      <Fade on={bOn && beat >= 5} delay={dl(5, 1.0)}>
        <T x={rightCardCx} y={232} size={18} fill={RED} weight={800}>
          {t("Must EXCLUDE k specific", "k specific EXCLUDE karne hain")}
        </T>
      </Fade>
      <Fade on={bOn && beat >= 5} delay={dl(5, 1.5)}>
        {rightDotXs.map((x, i) => (
          <Circle key={i} cx={x} cy={cardDotY} r={cardDotR} fill={CREAM} stroke={INK} strokeWidth={1.6} />
        ))}
      </Fade>
      <Fade on={bOn && beat >= 5} delay={dl(5, 2.2)}>
        {rightDotXs.map((x, i) =>
          rightMarkedIdx.includes(i) ? (
            <Circle key={i} cx={x} cy={cardDotY} r={cardDotR} fill={RED} stroke={RED} strokeWidth={1.6} />
          ) : null
        )}
      </Fade>
      <Draw
        on={bOn && beat >= 5}
        delay={dl(5, 2.8)}
        d={rightDotXs
          .filter((_, i) => rightMarkedIdx.includes(i))
          .map((x) => crossD(x - cardDotR, cardDotY - cardDotR, cardDotR * 2, cardDotR * 2))
          .join(" ")}
        stroke={RED}
        sw={2}
        dur={0.5}
      />
      <Fade on={bOn && beat >= 5} delay={dl(5, 3.6)}>
        <T x={rightCardCx} y={288} size={13} fill={RED} weight={600}>
          {t("drop the k forced-out ones", "k forced-out ones hata do")}
        </T>
      </Fade>
      <Fade on={bOn && beat >= 5} delay={dl(5, 4.1)}>
        <T x={rightCardCx} y={322} size={20} fill={RED} weight={800}>
          → (n-k)Cr
        </T>
      </Fade>
      <Fade on={bOn && beat >= 5} delay={dl(5, 4.6)}>
        <T x={rightCardCx} y={354} size={12} fill={MUTED}>
          {t("(e.g. n=10, k=2, r=5 → 8C5)", "(e.g. n=10, k=2, r=5 → 8C5)")}
        </T>
      </Fade>

      {/* beat 6 — closing guardrail: at least / at most strategy */}
      <Fade on={bOn && beat >= 6} delay={dl(6, 0)}>
        <T x={540} y={430} size={16} fill={INK} weight={600}>
          {t(
            "'At least / at most' problems — two ways:",
            "'At least / at most' problems — do tareeke:"
          )}
        </T>
      </Fade>
      <Fade on={bOn && beat >= 6} delay={dl(6, 0.6)}>
        <Chip x={170} y={448} w={300} h={44} fill={CREAM} stroke={RED} textFill={RED} size={15} script={false}>
          {t("Sum the individual cases", "Har case ka sum karo")}
        </Chip>
      </Fade>
      <Fade on={bOn && beat >= 6} delay={dl(6, 1.0)}>
        <T x={540} y={475} size={16} fill={MUTED} weight={700}>
          {t("OR", "YA")}
        </T>
      </Fade>
      <Fade on={bOn && beat >= 6} delay={dl(6, 1.4)}>
        <Chip x={610} y={448} w={300} h={44} fill={CREAM} stroke={RED} textFill={RED} size={15} script={false}>
          {t("Total − complement", "Total − complement")}
        </Chip>
      </Fade>
      <Fade on={bOn && beat >= 6} delay={dl(6, 2.0)}>
        <T x={540} y={516} size={13} fill={AMBER_DARK}>
          {t(
            "(pick whichever needs less arithmetic)",
            "(jo kam calculation maange, wahi chuno)"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
