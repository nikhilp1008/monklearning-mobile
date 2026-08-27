/**
 * Ch01 · Section 32 — "Three flavours of error — and the cure for each"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 13.1, 23.6, 42.2, 67.1, 82.6, 107.4, 123.5]):
 *  0 title + underline
 *  1 the skeleton: three columns + a bottom strip
 *  2 systematic: the scale that reads 20 g empty
 *  3 col-1 arrows all one way → cure: calibrate
 *  4 random: the jittery ones
 *  5 col-2 scatter around the truth → cure: average many readings
 *  6 gross: blunders — no formula, stay alert
 *  7 the least-count strip: resolution → cure: a finer instrument
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | title (script 28, red) mid bl 62 · underline y88
 *  b1 | col frames x60..380 / 400..700 / 720..1020, y150..420 · strip x60..1020 y440..520
 *  b2/4/6 | headers (script 15) bl 180 · stories (sans 13) two lines bl 210/234
 *  b3 | arrows (140,280)→(240,280) ×3 rows y280/305/330 · cure (script 13, green) bl 395
 *  b5 | true-line x550 y260..345 (dashed) · scatter dots ×6 · cure bl 395
 *  b7 | strip: label x80 st bl 468 · def x330 st bl 468 · ladder (sans 14) x80 st bl 502 ·
 *       cure x720 st bl 502
 */

import React from "react";
import { Circle, Path } from 'react-native-svg';
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
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch01Sec32({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const frame = (x: number) =>
    `M ${x + 12} 150 h 296 q 12 0 12 12 v 246 q 0 12 -12 12 h -296 q -12 0 -12 -12 v -246 q 0 -12 12 -12`;

  return (
    <Scene>
      {/* beat 0 — three flavours */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={62} size={28} fill={RED} script>
          {t("three flavours — three different cures", "teen kism ke error — teen alag ilaaj")}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 3)}
        d="M 330 88 C 460 84, 620 91, 750 87"
        stroke={RED}
        sw={2.4}
        dur={0.6}
      />

      {/* beat 1 — the skeleton */}
      <Draw on={beat >= 1} delay={dl(1, 0.5)} d={frame(60)} stroke={MUTED} sw={1.8} dur={0.7} />
      <Draw on={beat >= 1} delay={dl(1, 1.5)} d={frame(400)} stroke={MUTED} sw={1.8} dur={0.7} />
      <Draw on={beat >= 1} delay={dl(1, 2.5)} d={frame(720)} stroke={MUTED} sw={1.8} dur={0.7} />
      <Draw
        on={beat >= 1}
        delay={dl(1, 4)}
        d="M 72 440 h 936 q 12 0 12 12 v 56 q 0 12 -12 12 h -936 q -12 0 -12 -12 v -56 q 0 -12 12 -12"
        stroke={AMBER}
        sw={1.8}
        dur={0.8}
      />

      {/* beat 2 — systematic */}
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={220} y={180} size={15} fill={RED} script>
          1 · SYSTEMATIC
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 4)}>
        <T x={220} y={210} size={13} fill={INK} weight={600}>
          {t("empty scale already reads 20 g", "khaali scale par hi 20 g dikhta")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 8)}>
        <T x={220} y={234} size={13} fill={INK} weight={600}>
          {t("→ every reading +20 · every time", "→ har reading +20 · har baar")}
        </T>
      </Fade>

      {/* beat 3 — one-directional arrows, and the cure */}
      {[280, 305, 330].map((y, i) => (
        <Draw
          key={y}
          on={beat >= 3}
          delay={dl(3, 1 + i)}
          d={arrowD(140, y, 250, y)}
          stroke={RED}
          sw={2.6}
          dur={0.4}
        />
      ))}
      <Fade on={beat >= 3} delay={dl(3, 5)}>
        <T x={300} y={310} size={13} fill={MUTED} script>
          {t("same sign,", "same disha,")}
        </T>
        <T x={300} y={332} size={13} fill={MUTED} script>
          {t("every time", "har baar")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 14)}>
        <T x={220} y={395} size={13} fill={GREEN} script>
          {t("cure: calibrate · remove the bias", "ilaaj: calibrate · bias hatao")}
        </T>
      </Fade>

      {/* beat 4 — random */}
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={550} y={180} size={15} fill={AMBER_DARK} script>
          2 · RANDOM
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 4)}>
        <T x={550} y={210} size={13} fill={INK} weight={600}>
          {t("thumb on the stopwatch, tiny", "stopwatch par thumb, chhoti")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 8)}>
        <T x={550} y={234} size={13} fill={INK} weight={600}>
          {t("fluctuations — no fixed pattern", "fluctuations — koi pattern nahi")}
        </T>
      </Fade>

      {/* beat 5 — scatter, and the averaging cure */}
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <Path
          d="M 550 258 V 348"
          fill="none"
          stroke={MUTED}
          strokeWidth={1.4}
          strokeDasharray="5 5"
        />
        <T x={550} y={368} size={11} fill={MUTED} script>
          {t("true value", "asli value")}
        </T>
      </Fade>
      {[
        [516, 272],
        [578, 286],
        [532, 300],
        [568, 314],
        [524, 328],
        [560, 341],
      ].map(([cx, cy], i) => (
        <Fade key={`${cx}-${cy}`} on={beat >= 5} delay={dl(5, 2.5 + i * 0.6)}>
          <Circle cx={cx} cy={cy} r={3.5} fill={AMBER_DARK} />
        </Fade>
      ))}
      <Fade on={beat >= 5} delay={dl(5, 15)}>
        <T x={550} y={395} size={13} fill={GREEN} script>
          {t("cure: many readings → average", "ilaaj: bahut readings → average")}
        </T>
      </Fade>

      {/* beat 6 — gross */}
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={870} y={180} size={15} fill={RED} script>
          3 · GROSS
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 4)}>
        <T x={870} y={210} size={13} fill={INK} weight={600}>
          {t("23 read as 32 · units dropped", "23 ko 32 padha · unit bhool gaye")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 8)}>
        <T x={870} y={234} size={13} fill={INK} weight={600}>
          {t("no formula for carelessness", "laaparwahi ka koi formula nahi")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 12)}>
        <T x={870} y={395} size={13} fill={GREEN} script>
          {t("cure: stay alert", "ilaaj: chaukanna raho")}
        </T>
      </Fade>

      {/* beat 7 — the least-count strip */}
      <Fade on={beat >= 7} delay={dl(7, 1)}>
        <T x={80} y={468} size={14} fill={AMBER_DARK} script anchor="start">
          LEAST-COUNT ERROR
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 4)}>
        <T x={330} y={468} size={13} fill={MUTED} script anchor="start">
          {t(
            "the finest step your instrument can resolve — every single reading carries it",
            "instrument ka sabse chhota step — har ek reading mein rahega"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 10)}>
        <T x={80} y={502} size={14} fill={INK} weight={600} anchor="start">
          {t("scale 1 mm  →  vernier 0.1 mm  →  screw gauge 0.01 mm", "scale 1 mm  →  vernier 0.1 mm  →  screw gauge 0.01 mm")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 18)}>
        <T x={720} y={502} size={13} fill={GREEN} script anchor="start">
          {t("cure: a FINER instrument", "ilaaj: aur BAARIK instrument")}
        </T>
      </Fade>
    </Scene>
  );
}
