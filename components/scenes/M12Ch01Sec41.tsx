/**
 * M12Ch01 · Section 41 — "Even and odd: two hidden symmetries"
 * Subtopic: Even, Odd, and Periodic Functions
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * The narration names two concrete graphs — y = x² and y = x³ (with y = sin x
 * beside it) — and then describes an operation on each: FOLD the parabola along
 * the vertical axis, ROTATE the cubic 180° about the origin. So the board is
 * two real plots side by side, each with the operation actually drawn: matched
 * points at ±x joined to the axis on the left, an antipodal pair joined by a
 * half-turn arc on the right, and the origin ringed where the odd function is
 * forced through it.
 *
 * Grid: header y30–96 · a vertical rule at x540 splitting the board · EVEN
 * frame x40–520, ODD frame x560–1044, both y106–456 · divider y470 · closing
 * band y470–596 (the "neither" case and the two contrast thumbnails).
 *
 * Beat map (8 segments, gates 0..7 — every beat used):
 *  0  "a hidden symmetry, two kinds"          title + underline + subtitle +
 *                                             rule + the vertical split
 *  1  "even: mirror about the y-axis"         ① heading, the parabola y = x²
 *                                             plotted on its own axes
 *  2  "f(−x) = f(x), fold the graph"          the ±x pair, drop-lines, the two
 *                                             equal-value arrows, the fold arc,
 *                                             and the identity
 *  3  "odd: rotate about the origin"          ② heading, the cubic y = x³, and
 *                                             y = sin x as a second instance
 *  4  "f(−x) = −f(x)"                         the antipodal pair on the cubic,
 *                                             the 180° half-turn arc, identity
 *  5  "defined at 0 ⇒ through the origin"     origin ringed on the cubic, the
 *                                             forcing argument f(0) = −f(0)
 *  6  "most are neither — and every f splits" the closing statement, an
 *                                             asymmetric sample curve, and
 *                                             f = even piece + odd piece
 *  7  "the diagram contrasts the two"         two thumbnails: the parabola with
 *                                             its mirror line, the cubic with
 *                                             its rotation arc
 *
 * Visual vocabulary — shared with Sections 40 and 42:
 *   axes INK with computed arrowheads · the primary function AMBER_DARK · a
 *   second instance BLUE · symmetry construction and results GREEN_DARK ·
 *   headings and the highlighted origin RED · scaffolding MUTED · every marked
 *   point placed through the frame's own px()/py() helpers.
 */

import React from "react";
import { Circle, Line } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, arrowD, ringD,
  INK, MUTED, AMBER_DARK, GREEN_DARK, RED,
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
const sample = (x0: number, x1: number, n: number, f: (x: number) => P): P[] =>
  Array.from({ length: n + 1 }, (_, i) => f(x0 + ((x1 - x0) * i) / n));

/* ───────── EVEN frame — y = x² ───────── */
const EX = 250;
const EY = 380;
const ex = (x: number) => EX + 42 * x;
const ey = (v: number) => EY - 20 * v;
const PARABOLA_D = smoothPath(sample(-3.1, 3.1, 40, (x) => [ex(x), ey(x * x)]));
const MX = 2.2;                       // the ±x pair actually marked
const MPY = ey(MX * MX);              // both points share this height

/* ───────── ODD frame — y = x³ , and y = sin x beside it ───────── */
const OX = 770;
const OY = 300;
const ox = (x: number) => OX + 45 * x;
const oy = (v: number) => OY - 12 * v;
const CUBIC_D = smoothPath(sample(-2, 2, 40, (x) => [ox(x), oy(x * x * x)]));
const RX = 1.4;                       // the antipodal pair on the cubic
const RPX = ox(RX);
const RPY = oy(RX * RX * RX);
const RQX = ox(-RX);
const RQY = oy(-(RX * RX * RX));
const RROT = Math.hypot(RPX - OX, RPY - OY);   // radius of the half-turn arc
const ROT_D = `M ${RPX.toFixed(1)} ${RPY.toFixed(1)} A ${RROT.toFixed(1)} ${RROT.toFixed(1)} 0 1 0 ${RQX.toFixed(1)} ${RQY.toFixed(1)}`;

const SX = 984;
const SY = 300;
const sx = (x: number) => SX + 18 * x;
const sy = (v: number) => SY - 26 * v;
const SINE_D = smoothPath(sample(-3, 3, 36, (x) => [sx(x), sy(Math.sin(x))]));

/* ───────── closing band ───────── */
/* a deliberately lopsided sample curve: neither even nor odd */
const NX = 440;
const NY = 556;
const nx = (x: number) => NX + 22 * x;
const ny = (v: number) => NY - 10 * v;
const NEITHER_PTS: P[] = [
  [-2.6, 0.9], [-1.8, 1.9], [-1, 0.6], [-0.2, 1.5],
  [0.6, -0.4], [1.4, 0.8], [2.4, -1.4],
];
const NEITHER_D = smoothPath(NEITHER_PTS.map(([x, v]) => [nx(x), ny(v)] as P));

/* thumbnail A — the parabola and its mirror line */
const TAX = 620;
const TAY = 566;
const tax = (x: number) => TAX + 20 * x;
const tay = (v: number) => TAY - 8 * v;
const THUMB_PAR_D = smoothPath(sample(-3, 3, 32, (x) => [tax(x), tay(x * x)]));

/* thumbnail B — the cubic and its rotation arc */
const TBX = 890;
const TBY = 546;
const tbx = (x: number) => TBX + 24 * x;
const tby = (v: number) => TBY - 4 * v;
const THUMB_CUB_D = smoothPath(sample(-2.2, 2.2, 32, (x) => [tbx(x), tby(x * x * x)]));
const TR = 1.3;
const TPX = tbx(TR);
const TPY = tby(TR * TR * TR);
const TQX = tbx(-TR);
const TQY = tby(-(TR * TR * TR));
const TRR = Math.hypot(TPX - TBX, TPY - TBY);
const THUMB_ROT_D = `M ${TPX.toFixed(1)} ${TPY.toFixed(1)} A ${TRR.toFixed(1)} ${TRR.toFixed(1)} 0 1 0 ${TQX.toFixed(1)} ${TQY.toFixed(1)}`;

export default function M12Ch01Sec41({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ═══════════ beat 0 — the framing ═══════════ */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={50} size={25} fill={RED} script>
          {t("Two hidden symmetries — even and odd",
             "Do hidden symmetries — even aur odd")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.1)}
        d="M 322 66 C 460 62, 640 70, 758 64" stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 1.9)}>
        <T x={540} y={86} size={12.5} fill={MUTED} script>
          {t("spot one of these and half your work disappears — there are exactly two kinds to know",
             "inme se ek dikh jaye to aadha kaam gayab — jaanne ke liye theek do tarah hain")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.8)} d="M 40 96 H 1044" stroke={MUTED} sw={1.2} dur={1} />
      <Draw on={beat >= 0} delay={dl(0, 3.6)} d="M 540 106 V 456" stroke={MUTED} sw={1.1} dur={0.9} />

      {/* ═══════════ beat 1 — ① EVEN: mirror about the y-axis ═══════════ */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={40} y={118} size={15} fill={RED} weight={800} anchor="start">
          {t("① EVEN — mirror about the y-axis", "① EVEN — y-axis ke about mirror")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.4)}>
        <T x={40} y={142} size={12} fill={MUTED} weight={700} anchor="start">
          {t("whatever happens at x happens at −x too",
             "x pe jo hota hai wahi −x pe hota hai")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2.4)} d={arrowD(90, EY, 424, EY)} stroke={INK} sw={2} dur={0.6} />
      <Draw on={beat >= 1} delay={dl(1, 2.8)} d={arrowD(EX, 404, EX, 174)} stroke={INK} sw={2} dur={0.6} />
      <Draw on={beat >= 1} delay={dl(1, 3.4)} d={PARABOLA_D} stroke={AMBER_DARK} sw={3} dur={1.4} />
      <Fade on={beat >= 1} delay={dl(1, 4.8)}>
        <T x={388} y={204} size={13} fill={AMBER_DARK} weight={900} anchor="start">y = x²</T>
      </Fade>

      {/* ═══════════ beat 2 — f(−x) = f(x), the fold ═══════════ */}
      <Line
        x1={ex(-MX)} y1={MPY} x2={ex(-MX)} y2={EY}
        stroke={MUTED} strokeWidth={1.6} strokeDasharray="6 5"
        opacity={beat >= 2 ? 1 : 0}
      />
      <Line
        x1={ex(MX)} y1={MPY} x2={ex(MX)} y2={EY}
        stroke={MUTED} strokeWidth={1.6} strokeDasharray="6 5"
        opacity={beat >= 2 ? 1 : 0}
      />
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <Circle cx={ex(-MX)} cy={MPY} r={5} fill={GREEN_DARK} />
        <Circle cx={ex(MX)} cy={MPY} r={5} fill={GREEN_DARK} />
        <T x={ex(-MX)} y={398} size={12} fill={GREEN_DARK} weight={800}>−x</T>
        <T x={ex(MX)} y={398} size={12} fill={GREEN_DARK} weight={800}>x</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.5)}
        d={`${arrowD(EX, MPY, ex(-MX) + 5, MPY)} ${arrowD(EX, MPY, ex(MX) - 5, MPY)}`}
        stroke={GREEN_DARK} sw={2} dur={0.6} />
      <Draw on={beat >= 2} delay={dl(2, 2.4)} d="M 150 250 Q 250 130, 350 250"
        stroke={GREEN_DARK} sw={2} dur={0.9} />
      <Draw on={beat >= 2} delay={dl(2, 3.3)} d={arrowD(340, 238, 350, 250)} stroke={GREEN_DARK} sw={2} dur={0.25} />
      <Fade on={beat >= 2} delay={dl(2, 3.8)}>
        <T x={250} y={250} size={12} fill={GREEN_DARK} weight={800}>
          {t("fold — the halves coincide", "fold karo — halves coincide")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 5.4)}>
        <T x={250} y={444} size={19} fill={GREEN_DARK} weight={900}>f(−x) = f(x)</T>
      </Fade>

      {/* ═══════════ beat 3 — ② ODD: rotate about the origin ═══════════ */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={560} y={118} size={15} fill={RED} weight={800} anchor="start">
          {t("② ODD — rotate 180° about the origin",
             "② ODD — origin ke about 180° rotate")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.4)}>
        <T x={560} y={142} size={12} fill={MUTED} weight={700} anchor="start">
          {t("flip left-right and up-down — it lands on itself",
             "left-right aur up-down flip karo — khud pe land")}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 2.4)} d={arrowD(660, OY, 900, OY)} stroke={INK} sw={2} dur={0.6} />
      <Draw on={beat >= 3} delay={dl(3, 2.8)} d={arrowD(OX, 420, OX, 180)} stroke={INK} sw={2} dur={0.6} />
      <Draw on={beat >= 3} delay={dl(3, 3.4)} d={CUBIC_D} stroke={AMBER_DARK} sw={3} dur={1.4} />
      <Fade on={beat >= 3} delay={dl(3, 4.8)}>
        <T x={868} y={214} size={13} fill={AMBER_DARK} weight={900} anchor="start">y = x³</T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 5.4)} d={arrowD(924, SY, 1040, SY)} stroke={INK} sw={1.7} dur={0.4} />
      <Draw on={beat >= 3} delay={dl(3, 5.7)} d={arrowD(SX, 336, SX, 264)} stroke={INK} sw={1.7} dur={0.4} />
      <Draw on={beat >= 3} delay={dl(3, 6.1)} d={SINE_D} stroke={BLUE} sw={2.4} dur={1} />
      <Fade on={beat >= 3} delay={dl(3, 7.2)}>
        <T x={SX} y={352} size={11.5} fill={BLUE} weight={900}>y = sin x</T>
      </Fade>

      {/* ═══════════ beat 4 — f(−x) = −f(x), the half turn ═══════════ */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <Circle cx={RPX} cy={RPY} r={5} fill={GREEN_DARK} />
        <Circle cx={RQX} cy={RQY} r={5} fill={GREEN_DARK} />
        <Circle cx={OX} cy={OY} r={3.4} fill={INK} />
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 0.9)} d={ROT_D} stroke={GREEN_DARK} sw={2} dur={1.1} />
      <Draw on={beat >= 4} delay={dl(4, 2)} d={arrowD(703.7, 325.6, 707, 333)} stroke={GREEN_DARK} sw={2} dur={0.25} />
      <Fade on={beat >= 4} delay={dl(4, 2.5)}>
        <T x={700} y={250} size={12} fill={GREEN_DARK} weight={800} anchor="end">
          {t("180° turn", "180° ghumao")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 3.6)}>
        <T x={OX} y={444} size={19} fill={GREEN_DARK} weight={900}>f(−x) = −f(x)</T>
      </Fade>

      {/* ═══════════ beat 5 — an odd function defined at 0 passes through it ═══════════ */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={560} y={356} size={12} fill={RED} weight={800} anchor="start">
          {t("odd, defined at 0", "odd, aur 0 pe define")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={560} y={380} size={13} fill={GREEN_DARK} weight={900} anchor="start">f(0) = −f(0)</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 3.4)}>
        <T x={560} y={404} size={13} fill={GREEN_DARK} weight={900} anchor="start">⇒  f(0) = 0</T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 4.4)} d={arrowD(656, 352, 742, 296)} stroke={RED} sw={1.9} dur={0.6} />
      <Draw on={beat >= 5} delay={dl(5, 5.1)} d={ringD(OX, OY, 22, 17)} stroke={RED} sw={2.2} dur={0.7} />
      <Fade on={beat >= 5} delay={dl(5, 5.9)}>
        <Circle cx={OX} cy={OY} r={5} fill={RED} />
        <T x={800} y={322} size={12} fill={RED} weight={800} anchor="start">(0, 0)</T>
      </Fade>

      {/* ═══════════ beat 6 — most are neither, and every f splits ═══════════ */}
      <Draw on={beat >= 6} delay={dl(6, 0.1)} d="M 40 470 H 1044" stroke={MUTED} sw={1.3} dur={0.9} />
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={40} y={492} size={14} fill={RED} weight={800} anchor="start">
          {t("MOST functions are NEITHER even nor odd — and that is fine",
             "ZYAADATAR functions na even hain na odd — aur yeh theek hai")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.4)}>
        <T x={440} y={508} size={11.5} fill={MUTED} weight={800}>
          {t("neither", "na koi")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 2.9)} d="M 372 556 H 508 M 440 588 V 520" stroke={MUTED} sw={1.6} dur={0.6} />
      <Draw on={beat >= 6} delay={dl(6, 3.5)} d={NEITHER_D} stroke={INK} sw={2.4} dur={1} />
      <Fade on={beat >= 6} delay={dl(6, 4.6)}>
        <T x={40} y={524} size={17} fill={GREEN_DARK} weight={900} anchor="start">
          f  =  even piece  +  odd piece
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 6.4)}>
        <T x={40} y={550} size={12} fill={MUTED} weight={700} anchor="start">
          {t("on a symmetric domain, and the split is unique",
             "symmetric domain pe, aur split unique hota hai")}
        </T>
      </Fade>

      {/* ═══════════ beat 7 — the two contrasted, side by side ═══════════ */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 554 566 H 686 M 620 574 V 490" stroke={MUTED} sw={1.6} dur={0.6} />
      <Draw on={beat >= 7} delay={dl(7, 0.8)} d={THUMB_PAR_D} stroke={AMBER_DARK} sw={2.4} dur={0.9} />
      <Line
        x1={620} y1={486} x2={620} y2={580}
        stroke={RED} strokeWidth={1.9} strokeDasharray="7 6"
        opacity={beat >= 7 ? 1 : 0}
      />
      <Fade on={beat >= 7} delay={dl(7, 2.2)}>
        <T x={694} y={528} size={11.5} fill={RED} weight={800} anchor="start">
          {t("mirrors across the", "vertical axis ke")}
        </T>
        <T x={694} y={552} size={11.5} fill={RED} weight={800} anchor="start">
          {t("vertical axis", "across mirror")}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 3.2)} d="M 828 546 H 952 M 890 594 V 506" stroke={MUTED} sw={1.6} dur={0.6} />
      <Draw on={beat >= 7} delay={dl(7, 3.8)} d={THUMB_CUB_D} stroke={AMBER_DARK} sw={2.4} dur={0.9} />
      <Draw on={beat >= 7} delay={dl(7, 4.8)} d={THUMB_ROT_D} stroke={RED} sw={1.9} dur={0.8} />
      <Draw on={beat >= 7} delay={dl(7, 5.6)} d={arrowD(857, 547, 859, 555)} stroke={RED} sw={1.9} dur={0.2} />
      <Fade on={beat >= 7} delay={dl(7, 6)}>
        <Circle cx={TPX} cy={TPY} r={4} fill={RED} />
        <Circle cx={TQX} cy={TQY} r={4} fill={RED} />
        <T x={890} y={494} size={11.5} fill={RED} weight={800}>
          {t("rotates onto itself about the origin",
             "origin ke about khud pe rotate karta hai")}
        </T>
      </Fade>
    </Scene>
  );
}
