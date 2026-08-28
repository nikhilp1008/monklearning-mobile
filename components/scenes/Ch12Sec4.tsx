/**
 * Ch12 · Section 4 — "How empty a gas really is"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 12.71, 30.04, 46.17, 62.21, 78.25, 99.41]):
 *  0 title + underline · 1 number-density formulas (two chips) · 2 mean
 *    separation formula · 3 THE DIAGRAM: three stacked bars — molecular size,
 *    spacing (~10x), mean free path (~1000x) · 4 distinguish spacing vs mean
 *    free path (= struck to ≠, warning) · 5 fraction-filled mini demo (tiny
 *    dot in a container + ratio chip) · 6 mantra: each ~10x the last
 *
 * Layout plan (Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | title (script 27, red)          | T mid | x270..810 y37..85 (bl72)
 *  b0 | underline                        | Draw  | y94 x330..750
 *  b1 | chip "n0=N/V=P/(kB·T)"           | Chip  | x150..470  y112..148
 *  b1 | chip "1 mole in 22.4 L @ STP"    | Chip  | x510..870  y112..148
 *  b2 | mean-sep line (16, ink)          | T mid | x540 y178
 *  b3 | bar1 size (arrow) + label         | Draw  | y250 x150..190 · label
 *       x210..387 (14, kalam)
 *  b3 | bar2 spacing (arrow) + label      | Draw  | y310 x150..270 · label
 *       x290..444
 *  b3 | bar3 mean-free-path (arrow)+label | Draw  | y380 x150..550 · label
 *       x570..793
 *  b4 | "=" struck to "≠" mini            | T+Draw| x405..415 y329..351
 *  b4 | warning (15, red)                 | T mid | x540 y422
 *  b5 | container sq + tiny dot + chip    | mix   | x400..500 y462..522 ·
 *       chip x520..820 y475..509
 *  b6 | mantra (script 20, green, bold)   | T mid | x540 y560
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
  Chip,
  arrowD,
  crossD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch12Sec4({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={72} size={27} fill={RED} script>
          {t("how empty a gas really is", "gas asal mein kitna khaali hai")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.3)} d="M 330 94 C 420 90, 660 98, 750 92" stroke={RED} sw={2.4} dur={0.7} />

      {/* beat 1 — number density, two forms */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <Chip x={150} y={112} w={320} h={36} fill={CREAM} stroke={AMBER} textFill={INK} size={16} script={false}>
          n₀ = N/V = P / (kB·T)
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.5)}>
        <Chip x={510} y={112} w={360} h={36} fill={CREAM} stroke={AMBER} textFill={INK} size={16} script={false}>
          {t("or: 1 mole in 22.4 L @ STP", "ya: 1 mole in 22.4 L @ STP")}
        </Chip>
      </Fade>

      {/* beat 2 — mean separation */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={178} size={16} fill={INK} script>
          mean separation ≈ (1/n₀)^⅓ ≈ 10 × diameter
        </T>
      </Fade>

      {/* beat 3 — THE DIAGRAM: three stacked bars, each ~10x the last */}
      <Draw on={beat >= 3} delay={dl(3, 0.2)} d={arrowD(150, 250, 190, 250)} stroke={INK} sw={3} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 0.7)}>
        <T x={210} y={254} size={14} fill={INK} anchor="start" script>
          {t("molecular size ~ 10⁻¹⁰ m", "molecular size ~ 10⁻¹⁰ m")}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 2)} d={arrowD(150, 310, 270, 310)} stroke={AMBER_DARK} sw={3} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 2.6)}>
        <T x={290} y={314} size={14} fill={AMBER_DARK} anchor="start" script>
          {t("spacing ~ 10 × size", "spacing ~ 10 × size")}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 4)} d={arrowD(150, 380, 550, 380)} stroke={GREEN} sw={3} dur={0.9} />
      <Fade on={beat >= 3} delay={dl(3, 5.2)}>
        <T x={570} y={384} size={14} fill={GREEN} anchor="start" script>
          {t("mean free path ~ 1000 × size", "mean free path ~ 1000 × size")}
        </T>
      </Fade>

      {/* beat 4 — these are NOT the same: = struck to != */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={410} y={345} size={20} fill={INK} weight={800}>
          =
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1.2)} d={crossD(403, 329, 14, 21)} stroke={RED} sw={2.4} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <T x={540} y={425} size={15} fill={RED} script>
          {t(
            "spacing ≠ mean free path — don't mix these up!",
            "spacing ≠ mean free path — inhe mix mat karo!"
          )}
        </T>
      </Fade>

      {/* beat 5 — fraction filled: a tiny dot in a big container */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.2)}
        d="M 400 462 h 100 v 60 h -100 z"
        stroke={INK}
        sw={2}
        dur={0.6}
      />
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <Circle cx={450} cy={492} r={2.2} fill={RED} />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.4)}>
        <T x={450} y={538} size={12} fill={MUTED} script>
          {t("molar volume", "molar volume")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <Chip x={520} y={475} w={300} h={34} fill={CREAM} stroke={AMBER} textFill={INK} size={15} script={false}>
          {t("fraction filled ≈ 10⁻³ – 10⁻⁴", "fraction filled ≈ 10⁻³ – 10⁻⁴")}
        </Chip>
      </Fade>

      {/* beat 6 — the mantra */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={565} size={20} fill={GREEN} script weight={700}>
          {t(
            "size · spacing · free path — each ~10× the last",
            "size · spacing · free path — har ek ~10× pichhle se"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
