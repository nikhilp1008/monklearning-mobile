/**
 * M12Ch01 · Section 30 — "Two domain problems: a root sum and a log"
 * Subtopic: Domain and Real Functions
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * Both worked problems are the ones the voice actually states, and both are
 * DRAWN. Problem 1 gets three number lines on a shared scale — x ≥ 3, then
 * x ≠ 5, then their intersection — so the union [3,5) ∪ (5,∞) is a picture
 * before it is a formula. Problem 2 gets the real parabola y = x² − 4: the
 * two hollow roots at ±2, the stretches of the x-axis where the parabola sits
 * above the axis painted green, and on the trap beat two dashed drops from
 * ±2 to the "log 0" tag. The closing beat rebuilds answer one at full width:
 * solid from 3, hollow hole at 5, arrow on to infinity.
 *
 * Grid
 *   header band          y  30..88
 *   vertical rule x=545  y  96..452
 *   LEFT   x  40..530    y  96..452   problem 1 (root + fraction)
 *   RIGHT  x 560..1044   y  96..452   problem 2 (logarithm)
 *   divider y 462
 *   BOTTOM x  40..1044   y 470..596   the big number line for answer 1
 *
 * Beat map (9 segments, gates 0..8 — every beat used):
 *  0  "apply the catalogue to two"   title, underline, subtitle, rule and the
 *                                    vertical split between the two problems
 *  1  "f = √(x−3) + 1/(x−5)"         problem-1 heading, the formula, and the
 *                                    two arrows tagging "even root" and
 *                                    "denominator" — the two different jams
 *  2  "x ≥ 3 · x ≠ 5 · intersect"    both constraint number lines: filled 3,
 *                                    hollow 5, plus "now intersect"
 *  3  "[3,5) ∪ (5,∞)"                the intersection number line and the
 *                                    interval answer in words and symbols
 *  4  "g = log(x² − 4)"              problem-2 heading, formula, one-jam note
 *  5  "x²−4 > 0 ⇒ x² > 4 ⇒ |x| > 2"  the inequality chain and the plotted
 *                                    parabola y = x² − 4 with hollow ±2 and
 *                                    the allowed x painted on the axis
 *  6  "domain of g"                  (−∞, −2) ∪ (2, ∞)
 *  7  "watch the trap"               ≥ 0 is the ROOT rule, a log needs > 0, so
 *                                    ±2 is excluded — with the dashed drops
 *                                    and the log-0 tag on the figure
 *  8  "the number line makes it vivid" the full-width answer-1 number line:
 *                                    solid from 3, hollow at 5, arrow to ∞
 *
 * Visual vocabulary (shared with Sections 28 and 29):
 *   axes INK with computed arrowheads · the function itself AMBER_DARK ·
 *   DOMAIN facts on the x-axis in GREEN_DARK · results GREEN_DARK ·
 *   exclusions and traps RED · headings RED, secondary prose MUTED ·
 *   filled dot = included, hollow dot = excluded, everywhere.
 */

import React from "react";
import { Circle, Line } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, arrowD,
  INK, MUTED, AMBER_DARK, GREEN_DARK, RED, PAPER,
  Scene,
} from '@/components/scenes/kit';

/** sample a parametric curve into a polyline path */
function pathFrom(
  fn: (u: number) => [number, number],
  u0: number,
  u1: number,
  n: number
): string {
  const pts: string[] = [];
  for (let i = 0; i <= n; i++) {
    const u = u0 + ((u1 - u0) * i) / n;
    const [x, y] = fn(u);
    pts.push(`${x.toFixed(1)} ${y.toFixed(1)}`);
  }
  return `M ${pts.join(" L ")}`;
}

/* ---- problem 1: one shared scale for all three number lines ---- */
const LX = (v: number) => 250 + 30 * (v - 2);   // 3 → 280, 5 → 340
const X3 = LX(3);
const X5 = LX(5);

/* ---- problem 2: y = x² − 4 about (872, 250) ---- */
const PAR_D = pathFrom((u) => [872 + 30 * u, 250 - 9.5 * (u * u - 4)], -3, 3, 48);
const R_NEG = 872 - 60;   // 812  → x = −2
const R_POS = 872 + 60;   // 932  → x = +2

/* ---- the closing full-width number line ---- */
const BX = (v: number) => 200 + 90 * (v - 2);   // 3 → 290, 5 → 470

export default function M12Ch01Sec30({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ═══════════ beat 0 — two problems, side by side ═══════════ */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={46} size={25} fill={RED} script>
          {t("Two domains: a root sum and a log", "Do domains: ek root sum aur ek log")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.1)}
        d="M 356 62 C 460 58, 620 66, 724 60" stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 1.8)}>
        <T x={540} y={80} size={12.5} fill={MUTED} script>
          {t("run the constraint catalogue on two real problems",
             "constraint catalogue do real problems par chalao")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 40 88 H 1044" stroke={MUTED} sw={1.2} dur={0.9} />
      <Draw on={beat >= 0} delay={dl(0, 3.6)} d="M 545 96 V 452" stroke={MUTED} sw={1.2} dur={1} />

      {/* ═══════════ beat 1 — problem 1, and the two jams in it ═══════════ */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={40} y={112} size={13.5} fill={RED} weight={800} anchor="start">
          {t("① a root and a fraction, added", "① ek root aur ek fraction, jude hue")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.2)}>
        <T x={40} y={146} size={19} fill={AMBER_DARK} weight={900} anchor="start">
          f(x) = √(x − 3) + 1 / (x − 5)
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 3)} d={arrowD(149, 178, 149, 158)} stroke={RED} sw={1.8} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 3.4)}>
        <T x={149} y={196} size={11.5} fill={RED} weight={800}>
          {t("even root", "even root")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 4.6)} d={arrowD(272, 178, 272, 158)} stroke={RED} sw={1.8} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 5)}>
        <T x={272} y={196} size={11.5} fill={RED} weight={800}>
          {t("denominator", "denominator")}
        </T>
      </Fade>

      {/* ═══════════ beat 2 — the two constraints, each on its own line ═══════════ */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={40} y={228} size={13} fill={GREEN_DARK} weight={800} anchor="start">
          x − 3 ≥ 0  ⇒  x ≥ 3
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.9)} d={arrowD(200, 224, 470, 224)} stroke={INK} sw={1.8} dur={0.5} />
      <Draw on={beat >= 2} delay={dl(2, 1.5)} d={`M ${X3} 224 H 464`} stroke={GREEN_DARK} sw={4.5} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <Circle cx={X3} cy={224} r={5} fill={GREEN_DARK} />
        <T x={X3} y={244} size={12} fill={INK} weight={800}>3</T>
      </Fade>

      <Fade on={beat >= 2} delay={dl(2, 4.2)}>
        <T x={40} y={276} size={13} fill={RED} weight={800} anchor="start">
          x − 5 ≠ 0  ⇒  x ≠ 5
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 4.9)} d={arrowD(200, 272, 470, 272)} stroke={INK} sw={1.8} dur={0.5} />
      <Draw on={beat >= 2} delay={dl(2, 5.5)} d={`M 206 272 H ${X5 - 7}`} stroke={GREEN_DARK} sw={4.5} dur={0.4} />
      <Draw on={beat >= 2} delay={dl(2, 5.8)} d={`M ${X5 + 7} 272 H 464`} stroke={GREEN_DARK} sw={4.5} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 6.3)}>
        <Circle cx={X5} cy={272} r={5} fill={PAPER} stroke={RED} strokeWidth={2} />
        <T x={X5} y={292} size={12} fill={RED} weight={800}>5</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 8.4)}>
        <T x={40} y={316} size={12.5} fill={INK} weight={700} anchor="start">
          {t("now intersect the two", "ab dono ko intersect karo")}
        </T>
      </Fade>

      {/* ═══════════ beat 3 — the intersection ═══════════ */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={40} y={348} size={12.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("keep what both allow", "jo dono allow karein")}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 0.8)} d={arrowD(200, 356, 470, 356)} stroke={INK} sw={2} dur={0.6} />
      <Draw on={beat >= 3} delay={dl(3, 1.6)} d={`M ${X3} 356 H ${X5 - 7}`} stroke={GREEN_DARK} sw={5.5} dur={0.4} />
      <Draw on={beat >= 3} delay={dl(3, 2.1)} d={`M ${X5 + 7} 356 H 464`} stroke={GREEN_DARK} sw={5.5} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 2.7)}>
        <Circle cx={X3} cy={356} r={5.5} fill={GREEN_DARK} />
        <T x={X3} y={376} size={12} fill={GREEN_DARK} weight={800}>3</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 3.4)}>
        <Circle cx={X5} cy={356} r={5.5} fill={PAPER} stroke={RED} strokeWidth={2.2} />
        <T x={X5} y={376} size={12} fill={RED} weight={800}>5</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 4.8)}>
        <T x={40} y={404} size={17} fill={GREEN_DARK} weight={900} anchor="start">
          domain = [3, 5) ∪ (5, ∞)
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 6.6)}>
        <T x={40} y={430} size={12} fill={MUTED} weight={700} anchor="start">
          {t("3 included, 5 excluded, everything beyond 5",
             "3 shamil, 5 bahar, 5 ke aage sab kuch")}
        </T>
      </Fade>

      {/* ═══════════ beat 4 — problem 2 ═══════════ */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={560} y={112} size={13.5} fill={RED} weight={800} anchor="start">
          {t("② a logarithm — one constraint", "② ek logarithm — ek hi constraint")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.6)}>
        <T x={560} y={146} size={19} fill={AMBER_DARK} weight={900} anchor="start">
          g(x) = log( x² − 4 )
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 3.6)}>
        <T x={560} y={172} size={12} fill={MUTED} weight={700} anchor="start">
          {t("just one jam to clear", "sirf ek hi jam hai")}
        </T>
      </Fade>

      {/* ═══════════ beat 5 — the chain, and the parabola behind it ═══════════ */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={560} y={204} size={13.5} fill={RED} weight={800} anchor="start">x² − 4 &gt; 0</T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 0.8)} d={arrowD(660, 196, 660, 262)} stroke={MUTED} sw={1.8} dur={0.6} />
      <Fade on={beat >= 5} delay={dl(5, 1.4)}>
        <T x={560} y={230} size={13.5} fill={INK} weight={800} anchor="start">x² &gt; 4</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2.4)}>
        <T x={560} y={256} size={13.5} fill={GREEN_DARK} weight={900} anchor="start">| x | &gt; 2</T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 3.4)} d={arrowD(756, 250, 1000, 250)} stroke={INK} sw={1.8} dur={0.6} />
      <Draw on={beat >= 5} delay={dl(5, 3.9)} d={arrowD(872, 300, 872, 192)} stroke={INK} sw={1.8} dur={0.5} />
      <Draw on={beat >= 5} delay={dl(5, 4.4)} d={PAR_D} stroke={AMBER_DARK} sw={2.6} dur={1} />
      <Fade on={beat >= 5} delay={dl(5, 5.5)}>
        <T x={872} y={316} size={12} fill={AMBER_DARK} weight={800}>y = x² − 4</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 6.2)}>
        <Circle cx={R_NEG} cy={250} r={4.5} fill={PAPER} stroke={RED} strokeWidth={2} />
        <Circle cx={R_POS} cy={250} r={4.5} fill={PAPER} stroke={RED} strokeWidth={2} />
        <T x={798} y={268} size={11.5} fill={RED} weight={800} anchor="end">−2</T>
        <T x={946} y={268} size={11.5} fill={RED} weight={800} anchor="start">2</T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 7.2)} d="M 758 250 H 806" stroke={GREEN_DARK} sw={4.5} dur={0.4} />
      <Draw on={beat >= 5} delay={dl(5, 7.6)} d="M 938 250 H 994" stroke={GREEN_DARK} sw={4.5} dur={0.4} />

      {/* ═══════════ beat 6 — the domain of g ═══════════ */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={560} y={326} size={12.5} fill={INK} weight={700} anchor="start">
          {t("so the domain of g is", "to g ka domain hai")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={560} y={350} size={17} fill={GREEN_DARK} weight={900} anchor="start">
          domain = (−∞, −2) ∪ (2, ∞)
        </T>
      </Fade>

      {/* ═══════════ beat 7 — the trap: ≥ 0 is the root rule, not the log rule ═══════════ */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={560} y={384} size={13} fill={RED} weight={800} anchor="start">
          {t("TRAP — ≥ 0 is the ROOT rule", "TRAP — ≥ 0 root ka rule hai")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 2)}>
        <T x={560} y={408} size={12.5} fill={INK} weight={700} anchor="start">
          {t("a log needs > 0, strictly", "log ko strictly > 0 chahiye")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 4)}>
        <T x={560} y={432} size={12.5} fill={RED} weight={800} anchor="start">
          {t("so x = ±2 is excluded", "to x = ±2 excluded hai")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 6)}>
        <Line x1={R_NEG} y1={250} x2={R_NEG} y2={328} stroke={RED} strokeWidth={1.6} strokeDasharray="6 6" />
        <Line x1={R_POS} y1={250} x2={R_POS} y2={328} stroke={RED} strokeWidth={1.6} strokeDasharray="6 6" />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 7.4)}>
        <T x={880} y={344} size={11.5} fill={RED} weight={800}>
          {t("here the log would be log 0", "yahan log, log 0 ban jaata")}
        </T>
      </Fade>

      {/* ═══════════ beat 8 — answer one, drawn full width ═══════════ */}
      <Draw on={beat >= 8} delay={dl(8, 0.05)} d="M 40 462 H 1044" stroke={MUTED} sw={1.2} dur={0.5} />
      <Fade on={beat >= 8} delay={dl(8, 0.2)}>
        <T x={40} y={486} size={13.5} fill={RED} weight={800} anchor="start">
          {t("⑧ the first answer on a number line", "⑧ pehla answer number line par")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 0.4)}>
        <T x={40} y={510} size={13} fill={GREEN_DARK} weight={900} anchor="start">[3, 5) ∪ (5, ∞)</T>
      </Fade>
      <Draw on={beat >= 8} delay={dl(8, 0.6)} d={arrowD(100, 540, 1000, 540)} stroke={INK} sw={2.4} dur={0.7} />
      <Draw on={beat >= 8} delay={dl(8, 0.9)} d={`M ${BX(3)} 540 H ${BX(5) - 8}`} stroke={GREEN_DARK} sw={7} dur={0.4} />
      <Draw on={beat >= 8} delay={dl(8, 1.1)} d={`M ${BX(5) + 8} 540 H 990`} stroke={GREEN_DARK} sw={7} dur={0.5} />
      <Fade on={beat >= 8} delay={dl(8, 1.3)}>
        <Circle cx={BX(3)} cy={540} r={7} fill={GREEN_DARK} />
        <T x={BX(3)} y={566} size={15} fill={INK} weight={900}>3</T>
        <T x={BX(3)} y={590} size={12} fill={GREEN_DARK} weight={800}>
          {t("included", "shamil")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 1.5)}>
        <Circle cx={BX(5)} cy={540} r={7} fill={PAPER} stroke={RED} strokeWidth={2.5} />
        <T x={BX(5)} y={566} size={15} fill={RED} weight={900}>5</T>
        <T x={BX(5)} y={590} size={12} fill={RED} weight={800}>
          {t("excluded", "bahar")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 1.7)}>
        <T x={376} y={516} size={12.5} fill={GREEN_DARK} weight={800}>
          {t("solid stretch", "solid stretch")}
        </T>
        <T x={470} y={516} size={12.5} fill={RED} weight={800}>
          {t("open hole", "open hole")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 1.9)}>
        <T x={700} y={516} size={12.5} fill={GREEN_DARK} weight={800}>
          {t("on to infinity", "infinity tak")}
        </T>
        <T x={1010} y={546} size={16} fill={INK} weight={900} anchor="start">∞</T>
      </Fade>
    </Scene>
  );
}
