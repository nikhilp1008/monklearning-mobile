/**
 * C11 Chemistry Ch03 · Section 9 — "Building and reading the long form"
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 8.79, 19.11, 37.29, 48.04, 67.67, 83.97, 94.29, 97.37]):
 *  0 title + underline
 *  1 rule 1: row = highest n being filled = PERIOD
 *  2 rule 2: last electron's subshell = your BLOCK
 *  3 rule 3: valence configuration = your GROUP
 *  4 THE FIGURE: s/p (7 rows) + d (4 rows, from period 4) region blocks,
 *    f-block pulled out below, letter labels s/p/d/f
 *  5 red-margin: group-range sub-labels appear (1-2 / 13-18 / 3-12 / below)
 *  6 the staircase drawn through the p-block; metal/non-metal note
 *  7 new heading: why this matters
 *  8 closing green stamp: derive the address, don't memorise it
 *
 * Layout plan:
 *  b1-3 | 3 rule lines (16,w700)   | T st   | x70..?    y100..152 (bl 100/126/152)
 *  b4 | s-block region             | rect   | x216..288 y172..382
 *  b4 | p-block region             | rect   | x648..864 y172..382
 *  b4 | d-block region             | rect   | x288..648 y262..382
 *  b4 | f-block region (pulled out)| rect   | x324..828 y406..466
 *  b4 | s/p/d/f letters            | T mid  | inside each region (bl 202/202/292/436)
 *  b5 | group-range sub-labels(red)| T mid  | under each letter (bl 226/226/316/458)
 *  b6 | staircase (red)            | Draw   | x684..792 y172..382
 *  b6 | note (script 13, red)      | T mid  | x?..?     y473..496 (bl 490)
 *  b7 | heading (18,w800,ink)      | T mid  | x?..?     y508..526 (bl 522)
 *  b7 | underline (amber)          | Draw   | y530 x380..700
 *  b8 | closing stamp (green)      | Chip   | x210..870 y538..574
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
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch03Sec9({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={24} fill={RED} script>
          {t("building and reading the long form", "long form banana aur padhna")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 4)} d="M 380 88 C 450 84, 630 84, 700 88" stroke={RED} sw={2.4} dur={0.7} />

      {/* beats 1-3 — three rules */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={70} y={100} size={16} weight={700} fill={INK} anchor="start">
          {t("row = highest n being filled = PERIOD", "row = highest n filled = PERIOD")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={70} y={126} size={16} weight={700} fill={INK} anchor="start">
          {t("last electron's subshell = your BLOCK (s/p/d/f)", "last electron ka subshell = BLOCK (s/p/d/f)")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={70} y={152} size={16} weight={700} fill={INK} anchor="start">
          {t("same valence config = same GROUP", "same valence config = same GROUP")}
        </T>
      </Fade>

      {/* beat 4 — the figure: block-shape regions */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <Rect x={216} y={172} width={72} height={210} fill={AMBER} fillOpacity={0.3} stroke={AMBER_DARK} strokeWidth={2} />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <Rect x={648} y={172} width={216} height={210} fill={GREEN} fillOpacity={0.25} stroke={GREEN} strokeWidth={2} />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <Rect x={288} y={262} width={360} height={120} fill={AMBER_DARK} fillOpacity={0.22} stroke={AMBER_DARK} strokeWidth={2} />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.4)}>
        <Rect x={324} y={406} width={504} height={60} fill={MUTED} fillOpacity={0.22} stroke={MUTED} strokeWidth={2} />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.8)}>
        <T x={252} y={202} size={20} fill={AMBER_DARK} weight={800}>s</T>
        <T x={756} y={202} size={20} fill={GREEN} weight={800}>p</T>
        <T x={468} y={292} size={20} fill={AMBER_DARK} weight={800}>d</T>
        <T x={576} y={436} size={18} fill={MUTED} weight={800}>f</T>
        <T x={300} y={375} size={12} fill={MUTED}>*</T>
        <T x={330} y={420} size={12} fill={MUTED}>*</T>
      </Fade>

      {/* beat 5 — red-margin: memorise the group ranges */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={252} y={226} size={11} fill={RED} weight={700}>1-2</T>
        <T x={756} y={226} size={11} fill={RED} weight={700}>13-18</T>
        <T x={468} y={316} size={11} fill={RED} weight={700}>3-12</T>
        <T x={576} y={458} size={11} fill={RED} weight={700}>{t("below", "neeche")}</T>
      </Fade>

      {/* beat 6 — the staircase: metal / non-metal boundary */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.2)}
        d="M 684 172 L 684 202 L 720 202 L 720 262 L 756 262 L 756 322 L 792 322 L 792 382"
        stroke={RED}
        sw={3}
        dur={0.9}
      />
      <Fade on={beat >= 6} delay={dl(6, 1.2)}>
        <T x={540} y={490} size={13} fill={RED} script>
          {t("the staircase in p-block ⇒ metals | non-metals (metalloids on the steps)", "p-block ki staircase ⇒ metals | non-metals (metalloids steps par)")}
        </T>
      </Fade>

      {/* beat 7 — new heading */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={522} size={18} weight={800} fill={INK}>
          {t("why this matters", "ye kyun matter karta hai")}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 1)} d="M 380 530 C 450 527, 630 527, 700 530" stroke={AMBER} sw={2.2} dur={0.5} />

      {/* beat 8 — closing insight */}
      <Fade on={beat >= 8} delay={dl(8, 0.3)}>
        <Chip x={210} y={538} w={660} h={36} fill={GREEN} textFill="#fff" size={14} script={false}>
          {t("derive the address, don't memorise it", "address derive karo, memorise mat karo")}
        </Chip>
      </Fade>
    </Scene>
  );
}
