/**
 * M11 Ch09 · Section 46 — "Which bisector is which?"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept, subtopic "Angle Bisectors of Two Lines" — FLAGGED FOR EXTRA EYE
 * SCRUTINY per task brief (same tier as a literal "Proof:" section, even though the title
 * doesn't start with "Proof:") because it states a general sign-rule whose direction is easy
 * to get backwards. Fetched straight from Supabase `lesson_sections` (chapter
 * 5edf4eb2-af54-5da2-b8fa-bfbb3270e702, position 46) rather than the coarse JSON outline (that
 * file only has 10 sections for this chapter, per SCENE_AUTHORING_MATHS.md's data-source
 * warning) — confirmed against the live row, 8 board_content items, reveal_at 0..56 (step 8s).
 *
 * *** VERIFICATION — sign-logic rule double-checked against the fetched JSON row verbatim ***
 * Rule rendered here: a₁a₂ + b₁b₂ > 0 ⟹ '+' is the OBTUSE bisector;
 *                      a₁a₂ + b₁b₂ < 0 ⟹ '+' is the ACUTE bisector.
 * This is byte-for-byte what board_content seq6/seq7 (beats 5/6 below) say — confirmed by
 * re-reading the raw JSON text fields, not by memory of the general theorem. Independently
 * cross-checked against sibling section 47 "Angle bisectors — formula toolkit" (same chapter,
 * same subtopic, not yet authored but already in Supabase), whose seq5 states the identical
 * rule in one line: "a1 a2 + b1 b2 > 0 ⇒ '+' obtuse; < 0 ⇒ '+' acute" — same direction, no
 * contradiction across the two sections. Also matches the standard NCERT Class 11 result
 * (origin lies in the obtuse angle when a1a2+b1b2>0, acute when <0, once c1,c2>0). Beat 2's
 * "'+' sign = origin's bisector" claim (seq3: "the + sign gives the bisector of the angle
 * containing the origin") is geometrically the standard result too: with c1,c2>0 the origin
 * satisfies both a_ix+b_iy+c_i = c_i > 0, so substituting the origin into the '+' equation
 * gives c1/√(..) = +c2/√(..), a consistent (same-sign) statement, i.e. the origin lies ON the
 * '+' bisector — rendered as-is below, not flipped to '-'. Beat 8's "m1m2 = -1 always" (seq8)
 * is the standard fact that the two angle bisectors of any two lines are always mutually
 * perpendicular (they bisect the two pairs of vertical angles) — rendered as a plain fact, no
 * sign inversion. No swap of acute/obtuse, no sign flip anywhere below.
 *
 * board_content (Supabase, verbatim minus LaTeX->board translation):
 *  seq1 (heading, reveal_at 0)  "Which Bisector Is Which?"                    -> always-on title
 *  seq2 (text,   reveal_at 8)   "Step 1: rewrite both lines so the constants
 *                                 are positive, c1, c2 > 0."                  -> beat 1
 *  seq3 (text,   reveal_at 16)  "Step 2: the + sign gives the bisector of
 *                                 the angle containing the origin."           -> beat 2
 *  seq4 (note,red-margin,HIGH, reveal_at 24) "Why positive constants? They
 *                                 pin the origin to the 'positive' side of
 *                                 both lines."                                -> beat 3 (guardrail 1)
 *  seq5 (text,   reveal_at 32)  "Step 3: to label acute versus obtuse,
 *                                 compute a1a2+b1b2 with the positive forms." -> beat 4
 *  seq6 (formula,reveal_at 40)  "a1a2+b1b2 > 0 => '+' is the obtuse bisector" -> beat 5
 *  seq7 (formula,reveal_at 48)  "a1a2+b1b2 < 0 => '+' is the acute bisector"  -> beat 6
 *  seq8 (note,red-margin,HIGH, reveal_at 56) "The two bisectors always
 *                                 satisfy m1m2 = -1 - verify at the end."     -> beat 7 (guardrail 2)
 * reveals_english (8 values) = [0.0, 7.0, 18.43, 27.22, 44.54, 54.87, 60.42, 65.79]
 * reveals_hinglish (8 values) = [0.0, 7.34, 18.86, 26.62, 42.15, 52.82, 57.6, 62.46]
 *
 * STRUCTURE (per task brief): a numbered 3-step procedure (Steps 1-3 = beats 1,2,4 — non-
 * adjacent because guardrail 1 sits between Step 2 and Step 3, which is fine, the checklist
 * strip below just has fixed slots that fill in as their beat arrives) bookended by two
 * red-margin guardrails, with a clean two-branch fork for the acute/obtuse formulas (beats 5,6)
 * in between the guardrails. Beats 5/6 are JSON emphasis "normal" (not "high"), but per the
 * task's explicit ask for a boxed two-branch fork on this section's highest-stakes beat, both
 * are rendered as bordered boxes anyway (clarity over strict emphasis->Chip mapping) — color-
 * coded so the sign condition and its bisector-type conclusion read unambiguously at a glance:
 * left box (appears beat5, ">0") = GREEN border/conclusion = OBTUSE; right box (appears beat6,
 * "<0") = AMBER_DARK border/conclusion = ACUTE. Matches Sec16's precedent of coloring two
 * parallel branch outcomes differently (its Case+1 was GREEN, Case-1 was AMBER_DARK).
 *
 * TWO GUARDRAILS, VISUALLY DISTINCT (per Sec30's "two simultaneous red-margin guardrails"
 * precedent — position/size, not color, since both must stay the same house RED): guardrail 1
 * (beat3) is the MID-FLOW aside, tucked directly under the steps strip (bar y214-270, text
 * size14) with the fork boxes and guardrail 2 still to come below it. Guardrail 2 (beat7) is
 * the CLOSING capstone, alone at the foot of the board in the verdict band (bar y460-516, text
 * size15 — one size step bigger, echoing the "final takeaway" emphasis seen in Sec1/Sec38's
 * closing guardrails), with 60px of clear space above it and nothing below. Different position
 * in the row order (interruption vs. capstone), different bar y-span, different text size —
 * unmistakable apart even with both on screen simultaneously (true from beat 7 onward).
 *
 * NOTATION: minus sign is a plain hyphen throughout (m₁m₂ = -1). ⇒ used for "gives"/"implies"
 * (operators list, SCENE_AUTHORING_MATHS.md — confirmed already rendering correctly all over
 * this chapter: Sec10, Sec12, Sec13, Sec16, Sec28, Sec30, Sec38 all use ⇒ freely, no fallback/
 * tofu issue). Subscript digits a₁ a₂ b₁ b₂ c₁ c₂ m₁ m₂ as real Unicode subscripts in non-script
 * (Anek) <T> text per the font-audit rule (Kalam is missing most subscript digits) — same
 * convention as Sec12/Sec14/Sec17/Sec35/Sec38. The two fork-box formulas (beats 5/6) are
 * symbolic and byte-identical between languages (SCENE_AUTHORING_MATHS.md notation rule), so
 * they are NOT wrapped in t() — same as Sec30's shared formula chips.
 *
 * WIDTH CHECKS (0.50×size×chars, Anek non-script; over-estimate; longest-language rule):
 *  guardrail1 en L1 "Why positive constants? They pin the origin" 45ch@14 -> 315px, x450->765
 *  guardrail1 en L2 "to the 'positive' side of both lines."        38ch@14 -> 266px, x450->716
 *  guardrail1 hi L1 "Positive constants kyun? Origin ko"           35ch@14 -> 245px, x450->695
 *  guardrail1 hi L2 "dono lines ke 'positive' side pe pin karte
 *                     hain."                                       50ch@14 -> 350px, x450->800
 *  fork box1 line2   "⇒ '+' is the OBTUSE bisector"                29ch@16 -> 232px (box w340,
 *                                                                   centered, 54px pad/side)
 *  guardrail2 en L1  "The two bisectors always satisfy m₁m₂ = -1"  42ch@15 -> 315px, x450->765
 *  guardrail2 hi L2  "satisfy karte hain — end mein verify karo."  41ch@15 -> 307.5px,x450->757.5
 * All comfortably clear of the x1044 safe edge; widest is guardrail1 hi L2 at x800, 244px margin.
 *
 * Layout plan (Anek text box top=y-0.78×size bottom=y+0.31×size; Kalam title top=y-1.3×size
 * bottom=y+0.5×size; Chip/roundRectD box = [x,x+w]×[y,y+h] directly):
 *  title(always-on)  | T mid script22 RED         | x540 y64   box y35.4..75
 *  b1 Step1 badge    | Chip "1" w34 h34            | x193..227 y100..134
 *  b1 Step1 caption  | T mid13 x2 lines            | x210 y160/180
 *  b2 Step2 badge    | Chip "2" w34 h34            | x523..557 y100..134
 *  b2 Step2 caption  | T mid13 x2 lines            | x540 y160/180
 *  b3 guardrail1 bar | Draw RED sw4                | x434 y214..270
 *  b3 guardrail1 text| T start14 RED x2 lines      | x450 y236/260
 *  b4 Step3 badge    | Chip "3" w34 h34            | x853..887 y100..134
 *  b4 Step3 caption  | T mid13 x2 lines            | x870 y160/180
 *  b5 box1 (obtuse)  | Draw roundRectD GREEN       | x130..470 y300..400
 *  b5 box1 condition | T mid18 INK                 | x300 y330
 *  b5 box1 conclusion| T mid16 GREEN                | x300 y368
 *  b6 box2 (acute)   | Draw roundRectD AMBER_DARK  | x610..950 y300..400
 *  b6 box2 condition | T mid18 INK                 | x780 y330
 *  b6 box2 conclusion| T mid16 AMBER_DARK          | x780 y368
 *  b7 guardrail2 bar | Draw RED sw4                | x434 y460..516
 *  b7 guardrail2 text| T start15 RED x2 lines      | x450 y482/506
 * Vertical gaps (box-bottom -> next box-top): title->badges 25.0, captions->guardrail1-bar
 * 29.97, guardrail1-bar->fork-boxes 30.0, fork-boxes->guardrail2-bar 60.0 — all clear of the
 * 24px group-clearance floor, guardrail2 given extra room as the deliberate closing capstone.
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
  RED,
  GREEN,
  AMBER,
  AMBER_DARK,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD } from "./math-kit";

const SLOT_X = [210, 540, 870];
const BADGE_Y = 100;
const BADGE_H = 34;
const CAP_Y1 = 160;
const CAP_Y2 = 180;

export default function M11Ch09Sec46({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} anchor="middle" script>
          {t("Which Bisector Is Which?", "Kaunsa Bisector Kaunsa Hai?")}
        </T>
      </Fade>

      {/* beat 1 — Step 1: normalize constants positive */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <Chip x={SLOT_X[0] - 17} y={BADGE_Y} w={34} h={BADGE_H} fill={AMBER} stroke={INK} textFill={INK} size={16} script={false}>
          1
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={SLOT_X[0]} y={CAP_Y1} size={13} fill={INK} anchor="middle">
          {t("Rewrite so constants", "Constants positive banao:")}
        </T>
        <T x={SLOT_X[0]} y={CAP_Y2} size={13} fill={INK} anchor="middle">
          {t("are positive: c₁, c₂ > 0", "c₁, c₂ > 0")}
        </T>
      </Fade>

      {/* beat 2 — Step 2: '+' sign = origin's bisector */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <Chip x={SLOT_X[1] - 17} y={BADGE_Y} w={34} h={BADGE_H} fill={AMBER} stroke={INK} textFill={INK} size={16} script={false}>
          2
        </Chip>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.5)}>
        <T x={SLOT_X[1]} y={CAP_Y1} size={13} fill={INK} anchor="middle">
          {t("'+' sign gives the bisector", "'+' sign origin wale")}
        </T>
        <T x={SLOT_X[1]} y={CAP_Y2} size={13} fill={INK} anchor="middle">
          {t("of the origin's angle", "angle ka bisector deta hai")}
        </T>
      </Fade>

      {/* beat 3 — GUARDRAIL 1 (mid-flow aside, red-margin, high emphasis):
          why positive constants pin the origin to the '+' side of both lines. */}
      <Draw on={beat >= 3} delay={dl(3, 0)} d="M 434 214 L 434 270" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={450} y={236} size={14} fill={RED} anchor="start" weight={700}>
          {t("Why positive constants? They pin the origin", "Positive constants kyun? Origin ko")}
        </T>
        <T x={450} y={260} size={14} fill={RED} anchor="start" weight={700}>
          {t("to the 'positive' side of both lines.", "dono lines ke 'positive' side pe pin karte hain.")}
        </T>
      </Fade>

      {/* beat 4 — Step 3: compute a1a2 + b1b2 */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <Chip x={SLOT_X[2] - 17} y={BADGE_Y} w={34} h={BADGE_H} fill={AMBER} stroke={INK} textFill={INK} size={16} script={false}>
          3
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <T x={SLOT_X[2]} y={CAP_Y1} size={13} fill={INK} anchor="middle">
          {t("Compute a₁a₂ + b₁b₂", "a₁a₂ + b₁b₂ nikaalo")}
        </T>
        <T x={SLOT_X[2]} y={CAP_Y2} size={13} fill={INK} anchor="middle">
          {t("using the positive forms", "positive forms se")}
        </T>
      </Fade>

      {/* beat 5 — fork box 1 (LEFT, GREEN): sum > 0 -> '+' is the OBTUSE bisector */}
      <Draw on={beat >= 5} delay={dl(5, 0)} d={roundRectD(130, 300, 340, 100, 16)} stroke={GREEN} sw={2.2} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 0.7)}>
        <T x={300} y={330} size={18} fill={INK} anchor="middle" weight={700}>
          a₁a₂ + b₁b₂ &gt; 0
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        <T x={300} y={368} size={16} fill={GREEN} anchor="middle" weight={700}>
          ⇒ '+' is the OBTUSE bisector
        </T>
      </Fade>

      {/* beat 6 — fork box 2 (RIGHT, AMBER_DARK): sum < 0 -> '+' is the ACUTE bisector */}
      <Draw on={beat >= 6} delay={dl(6, 0)} d={roundRectD(610, 300, 340, 100, 16)} stroke={AMBER_DARK} sw={2.2} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 0.7)}>
        <T x={780} y={330} size={18} fill={INK} anchor="middle" weight={700}>
          a₁a₂ + b₁b₂ &lt; 0
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.2)}>
        <T x={780} y={368} size={16} fill={AMBER_DARK} anchor="middle" weight={700}>
          ⇒ '+' is the ACUTE bisector
        </T>
      </Fade>

      {/* beat 7 — GUARDRAIL 2 (closing capstone, red-margin, high emphasis):
          the two bisectors are always perpendicular — a free final check. */}
      <Draw on={beat >= 7} delay={dl(7, 0)} d="M 434 460 L 434 516" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={450} y={482} size={15} fill={RED} anchor="start" weight={700}>
          {t("The two bisectors always satisfy m₁m₂ = -1", "Dono bisectors hamesha m₁m₂ = -1")}
        </T>
        <T x={450} y={506} size={15} fill={RED} anchor="start" weight={700}>
          {t("— verify at the end.", "satisfy karte hain — end mein verify karo.")}
        </T>
      </Fade>
    </Scene>
  );
}
