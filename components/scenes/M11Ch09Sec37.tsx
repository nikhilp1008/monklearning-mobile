/**
 * M11 Ch09 · Section 37 — "Proof: the family passes through the junction"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept, titled "Proof:" — formalizes Sec35's concurrency idea. FLAGGED for
 * extra scrutiny: this is a two-column build — LEFT = the general symbolic proof (a1,b1,c1...,
 * x0,y0), RIGHT = a concrete worked instance grounding every symbolic step in real numbers,
 * built alongside it, per the task brief.
 *
 * board_content has 8 items. seq1 (heading) is the always-on title. seq2..seq8 gate at
 * beat>=1..7. reveals_english=[0,7.17,25.86,32.85,40.19,53.67,64.85,75.09] (8 values).
 * reveals_hinglish=[0,5.89,21.67,28.59,36.95,47.62,56.15,67.75] (8 values).
 *
 * Numbers verified from JSON's own instruction (hand + re-checked here):
 *   L1: x + y - 3 = 0,  L2: x - y - 1 = 0.
 *   Junction: add the two equations -> 2x - 4 = 0 -> x = 2; from L2, y = x - 1 = 1. J = (2, 1).
 *   Check:  L1(2,1) = 2 + 1 - 3 = 0 ✓   L2(2,1) = 2 - 1 - 1 = 0 ✓
 *   Family member at λ=3:  (x+y-3) + 3(x-y-1) = 0  =>  4x - 2y - 6 = 0  =>  2x - y - 3 = 0.
 *   Check at J:  2(2) - 1 - 3 = 4 - 1 - 3 = 0 ✓
 *   Bonus family members drawn thin/unlabeled to sell "for every λ" (each re-verified):
 *     λ=1:  (x+y-3)+(x-y-1) = 2x-4=0 -> x=2 (vertical line, contains J trivially: J.x=2).
 *     λ=-1: (x+y-3)-(x-y-1) = 2y-2=0 -> y=1 (horizontal line, contains J trivially: J.y=1).
 *     λ=0.5: (x+y-3)+0.5(x-y-1)=0 -> 3x+y-7=0 -> at J: 3(2)+1-7=0 ✓.
 *   toScreen(x,y) = {x: 660+44x, y: 400-44y}  (OX=660, OY=400, SCALE=44)
 *     O(0,0)->(660,400)   J(2,1)->(748,356)
 *     L1 drawn (0,3)->(4,-1) => (660,268)->(836,444)   [both satisfy x+y-3=0, J at t=0.5]
 *     L2 drawn (0,-1)->(4,3) => (660,444)->(836,268)   [both satisfy x-y-1=0, J at t=0.5]
 *     family λ=3 drawn (1,-1)->(3,3) => (704,444)->(792,268)  [both satisfy 2x-y-3=0, J at t=0.5]
 *     λ=1 vertical: screen x=748, y 275..440 (hardcoded, x=2 for all y)
 *     λ=-1 horizontal: screen y=356, x 620..880 (hardcoded, y=1 for all x)
 *     λ=0.5 drawn (1.5,2.5)->(2.5,-0.5) => (726,290)->(770,422)
 *
 * Beats:
 *  0(title, always-on) | "Proof: The Family Passes Through J"
 *  1 | text: L1≡..., L2≡..., meet at J(x0,y0)  +  DIAGRAM: axes, O, draw L1(green)+tag,
 *      draw L2(ink)+tag, mark J + concrete coord label "J(2, 1)"
 *  2 | text: since J lies on both lines, each expression vanishes there  +  concrete verify
 *      panel (upper-right): L1(2,1)=2+1-3=0 ✓, L2(2,1)=2-1-1=0 ✓
 *  3 | formula: L1(x0,y0)=0, L2(x0,y0)=0  +  underline (landed fact)
 *  4 | formula: L1(x0,y0)+λL2(x0,y0)=0+λ·0=0 (green, the pivotal step)  +  concrete verify
 *      (λ=3 combination -> 2x-y-3=0, checked at J)  +  draw the amber family-member line
 *      through J on the diagram + tag + ring J
 *  5 | text: so J satisfies L1+λL2=0 for every λ  +  sweep in two more thin family members
 *      (λ=1 vertical, λ=-1 horizontal) through J, unlabeled, selling "every λ"
 *  6 | text: L1+λL2=0 is first-degree, so it's genuinely a line through J  +  one more thin
 *      family member (λ=0.5) through J
 *  7 | guardrail (red-margin, bottom band): "Both zero ⇒ sum zero" — the whole reason it works
 *
 * Layout plan (left column x64 anchor start, pitch 30 unless noted; right diagram+panel):
 *  b0  | title (26,red,script)                      | T mid | x540 y62
 *  b1  | row0 "L1≡..and..L2≡.." (16,ink)             | T st  | x64 y112
 *  b1  | row1 "meet at J(x0,y0)" (16,ink)            | T st  | x64 y142
 *  b1  | axes c(660,400) 600..900/230..460           | CartesianAxes (no ticks)
 *  b1  | O dot + label                               | circle+T | (660,400) label x644 y416 end
 *  b1  | L1 draw(green) (660,268)->(836,444)          | Draw
 *  b1  | L1 tag "L1: x+y-3=0" (green)                 | T st | x846 y448
 *  b1  | L2 draw(ink) (660,444)->(836,268)             | Draw
 *  b1  | L2 tag "L2: x-y-1=0" (ink)                    | T st | x846 y262
 *  b1  | J dot (ink) + label "J(2, 1)"                 | circle+T | (748,356) label x764 y404 st
 *  b2  | row2 "Since J lies on both lines," (14,ink)   | T st | x64 y172
 *  b2  | row3 "each expression vanishes there." (14)   | T st | x64 y202
 *  b2  | verify L1 "L1(2,1)=2+1-3=0" (12,ink)+check    | T st + Draw checkD | x600 y104 / (770,100)
 *  b2  | verify L2 "L2(2,1)=2-1-1=0" (12,ink)+check    | T st + Draw checkD | x600 y130 / (770,126)
 *  b3  | row4 formula "L1(x0,y0)=0, L2(x0,y0)=0" (16,amber_dark,w700) | T st | x64 y232
 *  b3  | underline (amber_dark)                        | Draw | x60..352 y240
 *  b4  | row5 formula "L1(x0,y0)+λL2(x0,y0)=0+λ·0=0" (17,green,w700) | T st | x64 y266
 *  b4  | verifyFam1 "λ=3: (x+y-3)+3(x-y-1)=0 -> 2x-y-3=0" (12,ink) | T st | x600 y164
 *  b4  | verifyFam2 "Check at J(2,1): 2(2)-1-3=0" (12,ink)+check   | T st + Draw checkD | x600 y190 / (792,186)
 *  b4  | family line draw(amber_dark) (704,444)->(792,268)         | Draw
 *  b4  | family tag "λ=3: 2x-y-3=0" (amber_dark)                    | T end | x782 y254
 *  b4  | ring J (amber_dark)                                        | Draw ringD | cx748 cy356 rx20 ry18
 *  b5  | row6 "So J satisfies L1+λL2=0 for every λ." (15,ink)       | T st | x64 y296
 *  b5  | λ=1 sweep (muted, vertical)                                | Draw | x748 y275..440
 *  b5  | λ=-1 sweep (muted, horizontal)                             | Draw | y356 x620..880
 *  b6  | row7 "L1+λL2=0 is first-degree —" (14,ink)                 | T st | x64 y326
 *  b6  | row8 "so it's genuinely a line through J." (14,ink)        | T st | x64 y356
 *  b6  | λ=0.5 sweep (muted)                                        | Draw | (726,290)->(770,422)
 *  b7  | red bar (bottom band)                                      | Draw | x100 y500..564
 *  b7  | guardrail 2-line text (16,red,w700)                        | T st | x130 y524 / y552
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
  ringD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';
import { CartesianAxes, lineD, checkD } from "./math-kit";

const OX = 660;
const OY = 400;
const SCALE = 44;
function toScreen(x: number, y: number) {
  return { x: OX + x * SCALE, y: OY - y * SCALE };
}

const O = toScreen(0, 0); // (660,400)
const J = toScreen(2, 1); // (748,356)

const L1_A = toScreen(0, 3); // (660,268)
const L1_B = toScreen(4, -1); // (836,444)
const L2_A = toScreen(0, -1); // (660,444)
const L2_B = toScreen(4, 3); // (836,268)
const FAM_A = toScreen(1, -1); // (704,444)
const FAM_B = toScreen(3, 3); // (792,268)

export default function M11Ch09Sec37({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={26} fill={RED} anchor="middle" script>
          {t("Proof: The Family Passes Through J", "Proof: Family J Se Guzarti Hai")}
        </T>
      </Fade>

      {/* beat 1 — statement + DIAGRAM build: axes, L1, L2, mark J */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={64} y={112} size={16} fill={INK} anchor="start">
          {t("L₁ ≡ a₁x + b₁y + c₁  and  L₂ ≡ a₂x + b₂y + c₂", "L₁ ≡ a₁x + b₁y + c₁  aur  L₂ ≡ a₂x + b₂y + c₂")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={64} y={142} size={16} fill={INK} anchor="start">
          {t("meet at J(x₀, y₀)", "J(x₀, y₀) par milte hain")}
        </T>
      </Fade>
      <CartesianAxes on={beat >= 1} delay={dl(1, 0.8)} originX={OX} originY={OY} xLeft={600} xRight={900} yTop={230} yBottom={460} showTicks={false} />
      <Fade on={beat >= 1} delay={dl(1, 1.2)}>
        <Circle cx={O.x} cy={O.y} r={3} fill={INK} />
        <T x={644} y={416} size={11} fill={MUTED} anchor="end">O</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.5)} d={lineD(L1_A.x, L1_A.y, L1_B.x, L1_B.y)} stroke={GREEN} sw={2.4} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 2.3)}>
        <T x={846} y={448} size={13} fill={GREEN} anchor="start" weight={700}>L₁: x + y - 3 = 0</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2.6)} d={lineD(L2_A.x, L2_A.y, L2_B.x, L2_B.y)} stroke={INK} sw={2.4} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 3.4)}>
        <T x={846} y={262} size={13} fill={INK} anchor="start" weight={700}>L₂: x - y - 1 = 0</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.8)}>
        <Circle cx={J.x} cy={J.y} r={5} fill={INK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 4.2)}>
        <T x={764} y={404} size={14} fill={INK} anchor="start" weight={700}>J(2, 1)</T>
      </Fade>

      {/* beat 2 — since J lies on both lines, each vanishes; concrete verify panel */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={64} y={172} size={14} fill={INK} anchor="start">
          {t("Since J lies on both lines,", "Kyunki J dono lines par hai,")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.35)}>
        <T x={64} y={202} size={14} fill={INK} anchor="start">
          {t("each expression vanishes there.", "har expression wahaan zero ho jaata hai.")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={600} y={104} size={12} fill={INK} anchor="start">L₁(2, 1) = 2 + 1 - 3 = 0</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.3)} d={checkD(770, 100, 13)} stroke={GREEN} sw={2.2} dur={0.3} />
      <Fade on={beat >= 2} delay={dl(2, 1.8)}>
        <T x={600} y={130} size={12} fill={INK} anchor="start">L₂(2, 1) = 2 - 1 - 1 = 0</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 2.3)} d={checkD(770, 126, 13)} stroke={GREEN} sw={2.2} dur={0.3} />

      {/* beat 3 — symbolic formula: both expressions are 0 at J, underlined as a landed fact */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={64} y={232} size={16} fill={AMBER_DARK} anchor="start" weight={700}>
          L₁(x₀, y₀) = 0,   L₂(x₀, y₀) = 0
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 0.6)} d={lineD(60, 240, 352, 240)} stroke={AMBER_DARK} sw={1.8} dur={0.4} />

      {/* beat 4 — the pivotal combination step + concrete λ=3 grounding + amber line on diagram */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={64} y={266} size={17} fill={GREEN} anchor="start" weight={700}>
          L₁(x₀,y₀) + λL₂(x₀,y₀) = 0 + λ·0 = 0
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={600} y={164} size={12} fill={INK} anchor="start">
          λ=3: (x+y-3) + 3(x-y-1) = 0 → 2x-y-3=0
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.4)}>
        <T x={600} y={190} size={12} fill={INK} anchor="start">
          {t("Check at J(2,1): 2(2)-1-3 = 0", "J(2,1) par check: 2(2)-1-3 = 0")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1.9)} d={checkD(792, 186, 13)} stroke={GREEN} sw={2.2} dur={0.3} />
      <Draw on={beat >= 4} delay={dl(4, 2.4)} d={lineD(FAM_A.x, FAM_A.y, FAM_B.x, FAM_B.y)} stroke={AMBER_DARK} sw={2.6} dur={0.6} />
      <Fade on={beat >= 4} delay={dl(4, 3.2)}>
        <T x={782} y={254} size={13} fill={AMBER_DARK} anchor="end" weight={700}>λ=3: 2x - y - 3 = 0</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 3.6)} d={ringD(J.x, J.y, 20, 18)} stroke={AMBER_DARK} sw={2.2} dur={0.5} />

      {/* beat 5 — J satisfies the family for every λ; sweep in two more thin members through J */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={64} y={296} size={15} fill={INK} anchor="start">
          {t("So J satisfies L₁ + λL₂ = 0 for every λ.", "Toh J, L₁ + λL₂ = 0 ko har λ ke liye satisfy karta hai.")}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 0.6)} d={lineD(748, 275, 748, 440)} stroke={MUTED} sw={1.3} dur={0.4} />
      <Draw on={beat >= 5} delay={dl(5, 1.2)} d={lineD(620, 356, 880, 356)} stroke={MUTED} sw={1.3} dur={0.4} />

      {/* beat 6 — first-degree, so genuinely a line through J; one more thin family member */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={64} y={326} size={14} fill={INK} anchor="start">
          {t("L₁ + λL₂ = 0 is first-degree —", "L₁ + λL₂ = 0 first-degree hai —")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={64} y={356} size={14} fill={INK} anchor="start">
          {t("so it's genuinely a line through J.", "toh yeh sach mein J se guzarti line hai.")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 0.9)} d={lineD(726, 290, 770, 422)} stroke={MUTED} sw={1.3} dur={0.4} />

      {/* beat 7 — guardrail (red-margin, bottom band): the whole reason the trick works */}
      <Draw on={beat >= 7} delay={dl(7, 0.1)} d="M 100 500 L 100 564" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={130} y={524} size={16} fill={RED} anchor="start" weight={700}>
          {t('"Both zero ⇒ sum zero" —', '"Dono zero ⇒ sum bhi zero" —')}
        </T>
        <T x={130} y={552} size={16} fill={RED} anchor="start" weight={700}>
          {t("that's the whole reason the trick works.", "yahi poori trick ka reason hai.")}
        </T>
      </Fade>
    </Scene>
  );
}
