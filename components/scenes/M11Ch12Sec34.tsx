/**
 * M11 Ch12 · Section 34 — "The whole chapter — one board"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: formula_recap — the CAPSTONE of the whole chapter: one representative fact from
 * EACH of the 5 subtopics (Limits: Concepts & Algebra, Standard Limits, Derivatives & First
 * Principle, Rules of Differentiation, Limits at Infinity), in teaching order. No narration
 * (segments_english/segments_hinglish are empty, expected for formula_recap) — board labels are
 * hand-authored here, reusing this chapter's own established terms verbatim ("star limit",
 * "junction", "first principle" — all coined in Sec2-30, not re-translated). Closest analogs:
 * Sec18/Sec24/Sec30 (the three prior master-reference-table "formulas" sections) — this file
 * copies their card geometry (roundRectD row + TAG_X caps label + CONTENT_X formula column)
 * verbatim, but spans the ENTIRE chapter instead of one subtopic, so it packs 9 rows instead
 * of their 7-8.
 *
 * SOURCE VERIFICATION — every fact below is copied byte-for-byte (or trivially recombined) from
 * the chapter section that first taught/verified it, not re-derived here:
 *  ROW1 EXISTENCE ⇐ Sec2 beat4 "LHL = RHL (both finite) → the limit exists" — reuses Sec2's own
 *   LHL/RHL shorthand verbatim (see layout notes below for why: the fully-symbolic one-sided-
 *   limit notation lim(x→a⁻)/lim(x→a⁺) turned out illegible at this row's font size).
 *  ROW2 STAR LIMIT ⇐ Sec3 beat3 / Sec4 card6: lim(x→a)(x^n−a^n)/(x−a) = n·a^(n−1). ✓ (hand-verified
 *   there via the factorization x^n−a^n=(x−a)(x^(n−1)+...+a^(n−1)), n terms → n·a^(n−1)).
 *  ROW3 TRIG JUNCTIONS ⇐ Sec11 row1 "sin x/x → 1" / "tan x/x → 1" + row2 "(1−cos x)/x² → 1/2".
 *  ROW4 EXP·LOG ⇐ Sec11 row3, all three facts verbatim.
 *  ROW5 e & 1^∞ ⇐ Sec11 row4 "(1+x)^(1/x) → e" + row5 master rule, chip text "e^(lim g(f−1))"
 *   copied byte-identical from Sec11/Sec13 (both already verified this exact chip).
 *  ROW6 AT INFINITY ⇐ Sec30 row1 "1/x^k → 0" + row2 degree-rule mini-table (m<n→0, m=n→a_m/b_n,
 *   m>n→±∞), flattened from Sec30's 2-column grid into inline text (single recap row, not a
 *   sub-grid, per the brief's row assignment).
 *  ROW7 FIRST PRINCIPLE ⇐ Sec15's definition + Sec18 row1's exact Frac numerator/denominator
 *   ("f(x+h) − f(x)" / "h") + Sec18 row7's existence clause "f'(a) exists ⇔ LHD = RHD" verbatim.
 *  ROW8 STANDARD DERIVATIVES ⇐ Sec18 rows 4 & 5, all six results copied byte-identical (power,
 *   exp, log / ln, sin, cos) — this file reuses those exact strings rather than re-deriving.
 *  ROW9 RULES ⇐ Sec24 rowB formula1 (product, 2-factor only), rowC (quotient, real Frac,
 *   verified v≠0), rowD formula1 (chain, first line only) — all three copied verbatim.
 *
 * board_reveal_at_english  = [0.0, 10.07, 19.71, 32.43, 45.14, 59.14, 74.41, 90.45, 104.28, 122.71]
 * board_reveal_at_hinglish = [0.0, 9.39, 17.24, 29.27, 39.85, 54.02, 67.41, 82.77, 95.23, 112.98]
 * (10 values → beats 0-9). beat0 = seq1 heading, always-on title. beats1-9 = seq2-10, gated
 * `beat >= k`, one row per beat, in the exact order given in the brief:
 *  0(title, always-on) | "The whole chapter — one board"
 *  1 | ROW1 EXISTENCE           (HIGH, green)  — lim(x→a)f=L ⇔ LHL=RHL=L (finite; Sec2 terms)
 *  2 | ROW2 STAR LIMIT          (HIGH, green)  — lim(x→a)(x^n−a^n)/(x−a) = n·a^(n−1)
 *  3 | ROW3 TRIG JUNCTIONS      (normal,amber) — sin x/x, tan x/x → 1; (1−cos x)/x² → 1/2
 *  4 | ROW4 EXP · LOG           (normal,amber) — (e^x−1)/x→1, (a^x−1)/x→ln a, ln(1+x)/x→1
 *  5 | ROW5 e & 1^∞             (normal,amber) — (1+x)^(1/x)→e; the 1^∞ master rule + chip
 *  6 | ROW6 AT INFINITY         (normal,amber) — 1/x^k→0; rational-degree 3-case rule
 *  7 | ROW7 FIRST PRINCIPLE     (HIGH, green)  — f'(x)=lim(h→0)[f(x+h)−f(x)]/h; existence clause
 *  8 | ROW8 STANDARD DERIVATIVES(HIGH, green, TALLER, sw3.2) — 6 facts, 2 sub-rows of 3
 *  9 | ROW9 RULES               (HIGH, green)  — product, quotient (Frac), chain
 *
 * Shared card geometry (all 9 rows): BOX_X=54, BOX_W=972 → box spans x54..1026, inside safe
 * x[36,1044] even at the thickest sw=3.2 (+1.6→1027.6<1044; 54-1.6=52.4>36 — same math as
 * Sec18/24/30). TAG_X=74 (caps label, size12/w800), CONTENT_X=205 (first formula column) —
 * both reused unchanged across every row so the card reads as one grid. Tags and formulas are
 * language-agnostic (byte-identical EN/HI, symbols + established English math terms per this
 * chapter's own precedent — e.g. Sec18's "DEFINITION"/Sec11's "MASTER RULE" tags carry no t()
 * wrapper) — only the title differs per language.
 *
 * Vertical budget: 9 rows in y90-590 (500px window, safe bottom 596), ~6px→5px gaps between
 * rows once real per-row heights are computed from content (rows carrying a real <Limit> or
 * <Frac> need materially more vertical room than plain-text rows — Limit's own box spans
 * y−0.78×size to y+0.775×size per math-kit's condition-subscript formula; Frac (this file uses
 * size16 throughout) spans y−1.363×size to y+0.6635×size, i.e. ≈32.4px tall before clearance).
 * Rows 3/4/6/8 are plain text only (no Limit/Frac) → compact, h42. Row1 carries one Limit
 * (anchoring the definition, rest flattened inline) → h44. Rows 2/7/9 each carry one Frac (the
 * chapter's three signature compound-fraction formulas: star limit, first-principle definition,
 * quotient rule) → h54. Row5 carries a Chip (master-rule result) → h50. Row8 is the densest (6
 * facts, 2 stacked lines) → h78, the "TALLER" row per the brief.
 *
 * Box-width arithmetic (Anek sans, width ≈ 0.50×size×chars, over-estimated per SCENE_AUTHORING
 * Step 3 — every row's content lands well under the box's ~940px interior span (CONTENT_X 205
 * to box-interior-edge ~1016), checked below per row against the LONGER of EN/HI where prose
 * differs (only the title has EN/HI prose; every row's tag+formula content is identical text):
 *  title (script size24): EN "The whole chapter — one board" 30ch → 0.55×24×30=396w, half198,
 *   centered x540 → x342..738 (safe). HI "Poora chapter — ek board par" 29ch (shorter), safe.
 *  R1 (size15 Limit, CONTENT_X205): Limit "x→a"→box205..227.5. "f = L" x245 size17 (5ch=42.5)
 *   →245..287.5. "⇔" x305 size19. REVISED TWICE after first render: (a) a flattened bold size15
 *   "lim(x→a⁻)f = lim(x→a⁺)f = L" rendered the ⁻/⁺ as near-illegible marks (eye-checked); (b) even
 *   swapped for two real <Limit> components (condition size7, matching Sec2/Sec30's own
 *   rendering) the ⁻/⁺ distinction was STILL too small to read reliably at 8x zoom — a genuine
 *   font-fallback limit at this pixel size, not a code bug. Final fix: reuse Sec2's own "LHL"/
 *   "RHL" shorthand (already an established term from THIS chapter's own beat2-3) instead of
 *   the symbolic one-sided-limit notation — mathematically identical, zero illegible glyphs.
 *   "LHL = RHL = L" x330 size17 (13ch=110.5)→330..440.5. "(finite)" x465 size13 MUTED (8ch=52)
 *   →465..517.
 *  R2 (size15 Limit / size16 Frac / size17 text): Limit "x→a"→205..227.5. Frac (num "x^n − a^n"
 *   9ch@13.6=61.2, denom "x − a" 5ch@13.6=34, width90) centered x286→241..331. "=" x346 size18.
 *   result "n · a^(n−1)" x378 size17 (11ch=93.5)→378..471.5.
 *  R3 (size18): "sin x/x, tan x/x → 1" x205 (21ch=189)→205..394. "(1 − cos x)/x² → 1/2" x430
 *   (21ch=189)→430..619.
 *  R4 (size18): "(e^x − 1)/x → 1" x205 (16ch=144)→205..349. "(a^x − 1)/x → ln a" x369 (19ch=171)
 *   →369..540. "ln(1 + x)/x → 1" x560 (16ch=144)→560..704.
 *  R5 (size18/19): "(1 + x)^(1/x) → e" x205 (17ch=153)→205..358. master-rule text "f → 1, g → ∞
 *   ⇒ lim f^g =" x395 size19 (27ch=256.5)→395..651.5. Chip "e^(lim g(f−1))" x670 w150 h32
 *   →670..820 (chip text 14ch@16=112, +26 pad=138<150, fits).
 *  R6 (size18/16): "1/x^k → 0" x205 (9ch=81)→205..286. "rational:" x304 size13 MUTED (9ch=58.5)
 *   →304..362.5. "m < n → 0" x378 size16 (7ch=56)→378..434. "m = n → a_m/b_n" x452 size16 —
 *   REVISED after first render: this string is 15 chars (not 13, a miscount), and bold (w700)
 *   renders visibly wider than the 0.5×size×chars sans estimate — the next fragment at the
 *   originally-planned x574 visually touched it ("b_nm", eye-checked defect, verifier's box
 *   check didn't flag it). Pushed "m > n → ±∞" to x632 (real end of "a_m/b_n" measured ~590,
 *   now 42px clear) — well inside the box interior (~1016).
 *  R7 (size18 text / size15 Limit / size16 Frac): "f'(x) =" x205 (7ch=63)→205..268. Limit "h→0"
 *   x286→286..308.5. Frac (num "f(x+h) − f(x)" 14ch@13.6=95.2, denom "h", width110) centered
 *   x380→325..435. second clause "f'(a) exists ⇔ LHD = RHD" x460 size17 (23ch=195.5)→460..655.5.
 *  R8 (size18): tag "STANDARD DERIVATIVES" (20ch@12=120) x74..194 — REVISED after first render:
 *   this measured wider in practice than estimated and visibly touched subA's first item at the
 *   Sec18-verbatim x205 (eye-checked defect). subA shifted +20px from Sec18's own positions:
 *   "d/dx x^n = n·x^(n−1)" x230 (20ch=180)→230..410, "d/dx e^x = e^x" x472 (14ch=126)→472..598,
 *   "d/dx a^x = a^x·ln a" x664 (19ch=171)→664..835 (clear of box interior ~1016). subB (no tag
 *   on this baseline, kept at CONTENT_X205): "d/dx ln x = 1/x" x205 (15ch=135)→205..340,
 *   "d/dx sin x = cos x" x400 (18ch=162)→400..562, "d/dx cos x = −sin x" x610 (19ch=171)
 *   →610..781.
 *  R9 (size17 text / size16 Frac): "(uv)' = u'v + uv'" x205 (17ch=144.5)→205..349.5. "(u/v)' ="
 *   x370 (8ch=68)→370..438. Frac (num "u'v − uv'" 9ch@13.6=61.2, denom "v²", width90) centered
 *   x497→452..542. "(v ≠ 0)" x560 size14 MUTED (7ch=49)→560..609. "dy/dx = dy/du · du/dx" x635
 *   (21ch=178.5)→635..813.5.
 * All rows' content ends well under the box-interior edge (~1016) with the thickest sw (3.2,
 * row8) still 10+px clear of the right border.
 *
 * Row heights & vertical positions (baseline math: Anek sans top=y−0.78×size, bottom=y+0.31×size;
 * Limit condition bottom = y+0.775×size; Frac(size16) top=y−21.8, bottom=y+10.6 — both derived
 * and checked against ≥10px clearance to each row's own border below):
 *  title            y58 (band 30-80, script, always-on)
 *  R1  y90..134   (h44)  baseline112 — Limit(15) top100.3(clear10.3), bottom123.6(clear10.4)
 *  gap5
 *  R2  y139..193  (h54)  baseline172 — Frac(16) top150.2(clear11.2), bottom182.6(clear10.4)
 *  gap5
 *  R3  y198..240  (h42)  baseline223 — top208.96(clear10.96), bottom228.58(clear11.42)
 *  gap5
 *  R4  y245..287  (h42)  baseline270 — top255.96(clear10.96), bottom275.58(clear11.42)
 *  gap5
 *  R5  y292..342  (h50)  baseline318 (text); chip y301 h32 (clear9/9 top/bottom, eye-checked
 *                          tight but clean, same tightness precedent as Sec24's rowC Frac)
 *  gap5
 *  R6  y347..389  (h42)  baseline372 — top357.96(clear10.96), bottom377.58(clear11.42)
 *  gap5
 *  R7  y394..448  (h54)  baseline427 — Frac(16) top405.2(clear11.2), bottom437.6(clear10.4)
 *  gap5
 *  R8  y453..531  (h78, TALLER)  subA_baseline479 (top464.96,clear11.96), subB_baseline513
 *                  (gap34≥1.6×18=28.8), subB_bottom518.58 (clear12.42 from531)
 *  gap5
 *  R9  y536..590  (h54)  baseline569 — Frac(16) top547.2(clear11.2), bottom579.6(clear10.4)
 * Ends y590, safe bottom596 → 6px spare. Every row's box IS the beat's Draw action.
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
  MUTED,
  AMBER_DARK,
  GREEN,
  GREEN_DARK,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { Frac, Limit, roundRectD } from "./math-kit";

const BOX_X = 54;
const BOX_W = 972;
const TAG_X = 74;
const CONTENT_X = 205;

export default function M11Ch12Sec34({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={24} fill={RED} anchor="middle" script>
          {t("The whole chapter — one board", "Poora chapter — ek board par")}
        </T>
      </Fade>

      {/* beat 1 — ROW1 EXISTENCE, HIGH (green) */}
      <Draw on={beat >= 1} d={roundRectD(BOX_X, 90, BOX_W, 44, 14)} stroke={GREEN} sw={2.6} delay={dl(1, 0)} />
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={TAG_X} y={112} size={12} fill={GREEN_DARK} anchor="start" weight={800}>
          EXISTENCE
        </T>
      </Fade>
      <Limit on={beat >= 1} delay={dl(1, 0.6)} x={CONTENT_X} y={112} size={15} condition="x → a" anchor="start" fill={INK} />
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={245} y={112} size={17} fill={INK} anchor="start" weight={700}>
          f = L
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.2)}>
        <T x={305} y={112} size={19} fill={INK} anchor="start" weight={700}>
          ⇔
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.6)}>
        <T x={330} y={112} size={17} fill={INK} anchor="start" weight={700}>
          {"LHL = RHL = L"}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.1)}>
        <T x={465} y={112} size={13} fill={MUTED} anchor="start">
          {"(finite)"}
        </T>
      </Fade>

      {/* beat 2 — ROW2 STAR LIMIT, HIGH (green) */}
      <Draw on={beat >= 2} d={roundRectD(BOX_X, 139, BOX_W, 54, 14)} stroke={GREEN} sw={2.6} delay={dl(2, 0)} />
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={TAG_X} y={172} size={12} fill={GREEN_DARK} anchor="start" weight={800}>
          {"STAR LIMIT"}
        </T>
      </Fade>
      <Limit on={beat >= 2} delay={dl(2, 0.6)} x={CONTENT_X} y={172} size={15} condition="x → a" anchor="start" fill={INK} />
      <Frac
        on={beat >= 2}
        delay={dl(2, 0.9)}
        x={286}
        y={172}
        size={16}
        numerator="x^n − a^n"
        denominator="x − a"
        width={90}
        fill={INK}
      />
      <Fade on={beat >= 2} delay={dl(2, 1.4)}>
        <T x={346} y={172} size={18} fill={INK} anchor="start" weight={700}>
          =
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.7)}>
        <T x={378} y={172} size={17} fill={INK} anchor="start" weight={700}>
          {"n · a^(n−1)"}
        </T>
      </Fade>

      {/* beat 3 — ROW3 TRIG JUNCTIONS, normal (amber) */}
      <Draw on={beat >= 3} d={roundRectD(BOX_X, 198, BOX_W, 42, 14)} stroke={AMBER_DARK} sw={2} delay={dl(3, 0)} />
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={TAG_X} y={223} size={12} fill={AMBER_DARK} anchor="start" weight={800}>
          {"TRIG JUNCTIONS"}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={CONTENT_X} y={223} size={18} fill={INK} anchor="start">
          {"sin x/x, tan x/x → 1"}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.1)}>
        <T x={430} y={223} size={18} fill={INK} anchor="start">
          {"(1 − cos x)/x² → 1/2"}
        </T>
      </Fade>

      {/* beat 4 — ROW4 EXP · LOG, normal (amber) */}
      <Draw on={beat >= 4} d={roundRectD(BOX_X, 245, BOX_W, 42, 14)} stroke={AMBER_DARK} sw={2} delay={dl(4, 0)} />
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={TAG_X} y={270} size={12} fill={AMBER_DARK} anchor="start" weight={800}>
          {"EXP · LOG"}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={CONTENT_X} y={270} size={18} fill={INK} anchor="start">
          {"(e^x − 1)/x → 1"}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.0)}>
        <T x={369} y={270} size={18} fill={INK} anchor="start">
          {"(a^x − 1)/x → ln a"}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.4)}>
        <T x={560} y={270} size={18} fill={INK} anchor="start">
          {"ln(1 + x)/x → 1"}
        </T>
      </Fade>

      {/* beat 5 — ROW5 e & 1^∞, normal (amber) */}
      <Draw on={beat >= 5} d={roundRectD(BOX_X, 292, BOX_W, 50, 14)} stroke={AMBER_DARK} sw={2} delay={dl(5, 0)} />
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={TAG_X} y={318} size={12} fill={AMBER_DARK} anchor="start" weight={800}>
          {"e & 1^∞"}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={CONTENT_X} y={318} size={18} fill={INK} anchor="start" weight={700}>
          {"(1 + x)^(1/x) → e"}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.1)}>
        <T x={395} y={318} size={19} fill={INK} anchor="start" weight={800}>
          {"f → 1, g → ∞  ⇒  lim f^g ="}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <Chip x={670} y={301} w={150} h={32} fill={CREAM} stroke={GREEN} textFill={GREEN_DARK} size={16} script={false}>
          {"e^(lim g(f−1))"}
        </Chip>
      </Fade>

      {/* beat 6 — ROW6 AT INFINITY, normal (amber) */}
      <Draw on={beat >= 6} d={roundRectD(BOX_X, 347, BOX_W, 42, 14)} stroke={AMBER_DARK} sw={2} delay={dl(6, 0)} />
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={TAG_X} y={372} size={12} fill={AMBER_DARK} anchor="start" weight={800}>
          {"AT INFINITY"}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={CONTENT_X} y={372} size={18} fill={INK} anchor="start" weight={700}>
          {"1/x^k → 0"}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.0)}>
        <T x={304} y={372} size={13} fill={MUTED} anchor="start">
          {"rational:"}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.3)}>
        <T x={378} y={372} size={16} fill={INK} anchor="start" weight={700}>
          {"m < n → 0"}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={452} y={372} size={16} fill={INK} anchor="start" weight={700}>
          {"m = n → a_m/b_n"}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.9)}>
        <T x={632} y={372} size={16} fill={INK} anchor="start" weight={700}>
          {"m > n → ±∞"}
        </T>
      </Fade>

      {/* beat 7 — ROW7 FIRST PRINCIPLE, HIGH (green) */}
      <Draw on={beat >= 7} d={roundRectD(BOX_X, 394, BOX_W, 54, 14)} stroke={GREEN} sw={2.6} delay={dl(7, 0)} />
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={TAG_X} y={427} size={12} fill={GREEN_DARK} anchor="start" weight={800}>
          {"FIRST PRINCIPLE"}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={CONTENT_X} y={427} size={18} fill={INK} anchor="start" weight={700}>
          {"f'(x) ="}
        </T>
      </Fade>
      <Limit on={beat >= 7} delay={dl(7, 0.9)} x={286} y={427} size={15} condition="h → 0" anchor="start" fill={INK} />
      <Frac
        on={beat >= 7}
        delay={dl(7, 1.2)}
        x={380}
        y={427}
        size={16}
        numerator="f(x+h) − f(x)"
        denominator="h"
        width={110}
        fill={INK}
      />
      <Fade on={beat >= 7} delay={dl(7, 1.7)}>
        <T x={460} y={427} size={17} fill={INK} anchor="start" weight={700}>
          {"f'(a) exists ⇔ LHD = RHD"}
        </T>
      </Fade>

      {/* beat 8 — ROW8 STANDARD DERIVATIVES, HIGH (green, TALLER, sw3.2) — 2 sub-rows of 3 */}
      <Draw on={beat >= 8} d={roundRectD(BOX_X, 453, BOX_W, 78, 14)} stroke={GREEN} sw={3.2} delay={dl(8, 0)} />
      <Fade on={beat >= 8} delay={dl(8, 0.3)}>
        <T x={TAG_X} y={479} size={12} fill={GREEN_DARK} anchor="start" weight={800}>
          {"STANDARD DERIVATIVES"}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 0.6)}>
        <T x={230} y={479} size={18} fill={INK} anchor="start" weight={700}>
          {"d/dx x^n = n·x^(n−1)"}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 0.9)}>
        <T x={472} y={479} size={18} fill={INK} anchor="start" weight={700}>
          {"d/dx e^x = e^x"}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 1.2)}>
        <T x={664} y={479} size={18} fill={INK} anchor="start" weight={700}>
          {"d/dx a^x = a^x·ln a"}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 1.6)}>
        <T x={CONTENT_X} y={513} size={18} fill={INK} anchor="start" weight={700}>
          {"d/dx ln x = 1/x"}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 1.9)}>
        <T x={400} y={513} size={18} fill={INK} anchor="start" weight={700}>
          {"d/dx sin x = cos x"}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 2.2)}>
        <T x={610} y={513} size={18} fill={INK} anchor="start" weight={700}>
          {"d/dx cos x = −sin x"}
        </T>
      </Fade>

      {/* beat 9 — ROW9 RULES, HIGH (green) */}
      <Draw on={beat >= 9} d={roundRectD(BOX_X, 536, BOX_W, 54, 14)} stroke={GREEN} sw={2.6} delay={dl(9, 0)} />
      <Fade on={beat >= 9} delay={dl(9, 0.3)}>
        <T x={TAG_X} y={569} size={12} fill={GREEN_DARK} anchor="start" weight={800}>
          RULES
        </T>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 0.6)}>
        <T x={CONTENT_X} y={569} size={17} fill={INK} anchor="start" weight={700}>
          {"(uv)' = u'v + uv'"}
        </T>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 1.0)}>
        <T x={370} y={569} size={17} fill={INK} anchor="start" weight={700}>
          {"(u/v)' ="}
        </T>
      </Fade>
      <Frac
        on={beat >= 9}
        delay={dl(9, 1.3)}
        x={497}
        y={569}
        size={16}
        numerator="u'v − uv'"
        denominator="v²"
        width={90}
        fill={INK}
      />
      <Fade on={beat >= 9} delay={dl(9, 1.8)}>
        <T x={560} y={569} size={14} fill={MUTED} anchor="start">
          {"(v ≠ 0)"}
        </T>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 2.2)}>
        <T x={635} y={569} size={17} fill={INK} anchor="start" weight={700}>
          {"dy/dx = dy/du · du/dx"}
        </T>
      </Fade>
    </Scene>
  );
}
