/**
 * Ch13 · Section 23 — "Why mass cancels for a pendulum but rules the spring"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 11.98, 20.63, 36.27, 51.58, 57.9, 71.87, 84.18]):
 *  0 shelf
 *  1 diagram: pendulum slows on the Moon, spring keeps its period
 *  2 pendulum: heavier bob ⇒ more gravity BUT more inertia ⇒ cancels
 *  3 spring: force set by k alone ⇒ heavier mass just adds inertia ⇒ grows
 *  4 hero: T = 2π√(m/k) (independent of g)
 *  5 trap (high): spring same T on Moon; gravity only shifts the mean
 *  6 caution: needs small angle (θ ≲ 10°)
 *  7 caution: ideal = point mass; real rod = physical pendulum
 *
 * Layout plan (Anek bl−0.78s..+0.31s):
 *  b0 | shelf y80 x60..1020
 *  b1 | pendulum pivot(280,100) string→280,155 bob(280,168)r12 · "g↓⇒T↑ (slower)" cx280 bl200 red ·
 *      spring wall x600..614 y130..180 · spring 614→670 y155 · block x670..720 y142..168 "m" ·
 *      "T unchanged ✓" cx665 bl200 green
 *  b2 | st x70 bl235 size12
 *  b3 | st x70 bl265 size12
 *  b4 | box x70..470 y290..345 rx14 · line cx270 bl324 size20
 *  b5 | script13 st x70 bl385 red
 *  b6 | st x70 bl425 size12
 *  b7 | script12 st x70 bl455
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
  AMBER,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch13Sec23({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={52} size={20} fill={INK} script>
          {t("Same rule, opposite dependence on mass and gravity", "Same rule, mass aur gravity par ulta depend")}
        </T>
      </Fade>

      {/* beat 0 — the shelf */}
      <Draw on={beat >= 0} delay={dl(0, 0.3)} d="M 60 80 L 1020 80" stroke={INK} sw={1.4} dur={0.6} />

      {/* beat 1 — the Moon test: pendulum slows, spring doesn't */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <Circle cx={280} cy={100} r={3} fill={INK} />
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.6)} d="M 280 100 L 280 155" stroke={INK} sw={2} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 1.1)}>
        <Draw on={beat >= 1} delay={dl(1, 1.1)} d="M 280 156 A 12 12 0 1 1 279.9 156" stroke={INK} sw={1.8} dur={0.4} fill={AMBER} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.6)}>
        <T x={280} y={200} size={11} fill={RED}>
          {t("g↓⇒T↑ (slower)", "g↓⇒T↑ (slow)")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.0)}>
        <Draw on={beat >= 1} delay={dl(1, 2.0)} d="M 600 130 h 14 v 50 h -14 z" stroke={INK} sw={1.6} dur={0.4} fill={CREAM} />
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 2.5)}
        d="M 614 155 L 625 144 L 640 166 L 655 144 L 670 155"
        stroke={INK}
        sw={1.4}
        dur={0.4}
      />
      <Fade on={beat >= 1} delay={dl(1, 3.0)}>
        <Draw on={beat >= 1} delay={dl(1, 3.0)} d="M 670 142 h 50 v 26 h -50 z" stroke={INK} sw={1.6} dur={0.4} fill={AMBER} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.5)}>
        <T x={665} y={200} size={11} fill={GREEN}>
          {t("T unchanged ✓", "T same ✓")}
        </T>
      </Fade>

      {/* beat 2 — the pendulum: two roles of mass cancel */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={70} y={235} size={12} fill={INK} anchor="start" weight={700}>
          {t(
            "pendulum: heavier bob ⇒ more gravity BUT more inertia ⇒ cancels exactly",
            "pendulum: heavy bob ⇒ zyada gravity PAR zyada inertia ⇒ exactly cancel"
          )}
        </T>
      </Fade>

      {/* beat 3 — the spring: mass only adds inertia */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={70} y={265} size={12} fill={INK} anchor="start" weight={700}>
          {t(
            "spring: force set by k alone ⇒ heavier mass just adds inertia ⇒ period grows",
            "spring: force sirf k se tay ⇒ heavy mass sirf inertia badhaati ⇒ period badhta hai"
          )}
        </T>
      </Fade>

      {/* beat 4 — the hero formula */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <Draw
          on={beat >= 4}
          delay={dl(4, 0.3)}
          d="M 84 290 h 372 q 14 0 14 14 v 27 q 0 14 -14 14 h -372 q -14 0 -14 -14 v -27 q 0 -14 14 -14"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.1)}>
        <T x={270} y={324} size={20} fill={INK} weight={800}>
          T = 2π√(m/k)  (independent of g)
        </T>
      </Fade>

      {/* beat 5 — the trap, high emphasis */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={70} y={385} size={13} fill={RED} script anchor="start">
          {t(
            "trap: spring same T on Moon; gravity only shifts a vertical spring's MEAN",
            "trap: spring ka T Moon par same; gravity sirf vertical spring ka MEAN shift karti hai"
          )}
        </T>
      </Fade>

      {/* beat 6 — small-angle caution */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={70} y={425} size={12} fill={INK} anchor="start">
          {t("pendulum SHM needs small angle (θ ≲ 10°)", "pendulum SHM ke liye chhota angle chahiye (θ ≲ 10°)")}
        </T>
      </Fade>

      {/* beat 7 — ideal vs physical pendulum */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={70} y={455} size={12} fill={INK} script anchor="start">
          {t(
            "ideal = point mass, massless string; real rod = physical pendulum",
            "ideal = point mass, massless string; real rod = physical pendulum"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
