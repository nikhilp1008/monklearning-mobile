/**
 * Ch10 · Section 39 — "The fierce T-to-the-fourth law and Wien's colour of glow"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0,1,2,11.73,22.82,33.4,41.85] — beats 0-1 exactly 1s apart,
 * so those Fade delays stay ≤ ~0.3s):
 *  0 intro: how fast it radiates, and what colour — both from T
 *  1 double T ⇒ power leaps ×16
 *  2 why 16? P ∝ T⁴ (Stefan-Boltzmann), 2⁴=16
 *  3 a slightly hotter star outshines a cooler one dramatically
 *  4 iron rod heats: dull red → orange → yellow → white
 *  5 hotter ⇒ wavelength shifts shorter, bluer
 *  6 Wien's law: hotter means bluer — blue-white star far hotter than red
 *
 * Layout plan (strict non-overlapping y-bands):
 *  b0 | intro mid x540 bl85
 *  b1 | rule mid x540 bl118
 *  b2 | why mid x540 bl150
 *  b3 | note mid x540 bl180
 *  b4 | c1(300,220)r20 · c2(460,220)r20 · c3(620,220)r20 · c4(780,220)r20 ·
 *       labels bl255
 *  b5 | note mid x540 bl285
 *  b6 | note mid x540 bl318
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

export default function Ch10Sec39({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true} delay={0.2}>
        <T x={540} y={58} size={18} fill={INK} script>
          {t("the fierce T⁴ law and wien's colour of glow", "shaktishaali T⁴ law aur wien ka glow rang")}
        </T>
      </Fade>

      {/* beat 0 — intro */}
      <Fade on={beat >= 0} delay={dl(0, 0.15)}>
        <T x={540} y={85} size={12} fill={INK} script anchor="middle">
          {t("how fast it radiates, and what colour it glows — both from T", "kitni tez radiate, aur kaunsa rang glow — dono T se")}
        </T>
      </Fade>

      {/* beat 1 — the fierce sensitivity */}
      <Fade on={beat >= 1} delay={dl(1, 0.15)}>
        <T x={540} y={118} size={15} fill={AMBER_DARK} weight={700} anchor="middle">
          {t("double T ⇒ power leaps ×16", "double T ⇒ power 16x leap karta")}
        </T>
      </Fade>

      {/* beat 2 — why 16 */}
      <Fade on={beat >= 2} delay={dl(2, 0.15)}>
        <T x={540} y={150} size={13} fill={INK} anchor="middle">
          {t("why 16? P ∝ T⁴ (Stefan-Boltzmann), 2⁴=16", "16 kyun? P ∝ T⁴ (Stefan-Boltzmann), 2⁴=16")}
        </T>
      </Fade>

      {/* beat 3 — the consequence */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={180} size={12} fill={MUTED} script anchor="middle">
          {t("a slightly hotter star outshines a cooler one dramatically", "thoda garam taara ek thande ko bahut zyada matmaata hai")}
        </T>
      </Fade>

      {/* beat 4 — the iron rod colour progression */}
      <Draw on={beat >= 4} delay={dl(4, 0.1)} d="M280 220 A20 20 0 1 1 320 220 A20 20 0 1 1 280 220" stroke={RED} sw={2} dur={0.35} />
      <Draw on={beat >= 4} delay={dl(4, 0.3)} d="M440 220 A20 20 0 1 1 480 220 A20 20 0 1 1 440 220" stroke={AMBER_DARK} sw={2} dur={0.35} />
      <Draw on={beat >= 4} delay={dl(4, 0.5)} d="M600 220 A20 20 0 1 1 640 220 A20 20 0 1 1 600 220" stroke={AMBER_DARK} sw={2} dur={0.35} />
      <Draw on={beat >= 4} delay={dl(4, 0.7)} d="M760 220 A20 20 0 1 1 800 220 A20 20 0 1 1 760 220" stroke={MUTED} sw={2} dur={0.35} />
      <Fade on={beat >= 4} delay={dl(4, 0.95)}>
        <T x={300} y={255} size={11} fill={RED} anchor="middle">{t("dull red", "dull red")}</T>
        <T x={460} y={255} size={11} fill={AMBER_DARK} anchor="middle">{t("orange", "orange")}</T>
        <T x={620} y={255} size={11} fill={AMBER_DARK} anchor="middle">{t("yellow", "yellow")}</T>
        <T x={780} y={255} size={11} fill={MUTED} anchor="middle">{t("white", "white")}</T>
      </Fade>

      {/* beat 5 — wavelength shifts */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={285} size={13} fill={INK} script anchor="middle">
          {t("hotter ⇒ wavelength shifts shorter, bluer", "garam ⇒ wavelength chhoti, bluer taraf shift")}
        </T>
      </Fade>

      {/* beat 6 — Wien's law */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={318} size={13} fill={GREEN} script weight={700} anchor="middle">
          {t("Wien's law: hotter means bluer — a blue-white star is far hotter", "Wien's law: garam matlab bluer — blue-white star bahut garam")}
        </T>
      </Fade>
    </Scene>
  );
}
