/**
 * Ch01 · Section 79 — "Mass and time hide the same story"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 7.9, 20.5, 33.6, 53.2, 73, 85.4, 109]):
 *  0 title
 *  1 chemical balance + its band
 *  2 electron / galaxy extremes — balance crossed out
 *  3 mass spectrograph: two curved paths in a field
 *  4 star + orbit: gravity weighs the Sun
 *  5 time extremes — no stopwatch spans it
 *  6 atomic clock: count the vibrations
 *  7 the spans: 10⁴¹ · 10⁸⁵ · 10³⁹ + know-where-things-sit
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b1 | balance x100..240 y80..150 · label st x260 bl 100
 *  b2 | red st x260/x560 bl 150 · muted st x800 bl 150
 *  b3 | field rect x160..420 y190..300 (dashed) · arcs from (160,280) · labels (200,190)/(430,235) · green st x160 bl 330 · muted bl 356
 *  b4 | star c(760,240) r16 · orbit ellipse rx140 ry55 · planet (900,240) · labels cx760 bl 330/356
 *  b5 | script 14 mid bl 400
 *  b6 | atom c(150,470) · script st x220 bl 465 · muted bl 493
 *  b7 | chips y520..556 x120/x390/x640 · green mid bl 585
 */

import React from "react";
import { Ellipse, Rect } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  Chip,
  T,
  INK,
  INK_LIGHT,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch01Sec79({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={50} size={24} fill={INK} script>
          {t(
            "mass and time hide the same story",
            "mass aur time wahi kahani chhipaye hain"
          )}
        </T>
      </Fade>

      {/* beat 1 — the balance and its band */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 1)}
        d="M 170 84 v 56 M 120 90 h 100 M 120 90 l -14 26 h 28 z M 220 90 l -14 26 h 28 z M 150 140 h 40"
        stroke={INK_LIGHT}
        sw={1.8}
        dur={1}
      />
      <Fade on={beat >= 1} delay={dl(1, 3)}>
        <T x={260} y={100} size={13} fill={INK} script anchor="start">
          {t(
            "chemical balance: grams → kilograms — its human-sized band",
            "chemical balance: gram → kilogram — uski insaani patti"
          )}
        </T>
      </Fade>

      {/* beat 2 — the impossible extremes */}
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={260} y={150} size={14} fill={RED} weight={600} anchor="start">
          {t("electron: 10⁻³⁰ kg ✗", "electron: 10⁻³⁰ kg ✗")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 4)}>
        <T x={560} y={150} size={14} fill={RED} weight={600} anchor="start">
          {t("galaxy: 10⁴² kg ✗", "galaxy: 10⁴² kg ✗")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 8)}>
        <T x={800} y={150} size={13} fill={MUTED} script anchor="start">
          {t("indirect methods only", "sirf indirect vidhiyan")}
        </T>
      </Fade>

      {/* beat 3 — the mass spectrograph */}
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <Rect x={160} y={190} width={260} height={110} fill="none" stroke={MUTED} strokeWidth={1.2} strokeDasharray="6 5" />
        <T x={185} y={207} size={11} fill={MUTED}>B</T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 3)}
        d="M 130 280 h 30 M 160 280 q 20 -80 60 -80"
        stroke={AMBER_DARK}
        sw={2}
        dur={0.8}
      />
      <Fade on={beat >= 3} delay={dl(3, 4)}>
        <T x={228} y={186} size={12} fill={AMBER_DARK} script anchor="start">
          {t("light — curves more", "halka — zyada mudta")}
        </T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 6)}
        d="M 160 280 q 110 -60 220 -68"
        stroke={INK}
        sw={2}
        dur={0.8}
      />
      <Fade on={beat >= 3} delay={dl(3, 7)}>
        <T x={430} y={222} size={12} fill={INK} script anchor="start">
          {t("heavy — curves less", "bhaari — kam mudta")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 12)}>
        <T x={160} y={330} size={13} fill={GREEN} script anchor="start">
          {t("measure the radius → get the mass", "trijya naapo → mass pao")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 16)}>
        <T x={160} y={356} size={12} fill={MUTED} script anchor="start">
          {t("you watched it turn a corner", "tumne use mod lete dekha")}
        </T>
      </Fade>

      {/* beat 4 — gravity weighs the star */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 1)}
        d="M 744 240 a 16 16 0 1 0 32 0 a 16 16 0 1 0 -32 0 M 760 214 v -10 M 760 266 v 10 M 734 240 h -10 M 786 240 h 10"
        stroke={AMBER_DARK}
        sw={1.8}
        dur={0.8}
      />
      <Fade on={beat >= 4} delay={dl(4, 3)}>
        <Ellipse cx={760} cy={240} rx={140} ry={55} fill="none" stroke={INK_LIGHT} strokeWidth={1.4} strokeDasharray="7 6" />
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 4.5)}
        d="M 894 240 a 7 7 0 1 0 14 0 a 7 7 0 1 0 -14 0"
        stroke={INK}
        sw={1.8}
        dur={0.3}
      />
      <Fade on={beat >= 4} delay={dl(4, 8)}>
        <T x={760} y={330} size={13} fill={GREEN} script>
          {t("the planet's orbit WEIGHS the star", "grah ki kaksha taare ko TAUL deti hai")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 14)}>
        <T x={760} y={356} size={12} fill={MUTED} script>
          {t(
            "we weighed the Sun without ever going there",
            "humne sooraj ko taula, wahan kabhi gaye bina"
          )}
        </T>
      </Fade>

      {/* beat 5 — time's extremes */}
      <Fade on={beat >= 5} delay={dl(5, 3)}>
        <T x={540} y={400} size={14} fill={INK} script>
          {t(
            "time: from a particle's 10⁻²² s life to the universe's 10¹⁷ s age — no stopwatch spans that",
            "time: kan ke 10⁻²² s jeevan se brahmaand ki 10¹⁷ s umar tak — koi stopwatch nahi failti"
          )}
        </T>
      </Fade>

      {/* beat 6 — the atomic clock */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 1)}
        d="M 144 470 a 6 6 0 1 0 12 0 a 6 6 0 1 0 -12 0"
        stroke={INK}
        sw={1.8}
        dur={0.3}
      />
      <Fade on={beat >= 6} delay={dl(6, 1.5)}>
        <Ellipse cx={150} cy={470} rx={34} ry={13} fill="none" stroke={AMBER_DARK} strokeWidth={1.4} />
        <Ellipse cx={150} cy={470} rx={34} ry={13} fill="none" stroke={AMBER_DARK} strokeWidth={1.4} transform="rotate(60 150 470)" />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 4)}>
        <T x={220} y={465} size={14} fill={INK} script anchor="start">
          {t(
            "atomic clocks count caesium's fantastically steady vibrations — the count IS the time",
            "atomic clocks caesium ke behad sthir kampan ginti hain — ginti HI time hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 15)}>
        <T x={220} y={493} size={12} fill={MUTED} script anchor="start">
          {t("the rice grain, wearing a different hat", "chawal ka daana, alag topi pehne")}
        </T>
      </Fade>

      {/* beat 7 — the spans */}
      <Fade on={beat >= 7} delay={dl(7, 2)}>
        <Chip x={120} y={520} w={240} h={34} fill={CREAM} stroke={INK_LIGHT} textFill={INK} size={14} script={false}>
          {t("length: spans 10⁴¹", "length: 10⁴¹ tak")}
        </Chip>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 4)}>
        <Chip x={390} y={520} w={220} h={34} fill={CREAM} stroke={INK_LIGHT} textFill={INK} size={14} script={false}>
          {t("mass: 10⁸⁵", "mass: 10⁸⁵")}
        </Chip>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 6)}>
        <Chip x={640} y={520} w={220} h={34} fill={CREAM} stroke={INK_LIGHT} textFill={INK} size={14} script={false}>
          {t("time: 10³⁹", "time: 10³⁹")}
        </Chip>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 13)}>
        <T x={540} y={585} size={13} fill={GREEN} script>
          {t(
            "know roughly where an electron, a human and a galaxy sit — without any arithmetic at all",
            "mote taur par jaano ki electron, insaan aur galaxy kahan baithte hain — bina kisi arithmetic ke"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
