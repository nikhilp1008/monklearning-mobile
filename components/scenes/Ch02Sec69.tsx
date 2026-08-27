/**
 * Ch02 · Section 69 — "Example 3 [JEE Main]: a = 4x, a position-dependent acceleration"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 21, 45.8, 70.7, 91.6, 112.6, 135.3, 149]):
 *  0 title + problem line
 *  1 picture: axis, a = 4 arrow at x=1, a = 12 arrow at x=3 — running away from itself
 *  2 red note: constant-a useless, nothing to substitute
 *  3 diagnose card: case 3 · x₀ = 1, not 0
 *  4 template card: ∫v dv = ∫4x dx with limits
 *  5 evaluation line: 18 − 2 = 16
 *  6 result box: v = √32 ≈ 5.66 m/s
 *  7 red: the diagnosis was the entire question
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  axis y170 x140..940 · ticks x300/x820 · arrows (300,150)→(340,150) sw2 ·
 *  (820,146)→(920,146) sw3.4 · labels bl 196 · note cx540 bl 228
 *  b2 | bar x66 y252..306 · lines st x84 bl 271 / 297
 *  b3 card x84..520 y325..395 (bl 348 / 378) · b4 card x560..1030 y325..395 (bl 358 · sub bl 382)
 *  b5 | line st x84 bl 430 · b6 box x560..940 y410..465 (bl 444)
 *  b7 | bar x66 y495..560 · lines st x84 bl 514 / 540
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
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch02Sec69({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the master key's job */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "Example 3 [JEE Main] — a = 4x, position-dependent",
            "Example 3 [JEE Main] — a = 4x, position par nirbhar"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 7)}>
        <T x={540} y={84} size={12} fill={MUTED} script>
          {t(
            "from rest at x = 1 m, a = 4x — find the speed as it passes x = 3 m",
            "x = 1 m par rest se, a = 4x — x = 3 m paar karte waqt speed nikaalo"
          )}
        </T>
      </Fade>

      {/* beat 1 — running away from itself */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.8)}
        d={arrowD(140, 170, 940, 170)}
        stroke={INK}
        sw={2.2}
        dur={0.9}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 2)}
        d="M 300 163 v 14 M 820 163 v 14"
        stroke={INK}
        sw={1.8}
        dur={0.5}
      />
      <Fade on={beat >= 1} delay={dl(1, 2.8)}>
        <T x={300} y={196} size={12} fill={INK} weight={700}>
          {t("x = 1 (start, at rest)", "x = 1 (shuru, rest par)")}
        </T>
        <T x={820} y={196} size={12} fill={INK} weight={700}>
          x = 3
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 5)}
        d={arrowD(300, 150, 340, 150)}
        stroke={AMBER_DARK}
        sw={2}
        dur={0.4}
      />
      <Fade on={beat >= 1} delay={dl(1, 5.8)}>
        <T x={352} y={155} size={12} fill={AMBER_DARK} anchor="start" weight={700}>
          a = 4
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 7.5)}
        d={arrowD(820, 146, 920, 146)}
        stroke={RED}
        sw={3.4}
        dur={0.5}
      />
      <Fade on={beat >= 1} delay={dl(1, 8.3)}>
        <T x={932} y={151} size={12} fill={RED} anchor="start" weight={700}>
          a = 12
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 12)}>
        <T x={540} y={228} size={12} fill={AMBER_DARK} script>
          {t(
            "accelerate → move out → a grows → accelerate harder: it runs away from itself",
            "tez ho → aage badho → a badhe → aur tez ho: khud se hi bhaag rahi hai"
          )}
        </T>
      </Fade>

      {/* beat 2 — nothing to substitute */}
      <Draw on={beat >= 2} delay={dl(2, 0.8)} d="M 66 252 v 54" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <T x={84} y={271} size={13} fill={RED} script anchor="start">
          {t(
            "the constant-a equations are USELESS here — a is not one number",
            "constant-a equations yahan BEKAAR hain — a koi ek number hai hi nahi"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 10)}>
        <T x={84} y={297} size={13} fill={RED} script anchor="start">
          {t(
            "it is 4 at the start and 12 at the end — there is nothing to substitute",
            "shuru mein 4 aur ant mein 12 — substitute karne ko kuchh hai hi nahi"
          )}
        </T>
      </Fade>

      {/* beat 3 — diagnose, and mind the lower limit */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 0.6)}
        d="M 96 325 h 412 q 12 0 12 12 v 46 q 0 12 -12 12 h -412 q -12 0 -12 -12 v -46 q 0 -12 12 -12"
        stroke={AMBER}
        sw={2.2}
        dur={0.6}
      />
      <Fade on={beat >= 3} delay={dl(3, 1.6)}>
        <T x={302} y={348} size={12} fill={AMBER_DARK} script>
          {t("diagnose: a = f(x) → case 3, master key", "diagnose: a = f(x) → case 3, master key")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 8)}>
        <T x={302} y={378} size={13} fill={INK} weight={700}>
          {t("v₀ = 0 at x₀ = 1 — lower limit 1, NOT 0", "v₀ = 0, x₀ = 1 par — neechli limit 1, 0 NAHI")}
        </T>
      </Fade>

      {/* beat 4 — honest limits anchor */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.6)}
        d="M 572 325 h 446 q 12 0 12 12 v 46 q 0 12 -12 12 h -446 q -12 0 -12 -12 v -46 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.2}
        dur={0.6}
      />
      <Fade on={beat >= 4} delay={dl(4, 1.8)}>
        <T x={795} y={358} size={16} fill={INK} weight={700}>
          ∫₀ᵛ v dv = ∫₁³ 4x dx
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 10)}>
        <T x={795} y={382} size={11} fill={MUTED} script>
          {t(
            "honest limits do the anchoring — no constant to forget",
            "imaandaar limits khud baandhti hain — bhoolne ko koi constant nahi"
          )}
        </T>
      </Fade>

      {/* beat 5 — evaluate */}
      <Fade on={beat >= 5} delay={dl(5, 1.5)}>
        <T x={84} y={430} size={14} fill={INK} anchor="start" weight={700}>
          v²⁄2 = [2x²]₁³ = 2·9 − 2·1 = 18 − 2 = 16
        </T>
      </Fade>

      {/* beat 6 — the speed */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.6)}
        d="M 572 410 h 356 q 12 0 12 12 v 31 q 0 12 -12 12 h -356 q -12 0 -12 -12 v -31 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.4}
        dur={0.6}
        fill={CREAM}
      />
      <Fade on={beat >= 6} delay={dl(6, 1.8)}>
        <T x={750} y={444} size={15} fill={INK} weight={700}>
          v² = 32 → v = √32 ≈ 5.66 m/s
        </T>
      </Fade>

      {/* beat 7 — the lesson over the number */}
      <Draw on={beat >= 7} delay={dl(7, 0.8)} d="M 66 495 v 65" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={84} y={514} size={13} fill={RED} script anchor="start">
          {t(
            "the whole problem turned on the diagnosis: a depends on x ⇒ v dv = a dx",
            "poora sawaal diagnosis par ghooma: a, x par nirbhar ⇒ v dv = a dx"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 7)}>
        <T x={84} y={540} size={13} fill={RED} script anchor="start">
          {t(
            "the integral was two sleepy lines of Class-11 calculus — the diagnosis WAS the question",
            "integral to Class-11 ki do neend-bhari linein thi — asli sawaal diagnosis HI tha"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
