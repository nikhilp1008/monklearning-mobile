/**
 * Ch13 · Section 29 — "Worked example (CBSE): the seconds pendulum"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 6.24, 17.69, 29.83, 44.06, 50.3, 62.45, 73.55]):
 *  0 shelf
 *  1 given: L=1.0m, g=π² · find T
 *  2 T = 2π√(L/g) = 2π√(1/π²) = 2π(1/π) = 2 s
 *  3 hero (high): T=2s ⇒ SECONDS PENDULUM (L≈1m)
 *  4 now: length → 4L
 *  5 hero (high): T' = 2π√(4L/g) = 2·T = 4 s
 *  6 quadrupling L only doubles T, since T ∝ √L
 *  7 closing: both facts worth memorizing
 *
 * Layout plan (Anek bl−0.78s..+0.31s):
 *  b0 | shelf y80 x60..1020
 *  b1 | st x70 bl110 size14 · st x70 bl142 size13
 *  b2 | st x70 bl180 size14
 *  b3 | box x70..480 y200..255 rx14 · line cx275 bl234 size18
 *  b4 | st x70 bl290 size13
 *  b5 | box x70..430 y315..375 rx14 · line cx250 bl351 size18
 *  b6 | st x70 bl415 size13
 *  b7 | box x140..940 y450..510 rx16 · line cx540 bl484 size13
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
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch13Sec29({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={52} size={20} fill={INK} script>
          {t("A one-metre pendulum and the square-root length law", "Ek metre ka pendulum aur square-root length law")}
        </T>
      </Fade>

      {/* beat 0 — the shelf */}
      <Draw on={beat >= 0} delay={dl(0, 0.3)} d="M 60 80 L 1020 80" stroke={INK} sw={1.4} dur={0.6} />

      {/* beat 1 — the given data */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={70} y={110} size={14} fill={INK} anchor="start" weight={700}>
          L = 1.0 m , g = π² ≈ 9.87 m/s²
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={70} y={142} size={13} fill={INK} anchor="start" weight={700}>
          {t("find: T", "nikaalo: T")}
        </T>
      </Fade>

      {/* beat 2 — substitute */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={70} y={180} size={14} fill={INK} anchor="start" weight={700}>
          T = 2π√(L/g) = 2π√(1/π²) = 2π(1/π) = 2 s
        </T>
      </Fade>

      {/* beat 3 — the seconds pendulum, high emphasis */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <Draw
          on={beat >= 3}
          delay={dl(3, 0.3)}
          d="M 84 200 h 382 q 14 0 14 14 v 27 q 0 14 -14 14 h -382 q -14 0 -14 -14 v -27 q 0 -14 14 -14"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.1)}>
        <T x={275} y={234} size={18} fill={INK} weight={800}>
          T = 2s ⇒ SECONDS PENDULUM (L ≈ 1 m)
        </T>
      </Fade>

      {/* beat 4 — quadruple the length */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={70} y={290} size={13} fill={INK} anchor="start" weight={700}>
          {t("now: length → 4L", "ab: length → 4L")}
        </T>
      </Fade>

      {/* beat 5 — the new period, high emphasis */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Draw
          on={beat >= 5}
          delay={dl(5, 0.3)}
          d="M 84 315 h 332 q 14 0 14 14 v 32 q 0 14 -14 14 h -332 q -14 0 -14 -14 v -32 q 0 -14 14 -14"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.1)}>
        <T x={250} y={351} size={18} fill={INK} weight={800}>
          T&apos; = 2π√(4L/g) = 2·T = 4 s
        </T>
      </Fade>

      {/* beat 6 — the pattern */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={70} y={415} size={13} fill={INK} anchor="start" weight={700}>
          {t(
            "quadrupling L only doubles T, since T ∝ √L",
            "L chaugna karne se T sirf double hota hai, kyunki T ∝ √L"
          )}
        </T>
      </Fade>

      {/* beat 7 — the two prizes to keep */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Draw
          on={beat >= 7}
          delay={dl(7, 0.3)}
          d="M 156 450 h 768 q 16 0 16 16 v 28 q 0 16 -16 16 h -768 q -16 0 -16 -16 v -28 q 0 -16 16 -16"
          stroke={AMBER_DARK}
          sw={2.4}
          dur={0.7}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={540} y={484} size={13} fill={INK} weight={700}>
          {t(
            "seconds pendulum ≈ 1 m / 2 s  ·  T ∝ √L — memorize both",
            "seconds pendulum ≈ 1 m / 2 s  ·  T ∝ √L — dono yaad rakho"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
