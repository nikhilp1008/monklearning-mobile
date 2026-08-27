/**
 * P12Ch01 · Section 30 — "Worked Example: Axial Field of a Charged Ring and Its Maximum"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md & SCENE_PLAYBOOK.md.
 *
 * OBJECT-RICH OPEN CHALKBOARD DESIGN (NO HEAVY CONTAINERS):
 *  - Uniformly charged ring of radius R and total charge Q
 *  - Axial electric field formula: E(x) = k Q x / (R² + x²)^(3/2)
 *  - Field at center (x = 0): E = 0 (perfect cancellation)
 *  - Maximum field position: set dE/dx = 0 ⇒ x = R / √2 ≈ 0.707 R
 *  - Maximum field value: E_max = (2 / 3√3) (k Q / R²)
 *  - Drawn 3D perspective ring with axial line x and peak field graph
 *
 * Beats (en [0, 6, 18, 32, 44, 58, 70, 84, 96]):
 *  0 Title "worked example: axial field of charged ring & its maximum" + drawn underline
 *  1 Hook note: finding where electric field reaches its peak along a ring's axis!
 *  2 Badge 1 & Axial Ring Field Formula: E(x) = k Q x / (R² + x²)^(3/2)
 *  3 Center check (x = 0): E_center = 0 (symmetric cancellation!)
 *  4 Badge 2 & Maximum Field Position: dE/dx = 0 ⇒ x = R / √2
 *  5 Peak field magnitude: E_max = (2 / 3√3) (k Q / R²) ≈ 0.385 (k Q / R²)
 *  6 Drawn axial field curve showing E = 0 at x=0, peak at x = R/√2, and 1/x² tail
 *  7 Limiting check for x >> R: E ≈ k Q / x² (ring acts like point charge!)
 *  8 Grand Verdict: E(x) = k Q x / (R²+x²)^(3/2)  |  Max field at x = R / √2 !
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

export default function P12Ch01Sec30({ currentTime, reveals, language }: SceneProps) {
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
            "worked example: axial field of charged ring & its maximum",
            "worked example: axial field of charged ring & its maximum"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 2.5)}
        d="M 220 70 C 440 66, 640 74, 860 69"
        stroke={RED}
        sw={2.4}
        dur={0.7}
      />

      {/* ── BEAT 1: Hook Note ── */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={60} y={110} size={15} fill={MUTED} script anchor="start">
          {t(
            "finding where electric field reaches its peak along a ring's axis!",
            "ring ke axis par electric field maximum kahan hota hai!"
          )}
        </T>
      </Fade>

      {/* ── BEAT 2: Badge 1 & Axial Ring Formula ── */}
      <Badge n={1} cx={52} cy={165} on={beat >= 2} delay={dl(2, 0.4)} />
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={74} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("AXIAL FIELD OF CHARGED RING", "AXIAL FIELD OF CHARGED RING")}
        </T>
      </Fade>

      <Fade on={beat >= 2} dim={beat >= 6}>
        <G transform="translate(60, 185)">
          <Rect x={0} y={10} width={430} height={85} rx={8} fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
          <T x={215} y={48} anchor="middle" size={22} fill={INK} weight={800}>
            E(x) = k Q x / (R² + x³⁾/²
          </T>
          <T x={215} y={78} anchor="middle" size={13} fill={AMBER_DARK} script>
            {t("Center (x = 0) ⇒ E_center = 0", "Center (x = 0) ⇒ E_center = 0")}
          </T>
          <Draw on={beat >= 2} delay={dl(2, 1.6)} d="M 100 56 h 230 M 100 60 h 230" stroke={AMBER_DARK} sw={1.5} />
        </G>
      </Fade>

      {/* ── BEAT 4: Badge 2 & Maximum Field Position x = R / √2 ── */}
      <Badge n={2} cx={540} cy={165} on={beat >= 4} delay={dl(4, 0.4)} />
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={562} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("MAXIMUM FIELD CONDITION dE/dx = 0", "MAXIMUM FIELD CONDITION dE/dx = 0")}
        </T>
      </Fade>

      <Fade on={beat >= 4} dim={beat >= 7}>
        <G transform="translate(540, 185)">
          <T x={0} y={25} anchor="start" size={14} fill={INK} weight={700}>
            dE / dx = 0  ⇒  x = R / √2 ≈ 0.707 R
          </T>
          <T x={0} y={60} anchor="start" size={15} fill={RED} weight={800}>
            E_max = (2 / 3√3) (k Q / R²) ≈ 0.385 (k Q / R²)
          </T>
        </G>
      </Fade>

      {/* ── BEAT 8: Grand Verdict Chip ── */}
      <Fade on={beat >= 8}>
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
            "★ VERDICT: E(x) = k Q x / (R²+x²)^(3/2)  |  Max field at x = R / √2 !",
            "★ VERDICT: E(x) = k Q x / (R²+x²)^(3/2)  |  Max field at x = R / √2 !"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
