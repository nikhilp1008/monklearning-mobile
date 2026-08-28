/**
 * Ch08 · Section 43 — "The journey along the stress-strain curve"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * Note: en beats 3..5 are ~1s each — short delays there.
 *
 * Beats (en [0, 10.07, 16.64, 30.72, 31.72, 32.72, 33.72]):
 *  0 title only
 *  1 diagram: full curve, P/E, yield, ultimate, fracture, necking
 *  2 text: linear — Hooke's law, slope=Y, full recovery
 *  3 text: elastic limit/yield — last full recovery, plastic begins
 *  4 text: plastic — big strain little stress, permanent set
 *  5 text: ultimate — peak, necking begins
 *  6 red margin: fracture — the breaking stress
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title (script 20, red, ALWAYS ON) cx540 bl64
 *  b1 | axes                | Draw | x150..780 y130..470
 *  b1 | curve               | Draw | (150,470)→(480,250)→(520,320)
 *  b1 | P/E dot+label       | Draw/T| c(268,302) x290 bl300
 *  b1 | yield dot+label     | Draw/T| c(300,270) x310 bl255
 *  b1 | ultimate dot+label  | Draw/T| c(480,250) x480 bl235
 *  b1 | fracture X+label    | Draw/T| c(520,320) x545 bl335
 *  b1 | necking (10)        | T mid| x500 bl290
 *  b2 | tick/label (12)     | T mid| x210 bl510
 *  b3 | tick/label (12)     | T mid| x460 bl510
 *  b4 | tick/label (12)     | T mid| x210 bl535
 *  b5 | tick/label (12)     | T mid| x460 bl535
 *  b6 | margin bar          | Draw | x60 y565..593
 *  b6 | note (14)           | T st | x76..~450 bl585
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  arrowD,
  crossD,
  INK,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch08Sec43({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={64} size={20} fill={RED} script>
          {t("the journey along the stress-strain curve", "stress-strain curve ki yatra")}
        </T>
      </Fade>

      {/* beat 1 — the whole curve, landmark by landmark */}
      <Draw on={beat >= 1} delay={dl(1, 0.2)} d={arrowD(150, 470, 150, 130)} stroke={INK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 0.7)} d={arrowD(150, 470, 780, 470)} stroke={INK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 1.2)} d="M150 470 L270 300 C320 260 400 245 480 250 L520 320" stroke={INK} sw={2.6} dur={0.8} />
      <Draw on={beat >= 1} delay={dl(1, 2.1)} d="M268 302 A3 3 0 1 1 267.9 302" stroke={GREEN} sw={1.6} dur={0.2} fill={GREEN} />
      <Fade on={beat >= 1} delay={dl(1, 2.3)}>
        <T x={290} y={300} size={10} fill={GREEN} anchor="start">
          P/E
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2.6)} d="M300 270 A3 3 0 1 1 299.9 270" stroke={AMBER_DARK} sw={1.6} dur={0.2} fill={AMBER_DARK} />
      <Fade on={beat >= 1} delay={dl(1, 2.8)}>
        <T x={310} y={255} size={10} fill={AMBER_DARK} anchor="start">
          {t("yield", "yield")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.1)}>
        <T x={500} y={290} size={10} fill={AMBER_DARK}>
          {t("necking", "necking")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 3.4)} d="M480 250 A3 3 0 1 1 479.9 250" stroke={RED} sw={1.6} dur={0.2} fill={RED} />
      <Fade on={beat >= 1} delay={dl(1, 3.6)}>
        <T x={480} y={235} size={10} fill={RED}>
          {t("ultimate", "ultimate")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 3.9)} d={crossD(512, 312, 16, 16)} stroke={RED} sw={2} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 4.3)}>
        <T x={545} y={335} size={10} fill={RED} anchor="start">
          {t("fracture", "fracture")}
        </T>
      </Fade>

      {/* beat 2 — linear region */}
      <Draw on={beat >= 2} delay={dl(2, 0.1)} d="M195 496 h8" stroke={GREEN} sw={1.4} dur={0.2} />
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={230} y={510} size={12} fill={GREEN}>
          {t("linear: Hooke's law, slope=Y", "linear: Hooke's law, slope=Y")}
        </T>
      </Fade>

      {/* beat 3 — elastic limit / yield */}
      <Draw on={beat >= 3} delay={dl(3, 0.1)} d="M425 496 h8" stroke={AMBER_DARK} sw={1.4} dur={0.2} />
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={460} y={510} size={12} fill={AMBER_DARK}>
          {t("yield: last full recovery", "yield: aakhri full recovery")}
        </T>
      </Fade>

      {/* beat 4 — plastic region */}
      <Draw on={beat >= 4} delay={dl(4, 0.1)} d="M195 521 h8" stroke={RED} sw={1.4} dur={0.2} />
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={230} y={535} size={12} fill={RED}>
          {t("plastic: permanent set", "plastic: permanent set")}
        </T>
      </Fade>

      {/* beat 5 — ultimate tensile strength */}
      <Draw on={beat >= 5} delay={dl(5, 0.1)} d="M425 521 h8" stroke={RED} sw={1.4} dur={0.2} />
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={460} y={535} size={12} fill={RED}>
          {t("ultimate: peak, necking", "ultimate: peak, necking")}
        </T>
      </Fade>

      {/* beat 6 — fracture: the breaking stress */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M60 565 L60 593" stroke={RED} sw={3.4} dur={0.3} />
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={76} y={585} size={14} fill={RED} script anchor="start">
          {t("fracture: the stress there is the breaking stress", "fracture: wahan ka stress hi breaking stress hai")}
        </T>
      </Fade>
    </Scene>
  );
}
