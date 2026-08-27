/**
 * M11 Ch08 · Section 14 — "28th term and the first negative term"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type=worked_examples.
 *
 * Math check: a=20, d=19¼-20=-3/4. a_28=20+27(-3/4)=20-81/4=-1/4 ✓.
 * a_n<0: 20-(3/4)(n-1)<0, ×4: 80-3(n-1)<0 ⇒ 83-3n<0 ⇒ n>83/3=27.667=27⅔ ✓.
 * Smallest integer n=28, matching a_28=-1/4 computed above — consistent.
 *
 * Beats (en [0, 13.14, 26.62, 39.77, 51.29, 62.89, 76.29]):
 *  0 title (always-on)
 *  1 a=20, d=19¼-20=-¾
 *  2 a_28 = 20+27(-¾) = 20-81/4 = -¼
 *  3 condition: a_n < 0
 *  4 80-3(n-1)<0 ⇒ n>27 2/3
 *  5 red-margin: n∈N forces rounding up, n=28
 *  6 boxed closer: 28th term IS the first negative term
 *
 * Layout plan:
 *  b1 | text bl105 cx540
 *  b2 | text bl140 cx540
 *  b3 | text bl175 cx540
 *  b4 | text bl210 cx540
 *  b5 | red bar x76 y235..305 · text bl255/295 x96
 *  b6 | chip x260 y325 w560 h44 (text bl~352)
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, Chip, T, INK, RED, GREEN_DARK, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch08Sec14({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={20} fill={INK} anchor="middle" script>
          {t(
            "AP 20, 19¼, 18½, 17¾, … — find a₂₈ and the first negative term",
            "AP 20, 19¼, 18½, 17¾, … — a₂₈ aur pehla negative term nikalo"
          )}
        </T>
      </Fade>

      {/* beat 1 — a and d */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={540} y={105} size={16} fill={INK} anchor="middle">
          {"a = 20,   d = 19¼ - 20 = -¾"}
        </T>
      </Fade>

      {/* beat 2 — a_28 */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={540} y={140} size={16} fill={INK} anchor="middle">
          {"a₂₈ = 20 + 27(-¾) = 20 - 81/4 = -¼"}
        </T>
      </Fade>

      {/* beat 3 — condition */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={175} size={15} fill={INK} anchor="middle" script>
          {t("first negative term needs a_n < 0", "pehla negative term chahiye a_n < 0")}
        </T>
      </Fade>

      {/* beat 4 — solve the inequality */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={210} size={16} fill={INK} anchor="middle">
          {"80 - 3(n-1) < 0  ⇒  n > 27 2/3"}
        </T>
      </Fade>

      {/* beat 5 — red-margin: round up */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M 76 235 v 70" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={96} y={255} size={15} fill={RED} anchor="start" script>
          {t("n ∈ N forces rounding UP:", "n ∈ N rounding UP force karta hai:")}
        </T>
        <T x={96} y={295} size={15} fill={RED} anchor="start" script>
          {t("smallest integer is n = 28", "smallest integer n = 28 hai")}
        </T>
      </Fade>

      {/* beat 6 — boxed closer */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <Chip x={260} y={325} w={560} h={44} fill={CREAM} stroke={GREEN_DARK} textFill={GREEN_DARK} size={16}>
          {t("28th term IS the first negative term = -¼", "28th term hi pehla negative term hai = -¼")}
        </Chip>
      </Fade>
    </Scene>
  );
}
