/**
 * Ch13 · Section 2 — "The ID card of SHM and where it breaks"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 11.95, 22.36, 38.17, 53.6, 64.78, 71.72, 86.37]):
 *  0 recall: F = −k x
 *  1 arrow down + F = m a
 *  2 the ID card: rounded card, photo circle, a = −ω²x, ω² = k/m
 *  3 a-vs-x graph: axes, negative-slope line through origin, two dots
 *  4 checkmark + red note: any disguise, still SHM
 *  5 divider + "where the idealisation breaks"
 *  6 pitfall chip: F must stay linear (Hooke) / pendulum small angle
 *  7 pitfall chip: no damping, single frequency / two freqs ≠ SHM
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52 script
 *  b0 | "F = −k x" cx540 bl112 (box ~502..578,99..120)
 *  b1 | arrow 540,129→540,147 · "F = m a" cx540 bl184 (box ~510..570,171..189)
 *  b2 | card x140..440 y215..375 rx16 · photo c(185,250) r20 · tag "SHM ID" x400 bl240 anchor-end ·
 *      "a = −ω² x" cx290 bl310 size22 · "ω² = k/m" cx290 bl345 size14
 *  b3 | x-axis y310 x620..940 → · y-axis x760 y365..225 ↑ · line 660,255→860,365 ·
 *      dot(660,255) dot(860,365) r5 · "a" cx760 bl210 · "x" cx955 bl319
 *  b4 | check 373,415→380,421→388,407 · note anchor-start x400 bl418 (box 400..~730,398..426)
 *  b5 | divider y440 x300..780 · heading cx540 bl472 script (box ~424..656,454..479)
 *  b6 | left chip x90..520 y490..562 rx14 · L1 bl512 · L2 bl542 (both cx305)
 *  b7 | right chip x560..990 y490..562 rx14 · L1 bl512 · L2 bl542 (both cx775)
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
  arrowD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch13Sec2({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "The kinematic signature: a = −ω²x",
            "SHM ka kinematic signature: a = −ω²x"
          )}
        </T>
      </Fade>

      {/* beat 0 — recall F = -kx */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={112} size={17} fill={INK}>
          F = −k x
        </T>
      </Fade>

      {/* beat 1 — turn it into an acceleration law */}
      <Draw on={beat >= 1} delay={dl(1, 0.3)} d={arrowD(540, 129, 540, 147)} stroke={INK} sw={1.8} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={540} y={184} size={17} fill={INK}>
          F = m a
        </T>
      </Fade>

      {/* beat 2 — the ID card */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <Draw
          on={beat >= 2}
          delay={dl(2, 0.3)}
          d="M 156 215 h 268 q 16 0 16 16 v 128 q 0 16 -16 16 h -268 q -16 0 -16 -16 v -128 q 0 -16 16 -16"
          stroke={AMBER_DARK}
          sw={2.4}
          dur={0.8}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.3)}>
        <Draw
          on={beat >= 2}
          delay={dl(2, 1.3)}
          d="M 185 230 A 20 20 0 1 1 184.9 230"
          stroke={INK}
          sw={1.6}
          dur={0.5}
          fill="#FFFEFB"
        />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.9)}>
        <T x={400} y={240} size={11} fill={MUTED} anchor="end">
          SHM · ID
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.3)}>
        <T x={290} y={310} size={22} fill={INK} weight={800}>
          a = −ω² x
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.9)}>
        <T x={290} y={345} size={14} fill={AMBER_DARK}>
          ω² = k / m
        </T>
      </Fade>

      {/* beat 3 — a vs x is a straight line of negative slope */}
      <Draw on={beat >= 3} delay={dl(3, 0.3)} d={arrowD(620, 310, 940, 310)} stroke={INK} sw={1.8} dur={0.4} />
      <Draw on={beat >= 3} delay={dl(3, 0.8)} d={arrowD(760, 365, 760, 225)} stroke={INK} sw={1.8} dur={0.4} />
      <Draw on={beat >= 3} delay={dl(3, 1.3)} d="M 660 255 L 860 365" stroke={RED} sw={2.4} dur={0.6} />
      <Fade on={beat >= 3} delay={dl(3, 2.0)}>
        <Circle cx={660} cy={255} r={5} fill={RED} />
        <Circle cx={860} cy={365} r={5} fill={RED} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.4)}>
        <T x={760} y={210} size={13} fill={INK}>
          a
        </T>
        <T x={955} y={319} size={13} fill={INK}>
          x
        </T>
      </Fade>

      {/* beat 4 — the generalisation, checked off */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.4)}
        d="M 373 415 L 380 421 L 388 407"
        stroke={GREEN}
        sw={2.2}
        dur={0.3}
      />
      <Fade on={beat >= 4} delay={dl(4, 0.9)}>
        <T x={400} y={418} size={15} fill={RED} script anchor="start">
          {t("any motion, any disguise ⇒ still SHM", "chahe koi bhi disguise ho, phir bhi SHM")}
        </T>
      </Fade>

      {/* beat 5 — the turn toward pitfalls */}
      <Draw on={beat >= 5} delay={dl(5, 0.3)} d="M 300 440 L 780 440" stroke={MUTED} sw={1.8} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 1.0)}>
        <T x={540} y={472} size={14} fill={AMBER_DARK} script>
          {t("where the idealisation breaks", "idealisation kahan toot-ti hai")}
        </T>
      </Fade>

      {/* beat 6 — pitfall: linearity and small angle */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Draw
          on={beat >= 6}
          delay={dl(6, 0.3)}
          d="M 104 490 h 402 q 14 0 14 14 v 44 q 0 14 -14 14 h -402 q -14 0 -14 -14 v -44 q 0 -14 14 -14"
          stroke={RED}
          sw={2.2}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.1)}>
        <T x={305} y={512} size={13} fill={INK}>
          {t("F must stay linear — Hooke region only", "F linear rehna chahiye — sirf Hooke region")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={305} y={542} size={13} fill={INK}>
          {t("pendulum: SHM only for small θ (sinθ≈θ)", "pendulum: SHM sirf chhote θ ke liye (sinθ≈θ)")}
        </T>
      </Fade>

      {/* beat 7 — pitfall: damping and single frequency */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Draw
          on={beat >= 7}
          delay={dl(7, 0.3)}
          d="M 574 490 h 402 q 14 0 14 14 v 44 q 0 14 -14 14 h -402 q -14 0 -14 -14 v -44 q 0 -14 14 -14"
          stroke={RED}
          sw={2.2}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.1)}>
        <T x={775} y={512} size={13} fill={INK}>
          {t("no damping, single frequency only", "no damping, sirf ek hi frequency")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={775} y={542} size={13} fill={INK}>
          {t("two frequencies ⇒ periodic, not SHM", "do frequencies ⇒ periodic, SHM nahi")}
        </T>
      </Fade>
    </Scene>
  );
}
