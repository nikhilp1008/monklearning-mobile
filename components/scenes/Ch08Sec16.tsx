/**
 * Ch08 · Section 16 — "Series and parallel combinations"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * Note: en beats 2..4 are ~1s each — short delays there.
 *
 * Two panels: series (left) and parallel (right), built together in beat 1,
 * captions and formulas filled in as the narration names each.
 *
 * Beats (en [0, 8.87, 17.49, 18.49, 19.49, 20.49, 30.39]):
 *  0 title + drawn underline
 *  1 diagram: both panels' structure (wires, joints, F chips, headers)
 *  2 series caption: stretches add
 *  3 series formula: 1/k = 1/k₁ + 1/k₂
 *  4 parallel caption: stiffnesses add
 *  5 parallel formula: k = k₁ + k₂
 *  6 red margin note: bullock-cart ropes
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title (script 22, red, ALWAYS ON) cx540 bl64
 *  b0 | underline           | Draw | x480..600 y86..93
 *  b1 | series header (14)  | T mid| x159..292 bl110
 *  b1 | series rail+wires   | Draw | x150..300 y140..280
 *  b1 | series F chip       | Draw | x209..241 y280..304
 *  b1 | parallel header(14) | T mid| x620..781 bl110
 *  b1 | parallel wires+bar  | Draw | x600..800 y140..280
 *  b1 | parallel F chip     | Draw | x684..716 y280..304
 *  b2 | tick                | Draw | x182..190 y326
 *  b2 | "stretches add"(12) | T st | x195..273 bl330 (y321..334)
 *  b3 | box                 | Draw | x155..295 y336..362
 *  b3 | formula1 (14)       | T mid| x162..288 bl352 (y341..356)
 *  b4 | tick                | Draw | x642..650 y326
 *  b4 | "stiffnesses add"   | T st | x655..745 bl330 (y321..334)
 *  b5 | box                 | Draw | x645..755 y336..362
 *  b5 | formula2 (14)       | T mid| x658..742 bl352 (y341..356)
 *  b6 | margin bar          | Draw | x60 y528..556
 *  b6 | note (15)           | T st | x76..~600 bl548 (y528..556)
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch08Sec16({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("combining wires: series and parallel", "wires combine karna: series aur parallel")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.3)} d="M480 90 C520 86, 560 93, 600 89" stroke={RED} sw={2} dur={0.4} />

      {/* beat 1 — the two panels' structure */}
      <Fade on={beat >= 1} delay={dl(1, 0.1)}>
        <T x={225} y={110} size={14} fill={GREEN} weight={700}>
          {t("SERIES (same force)", "SERIES (same force)")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.4)} d="M150 140 h150" stroke={INK} sw={3} dur={0.3} />
      <Draw on={beat >= 1} delay={dl(1, 0.8)} d="M225 140 L225 210" stroke={GREEN} sw={2.6} dur={0.3} />
      <Fade on={beat >= 1} delay={0}>
        <Draw on={beat >= 1} delay={dl(1, 1.2)} d="M221 210 A4 4 0 1 1 220.9 210" stroke={INK} sw={1.6} dur={0.2} fill={INK} />
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.5)} d="M225 210 L225 280" stroke={GREEN} sw={2.6} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 1.9)}>
        <Chip x={209} y={280} w={32} h={24} fill={CREAM} stroke={INK} textFill={INK} size={12} script={false}>
          F
        </Chip>
      </Fade>

      <Fade on={beat >= 1} delay={dl(1, 2.3)}>
        <T x={700} y={110} size={14} fill={AMBER_DARK} weight={700}>
          {t("PARALLEL (same stretch)", "PARALLEL (same stretch)")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2.6)} d="M600 140 h200" stroke={INK} sw={3} dur={0.3} />
      <Draw on={beat >= 1} delay={dl(1, 3)} d="M650 140 L650 240" stroke={AMBER_DARK} sw={2.6} dur={0.3} />
      <Draw on={beat >= 1} delay={dl(1, 3.4)} d="M750 140 L750 240" stroke={AMBER_DARK} sw={2.6} dur={0.3} />
      <Fade on={beat >= 1} delay={0}>
        <Draw on={beat >= 1} delay={dl(1, 3.8)} d="M630 240 h140 v16 h-140 z" stroke={INK} sw={2} dur={0.3} fill={CREAM} />
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 4.2)} d="M700 256 L700 280" stroke={INK} sw={2.2} dur={0.2} />
      <Fade on={beat >= 1} delay={dl(1, 4.5)}>
        <Chip x={684} y={280} w={32} h={24} fill={CREAM} stroke={INK} textFill={INK} size={12} script={false}>
          F
        </Chip>
      </Fade>

      {/* beat 2 — series: stretches add */}
      <Draw on={beat >= 2} delay={dl(2, 0.1)} d="M182 326 h8" stroke={GREEN} sw={1.4} dur={0.2} />
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={195} y={330} size={12} fill={MUTED} anchor="start">
          {t("stretches add", "stretches add")}
        </T>
      </Fade>

      {/* beat 3 — series formula */}
      <Draw on={beat >= 3} delay={dl(3, 0.1)} d="M155 336 h140 v26 h-140 z" stroke={GREEN} sw={1.6} dur={0.3} />
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <T x={225} y={352} size={14} fill={INK} weight={700}>
          1/k = 1/k₁ + 1/k₂
        </T>
      </Fade>

      {/* beat 4 — parallel: stiffnesses add */}
      <Draw on={beat >= 4} delay={dl(4, 0.1)} d="M642 326 h8" stroke={AMBER_DARK} sw={1.4} dur={0.2} />
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={655} y={330} size={12} fill={MUTED} anchor="start">
          {t("stiffnesses add", "stiffnesses add")}
        </T>
      </Fade>

      {/* beat 5 — parallel formula */}
      <Draw on={beat >= 5} delay={dl(5, 0.1)} d="M645 336 h110 v26 h-110 z" stroke={AMBER_DARK} sw={1.6} dur={0.3} />
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={700} y={352} size={14} fill={INK} weight={700}>
          k = k₁ + k₂
        </T>
      </Fade>

      {/* beat 6 — bullock-cart ropes */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M60 528 L60 556" stroke={RED} sw={3.4} dur={0.3} />
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={76} y={548} size={15} fill={RED} script anchor="start">
          {t("cart ropes: one-after-another sags; side-by-side shares the load", "cart rassi: ek-ke-baad-ek sag karti; side-by-side load baantti")}
        </T>
      </Fade>
    </Scene>
  );
}
