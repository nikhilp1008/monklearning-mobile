/**
 * M11 Ch07 · Section 22 — "The expansion as a machine with a dial"
 * Canvas 1080×620 · safe x36–1044, y30–596. Opens subtopic 4.
 * 8 board_content items, seq1=title.
 *
 * A hub-and-spoke diagram: the identity (1+x)^n=ΣCr x^r as a central boxed
 * "machine", four satellite results (x=1, x=-1, d/dx, ∫) fed by fan-out
 * arrows drawn in the "diagram" beat once all four are already on the board.
 *
 * Beats (en [0, 15.1, 32.85, 51.29, 69.21, 91.48, 105.81, 121.94]):
 *  0 title
 *  1 the base identity, boxed (HIGH) — the "machine"
 *  2 dial metaphor caption
 *  3 x=1 and x=-1 satellite results
 *  4 differentiate / integrate satellite results
 *  5 bonus: multiply two copies ⇒ Σ Cr²
 *  6 diagram: fan-out arrows from hub to all four satellites
 *  7 red-margin HIGH: never brute-force, recognise the operation
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, arrowD, INK, MUTED, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD } from "./math-kit";

const SAT_X = [170, 400, 630, 860];
const SAT_Y = 260;
const HUB_X = 540;
const HUB_BOTTOM = 149;

export default function M11Ch07Sec22({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true}>
        <T x={540} y={58} size={25} fill={INK} script>
          {t("one identity, operated four ways", "ek identity, chaar tareekon se operate")}
        </T>
      </Fade>

      {/* beat 1 — the hub identity, boxed */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={132} size={17} fill={AMBER_DARK}>
          (1+x)^n = C0+C1x+C2x²+⋯+Cnx^n
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.2)} d={roundRectD(270, 105, 540, 44)} stroke={AMBER_DARK} sw={2.4} dur={1} />

      {/* beat 2 — dial metaphor */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={182} size={15} fill={MUTED} script>
          {t("turn the dial (a value of x), or operate on the whole identity", "dial ghumao (x ki value), ya poori identity pe operate karo")}
        </T>
      </Fade>

      {/* beat 3 — x=1, x=-1 satellites */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={SAT_X[0]} y={SAT_Y} size={14} fill={INK} script>
          x=1 ⇒ ΣCr = 2^n
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={SAT_X[1]} y={SAT_Y} size={14} fill={INK} script>
          x=-1 ⇒ Σ(-1)^r Cr = 0
        </T>
      </Fade>

      {/* beat 4 — differentiate / integrate satellites */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={SAT_X[2]} y={SAT_Y} size={14} fill={INK} script>
          {t("d/dx ⇒ weight r", "d/dx ⇒ weight r")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={SAT_X[3]} y={SAT_Y} size={14} fill={INK} script>
          {t("∫ ⇒ weight 1/(r+1)", "∫ ⇒ weight 1/(r+1)")}
        </T>
      </Fade>

      {/* beat 5 — bonus: multiply two copies */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={310} size={14} fill={MUTED}>
          {t("multiply two copies ⇒ Σ Cr²", "do copies multiply karo ⇒ Σ Cr²")}
        </T>
      </Fade>

      {/* beat 6 — diagram: fan-out arrows */}
      {SAT_X.map((x, i) => (
        <Draw
          key={i}
          on={beat >= 6}
          delay={dl(6, 0.2 + i * 0.2)}
          d={arrowD(HUB_X, HUB_BOTTOM + 8, x, SAT_Y - 20)}
          stroke={AMBER_DARK}
          sw={1.8}
          dur={0.6}
        />
      ))}

      {/* beat 7 — red-margin */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 150 355 v 40" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.8)}>
        <T x={170} y={380} size={15} fill={RED} script anchor="start">
          {t("never brute-force — recognise the operation, apply, substitute", "kabhi brute-force mat karo — operation pehchano, apply, substitute karo")}
        </T>
      </Fade>
    </Scene>
  );
}
