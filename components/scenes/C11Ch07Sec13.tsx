/**
 * C11 Ch07 · Section 13 — "Limiting conditions & key definitions: medium is everything"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (en [0, 10.84, 28.5, 43.26, 66.82, 71.08, 82.69, 100.01]):
 *  0 heading: three things you must respect
 *  1 (1) medium matters: ACID→H₂O+H⁺, BASE→H₂O+OH⁻, never mix
 *  2 (2) assume ionic/aqueous — convert molecular first
 *  3 (3) red: product changes with medium — MnO₄⁻→Mn²⁺(acid,5e⁻) vs MnO₂(base,3e⁻)
 *  4 heading: definitions to carry forward
 *  5 half-reaction: oxidation (e⁻ right) / reduction (e⁻ left)
 *  6 skeletal equation / spectator ions
 *  7 n = e⁻ transferred = total O.N. change → becomes the n-factor (green, forward ref)
 *  (everything stays)
 *
 * Layout plan (Anek sans bl−0.78s..+0.31s; longer language counts). Row unit:
 * badge(cx=90) + line1 (sans18 700, x125) + line2 (sans14 muted, x125, bl=row+24).
 *  b1 | R1 badge(90,135) line1 bl140 line2 bl164
 *  b2 | R2 badge(90,193) line1 bl198 line2 bl222
 *  b3 | R3 badge(90,251) line1 bl256 line2 bl280 (red)
 *  b4 | heading (sans18 700) x540 bl316
 *  b5 | R4 badge(90,345) line1 bl350 line2 bl374
 *  b6 | R5 badge(90,403) line1 bl408 line2 bl432
 *  b7 | R6 badge(90,461) line1 bl466 line2 bl490 (green)
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

export default function C11Ch07Sec13({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={24} fill={RED} script>
          {t("medium decides the product — know it before you balance", "medium hi product decide karta hai — pehle jaano")}
        </T>
      </Fade>

      {/* ===== beat 0 — heading ===== */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={100} size={18} fill={INK} weight={700}>
          {t("three things you must respect", "teen cheezein jo respect karni hain")}
        </T>
      </Fade>

      {/* ===== beats 1-3 — the three conditions ===== */}
      <Row
        on={beat >= 1}
        d1={dl(1, 0.3)}
        d2={dl(1, 1.4)}
        cy={140}
        n="1"
        line1={t("medium matters", "medium matter karta hai")}
        line2={"ACID: H₂O + H⁺   ·   BASE: H₂O + OH⁻ — never mix"}
      />
      <Row
        on={beat >= 2}
        d1={dl(2, 0.3)}
        d2={dl(2, 1.4)}
        cy={198}
        n="2"
        line1={t("assumes ionic (aqueous) reaction", "ionic (aqueous) reaction assume karta hai")}
        line2={t("molecular equation? convert to ionic form first", "molecular equation? pehle ionic form banao")}
      />
      <Row
        on={beat >= 3}
        d1={dl(3, 0.3)}
        d2={dl(3, 1.4)}
        cy={256}
        n="3"
        color={RED}
        line1={t("the product changes with medium!", "product medium ke saath badalta hai!")}
        line2={"MnO₄⁻ → Mn²⁺ (acid, 5e⁻)   ·   → MnO₂ (base, 3e⁻)"}
      />

      {/* ===== beat 4 — definitions heading ===== */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={316} size={18} fill={INK} weight={700}>
          {t("definitions to carry forward", "definitions jo aage kaam aayengi")}
        </T>
      </Fade>

      {/* ===== beats 5-7 — definitions ===== */}
      <Row
        on={beat >= 5}
        d1={dl(5, 0.3)}
        d2={dl(5, 1.4)}
        cy={350}
        n="4"
        line1={t("half-reaction", "half-reaction")}
        line2={t("oxidation: e⁻ on the right  ·  reduction: e⁻ on the left", "oxidation: e⁻ right pe  ·  reduction: e⁻ left pe")}
      />
      <Row
        on={beat >= 6}
        d1={dl(6, 0.3)}
        d2={dl(6, 1.4)}
        cy={408}
        n="5"
        line1={t("skeletal equation  ·  spectator ions", "skeletal equation  ·  spectator ions")}
        line2={t("unbalanced sketch  ·  unchanged ions dropped, restored later", "unbalanced sketch  ·  unchanged ions drop, baad mein restore")}
      />
      <Row
        on={beat >= 7}
        d1={dl(7, 0.3)}
        d2={dl(7, 1.4)}
        cy={466}
        n="6"
        color={GREEN}
        line1={t("n = electrons transferred", "n = electrons transferred")}
        line2={t("total O.N. change per unit — becomes the n-factor later", "total O.N. change per unit — baad mein n-factor banega")}
      />
    </Scene>
  );
}
