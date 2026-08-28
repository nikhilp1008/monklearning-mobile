/**
 * M12Ch01 · Section 44 — "Classifying by symmetry"
 * Subtopic: Even, Odd, and Periodic Functions
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * The voice runs the substitution test on three named functions and then
 * a four-option speed question. Each of the three functions is actually
 * PLOTTED here on its own frame, together with its reflection f(−x) drawn
 * as the geometric mirror of the plotted path about the y-axis — so the
 * verdict is something you can see, not just read:
 *
 *   x³ − x        the mirror is the curve turned upside down  →  odd
 *   x² + cos x    the mirror lands exactly on the curve       →  even
 *   x + x²        the mirror is a different curve altogether  →  neither
 *
 * The speed question is a real four-box row: the trap option is ringed in
 * red, the two obvious odd ones are crossed out, and the survivor is ringed
 * in green.
 *
 * Grid:
 *   header      y  30.. 96   title, underline, subtitle, full-width rule
 *   row 1       y 104..362   three plot panels: 40–348 | 372–700 | 724–1044
 *                            (heading 122, plot 146–288, substitution 316,
 *                             verdict chip 330–362)
 *   row 2       y 380..550   the speed question: divider, heading, four boxes
 *                            418–470, then the two verdict columns at y 500+
 *   row 3       y 562..596   the polynomial reflex
 *
 * Beat map (8 segments, gates 0..7 — every beat used):
 *  0  "classification is a substitution"     title + underline + subtitle + rule
 *  1  "f = x³ − x is odd"                    frame 1: axes, x³ − x, its mirror,
 *                                            the 180°-rotation pair, verdict chip
 *  2  "g = x² + cos x is even"               frame 2: axes, the mirror drawn as a
 *                                            thick blue halo, x² + cos x on top of
 *                                            it, the equal-height pair, chip
 *  3  "h = x + x² is neither"                frame 3: axes, both curves, the gap
 *                                            between them at one x marked ≠, chip
 *  4  "the speed question"                   divider + heading + the four options
 *  5  "careful with x · |x|"                 red ring on that option, why it is odd,
 *                                            then the cross that rules it out
 *  6  "sin x odd, x³ odd — so cos x + x²"    crosses on those two, green ring on
 *                                            the survivor, the reason
 *  7  "read polynomials straight off"        divider + the two power rules, ruled
 *
 * Visual vocabulary (shared with Sections 43 and 45):
 *   AMBER_DARK  the given function     BLUE  the reflection f(−x)
 *   GREEN_DARK  EVEN and results       VIOLET  ODD
 *   RED         headings, the trap, "neither"     axes INK.
 */

import React from "react";
import { Circle, Line, Rect } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD, ringD, crossD,
  INK, MUTED, AMBER_DARK, GREEN_DARK, RED, CREAM, PAPER,
  Scene,
} from '@/components/scenes/kit';

const BLUE = "#0284c7";
const VIOLET = "#7C3AED";

/* ------------------------------------------------------------------ */
/* plot helpers — every arrow tip and dot below comes from these       */
/* ------------------------------------------------------------------ */

function sampleD(
  f: (x: number) => number, x0: number, x1: number,
  px: (x: number) => number, py: (y: number) => number, n = 96
): string {
  const pts: string[] = [];
  for (let i = 0; i <= n; i++) {
    const x = x0 + ((x1 - x0) * i) / n;
    pts.push(`${px(x).toFixed(1)} ${py(f(x)).toFixed(1)}`);
  }
  return `M ${pts.join(" L ")}`;
}

/** the plotted path reflected about the vertical line x = cx (i.e. y = f(−x)) */
function mirrorD(
  f: (x: number) => number, x0: number, x1: number, cx: number,
  px: (x: number) => number, py: (y: number) => number, n = 96
): string {
  const pts: string[] = [];
  for (let i = 0; i <= n; i++) {
    const x = x0 + ((x1 - x0) * i) / n;
    pts.push(`${(2 * cx - px(x)).toFixed(1)} ${py(f(x)).toFixed(1)}`);
  }
  return `M ${pts.join(" L ")}`;
}

/* ---- frame 1 · f(x) = x³ − x ---- */
const O1X = 194, O1Y = 218;
const p1x = (x: number) => O1X + 46 * x;
const p1y = (y: number) => O1Y - 22 * y;
const f1 = (x: number) => x * x * x - x;
const F1_D = sampleD(f1, -1.55, 1.55, p1x, p1y);
const F1_MIR_D = mirrorD(f1, -1.55, 1.55, O1X, p1x, p1y);
const F1_AX = 1.3;

/* ---- frame 2 · g(x) = x² + cos x ---- */
const O2X = 536, O2Y = 276;
const p2x = (x: number) => O2X + 38 * x;
const p2y = (y: number) => O2Y - 22 * y;
const f2 = (x: number) => x * x + Math.cos(x);
const F2_D = sampleD(f2, -2.45, 2.45, p2x, p2y);
const F2_MIR_D = mirrorD(f2, -2.45, 2.45, O2X, p2x, p2y);
const F2_AX = 1.8;

/* ---- frame 3 · h(x) = x + x² ---- */
const O3X = 884, O3Y = 262;
const p3x = (x: number) => O3X + 42 * x;
const p3y = (y: number) => O3Y - 26 * y;
const f3 = (x: number) => x + x * x;
const F3_D = sampleD(f3, -2.1, 1.5, p3x, p3y);
const F3_MIR_D = mirrorD(f3, -2.1, 1.5, O3X, p3x, p3y);
const F3_AX = 1;

/* ---- the four speed-question boxes ---- */
const OPTS: [number, string][] = [
  [40, "sin x"],
  [288, "x · |x|"],
  [536, "cos x + x²"],
  [784, "x³"],
];

export default function M12Ch01Sec44({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ═══════════ beat 0 — the method ═══════════ */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={46} size={25} fill={RED} script>
          {t("Classify by symmetry — substitute −x",
             "Symmetry se classify — −x rakh do")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.2)}
        d="M 330 62 C 470 58, 640 66, 752 60" stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 2)}>
        <T x={540} y={82} size={12.5} fill={MUTED} script>
          {t("compute f(−x), then compare it with f(x) and with − f(x)",
             "f(−x) nikalo, phir use f(x) aur − f(x) se compare karo")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.8)} d="M 40 96 H 1044" stroke={MUTED} sw={1.2} dur={1} />

      {/* ═══════════ beat 1 — f(x) = x³ − x is odd ═══════════ */}
      <Fade on={beat >= 1} delay={dl(1, 0.15)}>
        <T x={40} y={122} size={14} fill={RED} weight={800} anchor="start">①   f(x) = x³ − x</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.6)} d={arrowD(110, O1Y, 286, O1Y)} stroke={INK} sw={1.8} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 0.8)} d={arrowD(O1X, 286, O1X, 146)} stroke={INK} sw={1.8} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 1.2)} d={F1_D} stroke={AMBER_DARK} sw={2.8} dur={1.1} />
      <Draw on={beat >= 1} delay={dl(1, 2.4)} d={F1_MIR_D} stroke={BLUE} sw={2.4} dur={1.1} />
      <Fade on={beat >= 1} delay={dl(1, 3.5)}>
        <T x={272} y={168} size={11.5} fill={AMBER_DARK} weight={900} anchor="start">f(x)</T>
        <T x={116} y={168} size={11.5} fill={BLUE} weight={900} anchor="end">f(−x)</T>
      </Fade>
      <Line
        x1={p1x(-F1_AX)} y1={p1y(f1(-F1_AX))} x2={p1x(F1_AX)} y2={p1y(f1(F1_AX))}
        stroke={VIOLET} strokeWidth={1.5} strokeDasharray="5 4"
        opacity={beat >= 1 ? 1 : 0}
      />
      <Fade on={beat >= 1} delay={dl(1, 4.3)}>
        <Circle cx={p1x(F1_AX)} cy={p1y(f1(F1_AX))} r={3.8} fill={VIOLET} />
        <Circle cx={p1x(-F1_AX)} cy={p1y(f1(-F1_AX))} r={3.8} fill={VIOLET} />
        <Circle cx={O1X} cy={O1Y} r={3.4} fill={INK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 4.8)}>
        <T x={40} y={316} size={13.5} fill={INK} weight={800} anchor="start">
          f(−x) = −x³ + x = − f(x)
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 5.4)}>
        <Chip x={40} y={330} w={140} h={32} fill={CREAM} stroke={VIOLET}
          textFill={VIOLET} size={16} script={false}>
          {t("f is ODD", "f ODD hai")}
        </Chip>
      </Fade>

      {/* ═══════════ beat 2 — g(x) = x² + cos x is even ═══════════ */}
      <Fade on={beat >= 2} delay={dl(2, 0.15)}>
        <T x={372} y={122} size={14} fill={RED} weight={800} anchor="start">②   g(x) = x² + cos x</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.6)} d={arrowD(432, O2Y, 644, O2Y)} stroke={INK} sw={1.8} dur={0.5} />
      <Draw on={beat >= 2} delay={dl(2, 0.8)} d={arrowD(O2X, 280, O2X, 146)} stroke={INK} sw={1.8} dur={0.5} />
      <Draw on={beat >= 2} delay={dl(2, 1.2)} d={F2_MIR_D} stroke={BLUE} sw={6.5} dur={1.1} />
      <Draw on={beat >= 2} delay={dl(2, 2.4)} d={F2_D} stroke={AMBER_DARK} sw={2.8} dur={1.1} />
      <Line
        x1={p2x(-F2_AX)} y1={p2y(f2(-F2_AX))} x2={p2x(F2_AX)} y2={p2y(f2(F2_AX))}
        stroke={GREEN_DARK} strokeWidth={1.5} strokeDasharray="5 4"
        opacity={beat >= 2 ? 1 : 0}
      />
      <Fade on={beat >= 2} delay={dl(2, 3.9)}>
        <Circle cx={p2x(F2_AX)} cy={p2y(f2(F2_AX))} r={3.8} fill={GREEN_DARK} />
        <Circle cx={p2x(-F2_AX)} cy={p2y(f2(-F2_AX))} r={3.8} fill={GREEN_DARK} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 4.4)}>
        <T x={536} y={296} size={11.5} fill={GREEN_DARK} weight={800}>
          {t("the reflection lands exactly on top of g",
             "reflection bilkul g ke upar hi baithta hai")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 5)}>
        <T x={372} y={316} size={13.5} fill={INK} weight={800} anchor="start">
          g(−x) = x² + cos x = g(x)
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 5.6)}>
        <Chip x={372} y={330} w={150} h={32} fill={CREAM} stroke={GREEN_DARK}
          textFill={GREEN_DARK} size={16} script={false}>
          {t("g is EVEN", "g EVEN hai")}
        </Chip>
      </Fade>

      {/* ═══════════ beat 3 — h(x) = x + x² is neither ═══════════ */}
      <Fade on={beat >= 3} delay={dl(3, 0.15)}>
        <T x={724} y={122} size={14} fill={RED} weight={800} anchor="start">③   h(x) = x + x²</T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 0.6)} d={arrowD(788, O3Y, 1000, O3Y)} stroke={INK} sw={1.8} dur={0.5} />
      <Draw on={beat >= 3} delay={dl(3, 0.8)} d={arrowD(O3X, 288, O3X, 146)} stroke={INK} sw={1.8} dur={0.5} />
      <Draw on={beat >= 3} delay={dl(3, 1.2)} d={F3_D} stroke={AMBER_DARK} sw={2.8} dur={1.1} />
      <Draw on={beat >= 3} delay={dl(3, 2.4)} d={F3_MIR_D} stroke={BLUE} sw={2.4} dur={1.1} />
      <Fade on={beat >= 3} delay={dl(3, 3.5)}>
        <T x={954} y={162} size={11.5} fill={AMBER_DARK} weight={900} anchor="start">h(x)</T>
        <T x={814} y={162} size={11.5} fill={BLUE} weight={900} anchor="end">h(−x)</T>
      </Fade>
      <Line
        x1={p3x(F3_AX)} y1={p3y(f3(F3_AX))} x2={p3x(F3_AX)} y2={p3y(f3(-F3_AX))}
        stroke={RED} strokeWidth={1.6} strokeDasharray="5 4"
        opacity={beat >= 3 ? 1 : 0}
      />
      <Fade on={beat >= 3} delay={dl(3, 4.3)}>
        <Circle cx={p3x(F3_AX)} cy={p3y(f3(F3_AX))} r={3.8} fill={AMBER_DARK} />
        <Circle cx={p3x(F3_AX)} cy={p3y(f3(-F3_AX))} r={3.8} fill={BLUE} />
        <T x={934} y={240} size={13} fill={RED} weight={900} anchor="start">≠</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 5)}>
        <T x={724} y={316} size={13.5} fill={INK} weight={800} anchor="start">
          h(−x) = −x + x²   ≠  ± h(x)
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 5.6)}>
        <Chip x={724} y={330} w={172} h={32} fill={CREAM} stroke={RED}
          textFill={RED} size={16} script={false}>
          {t("h is NEITHER", "h NEITHER hai")}
        </Chip>
      </Fade>

      {/* ═══════════ beat 4 — the speed question ═══════════ */}
      <Draw on={beat >= 4} delay={dl(4, 0.15)} d="M 40 380 H 1044" stroke={MUTED} sw={1.2} dur={0.8} />
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={40} y={404} size={13.5} fill={RED} weight={800} anchor="start">
          {t("④  SPEED QUESTION — which one of these is EVEN?",
             "④  SPEED QUESTION — inme se kaunsa EVEN hai?")}
        </T>
      </Fade>
      {OPTS.map(([x, label], i) => (
        <Fade key={`optbox${x}`} on={beat >= 4} delay={dl(4, 1.4 + i * 0.5)}>
          <Rect x={x} y={418} width={232} height={52} rx={10}
            fill={PAPER} stroke={MUTED} strokeWidth={1.7} />
          <T x={x + 116} y={450} size={18} fill={INK} weight={800}>{label}</T>
        </Fade>
      ))}

      {/* ═══════════ beat 5 — the trap: x · |x| ═══════════ */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d={ringD(404, 444, 118, 28)} stroke={RED} sw={2.3} dur={0.8} />
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        <T x={40} y={500} size={12.5} fill={RED} weight={800} anchor="start">
          {t("the modulus makes x · |x| LOOK even —",
             "modulus ki wajah se x · |x| even DIKHTA hai —")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2.6)}>
        <T x={40} y={524} size={12.5} fill={VIOLET} weight={800} anchor="start">
          {t("but the lone x factor makes it ODD:  odd × even = odd",
             "par akela x factor ise ODD banata hai:  odd × even = odd")}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 3.6)} d={crossD(371, 435, 66, 19)} stroke={VIOLET} sw={2.2} dur={0.35} />

      {/* ═══════════ beat 6 — scan the rest, keep the survivor ═══════════ */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d={crossD(132, 435, 48, 19)} stroke={VIOLET} sw={2.2} dur={0.35} />
      <Draw on={beat >= 6} delay={dl(6, 0.55)} d={crossD(890, 435, 20, 19)} stroke={VIOLET} sw={2.2} dur={0.35} />
      <Fade on={beat >= 6} delay={dl(6, 1.3)}>
        <T x={536} y={500} size={13} fill={VIOLET} weight={800} anchor="start">
          {t("sin x is odd · x³ is odd — both out",
             "sin x odd hai · x³ odd hai — dono out")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 2.2)} d={ringD(652, 444, 118, 28)} stroke={GREEN_DARK} sw={2.5} dur={0.8} />
      <Fade on={beat >= 6} delay={dl(6, 3)}>
        <T x={536} y={524} size={14} fill={GREEN_DARK} weight={900} anchor="start">
          {t("so cos x + x² is the only even one",
             "to sirf cos x + x² hi even hai")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 3.7)}>
        <T x={536} y={548} size={12} fill={MUTED} weight={700} anchor="start">
          {t("an even plus an even", "ek even plus ek even")}
        </T>
      </Fade>

      {/* ═══════════ beat 7 — the polynomial reflex ═══════════ */}
      <Draw on={beat >= 7} delay={dl(7, 0.05)} d="M 40 562 H 1044" stroke={MUTED} sw={1.2} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.15)}>
        <T x={40} y={584} size={13} fill={RED} weight={800} anchor="start">
          {t("⑤  read a polynomial straight off:", "⑤  polynomial ko seedha padho:")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={292} y={584} size={13.5} fill={GREEN_DARK} weight={900} anchor="start">
          {t("only EVEN powers  ⇒  even", "sirf EVEN powers  ⇒  even")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.45)}>
        <T x={496} y={584} size={13.5} fill={VIOLET} weight={900} anchor="start">
          {t("only ODD powers, no constant  ⇒  odd",
             "sirf ODD powers, koi constant nahi  ⇒  odd")}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 0.55)} d="M 292 592 H 472" stroke={GREEN_DARK} sw={1.8} dur={0.3} />
      <Draw on={beat >= 7} delay={dl(7, 0.65)} d="M 496 592 H 796" stroke={VIOLET} sw={1.8} dur={0.3} />
    </Scene>
  );
}
