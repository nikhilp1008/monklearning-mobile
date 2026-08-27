/**
 * Ch07 · Section 11 — "Worked example: orbital speed by dimensional analysis (JEE Main)"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 1, 2, 15.91, 26.23, 35.11, 48.34, 54.91, 65.74]):
 *  0 title + problem
 *  1 ansatz v = k·GᵃMᵇrᶜ
 *  2 dimensions of each quantity
 *  3 collected powers equation
 *  4 chip: T match → a = ½
 *  5 chips: M match → b = ½ · L match → c = −½
 *  6 green box: v = k·√(GM/r)
 *  7 green line: form found with no dynamics
 *  8 red margin: full dynamics gives k = 1
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52 · problem cx540 bl84
 *  b1 line cx540 bl130 (18) · b2 line cx540 bl180 (14) · b3 line cx540 bl235 (16)
 *  chips y275..310: c1 x90 w300 · c2 x400 w290 · c3 x700 w300 (text bl298)
 *  b6 green box x380..700 y350..410 · text bl386
 *  b7 line cx540 bl450 · underline M340 462 h400
 *  b8 bar x66 y490..545 · lines st x84 bl510 / 536
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
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch07Sec11({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the cross-topic favourite */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "Example [JEE Main] — orbital speed from dimensions alone",
            "Example [JEE Main] — sirf dimensions se orbital speed"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 0.8)}>
        <T x={540} y={84} size={12} fill={MUTED} script>
          {t(
            "how does v depend on G, planet mass M, and radius r?",
            "v, G, planet ke mass M aur radius r par kaise depend karti hai?"
          )}
        </T>
      </Fade>

      {/* beat 1 — the ansatz */}
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={540} y={130} size={18} fill={INK} weight={800}>
          v = k·Gᵃ·Mᵇ·rᶜ　{t("(k dimensionless)", "(k dimensionless)")}
        </T>
      </Fade>

      {/* beat 2 — write the dimensions */}
      <Fade on={beat >= 2} delay={dl(2, 0.5)}>
        <T x={540} y={180} size={14} fill={INK} weight={700}>
          [v] = LT⁻¹   ·   [G] = M⁻¹L³T⁻²   ·   [M] = M   ·   [r] = L
        </T>
      </Fade>

      {/* beat 3 — collect the powers */}
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={540} y={235} size={16} fill={INK} weight={700}>
          M⁰ L¹ T⁻¹  =  M⁽ᵇ⁻ᵃ⁾ · L⁽³ᵃ⁺ᶜ⁾ · T⁽⁻²ᵃ⁾
        </T>
      </Fade>

      {/* beat 4 — match time */}
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <Chip x={90} y={275} w={300} h={35} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={14} script={false}>
          T: −2a = −1 → a = ½
        </Chip>
      </Fade>

      {/* beat 5 — match mass and length */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <Chip x={400} y={275} w={290} h={35} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={14} script={false}>
          M: b − a = 0 → b = ½
        </Chip>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.9)}>
        <Chip x={700} y={275} w={300} h={35} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={14} script={false}>
          L: 3a + c = 1 → c = −½
        </Chip>
      </Fade>

      {/* beat 6 — put them back */}
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <Draw
          on={beat >= 6}
          delay={dl(6, 0.5)}
          d="M 392 350 h 296 q 12 0 12 12 v 36 q 0 12 -12 12 h -296 q -12 0 -12 -12 v -36 q 0 -12 12 -12"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.2)}>
        <T x={540} y={388} size={20} fill={INK} weight={800}>
          v = k·√(G·M ⁄ r)
        </T>
      </Fade>

      {/* beat 7 — no equation of motion solved */}
      <Fade on={beat >= 7} delay={dl(7, 1)}>
        <T x={540} y={450} size={13} fill={GREEN} script>
          {t(
            "v ∝ √(GM ⁄ r) — found without solving any equation of motion",
            "v ∝ √(GM ⁄ r) — ek bhi equation of motion hal kiye bina"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 2.5)} d="M 340 462 h 400" stroke={GREEN} sw={2} dur={0.5} />

      {/* beat 8 — dimensions fix the shape */}
      <Draw on={beat >= 8} delay={dl(8, 0.6)} d="M 66 490 v 56" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 8} delay={dl(8, 1.4)}>
        <T x={84} y={510} size={13} fill={RED} script anchor="start">
          {t(
            "full dynamics (gravity = centripetal) gives k = 1",
            "poori dynamics (gravity = centripetal) se k = 1"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 4.5)}>
        <T x={84} y={536} size={13} fill={RED} script anchor="start">
          {t(
            "but dimensions ALONE pinned the shape — that is the power tested",
            "par dimensions ne AKELE shape fix kar diya — yahi power test hoti hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
