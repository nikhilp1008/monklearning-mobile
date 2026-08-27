/**
 * Ch05 · Section 6 — "Solving for perpendicularity, and 3-D angles and projections"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 12.5, 35.8, 57.3, 58.3, 59.3, 82.0, 98.2, 108.8] · dur 133.7 —
 *        b3 lasts ~1s in BOTH langs → tiny delays; b4 ~1s in en only → en-tiny;
 *        hi [0, 12.0, 36.2, 61.0, 62.0, 86.9, 109.7, 127.5, 135.8] · dur 160.4):
 *  0 title + subtitle
 *  1 Ex3 setup: find λ for ⊥ (inverted condition)
 *  2 Ex3 work: 5 − 2λ = 0 → λ = 5/2
 *  3 Ex4(a) setup chip
 *  4 unit-cube picture with body diagonal
 *  5 algebra: cos α = 1/√3 → 54.7°, symmetry promise
 *  6 part (b): ingredients A·B = 5, |B| = 3
 *  7 result chip proj = 5/3
 *  8 red verdict: divide by the magnitude you project ONTO
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52 · subtitle cx540 bl84
 *  Ex3: label st x80 bl118 · chip x80..500 y128..166 (size14) · note cx290 bl192
 *   work st x90 bl224 / bl254 · chip x90..280 y274..310 · note cx230 bl336
 *  Ex4: label st x550 bl118 · chip x550..1030 y128..166 (size14)
 *   cube front (570,230)-(650,310), back (600,200)-(680,280) · diag (570,310)→(680,200)
 *   cube label cx630 bl345 · b5 st x740: bl230 / bl262 · green bl292
 *   b6 label st x550 bl400 · work st x550 bl430 / bl460 · b7 chip x840..1030 y425..461
 *  b8 | bar x66 y500..558 · lines st x84 bl520 / bl546
 */

import React from "react";
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
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch05Sec6({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={22} fill={INK} script>
          {t("Perpendicularity, Inverted — and 3-D Angles", "Perpendicularity, Inverted — aur 3-D Angles")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 5)}>
        <T x={540} y={84} size={13} fill={MUTED} script>
          {t(
            "JEE Main inverts a condition — Advanced holds two formulas in 3-D",
            "JEE Main condition ulta deta hai — Advanced 3-D mein do formulas sambhalta hai"
          )}
        </T>
      </Fade>

      {/* beat 1 — Ex3 setup */}
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={80} y={118} size={13} fill={AMBER_DARK} script anchor="start">
          Ex 3 — JEE Main
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <Chip x={80} y={128} w={420} h={38} fill={CREAM} stroke={INK} textFill={INK} size={14} script={false}>
          find λ : A = 2î + λĵ + k̂ ⊥ B = î − 2ĵ + 3k̂
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 11)}>
        <T x={290} y={192} size={13} fill={MUTED} script>
          {t(
            "the angle is GIVEN — the unknown must force it",
            "angle DIYA hua hai — unknown use force karega"
          )}
        </T>
      </Fade>

      {/* beat 2 — Ex3 work */}
      <Fade on={beat >= 2} delay={dl(2, 1.5)}>
        <T x={90} y={224} size={15} fill={INK} anchor="start" weight={700}>
          A · B = (2)(1) + (λ)(−2) + (1)(3)
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 8)}>
        <T x={90} y={254} size={15} fill={INK} anchor="start" weight={700}>
          = 5 − 2λ = 0
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 13)}>
        <Chip x={90} y={274} w={190} h={36} fill={CREAM} stroke={GREEN} textFill={INK} size={16} script={false}>
          λ = 5 ⁄ 2
        </Chip>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 17)}>
        <T x={230} y={336} size={13} fill={GREEN} script>
          {t(
            "one step — once you saw the inversion",
            "ek step — bas inversion dikh jaaye"
          )}
        </T>
      </Fade>

      {/* beat 3 — Ex4(a) setup (~1s beat in both langs) */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={550} y={118} size={13} fill={AMBER_DARK} script anchor="start">
          Ex 4 — JEE Advanced, part (a)
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <Chip x={550} y={128} w={480} h={38} fill={CREAM} stroke={INK} textFill={INK} size={14} script={false}>
          {t("angle of A = î + ĵ + k̂ with the x-axis ?", "A = î + ĵ + k̂ ka x-axis ke saath angle ?")}
        </Chip>
      </Fade>

      {/* beat 4 — the unit cube (en: ~1s beat) */}
      <Draw
        on={beat >= 4}
        delay={dl(4, en ? 0.2 : 1.5)}
        d="M 570 230 h 80 v 80 h -80 Z M 600 200 h 80 v 80 h -80 Z M 570 230 L 600 200 M 650 230 L 680 200 M 570 310 L 600 280 M 650 310 L 680 280"
        stroke={INK}
        sw={2}
        dur={en ? 0.8 : 1.4}
      />
      <Draw on={beat >= 4} delay={dl(4, en ? 0.5 : 8)} d="M 570 310 L 680 200" stroke={AMBER} sw={3.2} dur={0.6} />
      <Fade on={beat >= 4} delay={dl(4, en ? 0.8 : 10)}>
        <T x={630} y={345} size={13} fill={AMBER_DARK} script>
          {t("the body diagonal of a unit cube", "unit cube ka body diagonal")}
        </T>
      </Fade>

      {/* beat 5 — the algebra + symmetry */}
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <T x={740} y={230} size={15} fill={INK} anchor="start" weight={700}>
          cos α = A · î ⁄ |A| = 1 ⁄ √3
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 8)}>
        <T x={740} y={262} size={16} fill={INK} anchor="start" weight={800}>
          α ≈ 54.7°
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 13)}>
        <T x={740} y={292} size={13} fill={GREEN} script anchor="start">
          {t(
            "with every axis — as symmetry promised",
            "har axis ke saath — jaisa symmetry ne wada kiya"
          )}
        </T>
      </Fade>

      {/* beat 6 — part (b) ingredients */}
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={550} y={400} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "part (b) — projection of A onto B = 2î + ĵ + 2k̂",
            "part (b) — A ka projection B = 2î + ĵ + 2k̂ par"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 5)}>
        <T x={550} y={430} size={15} fill={INK} anchor="start" weight={700}>
          A · B = 2 + 1 + 2 = 5
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 9)}>
        <T x={550} y={460} size={15} fill={INK} anchor="start" weight={700}>
          |B| = √(4+1+4) = 3
        </T>
      </Fade>

      {/* beat 7 — the projection */}
      <Fade on={beat >= 7} delay={dl(7, 1.5)}>
        <Chip x={840} y={425} w={190} h={36} fill={CREAM} stroke={GREEN} textFill={INK} size={15} script={false}>
          proj = 5⁄3 ≈ 1.67
        </Chip>
      </Fade>

      {/* beat 8 — which magnitude below */}
      <Draw on={beat >= 8} delay={dl(8, 0.5)} d="M 66 500 v 58" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 8} delay={dl(8, 1.2)}>
        <T x={84} y={520} size={13} fill={RED} script anchor="start">
          {t(
            "which magnitude on the bottom? the one you project ONTO — |B|",
            "neeche kaunsi magnitude? — jis par project kar rahe ho uski — |B|"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 8)}>
        <T x={84} y={546} size={13} fill={RED} script anchor="start">
          {t(
            "you strip the ground's length — not the shadow-caster's",
            "ground ki length hatti hai — shadow daalne waali cheez ki nahi"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
