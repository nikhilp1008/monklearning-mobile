/**
 * C11 Ch06 · Section 46 — "Polyprotic acids: why each step is harder"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING_CHEMISTRY.md
 * + SCENE_AUTHORING.md.
 *
 * Beats (board_reveal_at_english: [0, 6.1, 15.5, 26.8, 40, 47.7, 61.9]):
 *  0 title + underline
 *  1 the cliff: Ka1 ≫ Ka2 ≫ Ka3 as three descending bars
 *  2 reason 1: electrostatic — harder to pull + off an already − ion
 *  3 reason 2: H⁺ from step 1 = common ion for step 2 → suppresses it
 *  4 insight: common-ion effect INSIDE the same molecule
 *  5 payoff, boxed: pH governed almost entirely by the FIRST ionization
 *  6 conclusion: rarely need Ka2 or Ka3 for pH
 *
 * Layout plan (centered stack; longer language counts):
 *  b1 | 3 bars (cliff) + baseline   | Draw   | x180..900 y140..280
 *  b1 | bar labels Ka1/Ka2/Ka3 (13) | T mid  | y294..307 (bl 298)
 *  b2 | reason1 (14, ink)           | T mid  | y320..335 (bl 326)
 *  b3 | reason2 (14, ink)           | T mid  | y352..367 (bl 358)
 *  b4 | insight (14, amber, script) | T mid  | y378..396 (bl 392)
 *  b5 | payoff box (green)          | rect   | x210..870 y420..462
 *  b6 | conclusion (15, green)      | T mid  | y485..500 (bl 490)
 */

import React from "react";
import { Rect } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER_DARK, GREEN, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch06Sec46({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={21} fill={RED} script>
          {t("polyprotic acids: the Ka cliff", "polyprotic acids: Ka ka cliff")}
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

      {/* beat 1 — the cliff */}
      <Draw on={beat >= 1} delay={dl(1, 0.2)} d="M 180 280 H 900" stroke={INK} sw={1.6} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 0.5)} d="M 210 140 H 300 V 280 H 210 Z" stroke={RED} sw={2} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <Rect x={212} y={142} width={86} height={136} fill={RED} opacity={0.18} />
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.2)} d="M 500 220 H 590 V 280 H 500 Z" stroke={AMBER_DARK} sw={2} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 1.6)}>
        <Rect x={502} y={222} width={86} height={56} fill={AMBER_DARK} opacity={0.18} />
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.9)} d="M 790 267 H 880 V 280 H 790 Z" stroke={MUTED} sw={2} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 2.2)}>
        <Rect x={792} y={269} width={86} height={9} fill={MUTED} opacity={0.3} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.5)}>
        <T x={255} y={298} size={13} fill={RED} weight={700} anchor="middle">Ka1</T>
        <T x={400} y={215} size={16} fill={MUTED} anchor="middle">≫</T>
        <T x={545} y={298} size={13} fill={AMBER_DARK} weight={700} anchor="middle">Ka2</T>
        <T x={690} y={250} size={16} fill={MUTED} anchor="middle">≫</T>
        <T x={835} y={298} size={13} fill={MUTED} weight={700} anchor="middle">Ka3</T>
      </Fade>

      {/* beat 2 — reason 1 */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={326} size={14} fill={INK} anchor="middle">
          {t(
            "① electrostatic: harder to pull + off an already − ion",
            "① electrostatic: pehle se − ion se + kheenchna harder"
          )}
        </T>
      </Fade>

      {/* beat 3 — reason 2 */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={358} size={14} fill={INK} anchor="middle">
          {t(
            "② H⁺ from step 1 = common ion for step 2 → suppresses it",
            "② step 1 ka H⁺ = step 2 ka common ion → usse suppress karta"
          )}
        </T>
      </Fade>

      {/* beat 4 — the insight */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={392} size={14} fill={AMBER_DARK} script anchor="middle">
          {t(
            "common-ion effect — INSIDE the same molecule!",
            "common-ion effect — SAME molecule ke andar!"
          )}
        </T>
      </Fade>

      {/* beat 5 — the payoff */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Rect x={210} y={420} width={660} height={42} rx={10} fill={CREAM} stroke={GREEN} strokeWidth={1.8} />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={540} y={446} size={15} fill={GREEN_DARK} weight={600} anchor="middle">
          {t(
            "pH is governed almost entirely by the FIRST ionization",
            "pH lagbhag poori tarah PEHLI ionization se decide hoti"
          )}
        </T>
      </Fade>

      {/* beat 6 — the conclusion */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={490} size={15} fill={GREEN} weight={700} anchor="middle">
          {t("rarely need Ka2 or Ka3 for pH", "pH ke liye Ka2 ya Ka3 shayad hi chahiye")}
        </T>
      </Fade>
    </Scene>
  );
}
