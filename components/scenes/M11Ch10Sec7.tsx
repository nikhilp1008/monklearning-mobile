/**
 * M11 Ch10 · Section 7 — "Traps that cost marks"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: tips — closes Subtopic 1 (The Conic Family), sec 7 of 7.
 *
 * board_content seq1 heading -> always-on title. seq2..seq8 (7 items) gate at
 * beat>=1..beat>=6 (seq2-5 are the 4 pitfall cards, beat1-4; seq6 is a mid-
 * section heading at beat5; seq7-8 are the 2 reflex cards at beat6-7).
 * reveals_english = [0, 5.89, 18.26, 30.63, 46.93, 55.55, 61.1, 67.24];
 * reveals_hinglish = [0, 4.69, 18.43, 28.42, 44.63, 54.44, 60.67, 66.73].
 *
 * 2x2 grid of RED pitfall cards (row1 h70 y110-180, row2 h90 y195-285), then
 * a sub-header + 2 AMBER "reflex" recap cards (y355-445) — red for what to
 * avoid, amber for what to remember, per house palette.
 *
 * Beats:
 *  0(title,always-on) | "Traps that cost marks"
 *  1 | card1 (RED,HIGH): plane through vertex -> degenerate, never normal
 *  2 | card2: parabola is a single boundary, not a range
 *  3 | card3: circle needs A=C AND B=0; xy term -> rotated ellipse
 *  4 | card4: never rotate axes first; B²-4AC already classifies
 *  5 | sub-header: "The two-classifier reflex"
 *  6 | card5: geometry reflex (β vs α, vertex check)
 *  7 | card6: equation reflex (A,C signs / B²-4AC sign)
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD } from "./math-kit";

function Card({
  x, y, w, h, stroke, on, delay,
}: { x: number; y: number; w: number; h: number; stroke: string; on: boolean; delay: number }) {
  return <Draw on={on} delay={delay} d={roundRectD(x, y, w, h, 14)} stroke={stroke} sw={2} dur={0.4} />;
}

export default function M11Ch10Sec7({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true}>
        <T x={540} y={62} size={26} fill={RED} anchor="middle" script>
          {t("Traps that cost marks", "Traps jo marks kaat lete hain")}
        </T>
      </Fade>

      {/* beat 1 — card1: degenerate case (HIGH) */}
      <Card x={60} y={110} w={430} h={70} stroke={RED} on={beat >= 1} delay={dl(1, 0)} />
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={80} y={140} size={13} fill={RED} anchor="start" weight={700}>
          {t("A plane through the vertex is NEVER a", "Vertex se guzarta plane KABHI normal curve")}
        </T>
        <T x={80} y={160} size={13} fill={RED} anchor="start" weight={700}>
          {t("normal curve. It is degenerate.", "nahi deta. Ye degenerate hota hai.")}
        </T>
      </Fade>

      {/* beat 2 — card2: parabola is a boundary */}
      <Card x={560} y={110} w={430} h={70} stroke={RED} on={beat >= 2} delay={dl(2, 0)} />
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={580} y={140} size={13} fill={RED} anchor="start" weight={700}>
          {t("Parabola is a single boundary, NOT a", "Parabola ek single boundary hai, range")}
        </T>
        <T x={580} y={160} size={13} fill={RED} anchor="start" weight={700}>
          {t("range: β = α and e = 1 exactly.", "NAHI: β = α aur e = 1 exactly.")}
        </T>
      </Fade>

      {/* beat 3 — card3: circle needs A=C AND B=0 */}
      <Card x={60} y={195} w={430} h={90} stroke={RED} on={beat >= 3} delay={dl(3, 0)} />
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={80} y={222} size={13} fill={RED} anchor="start" weight={700}>
          {t("Circle needs A = C AND B = 0.", "Circle ko A = C AUR B = 0 chahiye.")}
        </T>
        <T x={80} y={244} size={13} fill={RED} anchor="start" weight={700}>
          {t("Equal x²,y² coeffs WITH an xy term", "Equal x²,y² coeffs WITH xy term")}
        </T>
        <T x={80} y={266} size={13} fill={RED} anchor="start" weight={700}>
          {t("= a ROTATED ELLIPSE, not a circle.", "= ek ROTATED ELLIPSE, circle nahi.")}
        </T>
      </Fade>

      {/* beat 4 — card4: never rotate axes first */}
      <Card x={560} y={195} w={430} h={90} stroke={RED} on={beat >= 4} delay={dl(4, 0)} />
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={580} y={230} size={13} fill={RED} anchor="start" weight={700}>
          {t("Never rotate axes before classifying —", "Classify karne se pehle axes rotate mat")}
        </T>
        <T x={580} y={252} size={13} fill={RED} anchor="start" weight={700}>
          {t("B² − 4AC already names the curve.", "karo — B² − 4AC curve batata hai.")}
        </T>
      </Fade>

      {/* beat 5 — sub-header */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={540} y={325} size={18} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("The two-classifier reflex", "Do-classifier ka reflex pakka karo")}
        </T>
      </Fade>

      {/* beat 6 — card5: geometry reflex */}
      <Card x={150} y={355} w={360} h={80} stroke={AMBER_DARK} on={beat >= 6} delay={dl(6, 0)} />
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={170} y={382} size={13} fill={AMBER_DARK} anchor="start" weight={700}>{t("Geometry:", "Geometry:")}</T>
        <T x={170} y={404} size={13} fill={INK} anchor="start">
          {t("compare β to α —", "β ko α se compare karo —")}
        </T>
        <T x={170} y={423} size={13} fill={INK} anchor="start">
          {t("check the vertex first.", "pehle vertex check karo.")}
        </T>
      </Fade>

      {/* beat 7 — card6: equation reflex */}
      <Card x={570} y={355} w={400} h={90} stroke={AMBER_DARK} on={beat >= 7} delay={dl(7, 0)} />
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={590} y={382} size={13} fill={AMBER_DARK} anchor="start" weight={700}>{t("Equation:", "Equation:")}</T>
        <T x={590} y={404} size={13} fill={INK} anchor="start">
          {t("no xy → read signs of A, C.", "xy nahi → A, C ke signs padho.")}
        </T>
        <T x={590} y={426} size={13} fill={INK} anchor="start">
          {t("xy term → sign of B² − 4AC.", "xy term ho → B² − 4AC ke sign par jao.")}
        </T>
      </Fade>
    </Scene>
  );
}
