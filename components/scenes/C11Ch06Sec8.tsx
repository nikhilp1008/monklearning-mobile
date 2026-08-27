/**
 * C11 Ch06 · Section 8 — "The Kp–Kc bridge, and the units of K"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING_CHEMISTRY.md
 * + SCENE_AUTHORING.md.
 *
 * Beats (board_reveal_at_english: [0, 30.3, 59, 97.7, 148.3, 208.9, 240.9, 276.3, 320.1]):
 *  0 title + underline
 *  1 ideal-gas law: PV = nRT
 *  2 rearrange: p(i) = [n(i)/V]·RT = [i]·RT
 *  3 note: substitute into Kp → concentrations rebuild Kc, RT collects
 *  4 land: Kp = Kc(RT)^Δn, ringed; Δn = n(gas,prod) − n(gas,react)
 *  5 guardrail: only GASEOUS species count in Δn
 *  6 note: K has no fixed dimension — units track Δn
 *  7 unit chips: [Kc] = (mol/L)^Δn, [Kp] = (atm)^Δn
 *  8 special case: Δn = 0 ⇒ K dimensionless, Kp = Kc
 *
 * Layout plan (centered stack; longer language counts):
 *  b0 | title (script 26, red)      | T mid  | x220..860  y30..92  (bl 64)
 *  b1 | "PV = nRT" (19, ink)        | T mid  | x466..614 y110..131 (bl 125)
 *  b1 | "(ideal gas law)" (12, mu)  | T mid  | y138..149 (bl 148)
 *  b2 | "p(i) = [n(i)/V]·RT = [i]·RT" | T mid | y170..191 (bl 185)
 *  b3 | note (14, muted)            | T mid  | x326..754 y214..229 (bl 225)
 *  b4 | "Kp = Kc(RT)^Δn" ringed     | T mid  | x435..645 y258..287 (bl 280)
 *  b4 | "Δn = n(gas,prod) - n(gas,react))" | T mid | y320..333 (bl 332)
 *  b5 | guardrail (15, amber-dark)  | T mid  | x311..769 y353..367 (bl 365)
 *  b6 | note (15, muted)            | T mid  | y384..397 (bl 396)
 *  b7 | "[Kc]=(mol/L)^Δn" chip      | Chip   | x305..535 y420..464
 *  b7 | "[Kp]=(atm)^Δn" chip        | Chip   | x565..775 y420..464
 *  b8 | "Δn=0 ⇒ K dimensionless…" chip | Chip | x280..800 y495..545
 */

import React from "react";
import { TSpan, Text as SvgText } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, ringD, INK, MUTED, AMBER_DARK, GREEN, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch06Sec8({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={26} fill={RED} script>
          {t("the Kp–Kc bridge: concentration to pressure", "Kp–Kc bridge: concentration se pressure tak")}
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

      {/* beat 1 — ideal gas law */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={540} y={125} size={19} fill={INK} weight={700} anchor="middle">
          PV = nRT
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <T x={540} y={148} size={12} fill={MUTED} anchor="middle">
          {t("(ideal gas law)", "(ideal gas law)")}
        </T>
      </Fade>

      {/* beat 2 — rearrange to pressure = concentration × RT */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={185} size={18} fill={INK} weight={600} anchor="middle">
          p(i) = [n(i)/V]·RT = [i]·RT
        </T>
      </Fade>

      {/* beat 3 — the substitution note */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={225} size={14} fill={MUTED} anchor="middle">
          {t(
            "substitute into Kp → concentrations rebuild Kc, RT collects",
            "Kp mein substitute karo → concentrations Kc banaate, RT collect hota"
          )}
        </T>
      </Fade>

      {/* beat 4 — the bridge, ringed */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <SvgText x={540} y={280} textAnchor="middle" fontSize={28} fontWeight={800} fill={GREEN} fontFamily="var(--font-anek-latin), sans-serif">
          Kp = Kc (RT)<TSpan dy={-11} fontSize="0.6em">Δn</TSpan>
        </SvgText>
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 1.1)}
        d={ringD(540, 272, 119, 27)}
        stroke={GREEN}
        sw={2.4}
        dur={0.8}
      />
      <Fade on={beat >= 4} delay={dl(4, 1.8)}>
        <T x={540} y={332} size={15} fill={INK} anchor="middle">
          {t(
            "Δn = n(gas, product) − n(gas, reactant)",
            "Δn = n(gas, product) − n(gas, reactant)"
          )}
        </T>
      </Fade>

      {/* beat 5 — guardrail: only gaseous species count */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={365} size={15} fill={AMBER_DARK} weight={600} anchor="middle">
          {t(
            "only GASEOUS species count in Δn — solids/liquids excluded",
            "sirf GASEOUS species Δn mein ginte — solids/liquids exclude"
          )}
        </T>
      </Fade>

      {/* beat 6 — no fixed dimension */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={396} size={15} fill={MUTED} anchor="middle">
          {t(
            "K has no fixed dimension — its units track Δn",
            "K ka koi fixed dimension nahi — units Δn follow karte"
          )}
        </T>
      </Fade>

      {/* beat 7 — the unit chips */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <Chip x={305} y={420} w={230} h={44} fill={CREAM} stroke={GREEN} textFill={GREEN_DARK} size={16} script={false}>
          <>
            [Kc] = (mol/L)<TSpan dy={-7} fontSize="0.62em">Δn</TSpan>
          </>
        </Chip>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1)}>
        <Chip x={565} y={420} w={210} h={44} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={16} script={false}>
          <>
            [Kp] = (atm)<TSpan dy={-7} fontSize="0.62em">Δn</TSpan>
          </>
        </Chip>
      </Fade>

      {/* beat 8 — the special case */}
      <Fade on={beat >= 8} delay={dl(8, 0.4)}>
        <Chip x={280} y={495} w={520} h={50} fill={CREAM} stroke={GREEN} textFill={GREEN_DARK} size={17} script={false}>
          {t("Δn = 0 ⇒ K dimensionless, Kp = Kc", "Δn = 0 ⇒ K dimensionless, Kp = Kc")}
        </Chip>
      </Fade>
    </Scene>
  );
}
