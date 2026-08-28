/**
 * Ch11 · Section 56 — "Key definitions and standard entropy changes"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * UNVERIFIED — audio for sec 56 not yet uploaded, verify-scene.mjs could
 * not be run. Dense formula-sheet section, text-forward like Sec4/11/18/27/35/48.
 * Re-run once audio lands.
 *
 * Beats (8): 0 hook · 1 dS=dQrev/T, state fn, units · 2 ΔS_universe≥0 ·
 *  3 Clausius inequality · 4 "standard results" transition · 5 4 standard
 *  cases · 6 general ideal-gas form · 7 irreversible recipe.
 *
 * Layout plan (Anek bl−0.78s..+0.31s), single centered column:
 *  title (script 22, red)  | T mid | x540 y64
 *  b0 | hook (11,script)   | T mid | x540 y92
 *  b1 | line (12)          | T mid | x540 y116
 *  b2 | line (12)          | T mid | x540 y140
 *  b3 | line (12)          | T mid | x540 y164
 *  b4 | note (11,script)   | T mid | x540 y188
 *  b5 | line1/2 (11)       | T mid | x540 y212/234
 *  b6 | line (12,w700)     | T mid | x540 y260
 *  b7 | line (11)          | T mid | x540 y290
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, T, INK, MUTED, RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch11Sec56({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("key definitions and standard entropy changes", "key definitions aur standard entropy changes")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={92} size={11} fill={MUTED} script>
          {t("the compact sheet: definition, second-law form, standard results", "compact sheet: definition, second-law form, standard results")}
        </T>
      </Fade>

      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={116} size={12} fill={INK} script={false}>
          {t("dS=dQ_rev/T; ∮dS=0 (state fn); unit = J/K", "dS=dQ_rev/T; ∮dS=0 (state fn); unit = J/K")}
        </T>
      </Fade>

      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={140} size={12} fill={INK} script={false}>
          {t("2nd law: ΔS_universe ≥ 0 (=0 only reversible)", "2nd law: ΔS_universe ≥ 0 (=0 sirf reversible)")}
        </T>
      </Fade>

      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={164} size={12} fill={INK} script={false}>
          {t("Clausius inequality: ∮dQ/T ≤ 0 (actual heat)", "Clausius inequality: ∮dQ/T ≤ 0 (actual heat)")}
        </T>
      </Fade>

      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={188} size={11} fill={MUTED} script>
          {t("standard results worth memorising:", "standard results, yaad rakhne wale:")}
        </T>
      </Fade>

      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={212} size={11} fill={INK} script={false}>
          {t("isothermal: nR·ln(Vf/Vi)   phase change: mL/T", "isothermal: nR·ln(Vf/Vi)   phase change: mL/T")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={540} y={234} size={11} fill={INK} script={false}>
          {t("const P: nCp·ln(Tf/Ti)   reversible adiabatic: 0", "const P: nCp·ln(Tf/Ti)   reversible adiabatic: 0")}
        </T>
      </Fade>

      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={260} size={12} fill={INK} weight={700} script={false}>
          {t("general: ΔS = nCv·ln(Tf/Ti) + nR·ln(Vf/Vi)", "general: ΔS = nCv·ln(Tf/Ti) + nR·ln(Vf/Vi)")}
        </T>
      </Fade>

      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={540} y={290} size={11} fill={INK} script={false}>
          {t("irreversible: ΔS_sys (reversible path) + ΔS_surr(−Q/T_surr)", "irreversible: ΔS_sys (reversible path) + ΔS_surr(−Q/T_surr)")}
        </T>
      </Fade>
    </Scene>
  );
}
