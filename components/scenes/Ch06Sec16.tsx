/**
 * Ch06 · Section 16 — "Why the result is perpendicular, and how to compute it"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 8.19, 20.31, 29.18, 38.66, 58.62, 73.05, 87.13]):
 *  0 title
 *  1 determinant figure left: C = A × B, bars, three rows
 *  2 perpendicular test line (right of determinant)
 *  3 A·C expansion line
 *  4 six terms in fixed slots + paired cancel-underlines + "= 0 ⇒ C ⊥ A, ⊥ B"
 *  5 procedure line
 *  6 sanity chip
 *  7 xy-plane shortcut box
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b1 | "C = A × B =" st(80,165) · bars x250/x470 y115..205 · rows bl 138/165/195,
 *       cols cx300/360/420
 *  b2 | script13 st x540 bl 138
 *  b3 | sans14 st x80 bl 255 (≤x500)
 *  b4 | terms sans13 st x115/255/395/535/675/815 bl 300 · pair underlines y310
 *       amber(t1,t4) red(t2,t5) green(t3,t6) · result sans16 st x80 bl 350
 *  b5 | script13 st x80 bl 400
 *  b6 | chip x80 y425 w330 h36
 *  b7 | green box x560..1030 y420..500 · script13 cx795 bl 450 · sans17 cx795 bl 482
 */

import React from "react";
import { G, TSpan } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  Chip,
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
  <TSpan dy={4} fontSize={10}>
    {children}
  </TSpan>
);
const Up = ({ children }: { children: string | number | (string | number)[] }) => (
  <TSpan dy={-4}>{children}</TSpan>
);

// one three-component product term like "− AxAyBz"
function Term({
  x,
  sign,
  a,
  b,
  c,
}: {
  x: number;
  sign: string;
  a: string;
  b: string;
  c: string;
}) {
  return (
    <T x={x} y={300} size={13} fill={INK} anchor="start" weight={700}>
      {sign}A
      <Sub>{a}</Sub>
      <Up>A</Up>
      <Sub>{b}</Sub>
      <Up>B</Up>
      <Sub>{c}</Sub>
    </T>
  );
}

export default function Ch06Sec16({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the question */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={22} fill={INK} script>
          {t(
            "why perpendicular — and how to compute it",
            "perpendicular kyun — aur compute kaise karein"
          )}
        </T>
      </Fade>

      {/* beat 1 — the determinant, named C */}
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <T x={80} y={165} size={16} fill={INK} anchor="start" weight={700}>
          C = A × B =
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 2)}
        d="M 250 115 V 205 M 470 115 V 205"
        stroke={INK}
        sw={2}
        dur={0.6}
      />
      <Fade on={beat >= 1} delay={dl(1, 2.8)}>
        <T x={300} y={138} size={14} fill={INK} weight={700}>
          i
        </T>
        <T x={360} y={138} size={14} fill={INK} weight={700}>
          j
        </T>
        <T x={420} y={138} size={14} fill={INK} weight={700}>
          k
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.8)}>
        <T x={300} y={165} size={14} fill={INK} weight={700}>
          A
          <Sub>x</Sub>
        </T>
        <T x={360} y={165} size={14} fill={INK} weight={700}>
          A
          <Sub>y</Sub>
        </T>
        <T x={420} y={165} size={14} fill={INK} weight={700}>
          A
          <Sub>z</Sub>
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 4.8)}>
        <T x={300} y={195} size={14} fill={INK} weight={700}>
          B
          <Sub>x</Sub>
        </T>
        <T x={360} y={195} size={14} fill={INK} weight={700}>
          B
          <Sub>y</Sub>
        </T>
        <T x={420} y={195} size={14} fill={INK} weight={700}>
          B
          <Sub>z</Sub>
        </T>
      </Fade>

      {/* beat 2 — the perpendicular test */}
      <Fade on={beat >= 2} delay={dl(2, 1.5)}>
        <T x={540} y={138} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "test: if A · C = 0 → perpendicular, by definition",
            "test: agar A · C = 0 → perpendicular, by definition"
          )}
        </T>
      </Fade>

      {/* beat 3 — write out A · C */}
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <T x={80} y={255} size={14} fill={INK} anchor="start" weight={700}>
          A·C = A
          <Sub>x</Sub>
          <Up>(A</Up>
          <Sub>y</Sub>
          <Up>B</Up>
          <Sub>z</Sub>
          <Up>−A</Up>
          <Sub>z</Sub>
          <Up>B</Up>
          <Sub>y</Sub>
          <Up>) + A</Up>
          <Sub>y</Sub>
          <Up>(A</Up>
          <Sub>z</Sub>
          <Up>B</Up>
          <Sub>x</Sub>
          <Up>−A</Up>
          <Sub>x</Sub>
          <Up>B</Up>
          <Sub>z</Sub>
          <Up>) + A</Up>
          <Sub>z</Sub>
          <Up>(A</Up>
          <Sub>x</Sub>
          <Up>B</Up>
          <Sub>y</Sub>
          <Up>−A</Up>
          <Sub>y</Sub>
          <Up>B</Up>
          <Sub>x</Sub>
          <Up>)</Up>
        </T>
      </Fade>

      {/* beat 4 — watch the pairs cancel */}
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <G>
          <Term x={115} sign="" a="x" b="y" c="z" />
          <Term x={255} sign="− " a="x" b="z" c="y" />
          <Term x={395} sign="+ " a="y" b="z" c="x" />
          <Term x={535} sign="− " a="y" b="x" c="z" />
          <Term x={675} sign="+ " a="z" b="x" c="y" />
          <Term x={815} sign="− " a="z" b="y" c="x" />
        </G>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 4)} d="M 115 312 h 92" stroke={AMBER} sw={2.6} dur={0.4} />
      <Draw on={beat >= 4} delay={dl(4, 4.8)} d="M 535 312 h 108" stroke={AMBER} sw={2.6} dur={0.4} />
      <Draw on={beat >= 4} delay={dl(4, 6.2)} d="M 255 312 h 108" stroke={RED} sw={2.6} dur={0.4} />
      <Draw on={beat >= 4} delay={dl(4, 7)} d="M 675 312 h 108" stroke={RED} sw={2.6} dur={0.4} />
      <Draw on={beat >= 4} delay={dl(4, 8.4)} d="M 395 312 h 108" stroke={GREEN} sw={2.6} dur={0.4} />
      <Draw on={beat >= 4} delay={dl(4, 9.2)} d="M 815 312 h 108" stroke={GREEN} sw={2.6} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 12)}>
        <T x={80} y={350} size={16} fill={GREEN_DARK} anchor="start" weight={700}>
          {t(
            "= 0  ⇒  C ⊥ A   (same algebra ⇒ C ⊥ B)",
            "= 0  ⇒  C ⊥ A   (wahi algebra ⇒ C ⊥ B)"
          )}
        </T>
      </Fade>

      {/* beat 5 — the procedure */}
      <Fade on={beat >= 5} delay={dl(5, 1.5)}>
        <T x={80} y={400} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "procedure: write the determinant → expand the top row → MINUS on the j term",
            "procedure: determinant likho → top row se expand → j term par MINUS"
          )}
        </T>
      </Fade>

      {/* beat 6 — the 5-second sanity check */}
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <Chip x={80} y={425} w={330} h={36} fill={CREAM} stroke={GREEN} textFill={GREEN_DARK} size={14}>
          {t("5-sec sanity: answer · A must = 0", "5-sec sanity: answer · A = 0 aana hi chahiye")}
        </Chip>
      </Fade>

      {/* beat 7 — the xy-plane shortcut */}
      <Draw
        on={beat >= 7}
        delay={dl(7, 0.8)}
        d="M 572 420 h 446 q 12 0 12 12 v 56 q 0 12 -12 12 h -446 q -12 0 -12 -12 v -56 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.6}
        dur={0.8}
        fill={CREAM}
      />
      <Fade on={beat >= 7} delay={dl(7, 2)}>
        <T x={795} y={450} size={13} fill={GREEN_DARK} script>
          {t(
            "both vectors in the xy-plane → only k survives:",
            "dono vectors xy-plane mein → sirf k bachta hai:"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 4)}>
        <T x={795} y={482} size={17} fill={INK} weight={700}>
          C = (A
          <Sub>x</Sub>
          <Up>B</Up>
          <Sub>y</Sub>
          <Up> − A</Up>
          <Sub>y</Sub>
          <Up>B</Up>
          <Sub>x</Sub>
          <Up>) k</Up>
        </T>
      </Fade>
    </Scene>
  );
}
