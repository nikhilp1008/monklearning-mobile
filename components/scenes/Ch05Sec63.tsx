/**
 * Ch05 · Section 63 — "The angle at which the string goes slack" (worked example)
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 16.5, 41.3, 50.4, 75.3, 100.1, 124.9, 149.8] · dur 160.4;
 *        hi [0, 16.7, 41.6, 49.4, 74.2, 99.1, 123.9, 148.7] · dur 159.1):
 *  0 title + subtitle
 *  1 setup chip + middle-regime note
 *  2 two-conditions header
 *  3 condition 1: energy → gR(1+2cosθ)
 *  4 condition 2: slack → −gR cosθ
 *  5 combine → cos θ = −1/3
 *  6 result chip ≈ 109.5° + consistency
 *  7 self-check band
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52 · subtitle cx540 bl80
 *  b1 | chip x100..700 y110..148 · amber cx400 bl174
 *  b2 | cx540 bl208
 *  b3 | lbl st x80 bl244 · f st x90 bl274 / bl304
 *  b4 | lbl st x560 bl244 · f st x570 bl274 / bl304 · script cx760 bl330
 *  b5 | amber cx540 bl375 · f cx540 bl405
 *  b6 | chip x340..740 y430..472 · green cx540 bl498
 *  b7 | bar x66 y520..585 · lines st x84 bl540 / bl566
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  Chip,
  T,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch05Sec63({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={22} fill={INK} script>
          {t("Where the String Goes Slack", "String Kahan Dheeli Padti Hai")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 5)}>
        <T x={540} y={80} size={13} fill={MUTED} script>
          {t(
            "the closing JEE Advanced classic — the whole chapter in one problem",
            "aakhri JEE Advanced classic — poora chapter ek sawaal mein"
          )}
        </T>
      </Fade>

      {/* beat 1 — setup */}
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <Chip x={100} y={110} w={600} h={38} fill={CREAM} stroke={INK} textFill={INK} size={13} script={false}>
          {t(
            "u = √(3gR) from the lowest point — find the slack angle",
            "sabse neeche se u = √(3gR) — slack ka angle nikaalo"
          )}
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 10)}>
        <T x={400} y={174} size={13} fill={AMBER_DARK} script>
          {t(
            "middle regime (√2gR < u < √5gR) → it WILL go slack up top",
            "beech waala regime (√2gR < u < √5gR) → upar dheeli PADEGI hi"
          )}
        </T>
      </Fade>

      {/* beat 2 — two conditions */}
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <T x={540} y={208} size={13} fill={INK} script>
          {t(
            "two conditions must hold at the same instant — the art is combining them",
            "do conditions ek hi pal sach honi chahiye — kala unhe milane mein hai"
          )}
        </T>
      </Fade>

      {/* beat 3 — condition 1: energy */}
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={80} y={244} size={13} fill={GREEN} script anchor="start">
          {t("condition 1 — energy", "condition 1 — energy")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 4)}>
        <T x={90} y={274} size={14} fill={INK} anchor="start" weight={700}>
          v² = u² − 2gR(1 − cos θ)
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 13)}>
        <T x={90} y={304} size={14} fill={INK} anchor="start" weight={800}>
          → v² = gR(1 + 2 cos θ)
        </T>
      </Fade>

      {/* beat 4 — condition 2: slack */}
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={560} y={244} size={13} fill={RED} script anchor="start">
          {t("condition 2 — slack (T = 0)", "condition 2 — dheeli (T = 0)")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 4)}>
        <T x={570} y={274} size={14} fill={INK} anchor="start" weight={700}>
          mv²⁄R = −mg cos θ
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 10)}>
        <T x={570} y={304} size={14} fill={INK} anchor="start" weight={800}>
          → v² = −gR cos θ
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 17)}>
        <T x={760} y={330} size={12.5} fill={RED} script>
          {t(
            "the minus sign → only ABOVE the horizontal",
            "minus sign → sirf horizontal se UPAR"
          )}
        </T>
      </Fade>

      {/* beat 5 — combine */}
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <T x={540} y={375} size={13} fill={AMBER_DARK} script>
          {t("set them equal — the gR cancels throughout", "barabar rakho — gR poora cancel")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 9)}>
        <T x={540} y={405} size={15} fill={INK} weight={800}>
          1 + 2cos θ = −cos θ → 3 cos θ = −1
        </T>
      </Fade>

      {/* beat 6 — the result */}
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <Chip x={340} y={430} w={400} h={42} fill={CREAM} stroke={GREEN} textFill={INK} size={15} script={false}>
          cos θ = −⅓ → θ ≈ 109.5°
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 12)}>
        <T x={540} y={498} size={13} fill={GREEN} script>
          {t(
            "negative cosine — above the horizontal, exactly as predicted",
            "negative cosine — horizontal se upar, bilkul jaisa bataya tha"
          )}
        </T>
      </Fade>

      {/* beat 7 — the self-check */}
      <Draw on={beat >= 7} delay={dl(7, 0.5)} d="M 66 520 v 62" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 2)}>
        <T x={84} y={540} size={13} fill={GREEN} script anchor="start">
          {t(
            "the self-check: slack can only happen where cos θ < 0",
            "self-check: dheeli sirf wahin pad sakti hai jahan cos θ < 0"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 7)}>
        <T x={84} y={566} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "energy + dynamics + slack — the whole chapter, closing in concert",
            "energy + dynamics + slack — poora chapter, milkar band hota hua"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
