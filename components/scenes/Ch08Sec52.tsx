/**
 * Ch08 · Section 52 — "Beams, the neutral layer, and the I-girder"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * Note: en beats 1..6 are all ~1s apart — short delays throughout.
 *
 * Beats (en [0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 17.61]):
 *  0 title only
 *  1 diagram: bent beam, top compresses, bottom stretches, neutral layer
 *  2 text: tension one side, compression the other, neutral layer feels neither
 *  3 text: sag depends on load, material, and — most of all — cross-section shape
 *  4 formulas: cantilever δ=WL³/3YIg; supported (central) δ=WL³/48YIg
 *  5 diagram: I-section — flanges far from neutral axis, scoop the middle
 *  6 red margin: material near neutral axis barely works — scoop it: I-section
 *  7 text: rectangle Ig=bd³/12 → depth beats breadth (δ∝1/d³)
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title (script 18, red, ALWAYS ON) cx540 bl60
 *  b1 | wall+beam+labels    | Draw/Fade | x150..600 y100..250
 *  b1 | caption (10)        | T mid| x540 bl268
 *  b2 | tick/text (12)      | T st | x80..458 bl288
 *  b3 | tick/text (12)      | T st | x80..478 bl310
 *  b4 | formula lines (14)  | T st | x80..~470 bl336/358
 *  b5 | I-section+labels    | Draw/Fade | x260..620 y378..462
 *  b5 | caption (11)        | T mid| x540 bl480
 *  b6 | margin bar          | Draw | x60 y500..528
 *  b6 | note (13)           | T st | x76..~520 bl518
 *  b7 | tick/text (12)      | T st | x80..470 bl552
 */

import React from "react";
import { Path, Rect } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  arrowD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch08Sec52({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={60} size={18} fill={RED} script>
          {t("beams that don't sag, and the I-girder", "beams jo nahi jhukte, aur I-girder")}
        </T>
      </Fade>

      {/* beat 1 — the bent beam */}
      <Draw on={beat >= 1} delay={dl(1, 0.1)} d="M150 100 h14 v100 h-14 Z" stroke={INK} sw={2} dur={0.3} fill="none" />
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <Path d="M164 122 Q400 120 600 165 L600 195 Q400 148 164 158 Z" fill={AMBER} fillOpacity={0.16} />
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.7)} d="M164 122 Q400 120 600 165" stroke={RED} sw={1.6} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 1.1)} d="M164 140 Q400 134 600 180" stroke={MUTED} sw={1.2} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 1.5)} d="M164 158 Q400 148 600 195" stroke={GREEN} sw={1.6} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 1.9)}>
        <T x={300} y={112} size={9} fill={RED} anchor="start">
          {t("top: compresses", "top: compress hota")}
        </T>
        <T x={300} y={210} size={9} fill={GREEN} anchor="start">
          {t("bottom: stretches", "bottom: stretch hota")}
        </T>
        <T x={430} y={140} size={9} fill={MUTED} anchor="start">
          {t("neutral layer", "neutral layer")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2.3)} d={arrowD(600, 195, 600, 232)} stroke={INK} sw={2} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 2.6)}>
        <T x={615} y={222} size={11} fill={INK} anchor="start">
          W
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.9)}>
        <T x={540} y={268} size={10} fill={INK}>
          {t("lower fibres stretch, upper compress, neutral layer between", "neeche fibres stretch, upar compress, beech neutral layer")}
        </T>
      </Fade>

      {/* beat 2 — tension one side, compression the other */}
      <Draw on={beat >= 2} delay={dl(2, 0.1)} d="M65 284 h8" stroke={INK} sw={1.4} dur={0.2} />
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={80} y={288} size={12} fill={INK} weight={600} anchor="start">
          {t("tension one side, compression the other — neutral feels neither", "ek taraf tension, doosri compression — neutral kuch nahi feel karta")}
        </T>
      </Fade>

      {/* beat 3 — what governs the sag */}
      <Draw on={beat >= 3} delay={dl(3, 0.1)} d="M65 306 h8" stroke={INK} sw={1.4} dur={0.2} />
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={80} y={310} size={12} fill={INK} weight={600} anchor="start">
          {t("sag depends on load, material, and — most of all — cross-section shape", "sag depend karta load, material, aur sabse zyada cross-section shape par")}
        </T>
      </Fade>

      {/* beat 4 — the two deflection formulas */}
      <Draw on={beat >= 4} delay={dl(4, 0.1)} d="M65 328 h8" stroke={INK} sw={1.4} dur={0.2} />
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={80} y={332} size={14} fill={INK} weight={600} anchor="start">
          {t("cantilever: δ = WL³ / 3YIg", "cantilever: δ = WL³ / 3YIg")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={80} y={354} size={14} fill={INK} weight={600} anchor="start">
          {t("supported (central): δ = WL³ / 48YIg", "supported (central): δ = WL³ / 48YIg")}
        </T>
      </Fade>

      {/* beat 5 — the I-section */}
      <Fade on={beat >= 5} delay={dl(5, 0.1)}>
        <Rect x={300} y={378} width={220} height={20} fill={AMBER} fillOpacity={0.55} stroke={INK} strokeWidth={1.4} />
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 0.5)} d="M380 398 h60 v44 h-60 Z" stroke={INK} sw={1.6} dur={0.4} fill="none" />
      <Fade on={beat >= 5} delay={dl(5, 0.9)}>
        <Rect x={300} y={442} width={220} height={20} fill={AMBER} fillOpacity={0.55} stroke={INK} strokeWidth={1.4} />
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 1.2)} d="M270 408 h280" stroke={RED} sw={1} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 1.5)}>
        <T x={555} y={412} size={9} fill={RED} anchor="start">
          {t("neutral axis", "neutral axis")}
        </T>
        <T x={410} y={372} size={9} fill={AMBER_DARK}>
          {t("flange (far, high stress)", "flange (door, high stress)")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.8)}>
        <T x={540} y={480} size={11} fill={GREEN} weight={700}>
          {t("same stiffness, far less weight", "same stiffness, kam weight")}
        </T>
      </Fade>

      {/* beat 6 — the scoop-it-out insight */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M60 500 L60 528" stroke={RED} sw={3.4} dur={0.3} />
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={76} y={518} size={13} fill={RED} script anchor="start">
          {t("material near the neutral axis barely works — scoop it: the I-section", "neutral axis ke paas material mushkil se kaam karta — scoop karo: I-section")}
        </T>
      </Fade>

      {/* beat 7 — depth beats breadth */}
      <Draw on={beat >= 7} delay={dl(7, 0.1)} d="M65 548 h8" stroke={INK} sw={1.4} dur={0.2} />
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={80} y={552} size={12} fill={INK} weight={600} anchor="start">
          rectangle: Ig=bd³/12 → depth beats breadth (δ∝1/d³)
        </T>
      </Fade>
    </Scene>
  );
}
