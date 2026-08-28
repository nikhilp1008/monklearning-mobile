/**
 * Ch10 · Section 41 — "The fine print: emissivity, net exchange, Newton's approximation"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0,1,2,12.67,21.71,30.67,41.94] — beats 0-1 exactly 1s apart,
 * so those Fade delays stay ≤ ~0.3s):
 *  0 intro: the fine print that separates memorising from understanding
 *  1 Stefan's law, pure form: E = σT⁴ (a perfect black body)
 *  2 real surface: insert emissivity e (0 to 1), P = eσAT⁴
 *  3 what matters is the net — surroundings radiate back too
 *  4 net power: P_net = eσA(T⁴−T₀⁴), T₀ = surroundings' temperature
 *  5 Newton's law of cooling: rate ∝ excess T — only an approximation
 *  6 it's Stefan's T⁴ in disguise, valid only for a small excess
 *
 * Layout plan (strict non-overlapping y-bands):
 *  b0 | intro mid x540 bl85
 *  b1 | law mid x540 bl120
 *  b2 | real mid x540 bl155
 *  b3 | note mid x540 bl185
 *  b4 | box x330..750 y210..252 · net mid x540 bl237
 *  b5 | newton mid x540 bl285
 *  b6 | disguise mid x540 bl318
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
  AMBER_DARK,
  GREEN,
  Scene,
} from '@/components/scenes/kit';

export default function Ch10Sec41({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true} delay={0.2}>
        <T x={540} y={58} size={18} fill={INK} script>
          {t("the fine print — emissivity, net exchange, newton's approximation", "fine print — emissivity, net exchange, newton ka approximation")}
        </T>
      </Fade>

      {/* beat 0 — intro */}
      <Fade on={beat >= 0} delay={dl(0, 0.15)}>
        <T x={540} y={85} size={12} fill={INK} script anchor="middle">
          {t("the fine print separating memorising from understanding", "fine print jo memorise aur samajhne mein farak karta")}
        </T>
      </Fade>

      {/* beat 1 — Stefan's law, pure */}
      <Fade on={beat >= 1} delay={dl(1, 0.15)}>
        <T x={540} y={120} size={16} fill={INK} weight={700} anchor="middle">
          E = σT⁴  ({t("perfect black body", "perfect black body")})
        </T>
      </Fade>

      {/* beat 2 — real surfaces need emissivity */}
      <Fade on={beat >= 2} delay={dl(2, 0.15)}>
        <T x={540} y={155} size={14} fill={INK} anchor="middle">
          P = eσAT⁴  (0 ≤ e ≤ 1)
        </T>
      </Fade>

      {/* beat 3 — the net matters */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={185} size={12} fill={MUTED} script anchor="middle">
          {t("surroundings radiate back too — what matters is the net", "surroundings bhi radiate karte — jo matter karta wo net hai")}
        </T>
      </Fade>

      {/* beat 4 — the net power formula */}
      <Draw on={beat >= 4} delay={dl(4, 0.15)} d="M330 210 h420 v42 h-420 z" stroke={AMBER_DARK} sw={2.2} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <T x={540} y={237} size={15} fill={AMBER_DARK} weight={800} anchor="middle">
          P_net = eσA(T⁴−T₀⁴)
        </T>
      </Fade>

      {/* beat 5 — Newton's law of cooling */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={285} size={13} fill={INK} script anchor="middle">
          {t("Newton's law: rate ∝ excess T — only an approximation", "Newton's law: rate ∝ excess T — sirf ek approximation")}
        </T>
      </Fade>

      {/* beat 6 — the disguise */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={318} size={13} fill={GREEN} script weight={700} anchor="middle">
          {t("Stefan's T⁴ in disguise — valid only for a small excess", "Stefan's T⁴ ka bhes — sirf chhote excess ke liye sahi")}
        </T>
      </Fade>
    </Scene>
  );
}
