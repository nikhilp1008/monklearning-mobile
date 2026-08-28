/**
 * Ch08 · Section 54 — "Thermal stress in a clamped rod"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * Note: en beats 1..6 are all ~1s apart — short delays throughout.
 *
 * Beats (en [0, 7.59, 8.59, 9.59, 10.59, 11.59, 12.59]):
 *  0 title only
 *  1 diagram: rod clamped between two walls, pushing outward
 *  2 text: free rod heated: ΔL=LαΔT — a thermal strain αΔT
 *  3 text: clamp both ends: walls supply equal & opposite strain αΔT
 *  4 boxed hero: σ=Yε=YαΔT, F=σA=YAαΔT
 *  5 red margin: no L term — short and long rod, same thermal stress
 *  6 text: why rails have gaps, bridges sit on rollers, pipelines have loops
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title (script 19, red, ALWAYS ON) cx540 bl64
 *  b1 | walls+hatch          | Fade/Draw | x150..872 y150..230
 *  b1 | rod                  | Fade | x172..850 y175..205
 *  b1 | outward arrows       | Draw | x175..190 · x830..847
 *  b1 | caption (11)         | T mid| x540 bl250
 *  b2 | tick/text (12)       | T st | x80..380 bl280
 *  b3 | tick/text (12)       | T st | x80..428 bl305
 *  b4 | hero box             | Draw | x60..400 y330..400
 *  b4 | formula (18)         | T st | x80..296 bl368
 *  b5 | margin bar           | Draw | x60 y420..448
 *  b5 | note (13)            | T st | x76..~455 bl438
 *  b6 | tick/text (12)       | T st | x80..536 bl475
 */

import React from "react";
import { Rect } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  arrowD,
  INK,
  AMBER,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch08Sec54({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={64} size={19} fill={RED} script>
          {t("heat as a hidden force: thermal stress", "heat ek chhupa force: thermal stress")}
        </T>
      </Fade>

      {/* beat 1 — a rod clamped between two walls */}
      <Fade on={beat >= 1} delay={dl(1, 0.1)}>
        <Rect x={150} y={150} width={22} height={80} fill={INK} />
        <Rect x={850} y={150} width={22} height={80} fill={INK} />
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.4)} d="M150 158 l-8 -8 M150 178 l-8 -8 M150 198 l-8 -8 M150 218 l-8 -8" stroke={INK} sw={1.2} dur={0.3} />
      <Draw on={beat >= 1} delay={dl(1, 0.5)} d="M872 158 l8 -8 M872 178 l8 -8 M872 198 l8 -8 M872 218 l8 -8" stroke={INK} sw={1.2} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <Rect x={172} y={175} width={678} height={30} fill={AMBER} fillOpacity={0.4} stroke={INK} strokeWidth={1.4} />
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.2)} d={arrowD(195, 190, 178, 190)} stroke={RED} sw={2.2} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 1.5)} d={arrowD(827, 190, 844, 190)} stroke={RED} sw={2.2} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 1.9)}>
        <T x={540} y={250} size={11} fill={INK}>
          {t("a clamped rod wants to expand but cannot, so it pushes on its supports", "clamped rod expand chahti par nahi kar sakti, to supports par push karti")}
        </T>
      </Fade>

      {/* beat 2 — the free rod's thermal strain */}
      <Draw on={beat >= 2} delay={dl(2, 0.1)} d="M65 276 h8" stroke={INK} sw={1.4} dur={0.2} />
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={80} y={280} size={12} fill={INK} weight={600} anchor="start">
          {t("free rod heated: ΔL=LαΔT — a thermal strain αΔT", "free rod garam: ΔL=LαΔT — thermal strain αΔT")}
        </T>
      </Fade>

      {/* beat 3 — clamp both ends */}
      <Draw on={beat >= 3} delay={dl(3, 0.1)} d="M65 301 h8" stroke={INK} sw={1.4} dur={0.2} />
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={80} y={305} size={12} fill={INK} weight={600} anchor="start">
          {t("clamp both ends: walls supply equal & opposite strain αΔT", "dono sire clamp: walls equal & opposite strain αΔT dete")}
        </T>
      </Fade>

      {/* beat 4 — the boxed thermal stress and force */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.2)}
        d="M72 330 h328 q12 0 12 12 v46 q0 12 -12 12 h-328 q-12 0 -12 -12 v-46 q0 -12 12 -12"
        stroke={AMBER}
        sw={2.6}
        dur={0.5}
      />
      <Fade on={beat >= 4} delay={dl(4, 0.7)}>
        <T x={80} y={368} size={18} fill={INK} weight={800} anchor="start">
          σ=Yε=YαΔT, F=σA=YAαΔT
        </T>
      </Fade>

      {/* beat 5 — no length term */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M60 420 L60 448" stroke={RED} sw={3.4} dur={0.3} />
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={76} y={438} size={13} fill={RED} script anchor="start">
          {t("no L term — short and long rod, same thermal stress", "koi L term nahi — short aur long rod, same thermal stress")}
        </T>
      </Fade>

      {/* beat 6 — the engineering fixes */}
      <Draw on={beat >= 6} delay={dl(6, 0.1)} d="M65 471 h8" stroke={INK} sw={1.4} dur={0.2} />
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={80} y={475} size={12} fill={INK} weight={600} anchor="start">
          {t("why rails have gaps, bridges sit on rollers, pipelines have loops", "isliye rails mein gaps, bridges rollers par, pipelines mein loops")}
        </T>
      </Fade>
    </Scene>
  );
}
