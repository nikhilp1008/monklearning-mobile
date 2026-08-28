/**
 * Ch07 · Section 61 — "Worked example: a tangential burn makes an ellipse (JEE Advanced)"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 1, 2, 12.33, 22.74, 36.3, 47.31, 59, 69.75]):
 *  0 title + problem
 *  1 diagram: circular orbit r0, burn point → perigee, ellipse toward apogee
 *  2 speeds: v0 = √(GM/r0), boosted v = √(3/2)·v0
 *  3 red note: bound between v0 and ve — an ellipse
 *  4 angular momentum: va = v·r0/ra
 *  5 energy conservation setup
 *  6 quadratic factored
 *  7 green box: ra = 3r0
 *  8 red margin: 22% boost triples the distance
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  circle c(200,300) r90 dashed (r0) · burn dot (290,300) "perigee" ·
 *   ellipse arc M290 300 Q 420 200 480 300 Q420 400 290 300 (toward apogee) ·
 *   apogee dot (480,300) · caption cx290 bl430
 *  right col x560: b2 line bl150 · b3 bar x540 y170..222 lines bl190/216 ·
 *  b4 line bl260 · b5 line bl300 · b6 line bl340
 *  b7 green box x560..900 y365..417(bl397)
 *  b8 bar x66 y460..512 lines bl480/506
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
  INK,
  MUTED,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch07Sec61({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the boost problem */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "Example [JEE Advanced] — a burn makes an ellipse",
            "Example [JEE Advanced] — burn se ellipse"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 8)}>
        <T x={540} y={84} size={12} fill={MUTED} script>
          {t(
            "circular orbit r₀, boost to √(3/2)·v₀ tangentially — find max distance",
            "circular orbit r₀, √(3/2)·v₀ tak boost — max distance nikaalo"
          )}
        </T>
      </Fade>

      {/* beat 1 — perigee to apogee */}
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <Circle
          cx={290}
          cy={300}
          r={90}
          fill="none"
          stroke={MUTED}
          strokeWidth={1.6}
          strokeDasharray="6 7"
        />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.4)}>
        <Circle cx={200} cy={300} r={10} fill={INK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <Circle cx={290} cy={300} r={5} fill={GREEN} />
        <T x={290} y={325} size={11} fill={GREEN} weight={700}>
          {t("perigee", "perigee")}
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 2.6)}
        d="M 290 300 Q 400 210 480 300 Q 400 390 290 300"
        stroke={GREEN}
        sw={2.4}
        dur={0.9}
      />
      <Fade on={beat >= 1} delay={dl(1, 3.6)}>
        <Circle cx={480} cy={300} r={5} fill={RED} />
        <T x={480} y={325} size={11} fill={RED} weight={700}>
          {t("apogee?", "apogee?")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 4.4)}>
        <T x={290} y={430} size={11} fill={INK} script>
          {t("r₀ = burn radius", "r₀ = burn radius")}
        </T>
      </Fade>

      {/* beat 2 — the speeds */}
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={560} y={150} size={14} fill={INK} anchor="start" weight={700}>
          v₀ = √(GM⁄r₀) ,  v = √(3⁄2)·v₀
        </T>
      </Fade>

      {/* beat 3 — bound, an ellipse */}
      <Draw on={beat >= 3} delay={dl(3, 0.5)} d="M 540 170 v 52" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 1.2)}>
        <T x={558} y={190} size={12} fill={RED} script anchor="start">
          {t(
            "v₀ < v < √2·v₀ (escape) → still BOUND",
            "v₀ < v < √2·v₀ (escape) → abhi bhi BOUND"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 4)}>
        <T x={558} y={216} size={12} fill={RED} script anchor="start">
          {t("→ an ELLIPSE", "→ ek ELLIPSE")}
        </T>
      </Fade>

      {/* beat 4 — angular momentum */}
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={560} y={260} size={14} fill={INK} anchor="start" weight={700}>
          m·v·r₀ = m·v(a)·r(a) → v(a) = v·r₀⁄r(a)
        </T>
      </Fade>

      {/* beat 5 — energy conservation */}
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={560} y={300} size={13} fill={INK} anchor="start" weight={700}>
          ½v² − GM⁄r₀ = ½v(a)² − GM⁄r(a)
        </T>
      </Fade>

      {/* beat 6 — the factored quadratic */}
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={560} y={340} size={13} fill={INK} anchor="start" weight={700}>
          (r(a) − r₀)(r(a) − 3r₀) = 0
        </T>
      </Fade>

      {/* beat 7 — the answer */}
      <Fade on={beat >= 7} delay={dl(7, 0.5)}>
        <Draw
          on={beat >= 7}
          delay={dl(7, 0.5)}
          d="M 572 365 h 336 q 12 0 12 12 v 28 q 0 12 -12 12 h -336 q -12 0 -12 -12 v -28 q 0 -12 12 -12"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={740} y={397} size={19} fill={INK} weight={800}>
          r(a) = 3r₀
        </T>
      </Fade>

      {/* beat 8 — the sensitivity */}
      <Draw on={beat >= 8} delay={dl(8, 0.5)} d="M 66 460 v 52" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 8} delay={dl(8, 1.2)}>
        <T x={84} y={480} size={13} fill={RED} script anchor="start">
          {t(
            "a modest ~22% speed boost TRIPLES the far point",
            "sirf ~22% speed boost se far point TIGUNA"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 4)}>
        <T x={84} y={506} size={13} fill={RED} script anchor="start">
          {t(
            "orbits are touchy — insertions demand precision",
            "orbits sensitive hain — insertions ko precision chahiye"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
