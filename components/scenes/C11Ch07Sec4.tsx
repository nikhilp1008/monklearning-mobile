/**
 * C11 Ch07 · Section 4 — "The six assignment rules — and why each holds"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (en [0, 9.64, 25.86, 40.87, 52.82, 71.59, 86.78, 95.4]):
 *  0 intro line (erases at beat1)
 *  1 Rule 1 — free element → 0
 *  2 Rule 2 — monatomic ion → its own charge
 *  3 Rule 3 — fluorine ALWAYS −1
 *  4 Rule 4 — oxygen usually −2 (peroxide/superoxide/OF₂ exceptions)
 *  5 Rule 5 — hydrogen usually +1 (metal hydride exception)
 *  6 Rule 6 — master closing rule Σ(O.N.) = net charge, red-margin, larger
 *  7 verdict: solves for ANY one unknown (green stamp)
 *  (rules 1-6 all stay — the ladder IS the notes photo)
 *
 * Layout plan (Anek sans bl−0.78s..+0.31s; longer language counts). Uniform row unit:
 * badge(cx=90) + line1 (sans18 700, x125) + line2 (sans14 muted, x125, bl = row+24). Pitch 58.
 *  b1 | R1 badge(90,105) line1 bl110 line2 bl134
 *  b2 | R2 badge(90,163) line1 bl168 line2 bl192
 *  b3 | R3 badge(90,221) line1 bl226 line2 bl250
 *  b4 | R4 badge(90,279) line1 bl284 line2 bl308
 *  b5 | R5 badge(90,337) line1 bl342 line2 bl366
 *  b6 | R6 margin bar x64 y388..438; badge(90,401) line1(sans22 800 red) bl406; line2(sans15 amber) bl434
 *  b7 | verdict stamp box x64..660 y460..500, text bl485 (green)
 */

import React from "react";
import { Rect } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

function Badge({ on, delay, cx, cy, n }: { on: boolean; delay: number; cx: number; cy: number; n: string }) {
  return (
    <>
      <Draw
        on={on}
        delay={delay}
        d={`M ${cx - 17} ${cy} a 17 17 0 1 0 34 0 a 17 17 0 1 0 -34 0`}
        stroke={INK}
        sw={2}
        dur={0.5}
      />
      <Fade on={on} delay={delay + 0.15}>
        <T x={cx} y={cy + 6} size={15} fill={INK} weight={800}>
          {n}
        </T>
      </Fade>
    </>
  );
}

function Rule({
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
      <Badge on={on} delay={d1} cx={90} cy={cy - 5} n={n} />
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

export default function C11Ch07Sec4({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={27} fill={RED} script>
          {t("six rules — each with a reason", "che rules — har ek ka apna reason")}
        </T>
      </Fade>

      {/* ===== beat 0 — intro (erases at beat 1) ===== */}
      <Fade on={beat >= 0 && beat < 1} delay={dl(0, 0.3)}>
        <T x={540} y={108} size={17} fill={MUTED} script>
          {t("don't memorise blindly — the reason protects you", "ratta mat maaro — reason hi bachata hai")}
        </T>
      </Fade>

      {/* ===== rules 1-6 (stay) ===== */}
      <Rule
        on={beat >= 1}
        d1={dl(1, 0.3)}
        d2={dl(1, 1.4)}
        cy={110}
        n="1"
        line1={t("free element → 0", "free element → 0")}
        line2={t("S₈ · P₄ · O₃ — all zero", "S₈ · P₄ · O₃ — sab zero")}
      />
      <Rule
        on={beat >= 2}
        d1={dl(2, 0.3)}
        d2={dl(2, 1.4)}
        cy={168}
        n="2"
        line1={t("monatomic ion → its own charge", "monatomic ion → apna hi charge")}
        line2={"Na⁺ = +1   ·   O²⁻ = −2"}
      />
      <Rule
        on={beat >= 3}
        d1={dl(3, 0.3)}
        d2={dl(3, 1.4)}
        cy={226}
        n="3"
        color={RED}
        line1={t("fluorine → ALWAYS −1 in compounds", "fluorine → compounds mein ALWAYS −1")}
        line2={t("most electronegative — wins every pair", "sabse electronegative — har pair jeet leta hai")}
      />
      <Rule
        on={beat >= 4}
        d1={dl(4, 0.3)}
        d2={dl(4, 1.4)}
        cy={284}
        n="4"
        line1={t("oxygen → usually −2", "oxygen → usually −2")}
        line2={"peroxide −1  ·  superoxide −½  ·  OF₂ +2"}
      />
      <Rule
        on={beat >= 5}
        d1={dl(5, 0.3)}
        d2={dl(5, 1.4)}
        cy={342}
        n="5"
        line1={t("hydrogen → usually +1", "hydrogen → usually +1")}
        line2={t("metal hydrides (NaH, CaH₂) → −1", "metal hydrides (NaH, CaH₂) → −1")}
      />

      {/* rule 6 — master closing rule, red-margin, larger */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 64 388 L 64 438" stroke={RED} sw={3.6} dur={0.5} />
      <Badge on={beat >= 6} delay={dl(6, 0.4)} cx={90} cy={396} n="6" />
      <Fade on={beat >= 6} delay={dl(6, 0.7)}>
        <T x={125} y={406} size={22} fill={RED} weight={800} anchor="start">
          Σ (O.N.) = net charge
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={125} y={434} size={15} fill={AMBER_DARK} anchor="start">
          {t("neutral molecule → 0  ·  ion → its charge", "neutral molecule → 0  ·  ion → apna charge")}
        </T>
      </Fade>

      {/* ===== beat 7 — verdict stamp ===== */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Rect x={64} y={462} width={620} height={44} rx={6} fill="none" stroke={GREEN} strokeWidth={2.4} />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.9)}>
        <T x={374} y={489} size={18} fill={GREEN} weight={800}>
          {t("→ solves for ANY one unknown O.N.", "→ kisi bhi ek unknown O.N. ko solve karta hai")}
        </T>
      </Fade>
    </Scene>
  );
}
