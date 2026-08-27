/**
 * Ch01 · Section 13 — "Example 3 [JEE Main]: surface tension from CGS to SI"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 20.8, 33.2, 58.0, 73.9, 91.0, 115.8, 121.7]):
 *  0 tag + question card: 36 dyne/cm → SI?
 *  1 STEP 1: surface tension = force / length
 *  2 [M L T⁻²]/[L] → L struck out → M T⁻² → a=1 b=0 c=−2, the instruction set
 *  3 STEP 2: the two systems (CGS g·cm·s / SI kg·m·s)
 *  4 STEP 3: plug into the master relation
 *  5 the evaporation: zero-power and s/s factors struck out → 36×10⁻³ = 0.036
 *  6 result chip: 0.036 N/m
 *  7 the direction check: kg bigger → number shrank ✓
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | tag x60..280 y40..78 · subnote (script 14) x320..597 bl 65
 *  b0 | card x140..940 y92..152 · question (sans 20) bl 130
 *  b1 | STEP chip x60..250 y176..214 · definition (sans 18) x290..578 bl 202
 *  b2 | derivation (sans 20) x290..530 bl 248 + L strikes · exponents x600..778 bl 248
 *  b2 | note (script 14) x600..800 bl 282
 *  b3 | STEP chip x60..250 y300..338 · rows (sans 16) x290 st bl 318 / 348
 *  b4 | STEP chip x60..250 y376..414 · relation (sans 20) x290..600 bl 402
 *  b5 | strikes over the vanishing factors · note (script 15, red) x290..570 bl 448
 *  b5 | collapse (sans 20) x290..590 bl 490
 *  b6 | result chip x660..860 y466..510
 *  b7 | bar x51 y540..570 · check (script 16, green) x62..546 bl 560
 *  b7 | note (script 14, amber) x600..777 bl 560
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch01Sec13({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the question */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <Chip x={60} y={40} w={220} h={38} fill={INK} textFill={CREAM} size={15}>
          {t("EXAMPLE 3 · JEE MAIN", "EXAMPLE 3 · JEE MAIN")}
        </Chip>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 14)}>
        <T x={320} y={65} size={14} fill={MUTED} script anchor="start">
          {t(
            "testing two things: dimensions + master relation",
            "do cheezein test ho rahi: dimensions + master relation"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 2)}
        d="M 152 92 h 776 q 12 0 12 12 v 36 q 0 12 -12 12 h -776 q -12 0 -12 -12 v -36 q 0 -12 12 -12"
        stroke={INK}
        sw={2.2}
        dur={0.9}
      />
      <Fade on={beat >= 0} delay={dl(0, 3.2)}>
        <T x={540} y={130} size={20} fill={INK} weight={700}>
          {t(
            "surface tension = 36 dyne/cm (CGS)  →  ? in SI",
            "surface tension = 36 dyne/cm (CGS)  →  SI mein kitna?"
          )}
        </T>
      </Fade>

      {/* beat 1 — STEP 1: the definition */}
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <Chip x={60} y={176} w={190} h={38} fill={CREAM} stroke={AMBER} textFill={INK} size={15}>
          {t("STEP 1 · dimensions", "STEP 1 · dimensions")}
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3)}>
        <T x={290} y={202} size={18} fill={INK} weight={700} anchor="start">
          {t("surface tension = force / length", "surface tension = force / length")}
        </T>
      </Fade>

      {/* beat 2 — the L cancels; the instruction set */}
      <Fade on={beat >= 2} delay={dl(2, 1.5)}>
        <T x={290} y={248} size={20} fill={INK} weight={700} anchor="start">
          [M L T⁻²] / [L]  =  M T⁻²
        </T>
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 4)}
        d="M 313 253 L 329 235 M 371 253 L 400 235"
        stroke={RED}
        sw={2.2}
        dur={0.5}
      />
      <Fade on={beat >= 2} delay={dl(2, 9)}>
        <T x={600} y={248} size={17} fill={AMBER_DARK} weight={700} anchor="start">
          a = 1 · b = 0 · c = −2
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 15)}>
        <T x={600} y={282} size={14} fill={MUTED} script anchor="start">
          {t("your entire instruction set", "poora instruction set yahi hai")}
        </T>
      </Fade>

      {/* beat 3 — STEP 2: the two systems */}
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <Chip x={60} y={300} w={190} h={38} fill={CREAM} stroke={AMBER} textFill={INK} size={15}>
          {t("STEP 2 · systems", "STEP 2 · systems")}
        </Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2)}>
        <T x={290} y={318} size={16} fill={INK} weight={600} anchor="start">
          CGS:  g · cm · s
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 6)}>
        <T x={290} y={348} size={16} fill={INK} weight={600} anchor="start">
          SI:  kg · m · s
        </T>
      </Fade>

      {/* beat 4 — STEP 3: plug in */}
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <Chip x={60} y={376} w={190} h={38} fill={CREAM} stroke={AMBER} textFill={INK} size={15}>
          {t("STEP 3 · plug in", "STEP 3 · plug in")}
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 3)}>
        <T x={290} y={402} size={20} fill={INK} weight={700} anchor="start">
          n₂ = 36 (g/kg)¹ (cm/m)⁰ (s/s)⁻²
        </T>
      </Fade>

      {/* beat 5 — most of it evaporates */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 2)}
        d="M 411 409 L 490 386"
        stroke={RED}
        sw={2.2}
        dur={0.4}
      />
      <Draw
        on={beat >= 5}
        delay={dl(5, 4.5)}
        d="M 492 409 L 540 386"
        stroke={RED}
        sw={2.2}
        dur={0.4}
      />
      <Fade on={beat >= 5} delay={dl(5, 6)}>
        <T x={290} y={448} size={15} fill={RED} script anchor="start">
          {t("power zero = 1 · s/s = 1 → both vanish!", "power zero = 1 · s/s = 1 → dono gayab!")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 12)}>
        <T x={290} y={490} size={20} fill={INK} weight={700} anchor="start">
          = 36 × g/kg = 36 × 10⁻³ = 0.036
        </T>
      </Fade>

      {/* beat 6 — the result */}
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <Chip x={660} y={466} w={200} h={44} fill={INK} textFill={CREAM} size={20} script={false}>
          0.036 N/m
        </Chip>
      </Fade>

      {/* beat 7 — the direction check */}
      <Draw
        on={beat >= 7}
        delay={dl(7, 2)}
        d="M 51 540 L 51 570"
        stroke={GREEN}
        sw={3.4}
        dur={0.4}
      />
      <Fade on={beat >= 7} delay={dl(7, 2.6)}>
        <T x={62} y={560} size={16} fill={GREEN} script anchor="start">
          {t(
            "check: kg is bigger → number must shrink — 36 → 0.036 ✓",
            "check: kg badi unit → number chhota hona chahiye — 36 → 0.036 ✓"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 9)}>
        <T x={620} y={560} size={14} fill={AMBER_DARK} script anchor="start">
          {t("3 seconds, 1 mark saved", "3 second, 1 mark bacha")}
        </T>
      </Fade>
    </Scene>
  );
}
