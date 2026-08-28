/**
 * Ch10 · Section 71 — "Worked example: the melting-point shift of ice"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 * Note: en beats 3-6 are exactly 1s apart, so all Fade/Draw delays in
 * this file stay ≤ ~0.3s.
 *
 * Beats (en [0,5.63,14.34,32,33,34,35]):
 *  0 hook: puts a number on water's most famous anomaly
 *  1 setup: estimate ice's melting-point shift when P rises by 1 atm
 *  2 ΔV/kg = 1/ρw − 1/ρice = −9.05×10⁻⁵ m³/kg (water denser)
 *  3 invert C-C: dT/dP = TΔV/L ≈ −7.35×10⁻⁸ K/Pa
 *  4 multiply by 1 atm = 1.013×10⁵ Pa
 *  5 ΔT ≈ −7.4×10⁻³ K (~ −0.0074°C per atm) — tiny but real
 *  6 negative sign ← ΔV<0, ice less dense; normal substance: MP rises
 *
 * Layout plan (strict non-overlapping y-bands):
 *  b0 | hook mid x540 bl85
 *  b1 | setup mid x540 bl113
 *  b2 | step1 mid x540 bl145
 *  b3 | step2 mid x540 bl172
 *  b4 | step3 mid x540 bl199
 *  b5 | box x310..770 y225..267 · answer mid x540 y251
 *  b6 | note mid x540 bl300
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
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch10Sec71({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true} delay={0.2}>
        <T x={540} y={58} size={17} fill={INK} script>
          {t("worked example — the melting-point shift of ice", "worked example — baraf ke melting point ka shift")}
        </T>
      </Fade>

      {/* beat 0 — hook */}
      <Fade on={beat >= 0} delay={dl(0, 0.15)}>
        <T x={540} y={85} size={12} fill={INK} script anchor="middle">
          {t("puts a number on water's most famous anomaly", "paani ki sabse mashhoor anomaly par ek number")}
        </T>
      </Fade>

      {/* beat 1 — setup */}
      <Fade on={beat >= 1} delay={dl(1, 0.15)}>
        <T x={540} y={113} size={12} fill={INK} script anchor="middle">
          {t("estimate ice's melting-point shift when P rises by 1 atm", "1 atm P badhne par baraf ka melting-point shift nikaalo")}
        </T>
      </Fade>

      {/* beat 2 — the volume change */}
      <Fade on={beat >= 2} delay={dl(2, 0.15)}>
        <T x={540} y={145} size={12} fill={INK} anchor="middle">
          ΔV/kg = 1/ρw − 1/ρice = −9.05×10⁻⁵ m³/kg
        </T>
      </Fade>

      {/* beat 3 — invert Clausius-Clapeyron */}
      <Fade on={beat >= 3} delay={dl(3, 0.15)}>
        <T x={540} y={172} size={12} fill={INK} anchor="middle">
          dT/dP = TΔV/L ≈ −7.35×10⁻⁸ K/Pa
        </T>
      </Fade>

      {/* beat 4 — multiply by 1 atm */}
      <Fade on={beat >= 4} delay={dl(4, 0.15)}>
        <T x={540} y={199} size={12} fill={MUTED} anchor="middle">
          {t("multiply by 1 atm = 1.013×10⁵ Pa", "1 atm = 1.013×10⁵ Pa se multiply karo")}
        </T>
      </Fade>

      {/* beat 5 — the answer */}
      <Draw on={beat >= 5} delay={dl(5, 0.1)} d="M310 225 h460 v42 h-460 z" stroke={GREEN} sw={2.4} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={251} size={15} fill={GREEN} weight={800} anchor="middle">
          ΔT ≈ −7.4×10⁻³ K (~ −0.0074°C/atm)
        </T>
      </Fade>

      {/* beat 6 — the insight: the sign is the point */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={300} size={12} fill={RED} script weight={700} anchor="middle">
          {t(
            "negative sign ← ΔV<0, ice less dense than water",
            "negative sign ← ΔV<0, baraf paani se kam dense"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
