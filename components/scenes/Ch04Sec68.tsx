/**
 * Ch04 · Section 68 — "Worked Example 4 [JEE Advanced]: the spring between two blocks"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 18.94, 43.78, 68.61, 90.79, 115.63, 140.46]):
 *  0 title
 *  1 problem: m1=1kg, m2=3kg, spring k=400N/m between, F=8N pulls m1, steady state, find a & x
 *  2 diagram: m2 — spring — m1 — F, caption — steady state, spring force set by mass it drags
 *  3 formula box: a = F/(m1+m2) = 8/4 = 2 m/s²
 *  4 text: isolate the TRAILING block m2 — only Fs=kx pulls it forward, spring is internal
 *  5 formula box: kx = m2·a → x = 6/400 = 0.015 m = 1.5 cm
 *  6 red margin: spring force set by mass it DRAGS not by F — twin of Ex3, spring = visible contact force
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl 52 · problem st x84 bl 92 / 116
 *  b2 diagram: floor y245 · m2 x260..330 y210..245 · spring zigzag x330..418 y227 ·
 *    m1 x418..478 y210..245 · F arr (478,227)→(530,227) lbl (538,221) ·
 *    m2 lbl cx295 y265 · m1 lbl cx448 y265 · caption cx540 bl 288
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

export default function Ch04Sec68({ currentTime, reveals, language }: SceneProps) {
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
            "Example 4 [JEE Advanced] — the spring between two blocks",
            "Example 4 [JEE Advanced] — do blocks ke beech spring"
          )}
        </T>
      </Fade>

      {/* beat 1 — problem */}
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <T x={84} y={92} size={13} fill={INK} script anchor="start">
          {t(
            "m₁ = 1 kg, m₂ = 3 kg on a frictionless floor, joined by a spring k = 400 N⁄m",
            "frictionless floor par m₁ = 1 kg, m₂ = 3 kg, spring k = 400 N⁄m se jude"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 8)}>
        <T x={84} y={116} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "F = 8 N pulls m₁ · after the transient, find steady a and the extension x",
            "F = 8 N m₁ ko khinchta · uthal-puthal ke baad, steady a aur extension x nikaalo"
          )}
        </T>
      </Fade>

      {/* beat 2 — diagram */}
      <Draw on={beat >= 2} delay={dl(2, 0.8)} d="M 220 245 H 560" stroke={INK} sw={2.4} dur={0.5} />
      <Draw
        on={beat >= 2}
        delay={dl(2, 1.6)}
        d="M 260 210 h 70 v 35 h -70 z"
        stroke={INK}
        sw={2.2}
        dur={0.6}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 2.4)}
        d="M 330 227 l 12 -10 l 16 20 l 16 -20 l 16 20 l 16 -20 l 12 10"
        stroke={INK}
        sw={2}
        dur={0.7}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 3.2)}
        d="M 418 210 h 60 v 35 h -60 z"
        stroke={INK}
        sw={2.2}
        dur={0.6}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 4)}
        d={arrowD(478, 227, 530, 227)}
        stroke={AMBER_DARK}
        sw={2.6}
        dur={0.4}
      />
      <Fade on={beat >= 2} delay={dl(2, 4.6)}>
        <T x={538} y={221} size={12} fill={AMBER_DARK} weight={700} anchor="start">
          F = 8 N
        </T>
        <T x={295} y={265} size={12} fill={INK} weight={700}>
          m₂ = 3 kg
        </T>
        <T x={448} y={265} size={12} fill={INK} weight={700}>
          m₁ = 1 kg
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 5.8)}>
        <T x={540} y={288} size={12} fill={MUTED} script>
          {t(
            "steady state: spring length fixed — its force is set by the mass it drags",
            "steady state: spring ki lambaai fixed — force us mass se tay, jise ghaseeta"
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
          a = F ÷ (m₁+m₂) = 8 ÷ 4 = 2 m⁄s²
        </T>
      </Fade>

      {/* beat 4 — isolate the trailing block */}
      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <T x={84} y={382} size={13} fill={INK} script anchor="start">
          {t(
            "step 2: isolate the TRAILING block m₂ — only Fs = kx pulls it forward",
            "step 2: peechhe waale block m₂ ko alag karo — sirf Fs = kx aage khinchta"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 7)}>
        <T x={84} y={406} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "the spring is internal — it vanished from the whole-system equation",
            "spring aantarik hai — poore-system samikaran se gaayab ho gayi"
          )}
        </T>
      </Fade>

      {/* beat 5 — step 2: extension */}
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
          kx = m₂·a → x = 6 ÷ 400 = 0.015 m = 1.5 cm
        </T>
      </Fade>

      {/* beat 6 — the deep insight */}
      <Draw on={beat >= 6} delay={dl(6, 0.6)} d="M 66 494 v 84" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={84} y={514} size={14} fill={RED} script anchor="start">
          {t(
            "spring force = 6 N — set by the mass it must DRAG (m₂), not by F = 8 N",
            "spring force = 6 N — us mass se tay jise DRAG karna (m₂), F = 8 N se nahi"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 7)}>
        <T x={84} y={538} size={14} fill={AMBER_DARK} script anchor="start">
          {t(
            "the exact twin of Example 3's contact force — same logic, new costume",
            "Example 3 ke contact force ka hoobahoo jud waala — wahi tark, naya libaas"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 13)}>
        <T x={84} y={562} size={14} fill={GREEN} script anchor="start">
          {t(
            "a spring between two blocks is a contact force you can watch stretch",
            "do blocks ke beech spring ek contact force hai jise khinchte dekh sakte ho"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
