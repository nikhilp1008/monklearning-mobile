/**
 * Ch01 · Section 73 — "Example 3 [JEE Main]: reading, correcting, then propagating"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 24.8, 33.7, 45.2, 55.6, 71.7, 96.5, 117.3]):
 *  0 given chips (pitch, 100 div, MSR 2, 45th, −5 div zero error)
 *  1 red note: negative, in DIVISIONS — deliberate
 *  2 LC = 0.01 mm
 *  3 double duty note
 *  4 observed = 2.45 mm
 *  5 corrected = 2.45 − (−0.05) = 2.50 ✓ · ten-LC warning
 *  6 A ∝ d² ⇒ ΔA/A = 2Δd/d
 *  7 0.8% result + closing
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | chips y72..104: x90/x280/x490/x680 · row2 y112..144: x90 w280 (red)
 *  b1 | red 13 st x400 bl 134
 *  b2 | 17 st x100 bl 185 · b3 amber 13 st x450 bl 185
 *  b4 | 17 st x100 bl 230
 *  b5 | 17 st x100 bl 275 · 18 st x100 bl 318 + green 20 st x420 · red 13 st x100 bl 352
 *  b6 | 17 st x100 bl 400 · muted 13 st x100 bl 428
 *  b7 | 18 st x100 bl 475 · green chip y495..533 x560..1000 · script mid bl 570
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Chip,
  T,
  INK,
  INK_LIGHT,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch01Sec73({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — givens */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={50} size={22} fill={INK} script>
          {t(
            "JEE Main — read, correct, then propagate",
            "JEE Main — padho, sudhaaro, phir failao"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 5)}>
        <Chip x={90} y={72} w={170} h={32} fill={CREAM} stroke={INK_LIGHT} textFill={INK} size={14} script={false}>
          pitch 1 mm
        </Chip>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 7)}>
        <Chip x={280} y={72} w={190} h={32} fill={CREAM} stroke={INK_LIGHT} textFill={INK} size={14} script={false}>
          100 divisions
        </Chip>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 11)}>
        <Chip x={490} y={72} w={170} h={32} fill={CREAM} stroke={INK_LIGHT} textFill={INK} size={14} script={false}>
          MSR 2 mm
        </Chip>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 13)}>
        <Chip x={680} y={72} w={200} h={32} fill={CREAM} stroke={INK_LIGHT} textFill={INK} size={14}>
          {t("45th coincides", "45vi milti hai")}
        </Chip>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 17)}>
        <Chip x={90} y={112} w={280} h={32} fill={CREAM} stroke={RED} textFill={RED} size={14} script={false}>
          {t("zero error: −5 divisions", "zero error: −5 divisions")}
        </Chip>
      </Fade>

      {/* beat 1 — read it carefully */}
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <T x={400} y={134} size={13} fill={RED} script anchor="start">
          {t(
            "negative — and quoted in DIVISIONS, not mm. both deliberate",
            "negative — aur mm nahi, DIVISIONS mein. dono jaanbujhkar"
          )}
        </T>
      </Fade>

      {/* beat 2 — the least count */}
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <T x={100} y={185} size={17} fill={INK} weight={700} anchor="start">
          LC = pitch ÷ 100 = 1 ⁄ 100 mm = 0.01 mm
        </T>
      </Fade>

      {/* beat 3 — double duty */}
      <Fade on={beat >= 3} delay={dl(3, 2)}>
        <T x={560} y={185} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "double duty: converts divisions AND is the uncertainty",
            "dohra kaam: divisions badalta AUR uncertainty bhi hai"
          )}
        </T>
      </Fade>

      {/* beat 4 — observed */}
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <T x={100} y={230} size={17} fill={INK} weight={700} anchor="start">
          observed = 2 + 45 × 0.01 = 2.45 mm
        </T>
      </Fade>

      {/* beat 5 — corrected, minus a minus */}
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={100} y={275} size={17} fill={INK} weight={700} anchor="start">
          zero error = −5 × 0.01 = −0.05 mm
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 8)}>
        <T x={100} y={318} size={18} fill={INK} weight={700} anchor="start">
          corrected = 2.45 − (−0.05)
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 12)}>
        <T x={430} y={318} size={20} fill={GREEN} weight={700} anchor="start">= 2.50 mm ✓</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 18)}>
        <T x={100} y={352} size={13} fill={RED} script anchor="start">
          {t(
            "subtract 0.05 instead → 2.40 — wrong by a full TEN least counts",
            "0.05 ghata dete → 2.40 — poore DAS least counts galat"
          )}
        </T>
      </Fade>

      {/* beat 6 — into the area */}
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={100} y={400} size={17} fill={INK} weight={700} anchor="start">
          A = πd²/4  ∝  d²  ⇒  ΔA/A = 2 × Δd/d
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 12)}>
        <T x={100} y={428} size={13} fill={MUTED} script anchor="start">
          {t(
            "π and 4 are exact — they contribute nothing",
            "π aur 4 exact hain — kuchh nahi jodte"
          )}
        </T>
      </Fade>

      {/* beat 7 — the number */}
      <Fade on={beat >= 7} delay={dl(7, 2)}>
        <T x={100} y={475} size={18} fill={INK} weight={700} anchor="start">
          ΔA/A = 2 × 0.01 ⁄ 2.50 = 0.008 = 0.8%
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 10)}>
        <Chip x={560} y={495} w={440} h={38} fill={CREAM} stroke={GREEN} textFill={GREEN} size={15} script={false}>
          d = 2.50 mm · ΔA/A = 0.8%
        </Chip>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 18)}>
        <T x={540} y={570} size={13} fill={AMBER_DARK} script>
          {t(
            "the negative error pushed the reading UP — and the error DOUBLED on its way into the area",
            "negative error ne reading UPAR dhakeli — aur error area mein jaate-jaate DUGNI ho gayi"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
