/**
 * Ch05 · Section 51 — "Elastic or inelastic: what happens to the energy"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 14.4, 23.1, 48.0, 72.8, 97.6, 118.4, 119.4] · dur 130.2 —
 *        b6 lasts ~1s in en → en-tiny delays;
 *        hi [0, 13.6, 20.3, 45.1, 69.9, 94.7, 113.0, 137.8] · dur 148.6):
 *  0 title + subtitle
 *  1 steel vs dough drawing
 *  2 ELASTIC card lines
 *  3 INELASTIC card lines
 *  4 PERFECTLY INELASTIC card lines
 *  5 two anchor chips
 *  6 strategic equation-count lines (en tiny)
 *  7 note band
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52 · subtitle cx540 bl80 · b1 amber cx540 bl112
 *  b1 | ball (170,170) r14 + arcs · wall x330 y140..210 + splat blob
 *     | lbls cx180 / cx300 bl235
 *  b2 | lbl st x420 bl150 · lines st x430 bl176 / bl202
 *  b3 | lbl bl242 · bl268 / bl294 · b4 | lbl bl334 · bl360 / bl386
 *  b5 | chips x80..300 y300..336 · x80..380 y356..392
 *  b6 | cx540 bl440 / bl466
 *  b7 | bar x66 y490..555 · lines st x84 bl510 / bl536
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  Chip,
  T,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch05Sec51({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={22} fill={INK} script>
          {t("Elastic or Inelastic: Where the Energy Goes", "Elastic ya Inelastic: Energy Kahan Jaati Hai")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 5)}>
        <T x={540} y={80} size={13} fill={MUTED} script>
          {t(
            "momentum always survives — the KE's fate classifies the collision",
            "momentum hamesha bachta hai — KE ka anjaam collision ko classify karta hai"
          )}
        </T>
      </Fade>

      {/* beat 1 — steel vs dough */}
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <T x={540} y={112} size={13} fill={AMBER_DARK} script>
          {t(
            "a steel ball ⟷ a lump of dough — that contrast is the whole idea",
            "steel ball ⟷ dough ka tukda — wahi farq poora idea hai"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 3)} d="M 156 170 a 14 14 0 1 0 28 0 a 14 14 0 1 0 -28 0" stroke={INK} sw={2.4} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 4)} d="M 120 214 Q 148 186 176 214 M 176 214 Q 197 194 218 214" stroke={MUTED} sw={1.6} dur={0.7} />
      <Draw on={beat >= 1} delay={dl(1, 5.5)} d="M 330 140 V 210" stroke={INK} sw={2.4} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 6.3)} d="M 330 158 q -30 -8 -32 17 q -2 22 32 14" stroke={INK} sw={2.2} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 7.2)}>
        <T x={170} y={245} size={12} fill={MUTED} script>
          {t("steel — bounces", "steel — uchhalta hai")}
        </T>
        <T x={310} y={245} size={12} fill={MUTED} script>
          {t("dough — splats", "dough — chipak jaata hai")}
        </T>
      </Fade>

      {/* beat 2 — elastic */}
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={420} y={150} size={13.5} fill={GREEN} script anchor="start">
          {t("ELASTIC — no KE lost at all", "ELASTIC — KE bilkul nahi khoti")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 5)}>
        <T x={430} y={176} size={12.5} fill={INK} script anchor="start">
          {t(
            "K_f = K_i exactly · the steel ball rebounds crisply",
            "K_f = K_i bilkul · steel ball kurkura wapas uchhalta hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 15)}>
        <T x={430} y={202} size={12.5} fill={MUTED} script anchor="start">
          {t(
            "atoms & particles: genuinely, perfectly elastic",
            "atoms aur particles: sachmuch, perfectly elastic"
          )}
        </T>
      </Fade>

      {/* beat 3 — inelastic */}
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={420} y={242} size={13.5} fill={AMBER_DARK} script anchor="start">
          {t("INELASTIC — some KE lost", "INELASTIC — kuchh KE khoti hai")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 5)}>
        <T x={430} y={268} size={12.5} fill={INK} script anchor="start">
          {t(
            "→ heat, sound, permanent crumple — p still survives",
            "→ heat, sound, hamesha ka crumple — p phir bhi bachta hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 15)}>
        <T x={430} y={294} size={12.5} fill={MUTED} script anchor="start">
          {t(
            "the normal case — footballs, cars, everything real",
            "aam case — footballs, cars, har asli cheez"
          )}
        </T>
      </Fade>

      {/* beat 4 — perfectly inelastic */}
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={420} y={334} size={13.5} fill={RED} script anchor="start">
          {t("PERFECTLY INELASTIC — they STICK", "PERFECTLY INELASTIC — chipak jaate hain")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 5)}>
        <T x={430} y={360} size={12.5} fill={INK} script anchor="start">
          {t(
            "move as ONE lump after impact — the dough's splat",
            "takkar ke baad EK tukde ki tarah — dough ka splat"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 14)}>
        <T x={430} y={386} size={12.5} fill={RED} script anchor="start">
          {t(
            "loses the MAXIMUM that momentum allows — not all of it",
            "utni KE khota hai jitni momentum ijazat de — saari nahi"
          )}
        </T>
      </Fade>

      {/* beat 5 — anchor chips */}
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <Chip x={80} y={300} w={220} h={36} fill={CREAM} stroke={GREEN} textFill={INK} size={13.5} script={false}>
          elastic: K_f = K_i
        </Chip>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 9)}>
        <Chip x={80} y={356} w={300} h={36} fill={CREAM} stroke={RED} textFill={INK} size={13.5} script={false}>
          {t("stick: v₁ = v₂ = V", "chipke: v₁ = v₂ = V")}
        </Chip>
      </Fade>

      {/* beat 6 — the strategic count (en: ~1s beat) */}
      <Fade on={beat >= 6} delay={dl(6, en ? 0.2 : 3)}>
        <T x={540} y={440} size={13} fill={GREEN} script>
          {t(
            "momentum in ALL of them · energy ONLY when elastic",
            "momentum in SAB mein · energy SIRF elastic mein"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, en ? 0.5 : 12)}>
        <T x={540} y={466} size={13} fill={AMBER_DARK} script>
          {t(
            "elastic → 2 equations · inelastic → 1 + the given condition",
            "elastic → 2 equations · inelastic → 1 + di hui condition"
          )}
        </T>
      </Fade>

      {/* beat 7 — the note */}
      <Draw on={beat >= 7} delay={dl(7, 0.5)} d="M 66 490 v 62" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 2)}>
        <T x={84} y={510} size={13} fill={GREEN} script anchor="start">
          {t(
            "pin it: p is conserved in all of them",
            "taank lo: p in sab mein conserve hota hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 6)}>
        <T x={84} y={536} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "energy conservation is the elastic-only bonus equation",
            "energy conservation sirf elastic waala bonus equation hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
