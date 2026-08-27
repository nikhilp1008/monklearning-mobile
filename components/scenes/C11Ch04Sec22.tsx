/**
 * C11 Chemistry Ch04 · Section 22 — "Bond order, the two MO orderings, and the hydrogen bond defined"
 * Canvas 1080×620 · safe x36–1044, y30–596. section_type: formulas.
 *
 * Beats (en [0, 12.71, 24.83, 37.38, 52.74, 69.89, 84.31, 100.44]):
 *  0 anchor
 *  1 BO = 1/2(Nb-Na) card
 *  2 BO consequences
 *  3 ordering 1: <=N2 -> pi < sigma2pz
 *  4 ordering 2: >N2 (O,F) -> sigma2pz < pi
 *  5 magnetism
 *  6 LCAO conditions card
 *  7 hydrogen bond precise definition card
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch04Sec22({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={58} size={19} fill={RED} script>
          {t("Bond order, MO orderings, H-bond defined", "Bond order, MO orderings, H-bond ki definition")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 3.0)} d="M 380 80 C 450 76, 630 76, 700 80" stroke={RED} sw={2.2} dur={0.6} />

      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={95} size={12} fill={MUTED} script>
          {t("MOT hands us one number: bond order", "MOT hume ek number deta: bond order")}
        </T>
      </Fade>

      {/* beat 1 — bond order card */}
      <Draw on={beat >= 1} delay={dl(1, 0.1)} d="M 290 108 h 500 v 55 h -500 z" stroke={INK} sw={1.8} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={540} y={128} size={12.5} weight={800} fill={AMBER_DARK}>
          BOND ORDER
        </T>
        <T x={540} y={152} size={16} weight={700} fill={INK}>
          BO = ½(N_b − N_a)
        </T>
      </Fade>

      {/* beat 2 */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={182} size={11} fill={INK}>
          {t(
            "BO>0 → exists, BO=0 → doesn't; higher BO → ↑dissociation energy, ↑stability, ↓length",
            "BO>0 → exists, BO=0 → nahi; zyada BO → ↑dissociation energy, ↑stability, ↓length"
          )}
        </T>
      </Fade>

      {/* beat 3 — ordering 1 */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={208} size={12} weight={700} fill={INK}>
          {t("≤N₂ (14 e⁻): π2p < σ2pz", "≤N₂ (14 e⁻): π2p < σ2pz")}
        </T>
      </Fade>

      {/* beat 4 — ordering 2 */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={230} size={12} weight={700} fill={RED}>
          {t("> N₂ (O, F): σ2pz < π2p — crossover decides magnetism", "> N₂ (O, F): σ2pz < π2p — crossover magnetism tay karta")}
        </T>
      </Fade>

      {/* beat 5 — magnetism */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={256} size={11.5} fill={INK}>
          {t("any unpaired e⁻ → PARAMAGNETIC · all paired → DIAMAGNETIC", "koi bhi unpaired e⁻ → PARAMAGNETIC · sab paired → DIAMAGNETIC")}
        </T>
      </Fade>

      {/* beat 6 — LCAO conditions card */}
      <Draw on={beat >= 6} delay={dl(6, 0.1)} d="M 230 278 h 620 v 55 h -620 z" stroke={INK} sw={1.8} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={298} size={12} weight={800} fill={AMBER_DARK}>
          {t("LCAO CONDITIONS", "LCAO CONDITIONS")}
        </T>
        <T x={540} y={322} size={11} fill={INK}>
          {t(
            "comparable energy · significant spatial overlap · same symmetry about the axis",
            "comparable energy · significant spatial overlap · axis ke about same symmetry"
          )}
        </T>
      </Fade>

      {/* beat 7 — hydrogen bond precise definition card */}
      <Draw on={beat >= 7} delay={dl(7, 0.1)} d="M 140 345 h 800 v 70 h -800 z" stroke={INK} sw={1.8} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={540} y={367} size={12.5} weight={800} fill={AMBER_DARK}>
          {t("HYDROGEN BOND (precise definition)", "HYDROGEN BOND (precise definition)")}
        </T>
        <T x={540} y={388} size={10.5} fill={INK}>
          {t(
            "attractive force: δ⁺H (bonded to F/O/N) ··· lone pair of a nearby F/O/N atom",
            "attractive force: δ⁺H (F/O/N se bonded) ··· paas ke F/O/N atom ki lone pair"
          )}
        </T>
        <T x={540} y={405} size={10.5} fill={INK}>
          {t("strength: 10−40 kJ/mol · types: intermolecular & intramolecular", "strength: 10−40 kJ/mol · types: intermolecular & intramolecular")}
        </T>
      </Fade>
    </Scene>
  );
}
