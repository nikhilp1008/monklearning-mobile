/**
 * Ch11 · Section 18 — "Four processes, adiabatic relations, one master law"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * UNVERIFIED — audio for sec 18 not yet uploaded, verify-scene.mjs could
 * not be run. Dense formula-sheet section — double-check row/label
 * clearances by eye once verified.
 *
 * Beats (9): 0 hook · 1 isochoric row · 2 isobaric row · 3 isothermal row ·
 *  4 adiabatic row · 5 adiabatic 3 equivalent forms · 6 polytropic master ·
 *  7 slopes-at-a-point diagram · 8 verdict: adiabatic γ× steeper.
 *
 * Layout plan (Anek bl−0.78s..+0.31s):
 *  title (script 24, red)   | T mid | x269..810 y40..76 (bl 64)
 *  b0 | hook (12,script)    | T mid | x540 y94
 *  b1..4 | 4 rows (14/13)   | T st  | x100 (name) / x280 (formula) y128/160/192/224
 *  b5 | relations (12)      | T mid | x540 y260
 *  b6 | "PV^x=const"(15,w800)| T mid | x540 y295
 *  b6 | sub1 (12)           | T mid | x540 y318
 *  b6 | sub2 (11,script)    | T mid | x540 y340
 *  b7 | 3 slope lines       | Draw  | c(400,375) → 3 endpoints
 *  b7 | 3 labels (11)       | T st  | x505/505/485 y378/408/448
 *  b8 | verdict (14,w700)   | T mid | x540 y480
 *  b8 | gamma values (12,scr)| T mid | x540 y505
 */

import React from "react";
import { Circle } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

const ROWS: [number, string, string][] = [
  [128, "isochoric (V=0)", "W=0, Q=ΔU=nCvΔT"],
  [160, "isobaric (P=0)", "W=nRΔT, Q=nCpΔT"],
  [192, "isothermal (T=0)", "ΔU=0, Q=W=nRT·ln(Vf/Vi)"],
  [224, "adiabatic (Q=0)", "ΔU=−W, W=nRΔT/(γ−1)"],
];

export default function Ch11Sec18({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={24} fill={RED} script>
          {t("four processes, and the polytropic master", "chaar processes, aur polytropic master")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={94} size={12} fill={MUTED} script>
          {t("the complete formula sheet for this subtopic", "is subtopic ka complete formula sheet")}
        </T>
      </Fade>

      {ROWS.map(([y, name, formula], i) => (
        <Fade key={y} on={beat >= i + 1} delay={dl(i + 1, 0.3)}>
          <T x={100} y={y} size={14} fill={INK} weight={700} anchor="start" script={false}>
            {name}
          </T>
          <T x={280} y={y} size={13} fill={INK} anchor="start" script={false}>
            {formula}
          </T>
        </Fade>
      ))}

      {/* beat 5 — three equivalent adiabatic forms */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={260} size={12} fill={AMBER_DARK} script={false}>
          PV^γ=const · TV^(γ−1)=const · P^(1−γ)T^γ=const
        </T>
      </Fade>

      {/* beat 6 — the polytropic master law */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={295} size={15} fill={INK} weight={800} script={false}>
          PV^x = constant
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.9)}>
        <T x={540} y={318} size={12} fill={INK} script={false}>
          W=nRΔT/(1−x), C=Cv+R/(1−x)
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.5)}>
        <T x={540} y={340} size={11} fill={MUTED} script>
          {t("x=0,1,γ,∞ recovers all four processes", "x=0,1,γ,∞ se sab chaar processes")}
        </T>
      </Fade>

      {/* beat 7 — slopes at a shared point */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <Circle cx={400} cy={375} r={4} fill={INK} />
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 0.4)} d="M 400 375 H 500" stroke={AMBER_DARK} sw={2.2} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 1)}>
        <T x={505} y={378} size={11} fill={AMBER_DARK} anchor="start" script={false}>
          {t("isobaric: slope=0", "isobaric: slope=0")}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 1.4)} d="M 400 375 L 500 405" stroke={GREEN} sw={2.2} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 2)}>
        <T x={505} y={408} size={11} fill={GREEN} anchor="start" script={false}>
          {t("isothermal: −P/V", "isothermal: −P/V")}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 2.4)} d="M 400 375 L 480 445" stroke={AMBER} sw={2.2} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 3)}>
        <T x={485} y={448} size={11} fill={AMBER_DARK} anchor="start" script={false}>
          {t("adiabatic: −γP/V", "adiabatic: −γP/V")}
        </T>
      </Fade>

      {/* beat 8 — verdict */}
      <Fade on={beat >= 8} delay={dl(8, 0.4)}>
        <T x={540} y={480} size={14} fill={INK} weight={700} script={false}>
          {t("adiabatic is γ times steeper", "adiabatic γ guna zyada steep hai")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 1)}>
        <T x={540} y={505} size={12} fill={MUTED} script>
          γ = 5/3 ({t("mono", "mono")}) · 7/5 ({t("di", "di")}) · 4/3 ({t("poly", "poly")})
        </T>
      </Fade>
    </Scene>
  );
}
