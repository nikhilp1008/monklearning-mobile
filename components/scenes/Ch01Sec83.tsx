/**
 * Ch01 · Section 83 — "The four indirect-measurement formulas"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 7.7, 25.9, 50.2, 55.1, 77.1, 86.5, 109.4]):
 *  0 title
 *  1 card 1: parallax D = b/θ (radians)
 *  2 what b is: observatories / 2 AU
 *  3 card 2 header — same geometry backwards
 *  4 d = αD + notes
 *  5 card 3: echo family
 *  6 D = vt/2 + which v (factor 200,000)
 *  7 card 4: t = V/A + monolayer note
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  cards 2×2: x80..520 / x560..1000 · y84..150 and y280..346
 *  card: label 12 st x+16 bl 106 · formula 20 mid bl 136
 *  notes: bl 180/206 (top row) · bl 376/402 (bottom row)
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
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch01Sec83({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const card = (x: number, y: number) =>
    `M ${x + 12} ${y} h 416 q 12 0 12 12 v 42 q 0 12 -12 12 h -416 q -12 0 -12 -12 v -42 q 0 -12 12 -12`;

  return (
    <Scene>
      {/* beat 0 — title */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={50} size={24} fill={INK} script>
          {t(
            "four formulas — all of them one-liners",
            "chaar formulas — sab ek-ek line ke"
          )}
        </T>
      </Fade>

      {/* beat 1 — parallax card */}
      <Draw on={beat >= 1} delay={dl(1, 1)} d={card(80, 84)} stroke={AMBER} sw={2.2} dur={0.7} />
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <T x={96} y={106} size={12} fill={MUTED} anchor="start">parallax</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.5)}>
        <T x={300} y={136} size={20} fill={INK} weight={700}>
          θ = b ⁄ D  ⇒  D = b ⁄ θ
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 10)}>
        <T x={300} y={180} size={13} fill={AMBER_DARK} script>
          {t("θ in RADIANS — always", "θ RADIANS mein — hamesha")}
        </T>
      </Fade>

      {/* beat 2 — what b is */}
      <Fade on={beat >= 2} delay={dl(2, 3)}>
        <T x={90} y={210} size={13} fill={INK} script anchor="start">
          {t(
            "planet: b = two observatories on Earth",
            "grah: b = dharti par do vedhshaalayein"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 12)}>
        <T x={90} y={238} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "star: b = 2 AU — the FULL orbit diameter, not one",
            "taara: b = 2 AU — POORI kaksha ka vyaas, ek nahi"
          )}
        </T>
      </Fade>

      {/* beat 3 — angular size header */}
      <Draw on={beat >= 3} delay={dl(3, 1)} d={card(560, 84)} stroke={AMBER} sw={2.2} dur={0.7} />
      <Fade on={beat >= 3} delay={dl(3, 2)}>
        <T x={576} y={106} size={12} fill={MUTED} anchor="start">
          {t("angular size", "angular size")}
        </T>
      </Fade>

      {/* beat 4 — d = αD */}
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={780} y={136} size={20} fill={INK} weight={700}>
          α = d ⁄ D  ⇒  d = α D
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 8)}>
        <T x={570} y={210} size={13} fill={INK} script anchor="start">
          {t(
            "the same geometry, read backwards",
            "wahi jyamiti, ulti padhi hui"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 15)}>
        <T x={570} y={238} size={13} fill={GREEN} script anchor="start">
          {t(
            "parallax gives D — this tells you what sits at D",
            "parallax D deta hai — yeh batata hai D par baitha kya hai"
          )}
        </T>
      </Fade>

      {/* beat 5 — echo card */}
      <Draw on={beat >= 5} delay={dl(5, 1)} d={card(80, 280)} stroke={AMBER} sw={2.2} dur={0.7} />
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <T x={96} y={302} size={12} fill={MUTED} anchor="start">
          {t("echo — RADAR · SONAR · LIDAR", "echo — RADAR · SONAR · LIDAR")}
        </T>
      </Fade>

      {/* beat 6 — D = vt/2 and which v */}
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={300} y={332} size={20} fill={INK} weight={700}>D = v t ⁄ 2</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 6)}>
        <T x={90} y={376} size={13} fill={INK} script anchor="start">
          {t(
            "radio / laser: v = c = 3 × 10⁸ m/s · sound in water: ~1500 m/s",
            "radio / laser: v = c = 3 × 10⁸ m/s · paani mein awaaz: ~1500 m/s"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 16)}>
        <T x={90} y={404} size={13} fill={RED} script anchor="start">
          {t(
            "a factor of 200,000 — identify the pulse before you substitute",
            "do lakh ka gunak — substitute se pehle pulse pehchano"
          )}
        </T>
      </Fade>

      {/* beat 7 — the molecule card */}
      <Draw on={beat >= 7} delay={dl(7, 1)} d={card(560, 280)} stroke={AMBER} sw={2.2} dur={0.7} />
      <Fade on={beat >= 7} delay={dl(7, 2)}>
        <T x={576} y={302} size={12} fill={MUTED} anchor="start">
          {t("molecular size — the monolayer", "anu ka aakaar — monolayer")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 4)}>
        <T x={780} y={332} size={20} fill={INK} weight={700}>t = V ⁄ A</T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 10)}>
        <T x={570} y={376} size={13} fill={INK} script anchor="start">
          {t(
            "volume ÷ area = a thickness",
            "volume ÷ area = ek motai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 16)}>
        <T x={570} y={404} size={13} fill={GREEN} script anchor="start">
          {t(
            "the monolayer assumption turns that thickness into a molecular size",
            "monolayer waali dhaarna us motai ko anu ke aakaar mein badal deti hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
