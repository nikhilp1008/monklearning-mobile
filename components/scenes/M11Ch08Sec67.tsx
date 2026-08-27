/**
 * M11 Ch08 · Section 67 — "The standard sums and the master technique"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type=formulas.
 *
 * Math check (Σr⁴, sanity-checked since it's the least "standard" of
 * the four): n=1: 1·2·3·(3+3-1)/30=30/30=1 ✓ (Σr⁴=1). n=2: 2·3·5·
 * (12+6-1)/30=510/30=17 ✓ (Σr⁴=1+16=17). Formula confirmed correct.
 *
 * Beats (en [0, 7, 15.27, 24.15, 34.73, 48.81, 65.02, 82.18]):
 *  0 title (always-on)
 *  1 formula: Σr, Σ1
 *  2 formula: Σr²
 *  3 formula: Σr³
 *  4 formula: Σr⁴
 *  5 formula: the master technique
 *  6 red-margin: expand products first
 *  7 text: partial range
 *
 * Layout plan:
 *  b1 | text bl100 cx540
 *  b2 | text bl130 cx540
 *  b3 | text bl160 cx540
 *  b4 | text bl192 cx540
 *  b5 | text bl225 cx540
 *  b6 | red bar x76 y250..320 · text bl270/310 x96
 *  b7 | text bl345 cx540
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, INK_LIGHT, RED,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch08Sec67({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={20} fill={INK} anchor="middle" script>
          {t("The four building-block sums, plus the master method", "Chaar building-block sums, aur master method")}
        </T>
      </Fade>

      {/* beat 1 — Σr, Σ1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={540} y={100} size={16} fill={INK} anchor="middle">
          {"Σr = n(n+1)/2,   Σ1 = n"}
        </T>
      </Fade>

      {/* beat 2 — Σr² */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={540} y={130} size={16} fill={INK} anchor="middle">
          {"Σr² = n(n+1)(2n+1)/6"}
        </T>
      </Fade>

      {/* beat 3 — Σr³ */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={160} size={16} fill={INK} anchor="middle">
          {"Σr³ = [n(n+1)/2]²"}
        </T>
      </Fade>

      {/* beat 4 — Σr⁴ */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={192} size={13} fill={INK} anchor="middle">
          {"Σr⁴ = n(n+1)(2n+1)(3n²+3n-1)/30"}
        </T>
      </Fade>

      {/* beat 5 — the master technique */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={225} size={12.5} fill={INK} anchor="middle">
          {"t_n = an³+bn²+cn+d  ⇒  S_n = aΣn³ + bΣn² + cΣn + dn"}
        </T>
      </Fade>

      {/* beat 6 — red-margin: expand first */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 76 250 v 70" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={96} y={270} size={15} fill={RED} anchor="start" script>
          {t("products like r(r+1) must be EXPANDED", "products jaise r(r+1) ko EXPAND karna hoga")}
        </T>
        <T x={96} y={310} size={15} fill={RED} anchor="start" script>
          {t("to a polynomial before summing", "polynomial mein, summing se pehle")}
        </T>
      </Fade>

      {/* beat 7 — partial range */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={540} y={345} size={14} fill={INK_LIGHT} anchor="middle" script>
          {t("partial range: Σ(m to n) = Σ(1 to n) - Σ(1 to m-1)", "partial range: Σ(m se n) = Σ(1 se n) - Σ(1 se m-1)")}
        </T>
      </Fade>
    </Scene>
  );
}
