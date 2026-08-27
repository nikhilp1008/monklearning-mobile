/**
 * C11 Ch06 · Section 61 — "Common-ion effect on solubility"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING_CHEMISTRY.md
 * + SCENE_AUTHORING.md.
 *
 * Beats (board_reveal_at_english: [0, 7.2, 19, 31.7, 43.9, 50.9, 59.7]):
 *  0 title + underline
 *  1 rule: + common ion → solubility PLUMMETS (Le Chatelier suppression)
 *  2 AgCl setup: [Cl-] fixed by ADDED salt, not by AgCl itself
 *  3 land, ringed: Ksp = [Ag+][Cl-] = s' × [Cl-]added
 *  4 consequence: s' ≪ pure-water solubility
 *  5 practical rule, boxed: wash precipitate with DILUTE common-ion solution
 *  6 guardrail, boxed: pure water washing dissolves precipitate — lose material!
 *
 * Layout plan (centered stack; longer language counts):
 *  b1 | rule (15, amber-dark)       | T mid  | y100..117 (bl 112)
 *  b2 | AgCl setup (14, muted)      | T mid  | y138..154 (bl 150)
 *  b3 | landed result ringed (20)   | T mid  | x356..724 y174..201 (bl 195)
 *  b4 | consequence (15, ink)       | T mid  | y233..250 (bl 250)
 *  b5 | practical box (green)       | rect   | x210..870 y280..322
 *  b6 | guardrail box (red)         | rect   | x170..910 y350..392
 */

import React from "react";
import { Rect } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER_DARK, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch06Sec61({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={20} fill={RED} script>
          {t("common-ion effect on solubility", "solubility par common-ion effect")}
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
        <T x={540} y={112} size={15} fill={AMBER_DARK} anchor="middle">
          {t(
            "+ common ion → solubility PLUMMETS (Le Chatelier suppression)",
            "+ common ion → solubility PLUMMET karta (Le Chatelier suppression)"
          )}
        </T>
      </Fade>

      {/* beat 2 — the AgCl setup */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={150} size={14} fill={MUTED} anchor="middle">
          {t(
            "AgCl: [Cl⁻] fixed by ADDED salt, not by AgCl itself",
            "AgCl: [Cl⁻] ADDED salt se fixed, AgCl se nahi"
          )}
        </T>
      </Fade>

      {/* beat 3 — the landed relation */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={195} size={20} fill={GREEN_DARK} weight={800} anchor="middle">
          Ksp = [Ag⁺][Cl⁻] = s′ × [Cl⁻]added
        </T>
      </Fade>
      {/* beat 4 — the consequence */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={250} size={15} fill={INK} anchor="middle">
          {t("s′ ≪ pure-water solubility", "s′ ≪ pure-water solubility")}
        </T>
      </Fade>

      {/* beat 5 — the lab practice */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Rect x={210} y={280} width={660} height={42} rx={10} fill={CREAM} stroke={GREEN_DARK} strokeWidth={1.8} />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={540} y={306} size={15} fill={GREEN_DARK} weight={600} anchor="middle">
          {t(
            "wash precipitate with DILUTE common-ion solution",
            "precipitate ko DILUTE common-ion solution se dhoyein"
          )}
        </T>
      </Fade>

      {/* beat 6 — the guardrail */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Rect x={170} y={350} width={740} height={42} rx={10} fill={CREAM} stroke={RED} strokeWidth={1.8} />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={540} y={376} size={15} fill={RED} weight={600} anchor="middle">
          {t(
            "pure water washing dissolves precipitate — lose material!",
            "pure water se dhone se precipitate dissolve — material loss!"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
