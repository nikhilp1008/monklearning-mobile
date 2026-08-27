/**
 * C11 Ch07 · Section 14 — "The oxidation-number method: five steps"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (en [0, 8.79, 21.42, 38.31, 49.24, 62.38, 70.74, 78.42]):
 *  0 heading: balance by tracking O.N. change
 *  1 step 1: assign O.N. to every atom, ID what changes
 *  2 step 2: find increase/decrease in O.N., per atom → per molecule
 *  3 step 3 (red, core move): make total increase = total decrease
 *  4 insight (no badge): = electron-balance principle in disguise
 *  5 step 4: balance remaining atoms by inspection, leave H/O for last
 *  6 step 5: balance O and H via medium rules, verify charge
 *  7 red-margin closer: charge check = independent proof
 *  (everything stays)
 *
 * Layout plan (Anek sans bl−0.78s..+0.31s; longer language counts). Row unit:
 * badge(cx=90) + line1 (sans18 700, x125) + line2 (sans14 muted, x125, bl=row+24).
 *  b1 | R1 badge(90,135) line1 bl140 line2 bl164
 *  b2 | R2 badge(90,193) line1 bl198 line2 bl222
 *  b3 | R3 badge(90,251) line1 bl256 line2 bl280 (red)
 *  b4 | insight line3 (sans13) x125 bl312
 *  b5 | R4 badge(90,347) line1 bl352 line2 bl376
 *  b6 | R5 badge(90,409) line1 bl414 line2 bl438
 *  b7 | margin bar x64 y460..500, text (sans17 red) x80 bl482
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

export default function C11Ch07Sec14({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("increase = electrons lost, decrease = electrons gained", "increase = electrons lost, decrease = electrons gained")}
        </T>
      </Fade>

      {/* ===== beat 0 — heading ===== */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={100} size={18} fill={INK} weight={700}>
          {t("balance by tracking O.N. change", "O.N. change track karke balance karo")}
        </T>
      </Fade>

      {/* ===== steps 1-3 ===== */}
      <Row
        on={beat >= 1}
        d1={dl(1, 0.3)}
        d2={dl(1, 1.4)}
        cy={140}
        n="1"
        line1={t("assign O.N. to every atom, ID what changes", "har atom ko O.N. do, jo change hota hai identify karo")}
        line2={t("can't balance electrons you haven't located", "un electrons ko balance nahi kar sakte jo locate nahi kiye")}
      />
      <Row
        on={beat >= 2}
        d1={dl(2, 0.3)}
        d2={dl(2, 1.4)}
        cy={198}
        n="2"
        line1={t("find the increase / decrease in O.N.", "O.N. ka increase / decrease nikalo")}
        line2={t("per atom → per molecule (watch the subscripts!)", "per atom → per molecule (subscripts dekho!)")}
      />
      <Row
        on={beat >= 3}
        d1={dl(3, 0.3)}
        d2={dl(3, 1.4)}
        cy={256}
        n="3"
        color={RED}
        line1={t("make total increase = total decrease", "total increase = total decrease banao")}
        line2={t("multiply oxidant & reductant by suitable integers", "oxidant aur reductant ko suitable integers se multiply karo")}
      />
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={125} y={312} size={13} fill={MUTED} anchor="start">
          {t("(= the electron-balance principle in disguise: ↑ = lost, ↓ = gained)", "(= electron-balance principle ka disguise: ↑ = lost, ↓ = gained)")}
        </T>
      </Fade>

      {/* ===== steps 4-5 ===== */}
      <Row
        on={beat >= 5}
        d1={dl(5, 0.3)}
        d2={dl(5, 1.4)}
        cy={352}
        n="4"
        line1={t("balance remaining atoms by inspection", "baaki atoms ko inspection se balance karo")}
        line2={t("leave H and O for LAST", "H aur O ko LAST ke liye chodo")}
      />
      <Row
        on={beat >= 6}
        d1={dl(6, 0.3)}
        d2={dl(6, 1.4)}
        cy={414}
        n="5"
        line1={t("balance O and H using medium rules", "O aur H ko medium rules se balance karo")}
        line2={t("then verify the total charge", "phir total charge verify karo")}
      />

      {/* ===== beat 7 — final independent check ===== */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 64 460 L 64 500" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.7)}>
        <T x={80} y={482} size={17} fill={RED} weight={700} anchor="start">
          {t("charge check = independent proof your e⁻ bookkeeping was correct", "charge check = proof ki e⁻ bookkeeping sahi thi")}
        </T>
      </Fade>
    </Scene>
  );
}
