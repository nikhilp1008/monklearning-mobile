/**
 * M11 Ch10 · Section 10 — "Every circle formula you need"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: formulas — Subtopic 2 (The Circle), sec 10 of 13. Reference
 * card consolidating Sec8/Sec9.
 *
 * board_content seq1 heading -> always-on title. seq2..seq9 (8 items) gate at
 * beat>=1..beat>=8. reveals_english = [0, 5.03, 18.52, 28.07, 43.95, 55.38,
 * 60.76, 73.64, 81.32]; reveals_hinglish = [0, 4.01, 16.13, 24.83, 37.97,
 * 50.09, 56.23, 67.07, 74.07].
 *
 * LEFT (x60-520): standard form -> general form -> boxed centre/radius (HIGH)
 * -> RED guardrail card (sign of g²+f²-c: real/point/imaginary).
 * RIGHT (x560-1020): diameter form + explanation -> S1 definition -> sign
 * meaning -> boxed tangent-length formula.
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, MUTED, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD } from "./math-kit";

export default function M11Ch10Sec10({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true}>
        <T x={540} y={62} size={24} fill={RED} anchor="middle" script>
          {t("Every circle formula you need", "Circle ke sab formula, ek jagah")}
        </T>
      </Fade>

      {/* beat 1 — standard form */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={290} y={120} size={17} fill={INK} anchor="middle">(x − h)² + (y − k)² = r²</T>
      </Fade>

      {/* beat 2 — general form */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={290} y={155} size={15} fill={INK} anchor="middle">x² + y² + 2gx + 2fy + c = 0</T>
      </Fade>

      {/* beat 3 — boxed centre/radius (HIGH) */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <Chip x={110} y={185} w={360} h={50} fill="#FCF4E0" stroke={AMBER_DARK} textFill={AMBER_DARK} size={14} script={false}>
          centre = (−g, −f),  r = √(g² + f² − c)
        </Chip>
      </Fade>

      {/* beat 4 — guardrail (RED, HIGH): sign of g²+f²-c */}
      <Draw on={beat >= 4} delay={dl(4, 0)} d={roundRectD(100, 260, 380, 95, 14)} stroke={RED} sw={2} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={122} y={288} size={12.5} fill={RED} anchor="start" weight={700}>g² + f² − c &gt; 0 → {t("real circle", "real circle")}</T>
        <T x={122} y={311} size={12.5} fill={RED} anchor="start" weight={700}>g² + f² − c = 0 → {t("point circle", "point circle")}</T>
        <T x={122} y={334} size={12.5} fill={RED} anchor="start" weight={700}>g² + f² − c &lt; 0 → {t("imaginary (no circle)", "imaginary (koi circle nahi)")}</T>
      </Fade>

      {/* beat 5 — diameter form */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={780} y={120} size={15} fill={INK} anchor="middle">(x − x₁)(x − x₂) + (y − y₁)(y − y₂) = 0</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={780} y={148} size={13} fill={MUTED} anchor="middle">
          {t("A(x₁,y₁), B(x₂,y₂) — the diameter's two ends.", "A(x₁,y₁), B(x₂,y₂) — diameter ke do ends.")}
        </T>
      </Fade>

      {/* beat 6 — S1 definition */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={780} y={190} size={15} fill={INK} anchor="middle">S₁ = x₁² + y₁² + 2gx₁ + 2fy₁ + c</T>
      </Fade>

      {/* beat 7 — sign meaning */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <T x={780} y={222} size={13} fill={INK} anchor="middle">
          {t("S₁ > 0 outside,  = 0 on,  < 0 inside.", "S₁ > 0 bahar,  = 0 par,  < 0 andar.")}
        </T>
      </Fade>

      {/* beat 8 — boxed tangent length */}
      <Fade on={beat >= 8} delay={dl(8, 0)}>
        <Chip x={650} y={255} w={260} h={44} fill="#FCF4E0" stroke={AMBER_DARK} textFill={AMBER_DARK} size={15} script={false}>
          {t("Tangent length = √S₁", "Tangent length = √S₁")}
        </Chip>
      </Fade>
    </Scene>
  );
}
