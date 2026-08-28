/**
 * Ch08 · Section 42 — "What shifts the behaviour: heat, rate, fatigue"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * Note: en beats 1..3 are ~1s each — short delays there.
 *
 * Three icon panels: heat, sudden load, many cycles.
 *
 * Beats (en [0, 9.47, 10.47, 11.47, 12.47, 37.3, 48.65]):
 *  0 title only
 *  1 diagram: 3 icons + bold titles (HEAT / SUDDEN LOAD / MANY CYCLES)
 *  2 sub-caption: heat — brittle turns ductile
 *  3 sub-caption: sudden load — ductile acts brittle
 *  4 red margin + sub-caption: many cycles — fatigue, fails below normal stress
 *  5 text: aircraft/railway parts retired on schedule
 *  6 text: labels aren't frozen — conditions shift them
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title (script 20, red, ALWAYS ON) cx540 bl64
 *  b1 | 3 icons             | Draw | x160..920 y150..255
 *  b1 | bold titles (13)    | T mid| x210/540/870 bl300
 *  b2 | sub-caption (10)    | T mid| x210 bl318
 *  b3 | sub-caption (10)    | T mid| x540 bl318
 *  b4 | margin bar          | Draw | x60 y400..428
 *  b4 | note (14)           | T st | x76..~520 bl420
 *  b4 | sub-caption (10)    | T mid| x870 bl318
 *  b5 | text (13)           | T mid| x540 bl460
 *  b6 | text (13)           | T mid| x540 bl490
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
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch08Sec42({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={64} size={20} fill={RED} script>
          {t("what shifts these behaviours", "yeh behaviours kya sarkata hai")}
        </T>
      </Fade>

      {/* beat 1 — three icons: heat, sudden load, many cycles */}
      <Draw on={beat >= 1} delay={dl(1, 0.2)} d="M210 178 v-18 M210 222 v18 M188 200 h-18 M232 200 h18" stroke={AMBER_DARK} sw={2} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 0.6)} d="M210 200 A22 22 0 1 1 209.9 200" stroke={AMBER_DARK} sw={2.2} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 1.1)}>
        <T x={210} y={300} size={13} fill={INK} weight={700}>
          {t("HEAT", "HEAT")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.5)} d="M540 165 L525 205 L545 205 L528 245" stroke={AMBER_DARK} sw={2.4} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 2.1)}>
        <T x={540} y={300} size={13} fill={INK} weight={700}>
          {t("SUDDEN LOAD", "SUDDEN LOAD")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2.5)} d="M855 175 A25 25 0 1 1 852 225 M852 225 l8 3 l-3 -9" stroke={AMBER_DARK} sw={2.4} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 3.2)}>
        <T x={870} y={300} size={13} fill={INK} weight={700}>
          {t("MANY CYCLES", "MANY CYCLES")}
        </T>
      </Fade>

      {/* beat 2 — heat: brittle turns ductile */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={210} y={318} size={10} fill={MUTED}>
          {t("brittle turns ductile", "brittle ductile ban jaata")}
        </T>
      </Fade>

      {/* beat 3 — sudden shock: ductile acts brittle */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={318} size={10} fill={MUTED}>
          {t("ductile acts brittle", "ductile brittle jaisa")}
        </T>
      </Fade>

      {/* beat 4 — fatigue: failure below normal stress */}
      <Fade on={beat >= 4} delay={dl(4, 0.1)}>
        <T x={870} y={318} size={10} fill={MUTED}>
          {t("fatigue weakens it", "fatigue kamzor karta")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 0.4)} d="M60 400 L60 428" stroke={RED} sw={3.4} dur={0.3} />
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={76} y={420} size={14} fill={RED} script anchor="start">
          {t("cycling → fatigue → fails below normal stress", "cycling → fatigue → normal stress se neeche fail")}
        </T>
      </Fade>

      {/* beat 5 — the real-world stakes */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={460} size={13} fill={AMBER_DARK} script>
          {t("aircraft & railway parts: retired on schedule", "aircraft & railway parts: schedule par retire")}
        </T>
      </Fade>

      {/* beat 6 — labels aren't frozen */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={490} size={13} fill={GREEN} script>
          {t("labels aren't frozen — conditions shift them", "labels frozen nahi — conditions inhe sarkati")}
        </T>
      </Fade>
    </Scene>
  );
}
