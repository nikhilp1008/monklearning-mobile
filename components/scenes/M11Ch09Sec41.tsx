/**
 * M11 Ch09 · Section 41 — "Worked example: the family method"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples — subtopic "Point of Intersection, Concurrency and Family of Lines".
 *
 * Numbers verified from JSON (independently re-derived):
 *  Family: (x+2y-5)+λ(3x-y+1)=0. Impose (2,1): (2+2-5)+λ(6-1+1)=0 -> -1+6λ=0 ->
 *    λ=1/6. Substitute back, ×6: 6x+12y-30+3x-y+1=0 -> 9x+11y-29=0. Check at
 *    (2,1): 9(2)+11(1)-29=18+11-29=0 OK. Matches JSON exactly.
 *  Diagram-only (never shown as part of the algebra — that IS the guardrail):
 *    intersection J of x+2y-5=0 and 3x-y+1=0: from 2nd, y=3x+1; sub into 1st:
 *    x+2(3x+1)-5=0 -> 7x-3=0 -> x=3/7, y=16/7. Confirms the family property —
 *    the derived answer line also passes through J: 9(3/7)+11(16/7)-29 =
 *    (27+176)/7-29 = 203/7-29 = 29-29=0 OK — exactly why the trick works, even
 *    though J was never computed to find the answer.
 *    Clean points used for drawing: line A (x+2y-5=0) through (-1,3) and (5,0)
 *    [(-1)+6-5=0 OK; 5+0-5=0 OK]. Line B (3x-y+1=0) through (-1,-2) and (2,7)
 *    [-3+2+1=0 OK; 6-7+1=0 OK]. Final line extended along its own direction
 *    from (2,1) through J to (-3.5,5.5) and (5.3,-1.7) (both exactly on
 *    9x+11y-29=0: 9(-3.5)+11(5.5)-29=-31.5+60.5-29=0 OK; 9(5.3)+11(-1.7)-29=
 *    47.7-18.7-29=0 OK) — same line, just a longer visible segment.
 *
 * board_content has 8 items; item[0] (heading) is the always-on title. Items
 * seq2..seq8 gate at beat>=1..beat>=7 (reveals arrays have 8 entries, matching).
 *
 * Single-column layout (one worked example — full board width available):
 *  title (always on)                                  | T script mid | x540 y62
 *  b1 | problem line1/2/3                               | T mid | x540 y96/118/140
 *  b2 | family formula                                  | T mid,w700,size16 | x540 y172
 *  b3 | "impose passage..." text                        | T mid | x540 y198
 *  b4 | substitution formula                             | T mid,size15 | x540 y224
 *  b5 | chip "λ = 1/6"                                    | Chip | x490 y250 w100 h32
 *  b6 | axes c(268,526) 160..430 / 310..560                | CartesianAxes (no ticks)
 *  b6 | O dot + label                                     | circle+T | (268,526) label x254 y541 end
 *  b6 | line A Draw (ink) (240,442)->(408,526)              | Draw
 *  b6 | line A tag "x + 2y - 5 = 0"                          | T start | x415 y540
 *  b6 | line B Draw (ink) (240,582)->(324,330)               | Draw
 *  b6 | line B tag "3x - y + 1 = 0"                           | T start | x330 y320
 *  b6 | (2,1) dot (amber_dark) + label                        | circle+T | (324,498) label x365 y470 start
 *  b6 | final line Draw (green) (170,372)->(416,574)           | Draw
 *  b6 | chip "9x + 11y - 29 = 0"                               | Chip | x680 y340 w200 h38
 *  b7 | J dot (red) (280,462) + ring                            | circle+Draw(ringD)
 *  b7 | "J" label                                                | T mid | x264 y420
 *  b7 | red bar x680 y410..450                                    | Draw
 *  b7 | guardrail line1/line2                                     | T start | x696 y427/449
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
  ringD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';
import { CartesianAxes, lineD } from "./math-kit";

// --- diagram screen mapping ---
const OX = 268;
const OY = 526;
const SCALE = 28;
function toScreen(x: number, y: number) {
  return { x: OX + x * SCALE, y: OY - y * SCALE };
}
const LA1 = toScreen(-1, 3); // (240,442)
const LA2 = toScreen(5, 0); // (408,526)
const LB1 = toScreen(-1, -2); // (240,582)
const LB2 = toScreen(2, 7); // (324,330)
const F1 = toScreen(-3.5, 5.5); // (170,372)
const F2 = toScreen(5.3, -1.7); // (416.4,573.6)
const P21 = toScreen(2, 1); // (324,498)
const J = toScreen(3 / 7, 16 / 7); // (280,462)

export default function M11Ch09Sec41({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={24} fill={RED} anchor="middle" script>
          {t("Worked: The Family Method", "Worked: Family Method Ka Trick")}
        </T>
      </Fade>

      {/* beat 1 — problem statement */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={96} size={14} fill={INK} anchor="middle">
          {t("Find the line through the intersection of", "x + 2y - 5 = 0 aur 3x - y + 1 = 0 ke")}
        </T>
        <T x={540} y={118} size={14} fill={INK} anchor="middle">
          {t("x + 2y - 5 = 0 and 3x - y + 1 = 0 that", "intersection se guzarti wo line")}
        </T>
        <T x={540} y={140} size={14} fill={INK} anchor="middle">
          {t("also passes through (2, 1).", "dhoondo jo (2, 1) se bhi guzare.")}
        </T>
      </Fade>

      {/* beat 2 — the family equation (formula, language-agnostic) */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={540} y={172} size={16} fill={INK} anchor="middle" weight={700}>
          (x + 2y - 5) + λ(3x - y + 1) = 0
        </T>
      </Fade>

      {/* beat 3 — impose passage through (2,1) */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={540} y={198} size={14} fill={INK} anchor="middle">
          {t("Impose passage through the point (2, 1):", "Ab impose karo — line (2, 1) se guzare:")}
        </T>
      </Fade>

      {/* beat 4 — substitution (formula, language-agnostic) */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={540} y={224} size={15} fill={INK} anchor="middle">
          (2 + 2 - 5) + λ(6 - 1 + 1) = 0  ⇒  -1 + 6λ = 0
        </T>
      </Fade>

      {/* beat 5 — lambda solved, boxed */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <Chip x={490} y={250} w={100} h={32} fill="#FCF4E0" stroke={AMBER_DARK} textFill={AMBER_DARK} size={18} script={false}>
          λ = 1/6
        </Chip>
      </Fade>

      {/* beat 6 — land the final answer + THE DIAGRAM (the payoff, staged for beat 7) */}
      <CartesianAxes on={beat >= 6} delay={dl(6, 0)} originX={OX} originY={OY} xLeft={160} xRight={430} yTop={310} yBottom={560} showTicks={false} />
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <Circle cx={OX} cy={OY} r={3} fill={INK} />
        <T x={254} y={541} size={11} fill={MUTED} anchor="end">O</T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 0.5)} d={lineD(LA1.x, LA1.y, LA2.x, LA2.y)} stroke={INK} sw={2} dur={0.6} />
      <Fade on={beat >= 6} delay={dl(6, 1.1)}>
        <T x={415} y={540} size={11} fill={INK} anchor="start">x + 2y - 5 = 0</T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.4)} d={lineD(LB1.x, LB1.y, LB2.x, LB2.y)} stroke={INK} sw={2} dur={0.6} />
      <Fade on={beat >= 6} delay={dl(6, 2.0)}>
        <T x={330} y={320} size={11} fill={INK} anchor="start">3x - y + 1 = 0</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.4)}>
        <Circle cx={P21.x} cy={P21.y} r={5} fill={AMBER_DARK} />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.7)}>
        <T x={365} y={470} size={12} fill={AMBER_DARK} anchor="start" weight={700}>(2, 1)</T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 3.1)} d={lineD(F1.x, F1.y, F2.x, F2.y)} stroke={GREEN} sw={2.6} dur={0.7} />
      <Fade on={beat >= 6} delay={dl(6, 3.7)}>
        <Chip x={680} y={340} w={200} h={38} fill="#FCF4E0" stroke={GREEN} textFill={GREEN} size={19} script={false}>
          9x + 11y - 29 = 0
        </Chip>
      </Fade>

      {/* beat 7 — the reveal: the answer line passes through J, without ever computing it */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <Circle cx={J.x} cy={J.y} r={4.5} fill={RED} />
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 0.3)} d={ringD(J.x, J.y, 16, 14)} stroke={RED} sw={2} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 0.7)}>
        <T x={264} y={420} size={14} fill={RED} anchor="middle" weight={700}>J</T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 1.1)} d={lineD(680, 410, 680, 450)} stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={696} y={427} size={15} fill={RED} anchor="start" weight={700}>
          {t("We never computed the", "Humne intersection kabhi compute")}
        </T>
        <T x={696} y={449} size={15} fill={RED} anchor="start" weight={700}>
          {t("intersection — that's the payoff.", "nahi kiya — yahi elegance hai.")}
        </T>
      </Fade>
    </Scene>
  );
}
