/**
 * C11 Ch06 · Section 34 — "Putting numbers on the levers: Δn_gas and the α–P relation"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING_CHEMISTRY.md
 * + SCENE_AUTHORING.md.
 *
 * Beats (board_reveal_at_english: [0, 6.7, 13, 20.4, 30.9, 38.2, 51.4]):
 *  0 title + underline
 *  1 note: pressure acts entirely through Δn(gas)
 *  2 definition, boxed: aA(g) ⇌ bB(g), Δn(gas) = b − a
 *  3 rule: ↑P favors smaller mole count; Δn(gas)=0 ⇒ no effect
 *  4 recap: single-reactant dissociation — Kp = α²P/(1−α²)
 *  5 land, ringed: α = √[Kp / (P + Kp)]
 *  6 conclusion: Kp fixed at const T ⇒ ↑P ⇒ α falls (Le Chatelier!)
 *
 * Layout plan (centered stack; longer language counts):
 *  b0 | title (script 20, red)      | T mid  | x210..870  y30..84  (bl 64)
 *  b1 | note (15, muted)            | T mid  | y97..114 (bl 108)
 *  b2 | definition chip (amber)     | Chip   | x300..780 y135..175
 *  b3 | rule (15, ink)              | T mid  | y194..211 (bl 205)
 *  b4 | recap (14, muted)           | T mid  | y231..245 (bl 240)
 *  b5 | "α=√[Kp/(P+Kp)]" ringed(24) | T mid  | x400..680 y271..298 (bl 290)
 *  b6 | conclusion (15, green)      | T mid  | y332..350 (bl 348)
 */

import React from "react";
import { TSpan, Text as SvgText } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, ringD, INK, MUTED, AMBER, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

const ANEK = 'AnekLatin_600SemiBold';

export default function C11Ch06Sec34({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={20} fill={RED} script>
          {t("quantifying the levers: Δn(gas) and α–P", "levers ko quantify karna: Δn(gas) aur α–P")}
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

      {/* beat 1 — pressure through Δn(gas) */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={540} y={108} size={15} fill={MUTED} anchor="middle">
          {t(
            "pressure acts entirely through Δn(gas)",
            "pressure poori tarah Δn(gas) ke through kaam karta"
          )}
        </T>
      </Fade>

      {/* beat 2 — the definition */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <Chip x={300} y={135} w={480} h={40} fill={CREAM} stroke={AMBER} textFill={INK} size={16} script={false}>
          aA(g) ⇌ bB(g),  Δn(gas) = b − a
        </Chip>
      </Fade>

      {/* beat 3 — the rule */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={205} size={15} fill={INK} weight={600} anchor="middle">
          {t(
            "↑P favors smaller mole count; Δn(gas)=0 ⇒ no effect",
            "↑P chhoti mole count favor karta; Δn(gas)=0 ⇒ no effect"
          )}
        </T>
      </Fade>

      {/* beat 4 — recap the dissociation relation */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <SvgText x={540} y={240} textAnchor="middle" fontSize={14} fill={MUTED} fontFamily={ANEK}>
          {t("single-reactant dissociation — reuse: Kp = α", "single-reactant dissociation — reuse karo: Kp = α")}
          <TSpan dy={-7} fontSize={8.7}>2</TSpan>
          <TSpan dy={7}>P/(1−α</TSpan>
          <TSpan dy={-7} fontSize={8.7}>2</TSpan>
          <TSpan dy={7}>)</TSpan>
        </SvgText>
      </Fade>

      {/* beat 5 — rearranged and landed */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={290} size={24} fill={GREEN} weight={800} anchor="middle">
          α = √[Kp / (P + Kp)]
        </T>
      </Fade>
      <Draw
        on={beat >= 5}
        delay={dl(5, 1.1)}
        d={ringD(540, 284, 140, 25)}
        stroke={GREEN}
        sw={2.4}
        dur={0.8}
      />

      {/* beat 6 — the conclusion */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={348} size={15} fill={GREEN} weight={600} anchor="middle">
          {t(
            "Kp fixed at const T ⇒ ↑P ⇒ α falls (Le Chatelier!)",
            "const T par Kp fixed ⇒ ↑P ⇒ α girta (Le Chatelier!)"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
