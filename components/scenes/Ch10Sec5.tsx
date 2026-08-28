/**
 * Ch10 · Section 5 — "Temperature scales: one conversion identity"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 1, 2, 3, 4, 5, 15.24] — beats 0-4 only 1s apart, so every
 * Fade delay in those beats stays ≤ ~0.2s):
 *  0 the toolkit: card outline for the master identity
 *  1 the master identity: C/100 = (F−32)/180 = (K−273.15)/100 = Ré/80
 *  2 derived: F = 9/5 C + 32
 *  3 derived: K = C + 273.15
 *  4 Kelvin = SI unit, 1/273.16 of water's triple point
 *  5 fixed points line up: ice 0/32/273.15, steam 100/212/373.15
 *  6 exam secret: the offset dies for a change — ΔC=ΔK, ΔF=9/5 ΔC
 *
 * Layout plan (strict non-overlapping y-bands, sans bl−0.78s..+0.31s):
 *  b0/1 | card x110..970 y100..155 · identity mid x540 bl131
 *  b2   | chip st x300 bl190
 *  b3   | chip st x600 bl190
 *  b4   | note mid x540 bl225
 *  b5   | table header bl260 · divider y268 · ice bl300 · steam bl332 ·
 *       |   cols x300(°C)/480(°F)/650(K) · row labels st x220
 *  b6   | box x250..830 y365..420 · text mid x540 bl395
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
  AMBER,
  AMBER_DARK,
  GREEN,
  Scene,
} from '@/components/scenes/kit';

export default function Ch10Sec5({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true} delay={0.2}>
        <T x={540} y={58} size={25} fill={INK} script>
          {t("temperature scales — one conversion identity", "temperature scales — ek conversion identity")}
        </T>
      </Fade>

      {/* beat 0 — the toolkit: card outline */}
      <Draw on={beat >= 0} delay={dl(0, 0.15)} d="M110 100 h860 v55 h-860 z" stroke={AMBER} sw={2} dur={0.5} />

      {/* beat 1 — the master identity */}
      <Fade on={beat >= 1} delay={dl(1, 0.15)}>
        <T x={540} y={132} size={14} fill={INK} anchor="middle">
          C⁄100 = (F−32)⁄180 = (K−273.15)⁄100 = Ré⁄80
        </T>
      </Fade>

      {/* beat 2 — derived: Fahrenheit */}
      <Fade on={beat >= 2} delay={dl(2, 0.15)}>
        <T x={300} y={190} size={16} fill={GREEN} anchor="start">
          ⇒ F = 9⁄5 C + 32
        </T>
      </Fade>

      {/* beat 3 — derived: Kelvin */}
      <Fade on={beat >= 3} delay={dl(3, 0.15)}>
        <T x={600} y={190} size={16} fill={GREEN} anchor="start">
          ⇒ K = C + 273.15
        </T>
      </Fade>

      {/* beat 4 — Kelvin is the SI unit */}
      <Fade on={beat >= 4} delay={dl(4, 0.15)}>
        <T x={540} y={225} size={13} fill={INK} script anchor="middle">
          {t(
            "Kelvin = SI unit, 1⁄273.16 of water's triple point",
            "Kelvin = SI unit, paani ke triple point ka 1⁄273.16"
          )}
        </T>
      </Fade>

      {/* beat 5 — fixed points line up across scales */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={300} y={260} size={13} fill={MUTED} weight={700}>°C</T>
        <T x={480} y={260} size={13} fill={MUTED} weight={700}>°F</T>
        <T x={650} y={260} size={13} fill={MUTED} weight={700}>K</T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 0.5)} d="M260 268 h440" stroke={MUTED} sw={1} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={220} y={300} size={12} fill={MUTED} script anchor="start">{t("ice", "baraf")}</T>
        <T x={300} y={300} size={13} fill={INK}>0</T>
        <T x={480} y={300} size={13} fill={INK}>32</T>
        <T x={650} y={300} size={13} fill={INK}>273.15</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.1)}>
        <T x={220} y={332} size={12} fill={MUTED} script anchor="start">{t("steam", "bhaap")}</T>
        <T x={300} y={332} size={13} fill={INK}>100</T>
        <T x={480} y={332} size={13} fill={INK}>212</T>
        <T x={650} y={332} size={13} fill={INK}>373.15</T>
      </Fade>

      {/* beat 6 — the exam secret: offset dies for a change */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M250 365 h580 v55 h-580 z" stroke={AMBER} sw={2.4} dur={0.6} />
      <Fade on={beat >= 6} delay={dl(6, 0.9)}>
        <T x={540} y={395} size={15} fill={AMBER_DARK} script weight={700} anchor="middle">
          {t(
            "exam secret: ΔC = ΔK, and ΔF = 9⁄5 ΔC (offset dies)",
            "exam secret: ΔC = ΔK, aur ΔF = 9⁄5 ΔC (offset khatam)"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
