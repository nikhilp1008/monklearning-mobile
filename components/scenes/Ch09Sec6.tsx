/**
 * Ch09 · Section 6 — "Your pressure toolkit" (formulas recap)
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en reveals [0, 6.4, 12.8, 19.03, 20.03, 21.03, 22.03, 23.03]):
 *  0 title (always-on)
 *  1 P = F⊥/A
 *  2 P = P₀ + ρgh
 *  3 P_g = P − P₀ = ρgh
 *  4 red note: absolute is never negative; gauge can be
 *  5 F₁/A₁ = F₂/A₂  (Pascal's law)
 *  6 A₁h₁ = A₂h₂  (equal volumes)
 *  7 1 atm = 1.013×10⁵ Pa = 760 mm Hg
 *
 * Layout plan — seven rows, a coloured bar + formula, baselines 60px apart:
 *  b1 | bar (amber-dk) + formula | Draw+T | x80 y109..133 · text x100.. bl125
 *  b2 | bar (amber-dk) + formula | Draw+T | x80 y169..193 · bl185
 *  b3 | bar (amber-dk) + formula | Draw+T | x80 y229..253 · bl245
 *  b4 | bar (red) + note (16)    | Draw+T | x80 y289..313 · bl305
 *  b5 | bar (green) + formula    | Draw+T | x80 y349..373 · bl365
 *  b6 | bar (green) + formula    | Draw+T | x80 y409..433 · bl425
 *  b7 | bar (ink) + formula      | Draw+T | x80 y469..493 · bl485
 *  (all formula text starts x100, size20, widest row7 ends ~x430)
 */

import React from "react";
import { TSpan } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch09Sec6({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const rows = [
    { y: 125, color: AMBER_DARK, node: <>P = F⊥ / A</> },
    { y: 185, color: AMBER_DARK, node: <>P = P₀ + ρgh</> },
    {
      y: 245,
      color: AMBER_DARK,
      node: (
        <>
          P<TSpan fontSize={13} dy={4}>g</TSpan>
          <TSpan dy={-4}> = P − P₀ = ρgh</TSpan>
        </>
      ),
    },
    {
      y: 305,
      color: RED,
      node: t("absolute is never negative; gauge can be", "absolute kabhi negative nahi; gauge ho sakta"),
      note: true,
    },
    { y: 365, color: GREEN, node: <>F₁ / A₁ = F₂ / A₂</> },
    { y: 425, color: GREEN, node: <>A₁h₁ = A₂h₂</> },
    { y: 485, color: INK, node: <>1 atm = 1.013×10⁵ Pa = 760 mm Hg</> },
  ];

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={28} fill={RED} script>
          {t("your pressure toolkit", "tumhara pressure toolkit")}
        </T>
      </Fade>

      {rows.map((row, i) => (
        <React.Fragment key={row.y}>
          <Draw
            on={beat >= i + 1}
            delay={dl(i + 1, 0)}
            d={`M 80 ${row.y - 16} L 80 ${row.y + 8}`}
            stroke={row.color}
            sw={3.2}
            dur={0.4}
          />
          <Fade on={beat >= i + 1} delay={dl(i + 1, 0.4)}>
            {row.note ? (
              <T x={100} y={row.y} size={16} fill={RED} script anchor="start">
                {row.node}
              </T>
            ) : (
              <T x={100} y={row.y} size={20} fill={INK} weight={700} anchor="start">
                {row.node}
              </T>
            )}
          </Fade>
        </React.Fragment>
      ))}
    </Scene>
  );
}
