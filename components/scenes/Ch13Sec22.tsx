/**
 * Ch13 · Section 22 — "The two workhorses of SHM" (opens Pendulums and Mass-Spring)
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 8.03, 19.77, 28.72, 48.8, 56.52, 69.18, 80.61]):
 *  0 shelf
 *  1 two systems, one rule: F ∝ −x
 *  2 diagram: pendulum (left) and mass-spring (right) side by side
 *  3 gravity's tangential part mg sinθ, small angle sinθ≈θ
 *  4 hero: T = 2π√(L/g)
 *  5 depends only on L, g — not mass or amplitude
 *  6 isochronism — Galileo's cathedral lamp (high)
 *  7 equal-length pendulums keep perfect time together
 *
 * Layout plan (Anek bl−0.78s..+0.31s):
 *  b0 | shelf y80 x60..1020
 *  b1 | st x70 bl105 size12
 *  b2 | pendulum: pivot(280,135) · string 280,135→280,206 · bob(280,220) r14 ·
 *      dashed 280,135→250,200 & →310,200 · "pendulum" cx280 bl272 ·
 *      spring-block: wall x570..586 y190..250 · spring 586→650 y220 · block x650..710 y205..235 "m" cx680 bl225 ·
 *      "mass-spring" cx640 bl272
 *  b3 | st x70 bl310 size13
 *  b4 | box x70..420 y335..390 rx14 · line cx245 bl370 size22
 *  b5 | st x70 bl425 size13
 *  b6 | script13 st x70 bl460 amber
 *  b7 | script12 st x70 bl500
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
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch13Sec22({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t("Pendulum by gravity, spring by elasticity", "Pendulum gravity se, spring elasticity se")}
        </T>
      </Fade>

      {/* beat 0 — the shelf */}
      <Draw on={beat >= 0} delay={dl(0, 0.3)} d="M 60 80 L 1020 80" stroke={INK} sw={1.4} dur={0.6} />

      {/* beat 1 — the same rule underneath */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={70} y={105} size={12} fill={INK} anchor="start">
          {t("two systems, one rule: F ∝ −x", "do systems, ek hi rule: F ∝ −x")}
        </T>
      </Fade>

      {/* beat 2 — side by side: pendulum and mass-spring */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <Circle cx={280} cy={135} r={3} fill={INK} />
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.6)} d="M 280 135 L 280 206" stroke={INK} sw={2} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 1.1)}>
        <Draw
          on={beat >= 2}
          delay={dl(2, 1.1)}
          d="M 280 206 A 14 14 0 1 1 279.9 206"
          stroke={INK}
          sw={1.8}
          dur={0.4}
          fill={AMBER}
        />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <Path d="M 280 135 L 250 200" stroke={MUTED} strokeWidth={1.6} strokeDasharray="5 5" fill="none" />
        <Path d="M 280 135 L 310 200" stroke={MUTED} strokeWidth={1.6} strokeDasharray="5 5" fill="none" />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.0)}>
        <T x={280} y={272} size={12} fill={INK}>
          {t("pendulum", "pendulum")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.3)}>
        <Draw on={beat >= 2} delay={dl(2, 2.3)} d="M 570 190 h 16 v 60 h -16 z" stroke={INK} sw={1.8} dur={0.4} fill={CREAM} />
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 2.8)}
        d="M 586 220 L 598 208 L 614 232 L 630 208 L 646 232 L 650 220"
        stroke={INK}
        sw={1.6}
        dur={0.5}
      />
      <Fade on={beat >= 2} delay={dl(2, 3.4)}>
        <Draw on={beat >= 2} delay={dl(2, 3.4)} d="M 650 205 h 60 v 30 h -60 z" stroke={INK} sw={1.8} dur={0.4} fill={AMBER} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3.9)}>
        <T x={680} y={225} size={14} fill={INK} weight={800}>
          m
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 4.2)}>
        <T x={640} y={272} size={12} fill={INK}>
          {t("mass-spring", "mass-spring")}
        </T>
      </Fade>

      {/* beat 3 — the tangential pull */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={70} y={310} size={13} fill={INK} anchor="start" weight={700}>
          {t(
            "gravity's tangential part: mg sinθ pulls it back (small θ: sinθ≈θ)",
            "gravity ka tangential hissa: mg sinθ wapas kheenchta hai (chhota θ: sinθ≈θ)"
          )}
        </T>
      </Fade>

      {/* beat 4 — the hero period formula */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <Draw
          on={beat >= 4}
          delay={dl(4, 0.3)}
          d="M 84 335 h 322 q 14 0 14 14 v 27 q 0 14 -14 14 h -322 q -14 0 -14 -14 v -27 q 0 -14 14 -14"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.1)}>
        <T x={245} y={370} size={22} fill={INK} weight={800}>
          T = 2π√(L/g)
        </T>
      </Fade>

      {/* beat 5 — what it does and doesn't depend on */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={70} y={425} size={13} fill={INK} anchor="start" weight={700}>
          {t(
            "depends only on L, g — NOT on mass or amplitude",
            "sirf L, g pe depend karta hai — mass ya amplitude par NAHI"
          )}
        </T>
      </Fade>

      {/* beat 6 — isochronism, high emphasis */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={70} y={460} size={13} fill={AMBER_DARK} script anchor="start">
          {t("isochronism — Galileo's cathedral lamp", "isochronism — Galileo ka cathedral lamp")}
        </T>
      </Fade>

      {/* beat 7 — why pendulum clocks work */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={70} y={500} size={12} fill={INK} script anchor="start">
          {t(
            "equal-length pendulums keep perfect time together",
            "barabar-length ke pendulums saath perfect time rakhte hain"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
