/**
 * Ch01 · Section 57 — "Example 2 [NEET trap]: counting under time pressure"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 16.1, 23, 47.8, 66.3, 71.9, 84.3, 98.7]):
 *  0 title · hero 0.002030 kg · options A3 B4 C6 D7
 *  1 clock — 90 s a question
 *  2 panic paths: labels + arrows to C and D · both flavours line
 *  3 leading zeros dim to muted · scaffolding bracket + label
 *  4 the 2 turns green · count ① above
 *  5 sandwiched 0 green · ②
 *  6 the 3 green ③ · final 0 green ④
 *  7 answer B ringed · sci-notation check box · one-second-check line
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s; sans-44 digit ≈26.6, dot ≈11):
 *  number bl 150 spans st: 330 / 356.6(.) / 368 / 394.6 / 421.2 / 447.8 / 474.4 / 501 · kg st x545
 *  counts | circles cy 96 r11 at cx 434/461/487/514
 *  b3 | bracket x330..420 y168..176 · label cx375 bl 196
 *  options | chips y240..280 w150 at x150/350/550/750 · panic labels bl 312 cx625/825 · red line mid bl 340
 *  b7 | ring c(425,260) rx90 ry28 · answer script 18 mid bl 380 · box x200..880 y400..500 (lines bl 440/475) · amber bl 530
 */

import React from "react";
import { G } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  Chip,
  T,
  arrowD,
  ringD,
  INK,
  INK_LIGHT,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch01Sec57({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const scaff = beat >= 3 ? MUTED : INK;
  const digits: [number, string, string][] = [
    [330, "0", scaff],
    [356.6, ".", scaff],
    [368, "0", scaff],
    [394.6, "0", scaff],
    [421.2, "2", beat >= 4 ? GREEN : INK],
    [447.8, "0", beat >= 5 ? GREEN : INK],
    [474.4, "3", beat >= 6 ? GREEN : INK],
    [501, "0", beat >= 6 ? GREEN : INK],
  ];

  const countMark = (n: number, cx: number, k: number, delay: number) => (
    <G>
      <Draw
        on={beat >= k}
        delay={dl(k, delay)}
        d={`M ${cx - 11} 96 A 11 11 0 1 1 ${cx + 11} 96 A 11 11 0 1 1 ${cx - 11} 96`}
        stroke={GREEN}
        sw={1.8}
        dur={0.4}
      />
      <Fade on={beat >= k} delay={dl(k, delay + 0.4)}>
        <T x={cx} y={100.5} size={12} fill={GREEN} weight={800}>{n}</T>
      </Fade>
    </G>
  );

  return (
    <Scene>
      {/* beat 0 — question + options */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={24} fill={INK} script>
          {t("NEET speed trap — how many sig figs?", "NEET speed trap — kitne sig figs?")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 2)}>
        {digits.map(([x, d], i) => (
          <T key={i} x={x} y={150} size={44} fill={digits[i][2]} weight={700} anchor="start">
            {d}
          </T>
        ))}
        <T x={545} y={150} size={20} fill={INK_LIGHT} anchor="start">kg</T>
      </Fade>
      {(["A · 3", "B · 4", "C · 6", "D · 7"] as const).map((o, i) => (
        <Fade key={o} on={beat >= 0} delay={dl(0, 8 + i * 1.5)}>
          <Chip
            x={150 + i * 200}
            y={240}
            w={150}
            h={40}
            fill={CREAM}
            stroke={INK_LIGHT}
            textFill={INK}
            size={17}
            script={false}
          >
            {o}
          </Chip>
        </Fade>
      ))}

      {/* beat 1 — the clock */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 1)}
        d="M 924 115 A 26 26 0 1 1 976 115 A 26 26 0 1 1 924 115 M 950 115 L 950 97 M 950 115 L 964 121"
        stroke={RED}
        sw={2.2}
        dur={0.9}
      />
      <Fade on={beat >= 1} delay={dl(1, 3)}>
        <T x={950} y={168} size={13} fill={RED} script>
          {t("90 s / question", "90 s / sawaal")}
        </T>
      </Fade>

      {/* beat 2 — the panic paths */}
      <Fade on={beat >= 2} delay={dl(2, 3)}>
        <T x={825} y={312} size={13} fill={RED} script>
          {t("count all seven", "saaton gin lo")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 4)} d={arrowD(825, 296, 825, 285)} stroke={RED} sw={1.8} dur={0.3} />
      <Fade on={beat >= 2} delay={dl(2, 10)}>
        <T x={625} y={312} size={13} fill={RED} script>
          {t("skip one zero → six", "ek zero chhodo → chhe")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 11)} d={arrowD(625, 296, 625, 285)} stroke={RED} sw={1.8} dur={0.3} />
      <Fade on={beat >= 2} delay={dl(2, 17)}>
        <T x={540} y={340} size={14} fill={RED} script>
          {t(
            "the examiner laid out both flavours of the mistake",
            "examiner ne galti ke dono swaad saja rakhe hain"
          )}
        </T>
      </Fade>

      {/* beat 3 — scaffolding */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 2)}
        d="M 330 168 q 2 8 10 8 h 70 q 8 0 10 -8"
        stroke={RED}
        sw={2}
        dur={0.5}
      />
      <Fade on={beat >= 3} delay={dl(3, 4)}>
        <T x={375} y={196} size={13} fill={RED} script>
          {t("scaffolding — only place the decimal", "scaffolding — sirf decimal ki jagah")}
        </T>
      </Fade>

      {/* beats 4–6 — counting */}
      {countMark(1, 434, 4, 1)}
      {countMark(2, 461, 5, 1)}
      {countMark(3, 487, 6, 1)}
      {countMark(4, 514, 6, 5)}

      {/* beat 7 — answer + the one-second check */}
      <Draw
        on={beat >= 7}
        delay={dl(7, 1)}
        d={ringD(425, 260, 90, 28)}
        stroke={GREEN}
        sw={2.6}
        dur={0.7}
      />
      <Fade on={beat >= 7} delay={dl(7, 3)}>
        <T x={540} y={380} size={18} fill={GREEN} script>
          {t("answer: B — 4 significant figures", "answer: B — 4 significant figures")}
        </T>
      </Fade>
      <Draw
        on={beat >= 7}
        delay={dl(7, 8)}
        d="M 212 400 h 656 q 12 0 12 12 v 76 q 0 12 -12 12 h -656 q -12 0 -12 -12 v -76 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.2}
        dur={0.8}
      />
      <Fade on={beat >= 7} delay={dl(7, 10)}>
        <T x={540} y={440} size={20} fill={INK} weight={700}>= 2.030 × 10⁻³ kg</T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 14)}>
        <T x={540} y={475} size={14} fill={GREEN} script>
          {t(
            "mantissa 2.030 → four digits — nothing left to miscount",
            "mantissa 2.030 → chaar digits — galat ginne ko kuchh bacha hi nahi"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 19)}>
        <T x={540} y={530} size={13} fill={AMBER_DARK} script>
          {t(
            "the one-second check that saves you every time",
            "ek second ka check jo har baar bachata hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
