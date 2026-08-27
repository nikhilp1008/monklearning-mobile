/**
 * C11 Ch07 · Section 29 — Worked example (JEE Main): the Zn-Ag cell — E°cell and ΔG°
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (en [0, 9.3, 26.03, 37.97, 49.49, 62.72, 75.61, 94.04, 103.59]):
 *  0 heading: compute E°cell and ΔG°
 *  1 given: Zn|Zn²⁺(1M) ‖ Ag⁺(1M)|Ag; E°(Ag⁺/Ag)=+0.80, E°(Zn²⁺/Zn)=−0.76V
 *  2 balanced reaction: Zn + 2Ag⁺ → Zn²⁺ + 2Ag
 *  3 E°cell = E°cathode−E°anode = 0.80−(−0.76) = 1.56V
 *  4 red-margin: n=2 — reduces TWO Ag⁺, even though Ag half shows 1e⁻
 *  5 diagram: compact Zn-Ag cell, wire "1.56V", salt bridge
 *  6 ΔG° = −nFE°cell = −(2)(96500)(1.56)
 *  7 ΔG° = −3.01×10⁵ J ≈ −301 kJ
 *  8 answer (green): spontaneous — E°cell=1.56V, ΔG°≈−301 kJ
 *  (everything stays)
 *
 * Layout plan (Anek sans bl−0.78s..+0.31s; longer language counts):
 *  b1 | given (sans15)          | T mid | x540 bl134
 *  b2 | reaction (sans17)       | T mid | x540 bl168
 *  b3 | E°cell calc (sans16)    | T mid | x540 bl202
 *  b4 | margin bar x64 y226..260, text (sans15 red) x80 bl244
 *  b5 | beakers x260..350/650..740 y330..390; electrodes→wire y300; "1.56V" bl290;
 *     | salt bridge arc; labels bl410
 *  b6 | ΔG° formula (sans16)    | T mid | x540 bl450
 *  b7 | ΔG° result (sans17 700) | T mid | x540 bl482
 *  b8 | answer (sans16 700 grn) | T mid | x540 bl515
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  INK,
  AMBER_DARK,
  GREEN,
  RED,
  MUTED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch07Sec29({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("n = 2 silver ions reduced, not 1 electron", "n = 2 silver ions reduce hue, 1 electron nahi")}
        </T>
      </Fade>

      {/* ===== beat 0 — heading ===== */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={100} size={18} fill={INK} weight={700}>
          {t("compute E°cell and ΔG°", "E°cell aur ΔG° compute karo")}
        </T>
      </Fade>

      {/* ===== beat 1 — given ===== */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={134} size={15} fill={INK}>
          Zn | Zn²⁺(1M) ‖ Ag⁺(1M) | Ag    E°(Ag⁺/Ag)=+0.80V, E°(Zn²⁺/Zn)=−0.76V
        </T>
      </Fade>

      {/* ===== beat 2 — balanced reaction ===== */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={168} size={17} fill={INK} weight={700}>
          Zn + 2Ag⁺ → Zn²⁺ + 2Ag
        </T>
      </Fade>

      {/* ===== beat 3 — E°cell ===== */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={202} size={16} fill={INK}>
          E°cell = E°cathode − E°anode = 0.80 − (−0.76) = 1.56V
        </T>
      </Fade>

      {/* ===== beat 4 — n=2 warning ===== */}
      <Draw on={beat >= 4} delay={dl(4, 0.2)} d="M 64 226 L 64 260" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 0.7)}>
        <T x={80} y={244} size={15} fill={RED} weight={700} anchor="start">
          {t("n = 2: reduces TWO Ag⁺, even though the Ag half shows 1e⁻", "n = 2: DO Ag⁺ reduce hote, Ag half mein 1e⁻ dikhe tab bhi")}
        </T>
      </Fade>

      {/* ===== beat 5 — cell diagram ===== */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M 260 330 h 90 v 60 h -90 Z" stroke={INK} sw={2} dur={0.5} />
      <Draw on={beat >= 5} delay={dl(5, 0.4)} d="M 650 330 h 90 v 60 h -90 Z" stroke={INK} sw={2} dur={0.5} />
      <Draw on={beat >= 5} delay={dl(5, 0.7)} d="M 305 390 L 305 300" stroke={AMBER_DARK} sw={2.6} dur={0.4} />
      <Draw on={beat >= 5} delay={dl(5, 0.9)} d="M 695 390 L 695 300" stroke={AMBER_DARK} sw={2.6} dur={0.4} />
      <Draw
        on={beat >= 5}
        delay={dl(5, 1.2)}
        d="M 305 300 L 695 300 M 683 294 L 695 300 L 683 306"
        stroke={INK}
        sw={2}
        dur={0.6}
      />
      <Fade on={beat >= 5} delay={dl(5, 1.8)}>
        <T x={500} y={288} size={15} fill={INK} weight={700}>
          1.56 V
        </T>
      </Fade>
      <Draw
        on={beat >= 5}
        delay={dl(5, 2.2)}
        d="M 350 360 Q 500 320 650 360"
        stroke={MUTED}
        sw={2.2}
        dur={0.6}
      />
      <Fade on={beat >= 5} delay={dl(5, 2.8)}>
        <T x={305} y={410} size={13} fill={RED} weight={700}>
          Zn ({t("anode", "anode")})
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 3)}>
        <T x={695} y={410} size={13} fill={GREEN} weight={700}>
          Ag ({t("cathode", "cathode")})
        </T>
      </Fade>

      {/* ===== beat 6 — free energy formula ===== */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={450} size={16} fill={INK}>
          ΔG° = −nFE°cell = −(2)(96500)(1.56)
        </T>
      </Fade>

      {/* ===== beat 7 — free energy result ===== */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={482} size={17} fill={INK} weight={700}>
          ΔG° = −3.01 × 10⁵ J ≈ −301 kJ
        </T>
      </Fade>

      {/* ===== beat 8 — answer ===== */}
      <Fade on={beat >= 8} delay={dl(8, 0.3)}>
        <T x={540} y={515} size={16} fill={GREEN} weight={700}>
          {t("spontaneous (ΔG°<0)  ·  E°cell = 1.56V, ΔG° ≈ −301 kJ", "spontaneous (ΔG°<0)  ·  E°cell = 1.56V, ΔG° ≈ −301 kJ")}
        </T>
      </Fade>
    </Scene>
  );
}
