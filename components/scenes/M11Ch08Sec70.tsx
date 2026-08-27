/**
 * M11 Ch08 · Section 70 — "A nested sum of triangular numbers"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type=worked_examples.
 *
 * Math check: Σ(k=1..20)k²=20·21·41/6=17220/6=2870 ✓. Σ(k=1..20)k=
 * 20·21/2=210 ✓. (1/2)(2870+210)=(1/2)(3080)=1540 ✓.
 *
 * Beats (en [0, 13.99, 25.51, 35.07, 45.4, 53.85, 63.15]):
 *  0 title (always-on)
 *  1 text: inner sum is the triangular number
 *  2 formula: rewrite as half of two standard sums
 *  3 formula: Σk²=2870
 *  4 formula: Σk=210
 *  5 formula: the answer
 *  6 red-margin: resolve inner sum first
 *
 * Layout plan:
 *  b1 | text bl100 cx540
 *  b2 | text bl135 cx540
 *  b3 | text bl168 cx540
 *  b4 | text bl198 cx540
 *  b5 | text bl231 cx540 (bold)
 *  b6 | red bar x76 y256..326 · text bl276/316 x96
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, INK_LIGHT, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch08Sec70({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={19} fill={INK} anchor="middle" script>
          {t("Evaluate Σ (1 + 2 + 3 + … + k) for k = 1 to 20", "Σ (1 + 2 + 3 + … + k) evaluate karo, k = 1 se 20 tak")}
        </T>
      </Fade>

      {/* beat 1 — the inner sum */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={540} y={100} size={15} fill={INK_LIGHT} anchor="middle" script>
          {t("the inner sum is the triangular number k(k+1)/2", "inner sum triangular number k(k+1)/2 hai")}
        </T>
      </Fade>

      {/* beat 2 — rewrite */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={540} y={168} size={16} fill={INK} anchor="middle">
          {"Σ k(k+1)/2 = (1/2)(Σk² + Σk)"}
        </T>
      </Fade>

      {/* beat 3 — Σk² */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={198} size={16} fill={INK} anchor="middle">
          {"Σk² = 20·21·41/6 = 2870"}
        </T>
      </Fade>

      {/* beat 4 — Σk */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={231} size={16} fill={INK} anchor="middle">
          {"Σk = 20·21/2 = 210"}
        </T>
      </Fade>

      {/* beat 5 — the answer */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={264} size={18} fill={AMBER_DARK} anchor="middle" weight={700}>
          {"(1/2)(2870 + 210) = 1540"}
        </T>
      </Fade>

      {/* beat 6 — red-margin: JEE note */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 76 289 v 70" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={96} y={309} size={15} fill={RED} anchor="start" script>
          {t("JEE Main 2020: resolve the inner", "JEE Main 2020: pehle inner sum")}
        </T>
        <T x={96} y={349} size={15} fill={RED} anchor="start" script>
          {t("sum first, then apply standard sums", "resolve karo, phir standard sums")}
        </T>
      </Fade>
    </Scene>
  );
}
