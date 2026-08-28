/**
 * Ch03 · Section 69 — "Board-level: acceleration and force on a whirling stone"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 13.4, 27.3, 39.7, 52.5, 61.4, 74.9, 86.5]):
 *  0 heading + problem
 *  1 diagram: stone on string, path circle, tension pointing to centre
 *  2 ω = 2πf = 4π rad/s
 *  3 v = ωr ≈ 12.6 m/s
 *  4 a_c = ω²r ≈ 158 m/s² (~16g)
 *  5 T = m a_c ≈ 79 N
 *  6 ANSWER box
 *  7 conceptual point: tension IS the centripetal force
 *
 * Layout plan (Kalam bl −1.3s..+0.5s · Anek bl −0.78s..+0.31s):
 *  b1 | path circle C(200,340) r120 · stone(200,220) · string C→stone ·
 *       T arrow (200,220)→(200,262) lbl st (212,244) · caption st (336,340) — beside circle
 *  b2 | st x560 bl 112 s14
 *  b3 | st x560 bl 150 s14
 *  b4 | st x560 bl 188 s14 · caption st x560 bl 212 s11
 *  b5 | st x560 bl 252 s14
 *  b6 | box x560..1010 y276..322 text cx785 bl 308 s15
 *  b7 | bar M66 500 v56 · lines st x84 bl 518 / 542 s12
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

export default function Ch03Sec69({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the question */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={48} size={20} fill={INK} script>
          {t(
            "CBSE BOARD LEVEL — a whirling stone",
            "CBSE BOARD LEVEL — ghoomta hua patthar"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.2)} d="M 340 62 h 400" stroke={AMBER} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 6)}>
        <T x={540} y={84} size={12} fill={MUTED} script>
          {t(
            "0.5 kg stone on a 1 m string, 2 rev/s — find v, a_c, and the tension",
            "0.5 kg patthar, 1 m dhaage par, 2 rev/s — v, a_c, aur tension nikaalo"
          )}
        </T>
      </Fade>

      {/* beat 1 — the diagram */}
      <Draw on={beat >= 1} delay={dl(1, 0.5)} d="M 320 340 A 120 120 0 1 1 319.9 340" stroke={INK_LIGHT} sw={1.6} dur={1} />
      <Fade on={beat >= 1} delay={dl(1, 1.6)}>
        <Circle cx={200} cy={340} r={3.5} fill={INK} />
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2.2)} d="M 200 340 V 220" stroke={INK} sw={2} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 3)}>
        <Circle cx={200} cy={220} r={6} fill={AMBER_DARK} />
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 3.6)} d={arrowD(200, 220, 200, 262)} stroke={GREEN} sw={2.8} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 4.4)}>
        <T x={212} y={244} size={13} fill={GREEN} weight={800} anchor="start">T</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 6)}>
        <T x={336} y={340} size={11} fill={GREEN} script anchor="start">
          {t(
            "T pulls the stone inward",
            "T patthar ko andar kheenchta hai"
          )}
        </T>
      </Fade>

      {/* beat 2 — angular velocity */}
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={560} y={112} size={14} fill={INK} weight={700} anchor="start">
          ω = 2πf = 2π(2) = 4π rad/s
        </T>
      </Fade>

      {/* beat 3 — the speed */}
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={560} y={150} size={14} fill={INK} weight={700} anchor="start">
          v = ω r = 4π(1) ≈ 12.6 m/s
        </T>
      </Fade>

      {/* beat 4 — centripetal acceleration */}
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={560} y={188} size={14} fill={INK} weight={700} anchor="start">
          a_c = ω² r = (4π)²(1) ≈ 158 m/s²
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 6)}>
        <T x={560} y={212} size={11} fill={AMBER_DARK} script anchor="start">
          {t(
            "roughly 16 × g — circular motion adds up fast",
            "lagbhag 16 × g — circular motion tezi se badhta hai"
          )}
        </T>
      </Fade>

      {/* beat 5 — the tension */}
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={560} y={252} size={14} fill={INK} weight={700} anchor="start">
          T = m a_c = 0.5 × 158 ≈ 79 N
        </T>
      </Fade>

      {/* beat 6 — the answers */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.6)}
        d="M 572 276 h 426 q 12 0 12 12 v 22 q 0 12 -12 12 h -426 q -12 0 -12 -12 v -22 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.4}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={785} y={308} size={15} fill={INK} weight={800}>
          v ≈ 12.6 m/s · a_c ≈ 158 m/s² · T ≈ 79 N
        </T>
      </Fade>

      {/* beat 7 — the conceptual point */}
      <Draw on={beat >= 7} delay={dl(7, 0.8)} d="M 66 500 v 56" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={84} y={518} size={12} fill={GREEN} script anchor="start">
          {t(
            "that 79 N IS the centripetal force — the one real force pointing inward",
            "wahi 79 N CENTRIPETAL force HAI — ek asli force jo andar khinchta hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 7)}>
        <T x={84} y={542} size={12} fill={INK} script anchor="start">
          {t(
            "centripetal force is always some real force, wearing that name",
            "centripetal force hamesha koi asli force hota hai, bas naam alag"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
