/**
 * M12Ch01 · Section 34 — "Pitfalls and pro-tips for domain and range"
 * Subtopic: Domain and Range of Real Functions  (closing section of the subtopic)
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * The voice lists four traps and then two shortcuts. A summary section is
 * exactly where a board degenerates into bullets, so every trap here is a
 * REAL figure: two number lines with a closed vs an open endpoint, three
 * constraint bars with the intersection solved off them, the actual
 * decreasing curve y = log½ t with the stretch 0 < t ≤ 1 read off it, and a
 * domain/codomain arrow diagram with the range marked inside the codomain.
 * Both shortcuts are plotted: the hyperbola with its horizontal asymptote
 * a/c punched out of the y-axis, and the sine wave inside its −1..1 band.
 *
 * Grid: four trap columns across the top (x 40–280, 296–536, 552–792,
 * 808–1044; headers y 116, figures y 140–270, captions y 292 / 316),
 * a divider at y 336, then the two shortcut panels across the bottom
 * (x 40–520 and x 556–1044, y 380–596).
 *
 * Beat map (8 segments, gates 0..7 — every beat used):
 *  0  "close domain & range with the traps"   title + underline + subtitle + rule
 *  1  "trap ①: root rule vs log rule"         two number lines — √ closed at 0,
 *                                             log open at 0, both rays green
 *  2  "trap ②: union instead of intersection" C₁ bar, C₂ bar, the overlap solved
 *                                             onto a third line + C₁∪C₂ crossed out
 *  3  "trap ③: forgetting the flip"           the curve y = log½ t plotted, the
 *                                             region log½ t ≥ 0 shaded, the stretch
 *                                             0 < t ≤ 1 marked open-then-closed
 *  4  "trap ④: codomain is not the range"     f : ℝ → ℝ as two bars with three
 *                                             arrows landing inside a green range
 *  5  "now the shortcuts"                     divider + heading
 *  6  "rational → ℝ minus a/c"                the hyperbola, VA and HA dashed,
 *                                             a/c punched out of the y-axis
 *  7  "sine/cosine → push the bound"          sin x inside its −1..1 band, the
 *                                             band pushed through "operations",
 *                                             inverting the function crossed out
 *
 * Visual vocabulary shared with Sections 35 and 36:
 *   axes INK with arrowheads · primary curve AMBER_DARK · secondary /
 *   asymptote BLUE · valid sets and results GREEN / GREEN_DARK · shaded
 *   region a single AMBER path at low opacity · traps and wrong forms RED.
 */

import React from "react";
import { Circle, Line, Path, Rect } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD, crossD,
  INK, MUTED, AMBER, AMBER_DARK, GREEN, GREEN_DARK, RED, CREAM, PAPER,
  Scene,
} from '@/components/scenes/kit';

const BLUE = "#0284c7";

/* ── trap ③ : y = log½ t on a frame with origin (600, 226) ───────────── */
const L3X = 600;
const L3Y = 226;
const L3SX = 52;
const L3SY = 25;
const l3x = (t: number) => L3X + L3SX * t;
/** y-value is log½ t = −log₂ t, so py = L3Y + L3SY·log₂ t */
const l3y = (t: number) => L3Y + L3SY * Math.log2(t);
function logHalfPts(t0: number, t1: number, n: number): string[] {
  const pts: string[] = [];
  for (let i = 0; i <= n; i++) {
    const t = t0 + ((t1 - t0) * i) / n;
    pts.push(`${l3x(t).toFixed(1)} ${l3y(t).toFixed(1)}`);
  }
  return pts;
}
const LOG_D = `M ${logHalfPts(0.2, 3.3, 46).join(" L ")}`;
const LOG_REGION_D =
  `M ${logHalfPts(0.2, 1, 22).join(" L ")} L ${l3x(0.2).toFixed(1)} ${L3Y} Z`;

/* ── shortcut ① : hyperbola with VA x = 360 and HA y = 470 ───────────── */
const HVA = 360;
const HHA = 470;
const HK = 900;
const hypY = (px: number) => HHA - HK / (px - HVA);
function hypPts(a: number, b: number, n: number): string[] {
  const pts: string[] = [];
  for (let i = 0; i <= n; i++) {
    const px = a + ((b - a) * i) / n;
    pts.push(`${px.toFixed(1)} ${hypY(px).toFixed(1)}`);
  }
  return pts;
}
const HYP_RIGHT_D = `M ${hypPts(372, 506, 34).join(" L ")}`;
const HYP_LEFT_D = `M ${hypPts(280, 352, 24).join(" L ")}`;

/* ── shortcut ② : one period of sin x, origin (600, 500), amp 40 ─────── */
function sinePts(n: number): string[] {
  const pts: string[] = [];
  for (let i = 0; i <= n; i++) {
    const px = 600 + (201 * i) / n;
    pts.push(`${px.toFixed(1)} ${(500 - 40 * Math.sin((px - 600) / 32)).toFixed(1)}`);
  }
  return pts;
}
const SINE_D = `M ${sinePts(60).join(" L ")}`;

export default function M12Ch01Sec34({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ═══════════ beat 0 — the framing ═══════════ */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={46} size={25} fill={RED} script>
          {t("Domain and range — traps, then shortcuts",
             "Domain aur range — traps, phir shortcuts")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.1)}
        d="M 316 62 C 470 58, 640 66, 764 60" stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 1.9)}>
        <T x={540} y={82} size={12.5} fill={MUTED} script>
          {t("the four mistakes that drain marks, and the two shortcuts that save time",
             "wo chaar galtiyan jo marks khaati hain, aur do shortcuts jo time bachate hain")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.8)} d="M 40 96 H 1044" stroke={MUTED} sw={1.2} dur={1} />

      {/* ═══════════ beat 1 — trap ①: root rule vs log rule ═══════════ */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={40} y={116} size={13} fill={RED} weight={800} anchor="start">
          {t("① root rule vs log rule", "① root rule vs log rule")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <T x={44} y={148} size={12.5} fill={INK} weight={800} anchor="start">
          {t("√(g)  ⇒  g ≥ 0", "√(g)  ⇒  g ≥ 0")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.5)} d={arrowD(60, 174, 254, 174)} stroke={INK} sw={2} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 2.1)} d="M 112 174 H 240" stroke={GREEN} sw={5} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 2.7)}>
        <Circle cx={112} cy={174} r={5.5} fill={GREEN_DARK} />
        <T x={112} y={194} size={11.5} fill={INK} weight={800}>0</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.6)}>
        <T x={44} y={220} size={12.5} fill={INK} weight={800} anchor="start">
          {t("log(g)  ⇒  g > 0", "log(g)  ⇒  g > 0")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 4.1)} d={arrowD(60, 246, 254, 246)} stroke={INK} sw={2} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 4.7)} d="M 118 246 H 240" stroke={GREEN} sw={5} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 5.3)}>
        <Circle cx={112} cy={246} r={5.5} fill={PAPER} stroke={GREEN_DARK} strokeWidth={2.4} />
        <T x={112} y={266} size={11.5} fill={INK} weight={800}>0</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 6.3)}>
        <T x={44} y={292} size={12} fill={INK} weight={700} anchor="start">
          {t("√ keeps 0 · log excludes 0", "√ zero rakhta hai · log nahin")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 7.6)}>
        <T x={44} y={316} size={12} fill={RED} weight={800} anchor="start">
          {t("mixing them shifts a boundary", "mix karne se boundary badalti hai")}
        </T>
      </Fade>

      {/* ═══════════ beat 2 — trap ②: union instead of intersection ═══════════ */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={300} y={116} size={13} fill={RED} weight={800} anchor="start">
          {t("② union instead of intersection", "② intersection ki jagah union")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={300} y={148} size={12} fill={MUTED} weight={700} anchor="start">
          {t("several constraints at once", "kai constraints ek saath")}
        </T>
      </Fade>
      {[180, 210, 244].map((y, i) => (
        <Draw key={`base${y}`} on={beat >= 2} delay={dl(2, 1.5 + i * 0.3)}
          d={`M 316 ${y} H 520`} stroke={MUTED} sw={1.4} dur={0.4} />
      ))}
      <Draw on={beat >= 2} delay={dl(2, 2.4)} d="M 344 180 H 462" stroke={GREEN} sw={5} dur={0.5} />
      <Draw on={beat >= 2} delay={dl(2, 3)} d="M 396 210 H 512" stroke={GREEN} sw={5} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 3.5)}>
        <Line x1={396} y1={172} x2={396} y2={252} stroke={MUTED} strokeWidth={1.2} strokeDasharray="5 5" />
        <Line x1={462} y1={172} x2={462} y2={252} stroke={MUTED} strokeWidth={1.2} strokeDasharray="5 5" />
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 4)} d="M 396 244 H 462" stroke={GREEN_DARK} sw={6} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 4.6)}>
        <T x={310} y={184} size={11.5} fill={INK} weight={800} anchor="end">C₁</T>
        <T x={310} y={214} size={11.5} fill={INK} weight={800} anchor="end">C₂</T>
        <T x={310} y={249} size={13} fill={GREEN_DARK} weight={900} anchor="end">∩</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 5.6)}>
        <T x={300} y={292} size={12} fill={GREEN_DARK} weight={800} anchor="start">
          {t("all must hold together ⇒ intersect", "sab saath hold karein ⇒ intersect")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 7)}>
        <T x={300} y={316} size={13} fill={RED} weight={700} anchor="start">C₁ ∪ C₂</T>
        <T x={364} y={316} size={12} fill={RED} weight={800} anchor="start">
          {t("never union", "kabhi union nahin")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 7.6)} d={crossD(298, 305, 52, 15)} stroke={RED} sw={2} dur={0.3} />

      {/* ═══════════ beat 3 — trap ③: the flip for base below one ═══════════ */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={556} y={116} size={13} fill={RED} weight={800} anchor="start">
          {t("③ base ½ flips the direction", "③ base ½ par direction ulti")}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 0.8)} d={arrowD(580, L3Y, 780, L3Y)} stroke={INK} sw={2.2} dur={0.6} />
      <Draw on={beat >= 3} delay={dl(3, 1.2)} d={arrowD(L3X, 272, L3X, 166)} stroke={INK} sw={2.2} dur={0.6} />
      <Fade on={beat >= 3} delay={dl(3, 1.7)}>
        <T x={786} y={231} size={12} fill={INK} weight={800} anchor="start">t</T>
        <T x={592} y={172} size={12} fill={INK} weight={800} anchor="end">y</T>
        <T x={592} y={244} size={11.5} fill={INK} weight={800} anchor="end">0</T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 2)} d={LOG_D} stroke={AMBER_DARK} sw={2.8} dur={1.2} />
      <Fade on={beat >= 3} delay={dl(3, 3.2)}>
        <T x={700} y={190} size={12} fill={AMBER_DARK} weight={800} anchor="start">
          {t("y = log½ t", "y = log½ t")}
        </T>
      </Fade>
      <Path
        d={LOG_REGION_D}
        fill={AMBER}
        stroke="none"
        opacity={beat >= 3 ? 0.3 : 0}
      />
      <Draw on={beat >= 3} delay={dl(3, 4.4)} d={`M 604 ${L3Y} H ${l3x(1)}`} stroke={GREEN} sw={5} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 5)}>
        <Circle cx={L3X} cy={L3Y} r={5} fill={PAPER} stroke={GREEN_DARK} strokeWidth={2.4} />
        <Circle cx={l3x(1)} cy={L3Y} r={5} fill={GREEN_DARK} />
        <T x={648} y={246} size={11.5} fill={GREEN_DARK} weight={800} anchor="end">1</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 6.2)}>
        <T x={556} y={292} size={12} fill={GREEN_DARK} weight={800} anchor="start">
          {t("log½ t ≥ 0  ⇒  0 < t ≤ 1", "log½ t ≥ 0  ⇒  0 < t ≤ 1")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 7.6)}>
        <T x={556} y={316} size={12} fill={RED} weight={800} anchor="start">
          {t("base below 1 ⇒ direction reverses", "base 1 se neeche ⇒ direction ulti")}
        </T>
      </Fade>

      {/* ═══════════ beat 4 — trap ④: codomain is not the range ═══════════ */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={812} y={116} size={13} fill={RED} weight={800} anchor="start">
          {t("④ codomain is not the range", "④ codomain range nahin hai")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={812} y={148} size={13} fill={INK} weight={800} anchor="start">
          {t("f : ℝ → ℝ", "f : ℝ → ℝ")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1.5)} d="M 870 160 V 252" stroke={INK} sw={2.6} dur={0.6} />
      <Draw on={beat >= 4} delay={dl(4, 1.9)} d="M 1000 160 V 252" stroke={INK} sw={2.6} dur={0.6} />
      <Draw on={beat >= 4} delay={dl(4, 2.5)} d={arrowD(876, 176, 994, 196)} stroke={MUTED} sw={1.5} dur={0.4} />
      <Draw on={beat >= 4} delay={dl(4, 2.8)} d={arrowD(876, 206, 994, 210)} stroke={MUTED} sw={1.5} dur={0.4} />
      <Draw on={beat >= 4} delay={dl(4, 3.1)} d={arrowD(876, 240, 994, 222)} stroke={MUTED} sw={1.5} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 3.7)}>
        <Line x1={1000} y1={160} x2={1000} y2={186} stroke={RED} strokeWidth={3.4} strokeDasharray="4 4" />
        <Line x1={1000} y1={232} x2={1000} y2={252} stroke={RED} strokeWidth={3.4} strokeDasharray="4 4" />
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 4.2)} d="M 1000 190 V 228" stroke={GREEN} sw={6} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 4.8)}>
        <T x={1014} y={213} size={11} fill={GREEN_DARK} weight={800} anchor="start">
          {t("range", "range")}
        </T>
        <T x={870} y={270} size={12} fill={MUTED} weight={700}>
          {t("domain ℝ", "domain ℝ")}
        </T>
        <T x={1000} y={270} size={12} fill={MUTED} weight={700}>
          {t("codomain ℝ", "codomain ℝ")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 6)}>
        <T x={812} y={292} size={12} fill={INK} weight={700} anchor="start">
          {t("codomain = declared target", "codomain = jo target declare kiya")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 7.4)}>
        <T x={812} y={316} size={12} fill={GREEN_DARK} weight={800} anchor="start">
          {t("range = the actual outputs", "range = actual outputs jo aate hain")}
        </T>
      </Fade>

      {/* ═══════════ beat 5 — the shortcuts open ═══════════ */}
      <Draw on={beat >= 5} delay={dl(5, 0.1)} d="M 40 336 H 1044" stroke={MUTED} sw={1.3} dur={0.9} />
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={540} y={362} size={20} fill={GREEN_DARK} script>
          {t("Now the shortcuts that make these instant",
             "Ab wo shortcuts jo inhe instant bana dete hain")}
        </T>
      </Fade>

      {/* ═══════════ beat 6 — shortcut ①: the rational function ═══════════ */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={44} y={390} size={13.5} fill={RED} weight={800} anchor="start">
          {t("SHORTCUT ① — rational functions", "SHORTCUT ① — rational functions")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={44} y={434} size={15} fill={INK} weight={800} anchor="start">f (x) =</T>
        <T x={108} y={419} size={14} fill={INK} weight={800} anchor="start">a x + b</T>
        <T x={108} y={450} size={14} fill={INK} weight={800} anchor="start">c x + d</T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.6)} d="M 104 430 H 165" stroke={INK} sw={1.6} dur={0.3} />
      <Draw on={beat >= 6} delay={dl(6, 2)} d={arrowD(276, 500, 512, 500)} stroke={INK} sw={2.2} dur={0.6} />
      <Draw on={beat >= 6} delay={dl(6, 2.4)} d={arrowD(300, 590, 300, 412)} stroke={INK} sw={2.2} dur={0.6} />
      <Fade on={beat >= 6} delay={dl(6, 2.9)}>
        <T x={516} y={505} size={11.5} fill={INK} weight={800} anchor="start">x</T>
        <T x={292} y={418} size={11.5} fill={INK} weight={800} anchor="end">y</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 3.2)}>
        <Line x1={360} y1={418} x2={360} y2={588} stroke={MUTED} strokeWidth={1.4} strokeDasharray="6 5" />
        <Line x1={280} y1={470} x2={510} y2={470} stroke={BLUE} strokeWidth={1.6} strokeDasharray="6 5" />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 3.7)}>
        <T x={500} y={440} size={12} fill={BLUE} weight={800} anchor="end">y = a/c</T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 4.1)} d={HYP_RIGHT_D} stroke={AMBER_DARK} sw={2.8} dur={1} />
      <Draw on={beat >= 6} delay={dl(6, 4.9)} d={HYP_LEFT_D} stroke={AMBER_DARK} sw={2.8} dur={1} />
      <Draw on={beat >= 6} delay={dl(6, 5.9)} d="M 300 464 V 424" stroke={GREEN} sw={4} dur={0.4} />
      <Draw on={beat >= 6} delay={dl(6, 6.2)} d="M 300 476 V 586" stroke={GREEN} sw={4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 6.8)}>
        <Circle cx={300} cy={470} r={5} fill={PAPER} stroke={RED} strokeWidth={2.4} />
        <T x={288} y={456} size={12} fill={RED} weight={800} anchor="end">a/c</T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 7.2)} d={arrowD(290, 460, 296, 466)} stroke={RED} sw={1.6} dur={0.2} />
      <Fade on={beat >= 6} delay={dl(6, 7.8)}>
        <T x={44} y={486} size={15} fill={GREEN_DARK} weight={800} anchor="start">
          {t("range = ℝ − { a/c }", "range = ℝ − { a/c }")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 8.3)}>
        <T x={44} y={512} size={12} fill={MUTED} weight={700} anchor="start">
          {t("immediately — no algebra", "turant — koi algebra nahin")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 8.7)}>
        <T x={44} y={540} size={12} fill={INK} weight={700} anchor="start">
          {t("the missing value is exactly", "missing value bilkul wahi")}
        </T>
        <T x={44} y={564} size={12} fill={INK} weight={700} anchor="start">
          {t("the horizontal asymptote a/c", "horizontal asymptote a/c hai")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 9.0)}>
        <T x={392} y={572} size={11.5} fill={MUTED} weight={700} anchor="start">
          {t("a/c is never attained", "a/c kabhi attain nahin hota")}
        </T>
      </Fade>

      {/* ═══════════ beat 7 — shortcut ②: push the sine bound ═══════════ */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={560} y={390} size={13.5} fill={RED} weight={800} anchor="start">
          {t("SHORTCUT ② — sine and cosine", "SHORTCUT ② — sine and cosine")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.7)}>
        <T x={560} y={420} size={14} fill={GREEN_DARK} weight={800} anchor="start">
          {t("−1 ≤ sin x ≤ 1  ·  −1 ≤ cos x ≤ 1", "−1 ≤ sin x ≤ 1  ·  −1 ≤ cos x ≤ 1")}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 1.1)} d={arrowD(576, 500, 812, 500)} stroke={INK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 7} delay={dl(7, 1.4)} d={arrowD(600, 562, 600, 440)} stroke={INK} sw={2.2} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 1.7)}>
        <T x={816} y={505} size={11.5} fill={INK} weight={800} anchor="start">x</T>
      </Fade>
      <Rect
        x={604} y={460} width={204} height={80}
        fill={AMBER} stroke="none"
        opacity={beat >= 7 ? 0.18 : 0}
      />
      <Fade on={beat >= 7} delay={dl(7, 2.2)}>
        <Line x1={604} y1={460} x2={808} y2={460} stroke={GREEN_DARK} strokeWidth={1.7} strokeDasharray="6 5" />
        <Line x1={604} y1={540} x2={808} y2={540} stroke={GREEN_DARK} strokeWidth={1.7} strokeDasharray="6 5" />
        <T x={592} y={464} size={12} fill={GREEN_DARK} weight={800} anchor="end">1</T>
        <T x={592} y={544} size={12} fill={GREEN_DARK} weight={800} anchor="end">−1</T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 2.6)} d={SINE_D} stroke={AMBER_DARK} sw={2.8} dur={0.9} />
      <Fade on={beat >= 7} delay={dl(7, 3.5)}>
        <T x={690} y={448} size={12} fill={AMBER_DARK} weight={800} anchor="start">sin x</T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 3.8)} d={arrowD(822, 472, 870, 472)} stroke={GREEN_DARK} sw={2} dur={0.3} />
      <Fade on={beat >= 7} delay={dl(7, 4.1)}>
        <Chip x={876} y={452} w={148} h={40} fill={CREAM} stroke={AMBER_DARK}
          textFill={AMBER_DARK} size={14} script={false}>
          {t("operations", "operations")}
        </Chip>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 4.4)} d={arrowD(950, 498, 950, 524)} stroke={GREEN_DARK} sw={2} dur={0.3} />
      <Fade on={beat >= 7} delay={dl(7, 4.6)}>
        <T x={950} y={546} size={12.5} fill={GREEN_DARK} weight={800}>
          {t("the image band, directly", "seedha image band milta hai")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 4.8)}>
        <T x={950} y={574} size={11.5} fill={RED} weight={700}>
          {t("invert the whole function", "poora function invert karna")}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 4.9)} d={crossD(863, 563, 168, 15)} stroke={RED} sw={2} dur={0.3} />
      <Fade on={beat >= 7} delay={dl(7, 5.0)}>
        <T x={700} y={578} size={12} fill={INK} weight={700}>
          {t("push the bound through the operations", "bound ko operations se push karo")}
        </T>
      </Fade>
    </Scene>
  );
}
