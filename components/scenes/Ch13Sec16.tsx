/**
 * Ch13 · Section 16 — "Derivation: why the energies run at double frequency"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 6.52, 13.32, 23.11, 31.81, 39.15, 47.57, 56.0]):
 *  0 shelf
 *  1 apply power-reduction to cos² and sin²
 *  2 cos²θ = (1+cos2θ)/2 , sin²θ = (1−cos2θ)/2
 *  3 K = E/2 + E/2 cos2(ωt+φ)
 *  4 U = E/2 − E/2 cos2(ωt+φ) (high)
 *  5 diagram: x(t) completes 1 cycle in T, K(t) completes 2
 *  6 each = E/2 + term at 2ω ⇒ period T/2
 *  7 note (high): the wiggles cancel in the sum, leaving E
 *
 * Layout plan (Anek bl−0.78s..+0.31s):
 *  b0 | shelf y80 x60..1020
 *  b1 | st x70 bl110 size13
 *  b2 | st x70 bl145 size14
 *  b3 | st x70 bl180 size15
 *  b4 | st x70 bl215 size15 red
 *  b5 | x(t) M650,150 C693.75,120 781.25,120 825,150 C868.75,180 956.25,180 1000,150 ·
 *      K(t) M650,200 Q737.5,260 825,200 Q912.5,260 1000,200 · dashed x825 y115..270 · "T/2" cx825 bl292 ·
 *      "x(t)" x610 bl154 anchor-end · "K(t)" x610 bl234 anchor-end
 *  b6 | st x70 bl255 size13
 *  b7 | script13 st x70 bl290 red
 */

import React from "react";
import { Path } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  INK,
  MUTED,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch13Sec16({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t("Power-reduction reveals the 2ω hidden inside", "Power-reduction se andar chhupa 2ω dikhta hai")}
        </T>
      </Fade>

      {/* beat 0 — the shelf */}
      <Draw on={beat >= 0} delay={dl(0, 0.3)} d="M 60 80 L 1020 80" stroke={INK} sw={1.4} dur={0.6} />

      {/* beat 1 — the move */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={70} y={110} size={13} fill={INK} anchor="start" weight={700}>
          {t("apply power-reduction to cos² and sin²", "cos² aur sin² pe power-reduction lagao")}
        </T>
      </Fade>

      {/* beat 2 — the identities */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={70} y={145} size={14} fill={INK} anchor="start" weight={700}>
          cos²θ = (1+cos2θ)/2  ,  sin²θ = (1−cos2θ)/2
        </T>
      </Fade>

      {/* beat 3 — kinetic energy rewritten */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={70} y={180} size={15} fill={INK} anchor="start" weight={700}>
          K = E/2 + E/2 cos2(ωt+φ)
        </T>
      </Fade>

      {/* beat 4 — potential energy rewritten, high emphasis */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={70} y={215} size={15} fill={RED} anchor="start" weight={700}>
          U = E/2 − E/2 cos2(ωt+φ)
        </T>
      </Fade>

      {/* beat 5 — the picture: x completes 1 cycle, K completes 2 */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.3)}
        d="M 650 150 C 693.75 120 781.25 120 825 150 C 868.75 180 956.25 180 1000 150"
        stroke={INK}
        sw={2.2}
        dur={0.7}
      />
      <Draw
        on={beat >= 5}
        delay={dl(5, 1.1)}
        d="M 650 200 Q 737.5 260 825 200 Q 912.5 260 1000 200"
        stroke={GREEN}
        sw={2.2}
        dur={0.7}
      />
      <Fade on={beat >= 5} delay={dl(5, 1.9)}>
        <Path d="M 825 115 V 270" stroke={MUTED} strokeWidth={1.2} strokeDasharray="4 4" fill="none" />
        <T x={825} y={292} size={11} fill={MUTED}>
          T/2
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2.3)}>
        <T x={610} y={154} size={12} fill={INK} anchor="end">
          x(t)
        </T>
        <T x={610} y={234} size={12} fill={GREEN} anchor="end">
          K(t)
        </T>
      </Fade>

      {/* beat 6 — the reading */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={70} y={255} size={13} fill={INK} anchor="start" weight={700}>
          {t("each = E/2 + term at 2ω ⇒ period T/2", "har ek = E/2 + 2ω pe term ⇒ period T/2")}
        </T>
      </Fade>

      {/* beat 7 — the bonus: they cancel in the sum, high emphasis */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={70} y={330} size={13} fill={RED} script anchor="start">
          {t("the wiggling parts cancel in the sum ⇒ E constant", "wiggling parts sum mein cancel ⇒ E constant")}
        </T>
      </Fade>
    </Scene>
  );
}
