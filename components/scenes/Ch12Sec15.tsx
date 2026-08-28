/**
 * Ch12 · Section 15 — Worked example [NEET]: identify a gas from its density
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 1, 2, 13.35, 17.36, 26.23, 46.2]):
 *  0 title + problem · 1 speed method: STP ⇒ M = ρ×Vₘ · 2 substitute · 3
 *    answer = 28 g/mol · 4 identify: N₂ or CO chip · 5 THE TRAP: full formula
 *    tempts a plug-in, STP read as 0°C (forgetting +273) ⇒ M=0 red flag · 6
 *    pro-tip: shortcut through 22.4×ρ, skip R,T,P
 *
 * Layout plan (Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | title (script 24, red)          | T mid | x270..810 y37..78 (bl66)
 *  b0 | problem (14, ink, script)       | T mid | x540 y96
 *  b1 | speed method (15, ink, script)  | T mid | x540 y130
 *  b2 | substitute (16, ink)            | T mid | x540 y164
 *  b3 | answer (20, amber_dark, bold)   | T mid | x540 y202
 *  b4 | identify chip                    | Chip  | x400..800 y235..271
 *  b5 | full-formula chip                | Chip  | x440..640 y300..334
 *  b5 | wrong line + strike (red)       | T/Draw| x540 y352
 *  b5 | correct line (green)             | T mid | x540 y386
 *  b5 | consequence (script 15, red)     | T mid | x540 y420
 *  b6 | pro-tip box                      | Draw  | x150..930 y452..508
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
  crossD,
  INK,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch12Sec15({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={66} size={24} fill={RED} script>
          {t("identify a gas from its density [NEET]", "density se gas pehchano [NEET]")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={96} size={14} fill={INK} script>
          {t("STP, ρ = 1.25 g/L ⇒ molar mass? which gas?", "STP, ρ = 1.25 g/L ⇒ molar mass? kaunsa gas?")}
        </T>
      </Fade>

      {/* beat 1 — speed method */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={540} y={130} size={15} fill={INK} script>
          {t(
            "at STP: 1 mole = 22.4 L ⇒ M = ρ × Vₘ (skip the full formula)",
            "STP par: 1 mole = 22.4 L ⇒ M = ρ × Vₘ (full formula skip)"
          )}
        </T>
      </Fade>

      {/* beat 2 — substitute */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={164} size={16} fill={INK}>
          M = 1.25 g/L × 22.4 L/mol
        </T>
      </Fade>

      {/* beat 3 — answer */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={202} size={20} fill={AMBER_DARK} weight={700}>
          = 28 g/mol
        </T>
      </Fade>

      {/* beat 4 — identify the gas */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <Chip x={400} y={235} w={280} h={36} fill={GREEN} textFill="#fff" size={17} script={false}>
          28 g/mol → N₂ or CO
        </Chip>
      </Fade>

      {/* beat 5 — THE TRAP */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <Chip x={440} y={300} w={200} h={34} fill={CREAM} stroke={AMBER} textFill={INK} size={16} script={false}>
          M = ρRT/P
        </Chip>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={540} y={355} size={15} fill={RED}>
          STP → T = 0°C
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 1.6)} d={crossD(478, 340, 125, 20)} stroke={RED} sw={2.2} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 2.2)}>
        <T x={540} y={388} size={15} fill={GREEN}>
          STP → T = 273 K ✓
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2.9)}>
        <T x={540} y={422} size={15} fill={RED} script>
          {t(
            "forget +273 ⇒ T=0 ⇒ M=0 — instant red flag!",
            "+273 bhoolo ⇒ T=0 ⇒ M=0 — turant red flag!"
          )}
        </T>
      </Fade>

      {/* beat 6 — pro-tip */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.2)}
        d="M 150 452 h 780 q 10 0 10 10 v 36 q 0 10 -10 10 h -780 q -10 0 -10 -10 v -36 q 0 -10 10 -10"
        stroke={GREEN}
        sw={2.4}
        dur={0.9}
      />
      <Fade on={beat >= 6} delay={dl(6, 1.1)}>
        <T x={540} y={480} size={15} fill={INK} weight={700}>
          {t(
            "PRO-TIP: at STP, M = 22.4 × ρ — skip R, T, P entirely",
            "PRO-TIP: STP par, M = 22.4 × ρ — R, T, P poori tarah skip"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
