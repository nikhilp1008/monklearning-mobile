/**
 * P12Ch01 · Section 35 — "Derivation: Field on the Equatorial Line and the Two-to-One Ratio"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md & SCENE_PLAYBOOK.md.
 *
 * OBJECT-RICH OPEN CHALKBOARD DESIGN (NO HEAVY CONTAINERS):
 *  - Derivation of electric field at point P on equatorial broadside line at distance r from center O
 *  - Distances from +q and -q to P: √(r² + a²)
 *  - Magnitudes E_+q = E_-q = k q / (r² + a²)
 *  - Vertical components cancel out, horizontal components add up: E_eq = 2 E cos θ
 *  - Exact Equatorial Formula: E_eq = k p / (r² + a²)^(3/2)
 *  - For short dipole (r >> a): E_eq ≈ k p / r³
 *  - DIRECTION: Strictly ANTI-PARALLEL to dipole moment vector p̄!
 *  - THE FAMOUS 2:1 RATIO: E_axial / E_eq = 2 (for same distance r >> a!)
 *
 * Beats (en [0, 6, 20, 32, 44, 58, 72, 82, 94]):
 *  0 Title "derivation: equatorial field & the 2:1 axial-to-equatorial ratio" + drawn underline
 *  1 Hook note: computing broadside field, anti-parallel direction, and the famous 2:1 ratio!
 *  2 Badge 1 & Exact Equatorial Formula: E_eq = k p / (r² + a²)^(3/2)
 *  3 Vector resolution: vertical sine components cancel, horizontal cosine components double!
 *  4 Badge 2 & Short Dipole Limit (r >> a): E_eq ≈ k p / r³
 *  5 Direction rule: E_eq is ANTI-PARALLEL to dipole moment vector p̄!
 *  6 Badge 3 & The Famous 2:1 Ratio: E_axial / E_eq = 2 (at same distance r >> a)
 *  7 Direction contrast: E_axial is parallel (+p̂) vs E_eq is anti-parallel (-p̂)
 *  8 Grand Verdict: E_eq = k p / r³ (Anti-parallel to p̄)  |  E_axial / E_eq = 2 !
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

export default function P12Ch01Sec35({ currentTime, reveals, language }: SceneProps) {
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
            "derivation: equatorial field & the 2:1 axial-to-equatorial ratio",
            "derivation: equatorial field & 2:1 ratio"
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
            "computing broadside field, anti-parallel direction, and the famous 2:1 ratio!",
            "broadside field, anti-parallel direction aur famous 2:1 ratio nikaalna!"
          )}
        </T>
      </Fade>

      {/* ── BEAT 2: Badge 1 & Exact Equatorial Formula ── */}
      <Badge n={1} cx={52} cy={165} on={beat >= 2} delay={dl(2, 0.4)} />
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={74} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("EXACT EQUATORIAL FIELD FORMULA", "EXACT EQUATORIAL FIELD FORMULA")}
        </T>
      </Fade>

      <Fade on={beat >= 2} dim={beat >= 4}>
        <G transform="translate(60, 185)">
          <Rect x={0} y={10} width={430} height={85} rx={8} fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
          <T x={215} y={48} anchor="middle" size={22} fill={INK} weight={800}>
            E_eq = k p / (r² + a²)^(3/2)
          </T>
          <T x={215} y={78} anchor="middle" size={13} fill={AMBER_DARK} script>
            {t("Direction: Anti-parallel to dipole moment p̄", "Direction: Dipole moment p̄ ke anti-parallel")}
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
            {t("When r >> a, (r² + a²)^(3/2) ≈ r³", "When r >> a, (r² + a²)^(3/2) ≈ r³")}
          </T>
          <T x={0} y={65} anchor="start" size={24} fill={RED} weight={800}>
            E_eq ≈ k p / r³
          </T>
        </G>
      </Fade>

      {/* ── BEAT 6: Badge 3 & The Famous 2:1 Ratio ── */}
      <Badge n={3} cx={52} cy={305} on={beat >= 6} delay={dl(6, 0.4)} />
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={74} y={310} size={14} fill={RED} weight={700} anchor="start">
          {t("THE FAMOUS 2:1 AXIAL-TO-EQUATORIAL RATIO", "THE FAMOUS 2:1 AXIAL-TO-EQUATORIAL RATIO")}
        </T>
      </Fade>

      <Fade on={beat >= 6} dim={beat >= 8}>
        <G transform="translate(60, 330)">
          <T x={0} y={20} anchor="start" size={18} fill={GREEN} weight={800}>
            {t("E_axial / E_eq = (2 k p / r³) / (k p / r³) = 2  (at same r >> a!)", "E_axial / E_eq = (2 k p / r³) / (k p / r³) = 2  (at same r >> a!)")}
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
            "★ VERDICT: E_eq = k p / r³ (Anti-parallel to p̄)  |  E_axial / E_eq = 2 !",
            "★ VERDICT: E_eq = k p / r³ (Anti-parallel to p̄)  |  E_axial / E_eq = 2 !"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
