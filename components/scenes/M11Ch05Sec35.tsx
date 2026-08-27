/**
 * M11 Ch05 · Section 35 — "The wavy-curve algorithm, step by step"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. The six-step algorithm as a numbered list
 * (left-aligned — lines vary too much in length for centering to read
 * well), closing on the quadratic "outside vs between" shortcut with a
 * hand-drawn parabola.
 *
 * Beats (en [0,11.26,25.34,39.25,54.87,71.85,84.74,102.49], hi
 * [0,10.67,24.32,39,52.65,66.65,79.79,97.88]):
 *  0 heading — the six steps, framed
 *  1 text: step 1 — move everything to one side, other side = 0
 *  2 text: step 2 — combine, factor into (x-r), positive coefficient
 *  3 text: step 3 — mark critical points (filled/hollow rules)
 *  4 text: step 4 — fix the rightmost sign: start ABOVE, far right
 *  5 text: step 5 — draw leftward: cross odd, touch-bounce even
 *  6 text: step 6 — read intervals, adjust endpoints
 *  7 note: quadratic shortcut — a(x-α)(x-β): + outside, − between
 *
 * Layout plan:
 *  b1..6 | 6 numbered rows (15,ink,st) | T st | x80 y110..300 step 38
 *  b7 | boxed guardrail (15,red)   | Chip  | x160..920 y360..410
 *  b7 | mini parabola (green)      | Draw  | axis y470 x300..800, roots 450/650
 */

import React from "react";
import { Circle } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, MUTED, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';
import { axisD, curveD } from "./math-kit";

const STEPS = [
  {
    en: "1. move everything to one side so the other side is 0",
    hi: "1. sab kuch ek side mein lao, doosri side 0 rahe",
  },
  {
    en: "2. combine into one quotient, factor into (x-r); make each x-coefficient positive",
    hi: "2. ek quotient banao, (x-r) mein factor karo; har x-coefficient positive banao",
  },
  {
    en: "3. mark critical points: numerator zeros (filled if ≤/≥, hollow if strict); denominator always hollow",
    hi: "3. critical points maaro: numerator zeros (filled if ≤/≥, hollow if strict); denominator hamesha hollow",
  },
  {
    en: "4. fix the rightmost sign: for large x all factors positive → start ABOVE axis, far right",
    hi: "4. rightmost sign fix karo: bade x ke liye sab factors positive → far right pe axis ke UPAR shuru karo",
  },
  {
    en: "5. draw leftward: CROSS at odd-multiplicity roots, TOUCH and BOUNCE at even ones",
    hi: "5. left ki taraf draw karo: odd-multiplicity roots pe CROSS, even pe TOUCH and BOUNCE",
  },
  {
    en: "6. read the intervals on the required side, then adjust the endpoints",
    hi: "6. required side ke intervals padho, phir endpoints adjust karo",
  },
];

export default function M11Ch05Sec35({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={21} fill={RED} script>
          {t("six steps, and the quadratic shortcut falls out free", "chhe steps, aur quadratic shortcut free mein milta hai")}
        </T>
      </Fade>

      {/* beats 1-6 — the six-step algorithm */}
      {STEPS.map((s, i) => (
        <Fade key={i} on={beat >= i + 1} delay={dl(i + 1, 0.3)}>
          <T x={80} y={110 + i * 38} size={14} fill={INK} weight={i === 4 ? 700 : 400} anchor="start">
            {t(s.en, s.hi)}
          </T>
        </Fade>
      ))}

      {/* beat 7 — the quadratic shortcut */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Chip x={160} y={355} w={760} h={48} fill={CREAM} stroke={RED} textFill={RED} size={15}>
          {t(
            "quadratic shortcut: a(x-α)(x-β) is + outside the roots, − between them",
            "quadratic shortcut: a(x-α)(x-β), roots ke bahar +, beech mein −"
          )}
        </Chip>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 0.9)} d={axisD(280, 820, 505)} stroke={INK} sw={2} dur={0.6} />
      <Draw
        on={beat >= 7}
        delay={dl(7, 1.5)}
        d={curveD([
          { x: 300, y: 415 },
          { x: 375, y: 467 },
          { x: 450, y: 505 },
          { x: 550, y: 547 },
          { x: 650, y: 505 },
          { x: 725, y: 467 },
          { x: 800, y: 415 },
        ])}
        stroke={GREEN}
        sw={2.6}
        dur={1.0}
      />
      <Fade on={beat >= 7} delay={dl(7, 2.4)}>
        <Circle cx={450} cy={505} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 2.5)}>
        <T x={450} y={527} size={12} fill={MUTED}>
          α
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 2.6)}>
        <Circle cx={650} cy={505} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 2.7)}>
        <T x={650} y={527} size={12} fill={MUTED}>
          β
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 3.0)}>
        <T x={330} y={435} size={16} fill={GREEN} weight={700}>
          +
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 3.1)}>
        <T x={770} y={435} size={16} fill={GREEN} weight={700}>
          +
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 3.2)}>
        <T x={550} y={528} size={16} fill={GREEN} weight={700}>
          −
        </T>
      </Fade>
    </Scene>
  );
}
