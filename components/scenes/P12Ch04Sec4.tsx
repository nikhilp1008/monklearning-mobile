/**
 * P12Ch04 · Section 4 — "Derivation A: Field on the Axis of a Circular Current Loop"
 * Subtopic: Magnetic Field and the Biot-Savart Law
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * RE-CHOREOGRAPHED (2026-08-22).
 *
 * What it used to show: four gates (0, 1, 7, 12) against SIXTEEN narration
 * segments, and four drawn strokes in total — a title underline and two
 * horizontal rules. The board held still from 24s to 192s while the voice
 * set up the geometry, found r, argued sin θ = 1 and split dB into
 * components; the derivation whose whole content is one picture had no
 * picture at all.
 *
 * What the narration actually teaches: the CBSE three-marker. Loop of
 * radius R in the y–z plane, P on the x-axis at distance x. Every element
 * is the same distance r = √(x² + R²) from P and is perpendicular to r, so
 * sin θ = 1. Each dB is ⊥ to r, so it splits into an axial part and a
 * transverse part; the element diametrically opposite kills the transverse
 * part, so only dB cos α survives, with cos α = R/r. The prefactor is
 * constant round the loop, so ∮dl = 2πR and
 *      B = μ₀ I R² / 2 (x² + R²)³ᐟ²,   which at x = 0 gives μ₀I/2R.
 *
 * Beat map (16 segments, gates 0..15 — every beat used):
 *  0  "CBSE asks this most, 3 marks"    title + underline + exam chip
 *  1  "the setup — write it out"        column divider + the four setup lines
 *  2  "look at the figure"              THE FIGURE: loop edge-on, O, dashed
 *                                       axis, P at x, amber element, blue r,
 *                                       red dB split green ∥ + amber ⊥
 *  3  "step 1 — the right triangle"     R and x legs + the right-angle mark
 *  4  "r = √(x² + R²), same for all"    the r result
 *  5  "the angle is 90°, sin θ = 1"     dl ⊙ marker on the figure + the why
 *  6  "so dB = μ₀/4π · I dl /(x²+R²)"   the single-element contribution
 *  7  "step 2 — split it, α at P"       STEP 2 header + the α arc on the figure
 *  8  "the opposite element cancels ⊥"  opposite element, its r′ and dB′,
 *                                       and the two transverse parts struck out
 *  9  "step 3 — sum the axial parts"    STEP 3 header, dB∥ = dB cos α
 * 10  "cos α = R/r → the 3/2 power"     the cosine and where 3/2 comes from
 * 11  "the prefactor is constant"       ∮ dl = 2πR
 * 12  "putting it together"             the on-axis result
 * 13  "special case: x = 0"             SPECIAL CASE header
 * 14  "B = μ₀I/2R, and × N for a coil"  the centre field + the N-turn form
 * 15  "direction — right-hand grip"     ⊗ on the far side + the axial B arrow
 *
 * Colour note: magnetic field / position vector use the chapter blue
 * (#0284c7, as in Sections 1–3); everything else is kit palette.
 */

import React from "react";
import { Circle, Line } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD,
  INK, MUTED, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

const BLUE = "#0284c7";

/* Figure geometry (screen units).
   O = (656, 232) · loop drawn edge-on, rx 32 / ry 100 · P = (800, 232).
   R_screen = 100, x_screen = 144, r_screen = 175.3
   dB unit at P = (100, −144)/175.3 = (0.5705, −0.8214), drawn 110 long. */
const OX = 656, OY = 232, PX = 800, RY = 100;
const DBX = 862.8, DBY = 141.6;   // tip of dB
const DB2Y = 322.4;               // tip of the opposite element's dB

export default function P12Ch04Sec4({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ─────────── beat 0 — title ─────────── */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={44} size={25} fill={RED} script>
          {t("Field on the axis of a loop", "Field on the axis of a loop")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.4)}
        d="M 372 60 C 470 56, 610 64, 712 58" stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 2.4)}>
        <Chip x={44} y={64} w={214} h={28} fill={CREAM} stroke={AMBER_DARK} textFill={AMBER_DARK} size={12} script={false}>
          CBSE · 3 marks · asked most
        </Chip>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 4)}>
        <T x={620} y={82} size={12.5} fill={MUTED} script>
          {t("learn the logic: killing unwanted components by symmetry reappears all through physics",
             "learn the logic: killing unwanted components by symmetry reappears all through physics")}
        </T>
      </Fade>

      {/* ═══════════ beat 1 — the setup ═══════════ */}
      <Draw on={beat >= 1} delay={dl(1, 0.2)} d="M 496 104 V 596" stroke={MUTED} sw={1.2} dur={0.9} />
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <T x={44} y={118} size={13.5} fill={RED} weight={800} anchor="start">
          {t("SETUP — write it out; marks are given for it",
             "SETUP — write it out; marks are given for it")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3)}>
        <T x={44} y={140} size={12.5} fill={INK} weight={700} anchor="start">
          {t("circular loop, radius R, steady current I, in vacuum",
             "circular loop, radius R, steady current I, in vacuum")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 9)}>
        <T x={44} y={160} size={12.5} fill={INK} weight={700} anchor="start">
          {t("loop in the y–z plane, centre at the origin O",
             "loop in the y–z plane, centre at the origin O")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 13)}>
        <T x={44} y={180} size={12.5} fill={INK} weight={700} anchor="start">
          {t("⇒ the x-axis IS the axis of the loop", "⇒ the x-axis IS the axis of the loop")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 18)}>
        <T x={44} y={200} size={12.5} fill={INK} weight={700} anchor="start">
          {t("field point P on that axis, at distance x from O",
             "field point P on that axis, at distance x from O")}
        </T>
      </Fade>

      {/* ═══════════ beat 2 — THE FIGURE ═══════════ */}
      {/* the loop, seen edge-on */}
      <Draw on={beat >= 2} delay={dl(2, 0.3)}
        d={`M ${OX - 32} ${OY} A 32 ${RY} 0 1 1 ${OX + 32} ${OY} A 32 ${RY} 0 1 1 ${OX - 32} ${OY}`}
        stroke={INK} sw={2.4} dur={1} />
      {/* the axis */}
      <Fade on={beat >= 2} delay={dl(2, 1.1)}>
        <Line x1={566} y1={OY} x2={930} y2={OY} stroke={MUTED} strokeWidth={1.6} strokeDasharray="8 7" />
        <Circle cx={OX} cy={OY} r={4.5} fill={INK} />
        <T x={640} y={252} size={13} fill={INK} weight={900} anchor="end">O</T>
        <T x={946} y={252} size={11.5} fill={MUTED} weight={700} anchor="start">
          {t("axis", "axis")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.7)}>
        <Circle cx={PX} cy={OY} r={6} fill={RED} />
        <T x={800} y={258} size={14} fill={RED} weight={900}>P</T>
      </Fade>
      {/* the chosen current element, at the top of the loop */}
      <Draw on={beat >= 2} delay={dl(2, 2.2)} d={`M ${OX - 8} ${OY - RY - 8} H ${OX + 8} V ${OY - RY + 8} H ${OX - 8} Z`}
        stroke={AMBER_DARK} sw={2.4} dur={0.4} fill={CREAM} />
      {/* the position vector element → P */}
      <Draw on={beat >= 2} delay={dl(2, 2.8)} d={arrowD(OX + 10, OY - RY + 8, PX - 8, OY - 6)}
        stroke={BLUE} sw={2.4} dur={0.6} />
      <Fade on={beat >= 2} delay={dl(2, 3.3)}>
        <T x={726} y={168} size={14} fill={BLUE} weight={900} anchor="end">r</T>
      </Fade>
      {/* the elementary contribution at P, and its two parts */}
      <Draw on={beat >= 2} delay={dl(2, 3.9)} d={arrowD(PX, OY, DBX, DBY)} stroke={RED} sw={2.6} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 4.3)}>
        <T x={874} y={136} size={14} fill={RED} weight={900} anchor="start">dB</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 4.7)} d={arrowD(PX, OY, DBX, OY)} stroke={GREEN} sw={2.6} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 5.1)}>
        <T x={876} y={252} size={13} fill={GREEN} weight={900} anchor="start">dB∥</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 5.5)} d={arrowD(PX, OY, PX, DBY)} stroke={AMBER_DARK} sw={2.6} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 5.9)}>
        <T x={788} y={150} size={13} fill={AMBER_DARK} weight={900} anchor="end">dB⊥</T>
        <Line x1={DBX} y1={DBY} x2={DBX} y2={OY} stroke={MUTED} strokeWidth={1.2} strokeDasharray="5 5" />
        <Line x1={PX} y1={DBY} x2={DBX} y2={DBY} stroke={MUTED} strokeWidth={1.2} strokeDasharray="5 5" />
      </Fade>

      {/* ═══════════ beat 3 — step 1, the right triangle ═══════════ */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={44} y={230} size={13} fill={RED} weight={800} anchor="start">
          {t("STEP 1 · how far is the element from P?",
             "STEP 1 · how far is the element from P?")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 3)}>
        <T x={44} y={252} size={12.5} fill={MUTED} weight={700} anchor="start">
          {t("the rim sits R from the axis, P sits x along it — perpendicular legs",
             "the rim sits R from the axis, P sits x along it — perpendicular legs")}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 1)} d={`M ${OX} ${OY - RY} V ${OY}`} stroke={INK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 3} delay={dl(3, 1.5)} d={`M ${OX} ${OY} H ${PX}`} stroke={INK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 3} delay={dl(3, 2)} d={`M ${OX} ${OY - 16} H ${OX + 16} V ${OY}`} stroke={MUTED} sw={1.6} dur={0.3} />
      <Fade on={beat >= 3} delay={dl(3, 2.4)}>
        <T x={646} y={186} size={14} fill={INK} weight={900} anchor="end">R</T>
        <T x={728} y={252} size={14} fill={INK} weight={900}>x</T>
      </Fade>

      {/* ═══════════ beat 4 — r ═══════════ */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={58} y={282} size={17} fill={GREEN} weight={900} anchor="start">r = √( x² + R² )</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 4)}>
        <T x={44} y={304} size={12} fill={MUTED} weight={700} anchor="start">
          {t("the SAME r for every element on the rim — that is what makes the sum painless",
             "the SAME r for every element on the rim — that is what makes the sum painless")}
        </T>
      </Fade>

      {/* ═══════════ beat 5 — the angle is 90° ═══════════ */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={44} y={332} size={12.5} fill={INK} weight={700} anchor="start">
          {t("the element lies in the plane of the loop; r points to the axis",
             "the element lies in the plane of the loop; r points to the axis")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 5)}>
        <T x={44} y={352} size={12.5} fill={RED} weight={800} anchor="start">
          {t("⇒ perpendicular ⇒ θ = 90°, sin θ = 1 — say WHY, it is a mark",
             "⇒ perpendicular ⇒ θ = 90°, sin θ = 1 — say WHY, it is a mark")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <Circle cx={628} cy={112} r={9} fill="none" stroke={AMBER_DARK} strokeWidth={1.8} />
        <Circle cx={628} cy={112} r={2.4} fill={AMBER_DARK} />
        <T x={644} y={116} size={11.5} fill={AMBER_DARK} weight={800} anchor="start">
          {t("I dl — out of the page, so dl ⊥ r", "I dl — out of the page, so dl ⊥ r")}
        </T>
      </Fade>

      {/* ═══════════ beat 6 — one element's contribution ═══════════ */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={58} y={384} size={16} fill={GREEN} weight={900} anchor="start">dB = (μ₀/4π) · I dl / (x² + R²)</T>
      </Fade>

      {/* ═══════════ beat 7 — step 2, the split ═══════════ */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={44} y={414} size={13} fill={RED} weight={800} anchor="start">
          {t("STEP 2 · dB is ⊥ to r, so it does NOT lie along the axis — split it",
             "STEP 2 · dB is ⊥ to r, so it does NOT lie along the axis — split it")}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 1)} d={`M 838 ${OY} A 38 38 0 0 0 821.7 200.8`}
        stroke={AMBER_DARK} sw={2} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.5)}>
        <T x={846} y={216} size={14} fill={AMBER_DARK} weight={900} anchor="start">α</T>
      </Fade>

      {/* ═══════════ beat 8 — the opposite element kills the ⊥ parts ═══════════ */}
      <Fade on={beat >= 8} delay={dl(8, 0.3)}>
        <T x={44} y={438} size={12.5} fill={INK} weight={700} anchor="start">
          {t("the element diametrically opposite: same magnitude,",
             "the element diametrically opposite: same magnitude,")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 10)}>
        <T x={44} y={458} size={12.5} fill={INK} weight={700} anchor="start">
          {t("axial part the SAME way, transverse part exactly OPPOSITE",
             "axial part the SAME way, transverse part exactly OPPOSITE")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 26)}>
        <T x={44} y={480} size={12.5} fill={RED} weight={800} anchor="start">
          {t("★ pair every element with its opposite — only the axial parts survive",
             "★ pair every element with its opposite — only the axial parts survive")}
        </T>
      </Fade>
      <Draw on={beat >= 8} delay={dl(8, 1)} d={`M ${OX - 8} ${OY + RY - 8} H ${OX + 8} V ${OY + RY + 8} H ${OX - 8} Z`}
        stroke={AMBER_DARK} sw={2.4} dur={0.4} fill={CREAM} />
      <Draw on={beat >= 8} delay={dl(8, 1.5)} d={`M ${OX + 10} ${OY + RY - 8} L ${PX - 8} ${OY + 6}`}
        stroke={BLUE} sw={1.8} dur={0.5} />
      <Draw on={beat >= 8} delay={dl(8, 2.1)} d={arrowD(PX, OY, DBX, DB2Y)} stroke={RED} sw={2.2} dur={0.4} />
      <Draw on={beat >= 8} delay={dl(8, 2.5)} d={arrowD(PX, OY, PX, DB2Y)} stroke={AMBER_DARK} sw={2.4} dur={0.4} />
      <Draw on={beat >= 8} delay={dl(8, 3.1)} d="M 786 174 L 814 190 M 814 174 L 786 190" stroke={RED} sw={2.2} dur={0.3} />
      <Draw on={beat >= 8} delay={dl(8, 3.4)} d="M 786 274 L 814 290 M 814 274 L 786 290" stroke={RED} sw={2.2} dur={0.3} />
      <Fade on={beat >= 8} delay={dl(8, 4)}>
        <T x={772} y={372} size={11.5} fill={MUTED} weight={700}>
          {t("the ⊥ parts kill each other · the ∥ parts add — the whole derivation in one picture",
             "the ⊥ parts kill each other · the ∥ parts add — the whole derivation in one picture")}
        </T>
      </Fade>

      {/* ═══════════ beat 9 — step 3 ═══════════ */}
      <Fade on={beat >= 9} delay={dl(9, 0.3)}>
        <T x={44} y={510} size={13} fill={RED} weight={800} anchor="start">
          {t("STEP 3 · sum only the axial parts:   dB∥ = dB cos α",
             "STEP 3 · sum only the axial parts:   dB∥ = dB cos α")}
        </T>
      </Fade>

      {/* ═══════════ beat 10 — cos α and the 3/2 power ═══════════ */}
      <Fade on={beat >= 10} delay={dl(10, 0.3)}>
        <T x={58} y={538} size={15} fill={GREEN} weight={900} anchor="start">cos α = R / r = R / √( x² + R² )</T>
      </Fade>
      <Fade on={beat >= 10} delay={dl(10, 6)}>
        <T x={44} y={560} size={12} fill={MUTED} weight={700} anchor="start">
          {t("combining the two denominators gives (x² + R²)³ᐟ² — that is where 3/2 comes from",
             "combining the two denominators gives (x² + R²)³ᐟ² — that is where 3/2 comes from")}
        </T>
      </Fade>

      {/* ═══════════ beat 11 — the integration ═══════════ */}
      <Fade on={beat >= 11} delay={dl(11, 0.3)}>
        <T x={44} y={586} size={12.5} fill={INK} weight={800} anchor="start">
          {t("I, R and x are the same all round ⇒ ∮ dl = 2πR, the circumference",
             "I, R and x are the same all round ⇒ ∮ dl = 2πR, the circumference")}
        </T>
      </Fade>

      {/* ═══════════ beat 12 — the on-axis result ═══════════ */}
      <Fade on={beat >= 12} delay={dl(12, 0.3)}>
        <Chip x={520} y={390} w={520} h={46} fill={CREAM} stroke={GREEN} textFill={INK} size={18} script={false}>
          B = μ₀ I R² / 2 (x² + R²)³ᐟ²
        </Chip>
      </Fade>
      <Fade on={beat >= 12} delay={dl(12, 3)}>
        <T x={780} y={452} size={11.5} fill={MUTED} weight={700}>
          {t("the on-axis field of a circular loop — the 4π and 2π partly cancel, R × R gives R²",
             "the on-axis field of a circular loop — the 4π and 2π partly cancel, R × R gives R²")}
        </T>
      </Fade>

      {/* ═══════════ beat 13 — the special case ═══════════ */}
      <Fade on={beat >= 13} delay={dl(13, 0.3)}>
        <T x={520} y={480} size={13} fill={RED} weight={800} anchor="start">
          {t("SPECIAL CASE — put the field point AT the centre:  x = 0",
             "SPECIAL CASE — put the field point AT the centre:  x = 0")}
        </T>
      </Fade>

      {/* ═══════════ beat 14 — the centre field ═══════════ */}
      <Fade on={beat >= 14} delay={dl(14, 0.3)}>
        <T x={534} y={504} size={14} fill={INK} weight={900} anchor="start">
          (0 + R²)³ᐟ² = R³   ⇒   B = μ₀ I R² / 2R³
        </T>
      </Fade>
      <Fade on={beat >= 14} delay={dl(14, 4)}>
        <Chip x={520} y={516} w={272} h={40} fill={CREAM} stroke={RED} textFill={INK} size={17} script={false}>
          B centre = μ₀ I / 2R
        </Chip>
      </Fade>
      <Fade on={beat >= 14} delay={dl(14, 8)}>
        <T x={806} y={542} size={13} fill={GREEN} weight={900} anchor="start">
          coil of N turns:  B = N μ₀ I / 2R
        </T>
      </Fade>

      {/* ═══════════ beat 15 — the direction ═══════════ */}
      <Fade on={beat >= 15} delay={dl(15, 0.3)}>
        <Circle cx={600} cy={332} r={9} fill="none" stroke={AMBER_DARK} strokeWidth={1.8} />
      </Fade>
      <Draw on={beat >= 15} delay={dl(15, 0.5)} d="M 594.4 326.4 L 605.6 337.6 M 605.6 326.4 L 594.4 337.6"
        stroke={AMBER_DARK} sw={1.6} dur={0.3} />
      <Draw on={beat >= 15} delay={dl(15, 0.9)} d={arrowD(884, 200, 970, 200)} stroke={GREEN} sw={3} dur={0.5} />
      <Fade on={beat >= 15} delay={dl(15, 1.4)}>
        <T x={927} y={190} size={11.5} fill={GREEN} weight={800}>
          {t("B along the axis", "B along the axis")}
        </T>
      </Fade>
      <Fade on={beat >= 15} delay={dl(15, 2)}>
        <T x={520} y={574} size={12.5} fill={RED} weight={800} anchor="start">
          {t("DIRECTION — right-hand grip: curl the fingers along I, the thumb gives B",
             "DIRECTION — right-hand grip: curl the fingers along I, the thumb gives B")}
        </T>
      </Fade>
      <Fade on={beat >= 15} delay={dl(15, 8)}>
        <T x={520} y={594} size={12} fill={MUTED} weight={700} anchor="start">
          {t("same rule as before, on a bent wire — a magnitude without a direction is incomplete",
             "same rule as before, on a bent wire — a magnitude without a direction is incomplete")}
        </T>
      </Fade>
    </Scene>
  );
}
