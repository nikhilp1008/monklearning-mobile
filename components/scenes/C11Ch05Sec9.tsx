/**
 * C11 Chemistry Ch05 · Section 9 — "Pitfalls and pro-tips: signs, R, and
 * delta n-g" (closes subtopic 1)
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (board_reveal_at, en/hi both [0,1,2,3,4,5,6]):
 *  0 heading: The four killer traps + underline
 *  1 trap 1: sign of work
 *  2 trap 2: wrong R value
 *  3 trap 3: counting solids/liquids in Δngas
 *  4 trap 4: q/w mistaken as state functions
 *  5 divider + pro-tip heading (green) + underline
 *  6 pro-tip chip: isothermal reflex ΔU=0, ΔH=0, q=−w
 *
 * Layout plan (centered x540):
 *  b0 | heading (20, red, w800)       | T mid  | y83..106 (bl100)
 *  b0 | underline                     | Draw   | y112 x400..680
 *  b1 | trap1 chip (14)               | Chip   | x280..800 y122..158
 *  b2 | trap2 chip (14)               | Chip   | x280..800 y170..206
 *  b3 | trap3 chip (14)               | Chip   | x280..800 y218..254
 *  b4 | trap4 chip (14)               | Chip   | x280..800 y266..302
 *  b5 | divider                       | Draw   | y330 x150..930
 *  b5 | pro-tip heading (19, green)   | T mid  | y346..361 (bl360)
 *  b5 | underline2                    | Draw   | y370 x330..750
 *  b6 | tip chip (16, green)          | Chip   | x215..865 y385..430
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
  RED,
  GREEN,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch05Sec9({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={26} fill={RED} script>
          {t("pitfalls & pro-tips: signs, R, Δngas", "pitfalls & pro-tips: signs, R, Δngas")}
        </T>
      </Fade>

      {/* beat 0 — heading */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={100} size={20} weight={800} fill={RED}>
          {t("The four killer traps", "The four killer traps")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.5)} d="M 400 112 C 460 109, 620 109, 680 112" stroke={RED} sw={2} dur={0.5} />

      {/* beat 1 — trap 1: sign of work */}
      <Fade on={beat >= 1} delay={dl(1, 0.1)}>
        <Chip x={280} y={122} w={520} h={36} fill={CREAM} stroke={RED} textFill={RED} size={14} script={false}>
          {t("sign of work: ON system = +, BY system (expansion) = −", "sign of work: ON system = +, BY system (expansion) = −")}
        </Chip>
      </Fade>

      {/* beat 2 — trap 2: wrong R */}
      <Fade on={beat >= 2} delay={dl(2, 0.1)}>
        <Chip x={280} y={170} w={520} h={36} fill={CREAM} stroke={RED} textFill={RED} size={14} script={false}>
          {t("wrong R: use 8.314 J/(K·mol) for joules, not 0.0821 (L·atm)", "wrong R: 8.314 J/(K·mol) lo for joules, 0.0821 (L·atm) nahi")}
        </Chip>
      </Fade>

      {/* beat 3 — trap 3: Δngas counting */}
      <Fade on={beat >= 3} delay={dl(3, 0.1)}>
        <Chip x={280} y={218} w={520} h={36} fill={CREAM} stroke={RED} textFill={RED} size={14} script={false}>
          {t("only GASEOUS moles count in Δngas — solids/liquids invisible", "sirf GASEOUS moles count karte hain Δngas mein — solids/liquids invisible")}
        </Chip>
      </Fade>

      {/* beat 4 — trap 4: q/w not state functions */}
      <Fade on={beat >= 4} delay={dl(4, 0.1)}>
        <Chip x={280} y={266} w={520} h={36} fill={CREAM} stroke={RED} textFill={RED} size={14} script={false}>
          {t("q, w are PATH functions — only U, H, T, P, V are state functions", "q, w PATH functions hain — sirf U, H, T, P, V state functions hain")}
        </Chip>
      </Fade>

      {/* beat 5 — pro-tip heading */}
      <Draw on={beat >= 5} delay={dl(5, 0)} d="M 150 330 L 930 330" stroke={GREEN} sw={1.4} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={360} size={19} weight={800} fill={GREEN}>
          {t("Pro-tip: the isothermal reflex", "Pro-tip: the isothermal reflex")}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 0.8)} d="M 330 370 C 400 367, 680 367, 750 370" stroke={GREEN} sw={2} dur={0.5} />

      {/* beat 6 — pro-tip chip */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <Chip x={215} y={385} w={650} h={45} fill={CREAM} stroke={GREEN} textFill={GREEN} size={16} script={false}>
          {t(
            "isothermal + ideal gas ⇒ write ΔU = 0, ΔH = 0 on sight, then q = −w",
            "isothermal + ideal gas ⇒ ΔU = 0, ΔH = 0 dekhte hi likho, phir q = −w"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
