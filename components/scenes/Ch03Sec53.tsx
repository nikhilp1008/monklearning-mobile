/**
 * Ch03 · Section 53 — "Whose motion? Velocity always depends on the observer"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 14.7, 26.7, 36.2, 48.7, 61.8, 73.8, 86.2]):
 *  0 heading
 *  1 train story: both are right
 *  2 velocity is never absolute
 *  3 definition: vector difference
 *  4 geometric subtraction (diagram intro)
 *  5 head-to-head arrow diagram
 *  6 formula box + physical reading
 *  7 swap flips: v_BA = −v_AB
 *
 * Layout plan (Kalam bl −1.3s..+0.5s · Anek bl −0.78s..+0.31s):
 *  b1 | line cx540 bl 84 s13
 *  b2 | line cx540 bl 112 s13 · underline M300 122 h480
 *  b3 | line st x84 bl 156 s13
 *  b4 | line st x84 bl 184 s12
 *  b5 | O(180,440) dot · vA →(430,300) lbl st (440,296) · vB →(360,440)
 *       lbl cx270 bl 464 · vAB head-to-head (360,440)→(430,300) green lbl st (412,384) ·
 *       caption cx300 bl 500 s11
 *  b6 | box x600..1010 y270..318 text cx805 bl 302 s16 · caption st x600 bl 348 s12
 *  b7 | bar M586 390 v52 · lines st x600 bl 408 / 432 s12
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
  INK_LIGHT,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch03Sec53({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — heading */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={48} size={20} fill={INK} script>
          {t(
            "There is no such thing as ABSOLUTE velocity",
            "ABSOLUTE velocity naam ki koi cheez nahi"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.2)} d="M 340 62 h 400" stroke={AMBER} sw={2.2} dur={0.6} />

      {/* beat 1 — the train story */}
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={540} y={84} size={13} fill={INK} script>
          {t(
            "on the train your co-passenger sits still — from the platform, both of you race past",
            "train mein bagal wala sathi bilkul sthir — platform se dekho, dono tez bhaag rahe ho"
          )}
        </T>
      </Fade>

      {/* beat 2 — both are right */}
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={540} y={112} size={13} fill={AMBER_DARK} script>
          {t(
            "BOTH are right — velocity is always measured relative to a frame of reference",
            "DONO sahi hain — velocity hamesha kisi frame of reference ke sapeksh naapi jaati hai"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 2.2)} d="M 300 122 h 480" stroke={AMBER} sw={1.8} dur={0.6} />

      {/* beat 3 — the definition */}
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={84} y={156} size={13} fill={INK} script anchor="start">
          {t(
            "velocity of A with respect to B = the VECTOR difference of their velocities",
            "A ki B ke sapeksh velocity = dono velocities ka VECTOR antar"
          )}
        </T>
      </Fade>

      {/* beat 4 — geometric, not arithmetic */}
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={84} y={184} size={12} fill={INK_LIGHT} script anchor="start">
          {t(
            "vectors subtract geometrically: draw both from one point, join the heads",
            "vectors geometric tarike se ghat-te hain: ek point se kheencho, heads ko jodo"
          )}
        </T>
      </Fade>

      {/* beat 5 — the picture */}
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <Circle cx={180} cy={440} r={4.5} fill={INK} />
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 1.2)} d={arrowD(180, 440, 430, 300)} stroke={INK} sw={2.8} dur={0.7} />
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <T x={440} y={296} size={14} fill={INK} weight={700} anchor="start">vA</T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 2.8)} d={arrowD(180, 440, 360, 440)} stroke={AMBER_DARK} sw={2.8} dur={0.6} />
      <Fade on={beat >= 5} delay={dl(5, 3.6)}>
        <T x={270} y={464} size={14} fill={AMBER_DARK} weight={700}>vB</T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 4.6)} d={arrowD(360, 440, 430, 300)} stroke={GREEN} sw={3} dur={0.7} />
      <Fade on={beat >= 5} delay={dl(5, 5.4)}>
        <T x={412} y={384} size={14} fill={GREEN} weight={800} anchor="start">vAB</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 8)}>
        <T x={300} y={500} size={11} fill={GREEN} script>
          {t(
            "from B's head to A's head — exactly the subtraction",
            "B ke head se A ke head tak — bilkul wahi subtraction"
          )}
        </T>
      </Fade>

      {/* beat 6 — the formula */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.6)}
        d="M 612 270 h 386 q 12 0 12 12 v 24 q 0 12 -12 12 h -386 q -12 0 -12 -12 v -24 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.4}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={805} y={302} size={16} fill={INK} weight={800}>
          v(AB) = vA − vB
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 7)}>
        <T x={600} y={348} size={12} fill={INK} script anchor="start">
          {t(
            "it answers: how does A move, as seen by someone riding with B?",
            "yeh batata hai: B ke saath baithe insaan ko A kaise chalta dikhta hai?"
          )}
        </T>
      </Fade>

      {/* beat 7 — the swap flips */}
      <Draw on={beat >= 7} delay={dl(7, 0.8)} d="M 586 390 v 52" stroke={AMBER_DARK} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={600} y={408} size={12} fill={AMBER_DARK} script anchor="start">
          {t(
            "swap the order and the arrow flips: v(BA) = − v(AB)",
            "order palto to arrow palat jata hai: v(BA) = − v(AB)"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 7)}>
        <T x={600} y={432} size={12} fill={INK} script anchor="start">
          {t("same length, opposite direction", "wahi lambai, ulti disha")}
        </T>
      </Fade>
    </Scene>
  );
}
