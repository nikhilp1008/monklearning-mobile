/**
 * C11 Ch06 · Section 57 — "Solubility product: 'insoluble' is never truly zero"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING_CHEMISTRY.md
 * + SCENE_AUTHORING.md. Callback to the heterogeneous pure-phase rule (Sec 5).
 *
 * Beats (board_reveal_at_english: [0, 7.3, 19.6, 27.8, 35.6, 49.4, 60.6]):
 *  0 title + underline
 *  1 3 "insoluble" salt chips: AgCl, BaSO4, CaF2 — dissolve a tiny bit!
 *  2 note: saturated — undissolved solid ⇌ faint trickle of ions
 *  3 equation: AgCl(s) ⇌ Ag⁺(aq) + Cl⁻(aq)
 *  4 Kc fraction, cross out [AgCl] (pure solid) — callback to Sec 5
 *  5 land, ringed: Ksp = [Ag⁺][Cl⁻]
 *  6 units note: M raised to total ions in the formula
 *
 * Layout plan (centered stack; longer language counts):
 *  b1 | 3 salt chips                | Chip   | x310..770 y105..143
 *  b1 | note (13, amber-dark)       | T mid  | y163..176 (bl 168)
 *  b2 | note (14, muted)            | T mid  | y191..206 (bl 195)
 *  b3 | equation (18, ink)          | T mid  | y216..236 (bl 230)
 *  b4 | Kc fraction, [AgCl] crossed | text   | x440..610 y258..314
 *  b5 | "Ksp=[Ag+][Cl-]" ringed(22) | T mid  | x438..642 y324..352 (bl 345)
 *  b6 | units (13, muted)           | T mid  | y383..397 (bl 400)
 */

import React from "react";
import { Line } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, crossD, ringD, INK, MUTED, AMBER, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch06Sec57({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={19} fill={RED} script>
          {t("'insoluble' is never truly zero", "'insoluble' kabhi bilkul zero nahi")}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 6)}
        d="M 430 84 C 480 80, 600 87, 650 83"
        stroke={RED}
        sw={2.4}
        dur={0.6}
      />

      {/* beat 1 — the "insoluble" salts */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <Chip x={310} y={105} w={140} h={38} fill={CREAM} stroke={AMBER} textFill={INK} size={15} script={false}>
          AgCl
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <Chip x={470} y={105} w={140} h={38} fill={CREAM} stroke={AMBER} textFill={INK} size={15} script={false}>
          BaSO₄
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.7)}>
        <Chip x={630} y={105} w={140} h={38} fill={CREAM} stroke={AMBER} textFill={INK} size={15} script={false}>
          CaF₂
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.1)}>
        <T x={540} y={168} size={13} fill={AMBER_DARK} anchor="middle">
          {t("dissolve a tiny bit!", "thoda sa dissolve hote!")}
        </T>
      </Fade>

      {/* beat 2 — the saturated equilibrium */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={195} size={14} fill={MUTED} anchor="middle">
          {t(
            "saturated: undissolved solid ⇌ faint trickle of ions",
            "saturated: undissolved solid ⇌ ions ki halki trickle"
          )}
        </T>
      </Fade>

      {/* beat 3 — the equation */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={230} size={18} fill={INK} weight={700} anchor="middle">
          AgCl(s) ⇌ Ag⁺(aq) + Cl⁻(aq)
        </T>
      </Fade>

      {/* beat 4 — the pure solid drops out (callback to Sec 5) */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={440} y={298} size={20} fill={INK} weight={700} anchor="end">
          Kc =
        </T>
        <T x={545} y={272} size={18} fill={INK} anchor="middle">
          [Ag⁺][Cl⁻]
        </T>
        <Line x1={480} y1={282} x2={610} y2={282} stroke={INK} strokeWidth={1.8} />
        <T x={545} y={308} size={18} fill={INK} anchor="middle">
          [AgCl]
        </T>
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 1)}
        d={crossD(505, 295, 80, 19)}
        stroke={RED}
        sw={2}
        dur={0.4}
      />

      {/* beat 5 — Ksp lands */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={345} size={22} fill={GREEN} weight={800} anchor="middle">
          Ksp = [Ag⁺][Cl⁻]
        </T>
      </Fade>
      <Draw
        on={beat >= 5}
        delay={dl(5, 1.1)}
        d={ringD(540, 340, 102, 24)}
        stroke={GREEN}
        sw={2.4}
        dur={0.8}
      />

      {/* beat 6 — the units */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={400} size={13} fill={MUTED} anchor="middle">
          {t(
            "units = M raised to the total number of ions in the formula",
            "units = M ki power, formula mein total ions ke barabar"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
