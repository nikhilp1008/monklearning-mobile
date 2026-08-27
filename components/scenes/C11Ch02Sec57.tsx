/**
 * C11 Ch02 · Section 57 — "Chapter cheat sheet: quick recall"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md. `section_type: concept` — final chapter
 * close, subtopic "Chapter Close: Formula Recap & Cheat Sheet". 10 beats.
 *
 * Beats (en [0, 22.95, 31.75, 39.75, 50.03, 59.69, 67.93, 75.5, 85.16, 96.41]):
 *  0 anchor: the one-glance cheat sheet before the exam
 *  1 cell①: particles — e⁻/p⁺/n, who found what
 *  2 cell②: core — A=Z+N, iso-family mnemonic
 *  3 cell③: models — Thomson/Rutherford, what each fails
 *  4 cell④: light — c=νλ, E=hν, shortcut, photon massless
 *  5 cell⑤ (high): photoelectric — the one-liner
 *  6 cell⑥: Bohr scaling — the four proportionalities + series
 *  7 cell⑦: duality — 2πr=nλ, Heisenberg kills the orbit
 *  8 cell⑧: quantum — the postal address + node counts
 *  9 cell⑨ (high): (n+l) rule, anomalies, ion-stripping
 *
 * Layout plan (3×3 recap-card grid, x50..1030, y94..504):
 *  title (always)          | T mid | x540 y52 script red
 *  b0 | anchor caption      | T mid | x540 y74            [dims@b1]
 *  b1..b9 | 9 cards         | rect+T| 3 cols × 3 rows
 */

import React from "react";
import { Rect, Text as SvgText } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, T, RED, CREAM, AMBER_DARK, INK, MUTED,
  Scene,
} from '@/components/scenes/kit';

type Card = { x: number; y: number; label: string; lines: string[]; high?: boolean; noted?: boolean };

const W = 310;
const H = 116;
const COLS = [50, 385, 720];
const ROWS = [94, 236, 378];

const CARDS: Card[] = [
  {
    x: COLS[0],
    y: ROWS[0],
    label: "particles",
    lines: ["e⁻(−e, tiny), p⁺(+e), n(0, heavier)", "Thomson→ratio, Millikan→charge", "Chadwick→neutron (1932)"],
    noted: true,
  },
  {
    x: COLS[1],
    y: ROWS[0],
    label: "core",
    lines: ["A = Z + N", "toP=Proton(Z), Bar=mAss(A)", "toN=Neutron(N)"],
  },
  {
    x: COLS[2],
    y: ROWS[0],
    label: "models",
    lines: ["Thomson: fails α-scattering", "Rutherford: fails stability", "+ line spectra"],
    noted: true,
  },
  {
    x: COLS[0],
    y: ROWS[1],
    label: "light",
    lines: ["c = νλ,  E = hν = hc/λ", "shortcut 1240/λ(nm)", "photon rest mass = 0"],
  },
  {
    x: COLS[1],
    y: ROWS[1],
    label: "photoelectric",
    lines: ["below threshold: brightness", "is worthless", "frequency→speed, intensity→crowd"],
    high: true,
    noted: true,
  },
  {
    x: COLS[2],
    y: ROWS[1],
    label: "Bohr scaling",
    lines: ["r∝n²/Z, E∝Z²/n², v∝Z/n, ν̄∝Z²", "Lyman-Balmer-Paschen-", "Brackett-Pfund (UV→vis→IR)"],
  },
  {
    x: COLS[0],
    y: ROWS[2],
    label: "duality",
    lines: ["2πr = nλ → Bohr's rule", "Heisenberg: Δx·Δp ≥ h/4π", "kills the definite orbit"],
    noted: true,
  },
  {
    x: COLS[1],
    y: ROWS[2],
    label: "quantum",
    lines: ["n-city, l-street, ml-house, ms-seat", "nodes: radial n−l−1, angular l", "total n−1"],
  },
  {
    x: COLS[2],
    y: ROWS[2],
    label: "(n+l) rule",
    lines: ["4s before 3d", "Cr=3d⁵4s¹, Cu=3d¹⁰4s¹", "ions: strip highest n first"],
    high: true,
    noted: true,
  },
];

export default function C11Ch02Sec57({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={52} size={14} fill={RED} script>
          {t("chapter cheat sheet: quick recall", "chapter cheat sheet: quick recall")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} dim={beat >= 1} delay={dl(0, 0.3)}>
        <T x={540} y={74} size={11} fill={RED} script>
          {t(
            "the one-glance cheat sheet — everything fresh before the exam",
            "ek-nazar cheat sheet — exam se pehle sab kuch taaza"
          )}
        </T>
      </Fade>

      {/* beats 1–9 — the nine recap cards */}
      {CARDS.map((c, i) => (
        <Fade key={`${c.x}-${c.y}`} on={beat >= i + 1} delay={dl(i + 1, 0.2)}>
          <Rect
            x={c.x}
            y={c.y}
            width={W}
            height={H}
            rx={6}
            fill={CREAM}
            stroke={c.high ? RED : MUTED}
            strokeWidth={c.high ? 2 : 1.2}
          />
          <SvgText x={c.x + 10} y={c.y + 20} fontSize={11} fill={c.noted ? RED : AMBER_DARK} fontWeight={700}>
            {c.label}
          </SvgText>
          {c.lines.map((line, li) => (
            <SvgText key={li} x={c.x + 10} y={c.y + 42 + li * 18} fontSize={10} fill={INK}>
              {line}
            </SvgText>
          ))}
        </Fade>
      ))}
    </Scene>
  );
}
