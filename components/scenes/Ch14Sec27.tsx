/**
 * Ch14 · Section 27 — "Common pitfalls and pro-tips" (subtopic 3 recap)
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 5.53, 15.66, 27.63, 33.77, 43.59, 55.56, 67.53]):
 *  0 framing: 4 traps + one 5-second shortcut
 *  1 TRAP 1: closed pipe 1st overtone = 3rd harmonic (not 2nd)
 *  2 TRAP 2: end correction ≈0.6r beyond open end
 *  3 dodge: subtract 2 resonance lengths → e cancels
 *  4 TRAP 3: node↔node=λ/2, node↔antinode=λ/4 — sketch it
 *  5 TRAP 4: closed end = displacement NODE, pressure ANTINODE
 *  6 PRO-TIP: 3 resonances → common gap; f_min/gap whole → OPEN, f1=gap
 *  7 else → CLOSED, f1=gap/2 — names the pipe in 5 seconds
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | caption (14,muted)            | T mid | x540 bl110            y99..114
 *  b0 | underline                     | Draw  | x400..680 y120
 *  b1 | warning triangle              | Draw  | x60..74 y273..288
 *  b1 | TRAP1 chip (h34)              | Chip  | x90..550 y285..319
 *  b2 | TRAP2 header chip (h40)       | Chip  | x560..1020 y285..325
 *  b3 | dodge text (12.5)             | T st  | x560 bl345            y333..348
 *  b4 | TRAP3 chip (h40)              | Chip  | x60..520 y375..415
 *  b5 | TRAP4 chip (h40)              | Chip  | x560..1020 y375..415
 *  b6 | star                         | Draw  | x160..174 y445..460
 *  b6 | PRO-TIP chip (h48,s14)        | Chip  | x150..930 y435..483
 *  b7 | closed-case (13)              | T mid | x540 bl505            y492..506
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, MUTED, AMBER, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch14Sec27({ currentTime, reveals, language }: SceneProps) {
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
          {t("4 traps + one 5-second shortcut", "4 traps + ek 5-second shortcut")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.9)} d="M 400 120 L 680 120" stroke={MUTED} sw={1.4} dur={0.4} />

      {/* beat 1 — TRAP 1 */}
      <Draw on={beat >= 1} delay={dl(1, 0.2)} d="M 67 273 L 60 288 L 74 288 Z" stroke={RED} sw={2} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <Chip x={90} y={285} w={460} h={34} fill="#fff" stroke={RED} textFill={RED} size={13} script={false}>
          {t("TRAP 1: closed pipe 1st overtone = 3rd harmonic (not 2nd!)", "TRAP 1: closed pipe 1st overtone = 3rd harmonic (2nd nahi!)")}
        </Chip>
      </Fade>

      {/* beat 2 — TRAP 2 */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <Chip x={560} y={285} w={460} h={40} fill="#fff" stroke={RED} textFill={RED} size={13} script={false}>
          {t("TRAP 2: end correction ≈0.6r beyond open end!", "TRAP 2: end correction ≈0.6r open end se aage!")}
        </Chip>
      </Fade>

      {/* beat 3 — the dodge */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={560} y={345} size={12.5} fill={GREEN} anchor="start">
          {t("DODGE: subtract 2 resonance lengths → e cancels!", "DODGE: 2 resonance lengths subtract → e cancel!")}
        </T>
      </Fade>

      {/* beat 4 — TRAP 3 */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <Chip x={60} y={375} w={460} h={40} fill="#fff" stroke={RED} textFill={RED} size={13} script={false}>
          {t("TRAP 3: node↔node=λ/2, node↔antinode=λ/4 (sketch it!)", "TRAP 3: node↔node=λ/2, node↔antinode=λ/4 (sketch karo!)")}
        </Chip>
      </Fade>

      {/* beat 5 — TRAP 4 */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <Chip x={560} y={375} w={460} h={40} fill="#fff" stroke={RED} textFill={RED} size={13} script={false}>
          {t("TRAP 4: closed end = displacement NODE, pressure ANTINODE!", "TRAP 4: closed end = displacement NODE, pressure ANTINODE!")}
        </Chip>
      </Fade>

      {/* beat 6 — the pro-tip: open case */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 167 445 l 2.5 7.5 h 8 l -6.5 5 l 2.5 7.5 l -6.5 -5 l -6.5 5 l 2.5 -7.5 l -6.5 -5 h 8 z" stroke={AMBER} sw={1.6} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.9)}>
        <Chip x={150} y={435} w={780} h={48} fill="#fff" stroke={GREEN} textFill={GREEN} size={14} script={false}>
          {t(
            "PRO-TIP: 3 resonances → common gap; f_min/gap = WHOLE → OPEN, f1=gap",
            "PRO-TIP: 3 resonances → common gap; f_min/gap = WHOLE → OPEN, f1=gap"
          )}
        </Chip>
      </Fade>

      {/* beat 7 — the closed case */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={540} y={505} size={13} fill={INK} script>
          {t(
            "else → CLOSED, f1=gap/2 — names the pipe in 5 seconds!",
            "whole na ho → CLOSED, f1=gap/2 — pipe 5 second mein pehchano!"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
