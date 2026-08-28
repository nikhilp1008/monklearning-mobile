/**
 * Ch07 · Section 67 — "The Cavendish relation for G"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 6.66, 15.53, 34.3, 50.09, 51.09, 52.09, 53.09]):
 *  0 title + torsion rod diagram (two torques)
 *  1 (continues, torque labels)
 *  2 force + torque line: F = GMm/d², torque = F·L
 *  3 balance equation: (GMm/d²)L = κθ
 *  4 green box: G = κθd²/(MmL)
 *  5 amber: θ from light-spot deflection
 *  6 amber: κ from torsional period T = 2π√(I/κ)
 *  7 green margin: within 1% of modern value, 1798
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  rod M180 250 H380 · small balls (180,250)r7/(380,250)r7 ·
 *   large masses (140,270)r14/(420,230)r14 · fibre M280 150 V250 ·
 *   torque arrows curved · caption cx280 bl400
 *  right col x480: b2 line bl150 · b3 line bl195 ·
 *  b4 green box x480..820 y220..272(bl252)
 *  b5 line st x480 bl310 · b6 line st x480 bl345
 *  b7 bar x66 y440..492 lines bl460/486
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
  GREEN,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch07Sec67({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the torsion balance at equilibrium */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "Two torques balance: gravity vs the fibre",
            "Do torques balance: gravity vs fibre"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1)} d="M 280 150 V 250" stroke={MUTED} sw={1.6} dur={0.5} />
      <Draw on={beat >= 0} delay={dl(0, 1.6)} d="M 180 250 H 380" stroke={INK} sw={2.6} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 2.4)}>
        <Circle cx={180} cy={250} r={7} fill={INK} />
        <Circle cx={380} cy={250} r={7} fill={INK} />
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 3)}>
        <Circle cx={140} cy={270} r={14} fill={AMBER_DARK} />
        <Circle cx={420} cy={230} r={14} fill={AMBER_DARK} />
      </Fade>

      {/* beat 1 — the labels */}
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <T x={280} y={400} size={12} fill={INK} script>
          {t(
            "gravitational couple twists it, fibre resists",
            "gravitational couple ghumaata, fibre virodh karta"
          )}
        </T>
      </Fade>

      {/* beat 2 — force and torque */}
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={480} y={150} size={14} fill={INK} anchor="start" weight={700}>
          F = GMm ⁄ d²   torque = F·L
        </T>
      </Fade>

      {/* beat 3 — the balance */}
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={480} y={195} size={15} fill={INK} anchor="start" weight={700}>
          (GMm ⁄ d²)·L = κ·θ
        </T>
      </Fade>

      {/* beat 4 — solve for G */}
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <Draw
          on={beat >= 4}
          delay={dl(4, 0.5)}
          d="M 492 220 h 316 q 12 0 12 12 v 28 q 0 12 -12 12 h -316 q -12 0 -12 -12 v -28 q 0 -12 12 -12"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.2)}>
        <T x={650} y={252} size={17} fill={INK} weight={800}>
          G = κθd² ⁄ MmL
        </T>
      </Fade>

      {/* beat 5 — reading θ */}
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={480} y={310} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "θ from the light-spot deflection — the optical lever",
            "θ light-spot deflection se — optical lever"
          )}
        </T>
      </Fade>

      {/* beat 6 — finding κ */}
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={480} y={345} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "κ from the torsional period: T = 2π√(I⁄κ)",
            "κ torsional period se: T = 2π√(I⁄κ)"
          )}
        </T>
      </Fade>

      {/* beat 7 — an extraordinary feat */}
      <Draw on={beat >= 7} delay={dl(7, 0.5)} d="M 66 440 v 52" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={84} y={460} size={13} fill={GREEN} script anchor="start">
          {t(
            "within ~1% of the modern value —",
            "modern value ke ~1% ke andar —"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 4)}>
        <T x={84} y={486} size={13} fill={GREEN} script anchor="start">
          {t(
            "an extraordinary feat for 1798",
            "1798 ke liye ek asaadhaaran kaarnaama"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
