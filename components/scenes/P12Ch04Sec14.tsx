/**
 * P12Ch04 · Section 14 — "Worked Examples One and Two: Solenoid Numerical and
 * the Thick-Wire Trap"
 * Subtopic: Ampere's Circuital Law and Its Applications
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * RE-CHOREOGRAPHED (2026-08-22). What it used to show: four gates (0,1,5,11)
 * against twelve narration segments, four drawn strokes in total (the title
 * underline and two horizontal rules), and three stacked blocks of numbered
 * prose that all snapped in at once. No solenoid, no wire, no B–r profile —
 * even though segment 7 says "put the profile on the board" and then reads the
 * answer straight off it. The board also printed 15.1 mT where the narration
 * says 1.5 × 10⁻² T ≈ 15 mT.
 *
 * What the narration actually teaches: (1) a board-level solenoid numerical
 * whose only real step is n = N/L, and (2) a NEET speed trap — for a thick
 * wire, B at r = R/2 (inside, B ∝ r) equals B at r = 2R (outside, B ∝ 1/r),
 * both equal to μ₀I/4πR, so the ratio is exactly 1.
 *
 * Beat map (12 segments, gates 0..11 — every beat used):
 *  0  "time for the numericals"             title + underline + subtitle
 *  1  Ex 1 statement, 50 cm / 1500 / 4.0 A  header, statement, SOLENOID FIGURE
 *                                           (12 windings, 3 interior B arrows,
 *                                            two leads, L dimension bracket)
 *  2  "the one step where students trip"    L = 0.50 m, n = 1500/0.50 = 3000 /m
 *  3  substitute B = μ₀ n I                 3000 × 4.0 = 1.2 × 10⁴ → 1.5×10⁻² T
 *  4  "≈ 15 mT, along the axis"             answer chip + scale check
 *  5  "example two is the speed trap"       divider + Ex 2 header
 *  6  thick wire, compare R/2 with 2R       statement + CROSS-SECTION FIGURE
 *                                           (wire circle, ⊙ current out of the
 *                                            page, R radius, the two probe
 *                                            points on a measured baseline)
 *  7  "put the profile on the board"        B–r PROFILE GRAPH: rising blue line
 *                                           inside, red 1/r curve outside, the
 *                                           two points, amber level line
 *  8  the two traps                         assumption trap + formula trap
 *  9  inside point, r = R/2                 μ₀ I r / 2πR² → μ₀ I / 4πR
 * 10  outside point, r = 2R                 μ₀ I / 2πr    → μ₀ I / 4πR
 * 11  "they are identical, ratio = 1"       brace joining the two results + the
 *                                           two-mechanisms closing line
 *
 * Arithmetic (recomputed):
 *   n = 1500 / 0.50 = 3000 turns per metre.
 *   B = μ₀ n I = (4π×10⁻⁷)(3000)(4.0) = (4π×10⁻⁷)(1.2×10⁴) = 1.508×10⁻² T
 *     → written as 1.5 × 10⁻² T ≈ 15 mT (exactly what the narration says).
 *   Inside : B = μ₀ I r / 2πR² at r = R/2 → μ₀ I (R/2) / 2πR² = μ₀ I / 4πR.
 *   Outside: B = μ₀ I / 2πr   at r = 2R  → μ₀ I / 2π(2R)     = μ₀ I / 4πR.
 *   Ratio = 1 exactly. The graph is drawn to scale: peak height h at r = R,
 *   so the rising branch gives h/2 at r = R/2 and the 1/r branch gives h/2 at
 *   r = 2R — the amber joining line really is level.
 *
 * Colour note: the narration names "the blue line rising", "the red curve
 * falling" and "the amber dashed line joining them", so those three colours are
 * pinned. Magnetic-field blue is the corpus blue used across P12Ch04.
 */

import React from "react";
import { Circle } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD,
  INK, INK_LIGHT, MUTED, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

const BLUE = "#0284c7";

/** ellipse as a drawable path — one winding of the solenoid, seen edge-on */
const ellD = (cx: number, cy: number, rx: number, ry: number) =>
  `M ${cx - rx} ${cy} A ${rx} ${ry} 0 1 1 ${cx + rx} ${cy} A ${rx} ${ry} 0 1 1 ${cx - rx} ${cy}`;

/** circle as a drawable path */
const circD = (cx: number, cy: number, r: number) =>
  `M ${cx - r} ${cy} A ${r} ${r} 0 1 1 ${cx + r} ${cy} A ${r} ${r} 0 1 1 ${cx - r} ${cy}`;

/** straight dashed line as a single path (Draw takes no dasharray) */
function dashD(x1: number, y1: number, x2: number, y2: number, n = 8): string {
  const p: string[] = [];
  for (let i = 0; i < n; i++) {
    const a = i / n;
    const b = a + 0.62 / n;
    p.push(
      `M ${(x1 + (x2 - x1) * a).toFixed(1)} ${(y1 + (y2 - y1) * a).toFixed(1)} ` +
      `L ${(x1 + (x2 - x1) * b).toFixed(1)} ${(y1 + (y2 - y1) * b).toFixed(1)}`
    );
  }
  return p.join(" ");
}

/* ---- the B–r profile, drawn to scale ---------------------------------- */
const GX = 340;   // origin x   (r = 0)
const GY = 528;   // origin y   (B = 0)
const GW = 88;    // pixels per R
const GH = 130;   // peak height at r = R
const xAt = (k: number) => GX + GW * k;              // k = r / R
const yAt = (k: number) => GY - GH / Math.max(k, 1); // outside branch, B ∝ 1/r

/** the 1/r branch, from r = R out to r = 3.9 R */
const OUTSIDE_D = [1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.8, 2, 2.25, 2.5, 2.75, 3, 3.35, 3.7, 3.9]
  .map((k, i) => `${i === 0 ? "M" : "L"} ${xAt(k).toFixed(1)} ${yAt(k).toFixed(1)}`)
  .join(" ");

export default function P12Ch04Sec14({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const windings = [66, 88, 110, 132, 154, 176, 198, 220, 242, 264, 286, 308];
  const dots: [number, number][] = [
    [160, 436], [130, 458], [196, 448], [138, 496], [182, 498],
  ];

  return (
    <Scene>
      {/* ═══════════ beat 0 — title ═══════════ */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={46} size={25} fill={RED} script>
          {t("Two numericals: the solenoid, then the thick-wire trap",
             "Two numericals: the solenoid, then the thick-wire trap")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.5)}
        d="M 236 62 C 420 58, 660 66, 846 60" stroke={RED} sw={2.2} dur={0.65} />
      <Fade on={beat >= 0} delay={dl(0, 2.6)}>
        <T x={540} y={80} size={13} fill={MUTED} script>
          {t("board level first, then the NEET speed trap — work them on paper",
             "board level first, then the NEET speed trap — work them on paper")}
        </T>
      </Fade>

      {/* ═══════════ EXAMPLE 1 — beats 1..4 ═══════════ */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={44} y={106} size={14} fill={RED} weight={800} anchor="start">
          {t("EXAMPLE 1 · BOARD LEVEL — B at the centre of a solenoid",
             "EXAMPLE 1 · BOARD LEVEL — B at the centre of a solenoid")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <T x={44} y={128} size={12.8} fill={INK} weight={600} anchor="start">
          {t("A solenoid 50 cm long, 1500 turns, carrying 4.0 A — find B at its centre.",
             "A solenoid 50 cm long, 1500 turns, carrying 4.0 A — find B at its centre.")}
        </T>
      </Fade>

      {/* ---- the solenoid figure ---- */}
      {windings.map((x, i) => (
        <Draw key={`w${x}`} on={beat >= 1} delay={dl(1, 1.1 + i * 0.055)}
          d={ellD(x, 192, 8, 26)} stroke={INK} sw={2} dur={0.35} />
      ))}
      <Draw on={beat >= 1} delay={dl(1, 1.9)} d={arrowD(86, 178, 288, 178)} stroke={BLUE} sw={2.1} dur={0.6} />
      <Draw on={beat >= 1} delay={dl(1, 2.1)} d={arrowD(78, 192, 296, 192)} stroke={BLUE} sw={2.4} dur={0.6} />
      <Draw on={beat >= 1} delay={dl(1, 2.3)} d={arrowD(86, 206, 288, 206)} stroke={BLUE} sw={2.1} dur={0.6} />
      <Draw on={beat >= 1} delay={dl(1, 2.7)} d={arrowD(44, 150, 64, 164)} stroke={AMBER_DARK} sw={2.2} dur={0.3} />
      <Draw on={beat >= 1} delay={dl(1, 2.8)} d="M 308 166 L 330 150" stroke={AMBER_DARK} sw={2.2} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 3)}>
        <T x={44} y={142} size={12.5} fill={AMBER_DARK} weight={800} anchor="start">I = 4.0 A</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.2)}>
        <T x={187} y={150} size={12.5} fill={MUTED} weight={700}>
          {t("N = 1500 turns", "N = 1500 turns")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 3.5)}
        d="M 66 242 L 66 254 M 66 248 L 308 248 M 308 242 L 308 254" stroke={MUTED} sw={1.6} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 3.9)}>
        <T x={187} y={270} size={12.5} fill={MUTED} weight={700}>L = 50 cm = 0.50 m</T>
      </Fade>

      {/* ---- beat 2 — the one step that trips people ---- */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={364} y={152} size={13.5} fill={AMBER_DARK} weight={800} anchor="start">
          {t("STEP 1 — turns per unit length n", "STEP 1 — turns per unit length n")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={364} y={176} size={12.8} fill={INK} weight={600} anchor="start">
          {t("the question hands you N and L; the formula wants n",
             "the question hands you N and L; the formula wants n")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.4)}>
        <T x={364} y={198} size={12.8} fill={INK} weight={600} anchor="start">
          {t("L = 50 cm = 0.50 m — convert first, on its own line",
             "L = 50 cm = 0.50 m — convert first, on its own line")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <Chip x={364} y={210} w={344} h={38} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={15} script={false}>
          n = N / L = 1500 / 0.50 = 3000 /m
        </Chip>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.7)}>
        <T x={364} y={268} size={12.4} fill={MUTED} weight={600} anchor="start">
          {t("label this line — the factor-of-two slip creeps in right here",
             "label this line — the factor-of-two slip creeps in right here")}
        </T>
      </Fade>

      {/* ---- beat 3 — substitute ---- */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={740} y={152} size={13.5} fill={INK} weight={800} anchor="start">
          {t("STEP 2 — substitute  B = μ₀ n I", "STEP 2 — substitute  B = μ₀ n I")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.9)}>
        <T x={740} y={178} size={12.8} fill={INK} weight={700} anchor="start">
          B = (4π × 10⁻⁷)(3000)(4.0)
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.6)}>
        <T x={740} y={200} size={12.8} fill={INK} weight={700} anchor="start">
          3000 × 4.0 = 1.2 × 10⁴
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 2.1)} d="M 740 210 L 1036 210" stroke={INK} sw={1.5} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 2.5)}>
        <T x={740} y={232} size={15} fill={GREEN} weight={900} anchor="start">
          B = 1.5 × 10⁻² T
        </T>
      </Fade>

      {/* ---- beat 4 — the answer, with a direction ---- */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <Chip x={740} y={242} w={252} h={34} fill={GREEN} textFill="#ffffff" size={14} script={false}>
          {t("≈ 15 mT, along the axis", "≈ 15 mT, along the axis")}
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.2)}>
        <T x={740} y={294} size={12.2} fill={MUTED} weight={600} anchor="start">
          {t("scale check: a few mT from a few amperes is entirely typical",
             "scale check: a few mT from a few amperes is entirely typical")}
        </T>
      </Fade>

      {/* ═══════════ EXAMPLE 2 — beats 5..11 ═══════════ */}
      <Draw on={beat >= 5} delay={dl(5, 0.1)} d="M 44 306 L 1036 306" stroke={MUTED} sw={1.2} dur={0.7} />
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={44} y={332} size={14} fill={RED} weight={800} anchor="start">
          {t("EXAMPLE 2 · NEET SPEED TRAP — the thick wire",
             "EXAMPLE 2 · NEET SPEED TRAP — the thick wire")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.4)}>
        <T x={500} y={332} size={12.5} fill={MUTED} script anchor="start">
          {t("the answer is genuinely counter-intuitive", "the answer is genuinely counter-intuitive")}
        </T>
      </Fade>

      {/* ---- beat 6 — statement + the wire cross-section ---- */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={44} y={356} size={12.6} fill={INK} weight={600} anchor="start">
          {t("A long thick wire of radius R carries current I spread uniformly over its cross-section.",
             "A long thick wire of radius R carries current I spread uniformly over its cross-section.")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={44} y={374} size={12.6} fill={INK} weight={600} anchor="start">
          {t("Compare B at r = R/2, inside the conductor, with B at r = 2R, outside it.",
             "Compare B at r = R/2, inside the conductor, with B at r = 2R, outside it.")}
        </T>
      </Fade>

      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={160} y={410} size={11.8} fill={MUTED} weight={600}>
          {t("cross-section · I out of the page", "cross-section · I out of the page")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.9)} d={circD(160, 470, 52)} stroke={INK} sw={2.6} dur={0.9} fill={CREAM} />
      {dots.map(([cx, cy], i) => (
        <Fade key={`d${cx}-${cy}`} on={beat >= 6} delay={dl(6, 2.5 + i * 0.14)}>
          <Circle cx={cx} cy={cy} r={7} fill="none" stroke={GREEN} strokeWidth={1.6} />
          <Circle cx={cx} cy={cy} r={2.2} fill={GREEN} />
        </Fade>
      ))}
      <Draw on={beat >= 6} delay={dl(6, 3.3)} d={arrowD(160, 470, 123.2, 433.2)} stroke={INK} sw={1.8} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 3.6)}>
        <T x={114} y={426} size={12} fill={INK} weight={800} anchor="end">R</T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 3.9)} d="M 160 470 L 274 470" stroke={MUTED} sw={1.3} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 4.2)}>
        <Circle cx={186} cy={470} r={5} fill={BLUE} />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 4.4)}>
        <Circle cx={264} cy={470} r={5} fill={RED} />
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 4.6)} d={dashD(186, 476, 186, 536, 5)} stroke={MUTED} sw={1.3} dur={0.4} />
      <Draw on={beat >= 6} delay={dl(6, 4.7)} d={dashD(264, 476, 264, 536, 5)} stroke={MUTED} sw={1.3} dur={0.4} />
      <Draw on={beat >= 6} delay={dl(6, 4.9)}
        d="M 160 540 L 288 540 M 160 535 L 160 545 M 186 535 L 186 545 M 212 535 L 212 545 M 264 535 L 264 545"
        stroke={MUTED} sw={1.4} dur={0.6} />
      <Fade on={beat >= 6} delay={dl(6, 5.3)}>
        <T x={186} y={558} size={11.8} fill={BLUE} weight={800}>R/2</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 5.4)}>
        <T x={214} y={558} size={11.8} fill={MUTED} weight={800}>R</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 5.5)}>
        <T x={264} y={558} size={11.8} fill={RED} weight={800}>2R</T>
      </Fade>

      {/* ---- beat 7 — the profile, and the answer read straight off it ---- */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)}
        d={`M ${GX} 398 L ${GX} ${GY} L 688 ${GY}`} stroke={INK} sw={1.8} dur={0.7} />
      <Fade on={beat >= 7} delay={dl(7, 0.7)}>
        <T x={332} y={394} size={12} fill={INK} weight={800} anchor="end">B</T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.8)}>
        <T x={694} y={532} size={12} fill={INK} weight={800} anchor="start">r</T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 1)}
        d={`M ${GX} ${GY} L ${xAt(1)} ${yAt(1)}`} stroke={BLUE} sw={2.8} dur={0.7} />
      <Draw on={beat >= 7} delay={dl(7, 1.7)} d={OUTSIDE_D} stroke={RED} sw={2.8} dur={1.1} />
      <Draw on={beat >= 7} delay={dl(7, 2.6)} d={dashD(428, 398, 428, GY, 8)} stroke={MUTED} sw={1.3} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 3)}>
        <T x={348} y={390} size={11.8} fill={BLUE} weight={800} anchor="start">
          {t("inside:  B ∝ r", "inside:  B ∝ r")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 3.2)}>
        <T x={556} y={452} size={11.8} fill={RED} weight={800} anchor="start">
          {t("outside:  B ∝ 1 / r", "outside:  B ∝ 1 / r")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 3.6)}>
        <Circle cx={384} cy={463} r={5} fill={BLUE} />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 3.8)}>
        <Circle cx={516} cy={463} r={5} fill={RED} />
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 4)} d={dashD(384, 469, 384, GY, 5)} stroke={MUTED} sw={1.2} dur={0.35} />
      <Draw on={beat >= 7} delay={dl(7, 4.1)} d={dashD(516, 469, 516, GY, 5)} stroke={MUTED} sw={1.2} dur={0.35} />
      <Draw on={beat >= 7} delay={dl(7, 4.4)} d={dashD(384, 463, 516, 463, 8)} stroke={AMBER_DARK} sw={2.2} dur={0.6} />
      <Fade on={beat >= 7} delay={dl(7, 5)}>
        <T x={450} y={451} size={12} fill={AMBER_DARK} weight={800}>
          {t("level — same height", "level — same height")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 5.3)}>
        <T x={384} y={546} size={11.8} fill={BLUE} weight={800}>R/2</T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 5.4)}>
        <T x={428} y={546} size={11.8} fill={MUTED} weight={800}>R</T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 5.5)}>
        <T x={516} y={546} size={11.8} fill={RED} weight={800}>2R</T>
      </Fade>

      {/* ---- beat 8 — the two traps ---- */}
      <Fade on={beat >= 8} delay={dl(8, 0.3)}>
        <T x={724} y={398} size={12.8} fill={RED} weight={800} anchor="start">
          {t("TWO TRAPS — both cost time", "TWO TRAPS — both cost time")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 0.9)}>
        <T x={724} y={418} size={12.3} fill={INK_LIGHT} weight={600} anchor="start">
          {t("1 · assuming inside must be weaker, so", "1 · assuming inside must be weaker, so")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 1.2)}>
        <T x={724} y={435} size={12.3} fill={INK_LIGHT} weight={600} anchor="start">
          {t("      never computing both points", "      never computing both points")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 1.8)}>
        <T x={724} y={455} size={12.3} fill={INK_LIGHT} weight={600} anchor="start">
          {t("2 · using μ₀I / 2πr at a point INSIDE", "2 · using μ₀I / 2πr at a point INSIDE")}
        </T>
      </Fade>

      {/* ---- beat 9 — the inside point ---- */}
      <Fade on={beat >= 9} delay={dl(9, 0.3)}>
        <T x={724} y={483} size={12.6} fill={AMBER_DARK} weight={800} anchor="start">
          {t("INSIDE,  r = R / 2 :", "INSIDE,  r = R / 2 :")}
        </T>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 1)}>
        <T x={724} y={502} size={11.8} fill={INK} weight={700} anchor="start">
          B = μ₀ I r / 2πR² = μ₀ I (R/2) / 2πR²
        </T>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 1.9)}>
        <T x={724} y={521} size={13.4} fill={GREEN} weight={900} anchor="start">
          = μ₀ I / 4πR
        </T>
      </Fade>

      {/* ---- beat 10 — the outside point ---- */}
      <Fade on={beat >= 10} delay={dl(10, 0.3)}>
        <T x={724} y={545} size={12.6} fill={AMBER_DARK} weight={800} anchor="start">
          {t("OUTSIDE,  r = 2R :", "OUTSIDE,  r = 2R :")}
        </T>
      </Fade>
      <Fade on={beat >= 10} delay={dl(10, 1)}>
        <T x={724} y={564} size={11.8} fill={INK} weight={700} anchor="start">
          B = μ₀ I / 2πr = μ₀ I / 2π(2R)
        </T>
      </Fade>
      <Fade on={beat >= 10} delay={dl(10, 1.9)}>
        <T x={724} y={583} size={13.4} fill={GREEN} weight={900} anchor="start">
          = μ₀ I / 4πR
        </T>
      </Fade>

      {/* ---- beat 11 — identical, ratio exactly one ---- */}
      <Draw on={beat >= 11} delay={dl(11, 0.2)}
        d="M 916 512 L 926 512 L 926 545 L 936 549 L 926 553 L 926 586 L 916 586"
        stroke={AMBER_DARK} sw={2} dur={0.6} />
      <Fade on={beat >= 11} delay={dl(11, 0.9)}>
        <T x={946} y={554} size={13.2} fill={RED} weight={800} anchor="start">
          {t("ratio = 1", "ratio = 1")}
        </T>
      </Fade>
      <Fade on={beat >= 11} delay={dl(11, 1.6)}>
        <T x={44} y={588} size={12.2} fill={MUTED} weight={600} anchor="start">
          {t("inward: less current enclosed · outward: greater distance — two mechanisms, the same factor of one half",
             "inward: less current enclosed · outward: greater distance — two mechanisms, the same factor of one half")}
        </T>
      </Fade>
    </Scene>
  );
}
