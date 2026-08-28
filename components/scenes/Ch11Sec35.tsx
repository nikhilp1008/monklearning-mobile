/**
 * Ch11 · Section 35 — "Efficiency, COP, and the Carnot limits"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * UNVERIFIED — audio for sec 35 not yet uploaded, verify-scene.mjs could
 * not be run. Dense formula-sheet section, text-forward like Sec4/11/18/27.
 * Re-run once audio lands.
 *
 * Beats (8): 0 hook · 1 Q1=Q2+W · 2 η=1−Q2/Q1 · 3 fridge COP · 4 pump COP
 *  · 5 "same hardware" transition · 6 COP relation + Carnot limits ·
 *  7 second-law preview (Kelvin-Planck / Clausius).
 *
 * Layout plan (Anek bl−0.78s..+0.31s), single centered column:
 *  title (script 24, red)  | T mid | x540 y64
 *  b0 | hook (12,script)   | T mid | x540 y94
 *  b1 | line (13)          | T mid | x540 y120
 *  b2 | line (13)          | T mid | x540 y148
 *  b3 | line (12)          | T mid | x540 y176
 *  b4 | line (12)          | T mid | x540 y204
 *  b5 | note (11,script)   | T mid | x540 y230
 *  b6 | line1 (12)         | T mid | x540 y258
 *  b6 | line2 (11)         | T mid | x540 y282
 *  b7 | chip (h34)         | Chip  | x230..850 y315..349
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, T, Chip, INK, MUTED, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch11Sec35({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={24} fill={RED} script>
          {t("efficiency, COP, and the Carnot limits", "efficiency, COP, aur Carnot limits")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={94} size={12} fill={MUTED} script>
          {t("one energy balance — the rest is a division away", "ek energy balance — baaki sab division door hai")}
        </T>
      </Fade>

      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={120} size={13} fill={INK} script={false}>
          {t("Q₁ = Q₂ + W (cyclic energy balance)", "Q₁ = Q₂ + W (cyclic energy balance)")}
        </T>
      </Fade>

      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={148} size={13} fill={INK} script={false}>
          {"η = W/Q₁ = 1−Q₂/Q₁, 0 < η < 1"}
        </T>
      </Fade>

      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={176} size={12} fill={INK} script={false}>
          {t("fridge: COP = Q₂/W = Q₂/(Q₁−Q₂)", "fridge: COP = Q₂/W = Q₂/(Q₁−Q₂)")}
        </T>
      </Fade>

      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={204} size={12} fill={INK} script={false}>
          {t("pump: COP = Q₁/W = Q₁/(Q₁−Q₂)", "pump: COP = Q₁/W = Q₁/(Q₁−Q₂)")}
        </T>
      </Fade>

      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={230} size={11} fill={MUTED} script>
          {t("same hardware, opposite arrows", "same hardware, opposite arrows")}
        </T>
      </Fade>

      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={258} size={12} fill={INK} weight={700} script={false}>
          COP_pump = COP_fridge + 1
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.9)}>
        <T x={540} y={282} size={11} fill={INK} script={false}>
          {t("Carnot: η_max=1−T₂/T₁ · COP_fridge=T₂/(T₁−T₂) · COP_pump=T₁/(T₁−T₂)", "Carnot: η_max=1−T₂/T₁ · COP_fridge=T₂/(T₁−T₂) · COP_pump=T₁/(T₁−T₂)")}
        </T>
      </Fade>

      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <Chip x={230} y={315} w={620} h={34} fill={CREAM} stroke={RED} textFill={RED} size={12} script={false}>
          {t("η=1 violates Kelvin-Planck · COP=∞ violates Clausius", "η=1 Kelvin-Planck todta · COP=∞ Clausius todta")}
        </Chip>
      </Fade>
    </Scene>
  );
}
