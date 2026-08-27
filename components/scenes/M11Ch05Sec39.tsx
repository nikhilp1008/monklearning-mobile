/**
 * M11 Ch05 · Section 39 — "Worked example: a rational inequality, the safe route"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. The trap (cross-multiplying by an unknown sign)
 * is called out FIRST, matching the JSON's own ordering; the number-line
 * diagram is folded into the closing beat since the JSON has no separate
 * diagram entry for this section.
 *
 * Beats (en [0,11.35,32.94,39.34,63.23,79.27,86.78], hi
 * [0,11.35,28.67,34.65,58.88,73.81,80.98]):
 *  0 heading: the problem — (x-4)/(x+1) < 1
 *  1 note (red-margin, high, THE TRAP): do NOT cross-multiply — sign of x+1 unknown
 *  2 text: bring everything to one side, combine into one fraction
 *  3 formula (3-line chain): (x-4)/(x+1)-1<0 ⇒ ((x-4)-(x+1))/(x+1)<0 ⇒ -5/(x+1)<0
 *  4 text: numerator -5 is a negative constant, so fraction negative exactly when x+1>0
 *  5 formula (high, boxed green): x+1>0 ⇒ x>-1 ⇒ (-1,∞)
 *  6 note (red-margin): x=-1 excluded — undefined there + number-line diagram
 *
 * Layout plan:
 *  b0 | problem (18,ink,w700)     | T mid | bl 105
 *  b1 | boxed guardrail (15,red)  | Chip  | x280..800 y135..183
 *  b2 | caption (14,ink,scr)      | T mid | bl 222
 *  b3 | 3-line formula (17,w700)  | T mid | bl 258/294/330
 *  b4 | caption (14,ink,scr)      | T mid | bl 372
 *  b5 | boxed formula (18,green)  | Chip  | x280..800 y402..450
 *  b6 | boxed guardrail (14,red)  | Chip  | x200..880 y466..506
 *  b6 | number line + open dot    | Draw  | y558, x150..900
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, MUTED, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';
import { axisD, tickD, IntervalDot, lineD } from "./math-kit";

const X0 = 170; // x=-4
const SX = 70;
const sx = (v: number) => X0 + (v + 4) * SX;

export default function M11Ch05Sec39({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={20} fill={RED} script>
          {t(
            "cross-multiplying is illegal — the sign of x+1 is unknown",
            "cross-multiply karna illegal hai — x+1 ka sign pata nahi"
          )}
        </T>
      </Fade>

      {/* beat 0 — the problem */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={105} size={18} fill={INK} weight={700}>
          {t("solve (x-4)/(x+1) < 1", "(x-4)/(x+1) < 1 solve karo")}
        </T>
      </Fade>

      {/* beat 1 — THE TRAP */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <Chip x={280} y={135} w={520} h={48} fill={CREAM} stroke={RED} textFill={RED} size={15}>
          {t(
            "do NOT cross-multiply — the sign of x+1 is unknown",
            "cross-multiply MAT karo — x+1 ka sign pata nahi hai"
          )}
        </Chip>
      </Fade>

      {/* beat 2 — the safe route */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={222} size={14} fill={INK} script>
          {t(
            "bring everything to one side instead, and combine into one fraction",
            "iske bajaye sab kuch ek side laao, aur ek fraction mein combine karo"
          )}
        </T>
      </Fade>

      {/* beat 3 — the combination chain */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={258} size={17} fill={INK} weight={700}>
          (x-4)/(x+1) - 1 &lt; 0
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={540} y={294} size={17} fill={INK} weight={700}>
          ⇒ ((x-4)-(x+1))/(x+1) &lt; 0
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.9)}>
        <T x={540} y={330} size={17} fill={INK} weight={700}>
          ⇒ -5/(x+1) &lt; 0
        </T>
      </Fade>

      {/* beat 4 — why the sign flips cleanly now */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={372} size={14} fill={INK} script>
          {t(
            "the numerator -5 is a negative constant, so the fraction is negative exactly when x+1>0",
            "numerator -5 ek negative constant hai, isliye fraction negative tab hota hai jab x+1>0"
          )}
        </T>
      </Fade>

      {/* beat 5 — the answer */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Chip x={280} y={402} w={520} h={48} fill={GREEN} textFill="#fff" size={17} script={false}>
          x + 1 &gt; 0 ⇒ x &gt; -1 ⇒ (-1, ∞)
        </Chip>
      </Fade>

      {/* beat 6 — the exclusion + number line */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Chip x={200} y={466} w={680} h={40} fill={CREAM} stroke={RED} textFill={RED} size={14}>
          {t(
            "x = -1 excluded — the original expression is undefined there",
            "x = -1 excluded hai — original expression wahan undefined hai"
          )}
        </Chip>
      </Fade>

      <Draw on={beat >= 6} delay={dl(6, 0.9)} d={axisD(150, 900, 558)} stroke={INK} sw={2} dur={0.7} />
      <Draw
        on={beat >= 6}
        delay={dl(6, 1.6)}
        d={[-4, -2, -1, 0, 2, 4, 6].map((v) => tickD(sx(v), 558, 6)).join(" ")}
        stroke={INK}
        sw={1.4}
        dur={0.4}
      />
      {[-4, -2, -1, 0, 2, 4, 6].map((v) => (
        <Fade key={v} on={beat >= 6} delay={dl(6, 2.0)}>
          <T x={sx(v)} y={580} size={12} fill={MUTED}>
            {v}
          </T>
        </Fade>
      ))}
      <IntervalDot on={beat >= 6} delay={dl(6, 2.4)} x={sx(-1)} y={558} open={true} r={5} stroke={RED} />
      <Draw on={beat >= 6} delay={dl(6, 2.7)} d={lineD(sx(-1), 558, 900, 558)} stroke={GREEN} sw={5} dur={0.5} />
    </Scene>
  );
}
