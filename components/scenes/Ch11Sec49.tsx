/**
 * Ch11 · Section 49 — "Board derivation: the Carnot heat ratio"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * UNVERIFIED — audio for sec 49 not yet uploaded, verify-scene.mjs could
 * not be run. Re-run once audio lands.
 *
 * Beats (8): 0 hook · 1 label corners A,B,C,D · 2 Q1,Q2 on isotherms ·
 *  3 adiabatic relation · 4 volume identity VB/VA=VC/VD (boxed) ·
 *  5 Q2/Q1=T2/T1 (boxed) · 6 η=1−T2/T1 crown result (boxed) ·
 *  7 substance vanishes.
 *
 * Layout plan (Anek bl−0.78s..+0.31s), single centered column:
 *  title (script 24, red)  | T mid | x540 y64
 *  b0 | hook (11,script)   | T mid | x540 y94
 *  b1 | line (12)          | T mid | x540 y120
 *  b2 | Q1/Q2 (12)         | T mid | x540 y145/168
 *  b3 | line (11)          | T mid | x540 y195
 *  b4 | identity chip(h30) | Chip  | x400..680 y218..248
 *  b5 | ratio chip (h32)   | Chip  | x400..680 y262..294
 *  b6 | crown chip (h36)   | Chip  | x370..710 y320..356
 *  b7 | line (12,script)   | T mid | x540 y390
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, T, Chip, INK, MUTED, AMBER, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch11Sec49({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={24} fill={RED} script>
          {t("board derivation: the Carnot heat ratio", "board derivation: Carnot heat ratio")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={94} size={11} fill={MUTED} script>
          {t("work the four steps — watch the substance vanish", "chaar steps karo — substance gayab hote dekho")}
        </T>
      </Fade>

      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={120} size={12} fill={INK} script={false}>
          {t("label the corners A, B, C, D around the loop", "loop ke corners A, B, C, D label karo")}
        </T>
      </Fade>

      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={145} size={12} fill={INK} script={false}>
          {t("Q₁ = nRT₁ ln(VB/VA)  (hot isotherm)", "Q₁ = nRT₁ ln(VB/VA)  (hot isotherm)")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.7)}>
        <T x={540} y={168} size={12} fill={INK} script={false}>
          {t("Q₂ = nRT₂ ln(VC/VD)  (cold isotherm)", "Q₂ = nRT₂ ln(VC/VD)  (cold isotherm)")}
        </T>
      </Fade>

      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={195} size={11} fill={INK} script={false}>
          {t("adiabatic relation: TV^(γ−1) = constant (both insulated steps)", "adiabatic relation: TV^(γ−1) = constant (dono insulated steps)")}
        </T>
      </Fade>

      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <Chip x={400} y={218} w={280} h={30} fill={CREAM} stroke={AMBER} textFill={INK} size={14} script={false}>
          VB/VA = VC/VD
        </Chip>
      </Fade>

      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <Chip x={400} y={262} w={280} h={32} fill={CREAM} stroke={GREEN} textFill={GREEN} size={15} script={false}>
          Q₂/Q₁ = T₂/T₁
        </Chip>
      </Fade>

      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <Chip x={370} y={320} w={340} h={36} fill={INK} textFill={CREAM} size={18} script={false}>
          η_Carnot = 1 − T₂/T₁
        </Chip>
      </Fade>

      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={540} y={390} size={12} fill={GREEN} script>
          {t("the substance VANISHES — only T₁, T₂ survive", "substance VANISH ho jaata — sirf T₁, T₂ bachte")}
        </T>
      </Fade>
    </Scene>
  );
}
