/**
 * C11 Ch01 · Section 25 — "Gay-Lussac, Avogadro and the diatomic gases"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (en [0,7.6,25.6,45.74,69.29,93.36,114.27,139.1,157.87]):
 *  0 anchor: the twist — atom and molecule finally separate
 *  1 Gay-Lussac (1808): 2 vol H₂ + 1 vol O₂ → 2 vol H₂O
 *  2 conflict: Dalton's bricks need HALF an oxygen atom — impossible
 *  3 the cleanest evidence: H₂ + Cl₂ drawn (reactant molecules, bond by bond)
 *  4 → 2 HCl drawn; conclusion: each molecule splits, H₂/Cl₂ are diatomic
 *  5 Avogadro (1811): equal volumes = equal molecules; elemental gases diatomic
 *  6 atom / molecule / atomicity definitions
 *  7 backwards deduction: O,N diatomic · noble gases monoatomic · ozone triatomic
 *  8 guardrail: gases only, same T & P — nothing about solids/liquids
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | anchor (script13 ink)        | T mid | x540  y86
 *  b1 | law (script13 ink)           | T mid | x540  y108
 *  b2 | conflict (script13 red)      | T mid | x540  y130
 *  b3 | caption (script12 ink)       | T mid | x540  y155
 *  b3 | H₂/Cl₂ bonds+circles         | Draw  | cy190 x355..466
 *  b3 | reactant label (12 muted)    | T mid | x405  y215
 *  b4 | arrow                        | Draw  | x495..600 y190
 *  b4 | HCl×2 bonds+circles          | Draw  | cy190 x630..724
 *  b4 | product label (12 muted)     | T mid | x672  y215
 *  b4 | conclusion (script13 green)  | T mid | x540  y245
 *  b5 | Avogadro (script13 ink)      | T mid | x540  y275
 *  b6 | def l1/l2/l3 (13 ink)        | T mid | x540  y300/322/344
 *  b7 | deduction (script12 muted)   | T mid | x540  y372
 *  b8 | guardrail (script13 red)     | T mid | x540  y400
 */

import React from "react";
import { Circle } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';
import { bondD, ReactionArrow } from "./chem-kit";

const CY = 190;
const RH = 7;
const RCL = 10;

export default function C11Ch01Sec25({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={58} size={19} fill={RED} script>
          {t("Gay-Lussac, Avogadro and the diatomic gases", "Gay-Lussac, Avogadro aur diatomic gases")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={86} size={13} fill={INK} script>
          {t("the twist — atom and molecule finally separate", "twist — jahan atom aur molecule aakhirkar alag hote hain")}
        </T>
      </Fade>

      {/* beat 1 — Gay-Lussac's law */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={540} y={108} size={13} fill={INK} script>
          {t("Gay-Lussac (1808): 2 vol H₂ + 1 vol O₂ → 2 vol H₂O vapour (same T, P)", "Gay-Lussac (1808): 2 vol H₂ + 1 vol O₂ → 2 vol H₂O vapour (same T, P)")}
        </T>
      </Fade>

      {/* beat 2 — conflict with Dalton */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={130} size={13} fill={RED} script>
          {t(
            "Dalton's bricks fail: 2H+1O→2 particles needs HALF an O atom — impossible!",
            "Dalton ki bricks fail: 2H+1O→2 particles ko AADHA O atom chahiye — impossible!"
          )}
        </T>
      </Fade>

      {/* beat 3 — the cleanest evidence: reactant molecules H2, Cl2 */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={155} size={12} fill={INK} script>
          {t("the cleanest evidence: hydrogen chloride", "sabse saaf evidence: hydrogen chloride")}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 1)} d={bondD(355, CY, 379, CY)} stroke={INK} sw={2} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 1.3)}>
        <Circle cx={355} cy={CY} r={RH} fill={INK} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.4)}>
        <Circle cx={379} cy={CY} r={RH} fill={INK} />
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 1.8)} d={bondD(440, CY, 466, CY)} stroke={AMBER_DARK} sw={2} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 2.1)}>
        <Circle cx={440} cy={CY} r={RCL} fill={AMBER_DARK} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.2)}>
        <Circle cx={466} cy={CY} r={RCL} fill={AMBER_DARK} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.8)}>
        <T x={410} y={218} size={12} fill={MUTED} script>
          1 vol H₂ + 1 vol Cl₂
        </T>
      </Fade>

      {/* beat 4 — arrow, product molecules, conclusion */}
      <ReactionArrow on={beat >= 4} delay={dl(4, 0.3)} x1={495} x2={600} y={CY} color={INK} />
      <Draw on={beat >= 4} delay={dl(4, 1)} d={bondD(630, CY, 654, CY)} stroke={INK} sw={2} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 1.3)}>
        <Circle cx={630} cy={CY} r={RH} fill={INK} />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.4)}>
        <Circle cx={654} cy={CY} r={RCL} fill={AMBER_DARK} />
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1.8)} d={bondD(690, CY, 714, CY)} stroke={INK} sw={2} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 2.1)}>
        <Circle cx={690} cy={CY} r={RH} fill={INK} />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.2)}>
        <Circle cx={714} cy={CY} r={RCL} fill={AMBER_DARK} />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.8)}>
        <T x={672} y={218} size={12} fill={MUTED} script>
          2 vol HCl
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 3.6)}>
        <T x={540} y={248} size={13} fill={GREEN} script>
          {t("each molecule SPLITS — H₂, Cl₂ are DIATOMIC", "har molecule SPLIT hota — H₂, Cl₂ DIATOMIC hain")}
        </T>
      </Fade>

      {/* beat 5 — Avogadro's resolution */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={278} size={13} fill={INK} script>
          {t(
            "Avogadro (1811): equal volumes = equal molecules (same T,P) — elemental gases are DIATOMIC",
            "Avogadro (1811): equal volumes = equal molecules (same T,P) — elemental gases DIATOMIC hain"
          )}
        </T>
      </Fade>

      {/* beat 6 — atom / molecule / atomicity definitions */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={305} size={13} fill={INK} weight={700} script={false}>
          {t("ATOM = smallest particle of an element in a reaction", "ATOM = element ka smallest particle jo reaction mein bhaag le")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={540} y={327} size={13} fill={INK} weight={700} script={false}>
          {t("MOLECULE = smallest particle capable of independent existence", "MOLECULE = smallest particle jo independently exist kare")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.7)}>
        <T x={540} y={349} size={13} fill={INK} weight={700} script={false}>
          ATOMICITY = atoms per molecule: He=1, O₂=2, O₃=3
        </T>
      </Fade>

      {/* beat 7 — backwards deduction */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={540} y={377} size={12} fill={MUTED} script>
          {t(
            "same logic, reversed: O & N → diatomic · noble gases → monoatomic · ozone → triatomic",
            "same logic, ulta: O & N → diatomic · noble gases → monoatomic · ozone → triatomic"
          )}
        </T>
      </Fade>

      {/* beat 8 — guardrail: gases only */}
      <Fade on={beat >= 8} delay={dl(8, 0.4)}>
        <T x={540} y={405} size={13} fill={RED} script>
          {t(
            "GASES ONLY, same T & P — says NOTHING about solids or liquids",
            "sirf GASES, same T & P — solids ya liquids ke baare mein KUCH nahi kehta"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
