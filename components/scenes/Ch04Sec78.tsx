/**
 * Ch04 · Section 78 — "Worked Example 4 [JEE Advanced]: an Atwood machine in a lift"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 20.14, 39.59, 64.43, 81.66, 106.5, 131.33, 156.16]):
 *  0 title
 *  1 problem: Atwood m1=3kg,m2=1kg in lift ceiling, lift accelerates up a0=2, find a_rel & T
 *  2 diagram (right): lift box, pulley, blocks, a0 arrow outside, caption
 *  3 text (left): work in lift's frame — pseudo-force ma0 down, gravity feels stronger
 *  4 line (left): g_eff = g+a0 = 10+2 = 12 m/s²
 *  5 formula box: a_rel = (2)(12)/4 = 6 m/s²
 *  6 formula box: T = 2(3)(1)(12)/4 = 18 N
 *  7 red margin: deep insight — free fall a0=-g → g_eff=0, floats weightless
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl 52 · problem st x84 bl 92 / 116
 *  R fig | lift box x460..620 y140..280 · pulley c(540,165) r13 ·
 *    m1(3kg) x480..530 y205..237 lbl cx505 y255 · m2(1kg) x560..595 y205..227 lbl cx577 y242 ·
 *    a0 arr (640,270)→(640,150) lbl (650,180) · caption cx540 bl 300
 *  L col x84 | b3 bl 170/194 · b4 bl 230
 *  b5 box x260..820 y330..374 bl 358
 *  b6 box x260..820 y394..438 bl 422
 *  b7 | bar x66 y466..560 · lines st x84 bl 486 / 512 / 538
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  arrowD,
  ringD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch04Sec78({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={52} size={19} fill={INK} script>
          {t(
            "Example 4 [JEE Advanced] — an Atwood machine in a lift",
            "Example 4 [JEE Advanced] — lift mein Atwood machine"
          )}
        </T>
      </Fade>

      {/* beat 1 — problem */}
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <T x={84} y={92} size={13} fill={INK} script anchor="start">
          {t(
            "m₁ = 3 kg, m₂ = 1 kg hang from a lift's ceiling — lift accelerates up",
            "m₁ = 3 kg, m₂ = 1 kg lift ki chhat se latakte — lift upar accelerate"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 8)}>
        <T x={84} y={116} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "a₀ = 2 m⁄s² · find a relative to the lift and T · g = 10 m⁄s²",
            "a₀ = 2 m⁄s² · lift ke sapeksh a aur T nikaalo · g = 10 m⁄s²"
          )}
        </T>
      </Fade>

      {/* beat 2 — the figure */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 0.8)}
        d="M 460 140 H 620 V 280 H 460 Z"
        stroke={INK}
        sw={2.2}
        dur={0.8}
      />
      <Draw on={beat >= 2} delay={dl(2, 1.8)} d={ringD(540, 165, 13, 13)} stroke={INK} sw={2} dur={0.4} />
      <Draw on={beat >= 2} delay={dl(2, 2.2)} d="M 530 175 L 505 205" stroke={INK} sw={1.6} dur={0.3} />
      <Draw on={beat >= 2} delay={dl(2, 2.5)} d="M 550 175 L 575 205" stroke={INK} sw={1.6} dur={0.3} />
      <Draw
        on={beat >= 2}
        delay={dl(2, 2.9)}
        d="M 480 205 h 50 v 32 h -50 z"
        stroke={INK}
        sw={2}
        dur={0.5}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 3.5)}
        d="M 560 205 h 35 v 22 h -35 z"
        stroke={INK}
        sw={2}
        dur={0.4}
      />
      <Fade on={beat >= 2} delay={dl(2, 4)}>
        <T x={505} y={255} size={11} fill={INK} weight={700}>
          3 kg
        </T>
        <T x={577} y={242} size={11} fill={INK} weight={700}>
          1 kg
        </T>
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 4.6)}
        d={arrowD(650, 270, 650, 150)}
        stroke={GREEN}
        sw={2.4}
        dur={0.5}
      />
      <Fade on={beat >= 2} delay={dl(2, 5.4)}>
        <T x={660} y={215} size={11} fill={GREEN} weight={700} anchor="start">
          a₀ = 2 m⁄s²
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 6)}>
        <T x={540} y={300} size={11} fill={MUTED} script>
          {t(
            "an accelerating lift simply rescales gravity",
            "accelerate karti lift bas gravity ka paimaana badalti"
          )}
        </T>
      </Fade>

      {/* beat 3 — the frame choice */}
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <T x={84} y={170} size={13} fill={INK} script anchor="start">
          {t(
            "work in the lift's frame — non-inertial",
            "lift ke frame ke andar kaam karo — non-inertial"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 7)}>
        <T x={84} y={194} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "pseudo-force ma₀ down — gravity feels stronger",
            "pseudo-force ma₀ neeche — gravity mazboot lagti"
          )}
        </T>
      </Fade>

      {/* beat 4 — g_eff */}
      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <T x={84} y={230} size={14} fill={INK} weight={700} anchor="start">
          g_eff = g + a₀ = 10 + 2 = 12 m⁄s²
        </T>
      </Fade>

      {/* beat 5 — relative acceleration */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.8)}
        d="M 260 330 h 560 q 12 0 12 12 v 22 q 0 12 -12 12 h -560 q -12 0 -12 -12 v -22 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.8}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 5} delay={dl(5, 1.8)}>
        <T x={540} y={358} size={16} fill={INK} weight={800}>
          a_rel = (2)(12) ÷ 4 = 6 m⁄s²
        </T>
      </Fade>

      {/* beat 6 — the tension */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.8)}
        d="M 260 394 h 560 q 12 0 12 12 v 22 q 0 12 -12 12 h -560 q -12 0 -12 -12 v -22 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.8}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 6} delay={dl(6, 1.8)}>
        <T x={540} y={422} size={16} fill={INK} weight={800}>
          T = 2(3)(1)(12) ÷ 4 = 18 N
        </T>
      </Fade>

      {/* beat 7 — the deep insight */}
      <Draw on={beat >= 7} delay={dl(7, 0.6)} d="M 66 466 v 94" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={84} y={486} size={14} fill={RED} script anchor="start">
          {t(
            "the deep insight: g_eff = g ± a₀ for everything riding inside",
            "gehri baat: g_eff = g ± a₀ — jo bhi andar sawaar hai uske liye"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 7)}>
        <T x={84} y={512} size={14} fill={RED} script anchor="start">
          {t(
            "free fall (a₀=−g) → g_eff=0 → a_rel=0, T=0 — the machine floats",
            "free fall (a₀=−g) → g_eff=0 → a_rel=0, T=0 — machine tairti hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 13)}>
        <T x={84} y={538} size={14} fill={GREEN} script anchor="start">
          {t(
            "one substitution, and weightlessness falls straight out of the formula",
            "ek substitution, aur weightlessness formula se seedhe nikal aati"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
