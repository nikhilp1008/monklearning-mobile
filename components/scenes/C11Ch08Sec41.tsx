/**
 * C11 Ch08 · Section 41 — "Three steps: purify, detect, measure"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING(_CHEMISTRY).md.
 *
 * Beats (board_reveal_at, en [0, 8.79, 18.26, 33.88, 48.55, 62.72, 71.59, 87.3]):
 *  0 title (always-on, seq1) · 1 fresh compound never pure · 2 3-step flow:
 *  purify→qualitative→quantitative · 3 purification = sorting mixed grains ·
 *  4 red note (bp→distillation, solubility→crystallisation/extraction) · 5
 *  sublimation, chromatography · 6 qualitative vs quantitative defs · 7 red
 *  closer (assumptions)
 *
 * 3-step flow boxes x=200/540/880 (w200), y120-160.
 */

import React from "react";
import { Rect } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, RED, CREAM, AMBER,
  Scene,
} from '@/components/scenes/kit';
import { arrowD } from '@/components/scenes/kit';

export default function C11Ch08Sec41({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={23} fill={RED} script>
          {t("Three steps: purify → detect → measure", "Teen steps: purify → detect → measure")}
        </T>
      </Fade>

      {/* beat 1 — never pure */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={540} y={95} size={13} fill={INK}>
          {t("a fresh compound is never pure — mixed with materials, by-products, solvents", "fresh compound kabhi pure nahi — materials, by-products, solvents mixed")}
        </T>
      </Fade>

      {/* beat 2 — the three-step flow */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <Rect x={100} y={120} width={200} height={40} rx={8} fill={CREAM} stroke={AMBER} strokeWidth={1.8} />
        <T x={200} y={145} size={15} fill={INK} weight={700}>
          {t("Purify", "Purify")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.5)} d={arrowD(310, 140, 430, 140)} stroke={INK} sw={2} dur={0.3} />
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <Rect x={440} y={120} width={200} height={40} rx={8} fill={CREAM} stroke={AMBER} strokeWidth={1.8} />
        <T x={540} y={145} size={15} fill={INK} weight={700}>
          {t("Qualitative", "Qualitative")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.8)} d={arrowD(650, 140, 770, 140)} stroke={INK} sw={2} dur={0.3} />
      <Fade on={beat >= 2} delay={dl(2, 0.9)}>
        <Rect x={780} y={120} width={200} height={40} rx={8} fill={CREAM} stroke={AMBER} strokeWidth={1.8} />
        <T x={880} y={145} size={15} fill={INK} weight={700}>
          {t("Quantitative", "Quantitative")}
        </T>
      </Fade>

      {/* beat 3 — the analogy */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={185} size={13} fill={MUTED} script>
          {t("purification = sorting a sack of mixed grains", "purification = mixed grains ki bori chhaanana")}
        </T>
      </Fade>

      {/* beat 4 — property to method */}
      <Draw on={beat >= 4} delay={dl(4, 0.2)} d="M 60 205 L 60 235" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={76} y={223} size={15} fill={RED} script anchor="start">
          {t(
            "property → method: boiling point → distillation; solubility → crystallisation/extraction",
            "property → method: boiling point → distillation; solubility → crystallisation/extraction"
          )}
        </T>
      </Fade>

      {/* beat 5 — sublimation, chromatography */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={260} size={13} fill={INK}>
          {t("sublimes → sublimation; surface affinity differs → chromatography", "sublime hota → sublimation; surface affinity alag → chromatography")}
        </T>
      </Fade>

      {/* beat 6 — qualitative vs quantitative */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={290} size={13} fill={INK} weight={700}>
          {t("qualitative: 'what's in here?' · quantitative: 'how much?' (weigh the products)", "qualitative: 'ismein kya hai?' · quantitative: 'kitna hai?' (products weigh karo)")}
        </T>
      </Fade>

      {/* beat 7 — the assumptions */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 60 315 L 60 345" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={76} y={333} size={15} fill={RED} script anchor="start">
          {t(
            "each method assumes a usable difference; estimations assume the reaction fully completes",
            "har method ek usable difference assume karta; estimations poori reaction assume karte"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
