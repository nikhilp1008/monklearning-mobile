/**
 * M11 Ch08 · Section 7 — "Splitting a sum with sigma linearity"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type=worked_examples.
 *
 * Beats (en [0, 13.91, 22.61, 31.23, 44.71, 62.46, 74.84]):
 *  0 title (always-on) — "Evaluate Σ(3k²-2k+1) from k=1 to n"
 *  1 the three colored pieces (split point) + caption
 *  2 Σ form: 3Σk² - 2Σk + Σ1 (same color coding)
 *  3 substitute standard sums
 *  4 simplify to two forms, second boxed-weight
 *  5 red-margin: split, apply known sums — the engine of Unit 7
 *  6 boxed final answer
 *
 * Layout plan:
 *  b1 | 3 colored terms bl100 cx420/540/650 · caption bl130 cx540
 *  b2 | 3 colored Σ terms bl170 cx390/540/660
 *  b3 | formula bl210 cx540
 *  b4 | line1 bl245 cx540 · line2 bl282 cx540 (bold)
 *  b5 | red bar x76 y310..366 · text bl330/356 x96
 *  b6 | chip x340 y395 w400 h44 (text bl~422)
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, Chip, T, INK, INK_LIGHT, AMBER_DARK, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch08Sec7({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={24} fill={INK} anchor="middle" script>
          {t("Evaluate Σ(3k² - 2k + 1) from k = 1 to n", "Σ(3k² - 2k + 1) ko k=1 se n tak evaluate karo")}
        </T>
      </Fade>

      {/* beat 1 — the three colored pieces */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={420} y={100} size={20} fill={AMBER_DARK} anchor="middle" weight={700}>{"3k²"}</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={540} y={100} size={20} fill={GREEN_DARK} anchor="middle" weight={700}>{"- 2k"}</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={650} y={100} size={20} fill={INK} anchor="middle" weight={700}>{"+ 1"}</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.4)}>
        <T x={540} y={130} size={14} fill={INK_LIGHT} anchor="middle" script>
          {t("split by linearity into three standard sums", "linearity se teen standard sums mein split karo")}
        </T>
      </Fade>

      {/* beat 2 — sigma form, same color coding */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={390} y={170} size={18} fill={AMBER_DARK} anchor="middle" weight={700}>{"3Σk²"}</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.5)}>
        <T x={540} y={170} size={18} fill={GREEN_DARK} anchor="middle" weight={700}>{"- 2Σk"}</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={670} y={170} size={18} fill={INK} anchor="middle" weight={700}>{"+ Σ1"}</T>
      </Fade>

      {/* beat 3 — substitute standard sums */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={210} size={15} fill={INK} anchor="middle">
          {"3·(n(n+1)(2n+1)/6) - 2·(n(n+1)/2) + n"}
        </T>
      </Fade>

      {/* beat 4 — simplify */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={245} size={16} fill={INK} anchor="middle">
          {"= n³ + (1/2)n² + (1/2)n"}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.9)}>
        <T x={540} y={282} size={18} fill={AMBER_DARK} anchor="middle" weight={700}>
          {"= n(2n² + n + 1)/2"}
        </T>
      </Fade>

      {/* beat 5 — red-margin: the engine of Unit 7 */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M 76 310 v 56" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={96} y={330} size={15} fill={RED} anchor="start" script>
          {t("split the sum, apply known sums —", "sum ko split karo, known sums lagao —")}
        </T>
        <T x={96} y={356} size={15} fill={RED} anchor="start" script>
          {t("the engine of Unit 7", "Unit 7 ka engine yahi hai")}
        </T>
      </Fade>

      {/* beat 6 — boxed final answer */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <Chip x={340} y={395} w={400} h={44} fill={CREAM} stroke={GREEN_DARK} textFill={GREEN_DARK} size={17}>
          {t("answer: n(2n² + n + 1)/2", "answer: n(2n² + n + 1)/2")}
        </Chip>
      </Fade>
    </Scene>
  );
}
