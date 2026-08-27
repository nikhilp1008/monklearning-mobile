/**
 * M11 Ch12 · Section 32 — "Worked example: a disguised ∞−∞, and a greatest-integer sandwich"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples. board_content seq1 heading ("Worked example: a disguised
 * infinity minus infinity") -> always-on title, distinct from the DB title ("A disguised ∞−∞,
 * and a greatest-integer sandwich"). Follows the Sec31 "two examples stacked, divided by a
 * rule" pattern; Example 1 here reuses Sec31's Example-1-style algebra-builds-left-to-right-
 * then-lands-boxed choreography. Example 2 is the section's hardest content — an advanced
 * squeeze (Sandwich Theorem) argument on the greatest-integer function — and gets a small
 * pinch-icon callback to Sec10/Sec20's converging-curves squeeze motif.
 *
 * VERIFICATION (worked by hand before laying out pixels):
 *  Ex1: (x²+1)/(x+1) − x = [x²+1 − x(x+1)]/(x+1) = (x²+1−x²−x)/(x+1) = (1−x)/(x+1). x→∞:
 *   equal degree (1,1) ⇒ ratio of leading coeffs = −1/1 = −1 ✓.
 *  Ex2: [1/x] = 1/x − {1/x}, 0 ≤ {1/x} < 1 (definition of floor via fractional part). Multiply
 *   by x>0 (x→0⁺ so x>0): x[1/x] = 1 − x{1/x}, and 0 ≤ x{1/x} < x. As x→0⁺, the right bound x→0,
 *   so by squeeze x{1/x}→0, hence x[1/x] = 1 − x{1/x} → 1 − 0 = 1 ✓.
 *
 * board_reveal_at_english  = [0.0, 17.92, 28.84, 41.9, 51.97, 66.56, 83.11, 98.39] (8 beats 0-7).
 * board_reveal_at_hinglish = [0.0, 15.96, 26.62, 37.89, 46.42, 59.56, 76.46, 90.45].
 * beat0 = seq1 heading, always-on title. beats1-7 = seq2-8, gated `beat >= k`:
 *  0(title, always-on) | "Worked example: a disguised infinity minus infinity"
 *  1 | seq2 (normal) — given, combined over a common denominator (built left to right)
 *  2 | seq3 (normal) — expand and cancel the x² terms, continuing as a new stacked line
 *  3 | seq4 HIGH (green) — apply the degree rule, land boxed −1
 *  --divider--
 *  4 | seq5 (normal, RED heading) — Example 2 heading + the given lim(x→0⁺) x[1/x]
 *  5 | seq6 (normal) — the floor-function bounding identity [1/x] = 1/x − {1/x}, 0≤{1/x}<1
 *  6 | seq7 (normal) — multiply through by x, the squeeze setup x[1/x] = 1 − x{1/x}, 0≤x{1/x}<x
 *  7 | seq8 HIGH (green) — pinch-icon callback (Sec10/Sec20), squeeze conclusion, land boxed 1
 *
 * Layout plan (x-range × y-range per element; formulas are language-agnostic per
 * SCENE_AUTHORING_MATHS convention, only headings differ EN/HI; Frac box: top = y−1.363×size,
 * bottom = y+0.664×size; Anek-sans text box: top = y−0.78×size, bottom = y+0.31×size):
 *  title | T mid script (22,red)                         | x219..861(en)/~sim(hi) y31..69 (bl58)
 *  --Example 1: top zone--
 *  b1 | Limit "x→∞" (16,ink,st)                           | Limit | x60..84   y105..130 (bl118)
 *  b1 | Frac (x²+1)/(x+1) (17,ink,w50)                    | Frac  | x102..152 y94.8..129.3 (cx127,bl118)
 *  b1 | "− x" (19,ink,st)                                 | T st  | x170..199 y103..124 (bl118)
 *  b1 | "=" (19,ink,st)                                   | T st  | x215..225 y103..124 (bl118)
 *  b1 | Frac [x²+1 − x(x+1)]/(x+1) (17,ink,w110)          | Frac  | x242..352 y94.8..129.3 (cx297,bl118)
 *  b2 | "=" (19,ink,st)                                   | T st  | x60..70   y160..181 (bl175)
 *  b2 | Frac (x²+1−x²−x)/(x+1) (17,ink,w90)               | Frac  | x87..177  y151.8..186.3 (cx132,bl175)
 *  b2 | "=" (19,ink,st)                                   | T st  | x195..205 y160..181 (bl175)
 *  b2 | Frac (1−x)/(x+1) (17,ink,w50)                     | Frac  | x222..272 y151.8..186.3 (cx247,bl175)
 *  b3 | Limit "x→∞" (16,ink,st)                           | Limit | x60..84   y222..247 (bl235)
 *  b3 | Frac (1−x)/(x+1) (17,ink,w50)                     | Frac  | x102..152 y211.8..246.3 (cx127,bl235)
 *  b3 | "=" (19,ink,st)                                   | T st  | x170..180 y220..241 (bl235)
 *  b3 | "−1/1" (19,ink,st)                                | T st  | x198..236 y220..241 (bl235)
 *  b3 | "=" (19,ink,st)                                   | T st  | x254..264 y220..241 (bl235)
 *  b3 | boxed "−1" (22,green)                             | Chip  | x284..348 y214..256 (cx316,cy235)
 *  b3 | ring around chip                                   | Draw  | ringD(316,235,46,33)
 *  --divider--                                              | Draw  | x100..980 y302
 *  --Example 2: bottom zone--
 *  b4 | heading (17,red,w800,mid)                          | T mid | x378..702(en)/~sim(hi) y329..347 (bl342)
 *  b4 | Limit "x→0⁺" (18,ink,st)                           | Limit | x60..87   y374..402 (bl388)
 *  b4 | "x[1/x]" (19,ink,st)                               | T st  | x105..162 y373..394 (bl388)
 *  b5 | "[1/x] = 1/x − {1/x}," (19,ink,st)                 | T st  | x60..260  y429..450 (bl444)
 *  b5 | "0 ≤ {1/x} < 1" (19,ink,st)                        | T st  | x280..404 y429..450 (bl444)
 *  b6 | "x[1/x] = 1 − x{1/x}," (19,ink,st)                 | T st  | x60..250  y477..498 (bl492)
 *  b6 | "0 ≤ x{1/x} < x" (19,ink,st)                       | T st  | x270..403 y477..498 (bl492)
 *  b7 | pinch-icon (2 curves, amber, callback to Sec10/20) | Draw  | x60..86  y539..561
 *  b7 | dot + "0" label                                    | Fade  | (86,550) r3 + T x94 y554
 *  b7 | "⇒" (20,ink,st)                                    | T st  | x120..130 y543..564 (bl550)
 *  b7 | "x{1/x} → 0" (18,ink,st)                           | T st  | x145..235 y536..556 (bl550)
 *  b7 | "⇒" (20,ink,st)                                    | T st  | x252..262 y543..564 (bl550)
 *  b7 | Limit "x→0⁺" (17,ink,st)                           | Limit | x277..303 y537..564 (bl550)
 *  b7 | "x[1/x] =" (19,ink,st)                             | T st  | x319..395 y535..556 (bl550)
 *  b7 | boxed "1" (20,green)                               | Chip  | x413..463 y531..569 (cx438,cy550)
 *  b7 | ring around chip                                    | Draw  | ringD(438,550,39,31)
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
  AMBER_DARK,
  GREEN,
  GREEN_DARK,
  RED,
  CREAM,
  ringD,
  Scene,
} from '@/components/scenes/kit';
import { Frac, Limit } from "./math-kit";

export default function M11Ch12Sec32({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={22} fill={RED} anchor="middle" script>
          {t(
            "Worked example: a disguised infinity minus infinity",
            "Worked example: chhupa hua infinity minus infinity"
          )}
        </T>
      </Fade>

      {/* beat 1 — combine over a common denominator, built left to right */}
      <Limit on={beat >= 1} delay={dl(1, 0)} x={60} y={118} size={16} condition="x → ∞" anchor="start" fill={INK} />
      <Frac on={beat >= 1} delay={dl(1, 0.3)} x={127} y={118} size={17} numerator="x²+1" denominator="x+1" width={50} fill={INK} />
      <Fade on={beat >= 1} delay={dl(1, 0.7)}>
        <T x={170} y={118} size={19} fill={INK} anchor="start">
          − x
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.1)}>
        <T x={215} y={118} size={19} fill={INK} anchor="start">
          =
        </T>
      </Fade>
      <Frac on={beat >= 1} delay={dl(1, 1.4)} x={297} y={118} size={17} numerator="x²+1 − x(x+1)" denominator="x+1" width={110} fill={INK} />

      {/* beat 2 — expand and cancel the x² terms, new stacked line */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={60} y={175} size={19} fill={INK} anchor="start">
          =
        </T>
      </Fade>
      <Frac on={beat >= 2} delay={dl(2, 0.3)} x={132} y={175} size={17} numerator="x²+1−x²−x" denominator="x+1" width={90} fill={INK} />
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={195} y={175} size={19} fill={INK} anchor="start">
          =
        </T>
      </Fade>
      <Frac on={beat >= 2} delay={dl(2, 1.1)} x={247} y={175} size={17} numerator="1−x" denominator="x+1" width={50} fill={INK} />

      {/* beat 3 — apply the degree rule, land boxed −1 (HIGH) */}
      <Limit on={beat >= 3} delay={dl(3, 0)} x={60} y={235} size={16} condition="x → ∞" anchor="start" fill={INK} />
      <Frac on={beat >= 3} delay={dl(3, 0.3)} x={127} y={235} size={17} numerator="1−x" denominator="x+1" width={50} fill={INK} />
      <Fade on={beat >= 3} delay={dl(3, 0.7)}>
        <T x={170} y={235} size={19} fill={INK} anchor="start">
          =
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.0)}>
        <T x={198} y={235} size={19} fill={INK} anchor="start">
          −1/1
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.3)}>
        <T x={254} y={235} size={19} fill={INK} anchor="start">
          =
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.7)}>
        <Chip x={284} y={214} w={64} h={42} fill={CREAM} stroke={GREEN} textFill={GREEN_DARK} size={22} script={false}>
          −1
        </Chip>
      </Fade>
      <Draw on={beat >= 3} d={ringD(316, 235, 46, 33)} stroke={GREEN} sw={2} delay={dl(3, 2.1)} />

      {/* divider between the two examples */}
      <Draw on={beat >= 4} d="M100 302 L980 302" stroke={AMBER_DARK} sw={1} delay={dl(4, 0)} />

      {/* beat 4 — Example 2 heading + the given limit */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={342} size={17} fill={RED} anchor="middle" weight={800}>
          {t("Advanced: a greatest-integer sandwich", "Advanced: greatest-integer ka sandwich")}
        </T>
      </Fade>
      <Limit on={beat >= 4} delay={dl(4, 0.8)} x={60} y={388} size={18} condition="x → 0⁺" anchor="start" fill={INK} />
      <Fade on={beat >= 4} delay={dl(4, 1.2)}>
        <T x={105} y={388} size={19} fill={INK} anchor="start">
          x[1/x]
        </T>
      </Fade>

      {/* beat 5 — the floor-function bounding identity */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={60} y={444} size={19} fill={INK} anchor="start">
          [1/x] = 1/x − {"{1/x}"},
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={280} y={444} size={19} fill={INK} anchor="start">
          0 ≤ {"{1/x}"} {"<"} 1
        </T>
      </Fade>

      {/* beat 6 — multiply through by x, the squeeze setup */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={60} y={492} size={19} fill={INK} anchor="start">
          x[1/x] = 1 − x{"{1/x}"},
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={270} y={492} size={19} fill={INK} anchor="start">
          0 ≤ x{"{1/x}"} {"<"} x
        </T>
      </Fade>

      {/* beat 7 — pinch-icon callback (Sec10/Sec20), squeeze conclusion, land boxed 1 (HIGH) */}
      <Draw on={beat >= 7} d="M60 539 Q73 550 86 550" stroke={AMBER_DARK} sw={1.8} delay={dl(7, 0)} dur={0.5} />
      <Draw on={beat >= 7} d="M60 561 Q73 550 86 550" stroke={AMBER_DARK} sw={1.8} delay={dl(7, 0.5)} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 0.9)}>
        <Circle cx={86} cy={550} r={3} fill={AMBER_DARK} />
        <T x={94} y={554} size={13} fill={AMBER_DARK} anchor="start" weight={700}>
          0
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={120} y={550} size={20} fill={INK} anchor="start">
          ⇒
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={145} y={550} size={18} fill={INK} anchor="start">
          x{"{1/x}"} → 0
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={252} y={550} size={20} fill={INK} anchor="start">
          ⇒
        </T>
      </Fade>
      <Limit on={beat >= 7} delay={dl(7, 1.9)} x={277} y={550} size={17} condition="x → 0⁺" anchor="start" fill={INK} />
      <Fade on={beat >= 7} delay={dl(7, 2.2)}>
        <T x={319} y={550} size={19} fill={INK} anchor="start">
          x[1/x] =
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 2.6)}>
        <Chip x={413} y={531} w={50} h={38} fill={CREAM} stroke={GREEN} textFill={GREEN_DARK} size={20} script={false}>
          1
        </Chip>
      </Fade>
      <Draw on={beat >= 7} d={ringD(438, 550, 39, 31)} stroke={GREEN} sw={2} delay={dl(7, 3.0)} />
    </Scene>
  );
}
