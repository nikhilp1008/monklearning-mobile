/**
 * Ch02 · Section 36 — "Galileo's law of odd numbers"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 14.4, 32.4, 48.5, 65.5, 87.2, 100.4, 125.2]):
 *  0 title + water-clock line
 *  1 the question: how far during EACH second?
 *  2 formula card: s_nth = (a/2)(2n−1)
 *  3 the sequence line: 1 3 5 7 — odd numbers
 *  4 bars picture: 1, 3, 5, 7 units stacking
 *  5 green chip: 1 : 3 : 5 : 7 on sight
 *  6 red note: nth second ≠ n seconds (1,4,9 waiting)
 *  7 green: interval vs running total
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 sub cx540 bl 86 · b1 line cx540 bl 122
 *  b2 card x80..470 y150..215 (formula bl 188) · b3 line cx760 bl 188
 *  bars: baseline y440 · x 180/320/460/600 w 90 · heights 24/72/120/168 ·
 *  values bl 408/360/312/264 · labels bl 462
 *  b5 chip x700..1020 y280..316
 *  b6 | bar x66 y480..532 · lines st x84 bl 500 / 526
 *  b7 | bar x56 y548..594 · lines st x72 bl 566 / 590
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
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

const BARS = [
  { x: 180, h: 24, v: "1" },
  { x: 320, h: 72, v: "3" },
  { x: 460, h: 120, v: "5" },
  { x: 600, h: 168, v: "7" },
];

export default function Ch02Sec36({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const secLabels = [
    t("1st s", "1st s"),
    t("2nd s", "2nd s"),
    t("3rd s", "3rd s"),
    t("4th s", "4th s"),
  ];

  return (
    <Scene>
      {/* beat 0 — four centuries old */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={54} size={23} fill={INK} script>
          {t("Galileo's law of odd numbers", "Galileo ka odd-numbers ka niyam")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 6)}>
        <T x={540} y={86} size={12} fill={MUTED} script>
          {t(
            "measured with an inclined plane and a water clock — four centuries ago",
            "dhalvaan patta aur paani ki ghadi se naapa — chaar sadi pehle"
          )}
        </T>
      </Fade>

      {/* beat 1 — the question */}
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <T x={540} y={122} size={13} fill={AMBER_DARK} script>
          {t(
            "not 'how far in total' — how far during EACH successive second?",
            "'kul kitna' nahi — HAR agle second mein kitna chala?"
          )}
        </T>
      </Fade>

      {/* beat 2 — the formula */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 0.8)}
        d="M 92 150 h 366 q 12 0 12 12 v 41 q 0 12 -12 12 h -366 q -12 0 -12 -12 v -41 q 0 -12 12 -12"
        stroke={AMBER}
        sw={2.4}
        dur={0.7}
      />
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <T x={275} y={188} size={16} fill={INK} weight={700}>
          {t("s (nth second) = (a⁄2)(2n − 1)", "s (nth second) = (a⁄2)(2n − 1)")}
        </T>
      </Fade>

      {/* beat 3 — the odd numbers appear */}
      <Fade on={beat >= 3} delay={dl(3, 2)}>
        <T x={760} y={188} size={14} fill={INK} weight={700}>
          {t(
            "n: 1 2 3 4 → 2n−1: 1 3 5 7 — the odd numbers",
            "n: 1 2 3 4 → 2n−1: 1 3 5 7 — odd numbers"
          )}
        </T>
      </Fade>

      {/* beat 4 — the stacking bars */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.6)}
        d="M 140 440 H 740"
        stroke={INK}
        sw={2.2}
        dur={0.6}
      />
      {BARS.map((b, i) => (
        <G key={i}>
          <Draw
            on={beat >= 4}
            delay={dl(4, 1.4 + i * 1.6)}
            d={`M ${b.x} 440 v -${b.h} h 90 v ${b.h}`}
            stroke={AMBER_DARK}
            sw={2.2}
            dur={0.6}
          />
          <Fade on={beat >= 4} delay={dl(4, 2.2 + i * 1.6)}>
            <T x={b.x + 45} y={440 - b.h - 8} size={15} fill={AMBER_DARK} weight={800}>
              {b.v}
            </T>
          </Fade>
          <Fade on={beat >= 4} delay={dl(4, 2.6 + i * 1.6)}>
            <T x={b.x + 45} y={462} size={11} fill={MUTED} script>
              {secLabels[i]}
            </T>
          </Fade>
        </G>
      ))}

      {/* beat 5 — on sight */}
      <Fade on={beat >= 5} delay={dl(5, 1.5)}>
        <Chip x={700} y={280} w={330} h={36} fill={CREAM} stroke={GREEN} textFill={GREEN} size={13}>
          {t("1 : 3 : 5 : 7 — know it on sight", "1 : 3 : 5 : 7 — dekhte hi pehchano")}
        </Chip>
      </Fade>

      {/* beat 6 — the most common error */}
      <Draw on={beat >= 6} delay={dl(6, 0.8)} d="M 66 480 v 52" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={84} y={500} size={14} fill={RED} script anchor="start">
          {t(
            "nth second ≠ n seconds — the running totals go as n²: 1, 4, 9",
            "nth second ≠ n seconds — kul jod n² se badhta hai: 1, 4, 9"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 9)}>
        <T x={84} y={526} size={14} fill={RED} script anchor="start">
          {t(
            "and 1:4:9 will sit right next to 1:3:5 in the options, waiting",
            "aur options mein 1:4:9 theek 1:3:5 ke bagal mein baitha milega"
          )}
        </T>
      </Fade>

      {/* beat 7 — hold it by meaning */}
      <Draw on={beat >= 7} delay={dl(7, 0.8)} d="M 56 548 v 46" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={72} y={566} size={13} fill={GREEN} script anchor="start">
          {t(
            "nth second = an INTERVAL (that second alone) · n seconds = a RUNNING TOTAL",
            "nth second = ek ANTRAAL (sirf wahi second) · n seconds = ab tak ka KUL"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 8)}>
        <T x={72} y={590} size={13} fill={GREEN} script anchor="start">
          {t(
            "read which one the exam actually asked — then reach for a ratio",
            "pehle padho exam ne kaunsa poochha — ratio baad mein uthao"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
