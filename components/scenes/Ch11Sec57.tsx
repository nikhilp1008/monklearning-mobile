/**
 * Ch11 · Section 57 — "An expanding gas, and melting ice"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * UNVERIFIED — audio for sec 57 not yet uploaded, verify-scene.mjs could
 * not be run. Two-column pattern mirrors already-PASS Sec5/12/21/29/36/43/44/51/52.
 * Re-run once audio lands.
 *
 * Beats (8): 0 hook · 1 both raise entropy (intro) · 2 LEFT given
 *  (2mol,400K,V→2V) · 3 ΔS≈11.5 J/K · 4 universe ΔS=0 (reversible) ·
 *  5 RIGHT given (0.5kg ice) · 6 ΔS≈612 J/K · 7 verdict: large positive.
 *
 * Layout plan — LEFT col center 285, RIGHT col center 795:
 *  b2 | header chip(h26)   | Chip  | x100..300 / x600..800 y148..174
 *  b2/5 | given (12)       | T st  | x110/610 y194
 *  b3/6 | stamp chip (h32) | Chip  | x155..415 / x665..925 y224..256
 *  b4/7 | note (11,script) | T mid | x285 / x795 y280
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, MUTED, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch11Sec57({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={23} fill={RED} script>
          {t("an expanding gas, and melting ice", "expanding gas, aur melting ice")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={98} size={12} fill={MUTED} script>
          {t("two clean single-formula changes — both positive", "do clean single-formula changes — dono positive")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={122} size={11} fill={MUTED} script>
          {t("gas spreading + ice melting — both raise entropy", "gas failna + ice pighalna — dono entropy badhate")}
        </T>
      </Fade>

      <Draw on={beat >= 1} delay={dl(1, 0.6)} d="M 540 138 L 540 380" stroke={MUTED} sw={1.4} dur={0.5} />

      {/* ===== LEFT — expanding gas ===== */}
      <Fade on={beat >= 2} delay={dl(2, 0.1)}>
        <Chip x={100} y={148} w={200} h={26} fill={INK} textFill={CREAM} size={12} script={false}>
          {t("EXPANDING GAS", "EXPANDING GAS")}
        </Chip>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={110} y={194} size={12} fill={INK} anchor="start" script={false}>
          {t("2mol, 400K, V→2V, isothermal rev.", "2mol, 400K, V→2V, isothermal rev.")}
        </T>
      </Fade>

      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <Chip x={155} y={224} w={260} h={32} fill={INK} textFill={CREAM} size={14} script={false}>
          ΔS=nR·ln2 ≈ 11.5 J/K
        </Chip>
      </Fade>

      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={285} y={280} size={11} fill={GREEN} script>
          {t("universe ΔS=0 (reversible!)", "universe ΔS=0 (reversible!)")}
        </T>
      </Fade>

      {/* ===== RIGHT — melting ice ===== */}
      <Fade on={beat >= 5} delay={dl(5, 0.1)}>
        <Chip x={600} y={148} w={200} h={26} fill={INK} textFill={CREAM} size={12} script={false}>
          {t("MELTING ICE", "MELTING ICE")}
        </Chip>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={610} y={194} size={12} fill={INK} anchor="start" script={false}>
          {t("0.5kg ice → water at 0°C", "0.5kg ice → water 0°C par")}
        </T>
      </Fade>

      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <Chip x={665} y={224} w={260} h={32} fill={INK} textFill={CREAM} size={14} script={false}>
          ΔS=mL/T ≈ 612 J/K
        </Chip>
      </Fade>

      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={795} y={280} size={11} fill={INK} script>
          {t("lattice→liquid: LARGE positive ΔS", "lattice→liquid: BADA positive ΔS")}
        </T>
      </Fade>
    </Scene>
  );
}
