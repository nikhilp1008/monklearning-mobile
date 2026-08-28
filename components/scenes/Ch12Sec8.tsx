/**
 * Ch12 · Section 8 — Worked example [JEE Advanced]: liquid nitrogen spacing vs gas
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 21.76, 33.62, 47.1, 48.1, 49.1, 50.1]):
 *  0 title + problem (ρ, M given; compare to gas 33 Å) · 1 recipe reversed:
 *    density → packing → cube-root spacing · 2 n ≈1.74×10²⁸/m³ (1000× denser)
 *    · 3 spacing ≈3.9×10⁻¹⁰ m = 3.9 Å · 4 THE COMPARISON: liquid (tight dots,
 *    touching) vs gas (sparse dots, far apart) panels · 5 ×8–9 closer arrow
 *    · 6 verdict: ideal-gas model fails for liquid, forces dominate
 *
 * Layout plan (Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | title (script 24, red)          | T mid | x230..850 y37..80 (bl68)
 *  b0 | problem (14, ink)               | T mid | x540 y100
 *  b1 | recipe (14, ink, script)        | T mid | x540 y132
 *  b2 | n line (16, ink)                | T mid | x540 y164
 *  b3 | spacing line (16, amber_dark)   | T mid | x540 y196
 *  b4 | LIQUID panel (w330) + dots+capt | Draw  | x140..470 y250..400
 *  b4 | GAS panel (w330) + dots+capt    | Draw  | x610..940 y250..400
 *  b5 | "×8–9 closer" arrow + label     | Draw  | (610,325)→(470,325) y308
 *  b6 | verdict (script 17, red)        | T mid | x540 y462
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
  arrowD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch12Sec8({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={24} fill={RED} script>
          {t("liquid nitrogen: spacing vs gas [JEE Advanced]", "liquid nitrogen: spacing vs gas [JEE Advanced]")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={100} size={14} fill={INK} script>
          {t(
            "ρ = 810 kg/m³, M = 28 g/mol ⇒ n, spacing? compare to gas ≈33 Å",
            "ρ = 810 kg/m³, M = 28 g/mol ⇒ n, spacing? gas ≈33 Å se compare"
          )}
        </T>
      </Fade>

      {/* beat 1 — same recipe, reversed */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={540} y={132} size={14} fill={INK} script>
          {t(
            "same recipe, run backwards: density → packing → cube-root spacing",
            "same recipe, ulta: density → packing → cube-root spacing"
          )}
        </T>
      </Fade>

      {/* beat 2 — number density */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={164} size={16} fill={INK}>
          n = ρNₐ/M ≈ 1.74×10²⁸ /m³ (1000× denser than gas)
        </T>
      </Fade>

      {/* beat 3 — spacing */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={196} size={16} fill={AMBER_DARK}>
          spacing = n^(−1/3) ≈ 3.9×10⁻¹⁰ m ≈ 3.9 Å
        </T>
      </Fade>

      {/* beat 4 — THE COMPARISON: liquid (touching) vs gas (far apart) */}
      <Draw on={beat >= 4} delay={dl(4, 0.1)} d="M 140 250 h 330 v 150 h -330 z" stroke={INK} sw={2.2} dur={0.8} />
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={305} y={278} size={17} fill={INK} weight={800}>
          LIQUID N₂
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <G>
          {[300, 320, 340, 360].map((y) =>
            [190, 250, 310, 370].map((x) => (
              <Circle key={`${x}-${y}`} cx={x} cy={y} r={9} fill={INK} />
            ))
          )}
        </G>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.4)}>
        <T x={305} y={388} size={13} fill={INK} script>
          {t("≈3.9 Å apart — touching", "≈3.9 Å apart — touching")}
        </T>
      </Fade>

      <Draw on={beat >= 4} delay={dl(4, 3)} d="M 610 250 h 330 v 150 h -330 z" stroke={INK} sw={2.2} dur={0.8} />
      <Fade on={beat >= 4} delay={dl(4, 3.9)}>
        <T x={775} y={278} size={17} fill={INK} weight={800}>
          GAS (STP)
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 4.4)}>
        <G>
          {[
            [660, 310],
            [900, 320],
            [770, 350],
            [700, 375],
            [890, 375],
            [800, 305],
          ].map(([x, y]) => (
            <Circle key={`${x}-${y}`} cx={x} cy={y} r={4} fill={MUTED} />
          ))}
        </G>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 5)}>
        <T x={775} y={388} size={13} fill={INK} script>
          {t("≈33 Å apart — far apart", "≈33 Å apart — far apart")}
        </T>
      </Fade>

      {/* beat 5 — the compression arrow */}
      <Draw on={beat >= 5} delay={dl(5, 0.3)} d={arrowD(600, 325, 480, 325)} stroke={GREEN} sw={2.6} dur={0.6} />
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        <T x={540} y={308} size={15} fill={GREEN} script weight={700}>
          {t("liquefaction: ~8–9× closer", "liquefaction: ~8–9× closer")}
        </T>
      </Fade>

      {/* beat 6 — verdict */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={462} size={17} fill={RED} script>
          {t(
            "ideal-gas model fails for liquid — forces now dominate",
            "ideal-gas model liquid ke liye fail — forces ab dominate"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
