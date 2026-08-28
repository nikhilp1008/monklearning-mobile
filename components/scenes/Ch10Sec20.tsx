/**
 * Ch10 · Section 20 — "Latent heat, water equivalent, and the key numbers"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0,1,2,3,4,5,18.23] — beats 0-4 exactly 1s apart, so those
 * Fade delays stay ≤ ~0.3s):
 *  0 intro: phase-change formulas + numbers worth memorising
 *  1 water equivalent: w = mc
 *  2 = heat capacity numerically — swap calorimeter for equivalent water
 *  3 latent heat: Q = mL; L_f fusion, L_v vaporization
 *  4 master balance: Σ heat lost = Σ heat gained (insulated)
 *  5 memorize (cal units): c_water=1, c_ice=0.5, L_fusion=80, L_vap=540
 *  6 SI units: L_f=3.36×10⁵ J/kg, L_v=2.26×10⁶ J/kg, 1cal=4.186J
 *
 * Layout plan (strict non-overlapping y-bands):
 *  b0 | intro mid x540 bl90
 *  b1 | formula mid x540 bl125
 *  b2 | note mid x540 bl155
 *  b3 | line1 mid x540 bl190 · line2 mid x540 bl218
 *  b4 | balance mid x540 bl250
 *  b5 | header mid x540 bl280 · values mid x540 bl310
 *  b6 | box x250..830 y335..395 · line1 mid x540 bl360 · line2 mid x540 bl385
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  INK,
  AMBER,
  AMBER_DARK,
  GREEN,
  Scene,
} from '@/components/scenes/kit';

export default function Ch10Sec20({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true} delay={0.2}>
        <T x={540} y={58} size={21} fill={INK} script>
          {t("latent heat, water equivalent, and the key numbers", "latent heat, water equivalent, aur key numbers")}
        </T>
      </Fade>

      {/* beat 0 — intro */}
      <Fade on={beat >= 0} delay={dl(0, 0.15)}>
        <T x={540} y={90} size={12} fill={INK} script anchor="middle">
          {t("the phase-change formulas — and numbers worth memorising", "phase-change formulas — aur yaad rakhne waale numbers")}
        </T>
      </Fade>

      {/* beat 1 — water equivalent */}
      <Fade on={beat >= 1} delay={dl(1, 0.15)}>
        <T x={540} y={125} size={16} fill={INK} weight={700} anchor="middle">
          w = m c
        </T>
      </Fade>

      {/* beat 2 — the swap */}
      <Fade on={beat >= 2} delay={dl(2, 0.15)}>
        <T x={540} y={155} size={12} fill={INK} script anchor="middle">
          {t(
            "= heat capacity numerically — swap the calorimeter for equivalent water",
            "= heat capacity ke barabar — calorimeter ko equivalent water se badlo"
          )}
        </T>
      </Fade>

      {/* beat 3 — latent heat */}
      <Fade on={beat >= 3} delay={dl(3, 0.15)}>
        <T x={540} y={190} size={14} fill={INK} anchor="middle">
          Q = m L, {t("at constant temperature", "constant temperature par")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={218} size={12} fill={INK} script anchor="middle">
          {t(
            "L_f = fusion (solid→liquid), L_v = vaporization (liquid→gas)",
            "L_f = fusion (solid→liquid), L_v = vaporization (liquid→gas)"
          )}
        </T>
      </Fade>

      {/* beat 4 — master balance */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={250} size={13} fill={AMBER_DARK} script weight={700} anchor="middle">
          {t(
            "master balance: Σ heat lost = Σ heat gained (insulated system)",
            "master balance: Σ heat lost = Σ heat gained (insulated system)"
          )}
        </T>
      </Fade>

      {/* beat 5 — memorize table */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={280} size={13} fill={INK} script weight={700} anchor="middle">
          {t("memorize (calorie units):", "yaad rakho (calorie units mein):")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={540} y={310} size={13} fill={GREEN} anchor="middle">
          c_water=1   c_ice=0.5   L_fusion=80   L_vap=540 cal/g
        </T>
      </Fade>

      {/* beat 6 — SI units */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M250 335 h580 v60 h-580 z" stroke={AMBER} sw={2.2} dur={0.6} />
      <Fade on={beat >= 6} delay={dl(6, 0.55)}>
        <T x={540} y={360} size={13} fill={AMBER_DARK} anchor="middle">
          L_f = 3.36×10⁵ J/kg,  L_v = 2.26×10⁶ J/kg
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.85)}>
        <T x={540} y={385} size={13} fill={AMBER_DARK} anchor="middle">
          1 cal = 4.186 J
        </T>
      </Fade>
    </Scene>
  );
}
