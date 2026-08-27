/**
 * C11 Ch06 · Section 65 — "Precipitation criterion and salt-hydrolysis pH"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING_CHEMISTRY.md
 * + SCENE_AUTHORING.md.
 *
 * Beats (board_reveal_at_english: [0, 6.6, 23.8, 33.1, 52.8, 63.7, 75.8]):
 *  0 title + underline
 *  1 3 chips: Q>Ksp precipitate; Q=Ksp saturated; Q<Ksp unsaturated
 *  2 note: Q = same expression, CURRENT concentrations
 *  3 Kh = Kw/Ka (WA+SB) or Kw/Kb (SA+WB); h = √(Kh/c)
 *  4 land, ringed (green): pH = 7 + ½(pKa + log c) [basic]
 *  5 land, ringed (red): pH = 7 − ½(pKb + log c) [acidic]
 *  6 guardrail, boxed: half-pK term always POSITIVE → stronger parent wins
 *
 * Layout plan (centered stack; longer language counts):
 *  b1 | 3 criterion chips           | Chip   | x145..935 y110..146
 *  b2 | note (13, muted)            | T mid  | y161..176 (bl 175)
 *  b3 | Kh formulas (14, ink)       | T mid  | y196..211 (bl 210)
 *  b4 | basic pH ringed (18, green) | T mid  | x377..703 y241..261 (bl 255)
 *  b5 | acidic pH ringed (18, red)  | T mid  | x377..703 y306..326 (bl 320)
 *  b6 | guardrail box (amber)       | rect   | x170..910 y370..412
 */

import React from "react";
import { Rect } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, ringD, INK, MUTED, AMBER, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch06Sec65({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={18} fill={RED} script>
          {t("precipitation criterion & salt-hydrolysis pH", "precipitation criterion aur salt-hydrolysis pH")}
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

      {/* beat 1 — the three-way criterion */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <Chip x={145} y={110} w={250} h={36} fill={CREAM} stroke={RED} textFill={RED} size={13} script={false}>
          Q &gt; Ksp → PRECIPITATE
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <Chip x={415} y={110} w={250} h={36} fill={CREAM} stroke={AMBER_DARK} textFill={AMBER_DARK} size={13} script={false}>
          Q = Ksp → SATURATED
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <Chip x={685} y={110} w={250} h={36} fill={CREAM} stroke={GREEN} textFill={GREEN} size={13} script={false}>
          Q &lt; Ksp → UNSATURATED
        </Chip>
      </Fade>

      {/* beat 2 — Q defined */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={175} size={13} fill={MUTED} anchor="middle">
          {t(
            "Q = same expression, built from CURRENT concentrations",
            "Q = wahi expression, CURRENT concentrations se banta"
          )}
        </T>
      </Fade>

      {/* beat 3 — the hydrolysis constant */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={210} size={14} fill={INK} anchor="middle">
          Kh = Kw/Ka (WA+SB)  or  Kw/Kb (SA+WB);  h = √(Kh/c)
        </T>
      </Fade>

      {/* beat 4 — the basic-salt pH */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={255} size={18} fill={GREEN} weight={800} anchor="middle">
          pH = 7 + ½(pKa + log c)  [basic]
        </T>
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 1.1)}
        d={ringD(540, 250, 163, 22)}
        stroke={GREEN}
        sw={2.2}
        dur={0.7}
      />

      {/* beat 5 — the acidic-salt pH */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={320} size={18} fill={RED} weight={800} anchor="middle">
          pH = 7 − ½(pKb + log c)  [acidic]
        </T>
      </Fade>
      <Draw
        on={beat >= 5}
        delay={dl(5, 1.1)}
        d={ringD(540, 315, 163, 22)}
        stroke={RED}
        sw={2.2}
        dur={0.7}
      />

      {/* beat 6 — the guardrail */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Rect x={170} y={370} width={740} height={42} rx={10} fill={CREAM} stroke={AMBER} strokeWidth={1.8} />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={540} y={396} size={14} fill={AMBER_DARK} weight={600} anchor="middle">
          {t(
            "half-pK term always POSITIVE → stronger parent wins",
            "half-pK term hamesha POSITIVE → stronger parent jeetta"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
