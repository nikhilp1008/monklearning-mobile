/**
 * M11 Ch08 · Section 21 — "Three APs as residue classes"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type=worked_examples.
 *
 * Math check: AP(1;3)={1,4,7,...} = {x: x≡1 mod 3}, similarly for the
 * other two. x=52: 52=3(17)+1 ✓, 52=5(10)+2 ✓, 52=7(7)+3 ✓ — satisfies
 * all three. Since 3,5,7 are pairwise coprime, the common solutions
 * recur every lcm(3,5,7)=105, so the intersection is itself an AP with
 * a=52, d=105. a+d=157.
 *
 * Beats (en [0, 15.02, 27.73, 38.14, 48.55, 57.77, 69.8]):
 *  0 title (always-on)
 *  1 3 AP labels with ∩ between them + caption
 *  2 formula: the three congruences
 *  3 text: CRT insight
 *  4 formula: d = lcm(3,5,7) = 105
 *  5 formula: verify x=52 + checkmark
 *  6 red-margin: a=52, d=105, a+d=157
 *
 * Layout plan:
 *  b1 | 3 labels bl100 cx280/540/800 · ∩ bl100 cx410/670 · caption bl130 cx540
 *  b2 | text bl165 cx540
 *  b3 | text bl200 cx540
 *  b4 | text bl235 cx540
 *  b5 | text bl270 cx520 · checkD x820 y264
 *  b6 | red bar x76 y300..370 · text bl320/360 x96
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, INK_LIGHT, MUTED, AMBER_DARK, RED, GREEN_DARK,
  Scene,
} from '@/components/scenes/kit';
import { checkD } from "./math-kit";

export default function M11Ch08Sec21({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={19} fill={INK} anchor="middle" script>
          {t("AP(1;3) ∩ AP(2;5) ∩ AP(3;7) = AP(a;d). Find a + d.", "AP(1;3) ∩ AP(2;5) ∩ AP(3;7) = AP(a;d). a + d nikalo.")}
        </T>
      </Fade>

      {/* beat 1 — three AP labels, intersected */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={280} y={100} size={16} fill={AMBER_DARK} anchor="middle" weight={700}>AP(1;3)</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={410} y={100} size={18} fill={MUTED} anchor="middle">∩</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={540} y={100} size={16} fill={AMBER_DARK} anchor="middle" weight={700}>AP(2;5)</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.1)}>
        <T x={670} y={100} size={18} fill={MUTED} anchor="middle">∩</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.4)}>
        <T x={800} y={100} size={16} fill={AMBER_DARK} anchor="middle" weight={700}>AP(3;7)</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.9)}>
        <T x={540} y={130} size={13} fill={INK_LIGHT} anchor="middle" script>
          {t("a number in all three ⇒ three congruences", "teeno mein number ⇒ teen congruences")}
        </T>
      </Fade>

      {/* beat 2 — the congruences */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={540} y={165} size={15} fill={INK} anchor="middle">
          {"x ≡ 1 (mod 3),   x ≡ 2 (mod 5),   x ≡ 3 (mod 7)"}
        </T>
      </Fade>

      {/* beat 3 — CRT insight */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={200} size={14} fill={INK_LIGHT} anchor="middle" script>
          {t("by CRT, the common solutions themselves form an AP", "CRT se, common solutions khud ek AP banate hain")}
        </T>
      </Fade>

      {/* beat 4 — d */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={235} size={16} fill={INK} anchor="middle">
          {"d = lcm(3, 5, 7) = 105"}
        </T>
      </Fade>

      {/* beat 5 — verify x=52 */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={500} y={270} size={15} fill={INK} anchor="middle">
          {"x = 52:  3(17)+1, 5(10)+2, 7(7)+3"}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 0.9)} d={checkD(830, 265, 16)} stroke={GREEN_DARK} sw={2.4} dur={0.4} />

      {/* beat 6 — red-margin: the answer */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 76 300 v 70" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={96} y={320} size={15} fill={RED} anchor="start" script>
          {t("so a = 52, d = 105 —", "toh a = 52, d = 105 —")}
        </T>
        <T x={96} y={360} size={15} fill={RED} anchor="start" script>
          {t("a + d = 157", "a + d = 157")}
        </T>
      </Fade>
    </Scene>
  );
}
