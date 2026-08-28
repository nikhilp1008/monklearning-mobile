/**
 * M12Ch08 · Section 12 — "The between-curves formula set"
 * Subtopic: Area between Two Curves
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * VISUAL VOCABULARY (shared with Sections 10 and 11 of this subtopic):
 *   · every panel gets real axes drawn with arrowD, origin bottom-left,
 *     all four consolidation cells share the SAME axis height (y = 292)
 *     and the same y-axis top (152) so the four dresses read as one shape.
 *   · the UPPER / RIGHT (primary) curve is RED; the LOWER / LEFT one BLUE.
 *   · the enclosed region is ONE <Path> filled GREEN at low opacity.
 *   · elementary strips are AMBER rects with an AMBER_DARK hairline.
 *   · where the curves swap roles the "wrong-way" lobe is tinted AMBER
 *     instead of GREEN, so the sign flip reads as a colour change.
 *
 * Beat map (8 segments, gates 0..7 — every beat used):
 *  0  "one formula in four dresses"
 *       title + underline + subtitle + the four empty cell frames
 *  1  "vertical strips, f above g → ∫ₐᵇ (f − g) dx"
 *       cell ①: axes, f, g, shaded region, five vertical strips, a and b
 *  2  "horizontal strips, p right of q → ∫_c^d (p − q) dy"
 *       cell ②: axes, p, q, shaded region, five horizontal strips, c and d
 *       marked on the y-axis
 *  3  "when they cross inside → ∫ |f − g| dx"
 *       cell ③: one crossing, the two lobes tinted differently, the split
 *       line dropped to the axis
 *  4  "set the lower curve to zero and you recover the first subtopic"
 *       cell ④: one curve shaded to the axis, the axis redrawn thick in
 *       BLUE as g = 0, four strips
 *  5  "the catalogue result — y² = 4ax and x² = 4ay enclose 16a²/3"
 *       divider + the two-parabolas figure with its region, strips, the
 *       ringed (4a, 4a), the equations and the boxed 16a²/3
 *  6  "the limits ARE the intersection points — solve f(x) = g(x) first"
 *       the habit block: the rule underlined, and the "limits copied from
 *       the text" chip struck out
 *  7  "sideways-opening curves are cleaner integrated in y"
 *       two side-by-side sketches of the SAME sideways parabola: horizontal
 *       strips (✓) against vertical strips with two branches (✗)
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
  n = 44
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
  n = 44
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

/* ---------- cell ① : vertical strips ---------- */
const ux1 = (u: number) => 110 + 140 * u;
const bs1 = (u: number) => 254 - 24 * u;
const f1 = (u: number) =>
  bs1(u) - (62 * Math.sin(Math.PI * u) + 8 * Math.sin(2 * Math.PI * u));
const g1 = (u: number) =>
  bs1(u) + (20 * Math.sin(Math.PI * u) - 6 * Math.sin(2 * Math.PI * u));
const S1 = [0.12, 0.29, 0.46, 0.63, 0.8];

/* ---------- cell ② : horizontal strips (x written in terms of y) ---------- */
const vy = (v: number) => 280 - 108 * v;
const bsx = (v: number) => 372 + 24 * v;
const qx = (v: number) =>
  bsx(v) - 24 * Math.sin(Math.PI * v) + 5 * Math.sin(2 * Math.PI * v);
const px = (v: number) =>
  bsx(v) + 62 * Math.sin(Math.PI * v) + 7 * Math.sin(2 * Math.PI * v);
const S2 = [0.12, 0.29, 0.46, 0.63, 0.8];

/* ---------- cell ③ : one crossing inside the interval ---------- */
const C3_F = "M 612 254 C 640 244, 664 234, 686 224 C 712 212, 744 198, 764 190";
const C3_G = "M 612 190 C 640 200, 664 212, 686 224 C 712 236, 744 250, 764 258";
const C3_LEFT =
  "M 612 190 C 640 200, 664 212, 686 224 C 664 234, 640 244, 612 254 Z";
const C3_RIGHT =
  "M 686 224 C 712 212, 744 198, 764 190 L 764 258 C 744 250, 712 236, 686 224 Z";

/* ---------- cell ④ : the lower curve is the axis ---------- */
const ux4 = (u: number) => 866 + 140 * u;
const f4 = (u: number) =>
  254 - 24 * u - 68 * Math.sin(Math.PI * u) - 6 * Math.sin(2 * Math.PI * u);
const S4 = [0.15, 0.38, 0.61, 0.84];

/* ---------- the catalogue figure : two equal parabolas ---------- */
const KP = 92;
const pxOf = (X: number) => 96 + X;
const pRed = (X: number) => 566 - Math.sqrt(KP * X);
const pBlue = (X: number) => 566 - (X * X) / KP;
const SP = [20, 46, 74];

/* ---------- beat 7 : the SAME sideways parabola, twice ----------
 * ONE curve, x = y²/16, drawn about each panel's own origin, and the
 * axis of symmetry IS the x-axis actually drawn (screen y = SY0) — so
 * each sketch really is x = y²/(4a) with its vertex on the origin.
 * Both panels close the region against a vertical wall at the same
 * offset from the vertex, so the ✓ and ✗ panels show the same region. */
const SY0 = 492; // screen y of both x-axes = the axis of symmetry
const SYMAX = 42; // |y| drawn, so the curve reaches x = 110.25 past the vertex
const LX0 = 752; // vertex of the ✓ panel
const RX0 = 908; // vertex of the ✗ panel
const LWALL = 866; // right-hand boundary of the ✓ region
const RWALL = 1022; // right-hand boundary of the ✗ region
const sy = (Y: number) => SY0 - Y;
const sx = (Y: number) => LX0 + (Y * Y) / 16;
const dx2 = (Y: number) => RX0 + (Y * Y) / 16;
/** parabola (left boundary) closed against its vertical wall (right boundary) */
const wallRegion = (xf: (Y: number) => number, wall: number) =>
  pathOf(xf, sy, -SYMAX, SYMAX, 40) +
  ` L ${wall} ${sy(SYMAX)} L ${wall} ${sy(-SYMAX)} Z`;
const HSTRIPS = [-36, -22, -10, 10, 22, 36];
const VSTRIPS = [940, 968, 996];

export default function M12Ch08Sec12({
  currentTime,
  reveals,
  language,
}: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const CELLS = [44, 296, 548, 800];

  return (
    <Scene>
      {/* ═══════════ beat 0 — one formula, four dresses ═══════════ */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={46} size={25} fill={RED} script>
          {t(
            "One formula, four dresses",
            "Ek hi formula, chaar poshaakein"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 1)}
        d="M 380 62 C 470 57, 610 67, 700 60"
        stroke={RED}
        sw={2.2}
        dur={0.6}
      />
      <Fade on={beat >= 0} delay={dl(0, 1.8)}>
        <T x={540} y={82} size={12.5} fill={MUTED} script>
          {t(
            "the between-curves toolkit, consolidated into one grid",
            "between-curves toolkit, ek hi grid mein consolidated"
          )}
        </T>
      </Fade>
      {CELLS.map((x, i) => (
        <Fade key={`cell${x}`} on={beat >= 0} delay={dl(0, 2.6 + i * 0.35)}>
          <Rect
            x={x}
            y={96}
            width={244}
            height={264}
            rx={14}
            fill={CREAM}
            opacity={0.5}
            stroke={MUTED}
            strokeWidth={1.4}
            strokeDasharray="7 6"
          />
        </Fade>
      ))}

      {/* ═══════════ beat 1 — cell ①: vertical strips ═══════════ */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={60} y={124} size={13} fill={RED} anchor="start" weight={800}>
          {t("① vertical strips", "① vertical strips")}
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.6)}
        d={arrowD(76, 292, 278, 292)}
        stroke={INK}
        sw={2.2}
        dur={0.5}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.9)}
        d={arrowD(76, 292, 76, 152)}
        stroke={INK}
        sw={2.2}
        dur={0.4}
      />
      <Fade on={beat >= 1} delay={dl(1, 2.4)}>
        <Path d={bandOf(ux1, f1, g1)} fill={GREEN} opacity={0.2} />
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 1.3)}
        d={pathOf(ux1, f1)}
        stroke={RED}
        sw={2.6}
        dur={0.7}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 1.9)}
        d={pathOf(ux1, g1)}
        stroke={BLUE}
        sw={2.6}
        dur={0.7}
      />
      {S1.map((u, i) => (
        <Fade key={`c1s${u}`} on={beat >= 1} delay={dl(1, 2.8 + i * 0.16)}>
          <Rect
            x={ux1(u) - 3}
            y={f1(u)}
            width={6}
            height={g1(u) - f1(u)}
            fill={AMBER}
            opacity={0.5}
            stroke={AMBER_DARK}
            strokeWidth={0.8}
          />
        </Fade>
      ))}
      <Fade on={beat >= 1} delay={dl(1, 3.8)}>
        <T x={200} y={172} size={11.5} fill={RED} anchor="start" weight={800}>
          y = f(x)
        </T>
        <T x={200} y={282} size={11.5} fill={BLUE} anchor="start" weight={800}>
          y = g(x)
        </T>
        <T x={110} y={310} size={12} fill={INK} weight={900}>
          a
        </T>
        <T x={250} y={310} size={12} fill={INK} weight={900}>
          b
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 4.2)}
        d="M 110 288 L 110 297 M 250 288 L 250 297"
        stroke={INK}
        sw={2}
        dur={0.3}
      />
      <Fade on={beat >= 1} delay={dl(1, 4.8)}>
        <T x={167} y={330} size={16} fill={GREEN_DARK} weight={900}>
          {"A = "}
          <Int lo="a" hi="b" s={16} />
          {"( f − g ) dx"}
        </T>
        <T x={167} y={350} size={11.5} fill={MUTED} script>
          {t("top − bottom", "top − bottom")}
        </T>
      </Fade>

      {/* ═══════════ beat 2 — cell ②: horizontal strips ═══════════ */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={312} y={124} size={13} fill={RED} anchor="start" weight={800}>
          {t("② horizontal strips", "② horizontal strips")}
        </T>
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 0.6)}
        d={arrowD(328, 292, 530, 292)}
        stroke={INK}
        sw={2.2}
        dur={0.5}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 0.9)}
        d={arrowD(328, 292, 328, 152)}
        stroke={INK}
        sw={2.2}
        dur={0.4}
      />
      <Fade on={beat >= 2} delay={dl(2, 2.4)}>
        <Path
          d={
            pathOf(px, vy) +
            " " +
            pathOf(qx, vy, 1, 0).replace(/^M/, "L") +
            " Z"
          }
          fill={GREEN}
          opacity={0.2}
        />
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 1.3)}
        d={pathOf(px, vy)}
        stroke={RED}
        sw={2.6}
        dur={0.7}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 1.9)}
        d={pathOf(qx, vy)}
        stroke={BLUE}
        sw={2.6}
        dur={0.7}
      />
      {S2.map((v, i) => (
        <Fade key={`c2s${v}`} on={beat >= 2} delay={dl(2, 2.8 + i * 0.16)}>
          <Rect
            x={qx(v)}
            y={vy(v) - 3}
            width={px(v) - qx(v)}
            height={6}
            fill={AMBER}
            opacity={0.5}
            stroke={AMBER_DARK}
            strokeWidth={0.8}
          />
        </Fade>
      ))}
      <Draw
        on={beat >= 2}
        delay={dl(2, 3.8)}
        d="M 322 280 L 334 280 M 322 172 L 334 172"
        stroke={INK}
        sw={2}
        dur={0.3}
      />
      <Fade on={beat >= 2} delay={dl(2, 4.2)}>
        <Path
          d="M 330 280 L 372 280 M 330 172 L 396 172"
          stroke={MUTED}
          strokeWidth={1.3}
          strokeDasharray="5 5"
          fill="none"
        />
        <T x={314} y={285} size={12} fill={INK} anchor="end" weight={900}>
          c
        </T>
        <T x={314} y={177} size={12} fill={INK} anchor="end" weight={900}>
          d
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 4.8)}>
        <T x={354} y={235} size={12} fill={BLUE} anchor="end" weight={900}>
          q
        </T>
        <T x={452} y={235} size={12} fill={RED} anchor="start" weight={900}>
          p
        </T>
        <T x={403} y={256} size={11.5} fill={AMBER_DARK} weight={800}>
          p − q
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 5.6)}>
        <T x={419} y={330} size={16} fill={GREEN_DARK} weight={900}>
          {"A = "}
          <Int lo="c" hi="d" s={16} />
          {"( p − q ) dy"}
        </T>
        <T x={419} y={350} size={11.5} fill={MUTED} script>
          {t("right − left", "right − left")}
        </T>
      </Fade>

      {/* ═══════════ beat 3 — cell ③: they cross inside ═══════════ */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={564} y={124} size={13} fill={RED} anchor="start" weight={800}>
          {t("③ they cross inside", "③ ve andar cross karti hain")}
        </T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 0.6)}
        d={arrowD(580, 292, 782, 292)}
        stroke={INK}
        sw={2.2}
        dur={0.5}
      />
      <Draw
        on={beat >= 3}
        delay={dl(3, 0.9)}
        d={arrowD(580, 292, 580, 152)}
        stroke={INK}
        sw={2.2}
        dur={0.4}
      />
      <Fade on={beat >= 3} delay={dl(3, 2.4)}>
        <Path d={C3_LEFT} fill={AMBER} opacity={0.3} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.8)}>
        <Path d={C3_RIGHT} fill={GREEN} opacity={0.24} />
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 1.3)}
        d={C3_F}
        stroke={RED}
        sw={2.6}
        dur={0.8}
      />
      <Draw
        on={beat >= 3}
        delay={dl(3, 1.9)}
        d={C3_G}
        stroke={BLUE}
        sw={2.6}
        dur={0.8}
      />
      <Fade on={beat >= 3} delay={dl(3, 3.2)}>
        <Circle cx={686} cy={224} r={4.5} fill={RED} />
        <Path
          d="M 686 224 L 686 290"
          stroke={RED}
          strokeWidth={1.5}
          strokeDasharray="5 5"
          fill="none"
        />
        <T x={686} y={310} size={11} fill={RED} weight={800}>
          {t("split here", "yahan split")}
        </T>
        <T x={640} y={226} size={11} fill={AMBER_DARK} weight={900}>
          g − f
        </T>
        <T x={730} y={228} size={11} fill={GREEN_DARK} weight={900}>
          f − g
        </T>
      </Fade>
      {/* a and b marked on the axis, exactly as cell ① does */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 4)}
        d="M 612 288 L 612 297 M 764 288 L 764 297"
        stroke={INK}
        sw={2}
        dur={0.3}
      />
      <Fade on={beat >= 3} delay={dl(3, 4.3)}>
        <T x={612} y={310} size={12} fill={INK} weight={900}>
          a
        </T>
        <T x={764} y={310} size={12} fill={INK} weight={900}>
          b
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 4.6)}>
        <T x={670} y={330} size={16} fill={GREEN_DARK} weight={900}>
          {"A = "}
          <Int lo="a" hi="b" s={16} />
          {"| f − g | dx"}
        </T>
        <T x={670} y={350} size={11.5} fill={MUTED} script>
          {t("split, then add magnitudes", "split karo, phir magnitudes jodo")}
        </T>
      </Fade>

      {/* ═══════════ beat 4 — cell ④: the lower curve is zero ═══════════ */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={816} y={124} size={13} fill={RED} anchor="start" weight={800}>
          {t("④ lower curve = 0", "④ lower curve = 0")}
        </T>
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.6)}
        d={arrowD(832, 292, 1034, 292)}
        stroke={INK}
        sw={2.2}
        dur={0.5}
      />
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.9)}
        d={arrowD(832, 292, 832, 152)}
        stroke={INK}
        sw={2.2}
        dur={0.4}
      />
      <Fade on={beat >= 4} delay={dl(4, 2.2)}>
        <Path
          d={pathOf(ux4, f4) + " L 1006 292 L 866 292 Z"}
          fill={GREEN}
          opacity={0.2}
        />
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 1.3)}
        d={pathOf(ux4, f4)}
        stroke={RED}
        sw={2.6}
        dur={0.8}
      />
      <Draw
        on={beat >= 4}
        delay={dl(4, 2.6)}
        d="M 866 292 H 1006"
        stroke={BLUE}
        sw={5}
        dur={0.6}
      />
      {S4.map((u, i) => (
        <Fade key={`c4s${u}`} on={beat >= 4} delay={dl(4, 3.2 + i * 0.16)}>
          <Rect
            x={ux4(u) - 3}
            y={f4(u)}
            width={6}
            height={292 - f4(u)}
            fill={AMBER}
            opacity={0.5}
            stroke={AMBER_DARK}
            strokeWidth={0.8}
          />
        </Fade>
      ))}
      {/* a and b marked on the axis, exactly as cell ① does */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 3.9)}
        d="M 866 288 L 866 297 M 1006 288 L 1006 297"
        stroke={INK}
        sw={2}
        dur={0.3}
      />
      <Fade on={beat >= 4} delay={dl(4, 4)}>
        <T x={950} y={176} size={11.5} fill={RED} anchor="start" weight={800}>
          y = f(x)
        </T>
        <T x={866} y={310} size={12} fill={INK} weight={900}>
          a
        </T>
        <T x={1006} y={310} size={12} fill={INK} weight={900}>
          b
        </T>
        <T x={936} y={310} size={11.5} fill={BLUE} weight={800}>
          g(x) = 0
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 4.8)}>
        <T x={936} y={330} size={16} fill={GREEN_DARK} weight={900}>
          {"A = "}
          <Int lo="a" hi="b" s={16} />
          {"f(x) dx"}
        </T>
        <T x={936} y={350} size={11.5} fill={MUTED} script>
          {t(
            "the first subtopic, recovered",
            "pehla subtopic, wapas mil gaya"
          )}
        </T>
      </Fade>

      {/* ═══════════ beat 5 — the catalogue result ═══════════ */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.2)}
        d="M 44 376 H 1036"
        stroke={MUTED}
        sw={1.2}
        dur={0.9}
      />
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={44} y={400} size={13} fill={RED} anchor="start" weight={800}>
          {t("THE CATALOGUE RESULT", "CATALOGUE RESULT")}
        </T>
      </Fade>
      <Draw
        on={beat >= 5}
        delay={dl(5, 1.2)}
        d={arrowD(96, 566, 224, 566)}
        stroke={INK}
        sw={2.2}
        dur={0.5}
      />
      <Draw
        on={beat >= 5}
        delay={dl(5, 1.5)}
        d={arrowD(96, 566, 96, 436)}
        stroke={INK}
        sw={2.2}
        dur={0.4}
      />
      <Fade on={beat >= 5} delay={dl(5, 3)}>
        <Path
          d={
            pathOf(pxOf, pRed, 0, KP, 36) +
            " " +
            pathOf(pxOf, pBlue, KP, 0, 36).replace(/^M/, "L") +
            " Z"
          }
          fill={GREEN}
          opacity={0.2}
        />
      </Fade>
      <Draw
        on={beat >= 5}
        delay={dl(5, 1.9)}
        d={pathOf(pxOf, pRed, 0, 108, 36)}
        stroke={RED}
        sw={2.6}
        dur={0.8}
      />
      <Draw
        on={beat >= 5}
        delay={dl(5, 2.5)}
        d={pathOf(pxOf, pBlue, 0, 104, 36)}
        stroke={BLUE}
        sw={2.6}
        dur={0.8}
      />
      {SP.map((X, i) => (
        <Fade key={`sp${X}`} on={beat >= 5} delay={dl(5, 3.4 + i * 0.18)}>
          <Rect
            x={pxOf(X) - 2.5}
            y={pRed(X)}
            width={5}
            height={pBlue(X) - pRed(X)}
            fill={AMBER}
            opacity={0.55}
            stroke={AMBER_DARK}
            strokeWidth={0.8}
          />
        </Fade>
      ))}
      <Draw
        on={beat >= 5}
        delay={dl(5, 4.2)}
        d={ringD(188, 474, 14, 11)}
        stroke={RED}
        sw={1.9}
        dur={0.5}
      />
      <Fade on={beat >= 5} delay={dl(5, 4.6)}>
        <Circle cx={188} cy={474} r={4} fill={RED} />
        <Circle cx={96} cy={566} r={4} fill={RED} />
        <T x={210} y={456} size={11} fill={INK} anchor="start" weight={900}>
          (4a, 4a)
        </T>
        <T x={84} y={582} size={11} fill={MUTED} weight={700}>
          O
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 5.4)}>
        <T x={232} y={502} size={13} fill={RED} anchor="start" weight={900}>
          y² = 4ax
        </T>
        <T x={232} y={524} size={13} fill={BLUE} anchor="start" weight={900}>
          x² = 4ay
        </T>
        <T x={232} y={544} size={11.5} fill={MUTED} anchor="start" script>
          {t("enclose", "gherti hain")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 6.4)}>
        <Chip
          x={232}
          y={555}
          w={140}
          h={34}
          fill={CREAM}
          stroke={GREEN}
          textFill={GREEN_DARK}
          size={18}
          script={false}
        >
          16a²/3
        </Chip>
      </Fade>

      {/* ═══════════ beat 6 — the habit that saves you ═══════════ */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={404} y={400} size={13} fill={RED} anchor="start" weight={800}>
          {t("THE HABIT THAT SAVES YOU", "WOH HABIT JO TUMHE BACHATI HAI")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={404} y={428} size={13} fill={INK} anchor="start" weight={700}>
          {t(
            "the limits ARE the intersection points",
            "limits hi intersection points hain"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={404} y={462} size={19} fill={GREEN_DARK} anchor="start" weight={900}>
          {t("solve  f(x) = g(x)  first", "pehle  f(x) = g(x)  solve karo")}
        </T>
      </Fade>
      <Draw
        on={beat >= 6}
        delay={dl(6, 2.8)}
        d="M 404 472 H 646"
        stroke={GREEN}
        sw={2}
        dur={0.6}
      />
      <Fade on={beat >= 6} delay={dl(6, 3.6)}>
        <Rect
          x={404}
          y={494}
          width={250}
          height={34}
          rx={12}
          fill={CREAM}
          stroke={MUTED}
          strokeWidth={1.6}
          strokeDasharray="7 6"
        />
        <T x={529} y={516} size={12.5} fill={MUTED} script>
          {t("limits copied from the text", "text se copy kiye limits")}
        </T>
      </Fade>
      <Draw
        on={beat >= 6}
        delay={dl(6, 4.6)}
        d={crossD(404, 494, 250, 34)}
        stroke={RED}
        sw={2.6}
        dur={0.4}
      />
      <Fade on={beat >= 6} delay={dl(6, 5.4)}>
        <T x={404} y={560} size={12.5} fill={RED} anchor="start" weight={800}>
          {t(
            "never numbers copied from the question",
            "kabhi bhi question se copy kiye numbers nahi"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 6.4)}>
        <T x={404} y={584} size={12.5} fill={RED} anchor="start" script>
          {t(
            "the most common zero-out-of-five on boards",
            "boards par sabse common zero-out-of-five"
          )}
        </T>
      </Fade>

      {/* ═══════════ beat 7 — the strategic choice ═══════════ */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={736} y={400} size={13} fill={RED} anchor="start" weight={800}>
          {t("ONE STRATEGIC CHOICE", "EK STRATEGIC CHOICE")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.9)}>
        <T x={736} y={424} size={12} fill={INK} anchor="start" weight={700}>
          {t(
            "a sideways-opening curve — x in terms of y",
            "sideways-opening curve — x, y ke terms mein"
          )}
        </T>
      </Fade>

      {/* left sketch — integrated in y, one clean pass */}
      <Draw
        on={beat >= 7}
        delay={dl(7, 1.4)}
        d={arrowD(LX0 - 8, SY0, 876, SY0)}
        stroke={INK}
        sw={2}
        dur={0.4}
      />
      <Draw
        on={beat >= 7}
        delay={dl(7, 1.7)}
        d={arrowD(LX0, SY0 + 46, LX0, SY0 - 44)}
        stroke={INK}
        sw={2}
        dur={0.35}
      />
      <Fade on={beat >= 7} delay={dl(7, 2.8)}>
        <Path d={wallRegion(sx, LWALL)} fill={GREEN} opacity={0.2} />
      </Fade>
      {/* the parabola is the LEFT boundary → BLUE, per the file's convention */}
      <Draw
        on={beat >= 7}
        delay={dl(7, 2.1)}
        d={pathOf(sx, sy, -SYMAX, SYMAX, 40)}
        stroke={BLUE}
        sw={2.6}
        dur={0.7}
      />
      {/* the wall is the RIGHT boundary → RED */}
      <Draw
        on={beat >= 7}
        delay={dl(7, 2.6)}
        d={`M ${LWALL} ${SY0 - 46} L ${LWALL} ${SY0 + 46}`}
        stroke={RED}
        sw={2.6}
        dur={0.4}
      />
      {HSTRIPS.map((Y, i) => (
        <Fade key={`hy${Y}`} on={beat >= 7} delay={dl(7, 3.2 + i * 0.13)}>
          <Rect
            x={sx(Y)}
            y={sy(Y) - 2.5}
            width={LWALL - sx(Y)}
            height={5}
            fill={AMBER}
            opacity={0.55}
            stroke={AMBER_DARK}
            strokeWidth={0.7}
          />
        </Fade>
      ))}
      <Fade on={beat >= 7} delay={dl(7, 4.1)}>
        <T x={762} y={468} size={16} fill={GREEN_DARK} anchor="start" weight={900}>
          ✓
        </T>
        <T x={744} y={566} size={12} fill={GREEN_DARK} anchor="start" weight={800}>
          {t("right − left, in dy", "right − left, dy mein")}
        </T>
        <T x={744} y={586} size={11.5} fill={MUTED} anchor="start" script>
          {t("one clean integral", "ek clean integral")}
        </T>
      </Fade>

      {/* right sketch — the SAME curve and the SAME region, forced into dx */}
      <Draw
        on={beat >= 7}
        delay={dl(7, 4.6)}
        d={arrowD(RX0 - 8, SY0, 1036, SY0)}
        stroke={INK}
        sw={2}
        dur={0.4}
      />
      <Draw
        on={beat >= 7}
        delay={dl(7, 4.9)}
        d={arrowD(RX0, SY0 + 46, RX0, SY0 - 44)}
        stroke={INK}
        sw={2}
        dur={0.35}
      />
      <Fade on={beat >= 7} delay={dl(7, 5.7)}>
        <Path d={wallRegion(dx2, RWALL)} fill={GREEN} opacity={0.2} />
      </Fade>
      <Draw
        on={beat >= 7}
        delay={dl(7, 5.2)}
        d={pathOf(dx2, sy, -SYMAX, SYMAX, 40)}
        stroke={BLUE}
        sw={2.6}
        dur={0.7}
      />
      <Draw
        on={beat >= 7}
        delay={dl(7, 5.5)}
        d={`M ${RWALL} ${SY0 - 46} L ${RWALL} ${SY0 + 46}`}
        stroke={RED}
        sw={2.6}
        dur={0.4}
      />
      {VSTRIPS.map((X, i) => {
        const Y = Math.sqrt(16 * (X - RX0));
        return (
          <Fade key={`vx${X}`} on={beat >= 7} delay={dl(7, 5.9 + i * 0.16)}>
            <Rect
              x={X - 3}
              y={SY0 - Y}
              width={6}
              height={2 * Y}
              fill={AMBER}
              opacity={0.5}
              stroke={AMBER_DARK}
              strokeWidth={0.7}
            />
          </Fade>
        );
      })}
      <Fade on={beat >= 7} delay={dl(7, 6.6)}>
        <T x={918} y={468} size={16} fill={RED} anchor="start" weight={900}>
          ✗
        </T>
        <T x={904} y={566} size={12} fill={RED} anchor="start" weight={800}>
          {t("forced into dx", "dx mein force kiya")}
        </T>
        <T x={904} y={586} size={11.5} fill={RED} anchor="start" script>
          {t("two-branch casework", "two-branch casework")}
        </T>
      </Fade>
    </Scene>
  );
}
