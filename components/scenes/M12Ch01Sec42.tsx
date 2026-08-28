/**
 * M12Ch01 · Section 42 — "Periodicity: repetition at fixed intervals"
 * Subtopic: Even, Odd, and Periodic Functions  (closing section of the subtopic)
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * The voice names a heartbeat trace, so the board plots one: a single motif
 * repeated five times across the full width, with one stretch shaded as THE
 * fundamental period and the other four labelled as copies. Both cautions are
 * drawn rather than asserted — the constant function with three different
 * shifts all working (so no smallest one exists), and two sine waves whose
 * periods are bracketed and compared. The worked instance is plotted for real:
 * |sin x| + |cos x| over [0, 2π], where the four identical humps make the
 * period π/2 something you can see and the π/2 shift arrow lands peak-to-peak.
 *
 * Grid: header y30–96 · the repeating trace y110–300 (full width) · row 2
 * y310–470 (redundancy x40–330, caution ① x350–660, caution ② x680–1044) ·
 * divider y480 · the worked instance y490–596 (text x40–280, plot x280–990).
 *
 * Beat map (8 segments, gates 0..7 — every beat used):
 *  0  "the second form of redundancy"          title + underline + subtitle
 *                                              + full-width rule
 *  1  "a graph that repeats at intervals"      the heartbeat trace, five
 *                                              motifs, plus the x-axis
 *  2  "repeats every T ⇒ f(x+T) = f(x)"        the two period walls, the T
 *                                              bracket measured between them,
 *                                              the identity, and "smallest
 *                                              such positive T"
 *  3  "symmetry and periodicity: redundancy"   the two chips feeding one
 *  4  "caution: the constant function"         y = c drawn, three different
 *                                              shifts all valid, so no
 *                                              smallest T
 *  5  "caution: sums need commensurability"    two waves of different period,
 *                                              each period bracketed, ratio
 *                                              must be rational
 *  6  "|sin x| + |cos x| has period π/2"       the function actually plotted
 *                                              over [0, 2π], one π/2 stretch
 *                                              shaded, the shift arrow
 *  7  "one stretch, every other is a copy"     the fundamental stretch shaded
 *                                              on the trace, copies labelled
 *
 * Visual vocabulary — shared with Sections 40 and 41:
 *   axes INK with computed arrowheads · the primary periodic object AMBER_DARK
 *   · a second instance BLUE · periods, brackets and results GREEN_DARK ·
 *   headings and cautions RED · scaffolding MUTED · shaded stretches a single
 *   low-opacity AMBER fill · every mark placed through the frame's own
 *   px()/py() helpers.
 */

import React from "react";
import { Circle, Line, Path } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD,
  INK, MUTED, AMBER, AMBER_DARK, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

const BLUE = "#0284c7";

type P = [number, number];

function smoothPath(pts: P[]): string {
  if (pts.length < 2) return "";
  let d = `M ${pts[0][0].toFixed(1)} ${pts[0][1].toFixed(1)}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] ?? pts[i];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[i + 2] ?? p2;
    const c1x = p1[0] + (p2[0] - p0[0]) / 6;
    const c1y = p1[1] + (p2[1] - p0[1]) / 6;
    const c2x = p2[0] - (p3[0] - p1[0]) / 6;
    const c2y = p2[1] - (p3[1] - p1[1]) / 6;
    d += ` C ${c1x.toFixed(1)} ${c1y.toFixed(1)}, ${c2x.toFixed(1)} ${c2y.toFixed(1)}, ${p2[0].toFixed(1)} ${p2[1].toFixed(1)}`;
  }
  return d;
}

/* ───────── the repeating trace ─────────
   One motif, 180px wide, returning exactly to the baseline: repeated five
   times it gives a genuinely periodic graph whose period is 180px on screen. */
const TRACE_BASE = 200;
const TRACE_X0 = 90;
const TRACE_P = 180;
const MOTIF =
  "l 36 0 l 10 -12 l 10 24 l 9 -54 l 11 66 l 12 -24 l 18 0 l 20 -9 l 16 9 l 38 0";
const TRACE_D =
  `M 44 ${TRACE_BASE} H ${TRACE_X0} ` + Array(5).fill(MOTIF).join(" ") + " H 1030";
/* the stretch singled out as THE fundamental period, and the four copies */
const PER_A = TRACE_X0 + TRACE_P;        // 270
const PER_B = TRACE_X0 + 2 * TRACE_P;    // 450
const COPY_MIDS = [180, 540, 720, 900];

/* ───────── caution ② : two waves whose periods differ ───────── */
const wavePts = (base: number, amp: number, period: number): P[] =>
  Array.from({ length: 81 }, (_, i) => {
    const x = 700 + (200 * i) / 80;
    return [x, base - amp * Math.sin((2 * Math.PI * (x - 700)) / period)] as P;
  });
const WAVE1_D = smoothPath(wavePts(380, 14, 50));
const WAVE2_D = smoothPath(wavePts(432, 14, 75));

/* ───────── the worked instance: |sin x| + |cos x| on [0, 2π] ───────── */
const WX = 300;
const WY = 590;
const wx = (x: number) => WX + 105 * x;
const wy = (v: number) => WY - 55 * v;
const wfn = (x: number) => Math.abs(Math.sin(x)) + Math.abs(Math.cos(x));
const WORKED_D =
  "M " +
  Array.from({ length: 141 }, (_, i) => {
    const x = (2 * Math.PI * i) / 140;
    return `${wx(x).toFixed(1)} ${wy(wfn(x)).toFixed(1)}`;
  }).join(" L ");
const HALF_PI = wx(Math.PI / 2) - WX;                 // one period, in px
const PEAKS = [1, 3, 5, 7].map((k) => wx((k * Math.PI) / 4));
const WALLS = [1, 2, 3].map((k) => wx((k * Math.PI) / 2));

export default function M12Ch01Sec42({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ═══════════ beat 0 — the framing ═══════════ */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={50} size={25} fill={RED} script>
          {t("Periodicity — repetition at fixed intervals",
             "Periodicity — fixed intervals pe repetition")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.1)}
        d="M 296 66 C 450 62, 640 70, 784 64" stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 1.9)}>
        <T x={540} y={86} size={12.5} fill={MUTED} script>
          {t("the second form of redundancy — a function that keeps telling you the same thing",
             "redundancy ka doosra roop — function jo wahi baat baar baar batata hai")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.8)} d="M 40 96 H 1044" stroke={MUTED} sw={1.2} dur={1} />

      {/* ═══════════ beat 1 — a graph that repeats ═══════════ */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={44} y={126} size={12.5} fill={MUTED} weight={700} anchor="start">
          {t("a heartbeat trace — the same pattern, over and over",
             "heartbeat trace — wahi pattern, baar baar")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.1)} d={arrowD(44, 240, 1036, 240)} stroke={INK} sw={2} dur={0.8} />
      <Fade on={beat >= 1} delay={dl(1, 1.9)}>
        <T x={1036} y={258} size={12.5} fill={INK} weight={800} anchor="end">x</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2.2)} d={TRACE_D} stroke={AMBER_DARK} sw={2.6} dur={2.4} />
      <Fade on={beat >= 1} delay={dl(1, 4.8)}>
        <T x={1036} y={126} size={12.5} fill={MUTED} weight={700} anchor="end">
          {t("seasons · a tabla rhythm cycling every few beats",
             "seasons · kuch beats mein cycle hoti tabla rhythm")}
        </T>
      </Fade>

      {/* ═══════════ beat 2 — the period T and f(x + T) = f(x) ═══════════ */}
      <Line
        x1={PER_A} y1={150} x2={PER_A} y2={246}
        stroke={GREEN_DARK} strokeWidth={1.8} strokeDasharray="7 6"
        opacity={beat >= 2 ? 1 : 0}
      />
      <Line
        x1={PER_B} y1={150} x2={PER_B} y2={246}
        stroke={GREEN_DARK} strokeWidth={1.8} strokeDasharray="7 6"
        opacity={beat >= 2 ? 1 : 0}
      />
      <Draw on={beat >= 2} delay={dl(2, 0.9)}
        d={`M ${PER_A + 2} 266 V 278 M ${PER_A + 2} 272 H ${PER_B - 2} M ${PER_B - 2} 266 V 278`}
        stroke={GREEN_DARK} sw={2} dur={0.7} />
      <Fade on={beat >= 2} delay={dl(2, 1.7)}>
        <T x={456} y={277} size={17} fill={GREEN_DARK} weight={900} anchor="start">T</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.6)}>
        <T x={560} y={277} size={18} fill={GREEN_DARK} weight={900} anchor="start">
          f(x + T) = f(x)   for all x
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 5.4)}>
        <T x={824} y={268} size={12} fill={INK} weight={700} anchor="start">
          {t("the smallest such positive T", "sabse chhota positive T")}
        </T>
        <T x={824} y={292} size={12} fill={GREEN_DARK} weight={800} anchor="start">
          {t("is the FUNDAMENTAL PERIOD", "FUNDAMENTAL PERIOD kehlata hai")}
        </T>
      </Fade>

      {/* ═══════════ beat 3 — both are redundancy ═══════════ */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={40} y={326} size={13} fill={RED} weight={800} anchor="start">
          {t("REDUNDANCY — both are the same idea", "REDUNDANCY — dono ek hi idea hain")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <Chip x={40} y={344} w={140} h={30} fill={CREAM} stroke={GREEN_DARK}
          textFill={GREEN_DARK} size={13} script={false}>
          {t("symmetry", "symmetry")}
        </Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2)}>
        <Chip x={40} y={384} w={140} h={30} fill={CREAM} stroke={GREEN_DARK}
          textFill={GREEN_DARK} size={13} script={false}>
          {t("periodicity", "periodicity")}
        </Chip>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 2.8)}
        d={`${arrowD(184, 359, 234, 373)} ${arrowD(184, 399, 234, 385)}`}
        stroke={MUTED} sw={1.9} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 3.4)}>
        <Chip x={240} y={364} w={90} h={30} fill={CREAM} stroke={RED}
          textFill={RED} size={13} script={false}>
          {t("redundancy", "redundancy")}
        </Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 4.6)}>
        <T x={40} y={434} size={11.5} fill={MUTED} weight={700} anchor="start">
          {t("the same information, more than once",
             "wahi information, ek se zyada baar")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 6.4)}>
        <T x={40} y={458} size={11.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("exploit it — that is where speed comes from",
             "isse exploit karo — speed wahin se aati hai")}
        </T>
      </Fade>

      {/* ═══════════ beat 4 — caution ①: the constant function ═══════════ */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={350} y={326} size={13} fill={RED} weight={800} anchor="start">
          {t("CAUTION ① — the constant function", "CAUTION ① — constant function")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 0.8)} d={arrowD(360, 424, 640, 424)} stroke={INK} sw={1.9} dur={0.6} />
      <Draw on={beat >= 4} delay={dl(4, 1.2)} d={arrowD(390, 440, 390, 348)} stroke={INK} sw={1.9} dur={0.5} />
      <Draw on={beat >= 4} delay={dl(4, 1.7)} d="M 396 372 H 632" stroke={AMBER_DARK} sw={2.8} dur={0.8} />
      <Fade on={beat >= 4} delay={dl(4, 2.5)}>
        <T x={400} y={362} size={12} fill={AMBER_DARK} weight={900} anchor="start">
          {t("a constant function", "constant function")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 3.2)}
        d="M 410 379 V 389 M 410 384 H 470 M 470 379 V 389" stroke={GREEN_DARK} sw={1.8} dur={0.4} />
      <Draw on={beat >= 4} delay={dl(4, 3.8)}
        d="M 410 393 V 403 M 410 398 H 530 M 530 393 V 403" stroke={GREEN_DARK} sw={1.8} dur={0.5} />
      <Draw on={beat >= 4} delay={dl(4, 4.4)}
        d="M 410 407 V 417 M 410 412 H 600 M 600 407 V 417" stroke={GREEN_DARK} sw={1.8} dur={0.6} />
      <Fade on={beat >= 4} delay={dl(4, 5.2)}>
        <T x={350} y={444} size={12} fill={GREEN_DARK} weight={800} anchor="start">
          {t("every T works", "har T chalta hai")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 7.4)}>
        <T x={350} y={468} size={12} fill={RED} weight={800} anchor="start">
          {t("so NO fundamental period — no smallest T",
             "to fundamental period nahi — sabse chhota T nahi")}
        </T>
      </Fade>

      {/* ═══════════ beat 5 — caution ②: adding two periodic functions ═══════════ */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={680} y={326} size={13} fill={RED} weight={800} anchor="start">
          {t("CAUTION ② — adding two periodic functions",
             "CAUTION ② — do periodic functions jodna")}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 0.9)} d={WAVE1_D} stroke={AMBER_DARK} sw={2.4} dur={1.1} />
      <Draw on={beat >= 5} delay={dl(5, 1.6)}
        d="M 700 347 V 357 M 700 352 H 750 M 750 347 V 357" stroke={AMBER_DARK} sw={1.8} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 2.1)}>
        <T x={756} y={356} size={11} fill={AMBER_DARK} weight={900} anchor="start">T₁</T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 2.5)} d={WAVE2_D} stroke={BLUE} sw={2.4} dur={1.1} />
      <Draw on={beat >= 5} delay={dl(5, 3.2)}
        d="M 700 455 V 465 M 700 460 H 775 M 775 455 V 465" stroke={BLUE} sw={1.8} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 3.7)}>
        <T x={781} y={464} size={11} fill={BLUE} weight={900} anchor="start">T₂</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 4.4)}>
        <T x={920} y={372} size={11} fill={INK} weight={700} anchor="start">
          {t("a common period", "common period tabhi")}
        </T>
        <T x={920} y={396} size={11} fill={INK} weight={700} anchor="start">
          {t("exists only if the", "exist karta hai jab")}
        </T>
        <T x={920} y={420} size={11} fill={INK} weight={700} anchor="start">
          {t("two periods are", "dono periods")}
        </T>
        <T x={920} y={444} size={11} fill={RED} weight={800} anchor="start">
          {t("COMMENSURABLE", "COMMENSURABLE hon")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 7.4)}>
        <T x={1044} y={468} size={11.5} fill={GREEN_DARK} weight={800} anchor="end">
          {t("ratio must be RATIONAL", "ratio RATIONAL hona chahiye")}
        </T>
      </Fade>

      {/* ═══════════ beat 6 — the worked instance |sin x| + |cos x| ═══════════ */}
      <Draw on={beat >= 6} delay={dl(6, 0.1)} d="M 40 480 H 1044" stroke={MUTED} sw={1.3} dur={0.9} />
      <Fade on={beat >= 6} delay={dl(6, 0.7)}>
        <T x={40} y={502} size={13} fill={RED} weight={800} anchor="start">
          WORKED INSTANCE — |sin x| + |cos x|
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.3)} d={arrowD(280, WY, 990, WY)} stroke={INK} sw={2} dur={0.7} />
      <Draw on={beat >= 6} delay={dl(6, 1.7)} d={arrowD(WX, 594, WX, 512)} stroke={INK} sw={2} dur={0.5} />
      <Draw on={beat >= 6} delay={dl(6, 2.2)} d={WORKED_D} stroke={AMBER_DARK} sw={2.8} dur={1.6} />
      <Path
        d={`M ${WX} 508 H ${(WX + HALF_PI).toFixed(1)} V ${WY} H ${WX} Z`}
        fill={AMBER} stroke="none"
        opacity={beat >= 6 ? 0.2 : 0}
      />
      {WALLS.map((x, i) => (
        <Line
          key={`wall${i}`}
          x1={x} y1={508} x2={x} y2={WY}
          stroke={MUTED} strokeWidth={1.6} strokeDasharray="6 5"
          opacity={beat >= 6 ? 1 : 0}
        />
      ))}
      <Draw on={beat >= 6} delay={dl(6, 4.9)}
        d={`M ${WX} 495 V 505 M ${WX} 500 H ${(WX + HALF_PI).toFixed(1)} M ${(WX + HALF_PI).toFixed(1)} 495 V 505`}
        stroke={GREEN_DARK} sw={2} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 5.5)}>
        <T x={472} y={504} size={12} fill={GREEN_DARK} weight={900} anchor="start">π/2</T>
        {PEAKS.map((x, i) => (
          <Circle key={`pk${i}`} cx={x} cy={wy(Math.SQRT2)} r={4.4} fill={GREEN_DARK} />
        ))}
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 6.2)} d={arrowD(388, 520, 542, 520)} stroke={GREEN_DARK} sw={2} dur={0.6} />
      <Fade on={beat >= 6} delay={dl(6, 6.9)}>
        <T x={40} y={528} size={12} fill={GREEN_DARK} weight={800} anchor="start">
          {t("fundamental period = π/2", "fundamental period = π/2")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 8.6)}>
        <T x={40} y={552} size={12} fill={INK} weight={700} anchor="start">
          {t("a shift by π/2 swaps", "π/2 ka shift dono moduli")}
        </T>
        <T x={40} y={576} size={12} fill={INK} weight={700} anchor="start">
          {t("the two moduli — sum unchanged", "ko swap karta hai — sum wahi")}
        </T>
      </Fade>

      {/* ═══════════ beat 7 — one stretch, and every other is a copy ═══════════ */}
      <Path
        d={`M ${PER_A} 150 H ${PER_B} V 246 H ${PER_A} Z`}
        fill={AMBER} stroke="none"
        opacity={beat >= 7 ? 0.24 : 0}
      />
      <Fade on={beat >= 7} delay={dl(7, 1)}>
        <T x={44} y={268} size={12} fill={RED} weight={800} anchor="start">
          {t("understand ONE stretch —", "ek stretch samjho —")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 2.4)}>
        <T x={44} y={292} size={12} fill={RED} weight={800} anchor="start">
          {t("every other is a copy", "baaki har ek copy hai")}
        </T>
      </Fade>
      {COPY_MIDS.map((x, i) => (
        <Fade key={`cp${x}`} on={beat >= 7} delay={dl(7, 3.4 + i * 0.5)}>
          <T x={x} y={148} size={11} fill={MUTED} weight={800}>
            {t("copy", "copy")}
          </T>
        </Fade>
      ))}
    </Scene>
  );
}
