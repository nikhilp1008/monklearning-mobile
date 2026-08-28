/**
 * Ch11 · Section 48 — "Key formulas and Carnot's theorem"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * UNVERIFIED — audio for sec 48 not yet uploaded, verify-scene.mjs could
 * not be run. Dense formula-sheet section, text-forward like Sec4/11/18/27/35.
 * Re-run once audio lands.
 *
 * Beats (8): 0 hook · 1 Q1,Q2 on the isotherms · 2 key ratio Q2/Q1=T2/T1
 *  · 3 η formula (boxed) · 4 "reversed" transition · 5 COP formulas ·
 *  6 Carnot's theorem (2 parts) · 7 consequence: absolute temp scale.
 *
 * Layout plan (Anek bl−0.78s..+0.31s), single centered column:
 *  title (script 23, red)  | T mid | x325..755 y41..76 (bl 64)
 *  b0 | hook (11,script)   | T mid | x540 y92
 *  b1 | line1/2 (12)       | T mid | x540 y118/142
 *  b2 | line (13,w700)     | T mid | x540 y168
 *  b3 | eta chip (h34)     | Chip  | x400..680 y188..222
 *  b4 | note (11,script)   | T mid | x540 y250
 *  b5 | COP1/2 (12)        | T mid | x540 y275/298
 *  b6 | theorem1/2 (11)    | T mid | x540 y325/345
 *  b7 | consequence chip   | Chip  | x260..820 y375..407
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, T, Chip, INK, MUTED, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch11Sec48({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={23} fill={RED} script>
          {t("key formulas and Carnot's theorem", "key formulas aur Carnot's theorem")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={92} size={11} fill={MUTED} script>
          {t("efficiency becomes a property of temperature alone", "efficiency sirf temperature ki property ban jaati")}
        </T>
      </Fade>

      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={118} size={12} fill={INK} script={false}>
          {t("Q₁ = nRT₁ ln(VB/VA)  (absorbed)", "Q₁ = nRT₁ ln(VB/VA)  (absorbed)")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.7)}>
        <T x={540} y={142} size={12} fill={INK} script={false}>
          {t("Q₂ = nRT₂ ln(VC/VD)  (rejected)", "Q₂ = nRT₂ ln(VC/VD)  (rejected)")}
        </T>
      </Fade>

      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={168} size={13} fill={INK} weight={700} script={false}>
          {t("key ratio: Q₂/Q₁ = T₂/T₁", "key ratio: Q₂/Q₁ = T₂/T₁")}
        </T>
      </Fade>

      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <Chip x={400} y={188} w={280} h={34} fill={INK} textFill={CREAM} size={15} script={false}>
          η = 1−T₂/T₁ = (T₁−T₂)/T₁
        </Chip>
      </Fade>

      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={250} size={11} fill={MUTED} script>
          {t("same cycle, reversed ⇒ Carnot fridge/pump", "same cycle, reverse ⇒ Carnot fridge/pump")}
        </T>
      </Fade>

      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={275} size={12} fill={INK} script={false}>
          COP_fridge = T₂/(T₁−T₂)
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.7)}>
        <T x={540} y={298} size={12} fill={INK} script={false}>
          COP_pump = T₁/(T₁−T₂)
        </T>
      </Fade>

      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={325} size={11} fill={INK} script={false}>
          {t("theorem: (1) no engine beats a reversible one", "theorem: (1) koi engine reversible se aage nahi")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.7)}>
        <T x={540} y={345} size={11} fill={INK} script={false}>
          {t("(2) all reversible engines TIE — any substance", "(2) sab reversible engines TIE karte — koi bhi substance")}
        </T>
      </Fade>

      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <Chip x={260} y={375} w={560} h={32} fill={CREAM} stroke={GREEN} textFill={GREEN} size={12} script={false}>
          {t("η depends ONLY on T₁,T₂ ⇒ absolute temperature scale", "η sirf T₁,T₂ par ⇒ absolute temperature scale")}
        </Chip>
      </Fade>
    </Scene>
  );
}
