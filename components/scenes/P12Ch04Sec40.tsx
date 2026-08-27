/**
 * P12Ch04 · Section 40 — "Worked Examples Three and Four: Far Field, and the
 *                         Vibration Magnetometer"
 * Subtopic: The Magnetic Dipole — Current Loop, Revolving Electron, Bohr Magneton
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * WHAT IT USED TO SHOW (re-choreographed 2026-08-22)
 *   The interrupted-pass template: three "Badge + numbered prose" blocks and a
 *   full-width footer chip gated on beats 0, 4, 6 and 11 only, out of TWELVE
 *   narration segments. The whole of Example 3's set-up, its moment and its
 *   justification (beats 1–3, 90 s) landed in one lump, and then beats 5, 7, 8,
 *   9 and 10 — the statement of Example 4, its diagram, the small-angle step,
 *   Newton's second law for rotation and the entire period calculation, some
 *   180 s — moved nothing at all. Drawn elements on the whole board: the title
 *   underline plus two short rules. The narration says "look at the diagram
 *   first: the amber arrows are the uniform field, the dipole moment in red has
 *   been tipped by a small angle, the green arrow shows the restoring torque" —
 *   and the board had no field, no dipole, no angle and no torque on it.
 *
 * WHAT THE NARRATION TEACHES
 *   EXAMPLE 3 (JEE Main) — the content is the JUDGEMENT, not the arithmetic.
 *   A small loop, N = 50, R = 2.0 cm, I = 3.0 A; find B on the axis at
 *   x = 50 cm. Two routes exist (exact on-axis, or the dipole far field); the
 *   marks are in justifying the second. m = 50 × 3.0 × π × (0.020)² with area
 *   π × 4 × 10⁻⁴ m² gives m = 0.188 A m². Justify: x/R = 50/2 = 25, comfortably
 *   in the far-field regime (at x = 3 cm it would fail and the exact expression
 *   would be needed). Then μ₀/4π = 10⁻⁷ exactly, so
 *   B = 10⁻⁷ × 2(0.188)/(0.50)³ = 10⁻⁷ × 0.377/0.125 = 3.0 × 10⁻⁷ T.
 *   EXAMPLE 4 (JEE Advanced) — a dipole oscillating in a uniform field.
 *   τ = − m B sin θ ≈ − m B θ for small θ (in radians); I d²θ/dt² = − m B θ, so
 *   α = − (mB/I) θ — acceleration proportional to and opposite the displacement,
 *   which is SHM with ω² = mB/I. Hence T = 2π √(I / mB). Substituting
 *   I = 2.0 × 10⁻⁴, m B = 0.20 × 0.10 = 0.020: I/mB = 0.010, √0.010 = 0.10, so
 *   T = 2π(0.10) = 0.63 s. This is the vibration magnetometer, and the answer
 *   has the standard pendulum shape with mB as the restoring constant.
 *
 * ARITHMETIC, RECOMPUTED
 *   A = π(0.020)² = π × 4 × 10⁻⁴ = 1.2566 × 10⁻³ m²
 *   m = 50 × 3.0 × 1.2566 × 10⁻³ = 150 × 1.2566 × 10⁻³ = 0.18850 → 0.188 A m² ✓
 *   2m = 0.377 ·  x³ = 0.50³ = 0.125 ·  0.377/0.125 = 3.016 → 3.0
 *   B = 3.0 × 10⁻⁷ T ✓            x/R = 50 cm / 2 cm = 25 ✓
 *   I/mB = 2.0 × 10⁻⁴ / 0.020 = 0.010 ·  √0.010 = 0.10
 *   T = 2π × 0.10 = 0.6283 → 0.63 s ✓
 *
 * THE FIGURES (drawn, not asserted)
 *   · beat 1 — the small loop seen edge-on with its radius marked, the axis
 *     dashed out to the field point P, the field B drawn there, and the 50 cm
 *     dimensioned underneath: the loop is drawn TINY against a long x, so the
 *     x/R = 25 of beat 3 is visible before it is computed.
 *   · beat 7 — the oscillating dipole exactly as the narration describes it:
 *     three amber arrows for the uniform field, the equilibrium direction
 *     dashed, the red moment tipped away by θ with the angle arced, and a green
 *     curved arrow swinging back toward B for the restoring torque.
 *
 * BEAT MAP (n_reveals = 12, gates 0…11 — every beat used)
 *   0  framing            title + underline + subtitle
 *   1  Ex 3 set-up        head + the loop/axis/P/B/x figure + the givens
 *   2  the moment         m = 50 × 3.0 × π × (0.020)²  →  0.188 A m²
 *   3  justify it         x / R = 50 / 2 = 25 + "at 3 cm it would fail"
 *   4  substitute         B = 10⁻⁷ × 2(0.188)/(0.50)³  →  3.0 × 10⁻⁷ T
 *   5  Ex 4 head          band rule + head
 *   6  Ex 4 statement     the loop, its inertia, the small displacement
 *   7  the diagram        the oscillating-dipole figure + the colour key
 *   8  restoring torque   τ = − m B sin θ ≈ − m B θ + why the minus, why small θ
 *   9  Newton for rotation I d²θ/dt² = − m B θ ⇒ α = − (mB/I)θ ⇒ ω² = mB/I
 *  10  the period         T = 2π√(I/mB) + the substitution + T = 0.63 s
 *  11  what it really is  footer: the vibration magnetometer, pendulum shape
 *
 * LAYOUT
 *   ROW 1 y100..300 — C1 x50..300 (figure) · C2 x316..560 (b2) ·
 *                     C3 x576..800 (b3) · C4 x816..1044 (b4)
 *   rule  y310
 *   ROW 2 y320..596 — heads x50 (b5, b6) · C1 x50..390 (figure, b7) ·
 *                     x400..610 (b8) · x626..836 (b9) · x852..1044 (b10) ·
 *                     footer x400..1044 (b11)
 */

import React from "react";
import { Circle, Ellipse, Line } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD,
  INK, INK_LIGHT, MUTED, AMBER_DARK, GREEN, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

const rad = (d: number) => (d * Math.PI) / 180;

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

export default function P12Ch04Sec40({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ── beat 0 — title ─────────────────────────────────────────── */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={44} size={25} fill={RED} script>
          {t("The Far Field, and the Vibration Magnetometer",
             "The Far Field, and the Vibration Magnetometer")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.5)}
        d="M 252 60 C 460 56, 660 64, 828 58" stroke={RED} sw={2.2} dur={0.7} />
      <Fade on={beat >= 0} delay={dl(0, 3.0)}>
        <T x={540} y={88} size={13} fill={MUTED} script>
          {t("knowing WHEN you may approximate · and a dipole turned into a pendulum",
             "knowing WHEN you may approximate · and a dipole turned into a pendulum")}
        </T>
      </Fade>

      {/* ══════════ ROW 1 · beat 1 — Example 3 set-up ══════════ */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={50} y={122} size={14} fill={RED} weight={800} anchor="start">
          {t("EXAMPLE 3 · JEE MAIN — the real question is whether you may approximate at all",
             "EXAMPLE 3 · JEE MAIN — the real question is whether you may approximate at all")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <Ellipse cx={80} cy={200} rx={6} ry={18} fill="none" stroke={INK} strokeWidth={2.4} />
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.4)} d="M 80 200 L 80 186" stroke={MUTED} sw={1.6} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 1.7)}>
        <T x={92} y={180} size={10.5} fill={INK} weight={800} anchor="start">R = 2.0 cm</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.1)}>
        <Line x1={80} y1={200} x2={236} y2={200} stroke={MUTED} strokeWidth={1.5} strokeDasharray="7 5" />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.5)}>
        <Circle cx={240} cy={200} r={5} fill={INK} />
        <T x={240} y={186} size={11.5} fill={INK} weight={800}>P</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2.9)} d={arrowD(240, 200, 278, 200)} stroke={GREEN} sw={2.2} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 3.2)}>
        <T x={284} y={205} size={12.5} fill={GREEN} script anchor="start">B</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 3.6)}
        d="M 80 236 V 248 M 240 236 V 248 M 80 242 H 240" stroke={INK} sw={1.4} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 4.1)}>
        <T x={160} y={230} size={11.5} fill={INK} weight={800}>x = 50 cm</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 4.6)}>
        <T x={50} y={276} size={11.5} fill={INK} weight={800} anchor="start">
          {t("N = 50 turns · I = 3.0 A", "N = 50 turns · I = 3.0 A")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 5.1)}>
        <T x={50} y={294} size={11.5} fill={MUTED} weight={700} anchor="start">
          {t("two routes — one is much faster", "two routes — one is much faster")}
        </T>
      </Fade>

      {/* ── beat 2 — the moment ───────────────────────────────────── */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={316} y={142} size={13} fill={RED} weight={800} anchor="start">
          {t("① FIRST THE MOMENT", "① FIRST THE MOMENT")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={316} y={164} size={11.5} fill={INK_LIGHT} weight={600} anchor="start">
          {t("the far-field route needs m", "the far-field route needs m")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.4)}>
        <Chip x={316} y={174} w={244} h={34} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={11}>
          m = 50 × 3.0 × π × (0.020)²
        </Chip>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.3)}>
        <T x={316} y={230} size={11.5} fill={INK_LIGHT} weight={600} anchor="start">
          {t("area = π × 4 × 10⁻⁴ m²", "area = π × 4 × 10⁻⁴ m²")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.9)}>
        <Chip x={316} y={240} w={244} h={34} fill={GREEN} textFill="#ffffff" size={12.5}>
          m = 0.188 A m²
        </Chip>
      </Fade>

      {/* ── beat 3 — justify the approximation ────────────────────── */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={576} y={142} size={13} fill={RED} weight={800} anchor="start">
          {t("② JUSTIFY IT FIRST", "② JUSTIFY IT FIRST")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={576} y={164} size={11.5} fill={INK_LIGHT} weight={600} anchor="start">
          {t("this is the step students skip", "this is the step students skip")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.4)}>
        <Chip x={576} y={174} w={224} h={34} fill={CREAM} stroke={RED} textFill={INK} size={12}>
          x / R = 50 / 2 = 25
        </Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.3)}>
        <T x={576} y={230} size={11.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("25 times the radius — the", "25 times the radius — the")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.8)}>
        <T x={576} y={248} size={11.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("dipole formula is excellent here", "dipole formula is excellent here")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 3.5)}>
        <T x={576} y={274} size={11} fill={RED} weight={800} anchor="start">
          {t("at x = 3 cm it would FAIL —", "at x = 3 cm it would FAIL —")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 4.0)}>
        <T x={576} y={292} size={11} fill={RED} weight={800} anchor="start">
          {t("use the exact expression there", "use the exact expression there")}
        </T>
      </Fade>

      {/* ── beat 4 — substitute into the axial far field ──────────── */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={816} y={142} size={13} fill={RED} weight={800} anchor="start">
          {t("③ SUBSTITUTE", "③ SUBSTITUTE")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={816} y={164} size={11.5} fill={INK_LIGHT} weight={600} anchor="start">
          {t("μ₀ / 4π = 10⁻⁷ exactly", "μ₀ / 4π = 10⁻⁷ exactly")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.4)}>
        <Chip x={816} y={174} w={228} h={34} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={10.5}>
          B = 10⁻⁷ × 2(0.188) / (0.50)³
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.3)}>
        <T x={816} y={230} size={11} fill={INK_LIGHT} weight={600} anchor="start">
          {t("2 × 0.188 = 0.377 · 0.50³ = 0.125", "2 × 0.188 = 0.377 · 0.50³ = 0.125")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.8)}>
        <T x={816} y={248} size={11} fill={INK_LIGHT} weight={600} anchor="start">
          {t("0.377 / 0.125 = 3.0", "0.377 / 0.125 = 3.0")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 3.4)}>
        <Chip x={816} y={258} w={228} h={34} fill={GREEN} textFill="#ffffff" size={12}>
          B = 3.0 × 10⁻⁷ T
        </Chip>
      </Fade>

      {/* ══════════ band rule ══════════ */}
      <Draw on={beat >= 5} delay={dl(5, 0.1)} d="M 50 310 H 1044" stroke={INK} sw={1.5} dur={0.9} />

      {/* ── beat 5 — Example 4 head ───────────────────────────────── */}
      <Fade on={beat >= 5} delay={dl(5, 0.7)}>
        <T x={50} y={340} size={14} fill={RED} weight={800} anchor="start">
          {t("EXAMPLE 4 · JEE ADVANCED — a dipole in a field, turned into an oscillator",
             "EXAMPLE 4 · JEE ADVANCED — a dipole in a field, turned into an oscillator")}
        </T>
      </Fade>

      {/* ── beat 6 — the statement ────────────────────────────────── */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={50} y={362} size={12} fill={INK} weight={800} anchor="start">
          {t("a current loop of moment m and moment of inertia I about a diameter sits aligned with a uniform field B.",
             "a current loop of moment m and moment of inertia I about a diameter sits aligned with a uniform field B.")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.2)}>
        <T x={50} y={380} size={12} fill={INK} weight={800} anchor="start">
          {t("It is given a tiny angular displacement and released — show it is SHM, find the period, then evaluate it.",
             "It is given a tiny angular displacement and released — show it is SHM, find the period, then evaluate it.")}
        </T>
      </Fade>

      {/* ── beat 7 — the oscillating dipole, drawn ────────────────── */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={50} y={412} size={12.5} fill={RED} weight={800} anchor="start">
          {t("LOOK AT THE DIAGRAM FIRST", "LOOK AT THE DIAGRAM FIRST")}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 0.8)} d={arrowD(150, 572, 150, 444)} stroke={AMBER_DARK} sw={2} dur={0.4} />
      <Draw on={beat >= 7} delay={dl(7, 1.0)} d={arrowD(190, 572, 190, 444)} stroke={AMBER_DARK} sw={2} dur={0.4} />
      <Draw on={beat >= 7} delay={dl(7, 1.2)} d={arrowD(230, 572, 230, 444)} stroke={AMBER_DARK} sw={2} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={190} y={590} size={12} fill={AMBER_DARK} weight={800}>B (uniform)</T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 2.0)}>
        <Line x1={300} y1={510} x2={300} y2={430} stroke={AMBER_DARK} strokeWidth={1.4} strokeDasharray="6 5" />
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 2.4)} d={arrowD(300, 510, 332.9, 448.2)} stroke={RED} sw={2.6} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 2.8)}>
        <T x={342} y={444} size={13.5} fill={RED} script anchor="start">m</T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 3.2)} d={arcD(300, 510, 44, -90, -62)} stroke={RED} sw={1.6} dur={0.3} />
      <Fade on={beat >= 7} delay={dl(7, 3.5)}>
        <T x={314} y={456} size={12} fill={RED} weight={800} anchor="start">θ</T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 3.9)} d={arcArrowD(300, 510, 86, -55, -85)} stroke={GREEN} sw={2.4} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 4.4)}>
        <T x={356} y={436} size={13} fill={GREEN} script anchor="start">τ</T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 4.9)}>
        <T x={50} y={450} size={11} fill={AMBER_DARK} weight={800} anchor="start">
          {t("amber arrows =", "amber arrows =")}
        </T>
        <T x={50} y={468} size={11} fill={AMBER_DARK} weight={800} anchor="start">
          {t("the uniform field", "the uniform field")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 5.5)}>
        <T x={50} y={492} size={11} fill={RED} weight={800} anchor="start">
          {t("red = the moment,", "red = the moment,")}
        </T>
        <T x={50} y={510} size={11} fill={RED} weight={800} anchor="start">
          {t("tipped by θ", "tipped by θ")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 6.1)}>
        <T x={50} y={534} size={11} fill={GREEN} weight={800} anchor="start">
          {t("green = the", "green = the")}
        </T>
        <T x={50} y={552} size={11} fill={GREEN} weight={800} anchor="start">
          {t("restoring torque", "restoring torque")}
        </T>
      </Fade>

      {/* ── beat 8 — the restoring torque and the small angle ─────── */}
      <Fade on={beat >= 8} delay={dl(8, 0.2)}>
        <T x={400} y={412} size={12} fill={RED} weight={800} anchor="start">
          {t("① RESTORING TORQUE", "① RESTORING TORQUE")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 0.8)}>
        <T x={400} y={432} size={11} fill={INK_LIGHT} weight={600} anchor="start">
          {t("τ = − m B sin θ", "τ = − m B sin θ")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 1.2)}>
        <T x={400} y={450} size={11} fill={INK_LIGHT} weight={600} anchor="start">
          {t("minus: it acts to reduce θ", "minus: it acts to reduce θ")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 1.6)}>
        <T x={400} y={468} size={11} fill={INK_LIGHT} weight={600} anchor="start">
          {t("small angle: sin θ ≈ θ (radians)", "small angle: sin θ ≈ θ (radians)")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 2.2)}>
        <Chip x={400} y={478} w={210} h={34} fill={CREAM} stroke={GREEN} textFill={INK} size={12.5}>
          τ = − m B θ
        </Chip>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 3.2)}>
        <T x={400} y={530} size={11} fill={GREEN_DARK} weight={800} anchor="start">
          {t("say the small-angle step out loud —", "say the small-angle step out loud —")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 3.7)}>
        <T x={400} y={546} size={11} fill={GREEN_DARK} weight={800} anchor="start">
          {t("it is what makes this SIMPLE", "it is what makes this SIMPLE")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 4.2)}>
        <T x={400} y={562} size={11} fill={GREEN_DARK} weight={800} anchor="start">
          {t("harmonic, not merely oscillatory", "harmonic, not merely oscillatory")}
        </T>
      </Fade>

      {/* ── beat 9 — Newton's second law for rotation ─────────────── */}
      <Fade on={beat >= 9} delay={dl(9, 0.2)}>
        <T x={626} y={412} size={12} fill={RED} weight={800} anchor="start">
          {t("② I × ANGULAR ACCELERATION = τ", "② I × ANGULAR ACCELERATION = τ")}
        </T>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 0.8)}>
        <Chip x={626} y={422} w={210} h={34} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={11}>
          I d²θ/dt² = − m B θ
        </Chip>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 1.8)}>
        <T x={626} y={478} size={11} fill={INK_LIGHT} weight={600} anchor="start">
          {t("rearrange:", "rearrange:")}
        </T>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 2.2)}>
        <Chip x={626} y={488} w={210} h={34} fill={CREAM} stroke={GREEN} textFill={INK} size={11.5}>
          α = − (m B / I) θ
        </Chip>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 3.2)}>
        <T x={626} y={540} size={11} fill={GREEN_DARK} weight={800} anchor="start">
          {t("acceleration ∝ − displacement", "acceleration ∝ − displacement")}
        </T>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 3.8)}>
        <T x={626} y={560} size={12} fill={GREEN_DARK} weight={800} anchor="start">
          {t("⇒ SHM, with  ω² = m B / I", "⇒ SHM, with  ω² = m B / I")}
        </T>
      </Fade>

      {/* ── beat 10 — the period, evaluated ───────────────────────── */}
      <Fade on={beat >= 10} delay={dl(10, 0.2)}>
        <T x={852} y={412} size={12} fill={RED} weight={800} anchor="start">
          {t("③ THE PERIOD", "③ THE PERIOD")}
        </T>
      </Fade>
      <Fade on={beat >= 10} delay={dl(10, 0.8)}>
        <Chip x={852} y={422} w={192} h={34} fill={CREAM} stroke={RED} textFill={INK} size={12}>
          T = 2π √(I / m B)
        </Chip>
      </Fade>
      <Fade on={beat >= 10} delay={dl(10, 1.8)}>
        <T x={852} y={476} size={10.5} fill={INK_LIGHT} weight={600} anchor="start">
          {t("I = 2.0 × 10⁻⁴", "I = 2.0 × 10⁻⁴")}
        </T>
      </Fade>
      <Fade on={beat >= 10} delay={dl(10, 2.3)}>
        <T x={852} y={492} size={10.5} fill={INK_LIGHT} weight={600} anchor="start">
          {t("m B = 0.20 × 0.10 = 0.020", "m B = 0.20 × 0.10 = 0.020")}
        </T>
      </Fade>
      <Fade on={beat >= 10} delay={dl(10, 2.8)}>
        <T x={852} y={508} size={10.5} fill={INK_LIGHT} weight={600} anchor="start">
          {t("I / m B = 0.010 ⇒ √ = 0.10", "I / m B = 0.010 ⇒ √ = 0.10")}
        </T>
      </Fade>
      <Fade on={beat >= 10} delay={dl(10, 3.4)}>
        <Chip x={852} y={518} w={192} h={34} fill={GREEN} textFill="#ffffff" size={11.5}>
          T = 2π(0.10) = 0.63 s
        </Chip>
      </Fade>

      {/* ── beat 11 — what the answer really is ───────────────────── */}
      <Fade on={beat >= 11} delay={dl(11, 0.3)}>
        <T x={400} y={578} size={11} fill={INK} weight={700} anchor="start">
          {t("this is exactly the vibration magnetometer — a dipole suspended in a field, its period read off to measure B or m",
             "this is exactly the vibration magnetometer — a dipole suspended in a field, its period read off to measure B or m")}
        </T>
      </Fade>
      <Fade on={beat >= 11} delay={dl(11, 1.4)}>
        <T x={400} y={594} size={11} fill={GREEN_DARK} weight={800} anchor="start">
          {t("and the answer has the standard pendulum shape, with m B playing the restoring-constant role",
             "and the answer has the standard pendulum shape, with m B playing the restoring-constant role")}
        </T>
      </Fade>
    </Scene>
  );
}
