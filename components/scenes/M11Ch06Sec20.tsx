/**
 * M11 Ch06 · Section 20 — "The combination formula and its properties"
 * SECOND section of Subtopic 3 "Combinations" (follows Sec19's intuitive
 * "order doesn't matter" build-up; this section formalizes it into a real
 * toolkit — the nCr equivalent of Sec12's nPr toolkit). Canvas 1080×620 ·
 * safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * All nCr/nPr here are SYMBOLIC (n, r, s are variables) → plain text
 * "nCr"/"nPr", no attempted super/subscript letter rendering — EXCEPT beat 6
 * (¹²C₁₀ = ¹²C₂ = 66), a literal NUMERIC case → real super/subscript digits
 * in non-script (Anek) text, per the digit-coverage note in the notation doc.
 *
 * Beats (board_reveal_at_english [0,8.96,24.83,39.34,54.44,68.1,81.83],
 * hinglish [0,7.68,23.13,38.57,51.29,62.12,77.4]):
 *  0 heading (= title, always-on) + underline flourish
 *  [group A: aOn = beat 0..2, erased at beat>=3 — the base identity]
 *  1 (HIGH) core identity: green "nCr" chip, two equivalent forms build
 *    term by term — direct factorial quotient n!/(r!(n-r)!), then nPr/r!
 *    (callback: Sec19's own "divide by r!" preview, now made exact) —
 *    landed in a green hero box with domain "0 ≤ r ≤ n" + checkmark
 *  2 four boundary cases on one line: nC0 = nCn = 1 (green, foreshadows
 *    symmetry) | nC1 = n (ink) | nCr = 0 if r > n (red, the "can't choose
 *    more than you have" limit) — a drawn amber divider rule opens the beat
 *  [group A erased at beat>=3 — full board freed for group B]
 *  [group B: bOn = beat 3..4, erased at beat>=5]
 *  3 (HIGH) THE SYMMETRY PROPERTY: "nCr = nC(n-r)" builds, ringed green,
 *    then the real payoff — a pool of 5 dots shown TWICE, same layout: LEFT
 *    copy has 2 dots filled green ("choose r=2"), RIGHT copy (identical
 *    positions = same pool) has the OTHER 3 filled red ("reject n-r=3"), a
 *    big "=" between them makes "choose = reject" visually unmistakable
 *  4 Pascal's rule PREVIEW (not derived here, Sec22 does that): "nCr +
 *    nC(r-1) = (n+1)Cr" builds term by term inside a dashed (not solid)
 *    box — the dashing itself signals "stated, not yet proved"
 *  [group B erased at beat>=5 — final board for the closing pair]
 *  5 the symmetry corollary: "nCr = nCs" ⇒ (drawn arrow down to) two
 *    branches "r = s" (ink chip) or "r + s = n" (green chip, tying back to
 *    beat 3's property) — a handy exam fact
 *  6 (final, never erased) numeric guardrail: ¹²C₁₀ = ¹²C₂ = 66 builds term
 *    by term (real digits, the ONE numeric exception), boxed+checked, then
 *    the practical-tip chip: never grind the big factorial, use symmetry
 *
 * Layout plan (boxes = estimated render boxes; longer language counts;
 * width/gap calibration follows Sec12's own proven Anek-bold numbers:
 * width ≈ 0.5×size×chars, ~16-18px gap between sequential term reveals):
 *  always | title (script 24, red)                          | T mid  | x~356..724 y39..82
 *  [group A: aOn = beat 0..2, erased at beat>=3]
 *  b0 | title underline flourish (amber)                     | Draw  | x380..700 y94
 *  b1 | "nCr" chip (green/white, w110 h34)                     | Chip  | x340..450 y124..158
 *  b1 | "= n!" (ink) "/" "(r!(n-r)!)" (amber-dark) (30,w800)      | T st | x466..724 y124.6..157.3
 *  b1 | "= nPr" (green) "/r!" (ink) (30,w800)                       | T st | x466..619 y180.6..213.3
 *  b1 | tag "(Sec19 preview)" (14, amber-dark)                        | T st | x635..747 y193..208
 *  b1 | domain "0 ≤ r ≤ n" (16, muted) + checkmark (green)               | T mid | x504..576 y233.5..251
 *  b1 | hero box (green, rounded)                                       | Draw | x310..960 y108..274
 *  b2 | amber divider rule                                               | Draw | x460..620 y293
 *  b2 | "nC0=nCn=1"(green) "nC1=n"(ink) "nCr=0 if r>n"(red) (26,w800)       | T st | x254.5..825.5 y311.7..340
 *  b2 | caption "(boundary cases...)" (14,muted)                            | T mid| x~396..684 y359..378
 *  [group A erased at beat>=3]
 *  [group B: bOn = beat 3..4]
 *  b3 | "nCr" chip + "= nC(n-r)" (26,w800,ink) + tag "(choose=reject)"        | Chip/T | x300..702 y124..162
 *  b3 | ring around "nC(n-r)" (green)                                          | Draw  | x445..564 y77..174
 *  b3 | caption "same n objects, two equivalent counts" (15,ink)                 | T mid | x~397..683 y188..205
 *  b3 | LEFT pool: 5 dots (r10), 2 green filled = "choose r=2"                     | circle| x198..362 y218..238
 *  b3 | RIGHT pool: same 5 positions, 3 red filled = "reject n-r=3"                  | circle| x718..882 y218..238
 *  b3 | big "=" between pools (36,ink)                                              | T mid | x528..552 y~217..247
 *  b3 | labels "choose r=2"(green) / "reject n-r=3"(red) (15,w600)                   | T mid | x235..325 / x747.5..852.5 y258..275
 *  b3 | example tag "(example: n=5, r=2)" (13,muted)                                 | T mid | x~462..618 y290..304
 *  b4 | "nCr + nC(r-1) = (n+1)Cr" (24,w800,ink)                                       | T st | x394..686 y401..427
 *  b4 | dashed box (amber-dark)                                                        | rect | x376..702 y384..442
 *  b4 | tag "(Pascal's rule - proved next section)" (14,amber-dark)                      | T mid| x~386..694 y459..474
 *  [group B erased at beat>=5]
 *  b5 | "nCr = nCs" (28,w800,ink)                                                        | T mid | x477..603 y129..159
 *  b5 | drawn arrow down                                                                    | Draw | x540 y178..222
 *  b5 | chip "r = s" (ink/cream, w140h50) | "or" (muted) | chip "r+s=n" (green,w180h50)        | Chip | x310..790 y260..310
 *  b5 | tag "(from the symmetry property...)" (14,muted)                                        | T mid| x~375..705 y334..349
 *  b6 | "¹²C₁₀ = ¹²C₂(green) = 66(green,boxed+checked)" (26,w800)                                  | T st | x420..697 y409.7..444
 *  b6 | tag "(symmetry: 12-10=2)" (14,amber-dark)                                                    | T mid| x~456..624 y459..474
 *  b6 | guardrail Chip "Never grind the big factorial..." (cream/red, dynamic w, h56)                 | Chip | x230..850 y495..551
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
import { roundRectD, checkD, lineD } from "./math-kit";

export default function M11Ch06Sec20({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  // Group A (beats 0-2: the core nCr identity + its boundary cases) is
  // erased once group B's real payoff (beats 3-4: the symmetry property with
  // its dot-pool proof, the Pascal's-rule preview) needs the full board;
  // group B is in turn erased once the closing pair (beats 5-6: the r=s-or-
  // r+s=n corollary, the numeric ¹²C₁₀=¹²C₂=66 guardrail) lands for good.
  // Each element's own `on` is bounded to its beat window (aOn/bOn && beat
  // >= k) rather than a wrapper div's opacity, so the verifier's Fade-
  // opacity visibility check (which walks up to the nearest g.sc-fade, not
  // an arbitrary ancestor) sees the erasure correctly; seeking back into an
  // earlier beat correctly restores it.
  const aOn = beat >= 0 && beat < 3;
  const bOn = beat >= 3 && beat < 5;

  // ---- beat 3: the same 5-dot pool shown twice — choose r=2 (left, green)
  // vs reject n-r=3 (right, red) — identical relative positions so it reads
  // as literally the same pool, annotated two ways.
  const dotXsRel = [-72, -36, 0, 36, 72]; // relative offsets from panel center
  const leftCx = 280;
  const rightCx = 800;
  const poolY = 228;
  const chosenIdx = [0, 1]; // these two are the "included r" set

  // ---- beat 6: ¹²C₁₀ = ¹²C₂ = 66 (numeric — the ONE exception to symbolic
  // nCr notation in this section). Real superscript/subscript digits, non-
  // script (Anek) text per the digit-coverage note in the notation doc.
  const numSegs = [
    { text: "¹²C₁₀", fill: INK },
    { text: "=", fill: INK },
    { text: "¹²C₂", fill: GREEN },
    { text: "=", fill: INK },
    { text: "66", fill: GREEN },
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
  const box66X = numXs[4] - 6;
  const box66W = numWidths[4] + 12;

  // ---- beat 6 guardrail chip: dynamic width from the longer language string ----
  const guardrailText = t(
    "Never grind the big factorial - use the symmetry shortcut.",
    "Bada factorial mat karo - symmetry shortcut use karo."
  );
  const guardrailW = Math.max(560, 0.5 * 19 * guardrailText.length + 40);
  const guardrailX = 540 - guardrailW / 2;

  return (
    <Scene>
      {/* title always-on */}
      <Fade on={true}>
        <T x={540} y={70} size={24} fill={RED} script>
          {t("Your combination toolkit", "Tumhara combination toolkit")}
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

      {/* ===================== beat 1 — the core nCr identity (HIGH) ===================== */}
      <Fade on={aOn && beat >= 1} delay={dl(1, 0)}>
        <Chip x={340} y={124} w={110} h={34} fill={GREEN} textFill="#fff" size={20} script={false}>
          nCr
        </Chip>
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 0.6)}>
        <T x={466} y={148} size={30} fill={INK} weight={800} anchor="start">
          =
        </T>
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 1.0)}>
        <T x={497} y={148} size={30} fill={INK} weight={800} anchor="start">
          n!
        </T>
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 1.4)}>
        <T x={543} y={148} size={30} fill={INK} weight={800} anchor="start">
          /
        </T>
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 1.8)}>
        <T x={574} y={148} size={30} fill={AMBER_DARK} weight={800} anchor="start">
          (r!(n-r)!)
        </T>
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 2.4)}>
        <T x={466} y={204} size={30} fill={INK} weight={800} anchor="start">
          =
        </T>
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 2.8)}>
        <T x={497} y={204} size={30} fill={GREEN} weight={800} anchor="start">
          nPr
        </T>
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 3.2)}>
        <T x={558} y={204} size={30} fill={INK} weight={800} anchor="start">
          /
        </T>
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 3.6)}>
        <T x={589} y={204} size={30} fill={INK} weight={800} anchor="start">
          r!
        </T>
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 4.2)}>
        <T x={635} y={204} size={14} fill={AMBER_DARK} anchor="start">
          {t("(Sec19 preview)", "(Sec19 wala)")}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 4.8)}>
        <T x={540} y={246} size={16} fill={MUTED}>
          0 ≤ r ≤ n
        </T>
      </Fade>
      <Draw
        on={aOn && beat >= 1}
        delay={dl(1, 5.4)}
        d={checkD(605, 246, 16)}
        stroke={GREEN}
        sw={2.6}
        dur={0.4}
      />
      <Draw
        on={aOn && beat >= 1}
        delay={dl(1, 6.0)}
        d={roundRectD(310, 108, 650, 166, 16)}
        stroke={GREEN}
        sw={2.2}
        dur={1.0}
      />

      {/* ===================== beat 2 — four boundary cases ===================== */}
      <Draw
        on={aOn && beat >= 2}
        delay={dl(2, 0)}
        d={lineD(460, 293, 620, 293)}
        stroke={AMBER}
        sw={2}
        dur={0.5}
      />
      <Fade on={aOn && beat >= 2} delay={dl(2, 0.6)}>
        <T x={254.5} y={332} size={26} fill={GREEN} weight={800} anchor="start">
          nC0 = nCn = 1
        </T>
      </Fade>
      <Fade on={aOn && beat >= 2} delay={dl(2, 1.0)}>
        <T x={439.5} y={332} size={26} fill={MUTED} weight={800} anchor="start">
          |
        </T>
      </Fade>
      <Fade on={aOn && beat >= 2} delay={dl(2, 1.4)}>
        <T x={468.5} y={332} size={26} fill={INK} weight={800} anchor="start">
          nC1 = n
        </T>
      </Fade>
      <Fade on={aOn && beat >= 2} delay={dl(2, 1.8)}>
        <T x={575.5} y={332} size={26} fill={MUTED} weight={800} anchor="start">
          |
        </T>
      </Fade>
      <Fade on={aOn && beat >= 2} delay={dl(2, 2.2)}>
        <T x={604.5} y={332} size={26} fill={RED} weight={800} anchor="start">
          {"nCr = 0 if r > n"}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 2} delay={dl(2, 2.8)}>
        <T x={540} y={370} size={14} fill={MUTED}>
          {t(
            "(boundary cases: r = 0, n, 1, and r > n)",
            "(boundary cases: r = 0, n, 1, aur r > n)"
          )}
        </T>
      </Fade>

      {/* ===================== beat 3 — the symmetry property (HIGH) ===================== */}
      <Fade on={bOn && beat >= 3} delay={dl(3, 0)}>
        <Chip x={300} y={124} w={100} h={32} fill={GREEN} textFill="#fff" size={18} script={false}>
          nCr
        </Chip>
      </Fade>
      <Fade on={bOn && beat >= 3} delay={dl(3, 0.5)}>
        <T x={416} y={148} size={26} fill={INK} weight={800} anchor="start">
          =
        </T>
      </Fade>
      <Fade on={bOn && beat >= 3} delay={dl(3, 0.9)}>
        <T x={459} y={148} size={26} fill={INK} weight={800} anchor="start">
          nC(n-r)
        </T>
      </Fade>
      <Fade on={bOn && beat >= 3} delay={dl(3, 1.3)}>
        <T x={576} y={148} size={14} fill={AMBER_DARK} anchor="start">
          {t("(choose = reject)", "(chuno = chhodo)")}
        </T>
      </Fade>
      <Draw
        on={bOn && beat >= 3}
        delay={dl(3, 1.8)}
        d={ringD(504.5, 141.76, 59.5, 25)}
        stroke={GREEN}
        sw={2.2}
        dur={0.8}
      />
      <Fade on={bOn && beat >= 3} delay={dl(3, 2.3)}>
        <T x={540} y={200} size={15} fill={INK} weight={600}>
          {t(
            "same n objects, two equivalent counts",
            "wahi n objects, do equivalent counts"
          )}
        </T>
      </Fade>
      <Fade on={bOn && beat >= 3} delay={dl(3, 2.7)}>
        {dotXsRel.map((dx, i) => (
          <Circle
            key={i}
            cx={leftCx + dx}
            cy={poolY}
            r={10}
            fill={chosenIdx.includes(i) ? GREEN : CREAM}
            stroke={chosenIdx.includes(i) ? GREEN : INK}
            strokeWidth={1.8}
          />
        ))}
      </Fade>
      <Fade on={bOn && beat >= 3} delay={dl(3, 3.1)}>
        <T x={leftCx} y={270} size={15} fill={GREEN} weight={600}>
          {t("choose r = 2", "r = 2 chuno")}
        </T>
      </Fade>
      <Fade on={bOn && beat >= 3} delay={dl(3, 3.5)}>
        {dotXsRel.map((dx, i) => (
          <Circle
            key={i}
            cx={rightCx + dx}
            cy={poolY}
            r={10}
            fill={chosenIdx.includes(i) ? CREAM : RED}
            stroke={chosenIdx.includes(i) ? INK : RED}
            strokeWidth={1.8}
          />
        ))}
      </Fade>
      <Fade on={bOn && beat >= 3} delay={dl(3, 3.9)}>
        <T x={rightCx} y={270} size={15} fill={RED} weight={600}>
          {t("reject n-r = 3", "n-r = 3 chhodo")}
        </T>
      </Fade>
      <Fade on={bOn && beat >= 3} delay={dl(3, 4.3)}>
        <T x={540} y={238} size={36} fill={INK} weight={800}>
          =
        </T>
      </Fade>
      <Fade on={bOn && beat >= 3} delay={dl(3, 4.8)}>
        <T x={540} y={300} size={13} fill={MUTED}>
          {t("(example: n = 5, r = 2)", "(example: n = 5, r = 2)")}
        </T>
      </Fade>

      {/* ===================== beat 4 — Pascal's rule preview ===================== */}
      <Fade on={bOn && beat >= 4} delay={dl(4, 0)}>
        <T x={394} y={420} size={24} fill={INK} weight={800} anchor="start">
          nCr
        </T>
      </Fade>
      <Fade on={bOn && beat >= 4} delay={dl(4, 0.5)}>
        <T x={446} y={420} size={24} fill={INK} weight={800} anchor="start">
          +
        </T>
      </Fade>
      <Fade on={bOn && beat >= 4} delay={dl(4, 1.0)}>
        <T x={474} y={420} size={24} fill={INK} weight={800} anchor="start">
          nC(r-1)
        </T>
      </Fade>
      <Fade on={bOn && beat >= 4} delay={dl(4, 1.5)}>
        <T x={574} y={420} size={24} fill={INK} weight={800} anchor="start">
          =
        </T>
      </Fade>
      <Fade on={bOn && beat >= 4} delay={dl(4, 2.0)}>
        <T x={602} y={420} size={24} fill={GREEN} weight={800} anchor="start">
          (n+1)Cr
        </T>
      </Fade>
      <Fade on={bOn && beat >= 4} delay={dl(4, 2.6)}>
        <Rect
          x={376}
          y={384}
          width={326}
          height={58}
          rx={12}
          fill="none"
          stroke={AMBER_DARK}
          strokeWidth={1.8}
          strokeDasharray="7 6"
        />
      </Fade>
      <Fade on={bOn && beat >= 4} delay={dl(4, 3.2)}>
        <T x={540} y={470} size={14} fill={AMBER_DARK}>
          {t(
            "(Pascal's rule - proved in the next section)",
            "(Pascal's rule - agle section mein proof)"
          )}
        </T>
      </Fade>

      {/* ===================== beat 5 — the symmetry corollary ===================== */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={540} y={150} size={28} fill={INK} weight={800}>
          nCr = nCs
        </T>
      </Fade>
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.6)}
        d={arrowD(540, 178, 540, 222)}
        stroke={INK}
        sw={2.2}
        dur={0.5}
      />
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        <Chip x={310} y={260} w={140} h={50} fill={CREAM} stroke={INK} textFill={INK} size={22} script={false}>
          r = s
        </Chip>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={530} y={291} size={18} fill={MUTED} weight={600}>
          {t("or", "ya")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2.0)}>
        <Chip x={610} y={260} w={180} h={50} fill={GREEN} textFill="#fff" size={22} script={false}>
          r + s = n
        </Chip>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2.6)}>
        <T x={540} y={345} size={14} fill={MUTED}>
          {t(
            "(from the symmetry property: choose = reject)",
            "(symmetry se: chuno = chhodo)"
          )}
        </T>
      </Fade>

      {/* ===================== beat 6 — numeric guardrail (final) ===================== */}
      {numSegs.map((s, i) => (
        <Fade key={i} on={beat >= 6} delay={dl(6, 0 + i * 0.5)}>
          <T x={numXs[i]} y={430} size={26} fill={s.fill} weight={800} anchor="start">
            {s.text}
          </T>
        </Fade>
      ))}
      <Draw
        on={beat >= 6}
        delay={dl(6, 2.6)}
        d={roundRectD(box66X, 404, box66W, 40, 8)}
        stroke={GREEN}
        sw={2}
        dur={0.5}
      />
      <Draw
        on={beat >= 6}
        delay={dl(6, 3.2)}
        d={checkD(690, 424, 14)}
        stroke={GREEN}
        sw={2.6}
        dur={0.4}
      />
      <Fade on={beat >= 6} delay={dl(6, 3.8)}>
        <T x={540} y={470} size={14} fill={AMBER_DARK}>
          {t("(symmetry: 12 - 10 = 2)", "(symmetry: 12 - 10 = 2)")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 4.4)}>
        <Chip
          x={guardrailX}
          y={495}
          w={guardrailW}
          h={56}
          fill={CREAM}
          stroke={RED}
          textFill={RED}
          size={17}
          script={false}
        >
          {guardrailText}
        </Chip>
      </Fade>
    </Scene>
  );
}
