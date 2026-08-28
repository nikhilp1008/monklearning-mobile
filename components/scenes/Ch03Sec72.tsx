/**
 * Ch03 · Section 72 — "JEE Advanced: net acceleration in non-uniform motion"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 16.7, 29.4, 42.3, 52.7, 66.0, 77.4, 85.9]):
 *  0 heading + problem
 *  1 recognise: speed changing → NON-uniform → TWO components
 *  2 a_radial = v²/r = 8 m/s² inward (diagram)
 *  3 a_tangential = dv/dt = 3 m/s² along motion (diagram)
 *  4 perpendicular fact + right-angle mark
 *  5 Pythagorean sum, not arithmetic
 *  6 = √73 ≈ 8.54 m/s² (resultant + green box)
 *  7 ANSWER + structure note: radial dominates
 *
 * Layout plan (Kalam bl −1.3s..+0.5s · Anek bl −0.78s..+0.31s):
 *  b1 | st x84 bl 112 s13
 *  b2 | circle C(200,340) r100 · P(200,240) · a_r (200,240)→(200,300) green
 *       lbl end (182,272) · st x460 bl 112 s14
 *  b3 | a_t (200,240)→(260,240) amber lbl cx230 bl 222 · st x460 bl 150 s14
 *  b4 | right-angle M212 240 v12 h-12 · st x460 bl 188 s12
 *  b5 | st x460 bl 226 s12
 *  b6 | completion lines (200,300)→(260,300) / (260,240)→(260,300) muted ·
 *       resultant (200,240)→(260,300) ink · lbl st (272,306) ·
 *       box x460..820 y248..294 text cx640 bl 280 s16
 *  b7 | box x460..900 y318..364 text cx680 bl 350 s15 · green st x460 bl 406 / 430 s12
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

export default function Ch03Sec72({ currentTime, reveals, language }: SceneProps) {
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
            "JEE ADVANCED — holding two accelerations at once",
            "JEE ADVANCED — ek saath do accelerations sambhalna"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.2)} d="M 340 62 h 400" stroke={AMBER} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 6)}>
        <T x={540} y={84} size={12} fill={MUTED} script>
          {t(
            "r = 2 m, v = 4 m/s, increasing at 3 m/s² — find the total acceleration",
            "r = 2 m, v = 4 m/s, 3 m/s² se badh rahi hai — total acceleration nikaalo"
          )}
        </T>
      </Fade>

      {/* beat 1 — recognise the situation */}
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={84} y={112} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "speed changing → NON-uniform → TWO components",
            "speed badal rahi → NON-uniform → DO components"
          )}
        </T>
      </Fade>

      {/* beat 2 — the radial acceleration */}
      <Draw on={beat >= 2} delay={dl(2, 0.5)} d="M 300 340 A 100 100 0 1 1 299.9 340" stroke={INK_LIGHT} sw={1.6} dur={1} />
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <Circle cx={200} cy={240} r={4} fill={INK} />
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 2.2)} d={arrowD(200, 240, 200, 300)} stroke={GREEN} sw={2.8} dur={0.6} />
      <Fade on={beat >= 2} delay={dl(2, 3)}>
        <T x={182} y={272} size={12} fill={GREEN} weight={700} anchor="end">
          a_r = 8
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 4)}>
        <T x={460} y={112} size={14} fill={INK} weight={700} anchor="start">
          a_radial = v² ⁄ r = 16 ⁄ 2 = 8 m/s²
        </T>
      </Fade>

      {/* beat 3 — the tangential acceleration */}
      <Draw on={beat >= 3} delay={dl(3, 0.6)} d={arrowD(200, 240, 260, 240)} stroke={AMBER_DARK} sw={2.8} dur={0.6} />
      <Fade on={beat >= 3} delay={dl(3, 1.4)}>
        <T x={230} y={222} size={12} fill={AMBER_DARK} weight={700}>
          a_t = 3
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.4)}>
        <T x={460} y={150} size={14} fill={INK} weight={700} anchor="start">
          a_tangential = dv ⁄ dt = 3 m/s²
        </T>
      </Fade>

      {/* beat 4 — perpendicular */}
      <Draw on={beat >= 4} delay={dl(4, 0.8)} d="M 212 240 v 12 h -12" stroke={MUTED} sw={1.6} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 1.6)}>
        <T x={460} y={188} size={12} fill={INK} script anchor="start">
          {t(
            "radius ⊥ tangent → the two accelerations are at right angles",
            "radius ⊥ tangent → dono accelerations right angle par hain"
          )}
        </T>
      </Fade>

      {/* beat 5 — Pythagorean, not arithmetic */}
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={460} y={226} size={12} fill={AMBER_DARK} script anchor="start">
          {t(
            "so it's the Pythagorean sum — NOT the arithmetic sum",
            "isliye Pythagorean sum — arithmetic sum NAHI"
          )}
        </T>
      </Fade>

      {/* beat 6 — the resultant */}
      <Draw on={beat >= 6} delay={dl(6, 0.6)} d="M 200 300 H 260 M 260 240 V 300" stroke={MUTED} sw={1.3} dur={0.6} />
      <Draw on={beat >= 6} delay={dl(6, 1.4)} d={arrowD(200, 240, 260, 300)} stroke={INK} sw={3} dur={0.8} />
      <Fade on={beat >= 6} delay={dl(6, 2.4)}>
        <T x={272} y={306} size={12} fill={INK} weight={800} anchor="start">
          a_net
        </T>
      </Fade>
      <Draw
        on={beat >= 6}
        delay={dl(6, 3.2)}
        d="M 472 248 h 336 q 12 0 12 12 v 22 q 0 12 -12 12 h -336 q -12 0 -12 -12 v -22 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.4}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 6} delay={dl(6, 4.2)}>
        <T x={640} y={280} size={16} fill={INK} weight={800}>
          √(64+9) = √73 ≈ 8.54 m/s²
        </T>
      </Fade>

      {/* beat 7 — the answer and the structure */}
      <Draw
        on={beat >= 7}
        delay={dl(7, 0.6)}
        d="M 472 318 h 416 q 12 0 12 12 v 22 q 0 12 -12 12 h -416 q -12 0 -12 -12 v -22 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.4}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={680} y={350} size={15} fill={INK} weight={800}>
          {t("total ≈ 8.54 m/s²", "kul ≈ 8.54 m/s²")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 6)}>
        <T x={460} y={406} size={12} fill={GREEN} script anchor="start">
          {t(
            "the radial part (8) dominates the total",
            "radial hissa (8) hi kul par haavi hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 10)}>
        <T x={460} y={430} size={12} fill={INK} script anchor="start">
          {t(
            "the tangential part (3) only tilts it slightly",
            "tangential hissa (3) sirf thoda jhukata hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
