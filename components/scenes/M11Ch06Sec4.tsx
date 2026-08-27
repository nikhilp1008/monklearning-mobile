/**
 * M11 Ch06 · Section 4 — "Core formulas: multiply, add, factorial, and the
 * repetition fork"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md.
 *
 * Beats (board_reveal_at_english [0,6.49,20.31,28.67,38.49,51.46,65.79,79.7],
 * hinglish [0,6.23,19.2,28.07,38.23,49.66,63.66,78.59]):
 *  0 heading: "your foundation toolkit" (= the title itself, always-on)
 *  1 AND recap row: mini fan icon + m₁ × m₂ × ⋯ × mₖ builds live + tag
 *  2 OR recap row: mini two-circle icon + m + n builds live + tag
 *  3 factorial recap row: n! = n(n-1)⋯2·1 builds, then 0! = 1 lands (green)
 *  4 recursion recap row: n! = n·(n-1)! builds + "(recursion)" tag
 *  [erase group A] — beat 5 starts the NEW teaching content, fresh space
 *  5 repetition fork (NEW): 4 same-size boxes each "n" (not shrinking, unlike
 *    Sec3's n,n-1,n-2 slots) + ×'s + "= nʳ", labeled "r factors", contrast
 *    caption explicitly calling out the difference from factorial
 *  6 guardrail: 3-structure decision card (repetition→nʳ / no-repeat,
 *    order matters→falling product / arrange all→n!)
 *  7 practical tip: 5!=120 small, 10!=3,628,800 big, leave 20! symbolic
 *
 * Layout plan (boxes = estimated render boxes; longer language counts):
 *  always | title (script 24, red)             | T mid   | x362..718 y39..82
 *  b0 | title underline flourish (amber)        | Draw    | x380..700 y94
 *  [group A: aOn = beat 0..4, erased at beat>=5]
 *  b1 | AND fan icon (root+3 spokes+dots)        | Draw/circ| x386..449 y129..177
 *  b1 | "m₁ × m₂ × ⋯ × mₖ" (28, ink, w800)      | T start | x470..698 y138..169
 *  b1 | "(AND: stages combine)" (15, amber-dk)   | T start | x722..962 y148..165
 *  b2 | OR two-circle icon (r10, stroked)        | Draw    | x385..465 y273..293
 *  b2 | "m + n" (28, ink, w800)                  | T start | x480..552 y268..299
 *  b2 | "(OR: mutually exclusive...)" (15)       | T start | x576..861 y278..295
 *  b3 | "n! = n(n-1)⋯2·1" (28, ink, w800)        | T start | x470..682 y388..419
 *  b3 | ", 0! = 1" (28, green, w800)             | T start | x698..810 y388..419
 *  b4 | "n! = n·(n-1)!" (28, ink, w800)           | T start | x470..654 y508..539
 *  b4 | "(recursion)" (15, amber-dk)              | T start | x678..760 y518..535
 *  [group A erased at beat>=5]
 *  b5 | sub-header "one new case..." (20, ink)    | T mid   | x362..718 y104..126
 *  b5 | 4 boxes (64×64, gap40)                    | Draw    | x352..728 y155..219
 *  b5 | 4 "n" labels (30, ink, w800)               | T mid   | x369..711 y172..204 (per box)
 *  b5 | 3 "×" (24, muted)                          | T mid   | x420..654 y176..201
 *  b5 | "= nʳ" (34, green, w800)                   | T start | x760..828 y169..206
 *  b5 | underline under boxes (amber)               | Draw    | x352..728 y235
 *  b5 | "r factors" (14, amber-dk)                   | T mid   | x508..572 y247..262
 *  b5 | contrast caption (15, muted)                 | T mid   | x357..723 y280..297
 *  b6 | guardrail header (18, red, w700)             | T mid   | x400..680 y324..344
 *  b6 | 3 cards (280×100, gap30)                     | Draw    | x90..990 y370..470
 *  b6 | card labels (13, muted) ×3                   | T mid   | per-card y390..404
 *  b6 | card formulas (26, green, w800) ×3            | T mid   | per-card y427..453
 *  b7 | "factorials explode fast:" (16, ink)          | T mid   | x400..680 y500..517
 *  b7 | "5! = 120" (18, ink, w700)                     | T start | x295..368 y540..561
 *  b7 | "→" ×2 (18, muted)                              | T start | x385..632 y540..561
 *  b7 | "10! = 3,628,800" (24, amber-dk, w800)           | T start | x412..605 y536..563
 *  b7 | "leave 20! as-is" (18, red, w700)                | T start | x649..852 y540..561
 *  b7 | underline under punchline (red)                  | Draw    | x645..852 y574
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
  INK,
  MUTED,
  GREEN,
  RED,
  AMBER,
  AMBER_DARK,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD, circleD, lineD } from "./math-kit";

export default function M11Ch06Sec4({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  // Group A (beats 0-4, the recap toolkit: AND/OR/factorial/recursion) is
  // erased once the NEW repetition-fork content lands at beat 5; group B
  // (beats 5-7: repetition fork, 3-structure guardrail, factorial-explode
  // tip) is the final group and is never erased. Each element's own `on` is
  // bounded to its beat window (rather than a wrapper div's opacity) so the
  // verifier's Fade-opacity visibility check — which walks up to the nearest
  // g.sc-fade, not an arbitrary ancestor — sees the erasure too; seeking back
  // into an earlier beat correctly restores it.
  const aOn = beat >= 0 && beat < 5;
  const bOn = beat >= 5;

  const boxX = [352, 456, 560, 664];
  const boxCenters = [384, 488, 592, 696];
  const gapCenters = [436, 540, 644];
  const cardX = [90, 400, 710];
  const cardCenters = [230, 540, 850];

  return (
    <Scene>
      {/* title always-on */}
      <Fade on={true}>
        <T x={540} y={70} size={24} fill={RED} script>
          {t("your foundation toolkit", "tumhara foundation toolkit")}
        </T>
      </Fade>
      <Draw
        on={aOn && beat >= 0}
        delay={dl(0, 0.4)}
        d={lineD(380, 94, 700, 94)}
        stroke={AMBER}
        sw={2}
        dur={0.6}
      />

      {/* Row 1 — AND, beat 1 */}
      <Draw
        on={aOn && beat >= 1}
        delay={dl(1, 0.3)}
        d={`M390 153 L445 133 M390 153 L445 153 M390 153 L445 173`}
        stroke={MUTED}
        sw={1.6}
        dur={0.7}
      />
      <Fade on={aOn && beat >= 1} delay={dl(1, 0.3)}>
        <Circle cx={390} cy={153} r={4} fill={INK} />
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 1.0)}>
        {[133, 153, 173].map((y) => (
          <Circle key={y} cx={445} cy={y} r={4} fill={INK} />
        ))}
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 1.6)}>
        <T x={470} y={160} size={28} fill={INK} weight={800} anchor="start">
          m₁
        </T>
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 2.2)}>
        <T x={514} y={160} size={28} fill={INK} weight={800} anchor="start">
          × m₂
        </T>
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 2.8)}>
        <T x={586} y={160} size={28} fill={INK} weight={800} anchor="start">
          × ⋯ × mₖ
        </T>
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 3.5)}>
        <T x={722} y={160} size={15} fill={AMBER_DARK} anchor="start">
          {t("(AND: stages combine)", "(AND: stages combine hote hain)")}
        </T>
      </Fade>

      {/* Row 2 — OR, beat 2 */}
      <Draw
        on={aOn && beat >= 2}
        delay={dl(2, 0.2)}
        d={`${circleD(395, 283, 10)} ${circleD(455, 283, 10)}`}
        stroke={INK}
        sw={1.8}
        dur={0.6}
      />
      <Fade on={aOn && beat >= 2} delay={dl(2, 0.9)}>
        <T x={480} y={290} size={28} fill={INK} weight={800} anchor="start">
          m
        </T>
      </Fade>
      <Fade on={aOn && beat >= 2} delay={dl(2, 1.4)}>
        <T x={510} y={290} size={28} fill={INK} weight={800} anchor="start">
          + n
        </T>
      </Fade>
      <Fade on={aOn && beat >= 2} delay={dl(2, 2.0)}>
        <T x={576} y={290} size={15} fill={AMBER_DARK} anchor="start">
          {t(
            "(OR: mutually exclusive alternatives)",
            "(OR: overlap na karein, dono alag)"
          )}
        </T>
      </Fade>

      {/* Row 3 — factorial, beat 3 */}
      <Fade on={aOn && beat >= 3} delay={dl(3, 0.3)}>
        <T x={470} y={410} size={28} fill={INK} weight={800} anchor="start">
          n!
        </T>
      </Fade>
      <Fade on={aOn && beat >= 3} delay={dl(3, 1.0)}>
        <T x={514} y={410} size={28} fill={INK} weight={800} anchor="start">
          = n(n-1)⋯2·1
        </T>
      </Fade>
      <Fade on={aOn && beat >= 3} delay={dl(3, 1.9)}>
        <T x={698} y={410} size={28} fill={GREEN} weight={800} anchor="start">
          , 0! = 1
        </T>
      </Fade>

      {/* Row 4 — recursion, beat 4 */}
      <Fade on={aOn && beat >= 4} delay={dl(4, 0.3)}>
        <T x={470} y={530} size={28} fill={INK} weight={800} anchor="start">
          n!
        </T>
      </Fade>
      <Fade on={aOn && beat >= 4} delay={dl(4, 1.0)}>
        <T x={514} y={530} size={28} fill={INK} weight={800} anchor="start">
          = n·(n-1)!
        </T>
      </Fade>
      <Fade on={aOn && beat >= 4} delay={dl(4, 1.8)}>
        <T x={678} y={530} size={15} fill={AMBER_DARK} anchor="start">
          {t("(recursion)", "(recursion)")}
        </T>
      </Fade>

      {/* Group B — beats 5-7, group A erased */}
      <Fade on={bOn} delay={dl(5, 0.2)}>
        <T x={540} y={120} size={20} fill={INK} weight={700}>
          {t(
            "one new case: repeats ARE allowed",
            "naya case: repeat allowed hai"
          )}
        </T>
      </Fade>

      <Draw
        on={bOn}
        delay={dl(5, 0.9)}
        d={boxX.map((x) => roundRectD(x, 155, 64, 64, 10)).join(" ")}
        stroke={INK}
        sw={2}
        dur={1.0}
      />
      {boxCenters.map((x, i) => (
        <Fade key={x} on={bOn} delay={dl(5, 2.1 + i * 0.5)}>
          <T x={x} y={195} size={30} fill={INK} weight={800}>
            n
          </T>
        </Fade>
      ))}
      <Fade on={bOn} delay={dl(5, 4.2)}>
        {gapCenters.map((x) => (
          <T key={x} x={x} y={195} size={24} fill={MUTED}>
            ×
          </T>
        ))}
      </Fade>
      <Fade on={bOn} delay={dl(5, 4.8)}>
        <T x={760} y={195} size={34} fill={GREEN} weight={800} anchor="start">
          = nʳ
        </T>
      </Fade>
      <Draw
        on={bOn}
        delay={dl(5, 5.4)}
        d={lineD(352, 235, 728, 235)}
        stroke={AMBER}
        sw={2}
        dur={0.5}
      />
      <Fade on={bOn} delay={dl(5, 6.0)}>
        <T x={540} y={258} size={14} fill={AMBER_DARK}>
          {t("r factors", "r factors")}
        </T>
      </Fade>
      <Fade on={bOn} delay={dl(5, 6.6)}>
        <T x={540} y={292} size={15} fill={MUTED}>
          {t(
            "(same n each time - unlike n! which shrinks)",
            "(hamesha wahi n - n! ki tarah nahi ghatta)"
          )}
        </T>
      </Fade>

      {/* beat 6 — 3-structure decision card */}
      <Fade on={bOn && beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={338} size={18} fill={RED} weight={700}>
          {t("which of these 3 applies?", "teeno mein se kaunsa lagu hai?")}
        </T>
      </Fade>
      <Draw
        on={bOn && beat >= 6}
        delay={dl(6, 0.9)}
        d={cardX.map((x) => roundRectD(x, 370, 280, 100, 14)).join(" ")}
        stroke={INK}
        sw={2}
        dur={0.8}
      />
      <Fade on={bOn && beat >= 6} delay={dl(6, 1.9)}>
        <T x={cardCenters[0]} y={400} size={13} fill={MUTED}>
          {t("repetition allowed", "repetition allowed hai")}
        </T>
      </Fade>
      <Fade on={bOn && beat >= 6} delay={dl(6, 2.3)}>
        <T x={cardCenters[0]} y={445} size={26} fill={GREEN} weight={800}>
          nʳ
        </T>
      </Fade>
      <Fade on={bOn && beat >= 6} delay={dl(6, 2.8)}>
        <T x={cardCenters[1]} y={400} size={13} fill={MUTED}>
          {t("no repeat, order matters", "no repeat, order matters hai")}
        </T>
      </Fade>
      <Fade on={bOn && beat >= 6} delay={dl(6, 3.2)}>
        <T x={cardCenters[1]} y={445} size={26} fill={GREEN} weight={800}>
          n(n-1)(n-2)⋯
        </T>
      </Fade>
      <Fade on={bOn && beat >= 6} delay={dl(6, 3.7)}>
        <T x={cardCenters[2]} y={400} size={13} fill={MUTED}>
          {t("arrange everything", "sab kuch arrange karo")}
        </T>
      </Fade>
      <Fade on={bOn && beat >= 6} delay={dl(6, 4.1)}>
        <T x={cardCenters[2]} y={445} size={26} fill={GREEN} weight={800}>
          n!
        </T>
      </Fade>

      {/* beat 7 — practical tip: factorials explode */}
      <Fade on={bOn && beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={512} size={16} fill={INK}>
          {t("factorials explode fast:", "factorials bahut tezi se badhte hain:")}
        </T>
      </Fade>
      <Fade on={bOn && beat >= 7} delay={dl(7, 1.1)}>
        <T x={295.5} y={555} size={18} fill={INK} weight={700} anchor="start">
          5! = 120
        </T>
      </Fade>
      <Fade on={bOn && beat >= 7} delay={dl(7, 1.5)}>
        <T x={385.5} y={555} size={18} fill={MUTED} anchor="start">
          →
        </T>
      </Fade>
      <Fade on={bOn && beat >= 7} delay={dl(7, 1.9)}>
        <T x={412.5} y={555} size={24} fill={AMBER_DARK} weight={800} anchor="start">
          10! = 3,628,800
        </T>
      </Fade>
      <Fade on={bOn && beat >= 7} delay={dl(7, 2.6)}>
        <T x={622.5} y={555} size={18} fill={MUTED} anchor="start">
          →
        </T>
      </Fade>
      <Fade on={bOn && beat >= 7} delay={dl(7, 3.0)}>
        <T x={649.5} y={555} size={18} fill={RED} weight={700} anchor="start">
          {t("leave 20! as-is", "20! ko waisa hi chhodo")}
        </T>
      </Fade>
      <Draw
        on={bOn && beat >= 7}
        delay={dl(7, 3.6)}
        d={lineD(645, 574, en ? 789 : 852, 574)}
        stroke={RED}
        sw={2.2}
        dur={0.4}
      />
    </Scene>
  );
}
