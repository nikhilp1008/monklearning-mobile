/**
 * P12Ch04 · Section 17 — "Concept Intuition, Part A: The Force That Only Steers"
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * WHAT IT USED TO SHOW: an unfinished remnant of an earlier pass — three prose
 * panels plus a full-width footer chip, all gated on beats 0/1/5/7 of an
 * 8-beat narration. Beats 2, 3, 4 and 6 never fired, so the board sat frozen
 * for a minute at a stretch, and the only four drawn strokes were the title
 * underline and three horizontal rules. Not one figure.
 *
 * WHAT THE NARRATION TEACHES: the whole of Subtopic 3 rests on one law,
 * F = q(v × B). Part A applies it to FREE charges: the cross product keeps the
 * force permanently perpendicular to v, so it can never change the speed — it
 * only steers. Hence zero work, constant KE, a perfect circle when v ⊥ B and a
 * helix when v is at an angle (the along-B part coasts, the across-B part
 * circles). Two machines are built on that steering — the velocity selector
 * and the cyclotron. Segment 4 narrates a circular-motion figure element by
 * element (crosses = B into the page, green v, red F, the small right-angle
 * square, the dashed orbit), so that figure is drawn exactly as described.
 *
 * BEAT MAP (8 beats, gates 0..7 — every beat used):
 *   0  title + where the marks are (CBSE / JEE Main / JEE Adv / NEET)
 *   1  the grab-bag: three phenomena converge on ONE law
 *   2  the law itself — F = q(v × B),  |F| = q v B sin θ
 *   3  Part A, free charges: F ⊥ v at every instant
 *   4  THE CIRCULAR-MOTION FIGURE (⊗ field, dashed orbit, v, F, the
 *      right-angle square, and the pair redrawn a moment later)
 *   5  zero work · speed and KE constant · steering wheel, not accelerator
 *   6  the stone on a string · v ⊥ B → circle · v at an angle → HELIX (drawn)
 *   7  the two machines: velocity selector (drawn opposing pushes), cyclotron
 *
 * Layout: col A x44..350 (exam map, the one law) · col B x368..700 (Part A and
 * the orbit figure) · col C x718..1044 (zero work, the helix, the machines).
 */

import React from "react";
import { Path } from 'react-native-svg';
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
  INK_LIGHT,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

/** circle as a drawable path */
const circD = (cx: number, cy: number, r: number) =>
  `M ${cx - r} ${cy} A ${r} ${r} 0 1 1 ${cx + r} ${cy} A ${r} ${r} 0 1 1 ${cx - r} ${cy}`;
/** ⊗ — into the page */
const crossInD = (cx: number, cy: number, r: number) => {
  const k = r * 0.68;
  return `${circD(cx, cy, r)} M ${cx - k} ${cy - k} L ${cx + k} ${cy + k} M ${
    cx + k
  } ${cy - k} L ${cx - k} ${cy + k}`;
};

export default function P12Ch04Sec17({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ═══ beat 0 — title + where the marks are ═══ */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={44} size={25} fill={RED} script>
          {t("Part A — The Force That Only Steers", "Part A — The Force That Only Steers")}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 1.4)}
        d="M 316 58 C 470 54, 630 62, 764 57"
        stroke={RED}
        sw={2.2}
        dur={0.7}
      />

      {/* ═════════════ COLUMN A — x 44..350 ═════════════ */}

      <Fade on={beat >= 0} delay={dl(0, 2.0)}>
        <T x={44} y={98} size={13} fill={RED} anchor="start" weight={800}>
          {t("WHERE THE MARKS ARE", "WHERE THE MARKS ARE")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.3)} d="M 44 104 L 216 104" stroke={RED} sw={1.8} dur={0.4} />
      <Fade on={beat >= 0} delay={dl(0, 2.6)}>
        <T x={44} y={122} size={12.5} fill={INK} anchor="start" weight={800}>
          {t("CBSE · 3 to 5 marks", "CBSE · 3 to 5 marks")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 2.9)}>
        <T x={44} y={140} size={12.5} fill={INK} anchor="start">
          {t("torque on a loop, or parallel wires,", "torque on a loop, or parallel wires,")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 3.2)}>
        <T x={44} y={158} size={12.5} fill={INK} anchor="start">
          {t("plus a galvanometer short answer", "plus a galvanometer short answer")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 3.6)}>
        <T x={44} y={182} size={12.5} fill={INK} anchor="start" weight={800}>
          {t("JEE Main · 2 to 3 questions", "JEE Main · 2 to 3 questions")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 3.9)}>
        <T x={44} y={200} size={12.5} fill={INK} anchor="start">
          {t("circular-motion period · velocity", "circular-motion period · velocity")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 4.2)}>
        <T x={44} y={218} size={12.5} fill={INK} anchor="start">
          {t("selector · force between two wires", "selector · force between two wires")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 4.6)}>
        <T x={44} y={242} size={12.5} fill={INK} anchor="start" weight={800}>
          {t("JEE Advanced · multi-step", "JEE Advanced · multi-step")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 4.9)}>
        <T x={44} y={260} size={12.5} fill={INK} anchor="start">
          {t("a loop near a wire · cyclotron energy", "a loop near a wire · cyclotron energy")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 5.2)}>
        <T x={44} y={278} size={12.5} fill={INK} anchor="start">
          {t("· equilibrium and levitation", "· equilibrium and levitation")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 5.6)}>
        <T x={44} y={302} size={12.5} fill={INK} anchor="start" weight={800}>
          {t("NEET · conceptual", "NEET · conceptual")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 5.9)}>
        <T x={44} y={320} size={12.5} fill={INK} anchor="start">
          {t("does the magnetic force do work? ·", "does the magnetic force do work? ·")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 6.2)}>
        <T x={44} y={338} size={12.5} fill={INK} anchor="start">
          {t("cyclotron frequency · attract or repel", "cyclotron frequency · attract or repel")}
        </T>
      </Fade>

      {/* beat 1 — the grab-bag collapses to one law */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={44} y={366} size={13} fill={RED} anchor="start" weight={800}>
          {t("IT LOOKS LIKE A GRAB-BAG", "IT LOOKS LIKE A GRAB-BAG")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.5)} d="M 44 372 L 240 372" stroke={RED} sw={1.8} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={44} y={390} size={12.5} fill={INK} anchor="start">
          {t("charges spiralling through space", "charges spiralling through space")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.2)}>
        <T x={44} y={408} size={12.5} fill={INK} anchor="start">
          {t("wires pushing on each other", "wires pushing on each other")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <T x={44} y={426} size={12.5} fill={INK} anchor="start">
          {t("coils twisting in a galvanometer", "coils twisting in a galvanometer")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.9)} d={arrowD(266, 386, 304, 404)} stroke={MUTED} sw={1.6} dur={0.3} />
      <Draw on={beat >= 1} delay={dl(1, 2.1)} d={arrowD(266, 404, 304, 404)} stroke={MUTED} sw={1.6} dur={0.3} />
      <Draw on={beat >= 1} delay={dl(1, 2.3)} d={arrowD(266, 422, 304, 404)} stroke={MUTED} sw={1.6} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 2.7)}>
        <Chip x={44} y={440} w={306} h={36} fill={GREEN} textFill="#ffffff" size={13.5}>
          {t("ONE law: B pushes on MOVING charge", "ONE law: B pushes on MOVING charge")}
        </Chip>
      </Fade>

      {/* beat 2 — the law */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={44} y={504} size={13} fill={RED} anchor="start" weight={800}>
          {t("THE ONE LAW", "THE ONE LAW")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.5)} d="M 44 510 L 148 510" stroke={RED} sw={1.8} dur={0.3} />
      <Fade on={beat >= 2} delay={dl(2, 0.9)}>
        <T x={44} y={532} size={16} fill={INK} anchor="start" weight={800}>
          F = q ( v × B )
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.4)}>
        <T x={44} y={552} size={12.5} fill={INK_LIGHT} anchor="start">
          {t("| F | = q v B sin θ", "| F | = q v B sin θ")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.8)}>
        <T x={44} y={574} size={12.5} fill={MUTED} anchor="start">
          {t("Subtopic 1 used it only to DEFINE B", "Subtopic 1 used it only to DEFINE B")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.1)}>
        <T x={44} y={592} size={12.5} fill={MUTED} anchor="start">
          {t("now take it seriously as a FORCE law", "now take it seriously as a FORCE law")}
        </T>
      </Fade>

      {/* ═════════════ COLUMN B — x 368..700 ═════════════ */}

      {/* beat 3 — the perpendicularity */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={368} y={98} size={13} fill={RED} anchor="start" weight={800}>
          {t("PART A — FREE CHARGES IN A FIELD", "PART A — FREE CHARGES IN A FIELD")}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 0.5)} d="M 368 104 L 648 104" stroke={RED} sw={1.8} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 0.9)}>
        <T x={368} y={124} size={13.5} fill={INK} anchor="start" weight={800}>
          {t("F ⊥ v  at every instant — ALWAYS", "F ⊥ v  at every instant — ALWAYS")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.4)}>
        <T x={368} y={144} size={12.5} fill={INK} anchor="start">
          {t("no component along the direction of travel", "no component along the direction of travel")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.8)}>
        <T x={368} y={162} size={12.5} fill={INK} anchor="start">
          {t("⇒ it cannot speed up, cannot slow down", "⇒ it cannot speed up, cannot slow down")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.2)}>
        <T x={368} y={182} size={12.5} fill={GREEN} anchor="start" weight={800}>
          {t("all it can do is bend the path sideways", "all it can do is bend the path sideways")}
        </T>
      </Fade>

      {/* beat 4 — THE CIRCULAR-MOTION FIGURE */}
      <Draw on={beat >= 4} delay={dl(4, 0.2)} d={crossInD(398, 262, 9)} stroke={AMBER_DARK} sw={1.8} dur={0.3} />
      <Draw on={beat >= 4} delay={dl(4, 0.4)} d={crossInD(670, 262, 9)} stroke={AMBER_DARK} sw={1.8} dur={0.3} />
      <Draw on={beat >= 4} delay={dl(4, 0.6)} d={crossInD(398, 418, 9)} stroke={AMBER_DARK} sw={1.8} dur={0.3} />
      <Draw on={beat >= 4} delay={dl(4, 0.8)} d={crossInD(670, 418, 9)} stroke={AMBER_DARK} sw={1.8} dur={0.3} />
      <Fade on={beat >= 4} delay={dl(4, 1.1)}>
        <T x={534} y={452} size={12.5} fill={AMBER_DARK} weight={800}>
          {t("the crosses ⊗ = B into the page", "the crosses ⊗ = B into the page")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.4)}>
        <Path
          d={circD(534, 340, 92)}
          fill="none"
          stroke={MUTED}
          strokeWidth={1.8}
          strokeDasharray="7 7"
        />
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1.7)} d={circD(534, 340, 3)} stroke={INK} sw={2} dur={0.2} fill={INK} />
      {/* the particle at the top: v to the right, F straight down */}
      <Draw on={beat >= 4} delay={dl(4, 2.0)} d={circD(534, 248, 6)} stroke={GREEN} sw={2} dur={0.3} fill={CREAM} />
      <Draw on={beat >= 4} delay={dl(4, 2.3)} d={arrowD(542, 248, 626, 248)} stroke={GREEN} sw={2.4} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 2.7)}>
        <T x={636} y={244} size={13} fill={GREEN} anchor="start" weight={800}>v</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 2.9)} d={arrowD(534, 256, 534, 320)} stroke={RED} sw={2.4} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 3.3)}>
        <T x={544} y={300} size={13} fill={RED} anchor="start" weight={800}>F</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 3.5)} d="M 552 248 L 552 266 L 534 266" stroke={MUTED} sw={1.5} dur={0.3} />
      {/* a moment later — the pair has rotated, still perpendicular */}
      <Draw on={beat >= 4} delay={dl(4, 3.9)} d={circD(605, 281, 6)} stroke={GREEN} sw={2} dur={0.3} fill={CREAM} />
      <Draw on={beat >= 4} delay={dl(4, 4.2)} d={arrowD(610, 287, 645, 328)} stroke={GREEN} sw={2.2} dur={0.35} />
      <Draw on={beat >= 4} delay={dl(4, 4.5)} d={arrowD(600, 286, 559, 320)} stroke={RED} sw={2.2} dur={0.35} />
      <Fade on={beat >= 4} delay={dl(4, 4.9)}>
        <T x={368} y={480} size={12.5} fill={INK} anchor="start">
          {t("a moment later the pair has turned — F is", "a moment later the pair has turned — F is")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 5.2)}>
        <T x={368} y={498} size={12.5} fill={INK} anchor="start">
          {t("still exactly perpendicular to v", "still exactly perpendicular to v")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 5.6)}>
        <Chip x={368} y={510} w={332} h={38} fill={CREAM} stroke={RED} textFill={INK} size={16}>
          {t("round and round at CONSTANT speed", "round and round at CONSTANT speed")}
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 6.1)}>
        <T x={368} y={572} size={12.5} fill={RED} anchor="start" weight={800}>
          {t("the small square marks that right angle —", "the small square marks that right angle —")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 6.4)}>
        <T x={368} y={590} size={12.5} fill={RED} anchor="start" weight={800}>
          {t("it is the whole story of Part A", "it is the whole story of Part A")}
        </T>
      </Fade>

      {/* ═════════════ COLUMN C — x 718..1044 ═════════════ */}

      {/* beat 5 — zero work */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={718} y={98} size={13} fill={RED} anchor="start" weight={800}>
          {t("ZERO WORK — SAY IT FLATLY", "ZERO WORK — SAY IT FLATLY")}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 0.5)} d="M 718 104 L 940 104" stroke={RED} sw={1.8} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.9)}>
        <T x={718} y={124} size={13.5} fill={INK} anchor="start" weight={800}>
          {t("W = 0   (never a force along the path)", "W = 0   (never a force along the path)")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.4)}>
        <T x={718} y={142} size={12.5} fill={INK} anchor="start">
          {t("speed constant · kinetic energy constant", "speed constant · kinetic energy constant")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.8)}>
        <T x={718} y={160} size={12.5} fill={INK} anchor="start">
          {t("only the DIRECTION of v changes", "only the DIRECTION of v changes")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2.2)}>
        <Chip x={718} y={172} w={326} h={36} fill={GREEN} textFill="#ffffff" size={13.5}>
          {t("a steering wheel, never an accelerator", "a steering wheel, never an accelerator")}
        </Chip>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2.7)}>
        <T x={718} y={230} size={12.5} fill={RED} anchor="start" weight={800}>
          {t("trap: the direction changes, so there IS an", "trap: the direction changes, so there IS an")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 3.0)}>
        <T x={718} y={248} size={12.5} fill={RED} anchor="start" weight={800}>
          {t("acceleration — but the SPEED must not", "acceleration — but the SPEED must not")}
        </T>
      </Fade>

      {/* beat 6 — the string, and the helix */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={718} y={276} size={13} fill={RED} anchor="start" weight={800}>
          {t("THE STONE ON A STRING · THE HELIX", "THE STONE ON A STRING · THE HELIX")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 0.5)} d="M 718 282 L 1006 282" stroke={RED} sw={1.8} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.9)}>
        <T x={718} y={300} size={12.5} fill={INK} anchor="start">
          {t("the tension points inward, ⊥ to the motion:", "the tension points inward, ⊥ to the motion:")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.2)}>
        <T x={718} y={318} size={12.5} fill={INK} anchor="start">
          {t("it never speeds the stone up, only curves it", "it never speeds the stone up, only curves it")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={718} y={340} size={12.5} fill={INK} anchor="start" weight={800}>
          {t("v ⊥ B  →  a perfect circle", "v ⊥ B  →  a perfect circle")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.0)}>
        <T x={718} y={358} size={12.5} fill={INK} anchor="start" weight={800}>
          {t("v at an angle to B  →  a HELIX", "v at an angle to B  →  a HELIX")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 2.4)} d={arrowD(736, 396, 1010, 396)} stroke={AMBER_DARK} sw={1.8} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 2.9)}>
        <T x={1018} y={392} size={12.5} fill={AMBER_DARK} anchor="start" weight={800}>B</T>
      </Fade>
      <Draw
        on={beat >= 6}
        delay={dl(6, 3.1)}
        d="M 744 396 C 756 368, 782 368, 794 396 C 806 424, 832 424, 844 396 C 856 368, 882 368, 894 396 C 906 424, 932 424, 944 396 C 954 374, 980 372, 996 388"
        stroke={GREEN}
        sw={2.2}
        dur={1.3}
      />
      <Fade on={beat >= 6} delay={dl(6, 4.3)}>
        <T x={718} y={440} size={12.5} fill={INK} anchor="start">
          {t("the part of v ALONG B feels no force at all", "the part of v ALONG B feels no force at all")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 4.6)}>
        <T x={718} y={458} size={12.5} fill={INK} anchor="start">
          {t("and coasts straight; the part ACROSS circles", "and coasts straight; the part ACROSS circles")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 5.0)}>
        <T x={718} y={476} size={12.5} fill={GREEN} anchor="start" weight={800}>
          {t("straight drift + circle = a helix", "straight drift + circle = a helix")}
        </T>
      </Fade>

      {/* beat 7 — the two machines */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={718} y={504} size={13} fill={RED} anchor="start" weight={800}>
          {t("TWO MACHINES BUILT ON THIS", "TWO MACHINES BUILT ON THIS")}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 0.5)} d="M 718 510 L 942 510" stroke={RED} sw={1.8} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.9)}>
        <T x={718} y={528} size={12.5} fill={INK} anchor="start" weight={800}>
          {t("① velocity selector — E and B crossed", "① velocity selector — E and B crossed")}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 1.3)} d={arrowD(730, 562, 730, 540)} stroke={RED} sw={2.2} dur={0.3} />
      <Draw on={beat >= 7} delay={dl(7, 1.5)} d={arrowD(750, 540, 750, 562)} stroke={INK} sw={2.2} dur={0.3} />
      <Fade on={beat >= 7} delay={dl(7, 1.8)}>
        <T x={766} y={554} size={12.5} fill={INK} anchor="start">
          {t("the pushes oppose — only ONE speed", "the pushes oppose — only ONE speed")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 2.2)}>
        <T x={718} y={574} size={12.5} fill={INK} anchor="start">
          {t("sails through; faster or slower is bent aside", "sails through; faster or slower is bent aside")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 2.6)}>
        <T x={718} y={594} size={12.5} fill={GREEN} anchor="start" weight={800}>
          {t("② cyclotron — one lap takes the same time", "② cyclotron — one lap takes the same time")}
        </T>
      </Fade>
    </Scene>
  );
}
