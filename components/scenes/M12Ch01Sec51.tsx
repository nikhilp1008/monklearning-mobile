/**
 * M12Ch01 · Section 51 — "The one-over-x elimination, verified"
 * Subtopic: Algebra of Functions and Functional Equations
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * The reciprocal twin of Section 50, so the board is deliberately the same
 * machine with a different substitution: equation card (1), the arrow
 * x → 1/x, equation card (2), the aligned subtraction with the f(1/x) terms
 * actually struck out, the boxed answer f(x) = 2/x − x, and that answer
 * drawn — the odd two-branch curve on real axes, blowing up along x = 0.
 * The bottom band is the verification the voice insists on: the substitution
 * back into (1), with the 2/x terms cancelled on the board, collapsing to 3x.
 *
 * Layout
 *   title band          y  30..100 (full width)
 *   vertical dividers   x  402 and x 768,  y 108..420
 *   LEFT   x  36..390, y 104..420 — equation (1), the substitution, (2)
 *   MIDDLE x 424..760, y 104..420 — the elimination and the boxed answer
 *   RIGHT  x 776..1044, y 104..420 — f(x) = 2/x − x drawn, origin (900, 270)
 *   bottom band y 428..596, split by a divider at x 548:
 *          left  x  40..390  the verification
 *          right x 566..1044 the pattern to memorise
 *
 * Beat map (8 segments, gates 0..7 — every beat used):
 *  0  "the reciprocal version, plus a check"     title, underline, subtitle,
 *                                                top rule, column dividers
 *  1  "f(x) + 2f(1/x) = 3x, call it (1)"         equation card (1)
 *  2  "1/x sits inside f — replace x by 1/x"     the reason + the arrow
 *  3  "that gives (2)"                           equation card (2)
 *  4  "2 × (2) = 2f(1/x) + 4f(x) = 6/x, then −(1)"  the aligned subtraction
 *                                                and the rule beneath it
 *  5  "the f(1/x) terms cancel ⇒ f(x) = 2/x − x" the strike-outs,
 *                                                3f(x) = 6/x − 3x, the boxed
 *                                                answer, and the curve drawn
 *  6  "always verify — it collapses to 3x"       the substitution back into
 *                                                (1), with 2/x − 2/x struck
 *  7  "the pattern: x → 1/x, or x → 1 − x"       the two substitution chips
 *
 * Visual vocabulary (shared with Sections 49 and 50):
 *   axes INK with drawn arrowheads · the primary function AMBER_DARK ·
 *   the partner equation BLUE · every derived result GREEN_DARK ·
 *   cancellations and warnings RED · captions MUTED · equation cards CREAM.
 */

import React from "react";
import { Rect } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD,
  INK, MUTED, AMBER_DARK, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

const BLUE = "#0284c7";

/* ---------- right frame: f(x) = 2/x − x ---------- */
const R_CX = 900;
const R_CY = 270;
const R_SX = 42;
const R_SY = 26;
const rx = (x: number) => R_CX + R_SX * x;
const ry = (y: number) => R_CY - R_SY * y;
const fr = (x: number) => 2 / x - x;

function branchD(x0: number, x1: number): string {
  const pts: string[] = [];
  for (let i = 0; i <= 40; i++) {
    const x = x0 + ((x1 - x0) * i) / 40;
    pts.push(`${rx(x).toFixed(1)} ${ry(fr(x)).toFixed(1)}`);
  }
  return `M ${pts.join(" L ")}`;
}
const BR_POS = branchD(0.42, 2.85);    // x > 0
const BR_NEG = branchD(-2.85, -0.42);  // x < 0

export default function M12Ch01Sec51({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ═══════════ beat 0 — framing ═══════════ */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={50} size={24} fill={RED} script>
          {t("The 1/x trick — and the check that saves you",
             "1/x wala trick — aur wo check jo bachaata hai")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.1)}
        d="M 292 66 C 470 62, 640 70, 790 64" stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 1.8)}>
        <T x={540} y={86} size={12.5} fill={MUTED} script>
          {t("the partner substitution, the subtraction, and the verification",
             "partner substitution, subtraction, aur verification")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 40 100 H 1044" stroke={MUTED} sw={1.2} dur={1} />
      <Draw on={beat >= 0} delay={dl(0, 3.2)} d="M 402 108 V 420" stroke={MUTED} sw={1.2} dur={0.7} />
      <Draw on={beat >= 0} delay={dl(0, 3.6)} d="M 768 108 V 420" stroke={MUTED} sw={1.2} dur={0.7} />

      {/* ═══════════ beat 1 — equation (1) ═══════════ */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={40} y={120} size={13.5} fill={RED} weight={800} anchor="start">
          {t("① the reciprocal substitution", "① reciprocal wali substitution")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <Rect x={40} y={136} width={340} height={52} rx={12}
          fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.8)}>
        <T x={56} y={168} size={17} fill={INK} weight={800} anchor="start">
          f(x) + 2 f(1/x)  =  3x
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 4.6)}>
        <T x={366} y={168} size={14} fill={AMBER_DARK} weight={900} anchor="end">(1)</T>
      </Fade>

      {/* ═══════════ beat 2 — build the partner ═══════════ */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={40} y={212} size={12.5} fill={MUTED} weight={700} anchor="start">
          {t("1/x sits inside f — so replace x by 1/x",
             "1/x, f ke andar hai — to x ko 1/x se badlo")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.6)}>
        <T x={40} y={236} size={12.5} fill={MUTED} weight={700} anchor="start">
          {t("and 1/(1/x) = x, so f(x) returns",
             "aur 1/(1/x) = x, to f(x) wapas aata hai")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 4.8)} d={arrowD(190, 252, 190, 286)} stroke={RED} sw={2.2} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 5.4)}>
        <T x={206} y={276} size={14} fill={RED} weight={900} anchor="start">x → 1/x</T>
      </Fade>

      {/* ═══════════ beat 3 — equation (2) ═══════════ */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <Rect x={40} y={296} width={340} height={52} rx={12}
          fill={CREAM} stroke={BLUE} strokeWidth={1.8} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={56} y={328} size={17} fill={INK} weight={800} anchor="start">
          f(1/x) + 2 f(x)  =  3/x
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 3.4)}>
        <T x={366} y={328} size={14} fill={BLUE} weight={900} anchor="end">(2)</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 5.2)}>
        <T x={40} y={372} size={12.5} fill={MUTED} weight={700} anchor="start">
          {t("two equations, two unknowns", "do equations, do unknowns")}
        </T>
      </Fade>

      {/* ═══════════ beat 4 — set up the subtraction ═══════════ */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={424} y={120} size={13.5} fill={RED} weight={800} anchor="start">
          {t("② eliminate f(1/x)", "② f(1/x) ko eliminate karo")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={424} y={148} size={12.5} fill={MUTED} weight={700} anchor="start">
          {t("multiply (2) by 2, then subtract (1)",
             "(2) ko 2 se multiply, phir (1) minus")}
        </T>
      </Fade>
      {/* row A : 2 × (2) */}
      <Fade on={beat >= 4} delay={dl(4, 2.6)}>
        <T x={446} y={186} size={15} fill={INK} weight={800} anchor="start">2 f(1/x)</T>
        <T x={524} y={186} size={15} fill={INK} weight={800} anchor="start">+ 4 f(x)</T>
        <T x={606} y={186} size={15} fill={INK} weight={800} anchor="start">=  6/x</T>
      </Fade>
      {/* row B : − (1) */}
      <Fade on={beat >= 4} delay={dl(4, 6.4)}>
        <T x={424} y={216} size={15} fill={INK} weight={800} anchor="start">−</T>
        <T x={446} y={216} size={15} fill={INK} weight={800} anchor="start">2 f(1/x)</T>
        <T x={524} y={216} size={15} fill={INK} weight={800} anchor="start">−  f(x)</T>
        <T x={606} y={216} size={15} fill={INK} weight={800} anchor="start">= − 3x</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 8.6)} d="M 424 236 H 660" stroke={INK} sw={1.6} dur={0.6} />

      {/* ═══════════ beat 5 — cancel, solve, box, plot ═══════════ */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M 442 185 L 512 177" stroke={RED} sw={2.2} dur={0.3} />
      <Draw on={beat >= 5} delay={dl(5, 0.5)} d="M 442 215 L 512 207" stroke={RED} sw={2.2} dur={0.3} />
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        <T x={424} y={268} size={17} fill={GREEN_DARK} weight={900} anchor="start">
          3 f(x)  =  6/x − 3x
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 3)}>
        <T x={424} y={306} size={12.5} fill={MUTED} weight={700} anchor="start">
          {t("divide by three", "teen se divide karo")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 3.8)}>
        <Rect x={424} y={326} width={336} height={60} rx={13}
          fill={CREAM} stroke={GREEN_DARK} strokeWidth={2.2} />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 4.6)}>
        <T x={440} y={364} size={20} fill={GREEN_DARK} weight={900} anchor="start">
          f(x) = 2/x − x
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 6.4)}>
        <T x={424} y={410} size={12.5} fill={MUTED} weight={700} anchor="start">
          {t("the f(1/x) terms cancelled — one unknown left",
             "f(1/x) terms cancel ho gaye — ek unknown bacha")}
        </T>
      </Fade>
      {/* the answer, drawn */}
      <Draw on={beat >= 5} delay={dl(5, 7.4)} d={arrowD(776, R_CY, 1028, R_CY)} stroke={INK} sw={2.2} dur={0.6} />
      <Draw on={beat >= 5} delay={dl(5, 7.9)} d={arrowD(R_CX, 396, R_CX, 146)} stroke={INK} sw={2.2} dur={0.7} />
      <Fade on={beat >= 5} delay={dl(5, 8.4)}>
        <T x={1036} y={278} size={12} fill={INK} weight={800} anchor="start">x</T>
        <T x={884} y={160} size={12} fill={INK} weight={800} anchor="end">y</T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 8.8)} d={BR_NEG} stroke={AMBER_DARK} sw={2.8} dur={1.2} />
      <Draw on={beat >= 5} delay={dl(5, 10)} d={BR_POS} stroke={AMBER_DARK} sw={2.8} dur={1.2} />
      <Fade on={beat >= 5} delay={dl(5, 11.4)}>
        <T x={778} y={190} size={13} fill={GREEN_DARK} weight={800} anchor="start">
          f(x) = 2/x − x
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 12.6)}>
        <T x={778} y={416} size={12} fill={MUTED} weight={700} anchor="start">
          {t("two branches — 1/x needs x ≠ 0",
             "do branches — 1/x ko x ≠ 0 chahiye")}
        </T>
      </Fade>

      {/* ═══════════ beat 6 — the verification ═══════════ */}
      <Draw on={beat >= 6} delay={dl(6, 0.1)} d="M 40 428 H 1044" stroke={MUTED} sw={1.3} dur={0.9} />
      <Draw on={beat >= 6} delay={dl(6, 0.6)} d="M 548 442 V 592" stroke={MUTED} sw={1.2} dur={0.7} />
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={40} y={456} size={13.5} fill={RED} weight={800} anchor="start">
          {t("③ verify — substitute back into (1)",
             "③ verify karo — (1) mein wapas rakho")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.4)}>
        <T x={40} y={486} size={15} fill={INK} weight={800} anchor="start">f(x) + 2 f(1/x)</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 3.6)}>
        <T x={172} y={486} size={15} fill={INK} weight={800} anchor="start">
          =  (2/x − x) + 2 (2x − 1/x)
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 5.6)}>
        <T x={172} y={514} size={15} fill={INK} weight={800} anchor="start">=</T>
        <T x={196} y={514} size={15} fill={INK} weight={800} anchor="start">2/x</T>
        <T x={230} y={514} size={15} fill={INK} weight={800} anchor="start">− x + 4x</T>
        <T x={304} y={514} size={15} fill={INK} weight={800} anchor="start">− 2/x</T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 7)} d="M 192 513 L 223 504" stroke={RED} sw={2.2} dur={0.25} />
      <Draw on={beat >= 6} delay={dl(6, 7.3)} d="M 300 513 L 347 504" stroke={RED} sw={2.2} dur={0.25} />
      <Fade on={beat >= 6} delay={dl(6, 8.2)}>
        <T x={172} y={544} size={17} fill={GREEN_DARK} weight={900} anchor="start">=  3x  ✓</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 9.8)}>
        <T x={40} y={576} size={12.5} fill={MUTED} weight={700} anchor="start">
          {t("the 2/x terms cancel, and −x + 4x = 3x",
             "2/x terms cancel ho gaye, aur −x + 4x = 3x")}
        </T>
      </Fade>

      {/* ═══════════ beat 7 — the pattern to keep ═══════════ */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={566} y={456} size={13.5} fill={RED} weight={800} anchor="start">
          {t("④ the partner substitution to remember",
             "④ partner substitution yaad rakho")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.4)}>
        <Chip x={566} y={478} w={232} h={48} fill={CREAM} stroke={AMBER_DARK}
          textFill={AMBER_DARK} size={12.5} script={false}>
          {t("f(1/x) shows up  ⇒  x → 1/x", "f(1/x) dikhe  ⇒  x → 1/x")}
        </Chip>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 3.2)}>
        <Chip x={808} y={478} w={234} h={48} fill={CREAM} stroke={BLUE}
          textFill={BLUE} size={12.5} script={false}>
          {t("f(1 − x) shows up  ⇒  x → 1 − x", "f(1 − x) dikhe  ⇒  x → 1 − x")}
        </Chip>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 5)}>
        <T x={566} y={552} size={12.5} fill={MUTED} weight={700} anchor="start">
          {t("then subtract to kill the partner term",
             "phir subtract karke partner term udao")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 6.6)}>
        <T x={566} y={576} size={12.5} fill={MUTED} weight={700} anchor="start">
          {t("one substitution, one subtraction — done",
             "ek substitution, ek subtraction — ho gaya")}
        </T>
      </Fade>
    </Scene>
  );
}
