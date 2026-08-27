/**
 * C11 Ch01 · Section 4 — "The classification routine and separations"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (en [0,9.56,28.76,39.51,52.06,70.06,94.9]):
 *  0 anchor: no formula — just a repeatable routine (dims at beat 1)
 *  1 decision 1: fixed composition? → mixture / pure substance
 *  2 decision 2 (if mixture): uniform? → heterogeneous / homogeneous
 *  3 decision 3 (if pure): splits further (chemically)? → element / compound
 *  4 the OTHER routine: change-type checklist → verdict chip (chemical change)
 *  5 land: separation techniques mapped to the property each one exploits
 *  6 guardrail: the logic runs backward too (method used ⇒ what it must be)
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | question (script16 ink)      | T mid | x540  y100  [dims@b1]
 *  b1 | Q1 chip (dashed, 13)         | Chip  | x170..370 y103..133
 *  b1 | branch lines + no/yes tags   | Draw  | (170,133)→(170,164) / (370,133)→(390,164)
 *  b1 | "mixture"/"pure substance"   | Chip  | x120..220/310..470 y164..192
 *  b2 | Q2 chip (dashed)             | Chip  | x115..225 y210..238
 *  b2 | "heterogeneous"/"homogeneous"| Chip  | x55..165/195..305 y260..286
 *  b3 | Q3 chip (dashed)             | Chip  | x300..480 y210..238
 *  b3 | "element"/"compound"         | Chip  | x285..375/405..515 y260..286
 *  b4 | 3 checklist lines (13)       | T st  | x620  y140/165/190
 *  b4 | verdict chip (14, red bg)    | Chip  | x640..980 y212..248
 *  b5 | "separating a mixture" (13)  | T mid | x540  y325
 *  b5 | 5 technique lines (12)       | T mid | x270 y345/368/391 · x810 y345/368
 *  b6 | guardrail l1 (script15 red)  | T mid | x540  y468
 *  b6 | guardrail l2 (12 muted)      | T mid | x540  y492
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
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch01Sec4({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={60} size={25} fill={RED} script>
          {t("the classification routine", "classification ka routine")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} dim={beat >= 1} delay={dl(0, 0.4)}>
        <T x={540} y={100} size={16} fill={INK} script>
          {t("no formula here — just a repeatable routine", "yahaan formula nahi — bas ek repeatable routine")}
        </T>
      </Fade>

      {/* beat 1 — decision 1: fixed composition? */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <Chip x={170} y={103} w={200} h={30} fill={CREAM} stroke={AMBER} dashed textFill={INK} size={13} script={false}>
          {t("fixed composition?", "composition fixed hai?")}
        </Chip>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.1)} d="M 200 133 L 170 160" stroke={MUTED} sw={1.8} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 1.4)} d="M 340 133 L 390 160" stroke={MUTED} sw={1.8} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 1.8)}>
        <T x={155} y={152} size={11} fill={RED} script>no</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <T x={400} y={152} size={11} fill={GREEN} script>yes</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.3)}>
        <Chip x={120} y={164} w={100} h={28} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={13} script={false}>
          mixture
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.8)}>
        <Chip x={310} y={164} w={160} h={28} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={13} script={false}>
          {t("pure substance", "pure substance")}
        </Chip>
      </Fade>

      {/* beat 2 — decision 2 (only if mixture): uniform? */}
      <Draw on={beat >= 2} delay={dl(2, 0.2)} d="M 170 192 L 170 208" stroke={MUTED} sw={1.6} dur={0.3} />
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <Chip x={115} y={210} w={110} h={28} fill={CREAM} stroke={AMBER} dashed textFill={INK} size={12} script={false}>
          {t("uniform?", "uniform hai?")}
        </Chip>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.3)} d="M 140 238 L 100 258" stroke={MUTED} sw={1.6} dur={0.3} />
      <Draw on={beat >= 2} delay={dl(2, 1.6)} d="M 200 238 L 235 258" stroke={MUTED} sw={1.6} dur={0.3} />
      <Fade on={beat >= 2} delay={dl(2, 2.1)}>
        <Chip x={45} y={260} w={110} h={26} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={12} script={false}>
          heterogeneous
        </Chip>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.5)}>
        <Chip x={180} y={260} w={110} h={26} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={12} script={false}>
          homogeneous
        </Chip>
      </Fade>

      {/* beat 3 — decision 3 (only if pure substance): splits further? */}
      <Draw on={beat >= 3} delay={dl(3, 0.2)} d="M 390 192 L 390 208" stroke={MUTED} sw={1.6} dur={0.3} />
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <Chip x={300} y={210} w={180} h={28} fill={CREAM} stroke={AMBER} dashed textFill={INK} size={12} script={false}>
          {t("splits further (chem.)?", "chemically aur toot sakta hai?")}
        </Chip>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 1.3)} d="M 350 238 L 355 258" stroke={MUTED} sw={1.6} dur={0.3} />
      <Draw on={beat >= 3} delay={dl(3, 1.6)} d="M 430 238 L 480 258" stroke={MUTED} sw={1.6} dur={0.3} />
      <Fade on={beat >= 3} delay={dl(3, 2.1)}>
        <Chip x={310} y={260} w={90} h={26} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={12} script={false}>
          {t("no → element", "no → element")}
        </Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.5)}>
        <Chip x={425} y={260} w={110} h={26} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={12} script={false}>
          {t("yes → compound", "yes → compound")}
        </Chip>
      </Fade>

      {/* beat 4 — the OTHER routine: deciding change type */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={800} y={140} size={13} fill={INK} script anchor="start">
          {t("☐ new substance formed?", "☐ nayi substance bani?")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.1)}>
        <T x={800} y={165} size={13} fill={INK} script anchor="start">
          {t("☐ easily reversible?", "☐ aasani se reversible?")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.9)}>
        <T x={800} y={190} size={13} fill={INK} script anchor="start">
          {t("☐ energy change with the change?", "☐ energy change hua saath mein?")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.9)}>
        <Chip x={640} y={212} w={340} h={36} fill={RED} textFill="#fff" size={14} script={false}>
          {t("new ✓ + reversible ✗ → CHEMICAL change", "new ✓ + reversible ✗ → CHEMICAL change")}
        </Chip>
      </Fade>

      {/* beat 5 — land: separating mixtures by the property each exploits */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={322} size={13} fill={AMBER_DARK} script>
          {t("separating a mixture", "mixture ko alag karna")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={270} y={347} size={12} fill={MUTED} script>
          {t("filtration — particle size", "filtration — particle size")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.5)}>
        <T x={270} y={370} size={12} fill={MUTED} script>
          {t("evaporation/crystallisation — volatility & solubility", "evaporation/crystallisation — volatility & solubility")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <T x={270} y={393} size={12} fill={MUTED} script>
          {t("distillation — boiling point", "distillation — boiling point")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2.5)}>
        <T x={810} y={347} size={12} fill={MUTED} script>
          {t("magnetic separation — magnetism", "magnetic separation — magnetism")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 3)}>
        <T x={810} y={370} size={12} fill={MUTED} script>
          {t("chromatography — adsorption", "chromatography — adsorption")}
        </T>
      </Fade>

      {/* beat 6 — guardrail: the logic runs backward too */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={470} size={15} fill={RED} script>
          {t("the logic runs backward too", "logic ulti taraf bhi chalti hai")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={540} y={494} size={12} fill={MUTED} script>
          {t(
            "physical method worked → it was a mixture. needed a reaction → compound.",
            "physical method chal gaya → mixture tha. reaction lagi → compound tha."
          )}
        </T>
      </Fade>
    </Scene>
  );
}
