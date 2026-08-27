/**
 * C11 Ch07 · Section 22 — "Definitions & limiting conditions: electrode potential, cell notation, spontaneity"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (en [0, 6.14, 28.25, 41.3, 45.74, 64.26, 83.03, 99.84]):
 *  0 heading: key definitions for cells
 *  1 electrode potential E: tendency to gain e⁻ (be reduced); E° at 1M,1bar,298K, IUPAC reduction
 *  2 cell notation: anode | anode soln ‖ cathode soln | cathode (oxidation left)
 *  3 heading: three limiting conditions
 *  4 (1, red): sharp endpoint + right medium — KMnO₄ in dilute H₂SO₄, never HCl
 *  5 (2): spontaneous only if E°cell > 0 (ΔG < 0); negative EMF = reverses
 *  6 (3): standard values assume 1M/1bar/298K; real EMF shifts (Nernst)
 *  7 closer: e⁻ flow toward whoever craves them most — salt bridge keeps circuit alive
 *  (everything stays)
 *
 * Layout plan (Anek sans bl−0.78s..+0.31s; longer language counts):
 *  b1 | def 2-line (sans18/15)  | T mid | x540 bl134/168
 *  b2 | notation (sans17)       | T mid | x540 bl202
 *  b3 | heading (sans18 700)    | T mid | x540 bl236
 *  b4 | R1 badge(90,271) line1 bl276 line2 bl300 (red)
 *  b5 | R2 badge(90,329) line1 bl334 line2 bl358
 *  b6 | R3 badge(90,387) line1 bl392 line2 bl416
 *  b7 | closer (sans16 green)   | T mid | x540 bl452
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  INK,
  MUTED,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

function Badge({ on, delay, cx, cy, n, color = INK }: { on: boolean; delay: number; cx: number; cy: number; n: string; color?: string }) {
  return (
    <>
      <Draw
        on={on}
        delay={delay}
        d={`M ${cx - 17} ${cy} a 17 17 0 1 0 34 0 a 17 17 0 1 0 -34 0`}
        stroke={color}
        sw={2}
        dur={0.5}
      />
      <Fade on={on} delay={delay + 0.15}>
        <T x={cx} y={cy + 6} size={15} fill={color} weight={800}>
          {n}
        </T>
      </Fade>
    </>
  );
}

function Row({
  on,
  d1,
  d2,
  cy,
  n,
  line1,
  line2,
  color = INK,
}: {
  on: boolean;
  d1: number;
  d2: number;
  cy: number;
  n: string;
  line1: string;
  line2: string;
  color?: string;
}) {
  return (
    <>
      <Badge on={on} delay={d1} cx={90} cy={cy - 5} n={n} color={color} />
      <Fade on={on} delay={d1 + 0.2}>
        <T x={125} y={cy} size={18} fill={color} weight={700} anchor="start">
          {line1}
        </T>
      </Fade>
      <Fade on={on} delay={d2}>
        <T x={125} y={cy + 24} size={14} fill={MUTED} anchor="start">
          {line2}
        </T>
      </Fade>
    </>
  );
}

export default function C11Ch07Sec22({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={24} fill={RED} script>
          {t("electrons flow toward whoever craves them most", "electrons udhar bahte hain jise unki sabse zyada zaroorat")}
        </T>
      </Fade>

      {/* ===== beat 0 — heading ===== */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={100} size={18} fill={INK} weight={700}>
          {t("key definitions for cells", "cells ke liye key definitions")}
        </T>
      </Fade>

      {/* ===== beat 1 — electrode potential ===== */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={134} size={18} fill={INK}>
          {t("E: a half-cell's tendency to gain e⁻ (be reduced)", "E: half-cell ki tendency e⁻ gain karne ki (reduce hona)")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <T x={540} y={168} size={15} fill={MUTED}>
          {t("E° at 1 M, 1 bar, 298 K — IUPAC: always a reduction potential", "E° pe 1 M, 1 bar, 298 K — IUPAC: hamesha reduction potential")}
        </T>
      </Fade>

      {/* ===== beat 2 — cell notation ===== */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={202} size={17} fill={INK}>
          anode | anode soln ‖ cathode soln | cathode   ({t("oxidation on the left", "oxidation left pe")})
        </T>
      </Fade>

      {/* ===== beat 3 — heading ===== */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={236} size={18} fill={INK} weight={700}>
          {t("three limiting conditions", "teen limiting conditions")}
        </T>
      </Fade>

      {/* ===== beats 4-6 — the three conditions ===== */}
      <Row
        on={beat >= 4}
        d1={dl(4, 0.3)}
        d2={dl(4, 1.4)}
        cy={276}
        n="1"
        color={RED}
        line1={t("needs a sharp endpoint + right medium", "sharp endpoint + sahi medium chahiye")}
        line2={"KMnO₄: dilute H₂SO₄ only — never HCl (it oxidises that too!)"}
      />
      <Row
        on={beat >= 5}
        d1={dl(5, 0.3)}
        d2={dl(5, 1.4)}
        cy={334}
        n="2"
        line1={t("spontaneous only if E°cell > 0", "spontaneous sirf jab E°cell > 0")}
        line2={t("same as ΔG < 0 — negative EMF means it reverses", "matlab ΔG < 0 — negative EMF ka matlab ulta chalta hai")}
      />
      <Row
        on={beat >= 6}
        d1={dl(6, 0.3)}
        d2={dl(6, 1.4)}
        cy={392}
        n="3"
        line1={t("standard values assume 1 M, 1 bar, 298 K", "standard values 1 M, 1 bar, 298 K maanti hain")}
        line2={t("change the concentration → real EMF shifts (Nernst)", "concentration badlo → real EMF shift (Nernst)")}
      />

      {/* ===== beat 7 — closer ===== */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={452} size={16} fill={GREEN} weight={700}>
          {t("e⁻ flow toward whoever craves them most — salt bridge keeps the circuit alive", "e⁻ udhar bahta hai jise sabse zyada zaroorat — salt bridge circuit zinda rakhta hai")}
        </T>
      </Fade>
    </Scene>
  );
}
