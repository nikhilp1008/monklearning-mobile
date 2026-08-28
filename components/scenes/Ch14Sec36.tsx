/**
 * Ch14 · Section 36 — "Common pitfalls and pro-tips" (subtopic 4 recap)
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 2.99, 14.12, 22.81, 33.4, 39.1, 47.52, 54.03]):
 *  0 framing: 4 traps + one wall-echo shortcut
 *  1 TRAP 1: sign chaos — anchor to toward=up, away=down
 *  2 TRAP 2: source≠observer moving — never swap vs/vo
 *  3 TRAP 3: wind → v±w in BOTH numerator and denominator
 *  4 TRAP 4: only the line-of-sight component counts
 *  5 at closest approach: motion is sideways → NO shift at all
 *  6 PRO-TIP: wall echo? skip the 2-step, use combined result
 *  7 f_echo=f(v+u)/(v−u), beat=2uf/(v−u)
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | caption (14,muted)            | T mid | x540 bl110            y99..114
 *  b0 | underline                     | Draw  | x400..680 y120
 *  b1 | warning triangle              | Draw  | x60..74 y273..288
 *  b1 | TRAP1 chip (h34)              | Chip  | x90..550 y285..319
 *  b2 | TRAP2 chip (h40)              | Chip  | x560..1020 y285..325
 *  b3 | TRAP3 chip (h40)              | Chip  | x60..520 y375..415
 *  b4 | TRAP4 chip (h40)              | Chip  | x560..1020 y375..415
 *  b5 | TRAP4 detail (11.5)           | T st  | x560 bl432             y421..433
 *  b6 | star                         | Draw  | x160..174 y445..460
 *  b6 | PRO-TIP chip (h44,s13.5)      | Chip  | x150..930 y455..499
 *  b7 | formulas (12.5)               | T mid | x540 bl525            y512..526
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, MUTED, AMBER, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch14Sec36({ currentTime, reveals, language }: SceneProps) {
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
          {t("4 traps + one wall-echo shortcut", "4 traps + 1 wall-echo shortcut")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.9)} d="M 400 120 L 680 120" stroke={MUTED} sw={1.4} dur={0.4} />

      {/* beat 1 — TRAP 1 */}
      <Draw on={beat >= 1} delay={dl(1, 0.2)} d="M 67 273 L 60 288 L 74 288 Z" stroke={RED} sw={2} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <Chip x={90} y={285} w={460} h={34} fill="#fff" stroke={RED} textFill={RED} size={13} script={false}>
          {t(
            "TRAP 1: sign chaos — anchor to 'toward=up, away=down'!",
            "TRAP 1: sign chaos — 'toward=up, away=down' pe anchor!"
          )}
        </Chip>
      </Fade>

      {/* beat 2 — TRAP 2 */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <Chip x={560} y={285} w={460} h={40} fill="#fff" stroke={RED} textFill={RED} size={13} script={false}>
          {t(
            "TRAP 2: source≠observer moving — never swap vs/vo!",
            "TRAP 2: source≠observer moving — vs/vo kabhi swap na karo!"
          )}
        </Chip>
      </Fade>

      {/* beat 3 — TRAP 3 */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <Chip x={60} y={375} w={460} h={40} fill="#fff" stroke={RED} textFill={RED} size={13} script={false}>
          {t(
            "TRAP 3: wind → v±w in BOTH numerator and denominator!",
            "TRAP 3: wind → v±w NUMERATOR AUR denominator dono mein!"
          )}
        </Chip>
      </Fade>

      {/* beat 4 — TRAP 4 */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <Chip x={560} y={375} w={460} h={40} fill="#fff" stroke={RED} textFill={RED} size={13} script={false}>
          {t("TRAP 4: only the line-of-sight component counts!", "TRAP 4: sirf line-of-sight component ginta hai!")}
        </Chip>
      </Fade>

      {/* beat 5 — the closest-approach fact */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={560} y={432} size={11.5} fill={INK} anchor="start">
          {t(
            "at closest approach: motion is sideways → NO shift!",
            "closest approach pe: motion sideways → koi shift nahi!"
          )}
        </T>
      </Fade>

      {/* beat 6 — the pro-tip */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 167 445 l 2.5 7.5 h 8 l -6.5 5 l 2.5 7.5 l -6.5 -5 l -6.5 5 l 2.5 -7.5 l -6.5 -5 h 8 z" stroke={AMBER} sw={1.6} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.9)}>
        <Chip x={150} y={455} w={780} h={44} fill="#fff" stroke={GREEN} textFill={GREEN} size={13.5} script={false}>
          {t(
            "PRO-TIP: wall echo? skip the 2-step — use combined result directly!",
            "PRO-TIP: wall echo? 2-step chodo — combined result seedha use karo!"
          )}
        </Chip>
      </Fade>

      {/* beat 7 — the formulas */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={540} y={525} size={12.5} fill={INK} script>
          f_echo = f(v+u)/(v−u), beat = 2uf/(v−u)
        </T>
      </Fade>
    </Scene>
  );
}
