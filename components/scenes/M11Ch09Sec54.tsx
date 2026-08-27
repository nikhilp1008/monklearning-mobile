/**
 * M11 Ch09 · Section 54 — "Proof: image of a point, and reflecting a line"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept (titled "Proof:", FLAGGED for extra scrutiny per task brief — this
 * chapter has more proof sections than usual, and Sec53 immediately before this one is also
 * flagged). This section is a DIRECT CONTINUATION of Sec53: it assumes Sec53's landed foot
 * formula Q = P + t(a,b), with t = -(ax1+by1+c)/(a²+b²), as already established/given (verified
 * live via Supabase REST against chapter_id 5edf4eb2-af54-5da2-b8fa-bfbb3270e702 position 53 —
 * Sec53's own board_content seq4/seq7 derive exactly that Q and t). Sec53's file is currently
 * still a placeholder in this repo, but that does not change what THIS section may assume: the
 * task brief hands the formula down explicitly, and Sec55 (the formula-toolkit recap, already
 * authored) independently confirms the same foot formula with identical variable names — so the
 * continuity is cross-checked against a second authored sibling, not just the task brief.
 *
 * NO DIAGRAM in this section's JSON (no `diagram`/`svg`-type board_content item) — pure symbolic
 * algebra continuing Sec53's proof (beats 1-4 below), then beats 5-7 pivot to a practical
 * procedure note (how to reflect a whole line) with a closing shortcut. Unlike Sec19/Sec37 (which
 * ground their symbolic proof with a side Cartesian diagram + concrete illustrative numbers),
 * this section stays purely symbolic throughout — no coordinate plane, no toScreen, no invented
 * numbers — matching the task brief's explicit instruction that this is "pure symbolic algebra...
 * no specific numbers".
 *
 * board_content has 8 items (verified live via Supabase REST, chapter_id
 * 5edf4eb2-af54-5da2-b8fa-bfbb3270e702, position 54). seq1 (heading) is the always-on title.
 * seq2..seq8 gate at beat>=1..beat>=7. reveal_at indices 0-7 map directly to the `reveals` prop.
 * board_reveal_at_english = [0.0, 7.34, 18.69, 28.25, 37.63, 52.57, 64.68, 74.75] (8 values).
 * board_reveal_at_hinglish = [0.0, 7.08, 17.58, 27.22, 34.82, 49.75, 61.44, 71.17] (8 values).
 *
 * FORMULA VERIFICATION (task-required, no arithmetic invented — every symbolic step reproduced
 * character-for-character from the given board_content, cross-checked against Sec55's already-
 * authored toolkit recap which independently restates the same image formula):
 *   Sec53 gives:      Q = P + t(a,b),  t = -(ax1+by1+c)/(a²+b²).
 *   beat1 (seq2):      Q is the midpoint of P and P' (image)  =>  P' = 2Q - P.  [midpoint relation
 *                       rearranged: Q=(P+P')/2 => 2Q=P+P' => P'=2Q-P — algebraically trivial, JSON
 *                       states the rearranged form directly, reproduced verbatim].
 *   beat2 (seq3):      substitute Q=P+t(a,b):  P' = 2(P + t(a,b)) - P = 2P + 2t(a,b) - P
 *                       = P + 2t(a,b).  [matches JSON's own latex exactly: the "2P - P = P" step is
 *                       folded into the single given equality, not re-derived as an extra beat].
 *   beat3 (seq4):      image uses parameter 2t, i.e. double the foot's own step t — direct
 *                       restatement of beat2's result, no new algebra.
 *   beat4/beat5(seq5):  in coordinates, P'=(x',y'), P=(x1,y1); P'=P+2t(a,b) means
 *                       x'=x1+2ta, y'=y1+2tb  =>  (x'-x1)/a = (y'-y1)/b = 2t. Substitute Sec53's
 *                       t = -(ax1+by1+c)/(a²+b²): 2t = -2(ax1+by1+c)/(a²+b²). Matches the JSON's
 *                       boxed formula exactly: (x'-x1)/a = (y'-y1)/b = -2(ax1+by1+c)/(a²+b²).
 *                       Denominator is the RAW a²+b² (no square root) — same convention as Sec53's
 *                       foot formula and Sec55's toolkit recap (its own guardrail: "no square root,
 *                       unlike the distance formula").
 *   beats 5-7 (seq6-8): conceptual shift, no algebra — reflecting a whole line m in mirror line ℓ
 *                       means reflecting two of its points and rejoining them (you cannot tweak the
 *                       line's own equation directly, per Sec59's later restatement of this exact
 *                       fact); shortcut: if m and ℓ intersect, the reflection also passes through
 *                       m∩ℓ (the reflection of a point ON the mirror ℓ is itself, so any point of m
 *                       already on ℓ is fixed — this is why the intersection survives); therefore
 *                       one reflected point + that fixed intersection point determine the whole
 *                       reflected line, half the work of reflecting two separate points.
 *
 * STRUCTURE (per task brief's recommendation): two movements, separated by a thin decorative
 * divider rule (beat5, drawn first) so the pivot from "finishing the proof" to "practical
 * procedure" reads as a deliberate break, not a continuation of the same derivation:
 *   Movement 1 (beats 1-4, JSON seq2-5) — tight top-to-bottom single-column symbolic derivation,
 *   same discipline as Sec53/Sec19's proof column. A small MUTED recap line ("Recall: foot
 *   Q = P + t(a, b)") fades in alongside beat1's midpoint-relation text — restates the Sec53 fact
 *   this section leans on, phrased as a teacher's spoken recall rather than a literal "Sec 53"
 *   citation (no real teacher cites a section number out loud). This is the optional visual cue
 *   the task brief floated; included here because a viewer who has NOT just watched Sec53 needs
 *   one line of grounding before "the foot Q is the midpoint..." makes sense, and it costs only a
 *   single small muted row, not clutter.
 *   Movement 2 (beats 5-7, JSON seq6-8) — practical procedure note, NOT more algebra: how to
 *   reflect a whole line, then the shortcut, then the payoff. Centered prose, matching movement
 *   1's column discipline (one anchor style throughout the section; only the established red-
 *   margin guardrail card breaks to start-anchor, per every sibling section's convention).
 *
 * BEAT-7 GUARDRAIL TONE (task-required judgment call, documented): JSON tags seq7 emphasis="high",
 * style="red-margin" — the chapter's uniform visual convention for ANY flagged aside (see Sec1/
 * Sec19/Sec37/Sec55, all four render style="red-margin" as a vertical RED bar + bold RED start-
 * anchored text, regardless of whether the underlying content is a warning about a mistake
 * (Sec1's "collinear points enclose ZERO area") or a neutral explanatory aside (Sec37's "both zero
 * => sum zero — that's the whole reason the trick works"). This section's beat7 is neither a
 * mistake-warning nor neutral filler — it is a genuinely HELPFUL shortcut, and the JSON's own text
 * already says so ("Shortcut: if m and ℓ intersect, the reflection also passes through m ∩ ℓ.").
 * DECISION: keep the established RED bar + bold RED text visual (house palette: RED = guardrail/
 * flagged-note styling per SCENE_AUTHORING_MATHS.md, independent of tone — matches every sibling
 * section's precedent for style="red-margin", so a viewer's eye still reads "important flagged
 * aside" consistently across the whole chapter) but do NOT rephrase the wording into a warning —
 * the board text is reproduced verbatim from the JSON ("Shortcut: ..."), which already reads as
 * "here's a shortcut", not "watch out for this trap". The immediately-following beat8/beat7-index
 * closing line then switches to the AMBER_DARK/script "closing caption" treatment (Sec1's exact
 * precedent for a section's final wrap-up sentence), which visually and tonally separates the
 * positive payoff ("half the work") from the red card immediately above it — so red = "flagged,
 * pay attention", amber-script caption = "here's the takeaway", two distinct registers, neither of
 * which reads as an accusation of a mistake.
 *
 * NOTATION (checked against SCENE_AUTHORING_MATHS.md before writing):
 * - Minus sign: plain hyphen throughout (`-`), never U+2212. Checked, none present.
 * - Apostrophe for the image point (P', x', y'): plain ASCII apostrophe (U+0027), matching Sec55's
 *   established "x'", "y'" convention exactly (not the curly U+2019, not a combining prime).
 * - Subscript x₁, y₁: real Unicode subscript digits (U+2081), rendered in non-script (Anek) text
 *   only — Kalam is missing most subscript/superscript digits per the font-audit rule in
 *   SCENE_AUTHORING_MATHS.md. Every T/Chip call carrying these digits below is non-script
 *   (script={false} or the T default, which is already non-script).
 * - Superscript ² (a², b²): native to both fonts (no-fallback list), used freely.
 * - `ℓ` (script ell, the mirror line's name): native to Anek per this chapter's own PROGRESS-
 *   math9.md decision ("ℓ is native to Anek, safe either script mode") — used directly, no
 *   substitute needed.
 * - `∩` (intersection, m ∩ ℓ): PROGRESS-math9.md flagged this chapter hasn't used it yet, but
 *   SCENE_AUTHORING_MATHS.md's base operator audit already lists ∩ as safe-to-use-as-is (falls
 *   back to a system sans glyph via Chromium's per-glyph fallback, same category as ∈ ∪ ⊆ etc —
 *   legible, unambiguous, not tofu). Cross-checked further: ∩ is already in live use across 26
 *   other authored scene files in this same repo (Ch01/Ch02 Sets sections, same Anek+Kalam font
 *   pipeline) with no reported rendering defect — strong evidence it renders cleanly here too.
 *   DECISION: use ∩ directly, as the JSON's own text does verbatim ("m ∩ ℓ"). Re-confirmed by eye
 *   via FORCE_SHOTS on beat6's frame during verification (see workflow below) rather than taking
 *   the cross-chapter precedent alone as sufficient — this is the flagged proof section's required
 *   extra scrutiny.
 * - `\frac{a}{b}` flattened inline as `a/b` throughout (house convention) — the beat5/chip formula
 *   reads left-to-right with explicit parentheses around every multi-term numerator so the flattened
 *   division stays unambiguous: `-2(ax₁ + by₁ + c)/(a² + b²)` — the `-2` scales the WHOLE
 *   parenthesized numerator, and the denominator is wholly parenthesized too, so there is no
 *   reading in which `-2` or the `/(a²+b²)` could bind to only part of the expression.
 * - Em dash "—" (beat3, beat7 closing line): literal character, not the Chapter-3 double-escaped
 *   backslash-u bug — same literal em dash already used without issue in Sec37/Sec55's closing
 *   lines (checked: no backslash-u sequences anywhere in this file).
 * - Hinglish board text is Latin script throughout (no Devanagari on the board) — condensed,
 *   natural Hinglish captions. All formulas (beat2, beat4 chip, and the ℓ/∩ symbols inside beats
 *   5-6) are byte-identical between languages, matching the chapter-wide convention that a
 *   formula never changes with language, only surrounding prose does.
 *
 * WIDTH ESTIMATES (0.50×size×chars non-script Anek / 0.55×size×chars script Kalam — over-estimate,
 * longer of the two languages counts; all rows anchor="middle" at x540 except the guardrail card):
 *   title (script,22)     EN 42ch -> 508.2px  half 254.1  range 285.9..794.1
 *   recap (14)             EN 29ch -> 203.0px  HI 32ch -> 224.0px   (well inside safe span)
 *   b1 text (16)            EN 68ch -> 544.0px  HI 67ch -> 536.0px
 *   b2 formula (18)         38ch -> 342.0px (identical both languages)
 *   b3 text (16)             EN 67ch -> 536.0px  HI 73ch -> 584.0px  range 248..832
 *   b4 chip formula (17)   55ch -> 467.5px text; chip w=560 (matches Sec55's identical-shape
 *                            chip width exactly), inner clearance (560-467.5)/2 ≈ 46px/side
 *   b5 line1/line2 (16)    EN max 42ch->336px  HI max 50ch->400px   (both centered, safe)
 *   b6 guardrail (16, start-anchor at x376) EN max 41ch->328px (start376..704) HI max
 *                            44ch->352px (start376..728) — both well under the x1044 safe edge
 *   b7 caption (script,14) EN 71ch -> 546.0px  HI 67ch -> 515.5px
 * All rows safely inside x[36,1044] for both languages.
 *
 * Layout plan (viewBox 1080×620, safe x36-1044 y30-596; Anek non-script box top=y-0.78×size
 * bottom=y+0.31×size; Kalam script box top=y-1.3×size bottom=y+0.5×size; all anchor="middle"
 * x540 except the guardrail card, anchor="start"):
 *  title(always-on)        | T mid script size22 RED       | x540 y64   box y35.4..75.0
 *  b1 recap (muted)        | T mid size14 MUTED             | x540 y108  box y97.08..112.34
 *  b1 midpoint text        | T mid size16 INK               | x540 y144  box y131.52..148.96  (gap 19.18 from recap, same-group)
 *  b2 formula               | T mid size18 AMBER_DARK w700  | x540 y188  box y173.96..193.58  (gap 25.0 from b1)
 *  b3 text                   | T mid size16 INK               | x540 y232  box y219.52..236.96  (gap 25.94 from b2)
 *  b4 HIGH chip (boxed)     | Chip w560 h50                  | x260..820 y262..312             (gap 25.04 from b3)
 *  divider rule (decorative)| Draw stroke MUTED               | x390..690 y344                  (gap 32.0 from chip)
 *  b5 line1                  | T mid size16 INK               | x540 y380  box y367.52..384.96  (gap 22.52 from divider)
 *  b5 line2                  | T mid size16 INK               | x540 y406  box y393.52..410.96  (baseline gap 26 from line1, same idea)
 *  b6 guardrail bar          | Draw stroke RED sw4             | x360 y444..501
 *  b6 guardrail text1/text2  | T start size16 RED w700         | x376 y464 / y490                (block top 444, gap 33.04 from b5)
 *  b7 closing caption        | T mid script size14 AMBER_DARK | x540 y552  box y533.8..559.0    (gap 32.8 from guardrail block bottom 501)
 * All boxes fit inside y[30,596] (max bottom 559, 37px of margin to the safe floor) and every
 * inter-group gap is >=19px (same-group stacked pairs) or >=24px (different-idea boundaries),
 * matching the base spec's clearance floors.
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
  AMBER,
  AMBER_DARK,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

const TITLE_Y = 64;
const RECAP_Y = 108;
const B1_Y = 144;
const B2_Y = 188;
const B3_Y = 232;
const CHIP_X = 260;
const CHIP_W = 560;
const CHIP_H = 50;
const CHIP_Y = 262;
const DIVIDER_Y = 344;
const DIVIDER_X1 = 390;
const DIVIDER_X2 = 690;
const B5_L1_Y = 380;
const B5_L2_Y = 406;
const GUARD_BAR_X = 360;
const GUARD_BAR_Y1 = 444;
const GUARD_BAR_Y2 = 501;
const GUARD_TEXT_X = 376;
const GUARD_T1_Y = 464;
const GUARD_T2_Y = 490;
const B7_Y = 552;

export default function M11Ch09Sec54({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={TITLE_Y} size={22} fill={RED} anchor="middle" script>
          {t("Proof: Image of a Point, Reflecting a Line", "Proof: Image of a Point, Line Reflect Karna")}
        </T>
      </Fade>

      {/* beat 1 — recap of Sec53's foot formula (muted), then the midpoint relation (JSON seq2) */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={RECAP_Y} size={14} fill={MUTED} anchor="middle">
          {t("Recall: foot Q = P + t(a, b)", "Yaad karo: foot Q = P + t(a, b)")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={540} y={B1_Y} size={16} fill={INK} anchor="middle">
          {t(
            "The foot Q is the midpoint of P and its image P', so P' = 2Q - P.",
            "Foot Q, P aur uske image P' ka midpoint hai, isliye P' = 2Q - P."
          )}
        </T>
      </Fade>

      {/* beat 2 — substitute Q = P + t(a,b), normal-emphasis formula (JSON seq3) */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={540} y={B2_Y} size={18} fill={AMBER_DARK} anchor="middle" weight={700}>
          P' = 2(P + t(a, b)) - P = P + 2t(a, b)
        </T>
      </Fade>

      {/* beat 3 — image uses parameter 2t, double the foot's step (JSON seq4) */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={540} y={B3_Y} size={16} fill={INK} anchor="middle">
          {t(
            "So the image uses parameter 2t — exactly double the foot's step.",
            "Toh image parameter 2t use karta hai — foot ke step ka exactly double."
          )}
        </T>
      </Fade>

      {/* beat 4 — landed coordinate formula, HIGH emphasis, boxed (JSON seq5) */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <Chip x={CHIP_X} y={CHIP_Y} w={CHIP_W} h={CHIP_H} fill={CREAM} stroke={AMBER} textFill={AMBER_DARK} size={17} script={false}>
          (x' - x₁)/a = (y' - y₁)/b = -2(ax₁ + by₁ + c)/(a² + b²)
        </Chip>
      </Fade>

      {/* beat 5 — MOVEMENT 2 begins: decorative divider, then the reflect-a-whole-line procedure
          (JSON seq6) */}
      <Draw on={beat >= 5} delay={dl(5, 0)} d={`M ${DIVIDER_X1} ${DIVIDER_Y} L ${DIVIDER_X2} ${DIVIDER_Y}`} stroke={MUTED} sw={1.4} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={540} y={B5_L1_Y} size={16} fill={INK} anchor="middle">
          {t("To reflect a whole line m in a line ℓ:", "Poori line m ko line ℓ mein reflect karne ke liye:")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.0)}>
        <T x={540} y={B5_L2_Y} size={16} fill={INK} anchor="middle">
          {t("reflect two of its points and rejoin them.", "uske do points reflect karo aur unhe jodo.")}
        </T>
      </Fade>

      {/* beat 6 — shortcut, red-margin card per house convention, positively worded per JSON
          (JSON seq7) */}
      <Draw on={beat >= 6} delay={dl(6, 0)} d={`M ${GUARD_BAR_X} ${GUARD_BAR_Y1} L ${GUARD_BAR_X} ${GUARD_BAR_Y2}`} stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={GUARD_TEXT_X} y={GUARD_T1_Y} size={16} fill={RED} anchor="start" weight={700}>
          {t("Shortcut: if m and ℓ intersect,", "Shortcut: agar m aur ℓ intersect karte hain,")}
        </T>
        <T x={GUARD_TEXT_X} y={GUARD_T2_Y} size={16} fill={RED} anchor="start" weight={700}>
          {t("the reflection also passes through m ∩ ℓ.", "toh reflection bhi m ∩ ℓ se guzarti hai.")}
        </T>
      </Fade>

      {/* beat 7 — closing payoff line (JSON seq8), amber-script "closing caption" treatment
          (Sec1's precedent) — deliberately distinct register from the red guardrail above it */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <T x={540} y={B7_Y} size={14} fill={AMBER_DARK} anchor="middle" script>
          {t(
            "So one image point plus that intersection is enough — half the work.",
            "Toh ek image point plus wahi intersection kaafi hai — aadha kaam."
          )}
        </T>
      </Fade>
    </Scene>
  );
}
