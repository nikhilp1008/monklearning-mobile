/**
 * M11 Ch04 · Section 4 — "Anatomy of a complex number"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept — two clusters: (A) z=a+ib anatomy [beats 1-4, erased at
 * beat 5], (B) where C sits + order-is-undefined guardrail [beats 5-7, reuses
 * the freed space].
 *
 * Beats (board_reveal_at_english [0, 10.24, 23.81, 32.77, 45.99, 55.64, 73.13, 85.59]):
 *  0 heading: z = a + ib, real and imaginary parts
 *  1 THE DIAGRAM: compact Argand axes, point z=a+ib plotted, drop lines, "z=a+ib" tag
 *  2 explain: foot labels a, b + caption a=Re(z), b=Im(z)
 *  3 guardrail (red-margin, high): Im(z)=b, a real number — NOT ib
 *  4 explain: purely real (b=0) / purely imaginary (a=0,b≠0), underlined
 *  5 THE DIAGRAM 2: N⊂W⊂Z⊂Q⊂R⊂C nested boxes, innermost (N) revealed first
 *  6 guardrail (red-margin): order undefined on C — "9+6i>3+2i" crossed out
 *  7 verdict: compare reals/moduli, never non-real complex numbers
 *
 * Layout plan (b1-b4 fully erase — on={...&&beat<5} — before b5-b7 reuse their space):
 *  b0 | heading (17,amber_dark)            | T mid    | x540 y102
 *  b0 | underline                           | Draw     | x420..660 y118
 *  b1 | axes c(540,225) 430..650/150..300   | CartesianAxes (no ticks)
 *  b1 | Re/Im labels, origin dot, O→Z line, Z dot, drop lines, "z=a+ib" tag
 *  b2 | foot labels a,b + caption           | T        | y324
 *  b3 | red bar + guardrail text            | Draw+T   | x300 y355..389, text y372
 *  b4 | special-cases text + underline      | T+Draw   | x540 y428, underline y444
 *  b5 | 6 nested boxes (staggered, inner→outer) | NestedSets ×6 | cx540 cy270
 *  b6 | red bar + "order undefined" text     | Draw+T   | x300 y384..418, text y401
 *  b6 | crossed comparison "9+6i>3+2i"       | T+Draw   | x420 y445, cross(420,431.7,159,18.5)
 *  b7 | verdict chip                         | Chip     | x270..810 y502..546
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
  crossD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { CartesianAxes, pointOnCircle, lineD, NestedSets } from "./math-kit";

const CX = 540;
const CY = 225;
const Z = pointOnCircle(CX, CY, 75, 0.55);
const FOOT_X = { x: Z.x, y: CY };
const FOOT_Y = { x: CX, y: Z.y };

const LEVELS = ["C", "R", "Q", "Z", "W", "N"]; // index 0 = biggest/outermost box
const NEST_CX = 540;
const NEST_CY = 270;

export default function M11Ch04Sec4({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={22} fill={RED} anchor="middle" script>
          {t("Anatomy of a Complex Number", "Complex Number ki Anatomy")}
        </T>
      </Fade>

      {/* beat 0 — heading */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={102} size={17} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("z = a + ib: real and imaginary parts", "z = a + ib: real aur imaginary parts")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.4)} d="M 420 118 L 660 118" stroke={AMBER} sw={2.2} dur={0.5} />

      {/* beat 1 — THE DIAGRAM: axes + point z=a+ib (erased at beat 5) */}
      <CartesianAxes
        on={beat >= 1 && beat < 5}
        delay={dl(1, 0)}
        originX={CX}
        originY={CY}
        xLeft={430}
        xRight={650}
        yTop={150}
        yBottom={300}
        showTicks={false}
      />
      <Fade on={beat >= 1 && beat < 5} delay={dl(1, 0.3)}>
        <T x={656} y={229} size={13} fill={MUTED} anchor="start">Re</T>
        <T x={548} y={142} size={13} fill={MUTED} anchor="start">Im</T>
      </Fade>
      <Fade on={beat >= 1 && beat < 5} delay={dl(1, 0.5)}>
        <Circle cx={CX} cy={CY} r={3.5} fill={INK} />
      </Fade>
      <Draw on={beat >= 1 && beat < 5} delay={dl(1, 0.8)} d={lineD(CX, CY, Z.x, Z.y)} stroke={INK} sw={2.2} dur={0.5} />
      <Fade on={beat >= 1 && beat < 5} delay={dl(1, 1.3)}>
        <Circle cx={Z.x} cy={Z.y} r={4} fill={INK} />
      </Fade>
      <Draw on={beat >= 1 && beat < 5} delay={dl(1, 1.6)} d={lineD(Z.x, Z.y, FOOT_X.x, FOOT_X.y)} stroke={MUTED} sw={1.4} dur={0.4} />
      <Draw on={beat >= 1 && beat < 5} delay={dl(1, 1.9)} d={lineD(Z.x, Z.y, FOOT_Y.x, FOOT_Y.y)} stroke={MUTED} sw={1.4} dur={0.4} />
      <Fade on={beat >= 1 && beat < 5} delay={dl(1, 2.3)}>
        <T x={620} y={172} size={14} fill={INK} anchor="start" weight={700}>z = a + ib</T>
      </Fade>

      {/* beat 2 — foot labels + caption (erased at beat 5) */}
      <Fade on={beat >= 2 && beat < 5} delay={dl(2, 0)}>
        <T x={FOOT_X.x} y={241} size={13} fill={INK} anchor="middle">a</T>
        <T x={528} y={189.8} size={13} fill={INK} anchor="end">b</T>
      </Fade>
      <Fade on={beat >= 2 && beat < 5} delay={dl(2, 0.5)}>
        <T x={540} y={324} size={15} fill={INK} anchor="middle">
          {t("a = Re(z) real part;  b = Im(z) imaginary part", "a = Re(z) real part;  b = Im(z) imaginary part")}
        </T>
      </Fade>

      {/* beat 3 — guardrail: Im(z)=b, not ib (erased at beat 5) */}
      <Draw on={beat >= 3 && beat < 5} delay={dl(3, 0.1)} d="M 300 355 L 300 389" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 3 && beat < 5} delay={dl(3, 0.6)}>
        <T x={316} y={372} size={17} fill={RED} anchor="start" weight={700}>
          {t("Im(z) = b — a real number, NOT ib", "Im(z) = b — real number, ib nahi")}
        </T>
      </Fade>

      {/* beat 4 — purely real / purely imaginary (erased at beat 5) */}
      <Fade on={beat >= 4 && beat < 5} delay={dl(4, 0)}>
        <T x={540} y={428} size={15} fill={INK} anchor="middle">
          {t(
            "purely real if b=0;  purely imaginary if a=0 and b≠0",
            "purely real agar b=0;  purely imaginary agar a=0 aur b≠0"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 4 && beat < 5} delay={dl(4, 0.7)} d="M 314 444 L 766 444" stroke={MUTED} sw={1.6} dur={0.6} />

      {/* beat 5 — THE DIAGRAM 2: nested number sets, innermost (N) revealed first */}
      {[5, 4, 3, 2, 1, 0].map((idx, order) => {
        const onArr = [false, false, false, false, false, false];
        onArr[idx] = beat >= 5;
        return (
          <NestedSets
            key={idx}
            on={onArr}
            delay={dl(5, order * 0.35)}
            cx={NEST_CX}
            cy={NEST_CY}
            levels={LEVELS}
            outerW={480}
            outerH={180}
            step={70}
            stroke={INK}
            labelFill={MUTED}
          />
        );
      })}

      {/* beat 6 — guardrail: order undefined on C */}
      <Draw on={beat >= 6} delay={dl(6, 0.1)} d="M 300 384 L 300 418" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={316} y={401} size={17} fill={RED} anchor="start" weight={700}>
          {t("Order is undefined on C:", "C par order define nahi hai:")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.2)}>
        <T x={420} y={445} size={17} fill={RED} anchor="start" weight={700}>
          9 + 6i  &gt;  3 + 2i
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.9)} d={crossD(420, 431.7, 159, 18.5)} stroke={RED} sw={2.6} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 2.5)}>
        <T x={590} y={445} size={13} fill={RED} anchor="start" script>
          {t("meaningless!", "meaningless!")}
        </T>
      </Fade>

      {/* beat 7 — verdict */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <Chip x={270} y={502} w={540} h={44} fill={CREAM} stroke={INK} textFill={INK} size={15} script={false}>
          {t("Compare reals or moduli — never non-real complex numbers", "Reals ya moduli compare karo — non-real complex kabhi nahi")}
        </Chip>
      </Fade>
    </Scene>
  );
}
