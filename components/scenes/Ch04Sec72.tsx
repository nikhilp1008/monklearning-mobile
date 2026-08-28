/**
 * Ch04 · Section 72 — "Derivation: the Atwood machine"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 15.19, 40.02, 50.86, 72.62, 97.45, 122.28, 140.54]):
 *  0 title
 *  1 setup: m1>m2 over fixed frictionless pulley, a=common accel, T=uniform tension
 *  2 figure (left col): pulley, m1 (bigger, down) & m2 (smaller, up), T & mg arrows, caption
 *  3 formula (i): FBD m1 (down+): m1g − T = m1a
 *  4 formula (ii): FBD m2 (up+): T − m2g = m2a
 *  5 hero box: add (i)+(ii), T cancels → a = (m1−m2)g/(m1+m2)
 *  6 hero box: T = 2m1m2g/(m1+m2)
 *  7 red margin: sanity checks — equal masses, m2→0, T always between the weights
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl 52 · setup st x84 bl 92 / 116
 *  L fig | pulley c(280,150) r16 · strings → m1 x195..270 y200..248 · m2 x305..360 y200..234 ·
 *    T lbl (250,178)/(308,178) · mg arr m1(232,248→285) lbl(232,301) · mg arr m2(332,234→265) lbl(332,281) ·
 *    a arr m1(175,205→240) lbl(165,225) · a arr m2(385,234→199) lbl(395,219) · caption cx280 bl 318
 *  R col x600..1030 | b3 bl 150 · b4 bl 184 · b5 box y210..254 bl 238 · b6 box y270..314 bl 298
 *  b7 | bar x66 y415..515 · lines st x84 bl 445 / 471 / 497
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

export default function Ch04Sec72({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={52} size={20} fill={INK} script>
          {t(
            "CBSE Derivation — the Atwood machine",
            "CBSE Derivation — Atwood machine"
          )}
        </T>
      </Fade>

      {/* beat 1 — setup */}
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <T x={84} y={92} size={13} fill={INK} script anchor="start">
          {t(
            "m₁ > m₂ hang from a light string over a fixed, frictionless pulley",
            "m₁ > m₂ ek halki string se fixed, frictionless pulley par latakti"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 9)}>
        <T x={84} y={116} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "a = common acceleration (m₁ down, m₂ up) · T = uniform tension",
            "a = common acceleration (m₁ neeche, m₂ upar) · T = uniform tension"
          )}
        </T>
      </Fade>

      {/* beat 2 — the figure */}
      <Draw on={beat >= 2} delay={dl(2, 0.6)} d={ringD(280, 150, 16, 16)} stroke={INK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 2} delay={dl(2, 1.2)} d="M 268 160 L 235 200" stroke={INK} sw={1.8} dur={0.3} />
      <Draw on={beat >= 2} delay={dl(2, 1.5)} d="M 292 160 L 325 200" stroke={INK} sw={1.8} dur={0.3} />
      <Draw
        on={beat >= 2}
        delay={dl(2, 1.9)}
        d="M 195 200 h 75 v 48 h -75 z"
        stroke={INK}
        sw={2.2}
        dur={0.6}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 2.6)}
        d="M 305 200 h 55 v 34 h -55 z"
        stroke={INK}
        sw={2.2}
        dur={0.5}
      />
      <Fade on={beat >= 2} delay={dl(2, 3.2)}>
        <T x={250} y={178} size={11} fill={GREEN} weight={700}>
          T
        </T>
        <T x={308} y={178} size={11} fill={GREEN} weight={700}>
          T
        </T>
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 3.6)}
        d={arrowD(232, 248, 232, 285)}
        stroke={RED}
        sw={2.2}
        dur={0.3}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 4)}
        d={arrowD(332, 234, 332, 265)}
        stroke={RED}
        sw={2.2}
        dur={0.3}
      />
      <Fade on={beat >= 2} delay={dl(2, 4.4)}>
        <T x={232} y={301} size={11} fill={RED} weight={700}>
          m₁g
        </T>
        <T x={332} y={281} size={11} fill={RED} weight={700}>
          m₂g
        </T>
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 4.8)}
        d={arrowD(175, 205, 175, 240)}
        stroke={GREEN}
        sw={2.2}
        dur={0.3}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 5.2)}
        d={arrowD(385, 234, 385, 199)}
        stroke={GREEN}
        sw={2.2}
        dur={0.3}
      />
      <Fade on={beat >= 2} delay={dl(2, 5.6)}>
        <T x={165} y={225} size={11} fill={GREEN} weight={700} anchor="end">
          a
        </T>
        <T x={395} y={219} size={11} fill={GREEN} weight={700} anchor="start">
          a
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 6.4)}>
        <T x={280} y={318} size={11} fill={MUTED} script>
          {t(
            "two equations, add them, and the tension cancels",
            "do equations, unhe jodo, aur tension cancel ho jaati"
          )}
        </T>
      </Fade>

      {/* beat 3 — equation (i) */}
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <T x={600} y={150} size={14} fill={INK} weight={700} anchor="start">
          m₁g − T = m₁a  …(i)
        </T>
        <T x={600} y={172} size={11} fill={MUTED} script anchor="start">
          {t("FBD of m₁ — down positive", "FBD of m₁ — neeche positive")}
        </T>
      </Fade>

      {/* beat 4 — equation (ii) */}
      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <T x={600} y={200} size={14} fill={INK} weight={700} anchor="start">
          T − m₂g = m₂a  …(ii)
        </T>
        <T x={600} y={222} size={11} fill={MUTED} script anchor="start">
          {t("FBD of m₂ — up positive", "FBD of m₂ — upar positive")}
        </T>
      </Fade>

      {/* beat 5 — a, tension cancels */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.8)}
        d="M 600 250 h 430 q 12 0 12 12 v 26 q 0 12 -12 12 h -430 q -12 0 -12 -12 v -26 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.8}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 5} delay={dl(5, 1.8)}>
        <T x={815} y={284} size={15} fill={INK} weight={800}>
          a = (m₁−m₂)g ÷ (m₁+m₂)
        </T>
      </Fade>

      {/* beat 6 — the tension */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.8)}
        d="M 600 316 h 430 q 12 0 12 12 v 26 q 0 12 -12 12 h -430 q -12 0 -12 -12 v -26 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.8}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 6} delay={dl(6, 1.8)}>
        <T x={815} y={350} size={15} fill={INK} weight={800}>
          T = 2m₁m₂g ÷ (m₁+m₂)
        </T>
      </Fade>

      {/* beat 7 — sanity checks */}
      <Draw on={beat >= 7} delay={dl(7, 0.6)} d="M 66 415 v 100" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={84} y={445} size={14} fill={RED} script anchor="start">
          {t(
            "m₁=m₂ → a=0, T=mg — balanced, nothing moves",
            "m₁=m₂ → a=0, T=mg — santulit, kuchh nahi hilta"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 7)}>
        <T x={84} y={471} size={14} fill={RED} script anchor="start">
          {t(
            "m₂→0 → a→g, T→0 — free fall on a slack string",
            "m₂→0 → a→g, T→0 — dheeli string par free fall"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 13)}>
        <T x={84} y={497} size={14} fill={GREEN} script anchor="start">
          {t(
            "T always lies between the two weights — outside that range, a sign error",
            "T hamesha dono weights ke beech — us range se bahar, sign ki galti"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
