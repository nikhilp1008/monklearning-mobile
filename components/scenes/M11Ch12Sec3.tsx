/**
 * M11 Ch12 · Section 3 — "When substitution fails: the 0/0 toolkit"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept — subtopic 1 (Limits: Concepts & Algebra), third section.
 *
 * board_reveal_at_english = [0, 10.67, 26.28, 39.34, 44.46, 58.11, 72.79, 88.06] (8 beats 0-7).
 * board_reveal_at_hinglish = [0, 10.67, 26.62, 36.01, 43.69, 57.69, 75.43, 87.89].
 *
 * Single-column top-to-bottom flow (a linear derivation reads better stacked than
 * split into two columns — the star result must be seen, then re-derived directly
 * beneath it): intro (b1) -> red-margin quotient guardrail (b2) -> the boxed star
 * limit, HIGH emphasis (b3) -> its factoring proof (b4) -> cancel+substitute
 * explanation with a cancel-tick on the proof (b5) -> two-procedure summary chips
 * (b6) -> the conjugate identity that powers Procedure B (b7).
 *
 * Beats:
 *  0(title, always-on) | "When substitution fails: the 0/0 toolkit"
 *  1 | intro: algebra-of-limits works because destinations add/multiply + underline
 *  2 | red-margin guardrail: quotient rule needs M ≠ 0
 *  3 | THE STAR LIMIT boxed (HIGH): lim(x→a) (x^n−a^n)/(x−a) = n·a^(n−1)  [Limit+Frac+Chip]
 *  4 | proof step 1: x^n − a^n = (x−a)(x^(n−1)+x^(n−2)a+...+a^(n−1))  + landing underline
 *  5 | proof step 2 text: cancel (x−a), substitute x=a, n terms → a^(n−1)  + cancel-tick on b4
 *  6 | two workhorse chips: Procedure A (factor & cancel) / Procedure B (conjugate)
 *  7 | conjugate identity: (√p−√q)(√p+√q) = p−q  + checkmark landing it
 *
 * Layout plan (x-range × y-range per element; longer-language box noted where it
 * differs from English):
 *  b1 | intro line 1 (15,ink,start)         | T st   | x60..~330(en)/~322(hi)  y92..116  (bl104)
 *  b1 | intro line 2 (15,ink,start)         | T st   | x60..~345(en)/~382(hi)  y116..140 (bl128)
 *  b1 | underline                           | Draw   | x58..450 y140
 *  b2 | red bar                             | Draw   | x60 y168..229
 *  b2 | note line1 (15,red,w700,start)      | T st   | x76..~286(en)/~316(hi) y176..200 (bl188)
 *  b2 | note line2 (15,red,w700,start)      | T st   | x76..~398(en)/~496(hi) y198..222 (bl210)
 *  b3 | outer landing box (green)           | Draw   | roundRectD(316,253,449,79) x316..765 y253..332
 *  b3 | Limit x→a (26,ink,start)            | Limit  | x328..367  y280..320
 *  b3 | Frac x^n−a^n / x−a (26,ink)         | Frac   | x382..522  y265..317 (cx452)
 *  b3 | "=" (30,ink,mid)                    | T mid  | x543..563  y277..309
 *  b3 | boxed "n · a^(n−1)" (24,green)      | Chip   | x583..753  y271..317
 *  b4 | "x^n − a^n" (19,ink,start)          | T st   | x273..358  y357..378
 *  b4 | "=" (19,ink,start)                  | T st   | x368..388  y357..378
 *  b4 | "(x − a)" (19,ink,start)            | T st   | x398..465  y357..378 — b5's cancel target
 *  b4 | "(x^(n−1)+x^(n−2)a+...+a^(n−1))" (19,ink,start) | T st | x464..806  y357..378
 *  b4 | landing underline under RHS         | Draw   | x464..806 y388
 *  b5 | cancel-tick over b4's "(x − a)"      | Draw   | x406..457 y360..375
 *  b5 | line1 (16,ink,mid)                   | T mid  | x~360..720(en)/~360..720(hi) y415..441 (bl428)
 *  b5 | line2 (16,ink,w700,mid)              | T mid  | x~392..688(en)/~403..677(hi) y441..459 (bl454)
 *  b6 | Chip A "Procedure A — factor & cancel (x−a)" | Chip | x220..520 y484..528
 *  b6 | Chip B "Procedure B — multiply by conjugate" | Chip | x560..860 y484..528
 *  b6 | connector line under both chips      | Draw   | x220..860 y536
 *  b7 | "(√p−√q)(√p+√q) = " (22,ink,start)   | T st   | x384..626  y563..588
 *  b7 | "p − q" (24,green,w800,start)        | T st   | x636..696  y562..589
 *  b7 | checkmark landing it                 | Draw   | checkD(712,573,16) x704..720 y566..578
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
  AMBER_DARK,
  GREEN,
  GREEN_DARK,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { Frac, Limit, roundRectD, checkD } from "./math-kit";

export default function M11Ch12Sec3({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={26} fill={RED} anchor="middle" script>
          {t("When substitution fails: the 0/0 toolkit", "Jab substitution 0/0 de: yeh hai toolkit")}
        </T>
      </Fade>

      {/* beat 1 — intro: why the algebra-of-limits rules are legal */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={60} y={104} size={15} fill={INK} anchor="start">
          {t("Algebra of limits is legal because", "Algebra ke rules legal hain kyunki")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={60} y={128} size={15} fill={INK} anchor="start">
          {t("destinations simply add and multiply.", "har destination bas add/multiply hoti hai.")}
        </T>
      </Fade>
      <Draw on={beat >= 1} d="M58 140 L450 140" stroke={AMBER_DARK} sw={1.6} delay={dl(1, 0.9)} />

      {/* beat 2 — red-margin guardrail: quotient rule needs M ≠ 0 */}
      <Draw on={beat >= 2} d="M60 168 L60 229" stroke={RED} sw={3} delay={dl(2, 0)} />
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={76} y={188} size={15} fill={RED} anchor="start" weight={700}>
          {t("Quotient rule needs M ≠ 0 —", "Quotient rule ki shart: M ≠ 0 —")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.7)}>
        <T x={76} y={210} size={15} fill={RED} anchor="start" weight={700}>
          {t(
            "dividing by something vanishing explodes.",
            "kisi vanishing cheez se divide karna explode karta hai."
          )}
        </T>
      </Fade>

      {/* beat 3 — THE STAR LIMIT, boxed, HIGH emphasis */}
      <Limit on={beat >= 3} delay={dl(3, 0)} x={328} y={300} size={26} condition="x → a" anchor="start" fill={INK} />
      <Frac
        on={beat >= 3}
        delay={dl(3, 0.5)}
        x={452}
        y={300}
        size={26}
        numerator="x^n − a^n"
        denominator="x − a"
        width={140}
        fill={INK}
      />
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={553} y={300} size={30} fill={INK} anchor="middle">
          =
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <Chip x={583} y={271} w={170} h={46} fill={CREAM} stroke={GREEN} textFill={GREEN_DARK} size={24} script={false}>
          n · a^(n−1)
        </Chip>
      </Fade>
      <Draw on={beat >= 3} d={roundRectD(316, 253, 449, 79)} stroke={GREEN} sw={2.4} delay={dl(3, 2)} dur={1.2} />

      {/* beat 4 — proof step 1: factor x^n − a^n */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={273} y={372} size={19} fill={INK} anchor="start">
          x^n − a^n
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={368} y={372} size={19} fill={INK} anchor="start">
          =
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={398} y={372} size={19} fill={INK} anchor="start">
          (x − a)
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.3)}>
        <T x={464} y={372} size={19} fill={INK} anchor="start">
          (x^(n−1) + x^(n−2)a + ... + a^(n−1))
        </T>
      </Fade>
      <Draw on={beat >= 4} d="M464 388 L806 388" stroke={AMBER_DARK} sw={1.6} delay={dl(4, 2)} />

      {/* beat 5 — cancel (x−a), substitute x=a, land n·a^(n−1) again */}
      <Draw on={beat >= 5} d="M406 375 L457 360" stroke={AMBER_DARK} sw={1.8} delay={dl(5, 0)} dur={0.6} />
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={540} y={428} size={16} fill={INK} anchor="middle">
          {t("Cancel (x − a), then substitute x = a:", "Common (x − a) cancel karo, phir x = a rakho:")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={540} y={454} size={16} fill={INK} anchor="middle" weight={700}>
          {t("each of the n terms becomes a^(n−1).", "har ek term ban jaata hai a^(n−1).")}
        </T>
      </Fade>

      {/* beat 6 — the two workhorse procedures */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <Chip x={220} y={484} w={300} h={44} fill={CREAM} stroke={AMBER_DARK} textFill={AMBER_DARK} size={15} script={false}>
          {t("Procedure A — factor & cancel (x−a)", "A — factor karke (x−a) cancel karo")}
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <Chip x={560} y={484} w={300} h={44} fill={CREAM} stroke={AMBER_DARK} textFill={AMBER_DARK} size={15} script={false}>
          {t("Procedure B — multiply by conjugate", "B — conjugate multiply karo")}
        </Chip>
      </Fade>
      <Draw on={beat >= 6} d="M220 536 L860 536" stroke={AMBER_DARK} sw={1.6} delay={dl(6, 1)} />

      {/* beat 7 — the conjugate identity behind Procedure B */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <T x={384} y={581} size={22} fill={INK} anchor="start">
          (√p − √q)(√p + √q) =
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={636} y={581} size={24} fill={GREEN_DARK} anchor="start" weight={800}>
          p − q
        </T>
      </Fade>
      <Draw on={beat >= 7} d={checkD(712, 573, 16)} stroke={GREEN} sw={2.2} delay={dl(7, 1.2)} />
    </Scene>
  );
}
