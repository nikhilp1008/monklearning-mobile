/**
 * M11 Ch10 · Section 26 — "Example 3 (JEE Main): build from foci and vertices"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples — Subtopic 4 (The Ellipse), sec 26 of 27.
 *
 * board_content seq1 heading -> always-on title. seq2..seq9 (8 items) gate at
 * beat>=1..beat>=8. reveals_english = [0, 7.68, 20.99, 30.04, 41.47, 48.9,
 * 59.73, 74.84, 84.14]; reveals_hinglish = [0, 6.4, 20.22, 29.87, 40.53,
 * 47.96, 58.37, 71.51, 80.21].
 *
 * Example 3: vertices(±6,0),foci(±4,0) -> a=6,c=4 -> b²=36-16=20 (hand-
 * verified ✓) -> x²/36+y²/20=1. Example 4: e=1/2, major axis LENGTH 10
 * (so a=5, half of it) -> c=ae=2.5 -> b²=25-6.25=18.75 (hand-verified
 * 2.5²=6.25 ✓) -> x²/25+y²/18.75=1. Closes on the a-vs-2a guardrail, the
 * exact trap Example 4 was built to teach.
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, T, Chip, INK, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch10Sec26({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true}>
        <T x={540} y={62} size={20} fill={RED} anchor="middle" script>
          {t("Example 3 (JEE Main): build from foci and vertices", "Example 3 (JEE Main): foci aur vertices se banao")}
        </T>
      </Fade>

      {/* beat 1 — given */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={104} size={14} fill={INK} anchor="middle">
          {t(
            "Vertices (±6,0), foci (±4,0): a = 6, c = 4, major axis on x.",
            "Vertices (±6,0), foci (±4,0): a = 6, c = 4, major axis x par."
          )}
        </T>
      </Fade>

      {/* beat 2 — b² */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={540} y={135} size={14} fill={INK} anchor="middle">b² = a² − c² = 36 − 16 = 20</T>
      </Fade>

      {/* beat 3 — boxed equation */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <Chip x={420} y={158} w={240} h={44} fill="#FCF4E0" stroke={GREEN} textFill={GREEN} size={16} script={false}>
          x²/36 + y²/20 = 1
        </Chip>
      </Fade>

      {/* beat 4 — Example 4 header */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={540} y={232} size={16} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("Example 4 (JEE Adv): from eccentricity and a length", "Example 4 (JEE Adv): eccentricity aur length se")}
        </T>
      </Fade>

      {/* beat 5 — given */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={540} y={262} size={14} fill={INK} anchor="middle">
          {t(
            "Foci on x-axis, e = 1/2, major axis length 10 → a = 5.",
            "Foci x-axis par, e = 1/2, major axis length 10 → a = 5."
          )}
        </T>
      </Fade>

      {/* beat 6 — c, b² */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={540} y={290} size={14} fill={INK} anchor="middle">c = ae = 5·(1/2) = 2.5,  b² = 25 − 6.25 = 18.75</T>
      </Fade>

      {/* beat 7 — boxed equation (HIGH) */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <Chip x={400} y={314} w={280} h={46} fill="#FCF4E0" stroke={AMBER_DARK} textFill={AMBER_DARK} size={16} script={false}>
          x²/25 + y²/18.75 = 1
        </Chip>
      </Fade>

      {/* beat 8 — guardrail (red, HIGH) */}
      <Fade on={beat >= 8} delay={dl(8, 0)}>
        <T x={540} y={392} size={14} fill={RED} anchor="middle" weight={700}>
          {t("Half the major axis is a; never plug the full", "Major axis ka aadha hi a hai; poori length")}
        </T>
        <T x={540} y={416} size={14} fill={RED} anchor="middle" weight={700}>
          {t("length 2a into a formula.", "2a kabhi formula mein mat daalo.")}
        </T>
      </Fade>
    </Scene>
  );
}
