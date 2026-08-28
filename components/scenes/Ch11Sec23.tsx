/**
 * Ch11 · Section 23 — "Isothermal versus adiabatic work"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * UNVERIFIED — audio for sec 23 not yet uploaded, verify-scene.mjs could
 * not be run. Re-run once audio lands.
 *
 * Beats (8): 0 hook · 1 setup (γ=5/3, P0V0→2V0, two routes) · 2 W_iso ·
 *  3 adiabatic final PV · 4 W_adia · 5 ratio ≈1.25 · 6 25% more, higher P
 *  throughout · 7 ranking verdict.
 *
 * Layout plan (Anek bl−0.78s..+0.31s), single centered column:
 *  title (script 26, red)  | T mid | x540 y64
 *  b0 | hook (13,script)   | T mid | x540 y98
 *  b1 | setup (13)         | T mid | x540 y126
 *  b2 | W_iso (14)         | T mid | x540 y160
 *  b3 | adiabatic PV (13)  | T mid | x540 y192
 *  b4 | W_adia (14)        | T mid | x540 y225
 *  b5 | ratio (14,w700)    | T mid | x540 y258
 *  b6 | note (13,script)   | T mid | x540 y295
 *  b7 | ranking chip (h34) | Chip  | x290..790 y330..364
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
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch11Sec23({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={26} fill={RED} script>
          {t("isothermal versus adiabatic work", "isothermal vs adiabatic work")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={98} size={13} fill={MUTED} script>
          {t("the geometric truth behind expansion-work ordering", "expansion-work order ka geometric truth")}
        </T>
      </Fade>

      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={126} size={13} fill={INK} script={false}>
          {t("monatomic, γ=5/3: P₀,V₀ → 2V₀ (two routes)", "monatomic, γ=5/3: P₀,V₀ → 2V₀ (do routes)")}
        </T>
      </Fade>

      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={160} size={14} fill={INK} script={false}>
          W_iso = P₀V₀ ln2 ≈ 0.693 P₀V₀
        </T>
      </Fade>

      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={192} size={13} fill={INK} script={false}>
          {t("adiabatic: PV_final = P₀V₀ × 2^(−2/3)", "adiabatic: PV_final = P₀V₀ × 2^(−2/3)")}
        </T>
      </Fade>

      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={225} size={14} fill={INK} script={false}>
          W_adia = (3/2)P₀V₀(1−2^(−2/3)) ≈ 0.555 P₀V₀
        </T>
      </Fade>

      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={258} size={14} fill={INK} weight={700} script={false}>
          {t("ratio = 0.693/0.555 ≈ 1.25", "ratio = 0.693/0.555 ≈ 1.25")}
        </T>
      </Fade>

      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={295} size={13} fill={MUTED} script>
          {t("isothermal does ~25% more work — higher P throughout", "isothermal ~25% zyada work karta — P hamesha zyada")}
        </T>
      </Fade>

      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <Chip x={290} y={330} w={500} h={34} fill={INK} textFill={CREAM} size={14} script={false}>
          {t("isobaric > isothermal > adiabatic (expansion work)", "isobaric > isothermal > adiabatic (expansion work)")}
        </Chip>
      </Fade>
    </Scene>
  );
}
