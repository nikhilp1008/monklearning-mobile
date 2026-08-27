/**
 * P12Ch01 · Section 43 — "The Three Charge Densities and the Element dq"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md & SCENE_PLAYBOOK.md.
 *
 * OBJECT-RICH OPEN CHALKBOARD DESIGN (NO HEAVY CONTAINERS):
 *  - Linear Charge Density λ = Q / L (C/m)  ⇒  dq = λ dx (or λ dl)
 *  - Surface Charge Density σ = Q / A (C/m²)  ⇒  dq = σ dA
 *  - Volume Charge Density ρ = Q / V (C/m³)  ⇒  dq = ρ dV
 *
 * Beats (en [0, 6, 14, 28, 38, 48, 58, 72, 82]):
 *  0 Title "the three charge densities & the charge element dq" + drawn underline
 *  1 Hook note: 1D, 2D, and 3D charge density formulas for writing infinitesimal charge dq!
 *  2 Badge 1 & Linear Charge Density λ: dq = λ dx [C/m] (Rods, Wires, Rings)
 *  3 Badge 2 & Surface Charge Density σ: dq = σ dA [C/m²] (Sheets, Discs, Shells)
 *  4 Badge 3 & Volume Charge Density ρ: dq = ρ dV [C/m³] (Solid Spheres, Cylinders)
 *  5 Summary comparison table of λ, σ, ρ units and elements
 *  6 Grand Verdict: 1D: dq = λ dx  |  2D: dq = σ dA  |  3D: dq = ρ dV !
 */

import React from "react";
import { G, Rect } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  ringD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

function Badge({ n, cx, cy, on, delay }: { n: number; cx: number; cy: number; on: boolean; delay: number }) {
  return (
    <G>
      <Draw
        on={on}
        delay={delay}
        d={`M ${cx - 13} ${cy} A 13 13 0 1 1 ${cx + 13} ${cy} A 13 13 0 1 1 ${cx - 13} ${cy}`}
        stroke={RED}
        sw={2.2}
        dur={0.4}
      />
      <Fade on={on} delay={delay + 0.3}>
        <T x={cx} y={cy + 5} size={14} fill={RED} weight={800}>
          {n}
        </T>
      </Fade>
    </G>
  );
}

export default function P12Ch01Sec43({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ── BEAT 0: Title ── */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={58} size={24} fill={RED} script>
          {t(
            "the three charge densities & the charge element dq",
            "chaar 1D, 2D, 3D charge densities aur dq element"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 2.5)}
        d="M 200 70 C 440 66, 640 74, 880 69"
        stroke={RED}
        sw={2.4}
        dur={0.7}
      />

      {/* ── BEAT 1: Hook Note ── */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={60} y={110} size={15} fill={MUTED} script anchor="start">
          {t(
            "1D, 2D, and 3D charge density formulas for writing infinitesimal charge dq!",
            "1D, 2D, aur 3D charge density formulas for writing infinitesimal charge dq!"
          )}
        </T>
      </Fade>

      {/* ── BEAT 2: Badge 1 & Linear Charge Density λ ── */}
      <Badge n={1} cx={52} cy={165} on={beat >= 2} delay={dl(2, 0.4)} />
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={74} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("1D LINEAR CHARGE DENSITY λ = Q / L [C/m]", "1D LINEAR CHARGE DENSITY λ = Q / L [C/m]")}
        </T>
      </Fade>

      <Fade on={beat >= 2} dim={beat >= 5}>
        <G transform="translate(60, 185)">
          <Rect x={0} y={10} width={430} height={85} rx={8} fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
          <T x={215} y={48} anchor="middle" size={24} fill={INK} weight={800}>
            dq = λ dx  (or λ dl)
          </T>
          <T x={215} y={78} anchor="middle" size={13} fill={AMBER_DARK} script>
            {t("Used for wires, rods, rings, and thin arcs!", "Wires, rods, rings aur thin arcs ke liye!")}
          </T>
          <Draw on={beat >= 2} delay={dl(2, 1.6)} d="M 120 56 h 190 M 120 60 h 190" stroke={AMBER_DARK} sw={1.5} />
        </G>
      </Fade>

      {/* ── BEAT 3: Badge 2 & Surface Charge Density σ ── */}
      <Badge n={2} cx={540} cy={165} on={beat >= 3} delay={dl(3, 0.4)} />
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={562} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("2D SURFACE CHARGE DENSITY σ = Q / A [C/m²]", "2D SURFACE CHARGE DENSITY σ = Q / A [C/m²]")}
        </T>
      </Fade>

      <Fade on={beat >= 3} dim={beat >= 5}>
        <G transform="translate(540, 185)">
          <T x={0} y={25} anchor="start" size={24} fill={RED} weight={800}>
            dq = σ dA
          </T>
          <T x={0} y={65} anchor="start" size={13.5} fill={INK} weight={700}>
            Used for flat sheets, discs, and hollow shells!
          </T>
        </G>
      </Fade>

      {/* ── BEAT 4: Badge 3 & Volume Charge Density ρ ── */}
      <Badge n={3} cx={52} cy={300} on={beat >= 4} delay={dl(4, 0.4)} />
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={74} y={305} size={14} fill={RED} weight={700} anchor="start">
          {t("3D VOLUME CHARGE DENSITY ρ = Q / V [C/m³]", "3D VOLUME CHARGE DENSITY ρ = Q / V [C/m³]")}
        </T>
      </Fade>

      <Fade on={beat >= 4} dim={beat >= 6}>
        <G transform="translate(60, 325)">
          <T x={0} y={25} anchor="start" size={24} fill={GREEN} weight={800}>
            dq = ρ dV
          </T>
          <T x={0} y={65} anchor="start" size={13.5} fill={INK} weight={700}>
            Used for solid spheres and 3D dielectric volumes!
          </T>
        </G>
      </Fade>

      {/* ── BEAT 6: Grand Verdict Chip ── */}
      <Fade on={beat >= 6}>
        <Chip
          x={100}
          y={536}
          w={880}
          h={44}
          fill={GREEN}
          textFill="#ffffff"
          size={18}
        >
          {t(
            "★ VERDICT: 1D: dq = λ dx  |  2D: dq = σ dA  |  3D: dq = ρ dV !",
            "★ VERDICT: 1D: dq = λ dx  |  2D: dq = σ dA  |  3D: dq = ρ dV !"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
