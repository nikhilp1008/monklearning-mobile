/**
 * Ch11 · Section 30 — "Constant volume versus constant pressure"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * UNVERIFIED — audio for sec 30 not yet uploaded, verify-scene.mjs could
 * not be run. Single-column pattern mirrors already-PASS Sec22. Re-run
 * once audio lands.
 *
 * Beats (8): 0 hook · 1 given (2mol monatomic, ΔT=60K) · 2 capacities ·
 *  3 Q_V≈1.50kJ · 4 Q_P≈2.49kJ · 5 "difference=work" transition ·
 *  6 difference≈998J≈1.0kJ · 7 verdict: exactly the R in Mayer.
 *
 * Layout plan (Anek bl−0.78s..+0.31s), single centered column:
 *  title (script 25, red)  | T mid | x258..822 y39..77 (bl 64)
 *  b0 | hook (12,script)   | T mid | x540 y96
 *  b1 | GIVEN chip (h26)   | Chip  | x430..650 y118..144
 *  b1 | given line (13)    | T mid | x540 y172
 *  b2 | capacities (12)    | T mid | x540 y200
 *  b3 | Q_V chip (h32)     | Chip  | x330..530 y222..254
 *  b4 | Q_P chip (h32)     | Chip  | x550..750 y222..254
 *  b5 | transition (12,scr)| T mid | x540 y288
 *  b6 | diff line (12)     | T mid | x540 y315
 *  b6 | diff chip (h30)    | Chip  | x430..650 y335..365
 *  b7 | verdict (13,w700)  | T mid | x540 y400
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, T, Chip, INK, MUTED, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch11Sec30({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={25} fill={RED} script>
          {t("constant volume versus constant pressure", "constant volume vs constant pressure")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={96} size={12} fill={MUTED} script>
          {t("a monatomic gas heated two ways — where the extra heat goes", "monatomic gas do tarah se heat — extra heat kahan jaati")}
        </T>
      </Fade>

      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <Chip x={430} y={118} w={220} h={26} fill={INK} textFill={CREAM} size={12} script={false}>
          GIVEN
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.7)}>
        <T x={540} y={172} size={13} fill={INK} script={false}>
          2.0 mol {t("monatomic", "monatomic")}, ΔT=60 K
        </T>
      </Fade>

      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={200} size={12} fill={INK} script={false}>
          Cv=3/2R≈12.47, Cp=5/2R≈20.79 J/mol·K
        </T>
      </Fade>

      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <Chip x={330} y={222} w={200} h={32} fill={AMBER_DARK} textFill={CREAM} size={15} script={false}>
          Q_V ≈ 1.50 kJ
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <Chip x={550} y={222} w={200} h={32} fill={AMBER_DARK} textFill={CREAM} size={15} script={false}>
          Q_P ≈ 2.49 kJ
        </Chip>
      </Fade>

      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={288} size={12} fill={MUTED} script>
          {t("the difference = expansion work", "difference = expansion work")}
        </T>
      </Fade>

      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={315} size={12} fill={INK} script={false}>
          nRΔT = 2×8.314×60 ≈ 998 J
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.9)}>
        <Chip x={430} y={335} w={220} h={30} fill={INK} textFill={CREAM} size={15} script={false}>
          {t("≈ 1.0 kJ = work", "≈ 1.0 kJ = work")}
        </Chip>
      </Fade>

      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={540} y={400} size={13} fill={GREEN} weight={700} script={false}>
          {t("exactly the R in Mayer's relation", "exactly wahi R jo Mayer's relation mein hai")}
        </T>
      </Fade>
    </Scene>
  );
}
