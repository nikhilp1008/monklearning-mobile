/**
 * Ch14 · Section 9 — "Common pitfalls and pro-tips" (subtopic 1 recap)
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 8.16, 16.31, 34.56, 49.71, 60.97, 71.85, 82.72]):
 *  0 framing: traps that quietly cost marks + one shortcut
 *  1 TRAP 1 header: particle velocity ≠ wave velocity
 *  2 TRAP 1 detail: v=ω/k vs v_p=Aω cosθ — either can win
 *  3 TRAP 2: μ ∝ d² (thickness) — the #1 ratio-problem error
 *  4 TRAP 3: crossing medium — f fixed; v, λ change
 *  5 TRAP 4: hanging rope — T varies → must integrate
 *  6 PRO-TIP: v ∝ √T/radius for same-material ratio problems
 *  7 reward: 2-min problem → 10 seconds, automatically
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | caption (14,muted)            | T mid | x540 bl110            y99..114
 *  b0 | underline                     | Draw  | x420..660 y120
 *  b1 | warning triangle              | Draw  | x60..74 y273..288
 *  b1 | TRAP1 header chip (h34)       | Chip  | x90..530 y285..319
 *  b2 | TRAP1 detail (12.5)           | T st  | x60 bl345             y335..349
 *  b3 | TRAP2 chip (h40)              | Chip  | x560..1020 y285..325
 *  b4 | TRAP3 chip (h40)              | Chip  | x60..520 y375..415
 *  b5 | TRAP4 chip (h40)              | Chip  | x560..1020 y375..415
 *  b6 | star                         | Draw  | x160..174 y445..460
 *  b6 | PRO-TIP chip (h48,s14)        | Chip  | x150..930 y435..483
 *  b7 | closing (14,green)            | T mid | x540 bl520            y502..524
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  INK,
  MUTED,
  AMBER,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch14Sec9({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={68} size={26} fill={RED} script>
          {t("common pitfalls and pro-tips", "common pitfalls aur pro-tips")}
        </T>
      </Fade>

      {/* beat 0 — framing */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={110} size={14} fill={MUTED} script>
          {t("traps that quietly cost marks — plus one shortcut", "traps jo chupke se marks khaate — plus ek shortcut")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.9)} d="M 420 120 L 660 120" stroke={MUTED} sw={1.4} dur={0.4} />

      {/* beat 1 — TRAP 1 header */}
      <Draw on={beat >= 1} delay={dl(1, 0.2)} d="M 67 273 L 60 288 L 74 288 Z" stroke={RED} sw={2} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <Chip x={90} y={285} w={440} h={34} fill="#fff" stroke={RED} textFill={RED} size={13} script={false}>
          {t("TRAP 1: particle velocity ≠ wave velocity", "TRAP 1: particle velocity ≠ wave velocity")}
        </Chip>
      </Fade>

      {/* beat 2 — TRAP 1 detail */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={60} y={345} size={12.5} fill={INK} anchor="start">
          {t("v=ω/k (pattern) vs v_p=Aω cosθ (bobbing) — either wins!", "v=ω/k (pattern) vs v_p=Aω cosθ (bobbing) — either wins!")}
        </T>
      </Fade>

      {/* beat 3 — TRAP 2 */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <Chip x={560} y={285} w={460} h={40} fill="#fff" stroke={RED} textFill={RED} size={13} script={false}>
          {t("TRAP 2: μ ∝ d² (thickness) — #1 ratio-problem error", "TRAP 2: μ ∝ d² (thickness) — #1 ratio-problem ki galti")}
        </Chip>
      </Fade>

      {/* beat 4 — TRAP 3 */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <Chip x={60} y={375} w={460} h={40} fill="#fff" stroke={RED} textFill={RED} size={13} script={false}>
          {t("TRAP 3: crossing medium → f FIXED; v,λ change", "TRAP 3: medium badle → f FIXED; v,λ badalte")}
        </Chip>
      </Fade>

      {/* beat 5 — TRAP 4 */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <Chip x={560} y={375} w={460} h={40} fill="#fff" stroke={RED} textFill={RED} size={13} script={false}>
          {t("TRAP 4: hanging rope → T varies → must INTEGRATE", "TRAP 4: latakti rope → T badalta → INTEGRATE karna")}
        </Chip>
      </Fade>

      {/* beat 6 — the pro-tip */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 167 445 l 2.5 7.5 h 8 l -6.5 5 l 2.5 7.5 l -6.5 -5 l -6.5 5 l 2.5 -7.5 l -6.5 -5 h 8 z" stroke={AMBER} sw={1.6} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.9)}>
        <Chip x={150} y={435} w={780} h={48} fill="#fff" stroke={GREEN} textFill={GREEN} size={14} script={false}>
          {t(
            "PRO-TIP: same material, different size → v ∝ √T / radius — skip the grind!",
            "PRO-TIP: same material, alag size → v ∝ √T / radius — grind skip karo!"
          )}
        </Chip>
      </Fade>

      {/* beat 7 — the reward */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={540} y={520} size={14} fill={GREEN} script>
          {t(
            "turns a 2-min problem into 10 seconds — dodges the mass-scaling trap automatically",
            "2-minute problem 10 second ka ho jaata — mass-scaling trap khud dodge ho jaata"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
