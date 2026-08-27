/**
 * P12Ch04 · Section 19 — "Key Formulas and Definitions"
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * WHAT IT USED TO SHOW: four bullet stacks fired on beats 0/1/5/11 of a
 * 17-beat narration — 13 reveals unused, the board frozen for minutes at a
 * time, and not one drawn figure (a title underline plus two rules).
 *
 * WHAT THE NARRATION TEACHES: the chapter's whole formula bank in three
 * blocks — ① a free charge in a field (F = qv×B, the full Lorentz force, and
 * why only the electric part does work), ② circular + helical motion (r, T,
 * ν, ω, the selector speed, the cyclotron energy) and ③ conductors and loops
 * (BIL sinθ, Fleming, parallel wires, τ = m×B, U = −m·B, the galvanometer).
 * Segment 9 narrates a velocity-selector diagram element by element, so that
 * figure is drawn on the board exactly as it is described.
 *
 * BEAT MAP (17 beats, gates 0..16 — every beat used):
 *   0  title + the three-block roadmap chips
 *   1  ① underline · F = q(v×B) · the v/B/F triad figure · the two extremes
 *   2  the full Lorentz force q(E + v×B)
 *   3  electric part works / magnetic part never does → the selector idea
 *   4  ② underline · "learn the four as one group"
 *   5  r, T, ν, ω written out
 *   6  ring T, ν, ω — no v and no r anywhere in them
 *   7  helix: r uses v sinθ, pitch = (v cosθ)T  + drawn helix
 *   8  the two named results: v = E/B and K_max = q²B²R²/2m
 *   9  THE VELOCITY SELECTOR FIGURE (plates, E arrows, ⊗ field, the two
 *      pushes, straight-through path, faster-up / slower-down curves)
 *  10  ③ underline
 *  11  F = I(L×B), |F| = BIL sinθ
 *  12  Fleming's left hand — drawn three-axis triad
 *  13  two parallel wires — drawn pair, currents, attraction, F/L
 *  14  τ = m×B, m = NIA, θ is to the NORMAL  + mini tilted-loop figure
 *  15  U = −m·B = −mB cosθ
 *  16  the galvanometer: φ = (NAB/k)I and the two sensitivities
 *
 * Layout: three full-height columns, one per block —
 *   col ① x44..350 · col ② x368..700 · col ③ x718..1044.
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
  ringD,
  crossD,
  INK,
  INK_LIGHT,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

/** circle as a drawable path */
const circD = (cx: number, cy: number, r: number) =>
  `M ${cx - r} ${cy} A ${r} ${r} 0 1 1 ${cx + r} ${cy} A ${r} ${r} 0 1 1 ${cx - r} ${cy}`;
/** ⊗ — into the page */
const crossInD = (cx: number, cy: number, r: number) => {
  const k = r * 0.68;
  return `${circD(cx, cy, r)} M ${cx - k} ${cy - k} L ${cx + k} ${cy + k} M ${
    cx + k
  } ${cy - k} L ${cx - k} ${cy + k}`;
};
/** ⊙ — out of the page */
const dotOutD = (cx: number, cy: number, r: number) =>
  `${circD(cx, cy, r)} ${circD(cx, cy, r * 0.16)}`;
/** ↔ measurement bar */
const spanD = (x1: number, x2: number, y: number) =>
  `${arrowD(x1, y, x2, y)} ${arrowD(x2, y, x1, y)}`;

export default function P12Ch04Sec19({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ═══ beat 0 — title + roadmap ═══ */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={42} size={25} fill={RED} script>
          {t(
            "Key Formulas — charges, conductors, loops",
            "Key Formulas — charges, conductors, loops"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 1.4)}
        d="M 262 56 C 480 52, 640 60, 818 55"
        stroke={RED}
        sw={2.2}
        dur={0.7}
      />
      <Fade on={beat >= 0} delay={dl(0, 2.0)}>
        <Chip x={44} y={64} w={306} h={30} fill={CREAM} stroke={MUTED} textFill={INK} size={14}>
          {t("① free charges", "① free charges")}
        </Chip>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 2.5)}>
        <Chip x={368} y={64} w={332} h={30} fill={CREAM} stroke={MUTED} textFill={INK} size={14}>
          {t("② circular motion", "② circular motion")}
        </Chip>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 3.0)}>
        <Chip x={718} y={64} w={326} h={30} fill={CREAM} stroke={MUTED} textFill={INK} size={14}>
          {t("③ conductors & loops", "③ conductors & loops")}
        </Chip>
      </Fade>

      {/* ═════════════ COLUMN ① — x 44..350 ═════════════ */}

      {/* beat 1 — force on a moving charge */}
      <Draw on={beat >= 1} delay={dl(1, 0.1)} d="M 60 99 L 334 99" stroke={RED} sw={2.4} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={44} y={120} size={16} fill={INK} anchor="start" weight={800}>
          F = q ( v × B )
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={44} y={142} size={13} fill={INK_LIGHT} anchor="start">
          {t("| F | = q v B sin θ,   θ = ∠(v, B)", "| F | = q v B sin θ,   θ = ∠(v, B)")}
        </T>
      </Fade>

      {/* the v / B / F triad */}
      <Draw on={beat >= 1} delay={dl(1, 1.4)} d={arrowD(170, 300, 300, 300)} stroke={GREEN} sw={2.4} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 1.8)}>
        <T x={310} y={296} size={14} fill={GREEN} anchor="start" weight={800}>v</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2.1)} d={arrowD(170, 300, 170, 198)} stroke={AMBER_DARK} sw={2.4} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 2.5)}>
        <T x={162} y={192} size={14} fill={AMBER_DARK} anchor="end" weight={800}>B</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2.9)} d="M 170 282 L 188 282 L 188 300" stroke={MUTED} sw={1.4} dur={0.3} />
      <Draw on={beat >= 1} delay={dl(1, 3.2)} d={dotOutD(232, 248, 14)} stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 3.7)}>
        <T x={252} y={242} size={12.5} fill={RED} anchor="start" weight={800}>
          {t("F ⊙ out of the page", "F ⊙ out of the page")}
        </T>
      </Fade>

      <Fade on={beat >= 1} delay={dl(1, 4.2)}>
        <T x={44} y={328} size={12.5} fill={MUTED} anchor="start">
          {t("v ∥ B  →  sin 0 = 0  →  F = 0", "v ∥ B  →  sin 0 = 0  →  F = 0")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 4.6)} d={crossD(312, 318, 14, 12)} stroke={RED} sw={1.8} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 4.9)}>
        <T x={44} y={350} size={12.5} fill={GREEN} anchor="start">
          {t("v ⊥ B  →  sin 90° = 1  →  F = q v B (max)", "v ⊥ B  →  sin 90° = 1  →  F = q v B (max)")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 5.3)} d="M 312 344 L 319 352 L 333 337" stroke={GREEN} sw={2.2} dur={0.3} />

      {/* beat 2 — the full Lorentz force */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={44} y={386} size={13} fill={RED} anchor="start" weight={800}>
          {t("THE FULL LORENTZ FORCE", "THE FULL LORENTZ FORCE")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={44} y={412} size={16} fill={INK} anchor="start" weight={800}>
          F = q ( E + v × B )
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.4)} d="M 44 420 L 244 420" stroke={INK} sw={1.6} dur={0.4} />

      {/* beat 3 — which part does work */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={44} y={446} size={12.5} fill={AMBER_DARK} anchor="start" weight={800}>
          {t("q E :  along E, acts even at rest,", "q E :  along E, acts even at rest,")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.7)}>
        <T x={44} y={464} size={12.5} fill={AMBER_DARK} anchor="start">
          {t("does work → speed and KE change", "does work → speed and KE change")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.2)}>
        <T x={44} y={488} size={12.5} fill={INK} anchor="start" weight={800}>
          {t("q v × B :  ⊥ v, never does work,", "q v × B :  ⊥ v, never does work,")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.6)}>
        <T x={44} y={506} size={12.5} fill={INK} anchor="start">
          {t("so the speed is untouched", "so the speed is untouched")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.1)}>
        <Chip x={44} y={520} w={306} h={38} fill={GREEN} textFill="#ffffff" size={14}>
          {t("any change in speed came from E", "any change in speed came from E")}
        </Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.6)}>
        <T x={44} y={582} size={12.5} fill={GREEN} anchor="start">
          {t("selector = these two exactly cancel", "selector = these two exactly cancel")}
        </T>
      </Fade>

      {/* ═════════════ COLUMN ② — x 368..700 ═════════════ */}

      {/* beat 4 */}
      <Draw on={beat >= 4} delay={dl(4, 0.1)} d="M 384 99 L 684 99" stroke={RED} sw={2.4} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <T x={368} y={120} size={12.5} fill={MUTED} anchor="start">
          {t("learn these four as ONE group", "learn these four as ONE group")}
        </T>
      </Fade>

      {/* beat 5 — the four expressions */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={368} y={144} size={14.5} fill={INK} anchor="start" weight={800}>
          r = m v / q B  =  p / q B
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.1)}>
        <T x={368} y={168} size={14.5} fill={INK} anchor="start" weight={800}>
          T = 2π m / q B
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.7)}>
        <T x={368} y={192} size={14.5} fill={INK} anchor="start" weight={800}>
          ν = q B / 2π m
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2.3)}>
        <T x={368} y={216} size={14.5} fill={INK} anchor="start" weight={800}>
          ω = q B / m
        </T>
      </Fade>

      {/* beat 6 — the independence */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d={ringD(452, 190, 96, 40)} stroke={RED} sw={2.2} dur={0.9} />
      <Fade on={beat >= 6} delay={dl(6, 1.0)}>
        <T x={368} y={254} size={12.5} fill={RED} anchor="start" weight={800}>
          {t("T, ν and ω contain no v and no r", "T, ν and ω contain no v and no r")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.5)}>
        <T x={368} y={272} size={12.5} fill={INK_LIGHT} anchor="start">
          {t("fast → bigger circle, exactly the same time", "fast → bigger circle, exactly the same time")}
        </T>
      </Fade>

      {/* beat 7 — the helix */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={368} y={300} size={13} fill={RED} anchor="start" weight={800}>
          {t("HELIX — v AT AN ANGLE θ TO B", "HELIX — v AT AN ANGLE θ TO B")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.8)}>
        <T x={368} y={322} size={12.5} fill={INK} anchor="start">
          {t("radius uses v⊥ = v sin θ", "radius uses v⊥ = v sin θ")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.3)}>
        <T x={368} y={340} size={12.5} fill={INK} anchor="start">
          {t("pitch = (v cos θ) × T", "pitch = (v cos θ) × T")}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 1.7)} d={arrowD(518, 330, 694, 330)} stroke={AMBER_DARK} sw={1.8} dur={0.5} />
      <Draw
        on={beat >= 7}
        delay={dl(7, 2.1)}
        d="M 524 330 C 534 304, 556 304, 566 330 C 576 356, 598 356, 608 330 C 618 304, 640 304, 650 330 C 658 350, 674 352, 682 338"
        stroke={GREEN}
        sw={2.2}
        dur={1.1}
      />
      <Fade on={beat >= 7} delay={dl(7, 3.0)}>
        <T x={694} y={318} size={12.5} fill={AMBER_DARK} anchor="end" weight={800}>B</T>
      </Fade>

      {/* beat 8 — two named results */}
      <Fade on={beat >= 8} delay={dl(8, 0.3)}>
        <T x={368} y={374} size={13} fill={RED} anchor="start" weight={800}>
          {t("TWO NAMED RESULTS", "TWO NAMED RESULTS")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 0.8)}>
        <T x={368} y={396} size={12.5} fill={INK} anchor="start">
          {t("velocity selector:  v = E / B  (q cancels)", "velocity selector:  v = E / B  (q cancels)")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 1.4)}>
        <T x={368} y={414} size={12.5} fill={INK} anchor="start">
          {t("cyclotron:  K_max = q² B² R² / 2m", "cyclotron:  K_max = q² B² R² / 2m")}
        </T>
      </Fade>

      {/* beat 9 — THE VELOCITY SELECTOR FIGURE */}
      <Fade on={beat >= 9} delay={dl(9, 0.2)}>
        <T x={368} y={438} size={12.5} fill={RED} anchor="start" weight={800}>
          {t("THE VELOCITY SELECTOR", "THE VELOCITY SELECTOR")}
        </T>
      </Fade>
      {/* plates */}
      <Draw on={beat >= 9} delay={dl(9, 0.6)} d="M 400 462 L 640 462" stroke={INK} sw={2.8} dur={0.4} />
      <Draw on={beat >= 9} delay={dl(9, 0.9)} d="M 400 566 L 640 566" stroke={INK} sw={2.8} dur={0.4} />
      <Fade on={beat >= 9} delay={dl(9, 1.1)}>
        <T x={390} y={468} size={14} fill={INK} anchor="end" weight={800}>+</T>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 1.1)}>
        <T x={390} y={572} size={14} fill={INK} anchor="end" weight={800}>−</T>
      </Fade>
      {/* E field arrows down from the + plate */}
      <Draw on={beat >= 9} delay={dl(9, 1.4)} d={arrowD(420, 468, 420, 494)} stroke={AMBER_DARK} sw={2} dur={0.3} />
      <Draw on={beat >= 9} delay={dl(9, 1.6)} d={arrowD(450, 468, 450, 494)} stroke={AMBER_DARK} sw={2} dur={0.3} />
      <Draw on={beat >= 9} delay={dl(9, 1.8)} d={arrowD(590, 468, 590, 494)} stroke={AMBER_DARK} sw={2} dur={0.3} />
      <Draw on={beat >= 9} delay={dl(9, 2.0)} d={arrowD(620, 468, 620, 494)} stroke={AMBER_DARK} sw={2} dur={0.3} />
      <Fade on={beat >= 9} delay={dl(9, 2.2)}>
        <T x={648} y={480} size={12.5} fill={AMBER_DARK} anchor="start" weight={800}>E</T>
      </Fade>
      {/* B into the page */}
      <Draw on={beat >= 9} delay={dl(9, 2.4)} d={crossInD(420, 536, 8)} stroke={INK} sw={1.8} dur={0.35} />
      <Draw on={beat >= 9} delay={dl(9, 2.6)} d={crossInD(600, 536, 8)} stroke={INK} sw={1.8} dur={0.35} />
      <Fade on={beat >= 9} delay={dl(9, 2.8)}>
        <T x={648} y={540} size={12.5} fill={INK} anchor="start" weight={800}>
          {t("B ⊗", "B ⊗")}
        </T>
      </Fade>
      {/* the charge arriving */}
      <Draw on={beat >= 9} delay={dl(9, 3.0)} d={arrowD(370, 514, 416, 514)} stroke={GREEN} sw={2.2} dur={0.35} />
      <Fade on={beat >= 9} delay={dl(9, 3.3)}>
        <T x={382} y={506} size={12.5} fill={GREEN} anchor="start" weight={800}>v</T>
      </Fade>
      <Draw on={beat >= 9} delay={dl(9, 3.5)} d={circD(500, 514, 6)} stroke={GREEN} sw={2} dur={0.3} fill={CREAM} />
      {/* the two pushes */}
      <Draw on={beat >= 9} delay={dl(9, 3.8)} d={arrowD(500, 514, 500, 552)} stroke={INK} sw={2.4} dur={0.35} />
      <Fade on={beat >= 9} delay={dl(9, 4.1)}>
        <T x={510} y={550} size={12.5} fill={INK} anchor="start" weight={800}>q E</T>
      </Fade>
      <Draw on={beat >= 9} delay={dl(9, 4.3)} d={arrowD(500, 514, 500, 478)} stroke={RED} sw={2.4} dur={0.35} />
      <Fade on={beat >= 9} delay={dl(9, 4.6)}>
        <T x={510} y={484} size={12.5} fill={RED} anchor="start" weight={800}>q v B</T>
      </Fade>
      {/* the three outcomes */}
      <Draw on={beat >= 9} delay={dl(9, 4.9)} d={arrowD(508, 514, 644, 514)} stroke={GREEN} sw={2} dur={0.5} />
      <Draw on={beat >= 9} delay={dl(9, 5.3)} d="M 508 508 C 560 504, 610 492, 642 476" stroke={RED} sw={2} dur={0.5} />
      <Draw on={beat >= 9} delay={dl(9, 5.6)} d="M 508 520 C 560 524, 610 536, 642 552" stroke={INK} sw={2} dur={0.5} />
      <Fade on={beat >= 9} delay={dl(9, 5.9)}>
        <T x={698} y={472} size={12.5} fill={RED} anchor="end">
          {t("faster ↑", "faster ↑")}
        </T>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 6.1)}>
        <T x={698} y={558} size={12.5} fill={INK} anchor="end">
          {t("slower ↓", "slower ↓")}
        </T>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 6.4)}>
        <T x={368} y={592} size={12.5} fill={GREEN} anchor="start" weight={800}>
          {t("equal pushes ⇒ straight through at v = E / B", "equal pushes ⇒ straight through at v = E / B")}
        </T>
      </Fade>

      {/* ═════════════ COLUMN ③ — x 718..1044 ═════════════ */}

      {/* beat 10 */}
      <Draw on={beat >= 10} delay={dl(10, 0.1)} d="M 734 99 L 1028 99" stroke={RED} sw={2.4} dur={0.5} />
      <Fade on={beat >= 10} delay={dl(10, 0.5)}>
        <T x={718} y={118} size={12.5} fill={MUTED} anchor="start">
          {t("where the board questions live", "where the board questions live")}
        </T>
      </Fade>

      {/* beat 11 — conductor force */}
      <Fade on={beat >= 11} delay={dl(11, 0.3)}>
        <T x={718} y={142} size={13.5} fill={INK} anchor="start" weight={800}>
          {t("F = I ( L × B ) ,   | F | = B I L sin θ", "F = I ( L × B ) ,   | F | = B I L sin θ")}
        </T>
      </Fade>
      <Fade on={beat >= 11} delay={dl(11, 0.9)}>
        <T x={718} y={160} size={12.5} fill={MUTED} anchor="start">
          {t("current × length replaces charge × velocity", "current × length replaces charge × velocity")}
        </T>
      </Fade>

      {/* beat 12 — Fleming's left hand */}
      <Fade on={beat >= 12} delay={dl(12, 0.2)}>
        <T x={718} y={186} size={13} fill={RED} anchor="start" weight={800}>
          {t("FLEMING'S LEFT-HAND RULE", "FLEMING'S LEFT-HAND RULE")}
        </T>
      </Fade>
      <Draw on={beat >= 12} delay={dl(12, 0.7)} d={arrowD(762, 230, 762, 198)} stroke={AMBER_DARK} sw={2.2} dur={0.35} />
      <Fade on={beat >= 12} delay={dl(12, 1.0)}>
        <T x={754} y={200} size={12.5} fill={AMBER_DARK} anchor="end" weight={800}>B</T>
      </Fade>
      <Draw on={beat >= 12} delay={dl(12, 1.2)} d={arrowD(762, 230, 798, 256)} stroke={GREEN} sw={2.2} dur={0.35} />
      <Fade on={beat >= 12} delay={dl(12, 1.5)}>
        <T x={804} y={262} size={12.5} fill={GREEN} anchor="start" weight={800}>I</T>
      </Fade>
      <Draw on={beat >= 12} delay={dl(12, 1.7)} d={arrowD(762, 230, 722, 230)} stroke={RED} sw={2.2} dur={0.35} />
      <Fade on={beat >= 12} delay={dl(12, 2.0)}>
        <T x={718} y={226} size={12.5} fill={RED} anchor="start" weight={800}>F</T>
      </Fade>
      <Fade on={beat >= 12} delay={dl(12, 2.3)}>
        <T x={840} y={212} size={12.5} fill={AMBER_DARK} anchor="start">
          {t("forefinger → B", "forefinger → B")}
        </T>
      </Fade>
      <Fade on={beat >= 12} delay={dl(12, 2.6)}>
        <T x={840} y={232} size={12.5} fill={GREEN} anchor="start">
          {t("middle → I", "middle → I")}
        </T>
      </Fade>
      <Fade on={beat >= 12} delay={dl(12, 2.9)}>
        <T x={840} y={252} size={12.5} fill={RED} anchor="start">
          {t("thumb → F", "thumb → F")}
        </T>
      </Fade>
      <Fade on={beat >= 12} delay={dl(12, 3.2)}>
        <T x={718} y={280} size={12.5} fill={MUTED} anchor="start">
          {t("a mnemonic for the cross product only", "a mnemonic for the cross product only")}
        </T>
      </Fade>

      {/* beat 13 — two parallel wires */}
      <Fade on={beat >= 13} delay={dl(13, 0.2)}>
        <T x={718} y={306} size={13} fill={RED} anchor="start" weight={800}>
          {t("TWO PARALLEL WIRES", "TWO PARALLEL WIRES")}
        </T>
      </Fade>
      <Draw on={beat >= 13} delay={dl(13, 0.6)} d="M 736 326 L 736 384" stroke={INK} sw={2.6} dur={0.4} />
      <Draw on={beat >= 13} delay={dl(13, 0.8)} d="M 784 326 L 784 384" stroke={INK} sw={2.6} dur={0.4} />
      <Draw on={beat >= 13} delay={dl(13, 1.1)} d={arrowD(736, 380, 736, 332)} stroke={GREEN} sw={1.8} dur={0.35} />
      <Draw on={beat >= 13} delay={dl(13, 1.3)} d={arrowD(784, 380, 784, 332)} stroke={GREEN} sw={1.8} dur={0.35} />
      <Fade on={beat >= 13} delay={dl(13, 1.6)}>
        <T x={730} y={322} size={12.5} fill={GREEN} anchor="end" weight={800}>I₁</T>
      </Fade>
      <Fade on={beat >= 13} delay={dl(13, 1.6)}>
        <T x={790} y={322} size={12.5} fill={GREEN} anchor="start" weight={800}>I₂</T>
      </Fade>
      <Draw on={beat >= 13} delay={dl(13, 1.9)} d={arrowD(740, 356, 757, 356)} stroke={RED} sw={2.2} dur={0.3} />
      <Draw on={beat >= 13} delay={dl(13, 1.9)} d={arrowD(780, 356, 763, 356)} stroke={RED} sw={2.2} dur={0.3} />
      <Draw on={beat >= 13} delay={dl(13, 2.2)} d={spanD(736, 784, 398)} stroke={MUTED} sw={1.4} dur={0.3} />
      <Fade on={beat >= 13} delay={dl(13, 2.5)}>
        <T x={760} y={416} size={12.5} fill={MUTED}>d</T>
      </Fade>
      <Fade on={beat >= 13} delay={dl(13, 2.8)}>
        <T x={820} y={338} size={13} fill={INK} anchor="start" weight={800}>
          F / L = μ₀ I₁ I₂ / 2π d
        </T>
      </Fade>
      <Fade on={beat >= 13} delay={dl(13, 3.2)}>
        <T x={820} y={360} size={12.5} fill={GREEN} anchor="start">
          {t("∥ currents → attract", "∥ currents → attract")}
        </T>
      </Fade>
      <Fade on={beat >= 13} delay={dl(13, 3.5)}>
        <T x={820} y={378} size={12.5} fill={RED} anchor="start">
          {t("anti-∥ → repel", "anti-∥ → repel")}
        </T>
      </Fade>

      {/* beat 14 — torque on a loop */}
      <Fade on={beat >= 14} delay={dl(14, 0.2)}>
        <T x={718} y={442} size={13.5} fill={INK} anchor="start" weight={800}>
          τ = m × B ,   | τ | = N I A B sin θ
        </T>
      </Fade>
      <Fade on={beat >= 14} delay={dl(14, 0.7)}>
        <T x={718} y={462} size={12.5} fill={INK_LIGHT} anchor="start">
          {t("m = N I A   (A·m²,  dimensions A L²)", "m = N I A   (A·m²,  dimensions A L²)")}
        </T>
      </Fade>
      <Fade on={beat >= 14} delay={dl(14, 1.1)}>
        <T x={718} y={480} size={12.5} fill={RED} anchor="start" weight={800}>
          {t("θ is measured to the NORMAL", "θ is measured to the NORMAL")}
        </T>
      </Fade>
      <Fade on={beat >= 14} delay={dl(14, 1.5)}>
        <Path d="M 968 462 L 996 448 L 1024 462 L 996 476 Z" fill={CREAM} stroke="none" />
      </Fade>
      <Draw
        on={beat >= 14}
        delay={dl(14, 1.6)}
        d="M 968 462 L 996 448 L 1024 462 L 996 476 Z"
        stroke={INK}
        sw={2}
        dur={0.6}
      />
      <Draw on={beat >= 14} delay={dl(14, 2.1)} d={arrowD(996, 462, 1016, 432)} stroke={GREEN} sw={2.2} dur={0.35} />
      <Fade on={beat >= 14} delay={dl(14, 2.4)}>
        <T x={1024} y={430} size={12.5} fill={GREEN} anchor="start" weight={800}>n̂</T>
      </Fade>
      <Draw on={beat >= 14} delay={dl(14, 2.6)} d={arrowD(958, 496, 1026, 496)} stroke={AMBER_DARK} sw={2} dur={0.35} />
      <Fade on={beat >= 14} delay={dl(14, 2.9)}>
        <T x={1032} y={500} size={12.5} fill={AMBER_DARK} anchor="start" weight={800}>B</T>
      </Fade>

      {/* beat 15 — potential energy */}
      <Fade on={beat >= 15} delay={dl(15, 0.3)}>
        <T x={718} y={508} size={13} fill={INK} anchor="start" weight={800}>
          U = − m · B = − m B cos θ
        </T>
      </Fade>
      <Fade on={beat >= 15} delay={dl(15, 0.8)}>
        <T x={718} y={526} size={12.5} fill={INK_LIGHT} anchor="start">
          {t("aligned → minimum (stable) · anti → maximum", "aligned → minimum (stable) · anti → maximum")}
        </T>
      </Fade>

      {/* beat 16 — the galvanometer */}
      <Fade on={beat >= 16} delay={dl(16, 0.2)}>
        <T x={718} y={552} size={13} fill={RED} anchor="start" weight={800}>
          {t("GALVANOMETER — radial field, sin θ = 1", "GALVANOMETER — radial field, sin θ = 1")}
        </T>
      </Fade>
      <Fade on={beat >= 16} delay={dl(16, 0.7)}>
        <T x={718} y={570} size={13} fill={GREEN} anchor="start" weight={800}>
          {t("φ = ( N A B / k ) I  — a linear scale", "φ = ( N A B / k ) I  — a linear scale")}
        </T>
      </Fade>
      <Fade on={beat >= 16} delay={dl(16, 1.2)}>
        <T x={718} y={588} size={12.5} fill={INK} anchor="start">
          {t("S_I = N A B / k    ·    S_V = N A B / k R", "S_I = N A B / k    ·    S_V = N A B / k R")}
        </T>
      </Fade>
    </Scene>
  );
}
