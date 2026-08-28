/**
 * M12Ch08 · Section 8 — "A circular cap cut by a vertical chord"
 * Subtopic: Area under Simple Curves
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * The problem the voice works: the SMALLER region of x² + y² = 16 lying to
 * the right of x = 2. Radius 4, the chord x = 2, the cap from x = 2 to
 * x = 4, halved by symmetry, integrated with the catalogue antiderivative
 * for √(a² − x²) at a = 4, and finished with a sanity check against the
 * whole disc.
 *
 * Layout mirrors Section 7 exactly: picture on the left (real axes, the real
 * circle, the real chord, the real cap shaded, one real strip in the upper
 * half), algebra down the right column, and a bottom band for the answer and
 * the sanity check drawn as two comparison bars.
 *
 * Beat map (7 segments, gates 0..6 — every beat used):
 *  0  "circle x²+y²=16, right of x=2, smaller"  title + axes + the circle +
 *                                               the three set-up chips
 *  1  "radius 4; x=2 is a chord; cap 2→4"       radius line + r = 4 label, the
 *                                               chord drawn in blue, the cap
 *                                               shaded, ticks at 2 and 4
 *  2  "symmetric about x-axis: upper half, ×2"  mirror line, upper-half strip,
 *                                               the ×2 arrow, y = √(16 − x²)
 *  3  "A = 2∫₂⁴ √(16−x²); antiderivative a=4"   the integral and the bracket
 *  4  "evaluate at 4 → 4π; at 2 → 2√3 + 4π/3"   both limit evaluations, with
 *                                               the two limits ringed on the
 *                                               axis of the figure
 *  5  "subtract and double → 16π/3 − 4√3"       the subtraction line + the
 *                                               answer chip
 *  6  "sanity check: 9.83 vs 16π ≈ 50.3"        the two comparison bars, the
 *                                               one-fifth verdict
 *
 * Visual vocabulary shared with Sections 7 and 9:
 *   axes INK with arrowheads · primary curve AMBER_DARK · shaded region a
 *   single AMBER path at low opacity · strips GREEN · boundary lines BLUE ·
 *   results GREEN_DARK · headings and warnings RED.
 */

import React from "react";
import { Path, Rect } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD, ringD,
  INK, INK_LIGHT, MUTED, AMBER, AMBER_DARK, GREEN, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

const BLUE = "#0284c7";

/* ---- figure frame: centre (280,320), 34 px per unit, radius 4 → 136 px ---- */
const CX = 280;
const CY = 320;
const U = 34;
const R = 4 * U; // 136
const px = (x: number) => CX + U * x;
const py = (y: number) => CY - U * y;

const YC = Math.sqrt(12); // 3.4641 — half-height of the chord
const CHORD_TOP = py(YC); // 202.2
const CHORD_BOT = py(-YC); // 437.8

/** the whole circle as two half-arcs */
const CIRCLE_D =
  `M ${px(-4)} ${CY} A ${R} ${R} 0 1 1 ${px(4)} ${CY} A ${R} ${R} 0 1 1 ${px(-4)} ${CY}`;
/** the cap: chord top → round the right rim → chord bottom → close */
const CAP_D =
  `M ${px(2)} ${CHORD_TOP.toFixed(1)} A ${R} ${R} 0 0 1 ${px(2)} ${CHORD_BOT.toFixed(1)} Z`;
/** the upper half of the cap, which is what actually gets integrated */
const CAP_UPPER_D =
  `M ${px(2)} ${CHORD_TOP.toFixed(1)} A ${R} ${R} 0 0 1 ${px(4)} ${CY} L ${px(2)} ${CY} Z`;

/* the representative strip inside the upper half, at x ≈ 3 */
const STRIP_X = px(2.85);
const STRIP_W = px(3.15) - px(2.85);
const STRIP_TOP = py(Math.sqrt(16 - 3 * 3)); // y = √7

/* sanity-check bars: full disc 16π ≈ 50.27, cap ≈ 9.83 */
const BAR_FULL = 430;
const BAR_CAP = BAR_FULL * (9.83 / 50.27);

export default function M12Ch08Sec8({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ═══════════ beat 0 — the question ═══════════ */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={46} size={25} fill={RED} script>
          {t("A cap cut off by a vertical chord",
             "Vertical chord se kata hua cap")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.2)}
        d="M 336 62 C 470 58, 640 66, 748 60" stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 2)}>
        <T x={540} y={82} size={12.5} fill={MUTED} script>
          {t("JEE Advanced level — antiderivative and symmetry, working together",
             "JEE Advanced level — antiderivative aur symmetry, dono saath mein")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 3)}>
        <T x={556} y={112} size={14} fill={RED} weight={800} anchor="start">
          {t("SET-UP", "SET-UP")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 3.6)}>
        <Chip x={556} y={120} w={470} h={30} fill={CREAM} stroke={AMBER_DARK}
          textFill={AMBER_DARK} size={15} script={false}>
          {t("①  circle   x² + y² = 16", "①  circle   x² + y² = 16")}
        </Chip>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 4.4)}>
        <Chip x={556} y={156} w={470} h={30} fill={CREAM} stroke={BLUE}
          textFill={BLUE} size={15} script={false}>
          {t("②  to the right of the line   x = 2", "②  line   x = 2   ke dayein taraf")}
        </Chip>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 5.2)}>
        <Chip x={556} y={192} w={470} h={30} fill={CREAM} stroke={GREEN_DARK}
          textFill={GREEN_DARK} size={15} script={false}>
          {t("③  take the SMALLER region", "③  SMALLER region lena hai")}
        </Chip>
      </Fade>

      {/* axes + the circle */}
      <Fade on={beat >= 0} delay={dl(0, 6)}>
        <T x={60} y={112} size={13} fill={INK_LIGHT} weight={700} anchor="start">
          {t("the circle, drawn", "circle, banaya hua")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 6.2)} d={arrowD(96, CY, 500, CY)} stroke={INK} sw={2.4} dur={0.7} />
      <Draw on={beat >= 0} delay={dl(0, 6.8)} d={arrowD(CX, 484, CX, 166)} stroke={INK} sw={2.4} dur={0.7} />
      <Fade on={beat >= 0} delay={dl(0, 7.2)}>
        <T x={508} y={326} size={14} fill={INK} weight={800} anchor="start">x</T>
        <T x={266} y={168} size={14} fill={INK} weight={800} anchor="end">y</T>
        <T x={268} y={340} size={13} fill={INK_LIGHT} weight={700} anchor="end">O</T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 7.6)} d={CIRCLE_D} stroke={AMBER_DARK} sw={3} dur={1.6} />
      <Fade on={beat >= 0} delay={dl(0, 9.2)}>
        <T x={px(-4) - 8} y={300} size={13} fill={AMBER_DARK} weight={800} anchor="end">x² + y² = 16</T>
      </Fade>

      {/* ═══════════ beat 1 — radius 4, the chord, the cap ═══════════ */}
      <Draw on={beat >= 1} delay={dl(1, 0.2)}
        d={`M ${CX} ${CY} L ${(CX + R * Math.cos(-Math.PI / 4)).toFixed(1)} ${(CY + R * Math.sin(-Math.PI / 4)).toFixed(1)}`}
        stroke={INK_LIGHT} sw={2} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={332} y={262} size={13.5} fill={INK_LIGHT} weight={800} anchor="start">r = 4</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.4)}
        d={`M ${px(2)} 468 V 188`} stroke={BLUE} sw={2.8} dur={0.7} />
      <Fade on={beat >= 1} delay={dl(1, 2.1)}>
        <T x={px(2) + 10} y={184} size={14} fill={BLUE} weight={800} anchor="start">x = 2</T>
      </Fade>
      <Path
        d={CAP_D}
        fill={AMBER}
        stroke="none"
        opacity={beat >= 1 ? 0.3 : 0}
      />
      <Draw on={beat >= 1} delay={dl(1, 3.4)}
        d={`M ${px(2)} 314 V 326 M ${px(4)} 314 V 326`} stroke={INK} sw={1.8} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 3.8)}>
        <T x={px(2) - 4} y={340} size={12.5} fill={GREEN_DARK} weight={800} anchor="end">2</T>
        <T x={px(4) + 6} y={340} size={12.5} fill={GREEN_DARK} weight={800} anchor="start">4</T>
      </Fade>
      {/* tip computed from the figure helpers: (3.4, 1.0) is 120.5 px from the
          centre — safely inside R = 136, right of the chord, and 8 px clear of
          the representative strip at x = 2.85..3.15 */}
      <Draw on={beat >= 1} delay={dl(1, 4.2)} d={arrowD(470, 250, px(3.4), py(1))} stroke={AMBER_DARK} sw={1.8} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 4.6)}>
        <T x={476} y={244} size={13} fill={AMBER_DARK} weight={800} anchor="start">
          {t("the cap", "cap")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 5.2)}>
        <T x={556} y={252} size={14} fill={INK} weight={700} anchor="start">
          {t("radius 4 · x = 2 is a vertical chord · the cap runs 2 ≤ x ≤ 4",
             "radius 4 · x = 2 ek vertical chord hai · cap chalta hai 2 ≤ x ≤ 4")}
        </T>
      </Fade>

      {/* ═══════════ beat 2 — symmetry: upper half, then double ═══════════ */}
      <Path
        d={CAP_UPPER_D}
        fill={GREEN}
        stroke="none"
        opacity={beat >= 2 ? 0.24 : 0}
      />
      <Draw on={beat >= 2} delay={dl(2, 0.9)} d={`M ${px(2)} ${CY} H ${px(4) + 14}`} stroke={GREEN_DARK} sw={2.4} dur={0.5} />
      <Rect
        x={STRIP_X} y={STRIP_TOP} width={STRIP_W} height={CY - STRIP_TOP}
        fill={GREEN} stroke={GREEN_DARK} strokeWidth={1.6}
        opacity={beat >= 2 ? 0.55 : 0}
      />
      <Draw on={beat >= 2} delay={dl(2, 1.9)}
        d={arrowD(STRIP_X + STRIP_W / 2 + 34, STRIP_TOP - 22, STRIP_X + STRIP_W / 2 + 4, STRIP_TOP - 4)}
        stroke={GREEN_DARK} sw={1.7} dur={0.3} />
      <Fade on={beat >= 2} delay={dl(2, 2.3)}>
        <T x={STRIP_X + STRIP_W / 2 + 44} y={STRIP_TOP - 36} size={12} fill={GREEN_DARK} weight={800} anchor="start">
          {t("strip: dx wide,", "strip: dx chaudi,")}
        </T>
        <T x={STRIP_X + STRIP_W / 2 + 44} y={STRIP_TOP - 16} size={12} fill={GREEN_DARK} weight={800} anchor="start">
          {t("√(16 − x²) tall", "√(16 − x²) unchi")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 3)} d={arrowD(px(2.4), CY + 8, px(2.4), CY + 94)} stroke={GREEN_DARK} sw={2.2} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 3.5)}>
        <T x={px(2.4) - 10} y={CY + 72} size={16} fill={GREEN_DARK} weight={900} anchor="end">× 2</T>
        <T x={px(2.4) + 10} y={CY + 108} size={12} fill={MUTED} weight={700} anchor="start">
          {t("mirror image below", "neeche mirror image")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 4.4)}>
        <T x={556} y={280} size={19} fill={AMBER_DARK} weight={800} anchor="start">
          y = √(16 − x²)
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 5.6)}>
        <T x={556} y={304} size={12.5} fill={INK} weight={700} anchor="start">
          {t("the cap is symmetric about the x-axis —",
             "cap x-axis ke baare mein symmetric hai —")}
        </T>
        <T x={556} y={322} size={12.5} fill={INK} weight={700} anchor="start">
          {t("integrate the upper half, then double",
             "upper half integrate karo, phir double")}
        </T>
      </Fade>

      {/* ═══════════ beat 3 — the integral and the catalogue antiderivative ═══════════ */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={556} y={350} size={21} fill={INK} weight={800} anchor="start">
          A = 2 ∫₂⁴ √(16 − x²) dx
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 5)}>
        <T x={556} y={380} size={17} fill={INK} weight={700} anchor="start">
          = 2 [ (x/2)√(16 − x²) + 8 sin⁻¹(x/4) ]₂⁴
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 7)}>
        <T x={556} y={400} size={12} fill={MUTED} weight={700} anchor="start">
          {t("catalogue antiderivative for √(a² − x²), with a = 4",
             "√(a² − x²) ka catalogue antiderivative, a = 4 ke saath")}
        </T>
      </Fade>

      {/* ═══════════ beat 4 — the two limit evaluations ═══════════ */}
      <Draw on={beat >= 4} delay={dl(4, 0.2)} d={ringD(px(4), 342, 18, 14)} stroke={GREEN_DARK} sw={1.9} dur={0.5} />
      <Draw on={beat >= 4} delay={dl(4, 0.6)} d={ringD(px(2) - 8, 342, 18, 14)} stroke={GREEN_DARK} sw={1.9} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 1.2)}>
        <T x={556} y={432} size={15} fill={GREEN_DARK} weight={800} anchor="start">
          x = 4 :   0 + 8·(π/2)  =  4π
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <T x={840} y={432} size={12} fill={MUTED} weight={700} anchor="start">
          {t("first term vanishes", "pehla term gayab")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 6)}>
        <T x={556} y={458} size={15} fill={GREEN_DARK} weight={800} anchor="start">
          x = 2 :   2√3 + 8·(π/6)  =  2√3 + 4π/3
        </T>
      </Fade>

      {/* ─────────── divider into the bottom band ─────────── */}
      <Draw on={beat >= 5} delay={dl(5, 0.1)} d="M 40 482 H 1044" stroke={MUTED} sw={1.3} dur={0.9} />

      {/* ═══════════ beat 5 — subtract, double, land the answer ═══════════ */}
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={60} y={508} size={16} fill={INK} weight={800} anchor="start">
          A = 2 [ 4π − ( 2√3 + 4π/3 ) ]
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2.4)}>
        <T x={60} y={534} size={14} fill={MUTED} weight={700} anchor="start">
          = 2 [ 8π/3 − 2√3 ]
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 4)}>
        <Chip x={60} y={546} w={400} h={44} fill={CREAM} stroke={GREEN_DARK}
          textFill={GREEN_DARK} size={21} script={false}>
          A = 16π/3 − 4√3 sq units
        </Chip>
      </Fade>

      {/* ═══════════ beat 6 — the sanity check, drawn to scale ═══════════ */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={496} y={508} size={14} fill={RED} weight={800} anchor="start">
          {t("SANITY CHECK — always finish with one",
             "SANITY CHECK — hamesha ek se finish karo")}
        </T>
      </Fade>
      <Rect
        x={604} y={520} width={BAR_FULL} height={22} rx={4}
        fill={AMBER} stroke={AMBER_DARK} strokeWidth={1.6}
        opacity={beat >= 6 ? 0.55 : 0}
      />
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={596} y={536} size={12.5} fill={AMBER_DARK} weight={800} anchor="end">
          {t("full disc 16π ≈ 50.3", "poora disc 16π ≈ 50.3")}
        </T>
      </Fade>
      <Rect
        x={604} y={552} width={BAR_CAP} height={22} rx={4}
        fill={GREEN} stroke={GREEN_DARK} strokeWidth={1.6}
        opacity={beat >= 6 ? 0.6 : 0}
      />
      <Fade on={beat >= 6} delay={dl(6, 2.8)}>
        <T x={596} y={568} size={12.5} fill={GREEN_DARK} weight={800} anchor="end">
          {t("our cap ≈ 9.83", "hamara cap ≈ 9.83")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 3.4)}
        d={arrowD(604 + BAR_CAP + 40, 563, 604 + BAR_CAP + 8, 563)} stroke={MUTED} sw={1.6} dur={0.3} />
      <Fade on={beat >= 6} delay={dl(6, 3.8)}>
        <T x={604 + BAR_CAP + 46} y={562} size={12.5} fill={INK} weight={700} anchor="start">
          {t("≈ one fifth of the disc,", "≈ disc ka paanchwa hissa,")}
        </T>
        <T x={604 + BAR_CAP + 46} y={580} size={12.5} fill={INK} weight={700} anchor="start">
          {t("cut near half the radius — reasonable",
             "radius ke aadhe paas kata — reasonable")}
        </T>
      </Fade>
    </Scene>
  );
}
