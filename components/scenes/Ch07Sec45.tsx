/**
 * Ch07 · Section 45 — "Worked example: potential energy of three masses (CBSE)"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 15.87, 26.28, 35.58, 46.08, 47.08, 48.08, 49.08]):
 *  0 title + problem
 *  1 triangle diagram: three masses, three sides labeled 3 m
 *  2 amber: three pairs, same separation
 *  3 factored formula
 *  4 green box: substitution line
 *  5 (bracket = 44 note)
 *  6 green box: result −9.78×10⁻¹⁰ J
 *  7 red margin: negative → energy needed to disperse
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  triangle vertices (220,150)/(120,320)/(320,320) · dots + labels ·
 *   side labels cx170 bl240 / cx270 bl240 / cx220 bl335 ("3 m" ×3)
 *  right col x480: b2 line bl150 · b3 line bl195 ·
 *  b4 green box x480..900 y225..277(bl257) · b6 green box x480..940 y300..352(bl332)
 *  b7 bar x66 y400..452 lines bl420/446
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
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch07Sec45({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the setup */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "Example [CBSE] — three masses on a triangle",
            "Example [CBSE] — teen masses, triangle par"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 6)}>
        <T x={540} y={84} size={12} fill={MUTED} script>
          {t(
            "2, 4, 6 kg at the corners of an equilateral triangle, side 3.0 m",
            "2, 4, 6 kg equilateral triangle ke corners par, side 3.0 m"
          )}
        </T>
      </Fade>

      {/* beat 1 — the triangle */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.8)}
        d="M 220 150 L 120 320 L 320 320 Z"
        stroke={INK}
        sw={2.2}
        dur={0.9}
      />
      <Fade on={beat >= 1} delay={dl(1, 1.8)}>
        <Circle cx={220} cy={150} r={7} fill={INK} />
        <Circle cx={120} cy={320} r={10} fill={INK} />
        <Circle cx={320} cy={320} r={13} fill={INK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.5)}>
        <T x={220} y={132} size={12} fill={INK} weight={700}>
          2 kg
        </T>
        <T x={95} y={340} size={12} fill={INK} weight={700}>
          4 kg
        </T>
        <T x={335} y={340} size={12} fill={INK} anchor="start" weight={700}>
          6 kg
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.4)}>
        <T x={155} y={220} size={11} fill={AMBER_DARK} weight={700}>
          3 m
        </T>
        <T x={280} y={220} size={11} fill={AMBER_DARK} weight={700}>
          3 m
        </T>
        <T x={220} y={340} size={11} fill={AMBER_DARK} weight={700}>
          3 m
        </T>
      </Fade>

      {/* beat 2 — three pairs, one separation */}
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={480} y={150} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "3 particles → 3 pairs, ALL at the same r = 3 m",
            "3 particles → 3 pairs, SAB r = 3 m par"
          )}
        </T>
      </Fade>

      {/* beat 3 — factor it out */}
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={480} y={195} size={15} fill={INK} anchor="start" weight={700}>
          U = −(G⁄r)·(m₁m₂ + m₁m₃ + m₂m₃)
        </T>
      </Fade>

      {/* beat 4 — substitute */}
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <Draw
          on={beat >= 4}
          delay={dl(4, 0.5)}
          d="M 492 225 h 416 q 12 0 12 12 v 28 q 0 12 -12 12 h -416 q -12 0 -12 -12 v -28 q 0 -12 12 -12"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.2)}>
        <T x={700} y={257} size={14} fill={INK} weight={800}>
          U = −(6.67×10⁻¹¹ ⁄ 3.0)·(8+12+24)
        </T>
      </Fade>

      {/* beat 6 — result */}
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <Draw
          on={beat >= 6}
          delay={dl(6, 0.5)}
          d="M 492 300 h 456 q 12 0 12 12 v 28 q 0 12 -12 12 h -456 q -12 0 -12 -12 v -28 q 0 -12 12 -12"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.2)}>
        <T x={720} y={332} size={15} fill={INK} weight={800}>
          U = −(6.67×10⁻¹¹⁄3.0)·(44) = −9.78×10⁻¹⁰ J
        </T>
      </Fade>

      {/* beat 7 — the meaning of negative */}
      <Draw on={beat >= 7} delay={dl(7, 0.5)} d="M 66 400 v 52" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={84} y={420} size={13} fill={RED} script anchor="start">
          {t(
            "negative — energy must be SUPPLIED to disperse them",
            "negative — unhe bikherne ke liye energy DENI hogi"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 4)}>
        <T x={84} y={446} size={13} fill={RED} script anchor="start">
          {t(
            "scattered back out to infinity",
            "wapas infinity tak bikher jaayein"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
