/**
 * Ch11 · Section 3 — "The logical chain behind temperature"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (8): 0 hook · 1 link1 observation · 2 link2 experiment ·
 *  3 link3 partition · 4 link4 the label · 5 link5 thermometer ·
 *  6 thermometer-touch mini demo (no direct contact) · 7 closing verdict.
 *
 * Layout plan (Anek bl−0.78s..+0.31s):
 *  title (script 30, red)      | T mid | x226..854 y31..85 (bl 70)
 *  b0 | hook (script 18,muted) | T mid | x540 y180
 *  b1..5 | 5 chain nodes r25   | Draw  | c(150/345/540/735/930, 270)
 *  b1..5 | node labels (12)    | T mid | y320, under each node
 *  b2..5 | 4 connecting arrows | Draw  | y270, between consecutive nodes
 *  b6 | 2 thermometer stems    | Draw  | x330/630 y360..400, bulb r5 y360
 *  b6 | "=" between bulbs (18) | T mid | x480 y365
 *  b6 | 2 object boxes (h55)   | Draw  | x290..370 / 590..670 y400..455
 *  b6 | demo note (13)         | T mid | x480 y480
 *  b7 | closing chip (h34)     | Chip  | x330..630 y515..549
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
  arrowD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

const NODES: [number, string, string, string][] = [
  [150, "1", "wall settles", "wall settle hoti hai"],
  [345, "2", "insulation: no change", "insulation: kuch nahi badla"],
  [540, "3", "equilibrium groups", "equilibrium groups"],
  [735, "4", "= temperature", "= temperature"],
  [930, "5", "thermometer", "seedha touch nahi"],
];

export default function Ch11Sec3({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={70} size={30} fill={AMBER_DARK} script>
          {t("the logical chain behind temperature", "temperature ke peeche ki logical chain")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={180} size={18} fill={MUTED} script>
          {t("follow each link — temperature hangs from it", "har link follow karo — temperature isi par tika hai")}
        </T>
      </Fade>

      {NODES.map(([cx, num, labelEn, labelHi], i) => {
        const bk = i + 1;
        return (
          <React.Fragment key={cx}>
            {i > 0 && (
              <Draw
                on={beat >= bk}
                delay={dl(bk, 0)}
                d={arrowD(NODES[i - 1][0] + 25, 270, cx - 25, 270)}
                stroke={AMBER_DARK}
                sw={2.2}
                dur={0.5}
              />
            )}
            <Draw
              on={beat >= bk}
              delay={dl(bk, i > 0 ? 0.6 : 0)}
              d={`M ${cx - 25} 270 a 25 25 0 1 0 0.01 0`}
              stroke={INK}
              sw={2.4}
              dur={0.6}
            />
            <Fade on={beat >= bk} delay={dl(bk, i > 0 ? 1 : 0.4)}>
              <T x={cx} y={277} size={20} fill={INK} weight={800} script={false}>
                {num}
              </T>
            </Fade>
            <Fade on={beat >= bk} delay={dl(bk, i > 0 ? 1.4 : 0.8)}>
              <T x={cx} y={330} size={12} fill={AMBER_DARK} script={false}>
                {t(labelEn, labelHi)}
              </T>
            </Fade>
          </React.Fragment>
        );
      })}

      {/* beat 6 — the payoff, demonstrated: no direct contact needed */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 330 360 v 40" stroke={AMBER_DARK} sw={2.2} dur={0.4} />
      <Draw on={beat >= 6} delay={dl(6, 0.4)} d="M 630 360 v 40" stroke={AMBER_DARK} sw={2.2} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.7)}>
        <Circle cx={330} cy={360} r={5} fill={AMBER} stroke={INK} strokeWidth={1.4} />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.9)}>
        <Circle cx={630} cy={360} r={5} fill={AMBER} stroke={INK} strokeWidth={1.4} />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.3)}>
        <T x={480} y={365} size={18} fill={GREEN} weight={800} script={false}>
          =
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.8)} d="M 290 400 h 80 v 55 h -80 z" stroke={INK} sw={2.2} dur={0.6} />
      <Draw on={beat >= 6} delay={dl(6, 2.1)} d="M 590 400 h 80 v 55 h -80 z" stroke={INK} sw={2.2} dur={0.6} />
      <Fade on={beat >= 6} delay={dl(6, 2.8)}>
        <T x={480} y={480} size={13} fill={MUTED} script={false}>
          {t("same reading ⇒ same T — no touching needed", "same reading ⇒ same T — touch ki zaroorat nahi")}
        </T>
      </Fade>

      {/* beat 7 — closing verdict */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <Chip x={330} y={515} w={300} h={34} fill={INK} textFill={CREAM} size={15}>
          {t("empirical — power is pure logic", "empirical — power sirf logic mein hai")}
        </Chip>
      </Fade>
    </Scene>
  );
}
