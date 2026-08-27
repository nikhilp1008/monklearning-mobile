/**
 * C11 Ch09 · Section 26 — "The orbital picture of ethene"
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 8.11, 17.07, 26.62, 36.52, 45.31, 57.34]):
 *  0 heading: each C is sp2 · 1 3 sp2 orbitals at 120°, make 2 C-H + C-C σ
 *  · 2 leftover 2p perpendicular to plane · 3 diagram: skeleton + top/bottom
 *  dashed π lobes · 4 sideways overlap forms π · 5 lateral overlap poorer,
 *  π weaker · 6 RED: reactivity hangs on this weak π cloud
 *
 * Layout plan — skeleton C1(250,235) C2(350,235), H's at ±40,±30:
 *  b3 | skeleton + top/bottom lobes | Draw+T | x150..450 y135..335
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';
import { bondD, doubleBondD } from "./chem-kit";

export default function C11Ch09Sec26({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={65} size={26} fill={RED} script>
          {t("the orbital picture of ethene", "ethene ki orbital picture")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={720} y={135} size={15} fill={INK} weight={700} anchor="start">
          {t("each doubly-bonded carbon is sp²", "har doubly-bonded carbon sp² hai")}
        </T>
      </Fade>

      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={720} y={175} size={14} fill={INK} anchor="start">
          {t("3 sp² orbitals at 120° → two C–H + the C–C σ", "3 sp² orbitals 120° pe → do C–H + C–C σ")}
        </T>
      </Fade>

      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={720} y={215} size={14} fill={INK} anchor="start">
          {t("leftover 2p orbital stands ⊥ to that plane", "bacha hua 2p orbital plane ke ⊥ khada hai")}
        </T>
      </Fade>

      {/* beat 3 — the skeleton with top/bottom pi lobes */}
      <Draw on={beat >= 3} delay={dl(3, 0.3)} d={doubleBondD(250, 235, 350, 235)} stroke={INK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 3} delay={dl(3, 0.8)} d={bondD(250, 235, 210, 205)} stroke={INK} sw={2} dur={0.3} />
      <Draw on={beat >= 3} delay={dl(3, 1)} d={bondD(250, 235, 210, 265)} stroke={INK} sw={2} dur={0.3} />
      <Draw on={beat >= 3} delay={dl(3, 1.2)} d={bondD(350, 235, 390, 205)} stroke={INK} sw={2} dur={0.3} />
      <Draw on={beat >= 3} delay={dl(3, 1.4)} d={bondD(350, 235, 390, 265)} stroke={INK} sw={2} dur={0.3} />
      <Draw on={beat >= 3} delay={dl(3, 1.7)} d="M 185 165 A 115 30 0 1 1 414.9 164.9" stroke={AMBER_DARK} sw={1.6} dur={0.6} />
      <Draw on={beat >= 3} delay={dl(3, 2.1)} d="M 185 305 A 115 30 0 1 0 414.9 305.1" stroke={AMBER_DARK} sw={1.6} dur={0.6} />
      <Fade on={beat >= 3} delay={dl(3, 2.6)}>
        <T x={300} y={122} size={13} fill={AMBER_DARK} script>{t("π cloud (out of plane)", "π cloud (plane se bahar)")}</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.9)}>
        <T x={300} y={355} size={13} fill={MUTED} script>{t("sp² σ framework, 120°", "sp² σ framework, 120°")}</T>
      </Fade>

      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={425} size={15} fill={INK}>
          {t("the two perpendicular p orbitals overlap sideways → π bond", "do perpendicular p orbitals sideways overlap karte → π bond")}
        </T>
      </Fade>

      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={457} size={15} fill={INK}>
          {t("poorer lateral overlap ⇒ π is weaker (~284 vs 397)", "kamzor lateral overlap ⇒ π weak hai (~284 vs 397)")}
        </T>
      </Fade>

      {/* beat 6 — the payoff */}
      <Draw on={beat >= 6} delay={dl(6, 0.3)} d="M 60 490 L 60 526" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={76} y={512} size={16} fill={RED} script anchor="start">
          {t(
            "it's this weaker, exposed π cloud that all reactivity hangs on",
            "yahi weak, exposed π cloud pe puri reactivity tiki hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
