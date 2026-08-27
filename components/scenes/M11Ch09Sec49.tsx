/**
 * M11 Ch09 · Section 49 — "Worked example: identifying the acute bisector"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples — single flowing derivation (no side-by-side examples), same
 * shape as the Sec33 precedent (M11Ch09Sec33.tsx). Pure algebra — the JSON carries no
 * diagram/svg beat, and unlike Sec14/Sec23 (which plot the given points because the problem
 * IS a pair of labeled points) there is no natural point to plot here before the algebra
 * starts — the "object" being built beat by beat is the ratio equation itself. A supplementary
 * two-lines-and-a-bisector-ray diagram was considered (per the task's "your call") but
 * DECLINED: it would cost real screen budget and staging risk (two back-to-back red-margin
 * guardrails already need to read as visually distinct) for a picture whose only payoff is
 * "yes, this ray really does look like it bisects the acute angle" — the task brief's own
 * priority call ("a clean formula derivation is the priority here") and Sec30's precedent
 * (section_type formulas, zero diagram, pure text/Chip column) both point the same way. Kept
 * as pure text/formula, matching Sec30's no-diagram discipline.
 *
 * VERIFICATION (independently re-derived, matches the task's numbers exactly):
 *  Given: x + y - 2 = 0  (c = -2, negative)  and  7x - y + 3 = 0  (c = +3, already positive).
 *  Step 1 — normalize: multiply the first line by -1 so its constant is positive too:
 *    -x - y + 2 = 0   (c = +2 now).
 *  Step 2 — sign test with BOTH constants positive: a1 = -1, b1 = -1 (line 1); a2 = 7, b2 = -1
 *    (line 2, unchanged — its constant was already positive).
 *    a1a2 + b1b2 = (-1)(7) + (-1)(-1) = -7 + 1 = -6 < 0.  ✓ matches task JSON.
 *  Step 3 — rule: constants positive AND a1a2+b1b2 < 0  ⇒  the '+' sign between the two
 *    normalized forms gives the ACUTE bisector (the '-' sign would give the obtuse one).
 *  Step 4 — write the '+' bisector: roots are √(a1²+b1²) = √((-1)²+(-1)²) = √2, and
 *    √(a2²+b2²) = √(7²+(-1)²) = √50 = 5√2. So:
 *      (-x - y + 2)/√2 = +(7x - y + 3)/√50.
 *  Step 5 — clear denominators (multiply both sides by 5√2 = √50):
 *      5(-x - y + 2) = 7x - y + 3
 *      -5x - 5y + 10 = 7x - y + 3
 *      0 = 12x + 4y - 7
 *      12x + 4y - 7 = 0.  ✓ matches task JSON exactly.
 *  Sanity cross-check: the acute bisector must pass through the two lines' intersection.
 *    Intersection of x+y-2=0 and 7x-y+3=0: add the two equations -> 8x+1=0 -> x=-1/8,
 *    y=2-x=17/8. Check on 12x+4y-7=0: 12(-1/8)+4(17/8)-7 = -3/2+17/2-7 = 7-7 = 0 ✓.
 *
 * board_content has 8 items (reveal_at 0..7 map 1:1 to the `reveals` prop, same convention as
 * Sec1/Sec14/Sec23/Sec30/Sec33): item[0] (t=0, heading) -> always-on title; items[1..7] gate at
 * beat>=1..beat>=7. reveals_english = [0.0, 6.83, 16.38, 28.5, 45.82, 54.19, 70.31, 84.48].
 * reveals_hinglish = [0.0, 6.31, 15.79, 26.54, 39.77, 47.53, 59.65, 72.62].
 *
 * Beats:
 *  0 (title, always-on) | "Worked: Identifying the Acute Bisector"
 *  1 | problem statement: the two given lines, find the acute-angle bisector
 *  2 | GUARDRAIL #1 (HIGH, red-margin, single line — "make constants positive")
 *  3 | formula: a1a2+b1b2 = (-1)(7)+(-1)(-1) = -6 < 0
 *  4 | text: positive constants + a1a2+b1b2<0 => '+' sign is the acute bisector
 *  5 | formula: the '+' ratio equation with √2 / √50
 *  6 | formula LANDED (HIGH, boxed, GREEN): 12x + 4y - 7 = 0
 *  7 | GUARDRAIL #2 (HIGH, red-margin, two lines, closing — "normalize first, then read the rule")
 *
 * TWO-GUARDRAIL VISUAL DISTINCTION (per Sec30's mid-list-vs-closing precedent — Sec47, the
 * other cited precedent, is still an unauthored placeholder, so Sec30 is the operative model):
 * guardrail #1 sits in the STORY/SETUP band (y90-260, right after the problem statement, before
 * any arithmetic has happened) and is a SINGLE unbroken line ("read this before you touch the
 * formula"). Guardrail #2 sits in the VERDICT band (y480-596), alone below the landed green
 * chip, and is a TWO-line note (clause split), matching every other closing guardrail in this
 * chapter (Sec1/Sec14/Sec30). Different band, different line-count, ~350px of vertical
 * separation with the entire derivation between them — not adjacent, not the same shape, not
 * mistakable for a repeated note, even though both are red-bar-plus-text and both are HIGH.
 *
 * NOTATION: minus sign plain hyphen throughout (matches "CHAPTER-WIDE NOTATION" instruction and
 * the Ch3 known-bug guidance to never use a real em/en dash). Subscripts a1,a2,b1,b2 rendered as
 * real Unicode subscript digits (a₁a₂ + b₁b₂) in non-script Anek text, same convention as
 * Sec14's m₁/m₂ and Sec30's x₁/y₁/C₁/C₂ (font-audit: Kalam is missing subscript digits, Anek
 * has full coverage — T here always uses script=false, the default). √ is native to both board
 * fonts (confirmed no-fallback glyph per SCENE_AUTHORING_MATHS.md), used freely in √2/√50 with
 * no drawn-radical substitute needed. \frac{a}{b} in beats 5's ratio equation is NOT flattened
 * to a single fraction — the equation genuinely has two side-by-side ratios joined by "=", which
 * IS the symmetric-bisector-formula's actual structure (same reasoning Sec30 used to keep its
 * own symmetric-form line as two clauses rather than one division). Formulas (beats 3, 5, 6) are
 * byte-identical between languages per the base convention; only prose (title, beat1, beat4, both
 * guardrails) is translated.
 *
 * WIDTH ESTIMATES (0.50×size×chars, Anek non-script; longer-language / over-estimate wins):
 *   title        EN "Worked: Identifying the Acute Bisector" 38ch @22 script(0.55) -> 460.9px
 *   b1 statement EN 68ch @15 -> 510px   HI 71ch @15 -> 532.5px (wider; used for clearance)
 *   b2 guardrail EN 61ch @15 -> 457.5px (start-anchor from x450 -> right edge 907.5, safe)
 *   b3 formula   41ch @17 -> 348.5px (byte-identical both languages)
 *   b4 text      EN 80ch @15 -> 600px  HI 80ch @15 -> 600px (equal; both safe, range 240-840)
 *   b5 formula   35ch @17 -> 297.5px (byte-identical) — eye-checked for the √2/√50 fraction
 *   b6 chip text "12x + 4y - 7 = 0" 17ch @19 -> 161.5px; chip w=240 (>= textWidth+26)
 *   b7 guardrail line1 EN 26ch/HI 31ch @15 -> <=232.5px; line2 EN 48ch/HI 54ch @15 -> <=405px
 *      (start-anchor from x450 -> widest right edge 855, safe)
 * All rows single-line, all centered (except both guardrails, start-anchor per house convention)
 * — no wrapping, no 2-column split needed for a single flowing derivation.
 *
 * Layout plan (Anek text box top=y-0.78×size, bottom=y+0.31×size; Kalam title top=y-1.3×size,
 * bottom=y+0.5×size; Chip box = [x,x+w]×[y,y+h] directly):
 *  title(always-on) | T mid script22 red      | x540 y64   box y35.4..75.0
 *  b1 statement      | T mid15 ink              | x540 y104  box y92.3..108.65
 *  b2 GUARDRAIL(HIGH)| Draw bar x434 y134..166 (single line)
 *                    | T start15 red weight700   | x450 y154  box y142.3..158.65
 *  b3 formula        | T mid17 ink weight700     | x540 y280  box y266.74..285.27
 *  b4 text           | T mid15 ink               | x540 y330  box y318.3..334.65
 *  b5 formula        | T mid17 ink weight700     | x540 y380  box y366.74..385.27
 *  b6 LANDED(HIGH)   | Chip cream/green size19    | x420 y420 w240 h48  box x420..660 y420..468
 *  b7 GUARDRAIL(HIGH)| Draw bar x434 y506..566 (two lines, closing)
 *                    | T start15 red weight700 x2 | x450 y528 / y552  boxes y516.3..532.65 / y540.3..556.65
 * Vertical gaps (box-bottom -> next box-top): title->b1 17.3, b1->bar1 25.35, bar1/text1->b3
 *   ~95-100 (deliberate setup->demo band jump), b3->b4 33.03, b4->b5 32.09, b5->chip 34.73,
 *   chip->bar2 38.0. All group-to-group gaps clear the >=24px floor; the two guardrails
 *   themselves are ~350px apart vertically (bar1 top 134 to bar2 top 506).
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  INK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch09Sec49({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} anchor="middle" script>
          {t("Worked: Identifying the Acute Bisector", "Worked: Acute Bisector Pehchanna")}
        </T>
      </Fade>

      {/* beat 1 — problem statement */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={104} size={15} fill={INK} anchor="middle">
          {t(
            "For x + y - 2 = 0 and 7x - y + 3 = 0, find the acute-angle bisector.",
            "x + y - 2 = 0 aur 7x - y + 3 = 0 ke liye, acute-angle bisector nikaalo."
          )}
        </T>
      </Fade>

      {/* beat 2 — GUARDRAIL #1 (HIGH, single line, opens the derivation) */}
      <Draw on={beat >= 2} delay={dl(2, 0)} d="M 434 134 L 434 166" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={450} y={154} size={15} fill={RED} anchor="start" weight={700}>
          {t(
            "Make constants positive: rewrite the first as -x - y + 2 = 0.",
            "Constants positive banao: pehli line -x - y + 2 = 0 likho."
          )}
        </T>
      </Fade>

      {/* beat 3 — sign-test formula */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={540} y={280} size={17} fill={INK} anchor="middle" weight={700}>
          a₁a₂ + b₁b₂ = (-1)(7) + (-1)(-1) = -6 &lt; 0
        </T>
      </Fade>

      {/* beat 4 — rule statement */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={540} y={330} size={15} fill={INK} anchor="middle">
          {t(
            "With positive constants and a₁a₂ + b₁b₂ < 0, the '+' sign is the acute bisector.",
            "Positive constants aur a₁a₂ + b₁b₂ < 0 ke saath, '+' sign hi acute bisector hai."
          )}
        </T>
      </Fade>

      {/* beat 5 — the '+' ratio equation */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={540} y={380} size={17} fill={INK} anchor="middle" weight={700}>
          (-x - y + 2)/√2 = +(7x - y + 3)/√50
        </T>
      </Fade>

      {/* beat 6 — LANDED result (HIGH, boxed, green) */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <Chip x={420} y={420} w={240} h={48} fill={CREAM} stroke={GREEN} textFill={GREEN} size={19} script={false}>
          12x + 4y - 7 = 0
        </Chip>
      </Fade>

      {/* beat 7 — GUARDRAIL #2 (HIGH, two lines, closing) */}
      <Draw on={beat >= 7} delay={dl(7, 0)} d="M 434 506 L 434 566" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={450} y={528} size={15} fill={RED} anchor="start" weight={700}>
          {t("Normalize constants first,", "Pehle constants normalize karo,")}
        </T>
        <T x={450} y={552} size={15} fill={RED} anchor="start" weight={700}>
          {t("then read the acute/obtuse rule - order matters.", "phir acute/obtuse rule padho - order matter karta hai.")}
        </T>
      </Fade>
    </Scene>
  );
}
