/**
 * C11 Chemistry Ch03 · Section 50 — "Worked example: full placement for Z = 25"
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0.0, 12.89, 20.31, 29.7, 48.47, 60.67, 73.64, 83.88]):
 *  0 title + underline
 *  1 config: [Ar]3d⁵4s²
 *  2 note: half-filled 3d⁵ here is natural at Mn, not an anomaly
 *  3 red-margin: period 4 (highest n); d-block (last e⁻ in 3d)
 *  4 group: (n-1)d + ns = 5+2 = 7 ⇒ group 7
 *  5 block property: variable oxidation states +2..+7 (chip row)
 *  6 red-margin reveal: element cell (25, Mn) + coloured-compounds note
 *  7 closing green stamp: configuration, group rule, then property
 *
 * Layout plan:
 *  b3 | red bar + 2 lines            | Draw | x70  y142..192 (bl158/182)
 *  b5 | oxidation-state chip row     | rect | x335..745 y290..316
 *  b6 | red bar + element cell       | Draw | x450 y350..440, box x470..610
 *  b7 | closing stamp (green)        | Chip | x200..880 y508..542
 */

import React from "react";
import { Rect } from 'react-native-svg';
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
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

const OX_STATES = ["+2", "+3", "+4", "+5", "+6", "+7"];

export default function C11Ch03Sec50({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={20} fill={RED} script>
          {t("worked example: full placement for atomic number 25", "worked example: atomic number 25 ka full placement")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 3.5)} d="M 350 88 C 420 84, 660 84, 730 88" stroke={RED} sw={2.4} dur={0.7} />

      {/* beat 1 — configuration */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={106} size={17} weight={800} fill={INK}>{"[Ar]3d⁵4s²"}</T>
      </Fade>

      {/* beat 2 — the half-filled note */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={130} size={12.5} fill={MUTED} script>
          {t("half-filled 3d⁵ here arises naturally at Mn — not an anomaly", "yahaan half-filled 3d⁵ Mn par naturally aata — anomaly nahi")}
        </T>
      </Fade>

      {/* beat 3 — red-margin: period and block */}
      <Draw on={beat >= 3} delay={dl(3, 0.2)} d="M 70 142 L 70 192" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={94} y={158} size={14} weight={700} fill={INK} anchor="start">
          {t("PERIOD 4 — highest n = 4", "PERIOD 4 — sabse zyada n = 4")}
        </T>
        <T x={94} y={182} size={14} weight={700} fill={INK} anchor="start">
          {t("d-BLOCK — last e⁻ entered 3d", "d-BLOCK — last e⁻ 3d mein gaya")}
        </T>
      </Fade>

      {/* beat 4 — the group arithmetic */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={214} size={13} fill={MUTED}>
          {t("d-block rule: group = (n-1)d + ns", "d-block rule: group = (n-1)d + ns")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.9)}>
        <T x={540} y={240} size={17} weight={800} fill={INK}>{"= 5 + 2 = 7 ⇒ GROUP 7"}</T>
      </Fade>

      {/* beat 5 — the block property */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={270} size={14} weight={700} fill={AMBER_DARK}>
          {t("transition metal ⇒ variable oxidation states", "transition metal ⇒ variable oxidation states")}
        </T>
      </Fade>
      {OX_STATES.map((s, i) => {
        const x = 335 + i * 70;
        return (
          <Fade key={s} on={beat >= 5} delay={dl(5, 0.8 + i * 0.1)}>
            <Rect x={x} y={290} width={60} height={26} fill="none" stroke={AMBER_DARK} strokeWidth={1.6} />
            <T x={x + 30} y={308} size={12} weight={700} fill={INK}>{s}</T>
          </Fade>
        );
      })}

      {/* beat 6 — red-margin reveal: the element cell */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 450 350 L 450 440" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <Rect x={470} y={350} width={140} height={90} fill="#FFFEFB" stroke={INK} strokeWidth={2} />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.1)}>
        <T x={486} y={370} size={13} weight={700} fill={MUTED} anchor="start">25</T>
        <T x={540} y={415} size={36} weight={800} fill={INK}>Mn</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.7)}>
        <T x={540} y={464} size={15} weight={800} fill={RED}>
          {t("Z = 25 → this is MANGANESE", "Z = 25 → yeh MANGANESE hai")}
        </T>
        <T x={540} y={486} size={11} fill={MUTED}>
          {t("forms coloured compounds", "coloured compounds banata hai")}
        </T>
      </Fade>

      {/* beat 7 — closing insight */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Chip x={200} y={508} w={680} h={34} fill={GREEN} textFill="#fff" size={14} script={false}>
          {t("configuration, group rule, then property", "configuration, group rule, phir property")}
        </Chip>
      </Fade>
    </Scene>
  );
}
