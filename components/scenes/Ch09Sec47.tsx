/**
 * Ch09 · Section 47 — "Pitfalls and pro-tips: flow and Bernoulli" (tips recap)
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * DRAFTED — UNVERIFIED (no audio uploaded for sec 13+ yet; see PROGRESS.md).
 *
 * Beats (en reveals [0, 5.12, 19.97, 33.19, 41.9, 55.04, 62.04]):
 *  1 red: fast fluid means low pressure, never high
 *  2 amber: Bernoulli needs an ideal fluid along a single streamline
 *  3 amber: efflux uses the depth of the hole below the surface
 *  4 amber: volume flow rate Q is conserved; the speed v is not
 *  5 red: continuity first, Bernoulli second
 *  6 amber: shortcut — efflux speed equals free-fall speed through the depth
 *
 * Layout plan — six rows, coloured bar + text, baselines 75px apart:
 *  b1 | bar (red) + text (17)   | Draw+T | x80 y112..138 · bl 130
 *  b2 | bar (amber-dk) + text   | Draw+T | x80 y187..213 · bl 205
 *  b3 | bar (amber-dk) + text   | Draw+T | x80 y262..288 · bl 280
 *  b4 | bar (amber-dk) + text   | Draw+T | x80 y337..363 · bl 355
 *  b5 | bar (red) + text        | Draw+T | x80 y412..438 · bl 430
 *  b6 | bar (amber-dk) + text   | Draw+T | x80 y487..513 · bl 505
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch09Sec47({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const rows: { y: number; color: string; en: string; hi: string }[] = [
    {
      y: 130,
      color: RED,
      en: "fast fluid means low pressure, never high",
      hi: "fast fluid matlab low pressure, kabhi high nahi",
    },
    {
      y: 205,
      color: AMBER_DARK,
      en: "Bernoulli needs an ideal fluid along a single streamline",
      hi: "Bernoulli ko ek ideal fluid, ek streamline ke saath chahiye",
    },
    {
      y: 280,
      color: AMBER_DARK,
      en: "efflux uses the depth of the hole below the surface",
      hi: "efflux surface ke neeche hole ki depth use karta",
    },
    {
      y: 355,
      color: AMBER_DARK,
      en: "volume flow rate Q is conserved; the speed v is not",
      hi: "volume flow rate Q conserve hota; speed v nahi",
    },
    {
      y: 430,
      color: RED,
      en: "continuity first, Bernoulli second",
      hi: "pehle continuity, phir Bernoulli",
    },
    {
      y: 505,
      color: AMBER_DARK,
      en: "shortcut: efflux speed = free-fall speed through the depth",
      hi: "shortcut: efflux speed = depth ke through free-fall speed",
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
