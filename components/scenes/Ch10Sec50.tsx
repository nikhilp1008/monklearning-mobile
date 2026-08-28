/**
 * Ch10 · Section 50 — "Reading temperature through a property"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 * Opens Subtopic 5 (Thermometry, the Ideal-Gas Equation and Absolute
 * Temperature).
 *
 * Beats (en [0,1,2,3,18.45,28.86,37.47] — beats 0-2 exactly 1s apart, so
 * those Fade delays stay ≤ ~0.3s):
 *  0 hook: part 1 told what temperature IS — now how do we measure it?
 *  1 can't read it directly — read a thermometric property instead
 *  2 mercury-in-glass: the length of the mercury column
 *  3 gas (pressure), platinum resistance, thermocouple (emf)
 *  4 radiation pyrometer — no contact, perfect for a furnace
 *  5 bimetallic strip (geyser): two metals, different α, bends when heated
 *  6 a thermometer: translator from invisible hotness to a visible number
 *
 * Layout plan (strict non-overlapping y-bands):
 *  b0 | hook mid x540 bl85
 *  b1 | property mid x540 bl115
 *  b2 | bulb x525..555 y130..180 · label mid x540 bl200
 *  b3 | gas x230..280 y225..250 · platinum x480..560 y225..250 ·
 *       thermocouple x760..810 y225..250 · labels bl275
 *  b4 | pyrometer x510..570 y300..335 · label mid x540 bl355
 *  b5 | strip x480..600 y380..410 · label mid x540 bl430
 *  b6 | takeaway mid x540 bl465
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
  INK_LIGHT,
  AMBER_DARK,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch10Sec50({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true} delay={0.2}>
        <T x={540} y={58} size={22} fill={INK} script>
          {t("reading temperature through a property", "temperature ko ek property se padhna")}
        </T>
      </Fade>

      {/* beat 0 — hook */}
      <Fade on={beat >= 0} delay={dl(0, 0.15)}>
        <T x={540} y={85} size={12} fill={INK} script anchor="middle">
          {t("part 1 said what temperature IS — now, how do we measure it?", "part 1 ne bataya temperature KYA hai — ab, naapein kaise?")}
        </T>
      </Fade>

      {/* beat 1 — thermometric property */}
      <Fade on={beat >= 1} delay={dl(1, 0.15)}>
        <T x={540} y={115} size={12} fill={INK} script anchor="middle">
          {t(
            "can't read it directly — read a thermometric property instead",
            "seedha nahi padh sakte — ek thermometric property padhte hain"
          )}
        </T>
      </Fade>

      {/* beat 2 — mercury-in-glass */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 0.15)}
        d="M529 130 h12 v40 M541 130 v40 M517 170 a12 12 0 1 0 24 0 a12 12 0 1 0 -24 0"
        stroke={INK_LIGHT}
        sw={1.6}
        dur={0.5}
      />
      <Draw on={beat >= 2} delay={dl(2, 0.45)} d="M531 155 h8 v15 M517 170 a12 12 0 1 0 24 0 a12 12 0 1 0 -24 0" stroke={RED} sw={5} dur={0.3} />
      <Fade on={beat >= 2} delay={dl(2, 0.7)}>
        <T x={540} y={200} size={12} fill={INK} script anchor="middle">
          {t("mercury-in-glass — the length of the column", "mercury-in-glass — column ki length")}
        </T>
      </Fade>

      {/* beat 3 — three more properties */}
      <Draw on={beat >= 3} delay={dl(3, 0.1)} d="M230 225 h50 v25 h-50 z M245 225 v-8 h20 v8" stroke={INK_LIGHT} sw={1.6} dur={0.4} />
      <Draw on={beat >= 3} delay={dl(3, 0.3)} d="M480 237 l16 -8 l16 16 l16 -16 l16 16 l16 -8" stroke={INK_LIGHT} sw={1.6} dur={0.4} />
      <Draw on={beat >= 3} delay={dl(3, 0.5)} d="M760 225 l25 25 M785 225 l-25 25" stroke={INK_LIGHT} sw={1.6} dur={0.3} />
      <Fade on={beat >= 3} delay={dl(3, 0.7)}>
        <T x={255} y={275} size={11} fill={INK} anchor="middle">{t("gas — pressure", "gas — pressure")}</T>
        <T x={520} y={275} size={11} fill={INK} anchor="middle">{t("platinum — resistance", "platinum — resistance")}</T>
        <T x={785} y={275} size={11} fill={INK} anchor="middle">{t("thermocouple — emf", "thermocouple — emf")}</T>
      </Fade>

      {/* beat 4 — radiation pyrometer */}
      <Draw on={beat >= 4} delay={dl(4, 0.15)} d="M510 317 a30 17 0 1 1 60 0 a30 17 0 1 1 -60 0" stroke={AMBER_DARK} sw={1.8} dur={0.5} />
      <Draw on={beat >= 4} delay={dl(4, 0.5)} d="M532 317 A8 8 0 1 1 548 317 A8 8 0 1 1 532 317" stroke={AMBER_DARK} sw={1.8} dur={0.3} />
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={540} y={355} size={12} fill={INK} script anchor="middle">
          {t("no contact — perfect for a furnace", "koi contact nahi — furnace ke liye perfect")}
        </T>
      </Fade>

      {/* beat 5 — bimetallic strip */}
      <Draw on={beat >= 5} delay={dl(5, 0.15)} d="M480 395 q60 -25 120 0" stroke={INK} sw={4} dur={0.5} />
      <Draw on={beat >= 5} delay={dl(5, 0.5)} d="M480 405 q60 -25 120 0" stroke={AMBER_DARK} sw={4} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 0.85)}>
        <T x={540} y={430} size={12} fill={INK} script anchor="middle">
          {t("bimetallic strip — bends, trips a switch", "bimetallic strip — mudta hai, switch trip karta")}
        </T>
      </Fade>

      {/* beat 6 — takeaway */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={465} size={13} fill={AMBER_DARK} script weight={700} anchor="middle">
          {t(
            "a thermometer: translator from invisible hotness to a visible number",
            "thermometer: adrishya garmi ko drishya number mein badalta"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
