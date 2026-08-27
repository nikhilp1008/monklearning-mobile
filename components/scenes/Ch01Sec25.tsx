/**
 * Ch01 · Section 25 — "The pendulum derivation: mass cancels itself out"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 15.7, 32.4, 57.0, 76.6, 101.5, 119.5, 139.4]):
 *  0 title + underline
 *  1 step 1: t = C · lᵃ mᵇ gᶜ — find three of the four
 *  2 THE PENDULUM drawn: support, string l, bob m, angle θ, gravity g
 *  3 step 2: insert dims → T = Mᵇ · Lᵃ⁺ᶜ · T⁻²ᶜ
 *  4 step 3: equate — b = 0 · c = −½ · a = +½
 *  5 step 4: t = C √(l/g), no equations of motion
 *  6 the gift: mᵇ struck out — mass is irrelevant
 *  7 the honest gap: C = 2π, forever invisible
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | title (script 28, red) mid bl 62 · underline y88
 *  b1 | formula (sans 22) (600, bl 130) x526..674 · note (script 14) x790 st bl 130
 *  b2 | pendulum x100..320 y140..410: support y150 · string (160,150)→(210,345) ·
 *       bob c(214,361) r16 · vertical dash · θ arc r70 · labels l(213,296) m(214,408)
 *       θ(198,238) · g arrow (285,240)→(285,300), label (300,275)
 *  b3 | "step 2" (script 14) x380 st bl 200 · formula (sans 20) x460 st bl 200
 *  b4 | rows (sans 17) x380 st bl 250/288/326 + note (script 13) x560 st bl 250
 *  b5 | "t = C √(l/g)" (sans 24) (600, bl 390) · note (script 14, green) x760 st bl 390
 *  b6 | strike over mᵇ (612,136)→(640,114) · lines x380 st bl 448 / 486
 *  b7 | bar x369 y522..582 · lines x380 st bl 540 / 576
 */

import React from "react";
import { Path } from 'react-native-svg';
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
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch01Sec25({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the board favourite */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={62} size={28} fill={RED} script>
          {t("the pendulum — derived from thin air", "pendulum — hawa se derive karenge")}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 4)}
        d="M 330 88 C 460 84, 620 91, 750 87"
        stroke={RED}
        sw={2.4}
        dur={0.6}
      />

      {/* beat 1 — the assumption */}
      <Fade on={beat >= 1} delay={dl(1, 3)}>
        <T x={600} y={130} size={22} fill={INK} weight={800}>
          t = C · lᵃ mᵇ gᶜ
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 8)}>
        <T x={790} y={130} size={14} fill={MUTED} script anchor="start">
          {t("find 3 of these 4", "in 4 mein se 3 nikaalo")}
        </T>
      </Fade>

      {/* beat 2 — the pendulum itself */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 0.5)}
        d="M 110 150 H 220 M 122 150 l -8 -10 M 146 150 l -8 -10 M 170 150 l -8 -10 M 194 150 l -8 -10 M 218 150 l -8 -10"
        stroke={INK}
        sw={2.2}
        dur={0.8}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 1.6)}
        d="M 160 150 L 210 345"
        stroke={INK}
        sw={2}
        dur={0.6}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 2.5)}
        d="M 198 361 A 16 16 0 1 1 230 361 A 16 16 0 1 1 198 361"
        stroke={AMBER_DARK}
        sw={2.6}
        dur={0.6}
      />
      <Fade on={beat >= 2} delay={dl(2, 3.5)}>
        <Path
          d="M 160 150 V 350"
          fill="none"
          stroke={MUTED}
          strokeWidth={1.4}
          strokeDasharray="6 6"
        />
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 4.5)}
        d="M 160 220 A 70 70 0 0 0 177.4 217.8"
        stroke={AMBER}
        sw={2}
        dur={0.4}
      />
      <Fade on={beat >= 2} delay={dl(2, 5.5)}>
        <T x={213} y={296} size={16} fill={INK} script>
          l
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 6)}>
        <T x={214} y={408} size={16} fill={AMBER_DARK} script>
          m
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 6.5)}>
        <T x={198} y={238} size={15} fill={AMBER_DARK} script>
          θ
        </T>
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 8)}
        d="M 285 240 L 285 292 M 279 282 L 285 296 L 291 282"
        stroke={GREEN}
        sw={2.2}
        dur={0.5}
      />
      <Fade on={beat >= 2} delay={dl(2, 8.6)}>
        <T x={301} y={275} size={16} fill={GREEN} script>
          g
        </T>
      </Fade>

      {/* beat 3 — insert the dimensional formulae */}
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={380} y={200} size={14} fill={MUTED} script anchor="start">
          {t("step 2 · insert dims:", "step 2 · dims daalo:")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 3.5)}>
        <T x={560} y={200} size={20} fill={INK} weight={700} anchor="start">
          T = Mᵇ · Lᵃ⁺ᶜ · T⁻²ᶜ
        </T>
      </Fade>

      {/* beat 4 — equate the powers */}
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <T x={380} y={250} size={17} fill={INK} weight={700} anchor="start">
          M:  b = 0
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 4)}>
        <T x={560} y={250} size={13} fill={RED} script anchor="start">
          {t("(no mass on the left!)", "(left mein mass hai hi nahi!)")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 8)}>
        <T x={380} y={288} size={17} fill={INK} weight={700} anchor="start">
          T:  −2c = 1  →  c = −½
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 14)}>
        <T x={380} y={326} size={17} fill={INK} weight={700} anchor="start">
          L:  a + c = 0  →  a = +½
        </T>
      </Fade>

      {/* beat 5 — assemble */}
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <T x={600} y={390} size={24} fill={INK} weight={800}>
          t = C √(l/g)
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 8)}>
        <T x={760} y={390} size={14} fill={GREEN} script anchor="start">
          {t("zero equations of motion used", "ek bhi equation of motion nahi")}
        </T>
      </Fade>

      {/* beat 6 — the free gift: mass is irrelevant */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 2)}
        d="M 612 136 L 640 114"
        stroke={RED}
        sw={2.4}
        dur={0.4}
      />
      <Fade on={beat >= 6} delay={dl(6, 3)}>
        <T x={380} y={448} size={17} fill={AMBER_DARK} script anchor="start">
          {t("b = 0 → the mass is IRRELEVANT", "b = 0 → mass ka koi rol NAHI")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 10)}>
        <T x={380} y={486} size={15} fill={INK} script anchor="start">
          {t("hang a feather or a cannonball — same period", "pankh latkao ya tope ka gola — period same")}
        </T>
      </Fade>

      {/* beat 7 — the signature gap */}
      <Draw
        on={beat >= 7}
        delay={dl(7, 1)}
        d="M 369 522 L 369 582"
        stroke={RED}
        sw={3.4}
        dur={0.5}
      />
      <Fade on={beat >= 7} delay={dl(7, 2)}>
        <T x={382} y={540} size={16} fill={RED} script anchor="start">
          {t(
            "the real constant is C = 2π — forever invisible to dimensions",
            "asli constant C = 2π hai — dimensions ko kabhi nahi dikhega"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 12)}>
        <T x={382} y={576} size={14} fill={MUTED} script anchor="start">
          {t("that gap is the method's signature", "yehi gap method ki pehchaan hai")}
        </T>
      </Fade>
    </Scene>
  );
}
