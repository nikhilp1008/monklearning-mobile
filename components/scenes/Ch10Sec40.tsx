/**
 * Ch10 · Section 40 — "Kirchhoff, the black body, and the thermos"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0,6.49,16.38,25.26,33.45,34.45,35.45] — beats 3-5 exactly
 * 1s apart, so those Fade delays stay ≤ ~0.3s):
 *  0 intro: a simple rule ties absorbing and emitting together
 *  1 setup: shiny can vs black can, both boiling water — black cools faster
 *  2 good absorbers = good emitters
 *  3 Kirchhoff's law: emissivity = absorptivity
 *  4 black body: absorbs ALL, reflects/transmits NONE, emits MAX
 *  5 a small hole in a cavity comes astonishingly close to ideal black
 *  6 a thermos defeats all 3 modes: silvered walls + vacuum gap
 *
 * Layout plan (strict non-overlapping y-bands):
 *  b0 | intro mid x540 bl85
 *  b1 | shiny can x300..360 y110..160 · black can x600..660 y110..160 ·
 *       labels bl180
 *  b2 | note mid x540 bl215
 *  b3 | box x420..660 y240..278 · law mid x540 bl265
 *  b4 | note mid x540 bl310
 *  b5 | note mid x540 bl340
 *  b6 | note mid x540 bl375
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

export default function Ch10Sec40({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true} delay={0.2}>
        <T x={540} y={58} size={22} fill={INK} script>
          {t("kirchhoff, the black body, and the thermos", "kirchhoff, black body, aur thermos")}
        </T>
      </Fade>

      {/* beat 0 — intro */}
      <Fade on={beat >= 0} delay={dl(0, 0.15)}>
        <T x={540} y={85} size={12} fill={INK} script anchor="middle">
          {t("a simple rule ties absorbing and emitting together", "ek simple rule absorb aur emit ko jodta hai")}
        </T>
      </Fade>

      {/* beat 1 — the two cans */}
      <Draw on={beat >= 1} delay={dl(1, 0.15)} d="M300 110 h60 v50 h-60 z M310 115 v40" stroke={INK_LIGHT} sw={1.8} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 0.5)} d="M600 110 h60 v50 h-60 z" stroke={INK} sw={5} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 0.85)}>
        <T x={330} y={180} size={11} fill={MUTED} anchor="middle">{t("shiny", "chamakdaar")}</T>
        <T x={630} y={180} size={11} fill={RED} anchor="middle">{t("black — cools faster!", "black — jaldi thanda!")}</T>
      </Fade>

      {/* beat 2 — the insight */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={540} y={215} size={13} fill={INK} script weight={700} anchor="middle">
          {t("good absorbers = good emitters", "achhe absorbers = achhe emitters")}
        </T>
      </Fade>

      {/* beat 3 — Kirchhoff's law */}
      <Draw on={beat >= 3} delay={dl(3, 0.1)} d="M420 240 h240 v38 h-240 z" stroke={AMBER_DARK} sw={2.2} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 0.35)}>
        <T x={540} y={264} size={15} fill={AMBER_DARK} weight={700} anchor="middle">
          e = α  ({t("Kirchhoff's law", "Kirchhoff's law")})
        </T>
      </Fade>

      {/* beat 4 — the black body */}
      <Fade on={beat >= 4} delay={dl(4, 0.15)}>
        <T x={540} y={310} size={12} fill={INK} script anchor="middle">
          {t("black body: absorbs ALL, reflects NONE, emits at the MAX rate", "black body: SAARA absorb karta, KUCHH reflect nahi, MAX rate se emit")}
        </T>
      </Fade>

      {/* beat 5 — the cavity approximation */}
      <Fade on={beat >= 5} delay={dl(5, 0.15)}>
        <T x={540} y={340} size={12} fill={MUTED} script anchor="middle">
          {t("a small hole in a cavity comes astonishingly close", "cavity mein chhota sa hole ideal ke bahut kareeb")}
        </T>
      </Fade>

      {/* beat 6 — the thermos */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={375} size={13} fill={GREEN} script weight={700} anchor="middle">
          {t(
            "a thermos defeats all 3 modes: silvered walls + a vacuum gap",
            "thermos teeno modes ko harata: silvered walls + vacuum gap"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
