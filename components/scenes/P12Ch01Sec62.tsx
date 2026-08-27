/**
 * P12Ch01 · Section 62 — "Worked Example: Sphere With Non-Uniform Volume Density"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md & SCENE_PLAYBOOK.md.
 *
 * OBJECT-RICH OPEN CHALKBOARD DESIGN (NO HEAVY CONTAINERS):
 *  - Solid sphere radius R with non-uniform volume charge density ρ(r) = ρ₀ (r / R).
 *  - Step 1: Calculate total charge Q inside sphere:
 *    Q = ∫₀ᴿ ρ(r) (4π r² dr) = ∫₀ᴿ ρ₀ (r/R) (4π r² dr) = (4π ρ₀ / R) [ r⁴ / 4 ]₀ᴿ = π ρ₀ R³ !
 *  - Step 2: Electric field inside (r ≤ R):
 *    Q_enc(r) = π ρ₀ (r⁴ / R). Apply Gauss: E (4π r²) = Q_enc / ε₀  ⇒  E_in = (ρ₀ r² / 4 ε₀ R) (Quadratic r² dependence!)
 *  - Step 3: Electric field outside (r ≥ R):
 *    E_out = k Q / r² = (ρ₀ R³ / 4 ε₀ r²)
 *
 * Beats (en [0, 6, 18, 32, 46, 58, 68, 82, 92]):
 *  0 Title "worked example: sphere with non-uniform volume density" + drawn underline
 *  1 Hook note: integrating non-uniform volume density ρ(r) = ρ₀ r / R to find Q and E(r)!
 *  2 Badge 1 & Total Charge Q: Q = π ρ₀ R³
 *  3 Badge 2 & Field Inside (r ≤ R): E_in = (ρ₀ r²) / (4 ε₀ R)  (Quadratic r² increase!)
 *  4 Badge 3 & Field Outside (r ≥ R): E_out = (ρ₀ R³) / (4 ε₀ r²)  (Inverse-square 1/r² decay!)
 *  5 Comparison with uniform solid sphere (Linear r increase vs Quadratic r² increase!)
 *  6 Grand Verdict: Q = π ρ₀ R³  |  Inside: E ∝ r²  |  Outside: E ∝ 1/r² !
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

export default function P12Ch01Sec62({ currentTime, reveals, language }: SceneProps) {
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
            "worked example: sphere with non-uniform volume density",
            "worked example: non-uniform volume density wala sphere"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 2.5)}
        d="M 180 70 C 440 66, 640 74, 900 69"
        stroke={RED}
        sw={2.4}
        dur={0.7}
      />

      {/* ── BEAT 1: Hook Note ── */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={60} y={110} size={15} fill={MUTED} script anchor="start">
          {t(
            "integrating non-uniform volume density ρ(r) = ρ₀ r / R to find Q and E(r)!",
            "non-uniform volume density ρ(r) = ρ₀ r / R integrate karke Q aur E(r) nikaalna!"
          )}
        </T>
      </Fade>

      {/* ── BEAT 2: Badge 1 & Total Charge Q ── */}
      <Badge n={1} cx={52} cy={165} on={beat >= 2} delay={dl(2, 0.4)} />
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={74} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("TOTAL CHARGE Q = π ρ₀ R³", "TOTAL CHARGE Q = π ρ₀ R³")}
        </T>
      </Fade>

      <Fade on={beat >= 2} dim={beat >= 5}>
        <G transform="translate(60, 185)">
          <Rect x={0} y={10} width={430} height={85} rx={8} fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
          <T x={215} y={48} anchor="middle" size={20} fill={INK} weight={800}>
            Q = ∫₀ᴿ ρ₀ (r/R) (4π r² dr) = π ρ₀ R³
          </T>
          <T x={215} y={78} anchor="middle" size={13} fill={AMBER_DARK} script>
            {t("Volume element dV = 4π r² dr spherical shell", "Volume element dV = 4π r² dr spherical shell")}
          </T>
          <Draw on={beat >= 2} delay={dl(2, 1.6)} d="M 100 56 h 230 M 100 60 h 230" stroke={AMBER_DARK} sw={1.5} />
        </G>
      </Fade>

      {/* ── BEAT 3: Badge 2 & Field Inside (r ≤ R) ── */}
      <Badge n={2} cx={540} cy={165} on={beat >= 3} delay={dl(3, 0.4)} />
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={562} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("FIELD INSIDE (r ≤ R): E_in ∝ r²", "FIELD INSIDE (r ≤ R): E_in ∝ r²")}
        </T>
      </Fade>

      <Fade on={beat >= 3} dim={beat >= 5}>
        <G transform="translate(540, 185)">
          <T x={0} y={25} anchor="start" size={14} fill={INK} weight={700}>
            Q_enc(r) = π ρ₀ (r⁴ / R)
          </T>
          <T x={0} y={65} anchor="start" size={24} fill={RED} weight={800}>
            E_in = (ρ₀ r²) / (4 ε₀ R)  (Quadratic!)
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
            "★ VERDICT: Q = π ρ₀ R³  |  Inside: E ∝ r²  |  Outside: E ∝ 1/r² !",
            "★ VERDICT: Q = π ρ₀ R³  |  Inside: E ∝ r²  |  Outside: E ∝ 1/r² !"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
