/**
 * Ch01 · Section 34 — "The quiet assumptions holding this topic together"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 11.3, 36.1, 52.1, 67.9, 87.7, 104.9, 125.6]):
 *  0 title · 1 A1: a true value exists (error = the gap)
 *  2 A2: the mean stands in for the truth
 *  3 the warning: random errors only
 *  4 archer callback: averaging is blind to systematic
 *  5 confidence ≠ correctness
 *  6 A3: the half-least-count rule (single reading only)
 *  7 A4: formulas give the MAXIMUM error — promise what you can guarantee
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b1 | badge c(76,110) · line x104 st bl 116 · sub (script 13) x104 st bl 146
 *  b2 | badge c(76,192) · line x104 st bl 198 · mean formula (sans 16) x580 st bl 198
 *  b3 | warning (script 14, red) x104 st bl 240
 *  b4 | card x104..640 y262..322 · text inside bl 296 · note x680 st bl 296
 *  b5 | line x104 st bl 356 · verdict (script 16, red) x700 st bl 356 · underline y372
 *  b6 | badge c(76,404) · line x104 st bl 410 · condition (script 13) x104 st bl 440
 *  b7 | badge c(76,492) · line x104 st bl 498 · verdict (script 15, green) x104 st bl 545 · bar
 */

import React from "react";
import { G } from 'react-native-svg';
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

function Badge({
  n,
  cy,
  on,
  delay,
}: {
  n: number;
  cy: number;
  on: boolean;
  delay: number;
}) {
  return (
    <G>
      <Draw
        on={on}
        delay={delay}
        d={`M 61 ${cy} A 15 15 0 1 1 91 ${cy} A 15 15 0 1 1 61 ${cy}`}
        stroke={AMBER}
        sw={2.2}
        dur={0.4}
      />
      <Fade on={on} delay={delay + 0.4}>
        <T x={76} y={cy + 5.5} size={15} fill={AMBER_DARK} weight={800}>
          {n}
        </T>
      </Fade>
    </G>
  );
}

export default function Ch01Sec34({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — nobody says these out loud */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={62} size={28} fill={RED} script>
          {t("four quiet assumptions — all examinable", "chaar ankahi baatein — sab exam mein aati")}
        </T>
      </Fade>

      {/* beat 1 — a true value exists */}
      <Badge n={1} cy={110} on={beat >= 1} delay={dl(1, 0.5)} />
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <T x={104} y={116} size={15} fill={INK} script anchor="start">
          {t(
            "a TRUE value exists — we simply can't reach it",
            "ek SACHCHI value hai — bas hum tak pahunch nahi sakte"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 12)}>
        <T x={104} y={146} size={13} fill={MUTED} script anchor="start">
          {t(
            "error = the gap between what we got and what we believe is there",
            "error = jo mila aur jo hai, unke beech ki doori"
          )}
        </T>
      </Fade>

      {/* beat 2 — the mean stands in */}
      <Badge n={2} cy={192} on={beat >= 2} delay={dl(2, 0.5)} />
      <Fade on={beat >= 2} delay={dl(2, 1.5)}>
        <T x={104} y={198} size={15} fill={INK} script anchor="start">
          {t("our stand-in for the truth: the arithmetic mean", "sach ka stand-in: arithmetic mean")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 8)}>
        <T x={580} y={198} size={16} fill={INK} weight={700} anchor="start">
          x̄ = (x₁ + x₂ + … + xₙ) / n
        </T>
      </Fade>

      {/* beat 3 — the warning */}
      <Fade on={beat >= 3} delay={dl(3, 2)}>
        <T x={104} y={240} size={14} fill={RED} script anchor="start">
          {t(
            "⚠ works ONLY for random errors — a systematic shift drags the mean along",
            "⚠ SIRF random errors ke liye — systematic shift mean ko bhi kheench leta hai"
          )}
        </T>
      </Fade>

      {/* beat 4 — averaging is blind */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 1)}
        d="M 116 262 h 512 q 12 0 12 12 v 36 q 0 12 -12 12 h -512 q -12 0 -12 -12 v -36 q 0 -12 12 -12"
        stroke={RED}
        sw={2}
        dur={0.8}
      />
      <Fade on={beat >= 4} delay={dl(4, 2.5)}>
        <T x={372} y={296} size={13} fill={INK} script>
          {t(
            "the corner-archer again: no scatter → averaging is BLIND",
            "wahi corner-archer: scatter hi nahi → average ANDHA hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 12)}>
        <T x={680} y={296} size={13} fill={RED} script anchor="start">
          {t("it doesn't look broken — it looks excellent", "toota nahi dikhta — behatareen dikhta hai")}
        </T>
      </Fade>

      {/* beat 5 — confidence vs correctness */}
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <T x={104} y={356} size={14} fill={INK} script anchor="start">
          {t(
            "five readings agreeing to 3 decimals — all wrong by the same amount",
            "paanch readings, 3 decimal tak same — sab utni hi galat"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 10)}>
        <T x={700} y={356} size={16} fill={RED} script anchor="start">
          {t("confidence ≠ correctness", "bharosa ≠ sachchai")}
        </T>
      </Fade>
      <Draw
        on={beat >= 5}
        delay={dl(5, 12)}
        d="M 700 372 C 780 368, 880 374, 960 370"
        stroke={RED}
        sw={2}
        dur={0.5}
      />

      {/* beat 6 — the half-least-count rule */}
      <Badge n={3} cy={404} on={beat >= 6} delay={dl(6, 0.5)} />
      <Fade on={beat >= 6} delay={dl(6, 1.5)}>
        <T x={104} y={410} size={15} fill={INK} script anchor="start">
          {t(
            "one single reading? then absolute error = ½ × least count",
            "sirf ek reading? toh absolute error = ½ × least count"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 10)}>
        <T x={104} y={440} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "single reading ONLY — with repeated data, the mean absolute error takes over",
            "SIRF single reading — repeated data par mean absolute error kaam karta hai"
          )}
        </T>
      </Fade>

      {/* beat 7 — deliberately pessimistic */}
      <Badge n={4} cy={492} on={beat >= 7} delay={dl(7, 0.5)} />
      <Fade on={beat >= 7} delay={dl(7, 1.5)}>
        <T x={104} y={498} size={15} fill={INK} script anchor="start">
          {t(
            "every coming formula gives the MAXIMUM error — all errors conspiring at once",
            "aage ke saare formulas MAXIMUM error dete hain — saare errors ek saath milkar"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 7}
        delay={dl(7, 14)}
        d="M 93 528 L 93 556"
        stroke={GREEN}
        sw={3.4}
        dur={0.4}
      />
      <Fade on={beat >= 7} delay={dl(7, 15)}>
        <T x={104} y={545} size={15} fill={GREEN} script anchor="start">
          {t(
            "in physics you promise only what you can GUARANTEE",
            "physics mein wahi waada karo jo GUARANTEE kar sako"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
