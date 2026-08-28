/**
 * M12Ch01 · Section 33 — "JEE Advanced: a nested domain with a log flip"
 * Subtopic: Domain and Range of Real Functions
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * f(x) = √( log₁/₂ ( (x − 2)/(x + 1) ) ).  Two constraints:
 *   ① the log's argument is positive     → (x − 2)/(x + 1) > 0 → x < −1 or x > 2
 *   ② the root's content is ≥ 0          → log₁/₂ t ≥ 0, and because the base
 *                                          ½ is below 1 this FLIPS to t ≤ 1
 *                                        → (x − 2)/(x + 1) ≤ 1
 *                                        → −3/(x + 1) ≤ 0 → x > −1
 *   ① ∩ ② = x > 2, so the domain is (2, ∞).
 *
 * Every one of those is a picture on this board: a sign line on x for the
 * fraction, the actual decreasing graph of y = log₁/₂ t through (1, 0) that
 * makes the flip visible instead of asserted, a ray for x > −1, and a
 * three-bar intersection diagram where the x < −1 stretch is struck out.
 *
 * Grid
 *   title band     y 30..96    full width
 *   row 1          y 100..290  left x 40..500 (beats 1, 2) · right x 530..1044 (beat 3)
 *   rule           y 294
 *   row 2          y 300..470  left x 40..500 (beats 4, 5) · right x 530..1044 (beat 5 graph)
 *   rule           y 478
 *   row 3          y 484..596  left x 40..470 (beat 6) · right x 504..1044 (beat 7)
 *
 * Beat map (8 segments, gates 0..7 — every beat used):
 *  0  "a log inside a square root"        title + underline + subtitle + rule
 *  1  "f(x) = √(log₁/₂((x−2)/(x+1)))"     the radical drawn as a real path over
 *                                          a real fraction
 *  2  "① the log's argument > 0"          the constraint stated
 *  3  "positive when x < −1 or x > 2"     a sign line on x with open circles at
 *                                          −1 and 2 and the two green stretches
 *  4  "② the root's content ≥ 0"          log₁/₂((x−2)/(x+1)) ≥ 0
 *  5  "base ½ < 1, so the flip"           the graph of y = log₁/₂ t: decreasing
 *                                          through (1, 0), with 0 < t ≤ 1 marked
 *                                          on the axis and t > 1 giving log < 0
 *  6  "so the fraction ≤ 1 ⇒ x > −1"      −3/(x + 1) ≤ 0 and its ray
 *  7  "intersect: only x > 2 survives"    ① and ② as bars, the x < −1 piece
 *                                          struck out, the surviving ray, chip
 *
 * Visual vocabulary (shared with Sections 31 and 32 of this subtopic):
 *   axes INK with arrowheads · the primary function AMBER_DARK · surviving
 *   sets GREEN / GREEN_DARK · the second constraint BLUE · every result
 *   GREEN_DARK · headings and the struck-out set RED · asides MUTED.
 */

import React from "react";
import { Circle, Path } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD, crossD,
  INK, MUTED, AMBER_DARK, GREEN, GREEN_DARK, RED, CREAM, PAPER,
  Scene,
} from '@/components/scenes/kit';

const BLUE = "#0284c7";

/* ---------- beat 5: the graph of y = log base ½ of t ---------- */
const GX0 = 600;   // t = 0
const GST = 100;   // px per unit t
const GY0 = 404;   // y = 0
const GSY = 28;    // px per unit y
const gx = (t: number) => GX0 + GST * t;
const gy = (v: number) => GY0 - GSY * v;
const logHalf = (t: number) => -Math.log2(t);

const LOG_D = (() => {
  const pts: string[] = [];
  const t0 = 0.11;
  const t1 = 4.0;
  for (let i = 0; i <= 90; i++) {
    // sample geometrically so the steep left end stays smooth
    const t = t0 * Math.pow(t1 / t0, i / 90);
    pts.push(`${gx(t).toFixed(1)} ${gy(logHalf(t)).toFixed(1)}`);
  }
  return `M ${pts.join(" L ")}`;
})();

export default function M12Ch01Sec33({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ═══════════ beat 0 — the framing ═══════════ */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={50} size={24} fill={RED} script>
          {t("A nested domain with a log flip", "Nested domain, ek log flip ke saath")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.1)}
        d="M 344 64 C 470 60, 620 68, 736 62" stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 1.9)}>
        <T x={540} y={84} size={12.5} fill={MUTED} script>
          {t("JEE Advanced — a logarithm layered inside a square root",
             "JEE Advanced — square root ke andar ek logarithm")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.7)} d="M 40 96 H 1044" stroke={MUTED} sw={1.2} dur={1} />

      {/* ═══════════ beat 1 — the function, radical and all ═══════════ */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={44} y={118} size={13.5} fill={RED} weight={800} anchor="start">
          {t("the function", "function")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={44} y={172} size={20} fill={INK} weight={800} anchor="start">f(x) =</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.3)}
        d="M 112 168 L 122 182 L 133 138 L 290 138" stroke={INK} sw={2.4} dur={0.8} />
      <Fade on={beat >= 1} delay={dl(1, 2.2)}>
        <T x={140} y={176} size={16} fill={AMBER_DARK} weight={900} anchor="start">log</T>
        <T x={170} y={182} size={12} fill={AMBER_DARK} weight={900} anchor="start">½</T>
        <T x={182} y={178} size={20} fill={INK} weight={700} anchor="start">(</T>
        <T x={262} y={178} size={20} fill={INK} weight={700} anchor="start">)</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3)}>
        <T x={232} y={164} size={14} fill={INK} weight={800}>x − 2</T>
        <T x={232} y={192} size={14} fill={INK} weight={800}>x + 1</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 3.4)} d="M 208 174 H 256" stroke={INK} sw={2} dur={0.3} />

      {/* ═══════════ beat 2 — constraint ① ═══════════ */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={44} y={222} size={13.5} fill={RED} weight={800} anchor="start">
          {t("① the inner log", "① andar ka log")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.2)}>
        <T x={44} y={248} size={13} fill={INK} weight={700} anchor="start">
          {t("its argument must be positive:", "uska argument positive hona chahiye:")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.8)}>
        <T x={44} y={274} size={16} fill={GREEN_DARK} weight={900} anchor="start">(x − 2) / (x + 1) &gt; 0</T>
      </Fade>

      {/* ═══════════ beat 3 — the sign line on x ═══════════ */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={534} y={118} size={13.5} fill={RED} weight={800} anchor="start">
          {t("where is that fraction positive?", "wo fraction kahan positive hai?")}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 0.9)} d={arrowD(790, 190, 1020, 190)} stroke={INK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 3} delay={dl(3, 1.3)} d={arrowD(790, 190, 560, 190)} stroke={INK} sw={2.2} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 1.9)}>
        <T x={630} y={172} size={17} fill={GREEN_DARK} weight={900}>+</T>
        <T x={790} y={172} size={17} fill={RED} weight={900}>−</T>
        <T x={950} y={172} size={17} fill={GREEN_DARK} weight={900}>+</T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 2.6)} d="M 560 190 H 694" stroke={GREEN} sw={6} dur={0.5} />
      <Draw on={beat >= 3} delay={dl(3, 3)} d="M 886 190 H 1020" stroke={GREEN} sw={6} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 3.5)}>
        <Circle cx={700} cy={190} r={5.5} fill={PAPER} stroke={GREEN_DARK} strokeWidth={2.2} />
        <Circle cx={880} cy={190} r={5.5} fill={PAPER} stroke={GREEN_DARK} strokeWidth={2.2} />
        <T x={700} y={214} size={13} fill={INK} weight={800}>−1</T>
        <T x={880} y={214} size={13} fill={INK} weight={800}>2</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 5)}>
        <T x={534} y={248} size={16} fill={GREEN_DARK} weight={900} anchor="start">
          {t("x < −1   or   x > 2", "x < −1   ya   x > 2")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 7.6)}>
        <T x={534} y={276} size={12.5} fill={MUTED} weight={700} anchor="start">
          {t("hold this set — call it ①", "is set ko pakdo — ise ① kaho")}
        </T>
      </Fade>

      {/* ═══════════ beat 4 — constraint ② ═══════════ */}
      <Draw on={beat >= 4} delay={dl(4, 0.1)} d="M 40 294 H 1044" stroke={MUTED} sw={1.2} dur={0.9} />
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={44} y={322} size={13.5} fill={RED} weight={800} anchor="start">
          {t("② the square root", "② square root")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.6)}>
        <T x={44} y={350} size={13} fill={INK} weight={700} anchor="start">
          {t("its content must be ≥ 0:", "uska content ≥ 0 hona chahiye:")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 3.4)}>
        <T x={44} y={380} size={15} fill={AMBER_DARK} weight={900} anchor="start">log</T>
        <T x={71} y={386} size={11} fill={AMBER_DARK} weight={900} anchor="start">½</T>
        <T x={84} y={380} size={15} fill={GREEN_DARK} weight={900} anchor="start">( (x − 2)/(x + 1) ) ≥ 0</T>
      </Fade>

      {/* ═══════════ beat 5 — the flip, drawn ═══════════ */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d={arrowD(576, GY0, 1012, GY0)} stroke={INK} sw={2.2} dur={0.7} />
      <Draw on={beat >= 5} delay={dl(5, 0.8)} d={arrowD(GX0, 466, GX0, 312)} stroke={INK} sw={2.2} dur={0.6} />
      <Fade on={beat >= 5} delay={dl(5, 1.3)}>
        <T x={1018} y={409} size={12.5} fill={INK} weight={800} anchor="start">t</T>
        <T x={590} y={322} size={12.5} fill={INK} weight={800} anchor="end">y</T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 1.6)} d={LOG_D} stroke={AMBER_DARK} sw={2.8} dur={1.5} />
      <Fade on={beat >= 5} delay={dl(5, 3)}>
        <T x={1012} y={336} size={12.5} fill={AMBER_DARK} weight={800} anchor="end">y = log½ t</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 3.6)}>
        <Path d={`M ${gx(1)} ${GY0} V 326`} fill="none" stroke={MUTED} strokeWidth={1.5} strokeDasharray="5 5" />
        <Circle cx={gx(1)} cy={GY0} r={5.5} fill={GREEN_DARK} />
        <T x={gx(1)} y={314} size={12} fill={INK} weight={800}>t = 1</T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 4.4)} d={`M 611 ${GY0} H ${gx(1)}`} stroke={GREEN} sw={6} dur={0.5} />
      <Draw on={beat >= 5} delay={dl(5, 4.9)} d={`M ${gx(1)} ${GY0} H 1000`} stroke={RED} sw={4} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 5.5)}>
        <T x={625} y={334} size={12} fill={GREEN_DARK} weight={800} anchor="start">log½ t ≥ 0</T>
        <T x={655} y={428} size={12} fill={GREEN_DARK} weight={800}>0 &lt; t ≤ 1</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 6.4)}>
        <T x={880} y={384} size={12} fill={RED} weight={800}>
          {t("t > 1 → log is negative", "t > 1 → log negative")}
        </T>
      </Fade>
      {/* the flip, said in words, next to the picture that proves it */}
      <Fade on={beat >= 5} delay={dl(5, 7.4)}>
        <T x={44} y={412} size={12.5} fill={INK} weight={700} anchor="start">
          {t("the base ½ is BELOW 1, so the log falls",
             "base ½, 1 se NEECHE hai, to log girta hai")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 9.4)}>
        <T x={44} y={438} size={14} fill={GREEN_DARK} weight={900} anchor="start">log½ t ≥ 0  ⇔  t ≤ 1</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 11.4)}>
        <T x={44} y={464} size={13} fill={RED} weight={800} anchor="start">
          {t("the inequality FLIPS direction", "inequality ki direction FLIP ho jaati hai")}
        </T>
      </Fade>

      {/* ═══════════ beat 6 — rearrange the flipped inequality ═══════════ */}
      <Draw on={beat >= 6} delay={dl(6, 0.1)} d="M 40 478 H 1044" stroke={MUTED} sw={1.2} dur={0.9} />
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={44} y={500} size={13.5} fill={RED} weight={800} anchor="start">
          {t("rearrange the flipped inequality", "flip hui inequality rearrange karo")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.8)}>
        <T x={44} y={528} size={14} fill={INK} weight={800} anchor="start">
          (x − 2)/(x + 1) ≤ 1   ⇒   −3/(x + 1) ≤ 0
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 5)}>
        <T x={44} y={556} size={15} fill={GREEN_DARK} weight={900} anchor="start">
          {t("holds when  x > −1", "tab holds jab  x > −1")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 6.4)} d={arrowD(196, 580, 420, 580)} stroke={GREEN} sw={3} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 7)}>
        <Circle cx={190} cy={580} r={5.5} fill={PAPER} stroke={GREEN_DARK} strokeWidth={2.2} />
        <T x={178} y={585} size={12} fill={INK} weight={800} anchor="end">−1</T>
        <T x={432} y={585} size={12.5} fill={GREEN_DARK} weight={800} anchor="start">x &gt; −1</T>
      </Fade>

      {/* ═══════════ beat 7 — intersect the two constraints ═══════════ */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={504} y={496} size={13.5} fill={RED} weight={800} anchor="start">
          {t("intersect: only x > 2 survives", "intersect: sirf x > 2 bachta hai")}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 1)} d="M 700 512 H 990" stroke={BLUE} sw={5} dur={0.5} />
      <Draw on={beat >= 7} delay={dl(7, 1.5)} d="M 560 534 H 700 M 830 534 H 990" stroke={AMBER_DARK} sw={5} dur={0.6} />
      <Fade on={beat >= 7} delay={dl(7, 2.1)}>
        <T x={552} y={517} size={12.5} fill={BLUE} weight={900} anchor="end">②</T>
        <T x={552} y={539} size={12.5} fill={AMBER_DARK} weight={900} anchor="end">①</T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 2.8)} d={crossD(562, 530, 136, 8)} stroke={RED} sw={2.4} dur={0.4} />
      <Draw on={beat >= 7} delay={dl(7, 3.4)} d={arrowD(775, 548, 990, 548)} stroke={INK} sw={2.2} dur={0.4} />
      <Draw on={beat >= 7} delay={dl(7, 3.7)} d={arrowD(775, 548, 560, 548)} stroke={INK} sw={2.2} dur={0.4} />
      <Draw on={beat >= 7} delay={dl(7, 4.2)} d="M 836 548 H 985" stroke={GREEN} sw={6} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 4.8)}>
        <Circle cx={830} cy={548} r={5.5} fill={PAPER} stroke={GREEN_DARK} strokeWidth={2.2} />
        <T x={700} y={572} size={12.5} fill={INK} weight={800}>−1</T>
        <T x={830} y={572} size={12.5} fill={INK} weight={800}>2</T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 5.6)}>
        <Chip x={850} y={558} w={190} h={36} fill={CREAM} stroke={GREEN_DARK}
          textFill={GREEN_DARK} size={15} script={false}>
          Domain = (2, ∞)
        </Chip>
      </Fade>
    </Scene>
  );
}
