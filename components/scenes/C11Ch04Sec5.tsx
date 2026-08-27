/**
 * C11 Chemistry Ch04 · Section 5 — "Drawing Lewis structures and assigning formal charge"
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 9.39, 26.88, 42.67, 57.69, 77.4, 90.79, 110.51]):
 *  0 anchor: "a disciplined 5-step recipe"
 *  1 STEP 1 card + live: count valence e⁻ for CO2 (4+6+6=16)
 *  2 STEP 2 card + live: place C/O/O, ring C as central
 *  3 STEP 3 card + live: single bonds, fill O octets (3 lone pairs each),
 *    red flag — C only has 4 e⁻
 *  4 STEP 4 card + live: curved arrows push a lone pair into each bond,
 *    both bonds become double bonds
 *  5 STEP 5 card + live: green "octets ✓ — check FC next" note
 *  6 formal-charge arithmetic for C and O, both = 0
 *  7 green verdict chip: best structure = FC closest to 0
 *
 * Layout plan:
 *  b1-5 | 5 step cards        | Draw/T | x66..1014 y100..190 (5×180w, 12 gap)
 *  b1   | electron count line | T mid  | x?..?     y212
 *  b2-5 | CO2 live structure  | Draw/T | x390..690 y236..306
 *  b3   | red flag            | T mid  | x?..?     y330
 *  b5   | checkmark note      | T start| x870..    y270
 *  b6   | FC arithmetic       | T mid  | x?..?     y372..394
 *  b7   | verdict chip        | Chip   | x310..770 y414..440
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
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';
import { bondD, doubleBondD, curvedArrowD, LonePair } from "./chem-kit";

export default function C11Ch04Sec5({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const cards = [
    { x: 66, n: 1, l1: t("count total", "count total"), l2: t("valence e⁻", "valence e⁻") },
    { x: 258, n: 2, l1: t("central atom", "central atom"), l2: t("(never H)", "(never H)") },
    { x: 450, n: 3, l1: t("bonds → fill", "bonds → fill"), l2: t("outer octets", "outer octets") },
    { x: 642, n: 4, l1: t("short → make", "kam → banao"), l2: t("multiple bonds", "multiple bonds") },
    { x: 834, n: 5, l1: t("verify octets", "octets verify"), l2: t("+ formal charge", "+ formal charge") },
  ];

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={58} size={19} fill={RED} script>
          {t("Drawing Lewis structures: the 5-step recipe", "Lewis structures: 5-step recipe")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 3.0)} d="M 370 80 C 450 76, 630 76, 710 80" stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={96} size={13} fill={MUTED} script>
          {t("a disciplined 5-step recipe", "ek disciplined 5-step recipe")}
        </T>
      </Fade>

      {/* step cards, one per beat 1-5 */}
      {cards.map((c) => (
        <React.Fragment key={c.n}>
          <Draw on={beat >= c.n} delay={dl(c.n, 0.1)} d={`M ${c.x} 100 h 180 v 90 h -180 z`} stroke={INK} sw={1.8} dur={0.4} />
          <Fade on={beat >= c.n} delay={dl(c.n, 0.4)}>
            <T x={c.x + 90} y={122} size={13} weight={800} fill={AMBER_DARK}>
              STEP {c.n}
            </T>
            <T x={c.x + 90} y={148} size={11.5} fill={INK}>
              {c.l1}
            </T>
            <T x={c.x + 90} y={170} size={11.5} fill={INK}>
              {c.l2}
            </T>
          </Fade>
        </React.Fragment>
      ))}

      {/* beat 1 — count valence electrons */}
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={540} y={212} size={13} fill={INK}>
          C: 4   O: 6   O: 6   → total = 16 e⁻
        </T>
      </Fade>

      {/* beat 2 — place atoms, ring the central one */}
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={540} y={278} size={22} weight={700} fill={INK}>
          C
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.2)}>
        <T x={420} y={278} size={22} weight={700} fill={INK}>
          O
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <T x={660} y={278} size={22} weight={700} fill={INK}>
          O
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.0)}>
        <Circle cx={540} cy={270} r={20} fill="none" stroke={AMBER} strokeWidth={1.6} strokeDasharray="3 3" />
      </Fade>

      {/* beat 3 — single bonds, fill outer octets */}
      <Draw on={beat === 3} delay={dl(3, 0.8)} d={bondD(434, 270, 527, 270)} stroke={INK} sw={2.2} dur={0.4} />
      <Draw on={beat === 3} delay={dl(3, 1.1)} d={bondD(553, 270, 646, 270)} stroke={INK} sw={2.2} dur={0.4} />
      <LonePair on={beat >= 3} delay={dl(3, 1.5)} cx={420} cy={244} angle={0} spread={7} />
      <LonePair on={beat === 3} delay={dl(3, 1.8)} cx={390} cy={270} angle={Math.PI / 2} spread={7} />
      <LonePair on={beat >= 3} delay={dl(3, 2.1)} cx={420} cy={296} angle={0} spread={7} />
      <LonePair on={beat >= 3} delay={dl(3, 2.4)} cx={660} cy={244} angle={0} spread={7} />
      <LonePair on={beat === 3} delay={dl(3, 2.7)} cx={690} cy={270} angle={Math.PI / 2} spread={7} />
      <LonePair on={beat >= 3} delay={dl(3, 3.0)} cx={660} cy={296} angle={0} spread={7} />
      <Fade on={beat === 3} delay={dl(3, 3.5)}>
        <T x={540} y={330} size={12} fill={RED}>
          {t("C: only 4 e⁻ around it — short of octet!", "C: sirf 4 e⁻ — octet se kam!")}
        </T>
      </Fade>

      {/* beat 4 — push a lone pair into each bond, double bonds land */}
      <Draw on={beat === 4} delay={dl(4, 0.2)} d={curvedArrowD(390, 270, 480, 262, -18)} stroke={RED} sw={2} dur={0.6} />
      <Draw on={beat === 4} delay={dl(4, 0.5)} d={curvedArrowD(690, 270, 600, 262, 18)} stroke={RED} sw={2} dur={0.6} />
      <Draw on={beat >= 4} delay={dl(4, 0.9)} d={doubleBondD(434, 270, 527, 270, 3)} stroke={INK} sw={2.2} dur={0.4} />
      <Draw on={beat >= 4} delay={dl(4, 1.1)} d={doubleBondD(553, 270, 646, 270, 3)} stroke={INK} sw={2.2} dur={0.4} />

      {/* beat 5 — verify note */}
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={870} y={270} size={12} fill={GREEN} weight={700} anchor="start">
          {t("✓ octets — check FC next", "✓ octets — ab FC check")}
        </T>
      </Fade>

      {/* beat 6 — formal charge arithmetic */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={372} size={12} fill={INK}>
          C → V=4, L=0, B=8 → FC = 4−0−4 = 0
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={540} y={394} size={12} fill={INK}>
          O → V=6, L=4, B=4 → FC = 6−4−2 = 0
        </T>
      </Fade>

      {/* beat 7 — verdict */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Chip x={310} y={414} w={460} h={26} fill={GREEN} textFill="#fff" size={13} script={false}>
          {t("best structure: FC closest to 0 (here, all exactly 0)", "best structure: FC 0 ke sabse paas (yahan sab 0)")}
        </Chip>
      </Fade>
    </Scene>
  );
}
