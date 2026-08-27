/**
 * Ch06 · Section 17 — "Worked example: compute A × B [CBSE]"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 13.14, 24.83, 30.89, 37.8, 62.63, 83.11, 91.05]):
 *  0 title
 *  1 determinant grid: bars x560/x760 y115..215, rows i j k / 2 3 1 / 1 −1 2
 *  2 givens left + sign warning
 *  3 structure label under determinant
 *  4 expansion: i/j/k terms staggered → = 7i − 3j − 5k + amber underline
 *  5 check line: A·(A×B) = 14 − 9 − 5
 *  6 "= 0 ✓" green + tail
 *  7 green answer box
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b1 | "A × B =" st(420,168) · bars x560/x760 · rows bl 140/172/204, cols 600/660/720
 *  b2 | sans16 st x80 bl 120 / bl 152 · warning script12 st x80 bl 182
 *  b3 | script12 cx660 bl 240
 *  b4 | sans17 st x80 bl 300 · sans18 st x80 bl 345 · underline y358 x80..300
 *  b5 | sans16 st x80 bl 410
 *  b6 | sans18 st x80 bl 450 · script13 st x175 bl 450
 *  b7 | green box x560..980 y420..490 · cx770 bl 462
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
  AMBER,
  AMBER_DARK,
  GREEN,
  GREEN_DARK,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch06Sec17({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the drill */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={22} fill={INK} script>
          {t(
            "compute A × B [CBSE board]",
            "A × B compute karo [CBSE board]"
          )}
        </T>
      </Fade>

      {/* beat 1 — the grid */}
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <T x={420} y={168} size={16} fill={INK} anchor="start" weight={700}>
          A × B =
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 2)}
        d="M 560 115 V 215 M 760 115 V 215"
        stroke={INK}
        sw={2}
        dur={0.6}
      />
      <Fade on={beat >= 1} delay={dl(1, 2.8)}>
        <T x={600} y={140} size={15} fill={INK} weight={700}>
          i
        </T>
        <T x={660} y={140} size={15} fill={INK} weight={700}>
          j
        </T>
        <T x={720} y={140} size={15} fill={INK} weight={700}>
          k
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 4)}>
        <T x={600} y={172} size={15} fill={INK} weight={700}>
          2
        </T>
        <T x={660} y={172} size={15} fill={INK} weight={700}>
          3
        </T>
        <T x={720} y={172} size={15} fill={INK} weight={700}>
          1
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 5.2)}>
        <T x={600} y={204} size={15} fill={INK} weight={700}>
          1
        </T>
        <T x={660} y={204} size={15} fill={INK} weight={700}>
          −1
        </T>
        <T x={720} y={204} size={15} fill={INK} weight={700}>
          2
        </T>
      </Fade>

      {/* beat 2 — the givens */}
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={80} y={120} size={16} fill={INK} anchor="start" weight={700}>
          A = 2i + 3j + k
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.5)}>
        <T x={80} y={152} size={16} fill={INK} anchor="start" weight={700}>
          B = i − j + 2k
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 4)}>
        <T x={80} y={182} size={12} fill={RED} script anchor="start">
          {t(
            "one sign wrong in B → everything downstream fails",
            "B mein ek sign galat → aage sab bigad jaata hai"
          )}
        </T>
      </Fade>

      {/* beat 3 — the structure */}
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <T x={660} y={240} size={12} fill={AMBER_DARK} script>
          {t("i j k on top · A middle · B bottom", "i j k upar · A beech · B neeche")}
        </T>
      </Fade>

      {/* beat 4 — expand across the top row */}
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <T x={80} y={300} size={17} fill={INK} anchor="start" weight={700}>
          = i(6+1) − j(4−1) + k(−2−3)
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 14)}>
        <T x={80} y={345} size={18} fill={INK} anchor="start" weight={700}>
          = 7i − 3j − 5k
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 17)} d="M 80 358 h 220" stroke={AMBER} sw={2.4} dur={0.5} />

      {/* beat 5 — the compulsory check */}
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <T x={80} y={410} size={16} fill={INK} anchor="start" weight={700}>
          {t("check: ", "check: ")}A·(A×B) = (2)(7) + (3)(−3) + (1)(−5) = 14 − 9 − 5
        </T>
      </Fade>

      {/* beat 6 — zero, guaranteed */}
      <Fade on={beat >= 6} delay={dl(6, 1.5)}>
        <T x={80} y={450} size={18} fill={GREEN_DARK} anchor="start" weight={700}>
          = 0 ✓
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 3.5)}>
        <T x={175} y={450} size={13} fill={GREEN_DARK} script anchor="start">
          {t(
            "genuinely ⊥ A — the arithmetic held up",
            "sachmuch ⊥ A — arithmetic sahi rahi"
          )}
        </T>
      </Fade>

      {/* beat 7 — marks secured */}
      <Draw
        on={beat >= 7}
        delay={dl(7, 0.8)}
        d="M 572 420 h 396 q 12 0 12 12 v 46 q 0 12 -12 12 h -396 q -12 0 -12 -12 v -46 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.6}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 7} delay={dl(7, 2)}>
        <T x={770} y={462} size={20} fill={INK} weight={700}>
          A × B = 7i − 3j − 5k
        </T>
      </Fade>
    </Scene>
  );
}
