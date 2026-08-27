/**
 * C11 Ch09 · Section 62 — "Huckel's rule: what makes a ring aromatic"
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 9.13, 19.29, 27.56, 37.8, 47.96, 60.33]):
 *  0 heading: more than "ring with double bonds" · 1 cyclic, planar, fully
 *  conjugated · 2 + (4n+2) π electrons (Huckel's rule) · 3 formula
 *  compact statement · 4 benzene: n=1, six π · 5 forced addition only under
 *  vigorous conditions · 6 RED: ordinary unsaturation tests FAIL for arenes
 *
 * Layout plan — ring c(200,300) r=60, checklist x=400+:
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, AMBER_DARK, GREEN, INK, RED,
  Scene,
} from '@/components/scenes/kit';
import { ringD } from "./chem-kit";

export default function C11Ch09Sec62({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={65} size={24} fill={RED} script>
          {t("Huckel's rule: what makes a ring aromatic", "Huckel's rule: ring aromatic kaise banta")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={97} size={15} fill={INK} weight={700}>
          {t("aromatic is more than “a ring with double bonds”", "aromatic sirf “double bonds wala ring” nahi hai")}
        </T>
      </Fade>

      <Draw on={beat >= 1} delay={dl(1, 0.3)} d={ringD(190, 290, 55, 6)} stroke={INK} sw={2.2} dur={0.8} />

      <Fade on={beat >= 1} delay={dl(1, 1.2)}>
        <T x={420} y={175} size={15} fill={GREEN} weight={700} anchor="start">✓ {t("cyclic", "cyclic")}</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <T x={420} y={205} size={15} fill={GREEN} weight={700} anchor="start">✓ {t("planar", "planar")}</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.8)}>
        <T x={420} y={235} size={15} fill={GREEN} weight={700} anchor="start">✓ {t("fully conjugated", "fully conjugated")}</T>
      </Fade>

      {/* beat 2 — Huckel's rule */}
      <Draw on={beat >= 2} delay={dl(2, 0.4)} d="M 260 290 A 30 30 0 1 1 259.9 289.9" stroke={AMBER_DARK} sw={1.8} dur={0.7} />
      <Fade on={beat >= 2} delay={dl(2, 1.1)}>
        <T x={420} y={265} size={15} fill={AMBER_DARK} weight={700} anchor="start">
          ✓ (4n+2) π {t("electrons (Huckel's rule)", "electrons (Huckel's rule)")}
        </T>
      </Fade>

      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={320} size={15} fill={INK} weight={700}>
          {t("aromatic ⇔ cyclic, planar, conjugated, (4n+2)π", "aromatic ⇔ cyclic, planar, conjugated, (4n+2)π")}
        </T>
      </Fade>

      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={355} size={15} fill={INK}>
          {t("benzene satisfies it with n=1: six π electrons", "benzene isse n=1 ke saath satisfy karta: chhe π electrons")}
        </T>
      </Fade>

      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={390} size={15} fill={INK}>
          {t("benzene can be forced to add only under vigorous conditions", "benzene sirf vigorous conditions mein add karne ko majboor hota")}
        </T>
      </Fade>

      {/* beat 6 — the diagnostic */}
      <Draw on={beat >= 6} delay={dl(6, 0.3)} d="M 60 415 L 60 451" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={76} y={437} size={16} fill={RED} script anchor="start">
          {t("ordinary unsaturation tests FAIL for arenes — a key diagnostic", "ordinary unsaturation tests arenes ke liye FAIL — key diagnostic")}
        </T>
      </Fade>
    </Scene>
  );
}
