/**
 * P12Ch01 · Section 59 — "Flux and Gauss's Law: Formulas and Standard Results"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md & SCENE_PLAYBOOK.md.
 *
 * OBJECT-RICH OPEN CHALKBOARD DESIGN (NO HEAVY CONTAINERS):
 *  - Master cheat-sheet compilation of Flux and Gauss's Law formulas
 *  - 1. Electric Flux: Φ = Ē · Ā = E A cos θ [N·m²/C]
 *  - 2. Gauss's Law: ∮ Ē · dĀ = Q_enclosed / ε₀
 *  - 3. Infinite Wire Field: E = λ / (2π ε₀ r) = 2 k λ / r
 *  - 4. Infinite Plane Sheet Field: E = σ / 2ε₀
 *  - 5. Spherical Shell Field:
 *       Outside (r > R): E = k Q / r²
 *       Surface (r = R): E = k Q / R²
 *       Inside (r < R): E = 0
 *
 * Beats (en [0, 6, 18, 28, 38, 48, 58, 70, 82, 92]):
 *  0 Title "flux & gauss's law: master formulas & standard results" + drawn underline
 *  1 Hook note: complete reference cheat-sheet for flux and Gauss's Law derivations!
 *  2 Flux & Gauss's Law: Φ = E A cos θ  |  ∮ Ē · dĀ = Q_enc / ε₀
 *  3 Infinite Wire: E = 2 k λ / r
 *  4 Infinite Sheet: E = σ / 2ε₀
 *  5 Spherical Shell: E_out = kQ/r², E_surf = kQ/R², E_in = 0
 *  6 Grand Verdict: Master All Gauss Results: Flux, Wire, Sheet, Shell!
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

export default function P12Ch01Sec59({ currentTime, reveals, language }: SceneProps) {
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
            "flux & gauss's law: master formulas & standard results",
            "flux & gauss's law: master formulas & standard results"
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
            "complete reference cheat-sheet for flux and Gauss's Law derivations!",
            "flux aur Gauss's Law derivations ka complete reference cheat-sheet!"
          )}
        </T>
      </Fade>

      {/* ── BEAT 2 & 3: Flux & Gauss's Law ── */}
      <Fade on={beat >= 2} dim={beat >= 6}>
        <G transform="translate(60, 160)">
          <T x={0} y={20} anchor="start" size={14} weight={700} fill={RED}>
            1. Electric Flux:
          </T>
          <T x={0} y={50} anchor="start" size={20} fill={INK} weight={800}>
            Φ = E A cos θ  = Ē · Ā
          </T>
        </G>
      </Fade>

      <Fade on={beat >= 3} dim={beat >= 6}>
        <G transform="translate(540, 160)">
          <T x={0} y={20} anchor="start" size={14} weight={700} fill={RED}>
            2. Gauss's Law Equation:
          </T>
          <T x={0} y={50} anchor="start" size={20} fill={INK} weight={800}>
            ∮ Ē · dĀ = Q_enclosed / ε₀
          </T>
        </G>
      </Fade>

      {/* ── BEAT 4 & 5: Wire & Sheet ── */}
      <Fade on={beat >= 4} dim={beat >= 7}>
        <G transform="translate(60, 270)">
          <T x={0} y={20} anchor="start" size={14} weight={700} fill={GREEN}>
            3. Infinite Line Wire:
          </T>
          <T x={0} y={50} anchor="start" size={20} fill={INK} weight={800}>
            E = 2 k λ / r  = λ / (2πε₀ r)
          </T>
        </G>
      </Fade>

      <Fade on={beat >= 5} dim={beat >= 7}>
        <G transform="translate(540, 270)">
          <T x={0} y={20} anchor="start" size={14} weight={700} fill={GREEN}>
            4. Infinite Plane Sheet:
          </T>
          <T x={0} y={50} anchor="start" size={20} fill={GREEN} weight={800}>
            E = σ / 2ε₀  (Uniform field!)
          </T>
        </G>
      </Fade>

      {/* ── BEAT 6: Spherical Shell ── */}
      <Fade on={beat >= 6} dim={beat >= 8}>
        <G transform="translate(60, 380)">
          <T x={0} y={20} anchor="start" size={14} weight={700} fill={AMBER_DARK}>
            5. Spherical Shell (Radius R):
          </T>
          <T x={0} y={50} anchor="start" size={20} fill={INK} weight={800}>
            E_out = kQ/r²  |  E_surf = kQ/R²  |  E_in = 0
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
            "★ VERDICT: Master All Gauss Results: Flux, Wire, Sheet, Shell!",
            "★ VERDICT: Master All Gauss Results: Flux, Wire, Sheet, Shell!"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
