/**
 * P12Ch04 · Section 36 — "Key Formulas and the Electric-to-Magnetic Analogy"
 * Subtopic: The Magnetic Dipole — Current Loop, Revolving Electron, Bohr Magneton
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * WHAT IT USED TO SHOW (re-choreographed 2026-08-22)
 *   The interrupted-pass template: three "Badge + numbered prose" blocks and a
 *   full-width footer chip, gated on beats 0, 1, 4 and 8 only, out of ELEVEN
 *   narration segments. Beats 2, 3, 5, 6, 7, 9 and 10 changed nothing, so the
 *   board froze for the 34 s of the work-to-rotate discussion, the 50 s spent
 *   describing a diagram, the 49 s of the analogy and the whole of the atomic
 *   results. Drawn elements on the entire board: the title underline plus two
 *   short horizontal rules — four strokes. The narration says "the diagram
 *   makes the relationship visible… the two bars show the field strengths, the
 *   axial one is twice as long" and there was no loop, no moment, no axial or
 *   equatorial point and no bars anywhere on the board.
 *
 * WHAT THE NARRATION TEACHES
 *   The formula bank for the subtopic. (1) A dipole in an external field:
 *   m = N I A n̂ (A m², [A L²]), τ = m × B with |τ| = m B sin θ, and
 *   U = − m·B = − m B cos θ. (2) Work to rotate: W = ΔU = m B (cos θ₁ − cos θ₂),
 *   read physically — away from alignment costs positive work, toward alignment
 *   releases energy. (3) The genuinely new part, the far field: on the axis
 *   B = (μ₀/4π)(2m/x³), on the equator B = (μ₀/4π)(m/x³) — so axial is exactly
 *   twice equatorial at the same x, and BOTH die as 1/x³ where a straight wire
 *   dies only as 1/x. (4) Every one of these is the electric-dipole result with
 *   two substitutions: p → m and 1/4πε₀ → μ₀/4π. (5) The atomic results:
 *   μ_l = e v r / 2 = e L / 2m, the gyromagnetic ratio μ_l/L = e/2m ≈ 8.8 × 10¹⁰
 *   C kg⁻¹ (r and v both vanish), and the Bohr magneton μ_B = e h / 4π m
 *   ≈ 9.27 × 10⁻²⁴ A m², quotable as J T⁻¹.
 *
 * THE FIGURES (drawn, not asserted)
 *   · beat 2  — a rotation picture: the B direction, the moment at θ₁ and at θ₂
 *     with both angle arcs drawn, so the two cosines in W have visible referents.
 *   · beat 5  — the far-field picture: a current loop with its circulating I and
 *     its moment m, the axial point straight above at distance x and the
 *     equatorial point out to the side at the same x, and the two field-strength
 *     bars drawn to scale — the axial bar exactly twice the equatorial one.
 *   · beat 6  — the analogy drawn as matched pictures: the electric dipole
 *     (−, +, p) set identically beside the current loop (I, m), then the two
 *     substitution chips and the four translated results.
 *
 * BEAT MAP (n_reveals = 11, gates 0…10 — every beat used)
 *   0  framing              title + underline + subtitle
 *   1  three in-field forms head ① + m = N I A n̂ (+unit/dimension) + τ chip +
 *                           U chip + "derived last part, repeated here"
 *   2  work to rotate       head ② + W chip + the rotation figure (B, m at θ₁,
 *                           m at θ₂, both arcs) + the two sign readings
 *   3  the new material     head ③ + "at x ≫ the loop's own size"
 *   4  the two far fields   B_axial chip + B_eq chip + what "equatorial" means
 *   5  the diagram          row rule + the far-field figure + 2 : 1 + 1/x³ vs 1/x
 *   6  the analogy          matched dipole pictures + p→m and 1/4πε₀→μ₀/4π +
 *                           the four translated rows
 *   7  atomic results       head
 *   8  orbital moment       μ_l = e v r / 2 = e L / 2m
 *   9  gyromagnetic ratio   μ_l / L = e / 2m ≈ 8.8 × 10¹⁰ C kg⁻¹
 *  10  Bohr magneton        μ_B = e h / 4π m = 9.27 × 10⁻²⁴ A m² = J T⁻¹
 *
 * LAYOUT
 *   ROW 1  y100..344 — C1 x50..380 (b1) · C2 x400..720 (b2) · C3 x740..1044 (b3,b4)
 *   rule   y350
 *   ROW 2  y356..596 — C1 x50..430 (b5) · C2 x452..760 (b6) · C3 x782..1044 (b7–b10)
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

export default function P12Ch04Sec36({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ── beat 0 — title ─────────────────────────────────────────── */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={44} size={25} fill={RED} script>
          {t("Formula Bank & the Electric → Magnetic Analogy",
             "Formula Bank & the Electric → Magnetic Analogy")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.5)}
        d="M 236 60 C 460 56, 660 64, 844 58" stroke={RED} sw={2.2} dur={0.7} />
      <Fade on={beat >= 0} delay={dl(0, 3.0)}>
        <T x={540} y={88} size={13} fill={MUTED} script>
          {t("three in-field results · the far field · one analogy · two atomic constants",
             "three in-field results · the far field · one analogy · two atomic constants")}
        </T>
      </Fade>

      {/* ══════════ ROW 1 · C1 — beat 1: the dipole in a field ══════════ */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={50} y={120} size={13.5} fill={RED} weight={800} anchor="start">
          {t("① A DIPOLE IN AN EXTERNAL FIELD", "① A DIPOLE IN AN EXTERNAL FIELD")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <Chip x={50} y={130} w={330} h={36} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={16}>
          m = N I A n̂
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.6)}>
        <T x={50} y={186} size={12.5} fill={MUTED} weight={700} anchor="start">
          {t("unit A m²   ·   dimensions [A L²]", "unit A m²   ·   dimensions [A L²]")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.4)}>
        <Chip x={50} y={196} w={330} h={36} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={15}>
          τ = m × B  ⇒  |τ| = m B sin θ
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.2)}>
        <Chip x={50} y={242} w={330} h={36} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={15}>
          U = − m · B = − m B cos θ
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 4.2)}>
        <T x={50} y={302} size={12.5} fill={INK_LIGHT} weight={600} anchor="start">
          {t("τ and U were derived in the previous part —", "τ and U were derived in the previous part —")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 4.8)}>
        <T x={50} y={322} size={12.5} fill={INK_LIGHT} weight={600} anchor="start">
          {t("repeated here: this section is the dipole's home", "repeated here: this section is the dipole's home")}
        </T>
      </Fade>

      {/* ══════════ ROW 1 · C2 — beat 2: work to rotate ══════════ */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={400} y={120} size={13.5} fill={RED} weight={800} anchor="start">
          {t("② WORK TO ROTATE IT", "② WORK TO ROTATE IT")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <Chip x={400} y={130} w={320} h={38} fill={CREAM} stroke={GREEN} textFill={INK} size={14}>
          W = ΔU = m B (cos θ₁ − cos θ₂)
        </Chip>
      </Fade>
      {/* the rotation figure */}
      <Draw on={beat >= 2} delay={dl(2, 1.6)} d={arrowD(440, 262, 692, 262)} stroke={AMBER_DARK} sw={2.2} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 2.1)}>
        <T x={700} y={267} size={14} fill={AMBER_DARK} script anchor="start">B</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 2.5)} d={arrowD(440, 262, 512.7, 220.0)} stroke={GREEN_DARK} sw={2.4} dur={0.4} />
      <Draw on={beat >= 2} delay={dl(2, 3.0)} d={arcD(440, 262, 52, 0, -30)} stroke={GREEN_DARK} sw={1.6} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 3.4)}>
        <T x={506} y={250} size={12.5} fill={GREEN_DARK} weight={800} anchor="start">θ₁</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 3.9)} d={arrowD(440, 262, 461.7, 180.9)} stroke={RED} sw={2.4} dur={0.4} />
      <Draw on={beat >= 2} delay={dl(2, 4.4)} d={arcD(440, 262, 72, 0, -75)} stroke={RED} sw={1.6} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 4.8)}>
        <T x={524} y={214} size={12.5} fill={RED} weight={800} anchor="start">θ₂</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 5.4)}>
        <T x={400} y={302} size={12.5} fill={RED} weight={800} anchor="start">
          {t("rotating AWAY from B → you PAY positive work", "rotating AWAY from B → you PAY positive work")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 6.2)}>
        <T x={400} y={322} size={12.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("rotating TOWARD B → energy is released", "rotating TOWARD B → energy is released")}
        </T>
      </Fade>

      {/* ══════════ ROW 1 · C3 — beats 3–4: the far field ══════════ */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={740} y={120} size={13.5} fill={RED} weight={800} anchor="start">
          {t("③ THE GENUINELY NEW PART", "③ THE GENUINELY NEW PART")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.0)}>
        <T x={740} y={142} size={12.5} fill={INK_LIGHT} weight={600} anchor="start">
          {t("the far field — distance ≫ the loop", "the far field — distance ≫ the loop")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <Chip x={740} y={154} w={304} h={40} fill={CREAM} stroke={RED} textFill={INK} size={14}>
          B_axial = (μ₀ ⁄ 4π) · 2m ⁄ x³
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.4)}>
        <Chip x={740} y={204} w={304} h={40} fill={CREAM} stroke={GREEN} textFill={INK} size={14}>
          B_eq = (μ₀ ⁄ 4π) · m ⁄ x³
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.4)}>
        <T x={740} y={266} size={12.5} fill={INK} weight={700} anchor="start">
          {t("equatorial = perpendicular to m", "equatorial = perpendicular to m")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 3.0)}>
        <T x={740} y={286} size={12.5} fill={INK_LIGHT} weight={600} anchor="start">
          {t("both read off at the same distance x", "both read off at the same distance x")}
        </T>
      </Fade>

      {/* row rule */}
      <Draw on={beat >= 5} delay={dl(5, 0.1)} d="M 50 350 H 1044" stroke={MUTED} sw={1.4} dur={0.9} />

      {/* ══════════ ROW 2 · C1 — beat 5: the far-field figure ══════════ */}
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={50} y={374} size={13.5} fill={RED} weight={800} anchor="start">
          {t("THE AXIAL FIELD IS EXACTLY TWICE THE EQUATORIAL", "THE AXIAL FIELD IS EXACTLY TWICE THE EQUATORIAL")}
        </T>
      </Fade>
      {/* the loop */}
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        <Ellipse cx={140} cy={520} rx={42} ry={14} fill="none" stroke={INK} strokeWidth={2.6} />
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 1.7)} d={arrowD(98, 512, 98, 528)} stroke={GREEN_DARK} sw={2.2} dur={0.3} />
      <Draw on={beat >= 5} delay={dl(5, 1.9)} d={arrowD(182, 528, 182, 512)} stroke={GREEN_DARK} sw={2.2} dur={0.3} />
      <Fade on={beat >= 5} delay={dl(5, 2.2)}>
        <T x={116} y={548} size={13} fill={GREEN_DARK} script anchor="start">I</T>
      </Fade>
      {/* the axis, the moment, the axial point */}
      <Fade on={beat >= 5} delay={dl(5, 2.5)}>
        <Line x1={140} y1={520} x2={140} y2={420} stroke={MUTED} strokeWidth={1.4} strokeDasharray="6 5" />
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 2.9)} d={arrowD(140, 520, 140, 484)} stroke={RED} sw={2.6} dur={0.35} />
      <Fade on={beat >= 5} delay={dl(5, 3.2)}>
        <T x={152} y={492} size={14} fill={RED} script anchor="start">m</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 3.5)}>
        <T x={152} y={452} size={12.5} fill={MUTED} weight={700} anchor="start">x</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 3.8)}>
        <Circle cx={140} cy={414} r={5.5} fill={INK} />
        <T x={140} y={398} size={11.5} fill={INK} weight={800}>
          {t("axial point", "axial point")}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 4.4)} d="M 152 414 H 232" stroke={GREEN} sw={8} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 4.9)}>
        <T x={240} y={418} size={12} fill={GREEN_DARK} weight={800} anchor="start">B_axial</T>
      </Fade>
      {/* the equatorial point */}
      <Fade on={beat >= 5} delay={dl(5, 5.3)}>
        <Line x1={186} y1={520} x2={294} y2={520} stroke={MUTED} strokeWidth={1.4} strokeDasharray="6 5" />
        <T x={240} y={510} size={12.5} fill={MUTED} weight={700}>x</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 5.7)}>
        <Circle cx={300} cy={520} r={5.5} fill={INK} />
        <T x={300} y={546} size={11.5} fill={INK} weight={800}>
          {t("equatorial point", "equatorial point")}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 6.1)} d="M 312 520 H 352" stroke={GREEN} sw={8} dur={0.35} />
      <Fade on={beat >= 5} delay={dl(5, 6.5)}>
        <T x={360} y={524} size={12} fill={GREEN_DARK} weight={800} anchor="start">B_eq</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 7.2)}>
        <T x={50} y={574} size={12.5} fill={RED} weight={800} anchor="start">
          {t("B_axial : B_eq = 2 : 1 at the same x", "B_axial : B_eq = 2 : 1 at the same x")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 8.0)}>
        <T x={50} y={594} size={12.5} fill={INK} weight={700} anchor="start">
          {t("both die as 1/x³ — a straight wire only as 1/x", "both die as 1/x³ — a straight wire only as 1/x")}
        </T>
      </Fade>

      {/* ══════════ ROW 2 · C2 — beat 6: the analogy, drawn ══════════ */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={452} y={374} size={13.5} fill={RED} weight={800} anchor="start">
          {t("THE SAME PICTURE TWICE", "THE SAME PICTURE TWICE")}
        </T>
      </Fade>
      {/* electric dipole */}
      <Draw on={beat >= 6} delay={dl(6, 0.7)} d="M 472 412 H 532" stroke={INK} sw={2.2} dur={0.35} />
      <Fade on={beat >= 6} delay={dl(6, 1.0)}>
        <Circle cx={472} cy={412} r={11} fill={CREAM} stroke={INK} strokeWidth={2} />
        <T x={472} y={417} size={13} fill={INK} weight={900}>−</T>
        <Circle cx={532} cy={412} r={11} fill={CREAM} stroke={RED} strokeWidth={2} />
        <T x={532} y={417} size={13} fill={RED} weight={900}>+</T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.5)} d={arrowD(472, 434, 532, 434)} stroke={RED} sw={2.2} dur={0.3} />
      <Fade on={beat >= 6} delay={dl(6, 1.8)}>
        <T x={540} y={439} size={13.5} fill={RED} script anchor="start">p</T>
        <T x={572} y={418} size={18} fill={MUTED} weight={800}>≡</T>
      </Fade>
      {/* magnetic loop */}
      <Fade on={beat >= 6} delay={dl(6, 2.2)}>
        <Ellipse cx={648} cy={420} rx={34} ry={12} fill="none" stroke={INK} strokeWidth={2.3} />
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 2.5)} d={arrowD(614, 413, 614, 427)} stroke={GREEN_DARK} sw={2} dur={0.25} />
      <Draw on={beat >= 6} delay={dl(6, 2.7)} d={arrowD(682, 427, 682, 413)} stroke={GREEN_DARK} sw={2} dur={0.25} />
      <Draw on={beat >= 6} delay={dl(6, 3.0)} d={arrowD(648, 420, 648, 388)} stroke={RED} sw={2.3} dur={0.35} />
      <Fade on={beat >= 6} delay={dl(6, 3.3)}>
        <T x={658} y={394} size={13.5} fill={RED} script anchor="start">m</T>
      </Fade>
      {/* the two substitutions */}
      <Fade on={beat >= 6} delay={dl(6, 3.8)}>
        <Chip x={452} y={452} w={140} h={30} fill={CREAM} stroke={RED} textFill={RED} size={14}>
          p → m
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 4.2)}>
        <Chip x={604} y={452} w={156} h={30} fill={CREAM} stroke={RED} textFill={RED} size={12.5}>
          1/4πε₀ → μ₀/4π
        </Chip>
      </Fade>
      {/* the four translated results */}
      <Fade on={beat >= 6} delay={dl(6, 4.8)}>
        <T x={452} y={506} size={11.5} fill={MUTED} weight={800} anchor="start">axial</T>
        <T x={528} y={506} size={12} fill={INK} weight={700} anchor="start">(1/4πε₀)(2p/x³) → (μ₀/4π)(2m/x³)</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 5.3)}>
        <T x={452} y={526} size={11.5} fill={MUTED} weight={800} anchor="start">equatorial</T>
        <T x={528} y={526} size={12} fill={INK} weight={700} anchor="start">(1/4πε₀)(p/x³) → (μ₀/4π)(m/x³)</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 5.8)}>
        <T x={452} y={546} size={11.5} fill={MUTED} weight={800} anchor="start">torque</T>
        <T x={528} y={546} size={12} fill={INK} weight={700} anchor="start">p × E → m × B</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 6.3)}>
        <T x={452} y={566} size={11.5} fill={MUTED} weight={800} anchor="start">energy</T>
        <T x={528} y={566} size={12} fill={INK} weight={700} anchor="start">− p · E → − m · B</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 7.0)}>
        <T x={452} y={592} size={12} fill={GREEN_DARK} weight={800} anchor="start">
          {t("four results for the price of two swaps", "four results for the price of two swaps")}
        </T>
      </Fade>

      {/* ══════════ ROW 2 · C3 — beats 7–10: the atomic results ══════════ */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={782} y={374} size={13.5} fill={RED} weight={800} anchor="start">
          {t("THE ATOMIC RESULTS", "THE ATOMIC RESULTS")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 0.3)}>
        <Chip x={782} y={386} w={262} h={36} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={14}>
          μ_l = e v r ⁄ 2 = e L ⁄ 2m
        </Chip>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 1.2)}>
        <T x={782} y={442} size={11.5} fill={INK_LIGHT} weight={600} anchor="start">
          {t("an electron of speed v on a circle of radius r", "an electron of speed v on a circle of radius r")}
        </T>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 0.3)}>
        <Chip x={782} y={456} w={262} h={36} fill={CREAM} stroke={GREEN} textFill={INK} size={15}>
          μ_l ⁄ L = e ⁄ 2m
        </Chip>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 1.2)}>
        <T x={782} y={512} size={12} fill={GREEN_DARK} weight={800} anchor="start">
          {t("≈ 8.8 × 10¹⁰ C kg⁻¹ — r and v are gone", "≈ 8.8 × 10¹⁰ C kg⁻¹ — r and v are gone")}
        </T>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 2.0)}>
        <T x={782} y={530} size={11.5} fill={INK_LIGHT} weight={600} anchor="start">
          {t("the gyromagnetic ratio · a universal constant", "the gyromagnetic ratio · a universal constant")}
        </T>
      </Fade>
      <Fade on={beat >= 10} delay={dl(10, 0.3)}>
        <Chip x={782} y={540} w={262} h={36} fill={GREEN} textFill="#ffffff" size={15}>
          μ_B = e h ⁄ 4π m
        </Chip>
      </Fade>
      <Fade on={beat >= 10} delay={dl(10, 1.3)}>
        <T x={782} y={592} size={12} fill={INK} weight={800} anchor="start">
          {t("= 9.27 × 10⁻²⁴ A m²   (= J T⁻¹)", "= 9.27 × 10⁻²⁴ A m²   (= J T⁻¹)")}
        </T>
      </Fade>
    </Scene>
  );
}
