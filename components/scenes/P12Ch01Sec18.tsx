/**
 * P12Ch01 · Section 18 — "Limiting Conditions and the Effect of a Medium"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md & SCENE_PLAYBOOK.md.
 *
 * OBJECT-RICH OPEN CHALKBOARD DESIGN (NO HEAVY CONTAINERS):
 *  - Point charge validity limit: Coulomb's Law strictly holds for point charges (size << separation r)
 *  - Medium effect: F_med = F_vacuum / K = F_vac / ε_r
 *  - Relative permittivity (Dielectric Constant) K = ε / ε₀ ≥ 1
 *  - Conductors / Metals dielectric constant K = ∞ !
 *
 * Beats (en [0, 6, 18, 32, 44, 54, 68, 82, 92]):
 *  0 Title "limiting conditions & effect of a medium" + drawn underline
 *  1 Hook note: when does Coulomb's Law hold, and how does a dielectric medium weaken force?
 *  2 Badge 1 & Limiting Condition: Point charges ONLY (size << separation r)
 *  3 Badge 2 & Dielectric Medium Effect: F_med = F_vac / K
 *  4 Dielectric Constant definition: K = ε / ε₀ (always K ≥ 1 in insulators)
 *  5 Metals / Conductors Dielectric Constant: K = ∞ (force reduces to ZERO in metals!)
 *  6 Permittivity formula: ε = K · ε₀ (ε₀ = 8.854 × 10⁻¹² C²/N·m²)
 *  7 Speed-trap warning: Force inside medium decreases by factor of K!
 *  8 Grand Verdict: F_med = F_vac / K (Dielectric medium reduces force by K!)
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

export default function P12Ch01Sec18({ currentTime, reveals, language }: SceneProps) {
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
            "limiting conditions & effect of a medium",
            "limiting conditions aur medium ka prabhav"
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
            "when does Coulomb's Law hold, and how does a dielectric medium weaken force?",
            "Coulomb's Law kab kaam karta hai, aur dielectric medium force ko kaise kam karta hai?"
          )}
        </T>
      </Fade>

      {/* ── BEAT 2: Badge 1 & Limiting Condition (Point Charges Only) ── */}
      <Badge n={1} cx={52} cy={165} on={beat >= 2} delay={dl(2, 0.4)} />
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={74} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("LIMITING CONDITION: Point Charges Only", "LIMITING CONDITION: Sirf Point Charges")}
        </T>
      </Fade>

      <Fade on={beat >= 2} dim={beat >= 6}>
        <G transform="translate(60, 185)">
          <T x={0} y={25} anchor="start" size={13.5} fill={INK}>
            {t(
              "Charge size must be much smaller than separation distance r (size << r)",
              "Charge size separation r se bohot chhota hona chahiye (size << r)"
            )}
          </T>
        </G>
      </Fade>

      {/* ── BEAT 3: Badge 2 & Effect of Medium F_med = F_vac / K ── */}
      <Badge n={2} cx={540} cy={165} on={beat >= 3} delay={dl(3, 0.4)} />
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={562} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("EFFECT OF DIELECTRIC MEDIUM", "EFFECT OF DIELECTRIC MEDIUM")}
        </T>
      </Fade>

      <Fade on={beat >= 3} dim={beat >= 6}>
        <G transform="translate(540, 185)">
          <Rect x={0} y={10} width={450} height={85} rx={8} fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
          <T x={225} y={48} anchor="middle" size={24} fill={INK} weight={800}>
            F_med = F_vac / K
          </T>
          <T x={225} y={78} anchor="middle" size={13} fill={AMBER_DARK} script>
            {t("K = Dielectric Constant (Relative Permittivity ε_r ≥ 1)", "K = Dielectric Constant (Relative Permittivity ε_r ≥ 1)")}
          </T>
          <Draw on={beat >= 3} delay={dl(3, 1.6)} d="M 120 56 h 210 M 120 60 h 210" stroke={AMBER_DARK} sw={1.5} />
        </G>
      </Fade>

      {/* ── BEAT 4 & 5: Dielectric Constant K for Metals (K = ∞) ── */}
      <Fade on={beat >= 5} dim={beat >= 7}>
        <G transform="translate(60, 310)">
          <T x={0} y={20} anchor="start" size={14} weight={700} fill={RED}>
            {t("Dielectric Constant for Metals / Conductors:", "Dielectric Constant Metals / Conductors ke liye:")}
          </T>
          <T x={0} y={55} anchor="start" size={20} fill={RED} weight={800}>
            K_metal = ∞  ⇒  F_metal = 0 !
          </T>
          <T x={0} y={85} anchor="start" size={13} script={true} fill={MUTED}>
            {t("Placing a metal sheet between charges shields force down to ZERO!", "Charges ke beech metal sheet rakhne par force ZERO ho jata hai!")}
          </T>
        </G>
      </Fade>

      {/* ── BEAT 6: Permittivity Relation ε = K ε₀ ── */}
      <Fade on={beat >= 6} dim={beat >= 7}>
        <G transform="translate(540, 310)">
          <T x={0} y={20} anchor="start" size={13.5} weight={700} fill={GREEN}>
            Permittivity Formula:
          </T>
          <T x={0} y={55} anchor="start" size={18} fill={GREEN} weight={800}>
            ε = K · ε₀  (ε₀ = 8.854 × 10⁻¹² C²/N·m²)
          </T>
        </G>
      </Fade>

      {/* ── BEAT 8: Grand Verdict Chip ── */}
      <Fade on={beat >= 8}>
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
            "★ VERDICT: F_med = F_vac / K (Dielectric medium reduces force by K!)",
            "★ VERDICT: F_med = F_vac / K (Dielectric medium reduces force by K!)"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
