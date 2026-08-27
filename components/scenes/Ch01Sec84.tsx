/**
 * Ch01 · Section 84 — "The units you must keep straight — length, mass and time"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 10.4, 35.2, 60.1, 78.5, 102.1, 113.8, 138.7]):
 *  0 title
 *  1 small end: fermi / angstrom + reversal warning
 *  2 large end: AU / ly / parsec rows
 *  3 parsec = PARallax SECond definition
 *  4 the gift: d(pc) = 1/p green box
 *  5 1 amu
 *  6 three mass methods incl. m = qBr/v
 *  7 gravitational = inertial (experiment!) · caesium second
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b1 | rows 15 st x80 bl 92/120 · amber 13 st x80 bl 148
 *  b2 | rows 15 st x80 bl 190/218/246
 *  b3 | right col: amber 14 st x600 bl 190 · script 12 st x600 bl 216
 *  b4 | box x560..1030 y240..286 (17 bl 270) · green 12 cx795 bl 312
 *  b5 | 15 st x80 bl 350
 *  b6 | 13 st x80 bl 390
 *  b7 | amber 14 mid bl 440 · ink 13 mid bl 480
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch01Sec84({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={50} size={24} fill={INK} script>
          {t(
            "the units you must keep straight",
            "wo units jo seedhi rakhni hi hain"
          )}
        </T>
      </Fade>

      {/* beat 1 — the small end */}
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <T x={80} y={92} size={15} fill={INK} weight={600} anchor="start">
          1 fermi (fm) = 10⁻¹⁵ m
        </T>
        <T x={400} y={92} size={13} fill={MUTED} script anchor="start">
          {t("the scale of nuclei", "nabhikon ka paimana")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 8)}>
        <T x={80} y={120} size={15} fill={INK} weight={600} anchor="start">
          1 Å = 10⁻¹⁰ m
        </T>
        <T x={400} y={120} size={13} fill={MUTED} script anchor="start">
          {t("the scale of atoms", "parmanuon ka paimana")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 15)}>
        <T x={80} y={148} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "an atom ≈ 100,000 × its own nucleus — the fermi is the SMALLER (students reverse these!)",
            "parmanu ≈ 100,000 × apna nabhik — fermi CHHOTI hai (students inhe ulat dete!)"
          )}
        </T>
      </Fade>

      {/* beat 2 — the large end */}
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <T x={80} y={190} size={15} fill={INK} weight={600} anchor="start">
          1 AU ≈ 1.496 × 10¹¹ m
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 9)}>
        <T x={80} y={218} size={15} fill={INK} weight={600} anchor="start">
          1 ly ≈ 9.46 × 10¹⁵ m
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 17)}>
        <T x={80} y={246} size={15} fill={INK} weight={600} anchor="start">
          1 parsec ≈ 3.08 × 10¹⁶ m ≈ 3.26 ly
        </T>
      </Fade>

      {/* beat 3 — parsec's name */}
      <Fade on={beat >= 3} delay={dl(3, 2)}>
        <T x={600} y={190} size={14} fill={AMBER_DARK} script anchor="start">
          {t("parsec = PARallax SECond", "parsec = PARallax SECond")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 8)}>
        <T x={600} y={216} size={12} fill={MUTED} script anchor="start">
          {t(
            "the distance where 1 AU subtends 1 arc-second",
            "wo doori jahan 1 AU ek arc-second ka kon banata hai"
          )}
        </T>
      </Fade>

      {/* beat 4 — the gift */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 1)}
        d="M 572 240 h 446 q 12 0 12 12 v 22 q 0 12 -12 12 h -446 q -12 0 -12 -12 v -22 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.4}
        dur={0.7}
      />
      <Fade on={beat >= 4} delay={dl(4, 2.5)}>
        <T x={795} y={270} size={17} fill={GREEN} weight={700}>
          d (parsec) = 1 ⁄ p (arc-seconds)
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 12)}>
        <T x={795} y={312} size={12} fill={GREEN} script>
          {t(
            "no constants — defined precisely so this would be true",
            "koi constant nahi — theek isi liye aise paribhashit kiya gaya"
          )}
        </T>
      </Fade>

      {/* beat 5 — the amu */}
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <T x={80} y={350} size={15} fill={INK} weight={600} anchor="start">
          1 amu = m(¹²C) ⁄ 12 ≈ 1.66 × 10⁻²⁷ kg
        </T>
      </Fade>

      {/* beat 6 — three mass methods */}
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={80} y={390} size={13} fill={INK} script anchor="start">
          {t(
            "ordinary → balance · atomic → spectrograph: m = qBr ⁄ v · astronomical → gravity (the orbit)",
            "saadharan → balance · parmanvik → spectrograph: m = qBr ⁄ v · khagoliya → gravity (kaksha)"
          )}
        </T>
      </Fade>

      {/* beat 7 — the two deep facts */}
      <Fade on={beat >= 7} delay={dl(7, 3)}>
        <T x={540} y={440} size={14} fill={AMBER_DARK} script>
          {t(
            "gravitational mass = inertial mass — by EXPERIMENT, not logic: the seed general relativity grew from",
            "gravitational mass = inertial mass — PRAYOG se, tark se nahi: wahi beej jisse general relativity ugi"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 7}
        delay={dl(7, 10)}
        d="M 240 456 C 380 452, 640 460, 840 455"
        stroke={AMBER_DARK}
        sw={1.8}
        dur={0.7}
      />
      <Fade on={beat >= 7} delay={dl(7, 14)}>
        <T x={540} y={496} size={13} fill={INK} script>
          {t(
            "the SI second: 9,192,631,770 caesium oscillations — atomic clocks drift ~1 s in 100,000 years",
            "SI second: caesium ke 9,192,631,770 kampan — atomic clocks ~1 lakh saal mein 1 s khisakti hain"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
