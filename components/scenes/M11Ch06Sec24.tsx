/**
 * M11 Ch06 · Section 24 — "Clean selection, and permutation vs combination"
 * SIXTH section of Subtopic 3 "Combinations". Canvas 1080×620 · safe
 * x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * TWO worked examples, erase-transition between them (Sec16/17/19 pattern).
 * Example 1 is a clean, single-question combination: choosing a 4-person
 * sub-committee from 11 (no roles) — a straightforward ¹¹C₄ = 330 landing.
 * Example 2 is the section's centerpiece — the SAME "6 people, choose 3"
 * setup answered TWO ways: an unordered TEAM (⁶C₃ = 20) vs 3 DISTINCT NAMED
 * POSTS (⁶P₃ = 120) — landed side by side, then the closing beat makes the
 * 20×3! = 120 relationship completely explicit: an arrow from the 20-box to
 * the 120-box carries a "× 3!" label, and the multiplication is spelled out
 * (20 × 3! = 20 × 6 = 120) before the guardrail names the principle. All
 * "¹¹C₄" / "⁶C₃" / "⁶P₃" are LITERAL numeric cases → real super/subscript
 * digits in non-script (Anek) text, per the notation rule.
 *
 * Beats (board_reveal_at_english [0,6.23,23.47,40.45,55.38,68.44],
 * hinglish [0,5.46,22.61,41.13,57.17,68.1]):
 *  0 Example 1 heading + underline flourish
 *  [group A: aOn = beat 0..2, erased at beat>=3]
 *  1 setup: sentence ("a selection; order irrelevant: ¹¹C₄") + a pool of 11
 *    dots draws, 4 of them (a contiguous cluster) render GREEN — the chosen
 *    sub-committee — then a rounded box is drawn around just those 4 to show
 *    them as one unordered group, then a caption names it
 *  2 (HIGH) work it out: a smaller "working" line shows the raw arithmetic
 *    (11×10×9×8)/(4×3×2×1) = 7920/24, THEN the short final answer
 *    "¹¹C₄ = 330" lands boxed green with a checkmark
 *  [group A erased at beat>=3]
 *  3 Example 2 heading + underline flourish (headOn, persists to end)
 *  [group B4: formulaOn = beat>=4, persists — needed again in beat 5]
 *  4 (HIGH) lead line ("same 6 people, choose 3 — two different questions")
 *    then TWO boxes draw one at a time, side by side (column guides
 *    x=300/780): LEFT green "TEAM" box lands ⁶C₃ = 20 with a caption "no
 *    named roles, just a group"; RIGHT amber "POSTS" box lands ⁶P₃ = 120
 *    with a caption "captain, vice-captain, secretary" — the same pool,
 *    two different questions, side by side for direct contrast
 *  [group B5: noteOn = beat>=5, persists — the closing red-margin note]
 *  5 THE CONNECTION: an arrow is drawn from the TEAM box straight across the
 *    gap to the POSTS box, carrying a "× 3!" label above its shaft — then
 *    the multiplication is spelled out explicitly, "20 × 3! = 20 × 6 = 120"
 *    (20 in green, 120 in amber, tying each number back to its box) — then
 *    a red guardrail chip states the principle: "posts are the teams with
 *    the orderings restored."
 *
 * Layout plan (boxes = estimated render boxes; longer language counts):
 *  always | title (script 24, red)                                | T mid  | x~200..880 y39..82
 *  [group A: aOn = beat 0..2]
 *  b0 | heading "Example 1 (CBSE): sub-committee..." (22,ink,w700)   | T mid | x~290..790 y113..137
 *  b0 | underline flourish (amber)                                    | Draw | x~310..770 y152
 *  b1 | sentence "A sub-committee is a selection..." (18,ink)          | T mid| x~150..930 y168..191 (hi longest)
 *  b1 | pool label "pool of 11 people" (14,muted)                       | T mid| x~477..603 y214..229
 *  b1 | 11 pool dots (r9, spacing45, centered540)                        | circ| x306..774 y261..279
 *  b1 | selection box (rounded, pad18 around 4 chosen dots)                | Draw| x423..612 y243..297
 *  b1 | caption "any order, same committee → ¹¹C₄" (15,amber-dk)            | T mid| x~397..683 y323..340
 *  b2 | working line "= (11×10×9×8)/(4×3×2×1) = 7920/24" (22,ink,w700)       | T mid| x~336..744 y428..452
 *  b2 | final "¹¹C₄ = "(ink) "330"(green) (32,w800, anchor start)             | T st | x447..633 y505..534
 *  b2 | hero box (green, rounded)                                            | Draw | x417..663 y486..570
 *  b2 | checkmark (green)                                                    | Draw | x674..691 y519..534
 *  [group A erased at beat>=3]
 *  [group EX2head: headOn = beat>=3, persists]
 *  b3 | heading "Example 2 (trap): 3 from 6..." (22,ink,w700)                | T mid | x~250..830 y113..137
 *  b3 | underline flourish (amber)                                          | Draw | x~270..810 y152
 *  [group B4: formulaOn = beat>=4, persists]
 *  b4 | lead "Same 6 people, choose 3..." (17,ink)                          | T mid | x~320..760 y164..188
 *  b4 | tags "TEAM"(green,x300) "POSTS"(amber-dk,x780) (14,w700)              | T mid | x~279..321 / 755..805 y204..219
 *  b4 | LEFT box (green, 230×78) at cx300                                    | Draw | x185..415 y232..310
 *  b4 | RIGHT box (amber-dk, 230×78) at cx780                                | Draw | x665..895 y232..310
 *  b4 | "⁶C₃ = 20" (28,green,w800) in LEFT box                                | T mid | x~245..355 y266..289
 *  b4 | "⁶P₃ = 120" (28,amber-dk,w800) in RIGHT box                           | T mid | x~715..845 y266..289
 *  b4 | LEFT caption "no named roles, just a group" (13,muted)                | T mid | x~197..403 y326..340
 *  b4 | RIGHT caption "captain, vice-captain, secretary" (13,muted)            | T mid | x~663..897 y326..340
 *  [group B5: noteOn = beat>=5, persists]
 *  b5 | arrow LEFT box → RIGHT box (amber-dk), y271                          | Draw | x423..660 y271
 *  b5 | "× 3!" label above arrow (20,amber-dk,w800)                          | T mid | x~511..569 y234..256
 *  b5 | "20"(green) " × 3! = 20 × 6 = "(ink) "120"(amber-dk) (26,w700/800)     | T st | x~373..707 y374..403
 *  b5 | guardrail chip (cream/red border, ~w583 h50)                          | Chip | x~248..832 y440..490
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
import { roundRectD, checkD, lineD } from "./math-kit";

export default function M11Ch06Sec24({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  // Example 1 (Group A, beats 0-2) is fully erased once Example 2's heading
  // fires (beat 3) — the two worked examples are independent problems, same
  // erase-transition pattern as Sec16/17/19. Example 2 itself splits into
  // the persisting heading (headOn), the persisting side-by-side landing
  // (formulaOn, needed again by the closing beat's arrow), and the
  // persisting closing note (noteOn). Each element's own `on` is bounded to
  // its beat window directly (never a wrapper div's opacity) so the
  // verifier's Fade-opacity visibility check — which walks up to the
  // nearest g.sc-fade, not an arbitrary ancestor — sees every erasure
  // correctly; seeking back into an earlier beat correctly restores it.
  const aOn = beat >= 0 && beat < 3;
  const headOn = beat >= 3;
  const formulaOn = beat >= 4;
  const noteOn = beat >= 5;

  // ---- Example 1 geometry: pool of 11, 4 chosen (contiguous, centered) ----
  const poolN = 11;
  const poolSpacing = 45;
  const poolR = 9;
  const poolStartX = 540 - ((poolN - 1) * poolSpacing) / 2; // 315
  const poolY = 270;
  const poolDots = Array.from({ length: poolN }, (_, i) => ({
    x: poolStartX + i * poolSpacing,
    y: poolY,
    selected: i >= 3 && i <= 6, // indices 3..6 -> centers 450,495,540,585
  }));
  const selBoxPad = 18;
  const selBoxX1 = poolStartX + 3 * poolSpacing - poolR - selBoxPad;
  const selBoxX2 = poolStartX + 6 * poolSpacing + poolR + selBoxPad;
  const selBoxY1 = poolY - poolR - selBoxPad;
  const selBoxY2 = poolY + poolR + selBoxPad;
  const selBoxD = roundRectD(
    selBoxX1,
    selBoxY1,
    selBoxX2 - selBoxX1,
    selBoxY2 - selBoxY1,
    14
  );

  // ---- Example 1 beat2: working line, then short boxed final ----
  const finalInk = "¹¹C₄ = ";
  const finalGreen = "330";
  const finalSize = 32;
  const finalMult = 0.58;
  const finalInkW = finalMult * finalSize * finalInk.length;
  const finalGreenW = finalMult * finalSize * finalGreen.length;
  const finalTotalW = finalInkW + finalGreenW;
  const finalX0 = 540 - finalTotalW / 2;
  const finalInkX = finalX0;
  const finalGreenX = finalX0 + finalInkW;
  const heroPad = 30;
  const heroX1 = finalX0 - heroPad;
  const heroX2 = finalX0 + finalTotalW + heroPad;
  const heroY = 486;
  const heroH = 84;

  // ---- Example 2 geometry: two boxes side by side, column guides 300/780 ----
  const boxW = 230;
  const boxH = 78;
  const boxY = 232;
  const leftCx = 300;
  const rightCx = 780;
  const leftBoxX = leftCx - boxW / 2; // 185
  const rightBoxX = rightCx - boxW / 2; // 665
  const boxCenterY = boxY + boxH / 2; // 271
  const formulaBaseline = boxCenterY + 0.24 * 28; // ≈277.7

  // ---- Example 2 beat5: the 20 x 3! = 120 line, segmented for two-tone ----
  const mulSegs = [
    { text: "20", fill: GREEN, weight: 800 },
    { text: " × 3! = 20 × 6 = ", fill: INK, weight: 700 },
    { text: "120", fill: AMBER_DARK, weight: 800 },
  ];
  const mulSize = 26;
  const mulMult = 0.56;
  const mulGap = 6;
  const mulWidths = mulSegs.map((s) => mulMult * mulSize * s.text.length);
  const mulTotalW =
    mulWidths.reduce((a, b) => a + b, 0) + (mulSegs.length - 1) * mulGap;
  let mulCursor = 540 - mulTotalW / 2;
  const mulXs = mulWidths.map((w) => {
    const x = mulCursor;
    mulCursor += w + mulGap;
    return x;
  });
  const mulY = 395;

  // ---- Example 2 beat5: closing guardrail chip ----
  const chipText = t(
    "120 = 20 × 3! — posts are the teams with the orderings restored.",
    "120 = 20 × 3! — posts wahi teams hain, bas order wapas aa gaya."
  );
  const chipSize = 15.5;
  const chipW = Math.max(400, 0.5 * chipSize * chipText.length + 56);
  const chipX = 540 - chipW / 2;
  const chipY = 440;
  const chipH = 50;

  return (
    <Scene>
      {/* title always-on */}
      <Fade on={true}>
        <T x={540} y={70} size={24} fill={RED} script>
          {t(
            "Clean selection, and permutation vs combination",
            "Clean selection, aur permutation vs combination"
          )}
        </T>
      </Fade>

      {/* ===================== Example 1 (beats 0-2) ===================== */}
      <Fade on={aOn && beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={130} size={22} fill={INK} weight={700}>
          {t(
            "Example 1 (CBSE): sub-committee of 4 from 11",
            "Example 1 (CBSE): sub-committee of 4 from 11"
          )}
        </T>
      </Fade>
      <Draw
        on={aOn && beat >= 0}
        delay={dl(0, 0.7)}
        d={lineD(310, 152, 770, 152)}
        stroke={AMBER}
        sw={2}
        dur={0.6}
      />

      {/* beat 1 — setup: pool of 11, 4 chosen (green), boxed as one group */}
      <Fade on={aOn && beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={185} size={18} fill={INK}>
          {t(
            "A sub-committee is a selection; order of the four names is irrelevant: ¹¹C₄.",
            "Sub-committee ek selection hai; char naamon ka order irrelevant hai: ¹¹C₄."
          )}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 0.6)}>
        <T x={540} y={225} size={14} fill={MUTED}>
          {t("pool of 11 people", "11 logon ka pool")}
        </T>
      </Fade>
      {poolDots.map((d, i) => (
        <Fade key={i} on={aOn && beat >= 1} delay={dl(1, 1.0 + i * 0.09)}>
          <Circle
            cx={d.x}
            cy={d.y}
            r={poolR}
            fill={d.selected ? GREEN : CREAM}
            stroke={d.selected ? GREEN : INK}
            strokeWidth={1.8}
          />
        </Fade>
      ))}
      <Draw
        on={aOn && beat >= 1}
        delay={dl(1, 2.4)}
        d={selBoxD}
        stroke={GREEN}
        sw={2.2}
        dur={0.8}
      />
      <Fade on={aOn && beat >= 1} delay={dl(1, 3.5)}>
        <T x={540} y={335} size={15} fill={AMBER_DARK}>
          {t(
            "any order, same committee → ¹¹C₄",
            "koi bhi order, wahi committee → ¹¹C₄"
          )}
        </T>
      </Fade>

      {/* beat 2 — work it out, then the short boxed final answer */}
      <Fade on={aOn && beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={445} size={22} fill={INK} weight={700}>
          = (11×10×9×8)/(4×3×2×1) = 7920/24
        </T>
      </Fade>
      <Fade on={aOn && beat >= 2} delay={dl(2, 1.8)}>
        <T x={finalInkX} y={530} size={finalSize} fill={INK} weight={800} anchor="start">
          {finalInk}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 2} delay={dl(2, 1.8)}>
        <T x={finalGreenX} y={530} size={finalSize} fill={GREEN} weight={800} anchor="start">
          {finalGreen}
        </T>
      </Fade>
      <Draw
        on={aOn && beat >= 2}
        delay={dl(2, 2.6)}
        d={roundRectD(heroX1, heroY, heroX2 - heroX1, heroH, 14)}
        stroke={GREEN}
        sw={2.4}
        dur={0.9}
      />
      <Draw
        on={aOn && beat >= 2}
        delay={dl(2, 3.6)}
        d={checkD(heroX2 + 20, 528, 18)}
        stroke={GREEN}
        sw={3}
        dur={0.5}
      />

      {/* ===================== Example 2 (beats 3-5) ===================== */}
      <Fade on={headOn} delay={dl(3, 0.3)}>
        <T x={540} y={130} size={22} fill={INK} weight={700}>
          {t(
            "Example 2 (trap): 3 from 6 — team vs distinct posts",
            "Example 2 (trap): 3 from 6 — team vs distinct posts"
          )}
        </T>
      </Fade>
      <Draw
        on={headOn}
        delay={dl(3, 0.7)}
        d={lineD(270, 152, 810, 152)}
        stroke={AMBER}
        sw={2}
        dur={0.6}
      />

      {/* beat 4 — TEAM (⁶C₃=20) vs POSTS (⁶P₃=120), landed side by side */}
      <Fade on={formulaOn} delay={dl(4, 0)}>
        <T x={540} y={178} size={17} fill={INK}>
          {t(
            "Same 6 people, choose 3 — two different questions:",
            "Wahi 6 log, 3 chuno — do alag sawaal:"
          )}
        </T>
      </Fade>
      <Fade on={formulaOn} delay={dl(4, 0.8)}>
        <T x={leftCx} y={216} size={14} fill={GREEN} weight={700}>
          TEAM
        </T>
        <T x={rightCx} y={216} size={14} fill={AMBER_DARK} weight={700}>
          POSTS
        </T>
      </Fade>
      <Draw
        on={formulaOn}
        delay={dl(4, 1.5)}
        d={roundRectD(leftBoxX, boxY, boxW, boxH, 14)}
        stroke={GREEN}
        sw={2.2}
        dur={0.7}
      />
      <Draw
        on={formulaOn}
        delay={dl(4, 2.4)}
        d={roundRectD(rightBoxX, boxY, boxW, boxH, 14)}
        stroke={AMBER_DARK}
        sw={2.2}
        dur={0.7}
      />
      <Fade on={formulaOn} delay={dl(4, 3.3)}>
        <T x={leftCx} y={formulaBaseline} size={28} fill={GREEN} weight={800}>
          ⁶C₃ = 20
        </T>
      </Fade>
      <Fade on={formulaOn} delay={dl(4, 3.7)}>
        <T x={rightCx} y={formulaBaseline} size={28} fill={AMBER_DARK} weight={800}>
          ⁶P₃ = 120
        </T>
      </Fade>
      <Fade on={formulaOn} delay={dl(4, 4.3)}>
        <T x={leftCx} y={336} size={13} fill={MUTED}>
          {t("no named roles, just a group", "koi named role nahi, sirf group")}
        </T>
        <T x={rightCx} y={336} size={13} fill={MUTED}>
          {t(
            "captain, vice-captain, secretary",
            "captain, vice-captain, secretary"
          )}
        </T>
      </Fade>

      {/* beat 5 — THE CONNECTION: arrow + ×3! label + explicit multiplication + guardrail */}
      <Draw
        on={noteOn}
        delay={dl(5, 0.3)}
        d={arrowD(leftBoxX + boxW + 8, boxCenterY, rightBoxX - 5, boxCenterY)}
        stroke={AMBER_DARK}
        sw={2.4}
        dur={0.7}
      />
      <Fade on={noteOn} delay={dl(5, 1.1)}>
        <T x={540} y={250} size={20} fill={AMBER_DARK} weight={800}>
          × 3!
        </T>
      </Fade>
      {mulSegs.map((s, i) => (
        <Fade key={i} on={noteOn} delay={dl(5, 1.7 + i * 0.35)}>
          <T x={mulXs[i]} y={mulY} size={mulSize} fill={s.fill} weight={s.weight} anchor="start">
            {s.text}
          </T>
        </Fade>
      ))}
      <Fade on={noteOn} delay={dl(5, 3.1)}>
        <Chip
          x={chipX}
          y={chipY}
          w={chipW}
          h={chipH}
          fill={CREAM}
          stroke={RED}
          textFill={RED}
          size={chipSize}
          script={false}
        >
          {chipText}
        </Chip>
      </Fade>
    </Scene>
  );
}
