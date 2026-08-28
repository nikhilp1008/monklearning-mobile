/**
 * Ch09 · Section 22 — "Pitfalls and pro-tips: buoyancy" (tips recap)
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * DRAFTED — UNVERIFIED (no audio uploaded for sec 13+ yet; see PROGRESS.md).
 *
 * Beats (en reveals [0, 1.0, 2.0, 13.18, 25.81, 38.52, 50.73]):
 *  0 title (always-on)
 *  1 red: buoyancy uses fluid density and submerged volume, not the body's
 *  2 amber: submerged fraction is ρ_b/ρ_f, not the inverse
 *  3 amber: floating ice melting in its own water — level unchanged
 *  4 red: but ice with a stone, or in a different liquid, does change it
 *  5 amber: accelerating frame — buoyancy scales with g_eff, not g
 *  6 red: master line — weight of body = weight of displaced fluid
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

export default function Ch09Sec22({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const rows: { y: number; color: string; en: string; hi: string }[] = [
    {
      y: 130,
      color: RED,
      en: "buoyancy uses fluid density and submerged volume, not the body's",
      hi: "buoyancy fluid density aur submerged volume use karti, body ka nahi",
    },
    {
      y: 205,
      color: AMBER_DARK,
      en: "submerged fraction is ρ_b/ρ_f, not the inverse",
      hi: "submerged fraction ρ_b/ρ_f hai, ulta nahi",
    },
    {
      y: 280,
      color: AMBER_DARK,
      en: "floating ice melting in its own water: level unchanged",
      hi: "floating ice apne water mein pighle: level same rehta",
    },
    {
      y: 355,
      color: RED,
      en: "but ice with a stone, or in a different liquid, does change it",
      hi: "par ice ke saath stone, ya alag liquid mein, level badalta",
    },
    {
      y: 430,
      color: AMBER_DARK,
      en: "accelerating frame: buoyancy scales with g_eff, not g",
      hi: "accelerating frame: buoyancy g_eff se scale karti, g se nahi",
    },
    {
      y: 505,
      color: RED,
      en: "master line: weight of body = weight of displaced fluid",
      hi: "master line: body ka weight = displaced fluid ka weight",
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
