/**
 * Ch10 · Section 23 — "Worked example: a lead pellet just begins to melt"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0,1,2,3,4,5,21.3] — beats 0-4 exactly 1s apart, so those
 * Fade delays stay ≤ ~0.3s):
 *  0 hook: chains three ideas — kinetic energy, warming, latent heat
 *  1 setup: lead pellet hits wall, half KE→heat, find min v to just melt
 *  2 "just begins to melt" = reach melting point + complete fusion (2 legs)
 *  3 per unit mass: cΔT + L_f, ΔT = 27°C→327°C = 300K rise
 *  4 substitute: 128×300 + 25000 = 63400 J/kg
 *  5 answer: ¼v² = 63400 ⇒ v ≈ 503.6 m/s
 *  6 takeaway: mass cancels — forgetting L_f gives a wrongly low speed
 *
 * Layout plan (strict non-overlapping y-bands):
 *  b0 | hook mid x540 bl90
 *  b1 | setup mid x540 bl120
 *  b2 | note mid x540 bl155
 *  b3 | formula mid x540 bl190
 *  b4 | substitution mid x540 bl225
 *  b5 | box x350..730 y255..300 · answer mid x540 bl282
 *  b6 | takeaway mid x540 bl330
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
  AMBER_DARK,
  GREEN,
  Scene,
} from '@/components/scenes/kit';

export default function Ch10Sec23({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true} delay={0.2}>
        <T x={540} y={58} size={20} fill={INK} script>
          {t("worked example — a lead pellet just begins to melt", "worked example — lead pellet abhi pighalna shuru karta hai")}
        </T>
      </Fade>

      {/* beat 0 — hook */}
      <Fade on={beat >= 0} delay={dl(0, 0.15)}>
        <T x={540} y={90} size={12} fill={INK} script anchor="middle">
          {t("chains three ideas — kinetic energy, warming, latent heat", "teen ideas jode — kinetic energy, warming, latent heat")}
        </T>
      </Fade>

      {/* beat 1 — setup */}
      <Fade on={beat >= 1} delay={dl(1, 0.15)}>
        <T x={540} y={120} size={12} fill={INK} script anchor="middle">
          {t(
            "pellet hits a wall, stops — half its KE becomes heat — min speed to just melt?",
            "pellet deewaar se takraata — aadha KE heat banta — melt ke liye min speed?"
          )}
        </T>
      </Fade>

      {/* beat 2 — what "just begins to melt" means */}
      <Fade on={beat >= 2} delay={dl(2, 0.15)}>
        <T x={540} y={155} size={12} fill={INK} script anchor="middle">
          {t(
            "\"just begins to melt\" = reach the melting point + complete the fusion",
            "\"abhi pighalna shuru\" = melting point tak pahunchna + fusion poora"
          )}
        </T>
      </Fade>

      {/* beat 3 — the formula */}
      <Fade on={beat >= 3} delay={dl(3, 0.15)}>
        <T x={540} y={190} size={14} fill={INK} anchor="middle">
          {t("per kg: c ΔT + L_f, ΔT = 27°C→327°C = 300 K", "per kg: c ΔT + L_f, ΔT = 27°C→327°C = 300 K")}
        </T>
      </Fade>

      {/* beat 4 — substitute */}
      <Fade on={beat >= 4} delay={dl(4, 0.15)}>
        <T x={540} y={225} size={14} fill={INK} script anchor="middle">
          = 128×300 + 25000 = 63400 J/kg
        </T>
      </Fade>

      {/* beat 5 — the answer */}
      <Draw on={beat >= 5} delay={dl(5, 0.15)} d="M350 255 h380 v45 h-380 z" stroke={GREEN} sw={2.4} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={540} y={283} size={15} fill={GREEN} weight={800} anchor="middle">
          ¼v² = 63400 ⇒ v ≈ 503.6 m/s
        </T>
      </Fade>

      {/* beat 6 — takeaway */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={330} size={13} fill={AMBER_DARK} script anchor="middle">
          {t(
            "mass cancels — forgetting L_f gives a wrongly low speed",
            "mass cancel ho jaata — L_f bhoolne se speed galat kam aati"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
