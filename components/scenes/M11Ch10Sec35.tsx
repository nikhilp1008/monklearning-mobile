/**
 * M11 Ch10 · Section 35 — "Your complete conic-sections toolkit"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: formula_recap — opens Subtopic 6 (Chapter Wrap-up), sec 35
 * of 36. The whole-chapter consolidation card: a 2x2 grid (Circle, Parabola,
 * Ellipse, Hyperbola), shared ellipse/hyperbola formulas, an eccentricity
 * ladder capping the chapter's running e-theme (Sec2's dial, echoed
 * throughout), and the final ellipse-vs-hyperbola sign contrast.
 *
 * board_content seq1 heading -> always-on title. seq2..seq10 (9 items) gate
 * at beat>=1..beat>=9. reveals_english = [0, 10.75, 26.97, 45.31, 62.38,
 * 79.96, 95.4, 114.77, 129.19, 142.85]; reveals_hinglish = [0, 10.5, 24.58,
 * 43.01, 56.58, 72.62, 86.95, 105.47, 120.75, 133.55].
 *
 * All formulas cross-checked against their originating sections: circle
 * (Sec10), parabola (Sec17), ellipse (Sec24), hyperbola (Sec31), shared e/LR/
 * directrix (Sec24+Sec31), eccentricity ladder (Sec2), focal-sign contrast
 * (Sec22 b²=a²−c² vs Sec29 c²=a²+b², i.e. same a²−b² relation with sign
 * flipped depending which side c² is isolated on — both forms verified
 * algebraically equivalent to their sections' own results).
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD, lineD } from "./math-kit";

function Card({
  x, y, w, h, on, delay,
}: { x: number; y: number; w: number; h: number; on: boolean; delay: number }) {
  return <Draw on={on} delay={delay} d={roundRectD(x, y, w, h, 12)} stroke={INK} sw={1.5} dur={0.4} />;
}

export default function M11Ch10Sec35({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true}>
        <T x={540} y={62} size={22} fill={RED} anchor="middle" script>
          {t("Your complete conic-sections toolkit", "Tumhara complete conic-sections toolkit")}
        </T>
      </Fade>

      {/* beat 1 — classification */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={104} size={14} fill={INK} anchor="middle">
          {t("Classify: Δ = B² − 4AC (<0 ellipse, =0 parabola, >0 hyperbola)", "Classify: Δ = B² − 4AC (<0 ellipse, =0 parabola, >0 hyperbola)")}
        </T>
      </Fade>

      {/* 2x2 grid cards */}
      <Card x={60} y={128} w={460} h={92} on={beat >= 2} delay={dl(2, 0)} />
      <Card x={560} y={128} w={460} h={92} on={beat >= 4} delay={dl(4, 0)} />
      <Card x={60} y={240} w={460} h={92} on={beat >= 5} delay={dl(5, 0)} />
      <Card x={560} y={240} w={460} h={92} on={beat >= 6} delay={dl(6, 0)} />

      {/* beat 2 — circle forms */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={290} y={148} size={15} fill={AMBER_DARK} anchor="middle" weight={700}>{t("CIRCLE", "CIRCLE")}</T>
        <T x={290} y={176} size={14} fill={INK} anchor="middle">(x−h)²+(y−k)²=r²;  x²+y²+2gx+2fy+c=0</T>
      </Fade>

      {/* beat 3 — circle centre/radius/tangent */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={290} y={204} size={14} fill={INK} anchor="middle">centre(−g,−f), r=√(g²+f²−c), tangent=√S₁</T>
      </Fade>

      {/* beat 4 — parabola */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={790} y={148} size={15} fill={AMBER_DARK} anchor="middle" weight={700}>{t("PARABOLA", "PARABOLA")}</T>
        <T x={790} y={176} size={14} fill={INK} anchor="middle">y²=4ax; focus(a,0), directrix x=−a, LR=4a</T>
      </Fade>

      {/* beat 5 — ellipse */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={290} y={260} size={15} fill={AMBER_DARK} anchor="middle" weight={700}>{t("ELLIPSE", "ELLIPSE")}</T>
        <T x={290} y={288} size={14} fill={INK} anchor="middle">x²/a²+y²/b²=1 (a&gt;b), b²=a²−c², e&lt;1</T>
      </Fade>

      {/* beat 6 — hyperbola */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={790} y={260} size={15} fill={AMBER_DARK} anchor="middle" weight={700}>{t("HYPERBOLA", "HYPERBOLA")}</T>
        <T x={790} y={288} size={14} fill={INK} anchor="middle">x²/a²−y²/b²=1, c²=a²+b², e&gt;1, y=±(b/a)x</T>
      </Fade>

      {/* beat 7 — shared formulas (HIGH) */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <Chip x={240} y={352} w={600} h={42} fill="#FCF4E0" stroke={AMBER_DARK} textFill={AMBER_DARK} size={15} script={false}>
          e = c/a,  LR = 2b²/a,  directrix x = ±a/e
        </Chip>
      </Fade>

      {/* beat 8 — eccentricity ladder (red, HIGH) */}
      <Draw on={beat >= 8} delay={dl(8, 0)} d={lineD(100, 414, 980, 414)} stroke={RED} sw={1.8} dur={0.5} />
      <Draw on={beat >= 8} delay={dl(8, 0.4)} d={`${lineD(150, 408, 150, 420)} ${lineD(400, 408, 400, 420)} ${lineD(650, 408, 650, 420)} ${lineD(900, 408, 900, 420)}`} stroke={RED} sw={1.8} dur={0.4} />
      <Fade on={beat >= 8} delay={dl(8, 0.9)}>
        <T x={150} y={436} size={14} fill={RED} anchor="middle" weight={700}>e=0</T>
        <T x={150} y={460} size={14} fill={RED} anchor="middle" weight={700}>{t("Circle", "Circle")}</T>
        <T x={400} y={436} size={14} fill={RED} anchor="middle" weight={700}>0&lt;e&lt;1</T>
        <T x={400} y={460} size={14} fill={RED} anchor="middle" weight={700}>{t("Ellipse", "Ellipse")}</T>
        <T x={650} y={436} size={14} fill={RED} anchor="middle" weight={700}>e=1</T>
        <T x={650} y={460} size={14} fill={RED} anchor="middle" weight={700}>{t("Parabola", "Parabola")}</T>
        <T x={900} y={436} size={14} fill={RED} anchor="middle" weight={700}>e&gt;1</T>
        <T x={900} y={460} size={14} fill={RED} anchor="middle" weight={700}>{t("Hyperbola", "Hyperbola")}</T>
      </Fade>

      {/* beat 9 — closing contrast */}
      <Fade on={beat >= 9} delay={dl(9, 0)}>
        <T x={540} y={490} size={14} fill={INK} anchor="middle">
          {t("Ellipse focal relation: a² − b². Hyperbola: a² + b².", "Ellipse focal relation: a² − b². Hyperbola: a² + b².")}
        </T>
        <T x={540} y={514} size={14} fill={INK} anchor="middle">
          {t("Only the sign changes.", "Bas sign badalta hai.")}
        </T>
      </Fade>
    </Scene>
  );
}
