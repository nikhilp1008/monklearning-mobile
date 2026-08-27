/**
 * M11 Ch13 · Section 35 — "Procedure: finding missing observations from mean and variance"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept (procedure) — FLAGGED for extra scrutiny (reverse
 * problem). This section states the GENERAL method only; the worked
 * numeric example lands in Sec 39. Verify the algebra is genuinely correct:
 *  p+q known (from Σx_i=nx̄), p²+q² known (from Σ(x_i-x̄)²=nσ²)
 *  (p+q)² = p²+q²+2pq  ⇒  pq = [(p+q)² - (p²+q²)] / 2   (algebraically valid)
 *  p,q are roots of t² - (p+q)t + pq = 0  (standard sum/product → quadratic
 *  identity, correct)
 *
 * Beats (board_reveal_at_english [0, 10.15, 27.39, 44.89, 56.15, 71.51, 85.59]):
 *  0 anchor: heading
 *  1 represent: Step 1 — mean → Σx_i = nx̄ (one equation)
 *  2 represent: Step 2 — variance → Σ(x_i-x̄)² = nσ² (second equation)
 *  3 represent: Step 3 — solve the two simultaneously
 *  4 land (boxed, high emphasis): (p+q)² = p²+q²+2pq ⇒ get pq, then a quadratic
 *  5 note (red-margin): the quadratic t² - (p+q)t + pq = 0
 *  6 explain: two unknowns need two constraints
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  title (script 18, red, always-on)     | T mid | x540 y54
 *  b0 | heading (script 14, amber_dark)  | T mid | x540 y80
 *  b1 | Step 1 (14, ink)                 | T+Row st | x140 y108
 *  b2 | Step 2 (14, ink)                 | T+Row st | x140 y132
 *  b3 | Step 3 (14, ink)                 | T st  | x140 y156
 *  b4 | boxed identity (16, green)       | Draw+T| box x180..900 y176..222
 *  b5 | red bar + note (2 lines, 14)     | Draw+T| x60 y244..282 · text y258/278
 *  b6 | text (13, ink)                   | T mid | x540 y308
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD, Overline } from "./math-kit";

function XBar({
  on,
  delay = 0,
  x,
  y,
  size,
  anchor = "start",
  fill = INK,
  weight = 700,
}: {
  on: boolean;
  delay?: number;
  x: number;
  y: number;
  size: number;
  anchor?: "start" | "middle" | "end";
  fill?: string;
  weight?: number;
}) {
  const w = size * 0.6;
  return (
    <>
      <Fade on={on} delay={delay}>
        <T x={x} y={y} size={size} fill={fill} anchor={anchor} weight={weight}>
          x
        </T>
      </Fade>
      <Overline on={on} delay={delay} x={x} y={y} size={size} textWidth={w} anchor={anchor} stroke={fill} />
    </>
  );
}

export default function M11Ch13Sec35({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={54} size={18} fill={RED} anchor="middle" script>
          {t("Finding Missing Observations", "Missing Observations Dhoondhna")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={80} size={14} fill={AMBER_DARK} anchor="middle" script>
          {t("Two unknowns, two equations", "Do unknowns, do equations")}
        </T>
      </Fade>

      {/* beat 1 — step 1: mean → first equation */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={140} y={108} size={14} fill={INK} anchor="start" weight={700}>{t("Step 1: mean →", "Step 1: mean →")}</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={245} y={108} size={14} fill={INK} anchor="start" weight={700}>{"Σx_i = n·"}</T>
      </Fade>
      <XBar on={beat >= 1} delay={dl(1, 0.5)} x={362} y={108} size={14} />
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={374} y={108} size={14} fill={INK} anchor="start" weight={700}>
          {t("— one equation.", "— ek equation.")}
        </T>
      </Fade>

      {/* beat 2 — step 2: variance → second equation */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={140} y={132} size={14} fill={INK} anchor="start" weight={700}>{t("Step 2: variance → Σ(x_i-", "Step 2: variance → Σ(x_i-")}</T>
      </Fade>
      <XBar on={beat >= 2} delay={dl(2, 0.5)} x={en ? 405 : 405} y={132} size={14} />
      <Fade on={beat >= 2} delay={dl(2, 0.5)}>
        <T x={417} y={132} size={14} fill={INK} anchor="start" weight={700}>
          {t(")² = nσ² — a second equation.", ")² = nσ² — doosra equation.")}
        </T>
      </Fade>

      {/* beat 3 — step 3: solve simultaneously */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={140} y={156} size={14} fill={INK} anchor="start" weight={700}>
          {t("Step 3: solve the two simultaneously.", "Step 3: dono ko simultaneously solve karo.")}
        </T>
      </Fade>

      {/* beat 4 — land (boxed, high emphasis): the identity */}
      <Draw on={beat >= 4} delay={dl(4, 0)} d={roundRectD(180, 176, 720, 46)} stroke={GREEN} sw={2.2} dur={0.8} />
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={540} y={205} size={16} fill={GREEN} anchor="middle" weight={800}>
          {"(p+q)² = p²+q² + 2pq  ⇒  get pq, then a quadratic"}
        </T>
      </Fade>

      {/* beat 5 — note: the resulting quadratic */}
      <Draw on={beat >= 5} delay={dl(5, 0.1)} d="M 60 244 L 60 282" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={76} y={258} size={14} fill={RED} anchor="start" weight={700}>
          {t(
            "From p+q (known) and p²+q² (known), the identity hands you pq —",
            "p+q (known) aur p²+q² (known) se, identity aapko pq de deti hai —"
          )}
        </T>
        <T x={76} y={278} size={14} fill={RED} anchor="start" weight={700}>
          {t("then p, q are roots of t² - (p+q)t + pq = 0.", "phir p, q hain t² - (p+q)t + pq = 0 ke roots.")}
        </T>
      </Fade>

      {/* beat 6 — explain: two constraints */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={308} size={13} fill={INK} anchor="middle">
          {t(
            "Two unknowns need two constraints — the mean and variance supply exactly those.",
            "Do unknowns ko do constraints chahiye — mean aur variance exactly wahi dete hain."
          )}
        </T>
      </Fade>
    </Scene>
  );
}
