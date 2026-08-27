/**
 * M11 Ch09 · Section 22 — "Equations of a Line — Toolkit"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: formulas — the densest reference-toolkit recap in this chapter (9 board_content
 * items vs Sec5's 9 / Sec13's 8): every equation-of-a-line form taught across secs 18-21
 * (horizontal/vertical, point-slope, two-point, slope-intercept, intercept, normal, general)
 * plus the closing reduction-formulas note. Same "formula_recap / cheat_sheet" discipline as
 * this chapter's two finished sibling toolkit sections (M11Ch09Sec5, M11Ch09Sec13, the direct
 * layout precedent): one formula per beat, HIGH-emphasis items boxed as a Chip (CREAM fill /
 * AMBER stroke / AMBER_DARK text), normal-emphasis items as plain bold ink text, the closing
 * red-margin note as a Sec1/Sec5/Sec13-style red bar + red text. No live derivation, no
 * math-kit diagram — pure text/chip reference card, single centered column.
 *
 * board_content seq1 is the heading ("Equations of a Line — Toolkit") -> always-on title.
 * seq2..seq9 (8 items) gate at beat>=1..beat>=8 — one more beat than Sec13's 7-beat pattern,
 * matching Sec5's own 8-beat count. reveals_english (9 values) = [0, 7.08, 18.52, 27.82, 37.21,
 * 46.76, 56.32, 65.71, 74.5]; reveals_hinglish (9 values) = [0, 7.08, 15.87, 25.34, 33.02,
 * 41.13, 50.18, 58.97, 66.99].
 *
 * Emphasis from JSON: seq2 (horizontal/vertical) normal, seq3 (point-slope) HIGH, seq4
 * (two-point) normal, seq5 (slope-intercept) normal, seq6 (intercept) normal, seq7 (normal
 * form) normal, seq8 (general form) HIGH, seq9 (closing note: m/a/b from general form) HIGH +
 * red-margin. Two HIGH formulas (point-slope, general form) -> two Chips; four normal formulas
 * (horiz/vert, two-point, slope-intercept, intercept, normal form — five, not four, all plain
 * bold ink T; the sixth normal-vs-high split is 2 Chips + 5 plain-text rows) -> plain bold ink
 * T; the closing note -> red bar + red text (bar+2-line pattern, same as Sec13's guardrail).
 *
 * NOTATION: minus sign is a plain hyphen throughout (m = -A/B, not en/em dash). ω (omega, the
 * normal-form angle) falls back to a system font per the 3rd/7th glyph audits but is accepted
 * as-is (no plain-letter substitute for Greek). \frac{a}{b} / \tfrac{a}{b} flattened inline as
 * "a/b" (house convention, no stacked-fraction primitive exists) — applies to the two-point
 * slope's fraction AND all three of the closing note's mini-fractions (-A/B, -C/A, -C/B).
 * \quad conditions folded onto the same line: the normal-form's "p ≥ 0" condition goes in
 * parens after the equation ("... = p (p ≥ 0)"), mirroring Sec13's "(θ ≠ 90°)" convention,
 * rather than a literal comma+gap. \text{...} label prefixes ("Horizontal:", "Point-slope:",
 * "Two-point:", ...) kept in English for both languages — segments_hinglish itself
 * code-switches these exact English terms ("Horizontal line hai...", "Point-slope: ...",
 * "Two-point form vahi hai...", "Slope-intercept: ...", "Intercept form: ...", "Normal form:
 * ...", "general form: ..."). Numeral subscripts (x₁, x₂, y₁, y₂) rendered as real Unicode
 * subscript digits in non-script Anek text (script={false} everywhere here, matching Sec5's
 * precedent) per the font-audit rule that Kalam is missing most subscript/superscript digits.
 * Per SCENE_AUTHORING_MATHS.md a symbolic formula is byte-identical between languages, so every
 * formula/guardrail string below is shared by both t() branches — only the always-on title
 * differs by language.
 *
 * WIDTH ESTIMATES (0.50×size×chars, Anek non-script; over-estimate) — single centered column,
 * all comfortably inside the 1008px-wide safe span (x36-1044); the two lines flagged by the
 * task as widest (normal-form, closing note) budgeted first, below:
 *   b6 normal-form "Normal: x cosω + y sinω = p (p ≥ 0)"        35 ch @17 -> 297.5px
 *   b8 note line2  "m = -A/B     a = -C/A     b = -C/B"          34 ch @15 -> 255.0px  (anchor start)
 *   b1 horiz/vert  "Horizontal: y = b,    Vertical: x = a"       39 ch @16 -> 312.0px
 *   b2 point-slope "Point-slope: y - y₁ = m(x - x₁)"             31 ch @18 -> 279.0px  (chip w330)
 *   b3 two-point   "Two-point: y - y₁ = (y₂-y₁)/(x₂-x₁) (x-x₁)"  48 ch @16 -> 384.0px  (widest overall)
 *   b4 slope-int   "Slope-intercept: y = mx + c"                 27 ch @18 -> 243.0px
 *   b5 intercept   "Intercept: x/a + y/b = 1"                    24 ch @18 -> 216.0px
 *   b7 general     "General: Ax + By + C = 0"                    24 ch @18 -> 216.0px  (chip w270)
 *   b8 note line1  "From general form:"                          18 ch @15 -> 135.0px  (anchor start)
 * Widest is b3's two-point line at 384px — identical to Sec5's Internal-section formula, which
 * that section already proved fits (x348-732, 312px+ clear on both sides). Every other line is
 * narrower. Single centered column confirmed sufficient for all 9 rows — no 2-column split
 * needed, consistent with both sibling toolkit sections.
 *
 * Layout plan (all anchor=middle at x540 unless noted; Anek text box top=y-0.78×size,
 * bottom=y+0.31×size; Kalam title top=y-1.3×size, bottom=y+0.5×size; Chip box = [x,x+w]×[y,y+h]):
 *  title(always-on) | T mid script size22       | x540 y64    | box y35.4..75.0
 *  b1 normal        | T mid size16               | x540 y117.5 | box x388..692   y105.02..122.46
 *  b2 HIGH          | Chip size18 w330 h44        | x375..705 y152.5..196.5
 *  b3 normal        | T mid size16               | x540 y239   | box x348..732   y226.52..243.96
 *  b4 normal        | T mid size18               | x540 y288   | box x418.5..661.5 y273.96..293.58
 *  b5 normal        | T mid size18               | x540 y338   | box x432..648   y323.96..343.58
 *  b6 normal        | T mid size17               | x540 y387   | box x391.25..688.75 y373.74..392.27
 *  b7 HIGH          | Chip size18 w270 h44        | x405..675 y422.5..466.5
 *  b8 HIGH guardrail| Draw bar x434 y496.5..550.5 | red bar
 *                   | T start size15 line1        | x450 y518.5 box x450..585 y506.8..523.15
 *                   | T start size15 line2        | x450 y542.5 box x450..705 y530.8..547.15
 * Vertical gaps (box-bottom -> next box-top): title->b1 30.02, b1->b2 30.04, b2->b3 30.02,
 * b3->b4 30.0, b4->b5 30.38, b5->b6 29.76(text)/... , b6->b7 30.23, b7->bar 30.0 — all comfortably
 * >= the 24px group-clearance floor. Guardrail group bottom (bar) 550.5, leaving 45.5px of
 * unused margin above the y596 safe floor — same deliberate-margin discipline as Sec5 (55px)
 * and Sec13 (68px).
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
  AMBER,
  AMBER_DARK,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch09Sec22({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} anchor="middle" script>
          {t("Equations of a Line — Toolkit", "Equations of a Line — Poora Toolkit")}
        </T>
      </Fade>

      {/* beat 1 — horizontal / vertical (normal) */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={540} y={117.5} size={16} fill={INK} anchor="middle" weight={700}>
          Horizontal: y = b,    Vertical: x = a
        </T>
      </Fade>

      {/* beat 2 — point-slope (HIGH) */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <Chip x={375} y={152.5} w={330} h={44} fill={CREAM} stroke={AMBER} textFill={AMBER_DARK} size={18} script={false}>
          Point-slope: y - y₁ = m(x - x₁)
        </Chip>
      </Fade>

      {/* beat 3 — two-point (normal) */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={239} size={16} fill={INK} anchor="middle" weight={700}>
          Two-point: y - y₁ = (y₂ - y₁)/(x₂ - x₁) (x - x₁)
        </T>
      </Fade>

      {/* beat 4 — slope-intercept (normal) */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={288} size={18} fill={INK} anchor="middle" weight={700}>
          Slope-intercept: y = mx + c
        </T>
      </Fade>

      {/* beat 5 — intercept (normal) */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={338} size={18} fill={INK} anchor="middle" weight={700}>
          Intercept: x/a + y/b = 1
        </T>
      </Fade>

      {/* beat 6 — normal form (normal) */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={387} size={17} fill={INK} anchor="middle" weight={700}>
          Normal: x cosω + y sinω = p (p ≥ 0)
        </T>
      </Fade>

      {/* beat 7 — general form (HIGH) */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <Chip x={405} y={422.5} w={270} h={44} fill={CREAM} stroke={AMBER} textFill={AMBER_DARK} size={18} script={false}>
          General: Ax + By + C = 0
        </Chip>
      </Fade>

      {/* beat 8 — guardrail (HIGH, red-margin: reduction formulas from general form) */}
      <Draw on={beat >= 8} delay={dl(8, 0)} d="M 434 496.5 L 434 550.5" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 8} delay={dl(8, 0.6)}>
        <T x={450} y={518.5} size={15} fill={RED} anchor="start" weight={700}>
          {t("From general form:", "General form se:")}
        </T>
        <T x={450} y={542.5} size={15} fill={RED} anchor="start" weight={700}>
          m = -A/B     a = -C/A     b = -C/B
        </T>
      </Fade>
    </Scene>
  );
}
