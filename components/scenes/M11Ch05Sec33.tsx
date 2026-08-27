/**
 * M11 Ch05 · Section 33 — "When one sign-flip is no longer enough"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. First section of subtopic 4 — introduces the
 * wavy-curve method's core ideas. First use of wavyCurveD in the chapter.
 *
 * Beats (en [0,19.63,27.48,50.6,59.9,70.4,87.72,107.26], hi
 * [0,18.86,25.69,47.36,57.43,68.61,86.1,106.84]) — Act 1 (beats 0-2, why the
 * old method fails) erased at beat 3; Act 2 (beats 3-7) builds the new one:
 *  0 heading: linear = one flip — single-root number line
 *  1 text: one flip rule handled everything (ring emphasis on the root)
 *  2 text: can't √ x²>4, can't cross-multiply (x-1)/(x+2)≥0 — both crossed
 *  3 text: key fact — sign only switches by passing through zero [erase act 1]
 *  4 text: mark every zero — critical points chop the line into intervals
 *  5 note (red-margin, high): sign is CONSTANT inside each interval
 *  6 text: walking left→right along (x-1)(x-3)(x+2) — wavy curve drawn
 *  7 note (red-margin, high): odd powers CROSS, even powers TOUCH and BOUNCE
 *
 * Layout plan (Act 1, beats 0-2):
 *  b0 | mini axis + 1 root (green)  | Draw/circle | x280..800 y170
 *  b0 | "ax+b" / "ONE flip" labels  | T mid | y135 / y205
 *  b1 | ring on root (green)        | Draw  | ringD(500,170,20,15)
 *  b2 | 2 crossed invalid-method chips | Chip/Draw | y285
 * Layout plan (Act 2, beats 3-7, full board):
 *  b3 | caption (15,ink,scr)        | T mid | bl 115
 *  b4 | axis + 3 roots + region I-IV (erased b6) | Draw/circle/T | y280, x300/540/700
 *  b5 | boxed guardrail (14,red)    | Chip  | x160..920 y400..444
 *  b6 | wavy curve (green, amplitude 40) | Draw | wavyCurveD roots 300/540/700
 *  b7 | boxed guardrail (14,red)    | Chip  | x140..940 y520..564
 */

import React from "react";
import { Circle } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, ringD, crossD, INK, MUTED, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';
import { axisD, wavyCurveD, lineD } from "./math-kit";

export default function M11Ch05Sec33({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);
  const act1 = (k: number) => beat >= k && beat < 3;
  const regionLabels = beat >= 4 && beat < 6;

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={22} fill={RED} script>
          {t("the wavy curve: sign flips only at zeros", "wavy curve: sign sirf zeros pe flip hota hai")}
        </T>
      </Fade>

      {/* beat 0 — linear = one flip */}
      <Draw on={act1(0)} delay={dl(0, 0.3)} d={axisD(280, 800, 170)} stroke={INK} sw={2} dur={0.7} />
      <Fade on={act1(0)} delay={dl(0, 1.0)}>
        <Circle cx={500} cy={170} r={5} fill={GREEN} />
      </Fade>
      <Draw on={act1(0)} delay={dl(0, 1.4)} d={lineD(500, 170, 780, 170)} stroke={GREEN} sw={5} dur={0.5} />
      <Fade on={act1(0)} delay={dl(0, 1.9)}>
        <T x={500} y={135} size={14} fill={INK} weight={700}>
          ax + b
        </T>
      </Fade>
      <Fade on={act1(0)} delay={dl(0, 2.2)}>
        <T x={500} y={205} size={13} fill={GREEN}>
          {t("ONE flip", "ek hi flip")}
        </T>
      </Fade>

      {/* beat 1 — one flip rule handled everything */}
      <Draw on={act1(1)} delay={dl(1, 0.3)} d={ringD(500, 170, 20, 15)} stroke={GREEN} sw={2.2} dur={0.6} />
      <Fade on={act1(1)} delay={dl(1, 1.0)}>
        <T x={540} y={245} size={14} fill={INK} script>
          {t("a single flip rule handled everything — always the same recipe", "ek hi flip rule sab handle karta tha — hamesha same recipe")}
        </T>
      </Fade>

      {/* beat 2 — old tricks don't work anymore */}
      <Fade on={act1(2)} delay={dl(2, 0.3)}>
        <Chip x={140} y={285} w={380} h={44} fill={CREAM} stroke={RED} textFill={RED} size={14} script={false}>
          x² &gt; 4: can&apos;t just √ both sides
        </Chip>
      </Fade>
      <Draw on={act1(2)} delay={dl(2, 0.9)} d={crossD(140, 285, 380, 44)} stroke={RED} sw={2} dur={0.4} />
      <Fade on={act1(2)} delay={dl(2, 1.4)}>
        <Chip x={560} y={285} w={380} h={44} fill={CREAM} stroke={RED} textFill={RED} size={13} script={false}>
          (x-1)/(x+2)≥0: no cross-multiply
        </Chip>
      </Fade>
      <Draw on={act1(2)} delay={dl(2, 2.0)} d={crossD(560, 285, 380, 44)} stroke={RED} sw={2} dur={0.4} />

      {/* beat 3 — the key fact (act 1 erased) */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={115} size={15} fill={INK} script>
          {t(
            "key fact: a continuous expression can only switch sign by passing through zero",
            "key fact: continuous expression sign sirf zero se guzarte hue switch karta hai"
          )}
        </T>
      </Fade>

      {/* beat 4 — mark every zero: critical points chop the line */}
      <Draw on={beat >= 4} delay={dl(4, 0.3)} d={axisD(150, 900, 280)} stroke={INK} sw={2} dur={0.8} />
      {[300, 540, 700].map((x, i) => (
        <Fade key={x} on={beat >= 4} delay={dl(4, 0.9 + i * 0.3)}>
          <Circle cx={x} cy={280} r={5} fill={INK} />
        </Fade>
      ))}
      {[
        { x: 300, l: "-2" },
        { x: 540, l: "1" },
        { x: 700, l: "3" },
      ].map((r) => (
        <Fade key={r.l} on={beat >= 4} delay={dl(4, 1.8)}>
          <T x={r.x} y={303} size={13} fill={MUTED}>
            {r.l}
          </T>
        </Fade>
      ))}
      {regionLabels &&
        [
          { x: 225, l: "I" },
          { x: 420, l: "II" },
          { x: 620, l: "III" },
          { x: 830, l: "IV" },
        ].map((r) => (
          <Fade key={r.l} on={beat >= 4} delay={dl(4, 2.2)}>
            <T x={r.x} y={210} size={13} fill={MUTED} weight={700}>
              {r.l}
            </T>
          </Fade>
        ))}

      {/* beat 5 — sign is constant inside each interval */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Chip x={160} y={400} w={760} h={44} fill={CREAM} stroke={RED} textFill={RED} size={14}>
          {t(
            "inside each interval the sign is CONSTANT — find it once, propagate across the rest",
            "har interval ke andar sign CONSTANT hai — ek baar dhoondo, baaki mein propagate karo"
          )}
        </Chip>
      </Fade>

      {/* beat 6 — the wavy curve, walked left to right */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.3)}
        d={wavyCurveD([300, 540, 700], 280, 40, 150, 900, true)}
        stroke={GREEN}
        sw={2.6}
        dur={1.2}
      />
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={540} y={480} size={13} fill={INK} script>
          {t(
            "(x-1)(x-3)(x+2): each root crossed flips one factor, so the product flips",
            "(x-1)(x-3)(x+2): har root cross karne se ek factor flip hota hai, product bhi flip"
          )}
        </T>
      </Fade>

      {/* beat 7 — the multiplicity rule */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Chip x={140} y={520} w={800} h={44} fill={CREAM} stroke={RED} textFill={RED} size={14}>
          {t(
            "odd powers CROSS the axis; even powers TOUCH and BOUNCE — that's the whole game",
            "odd powers axis CROSS karte hain; even powers TOUCH karke BOUNCE — yehi poora game hai"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
