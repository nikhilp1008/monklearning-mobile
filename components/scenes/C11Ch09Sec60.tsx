/**
 * C11 Ch09 · Section 60 — "The delocalised doughnut and resonance energy"
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 13.31, 22.19, 35.5, 47.02, 57.17, 65.28]):
 *  0 heading: six π electrons as one doughnut · 1 each C is sp2, one ⊥ p
 *  orbital · 2 all 6 p orbitals overlap sideways → delocalised cloud
 *  (hexagon + circle drawn) · 3 delocalisation lowers energy · 4 far more
 *  stable than "cyclohexatriene" · 5 resonance energy ≈150 kJ/mol ·
 *  6 RED: all arene chemistry flows from this
 *
 * Layout plan — ring c(200,290) r=70, inner circle r=42:
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, AMBER_DARK, INK, RED,
  Scene,
} from '@/components/scenes/kit';
import { ringD } from "./chem-kit";

export default function C11Ch09Sec60({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={65} size={24} fill={RED} script>
          {t("the delocalised doughnut and resonance energy", "delocalised doughnut aur resonance energy")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={610} y={135} size={14} fill={INK} weight={700} anchor="start">
          {t("six π electrons as one continuous doughnut", "chhe π electrons — ek continuous doughnut")}
        </T>
      </Fade>

      {/* beat 1 — the hexagon (sp2 framework) */}
      <Draw on={beat >= 1} delay={dl(1, 0.3)} d={ringD(200, 290, 70, 6)} stroke={INK} sw={2.4} dur={0.9} />
      <Fade on={beat >= 1} delay={dl(1, 1.4)}>
        <T x={610} y={175} size={13} fill={INK} anchor="start">
          {t("each carbon is sp², with one perpendicular p orbital", "har carbon sp², ek perpendicular p orbital ke saath")}
        </T>
      </Fade>

      {/* beat 2 — the delocalised cloud (inner circle) */}
      <Draw on={beat >= 2} delay={dl(2, 0.4)} d="M 242 290 A 42 42 0 1 1 241.9 289.9" stroke={AMBER_DARK} sw={2.2} dur={0.9} />
      <Fade on={beat >= 2} delay={dl(2, 1.4)}>
        <T x={610} y={213} size={13} fill={INK} anchor="start">
          {t("all six p orbitals overlap sideways into one cloud", "chhe p orbitals sideways overlap ek cloud mein")}
        </T>
      </Fade>

      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={610} y={251} size={13} fill={INK} anchor="start">
          {t("delocalisation lowers the energy — sharing beats localising", "delocalisation energy kam karta — sharing localising se behtar")}
        </T>
      </Fade>

      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={610} y={289} size={13} fill={INK} anchor="start">
          {t("far more stable than an imaginary “cyclohexatriene”", "kisi imaginary “cyclohexatriene” se kahin zyada stable")}
        </T>
      </Fade>

      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={200} y={400} size={16} fill={AMBER_DARK} weight={700}>
          {t("resonance energy ≈ 150 kJ/mol", "resonance energy ≈ 150 kJ/mol")}
        </T>
      </Fade>

      {/* beat 6 — the payoff */}
      <Draw on={beat >= 6} delay={dl(6, 0.3)} d="M 60 434 L 60 470" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={76} y={456} size={16} fill={RED} script anchor="start">
          {t("all arene chemistry flows from that resonance energy", "arene chemistry us resonance energy se hi bahti hai")}
        </T>
      </Fade>
    </Scene>
  );
}
