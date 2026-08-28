/**
 * Ch07 · Section 64 — "Weighing the Earth once G is known"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 9.3, 16.73, 23.89, 36.44, 49.75, 62.72, 63.72]):
 *  0 title + Earth diagram
 *  1 amber: g, R, G → everything about the Earth's bulk
 *  2 setup: g = GM/R²
 *  3 green box: M = gR²/G ≈ 6×10²⁴ kg
 *  4 red: weighed the planet without leaving the ground
 *  5 density formula: ρ = 3g/4πGR
 *  6 amber chip: Cavendish's real goal — 5.5× water
 *  7 green margin: hint of the iron core
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  Earth c(200,300) r90 · caption cx200 bl420
 *  right col x480: b2 line bl150 · b3 green box x480..860 y175..227(bl207) ·
 *  b4 bar x460 y250..302 lines bl270/296
 *  b5 line st x480 bl340
 *  b6 chip x480 y365 w340 h34
 *  b7 bar x66 y440..492 lines bl460/486
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  Chip,
  T,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch07Sec64({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — from surface gravity to mass */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "From surface gravity to the Earth's mass",
            "Surface gravity se Earth ka mass"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 1)}
        d="M 110 300 A 90 90 0 1 1 109.9 300"
        stroke={INK}
        sw={2.4}
        dur={0.8}
        fill={CREAM}
      />

      {/* beat 1 — everything about the Earth's bulk */}
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <T x={200} y={420} size={12} fill={AMBER_DARK} script>
          {t(
            "g, R, and now G → the Earth's whole bulk",
            "g, R, aur ab G → Earth ka poora bulk"
          )}
        </T>
      </Fade>

      {/* beat 2 — set up */}
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={480} y={150} size={15} fill={INK} anchor="start" weight={700}>
          g = GM ⁄ R²
        </T>
      </Fade>

      {/* beat 3 — the result */}
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <Draw
          on={beat >= 3}
          delay={dl(3, 0.5)}
          d="M 492 175 h 366 q 12 0 12 12 v 28 q 0 12 -12 12 h -366 q -12 0 -12 -12 v -28 q 0 -12 12 -12"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.2)}>
        <T x={675} y={207} size={16} fill={INK} weight={800}>
          M = gR² ⁄ G ≈ 6×10²⁴ kg
        </T>
      </Fade>

      {/* beat 4 — never left the ground */}
      <Draw on={beat >= 4} delay={dl(4, 0.5)} d="M 460 250 v 52" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 1.2)}>
        <T x={478} y={270} size={13} fill={RED} script anchor="start">
          {t(
            "weighed the WHOLE planet without leaving the ground",
            "poora planet tola, zameen chhode bina"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 4)}>
        <T x={478} y={296} size={13} fill={RED} script anchor="start">
          {t(
            "just a falling apple, R, and a lab value of G",
            "sirf ek girta seb, R, aur G ki lab value"
          )}
        </T>
      </Fade>

      {/* beat 5 — density formula */}
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={480} y={340} size={15} fill={INK} anchor="start" weight={700}>
          ρ = 3g ⁄ 4πGR
        </T>
      </Fade>

      {/* beat 6 — Cavendish's real goal */}
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <Chip x={480} y={365} w={340} h={34} fill={CREAM} stroke={AMBER_DARK} textFill={AMBER_DARK} size={13}>
          {t(
            "Cavendish's real goal: ρ ≈ 5.5× water",
            "Cavendish ka asli goal: ρ ≈ 5.5× water"
          )}
        </Chip>
      </Fade>

      {/* beat 7 — hint of the iron core */}
      <Draw on={beat >= 7} delay={dl(7, 0.5)} d="M 66 440 v 52" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={84} y={460} size={13} fill={GREEN} script anchor="start">
          {t(
            "surface rock is only ~half as dense —",
            "surface rock sirf ~aadha dense hai —"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 4)}>
        <T x={84} y={486} size={13} fill={GREEN} script anchor="start">
          {t(
            "the first hint of the Earth's IRON CORE",
            "Earth ke IRON CORE ka pehla sanket"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
