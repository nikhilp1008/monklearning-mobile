/**
 * P12Ch04 · Section 12 — "Derivation A: The Solenoid Field"
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * WHAT IT USED TO SHOW
 *   Four gates (0, 1, 8, 12) over thirteen narration segments. The board did
 *   not move once between 17.8 s and 201.6 s — the entire choice of the
 *   Amperian rectangle and the side-by-side elimination of three of its four
 *   sides, which is the whole point of the derivation, was spoken over a
 *   static board. Four drawn shapes, all rules. In a board derivation whose
 *   narration says "look at the figure … the windings as two rows … the
 *   amber rectangle is our Amperian loop", nothing was drawn: no solenoid,
 *   no ⊙/⊗ windings, no interior field, no rectangle.
 *
 * WHAT THE NARRATION TEACHES
 *   The CBSE ~3-mark derivation of B = μ₀ n I. State the ideal-solenoid
 *   assumptions, choose rectangle abcd with ab inside along the axis and cd
 *   outside, take the four side-integrals one at a time (ab survives as B·L,
 *   bc/da vanish by perpendicularity then by B = 0, cd vanishes by B = 0),
 *   count n L turns through the rectangle for I_enc = n L I, equate and let
 *   L cancel. Then: ab's position is arbitrary, so the interior field is
 *   uniform — proved, not assumed — and at the open end B ≈ μ₀ n I / 2.
 *
 * BEAT MAP (n_reveals = 13 · gates 0..12, every beat used)
 *   0  title + underline + the "three of four sides die" strapline
 *   1  the ideal-solenoid assumptions and the two given facts
 *   2  FIGURE — cross-section, ⊙ top row, ⊗ bottom row, uniform interior
 *      field, the amber Amperian rectangle abcd
 *   3  the corner labels a b c d, the length L, and why each side sits there
 *   4  ∮ splits into four side-integrals
 *   5  ab highlighted GREEN on the figure → ∫_ab = B × L
 *   6  bc and da highlighted RED on the figure → 0 (⊥ inside, B = 0 outside)
 *   7  cd highlighted RED on the figure → 0
 *   8  the collapse ∮ = B L, and the skill being demonstrated
 *   9  the right-hand side: n L turns → I_enc = n L I
 *  10  B L = μ₀ n L I ⟹ B = μ₀ n I, with L cancelling
 *  11  ab's position is arbitrary ⟹ uniform interior; right-hand grip
 *  12  the edge result B_end ≈ μ₀ n I / 2 and why solenoids are made long
 *
 * ARITHMETIC: the only numeric statement on the board is the factor ½ at the
 * open end, which the narration states ("drops to roughly half that value").
 */

import React from "react";
import { Circle, G } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD,
  INK, INK_LIGHT, MUTED, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

const circleD = (cx: number, cy: number, r: number) =>
  `M ${cx - r} ${cy} A ${r} ${r} 0 1 1 ${cx + r} ${cy} A ${r} ${r} 0 1 1 ${cx - r} ${cy}`;

const crossGlyphD = (cx: number, cy: number, s: number) =>
  `M ${cx - s} ${cy - s} L ${cx + s} ${cy + s} M ${cx + s} ${cy - s} L ${cx - s} ${cy + s}`;

/** Winding positions along the cross-section. */
const WIND_X = [100, 145, 190, 235, 280, 325, 370, 415, 460];

/* Amperian rectangle abcd — a(150,322) b(390,322) c(390,206) d(150,206) */
const AB_D = "M 150 322 H 390";
const BC_D = "M 390 322 V 206";
const CD_D = "M 390 206 H 150";
const DA_D = "M 150 206 V 322";

export default function P12Ch04Sec12({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ── beat 0 — title ─────────────────────────────────────────── */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={44} size={25} fill={RED} script>
          {t("Derivation A — the Solenoid Field, B = μ₀ n I",
             "Derivation A — the Solenoid Field, B = μ₀ n I")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.5)}
        d="M 268 60 C 470 55, 660 65, 812 58" stroke={RED} sw={2.2} dur={0.7} />
      <Fade on={beat >= 0} delay={dl(0, 2.6)}>
        <T x={540} y={82} size={13} fill={MUTED} script>
          {t("CBSE · about 3 marks — watch three of the four sides die",
             "CBSE · about 3 marks — watch three of the four sides die")}
        </T>
      </Fade>

      {/* ═══════════ LEFT COLUMN — setup and figure ═══════════ */}

      {/* beat 1 — the assumptions */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={44} y={110} size={14} fill={RED} weight={800} anchor="start">
          {t("IDEAL SOLENOID — WRITE THESE DOWN FIRST", "IDEAL SOLENOID — WRITE THESE DOWN FIRST")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <T x={44} y={130} size={12.5} fill={INK} weight={700} anchor="start">
          {t("length ≫ radius, so end effects can be ignored",
             "length ≫ radius, so end effects can be ignored")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 4.4)}>
        <T x={44} y={148} size={12.5} fill={INK} weight={700} anchor="start">
          {t("closely wound: n turns per unit length, each carrying I",
             "closely wound: n turns per unit length, each carrying I")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 7.4)}>
        <T x={44} y={166} size={12.5} fill={GREEN} weight={800} anchor="start">
          {t("GIVEN: inside, B is uniform and directed along the axis",
             "GIVEN: inside, B is uniform and directed along the axis")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 10)}>
        <T x={44} y={184} size={12.5} fill={GREEN} weight={800} anchor="start">
          {t("GIVEN: outside, B is effectively zero",
             "GIVEN: outside, B is effectively zero")}
        </T>
      </Fade>

      {/* beat 2 — the cross-section figure */}
      <Draw on={beat >= 2} delay={dl(2, 0.2)} d="M 76 238 H 466" stroke={MUTED} sw={1.3} dur={0.5} />
      <Draw on={beat >= 2} delay={dl(2, 0.2)} d="M 76 360 H 466" stroke={MUTED} sw={1.3} dur={0.5} />
      {WIND_X.map((wx, i) => (
        <G key={`top-${wx}`}>
          <Draw on={beat >= 2} delay={dl(2, 0.8 + i * 0.1)} d={circleD(wx, 238, 7.5)} stroke={INK} sw={1.8} dur={0.24} />
          <Fade on={beat >= 2} delay={dl(2, 0.95 + i * 0.1)}>
            <Circle cx={wx} cy={238} r={2.4} fill={INK} />
          </Fade>
        </G>
      ))}
      {WIND_X.map((wx, i) => (
        <G key={`bot-${wx}`}>
          <Draw on={beat >= 2} delay={dl(2, 1.9 + i * 0.1)} d={circleD(wx, 360, 7.5)} stroke={INK} sw={1.8} dur={0.24} />
          <Draw on={beat >= 2} delay={dl(2, 2.05 + i * 0.1)} d={crossGlyphD(wx, 360, 4.6)} stroke={INK} sw={1.5} dur={0.2} />
        </G>
      ))}
      <Draw on={beat >= 2} delay={dl(2, 3.2)} d={arrowD(96, 300, 140, 300)} stroke={GREEN} sw={2.4} dur={0.3} />
      <Draw on={beat >= 2} delay={dl(2, 3.45)} d={arrowD(196, 300, 258, 300)} stroke={GREEN} sw={2.4} dur={0.3} />
      <Draw on={beat >= 2} delay={dl(2, 3.7)} d={arrowD(300, 300, 362, 300)} stroke={GREEN} sw={2.4} dur={0.3} />
      <Draw on={beat >= 2} delay={dl(2, 3.95)} d={arrowD(400, 300, 458, 300)} stroke={GREEN} sw={2.4} dur={0.3} />
      <Fade on={beat >= 2} delay={dl(2, 4.4)}>
        <T x={270} y={284} size={11.5} fill={GREEN} weight={800}>B uniform, along the axis</T>
      </Fade>
      {/* the Amperian rectangle, one side at a time */}
      <Draw on={beat >= 2} delay={dl(2, 5)} d={AB_D} stroke={AMBER_DARK} sw={2.2} dur={0.35} />
      <Draw on={beat >= 2} delay={dl(2, 5.3)} d={BC_D} stroke={AMBER_DARK} sw={2.2} dur={0.35} />
      <Draw on={beat >= 2} delay={dl(2, 5.6)} d={CD_D} stroke={AMBER_DARK} sw={2.2} dur={0.35} />
      <Draw on={beat >= 2} delay={dl(2, 5.9)} d={DA_D} stroke={AMBER_DARK} sw={2.2} dur={0.35} />
      <Fade on={beat >= 2} delay={dl(2, 6.4)}>
        <T x={150} y={384} size={10.5} fill={MUTED} weight={600}>⊙ current out of page</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 6.8)}>
        <T x={350} y={384} size={10.5} fill={MUTED} weight={600}>⊗ current into page</T>
      </Fade>

      {/* beat 3 — labelling the rectangle */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={142} y={200} size={12.5} fill={AMBER_DARK} weight={800} anchor="end">d</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.35)}>
        <T x={398} y={200} size={12.5} fill={AMBER_DARK} weight={800} anchor="start">c</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <T x={142} y={336} size={12.5} fill={AMBER_DARK} weight={800} anchor="end">a</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.65)}>
        <T x={400} y={336} size={12.5} fill={AMBER_DARK} weight={800} anchor="start">b</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.2)}>
        <T x={270} y={340} size={12.5} fill={AMBER_DARK} weight={800}>L</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.8)}>
        <T x={44} y={412} size={12.5} fill={INK} weight={700} anchor="start">
          {t("ab, of length L, sits INSIDE, parallel to the axis",
             "ab, of length L, sits INSIDE, parallel to the axis")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 4.2)}>
        <T x={44} y={430} size={12.5} fill={INK} weight={700} anchor="start">
          {t("cd sits entirely OUTSIDE · bc and da cross the wall",
             "cd sits entirely OUTSIDE · bc and da cross the wall")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 6.6)}>
        <T x={44} y={448} size={12.2} fill={AMBER_DARK} weight={700} anchor="start">
          {t("every feature of that choice is deliberate — this choice IS the method",
             "every feature of that choice is deliberate — this choice IS the method")}
        </T>
      </Fade>

      {/* ═══════════ RIGHT COLUMN — the four side integrals ═══════════ */}
      <Draw on={beat >= 4} delay={dl(4, 0.1)} d="M 536 96 L 536 470" stroke={MUTED} sw={1.1} dur={0.7} />

      {/* beat 4 */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={556} y={112} size={14} fill={INK} weight={800} anchor="start">
          ∮ B · dl  =  ∫_ab + ∫_bc + ∫_cd + ∫_da
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <T x={556} y={130} size={11.8} fill={MUTED} weight={600} anchor="start">
          {t("four sides — take them one at a time", "four sides — take them one at a time")}
        </T>
      </Fade>

      {/* beat 5 — ab survives */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d={AB_D} stroke={GREEN} sw={4.4} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 0.7)}>
        <T x={430} y={336} size={11.5} fill={GREEN} weight={800} anchor="start">B L ✓</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.9)}>
        <T x={556} y={160} size={12.5} fill={INK} weight={700} anchor="start">
          {t("along ab (inside): B uniform and ∥ to the path",
             "along ab (inside): B uniform and ∥ to the path")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 3)}>
        <T x={574} y={180} size={13.5} fill={GREEN} weight={800} anchor="start">
          ∫_ab = B × L    ← the only survivor
        </T>
      </Fade>

      {/* beat 6 — bc and da die */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d={BC_D} stroke={RED} sw={4.4} dur={0.5} />
      <Draw on={beat >= 6} delay={dl(6, 0.4)} d={DA_D} stroke={RED} sw={4.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 0.9)}>
        <T x={378} y={276} size={12} fill={RED} weight={800} anchor="end">0</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.9)}>
        <T x={162} y={276} size={12} fill={RED} weight={800} anchor="start">0</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.2)}>
        <T x={556} y={210} size={12.5} fill={INK} weight={700} anchor="start">
          {t("along bc and da: split each at the wall —", "along bc and da: split each at the wall —")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 3.4)}>
        <T x={574} y={230} size={12.2} fill={INK_LIGHT} weight={600} anchor="start">
          {t("inside: B ∥ axis, path ⊥ axis ⟹ dot product 0",
             "inside: B ∥ axis, path ⊥ axis ⟹ dot product 0")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 6)}>
        <T x={574} y={250} size={12.8} fill={RED} weight={800} anchor="start">
          {t("outside: B itself is 0  ⟹  both sides give 0",
             "outside: B itself is 0  ⟹  both sides give 0")}
        </T>
      </Fade>

      {/* beat 7 — cd dies */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d={CD_D} stroke={RED} sw={4.4} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 0.8)}>
        <T x={270} y={198} size={12} fill={RED} weight={800}>0</T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1)}>
        <T x={556} y={282} size={12.8} fill={RED} weight={800} anchor="start">
          {t("along cd (entirely outside): B = 0  ⟹  0 — the third side gone",
             "along cd (entirely outside): B = 0  ⟹  0 — the third side gone")}
        </T>
      </Fade>

      {/* beat 8 — the collapse */}
      <Fade on={beat >= 8} delay={dl(8, 0.2)}>
        <T x={556} y={314} size={13.5} fill={INK} weight={800} anchor="start">
          ∮ B · dl = B L + 0 + 0 + 0 = B L
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 2.4)}>
        <T x={556} y={334} size={12.5} fill={AMBER_DARK} weight={800} anchor="start">
          {t("say it in the answer: the loop is chosen so three of the four sides die",
             "say it in the answer: the loop is chosen so three of the four sides die")}
        </T>
      </Fade>

      {/* beat 9 — the enclosed current */}
      <Fade on={beat >= 9} delay={dl(9, 0.2)}>
        <T x={556} y={364} size={12.5} fill={INK} weight={700} anchor="start">
          {t("rectangle length L × n turns per unit length",
             "rectangle length L × n turns per unit length")}
        </T>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 2.4)}>
        <T x={574} y={382} size={12.2} fill={INK_LIGHT} weight={600} anchor="start">
          {t("⟹ n L turns pierce the rectangle, each carrying I",
             "⟹ n L turns pierce the rectangle, each carrying I")}
        </T>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 5)}>
        <T x={574} y={402} size={13.5} fill={GREEN} weight={800} anchor="start">
          I_enc = n L I    (count turns, not the one wire)
        </T>
      </Fade>

      {/* beat 10 — equate and cancel */}
      <Fade on={beat >= 10} delay={dl(10, 0.2)}>
        <Chip x={556} y={416} w={484} h={44} fill={CREAM} stroke={GREEN} textFill={INK} size={16}>
          B L = μ₀ n L I   ⟹   B = μ₀ n I
        </Chip>
      </Fade>
      <Fade on={beat >= 10} delay={dl(10, 2.2)}>
        <T x={556} y={478} size={12.2} fill={INK_LIGHT} weight={600} anchor="start">
          {t("L cancels — the answer cannot depend on how long we drew our rectangle",
             "L cancels — the answer cannot depend on how long we drew our rectangle")}
        </T>
      </Fade>

      {/* ═══════════ BOTTOM BAND — the two closing remarks ═══════════ */}
      <Draw on={beat >= 11} delay={dl(11, 0.2)} d="M 44 496 L 1036 496" stroke={INK} sw={1.5} dur={0.7} />
      <Fade on={beat >= 11} delay={dl(11, 0.9)}>
        <T x={44} y={516} size={12.5} fill={INK} weight={700} anchor="start">
          {t("ab could sit anywhere inside the cross-section — near the axis or near the wall, the working is identical.",
             "ab could sit anywhere inside the cross-section — near the axis or near the wall, the working is identical.")}
        </T>
      </Fade>
      <Fade on={beat >= 11} delay={dl(11, 3.6)}>
        <T x={44} y={534} size={12.8} fill={GREEN} weight={800} anchor="start">
          {t("So the interior field is UNIFORM — proved by the derivation, not assumed. (This line earns marks.)",
             "So the interior field is UNIFORM — proved by the derivation, not assumed. (This line earns marks.)")}
        </T>
      </Fade>
      <Fade on={beat >= 11} delay={dl(11, 6.6)}>
        <T x={44} y={552} size={12.2} fill={INK_LIGHT} weight={600} anchor="start">
          {t("Direction: right-hand grip — fingers curl along the current in the turns, the thumb gives B along the axis.",
             "Direction: right-hand grip — fingers curl along the current in the turns, the thumb gives B along the axis.")}
        </T>
      </Fade>

      {/* beat 12 — the edge result */}
      <Fade on={beat >= 12} delay={dl(12, 0.3)}>
        <T x={44} y={576} size={13} fill={AMBER_DARK} weight={800} anchor="start">
          {t("At the OPEN END the field drops to roughly half:  B_end ≈ μ₀ n I ⁄ 2",
             "At the OPEN END the field drops to roughly half:  B_end ≈ μ₀ n I ⁄ 2")}
        </T>
      </Fade>
      <Fade on={beat >= 12} delay={dl(12, 3.2)}>
        <T x={44} y={594} size={12.2} fill={INK_LIGHT} weight={600} anchor="start">
          {t("A midpoint has windings contributing from both sides; an end sees them on one side only — which is why solenoids are made long compared with their diameter.",
             "A midpoint has windings contributing from both sides; an end sees them on one side only — which is why solenoids are made long compared with their diameter.")}
        </T>
      </Fade>
    </Scene>
  );
}
