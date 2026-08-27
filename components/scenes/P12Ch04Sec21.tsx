/**
 * P12Ch04 · Section 21 — "Derivation B: Torque on a Rectangular Current Loop"
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * WHAT IT USED TO SHOW: three numbered prose panels gated on beats 0/1/5/11
 * — beat 11 does not exist in a 10-reveal section, so the last third of the
 * narration changed nothing at all. Four drawn strokes, none of them a loop.
 *
 * WHAT THE NARRATION TEACHES: the b-sides lie along B and contribute nothing;
 * the two a-sides feel BIa in opposite directions, so ΣF = 0 but their lines
 * of action are offset — a couple. The moment arm is b sin θ (θ to the
 * NORMAL, not the plane), giving τ = BIA sin θ, then NIAB sin θ = m × B.
 * Segment 2 narrates the figure element by element (amber field, tilted loop,
 * ⊙ and ⊗ forces, green normal, the θ arc), so the board draws exactly that.
 *
 * BEAT MAP (10 beats, gates 0..9 — every beat used):
 *   0  title
 *   1  setup: sides a and b, current I, and the θ-is-to-the-normal warning
 *   2  THE FIGURE: amber uniform field · shaded tilted loop · F₁ ⊙ out of the
 *      page on the left side · F₂ ⊗ into the page on the right · green normal
 *      · the θ arc between the normal and B · current sense on the loop
 *   3  step 1: b-sides along B give nothing, a-sides do the work
 *   4  each a-side feels F = B I a
 *   5  equal + opposite ⇒ ΣF = 0, but the lines of action are offset
 *   6  step 2: the couple + THE MOMENT-ARM FIGURE (edge-on loop, the two
 *      parallel lines of action, the arm measured as b sin θ)
 *   7  τ = (BIa)(b sin θ) = B I A sin θ — the side lengths vanish
 *   8  N turns ⇒ τ = N I A B sin θ = m × B
 *   9  reading it: τ max when the plane contains B, τ = 0 when the plane is
 *      ⊥ B (the stable rest) — with the two edge-on extreme sketches
 *
 * Layout: left x44..470 (setup, main figure, steps 1) · right x540..1044
 * (the couple, the moment arm, the compressed result, the extremes).
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

const circD = (cx: number, cy: number, r: number) =>
  `M ${cx - r} ${cy} A ${r} ${r} 0 1 1 ${cx + r} ${cy} A ${r} ${r} 0 1 1 ${cx - r} ${cy}`;
const crossInD = (cx: number, cy: number, r: number) => {
  const k = r * 0.68;
  return `${circD(cx, cy, r)} M ${cx - k} ${cy - k} L ${cx + k} ${cy + k} M ${
    cx + k
  } ${cy - k} L ${cx - k} ${cy + k}`;
};
const dotOutD = (cx: number, cy: number, r: number) =>
  `${circD(cx, cy, r)} ${circD(cx, cy, r * 0.16)}`;
const spanD = (x1: number, x2: number, y: number) =>
  `${arrowD(x1, y, x2, y)} ${arrowD(x2, y, x1, y)}`;

const LOOP = "M 150 240 L 330 204 L 352 330 L 172 366 Z";

export default function P12Ch04Sec21({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ═══ beat 0 ═══ */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={44} size={25} fill={RED} script>
          {t("Torque on a Rectangular Current Loop", "Torque on a Rectangular Current Loop")}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 1.4)}
        d="M 318 58 C 460 54, 640 62, 762 57"
        stroke={RED}
        sw={2.2}
        dur={0.7}
      />

      {/* ═════════ LEFT — x 44..470 ═════════ */}

      {/* beat 1 — setup */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={44} y={98} size={13} fill={RED} anchor="start" weight={800}>
          {t("SETUP", "SETUP")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.5)} d="M 44 104 L 130 104" stroke={RED} sw={1.8} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={44} y={122} size={12.5} fill={INK} anchor="start">
          {t("rectangular loop, sides a and b, current I", "rectangular loop, sides a and b, current I")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.4)}>
        <T x={44} y={140} size={12.5} fill={INK} anchor="start">
          {t("sitting in a uniform field B", "sitting in a uniform field B")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.9)}>
        <T x={44} y={160} size={13} fill={RED} anchor="start" weight={800}>
          {t("θ = angle between the NORMAL and B", "θ = angle between the NORMAL and B")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.4)}>
        <T x={44} y={178} size={12.5} fill={RED} anchor="start">
          {t("never the angle to the plane — write this down", "never the angle to the plane — write this down")}
        </T>
      </Fade>

      {/* beat 2 — THE FIGURE */}
      <Draw on={beat >= 2} delay={dl(2, 0.1)} d={arrowD(56, 202, 440, 202)} stroke={AMBER_DARK} sw={1.8} dur={0.5} />
      <Draw on={beat >= 2} delay={dl(2, 0.25)} d={arrowD(56, 242, 440, 242)} stroke={AMBER_DARK} sw={1.8} dur={0.5} />
      <Draw on={beat >= 2} delay={dl(2, 0.4)} d={arrowD(56, 282, 440, 282)} stroke={AMBER_DARK} sw={1.8} dur={0.5} />
      <Draw on={beat >= 2} delay={dl(2, 0.55)} d={arrowD(56, 322, 440, 322)} stroke={AMBER_DARK} sw={1.8} dur={0.5} />
      <Draw on={beat >= 2} delay={dl(2, 0.7)} d={arrowD(56, 362, 440, 362)} stroke={AMBER_DARK} sw={1.8} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 1.0)}>
        <T x={448} y={198} size={14} fill={AMBER_DARK} anchor="start" weight={800}>B</T>
      </Fade>

      <Fade on={beat >= 2} delay={dl(2, 1.3)}>
        <Path d={LOOP} fill={CREAM} stroke="none" opacity={0.9} />
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.5)} d={LOOP} stroke={INK} sw={2.6} dur={1.2} />
      <Draw on={beat >= 2} delay={dl(2, 2.6)} d={arrowD(200, 230, 282, 214)} stroke={GREEN} sw={2} dur={0.4} />
      <Draw on={beat >= 2} delay={dl(2, 2.8)} d={arrowD(302, 340, 220, 356)} stroke={GREEN} sw={2} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 3.1)}>
        <T x={252} y={256} size={13} fill={GREEN} weight={800}>I</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3.3)}>
        <T x={214} y={224} size={12.5} fill={INK_LIGHT} weight={800}>b</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3.5)}>
        <T x={322} y={298} size={12.5} fill={INK_LIGHT} weight={800}>a</T>
      </Fade>

      <Draw on={beat >= 2} delay={dl(2, 3.8)} d={dotOutD(161, 296, 13)} stroke={RED} sw={2.2} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 4.3)}>
        <T x={142} y={300} size={12.5} fill={RED} anchor="end" weight={800}>
          {t("F₁ ⊙ out", "F₁ ⊙ out")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 4.6)} d={crossInD(341, 258, 13)} stroke={RED} sw={2.2} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 5.1)}>
        <T x={366} y={256} size={12.5} fill={RED} anchor="start" weight={800}>
          {t("F₂ ⊗ in", "F₂ ⊗ in")}
        </T>
      </Fade>

      <Draw on={beat >= 2} delay={dl(2, 5.4)} d={arrowD(251, 285, 320, 216)} stroke={GREEN} sw={2.4} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 5.9)}>
        <T x={326} y={210} size={13} fill={GREEN} anchor="start" weight={800}>n̂</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 6.1)} d="M 251 285 L 330 285" stroke={MUTED} sw={1.3} dur={0.3} />
      <Draw on={beat >= 2} delay={dl(2, 6.3)} d="M 307 285 A 56 56 0 0 0 291 245" stroke={INK} sw={2} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 6.7)}>
        <T x={301} y={268} size={13} fill={INK} weight={800}>θ</T>
      </Fade>

      {/* beat 3 — which sides matter */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={44} y={430} size={13} fill={RED} anchor="start" weight={800}>
          {t("STEP 1 — WHICH SIDES MATTER", "STEP 1 — WHICH SIDES MATTER")}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 0.5)} d="M 44 436 L 262 436" stroke={RED} sw={1.8} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 0.9)}>
        <T x={44} y={454} size={12.5} fill={INK} anchor="start">
          {t("the two sides of length b lie ALONG B", "the two sides of length b lie ALONG B")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.4)}>
        <T x={44} y={472} size={12.5} fill={MUTED} anchor="start">
          {t("sin 0 = 0 → no force worth counting", "sin 0 = 0 → no force worth counting")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.9)}>
        <T x={44} y={490} size={12.5} fill={GREEN} anchor="start" weight={800}>
          {t("the two sides of length a are ⊥ B — these do the work", "the two sides of length a are ⊥ B — these do the work")}
        </T>
      </Fade>

      {/* beat 4 — the size of each force */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={44} y={516} size={13.5} fill={INK} anchor="start" weight={800}>
          {t("each a-side:   F = B I a   (sin 90° = 1)", "each a-side:   F = B I a   (sin 90° = 1)")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 0.8)} d="M 152 522 L 274 522" stroke={INK} sw={1.6} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 1.1)}>
        <T x={44} y={536} size={12.5} fill={MUTED} anchor="start">
          {t("so both forces have exactly the same size", "so both forces have exactly the same size")}
        </T>
      </Fade>

      {/* beat 5 — equal, opposite, offset */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={44} y={560} size={12.5} fill={INK} anchor="start">
          {t("opposite currents ⇒ equal and OPPOSITE forces ⇒ ΣF = 0", "opposite currents ⇒ equal and OPPOSITE forces ⇒ ΣF = 0")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={44} y={578} size={12.5} fill={INK} anchor="start">
          {t("the loop cannot translate — but the two lines of", "the loop cannot translate — but the two lines of")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.3)}>
        <T x={44} y={594} size={12.5} fill={GREEN} anchor="start" weight={800}>
          {t("action are offset, and that offset is everything", "action are offset, and that offset is everything")}
        </T>
      </Fade>

      {/* ═════════ RIGHT — x 540..1044 ═════════ */}

      {/* beat 6 — the couple + the moment arm */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={98} size={13} fill={RED} anchor="start" weight={800}>
          {t("STEP 2 — A COUPLE, AND ITS MOMENT ARM", "STEP 2 — A COUPLE, AND ITS MOMENT ARM")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 0.5)} d="M 540 104 L 840 104" stroke={RED} sw={1.8} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.9)}>
        <T x={540} y={124} size={12.5} fill={INK} anchor="start">
          {t("equal + opposite along different lines = a couple", "equal + opposite along different lines = a couple")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.4)}>
        <T x={540} y={142} size={12.5} fill={INK} anchor="start">
          {t("a couple gives pure rotation, no translation", "a couple gives pure rotation, no translation")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.9)}>
        <T x={540} y={160} size={12.5} fill={INK} anchor="start">
          {t("τ = force × perpendicular distance (the moment arm)", "τ = force × perpendicular distance (the moment arm)")}
        </T>
      </Fade>

      {/* the edge-on picture */}
      <Draw on={beat >= 6} delay={dl(6, 2.3)} d={arrowD(548, 210, 604, 210)} stroke={AMBER_DARK} sw={1.8} dur={0.3} />
      <Draw on={beat >= 6} delay={dl(6, 2.45)} d={arrowD(548, 258, 604, 258)} stroke={AMBER_DARK} sw={1.8} dur={0.3} />
      <Draw on={beat >= 6} delay={dl(6, 2.6)} d={arrowD(548, 306, 604, 306)} stroke={AMBER_DARK} sw={1.8} dur={0.3} />
      <Fade on={beat >= 6} delay={dl(6, 2.8)}>
        <T x={548} y={196} size={13} fill={AMBER_DARK} anchor="start" weight={800}>B</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 3.0)}>
        <Path d="M 624 176 L 624 352" stroke={MUTED} strokeWidth={1.4} strokeDasharray="6 6" fill="none" />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 3.0)}>
        <Path d="M 724 176 L 724 352" stroke={MUTED} strokeWidth={1.4} strokeDasharray="6 6" fill="none" />
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 3.2)} d="M 624 216 L 724 300" stroke={INK} sw={3} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 3.6)}>
        <T x={652} y={280} size={12.5} fill={INK_LIGHT} weight={800}>b</T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 3.8)} d={arrowD(624, 216, 624, 180)} stroke={RED} sw={2.4} dur={0.35} />
      <Fade on={beat >= 6} delay={dl(6, 4.1)}>
        <T x={632} y={186} size={13} fill={RED} anchor="start" weight={800}>F</T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 4.3)} d={arrowD(724, 300, 724, 336)} stroke={RED} sw={2.4} dur={0.35} />
      <Fade on={beat >= 6} delay={dl(6, 4.6)}>
        <T x={732} y={334} size={13} fill={RED} anchor="start" weight={800}>F</T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 4.9)} d={arrowD(674, 258, 711, 214)} stroke={GREEN} sw={2.2} dur={0.35} />
      <Fade on={beat >= 6} delay={dl(6, 5.2)}>
        <T x={716} y={208} size={13} fill={GREEN} anchor="start" weight={800}>n̂</T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 5.4)} d="M 674 258 L 742 258" stroke={MUTED} sw={1.3} dur={0.3} />
      <Draw on={beat >= 6} delay={dl(6, 5.6)} d="M 718 258 A 44 44 0 0 0 702 224" stroke={INK} sw={2} dur={0.35} />
      <Fade on={beat >= 6} delay={dl(6, 5.9)}>
        <T x={714} y={242} size={13} fill={INK} weight={800}>θ</T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 6.2)} d={spanD(624, 724, 352)} stroke={INK} sw={1.6} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 6.6)}>
        <T x={674} y={374} size={13.5} fill={INK} weight={800}>
          {t("arm = b sin θ", "arm = b sin θ")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 7.0)}>
        <T x={766} y={212} size={12.5} fill={RED} anchor="start" weight={800}>
          {t("the arm is NOT b", "the arm is NOT b")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 7.3)}>
        <T x={766} y={238} size={12.5} fill={INK} anchor="start">
          {t("face edge-on to B → full arm", "face edge-on to B → full arm")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 7.6)}>
        <T x={766} y={258} size={12.5} fill={INK} anchor="start">
          {t("face square to B → arm shrinks to 0", "face square to B → arm shrinks to 0")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 7.9)}>
        <T x={766} y={284} size={12.5} fill={MUTED} anchor="start">
          {t("picture it turning: the two lines", "picture it turning: the two lines")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 8.2)}>
        <T x={766} y={302} size={12.5} fill={MUTED} anchor="start">
          {t("open and close in projection", "open and close in projection")}
        </T>
      </Fade>

      {/* beat 7 — the result */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={540} y={416} size={14} fill={INK} anchor="start" weight={800}>
          {t("τ = ( B I a ) × ( b sin θ ),   and  a · b = A", "τ = ( B I a ) × ( b sin θ ),   and  a · b = A")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.9)}>
        <Chip x={540} y={426} w={340} h={42} fill={CREAM} stroke={RED} textFill={INK} size={18}>
          τ = B I A sin θ
        </Chip>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 1.5)} d="M 606 474 L 814 474" stroke={RED} sw={1.8} dur={0.4} />
      <Draw on={beat >= 7} delay={dl(7, 1.7)} d="M 606 479 L 814 479" stroke={RED} sw={1.8} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 2.0)}>
        <T x={540} y={498} size={12.5} fill={GREEN} anchor="start" weight={800}>
          {t("no a, no b left — so it holds for ANY planar loop", "no a, no b left — so it holds for ANY planar loop")}
        </T>
      </Fade>

      {/* beat 8 — N turns and the dipole moment */}
      <Fade on={beat >= 8} delay={dl(8, 0.2)}>
        <T x={540} y={522} size={13.5} fill={INK} anchor="start" weight={800}>
          {t("N turns →  τ = N I A B sin θ ,   m = N I A", "N turns →  τ = N I A B sin θ ,   m = N I A")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 0.9)}>
        <T x={540} y={542} size={13} fill={GREEN} anchor="start" weight={800}>
          {t("⇒  τ = m B sin θ ,   in vectors   τ = m × B", "⇒  τ = m B sin θ ,   in vectors   τ = m × B")}
        </T>
      </Fade>

      {/* beat 9 — read it physically */}
      <Fade on={beat >= 9} delay={dl(9, 0.2)}>
        <T x={540} y={566} size={12.5} fill={INK} anchor="start">
          {t("θ = 90° → normal ⊥ B → plane CONTAINS B → τ max", "θ = 90° → normal ⊥ B → plane CONTAINS B → τ max")}
        </T>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 0.8)}>
        <T x={540} y={584} size={12.5} fill={INK} anchor="start">
          {t("θ = 0° → normal ∥ B → plane ⊥ B → τ = 0, stable rest", "θ = 0° → normal ∥ B → plane ⊥ B → τ = 0, stable rest")}
        </T>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 1.4)}>
        <T x={972} y={500} size={12.5} fill={MUTED}>
          {t("the two extremes", "the two extremes")}
        </T>
      </Fade>
      <Draw on={beat >= 9} delay={dl(9, 1.7)} d="M 908 530 L 968 530" stroke={INK} sw={3} dur={0.3} />
      <Draw on={beat >= 9} delay={dl(9, 1.9)} d={arrowD(906, 548, 972, 548)} stroke={AMBER_DARK} sw={1.8} dur={0.3} />
      <Fade on={beat >= 9} delay={dl(9, 2.2)}>
        <T x={938} y={572} size={12.5} fill={GREEN} weight={800}>
          {t("τ max", "τ max")}
        </T>
      </Fade>
      <Draw on={beat >= 9} delay={dl(9, 2.4)} d="M 1010 516 L 1010 556" stroke={INK} sw={3} dur={0.3} />
      <Draw on={beat >= 9} delay={dl(9, 2.6)} d={arrowD(980, 536, 1042, 536)} stroke={AMBER_DARK} sw={1.8} dur={0.3} />
      <Fade on={beat >= 9} delay={dl(9, 2.9)}>
        <T x={1010} y={572} size={12.5} fill={RED} weight={800}>
          {t("τ = 0", "τ = 0")}
        </T>
      </Fade>
    </Scene>
  );
}
