/**
 * M11 Ch10 · Section 19 — "Example 3 (JEE Main): equation from vertex and focus"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples — Subtopic 3 (The Parabola), sec 19 of 20.
 *
 * board_content seq1 heading -> always-on title. seq2..seq9 (8 items) gate at
 * beat>=1..beat>=8. reveals_english = [0, 7.25, 22.27, 35.75, 44.71, 58.45,
 * 66.3, 75.78, 86.1]; reveals_hinglish = [0, 7.17, 17.49, 30.89, 41.22,
 * 51.8, 59.14, 68.18, 77.14].
 *
 * Example 3: vertex(0,0), focus(5,0) -> a=5 -> y²=20x (hand-verified 4*5=20 ✓).
 * Example 4: real parabolic dish, 20cm across/5cm deep -> rim point (10,5) ->
 * 10²=4a(5) -> 100=20a -> a=5 (hand-verified ✓) -> x²=20y, focus(0,5). The
 * diagram's curve is built from the SAME numbers as the algebra: rim dots at
 * screen (480,390)/(600,390) and the curve (parametrized to pass through
 * them) land at exactly those points at s=±60 by construction, so the
 * picture and the equation cannot silently disagree.
 */

import React from "react";
import { Circle } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, MUTED, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';
import { curveD } from "./math-kit";

const V4 = { x: 540, y: 420 };
const A4 = 30;
const RIM_L = { x: V4.x - 60, y: V4.y - 30 };
const RIM_R = { x: V4.x + 60, y: V4.y - 30 };
const FOCUS4 = { x: V4.x, y: V4.y - A4 };
const CURVE4 = curveD(
  Array.from({ length: 13 }, (_, i) => -60 + i * 10).map((s) => ({
    x: V4.x + s,
    y: V4.y - (s * s) / (4 * A4),
  }))
);

export default function M11Ch10Sec19({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true}>
        <T x={540} y={62} size={20} fill={RED} anchor="middle" script>
          {t("Example 3 (JEE Main): equation from vertex and focus", "Example 3 (JEE Main): vertex aur focus se equation")}
        </T>
      </Fade>

      {/* beat 1 — given */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={104} size={14} fill={INK} anchor="middle">
          {t(
            "Vertex (0,0), focus (5,0): focus on +x-axis → opens right, a = 5.",
            "Vertex (0,0), focus (5,0): focus +x-axis par → right khulta hai, a = 5."
          )}
        </T>
      </Fade>

      {/* beat 2 — boxed equation */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <Chip x={450} y={128} w={180} h={42} fill="#FCF4E0" stroke={GREEN} textFill={GREEN} size={17} script={false}>
          y² = 20x
        </Chip>
      </Fade>

      {/* beat 3 — Example 4 header */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={540} y={220} size={17} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("Example 4 (JEE Adv): a parabolic reflector", "Example 4 (JEE Adv): ek parabolic reflector")}
        </T>
      </Fade>

      {/* beat 4 — setup */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={540} y={248} size={13} fill={INK} anchor="middle">
          {t(
            "Dish 20cm across, 5cm deep. Vertex at origin, opens up: x² = 4ay.",
            "Dish 20cm chaudi, 5cm gehri. Vertex origin par, UP khulti: x² = 4ay."
          )}
        </T>
      </Fade>

      {/* beat 5 — rim point + diagram */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={540} y={280} size={13} fill={INK} anchor="middle">
          {t("Rim point (10, 5) lies on the curve.", "Rim point (10, 5) curve par hai.")}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 0.4)} d={CURVE4} stroke={INK} sw={2} dur={0.6} />
      <Fade on={beat >= 5} delay={dl(5, 1.0)}>
        <Circle cx={V4.x} cy={V4.y} r={3} fill={INK} />
        <Circle cx={RIM_L.x} cy={RIM_L.y} r={3} fill={MUTED} />
        <T x={RIM_L.x - 8} y={RIM_L.y - 12} size={10} fill={MUTED} anchor="end">(−10, 5)</T>
        <Circle cx={RIM_R.x} cy={RIM_R.y} r={3} fill={MUTED} />
        <T x={RIM_R.x + 8} y={RIM_R.y - 12} size={10} fill={MUTED} anchor="start">(10, 5)</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.4)}>
        <Circle cx={FOCUS4.x} cy={FOCUS4.y} r={3.5} fill={AMBER_DARK} />
        <T x={FOCUS4.x + 8} y={FOCUS4.y + 16} size={11} fill={AMBER_DARK} anchor="start" weight={700}>F(0, 5)</T>
      </Fade>

      {/* beat 6 — algebra */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={540} y={460} size={15} fill={INK} anchor="middle">10² = 4a(5)  ⇒  100 = 20a  ⇒  a = 5</T>
      </Fade>

      {/* beat 7 — boxed result (HIGH) */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <Chip x={370} y={482} w={340} h={44} fill="#FCF4E0" stroke={AMBER_DARK} textFill={AMBER_DARK} size={17} script={false}>
          x² = 20y,  focus (0, 5)
        </Chip>
      </Fade>

      {/* beat 8 — guardrail (red, HIGH) */}
      <Fade on={beat >= 8} delay={dl(8, 0)}>
        <T x={540} y={556} size={13} fill={RED} anchor="middle" weight={700}>
          {t("Receiver sits at the focus, 5cm above vertex —", "Receiver focus par baithta hai, vertex se 5cm upar —")}
        </T>
        <T x={540} y={578} size={13} fill={RED} anchor="middle" weight={700}>
          {t("the reflector property at work.", "reflector property yahi kaam karti hai.")}
        </T>
      </Fade>
    </Scene>
  );
}
