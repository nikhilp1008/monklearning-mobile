/**
 * C11 Ch07 · Section 34 — "Formal definitions: the four types, comproportionation & intramolecular redox"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (en [0, 5.03, 15.02, 28.42, 41.13, 55.64, 70.23, 84.74]):
 *  0 heading: the four types, defined
 *  1 combination redox: A+B→AB, ≥1 O.N. change — C+O₂→CO₂
 *  2 decomposition redox: AB→A+B — electrolysis of water
 *  3 displacement redox: A+BC→AC+B; sub-types metal/H/halogen
 *  4 disproportionation: 1 element, 1 O.N., ox+red at once — 2H₂O₂→2H₂O+O₂
 *  5 red comproportionation (reverse!): 2 states converge — 2H₂S+SO₂→3S+2H₂O
 *  6 intramolecular redox: 2 DIFFERENT elements change oppositely
 *  7 closer: classification is qualitative — no units
 *  (everything stays)
 *
 * Layout plan (Anek sans bl−0.78s..+0.31s; longer language counts). Row unit:
 * badge(cx=90) + line1 (sans17 700, x125) + line2 (sans13 muted, x125, bl=row+24). Pitch 50.
 *  b1 R1 badge(90,129) line1 bl134 line2 bl158
 *  b2 R2 badge(90,179) line1 bl184 line2 bl208
 *  b3 R3 badge(90,229) line1 bl234 line2 bl258
 *  b4 R4 badge(90,279) line1 bl284 line2 bl308
 *  b5 R5 badge(90,329) line1 bl334 line2 bl358 (red)
 *  b6 R6 badge(90,379) line1 bl384 line2 bl408
 *  b7 closer (sans14 muted) x540 bl440
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
        d={`M ${cx - 16} ${cy} a 16 16 0 1 0 32 0 a 16 16 0 1 0 -32 0`}
        stroke={color}
        sw={2}
        dur={0.5}
      />
      <Fade on={on} delay={delay + 0.15}>
        <T x={cx} y={cy + 5} size={14} fill={color} weight={800}>
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
        <T x={125} y={cy} size={17} fill={color} weight={700} anchor="start">
          {line1}
        </T>
      </Fade>
      <Fade on={on} delay={d2}>
        <T x={125} y={cy + 24} size={13} fill={MUTED} anchor="start">
          {line2}
        </T>
      </Fade>
    </>
  );
}

export default function C11Ch07Sec34({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("comproportionation is disproportionation in reverse", "comproportionation, disproportionation ka ulta hai")}
        </T>
      </Fade>

      {/* ===== beat 0 — heading ===== */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={100} size={17} fill={INK} weight={700}>
          {t("the four types, defined", "char types, defined")}
        </T>
      </Fade>

      {/* ===== the six rows ===== */}
      <Row
        on={beat >= 1}
        d1={dl(1, 0.3)}
        d2={dl(1, 1.2)}
        cy={134}
        n="1"
        line1={t("combination redox: A + B → AB", "combination redox: A + B → AB")}
        line2={"≥1 O.N. change — e.g. C + O₂ → CO₂"}
      />
      <Row
        on={beat >= 2}
        d1={dl(2, 0.3)}
        d2={dl(2, 1.2)}
        cy={184}
        n="2"
        line1={t("decomposition redox: AB → A + B", "decomposition redox: AB → A + B")}
        line2={t("reverse of combination — e.g. electrolysis of water", "combination ka reverse — e.g. water ka electrolysis")}
      />
      <Row
        on={beat >= 3}
        d1={dl(3, 0.3)}
        d2={dl(3, 1.2)}
        cy={234}
        n="3"
        line1={t("displacement redox: A + BC → AC + B", "displacement redox: A + BC → AC + B")}
        line2={t("sub-types: metal · hydrogen · halogen displacement", "sub-types: metal · hydrogen · halogen displacement")}
      />
      <Row
        on={beat >= 4}
        d1={dl(4, 0.3)}
        d2={dl(4, 1.2)}
        cy={284}
        n="4"
        line1={t("disproportionation", "disproportionation")}
        line2={"1 element, 1 O.N., ox+red at once — e.g. 2H₂O₂ → 2H₂O + O₂"}
      />
      <Row
        on={beat >= 5}
        d1={dl(5, 0.3)}
        d2={dl(5, 1.2)}
        cy={334}
        n="5"
        color={RED}
        line1={t("comproportionation (the reverse!)", "comproportionation (bilkul ulta!)")}
        line2={"2 O.N. states converge — e.g. 2H₂S + SO₂ → 3S + 2H₂O"}
      />
      <Row
        on={beat >= 6}
        d1={dl(6, 0.3)}
        d2={dl(6, 1.2)}
        cy={384}
        n="6"
        line1={t("intramolecular redox", "intramolecular redox")}
        line2={t("2 DIFFERENT elements change oppositely — ≠ disproportionation", "2 ALAG elements opposite change karte — ≠ disproportionation")}
      />

      {/* ===== beat 7 — closer ===== */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={440} size={14} fill={MUTED}>
          {t("classification itself is qualitative — it carries no units", "classification khud qualitative hai — koi unit nahi")}
        </T>
      </Fade>
    </Scene>
  );
}
