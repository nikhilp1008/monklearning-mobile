/**
 * Ch01 · Section 77 — "Parallax: you already use it, without knowing"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 8.8, 25.3, 44.2, 60, 75.7, 86.2, 110.9]):
 *  0 title · thumb at arm's length
 *  1 inset: two eyes, thumb, far wall, crossing sight lines, × marks
 *  2 main figure: the thin triangle A–B baseline, apex O
 *  3 definition: the thumb didn't move — YOU did
 *  4 closer = bigger jump (three rows, shrinking arrows)
 *  5 turn it around: measure the jump ⇒ distance
 *  6 label b, θ, D + the machine chip
 *  7 observatories / six months apart — basis = 2 AU
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | thumb sketch c(140,110)
 *  b1 | inset x600..1030 y80..210: eyes (640,120)/(640,170) · thumb (780,145) · wall x1000 · × at (1000,100)/(1000,190)
 *  b2 | triangle A(220,330) B(220,430) O(920,380)
 *  b3 | script 14 mid bl 250
 *  b4 | rows st x120 bl 500/524/548 + arrows at x360
 *  b5 | green 14 cx700 bl 510
 *  b6 | b label (198,385) · θ (870,385) · D dashed + label (560,368) · chip x600..840 y440..476
 *  b7 | script 13 mid bl 578
 */

import React from "react";
import { Line } from 'react-native-svg';
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

export default function Ch01Sec77({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — thumb up */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={50} size={24} fill={INK} script>
          {t(
            "parallax — you already use it, without knowing",
            "parallax — tum ise pehle se istemal karte ho, bina jaane"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 4)}
        d="M 120 110 a 22 22 0 1 0 44 0 a 22 22 0 1 0 -44 0 M 138 90 v -26 q 0 -6 6 -6 q 6 0 6 6 v 26"
        stroke={AMBER_DARK}
        sw={2}
        dur={0.9}
      />
      <Fade on={beat >= 0} delay={dl(0, 5.5)}>
        <T x={142} y={160} size={12} fill={MUTED} script>
          {t("thumb, arm's length", "angootha, baanh bhar door")}
        </T>
      </Fade>

      {/* beat 1 — the inset */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 1)}
        d="M 636 120 a 5 5 0 1 0 10 0 a 5 5 0 1 0 -10 0 M 636 170 a 5 5 0 1 0 10 0 a 5 5 0 1 0 -10 0 M 776 145 a 5 5 0 1 0 10 0 a 5 5 0 1 0 -10 0"
        stroke={INK}
        sw={1.8}
        dur={0.7}
      />
      <Fade on={beat >= 1} delay={dl(1, 1.8)}>
        <T x={622} y={125} size={11} fill={INK_LIGHT}>L</T>
        <T x={622} y={175} size={11} fill={INK_LIGHT}>R</T>
        <T x={800} y={150} size={11} fill={MUTED} script anchor="start">
          {t("thumb", "angootha")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 3.5)} d="M 1000 85 v 120" stroke={INK} sw={2.2} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 4)}>
        <T x={985} y={78} size={11} fill={MUTED} script>
          {t("far wall", "door ki deewaar")}
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 5.5)}
        d="M 646 120 L 996 190 M 646 170 L 996 100"
        stroke={AMBER_DARK}
        sw={1.4}
        dur={1}
      />
      <Fade on={beat >= 1} delay={dl(1, 7)}>
        <T x={1014} y={105} size={13} fill={RED} weight={700} anchor="start">×</T>
        <T x={1014} y={195} size={13} fill={RED} weight={700} anchor="start">×</T>
      </Fade>

      {/* beat 2 — the astronomer's triangle */}
      <Draw on={beat >= 2} delay={dl(2, 2)} d="M 220 330 v 100" stroke={INK} sw={3} dur={0.6} />
      <Draw
        on={beat >= 2}
        delay={dl(2, 3)}
        d="M 220 330 L 920 380 M 220 430 L 920 380"
        stroke={INK_LIGHT}
        sw={1.8}
        dur={1.2}
      />
      <Fade on={beat >= 2} delay={dl(2, 4.5)}>
        <T x={200} y={335} size={14} fill={INK} weight={700}>A</T>
        <T x={200} y={440} size={14} fill={INK} weight={700}>B</T>
        <T x={942} y={385} size={14} fill={INK} weight={700}>O</T>
      </Fade>

      {/* beat 3 — the definition */}
      <Fade on={beat >= 3} delay={dl(3, 3)}>
        <T x={540} y={250} size={14} fill={INK} script>
          {t(
            "parallax = the shift when seen from two places — the thumb didn't move, YOU did",
            "parallax = do jagah se dekhne par khisakav — angootha nahi hila, TUM hile"
          )}
        </T>
      </Fade>

      {/* beat 4 — closer = bigger jump */}
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={120} y={500} size={13} fill={INK} script anchor="start">
          {t("near the nose → wild swing", "naak ke paas → zor ka jhoola")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 2)} d="M 370 495 h 80 M 370 495 l 7 -4 M 370 495 l 7 4 M 450 495 l -7 -4 M 450 495 l -7 4" stroke={AMBER_DARK} sw={2} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 5)}>
        <T x={120} y={524} size={13} fill={INK} script anchor="start">
          {t("arm's length → smaller", "baanh bhar → chhota")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 6)} d="M 370 519 h 36 M 370 519 l 6 -3 M 370 519 l 6 3 M 406 519 l -6 -3 M 406 519 l -6 3" stroke={AMBER_DARK} sw={2} dur={0.3} />
      <Fade on={beat >= 4} delay={dl(4, 9)}>
        <T x={120} y={548} size={13} fill={INK} script anchor="start">
          {t("a mountain → no jump at all", "pahaad → koi uchhaal hi nahi")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 10)} d="M 385 543 a 3 3 0 1 0 6 0 a 3 3 0 1 0 -6 0" stroke={AMBER_DARK} sw={2} dur={0.2} />

      {/* beat 5 — the machine */}
      <Fade on={beat >= 5} delay={dl(5, 3)}>
        <T x={700} y={510} size={14} fill={GREEN} script>
          {t(
            "turn it around: measure the jump ⇒ compute the distance",
            "ise ulto: uchhaal naapo ⇒ doori nikaalo"
          )}
        </T>
      </Fade>

      {/* beat 6 — b, θ, D */}
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={196} y={386} size={15} fill={AMBER_DARK} weight={700}>b</T>
      </Fade>
      <Draw
        on={beat >= 6}
        delay={dl(6, 4)}
        d="M 860 376 a 20 20 0 0 1 0 9"
        stroke={AMBER_DARK}
        sw={1.8}
        dur={0.4}
      />
      <Fade on={beat >= 6} delay={dl(6, 4.6)}>
        <T x={842} y={386} size={13} fill={AMBER_DARK} weight={700}>θ</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 7)}>
        <Line x1={228} y1={380} x2={912} y2={380} stroke={MUTED} strokeWidth={1.2} strokeDasharray="6 5" />
        <T x={560} y={370} size={13} fill={MUTED} weight={600}>D</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 12)}>
        <Chip x={600} y={440} w={260} h={34} fill={CREAM} stroke={AMBER} textFill={AMBER_DARK} size={14}>
          {t("a baseline + an angle → D", "ek aadhaar + ek kon → D")}
        </Chip>
      </Fade>

      {/* beat 7 — the eyes get bigger */}
      <Fade on={beat >= 7} delay={dl(7, 4)}>
        <T x={540} y={578} size={13} fill={AMBER_DARK} script>
          {t(
            "Moon: two observatories · a star: the same telescope six months apart — basis = 2 AU, Earth's whole orbit",
            "chaand: do vedhshaalayein · taara: wahi doorbeen chhe mahine baad — basis = 2 AU, poori kaksha"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
