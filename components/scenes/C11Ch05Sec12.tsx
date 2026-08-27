/**
 * C11 Chemistry Ch05 · Section 12 — "The family of standard enthalpy
 * changes"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (board_reveal_at, en [0,9.98,23.55,34.39,46.68,61.95,74.58,86.95]):
 *  0 heading + underline (anchor): standard enthalpy changes, 1 bar
 *  1 card: Formation (ΔfH)
 *  2 card: Combustion (ΔcH)
 *  3 card: Neutralisation (≈ -57.1 kJ/mol, green)
 *  4 red note: why constant — only net reaction is H+ + OH- → H2O
 *  5 card: Phase transitions
 *  6 card: Bond enthalpy
 *  7 card: Lattice enthalpy
 *
 * Layout plan (3x2 grid, columns cx 210/540/870, w300):
 *  b0 | heading (18, w800) + underline | T mid+Draw | y81..100 (bl95); y105
 *  b1-3 | row1 cards                   | Draw+T     | y115..225
 *  b4 | red note chip (14)             | Chip       | x215..865 y250..290
 *  b5-7 | row2 cards                   | Draw+T     | y310..420
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
  GREEN,
  RED,
  CREAM,
  AMBER_DARK,
  Scene,
} from '@/components/scenes/kit';

const ROW1 = [
  { cx: 210, nameEn: "FORMATION (ΔfH)", nameHi: "FORMATION (ΔfH)",
    l1En: "1 mol compound from elements", l1Hi: "elements se 1 mol compound bane",
    l2En: "(ref state); elements = 0", l2Hi: "(ref state); elements = 0" },
  { cx: 540, nameEn: "COMBUSTION (ΔcH)", nameHi: "COMBUSTION (ΔcH)",
    l1En: "burn 1 mol completely in O2;", l1Hi: "1 mol ko O2 mein pura jalao;",
    l2En: "always negative", l2Hi: "hamesha negative" },
  { cx: 870, nameEn: "NEUTRALISATION", nameHi: "NEUTRALISATION",
    l1En: "strong acid + strong base", l1Hi: "strong acid + strong base",
    l2En: "≈ −57.1 kJ/mol", l2Hi: "≈ −57.1 kJ/mol", highlight: true },
];
const ROW2 = [
  { cx: 210, nameEn: "PHASE TRANSITIONS", nameHi: "PHASE TRANSITIONS",
    l1En: "fusion, vaporisation,", l1Hi: "fusion, vaporisation,",
    l2En: "sublimation = fusion+vap", l2Hi: "sublimation = fusion+vap" },
  { cx: 540, nameEn: "BOND ENTHALPY", nameHi: "BOND ENTHALPY",
    l1En: "break 1 mol bond (gas state);", l1Hi: "1 mol bond todna (gas state);",
    l2En: "polyatomics: MEAN value", l2Hi: "polyatomics: MEAN value" },
  { cx: 870, nameEn: "LATTICE ENTHALPY", nameHi: "LATTICE ENTHALPY",
    l1En: "1 mol ionic solid →", l1Hi: "1 mol ionic solid →",
    l2En: "gaseous ions (Born-Haber)", l2Hi: "gaseous ions (Born-Haber)" },
];
const CARD_W = 300;
const CARD_H = 110;

function Card({
  c, boxY, headBl, l1Bl, l2Bl, on, delay, t,
}: {
  c: { cx: number; nameEn: string; nameHi: string; l1En: string; l1Hi: string; l2En: string; l2Hi: string; highlight?: boolean };
  boxY: number; headBl: number; l1Bl: number; l2Bl: number;
  on: boolean; delay: number; t: (e: string, h: string) => string;
}) {
  return (
    <>
      <Draw
        on={on}
        delay={delay}
        d={`M ${c.cx - CARD_W / 2} ${boxY} h ${CARD_W} v ${CARD_H} h ${-CARD_W} z`}
        stroke={AMBER_DARK}
        sw={2}
        dur={0.5}
      />
      <Fade on={on} delay={delay + 0.4}>
        <T x={c.cx} y={headBl} size={15} weight={800} fill={INK}>
          {t(c.nameEn, c.nameHi)}
        </T>
        <T x={c.cx} y={l1Bl} size={14} fill={MUTED}>
          {t(c.l1En, c.l1Hi)}
        </T>
        <T x={c.cx} y={l2Bl} size={14} weight={c.highlight ? 700 : 400} fill={c.highlight ? GREEN : MUTED}>
          {t(c.l2En, c.l2Hi)}
        </T>
      </Fade>
    </>
  );
}

export default function C11Ch05Sec12({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={26} fill={RED} script>
          {t("family of standard enthalpy changes", "family of standard enthalpy changes")}
        </T>
      </Fade>

      {/* beat 0 — heading */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={95} size={18} weight={800} fill={INK}>
          {t("Standard enthalpy changes (1 bar, stated T)", "Standard enthalpy changes (1 bar, stated T)")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.5)} d="M 330 105 C 410 102, 670 102, 750 105" stroke={AMBER_DARK} sw={2} dur={0.5} />

      {/* beats 1-3 — row 1 cards */}
      {ROW1.map((c, i) => (
        <Card key={c.nameEn} c={c} boxY={115} headBl={145} l1Bl={175} l2Bl={202} on={beat >= 1 + i} delay={dl(1 + i, 0)} t={t} />
      ))}

      {/* beat 4 — red note */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <Chip x={215} y={250} w={650} h={40} fill={CREAM} stroke={RED} textFill={RED} size={14} script={false}>
          {t(
            "why constant? only net reaction: H⁺(aq) + OH⁻(aq) → H2O(l)",
            "constant kyun? sirf net reaction: H⁺(aq) + OH⁻(aq) → H2O(l)"
          )}
        </Chip>
      </Fade>

      {/* beats 5-7 — row 2 cards */}
      {ROW2.map((c, i) => (
        <Card key={c.nameEn} c={c} boxY={310} headBl={340} l1Bl={370} l2Bl={397} on={beat >= 5 + i} delay={dl(5 + i, 0)} t={t} />
      ))}
    </Scene>
  );
}
