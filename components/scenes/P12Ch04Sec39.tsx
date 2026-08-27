/**
 * P12Ch04 · Section 39 — "Worked Examples One and Two: Coil Moment and Torque,
 *                         and the Ground-State Moment"
 * Subtopic: The Magnetic Dipole — Current Loop, Revolving Electron, Bohr Magneton
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * WHAT IT USED TO SHOW (re-choreographed 2026-08-22)
 *   The interrupted-pass template: three "Badge + numbered prose" blocks and a
 *   full-width footer chip gated on beats 0, 1, 5 and 10 only, out of ELEVEN
 *   narration segments. Both substitutions of Example 1 (beats 2 and 3), the
 *   whole wording warning (beat 4), the statement of Example 2 (beat 6), its
 *   diagram (beat 7), the two traps (beat 8) and the one-line solve (beat 9)
 *   changed nothing on the board — a 245-second scene that moved four times.
 *   Drawn elements: the title underline and two short rules. The narration says
 *   "the diagram is worth a glance even for a numerical question, because it
 *   carries the sign" and there was no orbit, no electron, no coil, no field
 *   and no angle anywhere on the board.
 *
 * WHAT THE NARRATION TEACHES
 *   EXAMPLE 1 (boards, two parts). A circular coil, N = 100 turns, radius
 *   r = 5.0 cm, carrying I = 0.40 A, in a uniform field B = 0.50 T with its
 *   moment at 30° to the field.
 *     (a) m = N I A = N I π r², with r = 5.0 cm = 0.050 m so r² = 0.0025 m²:
 *         m = 100 × 0.40 × π × 0.0025 = 0.314 A m²  (the unit is a mark).
 *     (b) τ = m B sin θ = 0.314 × 0.50 × sin 30° = 0.314 × 0.50 × 0.500
 *         = 0.0785 N m.
 *   Then the wording warning: here the MOMENT makes 30°, which is the angle the
 *   formula wants, so it goes in directly; in Part Three the PLANE made the
 *   angle and had to be converted to the normal (90° − 30° = 60°) first.
 *   EXAMPLE 2 (NEET speed trap). Ground-state Bohr orbit, L = h/2π; find μ_l.
 *   The diagram carries the sign — the electron runs one way, the conventional
 *   current the other, so μ_l opposes L (magnitude only is asked here). Trap ①
 *   is writing μ = eL/m, which is exactly twice too large; trap ② is solving
 *   for v and r separately from Bohr's other relations — correct but wasteful.
 *   The speed move: μ_l = (e/2m)L with L = h/2π gives μ_l = e h / 4π m, which
 *   IS the Bohr magneton, ≈ 9.27 × 10⁻²⁴ A m². The ground-state orbital moment
 *   is exactly one Bohr magneton — by construction, not by coincidence.
 *
 * ARITHMETIC, RECOMPUTED
 *   A = π r² = π (0.050)² = π × 0.0025 = 7.854 × 10⁻³ m²
 *   m = 100 × 0.40 × 7.854 × 10⁻³ = 40 × 7.854 × 10⁻³ = 0.31416 → 0.314 A m² ✓
 *   τ = 0.314 × 0.50 × sin 30° = 0.314 × 0.50 × 0.500 = 0.0785 N m ✓
 *   μ_l = (e/2m)(h/2π) = e h / 4π m ≈ 9.27 × 10⁻²⁴ A m² = 1 μ_B ✓
 *
 * THE FIGURES (drawn, not asserted)
 *   · beat 1 — the coil in the field: three nested ellipses for the N turns,
 *     the circulating I, three amber field arrows for B, the dashed field
 *     direction at the coil's centre, the red moment m and the 30° arc between
 *     them, so every given in the question has a mark on the board.
 *   · beat 4 — the wording warning drawn twice: the MOMENT-at-30° case beside
 *     the PLANE-at-30° case, the second with the plane line AND its normal, and
 *     the 60° arc that the conversion produces.
 *   · beat 7 — the Bohr orbit: nucleus, orbit, electron, the electron's
 *     anticlockwise sense, the conventional current's clockwise sense outside,
 *     and L up against μ_l down — the sign the narration says the diagram
 *     carries.
 *
 * BEAT MAP (n_reveals = 11, gates 0…10 — every beat used)
 *   0  "two quick examples"   title + underline + subtitle
 *   1  Ex 1 statement         head + the coil-in-field figure + the givens
 *   2  (a) the moment         m = N I π r² + substitution chip + 0.314 A m²
 *   3  (b) the torque         τ = m B sin θ + substitution chip + 0.0785 N m
 *   4  read the wording       the two-picture warning (moment 30° ✓ / plane 30° ✗)
 *   5  Ex 2 is a speed trap   band rule + head
 *   6  Ex 2 statement         L = h/2π, find μ_l
 *   7  the diagram's sign     the Bohr-orbit figure with L and μ_l opposed
 *   8  two traps              the crossed-out μ = eL/m + the wasteful route
 *   9  the speed move         μ_l = (e/2m)L then μ_l = e h / 4π m
 *  10  recognise it           = μ_B ≈ 9.27 × 10⁻²⁴ A m², one Bohr magneton
 *
 * LAYOUT
 *   ROW 1  y110..330 — C1 x50..320 (figure) · C2 x316..596 (givens + (a)) ·
 *                      C3 x612..812 ((b)) · C4 x828..1044 (wording warning)
 *   rule   y340
 *   ROW 2  y350..596 — heads x50 (b5, b6) · C1 x50..250 (orbit figure) ·
 *                      C2 x270..600 (traps) · C3 x620..830 (solve) ·
 *                      C4 x850..1044 (the Bohr magneton)
 */

import React from "react";
import { Ellipse, Line } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD, crossD,
  INK, INK_LIGHT, MUTED, AMBER_DARK, GREEN, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

const rad = (d: number) => (d * Math.PI) / 180;

/** Circle as a closed two-arc path. */
function circleD(cx: number, cy: number, r: number): string {
  return `M ${cx - r} ${cy} A ${r} ${r} 0 1 1 ${cx + r} ${cy} A ${r} ${r} 0 1 1 ${cx - r} ${cy}`;
}

/** Plain arc about (cx,cy), a0 → a1 in degrees. */
function arcD(cx: number, cy: number, R: number, a0: number, a1: number): string {
  const x0 = cx + R * Math.cos(rad(a0));
  const y0 = cy + R * Math.sin(rad(a0));
  const x1 = cx + R * Math.cos(rad(a1));
  const y1 = cy + R * Math.sin(rad(a1));
  const large = Math.abs(a1 - a0) > 180 ? 1 : 0;
  const sweep = a1 > a0 ? 1 : 0;
  return `M ${x0.toFixed(1)} ${y0.toFixed(1)} A ${R} ${R} 0 ${large} ${sweep} ${x1.toFixed(1)} ${y1.toFixed(1)}`;
}

/** Arc from a0° to a1° about (cx,cy) with an arrowhead at the far end. */
function arcArrowD(cx: number, cy: number, R: number, a0: number, a1: number): string {
  const x1 = cx + R * Math.cos(rad(a1));
  const y1 = cy + R * Math.sin(rad(a1));
  const s = a1 > a0 ? 1 : -1;
  const ang = Math.atan2(s * Math.cos(rad(a1)), s * -Math.sin(rad(a1)));
  const h = 10;
  return (
    `${arcD(cx, cy, R, a0, a1)}` +
    ` M ${(x1 - h * Math.cos(ang - 0.46)).toFixed(1)} ${(y1 - h * Math.sin(ang - 0.46)).toFixed(1)}` +
    ` L ${x1.toFixed(1)} ${y1.toFixed(1)}` +
    ` L ${(x1 - h * Math.cos(ang + 0.46)).toFixed(1)} ${(y1 - h * Math.sin(ang + 0.46)).toFixed(1)}`
  );
}

export default function P12Ch04Sec39({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ── beat 0 — title ─────────────────────────────────────────── */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={44} size={25} fill={RED} script>
          {t("Coil Moment & Torque · The Ground-State Moment",
             "Coil Moment & Torque · The Ground-State Moment")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.5)}
        d="M 252 60 C 460 56, 660 64, 828 58" stroke={RED} sw={2.2} dur={0.7} />
      <Fade on={beat >= 0} delay={dl(0, 3.0)}>
        <T x={540} y={88} size={13} fill={MUTED} script>
          {t("two quick examples — recognising the right relation beats heavy arithmetic",
             "two quick examples — recognising the right relation beats heavy arithmetic")}
        </T>
      </Fade>

      {/* ══════════ ROW 1 · beat 1 — Example 1 head, figure and givens ══════════ */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={50} y={122} size={14} fill={RED} weight={800} anchor="start">
          {t("EXAMPLE 1 · BOARD LEVEL — a coil's moment, then its torque",
             "EXAMPLE 1 · BOARD LEVEL — a coil's moment, then its torque")}
        </T>
      </Fade>
      {/* the coil, three nested turns */}
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <Ellipse cx={140} cy={238} rx={48} ry={16} fill="none" stroke={INK} strokeWidth={2.4} />
        <Ellipse cx={140} cy={238} rx={41} ry={13} fill="none" stroke={INK} strokeWidth={1.8} />
        <Ellipse cx={140} cy={238} rx={34} ry={10} fill="none" stroke={INK} strokeWidth={1.4} />
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.5)} d={arrowD(92, 230, 92, 246)} stroke={GREEN_DARK} sw={2.2} dur={0.3} />
      <Draw on={beat >= 1} delay={dl(1, 1.7)} d={arrowD(188, 246, 188, 230)} stroke={GREEN_DARK} sw={2.2} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 2.0)}>
        <T x={140} y={268} size={11.5} fill={GREEN_DARK} weight={800}>I = 0.40 A</T>
        <T x={140} y={288} size={11.5} fill={INK} weight={800}>N = 100 turns</T>
      </Fade>
      {/* the uniform field */}
      <Draw on={beat >= 1} delay={dl(1, 2.5)} d={arrowD(236, 278, 236, 166)} stroke={AMBER_DARK} sw={2} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 2.7)} d={arrowD(268, 278, 268, 166)} stroke={AMBER_DARK} sw={2} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 2.9)} d={arrowD(300, 278, 300, 166)} stroke={AMBER_DARK} sw={2} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 3.3)}>
        <T x={268} y={298} size={11.5} fill={AMBER_DARK} weight={800}>B = 0.50 T</T>
      </Fade>
      {/* the field direction at the coil's centre, the moment, the angle */}
      <Fade on={beat >= 1} delay={dl(1, 3.7)}>
        <Line x1={140} y1={238} x2={140} y2={168} stroke={AMBER_DARK} strokeWidth={1.4} strokeDasharray="6 5" />
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 4.1)} d={arrowD(140, 238, 174, 179)} stroke={RED} sw={2.6} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 4.5)}>
        <T x={182} y={174} size={13.5} fill={RED} script anchor="start">m</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 4.9)} d={arcD(140, 238, 46, -90, -60)} stroke={RED} sw={1.6} dur={0.35} />
      <Fade on={beat >= 1} delay={dl(1, 5.2)}>
        <T x={154} y={182} size={11.5} fill={RED} weight={800}>30°</T>
      </Fade>
      {/* the givens, in words */}
      <Fade on={beat >= 1} delay={dl(1, 5.8)}>
        <T x={316} y={142} size={12} fill={INK} weight={800} anchor="start">
          {t("N = 100 turns · r = 5.0 cm", "N = 100 turns · r = 5.0 cm")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 6.2)}>
        <T x={316} y={160} size={12} fill={INK} weight={800} anchor="start">
          {t("I = 0.40 A · B = 0.50 T", "I = 0.40 A · B = 0.50 T")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 6.6)}>
        <T x={316} y={178} size={12} fill={INK} weight={800} anchor="start">
          {t("the MOMENT makes 30° with B", "the MOMENT makes 30° with B")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 7.0)}>
        <T x={316} y={196} size={12} fill={MUTED} weight={700} anchor="start">
          {t("find (a) m,  then (b) τ", "find (a) m,  then (b) τ")}
        </T>
      </Fade>

      {/* ── beat 2 — part (a) ─────────────────────────────────────── */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={316} y={224} size={13} fill={RED} weight={800} anchor="start">
          {t("(a)  m = N I A,  A = π r²", "(a)  m = N I A,  A = π r²")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.9)}>
        <T x={316} y={246} size={11.5} fill={INK_LIGHT} weight={600} anchor="start">
          {t("r = 5.0 cm = 0.050 m  ⇒  r² = 0.0025 m²", "r = 5.0 cm = 0.050 m  ⇒  r² = 0.0025 m²")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.7)}>
        <Chip x={316} y={256} w={280} h={34} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={11.5}>
          m = 100 × 0.40 × π × 0.0025
        </Chip>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.8)}>
        <Chip x={316} y={296} w={280} h={34} fill={GREEN} textFill="#ffffff" size={13}>
          m = 0.314 A m²
        </Chip>
      </Fade>

      {/* ── beat 3 — part (b) ─────────────────────────────────────── */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={612} y={142} size={13} fill={RED} weight={800} anchor="start">
          {t("(b)  τ = m B sin θ", "(b)  τ = m B sin θ")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={612} y={164} size={11.5} fill={INK_LIGHT} weight={600} anchor="start">
          {t("the moment already makes 30°", "the moment already makes 30°")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <Chip x={612} y={174} w={200} h={34} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={11}>
          τ = 0.314 × 0.50 × sin 30°
        </Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.3)}>
        <T x={612} y={230} size={11.5} fill={INK_LIGHT} weight={600} anchor="start">
          {t("sin 30° = 0.500", "sin 30° = 0.500")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 3.0)}>
        <Chip x={612} y={240} w={200} h={34} fill={GREEN} textFill="#ffffff" size={12.5}>
          τ = 0.0785 N m
        </Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 4.0)}>
        <T x={612} y={298} size={11} fill={RED} weight={800} anchor="start">
          {t("keep every unit attached —", "keep every unit attached —")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 4.5)}>
        <T x={612} y={316} size={11} fill={RED} weight={800} anchor="start">
          {t("it is a mark in itself", "it is a mark in itself")}
        </T>
      </Fade>

      {/* ── beat 4 — the wording warning, drawn twice ─────────────── */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={828} y={142} size={12.5} fill={RED} weight={800} anchor="start">
          {t("READ THE WORDING", "READ THE WORDING")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.7)}>
        <T x={828} y={166} size={11} fill={INK} weight={800} anchor="start">
          {t("MOMENT at 30°", "MOMENT at 30°")}
        </T>
        <T x={944} y={166} size={11} fill={INK} weight={800} anchor="start">
          {t("PLANE at 30°", "PLANE at 30°")}
        </T>
      </Fade>
      {/* picture 1 — the moment makes the angle */}
      <Draw on={beat >= 4} delay={dl(4, 1.1)} d={arrowD(876, 266, 876, 196)} stroke={AMBER_DARK} sw={2} dur={0.35} />
      <Draw on={beat >= 4} delay={dl(4, 1.4)} d={arrowD(876, 240, 896, 205.4)} stroke={RED} sw={2.2} dur={0.3} />
      <Draw on={beat >= 4} delay={dl(4, 1.7)} d={arcD(876, 240, 30, -90, -60)} stroke={RED} sw={1.5} dur={0.3} />
      <Fade on={beat >= 4} delay={dl(4, 2.0)}>
        <T x={904} y={228} size={10.5} fill={RED} weight={800} anchor="start">30°</T>
      </Fade>
      {/* picture 2 — the plane makes the angle, so the normal makes 60° */}
      <Draw on={beat >= 4} delay={dl(4, 2.4)} d={arrowD(992, 266, 992, 196)} stroke={AMBER_DARK} sw={2} dur={0.35} />
      <Draw on={beat >= 4} delay={dl(4, 2.7)} d="M 1012 205.4 L 972 274.6" stroke={INK} sw={2.4} dur={0.35} />
      <Draw on={beat >= 4} delay={dl(4, 3.0)} d={arrowD(992, 240, 957, 220)} stroke={RED} sw={2.2} dur={0.3} />
      <Draw on={beat >= 4} delay={dl(4, 3.3)} d={arcD(992, 240, 26, -90, -150)} stroke={RED} sw={1.5} dur={0.3} />
      <Fade on={beat >= 4} delay={dl(4, 3.6)}>
        <T x={966} y={206} size={10.5} fill={RED} weight={800} anchor="end">60°</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 4.0)}>
        <T x={828} y={296} size={11} fill={GREEN_DARK} weight={800} anchor="start">
          {t("use 30° directly", "use 30° directly")}
        </T>
        <T x={944} y={296} size={11} fill={RED} weight={800} anchor="start">
          {t("90° − 30° = 60°", "90° − 30° = 60°")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 4.6)}>
        <T x={828} y={320} size={11} fill={INK} weight={700} anchor="start">
          {t("underline the word before you start", "underline the word before you start")}
        </T>
      </Fade>

      {/* ══════════ band rule ══════════ */}
      <Draw on={beat >= 5} delay={dl(5, 0.1)} d="M 50 340 H 1044" stroke={INK} sw={1.5} dur={0.9} />

      {/* ── beat 5 — Example 2 head ───────────────────────────────── */}
      <Fade on={beat >= 5} delay={dl(5, 0.7)}>
        <T x={50} y={364} size={14} fill={RED} weight={800} anchor="start">
          {t("EXAMPLE 2 · A NEET SPEED TRAP — the right method is one line, the wrong ones are long",
             "EXAMPLE 2 · A NEET SPEED TRAP — the right method is one line, the wrong ones are long")}
        </T>
      </Fade>

      {/* ── beat 6 — the statement ────────────────────────────────── */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={50} y={386} size={12.5} fill={INK} weight={800} anchor="start">
          {t("Bohr ground state: the electron's orbital angular momentum is L = h / 2π.  Find its orbital magnetic moment.",
             "Bohr ground state: the electron's orbital angular momentum is L = h / 2π.  Find its orbital magnetic moment.")}
        </T>
      </Fade>

      {/* ── beat 7 — the orbit, and the sign it carries ───────────── */}
      <Draw on={beat >= 7} delay={dl(7, 0.3)} d={circleD(150, 500, 48)} stroke={INK} sw={2} dur={0.9} />
      <Draw on={beat >= 7} delay={dl(7, 1.3)} d="M 144 500 H 156 M 150 494 V 506" stroke={AMBER_DARK} sw={2.2} dur={0.3} />
      <Draw on={beat >= 7} delay={dl(7, 1.7)} d={circleD(183.9, 466.1, 6)} stroke={INK} sw={2} dur={0.3} fill={INK} />
      <Fade on={beat >= 7} delay={dl(7, 2.0)}>
        <T x={196} y={456} size={11.5} fill={INK} weight={800} anchor="start">e⁻</T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 2.4)} d={arcArrowD(150, 500, 32, 205, 150)} stroke={INK} sw={2} dur={0.5} />
      <Draw on={beat >= 7} delay={dl(7, 3.0)} d={arcArrowD(150, 500, 66, -25, 30)} stroke={GREEN} sw={2.2} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 3.5)}>
        <T x={224} y={514} size={13} fill={GREEN} script anchor="start">I</T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 3.9)} d={arrowD(72, 496, 72, 442)} stroke={AMBER_DARK} sw={2.4} dur={0.35} />
      <Fade on={beat >= 7} delay={dl(7, 4.3)}>
        <T x={64} y={468} size={13} fill={AMBER_DARK} script anchor="end">L</T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 4.7)} d={arrowD(72, 512, 72, 566)} stroke={RED} sw={2.4} dur={0.35} />
      <Fade on={beat >= 7} delay={dl(7, 5.1)}>
        <T x={64} y={544} size={13} fill={RED} script anchor="end">μ_l</T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 5.6)}>
        <T x={50} y={590} size={11} fill={RED} weight={800} anchor="start">
          {t("μ_l opposes L — magnitude only here", "μ_l opposes L — magnitude only here")}
        </T>
      </Fade>

      {/* ── beat 8 — the two traps ────────────────────────────────── */}
      <Fade on={beat >= 8} delay={dl(8, 0.2)}>
        <T x={270} y={420} size={12.5} fill={RED} weight={800} anchor="start">
          {t("TWO TRAPS", "TWO TRAPS")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 0.7)}>
        <T x={270} y={444} size={12} fill={INK} weight={700} anchor="start">
          {t("① dropping the factor of two —", "① dropping the factor of two —")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 1.3)}>
        <Chip x={270} y={454} w={200} h={32} fill={CREAM} stroke={RED} textFill={RED} size={12}>
          μ = e L / m
        </Chip>
      </Fade>
      <Draw on={beat >= 8} delay={dl(8, 2.2)} d={crossD(282, 458, 176, 24)} stroke={RED} sw={2.4} dur={0.4} />
      <Fade on={beat >= 8} delay={dl(8, 2.8)}>
        <T x={270} y={510} size={11.5} fill={RED} weight={700} anchor="start">
          {t("exactly twice too large — the", "exactly twice too large — the")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 3.3)}>
        <T x={270} y={528} size={11.5} fill={RED} weight={700} anchor="start">
          {t("commonest slip in this subtopic", "commonest slip in this subtopic")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 4.0)}>
        <T x={270} y={556} size={11.5} fill={INK} weight={700} anchor="start">
          {t("② solving for v and r separately from", "② solving for v and r separately from")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 4.5)}>
        <T x={270} y={574} size={11.5} fill={INK} weight={700} anchor="start">
          {t("Bohr's other relations — not wrong,", "Bohr's other relations — not wrong,")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 5.0)}>
        <T x={270} y={592} size={11.5} fill={INK} weight={700} anchor="start">
          {t("just minutes long, with rounding errors", "just minutes long, with rounding errors")}
        </T>
      </Fade>

      {/* ── beat 9 — the speed move ───────────────────────────────── */}
      <Fade on={beat >= 9} delay={dl(9, 0.2)}>
        <T x={620} y={420} size={12.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("THE SPEED MOVE", "THE SPEED MOVE")}
        </T>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 0.7)}>
        <T x={620} y={444} size={11.5} fill={INK_LIGHT} weight={600} anchor="start">
          {t("L was handed to us directly", "L was handed to us directly")}
        </T>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 1.3)}>
        <Chip x={620} y={454} w={210} h={34} fill={CREAM} stroke={GREEN} textFill={INK} size={12.5}>
          μ_l = (e / 2m) L
        </Chip>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 2.2)}>
        <T x={620} y={510} size={11.5} fill={INK_LIGHT} weight={600} anchor="start">
          {t("substitute L = h / 2π", "substitute L = h / 2π")}
        </T>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 2.8)}>
        <Chip x={620} y={520} w={210} h={34} fill={CREAM} stroke={GREEN} textFill={INK} size={12.5}>
          μ_l = e h / 4π m
        </Chip>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 3.8)}>
        <T x={620} y={576} size={11.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("one step — no v, no r", "one step — no v, no r")}
        </T>
      </Fade>

      {/* ── beat 10 — recognise the Bohr magneton ─────────────────── */}
      <Fade on={beat >= 10} delay={dl(10, 0.2)}>
        <T x={850} y={420} size={12.5} fill={RED} weight={800} anchor="start">
          {t("RECOGNISE IT", "RECOGNISE IT")}
        </T>
      </Fade>
      <Fade on={beat >= 10} delay={dl(10, 0.7)}>
        <Chip x={850} y={430} w={194} h={38} fill={GREEN} textFill="#ffffff" size={14}>
          = μ_B
        </Chip>
      </Fade>
      <Fade on={beat >= 10} delay={dl(10, 1.6)}>
        <T x={850} y={490} size={12} fill={INK} weight={800} anchor="start">
          {t("≈ 9.27 × 10⁻²⁴ A m²", "≈ 9.27 × 10⁻²⁴ A m²")}
        </T>
      </Fade>
      <Fade on={beat >= 10} delay={dl(10, 2.2)}>
        <T x={850} y={512} size={11.5} fill={INK_LIGHT} weight={600} anchor="start">
          {t("the ground-state orbital moment", "the ground-state orbital moment")}
        </T>
      </Fade>
      <Fade on={beat >= 10} delay={dl(10, 2.7)}>
        <T x={850} y={530} size={11.5} fill={INK_LIGHT} weight={600} anchor="start">
          {t("is exactly one Bohr magneton", "is exactly one Bohr magneton")}
        </T>
      </Fade>
      <Fade on={beat >= 10} delay={dl(10, 3.4)}>
        <T x={850} y={558} size={11.5} fill={RED} weight={800} anchor="start">
          {t("no coincidence — μ_B was defined", "no coincidence — μ_B was defined")}
        </T>
      </Fade>
      <Fade on={beat >= 10} delay={dl(10, 3.9)}>
        <T x={850} y={576} size={11.5} fill={RED} weight={800} anchor="start">
          {t("as the smallest orbit's moment.", "as the smallest orbit's moment.")}
        </T>
      </Fade>
      <Fade on={beat >= 10} delay={dl(10, 4.4)}>
        <T x={850} y={594} size={11.5} fill={RED} weight={800} anchor="start">
          {t("Memorise this result outright.", "Memorise this result outright.")}
        </T>
      </Fade>
    </Scene>
  );
}
