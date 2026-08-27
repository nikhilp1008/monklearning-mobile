/**
 * Ch07 · Section 27 — "Computing g, and how it changes from place to place"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 1, 10.05, 23.44, 30.95, 38.46, 48.36, 59.11]):
 *  0 title
 *  1 GMm/R² = mg (tokens)
 *  2 slash both m's → green box g = GM/R² + note
 *  3 Earth diagram: circle, equator dash, poles, caption
 *  4 up arrow + "UP" line
 *  5 mine dot + "DOWN" line
 *  6 equator dot + spin fling arrow + "EQUATOR" line
 *  7 red margin: g max at surface near poles
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52
 *  b1 tokens bl130 st: T1 x100 · m1 x164 · T3 x182 · m2 x276 · T5 x292
 *  b2 slashes M160 135 L178 115 / M272 135 L290 115 · green box x100..400 y160..212 (bl192) ·
 *   note cx250 bl240
 *  b3 Earth c(720,300) r110 · equator dash M612 300 H828 · "N" (720,180) · caption cx720 bl440
 *  b4 arrow (720,185)→(720,145) · "g ↓" st (745,160) · line st x100 bl320
 *  b5 mine dot (680,340) · line st x100 bl360
 *  b6 eq dot (830,300) · fling arrow (842,300)→(870,300) · "spin" st (880,304) · line st x100 bl400
 *  b7 bar x66 y460..512 · lines st x84 bl480 / 506
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

export default function Ch07Sec27({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — set pull equal to weight */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "Computing g — and where it changes",
            "g nikaalna — aur ye kahan badalta hai"
          )}
        </T>
      </Fade>

      {/* beat 1 — the equation with m on both sides */}
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={100} y={130} size={18} fill={INK} anchor="start" weight={800}>
          G·M·
        </T>
        <T x={164} y={130} size={18} fill={INK} anchor="start" weight={800}>
          m
        </T>
        <T x={182} y={130} size={18} fill={INK} anchor="start" weight={800}>
          ⁄ R²  =
        </T>
        <T x={276} y={130} size={18} fill={INK} anchor="start" weight={800}>
          m
        </T>
        <T x={294} y={130} size={18} fill={INK} anchor="start" weight={800}>
          ·g
        </T>
      </Fade>

      {/* beat 2 — cancel, and g belongs to the Earth */}
      <Draw on={beat >= 2} delay={dl(2, 0.8)} d="M 160 135 L 178 113" stroke={RED} sw={2.4} dur={0.3} />
      <Draw on={beat >= 2} delay={dl(2, 1.3)} d="M 272 135 L 290 113" stroke={RED} sw={2.4} dur={0.3} />
      <Fade on={beat >= 2} delay={dl(2, 2.2)}>
        <Draw
          on={beat >= 2}
          delay={dl(2, 2.2)}
          d="M 112 160 h 276 q 12 0 12 12 v 28 q 0 12 -12 12 h -276 q -12 0 -12 -12 v -28 q 0 -12 12 -12"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.9)}>
        <T x={250} y={192} size={17} fill={INK} weight={800}>
          g = G·M ⁄ R²
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 4.5)}>
        <T x={250} y={240} size={12} fill={GREEN} script>
          {t(
            "only the Earth's M and R — as intuition demanded",
            "sirf Earth ke M aur R — jaisa intuition ne maanga"
          )}
        </T>
      </Fade>

      {/* beat 3 — not one frozen number */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 0.5)}
        d="M 720 190 A 110 110 0 1 1 719.9 190"
        stroke={INK}
        sw={2.6}
        dur={0.9}
      />
      <Fade on={beat >= 3} delay={dl(3, 1.6)}>
        <Path d="M 612 300 H 828" stroke={MUTED} strokeWidth={1.4} strokeDasharray="6 6" fill="none" />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.2)}>
        <T x={720} y={212} size={11} fill={MUTED} weight={700}>
          N
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 3)}>
        <T x={720} y={440} size={12} fill={AMBER_DARK} script>
          {t(
            "three ways g changes with place",
            "teen tareeke jinse g jagah ke saath badalta hai"
          )}
        </T>
      </Fade>

      {/* beat 4 — going up */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.3)}
        d={arrowD(720, 185, 720, 145)}
        stroke={AMBER_DARK}
        sw={2.2}
        dur={0.4}
      />
      <Fade on={beat >= 4} delay={dl(4, 0.7)}>
        <T x={745} y={160} size={11} fill={AMBER_DARK} anchor="start" weight={700}>
          g ↓
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.1)}>
        <T x={100} y={320} size={13} fill={INK} script anchor="start">
          {t(
            "UP (mountain, orbit): farther from centre → g ↓",
            "UPAR (pahad, orbit): centre se door → g ↓"
          )}
        </T>
      </Fade>

      {/* beat 5 — going down */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Circle cx={680} cy={340} r={5} fill={AMBER_DARK} />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={100} y={360} size={13} fill={INK} script anchor="start">
          {t(
            "DOWN (mine): the shell above stops pulling → g ↓",
            "NEECHE (mine): upar ka shell pull band → g ↓"
          )}
        </T>
      </Fade>

      {/* beat 6 — toward the equator */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Circle cx={830} cy={300} r={5} fill={AMBER_DARK} />
      </Fade>
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.8)}
        d={arrowD(842, 300, 872, 300)}
        stroke={AMBER_DARK}
        sw={2}
        dur={0.3}
      />
      <Fade on={beat >= 6} delay={dl(6, 1.2)}>
        <T x={880} y={304} size={11} fill={AMBER_DARK} anchor="start" weight={700}>
          spin
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={100} y={400} size={13} fill={INK} script anchor="start">
          {t(
            "EQUATOR: the spin's fling + the bulge → g ↓",
            "EQUATOR: spin ki phenk + bulge → g ↓"
          )}
        </T>
      </Fade>

      {/* beat 7 — where g is greatest */}
      <Draw on={beat >= 7} delay={dl(7, 0.5)} d="M 66 460 v 52" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={84} y={480} size={13} fill={RED} script anchor="start">
          {t(
            "g is MAXIMUM right at the surface, near the poles",
            "g MAXIMUM hai surface par, poles ke paas"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 4.5)}>
        <T x={84} y={506} size={13} fill={RED} script anchor="start">
          {t(
            "climb up, dig down, or drift to the equator — it tapers",
            "upar chadho, neeche khodo, ya equator jao — g ghat'ta hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
