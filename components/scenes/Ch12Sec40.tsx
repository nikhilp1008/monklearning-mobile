/**
 * Ch12 · Section 40 — "Motion between collisions: the mean free path"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 17.32, 18.32, 19.32, 20.32, 21.32, 42.23, 59.64]):
 *  0 title + intro (frantic zig-zag) · 1 λ definition, ~100×molecular size ·
 *    2 THE PICTURE: zig-zag path, one segment = λ · 3 cylinder-sweep
 *    derivation ⇒ λ=1/(nπd²) · 4 relative speed ⇒ √2 factor, λ=kT/(√2πd²P)
 *    · 5 dependences (∝T, ∝1/P, ∝1/d²) · 6 collision frequency = v̄/λ · 7
 *    ties the chapter together
 *
 * Layout plan (Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | title (script 20, red)          | T mid | x280..800 y31..64 (bl52)
 *  b0 | intro (12, ink, script)         | T mid | x540 y80
 *  b1 | definition (13, ink, script)    | T mid | x540 y100
 *  b2 | zig-zag path + dots + λ label   | mix   | x120..380 y115..225
 *  b3 | derivation line (13, ink)       | T mid | x540 y250
 *  b4 | refinement line (13, ink)       | T mid | x540 y274
 *  b5 | dependences line (13, ink)      | T mid | x540 y298
 *  b6 | collision-freq line (14, ink)   | T mid | x540 y326
 *  b7 | ties-together box (green)       | Chip  | x160..920 y346..390
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
  INK,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch12Sec40({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={52} size={20} fill={RED} script>
          {t("motion between collisions: the mean free path", "collisions ke beech motion: mean free path")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={78} size={12} fill={INK} script>
          {t("a molecule ricochets billions of times a second — a frantic zig-zag", "molecule billions of times/sec ricochet karta")}
        </T>
      </Fade>

      {/* beat 1 — definition */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={540} y={98} size={13} fill={INK} script>
          {t(
            "λ = average straight-line distance between collisions ≈ 100×molecular size",
            "λ = average straight-line distance collisions ke beech ≈ 100×molecular size"
          )}
        </T>
      </Fade>

      {/* beat 2 — THE PICTURE: zig-zag path, one segment = lambda */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 0.2)}
        d="M 120 165 L 220 140 L 180 195 L 280 175 L 240 222 L 340 202"
        stroke={INK}
        sw={2}
        dur={1.3}
      />
      {[
        [120, 165],
        [220, 140],
        [180, 195],
        [280, 175],
        [240, 222],
        [340, 202],
      ].map(([x, y], i) => (
        <Fade key={`${x}-${y}`} on={beat >= 2} delay={dl(2, 1.5 + i * 0.15)}>
          <Circle cx={x} cy={y} r={4.5} fill={INK} />
        </Fade>
      ))}
      <Draw on={beat >= 2} delay={dl(2, 2.5)} d="M 280 175 L 240 222" stroke={GREEN} sw={3} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 3.1)}>
        <T x={295} y={205} size={14} fill={GREEN} weight={700}>
          λ
        </T>
      </Fade>

      {/* beat 3 — cylinder-sweep derivation */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={250} size={13} fill={INK}>
          {t(
            "sweep πd²vt, contains nπd²vt centres ⇒ λ = 1/(nπd²)",
            "sweep πd²vt, nπd²vt centres ⇒ λ = 1/(nπd²)"
          )}
        </T>
      </Fade>

      {/* beat 4 — relative speed refinement */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={274} size={13} fill={INK}>
          {t(
            "relative speed ⇒ √2 factor ⇒ λ = kʙT / (√2 πd²P)",
            "relative speed ⇒ √2 factor ⇒ λ = kʙT / (√2 πd²P)"
          )}
        </T>
      </Fade>

      {/* beat 5 — dependences */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={298} size={13} fill={AMBER_DARK}>
          {t(
            "λ ∝ T (fixed P) · λ ∝ 1/P (fixed T) · λ ∝ 1/d² (πd² = cross-section)",
            "λ ∝ T (fixed P) · λ ∝ 1/P (fixed T) · λ ∝ 1/d²"
          )}
        </T>
      </Fade>

      {/* beat 6 — collision frequency */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={326} size={14} fill={INK} weight={700}>
          {t("collision frequency = v̄/λ, mean time = λ/v̄", "collision frequency = v̄/λ, mean time = λ/v̄")}
        </T>
      </Fade>

      {/* beat 7 — ties the chapter together */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <Chip x={160} y={346} w={760} h={44} fill={GREEN} textFill="#fff" size={14} script={false}>
          {t(
            "v̄ from Maxwell · λ from geometry · n from PV=nRT — billions of collisions/sec",
            "v̄ Maxwell se · λ geometry se · n PV=nRT se — billions collisions/sec"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
