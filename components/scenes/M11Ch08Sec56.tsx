/**
 * M11 Ch08 · Section 56 — "An AGP is a GP re-weighted by an AP counter"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type=concept. Opens subtopic 6 (AGP).
 *
 * Beats (en [0, 14.34, 28.5, 41.73, 55.64, 69.72, 86.19, 107.78]):
 *  0 title (always-on)
 *  1 THE DEMO: 3-row table — AP part × GP part = AGP, term by term
 *  2 formula: t_n = [a+(n-1)d]r^(n-1)
 *  3 text: present-value sums are AGP sums
 *  4 text: neither AP nor GP formula alone works
 *  5 text: multiply by r, shift, subtract
 *  6 red-margin: |r|<1 converges
 *  7 closer: recognise the shape
 *
 * Layout plan:
 *  b1 | row labels bl100/140/195 x70 · 4 cols cx250/400/550/700 ·
 *       divider y160 x200..750 · caption bl225 cx475
 *  b2 | text bl255 cx540
 *  b3 | text bl285 cx540
 *  b4 | text bl315 cx540
 *  b5 | text bl345 cx540
 *  b6 | red bar x76 y370..440 · text bl390/430 x96
 *  b7 | text bl475 cx540
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, INK_LIGHT, MUTED, AMBER_DARK, GREEN_DARK, RED,
  Scene,
} from '@/components/scenes/kit';
import { lineD } from "./math-kit";

export default function M11Ch08Sec56({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const cols = [250, 400, 550, 700];
  const apRow = ["a", "a+d", "a+2d", "a+3d"];
  const gpRow = ["1", "r", "r²", "r³"];
  const agpRow = ["a", "(a+d)r", "(a+2d)r²", "(a+3d)r³"];

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={20} fill={INK} anchor="middle" script>
          {t("AGP: a GP whose terms carry a growing arithmetic label", "AGP: ek GP jiske terms pe badhta arithmetic label hai")}
        </T>
      </Fade>

      {/* beat 1 — THE DEMO: AP row x GP row = AGP row */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={70} y={100} size={13} fill={AMBER_DARK} anchor="start">{t("AP part", "AP part")}</T>
      </Fade>
      {cols.map((cx, i) => (
        <Fade key={`ap${i}`} on={beat >= 1} delay={dl(1, 0.3 + i * 0.15)}>
          <T x={cx} y={100} size={14} fill={AMBER_DARK} anchor="middle">{apRow[i]}</T>
        </Fade>
      ))}
      <Fade on={beat >= 1} delay={dl(1, 1.0)}>
        <T x={70} y={140} size={13} fill={GREEN_DARK} anchor="start">{t("GP part", "GP part")}</T>
      </Fade>
      {cols.map((cx, i) => (
        <Fade key={`gp${i}`} on={beat >= 1} delay={dl(1, 1.1 + i * 0.15)}>
          <T x={cx} y={140} size={14} fill={GREEN_DARK} anchor="middle">{gpRow[i]}</T>
        </Fade>
      ))}
      <Draw on={beat >= 1} delay={dl(1, 1.8)} d={lineD(200, 160, 750, 160)} stroke={MUTED} sw={1.4} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 2.1)}>
        <T x={70} y={195} size={13} fill={RED} anchor="start">AGP</T>
      </Fade>
      {cols.map((cx, i) => (
        <Fade key={`agp${i}`} on={beat >= 1} delay={dl(1, 2.2 + i * 0.15)}>
          <T x={cx} y={195} size={13} fill={RED} anchor="middle">{agpRow[i]}</T>
        </Fade>
      ))}
      <Fade on={beat >= 1} delay={dl(1, 2.9)}>
        <T x={475} y={225} size={12} fill={INK_LIGHT} anchor="middle" script>
          {t("term by term product · sum via multiply-by-r", "term by term product · sum multiply-by-r se")}
        </T>
      </Fade>

      {/* beat 2 — the general term */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={540} y={255} size={16} fill={INK} anchor="middle">
          {"t_n = [a+(n-1)d]·r^(n-1)"}
        </T>
      </Fade>

      {/* beat 3 — finance connection */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={285} size={14} fill={INK_LIGHT} anchor="middle" script>
          {t("present-value sums in finance are exactly AGP sums", "finance mein present-value sums exactly AGP sums hain")}
        </T>
      </Fade>

      {/* beat 4 — neither formula works alone */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={315} size={14} fill={INK_LIGHT} anchor="middle" script>
          {t(
            "neither the AP nor the GP sum formula works alone — but the GP trick does",
            "AP ya GP sum formula akele kaam nahi karta — par GP trick karta hai"
          )}
        </T>
      </Fade>

      {/* beat 5 — the technique */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={345} size={14} fill={INK} anchor="middle" script>
          {t(
            "multiply the whole sum by r, shift by one, subtract: the AP collapses to d",
            "poore sum ko r se multiply karo, ek shift karo, subtract: AP, d mein collapse"
          )}
        </T>
      </Fade>

      {/* beat 6 — red-margin: convergence */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 76 370 v 70" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={96} y={390} size={15} fill={RED} anchor="start" script>
          {t("when |r| < 1, the AGP converges:", "jab |r| < 1, AGP converge karti hai:")}
        </T>
        <T x={96} y={430} size={15} fill={RED} anchor="start" script>
          {t("geometric decay beats linear growth", "geometric decay, linear growth ko haraata hai")}
        </T>
      </Fade>

      {/* beat 7 — closer */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={540} y={475} size={14} fill={INK} anchor="middle" script>
          {t(
            "recognise an AGP by its shape: (linear in n) × (r^(n-1))",
            "AGP ko iske shape se pehchano: (n mein linear) × (r^(n-1))"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
