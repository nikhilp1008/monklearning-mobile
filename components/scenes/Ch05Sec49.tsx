/**
 * Ch05 · Section 49 — "Pitfalls, and the power reflexes" (tips)
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 10.6, 35.4, 57.5, 80.8, 104.4, 125.2, 150.0, 163.2] · dur 188.0 —
 *        b3 lasts ~1s in hi → hi-tiny delays;
 *        hi [0, 12.1, 36.2, 58.7, 59.7, 81.5, 102.0, 126.8, 139.3] · dur 164.2):
 *  0 title · 1 P1 power ≠ work · 2 P2 unit conversions · 3 P3 const F ≠ const P (hi tiny)
 *  4 three-reflex panel · 5 P4 dropped cos θ · 6 P5 avg vs inst
 *  7 trick flag line · 8 pump/hose/gun pro-tip band
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52 · subtitle cx540 bl80
 *  P1: lbl st x80 bl112 · lines st x90 bl140/166
 *  P2: lbl bl206 · bl234/260 · P3: lbl bl300 · bl328/354
 *  b4 | box x560..1040 y104..214 · lines st x580 bl132/160/188
 *  b5 | lbl st x560 bl250 · bl278/304 · b6 | lbl bl344 · bl372/398
 *  b7 | amber st x84 bl445
 *  b8 | bar x66 y465..585 · lines st x84 bl485/511/537
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

export default function Ch05Sec49({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={22} fill={INK} script>
          {t("Pitfalls & the Power Reflexes", "Pitfalls & the Power Reflexes")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 4)}>
        <T x={540} y={80} size={13} fill={MUTED} script>
          {t(
            "five vanished marks — then the trick for the scariest problems",
            "paanch gaye marks — phir sabse daraavne sawaalon ki trick"
          )}
        </T>
      </Fade>

      {/* beat 1 — P1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={80} y={112} size={13} fill={RED} script anchor="start">
          {t("pitfall 1 — power vs work", "pitfall 1 — power vs work")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 4)}>
        <T x={90} y={140} size={12.5} fill={INK} script anchor="start">
          {t(
            "same job, faster ≠ more total work — rate vs amount",
            "wahi kaam, tez ≠ zyada kul work — rate vs matra"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 14)}>
        <T x={90} y={166} size={12.5} fill={MUTED} script anchor="start">
          {t(
            "dimensions: power = energy × T⁻¹ — the 'per second'",
            "dimensions: power = energy × T⁻¹ — wahi 'har second'"
          )}
        </T>
      </Fade>

      {/* beat 2 — P2 */}
      <Fade on={beat >= 2} delay={dl(2, 0.5)}>
        <T x={80} y={206} size={13} fill={RED} script anchor="start">
          {t("pitfall 2 — unit conversions", "pitfall 2 — unit conversions")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 4)}>
        <T x={90} y={234} size={12.5} fill={INK} script anchor="start">
          km/h ÷ 3.6 → m/s · hp × 746 → W
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 13)}>
        <T x={90} y={260} size={12.5} fill={RED} script anchor="start">
          {t(
            "kWh is ENERGY — never inside P = F v",
            "kWh ENERGY hai — P = F v ke andar kabhi nahi"
          )}
        </T>
      </Fade>

      {/* beat 3 — P3 (hi: ~1s beat) */}
      <Fade on={beat >= 3} delay={dl(3, en ? 0.5 : 0.2)}>
        <T x={80} y={300} size={13} fill={RED} script anchor="start">
          {t("pitfall 3 — const F ≠ const P", "pitfall 3 — const F ≠ const P")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, en ? 4 : 0.4)}>
        <T x={90} y={328} size={12.5} fill={INK} script anchor="start">
          {t(
            "P = F v — F stays, v climbs, the product climbs",
            "P = F v — F wahi, v chadhta, product bhi chadhta"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, en ? 13 : 0.7)}>
        <T x={90} y={354} size={12.5} fill={MUTED} script anchor="start">
          {t(
            "this one misconception drives several MCQ traps",
            "yahi ek galatfehmi kai MCQ traps chalati hai"
          )}
        </T>
      </Fade>

      {/* beat 4 — the reflex panel */}
      <Draw on={beat >= 4} delay={dl(4, 1)} d="M 560 104 H 1040 V 214 H 560 Z" stroke={AMBER_DARK} sw={1.8} dur={0.7} />
      <Fade on={beat >= 4} delay={dl(4, 2.5)}>
        <T x={580} y={132} size={13} fill={INK} script anchor="start">
          {t("1 · km/h → ÷ 3.6 first", "1 · km/h → pehle ÷ 3.6")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 8)}>
        <T x={580} y={160} size={13} fill={INK} script anchor="start">
          {t("2 · constant force ≠ constant power", "2 · constant force ≠ constant power")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 14)}>
        <T x={580} y={188} size={13} fill={INK} script anchor="start">
          {t(
            "3 · constant v → F_drive = F_oppose → P = F v",
            "3 · constant v → F_drive = F_oppose → P = F v"
          )}
        </T>
      </Fade>

      {/* beat 5 — P4 */}
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={560} y={250} size={13} fill={RED} script anchor="start">
          {t("pitfall 4 — the dropped cos θ", "pitfall 4 — giraya hua cos θ")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 4)}>
        <T x={570} y={278} size={12.5} fill={INK} script anchor="start">
          {t(
            "only the along-v component delivers power",
            "sirf v ke along waala component power deta hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 12)}>
        <T x={570} y={304} size={12.5} fill={GREEN} script anchor="start">
          {t(
            "⊥ forces (normal, centripetal) → exactly ZERO power",
            "⊥ forces (normal, centripetal) → bilkul ZERO power"
          )}
        </T>
      </Fade>

      {/* beat 6 — P5 */}
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <T x={560} y={344} size={13} fill={RED} script anchor="start">
          {t("pitfall 5 — average vs instantaneous", "pitfall 5 — average vs instantaneous")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 4)}>
        <T x={570} y={372} size={12.5} fill={INK} script anchor="start">
          {t(
            "F v at an instant = instantaneous · W⁄t = average",
            "kisi instant par F v = instantaneous · W⁄t = average"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 12)}>
        <T x={570} y={398} size={12.5} fill={AMBER_DARK} script anchor="start">
          {t(
            "'at this instant' vs 'whole trip' · from rest: P_final = 2 P_avg",
            "'is pal' vs 'poora safar' · aaram se: P_final = 2 P_avg"
          )}
        </T>
      </Fade>

      {/* beat 7 — the trick flag */}
      <Fade on={beat >= 7} delay={dl(7, 2)}>
        <T x={84} y={445} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "highest-value trick: energy per kg × kg per second",
            "sabse keemti trick: har kg ki energy × har second ke kg"
          )}
        </T>
      </Fade>

      {/* beat 8 — the pump/hose/gun pro-tip */}
      <Draw on={beat >= 8} delay={dl(8, 0.5)} d="M 66 465 v 88" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 8} delay={dl(8, 2)}>
        <T x={84} y={485} size={13} fill={GREEN} script anchor="start">
          {t(
            "pump · hose · machine-gun: don't track individual forces",
            "pump · hose · machine-gun: alag-alag forces track mat karo"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 10)}>
        <T x={84} y={511} size={13} fill={GREEN} script anchor="start">
          {t(
            "P = (energy given to each kg) × (kg leaving per second) — one clean line",
            "P = (har kg ko di energy) × (har second nikle kg) — ek saaf line"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 18)}>
        <T x={84} y={537} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "aids: power = how fast · const F ≠ const P · km/h ÷ 3.6 first",
            "aids: power = kitni tez · const F ≠ const P · km/h pehle ÷ 3.6"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
