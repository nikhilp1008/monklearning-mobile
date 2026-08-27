/**
 * C11 Chemistry Ch03 · Section 34 — "Across period 3: metal to non-metal, basic to acidic"
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 7.51, 18.77, 29.35, 40.19, 65.02, 82.26, 92.76]):
 *  0 title + underline
 *  1 metallic ↓ across; non-metallic ↑
 *  2 down a group: metallic ↑ (reverse)
 *  3 oxide character shadows it: basic → amphoteric → acidic
 *  4 red-margin: THE STRIP — 8 period-3 cells, colour-coded by character
 *  5 oxide formulas under each cell
 *  6 reducing-power arrow (left) / oxidising-power arrow (right)
 *  7 closing green stamp: one strip captures it all
 *
 * Layout plan:
 *  b1-3 | 3 lines                    | T mid | x?..?     y95..149 (bl100/122/144)
 *  b4 | 8 cells, colour-coded        | Draw  | x112..968 y165..215
 *  b4 | red margin bar               | Draw  | x70 y165..215
 *  b5 | 8 oxide labels               | T mid | bl 235
 *  b6 | reducing/oxidising arrows    | Draw  | y270; labels bl 290
 *  b7 | closing stamp (green)        | Chip  | x200..880 y310..348
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

const SYM = ["Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar"];
const OXIDES = ["Na₂O", "MgO", "Al₂O₃", "SiO₂", "P₂O₅", "SO₃", "Cl₂O₇", "noble"];
const CELL_X0 = 112;
const CELL_W = 100;
const STEP = 108;
const CX = SYM.map((_, i) => CELL_X0 + i * STEP + CELL_W / 2);
const ZONE_COLOR = [AMBER_DARK, AMBER_DARK, MUTED, MUTED, RED, RED, RED, INK];
const ZONE_FILL = [AMBER, AMBER, MUTED, MUTED, RED, RED, RED, "#FFFEFB"];

export default function C11Ch03Sec34({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={18} fill={RED} script>
          {t("across period 3: metal to non-metal, basic to acidic", "period 3 ke across: metal se non-metal, basic se acidic")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 3.5)} d="M 380 88 C 450 84, 630 84, 700 88" stroke={RED} sw={2.4} dur={0.7} />

      {/* beats 1-3 — the master trends */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={100} size={13} fill={INK}>
          {t("metallic ↓ across a period; non-metallic ↑", "metallic ↓ period ke across; non-metallic ↑")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={122} size={13} fill={INK}>
          {t("down a group: metallic character ↑ (reverse)", "group mein neeche: metallic character ↑ (reverse)")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={144} size={13} weight={700} fill={AMBER_DARK}>
          {t("oxide character shadows it: basic → amphoteric → acidic", "oxide character isko follow karta: basic → amphoteric → acidic")}
        </T>
      </Fade>

      {/* beat 4 — red-margin: the strip */}
      <Draw on={beat >= 4} delay={dl(4, 0.2)} d="M 70 165 L 70 215" stroke={RED} sw={4} dur={0.4} />
      {SYM.map((s, i) => (
        <Fade key={s} on={beat >= 4} delay={dl(4, 0.4 + i * 0.1)}>
          <Rect x={CELL_X0 + i * STEP} y={165} width={CELL_W} height={50} fill={ZONE_FILL[i]} fillOpacity={0.3} stroke={ZONE_COLOR[i]} strokeWidth={2} />
          <T x={CX[i]} y={196} size={16} fill={INK} weight={800}>{s}</T>
        </Fade>
      ))}

      {/* beat 5 — the oxide progression */}
      {OXIDES.map((ox, i) => (
        <Fade key={ox} on={beat >= 5} delay={dl(5, 0.1 * i)}>
          <T x={CX[i]} y={235} size={11} fill={MUTED}>{ox}</T>
        </Fade>
      ))}

      {/* beat 6 — reducing (left) / oxidising (right) power */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d={arrowD(280, 270, 160, 270)} stroke={AMBER_DARK} sw={2.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={220} y={290} size={12} weight={700} fill={AMBER_DARK}>
          {t("reducing power", "reducing power")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.2)} d={arrowD(600, 270, 820, 270)} stroke={RED} sw={2.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 1.8)}>
        <T x={706} y={290} size={12} weight={700} fill={RED}>
          {t("oxidising power", "oxidising power")}
        </T>
      </Fade>

      {/* beat 7 — closing insight */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Chip x={200} y={310} w={680} h={38} fill={GREEN} textFill="#fff" size={15} script={false}>
          {t("one strip captures the whole period's chemistry", "ek strip poore period ki chemistry samet leti")}
        </Chip>
      </Fade>
    </Scene>
  );
}
