/**
 * C11 Chemistry Ch03 · Section 19 — "Ionisation enthalpy: definition and trend"
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 7.68, 27.22, 39.85, 57.51, 70.14, 88.41, 103.42]):
 *  0 title + underline
 *  1 definition, one dense line
 *  2 equation: X(g) → X⁺(g) + e⁻, ΔiH1
 *  3 red-margin: always positive; ΔiH1 < ΔiH2 < ΔiH3
 *  4 why it climbs + units (kJ/mol)
 *  5 trend: across period ↑, down group ↓
 *  6 THE SAWTOOTH: IE vs Z curve, H through K (19 points)
 *  7 red-margin: peaks at noble gases, troughs at alkali metals (highlighted)
 *
 * Layout plan (compact text block b1-5, chart b6-7 below):
 *  b1 | definition (13, ink)         | T mid | x?..?    y89..105 (bl 100)
 *  b2 | equation (14,w700,ink)       | T mid | x?..?    y113..128 (bl 124)
 *  b3 | red margin bar + line        | Draw  | x70 y132..160 (bl 150)
 *  b4 | why+units (13, ink)          | T mid | x?..?    y165..180 (bl 176)
 *  b5 | trend (13,w700,amber_dark)   | T mid | x?..?    y189..204 (bl 200)
 *  b6 | sawtooth curve, 19 points    | Draw  | x100..982 y240..390
 *  b6 | "IE" axis hint               | T st  | x70  y240
 *  b7 | 3 peak rings+labels (green)  | Draw  | He/Ne/Ar
 *  b7 | 3 trough rings+labels (red)  | Draw  | Li/Na/K
 *  b7 | x-axis label                 | T mid | x?..?    y425..430 (bl 430)
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
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

const SYM = ["H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne", "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar", "K"];
const Y = [330, 240, 375, 353.6, 337.1, 320.7, 304.3, 287.9, 271.4, 255, 378, 364.7, 351.4, 338.1, 324.9, 311.6, 298.3, 285, 390];
const X = SYM.map((_, i) => 100 + i * 49);
const PEAKS = [1, 9, 17]; // He, Ne, Ar
const TROUGHS = [2, 10, 18]; // Li, Na, K

export default function C11Ch03Sec19({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const curveD = "M " + X.map((x, i) => `${x},${Y[i]}`).join(" L ");

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("ionisation enthalpy: definition and trend", "ionisation enthalpy: definition aur trend")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 4)} d="M 380 88 C 450 84, 630 84, 700 88" stroke={RED} sw={2.4} dur={0.7} />

      {/* beat 1 — definition */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={100} size={13} fill={INK}>
          {t("energy to remove the most loosely held e⁻ from 1 mole isolated gaseous atoms", "1 mole isolated gaseous atoms se sabse loose e⁻ hatane ki energy")}
        </T>
      </Fade>

      {/* beat 2 — the equation */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={124} size={14} weight={700} fill={INK}>
          {"X(g) → X⁺(g) + e⁻   ΔiH1"}
        </T>
      </Fade>

      {/* beat 3 — red-margin: positive, successive climb */}
      <Draw on={beat >= 3} delay={dl(3, 0.2)} d="M 70 132 L 70 160" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 0.7)}>
        <T x={94} y={150} size={13} weight={700} fill={INK} anchor="start">
          {t("always positive (endothermic); ΔiH1 < ΔiH2 < ΔiH3", "hamesha positive (endothermic); ΔiH1 < ΔiH2 < ΔiH3")}
        </T>
      </Fade>

      {/* beat 4 — why it climbs, units */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={176} size={13} fill={INK}>
          {t("torn from a more positive ion each time — units: kJ/mol", "har baar zyada positive ion se — units: kJ/mol")}
        </T>
      </Fade>

      {/* beat 5 — the trend */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={200} size={13} weight={700} fill={AMBER_DARK}>
          {t("across period: IE ↑ (Zeff ↑) · down group: IE ↓ (shielding ↑)", "period ke across: IE ↑ (Zeff ↑) · group mein neeche: IE ↓")}
        </T>
      </Fade>

      {/* beat 6 — the sawtooth curve */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={70} y={244} size={12} fill={MUTED} anchor="start">IE</T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 0.4)} d={curveD} stroke={INK} sw={2} dur={1.4} />
      <Fade on={beat >= 6} delay={dl(6, 1.9)}>
        {X.map((x, i) => (
          <Circle key={i} cx={x} cy={Y[i]} r={3} fill={INK} />
        ))}
      </Fade>

      {/* beat 7 — red-margin: peaks and troughs */}
      {PEAKS.map((i) => (
        <Fade key={i} on={beat >= 7} delay={dl(7, 0.3)}>
          <Circle cx={X[i]} cy={Y[i]} r={7} fill="none" stroke={GREEN} strokeWidth={2.4} />
          <T x={X[i]} y={225} size={11} fill={GREEN} weight={700}>{SYM[i]}</T>
        </Fade>
      ))}
      {TROUGHS.map((i) => (
        <Fade key={i} on={beat >= 7} delay={dl(7, 0.6)}>
          <Circle cx={X[i]} cy={Y[i]} r={7} fill="none" stroke={RED} strokeWidth={2.4} />
          <T x={X[i]} y={408} size={11} fill={RED} weight={700}>{SYM[i]}</T>
        </Fade>
      ))}
      <Fade on={beat >= 7} delay={dl(7, 1.1)}>
        <T x={540} y={430} size={12} fill={MUTED}>
          {t("atomic number Z (1 → 19): peaks = noble gases, troughs = alkali metals", "atomic number Z (1 → 19): peaks = noble gases, troughs = alkali metals")}
        </T>
      </Fade>
    </Scene>
  );
}
