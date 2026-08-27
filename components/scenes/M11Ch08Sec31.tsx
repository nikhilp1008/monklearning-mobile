/**
 * M11 Ch08 · Section 31 — "Infinite GP: sum 2, cubes sum 24"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type=worked_examples.
 *
 * Math check: a/(1-r)=2 ⇒ a=2(1-r). Cubes a³,a³r³,... sum a³/(1-r³)=24.
 * Substituting a=2(1-r) and 1-r³=(1-r)(1+r+r²): 8(1-r)³/[(1-r)(1+r+r²)]
 * = 8(1-r)²/(1+r+r²) = 24 ⇒ (1-r)²/(1+r+r²)=3 ⇒ 1-2r+r²=3+3r+3r² ⇒
 * 2r²+5r+2=0 ⇒ (2r+1)(r+2)=0 ⇒ r=-1/2 or r=-2. |r|<1 rejects r=-2.
 * r=-1/2 ⇒ a=2(1-(-1/2))=3. Check: a³=27, r³=-1/8, 1-r³=9/8,
 * 27/(9/8)=27×8/9=24 ✓.
 *
 * Beats (en [0, 12.54, 22.7, 33.54, 44.71, 60.84, 74.75]):
 *  0 title (always-on)
 *  1 formula: a/(1-r)=2 ⇒ a=2(1-r)
 *  2 text: cubes form a GP with ratio r³
 *  3 formula: a³/(1-r³)=24
 *  4 formula: reduces to 2r²+5r+2=0
 *  5 red-margin: factor, reject r=-2, keep r=-1/2
 *  6 closer: r=-1/2, a=3, checked
 *
 * Layout plan:
 *  b1 | text bl100 cx540
 *  b2 | text bl132 cx540
 *  b3 | text bl165 cx540
 *  b4 | text bl198 cx540
 *  b5 | red bar x76 y225..295 · text bl245/285 x96
 *  b6 | text bl335 cx540
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, INK_LIGHT, RED,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch08Sec31({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={20} fill={INK} anchor="middle" script>
          {t("Infinite GP has sum 2 and its cubes sum to 24. Find a and r.", "Infinite GP ka sum 2 hai, cubes ka sum 24. a aur r nikalo.")}
        </T>
      </Fade>

      {/* beat 1 — the sum condition */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={540} y={100} size={16} fill={INK} anchor="middle">
          {"a/(1-r) = 2  ⇒  a = 2(1-r)"}
        </T>
      </Fade>

      {/* beat 2 — the cubes form a GP */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={540} y={132} size={15} fill={INK_LIGHT} anchor="middle" script>
          {t("the cubes form a GP with ratio r³", "cubes bhi ek GP banate hain, ratio r³")}
        </T>
      </Fade>

      {/* beat 3 — cubes sum */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={165} size={16} fill={INK} anchor="middle">
          {"a³/(1-r³) = 24"}
        </T>
      </Fade>

      {/* beat 4 — reduces to a quadratic */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={198} size={16} fill={INK} anchor="middle">
          {"(1-r)²/(1+r+r²) = 3  ⇒  2r² + 5r + 2 = 0"}
        </T>
      </Fade>

      {/* beat 5 — red-margin: factor and reject */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M 76 225 v 70" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={96} y={245} size={15} fill={RED} anchor="start" script>
          {t("(2r+1)(r+2)=0: |r|<1 rejects", "(2r+1)(r+2)=0: |r|<1 reject karta hai")}
        </T>
        <T x={96} y={285} size={15} fill={RED} anchor="start" script>
          {t("r = -2, leaving r = -1/2", "r = -2 ko, bacha r = -1/2")}
        </T>
      </Fade>

      {/* beat 6 — closer */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={335} size={15} fill={INK} anchor="middle">
          {"r = -1/2, a = 3;  check: 27/(9/8) = 24"}
        </T>
      </Fade>
    </Scene>
  );
}
