/**
 * C11 Ch09 · Section 36 — "Ozonolysis and polymerisation"
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 8.45, 14.25, 20.65, 29.61, 39.17, 51.37]):
 *  0 heading: cut the bond, read the pieces · 1 O3 adds to C=C -> ozonide ·
 *  2 Zn-H2O cleaves ozonide into two carbonyls · 3 diagram: alkene ->
 *  ozonide -> two carbonyls · 4 read products backwards · 5 RED: 2-alkyl
 *  C→ketone, H-carbon→aldehyde · 6 polymerisation: many ethene → polythene
 *
 * Layout plan — scheme row y150-210:
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';
import { ringD } from "./chem-kit";

export default function C11Ch09Sec36({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={65} size={26} fill={RED} script>
          {t("ozonolysis and polymerisation", "ozonolysis aur polymerisation")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={97} size={15} fill={INK} weight={700}>
          {t("cut the bond, read the pieces", "bond kaato, tukdon ko padho")}
        </T>
      </Fade>

      {/* beat 1 — alkene + O3 -> ozonide */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={130} y={200} size={15} fill={INK} weight={700} anchor="start">R2C=CR'2</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1)} d="M 260 195 L 340 195 M 328 189 L 340 195 L 328 201" stroke={INK} sw={2} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <T x={300} y={180} size={13} fill={RED}>(i) O3</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.9)} d={ringD(400, 195, 30, 5)} stroke={AMBER_DARK} sw={2} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 2.5)}>
        <T x={400} y={235} size={12} fill={AMBER_DARK} script>{t("ozonide", "ozonide")}</T>
      </Fade>

      {/* beat 2 — Zn/H2O cleaves to two carbonyls */}
      <Draw on={beat >= 2} delay={dl(2, 0.3)} d="M 460 195 L 560 195 M 548 189 L 560 195 L 548 201" stroke={INK} sw={2} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={510} y={180} size={13} fill={GREEN}>(ii) Zn/H2O</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <T x={630} y={200} size={15} fill={INK} weight={700} anchor="start">
          R2C=O + O=CR'2
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.1)}>
        <T x={790} y={220} size={12} fill={INK} script>{t("two carbonyls", "do carbonyls")}</T>
      </Fade>

      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={280} size={15} fill={INK}>
          {t("read the products backwards to find the original double bond", "products ko ulta padho — original double bond dhundo")}
        </T>
      </Fade>

      {/* beat 5 — the reading rule */}
      <Draw on={beat >= 5} delay={dl(5, 0.3)} d="M 60 305 L 60 341" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={76} y={327} size={16} fill={RED} script anchor="start">
          {t("two alkyls ⇒ ketone; one H ⇒ aldehyde", "do alkyls ⇒ ketone; ek H ⇒ aldehyde")}
        </T>
      </Fade>

      {/* beat 6 — polymerisation */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={365} size={15} fill={INK}>
          {t("polymerisation: many ethene units add → polythene (addition polymer)", "polymerisation: bahut ethene units add hote → polythene (addition polymer)")}
        </T>
      </Fade>
    </Scene>
  );
}
