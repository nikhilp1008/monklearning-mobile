/**
 * Ch07 · Section 33 — "Worked example: surface g and weight at depth R/2 (CBSE)"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 12.46, 24.75, 35.58, 43.95, 44.95, 45.95, 46.95]):
 *  0 title + problem (M, R given)
 *  1 substitution line
 *  2 green box: g = 20 m/s²
 *  3 part 2 problem: 200 N at surface, depth R/2
 *  4 depth formula setup line
 *  5 g(d) = g/2 line
 *  6 green box: W(d) = 100 N
 *  7 red margin: mass unchanged, only weight halves
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52 · problem cx540 bl84
 *  b1 line st x100 bl140 · b2 green box x100..460 y170..222 (bl202)
 *  b3 line st x100 bl270 (→2 lines) · b4 line bl320 · b5 line bl360
 *  b6 green box x100..460 y390..442 (bl422)
 *  b7 bar x560 y150..222 lines st x578 bl172/198/224 (3 lines wrap)
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
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch07Sec33({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the two-part problem */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "Example [CBSE] — surface g, and weight at R⁄2",
            "Example [CBSE] — surface g, aur R⁄2 par weight"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 6)}>
        <T x={540} y={84} size={12} fill={MUTED} script>
          {t(
            "M = 4.8×10²⁴ kg, R = 4.0×10⁶ m — find surface g",
            "M = 4.8×10²⁴ kg, R = 4.0×10⁶ m — surface g nikaalo"
          )}
        </T>
      </Fade>

      {/* beat 1 — substitute */}
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <T x={100} y={140} size={15} fill={INK} anchor="start" weight={700}>
          g = GM ⁄ R² = (6.67×10⁻¹¹)(4.8×10²⁴) ⁄ (4.0×10⁶)²
        </T>
      </Fade>

      {/* beat 2 — the surface value */}
      <Fade on={beat >= 2} delay={dl(2, 0.5)}>
        <Draw
          on={beat >= 2}
          delay={dl(2, 0.5)}
          d="M 112 170 h 348 q 12 0 12 12 v 28 q 0 12 -12 12 h -348 q -12 0 -12 -12 v -28 q 0 -12 12 -12"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.2)}>
        <T x={286} y={202} size={16} fill={INK} weight={800}>
          g = 3.20×10¹⁴ ⁄ 1.6×10¹³ = 20 m⁄s²
        </T>
      </Fade>

      {/* beat 3 — part two */}
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={100} y={270} size={13} fill={INK} script anchor="start">
          {t(
            "part 2: weighs 200 N at the surface — weight at depth R⁄2?",
            "part 2: surface par 200 N — depth R⁄2 par weight?"
          )}
        </T>
      </Fade>

      {/* beat 4 — set up the depth formula */}
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={100} y={320} size={14} fill={INK} anchor="start" weight={700}>
          g(d) = g·(1 − d ⁄ R)　d = R⁄2
        </T>
      </Fade>

      {/* beat 5 — halved g */}
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={100} y={360} size={14} fill={INK} anchor="start" weight={700}>
          g(d) = g·(1 − ½) = g⁄2
        </T>
      </Fade>

      {/* beat 6 — the answer */}
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <Draw
          on={beat >= 6}
          delay={dl(6, 0.5)}
          d="M 112 390 h 348 q 12 0 12 12 v 28 q 0 12 -12 12 h -348 q -12 0 -12 -12 v -28 q 0 -12 12 -12"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.2)}>
        <T x={286} y={422} size={16} fill={INK} weight={800}>
          W(d) = mg⁄2 = 200⁄2 = 100 N
        </T>
      </Fade>

      {/* beat 7 — mass never changes */}
      <Draw on={beat >= 7} delay={dl(7, 0.5)} d="M 560 150 v 72" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={578} y={172} size={13} fill={RED} script anchor="start">
          {t(
            "the body's MASS never changed",
            "body ka MASS kabhi nahi badla"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 4)}>
        <T x={578} y={198} size={13} fill={RED} script anchor="start">
          {t(
            "only effective g halved — so only weight halves",
            "sirf effective g aadha hua — isliye sirf weight aadha"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 7)}>
        <T x={578} y={224} size={13} fill={RED} script anchor="start">
          {t(
            "weight = mg depends on WHERE; mass never does",
            "weight = mg KAHAN par depend karta hai; mass nahi"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
