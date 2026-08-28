/**
 * Ch10 · Section 62 — "Three states, three transitions"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 * Opens Subtopic 6 (Change of State: Phase Transitions, Triple Point and
 * Phase Diagrams).
 *
 * Beats (en [0,1,2,3,4,10.83,18.76] — beats 0-4 exactly 1s apart, so
 * those Fade delays stay ≤ ~0.3s):
 *  0 hook: now a separate, heavily tested story — when/why states change
 *  1 three nodes: solid, liquid, gas
 *  2 solid↔liquid: melting and freezing
 *  3 liquid↔gas: vaporization and condensation
 *  4 solid↔gas directly: sublimation — dry ice, camphor, naphthalene
 *  5 each transition happens at a fixed T for a given P
 *  6 latent heat flows every time — the same Q = mL you know
 *
 * Layout plan (strict non-overlapping y-bands):
 *  b0 | hook mid x540 bl90
 *  b1 | gas c(540,130)r18 · solid x260..320 y280..320 ·
 *       liquid x760..820 y280..320 · labels bl165/340/340
 *  b2 | line (320,300)-(760,300) · label mid x540 bl290
 *  b3 | line (780,280)-(555,148) · label st x700 bl210
 *  b4 | line (300,280)-(525,148) · label end x380 bl210
 *  b5 | note mid x540 bl380
 *  b6 | note1 mid x540 bl410 · note2 mid x540 bl440
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
  Scene,
} from '@/components/scenes/kit';

export default function Ch10Sec62({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true} delay={0.2}>
        <T x={540} y={58} size={22} fill={INK} script>
          {t("three states, three transitions", "teen states, teen transitions")}
        </T>
      </Fade>

      {/* beat 0 — hook */}
      <Fade on={beat >= 0} delay={dl(0, 0.15)}>
        <T x={540} y={90} size={12} fill={INK} script anchor="middle">
          {t(
            "a separate, heavily tested story — when and why states change",
            "ek alag, khoob poocha jaane wala sawaal — states kab aur kyun badalte"
          )}
        </T>
      </Fade>

      {/* beat 1 — the three states */}
      <Draw on={beat >= 1} delay={dl(1, 0.1)} d="M522 112 a18 18 0 1 0 36 0 a18 18 0 1 0 -36 0" stroke={INK_LIGHT} sw={1.8} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 0.3)} d="M260 280 h60 v40 h-60 z" stroke={INK_LIGHT} sw={1.8} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 0.5)} d="M760 320 q0 -25 15 -40 q15 15 15 40 q0 15 -15 15 q-15 0 -15 -15" stroke={INK_LIGHT} sw={1.8} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 0.75)}>
        <T x={540} y={165} size={12} fill={INK} anchor="middle">{t("gas", "gas")}</T>
        <T x={290} y={340} size={12} fill={INK} anchor="middle">{t("solid", "solid")}</T>
        <T x={790} y={340} size={12} fill={INK} anchor="middle">{t("liquid", "liquid")}</T>
      </Fade>

      {/* beat 2 — melting and freezing */}
      <Draw on={beat >= 2} delay={dl(2, 0.15)} d="M320 300 h440" stroke={AMBER_DARK} sw={2} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 0.5)}>
        <T x={540} y={290} size={12} fill={AMBER_DARK} script anchor="middle">{t("melting / freezing", "melting / freezing")}</T>
      </Fade>

      {/* beat 3 — vaporization and condensation */}
      <Draw on={beat >= 3} delay={dl(3, 0.15)} d="M780 280 L555 148" stroke={AMBER_DARK} sw={2} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <T x={700} y={210} size={11} fill={AMBER_DARK} script anchor="start">{t("vaporization / condensation", "vaporization / condensation")}</T>
      </Fade>

      {/* beat 4 — sublimation */}
      <Draw on={beat >= 4} delay={dl(4, 0.15)} d="M300 280 L525 148" stroke={GREEN} sw={2} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <T x={380} y={210} size={11} fill={GREEN} script anchor="end">
          {t("sublimation — dry ice, camphor, naphthalene", "sublimation — dry ice, camphor, naphthalene")}
        </T>
      </Fade>

      {/* beat 5 — fixed T for a given P */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={380} size={13} fill={INK} script weight={700} anchor="middle">
          {t("each transition happens at a fixed T for a given P", "har transition ek fixed T par hota, given P ke liye")}
        </T>
      </Fade>

      {/* beat 6 — latent heat, new question */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={410} size={12} fill={MUTED} script anchor="middle">
          {t("latent heat flows every time — the same Q = mL", "har baar latent heat behta — wahi Q = mL")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <T x={540} y={440} size={13} fill={INK} script weight={700} anchor="middle">
          {t("the new question: when, and why?", "naya sawaal: kab, aur kyun?")}
        </T>
      </Fade>
    </Scene>
  );
}
