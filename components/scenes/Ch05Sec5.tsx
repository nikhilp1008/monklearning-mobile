/**
 * Ch05 · Section 5 — "Clean substitution, and the zero-dot shortcut" (worked examples)
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 7, 23.2, 43.4, 61.3, 62.3, 63.3, 75.5, 87.4] · dur 105.6 —
 *        en b4/b5 last ~1s → en-tiny delays; hi b6 lasts ~1s → hi-tiny delays;
 *        hi [0, 7.9, 23.6, 44.9, 62.1, 79.8, 91.8, 92.8, 104.3] · dur 125.3):
 *  0 title + subtitle
 *  1 Ex1 setup chip (5, 4, 60°)
 *  2 Ex1 work: substitute → 10, scalar-shape chip
 *  3 Ex2 setup: NEET trap, options row
 *  4 trap route panel (red)
 *  5 mini vector plot — clean right angle
 *  6 dot-first work: 12 − 12 = 0
 *  7 zero ⇒ 90°, option (c), ~4 s
 *  8 verdict: dot product FIRST reflex
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52 · subtitle cx540 bl84
 *  Ex1 col: label st x80 bl120 · chip x80..480 y130..168 · note cx280 bl195
 *   work st x90 bl228 / bl258 · chip x90..310 y278..314 · note cx240 bl341
 *  Ex2 col: label st x550 bl120 · chip x550..1020 y130..168 · options cx785 bl196
 *   b4 | bar x550 y215..265 · lines st x565 bl232 / bl256
 *   b5 | axes x570..710 / y300..420 c(630,360) · u→(660,320) lbl (688,308)
 *      | v→(670,390) lbl (706,404)
 *   b6 | work st x750 bl330/358/386 · script st x750 bl414
 *   b7 | chip x750..1000 y430..466 · script cx875 bl492
 *  b8 | bar x66 y520..578 · lines st x84 bl540 / bl566
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
  arrowD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch05Sec5({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={22} fill={INK} script>
          {t("Clean Substitution & the Zero-Dot Shortcut", "Clean Substitution & the Zero-Dot Shortcut")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 3.5)}>
        <T x={540} y={84} size={13} fill={MUTED} script>
          {t(
            "two examples — one about presentation, one about work you never needed",
            "do examples — ek presentation ke baare mein, ek us kaam ke jo karna hi nahi tha"
          )}
        </T>
      </Fade>

      {/* beat 1 — Ex1 setup */}
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={80} y={120} size={13} fill={AMBER_DARK} script anchor="start">
          Ex 1
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <Chip x={80} y={130} w={400} h={38} fill={CREAM} stroke={INK} textFill={INK} size={15} script={false}>
          A = 5, B = 4, θ = 60° → A · B ?
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 8)}>
        <T x={280} y={195} size={13} fill={MUTED} script>
          {t(
            "everything handed to you — geometric form, no question",
            "sab kuchh haath mein hai — geometric form, koi sawaal nahi"
          )}
        </T>
      </Fade>

      {/* beat 2 — Ex1 work */}
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={90} y={228} size={15} fill={INK} anchor="start" weight={700}>
          A · B = 5 × 4 × cos 60°
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 5)}>
        <T x={90} y={258} size={15} fill={INK} anchor="start" weight={700}>
          = 20 × ½ = 10 units
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 9)}>
        <Chip x={90} y={278} w={220} h={36} fill={CREAM} stroke={GREEN} textFill={INK} size={15} script={false}>
          10 — a single number
        </Chip>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 13)}>
        <T x={240} y={341} size={13} fill={GREEN} script>
          {t(
            "no direction, no unit vector attached",
            "koi direction nahi, koi unit vector nahi"
          )}
        </T>
      </Fade>

      {/* beat 3 — Ex2 setup */}
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <T x={550} y={120} size={13} fill={RED} script anchor="start">
          {t("Ex 2 — a genuine NEET trap", "Ex 2 — asli NEET trap")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2)}>
        <Chip x={550} y={130} w={470} h={38} fill={CREAM} stroke={INK} textFill={INK} size={15} script={false}>
          {t("angle between 3î + 4ĵ and 4î − 3ĵ ?", "3î + 4ĵ aur 4î − 3ĵ ke beech angle ?")}
        </Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 8)}>
        <T x={785} y={196} size={14} fill={MUTED} weight={600}>
          (a) 0° · (b) 45° · (c) 90° · (d) 180°
        </T>
      </Fade>

      {/* beat 4 — the trap route (en: ~1s beat) */}
      <Draw on={beat >= 4} delay={dl(4, en ? 0.2 : 1)} d="M 550 215 v 50" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, en ? 0.4 : 2)}>
        <T x={565} y={232} size={13} fill={RED} script anchor="start">
          {t(
            "trap route: |A| = 5, |B| = 5 → ratio → cos⁻¹ — ~40 s",
            "trap: dono magnitudes 5 → ratio → cos⁻¹ — ~40 s ka kaam"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, en ? 0.7 : 9)}>
        <T x={565} y={256} size={13} fill={RED} script anchor="start">
          {t("40 s = a whole NEET question", "NEET mein 40 s = ek poora sawaal")}
        </T>
      </Fade>

      {/* beat 5 — the picture (en: ~1s beat) */}
      <Draw on={beat >= 5} delay={dl(5, en ? 0.2 : 1)} d="M 570 360 H 710 M 630 420 V 300" stroke={MUTED} sw={1.6} dur={0.5} />
      <Draw on={beat >= 5} delay={dl(5, en ? 0.5 : 3)} d={arrowD(630, 360, 660, 320)} stroke={INK} sw={2.6} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, en ? 0.7 : 4)}>
        <T x={688} y={308} size={12} fill={INK} weight={700}>
          3î + 4ĵ
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, en ? 0.9 : 5.5)} d={arrowD(630, 360, 670, 390)} stroke={INK} sw={2.6} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, en ? 1.1 : 6.5)}>
        <T x={706} y={404} size={12} fill={INK} weight={700}>
          4î − 3ĵ
        </T>
      </Fade>

      {/* beat 6 — dot first (hi: ~1s beat) */}
      <Fade on={beat >= 6} delay={dl(6, en ? 1 : 0.2)}>
        <T x={750} y={330} size={15} fill={INK} anchor="start" weight={700}>
          3 × 4 = 12
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, en ? 3.5 : 0.4)}>
        <T x={750} y={358} size={15} fill={INK} anchor="start" weight={700}>
          4 × (−3) = −12
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, en ? 6 : 0.6)}>
        <T x={750} y={386} size={15} fill={GREEN} anchor="start" weight={800}>
          {t("sum = 0", "jod = 0")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, en ? 8.5 : 0.8)}>
        <T x={750} y={414} size={13} fill={GREEN} script anchor="start">
          {t("no magnitude, no √ touched", "koi magnitude nahi, koi √ nahi")}
        </T>
      </Fade>

      {/* beat 7 — 90°, option (c) */}
      <Fade on={beat >= 7} delay={dl(7, 1.5)}>
        <Chip x={750} y={430} w={250} h={36} fill={CREAM} stroke={GREEN} textFill={INK} size={15} script={false}>
          = 0 ⇒ θ = 90° — (c)
        </Chip>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 6)}>
        <T x={875} y={492} size={13} fill={GREEN} script>
          {t("done, in about 4 seconds", "ho gaya — lagbhag 4 seconds mein")}
        </T>
      </Fade>

      {/* beat 8 — the reflex */}
      <Draw on={beat >= 8} delay={dl(8, 0.5)} d="M 66 520 v 58" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 8} delay={dl(8, 1.2)}>
        <T x={84} y={540} size={13} fill={GREEN} script anchor="start">
          {t(
            "the reflex: on any angle question, compute the dot product FIRST",
            "reflex: kisi bhi angle sawaal par, SABSE PEHLE dot product nikaalo"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 6)}>
        <T x={84} y={566} size={13} fill={GREEN} script anchor="start">
          {t(
            "if it vanishes → 90° instantly — never touch magnitudes or cos⁻¹",
            "gayab ho jaaye → turant 90° — magnitudes ya cos⁻¹ ko haath bhi nahi"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
