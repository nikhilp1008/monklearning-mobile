/**
 * Ch06 · Section 6 — "Derivation: motion of the centre of mass"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 15.45, 29.78, 45.65, 65.37, 81.92, 100.86, 115.29]):
 *  0 title + "to prove" goal line
 *  1 bomb demo top-right: dashed parabola, bomb dot, explosion star,
 *    fragment arrows, green CoM dots gliding on
 *  2 step 1: M r_cm = m₁r₁ + … + mₙrₙ
 *  3 step 2: differentiate → M v_cm = Σ mᵢvᵢ (= total momentum, bridge note)
 *  4 step 3: differentiate again → M a_cm = Σ Fᵢᵉˣᵗ + Σ Fᵢⁱⁿᵗ (split parts)
 *  5 step 4: N3L pair diagram + cross out Σ Fᵢⁱⁿᵗ → = 0
 *  6 green result box: F_ext = M a_cm
 *  7 red corollary: F_ext = 0 ⇒ v_cm const ⇒ momentum conserved
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | title script24 cx540 bl 52 · goal sans16 cx540 bl 92 (x444..636)
 *  b1 | parabola M620,240 Q810,90 1000,240 dashed · bomb (700,190) · star (810,165) ·
 *       frag arrows →(742,115)/(862,112)/(915,135) · label script12 cx810 bl 92 ·
 *       CoM dots t=.65/.8/.92 green · label script12 cx880 bl 268
 *  b2 | step label script12 st x84 bl 132 · line sans17 st x84 bl 162
 *  b3 | label bl 205 · line bl 235 · bridge note script12 st x84 bl 263
 *  b4 | label bl 300 · part1 st x84 bl 330 · part2 st x260 bl 330
 *  b5 | pair dots (700,340)/(900,340) · A/B bl 318 · arrows y332/y348 ·
 *       caption script12 cx800 bl 385 · crossD(256,316,68,19) · "= 0" st x345 bl 330 ·
 *       red note script13 st x84 bl 368
 *  b6 | green box x640..1000 y415..505 · formula size26 cx820 bl 450 ·
 *       caption script12 cx820 bl 488
 *  b7 | red bar x66 y490..580 · L1 sans15 st x84 bl 518 · L2 script13 st x84 bl 550
 */

import React from "react";
import { Path, TSpan } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  arrowD,
  crossD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  GREEN_DARK,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

const Sub = ({ children }: { children: string | number | (string | number)[] }) => (
  <TSpan dy={5} fontSize={11}>
    {children}
  </TSpan>
);
const Up = ({ children }: { children: string | number | (string | number)[] }) => (
  <TSpan dy={-5}>{children}</TSpan>
);

export default function Ch06Sec6({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the goal */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={24} fill={INK} script>
          {t("deriving the master law", "master law ka derivation")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 6)}>
        <T x={540} y={92} size={16} fill={AMBER_DARK} weight={700}>
          {t("to prove:  F", "prove karna hai:  F")}
          <Sub>ext</Sub>
          <Up> = M a</Up>
          <Sub>cm</Sub>
        </T>
      </Fade>

      {/* beat 1 — the bomb picture */}
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <Path
          d="M 620 240 Q 810 90 1000 240"
          fill="none"
          stroke={MUTED}
          strokeWidth={2}
          strokeDasharray="7 6"
        />
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 2.5)}
        d="M 694 190 a 6 6 0 1 0 12 0 a 6 6 0 1 0 -12 0"
        stroke={INK}
        fill={INK}
        sw={2}
        dur={0.4}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 4)}
        d="M 810 165 m -10 -10 l -8 -8 M 810 165 m 10 -10 l 8 -8 M 810 165 m -14 0 l -11 0 M 810 165 m 14 0 l 11 0 M 810 165 m -8 12 l -7 9 M 810 165 m 8 12 l 7 9"
        stroke={RED}
        sw={2.4}
        dur={0.6}
      />
      <Fade on={beat >= 1} delay={dl(1, 4.8)}>
        <T x={810} y={92} size={12} fill={RED} script>
          {t("bomb explodes here", "bomb yahin phat-ta hai")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 5.8)} d={arrowD(800, 152, 742, 115)} stroke={RED} sw={2} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 6.4)} d={arrowD(820, 152, 862, 112)} stroke={RED} sw={2} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 7)} d={arrowD(824, 162, 915, 135)} stroke={RED} sw={2} dur={0.4} />
      <Draw
        on={beat >= 1}
        delay={dl(1, 8.5)}
        d="M 862.5 172 a 4.5 4.5 0 1 0 9 0 a 4.5 4.5 0 1 0 -9 0 M 919.5 192 a 4.5 4.5 0 1 0 9 0 a 4.5 4.5 0 1 0 -9 0 M 965.5 218 a 4.5 4.5 0 1 0 9 0 a 4.5 4.5 0 1 0 -9 0"
        stroke={GREEN}
        fill={GREEN}
        sw={2}
        dur={0.8}
      />
      <Fade on={beat >= 1} delay={dl(1, 10.5)}>
        <T x={880} y={268} size={12} fill={GREEN_DARK} script>
          {t(
            "CoM continues on the SAME parabola",
            "CoM ussi parabola par chalta rehta hai"
          )}
        </T>
      </Fade>

      {/* beat 2 — step 1: definition, fraction cleared */}
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={84} y={132} size={12} fill={AMBER_DARK} script anchor="start">
          {t("step 1 — definition × M", "step 1 — definition × M")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3)}>
        <T x={84} y={162} size={17} fill={INK} anchor="start" weight={700}>
          M r<Sub>cm</Sub>
          <Up> = m₁r₁ + m₂r₂ + ⋯ + mₙrₙ</Up>
        </T>
      </Fade>

      {/* beat 3 — step 2: one derivative */}
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={84} y={205} size={12} fill={AMBER_DARK} script anchor="start">
          {t(
            "step 2 — d/dt once (masses constant)",
            "step 2 — ek baar d/dt (masses constant)"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 3.5)}>
        <T x={84} y={235} size={17} fill={INK} anchor="start" weight={700}>
          M v<Sub>cm</Sub>
          <Up> = m₁v₁ + m₂v₂ + ⋯ + mₙvₙ</Up>
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 9)}>
        <T x={84} y={263} size={12} fill={GREEN_DARK} script anchor="start">
          {t(
            "this line IS total momentum p — the conservation bridge",
            "yahi line total momentum p hai — conservation ka pul"
          )}
        </T>
      </Fade>

      {/* beat 4 — step 3: second derivative + Newton II */}
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={84} y={300} size={12} fill={AMBER_DARK} script anchor="start">
          {t(
            "step 3 — d/dt again + Newton II per particle",
            "step 3 — phir d/dt + har particle par Newton II"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 3)}>
        <T x={84} y={330} size={17} fill={INK} anchor="start" weight={700}>
          M a<Sub>cm</Sub>
          <Up> = Σ Fᵢ</Up>
          <TSpan dy={-6} fontSize={11}>
            ext
          </TSpan>
          <TSpan dy={6}> + </TSpan>
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 4.5)}>
        <T x={260} y={330} size={17} fill={INK} anchor="start" weight={700}>
          Σ Fᵢ
          <TSpan dy={-6} fontSize={11}>
            int
          </TSpan>
        </T>
      </Fade>

      {/* beat 5 — step 4: third-law pairs cancel */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 1)}
        d="M 694 340 a 6 6 0 1 0 12 0 a 6 6 0 1 0 -12 0 M 894 340 a 6 6 0 1 0 12 0 a 6 6 0 1 0 -12 0"
        stroke={INK}
        fill={INK}
        sw={2}
        dur={0.6}
      />
      <Fade on={beat >= 5} delay={dl(5, 1.8)}>
        <T x={700} y={318} size={13} fill={INK} weight={700}>
          A
        </T>
        <T x={900} y={318} size={13} fill={INK} weight={700}>
          B
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 2.6)} d={arrowD(712, 332, 888, 332)} stroke={RED} sw={2.2} dur={0.6} />
      <Draw on={beat >= 5} delay={dl(5, 3.4)} d={arrowD(888, 348, 712, 348)} stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 5} delay={dl(5, 4.8)}>
        <T x={800} y={385} size={12} fill={RED} script>
          {t(
            "equal & opposite — every pair cancels",
            "barabar & ulta — har pair cancel"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 5}
        delay={dl(5, 8)}
        d={crossD(256, 316, 68, 19)}
        stroke={RED}
        sw={2.6}
        dur={0.7}
      />
      <Fade on={beat >= 5} delay={dl(5, 9.5)}>
        <T x={345} y={330} size={16} fill={GREEN_DARK} anchor="start" weight={700}>
          = 0
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 11.5)}>
        <T x={84} y={368} size={13} fill={RED} script anchor="start">
          {t(
            "Newton III — internal pairs cancel EXACTLY",
            "Newton III — internal pairs bilkul cancel"
          )}
        </T>
      </Fade>

      {/* beat 6 — what survives */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.8)}
        d="M 652 415 h 336 q 12 0 12 12 v 66 q 0 12 -12 12 h -336 q -12 0 -12 -12 v -66 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.8}
        dur={0.9}
        fill={CREAM}
      />
      <Fade on={beat >= 6} delay={dl(6, 2.2)}>
        <T x={820} y={450} size={26} fill={INK} weight={700}>
          F
          <TSpan dy={7} fontSize={16}>
            ext
          </TSpan>
          <TSpan dy={-7}> = M a</TSpan>
          <TSpan dy={7} fontSize={16}>
            cm
          </TSpan>
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 7)}>
        <T x={820} y={488} size={12} fill={GREEN_DARK} script>
          {t(
            "internal forces — vanished completely",
            "internal forces — poori tarah gayab"
          )}
        </T>
      </Fade>

      {/* beat 7 — the free corollary */}
      <Draw on={beat >= 7} delay={dl(7, 0.8)} d="M 66 490 v 90" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 1.8)}>
        <T x={84} y={518} size={15} fill={RED} anchor="start" weight={700}>
          F
          <Sub>ext</Sub>
          <Up> = 0 ⇒ v</Up>
          <Sub>cm</Sub>
          <Up> {t("constant ⇒ momentum conserved", "constant ⇒ momentum conserved")}</Up>
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 8)}>
        <T x={84} y={550} size={13} fill={RED} script anchor="start">
          {t(
            "every recoil, collision, explosion = a CoM statement in disguise",
            "har recoil, collision, explosion — chhupa hua CoM statement hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
