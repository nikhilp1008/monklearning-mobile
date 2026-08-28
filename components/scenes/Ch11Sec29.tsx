/**
 * Ch11 · Section 29 — "Identify the gas, and the work-fraction trap"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * UNVERIFIED — audio for sec 29 not yet uploaded, verify-scene.mjs could
 * not be run. Two-column pattern mirrors already-PASS Sec5/12/21. Re-run
 * once audio lands.
 *
 * Beats (7): 0 hook · 1 LEFT given (Cv=20.8) · 2-3 LEFT compute+verdict ·
 *  4 RIGHT setup (work-fraction question) · 5 RIGHT formula · 6 RIGHT
 *  verdict: monoatomic wins, 40%.
 *
 * Layout plan — LEFT col center 285, RIGHT col center 795:
 *  b1 | header chip(h26)   | Chip  | x70..290 / x600..830 y148..174
 *  b1 | given (14/13)      | T st  | x90/620 y196
 *  b2 | compute1 (12)      | T mid | x285/795 y228
 *  b3 | compute2 (12/11)   | T mid | x285/795 y250
 *  b3 | stamp chip (h32)   | Chip  | x145..425 / x655..935 y272..304
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, MUTED, GREEN, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch11Sec29({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={25} fill={GREEN} script>
          {t("identify the gas, and the work-fraction trap", "gas pehchano, aur work-fraction ka trap")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={100} size={13} fill={MUTED} script>
          {t("one identification, one NEET-style trap", "ek identification, ek NEET-style trap")}
        </T>
      </Fade>

      <Draw on={beat >= 0} delay={dl(0, 0.6)} d="M 540 138 L 540 330" stroke={MUTED} sw={1.4} dur={0.5} />

      {/* ===== LEFT — identify the gas ===== */}
      <Fade on={beat >= 1} delay={dl(1, 0.1)}>
        <Chip x={70} y={148} w={220} h={26} fill={INK} textFill={CREAM} size={12} script={false}>
          {t("IDENTIFY THE GAS", "IDENTIFY THE GAS")}
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <T x={90} y={196} size={14} fill={INK} anchor="start" script={false}>
          Cv = 20.8 J/mol·K
        </T>
      </Fade>

      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={285} y={228} size={12} fill={INK} script={false}>
          Cv=5/2R ⇒ f=5 ⇒ {t("diatomic", "diatomic")}
        </T>
      </Fade>

      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={285} y={250} size={12} fill={INK} script={false}>
          Cp=Cv+R≈29.1, γ=1.40
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.9)}>
        <Chip x={145} y={272} w={280} h={32} fill={INK} textFill={CREAM} size={14} script={false}>
          {t("diatomic gas, γ = 1.40", "diatomic gas, γ = 1.40")}
        </Chip>
      </Fade>

      {/* ===== RIGHT — the work-fraction trap ===== */}
      <Fade on={beat >= 4} delay={dl(4, 0.1)}>
        <Chip x={600} y={148} w={230} h={26} fill={INK} textFill={CREAM} size={12} script={false}>
          {t("WORK-FRACTION TRAP", "WORK-FRACTION TRAP")}
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={620} y={196} size={13} fill={INK} anchor="start" script={false}>
          {t("which gas wastes LEAST heat internally?", "kaunsa gas KAM heat andar rakhta hai?")}
        </T>
      </Fade>

      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={795} y={228} size={12} fill={INK} script={false}>
          {t("fraction = W/Q = R/Cp = 2/(f+2)", "fraction = W/Q = R/Cp = 2/(f+2)")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={795} y={250} size={11} fill={MUTED} script>
          {t("decreases as f grows", "f badhne par ghatta hai")}
        </T>
      </Fade>

      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <Chip x={655} y={272} w={280} h={32} fill={GREEN} textFill={CREAM} size={14} script={false}>
          {t("monoatomic wins: 40%", "monoatomic jeeta: 40%")}
        </Chip>
      </Fade>
    </Scene>
  );
}
