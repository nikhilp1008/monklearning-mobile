/**
 * Ch05 · Section 46 — "Power — key formulas"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 8.1, 22.9, 42.3, 60.7, 85.5, 107.7, 128.9, 153.5] · dur 178.4 —
 *        hi b6 lasts ~1s → hi-tiny delays;
 *        hi [0, 8.2, 22.0, 41.9, 57.4, 82.3, 107.1, 108.1, 132.9] · dur 157.8):
 *  0 title · 1 P_avg card · 2 P_inst card · 3 units row · 4 dimensions lesson
 *  5 two standard results · 6 constant-power box (hi tiny) · 7 P_avg = ½ P_inst
 *  8 two-habits band
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52 · subtitle cx540 bl80
 *  S1 chip x80..380 y115..151 · note cx230 bl177
 *  S2 chip x560..980 y115..151 · note cx770 bl177
 *  S3 chips y205..241: x80..230 / x250..410 / x430..740
 *  S4 st x80 bl285 · note cx320 bl311
 *  S5 st x560 bl285 / bl313 · note cx760 bl339
 *  S6 chip x80..560 y360..398
 *  S7 lbl st x600 bl368 · line bl396 · note cx780 bl422
 *  b8 | bar x66 y450..560 · lines st x84 bl470 / bl496 / bl522
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

export default function Ch05Sec46({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={22} fill={INK} script>
          {t("Power — Key Formulas", "Power — Key Formulas")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 3)}>
        <T x={540} y={80} size={13} fill={MUTED} script>
          {t(
            "compact — and almost every line directly examinable",
            "compact — aur lagbhag har line seedhe examinable"
          )}
        </T>
      </Fade>

      {/* beat 1 — average power */}
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <Chip x={80} y={115} w={300} h={36} fill={CREAM} stroke={INK} textFill={INK} size={14} script={false}>
          P_avg = W_total ⁄ t_total
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 8)}>
        <T x={230} y={177} size={12.5} fill={MUTED} script>
          {t("'over the whole trip' · 'on average'", "'poore safar par' · 'ausatan'")}
        </T>
      </Fade>

      {/* beat 2 — instantaneous power */}
      <Fade on={beat >= 2} delay={dl(2, 1.5)}>
        <Chip x={560} y={115} w={420} h={36} fill={CREAM} stroke={GREEN} textFill={INK} size={13.5} script={false}>
          P_inst = dW⁄dt = F·v = F v cos θ
        </Chip>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 9)}>
        <T x={770} y={177} size={12.5} fill={MUTED} script>
          {t(
            "given a speed at a moment → use F v · mind the cos θ",
            "kisi pal ki speed mile → F v lo · cos θ ka dhyaan"
          )}
        </T>
      </Fade>

      {/* beat 3 — units row */}
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <Chip x={80} y={205} w={150} h={36} fill={CREAM} stroke={INK} textFill={INK} size={13} script={false}>
          1 W = 1 J/s
        </Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 6)}>
        <Chip x={250} y={205} w={160} h={36} fill={CREAM} stroke={INK} textFill={INK} size={13} script={false}>
          1 hp = 746 W
        </Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 11)}>
        <Chip x={430} y={205} w={310} h={36} fill={CREAM} stroke={RED} textFill={INK} size={12.5} script={false}>
          1 kWh = 3.6×10⁶ J (energy!)
        </Chip>
      </Fade>

      {/* beat 4 — dimensions */}
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <T x={80} y={285} size={14} fill={INK} anchor="start" weight={700}>
          [P] = M L² T⁻³ · [W] = M L² T⁻²
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 10)}>
        <T x={320} y={311} size={12.5} fill={AMBER_DARK} script>
          {t(
            "the extra T⁻¹ IS the 'per second' — how you tell them apart",
            "extra T⁻¹ hi 'har second' hai — isi se alag pehchano"
          )}
        </T>
      </Fade>

      {/* beat 5 — two standard results */}
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <T x={560} y={285} size={14} fill={INK} anchor="start" weight={700}>
          {t("lift at constant v: P = m g v", "constant v par uthana: P = m g v")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 9)}>
        <T x={560} y={313} size={14} fill={INK} anchor="start" weight={700}>
          {t("cruise vs resistance: P = F_res · v", "resistance ke khilaf cruise: P = F_res · v")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 16)}>
        <T x={760} y={339} size={12.5} fill={MUTED} script>
          {t(
            "both are P = F v — the force balances something",
            "dono P = F v hain — force kisi cheez ko balance karta hai"
          )}
        </T>
      </Fade>

      {/* beat 6 — constant power box (hi: ~1s beat) */}
      <Fade on={beat >= 6} delay={dl(6, en ? 2 : 0.2)}>
        <Chip x={80} y={360} w={480} h={38} fill={CREAM} stroke={GREEN} textFill={INK} size={12.5} script={false}>
          {t(
            "from rest, constant P: K = Pt · v ∝ √t · x ∝ t^(3/2)",
            "aaram se, constant P: K = Pt · v ∝ √t · x ∝ t^(3/2)"
          )}
        </Chip>
      </Fade>

      {/* beat 7 — average is half the final */}
      <Fade on={beat >= 7} delay={dl(7, 0.5)}>
        <T x={600} y={368} size={13} fill={AMBER_DARK} script anchor="start">
          {t("from rest, constant FORCE:", "aaram se, constant FORCE:")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 3)}>
        <T x={600} y={396} size={15} fill={INK} anchor="start" weight={800}>
          P_avg = ½ P_inst,final
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 12)}>
        <T x={780} y={422} size={12.5} fill={MUTED} script>
          {t(
            "a linear climb from zero averages to half",
            "zero se linear chadhai ka ausat aadha hota hai"
          )}
        </T>
      </Fade>

      {/* beat 8 — two habits */}
      <Draw on={beat >= 8} delay={dl(8, 0.5)} d="M 66 450 v 88" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 8} delay={dl(8, 2)}>
        <T x={84} y={470} size={13} fill={GREEN} script anchor="start">
          {t(
            "graphs: P–t area = work · W–t slope = instantaneous power",
            "graphs: P–t area = work · W–t slope = instantaneous power"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 10)}>
        <T x={84} y={496} size={13} fill={RED} script anchor="start">
          {t(
            "see km/h? ÷ 3.6 → m/s BEFORE touching any formula",
            "km/h dikhe? ÷ 3.6 → m/s, kisi formula se PEHLE"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 17)}>
        <T x={84} y={522} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "that habit alone is worth a NEET mark every single year",
            "wo aadat akeli har saal ek NEET mark ke barabar hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
