/**
 * M11 Ch05 · Section 2 — "Marking the line, and the reflection that flips the sign"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md.
 *
 * Beats (en [0,9.22,22.7,33.19,47.96,58.11,70.66,78.51], hi
 * [0,8.7,23.13,32.68,47.7,58.03,71.17,79.79]) — two acts, act 1 erased at beat 4:
 *  0 heading — top number line drawn (structure)
 *  1 text: hollow circle = excluded — hollow dot at x=2, shade right, "x > 2"
 *  2 text: filled circle = included — bottom line drawn, filled dot, "x ≥ 2"
 *  3 diagram: same direction, different edge — connector + caption
 *  4 heading "the rule that costs the most marks" — ERASE act 1, banner
 *  5 formula -2<3 → ×(-1) → 2>-3 (">" landed in red, the flipped symbol)
 *  6 note (red-margin): multiply/divide by NEGATIVE ⇒ sign flips
 *  7 diagram: reflection across 0 — crossing arcs -2→2 and 3→-3, image dots red
 *
 * Layout plan (act 1, beats 0-3):
 *  b0 | top axis+ticks             | Draw   | x200..690  y184..196
 *  b0 | "0"/"1"/"3" numerals top   | T mid  | y210 (bl)
 *  b1 | hollow dot x=2 top         | circle | c(480,190) r5
 *  b1 | shade top (green)          | Draw   | x480..680 y190
 *  b1 | "x > 2" (18,green,w700)    | T mid  | x450..510 y152..170 (bl 165)
 *  b1 | "excluded…" (15,muted,scr) | T mid  | x310..570 y233..259 (bl 252)
 *  b2 | bottom axis+ticks          | Draw   | x200..690 y334..346
 *  b2 | "0"/"1"/"3" numerals bot   | T mid  | y360 (bl)
 *  b2 | filled dot x=2 bottom      | circle | c(480,340) r5
 *  b2 | shade bottom (green)       | Draw   | x480..680 y340
 *  b2 | "x ≥ 2" (18,green,w700)    | T mid  | x448..512 y302..320 (bl 315)
 *  b2 | "included…" (15,muted,scr) | T mid  | x312..568 y383..409 (bl 402)
 *  b3 | connector                  | Draw   | x480 y195..335
 *  b3 | "same direction…" (16,ink,scr) | T mid | x518..782 y252..278 (bl 265)
 *  b4 | [erase act 1]
 *  b4 | banner chip (red/cream)    | Chip   | x190..890 y130..186
 *  b5 | "-2 < 3" (26,ink,w800)     | T mid  | x501..579 y230..258 (bl 250)
 *  b5 | arrow ↓ + "×(-1)" (16,red) | Draw+T | x540 y275..303 · label x560 y292
 *  b5 | "2"/">"(red)/" -3" (26,w800) | T st | x501..579 y320..348 (bl 340)
 *  b6 | margin bar (red)           | Draw   | x100 y386..422
 *  b6 | guardrail text (19,red,scr)| T st   | x120..684 y387..421 (bl 412)
 *  b7 | reflection axis+ticks      | Draw   | x170..920 y484..496
 *  b7 | numerals -3/-2/0/2/3 (14,muted) | T mid | y511..526 (bl 522)
 *  b7 | original dots (ink) -2,3   | circle | c(404,490)/(744,490) r5
 *  b7 | arc -2→2 (green)           | Draw   | peak (540,440)
 *  b7 | image dot 2 (red, open)    | circle | c(676,490) r5
 *  b7 | arc 3→-3 (green)           | Draw   | peak (540,400)
 *  b7 | image dot -3 (red, open)   | circle | c(336,490) r5
 *  b7 | caption (16,ink,scr)       | T mid  | x376..704 y538..559 (bl 554)
 */

import React from "react";
import { Circle } from 'react-native-svg';
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
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { axisD, tickD, IntervalDot, lineD } from "./math-kit";

const Y_TOP = 190;
const Y_BOT = 340;
const LINE_X0 = 200;
const LINE_X1 = 690;
const VAL_X0 = 260; // value 0
const STEP = 110; // px per unit
const DOT_X = VAL_X0 + 2 * STEP; // x=2 → 480

function ticksRow(y: number): string {
  return [0, 1, 3].map((v) => tickD(VAL_X0 + v * STEP, y, 6)).join(" ");
}

export default function M11Ch05Sec2({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);
  // act 1 (beats 0-3) is erased once beat 4 lands
  const act1 = (k: number) => beat >= k && beat < 4;

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={26} fill={RED} script>
          {t(
            "hollow ≠ filled — and a negative flips the sign",
            "hollow ≠ filled — aur negative se sign flip hota hai"
          )}
        </T>
      </Fade>

      {/* beat 0 — top number line (structure) */}
      <Draw on={act1(0)} delay={dl(0, 0.3)} d={axisD(LINE_X0, LINE_X1, Y_TOP)} stroke={INK} sw={2} dur={1} />
      <Draw on={act1(0)} delay={dl(0, 1.4)} d={ticksRow(Y_TOP)} stroke={INK} sw={1.4} dur={0.6} />
      {[0, 1, 3].map((v) => (
        <Fade key={v} on={act1(0)} delay={dl(0, 2.1)}>
          <T x={VAL_X0 + v * STEP} y={210} size={14} fill={MUTED}>
            {v}
          </T>
        </Fade>
      ))}

      {/* beat 1 — hollow circle: excluded, strict */}
      <IntervalDot on={act1(1)} delay={dl(1, 0.3)} x={DOT_X} y={Y_TOP} open={true} r={5} stroke={GREEN} />
      <Draw on={act1(1)} delay={dl(1, 0.9)} d={lineD(DOT_X, Y_TOP, LINE_X1 - 10, Y_TOP)} stroke={GREEN} sw={5} dur={0.7} />
      <Fade on={act1(1)} delay={dl(1, 1.7)}>
        <T x={DOT_X} y={165} size={18} fill={GREEN} weight={700}>
          x &gt; 2
        </T>
      </Fade>
      <Fade on={act1(1)} delay={dl(1, 2.4)}>
        <T x={440} y={252} size={15} fill={MUTED} script>
          {t("excluded — strict <, >", "excluded — strict wala <, >")}
        </T>
      </Fade>

      {/* beat 2 — filled circle: included, non-strict */}
      <Draw on={act1(2)} delay={dl(2, 0.3)} d={axisD(LINE_X0, LINE_X1, Y_BOT)} stroke={INK} sw={2} dur={1} />
      <Draw on={act1(2)} delay={dl(2, 1.5)} d={ticksRow(Y_BOT)} stroke={INK} sw={1.4} dur={0.6} />
      {[0, 1, 3].map((v) => (
        <Fade key={v} on={act1(2)} delay={dl(2, 2.5)}>
          <T x={VAL_X0 + v * STEP} y={360} size={14} fill={MUTED}>
            {v}
          </T>
        </Fade>
      ))}
      <IntervalDot on={act1(2)} delay={dl(2, 3.1)} x={DOT_X} y={Y_BOT} open={false} r={5} stroke={GREEN} />
      <Draw on={act1(2)} delay={dl(2, 3.6)} d={lineD(DOT_X, Y_BOT, LINE_X1 - 10, Y_BOT)} stroke={GREEN} sw={5} dur={0.7} />
      <Fade on={act1(2)} delay={dl(2, 4.3)}>
        <T x={DOT_X} y={315} size={18} fill={GREEN} weight={700}>
          x ≥ 2
        </T>
      </Fade>
      <Fade on={act1(2)} delay={dl(2, 4.9)}>
        <T x={440} y={402} size={15} fill={MUTED} script>
          {t("included — non-strict ≤, ≥", "included — non-strict wala ≤, ≥")}
        </T>
      </Fade>

      {/* beat 3 — same direction, different edge */}
      <Draw on={act1(3)} delay={dl(3, 0.3)} d={lineD(DOT_X, Y_TOP + 5, DOT_X, Y_BOT - 5)} stroke={MUTED} sw={1.6} dur={0.6} />
      <Fade on={act1(3)} delay={dl(3, 1.0)}>
        <T x={650} y={265} size={16} fill={INK} script>
          {t("same direction, different edge", "direction same, edge alag")}
        </T>
      </Fade>

      {/* beat 4 — the rule that costs the most marks (act 1 erased) */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <Chip x={190} y={130} w={700} h={56} fill={CREAM} stroke={RED} textFill={RED} size={20}>
          {t(
            "the rule that costs the most marks in this chapter",
            "is chapter mein sabse zyada marks yahi rule le jaata hai"
          )}
        </Chip>
      </Fade>

      {/* beat 5 — the derivation: multiply by a negative, the sign flips */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={250} size={26} fill={INK} weight={800}>
          -2 &lt; 3
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 1.3)} d={arrowD(540, 275, 540, 303)} stroke={RED} sw={2.6} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 1.9)}>
        <T x={560} y={292} size={16} fill={RED} anchor="start">
          ×(-1)
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2.6)}>
        <T x={501} y={340} size={26} fill={INK} weight={800} anchor="start">
          {"2 "}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2.6)}>
        <T x={527} y={340} size={26} fill={RED} weight={800} anchor="start">
          {">"}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2.6)}>
        <T x={540} y={340} size={26} fill={INK} weight={800} anchor="start">
          {" -3"}
        </T>
      </Fade>

      {/* beat 6 — the guardrail, stated in words */}
      <Draw on={beat >= 6} delay={dl(6, 0.3)} d={lineD(100, 387, 100, 422)} stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={120} y={412} size={19} fill={RED} script anchor="start">
          {t(
            "multiply or divide by a NEGATIVE ⇒ the sign flips.",
            "NEGATIVE se multiply ya divide karo ⇒ sign flip ho jaata hai."
          )}
        </T>
      </Fade>

      {/* beat 7 — why, in a picture: reflection across 0 */}
      <Draw on={beat >= 7} delay={dl(7, 0.3)} d={axisD(170, 920, 490)} stroke={INK} sw={2} dur={1} />
      <Draw
        on={beat >= 7}
        delay={dl(7, 1.1)}
        d={[336, 404, 540, 676, 744].map((x) => tickD(x, 490, 6)).join(" ")}
        stroke={INK}
        sw={1.4}
        dur={0.6}
      />
      {[
        [336, "-3"],
        [404, "-2"],
        [540, "0"],
        [676, "2"],
        [744, "3"],
      ].map(([x, label]) => (
        <Fade key={label} on={beat >= 7} delay={dl(7, 1.8)}>
          <T x={x as number} y={522} size={14} fill={MUTED}>
            {label}
          </T>
        </Fade>
      ))}
      <Fade on={beat >= 7} delay={dl(7, 2.4)}>
        <Circle cx={404} cy={490} r={5} fill={INK} />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 2.7)}>
        <Circle cx={744} cy={490} r={5} fill={INK} />
      </Fade>
      <Draw
        on={beat >= 7}
        delay={dl(7, 3.4)}
        d="M 404 490 Q 540 440 676 490 M 667.05 490.95 L 676 490 L 669.82 483.46"
        stroke={GREEN}
        sw={2.4}
        dur={0.8}
      />
      <IntervalDot on={beat >= 7} delay={dl(7, 4.3)} x={676} y={490} open={true} r={5} stroke={RED} />
      <Draw
        on={beat >= 7}
        delay={dl(7, 5.0)}
        d="M 744 490 Q 540 400 336 490 M 341.75 483.08 L 336 490 L 345.0 490.36"
        stroke={GREEN}
        sw={2.4}
        dur={0.9}
      />
      <IntervalDot on={beat >= 7} delay={dl(7, 6.0)} x={336} y={490} open={true} r={5} stroke={RED} />
      <Fade on={beat >= 7} delay={dl(7, 6.8)}>
        <T x={540} y={554} size={16} fill={INK} script>
          {t("reflect across 0 — left and right swap", "0 ke aar-paar reflect — left-right swap")}
        </T>
      </Fade>
    </Scene>
  );
}
