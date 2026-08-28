/**
 * Ch13 · Section 43 — "Worked example (JEE Advanced): the meaning of the quality factor"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 4.8, 11.59, 17.06, 25.34, 29.82, 38.76, 44.56]):
 *  0 shelf
 *  1 given: ω₀=200 rad/s, Q=100 · find b/m, cycles until E→E₀/e
 *  2 Q = mω₀/b ⇒ b/m = ω₀/Q = 2 s⁻¹
 *  3 E₀e^(−(b/m)t) = E₀/e ⇒ t = m/b = 0.5 s
 *  4 diagram: many gently-decaying cycles, 1/e point marked far right
 *  5 hero (high): T ≈ 0.0314 s , N = Q/2π ≈ 15.9
 *  6 ≈16 oscillations; in general N = Q/2π
 *  7 hero (high): high-Q rings many cycles ⇒ sharp, selective resonance
 *
 * Layout plan (Anek bl−0.78s..+0.31s):
 *  b0 | shelf y80 x60..1020
 *  b1 | st x70 bl100 size13 · st x70 bl128 size12
 *  b2 | st x70 bl165 size13
 *  b3 | st x70 bl200 size13
 *  b4 | eq-dashed y190 x600..960 · wave (7 gently-decaying cycles) x600..960 ink ·
 *      envelope dashed top/bottom amber · 1/e marker x900 y170..210 dashed red · label x905 bl165
 *  b5 | box x70..460 y225..270 rx14 · line cx265 bl253 size15
 *  b6 | st x70 bl305 size12
 *  b7 | box x70..560 y325..380 rx14 · line cx315 bl358 size15
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
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch13Sec43({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={52} size={18} fill={INK} script>
          {t("How many cycles does a high-Q oscillator ring?", "High-Q oscillator kitne cycles ring karta hai?")}
        </T>
      </Fade>

      {/* beat 0 — the shelf */}
      <Draw on={beat >= 0} delay={dl(0, 0.3)} d="M 60 80 L 1020 80" stroke={INK} sw={1.4} dur={0.6} />

      {/* beat 1 — the given data */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={70} y={100} size={13} fill={INK} anchor="start" weight={700}>
          ω₀ = 200 rad/s , Q = 100
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={70} y={128} size={12} fill={INK} anchor="start" weight={700}>
          {t("find: b/m , cycles until E→E₀/e", "nikaalo: b/m , kitne cycles jab tak E→E₀/e")}
        </T>
      </Fade>

      {/* beat 2 — the ratio b/m */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={70} y={165} size={13} fill={INK} anchor="start" weight={700}>
          Q = mω₀/b ⇒ b/m = ω₀/Q = 200/100 = 2 s⁻¹
        </T>
      </Fade>

      {/* beat 3 — the 1/e time */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={70} y={200} size={13} fill={INK} anchor="start" weight={700}>
          E₀e^(−(b/m)t) = E₀/e ⇒ t = m/b = 0.5 s
        </T>
      </Fade>

      {/* beat 4 — the picture: many gentle cycles before 1/e */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <Path d="M 600 190 H 960" stroke={MUTED} strokeWidth={1.1} strokeDasharray="4 4" fill="none" />
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.6)}
        d="M600 190 Q615 174 630 190 Q645 206 660 190 Q675 175 690 190 Q705 205 720 190 Q735 176 750 190 Q765 204 780 190 Q795 177 810 190 Q825 203 840 190 Q855 178 870 190 Q885 202 900 190 Q915 179 930 190 Q945 201 960 190"
        stroke={INK}
        sw={2}
        dur={1.2}
      />
      <Fade on={beat >= 4} delay={dl(4, 2.1)}>
        <Path d="M600 174 Q780 180 960 179" stroke={AMBER_DARK} strokeWidth={1.2} strokeDasharray="4 4" fill="none" />
        <Path d="M600 206 Q780 200 960 201" stroke={AMBER_DARK} strokeWidth={1.2} strokeDasharray="4 4" fill="none" />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.5)}>
        <Path d="M 900 170 V 210" stroke={RED} strokeWidth={1.4} strokeDasharray="3 3" fill="none" />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.8)}>
        <T x={905} y={165} size={10} fill={RED} anchor="start">
          {t("E=E₀/e (~16 cycles)", "E=E₀/e (~16 cycles)")}
        </T>
      </Fade>

      {/* beat 5 — counting the cycles, hero */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Draw
          on={beat >= 5}
          delay={dl(5, 0.3)}
          d="M 84 225 h 372 q 14 0 14 14 v 17 q 0 14 -14 14 h -372 q -14 0 -14 -14 v -17 q 0 -14 14 -14"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.1)}>
        <T x={265} y={253} size={15} fill={INK} weight={800}>
          T ≈ 0.0314 s , N = t/T = Q/2π ≈ 15.9
        </T>
      </Fade>

      {/* beat 6 — the round number and the general rule */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={70} y={305} size={12} fill={INK} anchor="start">
          {t("≈16 oscillations ; in general N = Q/2π", "≈16 oscillations ; general mein N = Q/2π")}
        </T>
      </Fade>

      {/* beat 7 — the deep meaning of Q, high emphasis */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Draw
          on={beat >= 7}
          delay={dl(7, 0.3)}
          d="M 84 325 h 402 q 14 0 14 14 v 27 q 0 14 -14 14 h -402 q -14 0 -14 -14 v -27 q 0 -14 14 -14"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.1)}>
        <T x={315} y={358} size={15} fill={INK} weight={800}>
          {t(
            "high-Q rings MANY cycles ⇒ sharp, selective resonance",
            "high-Q kaafi cycles ring karta hai ⇒ sharp, selective resonance"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
