/**
 * M11 Ch07 · Section 4 — "Proving the theorem by induction"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. FLAGGED for extra eye-scrutiny (induction proof).
 *
 * A textbook induction-proof layout: small-caps AMBER_DARK step labels down
 * the left margin, the actual math in INK/GREEN_DARK to their right, building
 * top-to-bottom exactly in proof order — base case → hypothesis → multiply
 * by (a+b) → distribute+reindex (paired a-part / b-part) → combine via
 * Pascal's rule (boxed) → QED tombstone.
 *
 * Beats (en [0, 13.23, 29.44, 41.9, 55.21, 72.45, 91.99]):
 *  0 title (always-on)
 *  1 base case n=1: RHS = 1C0 a + 1C1 b = a+b, checkmark
 *  2 inductive hypothesis: assume true for n=k
 *  3 multiply both sides by (a+b) — the setup formula
 *  4 distribute + reindex: a-part and b-part, both landing on a^(k+1-r)b^r
 *  5 combine via Pascal's rule — the payoff, boxed (matches theorem for k+1)
 *  6 red-margin QED: Pascal's rule is the load-bearing step + tombstone mark
 *
 * Layout plan (Kalam bl−1.3s..+0.5s):
 *  b0 | title script26 cx540 bl58
 *  b1 | label script14 x150 bl112 · line script17 x150 bl140 · checkD x430 y136
 *  b2 | label script14 x150 bl177 · line script17 x150 bl205
 *  b3 | label script14 x150 bl242 · formula script18 x150 bl270
 *  b4 | label script14 x150 bl312 · line1(ink) x170 bl340 · line2(green) x170 bl370
 *  b5 | label script14 x150 bl412 · line script18 x170 bl440 · line script19 x170 bl470 · box x150..730 y450..492
 *  b6 | red bar x150 y520..556 · text script16 x170 bl545 · tombstone rect x900 y538..548
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
  INK,
  AMBER_DARK,
  GREEN_DARK,
  RED,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD, checkD } from "./math-kit";

export default function M11Ch07Sec4({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true}>
        <T x={540} y={58} size={26} fill={INK} script>
          {t("proof of the theorem — induction on n", "theorem ka proof — induction on n")}
        </T>
      </Fade>

      {/* beat 1 — base case n=1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={150} y={112} size={14} fill={AMBER_DARK} script anchor="start">
          {t("BASE CASE (n=1):", "BASE CASE (n=1):")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={150} y={140} size={17} fill={INK} script anchor="start">
          RHS = 1C0·a + 1C1·b = a + b
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.8)} d={checkD(440, 136, 20)} stroke={GREEN_DARK} sw={2.6} dur={0.5} />

      {/* beat 2 — inductive hypothesis */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={150} y={177} size={14} fill={AMBER_DARK} script anchor="start">
          {t("ASSUME (n=k):", "MAAN LO (n=k):")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={150} y={205} size={17} fill={INK} script anchor="start">
          {t("true for n = k  (inductive hypothesis)", "n = k ke liye sach  (inductive hypothesis)")}
        </T>
      </Fade>

      {/* beat 3 — multiply both sides by (a+b) */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={150} y={242} size={14} fill={AMBER_DARK} script anchor="start">
          {t("MULTIPLY BOTH SIDES BY (a+b):", "DONO SIDES KO (a+b) SE MULTIPLY KARO:")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.9)}>
        <T x={150} y={270} size={18} fill={INK} script anchor="start">
          (a+b)^(k+1) = (a+b)·Σ(r=0 to k) kCr a^(k-r) b^r
        </T>
      </Fade>

      {/* beat 4 — distribute + reindex, a-part and b-part matched */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={150} y={312} size={14} fill={AMBER_DARK} script anchor="start">
          {t("DISTRIBUTE, SHIFT INDEX IN THE b-SUM:", "DISTRIBUTE KARO, b-SUM MEIN INDEX SHIFT KARO:")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={170} y={340} size={17} fill={INK} script anchor="start">
          {t("from a·(...):  Σ kCr · a^(k+1-r) b^r", "a·(...) se:  Σ kCr · a^(k+1-r) b^r")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <T x={170} y={370} size={17} fill={GREEN_DARK} script anchor="start">
          {t("from b·(...), r→r-1:  Σ kC(r-1) · a^(k+1-r) b^r", "b·(...) se, r→r-1:  Σ kC(r-1) · a^(k+1-r) b^r")}
        </T>
      </Fade>

      {/* beat 5 — combine via Pascal's rule, boxed payoff */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={150} y={412} size={14} fill={AMBER_DARK} script anchor="start">
          {t("COMBINE — PASCAL'S RULE:", "COMBINE KARO — PASCAL'S RULE:")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.9)}>
        <T x={170} y={440} size={18} fill={INK} script anchor="start">
          kCr + kC(r-1) = (k+1)Cr
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.9)}>
        <T x={170} y={472} size={19} fill={AMBER_DARK} script anchor="start">
          {t("⇒ (a+b)^(k+1) = Σ(r=0 to k+1) (k+1)Cr a^(k+1-r) b^r", "⇒ (a+b)^(k+1) = Σ(r=0 to k+1) (k+1)Cr a^(k+1-r) b^r")}
        </T>
      </Fade>
      <Draw
        on={beat >= 5}
        delay={dl(5, 2.9)}
        d={roundRectD(150, 452, 720, 44)}
        stroke={AMBER_DARK}
        sw={2.4}
        dur={1}
      />

      {/* beat 6 — QED */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 150 522 v 34" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={170} y={545} size={16} fill={RED} script anchor="start">
          {t("Pascal's rule is the one load-bearing step", "Pascal's rule hi iss proof ka load-bearing step hai")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <Rect x={900} y={536} width={12} height={12} fill={INK} />
      </Fade>
    </Scene>
  );
}
