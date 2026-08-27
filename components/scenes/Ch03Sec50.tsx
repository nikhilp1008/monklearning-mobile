/**
 * Ch03 · Section 50 — "JEE Advanced: complementary angles and summed heights"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 12.5, 24.9, 38.3, 52.1, 61.0, 72.9, 87.8]):
 *  0 heading + problem
 *  1 30 + 60 = 90: the equal-range condition
 *  2 (a) sin 2θ: 60° vs 120°
 *  3 equal ranges + two-arc diagram
 *  4 (b) heights: 5 m and 15 m
 *  5 sum = 20 = u²/2g ✓
 *  6 general proof setup
 *  7 sin² + cos² = 1 → proved
 *
 * Layout plan (Kalam bl −1.3s..+0.5s · Anek bl −0.78s..+0.31s):
 *  b1 | line st x84 bl 118 s13 · underline M84 128 h420
 *  b2 | st x84 bl 164 / 192 s14
 *  b3 | st x84 bl 226 s13 · arcs: ground M80 470 h420 · low M110 470 Q300 400 490 470 ·
 *       high M110 470 Q300 250 490 470 · lbls (300,430)/(300,300) s11
 *  b4 | st x560 bl 164 / 192 s14
 *  b5 | st x560 bl 226 s14 · box x560..1000 y246..292 text cx780 bl 278 s15
 *  b6 | st x560 bl 336 s13
 *  b7 | st x560 bl 364 s14 · bar M546 388 v52 · lines st x560 bl 406 / 430 s12
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
  INK_LIGHT,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch03Sec50({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the question */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={48} size={20} fill={INK} script>
          {t(
            "JEE ADVANCED — complementary angles, proved",
            "JEE ADVANCED — complementary angles, saboot ke saath"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.2)} d="M 340 62 h 400" stroke={AMBER} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 5)}>
        <T x={540} y={84} size={12} fill={MUTED} script>
          {t(
            "both at 20 m/s (g = 10): one at 30°, one at 60° — (a) equal ranges? (b) H₁+H₂ = u²/2g?",
            "dono 20 m/s par (g = 10): ek 30°, ek 60° — (a) barabar range? (b) H₁+H₂ = u²/2g?"
          )}
        </T>
      </Fade>

      {/* beat 1 — the observation */}
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={84} y={118} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "30 + 60 = 90 — COMPLEMENTARY: exactly the equal-range condition",
            "30 + 60 = 90 — COMPLEMENTARY: bilkul equal-range waali shart"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2)} d="M 84 128 h 420" stroke={AMBER} sw={1.8} dur={0.5} />

      {/* beat 2 — sin 2θ for both */}
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={84} y={164} size={14} fill={INK} weight={700} anchor="start">
          (a)  θ = 30° → 2θ = 60°
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 5)}>
        <T x={84} y={192} size={14} fill={INK} weight={700} anchor="start">
          θ = 60° → 2θ = 120°, sin 120° = sin 60°
        </T>
      </Fade>

      {/* beat 3 — equal ranges + the two arcs */}
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={84} y={226} size={13} fill={GREEN} script anchor="start">
          {t(
            "same sin 2θ → same R · in general sin 2(90°−θ) = sin 2θ",
            "wahi sin 2θ → wahi R · aam taur par sin 2(90°−θ) = sin 2θ"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 2.4)} d="M 80 470 h 420" stroke={MUTED} sw={1.6} dur={0.6} />
      <Draw on={beat >= 3} delay={dl(3, 3.2)} d="M 110 470 Q 300 400 490 470" stroke={AMBER_DARK} sw={2.4} dur={0.9} />
      <Draw on={beat >= 3} delay={dl(3, 4.3)} d="M 110 470 Q 300 250 490 470" stroke={GREEN} sw={2.4} dur={0.9} />
      <Fade on={beat >= 3} delay={dl(3, 5.4)}>
        <T x={300} y={424} size={11} fill={AMBER_DARK} script>30°</T>
        <T x={300} y={300} size={11} fill={GREEN} script>60°</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 6.4)}>
        <T x={300} y={500} size={11} fill={INK_LIGHT} script>
          {t("same landing spot, different arcs", "girne ki jagah ek, arcs alag")}
        </T>
      </Fade>

      {/* beat 4 — the two heights */}
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={560} y={164} size={14} fill={INK} weight={700} anchor="start">
          (b)  H(30°) = 400·¼ ⁄ 20 = 5 m
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 5)}>
        <T x={560} y={192} size={14} fill={INK} weight={700} anchor="start">
          H(60°) = 400·¾ ⁄ 20 = 15 m
        </T>
      </Fade>

      {/* beat 5 — the sum matches */}
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={560} y={226} size={14} fill={INK} weight={700} anchor="start">
          5 + 15 = 20 m · u² ⁄ 2g = 400 ⁄ 20 = 20 m
        </T>
      </Fade>
      <Draw
        on={beat >= 5}
        delay={dl(5, 5)}
        d="M 572 246 h 416 q 12 0 12 12 v 22 q 0 12 -12 12 h -416 q -12 0 -12 -12 v -22 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.4}
        dur={0.6}
        fill={CREAM}
      />
      <Fade on={beat >= 5} delay={dl(5, 6)}>
        <T x={780} y={278} size={15} fill={INK} weight={800}>
          H₁ + H₂ = u² ⁄ 2g ✓
        </T>
      </Fade>

      {/* beat 6 — the general proof */}
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={560} y={336} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "the general proof — what JEE actually rewards:",
            "aam saboot — JEE asal mein isi ka inaam deta hai:"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 5)}>
        <T x={560} y={364} size={14} fill={INK} weight={700} anchor="start">
          H₁ + H₂ = (u²⁄2g)(sin²θ + cos²θ)
        </T>
      </Fade>

      {/* beat 7 — the identity closes it */}
      <Draw on={beat >= 7} delay={dl(7, 0.8)} d="M 546 388 v 52" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={560} y={406} size={12} fill={GREEN} script anchor="start">
          {t(
            "sin²θ + cos²θ = 1 → the sum is u²⁄2g, independent of the angle",
            "sin²θ + cos²θ = 1 → jod u²⁄2g hai, angle se azaad"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 7)}>
        <T x={560} y={430} size={12} fill={INK} script anchor="start">
          {t("proved — not memorised", "saabit kiya — rata nahi")}
        </T>
      </Fade>
    </Scene>
  );
}
