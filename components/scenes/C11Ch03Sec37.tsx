/**
 * C11 Chemistry Ch03 · Section 37 — "Worked example: formula from group positions"
 * Canvas 1080×620 · safe x36–1044, y30–596. CBSE worked example.
 *
 * Beats (en [0, 7.59, 19.54, 30.89, 42.07, 64.43, 72.28, 84.22]):
 *  0 title + underline
 *  1 given: X in group 2, Y in group 15 — formula? oxidation states?
 *  2 X: group 2, loses 2e⁻, valence 2, forms X²⁺
 *  3 Y: group 15, gains 3e⁻, valence 3, forms Y³⁻
 *  4 red-margin: criss-cross arrows + 2×3=3×2=6 ⇒ green X₃Y₂ stamp
 *  5 oxidation states: X=+2, Y=−3
 *  6 classic slip: writing XY (1:1) — always cross the valences
 *  7 closing green stamp: cross the valences, never guess 1:1
 *
 * Layout plan:
 *  b2 | X²⁺ + label                  | T mid | x300  y130..165 (bl130/165)
 *  b3 | Y³⁻ + label                  | T mid | x780  y130..165 (bl130/165)
 *  b4 | 2 criss-cross arrows         | Draw  | x340..730 y180..215
 *  b4 | red margin bar + math        | Draw  | x70 y190..222 (bl 212)
 *  b4 | result stamp (green)         | Chip  | x440..640 y235..285
 *  b5 | OS line                      | T mid | x?..?     y296..310 (bl 310)
 *  b6 | slip line (red)              | T mid | x?..?     y320..334 (bl 334)
 *  b7 | closing stamp (green)        | Chip  | x250..830 y350..386
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
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch03Sec37({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("formula from group positions (CBSE)", "group positions se formula (CBSE)")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 3.5)} d="M 380 88 C 450 84, 630 84, 700 88" stroke={RED} sw={2.4} dur={0.7} />

      {/* beat 1 — given */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={100} size={13} fill={INK}>
          {t("X: group 2 · Y: group 15 → formula? oxidation states?", "X: group 2 · Y: group 15 → formula? oxidation states?")}
        </T>
      </Fade>

      {/* beat 2 — X analysis */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={300} y={130} size={24} weight={800} fill={INK}>X²⁺</T>
        <T x={300} y={165} size={12} fill={MUTED}>
          {t("group 2, loses 2e⁻", "group 2, 2e⁻ khota")}
        </T>
      </Fade>

      {/* beat 3 — Y analysis */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={780} y={130} size={24} weight={800} fill={INK}>Y³⁻</T>
        <T x={780} y={165} size={12} fill={MUTED}>
          {t("group 15, gains 3e⁻", "group 15, 3e⁻ paata")}
        </T>
      </Fade>

      {/* beat 4 — red-margin: cross-balance */}
      <Draw on={beat >= 4} delay={dl(4, 0.2)} d="M 340 180 L 730 215" stroke={AMBER_DARK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 4} delay={dl(4, 0.5)} d="M 730 180 L 340 215" stroke={AMBER_DARK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 4} delay={dl(4, 0.9)} d="M 70 190 L 70 222" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 1.4)}>
        <T x={94} y={212} size={15} weight={700} fill={INK} anchor="start">
          {"cross-balance: 2×3 = 3×2 = 6 ⇒ formula = X₃Y₂"}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <Chip x={440} y={235} w={200} h={50} fill={GREEN} textFill="#fff" size={22} script={false}>
          X₃Y₂
        </Chip>
      </Fade>

      {/* beat 5 — the oxidation states */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={310} size={13} weight={700} fill={INK}>
          {"oxidation states: X = +2, Y = −3"}
        </T>
      </Fade>

      {/* beat 6 — the classic slip */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={334} size={13} weight={700} fill={RED}>
          {t("classic slip: writing XY (1:1) — always cross the valences", "classic slip: XY (1:1) likhna — hamesha valences cross karo")}
        </T>
      </Fade>

      {/* beat 7 — closing insight */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Chip x={250} y={350} w={580} h={36} fill={GREEN} textFill="#fff" size={14} script={false}>
          {t("cross the valences, never guess one-to-one", "valences cross karo, kabhi 1:1 mat guess karo")}
        </Chip>
      </Fade>
    </Scene>
  );
}
