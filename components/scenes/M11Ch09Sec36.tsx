/**
 * M11 Ch09 · Section 36 — "The family trick"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept — subtopic "Point of Intersection, Concurrency and Family of Lines".
 * board_content has 8 items; item[0] (seq1, heading) is the always-on title, items[1..7]
 * (seq2..seq8) gate at beat>=1..7. reveals_english (8) = [0,7.59,17.07,23.38,38.4,46.76,56.23,72.19].
 * reveals_hinglish (8) = [0,7.25,14.59,21.42,34.56,40.62,49.24,64.0].
 *
 * Numbers verified (illustrative, not given in JSON — concept section, "family trick" needs a
 * concrete L1/L2 pair):
 *   L1: x + y - 4 = 0        L2: x - y = 0
 *   J: add the two -> 2x - 4 = 0 -> x = 2; from L2, y = x = 2. J = (2,2).
 *     verify: L1(2,2) = 2+2-4 = 0 ✓   L2(2,2) = 2-2 = 0 ✓
 *   Family members L1 + λL2 = 0, three concrete λ picked to fan out visibly through J:
 *     λ=1:  (x+y-4)+(x-y)   = 2x-4=0      -> x=2        VERTICAL line, verify (2,2): x=2 ✓
 *     λ=-1: (x+y-4)-(x-y)   = 2y-4=0      -> y=2        HORIZONTAL line, verify (2,2): y=2 ✓
 *     λ=2:  (x+y-4)+2(x-y)  = 3x-y-4=0    -> y=3x-4     verify (2,2): 3(2)-4=2 ✓
 *   (L2 itself, y=x slope 1, is NOT one of these three finite-λ members — guardrail point.)
 *
 * Diagram screen mapping: SCALE=42px/unit, OX=246, OY=394 -> toScreen(x,y)={OX+42x, OY-42y}.
 * J -> (330,310). Each line drawn as a segment reaching 3 math units either side of J along its
 * own direction (so all five segments are the same length, fanning symmetrically out of J):
 *   L1  (slope -1): (419.1,399.1) <-> (240.9,220.9)
 *   L2  (slope +1): (419.1,220.9) <-> (240.9,399.1)
 *   λ=1 (vertical):  (330,184)    <-> (330,436)
 *   λ=-1(horizontal):(456,310)    <-> (204,310)
 *   λ=2 (slope 3):   (369.9,190.5)<-> (290.1,429.5)
 * No coordinate axes drawn (the raw seq3 diagram itself has none) — the point is the fan
 * through one junction, not a coordinate reading; axes would only crowd 5 lines through 1 point.
 *
 * Layout plan:
 *  b0(title, always-on)        | T mid script red   | x540 y62
 *  b1 | intro sentence         | T mid               | x540 y96
 *  b2 | THE DIAGRAM: J dot+label, L1/L2 solid ink, 3 family members solid amber_dark (dashed
 *      substitute per kit — Draw's dasharray slot is used by the reveal animation), L1/L2
 *      labels, one caption naming the 3 λ values used | Draw/Fade cluster centered ~(330,310)
 *  b3 | setup text (2 lines)   | T start             | x576 y168/194
 *  b4 | formula, boxed         | Chip                | x690 y228 w200 h54
 *  b5 | family statement (2 lines) | T start          | x576 y322/348
 *  b6 | guardrail (red-margin, 2 lines) | Draw bar + T | bar x560 y392..442, text x578 y412/436
 *  b7 | closing line           | T mid script amber_dark | x540 y572
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
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { lineD } from "./math-kit";

const SCALE = 42;
const OX = 246;
const OY = 394;
function toScreen(x: number, y: number) {
  return { x: OX + x * SCALE, y: OY - y * SCALE };
}

const J = toScreen(2, 2); // (330,310)

// L1: x+y-4=0 (slope -1) — reach 3 math units either side of J
const L1A = toScreen(2 + 3 * 0.70711, 2 - 3 * 0.70711); // (419.1,399.1)
const L1B = toScreen(2 - 3 * 0.70711, 2 + 3 * 0.70711); // (240.9,220.9)

// L2: x-y=0 (slope +1)
const L2A = toScreen(2 + 3 * 0.70711, 2 + 3 * 0.70711); // (419.1,220.9)
const L2B = toScreen(2 - 3 * 0.70711, 2 - 3 * 0.70711); // (240.9,399.1)

// family member λ=1: 2x-4=0 -> x=2 (vertical)
const F1A = toScreen(2, 5); // (330,184)
const F1B = toScreen(2, -1); // (330,436)

// family member λ=-1: 2y-4=0 -> y=2 (horizontal)
const F2A = toScreen(5, 2); // (456,310)
const F2B = toScreen(-1, 2); // (204,310)

// family member λ=2: 3x-y-4=0 -> y=3x-4 (slope 3), direction (1,3)/sqrt(10)
const F3A = toScreen(2 + 3 * 0.31623, 2 + 3 * 0.94868); // (369.9,190.5)
const F3B = toScreen(2 - 3 * 0.31623, 2 - 3 * 0.94868); // (290.1,429.5)

export default function M11Ch09Sec36({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={26} fill={RED} anchor="middle" script>
          {t("The Family Trick: L1 + λL2 = 0", "Family Trick: L1 + λL2 = 0")}
        </T>
      </Fade>

      {/* beat 1 — intro */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={96} size={16} fill={INK} anchor="middle">
          {t(
            "Suppose L1 = 0 and L2 = 0 cross at a junction J.",
            "Maan lo L1 = 0 aur L2 = 0 kisi junction J par cross karte hain."
          )}
        </T>
      </Fade>

      {/* beat 2 — THE DIAGRAM: J, L1, L2, three family members fanning through J */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <Circle cx={J.x} cy={J.y} r={4.5} fill={INK} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={318} y={282} size={12} fill={INK} anchor="end" weight={700}>J</T>
      </Fade>

      <Draw on={beat >= 2} delay={dl(2, 0.6)} d={lineD(L1B.x, L1B.y, L1A.x, L1A.y)} stroke={INK} sw={2.4} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 1.2)}>
        <T x={229} y={211} size={13} fill={INK} anchor="end" weight={700}>L1 = 0</T>
      </Fade>

      <Draw on={beat >= 2} delay={dl(2, 1.5)} d={lineD(L2B.x, L2B.y, L2A.x, L2A.y)} stroke={INK} sw={2.4} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 2.1)}>
        <T x={226} y={413} size={13} fill={INK} anchor="end" weight={700}>L2 = 0</T>
      </Fade>

      <Draw on={beat >= 2} delay={dl(2, 2.4)} d={lineD(F1B.x, F1B.y, F1A.x, F1A.y)} stroke={AMBER_DARK} sw={1.8} dur={0.4} />
      <Draw on={beat >= 2} delay={dl(2, 2.9)} d={lineD(F2B.x, F2B.y, F2A.x, F2A.y)} stroke={AMBER_DARK} sw={1.8} dur={0.4} />
      <Draw on={beat >= 2} delay={dl(2, 3.4)} d={lineD(F3B.x, F3B.y, F3A.x, F3A.y)} stroke={AMBER_DARK} sw={1.8} dur={0.4} />

      <Fade on={beat >= 2} delay={dl(2, 4.0)}>
        <T x={330} y={462} size={13} fill={AMBER_DARK} anchor="middle" weight={600}>
          {t("family through J: λ = 1, -1, 2", "J se family: λ = 1, -1, 2")}
        </T>
      </Fade>

      {/* beat 3 — at J both L1 and L2 are zero, so the combination is too */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={576} y={168} size={16} fill={INK} anchor="start">
          {t("At J, both L1 and L2 are zero,", "J par L1 aur L2 dono zero hain,")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <T x={576} y={194} size={16} fill={INK} anchor="start">
          {t(
            "so the combination is automatically zero too.",
            "isliye combination bhi zero ho jaata hai."
          )}
        </T>
      </Fade>

      {/* beat 4 — land the formula, boxed */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <Chip x={690} y={228} w={200} h={54} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={22} script={false}>
          {"L1 + λL2 = 0"}
        </Chip>
      </Fade>

      {/* beat 5 — whole family of lines, one per lambda */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={576} y={322} size={16} fill={INK} anchor="start">
          {t("So this is a whole family of lines through J —", "Toh yeh J se guzarti lines ka")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={576} y={348} size={16} fill={INK} anchor="start">
          {t("one line for each value of λ.", "poora family hai — har λ ke liye ek line.")}
        </T>
      </Fade>

      {/* beat 6 — guardrail: family reaches every line through J except L2 itself */}
      <Draw on={beat >= 6} delay={dl(6, 0)} d="M 560 392 L 560 442" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={578} y={412} size={15} fill={RED} anchor="start" weight={700}>
          {t("Reaches every line through J", "Yeh har line tak pahunchta hai")}
        </T>
        <T x={578} y={436} size={15} fill={RED} anchor="start" weight={700}>
          {t("except L2 = 0 itself (needs λ → ∞).", "sivaay L2 = 0 ke (λ → ∞ chahiye).")}
        </T>
      </Fade>

      {/* beat 7 — closing payoff */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <T x={540} y={572} size={15} fill={AMBER_DARK} anchor="middle" script>
          {t(
            "Impose one extra condition to pin down λ — you never compute J at all.",
            "Ek extra condition lagao λ fix karne ke liye — J kabhi nikaalna nahi padta."
          )}
        </T>
      </Fade>
    </Scene>
  );
}
