/**
 * M11 Ch05 · Section 3 — "What counts as 'linear', and which moves are safe"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md.
 *
 * Beats (en [0,5.29,25.34,35.58,51.37,57.43,65.11,74.07], hi
 * [0,5.72,23.13,33.71,49.66,54.78,62.38,72.53]) — two acts, act 1 erased at beat 4:
 *  0 heading "Definitions" — "A ___ B" skeleton drawn
 *  1 text: inequality symbols, strict vs non-strict — "<" lands, 4 symbol chips
 *  2 text: solution set — mini number line, shaded stretch, labeled
 *  3 note (red-margin): 'linear' = power 1 only — x², 1/x, |x| crossed, 2x+1 ✓
 *  4 heading "safe moves vs the danger move" — ERASE act 1, amber banner
 *  5 text: add/subtract always safe — x+1>5 → (-1 both sides) → x>4 ✓
 *  6 text: ×/÷ positive safe, negative flips — two recap chips
 *  7 note (red-margin, high): never cross-multiply unknown sign, never square <0
 *
 * Layout plan (act 1, beats 0-3):
 *  b0 | "A" / box / "B"            | T/Draw | x469..571  y96..132 (bl 120)
 *  b1 | "<" in box                 | T mid  | x520  bl120 (green)
 *  b1 | 4 symbol chips             | Chip   | y170..206  x394/464/560/630 w56
 *  b1 | "strict"/"non-strict" (14) | T mid  | y221..236 (bl 232)
 *  b2 | mini axis                  | Draw   | x300..780 y300
 *  b2 | shaded stretch (green)     | Draw   | x540..770 y300
 *  b2 | "solution set" (16,ink)    | T mid  | x590..710 y252..270 (bl 266) + arrow
 *  b3 | caption (16,ink)           | T mid  | x460..620 y362..383 (bl 378)
 *  b3 | x² / 1/x / |x| crossed     | Chip+Draw | y400..440 x305/405/505 w70
 *  b3 | "2x + 1" checked (green)   | Chip+Draw | x665..775 y400..440
 *  b4 | [erase act 1]
 *  b4 | banner chip (amber/cream)  | Chip   | x220..860 y140..194
 *  b5 | "x + 1 > 5" (24,ink,w700)  | T mid  | x501..579 y214..238 (bl 236)
 *  b5 | arrow ↓ + "-1 both sides"  | Draw+T | x540 y258..282 · label x565 y274
 *  b5 | "x > 4" (24,green,w800)    | T mid  | x510..570 y294..320 (bl 316)
 *  b5 | checkmark + "always safe"  | Draw+T | c(640,306) · x660 y312
 *  b6 | POSITIVE chip (green)      | Chip   | x140..520  y390..440
 *  b6 | NEGATIVE chip (red)        | Chip   | x580..960  y390..440
 *  b7 | margin bar (red)           | Draw   | x100 y460..548
 *  b7 | 2 guardrail lines (17,red,scr) | T st | x120.. y485 / y535
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
  crossD,
  INK,
  MUTED,
  GREEN,
  RED,
  AMBER,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { axisD, lineD, checkD } from "./math-kit";

export default function M11Ch05Sec3({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);
  const act1 = (k: number) => beat >= k && beat < 4;

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={24} fill={RED} script>
          {t(
            "linear = power 1 only — no x², no 1/x, no |x|",
            "linear = sirf power 1 — x², 1/x, |x| allowed nahi"
          )}
        </T>
      </Fade>

      {/* beat 0 — the skeleton: A [relation] B */}
      <Fade on={act1(0)} delay={dl(0, 0.3)}>
        <T x={475} y={120} size={22} fill={INK} weight={700}>
          A
        </T>
      </Fade>
      <Draw on={act1(0)} delay={dl(0, 0.8)} d="M 500 96 h 40 v 36 h -40 z" stroke={INK} sw={1.8} dur={0.6} />
      <Fade on={act1(0)} delay={dl(0, 1.6)}>
        <T x={565} y={120} size={22} fill={INK} weight={700}>
          B
        </T>
      </Fade>

      {/* beat 1 — the four relation symbols */}
      <Fade on={act1(1)} delay={dl(1, 0.3)}>
        <T x={520} y={120} size={22} fill={GREEN} weight={700}>
          &lt;
        </T>
      </Fade>
      {[
        { x: 394, s: "<" },
        { x: 464, s: ">" },
        { x: 560, s: "≤" },
        { x: 630, s: "≥" },
      ].map((c, i) => (
        <Fade key={c.s} on={act1(1)} delay={dl(1, 1.0 + i * 0.4)}>
          <Chip x={c.x} y={170} w={56} h={36} fill={CREAM} stroke={AMBER} textFill={INK} size={19} script={false}>
            {c.s}
          </Chip>
        </Fade>
      ))}
      <Fade on={act1(1)} delay={dl(1, 2.8)}>
        <T x={457} y={232} size={14} fill={MUTED}>
          {t("strict", "strict")}
        </T>
      </Fade>
      <Fade on={act1(1)} delay={dl(1, 3.1)}>
        <T x={623} y={232} size={14} fill={MUTED}>
          {t("non-strict (slack)", "non-strict (slack)")}
        </T>
      </Fade>

      {/* beat 2 — the solution set, painted on a line */}
      <Draw on={act1(2)} delay={dl(2, 0.3)} d={axisD(300, 780, 300)} stroke={INK} sw={2} dur={1} />
      <Draw on={act1(2)} delay={dl(2, 1.4)} d={lineD(540, 300, 770, 300)} stroke={GREEN} sw={5} dur={0.7} />
      <Draw on={act1(2)} delay={dl(2, 2.2)} d={arrowD(650, 278, 650, 296)} stroke={INK} sw={2} dur={0.5} />
      <Fade on={act1(2)} delay={dl(2, 2.8)}>
        <T x={650} y={266} size={16} fill={INK}>
          {t("solution set", "solution set")}
        </T>
      </Fade>

      {/* beat 3 — 'linear' means power 1: no x², no 1/x, no |x| */}
      <Fade on={act1(3)} delay={dl(3, 0.3)}>
        <T x={540} y={378} size={16} fill={INK}>
          {t("power ≠ 1 → not linear", "power ≠ 1 → linear nahi")}
        </T>
      </Fade>
      {[
        { x: 305, w: 70, s: "x²" },
        { x: 405, w: 70, s: "1/x" },
        { x: 505, w: 70, s: "|x|" },
      ].map((c, i) => (
        <React.Fragment key={c.s}>
          <Fade on={act1(3)} delay={dl(3, 1.0 + i * 0.6)}>
            <Chip x={c.x} y={400} w={c.w} h={40} fill={CREAM} stroke={RED} textFill={RED} size={18} script={false}>
              {c.s}
            </Chip>
          </Fade>
          <Draw on={act1(3)} delay={dl(3, 1.4 + i * 0.6)} d={crossD(c.x, 400, c.w, 40)} stroke={RED} sw={2.4} dur={0.4} />
        </React.Fragment>
      ))}
      <Fade on={act1(3)} delay={dl(3, 3.2)}>
        <Chip x={665} y={400} w={110} h={40} fill={CREAM} stroke={GREEN} textFill={GREEN} size={18} script={false}>
          2x + 1
        </Chip>
      </Fade>
      <Draw on={act1(3)} delay={dl(3, 3.7)} d={checkD(800, 415, 18)} stroke={GREEN} sw={3} dur={0.4} />

      {/* beat 4 — safe moves vs the danger move (act 1 erased) */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <Chip x={220} y={140} w={640} h={54} fill={CREAM} stroke={AMBER} textFill={INK} size={20}>
          {t("safe moves vs. the one danger move", "safe moves vs. woh ek danger move")}
        </Chip>
      </Fade>

      {/* beat 5 — add/subtract from both sides is always safe */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={236} size={24} fill={INK} weight={700}>
          x + 1 &gt; 5
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 1.2)} d={arrowD(540, 258, 540, 282)} stroke={RED} sw={2.4} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 1.8)}>
        <T x={565} y={274} size={15} fill={MUTED} anchor="start">
          {t("-1 both sides", "dono taraf -1")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2.5)}>
        <T x={540} y={316} size={24} fill={GREEN} weight={800}>
          x &gt; 4
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 3.1)} d={checkD(640, 306, 16)} stroke={GREEN} sw={3} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 3.6)}>
        <T x={660} y={312} size={15} fill={GREEN} script anchor="start">
          {t("always safe", "hamesha safe")}
        </T>
      </Fade>

      {/* beat 6 — multiply/divide: positive safe, negative flips */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Chip x={140} y={390} w={380} h={50} fill={CREAM} stroke={GREEN} textFill={GREEN} size={18}>
          {t("×/÷ by POSITIVE → safe", "×/÷ POSITIVE se → safe")}
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.9)}>
        <Chip x={580} y={390} w={380} h={50} fill={CREAM} stroke={RED} textFill={RED} size={18}>
          {t("×/÷ by NEGATIVE → flips", "×/÷ NEGATIVE se → flip")}
        </Chip>
      </Fade>

      {/* beat 7 — the real danger move, stated plainly */}
      <Draw on={beat >= 7} delay={dl(7, 0.3)} d={lineD(100, 460, 100, 548)} stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 0.9)}>
        <T x={120} y={485} size={17} fill={RED} script anchor="start">
          {t(
            "never cross-multiply by an unknown-sign expression, like x + 3",
            "kabhi cross-multiply mat karo unknown-sign expression se, jaise x + 3"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={120} y={535} size={17} fill={RED} script anchor="start">
          {t(
            "never square unless both sides are already ≥ 0",
            "kabhi square mat karo jab tak dono sides ≥ 0 na ho"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
