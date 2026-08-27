/**
 * Ch01 · Section 54 — "The arithmetic rules, and order of magnitude"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 7.2, 18.8, 28.6, 49.8, 59.1, 77.9, 94.9]):
 *  0 title
 *  1 left card: × ÷ → least sig figs + recipe
 *  2 right card: + − → least decimal places + recipe
 *  3 habit chip: WHICH operation, asked first · red sub-line
 *  4 divider · heading: order of magnitude — scale, not precision
 *  5 rule chips: a<5 → 10ᵇ (green) · a≥5 → 10ᵇ⁺¹ (amber)
 *  6 hydrogen radius row → order 10⁻¹⁰
 *  7 electron mass row → 10⁻³⁰ ✓ not 10⁻³¹ ✗ · warning line
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b1 | card x80..520 y84..204 · header 26 bl 118 · rule script 15 bl 150 · recipe 13 bl 182
 *  b2 | card x560..1000 y84..204 (mirror)
 *  b3 | chip x300..780 y228..266 · red sub mid bl 296
 *  b4 | line y320 x80..1000 · heading script 18 mid bl 350
 *  b5 | chips y374..410: x180..500 / x580..900
 *  b6 | ex 19 st x120 bl 455 · green note st x400
 *  b7 | ex st x120 bl 505 · amber note st x400 · line2 bl 540 st x400/x600 · red script mid bl 575
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
  INK_LIGHT,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch01Sec54({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const cardD = (x: number) =>
    `M ${x + 12} 84 h 416 q 12 0 12 12 v 96 q 0 12 -12 12 h -416 q -12 0 -12 -12 v -96 q 0 -12 12 -12`;

  return (
    <Scene>
      {/* beat 0 — title */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={56} size={26} fill={INK} script>
          {t(
            "the two rules, side by side",
            "dono niyam, agal-bagal"
          )}
        </T>
      </Fade>

      {/* beat 1 — × ÷ card */}
      <Draw on={beat >= 1} delay={dl(1, 0.5)} d={cardD(80)} stroke={INK} sw={2.4} dur={0.8} />
      <Fade on={beat >= 1} delay={dl(1, 1.6)}>
        <T x={300} y={118} size={26} fill={AMBER_DARK} weight={700}>× ÷</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3)}>
        <T x={300} y={150} size={15} fill={INK} script>
          {t("keep the least SIG FIGS", "sabse kam SIG FIGS bachte")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 6)}>
        <T x={300} y={182} size={13} fill={MUTED}>
          {t("count each → take smallest → round to it", "har input gino → chhota lo → utna round")}
        </T>
      </Fade>

      {/* beat 2 — + − card */}
      <Draw on={beat >= 2} delay={dl(2, 0.5)} d={cardD(560)} stroke={INK} sw={2.4} dur={0.8} />
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <T x={780} y={118} size={26} fill={AMBER_DARK} weight={700}>+ −</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3)}>
        <T x={780} y={150} size={15} fill={INK} script>
          {t("keep the least DECIMAL PLACES", "sabse kam DECIMAL PLACES")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 6)}>
        <T x={780} y={182} size={13} fill={MUTED}>
          {t("count places → take smallest → round to it", "places gino → chhota lo → utna round")}
        </T>
      </Fade>

      {/* beat 3 — the habit */}
      <Fade on={beat >= 3} delay={dl(3, 3)}>
        <Chip x={300} y={228} w={480} h={38} fill={CREAM} stroke={AMBER} textFill={AMBER_DARK} size={16}>
          {t(
            "before counting anything — WHICH operation?",
            "kuchh ginne se pehle — operation KAUN SA?"
          )}
        </Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 10)}>
        <T x={540} y={296} size={14} fill={RED} script>
          {t(
            "two different countings — that is the whole difficulty",
            "do alag gintiyaan — bas yahi poori dikkat hai"
          )}
        </T>
      </Fade>

      {/* beat 4 — order of magnitude heading */}
      <Draw on={beat >= 4} delay={dl(4, 1)} d="M 80 320 h 920" stroke={MUTED} sw={1.4} dur={0.8} />
      <Fade on={beat >= 4} delay={dl(4, 3)}>
        <T x={540} y={350} size={18} fill={AMBER_DARK} script>
          {t(
            "order of magnitude — scale, not precision",
            "order of magnitude — paimana, precision nahi"
          )}
        </T>
      </Fade>

      {/* beat 5 — the two cases */}
      <Fade on={beat >= 5} delay={dl(5, 4)}>
        <Chip x={180} y={374} w={320} h={36} fill={CREAM} stroke={GREEN} textFill={GREEN} size={16} script={false}>
          a {"<"} 5 → order = 10ᵇ
        </Chip>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 10)}>
        <Chip x={580} y={374} w={320} h={36} fill={CREAM} stroke={AMBER} textFill={AMBER_DARK} size={16} script={false}>
          a ≥ 5 → order = 10ᵇ⁺¹
        </Chip>
      </Fade>

      {/* beat 6 — hydrogen radius */}
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={120} y={455} size={19} fill={INK} weight={600} anchor="start">
          r(H) = 1.06 × 10⁻¹⁰ m
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 6)}>
        <T x={420} y={455} size={14} fill={GREEN} script anchor="start">
          {t("1.06 < 5 → order 10⁻¹⁰ — simple", "1.06 < 5 → order 10⁻¹⁰ — seedha")}
        </T>
      </Fade>

      {/* beat 7 — electron mass, where the rule bites */}
      <Fade on={beat >= 7} delay={dl(7, 1)}>
        <T x={120} y={505} size={19} fill={INK} weight={600} anchor="start">
          m(e) = 9.1 × 10⁻³¹ kg
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 5)}>
        <T x={420} y={505} size={14} fill={AMBER_DARK} script anchor="start">
          {t("9.1 ≥ 5 → rounds up to 10", "9.1 ≥ 5 → das tak round")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 9)}>
        <T x={420} y={540} size={16} fill={GREEN} weight={700} anchor="start">
          10 × 10⁻³¹ = 10⁻³⁰ ✓
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 12)}>
        <T x={640} y={540} size={16} fill={RED} weight={700} anchor="start">
          {t("not 10⁻³¹ ✗", "10⁻³¹ nahi ✗")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 17)}>
        <T x={540} y={575} size={14} fill={RED} script>
          {t(
            "the exponent you can SEE is not the answer — copied straight, it loses the mark",
            "jo exponent DIKH raha hai wo answer nahi — seedha utaara to mark gaya"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
