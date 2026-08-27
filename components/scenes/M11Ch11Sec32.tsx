/**
 * M11 Ch11 · Section 32 — "The distance and section toolkit"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: formulas — a recap card gathering every distance/section-formula result from this
 * subtopic (distance PQ, distance-from-origin OP, internal/external section, midpoint, the k:1
 * form, centroid). Same discipline as this chapter's sibling toolkit card M11Ch11Sec7 ("The
 * applications toolkit"): NOT a derivation — one formula per beat, HIGH-emphasis rows boxed as a
 * Chip (CREAM fill / AMBER stroke / AMBER_DARK text, script=false per the numeric-subscript-digit
 * font rule), normal-emphasis rows as plain bold ink text, closing red-margin guardrail as a red
 * bar + red text. All formulas are genuinely 3D (every row carries an explicit z-term).
 *
 * board_content seq1 (heading) -> title (always-on). seq2..seq9 -> beats 1-8, matching JSON's own
 * emphasis: seq2 PQ HIGH, seq3 OP normal, seq4 internal HIGH, seq5 external normal, seq6 midpoint
 * normal, seq7 k:1 HIGH, seq8 centroid G normal, seq9 guardrail HIGH/red-margin.
 * reveals_english = [0, 8.87, 23.81, 37.8, 53.08, 65.71, 78.25, 93.18, 98.64] (9 values, beats 0-8).
 * reveals_hinglish = [0, 7.77, 22.95, 34.39, 46.93, 60.67, 70.66, 84.65, 93.34].
 *
 * NOTATION: \sqrt{} -> "√(...)" (confirmed native glyph, both fonts). \frac{a}{b} flattened
 * "a/b". Subscripts (x_1,y_1,z_1,x_2,y_2,z_2,x_3,y_3,z_3) written as plain digit suffixes
 * "x1,x2,x3" (same convention as sibling Sec7's centroid formula — no true subscript needed).
 * "·" for implied products (native, 2nd glyph audit). All formula strings are byte-identical
 * between English and Hinglish (symbolic, language-agnostic per spec) — only the title and
 * closing guardrail's second line differ by language.
 *
 * WIDTH ESTIMATES (0.50×size×chars, Anek non-script, over-estimate; single centered column x540):
 *   b1 chip "PQ = √((x2-x1)² + (y2-y1)² + (z2-z1)²)"                 38ch@15 -> 285px (chip w320)
 *   b2 text "OP = √(x1² + y1² + z1²)"                                 23ch@16 -> 184px
 *   b3 chip "Internal m:n = ((m·x2+n·x1)/(m+n), (m·y2+n·y1)/(m+n), (m·z2+n·z1)/(m+n))"
 *                                                                      72ch@13 -> 468px (chip w510)
 *   b4 text "External m:n = ((m·x2-n·x1)/(m-n), (m·y2-n·y1)/(m-n), (m·z2-n·z1)/(m-n))"
 *                                                                      72ch@13 -> 468px
 *   b5 text "M = ((x1+x2)/2, (y1+y2)/2, (z1+z2)/2)"                   37ch@16 -> 296px
 *   b6 chip "k : 1 = ((k·x2+x1)/(k+1), (k·y2+y1)/(k+1), (k·z2+z1)/(k+1))"
 *                                                                      59ch@14 -> 413px (chip w455)
 *   b7 text "G = ((x1+x2+x3)/3, (y1+y2+y3)/3, (z1+z2+z3)/3)"          46ch@16 -> 368px
 *   b8 L1   "k > 0 → internal; k < 0 → external."                     35ch@13 -> 228px (start x416)
 *   b8 L2   "Tetrahedron centroid: divide by 4."                      35ch@13 -> 228px
 * Widest is b3/b4 at 468px centered -> x306..774, well clear of both safe-x edges (36/1044).
 *
 * Layout plan (title always-on script/red x540 y62; b1-b7 centered x540, Anek box
 * top=y-0.78×size, bottom=y+0.31×size; Kalam title top=y-1.3×size, bottom=y+0.5×size):
 *  title            | T mid script sz24 red | x540 y62  | box y30.8..74.0
 *  b1 HIGH  | Chip sz15 w320 h38  | x380 y100..138
 *  b2 normal| T mid sz16          | x540 y177 | box y164.4..181.6
 *  b3 HIGH  | Chip sz13 w510 h34  | x285 y206..240
 *  b4 normal| T mid sz13          | x540 y274 | box y263.9..278.2
 *  b5 normal| T mid sz16          | x540 y314 | box y301.5..318.6
 *  b6 HIGH  | Chip sz14 w455 h36  | x312 y344..380
 *  b7 normal| T mid sz16          | x540 y417 | box y404.5..421.6
 *  b8 HIGH  | Draw bar x400 y446..510 + T start sz13 x2 lines | x416 y468 / y498
 * Vertical gaps (box-bottom[n] -> box-top[n+1]): title->b1 26, b1->b2 26.4, b2->b3 24.4,
 * b3->b4 23.9 (~24), b4->b5 23.3 (~24, rounded target), b5->b6 25.4, b6->b7 24.5,
 * b7->b8bar 25.04, b8L1->b8L2 15.8 (same-idea, >=14 floor). All group-to-group gaps clear (or
 * are within rounding of) the >=24px floor; content bottom (b8 L2 box bottom ~502) leaves ~94px
 * of unused margin above the y596 safe floor — re-checked against the verifier's real
 * measurements after first render, not just the estimate.
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, RED, AMBER, AMBER_DARK, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch11Sec32({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={24} fill={RED} anchor="middle" script>
          {t("The distance and section toolkit", "Distance aur section ka toolkit")}
        </T>
      </Fade>

      {/* beat 1 — distance PQ (HIGH) */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <Chip x={380} y={100} w={320} h={38} fill={CREAM} stroke={AMBER} textFill={AMBER_DARK} size={15} script={false}>
          PQ = √((x2-x1)² + (y2-y1)² + (z2-z1)²)
        </Chip>
      </Fade>

      {/* beat 2 — distance from origin OP (normal) */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={540} y={177} size={16} fill={INK} anchor="middle" weight={700}>
          OP = √(x1² + y1² + z1²)
        </T>
      </Fade>

      {/* beat 3 — internal section m:n (HIGH) */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <Chip x={285} y={206} w={510} h={34} fill={CREAM} stroke={AMBER} textFill={AMBER_DARK} size={13} script={false}>
          Internal m:n = ((m·x2+n·x1)/(m+n), (m·y2+n·y1)/(m+n), (m·z2+n·z1)/(m+n))
        </Chip>
      </Fade>

      {/* beat 4 — external section m:n (normal) */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={274} size={13} fill={INK} anchor="middle" weight={700}>
          External m:n = ((m·x2-n·x1)/(m-n), (m·y2-n·y1)/(m-n), (m·z2-n·z1)/(m-n))
        </T>
      </Fade>

      {/* beat 5 — midpoint (normal) */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={314} size={16} fill={INK} anchor="middle" weight={700}>
          M = ((x1+x2)/2, (y1+y2)/2, (z1+z2)/2)
        </T>
      </Fade>

      {/* beat 6 — the k:1 workhorse form (HIGH) */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <Chip x={312} y={344} w={455} h={36} fill={CREAM} stroke={AMBER} textFill={AMBER_DARK} size={14} script={false}>
          k : 1 = ((k·x2+x1)/(k+1), (k·y2+y1)/(k+1), (k·z2+z1)/(k+1))
        </Chip>
      </Fade>

      {/* beat 7 — centroid of a triangle (normal) */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={540} y={417} size={16} fill={INK} anchor="middle" weight={700}>
          G = ((x1+x2+x3)/3, (y1+y2+y3)/3, (z1+z2+z3)/3)
        </T>
      </Fade>

      {/* beat 8 — guardrail: k's sign gives internal/external; tetrahedron denominator 4 */}
      <Draw on={beat >= 8} delay={dl(8, 0)} d="M 400 446 L 400 510" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 8} delay={dl(8, 0.5)}>
        <T x={416} y={468} size={13} fill={RED} anchor="start" weight={700}>
          k &gt; 0 → internal; k &lt; 0 → external.
        </T>
        <T x={416} y={498} size={13} fill={RED} anchor="start" weight={700}>
          {t("Tetrahedron centroid: divide by 4.", "Tetrahedron ka centroid: 4 se divide karo.")}
        </T>
      </Fade>
    </Scene>
  );
}
