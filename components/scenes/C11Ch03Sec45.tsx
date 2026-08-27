/**
 * C11 Chemistry Ch03 · Section 45 — "Four types of elements"
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 8.19, 23.47, 41.39, 58.37, 73.22, 87.04, 108.12]):
 *  0 title + underline
 *  1 representative: s+p, groups 1,2,13-17
 *  2 noble gases: group 18, filled shell, highest IE, inert
 *  3 red-margin: transition — STRICT: partial d in atom OR stable ion
 *  4 red-margin callout: Zn, Cd, Hg (d¹⁰) NOT true transition metals!
 *  5 inner-transition: f-block, lanthanoids(4f)/actinoids(5f)
 *  6 metals ≈80%; metalloid staircase B,Si,Ge,As,Sb,Te
 *  7 closing green stamp: strict d-rule = favourite exam trap
 *
 * Layout plan:
 *  b1-3,5 | 4 numbered rows        | T st  | x120..?   y96..344 (circles cx90)
 *  b4 | red callout box            | Draw  | x270..810 y250..286 (bl 273)
 *  b6 | 2 overlay lines            | T mid | x?..?     y351..377 (bl355/377)
 *  b7 | closing stamp (green)      | Chip  | x230..850 y392..426
 */

import React from "react";
import { Circle } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  INK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch03Sec45({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={26} fill={RED} script>
          {t("four types of elements", "chaar types ke elements")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 4)} d="M 400 88 C 460 84, 620 84, 680 88" stroke={RED} sw={2.4} dur={0.7} />

      {/* beat 1 — representative elements */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <Circle cx={90} cy={114} r={16} fill="none" stroke={INK} strokeWidth={1.6} />
        <T x={90} y={119} size={14} fill={INK} weight={700}>1</T>
        <T x={120} y={120} size={15} fill={INK} weight={700} anchor="start">
          {t("Representative: s+p, groups 1,2,13-17", "Representative: s+p, groups 1,2,13-17")}
        </T>
      </Fade>

      {/* beat 2 — noble gases */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <Circle cx={90} cy={166} r={16} fill="none" stroke={INK} strokeWidth={1.6} />
        <T x={90} y={171} size={14} fill={INK} weight={700}>2</T>
        <T x={120} y={172} size={15} fill={INK} weight={700} anchor="start">
          {t("Noble gases: group 18, filled shell, inert", "Noble gases: group 18, filled shell, inert")}
        </T>
      </Fade>

      {/* beat 3 — red-margin: transition, the strict rule */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <Circle cx={90} cy={218} r={16} fill="none" stroke={RED} strokeWidth={2} />
        <T x={90} y={223} size={14} fill={RED} weight={800}>3</T>
        <T x={120} y={224} size={15} fill={RED} weight={700} anchor="start">
          {t("Transition: d-block — STRICT: partial d (atom OR ion)", "Transition: d-block — STRICT: partial d (atom YA ion)")}
        </T>
      </Fade>

      {/* beat 4 — the exam-trap exception */}
      <Draw on={beat >= 4} delay={dl(4, 0.2)} d="M 270 250 h 540 v 36 h -540 z" stroke={RED} sw={2} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={540} y={273} size={14} weight={700} fill={RED}>
          {t("Zn, Cd, Hg (d¹⁰) — NOT true transition metals!", "Zn, Cd, Hg (d¹⁰) — asli transition metals NAHI!")}
        </T>
      </Fade>

      {/* beat 5 — inner-transition */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <Circle cx={90} cy={318} r={16} fill="none" stroke={INK} strokeWidth={1.6} />
        <T x={90} y={323} size={14} fill={INK} weight={700}>4</T>
        <T x={120} y={324} size={15} fill={INK} weight={700} anchor="start">
          {t("Inner-transition: f-block — lanthanoids(4f)/actinoids(5f)", "Inner-transition: f-block — lanthanoids(4f)/actinoids(5f)")}
        </T>
      </Fade>

      {/* beat 6 — the overlay: metals, non-metals, metalloids */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={355} size={12} fill={INK}>
          {t("metals ≈ 80% · non-metals cluster upper-right", "metals ≈ 80% · non-metals upper-right cluster")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.7)}>
        <T x={540} y={377} size={12} fill={INK}>
          {t("metalloid staircase: B, Si, Ge, As, Sb, Te", "metalloid staircase: B, Si, Ge, As, Sb, Te")}
        </T>
      </Fade>

      {/* beat 7 — closing insight */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Chip x={230} y={392} w={620} h={34} fill={GREEN} textFill="#fff" size={14} script={false}>
          {t("strict d-rule = favourite exam trap", "strict d-rule = favourite exam trap")}
        </Chip>
      </Fade>
    </Scene>
  );
}
