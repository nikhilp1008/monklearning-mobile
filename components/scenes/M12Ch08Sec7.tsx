/**
 * M12Ch08 · Section 7 — "First-quadrant area under a parabola"
 * Subtopic: Area under Simple Curves
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * The problem the voice works: the first-quadrant area bounded by the
 * parabola y² = 4x, the x-axis, and the line x = 4. Answer 32/3; the sting
 * in the tail is that dropping the words "x-axis" from the question puts
 * BOTH branches in play and symmetry doubles it to 64/3.
 *
 * Layout: the picture lives on the left (real axes, the real branch
 * y = 2√x, the real boundary x = 4, the real shaded region and one real
 * strip), the algebra runs down the right column, and a bottom band carries
 * the examiner's point plus a second, smaller figure showing the
 * both-branches variant.
 *
 * Beat map (7 segments, gates 0..6 — every beat used):
 *  0  "JEE Main; boundaries: y²=4x, x-axis, x=4"   title + axes + ticks +
 *                                                  the line x = 4 + the three
 *                                                  boundary chips
 *  1  "upper branch y = 2√x, from x=0 to x=4"      the branch is plotted, the
 *                                                  region shaded, x = 0 dotted at
 *                                                  the origin and the upper limit
 *                                                  x = 4 ringed on the axis
 *  2  "area = ∫₀⁴ 2√x dx = 2∫₀⁴ x^(1/2) dx"        one representative strip of
 *                                                  width dx, height 2√x, and
 *                                                  the integral written out
 *  3  "antidifferentiate → (4/3)·4^(3/2)"          the antiderivative line
 *  4  "4^(3/2) = 8 → 32/3 square units"            the arithmetic + the answer
 *                                                  chip + 32/3 written inside
 *                                                  the shaded region itself
 *  5  "is the x-axis a STATED boundary?"           the axis segment 0..4 is
 *                                                  repainted green, chip ② is
 *                                                  ringed, "upper branch only"
 *                                                  is pinned to the curve
 *  6  "no axis → both branches → 64/3"             the inset: same parabola,
 *                                                  both branches, the doubled
 *                                                  region shaded, 64/3 marked
 *
 * Visual vocabulary shared with Sections 8 and 9:
 *   axes INK with arrowheads · primary curve AMBER_DARK · shaded region a
 *   single AMBER path at low opacity · strips GREEN · boundary lines BLUE ·
 *   results GREEN_DARK · headings and warnings RED.
 */

import React from "react";
import { Circle, Path, Rect } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD, ringD,
  INK, INK_LIGHT, MUTED, AMBER, AMBER_DARK, GREEN, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

const BLUE = "#0284c7";

/* ---- main figure frame: origin (150,430), 80 px per x-unit, 52 px per y ---- */
const X0 = 150;
const Y0 = 430;
const SX = 80;
const SY = 52;
const px = (x: number) => X0 + SX * x;
const py = (y: number) => Y0 - SY * y;

/** polyline for y = sign · 2√x over [x0,x1] in an arbitrary frame */
function branchPts(
  x0: number,
  x1: number,
  n: number,
  fx: (x: number) => number,
  fy: (y: number) => number,
  sign = 1
): string[] {
  const pts: string[] = [];
  for (let i = 0; i <= n; i++) {
    const x = x0 + ((x1 - x0) * i) / n;
    pts.push(`${fx(x).toFixed(1)} ${fy(sign * 2 * Math.sqrt(x)).toFixed(1)}`);
  }
  return pts;
}

const MAIN = branchPts(0, 4, 44, px, py);
const MAIN_D = `M ${MAIN.join(" L ")}`;
/** region: along the branch, drop to the axis at x = 4, close back to O */
const REGION_D = `${MAIN_D} L ${px(4)} ${py(0)} Z`;

/* ---- inset frame (bottom band): origin (800,538).
   Deliberately a uniform 25.4 % replica of the main frame — 20.3/13.2 is the
   same 80/52 anisotropy — so y = 2√x is drawn at the SAME shape in both
   figures. The band between the divider (y 478) and the safe floor (y 596)
   is what caps the inset's size: the full ±4 of y has to live inside it. ---- */
const ix = (x: number) => 800 + 20.3 * x;
const iy = (y: number) => 538 - 13.2 * y;
const IN_UP = branchPts(0, 4, 34, ix, iy, 1);
const IN_DN = branchPts(0, 4, 34, ix, iy, -1);
const IN_UP_D = `M ${IN_UP.join(" L ")}`;
const IN_DN_D = `M ${IN_DN.join(" L ")}`;
const IN_REGION_D = `${IN_UP_D} L ${ix(4)} ${iy(-4)} L ${[...IN_DN].reverse().join(" L ")} Z`;

/* the representative strip: 2.5 ≤ x ≤ 2.9 */
const STRIP_X = px(2.5);
const STRIP_W = px(2.9) - px(2.5);
const STRIP_TOP = py(2 * Math.sqrt(2.7));

export default function M12Ch08Sec7({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ═══════════ beat 0 — the question and its three boundaries ═══════════ */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={46} size={25} fill={RED} script>
          {t("Read the boundaries — then integrate",
             "Boundaries pehle padho — phir integrate karo")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.2)}
        d="M 330 62 C 470 58, 640 66, 752 60" stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 2)}>
        <T x={540} y={82} size={12.5} fill={MUTED} script>
          {t("JEE Main level — first-quadrant area bounded by y² = 4x, the x-axis, and x = 4",
             "JEE Main level — y² = 4x, x-axis, aur x = 4 se bandha first-quadrant area")}
        </T>
      </Fade>

      {/* the three boundaries, spelled out on the right */}
      <Fade on={beat >= 0} delay={dl(0, 3)}>
        <T x={556} y={112} size={14} fill={RED} weight={800} anchor="start">
          {t("THE THREE BOUNDARIES", "TEEN BOUNDARIES")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 3.6)}>
        <Chip x={556} y={120} w={470} h={30} fill={CREAM} stroke={AMBER_DARK}
          textFill={AMBER_DARK} size={15} script={false}>
          {t("①  the parabola   y² = 4x", "①  parabola   y² = 4x")}
        </Chip>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 4.4)}>
        <Chip x={556} y={156} w={470} h={30} fill={CREAM} stroke={GREEN_DARK}
          textFill={GREEN_DARK} size={15} script={false}>
          {t("②  the x-axis   (y = 0)", "②  x-axis   (y = 0)")}
        </Chip>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 5.2)}>
        <Chip x={556} y={192} w={470} h={30} fill={CREAM} stroke={BLUE}
          textFill={BLUE} size={15} script={false}>
          {t("③  the line   x = 4", "③  line   x = 4")}
        </Chip>
      </Fade>

      {/* the axes themselves */}
      <Fade on={beat >= 0} delay={dl(0, 6)}>
        <T x={60} y={112} size={13} fill={INK_LIGHT} weight={700} anchor="start">
          {t("the region, drawn", "region, banaya hua")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 6.2)} d={arrowD(112, 430, 508, 430)} stroke={INK} sw={2.4} dur={0.7} />
      <Draw on={beat >= 0} delay={dl(0, 6.8)} d={arrowD(150, 452, 150, 176)} stroke={INK} sw={2.4} dur={0.7} />
      <Fade on={beat >= 0} delay={dl(0, 7.4)}>
        <T x={516} y={436} size={14} fill={INK} weight={800} anchor="start">x</T>
        <T x={136} y={176} size={14} fill={INK} weight={800} anchor="end">y</T>
        <T x={138} y={450} size={13} fill={INK_LIGHT} weight={700} anchor="end">O</T>
      </Fade>
      {/* x ticks at 1,2,3,4 and y ticks at 2,4 */}
      <Draw on={beat >= 0} delay={dl(0, 7.8)}
        d={`M ${px(1)} 424 V 436 M ${px(2)} 424 V 436 M ${px(3)} 424 V 436 M ${px(4)} 424 V 436`}
        stroke={INK} sw={1.8} dur={0.5} />
      <Draw on={beat >= 0} delay={dl(0, 8.1)}
        d={`M 144 ${py(2)} H 156 M 144 ${py(4)} H 156`} stroke={INK} sw={1.8} dur={0.4} />
      <Fade on={beat >= 0} delay={dl(0, 8.4)}>
        <T x={px(1)} y={450} size={12} fill={INK_LIGHT} weight={700}>1</T>
        <T x={px(2)} y={450} size={12} fill={INK_LIGHT} weight={700}>2</T>
        <T x={px(3)} y={450} size={12} fill={INK_LIGHT} weight={700}>3</T>
        <T x={138} y={py(2) + 5} size={12} fill={INK_LIGHT} weight={700} anchor="end">2</T>
        <T x={138} y={py(4) + 5} size={12} fill={INK_LIGHT} weight={700} anchor="end">4</T>
      </Fade>
      {/* boundary ③ — the vertical line x = 4 */}
      <Draw on={beat >= 0} delay={dl(0, 8.8)} d={`M ${px(4)} 430 V 200`} stroke={BLUE} sw={2.6} dur={0.7} />
      <Fade on={beat >= 0} delay={dl(0, 9.4)}>
        <T x={px(4) + 12} y={206} size={14} fill={BLUE} weight={800} anchor="start">x = 4</T>
      </Fade>

      {/* ═══════════ beat 1 — the upper branch and the region ═══════════ */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={556} y={252} size={20} fill={AMBER_DARK} weight={800} anchor="start">
          y² = 4x   ⇒   y = 2√x
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1)} d={MAIN_D} stroke={AMBER_DARK} sw={3} dur={1.4} />
      <Fade on={beat >= 1} delay={dl(1, 2.4)}>
        <T x={318} y={224} size={15} fill={AMBER_DARK} weight={800} anchor="start">y = 2√x</T>
      </Fade>
      <Path
        d={REGION_D}
        fill={AMBER}
        stroke="none"
        opacity={beat >= 1 ? 0.28 : 0}
      />
      <Fade on={beat >= 1} delay={dl(1, 4)}>
        <Circle cx={px(0)} cy={py(0)} r={5.5} fill={GREEN_DARK} />
        <Circle cx={px(4)} cy={py(4)} r={5.5} fill={AMBER_DARK} />
        <T x={px(4) + 12} y={py(4) + 12} size={12.5} fill={AMBER_DARK} weight={700} anchor="start">(4, 4)</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 4.4)} d={ringD(px(4), 442, 20, 15)} stroke={GREEN_DARK} sw={2} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 4.9)}>
        <T x={px(4)} y={450} size={12.5} fill={GREEN_DARK} weight={800}>4</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 5.4)}>
        <T x={556} y={278} size={13} fill={INK} weight={700} anchor="start">
          {t("region: between the axis and this branch, x = 0 → x = 4",
             "region: axis aur is branch ke beech, x = 0 se x = 4 tak")}
        </T>
      </Fade>

      {/* ═══════════ beat 2 — the strip and the integral ═══════════ */}
      <Rect
        x={STRIP_X} y={STRIP_TOP} width={STRIP_W} height={py(0) - STRIP_TOP}
        fill={GREEN} stroke={GREEN_DARK} strokeWidth={1.6}
        opacity={beat >= 2 ? 0.42 : 0}
      />
      <Draw on={beat >= 2} delay={dl(2, 0.8)}
        d={arrowD(STRIP_X + STRIP_W / 2, 446, STRIP_X + STRIP_W / 2, 434)} stroke={GREEN_DARK} sw={1.8} dur={0.3} />
      <Fade on={beat >= 2} delay={dl(2, 1.1)}>
        <T x={STRIP_X + STRIP_W / 2} y={462} size={12.5} fill={GREEN_DARK} weight={800}>dx</T>
      </Fade>
      {/* label kept between the strip and the blue x = 4 line (which stands at
          px(4) = 470): at 12.5 px the string is ~65 px wide, so starting it at
          STRIP_X + STRIP_W + 10 = 392 ends it at ~457, clear of the line. */}
      <Draw on={beat >= 2} delay={dl(2, 1.4)}
        d={arrowD(STRIP_X + STRIP_W + 30, STRIP_TOP - 4, STRIP_X + STRIP_W + 4, STRIP_TOP + 2)}
        stroke={GREEN_DARK} sw={1.8} dur={0.3} />
      <Fade on={beat >= 2} delay={dl(2, 1.8)}>
        <T x={STRIP_X + STRIP_W + 10} y={STRIP_TOP + 23} size={12.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("height 2√x", "height 2√x")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.6)}>
        <T x={556} y={322} size={22} fill={INK} weight={800} anchor="start">
          A = ∫₀⁴ 2√x dx
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 4.6)}>
        <T x={556} y={352} size={19} fill={INK} weight={700} anchor="start">
          = 2 ∫₀⁴ x^(1/2) dx
        </T>
      </Fade>

      {/* ═══════════ beat 3 — the antiderivative ═══════════ */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={556} y={386} size={19} fill={INK} weight={700} anchor="start">
          = 2 [ (2/3) x^(3/2) ]₀⁴
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 3)}>
        <T x={556} y={414} size={19} fill={INK} weight={700} anchor="start">
          = (4/3) · 4^(3/2)
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 4)} d={arrowD(880, 380, 936, 380)} stroke={MUTED} sw={1.6} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 4.4)}>
        <T x={944} y={385} size={12} fill={MUTED} weight={700} anchor="start">
          {t("power rule", "power rule")}
        </T>
      </Fade>

      {/* ═══════════ beat 4 — the value ═══════════ */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={556} y={442} size={15} fill={MUTED} weight={700} anchor="start">
          4^(3/2) = 8
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.6)}>
        <Chip x={646} y={424} w={380} h={44} fill={CREAM} stroke={GREEN_DARK}
          textFill={GREEN_DARK} size={22} script={false}>
          A = (4/3)(8) = 32/3 sq units
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 3.2)}>
        <T x={268} y={378} size={22} fill={GREEN_DARK} weight={900}>32/3</T>
      </Fade>

      {/* ─────────── divider into the bottom band ─────────── */}
      <Draw on={beat >= 5} delay={dl(5, 0.1)} d="M 40 478 H 1044" stroke={MUTED} sw={1.3} dur={0.9} />

      {/* ═══════════ beat 5 — the axis IS a stated boundary ═══════════ */}
      {/* sw 4 (not 6) so the repaint stays inside y 428..432 and does not bury
          the dx arrowhead or swallow the x ticks, which span y 424..436 */}
      <Draw on={beat >= 5} delay={dl(5, 0.6)} d={`M ${px(0)} 430 H ${px(4)}`} stroke={GREEN} sw={4} dur={0.8} />
      {/* ring on chip ② only: chip is x 556..1026, y 156..186, its neighbours
          sit at y 120..150 and y 192..222, so ry 17 keeps the ring inside the
          6 px gutters and rx 238 about the true chip centre 791 stays < 1044 */}
      <Draw on={beat >= 5} delay={dl(5, 1.6)} d={ringD(791, 171, 238, 17)} stroke={GREEN_DARK} sw={2.2} dur={0.9} />
      <Draw on={beat >= 5} delay={dl(5, 2.6)} d={arrowD(372, 206, 404, 238)} stroke={GREEN_DARK} sw={1.8} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 3)}>
        <T x={250} y={202} size={13} fill={GREEN_DARK} weight={800} anchor="start">
          {t("upper branch only", "sirf upper branch")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 4)}>
        <T x={60} y={504} size={14} fill={RED} weight={800} anchor="start">
          {t("WHAT THE EXAMINER IS ACTUALLY TESTING",
             "EXAMINER ASAL MEIN KYA TEST KAR RAHA HAI")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 5.6)}>
        <T x={60} y={526} size={13.5} fill={INK} weight={700} anchor="start">
          {t("the x-axis is a STATED boundary here — so the region is bounded below by it,",
             "yahan x-axis ek STATED boundary hai — to region neeche se usi se bandha hai,")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 7.4)}>
        <T x={60} y={548} size={13.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("and only the upper branch y = 2√x counts.",
             "aur sirf upper branch y = 2√x count hota hai.")}
        </T>
      </Fade>

      {/* ═══════════ beat 6 — drop the axis and both branches return ═══════════ */}
      {/* two lines, not one: the Hinglish string is 95 chars and at 13.5 px ran
          past x = 760 into the inset's y-axis. Split, both languages end < 415. */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={60} y={570} size={13.5} fill={RED} weight={800} anchor="start">
          {t("drop that one word and both branches are in play —",
             "wo ek shabd hatao — dono branches aa jaate hain,")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.9)}>
        <T x={60} y={592} size={13.5} fill={RED} weight={800} anchor="start">
          {t("symmetry doubles it:   2 × 32/3 = 64/3",
             "symmetry double kar deti hai:   2 × 32/3 = 64/3")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.2)} d={arrowD(770, 538, 933, 538)} stroke={INK} sw={1.8} dur={0.5} />
      <Draw on={beat >= 6} delay={dl(6, 1.6)} d={arrowD(800, 592, 800, 487)} stroke={INK} sw={1.8} dur={0.5} />
      <Draw on={beat >= 6} delay={dl(6, 2)} d={IN_UP_D} stroke={AMBER_DARK} sw={2.2} dur={0.7} />
      <Draw on={beat >= 6} delay={dl(6, 2.6)} d={IN_DN_D} stroke={AMBER_DARK} sw={2.2} dur={0.7} />
      <Draw on={beat >= 6} delay={dl(6, 3.2)} d={`M ${ix(4)} ${iy(4)} V ${iy(-4)}`} stroke={BLUE} sw={2.2} dur={0.4} />
      <Path
        d={IN_REGION_D}
        fill={AMBER}
        stroke="none"
        opacity={beat >= 6 ? 0.3 : 0}
      />
      {/* 64/3 sits in the LOWER half of the doubled region (iy(0) = 538 is the
          inset's x-axis stroke — the old y = 546 put the number on top of it) */}
      <Fade on={beat >= 6} delay={dl(6, 4.2)}>
        <T x={855} y={566} size={17} fill={GREEN_DARK} weight={900}>64/3</T>
        <T x={890} y={497} size={11.5} fill={BLUE} weight={700} anchor="start">x = 4</T>
        <T x={890} y={519} size={11.5} fill={AMBER_DARK} weight={700} anchor="start">y = 2√x</T>
        <T x={890} y={584} size={11.5} fill={AMBER_DARK} weight={700} anchor="start">y = −2√x</T>
      </Fade>
    </Scene>
  );
}
