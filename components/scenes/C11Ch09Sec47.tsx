/**
 * C11 Ch09 · Section 47 — "Physical properties of alkynes"
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 6.14, 13.74, 20.22, 28.07, 35.5, 43.26]):
 *  0 heading: alkynes follow the family trend ·
 *  1 three state cards: gas / liquid / solid by chain length ·
 *  2 weakly polar, lighter than water, immiscible ·
 *  3 soluble in organic solvents · 4 mp/bp/density rise with molar mass (arrow) ·
 *  5 ethyne: colourless, odour; higher members odourless ·
 *  6 RED: triple bond shows in chemistry, not mp/bp
 *
 * Layout plan:
 *  b1 | 3 state cards        | rect+T | x145/445/745 y155 w190 h60
 *  b2 | polarity text        | T mid  | x540 y270
 *  b3 | solubility text      | T mid  | x540 y305
 *  b4 | trend arrow          | Draw   | x200,390 -> x880,350
 *  b4 | trend label          | T mid  | x540 y320
 *  b5 | odour text           | T mid  | x540 y440
 *  b6 | red bar + note       | Draw+T | bar x60 y480..524, text bl502/524
 */

import React from "react";
import { Rect } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  T,
  Draw,
  arrowD,
  INK,
  RED,
  MUTED,
  AMBER_DARK,
  Scene,
} from '@/components/scenes/kit';

function StateCard({
  on,
  delay,
  x,
  head,
  sub,
}: {
  on: boolean;
  delay: number;
  x: number;
  head: string;
  sub: string;
}) {
  const w = 190,
    h = 60,
    y = 155;
  return (
    <Fade on={on} delay={delay}>
      <Rect x={x} y={y} width={w} height={h} rx={12} fill="#FBF8EF" stroke={INK} strokeWidth={1.4} />
      <T x={x + w / 2} y={y + 26} size={17} fill={INK} weight={700}>
        {head}
      </T>
      <T x={x + w / 2} y={y + 47} size={13} fill={MUTED} weight={600}>
        {sub}
      </T>
    </Fade>
  );
}

export default function C11Ch09Sec47({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={26} fill={RED} script>
          {t("physical properties of alkynes", "alkynes ke physical properties")}
        </T>
      </Fade>

      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={104} size={16} fill={INK} weight={700}>
          {t("alkynes follow the family trend", "alkynes bhi family ka trend follow karte hain")}
        </T>
      </Fade>

      {/* beat 1 — three state cards */}
      <StateCard on={beat >= 1} delay={dl(1, 0.2)} x={145} head={t("gases", "gases")} sub="C2–C4" />
      <StateCard on={beat >= 1} delay={dl(1, 0.5)} x={445} head={t("liquids", "liquids")} sub="C5–C12" />
      <StateCard on={beat >= 1} delay={dl(1, 0.8)} x={745} head={t("solids", "solids")} sub="C13+" />

      {/* beat 2 — polarity */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={270} size={15} fill={INK}>
          {t(
            "weakly polar, lighter than water, immiscible with water",
            "weakly polar, paani se halke, paani mein immiscible"
          )}
        </T>
      </Fade>

      {/* beat 3 — solubility */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={305} size={15} fill={INK}>
          {t(
            "soluble in organic solvents — ether, CCl4, benzene",
            "organic solvents mein soluble — ether, CCl4, benzene"
          )}
        </T>
      </Fade>

      {/* beat 4 — trend arrow */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={345} size={15} fill={AMBER_DARK} weight={700}>
          {t("m.p., b.p. and density all rise with molar mass", "m.p., b.p. aur density molar mass ke saath badhte")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 0.6)} d={arrowD(200, 410, 880, 370)} stroke={AMBER_DARK} sw={2.6} dur={1} />

      {/* beat 5 — odour */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={440} size={15} fill={INK}>
          {t(
            "ethyne: colourless gas with a characteristic odour; higher members odourless",
            "ethyne: colourless gas, characteristic odour; upar wale members odourless"
          )}
        </T>
      </Fade>

      {/* beat 6 — RED: triple bond shows in chemistry not mp/bp */}
      <Draw on={beat >= 6} delay={dl(6, 0.3)} d="M 60 480 L 60 534" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={76} y={502} size={16} fill={RED} script anchor="start">
          {t("the triple bond announces itself", "triple bond apna asar dikhata hai")}
        </T>
        <T x={76} y={530} size={16} fill={RED} script anchor="start">
          {t("in chemistry, not in m.p./b.p.", "chemistry mein, m.p./b.p. mein nahi")}
        </T>
      </Fade>
    </Scene>
  );
}
