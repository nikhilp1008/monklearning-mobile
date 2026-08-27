/**
 * C11 Ch09 · Section 25 — "Key definitions and formulae" (alkene fact-sheet)
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 5.72, 15.19, 27.22, 37.29, 48.9, 62.21, 75.35]):
 *  0 heading · 1 CnH2n chip · 2 σ+π=C=C bond energies · 3 lengths ·
 *  4 cis/trans polarity+m.p. · 5 RED Markovnikov · 6 HX reactivity ·
 *  7 tests: Br2/CCl4, Baeyer's KMnO4
 *
 * Layout plan — dense list, rows 32px apart from y135, chip at y95:
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, AMBER_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch09Sec25({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={65} size={27} fill={RED} script>
          {t("key definitions and formulae", "key definitions aur formulae")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={95} size={16} fill={INK} weight={700}>
          {t("your alkene fact-sheet", "aapki alkene fact-sheet")}
        </T>
      </Fade>

      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <Chip x={462} y={118} w={156} h={32} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={16} script={false}>
          CnH2n ({t("one C=C, acyclic", "one C=C, acyclic")})
        </Chip>
      </Fade>

      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={182} size={15} fill={INK}>
          σ(397) + π(284) ⇒ C=C ≈ 681 kJ/mol; C–C = 348 kJ/mol
        </T>
      </Fade>

      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={214} size={15} fill={INK}>
          {t("lengths: C=C = 134 pm vs C–C = 154 pm", "lengths: C=C = 134 pm vs C–C = 154 pm")}
        </T>
      </Fade>

      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={246} size={15} fill={INK}>
          {t("cis = same side (more polar); trans = opposite (higher m.p.)", "cis = same side (zyada polar); trans = opposite (zyada m.p.)")}
        </T>
      </Fade>

      <Draw on={beat >= 5} delay={dl(5, 0.3)} d="M 60 264 L 60 296" stroke={RED} sw={3.2} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.9)}>
        <T x={76} y={282} size={15} fill={RED} script anchor="start">
          {t("Markovnikov: the negative part adds to the C with FEWER H's", "Markovnikov: negative part us C pe add hota jisme KAM H hain")}
        </T>
      </Fade>

      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={330} size={15} fill={INK}>
          {t("HX reactivity toward alkenes: HI > HBr > HCl", "alkenes ke against HX reactivity: HI > HBr > HCl")}
        </T>
      </Fade>

      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={540} y={362} size={15} fill={INK}>
          {t("tests: Br2/CCl4 decolourised; Baeyer's KMnO4 decolourised", "tests: Br2/CCl4 decolourise; Baeyer's KMnO4 decolourise")}
        </T>
      </Fade>
    </Scene>
  );
}
