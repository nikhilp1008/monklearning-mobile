/**
 * Ch13 · Section 40 — "Worked example (CBSE): time for the amplitude to halve"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 5.87, 17.86, 27.8, 38.52, 42.09, 51.02, 57.9]):
 *  0 shelf
 *  1 given: m=0.2kg, b=0.04kg/s · find t½ (ln2=0.693)
 *  2 A₀e^(−bt/2m) = A₀/2 ⇒ bt/2m = ln2
 *  3 hero (high): t = 2m/b·ln2 = 6.93 s
 *  4 amplitude halves in about 6.9 s
 *  5 hero (high): halves AGAIN in next 6.9s — equal times, equal fractional drops
 *  6 rarely need b alone — exploit the equal-interval property
 *  7 every fixed-ratio drop takes the same fixed time
 *
 * Layout plan (Anek bl−0.78s..+0.31s):
 *  b0 | shelf y80 x60..1020
 *  b1 | st x70 bl105 size13 · st x70 bl135 size12
 *  b2 | st x70 bl172 size13
 *  b3 | box x70..430 y195..250 rx14 · line cx250 bl228 size17
 *  b4 | st x70 bl285 size12
 *  b5 | box x60..570 y310..370 rx14 · line cx315 bl345 size15
 *  b6 | script12 st x70 bl410
 *  b7 | script12 st x70 bl448
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
  GREEN,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch13Sec40({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={52} size={20} fill={INK} script>
          {t("Exponential decay and equal halving times", "Exponential decay aur equal halving times")}
        </T>
      </Fade>

      {/* beat 0 — the shelf */}
      <Draw on={beat >= 0} delay={dl(0, 0.3)} d="M 60 80 L 1020 80" stroke={INK} sw={1.4} dur={0.6} />

      {/* beat 1 — the given data */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={70} y={105} size={13} fill={INK} anchor="start" weight={700}>
          m = 0.2 kg , b = 0.04 kg/s
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={70} y={135} size={12} fill={INK} anchor="start" weight={700}>
          {t("find: t½  (ln2 = 0.693)", "nikaalo: t½  (ln2 = 0.693)")}
        </T>
      </Fade>

      {/* beat 2 — set up the equation */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={70} y={172} size={13} fill={INK} anchor="start" weight={700}>
          A₀e^(−bt/2m) = A₀/2 ⇒ bt/2m = ln2
        </T>
      </Fade>

      {/* beat 3 — the hero result */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <Draw
          on={beat >= 3}
          delay={dl(3, 0.3)}
          d="M 84 195 h 322 q 14 0 14 14 v 27 q 0 14 -14 14 h -322 q -14 0 -14 -14 v -27 q 0 -14 14 -14"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.1)}>
        <T x={250} y={228} size={17} fill={INK} weight={800}>
          t = 2m/b · ln2 = 10 × 0.693 = 6.93 s
        </T>
      </Fade>

      {/* beat 4 — the plain-English answer */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={70} y={285} size={12} fill={INK} anchor="start">
          {t("amplitude halves in about 6.9 s", "amplitude ~6.9 s mein aadhi ho jaati hai")}
        </T>
      </Fade>

      {/* beat 5 — the beautiful part, high emphasis */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Draw
          on={beat >= 5}
          delay={dl(5, 0.3)}
          d="M 74 310 h 486 q 14 0 14 14 v 32 q 0 14 -14 14 h -486 q -14 0 -14 -14 v -32 q 0 -14 14 -14"
          stroke={GREEN}
          sw={2.4}
          dur={0.7}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.1)}>
        <T x={315} y={345} size={15} fill={INK} weight={800}>
          {t(
            "halves AGAIN in next 6.9s — equal times, equal fractional drops",
            "agle 6.9s mein PHIR aadhi — equal times, equal fractional drops"
          )}
        </T>
      </Fade>

      {/* beat 6 — the shortcut this unlocks */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={70} y={410} size={12} fill={INK} script anchor="start">
          {t(
            "rarely need b alone — exploit the equal-interval property",
            "b akela shayad hi chahiye — equal-interval property use karo"
          )}
        </T>
      </Fade>

      {/* beat 7 — the generalisation */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={70} y={448} size={12} fill={INK} script anchor="start">
          {t(
            "every fixed-ratio drop takes the same fixed time",
            "har fixed-ratio drop same fixed time leta hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
