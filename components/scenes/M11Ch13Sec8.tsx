/**
 * M11 Ch13 · Section 8 — "The dispersion toolkit: every formula in one place"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: formulas — a restated reference card (not new teaching), so a
 * boxed-card grid revealed in the order the subtopic taught them.
 *
 * Beats (board_reveal_at_english [0, 13.91, 29.18, 42.58, 58.88, 71.85, 83.8]):
 *  0 anchor: heading
 *  1 card (high, full width): Range + Coefficient of range (Frac)
 *  2 card (high, left): M.D.(a) ungrouped
 *  3 card (high, right): M.D.(a) frequency distribution
 *  4 card (normal, left): coefficient of M.D.
 *  5 card (normal, right): grouped median interpolation (Frac)
 *  6 land (red-margin, high): the two things to memorise + the sanity check
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  title (script 21, red, always-on)   | T mid | x540 y58
 *  b0 | heading (script 16, amber_dark)| T mid | x540 y92
 *  b1 | card (green, full width)       | Draw  | x100..980 y120..170
 *  b2 | card (green, left)             | Draw  | x100..510 y190..235
 *  b3 | card (green, right)            | Draw  | x570..980 y190..235
 *  b4 | card (amber, left)             | Draw  | x100..510 y255..330
 *  b5 | card (amber, right)            | Draw  | x570..980 y255..330
 *  b6 | red bar + note (15)            | Draw+T| x60 y350..370 · text x76 y365
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD, Frac } from "./math-kit";

export default function M11Ch13Sec8({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={21} fill={RED} anchor="middle" script>
          {t("The Dispersion Toolkit", "Dispersion Toolkit")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={92} size={16} fill={AMBER_DARK} anchor="middle" script>
          {t("Subtopic 1: every formula in one place", "Subtopic 1: saare formulas ek jagah")}
        </T>
      </Fade>

      {/* beat 1 — card: range + coefficient of range */}
      <Draw on={beat >= 1} delay={dl(1, 0)} d={roundRectD(100, 120, 880, 50)} stroke={GREEN} sw={2.2} dur={0.8} />
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <T x={140} y={150} size={16} fill={INK} anchor="start" weight={700}>Range = x_max - x_min</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.6)}>
        <T x={520} y={150} size={14} fill={INK} anchor="start" weight={700}>{t("Coeff. of range =", "Coeff. of range =")}</T>
      </Fade>
      <Frac on={beat >= 1} delay={dl(1, 2.2)} x={710} y={150} size={16} numerator="x_max-x_min" denominator="x_max+x_min" width={95} />

      {/* beat 2 — card: M.D.(a) ungrouped */}
      <Draw on={beat >= 2} delay={dl(2, 0)} d={roundRectD(100, 190, 410, 45)} stroke={GREEN} sw={2.2} dur={0.7} />
      <Fade on={beat >= 2} delay={dl(2, 0.9)}>
        <T x={130} y={217} size={14} fill={INK} anchor="start" weight={700}>
          {"MD(a) = (1/n) Σ|x_i - a|  (ungrouped)"}
        </T>
      </Fade>

      {/* beat 3 — card: M.D.(a) frequency distribution */}
      <Draw on={beat >= 3} delay={dl(3, 0)} d={roundRectD(570, 190, 410, 45)} stroke={GREEN} sw={2.2} dur={0.7} />
      <Fade on={beat >= 3} delay={dl(3, 0.9)}>
        <T x={600} y={217} size={14} fill={INK} anchor="start" weight={700}>
          {"MD(a) = (1/N) Σ f_i|x_i - a|  (N=Σf_i)"}
        </T>
      </Fade>

      {/* beat 4 — card: coefficient of M.D. */}
      <Draw on={beat >= 4} delay={dl(4, 0)} d={roundRectD(100, 255, 410, 75)} stroke={AMBER_DARK} sw={1.8} dur={0.7} />
      <Fade on={beat >= 4} delay={dl(4, 0.9)}>
        <T x={305} y={290} size={15} fill={INK} anchor="middle" weight={700}>
          {"Coeff. of M.D. = MD(a) / a"}
        </T>
        <T x={305} y={312} size={12} fill={MUTED} anchor="middle">{t("(dimensionless)", "(dimensionless)")}</T>
      </Fade>

      {/* beat 5 — card: grouped median interpolation */}
      <Draw on={beat >= 5} delay={dl(5, 0)} d={roundRectD(570, 255, 410, 75)} stroke={AMBER_DARK} sw={1.8} dur={0.7} />
      <Fade on={beat >= 5} delay={dl(5, 0.9)}>
        <T x={600} y={295} size={15} fill={INK} anchor="start" weight={700}>M = l +</T>
      </Fade>
      <Frac on={beat >= 5} delay={dl(5, 1.4)} x={700} y={295} size={15} numerator="N/2-C" denominator="f" width={62} />
      <Fade on={beat >= 5} delay={dl(5, 1.9)}>
        <T x={742} y={295} size={15} fill={INK} anchor="start" weight={700}>{"× h"}</T>
        <T x={775} y={318} size={12} fill={MUTED} anchor="middle">{t("(grouped median)", "(grouped median)")}</T>
      </Fade>

      {/* beat 6 — land (red-margin, high emphasis): memorise + sanity check */}
      <Draw on={beat >= 6} delay={dl(6, 0.1)} d="M 60 350 L 60 370" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={76} y={365} size={15} fill={RED} anchor="start" weight={700}>
          {t(
            "Σ|x_i-a| is least at a=median.  Sanity: M.D. ≤ Range, always.",
            "Σ|x_i-a| median pe sabse kam.  Sanity: M.D. ≤ Range, hamesha."
          )}
        </T>
      </Fade>
    </Scene>
  );
}
