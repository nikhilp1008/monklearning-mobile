/**
 * Ch10 · Section 69 — "Worked example: the wire that passes through ice"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 * Note: hi beats 2-6 are exactly 1s apart, so those Fade/Draw delays
 * stay ≤ ~0.3s.
 *
 * Beats (en [0,3.93,19.29,27.14,40.96,55.3,60.67]):
 *  0 hook: a NEET favourite that punishes the obvious answer
 *  1 setup: wire + weights hung over ice — passes through, block stays solid
 *  2 the trap: not cut — the ice melted and refroze
 *  3 mechanism: P under wire lowers melting point → ice melts, sinks
 *  4 above wire: P released → refreezes → releases latent heat
 *  5 wire descends, ice re-fuses behind — block stays whole
 *  6 name: REGELATION — only because ice's MP falls with pressure
 *
 * Layout plan (strict non-overlapping y-bands):
 *  b0 | hook mid x540 bl85
 *  b1 | setup mid x540 bl113
 *  b2 | trap mid x540 bl143
 *  b3 | block x340..740 y168..248 · wire y208 x370..710 ·
 *       label mid x540 bl268
 *  b4 | label mid x540 bl292
 *  b5 | label mid x540 bl316
 *  b6 | badge mid x540 bl350 · closer mid x540 bl374
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
  INK_LIGHT,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch10Sec69({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true} delay={0.2}>
        <T x={540} y={58} size={17} fill={INK} script>
          {t("worked example — the wire that passes through ice", "worked example — wire jo baraf ke paar jaata")}
        </T>
      </Fade>

      {/* beat 0 — hook */}
      <Fade on={beat >= 0} delay={dl(0, 0.15)}>
        <T x={540} y={85} size={12} fill={INK} script anchor="middle">
          {t("a NEET favourite that punishes the obvious answer", "NEET ka pasandeeda jo obvious jawaab ko saza deta")}
        </T>
      </Fade>

      {/* beat 1 — setup */}
      <Fade on={beat >= 1} delay={dl(1, 0.15)}>
        <T x={540} y={113} size={12} fill={INK} script anchor="middle">
          {t(
            "wire + weights hung over ice — passes through, block stays solid",
            "wire + weights baraf par latke — paar jaata, block thos rehta"
          )}
        </T>
      </Fade>

      {/* beat 2 — the trap */}
      <Fade on={beat >= 2} delay={dl(2, 0.15)}>
        <T x={540} y={143} size={12} fill={RED} script weight={700} anchor="middle">
          {t("not cut — the ice melted and refroze", "kata nahi — baraf pighla aur wapas jama")}
        </T>
      </Fade>

      {/* beat 3 — the mechanism: melts under, sinks */}
      <Draw on={beat >= 3} delay={dl(3, 0.1)} d="M340 168 h400 v80 h-400 z" stroke={INK_LIGHT} sw={1.8} dur={0.5} />
      <Draw
        on={beat >= 3}
        delay={dl(3, 0.3)}
        d="M370 208 h340 M370 208 l-8 -10 M370 208 l8 -10 M710 208 l-8 -10 M710 208 l8 -10"
        stroke={INK}
        sw={2.5}
        dur={0.4}
      />
      <Fade on={beat >= 3} delay={dl(3, 0.55)}>
        <T x={540} y={268} size={12} fill={INK} script anchor="middle">
          {t("P under the wire lowers the melting point — ice melts, sinks", "wire ke neeche P melting point ghataata — baraf pighle, dhase")}
        </T>
      </Fade>

      {/* beat 4 — refreeze above */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={292} size={12} fill={GREEN} script anchor="middle">
          {t("above: P released → refreezes → releases latent heat", "upar: P release → wapas jamta → latent heat deta")}
        </T>
      </Fade>

      {/* beat 5 — the outcome */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={316} size={12} fill={MUTED} script anchor="middle">
          {t("wire descends, ice re-fuses behind — block stays whole", "wire dhasta, peeche baraf phir se judta — block poora")}
        </T>
      </Fade>

      {/* beat 6 — regelation */}
      <Fade on={beat >= 6} delay={dl(6, 0.1)}>
        <T x={540} y={350} size={15} fill={AMBER_DARK} weight={800} anchor="middle">
          {t("REGELATION", "REGELATION")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={374} size={12} fill={INK} script anchor="middle">
          {t(
            "works only because ice's melting point falls with pressure",
            "kaam karta sirf kyunki baraf ka MP pressure se ghatta"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
