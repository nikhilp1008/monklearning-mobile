/**
 * P12Ch01 · Section 55 — "Derivation: Field of an Infinite Line Charge"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md & SCENE_PLAYBOOK.md.
 *
 * OBJECT-RICH OPEN CHALKBOARD DESIGN (NO HEAVY CONTAINERS):
 *  - Infinite straight wire carrying uniform linear charge density λ
 *  - Gaussian Surface: Cylindrical surface of radius r and length l coaxial with wire.
 *  - Three surface components:
 *    1. Curved cylindrical surface: Ē || dĀ  ⇒  Φ_curved = E (2π r l)
 *    2. Circular end cap 1 (top): Ē ⊥ dĀ  ⇒  Φ_top = 0
 *    3. Circular end cap 2 (bottom): Ē ⊥ dĀ  ⇒  Φ_bottom = 0
 *  - Total Flux: Φ_total = E (2π r l)
 *  - Enclosed Charge: Q_enclosed = λ l
 *  - Apply Gauss's Law: E (2π r l) = (λ l) / ε₀  ⇒  E = λ / (2π ε₀ r) = 2 k λ / r !
 *
 * Beats (en [0, 6, 16, 30, 44, 56, 68, 80, 92]):
 *  0 Title "derivation: field of an infinite line charge" + drawn underline
 *  1 Hook note: using cylindrical Gaussian surface symmetry to derive E = 2kλ/r!
 *  2 Badge 1 & Gaussian Cylinder Choice: Curved Φ = E(2π r l) + End caps = 0
 *  3 Badge 2 & Enclosed Charge: Q_enclosed = λ l
 *  4 Badge 3 & Gauss's Law Application: E (2π r l) = λ l / ε₀  ⇒  E = λ / (2π ε₀ r)
 *  5 Vector direction: Radial (outward for +λ, inward for -λ)
 *  6 Distance dependency: E ∝ 1/r (slow 1/r decay vs point charge 1/r² decay!)
 *  7 Grand Verdict: E = λ / (2π ε₀ r) = 2 k λ / r  (Radial 1/r dependency)!
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

export default function P12Ch01Sec55({ currentTime, reveals, language }: SceneProps) {
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
            "derivation: field of an infinite line charge",
            "derivation: infinite line charge ka electric field"
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
            "using cylindrical Gaussian surface symmetry to derive E = 2kλ/r!",
            "cylindrical Gaussian surface symmetry se E = 2kλ/r derive karna!"
          )}
        </T>
      </Fade>

      {/* ── BEAT 2: Badge 1 & Gaussian Cylinder Choice ── */}
      <Badge n={1} cx={52} cy={165} on={beat >= 2} delay={dl(2, 0.4)} />
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={74} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("CYLINDRICAL GAUSSIAN SURFACE FLUX", "CYLINDRICAL GAUSSIAN SURFACE FLUX")}
        </T>
      </Fade>

      <Fade on={beat >= 2} dim={beat >= 5}>
        <G transform="translate(60, 185)">
          <Rect x={0} y={10} width={430} height={85} rx={8} fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
          <T x={215} y={48} anchor="middle" size={20} fill={INK} weight={800}>
            Φ_total = E (2π r l) + 0 + 0
          </T>
          <T x={215} y={78} anchor="middle" size={13} fill={AMBER_DARK} script>
            {t("Curved surface E || dA, flat end caps E ⊥ dA (flux=0)", "Curved surface E || dA, flat end caps E ⊥ dA (flux=0)")}
          </T>
          <Draw on={beat >= 2} delay={dl(2, 1.6)} d="M 100 56 h 230 M 100 60 h 230" stroke={AMBER_DARK} sw={1.5} />
        </G>
      </Fade>

      {/* ── BEAT 4: Badge 3 & Gauss's Law Result ── */}
      <Badge n={3} cx={540} cy={165} on={beat >= 4} delay={dl(4, 0.4)} />
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={562} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("GAUSS'S LAW RESULT E = 2 k λ / r", "GAUSS'S LAW RESULT E = 2 k λ / r")}
        </T>
      </Fade>

      <Fade on={beat >= 4} dim={beat >= 6}>
        <G transform="translate(540, 185)">
          <T x={0} y={25} anchor="start" size={14} fill={INK} weight={700}>
            E (2π r l) = λ l / ε₀
          </T>
          <T x={0} y={65} anchor="start" size={24} fill={RED} weight={800}>
            E = λ / (2πε₀ r) = 2 k λ / r
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
            "★ VERDICT: E = λ / (2π ε₀ r) = 2 k λ / r  (Radial 1/r dependency)!",
            "★ VERDICT: E = λ / (2π ε₀ r) = 2 k λ / r  (Radial 1/r dependency)!"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
