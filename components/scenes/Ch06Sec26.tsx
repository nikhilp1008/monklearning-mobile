/**
 * Ch06 · Section 26 — "Torque and L by the determinant"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 1, 2, 3, 14.61, 23.22, 37.56, 54.8] — b0..b2 are 1 s in EN;
 * hi b4..b7 are 1 s → staggers ≤0.9 s everywhere):
 *  0 title
 *  1 figure right: O, r → P, F at P, ⊗ into-page marker, sign caption
 *  2 determinant: τ = r × F with rows x y z / Fx Fy Fz
 *  3 planar k-term line + sign chips
 *  4 givens line
 *  5 compute line + green −13 N·m box
 *  6 red clockwise note
 *  7 green same-machinery line + underline
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b1 | O(780,250) · r →(950,170) "r"(860,196) · F (950,170)→(1005,235)
 *       "F" st(1011,242) · ⊗ (760,205) r9 · caption script11 cx880 bl 340
 *  b2 | "τ = r × F =" st(80,168) · bars x260/x460 y115..210 · rows bl 140/170/200,
 *       cols cx300/360/420
 *  b3 | line sans16 st x80 bl 255 · chips y275 h32: x80 w300 · x400 w280
 *  b4 | sans16 st x80 bl 350
 *  b5 | sans16 st x80 bl 395 · green box x560..940 y370..425 · cx750 bl 405
 *  b6 | red bar x66 y445..505 · L1 st x84 bl 468 · L2 st x84 bl 496
 *  b7 | script13 st x80 bl 545 · underline y565 x80..600
 */

import React from "react";
import { Circle, Path, TSpan } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  Chip,
  T,
  arrowD,
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

export default function Ch06Sec26({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the fastest route */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={52} size={22} fill={INK} script>
          {t(
            "torque and L — by the determinant",
            "torque aur L — determinant se"
          )}
        </T>
      </Fade>

      {/* beat 1 — planar picture */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.1)}
        d="M 775 250 a 5 5 0 1 0 10 0 a 5 5 0 1 0 -10 0"
        stroke={INK}
        fill={INK}
        sw={2}
        dur={0.3}
      />
      <Draw on={beat >= 1} delay={dl(1, 0.2)} d={arrowD(780, 250, 950, 170)} stroke={INK} sw={2.6} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={860} y={196} size={14} fill={INK} weight={700}>
          r
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.5)} d={arrowD(950, 170, 1005, 235)} stroke={AMBER} sw={2.8} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 0.7)}>
        <T x={1011} y={242} size={14} fill={AMBER_DARK} anchor="start" weight={700}>
          F
        </T>
        <Circle cx={760} cy={205} r={9} fill="none" stroke={GREEN} strokeWidth={2} />
        <Path d="M 754 199 L 766 211 M 766 199 L 754 211" stroke={GREEN} strokeWidth={1.8} fill="none" />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={880} y={340} size={11} fill={GREEN_DARK} script>
          {t(
            "τ ⊥ the plane — its sign = the rotation sense",
            "τ ⊥ plane — uska sign = rotation ka sense"
          )}
        </T>
      </Fade>

      {/* beat 2 — the determinant */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={80} y={168} size={16} fill={INK} anchor="start" weight={700}>
          τ = r × F =
        </T>
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 0.4)}
        d="M 260 115 V 210 M 460 115 V 210"
        stroke={INK}
        sw={2}
        dur={0.4}
      />
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={300} y={140} size={14} fill={INK} weight={700}>
          i
        </T>
        <T x={360} y={140} size={14} fill={INK} weight={700}>
          j
        </T>
        <T x={420} y={140} size={14} fill={INK} weight={700}>
          k
        </T>
        <T x={300} y={170} size={14} fill={INK} weight={700}>
          x
        </T>
        <T x={360} y={170} size={14} fill={INK} weight={700}>
          y
        </T>
        <T x={420} y={170} size={14} fill={INK} weight={700}>
          z
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={300} y={200} size={14} fill={INK} weight={700}>
          F
          <Sub>x</Sub>
        </T>
        <T x={360} y={200} size={14} fill={INK} weight={700}>
          F
          <Sub>y</Sub>
        </T>
        <T x={420} y={200} size={14} fill={INK} weight={700}>
          F
          <Sub>z</Sub>
        </T>
      </Fade>

      {/* beat 3 — planar: only k, sign for free */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={80} y={255} size={16} fill={INK} anchor="start" weight={700}>
          {t("planar ⇒ only k :   τ", "planar ⇒ sirf k :   τ")}
          <Sub>z</Sub>
          <Up> = xF</Up>
          <Sub>y</Sub>
          <Up> − yF</Up>
          <Sub>x</Sub>
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <Chip x={80} y={275} w={300} h={32} fill={CREAM} stroke={GREEN} textFill={GREEN_DARK} size={14} script={false}>
          {t("+k = anticlockwise", "+k = anticlockwise")}
        </Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <Chip x={400} y={275} w={280} h={32} fill={CREAM} stroke={RED} textFill={RED} size={14} script={false}>
          {t("−k = clockwise", "−k = clockwise")}
        </Chip>
      </Fade>

      {/* beat 4 — the illustration */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={80} y={350} size={16} fill={INK} anchor="start" weight={700}>
          r = 2i + 3j m ,    F = 5i + j N
        </T>
      </Fade>

      {/* beat 5 — compute */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={80} y={395} size={16} fill={INK} anchor="start" weight={700}>
          τ
          <Sub>z</Sub>
          <Up> = (2)(1) − (3)(5) = 2 − 15</Up>
        </T>
      </Fade>
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.5)}
        d="M 572 370 h 356 q 12 0 12 12 v 31 q 0 12 -12 12 h -356 q -12 0 -12 -12 v -31 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.6}
        dur={0.5}
        fill={CREAM}
      />
      <Fade on={beat >= 5} delay={dl(5, 0.9)}>
        <T x={750} y={405} size={20} fill={INK} weight={700}>
          τ
          <Sub>z</Sub>
          <Up> = −13 N·m</Up>
        </T>
      </Fade>

      {/* beat 6 — what the minus means */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 66 445 v 60" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <T x={84} y={468} size={13} fill={RED} script anchor="start">
          {t(
            "negative ⇒ the force turns the body CLOCKWISE about O",
            "negative ⇒ force body ko O ke baare mein CLOCKWISE ghumata hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.9)}>
        <T x={84} y={496} size={13} fill={RED} script anchor="start">
          {t(
            "no angle drawn, no r⊥ hunted — the determinant did it all",
            "na angle khincha, na r⊥ dhoonda — determinant ne sab kar diya"
          )}
        </T>
      </Fade>

      {/* beat 7 — one method, two quantities */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={80} y={545} size={13} fill={GREEN_DARK} script anchor="start">
          {t(
            "put p = mv in the bottom row → the SAME determinant gives L — one method, two quantities",
            "bottom row mein p = mv rakho → WAHI determinant L deta hai — ek method, do quantities"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 0.6)} d="M 80 565 h 560" stroke={GREEN} sw={2.2} dur={0.6} />
    </Scene>
  );
}
