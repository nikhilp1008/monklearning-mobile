/**
 * Ch09 · Section 4 — "Pascal's law and the hydraulic lift"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en reveals [0, 5.89, 13.31, 20.05, 28.33, 29.33, 30.33, 31.33]):
 *  0 title (always-on)
 *  1 sealed vessel drawn (narrow + tube + wide), left piston pushed in, F₁, +ΔP
 *  2 pressure-transmitted arrows: three equal pushes at different points
 *  3 red-margin note: transmitted undiminished, everywhere
 *  4 right piston appears (lifted), F₂ arrow
 *  5 formula F₂ = F₁(A₂/A₁)
 *  6 label: bigger A₂ ⇒ bigger F₂
 *  7 red-margin note: force multiplied, energy conserved
 *
 * Layout plan:
 *  b1 | left cylinder            | Draw  | x260..320  y290..400
 *  b1 | tube                     | Draw  | x320..680  y400
 *  b1 | right cylinder (empty)   | Draw  | x680..900  y290..400
 *  b1 | left piston (amber)      | rect  | x254..326  y272..292
 *  b1 | F₁ arrow                 | Draw  | (288,230)→(288,268)
 *  b1 | "F₁" (13)                | T mid  | x281..295  y210..226 (bl 222)
 *  b1 | "+ΔP" (13, red)          | T st   | x350..~400 y271..293 (bl 285)
 *  b2 | 3 upward arrows          | Draw   | x350/500/820  y410→380
 *  b3 | margin bar (red)         | Draw   | x60  y480..504
 *  b3 | note (script 15, red)    | T st   | x76..~430  y479..508 (bl 500)
 *  b4 | right piston (amber)     | rect   | x674..906  y250..270
 *  b4 | F₂ arrow                 | Draw   | (790,246)→(790,210)
 *  b4 | "F₂" (15)                | T mid  | x780..800  y185..205 (bl 200)
 *  b5 | formula (26, w800)       | T mid  | x423..657  y525..553 (bl 545)
 *  b6 | "bigger A₂…" (12, green) | T st   | x918..1026 y248..268 (bl 264)
 *  b7 | margin bar (red)         | Draw   | x60  y558..582
 *  b7 | note (script 15, red)    | T st   | x76..~410  y560..588 (bl 580)
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
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch09Sec4({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={28} fill={RED} script>
          {t("Pascal's law", "Pascal ka law")}
        </T>
      </Fade>

      {/* beat 1 — the sealed vessel and the first push */}
      <Draw on={beat >= 1} delay={dl(1, 0)} d="M 260 290 V 400 H 320 V 290" stroke={INK} sw={2.4} dur={0.7} />
      <Draw on={beat >= 1} delay={dl(1, 0.8)} d="M 320 400 H 680" stroke={INK} sw={2.4} dur={0.6} />
      <Draw
        on={beat >= 1}
        delay={dl(1, 1.4)}
        d="M 680 290 V 400 H 900 V 290"
        stroke={INK}
        sw={2.4}
        dur={0.9}
      />
      <Fade on={beat >= 1} delay={dl(1, 2.4)}>
        <Rect x={254} y={272} width={72} height={20} rx={3} fill={AMBER} stroke={INK} strokeWidth={1.6} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3)}>
        <Draw on={beat >= 1} d={arrowD(288, 230, 288, 268)} stroke={INK} sw={2.4} dur={0.4} />
        <T x={288} y={222} size={13} fill={INK} anchor="middle">
          F₁
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.7)}>
        <T x={350} y={285} size={13} fill={RED} script anchor="start">
          +ΔP
        </T>
      </Fade>

      {/* beat 2 — transmitted equally, at different points */}
      {[350, 500, 820].map((x, i) => (
        <Fade key={x} on={beat >= 2} delay={dl(2, 0.4 + i * 0.6)}>
          <Draw on={beat >= 2} d={arrowD(x, 410, x, 380)} stroke={INK} sw={2.2} dur={0.4} />
        </Fade>
      ))}

      {/* beat 3 — undiminished, everywhere */}
      <Draw on={beat >= 3} delay={dl(3, 0.2)} d="M 60 480 L 60 504" stroke={RED} sw={3.2} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <T x={76} y={500} size={15} fill={RED} script anchor="start">
          {t("transmitted undiminished, everywhere", "har jagah, undiminished transmit hota")}
        </T>
      </Fade>

      {/* beat 4 — the payoff: a small push lifts a big load */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <Rect x={674} y={250} width={232} height={20} rx={3} fill={AMBER} stroke={INK} strokeWidth={1.6} />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <Draw on={beat >= 4} d={arrowD(790, 246, 790, 210)} stroke={INK} sw={2.8} dur={0.5} />
        <T x={790} y={200} size={15} fill={INK} anchor="middle" weight={800}>
          F₂
        </T>
      </Fade>

      {/* beat 5 — the formula */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={545} size={26} fill={INK} weight={800}>
          F₂ = F₁ (A₂ / A₁)
        </T>
      </Fade>

      {/* beat 6 — bigger area, bigger force */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={918} y={264} size={12} fill={GREEN} script anchor="start">
          {t("bigger A₂ ⇒ bigger F₂", "bada A₂ ⇒ bada F₂")}
        </T>
      </Fade>

      {/* beat 7 — force multiplied, energy conserved */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 60 558 L 60 582" stroke={RED} sw={3.2} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.5)}>
        <T x={76} y={580} size={15} fill={RED} script anchor="start">
          {t("force multiplied, energy conserved", "force multiply, energy conserved")}
        </T>
      </Fade>
    </Scene>
  );
}
