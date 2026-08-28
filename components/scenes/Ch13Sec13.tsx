/**
 * Ch13 · Section 13 — "Two consequences the exams test endlessly"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 7.68, 20.11, 33.27, 40.95, 53.38, 68.0, 80.8]):
 *  0 shelf
 *  1 K-U-E vs position graph: U up-parabola, K down-parabola, E flat line
 *  2 energy ∝ A² : double A ⇒ energy quadruples
 *  3 hero: E ∝ A²
 *  4 passes mean 2×, extremes 2× per period ⇒ K,U peak twice
 *  5 hero: K, U oscillate at 2f (period T/2)
 *  6 caveat (red): only conservative, undamped
 *  7 convention: U measured from a chosen zero
 *
 * Layout plan (Anek bl−0.78s..+0.31s):
 *  b0 | shelf y80 x60..1020
 *  b1 | x-axis y260 x630..1010 → · y-axis x780 y275..90 ↑ · "energy" cx780 bl88 ·
 *      U curve M660,130 Q780,260 900,130 amber · K curve M660,260 Q780,130 900,260 ink ·
 *      E line 660,120→900,120 green · "U" x665 bl125 · "K" cx780 bl180 · "E" x905 bl124 · "x" x1005 bl264
 *  b2 | st x70 bl110 size13
 *  b3 | box x70..350 y130..175 rx14 · line cx210 bl159 size20
 *  b4 | st x70 bl215 size13
 *  b5 | box x70..420 y240..290 rx14 · line cx245 bl271 size18
 *  b6 | script13 st x70 bl335 red
 *  b7 | script12 st x70 bl375
 */

import React from "react";
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
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch13Sec13({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t("Square-law energy and the double-frequency blink", "Square-law energy aur double-frequency blink")}
        </T>
      </Fade>

      {/* beat 0 — the shelf */}
      <Draw on={beat >= 0} delay={dl(0, 0.3)} d="M 60 80 L 1020 80" stroke={INK} sw={1.4} dur={0.6} />

      {/* beat 1 — the K-U-E graph */}
      <Draw on={beat >= 1} delay={dl(1, 0.3)} d={arrowD(630, 260, 1010, 260)} stroke={INK} sw={1.6} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 0.8)} d={arrowD(780, 275, 780, 90)} stroke={INK} sw={1.6} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 1.3)} d="M 660 130 Q 780 260 900 130" stroke={AMBER_DARK} sw={2.4} dur={0.6} />
      <Draw on={beat >= 1} delay={dl(1, 2.0)} d="M 660 260 Q 780 130 900 260" stroke={INK} sw={2.4} dur={0.6} />
      <Draw on={beat >= 1} delay={dl(1, 2.7)} d="M 660 120 L 900 120" stroke={GREEN} sw={2.2} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 3.3)}>
        <T x={780} y={88} size={11} fill={MUTED}>
          {t("energy", "energy")}
        </T>
        <T x={665} y={125} size={13} fill={AMBER_DARK} anchor="start">
          U
        </T>
        <T x={780} y={180} size={13} fill={INK}>
          K
        </T>
        <T x={905} y={124} size={13} fill={GREEN} anchor="start">
          E
        </T>
        <T x={1005} y={264} size={12} fill={INK}>
          x
        </T>
      </Fade>

      {/* beat 2 — first consequence: square law */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={70} y={110} size={13} fill={INK} anchor="start" weight={700}>
          {t(
            "energy ∝ A²: double A ⇒ energy quadruples (not doubles)",
            "energy ∝ A²: A double karo ⇒ energy 4x (double nahi)"
          )}
        </T>
      </Fade>

      {/* beat 3 — hero: E ∝ A² */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <Draw
          on={beat >= 3}
          delay={dl(3, 0.3)}
          d="M 84 130 h 252 q 14 0 14 14 v 17 q 0 14 -14 14 h -252 q -14 0 -14 -14 v -17 q 0 -14 14 -14"
          stroke={GREEN}
          sw={2.4}
          dur={0.5}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.9)}>
        <T x={210} y={159} size={20} fill={INK} weight={800}>
          E ∝ A²
        </T>
      </Fade>

      {/* beat 4 — second consequence: timing */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={70} y={215} size={13} fill={INK} anchor="start" weight={700}>
          {t(
            "particle passes mean 2× & extremes 2× per T ⇒ K,U peak twice",
            "mean se 2× guzarti hai, extremes pe 2× freeze ⇒ K,U do baar peak"
          )}
        </T>
      </Fade>

      {/* beat 5 — hero: double frequency */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Draw
          on={beat >= 5}
          delay={dl(5, 0.3)}
          d="M 84 240 h 322 q 14 0 14 14 v 22 q 0 14 -14 14 h -322 q -14 0 -14 -14 v -22 q 0 -14 14 -14"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.1)}>
        <T x={245} y={271} size={18} fill={INK} weight={800}>
          K, U oscillate at 2f (period T/2)
        </T>
      </Fade>

      {/* beat 6 — the caveat */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={70} y={335} size={13} fill={RED} script anchor="start">
          {t(
            "E=½kA² only if conservative & undamped — friction leaks energy",
            "E=½kA² sirf tab jab conservative & undamped ho — friction se energy leak"
          )}
        </T>
      </Fade>

      {/* beat 7 — the reference convention */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={70} y={375} size={12} fill={INK} script anchor="start">
          {t(
            "U measured from a chosen zero (usually U=0 at mean)",
            "U ek chosen zero se measure hoti hai (aam taur par mean pe U=0)"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
