/**
 * M12Ch01 · Section 49 — "Combinations and a pattern match"
 * Subtopic: Algebra of Functions and Functional Equations
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * The voice does two things: it combines f(x) = x² with g(x) = 2x + 1 four
 * ways (sum, product, quotient + domain), and then pattern-matches the
 * functional equation f(x + y) = f(x)·f(y) with f(1) = 3 onto 3^x.  So the
 * board carries TWO real graphs — the parabola and the line on one frame
 * (with the zero of g marked as the hole in the quotient's domain), and the
 * exponential y = 3^x on another, with f(1) = 3 and f(3) = 27 read off it
 * by dashed guides.  Nothing here is a bullet list of the narration.
 *
 * Layout
 *   title band          y  30..100  (full width)
 *   vertical divider    x  508      y 108..508
 *   LEFT  panel  x  36..500, y 104..510  — combining f and g  (beats 1,2,3)
 *       graph frame  origin (170, 290), sx 34, sy 11
 *       algebra column x 40..240 · domain column x 300..442
 *   RIGHT panel  x 520..1044, y 104..510 — the functional equation (4,5,6)
 *       equation card x 520..830, y 134..208
 *       text column   x 524..780
 *       graph frame   origin (840, 470), sx 58, sy 8.3
 *   bottom band  y 514..596 (full width) — the Cauchy trap (beat 7)
 *
 * Beat map (8 segments, gates 0..7 — every beat used):
 *  0  "a combination example, then a pattern-match"  title, underline,
 *                                                    subtitle, rules, divider
 *  1  "f(x) = x², g(x) = 2x + 1, both on ℝ"          the graph frame: axes,
 *                                                    the parabola, the line,
 *                                                    both labelled
 *  2  "sum, and product = 2x³ + x²"                  the two combination
 *                                                    identities under the graph
 *  3  "quotient, domain all reals except −1/2"       the quotient line, the
 *                                                    dashed x = −½ wall, the
 *                                                    open circle where g = 0,
 *                                                    the domain column
 *  4  "f(x+y) = f(x)f(y), f(1) = 3, find f(3)"       the equation card
 *  5  "sum-to-product ⇒ aˣ; a = 3 ⇒ f(x) = 3ˣ"       the pattern line, the
 *                                                    exponential graph, and
 *                                                    f(1) = 3 read off it
 *  6  "f(3) = 3³ = 27, or f(1+1+1) = f(1)³"          f(3) = 27 marked on the
 *                                                    curve + the direct route
 *  7  "the trap: additive Cauchy would give 9"       3·f(1) = 9 crossed out
 *                                                    beside f(1)³ = 27
 *
 * Visual vocabulary (shared with Sections 50 and 51):
 *   axes INK with drawn arrowheads · the primary function AMBER_DARK ·
 *   the second/partner function BLUE · every derived result GREEN_DARK ·
 *   traps and exclusions RED · captions MUTED · equation cards CREAM.
 */

import React from "react";
import { Circle, Line, Rect } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, arrowD, crossD,
  INK, MUTED, AMBER_DARK, GREEN_DARK, RED, CREAM, PAPER,
  Scene,
} from '@/components/scenes/kit';

const BLUE = "#0284c7";

/* ---------- left frame: f(x) = x² and g(x) = 2x + 1 ---------- */
const A_CX = 170;
const A_CY = 290;
const A_SX = 34;
const A_SY = 11;
const ax = (x: number) => A_CX + A_SX * x;
const ay = (y: number) => A_CY - A_SY * y;

function parabolaD(): string {
  const pts: string[] = [];
  for (let i = 0; i <= 40; i++) {
    const x = -2.6 + (5.2 * i) / 40;
    pts.push(`${ax(x).toFixed(1)} ${ay(x * x).toFixed(1)}`);
  }
  return `M ${pts.join(" L ")}`;
}
const PARA_D = parabolaD();
const LINE_G_D = `M ${ax(-2.6).toFixed(1)} ${ay(-4.2).toFixed(1)} L ${ax(2.6).toFixed(1)} ${ay(6.2).toFixed(1)}`;
const HOLE_X = ax(-0.5); // 153 — where 2x + 1 vanishes

/* ---------- right frame: y = 3^x ---------- */
const E_CX = 840;
const E_CY = 470;
const E_SX = 58;
const E_SY = 8.3;
const ex = (x: number) => E_CX + E_SX * x;
const ey = (y: number) => E_CY - E_SY * y;

function expD(): string {
  const pts: string[] = [];
  for (let i = 0; i <= 48; i++) {
    const x = -0.7 + (3.85 * i) / 48;
    pts.push(`${ex(x).toFixed(1)} ${ey(Math.pow(3, x)).toFixed(1)}`);
  }
  return `M ${pts.join(" L ")}`;
}
const EXP_D = expD();
const P1X = ex(1);   // 898
const P1Y = ey(3);   // 445.1
const P3X = ex(3);   // 1014
const P3Y = ey(27);  // 245.9

export default function M12Ch01Sec49({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ═══════════ beat 0 — framing ═══════════ */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={50} size={24} fill={RED} script>
          {t("Combine, then match the pattern",
             "Combine karo, phir pattern match karo")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.1)}
        d="M 330 66 C 470 62, 640 70, 752 64" stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 1.8)}>
        <T x={540} y={86} size={12.5} fill={MUTED} script>
          {t("a combination example, then a pattern-match on a functional equation",
             "ek combination example, phir ek functional equation par pattern-match")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 40 100 H 1044" stroke={MUTED} sw={1.2} dur={1} />
      <Draw on={beat >= 0} delay={dl(0, 3.2)} d="M 508 108 V 508" stroke={MUTED} sw={1.2} dur={0.8} />

      {/* ═══════════ beat 1 — f and g, drawn ═══════════ */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={40} y={122} size={13.5} fill={RED} weight={800} anchor="start">
          {t("① combining f and g", "① f aur g ko combine karna")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={40} y={146} size={12} fill={MUTED} weight={700} anchor="start">
          {t("f(x) = x², g(x) = 2x + 1, both on ℝ",
             "f(x) = x², g(x) = 2x + 1, dono ℝ par")}
        </T>
      </Fade>
      {/* axes */}
      <Draw on={beat >= 1} delay={dl(1, 1.6)} d={arrowD(74, A_CY, 276, A_CY)} stroke={INK} sw={2.2} dur={0.6} />
      <Draw on={beat >= 1} delay={dl(1, 2.1)} d={arrowD(A_CX, 344, A_CX, 204)} stroke={INK} sw={2.2} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 2.6)}>
        <T x={284} y={295} size={12} fill={INK} weight={800} anchor="start">x</T>
        <T x={158} y={200} size={12} fill={INK} weight={800} anchor="end">y</T>
      </Fade>
      {/* the parabola f, and the line g */}
      <Draw on={beat >= 1} delay={dl(1, 3)} d={PARA_D} stroke={AMBER_DARK} sw={2.8} dur={1.2} />
      <Fade on={beat >= 1} delay={dl(1, 4.2)}>
        <T x={40} y={196} size={12.5} fill={AMBER_DARK} weight={800} anchor="start">f(x) = x²</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 4.6)} d={LINE_G_D} stroke={BLUE} sw={2.6} dur={1} />
      <Fade on={beat >= 1} delay={dl(1, 5.6)}>
        <T x={284} y={220} size={12.5} fill={BLUE} weight={800} anchor="start">g(x) = 2x + 1</T>
      </Fade>

      {/* ═══════════ beat 2 — sum and product ═══════════ */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={40} y={400} size={14.5} fill={GREEN_DARK} weight={800} anchor="start">
          (f + g)(x) = x² + 2x + 1
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3.4)}>
        <T x={40} y={426} size={14.5} fill={GREEN_DARK} weight={800} anchor="start">
          (f · g)(x) = x² (2x + 1)
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 5.8)}>
        <T x={60} y={452} size={14.5} fill={GREEN_DARK} weight={800} anchor="start">
          = 2x³ + x²
        </T>
      </Fade>

      {/* ═══════════ beat 3 — the quotient and its domain ═══════════ */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <Line x1={HOLE_X} y1={210} x2={HOLE_X} y2={344} stroke={RED} strokeWidth={1.6} strokeDasharray="6 5" />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.9)}>
        <Circle cx={HOLE_X} cy={A_CY} r={5.5} fill={PAPER} stroke={RED} strokeWidth={2.2} />
        <T x={HOLE_X} y={366} size={12.5} fill={RED} weight={800}>x = −½</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2)}>
        <T x={40} y={484} size={14.5} fill={GREEN_DARK} weight={800} anchor="start">
          (f / g)(x) = x² / (2x + 1)
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 3.6)}>
        <T x={300} y={400} size={13} fill={RED} weight={800} anchor="start">
          {t("domain of f / g:", "f / g ka domain:")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 5)}>
        <T x={300} y={424} size={13} fill={INK} weight={700} anchor="start">
          {t("2x + 1 = 0 at x = −½", "2x + 1 = 0 jab x = −½")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 6.4)}>
        <T x={300} y={448} size={13} fill={RED} weight={700} anchor="start">
          {t("so exclude x = −½", "isliye x = −½ hatao")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 8)}>
        <T x={300} y={472} size={13} fill={GREEN_DARK} weight={800} anchor="start">
          {t("domain = ℝ − { −½ }", "domain = ℝ − { −½ }")}
        </T>
      </Fade>

      {/* ═══════════ beat 4 — the functional equation ═══════════ */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={524} y={122} size={13.5} fill={RED} weight={800} anchor="start">
          {t("② a functional equation", "② ek functional equation")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <Rect x={520} y={134} width={310} height={74} rx={12}
          fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.6)}>
        <T x={534} y={162} size={17} fill={INK} weight={800} anchor="start">
          f(x + y) = f(x) · f(y)
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 5)}>
        <T x={534} y={192} size={14.5} fill={INK} weight={800} anchor="start">f(1) = 3</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 7.5)}>
        <T x={690} y={192} size={14.5} fill={RED} weight={800} anchor="start">f(3) = ?</T>
      </Fade>

      {/* ═══════════ beat 5 — the pattern, and y = 3ˣ drawn ═══════════ */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={524} y={240} size={12.5} fill={MUTED} weight={700} anchor="start">
          {t("a sum inside, a product outside",
             "input mein sum, output mein product")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={524} y={268} size={16} fill={AMBER_DARK} weight={800} anchor="start">
          aˣ⁺ʸ = aˣ · aʸ
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 3.4)}>
        <T x={524} y={296} size={15} fill={INK} weight={800} anchor="start">
          {t("so f(x) = aˣ,  f(1) = a = 3", "to f(x) = aˣ,  f(1) = a = 3")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 6)}>
        <T x={524} y={328} size={19} fill={GREEN_DARK} weight={900} anchor="start">
          f(x) = 3ˣ
        </T>
      </Fade>
      {/* the exponential frame */}
      <Draw on={beat >= 5} delay={dl(5, 1.4)} d={arrowD(794, E_CY, 1026, E_CY)} stroke={INK} sw={2.2} dur={0.6} />
      <Draw on={beat >= 5} delay={dl(5, 1.9)} d={arrowD(E_CX, 494, E_CX, 196)} stroke={INK} sw={2.2} dur={0.7} />
      <Fade on={beat >= 5} delay={dl(5, 2.5)}>
        <T x={1032} y={475} size={12} fill={INK} weight={800} anchor="start">x</T>
        <T x={826} y={196} size={12} fill={INK} weight={800} anchor="end">y</T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 6.6)} d={EXP_D} stroke={AMBER_DARK} sw={2.8} dur={1.4} />
      <Fade on={beat >= 5} delay={dl(5, 8)}>
        <T x={848} y={230} size={13} fill={AMBER_DARK} weight={800} anchor="start">y = 3ˣ</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 9)}>
        <Line x1={P1X} y1={E_CY} x2={P1X} y2={P1Y} stroke={GREEN_DARK} strokeWidth={1.5} strokeDasharray="5 4" />
        <Line x1={E_CX} y1={P1Y} x2={P1X} y2={P1Y} stroke={GREEN_DARK} strokeWidth={1.5} strokeDasharray="5 4" />
        <Circle cx={P1X} cy={P1Y} r={4.2} fill={GREEN_DARK} />
        <T x={P1X} y={488} size={12} fill={INK} weight={700}>1</T>
        <T x={832} y={449} size={12} fill={INK} weight={700} anchor="end">3</T>
      </Fade>

      {/* ═══════════ beat 6 — f(3) = 27, twice over ═══════════ */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={524} y={372} size={16} fill={GREEN_DARK} weight={900} anchor="start">
          f(3) = 3³ = 27
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <Line x1={P3X} y1={E_CY} x2={P3X} y2={P3Y} stroke={GREEN_DARK} strokeWidth={1.5} strokeDasharray="5 4" />
        <Line x1={E_CX} y1={P3Y} x2={P3X} y2={P3Y} stroke={GREEN_DARK} strokeWidth={1.5} strokeDasharray="5 4" />
        <Circle cx={P3X} cy={P3Y} r={4.8} fill={GREEN_DARK} />
        <T x={P3X} y={488} size={12} fill={INK} weight={700}>3</T>
        <T x={832} y={250} size={12.5} fill={GREEN_DARK} weight={800} anchor="end">27</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.2)}>
        <T x={856} y={300} size={18} fill={GREEN_DARK} weight={900} anchor="start">f(3) = 27</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 4.2)}>
        <T x={524} y={402} size={12.5} fill={MUTED} weight={700} anchor="start">
          {t("or straight from the rule, no a needed:",
             "ya seedha rule se, a ki zaroorat nahi:")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 6)}>
        <T x={524} y={428} size={14} fill={INK} weight={800} anchor="start">
          f(3) = f(1 + 1 + 1)
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 8.5)}>
        <T x={524} y={454} size={14} fill={INK} weight={800} anchor="start">
          = f(1) · f(1) · f(1) = 3³ = 27
        </T>
      </Fade>

      {/* ═══════════ beat 7 — the additive-Cauchy trap ═══════════ */}
      <Draw on={beat >= 7} delay={dl(7, 0.1)} d="M 40 514 H 1044" stroke={MUTED} sw={1.3} dur={0.9} />
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={40} y={540} size={13.5} fill={RED} weight={800} anchor="start">
          {t("TRAP — this is not the additive Cauchy equation",
             "TRAP — yeh additive Cauchy equation nahi hai")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={44} y={570} size={15} fill={RED} weight={800} anchor="start">
          f(3) = 3 · f(1) = 9
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 2.4)} d={crossD(44, 558, 150, 17)} stroke={RED} sw={2.2} dur={0.35} />
      <Fade on={beat >= 7} delay={dl(7, 3.1)}>
        <T x={230} y={570} size={15} fill={GREEN_DARK} weight={800} anchor="start">
          f(3) = f(1)³ = 27  ✓
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 4.3)}>
        <T x={430} y={548} size={12.5} fill={MUTED} weight={700} anchor="start">
          {t("the right-hand side is a PRODUCT f(x)·f(y),",
             "right-hand side ek PRODUCT hai f(x)·f(y),")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 5.4)}>
        <T x={430} y={574} size={12.5} fill={MUTED} weight={700} anchor="start">
          {t("not a sum f(x) + f(y) — so powers, not multiples",
             "sum f(x) + f(y) nahi — to powers, multiples nahi")}
        </T>
      </Fade>
    </Scene>
  );
}
