/**
 * Ch07 · Section 50 — "Newton's cannon: an orbit is perpetual free fall"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 1, 2, 3, 13.24, 19.13, 33.29, 39.86]):
 *  0 title + hill + cannon
 *  1 gentle shot: short arc lands nearby
 *  2 harder shot: longer arc lands farther
 *  3 hardest: curve wraps almost all the way, Earth curves away caption
 *  4 close the loop into an orbit ring
 *  5 amber: not escaping, not balancing — free fall
 *  6 chip row: Moon / ISS / comms relay
 *  7 green margin: this ONE picture is the whole subtopic
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  Earth c(300,430) r160 (top y270) · cannon tip (300,268)
 *  arc1 M300 268 Q340 285 330 340 (gentle, lands near) · label st x345 bl300
 *  arc2 M300 268 Q420 300 460 420 (harder) · label st x470 bl360
 *  arc3 M300 268 Q560 250 610 430 Q580 560 300 590 (wraps almost full circle)
 *  orbit ring (dashed) c(300,430) r160+30=190 for beat4, or close arc3 into full ellipse
 *  b5 | line cx780 bl200 (right column, clear of diagram)
 *  b6 | chips x700..1000 y240..320 stacked
 *  b7 | bar x66 y540..586 line bl562
 */

import React from "react";
import { Circle } from 'react-native-svg';
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
  AMBER_DARK,
  GREEN,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch07Sec50({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the mountain and the cannon */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "Fire it hard enough and it never lands",
            "Itna zor se fire karo ki wo kabhi gire hi na"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 1)}
        d="M 140 268 A 160 160 0 1 1 460 268"
        stroke={INK}
        sw={2.4}
        dur={0.9}
        fill={CREAM}
      />
      <Fade on={beat >= 0} delay={dl(0, 2)}>
        <Circle cx={300} cy={268} r={6} fill={INK} />
      </Fade>

      {/* beat 1 — gentle shot */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.8)}
        d="M 300 268 Q 340 285 330 340"
        stroke={MUTED}
        sw={2}
        dur={0.6}
      />
      <Fade on={beat >= 1} delay={dl(1, 1.6)}>
        <T x={345} y={300} size={11} fill={MUTED} anchor="start" weight={700}>
          {t("gentle", "dheema")}
        </T>
      </Fade>

      {/* beat 2 — harder shot */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 0.8)}
        d="M 300 268 Q 420 300 460 420"
        stroke={AMBER_DARK}
        sw={2}
        dur={0.7}
      />
      <Fade on={beat >= 2} delay={dl(2, 1.8)}>
        <T x={468} y={365} size={11} fill={AMBER_DARK} anchor="start" weight={700}>
          {t("harder", "zyada zor")}
        </T>
      </Fade>

      {/* beat 3 — hardest: the Earth curves away just as fast */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 0.8)}
        d="M 300 268 Q 560 250 610 430 Q 590 570 300 590"
        stroke={GREEN}
        sw={2.4}
        dur={1.2}
      />
      <Fade on={beat >= 3} delay={dl(3, 2.5)}>
        <T x={300} y={30 + 590} size={11} fill={GREEN} weight={700}>
          {" "}
        </T>
      </Fade>

      {/* beat 4 — the loop closes: an orbit */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.6)}
        d="M 300 590 Q 130 570 140 430 Q 130 300 300 268"
        stroke={GREEN}
        sw={2.4}
        dur={1}
      />
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <T x={300} y={230} size={13} fill={GREEN} script>
          {t(
            "falls forever, never lands — an ORBIT",
            "hamesha girta hai, kabhi girta nahi — ek ORBIT"
          )}
        </T>
      </Fade>

      {/* beat 5 — not escaping, not balancing */}
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={780} y={200} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "not escaping gravity, not balancing it —",
            "gravity se escape nahi, balance bhi nahi —"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 3.5)}>
        <T x={780} y={226} size={14} fill={AMBER_DARK} script anchor="start" weight={700}>
          {t("PERPETUAL FREE FALL", "PERPETUAL FREE FALL")}
        </T>
      </Fade>

      {/* beat 6 — real examples */}
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <Chip x={780} y={250} w={220} h={30} fill={CREAM} stroke={INK} textFill={INK} size={12}>
          Moon
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.1)}>
        <Chip x={780} y={288} w={220} h={30} fill={CREAM} stroke={INK} textFill={INK} size={12}>
          {t("Space Station", "Space Station")}
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.7)}>
        <Chip x={780} y={326} w={220} h={30} fill={CREAM} stroke={INK} textFill={INK} size={12}>
          {t("comms relay", "comms relay")}
        </Chip>
      </Fade>

      {/* beat 7 — the one image */}
      <Draw on={beat >= 7} delay={dl(7, 0.5)} d="M 660 540 v 46" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={678} y={562} size={13} fill={GREEN} script anchor="start">
          {t(
            "hold this ONE image — everything else is just this, made precise",
            "yehi EK tasveer yaad rakho — baaki sab isi ka precise version hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
