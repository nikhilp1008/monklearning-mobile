/**
 * P12Ch05 · Section 50 — "Computing a flux, and closing the books on a split surface"
 * Subtopic: Magnetism and Gauss's Law
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * BOARD REWRITTEN (2026-08-21) — the artwork taught a different lesson.
 *
 * WHAT THE BOARD USED TO TEACH: a derivation of the integral form of
 * Gauss's law for magnetism from the divergence theorem (∯B·dA = ∭∇·B dV,
 * then ∇·B = 0). The narration explicitly says the law is a postulate, not
 * a derivation, and never mentions the divergence theorem.
 *
 * WHAT THE NARRATION ACTUALLY TEACHES: two examinable PROCEDURES. Procedure
 * one computes a flux in four steps (fix the outward normal · find B ·
 * integrate if B varies or S curves · keep the sign). Procedure two closes
 * the books on a closed surface split into faces: the signed fluxes sum to
 * zero, so the last face never has to be computed.
 *
 * BEAT MAP (8 reveals → gates 0..7, nothing above 7):
 *   0  "the examinable skill is procedural"      title + framing line
 *   1  "a cylinder split into caps and side"     the split closed surface, drawn
 *   2  "identify the surface, fix the normal"    procedure 1 · step 1
 *   3  "uniform field, flat surface"             procedure 1 · step 2
 *   4  "non-uniform or curved ⇒ integrate"       procedure 1 · step 3
 *   5  "keep the sign — this costs marks"        procedure 1 · step 4
 *   6  "split into faces, signed sum is zero"    procedure 2 band
 *   7  "you never compute the hard face"         Φ_missing = −Σ(rest) + chip
 */

import React from "react";
import { Ellipse, G, Line } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD,
  INK, INK_LIGHT, MUTED, AMBER_DARK, GREEN, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

function Num({ n, cx, cy, on, delay }: { n: number; cx: number; cy: number; on: boolean; delay: number }) {
  return (
    <G>
      <Draw on={on} delay={delay}
        d={`M ${cx - 13} ${cy} A 13 13 0 1 1 ${cx + 13} ${cy} A 13 13 0 1 1 ${cx - 13} ${cy}`}
        stroke={RED} sw={2.1} dur={0.38} />
      <Fade on={on} delay={delay + 0.28}>
        <T x={cx} y={cy + 5} size={13.5} fill={RED} weight={800}>{n}</T>
      </Fade>
    </G>
  );
}

export default function P12Ch05Sec50({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.35)}>
        <T x={540} y={50} size={25} fill={RED} script>
          {t("Computing a flux · closing the books", "Flux nikalna · hisaab band karna")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.7)}
        d="M 300 64 C 500 60, 640 68, 790 62" stroke={RED} sw={2.2} dur={0.7} />
      <Fade on={beat >= 0} delay={dl(0, 2.4)}>
        <T x={540} y={90} size={13.5} fill={INK_LIGHT} weight={700}>
          {t("The law is a postulate, so what is examinable is procedure — and there are exactly two.",
             "Law ek postulate hai, isliye examinable cheez procedure hai — aur wo sirf do hain.")}
        </T>
      </Fade>

      {/* ---------------- beat 1 — the split closed surface ---------------- */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={60} y={126} size={14} fill={RED} weight={800} anchor="start">
          {t("ONE CLOSED SURFACE, SPLIT INTO PIECES", "EK CLOSED SURFACE, TUKDON MEIN")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.7)}>
        <Ellipse cx={330} cy={252} rx={22} ry={62} fill={CREAM} stroke={INK} strokeWidth={2.2} />
        <Line x1={150} y1={190} x2={330} y2={190} stroke={INK} strokeWidth={2.2} />
        <Line x1={150} y1={314} x2={330} y2={314} stroke={INK} strokeWidth={2.2} />
        <Ellipse cx={150} cy={252} rx={22} ry={62} fill="none" stroke={INK} strokeWidth={2.2} strokeDasharray="6 5" />
      </Fade>
      {/* outward normals on each piece */}
      <Draw on={beat >= 1} delay={dl(1, 1.2)} d={arrowD(126, 252, 78, 252)} stroke={GREEN_DARK} sw={2.1} dur={0.35} />
      <Draw on={beat >= 1} delay={dl(1, 1.4)} d={arrowD(354, 252, 402, 252)} stroke={GREEN_DARK} sw={2.1} dur={0.35} />
      <Draw on={beat >= 1} delay={dl(1, 1.6)} d={arrowD(240, 190, 240, 142)} stroke={GREEN_DARK} sw={2.1} dur={0.35} />
      <Draw on={beat >= 1} delay={dl(1, 1.8)} d={arrowD(240, 314, 240, 362)} stroke={GREEN_DARK} sw={2.1} dur={0.35} />
      <Fade on={beat >= 1} delay={dl(1, 2.2)}>
        <T x={96} y={226} size={12} fill={GREEN_DARK} weight={800}>n̂</T>
        <T x={384} y={226} size={12} fill={GREEN_DARK} weight={800}>n̂</T>
        <T x={262} y={150} size={12} fill={GREEN_DARK} weight={800} anchor="start">n̂</T>
        <T x={262} y={356} size={12} fill={GREEN_DARK} weight={800} anchor="start">n̂</T>
        <T x={150} y={336} size={12.5} fill={INK_LIGHT} weight={700}>{t("flat cap", "flat cap")}</T>
        <T x={330} y={336} size={12.5} fill={INK_LIGHT} weight={700}>{t("flat cap", "flat cap")}</T>
        <T x={240} y={388} size={12.5} fill={INK_LIGHT} weight={700}>{t("curved side", "curved side")}</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.6)}>
        <T x={60} y={416} size={13} fill={INK} weight={700} anchor="start">
          {t("On a closed surface every normal points OUTWARD — the sign convention is fixed for you.",
             "Closed surface par har normal BAHAR ki taraf — sign convention pehle se tay hai.")}
        </T>
      </Fade>

      {/* ---------------- RIGHT: procedure one ---------------- */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={500} y={126} size={14.5} fill={RED} weight={800} anchor="start">
          {t("PROCEDURE 1 · COMPUTE A FLUX", "PROCEDURE 1 · FLUX NIKALO")}
        </T>
      </Fade>

      <Num n={1} cx={518} cy={164} on={beat >= 2} delay={dl(2, 0.5)} />
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={544} y={162} size={13.5} fill={INK} weight={800} anchor="start">
          {t("Identify the surface, then fix the normal", "Surface pehchaano, phir normal fix karo")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.1)}>
        <T x={544} y={186} size={12.5} fill={MUTED} weight={600} anchor="start">
          {t("for a closed surface the choice is made for you: outward",
             "closed surface ke liye choice tay hai: outward")}
        </T>
      </Fade>

      <Num n={2} cx={518} cy={228} on={beat >= 3} delay={dl(3, 0.2)} />
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <T x={544} y={226} size={13.5} fill={INK} weight={800} anchor="start">
          {t("Find the field over that surface", "Us surface par field pata karo")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={544} y={250} size={12.5} fill={GREEN_DARK} weight={700} anchor="start">
          {t("uniform B + flat S ⇒ Φ = B A cos θ, and you just substitute",
             "uniform B + flat S ⇒ Φ = B A cos θ, bas substitute karo")}
        </T>
      </Fade>

      <Num n={3} cx={518} cy={292} on={beat >= 4} delay={dl(4, 0.2)} />
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <T x={544} y={290} size={13.5} fill={INK} weight={800} anchor="start">
          {t("If B varies, or the surface curves — integrate", "Agar B badle ya surface mude — integrate karo")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={544} y={314} size={12.5} fill={MUTED} weight={600} anchor="start">
          {t("break it into patches small enough that B is nearly constant",
             "itne chhote patches mein todo ki B lagbhag constant ho")}
        </T>
      </Fade>

      <Num n={4} cx={518} cy={356} on={beat >= 5} delay={dl(5, 0.2)} />
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={544} y={354} size={13.5} fill={RED} weight={800} anchor="start">
          {t("Keep the sign — this is the step that costs marks", "Sign sambhaalo — yahi step marks kaatta hai")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={544} y={378} size={12.5} fill={RED} weight={700} anchor="start">
          {t("out +, in − · pick it at the start and hold it all the way through",
             "bahar +, andar − · shuru mein chuno aur ant tak wahi rakho")}
        </T>
      </Fade>

      {/* ---------------- beat 6 — procedure two ---------------- */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 60 442 H 1020 V 534 H 60 Z" stroke={AMBER_DARK} sw={2} dur={0.8} />
      <Fade on={beat >= 6} delay={dl(6, 0.9)}>
        <T x={82} y={470} size={14} fill={RED} weight={800} anchor="start">
          {t("PROCEDURE 2 · CLOSE THE BOOKS ON A SPLIT SURFACE", "PROCEDURE 2 · SPLIT SURFACE KA HISAAB BAND")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.3)}>
        <T x={82} y={494} size={13} fill={INK} weight={700} anchor="start">
          {t("Two caps and a curved side, or the six faces of a box — the signed fluxes must sum to zero:",
             "Do caps aur curved side, ya box ke chhah faces — signed fluxes ka jod zero hona chahiye:")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.7)}>
        <T x={82} y={522} size={16} fill={INK} weight={900} anchor="start">
          Φ₁ + Φ₂ + Φ₃ + … = 0
        </T>
      </Fade>

      {/* beat 7 — the payoff */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={420} y={522} size={16} fill={GREEN} weight={900} anchor="start">
          ⇒ Φ_missing = − ( sum of all the rest )
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <Chip x={40} y={548} w={1000} h={42} fill={GREEN} textFill="#ffffff" size={13.5}>
          {t("★ Know every flux but one and the last one is fixed — no integration, just careful signed arithmetic",
             "★ Ek ke alawa saare flux pata ho toh aakhri tay hai — koi integration nahi, bas signed arithmetic")}
        </Chip>
      </Fade>
    </Scene>
  );
}
