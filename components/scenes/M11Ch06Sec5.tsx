/**
 * M11 Ch06 · Section 5 — "Proof: box-filling, and how it builds the factorial"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. This is a real PROOF section — every logical step
 * is its own staged element, nothing skipped.
 *
 * Beats (board_reveal_at_english [0,6.49,21.93,39.51,45.74,66.3,78.76],
 * hinglish [0,6.31,20.99,38.91,43.35,63.23,75.01]):
 *  0 heading: "why is m×n TRUE" (= title, always-on) + underline flourish
 *  1 THE central diagram: Box1 (m ways, 3 dots, top=RED=fixed) + Box2 (n ways,
 *    4 dots) + RED fan from the fixed dot to all 4 Box2 dots + caption
 *  2 crux: fainter 2nd fan from a 2nd Box-1 dot to the SAME 4 Box2 dots (proves
 *    "same n no matter which") + 3-line explanation, right rail
 *  3 formula lands: "m groups × n each = m × n"
 *  4 guardrail (red): drawn warning triangle + red chip — independence caveat
 *  [erase group A at beat>=5 — Part 1 (the m×n proof) is done, Part 2 starts]
 *  5 generalize to n!: intro line + 5-slot row (n, n-1, n-2, ⋯, 1) built live,
 *    ×'s, "= n!", underline, caption — callback to Sec3's slot-filling visual
 *  6 the 0!=1 proof: "1! = 1" → "1! = 1·0!" (recursion) → "1 = 1·0!" →
 *    "⇒ 0! = 1" (ringed), each its own staged line + annotation; plus the
 *    combinatorial meaning aside (empty box + check = "1 way: do nothing")
 *
 * Layout plan (boxes = estimated render boxes; longer language counts):
 *  always | title (script 24, red)                | T mid  | x197..883 y39..82
 *  b0 | title underline flourish (amber)           | Draw   | x350..730 y94
 *  [group A: aOn = beat 0..4, erased at beat>=5]
 *  b1 | Box1 outline (140×140)                     | Draw   | x140..280 y150..290
 *  b1 | Box1 label "Box 1: m ways"                  | T mid  | x146..274 y110..127
 *  b1 | Box1 dots ×3 (top=RED "fixed")               | circle | x210 y186/220/254
 *  b1 | Box2 outline (140×260, taller)                | Draw   | x430..570 y150..410
 *  b1 | Box2 label "Box 2: n ways (each)"              | T mid  | x392..608 y110..127
 *  b1 | Box2 dots ×4                                     | circle | x500 y190/250/310/370
 *  b1 | fan (RED) fixed-dot → all 4 Box2 dots              | Draw   | x210..500 y186..370
 *  b1 | caption "each of m choices reaches all n..."       | T mid  | x155..555 y428..445
 *  b2 | fan (MUTED) 2nd Box1 dot → same 4 Box2 dots          | Draw   | x210..500 y220..370
 *  b2 | crux line 1                                          | T start| x630..? y178..195
 *  b2 | crux line 2                                          | T start| x630..? y214..231
 *  b2 | crux line 3                                          | T start| x630..? y250..267
 *  b3 | formula "m groups × n each = m × n" (30,w800)         | T mid  | x345..735 y475..507
 *  b4 | warning triangle (drawn, red)                          | Draw   | x92..128 y540..575
 *  b4 | guardrail chip (red stroke, w760,h48)                   | Chip   | x160..920 y536..584
 *  [group A erased at beat>=5]
 *  b5 | intro "same idea builds n! ..."                          | T mid  | x310..770 y126..146
 *  b5 | 5 slot boxes (64×64, gap40)                                | Draw   | x300..780 y200..264
 *  b5 | 5 labels n,n-1,n-2,⋯,1                                      | T mid  | per-box y222..251
 *  b5 | 4 "×" signs                                                  | T mid  | x384..696 y227..251
 *  b5 | "= n!" (32, green, w800)                                     | T start| x810..874 y217..252
 *  b5 | underline (amber)                                              | Draw   | x300..874 y280
 *  b5 | caption "counts drop by one..."                                | T mid  | x340..740 y298..315
 *  [group B: bOn = beat>=5, final group, never erased]
 *  b6 | header "why 0! = 1 - the proof:" (20, green, w700)               | T mid  | x420..660 y334..356
 *  b6 | L1 "1! = 1" (24,ink,w800) + "(obvious)" annotation                | T mid/start| x404..583 y376..402
 *  b6 | L2 "1! = 1·0!" (24,ink,w800) + "(the recursion)" annotation       | T mid/start| x374..625 y421..447
 *  b6 | L3 "1 = 1·0!" (24,amber-dk,w800) + "(both equal 1!)" annotation   | T mid/start| x380..632 y466..492
 *  b6 | L4 "⇒ 0! = 1" (30,green,w800), ringed                             | T mid  | x372..523 y512..565
 *  b6 | combinatorial aside: "0 objects" label + empty box + check +      | mixed  | x691..863 y386..480
 *       "→ 1 way" + "(the empty arrangement)" caption
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
  GREEN,
  RED,
  AMBER,
  AMBER_DARK,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD, lineD, checkD } from "./math-kit";

export default function M11Ch06Sec5({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  // Group A (beats 0-4, the m×n independence proof) is erased once Part 2
  // (the n!/0! generalization) starts at beat 5; group B (beats 5-6) is the
  // final group and is never erased. Each element's own `on` is bounded to
  // its beat window (rather than a wrapper div's opacity) so the verifier's
  // Fade-opacity visibility check — which walks up to the nearest g.sc-fade,
  // not an arbitrary ancestor — sees the erasure too; seeking back into an
  // earlier beat correctly restores it.
  const aOn = beat >= 0 && beat < 5;
  const bOn = beat >= 5;

  // ---- Part 1 diagram geometry ----
  const box1 = { x: 140, y: 150, w: 140, h: 140 }; // right 280, bottom 290
  const box2 = { x: 430, y: 150, w: 140, h: 260 }; // right 570, bottom 410
  const box1DotX = 210;
  const box1DotYs = [186, 220, 254];
  const box2DotX = 500;
  const box2DotYs = [190, 250, 310, 370];
  const fan1D = box2DotYs.map((y) => `M${box1DotX} ${box1DotYs[0]} L${box2DotX} ${y}`).join(" ");
  const fan2D = box2DotYs.map((y) => `M${box1DotX} ${box1DotYs[1]} L${box2DotX} ${y}`).join(" ");

  // ---- Part 2 (n!) slot geometry — callback to Sec3's slot-filling visual ----
  const boxX = [300, 404, 508, 612, 716];
  const boxCenters = [332, 436, 540, 644, 748];
  const gapCenters = [384, 488, 592, 696];
  const slotLabels = ["n", "n-1", "n-2", "⋯", "1"];

  // ---- Part 2 (0!=1) algebra geometry ----
  const l4W = 135; // "⇒ 0! = 1" estimated width at size 30
  const ringCx = 440;
  const ringCy = (511.6 + 544.3) / 2;
  const ringRx = l4W / 2 + 14;
  const ringRy = (544.3 - 511.6) / 2 + 12;

  return (
    <Scene>
      {/* title always-on */}
      <Fade on={true}>
        <T x={540} y={70} size={24} fill={RED} script>
          {t(
            "Why the multiplication principle is TRUE (not magic)",
            "Multiplication principle TRUE kyun hai (magic nahi)"
          )}
        </T>
      </Fade>
      <Draw
        on={aOn && beat >= 0}
        delay={dl(0, 0.4)}
        d={lineD(350, 94, 730, 94)}
        stroke={AMBER}
        sw={2}
        dur={0.6}
      />

      {/* ===================== PART 1 — the m×n proof (beats 1-4) ===================== */}

      {/* beat 1 — the central diagram: Box 1 → its dots → Box 2 → its dots → fan */}
      <Draw
        on={aOn && beat >= 1}
        delay={dl(1, 0.3)}
        d={roundRectD(box1.x, box1.y, box1.w, box1.h, 12)}
        stroke={INK}
        sw={2}
        dur={0.9}
      />
      <Fade on={aOn && beat >= 1} delay={dl(1, 1.0)}>
        <T x={210} y={122} size={16} fill={INK}>
          {t("Box 1: m ways", "Box 1: m tareeke")}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 1.6)}>
        <Circle cx={box1DotX} cy={box1DotYs[0]} r={6} fill={RED} />
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 1.9)}>
        <Circle cx={box1DotX} cy={box1DotYs[1]} r={6} fill={INK} />
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 2.2)}>
        <Circle cx={box1DotX} cy={box1DotYs[2]} r={6} fill={INK} />
      </Fade>

      <Draw
        on={aOn && beat >= 1}
        delay={dl(1, 2.8)}
        d={roundRectD(box2.x, box2.y, box2.w, box2.h, 12)}
        stroke={INK}
        sw={2}
        dur={0.9}
      />
      <Fade on={aOn && beat >= 1} delay={dl(1, 3.6)}>
        <T x={500} y={122} size={16} fill={INK}>
          {t("Box 2: n ways (each)", "Box 2: n tareeke (har baar)")}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 4.2)}>
        {box2DotYs.map((y, i) => (
          <Circle key={i} cx={box2DotX} cy={y} r={6} fill={INK} />
        ))}
      </Fade>

      <Draw on={aOn && beat >= 1} delay={dl(1, 5.7)} d={fan1D} stroke={RED} sw={2} dur={1.0} />

      <Fade on={aOn && beat >= 1} delay={dl(1, 6.9)}>
        <T x={355} y={440} size={16} fill={INK}>
          {t(
            "each of m choices reaches all n → m × n outcomes",
            "har m choice, sabhi n tak pahunchta hai → m × n outcomes"
          )}
        </T>
      </Fade>

      {/* beat 2 — the crux: a SECOND (fainter) fan from a different Box-1 dot,
          reaching the SAME 4 Box-2 dots — proves "same n, no matter which" */}
      <Draw on={aOn && beat >= 2} delay={dl(2, 0.3)} d={fan2D} stroke={MUTED} sw={1.6} dur={1.0} />
      <Fade on={aOn && beat >= 2} delay={dl(2, 1.4)}>
        <T x={630} y={190} size={16} fill={INK} anchor="start">
          {t("Box 1 fills in m ways.", "Box 1 m tareekon se bharta hai.")}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 2} delay={dl(2, 2.0)}>
        <T x={630} y={226} size={16} fill={INK} anchor="start">
          {t(
            "Fix one — Box 2 still fills in n ways,",
            "Ek fix karo — Box 2 phir bhi n tareekon se bharta hai,"
          )}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 2} delay={dl(2, 2.6)}>
        <T x={630} y={262} size={16} fill={GREEN} weight={700} anchor="start">
          {t("the SAME n, no matter which.", "wahi n, chaahe koi bhi chuno.")}
        </T>
      </Fade>

      {/* beat 3 — the formula lands */}
      <Fade on={aOn && beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={498} size={30} fill={INK} weight={800}>
          m {t("groups", "groups")} × n {t("each", "each")} = m × n
        </T>
      </Fade>

      {/* beat 4 — guardrail: the independence caveat, flagged in red */}
      <Draw
        on={aOn && beat >= 4}
        delay={dl(4, 0.3)}
        d={`M110 540 L92 575 L128 575 Z M110 558 L110 567`}
        stroke={RED}
        sw={2.2}
        dur={0.6}
      />
      <Fade on={aOn && beat >= 4} delay={dl(4, 0.9)}>
        <Circle cx={110} cy={571} r={1.8} fill={RED} />
      </Fade>
      <Fade on={aOn && beat >= 4} delay={dl(4, 1.1)}>
        <Chip x={160} y={536} w={760} h={48} fill="#FCF4E0" stroke={RED} textFill={RED} size={15} script={false}>
          {t(
            "Fine print: Box 2's count must not depend on Box 1's choice (independence).",
            "Fine print: Box 2 ka count Box 1 ki choice pe depend nahi hona chahiye (independence)."
          )}
        </Chip>
      </Fade>

      {/* ===================== PART 2 — n! and 0!=1 (beats 5-6, group A erased) ===================== */}

      {/* beat 5 — generalize: n boxes/positions, counts shrink, product is n! */}
      <Fade on={bOn} delay={dl(5, 0.3)}>
        <T x={540} y={140} size={18} fill={INK}>
          {t(
            "The same idea builds n! — one position at a time:",
            "Wahi idea se n! banta hai — ek position ek baar mein:"
          )}
        </T>
      </Fade>
      <Draw
        on={bOn}
        delay={dl(5, 1.0)}
        d={boxX.map((x) => roundRectD(x, 200, 64, 64, 10)).join(" ")}
        stroke={INK}
        sw={2}
        dur={1.0}
      />
      {boxCenters.map((x, i) => (
        <Fade key={i} on={bOn} delay={dl(5, 2.1 + i * 0.5)}>
          <T x={x} y={242} size={26} fill={INK} weight={800}>
            {slotLabels[i]}
          </T>
        </Fade>
      ))}
      <Fade on={bOn} delay={dl(5, 4.6)}>
        {gapCenters.map((x) => (
          <T key={x} x={x} y={242} size={24} fill={MUTED}>
            ×
          </T>
        ))}
      </Fade>
      <Fade on={bOn} delay={dl(5, 5.1)}>
        <T x={810} y={242} size={32} fill={GREEN} weight={800} anchor="start">
          = n!
        </T>
      </Fade>
      <Draw on={bOn} delay={dl(5, 5.6)} d={lineD(300, 280, 874, 280)} stroke={AMBER} sw={2} dur={0.5} />
      <Fade on={bOn} delay={dl(5, 6.2)}>
        <T x={540} y={310} size={16} fill={MUTED}>
          {t(
            "counts drop by one each time — the product is n!",
            "har baar count ek kam hota hai — product hai n!"
          )}
        </T>
      </Fade>

      {/* beat 6 — the 0!=1 proof: recursion algebra, step by step, then the
          combinatorial meaning (0 objects → exactly 1 arrangement) */}
      <Fade on={bOn && beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={350} size={20} fill={GREEN} weight={700}>
          {t("Why 0! = 1 — the proof:", "0! = 1 kyun — yeh raha proof:")}
        </T>
      </Fade>

      <Fade on={bOn && beat >= 6} delay={dl(6, 1.0)}>
        <T x={440} y={395} size={24} fill={INK} weight={800}>
          1! = 1
        </T>
      </Fade>
      <Fade on={bOn && beat >= 6} delay={dl(6, 1.4)}>
        <T x={520} y={395} size={14} fill={MUTED} anchor="start">
          {t("(obvious)", "(seedha hai)")}
        </T>
      </Fade>

      <Fade on={bOn && beat >= 6} delay={dl(6, 2.0)}>
        <T x={440} y={440} size={24} fill={INK} weight={800}>
          1! = 1 · 0!
        </T>
      </Fade>
      <Fade on={bOn && beat >= 6} delay={dl(6, 2.4)}>
        <T x={520} y={440} size={14} fill={MUTED} anchor="start">
          {t("(the recursion)", "(wahi recursion)")}
        </T>
      </Fade>

      <Fade on={bOn && beat >= 6} delay={dl(6, 3.0)}>
        <T x={440} y={485} size={24} fill={AMBER_DARK} weight={800}>
          1 = 1 · 0!
        </T>
      </Fade>
      <Fade on={bOn && beat >= 6} delay={dl(6, 3.4)}>
        <T x={520} y={485} size={14} fill={MUTED} anchor="start">
          {t("(both equal 1!)", "(dono 1! ke barabar)")}
        </T>
      </Fade>

      <Fade on={bOn && beat >= 6} delay={dl(6, 4.0)}>
        <T x={440} y={535} size={30} fill={GREEN} weight={800}>
          ⇒ 0! = 1
        </T>
      </Fade>
      <Draw
        on={bOn && beat >= 6}
        delay={dl(6, 4.5)}
        d={ringD(ringCx, ringCy, ringRx, ringRy)}
        stroke={AMBER}
        sw={2.4}
        dur={0.8}
      />

      {/* combinatorial meaning aside — the empty arrangement */}
      <Fade on={bOn && beat >= 6} delay={dl(6, 5.4)}>
        <T x={740} y={386} size={13} fill={MUTED}>
          {t("0 objects", "0 cheezein")}
        </T>
      </Fade>
      <Draw
        on={bOn && beat >= 6}
        delay={dl(6, 5.8)}
        d={roundRectD(720, 402, 40, 40, 8)}
        stroke={MUTED}
        sw={1.6}
        dur={0.6}
      />
      <Draw
        on={bOn && beat >= 6}
        delay={dl(6, 6.5)}
        d={checkD(740, 422, 18)}
        stroke={GREEN}
        sw={3}
        dur={0.4}
      />
      <Fade on={bOn && beat >= 6} delay={dl(6, 6.9)}>
        <T x={775} y={427} size={16} fill={GREEN} weight={700} anchor="start">
          {t("→ 1 way", "→ 1 tareeka")}
        </T>
      </Fade>
      <Fade on={bOn && beat >= 6} delay={dl(6, 7.3)}>
        <T x={740} y={466} size={13} fill={MUTED}>
          {t("(the empty arrangement)", "(khaali arrangement)")}
        </T>
      </Fade>
    </Scene>
  );
}
