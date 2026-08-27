/**
 * M11 Ch14 · Section 36 — "Worked example: at least one defective (JEE Main)"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type: worked_examples. Numeric nCr
 * (⁹C₄, ¹²C₄) as real super/subscript digits per Ch6-7 convention.
 *
 * Beats (board_reveal_at_english [0,11.01,22.53,36.69,54.61,65.37,77.14]):
 *  0 heading
 *  1 problem: 12 bulbs, 3 defective, draw 4 without replacement — bulb grid
 *  2 (HIGH) GUARDRAIL: "at least one" → complement, compute P(none defective)
 *  3 P(none defective) = ⁹C₄/¹²C₄ = 126/495 = 14/55
 *  4 (HIGH) P(at least one defective) = 1−14/55 = 41/55
 *  5 direct route needs P(exactly1)+P(exactly2)+P(exactly3) — three terms
 *  6 GUARDRAIL: one subtraction replaced a three-term sum
 *
 * Layout plan (bulb grid 2 rows × 6, x340..740 step80, y180/228; longer
 * language counts):
 *  b1 | problem, 2 lines (15, ink)                  | T mid | x160..920 y128..150
 *  b1 | 12 bulbs (9 good green, 3 defective red)       | Fade  | x340..740 y162..246
 *  b2 | guardrail chip (red, w720 h44)                   | Chip  | x180..900 y270..314
 *  b2 | cross the 3 defective bulbs                        | Draw
 *  b3 | "P(none defective)=⁹C₄/¹²C₄=126/495=14/55" (16)      | T mid | y344
 *  b4 | HIGH "P(at least one)=1−14/55=41/55" (19, green)       | T mid | y382
 *  b5 | sentence (15, ink)                                       | T mid | y416
 *  b6 | guardrail chip (red, w720 h40)                              | Chip  | x180..900 y444..484
 */

import React from "react";
import { Circle } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, crossD, INK, MUTED, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

const BULB_X = [340, 420, 500, 580, 660, 740];

export default function M11Ch14Sec36({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title always-on */}
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("one subtraction replaces a three-term sum", "ek subtraction, teen-term sum ki jagah")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={100} size={18} fill={INK} weight={700}>
          {t('"At least one" in action (JEE Main)', '"At least one" in action (JEE Main)')}
        </T>
      </Fade>

      {/* beat 1 — problem + bulb grid */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={540} y={128} size={15} fill={INK} weight={600}>
          {t("12 bulbs, 3 defective. Draw 4 without replacement.", "12 bulbs, 3 defective. 4 draw karo, without replacement.")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={540} y={150} size={15} fill={INK} weight={600}>
          {t("Find P(at least one defective).", "P(at least one defective) nikaalo.")}
        </T>
      </Fade>

      {BULB_X.map((x, i) => (
        <Fade key={`r1-${i}`} on={beat >= 1} delay={dl(1, 1.2 + i * 0.1)}>
          <Circle cx={x} cy={185} r={18} fill={CREAM} stroke={GREEN} strokeWidth={2.2} />
        </Fade>
      ))}
      {BULB_X.map((x, i) => {
        const defective = i >= 3;
        return (
          <Fade key={`r2-${i}`} on={beat >= 1} delay={dl(1, 1.9 + i * 0.1)}>
            <Circle
              cx={x}
              cy={233}
              r={18}
              fill={defective ? RED : CREAM}
              opacity={defective ? 0.4 : 1}
              stroke={defective ? RED : GREEN}
              strokeWidth={2.2}
            />
          </Fade>
        );
      })}

      {/* beat 2 — GUARDRAIL, HIGH */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <Chip x={180} y={270} w={720} h={44} fill={CREAM} stroke={RED} textFill={RED} size={15} script={false}>
          {t('"at least one" → complement: compute P(none defective)', '"at least one" → complement: P(none defective) nikaalo')}
        </Chip>
      </Fade>
      {[3, 4, 5].map((i) => (
        <Draw key={i} on={beat >= 2} delay={dl(2, 1.0 + (i - 3) * 0.3)} d={crossD(BULB_X[i] - 18, 215, 36, 36)} stroke={RED} sw={2.2} dur={0.4} />
      ))}

      {/* beat 3 */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={344} size={16} fill={INK} weight={700}>
          {"P(none defective) = ⁹C₄/¹²C₄ = 126/495 = 14/55"}
        </T>
      </Fade>

      {/* beat 4 — HIGH */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={382} size={19} fill={GREEN} weight={800}>
          {"P(at least one defective) = 1 − 14/55 = 41/55"}
        </T>
      </Fade>

      {/* beat 5 */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={416} size={14} fill={MUTED}>
          {t("direct route: P(exactly 1)+P(exactly 2)+P(exactly 3) — three terms", "direct route: P(exactly 1)+P(exactly 2)+P(exactly 3) — teen terms")}
        </T>
      </Fade>

      {/* beat 6 — GUARDRAIL */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Chip x={180} y={444} w={720} h={40} fill={CREAM} stroke={RED} textFill={RED} size={15} script={false}>
          {t("one subtraction replaced a three-term sum", "ek subtraction, teen-term sum ki jagah aaya")}
        </Chip>
      </Fade>
    </Scene>
  );
}
