/**
 * Ch05 · Section 39 — "Friction to heat, and the mass-unit trap" (worked examples)
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 10.9, 25.3, 50.1, 74.9, 86.6, 105.3, 121.8, 146.6] · dur 171.4;
 *        hi [0, 11.6, 27.0, 51.5, 76.3, 87.7, 104.9, 121.2, 146.0] · dur 170.8):
 *  0 title + subtitle
 *  1 Ex1 setup chip
 *  2 heat = Ki = 125 J
 *  3 principle: converted, not lost
 *  4 scale-jump line
 *  5 Ex2 setup: 1 gram
 *  6 the 9×10¹⁶ trap
 *  7 unit fix → 9×10¹³ J chip
 *  8 verdict band
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52 · subtitle cx540 bl82
 *  Ex1: lbl st x80 bl114 · chip x80..520 y124..160 · work st x90 bl210 / bl240
 *   green cx300 bl280 · muted bl306 · amber cx300 bl350
 *  Ex2: lbl st x560 bl114 · chip x560..1030 y124..160 · red st x560 bl210 / bl236
 *   fix st x560 bl276 / bl306 · chip x560..860 y326..364
 *  b8 | bar x66 y430..540 · lines st x84 bl450 / bl476 / bl502
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

export default function Ch05Sec39({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t("Friction to Heat & the Mass-Unit Trap", "Friction se Heat & Mass-Unit Trap")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 4)}>
        <T x={540} y={82} size={13} fill={MUTED} script>
          {t(
            "conservation in action — then a trap built on a unit slip",
            "conservation kaam par — phir ek unit slip par bana trap"
          )}
        </T>
      </Fade>

      {/* beat 1 — Ex1 setup */}
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={80} y={114} size={13} fill={AMBER_DARK} script anchor="start">
          {t("Ex 1 — the sliding crate", "Ex 1 — sarakta crate")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <Chip x={80} y={124} w={440} h={36} fill={CREAM} stroke={INK} textFill={INK} size={12.5} script={false}>
          {t(
            "10 kg crate · 5 m/s → rest (friction) · heat? principle?",
            "10 kg crate · 5 m/s → friction se rukta · heat? siddhant?"
          )}
        </Chip>
      </Fade>

      {/* beat 2 — the heat */}
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <T x={90} y={210} size={15} fill={INK} anchor="start" weight={700}>
          heat = K_i = ½ · 10 · 5²
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 9)}>
        <T x={90} y={240} size={16} fill={INK} anchor="start" weight={800}>
          = 125 J
        </T>
      </Fade>

      {/* beat 3 — the principle */}
      <Fade on={beat >= 3} delay={dl(3, 2)}>
        <T x={300} y={280} size={13} fill={GREEN} script>
          {t(
            "conservation of energy — CONVERTED, not lost",
            "conservation of energy — CONVERTED, lost nahi"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 11)}>
        <T x={300} y={306} size={12.5} fill={MUTED} script>
          {t(
            "crate & floor warmed by exactly 125 J",
            "crate aur floor theek 125 J se garam hue"
          )}
        </T>
      </Fade>

      {/* beat 4 — the scale jump */}
      <Fade on={beat >= 4} delay={dl(4, 3)}>
        <T x={300} y={350} size={13} fill={AMBER_DARK} script>
          {t(
            "now jump scales: from a crate → inside matter itself",
            "ab scale badlo: crate se → khud padarth ke andar"
          )}
        </T>
      </Fade>

      {/* beat 5 — Ex2 setup */}
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={560} y={114} size={13} fill={RED} script anchor="start">
          {t("Ex 2 — NEET: one gram of matter", "Ex 2 — NEET: ek gram padarth")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <Chip x={560} y={124} w={470} h={36} fill={CREAM} stroke={INK} textFill={INK} size={12.5} script={false}>
          {t(
            "E of 1 GRAM · c = 3×10⁸ · options: 9×10¹³ … 9×10¹⁶",
            "1 GRAM ki E · c = 3×10⁸ · options: 9×10¹³ … 9×10¹⁶"
          )}
        </Chip>
      </Fade>

      {/* beat 6 — the trap */}
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={560} y={210} size={13} fill={RED} script anchor="start">
          {t(
            "in a hurry: m = 1 → E = 9×10¹⁶ ✗",
            "jaldi mein: m = 1 → E = 9×10¹⁶ ✗"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 9)}>
        <T x={560} y={236} size={13} fill={RED} script anchor="start">
          {t(
            "it sits right there in the options, waiting",
            "wo wahin options mein baitha intezar karta hai"
          )}
        </T>
      </Fade>

      {/* beat 7 — the unit fix */}
      <Fade on={beat >= 7} delay={dl(7, 2)}>
        <T x={560} y={276} size={13.5} fill={INK} anchor="start" weight={700}>
          {t("the question says GRAM — SI demands kg", "sawaal GRAM kehta hai — SI ko kg chahiye")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 9)}>
        <T x={560} y={306} size={13.5} fill={INK} anchor="start" weight={700}>
          1 g = 10⁻³ kg → E = 10⁻³ × 9×10¹⁶
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 15)}>
        <Chip x={560} y={326} w={300} h={38} fill={CREAM} stroke={GREEN} textFill={INK} size={15} script={false}>
          E = 9×10¹³ J
        </Chip>
      </Fade>

      {/* beat 8 — the verdict */}
      <Draw on={beat >= 8} delay={dl(8, 0.5)} d="M 66 430 v 85" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 8} delay={dl(8, 2)}>
        <T x={84} y={450} size={13} fill={RED} script anchor="start">
          {t(
            "the whole trap = one factor of 1000",
            "poora trap = hazaar ka ek factor"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 8)}>
        <T x={84} y={476} size={13} fill={RED} script anchor="start">
          {t(
            "convert g (and u) to kg BEFORE you square c",
            "g (aur u) ko kg mein badlo, c square karne se PEHLE"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 16)}>
        <T x={84} y={502} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "even ONE gram = city-scale energy — Einstein's quiet awe",
            "EK gram bhi = shehar-scale energy — Einstein ka khamosh achambha"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
