/**
 * C11 Chemistry Ch04 · Section 3 — "Formal charge, bond order, and bond parameters"
 * Canvas 1080×620 · safe x36–1044, y30–596. section_type: formulas (card recap).
 *
 * Beats (en [0, 15.36, 38.49, 50.35, 75.18, 91.22, 109.99, 127.15]):
 *  0 subtitle: bonding rewards bookkeeping, not derivation
 *  1 FORMAL CHARGE card: FC = V − L − B/2 + definitions
 *  2 red check line inside same card: ΣFC = overall charge
 *  3 BOND ORDER card: definition + N₂/CO/NO⁺ = 3 example
 *  4 trend block (between order/length cards): BO↑ ⇒ enthalpy↑, length↓
 *  5 BOND LENGTH card: d(A-B) = r_A + r_B, 1 Å = 100 pm
 *  6 BOND ENTHALPY card: definition, kJ/mol, mean for identical bonds
 *  7 LATTICE ENTHALPY card: definition + charge/size dependence
 *
 * Layout plan:
 *  b1-2 | formal-charge card | Draw/T | x90..990  y114..218
 *  b3   | bond-order card    | Draw/T | x90..400  y232..322
 *  b4   | trend block        | T      | x410..660 y232..322
 *  b5   | bond-length card   | Draw/T | x680..990 y232..322
 *  b6   | bond-enthalpy card | Draw/T | x90..530  y336..446
 *  b7   | lattice card       | Draw/T | x550..990 y336..446
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch04Sec3({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={58} size={19} fill={RED} script>
          {t("The bond-parameter toolkit", "Bond-parameter toolkit")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 3.0)} d="M 390 80 C 460 76, 620 76, 690 80" stroke={RED} sw={2.2} dur={0.6} />

      {/* beat 0 — subtitle */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={100} size={13} fill={MUTED} script>
          {t("bonding rewards bookkeeping, not derivation", "bonding mein derivation kam, bookkeeping zyada")}
        </T>
      </Fade>

      {/* beat 1-2 — formal charge card */}
      <Draw on={beat >= 1} delay={dl(1, 0.2)} d="M 90 114 h 900 v 104 h -900 z" stroke={INK} sw={2} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={540} y={136} size={14} weight={800} fill={AMBER_DARK}>
          FORMAL CHARGE
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.2)}>
        <T x={540} y={168} size={22} weight={700} fill={INK}>
          FC = V − L − B/2
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.6)}>
        <T x={540} y={192} size={12} fill={MUTED}>
          {t(
            "V = valence e⁻ (free atom) · L = lone-pair e⁻ · B = bonding e⁻",
            "V = valence e⁻ (free atom) · L = lone-pair e⁻ · B = bonding e⁻"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={210} size={12} fill={RED}>
          {t("check: ΣFC = overall charge on species", "check: ΣFC = species ka overall charge")}
        </T>
      </Fade>

      {/* beat 3 — bond order card */}
      <Draw on={beat >= 3} delay={dl(3, 0.2)} d="M 90 232 h 310 v 90 h -310 z" stroke={INK} sw={2} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 0.7)}>
        <T x={245} y={254} size={13} weight={800} fill={AMBER_DARK}>
          BOND ORDER
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.1)}>
        <T x={245} y={276} size={12} fill={INK}>
          {t("= shared pairs between two atoms", "= do atoms ke beech shared pairs")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <T x={245} y={298} size={12} fill={MUTED}>
          N₂ · CO · NO⁺ → all BO = 3
        </T>
      </Fade>

      {/* beat 4 — trend block */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={535} y={266} size={12} weight={700} fill={INK}>
          {t("as BO rises:", "BO badhne par:")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.7)}>
        <T x={535} y={292} size={12} fill={GREEN}>
          ↑ {t("bond enthalpy", "bond enthalpy")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.1)}>
        <T x={535} y={314} size={12} fill={GREEN}>
          ↓ {t("bond length", "bond length")}
        </T>
      </Fade>

      {/* beat 5 — bond length card */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M 680 232 h 310 v 90 h -310 z" stroke={INK} sw={2} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 0.7)}>
        <T x={835} y={254} size={13} weight={800} fill={AMBER_DARK}>
          BOND LENGTH
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.1)}>
        <T x={835} y={280} size={16} weight={700} fill={INK}>
          d(A−B) = r_A + r_B
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.5)}>
        <T x={835} y={302} size={12} fill={MUTED}>
          1 Å = 100 pm
        </T>
      </Fade>

      {/* beat 6 — bond enthalpy card */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 90 336 h 440 v 110 h -440 z" stroke={INK} sw={2} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 0.7)}>
        <T x={310} y={360} size={14} weight={800} fill={AMBER_DARK}>
          BOND ENTHALPY
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.1)}>
        <T x={310} y={386} size={12} fill={INK}>
          {t(
            "energy to break 1 mol of a bond, gas state (kJ/mol)",
            "1 mol bond todne ki energy, gas state (kJ/mol)"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.5)}>
        <T x={310} y={410} size={12} fill={MUTED}>
          {t("several identical bonds → report the MEAN", "kai identical bonds → MEAN report karo")}
        </T>
      </Fade>

      {/* beat 7 — lattice enthalpy card */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 550 336 h 440 v 110 h -440 z" stroke={INK} sw={2} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 0.7)}>
        <T x={770} y={360} size={14} weight={800} fill={AMBER_DARK}>
          LATTICE ENTHALPY
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.1)}>
        <T x={770} y={386} size={12} fill={INK}>
          {t(
            "energy released: gaseous ions → 1 mol ionic solid",
            "release hoti energy: gaseous ions → 1 mol ionic solid"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.5)}>
        <T x={770} y={410} size={12} fill={RED}>
          ↑ {t("charge", "charge")}, ↓ {t("size", "size")} ⇒ ↑ {t("lattice enthalpy", "lattice enthalpy")}
        </T>
      </Fade>
    </Scene>
  );
}
