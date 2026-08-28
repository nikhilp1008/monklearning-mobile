/**
 * Ch12 · Section 28 — "What temperature really is"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 1, 2, 3, 25.87, 42.0, 66.83]):
 *  0 title + underline · 1 T = average KE (hot⇒faster, cool⇒slower) · 2 THE
 *    PANELS: cool (short arrows) vs hot (long arrows) · 3 bell curve: 3 speed
 *    measures (vp, v̄, vrms) — departing-crowd analogy · 4 why three? Maxwell-
 *    Boltzmann, always vrms>v̄>vp · 5 escape speed: Earth keeps N2/O2, Moon
 *    lost its air · 6 trap: ⟨velocity⟩=0 (vector) but ⟨speed⟩≠0 (scalar)
 *
 * Layout plan (Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | title (script 24, red)          | T mid | x270..810 y33..72 (bl60)
 *  b0 | underline                        | Draw  | y82 x330..750
 *  b1 | reasoning (13, ink, script)     | T mid | x540 y98
 *  b2 | COOL panel (short arrows)        | Draw  | x120..460 y120..220
 *  b2 | HOT panel (long arrows)          | Draw  | x620..960 y120..220
 *  b2 | caption (12, amber_dark)        | T mid | x540 y245
 *  b3 | bell curve + 3 ticks             | Draw  | x140..480 y245..340
 *  b3 | caption (12, muted, script)     | T mid | x310 y380
 *  b4 | why-three line (13, ink, script)| T mid | x540 y405
 *  b5 | Earth/Moon chips ×2              | Chip  | x230..500 / x580..850 y428..462
 *  b6 | trap (14, red)                  | T mid | x540 y500
 */

import React from "react";
import { Circle, G } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  arrowD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch12Sec28({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={60} size={24} fill={RED} script>
          {t("what temperature really is", "temperature asal mein kya hai")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.3)} d="M 330 82 C 420 78, 660 86, 750 80" stroke={RED} sw={2.2} dur={0.6} />

      {/* beat 1 — reasoning */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={540} y={98} size={13} fill={INK} script>
          {t(
            "T = average KE of molecules — hot ⇒ faster, cool ⇒ slower",
            "T = molecules ki average KE — hot ⇒ tez, cool ⇒ dheema"
          )}
        </T>
      </Fade>

      {/* beat 2 — THE PANELS: cool vs hot */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={290} y={112} size={14} fill={INK} weight={700}>
          {t("COOL — slow", "COOL — dheema")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.5)} d="M 120 120 h 340 v 100 h -340 z" stroke={INK} sw={2.2} dur={0.8} />
      {[
        [180, 150, 210, 150],
        [280, 180, 305, 175],
        [350, 155, 375, 160],
        [220, 195, 245, 200],
      ].map(([x, y, ax, ay], i) => (
        <G key={`${x}-${y}`}>
          <Fade on={beat >= 2} delay={dl(2, 1 + i * 0.2)}>
            <Circle cx={x} cy={y} r={5} fill={AMBER_DARK} />
          </Fade>
          <Draw on={beat >= 2} delay={dl(2, 1.2 + i * 0.2)} d={arrowD(x, y, ax, ay)} stroke={AMBER_DARK} sw={1.6} dur={0.3} />
        </G>
      ))}

      <Fade on={beat >= 2} delay={dl(2, 2.2)}>
        <T x={790} y={112} size={14} fill={INK} weight={700}>
          {t("HOT — fast", "HOT — tez")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 2.6)} d="M 620 120 h 340 v 100 h -340 z" stroke={RED} sw={2.2} dur={0.8} />
      {[
        [650, 150, 730, 150],
        [760, 180, 830, 168],
        [840, 155, 910, 168],
        [680, 195, 750, 210],
      ].map(([x, y, ax, ay], i) => (
        <G key={`${x}-${y}`}>
          <Fade on={beat >= 2} delay={dl(2, 3.2 + i * 0.2)}>
            <Circle cx={x} cy={y} r={5} fill={RED} />
          </Fade>
          <Draw on={beat >= 2} delay={dl(2, 3.4 + i * 0.2)} d={arrowD(x, y, ax, ay)} stroke={RED} sw={1.6} dur={0.3} />
        </G>
      ))}
      <Fade on={beat >= 2} delay={dl(2, 4.4)}>
        <T x={540} y={245} size={12} fill={AMBER_DARK} script>
          {t("avg KE per molecule ∝ T", "avg KE per molecule ∝ T")}
        </T>
      </Fade>

      {/* beat 3 — bell curve: three speed measures */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 0.2)}
        d="M 140 340 C 180 335, 220 260, 270 250 C 320 242, 360 270, 420 320 C 440 330, 460 337, 480 340"
        stroke={INK}
        sw={2.2}
        dur={1.1}
      />
      <Draw on={beat >= 3} delay={dl(3, 1.5)} d="M 270 340 V 305" stroke={AMBER_DARK} sw={1.6} dur={0.3} />
      <Draw on={beat >= 3} delay={dl(3, 1.8)} d="M 310 340 V 285" stroke={AMBER_DARK} sw={1.6} dur={0.3} />
      <Draw on={beat >= 3} delay={dl(3, 2.1)} d="M 350 340 V 297" stroke={AMBER_DARK} sw={1.6} dur={0.3} />
      <Fade on={beat >= 3} delay={dl(3, 2.6)}>
        <T x={270} y={358} size={12} fill={AMBER_DARK}>
          vₚ
        </T>
        <T x={310} y={358} size={12} fill={AMBER_DARK}>
          v̄
        </T>
        <T x={352} y={358} size={12} fill={AMBER_DARK}>
          vrms
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 3.2)}>
        <T x={310} y={380} size={12} fill={MUTED} script>
          {t("sprint · amble · dawdle", "sprint · amble · dawdle")}
        </T>
      </Fade>

      {/* beat 4 — why three */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={405} size={13} fill={INK} script>
          {t(
            "collisions share energy into a stable spread — always vrms > v̄ > vₚ",
            "collisions energy baant dete — hamesha vrms > v̄ > vₚ"
          )}
        </T>
      </Fade>

      {/* beat 5 — escape speed application */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Chip x={230} y={428} w={270} h={34} fill={GREEN} textFill="#fff" size={14} script={false}>
          {t("Earth: keeps N₂, O₂", "Earth: N₂, O₂ rakhta")}
        </Chip>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.1)}>
        <Chip x={580} y={428} w={270} h={34} fill={CREAM} stroke={RED} textFill={RED} size={14} script={false}>
          {t("Moon: lost its air", "Moon: hawa kho di")}
        </Chip>
      </Fade>

      {/* beat 6 — the trap */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={500} size={14} fill={RED}>
          {t(
            "⟨velocity⟩ (vector) = 0, but ⟨speed⟩ (scalar) ≠ 0 — it's about SPEED",
            "⟨velocity⟩ (vector) = 0, par ⟨speed⟩ (scalar) ≠ 0 — SPEED ki baat"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
