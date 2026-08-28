/**
 * Ch07 · Section 56 — "The energy of a satellite: K, U, and E"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 8.53, 17.41, 29.44, 37.46, 50.01, 63.32, 77.48]):
 *  0 title
 *  1 energy-level diagram: K bar up, U bar down (2x), E line halfway
 *  2 K = GMm/2r
 *  3 U = −GMm/r
 *  4 green box: E = −GMm/2r
 *  5 red: K = −E, U = 2E, bound orbit
 *  6 amber: higher orbit → E toward zero, less bound
 *  7 green margin: binding energy = −E, ve = √2·vo
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  axis M100 60 V300 · zero line M80 180 H260 ·
 *   K bar (rect x120 y100 w40 h80 up from zero) · U bar (rect x180 y180 w40 h160 down, 2x) ·
 *   E line M80 260 H260 dashed, halfway between 0 and U-bottom
 *  right col x480: b2 line bl150 · b3 line bl195 ·
 *  b4 green box x480..820 y225..277(bl257)
 *  b5 bar x460 y300..352 lines bl320/346
 *  b6 line st x480 bl400
 *  b7 bar x66 y440..492 lines bl460/486
 */

import React from "react";
import { Path, Rect } from 'react-native-svg';
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

export default function Ch07Sec56({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the bookkeeping */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "A satellite's energy: K, U, and E",
            "Satellite ki energy: K, U, aur E"
          )}
        </T>
      </Fade>

      {/* beat 1 — the energy diagram */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.5)}
        d={arrowD(100, 320, 100, 90)}
        stroke={INK}
        sw={1.8}
        dur={0.5}
      />
      <Fade on={beat >= 1} delay={dl(1, 1.1)}>
        <Path d="M 80 200 H 260" stroke={MUTED} strokeWidth={1.4} fill="none" />
        <T x={68} y={204} size={10} fill={MUTED} weight={700}>
          0
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.7)}>
        <Rect x={120} y={140} width={40} height={60} fill={GREEN} opacity={0.6} />
        <T x={140} y={130} size={11} fill={GREEN} weight={700}>
          K
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.4)}>
        <Rect x={180} y={200} width={40} height={120} fill={RED} opacity={0.5} />
        <T x={200} y={335} size={11} fill={RED} weight={700}>
          U
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.1)}>
        <Path d="M 80 260 H 260" stroke={INK} strokeWidth={2} strokeDasharray="5 5" fill="none" />
        <T x={270} y={264} size={11} fill={INK} anchor="start" weight={700}>
          E
        </T>
      </Fade>

      {/* beat 2 — kinetic energy */}
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={480} y={150} size={15} fill={INK} anchor="start" weight={700}>
          K = ½mv(o)² = GMm ⁄ 2r
        </T>
      </Fade>

      {/* beat 3 — potential energy */}
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={480} y={195} size={15} fill={INK} anchor="start" weight={700}>
          U = −GMm ⁄ r
        </T>
      </Fade>

      {/* beat 4 — total energy */}
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <Draw
          on={beat >= 4}
          delay={dl(4, 0.5)}
          d="M 492 225 h 340 q 12 0 12 12 v 28 q 0 12 -12 12 h -340 q -12 0 -12 -12 v -28 q 0 -12 12 -12"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.2)}>
        <T x={662} y={257} size={17} fill={INK} weight={800}>
          E = K+U = −GMm ⁄ 2r
        </T>
      </Fade>

      {/* beat 5 — the three readouts */}
      <Draw on={beat >= 5} delay={dl(5, 0.5)} d="M 460 300 v 52" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        <T x={478} y={320} size={13} fill={RED} script anchor="start">
          {t(
            "K = −E · U = 2E — E negative → BOUND orbit",
            "K = −E · U = 2E — E negative → BOUND orbit"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 4)}>
        <T x={478} y={346} size={13} fill={RED} script anchor="start">
          {t(
            "read three things off one number",
            "ek number se teen cheezein padho"
          )}
        </T>
      </Fade>

      {/* beat 6 — higher orbit, closer to zero */}
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={480} y={400} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "bigger r → E → 0: higher orbit, less bound, but slower",
            "bada r → E → 0: higher orbit, kam bound, par dheema"
          )}
        </T>
      </Fade>

      {/* beat 7 — binding energy and the root-two link */}
      <Draw on={beat >= 7} delay={dl(7, 0.5)} d="M 66 440 v 52" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={84} y={460} size={13} fill={GREEN} script anchor="start">
          {t(
            "binding energy = −E = GMm ⁄ 2r",
            "binding energy = −E = GMm ⁄ 2r"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 4)}>
        <T x={84} y={486} size={13} fill={GREEN} script anchor="start">
          {t(
            "v(e) = √2·v(o) — about 41% more",
            "v(e) = √2·v(o) — lagbhag 41% zyada"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
