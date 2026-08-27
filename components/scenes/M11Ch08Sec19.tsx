/**
 * M11 Ch08 · Section 19 — "AP fused with logarithms"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type=worked_examples.
 *
 * Notation: JSON's 2ˣ uses a superscript-x glyph — not supported (no
 * superscript-letter variant in either font, same rule as Ch7). Written
 * as plain caret "2^x" throughout instead.
 *
 * Math check: let u=2^x. (u-1)²=2(u+3) ⇒ u²-2u+1=2u+6 ⇒ u²-4u-5=0 ⇒
 * (u-5)(u+1)=0 ⇒ u=5 or u=-1. u=2^x>0 rejects u=-1, so 2^x=5, x=log₂5 ✓.
 *
 * Beats (en [0, 17.07, 27.82, 39.34, 53.5, 65.88, 83.37]):
 *  0 title (always-on)
 *  1 insight: middle term is the AM of the outer two
 *  2 formula: 2log(2^x-1) = log2 + log(2^x+3)
 *  3 formula: (2^x-1)² = 2(2^x+3)
 *  4 formula: u²-4u-5=0 ⇒ (u-5)(u+1)=0, u=2^x
 *  5 red-margin: 2^x>0 rejects u=-1
 *  6 boxed closer
 *
 * Layout plan:
 *  b1 | text bl105 cx540
 *  b2 | text bl140 cx540
 *  b3 | text bl175 cx540
 *  b4 | text bl210 cx540 · note bl232 cx540
 *  b5 | red bar x76 y255..325 · text bl275/315 x96
 *  b6 | chip x340 y345 w400 h44 (text bl~372)
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, Chip, T, INK, INK_LIGHT, MUTED, RED, GREEN_DARK, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch08Sec19({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={19} fill={INK} anchor="middle" script>
          {t(
            "If log 2, log(2^x - 1), log(2^x + 3) are in AP, find x",
            "Agar log 2, log(2^x - 1), log(2^x + 3) AP mein hain, x nikalo"
          )}
        </T>
      </Fade>

      {/* beat 1 — insight */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={540} y={105} size={15} fill={INK_LIGHT} anchor="middle" script>
          {t(
            "three terms in AP ⇒ middle is the AM of the outer two",
            "teen terms AP mein ⇒ middle, outer do ka AM hai"
          )}
        </T>
      </Fade>

      {/* beat 2 — the AM condition */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={540} y={140} size={16} fill={INK} anchor="middle">
          {"2 log(2^x - 1) = log 2 + log(2^x + 3)"}
        </T>
      </Fade>

      {/* beat 3 — strip the logs */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={175} size={16} fill={INK} anchor="middle">
          {"(2^x - 1)² = 2(2^x + 3)"}
        </T>
      </Fade>

      {/* beat 4 — substitute and factor */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={210} size={16} fill={INK} anchor="middle">
          {"u² - 4u - 5 = 0  ⇒  (u-5)(u+1) = 0"}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.9)}>
        <T x={540} y={232} size={12} fill={MUTED} anchor="middle">{"(u = 2^x)"}</T>
      </Fade>

      {/* beat 5 — red-margin: domain check */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M 76 255 v 70" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={96} y={275} size={15} fill={RED} anchor="start" script>
          {t("2^x > 0 rejects u = -1 —", "2^x > 0, u = -1 ko reject karta hai —")}
        </T>
        <T x={96} y={315} size={15} fill={RED} anchor="start" script>
          {t("never skip the domain check", "domain check kabhi mat chhodo")}
        </T>
      </Fade>

      {/* beat 6 — boxed closer */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <Chip x={340} y={345} w={400} h={44} fill={CREAM} stroke={GREEN_DARK} textFill={GREEN_DARK} size={17}>
          {"2^x = 5  ⇒  x = log₂5"}
        </Chip>
      </Fade>
    </Scene>
  );
}
