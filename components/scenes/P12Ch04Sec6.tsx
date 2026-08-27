/**
 * P12Ch04 · Section 6 — "Worked Examples One and Two: Coil at the Centre, and
 * the Arc Trap"
 * Subtopic: Magnetic Field and the Biot-Savart Law
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * RE-CHOREOGRAPHED (2026-08-22). What it used to show: four gates (0,1,5,11)
 * against thirteen narration segments, and four drawn strokes in total — the
 * title underline plus two horizontal rules. Two examples, both of them
 * geometric, and not one circle on the board: no coil, no arc, no leads, no
 * angle. The board sat frozen for roughly a minute at a stretch.
 *
 * What the narration actually teaches: (1) a board-level coil at its centre,
 * B = N μ₀ I / 2R, where the marks live in converting cm → m and in stating a
 * direction; and (2) the arc trap — a 240° arc with radial leads, where the
 * leads contribute nothing (dl ∥ r̂ ⇒ sin θ = 0) and the arc is just the
 * fraction 240/360 = 2/3 of a full loop, so no integration is needed.
 *
 * Beat map (13 segments, gates 0..12 — every beat used):
 *  0  "four examples, work them on paper"   title + underline + subtitle
 *  1  Ex 1 statement + the two keywords     header, statement, COIL FIGURE
 *                                           (4 concentric turns, circulation
 *                                            chevrons, ⊙ B on the axis, radius)
 *  2  list the givens, pick the formula     N / R (converted) / I  +  formula chip
 *  3  substitute                            3π × 10⁻⁴ over 0.16
 *  4  answer + direction + sanity check     5.9 mT chip + RIGHT-HAND-GRIP sketch
 *  5  "example two is a speed trap"         column divider + Ex 2 header
 *  6  240° arc, R = 10 cm, I = 6.0 A        statement, and the radial leads
 *  7  "look at the figure"                  ARC FIGURE: 240° arc with the gap
 *                                           opening lower-left, two radial
 *                                           leads through O, the angle arc,
 *                                           the radius — plus its read-out
 *  8  the two traps                         full-circle reflex · wrong angle
 *  9  the leads are free                    dl ∥ r̂ ⇒ θ = 0 ⇒ dB = 0
 * 10  don't integrate — a fraction of a loop
 * 11  240/360 = 2/3, the part PRESENT
 * 12  the numbers                           3.77 × 10⁻⁵ T × 2/3 = 25 μT
 *
 * Arithmetic (recomputed):
 *   Ex 1  numerator 250 × 4π×10⁻⁷ × 3.0 = 3000π × 10⁻⁷ = 3π × 10⁻⁴
 *         denominator 2 × 0.080 = 0.16
 *         B = 3π×10⁻⁴ / 0.16 = 9.4248×10⁻⁴ / 0.16 = 5.890×10⁻³ → 5.9 × 10⁻³ T
 *         = 5.9 mT.
 *   Ex 2  full loop = 4π×10⁻⁷ × 6.0 / 0.20 = 7.5398×10⁻⁶ / 0.20 = 3.770×10⁻⁵ T
 *         × 2/3 = 2.513×10⁻⁵ → 2.5 × 10⁻⁵ T = 25 μT.
 *   Both match the spoken values exactly.
 *
 * Colour note: the narration calls the arc "the thick blue curve" and the leads
 * "the two amber lines", so those are pinned; blue is the corpus field blue.
 */

import React from "react";
import { Circle } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD,
  INK, INK_LIGHT, MUTED, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

const BLUE = "#0284c7";

/** circle as a drawable path */
const circD = (cx: number, cy: number, r: number) =>
  `M ${cx - r} ${cy} A ${r} ${r} 0 1 1 ${cx + r} ${cy} A ${r} ${r} 0 1 1 ${cx - r} ${cy}`;

/** ellipse as a drawable path (the curling fingers of the grip rule) */
const ellD = (cx: number, cy: number, rx: number, ry: number) =>
  `M ${cx - rx} ${cy} A ${rx} ${ry} 0 1 1 ${cx + rx} ${cy} A ${rx} ${ry} 0 1 1 ${cx - rx} ${cy}`;

export default function P12Ch04Sec6({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const turns = [38, 42, 46, 50];

  return (
    <Scene>
      {/* ═══════════ beat 0 — title ═══════════ */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={46} size={25} fill={RED} script>
          {t("A coil at its centre, then the arc trap", "A coil at its centre, then the arc trap")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.5)}
        d="M 320 62 C 460 58, 640 66, 762 60" stroke={RED} sw={2.2} dur={0.65} />
      <Fade on={beat >= 0} delay={dl(0, 2.6)}>
        <T x={540} y={80} size={13} fill={MUTED} script>
          {t("board level, then a NEET speed trap — work each one on paper alongside me",
             "board level, then a NEET speed trap — work each one on paper alongside me")}
        </T>
      </Fade>

      {/* ═══════════ EXAMPLE 1 · left column — beats 1..4 ═══════════ */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={44} y={104} size={14} fill={RED} weight={800} anchor="start">
          {t("EXAMPLE 1 · BOARD LEVEL", "EXAMPLE 1 · BOARD LEVEL")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <T x={44} y={126} size={12.8} fill={INK} weight={600} anchor="start">
          {t("A closely-wound circular coil of 250 turns, radius 8.0 cm, carries 3.0 A.",
             "A closely-wound circular coil of 250 turns, radius 8.0 cm, carries 3.0 A.")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.1)}>
        <T x={44} y={146} size={12.8} fill={INK} weight={600} anchor="start">
          {t("Find the magnetic field at the centre of the coil.",
             "Find the magnetic field at the centre of the coil.")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.7)}>
        <T x={44} y={170} size={12.4} fill={INK_LIGHT} weight={600} anchor="start">
          {t("“closely-wound” → every turn at the same R, so they simply add",
             "“closely-wound” → every turn at the same R, so they simply add")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.3)}>
        <T x={44} y={188} size={12.4} fill={INK_LIGHT} weight={600} anchor="start">
          {t("“at the centre” → tells you which formula you need",
             "“at the centre” → tells you which formula you need")}
        </T>
      </Fade>

      {/* ---- the coil, face-on ---- */}
      <Fade on={beat >= 1} delay={dl(1, 2.8)}>
        <T x={140} y={206} size={12.4} fill={MUTED} weight={700}>N = 250</T>
      </Fade>
      {turns.map((r, i) => (
        <Draw key={`turn${r}`} on={beat >= 1} delay={dl(1, 3 + i * 0.18)}
          d={circD(140, 268, r)} stroke={INK} sw={1.9} dur={0.8} />
      ))}
      <Draw on={beat >= 1} delay={dl(1, 4)} d="M 132 212 L 142 218 L 132 224" stroke={INK} sw={2} dur={0.25} />
      <Draw on={beat >= 1} delay={dl(1, 4.1)} d="M 148 312 L 138 318 L 148 324" stroke={INK} sw={2} dur={0.25} />
      <Fade on={beat >= 1} delay={dl(1, 4.4)}>
        <Circle cx={140} cy={268} r={8} fill="none" stroke={BLUE} strokeWidth={1.8} />
        <Circle cx={140} cy={268} r={2.4} fill={BLUE} />
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 4.7)} d={arrowD(152, 268, 190, 268)} stroke={INK} sw={1.8} dur={0.35} />
      <Fade on={beat >= 1} delay={dl(1, 5)}>
        <T x={172} y={258} size={12} fill={INK} weight={800}>R</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 5.3)}>
        <T x={140} y={346} size={12} fill={MUTED} weight={600}>R = 8.0 cm = 0.080 m · I = 3.0 A</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 5.7)}>
        <T x={140} y={364} size={11.8} fill={BLUE} weight={700}>
          {t("B at the centre, along the axis", "B at the centre, along the axis")}
        </T>
      </Fade>

      {/* ---- beat 2 — givens and the formula ---- */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={210} y={222} size={13} fill={AMBER_DARK} weight={800} anchor="start">
          {t("GIVEN — convert first", "GIVEN — convert first")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={210} y={246} size={12.6} fill={INK} weight={700} anchor="start">N = 250</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.3)}>
        <T x={210} y={266} size={12.6} fill={RED} weight={700} anchor="start">R = 8.0 cm = 0.080 m</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.8)}>
        <T x={210} y={286} size={12.6} fill={INK} weight={700} anchor="start">I = 3.0 A</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.4)}>
        <Chip x={210} y={298} w={300} h={36} fill={CREAM} stroke={RED} textFill={INK} size={15} script={false}>
          B = N μ₀ I / 2R
        </Chip>
      </Fade>

      {/* ---- beat 3 — substitute ---- */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={44} y={386} size={13} fill={AMBER_DARK} weight={800} anchor="start">
          {t("SUBSTITUTE", "SUBSTITUTE")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={44} y={410} size={12.6} fill={INK} weight={700} anchor="start">
          numerator:  250 × 4π × 10⁻⁷ × 3.0 = 3π × 10⁻⁴
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.6)}>
        <T x={44} y={432} size={12.6} fill={INK} weight={700} anchor="start">
          denominator:  2 × 0.080 = 0.16
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 2.2)} d="M 44 442 L 512 442" stroke={INK} sw={1.5} dur={0.6} />
      <Fade on={beat >= 3} delay={dl(3, 2.6)}>
        <T x={44} y={464} size={13.4} fill={INK} weight={800} anchor="start">
          B = 3π × 10⁻⁴ / 0.16 = 5.9 × 10⁻³ T
        </T>
      </Fade>

      {/* ---- beat 4 — answer, direction, sanity check ---- */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <Chip x={44} y={476} w={300} h={36} fill={GREEN} textFill="#ffffff" size={14} script={false}>
          B = 5.9 × 10⁻³ T = 5.9 mT
        </Chip>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1)} d={arrowD(470, 580, 470, 482)} stroke={INK} sw={2.6} dur={0.5} />
      <Draw on={beat >= 4} delay={dl(4, 1.5)} d={ellD(470, 508, 28, 10)} stroke={AMBER_DARK} sw={2} dur={0.5} />
      <Draw on={beat >= 4} delay={dl(4, 1.8)} d={ellD(470, 544, 28, 10)} stroke={AMBER_DARK} sw={2} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 2.1)}>
        <T x={484} y={486} size={12.5} fill={BLUE} weight={900} anchor="start">B</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.4)}>
        <T x={470} y={594} size={11.5} fill={MUTED} weight={600}>
          {t("right-hand grip", "right-hand grip")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.8)}>
        <T x={44} y={540} size={12.5} fill={INK} weight={700} anchor="start">
          {t("direction: along the coil’s axis — right-hand grip,",
             "direction: along the coil’s axis — right-hand grip,")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 3.3)}>
        <T x={44} y={558} size={12.5} fill={INK} weight={700} anchor="start">
          {t("fingers curling along the current", "fingers curling along the current")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 3.9)}>
        <T x={44} y={580} size={12.2} fill={MUTED} weight={600} anchor="start">
          {t("scale check: a few mT is right, not several tesla",
             "scale check: a few mT is right, not several tesla")}
        </T>
      </Fade>

      {/* ═══════════ EXAMPLE 2 · right column — beats 5..12 ═══════════ */}
      <Draw on={beat >= 5} delay={dl(5, 0.1)} d="M 540 92 L 540 592" stroke={MUTED} sw={1.2} dur={0.9} />
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={564} y={104} size={14} fill={RED} weight={800} anchor="start">
          {t("EXAMPLE 2 · NEET SPEED TRAP", "EXAMPLE 2 · NEET SPEED TRAP")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        <T x={564} y={126} size={12.4} fill={MUTED} script anchor="start">
          {t("engineered so the obvious first move is the wrong one",
             "engineered so the obvious first move is the wrong one")}
        </T>
      </Fade>

      {/* ---- beat 6 — the statement ---- */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={564} y={150} size={12.6} fill={INK} weight={600} anchor="start">
          {t("A wire is bent into an arc subtending 240° at its centre.",
             "A wire is bent into an arc subtending 240° at its centre.")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.9)}>
        <T x={564} y={168} size={12.6} fill={INK} weight={600} anchor="start">
          {t("R = 10 cm, I = 6.0 A. What is the field at the centre?",
             "R = 10 cm, I = 6.0 A. What is the field at the centre?")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.5)}>
        <T x={564} y={186} size={12.4} fill={INK_LIGHT} weight={600} anchor="start">
          {t("The leads joining the arc to the supply lie along radial lines.",
             "The leads joining the arc to the supply lie along radial lines.")}
        </T>
      </Fade>

      {/* ---- beat 7 — the figure, and how to read it ---- */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)}
        d="M 692.05 327.89 A 62 62 0 1 0 616.11 251.95" stroke={BLUE} sw={4} dur={1.2} />
      <Draw on={beat >= 7} delay={dl(7, 1.3)} d="M 676 268 L 697.7 348.9" stroke={AMBER_DARK} sw={2.6} dur={0.5} />
      <Draw on={beat >= 7} delay={dl(7, 1.6)} d="M 676 268 L 595.2 246.3" stroke={AMBER_DARK} sw={2.6} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 1.9)}>
        <Circle cx={676} cy={268} r={3.6} fill={INK} />
        <T x={664} y={284} size={11.5} fill={INK} weight={800} anchor="end">O</T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 2.2)}
        d="M 682.73 293.11 A 26 26 0 1 0 650.89 261.27" stroke={RED} sw={1.8} dur={0.8} />
      <Fade on={beat >= 7} delay={dl(7, 2.9)}>
        <T x={676} y={226} size={13} fill={RED} weight={900}>240°</T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 3.2)} d={arrowD(676, 268, 738, 268)} stroke={INK} sw={1.7} dur={0.35} />
      <Fade on={beat >= 7} delay={dl(7, 3.5)}>
        <T x={714} y={260} size={12} fill={INK} weight={800}>R</T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 3.7)} d="M 670 200 L 680 206 L 670 212" stroke={BLUE} sw={2.4} dur={0.25} />
      <Fade on={beat >= 7} delay={dl(7, 4)}>
        <T x={676} y={372} size={12} fill={MUTED} weight={600}>R = 10 cm = 0.10 m · I = 6.0 A</T>
      </Fade>

      <Fade on={beat >= 7} delay={dl(7, 4.4)}>
        <T x={790} y={214} size={12.6} fill={BLUE} weight={800} anchor="start">
          {t("the blue arc — most of a circle,", "the blue arc — most of a circle,")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 4.8)}>
        <T x={790} y={232} size={12.3} fill={INK_LIGHT} weight={600} anchor="start">
          {t("the missing third opens lower-left", "the missing third opens lower-left")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 5.4)}>
        <T x={790} y={258} size={12.6} fill={AMBER_DARK} weight={800} anchor="start">
          {t("the amber leads run from O", "the amber leads run from O")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 5.8)}>
        <T x={790} y={276} size={12.3} fill={INK_LIGHT} weight={600} anchor="start">
          {t("out along radii, through the centre", "out along radii, through the centre")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 6.4)}>
        <T x={790} y={302} size={12.2} fill={MUTED} weight={600} anchor="start">
          {t("that fact is what makes them free", "that fact is what makes them free")}
        </T>
      </Fade>

      {/* ---- beat 8 — the traps ---- */}
      <Fade on={beat >= 8} delay={dl(8, 0.3)}>
        <T x={564} y={400} size={12.8} fill={RED} weight={800} anchor="start">
          {t("TWO TRAPS — both cost TIME", "TWO TRAPS — both cost TIME")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 0.9)}>
        <T x={564} y={419} size={12.3} fill={INK_LIGHT} weight={600} anchor="start">
          {t("1 · reaching for the full-circle formula", "1 · reaching for the full-circle formula")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 1.5)}>
        <T x={564} y={437} size={12.3} fill={INK_LIGHT} weight={600} anchor="start">
          {t("2 · the wrong angle, or fussing over the leads", "2 · the wrong angle, or fussing over the leads")}
        </T>
      </Fade>

      {/* ---- beat 9 — the leads are free ---- */}
      <Fade on={beat >= 9} delay={dl(9, 0.3)}>
        <T x={564} y={462} size={12.7} fill={AMBER_DARK} weight={800} anchor="start">
          {t("THE LEADS ARE FREE", "THE LEADS ARE FREE")}
        </T>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 1)}>
        <T x={564} y={481} size={12.4} fill={GREEN} weight={700} anchor="start">
          {t("radial ⇒ dl and r̂ along one line ⇒ θ = 0, sin θ = 0 ⇒ dB = 0",
             "radial ⇒ dl and r̂ along one line ⇒ θ = 0, sin θ = 0 ⇒ dB = 0")}
        </T>
      </Fade>

      {/* ---- beat 10 — an arc is a fraction of a loop ---- */}
      <Fade on={beat >= 10} delay={dl(10, 0.3)}>
        <T x={564} y={506} size={12.7} fill={AMBER_DARK} weight={800} anchor="start">
          {t("DO NOT INTEGRATE — an arc is a FRACTION of a loop",
             "DO NOT INTEGRATE — an arc is a FRACTION of a loop")}
        </T>
      </Fade>
      <Fade on={beat >= 10} delay={dl(10, 1)}>
        <T x={564} y={525} size={12.4} fill={INK} weight={600} anchor="start">
          {t("every element at the same R, contributing the same way",
             "every element at the same R, contributing the same way")}
        </T>
      </Fade>

      {/* ---- beat 11 — the fraction that is PRESENT ---- */}
      <Fade on={beat >= 11} delay={dl(11, 0.3)}>
        <T x={564} y={550} size={13} fill={GREEN} weight={900} anchor="start">
          {t("240 / 360 = 2/3 — the part PRESENT, not the missing third",
             "240 / 360 = 2/3 — the part PRESENT, not the missing third")}
        </T>
      </Fade>

      {/* ---- beat 12 — the numbers ---- */}
      <Fade on={beat >= 12} delay={dl(12, 0.3)}>
        <T x={564} y={572} size={12.5} fill={INK} weight={700} anchor="start">
          full loop:  4π × 10⁻⁷ × 6.0 / 0.20 = 3.77 × 10⁻⁵ T
        </T>
      </Fade>
      <Fade on={beat >= 12} delay={dl(12, 1.2)}>
        <T x={564} y={592} size={13.4} fill={RED} weight={900} anchor="start">
          × 2/3  ⇒  B = 2.5 × 10⁻⁵ T = 25 μT
        </T>
      </Fade>
    </Scene>
  );
}
