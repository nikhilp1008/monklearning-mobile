/**
 * P12Ch04 · Section 13 — "Derivation B: The Toroid Field"
 * Subtopic: Ampere's Circuital Law and Its Applications
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * RE-CHOREOGRAPHED (2026-08-22). What it used to show: four gates (0,1,5,11)
 * against eleven narration segments — and gate 11 never fires at all, since
 * there are only eleven beats (0..10), so the last block of the board was dead.
 * Four drawn strokes in total, all rules and underlines. Segment 2 says "look
 * at the figure… the shaded ring… the white circle… three dashed Amperian
 * circles" and there was no figure to look at.
 *
 * What the narration actually teaches: one shape of Amperian loop answers three
 * questions for a toroid. Symmetry ⇒ B is tangential and constant on any
 * concentric circle, so ∮B·dl = B(2πr) for all three loops. Loop 1 (in the
 * hole) encloses nothing ⇒ B = 0. Loop 3 (outside) is crossed twice by every
 * turn, oppositely ⇒ net zero ⇒ B = 0. Loop 2 (through the windings) is pierced
 * by all N turns ⇒ B = μ₀NI/2πr — which collapses to the solenoid result
 * B = μ₀nI once n = N/2πr, and which is NOT uniform across the section.
 *
 * Beat map (11 segments, gates 0..10 — every beat used):
 *  0  "one loop shape answers three questions"  title + underline + subtitle
 *  1  what a toroid is, mean radius r, no ends  the four defining lines
 *  2  "look at the figure"                      TOROID FIGURE: shaded annulus,
 *                                               white hole, 20 blue windings,
 *                                               three dashed Amperian circles
 *                                               (amber / red / green) + legend
 *  3  the symmetry argument                     4 lines + tangential B arrow
 *                                               drawn onto loop 2
 *  4  the left-hand side                        ∮ B · dl = B × 2πr
 *  5  loop 1, in the hole                       I_enc = 0 ⇒ B = 0
 *  6  loop 3, outside                           two crossings cancel ⇒ B = 0
 *  7  loop 2, inside the windings               I_enc = N I
 *  8  apply the law                             B = μ₀ N I / 2πr, depends on r
 *  9  the bridge to the solenoid                n = N/2πr ⇒ B = μ₀ n I
 * 10  not uniform across the section            B ∝ 1/r, inner edge stronger
 *
 * No numerals appear on this board — the narration is entirely symbolic, so the
 * board is too. Geometry is to scale: hole radius 54, ring 54..106, loop 1 at
 * 34 (inside the hole), loop 2 at 80 (the mean radius, through the winding),
 * loop 3 at 134 (clear of everything).
 */

import React from "react";
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, arrowD,
  INK, MUTED, AMBER_DARK, GREEN, RED, CREAM, PAPER,
  Scene,
} from '@/components/scenes/kit';

const BLUE = "#0284c7";

/** circle as a drawable path */
const circD = (cx: number, cy: number, r: number) =>
  `M ${cx - r} ${cy} A ${r} ${r} 0 1 1 ${cx + r} ${cy} A ${r} ${r} 0 1 1 ${cx - r} ${cy}`;

/** dashed circle as a single drawable path */
function dashCircD(cx: number, cy: number, r: number, n = 30): string {
  const p: string[] = [];
  for (let i = 0; i < n; i++) {
    const a0 = (i / n) * Math.PI * 2;
    const a1 = a0 + (0.6 / n) * Math.PI * 2;
    p.push(
      `M ${(cx + r * Math.cos(a0)).toFixed(1)} ${(cy + r * Math.sin(a0)).toFixed(1)} ` +
      `A ${r} ${r} 0 0 1 ${(cx + r * Math.cos(a1)).toFixed(1)} ${(cy + r * Math.sin(a1)).toFixed(1)}`
    );
  }
  return p.join(" ");
}

/** short dashed straight line — legend swatches */
function dashD(x1: number, y1: number, x2: number, y2: number, n = 4): string {
  const p: string[] = [];
  for (let i = 0; i < n; i++) {
    const a = i / n;
    const b = a + 0.6 / n;
    p.push(
      `M ${(x1 + (x2 - x1) * a).toFixed(1)} ${(y1 + (y2 - y1) * a).toFixed(1)} ` +
      `L ${(x1 + (x2 - x1) * b).toFixed(1)} ${(y1 + (y2 - y1) * b).toFixed(1)}`
    );
  }
  return p.join(" ");
}

const CX = 250;
const CY = 332;

export default function P12Ch04Sec13({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  /** the N windings — radial spokes across the ring */
  const windings = Array.from({ length: 20 }, (_, k) => {
    const a = (k * 18 * Math.PI) / 180;
    return [
      (CX + 56 * Math.cos(a)).toFixed(1),
      (CY + 56 * Math.sin(a)).toFixed(1),
      (CX + 104 * Math.cos(a)).toFixed(1),
      (CY + 104 * Math.sin(a)).toFixed(1),
    ] as const;
  });

  return (
    <Scene>
      {/* ═══════════ beat 0 — title ═══════════ */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={46} size={25} fill={RED} script>
          {t("The toroid — one loop shape, three answers", "The toroid — one loop shape, three answers")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.5)}
        d="M 296 62 C 450 58, 640 66, 784 60" stroke={RED} sw={2.2} dur={0.65} />
      <Fade on={beat >= 0} delay={dl(0, 2.6)}>
        <T x={540} y={80} size={13} fill={MUTED} script>
          {t("Ampere's law tells you where B is zero just as readily as where it is not",
             "Ampere's law tells you where B is zero just as readily as where it is not")}
        </T>
      </Fade>

      {/* ═══════════ beat 1 — what a toroid is ═══════════ */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={44} y={102} size={14} fill={RED} weight={800} anchor="start">
          {t("WHAT A TOROID IS", "WHAT A TOROID IS")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.7)}>
        <T x={44} y={124} size={12.6} fill={INK} weight={600} anchor="start">
          {t("a solenoid bent round until its two ends meet — a closed ring",
             "a solenoid bent round until its two ends meet — a closed ring")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.4)}>
        <T x={44} y={144} size={12.6} fill={INK} weight={600} anchor="start">
          {t("a hollow doughnut wound with N closely spaced turns, each carrying I",
             "a hollow doughnut wound with N closely spaced turns, each carrying I")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.1)}>
        <T x={44} y={164} size={12.6} fill={INK} weight={600} anchor="start">
          {t("mean radius r: centre of the hole → middle of the winding",
             "mean radius r: centre of the hole → middle of the winding")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.8)}>
        <T x={44} y={184} size={12.4} fill={GREEN} weight={700} anchor="start">
          {t("it has no ends ⇒ no end effects ⇒ a more perfectly confined field",
             "it has no ends ⇒ no end effects ⇒ a more perfectly confined field")}
        </T>
      </Fade>

      {/* ═══════════ beat 2 — the figure ═══════════ */}
      <Draw on={beat >= 2} delay={dl(2, 0.2)} d={circD(CX, CY, 106)} stroke={INK} sw={2.4} dur={1} fill={CREAM} />
      <Draw on={beat >= 2} delay={dl(2, 0.9)} d={circD(CX, CY, 54)} stroke={INK} sw={2.2} dur={0.8} fill={PAPER} />
      {windings.map(([x1, y1, x2, y2], i) => (
        <Draw key={`wd${i}`} on={beat >= 2} delay={dl(2, 1.5 + i * 0.03)}
          d={`M ${x1} ${y1} L ${x2} ${y2}`} stroke={BLUE} sw={1.9} dur={0.3} />
      ))}
      <Fade on={beat >= 2} delay={dl(2, 2.3)}>
        <T x={CX} y={336} size={12} fill={MUTED} weight={600}>
          {t("hole", "hole")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 2.6)} d={dashCircD(CX, CY, 34)} stroke={AMBER_DARK} sw={2} dur={0.8} />
      <Draw on={beat >= 2} delay={dl(2, 3.2)} d={dashCircD(CX, CY, 80)} stroke={RED} sw={2.2} dur={0.9} />
      <Draw on={beat >= 2} delay={dl(2, 3.9)} d={dashCircD(CX, CY, 134)} stroke={GREEN} sw={2} dur={1} />
      <Draw on={beat >= 2} delay={dl(2, 4.7)} d={arrowD(CX, CY, 295.9, 266.5)} stroke={INK} sw={1.8} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 5)}>
        <T x={296} y={292} size={12.5} fill={INK} weight={900} anchor="start">r</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 5.3)}>
        <T x={CX} y={478} size={11.8} fill={MUTED} weight={600}>
          {t("N turns, each carrying I", "N turns, each carrying I")}
        </T>
      </Fade>

      {/* legend */}
      <Draw on={beat >= 2} delay={dl(2, 5.6)} d={dashD(404, 210, 436, 210)} stroke={AMBER_DARK} sw={2.2} dur={0.25} />
      <Fade on={beat >= 2} delay={dl(2, 5.8)}>
        <T x={444} y={214} size={12.4} fill={AMBER_DARK} weight={700} anchor="start">
          {t("loop 1 — inside the hole", "loop 1 — inside the hole")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 6.1)} d={dashD(404, 236, 436, 236)} stroke={RED} sw={2.2} dur={0.25} />
      <Fade on={beat >= 2} delay={dl(2, 6.3)}>
        <T x={444} y={240} size={12.4} fill={RED} weight={700} anchor="start">
          {t("loop 2 — through the windings", "loop 2 — through the windings")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 6.6)} d={dashD(404, 262, 436, 262)} stroke={GREEN} sw={2.2} dur={0.25} />
      <Fade on={beat >= 2} delay={dl(2, 6.8)}>
        <T x={444} y={266} size={12.4} fill={GREEN} weight={700} anchor="start">
          {t("loop 3 — outside everything", "loop 3 — outside everything")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 7.1)}>
        <T x={404} y={292} size={12.2} fill={MUTED} weight={600} anchor="start">
          {t("blue radial lines = the N windings", "blue radial lines = the N windings")}
        </T>
      </Fade>

      {/* ═══════════ beat 3 — symmetry ═══════════ */}
      <Draw on={beat >= 3} delay={dl(3, 0.2)} d={arrowD(226, 252, 278, 252)} stroke={BLUE} sw={2.6} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={286} y={248} size={12.5} fill={BLUE} weight={900} anchor="start">B</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.9)}>
        <T x={404} y={316} size={12.8} fill={RED} weight={800} anchor="start">
          {t("SYMMETRY — put this in your answer", "SYMMETRY — put this in your answer")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <T x={404} y={336} size={12.3} fill={INK} weight={600} anchor="start">
          {t("identical from every direction about the axis", "identical from every direction about the axis")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.1)}>
        <T x={404} y={354} size={12.3} fill={INK} weight={600} anchor="start">
          {t("⇒ B is tangential to every concentric circle", "⇒ B is tangential to every concentric circle")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.7)}>
        <T x={404} y={372} size={12.3} fill={INK} weight={600} anchor="start">
          {t("⇒ same magnitude everywhere on that circle", "⇒ same magnitude everywhere on that circle")}
        </T>
      </Fade>

      {/* ═══════════ beat 4 — the left-hand side ═══════════ */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={404} y={408} size={12.8} fill={AMBER_DARK} weight={800} anchor="start">
          {t("SO THE LEFT-HAND SIDE IS EASY", "SO THE LEFT-HAND SIDE IS EASY")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={404} y={434} size={14} fill={INK} weight={900} anchor="start">∮ B · dl = B × 2πr</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.7)}>
        <T x={404} y={456} size={12.2} fill={MUTED} weight={600} anchor="start">
          {t("the same for all three loops", "the same for all three loops")}
        </T>
      </Fade>

      {/* ═══════════ beat 5 — loop 1 ═══════════ */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={724} y={316} size={12.7} fill={AMBER_DARK} weight={800} anchor="start">
          {t("LOOP 1 · in the hollow centre", "LOOP 1 · in the hollow centre")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={724} y={336} size={12.3} fill={INK} weight={600} anchor="start">
          {t("no winding passes through it ⇒ I_enc = 0", "no winding passes through it ⇒ I_enc = 0")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.8)}>
        <T x={724} y={356} size={12.6} fill={GREEN} weight={800} anchor="start">
          {t("⇒ B = 0 in the central hole", "⇒ B = 0 in the central hole")}
        </T>
      </Fade>

      {/* ═══════════ beat 6 — loop 3 ═══════════ */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={724} y={388} size={12.7} fill={AMBER_DARK} weight={800} anchor="start">
          {t("LOOP 3 · outside everything", "LOOP 3 · outside everything")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={724} y={408} size={12.3} fill={INK} weight={600} anchor="start">
          {t("every turn crosses the area twice, oppositely", "every turn crosses the area twice, oppositely")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={724} y={428} size={12.6} fill={GREEN} weight={800} anchor="start">
          {t("⇒ net I_enc = 0 ⇒ B = 0 outside too", "⇒ net I_enc = 0 ⇒ B = 0 outside too")}
        </T>
      </Fade>

      {/* ═══════════ beat 7 — loop 2 ═══════════ */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={724} y={460} size={12.7} fill={AMBER_DARK} weight={800} anchor="start">
          {t("LOOP 2 · inside the windings", "LOOP 2 · inside the windings")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1)}>
        <T x={724} y={480} size={12.3} fill={INK} weight={600} anchor="start">
          {t("all N turns pierce it once, same sense ⇒ I_enc = N I",
             "all N turns pierce it once, same sense ⇒ I_enc = N I")}
        </T>
      </Fade>

      {/* ═══════════ beat 8 — the result ═══════════ */}
      <Draw on={beat >= 8} delay={dl(8, 0.1)} d="M 44 496 L 1036 496" stroke={MUTED} sw={1.4} dur={0.8} />
      <Fade on={beat >= 8} delay={dl(8, 0.6)}>
        <T x={44} y={520} size={13} fill={AMBER_DARK} weight={800} anchor="start">
          {t("LOOP 2 GIVES THE ANSWER:", "LOOP 2 GIVES THE ANSWER:")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 1.2)}>
        <T x={290} y={520} size={15} fill={INK} weight={900} anchor="start">
          B (2πr) = μ₀ N I    ⇒    B = μ₀ N I / 2πr
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 2.2)}>
        <T x={700} y={520} size={12.3} fill={MUTED} weight={600} anchor="start">
          {t("— and it depends on r, unlike the solenoid", "— and it depends on r, unlike the solenoid")}
        </T>
      </Fade>

      {/* ═══════════ beat 9 — the bridge to the solenoid ═══════════ */}
      <Fade on={beat >= 9} delay={dl(9, 0.3)}>
        <T x={44} y={550} size={12.8} fill={GREEN} weight={800} anchor="start">
          {t("put n = N / 2πr (turns per unit length along the mean circle)  ⇒  B = μ₀ n I — the solenoid formula, rebuilt in one line",
             "put n = N / 2πr (turns per unit length along the mean circle)  ⇒  B = μ₀ n I — the solenoid formula, rebuilt in one line")}
        </T>
      </Fade>

      {/* ═══════════ beat 10 — the non-uniformity ═══════════ */}
      <Fade on={beat >= 10} delay={dl(10, 0.3)}>
        <T x={44} y={578} size={12.6} fill={RED} weight={800} anchor="start">
          {t("B ∝ 1/r ⇒ NOT uniform across the section: the inner edge is stronger, the outer weaker — uniform only when mean radius ≫ section radius",
             "B ∝ 1/r ⇒ NOT uniform across the section: the inner edge is stronger, the outer weaker — uniform only when mean radius ≫ section radius")}
        </T>
      </Fade>
    </Scene>
  );
}
