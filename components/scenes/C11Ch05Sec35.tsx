/**
 * C11 Chemistry Ch05 · Section 35 — "Quick-recall cheat sheet — Chemical
 * Thermodynamics" (FINAL SECTION — closes the chapter)
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (board_reveal_at, en [0,9.39,18.09,36.95,49.32,62.12,79.87,91.65]):
 *  0 heading: Last-minute quick recall + underline
 *  1 red: sign rule (ON=+, BY=−; q>0=heat in)
 *  2 state vs path functions, cyclic ΔU=0
 *  3 red: R rule (8.314 vs 0.0821), Δngas gases only
 *  4 formation vs bond-enthalpy direction, reverse-flips-sign
 *  5 Gibbs tug-of-war, four sign cases
 *  6 red: surroundings entropy sign, ΔG tells IF not how fast
 *  7 bomb/cup, adiabatic/isothermal, cold pack recap
 *
 * Layout plan (centered x540, 7 rows w920 x90..1010, y=120+48i, h34):
 *  b0 | heading (20, red, w800)       | T mid | y83..106 (bl100)
 *  b0 | underline                     | Draw  | y112 x400..680
 *  b1-7 | 7 rows (14)                 | Chip  | y120/168/216/264/312/360/408
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, RED, INK, AMBER_DARK, CREAM,
  Scene,
} from '@/components/scenes/kit';

const ROWS = [
  { en: "signs: ON = +, BY = − (work); q positive = heat IN",
    hi: "signs: ON = +, BY = − (work); q positive = heat ANDAR", color: RED },
  { en: "state functions (U,H,T,P,V) care only about endpoints; path (q,w) cares about route. Cyclic: ΔU=0",
    hi: "state functions (U,H,T,P,V) sirf endpoints dekhte hain; path (q,w) route dekhta hai. Cyclic: ΔU=0", color: INK },
  { en: "R rule: joules→8.314, L·atm→0.0821. Δngas: GASES only",
    hi: "R rule: joules→8.314, L·atm→0.0821. Δngas: sirf GASES", color: RED },
  { en: "directions: formation=products−reactants; bond enthalpy=reactants−products. Reverse ⇒ reverse sign",
    hi: "directions: formation=products−reactants; bond enthalpy=reactants−products. Reverse ⇒ sign reverse", color: INK },
  { en: "Gibbs: ΔH pulls down, ΔS pulls up, T referees. 4 cases: (−,+)always,(−,−)lowT,(+,+)highT,(+,−)never",
    hi: "Gibbs: ΔH neeche, ΔS upar, T referee. 4 cases: (−,+)hamesha,(−,−)lowT,(+,+)highT,(+,−)kabhi nahi", color: AMBER_DARK },
  { en: "exothermic warms surroundings ⇒ +ΔSsurr. ΔG tells IF, not how fast",
    hi: "exothermic surroundings ko garam karta hai ⇒ +ΔSsurr. ΔG batata hai IF, kitni fast nahi", color: RED },
  { en: "bomb=box=ΔU; open cup=ΔH. Adiabatic kills q; isothermal kills ΔT. Cold pack=endothermic dissolving",
    hi: "bomb=box=ΔU; open cup=ΔH. Adiabatic se q khatam; isothermal se ΔT khatam. Cold pack=endothermic dissolving", color: AMBER_DARK },
];

export default function C11Ch05Sec35({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={26} fill={RED} script>
          {t("quick-recall cheat sheet", "quick-recall cheat sheet")}
        </T>
      </Fade>

      {/* beat 0 — heading */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={100} size={20} weight={800} fill={RED}>
          {t("Last-minute quick recall", "Last-minute quick recall")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.5)} d="M 400 112 C 460 109, 620 109, 680 112" stroke={RED} sw={2} dur={0.5} />

      {/* beats 1-7 — recall rows */}
      {ROWS.map((row, i) => (
        <Fade key={i} on={beat >= 1 + i} delay={dl(1 + i, 0.1)}>
          <Chip x={90} y={120 + i * 48} w={920} h={34} fill={CREAM} stroke={row.color} textFill={row.color} size={14} script={false}>
            {t(row.en, row.hi)}
          </Chip>
        </Fade>
      ))}
    </Scene>
  );
}
