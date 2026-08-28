/**
 * Ch07 · Section 68 — "Mass and mean density of the Earth"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 7.59, 17.75, 25.86, 35.33, 40.45, 53.67, 60.33]):
 *  0 title
 *  1 amber: g, R, G alone → mass and density
 *  2 mass formula: M = gR²/G
 *  3 substitute numbers
 *  4 green box: M ≈ 6×10²⁴ kg
 *  5 density formula derivation: ρ = M/(4/3 πR³) = 3g/4πGR
 *  6 green box: ρ ≈ 5.5×10³ kg/m³
 *  7 red margin: 5.5× water, points to the iron core
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52
 *  b1 | line cx540 bl110
 *  b2 | line cx540 bl155
 *  b3 | line cx540 bl195
 *  b4 | green box x400..680 y220..272(bl252)
 *  b5 | line cx540 bl330 + line cx540 bl365
 *  b6 | green box x400..680 y390..442(bl422)
 *  b7 | bar x66 y480..532 lines bl500/526
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
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch07Sec68({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — two clean results */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "Two one-line results, once G is known",
            "G maloom hote hi, do one-line results"
          )}
        </T>
      </Fade>

      {/* beat 1 — g, R, G give both */}
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <T x={540} y={110} size={13} fill={AMBER_DARK} script>
          {t(
            "g, R, and G alone → mass AND mean density",
            "g, R, aur G se → mass AUR mean density"
          )}
        </T>
      </Fade>

      {/* beat 2 — the mass formula */}
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={540} y={155} size={17} fill={INK} weight={800}>
          M = gR² ⁄ G
        </T>
      </Fade>

      {/* beat 3 — substitute */}
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={540} y={195} size={13} fill={INK} weight={700}>
          g=9.8, R=6.4×10⁶ m, G=6.67×10⁻¹¹
        </T>
      </Fade>

      {/* beat 4 — the mass */}
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <Draw
          on={beat >= 4}
          delay={dl(4, 0.5)}
          d="M 412 220 h 256 q 12 0 12 12 v 28 q 0 12 -12 12 h -256 q -12 0 -12 -12 v -28 q 0 -12 12 -12"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.2)}>
        <T x={540} y={252} size={17} fill={INK} weight={800}>
          M ≈ 6×10²⁴ kg
        </T>
      </Fade>

      {/* beat 5 — the density derivation */}
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={540} y={330} size={15} fill={INK} weight={700}>
          ρ = M ⁄ (4⁄3·πR³)
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 3.5)}>
        <T x={540} y={365} size={15} fill={INK} weight={700}>
          = 3g ⁄ 4πGR
        </T>
      </Fade>

      {/* beat 6 — the density */}
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <Draw
          on={beat >= 6}
          delay={dl(6, 0.5)}
          d="M 400 390 h 280 q 12 0 12 12 v 28 q 0 12 -12 12 h -280 q -12 0 -12 -12 v -28 q 0 -12 12 -12"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.2)}>
        <T x={540} y={422} size={17} fill={INK} weight={800}>
          ρ ≈ 5.5×10³ kg⁄m³
        </T>
      </Fade>

      {/* beat 7 — 5.5× water, the iron core */}
      <Draw on={beat >= 7} delay={dl(7, 0.5)} d="M 66 480 v 52" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={84} y={500} size={13} fill={RED} script anchor="start">
          {t(
            "≈ 5.5× water — but surface rock is much lighter",
            "≈ 5.5× water — par surface rock kaafi halki hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 4)}>
        <T x={84} y={526} size={13} fill={RED} script anchor="start">
          {t(
            "the interior must be far denser — the iron core",
            "interior kahin zyada dense hoga — iron core"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
