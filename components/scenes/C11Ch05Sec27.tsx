/**
 * C11 Chemistry Ch05 · Section 27 — "The four idealised processes of a gas"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (board_reveal_at, en [0,10.24,22.27,36.52,46.08,56.23,65.79,80.13]):
 *  0 P-V axes + common start point (anchor)
 *  1 isothermal curve + label (ink)
 *  2 adiabatic curve + label (red, steeper — high emphasis)
 *  3 red note: diesel engine ≈ adiabatic
 *  4 isobaric line + label (green)
 *  5 isochoric line + label (amber — high emphasis)
 *  6 red note: ΔU, ΔH depend only on ΔT, never path (high emphasis)
 *  7 green stamp: same start, four paths
 *
 * Layout plan:
 *  b0 | v-axis / h-axis                | Draw  | x140 y95..400; y400 x140..820
 *  b0 | start dot                      | circle| (250,150)
 *  b1 | isothermal curve (ink)         | Draw  | (250,150)→(650,290)
 *  b2 | adiabatic curve (red)          | Draw  | (250,150)→(520,370)
 *  b3 | red note1 chip (14)            | Chip  | x215..865 y440..475
 *  b4 | isobaric line (green)          | Draw  | (250,150)→(650,150)
 *  b5 | isochoric line (amber)         | Draw  | (250,150)→(250,370)
 *  b6 | red note2 chip (14)            | Chip  | x215..865 y490..525
 *  b7 | final stamp (15, green)        | Chip  | x260..820 y538..574
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

export default function C11Ch05Sec27({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={26} fill={RED} script>
          {t("four idealised gas processes", "four idealised gas processes")}
        </T>
      </Fade>

      {/* beat 0 — axes + start point */}
      <Draw on={beat >= 0} delay={dl(0, 0)} d="M 140 400 L 140 95" stroke={INK} sw={2} dur={0.5} />
      <Draw on={beat >= 0} delay={dl(0, 0.3)} d="M 140 400 L 820 400" stroke={INK} sw={2} dur={0.5} />
      <Fade on={beat >= 0} delay={dl(0, 0.6)}>
        <T x={125} y={110} size={12} fill={MUTED} anchor="end">Pressure</T>
        <T x={820} y={420} size={12} fill={MUTED} anchor="end">Volume</T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 0.9)}>
        <Circle cx={250} cy={150} r={5} fill={INK} />
      </Fade>

      {/* beat 1 — isothermal */}
      <Draw on={beat >= 1} delay={dl(1, 0)} d="M 250 150 C 380 160, 520 220, 650 290" stroke={INK} sw={2.4} dur={0.7} />
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <T x={660} y={295} size={13} fill={INK} anchor="start">
          {t("isothermal", "isothermal")}
        </T>
      </Fade>

      {/* beat 2 — adiabatic */}
      <Draw on={beat >= 2} delay={dl(2, 0)} d="M 250 150 C 350 180, 450 280, 520 370" stroke={RED} sw={2.4} dur={0.7} />
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={530} y={378} size={13} weight={700} fill={RED} anchor="start">
          {t("adiabatic", "adiabatic")}
        </T>
      </Fade>

      {/* beat 3 — red note: diesel engine */}
      <Fade on={beat >= 3} delay={dl(3, 0.15)}>
        <Chip x={215} y={440} w={650} h={35} fill={CREAM} stroke={RED} textFill={RED} size={14} script={false}>
          {t(
            "diesel engine: compress air until hot enough to ignite fuel — nearly ADIABATIC",
            "diesel engine: air compress karta hai jab tak fuel ignite na ho — lagbhag ADIABATIC"
          )}
        </Chip>
      </Fade>

      {/* beat 4 — isobaric */}
      <Draw on={beat >= 4} delay={dl(4, 0)} d="M 250 150 L 650 150" stroke={GREEN} sw={2.4} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={660} y={145} size={13} fill={GREEN} anchor="start">
          {t("isobaric", "isobaric")}
        </T>
      </Fade>

      {/* beat 5 — isochoric */}
      <Draw on={beat >= 5} delay={dl(5, 0)} d="M 250 150 L 250 370" stroke={AMBER_DARK} sw={2.4} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={130} y={260} size={13} weight={700} fill={AMBER_DARK} anchor="end">
          {t("isochoric", "isochoric")}
        </T>
      </Fade>

      {/* beat 6 — red note: path independence */}
      <Fade on={beat >= 6} delay={dl(6, 0.15)}>
        <Chip x={215} y={490} w={650} h={35} fill={CREAM} stroke={RED} textFill={RED} size={14} script={false}>
          {t(
            "for ideal gas: ΔU, ΔH depend only on ΔT — never on the path",
            "ideal gas ke liye: ΔU, ΔH sirf ΔT par depend karte hain — path par kabhi nahi"
          )}
        </Chip>
      </Fade>

      {/* beat 7 — final stamp */}
      <Fade on={beat >= 7} delay={dl(7, 0.15)}>
        <Chip x={260} y={538} w={560} h={36} fill={GREEN} textFill="#fff" size={15} script={false}>
          {t(
            "same start, four paths — pick the one that fixes YOUR variable",
            "same start, chaar paths — jo tumhara variable fix kare wahi choose karo"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
