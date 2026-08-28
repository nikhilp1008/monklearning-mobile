/**
 * Ch07 · Section 54 — "Orbital velocity: gravity as the centripetal force"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 8.36, 20.31, 21.31, 22.31, 23.31, 24.31, 25.31]):
 *  0 title
 *  1 diagram: planet, orbit dot, inward force arrow = centripetal
 *  2 amber: pull bends, doesn't fight, the motion
 *  3 setup equation
 *  4 green box: vo = √(GM/r)
 *  5 red: satellite mass cancels — bolt = station
 *  6 amber: smaller r → higher speed
 *  7 green margin: near surface, vo = √(gR) ≈ 7.9 km/s
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  planet c(220,300) r70 · orbit ring r150 dashed · sat dot (370,300) ·
 *   inward arrow (355,300)→(295,300) · tangent v arrow (370,285)→(370,240) ·
 *   caption cx220 bl460
 *  right col x480: b2 line bl150 · b3 line bl195 ·
 *  b4 green box x480..760 y225..277(bl257)
 *  b5 bar x460 y300..352 lines bl320/346
 *  b6 line st x480 bl390
 *  b7 bar x66 y430..482 lines bl450/476
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

export default function Ch07Sec54({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the speed that keeps a circle */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "The speed that keeps a satellite in a circle",
            "Satellite ko circle mein rakhne wali speed"
          )}
        </T>
      </Fade>

      {/* beat 1 — gravity IS the centripetal force */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.6)}
        d="M 150 300 A 70 70 0 1 1 149.9 300"
        stroke={INK}
        sw={2.4}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <Circle
          cx={220}
          cy={300}
          r={150}
          fill="none"
          stroke={MUTED}
          strokeWidth={1.6}
          strokeDasharray="6 7"
        />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.2)}>
        <Circle cx={370} cy={300} r={6} fill={INK} />
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 3)}
        d={arrowD(357, 300, 297, 300)}
        stroke={RED}
        sw={2.4}
        dur={0.4}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 3.8)}
        d={arrowD(370, 288, 370, 235)}
        stroke={GREEN}
        sw={2}
        dur={0.4}
      />
      <Fade on={beat >= 1} delay={dl(1, 4.6)}>
        <T x={390} y={230} size={11} fill={GREEN} anchor="start" weight={700}>
          v(o)
        </T>
      </Fade>

      {/* beat 2 — bends, doesn't fight */}
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={480} y={150} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "the pull doesn't fight the motion — it BENDS it into a circle",
            "pull motion se ladta nahi — usse circle mein MODTA hai"
          )}
        </T>
      </Fade>

      {/* beat 3 — set gravity = centripetal */}
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={480} y={195} size={16} fill={INK} anchor="start" weight={700}>
          GMm ⁄ r² = m·v(o)² ⁄ r
        </T>
      </Fade>

      {/* beat 4 — the result */}
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <Draw
          on={beat >= 4}
          delay={dl(4, 0.5)}
          d="M 492 225 h 256 q 12 0 12 12 v 28 q 0 12 -12 12 h -256 q -12 0 -12 -12 v -28 q 0 -12 12 -12"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.2)}>
        <T x={620} y={257} size={18} fill={INK} weight={800}>
          v(o) = √(GM ⁄ r)
        </T>
      </Fade>

      {/* beat 5 — mass cancels */}
      <Draw on={beat >= 5} delay={dl(5, 0.5)} d="M 460 300 v 52" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        <T x={478} y={320} size={13} fill={RED} script anchor="start">
          {t(
            "the satellite's MASS cancels",
            "satellite ka MASS cancel ho jaata hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 4)}>
        <T x={478} y={346} size={13} fill={RED} script anchor="start">
          {t(
            "a bolt and a station: same height, same speed",
            "ek bolt aur ek station: same height, same speed"
          )}
        </T>
      </Fade>

      {/* beat 6 — smaller r, faster */}
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={480} y={390} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "v(o) ∝ 1⁄√r — closer in, faster you go",
            "v(o) ∝ 1⁄√r — jitna andar, utni tezi"
          )}
        </T>
      </Fade>

      {/* beat 7 — near the surface */}
      <Draw on={beat >= 7} delay={dl(7, 0.5)} d="M 66 430 v 52" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={84} y={450} size={13} fill={GREEN} script anchor="start">
          {t(
            "near the surface: v(o) = √(gR) ≈ 7.9 km/s",
            "surface ke paas: v(o) = √(gR) ≈ 7.9 km/s"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
