/**
 * P12Ch01 · Section 45 — "Derivation: Field on the Axis of a Charged Disc"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md & SCENE_PLAYBOOK.md.
 *
 * OBJECT-RICH OPEN CHALKBOARD DESIGN (NO HEAVY CONTAINERS):
 *  - Flat disc of radius R and uniform surface charge density σ
 *  - Chop disc into concentric ring elements of radius r and width dr
 *  - Area of ring element dA = 2π r dr  ⇒  dq = σ dA = 2π σ r dr
 *  - Field of ring element at distance x: dE = k (2π σ r dr) x / (r² + x²)^(3/2)
 *  - Integration over r from 0 to R: E_disc = (σ / 2ε₀) [ 1 - x / √(R² + x²) ]
 *  - Limiting case 1: Infinite plane sheet (R → ∞): E = σ / 2ε₀  (UNIFORM FIELD!)
 *  - Limiting case 2: Near disc (x << R): E ≈ σ / 2ε₀
 *
 * Beats (en [0, 6, 20, 34, 46, 58, 70, 82, 94]):
 *  0 Title "derivation: field on the axis of a charged disc" + drawn underline
 *  1 Hook note: integrating concentric ring elements to derive disc field & infinite sheet limit!
 *  2 Badge 1 & Exact Axial Disc Field: E = (σ / 2ε₀) [ 1 - x / √(R² + x²) ]
 *  3 Ring element integration setup: dq = σ (2π r dr)
 *  4 Badge 2 & Infinite Sheet Limit (R → ∞): E = σ / 2ε₀ (Uniform field!)
 *  5 Distance independence of infinite sheet field (independent of x!)
 *  6 Near-disc limit (x << R): E ≈ σ / 2ε₀
 *  7 Far-disc limit (x >> R): E ≈ k Q / x² (point charge limit!)
 *  8 Grand Verdict: E_disc = (σ / 2ε₀) [1 - x/√(R²+x²)]  |  R → ∞ ⇒ E = σ / 2ε₀ !
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

export default function P12Ch01Sec45({ currentTime, reveals, language }: SceneProps) {
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
            "derivation: field on the axis of a charged disc",
            "derivation: charged disc ki axis par electric field"
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
            "integrating concentric ring elements to derive disc field & infinite sheet limit!",
            "concentric ring elements ko integrate karke disc field aur infinite sheet limit nikaalna!"
          )}
        </T>
      </Fade>

      {/* ── BEAT 2: Badge 1 & Exact Disc Field Formula ── */}
      <Badge n={1} cx={52} cy={165} on={beat >= 2} delay={dl(2, 0.4)} />
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={74} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("EXACT AXIAL DISC FIELD FORMULA", "EXACT AXIAL DISC FIELD FORMULA")}
        </T>
      </Fade>

      <Fade on={beat >= 2} dim={beat >= 4}>
        <G transform="translate(60, 185)">
          <Rect x={0} y={10} width={430} height={85} rx={8} fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
          <T x={215} y={48} anchor="middle" size={20} fill={INK} weight={800}>
            E = (σ / 2ε₀) [ 1 - x / √(R² + x²) ]
          </T>
          <T x={215} y={78} anchor="middle" size={13} fill={AMBER_DARK} script>
            {t("Derived by integrating concentric ring elements from 0 to R", "Concentric ring elements ko 0 se R tak integrate karke")}
          </T>
          <Draw on={beat >= 2} delay={dl(2, 1.6)} d="M 100 56 h 230 M 100 60 h 230" stroke={AMBER_DARK} sw={1.5} />
        </G>
      </Fade>

      {/* ── BEAT 4: Badge 2 & Infinite Sheet Limit (R → ∞) ── */}
      <Badge n={2} cx={540} cy={165} on={beat >= 4} delay={dl(4, 0.4)} />
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={562} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("INFINITE SHEET LIMIT (R → ∞)", "INFINITE SHEET LIMIT (R → ∞)")}
        </T>
      </Fade>

      <Fade on={beat >= 4} dim={beat >= 6}>
        <G transform="translate(540, 185)">
          <T x={0} y={25} anchor="start" size={14} fill={INK} weight={700}>
            As R → ∞, x / √(R² + x²) → 0
          </T>
          <T x={0} y={65} anchor="start" size={24} fill={RED} weight={800}>
            E = σ / 2ε₀  (UNIFORM FIELD!)
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
            "★ VERDICT: E_disc = (σ / 2ε₀) [1 - x/√(R²+x²)]  |  R → ∞ ⇒ E = σ / 2ε₀ !",
            "★ VERDICT: E_disc = (σ / 2ε₀) [1 - x/√(R²+x²)]  |  R → ∞ ⇒ E = σ / 2ε₀ !"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
