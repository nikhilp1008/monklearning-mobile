/**
 * M11 Ch10 · Section 32 — "Example 1 (CBSE): all elements from the equation"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples — Subtopic 5 (The Hyperbola), sec 32 of 34.
 *
 * board_content seq1 heading -> always-on title. seq2..seq8 (7 items) gate at
 * beat>=1..beat>=7. reveals_english = [0, 7.94, 15.87, 31.74, 47.27, 63.32,
 * 79.62, 92.67]; reveals_hinglish = [0, 9.47, 16.04, 30.72, 44.54, 55.3,
 * 70.49, 82.18].
 *
 * Example 1: x²/16-y²/9=1 -> a=4,b=3 -> c=√(16+9)=5, e=1.25 (hand-verified
 * ✓) -> boxed vertices/foci/asymptotes. Example 2 directly exercises Sec30's
 * flagged guardrail: y²/9-x²/25=1 has b²=25 > a²=9 — perfectly normal for a
 * hyperbola since the POSITIVE term (not the larger denominator) decides
 * the transverse axis. Styled AMBER not RED here since the JSON itself
 * marks this beat 'normal' emphasis, not red-margin/HIGH — it's a reinforced
 * insight, not a fresh warning.
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, T, Chip, INK, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch10Sec32({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true}>
        <T x={540} y={62} size={21} fill={RED} anchor="middle" script>
          {t("Example 1 (CBSE): all elements from the equation", "Example 1 (CBSE): equation se sab elements")}
        </T>
      </Fade>

      {/* beat 1 — equation */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={104} size={17} fill={INK} anchor="middle">x²/16 − y²/9 = 1</T>
      </Fade>

      {/* beat 2 — orientation + match */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={540} y={135} size={13} fill={INK} anchor="middle">
          {t(
            "x² positive: opens left-right. a² = 16, b² = 9 → a = 4, b = 3.",
            "x² positive: left-right khulta hai. a² = 16, b² = 9 → a = 4, b = 3."
          )}
        </T>
      </Fade>

      {/* beat 3 — c, e */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={540} y={160} size={14} fill={INK} anchor="middle">c = √(16 + 9) = 5,  e = 5/4 = 1.25</T>
      </Fade>

      {/* beat 4 — boxed elements */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <Chip x={260} y={182} w={560} h={44} fill="#FCF4E0" stroke={GREEN} textFill={GREEN} size={14} script={false}>
          vertices (±4,0),  foci (±5,0),  asymptotes y = ±(3/4)x
        </Chip>
      </Fade>

      {/* beat 5 — Example 2 header */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={540} y={250} size={15} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t(
            "Example 2 (JEE Main): a larger denominator under the negative term",
            "Example 2 (JEE Main): negative term ke neeche bada denominator"
          )}
        </T>
      </Fade>

      {/* beat 6 — equation */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={540} y={282} size={17} fill={INK} anchor="middle">y²/9 − x²/25 = 1</T>
      </Fade>

      {/* beat 7 — the sign-not-size reinforcement */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <T x={540} y={314} size={13} fill={INK} anchor="middle">
          {t(
            "y² positive → opens UP-DOWN: a² = 9 (transverse), b² = 25;",
            "y² positive → UP-DOWN khulta hai: a² = 9 (transverse), b² = 25;"
          )}
        </T>
        <T x={540} y={338} size={13} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("note b > a is FINE for a hyperbola.", "b > a hyperbola ke liye bilkul FINE hai.")}
        </T>
      </Fade>
    </Scene>
  );
}
