/**
 * Ch07 · Section 32 — "g with rotation: why the poles feel heavier"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 1, 2, 3, 4, 5, 15.33, 24.37]):
 *  0 title + Earth, spin axis, body at latitude λ
 *  1 R cos λ radius line drawn to the axis + λ angle
 *  2 centripetal arrow (toward axis) + label
 *  3 red: part of true pull is spent on this
 *  4 green box: g(λ) = g − ω²R·cos²λ
 *  5 equator case: g(eq) = g − ω²R
 *  6 pole case: cos λ = 0, no effect
 *  7 red margin: also flattening — polar R smaller
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  Earth c(230,300) r130 · axis M230 155 V445 (dashed, arrows both ends) ·
 *  body dot (300,205) · λ angle arc + label (250,195) ·
 *  radius line M230 205 H300 (dashed) + "R cosλ" (255,192) · caption cx230 bl475
 *  right col x480: b2 arrow (300,205)→(255,205) + "centripetal" bl175 ·
 *  b3 bar x460 y195..247 line bl217/243 · b4 green box x480..940 y270..322 (bl302)
 *  b5 line bl365 · b6 line bl400 · b7 bar x66 y460..512 lines bl480/506
 */

import React from "react";
import { Circle, Path } from 'react-native-svg';
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

export default function Ch07Sec32({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the Earth spins */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "The Earth spins — so effective g drops",
            "Earth ghoomti hai — effective g ghat'ta hai"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 1)}
        d="M 230 170 A 130 130 0 1 1 229.9 170"
        stroke={INK}
        sw={2.6}
        dur={0.9}
        fill={CREAM}
      />
      <Fade on={beat >= 0} delay={dl(0, 2)}>
        <Path d="M 230 155 V 445" stroke={MUTED} strokeWidth={1.6} strokeDasharray="5 6" fill="none" />
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 2.6)}>
        <Circle cx={300} cy={205} r={6} fill={INK} />
      </Fade>

      {/* beat 1 — R cos λ radius */}
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <Path d="M 230 205 H 300" stroke={AMBER_DARK} strokeWidth={1.8} strokeDasharray="4 5" fill="none" />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.4)}>
        <T x={255} y={192} size={11} fill={AMBER_DARK} weight={700}>
          R·cosλ
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.2)}>
        <Path d="M 230 170 A 35 35 0 0 1 258 187" stroke={MUTED} strokeWidth={1.4} fill="none" />
        <T x={250} y={172} size={11} fill={INK} weight={700}>
          λ
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3)}>
        <T x={230} y={475} size={12} fill={INK} script>
          {t(
            "at latitude λ, a body circles the axis",
            "latitude λ par, body axis ke charon or ghoomta hai"
          )}
        </T>
      </Fade>

      {/* beat 2 — needs centripetal acceleration */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 0.6)}
        d={arrowD(300, 205, 250, 205)}
        stroke={RED}
        sw={2.4}
        dur={0.4}
      />
      <Fade on={beat >= 2} delay={dl(2, 1.4)}>
        <T x={480} y={175} size={13} fill={RED} script anchor="start">
          {t(
            "needs centripetal a = ω²·R·cosλ, toward the axis",
            "centripetal a = ω²·R·cosλ chahiye, axis ki taraf"
          )}
        </T>
      </Fade>

      {/* beat 3 — part of the true pull is spent */}
      <Draw on={beat >= 3} delay={dl(3, 0.5)} d="M 460 195 v 52" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 1.2)}>
        <T x={478} y={217} size={13} fill={RED} script anchor="start">
          {t(
            "part of the true pull supplies this —",
            "asli pull ka hissa yahi deta hai —"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 4)}>
        <T x={478} y={243} size={13} fill={RED} script anchor="start">
          {t(
            "leaving less to press you down",
            "aapko dabane ke liye kam bachta hai"
          )}
        </T>
      </Fade>

      {/* beat 4 — the effective-g formula */}
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <Draw
          on={beat >= 4}
          delay={dl(4, 0.6)}
          d="M 492 270 h 456 q 12 0 12 12 v 28 q 0 12 -12 12 h -456 q -12 0 -12 -12 v -28 q 0 -12 12 -12"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.3)}>
        <T x={720} y={302} size={16} fill={INK} weight={800}>
          g(λ) = g − ω²·R·cos²λ
        </T>
      </Fade>

      {/* beat 5 — the equator: maximum cut */}
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={480} y={365} size={14} fill={INK} anchor="start" weight={700}>
          {t(
            "equator (λ=0): max cut — g(eq) = g − ω²R",
            "equator (λ=0): max katauti — g(eq) = g − ω²R"
          )}
        </T>
      </Fade>

      {/* beat 6 — the poles: no effect */}
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={480} y={400} size={14} fill={GREEN} anchor="start" weight={700}>
          {t(
            "poles (λ=90°): cosλ=0 — rotation has NO effect",
            "poles (λ=90°): cosλ=0 — rotation ka koi asar NAHI"
          )}
        </T>
      </Fade>

      {/* beat 7 — flattening adds a second reason */}
      <Draw on={beat >= 7} delay={dl(7, 0.5)} d="M 66 530 v 52" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={84} y={550} size={13} fill={RED} script anchor="start">
          {t(
            "plus: the Earth is flattened — polar R is ~21 km smaller",
            "aur: Earth chapti hai — polar R ~21 km chhota hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 4.5)}>
        <T x={84} y={576} size={13} fill={RED} script anchor="start">
          {t(
            "g ∝ 1⁄R² → that boosts g further at the poles",
            "g ∝ 1⁄R² → poles par g aur badh jaata hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
