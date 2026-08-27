/**
 * Ch07 · Section 23 — "Worked example: where the ring's axial field peaks (JEE Main)"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 1, 10.9, 19.6, 24.98, 33, 42.22, 52.2, 67.05]):
 *  0 title
 *  1 E–x graph: rise to a single peak, then decay
 *  2 axial-field formula (right)
 *  3 "differentiate, set to zero"
 *  4 numerator condition
 *  5 green box x = a/√2 + dashed drop + peak dot on graph
 *  6 substitution line
 *  7 green box E_max ≈ 0.385 GM/a² + E(max) label at peak
 *  8 red margin: the non-monotonic shape
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52 · graph: axes (140,300)→(480,300)/(140,120) ·
 *  curve M140 300 C200 292 235 180 272 163 C320 168 400 235 478 265 ·
 *  drop M272 165 V300 dash · "a⁄√2" cx272 bl320 · peak dot (272,163) ·
 *  "E(max)" st (320,150) · "E" (128,130) · "x" (486,318)
 *  right col: b2 st x540 bl150 · b3 st x540 bl185 · b4 st x540 bl225 ·
 *  b5 green box x540..900 y250..298 (bl280) · b6 st x540 bl335 ·
 *  b7 green box x540..980 y360..412 (bl392) · b8 bar x66 y470..522, lines bl490/516
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

export default function Ch07Sec23({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — find the peak */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "Example [JEE Main] — where the ring's field peaks",
            "Example [JEE Main] — ring ka field kahan peak karta hai"
          )}
        </T>
      </Fade>

      {/* beat 1 — the non-monotonic profile */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.5)}
        d={`${arrowD(140, 300, 480, 300)} ${arrowD(140, 300, 140, 120)}`}
        stroke={INK}
        sw={1.8}
        dur={0.6}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 1.3)}
        d="M 140 300 C 200 292 235 180 272 163 C 320 168 400 235 478 265"
        stroke={GREEN}
        sw={2.8}
        dur={1}
      />
      <Fade on={beat >= 1} delay={dl(1, 2.6)}>
        <T x={128} y={130} size={13} fill={INK} weight={700}>
          E
        </T>
        <T x={486} y={318} size={13} fill={INK} weight={700}>
          x
        </T>
      </Fade>

      {/* beat 2 — start from the axial field */}
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={540} y={150} size={16} fill={INK} anchor="start" weight={700}>
          E = G·M·x ⁄ (a²+x²)^(3⁄2)
        </T>
      </Fade>

      {/* beat 3 — maximise */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={185} size={12} fill={AMBER_DARK} script anchor="start">
          {t(
            "maximise: differentiate, set dE ⁄ dx = 0",
            "maximise: differentiate karo, dE ⁄ dx = 0 rakho"
          )}
        </T>
      </Fade>

      {/* beat 4 — the numerator condition */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={225} size={15} fill={INK} anchor="start" weight={700}>
          numerator: (a² + x²) − 3x² = 0
        </T>
      </Fade>

      {/* beat 5 — the peak location */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <Draw
          on={beat >= 5}
          delay={dl(5, 0.4)}
          d="M 552 250 h 336 q 12 0 12 12 v 24 q 0 12 -12 12 h -336 q -12 0 -12 -12 v -24 q 0 -12 12 -12"
          stroke={GREEN}
          sw={2.4}
          dur={0.5}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={720} y={280} size={15} fill={INK} weight={800}>
          a² = 2x²  →  x = a ⁄ √2
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <Path d="M 272 165 V 298" stroke={MUTED} strokeWidth={1.4} strokeDasharray="5 5" fill="none" />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2.5)}>
        <Circle cx={272} cy={163} r={4} fill={GREEN} />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 3)}>
        <T x={272} y={320} size={12} fill={GREEN} weight={700}>
          a ⁄ √2
        </T>
      </Fade>

      {/* beat 6 — substitute back */}
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={540} y={335} size={14} fill={INK} anchor="start" weight={700}>
          {t("substitute:", "substitute:")} a² + x² = 3a² ⁄ 2 → (3a²⁄2)^(3⁄2)
        </T>
      </Fade>

      {/* beat 7 — the maximum value */}
      <Fade on={beat >= 7} delay={dl(7, 0.5)}>
        <Draw
          on={beat >= 7}
          delay={dl(7, 0.5)}
          d="M 552 360 h 416 q 12 0 12 12 v 28 q 0 12 -12 12 h -416 q -12 0 -12 -12 v -28 q 0 -12 12 -12"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.1)}>
        <T x={760} y={392} size={15} fill={INK} weight={800}>
          E(max) = 2GM ⁄ (3√3·a²) ≈ 0.385·GM ⁄ a²
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 2.2)}>
        <T x={320} y={150} size={12} fill={GREEN} anchor="start" weight={700}>
          E(max)
        </T>
      </Fade>

      {/* beat 8 — the shape JEE loves */}
      <Draw on={beat >= 8} delay={dl(8, 0.5)} d="M 66 470 v 52" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 8} delay={dl(8, 1)}>
        <T x={84} y={490} size={13} fill={RED} script anchor="start">
          {t(
            "zero at centre → peak at a ⁄ √2 → decay: non-monotonic",
            "centre par zero → a ⁄ √2 par peak → decay: non-monotonic"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 4)}>
        <T x={84} y={516} size={13} fill={RED} script anchor="start">
          {t(
            "exactly the shape examiners love to probe",
            "bilkul wahi shape jo examiners ko probe karna pasand hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
