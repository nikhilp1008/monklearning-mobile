/**
 * C11 Ch01 · Section 32 — "The mole as a universal hub"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (en [0,5.89,27.31,49.75,74.41,95.75,114.95,139.78]):
 *  0 anchor: the working skill — one reliable route
 *  1 the hub-and-spokes: MASS/NUMBER/VOLUME nodes + conversion labels
 *  2 MOLES lands at the centre; never jump mass→number directly
 *  3 the trap: atoms of an element = mol × count-per-molecule × Nₐ (H₂O example)
 *  4 the forgotten step: multiply by the formula count; read the noun
 *  5 molar volume limits: gas only, STP only, ideal-gas assumed
 *  6 STP caution: old 22.4 L vs IUPAC 22.7 L
 *  7 vapour density: M = 2 × VD
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | anchor (script13 ink)        | T mid | x540  y88
 *  b1 | MASS/NUMBER/VOLUME chips     | Chip  | x150..320 y121..155 (MASS)
 *                                            | x710..880 y121..155 (NUMBER)
 *                                            | x435..645 y278..312 (VOLUME)
 *  b1 | spokes + labels              | Draw/T| to MOLES centre
 *  b2 | MOLES chip (bold, amber)     | Chip  | x470..610 y191..229
 *  b2 | caption (script12 red)       | T mid | x540  y332
 *  b3 | l1/l2 (script12/13 ink)      | T mid | x540  y360/383
 *  b4 | l1/l2 (script12 amber/muted) | T mid | x540  y408/431
 *  b5 | l (script12 red)             | T mid | x540  y456
 *  b6 | l (script12 muted)           | T mid | x540  y479
 *  b7 | l (script13 ink bold)        | T mid | x540  y502
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, MUTED, AMBER, AMBER_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch01Sec32({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={60} size={21} fill={RED} script>
          {t("the mole as a universal hub", "the mole ek universal hub ke roop mein")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={88} size={13} fill={INK} script>
          {t("the working skill: one reliable route through any problem", "kaam ki skill: kisi bhi problem ka ek bharosemand raasta")}
        </T>
      </Fade>

      {/* beat 1 — outer nodes + spokes toward the centre */}
      <Draw on={beat >= 1} delay={dl(1, 0.3)} d="M 320 152 L 475 200" stroke={MUTED} sw={1.8} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 0.6)} d="M 710 152 L 605 200" stroke={MUTED} sw={1.8} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 0.9)} d="M 540 278 L 540 233" stroke={MUTED} sw={1.8} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 1.3)}>
        <Chip x={150} y={121} w={170} h={34} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={13} script={false}>
          MASS (g)
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.7)}>
        <Chip x={710} y={121} w={170} h={34} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={13} script={false}>
          {t("NUMBER (particles)", "NUMBER (particles)")}
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.1)}>
        <Chip x={435} y={278} w={210} h={34} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={13} script={false}>
          {t("VOLUME (gas, STP)", "VOLUME (gas, STP)")}
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.6)}>
        <T x={375} y={162} size={12} fill={AMBER_DARK} script>
          ÷ M
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.8)}>
        <T x={690} y={162} size={12} fill={AMBER_DARK} script>
          ÷ Nₐ
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3)}>
        <T x={585} y={258} size={12} fill={AMBER_DARK} script>
          ÷ 22.4 (STP)
        </T>
      </Fade>

      {/* beat 2 — MOLES lands at the centre */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <Chip x={470} y={191} w={140} h={38} fill={AMBER} stroke={INK} textFill={INK} size={16} script={false}>
          MOLES
        </Chip>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.2)}>
        <T x={540} y={332} size={12} fill={RED} script>
          {t(
            "MOLES = the central station — never jump mass→number directly!",
            "MOLES = central station — mass→number seedha mat kudo!"
          )}
        </T>
      </Fade>

      {/* beat 3 — the atoms-of-an-element trap */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={360} size={12} fill={INK} script>
          atoms of X = mol(molecules) × (count of X per molecule) × Nₐ
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.1)}>
        <T x={540} y={383} size={13} fill={INK} weight={700} script={false}>
          H₂O: 1 mol → 2×Nₐ H atoms + 1×Nₐ O atoms = 3 mol atoms
        </T>
      </Fade>

      {/* beat 4 — the forgotten step */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={408} size={12} fill={AMBER_DARK} script>
          {t(
            "the forgotten step: × (atom count in the formula) — read the NOUN carefully!",
            "bhoola hua step: × (formula mein atom count) — NOUN dhyaan se padho!"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.2)}>
        <T x={540} y={431} size={12} fill={MUTED} script>
          {t(
            "“molecules” ≠ “atoms” — they differ by the atomicity/formula count",
            "“molecules” ≠ “atoms” — atomicity/formula count se alag hote hain"
          )}
        </T>
      </Fade>

      {/* beat 5 — molar volume limits */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={456} size={12} fill={RED} script>
          {t(
            "22.4 L/mol: ONLY gas, ONLY at STP, ideal-gas assumed — meaningless for solids/liquids!",
            "22.4 L/mol: SIRF gas, SIRF STP par, ideal-gas assumed — solids/liquids ke liye bekaar!"
          )}
        </T>
      </Fade>

      {/* beat 6 — STP caution */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={479} size={12} fill={MUTED} script>
          {t(
            "old STP (0°C,1atm)=22.4L · new IUPAC (0°C,1bar)=22.7L — exams mean 22.4, but READ",
            "old STP (0°C,1atm)=22.4L · new IUPAC (0°C,1bar)=22.7L — exams 22.4 maante, par PADHO"
          )}
        </T>
      </Fade>

      {/* beat 7 — vapour density */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={540} y={502} size={13} fill={INK} weight={700} script={false}>
          vapour density = density(gas)/density(H₂) = ½ molar mass ⇒ M = 2 × VD
        </T>
      </Fade>
    </Scene>
  );
}
