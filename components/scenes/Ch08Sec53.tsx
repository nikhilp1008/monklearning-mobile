/**
 * Ch08 · Section 53 — "Why mountains have a maximum height"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * Note: en beats 1..4 are ~1s each; hi beats 5..6 are ~1s apart —
 * short delays there.
 *
 * Beats (en [0, 1.0, 2.0, 3.0, 4.0, 18.25, 28.15]):
 *  0 title only
 *  1 diagram: mountain triangle, height h, ground line
 *  2 text: rock at the base bears the weight of everything above
 *  3 formula: σ_base = Ahρg/A = ρgh
 *  4 text: base can't bear more than breaking stress — rock flows/crumbles
 *  5 boxed hero: h_max = σ_max/ρg
 *  6 red margin: for rock ≈10km — why Everest is the size it is, not 10×
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title (script 20, red, ALWAYS ON) cx540 bl64
 *  b1 | ground+triangle     | Draw | x200..880 y150..320
 *  b1 | height arrow+label  | Draw/T| x790 y150..320 · x805 bl235
 *  b1 | caption (11)        | T mid| x540 bl345
 *  b2 | tick/text (12)      | T st | x80..482 bl370
 *  b3 | tick/formula (15)   | T st | x80..245 bl400
 *  b4 | tick/text (12)      | T st | x80..536 bl428
 *  b5 | hero box            | Draw | x60..400 y450..515
 *  b5 | result (18)         | T st | x80..233 bl488
 *  b6 | margin bar          | Draw | x60 y530..558
 *  b6 | note (13)           | T st | x76..~541 bl548
 */

import React from "react";
import { Path } from 'react-native-svg';
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

export default function Ch08Sec53({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={64} size={20} fill={RED} script>
          {t("why mountains can't be infinitely tall", "mountains infinitely tall kyun nahi ho sakte")}
        </T>
      </Fade>

      {/* beat 1 — the mountain as a column of rock */}
      <Draw on={beat >= 1} delay={dl(1, 0.2)} d="M200 320 h680" stroke={INK} sw={2.2} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <Path d="M330 320 L540 150 L750 320 Z" fill={AMBER} fillOpacity={0.14} stroke={INK} strokeWidth={2} />
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 1.1)}
        d="M790 150 L790 320 M785 159 L790 150 L795 159 M785 311 L790 320 L795 311"
        stroke={INK}
        sw={1.6}
        dur={0.4}
      />
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <T x={806} y={235} size={12} fill={INK} anchor="start">
          h
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.8)}>
        <T x={540} y={345} size={11} fill={INK}>
          {t("the base bears the weight of everything above it", "base upar ke sab kuch ka weight sehta hai")}
        </T>
      </Fade>

      {/* beat 2 — the base carries the load */}
      <Draw on={beat >= 2} delay={dl(2, 0.1)} d="M65 366 h8" stroke={INK} sw={1.4} dur={0.2} />
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={80} y={370} size={12} fill={INK} weight={600} anchor="start">
          {t("rock at the base bears the weight of everything above", "base ki rock upar ke sab kuch ka weight sehti")}
        </T>
      </Fade>

      {/* beat 3 — the base stress formula */}
      <Draw on={beat >= 3} delay={dl(3, 0.1)} d="M65 396 h8" stroke={INK} sw={1.4} dur={0.2} />
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={80} y={400} size={15} fill={INK} weight={600} anchor="start">
          σ_base = Ahρg/A = ρgh
        </T>
      </Fade>

      {/* beat 4 — the limit on the base */}
      <Draw on={beat >= 4} delay={dl(4, 0.1)} d="M65 424 h8" stroke={INK} sw={1.4} dur={0.2} />
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={80} y={428} size={12} fill={INK} weight={600} anchor="start">
          {t("base can't bear more than breaking stress — rock flows or crumbles", "base breaking stress se zyada nahi seh sakta — rock flow ya crumble hoti")}
        </T>
      </Fade>

      {/* beat 5 — the boxed maximum height */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.2)}
        d="M72 450 h328 q12 0 12 12 v41 q0 12 -12 12 h-328 q-12 0 -12 -12 v-41 q0 -12 12 -12"
        stroke={AMBER}
        sw={2.6}
        dur={0.5}
      />
      <Fade on={beat >= 5} delay={dl(5, 0.7)}>
        <T x={80} y={488} size={18} fill={INK} weight={800} anchor="start">
          h_max = σ_max/ρg
        </T>
      </Fade>

      {/* beat 6 — Everest's ceiling */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M60 530 L60 558" stroke={RED} sw={3.4} dur={0.3} />
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={76} y={548} size={13} fill={RED} script anchor="start">
          {t("for rock ≈10 km — why Everest is the size it is, not 10× bigger", "rock ke liye ≈10 km — isliye Everest itna hi, 10× bada nahi")}
        </T>
      </Fade>
    </Scene>
  );
}
