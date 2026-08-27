/**
 * C11 Ch02 · Section 56 — "Complete formula toolkit for the chapter"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md. `section_type: concept` — chapter close,
 * subtopic "Chapter Close: Formula Recap & Cheat Sheet". 10 beats (not 8).
 *
 * Beats (en [0, 19.19, 28.02, 37.22, 44.81, 51.04, 57.28, 64.62, 71.04, 82.64]):
 *  0 anchor: your complete toolkit — recall, don't re-derive
 *  1 cell①: early models — e/m, mₑ
 *  2 cell②: composition — A=Z+N, r₀
 *  3 cell③: radiation — c=νλ, E=hν, shortcut
 *  4 cell④ (high): photoelectric — hν=W₀+KEmax, N=Pt/hν
 *  5 cell⑤ (high): Bohr — rₙ, Eₙ
 *  6 cell⑥: spectra — Rydberg, line count
 *  7 cell⑦: matter waves — λ=h/mv, uncertainty
 *  8 cell⑧ (high): quantum — node counts, L
 *  9 land (high, RED): counting backbone — n², 2n², (n+l) rule
 *
 * Layout plan (4×2 formula-card grid + closing strip, x50..1030):
 *  title (always)          | T mid | x540 y52 script red
 *  b0 | anchor caption      | T mid | x540 y74            [dims@b1]
 *  b1..b8 | 8 cards         | rect+T| 4 cols × 2 rows, y96..182 / y200..286
 *  b9 | closing chip (RED)  | Chip  | x140..940 y310..348
 */

import React from "react";
import { Rect, Text as SvgText } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, T, GREEN, RED, CREAM, AMBER_DARK, INK, MUTED,
  Scene,
} from '@/components/scenes/kit';

type Card = {
  x: number;
  y: number;
  label: string;
  l1: string;
  l2: string;
  high?: boolean;
};

const W = 220;
const H = 86;
const COLS = [50, 297, 544, 791];
const ROWS = [96, 200];

const CARDS: Card[] = [
  { x: COLS[0], y: ROWS[0], label: "early models", l1: "e/m = 1.758×10¹¹ C/kg", l2: "mₑ = 9.1×10⁻³¹ kg" },
  { x: COLS[1], y: ROWS[0], label: "composition", l1: "A = Z + N", l2: "r₀ = z₁Ze²/4πε₀·KE" },
  { x: COLS[2], y: ROWS[0], label: "radiation", l1: "c = νλ,  E = hν = hc/λ", l2: "E(eV) = 1240/λ(nm)" },
  { x: COLS[3], y: ROWS[0], label: "photoelectric", l1: "hν = W₀ + KEmax", l2: "N = Pt/hν", high: true },
  { x: COLS[0], y: ROWS[1], label: "Bohr", l1: "rₙ = 0.529 n²/Z Å", l2: "Eₙ = −13.6 Z²/n² eV", high: true },
  { x: COLS[1], y: ROWS[1], label: "spectra", l1: "ν̄ = R_HZ²(1/n₁²−1/n₂²)", l2: "lines = n(n−1)/2" },
  { x: COLS[2], y: ROWS[1], label: "matter waves", l1: "λ = h/mv", l2: "Δx·Δp ≥ h/4π" },
  { x: COLS[3], y: ROWS[1], label: "quantum", l1: "radial=n−l−1, angular=l", l2: "total = n−1", high: true },
];

export default function C11Ch02Sec56({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={52} size={14} fill={RED} script>
          {t("your complete formula toolkit", "aapka complete formula toolkit")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} dim={beat >= 1} delay={dl(0, 0.3)}>
        <T x={540} y={74} size={11} fill={RED} script>
          {t(
            "recall, don't re-derive — everything here was built earlier",
            "recall karo, dobara derive mat karo — sab kuch pehle bana tha"
          )}
        </T>
      </Fade>

      {/* beats 1–8 — the eight formula cards */}
      {CARDS.map((c, i) => (
        <Fade key={`${c.x}-${c.y}`} on={beat >= i + 1} delay={dl(i + 1, 0.2)}>
          <Rect
            x={c.x}
            y={c.y}
            width={W}
            height={H}
            rx={6}
            fill={CREAM}
            stroke={c.high ? GREEN : MUTED}
            strokeWidth={c.high ? 2 : 1.2}
          />
          <SvgText x={c.x + 10} y={c.y + 20} fontSize={11} fill={AMBER_DARK} fontWeight={700}>
            {c.label}
          </SvgText>
          <SvgText x={c.x + 10} y={c.y + 44} fontSize={10.5} fill={INK}>
            {c.l1}
          </SvgText>
          <SvgText x={c.x + 10} y={c.y + 62} fontSize={10.5} fill={INK}>
            {c.l2}
          </SvgText>
        </Fade>
      ))}

      {/* beat 9 — land (high, RED): the counting backbone */}
      <Fade on={beat >= 9} delay={dl(9, 0.3)}>
        <Rect x={140} y={310} width={800} height={38} rx={10} fill={CREAM} stroke={RED} strokeWidth={1.8} />
        <SvgText x={540} y={334} fontSize={13} fill={RED} textAnchor="middle" fontWeight={700}>
          {"orbitals/shell = n²,  max e⁻/shell = 2n²,  (n+l) rule sets filling order"}
        </SvgText>
      </Fade>
    </Scene>
  );
}
