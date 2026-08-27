/**
 * C11 Ch09 · Section 40 — "Carbocation rearrangement" (JEE Advanced)
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 12.03, 22.02, 30.12, 45.06, 52.99, 58.62]):
 *  0 heading · 1 major product is 2-chloro-2-methylbutane, not 2-chloro-3-
 *  · 2 protonation gives 2° cation at C2 · 3 formula: 2°→3° via 1,2-H shift
 *  · 4 3° markedly more stable, Cl⁻ caps it · 5 result: 2-chloro-2-
 *  methylbutane · 6 RED: trade 2° for 3° = real Markovnikov
 *
 * Layout plan:
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, GREEN, INK, RED,
  Scene,
} from '@/components/scenes/kit';
import { curvedArrowD } from "./chem-kit";

export default function C11Ch09Sec40({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={65} size={26} fill={RED} script>
          {t("carbocation rearrangement", "carbocation rearrangement")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={95} size={14} fill={INK} weight={700}>
          [JEE Advanced] 3-methylbut-1-ene + HCl
        </T>
      </Fade>

      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={540} y={130} size={15} fill={INK}>
          {t("major product: 2-chloro-2-methylbutane, not 2-chloro-3-methylbutane", "major product: 2-chloro-2-methylbutane, 2-chloro-3-methylbutane nahi")}
        </T>
      </Fade>

      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={165} size={15} fill={INK}>
          {t("protonation of the terminal CH2 gives a 2° cation at C2", "terminal CH2 ka protonation C2 pe 2° cation deta hai")}
        </T>
      </Fade>

      {/* beat 3 — the hydride shift */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={225} y={230} size={15} fill={INK} weight={700} anchor="start">
          (CH3)2CH–CH⁺–CH3 (2°)
        </T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 1)}
        d={curvedArrowD(490, 200, 570, 200, -22, false)}
        stroke={RED}
        sw={1.8}
        dur={0.6}
      />
      <Fade on={beat >= 3} delay={dl(3, 1.6)}>
        <T x={530} y={185} size={12} fill={RED} script>{t("1,2-H shift", "1,2-H shift")}</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2)}>
        <T x={600} y={230} size={15} fill={INK} weight={700} anchor="start">
          (CH3)2C⁺–CH2–CH3 (3°)
        </T>
      </Fade>

      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={280} size={15} fill={INK}>
          {t("the 3° cation is markedly more stable — chloride caps it", "3° cation kaafi zyada stable hai — chloride usse cap karta hai")}
        </T>
      </Fade>

      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={315} size={16} fill={GREEN} weight={700}>
          {t("result: 2-chloro-2-methylbutane, the major product", "result: 2-chloro-2-methylbutane, major product")}
        </T>
      </Fade>

      {/* beat 6 — real Markovnikov */}
      <Draw on={beat >= 6} delay={dl(6, 0.3)} d="M 60 345 L 60 405" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={76} y={365} size={15} fill={RED} script anchor="start">
          {t("driving force: trade a 2° cation for a more stable 3°", "driving force: 2° cation ko zyada stable 3° se badalna")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={76} y={397} size={15} fill={RED} script anchor="start">
          {t("— the real Markovnikov rule", "— asli Markovnikov rule yahi hai")}
        </T>
      </Fade>
    </Scene>
  );
}
