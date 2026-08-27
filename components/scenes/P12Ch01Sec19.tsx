/**
 * P12Ch01 · Section 19 — "Formulas and Constants for Coulomb's Law"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md & SCENE_PLAYBOOK.md.
 *
 * OBJECT-RICH OPEN CHALKBOARD DESIGN (NO HEAVY CONTAINERS):
 *  - Master formula cheat-sheet card
 *  - Vacuum permittivity ε₀ = 8.854 × 10⁻¹² C² / (N·m²)
 *  - Coulomb Constant k = 8.98755 × 10⁹ ≈ 9 × 10⁹ N·m² / C²
 *  - Dimensional analysis of ε₀: [M⁻¹ L⁻³ T⁴ A²]
 *
 * Beats (en [0, 6, 16, 28, 38, 50, 62, 76, 88]):
 *  0 Title "formulas & constants for coulomb's law" + drawn underline
 *  1 Hook note: master formula cheat-sheet for board exams & numericals!
 *  2 Badge 1 & Vacuum Permittivity ε₀ = 8.854 × 10⁻¹² C²/N·m²
 *  3 Dimensional Formula of ε₀: [M⁻¹ L⁻³ T⁴ A²]
 *  4 Badge 2 & Electrostatic Constant k = 1/(4πε₀) ≈ 9 × 10⁹ N·m²/C²
 *  5 Dielectric medium formula: F_med = (1 / 4πε) (q₁ q₂ / r²) = F_vac / K
 *  6 Units comparison table: C²/N·m² vs N·m²/C²
 *  7 Speed-trap warning on units!
 *  8 Grand Verdict: k = 9 × 10⁹ N·m²/C²  |  ε₀ = 8.854 × 10⁻¹² C²/N·m²!
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

export default function P12Ch01Sec19({ currentTime, reveals, language }: SceneProps) {
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
            "formulas & constants for coulomb's law",
            "coulomb's law ke formulas aur constants"
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
            "master formula cheat-sheet for board exams & numericals!",
            "board exams aur numericals ke liye master formula cheat-sheet!"
          )}
        </T>
      </Fade>

      {/* ── BEAT 2: Badge 1 & Vacuum Permittivity ε₀ ── */}
      <Badge n={1} cx={52} cy={165} on={beat >= 2} delay={dl(2, 0.4)} />
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={74} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("VACUUM PERMITTIVITY ε₀", "VACUUM PERMITTIVITY ε₀")}
        </T>
      </Fade>

      <Fade on={beat >= 2} dim={beat >= 6}>
        <G transform="translate(60, 185)">
          <Rect x={0} y={10} width={430} height={85} rx={8} fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
          <T x={215} y={48} anchor="middle" size={22} fill={INK} weight={800}>
            ε₀ = 8.854 × 10⁻¹² C² / (N·m²)
          </T>
          <T x={215} y={78} anchor="middle" size={13} fill={AMBER_DARK} script>
            {t("Permittivity of free space / vacuum", "Free space / vacuum ki permittivity")}
          </T>
          <Draw on={beat >= 2} delay={dl(2, 1.6)} d="M 100 56 h 230 M 100 60 h 230" stroke={AMBER_DARK} sw={1.5} />
        </G>
      </Fade>

      {/* ── BEAT 3: Dimensional Formula of ε₀ ── */}
      <Fade on={beat >= 3} dim={beat >= 6}>
        <G transform="translate(540, 185)">
          <T x={0} y={30} anchor="start" size={14} weight={700} fill={RED}>
            Dimensional Formula of ε₀:
          </T>
          <T x={0} y={65} anchor="start" size={22} fill={RED} weight={800}>
            [M⁻¹ L⁻³ T⁴ A²]
          </T>
        </G>
      </Fade>

      {/* ── BEAT 4: Badge 2 & Electrostatic Constant k ── */}
      <Badge n={2} cx={52} cy={300} on={beat >= 4} delay={dl(4, 0.4)} />
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={74} y={305} size={14} fill={RED} weight={700} anchor="start">
          {t("COULOMB CONSTANT k = 1 / (4πε₀)", "COULOMB CONSTANT k = 1 / (4πε₀)")}
        </T>
      </Fade>

      <Fade on={beat >= 4} dim={beat >= 6}>
        <G transform="translate(60, 325)">
          <T x={0} y={20} anchor="start" size={14} weight={700} fill={GREEN}>
            k ≈ 9 × 10⁹ N·m² / C²
          </T>
        </G>
      </Fade>

      {/* ── BEAT 5 & 6: Dielectric Medium Formula ── */}
      <Fade on={beat >= 5} dim={beat >= 7}>
        <G transform="translate(540, 325)">
          <T x={0} y={20} anchor="start" size={13.5} weight={700} fill={AMBER_DARK}>
            In Medium with Relative Permittivity ε_r:
          </T>
          <T x={0} y={50} anchor="start" size={18} fill={AMBER_DARK} weight={800}>
            F_med = (1 / 4πε) (q₁ q₂ / r²) = F_vac / ε_r
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
            "★ VERDICT: k = 9 × 10⁹ N·m²/C²  |  ε₀ = 8.854 × 10⁻¹² C²/N·m²!",
            "★ VERDICT: k = 9 × 10⁹ N·m²/C²  |  ε₀ = 8.854 × 10⁻¹² C²/N·m²!"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
