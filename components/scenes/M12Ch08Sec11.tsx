/**
 * M12Ch08 · Section 11 — "The between-curves theorem and the two-parabolas result"
 * Subtopic: Area between Two Curves
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * VISUAL VOCABULARY (shared with Sections 10 and 12 of this subtopic):
 *   · every panel gets real axes drawn with arrowD, origin bottom-left,
 *     "O" / "x" / "y" labelled; both proof figures share the SAME axis
 *     height (y = 316) so the shift-by-C argument reads across them.
 *   · the UPPER (primary) curve f is RED; the LOWER curve g is BLUE.
 *   · the region between them is ONE <Path> filled GREEN at low opacity.
 *   · elementary strips are AMBER rects with an AMBER_DARK hairline.
 *
 * Beat map (8 segments, gates 0..7 — every beat used):
 *  0  "prove the formula, then derive one catalogue result"
 *       title + underline + subtitle, both proof-figure headings, and the
 *       bare axes of figure A (the strip argument)
 *  1  "an elementary strip: top on f, bottom on g, area (f − g) dx"
 *       figure A: f, g, the shaded region, eight strips, one fat measured
 *       strip with its dx bracket, a and b — plus the Riemann column
 *  2  "suppose g dips below the axis — shift everything up by C"
 *       figure B: f above the axis, g BELOW it, then the dashed shifted
 *       copies lifted by C with both gap arrows drawn equal
 *  3  "the algebra: the constant simply cancels"
 *       the ∫[(f + C) − (g + C)] = ∫(f − g) line with both "+ C" boxes
 *       struck through, plus the f ≥ g proviso chip
 *  4  "the two parabolas y² = 4ax and x² = 4ay meet at O and (4a, 4a)"
 *       figure C: both parabolas, both intersections ringed, 4a dropped
 *       to the x-axis, and the substitution note
 *  5  "upper 2√(ax), lower x²/4a → 32a²/3 − 16a²/3"
 *       the region shaded, five strips inside it, the branch labels, the
 *       integral and the two terms
 *  6  "that leaves 16a²/3"
 *       the boxed answer, arrowed in from the subtraction
 *  7  "the answer scales as a², as any area must"
 *       the dimension check, the ring round a² and the pointer into it
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
  crossD,
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
      <TSpan dy={-s * 0.42}>{" "}</TSpan>
    </TSpan>
  );
}

/* ---------- figure A : the strip proof (axis y = 316) ---------- */

const uxA = (u: number) => 130 + 220 * u;
const bsA = (u: number) => 262 - 16 * u;
const fA = (u: number) =>
  bsA(u) - (100 * Math.sin(Math.PI * u) + 16 * Math.sin(2 * Math.PI * u));
const gA = (u: number) =>
  bsA(u) + (16 * Math.sin(Math.PI * u) - 7 * Math.sin(2 * Math.PI * u));
const STRIP_A = [0.09, 0.21, 0.33, 0.45, 0.57, 0.69, 0.81, 0.93];

/* ---------- figure B : the shift by C (same axis y = 316) ---------- */

const C_SHIFT = 60;
const uxB = (u: number) => 490 + 250 * u;
const fB = (u: number) => 272 - 30 * Math.sin(Math.PI * u);
const gB = (u: number) => 338 - 12 * Math.sin(Math.PI * u);
const fBs = (u: number) => fB(u) - C_SHIFT;
const gBs = (u: number) => gB(u) - C_SHIFT;

/* ---------- figure C : the two equal parabolas ---------- */
/* origin (100, 572) · the point (4a, 4a) lands 110 px along each axis */

const K = 110;
const cxOf = (X: number) => 100 + X;
/* y² = 4ax  →  y = 2√(ax)  →  Y = √(K·X) */
const yRed = (X: number) => 572 - Math.sqrt(K * X);
/* x² = 4ay  →  y = x²/4a  →  Y = X²/K */
const yBlue = (X: number) => 572 - (X * X) / K;
const STRIP_C = [10, 30, 52, 74, 96];

export default function M12Ch08Sec11({
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
      {/* ═══════════ beat 0 — title, headings, bare axes ═══════════ */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={46} size={25} fill={RED} script>
          {t(
            "Proving it — and the two-parabolas result",
            "Isko prove karna — aur two-parabolas result"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 1.1)}
        d="M 318 62 C 460 57, 630 67, 762 60"
        stroke={RED}
        sw={2.2}
        dur={0.6}
      />
      <Fade on={beat >= 0} delay={dl(0, 1.9)}>
        <T x={540} y={82} size={12.5} fill={MUTED} script>
          {t(
            "the proof is the same strip argument as before — then one catalogue result falls out of it",
            "proof wahi strip argument hai jo pehle tha — phir usi se ek catalogue result nikal aata hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 2.8)}>
        <T x={102} y={118} size={13} fill={RED} anchor="start" weight={800}>
          {t(
            "① the same strip argument",
            "① wahi strip argument"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 3.4)}>
        <T x={430} y={118} size={13} fill={RED} anchor="start" weight={800}>
          {t(
            "② why it survives a dip below the axis",
            "② axis ke neeche jhukne par bhi kyun chalta hai"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 4)}
        d={arrowD(86, 316, 400, 316)}
        stroke={INK}
        sw={2.4}
        dur={0.6}
      />
      <Draw
        on={beat >= 0}
        delay={dl(0, 4.5)}
        d={arrowD(86, 316, 86, 132)}
        stroke={INK}
        sw={2.4}
        dur={0.5}
      />
      <Fade on={beat >= 0} delay={dl(0, 5)}>
        <T x={72} y={334} size={13} fill={INK} weight={800}>
          O
        </T>
        <T x={412} y={322} size={14} fill={INK} weight={800}>
          x
        </T>
        <T x={86} y={120} size={14} fill={INK} weight={800}>
          y
        </T>
      </Fade>

      {/* ═══════════ beat 1 — figure A: the elementary strip ═══════════ */}
      <Fade on={beat >= 1} delay={dl(1, 2.6)}>
        <Path d={bandOf(uxA, fA, gA)} fill={GREEN} opacity={0.17} />
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.3)}
        d={pathOf(uxA, fA)}
        stroke={RED}
        sw={2.8}
        dur={1}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 1.3)}
        d={pathOf(uxA, gA)}
        stroke={BLUE}
        sw={2.8}
        dur={1}
      />
      <Fade on={beat >= 1} delay={dl(1, 1.1)}>
        <T x={300} y={152} size={12.5} fill={RED} anchor="start" weight={800}>
          y = f(x)
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.1)}>
        <T x={300} y={292} size={12.5} fill={BLUE} anchor="start" weight={800}>
          y = g(x)
        </T>
      </Fade>
      {STRIP_A.map((u, i) => (
        <Fade key={`sa${u}`} on={beat >= 1} delay={dl(1, 3.2 + i * 0.16)}>
          <Rect
            x={uxA(u) - 3}
            y={fA(u)}
            width={6}
            height={gA(u) - fA(u)}
            fill={AMBER}
            opacity={0.48}
            stroke={AMBER_DARK}
            strokeWidth={0.8}
          />
        </Fade>
      ))}
      {/* the one strip we measure */}
      <Fade on={beat >= 1} delay={dl(1, 4.8)}>
        <Rect
          x={232}
          y={fA(0.5)}
          width={16}
          height={gA(0.5) - fA(0.5)}
          fill={AMBER}
          opacity={0.85}
          stroke={AMBER_DARK}
          strokeWidth={2}
        />
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 5.3)}
        d={arrowD(240, gA(0.5) - 4, 240, fA(0.5) + 4)}
        stroke={AMBER_DARK}
        sw={2}
        dur={0.4}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 5.6)}
        d={arrowD(240, fA(0.5) + 4, 240, gA(0.5) - 4)}
        stroke={AMBER_DARK}
        sw={2}
        dur={0.4}
      />
      <Fade on={beat >= 1} delay={dl(1, 6)}>
        <T x={240} y={140} size={13.5} fill={AMBER_DARK} anchor="middle" weight={900}>
          f − g
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 6.4)}
        d="M 232 322 L 232 334 M 248 322 L 248 334 M 232 334 L 248 334"
        stroke={INK}
        sw={1.6}
        dur={0.3}
      />
      <Fade on={beat >= 1} delay={dl(1, 6.8)}>
        <T x={240} y={350} size={12} fill={INK} weight={800}>
          dx
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 7.2)}>
        <Path
          d="M 130 262 L 130 314 M 350 246 L 350 314"
          stroke={MUTED}
          strokeWidth={1.3}
          strokeDasharray="5 5"
          fill="none"
        />
        <Circle cx={130} cy={262} r={4} fill={RED} />
        <Circle cx={350} cy={246} r={4} fill={RED} />
        <T x={130} y={334} size={13} fill={INK} weight={900}>
          a
        </T>
        <T x={350} y={334} size={13} fill={INK} weight={900}>
          b
        </T>
      </Fade>

      {/* the Riemann column */}
      <Fade on={beat >= 1} delay={dl(1, 8)}>
        <T x={806} y={140} size={12.5} fill={RED} anchor="start" weight={800}>
          {t("AN ELEMENTARY STRIP", "EK ELEMENTARY STRIP")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 8.8)}>
        <T x={806} y={170} size={13} fill={RED} anchor="start" weight={700}>
          {t("top edge sits on f(x)", "top edge f(x) par baithta hai")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 9.4)}>
        <T x={806} y={194} size={13} fill={BLUE} anchor="start" weight={700}>
          {t("bottom edge sits on g(x)", "bottom edge g(x) par baithta hai")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 10.2)}>
        <T x={806} y={228} size={16} fill={INK} anchor="start" weight={800}>
          height = f − g
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 11)}>
        <T x={806} y={256} size={16} fill={AMBER_DARK} anchor="start" weight={900}>
          dA = (f − g) dx
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 12.4)}>
        <T x={806} y={288} size={12.5} fill={MUTED} anchor="start" script>
          {t(
            "sum over all strips, pass to the limit",
            "saari strips par sum, phir limit"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 13.4)}>
        <T x={806} y={322} size={19} fill={GREEN_DARK} anchor="start" weight={900}>
          {"A = "}
          <Int lo="a" hi="b" s={19} />
          {"(f − g) dx"}
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 14.2)}
        d="M 806 332 H 1024"
        stroke={GREEN}
        sw={1.6}
        dur={0.6}
      />

      {/* ═══════════ beat 2 — figure B: the shift by C ═══════════ */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 0.2)}
        d={arrowD(452, 316, 772, 316)}
        stroke={INK}
        sw={2.4}
        dur={0.6}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 0.6)}
        d={arrowD(452, 316, 452, 160)}
        stroke={INK}
        sw={2.4}
        dur={0.5}
      />
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={438} y={334} size={13} fill={INK} weight={800}>
          O
        </T>
        <T x={784} y={322} size={14} fill={INK} weight={800}>
          x
        </T>
        <T x={452} y={148} size={14} fill={INK} weight={800}>
          y
        </T>
      </Fade>
      {/* the original pair — g is genuinely below the axis */}
      <Fade on={beat >= 2} delay={dl(2, 3.2)}>
        <Path d={bandOf(uxB, fB, gB)} fill={GREEN} opacity={0.1} />
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 1.4)}
        d={pathOf(uxB, fB)}
        stroke={RED}
        sw={2.6}
        dur={0.8}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 2.2)}
        d={pathOf(uxB, gB)}
        stroke={BLUE}
        sw={2.6}
        dur={0.8}
      />
      <Fade on={beat >= 2} delay={dl(2, 3.6)}>
        <T x={496} y={344} size={12} fill={BLUE} anchor="start" weight={800}>
          {t("g dips below y = 0", "g y = 0 ke neeche chala jaata hai")}
        </T>
      </Fade>
      {/* the same picture, lifted by C */}
      <Fade on={beat >= 2} delay={dl(2, 6.6)}>
        <Path d={bandOf(uxB, fBs, gBs)} fill={GREEN} opacity={0.22} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 5.4)}>
        <Path
          d={pathOf(uxB, fBs)}
          fill="none"
          stroke={RED}
          strokeWidth={2.6}
          strokeDasharray="8 6"
        />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 6)}>
        <Path
          d={pathOf(uxB, gBs)}
          fill="none"
          stroke={BLUE}
          strokeWidth={2.6}
          strokeDasharray="8 6"
        />
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 4.4)}
        d={arrowD(500, 333, 500, 279)}
        stroke={GREEN_DARK}
        sw={2.4}
        dur={0.4}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 4.8)}
        d={arrowD(740, 335, 740, 281)}
        stroke={GREEN_DARK}
        sw={2.4}
        dur={0.4}
      />
      <Fade on={beat >= 2} delay={dl(2, 5.1)}>
        <T x={510} y={312} size={14} fill={GREEN_DARK} anchor="start" weight={900}>
          + C
        </T>
        <T x={750} y={312} size={14} fill={GREEN_DARK} anchor="start" weight={900}>
          + C
        </T>
      </Fade>
      {/* the gap, measured before and after */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 7.2)}
        d={arrowD(580, 323, 580, 249)}
        stroke={AMBER_DARK}
        sw={2}
        dur={0.4}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 7.5)}
        d={arrowD(580, 249, 580, 323)}
        stroke={AMBER_DARK}
        sw={2}
        dur={0.4}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 7.9)}
        d={arrowD(650, 263, 650, 189)}
        stroke={AMBER_DARK}
        sw={2}
        dur={0.4}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 8.2)}
        d={arrowD(650, 189, 650, 263)}
        stroke={AMBER_DARK}
        sw={2}
        dur={0.4}
      />
      <Fade on={beat >= 2} delay={dl(2, 8.6)}>
        <T x={568} y={292} size={12} fill={AMBER_DARK} anchor="end" weight={900}>
          gap
        </T>
        <T x={662} y={222} size={12.5} fill={AMBER_DARK} anchor="start" weight={900}>
          {t("the same gap", "wahi gap")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 9.6)}>
        <T x={430} y={358} size={12.5} fill={INK} anchor="start" weight={700}>
          {t(
            "shifting cannot change the gap — so it cannot change the area",
            "shift karne se gap nahi badalta — to area bhi nahi badalta"
          )}
        </T>
      </Fade>

      {/* ═══════════ beat 3 — the constant cancels ═══════════ */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 0.2)}
        d="M 44 372 H 1036"
        stroke={MUTED}
        sw={1.2}
        dur={0.9}
      />
      <Fade on={beat >= 3} delay={dl(3, 0.9)}>
        <T x={44} y={402} size={19} fill={INK} anchor="start" weight={800}>
          <Int lo="a" hi="b" s={19} />
          {"[ ( f(x)"}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.3)}>
        <Rect x={166} y={384} width={44} height={26} rx={6} fill={CREAM} />
        <T x={188} y={402} size={19} fill={AMBER_DARK} weight={900}>
          + C
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.7)}>
        <T x={216} y={402} size={19} fill={INK} anchor="start" weight={800}>
          {") − ( g(x)"}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.1)}>
        <Rect x={328} y={384} width={44} height={26} rx={6} fill={CREAM} />
        <T x={350} y={402} size={19} fill={AMBER_DARK} weight={900}>
          + C
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.5)}>
        <T x={378} y={402} size={19} fill={INK} anchor="start" weight={800}>
          {") ] dx   ="}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 3.1)}>
        <T x={496} y={402} size={19} fill={GREEN_DARK} anchor="start" weight={900}>
          <Int lo="a" hi="b" s={19} />
          {"[ f(x) − g(x) ] dx"}
        </T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 4)}
        d={crossD(166, 384, 44, 26)}
        stroke={RED}
        sw={2.6}
        dur={0.35}
      />
      <Draw
        on={beat >= 3}
        delay={dl(3, 4.3)}
        d={crossD(328, 384, 44, 26)}
        stroke={RED}
        sw={2.6}
        dur={0.35}
      />
      <Fade on={beat >= 3} delay={dl(3, 4.8)}>
        <T x={850} y={360} size={12} fill={MUTED} anchor="start" script>
          {t("the constant simply cancels", "constant bas cancel ho jaata hai")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 5.4)}>
        <Chip
          x={750}
          y={378}
          w={286}
          h={34}
          fill={CREAM}
          stroke={AMBER}
          textFill={AMBER_DARK}
          size={12}
          dashed
        >
          {t(
            "above or below the axis — only f ≥ g",
            "upar ho ya neeche — bas f ≥ g chahiye"
          )}
        </Chip>
      </Fade>

      {/* ═══════════ beat 4 — figure C: the two parabolas ═══════════ */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={60} y={422} size={13} fill={RED} anchor="start" weight={800}>
          {t("③ the catalogue result", "③ catalogue result")}
        </T>
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.7)}
        d={arrowD(100, 572, 470, 572)}
        stroke={INK}
        sw={2.4}
        dur={0.6}
      />
      <Draw
        on={beat >= 4}
        delay={dl(4, 1.1)}
        d={arrowD(100, 572, 100, 444)}
        stroke={INK}
        sw={2.4}
        dur={0.5}
      />
      {/* beat-5 content, declared here so the curves paint ON TOP of the band */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Path
          d={
            pathOf(cxOf, yRed, 0, K, 40) +
            " " +
            pathOf(cxOf, yBlue, K, 0, 40).replace(/^M/, "L") +
            " Z"
          }
          fill={GREEN}
          opacity={0.2}
        />
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 1.6)}
        d={pathOf(cxOf, yRed, 0, 132, 44)}
        stroke={RED}
        sw={2.8}
        dur={0.9}
      />
      <Draw
        on={beat >= 4}
        delay={dl(4, 2.4)}
        d={pathOf(cxOf, yBlue, 0, 116, 44)}
        stroke={BLUE}
        sw={2.8}
        dur={0.9}
      />
      <Draw
        on={beat >= 4}
        delay={dl(4, 3.4)}
        d={ringD(100, 572, 15, 12)}
        stroke={RED}
        sw={2}
        dur={0.5}
      />
      <Draw
        on={beat >= 4}
        delay={dl(4, 3.8)}
        d={ringD(210, 462, 15, 12)}
        stroke={RED}
        sw={2}
        dur={0.5}
      />
      <Fade on={beat >= 4} delay={dl(4, 4.2)}>
        <Circle cx={100} cy={572} r={4.5} fill={RED} />
        <Circle cx={210} cy={462} r={4.5} fill={RED} />
        <T x={220} y={456} size={12} fill={INK} anchor="start" weight={900}>
          (4a, 4a)
        </T>
        <T x={86} y={592} size={12} fill={MUTED} weight={700}>
          O
        </T>
        <T x={482} y={578} size={14} fill={INK} weight={800}>
          x
        </T>
        <T x={86} y={442} size={14} fill={INK} weight={800}>
          y
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 4.8)}>
        <Path
          d="M 210 462 L 210 570"
          stroke={MUTED}
          strokeWidth={1.4}
          strokeDasharray="5 5"
          fill="none"
        />
        <T x={210} y={592} size={13} fill={INK} weight={900}>
          4a
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 5.4)}>
        <T x={246} y={482} size={13} fill={RED} anchor="start" weight={800}>
          y² = 4ax
        </T>
        <T x={246} y={506} size={13} fill={BLUE} anchor="start" weight={800}>
          x² = 4ay
        </T>
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 5.8)}
        d={arrowD(242, 478, cxOf(78), yRed(78))}
        stroke={RED}
        sw={1.4}
        dur={0.3}
      />
      <Draw
        on={beat >= 4}
        delay={dl(4, 6.1)}
        d={arrowD(242, 502, cxOf(94), yBlue(94))}
        stroke={BLUE}
        sw={1.4}
        dur={0.3}
      />
      {/* the substitution note, right column */}
      <Fade on={beat >= 4} delay={dl(4, 6.8)}>
        <T x={540} y={436} size={13} fill={MUTED} anchor="start" script>
          {t(
            "substitute one into the other:",
            "ek ko doosre mein substitute karo:"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 7.6)}>
        <T x={540} y={468} size={18} fill={RED} anchor="start" weight={900}>
          y² = 4ax
        </T>
        <T x={640} y={468} size={15} fill={INK} anchor="start" weight={700}>
          {t("and", "aur")}
        </T>
        <T x={690} y={468} size={18} fill={BLUE} anchor="start" weight={900}>
          x² = 4ay
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 8.6)}>
        <T x={540} y={496} size={13} fill={INK} anchor="start" weight={700}>
          {t(
            "meet at the origin and at ( 4a, 4a )",
            "origin aur ( 4a, 4a ) par milti hain"
          )}
        </T>
      </Fade>

      {/* ═══════════ beat 5 — top minus bottom, integrated ═══════════ */}
      {/* (the shaded band itself is declared up in figure C, for paint order) */}
      {STRIP_C.map((X, i) => (
        <Fade key={`sc${X}`} on={beat >= 5} delay={dl(5, 0.9 + i * 0.2)}>
          <Rect
            x={cxOf(X) - 3}
            y={yRed(X)}
            width={6}
            height={yBlue(X) - yRed(X)}
            fill={AMBER}
            opacity={0.55}
            stroke={AMBER_DARK}
            strokeWidth={0.8}
          />
        </Fade>
      ))}
      <Fade on={beat >= 5} delay={dl(5, 2.2)}>
        <T x={246} y={534} size={12} fill={RED} anchor="start" weight={800}>
          {"top:  y = 2√(ax)"}
        </T>
        <T x={246} y={556} size={12} fill={BLUE} anchor="start" weight={800}>
          {"bottom:  y = x²/4a"}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 3.4)}>
        <T x={540} y={530} size={16} fill={GREEN_DARK} anchor="start" weight={900}>
          {"A = "}
          <Int lo="0" hi="4a" s={16} />
          {"[ 2√(ax) − x²/4a ] dx"}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 5)}>
        <T x={540} y={554} size={17} fill={INK} anchor="start" weight={800}>
          {"=  32a²/3  −  16a²/3"}
        </T>
      </Fade>

      {/* ═══════════ beat 6 — the answer ═══════════ */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.2)}
        d={arrowD(726, 556, 784, 536)}
        stroke={GREEN_DARK}
        sw={2.2}
        dur={0.4}
      />
      <Fade on={beat >= 6} delay={dl(6, 0.7)}>
        <Chip
          x={790}
          y={512}
          w={220}
          h={42}
          fill={CREAM}
          stroke={GREEN}
          textFill={GREEN_DARK}
          size={22}
          script={false}
        >
          A = 16a²/3
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.7)}>
        <T x={790} y={486} size={11.5} fill={MUTED} anchor="start" script>
          {t(
            "the standard result for two equal parabolas",
            "do equal parabolas ka standard result"
          )}
        </T>
      </Fade>

      {/* ═══════════ beat 7 — the dimension check ═══════════ */}
      <Draw
        on={beat >= 7}
        delay={dl(7, 0.2)}
        d={ringD(919, 533, 21, 15)}
        stroke={RED}
        sw={2}
        dur={0.5}
      />
      <Fade on={beat >= 7} delay={dl(7, 0.9)}>
        <T x={540} y={574} size={12} fill={RED} anchor="start" weight={800}>
          {t(
            "dimension check — the answer scales as a²",
            "dimension check — answer a² ke hisaab se scale karta hai"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 7}
        delay={dl(7, 1.5)}
        d={arrowD(966, 576, 918, 550)}
        stroke={RED}
        sw={1.6}
        dur={0.4}
      />
      <Fade on={beat >= 7} delay={dl(7, 2.1)}>
        <T x={540} y={592} size={12} fill={MUTED} anchor="start" script>
          {t(
            "exactly as any area must — wrong dimensions is wrong on sight",
            "jaise har area ko karna chahiye — galat dimensions dekhte hi galat"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
