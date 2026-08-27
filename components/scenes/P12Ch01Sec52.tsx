/**
 * P12Ch01 · Section 52 — "Electric Flux: Counting What Passes Through"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md & SCENE_PLAYBOOK.md.
 *
 * OBJECT-RICH OPEN CHALKBOARD DESIGN (NO HEAVY CONTAINERS):
 *  - Conceptual definition of electric flux Φ_E: measure of electric field lines passing through a given surface area.
 *  - Analogy: Water flow through a window frame or solar panel facing sunlight.
 *  - Basic formula: Φ = E A cos θ = Ē · Ā
 *  - SI Unit: N·m²/C or V·m
 *  - Orientation cases:
 *    θ = 0° (Surface perpendicular to Ē): Φ = E A (MAXIMUM FLUX!)
 *    θ = 90° (Surface parallel to Ē): Φ = 0 (ZERO FLUX!)
 *    θ = 180° (Surface anti-parallel): Φ = -E A (NEGATIVE FLUX!)
 *
 * Beats (en [0, 6, 16, 28, 42, 54, 66, 78, 90]):
 *  0 Title "electric flux: counting what passes through" + drawn underline
 *  1 Hook note: measuring field line flow through surface orientation angles!
 *  2 Badge 1 & Formula: Φ_E = Ē · Ā = E A cos θ [N·m²/C]
 *  3 Badge 2 & Orientation Cases: θ=0° (Max Φ=EA), θ=90° (Zero Φ=0), θ=180° (Negative Φ=-EA)
 *  4 Units and dimensions: [N·m²/C] or [V·m]  (Dimensions: [M L³ T⁻³ A⁻¹])
 *  5 Analogy: Solar panel catching maximum sunlight at direct angle
 *  6 Grand Verdict: Electric Flux Φ = E A cos θ  |  Max at θ=0°  |  Zero at θ=90° !
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

export default function P12Ch01Sec52({ currentTime, reveals, language }: SceneProps) {
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
            "electric flux: counting what passes through",
            "electric flux: surface se guzarne waali field lines"
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
            "measuring field line flow through surface orientation angles!",
            "surface orientation angles se field line flow measure karna!"
          )}
        </T>
      </Fade>

      {/* ── BEAT 2: Badge 1 & Formula ── */}
      <Badge n={1} cx={52} cy={165} on={beat >= 2} delay={dl(2, 0.4)} />
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={74} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("ELECTRIC FLUX FORMULA: Φ = Ē · Ā = E A cos θ", "ELECTRIC FLUX FORMULA: Φ = Ē · Ā = E A cos θ")}
        </T>
      </Fade>

      <Fade on={beat >= 2} dim={beat >= 5}>
        <G transform="translate(60, 185)">
          <Rect x={0} y={10} width={430} height={85} rx={8} fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
          <T x={215} y={48} anchor="middle" size={24} fill={INK} weight={800}>
            Φ = E A cos θ  [N·m²/C or V·m]
          </T>
          <T x={215} y={78} anchor="middle" size={13} fill={AMBER_DARK} script>
            {t("θ is angle between Field Ē and Area Normal Ā!", "θ Field Ē aur Area Normal Ā ke beech ka angle hai!")}
          </T>
          <Draw on={beat >= 2} delay={dl(2, 1.6)} d="M 100 56 h 230 M 100 60 h 230" stroke={AMBER_DARK} sw={1.5} />
        </G>
      </Fade>

      {/* ── BEAT 3: Badge 2 & Orientation Cases ── */}
      <Badge n={2} cx={540} cy={165} on={beat >= 3} delay={dl(3, 0.4)} />
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={562} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("THREE ORIENTATION CASES", "THREE ORIENTATION CASES")}
        </T>
      </Fade>

      <Fade on={beat >= 3} dim={beat >= 5}>
        <G transform="translate(540, 185)">
          <T x={0} y={25} anchor="start" size={14} fill={INK} weight={700}>
            θ = 0° (Normal to E): Φ = E A (MAXIMUM)
          </T>
          <T x={0} y={55} anchor="start" size={14} fill={RED} weight={700}>
            θ = 90° (Parallel to E): Φ = 0 (ZERO)
          </T>
          <T x={0} y={85} anchor="start" size={14} fill={GREEN} weight={700}>
            θ = 180° (Opposite to E): Φ = -E A (NEGATIVE)
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
            "★ VERDICT: Electric Flux Φ = E A cos θ  |  Max at θ=0°  |  Zero at θ=90° !",
            "★ VERDICT: Electric Flux Φ = E A cos θ  |  Max at θ=0°  |  Zero at θ=90° !"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
