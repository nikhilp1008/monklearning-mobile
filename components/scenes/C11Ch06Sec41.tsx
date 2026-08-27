/**
 * C11 Ch06 · Section 41 — "Three lenses on acid and base: Arrhenius to Lewis"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING_CHEMISTRY.md
 * + SCENE_AUTHORING.md.
 *
 * Beats (board_reveal_at_english: [0, 7.4, 16.2, 27.1, 37.2, 44.7, 56, 65]):
 *  0 title + underline
 *  1 bar1 (narrowest): ARRHENIUS — acid→H⁺, base→OH⁻ (water only)
 *  2 limitation: can't explain why NH3 is basic
 *  3 bar2 (wider): BRØNSTED–LOWRY — proton donor/acceptor
 *  4 example: HCl + H2O ⇌ H3O⁺ + Cl⁻
 *  5 note: water is amphoteric (base with HCl, acid with NH3)
 *  6 bar3 (widest): LEWIS — electron-pair acceptor/donor
 *  7 note: BF3 has no proton, still an acid via Lewis
 *
 * Layout plan (three widening centered bars; longer language counts):
 *  b0 | title (script 21, red)      | T mid  | x210..870  y30..86  (bl 64)
 *  b1 | ARRHENIUS chip (narrow)     | Chip   | x380..700 y110..146
 *  b2 | limitation (12, red)        | T mid  | y155..169 (bl 165)
 *  b3 | BRØNSTED–LOWRY chip (mid)   | Chip   | x280..800 y190..226
 *  b4 | example eq (15, ink)        | T mid  | y238..255 (bl 250)
 *  b5 | amphoteric note (12, amber) | T mid  | y269..282 (bl 278)
 *  b6 | LEWIS chip (widest)         | Chip   | x180..900 y300..336
 *  b7 | BF3 note (12, green-dark)   | T mid  | y349..362 (bl 358)
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, AMBER, AMBER_DARK, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch06Sec41({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={21} fill={RED} script>
          {t("three lenses on acid and base", "acid aur base par teen lenses")}
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

      {/* beat 1 — Arrhenius, narrowest */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <Chip x={380} y={110} w={320} h={36} fill={CREAM} stroke={AMBER} textFill={INK} size={13} script={false}>
          {t("ARRHENIUS: acid→H⁺, base→OH⁻ (water only)", "ARRHENIUS: acid→H⁺, base→OH⁻ (water only)")}
        </Chip>
      </Fade>

      {/* beat 2 — its limitation */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={165} size={12} fill={RED} anchor="middle">
          {t("can't explain why NH3 (no OH⁻) is basic", "explain nahi kar sakta NH3 (no OH⁻) basic kyun")}
        </T>
      </Fade>

      {/* beat 3 — Brønsted–Lowry, wider */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <Chip x={280} y={190} w={520} h={36} fill={CREAM} stroke={AMBER} textFill={INK} size={13} script={false}>
          {t(
            "BRØNSTED–LOWRY: acid = proton donor, base = proton acceptor",
            "BRØNSTED–LOWRY: acid = proton donor, base = proton acceptor"
          )}
        </Chip>
      </Fade>

      {/* beat 4 — the example */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={250} size={15} fill={INK} weight={600} anchor="middle">
          HCl + H₂O ⇌ H₃O⁺ + Cl⁻
        </T>
      </Fade>

      {/* beat 5 — water is amphoteric */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={278} size={12} fill={AMBER_DARK} anchor="middle">
          {t(
            "water: base with HCl, ACID with NH3 — amphoteric!",
            "water: HCl ke saath base, NH3 ke saath ACID — amphoteric!"
          )}
        </T>
      </Fade>

      {/* beat 6 — Lewis, widest */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <Chip x={180} y={300} w={720} h={36} fill={CREAM} stroke={AMBER} textFill={INK} size={13} script={false}>
          {t(
            "LEWIS: acid = electron-pair acceptor, base = electron-pair donor",
            "LEWIS: acid = electron-pair acceptor, base = electron-pair donor"
          )}
        </Chip>
      </Fade>

      {/* beat 7 — the BF3 payoff */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={540} y={358} size={12} fill={GREEN_DARK} anchor="middle">
          {t(
            "BF3 has NO proton — still an acid (accepts an e⁻ pair)",
            "BF3 mein proton NAHI — phir bhi acid (e⁻ pair accept karta)"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
