/**
 * C11 Ch09 · Section 65 — "Preparing benzene: three routes"
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 4.95, 12.03, 21.76, 32.77, 38.91, 47.1]):
 *  0 heading · 1 (a) cyclic polymerisation of ethyne · 2 formula 3HC≡CH ->
 *  C6H6 · 3 (b) decarboxylation of sodium benzoate · 4 formula
 *  C6H5COONa+NaOH -> C6H6+Na2CO3 · 5 (c) reduction of phenol · 6 RED
 *  formula C6H5OH+Zn -> C6H6+ZnO
 *
 * Layout plan — three labeled rows y130 / y230 / y330:
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch09Sec65({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={65} size={26} fill={RED} script>
          {t("preparing benzene: three routes", "benzene banana: teen routes")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={97} size={15} fill={INK} weight={700}>
          {t("three laboratory routes to benzene", "benzene tak teen laboratory routes")}
        </T>
      </Fade>

      {/* beat 1-2 — route a */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={60} y={140} size={16} fill={INK} weight={800} anchor="start">
          {t("(a) Cyclic polymerisation of ethyne", "(a) Ethyne ka cyclic polymerisation")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <T x={540} y={140} size={14} fill={INK}>
          {t("over a red-hot iron tube", "red-hot iron tube ke upar se")}
        </T>
      </Fade>

      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={175} size={16} fill={INK} weight={700}>
          3 HC≡CH → C6H6  (Fe, 873 K)
        </T>
      </Fade>

      {/* beat 3-4 — route b */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={60} y={240} size={16} fill={INK} weight={800} anchor="start">
          {t("(b) Decarboxylation of sodium benzoate", "(b) Sodium benzoate ka decarboxylation")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={540} y={240} size={14} fill={INK}>
          {t("with soda lime", "soda lime ke saath")}
        </T>
      </Fade>

      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={275} size={15} fill={INK} weight={700}>
          C6H5COONa + NaOH → C6H6 + Na2CO3  (CaO, Δ)
        </T>
      </Fade>

      {/* beat 5 — route c */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={60} y={340} size={16} fill={INK} weight={800} anchor="start">
          {t("(c) Reduction of phenol", "(c) Phenol ka reduction")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={540} y={340} size={14} fill={INK}>
          {t("over heated zinc dust", "heated zinc dust ke upar se")}
        </T>
      </Fade>

      {/* beat 6 — the answer */}
      <Draw on={beat >= 6} delay={dl(6, 0.3)} d="M 60 365 L 60 401" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={76} y={387} size={16} fill={RED} weight={700} anchor="start">
          C6H5OH + Zn → C6H6 + ZnO
        </T>
      </Fade>
    </Scene>
  );
}
