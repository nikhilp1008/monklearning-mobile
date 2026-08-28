/**
 * M12Ch01 · Section 50 — "Substitute, eliminate, and the Cauchy derivation"
 * Subtopic: Algebra of Functions and Functional Equations
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * Two things happen.  A linear system in the two unknowns f(x) and f(1 − x)
 * is built by the substitution x → 1 − x and then killed by elimination —
 * so the board shows the two equation cards, the substitution arrow between
 * them, the aligned subtraction with the partner terms actually struck out,
 * and finally the answer plotted: y = (x² + 2x − 1)/3 drawn on real axes.
 * Then the additive Cauchy equation gets its own frame at the bottom, with
 * the line f(x) = k x drawn through the origin, f(0) = 0 marked at the
 * origin and k = f(1) read off at x = 1 by dashed guides.
 *
 * Layout
 *   title band          y  30..100 (full width)
 *   vertical dividers   x  402 and x 768,  y 108..420
 *   LEFT   x  36..390, y 104..420 — equation (1), the substitution, (2)
 *   MIDDLE x 424..760, y 104..420 — the elimination and the boxed answer
 *   RIGHT  x 776..1044, y 104..420 — the answer plotted, origin (920, 330)
 *   bottom band y 428..596 (full width) — Cauchy: text x 40..430,
 *          line graph origin (560, 518), result block x 786..1044
 *
 * Beat map (8 segments, gates 0..7 — every beat used):
 *  0  "substitute-and-eliminate, then Cauchy"    title, underline, subtitle,
 *                                                top rule, column dividers
 *  1  "2f(x) + f(1 − x) = x², call it (1)"       equation card (1)
 *  2  "unknown appears twice — replace x by 1−x" the two-unknown note and the
 *                                                substitution arrow
 *  3  "that gives (2)"                           equation card (2)
 *  4  "2×(1) − (2): f(1 − x) cancels"            the aligned subtraction, the
 *                                                strike-outs, the rule, and
 *                                                3f(x) = 2x² − (1 − x)²
 *  5  "simplify ⇒ f(x) = (x² + 2x − 1)/3"        the expansion, the boxed
 *                                                answer, and the parabola
 *                                                drawn on its own axes
 *  6  "x = y = 0 ⇒ f(0) = 0; k = f(1)"           the Cauchy band: the line
 *                                                through the origin, the
 *                                                origin marked, k read at x=1
 *  7  "scaling + continuity ⇒ f(x) = k x"        the closing chip and notes
 *
 * Visual vocabulary (shared with Sections 49 and 51):
 *   axes INK with drawn arrowheads · the primary function AMBER_DARK ·
 *   the partner equation BLUE · every derived result GREEN_DARK ·
 *   cancellations and warnings RED · captions MUTED · equation cards CREAM.
 */

import React from "react";
import { Circle, Line, Rect } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD,
  INK, MUTED, AMBER_DARK, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

const BLUE = "#0284c7";

/* ---------- right frame: y = (x² + 2x − 1)/3 ---------- */
const Q_CX = 920;
const Q_CY = 330;
const Q_SX = 32;
const Q_SY = 40;
const qx = (x: number) => Q_CX + Q_SX * x;
const qy = (y: number) => Q_CY - Q_SY * y;
const fq = (x: number) => (x * x + 2 * x - 1) / 3;

function quadD(): string {
  const pts: string[] = [];
  for (let i = 0; i <= 44; i++) {
    const x = -4 + (6 * i) / 44;
    pts.push(`${qx(x).toFixed(1)} ${qy(fq(x)).toFixed(1)}`);
  }
  return `M ${pts.join(" L ")}`;
}
const QUAD_D = quadD();

/* ---------- bottom frame: the Cauchy line f(x) = k x ---------- */
const L_CX = 560;
const L_CY = 518;
const LINE_D = "M 470 565 L 676 458";   // passes exactly through (560, 518)
const K_PX = 620;                        // x = 1 on this frame
const K_PY = 487;                        // f(1) = k

export default function M12Ch01Sec50({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ═══════════ beat 0 — framing ═══════════ */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={50} size={24} fill={RED} script>
          {t("Substitute, eliminate — then the line",
             "Substitute karo, eliminate karo — phir line")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.1)}
        d="M 300 66 C 470 62, 640 70, 780 64" stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 1.8)}>
        <T x={540} y={86} size={12.5} fill={MUTED} script>
          {t("one worked example, and why the Cauchy equation gives a straight line",
             "ek worked example, aur Cauchy equation straight line kyun deta hai")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 40 100 H 1044" stroke={MUTED} sw={1.2} dur={1} />
      <Draw on={beat >= 0} delay={dl(0, 3.2)} d="M 402 108 V 420" stroke={MUTED} sw={1.2} dur={0.7} />
      <Draw on={beat >= 0} delay={dl(0, 3.6)} d="M 768 108 V 420" stroke={MUTED} sw={1.2} dur={0.7} />

      {/* ═══════════ beat 1 — equation (1) ═══════════ */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={40} y={120} size={13.5} fill={RED} weight={800} anchor="start">
          {t("① substitute and eliminate", "① substitute karo, eliminate karo")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <Rect x={40} y={136} width={340} height={52} rx={12}
          fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.8)}>
        <T x={56} y={168} size={17} fill={INK} weight={800} anchor="start">
          2 f(x) + f(1 − x)  =  x²
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 4.4)}>
        <T x={366} y={168} size={14} fill={AMBER_DARK} weight={900} anchor="end">(1)</T>
      </Fade>

      {/* ═══════════ beat 2 — build the partner ═══════════ */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={40} y={212} size={12.5} fill={MUTED} weight={700} anchor="start">
          {t("two unknowns here: f(x) and f(1 − x)",
             "yahan do unknown: f(x) aur f(1 − x)")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.6)}>
        <T x={40} y={236} size={12.5} fill={MUTED} weight={700} anchor="start">
          {t("so build a partner equation", "to ek partner equation banao")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 5.4)} d={arrowD(190, 252, 190, 286)} stroke={RED} sw={2.2} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 6)}>
        <T x={206} y={276} size={14} fill={RED} weight={900} anchor="start">x → 1 − x</T>
      </Fade>

      {/* ═══════════ beat 3 — equation (2) ═══════════ */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <Rect x={40} y={296} width={340} height={52} rx={12}
          fill={CREAM} stroke={BLUE} strokeWidth={1.8} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={56} y={328} size={17} fill={INK} weight={800} anchor="start">
          2 f(1 − x) + f(x)  =  (1 − x)²
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 3.6)}>
        <T x={366} y={328} size={14} fill={BLUE} weight={900} anchor="end">(2)</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 5.6)}>
        <T x={40} y={372} size={12.5} fill={MUTED} weight={700} anchor="start">
          {t("same rule, new input — nothing invented",
             "wahi rule, naya input — kuch bana nahi")}
        </T>
      </Fade>

      {/* ═══════════ beat 4 — the elimination ═══════════ */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={424} y={120} size={13.5} fill={RED} weight={800} anchor="start">
          {t("② eliminate f(1 − x)", "② f(1 − x) ko eliminate karo")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={424} y={148} size={12.5} fill={MUTED} weight={700} anchor="start">
          {t("multiply (1) by 2, then subtract (2)",
             "(1) ko 2 se multiply, phir (2) minus")}
        </T>
      </Fade>
      {/* row A : 2 × (1) */}
      <Fade on={beat >= 4} delay={dl(4, 2.4)}>
        <T x={446} y={186} size={15} fill={INK} weight={800} anchor="start">2 f(1 − x)</T>
        <T x={540} y={186} size={15} fill={INK} weight={800} anchor="start">+ 4 f(x)</T>
        <T x={622} y={186} size={15} fill={INK} weight={800} anchor="start">=  2x²</T>
      </Fade>
      {/* row B : − (2) */}
      <Fade on={beat >= 4} delay={dl(4, 4.2)}>
        <T x={424} y={216} size={15} fill={INK} weight={800} anchor="start">−</T>
        <T x={446} y={216} size={15} fill={INK} weight={800} anchor="start">2 f(1 − x)</T>
        <T x={540} y={216} size={15} fill={INK} weight={800} anchor="start">−  f(x)</T>
        <T x={622} y={216} size={15} fill={INK} weight={800} anchor="start">= − (1 − x)²</T>
      </Fade>
      {/* the partner terms struck out */}
      <Draw on={beat >= 4} delay={dl(4, 6.2)} d="M 442 185 L 528 177" stroke={RED} sw={2.2} dur={0.3} />
      <Draw on={beat >= 4} delay={dl(4, 6.5)} d="M 442 215 L 528 207" stroke={RED} sw={2.2} dur={0.3} />
      <Draw on={beat >= 4} delay={dl(4, 7)} d="M 424 236 H 724" stroke={INK} sw={1.6} dur={0.6} />
      <Fade on={beat >= 4} delay={dl(4, 8)}>
        <T x={424} y={268} size={17} fill={GREEN_DARK} weight={900} anchor="start">
          3 f(x)  =  2x² − (1 − x)²
        </T>
      </Fade>

      {/* ═══════════ beat 5 — simplify, box it, plot it ═══════════ */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={424} y={306} size={12.5} fill={MUTED} weight={700} anchor="start">
          {t("expand and collect the right side",
             "right side expand karke collect karo")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={424} y={332} size={15} fill={INK} weight={800} anchor="start">
          2x² − (1 − 2x + x²)  =  x² + 2x − 1
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 3)}>
        <Rect x={424} y={352} width={336} height={60} rx={13}
          fill={CREAM} stroke={GREEN_DARK} strokeWidth={2.2} />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 3.8)}>
        <T x={440} y={390} size={18} fill={GREEN_DARK} weight={900} anchor="start">
          f(x) = (x² + 2x − 1) / 3
        </T>
      </Fade>
      {/* the answer, drawn */}
      <Draw on={beat >= 5} delay={dl(5, 1.4)} d={arrowD(786, Q_CY, 1000, Q_CY)} stroke={INK} sw={2.2} dur={0.6} />
      <Draw on={beat >= 5} delay={dl(5, 1.9)} d={arrowD(Q_CX, 372, Q_CX, 226)} stroke={INK} sw={2.2} dur={0.6} />
      <Fade on={beat >= 5} delay={dl(5, 2.4)}>
        <T x={1006} y={335} size={12} fill={INK} weight={800} anchor="start">x</T>
        <T x={933} y={236} size={12} fill={INK} weight={800} anchor="start">y</T>
      </Fade>
      {/* unlabelled integer ticks, for scale only */}
      <Fade on={beat >= 5} delay={dl(5, 2.8)}>
        <Line x1={qx(-3)} y1={Q_CY - 5} x2={qx(-3)} y2={Q_CY + 5} stroke={INK} strokeWidth={1.5} />
        <Line x1={qx(-2)} y1={Q_CY - 5} x2={qx(-2)} y2={Q_CY + 5} stroke={INK} strokeWidth={1.5} />
        <Line x1={qx(-1)} y1={Q_CY - 5} x2={qx(-1)} y2={Q_CY + 5} stroke={INK} strokeWidth={1.5} />
        <Line x1={qx(1)} y1={Q_CY - 5} x2={qx(1)} y2={Q_CY + 5} stroke={INK} strokeWidth={1.5} />
        <Line x1={Q_CX - 5} y1={qy(1)} x2={Q_CX + 5} y2={qy(1)} stroke={INK} strokeWidth={1.5} />
        <Line x1={Q_CX - 5} y1={qy(2)} x2={Q_CX + 5} y2={qy(2)} stroke={INK} strokeWidth={1.5} />
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 4.6)} d={QUAD_D} stroke={AMBER_DARK} sw={2.8} dur={1.4} />
      <Fade on={beat >= 5} delay={dl(5, 6.2)}>
        <T x={786} y={212} size={12.5} fill={AMBER_DARK} weight={800} anchor="start">
          y = (x² + 2x − 1) / 3
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 7.4)}>
        <T x={786} y={400} size={12} fill={MUTED} weight={700} anchor="start">
          {t("the f we just solved for, plotted", "abhi jo f nikla, wahi plotted")}
        </T>
      </Fade>

      {/* ═══════════ beat 6 — Cauchy: f(0) = 0 and the slope k ═══════════ */}
      <Draw on={beat >= 6} delay={dl(6, 0.1)} d="M 40 428 H 1044" stroke={MUTED} sw={1.3} dur={0.9} />
      <Fade on={beat >= 6} delay={dl(6, 0.7)}>
        <T x={40} y={456} size={13.5} fill={RED} weight={800} anchor="start">
          {t("③ why f(x + y) = f(x) + f(y) forces a straight line",
             "③ f(x + y) = f(x) + f(y) straight line kyun deta hai")}
        </T>
      </Fade>
      {/* the line frame */}
      <Draw on={beat >= 6} delay={dl(6, 1.4)} d={arrowD(440, L_CY, 690, L_CY)} stroke={INK} sw={2.2} dur={0.6} />
      <Draw on={beat >= 6} delay={dl(6, 1.9)} d={arrowD(L_CX, 588, L_CX, 450)} stroke={INK} sw={2.2} dur={0.6} />
      <Fade on={beat >= 6} delay={dl(6, 2.4)}>
        <T x={698} y={523} size={12} fill={INK} weight={800} anchor="start">x</T>
        <T x={548} y={458} size={12} fill={INK} weight={800} anchor="end">y</T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 2.8)} d={LINE_D} stroke={GREEN_DARK} sw={2.8} dur={1} />
      <Fade on={beat >= 6} delay={dl(6, 3.2)}>
        <T x={40} y={486} size={14} fill={INK} weight={800} anchor="start">
          {t("put x = y = 0  ⇒  f(0) = 0", "x = y = 0 rakho  ⇒  f(0) = 0")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 4.2)}>
        <Circle cx={L_CX} cy={L_CY} r={4.5} fill={GREEN_DARK} />
        <T x={452} y={478} size={12} fill={GREEN_DARK} weight={800} anchor="start">f(0) = 0</T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 4.8)} d={arrowD(506, 484, 552, 512)} stroke={GREEN_DARK} sw={1.8} dur={0.3} />
      <Fade on={beat >= 6} delay={dl(6, 6)}>
        <T x={40} y={512} size={14} fill={INK} weight={800} anchor="start">
          {t("let k = f(1) — that fixes the slope",
             "k = f(1) lo — yeh slope fix karta hai")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 7)}>
        <Line x1={K_PX} y1={L_CY} x2={K_PX} y2={K_PY} stroke={GREEN_DARK} strokeWidth={1.5} strokeDasharray="5 4" />
        <Line x1={L_CX} y1={K_PY} x2={K_PX} y2={K_PY} stroke={GREEN_DARK} strokeWidth={1.5} strokeDasharray="5 4" />
        <Circle cx={K_PX} cy={K_PY} r={4.2} fill={GREEN_DARK} />
        <T x={K_PX} y={538} size={12} fill={INK} weight={700}>1</T>
        <T x={552} y={491} size={13} fill={GREEN_DARK} weight={900} anchor="end">k</T>
      </Fade>

      {/* ═══════════ beat 7 — scaling, continuity, f(x) = k x ═══════════ */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={40} y={540} size={12.5} fill={MUTED} weight={700} anchor="start">
          {t("additivity carries integer and rational scaling onto f",
             "additivity integer aur rational scaling f par le jaati hai")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 2.6)}>
        <T x={40} y={564} size={12.5} fill={MUTED} weight={700} anchor="start">
          {t("continuity then extends it to every real x",
             "continuity phir ise har real x tak faila deti hai")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 5)}>
        <T x={40} y={588} size={12.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("⇒ f(x) = k x, a line through the origin",
             "⇒ f(x) = k x, origin se guzarti line")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.4)}>
        <T x={686} y={470} size={14} fill={GREEN_DARK} weight={900} anchor="start">f(x) = k x</T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 3.4)}>
        <Chip x={786} y={462} w={258} h={52} fill={CREAM} stroke={GREEN_DARK}
          textFill={GREEN_DARK} size={20} script={false}>
          f(x) = k x
        </Chip>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 4)}>
        <T x={915} y={540} size={12} fill={MUTED} weight={700}>
          {t("additive + continuous ⇒ a straight line",
             "additive + continuous ⇒ ek straight line")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 5.2)}>
        <T x={915} y={564} size={12} fill={MUTED} weight={700}>
          {t("f(0) = 0 kills any constant term", "f(0) = 0 se constant term khatam")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 6.4)}>
        <T x={915} y={588} size={12} fill={MUTED} weight={700}>
          {t("k = f(1) is the slope", "k = f(1) hi slope hai")}
        </T>
      </Fade>
    </Scene>
  );
}
