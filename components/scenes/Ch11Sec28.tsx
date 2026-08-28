/**
 * Ch11 · Section 28 — "Deriving Mayer's relation: Cp − Cv = R"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * UNVERIFIED — audio for sec 28 not yet uploaded, verify-scene.mjs could
 * not be run. Re-run once audio lands.
 *
 * Beats (8): 0 hook · 1 setup (1 mol, const V vs const P) · 2 const V:
 *  Q=ΔU=Cv dT · 3 const P: Q=Cv dT+PdV=Cp dT · 4 "needs an extra piece" ·
 *  5 PV=RT ⇒ P dV=R dT · 6 result Cp−Cv=R (boxed) · 7 verdict: extra R
 *  is the work.
 *
 * Layout plan (Anek bl−0.78s..+0.31s), single centered column:
 *  title (script 25, red)  | T mid | x272..808 y39..77 (bl 64)
 *  b0 | hook (12,script)   | T mid | x540 y96
 *  b1 | setup (12)         | T mid | x540 y120
 *  b2 | step1 (13)         | T mid | x540 y150
 *  b3 | step2 (13)         | T mid | x540 y180
 *  b4 | step3 (12,script)  | T mid | x540 y208
 *  b5 | step4 (13)         | T mid | x540 y235
 *  b6 | result chip (h36)  | Chip  | x360..720 y255..291
 *  b7 | verdict chip (h34) | Chip  | x260..820 y320..354
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, T, Chip, INK, MUTED, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch11Sec28({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={25} fill={RED} script>
          {t("deriving Mayer's relation: Cp − Cv = R", "Mayer's relation derive karna: Cp − Cv = R")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={96} size={12} fill={MUTED} script>
          {t("heat 1 mole the same tiny ΔT, twice, and compare", "1 mole ko chota sa ΔT, do baar heat karo, compare karo")}
        </T>
      </Fade>

      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={120} size={12} fill={INK} script={false}>
          {t("1 mole ideal gas: once at const V, once at const P", "1 mole ideal gas: ek baar const V, ek baar const P")}
        </T>
      </Fade>

      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={150} size={13} fill={INK} script={false}>
          {t("const V: Q=ΔU=Cv dT (holds for EVERY process)", "const V: Q=ΔU=Cv dT (HAR process mein)")}
        </T>
      </Fade>

      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={180} size={13} fill={INK} script={false}>
          const P: Q=ΔU+W=Cv dT+P dV = Cp dT
        </T>
      </Fade>

      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={208} size={12} fill={MUTED} script>
          {t("same ΔT — but const-P needs an EXTRA piece", "same ΔT — par const-P ko EXTRA piece chahiye")}
        </T>
      </Fade>

      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={235} size={13} fill={INK} script={false}>
          {t("PV=RT (1 mol) ⇒ differentiate ⇒ P dV = R dT", "PV=RT (1 mol) ⇒ differentiate ⇒ P dV = R dT")}
        </T>
      </Fade>

      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <Chip x={360} y={255} w={360} h={36} fill={INK} textFill={CREAM} size={16} script={false}>
          Cp dT = Cv dT + R dT ⇒ Cp−Cv=R
        </Chip>
      </Fade>

      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <Chip x={260} y={320} w={560} h={34} fill={CREAM} stroke={GREEN} textFill={GREEN} size={13} script={false}>
          {t("extra R = work P dV — Cp exceeds Cv by exactly R", "extra R = work P dV — Cp, Cv se poore R zyada")}
        </Chip>
      </Fade>
    </Scene>
  );
}
