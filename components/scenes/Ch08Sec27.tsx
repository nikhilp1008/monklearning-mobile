/**
 * Ch08 · Section 27 — "Poisson's ratio: thinner per unit longer"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * Note: en beats are all ~1s each — short delays throughout for English.
 *
 * Beats (en [0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0]):
 *  0 title only
 *  1 diagram: dashed original rod vs stretched+necked rod
 *  2 text: pull a rubber band — watch it thin
 *  3 boxed hero: ν = −lateral/longitudinal = −(Δr/r)/(ΔL/L)
 *  4 text: minus sign → ν positive
 *  5 text: rubber ν≈0.5, cork ν≈0, metals 0.2–0.4
 *  6 red margin: dimensionless, range 0 to 0.5
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title (script 22, red, ALWAYS ON) cx540 bl64
 *  b1 | dashed original     | Fade | x150..290 y180..240
 *  b1 | "original" (10)     | T mid| x220 bl172
 *  b1 | stretched rect      | Draw | x120..320 y192..228
 *  b1 | stretch arrows      | Draw | x95..345 y210
 *  b1 | "stretch" (11)      | T st | x60 bl235
 *  b1 | shrink arrows       | Draw | x130 y180..240
 *  b1 | "lateral shrink"    | T st | x150 bl262
 *  b2 | tick                | Draw | x345..353 y106
 *  b2 | text (14)           | T st | x360..~700 bl110
 *  b3 | hero box            | Draw | x200..880 y290..370
 *  b3 | line1 (15)          | T mid| x540 bl315
 *  b3 | line2 (24)          | T mid| x540 bl350
 *  b4 | text (14)           | T mid| x540 bl405
 *  b5 | text (13)           | T mid| x540 bl440
 *  b6 | margin bar          | Draw | x60 y475..503
 *  b6 | note (15)           | T st | x76..~460 bl495
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
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch08Sec27({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("Poisson's ratio: how much thinner per unit longer", "Poisson's ratio: kitna patla per unit lamba")}
        </T>
      </Fade>

      {/* beat 1 — stretch one way, shrink the other */}
      <Fade on={beat >= 1} delay={dl(1, 0.1)}>
        <Rect x={150} y={180} width={140} height={60} fill="none" stroke={MUTED} strokeWidth={1.6} strokeDasharray="4 3" />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={220} y={172} size={10} fill={MUTED}>
          {t("original", "original")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.6)} d="M120 192 h200 v36 h-200 z" stroke={GREEN} sw={2.4} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 1.2)} d={arrowD(120, 210, 95, 210)} stroke={GREEN} sw={2} dur={0.3} />
      <Draw on={beat >= 1} delay={dl(1, 1.5)} d={arrowD(320, 210, 345, 210)} stroke={GREEN} sw={2} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 1.9)}>
        <T x={60} y={235} size={11} fill={GREEN} anchor="start">
          {t("stretch", "stretch")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2.2)} d={arrowD(130, 180, 130, 192)} stroke={RED} sw={2} dur={0.3} />
      <Draw on={beat >= 1} delay={dl(1, 2.5)} d={arrowD(130, 240, 130, 228)} stroke={RED} sw={2} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 2.9)}>
        <T x={150} y={262} size={11} fill={RED} anchor="start">
          {t("lateral shrink", "lateral shrink")}
        </T>
      </Fade>

      {/* beat 2 — feel it directly */}
      <Draw on={beat >= 2} delay={dl(2, 0.1)} d="M345 106 h8" stroke={GREEN} sw={1.4} dur={0.2} />
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={360} y={110} size={14} fill={GREEN} script anchor="start">
          {t("pull a rubber band — watch it thin", "rubber band khinchiye — patla hote dekhiye")}
        </T>
      </Fade>

      {/* beat 3 — the hero definition */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 0.2)}
        d="M212 290 h656 q12 0 12 12 v56 q0 12 -12 12 h-656 q-12 0 -12 -12 v-56 q0 -12 12 -12"
        stroke={AMBER}
        sw={2.6}
        dur={0.5}
      />
      <Fade on={beat >= 3} delay={dl(3, 0.7)}>
        <T x={540} y={315} size={15} fill={AMBER_DARK} weight={600}>
          ν = −(lateral strain) / (longitudinal strain)
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={540} y={350} size={24} fill={INK} weight={800}>
          = −(Δr/r) / (ΔL/L)
        </T>
      </Fade>

      {/* beat 4 — why the minus sign */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={405} size={14} fill={AMBER_DARK} script>
          {t("minus sign → ν positive (strains have opposite signs)", "minus sign → ν positive (strains opposite signs)")}
        </T>
      </Fade>

      {/* beat 5 — the values tell a story */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={440} size={13} fill={INK} weight={600}>
          {t("rubber ν≈0.5 (necks a lot) · cork ν≈0 · metals 0.2–0.4", "rubber ν≈0.5 (zyada necks) · cork ν≈0 · metals 0.2–0.4")}
        </T>
      </Fade>

      {/* beat 6 — dimensionless, bounded */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M60 475 L60 503" stroke={RED} sw={3.4} dur={0.3} />
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={76} y={495} size={15} fill={RED} script anchor="start">
          {t("dimensionless — practical range 0 to 0.5", "dimensionless — practical range 0 se 0.5")}
        </T>
      </Fade>
    </Scene>
  );
}
