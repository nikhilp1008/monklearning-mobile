/**
 * Ch11 · Section 22 — "An isobaric diatomic gas, first law verified"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * UNVERIFIED — audio for sec 22 not yet uploaded, verify-scene.mjs could
 * not be run. Re-run once audio lands.
 *
 * Beats (8): 0 hook · 1 given (3mol, γ=7/5, ΔT=100K) · 2 W≈2.49kJ ·
 *  3 ΔU≈6.24kJ · 4 Q≈8.73kJ · 5 "watch how it divides" · 6 verify
 *  ΔU+W=Q · 7 ratio verdict Cp:Cv=7:5.
 *
 * Layout plan (Anek bl−0.78s..+0.31s):
 *  title (script 26, red)  | T mid | x211..869 y38..77 (bl 64)
 *  b0 | hook (13,script)   | T mid | x540 y98
 *  b1 | GIVEN chip (h26)   | Chip  | x430..650 y120..146
 *  b1 | given lines (13)   | T mid | x540 y175/198
 *  b2 | W chip (h34)       | Chip  | x150..370 y225..259
 *  b3 | ΔU chip (h34)      | Chip  | x430..650 y225..259
 *  b4 | Q chip (h34)       | Chip  | x710..930 y225..259
 *  b5 | transition (13,scr)| T mid | x540 y285
 *  b6 | verify chip (h34)  | Chip  | x340..740 y320..354
 *  b7 | ratio chip (h32)   | Chip  | x330..750 y375..407
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  T,
  Chip,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch11Sec22({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={26} fill={RED} script>
          {t("an isobaric diatomic gas, first law verified", "isobaric diatomic gas, first law verify")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={98} size={13} fill={MUTED} script>
          {t("all three energies split in a fixed ratio", "teeno energies ek fixed ratio mein baatti hain")}
        </T>
      </Fade>

      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <Chip x={430} y={120} w={220} h={26} fill={INK} textFill={CREAM} size={12} script={false}>
          GIVEN
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.7)}>
        <T x={540} y={175} size={13} fill={INK} script={false}>
          n=3.0 mol, diatomic, γ=7/5
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.1)}>
        <T x={540} y={198} size={13} fill={INK} script={false}>
          Cv=5/2 R, Cp=7/2 R, ΔT=100 K
        </T>
      </Fade>

      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <Chip x={150} y={225} w={220} h={34} fill={AMBER_DARK} textFill={CREAM} size={15} script={false}>
          W ≈ 2.49 kJ
        </Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <Chip x={430} y={225} w={220} h={34} fill={AMBER_DARK} textFill={CREAM} size={15} script={false}>
          ΔU ≈ 6.24 kJ
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <Chip x={710} y={225} w={220} h={34} fill={AMBER_DARK} textFill={CREAM} size={15} script={false}>
          Q ≈ 8.73 kJ
        </Chip>
      </Fade>

      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={285} size={13} fill={MUTED} script>
          {t("watch how the heat divides", "dekho heat kaise baatti hai")}
        </T>
      </Fade>

      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <Chip x={340} y={320} w={400} h={34} fill={CREAM} stroke={GREEN} textFill={GREEN} size={14} script={false}>
          ΔU+W = 6.24+2.49 = 8.73 = Q ✓
        </Chip>
      </Fade>

      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <Chip x={330} y={375} w={420} h={32} fill={INK} textFill={CREAM} size={14} script={false}>
          {t("heat splits Cp:Cv = 7:5 — quick check", "heat Cp:Cv = 7:5 mein baatta — quick check")}
        </Chip>
      </Fade>
    </Scene>
  );
}
