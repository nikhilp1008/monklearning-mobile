/**
 * P12Ch01 · Section 40 — "Worked Example: Torque and Work to Rotate a Dipole"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md & SCENE_PLAYBOOK.md.
 *
 * OBJECT-RICH OPEN CHALKBOARD DESIGN (NO HEAVY CONTAINERS):
 *  - Problem setup: Dipole charges q = ±4 μC, 2a = 5 cm = 0.05 m in uniform E = 10⁵ N/C.
 *  - Calculate dipole moment p: p = (4 × 10⁻⁶ C) × (0.05 m) = 2 × 10⁻⁷ C·m
 *  - Part 1: Torque at θ = 30°: τ = p E sin 30° = (2×10⁻⁷) × 10⁵ × 0.5 = 10⁻² N·m = 0.01 N·m
 *  - Part 2: Work to rotate from θ₁ = 0° (stable) to θ₂ = 180° (unstable):
 *    W = p E (cos 0° - cos 180°) = p E (1 - (-1)) = 2 p E = 2 × 10⁻² J = 0.02 J = 20 mJ!
 *
 * Beats (en [0, 6, 18, 32, 44, 56, 68, 82, 92]):
 *  0 Title "worked example: torque & work to rotate a dipole" + drawn underline
 *  1 Hook note: numerical calculation of rotational torque and maximum alignment work!
 *  2 Badge 1 & Dipole Moment p: p = q(2a) = (4×10⁻⁶)(0.05) = 2 × 10⁻⁷ C·m
 *  3 Badge 2 & Step 1 (Torque at 30°): τ = p E sin 30° = (2×10⁻⁷)(10⁵)(0.5) = 0.01 N·m
 *  4 Badge 3 & Step 2 (Work from 0° to 180°): W = p E (1 - (-1)) = 2 p E = 0.02 J = 20 mJ
 *  5 Conversion check: 5 cm = 0.05 m, 4 μC = 4 × 10⁻⁶ C
 *  6 Grand Verdict: τ(30°) = 0.01 N·m  |  Work to flip (0°→180°) = 20 mJ!
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

export default function P12Ch01Sec40({ currentTime, reveals, language }: SceneProps) {
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
            "worked example: torque & work to rotate a dipole",
            "worked example: torque & work to rotate a dipole"
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
            "numerical calculation of rotational torque and maximum alignment work!",
            "rotational torque aur maximum alignment work ka numerical calculation!"
          )}
        </T>
      </Fade>

      {/* ── BEAT 2: Badge 1 & Dipole Moment p ── */}
      <Badge n={1} cx={52} cy={165} on={beat >= 2} delay={dl(2, 0.4)} />
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={74} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("STEP 1: Calculate Dipole Moment p", "STEP 1: Dipole Moment p calculate karein")}
        </T>
      </Fade>

      <Fade on={beat >= 2} dim={beat >= 4}>
        <G transform="translate(60, 185)">
          <T x={0} y={20} anchor="start" size={14} fill={INK}>
            p = q (2a) = (4 × 10⁻⁶ C) × (0.05 m) = 2 × 10⁻⁷ C·m
          </T>
        </G>
      </Fade>

      {/* ── BEAT 3: Badge 2 & Torque at 30° ── */}
      <Badge n={2} cx={540} cy={165} on={beat >= 3} delay={dl(3, 0.4)} />
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={562} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("STEP 2: Torque at θ = 30°", "STEP 2: θ = 30° par Torque")}
        </T>
      </Fade>

      <Fade on={beat >= 3} dim={beat >= 5}>
        <G transform="translate(540, 185)">
          <T x={0} y={25} anchor="start" size={18} fill={RED} weight={800}>
            τ = p E sin 30° = 0.01 N·m
          </T>
        </G>
      </Fade>

      {/* ── BEAT 4: Badge 3 & Work to Flip (0° → 180°) ── */}
      <Badge n={3} cx={52} cy={300} on={beat >= 4} delay={dl(4, 0.4)} />
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={74} y={305} size={14} fill={RED} weight={700} anchor="start">
          {t("STEP 3: Work to Flip (0° → 180°)", "STEP 3: Dipole ko flip karne ka Work (0° → 180°)")}
        </T>
      </Fade>

      <Fade on={beat >= 4} dim={beat >= 6}>
        <G transform="translate(60, 325)">
          <Rect x={0} y={10} width={430} height={85} rx={8} fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
          <T x={215} y={48} anchor="middle" size={20} fill={INK} weight={800}>
            W = 2 p E = 2 × 10⁻² J = 20 mJ
          </T>
          <T x={215} y={78} anchor="middle" size={13} fill={AMBER_DARK} script>
            {t("Maximum work required to rotate dipole by 180°!", "Dipole ko 180° rotate karne ka maximum work!")}
          </T>
          <Draw on={beat >= 4} delay={dl(4, 1.6)} d="M 100 56 h 230 M 100 60 h 230" stroke={AMBER_DARK} sw={1.5} />
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
            "★ VERDICT: τ(30°) = 0.01 N·m  |  Work to flip (0°→180°) = 20 mJ!",
            "★ VERDICT: τ(30°) = 0.01 N·m  |  Work to flip (0°→180°) = 20 mJ!"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
