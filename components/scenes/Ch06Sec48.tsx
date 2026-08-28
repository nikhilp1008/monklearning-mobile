/**
 * Ch06 · Section 48 — "Worked example: disc about a tangent [JEE Main]"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0,12.46,21.33,28.16,48.38,49.38,50.38,51.38] — b4..b7 fast in EN;
 * hi [0,1,10.56,18.07,36.58,43.15,55.87,64.23] — b0 fast in HI → both kept
 * ≤0.9 s except b3, which has room in both languages):
 *  0 title + subline
 *  1 figure: disc, diameter axis, tangent parallel at d=R, ⊥ axis at centre
 *  2 plan: two moves — ⊥-axis theorem, then ∥-axis theorem
 *  3 I_z = ½MR² = 2I_d ⇒ green box I_d = ¼MR²
 *  4 tangent ∥ diameter, d = R away
 *  5 I_tangent = I_d + MR² ⇒ green box (5/4)MR²
 *  6 route summary
 *  7 hallmark line
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b1 | circle c(270,175) r65 · diameter (205,175)→(335,175) "I_d" st(340,180) ·
 *       tangent (205,240)→(335,240) "tangent" st(340,244) · ⊙ centre ·
 *       d-arrow (270,175)→(270,240) "d=R" st(280,210)
 *  b2 | sans13 cx540 bl295
 *  b3 | sans15 st x80 bl325 · green box x80..420 y350..395 cx250 bl380
 *  b4 | sans14 st x80 bl430
 *  b5 | sans14 st x80 bl460 · green box x560..980 y480..530 cx770 bl512
 *  b6 | script13 cx540 bl552
 *  b7 | script13 cx540 bl578
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
  arrowD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  GREEN_DARK,
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

export default function Ch06Sec48({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — two theorems in sequence */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={52} size={20} fill={INK} script>
          {t(
            "disc about a tangent [JEE Main]",
            "tangent ke baare mein disc [JEE Main]"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 0.5)}>
        <T x={540} y={88} size={12} fill={MUTED} script>
          {t(
            "mass M, radius R — MOI about a tangent IN the plane?",
            "mass M, radius R — plane ke andar tangent ke baare mein MOI?"
          )}
        </T>
      </Fade>

      {/* beat 1 — the two-step figure */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.2)}
        d="M 205 175 a 65 65 0 1 0 130 0 a 65 65 0 1 0 -130 0"
        stroke={INK}
        sw={2.2}
        dur={0.9}
      />
      <Draw on={beat >= 1} delay={dl(1, 1)} d="M 205 175 H 335" stroke={INK} sw={2} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 1.4)}>
        <T x={340} y={180} size={12} fill={INK} anchor="start" weight={700}>
          I
          <Sub>d</Sub>
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 1.6)}
        d="M 270 175 a 5 5 0 1 0 0.1 0 M 264 175 h -6 M 276 175 h 6 M 270 169 v -6 M 270 181 v 6"
        stroke={INK}
        sw={1.6}
        dur={0.3}
      />
      <Draw on={beat >= 1} delay={dl(1, 2)} d="M 205 240 H 335" stroke={GREEN} sw={2.4} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 2.4)}>
        <T x={340} y={244} size={12} fill={GREEN_DARK} anchor="start" weight={700}>
          {t("tangent", "tangent")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2.8)} d={arrowD(270, 175, 270, 240)} stroke={AMBER_DARK} sw={2} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 3.2)}>
        <T x={280} y={210} size={12} fill={AMBER_DARK} anchor="start" weight={700}>
          d = R
        </T>
      </Fade>

      {/* beat 2 — the plan */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={295} size={13} fill={INK} script>
          {t(
            "two moves: ⊥-axis theorem first, then ∥-axis theorem",
            "do moves: pehle ⊥-axis theorem, phir ∥-axis theorem"
          )}
        </T>
      </Fade>

      {/* beat 3 — the diameter value */}
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <T x={80} y={325} size={15} fill={INK} anchor="start" weight={700}>
          I
          <Sub>z</Sub>
          <Up> = ½MR² = I</Up>
          <Sub>x</Sub>
          <Up> + I</Up>
          <Sub>y</Sub>
          <Up> = 2I</Up>
          <Sub>d</Sub>
        </T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 3)}
        d="M 80 350 h 340 q 12 0 12 12 v 21 q 0 12 -12 12 h -340 q -12 0 -12 -12 v -21 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.4}
        dur={0.6}
        fill={CREAM}
      />
      <Fade on={beat >= 3} delay={dl(3, 4.2)}>
        <T x={250} y={380} size={17} fill={INK} weight={700}>
          I
          <Sub>d</Sub>
          <Up> = ¼MR²</Up>
        </T>
      </Fade>

      {/* beat 4 — the tangent setup */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={80} y={430} size={14} fill={INK} script anchor="start">
          {t(
            "a tangent ∥ a diameter, distance d = R away",
            "tangent, diameter ke ∥, distance d = R par"
          )}
        </T>
      </Fade>

      {/* beat 5 — walk it to the tangent */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={80} y={460} size={14} fill={INK} anchor="start" weight={700}>
          I
          <Sub>tangent</Sub>
          <Up> = I</Up>
          <Sub>d</Sub>
          <Up> + MR² = ¼MR² + MR²</Up>
        </T>
      </Fade>
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.5)}
        d="M 572 480 h 396 q 12 0 12 12 v 26 q 0 12 -12 12 h -396 q -12 0 -12 -12 v -26 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.6}
        dur={0.5}
        fill={CREAM}
      />
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={770} y={512} size={19} fill={INK} weight={700}>
          I
          <Sub>tangent</Sub>
          <Up> = (5/4)MR²</Up>
        </T>
      </Fade>

      {/* beat 6 — the whole route */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={552} size={13} fill={GREEN_DARK} script>
          {t(
            "route: ⊥-axis → diameter, then ∥-axis → tangent",
            "route: ⊥-axis → diameter, phir ∥-axis → tangent"
          )}
        </T>
      </Fade>

      {/* beat 7 — the hallmark */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={578} size={13} fill={MUTED} script>
          {t(
            "skip either theorem and you're stuck — the JEE Main hallmark",
            "koi bhi theorem chhodo aur atak jaoge — JEE Main ki pehchaan"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
