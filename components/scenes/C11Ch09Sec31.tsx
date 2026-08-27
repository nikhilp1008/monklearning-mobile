/**
 * C11 Ch09 · Section 31 — "Electrophilic addition: hydrogen and halogens"
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 10.07, 20.14, 28.59, 33.79, 39.51, 53.85]):
 *  0 heading: master reaction, electrophiles attack π · 1 H2/Ni,Pd,Pt →
 *  alkane · 2 halogens Br2/Cl2 → vicinal dihalide · 3 formula CH2=CH2+Br2
 *  → CH2BrCH2Br · 4 I2 doesn't add · 5 Br2/CCl4 decolourised test (halonium
 *  ion) · 6 RED: electron-rich, electrophile hits π cloud
 *
 * Layout plan — two reaction rows y150 (H2) / y230 (halogen):
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, RED,
  Scene,
} from '@/components/scenes/kit';
import { ReactionArrow } from "./chem-kit";

export default function C11Ch09Sec31({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={65} size={24} fill={RED} script>
          {t("electrophilic addition: hydrogen and halogens", "electrophilic addition: hydrogen aur halogens")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={95} size={15} fill={INK} weight={700}>
          {t("the master reaction: electrophiles attack the π bond", "master reaction: electrophiles π bond pe attack karte")}
        </T>
      </Fade>

      {/* beat 1 — H2 addition */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={175} y={165} size={16} fill={INK} weight={700} anchor="start">alkene</T>
      </Fade>
      <ReactionArrow on={beat >= 1} delay={dl(1, 1)} x1={290} x2={420} y={160} over="H2 / Ni,Pd,Pt" color={INK} />
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <T x={440} y={165} size={17} fill={INK} weight={800} anchor="start">alkane</T>
      </Fade>

      {/* beat 2+3 — halogen addition */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={205} size={15} fill={INK}>
          {t("Br2 or Cl2 add across C=C → a vicinal dihalide", "Br2 ya Cl2 C=C ke across add karte → vicinal dihalide")}
        </T>
      </Fade>

      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={245} size={16} fill={INK} weight={700}>
          CH2=CH2 + Br2 → CH2Br–CH2Br
        </T>
      </Fade>

      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={280} size={15} fill={INK}>
          {t("iodine does not add under normal conditions", "iodine normal conditions mein add nahi hota")}
        </T>
      </Fade>

      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={313} size={15} fill={INK}>
          {t("decolourising Br2/CCl4 — the classic test (via a cyclic halonium ion)", "Br2/CCl4 decolourise — classic test (cyclic halonium ion se)")}
        </T>
      </Fade>

      {/* beat 6 — the theme */}
      <Draw on={beat >= 6} delay={dl(6, 0.3)} d="M 60 345 L 60 381" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={76} y={367} size={16} fill={RED} script anchor="start">
          {t(
            "alkenes are electron-rich — every reaction starts on the π cloud",
            "alkenes electron-rich hain — har reaction π cloud se shuru hoti"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
