/**
 * Ch10 · Section 65 — "Evaporation versus boiling"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 * Note: en reveals have beats 1-6 exactly 1s apart, so ALL Fade/Draw
 * delays in this file stay ≤ ~0.5s (well under the 1s beat gap).
 *
 * Beats (en [0,7.59,8.59,9.59,10.59,11.59,12.59]):
 *  0 the trap: evaporation is not boiling
 *  1 boiling = bulk, bubbles throughout, at BP · evaporation = surface, any T
 *  2 fastest surface molecules escape, leaving the rest cooler
 *  3 that's why it cools: sweat, matka (porous earthen pot)
 *  4 a desert cooler: evaporating water into dry air
 *  5 speeds up with: higher T, bigger area, dry air, wind
 *  6 caution: pure substances only — impurities shift transition temps
 *
 * Layout plan (strict non-overlapping y-bands):
 *  b0 | intro mid x540 bl85
 *  b1 | divider x540 y98..158 · boiling col x300 bl112/134 ·
 *       evaporation col x780 bl112/134
 *  b2 | note mid x540 bl172
 *  b3 | chip1 x220 y195 w300 h34 · chip2 x560 y195 w300 h34
 *  b4 | note mid x540 bl258
 *  b5 | chips x210/380/550/720 y285 w150 h32
 *  b6 | note1 mid x540 bl355 · note2 mid x540 bl378
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  INK,
  INK_LIGHT,
  MUTED,
  CREAM,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch10Sec65({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true} delay={0.2}>
        <T x={540} y={58} size={20} fill={INK} script>
          {t("evaporation versus boiling", "evaporation versus boiling")}
        </T>
      </Fade>

      {/* beat 0 — the trap */}
      <Fade on={beat >= 0} delay={dl(0, 0.15)}>
        <T x={540} y={85} size={12} fill={INK} script anchor="middle">
          {t("a favourite trap: evaporation is not boiling", "ek pasandida trap: evaporation, boiling nahi hai")}
        </T>
      </Fade>

      {/* beat 1 — bulk vs surface */}
      <Draw on={beat >= 1} delay={dl(1, 0.1)} d="M540 98 v60" stroke={INK_LIGHT} sw={1.4} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 0.25)}>
        <T x={300} y={112} size={13} fill={AMBER_DARK} weight={700} anchor="middle">{t("BOILING", "BOILING")}</T>
        <T x={780} y={112} size={13} fill={GREEN} weight={700} anchor="middle">{t("EVAPORATION", "EVAPORATION")}</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.45)}>
        <T x={300} y={134} size={12} fill={INK} script anchor="middle">
          {t("bulk — bubbles throughout, at the boiling point", "bulk — poore mein bubbles, boiling point par")}
        </T>
        <T x={780} y={134} size={12} fill={INK} script anchor="middle">
          {t("surface only — at any temperature", "sirf surface par — kisi bhi temperature par")}
        </T>
      </Fade>

      {/* beat 2 — fastest molecules escape */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={540} y={172} size={12} fill={INK} script anchor="middle">
          {t("fastest surface molecules escape, leaving the rest cooler", "sabse tez surface molecules nikal jaate, baaki thande")}
        </T>
      </Fade>

      {/* beat 3 — why it cools: sweat, matka */}
      <Fade on={beat >= 3} delay={dl(3, 0.1)}>
        <Chip x={220} y={195} w={300} h={34} fill={CREAM} stroke={GREEN} textFill={INK} size={13}>
          {t("sweat cools your skin", "sweat aapki skin thandi karta")}
        </Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <Chip x={560} y={195} w={300} h={34} fill={CREAM} stroke={GREEN} textFill={INK} size={13}>
          {t("matka keeps water cool", "matka paani thanda rakhta")}
        </Chip>
      </Fade>

      {/* beat 4 — desert cooler */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={258} size={12} fill={MUTED} script anchor="middle">
          {t("a desert cooler: evaporating water into dry air", "desert cooler: dry air mein paani evaporate hota")}
        </T>
      </Fade>

      {/* beat 5 — the four factors */}
      <Fade on={beat >= 5} delay={dl(5, 0.05)}>
        <Chip x={210} y={285} w={150} h={32} fill={CREAM} stroke={AMBER_DARK} textFill={AMBER_DARK} size={12} script={false}>
          {t("higher T", "zyada T")}
        </Chip>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <Chip x={380} y={285} w={150} h={32} fill={CREAM} stroke={AMBER_DARK} textFill={AMBER_DARK} size={12} script={false}>
          {t("bigger area", "bada area")}
        </Chip>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.35)}>
        <Chip x={550} y={285} w={150} h={32} fill={CREAM} stroke={AMBER_DARK} textFill={AMBER_DARK} size={12} script={false}>
          {t("dry air", "sookhi hawa")}
        </Chip>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <Chip x={720} y={285} w={150} h={32} fill={CREAM} stroke={AMBER_DARK} textFill={AMBER_DARK} size={12} script={false}>
          {t("wind", "hawa chalna")}
        </Chip>
      </Fade>

      {/* beat 6 — caution: pure substances only */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={355} size={12} fill={RED} script weight={700} anchor="middle">
          {t(
            "caution: pure substances only — impurities shift transition temps",
            "dhyan: sirf pure substances — impurities transition temps badalte"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={378} size={12} fill={MUTED} anchor="middle">
          {t(
            "salt lowers ice's melting point; solutes raise boiling point",
            "namak ice ka melting point ghataata; solutes boiling point badhaate"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
