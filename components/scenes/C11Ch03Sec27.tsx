/**
 * C11 Chemistry Ch03 · Section 27 — "Worked example: read the IE jumps to find the group"
 * Canvas 1080×620 · safe x36–1044, y30–596. JEE Main worked example.
 *
 * Beats (en [0, 20.48, 28.67, 45.14, 64.43, 69.46, 80.98, 95.66]):
 *  0 title + underline
 *  1 given: 4 IE bars for Q (736, 1448, 7720, 10560 kJ/mol)
 *  2 part (a): inspect the jumps between successive values
 *  3 red-margin: modest rise then 5x leap ⇒ 3rd e⁻ from a stable core
 *  4 green stamp: Q has 2 valence electrons
 *  5 part (b): Group 2 (alkaline earth), ns²
 *  6 part (c): +2 ion + O²⁻ (1:1) ⇒ oxide = QO
 *  7 closing amber stamp: biggest jump ⇒ electrons before it = the group
 *
 * Layout plan:
 *  b1 | intro line + 4 bars          | Draw  | x280..650 y120..270
 *  b2 | part(a) line (13,w700,amber) | T mid | x?..?     y301..315 (bl 310)
 *  b3 | jump arrow + label + line    | Draw  | x415..515 y155..245
 *  b4 | green stamp                  | Chip  | x410..670 y350..384
 *  b5 | part(b) line                 | T mid | x?..?     y393..409 (bl 404)
 *  b6 | part(c) line                 | T mid | x?..?     y417..433 (bl 428)
 *  b7 | closing stamp (amber)        | Chip  | x170..910 y445..483
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
  arrowD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

const IE = [736, 1448, 7720, 10560];
const BAR_X = [280, 380, 480, 580];
const BAR_W = 70;
const BASE_Y = 270;
const SCALE = 150 / 10560;

export default function C11Ch03Sec27({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={19} fill={RED} script>
          {t("read the IE jumps to find the group (JEE Main)", "IE jumps padho, group dhoondo (JEE Main)")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 3.5)} d="M 380 88 C 450 84, 630 84, 700 88" stroke={RED} sw={2.4} dur={0.7} />

      {/* beat 1 — given: 4 IE bars */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={540} y={96} size={13} fill={INK}>
          {t("given: first 4 IE of Q (kJ/mol)", "diya hai: Q ki pehli 4 IE (kJ/mol)")}
        </T>
      </Fade>
      {IE.map((v, i) => {
        const h = v * SCALE;
        const top = BASE_Y - h;
        const cx = BAR_X[i] + BAR_W / 2;
        return (
          <Fade key={i} on={beat >= 1} delay={dl(1, 0.4 + i * 0.25)}>
            <Rect x={BAR_X[i]} y={top} width={BAR_W} height={h} fill={AMBER} fillOpacity={0.35} stroke={AMBER_DARK} strokeWidth={2} />
            <T x={cx} y={top - 8} size={11} fill={INK} weight={700}>{v}</T>
            <T x={cx} y={286} size={12} fill={MUTED}>{`ΔiH${i + 1}`}</T>
          </Fade>
        );
      })}

      {/* beat 2 — part (a): inspect the jumps */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={310} size={13} weight={700} fill={AMBER_DARK}>
          {t("(a) inspect the jumps between successive values", "(a) successive values ke beech jumps dekho")}
        </T>
      </Fade>

      {/* beat 3 — red-margin: the 5x leap */}
      <Draw on={beat >= 3} delay={dl(3, 0.2)} d={arrowD(415, 245, 515, 155)} stroke={RED} sw={2.4} dur={0.6} />
      <Fade on={beat >= 3} delay={dl(3, 0.9)}>
        <T x={420} y={195} size={12} weight={700} fill={RED} anchor="start">
          {t("5× jump!", "5× jump!")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.3)}>
        <T x={540} y={334} size={13} weight={700} fill={RED}>
          {t("⇒ 3rd e⁻ comes from a stable core", "⇒ 3rd e⁻ ek stable core se aata")}
        </T>
      </Fade>

      {/* beat 4 — the answer to part (a) */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <Chip x={410} y={350} w={260} h={34} fill={GREEN} textFill="#fff" size={15} script={false}>
          {t("Q has 2 valence electrons", "Q ke 2 valence electrons")}
        </Chip>
      </Fade>

      {/* beat 5 — part (b): the group */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={404} size={14} weight={700} fill={AMBER_DARK}>
          {"(b) Group 2 (alkaline earth), ns²"}
        </T>
      </Fade>

      {/* beat 6 — part (c): the oxide formula */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={428} size={14} weight={700} fill={INK}>
          {"(c) +2 ion + O²⁻ (1:1) ⇒ oxide = QO"}
        </T>
      </Fade>

      {/* beat 7 — closing insight */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Chip x={170} y={445} w={740} h={38} fill={AMBER} textFill={INK} size={14} script={false}>
          {t("biggest ratio jump: electrons before it = the group", "sabse bada ratio jump: uske pehle electrons = group")}
        </Chip>
      </Fade>
    </Scene>
  );
}
