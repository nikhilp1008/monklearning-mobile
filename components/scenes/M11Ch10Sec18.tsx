/**
 * M11 Ch10 · Section 18 — "Example 1 (CBSE): read elements from the equation"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples — Subtopic 3 (The Parabola), sec 18 of 20.
 *
 * board_content seq1 heading -> always-on title. seq2..seq8 (7 items) gate at
 * beat>=1..beat>=7. reveals_english = [0, 7.34, 12.54, 23.89, 36.52, 45.74,
 * 59.05, 72.19]; reveals_hinglish = [0, 8.28, 13.23, 22.27, 33.79, 43.35,
 * 54.1, 66.22].
 *
 * Example 1: y²=12x -> 4a=12 -> a=3 -> focus(3,0), directrix x=-3, LR=12
 * (hand-verified: 4a=4*3=12 ✓). Example 2: focus(0,-2), directrix y=2 ->
 * vertex(0,0) -> x squared, opens down, a=2 -> x²=-4ay=-8y (hand-verified:
 * -4*2=-8 ✓).
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, T, Chip, INK, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch10Sec18({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true}>
        <T x={540} y={62} size={22} fill={RED} anchor="middle" script>
          {t("Example 1 (CBSE): read elements from the equation", "Example 1 (CBSE): equation se elements padho")}
        </T>
      </Fade>

      {/* beat 1 — equation */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={104} size={18} fill={INK} anchor="middle">y² = 12x</T>
      </Fade>

      {/* beat 2 — match and orientation */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={540} y={138} size={14} fill={INK} anchor="middle">
          {t("4a = 12 → a = 3 · y² positive → opens RIGHT", "4a = 12 → a = 3 · y² positive → RIGHT khulta hai")}
        </T>
      </Fade>

      {/* beat 3 — boxed elements */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <Chip x={300} y={164} w={480} h={44} fill="#FCF4E0" stroke={GREEN} textFill={GREEN} size={16} script={false}>
          focus (3, 0),  directrix x = −3,  LR = 12
        </Chip>
      </Fade>

      {/* beat 4 — Example 2 header */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={540} y={250} size={16} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("Example 2 (JEE Main): build the equation from focus and directrix", "Example 2 (JEE Main): focus aur directrix se equation banao")}
        </T>
      </Fade>

      {/* beat 5 — given */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={540} y={282} size={14} fill={INK} anchor="middle">
          {t("Focus (0, −2), directrix y = 2 → vertex midway = origin.", "Focus (0, −2), directrix y = 2 → vertex beech mein = origin.")}
        </T>
      </Fade>

      {/* beat 6 — orientation */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={540} y={308} size={14} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("x² (axis = y-axis), opens DOWN, a = 2.", "x² (axis = y-axis), DOWN khulta hai, a = 2.")}
        </T>
      </Fade>

      {/* beat 7 — boxed final equation */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <Chip x={450} y={332} w={180} h={46} fill="#FCF4E0" stroke={GREEN} textFill={GREEN} size={18} script={false}>
          x² = −8y
        </Chip>
      </Fade>
    </Scene>
  );
}
