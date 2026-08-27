/**
 * Ch01 · Section 24 — "Quick conversion: one newton, expressed in dynes"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 12.7, 20.3, 36.1, 46.3, 62.9, 80.2, 97.9]):
 *  0 tag + question card: 1 newton = ? dyne
 *  1 STEP 1: [F] = M L T⁻²
 *  2 read off: a = 1 · b = 1 · c = −2
 *  3 STEP 2: ratios — old on top, new below
 *  4 kg/g = 10³ · m/cm = 10² · s/s = 1
 *  5 STEP 3: plug in → 10⁵
 *  6 result chip: 1 N = 10⁵ dyne — the third pillar, live
 *  7 direction check: smaller units → the number must grow
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | tag x60..300 y40..78 · card x140..940 y92..152 · question (sans 20) bl 130
 *  b1 | STEP chip x60..250 y176..214 · formula (sans 20) x290 st bl 202
 *  b2 | exponents (sans 17, amber) x560 st bl 202 · note (script 14) x560 st bl 236
 *  b3 | STEP chip x60..250 y260..298 · rule (script 15) x290 st bl 286
 *  b4 | ratio rows (sans 17) x290 st bl 330 / 362 / 394
 *  b5 | STEP chip x60..250 y420..458 · formula (sans 19) x290 st bl 446
 *  b6 | result chip x700..940 y424..468 · note (script 14) x700 st bl 500
 *  b7 | bar x51 y530..560 · check (script 16, green) x62 st bl 550
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
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch01Sec24({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the smallest possible example */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <Chip x={60} y={40} w={240} h={38} fill={INK} textFill={CREAM} size={15}>
          {t("WARM-UP · PROCEDURE 3", "WARM-UP · PROCEDURE 3")}
        </Chip>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 2)}
        d="M 152 92 h 776 q 12 0 12 12 v 36 q 0 12 -12 12 h -776 q -12 0 -12 -12 v -36 q 0 -12 12 -12"
        stroke={INK}
        sw={2.2}
        dur={0.9}
      />
      <Fade on={beat >= 0} delay={dl(0, 3.2)}>
        <T x={540} y={130} size={20} fill={INK} weight={700}>
          {t("express:  1 newton  =  ? dyne", "batao:  1 newton  =  ? dyne")}
        </T>
      </Fade>

      {/* beat 1 — always step one */}
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <Chip x={60} y={176} w={190} h={38} fill={CREAM} stroke={AMBER} textFill={INK} size={15}>
          {t("STEP 1 · dimensions", "STEP 1 · dimensions")}
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3)}>
        <T x={290} y={202} size={20} fill={INK} weight={700} anchor="start">
          [F] = M L T⁻²
        </T>
      </Fade>

      {/* beat 2 — the instruction set */}
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <T x={560} y={202} size={17} fill={AMBER_DARK} weight={700} anchor="start">
          a = 1 · b = 1 · c = −2
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 9)}>
        <T x={560} y={236} size={14} fill={MUTED} script anchor="start">
          {t("the whole instruction set", "poora instruction set")}
        </T>
      </Fade>

      {/* beat 3 — set up the ratios */}
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <Chip x={60} y={260} w={190} h={38} fill={CREAM} stroke={AMBER} textFill={INK} size={15}>
          {t("STEP 2 · ratios", "STEP 2 · ratios")}
        </Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 3)}>
        <T x={290} y={286} size={15} fill={AMBER_DARK} script anchor="start">
          {t("old system on top — new underneath, every bracket", "purana upar — naya neeche, har bracket mein")}
        </T>
      </Fade>

      {/* beat 4 — the three ratios */}
      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <T x={290} y={330} size={17} fill={INK} weight={700} anchor="start">
          kg / g = 10³
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 6)}>
        <T x={290} y={362} size={17} fill={INK} weight={700} anchor="start">
          m / cm = 10²
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 11)}>
        <T x={290} y={394} size={17} fill={INK} weight={700} anchor="start">
          {t("s / s = 1   (nothing happens)", "s / s = 1   (kuch nahi hota)")}
        </T>
      </Fade>

      {/* beat 5 — plug in */}
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <Chip x={60} y={420} w={190} h={38} fill={CREAM} stroke={AMBER} textFill={INK} size={15}>
          {t("STEP 3 · plug in", "STEP 3 · plug in")}
        </Chip>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 3)}>
        <T x={290} y={446} size={19} fill={INK} weight={700} anchor="start">
          n₂ = 1 × (10³)¹ × (10²)¹ × 1⁻² = 10⁵
        </T>
      </Fade>

      {/* beat 6 — the result */}
      <Fade on={beat >= 6} delay={dl(6, 1.5)}>
        <Chip x={700} y={424} w={240} h={44} fill={INK} textFill={CREAM} size={20} script={false}>
          1 N = 10⁵ dyne
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 10)}>
        <T x={700} y={500} size={14} fill={AMBER_DARK} script anchor="start">
          {t("the third pillar — live", "teesra pillar — live")}
        </T>
      </Fade>

      {/* beat 7 — signed off */}
      <Draw
        on={beat >= 7}
        delay={dl(7, 2)}
        d="M 51 530 L 51 560"
        stroke={GREEN}
        sw={3.4}
        dur={0.4}
      />
      <Fade on={beat >= 7} delay={dl(7, 2.6)}>
        <T x={62} y={550} size={16} fill={GREEN} script anchor="start">
          {t(
            "check: g and cm are smaller → number must grow — 1 → 100 000 ✓",
            "check: g aur cm chhote → number bada hona chahiye — 1 → 100 000 ✓"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
