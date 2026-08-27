/**
 * P12Ch01 · Section 34 — "Derivation: Field on the Axial Line"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md & SCENE_PLAYBOOK.md.
 *
 * OBJECT-RICH OPEN CHALKBOARD DESIGN (NO HEAVY CONTAINERS):
 *  - Derivation of electric field at point P on axial line at distance r from center O
 *  - E_+q = k q / (r - a)²  (pointing away from +q, along +p̂)
 *  - E_-q = k q / (r + a)²  (pointing towards -q, opposite to +p̂)
 *  - E_net = E_+q - E_-q = k q [ 1/(r-a)² - 1/(r+a)² ] = k q [ 4 a r / (r² - a²)² ]
 *  - E_axial = (2 k p r) / (r² - a²)²
 *  - For short dipole (r >> a): E_axial ≈ (2 k p) / r³
 *
 * Beats (en [0, 6, 20, 32, 46, 58, 70, 84]):
 *  0 Title "derivation: field on the axial line of dipole" + drawn underline
 *  1 Hook note: computing net field along dipole axis and short-dipole 1/r³ scaling!
 *  2 Badge 1 & Exact Axial Formula: E_axial = 2 k p r / (r² - a²)²
 *  3 Step-by-step vector addition: E_+q (away) vs E_-q (towards)
 *  4 Badge 2 & Short Dipole Limit (r >> a): E_axial ≈ 2 k p / r³
 *  5 Direction rule: E_axial is parallel to dipole moment vector p!
 *  6 Distance dependence note: 1/r³ decay is faster than point charge 1/r²!
 *  7 Grand Verdict: E_axial = 2 k p / r³ (parallel to dipole moment vector p̄)!
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
  arrowD,
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

export default function P12Ch01Sec34({ currentTime, reveals, language }: SceneProps) {
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
            "derivation: field on the axial line of dipole",
            "derivation: dipole ki axial line par electric field"
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
            "computing net field along dipole axis and short-dipole 1/r³ scaling!",
            "dipole axis par net field aur short-dipole 1/r³ scaling nikaalna!"
          )}
        </T>
      </Fade>

      {/* ── BEAT 2: Badge 1 & Exact Axial Formula ── */}
      <Badge n={1} cx={52} cy={165} on={beat >= 2} delay={dl(2, 0.4)} />
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={74} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("EXACT AXIAL FIELD FORMULA", "EXACT AXIAL FIELD FORMULA")}
        </T>
      </Fade>

      <Fade on={beat >= 2} dim={beat >= 4}>
        <G transform="translate(60, 185)">
          <Rect x={0} y={10} width={430} height={85} rx={8} fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
          <T x={215} y={48} anchor="middle" size={22} fill={INK} weight={800}>
            E_axial = 2 k p r / (r² - a²)²
          </T>
          <T x={215} y={78} anchor="middle" size={13} fill={AMBER_DARK} script>
            {t("Direction: Parallel to dipole moment p̄", "Direction: Dipole moment p̄ ke parallel")}
          </T>
          <Draw on={beat >= 2} delay={dl(2, 1.6)} d="M 100 56 h 230 M 100 60 h 230" stroke={AMBER_DARK} sw={1.5} />
        </G>
      </Fade>

      {/* ── BEAT 4: Badge 2 & Short Dipole Limit (r >> a) ── */}
      <Badge n={2} cx={540} cy={165} on={beat >= 4} delay={dl(4, 0.4)} />
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={562} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("SHORT DIPOLE LIMIT (r >> a)", "SHORT DIPOLE LIMIT (r >> a)")}
        </T>
      </Fade>

      <Fade on={beat >= 4} dim={beat >= 6}>
        <G transform="translate(540, 185)">
          <T x={0} y={25} anchor="start" size={14} fill={INK} weight={700}>
            {t("When r >> a, (r² - a²)² ≈ r⁴", "When r >> a, (r² - a²)² ≈ r⁴")}
          </T>
          <T x={0} y={65} anchor="start" size={24} fill={RED} weight={800}>
            E_axial ≈ (2 k p) / r³
          </T>
        </G>
      </Fade>

      {/* ── BEAT 7: Grand Verdict Chip ── */}
      <Fade on={beat >= 7}>
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
            "★ VERDICT: E_axial = 2 k p / r³ (parallel to dipole moment vector p̄)!",
            "★ VERDICT: E_axial = 2 k p / r³ (parallel to dipole moment vector p̄)!"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
