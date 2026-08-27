/**
 * M11 Ch06 · Section 8 — "Worked examples: constrained slots and
 * complementary counting"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. Direct sibling of Sec7 (same "Example N" heading
 * style, same box/answer-landing conventions) — two harder, exam-tier worked
 * examples. Example 3 reuses Sec6/Sec7's 4-slot-box vocabulary (JEE Main,
 * "handle the constrained slot first"). Example 4 is the harder one (JEE
 * Advanced): "at least one 9" → complement counting, staged as a genuine
 * universe/sub-box diagram (not three floating numbers) with the final
 * subtraction visually anchored back to the diagram via a drawn bracket.
 *
 * Beats (board_reveal_at_english [0,9.64,25.6,40.79,50.6,64.68,76.97],
 * hinglish [0,8.79,24.58,39.85,49.32,63.91,77.91]):
 *  0 Example 3 heading + underline flourish
 *  [group A: aOn = beat 0..2, erased at beat>=3]
 *  1 setup: intro line "handle constrained slots first: thousands ≠ 0,
 *    units must be even" + 4 slot boxes (thousands/hundreds/tens/units);
 *    "≠0"/arrow over box1 and "even"/arrow over box4 appear BEFORE any
 *    numbers (both constraints called out first); then 9 drops into box1,
 *    5 into box4 (constrained slots filled first), THEN 10,10 into
 *    box2/box3 (unconstrained, filled last) + × signs + bottom caption
 *  2 formula lands: "9 × 10 × 10 × 5 = 4,500" boxed green + checkmark
 *  [group A erased at beat>=3]
 *  3 Example 4 heading + underline flourish (subheadBOn, persists to end)
 *  4 guardrail (red, persists to end): warning-triangle icon + chip
 *    "'At least one' → count the complement." — the whole point of the
 *    example, kept visible through the rest of the section
 *  5 [diagramOn, persists to end — beat 6 connects back to it] universe
 *    diagram builds: outer box (label "the universe: all 5-digit numbers",
 *    computation "9 × 10⁴ = 90,000" on its right) draws first, then a
 *    smaller amber sub-box nests inside it ("no 9 at all", computation
 *    "8 × 9⁴ = 52,488"), then a red callout in the remaining open area of
 *    the outer box: "the rest → has at least one 9"
 *  6 land: a drawn bracket/arrow drops from the diagram's bottom edge into
 *    the final formula "90,000 − 52,488 = 37,512" — operand colors echo
 *    the diagram (ink = outer/total, amber = inner/complement, green =
 *    answer) so the subtraction reads as "whole minus the excluded chunk",
 *    boxed green hero + checkmark
 *
 * Layout plan (boxes = estimated render boxes; longer language counts):
 *  always | title (script 24, red)                      | T mid   | x197..883 y39..82
 *  [group A: aOn = beat 0..2, erased at beat>=3]
 *  b0 | "Example 3 (JEE Main): even 4-digit..." (22,ink,w700) | T mid | x199..881 y113..137
 *  b0 | underline flourish (amber)                        | Draw   | x230..850 y152
 *  b1 | intro "handle constrained slots first..." (18,ink)  | T mid | x216..864 y172..192
 *  b1 | 4 slot boxes (64×64, gap40)                          | Draw  | x352..728 y280..344
 *  b1 | "≠ 0" + arrow over box1                                | T/Draw| x371..398 y230..275
 *  b1 | "even" + arrow over box4                                | T/Draw| x678..714 y230..275
 *  b1 | counts 9,10,10,5 (30,ink,w800, per box)                  | T mid | x369..711 y306..330
 *  b1 | × signs ×3 (24, muted)                                    | T mid | x424..656 y311..329
 *  b1 | 4 labels thousands/hundreds/tens/units (14, muted)          | T mid| per-box y357..372
 *  b1 | bottom caption "hundreds & tens: unconstrained..." (16,amber-dk)|T mid|x340..740 y394..412
 *  b2 | "9 × 10 × 10 × 5" (32,ink,w800) start x330                 | T start| x330..570 y505..540
 *  b2 | "= 4,500" (32,green,w800) start x592                        | T start| x592..704 y505..540
 *  b2 | outer box (green)                                            | Draw  | x300..740 y486..570
 *  b2 | checkmark                                                      | Draw | x760..778 y512..527
 *  [group A erased at beat>=3]
 *  [group B: subheadBOn = beat>=3 (persists); guardOn = beat>=4 (persists);
 *   diagramOn = beat>=5 (persists) — nothing in Example 4 erases, beat 6
 *   must visually connect back to beat 5's numbers]
 *  b3 | "Example 4 (JEE Adv): 5-digit numbers..." (22,ink,w700) | T mid | x232..848 y113..137
 *  b3 | underline flourish (amber)                              | Draw  | x260..820 y152
 *  b4 | warning-triangle icon (red)                              | Draw  | x124..156 y177..207
 *  b4 | guardrail chip (cream/red border, w720 h40)                | Chip | x180..900 y172..212
 *  b5 | diagram top label "the universe: all 5-digit..." (16,ink,w700)|T mid|x?..? y223..241 (centered x530)
 *  b5 | outer box (ink, 760×186)                                    | Draw | x150..910 y254..440
 *  b5 | outer computation "9 × 10⁴ = 90,000" (26,ink,w800)            | T mid| x574..796 y331..360
 *  b5 | inner box (amber, 280×130)                                    | Draw | x180..460 y280..410
 *  b5 | inner caption "no 9 at all" (14, muted)                        | T mid| x281..359 y297..312
 *  b5 | inner computation "8 × 9⁴ = 52,488" (22,amber-dk,w800)          | T mid| x232..408 y335..359
 *  b5 | red callout "the rest → has at least one 9" (14, red)            | T mid| x555..815 y413..428
 *  b6 | bracket (serif ticks + bar) + arrow stem into formula (ink)       | Draw | x250..810 y440..482
 *  b6 | "90,000 −" (32,ink,w800) start x355                              | T start| x355..483 y505..540
 *  b6 | "52,488" (32,amber-dk,w800) start x491, boxed amber                | T start| x491..587 y505..540
 *  b6 | amber box around "52,488"                                          | Draw  | x485..593 y499..546
 *  b6 | "= 37,512" (32,green,w800) start x597                               | T start| x597..725 y505..540
 *  b6 | green hero box                                                       | Draw  | x325..755 y485..570
 *  b6 | checkmark                                                             | Draw | x766..784 y505..527
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
import { roundRectD, checkD } from "./math-kit";

export default function M11Ch06Sec8({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  // Group A (Example 3, beats 0-2) is fully erased at beat 3 — the two
  // worked examples are independent problems, same as Sec7's pattern. Group
  // B (Example 4) does NOT erase internally: the guardrail (beat 4) and the
  // universe diagram (beat 5) both need to stay on screen through beat 6,
  // because beat 6's subtraction bracket visually connects back to the
  // diagram's two numbers — erasing it would break that connection. Each
  // element's own `on` is bounded to its beat window (rather than a wrapper
  // div's opacity) so the verifier's Fade-opacity visibility check — which
  // walks up to the nearest g.sc-fade, not an arbitrary ancestor — sees the
  // erasure too; seeking back into an earlier beat correctly restores it.
  const aOn = beat >= 0 && beat < 3;
  const subheadBOn = beat >= 3;
  const guardOn = beat >= 4;
  const diagramOn = beat >= 5;
  const finalOn = beat >= 6;

  // ---- Example 3 geometry (4 slots: thousands, hundreds, tens, units) ----
  const boxX = [352, 456, 560, 664];
  const boxCenters = [384, 488, 592, 696];
  const gapCenters = [436, 540, 644];
  const boxNums = [9, 10, 10, 5];
  const boxLabels = [
    t("thousands", "thousands"),
    t("hundreds", "hundreds"),
    t("tens", "tens"),
    t("units", "units"),
  ];

  return (
    <Scene>
      {/* title always-on */}
      <Fade on={true}>
        <T x={540} y={70} size={24} fill={RED} script>
          {t(
            "constrained slots first, then count what's excluded",
            "pehle constrained slots, phir jo bacha usse gino"
          )}
        </T>
      </Fade>

      {/* ===================== Example 3 (beats 0-2) ===================== */}
      <Fade on={aOn && beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={130} size={22} fill={INK} weight={700}>
          {t(
            "Example 3 (JEE Main): even 4-digit numbers, repetition allowed",
            "Example 3 (JEE Main): even 4-digit numbers, repetition allowed"
          )}
        </T>
      </Fade>
      <Draw
        on={aOn && beat >= 0}
        delay={dl(0, 0.7)}
        d={`M230 152 L850 152`}
        stroke={AMBER}
        sw={2}
        dur={0.6}
      />

      {/* beat 1 — 4 slots: constrained (thousands, units) reasoned first */}
      <Fade on={aOn && beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={186} size={18} fill={INK}>
          {t(
            "handle constrained slots first: thousands ≠ 0, units must be even",
            "pehle constrained slots handle karo: thousands ≠ 0, units even hone chahiye"
          )}
        </T>
      </Fade>
      <Draw
        on={aOn && beat >= 1}
        delay={dl(1, 0.6)}
        d={boxX.map((x) => roundRectD(x, 280, 64, 64, 10)).join(" ")}
        stroke={INK}
        sw={2}
        dur={1.0}
      />

      {/* constraints called out BEFORE any numbers fill in */}
      <Fade on={aOn && beat >= 1} delay={dl(1, 1.6)}>
        <T x={384} y={244} size={18} fill={RED} weight={700}>
          ≠ 0
        </T>
      </Fade>
      <Draw
        on={aOn && beat >= 1}
        delay={dl(1, 2.0)}
        d={arrowD(384, 258, 384, 275)}
        stroke={RED}
        sw={2.2}
        dur={0.4}
      />
      <Fade on={aOn && beat >= 1} delay={dl(1, 2.4)}>
        <T x={696} y={244} size={18} fill={RED} weight={700}>
          {t("even", "even")}
        </T>
      </Fade>
      <Draw
        on={aOn && beat >= 1}
        delay={dl(1, 2.8)}
        d={arrowD(696, 258, 696, 275)}
        stroke={RED}
        sw={2.2}
        dur={0.4}
      />

      {/* constrained slots filled first (thousands, units), then the
          unconstrained pair (hundreds, tens) fills last */}
      <Fade on={aOn && beat >= 1} delay={dl(1, 3.4)}>
        <T x={boxCenters[0]} y={320} size={30} fill={INK} weight={800}>
          {boxNums[0]}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 3.9)}>
        <T x={boxCenters[3]} y={320} size={30} fill={INK} weight={800}>
          {boxNums[3]}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 4.5)}>
        <T x={boxCenters[1]} y={320} size={30} fill={INK} weight={800}>
          {boxNums[1]}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 4.9)}>
        <T x={boxCenters[2]} y={320} size={30} fill={INK} weight={800}>
          {boxNums[2]}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 5.4)}>
        {gapCenters.map((x) => (
          <T key={x} x={x} y={320} size={24} fill={MUTED}>
            ×
          </T>
        ))}
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 5.8)}>
        {boxLabels.map((lb, i) => (
          <T key={i} x={boxCenters[i]} y={368} size={14} fill={MUTED}>
            {lb}
          </T>
        ))}
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 6.3)}>
        <T x={540} y={403} size={16} fill={AMBER_DARK}>
          {t(
            "hundreds & tens: unconstrained → 10 choices each",
            "hundreds & tens: koi restriction nahi → har ek mein 10 choices"
          )}
        </T>
      </Fade>

      {/* beat 2 — land: 9 × 10 × 10 × 5 = 4,500 */}
      <Fade on={aOn && beat >= 2} delay={dl(2, 0)}>
        <T x={330} y={530} size={32} fill={INK} weight={800} anchor="start">
          9 × 10 × 10 × 5
        </T>
      </Fade>
      <Fade on={aOn && beat >= 2} delay={dl(2, 0.6)}>
        <T x={592} y={530} size={32} fill={GREEN} weight={800} anchor="start">
          = 4,500
        </T>
      </Fade>
      <Draw
        on={aOn && beat >= 2}
        delay={dl(2, 1.3)}
        d={roundRectD(300, 486, 440, 84, 14)}
        stroke={GREEN}
        sw={2.4}
        dur={0.8}
      />
      <Draw
        on={aOn && beat >= 2}
        delay={dl(2, 2.0)}
        d={checkD(769, 520, 18)}
        stroke={GREEN}
        sw={3}
        dur={0.5}
      />

      {/* ===================== Example 4 (beats 3-6) ===================== */}
      <Fade on={subheadBOn} delay={dl(3, 0.3)}>
        <T x={540} y={130} size={22} fill={INK} weight={700}>
          {t(
            "Example 4 (JEE Adv): 5-digit numbers with at least one 9",
            "Example 4 (JEE Adv): 5-digit numbers with at least one 9"
          )}
        </T>
      </Fade>
      <Draw
        on={subheadBOn}
        delay={dl(3, 0.7)}
        d={`M260 152 L820 152`}
        stroke={AMBER}
        sw={2}
        dur={0.6}
      />

      {/* beat 4 — guardrail: "at least one" -> count the complement */}
      <Draw
        on={guardOn}
        delay={dl(4, 0.3)}
        d={`M140 177 L124 207 L156 207 Z M140 185 L140 196`}
        stroke={RED}
        sw={2.2}
        dur={0.5}
      />
      <Fade on={guardOn} delay={dl(4, 0.9)}>
        <Circle cx={140} cy={203} r={1.8} fill={RED} />
      </Fade>
      <Fade on={guardOn} delay={dl(4, 1.1)}>
        <Chip x={180} y={172} w={720} h={40} fill={CREAM} stroke={RED} textFill={RED} size={16}>
          {t(
            "\"At least one\" → count the complement.",
            "\"Kam se kam ek\" → complement gino."
          )}
        </Chip>
      </Fade>

      {/* beat 5 — the universe diagram: outer box, then the amber sub-box
          nested inside it, then the callout for the remaining region */}
      <Fade on={diagramOn} delay={dl(5, 0)}>
        <T x={530} y={236} size={16} fill={INK} weight={700}>
          {t("the universe: all 5-digit numbers", "universe: saare 5-digit numbers")}
        </T>
      </Fade>
      <Draw
        on={diagramOn}
        delay={dl(5, 0.6)}
        d={roundRectD(150, 254, 760, 186, 14)}
        stroke={INK}
        sw={2.4}
        dur={1.0}
      />
      <Fade on={diagramOn} delay={dl(5, 1.8)}>
        <T x={685} y={352} size={26} fill={INK} weight={800}>
          9 × 10⁴ = 90,000
        </T>
      </Fade>
      <Draw
        on={diagramOn}
        delay={dl(5, 2.6)}
        d={roundRectD(180, 280, 280, 130, 12)}
        stroke={AMBER}
        sw={2.2}
        dur={0.8}
      />
      <Fade on={diagramOn} delay={dl(5, 3.6)}>
        <T x={320} y={308} size={14} fill={MUTED}>
          {t("no 9 at all", "koi bhi 9 nahi")}
        </T>
      </Fade>
      <Fade on={diagramOn} delay={dl(5, 4.0)}>
        <T x={320} y={352} size={22} fill={AMBER_DARK} weight={800}>
          8 × 9⁴ = 52,488
        </T>
      </Fade>
      <Fade on={diagramOn} delay={dl(5, 4.6)}>
        <T x={685} y={424} size={14} fill={RED}>
          {t(
            "the rest → has at least one 9",
            "baaki sab → jisme kam se kam ek 9 hai"
          )}
        </T>
      </Fade>

      {/* beat 6 — bracket connects the diagram to the final subtraction;
          operand colors echo the diagram (ink=whole, amber=complement) */}
      <Draw
        on={finalOn}
        delay={dl(6, 0.2)}
        d={`M250 440 L250 448 M810 440 L810 448 M250 448 L810 448 ${arrowD(
          530,
          448,
          530,
          482
        )}`}
        stroke={INK}
        sw={2}
        dur={0.6}
      />
      <Fade on={finalOn} delay={dl(6, 0.9)}>
        <T x={355} y={530} size={32} fill={INK} weight={800} anchor="start">
          90,000 −
        </T>
      </Fade>
      <Fade on={finalOn} delay={dl(6, 1.3)}>
        <T x={491} y={530} size={32} fill={AMBER_DARK} weight={800} anchor="start">
          52,488
        </T>
      </Fade>
      <Draw
        on={finalOn}
        delay={dl(6, 1.8)}
        d={roundRectD(485, 499, 108, 47, 8)}
        stroke={AMBER}
        sw={2}
        dur={0.5}
      />
      <Fade on={finalOn} delay={dl(6, 2.3)}>
        <T x={597} y={530} size={32} fill={GREEN} weight={800} anchor="start">
          = 37,512
        </T>
      </Fade>
      <Draw
        on={finalOn}
        delay={dl(6, 2.9)}
        d={roundRectD(325, 485, 430, 85, 14)}
        stroke={GREEN}
        sw={2.4}
        dur={0.8}
      />
      <Draw
        on={finalOn}
        delay={dl(6, 3.6)}
        d={checkD(775, 520, 18)}
        stroke={GREEN}
        sw={3}
        dur={0.5}
      />
    </Scene>
  );
}
