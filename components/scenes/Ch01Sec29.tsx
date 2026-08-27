/**
 * Ch01 · Section 29 — "Example 4 [JEE Advanced]: a pulsating gas cloud"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 24.8, 39.6, 62.1, 87.0, 107.4, 128.4, 147.4]):
 *  0 tag + question card: f = f(R, ρ, G)
 *  1 step 1: f = C · Rᵃ ρᵇ Gᶜ — perfectly determined
 *  2 the picture: small cloud, big cloud, same density, both breathing
 *  3 step 2: dimensions + collect
 *  4 step 3: M gives b = c · T gives c = ½
 *  5 the L line: −3b + 3c evaporates → a = 0
 *  6 step 4: f = C √(Gρ) — the radius is gone
 *  7 the telescope: same ρ → same pulse, any size; real astrophysics
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | tag x60..310 y40..78 · card x140..980 y88..148 · question (sans 18) bl 122
 *  b1 | formula (sans 22) (250, bl 196) · note (script 14) x430 st bl 196
 *  b2 | clouds c(140,300) r30 & c(320,300) r60 + dashed pulse ghosts r38/r70 ·
 *       labels "small" (140, bl 358) "big" (320, bl 388)?? small bl 358 · big bl 392 ·
 *       "same ρ!" (230, bl 420)
 *  b3 | dims (sans 14) x520 st bl 240/268/296/324 · red note x700 st bl 240 ·
 *       collect (sans 16) x520 st bl 362
 *  b4 | rows (sans 15) x520 st bl 400 / 428
 *  b5 | L row x520 st bl 456 + strike (552,460)→(618,441) · "→ a = 0 !!" x790 st ·
 *       note (script 13, red) x520 st bl 486
 *  b6 | "f = C √(G ρ)" (sans 24) (250, bl 470) · note (script 15, amber) (250, bl 510)
 *  b7 | bar x51 y535..592 · lines (script 15, green) x62 st bl 552 / 588
 */

import React from "react";
import { Path } from 'react-native-svg';
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

export default function Ch01Sec29({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the question */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <Chip x={60} y={40} w={250} h={38} fill={INK} textFill={CREAM} size={15}>
          {t("EXAMPLE 4 · JEE ADVANCED", "EXAMPLE 4 · JEE ADVANCED")}
        </Chip>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 2)}
        d="M 152 88 h 816 q 12 0 12 12 v 36 q 0 12 -12 12 h -816 q -12 0 -12 -12 v -36 q 0 -12 12 -12"
        stroke={INK}
        sw={2.2}
        dur={0.9}
      />
      <Fade on={beat >= 0} delay={dl(0, 3.2)}>
        <T x={560} y={122} size={18} fill={INK} weight={700}>
          {t(
            "a gas cloud pulsates:  f depends on R, ρ, G  →  find f",
            "gas cloud dhadak raha hai:  f, R, ρ, G par depend  →  f nikaalo"
          )}
        </T>
      </Fade>

      {/* beat 1 — perfectly determined */}
      <Fade on={beat >= 1} delay={dl(1, 2.5)}>
        <T x={250} y={196} size={22} fill={INK} weight={800}>
          f = C · Rᵃ ρᵇ Gᶜ
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 8)}>
        <T x={430} y={196} size={14} fill={MUTED} script anchor="start">
          {t("3 unknowns · 3 equations — determined", "3 unknowns · 3 equations — poora banega")}
        </T>
      </Fade>

      {/* beat 2 — two clouds, same density */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 1)}
        d="M 110 300 A 30 30 0 1 1 170 300 A 30 30 0 1 1 110 300"
        stroke={AMBER_DARK}
        sw={2.4}
        dur={0.7}
      />
      <Fade on={beat >= 2} delay={dl(2, 2.5)}>
        <Path
          d="M 102 300 A 38 38 0 1 1 178 300 A 38 38 0 1 1 102 300"
          fill="none"
          stroke={MUTED}
          strokeWidth={1.4}
          strokeDasharray="5 6"
        />
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 4)}
        d="M 260 300 A 60 60 0 1 1 380 300 A 60 60 0 1 1 260 300"
        stroke={AMBER_DARK}
        sw={2.4}
        dur={0.9}
      />
      <Fade on={beat >= 2} delay={dl(2, 5.5)}>
        <Path
          d="M 250 300 A 70 70 0 1 1 390 300 A 70 70 0 1 1 250 300"
          fill="none"
          stroke={MUTED}
          strokeWidth={1.4}
          strokeDasharray="5 6"
        />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 6.5)}>
        <T x={140} y={362} size={13} fill={MUTED} script>
          {t("small", "chhota")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 7)}>
        <T x={320} y={392} size={13} fill={MUTED} script>
          {t("big", "bada")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 9)}>
        <T x={230} y={424} size={15} fill={AMBER_DARK} script>
          {t("same ρ — both breathing", "same ρ — dono saans le rahe")}
        </T>
      </Fade>

      {/* beat 3 — dimensions and collect */}
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <T x={520} y={240} size={14} fill={INK} weight={600} anchor="start">
          f: [M⁰ L⁰ T⁻¹]
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 4)}>
        <T x={680} y={240} size={12} fill={RED} script anchor="start">
          {t("no mass, no length on the left!", "left mein na mass, na length!")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 8)}>
        <T x={520} y={268} size={14} fill={INK} weight={600} anchor="start">
          R: [L]
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 10)}>
        <T x={520} y={296} size={14} fill={INK} weight={600} anchor="start">
          ρ: [M L⁻³]
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 13)}>
        <T x={520} y={324} size={14} fill={INK} weight={600} anchor="start">
          G: [M⁻¹ L³ T⁻²]
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 18)}>
        <T x={520} y={362} size={16} fill={INK} weight={700} anchor="start">
          →  Mᵇ⁻ᶜ · Lᵃ⁻³ᵇ⁺³ᶜ · T⁻²ᶜ
        </T>
      </Fade>

      {/* beat 4 — M and T equations */}
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <T x={520} y={400} size={15} fill={INK} weight={700} anchor="start">
          M:  b − c = 0  →  b = c
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 10)}>
        <T x={520} y={428} size={15} fill={INK} weight={700} anchor="start">
          T:  −2c = −1  →  c = ½  (so b = ½)
        </T>
      </Fade>

      {/* beat 5 — the middle evaporates */}
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <T x={520} y={456} size={15} fill={INK} weight={700} anchor="start">
          L:  a − 3b + 3c = 0
        </T>
      </Fade>
      <Draw
        on={beat >= 5}
        delay={dl(5, 8)}
        d="M 552 460 L 618 441"
        stroke={RED}
        sw={2.2}
        dur={0.4}
      />
      <Fade on={beat >= 5} delay={dl(5, 10)}>
        <T x={790} y={456} size={16} fill={RED} weight={800} anchor="start">
          →  a = 0 !!
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 14)}>
        <T x={520} y={486} size={13} fill={RED} script anchor="start">
          {t("b = c, so the middle evaporates", "b = c, toh beech ka hissa udd gaya")}
        </T>
      </Fade>

      {/* beat 6 — the radius is gone */}
      <Fade on={beat >= 6} delay={dl(6, 2.5)}>
        <T x={250} y={470} size={24} fill={INK} weight={800}>
          f = C √(G ρ)
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 9)}>
        <T x={250} y={510} size={15} fill={AMBER_DARK} script>
          {t("R⁰ = 1 — the radius is GONE", "R⁰ = 1 — radius GAYAB")}
        </T>
      </Fade>

      {/* beat 7 — the telescope */}
      <Draw
        on={beat >= 7}
        delay={dl(7, 1)}
        d="M 51 535 L 51 592"
        stroke={GREEN}
        sw={3.4}
        dur={0.5}
      />
      <Fade on={beat >= 7} delay={dl(7, 2)}>
        <T x={62} y={552} size={15} fill={GREEN} script anchor="start">
          {t(
            "a colossal star and a tiny star — same density, same breathing rate",
            "wishaal taara ho ya nanha — density same, dhadkan same"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 12)}>
        <T x={62} y={588} size={15} fill={GREEN} script anchor="start">
          {t(
            "real astrophysics — from pure dimensional bookkeeping",
            "asli astrophysics — sirf dimensional bookkeeping se"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
