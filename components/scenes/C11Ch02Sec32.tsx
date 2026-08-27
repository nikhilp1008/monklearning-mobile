/**
 * C11 Ch02 · Section 32 — "The hydrogen spectrum and the Rydberg equation"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (en [0, 10.92, 20.74, 35.75, 47.1, 60.42, 70.31, 81.66]):
 *  0 anchor: "from energy gaps to the Rydberg equation"
 *  1 explain: a drop n₂→n₁ emits a photon carrying the gap
 *  2 formula: hc/λ = 2.18×10⁻¹⁸(1/n₁²−1/n₂²) J
 *  3 formula (high, GREEN): ν̄ = R_H(1/n₁²−1/n₂²)
 *  4 guardrail (high): R_H emerges from fundamental constants
 *  5 represent: energy-level diagram, Lyman/Balmer/Paschen transitions
 *  6 explain: fixed n₁ → named series (Lyman UV, Balmer visible, Paschen IR)
 *  7 explain: Bohr's climax — real wavelengths from first principles
 *
 * Layout plan (single column + diagram, x300..740):
 *  title (always)             | T mid | x540 y52 size14 script red
 *  b0 | anchor caption         | T mid | x540 y78             [dims@b1]
 *  b1 | drop caption           | T mid | x540 y110
 *  b2 | ΔE formula chip        | Chip  | x310..770 y128..158
 *  b3 | ν̄=R_H chip (GREEN)     | Chip  | x370..710 y176..210
 *  b4 | R_H guardrail caption  | T mid | x540 y236
 *  b5 | 4 level lines          | Draw  | x300..700 y272/312/372/462
 *  b5 | n=1..4 labels          | T sta | x712
 *  b5 | Paschen arrow+label    | Draw/T| x610 y272..312 / y264
 *  b5 | Balmer arrow+label     | Draw/T| x480 y272..372 / y392
 *  b5 | Lyman arrow+label      | Draw/T| x350 y312..462 / y484
 *  b6 | named-series caption   | T mid | x540 y515
 *  b7 | Bohr's climax caption  | T mid | x540 y550
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  arrowD,
  INK,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

const LEVELS_D = "M 300 272 H 700 M 300 312 H 700 M 300 372 H 700 M 300 462 H 700";

const N_LABELS: [number, string][] = [
  [272, "n = 4"],
  [312, "n = 3"],
  [372, "n = 2"],
  [462, "n = 1"],
];

export default function C11Ch02Sec32({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={52} size={14} fill={RED} script>
          {t("the hydrogen spectrum and the Rydberg equation", "hydrogen spectrum aur Rydberg equation")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} dim={beat >= 1} delay={dl(0, 0.3)}>
        <T x={540} y={78} size={11} fill={RED} script>
          {t("from energy gaps to the Rydberg equation", "energy gaps se Rydberg equation tak")}
        </T>
      </Fade>

      {/* beat 1 — explain: a drop emits the gap as a photon */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={110} size={12} fill={INK} script>
          {t(
            "a drop n₂ → n₁ emits a photon carrying the gap: ΔE = hν = hc/λ",
            "n₂ → n₁ drop se photon nikalta hai jo gap carry karta hai: ΔE = hν = hc/λ"
          )}
        </T>
      </Fade>

      {/* beat 2 — formula */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <Chip x={310} y={128} w={460} h={30} fill={CREAM} stroke={AMBER_DARK} textFill={AMBER_DARK} size={13} script={false}>
          hc/λ = 2.18×10⁻¹⁸(1/n₁² − 1/n₂²) J
        </Chip>
      </Fade>

      {/* beat 3 — formula (high, GREEN) */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <Chip x={370} y={176} w={340} h={34} fill={CREAM} stroke={GREEN} textFill={GREEN} size={16} script={false}>
          ν̄ = R_H(1/n₁² − 1/n₂²)
        </Chip>
      </Fade>

      {/* beat 4 — guardrail (high): R_H from fundamentals */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={236} size={12} fill={RED} script>
          {t(
            "R_H = me⁴/8ε₀²h³c — a fitted constant, now from fundamentals",
            "R_H = me⁴/8ε₀²h³c — fitted constant, ab fundamentals se"
          )}
        </T>
      </Fade>

      {/* beat 5 — represent: energy-level diagram */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d={LEVELS_D} stroke={INK} sw={1.8} dur={0.8} />
      {N_LABELS.map(([y, label], i) => (
        <Fade key={`n${y}`} on={beat >= 5} delay={dl(5, 1 + i * 0.15)}>
          <T x={712} y={y + 4} size={11} fill={INK} anchor="start">
            {label}
          </T>
        </Fade>
      ))}
      <Draw on={beat >= 5} delay={dl(5, 2)} d={arrowD(610, 272, 610, 312)} stroke={AMBER_DARK} sw={2.2} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 2.4)}>
        <T x={610} y={264} size={11} fill={AMBER_DARK}>
          {t("Paschen (IR)", "Paschen (IR)")}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 2.7)} d={arrowD(480, 272, 480, 372)} stroke={GREEN} sw={2.2} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 3.2)}>
        <T x={480} y={392} size={11} fill={GREEN}>
          {t("Balmer (visible)", "Balmer (visible)")}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 3.5)} d={arrowD(350, 312, 350, 462)} stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 5} delay={dl(5, 4.1)}>
        <T x={350} y={484} size={11} fill={RED}>
          {t("Lyman (UV)", "Lyman (UV)")}
        </T>
      </Fade>

      {/* beat 6 — explain: fixed n₁ generates a named series */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={515} size={12} fill={INK} script>
          {t(
            "fixed n₁ → a named series: Lyman (UV), Balmer (visible), Paschen (IR)",
            "fixed n₁ → named series: Lyman (UV), Balmer (visible), Paschen (IR)"
          )}
        </T>
      </Fade>

      {/* beat 7 — Bohr's climax */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={550} size={13} fill={GREEN} script>
          {t(
            "Bohr's climax: real wavelengths, predicted from first principles",
            "Bohr ka climax: real wavelengths, first principles se predict"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
