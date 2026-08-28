/**
 * Ch07 · Section 47 — "Worked example: exact work vs the mgh shortcut (JEE Main)"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 14.68, 27.73, 35.5, 51.54, 65.02, 66.02, 67.02]):
 *  0 title + problem
 *  1 diagram: Earth, mass lifted from R to 2R, slow-lift note
 *  2 amber: final separation = R+h = 2R
 *  3 setup: W = ΔU
 *  4 evaluate: W = GMm/2R
 *  5 green box: W = ½mgR
 *  6 red: mgh = mgR — double the true answer
 *  7 red margin: mgh valid only for h≪R
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  Earth c(220,320) r80 · dot at R (220,240) · dot at 2R (220,150) ·
 *   arrow (220,232)→(220,160) · dim labels · caption cx220 bl420
 *  right col x480: b2 line bl150 · b3 line bl195 · b4 line bl235 ·
 *  b5 green box x480..760 y260..312(bl292)
 *  b6 bar x460 y340..392 lines bl360/386
 *  b7 bar x480 y420..452 line bl442
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
  arrowD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch07Sec47({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — lift to height R */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "Example [JEE Main] — the mgh shortcut's limit",
            "Example [JEE Main] — mgh shortcut ki seema"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 6)}>
        <T x={540} y={84} size={12} fill={MUTED} script>
          {t(
            "lift slowly from the surface to height h = R — find W against gravity",
            "surface se h = R tak dheere uthao — gravity ke khilaaf W nikaalo"
          )}
        </T>
      </Fade>

      {/* beat 1 — the lift */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.8)}
        d="M 220 240 A 80 80 0 1 1 219.9 240"
        stroke={INK}
        sw={2.4}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 1} delay={dl(1, 1.8)}>
        <Circle cx={220} cy={240} r={6} fill={INK} />
        <T x={244} y={244} size={11} fill={INK} anchor="start" weight={700}>
          R
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 2.4)}
        d={arrowD(220, 228, 220, 158)}
        stroke={RED}
        sw={2.2}
        dur={0.5}
      />
      <Fade on={beat >= 1} delay={dl(1, 3.4)}>
        <Circle cx={220} cy={150} r={6} fill={AMBER_DARK} />
        <T x={244} y={154} size={11} fill={AMBER_DARK} anchor="start" weight={700}>
          R+h
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 4.5)}>
        <T x={220} y={420} size={12} fill={MUTED} script>
          {t(
            "lifted slowly: ΔKE = 0 → W = ΔU",
            "dheere uthaya: ΔKE = 0 → W = ΔU"
          )}
        </T>
      </Fade>

      {/* beat 2 — final separation */}
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={480} y={150} size={14} fill={AMBER_DARK} script anchor="start">
          {t(
            "h = R → final separation = R + h = 2R",
            "h = R → final separation = R + h = 2R"
          )}
        </T>
      </Fade>

      {/* beat 3 — set up W = ΔU */}
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={480} y={195} size={14} fill={INK} anchor="start" weight={700}>
          W = (−GMm ⁄ 2R) − (−GMm ⁄ R)
        </T>
      </Fade>

      {/* beat 4 — evaluate */}
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={480} y={235} size={15} fill={INK} anchor="start" weight={700}>
          W = −GMm ⁄ 2R + GMm ⁄ R = GMm ⁄ 2R
        </T>
      </Fade>

      {/* beat 5 — the clean answer */}
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <Draw
          on={beat >= 5}
          delay={dl(5, 0.5)}
          d="M 492 260 h 268 q 12 0 12 12 v 28 q 0 12 -12 12 h -268 q -12 0 -12 -12 v -28 q 0 -12 12 -12"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        <T x={626} y={292} size={19} fill={INK} weight={800}>
          W = ½·m·g·R
        </T>
      </Fade>

      {/* beat 6 — the shortcut's double-counting */}
      <Draw on={beat >= 6} delay={dl(6, 0.5)} d="M 460 340 v 52" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 1.2)}>
        <T x={478} y={360} size={13} fill={RED} script anchor="start">
          {t(
            "school shortcut: mgh = mgR — exactly DOUBLE",
            "school shortcut: mgh = mgR — bilkul DOUBLE"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 4)}>
        <T x={478} y={386} size={13} fill={RED} script anchor="start">
          {t(
            "mgh assumes constant g — g drops a lot over R",
            "mgh constant g maanta hai — R par g kaafi girta hai"
          )}
        </T>
      </Fade>

      {/* beat 7 — when mgh is safe */}
      <Draw on={beat >= 7} delay={dl(7, 0.5)} d="M 480 420 v 32" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={498} y={442} size={13} fill={RED} script anchor="start">
          {t(
            "use mgh ONLY when h ≪ R",
            "mgh SIRF tab jab h ≪ R"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
