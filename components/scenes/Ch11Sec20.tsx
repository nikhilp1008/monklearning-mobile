/**
 * Ch11 · Section 20 — "Board derivation: the adiabatic law and its work"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * UNVERIFIED — audio for sec 20 not yet uploaded, verify-scene.mjs could
 * not be run. Re-run once audio lands.
 *
 * Beats (8): 0 hook · 1 setup (quasi-static, Q=0) · 2 step1 first law on
 *  a step · 3 step2 eliminate dT · 4 step3 introduce γ · 5 step4 integrate
 *  ⇒ PV^γ=const (boxed) · 6 work comparison mini-diagram · 7 final: cools
 *  (spray-can effect).
 *
 * Layout plan (Anek bl−0.78s..+0.31s):
 *  title (script 26, red)   | T mid | x319..761 y38..77 (bl 64)
 *  b0 | hook (12,script)    | T mid | x540 y98
 *  b1 | setup (13)          | T mid | x540 y126
 *  b2 | step1 (14)          | T mid | x540 y155
 *  b3 | step2 (13)          | T mid | x540 y185
 *  b4 | step3 (12)          | T mid | x540 y213
 *  b5 | result chip (h36)   | Chip  | x400..680 y235..271
 *  b5 | subnote (11,script) | T mid | x540 y295
 *  b6 | mini P-V diagram    | Draw  | x250..500 y320..400
 *  b7 | final chip (h34)    | Chip  | x240..840 y440..474
 */

import React from "react";
import { Path } from 'react-native-svg';
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
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch11Sec20({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={26} fill={RED} script>
          {t("the adiabatic law and its work", "adiabatic law, aur uska work")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={98} size={12} fill={MUTED} script>
          {t("the more demanding derivation — from the first law itself", "zyada demanding derivation — first law se hi")}
        </T>
      </Fade>

      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={126} size={13} fill={INK} script={false}>
          {t("quasi-static, adiabatic ⇒ Q=0 at every step", "quasi-static, adiabatic ⇒ har step par Q=0")}
        </T>
      </Fade>

      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={155} size={14} fill={INK} script={false}>
          {t("step 1: nCv dT + P dV = 0", "step 1: nCv dT + P dV = 0")}
        </T>
      </Fade>

      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={185} size={13} fill={INK} script={false}>
          {t("step 2: P dV + V dP = nR dT", "step 2: P dV + V dP = nR dT")}
        </T>
      </Fade>

      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={213} size={12} fill={INK} script={false}>
          {t("step 3: Cv·V dP + Cp·P dV = 0, γ=Cp/Cv", "step 3: Cv·V dP + Cp·P dV = 0, γ=Cp/Cv")}
        </T>
      </Fade>

      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Chip x={400} y={235} w={280} h={36} fill={INK} textFill={CREAM} size={18} script={false}>
          PV^γ = {t("constant", "constant")}
        </Chip>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={540} y={295} size={11} fill={MUTED} script>
          (also: TV^(γ−1)=const, P^(1−γ)T^γ=const)
        </T>
      </Fade>

      {/* beat 6 — comparing isothermal and adiabatic work */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 250 400 V 320" stroke={INK} sw={1.8} dur={0.5} />
      <Draw on={beat >= 6} delay={dl(6, 0.4)} d="M 250 400 H 500" stroke={INK} sw={1.8} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <Path d="M 300 340 Q 400 355, 470 390 L 470 400 L 300 400 Z" fill={AMBER} opacity={0.2} />
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1)} d="M 300 340 Q 400 355, 470 390" stroke={GREEN} sw={2.2} dur={0.6} />
      <Draw on={beat >= 6} delay={dl(6, 1.6)} d="M 300 340 Q 360 375, 470 390" stroke={AMBER} sw={2.2} dur={0.6} />
      <Fade on={beat >= 6} delay={dl(6, 2.2)}>
        <T x={505} y={358} size={11} fill={GREEN} anchor="start" script={false}>
          {t("isothermal (bigger area)", "isothermal (bada area)")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.5)}>
        <T x={475} y={410} size={11} fill={AMBER_DARK} anchor="start" script={false}>
          {t("adiabatic (smaller area)", "adiabatic (chota area)")}
        </T>
      </Fade>

      {/* beat 7 — the cooling verdict */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <Chip x={240} y={440} w={600} h={34} fill={CREAM} stroke={AMBER} textFill={INK} size={13} script={false}>
          {t("W=(PᵢVᵢ−PfVf)/(γ−1) = −ΔU ⇒ cools (spray-can effect)", "W=(PᵢVᵢ−PfVf)/(γ−1) = −ΔU ⇒ thanda hota hai (spray-can)")}
        </Chip>
      </Fade>
    </Scene>
  );
}
