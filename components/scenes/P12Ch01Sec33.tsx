/**
 * P12Ch01 · Section 33 — "The Dipole Moment Vector"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md & SCENE_PLAYBOOK.md.
 *
 * OBJECT-RICH OPEN CHALKBOARD DESIGN (NO HEAVY CONTAINERS):
 *  - Definition: p = q · (2a)
 *  - Vector convention: strictly points FROM negative (-q) TO positive (+q) charge!
 *  - SI Unit: Coulomb-metre (C·m)
 *  - Dimensions: [M⁰ L T A]
 *  - Debye unit conversion: 1 Debye (D) ≈ 3.33 × 10⁻³⁰ C·m
 *
 * Beats (en [0, 6, 16, 28, 40, 50, 62, 76]):
 *  0 Title "the dipole moment vector" + drawn underline
 *  1 Hook note: quantifying dipole strength and its unique vector direction convention!
 *  2 Badge 1 & Dipole Moment Magnitude: p = q · (2a)
 *  3 Badge 2 & Vector Direction Rule: strictly points FROM (-q) TO (+q)!
 *  4 SI Unit & Dimensions: Coulomb-metre (C·m) | [L T A]
 *  5 Chemistry vs Physics convention contrast: Physics (- → +) vs Chemistry (+ → -)
 *  6 Debye unit: 1 D = 3.33 × 10⁻³⁰ C·m (used for molecular dipoles like H₂O = 1.85 D)
 *  7 Grand Verdict: p = q(2a) pointing from (-q) to (+q) [SI Unit: C·m]!
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

export default function P12Ch01Sec33({ currentTime, reveals, language }: SceneProps) {
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
            "the dipole moment vector",
            "dipole moment vector"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 2.5)}
        d="M 340 70 C 440 66, 640 74, 740 69"
        stroke={RED}
        sw={2.4}
        dur={0.7}
      />

      {/* ── BEAT 1: Hook Note ── */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={60} y={110} size={15} fill={MUTED} script anchor="start">
          {t(
            "quantifying dipole strength and its unique vector direction convention!",
            "dipole strength aur uski vector direction convention!"
          )}
        </T>
      </Fade>

      {/* ── BEAT 2: Badge 1 & Dipole Moment Magnitude ── */}
      <Badge n={1} cx={52} cy={165} on={beat >= 2} delay={dl(2, 0.4)} />
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={74} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("DIPOLE MOMENT MAGNITUDE", "DIPOLE MOMENT MAGNITUDE")}
        </T>
      </Fade>

      <Fade on={beat >= 2} dim={beat >= 5}>
        <G transform="translate(60, 185)">
          <Rect x={0} y={10} width={430} height={85} rx={8} fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
          <T x={215} y={48} anchor="middle" size={26} fill={INK} weight={800}>
            p = q · (2a)
          </T>
          <T x={215} y={78} anchor="middle" size={13} fill={AMBER_DARK} script>
            {t("Product of charge magnitude q and separation 2a", "Charge q aur separation 2a ka product")}
          </T>
          <Draw on={beat >= 2} delay={dl(2, 1.6)} d="M 120 56 h 190 M 120 60 h 190" stroke={AMBER_DARK} sw={1.5} />
        </G>
      </Fade>

      {/* ── BEAT 3: Badge 2 & Vector Direction Rule ── */}
      <Badge n={2} cx={540} cy={165} on={beat >= 3} delay={dl(3, 0.4)} />
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={562} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("VECTOR DIRECTION RULE (-q → +q)", "VECTOR DIRECTION RULE (-q → +q)")}
        </T>
      </Fade>

      <Fade on={beat >= 3} dim={beat >= 5}>
        <G transform="translate(540, 185)">
          <T x={0} y={25} anchor="start" size={13.5} fill={MUTED}>
            {t(
              "Physics Convention: p vector points FROM (-q) TO (+q)!",
              "Physics Convention: p vector (-q) se (+q) ki taraf point karta hai!"
            )}
          </T>
          <T x={0} y={60} anchor="start" size={18} fill={RED} weight={800}>
            p̄ = q (2ā)
          </T>
          <Draw on={beat >= 3} delay={dl(3, 1.6)} d={ringD(60, 56, 100, 16)} stroke={RED} sw={1.8} />
        </G>
      </Fade>

      {/* ── BEAT 4 & 6: Units, Dimensions & Debye ── */}
      <Fade on={beat >= 4} dim={beat >= 7}>
        <G transform="translate(60, 310)">
          <T x={0} y={20} anchor="start" size={14} weight={700} fill={GREEN}>
            SI Unit & Dimensions:
          </T>
          <T x={0} y={55} anchor="start" size={20} fill={GREEN} weight={800}>
            Coulomb-metre (C·m)  |  [M⁰ L T A]
          </T>
        </G>
      </Fade>

      <Fade on={beat >= 6} dim={beat >= 7}>
        <G transform="translate(540, 310)">
          <T x={0} y={20} anchor="start" size={13.5} weight={700} fill={AMBER_DARK}>
            Debye Molecular Unit (1 D):
          </T>
          <T x={0} y={55} anchor="start" size={18} fill={AMBER_DARK} weight={800}>
            1 D ≈ 3.33 × 10⁻³⁰ C·m  (H₂O = 1.85 D)
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
            "★ VERDICT: p = q(2a) pointing from (-q) to (+q) [SI Unit: C·m]!",
            "★ VERDICT: p = q(2a) pointing from (-q) to (+q) [SI Unit: C·m]!"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
