/**
 * P12Ch01 · Section 51 — "Pitfalls and Pro-Tips for Continuous Distributions"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md & SCENE_PLAYBOOK.md.
 *
 * OBJECT-RICH OPEN CHALKBOARD DESIGN (NO HEAVY CONTAINERS):
 *  - Pitfall 1: Forgetting that continuous charge elements dq are vectors, NOT scalars!
 *  - Pitfall 2: Confusing 1D λ (C/m), 2D σ (C/m²), and 3D ρ (C/m³) units.
 *  - Pitfall 3: Assuming field at center of any symmetric arc is zero (ONLY full ring is zero!).
 *
 * Beats (en [0, 6, 20, 32, 44, 56, 72, 84, 94]):
 *  0 Title "pitfalls & pro-tips for continuous distributions" + drawn underline
 *  1 Hook note: key subtleties to master for continuous calculus derivations!
 *  2 Badge 1 & Pitfall 1: Element field dE is a vector (resolve components BEFORE integrating!)
 *  3 Badge 2 & Pitfall 2: Double check charge density units (λ [C/m], σ [C/m²], ρ [C/m³])
 *  4 Badge 3 & Pitfall 3: Arc center field is NON-ZERO (E = 2kλ/R sin(α/2)), only full ring (α=2π) is zero!
 *  5 Pro-tip: Always check limiting cases (x >> R → point charge, R → ∞ → infinite sheet)!
 *  6 Grand Verdict: Vector dE components first  |  Match density units  |  Test limits!
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

export default function P12Ch01Sec51({ currentTime, reveals, language }: SceneProps) {
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
            "pitfalls & pro-tips for continuous distributions",
            "pitfalls & pro-tips for continuous distributions"
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
            "key subtleties to master for continuous calculus derivations!",
            "continuous calculus derivations ke liye key subtleties!"
          )}
        </T>
      </Fade>

      {/* ── BEAT 2: Badge 1 & Pitfall 1 ── */}
      <Badge n={1} cx={52} cy={165} on={beat >= 2} delay={dl(2, 0.4)} />
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={74} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("PITFALL 1: Element Field dE is a VECTOR", "PITFALL 1: Element Field dE Ek VECTOR Hai")}
        </T>
      </Fade>

      <Fade on={beat >= 2} dim={beat >= 5}>
        <G transform="translate(60, 185)">
          <Rect x={0} y={10} width={430} height={85} rx={8} fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
          <T x={215} y={48} anchor="middle" size={18} fill={INK} weight={800}>
            Resolve dE_x & dE_y BEFORE integrating!
          </T>
          <T x={215} y={78} anchor="middle" size={13} fill={AMBER_DARK} script>
            {t("Never sum dE scalar magnitudes directly!", "dE magnitudes ko directly scalar add mat karein!")}
          </T>
          <Draw on={beat >= 2} delay={dl(2, 1.6)} d="M 100 56 h 230 M 100 60 h 230" stroke={AMBER_DARK} sw={1.5} />
        </G>
      </Fade>

      {/* ── BEAT 3: Badge 2 & Pitfall 2 ── */}
      <Badge n={2} cx={540} cy={165} on={beat >= 3} delay={dl(3, 0.4)} />
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={562} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("PITFALL 2: Density Units (λ [C/m], σ [C/m²], ρ [C/m³])", "PITFALL 2: Density Units (λ [C/m], σ [C/m²], ρ [C/m³])")}
        </T>
      </Fade>

      <Fade on={beat >= 3} dim={beat >= 5}>
        <G transform="translate(540, 185)">
          <T x={0} y={25} anchor="start" size={16} fill={INK} weight={800}>
            Linear λ [C/m]  |  Surface σ [C/m²]  |  Volume ρ [C/m³]
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
            "★ VERDICT: Vector dE components first  |  Match density units  |  Test limits!",
            "★ VERDICT: Vector dE components first  |  Match density units  |  Test limits!"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
