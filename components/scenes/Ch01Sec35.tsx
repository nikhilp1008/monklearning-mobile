/**
 * Ch01 · Section 35 — "Mean, absolute error, and how to report a result"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 11.5, 19.5, 42.8, 58.0, 80.0, 102.1, 116.1]):
 *  0 title + the readings a₁ … aₙ
 *  1 STEP 1 chip: the mean
 *  2 ā = (1/n) Σ aᵢ + the random-only reminder
 *  3 STEP 2 chip: each reading's error (same units)
 *  4 Δaᵢ = |ā − aᵢ| — the bars throw the sign away
 *  5 STEP 3 chip + why the modulus matters
 *  6 Δā = (1/n) Σ Δaᵢ — the honest disagreement number
 *  7 the report box: a = ā ± Δā — both halves matter
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | title mid bl 62 · readings (sans 18) mid bl 110
 *  b1 | chip x60..260 y140..178
 *  b2 | formula (sans 22) x300 st bl 166 · note (script 13) x640 st bl 166
 *  b3 | chip x60..300 y210..248 · note (script 13) x640 st bl 236
 *  b4 | formula (sans 22) x340 st bl 236 · bars line (script 14) x104 st bl 288
 *  b5 | chip x60..300 y320..358 · warning (script 14, red) x104 st bl 398
 *  b6 | formula (sans 22) x340 st bl 346 · note (script 13, green) x660 st bl 346
 *  b7 | box x240..840 y440..510 · "a = ā ± Δā" (sans 26) mid bl 484 ·
 *       verdict (script 15, green) mid bl 555 · underline y570
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

export default function Ch01Sec35({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the machinery */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={62} size={28} fill={RED} script>
          {t("the machinery: from readings to a result", "machinery: readings se result tak")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 4)}>
        <T x={540} y={110} size={18} fill={INK} weight={700}>
          {t("n readings:  a₁ , a₂ , … , aₙ", "n readings:  a₁ , a₂ , … , aₙ")}
        </T>
      </Fade>

      {/* beat 1 — step one */}
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <Chip x={60} y={140} w={200} h={38} fill={CREAM} stroke={AMBER} textFill={INK} size={15}>
          {t("STEP 1 · the mean", "STEP 1 · mean")}
        </Chip>
      </Fade>

      {/* beat 2 — the formula */}
      <Fade on={beat >= 2} delay={dl(2, 1.5)}>
        <T x={300} y={166} size={22} fill={INK} weight={800} anchor="start">
          ā = (1/n) Σ aᵢ
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 12)}>
        <T x={640} y={166} size={13} fill={AMBER_DARK} script anchor="start">
          {t("stand-in for truth — random errors only", "sach ka stand-in — sirf random errors par")}
        </T>
      </Fade>

      {/* beat 3 — step two */}
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <Chip x={60} y={210} w={240} h={38} fill={CREAM} stroke={AMBER} textFill={INK} size={15}>
          {t("STEP 2 · each reading", "STEP 2 · har reading")}
        </Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 8)}>
        <T x={640} y={236} size={13} fill={MUTED} script anchor="start">
          {t("same units as the quantity itself", "quantity jaisi hi units")}
        </T>
      </Fade>

      {/* beat 4 — the bars do real work */}
      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <T x={340} y={236} size={22} fill={INK} weight={800} anchor="start">
          Δaᵢ = | ā − aᵢ |
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 8)}>
        <T x={104} y={288} size={14} fill={INK} script anchor="start">
          {t(
            "the bars throw the sign away: +0.04 and −0.04 both count as 0.04",
            "bars sign phenk dete hain: +0.04 ho ya −0.04 — dono 0.04 ginte hain"
          )}
        </T>
      </Fade>

      {/* beat 5 — step three, and why the modulus mattered */}
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <Chip x={60} y={320} w={240} h={38} fill={CREAM} stroke={AMBER} textFill={INK} size={15}>
          {t("STEP 3 · mean error", "STEP 3 · mean error")}
        </Chip>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 8)}>
        <T x={104} y={398} size={14} fill={RED} script anchor="start">
          {t(
            "signed deviations would cancel to ~zero → 'a perfect experiment'. it is NOT.",
            "sign ke saath jodte toh ~zero milta → 'perfect experiment'. jo hai NAHI."
          )}
        </T>
      </Fade>

      {/* beat 6 — the honest number */}
      <Fade on={beat >= 6} delay={dl(6, 1.5)}>
        <T x={340} y={346} size={22} fill={INK} weight={800} anchor="start">
          Δā = (1/n) Σ Δaᵢ
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 8)}>
        <T x={680} y={346} size={13} fill={GREEN} script anchor="start">
          {t("your honest disagreement number", "tumhara imaandaar disagreement number")}
        </T>
      </Fade>

      {/* beat 7 — how to write the answer */}
      <Draw
        on={beat >= 7}
        delay={dl(7, 1)}
        d="M 252 440 h 576 q 12 0 12 12 v 46 q 0 12 -12 12 h -576 q -12 0 -12 -12 v -46 q 0 -12 12 -12"
        stroke={INK}
        sw={2.6}
        dur={0.9}
      />
      <Fade on={beat >= 7} delay={dl(7, 2.5)}>
        <T x={540} y={484} size={26} fill={INK} weight={800}>
          a = ā ± Δā
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 12)}>
        <T x={540} y={555} size={15} fill={GREEN} script>
          {t(
            "both halves matter — boards give marks for the ± form itself",
            "dono hisse zaroori — boards ± likhne ke alag marks dete hain"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 7}
        delay={dl(7, 13)}
        d="M 330 570 C 460 566, 620 572, 750 568"
        stroke={GREEN}
        sw={2}
        dur={0.6}
      />
    </Scene>
  );
}
