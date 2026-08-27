/**
 * C11 Chemistry Ch04 · Section 33 — "Worked examples: the ammonium coordinate bond and boron-halide acidity"
 * Canvas 1080×620 · safe x36–1044, y30–596. Part A erases before Part B.
 *
 * Beats (en [0, 9.3, 23.04, 40.36, 64.17, 73.56, 86.87, 106.07]):
 *  0 intro: CBSE NH4+ question + NEET BX3 trap
 *  1 Part A: Q1 setup - dissect NH4+ = NH3 + H+
 *  2 mechanism: N donates LP -> 4th N-H bond (coordinate)
 *  3 answer1: electrons indistinguishable -> all 4 bonds equal
 *  4 Part A erases; Part B: Q2 setup - order BX3 by acidity
 *  5 trap: EN reasoning (wrong)
 *  6 deciding factor: back bonding
 *  7 answer2 chip
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, MUTED, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch04Sec33({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);
  const pActive = beat >= 1 && beat < 4;

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={58} size={19} fill={RED} script>
          {t("Worked examples: NH₄⁺ and BX₃ acidity", "Worked examples: NH₄⁺ aur BX₃ acidity")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 3.0)} d="M 380 80 C 450 76, 630 76, 700 80" stroke={RED} sw={2.2} dur={0.6} />

      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={95} size={12} fill={MUTED} script>
          {t("CBSE: NH₄⁺ coordinate bond + NEET: BX₃ acidity trap", "CBSE: NH₄⁺ coordinate bond + NEET: BX₃ acidity trap")}
        </T>
      </Fade>

      {/* beat 1 — Part A setup */}
      <Fade on={pActive} delay={dl(1, 0.2)}>
        <T x={540} y={120} size={11.5} fill={INK}>
          {t(
            "Q1: NH₄⁺ = NH₃ + H⁺ — identify the coordinate bond, why are all 4 N–H identical?",
            "Q1: NH₄⁺ = NH₃ + H⁺ — coordinate bond pehchano, sab 4 N–H identical kyun?"
          )}
        </T>
      </Fade>

      {/* beat 2 — mechanism */}
      <Fade on={pActive && beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={148} size={11.5} fill={INK}>
          {t(
            "NH₃: 3 bonds + 1 LP · H⁺: empty orbital → N donates LP → 4th N–H bond (coordinate)",
            "NH₃: 3 bonds + 1 LP · H⁺: empty orbital → N LP donate karta → 4th N–H bond (coordinate)"
          )}
        </T>
      </Fade>

      {/* beat 3 — answer 1 */}
      <Fade on={pActive && beat >= 3} delay={dl(3, 0.3)}>
        <Chip x={170} y={172} w={740} h={30} fill={GREEN} textFill="#fff" size={12} script={false}>
          {t(
            "answer: electrons indistinguishable → all 4 bonds EQUAL (length, strength, 109.5°)",
            "answer: electrons indistinguishable → sab 4 bonds EQUAL (length, strength, 109.5°)"
          )}
        </Chip>
      </Fade>

      {/* beat 4 — Part B setup */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={120} size={11.5} fill={INK}>
          {t(
            "Q2: order BX₃ by Lewis acid strength (trap: reasoning from EN)",
            "Q2: BX₃ ko Lewis acid strength se order karo (trap: EN se reasoning)"
          )}
        </T>
      </Fade>

      {/* beat 5 — trap */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={148} size={11.5} weight={700} fill={RED}>
          {t(
            "trap: F most EN → B most e⁻-deficient → 'BF₃ strongest'... WRONG",
            "trap: F sabse EN → B sabse e⁻-deficient → 'BF₃ strongest'... GALAT"
          )}
        </T>
      </Fade>

      {/* beat 6 — deciding factor */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={173} size={11.5} fill={INK}>
          {t(
            "deciding factor: back bonding — BF₃'s best 2p-2p overlap → B least hungry → weakest acid",
            "deciding factor: back bonding — BF₃ ka best 2p-2p overlap → B sabse kam hungry → weakest acid"
          )}
        </T>
      </Fade>

      {/* beat 7 — answer 2 */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Chip x={170} y={198} w={740} h={30} fill={GREEN} textFill="#fff" size={12} script={false}>
          {t(
            "answer: BF₃ < BCl₃ < BBr₃ < BI₃ (increasing acidity) — EN predicts the reverse!",
            "answer: BF₃ < BCl₃ < BBr₃ < BI₃ (badhti acidity) — EN ulta predict karta!"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
