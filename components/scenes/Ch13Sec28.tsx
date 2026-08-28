/**
 * Ch13 · Section 28 — "Derivation: series and parallel spring constants"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 7.55, 15.11, 24.38, 34.34, 42.58, 56.31, 67.99]):
 *  0 shelf
 *  1 diagram: parallel (same x) vs series (same F) icons
 *  2 parallel: both stretch by same x ⇒ forces add
 *  3 F = −(k₁+k₂)x ⇒ k_eff = k₁+k₂
 *  4 series: same tension F ⇒ stretches add
 *  5 hero (high): x = F/k₁+F/k₂ ⇒ 1/k_eff = 1/k₁+1/k₂
 *  6 note (high): parallel shares load ⇒ stiffer; series each full load ⇒ softer
 *  7 warning: opposite of resistors
 *
 * Layout plan (Anek bl−0.78s..+0.31s):
 *  b0 | shelf y80 x60..1020
 *  b1 | parallel: wall x150..164 y110..190 · spring-up 164→270 baseline135 · spring-down baseline165 ·
 *      block x270..320 y110..190 "m" cx295 bl153 · caption "parallel: same x for both" cx235 bl210 ·
 *      series: wall x450..464 y130..160 · spring1 464→520 · dot(525,145) · spring2 530→586 baseline145 ·
 *      block x586..626 y130..160 "m" cx606 bl150 · caption "series: same F throughout" cx545 bl180
 *  b2 | st x70 bl245 size12
 *  b3 | st x70 bl280 size14
 *  b4 | st x70 bl315 size12
 *  b5 | box x70..470 y335..400 rx14 · line cx270 bl373 size16
 *  b6 | script13 st x70 bl440 amber
 *  b7 | script12 st x70 bl480 red
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
  INK,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch13Sec28({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={52} size={18} fill={INK} script>
          {t("Same stretch adds forces; same tension adds stretches", "Same stretch se forces add, same tension se stretches add")}
        </T>
      </Fade>

      {/* beat 0 — the shelf */}
      <Draw on={beat >= 0} delay={dl(0, 0.3)} d="M 60 80 L 1020 80" stroke={INK} sw={1.4} dur={0.6} />

      {/* beat 1 — parallel shares x, series shares F */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <Draw on={beat >= 1} delay={dl(1, 0.3)} d="M 150 110 h 14 v 80 h -14 z" stroke={INK} sw={1.6} dur={0.4} fill={CREAM} />
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.8)} d="M 164 135 L 184 123 L 204 147 L 224 123 L 244 147 L 270 135" stroke={INK} sw={1.6} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 1.4)} d="M 164 165 L 184 153 L 204 177 L 224 153 L 244 177 L 270 165" stroke={INK} sw={1.6} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 2.0)}>
        <Draw on={beat >= 1} delay={dl(1, 2.0)} d="M 270 110 h 50 v 80 h -50 z" stroke={INK} sw={1.6} dur={0.4} fill={AMBER} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.5)}>
        <T x={295} y={153} size={12} fill={INK} weight={800}>
          m
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.8)}>
        <T x={235} y={210} size={11} fill={INK}>
          {t("parallel: same x for both", "parallel: same x for both")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.2)}>
        <Draw on={beat >= 1} delay={dl(1, 3.2)} d="M 450 130 h 14 v 30 h -14 z" stroke={INK} sw={1.6} dur={0.4} fill={CREAM} />
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 3.7)} d="M 464 145 L 478 133 L 493 157 L 508 133 L 520 145" stroke={INK} sw={1.6} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 4.2)}>
        <Circle cx={525} cy={145} r={3} fill={INK} />
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 4.4)} d="M 530 145 L 544 133 L 559 157 L 574 133 L 586 145" stroke={INK} sw={1.6} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 4.9)}>
        <Draw on={beat >= 1} delay={dl(1, 4.9)} d="M 586 130 h 40 v 30 h -40 z" stroke={INK} sw={1.6} dur={0.4} fill={AMBER} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 5.4)}>
        <T x={606} y={150} size={12} fill={INK} weight={800}>
          m
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 5.7)}>
        <T x={545} y={180} size={11} fill={INK}>
          {t("series: same F throughout", "series: same F throughout")}
        </T>
      </Fade>

      {/* beat 2 — parallel reasoning */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={70} y={245} size={12} fill={INK} anchor="start" weight={700}>
          {t("parallel: both stretch by same x ⇒ forces add", "parallel: dono same x se stretch ⇒ forces add")}
        </T>
      </Fade>

      {/* beat 3 — parallel formula */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={70} y={280} size={14} fill={INK} anchor="start" weight={700}>
          F = −(k₁+k₂)x ⇒ k_eff = k₁+k₂
        </T>
      </Fade>

      {/* beat 4 — series reasoning */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={70} y={315} size={12} fill={INK} anchor="start" weight={700}>
          {t("series: same tension F ⇒ stretches add", "series: same tension F ⇒ stretches add")}
        </T>
      </Fade>

      {/* beat 5 — the hero result, high emphasis */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Draw
          on={beat >= 5}
          delay={dl(5, 0.3)}
          d="M 84 335 h 372 q 14 0 14 14 v 37 q 0 14 -14 14 h -372 q -14 0 -14 -14 v -37 q 0 -14 14 -14"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.1)}>
        <T x={270} y={373} size={16} fill={INK} weight={800}>
          x = F/k₁ + F/k₂  ⇒  1/k_eff = 1/k₁ + 1/k₂
        </T>
      </Fade>

      {/* beat 6 — the physical reading, high emphasis */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={70} y={440} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "parallel shares load ⇒ stiffer; series each takes full load ⇒ softer",
            "parallel load share karta hai ⇒ stiffer; series har ek pura load leta hai ⇒ softer"
          )}
        </T>
      </Fade>

      {/* beat 7 — the warning */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={70} y={480} size={12} fill={RED} script anchor="start">
          {t("opposite of resistors — don't borrow that rule here!", "resistors ke bilkul ulta — yahan wo rule mat lagao!")}
        </T>
      </Fade>
    </Scene>
  );
}
