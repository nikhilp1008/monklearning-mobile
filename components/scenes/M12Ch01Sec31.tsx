/**
 * M12Ch01 · Section 31 — "Range by the y-method"
 * Subtopic: Domain and Range of Real Functions
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * The narration walks one example end to end: f(x) = x/(1 + x²), domain ℝ,
 * y-method → y x² − x + y = 0, discriminant ≥ 0 → 1 − 4y² ≥ 0 → the range
 * [−½, ½]. So the board is that example, drawn: the real curve on a real
 * pair of axes, the real horizontal band it is trapped inside, the real
 * peak and trough it touches, and the algebra chain that predicts them.
 *
 * Grid
 *   title band          y 30..96   full width
 *   left column         x 40..500, y 100..430   algebra (beats 1, 2, 3)
 *   graph panel         x 520..1044, y 100..430  the curve (beats 1, 6, 7)
 *   bottom band         y 440..596, three columns 40..350 / 372..700 / 712..1044
 *                       (beats 4, 5, 6)
 *
 * Beat map (8 segments, gates 0..7 — every beat used):
 *  0  "the y-method in its purest form"     title + underline + subtitle + rule
 *  1  "f(x) = x / (1 + x²), all real x"     the fraction typeset with a real
 *                                           bar, and the axes + the actual
 *                                           curve x/(1+x²) drawn on the right
 *  2  "1 + x² ≥ 1, so the domain is ℝ"      the inequality, and a number line
 *                                           arrowed both ways = every real x
 *  3  "clear the fraction → a quadratic"    y(1 + x²) = x  →  y x² − x + y = 0
 *  4  "a real x needs D ≥ 0"                the key idea + the big D ≥ 0
 *  5  "D = (−1)² − 4·y·y ≥ 0"               the discriminant, ringed at
 *                                           1 − 4y² ≥ 0
 *  6  "y² ≤ ¼, so −½ ≤ y ≤ ½"               solved + Range chip, and the two
 *                                           dashed lines y = ±½ on the graph
 *  7  "the curve never escapes the band"    the band shaded between them, the
 *                                           peak (1, ½) and trough (−1, −½)
 *                                           dotted with drop lines
 *
 * Visual vocabulary (shared with Sections 32 and 33 of this subtopic):
 *   axes INK with arrowheads · the primary function AMBER_DARK · the range
 *   band a single AMBER fill at low opacity · boundary levels dashed BLUE ·
 *   every result GREEN_DARK · headings RED · asides MUTED.
 */

import React from "react";
import { Circle, Path, Rect } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD, ringD,
  INK, MUTED, AMBER, AMBER_DARK, GREEN, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

const BLUE = "#0284c7";

/* ---------- the graph frame: origin (782, 272) ---------- */
const CX = 782;
const CY = 272;
const SX = 55;   // px per unit x
const SY = 190;  // px per unit y
const px = (x: number) => CX + SX * x;
const py = (y: number) => CY - SY * y;
const f = (x: number) => x / (1 + x * x);

const X0 = -3.6;
const X1 = 3.6;
const CURVE_D = (() => {
  const pts: string[] = [];
  for (let i = 0; i <= 72; i++) {
    const x = X0 + ((X1 - X0) * i) / 72;
    pts.push(`${px(x).toFixed(1)} ${py(f(x)).toFixed(1)}`);
  }
  return `M ${pts.join(" L ")}`;
})();

const BAND_L = px(X0);          // 584
const BAND_R = px(X1);          // 980
const BAND_T = py(0.5);         // 177
const BAND_B = py(-0.5);        // 367

export default function M12Ch01Sec31({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ═══════════ beat 0 — the framing ═══════════ */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={50} size={24} fill={RED} script>
          {t("Range by the y-method", "Range, y-method se")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.1)}
        d="M 420 64 C 500 60, 600 68, 662 62" stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 1.9)}>
        <T x={540} y={84} size={12.5} fill={MUTED} script>
          {t("turn the range question into a discriminant condition",
             "range ke sawaal ko discriminant condition mein badal do")}
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
        <T x={169} y={144} size={19} fill={INK} weight={800}>x</T>
        <T x={169} y={182} size={19} fill={INK} weight={800}>1 + x²</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.5)} d="M 124 160 H 214" stroke={INK} sw={2.2} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <T x={232} y={168} size={13} fill={MUTED} weight={700} anchor="start">
          {t("for all real x", "sabhi real x ke liye")}
        </T>
      </Fade>

      {/* the axes and the actual curve */}
      <Draw on={beat >= 1} delay={dl(1, 2.6)} d={arrowD(566, CY, 1000, CY)} stroke={INK} sw={2.2} dur={0.7} />
      <Draw on={beat >= 1} delay={dl(1, 3.2)} d={arrowD(CX, 380, CX, 158)} stroke={INK} sw={2.2} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 3.7)}>
        <T x={1006} y={277} size={12.5} fill={INK} weight={800} anchor="start">x</T>
        <T x={770} y={168} size={12.5} fill={INK} weight={800} anchor="end">y</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 4)} d={CURVE_D} stroke={AMBER_DARK} sw={2.8} dur={1.6} />
      <Fade on={beat >= 1} delay={dl(1, 5.4)}>
        <T x={536} y={132} size={13} fill={AMBER_DARK} weight={800} anchor="start">y = x / (1 + x²)</T>
      </Fade>

      {/* ═══════════ beat 2 — the domain ═══════════ */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={44} y={214} size={13.5} fill={RED} weight={800} anchor="start">
          {t("first, the domain", "pehle domain")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={44} y={240} size={14} fill={INK} weight={700} anchor="start">
          {t("1 + x² ≥ 1 for every x", "har x ke liye 1 + x² ≥ 1")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.6)}>
        <T x={44} y={264} size={13} fill={INK} weight={700} anchor="start">
          {t("⇒ the denominator never vanishes", "⇒ denominator kabhi vanish nahin hota")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 4.2)}>
        <T x={44} y={296} size={16} fill={GREEN_DARK} weight={900} anchor="start">Domain = R</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 5)} d={arrowD(212, 318, 44, 318)} stroke={GREEN} sw={2.4} dur={0.4} />
      <Draw on={beat >= 2} delay={dl(2, 5.3)} d={arrowD(212, 318, 380, 318)} stroke={GREEN} sw={2.4} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 5.8)}>
        <T x={212} y={338} size={11.5} fill={INK} weight={700}>0</T>
        <T x={396} y={322} size={12.5} fill={MUTED} weight={700} anchor="start">
          {t("every real x", "har real x")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 5.6)} d="M 212 312 V 323" stroke={INK} sw={1.8} dur={0.2} />

      {/* ═══════════ beat 3 — clear the fraction ═══════════ */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={44} y={358} size={13.5} fill={RED} weight={800} anchor="start">
          {t("set y = f(x), clear the fraction", "y = f(x) rakho, fraction clear karo")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.4)}>
        <T x={44} y={386} size={17} fill={INK} weight={800} anchor="start">y (1 + x²) = x</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 4.2)}>
        <T x={44} y={416} size={18} fill={GREEN_DARK} weight={900} anchor="start">y x² − x + y = 0</T>
        <T x={210} y={416} size={12.5} fill={MUTED} weight={700} anchor="start">
          {t("— a quadratic in x", "— x mein quadratic")}
        </T>
      </Fade>

      {/* ═══════════ beat 4 — the key idea ═══════════ */}
      <Draw on={beat >= 4} delay={dl(4, 0.1)} d="M 40 440 H 1044" stroke={MUTED} sw={1.2} dur={0.9} />
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={44} y={468} size={13.5} fill={RED} weight={800} anchor="start">
          {t("the key idea", "key idea")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.6)}>
        <T x={44} y={496} size={13} fill={INK} weight={700} anchor="start">
          {t("for a real x to exist for a", "kisi diye gaye y ke liye")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.6)}>
        <T x={44} y={520} size={13} fill={INK} weight={700} anchor="start">
          {t("given y, this quadratic must", "real x tabhi milega jab is")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 3.6)}>
        <T x={44} y={544} size={13} fill={INK} weight={700} anchor="start">
          {t("have a real root.", "quadratic ka real root ho.")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 5.2)}>
        <T x={44} y={580} size={20} fill={GREEN_DARK} weight={900} anchor="start">D ≥ 0</T>
      </Fade>

      {/* ═══════════ beat 5 — the discriminant ═══════════ */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={376} y={468} size={13.5} fill={RED} weight={800} anchor="start">
          {t("the discriminant", "discriminant")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        <T x={376} y={496} size={15} fill={INK} weight={800} anchor="start">D = (−1)² − 4 · y · y ≥ 0</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 4.4)}>
        <T x={376} y={534} size={16} fill={GREEN_DARK} weight={900} anchor="start">⇒ 1 − 4y² ≥ 0</T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 5.6)} d={ringD(434, 528, 76, 17)} stroke={AMBER_DARK} sw={2.2} dur={0.8} />
      <Fade on={beat >= 5} delay={dl(5, 6.6)}>
        <T x={376} y={580} size={12} fill={MUTED} weight={700} anchor="start">
          {t("this single line carries the range", "yahi ek line poori range rakhti hai")}
        </T>
      </Fade>

      {/* ═══════════ beat 6 — solve, and draw the two levels ═══════════ */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={716} y={468} size={13.5} fill={RED} weight={800} anchor="start">
          {t("solve it", "solve karo")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={716} y={500} size={16} fill={INK} weight={800} anchor="start">4y² ≤ 1  ⇒  y² ≤ ¼</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.6)}>
        <T x={716} y={534} size={18} fill={GREEN_DARK} weight={900} anchor="start">−½ ≤ y ≤ ½</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 4)}>
        <Chip x={712} y={548} w={300} h={40} fill={CREAM} stroke={GREEN_DARK}
          textFill={GREEN_DARK} size={17} script={false}>
          Range = [ −½ , ½ ]
        </Chip>
      </Fade>
      {/* the two levels, on the real graph */}
      <Fade on={beat >= 6} delay={dl(6, 5)}>
        <Path d={`M ${BAND_L} ${BAND_T} H ${BAND_R}`} fill="none" stroke={BLUE} strokeWidth={2} strokeDasharray="8 6" />
        <T x={986} y={166} size={12} fill={BLUE} weight={800} anchor="start">y = ½</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 5.8)}>
        <Path d={`M ${BAND_L} ${BAND_B} H ${BAND_R}`} fill="none" stroke={BLUE} strokeWidth={2} strokeDasharray="8 6" />
        <T x={986} y={384} size={12} fill={BLUE} weight={800} anchor="start">y = −½</T>
      </Fade>

      {/* ═══════════ beat 7 — the trapping band ═══════════ */}
      <Rect
        x={BAND_L} y={BAND_T} width={BAND_R - BAND_L} height={BAND_B - BAND_T}
        fill={AMBER} stroke="none"
        opacity={beat >= 7 ? 0.16 : 0}
      />
      <Fade on={beat >= 7} delay={dl(7, 0.5)}>
        <Path d={`M ${px(1)} ${py(0.5)} V ${CY}`} fill="none" stroke={MUTED} strokeWidth={1.4} strokeDasharray="5 5" />
        <Path d={`M ${px(-1)} ${py(-0.5)} V ${CY}`} fill="none" stroke={MUTED} strokeWidth={1.4} strokeDasharray="5 5" />
        <Circle cx={px(1)} cy={py(0.5)} r={5.5} fill={GREEN_DARK} />
        <Circle cx={px(-1)} cy={py(-0.5)} r={5.5} fill={GREEN_DARK} />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.9)}>
        <T x={849} y={166} size={12} fill={GREEN_DARK} weight={800} anchor="start">
          {t("peaks at ½  (x = 1)", "½ pe peak  (x = 1)")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.3)}>
        <T x={715} y={388} size={12} fill={GREEN_DARK} weight={800} anchor="end">
          {t("bottoms at −½  (x = −1)", "−½ pe bottom  (x = −1)")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.7)}>
        <T x={782} y={412} size={12.5} fill={RED} weight={800}>
          {t("trapped — the curve never leaves the band",
             "trapped — curve kabhi band se bahar nahin")}
        </T>
      </Fade>
    </Scene>
  );
}
