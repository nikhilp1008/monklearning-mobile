/**
 * P12Ch01 · Section 56 — "Derivation: Field of an Infinite Plane Sheet"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md & SCENE_PLAYBOOK.md.
 *
 * OBJECT-RICH OPEN CHALKBOARD DESIGN (NO HEAVY CONTAINERS):
 *  - Infinite thin plane sheet of uniform surface charge density σ.
 *  - Gaussian Surface: Gaussian pillbox cylinder of cross-sectional area A piercing the sheet perpendicularly.
 *  - Flux calculation:
 *    1. Left end cap area A: Ē || Ā  ⇒  Φ_left = E A
 *    2. Right end cap area A: Ē || Ā  ⇒  Φ_right = E A
 *    3. Curved cylindrical side: Ē ⊥ Ā  ⇒  Φ_curved = 0
 *  - Total Flux: Φ_total = 2 E A
 *  - Enclosed Charge: Q_enclosed = σ A
 *  - Apply Gauss's Law: 2 E A = σ A / ε₀  ⇒  E = σ / 2ε₀ !
 *  - Key property: Independent of distance r from sheet!
 *
 * Beats (en [0, 6, 18, 32, 44, 56, 68, 78, 88, 98]):
 *  0 Title "derivation: field of an infinite plane sheet" + drawn underline
 *  1 Hook note: using Gaussian pillbox symmetry to derive uniform field E = σ / 2ε₀!
 *  2 Badge 1 & Pillbox Flux Calculation: Φ_total = E A + E A + 0 = 2 E A
 *  3 Badge 2 & Enclosed Charge: Q_enclosed = σ A
 *  4 Badge 3 & Gauss's Law Application: 2 E A = σ A / ε₀  ⇒  E = σ / 2ε₀
 *  5 Distance independence: Field magnitude is uniform and independent of distance r!
 *  6 Two parallel oppositely charged plates: E_between = σ/ε₀, E_outside = 0!
 *  7 Grand Verdict: E_sheet = σ / 2ε₀  (UNIFORM FIELD independent of distance r)!
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

export default function P12Ch01Sec56({ currentTime, reveals, language }: SceneProps) {
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
            "derivation: field of an infinite plane sheet",
            "derivation: infinite plane sheet ka electric field"
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
            "using Gaussian pillbox symmetry to derive uniform field E = σ / 2ε₀!",
            "Gaussian pillbox symmetry se uniform field E = σ / 2ε₀ derive karna!"
          )}
        </T>
      </Fade>

      {/* ── BEAT 2: Badge 1 & Pillbox Flux Calculation ── */}
      <Badge n={1} cx={52} cy={165} on={beat >= 2} delay={dl(2, 0.4)} />
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={74} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("PILLBOX FLUX CALCULATION", "PILLBOX FLUX CALCULATION")}
        </T>
      </Fade>

      <Fade on={beat >= 2} dim={beat >= 5}>
        <G transform="translate(60, 185)">
          <Rect x={0} y={10} width={430} height={85} rx={8} fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
          <T x={215} y={48} anchor="middle" size={20} fill={INK} weight={800}>
            Φ_total = E A + E A + 0 = 2 E A
          </T>
          <T x={215} y={78} anchor="middle" size={13} fill={AMBER_DARK} script>
            {t("Both flat end caps contribute E A, curved side is zero!", "Dono flat end caps E A contribute karte hain!")}
          </T>
          <Draw on={beat >= 2} delay={dl(2, 1.6)} d="M 100 56 h 230 M 100 60 h 230" stroke={AMBER_DARK} sw={1.5} />
        </G>
      </Fade>

      {/* ── BEAT 4: Badge 3 & Gauss's Law Application ── */}
      <Badge n={3} cx={540} cy={165} on={beat >= 4} delay={dl(4, 0.4)} />
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={562} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("GAUSS'S LAW RESULT E = σ / 2ε₀", "GAUSS'S LAW RESULT E = σ / 2ε₀")}
        </T>
      </Fade>

      <Fade on={beat >= 4} dim={beat >= 6}>
        <G transform="translate(540, 185)">
          <T x={0} y={25} anchor="start" size={14} fill={INK} weight={700}>
            2 E A = σ A / ε₀
          </T>
          <T x={0} y={65} anchor="start" size={24} fill={RED} weight={800}>
            E = σ / 2ε₀  (UNIFORM!)
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
            "★ VERDICT: E_sheet = σ / 2ε₀  (UNIFORM FIELD independent of distance r)!",
            "★ VERDICT: E_sheet = σ / 2ε₀  (UNIFORM FIELD independent of distance r)!"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
