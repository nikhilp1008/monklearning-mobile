/**
 * Ch03 · Section 39 — "The five pitfalls in two-dimensional kinematics"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 7.4, 21.5, 31.2, 41.8, 55.3, 56.3, 57.3]):
 *  0 heading
 *  1 ① speed by Pythagoras only
 *  2 ② coupling the axes
 *  3 each axis its own 1-D problem
 *  4 ③ vector equations, per component
 *  5 ④ average speed vs |average velocity|
 *  6 ⑤ differentiation slips
 *  7 chain-rule warning
 *
 * Layout plan (Kalam bl −1.3s..+0.5s · Anek bl −0.78s..+0.31s):
 *  rows: circles cx100 r14 · titles st x130
 *  r1 | cy140 title bl 146
 *  r2 | cy210 title bl 216 · b3 sub bl 242
 *  r3 | cy300 title bl 306
 *  r4 | cy370 title bl 376 · sub bl 402
 *  r5 | cy455 title bl 461 · b7 sub bl 487
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  INK,
  INK_LIGHT,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

function NumCircle({ on, delay, cy, n }: { on: boolean; delay: number; cy: number; n: string }) {
  return (
    <>
      <Draw
        on={on}
        delay={delay}
        d={`M 86 ${cy} a 14 14 0 1 0 28 0 a 14 14 0 1 0 -28 0`}
        stroke={RED}
        sw={2.2}
        dur={0.5}
      />
      <Fade on={on} delay={delay + 0.6}>
        <T x={100} y={cy + 4.5} size={13} fill={RED} weight={800}>{n}</T>
      </Fade>
    </>
  );
}

export default function Ch03Sec39({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — heading */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={48} size={20} fill={INK} script>
          {t(
            "FIVE PITFALLS in 2-D kinematics",
            "2-D kinematics ke PAANCH PITFALLS"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.2)} d="M 340 62 h 400" stroke={AMBER} sw={2.2} dur={0.6} />

      {/* ① Pythagoras only */}
      <NumCircle on={beat >= 1} delay={dl(1, 0.6)} cy={140} n="1" />
      <Fade on={beat >= 1} delay={dl(1, 1.6)}>
        <T x={130} y={146} size={14} fill={INK} weight={700} anchor="start">
          {t(
            "speed = √(vx² + vy²) — NEVER vx + vy",
            "speed = √(vx² + vy²) — KABHI vx + vy nahi"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 7)}>
        <T x={130} y={172} size={12} fill={INK_LIGHT} script anchor="start">
          {t("they are perpendicular — Pythagoras or nothing", "woh perpendicular hain — Pythagoras ya kuchh nahi")}
        </T>
      </Fade>

      {/* ② coupling the axes */}
      <NumCircle on={beat >= 2} delay={dl(2, 0.6)} cy={210} n="2" />
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <T x={130} y={216} size={14} fill={INK} weight={700} anchor="start">
          {t(
            "coupling the axes — the deepest misconception here",
            "axes ko jodna — yahan ki sabse gehri galatfehmi"
          )}
        </T>
      </Fade>

      {/* beat 3 — the cure */}
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={130} y={242} size={12} fill={GREEN} script anchor="start">
          {t(
            "each axis is its own 1-D problem — only t is shared, nothing else leaks",
            "har axis apna alag 1-D sawaal — sirf t shared hai, aur kuchh nahi rista"
          )}
        </T>
      </Fade>

      {/* ③ vector equations */}
      <NumCircle on={beat >= 4} delay={dl(4, 0.6)} cy={300} n="3" />
      <Fade on={beat >= 4} delay={dl(4, 1.6)}>
        <T x={130} y={306} size={14} fill={INK} weight={700} anchor="start">
          {t(
            "the equations are VECTORS now — apply them per component",
            "equations ab VECTOR hain — component-by-component lagao"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 7)}>
        <T x={130} y={332} size={12} fill={INK_LIGHT} script anchor="start">
          {t(
            "v₀ and a in different directions? the numbers do not simply add",
            "v₀ aur a alag directions mein? numbers seedhe nahi judte"
          )}
        </T>
      </Fade>

      {/* ④ the two averages */}
      <NumCircle on={beat >= 5} delay={dl(5, 0.6)} cy={390} n="4" />
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={130} y={396} size={14} fill={INK} weight={700} anchor="start">
          {t(
            "avg speed ≠ |avg velocity| on a curved path",
            "curved path par avg speed ≠ |avg velocity|"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 6)}>
        <T x={130} y={422} size={12} fill={INK_LIGHT} script anchor="start">
          {t(
            "path length vs straight-line displacement",
            "path ki lambai vs seedha displacement"
          )}
        </T>
      </Fade>

      {/* ⑤ differentiation slips */}
      <NumCircle on={beat >= 6} delay={dl(6, 0.6)} cy={480} n="5" />
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={130} y={486} size={14} fill={INK} weight={700} anchor="start">
          {t(
            "x(t), y(t): differentiate once → v, twice → a",
            "x(t), y(t): ek baar differentiate → v, do baar → a"
          )}
        </T>
      </Fade>

      {/* beat 7 — the chain rule */}
      <Fade on={beat >= 7} delay={dl(7, 0.8)}>
        <T x={130} y={512} size={12} fill={RED} script anchor="start">
          {t(
            "a dropped chain-rule factor of 2 turns a right answer into a wrong one",
            "chain-rule ka ek chhoota factor 2 sahi jawaab ko galat bana deta hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
