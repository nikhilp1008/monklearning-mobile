/**
 * M12Ch08 · Section 23 — "A lens from two inequalities"
 * Subtopic: Advanced Regions: Modulus, Inequalities & Composite Areas
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * Shared visual vocabulary for sections 22–24 (see M12Ch08Sec22 header):
 *   axes = four arrowD strokes out of one origin, INK · PRIMARY curve (the
 *   non-linear boundary, here the parabola) = AMBER_DARK · straight boundary
 *   (here the line) = BLUE · the region = GREEN fill at 0.16 · limits = ticks
 *   + dashed droppers + RED point dots · integration strips = GREEN_DARK
 *   hairlines standing inside the region.
 *
 * Beat map (8 segments, gates 0..7 — every beat used):
 *  0  "y at least x², at most x + 2"         title + underline + the two
 *                                            inequalities chip + bare axes
 *  1  "decode each condition into a side"    parabola + line plotted, the
 *                                            ABOVE / BELOW arrows on the
 *                                            figure, the GREEN lens shaded,
 *                                            the two decode lines
 *  2  "x² = x + 2 → x = −1, x = 2"           the algebra column, the two RED
 *                                            intersection dots on the figure
 *  3  "line is ceiling, parabola is floor"   ticks + dashed limit droppers at
 *                                            x = −1 and x = 2, one fat
 *                                            representative strip with its top
 *                                            and bottom called out
 *  4  "∫₋₁² (x + 2 − x²) dx, antiderivative" the whole family of thin strips
 *                                            sweeps the lens + the setup and
 *                                            the antiderivative
 *  5  "10/3, −7/6, 20/6 + 7/6 = 27/6"        the evaluation lines
 *  6  "that is 9/2 square units"             result chip + ring
 *  7  "the whole move was decoding"          divider + the two lesson lines
 *
 * Every number on the board is spoken in the segment that reveals it.
 */

import React from "react";
import { Circle, Path } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD, ringD,
  INK, INK_LIGHT, MUTED, AMBER_DARK, GREEN, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

const BLUE = "#0284c7";

/* ---- plot frame ---- */
const OX = 250;
const OY = 450;
const S = 58;
const px = (x: number) => OX + x * S;
const py = (y: number) => OY - y * S;

/** y = x² sampled as a polyline */
const parabolaD = (() => {
  const a = -1.8, b = 2.2, n = 44;
  let d = "";
  for (let i = 0; i <= n; i++) {
    const x = a + ((b - a) * i) / n;
    d += `${i === 0 ? "M" : "L"} ${px(x).toFixed(1)} ${py(x * x).toFixed(1)} `;
  }
  return d.trim();
})();

/** the lens: along the line from (−1,1) to (2,4), then back down the parabola */
const lensD = (() => {
  let d = `M ${px(-1)} ${py(1)} L ${px(2)} ${py(4)} `;
  const n = 36;
  for (let i = 0; i <= n; i++) {
    const x = 2 - (3 * i) / n; // 2 → −1
    d += `L ${px(x).toFixed(1)} ${py(x * x).toFixed(1)} `;
  }
  return d.trim() + " Z";
})();

/** thin strips sweeping the lens: bottom on the parabola, top on the line */
const STRIP_XS = [-0.75, -0.4, -0.05, 0.3, 0.65, 1.0, 1.35, 1.7, 1.95];
const stripD = (x: number) => `M ${px(x).toFixed(1)} ${py(x * x).toFixed(1)} V ${py(x + 2).toFixed(1)}`;

/** the one fat strip the voice points at first */
const XR = 1.2;

export default function M12Ch08Sec23({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ═══════════ beat 0 — the set, and the bare stage ═══════════ */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={44} size={25} fill={RED} script>
          {t("A lens from two inequalities", "Do inequalities se bana ek lens")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.1)}
        d="M 336 60 C 460 56, 616 64, 744 58" stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 1.8)}>
        <T x={540} y={82} size={13} fill={MUTED} script>
          {t("disguise two — a region handed to you as inequalities",
             "disguise do — region tumhe inequalities ke roop me mila hai")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 2.8)}>
        <Chip x={748} y={98} w={280} h={50} fill={CREAM} stroke={AMBER_DARK}
          textFill={INK} size={21} script={false}>
          x² ≤ y ≤ x + 2
        </Chip>
      </Fade>

      {/* bare axes */}
      <Draw on={beat >= 0} delay={dl(0, 3.8)} d={arrowD(OX, OY, 452, OY)} stroke={INK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 0} delay={dl(0, 4.1)} d={arrowD(OX, OY, 104, OY)} stroke={INK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 0} delay={dl(0, 4.4)} d={arrowD(OX, OY, OX, 158)} stroke={INK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 0} delay={dl(0, 4.7)} d={arrowD(OX, OY, OX, 502)} stroke={INK} sw={2.2} dur={0.5} />
      <Fade on={beat >= 0} delay={dl(0, 5.2)}>
        <T x={462} y={455} size={15} fill={INK} weight={800} anchor="start">x</T>
        <T x={OX} y={148} size={15} fill={INK} weight={800}>y</T>
        <T x={238} y={468} size={12.5} fill={MUTED} weight={700} anchor="end">O</T>
      </Fade>

      {/* ═══════════ beat 1 — decode each side, and the lens appears ═══════════ */}
      <Draw on={beat >= 1} delay={dl(1, 0.2)} d={parabolaD} stroke={AMBER_DARK} sw={2.8} dur={1.1} />
      <Fade on={beat >= 1} delay={dl(1, 1.2)}>
        <T x={px(-1.8) - 12} y={py(3.24) + 4} size={15} fill={AMBER_DARK} weight={800} anchor="end">y = x²</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.6)}
        d={`M ${px(-2.3).toFixed(1)} ${py(-0.3).toFixed(1)} L ${px(2.5).toFixed(1)} ${py(4.5).toFixed(1)}`}
        stroke={BLUE} sw={2.8} dur={0.9} />
      <Fade on={beat >= 1} delay={dl(1, 2.5)}>
        <T x={px(2.5) + 8} y={py(4.5) - 6} size={15} fill={BLUE} weight={800} anchor="start">y = x + 2</T>
      </Fade>
      {/* which side of each boundary */}
      <Draw on={beat >= 1} delay={dl(1, 3.0)}
        d={arrowD(px(-1.6), py(2.56) - 6, px(-1.6), py(2.56) - 48)} stroke={AMBER_DARK} sw={2} dur={0.35} />
      <Fade on={beat >= 1} delay={dl(1, 3.3)}>
        <T x={px(-1.6)} y={py(2.56) - 56} size={12} fill={AMBER_DARK} weight={800}>
          {t("above", "upar")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 3.6)}
        d={arrowD(px(2.35), py(4.35) + 6, px(2.35), py(4.35) + 44)} stroke={BLUE} sw={2} dur={0.35} />
      <Fade on={beat >= 1} delay={dl(1, 3.9)}>
        {/* label rides alongside the shaft, not under its tip — the beat-3
            "ceiling" callout owns the board just below this arrowhead */}
        <T x={px(2.35) + 10} y={py(4.35) + 18} size={12} fill={BLUE} weight={800} anchor="start">
          {t("below", "neeche")}
        </T>
      </Fade>
      {/* the overlap */}
      <Fade on={beat >= 1} delay={dl(1, 4.4)}>
        <Path d={lensD} fill={GREEN} opacity={0.16} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 5.0)}>
        <T x={490} y={118} size={15} fill={AMBER_DARK} weight={800} anchor="start">
          {t("y ≥ x²   →   ABOVE the parabola", "y ≥ x²   →   parabola ke UPAR")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 6.6)}>
        <T x={490} y={150} size={15} fill={BLUE} weight={800} anchor="start">
          {t("y ≤ x + 2   →   BELOW the line", "y ≤ x + 2   →   line ke NEECHE")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 8.4)}>
        <T x={490} y={188} size={14.5} fill={GREEN_DARK} script anchor="start">
          {t("their overlap is a LENS — line on top, parabola on the bottom",
             "inka overlap ek LENS hai — line upar, parabola neeche")}
        </T>
      </Fade>

      {/* ═══════════ beat 2 — intersect the boundaries ═══════════ */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={490} y={222} size={14} fill={RED} weight={800} anchor="start">
          {t("① LIMITS — intersect the boundaries",
             "① LIMITS — boundaries ko intersect karo")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.2)}>
        <T x={500} y={255} size={18} fill={INK} anchor="start">x²  =  x + 2</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.6)}>
        <T x={500} y={290} size={18} fill={INK} anchor="start">x² − x − 2  =  0</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 4.0)}>
        <T x={500} y={325} size={18} fill={INK_LIGHT} anchor="start">( x − 2 )( x + 1 )  =  0</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 5.4)}>
        <Chip x={490} y={344} w={274} h={40} fill={GREEN} stroke={GREEN_DARK}
          textFill={CREAM} size={18} script={false}>
          x = − 1   and   x = 2
        </Chip>
      </Fade>
      {/* the intersection points on the figure */}
      <Fade on={beat >= 2} delay={dl(2, 6.2)}>
        <Circle cx={px(-1)} cy={py(1)} r={5.6} fill={RED} />
        <Circle cx={px(2)} cy={py(4)} r={5.6} fill={RED} />
      </Fade>

      {/* ═══════════ beat 3 — ceiling, floor, and one strip ═══════════ */}
      <Draw on={beat >= 3} delay={dl(3, 0.2)} d={`M ${px(-1)} 444 V 456`} stroke={INK} sw={2} dur={0.2} />
      <Draw on={beat >= 3} delay={dl(3, 0.35)} d={`M ${px(2)} 444 V 456`} stroke={INK} sw={2} dur={0.2} />
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={px(-1)} y={474} size={14} fill={INK} weight={800}>− 1</T>
        <T x={px(2)} y={474} size={14} fill={INK} weight={800}>2</T>
        {/* dashed droppers from each intersection down to its limit */}
        <Path d={`M ${px(-1)} ${py(1)} V ${OY}`} stroke={MUTED} strokeWidth={1.6} strokeDasharray="6 5" fill="none" />
        <Path d={`M ${px(2)} ${py(4)} V ${OY}`} stroke={MUTED} strokeWidth={1.6} strokeDasharray="6 5" fill="none" />
      </Fade>
      {/* the representative strip */}
      <Draw on={beat >= 3} delay={dl(3, 1.4)} d={stripD(XR)} stroke={GREEN_DARK} sw={7} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 2.0)}>
        <Circle cx={px(XR)} cy={py(XR + 2)} r={4.4} fill={BLUE} />
        <Circle cx={px(XR)} cy={py(XR * XR)} r={4.4} fill={AMBER_DARK} />
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 2.4)}
        d={arrowD(px(XR) + 56, py(XR + 2) - 8, px(XR) + 8, py(XR + 2) - 1)} stroke={BLUE} sw={1.8} dur={0.35} />
      <Fade on={beat >= 3} delay={dl(3, 2.8)}>
        {/* flattened + dropped below the beat-1 "below" arrow so the two
            callouts no longer share the same 40px of board */}
        <T x={px(XR) + 64} y={py(XR + 2) - 2} size={12.5} fill={BLUE} weight={800} anchor="start">
          {t("ceiling", "ceiling")}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 3.2)}
        d={arrowD(px(XR) + 74, py(XR * XR) + 26, px(XR) + 10, py(XR * XR) + 4)} stroke={AMBER_DARK} sw={1.8} dur={0.35} />
      <Fade on={beat >= 3} delay={dl(3, 3.6)}>
        <T x={px(XR) + 80} y={py(XR * XR) + 30} size={12.5} fill={AMBER_DARK} weight={800} anchor="start">
          {t("floor", "floor")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 4.2)}>
        <T x={490} y={412} size={14} fill={RED} weight={800} anchor="start">
          {t("② WHO IS ON TOP?", "② UPAR kaun hai?")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 5.0)}>
        <T x={500} y={444} size={16} fill={BLUE} anchor="start">
          {t("ceiling:   y = x + 2", "ceiling:   y = x + 2")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 6.0)}>
        <T x={500} y={476} size={16} fill={AMBER_DARK} anchor="start">
          {t("floor:   y = x²", "floor:   y = x²")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 7.0)}>
        <T x={490} y={512} size={13} fill={MUTED} script anchor="start">
          {t("between x = − 1 and x = 2", "x = − 1 aur x = 2 ke beech")}
        </T>
      </Fade>

      {/* ═══════════ beat 4 — sweep the strips, set up, antidifferentiate ═══ */}
      {STRIP_XS.map((x, i) => (
        <Draw key={`st${i}`} on={beat >= 4} delay={dl(4, 0.2 + i * 0.13)}
          d={stripD(x)} stroke={GREEN_DARK} sw={3} dur={0.3} />
      ))}
      <Fade on={beat >= 4} delay={dl(4, 1.8)}>
        <T x={790} y={224} size={14} fill={RED} weight={800} anchor="start">
          {t("③ SET UP, THEN ANTIDIFFERENTIATE",
             "③ SET UP karo, phir ANTIDIFFERENTIATE")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 3.0)}>
        <T x={790} y={258} size={18} fill={INK} anchor="start">A = ∫₋₁² ( x + 2 − x² ) dx</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 5.6)}>
        <T x={790} y={292} size={17} fill={INK_LIGHT} anchor="start">= [ x²/2 + 2x − x³/3 ] ₋₁²</T>
      </Fade>

      {/* ═══════════ beat 5 — evaluate at both limits ═══════════ */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={790} y={326} size={16} fill={INK} anchor="start">at x = 2   →   10/3</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2.0)}>
        <T x={790} y={358} size={16} fill={INK} anchor="start">at x = − 1   →   − 7/6</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 4.4)}>
        <T x={790} y={390} size={16} fill={INK_LIGHT} anchor="start">10/3 − ( − 7/6 ) = 20/6 + 7/6</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 7.0)}>
        <T x={790} y={425} size={19} fill={GREEN_DARK} anchor="start">= 27/6</T>
      </Fade>

      {/* ═══════════ beat 6 — the simplified answer ═══════════ */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <Chip x={790} y={450} w={236} h={52} fill={CREAM} stroke={GREEN_DARK}
          textFill={GREEN_DARK} size={22} script={false}>
          = 9/2 sq units
        </Chip>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.2)} d={ringD(908, 476, 128, 34)} stroke={RED} sw={2.2} dur={0.7} />

      {/* ═══════════ beat 7 — the lesson ═══════════ */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 44 526 H 1036" stroke={MUTED} sw={1.3} dur={0.8} />
      <Fade on={beat >= 7} delay={dl(7, 1.0)}>
        <T x={44} y={550} size={12.5} fill={INK} script anchor="start">
          {t("the whole move was decoding: turn each inequality into a SIDE of its boundary",
             "poora move decoding tha: har inequality ko uski boundary ka ek SIDE banao")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 2.6)}>
        <T x={44} y={588} size={12.5} fill={RED} script anchor="start">
          {t("— and the problem collapses into a plain between-curves calculation",
             "— aur problem ek plain between-curves calculation me collapse ho jaata hai")}
        </T>
      </Fade>
    </Scene>
  );
}
