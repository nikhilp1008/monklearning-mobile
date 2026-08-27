/**
 * C11 Ch07 · Section 15 — "The half-reaction method, the basic-medium shortcut, and back to molecular"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (en [0, 6.57, 22.95, 38.31, 50.01, 60.33, 66.05, 89.43, 108.37]):
 *  0 heading: ion-electron method — six steps (erases at beat5)
 *  1 R1: write skeletal ionic, split into ox/red halves (steps 1-2)
 *  2 R2: balance atoms (not O,H); O via H₂O, H via H⁺/OH⁻ (steps 3-4)
 *  3 R3: balance charge, e⁻ on more-positive side = n-factor (step5)
 *  4 R4 (red): multiply to match e⁻, add, cancel, final check (step6)
 *  5 heading: the basic-medium shortcut (memorise this)
 *  6 shortcut 3-line: balance as ACIDIC → add OH⁻ per H⁺ → H⁺+OH⁻→H₂O, cancel surplus
 *  7 back to molecular: re-attach spectators, same numbers, both sides
 *  8 red-margin worked example: H₂S+2Fe³⁺ ionic → H₂S+2FeCl₃ molecular
 *
 * Layout plan (Anek sans bl−0.78s..+0.31s; longer language counts). Row unit:
 * badge(cx=90) + line1 (sans18 700, x125) + line2 (sans14 muted, x125, bl=row+24).
 *  b1 | R1 badge(90,135) line1 bl140 line2 bl164
 *  b2 | R2 badge(90,193) line1 bl198 line2 bl222
 *  b3 | R3 badge(90,251) line1 bl256 line2 bl280
 *  b4 | R4 badge(90,309) line1 bl314 line2 bl338 (red)
 *  b5 | heading (sans18 700) x540 bl106
 *  b6 | 3 lines (sans17) x540 bl140/174/208
 *  b7 | line (sans16) x540 bl246
 *  b8 | margin bar x64 y270..340, 2 lines (sans16) x80 bl294/328
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

export default function C11Ch07Sec15({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("acid-balance it, then patch for base — always", "acid mein balance karo, phir base ke liye patch karo")}
        </T>
      </Fade>

      {/* ===== beat 0 — heading (erases at beat 5) ===== */}
      <Fade on={beat >= 0 && beat < 5} delay={dl(0, 0.3)}>
        <T x={540} y={100} size={18} fill={INK} weight={700}>
          {t("ion-electron method — six steps", "ion-electron method — che steps")}
        </T>
      </Fade>

      {/* ===== steps 1-6 as 4 rows (erase at beat 5) ===== */}
      <Row
        on={beat >= 1 && beat < 5}
        d1={dl(1, 0.3)}
        d2={dl(1, 1.4)}
        cy={140}
        n="1-2"
        line1={t("write skeletal ionic, split into halves", "skeletal ionic likho, halves mein split karo")}
        line2={t("drop spectators · oxidation half + reduction half", "spectators drop · oxidation half + reduction half")}
      />
      <Row
        on={beat >= 2 && beat < 5}
        d1={dl(2, 0.3)}
        d2={dl(2, 1.4)}
        cy={198}
        n="3-4"
        line1={t("balance atoms (not O, H)", "atoms balance karo (O, H chodke)")}
        line2={"O → H₂O   ·   H → H⁺ (acid) or OH⁻ (base)"}
      />
      <Row
        on={beat >= 3 && beat < 5}
        d1={dl(3, 0.3)}
        d2={dl(3, 1.4)}
        cy={256}
        n="5"
        line1={t("balance charge with e⁻", "e⁻ se charge balance karo")}
        line2={t("add e⁻ to the more-positive side = the n-factor", "more-positive side pe e⁻ add karo = n-factor")}
      />
      <Row
        on={beat >= 4 && beat < 5}
        d1={dl(4, 0.3)}
        d2={dl(4, 1.4)}
        cy={314}
        n="6"
        color={RED}
        line1={t("multiply, add, cancel e⁻", "multiply karo, add karo, e⁻ cancel karo")}
        line2={t("match e⁻ counts, then final atom + charge check", "e⁻ counts match karo, phir final atom + charge check")}
      />

      {/* ===== beat 5 — shortcut heading (stays) ===== */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={106} size={18} fill={INK} weight={700}>
          {t("the basic-medium shortcut (memorise this)", "basic-medium shortcut (yaad rakho)")}
        </T>
      </Fade>

      {/* ===== beat 6 — the shortcut, 3 lines ===== */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={140} size={17} fill={INK}>
          {t("balance the whole thing as if ACIDIC (using H⁺)", "poori cheez ACIDIC maan ke balance karo (H⁺ se)")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={540} y={174} size={17} fill={INK}>
          {t("then add 1 OH⁻ to BOTH sides for every H⁺", "phir har H⁺ ke liye dono side 1 OH⁻ add karo")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.7)}>
        <T x={540} y={208} size={17} fill={INK}>
          H⁺ + OH⁻ → H₂O   —   {t("cancel surplus waters", "surplus waters cancel karo")}
        </T>
      </Fade>

      {/* ===== beat 7 — back to molecular ===== */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={246} size={16} fill={INK}>
          {t("back to molecular: re-attach spectators, same numbers, both sides", "molecular pe wapas: spectators same numbers mein dono side lagao")}
        </T>
      </Fade>

      {/* ===== beat 8 — worked example ===== */}
      <Draw on={beat >= 8} delay={dl(8, 0.2)} d="M 64 270 L 64 340" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 8} delay={dl(8, 0.7)}>
        <T x={80} y={294} size={16} fill={RED} anchor="start">
          H₂S + 2Fe³⁺ → 2H⁺ + S + 2Fe²⁺   ({t("ionic", "ionic")})
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 1.5)}>
        <T x={80} y={328} size={16} fill={RED} anchor="start">
          H₂S + 2FeCl₃ → 2HCl + S + 2FeCl₂   ({t("molecular", "molecular")})
        </T>
      </Fade>
    </Scene>
  );
}
