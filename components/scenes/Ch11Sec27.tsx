/**
 * Ch11 · Section 27 — "The two capacities and Mayer"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * UNVERIFIED — audio for sec 27 not yet uploaded, verify-scene.mjs could
 * not be run. Dense formula-sheet section, text-forward like Sec4/11/18.
 * Re-run once audio lands.
 *
 * Beats (8): 0 hook · 1 Q=msΔT or nCΔT · 2 Mayer Cp−Cv=R (boxed) ·
 *  3 Cv,Cp,γ from f · 4 "reflex memory" transition · 5 reflex identities
 *  + ΔU=nCvΔT · 6 polytropic C · 7 benchmarks + mixtures.
 *
 * Layout plan (Anek bl−0.78s..+0.31s), single centered column:
 *  title (script 24, red)  | T mid | x349..731 y40..76 (bl 64)
 *  b0 | hook (12,script)   | T mid | x540 y94
 *  b1 | line (13)          | T mid | x540 y122
 *  b2 | Mayer chip (h30)   | Chip  | x410..670 y142..172
 *  b3 | line (12)          | T mid | x540 y200
 *  b4 | note (11,script)   | T mid | x540 y225
 *  b5 | line (12)          | T mid | x540 y252
 *  b6 | line (11)          | T mid | x540 y280
 *  b7 | line (12)          | T mid | x540 y310
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, T, Chip, INK, MUTED, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch11Sec27({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={24} fill={RED} script>
          {t("the two capacities, and Mayer", "do capacities, aur Mayer")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={94} size={12} fill={MUTED} script>
          {t("the compact sheet: definitions, Mayer, equipartition, mixtures", "compact sheet: definitions, Mayer, equipartition, mixtures")}
        </T>
      </Fade>

      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={122} size={13} fill={INK} script={false}>
          Q = msΔT ({t("specific", "specific")}) {t("or", "ya")} nCΔT ({t("molar", "molar")})
        </T>
      </Fade>

      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <Chip x={410} y={142} w={260} h={30} fill={INK} textFill={CREAM} size={18} script={false}>
          Cp − Cv = R
        </Chip>
      </Fade>

      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={200} size={12} fill={INK} script={false}>
          Cv=f/2·R, Cp=(f/2+1)R, γ=1+2/f
        </T>
      </Fade>

      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={225} size={11} fill={MUTED} script>
          {t("standard values — keep these in reflex memory", "standard values — reflex mein yaad rakho")}
        </T>
      </Fade>

      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={252} size={12} fill={INK} script={false}>
          Cv=R/(γ−1), Cp=γR/(γ−1); ΔU=nCvΔT ({t("every process", "har process")})
        </T>
      </Fade>

      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={280} size={11} fill={INK} script={false}>
          {t("polytropic: C=Cv+R/(1−x) → Cp,∞,0,Cv at x=0,1,γ,∞", "polytropic: C=Cv+R/(1−x) → Cp,∞,0,Cv at x=0,1,γ,∞")}
        </T>
      </Fade>

      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={310} size={12} fill={INK} script={false}>
          {t("water: s≈4186 J/kg·K · mixture: mole-weight → Mayer → γ", "water: s≈4186 J/kg·K · mixture: mole-weight → Mayer → γ")}
        </T>
      </Fade>
    </Scene>
  );
}
