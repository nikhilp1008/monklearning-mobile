/**
 * C11 Chemistry Ch04 · Section 7 — "Worked example: ozone Lewis structure and formal charges"
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 19.29, 30.63, 50.6, 62.38, 79.53, 95.32, 107.95]):
 *  0 task: draw O3, find FC on each O (CBSE)
 *  1 electron count: 3 O × 6 = 18
 *  2 build structure: O=O-O bent, lone pairs 1/2/3
 *  3 FC setup note: V=6 for all, need L and B
 *  4 central O calc → FC = +1
 *  5 double-bonded terminal O calc → FC = 0
 *  6 single-bonded terminal O calc → FC = -1
 *  7 sum check = 0, green verdict chip
 *
 * Layout plan:
 *  b0   | task line            | T mid | y95
 *  b1   | electron count       | T mid | y117
 *  b2   | O3 bent structure    | Draw/T| Oc(540,190) Od(370,280) Os(710,280)
 *  b3   | FC setup note        | T mid | y372
 *  b4-6 | FC calc lines        | T mid | y400 / y424 / y448
 *  b7   | sum + verdict chip   | T/Chip| y478 / y496..524
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  INK,
  MUTED,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';
import { bondD, doubleBondD, LonePair } from "./chem-kit";

export default function C11Ch04Sec7({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={58} size={19} fill={RED} script>
          {t("Worked example: ozone (O₃)", "Worked example: ozone (O₃)")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 3.0)} d="M 420 80 C 480 76, 600 76, 660 80" stroke={RED} sw={2.2} dur={0.6} />

      {/* beat 0 — task */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={95} size={12} fill={MUTED} script>
          {t("draw O₃, find formal charge on each O (CBSE)", "O₃ banao, har O ka formal charge nikaalo (CBSE)")}
        </T>
      </Fade>

      {/* beat 1 — electron count */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={117} size={13} fill={INK}>
          3 O × 6 e⁻ = 18 {t("valence e⁻", "valence e⁻")}
        </T>
      </Fade>

      {/* beat 2 — build the bent structure */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={540} y={190} size={20} weight={700} fill={INK}>
          O
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={370} y={280} size={20} weight={700} fill={INK}>
          O
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.0)}>
        <T x={710} y={280} size={20} weight={700} fill={INK}>
          O
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.4)} d={doubleBondD(527.6, 196.5, 382.4, 273.5, 3.5)} stroke={INK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 2} delay={dl(2, 1.8)} d={bondD(552.4, 196.5, 697.6, 273.5)} stroke={INK} sw={2.2} dur={0.5} />
      <LonePair on={beat >= 2} delay={dl(2, 2.2)} cx={540} cy={162} angle={0} spread={7} />
      <LonePair on={beat >= 2} delay={dl(2, 2.5)} cx={340} cy={255} angle={Math.PI / 2} spread={7} />
      <LonePair on={beat >= 2} delay={dl(2, 2.8)} cx={340} cy={305} angle={Math.PI / 2} spread={7} />
      <LonePair on={beat >= 2} delay={dl(2, 3.1)} cx={710} cy={250} angle={0} spread={7} />
      <LonePair on={beat >= 2} delay={dl(2, 3.4)} cx={748} cy={280} angle={Math.PI / 2} spread={7} />
      <LonePair on={beat >= 2} delay={dl(2, 3.7)} cx={710} cy={310} angle={0} spread={7} />

      {/* beat 3 — FC setup */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={372} size={12} fill={MUTED}>
          {t("V = 6 for every O → just need L and B", "V = 6 har O ke liye → bas L aur B chahiye")}
        </T>
      </Fade>

      {/* beats 4-6 — FC arithmetic */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={400} size={12} fill={INK}>
          {t("central O → V=6, L=2, B=6 → FC = 6−2−3 = +1", "central O → V=6, L=2, B=6 → FC = 6−2−3 = +1")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={424} size={12} fill={INK}>
          {t("=O terminal → V=6, L=4, B=4 → FC = 6−4−2 = 0", "=O terminal → V=6, L=4, B=4 → FC = 6−4−2 = 0")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={448} size={12} fill={INK}>
          {t("−O terminal → V=6, L=6, B=2 → FC = 6−6−1 = −1", "−O terminal → V=6, L=6, B=2 → FC = 6−6−1 = −1")}
        </T>
      </Fade>

      {/* beat 7 — sum check + verdict */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={540} y={478} size={13} weight={700} fill={RED}>
          +1 + 0 + (−1) = 0 = {t("charge on O₃", "O₃ ka charge")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.7)}>
        <Chip x={310} y={496} w={460} h={28} fill={GREEN} textFill="#fff" size={13} script={false}>
          {t("sum matches → trust the structure", "sum match karta → structure par bharosa karo")}
        </Chip>
      </Fade>
    </Scene>
  );
}
