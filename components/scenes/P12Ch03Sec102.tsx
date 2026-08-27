/**
 * P12Ch02 · Section 102 — "Master formula sheet and units"
 * Beats (en [0,2,3,5,6,7,8]): 7 beats
 */

import React from "react";
import { G, Rect } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, ringD,
  INK, MUTED, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

function Badge({ n, cx, cy, on, delay }: { n: number; cx: number; cy: number; on: boolean; delay: number }) {
  return (
    <G>
      <Draw on={on} delay={delay}
        d={`M ${cx - 13} ${cy} A 13 13 0 1 1 ${cx + 13} ${cy} A 13 13 0 1 1 ${cx - 13} ${cy}`}
        stroke={RED} sw={2.2} dur={0.4} />
      <Fade on={on} delay={delay + 0.3}>
        <T x={cx} y={cy + 5} size={14} fill={RED} weight={800}>{n}</T>
      </Fade>
    </G>
  );
}

export default function P12Ch03Sec102({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={58} size={24} fill={RED} script>
          {t("Master Formula Sheet: Current Electricity", "Master Formula Sheet: Current Electricity")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 200 70 C 440 66, 640 74, 880 69" stroke={RED} sw={2.4} dur={0.7} />

      {/* BEAT 2 & 3: Microscopic & Resistance Formulas */}
      <Badge n={1} cx={52} cy={140} on={beat >= 2} delay={dl(2, 0.4)} />
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={74} y={145} size={14} fill={RED} weight={700} anchor="start">MICROSCOPIC & RESISTANCE FORMULAS</T>
      </Fade>
      <Fade on={beat >= 2} dim={beat >= 5}>
        <G transform="translate(60, 160)">
          <Rect x={0} y={5} width={450} height={60} rx={8} fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
          <T x={225} y={30} anchor="middle" size={15} fill={INK} weight={800}>
            I = n e A v_d   |   v_d = (e E τ) / m   |   J = σ E
          </T>
          <T x={225} y={52} anchor="middle" size={15} fill={INK} weight={800}>
            R = ρ L / A   |   ρ_T = ρ₀(1 + α ΔT)   |   R ∝ L²
          </T>
        </G>
      </Fade>

      {/* BEAT 5 & 6: Power & EMF Cell Formulas */}
      <Badge n={2} cx={540} cy={140} on={beat >= 5} delay={dl(5, 0.4)} />
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={562} y={145} size={14} fill={RED} weight={700} anchor="start">POWER, CELLS & INSTRUMENTS</T>
      </Fade>
      <Fade on={beat >= 5} dim={beat >= 7}>
        <G transform="translate(540, 160)">
          <Rect x={0} y={5} width={480} height={60} rx={8} fill={CREAM} stroke={GREEN} strokeWidth={1.8} />
          <T x={240} y={30} anchor="middle" size={15} fill={INK} weight={800}>
            P = VI = I²R = V²/R   |   V = E ∓ Ir   |   P_max = E²/(4r)
          </T>
          <T x={240} y={52} anchor="middle" size={15} fill={GREEN} weight={800}>
            P/Q = R/S   |   X = R(100−l)/l   |   E₁/E₂ = l₁/l₂
          </T>
        </G>
      </Fade>

      {/* BEAT 7 & 8: SI Units & Dimensions */}
      <Badge n={3} cx={52} cy={270} on={beat >= 7} delay={dl(7, 0.4)} />
      <Fade on={beat >= 7} delay={dl(7, 0.8)}>
        <T x={74} y={275} size={14} fill={RED} weight={700} anchor="start">UNITS & DIMENSIONS SUMMARY</T>
      </Fade>
      <Fade on={beat >= 7}>
        <G transform="translate(60, 290)">
          <Rect x={0} y={5} width={960} height={50} rx={8} fill={CREAM} stroke={GREEN} strokeWidth={1.8} />
          <T x={480} y={35} anchor="middle" size={15} fill={INK} weight={800} script>
            Current (A) | Resistance [ML²T⁻³A⁻²] | Resistivity [ML³T⁻³A⁻²] | 1 kWh = 3.6 × 10⁶ J
          </T>
        </G>
      </Fade>

      {/* BEAT 8: Summary Chip */}
      <Fade on={beat >= 7}>
        <Chip x={100} y={480} w={880} h={44} fill={GREEN} textFill="#ffffff" size={18}>
          {t(
            "★ Complete Chapter 3 Master Formula Sheet! All key equations & units compiled! ✓",
            "★ Complete Chapter 3 Master Formula Sheet! Sabhi formulas & units ek jagah! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
