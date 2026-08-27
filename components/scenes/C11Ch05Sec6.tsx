/**
 * C11 Chemistry Ch05 · Section 6 — "Enthalpy, the delta-H to delta-U bridge,
 * and heat capacities"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md. Section type: concept/formulas, accumulating.
 *
 * Beats (board_reveal_at, en [0,9.13,10.13,11.13,12.13,13.13,14.13,15.13]):
 *  0 heading + underline: heat content at constant pressure
 *  1 formula: H = U + PV
 *  2 label: deriving the bridge, at constant T
 *  3 formula: ΔH = ΔU + Δngas · RT
 *  4 red note: Δngas = gas product moles − gas reactant moles, solids/liquids excluded
 *  5 label: heat exchanged under two constraints
 *  6 formula: qV = ΔU    qP = ΔH
 *  7 formula: Cp − Cv = R (ideal gas, per mole)
 *
 * Layout plan (all centered x540, accumulating top to bottom):
 *  b0 | heading (18, ink, w700)       | T mid  | x?..?      y86..106 (bl100)
 *  b0 | underline                     | Draw   | y112 x400..680
 *  b1 | chip H=U+PV (22)              | Chip   | x455..625  y130..172
 *  b2 | label2 (14, muted)            | T mid  | x?..?      y199..214 (bl210)
 *  b3 | chip ΔH=ΔU+Δngas·RT (20)      | Chip   | x380..700  y228..272
 *  b4 | red note chip (14)            | Chip   | x260..880  y290..335
 *  b5 | label5 (14, muted)            | T mid  | x?..?      y354..369 (bl365)
 *  b6 | chip qV=ΔU  qP=ΔH (20)        | Chip   | x400..680  y382..424
 *  b7 | chip Cp−Cv=R (18)             | Chip   | x380..700  y452..490
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  INK,
  MUTED,
  RED,
  CREAM,
  AMBER_DARK,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch05Sec6({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={26} fill={RED} script>
          {t("enthalpy: the ΔH–ΔU bridge", "enthalpy: the ΔH–ΔU bridge")}
        </T>
      </Fade>

      {/* beat 0 — heading */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={100} size={18} weight={700} fill={INK}>
          {t("heat content at constant pressure", "heat content, constant pressure par")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.6)} d="M 400 112 C 460 109, 620 109, 680 112" stroke={AMBER_DARK} sw={2} dur={0.5} />

      {/* beat 1 — H = U + PV */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <Chip x={455} y={130} w={170} h={42} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={22} script={false}>
          H = U + PV
        </Chip>
      </Fade>

      {/* beat 2 — derive label */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={540} y={210} size={14} fill={MUTED}>
          {t("deriving the bridge, at constant T:", "bridge derive karte hain, constant T par:")}
        </T>
      </Fade>

      {/* beat 3 — ΔH = ΔU + Δngas·RT */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <Chip x={380} y={228} w={320} h={44} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={20} script={false}>
          ΔH = ΔU + Δngas · RT
        </Chip>
      </Fade>

      {/* beat 4 — Δngas red note */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <Chip x={260} y={290} w={620} h={45} fill={CREAM} stroke={RED} textFill={RED} size={14} script={false}>
          {t(
            "Δngas = gas product moles − gas reactant moles (solids/liquids excluded)",
            "Δngas = gas products ke moles − gas reactants ke moles, solids/liquids nahi ginte"
          )}
        </Chip>
      </Fade>

      {/* beat 5 — two constraints label */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={365} size={14} fill={MUTED}>
          {t("heat exchanged under two constraints:", "do common constraints mein heat exchange hota hai:")}
        </T>
      </Fade>

      {/* beat 6 — qV = ΔU, qP = ΔH */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <Chip x={400} y={382} w={280} h={42} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={20} script={false}>
          qV = ΔU   ·   qP = ΔH
        </Chip>
      </Fade>

      {/* beat 7 — Cp - Cv = R */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <Chip x={380} y={452} w={320} h={38} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={18} script={false}>
          {t("Cp − Cv = R  (ideal gas, per mole)", "Cp − Cv = R  (ideal gas, per mole)")}
        </Chip>
      </Fade>
    </Scene>
  );
}
