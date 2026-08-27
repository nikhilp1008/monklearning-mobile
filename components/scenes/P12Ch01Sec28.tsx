/**
 * P12Ch01 · Section 28 — "Field Formulas, Units and Dimensions"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md & SCENE_PLAYBOOK.md.
 *
 * OBJECT-RICH OPEN CHALKBOARD DESIGN (NO HEAVY CONTAINERS):
 *  - Master formula compilation for Electric Field
 *  - E = F / q₀ (Definition)
 *  - E = k Q / r² (Point charge)
 *  - SI Units: N/C = V/m
 *  - Dimensions: [M L T⁻³ A⁻¹]
 *
 * Beats (en [0, 6, 14, 26, 36, 46, 56, 66, 76, 88]):
 *  0 Title "field formulas, units & dimensions" + drawn underline
 *  1 Hook note: master cheat-sheet of electric field formulas and unit equivalences!
 *  2 Badge 1 & Fundamental Definition: E = F / q₀
 *  3 Badge 2 & Point Charge Field: E = k Q / r² = (1 / 4πε₀) (Q / r²)
 *  4 SI Unit equivalence: 1 N / C = 1 V / m
 *  5 Dimensional Formula: [M L T⁻³ A⁻¹]
 *  6 Uniform Field: E = V / d (between parallel plates)
 *  7 Dipole Field Preview: E_axial ∝ 1/r³ vs Point Charge E ∝ 1/r²
 *  8 Speed-trap warning: N/C and V/m are 100% IDENTICAL in value!
 *  9 Grand Verdict: E = F/q₀ = k Q/r²  |  1 N/C = 1 V/m  |  [M L T⁻³ A⁻¹]!
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

export default function P12Ch01Sec28({ currentTime, reveals, language }: SceneProps) {
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
            "field formulas, units & dimensions",
            "field formulas, units & dimensions"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 2.5)}
        d="M 280 70 C 440 66, 640 74, 800 69"
        stroke={RED}
        sw={2.4}
        dur={0.7}
      />

      {/* ── BEAT 1: Hook Note ── */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={60} y={110} size={15} fill={MUTED} script anchor="start">
          {t(
            "master cheat-sheet of electric field formulas and unit equivalences!",
            "electric field formulas aur unit equivalences ka master cheat-sheet!"
          )}
        </T>
      </Fade>

      {/* ── BEAT 2: Badge 1 & Definition E = F / q₀ ── */}
      <Badge n={1} cx={52} cy={165} on={beat >= 2} delay={dl(2, 0.4)} />
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={74} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("FUNDAMENTAL DEFINITION E = F / q₀", "FUNDAMENTAL DEFINITION E = F / q₀")}
        </T>
      </Fade>

      <Fade on={beat >= 2} dim={beat >= 6}>
        <G transform="translate(60, 185)">
          <Rect x={0} y={10} width={430} height={85} rx={8} fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
          <T x={215} y={48} anchor="middle" size={24} fill={INK} weight={800}>
            E = F / q₀
          </T>
          <T x={215} y={78} anchor="middle" size={13} fill={AMBER_DARK} script>
            {t("Force on test charge q₀", "Test charge q₀ par lagne wala force")}
          </T>
          <Draw on={beat >= 2} delay={dl(2, 1.6)} d="M 120 56 h 190 M 120 60 h 190" stroke={AMBER_DARK} sw={1.5} />
        </G>
      </Fade>

      {/* ── BEAT 3: Badge 2 & Point Charge Field ── */}
      <Badge n={2} cx={540} cy={165} on={beat >= 3} delay={dl(3, 0.4)} />
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={562} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("POINT CHARGE FIELD E = k Q / r²", "POINT CHARGE FIELD E = k Q / r²")}
        </T>
      </Fade>

      <Fade on={beat >= 3} dim={beat >= 6}>
        <G transform="translate(540, 185)">
          <T x={0} y={30} anchor="start" size={20} fill={INK} weight={800}>
            E = k Q / r²
          </T>
        </G>
      </Fade>

      {/* ── BEAT 4 & 5: SI Units & Dimensions ── */}
      <Fade on={beat >= 4} dim={beat >= 7}>
        <G transform="translate(60, 310)">
          <T x={0} y={20} anchor="start" size={14} weight={700} fill={GREEN}>
            SI Unit Equivalence:
          </T>
          <T x={0} y={55} anchor="start" size={20} fill={GREEN} weight={800}>
            1 N / C  ≡  1 V / m
          </T>
        </G>
      </Fade>

      <Fade on={beat >= 5} dim={beat >= 7}>
        <G transform="translate(540, 310)">
          <T x={0} y={20} anchor="start" size={14} weight={700} fill={RED}>
            Dimensional Formula:
          </T>
          <T x={0} y={55} anchor="start" size={20} fill={RED} weight={800}>
            [M L T⁻³ A⁻¹]
          </T>
        </G>
      </Fade>

      {/* ── BEAT 9: Grand Verdict Chip ── */}
      <Fade on={beat >= 9}>
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
            "★ VERDICT: E = F/q₀ = k Q/r²  |  1 N/C = 1 V/m  |  [M L T⁻³ A⁻¹]!",
            "★ VERDICT: E = F/q₀ = k Q/r²  |  1 N/C = 1 V/m  |  [M L T⁻³ A⁻¹]!"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
