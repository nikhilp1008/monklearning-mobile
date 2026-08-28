/**
 * Ch12 · Section 11 — "When a real gas behaves ideally"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 13.4, 31.83, 32.83, 33.83, 34.83, 35.83]):
 *  0 title + underline · 1 low P spreads out / high T overwhelms pull · 2 THE
 *    TWO PANELS: far-apart-&-fast → IDEAL vs squeezed-&-chilled → condenses
 *    · 3 three failure zones (red tags) · 4 real examples (H2/He vs H2O/CO2)
 *    · 5 fixed gas ⇒ 3 state numbers P,V,T · 6 master equation PV = nRT
 *
 * Layout plan (Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | title (script 25, red)          | T mid | x250..830 y37..80 (bl68)
 *  b0 | underline                        | Draw  | y92 x330..750
 *  b1 | reasoning (15, ink, script)      | T mid | x540 y106
 *  b2 | LEFT panel (w340) sparse+streaks | Draw  | x120..460 y148..278
 *  b2 | RIGHT panel (w340) tight cluster | Draw  | x620..960 y148..278
 *  b2 | IDEAL / condenses tag chips      | Chip  | y286..318 x200/700
 *  b3 | 3 fail tags (13, red)            | Chip  | y350..380 x110/390/700
 *  b4 | example chips ×2                 | Chip  | y388..420 x200/600
 *  b5 | state-vars line (16, ink)        | T mid | x540 y440
 *  b6 | equation chip "PV=nRT"           | Chip  | x440..640 y468..510
 *  b6 | caption (14, green, script)      | T mid | x540 y540
 */

import React from "react";
import { Circle, G, Line } from 'react-native-svg';
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
  AMBER,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch12Sec11({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={25} fill={RED} script>
          {t("when does a real gas behave ideally?", "real gas kab ideal jaisa behave karta hai?")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.3)} d="M 330 92 C 420 88, 660 96, 750 90" stroke={RED} sw={2.4} dur={0.7} />

      {/* beat 1 — reasoning */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={540} y={106} size={15} fill={INK} script>
          {t(
            "low P: molecules spread out · high T: KE overwhelms any pull",
            "low P: molecules spread out · high T: KE pull ko overwhelm kare"
          )}
        </T>
      </Fade>

      {/* beat 2 — THE TWO PANELS */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={290} y={138} size={15} fill={INK} weight={700}>
          {t("far apart & fast", "door aur fast")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.5)} d="M 120 148 h 340 v 130 h -340 z" stroke={GREEN} sw={2.2} dur={0.9} />
      <Fade on={beat >= 2} delay={dl(2, 1.5)}>
        <G>
          {[
            [170, 180],
            [400, 190],
            [280, 220],
            [200, 250],
            [390, 250],
            [300, 165],
          ].map(([x, y]) => (
            <G key={`${x}-${y}`}>
              <Line x1={x - 16} y1={y - 8} x2={x - 5} y2={y - 3} stroke={MUTED} strokeWidth={1.6} />
              <Circle cx={x} cy={y} r={6} fill={GREEN} />
            </G>
          ))}
        </G>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.6)}>
        <Chip x={210} y={286} w={160} h={32} fill={GREEN} textFill="#fff" size={16} script={false}>
          IDEAL
        </Chip>
      </Fade>

      <Fade on={beat >= 2} delay={dl(2, 3.2)}>
        <T x={790} y={138} size={15} fill={INK} weight={700}>
          {t("squeezed & chilled", "squeezed aur chilled")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 3.7)} d="M 620 148 h 340 v 130 h -340 z" stroke={RED} sw={2.2} dur={0.9} />
      <Fade on={beat >= 2} delay={dl(2, 4.7)}>
        <G>
          {[200, 222, 244].map((y) =>
            [660, 710, 760, 810, 860, 910].map((x) => (
              <Circle key={`${x}-${y}`} cx={x} cy={y} r={7} fill={RED} />
            ))
          )}
        </G>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 5.6)}>
        <Chip x={710} y={286} w={180} h={32} fill={RED} textFill="#fff" size={15} script={false}>
          {t("condenses", "condense hota")}
        </Chip>
      </Fade>

      {/* beat 3 — three failure zones */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <Chip x={110} y={350} w={230} h={30} fill={CREAM} stroke={RED} textFill={RED} size={13} script={false}>
          {t("near condensation", "condensation ke paas")}
        </Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <Chip x={390} y={350} w={280} h={30} fill={CREAM} stroke={RED} textFill={RED} size={13} script={false}>
          {t("very high P (finite volume)", "bahut high P (finite volume)")}
        </Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.7)}>
        <Chip x={720} y={350} w={250} h={30} fill={CREAM} stroke={RED} textFill={RED} size={13} script={false}>
          {t("very low T (attraction wins)", "bahut low T (attraction jeete)")}
        </Chip>
      </Fade>

      {/* beat 4 — real examples */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <Chip x={200} y={388} w={280} h={32} fill={CREAM} stroke={GREEN} textFill={GREEN} size={14} script={false}>
          H₂, He — near-ideal
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.1)}>
        <Chip x={550} y={388} w={330} h={32} fill={CREAM} stroke={RED} textFill={RED} size={14} script={false}>
          {t("H₂O vapour, CO₂ — deviate", "H₂O vapour, CO₂ — deviate karte")}
        </Chip>
      </Fade>

      {/* beat 5 — state variables */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={440} size={16} fill={INK}>
          {t("fixed gas ⇒ only 3 numbers: P, V, T", "fixed gas ⇒ sirf 3 numbers: P, V, T")}
        </T>
      </Fade>

      {/* beat 6 — master equation */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <Chip x={440} y={468} w={200} h={42} fill={GREEN} textFill="#fff" size={22} script={false}>
          PV = nRT
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.4)}>
        <T x={540} y={540} size={14} fill={GREEN} script>
          {t("holds them all at once", "sabko ek saath rakhta hai")}
        </T>
      </Fade>
    </Scene>
  );
}
