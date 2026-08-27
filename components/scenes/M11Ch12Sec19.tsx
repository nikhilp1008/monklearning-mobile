/**
 * M11 Ch12 · Section 19 — "Derivative of √x, and a disguised derivative"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples. board_content seq1 heading ("Worked example: derivative of
 * √x from first principle") -> always-on title, distinct from the DB title ("Derivative of
 * √x, and a disguised derivative") — the app chrome shows the latter, the board shows the former.
 *
 * board_reveal_at_english  = [0.0, 6.83, 21.85, 38.91, 54.53, 64.51, 81.66, 94.63] (8 beats 0-7).
 * board_reveal_at_hinglish = [0.0, 5.38, 20.14, 34.9, 48.47, 60.59, 75.69, 86.19].
 *
 * TWO worked examples stacked, divided by a horizontal rule (M11Ch12Sec5 pattern):
 * TOP zone = Example 1 (√x from first principle via rationalization), y~99-338.
 * BOTTOM zone = Example 2, the disguised-derivative speed trap, y~371-563.
 *
 * Beats:
 *  0(title, always-on) | "Worked example: derivative of √x from first principle"
 *  1 | seq2: difference quotient [√(x+h)−√x]/h, declare 0/0 at h=0 (surd → rationalise)
 *  2 | seq3: multiply by the conjugate — Frac1 · Frac2(conj/conj) = Frac3(1/[√(x+h)+√x])
 *  3 | seq4 HIGH: take the limit — f'(x) = lim(h→0) 1/[√(x+h)+√x] = 1/(2√x), boxed+ringed
 *  4 | seq5: Example 2 heading "Speed trap: a disguised derivative" + the raw limit
 *      lim(h→0) [(2+h)¹⁰ − 2¹⁰]/h
 *  5 | seq6: staged wrong move "✗ expand (2+h)¹⁰ …" crossed out in red, then the recognition
 *      move in green — this is f'(2) for f(x) = x¹⁰
 *  6 | seq7 HIGH: apply the standard result — f'(2) = 10 · 2⁹ = 10 · 512 = 5120, boxed+checked
 *  7 | seq8 red-margin HIGH: closing guardrail — any [f(a+h)−f(a)]/h shape is a derivative,
 *      read off f'(a). Placed in the RIGHT MARGIN (x740+) beside beats 4-6, mirroring Sec5's
 *      strategy of using unused horizontal space rather than stacking a 4th row below beat 6
 *      (there isn't vertical room left below y563 for a full bar+3-line note before y596).
 *
 * Layout plan (x-range × y-range per element; Frac/Limit's `y` behaves like a shared baseline
 * for alignment with adjacent T/Limit elements, same convention as Sec5/17/18):
 *  title  | T mid script (22,red)         | x219..861(en)/225..855(hi) y31..71 (bl60)
 *  b1 | Frac √(x+h)−√x / h (18,ink,w120)  | Frac | x480..600 y99..136 (cx540,bl124)
 *  b1 | step text (14,ink,mid)            | T mid | x421..659(en)/379..701(hi) y153..168 (bl164)
 *  b1 | underline                          | Draw | x340..740 y184
 *  b2 | Frac1 √(x+h)−√x / h (16,w100)     | Frac | x350..450 y206..239 (cx400,bl228)
 *  b2 | "·" (18,ink,mid)                   | T mid | x465..475 y228
 *  b2 | Frac2 conj/conj (16,w100)          | Frac | x490..590 y206..239 (cx540,bl228)
 *  b2 | "=" (18,ink,mid)                   | T mid | x605..615 y228
 *  b2 | Frac3 1/(√(x+h)+√x) (16,w100)     | Frac | x630..730 y206..239 (cx680,bl228)
 *  b3 | "f'(x) =" (19,ink,st,w700)         | T st | x310..376 y281..307 (bl296)
 *  b3 | Limit h→0 (18,ink,st)              | Limit | x410..452 y282..310 (bl296)
 *  b3 | Frac 1/(√(x+h)+√x) (18,ink,w120)  | Frac | x499..591 y271..308 (cx545,bl296)
 *  b3 | "=" (20,ink,mid)                   | T mid | x645..655 y296
 *  b3 | boxed "1/(2√x)" (20,green)         | Chip | x690..800 y275..315
 *  b3 | ring around chip                   | Draw | ringD(745,295,69,32)
 *  --divider--                             | Draw | x100..980 y356
 *  b4 | speed-trap heading (16,red,w800,mid) | T mid | x404..676(en)/408..672(hi) y372..389 (bl384)
 *  b4 | Limit h→0 (18,ink,st)              | Limit | x430..452 y406..444 (bl430)
 *  b4 | Frac (2+h)¹⁰−2¹⁰ / h (18,ink,w150) | Frac | x515..665 y405..442 (cx590,bl430)
 *  b5 | "Not this:" (13.5,muted,st)        | T st | x440..501 y461..476 (bl472)
 *  b5 | wrong-move text (15,red,w700,st)   | T st | x520..655(en)/520..700(hi) y460..477 (bl472)
 *  b5 | cross-out over wrong-move text      | Draw | crossD(520,460,135or180,16)
 *  b5 | recognition text (15,green,w700,mid) | T mid | x390..690(en)/368..713(hi) y492..509 (bl504)
 *  b6 | "f'(2) = 10 · 2⁹" (20,ink,st,w700) | T st | x90..240 y536..558 (bl552)
 *  b6 | "=" (22,ink,mid)                   | T mid | x260..270 y552
 *  b6 | "10 · 512" (20,ink,st,w700)        | T st | x290..370 y536..558 (bl552)
 *  b6 | "=" (22,ink,mid)                   | T mid | x390..400 y552
 *  b6 | boxed "5120" (22,green)            | Chip | x420..500 y525..563
 *  b6 | checkmark beside chip               | Draw | checkD(525,544,18)
 *  b7 | red bar                             | Draw | x740 y376..470
 *  b7 | note 3 lines (13.5,red,w700,st)    | T st | x756..979 y385..446
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
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  GREEN_DARK,
  RED,
  CREAM,
  ringD,
  crossD,
  Scene,
} from '@/components/scenes/kit';
import { Frac, Limit, checkD } from "./math-kit";

export default function M11Ch12Sec19({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={60} size={22} fill={RED} anchor="middle" script>
          {t(
            "Worked example: derivative of √x from first principle",
            "Worked example: √x ka derivative, first principle se"
          )}
        </T>
      </Fade>

      {/* beat 1 — form the difference quotient, declare 0/0 */}
      <Frac on={beat >= 1} delay={dl(1, 0)} x={540} y={124} size={18} numerator="√(x+h) − √x" denominator="h" width={120} fill={INK} />
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <T x={540} y={164} size={14} fill={INK} anchor="middle">
          {t("h = 0 ⇒ 0/0 — a surd, rationalise.", "h = 0 pe milta 0/0 — surd, rationalise kijiye.")}
        </T>
      </Fade>
      <Draw on={beat >= 1} d="M340 184 L740 184" stroke={AMBER_DARK} sw={1.6} delay={dl(1, 1.1)} />

      {/* beat 2 — multiply by the conjugate, simplify */}
      <Frac on={beat >= 2} delay={dl(2, 0)} x={400} y={228} size={16} numerator="√(x+h) − √x" denominator="h" width={100} fill={INK} />
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={470} y={228} size={18} fill={INK} anchor="middle">
          ·
        </T>
      </Fade>
      <Frac on={beat >= 2} delay={dl(2, 0.5)} x={540} y={228} size={16} numerator="√(x+h) + √x" denominator="√(x+h) + √x" width={100} fill={INK} />
      <Fade on={beat >= 2} delay={dl(2, 0.9)}>
        <T x={610} y={228} size={18} fill={INK} anchor="middle">
          =
        </T>
      </Fade>
      <Frac on={beat >= 2} delay={dl(2, 1.1)} x={680} y={228} size={16} numerator="1" denominator="√(x+h) + √x" width={100} fill={INK} />

      {/* beat 3 — take the limit, land it boxed (HIGH) */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={310} y={296} size={19} fill={INK} anchor="start" weight={700}>
          f&apos;(x) =
        </T>
      </Fade>
      <Limit on={beat >= 3} delay={dl(3, 0.4)} x={410} y={296} size={18} condition="h → 0" anchor="start" fill={INK} />
      <Frac on={beat >= 3} delay={dl(3, 0.7)} x={545} y={296} size={18} numerator="1" denominator="√(x+h) + √x" width={120} fill={INK} />
      <Fade on={beat >= 3} delay={dl(3, 1.1)}>
        <T x={650} y={296} size={20} fill={INK} anchor="middle">
          =
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <Chip x={690} y={275} w={110} h={40} fill={CREAM} stroke={GREEN} textFill={GREEN_DARK} size={20} script={false}>
          1/(2√x)
        </Chip>
      </Fade>
      <Draw on={beat >= 3} d={ringD(745, 295, 69, 32)} stroke={GREEN} sw={2.2} delay={dl(3, 2.0)} />

      {/* divider between the two examples */}
      <Draw on={beat >= 4} d="M100 356 L980 356" stroke={AMBER_DARK} sw={1} delay={dl(4, 0)} />

      {/* beat 4 — speed-trap heading + the raw disguised limit */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={384} size={16} fill={RED} anchor="middle" weight={800}>
          {t("Speed trap: a disguised derivative", "Speed trap: chhupa hua derivative")}
        </T>
      </Fade>
      <Limit on={beat >= 4} delay={dl(4, 0.8)} x={430} y={430} size={18} condition="h → 0" anchor="start" fill={INK} />
      <Frac on={beat >= 4} delay={dl(4, 1.1)} x={590} y={430} size={18} numerator="(2+h)¹⁰ − 2¹⁰" denominator="h" width={150} fill={INK} />

      {/* beat 5 — stage the wrong move (crossed out), then the recognition move */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={440} y={472} size={13.5} fill={MUTED} anchor="start">
          {t("Not this:", "Yeh nahin:")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={520} y={472} size={15} fill={RED} anchor="start" weight={700}>
          {t("✗ expand (2+h)¹⁰ …", "✗ (2+h)¹⁰ expand karna …")}
        </T>
      </Fade>
      <Draw on={beat >= 5} d={en ? crossD(520, 460.3, 135, 16.35) : crossD(520, 460.3, 180, 16.35)} stroke={RED} sw={2.2} delay={dl(5, 1.0)} />
      <Fade on={beat >= 5} delay={dl(5, 1.4)}>
        <T x={540} y={504} size={15} fill={GREEN_DARK} anchor="middle" weight={700}>
          {t("Recognise: this is f'(2) for f(x) = x¹⁰.", "Pehchaniye: yeh f'(2) hai, f(x) = x¹⁰ ke liye.")}
        </T>
      </Fade>

      {/* beat 6 — apply the standard result, land 5120 (HIGH) */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={90} y={552} size={20} fill={INK} anchor="start" weight={700}>
          f&apos;(2) = 10 · 2⁹
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={265} y={552} size={22} fill={INK} anchor="middle">
          =
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.7)}>
        <T x={290} y={552} size={20} fill={INK} anchor="start" weight={700}>
          10 · 512
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.0)}>
        <T x={395} y={552} size={22} fill={INK} anchor="middle">
          =
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.4)}>
        <Chip x={420} y={525} w={80} h={38} fill={CREAM} stroke={GREEN} textFill={GREEN_DARK} size={22} script={false}>
          5120
        </Chip>
      </Fade>
      <Draw on={beat >= 6} d={checkD(525, 544, 18)} stroke={GREEN} sw={2.2} delay={dl(6, 1.8)} />

      {/* beat 7 — closing red-margin guardrail (right margin, beside beats 4-6) */}
      <Draw on={beat >= 7} d="M740 376 L740 470" stroke={RED} sw={3} delay={dl(7, 0)} dur={0.6} />
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={756} y={396} size={13.5} fill={RED} anchor="start" weight={700}>
          {t("Any limit shaped like", "Jis limit ka shape ho")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={756} y={419} size={13.5} fill={RED} anchor="start" weight={700}>
          {"(f(a+h) − f(a))/h"}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.9)}>
        <T x={756} y={442} size={13.5} fill={RED} anchor="start" weight={700}>
          {t("is a derivative — read off f'(a).", "woh derivative hai — f'(a) padho.")}
        </T>
      </Fade>
    </Scene>
  );
}
