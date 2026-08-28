/**
 * M12Ch01 · Section 32 — "The discriminant method in full"
 * Subtopic: Domain and Range of Real Functions
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * The full template on a quadratic over a quadratic:
 *   f(x) = (x² − x + 1) / (x² + x + 1)
 * denominator = (x + ½)² + ¾ > 0 ⇒ domain ℝ; cross-multiplying gives
 * (y − 1)x² + (y + 1)x + (y − 1) = 0; D ≥ 0 factors to (3 − y)(3y − 1) ≥ 0,
 * so the range is [⅓, 3]; and y = 1 is checked as the degenerate case.
 *
 * Everything the voice names is drawn: the real curve of f on real axes
 * (it genuinely tops out at 3 when x = −1 and bottoms at ⅓ when x = 1, and
 * tends to 1), the completed-square parabola that proves the denominator
 * never touches the axis, a sign line on y for the factored discriminant,
 * and the point f(0) = 1 that the degenerate case produces.
 *
 * Grid
 *   title band     y 30..96   full width
 *   left column    x 40..500, y 100..430   algebra + the completed-square inset
 *   graph panel    x 520..1044, y 100..430  the curve of f (beats 1, 6, 7)
 *   bottom band    y 440..596, columns 40..350 / 372..700 / 716..1044
 *
 * Beat map (8 segments, gates 0..7 — every beat used):
 *  0  "quadratic over quadratic"          title + underline + subtitle + rule
 *  1  "f(x) = (x²−x+1)/(x²+x+1)"          the fraction typeset with a real bar,
 *                                         plus axes and the actual curve
 *  2  "denominator = (x+½)² + ¾ > 0"      the identity, and a drawn parabola
 *                                         sitting a clear ¾ above the axis
 *  3  "cross-multiply and collect"        y(x²+x+1) = x²−x+1  →
 *                                         (y−1)x² + (y+1)x + (y−1) = 0
 *  4  "force the discriminant ≥ 0"        the key idea + a big D ≥ 0
 *  5  "(y+1)² − 4(y−1)² ≥ 0"              factors to (3 − y)(3y − 1) ≥ 0, ringed
 *  6  "non-negative for ⅓ ≤ y ≤ 3"        a sign line on y with the middle
 *                                         stretch marked, Range chip, and the
 *                                         two levels y = 3, y = ⅓ on the graph
 *  7  "the degenerate case y = 1"         the x² term dies, 2x = 0 ⇒ x = 0,
 *                                         and the point f(0) = 1 marked on
 *                                         the curve — already inside the range
 *
 * Visual vocabulary (shared with Sections 31 and 33 of this subtopic):
 *   axes INK with arrowheads · the primary function AMBER_DARK · the range
 *   band a single AMBER fill at low opacity · boundary levels dashed BLUE ·
 *   every result GREEN_DARK · headings RED · asides MUTED.
 */

import React from "react";
import { Circle, Path, Rect } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD, ringD,
  INK, MUTED, AMBER, AMBER_DARK, GREEN, GREEN_DARK, RED, CREAM, PAPER,
  Scene,
} from '@/components/scenes/kit';

const BLUE = "#0284c7";

/* ---------- graph frame: x-axis at y = 360, y-axis at x = 782 ---------- */
const CX = 782;
const SX = 50;   // px per unit x
const SY = 60;   // px per unit y
const YBASE = 360;
const px = (x: number) => CX + SX * x;
const py = (y: number) => YBASE - SY * y;
const f = (x: number) => (x * x - x + 1) / (x * x + x + 1);

const X0 = -3.6;
const X1 = 3.6;
const CURVE_D = (() => {
  const pts: string[] = [];
  for (let i = 0; i <= 84; i++) {
    const x = X0 + ((X1 - X0) * i) / 84;
    pts.push(`${px(x).toFixed(1)} ${py(f(x)).toFixed(1)}`);
  }
  return `M ${pts.join(" L ")}`;
})();

const BAND_L = px(X0);      // 602
const BAND_R = px(X1);      // 962
const BAND_T = py(3);       // 180
const BAND_B = py(1 / 3);   // 340

/* ---------- the completed-square inset: g(u) = (u + ½)² + ¾ ---------- */
const mx = (u: number) => 386 + 40 * u;
const my = (v: number) => 312 - 19 * v;
const PARA_D = (() => {
  const pts: string[] = [];
  for (let i = 0; i <= 36; i++) {
    const u = -2.6 + (4.2 * i) / 36;
    pts.push(`${mx(u).toFixed(1)} ${my((u + 0.5) * (u + 0.5) + 0.75).toFixed(1)}`);
  }
  return `M ${pts.join(" L ")}`;
})();

export default function M12Ch01Sec32({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ═══════════ beat 0 — the framing ═══════════ */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={50} size={24} fill={RED} script>
          {t("The discriminant method in full", "Poora discriminant method")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.1)}
        d="M 364 64 C 470 60, 620 68, 716 62" stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 1.9)}>
        <T x={540} y={84} size={12.5} fill={MUTED} script>
          {t("a quadratic over a quadratic — the template JEE loves to test",
             "quadratic upon quadratic — wahi template jo JEE test karta hai")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.7)} d="M 40 96 H 1044" stroke={MUTED} sw={1.2} dur={1} />

      {/* ═══════════ beat 1 — the function, and its curve ═══════════ */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={44} y={118} size={13.5} fill={RED} weight={800} anchor="start">
          {t("the function", "function")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={44} y={168} size={21} fill={INK} weight={800} anchor="start">f(x) =</T>
        <T x={196} y={144} size={18} fill={INK} weight={800}>x² − x + 1</T>
        <T x={196} y={182} size={18} fill={INK} weight={800}>x² + x + 1</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.5)} d="M 138 160 H 254" stroke={INK} sw={2.2} dur={0.4} />

      {/* axes + the actual curve */}
      <Draw on={beat >= 1} delay={dl(1, 2.2)} d={arrowD(590, YBASE, 990, YBASE)} stroke={INK} sw={2.2} dur={0.7} />
      <Draw on={beat >= 1} delay={dl(1, 2.8)} d={arrowD(CX, 380, CX, 158)} stroke={INK} sw={2.2} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 3.3)}>
        <T x={996} y={378} size={12.5} fill={INK} weight={800} anchor="start">x</T>
        <T x={770} y={168} size={12.5} fill={INK} weight={800} anchor="end">y</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 3.6)} d={CURVE_D} stroke={AMBER_DARK} sw={2.8} dur={1.6} />
      <Fade on={beat >= 1} delay={dl(1, 5)}>
        <T x={536} y={132} size={13} fill={AMBER_DARK} weight={800} anchor="start">
          y = (x² − x + 1) / (x² + x + 1)
        </T>
      </Fade>

      {/* ═══════════ beat 2 — the denominator never dies ═══════════ */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={44} y={214} size={13.5} fill={RED} weight={800} anchor="start">
          {t("first, the domain", "pehle domain")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={44} y={244} size={15} fill={INK} weight={800} anchor="start">x² + x + 1 = (x + ½)² + ¾</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3.2)}>
        <T x={44} y={270} size={14} fill={INK} weight={700} anchor="start">
          {t("⇒ always ≥ ¾ > 0", "⇒ hamesha ≥ ¾ > 0")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 5.4)}>
        <T x={44} y={302} size={16} fill={GREEN_DARK} weight={900} anchor="start">Domain = R</T>
      </Fade>
      {/* the inset that proves it: a parabola that never reaches the axis */}
      <Draw on={beat >= 2} delay={dl(2, 2)} d="M 276 312 H 476" stroke={INK} sw={1.8} dur={0.5} />
      <Draw on={beat >= 2} delay={dl(2, 2.5)} d={PARA_D} stroke={AMBER_DARK} sw={2.4} dur={1} />
      <Fade on={beat >= 2} delay={dl(2, 3.8)}>
        <Path d="M 290 298 H 470" fill="none" stroke={BLUE} strokeWidth={1.8} strokeDasharray="7 5" />
        <Circle cx={366} cy={298} r={4.5} fill={GREEN_DARK} />
        <T x={284} y={302} size={11.5} fill={BLUE} weight={800} anchor="end">¾</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 6.4)}>
        <T x={386} y={332} size={11} fill={MUTED} weight={700}>
          {t("(x + ½)² + ¾  never reaches 0", "(x + ½)² + ¾ kabhi 0 nahin hota")}
        </T>
      </Fade>

      {/* ═══════════ beat 3 — cross-multiply and collect ═══════════ */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={44} y={358} size={13.5} fill={RED} weight={800} anchor="start">
          {t("cross-multiply, then collect", "cross-multiply, phir terms ikattha")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.4)}>
        <T x={44} y={388} size={15} fill={INK} weight={800} anchor="start">y (x² + x + 1) = x² − x + 1</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 5)}>
        <T x={44} y={418} size={15} fill={GREEN_DARK} weight={900} anchor="start">(y − 1)x² + (y + 1)x + (y − 1) = 0</T>
      </Fade>

      {/* ═══════════ beat 4 — force D ≥ 0 ═══════════ */}
      <Draw on={beat >= 4} delay={dl(4, 0.1)} d="M 40 440 H 1044" stroke={MUTED} sw={1.2} dur={0.9} />
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={44} y={468} size={13.5} fill={RED} weight={800} anchor="start">
          {t("a real x must exist", "real x exist karna chahiye")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.6)}>
        <T x={44} y={496} size={13} fill={INK} weight={700} anchor="start">
          {t("this is a quadratic in x, so", "yeh x mein quadratic hai, to")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.8)}>
        <T x={44} y={520} size={13} fill={INK} weight={700} anchor="start">
          {t("for a given y it must have a", "kisi diye gaye y ke liye iska")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 4)}>
        <T x={44} y={544} size={13} fill={INK} weight={700} anchor="start">
          {t("real root — force D ≥ 0.", "real root ho — D ≥ 0 force karo.")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 5.6)}>
        <T x={44} y={580} size={20} fill={GREEN_DARK} weight={900} anchor="start">D ≥ 0</T>
      </Fade>

      {/* ═══════════ beat 5 — the discriminant factors ═══════════ */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={376} y={468} size={13.5} fill={RED} weight={800} anchor="start">
          {t("the discriminant", "discriminant")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        <T x={376} y={490} size={15} fill={INK} weight={800} anchor="start">(y + 1)² − 4(y − 1)² ≥ 0</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 6)}>
        <T x={376} y={530} size={16} fill={GREEN_DARK} weight={900} anchor="start">⇒ (3 − y)(3y − 1) ≥ 0</T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 7.4)} d={ringD(463, 524, 95, 17)} stroke={AMBER_DARK} sw={2.2} dur={0.8} />
      <Fade on={beat >= 5} delay={dl(5, 8.6)}>
        <T x={376} y={578} size={12} fill={MUTED} weight={700} anchor="start">
          {t("a neat factorisation — read its sign", "neat factorisation — ab iska sign padho")}
        </T>
      </Fade>

      {/* ═══════════ beat 6 — the sign line on y, and the two levels ═══════════ */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={716} y={466} size={13.5} fill={RED} weight={800} anchor="start">
          {t("sign of the product", "product ka sign")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 0.9)} d={arrowD(880, 506, 1030, 506)} stroke={INK} sw={2.2} dur={0.4} />
      <Draw on={beat >= 6} delay={dl(6, 1.2)} d={arrowD(880, 506, 730, 506)} stroke={INK} sw={2.2} dur={0.4} />
      <Draw on={beat >= 6} delay={dl(6, 1.6)} d="M 800 499 V 513 M 940 499 V 513" stroke={INK} sw={1.8} dur={0.3} />
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={765} y={492} size={17} fill={RED} weight={900}>−</T>
        <T x={870} y={492} size={17} fill={GREEN_DARK} weight={900}>+</T>
        <T x={985} y={492} size={17} fill={RED} weight={900}>−</T>
        <T x={800} y={530} size={13} fill={INK} weight={800}>⅓</T>
        <T x={940} y={530} size={13} fill={INK} weight={800}>3</T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 2.8)} d="M 800 506 H 940" stroke={GREEN} sw={6} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 3.4)}>
        <Circle cx={800} cy={506} r={5} fill={GREEN_DARK} />
        <Circle cx={940} cy={506} r={5} fill={GREEN_DARK} />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 4.2)}>
        <T x={716} y={562} size={18} fill={GREEN_DARK} weight={900} anchor="start">⅓ ≤ y ≤ 3</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 5)}>
        <Chip x={828} y={546} w={210} h={38} fill={CREAM} stroke={GREEN_DARK}
          textFill={GREEN_DARK} size={16} script={false}>
          Range = [ ⅓ , 3 ]
        </Chip>
      </Fade>
      {/* the two levels on the real graph, and the band between them */}
      <Fade on={beat >= 6} delay={dl(6, 6)}>
        <Path d={`M ${BAND_L} ${BAND_T} H ${BAND_R}`} fill="none" stroke={BLUE} strokeWidth={2} strokeDasharray="8 6" />
        <T x={968} y={170} size={12} fill={BLUE} weight={800} anchor="start">y = 3</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 6.6)}>
        <Path d={`M ${BAND_L} ${BAND_B} H ${BAND_R}`} fill="none" stroke={BLUE} strokeWidth={2} strokeDasharray="8 6" />
        <T x={968} y={330} size={12} fill={BLUE} weight={800} anchor="start">y = ⅓</T>
      </Fade>
      <Rect
        x={BAND_L} y={BAND_T} width={BAND_R - BAND_L} height={BAND_B - BAND_T}
        fill={AMBER} stroke="none"
        opacity={beat >= 6 ? 0.15 : 0}
      />
      <Fade on={beat >= 6} delay={dl(6, 7.6)}>
        {/* the curve actually touches both ends of the band — mark the touches,
            but name no x-value: segment 6 speaks only the y-levels ⅓ and 3. */}
        <Circle cx={px(-1)} cy={py(3)} r={5.5} fill={GREEN_DARK} />
        <Circle cx={px(1)} cy={py(1 / 3)} r={5.5} fill={GREEN_DARK} />
        {/* y=170 put this straight through the y-axis label (which occupies
            y 157..171 just left of the axis head); dropped to 192 so the two
            clear each other by ~10px. Measured with getBBox, not estimated. */}
        <T x={744} y={192} size={12} fill={GREEN_DARK} weight={800} anchor="start">
          {t("top of the range", "range ka top end")}
        </T>
        <T x={812} y={380} size={12} fill={GREEN_DARK} weight={800} anchor="start">
          {t("bottom of the range", "range ka bottom end")}
        </T>
      </Fade>

      {/* ═══════════ beat 7 — the degenerate case y = 1 ═══════════ */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Circle cx={px(0)} cy={py(1)} r={5.5} fill={PAPER} stroke={RED} strokeWidth={2.6} />
        <Path d={`M ${px(0) + 8} ${py(1)} H 962`} fill="none" stroke={RED} strokeWidth={1.6} strokeDasharray="6 5" />
        <T x={968} y={304} size={12} fill={RED} weight={800} anchor="start">f(0) = 1</T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.4)}>
        <T x={782} y={402} size={12} fill={INK} weight={700}>
          {t("y = 1: the x² term dies, the quadratic goes linear",
             "y = 1: x² term khatam, quadratic linear ban jaata hai")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 3.4)}>
        <T x={782} y={426} size={12} fill={GREEN_DARK} weight={800}>
          {t("2x = 0 ⇒ x = 0 is valid, and 1 is already in [⅓, 3]",
             "2x = 0 ⇒ x = 0 valid hai, aur 1 pehle se [⅓, 3] mein hai")}
        </T>
      </Fade>
    </Scene>
  );
}
