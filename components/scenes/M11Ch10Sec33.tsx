/**
 * M11 Ch10 · Section 33 — "Example 3 (JEE Main): build from vertices and foci"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples — Subtopic 5 (The Hyperbola), sec 33 of 34.
 *
 * board_content seq1 heading -> always-on title. seq2..seq9 (8 items) gate at
 * beat>=1..beat>=8. reveals_english = [0, 6.91, 20.14, 30.89, 42.41, 51.2,
 * 61.18, 79.1, 96.6]; reveals_hinglish = [0, 6.74, 17.66, 28.07, 36.95,
 * 46.59, 53.5, 67.67, 84.14].
 *
 * Example 3: vertices(±3,0),foci(±5,0) -> a=3,c=5 -> b²=25-9=16 (hand-
 * verified ✓) -> x²/9-y²/16=1. Example 4: e=2, LR=12 -> e²=1+b²/a²=4 ->
 * b²/a²=3 -> substitute into 2b²/a=12: 2(3a²)/a=6a=12 -> a=2, b²=3(4)=12
 * (hand-verified 6*2=12 ✓, 3*4=12 ✓) -> x²/4-y²/12=1.
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, T, Chip, INK, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch10Sec33({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true}>
        <T x={540} y={62} size={20} fill={RED} anchor="middle" script>
          {t("Example 3 (JEE Main): build from vertices and foci", "Example 3 (JEE Main): vertices aur foci se banao")}
        </T>
      </Fade>

      {/* beat 1 — given */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={104} size={14} fill={INK} anchor="middle">
          {t(
            "Vertices (±3,0), foci (±5,0): a = 3, c = 5, opens left-right.",
            "Vertices (±3,0), foci (±5,0): a = 3, c = 5, left-right khulta hai."
          )}
        </T>
      </Fade>

      {/* beat 2 — b² */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={540} y={135} size={14} fill={INK} anchor="middle">b² = c² − a² = 25 − 9 = 16</T>
      </Fade>

      {/* beat 3 — boxed equation */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <Chip x={420} y={158} w={240} h={44} fill="#FCF4E0" stroke={GREEN} textFill={GREEN} size={16} script={false}>
          x²/9 − y²/16 = 1
        </Chip>
      </Fade>

      {/* beat 4 — Example 4 header */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={540} y={232} size={16} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("Example 4 (JEE Adv): from eccentricity and latus rectum", "Example 4 (JEE Adv): eccentricity aur latus rectum se")}
        </T>
      </Fade>

      {/* beat 5 — given */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={540} y={262} size={14} fill={INK} anchor="middle">
          {t("e = 2 and latus rectum = 12, foci on the x-axis.", "e = 2 aur latus rectum = 12, foci x-axis par.")}
        </T>
      </Fade>

      {/* beat 6 — set up two relations */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={540} y={290} size={14} fill={INK} anchor="middle">e² = 1 + b²/a² ⇒ b²/a² = 3;  2b²/a = 12</T>
      </Fade>

      {/* beat 7 — solve */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <T x={540} y={316} size={14} fill={INK} anchor="middle">b² = 3a² ⇒ 6a = 12 ⇒ a = 2,  b² = 12</T>
      </Fade>

      {/* beat 8 — boxed result (HIGH) */}
      <Fade on={beat >= 8} delay={dl(8, 0)}>
        <Chip x={400} y={340} w={280} h={46} fill="#FCF4E0" stroke={AMBER_DARK} textFill={AMBER_DARK} size={17} script={false}>
          x²/4 − y²/12 = 1
        </Chip>
      </Fade>
    </Scene>
  );
}
