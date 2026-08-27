/**
 * M11 Ch06 · Section 2 — "The Addition Principle: AND vs OR"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md.
 *
 * Beats (board_reveal_at_english [0,11.61,25.34,36.86,56.32,63.15,75.26],
 * hinglish [0,11.52,24.15,33.11,53.25,61.27,72.87]):
 *  0 heading: anchor — pick ONE pile OR the other, not both
 *  1 offer setup: two SEPARATE piles, sabzi(4) OR sweet(2)
 *  2 formula lands: 4 + 2 = 6 ways
 *  3 guardrail: OR (no overlap) → add
 *  4 [erase A] AND vs OR comparison table (fan icon vs separate dots)
 *  5 overlap warning: two circles overlap → double-counted (VennShade)
 *  6 [erase B] burn-it-in: AND → multiply, OR → add
 *
 * Layout plan (boxes = estimated render boxes; longer language counts):
 *  always | title (script 24, red)            | T mid | x?..? y39..82
 *  b0 | anchor question (20, ink)              | T mid | x?..? y114..136
 *  b1 | circle A (r64) + 4 dots + label         | Draw/circle/T | x216..344 y165..324
 *  b1 | "OR" (34, ink, w800)                    | T mid | x523..557 y243..281
 *  b1 | circle B (r64) + 2 dots + label         | Draw/circle/T | x736..864 y165..324
 *  b2 | "4 + 2 = 6 ways" (28, ink, w800)        | T mid | x442..638 y358..389
 *  b3 | guardrail chip (red, h44)                | Chip  | x390..690 y430..474
 *  [group A erased at beat>=4]
 *  b4 | divider                                  | Draw  | x540 y100..400
 *  b4 | "AND"/"OR" headers (20, w800)             | T mid | x270/810 y114..135
 *  b4 | "combines choices"/"gives alternatives"   | T mid | x~ y159..175
 *  b4 | "→ MULTIPLY (×)"/"→ ADD (+)" (22, green)  | T mid | x~ y199..219
 *  b4 | AND fan icon (root+3 dots)                | Draw/circle | x220..320 y240..280
 *  b4 | OR pair icon (2 separate dots)             | circle | x810 y245/295
 *  b5 | "if the piles overlap:" (15, ink)          | T mid | x457..623 y333..350
 *  b5 | two overlapping circles + red lens shade   | Draw/VennShade | x410..590 y370..470
 *  b5 | "naive adding DOUBLE-COUNTS" (15, red,w700)| T mid | x439..641 y488..505
 *  [group B erased at beat>=6]
 *  b6 | "burn it in:" (22, script, red)            | T mid | x?..? y191..231
 *  b6 | AND chip (green, h70)                      | Chip  | x210..490 y280..350
 *  b6 | OR chip (green, h70)                       | Chip  | x590..870 y280..350
 *  b6 | checkmark                                   | Draw  | x532..548 y361..376
 *  b6 | "that's the whole game" (16, muted)         | T mid | x?..? y388..405
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
  INK,
  MUTED,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { circleD, VennShade, lineD, checkD } from "./math-kit";

export default function M11Ch06Sec2({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const aOn = beat >= 0 && beat < 4;
  const bOn = beat >= 4 && beat < 6;

  return (
    <Scene>
      {/* title always-on */}
      <Fade on={true}>
        <T x={540} y={70} size={24} fill={RED} script>
          {t("AND multiplies. OR adds.", "AND se multiply, OR se add.")}
        </T>
      </Fade>

      {/* Group A — beats 0-3 */}
      <Fade on={aOn && beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={130} size={20} fill={INK}>
          {t(
            "What if you pick ONE pile OR the other — not both?",
            "Agar sirf EK pile lo — ya yeh ya woh, dono nahi?"
          )}
        </T>
      </Fade>

      {/* beat 1 — two separate piles */}
      <Draw on={aOn && beat >= 1} delay={dl(1, 0.3)} d={circleD(280, 260, 64)} stroke={INK} sw={2} dur={0.8} />
      <Fade on={aOn && beat >= 1} delay={dl(1, 1.1)}>
        <T x={280} y={178} size={16} fill={MUTED}>
          {t("sabzi (4)", "sabzi (4)")}
        </T>
        {[
          [260, 240],
          [300, 240],
          [260, 280],
          [300, 280],
        ].map(([x, y]) => (
          <Circle key={`${x}-${y}`} cx={x} cy={y} r={5} fill={INK} />
        ))}
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 1.6)}>
        <T x={540} y={270} size={34} fill={INK} weight={800}>
          {t("OR", "YA")}
        </T>
      </Fade>
      <Draw on={aOn && beat >= 1} delay={dl(1, 2.1)} d={circleD(800, 260, 64)} stroke={INK} sw={2} dur={0.8} />
      <Fade on={aOn && beat >= 1} delay={dl(1, 2.9)}>
        <T x={800} y={178} size={16} fill={MUTED}>
          {t("sweet (2)", "sweet (2)")}
        </T>
        <Circle cx={785} cy={260} r={5} fill={INK} />
        <Circle cx={815} cy={260} r={5} fill={INK} />
      </Fade>

      {/* beat 2 — formula */}
      <Fade on={aOn && beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={380} size={28} fill={INK} weight={800}>
          4 + 2 = 6 {t("ways", "tareeke")}
        </T>
      </Fade>

      {/* beat 3 — guardrail */}
      <Fade on={aOn && beat >= 3} delay={dl(3, 0.3)}>
        <Chip x={390} y={430} w={300} h={44} fill={CREAM} stroke={RED} textFill={RED} size={17}>
          {t("OR (no overlap) → add", "OR (no overlap) → add")}
        </Chip>
      </Fade>

      {/* Group B — beats 4-5: AND vs OR comparison + overlap warning */}
      <Draw on={bOn} delay={dl(4, 0.2)} d={lineD(540, 100, 540, 400)} stroke={MUTED} sw={1.6} dur={0.6} />
      <Fade on={bOn} delay={dl(4, 0.7)}>
        <T x={270} y={124} size={20} fill={INK} weight={800}>
          AND
        </T>
      </Fade>
      <Fade on={bOn} delay={dl(4, 1.1)}>
        <T x={810} y={124} size={20} fill={INK} weight={800}>
          OR
        </T>
      </Fade>
      <Fade on={bOn} delay={dl(4, 1.6)}>
        <T x={270} y={168} size={15} fill={INK}>
          {t("combines choices", "choices combine")}
        </T>
      </Fade>
      <Fade on={bOn} delay={dl(4, 1.9)}>
        <T x={810} y={168} size={15} fill={INK}>
          {t("gives alternatives", "alternatives deta hai")}
        </T>
      </Fade>
      <Fade on={bOn} delay={dl(4, 2.4)}>
        <T x={270} y={210} size={20} fill={GREEN} weight={800}>
          {t("→ MULTIPLY (×)", "→ MULTIPLY (×)")}
        </T>
      </Fade>
      <Fade on={bOn} delay={dl(4, 2.7)}>
        <T x={810} y={210} size={20} fill={GREEN} weight={800}>
          {t("→ ADD (+)", "→ ADD (+)")}
        </T>
      </Fade>

      <Draw
        on={bOn}
        delay={dl(4, 3.2)}
        d={`M220 260 L320 240 M220 260 L320 260 M220 260 L320 280`}
        stroke={INK}
        sw={1.6}
        dur={0.6}
      />
      <Fade on={bOn} delay={dl(4, 3.7)}>
        <Circle cx={220} cy={260} r={5} fill={INK} />
        <Circle cx={320} cy={240} r={5} fill={INK} />
        <Circle cx={320} cy={260} r={5} fill={INK} />
        <Circle cx={320} cy={280} r={5} fill={INK} />
      </Fade>
      <Fade on={bOn} delay={dl(4, 4.1)}>
        <Circle cx={810} cy={245} r={5} fill={INK} />
        <Circle cx={810} cy={295} r={5} fill={INK} />
      </Fade>

      {/* beat 5 — overlap warning */}
      <Fade on={bOn && beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={345} size={15} fill={INK}>
          {t("if the piles overlap:", "agar piles overlap karein:")}
        </T>
      </Fade>
      <Draw on={bOn && beat >= 5} delay={dl(5, 0.8)} d={circleD(460, 420, 50)} stroke={INK} sw={1.8} dur={0.7} />
      <Draw on={bOn && beat >= 5} delay={dl(5, 1.3)} d={circleD(540, 420, 50)} stroke={INK} sw={1.8} dur={0.7} />
      <VennShade
        on={bOn && beat >= 5}
        delay={dl(5, 2.0)}
        include={[
          { cx: 460, cy: 420, r: 50 },
          { cx: 540, cy: 420, r: 50 },
        ]}
        fill={RED}
        opacity={0.4}
      />
      <Fade on={bOn && beat >= 5} delay={dl(5, 2.6)}>
        <T x={540} y={500} size={15} fill={RED} weight={700}>
          {t("naive adding DOUBLE-COUNTS", "seedha add karne se DOUBLE-COUNT")}
        </T>
      </Fade>

      {/* beat 6 — burn it in (group B erased) */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={220} size={22} fill={RED} script>
          {t("burn it in:", "yeh yaad rakho:")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <Chip x={210} y={280} w={280} h={70} fill={GREEN} textFill="#fff" size={22} script={false}>
          {t("AND → multiply (×)", "AND → multiply (×)")}
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.4)}>
        <Chip x={590} y={280} w={280} h={70} fill={GREEN} textFill="#fff" size={22} script={false}>
          {t("OR → add (+)", "OR → add (+)")}
        </Chip>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 2.0)} d={checkD(540, 370, 16)} stroke={GREEN} sw={3} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 2.5)}>
        <T x={540} y={400} size={16} fill={MUTED}>
          {t("that's the whole game", "bas itna hi game hai")}
        </T>
      </Fade>
    </Scene>
  );
}
