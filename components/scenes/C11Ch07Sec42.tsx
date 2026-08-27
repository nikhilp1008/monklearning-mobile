/**
 * C11 Ch07 · Section 42 — "Pitfalls & pro-tips: classify fast, confirm with O.N."
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_CHEMISTRY.md.
 * Closes Subtopic 4 (secs 32-42).
 *
 * Beats (en [0, 7.42, 25.69, 39.51, 52.74, 65.45, 72.19, 86.27]):
 *  0 heading: the classification traps
 *  1 pitfall 1 (red): assuming all combinations/decompositions are redox
 *  2 pitfall 2: displacement direction backwards
 *  3 pitfall 3: calling a 2-element reaction disproportionation (should be intramolecular)
 *  4 pitfall 4: Stock-notation slips
 *  5 heading: PRO-TIP — count first, confirm with O.N.
 *  6 tip: glance at count (2→1 combination, 1→many decomposition, swap=displacement)
 *  7 red-margin: disproportionation fingerprint — 1 element in 3 different O.N. states
 *  (everything stays)
 *
 * Layout plan — identical row geometry to Sec 11/20/31 (already verified clean):
 *  b1 R1 badge(90,135) line1 bl140 line2 bl164 (red)
 *  b2 R2 badge(90,193) line1 bl198 line2 bl222
 *  b3 R3 badge(90,251) line1 bl256 line2 bl280
 *  b4 R4 badge(90,309) line1 bl314 line2 bl338
 *  b5 heading (sans19 800 amber) x64 bl372
 *  b6 tip line (sans16) x540 bl406
 *  b7 margin bar x64 y432..472, text (script16 red) x80 bl450/476 (2 lines)
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
  AMBER_DARK,
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

function Pitfall({
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

export default function C11Ch07Sec42({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={24} fill={RED} script>
          {t("one element, three O.N. states — the disproportionation fingerprint", "ek element, teen O.N. states — disproportionation ka fingerprint")}
        </T>
      </Fade>

      {/* ===== beat 0 — heading ===== */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={100} size={18} fill={INK} weight={700}>
          {t("the classification traps", "classification ke traps")}
        </T>
      </Fade>

      {/* ===== pitfalls 1-4 ===== */}
      <Pitfall
        on={beat >= 1}
        d1={dl(1, 0.3)}
        d2={dl(1, 1.4)}
        cy={140}
        n="1"
        color={RED}
        line1={t("assuming all combinations/decompositions are redox", "sab combinations/decompositions ko redox maan lena")}
        line2={"CaO+CO₂ and CaCO₃→CaO+CO₂ — no O.N. change"}
      />
      <Pitfall
        on={beat >= 2}
        d1={dl(2, 0.3)}
        d2={dl(2, 1.4)}
        cy={198}
        n="2"
        line1={t("displacement direction backwards", "displacement direction ulti")}
        line2={t("only more-reactive displaces less-reactive — Cu never displaces Zn", "sirf zyada-reactive kam-reactive ko displace — Cu kabhi Zn ko nahi")}
      />
      <Pitfall
        on={beat >= 3}
        d1={dl(3, 0.3)}
        d2={dl(3, 1.4)}
        cy={256}
        n="3"
        line1={t("calling a 2-element reaction 'disproportionation'", "2-element reaction ko 'disproportionation' kehna")}
        line2={t("2 different elements opposite in 1 compound = intramolecular redox", "2 alag elements opposite ek compound mein = intramolecular redox")}
      />
      <Pitfall
        on={beat >= 4}
        d1={dl(4, 0.3)}
        d2={dl(4, 1.4)}
        cy={314}
        n="4"
        line1={t("Stock-notation slips", "Stock-notation slips")}
        line2={t("(III), no + sign — iron(III), never iron(+3) or iron(3)", "(III), + sign nahi — iron(III), kabhi iron(+3) ya iron(3) nahi")}
      />

      {/* ===== beat 5 — pro-tip heading ===== */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={64} y={372} size={19} fill={AMBER_DARK} weight={800} anchor="start">
          {t("PRO-TIP: count first, confirm with O.N.", "PRO-TIP: pehle count, phir O.N. se confirm")}
        </T>
      </Fade>

      {/* ===== beat 6 — the count trick ===== */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={406} size={16} fill={INK}>
          {t(
            "2→1 combination · 1→many decomposition · swap = displacement — then confirm with O.N.",
            "2→1 combination · 1→many decomposition · swap = displacement — phir O.N. se confirm"
          )}
        </T>
      </Fade>

      {/* ===== beat 7 — the fingerprint ===== */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 64 432 L 64 472" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.7)}>
        <T x={80} y={450} size={16} fill={RED} script anchor="start">
          {t("disproportionation fingerprint: 1 element in THREE O.N. states", "disproportionation fingerprint: 1 element TEEN O.N. states mein")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.3)}>
        <T x={80} y={476} size={16} fill={RED} script anchor="start">
          {t("across the equation — its start, plus a higher AND a lower", "poori equation mein — starting, ek higher AND ek lower")}
        </T>
      </Fade>
    </Scene>
  );
}
