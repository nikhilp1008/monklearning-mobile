/**
 * M11 Ch11 · Section 7 — "The applications toolkit"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: formulas — a formula-recap-style toolkit card gathering every result from this
 * subtopic (centroid, collinearity, sphere, perp-bisector plane, ellipsoid, incentre), plus two
 * JEE extensions. NOT a derivation — same discipline as M11Ch09Sec13 ("Slope & Angles — Toolkit"),
 * this chapter's closest sibling: one formula per beat, HIGH-emphasis rows boxed as a Chip
 * (CREAM fill / AMBER stroke / AMBER_DARK text, script=false per the numeric-subscript-digit
 * font rule), normal-emphasis rows as plain bold ink text, closing red-margin guardrail as a
 * Sec1-style red bar + red text.
 *
 * NOTE ON SCOPE — flagging a conflict with the task brief: the task's framing described
 * sections 1-12 of this chapter as a "2D-only" Applications unit (reusing CartesianAxes/lineD,
 * nothing 3D). That holds for M11Ch11Sec1 (built) and appears to hold for the still-unbuilt
 * Sec2-6/10-14 stubs, BUT this section's own Supabase board_content is unambiguously 3D: every
 * formula here carries a z-coordinate (centroid z_1+z_2+z_3, sphere (z-c)², ellipsoid, incentre
 * "…" for the omitted y/z terms) — i.e. these are the 3D extensions of the same 2D toolkit,
 * consistent with the chapter's JEE-extension framing (incentre, tetrahedron centroid) and with
 * math-kit's project3D/ThreeDAxes already existing for this chapter (see Sec15). Per the task's
 * own instruction that the JSON is authoritative over any stale framing, this section (and its
 * siblings Sec8/Sec9, same subtopic, same 3D board_content) are built as 3D content. Flagged for
 * the calling agent/reviewer — worth reconciling the "2D only" framing with Sec2-6/10-14 once
 * those are authored, in case the 2D/3D split within this subtopic falls somewhere other than a
 * clean position boundary.
 *
 * All 6 core formulas are standard textbook results — sanity-checked by eye (not computed, this
 * is a recap not a worked example): 3D centroid = coordinate-wise average (extends Sec1's 2D
 * G=(x̄,ȳ) by one term); collinearity via section-formula ratio k:1 (B=(k·C+A)/(k+1) solved
 * per-axis, same k must satisfy all three); sphere = distance-r locus, 3D analogue of a circle;
 * perp-bisector locus in 3D is a PLANE (not a line, unlike 2D — this is the one qualitative
 * jump worth landing clearly); ellipsoid sum-of-distances=2a with b²=a²-c² (direct 3D analogue
 * of the 2D ellipse); incentre = side-length-weighted vertex average, contrasted with the
 * centroid's plain average in the closing guardrail; tetrahedron centroid divides by 4 (one
 * more vertex than a triangle).
 *
 * reveals_english = [0, 8.62, 19.54, 36.95, 54.95, 67.16, 83.11, 101.55] (8 values, beats 0-7).
 * board_content seq1 (heading) -> title (always-on). seq2..seq8 -> beats 1-7, matching JSON's
 * own emphasis: seq2 centroid HIGH, seq3 collinear normal, seq4 sphere HIGH, seq5 perp-bisector
 * normal, seq6 ellipsoid normal, seq7 incentre normal, seq8 guardrail HIGH/red-margin.
 *
 * NOTATION: \frac{a}{b} flattened "a/b" throughout. Subscripts (x_1,y_1,z_1...) written as
 * plain digit suffixes "x1,y1,z1" (same convention as Sec1's 2D centroid formula — no true
 * subscript, per the numeric-subscript rule these would need non-script Anek anyway, and plain
 * suffixes read cleanly). \iff -> "⇔", \Rightarrow -> "⇒" (both confirmed-safe fallback
 * operators). "\ldots" in the incentre formula (the JSON's own shorthand for the omitted
 * analogous y/z terms) -> "…" (confirmed native to both fonts). "·" for implied products
 * (native, 2nd glyph audit). \text{...} labels ("sphere:", "collinear", "perp. bisector of AB:",
 * "ellipsoid:") kept in English for both languages, matching Sec13's precedent (segments_hinglish
 * itself code-switches these words, e.g. "Sphere: centre a, b, c se distance r..."). All 6
 * formula strings are byte-identical between English and Hinglish (symbolic, language-agnostic
 * per spec) — only the title and closing guardrail prose differ by language.
 *
 * WIDTH ESTIMATES (0.50×size×chars, Anek non-script, over-estimate; single centered column,
 * all well inside the 1008px safe span x36-1044):
 *   b1 chip "G = ((x1+x2+x3)/3, (y1+y2+y3)/3, (z1+z2+z3)/3)"      46ch@15 -> 345px (chip w386)
 *   b2 text "Collinear: (k·x3+x1)/(k+1) = x2, same k for y & z"   50ch@16 -> 400px
 *   b3 chip "Sphere: (x-a)² + (y-b)² + (z-c)² = r²"                38ch@16 -> 304px (chip w338)
 *   b4 text "Perp. bisector of AB: PA = PB ⇒ a plane"              40ch@16 -> 320px
 *   b5 text "Ellipsoid: sum of distances = 2a, b² = a² - c²"       48ch@16 -> 384px
 *   b6 L1   "I = ((a·x1+b·x2+c·x3)/(a+b+c), …)"                    34ch@16 -> 272px
 *   b6 L2   "a = |BC|,  b = |CA|,  c = |AB|"                       31ch@14 -> 217px
 *   b7 L1   "Centroid = plain average; incentre = weighted avg."   56ch@14 -> 392px (start-anchor)
 *   b7 L2   "Tetrahedron centroid: divide by 4."                   35ch@14 -> 245px (start-anchor)
 * Widest is b2 at 400px centered -> x340..740, 300px+ clear of both safe-x edges.
 *
 * Layout plan (title always-on script/red; b1-b6 centered x540, Anek box top=y-0.78×size,
 * bottom=y+0.31×size; Kalam title top=y-1.3×size, bottom=y+0.5×size):
 *  title            | T mid script sz24 | x540 y62  | box y30.8..74.0
 *  b1 HIGH  | Chip sz15 w386 h40         | x347 y100..140
 *  b2 normal| T mid sz16                 | x540 y180 | box y167.52..184.96
 *  b3 HIGH  | Chip sz16 w338 h40         | x371 y212..252
 *  b4 normal| T mid sz16                 | x540 y294 | box y281.52..298.96
 *  b5 normal| T mid sz16                 | x540 y338 | box y325.52..342.96
 *  b6 normal| T mid sz16 / sz14 (2 lines)| x540 y384 / y416 | boxes y371.52..388.96 / 405.08..420.34
 *  b7 HIGH  | Draw bar x332 y452..520 + T start sz14 x2 lines | x348 y474 / y504
 * Vertical gaps (box-bottom[n] -> box-top[n+1]): title->b1 26, b1->b2 27.52, b2->b3 27.04,
 * b3->b4 29.52, b4->b5 26.56, b5->b6L1 28.56, b6L1->b6L2 16.12 (same-idea, >=14 floor),
 * b6L2->b7bar 31.66, b7L1->b7L2 14.74 (same-idea, >=14 floor). All group-to-group gaps clear
 * the >=24px floor; same-idea line pairs clear the >=14px floor. Content bottom (b7 L2 box
 * bottom 508.34) leaves 87.66px of unused margin above the y596 safe floor.
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, RED, AMBER, AMBER_DARK, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch11Sec7({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={24} fill={RED} anchor="middle" script>
          {t("The applications toolkit", "Applications ka Toolkit")}
        </T>
      </Fade>

      {/* beat 1 — centroid (HIGH) */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <Chip x={347} y={100} w={386} h={40} fill={CREAM} stroke={AMBER} textFill={AMBER_DARK} size={15} script={false}>
          G = ((x1+x2+x3)/3, (y1+y2+y3)/3, (z1+z2+z3)/3)
        </Chip>
      </Fade>

      {/* beat 2 — collinearity (normal) */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={540} y={180} size={16} fill={INK} anchor="middle" weight={700}>
          Collinear: (k·x3+x1)/(k+1) = x2, same k for y &amp; z
        </T>
      </Fade>

      {/* beat 3 — sphere (HIGH) */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <Chip x={371} y={212} w={338} h={40} fill={CREAM} stroke={AMBER} textFill={AMBER_DARK} size={16} script={false}>
          Sphere: (x-a)² + (y-b)² + (z-c)² = r²
        </Chip>
      </Fade>

      {/* beat 4 — perpendicular bisector plane (normal) */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={294} size={16} fill={INK} anchor="middle" weight={700}>
          Perp. bisector of AB: PA = PB ⇒ a plane
        </T>
      </Fade>

      {/* beat 5 — ellipsoid (normal) */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={338} size={16} fill={INK} anchor="middle" weight={700}>
          Ellipsoid: sum of distances = 2a, b² = a² - c²
        </T>
      </Fade>

      {/* beat 6 — incentre, the JEE extension (normal, 2 lines) */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={384} size={16} fill={INK} anchor="middle" weight={700}>
          I = ((a·x1+b·x2+c·x3)/(a+b+c), …)
        </T>
        <T x={540} y={416} size={14} fill={INK} anchor="middle">
          a = |BC|,  b = |CA|,  c = |AB|
        </T>
      </Fade>

      {/* beat 7 — guardrail: centroid vs incentre, tetrahedron extension (HIGH, red-margin) */}
      <Draw on={beat >= 7} delay={dl(7, 0)} d="M 332 452 L 332 520" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.5)}>
        <T x={348} y={474} size={14} fill={RED} anchor="start" weight={700}>
          {t("Centroid = plain average; incentre = weighted average.", "Centroid = seedha average; incentre = weighted average.")}
        </T>
        <T x={348} y={504} size={14} fill={RED} anchor="start" weight={700}>
          {t("Tetrahedron centroid: divide by 4.", "Tetrahedron ka centroid: 4 se divide karo.")}
        </T>
      </Fade>
    </Scene>
  );
}
