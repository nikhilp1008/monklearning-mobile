/**
 * P12Ch04 · Section 20 — "Derivation A: Circular Motion and the Cyclotron Condition"
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * WHAT IT USED TO SHOW: three prose panels gated on beats 0/1/5/11 of a
 * 14-beat narration. Ten reveals were never used, and the only drawn strokes
 * were the title underline and two rules — no orbit, no dees, no spiral.
 *
 * WHAT THE NARRATION TEACHES: qvB supplies the centripetal force ⇒
 * r = mv/qB; the period 2πr/v then collapses to 2πm/qB with the speed gone,
 * which is the cyclotron resonance condition; a real cyclotron exploits it
 * with two dees and one fixed frequency; at the exit radius R the energy is
 * q²B²R²/2m; relativity finally breaks the synchronisation.
 *
 * BEAT MAP (14 beats, gates 0..13 — every beat used):
 *   0  title
 *   1  setup: q, m, v ⊥ B          + the orbit circle and B ⊗ field
 *   2  step 1: F = qvB, always ⊥ v + tangential v and inward F drawn on it
 *   3  qvB = mv²/r  ⇒  r = mv/qB   + the radius drawn and labelled
 *   4  reading it: m,v up · q,B down · r = p/qB  + the larger-v orbit arc
 *   5  step 2: T = 2πr/v
 *   6  substitute r → the v's cancel → T = 2πm/qB
 *   7  cyclotron resonance: one fixed frequency f = qB/2πm
 *   8  step 3: the machine — dees, gap, oscillating voltage
 *   9  THE CYCLOTRON FIGURE (dees, dashed gap, growing semicircle spiral,
 *      extraction at R, the oscillating source across the gap)
 *  10  no E inside a dee · all the acceleration is in the gap
 *  11  step 4: at the exit radius R,  v = qBR/m
 *  12  K_max = q²B²R²/2m  ⇒  K ∝ B², R²
 *  13  the relativistic ceiling → synchrotron
 *
 * Layout: col A x44..350 (orbit figure + steps 1–2) · col B x368..690
 * (period, resonance, energy) · col C x710..1044 (the machine).
 */

import React from "react";
import { Path } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  arrowD,
  INK,
  INK_LIGHT,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

const circD = (cx: number, cy: number, r: number) =>
  `M ${cx - r} ${cy} A ${r} ${r} 0 1 1 ${cx + r} ${cy} A ${r} ${r} 0 1 1 ${cx - r} ${cy}`;
const crossInD = (cx: number, cy: number, r: number) => {
  const k = r * 0.68;
  return `${circD(cx, cy, r)} M ${cx - k} ${cy - k} L ${cx + k} ${cy + k} M ${
    cx + k
  } ${cy - k} L ${cx - k} ${cy + k}`;
};

export default function P12Ch04Sec20({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ═══ beat 0 ═══ */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={44} size={25} fill={RED} script>
          {t(
            "Circular Motion & the Cyclotron Condition",
            "Circular Motion & the Cyclotron Condition"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 1.4)}
        d="M 282 58 C 460 54, 640 62, 798 57"
        stroke={RED}
        sw={2.2}
        dur={0.7}
      />

      {/* ═════════ COLUMN A — x 44..350 ═════════ */}

      {/* beat 1 — the setup + the orbit */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={44} y={98} size={13} fill={RED} anchor="start" weight={800}>
          {t("SETUP", "SETUP")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.5)} d="M 44 104 L 130 104" stroke={RED} sw={1.8} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={44} y={122} size={12.5} fill={INK} anchor="start">
          {t("charge q, mass m, speed v", "charge q, mass m, speed v")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.2)}>
        <T x={44} y={140} size={12.5} fill={INK} anchor="start" weight={800}>
          {t("v ⊥ B  (uniform field)", "v ⊥ B  (uniform field)")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.6)}>
        <T x={44} y={158} size={12.5} fill={MUTED} anchor="start">
          {t("any v ∥ B → a helix, handled separately", "any v ∥ B → a helix, handled separately")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2.1)} d={circD(190, 292, 70)} stroke={INK} sw={2.4} dur={1.1} />
      <Draw on={beat >= 1} delay={dl(1, 3.1)} d={crossInD(96, 236, 9)} stroke={AMBER_DARK} sw={1.8} dur={0.3} />
      <Draw on={beat >= 1} delay={dl(1, 3.3)} d={crossInD(284, 236, 9)} stroke={AMBER_DARK} sw={1.8} dur={0.3} />
      <Draw on={beat >= 1} delay={dl(1, 3.5)} d={crossInD(96, 348, 9)} stroke={AMBER_DARK} sw={1.8} dur={0.3} />
      <Draw on={beat >= 1} delay={dl(1, 3.7)} d={crossInD(284, 348, 9)} stroke={AMBER_DARK} sw={1.8} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 4.0)}>
        <T x={190} y={388} size={12.5} fill={AMBER_DARK} weight={800}>
          {t("B into the page  ⊗", "B into the page  ⊗")}
        </T>
      </Fade>

      {/* beat 2 — the force is centripetal */}
      <Draw on={beat >= 2} delay={dl(2, 0.2)} d={arrowD(140, 222, 246, 222)} stroke={GREEN} sw={2.4} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={254} y={218} size={13} fill={GREEN} anchor="start" weight={800}>v</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.9)} d={arrowD(190, 224, 190, 278)} stroke={RED} sw={2.4} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 1.3)}>
        <T x={200} y={258} size={13} fill={RED} anchor="start" weight={800}>F</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.7)}>
        <T x={44} y={408} size={13} fill={RED} anchor="start" weight={800}>
          {t("STEP 1 — THE FORCE IS CENTRIPETAL", "STEP 1 — THE FORCE IS CENTRIPETAL")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.2)}>
        <T x={44} y={428} size={12.5} fill={INK} anchor="start">
          {t("θ = 90° ⇒ sin θ = 1 ⇒ F = q v B", "θ = 90° ⇒ sin θ = 1 ⇒ F = q v B")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.7)}>
        <T x={44} y={446} size={12.5} fill={INK} anchor="start">
          {t("F stays ⊥ v at every instant", "F stays ⊥ v at every instant")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3.2)}>
        <T x={44} y={464} size={12.5} fill={GREEN} anchor="start" weight={800}>
          {t("fixed size + always ⊥ v ≡ centripetal", "fixed size + always ⊥ v ≡ centripetal")}
        </T>
      </Fade>

      {/* beat 3 — equate and solve */}
      <Draw on={beat >= 3} delay={dl(3, 0.2)} d="M 190 292 L 260 292" stroke={INK} sw={1.8} dur={0.4} />
      <Draw on={beat >= 3} delay={dl(3, 0.5)} d={circD(190, 292, 3)} stroke={INK} sw={2} dur={0.2} fill={INK} />
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={224} y={286} size={13} fill={INK} weight={800}>r</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.2)}>
        <T x={44} y={488} size={13} fill={INK} anchor="start" weight={800}>
          {t("q v B  =  m v² / r    (one v cancels)", "q v B  =  m v² / r    (one v cancels)")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.8)}>
        <Chip x={44} y={498} w={306} h={40} fill={CREAM} stroke={RED} textFill={INK} size={18}>
          r = m v / q B
        </Chip>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 2.4)} d="M 120 544 L 274 544" stroke={RED} sw={1.8} dur={0.4} />
      <Draw on={beat >= 3} delay={dl(3, 2.6)} d="M 120 549 L 274 549" stroke={RED} sw={1.8} dur={0.4} />

      {/* beat 4 — reading it physically */}
      <Draw on={beat >= 4} delay={dl(4, 0.2)} d="M 94 292 A 96 96 0 0 1 286 292" stroke={MUTED} sw={1.6} dur={0.8} />
      <Fade on={beat >= 4} delay={dl(4, 1.0)}>
        <T x={190} y={190} size={12.5} fill={MUTED}>
          {t("larger v", "larger v")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.4)}>
        <T x={44} y={570} size={12.5} fill={INK} anchor="start">
          {t("m, v on top → heavier / faster bend LESS", "m, v on top → heavier / faster bend LESS")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.9)}>
        <T x={44} y={588} size={12.5} fill={INK} anchor="start">
          {t("q, B below → tighter bend  ·  r = p / q B", "q, B below → tighter bend  ·  r = p / q B")}
        </T>
      </Fade>

      {/* ═════════ COLUMN B — x 368..690 ═════════ */}

      {/* beat 5 — the period */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={368} y={98} size={13} fill={RED} anchor="start" weight={800}>
          {t("STEP 2 — ONE FULL REVOLUTION", "STEP 2 — ONE FULL REVOLUTION")}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 0.5)} d="M 368 104 L 566 104" stroke={RED} sw={1.8} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.9)}>
        <T x={368} y={124} size={12.5} fill={INK} anchor="start">
          {t("path = 2π r, travelled at speed v", "path = 2π r, travelled at speed v")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.4)}>
        <T x={368} y={146} size={14} fill={INK} anchor="start" weight={800}>
          T = 2π r / v
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.9)}>
        <T x={368} y={164} size={12.5} fill={MUTED} anchor="start">
          {t("looks as if it needs both r and v", "looks as if it needs both r and v")}
        </T>
      </Fade>

      {/* beat 6 — substitute, the v cancels */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={368} y={190} size={12.5} fill={INK_LIGHT} anchor="start">
          {t("now substitute r = m v / q B :", "now substitute r = m v / q B :")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.7)}>
        <T x={368} y={214} size={14.5} fill={INK} anchor="start" weight={800}>
          T = ( 2π / v ) · ( m v / q B )
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.4)} d="M 444 220 L 456 202" stroke={RED} sw={2.2} dur={0.25} />
      <Draw on={beat >= 6} delay={dl(6, 1.6)} d="M 509 220 L 521 202" stroke={RED} sw={2.2} dur={0.25} />
      <Fade on={beat >= 6} delay={dl(6, 2.0)}>
        <Chip x={368} y={230} w={322} h={42} fill={CREAM} stroke={GREEN} textFill={INK} size={18}>
          T = 2π m / q B
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.6)}>
        <T x={368} y={290} size={12.5} fill={GREEN} anchor="start" weight={800}>
          {t("the v's cancel — no speed left in it", "the v's cancel — no speed left in it")}
        </T>
      </Fade>

      {/* beat 7 — resonance */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={368} y={318} size={13} fill={RED} anchor="start" weight={800}>
          {t("THE CYCLOTRON RESONANCE CONDITION", "THE CYCLOTRON RESONANCE CONDITION")}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 0.5)} d="M 368 324 L 646 324" stroke={RED} sw={1.8} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.9)}>
        <T x={368} y={344} size={12.5} fill={INK} anchor="start">
          {t("fast particle: bigger circle, SAME time", "fast particle: bigger circle, SAME time")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.4)}>
        <T x={368} y={362} size={12.5} fill={INK} anchor="start">
          {t("extra distance ↔ extra speed, exactly", "extra distance ↔ extra speed, exactly")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.9)}>
        <T x={368} y={382} size={13.5} fill={INK} anchor="start" weight={800}>
          f = q B / 2π m
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 2.4)}>
        <T x={368} y={400} size={12.5} fill={GREEN} anchor="start" weight={800}>
          {t("one frequency kicks it forever", "one frequency kicks it forever")}
        </T>
      </Fade>

      {/* beat 11 — the exit speed */}
      <Fade on={beat >= 11} delay={dl(11, 0.2)}>
        <T x={368} y={436} size={13} fill={RED} anchor="start" weight={800}>
          {t("STEP 4 — THE PAYOFF", "STEP 4 — THE PAYOFF")}
        </T>
      </Fade>
      <Draw on={beat >= 11} delay={dl(11, 0.5)} d="M 368 442 L 546 442" stroke={RED} sw={1.8} dur={0.4} />
      <Fade on={beat >= 11} delay={dl(11, 0.9)}>
        <T x={368} y={462} size={12.5} fill={INK} anchor="start">
          {t("spiral out to the largest radius R, then extract", "spiral out to the largest radius R, then extract")}
        </T>
      </Fade>
      <Fade on={beat >= 11} delay={dl(11, 1.4)}>
        <T x={368} y={482} size={13.5} fill={INK} anchor="start" weight={800}>
          {t("r = m v / q B  →  v = q B R / m", "r = m v / q B  →  v = q B R / m")}
        </T>
      </Fade>

      {/* beat 12 — the energy */}
      <Fade on={beat >= 12} delay={dl(12, 0.2)}>
        <T x={368} y={506} size={13} fill={INK} anchor="start" weight={800}>
          {t("K = ½ m v²   ⇒", "K = ½ m v²   ⇒")}
        </T>
      </Fade>
      <Fade on={beat >= 12} delay={dl(12, 0.8)}>
        <Chip x={368} y={516} w={322} h={42} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={17}>
          K_max = q² B² R² / 2m
        </Chip>
      </Fade>
      <Draw on={beat >= 12} delay={dl(12, 1.5)} d="M 420 564 L 638 564" stroke={AMBER_DARK} sw={1.8} dur={0.4} />
      <Fade on={beat >= 12} delay={dl(12, 1.9)}>
        <T x={368} y={588} size={12.5} fill={GREEN} anchor="start" weight={800}>
          {t("K ∝ B² and R² — double the magnet, 4× the energy", "K ∝ B² and R² — double the magnet, 4× the energy")}
        </T>
      </Fade>

      {/* ═════════ COLUMN C — x 710..1044 ═════════ */}

      {/* beat 8 — the machine */}
      <Fade on={beat >= 8} delay={dl(8, 0.2)}>
        <T x={710} y={98} size={13} fill={RED} anchor="start" weight={800}>
          {t("STEP 3 — THE REAL MACHINE", "STEP 3 — THE REAL MACHINE")}
        </T>
      </Fade>
      <Draw on={beat >= 8} delay={dl(8, 0.5)} d="M 710 104 L 916 104" stroke={RED} sw={1.8} dur={0.4} />
      <Fade on={beat >= 8} delay={dl(8, 0.9)}>
        <T x={710} y={124} size={12.5} fill={INK} anchor="start">
          {t("two hollow D-shaped dees in a uniform B", "two hollow D-shaped dees in a uniform B")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 1.4)}>
        <T x={710} y={142} size={12.5} fill={INK} anchor="start">
          {t("with a narrow gap between them", "with a narrow gap between them")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 1.9)}>
        <T x={710} y={160} size={12.5} fill={INK} anchor="start">
          {t("oscillating V across the gap at f = q B / 2π m", "oscillating V across the gap at f = q B / 2π m")}
        </T>
      </Fade>

      {/* beat 9 — THE CYCLOTRON FIGURE */}
      <Fade on={beat >= 9} delay={dl(9, 0.2)}>
        <Path d="M 856 222 A 78 78 0 0 0 856 378 Z" fill={CREAM} stroke="none" />
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 0.2)}>
        <Path d="M 864 222 A 78 78 0 0 1 864 378 Z" fill={CREAM} stroke="none" />
      </Fade>
      <Draw
        on={beat >= 9}
        delay={dl(9, 0.4)}
        d="M 856 222 A 78 78 0 0 0 856 378 Z"
        stroke={INK}
        sw={2.4}
        dur={0.9}
      />
      <Draw
        on={beat >= 9}
        delay={dl(9, 0.9)}
        d="M 864 222 A 78 78 0 0 1 864 378 Z"
        stroke={INK}
        sw={2.4}
        dur={0.9}
      />
      <Fade on={beat >= 9} delay={dl(9, 1.6)}>
        <Path d="M 860 212 L 860 390" stroke={MUTED} strokeWidth={1.6} strokeDasharray="6 6" fill="none" />
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 1.9)}>
        <T x={860} y={206} size={12.5} fill={MUTED}>
          {t("gap", "gap")}
        </T>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 2.1)}>
        <T x={744} y={304} size={12.5} fill={MUTED} anchor="end">
          {t("dees", "dees")}
        </T>
      </Fade>
      <Draw on={beat >= 9} delay={dl(9, 2.3)} d={arrowD(752, 300, 792, 300)} stroke={MUTED} sw={1.4} dur={0.3} />
      <Draw
        on={beat >= 9}
        delay={dl(9, 2.7)}
        d="M 860 294 A 6 6 0 0 1 860 306 A 14 14 0 0 1 860 278 A 22 22 0 0 1 860 322 A 30 30 0 0 1 860 262 A 38 38 0 0 1 860 338 A 46 46 0 0 1 860 246 A 54 54 0 0 1 860 354"
        stroke={RED}
        sw={2.2}
        dur={1.6}
      />
      <Fade on={beat >= 9} delay={dl(9, 4.2)}>
        <T x={928} y={304} size={13} fill={INK} anchor="start" weight={800}>R</T>
      </Fade>
      <Draw on={beat >= 9} delay={dl(9, 4.4)} d={arrowD(860, 354, 926, 392)} stroke={RED} sw={2.2} dur={0.4} />
      <Fade on={beat >= 9} delay={dl(9, 4.8)}>
        <T x={900} y={412} size={12.5} fill={RED}>
          {t("extracted at R", "extracted at R")}
        </T>
      </Fade>
      <Draw on={beat >= 9} delay={dl(9, 5.1)} d="M 932 262 L 1000 262 L 1000 280" stroke={INK} sw={1.8} dur={0.4} />
      <Draw on={beat >= 9} delay={dl(9, 5.4)} d="M 932 338 L 1000 338 L 1000 320" stroke={INK} sw={1.8} dur={0.4} />
      <Draw on={beat >= 9} delay={dl(9, 5.7)} d={circD(1000, 300, 20)} stroke={INK} sw={2} dur={0.5} />
      <Fade on={beat >= 9} delay={dl(9, 6.1)}>
        <T x={1000} y={308} size={18} fill={INK} weight={800}>∼</T>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 6.3)}>
        <T x={1000} y={244} size={12.5} fill={INK_LIGHT}>
          {t("oscillating V", "oscillating V")}
        </T>
      </Fade>

      {/* beat 10 — why it works */}
      <Draw on={beat >= 10} delay={dl(10, 0.2)} d="M 710 440 L 1044 440" stroke={MUTED} sw={1.4} dur={0.5} />
      <Fade on={beat >= 10} delay={dl(10, 0.6)}>
        <T x={710} y={464} size={12.5} fill={INK} anchor="start">
          {t("no E field inside a dee — it is a shield", "no E field inside a dee — it is a shield")}
        </T>
      </Fade>
      <Fade on={beat >= 10} delay={dl(10, 1.1)}>
        <T x={710} y={482} size={12.5} fill={INK} anchor="start">
          {t("so it just coasts a semicircle at fixed speed", "so it just coasts a semicircle at fixed speed")}
        </T>
      </Fade>
      <Fade on={beat >= 10} delay={dl(10, 1.6)}>
        <T x={710} y={500} size={12.5} fill={INK} anchor="start">
          {t("every kick happens in the GAP → v ↑ → r ↑", "every kick happens in the GAP → v ↑ → r ↑")}
        </T>
      </Fade>
      <Fade on={beat >= 10} delay={dl(10, 2.1)}>
        <T x={710} y={518} size={12.5} fill={GREEN} anchor="start" weight={800}>
          {t("T never changes → the reversal is always in step", "T never changes → the reversal is always in step")}
        </T>
      </Fade>

      {/* beat 13 — the ceiling */}
      <Fade on={beat >= 13} delay={dl(13, 0.2)}>
        <T x={710} y={548} size={13} fill={RED} anchor="start" weight={800}>
          {t("LIMIT — RELATIVITY", "LIMIT — RELATIVITY")}
        </T>
      </Fade>
      <Draw on={beat >= 13} delay={dl(13, 0.5)} d="M 710 554 L 862 554" stroke={RED} sw={1.8} dur={0.4} />
      <Fade on={beat >= 13} delay={dl(13, 0.9)}>
        <T x={710} y={572} size={12.5} fill={INK} anchor="start">
          {t("v → c ⇒ m ↑ ⇒ T ↑ ⇒ the kicks fall out of step", "v → c ⇒ m ↑ ⇒ T ↑ ⇒ the kicks fall out of step")}
        </T>
      </Fade>
      <Fade on={beat >= 13} delay={dl(13, 1.4)}>
        <T x={710} y={590} size={12.5} fill={RED} anchor="start" weight={800}>
          {t("a hard energy ceiling → use a synchrotron", "a hard energy ceiling → use a synchrotron")}
        </T>
      </Fade>
    </Scene>
  );
}
