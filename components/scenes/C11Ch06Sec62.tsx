/**
 * C11 Ch06 · Section 62 — "Selective precipitation: the smaller Ksp goes first"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING_CHEMISTRY.md
 * + SCENE_AUTHORING.md.
 *
 * Beats (board_reveal_at_english: [0, 7.3, 18.1, 28.2, 35.7, 48.4, 56.6]):
 *  0 title + underline
 *  1 rule: one reagent, two ions → smaller Ksp saturates FIRST
 *  2 axis: [Ag+] increasing →, AgCl threshold (low) vs Ag2CrO4 (high)
 *  3 reason: smaller Ksp needs LESS added ion to crash out
 *  4 shaded zone: Cl⁻ selectively removed here
 *  5 result: Cl⁻ ~completely removed before CrO4²⁻ even starts
 *  6 application chip: qual. analysis groups + Mohr titration endpoint
 *
 * Layout plan (centered stack; longer language counts):
 *  b1 | rule (15, ink)              | T mid  | y95..117 (bl 110)
 *  b2 | axis + 2 threshold ticks    | Draw   | x150..930 y185..225
 *  b2 | marker labels (12)          | T mid  | y163..179 (bl 175)
 *  b2 | axis label (13, muted)      | T mid  | y233..249 (bl 245)
 *  b3 | reason (14, muted)          | T mid  | y267..283 (bl 278)
 *  b4 | shaded zone + label (13,gr) | Fade/T | x320..780 y196..204, label bl 310
 *  b5 | result (14, green-dark)     | T mid  | y329..345 (bl 340)
 *  b6 | application chip (amber)    | rect   | x210..870 y370..412
 */

import React from "react";
import { Rect } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, arrowD, INK, MUTED, AMBER, AMBER_DARK, GREEN, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch06Sec62({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={19} fill={RED} script>
          {t("selective precipitation: smaller Ksp first", "selective precipitation: chhota Ksp pehle")}
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

      {/* beat 1 — the rule */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={540} y={110} size={15} fill={INK} anchor="middle">
          {t(
            "one reagent, two ions → smaller Ksp saturates FIRST",
            "ek reagent, do ions → chhota Ksp pehle saturate hota"
          )}
        </T>
      </Fade>

      {/* beat 2 — the axis with two thresholds */}
      <Draw on={beat >= 2} delay={dl(2, 0.3)} d={arrowD(150, 200, 930, 200)} stroke={INK} sw={2} dur={0.6} />
      <Draw on={beat >= 2} delay={dl(2, 0.8)} d="M 320 185 V 225" stroke={RED} sw={2.4} dur={0.4} />
      <Draw on={beat >= 2} delay={dl(2, 1.1)} d="M 780 185 V 225" stroke={AMBER_DARK} sw={2.4} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 1.5)}>
        <T x={320} y={175} size={12} fill={RED} anchor="middle">
          {t("AgCl starts", "AgCl starts")}
        </T>
        <T x={780} y={175} size={12} fill={AMBER_DARK} anchor="middle">
          {t("Ag₂CrO₄ starts", "Ag₂CrO₄ starts")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.9)}>
        <T x={540} y={245} size={13} fill={MUTED} anchor="middle">
          {t("[Ag⁺] increasing →", "[Ag⁺] badhta ja raha →")}
        </T>
      </Fade>

      {/* beat 3 — the reason */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={278} size={14} fill={MUTED} anchor="middle">
          {t(
            "smaller Ksp needs LESS added ion to crash out",
            "chhota Ksp KAM added ion mein crash out karta"
          )}
        </T>
      </Fade>

      {/* beat 4 — the selective-removal zone */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <Rect x={320} y={196} width={460} height={8} fill={GREEN} opacity={0.4} />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={550} y={310} size={13} fill={GREEN_DARK} anchor="middle">
          {t("Cl⁻ selectively removed here", "Cl⁻ yahaan selectively remove hota")}
        </T>
      </Fade>

      {/* beat 5 — the result */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={340} size={14} fill={GREEN_DARK} anchor="middle">
          {t(
            "Cl⁻ ~completely removed before CrO₄²⁻ even starts",
            "Cl⁻ ~poori tarah remove, CrO₄²⁻ shuru hone se pehle"
          )}
        </T>
      </Fade>

      {/* beat 6 — the application */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Rect x={210} y={370} width={660} height={42} rx={10} fill={CREAM} stroke={AMBER} strokeWidth={1.8} />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={540} y={396} size={14} fill={AMBER_DARK} weight={600} anchor="middle">
          {t(
            "qualitative analysis groups + Mohr titration endpoint",
            "qualitative analysis groups + Mohr titration endpoint"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
