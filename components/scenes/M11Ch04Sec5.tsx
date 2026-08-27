/**
 * M11 Ch04 · Section 5 — "Equality needs two conditions"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept — beat 7's guardrail re-uses (annotates, doesn't
 * redraw) beat 2's own "address" diagram: two green check-marks land on the
 * already-drawn a↔c and b↔d comparisons instead of costing fresh board space.
 *
 * Beats (board_reveal_at_english [0, 8.87, 22.53, 35.33, 47.79, 55.13, 68.61, 77.74]):
 *  0 heading: when are two complex numbers equal?
 *  1 THE formula (high emphasis), boxed: a+ib=c+id ⇔ a=c and b=d
 *  2 THE DIAGRAM: address analogy — a↔c row, b↔d row, each with a connecting arrow
 *  3 guardrail (red-margin): satisfying only one equation is the partial-equality error
 *  4 explain: 1 complex equation → 2 real equations (small arrow diagram)
 *  5 Standard Method B, boxed: A+iB=C+iD ⇒ A=C and B=D
 *  6 explain: solve the two simultaneous real equations, underlined
 *  7 verdict (red-margin, reuses beat 2's diagram): green check-marks land on
 *    both rows — matched separately, never mixed
 *
 * Layout plan:
 *  b0 | heading (17,amber_dark)          | T mid     | x540 y102
 *  b0 | underline                         | Draw      | x420..660 y118
 *  b1 | box + formula (17,ink,w700)       | Draw+T    | x290..790 y138..186
 *  b2 | row1 a—arrow—c + label            | T/Draw    | y235, x455/545
 *  b2 | row2 b—arrow—d + label            | T/Draw    | y295, x455/545
 *  b3 | red bar + guardrail text          | Draw+T    | x300 y326..360, text y343
 *  b4 | "1 complex eq" —arrow→ "2 real eqs" | T/Draw  | y400
 *  b5 | box + Method B (15,ink)           | Chip      | x270..810 y429..469
 *  b6 | text + underline                  | T+Draw    | x540 y508, underline y523
 *  b7 | 2 green check-marks on row1/row2  | Draw      | x778 y236 / y296
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
  arrowD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  GREEN_DARK,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD } from "./math-kit";

const checkD = (x: number, y: number) => `M ${x} ${y} L ${x + 5} ${y + 6} L ${x + 16} ${y - 11}`;

export default function M11Ch04Sec5({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={22} fill={RED} anchor="middle" script>
          {t("Equality Needs Two Conditions", "Equality ke Liye Do Conditions")}
        </T>
      </Fade>

      {/* beat 0 — heading */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={102} size={17} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("When are two complex numbers equal?", "Do complex numbers kab equal hote hain?")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.4)} d="M 420 118 L 660 118" stroke={AMBER} sw={2.2} dur={0.5} />

      {/* beat 1 — the formula, boxed */}
      <Draw on={beat >= 1} delay={dl(1, 0)} d={roundRectD(290, 138, 500, 48, 11)} stroke={AMBER_DARK} sw={2} dur={0.7} />
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={540} y={168} size={17} fill={INK} anchor="middle" weight={700}>
          a + ib = c + id  ⇔  a = c  and  b = d
        </T>
      </Fade>

      {/* beat 2 — THE DIAGRAM: address analogy */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={455} y={235} size={20} fill={INK} anchor="end" weight={700}>a</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.4)} d={arrowD(463, 230, 540, 230)} stroke={INK} sw={2} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 0.9)}>
        <T x={545} y={235} size={20} fill={INK} anchor="start" weight={700}>c</T>
        <T x={565} y={235} size={13} fill={MUTED} anchor="start">
          {t("— real parts must match", "— real parts match hone chahiye")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.5)}>
        <T x={455} y={295} size={20} fill={INK} anchor="end" weight={700}>b</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.9)} d={arrowD(463, 290, 540, 290)} stroke={INK} sw={2} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 2.4)}>
        <T x={545} y={295} size={20} fill={INK} anchor="start" weight={700}>d</T>
        <T x={565} y={295} size={13} fill={MUTED} anchor="start">
          {t("— imaginary parts must match", "— imaginary parts match hone chahiye")}
        </T>
      </Fade>

      {/* beat 3 — guardrail: partial-equality error */}
      <Draw on={beat >= 3} delay={dl(3, 0.1)} d="M 300 326 L 300 360" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={316} y={343} size={17} fill={RED} anchor="start" weight={700}>
          {t("Only ONE equation matching is the partial-equality error", "Sirf EK equation match hona partial-equality error hai")}
        </T>
      </Fade>

      {/* beat 4 — 1 complex equation → 2 real equations */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={400} y={400} size={15} fill={INK} anchor="end">
          {t("1 complex equation", "1 complex equation")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 0.5)} d={arrowD(410, 396, 470, 396)} stroke={AMBER_DARK} sw={2.2} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 1.0)}>
        <T x={476} y={400} size={15} fill={GREEN_DARK} anchor="start" weight={700}>
          {t("2 real equations", "2 real equations")}
        </T>
      </Fade>

      {/* beat 5 — Standard Method B, boxed */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <Chip x={270} y={429} w={540} h={40} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={15} script={false}>
          {t("Method B: A+iB=C+iD ⇒ A=C and B=D", "Method B: A+iB=C+iD ⇒ A=C aur B=D")}
        </Chip>
      </Fade>

      {/* beat 6 — solve the two equations */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={540} y={508} size={14} fill={INK} anchor="middle">
          {t(
            "Solve the two simultaneous equations for your real unknowns.",
            "Un do simultaneous equations ko real unknowns ke liye solve karo."
          )}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 0.7)} d="M 330 523 L 750 523" stroke={MUTED} sw={1.6} dur={0.6} />

      {/* beat 7 — verdict: green checks land on the already-drawn rows */}
      <Draw on={beat >= 7} delay={dl(7, 0)} d={checkD(778, 236)} stroke={GREEN} sw={2.8} dur={0.4} />
      <Draw on={beat >= 7} delay={dl(7, 0.6)} d={checkD(778, 296)} stroke={GREEN} sw={2.8} dur={0.4} />
    </Scene>
  );
}
