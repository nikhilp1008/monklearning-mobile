/**
 * M12Ch01 · Section 36 — "Transformations and the two modulus rules"
 * Subtopic: Standard Real Functions and Their Graphs
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * Everything the voice names is drawn. The base parabola is plotted, then
 * plotted again shifted right by h and up by k with both offsets measured by
 * arrows off the two vertices. The two modulus rules get a real side-by-side:
 * ONE base cubic f(x) = x³ − 3x on both halves of the board, with y = |f(x)|
 * folding its below-axis arcs upward (reflection arrows computed from the
 * actual curve values) and y = f(|x|) discarding the left half — drawn dashed
 * and labelled — and mirroring the right half across the y-axis.
 *
 * Grid: upper band y 100–300 (beat 1 at x 40–500, beat 2 at x 540–1044);
 * divider y 314 with the beat-3 heading at y 340; lower panels y 366–540
 * (beat 4 at x 40–516, beat 5 at x 566–1044) separated by the beat-6 dashed
 * rail at x 538; the closing rule and warning run y 556–583.
 *
 * Beat map (8 segments, gates 0..7 — every beat used):
 *  0  "a graph is a base shape relocated"   title + underline + subtitle + rule
 *  1  "base graph, then four operations"    the base parabola + the four
 *                                           operations, each with its own icon
 *  2  "f(x − h) + k: right by h, up by k"   base parabola and the shifted copy,
 *                                           h measured along the axis, k up
 *  3  "two modulus transformations"         divider + heading only — neither
 *                                           rule is named yet
 *  4  "y = |f(x)| flips below-axis up"      panel ① header, cubic plotted,
 *                                           below-axis parts shaded red, folded
 *                                           arcs in blue, two reflection arrows
 *  5  "y = f(|x|) mirrors the right half"   panel ② header, same cubic, left
 *                                           half dashed and marked discarded,
 *                                           right half mirrored across the y-axis
 *  6  "genuinely different operations"      the dashed rail + the ≠ badge +
 *                                           the closing rule and warning
 *  7  "side by side: flips up / mirrors"    the two summary captions under
 *                                           their own panels
 *
 * Visual vocabulary shared with Sections 34 and 35:
 *   axes INK with arrowheads · base curve AMBER_DARK · transformed result BLUE ·
 *   discarded material MUTED dashed · construction arrows GREEN_DARK ·
 *   shaded region a single low-opacity fill · warnings RED.
 */

import React from "react";
import { Circle, Line, Path } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, arrowD,
  INK, MUTED, AMBER_DARK, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

const BLUE = "#0284c7";

/* ── parabola sampler: py = oy − sy·x² ──────────────────────────────── */
function paraPts(ox: number, oy: number, sx: number, sy: number,
                 x0: number, x1: number, n: number): string[] {
  const pts: string[] = [];
  for (let i = 0; i <= n; i++) {
    const x = x0 + ((x1 - x0) * i) / n;
    pts.push(`${(ox + sx * x).toFixed(1)} ${(oy - sy * x * x).toFixed(1)}`);
  }
  return pts;
}
const MINI_D = `M ${paraPts(140, 232, 22, 14, -2.2, 2.2, 34).join(" L ")}`;
const BASE2_D = `M ${paraPts(660, 262, 24, 15, -2.2, 2.2, 34).join(" L ")}`;
const SHIFT2_D = `M ${paraPts(780, 232, 24, 15, -2.2, 2.2, 34).join(" L ")}`;

/* ── the shared base cubic f(x) = x³ − 3x, 34 px per x-unit, 12 px per y ─ */
const CSX = 34;
const CSY = 12;
const fc = (x: number) => x * x * x - 3 * x;
/** sample with an arbitrary y-value rule (identity, |f|, or f(|x|)) */
function cubPts(ox: number, oy: number, x0: number, x1: number, n: number,
                val: (x: number) => number): string[] {
  const pts: string[] = [];
  for (let i = 0; i <= n; i++) {
    const x = x0 + ((x1 - x0) * i) / n;
    pts.push(`${(ox + CSX * x).toFixed(1)} ${(oy - CSY * val(x)).toFixed(1)}`);
  }
  return pts;
}
const LOX = 278;
const LOY = 466;
const ROX = 800;
const ROY = 466;

/* left panel — y = f(x), and the two arcs of y = |f(x)| that had to fold up */
const L_BASE_D = `M ${cubPts(LOX, LOY, -2.2, 2.35, 60, fc).join(" L ")}`;
const L_FOLD_A_D = `M ${cubPts(LOX, LOY, -2.2, -1.7320508, 16, (x) => Math.abs(fc(x))).join(" L ")}`;
const L_FOLD_B_D = `M ${cubPts(LOX, LOY, 0, 1.7320508, 24, (x) => Math.abs(fc(x))).join(" L ")}`;
/* the two below-axis regions, closed back along the x-axis */
const L_REG_A_D =
  `M ${cubPts(LOX, LOY, -2.2, -1.7320508, 16, fc).join(" L ")} L ${(LOX - CSX * 2.2).toFixed(1)} ${LOY} Z`;
const L_REG_B_D = `M ${cubPts(LOX, LOY, 0, 1.7320508, 24, fc).join(" L ")} Z`;

/* right panel — the kept right half, the discarded left half, the mirror */
const R_KEEP_D = `M ${cubPts(ROX, ROY, 0, 2.35, 30, fc).join(" L ")}`;
const R_DROP_D = `M ${cubPts(ROX, ROY, -2.2, 0, 28, fc).join(" L ")}`;
const R_MIRROR_D = `M ${cubPts(ROX, ROY, -2.35, 0, 30, (x) => fc(Math.abs(x))).join(" L ")}`;

export default function M12Ch01Sec36({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  /** the four operations, in the order the voice lists them */
  const ops: [string, string][] = [
    ["horizontal shift", "horizontal shift"],
    ["vertical shift", "vertical shift"],
    ["stretch", "stretch"],
    ["reflection", "reflection"],
  ];

  return (
    <Scene>
      {/* ═══════════ beat 0 — the framing ═══════════ */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={46} size={25} fill={RED} script>
          {t("Transformations — and the two modulus rules",
             "Transformations — aur do modulus rules")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.1)}
        d="M 300 62 C 460 58, 640 66, 780 60" stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 1.9)}>
        <T x={540} y={82} size={12.5} fill={MUTED} script>
          {t("a complicated graph is usually just a base shape relocated — read it by transformation",
             "complicated graph aam taur par bas base shape relocate kiya hua hota hai")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.8)} d="M 40 96 H 1044" stroke={MUTED} sw={1.2} dur={1} />

      {/* ═══════════ beat 1 — base graph + the four operations in order ═══════════ */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={44} y={118} size={13.5} fill={RED} weight={800} anchor="start">
          {t("① read a graph as a transformed base", "① graph ko transformed base ki tarah padho")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.8)} d={arrowD(76, 232, 224, 232)} stroke={INK} sw={2} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 1.1)} d={arrowD(140, 268, 140, 152)} stroke={INK} sw={2} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <T x={230} y={237} size={11.5} fill={INK} weight={800} anchor="start">x</T>
        <T x={132} y={158} size={11.5} fill={INK} weight={800} anchor="end">y</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.8)} d={MINI_D} stroke={AMBER_DARK} sw={2.6} dur={1} />
      <Fade on={beat >= 1} delay={dl(1, 2.8)}>
        <Circle cx={140} cy={232} r={4.5} fill={AMBER_DARK} />
        <T x={196} y={176} size={12} fill={AMBER_DARK} weight={800} anchor="start">
          {t("base", "base")}
        </T>
      </Fade>

      {/* op ① horizontal */}
      <Draw on={beat >= 1} delay={dl(1, 3.4)} d={arrowD(252, 168, 284, 168)} stroke={GREEN_DARK} sw={2} dur={0.3} />
      {/* op ② vertical */}
      <Draw on={beat >= 1} delay={dl(1, 4.2)} d={arrowD(268, 210, 268, 182)} stroke={GREEN_DARK} sw={2} dur={0.3} />
      {/* op ③ stretch — two arrows pulling apart */}
      <Draw on={beat >= 1} delay={dl(1, 5)} d={arrowD(268, 224, 248, 224)} stroke={GREEN_DARK} sw={2} dur={0.25} />
      <Draw on={beat >= 1} delay={dl(1, 5.2)} d={arrowD(268, 224, 288, 224)} stroke={GREEN_DARK} sw={2} dur={0.25} />
      {/* op ④ reflection — two arrows meeting at a mirror line */}
      <Fade on={beat >= 1} delay={dl(1, 5.9)}>
        <Line x1={268} y1={240} x2={268} y2={262} stroke={MUTED} strokeWidth={1.4} strokeDasharray="4 4" />
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 6.1)} d={arrowD(248, 252, 262, 252)} stroke={GREEN_DARK} sw={2} dur={0.25} />
      <Draw on={beat >= 1} delay={dl(1, 6.3)} d={arrowD(288, 252, 274, 252)} stroke={GREEN_DARK} sw={2} dur={0.25} />

      {ops.map(([e, h], i) => (
        <Fade key={`op${i}`} on={beat >= 1} delay={dl(1, 3.6 + i * 0.8)}>
          <T x={292} y={172 + i * 28} size={13} fill={INK} weight={700} anchor="start">
            {`${i + 1} · ${t(e, h)}`}
          </T>
        </Fade>
      ))}
      <Fade on={beat >= 1} delay={dl(1, 7)}>
        <T x={44} y={284} size={12} fill={MUTED} weight={700} anchor="start">
          {t("each operation moves the picture in a predictable, decoupled way",
             "har operation picture ko predictable, decoupled tarike se hilata hai")}
        </T>
      </Fade>

      {/* ═══════════ beat 2 — f(x − h) + k ═══════════ */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={556} y={118} size={13.5} fill={RED} weight={800} anchor="start">
          {t("② f (x − h) + k  —  right by h, up by k", "② f (x − h) + k  —  h se daayein, k se upar")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={556} y={142} size={12} fill={MUTED} weight={700} anchor="start">
          {t("replace x by x − h to slide right, then add k to lift up",
             "x ko x − h se replace karo, phir k jodo upar uthane ke liye")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.6)} d={arrowD(590, 262, 1010, 262)} stroke={INK} sw={2.2} dur={0.7} />
      <Draw on={beat >= 2} delay={dl(2, 2.1)} d={arrowD(660, 282, 660, 156)} stroke={INK} sw={2.2} dur={0.6} />
      <Fade on={beat >= 2} delay={dl(2, 2.6)}>
        <T x={1016} y={267} size={11.5} fill={INK} weight={800} anchor="start">x</T>
        <T x={648} y={172} size={11.5} fill={INK} weight={800} anchor="end">y</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 2.9)} d={BASE2_D} stroke={AMBER_DARK} sw={2.8} dur={1} />
      <Fade on={beat >= 2} delay={dl(2, 3.9)}>
        <Circle cx={660} cy={262} r={4.5} fill={AMBER_DARK} />
        <T x={566} y={176} size={12} fill={AMBER_DARK} weight={800} anchor="start">
          {t("y = f (x)", "y = f (x)")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 4.5)} d={SHIFT2_D} stroke={BLUE} sw={2.8} dur={1} />
      <Fade on={beat >= 2} delay={dl(2, 5.5)}>
        <Circle cx={780} cy={232} r={4.5} fill={BLUE} />
        <T x={846} y={176} size={12} fill={BLUE} weight={800} anchor="start">
          {t("y = f (x − h) + k", "y = f (x − h) + k")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 6.2)}>
        <Line x1={780} y1={236} x2={780} y2={274} stroke={MUTED} strokeWidth={1.4} strokeDasharray="5 5" />
        <Line x1={782} y1={232} x2={812} y2={232} stroke={MUTED} strokeWidth={1.4} strokeDasharray="5 5" />
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 6.6)} d={arrowD(662, 276, 778, 276)} stroke={GREEN_DARK} sw={2} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 7.2)}>
        <T x={720} y={294} size={14} fill={GREEN_DARK} weight={900}>h</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 7.6)} d={arrowD(800, 260, 800, 234)} stroke={GREEN_DARK} sw={2} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 8.1)}>
        <T x={810} y={252} size={14} fill={GREEN_DARK} weight={900} anchor="start">k</T>
      </Fade>

      {/* ═══════════ beat 3 — the two modulus rules open ═══════════ */}
      <Draw on={beat >= 3} delay={dl(3, 0.1)} d="M 40 314 H 1044" stroke={MUTED} sw={1.3} dur={0.9} />
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={540} y={340} size={19} fill={RED} script>
          {t("Two modulus rules that look alike and do opposite things",
             "Do modulus rules jo ek jaise dikhte hain, kaam ulta karte hain")}
        </T>
      </Fade>

      {/* ═══════════ beat 4 — y = |f(x)| ═══════════ */}
      <Fade on={beat >= 4} delay={dl(4, 0.1)}>
        <T x={44} y={372} size={14} fill={RED} weight={800} anchor="start">
          {t("① y = | f (x) |  —  flip UP", "① y = | f (x) |  —  UPAR flip")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 0.2)} d={arrowD(70, LOY, 490, LOY)} stroke={INK} sw={2.2} dur={0.7} />
      <Draw on={beat >= 4} delay={dl(4, 0.7)} d={arrowD(278, 518, 278, 392)} stroke={INK} sw={2.2} dur={0.6} />
      <Fade on={beat >= 4} delay={dl(4, 1.2)}>
        <T x={496} y={471} size={11.5} fill={INK} weight={800} anchor="start">x</T>
        <T x={270} y={398} size={11.5} fill={INK} weight={800} anchor="end">y</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1.5)} d={L_BASE_D} stroke={AMBER_DARK} sw={2.8} dur={1.2} />
      <Fade on={beat >= 4} delay={dl(4, 2.7)}>
        <T x={366} y={404} size={12} fill={AMBER_DARK} weight={800} anchor="start">
          {t("y = f (x)", "y = f (x)")}
        </T>
        <Circle cx={LOX - CSX * 1.7320508} cy={LOY} r={4} fill={GREEN_DARK} />
        <Circle cx={LOX} cy={LOY} r={4} fill={GREEN_DARK} />
        <Circle cx={LOX + CSX * 1.7320508} cy={LOY} r={4} fill={GREEN_DARK} />
      </Fade>
      <Path
        d={L_REG_A_D}
        fill={RED}
        stroke="none"
        opacity={beat >= 4 ? 0.14 : 0}
      />
      <Path
        d={L_REG_B_D}
        fill={RED}
        stroke="none"
        opacity={beat >= 4 ? 0.14 : 0}
      />
      <Draw on={beat >= 4} delay={dl(4, 3.9)} d={arrowD(208.3, 492, 208.3, 440)} stroke={GREEN_DARK} sw={1.9} dur={0.4} />
      <Draw on={beat >= 4} delay={dl(4, 4.2)} d={arrowD(312, 486, 312, 446)} stroke={GREEN_DARK} sw={1.9} dur={0.4} />
      <Draw on={beat >= 4} delay={dl(4, 4.7)} d={L_FOLD_A_D} stroke={BLUE} sw={3} dur={0.6} />
      <Draw on={beat >= 4} delay={dl(4, 5.2)} d={L_FOLD_B_D} stroke={BLUE} sw={3} dur={0.7} />
      <Fade on={beat >= 4} delay={dl(4, 6)}>
        <T x={86} y={410} size={12.5} fill={BLUE} weight={800} anchor="start">
          {t("y = |f(x)|", "y = |f(x)|")}
        </T>
      </Fade>

      {/* ═══════════ beat 5 — y = f(|x|) ═══════════ */}
      <Fade on={beat >= 5} delay={dl(5, 0.1)}>
        <T x={560} y={372} size={14} fill={RED} weight={800} anchor="start">
          {t("② y = f ( | x | )  —  mirror ACROSS", "② y = f ( | x | )  —  ACROSS mirror")}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d={arrowD(592, ROY, 1012, ROY)} stroke={INK} sw={2.2} dur={0.7} />
      <Draw on={beat >= 5} delay={dl(5, 0.7)} d={arrowD(800, 518, 800, 392)} stroke={INK} sw={2.2} dur={0.6} />
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        <T x={1018} y={471} size={11.5} fill={INK} weight={800} anchor="start">x</T>
        <T x={792} y={398} size={11.5} fill={INK} weight={800} anchor="end">y</T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 1.5)} d={R_KEEP_D} stroke={AMBER_DARK} sw={2.8} dur={0.9} />
      <Fade on={beat >= 5} delay={dl(5, 2.4)}>
        <T x={888} y={404} size={12} fill={AMBER_DARK} weight={800} anchor="start">
          {t("y = f (x)", "y = f (x)")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2.9)}>
        <Path d={R_DROP_D} fill="none" stroke={MUTED} strokeWidth={2.2} strokeDasharray="6 6" />
        <T x={610} y={440} size={11.5} fill={MUTED} weight={700} anchor="start">
          {t("discarded", "hata diya")}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 3.4)} d={arrowD(670, 438, 758, 441)} stroke={MUTED} sw={1.6} dur={0.4} />
      <Draw on={beat >= 5} delay={dl(5, 4)} d={arrowD(834, 490, 766, 490)} stroke={GREEN_DARK} sw={1.9} dur={0.5} />
      <Draw on={beat >= 5} delay={dl(5, 4.4)} d={arrowD(875, 417, 725, 417)} stroke={GREEN_DARK} sw={1.9} dur={0.6} />
      <Draw on={beat >= 5} delay={dl(5, 5.1)} d={R_MIRROR_D} stroke={BLUE} sw={3} dur={0.9} />
      <Fade on={beat >= 5} delay={dl(5, 6.1)}>
        <T x={608} y={412} size={12.5} fill={BLUE} weight={800} anchor="start">
          {t("y = f ( |x| )", "y = f ( |x| )")}
        </T>
        <Circle cx={ROX - CSX * 1.7320508} cy={ROY} r={4} fill={GREEN_DARK} />
        <Circle cx={ROX} cy={ROY} r={4} fill={GREEN_DARK} />
        <Circle cx={ROX + CSX * 1.7320508} cy={ROY} r={4} fill={GREEN_DARK} />
      </Fade>

      {/* ═══════════ beat 6 — they are genuinely different ═══════════ */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <Line x1={538} y1={386} x2={538} y2={516} stroke={MUTED} strokeWidth={1.4} strokeDasharray="6 6" />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.9)}>
        <Circle cx={538} cy={452} r={17} fill={CREAM} stroke={RED} strokeWidth={2.2} />
        <T x={538} y={459} size={20} fill={RED} weight={900}>≠</T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.6)} d="M 40 556 H 1044" stroke={MUTED} sw={1.3} dur={0.9} />
      <Fade on={beat >= 6} delay={dl(6, 2.4)}>
        <T x={540} y={580} size={13} fill={RED} weight={800}>
          {t("genuinely different operations — confusing them is a classic error",
             "sach mein alag operations — inhe confuse karna classic error hai")}
        </T>
      </Fade>

      {/* ═══════════ beat 7 — the side-by-side reading ═══════════ */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={278} y={536} size={13} fill={BLUE} weight={800}>
          {t("the below-axis part flips UP", "below-axis hissa UPAR flip hota hai")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.8)}>
        <T x={800} y={536} size={13} fill={BLUE} weight={800}>
          {t("the right half is mirrored across the y-axis",
             "right half y-axis ke across mirror hota hai")}
        </T>
      </Fade>
    </Scene>
  );
}
