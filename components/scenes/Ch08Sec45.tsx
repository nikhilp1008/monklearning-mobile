/**
 * Ch08 · Section 45 — "The anchoring quantities"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * Note: en beats 1..2 are ~1s each — short delays there.
 *
 * Pure definitions cascade, single column, no diagram needed.
 *
 * Beats (en [0, 1.0, 2.0, 12.15, 27.26, 36.99, 51.49]):
 *  0 title only
 *  1 text: σy = yield strength = stress at yield (elastic/plastic boundary)
 *  2 boxed hero: u_resilience = ½σyεy = σy²/2Y
 *  3 text: = area under elastic part = safe energy budget
 *  4 text: toughness = total area to fracture = total absorbed
 *  5 text: ductility(graphical)=curve length yield→ultimate; permanent set
 *  6 red margin: resilience=area to yield; toughness=whole area to fracture
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title (script 20, red, ALWAYS ON) cx540 bl64
 *  b1 | tick                | Draw | x65..73 y156
 *  b1 | text (14)           | T st | x80..528 bl160
 *  b2 | hero box            | Draw | x60..620 y200..270
 *  b2 | formula (20)        | T st | x80..380 bl240
 *  b3 | tick                | Draw | x65..73 y301
 *  b3 | text (13)           | T st | x80..386 bl305
 *  b4 | tick                | Draw | x65..73 y331
 *  b4 | text (13)           | T st | x80..418 bl335
 *  b5 | tick                | Draw | x65..73 y361
 *  b5 | line1 (12)          | T st | x80..374 bl365
 *  b5 | line2 (12)          | T st | x80..368 bl385
 *  b6 | margin bar          | Draw | x60 y420..448
 *  b6 | note (14)           | T st | x76..~500 bl440
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  INK,
  AMBER,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch08Sec45({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={64} size={20} fill={RED} script>
          {t("the quantities that anchor this subtopic", "yeh subtopic anchor karne wali quantities")}
        </T>
      </Fade>

      {/* beat 1 — yield strength */}
      <Draw on={beat >= 1} delay={dl(1, 0.1)} d="M65 156 h8" stroke={INK} sw={1.4} dur={0.2} />
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={80} y={160} size={14} fill={INK} weight={600} anchor="start">
          σy = yield strength = stress at yield (elastic/plastic boundary)
        </T>
      </Fade>

      {/* beat 2 — modulus of resilience */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 0.2)}
        d="M72 200 h548 q12 0 12 12 v46 q0 12 -12 12 h-548 q-12 0 -12 -12 v-46 q0 -12 12 -12"
        stroke={AMBER}
        sw={2.6}
        dur={0.5}
      />
      <Fade on={beat >= 2} delay={dl(2, 0.7)}>
        <T x={80} y={240} size={20} fill={INK} weight={800} anchor="start">
          u_resilience = ½σyεy = σy²/2Y
        </T>
      </Fade>

      {/* beat 3 — resilience: the area, the meaning */}
      <Draw on={beat >= 3} delay={dl(3, 0.1)} d="M65 301 h8" stroke={INK} sw={1.4} dur={0.2} />
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={80} y={305} size={13} fill={INK} weight={600} anchor="start">
          = area under elastic part = safe energy budget
        </T>
      </Fade>

      {/* beat 4 — toughness */}
      <Draw on={beat >= 4} delay={dl(4, 0.1)} d="M65 331 h8" stroke={INK} sw={1.4} dur={0.2} />
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={80} y={335} size={13} fill={INK} weight={600} anchor="start">
          toughness = total area to fracture = total absorbed
        </T>
      </Fade>

      {/* beat 5 — ductility and permanent set */}
      <Draw on={beat >= 5} delay={dl(5, 0.1)} d="M65 361 h8" stroke={INK} sw={1.4} dur={0.2} />
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={80} y={365} size={12} fill={INK} weight={600} anchor="start">
          ductility (graphical) = curve length yield→ultimate
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={80} y={385} size={12} fill={INK} weight={600} anchor="start">
          permanent set = residual strain after unloading
        </T>
      </Fade>

      {/* beat 6 — the two areas, side by side */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M60 420 L60 448" stroke={RED} sw={3.4} dur={0.3} />
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={76} y={440} size={14} fill={RED} script anchor="start">
          {t("resilience = area to yield; toughness = whole area to fracture", "resilience = yield tak area; toughness = poora area to fracture")}
        </T>
      </Fade>
    </Scene>
  );
}
