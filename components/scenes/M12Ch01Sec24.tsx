/**
 * M12Ch01 · Section 24 — "Inverse of a rational (Mobius) function"
 * Subtopic: Composition and Inverse of Functions
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * f : ℝ − {3} → ℝ − {2},  f(x) = (2x − 1)/(x − 3).  The two excluded values
 * are the whole story, so the board draws the actual curve: both branches on
 * real axes with the vertical asymptote x = 3 and the horizontal asymptote
 * y = 2 marked — you can SEE why 3 leaves the domain and 2 leaves the range.
 * The algebra then runs down the right-hand column one gated line at a time,
 * and the closing check is drawn as the domain/range pair literally crossing
 * over between f and f⁻¹.
 *
 * Grid:
 *   y  30..96   title band
 *   y 110..390  the curve with its asymptotes (40..436) ·
 *               the swap-and-solve column (450..1044)
 *   y 400..544  the sanity check — four sets, two crossing arrows
 *   y 556..596  the closing line
 *
 * Beat map (8 segments, gates 0..7 — every beat used):
 *  0  "invert a rational function"                title + underline + subtitle + rule
 *  1  "f from ℝ−{3} to ℝ−{2}, one-one and onto"   axes, both branches, the two
 *                                                 dashed asymptotes, domain,
 *                                                 codomain, existence
 *  2  "set y equal to it, clear the fraction"     y = (2x−1)/(x−3) + the
 *                                                 cross-multiply sweep arrow
 *  3  "y(x−3) = 2x−1, gather the x terms"         both algebra lines, linked by
 *                                                 flow arrows down the column
 *  4  "solve for x"                               x = (3y−1)/(y−2)
 *  5  "swap y and x to name the inverse"          f⁻¹(x) = (3x−1)/(x−2), underlined,
 *                                                 with its domain
 *  6  "domain of f⁻¹ is the range of f, and back" four set boxes and the two
 *                                                 crossing arrows that match them
 *  7  "the swap holding is the confirmation"      the closing line
 *
 * Visual vocabulary (shared with Sections 22 and 23 of this subtopic):
 *   axes INK with arrowheads · the given function AMBER_DARK · derived results
 *   and the inverse GREEN_DARK · exclusions, asymptotes and headers RED ·
 *   asides MUTED · sets are CREAM boxes.
 */

import React from "react";
import { Circle, Line } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, arrowD,
  INK, MUTED, AMBER_DARK, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

/** rectangle as a drawable closed path */
const boxD = (x: number, y: number, w: number, h: number) =>
  `M ${x} ${y} H ${x + w} V ${y + h} H ${x} Z`;

/* ---- beat 1 : the curve frame, origin (150,300), 26 px per unit ---- */
const CX = 150, CY = 300, CS = 26;
const px = (x: number) => CX + CS * x;
const py = (y: number) => CY - CS * y;
const f = (x: number) => (2 * x - 1) / (x - 3);
const branch = (x0: number, x1: number) => {
  const pts: string[] = [];
  for (let i = 0; i <= 30; i++) {
    const x = x0 + ((x1 - x0) * i) / 30;
    pts.push(`${px(x).toFixed(1)} ${py(f(x)).toFixed(1)}`);
  }
  return `M ${pts.join(" L ")}`;
};
const LEFT_BRANCH = branch(-4, 2.04);
const RIGHT_BRANCH = branch(4.33, 10.4);

/** the cross-multiply sweep, drawn under the first equation */
const SWEEP_D =
  "M 490 180 C 520 202, 586 202, 628 182" +
  " M 621.2 190.6 L 628 182 L 617 181.8";

/* ---- beat 6 : the four set boxes ---- */
const BOX_L = 100, BOX_R = 700, BOX_W = 280;
const ROW1 = 448, ROW2 = 502, BOX_H = 42;

export default function M12Ch01Sec24({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ═══════════ beat 0 — framing ═══════════ */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={46} size={25} fill={RED} script>
          {t("Inverting a rational function — swap and solve",
             "Rational function ka inverse — swap karo aur solve karo")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.1)}
        d="M 300 62 C 460 58, 660 66, 780 60" stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 1.9)}>
        <T x={540} y={80} size={12.5} fill={MUTED} script>
          {t("the kind that appears constantly in JEE Main — handled carefully",
             "wo type jo JEE Main mein lagataar aata hai — careful tareeke se")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.8)} d="M 40 96 H 1044" stroke={MUTED} sw={1.2} dur={1} />

      {/* ═══════════ beat 1 — the curve and its two asymptotes ═══════════ */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={44} y={128} size={13.5} fill={RED} weight={800} anchor="start">
          ①  f(x) = (2x − 1)/(x − 3)
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.9)} d={arrowD(46, CY, 424, CY)} stroke={INK} sw={2} dur={0.7} />
      <Draw on={beat >= 1} delay={dl(1, 1.4)} d={arrowD(CX, 386, CX, 150)} stroke={INK} sw={2} dur={0.7} />
      <Fade on={beat >= 1} delay={dl(1, 1.9)}>
        <T x={430} y={305} size={12} fill={INK} weight={800} anchor="start">x</T>
        <T x={140} y={158} size={12} fill={INK} weight={800} anchor="end">y</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.3)}>
        <Line x1={px(3)} y1={150} x2={px(3)} y2={386}
          stroke={RED} strokeWidth={1.9} strokeDasharray="7 6" />
        <T x={222} y={152} size={12} fill={RED} weight={800} anchor="end">x = 3</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.9)}>
        <Line x1={46} y1={py(2)} x2={424} y2={py(2)}
          stroke={RED} strokeWidth={1.9} strokeDasharray="7 6" />
        <T x={44} y={238} size={12} fill={RED} weight={800} anchor="start">y = 2</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 3.5)} d={RIGHT_BRANCH} stroke={AMBER_DARK} sw={2.8} dur={1} />
      <Draw on={beat >= 1} delay={dl(1, 4.4)} d={LEFT_BRANCH} stroke={AMBER_DARK} sw={2.8} dur={1} />
      <Fade on={beat >= 1} delay={dl(1, 5.6)}>
        <T x={240} y={320} size={12.5} fill={INK} weight={700} anchor="start">
          {t("domain:  ℝ − {3}", "domain:  ℝ − {3}")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 6.3)}>
        <T x={240} y={344} size={12.5} fill={INK} weight={700} anchor="start">
          {t("codomain:  ℝ − {2}", "codomain:  ℝ − {2}")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 7.2)}>
        <T x={240} y={368} size={12.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("one-one, onto ⇒ f⁻¹ exists", "one-one aur onto ⇒ f⁻¹ hai")}
        </T>
      </Fade>

      {/* ═══════════ beat 2 — set y equal, clear the fraction ═══════════ */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={454} y={128} size={13.5} fill={RED} weight={800} anchor="start">
          {t("②  swap and solve — carefully", "②  swap and solve — dhyaan se")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.9)}>
        <T x={486} y={170} size={18} fill={INK} weight={800} anchor="start">y = (2x − 1)/(x − 3)</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 2)} d={SWEEP_D} stroke={AMBER_DARK} sw={2.2} dur={0.7} />
      <Fade on={beat >= 2} delay={dl(2, 3)}>
        <T x={706} y={170} size={12} fill={MUTED} weight={700} anchor="start">
          {t("clear the fraction", "fraction clear karo")}
        </T>
      </Fade>

      {/* ═══════════ beat 3 — multiply across, gather the x terms ═══════════ */}
      <Draw on={beat >= 3} delay={dl(3, 0.2)} d={arrowD(462, 186, 462, 206)} stroke={MUTED} sw={1.9} dur={0.3} />
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={486} y={222} size={18} fill={INK} weight={800} anchor="start">y (x − 3) = 2x − 1</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.4)}>
        <T x={706} y={222} size={12} fill={MUTED} weight={700} anchor="start">
          {t("multiply across", "across multiply karo")}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 3.2)} d={arrowD(462, 232, 462, 250)} stroke={MUTED} sw={1.9} dur={0.3} />
      <Fade on={beat >= 3} delay={dl(3, 3.7)}>
        <T x={486} y={262} size={18} fill={INK} weight={800} anchor="start">x (y − 2) = 3y − 1</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 4.6)}>
        <T x={706} y={262} size={12} fill={MUTED} weight={700} anchor="start">
          {t("gather the x terms", "x terms ikattha karo")}
        </T>
      </Fade>

      {/* ═══════════ beat 4 — solve for x ═══════════ */}
      <Draw on={beat >= 4} delay={dl(4, 0.2)} d={arrowD(462, 272, 462, 292)} stroke={MUTED} sw={1.9} dur={0.3} />
      <Fade on={beat >= 4} delay={dl(4, 0.7)}>
        <T x={486} y={306} size={18} fill={INK} weight={800} anchor="start">x = (3y − 1)/(y − 2)</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.7)}>
        <T x={706} y={306} size={12} fill={MUTED} weight={700} anchor="start">
          {t("solve for x", "x ke liye solve karo")}
        </T>
      </Fade>

      {/* ═══════════ beat 5 — swap, and name the inverse ═══════════ */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d={arrowD(462, 316, 462, 330)} stroke={MUTED} sw={1.9} dur={0.3} />
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={486} y={340} size={13.5} fill={INK} weight={700} anchor="start">
          {t("now swap y and x to name the inverse", "ab y aur x swap karke inverse ka naam do")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.8)}>
        <T x={486} y={372} size={20} fill={GREEN_DARK} weight={900} anchor="start">f⁻¹(x) = (3x − 1)/(x − 2)</T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 2.8)} d="M 486 382 H 750" stroke={GREEN_DARK} sw={2.4} dur={0.6} />
      <Fade on={beat >= 5} delay={dl(5, 3.6)}>
        <T x={790} y={372} size={13} fill={GREEN_DARK} weight={800} anchor="start">domain:  ℝ − {"{2}"}</T>
      </Fade>

      {/* ═══════════ beat 6 — the sanity check: the sets cross over ═══════════ */}
      <Draw on={beat >= 6} delay={dl(6, 0.1)} d="M 40 398 H 1044" stroke={MUTED} sw={1.1} dur={0.9} />
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <T x={44} y={422} size={13.5} fill={RED} weight={800} anchor="start">
          {t("③  the sanity check — the swap must hold", "③  sanity check — swap hold hona chahiye")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1)} d={boxD(BOX_L, ROW1, BOX_W, BOX_H)} stroke={AMBER_DARK} sw={2.2} dur={0.5} fill={CREAM} />
      <Fade on={beat >= 6} delay={dl(6, 1.5)}>
        <T x={BOX_L + BOX_W / 2} y={473} size={13} fill={AMBER_DARK} weight={800}>
          {t("domain of f  =  ℝ − {3}", "f ka domain  =  ℝ − {3}")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 2)} d={boxD(BOX_L, ROW2, BOX_W, BOX_H)} stroke={AMBER_DARK} sw={2.2} dur={0.5} fill={CREAM} />
      <Fade on={beat >= 6} delay={dl(6, 2.5)}>
        <T x={BOX_L + BOX_W / 2} y={527} size={13} fill={AMBER_DARK} weight={800}>
          {t("range of f  =  ℝ − {2}", "f ka range  =  ℝ − {2}")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 3)} d={boxD(BOX_R, ROW1, BOX_W, BOX_H)} stroke={GREEN_DARK} sw={2.2} dur={0.5} fill={CREAM} />
      <Fade on={beat >= 6} delay={dl(6, 3.5)}>
        <T x={BOX_R + BOX_W / 2} y={473} size={13} fill={GREEN_DARK} weight={800}>
          {t("domain of f⁻¹  =  ℝ − {2}", "f⁻¹ ka domain  =  ℝ − {2}")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 4)} d={boxD(BOX_R, ROW2, BOX_W, BOX_H)} stroke={GREEN_DARK} sw={2.2} dur={0.5} fill={CREAM} />
      <Fade on={beat >= 6} delay={dl(6, 4.5)}>
        <T x={BOX_R + BOX_W / 2} y={527} size={13} fill={GREEN_DARK} weight={800}>
          {t("range of f⁻¹  =  ℝ − {3}", "f⁻¹ ka range  =  ℝ − {3}")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 5.2)} d={arrowD(388, 523, 692, 469)} stroke={INK} sw={2} dur={0.7} />
      <Draw on={beat >= 6} delay={dl(6, 6)} d={arrowD(388, 469, 692, 523)} stroke={INK} sw={2} dur={0.7} />
      <Fade on={beat >= 6} delay={dl(6, 6.8)}>
        <T x={660} y={458} size={12.5} fill={GREEN_DARK} weight={900} anchor="end">ℝ − {"{2}"}</T>
        <T x={660} y={540} size={12.5} fill={GREEN_DARK} weight={900} anchor="end">ℝ − {"{3}"}</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 7.4)}>
        <Circle cx={540} cy={496} r={15} fill={CREAM} stroke={GREEN_DARK} strokeWidth={2} />
        <T x={540} y={502} size={17} fill={GREEN_DARK} weight={900}>✓</T>
      </Fade>

      {/* ═══════════ beat 7 — the confirmation ═══════════ */}
      <Draw on={beat >= 7} delay={dl(7, 0.1)} d="M 40 550 H 1044" stroke={MUTED} sw={1.2} dur={0.9} />
      <Fade on={beat >= 7} delay={dl(7, 0.7)}>
        <T x={540} y={572} size={17} fill={RED} script>
          {t("The domain-range swap holding is your built-in confirmation.",
             "Domain-range swap ka hold karna hi tumhara built-in confirmation hai.")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 2)}>
        <T x={540} y={593} size={12} fill={MUTED} weight={700}>
          {t("domain of f⁻¹ = range of f   ·   range of f⁻¹ = domain of f",
             "f⁻¹ ka domain = f ka range   ·   f⁻¹ ka range = f ka domain")}
        </T>
      </Fade>
    </Scene>
  );
}
