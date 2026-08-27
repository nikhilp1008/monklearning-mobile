/**
 * M11 Ch10 · Section 4 — "Reference: classify by angle, by e, and by equation"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: formulas — closes with the chapter's first reference card
 * (Subtopic 1: The Conic Family, sec 4 of 7). Consolidates Sec1/2/3's three
 * classifiers into one "notes page."
 *
 * board_content seq1 heading -> always-on title. seq2..seq9 (8 items) gate at
 * beat>=1..beat>=8. reveals_english = [0, 5.97, 12.54, 26.54, 39.51, 45.4, 62.98,
 * 69.89, 80.3]; reveals_hinglish = [0, 5.89, 12.71, 23.81, 37.29, 43.61, 57.77,
 * 64.09, 75.35].
 *
 * Three panels: Panel1 (by angle, top-left) + Panel2 (by eccentricity, top-right)
 * mirror Sec1/Sec2's own ledgers at a smaller scale; Panel3 (by equation, full
 * width below) mirrors Sec3's equation->discriminant->table, now with the circle
 * special-case parenthetical and the B=0 default guardrail.
 *
 * Beats:
 *  0(title,always-on) | "Reference: classify by angle, by e, and by equation"
 *  1 | Panel1 header "By cutting angle:"
 *  2 | Panel1 4 rows (β=90/α<β<90/β=α/0≤β<α -> shape)
 *  3 | Panel2 header + 4 rows (e=0/0<e<1/e=1/e>1 -> shape), together
 *  4 | Panel3 header "The general second-degree equation"
 *  5 | Panel3 equation Ax²+Bxy+Cy²+Dx+Ey+F=0
 *  6 | Panel3 formula (HIGH): Δ=B²-4AC, boxed larger
 *  7 | Panel3 3-row Δ table (ellipse+circle-note / parabola / hyperbola)
 *  8 | guardrail (red,HIGH): B=0 -> axes parallel to coordinate axes, Class 11 default
 *
 * Layout plan:
 *  b1  | Panel1 header (14,amber_dark,bold) | T st | x60  y140
 *  b2  | Panel1 4 rows                       | T    | x60/190/210 y168..240 pitch24
 *  b3  | Panel2 header + 4 rows               | T    | x420/550/570 y140..240
 *  b4  | Panel3 header (16,amber_dark,bold)   | T mid| x540 y300
 *  b5  | equation (18,ink)                    | T mid| x540 y335
 *  b6  | Chip "Δ = B² - 4AC" (bigger, HIGH)    | Chip | x435 y375 w210 h54
 *  b7  | Panel3 3 rows                        | T    | x420/610/630 y460..516
 *  b8  | red guardrail line                   | T mid| x540 y555
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, T, Chip, INK, MUTED, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch10Sec4({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const row = (cond: string, x: number, y: number, arrowX: number, resultX: number, result: string, k: number, d: number) => (
    <Fade on={beat >= k} delay={dl(k, d)}>
      <T x={x} y={y} size={13} fill={INK} anchor="start">{cond}</T>
      <T x={arrowX} y={y} size={14} fill={INK} anchor="middle">→</T>
      <T x={resultX} y={y} size={13} fill={GREEN} anchor="start" weight={700}>{result}</T>
    </Fade>
  );

  return (
    <Scene>
      {/* title */}
      <Fade on={true}>
        <T x={540} y={62} size={24} fill={RED} anchor="middle" script>
          {t("Reference: classify by angle, by e, and by equation", "Reference: angle se, e se, aur equation se classify karo")}
        </T>
      </Fade>

      {/* beat 1 — Panel1 header */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={60} y={140} size={14} fill={AMBER_DARK} anchor="start" weight={700}>
          {t("By cutting angle:", "Cutting angle se:")}
        </T>
      </Fade>

      {/* beat 2 — Panel1 4 rows */}
      {row("β = 90°", 60, 168, 190, 210, t("Circle", "Circle"), 2, 0)}
      {row("α < β < 90°", 60, 192, 190, 210, t("Ellipse", "Ellipse"), 2, 0.3)}
      {row("β = α", 60, 216, 190, 210, t("Parabola", "Parabola"), 2, 0.6)}
      {row("0 ≤ β < α", 60, 240, 190, 210, t("Hyperbola", "Hyperbola"), 2, 0.9)}

      {/* beat 3 — Panel2 header + 4 rows */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={420} y={140} size={14} fill={AMBER_DARK} anchor="start" weight={700}>
          {t("By eccentricity:", "Eccentricity se:")}
        </T>
      </Fade>
      {row("e = 0", 420, 168, 550, 570, t("Circle", "Circle"), 3, 0.3)}
      {row("0 < e < 1", 420, 192, 550, 570, t("Ellipse", "Ellipse"), 3, 0.6)}
      {row("e = 1", 420, 216, 550, 570, t("Parabola", "Parabola"), 3, 0.9)}
      {row("e > 1", 420, 240, 550, 570, t("Hyperbola", "Hyperbola"), 3, 1.2)}

      {/* beat 4 — Panel3 header */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={540} y={300} size={16} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("The general second-degree equation", "General second-degree equation")}
        </T>
      </Fade>

      {/* beat 5 — equation */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={540} y={335} size={18} fill={INK} anchor="middle">Ax² + Bxy + Cy² + Dx + Ey + F = 0</T>
      </Fade>

      {/* beat 6 — discriminant, HIGH emphasis */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <Chip x={435} y={375} w={210} h={54} fill="#FCF4E0" stroke={AMBER_DARK} textFill={INK} size={24} script={false}>
          Δ = B² − 4AC
        </Chip>
      </Fade>

      {/* beat 7 — Panel3 3-row table */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <T x={420} y={460} size={15} fill={INK} anchor="start">Δ &lt; 0</T>
        <T x={610} y={460} size={16} fill={INK} anchor="middle">→</T>
        <T x={630} y={460} size={17} fill={GREEN} anchor="start" weight={700}>{t("Ellipse", "Ellipse")}</T>
        <T x={696} y={460} size={12} fill={MUTED} anchor="start">{t("(circle if A=C, B=0)", "(circle agar A=C, B=0)")}</T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={420} y={488} size={15} fill={INK} anchor="start">Δ = 0</T>
        <T x={610} y={488} size={16} fill={INK} anchor="middle">→</T>
        <T x={630} y={488} size={17} fill={GREEN} anchor="start" weight={700}>{t("Parabola", "Parabola")}</T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.8)}>
        <T x={420} y={516} size={15} fill={INK} anchor="start">Δ &gt; 0</T>
        <T x={610} y={516} size={16} fill={INK} anchor="middle">→</T>
        <T x={630} y={516} size={17} fill={GREEN} anchor="start" weight={700}>{t("Hyperbola", "Hyperbola")}</T>
      </Fade>

      {/* beat 8 — guardrail: B=0 default */}
      <Fade on={beat >= 8} delay={dl(8, 0)}>
        <T x={540} y={555} size={14} fill={RED} anchor="middle" weight={700}>
          {t(
            "B = 0 means axes parallel to the coordinate axes — the Class 11 default.",
            "B = 0 ka matlab: axes coordinate axes ke parallel — Class 11 ka default."
          )}
        </T>
      </Fade>
    </Scene>
  );
}
