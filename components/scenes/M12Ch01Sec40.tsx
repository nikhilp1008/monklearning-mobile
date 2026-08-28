/**
 * M12Ch01 · Section 40 — "Pitfalls and pro-tips for standard functions"
 * Subtopic: Standard Real Functions and Their Graphs  (closing section)
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * A "traps and tips" section is exactly where a board decays into bullets, so
 * every trap here gets its own REAL figure: a number line with −2.3 actually
 * placed between the ticks and the floor arrow walking DOWN to −3; the same
 * generic f drawn three times so |f(x)| and f(|x|) can be compared side by
 * side with the discarded pieces ghosted; the signum and floor graphs drawn
 * with their open/closed endpoints so the "discrete, not an interval" point is
 * visible; log with its forbidden half-plane shaded and eˣ with its y = 0
 * asymptote it never touches; and finally the sawtooth {x} plotted against a
 * line with the crossings dotted.
 *
 * Grid: header y30–96 · row 1 y106–320 (trap ① x40–330, trap ② x350–1044) ·
 * row 2 y336–462 (trap ③ x40–500, trap ④ x520–1044) · divider y472 ·
 * reflex band y480–596 (split tree x40–400, sawtooth x546–1044).
 *
 * Beat map (8 segments, gates 0..7 — every beat used):
 *  0  "close standard functions with the traps"   title + underline + subtitle
 *                                                 + full-width rule
 *  1  "trap ①: floor of a negative"               number line, ticks, the point
 *                                                 −2.3, the DOWN arrow to −3,
 *                                                 ⌊−2.3⌋ = −3 and the crossed
 *                                                 expectation −2
 *  2  "trap ②: mixing the modulus transforms"     three frames of one generic f:
 *                                                 f, |f(x)| with the below-axis
 *                                                 part flipped up (ghosted
 *                                                 original + flip arrow), and
 *                                                 f(|x|) with the right half
 *                                                 mirrored left (ghosted
 *                                                 discarded left half)
 *  3  "trap ③: discrete ranges are not intervals" signum with its three levels
 *                                                 and open/closed dots, floor
 *                                                 with six steps and endpoints
 *  4  "trap ④: forgetting the growth domains"     log x with x ≤ 0 shaded RED,
 *                                                 eˣ with the dashed y = 0
 *                                                 asymptote it never meets
 *  5  "now the reflexes"                          divider + reflex headings
 *  6  "split into x integer / x non-integer"      the split tree, drawn
 *  7  "{x} = a line? count the crossings"         sawtooth over six teeth, the
 *                                                 line drawn across it, the
 *                                                 crossings dotted
 *
 * Visual vocabulary — shared with Sections 41 and 42:
 *   axes INK with computed arrowheads · the primary function AMBER_DARK ·
 *   a second/derived curve BLUE · results and correct values GREEN_DARK ·
 *   trap headings, forbidden regions and warnings RED · scaffolding MUTED ·
 *   shaded regions a single low-opacity fill · every arrow tip computed from
 *   the frame's own px()/py() so it lands on the real curve.
 */

import React from "react";
import { Circle, Line, Path, Rect } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD, crossD,
  INK, MUTED, AMBER_DARK, GREEN_DARK, RED, CREAM, PAPER,
  Scene,
} from '@/components/scenes/kit';

const BLUE = "#0284c7";

type P = [number, number];

/** Catmull-Rom → cubic Bézier, so sampled points read as a smooth curve. */
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

/* ───────── trap ② : one generic f, drawn three ways ───────── */
/* A deliberately ASYMMETRIC sample function so |f(x)| and f(|x|) differ
   visibly. It crosses the axis exactly at the origin, so the flipped part
   and the mirrored half both start cleanly there. */
const F_PTS: P[] = [
  [-2.4, 1.4], [-1.8, 1.8], [-1.2, 1.5], [-0.6, 0.9], [0, 0],
  [0.6, -0.8], [1.2, -1.4], [1.8, -1.6], [2.4, -1.1],
];
const valueAt = (x: number): number =>
  F_PTS[F_PTS.findIndex(([xx]) => Math.abs(xx - x) < 1e-6)][1];

const SXF = 30;
const SYF = 22;
const FY = 208;          // the shared x-axis of all three frames
const OA = 438;          // frame 1 — f(x)
const OB = 672;          // frame 2 — |f(x)|
const OC = 906;          // frame 3 — f(|x|)

const toFrame = (ox: number, pts: P[]): P[] =>
  pts.map(([x, v]) => [ox + SXF * x, FY - SYF * v] as P);

const F_BASE = toFrame(OA, F_PTS);
const F_ABS = toFrame(OB, F_PTS.map(([x, v]) => [x, Math.abs(v)] as P));
const F_ARG = toFrame(OC, F_PTS.map(([x]) => [x, valueAt(Math.abs(x))] as P));
/* the pieces each transform throws away, ghosted in place */
const GHOST_ABS = toFrame(OB, F_PTS.filter(([x]) => x >= 0));
const GHOST_ARG = toFrame(OC, F_PTS.filter(([x]) => x <= 0));

/* ───────── trap ③ : the floor staircase ───────── */
const FLX = 330;
const FLY = 400;
const flx = (u: number) => FLX + 26 * u;
const fly = (v: number) => FLY - 17 * v;
const FLOOR_STEPS = [-2, -1, 0, 1, 2, 3];
const FLOOR_D = FLOOR_STEPS
  .map((n) => `M ${flx(n).toFixed(1)} ${fly(n).toFixed(1)} H ${flx(n + 1).toFixed(1)}`)
  .join(" ");

/* ───────── trap ④ : log x and eˣ on a shared axis height ───────── */
const LGX = 620;
const LGY = 406;
const lgx = (x: number) => LGX + 30 * x;
const lgy = (v: number) => LGY - 19 * v;
const LOG_D = smoothPath(
  Array.from({ length: 26 }, (_, i) => {
    const x = 0.3 + (3.2 * i) / 25;
    return [lgx(x), lgy(Math.log(x))] as P;
  })
);
const EXX = 880;
const EXY = 406;
const exx = (x: number) => EXX + 30 * x;
const exy = (v: number) => EXY - 19 * v;
const EXP_D = smoothPath(
  Array.from({ length: 26 }, (_, i) => {
    const x = -2.4 + (3.1 * i) / 25;
    return [exx(x), exy(Math.exp(x))] as P;
  })
);

/* ───────── reflex ② : the sawtooth {x} against a line ───────── */
const SWX = 612;
const SWY = 588;
const swx = (x: number) => SWX + 44 * x;
const swy = (v: number) => SWY - 46 * v;
const SAW_D = [-1, 0, 1, 2, 3, 4]
  .map((n) => `M ${swx(n).toFixed(1)} ${SWY} L ${swx(n + 1).toFixed(1)} ${swy(1).toFixed(1)}`)
  .join(" ");
/* the line y = x/4 — chosen only so its crossings are countable on screen */
const lineY = (x: number) => swy(x / 4);
const LINE_D = `M ${swx(-0.5).toFixed(1)} ${lineY(-0.5).toFixed(1)} L ${swx(4).toFixed(1)} ${lineY(4).toFixed(1)}`;
/* {x} = x/4  ⇒  x = 0, 4/3, 8/3 inside the drawn window */
const CROSSINGS: number[] = [0, 4 / 3, 8 / 3];

export default function M12Ch01Sec40({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ═══════════ beat 0 — the framing ═══════════ */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={50} size={25} fill={RED} script>
          {t("Standard functions — the traps, then the reflexes",
             "Standard functions — traps, phir reflexes")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.1)}
        d="M 276 66 C 440 62, 660 70, 806 64" stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 1.9)}>
        <T x={540} y={86} size={12.5} fill={MUTED} script>
          {t("four traps that leak marks, then two reflexes that crack these problems open",
             "chaar traps jo marks leak karte hain, phir do reflexes jo problems khol dete hain")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.8)} d="M 40 96 H 1044" stroke={MUTED} sw={1.2} dur={1} />

      {/* ═══════════ beat 1 — trap ①: the floor of a negative ═══════════ */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={40} y={120} size={13.5} fill={RED} weight={800} anchor="start">
          {t("①  the floor of a negative", "①  negative ka floor")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.8)} d="M 48 176 H 316" stroke={INK} sw={2} dur={0.7} />
      <Draw on={beat >= 1} delay={dl(1, 1.4)}
        d="M 60 170 V 182 M 120 170 V 182 M 180 170 V 182 M 240 170 V 182 M 300 170 V 182"
        stroke={INK} sw={1.6} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 1.9)}>
        <Circle cx={162} cy={176} r={5} fill={RED} />
        <T x={162} y={154} size={12.5} fill={RED} weight={800}>−2.3</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2.5)} d={arrowD(160, 166, 126, 166)} stroke={RED} sw={2} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 3.1)}>
        <Circle cx={120} cy={176} r={5} fill={GREEN_DARK} />
        <T x={120} y={200} size={12.5} fill={GREEN_DARK} weight={800}>−3</T>
        <T x={180} y={200} size={12.5} fill={MUTED} weight={800}>−2</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 3.6)} d={crossD(172, 190, 16, 12)} stroke={RED} sw={1.8} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 4.2)}>
        <T x={40} y={228} size={17} fill={GREEN_DARK} weight={900} anchor="start">⌊−2.3⌋ = −3</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 5.6)}>
        <T x={40} y={254} size={13} fill={RED} weight={800} anchor="start">
          {t("not −2 — the floor always rounds DOWN",
             "−2 nahi — floor hamesha DOWN round karta hai")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 8.4)}>
        <T x={40} y={278} size={12} fill={MUTED} weight={700} anchor="start">
          {t("the single biggest source of lost marks here",
             "yahan sabse bada marks-loss ka source")}
        </T>
      </Fade>

      {/* ═══════════ beat 2 — trap ②: the two modulus transforms ═══════════ */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={350} y={120} size={13.5} fill={RED} weight={800} anchor="start">
          {t("②  |f(x)| vs f(|x|) — never swap them",
             "②  |f(x)| aur f(|x|) mix kar dena")}
        </T>
      </Fade>
      {[OA, OB, OC].map((ox, i) => (
        <Draw key={`ax${ox}`} on={beat >= 2} delay={dl(2, 0.7 + i * 0.12)}
          d={arrowD(ox - 80, FY, ox + 80, FY)} stroke={INK} sw={1.9} dur={0.5} />
      ))}
      {[OA, OB, OC].map((ox, i) => (
        <Draw key={`ay${ox}`} on={beat >= 2} delay={dl(2, 1.1 + i * 0.12)}
          d={arrowD(ox, 254, ox, 150)} stroke={INK} sw={1.9} dur={0.5} />
      ))}

      {/* frame 1 — the original f */}
      <Draw on={beat >= 2} delay={dl(2, 1.6)} d={smoothPath(F_BASE)} stroke={AMBER_DARK} sw={2.8} dur={1.1} />

      {/* frame 2 — |f(x)| : the below-axis stretch flipped up */}
      <Path
        d={smoothPath(GHOST_ABS)}
        fill="none" stroke={MUTED} strokeWidth={1.8} strokeDasharray="6 5"
        opacity={beat >= 2 ? 0.85 : 0}
      />
      <Draw on={beat >= 2} delay={dl(2, 3.2)} d={smoothPath(F_ABS)} stroke={GREEN_DARK} sw={2.8} dur={1} />
      <Draw on={beat >= 2} delay={dl(2, 4.2)}
        d={arrowD(OB + SXF * 1.8, FY + SYF * 1.6 - 5, OB + SXF * 1.8, FY - SYF * 1.6 + 5)}
        stroke={GREEN_DARK} sw={1.8} dur={0.5} />

      {/* frame 3 — f(|x|) : the right half mirrored across to the left */}
      <Path
        d={smoothPath(GHOST_ARG)}
        fill="none" stroke={MUTED} strokeWidth={1.8} strokeDasharray="6 5"
        opacity={beat >= 2 ? 0.85 : 0}
      />
      <Draw on={beat >= 2} delay={dl(2, 5.3)} d={smoothPath(F_ARG)} stroke={BLUE} sw={2.8} dur={1} />
      <Draw on={beat >= 2} delay={dl(2, 6.3)}
        d={arrowD(OC + SXF * 1.2 - 6, FY + SYF * 1.4, OC - SXF * 1.2 + 6, FY + SYF * 1.4)}
        stroke={BLUE} sw={1.8} dur={0.5} />

      <Fade on={beat >= 2} delay={dl(2, 6.9)}>
        <T x={OA} y={272} size={13} fill={AMBER_DARK} weight={900}>f(x)</T>
        <T x={OB} y={272} size={13} fill={GREEN_DARK} weight={900}>| f(x) |</T>
        <T x={OC} y={272} size={13} fill={BLUE} weight={900}>f( |x| )</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 7.6)}>
        <T x={OA} y={296} size={11.5} fill={MUTED} weight={700}>
          {t("the original", "original")}
        </T>
        <T x={OB} y={296} size={11.5} fill={MUTED} weight={700}>
          {t("below-axis part flips UP", "below-axis hissa UPAR flip")}
        </T>
        <T x={OC} y={296} size={11.5} fill={MUTED} weight={700}>
          {t("right half mirrors to the LEFT", "right half BAAYEN mirror hota hai")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 9)}>
        <T x={350} y={318} size={12.5} fill={RED} weight={800} anchor="start">
          {t("never swap them — they are different graphs",
             "kabhi swap mat karo — yeh alag graphs hain")}
        </T>
      </Fade>

      {/* ═══════════ beat 3 — trap ③: discrete ranges are not intervals ═══════════ */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={40} y={346} size={13.5} fill={RED} weight={800} anchor="start">
          {t("③  discrete ranges are not intervals",
             "③  discrete ranges ko interval samajhna")}
        </T>
      </Fade>
      {/* signum */}
      <Draw on={beat >= 3} delay={dl(3, 0.8)} d={arrowD(80, 400, 210, 400)} stroke={INK} sw={1.9} dur={0.5} />
      <Draw on={beat >= 3} delay={dl(3, 1.1)} d={arrowD(140, 432, 140, 368)} stroke={INK} sw={1.9} dur={0.5} />
      <Draw on={beat >= 3} delay={dl(3, 1.5)} d="M 143 380 H 205 M 75 420 H 137" stroke={AMBER_DARK} sw={2.8} dur={0.6} />
      <Fade on={beat >= 3} delay={dl(3, 2.1)}>
        <Circle cx={140} cy={380} r={3.8} fill={PAPER} stroke={AMBER_DARK} strokeWidth={1.8} />
        <Circle cx={140} cy={420} r={3.8} fill={PAPER} stroke={AMBER_DARK} strokeWidth={1.8} />
        <Circle cx={140} cy={400} r={4.4} fill={AMBER_DARK} />
        <T x={132} y={376} size={11.5} fill={INK} weight={800} anchor="end">1</T>
        <T x={132} y={424} size={11.5} fill={INK} weight={800} anchor="end">−1</T>
        <T x={214} y={370} size={12} fill={AMBER_DARK} weight={900} anchor="start">sgn x</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 3.2)}>
        <T x={140} y={448} size={11.5} fill={GREEN_DARK} weight={800}>
          {t("only −1, 0, 1", "sirf −1, 0, 1")}
        </T>
      </Fade>
      {/* floor */}
      <Draw on={beat >= 3} delay={dl(3, 3.8)} d={arrowD(262, 400, 470, 400)} stroke={INK} sw={1.9} dur={0.5} />
      <Draw on={beat >= 3} delay={dl(3, 4.1)} d={arrowD(330, 440, 330, 356)} stroke={INK} sw={1.9} dur={0.5} />
      <Draw on={beat >= 3} delay={dl(3, 4.5)} d={FLOOR_D} stroke={AMBER_DARK} sw={2.8} dur={1.1} />
      <Fade on={beat >= 3} delay={dl(3, 5.6)}>
        {FLOOR_STEPS.map((n) => (
          <Circle key={`fc${n}`} cx={flx(n)} cy={fly(n)} r={4} fill={AMBER_DARK} />
        ))}
        {FLOOR_STEPS.map((n) => (
          <Circle key={`fo${n}`} cx={flx(n + 1)} cy={fly(n)} r={3.8}
            fill={PAPER} stroke={AMBER_DARK} strokeWidth={1.8} />
        ))}
        <T x={442} y={356} size={12} fill={AMBER_DARK} weight={900} anchor="start">⌊x⌋</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 6.6)}>
        <T x={356} y={448} size={11.5} fill={GREEN_DARK} weight={800}>
          {t("integers only, never a band", "sirf integers, koi band nahi")}
        </T>
      </Fade>

      {/* ═══════════ beat 4 — trap ④: the growth domains ═══════════ */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={520} y={346} size={13.5} fill={RED} weight={800} anchor="start">
          {t("④  forgetting the growth domains", "④  growth domains bhoolna")}
        </T>
      </Fade>
      {/* log x — everything left of the y-axis is forbidden */}
      <Rect
        x={566} y={368} width={54} height={68} fill={RED} stroke="none"
        opacity={beat >= 4 ? 0.13 : 0}
      />
      <Draw on={beat >= 4} delay={dl(4, 1)} d={arrowD(566, LGY, 736, LGY)} stroke={INK} sw={1.9} dur={0.5} />
      <Draw on={beat >= 4} delay={dl(4, 1.3)} d={arrowD(LGX, 440, LGX, 366)} stroke={INK} sw={1.9} dur={0.5} />
      <Draw on={beat >= 4} delay={dl(4, 1.7)} d={LOG_D} stroke={AMBER_DARK} sw={2.8} dur={1} />
      <Fade on={beat >= 4} delay={dl(4, 2.7)}>
        <T x={738} y={386} size={12} fill={AMBER_DARK} weight={900} anchor="start">log x</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 3.3)}>
        <T x={LGX} y={452} size={11.5} fill={GREEN_DARK} weight={800}>
          {t("input must be > 0", "input zero se upar chahiye")}
        </T>
      </Fade>
      {/* eˣ — the y = 0 asymptote it never reaches */}
      <Draw on={beat >= 4} delay={dl(4, 4)} d={arrowD(800, EXY, 1000, EXY)} stroke={INK} sw={1.9} dur={0.5} />
      <Draw on={beat >= 4} delay={dl(4, 4.3)} d={arrowD(EXX, 440, EXX, 366)} stroke={INK} sw={1.9} dur={0.5} />
      <Draw on={beat >= 4} delay={dl(4, 4.7)} d={EXP_D} stroke={AMBER_DARK} sw={2.8} dur={1} />
      <Line
        x1={806} y1={EXY} x2={1006} y2={EXY}
        stroke={RED} strokeWidth={2} strokeDasharray="7 6"
        opacity={beat >= 4 ? 1 : 0}
      />
      <Fade on={beat >= 4} delay={dl(4, 6.1)}>
        <T x={1010} y={410} size={11} fill={RED} weight={800} anchor="start">y = 0</T>
        <T x={908} y={380} size={13} fill={AMBER_DARK} weight={900} anchor="start">eˣ</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 7)}>
        <T x={EXX} y={452} size={11.5} fill={GREEN_DARK} weight={800}>
          {t("output > 0 — never actually 0", "output zero se upar — kabhi zero nahi")}
        </T>
      </Fade>

      {/* ═══════════ beat 5 — the reflexes begin ═══════════ */}
      <Draw on={beat >= 5} delay={dl(5, 0.1)} d="M 40 472 H 1044" stroke={MUTED} sw={1.3} dur={0.9} />
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={40} y={494} size={15} fill={RED} weight={800} anchor="start">
          {t("NOW THE REFLEXES — what makes these fast",
             "AB REFLEXES — jo inhe fast banate hain")}
        </T>
      </Fade>

      {/* ═══════════ beat 6 — reflex ①: split on integer / non-integer ═══════════ */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <Chip x={40} y={506} w={214} h={26} fill={CREAM} stroke={GREEN_DARK}
          textFill={GREEN_DARK} size={12.5} script={false}>
          {t("any ⌊x⌋ or {x} problem", "koi bhi ⌊x⌋ ya {x} problem")}
        </Chip>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.2)} d="M 147 532 L 115 550 M 147 532 L 301 550"
        stroke={GREEN_DARK} sw={1.9} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 1.9)}>
        <Chip x={40} y={550} w={150} h={24} fill={CREAM} stroke={BLUE}
          textFill={BLUE} size={11.5} script={false}>
          {t("x is an integer", "x integer hai")}
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 3.2)}>
        <Chip x={206} y={550} w={190} h={24} fill={CREAM} stroke={BLUE}
          textFill={BLUE} size={11.5} script={false}>
          {t("x is NOT an integer", "x integer NAHI hai")}
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 5)}>
        <T x={40} y={592} size={11.5} fill={MUTED} weight={700} anchor="start">
          {t("almost every such problem cracks open this way",
             "lagbhag har aisi problem isi tarah khulti hai")}
        </T>
      </Fade>

      {/* ═══════════ beat 7 — reflex ②: sawtooth against a line ═══════════ */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={560} y={494} size={12.5} fill={RED} weight={800} anchor="start">
          {t("{x} = a line? sketch it and count the crossings",
             "{x} = line? sketch karo, crossings count karo")}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 0.8)} d={arrowD(556, SWY, 856, SWY)} stroke={INK} sw={1.9} dur={0.6} />
      <Draw on={beat >= 7} delay={dl(7, 1.2)} d={arrowD(SWX, 594, SWX, 536)} stroke={INK} sw={1.9} dur={0.5} />
      <Draw on={beat >= 7} delay={dl(7, 1.6)} d={SAW_D} stroke={AMBER_DARK} sw={2.6} dur={1.2} />
      <Draw on={beat >= 7} delay={dl(7, 2.8)} d={LINE_D} stroke={BLUE} sw={2.4} dur={0.8} />
      <Fade on={beat >= 7} delay={dl(7, 3.6)}>
        <T x={860} y={546} size={12.5} fill={AMBER_DARK} weight={900} anchor="start">{"{x}"}</T>
        <T x={794} y={536} size={12} fill={BLUE} weight={900} anchor="start">
          {t("line", "line")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 4.3)}>
        {CROSSINGS.map((x, i) => (
          <Circle key={`cr${i}`} cx={swx(x)} cy={lineY(x)} r={4.8} fill={GREEN_DARK} />
        ))}
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 5.2)}>
        <T x={860} y={568} size={11.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("count these", "in crossings")}
        </T>
        <T x={860} y={592} size={11.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("crossings", "ko count karo")}
        </T>
      </Fade>
    </Scene>
  );
}
