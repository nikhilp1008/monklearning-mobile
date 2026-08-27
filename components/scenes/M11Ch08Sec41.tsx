/**
 * M11 Ch08 · Section 41 — "HM of 4 and 12, and verifying AH = G²"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type=worked_examples.
 *
 * Math check: H=2(4)(12)/(4+12)=96/16=6 ✓. A=(4+12)/2=8 ✓. G=√48=4√3 ✓.
 * AH=8×6=48 ✓. G²=(4√3)²=16×3=48 ✓ — AH=G² confirmed exactly.
 *
 * Beats (en [0, 9.73, 19.11, 25.43, 37.29, 47.96, 55.55]):
 *  0 title (always-on)
 *  1 formula: H = 6
 *  2 text: compute A and G too
 *  3 formula: A=8, G=4√3
 *  4 formula: AH=48
 *  5 formula: G²=48 ✓
 *  6 red-margin: fast self-check
 *
 * Layout plan:
 *  b1 | text bl105 cx540
 *  b2 | text bl140 cx540
 *  b3 | text bl175 cx540
 *  b4 | text bl210 cx540
 *  b5 | text bl245 cx540 (bold green)
 *  b6 | red bar x76 y270..340 · text bl290/330 x96
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, INK_LIGHT, GREEN_DARK, RED,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch08Sec41({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={21} fill={INK} anchor="middle" script>
          {t("Find the HM of 4 and 12, and verify AH = G²", "4 aur 12 ka HM nikalo, aur AH = G² verify karo")}
        </T>
      </Fade>

      {/* beat 1 — H */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={540} y={105} size={17} fill={INK} anchor="middle">
          {"H = 2·4·12/(4+12) = 96/16 = 6"}
        </T>
      </Fade>

      {/* beat 2 — compute A and G too */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={540} y={140} size={14} fill={INK_LIGHT} anchor="middle" script>
          {t("now compute the arithmetic and geometric means too", "ab arithmetic aur geometric means bhi compute karo")}
        </T>
      </Fade>

      {/* beat 3 — A, G */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={175} size={17} fill={INK} anchor="middle">
          {"A = (4+12)/2 = 8,   G = √48 = 4√3"}
        </T>
      </Fade>

      {/* beat 4 — AH */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={210} size={17} fill={INK} anchor="middle">
          {"AH = 8 × 6 = 48"}
        </T>
      </Fade>

      {/* beat 5 — G² checks */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={245} size={18} fill={GREEN_DARK} anchor="middle" weight={700}>
          {"G² = (4√3)² = 48"}
        </T>
      </Fade>

      {/* beat 6 — red-margin: fast self-check */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 76 270 v 70" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={96} y={290} size={15} fill={RED} anchor="start" script>
          {t("the identity AH = G² holds exactly —", "identity AH = G² exactly hold karti hai —")}
        </T>
        <T x={96} y={330} size={15} fill={RED} anchor="start" script>
          {t("a fast self-check on any means problem", "kisi bhi means problem ka fast self-check")}
        </T>
      </Fade>
    </Scene>
  );
}
