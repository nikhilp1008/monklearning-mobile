/**
 * M12Ch08 · Section 3 — "Circle and ellipse areas by integration"
 * Subtopic: Area under Simple Curves
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * Two proofs, run side by side, because the narration runs them side by side:
 * the circle x² + y² = a² on the left and the ellipse x²/a² + y²/b² = 1 on the
 * right, each with real axes, the real conic drawn, the FIRST QUADRANT shaded
 * (that is the whole trick), a and b marked on the axes, and the ×4 symmetry
 * spelled out on the board rather than asserted in a bullet.
 *
 * Beat map (8 segments, gates 0..7 — every beat used):
 *  0  "two results worth memorising — circle    title + underline + subtitle, with a
 *      and ellipse, proved the same clean way"  small circle and a small ellipse
 *                                               sketched either side of the title
 *  1  "the workhorse antiderivative"            the boxed ∫√(a² − x²) dx formula
 *  2  "circle: symmetry about both axes, total  circle axes + the circle, Q1 shaded,
 *      = 4 × the first-quadrant area, upper     a ticked on the x-axis, the 0 → a
 *      boundary y = √(a² − x²), x from 0 to a"  span arrow, ≡ marks in Q2/Q3/Q4
 *  3  "∫₀ᵃ gives πa²/4, so 4× it is πa²"        Q1 ringed in red, a big × 4, and the
 *                                               two evaluation lines
 *  4  "ellipse: upper half y = (b/a)√(a² − x²)" ellipse axes + ellipse, Q1 shaded,
 *                                               a and b ticked, the upper-half formula
 *  5  "area = 4(b/a) × the same integral = πab" the chain and the boxed π a b
 *  6  "set b = a and the ellipse collapses      the collapse inset: dashed ellipse
 *      into a circle; π a b → π a²"             growing into a solid circle, + check
 *  7  "the lesson is symmetry"                  divider + the closing rule
 *
 * Visual vocabulary shared with Sections 1 and 2: axes INK + arrowD, primary
 * curve AMBER_DARK, swept region AMBER @ 0.2, limits of integration RED,
 * final results GREEN_DARK weight 900.
 */

import React from "react";
import { Path, Rect } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, arrowD, ringD,
  INK, INK_LIGHT, MUTED, AMBER, AMBER_DARK, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

/** closed ellipse (or circle, rx === ry) as a drawable path */
const ellD = (cx: number, cy: number, rx: number, ry: number) =>
  `M ${cx - rx} ${cy} A ${rx} ${ry} 0 1 1 ${cx + rx} ${cy} A ${rx} ${ry} 0 1 1 ${cx - rx} ${cy}`;

/* circle figure — centre (250, 340), radius 100 px stands for a */
const CX = 250, CY = 340, R = 100;
const CIRCLE_Q1 = `M ${CX} ${CY} L ${CX + R} ${CY} A ${R} ${R} 0 0 0 ${CX} ${CY - R} Z`;

/* ellipse figure — centre (760, 340), 132 px stands for a, 78 px for b */
const EX = 760, EY = 340, EA = 132, EB = 78;
const ELL_Q1 = `M ${EX} ${EY} L ${EX + EA} ${EY} A ${EA} ${EB} 0 0 0 ${EX} ${EY - EB} Z`;

export default function M12Ch08Sec3({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ═══════════ beat 0 — the two results ═══════════ */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={50} size={25} fill={RED} script>
          {t("Circle and ellipse — proved the same way",
             "Circle aur ellipse — ek hi tarike se prove")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.2)}
        d="M 296 66 C 420 62, 640 70, 784 64" stroke={RED} sw={2.2} dur={0.6} />
      <Draw on={beat >= 0} delay={dl(0, 2)} d={ellD(108, 56, 24, 24)} stroke={AMBER_DARK} sw={2.4} dur={0.7} />
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d={ellD(966, 56, 34, 20)} stroke={AMBER_DARK} sw={2.4} dur={0.7} />
      <Fade on={beat >= 0} delay={dl(0, 3.1)}>
        <T x={108} y={96} size={12} fill={MUTED} weight={700}>
          {t("circle", "circle")}
        </T>
        <T x={966} y={96} size={12} fill={MUTED} weight={700}>
          {t("ellipse", "ellipse")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 3.6)}>
        <T x={540} y={90} size={12.5} fill={MUTED} script>
          {t("two results worth memorising — both from symmetry plus ONE standard antiderivative",
             "do memorise karne laayak results — dono symmetry plus EK standard antiderivative se")}
        </T>
      </Fade>

      {/* ═══════════ beat 1 — the workhorse antiderivative ═══════════ */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <Rect x={176} y={106} width={728} height={46} rx={13}
          fill={CREAM} stroke={AMBER_DARK} strokeWidth={2} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.4)}>
        <T x={540} y={136} size={19} fill={AMBER_DARK} weight={900}>
          ∫ √(a² − x²) dx = (x/2)·√(a² − x²) + (a²/2)·sin⁻¹(x/a) + C
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 4.5)}>
        <T x={540} y={172} size={12.5} fill={MUTED} script>
          {t("the workhorse of the whole chapter — every area below leans on this one line",
             "poore chapter ka workhorse — neeche har area isi ek line par tikta hai")}
        </T>
      </Fade>

      {/* ═══════════ beat 2 — the circle ═══════════ */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={60} y={190} size={14} fill={RED} weight={800} anchor="start">
          {t("① CIRCLE   x² + y² = a²", "① CIRCLE   x² + y² = a²")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.2)}>
        <T x={60} y={210} size={12} fill={MUTED} weight={600} anchor="start">
          {t("symmetric about BOTH axes → four identical quarters",
             "DONO axes ke baare me symmetric → chaar identical quarters")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 2)} d={arrowD(112, CY, 412, CY)} stroke={INK} sw={2.6} dur={0.7} />
      <Draw on={beat >= 2} delay={dl(2, 2.5)} d={arrowD(CX, 458, CX, 226)} stroke={INK} sw={2.6} dur={0.7} />
      <Fade on={beat >= 2} delay={dl(2, 3)}>
        <T x={420} y={346} size={14} fill={INK} weight={800} anchor="start">x</T>
        <T x={232} y={232} size={14} fill={INK} weight={800} anchor="end">y</T>
        <T x={242} y={358} size={13} fill={INK_LIGHT} anchor="end">O</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 3.6)} d={ellD(CX, CY, R, R)} stroke={AMBER_DARK} sw={2.8} dur={1.4} />
      <Fade on={beat >= 2} delay={dl(2, 5.2)}>
        <Path d={CIRCLE_Q1} fill={AMBER} fillOpacity={0.24} stroke="none" />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 6)}>
        <T x={358} y={258} size={13} fill={AMBER_DARK} weight={800} anchor="start">y = √(a² − x²)</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 6.6)} d={`M ${CX + R} 334 L ${CX + R} 346`} stroke={RED} sw={2.6} dur={0.3} />
      <Fade on={beat >= 2} delay={dl(2, 7)}>
        <T x={CX + R + 8} y={360} size={14} fill={RED} weight={900} anchor="start">a</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 7.6)} d={arrowD(CX + 4, 360, CX + R - 4, 360)} stroke={RED} sw={1.7} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 8.2)}>
        <T x={CX + R / 2} y={378} size={11.5} fill={RED} weight={800}>x : 0 → a</T>
        <T x={CX + 46} y={316} size={11.5} fill={GREEN_DARK} weight={800}>Q₁</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 9)}>
        <T x={196} y={296} size={17} fill={MUTED} weight={800}>≡</T>
        <T x={196} y={396} size={17} fill={MUTED} weight={800}>≡</T>
        <T x={312} y={408} size={17} fill={MUTED} weight={800}>≡</T>
      </Fade>

      {/* ═══════════ beat 3 — evaluate the quarter, multiply by four ═══════════ */}
      <Draw on={beat >= 3} delay={dl(3, 0.3)} d={ringD(294, 296, 56, 46)} stroke={RED} sw={2.1} dur={0.8} />
      <Fade on={beat >= 3} delay={dl(3, 1.2)}>
        <T x={196} y={240} size={26} fill={GREEN_DARK} weight={900}>× 4</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.4)}>
        <T x={60} y={478} size={17} fill={INK} weight={800} anchor="start">
          ∫₀ᵃ √(a² − x²) dx  =  π a² / 4
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 5)}>
        <T x={60} y={508} size={20} fill={GREEN_DARK} weight={900} anchor="start">
          Area = 4 × π a²/4 = π a²
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 8)}>
        <T x={60} y={530} size={11.5} fill={MUTED} weight={700} anchor="start">
          {t("first quadrant only ⇒ no sign ambiguity, integral evaluated just once",
             "sirf first quadrant ⇒ koi sign ambiguity nahi, integral ek hi baar evaluate")}
        </T>
      </Fade>

      {/* ═══════════ beat 4 — the ellipse ═══════════ */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={566} y={190} size={14} fill={RED} weight={800} anchor="start">
          {t("② ELLIPSE   x²/a² + y²/b² = 1", "② ELLIPSE   x²/a² + y²/b² = 1")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.2)}>
        <T x={566} y={210} size={12} fill={MUTED} weight={600} anchor="start">
          {t("solve for the upper half, then the same quarter trick",
             "upper half ke liye solve karo, phir wahi quarter trick")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 2)} d={arrowD(600, EY, 926, EY)} stroke={INK} sw={2.6} dur={0.7} />
      <Draw on={beat >= 4} delay={dl(4, 2.5)} d={arrowD(EX, 458, EX, 242)} stroke={INK} sw={2.6} dur={0.7} />
      <Fade on={beat >= 4} delay={dl(4, 3)}>
        <T x={934} y={346} size={14} fill={INK} weight={800} anchor="start">x</T>
        <T x={748} y={238} size={14} fill={INK} weight={800} anchor="end">y</T>
        <T x={752} y={358} size={13} fill={INK_LIGHT} anchor="end">O</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 3.6)} d={ellD(EX, EY, EA, EB)} stroke={AMBER_DARK} sw={2.8} dur={1.4} />
      <Fade on={beat >= 4} delay={dl(4, 5.2)}>
        <Path d={ELL_Q1} fill={AMBER} fillOpacity={0.24} stroke="none" />
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 6)} d={`M ${EX + EA} 334 L ${EX + EA} 346`} stroke={RED} sw={2.6} dur={0.3} />
      <Draw on={beat >= 4} delay={dl(4, 6.3)} d={`M 754 ${EY - EB} L 766 ${EY - EB}`} stroke={RED} sw={2.6} dur={0.3} />
      <Fade on={beat >= 4} delay={dl(4, 6.8)}>
        <T x={EX + EA + 8} y={360} size={14} fill={RED} weight={900} anchor="start">a</T>
        <T x={748} y={EY - EB + 5} size={14} fill={RED} weight={900} anchor="end">b</T>
        <T x={EX + 52} y={318} size={11.5} fill={GREEN_DARK} weight={800}>Q₁</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 8)}>
        <T x={566} y={232} size={13.5} fill={AMBER_DARK} weight={800} anchor="start">
          {t("upper half:", "upper half:")}
        </T>
        <T x={566} y={254} size={13.5} fill={AMBER_DARK} weight={800} anchor="start">
          y = (b/a)·√(a² − x²)
        </T>
      </Fade>

      {/* ═══════════ beat 5 — the same integral, scaled by b/a ═══════════ */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={566} y={478} size={14} fill={INK} weight={800} anchor="start">
          Area = 4·(b/a)·∫₀ᵃ √(a² − x²) dx = 4·(b/a)·(π a²/4)
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 4)}>
        <T x={566} y={508} size={20} fill={GREEN_DARK} weight={900} anchor="start">
          ⇒   Ellipse area  =  π a b
        </T>
      </Fade>

      {/* ═══════════ beat 6 — the degeneracy self-check ═══════════ */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Path d={ellD(996, 258, 44, 26)} fill="none" stroke={MUTED}
          strokeWidth={1.8} strokeDasharray="6 5" />
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1)} d={ellD(996, 258, 44, 44)} stroke={GREEN_DARK} sw={2.2} dur={0.9} />
      <Draw on={beat >= 6} delay={dl(6, 1.9)} d={arrowD(996, 284, 996, 306)} stroke={RED} sw={1.7} dur={0.3} />
      <Fade on={beat >= 6} delay={dl(6, 2.4)}>
        <T x={996} y={200} size={13} fill={RED} weight={900}>b = a</T>
        <T x={996} y={326} size={12.5} fill={GREEN_DARK} weight={900}>π a b → π a²</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 3.6)}>
        <T x={566} y={530} size={11.5} fill={RED} weight={800} anchor="start">
          {t("self-check: b = a ⇒ ellipse collapses to a circle, π a b → π a² ✓",
             "self-check: b = a rakho ⇒ ellipse circle me collapse, π a b → π a² ✓")}
        </T>
      </Fade>

      {/* ═══════════ beat 7 — the lesson under both proofs ═══════════ */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 44 548 H 1036" stroke={MUTED} sw={1.3} dur={0.9} />
      <Fade on={beat >= 7} delay={dl(7, 0.9)}>
        <T x={44} y={572} size={14} fill={RED} weight={800} anchor="start">
          {t("THE LESSON UNDER BOTH PROOFS — symmetry",
             "DONO PROOFS KE NEECHE KA SABAK — symmetry")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 3)}>
        <T x={44} y={594} size={12.5} fill={INK} weight={700} anchor="start">
          {t("region symmetric about an axis  →  compute ONE symmetric part and simply multiply",
             "region kisi axis ke baare me symmetric  →  EK symmetric part nikaalo aur bas multiply karo")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 6)}>
        <T x={1036} y={594} size={12} fill={GREEN_DARK} script anchor="end">
          {t("the single biggest time-saver in this chapter",
             "is chapter ka sabse bada time-saver")}
        </T>
      </Fade>
    </Scene>
  );
}
