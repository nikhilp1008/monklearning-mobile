/**
 * C11 Ch07 · Section 11 — "Pitfalls & pro-tips: signs, exception sweep, and the ceiling check"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_CHEMISTRY.md.
 * Closes Subtopic 1 (secs 1-11).
 *
 * Beats (en [0, 7.68, 23.13, 36.95, 50.86, 62.12, 73.13, 84.48]):
 *  0 heading: where marks quietly disappear
 *  1 pitfall 1 (red, biggest leak): sign slips in charge-balance
 *  2 pitfall 2: forgetting O/H exceptions (H₂O₂, NaH)
 *  3 pitfall 3: fractional O.N. read as real (+2.5 example)
 *  4 pitfall 4: confusing agent with what happens to it
 *  5 heading: PRO-TIP — derive, don't memorise, but sweep first
 *  6 3-second exception sweep: O−O · M−H · O−F links
 *  7 red-margin: ceiling check — busts limit ⇒ missed peroxide, go to structure
 *  (everything stays)
 *
 * Layout plan (Anek sans bl−0.78s..+0.31s; longer language counts). Pitfall row unit:
 * badge(cx=90) + line1 (sans18 700, x125) + line2 (sans14 muted, x125, bl=row+24). Pitch 58.
 * Row 1 starts at bl140 — clear of the beat-0 heading (bl100) so they never read as one line.
 *  b1 | R1 badge(90,135) line1 bl140 line2 bl164 (red)
 *  b2 | R2 badge(90,193) line1 bl198 line2 bl222
 *  b3 | R3 badge(90,251) line1 bl256 line2 bl280
 *  b4 | R4 badge(90,309) line1 bl314 line2 bl338
 *  b5 | heading (sans19 800 amber) x64 bl372
 *  b6 | sweep line (sans16) x540 bl406
 *  b7 | margin bar x64 y432..472, text (script17 red) x80 bl454
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

export default function C11Ch07Sec11({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={26} fill={RED} script>
          {t("sweep first, compute second, sanity-check third", "pehle sweep, phir compute, phir sanity-check")}
        </T>
      </Fade>

      {/* ===== beat 0 — heading ===== */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={100} size={18} fill={INK} weight={700}>
          {t("where marks quietly disappear", "marks chupke se kahan gayab hote hain")}
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
        line1={t("sign slips in charge-balance", "charge-balance mein sign slip")}
        line2={t("the single biggest source of lost marks — slow down", "sabse bada marks-loss — arithmetic dheere karo")}
      />
      <Pitfall
        on={beat >= 2}
        d1={dl(2, 0.3)}
        d2={dl(2, 1.4)}
        cy={198}
        n="2"
        line1={t("forgetting O / H exceptions", "O / H exceptions bhool jaana")}
        line2={"H₂O₂: O ≠ −2   ·   NaH: H ≠ +1"}
      />
      <Pitfall
        on={beat >= 3}
        d1={dl(3, 0.3)}
        d2={dl(3, 1.4)}
        cy={256}
        n="3"
        line1={t("fractional O.N. read as real", "fractional O.N. ko real samajhna")}
        line2={"+2.5 in S₄O₆²⁻ = average, not a charge"}
      />
      <Pitfall
        on={beat >= 4}
        d1={dl(4, 0.3)}
        d2={dl(4, 1.4)}
        cy={314}
        n="4"
        line1={t("confusing agent ↔ what happens to it", "agent ↔ jo usko hota hai — confuse karna")}
        line2={t("oxidising agent = itself REDUCED", "oxidising agent = khud REDUCED")}
      />

      {/* ===== beat 5 — pro-tip heading ===== */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={64} y={372} size={19} fill={AMBER_DARK} weight={800} anchor="start">
          {t("PRO-TIP: derive, don't memorise — but sweep first", "PRO-TIP: derive karo, ratta mat maaro — pehle sweep")}
        </T>
      </Fade>

      {/* ===== beat 6 — exception sweep ===== */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={406} size={16} fill={INK}>
          {t("3-second exception sweep:  O−O  ·  M−H  ·  O−F links", "3-second exception sweep:  O−O  ·  M−H  ·  O−F links")}
        </T>
      </Fade>

      {/* ===== beat 7 — ceiling check ===== */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 64 432 L 64 472" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.7)}>
        <T x={80} y={454} size={17} fill={RED} script anchor="start">
          {t("busts the ceiling? → you missed a peroxide — go to the structure", "ceiling todta hai? → peroxide miss hui — structure pe jao")}
        </T>
      </Fade>
    </Scene>
  );
}
