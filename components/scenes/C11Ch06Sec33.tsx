/**
 * C11 Ch06 · Section 33 — "Industry in action: the Haber and Contact processes"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING_CHEMISTRY.md
 * + SCENE_AUTHORING.md.
 *
 * Beats (board_reveal_at_english: [0, 7.4, 18.9, 29.8, 43.3, 57.5, 71.4, 80.4]):
 *  0 title + underline + column divider
 *  1 LEFT: N2+3H2⇌2NH3, ΔH=−92.4 kJ/mol
 *  2 LEFT: exothermic, 4→2 mol ⇒ high P, low T favoured
 *  3 LEFT: practice — ~200 atm, ~700 K, Fe catalyst, remove NH3
 *  4 LEFT: T is a compromise (low T ideal yield, too slow)
 *  5 RIGHT: 2SO2+O2⇌2SO3, ΔH=−197 kJ/mol
 *  6 RIGHT: exothermic, 3→2 mol ⇒ high P, low T favoured
 *  7 RIGHT: practice — ~1-2 atm, ~720 K, V2O5 catalyst, excess air
 *
 * Layout plan (two columns, centers x=270 / 810; longer language counts):
 *  b0 | divider                     | Draw   | x540  y95..258
 *  b1 | Haber equation (16, ink)    | T mid  | x150..390 y97..117 (bl 112)
 *  b1 | ΔH (13, red)                | T mid  | y128..143 (bl 138)
 *  b2 | note (13, green-dark)       | T mid  | x153..387 y155..170 (bl 165)
 *  b3 | practice chip (amber)       | Chip   | x70..470 y178..220
 *  b4 | compromise (12, amber, scr) | T mid  | x118..422 y224..248 (bl 248)
 *  b5 | Contact equation (16, ink)  | T mid  | x685..935 y97..117 (bl 112)
 *  b5 | ΔH (13, red)                | T mid  | y128..143 (bl 138)
 *  b6 | note (13, green-dark)       | T mid  | y155..170 (bl 165)
 *  b7 | practice chip (amber)       | Chip   | x610..1010 y178..220
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, MUTED, AMBER, AMBER_DARK, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch06Sec33({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("industry: the Haber and Contact processes", "industry: Haber aur Contact processes")}
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
      <Draw on={beat >= 0} delay={dl(0, 6.4)} d="M 540 95 L 540 258" stroke={MUTED} sw={1.2} dur={0.5} />

      {/* LEFT — Haber process */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={270} y={112} size={16} fill={INK} weight={700} anchor="middle">
          N₂(g) + 3H₂(g) ⇌ 2NH₃(g)
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={270} y={138} size={13} fill={RED} anchor="middle">
          ΔH = −92.4 kJ/mol
        </T>
      </Fade>

      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={270} y={165} size={13} fill={GREEN_DARK} anchor="middle">
          {t("exothermic, 4→2 mol ⇒ high P, low T", "exothermic, 4→2 mol ⇒ high P, low T")}
        </T>
      </Fade>

      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <Chip x={70} y={178} w={400} h={42} fill={CREAM} stroke={AMBER} textFill={INK} size={13} script={false}>
          {t("~200 atm, ~700 K, Fe catalyst, remove NH₃", "~200 atm, ~700 K, Fe catalyst, NH₃ hataate raho")}
        </Chip>
      </Fade>

      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={270} y={248} size={12} fill={AMBER_DARK} script anchor="middle">
          {t(
            "T = compromise (low T ideal yield, too slow)",
            "T = compromise (low T best yield, par too slow)"
          )}
        </T>
      </Fade>

      {/* RIGHT — Contact process */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={810} y={112} size={16} fill={INK} weight={700} anchor="middle">
          2SO₂(g) + O₂(g) ⇌ 2SO₃(g)
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.9)}>
        <T x={810} y={138} size={13} fill={RED} anchor="middle">
          ΔH = −197 kJ/mol
        </T>
      </Fade>

      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={810} y={165} size={13} fill={GREEN_DARK} anchor="middle">
          {t("exothermic, 3→2 mol ⇒ high P, low T", "exothermic, 3→2 mol ⇒ high P, low T")}
        </T>
      </Fade>

      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <Chip x={610} y={178} w={400} h={42} fill={CREAM} stroke={AMBER} textFill={INK} size={13} script={false}>
          {t("~1–2 atm, ~720 K, V₂O₅ catalyst, excess air", "~1–2 atm, ~720 K, V₂O₅ catalyst, excess air")}
        </Chip>
      </Fade>
    </Scene>
  );
}
