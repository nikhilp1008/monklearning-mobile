/**
 * Ch06 · Section 34 — "The equilibrium toolkit" (formulas)
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 8.45, 18.69, 19.69, 20.69, 33.91, 45.61, 59.69] — b2/b3 are 1 s
 * in EN; hi b5..b7 are 1 s → short staggers):
 *  0 title
 *  1 figure right: valley/hill/flat with balls — stable/unstable/neutral
 *  2 ΣF = 0 line + components sub (instant)
 *  3 Στ = 0 line (instant)
 *  4 amber F₁d₁ = F₂d₂ card + sub
 *  5 mechanical advantage line
 *  6 couple + x_cg lines
 *  7 green disturb-the-CG box
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b1 | valley M680,140 Q760,215 840,140 + ball (760,193) r10 · label st(860,180) ·
 *       hill M680,305 Q760,230 840,305 + ball (760,257) r10 · label st(860,255) ·
 *       flat (680,390)→(840,390) + ball (760,380) r10 · label st(860,385)
 *  b2 | sans16 st x70 bl 140 · sans13 st x90 bl 168
 *  b3 | sans16 st x70 bl 215
 *  b4 | amber card x70..560 y245..300 · cx315 bl 278 · sub script11 cx315 bl 322
 *  b5 | sans15 st x70 bl 365
 *  b6 | sans15 st x70 bl 410 / bl 445
 *  b7 | green box x70..1010 y480..560 · L1 script13 cx540 bl 510 · L2 script11 cx540 bl 540
 */

import React from "react";
import { TSpan } from 'react-native-svg';
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

export default function Ch06Sec34({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the toolkit */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={24} fill={INK} script>
          {t("the equilibrium toolkit", "equilibrium ka poora toolkit")}
        </T>
      </Fade>

      {/* beat 1 — three fates of a ball */}
      <Draw on={beat >= 1} delay={dl(1, 1)} d="M 680 140 Q 760 215 840 140" stroke={INK} sw={2.2} dur={0.8} />
      <Draw
        on={beat >= 1}
        delay={dl(1, 2)}
        d="M 750 193 a 10 10 0 1 0 20 0 a 10 10 0 1 0 -20 0"
        stroke={GREEN}
        fill={GREEN}
        sw={2}
        dur={0.4}
      />
      <Fade on={beat >= 1} delay={dl(1, 2.8)}>
        <T x={860} y={180} size={11} fill={GREEN_DARK} script anchor="start">
          {t("stable — CG rises if pushed", "stable — dhakke par CG uthta")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 4)} d="M 680 305 Q 760 230 840 305" stroke={INK} sw={2.2} dur={0.8} />
      <Draw
        on={beat >= 1}
        delay={dl(1, 5)}
        d="M 750 257 a 10 10 0 1 0 20 0 a 10 10 0 1 0 -20 0"
        stroke={RED}
        fill={RED}
        sw={2}
        dur={0.4}
      />
      <Fade on={beat >= 1} delay={dl(1, 5.8)}>
        <T x={860} y={255} size={11} fill={RED} script anchor="start">
          {t("unstable — CG falls", "unstable — CG girta hai")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 7)} d="M 680 390 H 840" stroke={INK} sw={2.2} dur={0.5} />
      <Draw
        on={beat >= 1}
        delay={dl(1, 7.8)}
        d="M 750 380 a 10 10 0 1 0 20 0 a 10 10 0 1 0 -20 0"
        stroke={AMBER}
        fill={AMBER}
        sw={2}
        dur={0.4}
      />
      <Fade on={beat >= 1} delay={dl(1, 8.5)}>
        <T x={860} y={385} size={11} fill={AMBER_DARK} script anchor="start">
          {t("neutral — CG stays level", "neutral — CG level rehta")}
        </T>
      </Fade>

      {/* beat 2 — translational (1 s in EN) */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={70} y={140} size={16} fill={INK} anchor="start" weight={700}>
          ΣF
          <Sub>ext</Sub>
          <Up> = 0   — translational</Up>
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={90} y={168} size={13} fill={MUTED} anchor="start" weight={700}>
          ΣF
          <Sub>x</Sub>
          <Up> = 0 ,  ΣF</Up>
          <Sub>y</Sub>
          <Up> = 0</Up>
        </T>
      </Fade>

      {/* beat 3 — rotational (1 s in EN) */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={70} y={215} size={16} fill={INK} anchor="start" weight={700}>
          Στ
          <Sub>ext</Sub>
          <Up> = 0   — {t("rotational (about any point)", "rotational (kisi bhi point ke baare mein)")}</Up>
        </T>
      </Fade>

      {/* beat 4 — the moments card */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.8)}
        d="M 82 245 h 466 q 12 0 12 12 v 31 q 0 12 -12 12 h -466 q -12 0 -12 -12 v -31 q 0 -12 12 -12"
        stroke={AMBER}
        sw={2.4}
        dur={0.6}
        fill={CREAM}
      />
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <T x={315} y={278} size={18} fill={INK} weight={700}>
          F₁ d₁ = F₂ d₂
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 5)}>
        <T x={315} y={322} size={11} fill={AMBER_DARK} script>
          {t("the principle of moments", "principle of moments")}
        </T>
      </Fade>

      {/* beat 5 — mechanical advantage (1 s in HI) */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={70} y={365} size={15} fill={INK} anchor="start" weight={700}>
          M.A. = Load / Effort = effort arm / load arm
        </T>
      </Fade>

      {/* beat 6 — couple and CG (1 s in HI) */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={70} y={410} size={15} fill={INK} anchor="start" weight={700}>
          τ
          <Sub>couple</Sub>
          <Up> = F × d</Up>
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.7)}>
        <T x={70} y={445} size={15} fill={INK} anchor="start" weight={700}>
          x
          <Sub>cg</Sub>
          <Up> = Σwᵢxᵢ / Σwᵢ = x</Up>
          <Sub>cm</Sub>
          <Up>  (uniform g)</Up>
        </T>
      </Fade>

      {/* beat 7 — judge by the CG (1 s in HI) */}
      <Draw
        on={beat >= 7}
        delay={dl(7, 0.1)}
        d="M 82 480 h 916 q 12 0 12 12 v 56 q 0 12 -12 12 h -916 q -12 0 -12 -12 v -56 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.6}
        dur={0.5}
        fill={CREAM}
      />
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={540} y={510} size={13} fill={GREEN_DARK} script>
          {t(
            "disturb it: CG RISES → stable · CG FALLS → unstable · CG LEVEL → neutral",
            "disturb karo: CG UTHE → stable · CG GIRE → unstable · CG LEVEL → neutral"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.8)}>
        <T x={540} y={540} size={11} fill={MUTED} script>
          {t(
            "ball in a valley · ball on a hilltop · ball on the floor",
            "ghaati mein gend · pahadi par gend · farsh par gend"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
