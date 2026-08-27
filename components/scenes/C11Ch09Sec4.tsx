/**
 * C11 Ch09 · Section 4 — "Ordering cycloalkanes by stability" (worked example)
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 11.09, 21.17, 31.03, 40.63, 48.26, 59.38, 66.98]):
 *  0 given: rank the four rings · 1 rule: more deviation = less stable ·
 *  2 cyclopropane row (60°, Δ≈49.5°) · 3 cyclobutane row (90°, Δ≈19.5°) ·
 *  4 cyclopentane row (~ideal) · 5 cyclohexane row (109.5°, most stable) ·
 *  6 GREEN answer: stability order chain · 7 RED note: reactivity is the
 *  exact reverse
 *
 * Layout plan — 4-row table, columns: icon(x140) name(x185 start)
 *  angle(x420 start) deviation(x560 start), rows at cy 190/245/300/355:
 *  b0 | given heading           | T mid | y91..110  (bl 105)
 *  b1 | rule line               | T mid | y128..144 (bl 138)
 *  b2 | row1 cyclopropane       | Draw+T| cy190, icon r20 triangle
 *  b3 | row2 cyclobutane        | Draw+T| cy245, icon r20 square
 *  b4 | row3 cyclopentane       | Draw+T| cy300, icon r21 pentagon
 *  b5 | row4 cyclohexane        | Draw+T| cy355, chair icon
 *  b6 | answer chain (green)    | T mid | y399..421 (bl 415) + underline
 *  b7 | margin bar + red note   | Draw+T| bar x60 y450..486 · text bl470
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
  AMBER_DARK,
  RED,
  GREEN,
  Scene,
} from '@/components/scenes/kit';
import { ringD } from "./chem-kit";

function chairD(cx: number, cy: number, s = 1) {
  return `M ${cx - 17 * s} ${cy + 5 * s} L ${cx - 8.5 * s} ${cy - 7 * s} L ${cx} ${cy + 3 * s} L ${cx + 8.5 * s} ${cy - 7 * s} L ${cx + 17 * s} ${cy + 5 * s}`;
}

export default function C11Ch09Sec4({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const ICON_X = 140;
  const NAME_X = 185;
  const ANGLE_X = 420;
  const DEV_X = 560;

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={70} size={26} fill={RED} script>
          {t("ordering cycloalkanes by stability", "cycloalkanes ko stability se order karna")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={105} size={18} fill={INK} weight={700}>
          {t("rank: cyclopropane, cyclobutane, cyclopentane, cyclohexane", "rank karo: cyclopropane, cyclobutane, cyclopentane, cyclohexane")}
        </T>
      </Fade>

      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={540} y={138} size={15} fill={AMBER_DARK} script>
          {t("more deviation from 109.5° ⇒ more strain ⇒ less stable", "109.5° se jitna zyada deviation ⇒ utna zyada strain ⇒ utna kam stable")}
        </T>
      </Fade>

      {/* beat 2 — cyclopropane row */}
      <Draw on={beat >= 2} delay={dl(2, 0.3)} d={ringD(ICON_X, 190, 20, 3)} stroke={INK} sw={2} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 0.9)}>
        <T x={NAME_X} y={195} size={16} fill={INK} anchor="start">cyclopropane</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.4)}>
        <T x={ANGLE_X} y={195} size={16} fill={RED} weight={700} anchor="start">60°</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.8)}>
        <T x={DEV_X} y={195} size={15} fill={RED} anchor="start">Δ≈49.5°</T>
      </Fade>

      {/* beat 3 — cyclobutane row */}
      <Draw on={beat >= 3} delay={dl(3, 0.3)} d={ringD(ICON_X, 245, 20, 4)} stroke={INK} sw={2} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 0.9)}>
        <T x={NAME_X} y={250} size={16} fill={INK} anchor="start">cyclobutane</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.4)}>
        <T x={ANGLE_X} y={250} size={16} fill={RED} weight={700} anchor="start">90°</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.8)}>
        <T x={DEV_X} y={250} size={15} fill={AMBER_DARK} anchor="start">Δ≈19.5°</T>
      </Fade>

      {/* beat 4 — cyclopentane row */}
      <Draw on={beat >= 4} delay={dl(4, 0.3)} d={ringD(ICON_X, 300, 21, 5)} stroke={INK} sw={2} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 0.9)}>
        <T x={NAME_X} y={305} size={16} fill={INK} anchor="start">cyclopentane</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.4)}>
        <T x={ANGLE_X} y={305} size={16} fill={GREEN} weight={700} anchor="start">{t("~ideal", "~ideal")}</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.8)}>
        <T x={DEV_X} y={305} size={15} fill={GREEN} anchor="start">{t("Δ≈small", "Δ≈small")}</T>
      </Fade>

      {/* beat 5 — cyclohexane row */}
      <Draw on={beat >= 5} delay={dl(5, 0.3)} d={chairD(ICON_X, 355, 1.1)} stroke={INK} sw={2.2} dur={0.6} />
      <Fade on={beat >= 5} delay={dl(5, 0.9)}>
        <T x={NAME_X} y={360} size={16} fill={INK} anchor="start">cyclohexane</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.4)}>
        <T x={ANGLE_X} y={360} size={16} fill={GREEN} weight={700} anchor="start">109.5°</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.8)}>
        <T x={DEV_X} y={360} size={15} fill={GREEN} anchor="start">Δ=0</T>
      </Fade>

      {/* beat 6 — the answer */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={415} size={19} fill={GREEN} weight={800}>
          cyclohexane &gt; cyclopentane &gt; cyclobutane &gt; cyclopropane
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.2)} d="M 295 424 L 785 424" stroke={GREEN} sw={2} dur={0.6} />

      {/* beat 7 — reactivity is the reverse */}
      <Draw on={beat >= 7} delay={dl(7, 0.3)} d="M 60 450 L 60 486" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 1)}>
        <T x={76} y={470} size={16} fill={RED} script anchor="start">
          {t(
            "reactivity is the exact reverse — cyclopropane opens most readily",
            "reactivity iska ulta hai — cyclopropane sabse aasani se khulta hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
