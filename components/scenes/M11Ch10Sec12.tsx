/**
 * M11 Ch10 · Section 12 — "Example 3 (JEE Main): radius from a point, then position test"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples — Subtopic 2 (The Circle), sec 12 of 13.
 *
 * board_content seq1 heading -> always-on title. seq2..seq9 (8 items) gate at
 * beat>=1..beat>=8. reveals_english = [0, 9.56, 15.45, 24.49, 33.54, 52.57,
 * 59.99, 77.31, 98.65]; reveals_hinglish = [0, 8.53, 14.17, 22.78, 30.81,
 * 43.95, 51.63, 64.68, 85.25].
 *
 * Example 3: centre(2,-1) through (5,3) -> r=√(3²+4²)=5 (hand-verified:
 * 5-2=3, 3-(-1)=4, √(9+16)=√25=5 ✓) -> (x-2)²+(y+1)²=25 -> S1(4,2)=
 * 16+4-16+4-20=-12<0 -> INSIDE (hand-verified arithmetic ✓).
 * Example 4: circle through O(0,0),A(6,0),B(0,8) -> c=0,g=-3,f=-4
 * (hand-verified: at A, 36+12g=0->g=-3; at B, 64+16f=0->f=-4 ✓) ->
 * x²+y²-6x-8y=0, centre(3,4), r=5 -> S1(7,9)=49+81-42-72=16 (hand-verified:
 * 130-114=16 ✓), tangent length = √16 = 4.
 *
 * Beats:
 *  0(title,always-on) | "Example 3 (JEE Main): radius from a point, then position test"
 *  1 | given: centre(2,-1), through(5,3)
 *  2 | r = √(3²+4²) = √(9+16) = 5
 *  3 | boxed: (x-2)²+(y+1)²=25
 *  4 | test(4,2): S1=16+4-16+4-20=-12<0 -> INSIDE
 *  5 | Example 4 header
 *  6 | through O,A,B -> c=0,g=-3,f=-4
 *  7 | boxed: x²+y²-6x-8y=0, centre(3,4), r=5
 *  8 | (HIGH) S1(7,9)=49+81-42-72=16, boxed tangent length=4
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, T, Chip, INK, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch10Sec12({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true}>
        <T x={540} y={62} size={20} fill={RED} anchor="middle" script>
          {t("Example 3 (JEE Main): radius from a point, then position test", "Example 3 (JEE Main): point se radius, phir position test")}
        </T>
      </Fade>

      {/* beat 1 — given */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={104} size={15} fill={INK} anchor="middle">
          {t("Centre (2, −1), passing through (5, 3).", "Centre (2, −1), (5, 3) se guzarta hai.")}
        </T>
      </Fade>

      {/* beat 2 — radius */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={540} y={135} size={15} fill={INK} anchor="middle">r = √(3² + 4²) = √(9 + 16) = 5</T>
      </Fade>

      {/* beat 3 — boxed equation */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <Chip x={350} y={158} w={380} h={44} fill="#FCF4E0" stroke={GREEN} textFill={GREEN} size={16} script={false}>
          (x − 2)² + (y + 1)² = 25
        </Chip>
      </Fade>

      {/* beat 4 — position test */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={540} y={228} size={14} fill={INK} anchor="middle">
          {t("Test (4, 2): S₁ = 16 + 4 − 16 + 4 − 20", "Test (4, 2): S₁ = 16 + 4 − 16 + 4 − 20")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <T x={540} y={254} size={15} fill={GREEN} anchor="middle" weight={700}>
          {t("= −12 < 0 → INSIDE", "= −12 < 0 → ANDAR")}
        </T>
      </Fade>

      {/* beat 5 — Example 4 header */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={540} y={290} size={17} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("Example 4 (JEE Adv): three points, then tangent length", "Example 4 (JEE Adv): teen points, phir tangent length")}
        </T>
      </Fade>

      {/* beat 6 — three points -> c,g,f */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={540} y={322} size={14} fill={INK} anchor="middle">
          {t("Through O(0,0), A(6,0), B(0,8):", "O(0,0), A(6,0), B(0,8) se guzarte hue:")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <T x={540} y={348} size={15} fill={AMBER_DARK} anchor="middle" weight={700}>→ c = 0, g = −3, f = −4</T>
      </Fade>

      {/* beat 7 — boxed circle + centre/radius */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <Chip x={250} y={368} w={580} h={46} fill="#FCF4E0" stroke={GREEN} textFill={GREEN} size={15} script={false}>
          x² + y² − 6x − 8y = 0,  centre (3, 4),  r = 5
        </Chip>
      </Fade>

      {/* beat 8 — HIGH: tangent length */}
      <Fade on={beat >= 8} delay={dl(8, 0)}>
        <T x={540} y={442} size={15} fill={INK} anchor="middle">S₁(7, 9) = 49 + 81 − 42 − 72 = 16</T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 0.5)}>
        <Chip x={390} y={462} w={300} h={44} fill="#FCF4E0" stroke={AMBER_DARK} textFill={AMBER_DARK} size={16} script={false}>
          {t("Tangent length ℓ = √16 = 4", "Tangent length ℓ = √16 = 4")}
        </Chip>
      </Fade>
    </Scene>
  );
}
