/**
 * Ch11 · Section 21 — "An isothermal triple, and an adiabatic squeeze"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * UNVERIFIED — audio for sec 21 not yet uploaded, verify-scene.mjs could
 * not be run. Two-column pattern mirrors already-PASS Sec5/Sec12. Re-run
 * once audio lands.
 *
 * Beats (8): 0 hook · 1 LEFT given (2mol,300K,V→3V) · 2 compute W≈5.48kJ ·
 *  3 Q=W note · 4 RIGHT given (γ=5/3, V→V/8) · 5 compute T×4 · 6 common
 *  mistakes · 7 sanity check.
 *
 * Layout plan — LEFT col center 285, RIGHT col center 795:
 *  b1 | header chip(h26)     | Chip  | x80..280 / x610..830 y148..174
 *  b1 | given (14)           | T st  | x90/620 y196
 *  b2 | compute (12)         | T mid | x285/795 y228
 *  b2 | stamp chip (h30)     | Chip  | x195..375 / x695..895 y248..278
 *  b3 | note (12,script)     | T mid | x285 y310
 *  b6 | mistakes (12,script) | T mid | x795 y295
 *  b7 | sanity (12,script)   | T mid | x795 y325
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
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch11Sec21({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={26} fill={RED} script>
          {t("an isothermal triple, and an adiabatic squeeze", "isothermal triple, aur adiabatic squeeze")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={100} size={13} fill={MUTED} script>
          {t("one applies isothermal work, the other is a ratio trap", "ek isothermal work use karta hai, doosra ratio trap")}
        </T>
      </Fade>

      <Draw on={beat >= 0} delay={dl(0, 0.6)} d="M 540 138 L 540 420" stroke={MUTED} sw={1.4} dur={0.5} />

      {/* ===== LEFT — isothermal triple ===== */}
      <Fade on={beat >= 1} delay={dl(1, 0.1)}>
        <Chip x={80} y={148} w={200} h={26} fill={INK} textFill={CREAM} size={12} script={false}>
          {t("ISOTHERMAL ×3", "ISOTHERMAL ×3")}
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <T x={90} y={196} size={14} fill={INK} anchor="start" script={false}>
          2.0 mol, 300 K, V → 3V
        </T>
      </Fade>

      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={285} y={228} size={12} fill={INK} script={false}>
          W = nRT ln3 = (2)(8.314)(300)(1.099)
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <Chip x={195} y={248} w={180} h={30} fill={INK} textFill={CREAM} size={15} script={false}>
          W ≈ 5.48 kJ
        </Chip>
      </Fade>

      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={285} y={310} size={12} fill={MUTED} script>
          {t("Q = W (ΔU=0) — isothermal signature", "Q = W (ΔU=0) — isothermal ka signature")}
        </T>
      </Fade>

      {/* ===== RIGHT — the adiabatic squeeze ===== */}
      <Fade on={beat >= 4} delay={dl(4, 0.1)}>
        <Chip x={610} y={148} w={220} h={26} fill={INK} textFill={CREAM} size={12} script={false}>
          {t("ADIABATIC SQUEEZE", "ADIABATIC SQUEEZE")}
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={620} y={196} size={14} fill={INK} anchor="start" script={false}>
          {t("monatomic, γ=5/3, V → V/8", "monatomic, γ=5/3, V → V/8")}
        </T>
      </Fade>

      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={795} y={228} size={12} fill={INK} script={false}>
          Tf/Ti = 8^(2/3) = (2³)^(2/3) = 2²
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <Chip x={695} y={248} w={200} h={30} fill={INK} textFill={CREAM} size={15} script={false}>
          {t("T ×4 (quadruples)", "T ×4 (quadruples)")}
        </Chip>
      </Fade>

      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={795} y={295} size={12} fill={RED} script>
          {t("watch: γ vs γ−1, inverted ratio", "dhyaan: γ vs γ−1, ratio ulta na ho")}
        </T>
      </Fade>

      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={795} y={325} size={12} fill={GREEN} script>
          {t("compression ⇒ T↑ ⇒ factor>1 (kills ¼)", "compression ⇒ T↑ ⇒ factor>1 (¼ galat)")}
        </T>
      </Fade>
    </Scene>
  );
}
