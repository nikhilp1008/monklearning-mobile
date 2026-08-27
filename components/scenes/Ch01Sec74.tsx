/**
 * Ch01 · Section 74 — "Example 4 [JEE Advanced]: when every number is non-standard"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 24.8, 42.3, 54.4, 79.3, 104.1, 124.7, 147.5]):
 *  0 two instrument columns of given chips
 *  1 red: nothing is standard
 *  2 part a header + jump-to-25 trap
 *  3 vernier: 1 MSD = 0.5 mm → LC = 0.02 mm
 *  4 screw: pitch = 3 mm → LC = 0.015 mm
 *  5 comparison chip: screw gauge finer, not a landslide
 *  6 why Advanced — every default disabled
 *  7 verdict: derive it and ask the two questions
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | headers 13 st x80/x560 bl 68 · chips: left y74/y112 · right y74/y112/y150
 *  b1 | red 14 mid bl 205
 *  b2 | amber 14 st x80 bl 245 · red 12 st x460 bl 245
 *  b3 | 16 st x80 bl 285 / 320
 *  b4 | amber 14 st x80 bl 362 · 16 st x80 bl 398 / 433
 *  b5 | chip x560..1020 y390..428 · muted 13 st x560 bl 455
 *  b6 | red 13 st x80 bl 490
 *  b7 | green 14 mid bl 540 · amber 13 mid bl 570
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Chip,
  T,
  INK,
  INK_LIGHT,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch01Sec74({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the two instruments */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={48} size={22} fill={INK} script>
          {t(
            "JEE Advanced — when every number is non-standard",
            "JEE Advanced — jab har number gair-maanak hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 6)}>
        <Chip x={80} y={76} w={260} h={32} fill={CREAM} stroke={INK_LIGHT} textFill={INK} size={14} script={false}>
          {t("vernier: 1 cm ÷ 20 parts", "vernier: 1 cm ÷ 20 hisse")}
        </Chip>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 9)}>
        <Chip x={80} y={114} w={240} h={32} fill={CREAM} stroke={INK_LIGHT} textFill={INK} size={14} script={false}>
          25 VSD = 24 MSD
        </Chip>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 14)}>
        <Chip x={560} y={76} w={280} h={32} fill={CREAM} stroke={INK_LIGHT} textFill={INK} size={14}>
          {t("screw · linear scale: mm", "screw · linear scale: mm")}
        </Chip>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 17)}>
        <Chip x={560} y={114} w={280} h={32} fill={CREAM} stroke={INK_LIGHT} textFill={INK} size={14}>
          {t("1 rotation = 3 divisions", "1 chakkar = 3 divisions")}
        </Chip>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 20)}>
        <Chip x={560} y={152} w={220} h={32} fill={CREAM} stroke={INK_LIGHT} textFill={INK} size={14} script={false}>
          200 divisions
        </Chip>
      </Fade>

      {/* beat 1 — nothing standard */}
      <Fade on={beat >= 1} delay={dl(1, 3)}>
        <T x={540} y={215} size={14} fill={RED} script>
          {t(
            "nothing here is standard — every default assumption has been quietly disabled",
            "yahan kuchh bhi maanak nahi — tumhari har default dhaarna chupchaap band kar di gayi hai"
          )}
        </T>
      </Fade>

      {/* beat 2 — part a header */}
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={80} y={252} size={14} fill={AMBER_DARK} script anchor="start">
          {t("part a — build from the definition", "part a — paribhasha se banao")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 6)}>
        <T x={460} y={252} size={12} fill={RED} script anchor="start">
          {t(
            "trap: dividing by 25 before asking what 1 MSD even is",
            "jaal: bina poochhe ki 1 MSD kya hai, 25 se bhaag dena"
          )}
        </T>
      </Fade>

      {/* beat 3 — the vernier */}
      <Fade on={beat >= 3} delay={dl(3, 2)}>
        <T x={80} y={292} size={16} fill={INK} weight={700} anchor="start">
          1 MSD = 1 cm ⁄ 20 = 0.05 cm = 0.5 mm — {t("not 1 mm", "1 mm nahi")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 14)}>
        <T x={80} y={327} size={16} fill={INK} weight={700} anchor="start">
          n = 25 → LC = 0.5 ⁄ 25 = 0.02 mm
        </T>
      </Fade>

      {/* beat 4 — the screw */}
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={80} y={369} size={14} fill={AMBER_DARK} script anchor="start">
          {t("part b — the pitch trap", "part b — pitch ka jaal")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 6)}>
        <T x={80} y={403} size={16} fill={INK} weight={700} anchor="start">
          pitch = 3 × 1 mm = 3 mm — {t("not 1 mm", "1 mm nahi")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 16)}>
        <T x={80} y={438} size={16} fill={INK} weight={700} anchor="start">
          LC = 3 ⁄ 200 = 0.015 mm
        </T>
      </Fade>

      {/* beat 5 — the comparison */}
      <Fade on={beat >= 5} delay={dl(5, 4)}>
        <Chip x={560} y={392} w={460} h={38} fill={CREAM} stroke={GREEN} textFill={GREEN} size={15} script={false}>
          0.015 {"<"} 0.02 → {t("screw gauge is finer", "screw gauge zyada baareek")}
        </Chip>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 13)}>
        <T x={560} y={458} size={13} fill={MUTED} script anchor="start">
          {t(
            "not a landslide — genuinely comparable instruments",
            "ekatarfa jeet nahi — sach mein tulna laayak instruments"
          )}
        </T>
      </Fade>

      {/* beat 6 — why Advanced */}
      <Fade on={beat >= 6} delay={dl(6, 4)}>
        <T x={80} y={495} size={13} fill={RED} script anchor="start">
          {t(
            "why Advanced: MSD was 0.5 not 1 · pitch was 3 not 1 · even n−1 needed checking — rebuild every LC from the definition",
            "Advanced kyun: MSD 0.5 tha 1 nahi · pitch 3 tha 1 nahi · n−1 bhi jaanchna pada — har LC paribhasha se banao"
          )}
        </T>
      </Fade>

      {/* beat 7 — the verdict */}
      <Fade on={beat >= 7} delay={dl(7, 4)}>
        <T x={540} y={540} size={14} fill={GREEN} script>
          {t(
            "derive LC = MSD ⁄ n yourself and none of this frightens — just ask: what is one MSD here? what is n?",
            "LC = MSD ⁄ n khud derive karo to kuchh nahi darata — bas poochho: yahan 1 MSD kya? n kya?"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 14)}>
        <T x={540} y={570} size={13} fill={AMBER_DARK} script>
          {t(
            "modified instruments are the whole reason we reasoned the formula out",
            "modified instruments hi poori wajah hain ki humne formula tark se nikaala"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
