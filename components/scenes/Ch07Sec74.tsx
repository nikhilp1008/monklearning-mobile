/**
 * Ch07 · Section 74 — "Pitfalls and pro-tips for G and two-body systems"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 5.55, 25.26, 40.19, 56.49, 73.9, 83.63, 84.63]):
 *  0 title
 *  1 trap 1: orbits give only GM, G needs a lab
 *  2 trap 2: binary Kepler needs the sum
 *  3 trap 3: heavier star → smaller circle
 *  4 trap 4: density vs inverse-square form
 *  5 amber: master shortcut — weigh anything by its orbit
 *  6 green box: M = 4π²r³/GT²
 *  7 green margin: reduced mass turns two bodies into one
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52
 *  t1 bar y92..118 · t2 bar y138..164 · t3 bar y184..210 · t4 bar y230..256
 *  b5 line st x84 bl300
 *  b6 green box x300..780 y325..377(bl357)
 *  b7 bar x66 y420..472 lines bl440/466
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
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch07Sec74({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the final subtopic's traps */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "G and binaries — the traps and shortcuts",
            "G aur binaries — traps aur shortcuts"
          )}
        </T>
      </Fade>

      {/* beat 1 — orbits give only GM */}
      <Draw on={beat >= 1} delay={dl(1, 0.3)} d="M 66 92 v 26" stroke={RED} sw={3.4} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 0.7)}>
        <T x={84} y={110} size={13} fill={RED} script anchor="start">
          {t(
            "trap 1 — orbits give only GM; G itself needs a LAB (Cavendish)",
            "trap 1 — orbits sirf GM dete; G khud LAB se (Cavendish)"
          )}
        </T>
      </Fade>

      {/* beat 2 — binary Kepler needs the sum */}
      <Draw on={beat >= 2} delay={dl(2, 0.3)} d="M 66 138 v 26" stroke={RED} sw={3.4} dur={0.3} />
      <Fade on={beat >= 2} delay={dl(2, 0.7)}>
        <T x={84} y={156} size={13} fill={RED} script anchor="start">
          {t(
            "trap 2 — binary Kepler uses the SUM, not one mass",
            "trap 2 — binary Kepler SUM use karta, ek mass nahi"
          )}
        </T>
      </Fade>

      {/* beat 3 — heavier star, smaller circle */}
      <Draw on={beat >= 3} delay={dl(3, 0.3)} d="M 66 184 v 26" stroke={RED} sw={3.4} dur={0.3} />
      <Fade on={beat >= 3} delay={dl(3, 0.7)}>
        <T x={84} y={202} size={13} fill={RED} script anchor="start">
          {t(
            "trap 3 — heavier star → SMALLER circle: r ∝ 1⁄m",
            "trap 3 — bhaari star → CHHOTA circle: r ∝ 1⁄m"
          )}
        </T>
      </Fade>

      {/* beat 4 — density vs inverse-square */}
      <Draw on={beat >= 4} delay={dl(4, 0.3)} d="M 66 230 v 26" stroke={RED} sw={3.4} dur={0.3} />
      <Fade on={beat >= 4} delay={dl(4, 0.7)}>
        <T x={84} y={248} size={13} fill={RED} script anchor="start">
          {t(
            "trap 4 — \"same g/density\" → use the DENSITY form of g",
            "trap 4 — \"same g/density\" → g ka DENSITY form use karo"
          )}
        </T>
      </Fade>

      {/* beat 5 — the master shortcut */}
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={84} y={300} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "master shortcut: to weigh anything in space, find its orbit",
            "master shortcut: space mein kuchh bhi tolna ho, orbit dhoondo"
          )}
        </T>
      </Fade>

      {/* beat 6 — the universal weighing formula */}
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <Draw
          on={beat >= 6}
          delay={dl(6, 0.5)}
          d="M 312 325 h 456 q 12 0 12 12 v 28 q 0 12 -12 12 h -456 q -12 0 -12 -12 v -28 q 0 -12 12 -12"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.2)}>
        <T x={540} y={357} size={16} fill={INK} weight={800}>
          M = 4π²r³ ⁄ GT²
        </T>
      </Fade>

      {/* beat 7 — reduced mass closes the loop */}
      <Draw on={beat >= 7} delay={dl(7, 0.5)} d="M 66 420 v 52" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={84} y={440} size={13} fill={GREEN} script anchor="start">
          {t(
            "reduced mass turns any two-body problem back into one",
            "reduced mass kisi bhi two-body problem ko wapas EK mein"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 4)}>
        <T x={84} y={466} size={13} fill={GREEN} script anchor="start">
          {t(
            "every earlier formula applies unchanged",
            "har purana formula bina badle lagu hota hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
