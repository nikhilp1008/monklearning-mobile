/**
 * Ch07 · Section 6 — "The law in symbols: scalar form, vector form, the minus sign"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 7.17, 20.82, 30.38, 42.41, 52.74, 65.45, 71.85]):
 *  0 title
 *  1 big scalar formula + two scaling chips (×2 mass, ×2 r)
 *  2 diagram: m₁, m₂, equal-opposite arrows along joining line, caption
 *  3 vector form line
 *  4 red note: minus sign = attraction
 *  5 the law in words (line + underline)
 *  6 F ∝ m₁m₂ and F ∝ 1/r² with underlines
 *  7 red margin: attractive · central · line of centres
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52 · formula cx300 bl130 (24 sans, 210..390) · chips x610 y98/y138 w180 h30
 *  b2 | m₁ c(240,250) r18 · m₂ c(700,250) r26 · dash M330 250 H600 · "r" cx465 bl238 ·
 *      arrows (266,250)→(320,250) / (666,250)→(612,250) · F₁₂ cx293 bl232 · F₂₁ cx639 bl232 ·
 *      m labels bl292/296 · caption cx470 bl328
 *  b3 | vector line st x120 bl390 (→443)
 *  b4 | bar x540 y360..412 · lines st x558 bl380 / 406 (→894)
 *  b5 | words cx540 bl455 (311..769) · underline M340 466 h400
 *  b6 | "F ∝ m₁·m₂" cx185 bl505 · underline M120 516 h130 · "F ∝ 1⁄r²" cx400 bl505 ·
 *      underline M340 516 h120
 *  b7 | bar x66 y540..586 · line st x84 bl562 (→492)
 */

import React from "react";
import { Path } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  Chip,
  T,
  arrowD,
  INK,
  MUTED,
  AMBER_DARK,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch07Sec6({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the law you will use everywhere */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "Newton's Law of Gravitation — in symbols",
            "Newton ka Law of Gravitation — symbols mein"
          )}
        </T>
      </Fade>

      {/* beat 1 — magnitude + how it scales */}
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <T x={300} y={130} size={24} fill={INK} weight={800}>
          F = G·m₁m₂ ⁄ r²
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 5)}>
        <Chip x={610} y={98} w={180} h={30} fill={CREAM} stroke={AMBER_DARK} textFill={AMBER_DARK} size={13}>
          {t("×2 mass → ×2 force", "×2 mass → ×2 force")}
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 8)}>
        <Chip x={610} y={138} w={180} h={30} fill={CREAM} stroke={AMBER_DARK} textFill={AMBER_DARK} size={13}>
          {t("×2 r → force ⁄ 4", "×2 doori → force ⁄ 4")}
        </Chip>
      </Fade>

      {/* beat 2 — equal and opposite, along the line of centres */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 0.6)}
        d="M 240 232 A 18 18 0 1 1 239.9 232"
        stroke={INK}
        sw={2.2}
        dur={0.5}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 1.4)}
        d="M 700 224 A 26 26 0 1 1 699.9 224"
        stroke={INK}
        sw={2.2}
        dur={0.5}
      />
      <Fade on={beat >= 2} delay={dl(2, 2.2)}>
        <Path d="M 330 250 H 600" stroke={MUTED} strokeWidth={1.6} strokeDasharray="6 7" fill="none" />
        <T x={465} y={238} size={13} fill={MUTED} weight={700}>
          r
        </T>
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 3)}
        d={arrowD(266, 250, 320, 250)}
        stroke={RED}
        sw={2.6}
        dur={0.4}
      />
      <Fade on={beat >= 2} delay={dl(2, 3.6)}>
        <T x={293} y={232} size={12} fill={RED} weight={700}>
          F₁₂
        </T>
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 4.4)}
        d={arrowD(666, 250, 612, 250)}
        stroke={RED}
        sw={2.6}
        dur={0.4}
      />
      <Fade on={beat >= 2} delay={dl(2, 5)}>
        <T x={639} y={232} size={12} fill={RED} weight={700}>
          F₂₁
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 5.8)}>
        <T x={240} y={292} size={13} fill={INK} weight={700}>
          m₁
        </T>
        <T x={700} y={298} size={13} fill={INK} weight={700}>
          m₂
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 7)}>
        <T x={470} y={328} size={12} fill={AMBER_DARK} script>
          {t(
            "equal & opposite — 3rd law in action",
            "barabar aur ulta — 3rd law kaam par"
          )}
        </T>
      </Fade>

      {/* beat 3 — vector form */}
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <T x={120} y={390} size={17} fill={INK} anchor="start" weight={700}>
          {t("vector form:", "vector form:")}  F₁₂ = −(G·m₁m₂ ⁄ r²)·r̂₂₁
        </T>
      </Fade>

      {/* beat 4 — the minus sign speaks */}
      <Draw on={beat >= 4} delay={dl(4, 0.6)} d="M 540 360 v 52" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 1.4)}>
        <T x={558} y={380} size={13} fill={RED} script anchor="start">
          {t("the minus sign = ATTRACTION", "minus sign = ATTRACTION")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 4.5)}>
        <T x={558} y={406} size={13} fill={RED} script anchor="start">
          {t(
            "force points back toward the other mass — never away",
            "force wapas doosre mass ki taraf — kabhi door nahi"
          )}
        </T>
      </Fade>

      {/* beat 5 — the law in words */}
      <Fade on={beat >= 5} delay={dl(5, 1.5)}>
        <T x={540} y={455} size={13} fill={INK} script>
          {t(
            "every particle attracts every other — along the line joining them",
            "har particle har doosre ko kheenchta hai — joining line ke saath"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 4)} d="M 340 466 h 400" stroke={AMBER_DARK} sw={2} dur={0.5} />

      {/* beat 6 — the two scalings */}
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={185} y={505} size={16} fill={INK} weight={800}>
          F ∝ m₁·m₂
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.5)} d="M 120 516 h 130" stroke={AMBER_DARK} sw={2} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 2.4)}>
        <T x={400} y={505} size={16} fill={INK} weight={800}>
          F ∝ 1 ⁄ r²
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 3)} d="M 340 516 h 120" stroke={AMBER_DARK} sw={2} dur={0.4} />

      {/* beat 7 — the character of gravity */}
      <Draw on={beat >= 7} delay={dl(7, 0.6)} d="M 66 540 v 46" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.4)}>
        <T x={84} y={562} size={13} fill={RED} script anchor="start">
          {t(
            "attractive · central · along the line of centres — ALWAYS",
            "attractive · central · line of centres ke saath — HAMESHA"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
