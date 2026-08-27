/**
 * C11 Chemistry Ch05 · Section 19 — "Entropy as disorder and the second law"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (board_reveal_at, en [0,7.17,19.54,38.31,48.55,57.34,72.11,82.26]):
 *  0 heading + underline (anchor)
 *  1 microstates definition
 *  2 everyday examples caption
 *  3 red note: order of entropy, gas >> liquid > solid
 *  4 heading2 + underline: second law of thermodynamics
 *  5 chip: ΔS(universe) > 0 for spontaneous (green)
 *  6 chip: ΔS(universe) = 0 at equilibrium (amber)
 *  7 diagram: solid/liquid/gas particle boxes + caption (the visual proof)
 *
 * Layout plan (centered x540):
 *  b0 | heading1 (19, w800) + underline| y81..101 (bl95); y105
 *  b1 | microstates (14, muted)        | T mid  | y119..134 (bl130)
 *  b2 | examples (13, muted, script)   | T mid  | y145..168 (bl162)
 *  b3 | red note chip (15)             | Chip   | x300..780 y180..215
 *  b4 | heading2 (18, red, w800)       | T mid  | y231..251 (bl245); underline y255
 *  b5 | ΔSuniv>0 chip (16, green)      | Chip   | x300..780 y270..308
 *  b6 | ΔSuniv=0 chip (16, amber)      | Chip   | x300..780 y320..355
 *  b7 | 3 boxes (solid/liquid/gas)     | Draw   | y394..494 x110..290/380..560/650..830
 *  b7 | caption (14, muted, script)    | T mid  | y508..531 (bl525)
 */

import React from "react";
import { Circle } from 'react-native-svg';
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
  CREAM,
  AMBER_DARK,
  Scene,
} from '@/components/scenes/kit';

const SOLID_DOTS = [
  [160, 428], [200, 428], [240, 428],
  [160, 463], [200, 463], [240, 463],
];
const LIQUID_DOTS = [
  [410, 418], [450, 433], [490, 413],
  [430, 458], [470, 468], [500, 443],
];
const GAS_DOTS = [
  [665, 408], [820, 413], [690, 478],
  [805, 458], [730, 423], [770, 488],
];

export default function C11Ch05Sec19({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={26} fill={RED} script>
          {t("entropy: a measure of disorder", "entropy: a measure of disorder")}
        </T>
      </Fade>

      {/* beat 0 — heading */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={95} size={19} weight={800} fill={INK}>
          {t("Entropy (S) = measure of disorder", "Entropy (S) = disorder ka measure")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.5)} d="M 360 105 C 430 102, 650 102, 720 105" stroke={AMBER_DARK} sw={2} dur={0.5} />

      {/* beat 1 — microstates */}
      <Fade on={beat >= 1} delay={dl(1, 0.1)}>
        <T x={540} y={130} size={14} fill={MUTED}>
          {t(
            "more precisely: number of ways particles+energy can be arranged (microstates)",
            "precisely: particles+energy arrange karne ke tareeke (microstates) ginte hain"
          )}
        </T>
      </Fade>

      {/* beat 2 — everyday examples */}
      <Fade on={beat >= 2} delay={dl(2, 0.1)}>
        <T x={540} y={162} size={13} fill={MUTED} script>
          {t(
            "tidy room → mess · shuffled deck never sorts · incense smoke fills the room",
            "tidy room → mess · shuffled deck kabhi sort nahi hota · incense smoke room bhar deta hai"
          )}
        </T>
      </Fade>

      {/* beat 3 — red note: order of entropy */}
      <Fade on={beat >= 3} delay={dl(3, 0.15)}>
        <Chip x={300} y={180} w={480} h={35} fill={CREAM} stroke={RED} textFill={RED} size={15} script={false}>
          {t("order of entropy: GAS >> LIQUID > SOLID", "entropy ka order: GAS >> LIQUID > SOLID")}
        </Chip>
      </Fade>

      {/* beat 4 — second law heading */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={540} y={245} size={18} weight={800} fill={RED}>
          {t("Second law of thermodynamics", "Second law of thermodynamics")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 0.5)} d="M 380 255 C 440 252, 640 252, 700 255" stroke={RED} sw={2} dur={0.5} />

      {/* beat 5 — spontaneous: ΔSuniv > 0 */}
      <Fade on={beat >= 5} delay={dl(5, 0.15)}>
        <Chip x={300} y={270} w={480} h={38} fill={CREAM} stroke={GREEN} textFill={GREEN} size={16} script={false}>
          {t("spontaneous process ⇒ ΔS(universe) > 0", "spontaneous process ⇒ ΔS(universe) > 0")}
        </Chip>
      </Fade>

      {/* beat 6 — equilibrium: ΔSuniv = 0 */}
      <Fade on={beat >= 6} delay={dl(6, 0.15)}>
        <Chip x={300} y={320} w={480} h={35} fill={CREAM} stroke={AMBER_DARK} textFill={AMBER_DARK} size={16} script={false}>
          {t("equilibrium / reversible ⇒ ΔS(universe) = 0", "equilibrium / reversible ⇒ ΔS(universe) = 0")}
        </Chip>
      </Fade>

      {/* beat 7 — the visual proof: solid/liquid/gas */}
      <Draw on={beat >= 7} delay={dl(7, 0)} d="M 110 394 h 180 v 100 h -180 z" stroke={INK} sw={2} dur={0.4} />
      <Draw on={beat >= 7} delay={dl(7, 0.15)} d="M 380 394 h 180 v 100 h -180 z" stroke={AMBER_DARK} sw={2} dur={0.4} />
      <Draw on={beat >= 7} delay={dl(7, 0.3)} d="M 650 394 h 180 v 100 h -180 z" stroke={RED} sw={2} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.5)}>
        <T x={200} y={378} size={13} fill={INK}>
          {t("SOLID (low S)", "SOLID (low S)")}
        </T>
        <T x={470} y={378} size={13} fill={AMBER_DARK}>
          {t("LIQUID", "LIQUID")}
        </T>
        <T x={740} y={378} size={13} fill={RED}>
          {t("GAS (high S)", "GAS (high S)")}
        </T>
        {SOLID_DOTS.map(([x, y], i) => (
          <Circle key={`s${i}`} cx={x} cy={y} r={4} fill={INK} />
        ))}
        {LIQUID_DOTS.map(([x, y], i) => (
          <Circle key={`l${i}`} cx={x} cy={y} r={4} fill={AMBER_DARK} />
        ))}
        {GAS_DOTS.map(([x, y], i) => (
          <Circle key={`g${i}`} cx={x} cy={y} r={4} fill={RED} />
        ))}
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.9)}>
        <T x={540} y={525} size={14} fill={MUTED} script>
          {t("entropy increases: solid → liquid → gas", "entropy badhti hai: solid → liquid → gas")}
        </T>
      </Fade>
    </Scene>
  );
}
