/**
 * Ch13 · Section 26 — "Derivation: period of a simple pendulum"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 5.4, 12.47, 17.46, 26.19, 37.0, 43.86, 49.26]):
 *  0 shelf
 *  1 diagram geometry: pivot, vertical reference, swept arc, string, bob
 *  2 labels: θ (swing angle), L (string length)
 *  3 force resolution: mg, mg cosθ (⊥ tension), mg sinθ (restoring), T
 *  4 F = −mg sinθ ≈ −mgθ = −mg(s/L) = −(mg/L)s
 *  5 hero: ω² = g/L ⇒ T = 2π√(L/g)
 *  6 note (high): k = mg/L; ω²=k/m makes mass cancel
 *  7 gravity scales with m like inertia ⇒ weight irrelevant
 *
 * Layout plan (Anek bl−0.78s..+0.31s):
 *  b0 | shelf y80 x60..1020
 *  b1 | pivot(650,90) r3 · vertical 650,90→650,240 dashed · arc 650,240→713,226 (r150) dashed ·
 *      θ-arc 650,115→660.6,112.7 (r25) · string 650,90→713,226 · bob(713,226) r11
 *  b2 | "θ" x665 bl106 · "L" x688 bl155
 *  b3 | mg 713,226→713,296 · mg cosθ 713,226→740,284 · mg sinθ 713,226→686,238 (red) ·
 *      T 713,226→694,185 (muted) · "mg" cx713 bl310 · "mg cosθ" x748 bl292 · "mg sinθ" x672 bl252 anchor-end red ·
 *      "T" x716 bl196
 *  b4 | st x70 bl115 size13
 *  b5 | box x70..380 y140..195 rx14 · line cx225 bl174 size18
 *  b6 | script13 st x70 bl235 amber
 *  b7 | script12 st x70 bl275
 */

import React from "react";
import { Circle, Path } from 'react-native-svg';
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
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch13Sec26({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={52} size={20} fill={INK} script>
          {t("Resolving gravity along and across the string", "Gravity ko string ke along aur across resolve karna")}
        </T>
      </Fade>

      {/* beat 0 — the shelf */}
      <Draw on={beat >= 0} delay={dl(0, 0.3)} d="M 60 80 L 1020 80" stroke={INK} sw={1.4} dur={0.6} />

      {/* beat 1 — the geometry */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <Circle cx={650} cy={90} r={3} fill={INK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <Path d="M 650 90 V 240" stroke={MUTED} strokeWidth={1.6} strokeDasharray="5 5" fill="none" />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.0)}>
        <Path d="M 650 240 A 150 150 0 0 1 713 226" stroke={MUTED} strokeWidth={1.4} strokeDasharray="4 4" fill="none" />
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.4)} d="M 650 115 A 25 25 0 0 1 660.6 112.7" stroke={INK} sw={1.4} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 1.9)} d="M 650 90 L 713 226" stroke={INK} sw={2.2} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 2.5)}>
        <Draw on={beat >= 1} delay={dl(1, 2.5)} d="M 713 215 A 11 11 0 1 1 712.9 215" stroke={INK} sw={1.8} dur={0.4} fill={AMBER_DARK} />
      </Fade>

      {/* beat 2 — the setup dimensions */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={665} y={106} size={12} fill={INK} anchor="start">
          θ
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.9)}>
        <T x={688} y={155} size={12} fill={INK} anchor="start">
          L
        </T>
      </Fade>

      {/* beat 3 — resolving gravity */}
      <Draw on={beat >= 3} delay={dl(3, 0.3)} d={arrowD(713, 226, 713, 296)} stroke={INK} sw={2.2} dur={0.4} />
      <Draw on={beat >= 3} delay={dl(3, 0.8)} d={arrowD(713, 226, 740, 284)} stroke={MUTED} sw={2} dur={0.4} />
      <Draw on={beat >= 3} delay={dl(3, 1.3)} d={arrowD(713, 226, 686, 238)} stroke={RED} sw={2.6} dur={0.4} />
      <Draw on={beat >= 3} delay={dl(3, 1.8)} d={arrowD(713, 226, 694, 185)} stroke={MUTED} sw={1.8} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 2.3)}>
        <T x={713} y={310} size={12} fill={INK}>
          mg
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.6)}>
        <T x={748} y={292} size={11} fill={INK} anchor="start">
          mg cosθ
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.9)}>
        <T x={672} y={252} size={11} fill={RED} anchor="end" weight={700}>
          mg sinθ
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 3.2)}>
        <T x={716} y={196} size={11} fill={INK} anchor="start">
          T
        </T>
      </Fade>

      {/* beat 4 — the small-angle magic */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={70} y={115} size={13} fill={INK} anchor="start" weight={700}>
          F = −mg sinθ ≈ −mgθ = −mg(s/L) = −(mg/L)s
        </T>
      </Fade>

      {/* beat 5 — the hero result */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Draw
          on={beat >= 5}
          delay={dl(5, 0.3)}
          d="M 84 140 h 282 q 14 0 14 14 v 27 q 0 14 -14 14 h -282 q -14 0 -14 -14 v -27 q 0 -14 14 -14"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.1)}>
        <T x={225} y={174} size={18} fill={INK} weight={800}>
          ω² = g/L ⇒ T = 2π√(L/g)
        </T>
      </Fade>

      {/* beat 6 — watch the mass vanish, high emphasis */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={70} y={235} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "k = mg/L; comparing ω²=k/m makes the mass cancel",
            "k = mg/L; ω²=k/m se compare karo to mass cancel ho jaati hai"
          )}
        </T>
      </Fade>

      {/* beat 7 — why: gravity scales with mass like inertia */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={70} y={275} size={12} fill={INK} script anchor="start">
          {t(
            "gravity scales with m exactly like inertia ⇒ weight irrelevant",
            "gravity mass ke saath waise hi scale karti hai jaise inertia ⇒ weight irrelevant"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
