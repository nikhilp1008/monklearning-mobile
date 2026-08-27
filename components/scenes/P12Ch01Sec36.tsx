/**
 * P12Ch01 · Section 36 — "Derivation: Torque on a Dipole in a Uniform Field"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md & SCENE_PLAYBOOK.md.
 *
 * OBJECT-RICH OPEN CHALKBOARD DESIGN (NO HEAVY CONTAINERS):
 *  - Uniform field E: net translational force F_net = (+qE) + (-qE) = 0
 *  - Forces create a couple producing torque τ
 *  - Torque magnitude: τ = (q E) × (2a sin θ) = (q 2a) E sin θ = p E sin θ
 *  - Vector form: τ̄ = p̄ × Ē
 *  - Maximum torque at θ = 90°: τ_max = p E
 *  - Zero torque at θ = 0° (stable) and θ = 180° (unstable)
 *
 * Beats (en [0, 6, 18, 32, 46, 58, 70, 82, 92]):
 *  0 Title "derivation: torque on a dipole in a uniform field" + drawn underline
 *  1 Hook note: understanding why dipoles rotate to align with external electric fields!
 *  2 Badge 1 & Net Force Zero: F_net = (+qE) + (-qE) = 0 (No translation!)
 *  3 Drawn dipole in uniform field E inclined at angle θ
 *  4 Badge 2 & Torque Derivation: τ = p E sin θ  ⇒  τ̄ = p̄ × Ē
 *  5 Maximum Torque: τ_max = p E (at θ = 90°)
 *  6 Minimum Torque: τ = 0 (at θ = 0° and θ = 180°)
 *  7 Grand Verdict: τ̄ = p̄ × Ē (Rotational couple without translation in uniform E!)
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

export default function P12Ch01Sec36({ currentTime, reveals, language }: SceneProps) {
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
            "derivation: torque on a dipole in a uniform field",
            "derivation: uniform field me dipole par torque"
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
            "understanding why dipoles rotate to align with external electric fields!",
            "dipoles external electric field ke saath align hone ke liye kyun rotate hote hain!"
          )}
        </T>
      </Fade>

      {/* ── BEAT 2: Badge 1 & Net Force Zero ── */}
      <Badge n={1} cx={52} cy={165} on={beat >= 2} delay={dl(2, 0.4)} />
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={74} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("NET FORCE IN UNIFORM E IS ZERO", "UNIFORM E ME NET FORCE ZERO")}
        </T>
      </Fade>

      <Fade on={beat >= 2} dim={beat >= 4}>
        <G transform="translate(60, 185)">
          <Rect x={0} y={10} width={430} height={85} rx={8} fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
          <T x={215} y={48} anchor="middle" size={20} fill={INK} weight={800}>
            F_net = (+qE) + (-qE) = 0
          </T>
          <T x={215} y={78} anchor="middle" size={13} fill={AMBER_DARK} script>
            {t("No net translational motion in uniform field!", "Uniform field me koi translation nahi!")}
          </T>
        </G>
      </Fade>

      {/* ── BEAT 4: Badge 2 & Torque Formula τ̄ = p̄ × Ē ── */}
      <Badge n={2} cx={540} cy={165} on={beat >= 4} delay={dl(4, 0.4)} />
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={562} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("TORQUE FORMULA τ̄ = p̄ × Ē", "TORQUE FORMULA τ̄ = p̄ × Ē")}
        </T>
      </Fade>

      <Fade on={beat >= 4} dim={beat >= 6}>
        <G transform="translate(540, 185)">
          <T x={0} y={25} anchor="start" size={24} fill={RED} weight={800}>
            τ = p E sin θ
          </T>
          <T x={0} y={65} anchor="start" size={18} fill={INK} weight={800}>
            Vector Form: τ̄ = p̄ × Ē
          </T>
        </G>
      </Fade>

      {/* ── BEAT 5 & 6: Max and Min Torque ── */}
      <Fade on={beat >= 5} dim={beat >= 7}>
        <G transform="translate(60, 310)">
          <T x={0} y={20} anchor="start" size={14} weight={700} fill={GREEN}>
            {t("Maximum Torque (θ = 90°):", "Maximum Torque (θ = 90°):")}
          </T>
          <T x={0} y={55} anchor="start" size={20} fill={GREEN} weight={800}>
            τ_max = p E
          </T>
        </G>
      </Fade>

      <Fade on={beat >= 6} dim={beat >= 7}>
        <G transform="translate(540, 310)">
          <T x={0} y={20} anchor="start" size={14} weight={700} fill={AMBER_DARK}>
            {t("Zero Torque (θ = 0° or 180°):", "Zero Torque (θ = 0° or 180°):")}
          </T>
          <T x={0} y={55} anchor="start" size={20} fill={AMBER_DARK} weight={800}>
            τ_min = 0 (Aligned / Anti-aligned)
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
            "★ VERDICT: τ̄ = p̄ × Ē (Rotational couple without translation in uniform E!)",
            "★ VERDICT: τ̄ = p̄ × Ē (Rotational couple without translation in uniform E!)"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
