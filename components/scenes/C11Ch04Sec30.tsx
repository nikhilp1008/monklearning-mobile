/**
 * C11 Chemistry Ch04 · Section 30 — "Back bonding and its quiet consequences"
 * Canvas 1080×620 · safe x36–1044, y30–596. Only 7 beats.
 *
 * Beats (en [0, 23.72, 39.59, 63.49, 86.78, 108.71, 133.55]):
 *  0 define + schematic: LP -> adjacent vacant orbital (pi on top of sigma)
 *  1 consequences: shorter bonds, partial double-bond character, flattens
 *  2 fingerprint: BF3 < BCl3 < BBr3 < BI3 Lewis acidity (backwards from EN)
 *  3 two types: p-pi/p-pi vs p-pi/d-pi
 *  4 trisilylamine flat vs trimethylamine pyramidal
 *  5 broader impact list
 *  6 honest note on d-orbital model
 *
 * Layout plan:
 *  b0 | A-B schematic | Draw/T | x350..510 y145..195
 */

import React from "react";
import { Circle } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';
import { bondD, curvedArrowD, LonePair } from "./chem-kit";

export default function C11Ch04Sec30({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={58} size={19} fill={RED} script>
          {t("Back bonding", "Back bonding")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 3.6)} d="M 440 80 C 480 76, 600 76, 640 80" stroke={RED} sw={2.2} dur={0.6} />

      {/* beat 0 — define + schematic */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={380} y={165} size={16} weight={700} fill={INK}>
          A
        </T>
        <T x={480} y={165} size={16} weight={700} fill={INK}>
          B
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.6)} d={bondD(398, 160, 460, 160)} stroke={INK} sw={2} dur={0.35} />
      <Fade on={beat >= 0} delay={dl(0, 1.0)}>
        <Circle cx={350} cy={160} r={8} fill="none" stroke={MUTED} strokeWidth={1.4} strokeDasharray="2 2" />
      </Fade>
      <LonePair on={beat >= 0} delay={dl(0, 1.3)} cx={510} cy={145} angle={0} spread={7} />
      <Draw on={beat >= 0} delay={dl(0, 1.7)} d={curvedArrowD(505, 150, 356, 157, -22)} stroke={RED} sw={2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 2.3)}>
        <T x={540} y={197} size={11} fill={INK}>
          {t(
            "back bonding: LP → adjacent vacant orbital (π on top of σ)",
            "back bonding: LP → adjacent vacant orbital (σ ke upar π)"
          )}
        </T>
      </Fade>

      {/* beat 1 — consequences */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={222} size={11.5} fill={INK}>
          {t(
            "shortens bonds · partial double-bond character · can FLATTEN a pyramidal molecule",
            "bonds chota karta · partial double-bond character · pyramidal molecule ko FLATTEN kar sakta"
          )}
        </T>
      </Fade>

      {/* beat 2 — BF3/BI3 fingerprint */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={540} y={248} size={12} weight={700} fill={INK}>
          {t("Lewis acidity: BF₃ < BCl₃ < BBr₃ < BI₃ (backwards from EN!)", "Lewis acidity: BF₃ < BCl₃ < BBr₃ < BI₃ (EN se ulta!)")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={540} y={270} size={10.5} fill={MUTED}>
          {t(
            "strongest back bonding in BF₃ (best 2p-2p overlap) → B least e⁻-deficient → weakest acid",
            "BF₃ mein sabse strong back bonding (best 2p-2p overlap) → B sabse kam e⁻-deficient → weakest acid"
          )}
        </T>
      </Fade>

      {/* beat 3 — two types */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={297} size={11.5} fill={INK}>
          {t(
            "pπ-pπ: F→B in BF₃ · pπ-dπ: N→Si in (SiH₃)₃N, S→O in SO₄²⁻",
            "pπ-pπ: F→B in BF₃ · pπ-dπ: N→Si in (SiH₃)₃N, S→O in SO₄²⁻"
          )}
        </T>
      </Fade>

      {/* beat 4 — trisilylamine vs trimethylamine */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={324} size={11.5} weight={700} fill={GREEN}>
          {t("(SiH₃)₃N: N LP→Si 3d → sp², FLAT", "(SiH₃)₃N: N LP→Si 3d → sp², FLAT")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={540} y={346} size={11.5} weight={700} fill={INK}>
          {t("(CH₃)₃N: C has no empty orbital → sp³, PYRAMIDAL", "(CH₃)₃N: C ke paas empty orbital nahi → sp³, PYRAMIDAL")}
        </T>
      </Fade>

      {/* beat 5 — broader impact */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={373} size={10.5} fill={INK}>
          {t(
            "also: B-O in boric acid · CO₂'s short/strong/linear bonds · H₂SO₄/H₃PO₄'s short 3rd-period bonds",
            "aur bhi: boric acid ka B-O · CO₂ ke short/strong/linear bonds · H₂SO₄/H₃PO₄ ke short 3rd-period bonds"
          )}
        </T>
      </Fade>

      {/* beat 6 — honest note */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={398} size={10.5} fill={MUTED} script>
          {t(
            "pπ-dπ is the exam-standard model — give this reasoning",
            "pπ-dπ exam-standard model hai — yahi reasoning do"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
