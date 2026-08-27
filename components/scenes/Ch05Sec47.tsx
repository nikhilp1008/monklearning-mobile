/**
 * Ch05 · Section 47 — "A crane, and the km/h speed trap" (worked examples)
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 11.3, 25.3, 50.1, 73.0, 97.5, 112.6, 137.5] · dur 162.3 —
 *        hi b3 and b4 last ~1s each → hi-tiny delays;
 *        hi [0, 9.7, 21.2, 46.0, 47.0, 48.0, 64.4, 89.2] · dur 114.0):
 *  0 title + subtitle
 *  1 Ex1 setup chip
 *  2 three clean steps → 1 kW
 *  3 hp sanity check (hi tiny)
 *  4 Ex2 setup chip (hi tiny)
 *  5 the 57.6 kW planted trap
 *  6 convert → 16 kW chip
 *  7 ÷3.6 reflex band
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52 · subtitle cx540 bl80
 *  Ex1: lbl st x80 bl114 · chip x80..500 y124..160 · steps st x90 bl205/235 · green bl265
 *   b3 cx290 bl310 · muted bl336
 *  Ex2: lbl st x550 bl114 · chip x550..1035 y124..160 · b5 red st x560 bl205 · muted bl231
 *   b6 st x560 bl271 / bl299 · chip x560..900 y320..358
 *  b7 | bar x66 y430..540 · lines st x84 bl450 / bl476 / bl502
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

export default function Ch05Sec47({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={22} fill={INK} script>
          {t("A Crane & the km/h Speed Trap", "Crane & km/h Waala Speed Trap")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 4)}>
        <T x={540} y={80} size={13} fill={MUTED} script>
          {t(
            "a clean three-step board answer — then a planted wrong option",
            "teen-step ka saaf board jawab — phir ek rakha hua galat option"
          )}
        </T>
      </Fade>

      {/* beat 1 — Ex1 setup */}
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={80} y={114} size={13} fill={AMBER_DARK} script anchor="start">
          {t("Ex 1 — the crane", "Ex 1 — crane")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <Chip x={80} y={124} w={420} h={36} fill={CREAM} stroke={INK} textFill={INK} size={12.5} script={false}>
          {t(
            "200 kg → 15 m in 30 s (steady) · P_avg ? · g = 10",
            "200 kg → 15 m, 30 s mein (steady) · P_avg ? · g = 10"
          )}
        </Chip>
      </Fade>

      {/* beat 2 — three steps */}
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <T x={90} y={205} size={14} fill={INK} anchor="start" weight={700}>
          1 · W = mgh = 200·10·15 = 30 000 J
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 9)}>
        <T x={90} y={235} size={14} fill={INK} anchor="start" weight={700}>
          2 · P = W⁄t = 30 000 ÷ 30 = 1000 W
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 16)}>
        <T x={90} y={265} size={13} fill={GREEN} script anchor="start">
          {t(
            "3 · state it: 1 kW of mechanical power",
            "3 · saaf likho: 1 kW mechanical power"
          )}
        </T>
      </Fade>

      {/* beat 3 — the hp sanity check (hi: ~1s beat) */}
      <Fade on={beat >= 3} delay={dl(3, en ? 2 : 0.2)}>
        <T x={290} y={310} size={12.5} fill={AMBER_DARK} script>
          {t(
            "cross-check: 1000⁄746 ≈ 1.34 hp — a workshop motor ✓",
            "cross-check: 1000⁄746 ≈ 1.34 hp — workshop motor ✓"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, en ? 10 : 0.5)}>
        <T x={290} y={336} size={12.5} fill={MUTED} script>
          {t(
            "the sanity check catches gross errors",
            "sanity check ghor galtiyan pakadta hai"
          )}
        </T>
      </Fade>

      {/* beat 4 — Ex2 setup (hi: ~1s beat) */}
      <Fade on={beat >= 4} delay={dl(4, en ? 0.5 : 0.2)}>
        <T x={550} y={114} size={13} fill={RED} script anchor="start">
          {t("Ex 2 — NEET: the planted answer", "Ex 2 — NEET: rakha hua jawab")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, en ? 2 : 0.5)}>
        <Chip x={550} y={124} w={485} h={36} fill={CREAM} stroke={INK} textFill={INK} size={12} script={false}>
          {t(
            "72 km/h constant · resistance 800 N · P ? (57.6 kW … 16 kW)",
            "72 km/h constant · resistance 800 N · P ? (57.6 kW … 16 kW)"
          )}
        </Chip>
      </Fade>

      {/* beat 5 — the trap */}
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <T x={560} y={205} size={13} fill={RED} script anchor="start">
          {t(
            "800 × 72 = 57.6 kW — right there in the options, WRONG ✗",
            "800 × 72 = 57.6 kW — wahin options mein, GALAT ✗"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 9)}>
        <T x={560} y={231} size={12.5} fill={MUTED} script anchor="start">
          {t("72 is km/h — the formula needs m/s", "72 km/h mein hai — formula ko m/s chahiye")}
        </T>
      </Fade>

      {/* beat 6 — convert and solve */}
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={560} y={271} size={14} fill={INK} anchor="start" weight={700}>
          72 ÷ 3.6 = 20 m/s
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 9)}>
        <T x={560} y={299} size={14} fill={INK} anchor="start" weight={700}>
          {t("constant v → engine force = 800 N", "constant v → engine force = 800 N")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 15)}>
        <Chip x={560} y={320} w={340} h={38} fill={CREAM} stroke={GREEN} textFill={INK} size={14.5} script={false}>
          P = 800 × 20 = 16 kW
        </Chip>
      </Fade>

      {/* beat 7 — the reflex */}
      <Draw on={beat >= 7} delay={dl(7, 0.5)} d="M 66 430 v 88" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 2)}>
        <T x={84} y={450} size={13} fill={RED} script anchor="start">
          {t(
            "the whole trap = one unit conversion",
            "poora trap = ek unit conversion"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 8)}>
        <T x={84} y={476} size={13} fill={RED} script anchor="start">
          {t(
            "see km/h in a power/energy problem → ÷ 3.6 BEFORE anything else",
            "power/energy sawaal mein km/h dikhe → sabse PEHLE ÷ 3.6"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 15)}>
        <T x={84} y={502} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "the un-converted answer is planted every time — a guaranteed mark",
            "bina-converted jawab har baar rakha hota hai — guaranteed mark"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
