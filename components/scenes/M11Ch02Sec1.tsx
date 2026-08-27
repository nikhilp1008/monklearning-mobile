/**
 * M11 Ch02 · Section 1 — "Ordered pairs: position carries meaning"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 *
 * Beats (board_reveal_at_english [0, 10.75, 25.0, 43.78, 58.88, 75.52, 92.67, 107.01]):
 *  0 title (heading, always-on) · 1 anchor: chai-stall sizes/flavours + "how many cups?"
 *  2 represent: build all 6 (size, flavour) pairs as a grid, stamp "= 6 cups"
 *  3 explain: define (a, b) — label first/second coordinate with arrows
 *  4 guardrail: (Small, Adrak) ≠ (Adrak, Small), ringed red
 *  5 reinforce: cricket scoreline (180,4) sensible vs (4,180) crossed out
 *  6 land: (a,b) = (c,d) ⟺ a=c and b=d, boxed
 *  7 verdict: (a,b) = (b,a) only when a = b
 *
 * Layout plan — two working columns (LEFT the story/demo, RIGHT the formal
 * definition + guardrails), boxes are estimated render boxes (Kalam ink box
 * ≈ baseline −1.3·size … +0.5·size; Anek ≈ −0.78 … +0.31), longer language counts:
 *  b0 | title (script 28, red)        | T mid  | x360..720  y34..84  (bl 70)
 *  b1 | "Sizes = {S,M,L}" (19)        | T st   | x60..231   y110..131 (bl 125)
 *  b1 | "Flavours = {..}" (19)        | T st   | x60..326   y147..168 (bl 162)
 *  b1 | query (script 20, red)        | T st   | x60..300   y184..220 (bl 210)
 *  b1 | underline                    | Draw   | x60..300  y224
 *  b2 | header (16, muted)            | T st   | x60..270   y238..258 (bl 250)
 *  b2 | 6 pair chips (h34)             | Chip   | col Adrak x100..232, col Elaichi x260..392
 *                                              | rows y270..304 / 316..350 / 362..396
 *  b2 | "= 6 cups" chip (green,24)    | Chip   | x146..326  y416..456
 *  b3 | "( a , b )" (36, split)        | T mid  | x627..770  y117..156 (bl 145)
 *  b3 | "1st coordinate" (14, amber)  | T mid  | x595..715  y194..212 (bl 205) · arrow (655,185)→(675,161)
 *  b3 | "2nd coordinate" (14, green)  | T mid  | x740..860  y194..212 (bl 205) · arrow (800,185)→(725,161)
 *  b4 | chip "(Small, Adrak)"         | Chip   | x616..754  y250..284
 *  b4 | "≠" (28, red)                 | T mid  | x778..792  y253..284 (bl 275)
 *  b4 | chip "(Adrak, Small)" (dashed)| Chip   | x816..954  y250..284
 *  b4 | ring (red) around chip2       | Draw   | c(885,267) rx83 ry29 → y231..305
 *  b4 | caption (script 16, red)      | T st   | x616..920  y316..345 (bl 337)
 *  b5 | line1 "(180,4)…✓" (green,15)  | T st   | x616..856  y365..381 (bl 375)
 *  b5 | line2 "(4,180)…✗" (red,15)    | T st   | x616..846  y400..416 (bl 410) · cross over box
 *  b6 | "(a,b)=(c,d)" (20)             | T st   | x616..766  y439..456 (bl 450)
 *  b6 | "⇔" (24)                       | T mid  | x783..807  y440..457 (bl 450)
 *  b6 | chip "a=c and b=d" (green,17) | Chip   | x825..987  y432..468
 *  b7 | chip "(a,b)=(b,a) only a=b"   | Chip   | x365..715  y505..545 (green)
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  arrowD,
  ringD,
  crossD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  GREEN_DARK,
  RED,
  Scene,
} from '@/components/scenes/kit';

const PAIRS: { a: string; b: string; col: 0 | 1; row: 0 | 1 | 2 }[] = [
  { a: "S", b: "Adrak", col: 0, row: 0 },
  { a: "S", b: "Elaichi", col: 1, row: 0 },
  { a: "M", b: "Adrak", col: 0, row: 1 },
  { a: "M", b: "Elaichi", col: 1, row: 1 },
  { a: "L", b: "Adrak", col: 0, row: 2 },
  { a: "L", b: "Elaichi", col: 1, row: 2 },
];
const COL_X = [100, 260];
const ROW_Y = [270, 316, 362];
const CHIP_W = 132;
const CHIP_H = 34;

export default function M11Ch02Sec1({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={70} size={28} fill={RED} anchor="middle" script>
          {t("Ordered Pairs — position carries meaning", "Ordered Pairs — position ka matlab hota hai")}
        </T>
      </Fade>

      {/* beat 1 — anchor: the chai-stall question */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={60} y={125} size={19} fill={INK} anchor="start">
          {t("Sizes = {S, M, L}", "Sizes = {S, M, L}")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={60} y={162} size={19} fill={INK} anchor="start">
          {t("Flavours = {Adrak, Elaichi}", "Flavours = {Adrak, Elaichi}")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.2)}>
        <T x={60} y={210} size={20} fill={RED} anchor="start" script>
          {t("how many different cups?", "kitne cups bante hain?")}
        </T>
      </Fade>
      <Draw on={beat >= 1} d="M 60 224 L 300 224" stroke={RED} sw={2} delay={dl(1, 1.8)} />

      {/* beat 2 — represent: build all 6 pairs, then count */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={60} y={250} size={16} fill={MUTED} anchor="start">
          {t("Pair each size × flavour:", "Har size ko har flavour se jodo:")}
        </T>
      </Fade>
      {PAIRS.map((p, i) => (
        <Fade key={`${p.a}-${p.b}`} on={beat >= 2} delay={dl(2, 0.4 + i * 0.32)}>
          <Chip
            x={COL_X[p.col]}
            y={ROW_Y[p.row]}
            w={CHIP_W}
            h={CHIP_H}
            fill="#FCF4E0"
            stroke={INK}
            textFill={INK}
            size={15}
            script={false}
          >
            {`(${p.a}, ${p.b})`}
          </Chip>
        </Fade>
      ))}
      <Fade on={beat >= 2} delay={dl(2, 2.6)}>
        <Chip x={146} y={416} w={180} h={40} fill={GREEN} textFill="#FFFEFB" size={24}>
          {t("= 6 cups", "= 6 cups")}
        </Chip>
      </Fade>

      {/* beat 3 — explain: define (a, b), label the two coordinate slots */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={645} y={145} size={36} fill={INK} anchor="middle" weight={800}>
          (
        </T>
        <T x={675} y={145} size={36} fill={AMBER_DARK} anchor="middle" weight={800}>
          a
        </T>
        <T x={698} y={145} size={36} fill={INK} anchor="middle" weight={800}>
          ,
        </T>
        <T x={725} y={145} size={36} fill={GREEN_DARK} anchor="middle" weight={800}>
          b
        </T>
        <T x={752} y={145} size={36} fill={INK} anchor="middle" weight={800}>
          )
        </T>
      </Fade>
      <Draw on={beat >= 3} d={arrowD(655, 185, 675, 161)} stroke={AMBER_DARK} sw={2} delay={dl(3, 0.7)} />
      <Fade on={beat >= 3} delay={dl(3, 1.0)}>
        <T x={655} y={205} size={14} fill={AMBER_DARK} anchor="middle">
          {t("1st coordinate", "pehla coordinate")}
        </T>
      </Fade>
      <Draw on={beat >= 3} d={arrowD(800, 185, 725, 161)} stroke={GREEN_DARK} sw={2} delay={dl(3, 1.5)} />
      <Fade on={beat >= 3} delay={dl(3, 1.8)}>
        <T x={800} y={205} size={14} fill={GREEN_DARK} anchor="middle">
          {t("2nd coordinate", "dusra coordinate")}
        </T>
      </Fade>

      {/* beat 4 — guardrail: swapping slots changes the object */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <Chip x={616} y={250} w={138} h={34} fill="#FCF4E0" stroke={INK} textFill={INK} size={15} script={false}>
          {t("(Small, Adrak)", "(Small, Adrak)")}
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <T x={785} y={275} size={28} fill={RED} anchor="middle" weight={800}>
          ≠
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.9)}>
        <Chip x={816} y={250} w={138} h={34} fill="#FCF4E0" stroke={RED} dashed textFill={RED} size={15} script={false}>
          {t("(Adrak, Small)", "(Adrak, Small)")}
        </Chip>
      </Fade>
      <Draw on={beat >= 4} d={ringD(885, 267, 83, 29)} stroke={RED} sw={2.2} delay={dl(4, 1.5)} />
      <Fade on={beat >= 4} delay={dl(4, 2.1)}>
        <T x={616} y={337} size={16} fill={RED} anchor="start" script>
          {t("swap slots → different object!", "slots badlo → object badal jaata hai!")}
        </T>
      </Fade>

      {/* beat 5 — reinforce: cricket scoreline */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={616} y={375} size={15} fill={GREEN} anchor="start">
          {t("(180, 4): 180 runs, 4 wickets ✓", "(180, 4): 180 runs, 4 wickets ✓")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={616} y={410} size={15} fill={RED} anchor="start">
          {t("(4, 180): flip = nonsense ✗", "(4, 180): ulta = bakwaas ✗")}
        </T>
      </Fade>
      <Draw on={beat >= 5} d={crossD(616, 398, 210, 17)} stroke={RED} sw={2} delay={dl(5, 1.4)} />

      {/* beat 6 — land: the formal equality rule, assembled term by term */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={616} y={450} size={20} fill={INK} anchor="start" weight={700}>
          (a, b) = (c, d)
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.7)}>
        <T x={795} y={450} size={24} fill={INK} anchor="middle" weight={700}>
          ⇔
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.3)}>
        <Chip x={825} y={432} w={162} h={36} fill={GREEN} textFill="#FFFEFB" size={17} script={false}>
          a = c and b = d
        </Chip>
      </Fade>

      {/* beat 7 — verdict: the special-case consequence */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <Chip x={365} y={505} w={350} h={40} fill={GREEN} textFill="#FFFEFB" size={19} script={false}>
          {t("(a,b) = (b,a)  only when  a = b", "(a,b) = (b,a)  sirf jab  a = b")}
        </Chip>
      </Fade>
    </Scene>
  );
}
