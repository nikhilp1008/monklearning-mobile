/**
 * Ch10 · Section 29 — "Convection, and when the conduction law holds"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0,1,2,3,4,5,17.03] — beats 0-4 exactly 1s apart, so those
 * Fade delays stay ≤ ~0.3s):
 *  0 hook: conduction fails in water heated from below — how?
 *  1 heated water expands, less dense, rises; cooler water sinks
 *  2 fluid carries heat with it — bulk transport = convection
 *  3 examples: sea breeze, room heater — floor air rises & circulates
 *  4 needs a fluid free to flow — not in a solid, not in a vacuum
 *  5 natural (buoyancy) vs forced (fan/pump) — blood is forced convection
 *  6 caution: conduction law needs steady state, no leaks, uniform A & K
 *
 * Layout plan (strict non-overlapping y-bands):
 *  b0 | hook mid x540 bl90
 *  b1 | pot x350..570 y150..220 · flame x440..460 y225..245 ·
 *       up-arrow x390 y215..160
 *  b2 | down-arrow x510 y160..215 · "warm rises" end x300 bl185 ·
 *       "cool sinks" st x620 bl185 · convection mid x460 bl260
 *  b3 | examples mid x540 bl295
 *  b4 | needs-fluid mid x540 bl325
 *  b5 | natural-forced mid x540 bl360
 *  b6 | box x280..800 y385..425 · caution mid x540 bl410
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  arrowD,
  INK,
  INK_LIGHT,
  AMBER_DARK,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch10Sec29({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true} delay={0.2}>
        <T x={540} y={58} size={22} fill={INK} script>
          {t("convection, and when the conduction law holds", "convection, aur conduction law kab chalta hai")}
        </T>
      </Fade>

      {/* beat 0 — hook */}
      <Fade on={beat >= 0} delay={dl(0, 0.15)}>
        <T x={540} y={90} size={12} fill={INK} script anchor="middle">
          {t(
            "conduction fails in water heated from below — how does the pot get hot?",
            "neeche se garam paani mein conduction fail — pot poora garam kaise?"
          )}
        </T>
      </Fade>

      {/* beat 1 — the pot: rising warm water */}
      <Draw on={beat >= 1} delay={dl(1, 0.15)} d="M350 150 v50 q0 20 20 20 h160 q20 0 20 -20 v-50" stroke={INK_LIGHT} sw={1.8} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 0.5)} d="M440 225 q5 -10 0 -20 M450 225 q5 -10 0 -20 M460 225 q5 -10 0 -20" stroke={AMBER_DARK} sw={1.8} dur={0.3} />
      <Draw on={beat >= 1} delay={dl(1, 0.75)} d={arrowD(390, 210, 390, 165)} stroke={RED} sw={2} dur={0.4} />

      {/* beat 2 — sinking cool water, convection named */}
      <Draw on={beat >= 2} delay={dl(2, 0.15)} d={arrowD(510, 165, 510, 210)} stroke={INK_LIGHT} sw={2} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 0.5)}>
        <T x={300} y={185} size={11} fill={RED} anchor="end">{t("warm rises", "garam upar")}</T>
        <T x={620} y={185} size={11} fill={INK_LIGHT} anchor="start">{t("cool sinks", "thanda neeche")}</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.85)}>
        <T x={460} y={260} size={13} fill={INK} script weight={700} anchor="middle">
          {t("this is convection — the fluid carries its own heat", "yehi convection hai — fluid apni heat khud le jaata")}
        </T>
      </Fade>

      {/* beat 3 — everyday examples */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={300} size={12} fill={INK} script anchor="middle">
          {t(
            "sea breeze · room heater — floor air rises and circulates",
            "sea breeze · room heater — floor ki hawa upar uthke circulate hoti"
          )}
        </T>
      </Fade>

      {/* beat 4 — needs a fluid */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={330} size={13} fill={AMBER_DARK} script weight={700} anchor="middle">
          {t("needs a FLUID free to flow — not in a solid, not in a vacuum", "FLUID chahiye jo behe sake — solid ya vacuum mein nahi")}
        </T>
      </Fade>

      {/* beat 5 — natural vs forced */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={360} size={12} fill={INK} script anchor="middle">
          {t(
            "natural (buoyancy) vs forced (fan/pump) — your blood is forced convection",
            "natural (buoyancy) vs forced (fan/pump) — tumhara khoon forced convection hai"
          )}
        </T>
      </Fade>

      {/* beat 6 — the caution */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M280 385 h520 v40 h-520 z" stroke={AMBER_DARK} sw={2} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 0.55)}>
        <T x={540} y={410} size={12} fill={AMBER_DARK} script anchor="middle">
          {t(
            "conduction law: steady state only, no side leaks, uniform A and K",
            "conduction law: sirf steady state, koi side leak nahi, A aur K uniform"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
