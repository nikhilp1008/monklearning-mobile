/**
 * Ch05 · Section 21 — "Deriving the spring's elastic PE"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 10.1, 34.9, 53.6, 72.7, 89.3, 110.5, 132.2] · dur 157.0;
 *        hi [0, 11.4, 36.2, 55.5, 72.0, 87.0, 110.4, 130.9] · dur 155.7):
 *  0 title + subtitle
 *  1 Hooke's law: spring + mass + F = kx, force not constant
 *  2 F-x line from origin, triangle hatch
 *  3 step 1: W = ∫₀ˣ k x′ dx′ + dummy note
 *  4 "sums the force over the stretch"
 *  5 step 2: ½ k x² = triangle area
 *  6 step 3: U_spring chip, conservative
 *  7 mistake band: difference of squares, not square of difference
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52 · subtitle cx540 bl82
 *  b1 | wall x100 y140..200 · spring (100,170)-(240,170) · mass x240..290 y150..190
 *     | pull (295,170)→(350,170) · chip x380..520 y150..186 · red cx300 bl225 · bl251
 *  b2 | y-axis (140,470)-(140,300) · x-axis (120,450)-(420,450) · line (140,450)-(380,290)
 *     | hatch x180..340 · "F = kx" st x400 bl285 · lbl cx270 bl495
 *  b3 | lbl st x560 bl140 · f st x580 bl172 · note cx770 bl200
 *  b4 | note cx770 bl236
 *  b5 | lbl bl272 · f bl304 · green cx770 bl332
 *  b6 | lbl bl368 · chip x580..860 y382..422 · script cx740 bl448
 *  b7 | bar x66 y485..580 · lines st x84 bl505 / bl535 / bl561
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
  arrowD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch05Sec21({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={22} fill={INK} script>
          {t("Deriving the Spring's Elastic PE", "Spring ki Elastic PE — Derivation")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 4)}>
        <T x={540} y={82} size={13} fill={MUTED} script>
          {t(
            "the derivation exposes a mark-costing mistake",
            "ye derivation ek marks khaane waali galti ujagar karti hai"
          )}
        </T>
      </Fade>

      {/* beat 1 — Hooke's law */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 1)}
        d="M 100 140 V 200 M 100 170 h 15 l 10 -14 l 14 28 l 14 -28 l 14 28 l 14 -28 l 14 28 l 10 -14 h 15"
        stroke={INK}
        sw={2.2}
        dur={1}
      />
      <Draw on={beat >= 1} delay={dl(1, 2.4)} d="M 240 190 v -34 q 0 -6 6 -6 h 38 q 6 0 6 6 v 34 Z" stroke={INK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 3.4)} d={arrowD(295, 170, 350, 170)} stroke={AMBER} sw={2.8} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 5)}>
        <Chip x={380} y={150} w={140} h={36} fill={CREAM} stroke={INK} textFill={INK} size={16} script={false}>
          F = k x
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 12)}>
        <T x={300} y={225} size={13} fill={RED} script>
          {t(
            "NOT constant — zero at rest, grows linearly",
            "constant NAHI — aaram par zero, linearly badhta hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 18)}>
        <T x={300} y={251} size={13} fill={AMBER_DARK} script>
          {t(
            "so you cannot write F × d — integrate",
            "isliye F × d nahi likh sakte — integrate karo"
          )}
        </T>
      </Fade>

      {/* beat 2 — the triangle */}
      <Draw on={beat >= 2} delay={dl(2, 1)} d={arrowD(140, 470, 140, 300)} stroke={INK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 2} delay={dl(2, 1.4)} d={arrowD(120, 450, 420, 450)} stroke={INK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 2} delay={dl(2, 2.5)} d="M 140 450 L 380 290" stroke={INK} sw={2.6} dur={0.8} />
      <Fade on={beat >= 2} delay={dl(2, 3.5)}>
        <T x={400} y={285} size={13} fill={INK} anchor="start" weight={700}>
          F = kx
        </T>
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 6)}
        d="M 180 450 V 424 M 220 450 V 397 M 260 450 V 370 M 300 450 V 344 M 340 450 V 317"
        stroke={GREEN}
        sw={1.4}
        dur={0.7}
      />
      <Fade on={beat >= 2} delay={dl(2, 9)}>
        <T x={270} y={478} size={13} fill={GREEN} script>
          {t("the work = this triangle's area", "work = isi triangle ka area")}
        </T>
      </Fade>

      {/* beat 3 — step 1 */}
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <T x={560} y={140} size={13} fill={AMBER_DARK} script anchor="start">
          step 1
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2)}>
        <T x={580} y={172} size={16} fill={INK} anchor="start" weight={700}>
          W = ∫₀ˣ k x′ dx′
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 10)}>
        <T x={770} y={200} size={12.5} fill={MUTED} script>
          {t(
            "x′ = dummy variable — no clash with the final x",
            "x′ = dummy variable — final x se nahi takrata"
          )}
        </T>
      </Fade>

      {/* beat 4 — what it means */}
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <T x={770} y={236} size={13} fill={MUTED} script>
          {t(
            "nothing exotic — it just sums the force over the stretch",
            "kuchh ajeeb nahi — bas poori stretch par force jod raha hai"
          )}
        </T>
      </Fade>

      {/* beat 5 — step 2 */}
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={560} y={272} size={13} fill={AMBER_DARK} script anchor="start">
          step 2
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <T x={580} y={304} size={16} fill={INK} anchor="start" weight={800}>
          = k x′²⁄2 |₀ˣ = ½ k x²
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 12)}>
        <T x={770} y={332} size={13} fill={GREEN} script>
          {t(
            "= the triangle: ½ · x · (kx) — calculus & geometry agree",
            "= wahi triangle: ½ · x · (kx) — calculus aur geometry sehmat"
          )}
        </T>
      </Fade>

      {/* beat 6 — step 3, the physics */}
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <T x={560} y={368} size={13} fill={AMBER_DARK} script anchor="start">
          {t("step 3 — the physics", "step 3 — physics")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 3)}>
        <Chip x={580} y={382} w={280} h={40} fill={CREAM} stroke={GREEN} textFill={INK} size={16} script={false}>
          U_spring = ½ k x²
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 10)}>
        <T x={740} y={448} size={13} fill={GREEN} script>
          {t(
            "conservative — it hands every joule back",
            "conservative — har joule wapas thama deta hai"
          )}
        </T>
      </Fade>

      {/* beat 7 — the classic mistake */}
      <Draw on={beat >= 7} delay={dl(7, 0.5)} d="M 66 496 v 82" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 2)}>
        <T x={84} y={516} size={13} fill={GREEN} script anchor="start">
          {t(
            "x₁ → x₂ : W = ½ k (x₂² − x₁²) — difference of squares ✓",
            "x₁ → x₂ : W = ½ k (x₂² − x₁²) — squares ka difference ✓"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 10)}>
        <T x={84} y={544} size={13} fill={RED} script anchor="start">
          {t(
            "½ k (x₂ − x₁)² ✗ — square of the difference, wrong every time",
            "½ k (x₂ − x₁)² ✗ — difference ka square, har baar galat"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 18)}>
        <T x={84} y={570} size={13} fill={RED} script anchor="start">
          {t(
            "say the words as you write — never lose that mark",
            "likhte waqt ye shabd bolo — wo mark kabhi nahi jayega"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
