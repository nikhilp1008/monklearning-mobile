/**
 * Ch08 · Section 32 — "Reading energy off the stress-strain curve"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * Note: en beats 4..6 are ~1s each — short delays throughout for English.
 *
 * Curve graph (left) + reading-skill column (right).
 *
 * Beats (en [0, 7.51, 17.15, 35.41, 36.41, 37.41, 38.41]):
 *  0 title only
 *  1 diagram: stress-strain curve, shaded area up to a point
 *  2 text: u=½σε → area = energy per unit volume
 *  3 red margin: it's DENSITY not total — multiply by volume
 *  4 text: F-ext area=total energy; σ-ε area=density
 *  5 text: returns for resilience & toughness next subtopic
 *  6 text: shade to any point = energy so far
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title (script 20, red, ALWAYS ON) cx540 bl64
 *  b1 | axes                | Draw | x150..680 y140..450
 *  b1 | axis labels (14)    | T    | x125 bl145 / x700 bl455
 *  b1 | curve               | Draw | (150,450)→(410,255)
 *  b1 | shaded area         | Fade | polygon/path
 *  b1 | dashed ref          | Fade | x410 y255..450
 *  b1 | "u" label (16)      | T mid| x280 bl400
 *  b2 | tick/text (14)      | T st | x750..958 bl200
 *  b3 | margin bar          | Draw | x60 y495..523
 *  b3 | note (15)           | T st | x76..~480 bl515
 *  b4 | tick/text (14)      | T st | x750..1020 bl250
 *  b5 | tick/text (14)      | T st | x750..1020 bl300
 *  b6 | tick/text (13)      | T st | x750..1000 bl350
 */

import React from "react";
import { Line, Path } from 'react-native-svg';
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
  Scene,
} from '@/components/scenes/kit';

export default function Ch08Sec32({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={64} size={20} fill={RED} script>
          {t("reading energy off the stress-strain curve", "stress-strain curve se energy padhna")}
        </T>
      </Fade>

      {/* beat 1 — the curve and shaded area */}
      <Draw on={beat >= 1} delay={dl(1, 0.2)} d={arrowD(150, 450, 150, 140)} stroke={INK} sw={2.2} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 0.7)}>
        <T x={125} y={145} size={14} fill={INK} weight={700} anchor="end">
          σ
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1)} d={arrowD(150, 450, 680, 450)} stroke={INK} sw={2.2} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <T x={700} y={455} size={14} fill={INK} weight={700} anchor="start">
          ε
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.9)} d="M150 450 L230 330 C290 270 350 250 410 255" stroke={INK} sw={2.6} dur={0.7} />
      <Fade on={beat >= 1} delay={dl(1, 2.7)}>
        <Path d="M150 450 L230 330 C290 270 350 250 410 255 L410 450 Z" fill={GREEN} fillOpacity={0.2} />
        <Line x1={410} y1={255} x2={410} y2={450} stroke={MUTED} strokeWidth={1.4} strokeDasharray="4 4" />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.1)}>
        <T x={280} y={400} size={16} fill={GREEN} weight={700}>
          u
        </T>
      </Fade>

      {/* beat 2 — why the area is energy density */}
      <Draw on={beat >= 2} delay={dl(2, 0.1)} d="M735 191 h8" stroke={GREEN} sw={1.4} dur={0.2} />
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={750} y={200} size={14} fill={GREEN} script anchor="start">
          {t("u=½σε → area = energy/volume", "u=½σε → area = energy/volume")}
        </T>
      </Fade>

      {/* beat 3 — density, not total */}
      <Draw on={beat >= 3} delay={dl(3, 0.2)} d="M60 495 L60 523" stroke={RED} sw={3.4} dur={0.3} />
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={76} y={515} size={15} fill={RED} script anchor="start">
          {t("energy DENSITY, not total — multiply by volume", "energy DENSITY, total nahi — volume se multiply")}
        </T>
      </Fade>

      {/* beat 4 — which graph you're handed */}
      <Draw on={beat >= 4} delay={dl(4, 0.1)} d="M735 241 h8" stroke={AMBER_DARK} sw={1.4} dur={0.2} />
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={750} y={250} size={14} fill={AMBER_DARK} script anchor="start">
          {t("F-ext area=total; σ-ε area=density", "F-ext area=total; σ-ε area=density")}
        </T>
      </Fade>

      {/* beat 5 — coming back next subtopic */}
      <Draw on={beat >= 5} delay={dl(5, 0.1)} d="M735 291 h8" stroke={GREEN} sw={1.4} dur={0.2} />
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={750} y={300} size={14} fill={GREEN} script anchor="start">
          {t("returns for resilience & toughness", "resilience & toughness mein wapas aata")}
        </T>
      </Fade>

      {/* beat 6 — the simple rule */}
      <Draw on={beat >= 6} delay={dl(6, 0.1)} d="M735 341 h8" stroke={INK} sw={1.4} dur={0.2} />
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={750} y={350} size={13} fill={INK} script anchor="start">
          {t("shade to any point = energy so far", "kisi bhi point tak shade = energy ab tak")}
        </T>
      </Fade>
    </Scene>
  );
}
