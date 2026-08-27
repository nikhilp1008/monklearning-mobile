/**
 * P12Ch04 · Section 3 — "Key Formulas and Definitions"
 * Subtopic: Magnetic Field and the Biot-Savart Law
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * RE-CHOREOGRAPHED (2026-08-22).
 *
 * What it used to show: four gates (0, 1, 4, 10) against THIRTEEN narration
 * segments, four drawn strokes in total (a title underline and rules), and
 * two columns of numbered bullets that landed in two batches. The board was
 * frozen from 132s to 317s — through the vector form, the magnitude form,
 * μ₀ and the whole moving-point-charge version.
 *
 * What the narration actually teaches: the formula bank of the subtopic.
 * F = q(v × B) defines B (and gives the tesla); then the Biot-Savart law in
 * vector form (r̂/r² ≡ r/r³), in magnitude form (μ₀/4π · I dl sin θ / r²,
 * direction ⊥ to the plane of dl and r); μ₀ = 4π × 10⁻⁷; the point-charge
 * version got by swapping I dl → q v; and finally the standard integrated
 * results for a straight wire, a loop, its axis and an arc — one family,
 * not four — times N for a coil.
 *
 * Beat map (13 segments, gates 0..12 — every beat used):
 *  0  "your formula bank"                title + underline + subtitle
 *  1  "F = q v × B defines B"            ① block + the two sine extremes
 *  2  "the tesla, the gauss, dimensions" ② block: 1 T = 1 N A⁻¹ m⁻¹, 10⁴ G
 *  3  "now the centrepiece"              divider + BIOT-SAVART header
 *  4  "vector form, two dressings"       both vector forms + the r³ note
 *  5  "magnitude form, θ and direction"  |dB| line + THE FIGURE (wire, the
 *                                        element I dl, r to P, the θ arc,
 *                                        dB ⊗ into the page at P)
 *  6  "μ₀ = 4π × 10⁻⁷"                   the constant + dimensions
 *  7  "there is a point-charge version"  the I dl → q v swap + mini figure
 *                                        (q, v, r̂, dB ⊙ out of the page)
 *  8  "B = μ₀/4π · q v × r̂ / r²"         the point-charge formula
 *  9  "finally, the standard results"    divider + STANDARD RESULTS header
 * 10  "straight wire, infinite + finite" the two straight-wire results
 * 11  "centre, axis, arc — one family"   the three circular results
 * 12  "coil of N turns → × N"            the × N chip
 *
 * Colour note: magnetic field uses the chapter blue (#0284c7, as in
 * Sections 1 and 2); everything else is kit palette.
 */

import React from "react";
import { Circle } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD,
  INK, MUTED, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

const BLUE = "#0284c7";

export default function P12Ch04Sec3({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ─────────── beat 0 — title ─────────── */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={44} size={25} fill={RED} script>
          {t("The formula bank", "The formula bank")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.4)}
        d="M 424 60 C 500 56, 590 64, 660 58" stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 2.4)}>
        <T x={540} y={78} size={12.5} fill={MUTED} script>
          {t("memorise these actively — almost every numerical here is one of them with numbers put in",
             "memorise these actively — almost every numerical here is one of them with numbers put in")}
        </T>
      </Fade>

      {/* ═══════════ beat 1 — the defining relation ═══════════ */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={44} y={104} size={14} fill={RED} weight={800} anchor="start">
          {t("① THE DEFINING RELATION — this is what B means",
             "① THE DEFINING RELATION — this is what B means")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <Chip x={44} y={116} w={228} h={36} fill={CREAM} stroke={GREEN} textFill={INK} size={17} script={false}>
          F = q (v × B)
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 4)}>
        <T x={292} y={141} size={16} fill={INK} weight={900} anchor="start">|F| = q v B sin θ</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 12)}>
        <T x={44} y={176} size={12.5} fill={MUTED} weight={700} anchor="start">
          {t("v ∥ B  →  sin 0° = 0  →  no force at all",
             "v ∥ B  →  sin 0° = 0  →  no force at all")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 16)}>
        <T x={44} y={194} size={12.5} fill={MUTED} weight={700} anchor="start">
          {t("v ⊥ B  →  sin 90° = 1  →  the force is maximum",
             "v ⊥ B  →  sin 90° = 1  →  the force is maximum")}
        </T>
      </Fade>

      {/* ═══════════ beat 2 — the unit ═══════════ */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={556} y={104} size={14} fill={RED} weight={800} anchor="start">
          {t("② THE UNIT — straight out of that definition",
             "② THE UNIT — straight out of that definition")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <Chip x={556} y={116} w={244} h={36} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={15} script={false}>
          1 tesla = 1 N A⁻¹ m⁻¹
        </Chip>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 8)}>
        <T x={820} y={141} size={14} fill={INK} weight={900} anchor="start">1 T = 10⁴ gauss</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 16)}>
        <T x={556} y={176} size={12.5} fill={MUTED} weight={700} anchor="start">
          {t("the Earth's surface field is only ≈ 0.3 – 0.6 gauss — a tiny fraction of a tesla",
             "the Earth's surface field is only ≈ 0.3 – 0.6 gauss — a tiny fraction of a tesla")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 38)}>
        <T x={556} y={194} size={12.5} fill={MUTED} weight={700} anchor="start">
          {t("dimensional formula:   [B] = M¹ T⁻² A⁻¹", "dimensional formula:   [B] = M¹ T⁻² A⁻¹")}
        </T>
      </Fade>

      {/* ═══════════ beat 3 — the Biot-Savart header ═══════════ */}
      <Draw on={beat >= 3} delay={dl(3, 0.2)} d="M 44 210 H 1036" stroke={MUTED} sw={1.3} dur={0.8} />
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={44} y={234} size={15} fill={RED} weight={800} anchor="start">
          {t("③ THE BIOT-SAVART LAW — what ONE current element makes at a chosen point",
             "③ THE BIOT-SAVART LAW — what ONE current element makes at a chosen point")}
        </T>
      </Fade>

      {/* ═══════════ beat 4 — vector form, two dressings ═══════════ */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={44} y={260} size={13} fill={INK} weight={800} anchor="start">
          {t("vector form — two equivalent dressings of the same law:",
             "vector form — two equivalent dressings of the same law:")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <T x={58} y={288} size={17} fill={GREEN} weight={900} anchor="start">dB = (μ₀/4π) · I dl × r̂ / r²</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 12)}>
        <T x={58} y={314} size={17} fill={GREEN} weight={900} anchor="start">dB = (μ₀/4π) · I dl × r / r³</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 26)}>
        <T x={44} y={336} size={12.5} fill={RED} weight={700} anchor="start">
          {t("r³ is NOT a broken inverse square — the extra r cancels |r|",
             "r³ is NOT a broken inverse square — the extra r cancels |r|")}
        </T>
      </Fade>

      {/* ═══════════ beat 5 — magnitude form + THE FIGURE ═══════════ */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={58} y={370} size={17} fill={RED} weight={900} anchor="start">|dB| = (μ₀/4π) · I dl sin θ / r²</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 8)}>
        <T x={44} y={392} size={12.5} fill={MUTED} weight={700} anchor="start">
          {t("θ = angle between dl (along I) and r̂ (toward the point)",
             "θ = angle between dl (along I) and r̂ (toward the point)")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 22)}>
        <T x={44} y={410} size={12.5} fill={MUTED} weight={700} anchor="start">
          {t("direction: ⊥ to the plane holding dl and r — that is what × means",
             "direction: ⊥ to the plane holding dl and r — that is what × means")}
        </T>
      </Fade>

      {/* the canonical Biot-Savart figure */}
      <Draw on={beat >= 5} delay={dl(5, 1)} d={arrowD(640, 296, 1000, 296)} stroke={INK} sw={3} dur={0.7} />
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={1012} y={301} size={15} fill={INK} weight={900} anchor="start">I</T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 2)} d="M 760 287 H 794 V 305 H 760 Z"
        stroke={AMBER_DARK} sw={2.4} dur={0.4} fill={CREAM} />
      <Draw on={beat >= 5} delay={dl(5, 2.4)} d={arrowD(762, 274, 792, 274)} stroke={AMBER_DARK} sw={2} dur={0.3} />
      <Fade on={beat >= 5} delay={dl(5, 2.8)}>
        <T x={748} y={270} size={13} fill={AMBER_DARK} weight={900} anchor="end">I dl</T>
      </Fade>
      {/* the position vector out to P */}
      <Draw on={beat >= 5} delay={dl(5, 3.4)} d={arrowD(777, 302, 900, 380)} stroke={BLUE} sw={2.4} dur={0.6} />
      <Fade on={beat >= 5} delay={dl(5, 3.9)}>
        <T x={832} y={354} size={14} fill={BLUE} weight={900} anchor="end">r</T>
        <Circle cx={906} cy={384} r={6} fill={RED} />
        <T x={920} y={394} size={14} fill={RED} weight={900} anchor="start">P</T>
      </Fade>
      {/* the angle between the element and r */}
      <Draw on={beat >= 5} delay={dl(5, 4.4)} d="M 809 296 A 32 32 0 0 1 804 313.2"
        stroke={AMBER_DARK} sw={2} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 4.8)}>
        <T x={816} y={324} size={13} fill={AMBER_DARK} weight={900} anchor="start">θ</T>
      </Fade>
      {/* dB at P — perpendicular to the plane, i.e. into the page */}
      <Fade on={beat >= 5} delay={dl(5, 5.4)}>
        <Circle cx={972} cy={350} r={12} fill="none" stroke={BLUE} strokeWidth={1.9} />
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 5.7)}
        d="M 963.5 341.5 L 980.5 358.5 M 980.5 341.5 L 963.5 358.5" stroke={BLUE} sw={1.8} dur={0.3} />
      <Fade on={beat >= 5} delay={dl(5, 6)}>
        <T x={972} y={326} size={11.5} fill={BLUE} weight={800}>
          {t("dB — into the page", "dB — into the page")}
        </T>
      </Fade>

      {/* ═══════════ beat 6 — the constant ═══════════ */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={44} y={434} size={15} fill={AMBER_DARK} weight={900} anchor="start">
          μ₀ = 4π × 10⁻⁷ T m A⁻¹  ≈  1.257 × 10⁻⁶
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 8)}>
        <T x={44} y={456} size={12.5} fill={MUTED} weight={700} anchor="start">
          {t("keep the 4π form — it cancels the 4π in the law and keeps the arithmetic clean",
             "keep the 4π form — it cancels the 4π in the law and keeps the arithmetic clean")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 30)}>
        <T x={44} y={476} size={12.5} fill={MUTED} weight={700} anchor="start">
          {t("[μ₀] = M¹ L¹ T⁻² A⁻²", "[μ₀] = M¹ L¹ T⁻² A⁻²")}
        </T>
      </Fade>

      {/* ═══════════ beats 7 & 8 — the moving point charge ═══════════ */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={556} y={434} size={13} fill={INK} weight={800} anchor="start">
          {t("one moving charge instead of a wire — a direct swap:   I dl → q v",
             "one moving charge instead of a wire — a direct swap:   I dl → q v")}
        </T>
      </Fade>
      {/* mini figure: q, v, r̂ and dB out of the page */}
      <Fade on={beat >= 7} delay={dl(7, 2.4)}>
        <Circle cx={886} cy={470} r={13} fill={CREAM} stroke={RED} strokeWidth={2.2} />
        <T x={886} y={475} size={13} fill={RED} weight={900}>q</T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 2.8)} d={arrowD(903, 470, 962, 470)} stroke={GREEN} sw={2.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 3.1)}>
        <T x={932} y={490} size={13} fill={GREEN} weight={900}>v</T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 3.4)} d={arrowD(897, 460, 990, 432)} stroke={BLUE} sw={2.2} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 3.8)}>
        <T x={938} y={428} size={12.5} fill={BLUE} weight={900}>r̂</T>
        <Circle cx={1016} cy={420} r={10} fill="none" stroke={BLUE} strokeWidth={1.8} />
        <Circle cx={1016} cy={420} r={2.4} fill={BLUE} />
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 0.3)}>
        <T x={556} y={464} size={16} fill={GREEN} weight={900} anchor="start">B = (μ₀/4π) · q v × r̂ / r²</T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 8)}>
        <T x={556} y={486} size={12.5} fill={MUTED} weight={700} anchor="start">
          {t("a wire is just this, summed over an enormous number of charges",
             "a wire is just this, summed over an enormous number of charges")}
        </T>
      </Fade>

      {/* ═══════════ beat 9 — the standard results ═══════════ */}
      <Draw on={beat >= 9} delay={dl(9, 0.2)} d="M 44 500 H 1036" stroke={MUTED} sw={1.3} dur={0.8} />
      <Fade on={beat >= 9} delay={dl(9, 1)}>
        <T x={44} y={522} size={14} fill={RED} weight={800} anchor="start">
          {t("④ STANDARD RESULTS — memorise them outright; re-deriving in the hall wastes time you do not have",
             "④ STANDARD RESULTS — memorise them outright; re-deriving in the hall wastes time you do not have")}
        </T>
      </Fade>

      {/* ═══════════ beat 10 — the straight wire ═══════════ */}
      <Fade on={beat >= 10} delay={dl(10, 0.3)}>
        <T x={44} y={546} size={12} fill={RED} weight={800} anchor="start">
          {t("STRAIGHT WIRE", "STRAIGHT WIRE")}
        </T>
      </Fade>
      <Fade on={beat >= 10} delay={dl(10, 2)}>
        <T x={44} y={568} size={13.5} fill={INK} weight={900} anchor="start">infinite:  B = μ₀I / 2πa</T>
      </Fade>
      <Fade on={beat >= 10} delay={dl(10, 8)}>
        <T x={44} y={590} size={13.5} fill={INK} weight={900} anchor="start">
          finite:  B = μ₀I / 4πa · (sin θ₁ + sin θ₂)
        </T>
      </Fade>

      {/* ═══════════ beat 11 — the circular family ═══════════ */}
      <Fade on={beat >= 11} delay={dl(11, 0.3)}>
        <T x={340} y={546} size={12} fill={RED} weight={800} anchor="start">
          {t("CIRCULAR — one family, not three", "CIRCULAR — one family, not three")}
        </T>
      </Fade>
      <Fade on={beat >= 11} delay={dl(11, 2)}>
        <T x={340} y={568} size={13.5} fill={INK} weight={900} anchor="start">
          centre:  B = μ₀I / 2R        axis:  B = μ₀I R² / 2 (x² + R²)³ᐟ²
        </T>
      </Fade>
      <Fade on={beat >= 11} delay={dl(11, 22)}>
        <T x={340} y={590} size={12.5} fill={GREEN} weight={800} anchor="start">
          {t("arc (φ radians):  B = μ₀I φ / 4πR   ·   x = 0, or φ = 2π, gives back the centre",
             "arc (φ radians):  B = μ₀I φ / 4πR   ·   x = 0, or φ = 2π, gives back the centre")}
        </T>
      </Fade>

      {/* ═══════════ beat 12 — × N for a coil ═══════════ */}
      <Fade on={beat >= 12} delay={dl(12, 0.3)}>
        <Chip x={812} y={538} w={228} h={36} fill={RED} textFill="#ffffff" size={15} script={false}>
          × N for a coil of N turns
        </Chip>
      </Fade>
      <Fade on={beat >= 12} delay={dl(12, 3)}>
        <T x={926} y={592} size={11} fill={RED} weight={800}>
          {t("“loop” ⇒ no N — the word coil is the signal",
             "“loop” ⇒ no N — the word coil is the signal")}
        </T>
      </Fade>
    </Scene>
  );
}
