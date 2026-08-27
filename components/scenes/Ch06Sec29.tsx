/**
 * Ch06 · Section 29 — "Worked example: angular momentum of a projectile [JEE Main]"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 16.81, 31.15, 40.79, 53.42, 67.33, 76.03, 85.08]; hi b2..b3 are
 * 1 s → short staggers there):
 *  0 title + problem subline
 *  1 figure: ground, launch O + u arrow + θ, parabola, top point, v arrow,
 *    v-line extension, H marker at x=140
 *  2 two-ideas chips (right)
 *  3 kinematics lines
 *  4 v ⊥ H note
 *  5 substitution line
 *  6 green result box + into-plane sub
 *  7 green lesson + underline
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b1 | ground (100,320)→(560,320) · O(140,320) dot · "O (launch)" cx140 bl 345 ·
 *       u arrow (140,320)→(190,270) "u"(204,262) · parabola M140,320 Q330,120 520,320 ·
 *       top dot (330,220) · v arrow (340,220)→(430,220) "v = u cosθ" st(438,226) ·
 *       v-line ext dash (330,220)→(130,220) · H dash x140 y225..315 + ticks ·
 *       "H" end(128,272)
 *  b2 | chips x600 y140/y190 w400 h36
 *  b3 | sans15 st x600 bl 270 / bl 305
 *  b4 | script12 st x600 bl 345
 *  b5 | sans16 st x600 bl 395
 *  b6 | green box x600..1030 y420..485 · cx815 bl 448 · sub script11 cx815 bl 472
 *  b7 | script13 st x80 bl 545 · underline y565 x80..600
 */

import React from "react";
import { Path, TSpan } from 'react-native-svg';
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

export default function Ch06Sec29({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the blend */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={20} fill={INK} script>
          {t(
            "angular momentum of a projectile — at the top [JEE Main]",
            "projectile ka angular momentum — top par [JEE Main]"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 8)}>
        <T x={540} y={92} size={12} fill={MUTED} script>
          {t(
            "mass m · speed u · angle θ — L about the launch point at the top?",
            "mass m · speed u · angle θ — top par launch point ke baare mein L?"
          )}
        </T>
      </Fade>

      {/* beat 1 — the key instant */}
      <Draw on={beat >= 1} delay={dl(1, 1)} d="M 100 320 H 560" stroke={INK} sw={2.2} dur={0.7} />
      <Draw
        on={beat >= 1}
        delay={dl(1, 2)}
        d="M 135 320 a 5 5 0 1 0 10 0 a 5 5 0 1 0 -10 0"
        stroke={INK}
        fill={INK}
        sw={2}
        dur={0.3}
      />
      <Fade on={beat >= 1} delay={dl(1, 2.5)}>
        <T x={140} y={345} size={11} fill={MUTED} script>
          {t("O (launch)", "O (launch)")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 3.2)} d={arrowD(140, 320, 190, 270)} stroke={MUTED} sw={2} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 3.8)}>
        <T x={204} y={262} size={13} fill={MUTED} weight={700}>
          u
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 4.5)}
        d="M 140 320 Q 330 120 520 320"
        stroke={INK}
        sw={2.2}
        dur={1.4}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 6.2)}
        d="M 325 220 a 5 5 0 1 0 10 0 a 5 5 0 1 0 -10 0"
        stroke={AMBER}
        fill={AMBER}
        sw={2}
        dur={0.3}
      />
      <Draw on={beat >= 1} delay={dl(1, 6.8)} d={arrowD(340, 220, 430, 220)} stroke={AMBER} sw={2.8} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 7.5)}>
        <T x={438} y={226} size={13} fill={AMBER_DARK} anchor="start" weight={700}>
          v = u cosθ
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 8.5)}>
        <Path
          d="M 330 220 H 130"
          fill="none"
          stroke={MUTED}
          strokeWidth={1.4}
          strokeDasharray="6 5"
        />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 9.5)}>
        <Path
          d="M 140 225 V 315 M 134 225 h 12 M 134 315 h 12"
          fill="none"
          stroke={GREEN}
          strokeWidth={1.8}
          strokeDasharray="5 4"
        />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 10.2)}>
        <T x={128} y={272} size={13} fill={GREEN_DARK} anchor="end" weight={700}>
          H
        </T>
      </Fade>

      {/* beat 2 — two ideas */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <Chip x={600} y={140} w={400} h={36} fill={CREAM} stroke={AMBER} textFill={INK} size={14}>
          {t("1 · projectile kinematics first", "1 · pehle projectile kinematics")}
        </Chip>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.7)}>
        <Chip x={600} y={190} w={400} h={36} fill={CREAM} stroke={AMBER} textFill={INK} size={14}>
          {t("2 · then L = m v r⊥", "2 · phir L = m v r⊥")}
        </Chip>
      </Fade>

      {/* beat 3 — kinematics at the top */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={600} y={270} size={15} fill={INK} anchor="start" weight={700}>
          H = u² sin²θ / 2g
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.7)}>
        <T x={600} y={305} size={15} fill={INK} anchor="start" weight={700}>
          v
          <Sub>top</Sub>
          <Up> = u cosθ   (v</Up>
          <Sub>y</Sub>
          <Up> = 0)</Up>
        </T>
      </Fade>

      {/* beat 4 — the ready-made perpendicular */}
      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <T x={600} y={345} size={12} fill={GREEN_DARK} script anchor="start">
          {t(
            "at the top: v ⊥ H — the perpendicular distance is ready-made",
            "top par: v ⊥ H — perpendicular distance bani-banayi hai"
          )}
        </T>
      </Fade>

      {/* beat 5 — substitute */}
      <Fade on={beat >= 5} delay={dl(5, 1.5)}>
        <T x={600} y={395} size={16} fill={INK} anchor="start" weight={700}>
          L = m (u cosθ)(H)
        </T>
      </Fade>

      {/* beat 6 — the result */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.8)}
        d="M 612 420 h 406 q 12 0 12 12 v 41 q 0 12 -12 12 h -406 q -12 0 -12 -12 v -41 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.6}
        dur={0.6}
        fill={CREAM}
      />
      <Fade on={beat >= 6} delay={dl(6, 1.8)}>
        <T x={815} y={448} size={17} fill={INK} weight={700}>
          L = m u³ sin²θ cosθ / 2g
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 3)}>
        <T x={815} y={472} size={11} fill={MUTED} script>
          {t("⊗ directed into the plane", "⊗ plane ke andar ki or")}
        </T>
      </Fade>

      {/* beat 7 — the signature blend */}
      <Fade on={beat >= 7} delay={dl(7, 1.5)}>
        <T x={80} y={545} size={13} fill={GREEN_DARK} script anchor="start">
          {t(
            "kinematics first, definition second — that two-step blend IS the JEE Main signature",
            "pehle kinematics, phir definition — wahi do-step blend JEE Main ki pehchaan hai"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 4)} d="M 80 565 h 600" stroke={GREEN} sw={2.2} dur={0.6} />
    </Scene>
  );
}
