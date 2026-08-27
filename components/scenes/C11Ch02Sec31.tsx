/**
 * C11 Ch02 · Section 31 — "Energy of the orbit: the KE and PE split"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (en [0, 12.12, 22.87, 31.49, 41.22, 48.3, 58.88, 68.95]):
 *  0 anchor: "energy: kinetic plus potential in the well"
 *  1 formula: KE = ½mv² = Ze²/8πε₀r
 *  2 formula: PE = −Ze²/4πε₀r
 *  3 represent + guardrail: an energy well, electron sitting below E=0
 *  4 formula: Eₙ = KE + PE = −Ze²/8πε₀r
 *  5 formula (high, GREEN): Eₙ = −13.6 Z²/n² eV
 *  6 guardrail (high): PE = −2·KE  and  E = −KE
 *  7 explain: the staircase from before, now with real numbers
 *
 * Layout plan (single column, x540 center):
 *  title (always)           | T mid | x540 y52 size15 script red
 *  b0 | anchor caption       | T mid | x540 y76             [dims@b1]
 *  b1 | KE chip              | Chip  | x380..700 y98..130
 *  b2 | PE chip              | Chip  | x400..680 y145..177
 *  b3 | E=0 line + well curve| Draw  | x150..560 y210..280
 *  b3 | electron dot + label | Fade/T| (350,255) / x380 y265
 *  b3 | guardrail caption    | T mid | x540 y330
 *  b4 | Eₙ=KE+PE chip        | Chip  | x350..730 y360..392
 *  b5 | Eₙ=-13.6Z²/n² (GREEN)| Chip  | x380..700 y405..443
 *  b6 | guardrail (RED)      | Chip  | x330..750 y460..496
 *  b7 | staircase caption    | T mid | x540 y525
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
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch02Sec31({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={52} size={15} fill={RED} script>
          {t("energy of the orbit: the KE and PE split", "orbit ki energy: KE aur PE ka split")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} dim={beat >= 1} delay={dl(0, 0.3)}>
        <T x={540} y={76} size={11} fill={RED} script>
          {t("energy: kinetic plus potential in the well", "energy: kinetic plus potential, well ke andar")}
        </T>
      </Fade>

      {/* beat 1 — kinetic energy */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <Chip x={380} y={98} w={320} h={32} fill={CREAM} stroke={AMBER_DARK} textFill={AMBER_DARK} size={15} script={false}>
          KE = ½mv² = Ze²/8πε₀r
        </Chip>
      </Fade>

      {/* beat 2 — potential energy */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <Chip x={400} y={145} w={280} h={32} fill={CREAM} stroke={AMBER_DARK} textFill={AMBER_DARK} size={15} script={false}>
          PE = −Ze²/4πε₀r
        </Chip>
      </Fade>

      {/* beat 3 — represent + guardrail: the energy well */}
      <Draw on={beat >= 3} delay={dl(3, 0.2)} d="M 150 210 H 560" stroke={INK} sw={1.6} dur={0.6} />
      <Draw on={beat >= 3} delay={dl(3, 0.7)} d="M 150 210 Q 350 300 550 210" stroke={AMBER_DARK} sw={2.2} dur={0.8} />
      <Fade on={beat >= 3} delay={dl(3, 1.6)}>
        <Circle cx={350} cy={255} r={5} fill={RED} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.9)}>
        <T x={380} y={265} size={11} fill={RED} anchor="start">
          {t("electron: E < 0", "electron: E < 0")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.2)}>
        <T x={575} y={214} size={12} fill={INK} anchor="start">
          E = 0
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.6)}>
        <T x={540} y={330} size={13} fill={RED} script>
          {t(
            "PE negative — sits in a well below zero",
            "PE negative — zero se neeche ek well mein baitha hai"
          )}
        </T>
      </Fade>

      {/* beat 4 — combine: Eₙ = KE + PE */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <Chip x={350} y={360} w={380} h={32} fill={CREAM} stroke={AMBER_DARK} textFill={AMBER_DARK} size={15} script={false}>
          Eₙ = KE + PE = −Ze²/8πε₀r
        </Chip>
      </Fade>

      {/* beat 5 — land (high, GREEN) */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Chip x={380} y={405} w={320} h={38} fill={GREEN} textFill="#fff" size={18} script={false}>
          Eₙ = −13.6 Z²/n² eV
        </Chip>
      </Fade>

      {/* beat 6 — guardrail (high): the two relations to memorise */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Chip x={330} y={460} w={420} h={36} fill={CREAM} stroke={RED} textFill={RED} size={15} script={false}>
          PE = −2·KE   and   E = −KE
        </Chip>
      </Fade>

      {/* beat 7 — explain: the staircase, now with real numbers */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={525} size={13} fill={INK} script>
          {t(
            "negative, 1/n²-spaced levels — the staircase, now with real numbers",
            "negative, 1/n² spaced levels — wahi staircase, ab real numbers ke saath"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
