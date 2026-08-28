/**
 * Ch11 · Section 19 — "Board derivation: work in an isothermal process"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * UNVERIFIED — audio for sec 19 not yet uploaded, verify-scene.mjs could
 * not be run. Re-run once audio lands.
 *
 * Beats (8): 0 hook · 1 setup (n mol, T const, Vi→Vf) · 2 target: W=∫PdV ·
 *  3 step1 P=nRT/V · 4 step2 W=∫(nRT/V)dV · 5 step3 W=nRT·ln(Vf/Vi) boxed ·
 *  6 step4 alt form W=nRT·ln(Pi/Pf) · 7 physical reading ΔU=0⇒Q=W.
 *
 * Layout plan (Anek bl−0.78s..+0.31s):
 *  title (script 24, red)  | T mid | x309..771 y40..76 (bl 64)
 *  b0 | hook (12,script)   | T mid | x540 y96
 *  b1 | setup (13)         | T mid | x540 y126
 *  b2 | target (16,w800)   | T mid | x540 y158
 *  b3 | step1 (14)         | T mid | x540 y195
 *  b4 | step2 (14)         | T mid | x540 y228
 *  b5 | step3 chip (h38)   | Chip  | x330..750 y248..286
 *  b6 | step4 (14)         | T mid | x540 y320
 *  b7 | reading chip (h34) | Chip  | x280..800 y355..389
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
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch11Sec19({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={24} fill={RED} script>
          {t("work done in an isothermal process", "isothermal process mein kitna work hota hai")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={96} size={12} fill={MUTED} script>
          {t("master the reasoning, not just the algebra", "reasoning master karo, sirf algebra nahi")}
        </T>
      </Fade>

      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={126} size={13} fill={INK} script={false}>
          {t("n mol, ideal gas, T constant, Vi → Vf (quasi-static)", "n mol, ideal gas, T constant, Vi → Vf (quasi-static)")}
        </T>
      </Fade>

      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={158} size={16} fill={INK} weight={800} script={false}>
          W = ∫P dV
        </T>
      </Fade>

      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={195} size={14} fill={INK} script={false}>
          {t("step 1: P = nRT/V", "step 1: P = nRT/V")}
        </T>
      </Fade>

      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={228} size={14} fill={INK} script={false}>
          {t("step 2: W = ∫(nRT/V) dV", "step 2: W = ∫(nRT/V) dV")}
        </T>
      </Fade>

      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Chip x={330} y={248} w={420} h={38} fill={INK} textFill={CREAM} size={17} script={false}>
          {t("step 3: W = nRT·ln(Vf/Vi)", "step 3: W = nRT·ln(Vf/Vi)")}
        </Chip>
      </Fade>

      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={320} size={14} fill={INK} script={false}>
          {t("step 4 (alt): W = nRT·ln(Pi/Pf)", "step 4 (alt): W = nRT·ln(Pi/Pf)")}
        </T>
      </Fade>

      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <Chip x={280} y={355} w={520} h={34} fill={CREAM} stroke={GREEN} textFill={GREEN} size={14} script={false}>
          {t("ΔU=0 ⇒ Q=W — every joule spent is supplied as heat", "ΔU=0 ⇒ Q=W — har joule heat se milta hai")}
        </Chip>
      </Fade>
    </Scene>
  );
}
