/**
 * M11 Ch12 · Section 11 — "The standard-limit junction table"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: formulas — THE master reference card for every standard limit used from
 * here on (closes subtopic "Standard Limits", reused constantly in Sec12-14 worked examples).
 * Denser than Sec4 (six formula groups + a closing guardrail packed into the same 8 beats),
 * so this uses smaller fonts / a stacked-row grid instead of Sec4's 2-column card grid.
 *
 * board_reveal_at_english  = [0.0, 8.28, 18.86, 30.63, 48.13, 61.95, 74.92, 88.41] (8 beats 0-7).
 * board_reveal_at_hinglish = [0.0, 8.45, 17.58, 29.18, 43.18, 55.38, 68.95, 80.38].
 *
 * Layout: 7 stacked full-width rows (x60-1020, 960 wide), each its own roundRectD card,
 * y92 down to y574 (safe bottom 596). Two-column-per-row internal structure: a small
 * category TAG (size12, weight800, shared row baseline) fixed at x80, and the formula
 * content starting at a fixed x=215 column so every row's formula text lines up (real
 * table feel). Row border color = GREEN (HIGH emphasis: seq2/3/4/6) or AMBER_DARK
 * (normal: seq5/7), row 6 (seq6, the 1^∞ master rule) gets a thicker sw3.2 border + a
 * bigger bold font for the extra visual weight the brief asks for. Row 7 is the
 * full-width RED guardrail banner (seq8), reusing Sec2/Sec4/Sec9's boxed-red-rule motif.
 * inverse-trig uses "arcsin x"/"arctan x" (not sin⁻¹x) — sidesteps any doubt about the
 * superscript-minus glyph entirely, per the brief's own fallback option. Exponents with a
 * VARIABLE stay flattened caret-style (e^x, a^x — no superscript-letter glyph exists in
 * either font); the literal digit "²" is confirmed native to both fonts, used as a real
 * superscript for x², k². seq5/seq6 use the real <Limit> primitive (board_content's own
 * wording is literal "lim(...)"); seq2/3/4/7 use plain "→" arrow shorthand (board_content's
 * own wording), so no repeated "x→0" clutter — the closing seq8 banner is exactly that
 * blanket note, stated once at the end, which is why it's saved for last.
 *
 * Box-width arithmetic (Anek sans, width ≈ 0.50 × size × chars — over-estimated, see
 * SCENE_AUTHORING.md Step 3). Content column starts x=215, row box ends x=1020 (safe
 * x1044), so budget ≈ 785px per row before the safe margin. Longest per-row sum used:
 *  row1 (size17): "sin x/x → 1"(11ch=93.5) + "tan x/x → 1"(11ch=93.5) +
 *    "arcsin x/x → 1"(14ch=119) + "arctan x/x → 1"(14ch=119) = 425, +3×~56 gaps = 593 < 785.
 *  row2 (size17): "(1 − cos x)/x² → 1/2"(20ch=170) + "(1 − cos(kx))/x² → k²/2"(23ch=195.5)
 *    = 365.5, +60 gap = 425.5 < 785.
 *  row3 (size17): 15ch=127.5 + 18ch=153 + 15ch=127.5 = 408, +2×55 gaps = 518 < 785.
 *  row4 (Limit18/text17): lim-block(~45) + "(1+x)^(1/x)=e"(17ch=144.5) + lim-block(~45) +
 *    "(1+1/n)^n=e"(15ch=127.5), staggered start x215/x260/x460/x505, ends ~632.5 < 1000.
 *  row5 (size20 bold): "f → 1,  g → ∞  ⇒  lim [f]^g ="(~29ch=290) + chip(159, text
 *    "e^(lim g(f−1))" 14ch@19=133+26 pad) — ends ~684 < 1000.
 *  row6 (size17): "sin(kx)/x → k"(13ch=110.5) + "(e^(kx) − 1)/x → k"(17ch=144.5) = 255,
 *    +60 gap = 315 < 785.
 * All rows land far under budget — deliberately generous (not just gate-passing) so the
 * table doesn't read cramped at first render, per the brief's eyeball warning.
 *
 * Row heights (single content line per row, tag shares the row's content baseline —
 * baseline = rowTop + rowHeight/2 + ~4, sans optical-center rule y−0.24×size):
 *  row1 y92-148(h56, bl124)   row2 y162-218(h56, bl194)   row3 y232-288(h56, bl264)
 *  row4 y302-362(h60, bl336)  row5 y376-440(h64, bl413)   row6 y454-510(h56, bl486)
 *  row7 y524-574(h50, bl553, banner). 14px gap between every row (matches Sec4 card-gap
 *  precedent). Text-to-border clearance checked ≥10px, text-to-text ≥14px on every row
 *  (worst case: row4's Limit-condition subscript vs its own formula text, ~22.5px clear).
 *
 * Beats:
 *  0(title, always-on) | "The standard-limit junction table"
 *  1 | row1 seq2 (HIGH, green) — trig junctions: sin/tan/arcsin/arctan x/x → 1
 *  2 | row2 seq3 (HIGH, green) — half-angle: (1−cosx)/x²→1/2, (1−cos kx)/x²→k²/2
 *  3 | row3 seq4 (HIGH, green) — exp/log: (e^x−1)/x→1, (a^x−1)/x→ln a, ln(1+x)/x→1
 *  4 | row4 seq5 (normal, amber) — two definitions of e, real <Limit> both parts
 *  5 | row5 seq6 (HIGH + extra weight, green sw3.2, bold size20) — the 1^∞ master rule
 *  6 | row6 seq7 (normal, amber) — k-generalisation: sin(kx)/x→k, (e^(kx)−1)/x→k
 *  7 | row7 seq8 (RED banner, full width) — "every argument radians, tends to 0" guardrail
 *
 * Layout plan (x-range × y-range per element):
 *  b1 | row1 card roundRectD(60,92,960,56)         | Draw | x60..1020 y92..148
 *  b1 | tag "TRIG" (12,green_dark,w800,st)         | T st | x80..~104  bl124
 *  b1 | "sin x/x → 1" (17,ink,st)                  | T st | x215..308.5 bl124
 *  b1 | "tan x/x → 1" (17,ink,st)                  | T st | x365..458.5 bl124
 *  b1 | "arcsin x/x → 1" (17,ink,st)                | T st | x515..634  bl124
 *  b1 | "arctan x/x → 1" (17,ink,st)                | T st | x690..809  bl124
 *  b2 | row2 card roundRectD(60,162,960,56)         | Draw | x60..1020 y162..218
 *  b2 | tag "HALF-ANGLE" (12,green_dark,w800,st)    | T st | x80..~140  bl194
 *  b2 | "(1 − cos x)/x² → 1/2" (17,ink,st)          | T st | x215..385  bl194
 *  b2 | "(1 − cos(kx))/x² → k²/2" (17,ink,st)       | T st | x445..640.5 bl194
 *  b3 | row3 card roundRectD(60,232,960,56)         | Draw | x60..1020 y232..288
 *  b3 | tag "EXP / LOG" (12,green_dark,w800,st)     | T st | x80..~134  bl264
 *  b3 | "(e^x − 1)/x → 1" (17,ink,st)               | T st | x215..342.5 bl264
 *  b3 | "(a^x − 1)/x → ln a" (17,ink,st)             | T st | x397..550 bl264
 *  b3 | "ln(1 + x)/x → 1" (17,ink,st)                | T st | x605..732.5 bl264
 *  b4 | row4 card roundRectD(60,302,960,60) amber    | Draw | x60..1020 y302..362
 *  b4 | tag "DEFINE e" (12,amber_dark,w800,st)       | T st | x80..~128  bl336
 *  b4 | Limit x→0 (18,ink,st)                        | Limit| x215..~250 y336 (bl336+cond)
 *  b4 | "(1 + x)^(1/x) = e" (17,ink,st)               | T st | x260..404.5 bl336
 *  b4 | Limit n→∞ (18,ink,st)                         | Limit| x460..~495 y336 (bl336+cond)
 *  b4 | "(1 + 1/n)^n = e" (17,ink,st)                  | T st | x505..632.5 bl336
 *  b5 | row5 card roundRectD(60,376,960,64) green sw3.2| Draw | x60..1020 y376..440
 *  b5 | tag "MASTER RULE" (12,green_dark,w800,st)     | T st | x80..~146  bl413
 *  b5 | "f → 1,  g → ∞  ⇒  lim [f]^g =" (20,ink,w800) | T st | x215..505  bl413
 *  b5 | chip "e^(lim g(f−1))" (19,green)               | Chip | x525..684 y389..427
 *  b6 | row6 card roundRectD(60,454,960,56) amber      | Draw | x60..1020 y454..510
 *  b6 | tag "k-GENERAL" (12,amber_dark,w800,st)        | T st | x80..~134  bl486
 *  b6 | "sin(kx)/x → k" (17,ink,st)                    | T st | x215..325.5 bl486
 *  b6 | "(e^(kx) − 1)/x → k" (17,ink,st)                | T st | x386..530.5 bl486
 *  b7 | banner card x60..1020 y524..574 red             | Draw | full-width
 *  b7 | guardrail text (18,red,w800,mid)                 | T mid| x~230..850(en) y553 (bl553)
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
  AMBER_DARK,
  GREEN,
  GREEN_DARK,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { Limit, roundRectD } from "./math-kit";

export default function M11Ch12Sec11({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const TAG_X = 80;
  const COL_X = 215;

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={26} fill={RED} anchor="middle" script>
          {t("The standard-limit junction table", "Standard-limits ki poori junction table")}
        </T>
      </Fade>

      {/* beat 1 — row1 seq2: trig junctions (HIGH, green) */}
      <Draw on={beat >= 1} d={roundRectD(60, 92, 960, 56, 14)} stroke={GREEN} sw={2.4} delay={dl(1, 0)} />
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={TAG_X} y={124} size={12} fill={GREEN_DARK} anchor="start" weight={800}>
          TRIG
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.7)}>
        <T x={COL_X} y={124} size={17} fill={INK} anchor="start">
          sin x/x → 1
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.1)}>
        <T x={365} y={124} size={17} fill={INK} anchor="start">
          tan x/x → 1
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <T x={515} y={124} size={17} fill={INK} anchor="start">
          arcsin x/x → 1
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.9)}>
        <T x={690} y={124} size={17} fill={INK} anchor="start">
          arctan x/x → 1
        </T>
      </Fade>

      {/* beat 2 — row2 seq3: half-angle junction (HIGH, green) */}
      <Draw on={beat >= 2} d={roundRectD(60, 162, 960, 56, 14)} stroke={GREEN} sw={2.4} delay={dl(2, 0)} />
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={TAG_X} y={194} size={12} fill={GREEN_DARK} anchor="start" weight={800}>
          {t("HALF-ANGLE", "HALF-ANGLE")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.7)}>
        <T x={COL_X} y={194} size={17} fill={INK} anchor="start">
          (1 − cos x)/x² → 1/2
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.2)}>
        <T x={445} y={194} size={17} fill={INK} anchor="start">
          (1 − cos(kx))/x² → k²/2
        </T>
      </Fade>

      {/* beat 3 — row3 seq4: exponential / log junctions (HIGH, green) */}
      <Draw on={beat >= 3} d={roundRectD(60, 232, 960, 56, 14)} stroke={GREEN} sw={2.4} delay={dl(3, 0)} />
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={TAG_X} y={264} size={12} fill={GREEN_DARK} anchor="start" weight={800}>
          {t("EXP / LOG", "EXP / LOG")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.7)}>
        <T x={COL_X} y={264} size={17} fill={INK} anchor="start">
          (e^x − 1)/x → 1
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.1)}>
        <T x={397} y={264} size={17} fill={INK} anchor="start">
          (a^x − 1)/x → ln a
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <T x={605} y={264} size={17} fill={INK} anchor="start">
          ln(1 + x)/x → 1
        </T>
      </Fade>

      {/* beat 4 — row4 seq5: the two definitions of e (normal, amber) */}
      <Draw on={beat >= 4} d={roundRectD(60, 302, 960, 60, 14)} stroke={AMBER_DARK} sw={2} delay={dl(4, 0)} />
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={TAG_X} y={336} size={12} fill={AMBER_DARK} anchor="start" weight={800}>
          {t("DEFINE e", "DEFINE e")}
        </T>
      </Fade>
      <Limit on={beat >= 4} delay={dl(4, 0.7)} x={215} y={336} size={18} condition="x → 0" anchor="start" fill={INK} />
      <Fade on={beat >= 4} delay={dl(4, 0.9)}>
        <T x={260} y={336} size={17} fill={INK} anchor="start">
          (1 + x)^(1/x) = e
        </T>
      </Fade>
      <Limit on={beat >= 4} delay={dl(4, 1.4)} x={460} y={336} size={18} condition="n → ∞" anchor="start" fill={INK} />
      <Fade on={beat >= 4} delay={dl(4, 1.6)}>
        <T x={505} y={336} size={17} fill={INK} anchor="start">
          (1 + 1/n)^n = e
        </T>
      </Fade>

      {/* beat 5 — row5 seq6: the 1^∞ master rule (HIGH, extra visual weight) */}
      <Draw on={beat >= 5} d={roundRectD(60, 376, 960, 64, 14)} stroke={GREEN} sw={3.2} delay={dl(5, 0)} />
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={TAG_X} y={413} size={12} fill={GREEN_DARK} anchor="start" weight={800}>
          {t("MASTER RULE", "MASTER RULE")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.7)}>
        <T x={COL_X} y={413} size={20} fill={INK} anchor="start" weight={800}>
          f → 1,  g → ∞  ⇒  lim [f]^g =
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.3)}>
        <Chip x={525} y={389} w={159} h={38} fill={CREAM} stroke={GREEN} textFill={GREEN_DARK} size={18} script={false}>
          e^(lim g(f−1))
        </Chip>
      </Fade>

      {/* beat 6 — row6 seq7: argument-matching generalisation for k (normal, amber) */}
      <Draw on={beat >= 6} d={roundRectD(60, 454, 960, 56, 14)} stroke={AMBER_DARK} sw={2} delay={dl(6, 0)} />
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={TAG_X} y={486} size={12} fill={AMBER_DARK} anchor="start" weight={800}>
          {t("k-GENERAL", "k-GENERAL")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.7)}>
        <T x={COL_X} y={486} size={17} fill={INK} anchor="start">
          sin(kx)/x → k
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.2)}>
        <T x={386} y={486} size={17} fill={INK} anchor="start">
          (e^(kx) − 1)/x → k
        </T>
      </Fade>

      {/* beat 7 — row7 seq8: closing guardrail banner (full width, reuses Sec4/Sec9's boxed-red-rule motif) */}
      <Draw on={beat >= 7} d="M60 524 L1020 524 L1020 574 L60 574 Z" stroke={RED} sw={2.4} delay={dl(7, 0)} />
      <Fade on={beat >= 7} delay={dl(7, 0.5)}>
        <T x={540} y={553} size={18} fill={RED} anchor="middle" weight={800}>
          {t(
            "Every argument is in radians and tends to zero — no exceptions.",
            "Har argument radians mein hai, zero ki taraf — koi exception nahin."
          )}
        </T>
      </Fade>
    </Scene>
  );
}
