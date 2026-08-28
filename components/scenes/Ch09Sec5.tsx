/**
 * Ch09 · Section 5 — "Deriving the depth law from a force balance"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en reveals [0, 5.46, 15.62, 20.57, 31.4, 32.4, 33.4, 34.4, 35.4]):
 *  0 title (always-on)
 *  1 a thin fluid slice, area A, drawn between depths h₁ and h₂
 *  2 free-body diagram: P₁A down (top), P₂A up (bottom), weight down (inside)
 *  3 each arrow labelled
 *  4 formula: P₂A = P₁A + ρA(h₂−h₁)g
 *  5 note: divide by A — it cancels
 *  6 formula: P₂ − P₁ = ρg(h₂−h₁)
 *  7 final formula (green): P = P₀ + ρgh
 *  8 red-margin note: depends on depth alone — the root of the paradox
 *
 * Layout plan:
 *  b1 | slice rect (cream)        | rect  | x420..660  y260..320
 *  b1 | "A" (13, w700)            | T mid  | x525..555  y268..282 (bl 278)
 *  b1 | "h₁" (12, muted) end      | T end  | x~370..400 y245..258 (bl 254)
 *  b1 | "h₂" (12, muted) end      | T end  | x~370..400 y317..330 (bl 326)
 *  b2 | top arrow (P₁A)           | Draw   | (540,225)→(540,258)
 *  b2 | bottom arrow (P₂A)        | Draw   | (540,355)→(540,322)
 *  b2 | weight arrow              | Draw   | (600,272)→(600,308)
 *  b3 | "P₁A" (14)                | T mid  | x520..560  y199..214 (bl 210)
 *  b3 | "P₂A" (14)                | T mid  | x520..560  y370..384 (bl 380)
 *  b3 | "weight" (12, muted) st   | T st   | x670..~726 y285..298 (bl 294)
 *  b4 | formula1 (22, w700)       | T mid  | x~408..672 y403..427 (bl 420)
 *  b5 | transition (script 13)    | T mid  | x~380..700 y443..457 (bl 453)
 *  b6 | formula2 (22, w700)       | T mid  | x~420..660 y473..497 (bl 490)
 *  b7 | formula3 (24, w800, grn)  | T mid  | x~440..640 y513..540 (bl 532)
 *  b8 | margin bar (red)          | Draw   | x60  y548..572
 *  b8 | note (script 14, red)     | T st   | x76..446  y557..573 (bl 568)
 */

import React from "react";
import { Rect } from 'react-native-svg';
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
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch09Sec5({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={28} fill={RED} script>
          {t("deriving P = P₀ + ρgh", "P = P₀ + ρgh derive karte hain")}
        </T>
      </Fade>

      {/* beat 1 — isolate a thin fluid slice */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <Rect x={420} y={260} width={240} height={60} fill={CREAM} stroke={INK} strokeWidth={2} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={540} y={278} size={13} fill={INK} weight={700} anchor="middle">
          A
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.4)}>
        <T x={400} y={254} size={12} fill={MUTED} anchor="end">
          h₁
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.8)}>
        <T x={400} y={326} size={12} fill={MUTED} anchor="end">
          h₂
        </T>
      </Fade>

      {/* beat 2 — the free-body diagram */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <Draw on={beat >= 2} d={arrowD(540, 225, 540, 258)} stroke={INK} sw={2.4} dur={0.4} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <Draw on={beat >= 2} d={arrowD(540, 355, 540, 322)} stroke={INK} sw={2.4} dur={0.4} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.7)}>
        <Draw on={beat >= 2} d={arrowD(600, 272, 600, 308)} stroke={INK} sw={2} dur={0.4} />
      </Fade>

      {/* beat 3 — each force, named */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={210} size={14} fill={INK} anchor="middle">
          P₁A
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.9)}>
        <T x={540} y={380} size={14} fill={INK} anchor="middle">
          P₂A
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <T x={670} y={294} size={12} fill={MUTED} script anchor="start">
          {t("weight", "weight")}
        </T>
      </Fade>

      {/* beat 4 — the balance */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={420} size={22} fill={INK} weight={700}>
          P₂A = P₁A + ρA(h₂−h₁)g
        </T>
      </Fade>

      {/* beat 5 — the area cancels */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={453} size={13} fill={MUTED} script>
          {t("(divide by A — it cancels)", "(A se divide — cancel ho jaata)")}
        </T>
      </Fade>

      {/* beat 6 — the reduced form */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={490} size={22} fill={INK} weight={700}>
          P₂ − P₁ = ρg(h₂−h₁)
        </T>
      </Fade>

      {/* beat 7 — put the top at the surface */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={532} size={24} fill={GREEN} weight={800}>
          P = P₀ + ρgh
        </T>
      </Fade>

      {/* beat 8 — the root of the paradox */}
      <Draw on={beat >= 8} delay={dl(8, 0.2)} d="M 60 548 L 60 572" stroke={RED} sw={3.2} dur={0.4} />
      <Fade on={beat >= 8} delay={dl(8, 0.5)}>
        <T x={76} y={568} size={14} fill={RED} script anchor="start">
          {t("depth alone — the root of the paradox", "sirf depth — paradox ki jadd")}
        </T>
      </Fade>
    </Scene>
  );
}
