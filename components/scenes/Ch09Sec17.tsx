/**
 * Ch09 · Section 17 — "Your buoyancy toolkit" (formulas recap)
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * DRAFTED — UNVERIFIED (no audio uploaded for sec 13+ yet; see PROGRESS.md).
 *
 * Beats (en reveals [0, 1.0, 2.0, 3.0, 4.0, 13.81, 21.15, 27.3]):
 *  0 title (always-on)
 *  1 F_B = ρ_f V_sub g
 *  2 W_app = W − F_B = Vg(ρ_b − ρ_f)
 *  3 V_sub/V = ρ_b/ρ_f
 *  4 RD = ρ_body/ρ_water = W_air/(W_air − W_app)
 *  5 red note: sink if denser; float if lighter
 *  6 F_B = ρ_f V_sub g_eff
 *  7 red note: for a floater, write weight = displaced-fluid weight first
 *
 * Layout plan — seven rows, coloured bar + formula, baselines ~68px apart:
 *  b1 | bar (amber-dk) + formula | Draw+T | x80 y107..133 · bl 125
 *  b2 | bar (amber-dk) + formula | Draw+T | x80 y172..198 · bl 190
 *  b3 | bar (amber-dk) + formula | Draw+T | x80 y237..263 · bl 255
 *  b4 | bar (amber-dk) + formula | Draw+T | x80 y302..328 · bl 320
 *  b5 | bar (red) + note (15)    | Draw+T | x80 y367..393 · bl 385
 *  b6 | bar (amber-dk) + formula | Draw+T | x80 y432..458 · bl 450
 *  b7 | bar (red) + note (15)    | Draw+T | x80 y497..523 · bl 515
 */

import React from "react";
import { TSpan } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch09Sec17({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const rows: { y: number; color: string; node: React.ReactNode; note?: boolean }[] = [
    {
      y: 125,
      color: AMBER_DARK,
      node: (
        <>
          F<TSpan fontSize={13} dy={4}>B</TSpan>
          <TSpan dy={-4}> = ρ</TSpan>
          <TSpan fontSize={13} dy={4}>f</TSpan>
          <TSpan dy={-4}> V</TSpan>
          <TSpan fontSize={13} dy={4}>sub</TSpan>
          <TSpan dy={-4}> g</TSpan>
        </>
      ),
    },
    {
      y: 190,
      color: AMBER_DARK,
      node: (
        <>
          W<TSpan fontSize={13} dy={4}>app</TSpan>
          <TSpan dy={-4}> = W − F</TSpan>
          <TSpan fontSize={13} dy={4}>B</TSpan>
          <TSpan dy={-4}> = Vg(ρ</TSpan>
          <TSpan fontSize={13} dy={4}>b</TSpan>
          <TSpan dy={-4}> − ρ</TSpan>
          <TSpan fontSize={13} dy={4}>f</TSpan>
          <TSpan dy={-4}>)</TSpan>
        </>
      ),
    },
    {
      y: 255,
      color: AMBER_DARK,
      node: (
        <>
          V<TSpan fontSize={13} dy={4}>sub</TSpan>
          <TSpan dy={-4}> / V = ρ</TSpan>
          <TSpan fontSize={13} dy={4}>b</TSpan>
          <TSpan dy={-4}> / ρ</TSpan>
          <TSpan fontSize={13} dy={4}>f</TSpan>
        </>
      ),
    },
    {
      y: 320,
      color: AMBER_DARK,
      node: (
        <>
          RD = ρ<TSpan fontSize={13} dy={4}>body</TSpan>
          <TSpan dy={-4}> / ρ</TSpan>
          <TSpan fontSize={13} dy={4}>water</TSpan>
          <TSpan dy={-4}> = W</TSpan>
          <TSpan fontSize={13} dy={4}>air</TSpan>
          <TSpan dy={-4}> / (W</TSpan>
          <TSpan fontSize={13} dy={4}>air</TSpan>
          <TSpan dy={-4}> − W</TSpan>
          <TSpan fontSize={13} dy={4}>app</TSpan>
          <TSpan dy={-4}>)</TSpan>
        </>
      ),
    },
    {
      y: 385,
      color: RED,
      node: t("sink if the body is denser; float if it is lighter", "sink agar body denser hai; float agar lighter hai"),
      note: true,
    },
    {
      y: 450,
      color: AMBER_DARK,
      node: (
        <>
          F<TSpan fontSize={13} dy={4}>B</TSpan>
          <TSpan dy={-4}> = ρ</TSpan>
          <TSpan fontSize={13} dy={4}>f</TSpan>
          <TSpan dy={-4}> V</TSpan>
          <TSpan fontSize={13} dy={4}>sub</TSpan>
          <TSpan dy={-4}> g</TSpan>
          <TSpan fontSize={13} dy={4}>eff</TSpan>
        </>
      ),
    },
    {
      y: 515,
      color: RED,
      node: t(
        "for a floater: write weight = displaced-fluid weight first",
        "floater ke liye: pehle weight = displaced-fluid weight likho"
      ),
      note: true,
    },
  ];

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={28} fill={RED} script>
          {t("your buoyancy toolkit", "tumhara buoyancy toolkit")}
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
              <T x={100} y={row.y} size={15} fill={RED} script anchor="start">
                {row.node}
              </T>
            ) : (
              <T x={100} y={row.y} size={18} fill={INK} weight={700} anchor="start">
                {row.node}
              </T>
            )}
          </Fade>
        </React.Fragment>
      ))}
    </Scene>
  );
}
