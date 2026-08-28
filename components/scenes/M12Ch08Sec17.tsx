/**
 * M12Ch08 · Section 17 — "Area between curves: the ISSI routine"
 * Subtopic: Area between Two Curves
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * Five traps, then the pro-tip, then the mnemonic. A list of five sentences
 * would be a failure here: every trap is a STATEMENT ABOUT A PICTURE, so each
 * one gets its own little region drawn — two curves, the shaded strip of area
 * between them, and the exact mark that shows the trap (the sample ordinate,
 * the intersection limits, the crossing where the roles swap, the horizontal
 * strip, the non-mirrored halves). The pro-tip gets two more figures: a region
 * whose SIDES are curves (→ dy) and one whose TOP AND BOTTOM are curves (→ dx).
 *
 * Visual vocabulary (shared with Sec 16 and Sec 18):
 *   AMBER_DARK = first curve f   ·   BLUE = second curve g
 *   GREEN fill @0.16 = the region between them
 *   strips = GREEN @0.34 outlined in GREEN_DARK
 *   RED = intersections, limits, crossings and everything you get wrong
 *
 * Layout: five trap panels (3 across, then 2 across), a pro-tip band, and the
 * I S S I chip strip along the bottom.
 *
 * Beat map (8 segments, gates 0..7 — every beat used):
 *  0  "close the subtopic with its traps"      title + underline + subtitle +
 *                                              the five empty trap panels
 *  1  "bottom − top flips the sign; plug in    panel ①: f above g, region shaded,
 *      one sample x"                           the sample ordinate drawn between
 *                                              them, crossed-out "bottom − top"
 *  2  "the limits ARE the intersections,       panel ②: a U-curve cut by a
 *      never copied from the question"         horizontal g, both crossings dotted,
 *                                              dashed drops to a and b on the axis
 *  3  "if the curves cross inside, the roles   panel ③: two crossing lines, the two
 *      switch — integrate |f − g|"             lobes shaded, the split at c, the
 *                                              "g on top / f on top" labels
 *  4  "sideways parabolas are cleaner in y,    panel ④: x = y² capped by x = 4,
 *      right − left"                           four HORIZONTAL strips, crossed-out
 *                                              "forcing dx"
 *  5  "doubling a half only works if the       panel ⑤: a visibly lop-sided region
 *      region really is symmetric"             straddling the axis, crossed-out ×2
 *  6  "pick the variable by the boundaries"    the pro-tip band: the dy figure
 *                                              (curved sides) and the dx figure
 *                                              (curved top and bottom), each with
 *                                              its strip
 *  7  "I S S I — Intersect, Sketch, Sample,    the four mnemonic chips + the
 *      Integrate top − bottom"                 closing rule
 */

import React from "react";
import { Circle, Path, Rect } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  arrowD,
  crossD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  GREEN_DARK,
  RED,
  CREAM,
  PAPER,
  Scene,
} from '@/components/scenes/kit';

const BLUE = "#0284c7";

/** the five trap panels: [x, y, w, h] */
const PANELS: [number, number, number, number][] = [
  [36, 88, 326, 208],
  [378, 88, 326, 208],
  [720, 88, 324, 208],
  [36, 306, 484, 138],
  [536, 306, 508, 138],
];

/** panel ④ — the sideways parabola x = y², origin (108, 392) */
const P4X = 108;
const P4Y = 392;
const P4SX = 18;
const P4SY = 25;
const sideParaPts = Array.from({ length: 33 }, (_, i) => {
  const y = -2 + (4 * i) / 32;
  return [P4X + P4SX * y * y, P4Y - P4SY * y] as [number, number];
});
/** open arc — this is what gets STROKED in AMBER_DARK (no closing chord) */
const sideParaD = sideParaPts
  .map(([x, y], i) => `${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`)
  .join(" ");
/** closed variant — fill only; the Z is the boundary x = 4, drawn in BLUE */
const sideParaFillD = sideParaD + " Z";
/** horizontal strips inside it: from the parabola across to the line x = 4 */
const P4STRIPS = [1.3, 0.55, -0.55, -1.3];

export default function M12Ch08Sec17({
  currentTime,
  reveals,
  language,
}: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ═══════════ beat 0 — title and the five empty slots ═══════════ */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={44} size={25} fill={RED} script>
          {t(
            "Five traps — and the routine that beats them",
            "Paanch traps — aur woh routine jo inhe haraati hai"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 1)}
        d="M 306 58 C 460 53, 640 63, 774 56"
        stroke={RED}
        sw={2.2}
        dur={0.7}
      />
      <Fade on={beat >= 0} delay={dl(0, 1.8)}>
        <T x={540} y={76} size={12.5} fill={MUTED} script>
          {t(
            "closing the second subtopic: every one of these is a picture you mis-read, not algebra you got wrong",
            "doosra subtopic band: har trap ek picture hai jo galat padhi gayi, algebra nahi"
          )}
        </T>
      </Fade>
      {PANELS.map(([x, y, w, h], i) => (
        <Fade key={`pnl${i}`} on={beat >= 0} delay={dl(0, 2.4 + i * 0.25)}>
          <Rect x={x} y={y} width={w} height={h} rx={14} fill={CREAM} opacity={0.5} />
        </Fade>
      ))}

      {/* ═══════════ beat 1 — trap ①: wrong subtraction order ═══════════ */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={48} y={110} size={13} fill={RED} weight={800} anchor="start">
          {t("① SUBTRACTING IN THE WRONG ORDER", "① GALAT ORDER MEIN SUBTRACT KARNA")}
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.9)}
        d={arrowD(64, 244, 344, 244)}
        stroke={INK}
        sw={2.2}
        dur={0.5}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 1.2)}
        d={arrowD(64, 250, 64, 118)}
        stroke={INK}
        sw={2.2}
        dur={0.5}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 1.6)}
        d="M 84 184 C 154 150, 244 160, 330 136"
        stroke={AMBER_DARK}
        sw={2.6}
        dur={0.7}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 2.1)}
        d="M 84 226 C 154 216, 244 208, 330 198"
        stroke={BLUE}
        sw={2.6}
        dur={0.7}
      />
      <Fade on={beat >= 1} delay={dl(1, 2.8)}>
        <Path
          d="M 84 184 C 154 150, 244 160, 330 136 L 330 198 C 244 208, 154 216, 84 226 Z"
          fill={GREEN}
          opacity={0.16}
        />
        <T x={338} y={132} size={14} fill={AMBER_DARK} weight={900} anchor="start">
          f
        </T>
        <T x={338} y={204} size={14} fill={BLUE} weight={900} anchor="start">
          g
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.4)}>
        <Path
          d="M 201 212 V 156"
          stroke={RED}
          strokeWidth={1.8}
          strokeDasharray="6 5"
          fill="none"
        />
        <Circle cx={201} cy={156} r={4.5} fill={AMBER_DARK} />
        <Circle cx={201} cy={212} r={4.5} fill={BLUE} />
        <T x={262} y={262} size={11} fill={RED} weight={800} anchor="start">
          {t("one sample x", "ek sample x")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 4.6)}>
        <T x={252} y={190} size={12.5} fill={GREEN_DARK} weight={900} anchor="start">
          f − g ✓
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 6)}>
        <T x={48} y={272} size={13} fill={RED} weight={800} anchor="start">
          {t("bottom − top", "bottom − top")}
        </T>
        <T x={148} y={272} size={12.5} fill={RED} weight={700} anchor="start">
          {t("→ a NEGATIVE area", "→ NEGATIVE area")}
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 7)}
        d={crossD(44, 260, 92, 16)}
        stroke={RED}
        sw={2}
        dur={0.35}
      />
      <Fade on={beat >= 1} delay={dl(1, 7.8)}>
        <T x={48} y={290} size={12} fill={INK} weight={700} anchor="start">
          {t(
            "plug in ONE sample x to fix which curve is higher",
            "ek sample x daalkar fix karo ki kaunsa curve upar hai"
          )}
        </T>
      </Fade>

      {/* ═══════════ beat 2 — trap ②: inventing the limits ═══════════ */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={390} y={110} size={13} fill={RED} weight={800} anchor="start">
          {t("② INVENTING THE LIMITS", "② LIMITS KHUD SE BANA LENA")}
        </T>
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 0.9)}
        d={arrowD(406, 244, 690, 244)}
        stroke={INK}
        sw={2.2}
        dur={0.5}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 1.2)}
        d={arrowD(406, 250, 406, 118)}
        stroke={INK}
        sw={2.2}
        dur={0.5}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 1.6)}
        d="M 420 150 C 486 236, 578 236, 682 150"
        stroke={AMBER_DARK}
        sw={2.6}
        dur={0.8}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 2.4)}
        d="M 420 191 L 682 191"
        stroke={BLUE}
        sw={2.6}
        dur={0.6}
      />
      <Fade on={beat >= 2} delay={dl(2, 3.1)}>
        <T x={690} y={146} size={14} fill={AMBER_DARK} weight={900} anchor="start">
          f
        </T>
        <T x={690} y={187} size={14} fill={BLUE} weight={900} anchor="start">
          g
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3.6)}>
        <Path
          d="M 462.6 191 L 621.2 191 Q 531.6 238 462.6 191 Z"
          fill={GREEN}
          opacity={0.16}
        />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 4.4)}>
        <Path
          d="M 462.6 191 V 244"
          stroke={RED}
          strokeWidth={1.8}
          strokeDasharray="6 5"
          fill="none"
        />
        <Path
          d="M 621.2 191 V 244"
          stroke={RED}
          strokeWidth={1.8}
          strokeDasharray="6 5"
          fill="none"
        />
        <Circle cx={462.6} cy={191} r={5.5} fill={RED} stroke={PAPER} strokeWidth={1.8} />
        <Circle cx={621.2} cy={191} r={5.5} fill={RED} stroke={PAPER} strokeWidth={1.8} />
        <T x={462.6} y={262} size={13} fill={RED} weight={900}>
          a
        </T>
        <T x={621.2} y={262} size={13} fill={RED} weight={900}>
          b
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 6.4)}>
        <T x={390} y={276} size={12} fill={GREEN_DARK} weight={800} anchor="start">
          {t(
            "the limits ARE the intersections: solve  f(x) = g(x)",
            "limits hi intersections hain: solve karo  f(x) = g(x)"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 9)}>
        <T x={390} y={293} size={12} fill={RED} weight={700} anchor="start">
          {t("numbers copied from the question", "question se copy kiye numbers")}
        </T>
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 10)}
        d={crossD(386, 281, 192, 16)}
        stroke={RED}
        sw={2}
        dur={0.35}
      />

      {/* ═══════════ beat 3 — trap ③: integrating across a swap ═══════════ */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={732} y={110} size={13} fill={RED} weight={800} anchor="start">
          {t("③ INTEGRATING ACROSS A SWAP", "③ SWAP KE AAR-PAAR INTEGRATE KARNA")}
        </T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 0.9)}
        d={arrowD(744, 244, 1032, 244)}
        stroke={INK}
        sw={2.2}
        dur={0.5}
      />
      <Draw
        on={beat >= 3}
        delay={dl(3, 1.2)}
        d={arrowD(744, 250, 744, 118)}
        stroke={INK}
        sw={2.2}
        dur={0.5}
      />
      <Draw
        on={beat >= 3}
        delay={dl(3, 1.6)}
        d="M 760 226 L 1016 150"
        stroke={AMBER_DARK}
        sw={2.6}
        dur={0.7}
      />
      <Draw
        on={beat >= 3}
        delay={dl(3, 2.1)}
        d="M 760 152 L 1016 232"
        stroke={BLUE}
        sw={2.6}
        dur={0.7}
      />
      <Fade on={beat >= 3} delay={dl(3, 2.8)}>
        <Path d="M 760 152 L 881.4 190 L 760 226 Z" fill={GREEN} opacity={0.18} />
        <Path d="M 881.4 190 L 1016 150 L 1016 232 Z" fill={GREEN} opacity={0.18} />
        <T x={1024} y={146} size={14} fill={AMBER_DARK} weight={900} anchor="start">
          f
        </T>
        <T x={1024} y={238} size={14} fill={BLUE} weight={900} anchor="start">
          g
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 3.6)}>
        <Path
          d="M 881.4 190 V 244"
          stroke={RED}
          strokeWidth={1.8}
          strokeDasharray="6 5"
          fill="none"
        />
        <Circle cx={881.4} cy={190} r={5.5} fill={RED} stroke={PAPER} strokeWidth={1.8} />
        <T x={881.4} y={262} size={13} fill={RED} weight={900}>
          c
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 4.6)}>
        <T x={796} y={196} size={11} fill={BLUE} weight={800} anchor="start">
          {t("g on top", "g upar")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 5.2)}>
        <T x={938} y={198} size={11} fill={AMBER_DARK} weight={800} anchor="start">
          {t("f on top", "f upar")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 6.4)}>
        <T x={732} y={276} size={12} fill={GREEN_DARK} weight={800} anchor="start">
          {t(
            "roles SWITCH at the crossing → integrate | f − g |",
            "crossing par roles SWITCH → integrate karo | f − g |"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 9)}>
        <T x={732} y={293} size={12} fill={INK} weight={700} anchor="start">
          {t(
            "split the interval at every crossing point",
            "har crossing point par interval split karo"
          )}
        </T>
      </Fade>

      {/* ═══════════ beat 4 — trap ④: the wrong variable ═══════════ */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={48} y={325} size={13} fill={RED} weight={800} anchor="start">
          {t("④ FIGHTING THE GEOMETRY WITH dx", "④ GALAT VARIABLE SE GEOMETRY SE LADNA")}
        </T>
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.9)}
        d={arrowD(84, P4Y, 250, P4Y)}
        stroke={INK}
        sw={2.2}
        dur={0.5}
      />
      <Draw
        on={beat >= 4}
        delay={dl(4, 1.2)}
        d={arrowD(P4X, 440, P4X, 338)}
        stroke={INK}
        sw={2.2}
        dur={0.5}
      />
      <Draw
        on={beat >= 4}
        delay={dl(4, 1.6)}
        d={sideParaD}
        stroke={AMBER_DARK}
        sw={2.6}
        dur={1}
      />
      <Draw
        on={beat >= 4}
        delay={dl(4, 2.4)}
        d={`M ${P4X + P4SX * 4} ${P4Y - P4SY * 2} L ${P4X + P4SX * 4} ${
          P4Y + P4SY * 2
        }`}
        stroke={BLUE}
        sw={2.6}
        dur={0.5}
      />
      <Fade on={beat >= 4} delay={dl(4, 3)}>
        <Path d={sideParaFillD} fill={GREEN} opacity={0.16} />
        {/* label sits in the empty corridor left of the parabola's upper arm,
            on the same side of the y-axis as the curve it names */}
        <T x={120} y={346} size={11.5} fill={AMBER_DARK} weight={800} anchor="start">
          x = y²
        </T>
        <T x={188} y={356} size={11.5} fill={BLUE} weight={800} anchor="start">
          x = 4
        </T>
      </Fade>
      {P4STRIPS.map((y, i) => {
        const left = P4X + P4SX * y * y;
        const right = P4X + P4SX * 4;
        return (
          <Fade key={`hs${y}`} on={beat >= 4} delay={dl(4, 3.6 + i * 0.25)}>
            <Rect
              x={left}
              y={P4Y - P4SY * y - 4.5}
              width={right - left}
              height={9}
              fill={GREEN}
              opacity={0.4}
              stroke={GREEN_DARK}
              strokeWidth={1.2}
            />
          </Fade>
        );
      })}
      <Fade on={beat >= 4} delay={dl(4, 5)}>
        <T x={268} y={350} size={12.5} fill={INK} weight={700} anchor="start">
          {t(
            "sideways parabolas & left-right",
            "sideways parabolas aur left-right"
          )}
        </T>
        <T x={268} y={371} size={12.5} fill={INK} weight={700} anchor="start">
          {t(
            "capped regions are cleaner in y",
            "capped regions y mein cleaner hain"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 7.6)}>
        <T x={268} y={396} size={14} fill={GREEN_DARK} weight={900} anchor="start">
          {t("→ integrate  right − left,  dy", "→ integrate right − left, dy")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 10)}>
        <T x={268} y={418} size={12} fill={RED} weight={700} anchor="start">
          {t("forcing dx", "dx zabardasti")}
        </T>
        <T x={268} y={440} size={12} fill={RED} weight={700} anchor="start">
          {t("= needless two-branch casework", "= faltu two-branch casework")}
        </T>
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 11)}
        d={crossD(264, 409, 84, 12)}
        stroke={RED}
        sw={2}
        dur={0.35}
      />

      {/* ═══════════ beat 5 — trap ⑤: false symmetry ═══════════ */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={548} y={328} size={13} fill={RED} weight={800} anchor="start">
          {t("⑤ ASSUMING FALSE SYMMETRY", "⑤ JHOOTHI SYMMETRY MAAN LENA")}
        </T>
      </Fade>
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.9)}
        d={arrowD(560, 386, 800, 386)}
        stroke={INK}
        sw={2.2}
        dur={0.5}
      />
      <Draw
        on={beat >= 5}
        delay={dl(5, 1.4)}
        d="M 584 344 C 640 320, 700 336, 772 350"
        stroke={AMBER_DARK}
        sw={2.6}
        dur={0.7}
      />
      <Draw
        on={beat >= 5}
        delay={dl(5, 2)}
        d="M 584 404 C 640 416, 700 410, 772 396"
        stroke={BLUE}
        sw={2.6}
        dur={0.7}
      />
      <Fade on={beat >= 5} delay={dl(5, 2.7)}>
        <Path
          d="M 584 344 C 640 320, 700 336, 772 350 L 772 396 C 700 410, 640 416, 584 404 Z"
          fill={GREEN}
          opacity={0.16}
        />
        <T x={672} y={366} size={11} fill={INK} weight={800}>
          {t("upper half", "upper half")}
        </T>
        <T x={672} y={402} size={11} fill={INK} weight={800}>
          {t("lower half", "lower half")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 4)}>
        <T x={560} y={438} size={16} fill={RED} weight={900} anchor="start">
          × 2
        </T>
        <T x={614} y={438} size={12} fill={RED} weight={700} anchor="start">
          {t("the halves are NOT mirrored", "dono halves mirrored NAHI hain")}
        </T>
      </Fade>
      <Draw
        on={beat >= 5}
        delay={dl(5, 5)}
        d={crossD(556, 424, 40, 18)}
        stroke={RED}
        sw={2.2}
        dur={0.35}
      />
      <Fade on={beat >= 5} delay={dl(5, 6)}>
        <T x={816} y={352} size={12.5} fill={INK} weight={700} anchor="start">
          {t("doubling a half-area works ONLY", "half-area double karna TABHI")}
        </T>
        <T x={816} y={372} size={12.5} fill={INK} weight={700} anchor="start">
          {t("if the region really IS symmetric", "chalta hai jab region us axis ke")}
        </T>
        <T x={816} y={392} size={12.5} fill={INK} weight={700} anchor="start">
          {t("about that axis.", "baare mein sach mein symmetric ho")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 8.6)}>
        <T x={816} y={420} size={12.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("verify BEFORE you halve the work", "kaam aadha karne se PEHLE verify")}
        </T>
      </Fade>

      {/* ═══════════ beat 6 — the pro-tip: match the strip to the geometry ═══════════ */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.2)}
        d="M 36 450 H 1044"
        stroke={MUTED}
        sw={1.3}
        dur={0.9}
      />
      <Fade on={beat >= 6} delay={dl(6, 0.9)}>
        <T x={36} y={470} size={13.5} fill={RED} weight={800} anchor="start">
          {t(
            "⑥ PRO-TIP — PICK THE VARIABLE BY THE BOUNDARIES",
            "⑥ PRO-TIP — VARIABLE BOUNDARIES SE CHUNO"
          )}
        </T>
        <T x={1044} y={470} size={12} fill={MUTED} weight={700} anchor="end">
          {t("match the strip to the geometry", "strip ko geometry se match karo")}
        </T>
      </Fade>
      {/* the dy figure: curved sides, horizontal top and bottom */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 1.8)}
        d="M 66 488 L 150 488"
        stroke={INK}
        sw={2.2}
        dur={0.3}
      />
      <Draw
        on={beat >= 6}
        delay={dl(6, 2)}
        d="M 58 532 L 158 532"
        stroke={INK}
        sw={2.2}
        dur={0.3}
      />
      <Draw
        on={beat >= 6}
        delay={dl(6, 2.2)}
        d="M 66 488 C 48 504, 48 518, 58 532"
        stroke={AMBER_DARK}
        sw={2.4}
        dur={0.4}
      />
      <Draw
        on={beat >= 6}
        delay={dl(6, 2.4)}
        d="M 150 488 C 168 504, 168 518, 158 532"
        stroke={BLUE}
        sw={2.4}
        dur={0.4}
      />
      <Fade on={beat >= 6} delay={dl(6, 2.9)}>
        <Path
          d="M 66 488 L 150 488 C 168 504, 168 518, 158 532 L 58 532 C 48 518, 48 504, 66 488 Z"
          fill={GREEN}
          opacity={0.16}
        />
        <Rect
          x={51.5}
          y={506.5}
          width={113}
          height={8.5}
          fill={GREEN}
          opacity={0.42}
          stroke={GREEN_DARK}
          strokeWidth={1.2}
        />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 3.6)}>
        <T x={190} y={500} size={12} fill={INK} weight={700} anchor="start">
          {t(
            "sides are the CURVES, top & bottom horizontal",
            "sides curves hain, top aur bottom horizontal"
          )}
        </T>
        <T x={190} y={524} size={14} fill={GREEN_DARK} weight={900} anchor="start">
          {t("→ use  dy,   right − left", "→ use karo  dy,   right − left")}
        </T>
      </Fade>
      {/* the dx figure: curved top and bottom, vertical sides */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 5)}
        d="M 566 490 L 566 530"
        stroke={INK}
        sw={2.2}
        dur={0.3}
      />
      <Draw
        on={beat >= 6}
        delay={dl(6, 5.2)}
        d="M 656 486 L 656 534"
        stroke={INK}
        sw={2.2}
        dur={0.3}
      />
      <Draw
        on={beat >= 6}
        delay={dl(6, 5.4)}
        d="M 566 490 C 596 476, 626 498, 656 486"
        stroke={AMBER_DARK}
        sw={2.4}
        dur={0.4}
      />
      <Draw
        on={beat >= 6}
        delay={dl(6, 5.6)}
        d="M 566 530 C 596 542, 626 520, 656 534"
        stroke={BLUE}
        sw={2.4}
        dur={0.4}
      />
      <Fade on={beat >= 6} delay={dl(6, 6.1)}>
        <Path
          d="M 566 490 C 596 476, 626 498, 656 486 L 656 534 C 626 520, 596 542, 566 530 Z"
          fill={GREEN}
          opacity={0.16}
        />
        <Rect
          x={606.5}
          y={487}
          width={9}
          height={44.5}
          fill={GREEN}
          opacity={0.42}
          stroke={GREEN_DARK}
          strokeWidth={1.2}
        />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 6.8)}>
        <T x={694} y={500} size={12} fill={INK} weight={700} anchor="start">
          {t(
            "top & bottom are the CURVES, sides vertical",
            "top aur bottom curves hain, sides vertical"
          )}
        </T>
        <T x={694} y={524} size={14} fill={GREEN_DARK} weight={900} anchor="start">
          {t("→ use  dx,   top − bottom", "→ use karo  dx,   top − bottom")}
        </T>
      </Fade>

      {/* ═══════════ beat 7 — I S S I ═══════════ */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Chip
          x={36}
          y={546}
          w={240}
          h={32}
          fill={CREAM}
          stroke={GREEN_DARK}
          textFill={GREEN_DARK}
          size={12.5}
          script={false}
        >
          {t("I — Intersect for the limits", "I — limits ke liye Intersect")}
        </Chip>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 2)}>
        <Chip
          x={292}
          y={546}
          w={240}
          h={32}
          fill={CREAM}
          stroke={GREEN_DARK}
          textFill={GREEN_DARK}
          size={12.5}
          script={false}
        >
          {t("S — Sketch both curves", "S — dono curves Sketch karo")}
        </Chip>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 3.6)}>
        <Chip
          x={548}
          y={546}
          w={240}
          h={32}
          fill={CREAM}
          stroke={GREEN_DARK}
          textFill={GREEN_DARK}
          size={12.5}
          script={false}
        >
          {t("S — Sample one interior point", "S — ek interior point Sample karo")}
        </Chip>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 5.4)}>
        <Chip
          x={804}
          y={546}
          w={240}
          h={32}
          fill={CREAM}
          stroke={GREEN_DARK}
          textFill={GREEN_DARK}
          size={12.5}
          script={false}
        >
          {t("I — Integrate  top − bottom", "I — Integrate karo  top − bottom")}
        </Chip>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 7.4)}>
        <T x={540} y={594} size={15} fill={RED} script>
          {t(
            "always TOP − BOTTOM · every strip · every time",
            "hamesha TOP − BOTTOM · har strip · har baar"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
