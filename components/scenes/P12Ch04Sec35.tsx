/**
 * P12Ch04 · Section 35 — "Concept Intuition: The Current Loop Is the Atom of Magnetism"
 * Subtopic: The Magnetic Dipole — Current Loop, Revolving Electron, Bohr Magneton
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * WHAT IT USED TO SHOW (re-choreographed 2026-08-22)
 *   Three blocks of numbered prose ("1. Current Loop Dipole…", "2. Magnitude
 *   Formula…") and a footer chip, gated on beats 0, 1, 4 and 7 only — with
 *   FOUR drawn strokes on the entire board. Beats 2, 3, 5, 6, 8 and 9 changed
 *   nothing, so the board stood still through the 40 s of the side-by-side
 *   comparison, the 47 s of the electric-dipole analogy and the whole of the
 *   two closing conditions. The narration says "the diagram puts the two side
 *   by side… the dashed field lines looping over and under it" — and in a
 *   section about field patterns there was no loop, no bar magnet, no field
 *   line, no orbiting electron anywhere on the board.
 *
 * WHAT THE NARRATION TEACHES
 *   A current loop is the atom of magnetism: from far away its field is
 *   indistinguishable from a tiny bar magnet's — same far field, same torque,
 *   same energy. That is captured by one vector, m = N I A n̂ (A m²), whose
 *   direction is the right-hand-rule normal and whose size ignores the loop's
 *   SHAPE entirely. It is the magnetic mirror of the electric dipole. A child
 *   running in a circle with a charged balloon is a current loop, and so is an
 *   electron orbiting a nucleus — which is why matter is magnetic at all, and
 *   where the Bohr magneton comes from. Two caveats: the far-field formulas
 *   need x ≫ loop size, and the classical orbit gives the ORBITAL moment only
 *   (spin is extra); and since e is negative, m points opposite to L.
 *
 * BEAT MAP (n_reveals = 10, gates 0..9)
 *   0  exam framing        title + underline + the four exam-weight chips
 *   1  the unifying idea   heading + the LOOP drawn (ellipse, circulating I,
 *                          N and S faces)
 *   2  "side by side"      the loop's dashed field lines + the BAR MAGNET with
 *                          its own field lines + the indistinguishability lines
 *   3  the one vector      m = N I A n̂ chip
 *   4  direction & size    small loop with the normal drawn, right-hand rule,
 *                          and circle = square at equal area
 *   5  the electric mirror divider + matched dipole pictures (p ↔ m)
 *   6  the running child   dashed circle, the charge on it, the motion arrow
 *   7  shrink to an atom   nucleus, orbit, electron, v — and the Bohr magneton
 *   8  two conditions      bottom rule + heading
 *   9  the two conditions  x ≫ loop size · orbital only, spin extra · m ∥ −L
 */

import React from "react";
import { Circle, Ellipse, Rect } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD,
  INK, INK_LIGHT, MUTED, AMBER_DARK, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

/** Full-circle path, drawable by <Draw>. */
function circleD(cx: number, cy: number, r: number): string {
  return `M ${cx - r} ${cy} A ${r} ${r} 0 1 1 ${cx + r} ${cy} A ${r} ${r} 0 1 1 ${cx - r} ${cy}`;
}

export default function P12Ch04Sec35({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ---------------- beat 0 — title + exam weights ---------------- */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={42} size={25} fill={RED} script>
          {t("The current loop is the atom of magnetism",
             "The current loop is the atom of magnetism")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.4)}
        d="M 290 55 C 450 51, 640 59, 790 54" stroke={RED} sw={2.2} dur={0.7} />
      <Fade on={beat >= 0} delay={dl(0, 2.0)}>
        <Chip x={44} y={62} w={236} h={26} fill={CREAM} stroke={RED} textFill={INK} size={12} script={false}>
          CBSE · m = N I A, 3 marks
        </Chip>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 2.4)}>
        <Chip x={296} y={62} w={236} h={26} fill={CREAM} stroke={RED} textFill={INK} size={12} script={false}>
          JEE Main · far field, analogy
        </Chip>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 2.8)}>
        <Chip x={548} y={62} w={236} h={26} fill={CREAM} stroke={RED} textFill={INK} size={12} script={false}>
          JEE Adv · oscillations &amp; atoms
        </Chip>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 3.2)}>
        <Chip x={800} y={62} w={236} h={26} fill={CREAM} stroke={RED} textFill={INK} size={12} script={false}>
          NEET · e ⁄ 2m and the Bohr magneton
        </Chip>
      </Fade>

      {/* ================= ROW A — LOOP vs BAR MAGNET ================= */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={44} y={110} size={13.5} fill={RED} weight={800} anchor="start">
          {t("WALK FAR ENOUGH AWAY AND YOU CANNOT TELL THEM APART",
             "WALK FAR ENOUGH AWAY AND YOU CANNOT TELL THEM APART")}
        </T>
      </Fade>

      {/* beat 1 — the loop itself */}
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <Ellipse cx={185} cy={200} rx={76} ry={24} fill="none" stroke={INK} strokeWidth={2.6} />
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.4)} d={arrowD(109, 186, 109, 214)} stroke={GREEN_DARK} sw={2.4} dur={0.3} />
      <Draw on={beat >= 1} delay={dl(1, 1.6)} d={arrowD(261, 214, 261, 186)} stroke={GREEN_DARK} sw={2.4} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 1.9)}>
        <T x={185} y={206} size={13} fill={GREEN_DARK} weight={800}>I</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.3)}>
        <T x={185} y={126} size={12.5} fill={RED} weight={800}>
          {t("this face acts NORTH", "this face acts NORTH")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.8)}>
        <T x={185} y={288} size={12.5} fill={INK_LIGHT} weight={800}>
          {t("this face acts SOUTH", "this face acts SOUTH")}
        </T>
      </Fade>

      {/* beat 2 — the loop's field lines */}
      <Draw on={beat >= 2} delay={dl(2, 0.2)}
        d="M 185 176 C 185 128, 95 126, 76 200 C 60 264, 185 268, 185 224"
        stroke={AMBER_DARK} sw={1.8} dur={1.1} />
      <Draw on={beat >= 2} delay={dl(2, 0.4)}
        d="M 185 176 C 185 128, 275 126, 294 200 C 310 264, 185 268, 185 224"
        stroke={AMBER_DARK} sw={1.8} dur={1.1} />
      <Draw on={beat >= 2} delay={dl(2, 0.9)}
        d="M 185 184 C 185 158, 133 156, 124 200 C 117 240, 185 244, 185 216"
        stroke={AMBER_DARK} sw={1.5} dur={0.9} />
      <Draw on={beat >= 2} delay={dl(2, 1.1)}
        d="M 185 184 C 185 158, 237 156, 246 200 C 253 240, 185 244, 185 216"
        stroke={AMBER_DARK} sw={1.5} dur={0.9} />
      <Fade on={beat >= 2} delay={dl(2, 1.8)}>
        <T x={185} y={312} size={12.5} fill={INK} weight={800}>
          {t("a small current loop", "a small current loop")}
        </T>
      </Fade>

      {/* beat 2 — the bar magnet */}
      <Fade on={beat >= 2} delay={dl(2, 2.2)}>
        <Rect x={478} y={160} width={44} height={84} rx={3} fill={CREAM} stroke={INK} strokeWidth={2.4} />
        <T x={500} y={188} size={15} fill={RED} weight={900}>N</T>
        <T x={500} y={232} size={15} fill={INK} weight={900}>S</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 2.5)} d="M 478 202 H 522" stroke={INK} sw={1.6} dur={0.3} />
      <Draw on={beat >= 2} delay={dl(2, 2.8)}
        d="M 500 154 C 500 118, 415 116, 396 202 C 380 274, 500 280, 500 250"
        stroke={AMBER_DARK} sw={1.8} dur={1.1} />
      <Draw on={beat >= 2} delay={dl(2, 3.0)}
        d="M 500 154 C 500 118, 585 116, 604 202 C 620 274, 500 280, 500 250"
        stroke={AMBER_DARK} sw={1.8} dur={1.1} />
      <Draw on={beat >= 2} delay={dl(2, 3.5)}
        d="M 500 154 C 500 130, 448 128, 438 202 C 430 262, 500 266, 500 250"
        stroke={AMBER_DARK} sw={1.5} dur={0.9} />
      <Draw on={beat >= 2} delay={dl(2, 3.7)}
        d="M 500 154 C 500 130, 552 128, 562 202 C 570 262, 500 266, 500 250"
        stroke={AMBER_DARK} sw={1.5} dur={0.9} />
      <Fade on={beat >= 2} delay={dl(2, 4.3)}>
        <T x={500} y={312} size={12.5} fill={INK} weight={800}>
          {t("a tiny bar magnet", "a tiny bar magnet")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 4.9)}>
        <T x={44} y={342} size={12.8} fill={INK} weight={800} anchor="start">
          {t("cover the middle of each picture — the outer field lines are indistinguishable",
             "cover the middle of each picture — the outer field lines are indistinguishable")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 5.6)}>
        <T x={44} y={364} size={12.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("same far field · same torque in an external field · same stored energy",
             "same far field · same torque in an external field · same stored energy")}
        </T>
      </Fade>

      {/* ================= RIGHT — THE ONE VECTOR ================= */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={690} y={110} size={13.5} fill={RED} weight={800} anchor="start">
          {t("THE ONE VECTOR THAT CONTAINS ALL OF IT",
             "THE ONE VECTOR THAT CONTAINS ALL OF IT")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.7)}>
        <Chip x={690} y={124} w={350} h={44} fill={CREAM} stroke={RED} textFill={INK} size={18}>
          m = N I A n̂
        </Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <T x={690} y={192} size={12.5} fill={INK_LIGHT} weight={700} anchor="start">
          {t("everything the loop does at a distance lives in m",
             "everything the loop does at a distance lives in m")}
        </T>
      </Fade>

      {/* beat 4 — the normal, the right-hand rule, and shape-independence */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <Ellipse cx={770} cy={270} rx={54} ry={18} fill="none" stroke={INK} strokeWidth={2.4} />
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 0.5)} d={arrowD(716, 260, 716, 282)} stroke={GREEN_DARK} sw={2.2} dur={0.3} />
      <Draw on={beat >= 4} delay={dl(4, 0.7)} d={arrowD(824, 282, 824, 260)} stroke={GREEN_DARK} sw={2.2} dur={0.3} />
      <Draw on={beat >= 4} delay={dl(4, 0.9)} d={arrowD(770, 270, 770, 212)} stroke={RED} sw={2.6} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 1.4)}>
        <T x={782} y={220} size={14} fill={RED} weight={900} anchor="start">m</T>
        <T x={770} y={276} size={12.5} fill={GREEN_DARK} weight={800}>I</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.9)}>
        <T x={690} y={318} size={12.5} fill={INK} weight={700} anchor="start">
          {t("right-hand rule: curl the fingers along I, the thumb gives m",
             "right-hand rule: curl the fingers along I, the thumb gives m")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.6)}>
        <T x={690} y={342} size={13.5} fill={INK} weight={900} anchor="start">
          {t("size  m = N I A      unit  A m²", "size  m = N I A      unit  A m²")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 3.2)}>
        <T x={690} y={364} size={12.5} fill={AMBER_DARK} weight={800} anchor="start">
          {t("the SHAPE never appears in it —", "the SHAPE never appears in it —")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 3.7)}>
        <Circle cx={730} cy={396} r={20} fill="none" stroke={INK} strokeWidth={2.2} />
        <T x={778} y={402} size={16} fill={INK} weight={800}>=</T>
        <Rect x={806} y={378} width={36} height={36} fill="none" stroke={INK} strokeWidth={2.2} />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 4.2)}>
        <T x={862} y={402} size={12.5} fill={INK_LIGHT} weight={700} anchor="start">
          {t("same A, same I ⇒ same m", "same A, same I ⇒ same m")}
        </T>
      </Fade>

      {/* ================= ROW C — MIRROR, CHILD, ATOM ================= */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M 40 424 H 1040" stroke={MUTED} sw={1.4} dur={0.9} />
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={40} y={446} size={12.8} fill={RED} weight={800} anchor="start">
          {t("THE MAGNETIC MIRROR OF THE ELECTRIC DIPOLE",
             "THE MAGNETIC MIRROR OF THE ELECTRIC DIPOLE")}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 1.2)} d="M 78 482 H 138" stroke={INK} sw={2.2} dur={0.35} />
      <Fade on={beat >= 5} delay={dl(5, 1.5)}>
        <Circle cx={78} cy={482} r={11} fill={CREAM} stroke={INK} strokeWidth={2} />
        <T x={78} y={487} size={13} fill={INK} weight={900}>−</T>
        <Circle cx={138} cy={482} r={11} fill={CREAM} stroke={RED} strokeWidth={2} />
        <T x={138} y={487} size={13} fill={RED} weight={900}>+</T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 1.9)} d={arrowD(78, 506, 138, 506)} stroke={RED} sw={2} dur={0.35} />
      <Fade on={beat >= 5} delay={dl(5, 2.2)}>
        <T x={146} y={510} size={12.5} fill={RED} weight={900} anchor="start">p</T>
        <T x={176} y={492} size={18} fill={MUTED} weight={800}>≡</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2.5)}>
        <Ellipse cx={250} cy={490} rx={36} ry={13} fill="none" stroke={INK} strokeWidth={2.2} />
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 2.8)} d={arrowD(214, 482, 214, 498)} stroke={GREEN_DARK} sw={2} dur={0.25} />
      <Draw on={beat >= 5} delay={dl(5, 2.9)} d={arrowD(286, 498, 286, 482)} stroke={GREEN_DARK} sw={2} dur={0.25} />
      <Draw on={beat >= 5} delay={dl(5, 3.1)} d={arrowD(250, 490, 250, 458)} stroke={RED} sw={2.2} dur={0.35} />
      <Fade on={beat >= 5} delay={dl(5, 3.4)}>
        <T x={262} y={464} size={12.5} fill={RED} weight={900} anchor="start">m</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 3.8)}>
        <T x={40} y={524} size={12.5} fill={INK} weight={700} anchor="start">
          {t("same torque, energy and far-field forms — m plays p's role",
             "same torque, energy and far-field forms — m plays p's role")}
        </T>
      </Fade>

      {/* beat 6 — the running child */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={450} y={446} size={12.8} fill={RED} weight={800} anchor="start">
          {t("A CHILD RUNNING WITH A CHARGED BALLOON",
             "A CHILD RUNNING WITH A CHARGED BALLOON")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 0.6)} d={circleD(520, 500, 34)} stroke={MUTED} sw={1.8} dur={0.9} />
      <Fade on={beat >= 6} delay={dl(6, 1.2)}>
        <Circle cx={554} cy={500} r={8} fill={AMBER_DARK} />
        <T x={554} y={504} size={11.5} fill="#ffffff" weight={900}>+</T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.5)} d={arrowD(506, 468, 534, 470)} stroke={GREEN_DARK} sw={2.2} dur={0.3} />
      <Fade on={beat >= 6} delay={dl(6, 1.9)}>
        <T x={578} y={486} size={12.5} fill={INK} weight={700} anchor="start">
          {t("charge going round", "charge going round")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.3)}>
        <T x={578} y={506} size={12.5} fill={INK} weight={700} anchor="start">
          {t("= a current loop", "= a current loop")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.7)}>
        <T x={578} y={526} size={12.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("= a magnet, literally", "= a magnet, literally")}
        </T>
      </Fade>

      {/* beat 7 — shrink to an atom */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={760} y={446} size={12.8} fill={RED} weight={800} anchor="start">
          {t("SHRINK IT TO AN ATOM → THE BOHR MAGNETON",
             "SHRINK IT TO AN ATOM → THE BOHR MAGNETON")}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 0.6)} d={circleD(818, 500, 40)} stroke={MUTED} sw={1.6} dur={1.0} />
      <Fade on={beat >= 7} delay={dl(7, 1.1)}>
        <Circle cx={818} cy={500} r={11} fill={RED} />
        <T x={818} y={505} size={12} fill="#ffffff" weight={900}>+</T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.5)}>
        <Circle cx={858} cy={500} r={8} fill={INK} />
        <T x={858} y={504} size={11.5} fill="#ffffff" weight={900}>−</T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 1.8)} d={arrowD(858, 486, 858, 464)} stroke={GREEN_DARK} sw={2.2} dur={0.3} />
      <Fade on={beat >= 7} delay={dl(7, 2.1)}>
        <T x={868} y={470} size={12.5} fill={GREEN_DARK} weight={800} anchor="start">v</T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 2.4)}>
        <T x={886} y={492} size={12.5} fill={INK} weight={700} anchor="start">
          {t("every atom carries", "every atom carries")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 2.8)}>
        <T x={886} y={512} size={12.5} fill={INK} weight={700} anchor="start">
          {t("current-loop magnets", "current-loop magnets")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 3.2)}>
        <T x={886} y={532} size={12.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("aligned ⇒ a bar magnet", "aligned ⇒ a bar magnet")}
        </T>
      </Fade>

      {/* ================= BOTTOM — THE TWO CONDITIONS ================= */}
      <Draw on={beat >= 8} delay={dl(8, 0.2)} d="M 40 548 H 1040" stroke={MUTED} sw={1.4} dur={0.8} />
      <Fade on={beat >= 8} delay={dl(8, 0.8)}>
        <T x={40} y={572} size={13} fill={RED} weight={800} anchor="start">
          {t("TWO CONDITIONS FIRST", "TWO CONDITIONS FIRST")}
        </T>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 0.2)}>
        <T x={210} y={572} size={12.5} fill={INK} weight={700} anchor="start">
          {t("① the far-field formulas need x ≫ the loop's own size",
             "① the far-field formulas need x ≫ the loop's own size")}
        </T>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 1.4)}>
        <T x={600} y={572} size={12.5} fill={INK} weight={700} anchor="start">
          {t("② a classical orbit gives the ORBITAL part only, spin is extra",
             "② a classical orbit gives the ORBITAL part only, spin is extra")}
        </T>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 2.6)}>
        <T x={40} y={592} size={12.5} fill={RED} weight={800} anchor="start">
          {t("and the electron's charge is negative, so m points opposite to L — that minus sign is examined",
             "and the electron's charge is negative, so m points opposite to L — that minus sign is examined")}
        </T>
      </Fade>
    </Scene>
  );
}
