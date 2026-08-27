/**
 * P12Ch04 · Section 22 — "Derivations C and D: Parallel Wires, and the Moving-Coil Galvanometer"
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * WHAT IT USED TO SHOW: an unfinished remnant of an earlier pass — two prose
 * panels, a verdict block and a full-width footer chip, gated on beats
 * 0/1/6/10 of a 13-beat narration. Nine reveals were never used, so the board
 * stood still for minutes at a time, and the only four drawn strokes were the
 * title underline and three rules. No wires, no poles, no coil, no spring.
 *
 * WHAT THE NARRATION TEACHES: Derivation C reuses the infinite-wire field
 * B₁ = μ₀I₁/2πd at wire 2, applies F = B I L, and divides by L to get
 * F/L = μ₀I₁I₂/2πd — attractive for parallel currents, and the pre-2019
 * definition of the ampere. Derivation D starts from the defect it fixes: the
 * sin θ in τ = NIAB sin θ makes the deflection non-linear, so the coil is wound
 * on a soft-iron core between concave pole pieces to make the field radial and
 * force sin θ = 1. Balancing NIAB against the hairspring's kφ gives the linear
 * scale φ = (NAB/k) I, then the two sensitivities and why raising N does not
 * automatically raise the voltage sensitivity. Segment 7 narrates the
 * galvanometer figure part by part, so that figure is drawn as described.
 *
 * BEAT MAP (13 beats, gates 0..12 — every beat used):
 *   0  title + the three roadmap chips
 *   1  C: setup + THE TWO-WIRE FIGURE (currents, ⊗ field, forces, span d)
 *      and the reused field B₁ = μ₀I₁/2πd
 *   2  force on wire 2, divide by L  →  F/L = μ₀I₁I₂/2πd
 *   3  direction (RHR then Fleming) · attract vs repel · the old ampere
 *   4  D: the galvanometer — start with the problem
 *   5  the problem: τ = NIAB sin θ  + the DRAWN non-linear scale
 *   6  the fix: soft-iron core, concave poles, radial field, sin θ = 1
 *   7  THE GALVANOMETER FIGURE (shaded concave poles N/S, white core, red
 *      radial field lines, the coil, the spiral hairspring)
 *   8  the deflecting torque NIAB, independent of orientation
 *   9  the restoring torque kφ from the hairspring
 *  10  balance:  NIAB = kφ  ⇒  φ = (NAB/k) I  — a linear scale
 *  11  the two figures of merit, S_I and S_V
 *  12  the subtlety: N raises S_I, but N also raises R, so S_V barely moves
 *
 * Layout: col A x44..350 (Derivation C) · col B x368..700 (the problem, the
 * fix, the instrument) · col C x718..1044 (torque, balance, sensitivities).
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
/** ↔ measurement span */
const spanD = (x1: number, x2: number, y: number) =>
  `${arrowD(x1, y, x2, y)} ${arrowD(x2, y, x1, y)}`;

export default function P12Ch04Sec22({ currentTime, reveals, language }: SceneProps) {
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
            "Parallel Wires & the Moving-Coil Galvanometer",
            "Parallel Wires & the Moving-Coil Galvanometer"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 1.4)}
        d="M 254 56 C 460 52, 640 60, 826 55"
        stroke={RED}
        sw={2.2}
        dur={0.7}
      />
      <Fade on={beat >= 0} delay={dl(0, 2.0)}>
        <Chip x={44} y={66} w={306} h={30} fill={CREAM} stroke={MUTED} textFill={INK} size={14}>
          {t("① C — two parallel wires", "① C — two parallel wires")}
        </Chip>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 2.4)}>
        <Chip x={368} y={66} w={332} h={30} fill={CREAM} stroke={MUTED} textFill={INK} size={14}>
          {t("② D — the galvanometer", "② D — the galvanometer")}
        </Chip>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 2.8)}>
        <Chip x={718} y={66} w={326} h={30} fill={CREAM} stroke={MUTED} textFill={INK} size={14}>
          {t("③ the two sensitivities", "③ the two sensitivities")}
        </Chip>
      </Fade>

      {/* ═════════════ COLUMN A — x 44..350 · DERIVATION C ═════════════ */}

      {/* beat 1 — setup and the figure */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={44} y={112} size={13} fill={RED} anchor="start" weight={800}>
          {t("DERIVATION C — TWO PARALLEL WIRES", "DERIVATION C — TWO PARALLEL WIRES")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.5)} d="M 44 118 L 264 118" stroke={RED} sw={1.8} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={44} y={136} size={12.5} fill={INK} anchor="start">
          {t("two long wires, a distance d apart, I₁ and I₂", "two long wires, a distance d apart, I₁ and I₂")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.3)} d="M 96 160 L 96 262" stroke={INK} sw={2.8} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 1.6)} d="M 216 160 L 216 262" stroke={INK} sw={2.8} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 1.9)} d={arrowD(96, 256, 96, 168)} stroke={GREEN} sw={2} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 2.1)} d={arrowD(216, 256, 216, 168)} stroke={GREEN} sw={2} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 2.4)}>
        <T x={88} y={156} size={13} fill={GREEN} anchor="end" weight={800}>I₁</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.4)}>
        <T x={224} y={156} size={13} fill={GREEN} anchor="start" weight={800}>I₂</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2.7)} d={crossInD(180, 180, 8)} stroke={AMBER_DARK} sw={1.8} dur={0.3} />
      <Draw on={beat >= 1} delay={dl(1, 2.9)} d={crossInD(180, 242, 8)} stroke={AMBER_DARK} sw={1.8} dur={0.3} />
      <Draw on={beat >= 1} delay={dl(1, 3.1)} d={crossInD(250, 180, 8)} stroke={AMBER_DARK} sw={1.8} dur={0.3} />
      <Draw on={beat >= 1} delay={dl(1, 3.3)} d={crossInD(250, 242, 8)} stroke={AMBER_DARK} sw={1.8} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 3.6)}>
        <T x={268} y={214} size={12.5} fill={AMBER_DARK} anchor="start" weight={800}>B₁ ⊗</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 3.9)} d={arrowD(102, 212, 144, 212)} stroke={RED} sw={2.2} dur={0.3} />
      <Draw on={beat >= 1} delay={dl(1, 3.9)} d={arrowD(210, 212, 168, 212)} stroke={RED} sw={2.2} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 4.2)}>
        <T x={123} y={204} size={12.5} fill={RED} weight={800}>F</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 4.2)}>
        <T x={189} y={204} size={12.5} fill={RED} weight={800}>F</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 4.5)} d={spanD(96, 216, 282)} stroke={MUTED} sw={1.4} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 4.9)}>
        <T x={156} y={300} size={12.5} fill={MUTED} weight={800}>d</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 5.2)}>
        <T x={44} y={322} size={12.5} fill={INK} anchor="start">
          {t("reuse the infinite-wire field of Subtopic 2:", "reuse the infinite-wire field of Subtopic 2:")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 5.6)}>
        <T x={44} y={344} size={14} fill={INK} anchor="start" weight={800}>
          B₁ = μ₀ I₁ / 2π d
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 6.0)}>
        <T x={44} y={362} size={12.5} fill={MUTED} anchor="start">
          {t("state that reuse explicitly in the answer", "state that reuse explicitly in the answer")}
        </T>
      </Fade>

      {/* beat 2 — the force, then divide by L */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={44} y={388} size={13} fill={RED} anchor="start" weight={800}>
          {t("FORCE ON WIRE 2", "FORCE ON WIRE 2")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.5)} d="M 44 394 L 176 394" stroke={RED} sw={1.8} dur={0.3} />
      <Fade on={beat >= 2} delay={dl(2, 0.9)}>
        <T x={44} y={412} size={12.5} fill={INK} anchor="start">
          {t("wire 2 is a conductor in B₁ :  F = B₁ I₂ L", "wire 2 is a conductor in B₁ :  F = B₁ I₂ L")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.3)}>
        <T x={44} y={430} size={12.5} fill={INK} anchor="start">
          {t("divide by L — the total force grows without", "divide by L — the total force grows without")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <T x={44} y={446} size={12.5} fill={INK} anchor="start">
          {t("limit as the wires get longer", "limit as the wires get longer")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.0)}>
        <Chip x={44} y={456} w={306} h={38} fill={CREAM} stroke={RED} textFill={INK} size={17}>
          F / L = μ₀ I₁ I₂ / 2π d
        </Chip>
      </Fade>

      {/* beat 3 — direction and the old ampere */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={44} y={516} size={13} fill={RED} anchor="start" weight={800}>
          {t("DIRECTION + THE OLD AMPERE", "DIRECTION + THE OLD AMPERE")}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 0.5)} d="M 44 522 L 254 522" stroke={RED} sw={1.8} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 0.9)}>
        <T x={44} y={540} size={12.5} fill={INK} anchor="start">
          {t("right-hand rule for B₁, then Fleming's LHR", "right-hand rule for B₁, then Fleming's LHR")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.3)}>
        <T x={44} y={558} size={12.5} fill={GREEN} anchor="start" weight={800}>
          {t("∥ → attract    ·    anti-∥ → repel", "∥ → attract    ·    anti-∥ → repel")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.7)}>
        <T x={44} y={578} size={12.5} fill={MUTED} anchor="start">
          {t("pre-2019: 1 A ⇒ 2 × 10⁻⁷ N/m at d = 1 m", "pre-2019: 1 A ⇒ 2 × 10⁻⁷ N/m at d = 1 m")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.0)}>
        <T x={44} y={594} size={12.5} fill={MUTED} anchor="start">
          {t("now e = 1.602176634 × 10⁻¹⁹ C is fixed", "now e = 1.602176634 × 10⁻¹⁹ C is fixed")}
        </T>
      </Fade>

      {/* ═════════════ COLUMN B — x 368..700 · DERIVATION D ═════════════ */}

      {/* beat 4 */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={368} y={114} size={13} fill={RED} anchor="start" weight={800}>
          {t("DERIVATION D — THE GALVANOMETER", "DERIVATION D — THE GALVANOMETER")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 0.5)} d="M 368 120 L 576 120" stroke={RED} sw={1.8} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 0.9)}>
        <T x={368} y={138} size={12.5} fill={MUTED} anchor="start">
          {t("start with the problem, not the solution", "start with the problem, not the solution")}
        </T>
      </Fade>

      {/* beat 5 — the problem, with the crowded scale drawn */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={368} y={164} size={13} fill={RED} anchor="start" weight={800}>
          {t("THE PROBLEM — THAT sin θ", "THE PROBLEM — THAT sin θ")}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 0.5)} d="M 368 170 L 578 170" stroke={RED} sw={1.8} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.9)}>
        <T x={368} y={188} size={13.5} fill={INK} anchor="start" weight={800}>
          τ = N I A B sin θ
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.3)}>
        <T x={368} y={206} size={12.5} fill={INK} anchor="start">
          {t("as the coil turns, θ changes → τ changes", "as the coil turns, θ changes → τ changes")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={368} y={224} size={12.5} fill={INK} anchor="start">
          {t("→ the deflection is NOT proportional to I", "→ the deflection is NOT proportional to I")}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 2.0)} d="M 372 250 L 690 250" stroke={INK} sw={2} dur={0.6} />
      <Draw
        on={beat >= 5}
        delay={dl(5, 2.5)}
        d="M 380 250 L 380 238 M 396 250 L 396 238 M 414 250 L 414 238 M 436 250 L 436 238 M 464 250 L 464 238 M 500 250 L 500 238 M 546 250 L 546 238 M 604 250 L 604 238 M 674 250 L 674 238"
        stroke={INK}
        sw={1.8}
        dur={0.9}
      />
      <Fade on={beat >= 5} delay={dl(5, 3.4)}>
        <T x={368} y={270} size={12.5} fill={RED} anchor="start">
          {t("crowded at one end, stretched at the other", "crowded at one end, stretched at the other")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 3.8)}>
        <T x={368} y={288} size={12.5} fill={RED} anchor="start" weight={800}>
          {t("the engineering job: get rid of the sin θ", "the engineering job: get rid of the sin θ")}
        </T>
      </Fade>

      {/* beat 6 — the fix */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={368} y={314} size={13} fill={RED} anchor="start" weight={800}>
          {t("THE FIX — MAKE THE FIELD RADIAL", "THE FIX — MAKE THE FIELD RADIAL")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 0.5)} d="M 368 320 L 640 320" stroke={RED} sw={1.8} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.9)}>
        <T x={368} y={338} size={12.5} fill={INK} anchor="start">
          {t("wind the coil on a soft-iron cylinder and set", "wind the coil on a soft-iron cylinder and set")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.2)}>
        <T x={368} y={356} size={12.5} fill={INK} anchor="start">
          {t("it between CONCAVE pole pieces, not flat ones", "it between CONCAVE pole pieces, not flat ones")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={368} y={374} size={12.5} fill={GREEN} anchor="start" weight={800}>
          {t("B then always lies in the plane of the coil", "B then always lies in the plane of the coil")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.0)}>
        <T x={368} y={392} size={12.5} fill={GREEN} anchor="start" weight={800}>
          {t("⇒ the angle to the normal stays 90°, sin θ = 1", "⇒ the angle to the normal stays 90°, sin θ = 1")}
        </T>
      </Fade>

      {/* beat 7 — THE GALVANOMETER FIGURE */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={368} y={412} size={12.5} fill={MUTED} anchor="start">
          {t("N & S poles + soft-iron core", "N & S poles + soft-iron core")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={700} y={412} size={12.5} fill={AMBER_DARK} anchor="end" weight={800}>
          {t("coil", "coil")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.5)}>
        <Path d="M 400 428 L 477 428 A 74 74 0 0 0 477 524 L 400 524 Z" fill={CREAM} stroke="none" />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.5)}>
        <Path d="M 668 428 L 591 428 A 74 74 0 0 1 591 524 L 668 524 Z" fill={CREAM} stroke="none" />
      </Fade>
      <Draw
        on={beat >= 7}
        delay={dl(7, 0.7)}
        d="M 400 428 L 477 428 A 74 74 0 0 0 477 524 L 400 524 Z"
        stroke={INK}
        sw={2.2}
        dur={0.8}
      />
      <Draw
        on={beat >= 7}
        delay={dl(7, 1.1)}
        d="M 668 428 L 591 428 A 74 74 0 0 1 591 524 L 668 524 Z"
        stroke={INK}
        sw={2.2}
        dur={0.8}
      />
      <Fade on={beat >= 7} delay={dl(7, 1.7)}>
        <T x={430} y={484} size={17} fill={INK} weight={800}>N</T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.7)}>
        <T x={638} y={484} size={17} fill={INK} weight={800}>S</T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 2.0)} d={circD(534, 476, 26)} stroke={INK} sw={2.4} dur={0.6} />
      <Draw
        on={beat >= 7}
        delay={dl(7, 2.5)}
        d="M 508 430 L 560 430 L 560 522 L 508 522 Z"
        stroke={AMBER_DARK}
        sw={2.2}
        dur={0.7}
      />
      <Draw on={beat >= 7} delay={dl(7, 3.1)} d={arrowD(462, 476, 504, 476)} stroke={RED} sw={1.8} dur={0.3} />
      <Draw on={beat >= 7} delay={dl(7, 3.3)} d={arrowD(467, 445, 507, 463)} stroke={RED} sw={1.8} dur={0.3} />
      <Draw on={beat >= 7} delay={dl(7, 3.5)} d={arrowD(467, 507, 507, 489)} stroke={RED} sw={1.8} dur={0.3} />
      <Draw on={beat >= 7} delay={dl(7, 3.7)} d={arrowD(566, 476, 604, 476)} stroke={RED} sw={1.8} dur={0.3} />
      <Draw on={beat >= 7} delay={dl(7, 3.9)} d={arrowD(561, 463, 599, 446)} stroke={RED} sw={1.8} dur={0.3} />
      <Draw on={beat >= 7} delay={dl(7, 4.1)} d={arrowD(561, 489, 599, 506)} stroke={RED} sw={1.8} dur={0.3} />
      <Draw on={beat >= 7} delay={dl(7, 4.4)} d="M 534 522 L 534 556" stroke={INK} sw={1.8} dur={0.3} />
      <Draw
        on={beat >= 7}
        delay={dl(7, 4.7)}
        d="M 534 560 C 540 560, 540 552, 534 552 C 526 552, 526 568, 534 568 C 546 568, 546 544, 534 544 C 518 544, 518 576, 534 576"
        stroke={GREEN}
        sw={2}
        dur={1.0}
      />
      <Fade on={beat >= 7} delay={dl(7, 5.6)}>
        <T x={600} y={560} size={12.5} fill={GREEN} anchor="start" weight={800}>
          {t("hairspring", "hairspring")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 5.9)}>
        <T x={368} y={594} size={12.5} fill={RED} anchor="start" weight={800}>
          {t("the field runs RADIALLY, N → core → S", "the field runs RADIALLY, N → core → S")}
        </T>
      </Fade>

      {/* ═════════════ COLUMN C — x 718..1044 ═════════════ */}

      {/* beat 8 — the deflecting torque */}
      <Fade on={beat >= 8} delay={dl(8, 0.2)}>
        <T x={718} y={116} size={13} fill={RED} anchor="start" weight={800}>
          {t("DEFLECTING TORQUE", "DEFLECTING TORQUE")}
        </T>
      </Fade>
      <Draw on={beat >= 8} delay={dl(8, 0.5)} d="M 718 122 L 866 122" stroke={RED} sw={1.8} dur={0.3} />
      <Fade on={beat >= 8} delay={dl(8, 0.9)}>
        <T x={718} y={144} size={14} fill={INK} anchor="start" weight={800}>
          τ_def = N I A B      ( sin θ = 1 )
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 1.4)}>
        <T x={718} y={164} size={12.5} fill={GREEN} anchor="start" weight={800}>
          {t("the same effort however far it has turned", "the same effort however far it has turned")}
        </T>
      </Fade>

      {/* beat 9 — the restoring torque */}
      <Fade on={beat >= 9} delay={dl(9, 0.2)}>
        <T x={718} y={192} size={13} fill={RED} anchor="start" weight={800}>
          {t("RESTORING TORQUE — THE HAIRSPRING", "RESTORING TORQUE — THE HAIRSPRING")}
        </T>
      </Fade>
      <Draw on={beat >= 9} delay={dl(9, 0.5)} d="M 718 198 L 1010 198" stroke={RED} sw={1.8} dur={0.4} />
      <Fade on={beat >= 9} delay={dl(9, 0.9)}>
        <T x={718} y={216} size={12.5} fill={INK} anchor="start">
          {t("the coil turns through φ, the spring winds up", "the coil turns through φ, the spring winds up")}
        </T>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 1.3)}>
        <T x={718} y={238} size={14} fill={INK} anchor="start" weight={800}>
          τ_res = k φ
        </T>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 1.7)}>
        <T x={718} y={256} size={12.5} fill={MUTED} anchor="start">
          {t("k = torsional constant, in N·m per radian", "k = torsional constant, in N·m per radian")}
        </T>
      </Fade>

      {/* beat 10 — the balance */}
      <Fade on={beat >= 10} delay={dl(10, 0.2)}>
        <T x={718} y={284} size={13} fill={RED} anchor="start" weight={800}>
          {t("THE COIL SETTLES WHERE THEY BALANCE", "THE COIL SETTLES WHERE THEY BALANCE")}
        </T>
      </Fade>
      <Draw on={beat >= 10} delay={dl(10, 0.5)} d="M 718 290 L 1020 290" stroke={RED} sw={1.8} dur={0.4} />
      <Fade on={beat >= 10} delay={dl(10, 0.9)}>
        <T x={718} y={310} size={13.5} fill={INK} anchor="start" weight={800}>
          N I A B  =  k φ
        </T>
      </Fade>
      <Fade on={beat >= 10} delay={dl(10, 1.4)}>
        <Chip x={718} y={320} w={326} h={40} fill={CREAM} stroke={GREEN} textFill={INK} size={17}>
          φ = ( N A B / k ) I
        </Chip>
      </Fade>
      <Draw on={beat >= 10} delay={dl(10, 2.0)} d="M 780 366 L 982 366" stroke={GREEN} sw={1.8} dur={0.4} />
      <Draw on={beat >= 10} delay={dl(10, 2.2)} d="M 780 371 L 982 371" stroke={GREEN} sw={1.8} dur={0.4} />
      <Fade on={beat >= 10} delay={dl(10, 2.6)}>
        <T x={718} y={392} size={12.5} fill={GREEN} anchor="start" weight={800}>
          {t("φ ∝ I  ⇒  a linear, evenly spaced scale", "φ ∝ I  ⇒  a linear, evenly spaced scale")}
        </T>
      </Fade>

      {/* beat 11 — the two figures of merit */}
      <Fade on={beat >= 11} delay={dl(11, 0.2)}>
        <T x={718} y={420} size={13} fill={RED} anchor="start" weight={800}>
          {t("TWO FIGURES OF MERIT", "TWO FIGURES OF MERIT")}
        </T>
      </Fade>
      <Draw on={beat >= 11} delay={dl(11, 0.5)} d="M 718 426 L 894 426" stroke={RED} sw={1.8} dur={0.4} />
      <Fade on={beat >= 11} delay={dl(11, 0.9)}>
        <T x={718} y={444} size={13} fill={INK} anchor="start" weight={800}>
          {t("current sensitivity   S_I = N A B / k", "current sensitivity   S_I = N A B / k")}
        </T>
      </Fade>
      <Fade on={beat >= 11} delay={dl(11, 1.4)}>
        <T x={718} y={468} size={13} fill={INK} anchor="start" weight={800}>
          {t("voltage sensitivity   S_V = N A B / k R", "voltage sensitivity   S_V = N A B / k R")}
        </T>
      </Fade>
      <Fade on={beat >= 11} delay={dl(11, 1.8)}>
        <T x={718} y={490} size={12.5} fill={MUTED} anchor="start">
          {t("R = the resistance of the galvanometer coil", "R = the resistance of the galvanometer coil")}
        </T>
      </Fade>

      {/* beat 12 — the subtlety */}
      <Draw on={beat >= 12} delay={dl(12, 0.2)} d={ringD(940, 462, 62, 13)} stroke={RED} sw={2.2} dur={0.9} />
      <Fade on={beat >= 12} delay={dl(12, 1.1)}>
        <T x={718} y={518} size={13} fill={RED} anchor="start" weight={800}>
          {t("THE SUBTLETY EXAMINERS LOVE", "THE SUBTLETY EXAMINERS LOVE")}
        </T>
      </Fade>
      <Draw on={beat >= 12} delay={dl(12, 1.4)} d="M 718 524 L 942 524" stroke={RED} sw={1.8} dur={0.4} />
      <Fade on={beat >= 12} delay={dl(12, 1.8)}>
        <T x={718} y={542} size={12.5} fill={INK} anchor="start">
          {t("more turns N  ⇒  S_I rises", "more turns N  ⇒  S_I rises")}
        </T>
      </Fade>
      <Fade on={beat >= 12} delay={dl(12, 2.1)}>
        <T x={718} y={560} size={12.5} fill={INK} anchor="start">
          {t("but more wire ⇒ R rises too, and R sits in", "but more wire ⇒ R rises too, and R sits in")}
        </T>
      </Fade>
      <Fade on={beat >= 12} delay={dl(12, 2.4)}>
        <T x={718} y={576} size={12.5} fill={INK_LIGHT} anchor="start">
          {t("the denominator of S_V", "the denominator of S_V")}
        </T>
      </Fade>
      <Fade on={beat >= 12} delay={dl(12, 2.8)}>
        <T x={718} y={594} size={12.5} fill={RED} anchor="start" weight={800}>
          {t("so S_V does not rise — the effects cancel", "so S_V does not rise — the effects cancel")}
        </T>
      </Fade>
    </Scene>
  );
}
