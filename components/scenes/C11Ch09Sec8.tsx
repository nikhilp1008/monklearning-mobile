/**
 * C11 Ch09 · Section 8 — "sp3 geometry and free rotation"
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 9.91, 17.69, 28.01, 37.54, 47.4, 55.8]):
 *  0 tent/tetrahedral icon + subtitle · 1 "sp3, tetrahedral, 109.5°" ·
 *  2 zigzag carbon chain drawn (never straight) · 3 "straight-chain
 *  alkanes are actually crinkled" · 4 "C-C = cylindrically symmetric σ
 *  bond" · 5 steering-wheel icon (rotation) · 6 RED: rotation not perfectly
 *  free, tiny energy speed-bump
 *
 * Layout plan:
 *  b0 | tetrahedral icon        | Draw  | c(150,150) r≈35
 *  b0 | subtitle                | T mid | y105 (bl)
 *  b1 | "sp3, tetrahedral…"     | T st  | x320 y150
 *  b2 | zigzag chain            | Draw  | x150..570 y240..280
 *  b2 | angle label + arc       | Draw+T| c(290,280)
 *  b2 | caption                 | T mid | x360 y350 (script)
 *  b3 | "crinkled" line         | T mid | x400 y385
 *  b4 | "σ bond" line           | T mid | x400 y415
 *  b5 | steering wheel + arrows | Draw  | c(880,285) r32
 *  b5 | caption                 | T mid | x880 y345 (script)
 *  b6 | margin bar + red note   | Draw+T| bar x60 y540..576 · text bl562
 */

import React from "react";
import { Circle } from 'react-native-svg';
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
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch09Sec8({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const zigzag = "M 150 280 L 220 240 L 290 280 L 360 240 L 430 280 L 500 240 L 570 280";
  const zigzagPts = [150, 220, 290, 360, 430, 500, 570];
  const zigzagYs = [280, 240, 280, 240, 280, 240, 280];

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={26} fill={RED} script>
          {t("sp3 geometry and free rotation", "sp3 geometry aur free rotation")}
        </T>
      </Fade>

      {/* beat 0 — tetrahedral tent icon */}
      <Draw on={beat >= 0} delay={dl(0, 0.3)} d="M 150 150 L 150 105 M 150 150 L 105 180 M 150 150 L 195 180" stroke={INK} sw={2.2} dur={0.7} />
      <Draw on={beat >= 0} delay={dl(0, 1.1)} d="M 150 150 L 150 195 M 141 187 L 150 195 L 159 187" stroke={INK} sw={1.6} dur={0.4} />
      <Fade on={beat >= 0} delay={dl(0, 1.7)}>
        <T x={540} y={105} size={18} fill={INK} weight={700}>
          {t("every carbon is a tent with four guy-ropes", "har carbon ek tent hai, char guy-ropes ke saath")}
        </T>
      </Fade>

      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={320} y={158} size={16} fill={AMBER_DARK} weight={700} anchor="start">
          sp³ — {t("tetrahedral, 109.5° bond angle", "tetrahedral, 109.5° bond angle")}
        </T>
      </Fade>

      {/* beat 2 — the zigzag chain */}
      <Draw on={beat >= 2} delay={dl(2, 0.3)} d={zigzag} stroke={INK} sw={2.4} dur={1.2} />
      {zigzagPts.map((x, i) => (
        <Fade key={x} on={beat >= 2} delay={dl(2, 0.3 + i * 0.15)}>
          <Circle cx={x} cy={zigzagYs[i]} r={3.4} fill={INK} />
        </Fade>
      ))}
      <Draw on={beat >= 2} delay={dl(2, 1.6)} d="M 275 268 A 18 18 0 0 1 305 268" stroke={RED} sw={1.6} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <T x={290} y={255} size={13} fill={RED} weight={700}>109.5°</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.4)}>
        <T x={360} y={350} size={14} fill={MUTED} script>
          {t("sp3 carbons zig-zag — never a straight rod", "sp3 carbons zig-zag karte — kabhi straight rod nahi")}
        </T>
      </Fade>

      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={400} y={385} size={16} fill={INK}>
          {t("“straight-chain” alkanes are actually crinkled", "“straight-chain” alkanes asal mein crinkled hain")}
        </T>
      </Fade>

      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={400} y={415} size={16} fill={INK}>
          {t("a C–C single bond is a cylindrically symmetric σ bond", "C–C single bond ek cylindrically symmetric σ bond hai")}
        </T>
      </Fade>

      {/* beat 5 — steering wheel: rotation about the bond */}
      <Draw on={beat >= 5} delay={dl(5, 0.3)} d="M 848 285 A 32 32 0 1 1 912 285 A 32 32 0 1 1 848 285" stroke={INK} sw={2.2} dur={0.7} />
      <Draw on={beat >= 5} delay={dl(5, 1.1)} d="M 880 253 L 880 317 M 852 269 L 908 301 M 852 301 L 908 269" stroke={INK} sw={1.4} dur={0.5} />
      <Draw on={beat >= 5} delay={dl(5, 1.7)} d="M 862 240 A 30 30 0 0 1 898 240" stroke={AMBER_DARK} sw={1.8} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 2.2)}>
        <T x={880} y={345} size={13} fill={MUTED} script>
          {t("two halves turning about the column", "column ke around ghumti do halves")}
        </T>
      </Fade>

      {/* beat 6 — rotation is not perfectly free */}
      <Draw on={beat >= 6} delay={dl(6, 0.3)} d="M 60 540 L 60 576" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={76} y={562} size={16} fill={RED} script anchor="start">
          {t(
            "rotation isn't perfectly free — a tiny energy speed-bump exists",
            "rotation perfectly free nahi — thoda sa energy speed-bump hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
