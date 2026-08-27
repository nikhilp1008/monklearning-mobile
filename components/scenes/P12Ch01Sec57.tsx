/**
 * P12Ch01 · Section 57 — "Derivation: Field of a Thin Spherical Shell"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md & SCENE_PLAYBOOK.md.
 *
 * OBJECT-RICH OPEN CHALKBOARD DESIGN (NO HEAVY CONTAINERS):
 *  - Thin spherical shell of radius R carrying total charge Q (surface density σ = Q / 4π R²).
 *  - Case 1: Outside Shell (r > R):
 *    Gaussian sphere radius r > R. Enclosed charge Q_enc = Q.
 *    E (4π r²) = Q / ε₀  ⇒  E_out = k Q / r²  (Behaves as if all charge is concentrated at center!)
 *  - Case 2: On Surface (r = R):
 *    E_surface = k Q / R² = σ / ε₀ !
 *  - Case 3: Inside Shell (r < R):
 *    Gaussian sphere radius r < R. Enclosed charge Q_enc = 0.
 *    E (4π r²) = 0  ⇒  E_in = 0  (PERFECT ZERO SHIELDING FIELD INSIDE!)
 *
 * Beats (en [0, 6, 18, 32, 44, 56, 68, 80, 90]):
 *  0 Title "derivation: field of a thin spherical shell" + drawn underline
 *  1 Hook note: applying spherical Gaussian surfaces inside, on, and outside the shell!
 *  2 Badge 1 & Outside Shell (r > R): E_out = k Q / r² (Point charge behavior!)
 *  3 Badge 2 & On Surface (r = R): E_surface = k Q / R² = σ / ε₀
 *  4 Badge 3 & Inside Shell (r < R): E_in = 0 (Zero field inside electrostatic cavity!)
 *  5 Electrostatic shielding applications (Faraday cage effect)
 *  6 Graph of E vs r: 0 inside, jumps to kQ/R² at surface, decays as 1/r² outside!
 *  7 Grand Verdict: Outside: E = k Q / r²  |  Surface: E = k Q / R²  |  Inside: E = 0 !
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

export default function P12Ch01Sec57({ currentTime, reveals, language }: SceneProps) {
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
            "derivation: field of a thin spherical shell",
            "derivation: thin spherical shell ka electric field"
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
            "applying spherical Gaussian surfaces inside, on, and outside the shell!",
            "spherical Gaussian surfaces se shell ke andar, surface par, aur bahar nikaalna!"
          )}
        </T>
      </Fade>

      {/* ── BEAT 2: Badge 1 & Outside Shell (r > R) ── */}
      <Badge n={1} cx={52} cy={165} on={beat >= 2} delay={dl(2, 0.4)} />
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={74} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("OUTSIDE SHELL (r > R): E_out = k Q / r²", "OUTSIDE SHELL (r > R): E_out = k Q / r²")}
        </T>
      </Fade>

      <Fade on={beat >= 2} dim={beat >= 5}>
        <G transform="translate(60, 185)">
          <Rect x={0} y={10} width={430} height={85} rx={8} fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
          <T x={215} y={48} anchor="middle" size={20} fill={INK} weight={800}>
            E_out = k Q / r²  (r &gt; R)
          </T>
          <T x={215} y={78} anchor="middle" size={13} fill={AMBER_DARK} script>
            {t("Behaves as if all charge Q is at the center!", "Aise behave karta hai jaise saara charge center par ho!")}
          </T>
          <Draw on={beat >= 2} delay={dl(2, 1.6)} d="M 100 56 h 230 M 100 60 h 230" stroke={AMBER_DARK} sw={1.5} />
        </G>
      </Fade>

      {/* ── BEAT 4: Badge 3 & Inside Shell (r < R) ── */}
      <Badge n={3} cx={540} cy={165} on={beat >= 4} delay={dl(4, 0.4)} />
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={562} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("INSIDE SHELL (r < R): E_in = 0", "INSIDE SHELL (r < R): E_in = 0")}
        </T>
      </Fade>

      <Fade on={beat >= 4} dim={beat >= 6}>
        <G transform="translate(540, 185)">
          <T x={0} y={25} anchor="start" size={14} fill={INK} weight={700}>
            Q_enclosed = 0 inside shell cavity!
          </T>
          <T x={0} y={65} anchor="start" size={24} fill={GREEN} weight={800}>
            E_in = 0  (PERFECT ZERO SHIELDING!)
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
            "★ VERDICT: Outside: E = k Q / r²  |  Surface: E = k Q / R²  |  Inside: E = 0 !",
            "★ VERDICT: Outside: E = k Q / r²  |  Surface: E = k Q / R²  |  Inside: E = 0 !"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
