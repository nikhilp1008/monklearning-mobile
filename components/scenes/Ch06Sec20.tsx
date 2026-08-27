/**
 * Ch06 · Section 20 — "Worked example: find the vector X [JEE Advanced]"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 1, 14.74, 24.3, 36.58, 49.81, 65.26, 76.18] — b0 is 1 s):
 *  0 title + given subline (instant)
 *  1 figure: v = 2i+3j arrow, dashed X⊥ arrow with "X = ?", right-angle mark
 *  2 let X = xi + yj
 *  3 eq (i) dot → 2x + 3y = 0 + direction tag
 *  4 eq (ii) cross → 3x − 2y = 6 + length tag
 *  5 solve lines
 *  6 green result box X = (18/13)i − (12/13)j
 *  7 division-of-labour chips
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | title script21 cx540 bl 52 · sub script12 cx540 bl 92
 *  b1 | v (220,300)→(300,180) "2i + 3j" st(306,172) · X dashed (220,300)→(320,367),
 *       "X = ?" st(328,375) · right-angle M227.7,288.4 L239.3,296.1 L231.6,307.7
 *  b2 | sans16 st x460 bl 150 · script12 st x460 bl 178
 *  b3 | sans16 st x460 bl 230 · script11 st x470 bl 256
 *  b4 | sans16 st x460 bl 305 · script11 st x470 bl 331
 *  b5 | sans16 st x460 bl 385
 *  b6 | green box x460..900 y410..475 · cx680 bl 448
 *  b7 | chipA x120 y510 w300 h38 · chipB x460 y510 w360 h38
 */

import React from "react";
import { Path } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  Chip,
  T,
  arrowD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  GREEN_DARK,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch06Sec20({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the twist */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t("find the vector X [JEE Advanced]", "vector X dhoondo [JEE Advanced]")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 0.6)}>
        <T x={540} y={92} size={12} fill={MUTED} script>
          {t(
            "X in the xy-plane · X × (2i+3j) = 6k · X · (2i+3j) = 0",
            "X xy-plane mein · X × (2i+3j) = 6k · X · (2i+3j) = 0"
          )}
        </T>
      </Fade>

      {/* beat 1 — the logic in a picture */}
      <Draw on={beat >= 1} delay={dl(1, 1)} d={arrowD(220, 300, 300, 180)} stroke={INK} sw={2.8} dur={0.7} />
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <T x={306} y={172} size={15} fill={INK} anchor="start" weight={700}>
          2i + 3j
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.5)}>
        <Path
          d={arrowD(220, 300, 320, 367)}
          fill="none"
          stroke={AMBER}
          strokeWidth={2.6}
          strokeDasharray="7 6"
        />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 4.5)}>
        <T x={328} y={375} size={15} fill={AMBER_DARK} anchor="start" weight={700}>
          X = ?
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 6)}
        d="M 227.7 288.4 L 239.3 296.1 L 231.6 307.7"
        stroke={INK}
        sw={1.8}
        dur={0.4}
      />

      {/* beat 2 — name the unknown */}
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={460} y={150} size={16} fill={INK} anchor="start" weight={700}>
          {t("let X = x i + y j", "maan lo X = x i + y j")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 4)}>
        <T x={460} y={178} size={12} fill={MUTED} script anchor="start">
          {t(
            "2 conditions → 2 simultaneous equations",
            "2 conditions → 2 simultaneous equations"
          )}
        </T>
      </Fade>

      {/* beat 3 — the dot equation */}
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <T x={460} y={230} size={16} fill={INK} anchor="start" weight={700}>
          (i)  dot = 0 :   2x + 3y = 0
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 6)}>
        <T x={470} y={256} size={11} fill={AMBER_DARK} script anchor="start">
          {t("forces ⊥ — fixes the direction", "⊥ par majboor — direction fix")}
        </T>
      </Fade>

      {/* beat 4 — the cross equation */}
      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <T x={460} y={305} size={16} fill={INK} anchor="start" weight={700}>
          (ii)  cross = 6k :   3x − 2y = 6
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 6)}>
        <T x={470} y={331} size={11} fill={AMBER_DARK} script anchor="start">
          {t("fixes the length + sense", "length + sense fix karta hai")}
        </T>
      </Fade>

      {/* beat 5 — solve together */}
      <Fade on={beat >= 5} delay={dl(5, 1.5)}>
        <T x={460} y={385} size={16} fill={INK} anchor="start" weight={700}>
          x = −3y/2  ⇒  −(13/2)y = 6  ⇒  y = −12/13
        </T>
      </Fade>

      {/* beat 6 — the vector lands */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.8)}
        d="M 472 410 h 416 q 12 0 12 12 v 41 q 0 12 -12 12 h -416 q -12 0 -12 -12 v -41 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.6}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={680} y={448} size={19} fill={INK} weight={700}>
          X = (18/13) i − (12/13) j
        </T>
      </Fade>

      {/* beat 7 — the division of labour */}
      <Fade on={beat >= 7} delay={dl(7, 1.5)}>
        <Chip x={120} y={510} w={300} h={38} fill={CREAM} stroke={AMBER} textFill={AMBER_DARK} size={14}>
          {t("DOT → direction (⊥)", "DOT → direction (⊥)")}
        </Chip>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 4.5)}>
        <Chip x={460} y={510} w={360} h={38} fill={CREAM} stroke={GREEN} textFill={GREEN_DARK} size={14}>
          {t("CROSS → magnitude + sense", "CROSS → magnitude + sense")}
        </Chip>
      </Fade>
    </Scene>
  );
}
