/**
 * Ch01 · Section 16 — "Dimensions: the recipe of a physical quantity"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 9.5, 24.2, 39.3, 62.5, 71.0, 91.2, 115.4]):
 *  0 title + drawn underline
 *  1 the samosa: potato + flour + spices → SAMOSA (assembled, not fundamental)
 *  2 quantities work the same: speed and force as recipes
 *  3 the reader: speed → [L T⁻¹] · force → [M L T⁻²] · strain → all cancels
 *  4 that ingredient list = the DIMENSIONS (underlined)
 *  5 dimensional formula: brackets and symbols
 *  6 the yellow box: units change the number — the formula never changes
 *  7 units are labels; dimensions are the permanent truth underneath
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | title (script 28, red)   | T mid | x230..850 y30..76 (bl 62) · underline y88
 *  b1 | chips y100..140: potato x90 w120 · + · flour x250 w110 · + · spices x400 w120
 *       arrow (532,120)→(578,120) · SAMOSA chip x590..740
 *  b1 | subnote (script 14)      | T mid | x320..510  bl 172
 *  b2 | recipes (script 15)      | T st  | x60..218 bl 210 · x300..580 bl 210
 *  b3 | rows bl 264/318/372: name sans17 x110 st · arrow (210,bl−6)→(320,bl−6) ·
 *       result sans20 x330 st · strain note (script 14, red) x480 st bl 372
 *  b4 | "this ingredient list" (script 15) x650 st bl 290
 *  b4 | "= the DIMENSIONS" (script 20) x650 st bl 330 · underline y348 x650..900
 *  b5 | formulas (sans 18) x60..352 bl 440 · note (script 14) x420..700 bl 440
 *  b6 | yellow box x60..1020 y460..556 · t1 (script 16) bl 494 · t2 (script 15) bl 536
 *  b7 | bar x51 y568..594 · verdict (script 16, green) x62..640 bl 588
 */

import React from "react";
import { G } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  arrowD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  PAPER,
  Scene,
} from '@/components/scenes/kit';

export default function Ch01Sec16({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the recipe idea */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={62} size={28} fill={RED} script>
          {t("dimensions — the recipe of a quantity", "dimensions — har quantity ki recipe")}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 4)}
        d="M 330 88 C 460 84, 620 91, 750 87"
        stroke={RED}
        sw={2.4}
        dur={0.6}
      />

      {/* beat 1 — the samosa is assembled */}
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <Chip x={90} y={100} w={120} h={40} fill={PAPER} stroke={INK} textFill={INK} size={16}>
          {t("potato", "aloo")}
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.6)}>
        <T x={228} y={128} size={20} fill={MUTED} weight={700}>
          +
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.1)}>
        <Chip x={250} y={100} w={110} h={40} fill={PAPER} stroke={INK} textFill={INK} size={16}>
          {t("flour", "maida")}
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.7)}>
        <T x={378} y={128} size={20} fill={MUTED} weight={700}>
          +
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.2)}>
        <Chip x={400} y={100} w={120} h={40} fill={PAPER} stroke={INK} textFill={INK} size={16}>
          {t("spices", "masala")}
        </Chip>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 4.5)}
        d={arrowD(534, 120, 580, 120)}
        stroke={AMBER}
        sw={2.6}
        dur={0.4}
      />
      <Fade on={beat >= 1} delay={dl(1, 5.2)}>
        <Chip x={590} y={100} w={150} h={40} fill={CREAM} stroke={AMBER} textFill={INK} size={17}>
          SAMOSA
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 9)}>
        <T x={415} y={172} size={14} fill={MUTED} script>
          {t("assembled — not fundamental", "banaya jaata hai — fundamental nahi")}
        </T>
      </Fade>

      {/* beat 2 — quantities are recipes too */}
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <T x={60} y={210} size={15} fill={INK} script anchor="start">
          {t("speed = length ÷ time", "speed = length ÷ time")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 7)}>
        <T x={300} y={210} size={15} fill={INK} script anchor="start">
          {t("force = 1×M + 1×L + 2×(1/T)", "force = 1×M + 1×L + 2×(1/T)")}
        </T>
      </Fade>

      {/* beat 3 — feed them through the reader */}
      {[
        ["speed", "[L T⁻¹]", 264, 1.5],
        ["force", "[M L T⁻²]", 318, 7],
      ].map(([name, result, bl, base]) => (
        <G key={name as string}>
          <Fade on={beat >= 3} delay={dl(3, base as number)}>
            <T x={110} y={bl as number} size={17} fill={INK} weight={700} anchor="start">
              {name}
            </T>
          </Fade>
          <Draw
            on={beat >= 3}
            delay={dl(3, (base as number) + 0.7)}
            d={arrowD(210, (bl as number) - 6, 320, (bl as number) - 6)}
            stroke={AMBER}
            sw={2.4}
            dur={0.4}
          />
          <Fade on={beat >= 3} delay={dl(3, (base as number) + 1.3)}>
            <T x={330} y={bl as number} size={20} fill={INK} weight={800} anchor="start">
              {result}
            </T>
          </Fade>
        </G>
      ))}
      <Fade on={beat >= 3} delay={dl(3, 13)}>
        <T x={110} y={372} size={17} fill={INK} weight={700} anchor="start">
          strain
        </T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 13.7)}
        d={arrowD(210, 366, 320, 366)}
        stroke={AMBER}
        sw={2.4}
        dur={0.4}
      />
      <Fade on={beat >= 3} delay={dl(3, 14.4)}>
        <T x={330} y={372} size={20} fill={INK} weight={800} anchor="start">
          [M⁰ L⁰ T⁰]
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 16)}>
        <T x={480} y={372} size={14} fill={RED} script anchor="start">
          {t("L/L — nothing survives!", "L/L — kuch nahi bacha!")}
        </T>
      </Fade>

      {/* beat 4 — this list has a name */}
      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <T x={650} y={290} size={15} fill={MUTED} script anchor="start">
          {t("this ingredient list", "ye ingredient list")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.5)}>
        <T x={650} y={330} size={20} fill={AMBER_DARK} script anchor="start">
          {t("= the DIMENSIONS", "= DIMENSIONS kehlati hai")}
        </T>
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 3.5)}
        d="M 650 348 C 720 344, 820 350, 900 346"
        stroke={AMBER}
        sw={2.4}
        dur={0.5}
      />

      {/* beat 5 — the dimensional formula */}
      <Fade on={beat >= 5} delay={dl(5, 3)}>
        <T x={60} y={440} size={18} fill={INK} weight={700} anchor="start">
          [speed] = [L T⁻¹]   ·   [force] = [M L T⁻²]
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 8)}>
        <T x={480} y={440} size={14} fill={MUTED} script anchor="start">
          {t("symbols: M L T A K · [ ] means 'dimensions of'", "symbols: M L T A K · [ ] = 'dimensions of'")}
        </T>
      </Fade>

      {/* beat 6 — the property that makes it powerful */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 1)}
        d="M 72 460 h 936 q 12 0 12 12 v 72 q 0 12 -12 12 h -936 q -12 0 -12 -12 v -72 q 0 -12 12 -12"
        stroke={AMBER}
        sw={2.6}
        dur={1}
      />
      <Fade on={beat >= 6} delay={dl(6, 3.5)}>
        <T x={540} y={494} size={16} fill={INK} script>
          {t(
            "m/s · km/h · furlongs per fortnight — the number changes completely",
            "m/s · km/h · furlong per pandrah-din — number poora badal jaata hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 12)}>
        <T x={540} y={536} size={15} fill={AMBER_DARK} script>
          {t("the dimensional formula doesn't: always [L T⁻¹]", "dimensional formula wahi: hamesha [L T⁻¹]")}
        </T>
      </Fade>

      {/* beat 7 — labels vs the truth underneath */}
      <Draw
        on={beat >= 7}
        delay={dl(7, 0.5)}
        d="M 51 568 L 51 594"
        stroke={GREEN}
        sw={3.4}
        dur={0.4}
      />
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={62} y={588} size={16} fill={GREEN} script anchor="start">
          {t(
            "units = changeable labels · dimensions = the permanent truth underneath",
            "units = badalte label · dimensions = neeche ki pakki sachchai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
