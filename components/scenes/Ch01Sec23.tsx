/**
 * Ch01 · Section 23 — "The rest of the table, and the homogeneity statement"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 6.6, 27.6, 45.9, 68.3, 86.5, 102.7, 120.3]):
 *  0 title + header · 1 momentum & impulse (same formula!) · 2 density (the cube)
 *  3 surface tension (the trap) · 4 viscosity (near-miss with pressure)
 *  5 Planck's h · 6 big G (the negative mass power)
 *  7 the red box: formal homogeneity + the dimensionless family
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | title (script 28, red) mid bl 62 · header bl 112 · underline y122
 *  b1-6 | rows bl 150+48i: quantity x70 st · from x300 st (script 13) ·
 *        dim x560 st (sans 16 amber) · unit x780 st (script 14) · note x880 st (script 13)
 *  b7 | red box x60..1020 y430..570 · line1 (sans 16) bl 470 · line2 (script 15)
 *       bl 510 · line3 (script 15, amber) bl 551
 */

import React from "react";
import { G } from 'react-native-svg';
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
  RED,
  Scene,
} from '@/components/scenes/kit';

/** [quantity, from, dim, unit, note-en, note-hi, beat] */
const ROWS: [string, string, string, string, string, string, number][] = [
  ["momentum · impulse", "m·v — F·t", "[M L T⁻¹]", "kg·m/s", "same formula!", "same formula!", 1],
  ["density", "m ÷ V", "[M L⁻³]", "kg/m³", "the cube lives here", "cube yahin se aata", 2],
  ["surface tension", "F ÷ L", "[M T⁻²]", "N/m", "favourite trap!", "favourite trap!", 3],
  ["viscosity η", "", "[M L⁻¹ T⁻¹]", "Pa·s", "pressure ± one T!", "pressure ± ek T!", 4],
  ["Planck's h", "E ÷ ν", "[M L² T⁻¹]", "J·s", "the Planck-length one", "Planck-length wala", 5],
  ["big G", "", "[M⁻¹ L³ T⁻²]", "N·m²/kg²", "only negative M!", "sirf isme −M!", 6],
];

const rowY = (i: number) => 150 + i * 48;

export default function Ch01Sec23({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — scorers vs guessers */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={62} size={28} fill={RED} script>
          {t(
            "the rest of the table — scorers vs guessers",
            "table ka baaki hissa — scorer vs tukkebaaz"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 3.5)}>
        <T x={70} y={112} size={13} fill={MUTED} anchor="start">
          {t("quantity", "quantity")}
        </T>
        <T x={300} y={112} size={13} fill={MUTED} anchor="start">
          {t("built from", "kis se bana")}
        </T>
        <T x={560} y={112} size={13} fill={MUTED} anchor="start">
          {t("dimensions", "dimensions")}
        </T>
        <T x={780} y={112} size={13} fill={MUTED} anchor="start">
          unit
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 4.5)}
        d="M 60 122 H 1020"
        stroke={MUTED}
        sw={1.4}
        dur={0.7}
      />

      {/* the six rows */}
      {ROWS.map(([qty, from, dim, unit, nEn, nHi, k], i) => {
        const y = rowY(i);
        return (
          <G key={qty}>
            <Fade on={beat >= k} delay={dl(k, 1)}>
              <T x={70} y={y} size={16} fill={INK} weight={600} anchor="start">
                {qty}
              </T>
            </Fade>
            {from && (
              <Fade on={beat >= k} delay={dl(k, 3)}>
                <T x={300} y={y} size={13} fill={MUTED} script anchor="start">
                  {`= ${from}`}
                </T>
              </Fade>
            )}
            <Fade on={beat >= k} delay={dl(k, 5.5)}>
              <T x={560} y={y} size={16} fill={AMBER_DARK} weight={700} anchor="start">
                {dim}
              </T>
            </Fade>
            <Fade on={beat >= k} delay={dl(k, 7.5)}>
              <T x={780} y={y} size={14} fill={INK} script anchor="start">
                {unit}
              </T>
            </Fade>
            <Fade on={beat >= k} delay={dl(k, 12)}>
              <T x={890} y={y} size={13} fill={RED} script anchor="start">
                {t(nEn, nHi)}
              </T>
            </Fade>
          </G>
        );
      })}

      {/* beat 7 — the two definitions in the red box */}
      <Draw
        on={beat >= 7}
        delay={dl(7, 1)}
        d="M 72 430 h 936 q 12 0 12 12 v 116 q 0 12 -12 12 h -936 q -12 0 -12 -12 v -116 q 0 -12 12 -12"
        stroke={RED}
        sw={2.4}
        dur={1}
      />
      <Fade on={beat >= 7} delay={dl(7, 3)}>
        <T x={540} y={470} size={16} fill={INK} weight={700}>
          {t(
            "homogeneity, formally:  [term₁] = [term₂] = … = [LHS]",
            "homogeneity, formally:  [term₁] = [term₂] = … = [LHS]"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 10)}>
        <T x={540} y={510} size={15} fill={INK} script>
          {t(
            "dimensionless: π · 2 · strain · refractive index · rel. density · angles",
            "dimensionless: π · 2 · strain · refractive index · rel. density · angles"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 18)}>
        <T x={540} y={551} size={15} fill={AMBER_DARK} script>
          {t("every single one: [M⁰ L⁰ T⁰]", "har ek ki value: [M⁰ L⁰ T⁰]")}
        </T>
      </Fade>
    </Scene>
  );
}
