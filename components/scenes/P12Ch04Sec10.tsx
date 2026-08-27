/**
 * P12Ch04 · Section 10 — "True Always, Useful Only Sometimes"
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * WHAT IT USED TO SHOW
 *   Four gates (0, 1, 4, 6) over nine narration segments. The longest single
 *   segment — the 71-second explanation of what "pulling B out of the
 *   integral" actually demands — landed on a board that never moved, and the
 *   three pieces of fine print arrived as one block. Four drawn shapes, all
 *   of them rules. The narration says "the board puts the two cases side by
 *   side", but there were no two cases drawn: no wire, no Amperian circle,
 *   no wobbly path, no field arrows.
 *
 * WHAT THE NARRATION TEACHES
 *   Ampere's law is valid for any closed loop whatsoever, but it only lets
 *   you SOLVE for B when the geometry gives you a path on which |B| is
 *   constant and B is everywhere parallel or perpendicular to the path.
 *   A straight wire with a circular loop qualifies; a single current loop
 *   with any path around it does not — there the law is true and useless.
 *   Only four geometries are worth reaching for. Then three conditions:
 *   steady currents, symmetry-for-evaluation-not-validity, and the usual
 *   idealisations.
 *
 * BEAT MAP (n_reveals = 9 · gates 0..8, every beat used)
 *   0  title + underline
 *   1  valid for any loop — but true ≠ useful
 *   2  FIGURE — solvable case (wire ⊙ + dashed circle + equal tangential
 *      arrows) beside the unsolvable case (current loop + wobbly path +
 *      scattered arrows of unequal length), plus the "equally true" verdict
 *   3  the two requirements, and the finite loop's centre field as the
 *      true-but-useless example
 *   4  the only four geometries, as four chips
 *   5  "fine print — three conditions"
 *   6  ① steady currents only (displacement current comes later)
 *   7  ② symmetry is for evaluation, not validity
 *   8  ③ the usual idealisations
 *
 * No numeric arithmetic in this section — it is entirely conceptual.
 */

import React from "react";
import { Circle, Path } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD,
  INK, INK_LIGHT, MUTED, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

const circleD = (cx: number, cy: number, r: number) =>
  `M ${cx - r} ${cy} A ${r} ${r} 0 1 1 ${cx + r} ${cy} A ${r} ${r} 0 1 1 ${cx - r} ${cy}`;

const ellipseD = (cx: number, cy: number, rx: number, ry: number) =>
  `M ${cx - rx} ${cy} A ${rx} ${ry} 0 1 1 ${cx + rx} ${cy} A ${rx} ${ry} 0 1 1 ${cx - rx} ${cy}`;

/** The deliberately irregular path drawn around the single current loop. */
const WOBBLY_D =
  "M 790 168 C 884 164, 956 196, 944 240 C 932 286, 868 314, 790 308 " +
  "C 712 302, 646 284, 636 238 C 627 194, 700 172, 790 168 Z";

export default function P12Ch04Sec10({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ── beat 0 — title ─────────────────────────────────────────── */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={44} size={25} fill={RED} script>
          {t("True for Every Loop — Solvable for Almost None",
             "True for Every Loop — Solvable for Almost None")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.5)}
        d="M 250 60 C 480 55, 660 65, 830 58" stroke={RED} sw={2.2} dur={0.7} />

      {/* ── beat 1 — the catch ─────────────────────────────────────── */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={44} y={84} size={14} fill={RED} weight={800} anchor="start">
          {t("VALIDITY IS NOT USEFULNESS", "VALIDITY IS NOT USEFULNESS")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.6)}>
        <T x={44} y={104} size={12.5} fill={INK} weight={700} anchor="start">
          {t("Ampere's law holds for absolutely any closed loop — any shape, any size, anywhere.",
             "Ampere's law holds for absolutely any closed loop — any shape, any size, anywhere.")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 4)}>
        <T x={44} y={122} size={12.5} fill={INK_LIGHT} weight={600} anchor="start">
          {t("It only SOLVES for B when the symmetry lets you pull B out of the integral — a far stricter demand.",
             "It only SOLVES for B when the symmetry lets you pull B out of the integral — a far stricter demand.")}
        </T>
      </Fade>

      {/* ── beat 2 — the two cases, side by side ───────────────────── */}

      {/* LEFT PANEL — solvable */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={60} y={150} size={12.5} fill={INK} weight={800} anchor="start">
          {t("straight wire ⊙ · circular Amperian loop", "straight wire ⊙ · circular Amperian loop")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.6)} d={circleD(250, 234, 11)} stroke={INK} sw={2.2} dur={0.35} />
      <Fade on={beat >= 2} delay={dl(2, 0.95)}>
        <Circle cx={250} cy={234} r={3.2} fill={INK} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.2)}>
        <Circle cx={250} cy={234} r={62} fill="none" stroke={MUTED} strokeWidth={1.8} strokeDasharray="7 6" />
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.7)} d={arrowD(312, 252, 312, 216)} stroke={GREEN} sw={2.3} dur={0.3} />
      <Draw on={beat >= 2} delay={dl(2, 1.95)} d={arrowD(268, 172, 232, 172)} stroke={GREEN} sw={2.3} dur={0.3} />
      <Draw on={beat >= 2} delay={dl(2, 2.2)} d={arrowD(188, 216, 188, 252)} stroke={GREEN} sw={2.3} dur={0.3} />
      <Draw on={beat >= 2} delay={dl(2, 2.45)} d={arrowD(232, 296, 268, 296)} stroke={GREEN} sw={2.3} dur={0.3} />
      <Fade on={beat >= 2} delay={dl(2, 2.9)}>
        <T x={60} y={328} size={12} fill={GREEN} weight={700} anchor="start">
          {t("same |B| at every point · B ∥ the path everywhere",
             "same |B| at every point · B ∥ the path everywhere")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3.4)}>
        <T x={60} y={346} size={12.5} fill={GREEN} weight={800} anchor="start">
          {t("✓ B comes out of ∮ — SOLVABLE", "✓ B comes out of ∮ — SOLVABLE")}
        </T>
      </Fade>

      {/* RIGHT PANEL — true but unsolvable */}
      <Fade on={beat >= 2} delay={dl(2, 3.9)}>
        <T x={560} y={150} size={12.5} fill={INK} weight={800} anchor="start">
          {t("one current loop · any path you like", "one current loop · any path you like")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 4.3)} d={ellipseD(790, 236, 84, 30)} stroke={INK} sw={2.4} dur={0.8} />
      <Draw on={beat >= 2} delay={dl(2, 5)} d={arrowD(766, 206, 814, 206)} stroke={INK} sw={2.1} dur={0.3} />
      <Fade on={beat >= 2} delay={dl(2, 5.3)}>
        <Path d={WOBBLY_D} fill="none" stroke={MUTED} strokeWidth={1.8} strokeDasharray="7 6" />
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 5.8)} d={arrowD(890, 180, 918, 164)} stroke={RED} sw={2.2} dur={0.3} />
      <Draw on={beat >= 2} delay={dl(2, 6.05)} d={arrowD(940, 250, 902, 264)} stroke={RED} sw={2.2} dur={0.3} />
      <Draw on={beat >= 2} delay={dl(2, 6.3)} d={arrowD(740, 306, 752, 282)} stroke={RED} sw={2.2} dur={0.3} />
      <Draw on={beat >= 2} delay={dl(2, 6.55)} d={arrowD(638, 224, 618, 246)} stroke={RED} sw={2.2} dur={0.3} />
      <Fade on={beat >= 2} delay={dl(2, 6.9)}>
        <T x={560} y={328} size={12} fill={RED} weight={700} anchor="start">
          {t("|B| varies point to point · directions scattered",
             "|B| varies point to point · directions scattered")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 7.4)}>
        <T x={560} y={346} size={12.5} fill={RED} weight={800} anchor="start">
          {t("✗ true here too — but NOT solvable", "✗ true here too — but NOT solvable")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 8)}>
        <T x={540} y={366} size={12.5} fill={AMBER_DARK} weight={800}>
          {t("equally TRUE for both pictures — solvable for only one",
             "equally TRUE for both pictures — solvable for only one")}
        </T>
      </Fade>

      {/* ═══════════ LOWER LEFT — what solvability demands ═══════════ */}
      <Draw on={beat >= 3} delay={dl(3, 0.1)} d="M 536 382 L 536 596" stroke={MUTED} sw={1.1} dur={0.6} />

      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={44} y={394} size={14} fill={RED} weight={800} anchor="start">
          {t("TO PULL B OUT OF ∮ YOU NEED BOTH:", "TO PULL B OUT OF ∮ YOU NEED BOTH:")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.8)}>
        <T x={44} y={414} size={12.5} fill={INK} weight={700} anchor="start">
          {t("① the same |B| at every point of the loop", "① the same |B| at every point of the loop")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 4)}>
        <T x={44} y={432} size={12.5} fill={INK} weight={700} anchor="start">
          {t("② B either ∥ to the path or ⊥ to it, all the way round",
             "② B either ∥ to the path or ⊥ to it, all the way round")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 7)}>
        <T x={44} y={456} size={12.2} fill={INK_LIGHT} weight={600} anchor="start">
          {t("∥ stretch → B × length.   ⊥ stretch → nothing.   ∮ collapses to arithmetic.",
             "∥ stretch → B × length.   ⊥ stretch → nothing.   ∮ collapses to arithmetic.")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 11)}>
        <T x={44} y={478} size={12.5} fill={RED} weight={800} anchor="start">
          {t("A finite loop's CENTRE field: no such Amperian path exists.",
             "A finite loop's CENTRE field: no such Amperian path exists.")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 14)}>
        <T x={44} y={496} size={12.5} fill={AMBER_DARK} weight={800} anchor="start">
          {t("The law still holds there. It is simply useless. True and useless.",
             "The law still holds there. It is simply useless. True and useless.")}
        </T>
      </Fade>

      {/* beat 4 — the only four geometries */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={44} y={522} size={13} fill={GREEN} weight={800} anchor="start">
          {t("the only four worth reaching for:", "the only four worth reaching for:")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.2)}>
        <Chip x={44} y={532} w={232} h={30} fill={CREAM} stroke={GREEN} textFill={INK} size={11.5} script={false}>
          ∞ straight wire · circle
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.4)}>
        <Chip x={288} y={532} w={232} h={30} fill={CREAM} stroke={GREEN} textFill={INK} size={11.5} script={false}>
          thick cylinder · circle
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 3.6)}>
        <Chip x={44} y={566} w={232} h={30} fill={CREAM} stroke={GREEN} textFill={INK} size={11.5} script={false}>
          ideal solenoid · rectangle
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 4.8)}>
        <Chip x={288} y={566} w={232} h={30} fill={CREAM} stroke={GREEN} textFill={INK} size={11.5} script={false}>
          toroid · concentric circles
        </Chip>
      </Fade>

      {/* ═══════════ LOWER RIGHT — the fine print ═══════════ */}

      {/* beat 5 */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={556} y={394} size={14} fill={RED} weight={800} anchor="start">
          {t("FINE PRINT — THREE CONDITIONS", "FINE PRINT — THREE CONDITIONS")}
        </T>
      </Fade>

      {/* beat 6 */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={556} y={418} size={12.5} fill={INK} weight={800} anchor="start">
          {t("① STEADY CURRENTS ONLY — this form is magnetostatics.",
             "① STEADY CURRENTS ONLY — this form is magnetostatics.")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.6)}>
        <T x={556} y={436} size={12.2} fill={INK_LIGHT} weight={600} anchor="start">
          {t("Time-varying fields need Maxwell's displacement-current term.",
             "Time-varying fields need Maxwell's displacement-current term.")}
        </T>
      </Fade>

      {/* beat 7 */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={556} y={466} size={12.5} fill={INK} weight={800} anchor="start">
          {t("② SYMMETRY IS FOR EVALUATION, NOT VALIDITY.",
             "② SYMMETRY IS FOR EVALUATION, NOT VALIDITY.")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 2.4)}>
        <T x={556} y={484} size={12.2} fill={INK_LIGHT} weight={600} anchor="start">
          {t("With no symmetry ∮ B · dl = μ₀ I_enc still holds exactly — you",
             "With no symmetry ∮ B · dl = μ₀ I_enc still holds exactly — you")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 4.6)}>
        <T x={556} y={502} size={12.2} fill={RED} weight={700} anchor="start">
          {t("simply cannot extract B. “The law fails” loses marks.",
             "simply cannot extract B. “The law fails” loses marks.")}
        </T>
      </Fade>

      {/* beat 8 */}
      <Fade on={beat >= 8} delay={dl(8, 0.2)}>
        <T x={556} y={532} size={12.5} fill={INK} weight={800} anchor="start">
          {t("③ THE USUAL IDEALISATIONS —", "③ THE USUAL IDEALISATIONS —")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 2.2)}>
        <T x={556} y={550} size={12.2} fill={INK_LIGHT} weight={600} anchor="start">
          {t("infinitely long wire or solenoid, so end effects vanish;",
             "infinitely long wire or solenoid, so end effects vanish;")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 4.4)}>
        <T x={556} y={568} size={12.2} fill={INK_LIGHT} weight={600} anchor="start">
          {t("closely wound turns, so the winding is a smooth current sheet;",
             "closely wound turns, so the winding is a smooth current sheet;")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 6.6)}>
        <T x={556} y={586} size={12.2} fill={INK_LIGHT} weight={600} anchor="start">
          {t("non-magnetic medium — vacuum or air — so μ₀ is the right constant.",
             "non-magnetic medium — vacuum or air — so μ₀ is the right constant.")}
        </T>
      </Fade>
    </Scene>
  );
}
