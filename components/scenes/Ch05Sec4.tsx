/**
 * Ch05 · Section 4 — "The complete dot-product toolkit" (formulas)
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 8.9, 29.4, 53.9, 54.9, 55.9, 76.0, 97.3] · dur 118 —
 *        en beats 3 and 4 last ~1s → their delays are en ? tiny : normal;
 *        hi [0, 10.0, 28.5, 51.5, 67.7, 84.4, 102.0, 125.0] · dur 142.4):
 *  0 title + "clean page" subtitle
 *  1 S1 geometric definition + θ-range note        (left, row 1)
 *  2 S2 component form + arithmetic note           (right, row 1)
 *  3 S3 the angle                                  (left, row 2)
 *  4 S4 projection = shadow formula                (right, row 2)
 *  5 S5 A·A = A²                                   (left, row 3)
 *  6 S6 unit-vector engine                         (right, row 3)
 *  7 red verdict: dimensions are inherited — F·d → energy
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52 · subtitle cx540 bl84
 *  rows: labels bl 132/252/372 (st x80 / x560) · chips y142..180 / 262..300 / 382..420
 *  notes bl 207/327/447
 *  S1 chip x80..350 · note cx236 · S2 chip x560..940 · note cx740
 *  S3 chip x80..350 · note cx250 · S4 chip x560..860 · note cx745
 *  S5 chip x80..300 · note cx235 · S6 chip x560..1010 (size14) · note cx785
 *  b7 | bar x66 y500..558 · lines st x84 bl520 / bl546
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

export default function Ch05Sec4({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={22} fill={INK} script>
          {t("The Complete Dot-Product Toolkit", "The Complete Dot-Product Toolkit")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 4)}>
        <T x={540} y={84} size={13} fill={MUTED} script>
          {t(
            "everything it can do for you — give this a clean page in your notes",
            "jo kuchh bhi ye aapke liye kar sakta hai — notes mein ek saaf page do"
          )}
        </T>
      </Fade>

      {/* beat 1 — S1 geometric definition */}
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <T x={80} y={132} size={13} fill={AMBER_DARK} script anchor="start">
          {t("1 · definition (geometric)", "1 · definition (geometric)")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <Chip x={80} y={142} w={270} h={38} fill={CREAM} stroke={INK} textFill={INK} size={16} script={false}>
          A · B = A B cos θ
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 9)}>
        <T x={236} y={207} size={13} fill={MUTED} script>
          {t(
            "θ: 0°..180° — the smaller angle, tail to tail",
            "θ: 0°..180° — chhota angle, tail to tail"
          )}
        </T>
      </Fade>

      {/* beat 2 — S2 component form */}
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={560} y={132} size={13} fill={AMBER_DARK} script anchor="start">
          {t("2 · component form — compute with this", "2 · component form — hisaab isi se")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <Chip x={560} y={142} w={380} h={38} fill={CREAM} stroke={INK} textFill={INK} size={15} script={false}>
          A · B = AxBx + AyBy + AzBz
        </Chip>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 10)}>
        <T x={740} y={207} size={13} fill={MUTED} script>
          {t(
            "multiply matching, add — geometry has vanished",
            "matching multiply karo, jodo — geometry gayab"
          )}
        </T>
      </Fade>

      {/* beat 3 — S3 the angle (en: ~1s beat, tiny delays) */}
      <Fade on={beat >= 3} delay={dl(3, en ? 0.2 : 0.6)}>
        <T x={80} y={252} size={13} fill={AMBER_DARK} script anchor="start">
          {t("3 · the angle", "3 · angle nikaalo")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, en ? 0.4 : 2)}>
        <Chip x={80} y={262} w={270} h={38} fill={CREAM} stroke={INK} textFill={INK} size={16} script={false}>
          cos θ = A · B ⁄ (A B)
        </Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, en ? 0.7 : 8)}>
        <T x={250} y={327} size={13} fill={MUTED} script>
          {t(
            "full component version — the exam-pressure one",
            "poora components-wala version — exam pressure ke liye"
          )}
        </T>
      </Fade>

      {/* beat 4 — S4 projection (en: ~1s beat, tiny delays) */}
      <Fade on={beat >= 4} delay={dl(4, en ? 0.2 : 0.6)}>
        <T x={560} y={252} size={13} fill={AMBER_DARK} script anchor="start">
          {t("4 · projection (the shadow)", "4 · projection (shadow)")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, en ? 0.4 : 2)}>
        <Chip x={560} y={262} w={300} h={38} fill={CREAM} stroke={INK} textFill={INK} size={16} script={false}>
          proj of A on B = A · B ⁄ B
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, en ? 0.7 : 8)}>
        <T x={745} y={327} size={13} fill={MUTED} script>
          {t(
            "÷B strips the ground scaling — bare shadow left",
            "÷B ground-scaling hata deta hai — nangi shadow bachti hai"
          )}
        </T>
      </Fade>

      {/* beat 5 — S5 dot with itself */}
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={80} y={372} size={13} fill={AMBER_DARK} script anchor="start">
          {t("5 · dot with itself", "5 · khud se dot")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2.5)}>
        <Chip x={80} y={382} w={220} h={38} fill={CREAM} stroke={GREEN} textFill={INK} size={16} script={false}>
          A · A = A²
        </Chip>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 10)}>
        <T x={235} y={447} size={13} fill={GREEN} script>
          {t(
            "the trick behind the elegant collision proofs",
            "aage ke elegant collision proofs ki trick yahi hai"
          )}
        </T>
      </Fade>

      {/* beat 6 — S6 unit-vector engine */}
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={560} y={372} size={13} fill={AMBER_DARK} script anchor="start">
          {t("6 · the engine underneath", "6 · neeche ka engine")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.5)}>
        <Chip x={560} y={382} w={450} h={38} fill={CREAM} stroke={INK} textFill={INK} size={14} script={false}>
          î·î = ĵ·ĵ = k̂·k̂ = 1 · î·ĵ = ĵ·k̂ = k̂·î = 0
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 12)}>
        <T x={785} y={447} size={13} fill={MUTED} script>
          {t(
            "every cross term dies on this rule — expand once, then trust it",
            "har cross term isi rule par marta hai — ek baar expand karo, phir bharosa"
          )}
        </T>
      </Fade>

      {/* beat 7 — dimensions are inherited */}
      <Draw on={beat >= 7} delay={dl(7, 0.5)} d="M 66 500 v 58" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={84} y={520} size={13} fill={RED} script anchor="start">
          {t(
            "no dimensions of its own — it inherits whatever the two quantities carry",
            "apni koi dimensions nahi — jo dono quantities laayen, wahi milti hain"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 8)}>
        <T x={84} y={546} size={13} fill={RED} script anchor="start">
          {t(
            "F · d → [M L² T⁻²] — the dimensions of energy",
            "F · d → [M L² T⁻²] — energy ki dimensions"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
