/**
 * P12Ch04 · Section 5 — "Derivation B: Finite Straight Wire and the Infinite Limit"
 * Subtopic: Magnetic Field and the Biot-Savart Law
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * RE-CHOREOGRAPHED (2026-08-22).
 *
 * What it used to show: four gates (0, 1, 5, 9) against ELEVEN narration
 * segments, and four drawn strokes in total — the title underline and two
 * horizontal rules. The board froze from 20s to 155s while the voice
 * described, in words, a figure that was never drawn: the perpendicular of
 * length a, the two lines from P to the ends, and the two angles measured
 * at P.
 *
 * What the narration actually teaches: the most-used formula in the
 * chapter. P sits at perpendicular distance a from a straight wire;
 * θ₁ and θ₂ are measured AT P, from the perpendicular outward to the lines
 * joining P to the two ends. Changing variables from length to angle
 * collapses the integrand to (μ₀I/4πa) cos θ dθ, and integrating gives
 *      B = μ₀I / 4πa · (sin θ₁ + sin θ₂).
 * Stretching both ends to infinity sends both angles to 90°, both sines to
 * 1, the bracket to 2, and out drops B = μ₀I / 2πa — a 1/a fall-off, not
 * 1/a², which is a favourite conceptual trap.
 *
 * Beat map (11 segments, gates 0..10 — every beat used):
 *  0  "shorter, but the most-used result"  title + underline + subtitle
 *  1  "the setup and the angle definition" divider + the setup lines
 *  2  "the figure makes this concrete"     THE FIGURE: wire with both ends,
 *                                          P below, green perpendicular a with
 *                                          the right angle, two blue lines to
 *                                          the ends, the θ₁ / θ₂ arcs at P
 *  3  "change variables to the angle θ"    THE TRICK block
 *  4  "dB = μ₀I/4πa · cos θ dθ"            the collapsed integrand
 *  5  "integrate — ∫cos = sin, add them"   the limits and why the sines add
 *  6  "B = μ₀I/4πa (sin θ₁ + sin θ₂)"      the master formula + its structure
 *  7  "now the limit"                      LIMIT header
 *  8  "both ends recede, angles → 90°"     the stretched-wire mini figure
 *  9  "the 2 cancels half the 4"           B = μ₀I / 2πa
 * 10  "direction, and 1/a not 1/a²"        field rings + ⊙ / ⊗ on the figure,
 *                                          plus the fall-off warning
 *
 * Colour note: magnetic field lines use the chapter blue (#0284c7, as in
 * Sections 1–4); everything else is kit palette.
 */

import React from "react";
import { Circle, Line } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD,
  INK, MUTED, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

const BLUE = "#0284c7";

/** closed ellipse as a drawable path */
const ellD = (cx: number, cy: number, rx: number, ry: number) =>
  `M ${cx - rx} ${cy} A ${rx} ${ry} 0 1 1 ${cx + rx} ${cy} A ${rx} ${ry} 0 1 1 ${cx - rx} ${cy}`;

export default function P12Ch04Sec5({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ─────────── beat 0 — title ─────────── */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={44} size={25} fill={RED} script>
          {t("The finite wire — and the infinite limit", "The finite wire — and the infinite limit")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.4)}
        d="M 274 60 C 430 56, 640 64, 806 58" stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 2.6)}>
        <T x={540} y={80} size={12.5} fill={MUTED} script>
          {t("shorter than Derivation A, but almost every multi-wire JEE problem is built from this one expression",
             "shorter than Derivation A, but almost every multi-wire JEE problem is built from this one expression")}
        </T>
      </Fade>

      {/* ═══════════ beat 1 — the setup ═══════════ */}
      <Draw on={beat >= 1} delay={dl(1, 0.2)} d="M 500 100 V 596" stroke={MUTED} sw={1.2} dur={0.9} />
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <T x={44} y={114} size={13.5} fill={RED} weight={800} anchor="start">
          {t("SETUP — and the definition that decides everything",
             "SETUP — and the definition that decides everything")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3)}>
        <T x={44} y={136} size={12.5} fill={INK} weight={700} anchor="start">
          {t("a straight wire carries current I, and the field point P",
             "a straight wire carries current I, and the field point P")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 5)}>
        <T x={44} y={156} size={12.5} fill={INK} weight={700} anchor="start">
          {t("sits at perpendicular distance a from the wire",
             "sits at perpendicular distance a from the wire")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 10)}>
        <T x={44} y={182} size={12.5} fill={INK} weight={700} anchor="start">
          {t("drop the perpendicular from P onto the wire, then draw",
             "drop the perpendicular from P onto the wire, then draw")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 13)}>
        <T x={44} y={202} size={12.5} fill={INK} weight={700} anchor="start">
          {t("straight lines from P to each END of the wire",
             "straight lines from P to each END of the wire")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 20)}>
        <T x={44} y={228} size={12.5} fill={RED} weight={800} anchor="start">
          {t("θ₁ and θ₂ are measured AT P, between that perpendicular",
             "θ₁ and θ₂ are measured AT P, between that perpendicular")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 24)}>
        <T x={44} y={248} size={12.5} fill={RED} weight={800} anchor="start">
          {t("and those two lines — mismeasuring them is THE classic error",
             "and those two lines — mismeasuring them is THE classic error")}
        </T>
      </Fade>

      {/* ═══════════ beat 2 — THE FIGURE ═══════════ */}
      <Draw on={beat >= 2} delay={dl(2, 0.3)} d={arrowD(556, 150, 1000, 150)} stroke={INK} sw={3} dur={0.8} />
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={1012} y={155} size={15} fill={INK} weight={900} anchor="start">I</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.3)} d="M 596 136 V 164 M 972 136 V 164" stroke={INK} sw={2.2} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 1.7)}>
        <T x={596} y={128} size={11.5} fill={MUTED} weight={700}>
          {t("end 1", "end 1")}
        </T>
        <T x={972} y={128} size={11.5} fill={MUTED} weight={700}>
          {t("end 2", "end 2")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.2)}>
        <Circle cx={784} cy={296} r={6} fill={RED} />
        <T x={784} y={322} size={14} fill={RED} weight={900}>P</T>
      </Fade>
      {/* the perpendicular of length a, with the right angle at its foot */}
      <Fade on={beat >= 2} delay={dl(2, 2.7)}>
        <Line x1={784} y1={296} x2={784} y2={150} stroke={GREEN} strokeWidth={2.2} strokeDasharray="8 6" />
        <T x={796} y={228} size={14} fill={GREEN} weight={900} anchor="start">a</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 3.2)} d="M 784 164 H 770 V 150" stroke={MUTED} sw={1.6} dur={0.3} />
      {/* the two lines from P out to the ends */}
      <Draw on={beat >= 2} delay={dl(2, 3.6)} d="M 784 296 L 600 152" stroke={BLUE} sw={2.2} dur={0.6} />
      <Draw on={beat >= 2} delay={dl(2, 4.2)} d="M 784 296 L 968 152" stroke={BLUE} sw={2.2} dur={0.6} />
      {/* the two angles, measured at P from the perpendicular outward */}
      <Draw on={beat >= 2} delay={dl(2, 4.9)} d="M 784 246 A 50 50 0 0 0 744.6 265.2"
        stroke={AMBER_DARK} sw={2.2} dur={0.4} />
      <Draw on={beat >= 2} delay={dl(2, 5.3)} d="M 784 246 A 50 50 0 0 1 823.4 265.2"
        stroke={AMBER_DARK} sw={2.2} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 5.7)}>
        <T x={738} y={252} size={14} fill={AMBER_DARK} weight={900} anchor="end">θ₁</T>
        <T x={830} y={252} size={14} fill={AMBER_DARK} weight={900} anchor="start">θ₂</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 6.4)}>
        <T x={784} y={346} size={11.5} fill={RED} weight={800}>
          {t("measured from the PERPENDICULAR, outward — not from the wire",
             "measured from the PERPENDICULAR, outward — not from the wire")}
        </T>
      </Fade>

      {/* ═══════════ beat 3 — the change of variable ═══════════ */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={44} y={280} size={13} fill={RED} weight={800} anchor="start">
          {t("THE TRICK · integrate over the ANGLE, not the length",
             "THE TRICK · integrate over the ANGLE, not the length")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 3)}>
        <T x={44} y={302} size={12.5} fill={MUTED} weight={700} anchor="start">
          {t("take an element at angular position θ from the foot of the",
             "take an element at angular position θ from the foot of the")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 6)}>
        <T x={44} y={322} size={12.5} fill={MUTED} weight={700} anchor="start">
          {t("perpendicular, then write dl and r in terms of θ and a",
             "perpendicular, then write dl and r in terms of θ and a")}
        </T>
      </Fade>

      {/* ═══════════ beat 4 — the collapsed integrand ═══════════ */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={58} y={356} size={17} fill={GREEN} weight={900} anchor="start">dB = (μ₀I / 4πa) · cos θ dθ</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 5)}>
        <T x={44} y={378} size={12} fill={MUTED} weight={700} anchor="start">
          {t("every length and every distance has collapsed into one cosine",
             "every length and every distance has collapsed into one cosine")}
        </T>
      </Fade>

      {/* ═══════════ beat 5 — the integration ═══════════ */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={44} y={406} size={12.5} fill={INK} weight={700} anchor="start">
          {t("integrate: ∫ cos θ dθ = sin θ, taken between the two ends",
             "integrate: ∫ cos θ dθ = sin θ, taken between the two ends")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 8)}>
        <T x={44} y={426} size={12.5} fill={INK} weight={700} anchor="start">
          {t("the halves lie on OPPOSITE sides of the foot, so the sines ADD",
             "the halves lie on OPPOSITE sides of the foot, so the sines ADD")}
        </T>
      </Fade>

      {/* ═══════════ beat 6 — the master formula ═══════════ */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Chip x={44} y={442} w={440} h={44} fill={CREAM} stroke={GREEN} textFill={INK} size={17} script={false}>
          B = μ₀I / 4πa · (sin θ₁ + sin θ₂)
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 4)}>
        <T x={44} y={508} size={12.5} fill={RED} weight={800} anchor="start">
          {t("the master formula for ANY straight segment of wire",
             "the master formula for ANY straight segment of wire")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 10)}>
        <T x={44} y={530} size={12} fill={MUTED} weight={700} anchor="start">
          {t("prefactor = the physics (I and a) · bracket = the geometry",
             "prefactor = the physics (I and a) · bracket = the geometry")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 20)}>
        <T x={44} y={550} size={12} fill={MUTED} weight={700} anchor="start">
          {t("polygons go fast: one application per side, only the bracket changes",
             "polygons go fast: one application per side, only the bracket changes")}
        </T>
      </Fade>

      {/* ═══════════ beat 7 — the limit ═══════════ */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={516} y={380} size={13} fill={RED} weight={800} anchor="start">
          {t("NOW THE LIMIT — stretch both ends away to infinity",
             "NOW THE LIMIT — stretch both ends away to infinity")}
        </T>
      </Fade>

      {/* ═══════════ beat 8 — the stretched wire ═══════════ */}
      <Draw on={beat >= 8} delay={dl(8, 0.3)} d={arrowD(779, 416, 1030, 416)} stroke={INK} sw={2.6} dur={0.5} />
      <Draw on={beat >= 8} delay={dl(8, 0.6)} d={arrowD(779, 416, 528, 416)} stroke={INK} sw={2.6} dur={0.5} />
      <Fade on={beat >= 8} delay={dl(8, 1.1)}>
        <Circle cx={779} cy={462} r={5} fill={RED} />
        <Line x1={779} y1={462} x2={779} y2={416} stroke={GREEN} strokeWidth={2} strokeDasharray="7 5" />
        <T x={790} y={446} size={11.5} fill={GREEN} weight={900} anchor="start">a</T>
      </Fade>
      <Draw on={beat >= 8} delay={dl(8, 1.6)} d="M 779 462 L 536 416" stroke={BLUE} sw={1.9} dur={0.5} />
      <Draw on={beat >= 8} delay={dl(8, 2)} d="M 779 462 L 1022 416" stroke={BLUE} sw={1.9} dur={0.5} />
      <Fade on={beat >= 8} delay={dl(8, 2.5)}>
        <T x={636} y={458} size={11.5} fill={AMBER_DARK} weight={800}>θ₁ → 90°</T>
        <T x={922} y={458} size={11.5} fill={AMBER_DARK} weight={800}>θ₂ → 90°</T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 3.4)}>
        <T x={516} y={492} size={12.5} fill={INK} weight={700} anchor="start">
          {t("each line from P becomes nearly parallel to the wire, so both",
             "each line from P becomes nearly parallel to the wire, so both")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 6)}>
        <T x={516} y={512} size={12.5} fill={INK} weight={700} anchor="start">
          {t("angles → 90°, both sines → 1, and the bracket becomes just 2",
             "angles → 90°, both sines → 1, and the bracket becomes just 2")}
        </T>
      </Fade>

      {/* ═══════════ beat 9 — the infinite-wire result ═══════════ */}
      <Fade on={beat >= 9} delay={dl(9, 0.3)}>
        <Chip x={516} y={528} w={330} h={44} fill={CREAM} stroke={RED} textFill={INK} size={18} script={false}>
          B = μ₀ I / 2π a
        </Chip>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 4)}>
        <T x={862} y={546} size={11.5} fill={MUTED} weight={700} anchor="start">
          {t("the 2 on top cancels half", "the 2 on top cancels half")}
        </T>
        <T x={862} y={564} size={11.5} fill={MUTED} weight={700} anchor="start">
          {t("of the 4 underneath", "of the 4 underneath")}
        </T>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 9)}>
        <T x={516} y={592} size={12} fill={MUTED} weight={700} anchor="start">
          {t("it emerged as a LIMITING CASE — not as a separate derivation to memorise",
             "it emerged as a LIMITING CASE — not as a separate derivation to memorise")}
        </T>
      </Fade>

      {/* ═══════════ beat 10 — direction, and the 1/a fall-off ═══════════ */}
      <Draw on={beat >= 10} delay={dl(10, 0.3)} d={ellD(680, 150, 13, 38)} stroke={BLUE} sw={1.9} dur={0.6} />
      <Draw on={beat >= 10} delay={dl(10, 0.7)} d={ellD(900, 150, 13, 38)} stroke={BLUE} sw={1.9} dur={0.6} />
      <Fade on={beat >= 10} delay={dl(10, 1.2)}>
        <Circle cx={744} cy={106} r={9} fill="none" stroke={BLUE} strokeWidth={1.8} />
        <Circle cx={744} cy={106} r={2.4} fill={BLUE} />
        <T x={760} y={110} size={11} fill={MUTED} weight={700} anchor="start">
          {t("B out above", "B out above")}
        </T>
      </Fade>
      <Fade on={beat >= 10} delay={dl(10, 1.6)}>
        <Circle cx={744} cy={196} r={9} fill="none" stroke={BLUE} strokeWidth={1.8} />
      </Fade>
      <Draw on={beat >= 10} delay={dl(10, 1.8)} d="M 738.4 190.4 L 749.6 201.6 M 749.6 190.4 L 738.4 201.6"
        stroke={BLUE} sw={1.6} dur={0.3} />
      <Fade on={beat >= 10} delay={dl(10, 2)}>
        <T x={760} y={200} size={11} fill={MUTED} weight={700} anchor="start">
          {t("B in below", "B in below")}
        </T>
      </Fade>
      <Fade on={beat >= 10} delay={dl(10, 2.6)}>
        <T x={44} y={576} size={12.5} fill={RED} weight={800} anchor="start">
          {t("DIRECTION — the same right-hand grip as at the start",
             "DIRECTION — the same right-hand grip as at the start")}
        </T>
      </Fade>
      <Fade on={beat >= 10} delay={dl(10, 12)}>
        <T x={44} y={594} size={12.5} fill={INK} weight={800} anchor="start">
          {t("and B ∝ 1/a, NOT 1/a² — the line integral softens it",
             "and B ∝ 1/a, NOT 1/a² — the line integral softens it")}
        </T>
      </Fade>
    </Scene>
  );
}
