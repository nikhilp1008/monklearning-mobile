/**
 * M12Ch08 · Section 10 — "Top minus bottom: area between two curves"
 * Subtopic: Area between Two Curves
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * VISUAL VOCABULARY (shared with Sections 11 and 12 of this subtopic):
 *   · every panel gets real axes drawn with arrowD, origin at the panel's
 *     bottom-left, "O" / "x" / "y" labelled.
 *   · the UPPER (primary) curve f is RED; the LOWER curve g is BLUE.
 *   · the region between them is ONE <Path> filled GREEN at low opacity.
 *   · elementary strips are AMBER rects with an AMBER_DARK hairline.
 *   · where the curves swap roles the "wrong-way" lobe is tinted AMBER
 *     instead of GREEN, so a sign flip reads as a colour change.
 *   · the circled numerals ①②③ are PANEL indices and nothing else. The
 *     voice's ordinals ("First: ...", "Second: ...") are spelled out in
 *     words — "first wrinkle" / "second wrinkle" — so that a numeral on the
 *     board is never mistaken for an ordinal the student just heard.
 *
 * Beat map (8 segments, gates 0..7 — every beat used):
 *  0  "the axis is nothing special — it is just the flat line y = 0"
 *       title + underline + subtitle, the bare axes, the y = 0 tag on the
 *       x-axis, and the old-floor/new-floor chip
 *  1  "two railway tracks over a hilly stretch — slice into thin pieces"
 *       the upper track (RED), the lower track (BLUE), the sandwiched
 *       region shaded GREEN, nine paper-thin vertical strips. The voice has
 *       not said "f" or "g" yet, so neither track is named on this beat.
 *  2  "the height is the GAP, top minus bottom; width dx; area = gap × dx"
 *       the tracks are NAMED here — y = f(x) / y = g(x) with their leader
 *       arrows — because this is the first segment that speaks f and g;
 *       then one strip fattened and outlined, two measure arrows across the
 *       gap, the dashed drop-line, the dx bracket, and dA = (f − g) dx
 *  3  "add every strip from x = a to x = b"
 *       a and b dropped to the axis with ticks + meeting dots, the master
 *       formula, and the f ≥ g proviso chip
 *  4  "the single-curve case is this formula with g(x) = 0"
 *       divider + panel ①: one curve shaded down to the axis, the axis
 *       itself redrawn thick in BLUE as the bottom curve
 *  5  "the limits are the intersection points — solve f(x) = g(x)"
 *       panel ②: two curves meeting twice, both crossings ringed, strips
 *       that visibly shrink to zero at the ends, a and b on the axis
 *  6  "which curve is on top? test one sample x"
 *       the sample-x test line inside panel ②, a dot on each curve
 *  7  "they can swap roles — split at every crossing"
 *       panel ③: one crossing, the two lobes tinted differently, the split
 *       line, g − f on the left and f − g on the right
 */

import React from "react";
import { Circle, Path, Rect, TSpan } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  arrowD,
  ringD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  GREEN_DARK,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

const BLUE = "#0284c7";

/* ---------- sampling helpers ---------- */

const pathOf = (
  xf: (t: number) => number,
  yf: (t: number) => number,
  t0 = 0,
  t1 = 1,
  n = 48
) => {
  let d = "";
  for (let i = 0; i <= n; i++) {
    const t = t0 + ((t1 - t0) * i) / n;
    d += (i ? " L " : "M ") + xf(t).toFixed(1) + " " + yf(t).toFixed(1);
  }
  return d;
};

/** closed band between a top curve and a bottom curve over the same x-map */
const bandOf = (
  xf: (t: number) => number,
  top: (t: number) => number,
  bot: (t: number) => number,
  n = 48
) =>
  pathOf(xf, top, 0, 1, n) +
  " " +
  pathOf(xf, bot, 1, 0, n).replace(/^M/, "L") +
  " Z";

/** ∫ with stacked limits, for use inside a <T> */
function Int({ lo, hi, s }: { lo: string; hi: string; s: number }) {
  return (
    <TSpan>
      ∫
      <TSpan fontSize={s * 0.5} dy={-s * 0.42}>
        {hi}
      </TSpan>
      <TSpan fontSize={s * 0.5} dy={s * 0.84} dx={-s * 0.3}>
        {lo}
      </TSpan>
      <TSpan dy={-s * 0.42}>{" "}</TSpan>
    </TSpan>
  );
}

/* ---------- main figure: the two railway tracks ---------- */
/* axes origin (110, 360) · the tracks meet at x = 200 (a) and x = 500 (b) */

const ux = (u: number) => 200 + 300 * u;
const bs = (u: number) => 288 - 40 * u;
const fy = (u: number) =>
  bs(u) - (110 * Math.sin(Math.PI * u) + 22 * Math.sin(2 * Math.PI * u));
const gy = (u: number) =>
  bs(u) + (34 * Math.sin(Math.PI * u) - 12 * Math.sin(2 * Math.PI * u));

const STRIP_U = [0.08, 0.185, 0.29, 0.395, 0.5, 0.605, 0.71, 0.815, 0.92];
const UH = 0.56; // the one fat strip beat 2 measures

/* ---------- panel ② : two curves meeting twice ---------- */
/* axes origin (404, 522) — the figure sits 18px higher and 24px shallower
   than it first did, so that the caption stack (562 / 584) clears the a/b
   tick row (540) and the peak of f clears the panel caption (436). */

const ux2 = (u: number) => 432 + 230 * u;
const bs2 = (u: number) => 484 - 6 * u;
const f2 = (u: number) => bs2(u) - 30 * Math.sin(Math.PI * u);
const g2 = (u: number) => bs2(u) + 24 * Math.sin(Math.PI * u);
const STRIP2_U = [0.06, 0.2, 0.36, 0.5, 0.64, 0.8, 0.94];

/* ---------- panel ③ : one crossing, roles swap ---------- */

const P3_F = "M 776 512 C 820 504, 858 494, 890 486 C 926 478, 980 466, 1018 458";
const P3_G = "M 776 462 C 820 470, 858 480, 890 486 C 926 492, 980 502, 1018 510";
const P3_LEFT =
  "M 776 462 C 820 470, 858 480, 890 486 C 858 494, 820 504, 776 512 Z";
const P3_RIGHT =
  "M 890 486 C 926 478, 980 466, 1018 458 L 1018 510 C 980 502, 926 492, 890 486 Z";

export default function M12Ch08Sec10({
  currentTime,
  reveals,
  language,
}: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const xH = ux(UH);
  const fH = fy(UH);
  const gH = gy(UH);

  return (
    <Scene>
      {/* ═══════════ beat 0 — the axis is just y = 0 ═══════════ */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={46} size={25} fill={RED} script>
          {t(
            "Top minus bottom — the area between two curves",
            "Top minus bottom — do curves ke beech ka area"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 1.2)}
        d="M 300 62 C 460 57, 640 67, 780 60"
        stroke={RED}
        sw={2.2}
        dur={0.6}
      />
      <Fade on={beat >= 0} delay={dl(0, 2.2)}>
        <T x={540} y={82} size={12.5} fill={MUTED} script>
          {t(
            "the axis was never special — it is just the flat line y = 0, so let the floor be a curve too",
            "axis kabhi khaas thi hi nahi — woh bas flat line y = 0 hai, to floor bhi ek curve hone do"
          )}
        </T>
      </Fade>

      {/* the bare axes */}
      <Draw
        on={beat >= 0}
        delay={dl(0, 3.2)}
        d={arrowD(110, 360, 626, 360)}
        stroke={INK}
        sw={2.6}
        dur={0.8}
      />
      <Draw
        on={beat >= 0}
        delay={dl(0, 3.9)}
        d={arrowD(110, 360, 110, 118)}
        stroke={INK}
        sw={2.6}
        dur={0.7}
      />
      <Fade on={beat >= 0} delay={dl(0, 4.6)}>
        <T x={96} y={378} size={14} fill={INK} weight={800}>
          O
        </T>
        <T x={638} y={366} size={15} fill={INK} weight={800}>
          x
        </T>
        <T x={110} y={106} size={15} fill={INK} weight={800}>
          y
        </T>
        <T x={598} y={350} size={12.5} fill={MUTED} anchor="end" weight={700}>
          y = 0
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 5.6)}>
        <Chip
          x={656}
          y={94}
          w={380}
          h={36}
          fill={CREAM}
          stroke={AMBER}
          textFill={AMBER_DARK}
          size={13.5}
          dashed
        >
          {t(
            "old floor: the axis  ·  new floor: a curve",
            "purana floor: axis  ·  naya floor: ek curve"
          )}
        </Chip>
      </Fade>

      {/* ═══════════ beat 1 — the two tracks + the strips ═══════════ */}
      <Fade on={beat >= 1} delay={dl(1, 3.4)}>
        <Path d={bandOf(ux, fy, gy)} fill={GREEN} opacity={0.17} />
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.4)}
        d={pathOf(ux, fy)}
        stroke={RED}
        sw={3}
        dur={1.3}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 1.9)}
        d={pathOf(ux, gy)}
        stroke={BLUE}
        sw={3}
        dur={1.3}
      />
      {STRIP_U.map((u, i) => (
        <Fade key={`s${u}`} on={beat >= 1} delay={dl(1, 4.6 + i * 0.22)}>
          <Rect
            x={ux(u) - 4}
            y={fy(u)}
            width={8}
            height={gy(u) - fy(u)}
            fill={AMBER}
            opacity={0.5}
            stroke={AMBER_DARK}
            strokeWidth={0.9}
          />
        </Fade>
      ))}
      <Fade on={beat >= 1} delay={dl(1, 7)}>
        <T x={126} y={134} size={12.5} fill={MUTED} anchor="start" script>
          {t(
            "slice it into paper-thin vertical pieces",
            "paper-thin vertical pieces mein slice karo"
          )}
        </T>
      </Fade>

      {/* ═══════════ beat 2 — one strip, measured ═══════════ */}
      {/* the tracks are named only now: segment 3 is the first time the
         voice says "f of x minus g of x". */}
      <Fade on={beat >= 2} delay={dl(2, 0.15)}>
        <T x={420} y={150} size={13.5} fill={RED} anchor="start" weight={800}>
          {t("upper track — y = f(x)", "upper track — y = f(x)")}
        </T>
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 0.45)}
        d={arrowD(436, 158, 406, 182)}
        stroke={RED}
        sw={1.5}
        dur={0.3}
      />
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={420} y={332} size={13.5} fill={BLUE} anchor="start" weight={800}>
          {t("lower track — y = g(x)", "lower track — y = g(x)")}
        </T>
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 0.9)}
        d={arrowD(432, 322, 410, 302)}
        stroke={BLUE}
        sw={1.5}
        dur={0.3}
      />
      <Fade on={beat >= 2} delay={dl(2, 1.1)}>
        <Rect
          x={xH - 9}
          y={fH}
          width={18}
          height={gH - fH}
          fill={AMBER}
          opacity={0.85}
          stroke={AMBER_DARK}
          strokeWidth={2}
        />
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 1.5)}
        d={arrowD(xH, gH - 5, xH, fH + 5)}
        stroke={AMBER_DARK}
        sw={2.2}
        dur={0.5}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 1.7)}
        d={arrowD(xH, fH + 5, xH, gH - 5)}
        stroke={AMBER_DARK}
        sw={2.2}
        dur={0.5}
      />
      {/* the gap label sits BELOW the midpoint of the gap: at the midpoint
         its tail (it runs to about x = 470) ran straight through the red f
         curve, which has descended to y ≈ 231 by then. fy is still above
         240 nowhere past x = 470, so 18px lower clears the curve by ~9px
         and still clears g (y ≈ 270 at x = 470) by ~14px. */}
      <Fade on={beat >= 2} delay={dl(2, 2.1)}>
        <T
          x={xH + 16}
          y={(fH + gH) / 2 + 18}
          size={15}
          fill={AMBER_DARK}
          anchor="start"
          weight={900}
        >
          f(x) − g(x)
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.6)}>
        <Path
          d={`M ${xH} ${gH + 3} L ${xH} 358`}
          stroke={MUTED}
          strokeWidth={1.4}
          strokeDasharray="5 5"
          fill="none"
        />
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 3)}
        d={`M ${xH - 9} 368 L ${xH - 9} 380 M ${xH + 9} 368 L ${
          xH + 9
        } 380 M ${xH - 9} 380 L ${xH + 9} 380`}
        stroke={INK}
        sw={1.8}
        dur={0.4}
      />
      <Fade on={beat >= 2} delay={dl(2, 3.4)}>
        <T x={xH} y={397} size={13} fill={INK} weight={800}>
          dx
        </T>
      </Fade>

      {/* right column — the strip's algebra */}
      <Fade on={beat >= 2} delay={dl(2, 4)}>
        <T x={656} y={166} size={13} fill={RED} anchor="start" weight={800}>
          {t("ONE STRIP", "EK STRIP")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 4.8)}>
        <T x={656} y={196} size={14.5} fill={INK} anchor="start" weight={700}>
          {t("height = top − bottom", "height = top − bottom")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 5.6)}>
        <T x={656} y={226} size={20} fill={AMBER_DARK} anchor="start" weight={900}>
          = f(x) − g(x)
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 7)}>
        <T x={656} y={254} size={14.5} fill={INK} anchor="start" weight={700}>
          {t("width = dx", "width = dx")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 8)}>
        <Chip
          x={656}
          y={266}
          w={330}
          h={40}
          fill={CREAM}
          stroke={GREEN}
          textFill={GREEN_DARK}
          size={17}
          script={false}
        >
          dA = [ f(x) − g(x) ] dx
        </Chip>
      </Fade>

      {/* ═══════════ beat 3 — the limits a, b and the master formula ═══════════ */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <Path
          d="M 200 288 L 200 358"
          stroke={MUTED}
          strokeWidth={1.5}
          strokeDasharray="6 5"
          fill="none"
        />
        <Circle cx={200} cy={288} r={5.5} fill={RED} />
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 0.6)}
        d="M 200 354 L 200 366"
        stroke={INK}
        sw={2.6}
        dur={0.25}
      />
      <Fade on={beat >= 3} delay={dl(3, 0.9)}>
        <T x={200} y={384} size={15} fill={INK} weight={900}>
          a
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.4)}>
        <Path
          d="M 500 248 L 500 358"
          stroke={MUTED}
          strokeWidth={1.5}
          strokeDasharray="6 5"
          fill="none"
        />
        <Circle cx={500} cy={248} r={5.5} fill={RED} />
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 1.8)}
        d="M 500 354 L 500 366"
        stroke={INK}
        sw={2.6}
        dur={0.25}
      />
      <Fade on={beat >= 3} delay={dl(3, 2.1)}>
        <T x={500} y={384} size={15} fill={INK} weight={900}>
          b
        </T>
      </Fade>

      <Draw
        on={beat >= 3}
        delay={dl(3, 2.6)}
        d="M 656 320 H 1036"
        stroke={MUTED}
        sw={1.2}
        dur={0.7}
      />
      <Fade on={beat >= 3} delay={dl(3, 3.2)}>
        <T x={656} y={342} size={13} fill={MUTED} anchor="start" script>
          {t(
            "add every strip from a to b, then take the limit",
            "a se b tak har strip jodo, phir limit lo"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 4.4)}>
        <T x={656} y={376} size={22} fill={GREEN_DARK} anchor="start" weight={900}>
          {"Area = "}
          <Int lo="a" hi="b" s={22} />
          {"[ f(x) − g(x) ] dx"}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 6.2)}>
        <T x={656} y={400} size={13} fill={RED} anchor="start" weight={800}>
          {t(
            "valid only while f(x) ≥ g(x) on [a, b]",
            "valid tabhi jab f(x) ≥ g(x) ho [a, b] par"
          )}
        </T>
      </Fade>

      {/* ═══════════ beat 4 — panel ①: the old case is a special case ═══════════ */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.2)}
        d="M 44 412 H 1036"
        stroke={MUTED}
        sw={1.2}
        dur={0.9}
      />
      <Fade on={beat >= 4} delay={dl(4, 0.9)}>
        <T x={44} y={436} size={13} fill={RED} anchor="start" weight={800}>
          {t(
            "① the old case, in new clothes",
            "① purana case, naye kapdon mein"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 1.4)}
        d={arrowD(76, 548, 330, 548)}
        stroke={INK}
        sw={2.2}
        dur={0.5}
      />
      <Draw
        on={beat >= 4}
        delay={dl(4, 1.7)}
        d={arrowD(76, 548, 76, 452)}
        stroke={INK}
        sw={2.2}
        dur={0.4}
      />
      <Fade on={beat >= 4} delay={dl(4, 3.6)}>
        <Path
          d="M 112 518 C 148 460, 252 456, 296 512 L 296 548 L 112 548 Z"
          fill={GREEN}
          opacity={0.18}
        />
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 2.2)}
        d="M 112 518 C 148 460, 252 456, 296 512"
        stroke={RED}
        sw={2.8}
        dur={0.8}
      />
      <Draw
        on={beat >= 4}
        delay={dl(4, 3.2)}
        d="M 112 548 H 296"
        stroke={BLUE}
        sw={5}
        dur={0.6}
      />
      <Fade on={beat >= 4} delay={dl(4, 4.2)}>
        <T x={204} y={462} size={12} fill={RED} weight={800}>
          y = f(x)
        </T>
        <T x={204} y={568} size={12} fill={BLUE} weight={800}>
          g(x) = 0
        </T>
        <T x={64} y={566} size={12} fill={MUTED} weight={700}>
          O
        </T>
        <T x={334} y={566} size={12} fill={MUTED} weight={700}>
          x
        </T>
        <T x={92} y={460} size={12} fill={MUTED} weight={700}>
          y
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 5.4)}>
        <T x={44} y={592} size={15} fill={GREEN_DARK} anchor="start" weight={900}>
          <Int lo="a" hi="b" s={15} />
          {"[ f − 0 ] dx  =  "}
          <Int lo="a" hi="b" s={15} />
          {"f dx"}
        </T>
      </Fade>

      {/* ═══════════ beat 5 — panel ②: the limits are the crossings ═══════════ */}
      {/* "② " is the panel index; "first wrinkle" is the voice's ordinal. */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={372} y={436} size={13} fill={RED} anchor="start" weight={800}>
          {t(
            "② first wrinkle — where do strips start and stop?",
            "② pehla wrinkle — strips kahan se kahan tak?"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.8)}
        d={arrowD(404, 522, 690, 522)}
        stroke={INK}
        sw={2.2}
        dur={0.5}
      />
      <Draw
        on={beat >= 5}
        delay={dl(5, 1.1)}
        d={arrowD(404, 522, 404, 452)}
        stroke={INK}
        sw={2.2}
        dur={0.4}
      />
      <Fade on={beat >= 5} delay={dl(5, 1.3)}>
        <T x={392} y={538} size={11} fill={MUTED} weight={700}>
          O
        </T>
        <T x={700} y={540} size={12} fill={MUTED} weight={700}>
          x
        </T>
        <T x={420} y={458} size={12} fill={MUTED} weight={700}>
          y
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 3)}>
        <Path d={bandOf(ux2, f2, g2, 40)} fill={GREEN} opacity={0.17} />
      </Fade>
      <Draw
        on={beat >= 5}
        delay={dl(5, 1.6)}
        d={pathOf(ux2, f2, 0, 1, 40)}
        stroke={RED}
        sw={2.8}
        dur={0.8}
      />
      <Draw
        on={beat >= 5}
        delay={dl(5, 2.3)}
        d={pathOf(ux2, g2, 0, 1, 40)}
        stroke={BLUE}
        sw={2.8}
        dur={0.8}
      />
      {STRIP2_U.map((u, i) => (
        <Fade key={`t${u}`} on={beat >= 5} delay={dl(5, 3.4 + i * 0.18)}>
          <Rect
            x={ux2(u) - 3.5}
            y={f2(u)}
            width={7}
            height={g2(u) - f2(u)}
            fill={AMBER}
            opacity={0.5}
            stroke={AMBER_DARK}
            strokeWidth={0.8}
          />
        </Fade>
      ))}
      <Draw
        on={beat >= 5}
        delay={dl(5, 4.9)}
        d={ringD(432, 484, 17, 13)}
        stroke={RED}
        sw={2}
        dur={0.5}
      />
      <Draw
        on={beat >= 5}
        delay={dl(5, 5.3)}
        d={ringD(662, 478, 17, 13)}
        stroke={RED}
        sw={2}
        dur={0.5}
      />
      <Fade on={beat >= 5} delay={dl(5, 5.7)}>
        <Circle cx={432} cy={484} r={4} fill={RED} />
        <Circle cx={662} cy={478} r={4} fill={RED} />
        <Path
          d="M 432 484 L 432 520 M 662 478 L 662 520"
          stroke={MUTED}
          strokeWidth={1.4}
          strokeDasharray="5 5"
          fill="none"
        />
        <T x={432} y={540} size={13} fill={INK} weight={900}>
          a
        </T>
        <T x={662} y={540} size={13} fill={INK} weight={900}>
          b
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 6.6)}>
        <T x={372} y={562} size={12.5} fill={INK} anchor="start" weight={700}>
          {t(
            "solve f(x) = g(x) — strip height shrinks to 0",
            "f(x) = g(x) solve karo — strip height 0 ho jaati"
          )}
        </T>
      </Fade>

      {/* ═══════════ beat 6 — which curve is on top? ═══════════ */}
      {/* the test line stops at the red dot (f2(0.5) = 451) instead of
         overshooting it — 8px higher it would have run into the panel
         caption's glyph band. Both of its labels live on the tick row
         BELOW the axis, the only genuinely empty board left in panel ②:
         everything between the curves is filled region. */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <Path
          d={`M 547 520 L 547 ${f2(0.5) - 2}`}
          stroke={GREEN_DARK}
          strokeWidth={1.6}
          strokeDasharray="6 5"
          fill="none"
        />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <Circle cx={547} cy={f2(0.5)} r={4.5} fill={RED} />
        <Circle cx={547} cy={g2(0.5)} r={4.5} fill={BLUE} />
        <T x={547} y={540} size={11.5} fill={INK} weight={700}>
          {t("sample x", "sample x")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={612} y={540} size={11} fill={GREEN_DARK} weight={800}>
          {t("f on top ✓", "f hi upar ✓")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.6)}>
        <T x={372} y={584} size={11.5} fill={RED} anchor="start" weight={800}>
          {t(
            "second wrinkle — which is on top? test one sample x",
            "dusra wrinkle — kaun upar hai? ek sample x test karo"
          )}
        </T>
      </Fade>

      {/* ═══════════ beat 7 — panel ③: the roles can swap ═══════════ */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={720} y={436} size={13} fill={RED} anchor="start" weight={800}>
          {t("③ and the two can swap roles", "③ aur dono roles badal sakte hain")}
        </T>
      </Fade>
      <Draw
        on={beat >= 7}
        delay={dl(7, 0.8)}
        d={arrowD(748, 522, 1036, 522)}
        stroke={INK}
        sw={2.2}
        dur={0.5}
      />
      <Draw
        on={beat >= 7}
        delay={dl(7, 1.1)}
        d={arrowD(748, 522, 748, 452)}
        stroke={INK}
        sw={2.2}
        dur={0.4}
      />
      <Fade on={beat >= 7} delay={dl(7, 1.3)}>
        <T x={736} y={538} size={11} fill={MUTED} weight={700}>
          O
        </T>
        <T x={1036} y={540} size={12} fill={MUTED} weight={700}>
          x
        </T>
        <T x={766} y={458} size={12} fill={MUTED} weight={700}>
          y
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 3)}>
        <Path d={P3_LEFT} fill={AMBER} opacity={0.28} />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 3.4)}>
        <Path d={P3_RIGHT} fill={GREEN} opacity={0.22} />
      </Fade>
      <Draw
        on={beat >= 7}
        delay={dl(7, 1.6)}
        d={P3_F}
        stroke={RED}
        sw={2.8}
        dur={0.9}
      />
      <Draw
        on={beat >= 7}
        delay={dl(7, 2.3)}
        d={P3_G}
        stroke={BLUE}
        sw={2.8}
        dur={0.9}
      />
      <Fade on={beat >= 7} delay={dl(7, 3.8)}>
        <Circle cx={890} cy={486} r={5.5} fill={RED} />
        <Path
          d="M 890 486 L 890 520"
          stroke={RED}
          strokeWidth={1.6}
          strokeDasharray="6 5"
          fill="none"
        />
        <T x={890} y={540} size={12} fill={RED} weight={800}>
          {t("split here", "yahan split karo")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 4.6)}>
        <T x={826} y={492} size={12.5} fill={AMBER_DARK} weight={900}>
          g − f
        </T>
        <T x={958} y={490} size={12.5} fill={GREEN_DARK} weight={900}>
          f − g
        </T>
        <T x={1028} y={448} size={13} fill={RED} weight={900}>
          f
        </T>
        <T x={1028} y={512} size={13} fill={BLUE} weight={900}>
          g
        </T>
      </Fade>
      {/* both lines shortened and re-spaced: at 11.5px the old pair ran to
         about x = 1055, past the safe edge, and shared the y = 594 baseline
         with panel ②'s Hinglish caption. */}
      <Fade on={beat >= 7} delay={dl(7, 5.6)}>
        <T x={720} y={562} size={11.5} fill={INK} anchor="start" weight={700}>
          {t(
            "wherever they cross, the gap flips sign",
            "jahan bhi cross karein, gap ka sign palat jaata hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 6.6)}>
        <T x={720} y={584} size={11.5} fill={RED} anchor="start" weight={800}>
          {t(
            "always subtract the genuine LOWER from the UPPER",
            "hamesha genuine LOWER ko UPPER se subtract karo"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
