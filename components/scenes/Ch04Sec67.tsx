/**
 * Ch04 · Section 67 — "Worked Example 3 [JEE Main]: the contact force between two blocks"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 19.71, 37.63, 62.46, 87.3, 100.69, 125.53]):
 *  0 title
 *  1 problem: m1=2kg, m2=3kg touching, frictionless floor, F=10N on m1, find a and Nc
 *  2 diagram: two blocks in contact, F on rear block, caption — system then isolate
 *  3 formula box: a = F/(m1+m2) = 10/5 = 2 m/s²
 *  4 text: isolate the FRONT block m2 — only Nc acts on it horizontally, rear is messy
 *  5 formula box: Nc = m2·a = 3×2 = 6 N
 *  6 red margin: cross-check 10−6=4=m1·a ✓ + the trap — push m2 instead → 4N not 6N
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl 52 · problem st x84 bl 92 / 116
 *  b2 diagram: floor y245 · block1 x300..370 y210..245 · block2 x370..430 y210..245 ·
 *    F arr (245,227)→(300,227) lbl (235,221) · m1 lbl cx335 y265 · m2 lbl cx400 y265 ·
 *    caption cx540 bl 288
 *  b3 box x260..820 y310..354 bl 338
 *  b4 st x84 bl 382 / 406
 *  b5 box x260..820 y428..472 bl 456
 *  b6 | bar x66 y494..578 · lines st x84 bl 514 / 538 / 562
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

export default function Ch04Sec67({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={52} size={19} fill={INK} script>
          {t(
            "Example 3 [JEE Main] — the contact force between two blocks",
            "Example 3 [JEE Main] — do blocks ke beech contact force"
          )}
        </T>
      </Fade>

      {/* beat 1 — problem */}
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <T x={84} y={92} size={13} fill={INK} script anchor="start">
          {t(
            "m₁ = 2 kg, m₂ = 3 kg touching on a frictionless floor · F = 10 N pushes m₁",
            "frictionless floor par chhoote hue m₁ = 2 kg, m₂ = 3 kg · F = 10 N m₁ ko dhakelta"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 8)}>
        <T x={84} y={116} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "find: (a) the common acceleration  (b) the contact force",
            "nikaalo: (a) common acceleration  (b) contact force"
          )}
        </T>
      </Fade>

      {/* beat 2 — diagram */}
      <Draw on={beat >= 2} delay={dl(2, 0.8)} d="M 260 245 H 470" stroke={INK} sw={2.4} dur={0.5} />
      <Draw
        on={beat >= 2}
        delay={dl(2, 1.6)}
        d="M 300 210 h 70 v 35 h -70 z"
        stroke={INK}
        sw={2.2}
        dur={0.6}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 2.4)}
        d="M 370 210 h 60 v 35 h -60 z"
        stroke={INK}
        sw={2.2}
        dur={0.6}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 3.2)}
        d={arrowD(245, 227, 300, 227)}
        stroke={AMBER_DARK}
        sw={2.6}
        dur={0.4}
      />
      <Fade on={beat >= 2} delay={dl(2, 3.8)}>
        <T x={235} y={221} size={12} fill={AMBER_DARK} weight={700} anchor="end">
          F = 10 N
        </T>
        <T x={335} y={265} size={12} fill={INK} weight={700}>
          m₁ = 2 kg
        </T>
        <T x={400} y={265} size={12} fill={INK} weight={700}>
          m₂ = 3 kg
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 5)}>
        <T x={540} y={288} size={12} fill={MUTED} script>
          {t(
            "treat the pair as one system for a, then isolate the front block for Nc",
            "a ke liye jodi ko ek system maano, phir Nc ke liye aage waala block alag karo"
          )}
        </T>
      </Fade>

      {/* beat 3 — step 1: acceleration */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 0.8)}
        d="M 272 310 h 536 q 12 0 12 12 v 20 q 0 12 -12 12 h -536 q -12 0 -12 -12 v -20 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.8}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 3} delay={dl(3, 1.8)}>
        <T x={540} y={338} size={16} fill={INK} weight={800}>
          a = F ÷ (m₁+m₂) = 10 ÷ 5 = 2 m⁄s²
        </T>
      </Fade>

      {/* beat 4 — isolate the front block */}
      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <T x={84} y={382} size={13} fill={INK} script anchor="start">
          {t(
            "step 2: isolate the FRONT block m₂ — only Nc acts on it horizontally",
            "step 2: aage waale block m₂ ko alag karo — sirf Nc uspar horizontally lagta"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 7)}>
        <T x={84} y={406} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "the rear block m₁ is messy — both F and Nc act on it",
            "peechhe waala m₁ jhanjhat hai — dono F aur Nc uspar lagte"
          )}
        </T>
      </Fade>

      {/* beat 5 — step 2: contact force */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.8)}
        d="M 272 428 h 536 q 12 0 12 12 v 20 q 0 12 -12 12 h -536 q -12 0 -12 -12 v -20 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.8}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 5} delay={dl(5, 1.8)}>
        <T x={540} y={456} size={16} fill={INK} weight={800}>
          Nc = m₂·a = 3×2 = 6 N
        </T>
      </Fade>

      {/* beat 6 — cross-check and the trap */}
      <Draw on={beat >= 6} delay={dl(6, 0.6)} d="M 66 494 v 84" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={84} y={514} size={14} fill={GREEN} script anchor="start">
          {t(
            "cross-check: 10 − 6 = 4 = m₁·a — consistent ✓",
            "cross-check: 10 − 6 = 4 = m₁·a — sangat ✓"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 7)}>
        <T x={84} y={538} size={14} fill={RED} script anchor="start">
          {t(
            "the trap: push m₂ instead → Nc = m₁·a = 4 N, not 6 N",
            "trap: m₂ ko dhakelo bajaye → Nc = m₁·a = 4 N, 6 nahi"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 13)}>
        <T x={84} y={562} size={14} fill={RED} script anchor="start">
          {t(
            "Nc depends on WHICH block you push — it only drags what's ahead",
            "Nc ispar nirbhar — KAUN sa block dhakela — wo bas aage ka ghaseetta"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
