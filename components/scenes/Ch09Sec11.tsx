/**
 * Ch09 · Section 11 — "Pitfalls and pro-tips: pressure and Pascal" (tips recap)
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en reveals [0, 5.21, 17.24, 18.24, 19.24, 20.24, 21.24]):
 *  0 title (always-on)
 *  1 red: pressure is a scalar — only its force is a vector
 *  2 amber: tyre, blood, submarine pressures are ALL gauge
 *  3 amber: more liquid ≠ more pressure (depth is what matters)
 *  4 red: U-tube — a drop of x gives a 2x level difference
 *  5 amber: ≈1 atm of gauge per 10 m of water
 *  6 red: sanity-check your depth answers with this
 *
 * Layout plan — six rows, coloured bar + text, baselines 75px apart:
 *  b1 | bar (red) + text (17)   | Draw+T | x80 y112..138 · bl 130
 *  b2 | bar (amber-dk) + text   | Draw+T | x80 y187..213 · bl 205
 *  b3 | bar (amber-dk) + text   | Draw+T | x80 y262..288 · bl 280
 *  b4 | bar (red) + text        | Draw+T | x80 y337..363 · bl 355
 *  b5 | bar (amber-dk) + text   | Draw+T | x80 y412..438 · bl 430
 *  b6 | bar (red) + text        | Draw+T | x80 y487..513 · bl 505
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch09Sec11({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const rows: { y: number; color: string; en: string; hi: string }[] = [
    {
      y: 130,
      color: RED,
      en: "pressure is a scalar — only its force is a vector",
      hi: "pressure scalar hai — sirf uska force vector hota",
    },
    {
      y: 205,
      color: AMBER_DARK,
      en: "tyre, blood, submarine pressures — all gauge",
      hi: "tyre, blood, submarine pressure — sab gauge hote",
    },
    {
      y: 280,
      color: AMBER_DARK,
      en: "more liquid ≠ more pressure — depth is what matters",
      hi: "zyada liquid ≠ zyada pressure — depth matter karti",
    },
    {
      y: 355,
      color: RED,
      en: "U-tube: a drop of x gives a 2x level difference",
      hi: "U-tube: x drop se 2x level difference milta",
    },
    {
      y: 430,
      color: AMBER_DARK,
      en: "≈1 atm of gauge per 10 m of water",
      hi: "≈1 atm gauge har 10 m water mein",
    },
    {
      y: 505,
      color: RED,
      en: "sanity-check your depth answers with this",
      hi: "isse apne depth answers sanity-check karo",
    },
  ];

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={28} fill={RED} script>
          {t("pitfalls and pro-tips", "pitfalls aur pro-tips")}
        </T>
      </Fade>

      {rows.map((row, i) => (
        <React.Fragment key={row.y}>
          <Draw
            on={beat >= i + 1}
            delay={dl(i + 1, 0)}
            d={`M 80 ${row.y - 18} L 80 ${row.y + 8}`}
            stroke={row.color}
            sw={3.2}
            dur={0.4}
          />
          <Fade on={beat >= i + 1} delay={dl(i + 1, 0.4)}>
            <T x={100} y={row.y} size={17} fill={row.color} script anchor="start">
              {t(row.en, row.hi)}
            </T>
          </Fade>
        </React.Fragment>
      ))}
    </Scene>
  );
}
