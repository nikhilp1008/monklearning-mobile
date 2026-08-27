/**
 * M11 Ch08 · Section 12 — "Arithmetic means, inserting means, and the sum test"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type=formulas.
 *
 * Math check: S_n=An²+Bn ⇒ a_1=S_1=A+B; a_n=S_n-S_(n-1)=A(2n-1)+B=2An+(B-A),
 * so a_1=2A+(B-A)=A+B ✓ and d=a_n-a_(n-1)=2A ✓. Three-term test 2a_2=a_1+a_3
 * is the standard AM condition on a_2.
 *
 * Beats (en [0, 15.1, 23.47, 36.1, 47.19, 58.54, 74.41, 94.55]):
 *  0 title (always-on)
 *  1 3 dots on a line (a,b,c) + formula b=(a+c)/2
 *  2 insert-means chain: a, A_1, A_2, ⋯, b — m+2 terms
 *  3 formulas: d and A_k
 *  4 formula: sum of inserted means
 *  5 boxed: the S_n=An²+Bn characterization test
 *  6 red-margin: zero constant term required
 *  7 closer: three-term test
 *
 * Layout plan:
 *  b1 | 3 dots y100 x440/540/640 · labels bl120 · formula bl148 cx540
 *  b2 | 5 boxes y180 h34 cx150/300/450/600/750 · caption bl240 cx540
 *  b3 | line1 bl272 · line2 bl306 cx540
 *  b4 | line bl340 cx540
 *  b5 | chip x310 y365 w460 h46 (text bl~392)
 *  b6 | red bar x76 y430..500 · text bl450/490 x96
 *  b7 | text bl540 cx540
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, Chip, T, INK, INK_LIGHT, MUTED, AMBER_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';
import { axisD, IntervalDot } from "./math-kit";

export default function M11Ch08Sec12({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const chainCx = [150, 300, 450, 600, 750];
  const chainLabel = ["a", "A_1", "A_2", "⋯", "b"];

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={22} fill={INK} anchor="middle" script>
          {t("Arithmetic mean, inserting means, and the sum test", "Arithmetic mean, means insert karna, aur sum test")}
        </T>
      </Fade>

      {/* beat 1 — a, b, c with b as the mean */}
      <Draw on={beat >= 1} delay={dl(1, 0.1)} d={axisD(400, 700, 100)} stroke={MUTED} sw={1.4} dur={0.4} />
      {[440, 540, 640].map((x, i) => (
        <IntervalDot key={i} on={beat >= 1} delay={dl(1, 0.4 + i * 0.2)} x={x} y={100} open={false} r={4.5} stroke={AMBER_DARK} />
      ))}
      <Fade on={beat >= 1} delay={dl(1, 1.0)}>
        <T x={440} y={120} size={13} fill={INK} anchor="middle">a</T>
        <T x={540} y={120} size={13} fill={INK} anchor="middle">b</T>
        <T x={640} y={120} size={13} fill={INK} anchor="middle">c</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.4)}>
        <T x={540} y={148} size={16} fill={INK} anchor="middle">
          {"a, b, c in AP ⟺ b = (a+c)/2"}
        </T>
      </Fade>

      {/* beat 2 — insert-means chain */}
      {chainCx.map((cx, i) => (
        <Fade key={i} on={beat >= 2} delay={dl(2, 0.2 + i * 0.2)}>
          <T x={cx} y={202} size={16} fill={i === 0 || i === 4 ? INK : AMBER_DARK} anchor="middle" weight={700}>
            {chainLabel[i]}
          </T>
        </Fade>
      ))}
      <Fade on={beat >= 2} delay={dl(2, 1.4)}>
        <T x={540} y={240} size={13} fill={INK_LIGHT} anchor="middle" script>
          {t("m AMs between a and b → m+2 terms total", "a aur b ke beech m AMs → total m+2 terms")}
        </T>
      </Fade>

      {/* beat 3 — d and A_k formulas */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={272} size={15} fill={INK} anchor="middle">{"d = (b-a)/(m+1)"}</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={540} y={306} size={15} fill={INK} anchor="middle">{"A_k = a + k·(b-a)/(m+1)"}</T>
      </Fade>

      {/* beat 4 — sum of inserted means */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={340} size={16} fill={INK} anchor="middle">{"Σ A_k = m·(a+b)/2"}</T>
      </Fade>

      {/* beat 5 — boxed characterization test */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <Chip x={310} y={365} w={460} h={46} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={16}>
          {"S_n = An² + Bn ⟺ AP, d=2A, a_1=A+B"}
        </Chip>
      </Fade>

      {/* beat 6 — red-margin: zero constant term */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 76 430 v 70" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={96} y={450} size={15} fill={RED} anchor="start" script>
          {t("the test needs ZERO constant term:", "test ko ZERO constant term chahiye:")}
        </T>
        <T x={96} y={490} size={15} fill={RED} anchor="start">
          {"S_n = An² + Bn + c, c≠0  is NOT an AP"}
        </T>
      </Fade>

      {/* beat 7 — closer: three-term test */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={540} y={540} size={15} fill={INK} anchor="middle" script>
          {t(
            "three-term test: 2a_2 = a_1 + a_3 — needs no a or d",
            "three-term test: 2a_2 = a_1 + a_3 — a ya d nahi chahiye"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
