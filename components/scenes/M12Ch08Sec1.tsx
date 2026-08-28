/**
 * M12Ch08 · Section 1 — "The thin-strip idea: area as a sum of strips"
 * Subtopic: Area under Simple Curves
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * The whole section is one picture told twice: a plot bounded below by a
 * straight canal (the x-axis) and above by a wavy stream y = f(x), sliced
 * into vertical dx strips; then the same plot measured against the vertical
 * canal, sliced into horizontal dy strips. So the board is TWO real graphs
 * with real strips drawn in them, not a bullet list.
 *
 * Beat map (8 segments, gates 0..7 — every beat used):
 *  0  "no clean formula for a curvy boundary,   title + underline + subtitle;
 *      like under the arch y = x² + 1"          the y = x² + 1 arch inset drawn
 *                                               top-right with its region shaded
 *                                               and the "no formula" caption
 *  1  "surveyor's plot: straight canal is the   main axes, the wavy curve y = f(x)
 *      x-axis, wavy stream is y = f(x)"         drawn, the plot region shaded amber,
 *                                               canal + stream labels with a pointer
 *  2  "slice into very thin vertical strips"    14 thin vertical strips fill the
 *                                               shaded region, staggered left→right
 *  3  "each strip ≈ rectangle: width dx,        one strip re-drawn bold + ringed in
 *      height y, area ≈ y dx = f(x) dx"         red, dx bracket under the axis,
 *                                               leader line to "≈ y dx = f(x) dx"
 *  4  "add from x = a (well) to x = b           a and b ticked red on the axis with
 *      (banyan tree): Area = ∫ₐᵇ f(x) dx"       their landmarks, and the integral
 *  5  "flip axes: x = g(y), horizontal strips   second figure — vertical canal as the
 *      swept up the y-axis"                     y-axis, curve x = g(y), region shaded,
 *                                               11 horizontal strips swept upward
 *  6  "height dy, length g(y), y = c to y = d"  c and d ticked, one horizontal strip
 *                                               bold + ringed, dy bracket, length
 *                                               arrow, Area = ∫ᶜᵈ g(y) dy
 *  7  "pick the variable that matches the       divider + the habit, with the dx-case
 *      geometry"                                and the dy-case side by side
 *
 * Visual vocabulary shared with Sections 2 and 3 of this subtopic:
 *   axes INK + arrowD, primary curve AMBER_DARK, swept region AMBER @ 0.2,
 *   strips GREEN outline + GREEN fill @ 0.16, limits of integration in RED,
 *   final results GREEN_DARK weight 900.
 */

import React from "react";
import { Path, Rect } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, arrowD, ringD,
  INK, INK_LIGHT, MUTED, AMBER, AMBER_DARK, GREEN, GREEN_DARK, RED,
  Scene,
} from '@/components/scenes/kit';

/* ── beat 0: the arch y = x² + 1, inset top-right ─────────────────── */
/* ONE scale for both axes (isotropic) so the drawn curve really is the
   parabola the voice names — 40 px per unit, x running 0 → 1.2. */
const ARCH_S = 40;
const ARCH_X0 = 880;
const ARCH_Y0 = 206;
const ARCH_PTS: [number, number][] = Array.from({ length: 9 }, (_, i) => {
  const x = i * 0.15;
  return [ARCH_X0 + x * ARCH_S, ARCH_Y0 - (x * x + 1) * ARCH_S];
});
const ARCH_STR = ARCH_PTS.map(([px, py]) => `${px.toFixed(1)} ${py.toFixed(1)}`).join(" L ");
const ARCH_CURVE = `M ${ARCH_STR}`;
const ARCH_END_X = ARCH_PTS[ARCH_PTS.length - 1][0];
const ARCH_REGION = `M ${ARCH_X0} ${ARCH_Y0} L ${ARCH_STR} L ${ARCH_END_X.toFixed(1)} ${ARCH_Y0} Z`;

/* ── beats 1–4: the farm plot, dx strips ──────────────────────────── */
const AXIS_Y = 450;
const A_X = 176;
const B_X = 500;
const fY = (px: number) =>
  286 - 46 * Math.sin((px - 110) / 95) - 18 * Math.sin((px - 110) / 38);

const F_CURVE = (() => {
  const p: string[] = [];
  for (let px = 126; px <= 566; px += 8) p.push(`${px} ${fY(px).toFixed(1)}`);
  return `M ${p.join(" L ")}`;
})();

const F_REGION = (() => {
  const p: string[] = [`${A_X} ${AXIS_Y}`];
  for (let px = A_X; px <= B_X; px += 6) p.push(`${px} ${fY(px).toFixed(1)}`);
  p.push(`${B_X} ${AXIS_Y}`);
  return `M ${p.join(" L ")} Z`;
})();

const N_STRIPS = 14;
const W_STRIP = (B_X - A_X) / N_STRIPS;
const STRIPS = Array.from({ length: N_STRIPS }, (_, i) => {
  const x0 = A_X + i * W_STRIP;
  return { x: x0 + 1, w: W_STRIP - 2, top: fY(x0 + W_STRIP / 2) };
});
const HI = STRIPS[8]; // the strip the voice zooms into on beat 3

/* ── beats 5–6: the same plot against the vertical canal, dy strips ─ */
const G_AXIS_Y = 500;
const G_AXIS_X = 700;
const C_Y = 470;
const D_Y = 320;
const gX = (py: number) => {
  const u = G_AXIS_Y - py;
  return 774 + 84 * Math.sin(u / 62) + 28 * Math.sin(u / 25);
};

const G_CURVE = (() => {
  const p: string[] = [];
  for (let py = 500; py >= 298; py -= 6) p.push(`${gX(py).toFixed(1)} ${py}`);
  return `M ${p.join(" L ")}`;
})();

const G_REGION = (() => {
  const p: string[] = [`${G_AXIS_X} ${C_Y}`];
  for (let py = C_Y; py >= D_Y; py -= 5) p.push(`${gX(py).toFixed(1)} ${py}`);
  p.push(`${G_AXIS_X} ${D_Y}`);
  return `M ${p.join(" L ")} Z`;
})();

const N_HSTRIPS = 11;
const H_STRIP = (C_Y - D_Y) / N_HSTRIPS;
const HSTRIPS = Array.from({ length: N_HSTRIPS }, (_, i) => {
  const y0 = D_Y + i * H_STRIP;
  return { y: y0 + 1, h: H_STRIP - 2, right: gX(y0 + H_STRIP / 2) };
});
const HHI = HSTRIPS[5]; // the strip the voice zooms into on beat 6

export default function M12Ch08Sec1({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ═══════════ beat 0 — the gap that integration fills ═══════════ */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("Area as a sum of very thin strips",
             "Area = bahut patli strips ka sum")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.2)}
        d="M 336 64 C 460 60, 620 68, 744 62" stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 2)}>
        <T x={540} y={86} size={12.5} fill={MUTED} script>
          {t("a curvy boundary has no memorised formula — integration is exactly what fills that gap",
             "curvy boundary ke liye koi ratta formula nahi — integration bilkul wahi gap bharta hai")}
        </T>
      </Fade>

      {/* the y = x² + 1 arch, drawn small at the top right */}
      <Draw on={beat >= 0} delay={dl(0, 3)} d={arrowD(866, ARCH_Y0, 1000, ARCH_Y0)} stroke={INK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 0} delay={dl(0, 3.2)} d={arrowD(ARCH_X0, 218, ARCH_X0, 104)} stroke={INK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 0} delay={dl(0, 3.7)} d={ARCH_CURVE} stroke={AMBER_DARK} sw={2.6} dur={0.9} />
      <Fade on={beat >= 0} delay={dl(0, 4.5)}>
        <Path d={ARCH_REGION} fill={AMBER} fillOpacity={0.2} stroke="none" />
        <T x={952} y={130} size={13} fill={AMBER_DARK} weight={800} anchor="start">y = x² + 1</T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 5.2)}>
        <T x={942} y={228} size={11.5} fill={MUTED} script>
          {t("what IS this area?", "is area ki value kya hai?")}
        </T>
      </Fade>
      {/* the caption column lives in x 620..850 — clear of the inset axes at x 866+ */}
      <Fade on={beat >= 0} delay={dl(0, 6)}>
        <T x={620} y={122} size={13} fill={INK} weight={700} anchor="start">
          {t("rectangle, triangle, circle —",
             "rectangle, triangle, circle —")}
        </T>
        <T x={620} y={144} size={13} fill={INK} weight={700} anchor="start">
          {t("formulas you already own",
             "formulas tumhare paas hain")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 8)}>
        <T x={620} y={166} size={13} fill={RED} weight={800} anchor="start">
          {t("a region trapped under a CURVE —",
             "CURVE ke neeche fansa region —")}
        </T>
        <T x={620} y={188} size={13} fill={RED} weight={800} anchor="start">
          {t("nothing memorised fits",
             "koi ratta formula fit nahi hota")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 10)}>
        <T x={620} y={210} size={13} fill={GREEN_DARK} weight={800} anchor="start">
          {t("integration fills exactly that gap", "integration wahi gap bharta hai")}
        </T>
      </Fade>

      {/* ═══════════ beat 1 — the surveyor's farm plot ═══════════ */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={44} y={110} size={14} fill={RED} weight={800} anchor="start">
          {t("① The surveyor's irregular farm plot",
             "① Surveyor ka irregular farm plot")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1)} d={arrowD(96, AXIS_Y, 580, AXIS_Y)} stroke={INK} sw={2.6} dur={0.8} />
      <Draw on={beat >= 1} delay={dl(1, 1.6)} d={arrowD(110, 470, 110, 120)} stroke={INK} sw={2.6} dur={0.8} />
      <Fade on={beat >= 1} delay={dl(1, 2.2)}>
        <T x={588} y={456} size={14} fill={INK} weight={800} anchor="start">x</T>
        <T x={100} y={126} size={14} fill={INK} weight={800} anchor="end">y</T>
        <T x={102} y={468} size={13} fill={INK_LIGHT} anchor="end">O</T>
        {/* sits UNDER the horizontal axis it names, clear of the y-axis shaft */}
        <T x={44} y={490} size={10.5} fill={MUTED} weight={700} anchor="start">
          {t("canal = x-axis", "canal = x-axis")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 3)} d={F_CURVE} stroke={AMBER_DARK} sw={2.8} dur={1.5} />
      <Fade on={beat >= 1} delay={dl(1, 4.6)}>
        <T x={505} y={300} size={14} fill={AMBER_DARK} weight={800} anchor="start">
          {t("the stream:  y = f(x)", "stream:  y = f(x)")}
        </T>
      </Fade>
      {/* tip taken straight off fY so it lands ON the curve, not near it */}
      <Draw on={beat >= 1} delay={dl(1, 5.2)} d={arrowD(556, 312, 548, fY(548))} stroke={AMBER_DARK} sw={1.6} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 6)}>
        <Path d={F_REGION} fill={AMBER} fillOpacity={0.2} stroke="none" />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 7.4)}>
        <T x={140} y={140} size={12.5} fill={MUTED} weight={600} anchor="start">
          {t("one edge along the straight canal, the opposite edge a wavy stream",
             "ek edge straight canal ke saath, opposite edge ek wavy stream")}
        </T>
      </Fade>

      {/* ═══════════ beat 2 — slice it into thin vertical strips ═══════════ */}
      {STRIPS.map((s, i) => (
        <Fade key={`vs${i}`} on={beat >= 2} delay={dl(2, 0.3 + i * 0.14)}>
          <Rect x={s.x} y={s.top} width={s.w} height={AXIS_Y - s.top}
            fill={GREEN} fillOpacity={0.16} stroke={GREEN} strokeWidth={1.3} />
        </Fade>
      ))}
      <Fade on={beat >= 2} delay={dl(2, 2.6)}>
        <T x={140} y={164} size={12.5} fill={INK} weight={700} anchor="start">
          {t("slice the plot into a long series of very thin vertical strips",
             "plot ko bahut patli vertical strips ki lambi series me slice karo")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 5)}>
        <T x={140} y={186} size={12.5} fill={MUTED} weight={600} anchor="start">
          {t("each one as narrow as a sheet of paper", "har ek kaagaz ki sheet jitni patli")}
        </T>
      </Fade>

      {/* ═══════════ beat 3 — one strip is almost a rectangle ═══════════ */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <Rect x={HI.x} y={HI.top} width={HI.w} height={AXIS_Y - HI.top}
          fill={GREEN} fillOpacity={0.34} stroke={GREEN_DARK} strokeWidth={2.4} />
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 0.8)} d={ringD(372, 354, 26, 104)} stroke={RED} sw={2} dur={0.7} />
      {/* the dx bracket under the axis */}
      <Draw on={beat >= 3} delay={dl(3, 1.8)}
        d={`M ${HI.x} 456 L ${HI.x} 466 M ${HI.x} 466 L ${HI.x + HI.w} 466 M ${HI.x + HI.w} 456 L ${HI.x + HI.w} 466`}
        stroke={RED} sw={1.8} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 2.3)}>
        <T x={HI.x + HI.w / 2} y={482} size={13} fill={RED} weight={900}>dx</T>
      </Fade>
      {/* leader out to the strip-area statement */}
      <Draw on={beat >= 3} delay={dl(3, 2.8)} d={`M 372 ${HI.top.toFixed(1)} L 392 250`} stroke={GREEN_DARK} sw={1.5} dur={0.3} />
      <Fade on={beat >= 3} delay={dl(3, 3.2)}>
        <T x={396} y={246} size={14} fill={GREEN_DARK} weight={900} anchor="start">≈ y · dx = f(x) dx</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 5)}>
        <T x={140} y={210} size={12.5} fill={INK} weight={700} anchor="start">
          {t("each strip is almost a rectangle: width a tiny dx, height y",
             "har strip lagbhag rectangle hai: width tiny dx, height y")}
        </T>
      </Fade>

      {/* ═══════════ beat 4 — sum from x = a to x = b ═══════════ */}
      <Draw on={beat >= 4} delay={dl(4, 0.2)} d={`M ${A_X} 442 L ${A_X} 460`} stroke={RED} sw={2.6} dur={0.3} />
      <Draw on={beat >= 4} delay={dl(4, 0.5)} d={`M ${B_X} 442 L ${B_X} 460`} stroke={RED} sw={2.6} dur={0.3} />
      <Fade on={beat >= 4} delay={dl(4, 0.9)}>
        <T x={A_X} y={476} size={14} fill={RED} weight={900}>x = a</T>
        <T x={A_X} y={492} size={11} fill={MUTED} weight={700}>
          {t("the well", "kuaan")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.6)}>
        <T x={B_X} y={476} size={14} fill={RED} weight={900}>x = b</T>
        <T x={B_X} y={492} size={11} fill={MUTED} weight={700}>
          {t("the banyan tree", "bargad ka ped")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 3.4)}>
        <T x={44} y={520} size={22} fill={GREEN_DARK} weight={900} anchor="start">
          Area = ∫ₐᵇ f(x) dx
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 5.6)}>
        <T x={264} y={516} size={12} fill={MUTED} script anchor="start">
          {t("adding infinitely many infinitely-thin strips IS the definite integral",
             "infinitely many infinitely-thin strips jodna hi definite integral hai")}
        </T>
      </Fade>

      {/* ═══════════ beat 5 — flip the axes: x = g(y) ═══════════ */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={620} y={252} size={14} fill={RED} weight={800} anchor="start">
          {t("② Measured against the vertical canal:  x = g(y)",
             "② Vertical canal ke against maapo:  x = g(y)")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.4)}>
        <T x={620} y={272} size={12.5} fill={MUTED} weight={600} anchor="start">
          {t("same logic, axes flipped — sweep strips up the y-axis",
             "wahi logic, bas axes flip — strips y-axis par sweep")}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 2.4)} d={arrowD(672, G_AXIS_Y, 1040, G_AXIS_Y)} stroke={INK} sw={2.6} dur={0.7} />
      <Draw on={beat >= 5} delay={dl(5, 3)} d={arrowD(G_AXIS_X, 516, G_AXIS_X, 292)} stroke={INK} sw={2.6} dur={0.7} />
      <Fade on={beat >= 5} delay={dl(5, 3.6)}>
        <T x={1044} y={518} size={14} fill={INK} weight={800} anchor="end">x</T>
        <T x={690} y={298} size={14} fill={INK} weight={800} anchor="end">y</T>
        <T x={692} y={518} size={13} fill={INK_LIGHT} anchor="end">O</T>
        <T x={714} y={310} size={10.5} fill={MUTED} weight={700} anchor="start">
          {t("the vertical canal", "vertical canal")}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 4.2)} d={G_CURVE} stroke={AMBER_DARK} sw={2.8} dur={1.3} />
      <Fade on={beat >= 5} delay={dl(5, 5.4)}>
        <T x={876} y={466} size={14} fill={AMBER_DARK} weight={800} anchor="start">x = g(y)</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 6)}>
        <Path d={G_REGION} fill={AMBER} fillOpacity={0.2} stroke="none" />
      </Fade>
      {HSTRIPS.map((s, i) => (
        <Fade key={`hs${i}`} on={beat >= 5} delay={dl(5, 6.8 + i * 0.18)}>
          <Rect x={G_AXIS_X} y={s.y} width={s.right - G_AXIS_X} height={s.h}
            fill={GREEN} fillOpacity={0.16} stroke={GREEN} strokeWidth={1.3} />
        </Fade>
      ))}

      {/* ═══════════ beat 6 — height dy, length g(y), from c to d ═══════════ */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <Rect x={G_AXIS_X} y={HHI.y} width={HHI.right - G_AXIS_X} height={HHI.h}
          fill={GREEN} fillOpacity={0.34} stroke={GREEN_DARK} strokeWidth={2.4} />
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 0.7)} d={ringD(766, 394, 86, 17)} stroke={RED} sw={2} dur={0.6} />
      {/* dy bracket, hung off the y-axis */}
      <Draw on={beat >= 6} delay={dl(6, 1.4)}
        d={`M 692 ${HHI.y.toFixed(1)} L 682 ${HHI.y.toFixed(1)} M 682 ${HHI.y.toFixed(1)} L 682 ${(HHI.y + HHI.h).toFixed(1)} M 692 ${(HHI.y + HHI.h).toFixed(1)} L 682 ${(HHI.y + HHI.h).toFixed(1)}`}
        stroke={RED} sw={1.8} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 1.9)}>
        <T x={676} y={399} size={13} fill={RED} weight={900} anchor="end">dy</T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 2.4)}
        d={arrowD(G_AXIS_X + 4, 394, HHI.right - 4, 394)} stroke={GREEN_DARK} sw={1.8} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 3)}>
        <T x={876} y={336} size={13} fill={INK} weight={700} anchor="start">
          {t("strips are horizontal", "strips horizontal hain")}
        </T>
        <T x={876} y={356} size={13} fill={GREEN_DARK} weight={800} anchor="start">
          {t("height dy · length g(y)", "height dy · length g(y)")}
        </T>
      </Fade>
      {/* the limits c and d on the y-axis */}
      <Draw on={beat >= 6} delay={dl(6, 4)} d={`M 692 ${C_Y} L 710 ${C_Y}`} stroke={RED} sw={2.6} dur={0.3} />
      <Draw on={beat >= 6} delay={dl(6, 4.3)} d={`M 692 ${D_Y} L 710 ${D_Y}`} stroke={RED} sw={2.6} dur={0.3} />
      <Fade on={beat >= 6} delay={dl(6, 4.7)}>
        <T x={686} y={475} size={13.5} fill={RED} weight={900} anchor="end">y = c</T>
        <T x={686} y={325} size={13.5} fill={RED} weight={900} anchor="end">y = d</T>
        <T x={876} y={376} size={12.5} fill={RED} weight={800} anchor="start">
          {t("from y = c up to y = d", "y = c se y = d tak")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 6.4)}>
        <T x={952} y={418} size={17} fill={GREEN_DARK} weight={900}>Area = ∫ᶜᵈ g(y) dy</T>
      </Fade>

      {/* ═══════════ beat 7 — the habit to install ═══════════ */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 44 536 H 1036" stroke={MUTED} sw={1.3} dur={0.9} />
      <Fade on={beat >= 7} delay={dl(7, 0.9)}>
        <T x={44} y={560} size={14} fill={RED} weight={800} anchor="start">
          {t("THE HABIT — pick the variable that matches the geometry",
             "AADAT — wahi variable chuno jo geometry se match kare")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 3)}>
        <T x={560} y={560} size={12} fill={MUTED} script anchor="start">
          {t("choose badly and a one-line integral becomes a messy two-piece one",
             "galat chuna, to one-line integral messy two-piece ban jaata hai")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 6)}>
        <T x={44} y={584} size={12.5} fill={INK} weight={700} anchor="start">
          {t("walled left & right by vertical lines  →  dx strips win",
             "left-right vertical lines se walled  →  dx strips jeetti hain")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 9)}>
        <T x={560} y={584} size={12.5} fill={GREEN_DARK} weight={700} anchor="start">
          {t("capped above & below by horizontal lines  →  dy strips are cleaner",
             "upar-neeche horizontal lines se capped  →  dy strips cleaner hain")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <Rect x={528} y={550} width={1.6} height={42} fill={MUTED} />
      </Fade>
    </Scene>
  );
}
