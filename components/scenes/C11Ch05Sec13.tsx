/**
 * C11 Chemistry Ch05 · Section 13 — "Three engines: Hess algebra, bond
 * enthalpies, and Born-Haber"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (board_reveal_at, en [0,8.36,14.08,25,30.38,52.05,59.48,73.47]):
 *  0 panel1 heading + underline: Hess algebra, three legal moves
 *  1 rule chip: REVERSE ⇒ REVERSE sign (red, emphasis high)
 *  2 rules text: MULTIPLY by k / ADD equations
 *  3 panel2 heading + underline: bond-enthalpy method
 *  4 red note: atomise reactants / assemble products, all gaseous
 *  5 panel3 heading + underline: Born-Haber loop for MX
 *  6 order text: sublime → ionise → dissociate → add e⁻ → lattice
 *  7 red note: sign discipline
 *
 * Layout plan (three stacked panels, centered x540):
 *  b0 | heading1 (17,w800) + underline | y86..106 (bl100); y108
 *  b1 | rule1 chip (14, red)           | Chip | x300..780 y118..148
 *  b2 | rules2&3 (14, ink)             | T mid | y167..182 (bl178)
 *  b3 | heading2 (17,w800) + underline | y216..236 (bl230); y238
 *  b4 | red note2 chip (14)            | Chip | x170..870 y250..295
 *  b5 | heading3 (17,w800) + underline | y336..356 (bl350); y358
 *  b6 | order text (14, ink)           | T mid | y374..389 (bl385)
 *  b7 | red note3 chip (14)            | Chip | x140..900 y400..445
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
  RED,
  CREAM,
  AMBER_DARK,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch05Sec13({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={26} fill={RED} script>
          {t("three engines of thermochemistry", "three engines of thermochemistry")}
        </T>
      </Fade>

      {/* beat 0 — panel 1 heading */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={100} size={17} weight={800} fill={INK}>
          {t("Hess algebra: three legal moves", "Hess algebra: teen legal moves")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.5)} d="M 400 108 C 460 105, 620 105, 680 108" stroke={AMBER_DARK} sw={2} dur={0.5} />

      {/* beat 1 — reverse rule */}
      <Fade on={beat >= 1} delay={dl(1, 0.1)}>
        <Chip x={300} y={118} w={480} h={30} fill={CREAM} stroke={RED} textFill={RED} size={14} script={false}>
          {t("REVERSE equation ⇒ REVERSE sign of ΔH", "REVERSE equation ⇒ REVERSE sign of ΔH")}
        </Chip>
      </Fade>

      {/* beat 2 — multiply/add rules */}
      <Fade on={beat >= 2} delay={dl(2, 0.1)}>
        <T x={540} y={178} size={14} fill={INK}>
          {t("MULTIPLY by k ⇒ ΔH × k   ·   ADD equations ⇒ ADD ΔH", "MULTIPLY by k ⇒ ΔH × k   ·   ADD equations ⇒ ADD ΔH")}
        </T>
      </Fade>

      {/* beat 3 — panel 2 heading */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={540} y={230} size={17} weight={800} fill={INK}>
          {t("Bond-enthalpy method (gaseous species)", "Bond-enthalpy method (gaseous species)")}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 0.5)} d="M 370 238 C 430 235, 650 235, 710 238" stroke={AMBER_DARK} sw={2} dur={0.5} />

      {/* beat 4 — red note: atomise / assemble */}
      <Fade on={beat >= 4} delay={dl(4, 0.1)}>
        <Chip x={170} y={250} w={700} h={45} fill={CREAM} stroke={RED} textFill={RED} size={14} script={false}>
          {t(
            "atomise reactants (cost), assemble products (release); count EVERY bond, all gaseous",
            "reactants atomise karo (cost), products assemble karo (release); har bond count karo, sab gaseous"
          )}
        </Chip>
      </Fade>

      {/* beat 5 — panel 3 heading */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={540} y={350} size={17} weight={800} fill={INK}>
          {t("Born-Haber loop for an ionic solid MX", "Born-Haber loop, ionic solid MX ke liye")}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 0.5)} d="M 375 358 C 435 355, 645 355, 705 358" stroke={AMBER_DARK} sw={2} dur={0.5} />

      {/* beat 6 — order sequence */}
      <Fade on={beat >= 6} delay={dl(6, 0.1)}>
        <T x={540} y={385} size={14} fill={INK}>
          {t(
            "sublime metal → ionise → dissociate ½X2 → add e⁻ to X → lattice forms",
            "metal sublime → ionise → ½X2 dissociate → X ko e⁻ do → lattice bane"
          )}
        </T>
      </Fade>

      {/* beat 7 — red note: sign discipline */}
      <Fade on={beat >= 7} delay={dl(7, 0.1)}>
        <Chip x={140} y={400} w={760} h={45} fill={CREAM} stroke={RED} textFill={RED} size={14} script={false}>
          {t(
            "sign discipline: sublimation, ionisation, dissociation = + ; electron gain, lattice formation = −",
            "sign discipline: sublimation, ionisation, dissociation = + ; electron gain, lattice formation = −"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
