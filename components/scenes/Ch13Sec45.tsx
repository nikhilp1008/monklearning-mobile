/**
 * Ch13 · Section 45 — "The reference circle: SHM is a shadow" (opens Reference Circle & Superposition)
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 12.1, 34.8, 40.85, 59.0, 79.43, 89.64, 97.2]):
 *  0 shelf
 *  1 bead circulates on turntable radius A; shadow on wall = SHM
 *  2 diagram: circling bead, radius/phasor, dashed drop, shadow on the diameter
 *  3 not analogy — IDENTITY: A=radius, ω=circulation rate, phase=angle swept
 *  4 bead: constant speed. shadow: still at turns, sprints at center
 *  5 hero (high): phasor = rotating radius ⇒ add SHMs like vectors
 *  6 rigorous test: the differential equation itself
 *  7 hero (high): ẍ = −ω²x ⟺ SHM
 *
 * Layout plan (Anek bl−0.78s..+0.31s):
 *  b0 | shelf y80 x60..1020
 *  b1 | st x70 bl105 size12 · st x70 bl133 size12
 *  b2 | circle c(760,220) r90 · track y220 x670..850 · radius 760,220→817.87,151.06 ·
 *      bead(817.87,151.06) r7 · θ-arc 785,220→776.1,200.85 · "θ" x778 bl213 · "A" x795 bl180 ·
 *      dashed drop 817.87,151.06→817.87,220 · shadow(817.87,220) r6 · "shadow" cx818 bl238 · "bead" x825 bl145
 *  b3 | script11 st x70 bl175
 *  b4 | st x70 bl210 size11
 *  b5 | box x70..500 y235..285 rx14 · line cx285 bl265 size14
 *  b6 | script12 st x70 bl325
 *  b7 | box x70..430 y355..420 rx16 · line cx250 bl396 size24
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

export default function Ch13Sec45({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t("Uniform circular motion, seen edge-on", "Uniform circular motion, edge-on dekha hua")}
        </T>
      </Fade>

      {/* beat 0 — the shelf */}
      <Draw on={beat >= 0} delay={dl(0, 0.3)} d="M 60 80 L 1020 80" stroke={INK} sw={1.4} dur={0.6} />

      {/* beat 1 — the setup */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={70} y={105} size={12} fill={INK} anchor="start">
          {t("bead circulates on turntable, radius A, ω rad/s", "bead turntable par circulate karta hai, radius A, ω rad/s")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={70} y={133} size={12} fill={INK} anchor="start">
          {t("shadow on wall runs back and forth = SHM", "wall par shadow aage peeche daudti hai = SHM")}
        </T>
      </Fade>

      {/* beat 2 — the reference circle */}
      <Draw on={beat >= 2} delay={dl(2, 0.3)} d="M 760 130 A 90 90 0 1 1 759.9 130" stroke={INK} sw={1.8} dur={0.8} />
      <Draw on={beat >= 2} delay={dl(2, 1.2)} d="M 670 220 H 850" stroke={INK} sw={1.8} dur={0.4} />
      <Draw on={beat >= 2} delay={dl(2, 1.8)} d={arrowD(760, 220, 817.87, 151.06)} stroke={AMBER_DARK} sw={2.2} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 2.5)}>
        <Circle cx={817.87} cy={151.06} r={7} fill={AMBER_DARK} stroke={INK} strokeWidth={1.2} />
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 2.8)} d="M 785 220 A 25 25 0 0 0 776.1 200.85" stroke={INK} sw={1.4} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 3.3)}>
        <T x={778} y={213} size={11} fill={INK} anchor="start">
          θ
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3.5)}>
        <T x={795} y={180} size={12} fill={AMBER_DARK} anchor="start">
          A
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3.7)}>
        <Path d="M 817.87 151.06 V 220" stroke={MUTED} strokeWidth={1.4} strokeDasharray="4 4" fill="none" />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3.9)}>
        <Circle cx={817.87} cy={220} r={6} fill={RED} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 4.1)}>
        <T x={818} y={238} size={11} fill={RED}>
          {t("shadow", "shadow")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 4.3)}>
        <T x={825} y={145} size={10} fill={INK} anchor="start">
          {t("bead", "bead")}
        </T>
      </Fade>

      {/* beat 3 — an identity, not an analogy */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={70} y={175} size={11} fill={INK} script anchor="start">
          {t(
            "not analogy — IDENTITY: A=radius, ω=circulation rate, phase=angle swept",
            "analogy nahi — IDENTITY: A=radius, ω=circulation rate, phase=swept angle"
          )}
        </T>
      </Fade>

      {/* beat 4 — the twist */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={70} y={210} size={11} fill={INK} anchor="start">
          {t(
            "bead: constant speed. shadow: still at turns, sprints at center",
            "bead: constant speed. shadow: turns pe still, center pe sprint"
          )}
        </T>
      </Fade>

      {/* beat 5 — the phasor, high emphasis */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Draw
          on={beat >= 5}
          delay={dl(5, 0.3)}
          d="M 84 235 h 402 q 14 0 14 14 v 22 q 0 14 -14 14 h -402 q -14 0 -14 -14 v -22 q 0 -14 14 -14"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.1)}>
        <T x={285} y={265} size={14} fill={INK} weight={800}>
          {t("phasor = rotating radius ⇒ we can add SHMs like vectors", "phasor = rotating radius ⇒ hum SHMs ko vectors ki tarah add karte hain")}
        </T>
      </Fade>

      {/* beat 6 — the rigorous test */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={70} y={325} size={12} fill={INK} script anchor="start">
          {t("rigorous test: the differential equation itself", "rigorous test: differential equation khud hi")}
        </T>
      </Fade>

      {/* beat 7 — the definitive formula, high emphasis */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Draw
          on={beat >= 7}
          delay={dl(7, 0.3)}
          d="M 84 355 h 282 q 16 0 16 16 v 33 q 0 16 -16 16 h -282 q -16 0 -16 -16 v -33 q 0 -16 16 -16"
          stroke={GREEN}
          sw={2.6}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.1)}>
        <T x={250} y={396} size={24} fill={INK} weight={800}>
          ẍ = −ω²x  ⟺  SHM
        </T>
      </Fade>
    </Scene>
  );
}
