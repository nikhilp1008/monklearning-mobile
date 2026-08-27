/**
 * P12Ch01 · Section 48 — "Worked Examples: Total Charge on a Rod, and the Ring-versus-Arc Trap"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md & SCENE_PLAYBOOK.md.
 *
 * OBJECT-RICH OPEN CHALKBOARD DESIGN (NO HEAVY CONTAINERS):
 *  - Problem 1: Non-uniform rod λ(x) = λ₀ (x / L) of length L.
 *  - Total charge Q = ∫ dq = ∫₀ᴸ λ₀ (x / L) dx = ½ λ₀ L !
 *  - Problem 2 (Ring vs Semicircular Arc Speed Trap):
 *    Full ring: E_ring = 0  vs  Semicircular arc: E_semi = 2 k λ / R = 2 k (Q / π R) / R = 2 k Q / (π R²)!
 *  - Note: Semicircular arc with SAME total charge Q has NON-ZERO field at center!
 *
 * Beats (en [0, 6, 16, 28, 40, 46, 56, 70, 82]):
 *  0 Title "worked examples: rod integration & ring vs arc speed trap" + drawn underline
 *  1 Hook note: integrating non-uniform density and exposing the ring vs arc center field trap!
 *  2 Badge 1 & Problem 1 (Non-uniform rod λ(x) = λ₀ x / L): Q = ½ λ₀ L
 *  3 Step 1 details: Q = ∫₀ᴸ λ₀ (x/L) dx = [ λ₀ x² / 2L ]₀ᴸ = ½ λ₀ L
 *  4 Badge 2 & Problem 2 (Ring vs Semicircular Arc Trap): E_ring = 0 vs E_semi = 2 k Q / (π R²)
 *  5 Step 2 details: Semicircle total charge Q ⇒ λ = Q / (π R) ⇒ E = 2 k Q / (π R²)
 *  6 Grand Verdict: Non-uniform rod Q = ½ λ₀ L  |  Semicircular arc field E = 2 k Q / (π R²) ≠ 0!
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

export default function P12Ch01Sec48({ currentTime, reveals, language }: SceneProps) {
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
            "worked examples: rod integration & ring vs arc speed trap",
            "worked examples: rod integration & ring vs arc speed trap"
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
            "integrating non-uniform density and exposing the ring vs arc center field trap!",
            "non-uniform density integrate karna aur ring vs arc speed trap se bachna!"
          )}
        </T>
      </Fade>

      {/* ── BEAT 2: Badge 1 & Problem 1 (Non-uniform rod) ── */}
      <Badge n={1} cx={52} cy={165} on={beat >= 2} delay={dl(2, 0.4)} />
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={74} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("PROBLEM 1: Total Charge on Non-Uniform Rod λ(x) = λ₀ x / L", "PROBLEM 1: Non-Uniform Rod Par Total Charge")}
        </T>
      </Fade>

      <Fade on={beat >= 2} dim={beat >= 4}>
        <G transform="translate(60, 185)">
          <Rect x={0} y={10} width={430} height={85} rx={8} fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
          <T x={215} y={48} anchor="middle" size={22} fill={INK} weight={800}>
            Q = ∫₀ᴸ λ₀ (x / L) dx = ½ λ₀ L
          </T>
          <T x={215} y={78} anchor="middle" size={13} fill={AMBER_DARK} script>
            {t("Linear increase from 0 to λ₀ along length L", "Length L ke sath 0 se λ₀ tak linear increase")}
          </T>
          <Draw on={beat >= 2} delay={dl(2, 1.6)} d="M 100 56 h 230 M 100 60 h 230" stroke={AMBER_DARK} sw={1.5} />
        </G>
      </Fade>

      {/* ── BEAT 4: Badge 2 & Problem 2 (Ring vs Arc Trap) ── */}
      <Badge n={2} cx={540} cy={165} on={beat >= 4} delay={dl(4, 0.4)} />
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={562} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("PROBLEM 2 (SPEED TRAP): Ring vs Semicircular Arc", "PROBLEM 2 (SPEED TRAP): Ring vs Semicircular Arc")}
        </T>
      </Fade>

      <Fade on={beat >= 4} dim={beat >= 6}>
        <G transform="translate(540, 185)">
          <T x={0} y={25} anchor="start" size={14} fill={INK} weight={700}>
            Full Ring: E_center = 0 (perfect cancellation!)
          </T>
          <T x={0} y={65} anchor="start" size={20} fill={RED} weight={800}>
            Semicircle (same Q): E = 2 k Q / (π R²) ≠ 0!
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
            "★ VERDICT: Non-uniform rod Q = ½ λ₀ L  |  Semicircular arc field E = 2 k Q / (π R²) ≠ 0!",
            "★ VERDICT: Non-uniform rod Q = ½ λ₀ L  |  Semicircular arc field E = 2 k Q / (π R²) ≠ 0!"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
