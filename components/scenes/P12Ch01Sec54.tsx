/**
 * P12Ch01 · Section 54 — "Foundation: Why the Flux Is q over Epsilon Nought"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md & SCENE_PLAYBOOK.md.
 *
 * OBJECT-RICH OPEN CHALKBOARD DESIGN (NO HEAVY CONTAINERS):
 *  - Derivation of Gauss's Law from Coulomb's Law and Solid Angle Ω
 *  - Point charge q at center of spherical surface radius r
 *  - Field E = k q / r² = q / (4π ε₀ r²)
 *  - Spherical area A = 4π r²
 *  - Flux Φ = E A = [ q / (4π ε₀ r²) ] × (4π r²) = q / ε₀ !
 *  - Notice how 4π and r² cancel out cleanly!
 *  - Solid angle concept: dΩ = (dA cos θ) / r². Total solid angle of any closed surface = 4π steradians!
 *
 * Beats (en [0, 6, 16, 30, 42, 54, 68, 78, 90]):
 *  0 Title "foundation: why the flux is q / ε₀" + drawn underline
 *  1 Hook note: explicit cancellation of 4π and r² using solid angle geometry!
 *  2 Badge 1 & Spherical Cancellation: E × A = [q / (4π ε₀ r²)] × (4π r²) = q / ε₀
 *  3 Badge 2 & Solid Angle Generalization: ∮ dΩ = 4π steradians for any closed surface!
 *  4 Connection to 1/r² force law: Gauss's law is a direct mathematical consequence of 1/r² dependency!
 *  5 Summary check: If force law were 1/r³, Gauss's law would fail!
 *  6 Grand Verdict: 4π and r² cancel cleanly ⇒ Φ = q / ε₀ (consequence of 1/r² law)!
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

export default function P12Ch01Sec54({ currentTime, reveals, language }: SceneProps) {
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
            "foundation: why the flux is q / ε₀",
            "foundation: flux hamesha q / ε₀ kyun hota hai"
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
            "explicit cancellation of 4π and r² using solid angle geometry!",
            "solid angle geometry se 4π aur r² ka clean cancellation!"
          )}
        </T>
      </Fade>

      {/* ── BEAT 2: Badge 1 & Spherical Cancellation ── */}
      <Badge n={1} cx={52} cy={165} on={beat >= 2} delay={dl(2, 0.4)} />
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={74} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("SPHERICAL CANCELLATION DERIVATION", "SPHERICAL CANCELLATION DERIVATION")}
        </T>
      </Fade>

      <Fade on={beat >= 2} dim={beat >= 5}>
        <G transform="translate(60, 185)">
          <Rect x={0} y={10} width={430} height={85} rx={8} fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
          <T x={215} y={48} anchor="middle" size={20} fill={INK} weight={800}>
            Φ = [q / (4π ε₀ r²)] × (4π r²) = q / ε₀
          </T>
          <T x={215} y={78} anchor="middle" size={13} fill={AMBER_DARK} script>
            {t("4π and r² terms cancel out completely!", "4π aur r² terms poori tarah cancel ho jaate hain!")}
          </T>
          <Draw on={beat >= 2} delay={dl(2, 1.6)} d="M 100 56 h 230 M 100 60 h 230" stroke={AMBER_DARK} sw={1.5} />
        </G>
      </Fade>

      {/* ── BEAT 3: Badge 2 & Solid Angle Generalization ── */}
      <Badge n={2} cx={540} cy={165} on={beat >= 3} delay={dl(3, 0.4)} />
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={562} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("SOLID ANGLE GENERALIZATION ∮ dΩ = 4π", "SOLID ANGLE GENERALIZATION ∮ dΩ = 4π")}
        </T>
      </Fade>

      <Fade on={beat >= 3} dim={beat >= 5}>
        <G transform="translate(540, 185)">
          <T x={0} y={25} anchor="start" size={14} fill={INK} weight={700}>
            dΩ = (dA cos θ) / r²  (Solid angle element)
          </T>
          <T x={0} y={65} anchor="start" size={20} fill={RED} weight={800}>
            ∮ dΩ = 4π steradians for ANY closed surface!
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
            "★ VERDICT: 4π and r² cancel cleanly ⇒ Φ = q / ε₀ (consequence of 1/r² law)!",
            "★ VERDICT: 4π and r² cancel cleanly ⇒ Φ = q / ε₀ (consequence of 1/r² law)!"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
