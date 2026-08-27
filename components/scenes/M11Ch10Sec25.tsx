/**
 * M11 Ch10 · Section 25 — "Example 1 (CBSE): all elements from the equation"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples — Subtopic 4 (The Ellipse), sec 25 of 27.
 *
 * board_content seq1 heading -> always-on title. seq2..seq8 (7 items) gate at
 * beat>=1..beat>=7. reveals_english = [0, 5.03, 13.74, 30.29, 42.92, 55.72,
 * 64.26, 72.62]; reveals_hinglish = [0, 4.27, 12.37, 26.97, 38.31, 50.86,
 * 60.16, 69.12].
 *
 * Example 1: x²/25+y²/9=1 -> a²=25,b²=9 -> a=5,b=3 -> c=√(25-9)=4, e=0.8 ->
 * vertices(±5,0), foci(±4,0), LR=2(9)/5=3.6 (all hand-verified ✓).
 * Example 2: x²/9+y²/25=1 -> same numbers, major axis now vertical ->
 * foci(0,±4), vertices(0,±5) (c=√(25-9)=4 unchanged, hand-verified ✓). The
 * closing comparison icons make the "same numbers, rotated" point visual:
 * both icons share the SAME computed c=40px (from their own rx/ry, which are
 * literally swapped between the two), so the foci-distance-from-centre is
 * identical in both — exactly mirroring the algebra.
 */

import React from "react";
import { Circle } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';
import { ellipseD } from "./math-kit";

const IC1 = { x: 420, y: 376 }, IRX1 = 50, IRY1 = 30;
const IC2 = { x: 660, y: 376 }, IRX2 = 30, IRY2 = 50;
const ICF = Math.sqrt(50 * 50 - 30 * 30); // 40, shared by both (rx/ry swapped)

export default function M11Ch10Sec25({ currentTime, reveals, language }: SceneProps) {
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
        <T x={540} y={104} size={17} fill={INK} anchor="middle">x²/25 + y²/9 = 1</T>
      </Fade>

      {/* beat 2 — match */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={540} y={135} size={13} fill={INK} anchor="middle">
          {t(
            "Larger denom 25 under x²: a²=25, b²=9 → a=5, b=3; major axis on x.",
            "Bada denom 25, x² ke neeche: a²=25, b²=9 → a=5, b=3; major axis x par."
          )}
        </T>
      </Fade>

      {/* beat 3 — c, e */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={540} y={160} size={14} fill={INK} anchor="middle">c = √(25 − 9) = 4,  e = 4/5 = 0.8</T>
      </Fade>

      {/* beat 4 — boxed elements */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <Chip x={260} y={182} w={560} h={44} fill="#FCF4E0" stroke={AMBER_DARK} textFill={AMBER_DARK} size={14} script={false}>
          vertices (±5,0),  foci (±4,0),  LR = 2(9)/5 = 3.6
        </Chip>
      </Fade>

      {/* beat 5 — Example 2 header */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={540} y={250} size={16} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("Example 2 (JEE Main): watch the orientation", "Example 2 (JEE Main): orientation dekho")}
        </T>
      </Fade>

      {/* beat 6 — equation */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={540} y={280} size={17} fill={INK} anchor="middle">x²/9 + y²/25 = 1</T>
      </Fade>

      {/* beat 7 — orientation swap + comparison icons */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <T x={540} y={306} size={13} fill={INK} anchor="middle">
          {t(
            "Now 25 is under y²: major axis on y, foci (0,±4), vertices (0,±5).",
            "Ab 25, y² ke neeche hai: major axis y par, foci (0,±4), vertices (0,±5)."
          )}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 0.4)} d={ellipseD(IC1.x, IC1.y, IRX1, IRY1)} stroke={INK} sw={1.8} dur={0.35} />
      <Fade on={beat >= 7} delay={dl(7, 0.8)}>
        <Circle cx={IC1.x - ICF} cy={IC1.y} r={2.5} fill={AMBER_DARK} />
        <Circle cx={IC1.x + ICF} cy={IC1.y} r={2.5} fill={AMBER_DARK} />
        <T x={IC1.x} y={446} size={11} fill={INK} anchor="middle">{t("Ex 1: horizontal", "Ex 1: horizontal")}</T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 1.1)} d={ellipseD(IC2.x, IC2.y, IRX2, IRY2)} stroke={INK} sw={1.8} dur={0.35} />
      <Fade on={beat >= 7} delay={dl(7, 1.5)}>
        <Circle cx={IC2.x} cy={IC2.y - ICF} r={2.5} fill={AMBER_DARK} />
        <Circle cx={IC2.x} cy={IC2.y + ICF} r={2.5} fill={AMBER_DARK} />
        <T x={IC2.x} y={446} size={11} fill={INK} anchor="middle">{t("Ex 2: vertical", "Ex 2: vertical")}</T>
      </Fade>
    </Scene>
  );
}
