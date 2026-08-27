/**
 * Ch04 · Section 11 — "Worked Example 4 [JEE Advanced]: sand on a conveyor belt"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 9.6, 29.0, 44.3, 58.9, 75.5, 89.4, 104.3]):
 *  0 title
 *  1 problem data + find (a)(b)(c)
 *  2 red margin: F = ma FAILS, use F = dp/dt
 *  3 figure: hopper, falling sand, belt + pulleys, 2 m/s arrow, caption
 *  4 (a) F = u·dm/dt = 6 N box + no-m·dv/dt note
 *  5 (b) dKE/dt = ½(dm/dt)u² = 6 W
 *  6 (c) P = F·u = 12 W + discrepancy note
 *  7 red margin: half to heat — the signature
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl 52 · problem st x84 bl 92 / 116
 *  b2 | bar x66 y140..190 · lines st x84 bl 160 / 184
 *  fig | hopper x200..280 y220..260 · sand dots (240,275..305) ·
 *    pulleys c(140,340)/(460,340) r12 · belt lines y328/y352 x140..460 ·
 *    arrow (300,316)→(370,316) · "2 m⁄s" cx335 bl 300 · caption cx300 bl 385
 *  R col | (a) st x540 bl 150 · box x540..740 y164..200 bl 188 · note bl 226 ·
 *    (b) st x540 bl 266 · (c) st x540 bl 306 · note bl 332
 *  b7 | bar x66 y420..500 · lines st x84 bl 440 / 466 / 492
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
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

const circleD = (cx: number, cy: number, r: number) =>
  `M ${cx - r} ${cy} a ${r} ${r} 0 1 0 ${2 * r} 0 a ${r} ${r} 0 1 0 ${-2 * r} 0`;

export default function Ch04Sec11({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "Example 4 [JEE Advanced] — sand on a conveyor belt",
            "Example 4 [JEE Advanced] — conveyor belt par sand"
          )}
        </T>
      </Fade>

      {/* beat 1 — the problem */}
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <T x={84} y={92} size={13} fill={INK} script anchor="start">
          {t(
            "sand falls at 3 kg⁄s onto a belt moving at constant 2 m⁄s",
            "sand 3 kg⁄s se girti hai, belt constant 2 m⁄s par chalti hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 10)}>
        <T x={84} y={116} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "find: (a) motor force (b) rate of KE to sand (c) motor power — explain the gap",
            "nikaalo: (a) motor force (b) sand ko KE ki rate (c) motor power — gap samjhao"
          )}
        </T>
      </Fade>

      {/* beat 2 — classify first */}
      <Draw on={beat >= 2} delay={dl(2, 0.6)} d="M 66 140 v 52" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <T x={84} y={160} size={14} fill={RED} script anchor="start">
          {t(
            "mass on the belt grows every second — variable mass!",
            "belt par mass har second badh raha hai — variable mass!"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 6)}>
        <T x={84} y={184} size={14} fill={RED} script anchor="start">
          {t(
            "F = m·a FAILS outright — you MUST use F = dp⁄dt",
            "F = m·a seedha FAIL — F = dp⁄dt lagana hi hoga"
          )}
        </T>
      </Fade>

      {/* beat 3 — the figure */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 1)}
        d="M 200 220 h 80 l -25 40 h -30 z"
        stroke={INK}
        sw={2.4}
        dur={0.6}
      />
      <Fade on={beat >= 3} delay={dl(3, 1.8)}>
        <Circle cx={240} cy={275} r={2.5} fill={INK} />
        <Circle cx={235} cy={290} r={2.5} fill={INK} />
        <Circle cx={245} cy={303} r={2.5} fill={INK} />
        <Circle cx={238} cy={316} r={2.5} fill={INK} />
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 2.6)}
        d={`${circleD(140, 340, 12)} ${circleD(460, 340, 12)} M 140 328 H 460 M 140 352 H 460`}
        stroke={INK}
        sw={2.4}
        dur={0.9}
      />
      <Draw
        on={beat >= 3}
        delay={dl(3, 3.8)}
        d={arrowD(300, 316, 370, 316)}
        stroke={GREEN}
        sw={2.6}
        dur={0.4}
      />
      <Fade on={beat >= 3} delay={dl(3, 4.3)}>
        <T x={335} y={300} size={13} fill={GREEN} script>
          2 m⁄s
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 6)}>
        <T x={300} y={385} size={13} fill={AMBER_DARK} script>
          {t(
            "each second: 3 kg lands at rest → dragged to 2 m⁄s",
            "har second: 3 kg rest par girta → 2 m⁄s tak ghasita jaata"
          )}
        </T>
      </Fade>

      {/* beat 4 — part (a) */}
      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <T x={540} y={150} size={15} fill={INK} weight={700} anchor="start">
          (a) F = dp⁄dt = u·(dm⁄dt) = 2 × 3
        </T>
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 5)}
        d="M 552 164 h 176 q 12 0 12 12 v 12 q 0 12 -12 12 h -176 q -12 0 -12 -12 v -12 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.6}
        dur={0.5}
        fill={CREAM}
      />
      <Fade on={beat >= 4} delay={dl(4, 5.6)}>
        <T x={640} y={188} size={18} fill={INK} weight={800}>
          F = 6 N
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 9)}>
        <T x={540} y={226} size={12} fill={GREEN} script anchor="start">
          {t(
            "no m·dv⁄dt term — the belt's speed never changes",
            "koi m·dv⁄dt term nahi — belt ki speed badalti hi nahi"
          )}
        </T>
      </Fade>

      {/* beat 5 — part (b) */}
      <Fade on={beat >= 5} delay={dl(5, 1.5)}>
        <T x={540} y={266} size={15} fill={INK} weight={700} anchor="start">
          (b) dKE⁄dt = ½·(dm⁄dt)·u² = ½·3·4 = 6 W
        </T>
      </Fade>

      {/* beat 6 — part (c) */}
      <Fade on={beat >= 6} delay={dl(6, 1.5)}>
        <T x={540} y={306} size={15} fill={INK} weight={700} anchor="start">
          (c) P_motor = F·u = 6 × 2 = 12 W
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 6)}>
        <T x={540} y={332} size={12} fill={AMBER_DARK} script anchor="start">
          {t(
            "the discrepancy, staring at you",
            "discrepancy aapke saamne khadi hai"
          )}
        </T>
      </Fade>

      {/* beat 7 — where half the work went */}
      <Draw on={beat >= 7} delay={dl(7, 0.6)} d="M 66 420 v 80" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={84} y={440} size={14} fill={RED} script anchor="start">
          {t(
            "12 W in — only 6 W reaches the sand",
            "12 W andar — sand ko mile sirf 6 W"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 6)}>
        <T x={84} y={466} size={14} fill={RED} script anchor="start">
          {t(
            "the missing 6 W → friction heat, while each grain slips up to belt speed",
            "gaayab 6 W → friction ki heat, jab har daana belt speed tak slip karta hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 12)}>
        <T x={84} y={492} size={14} fill={GREEN} script anchor="start">
          {t(
            "exactly HALF lost — the signature of this problem class",
            "theek AADHA lost — isi problem class ki pehchaan"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
