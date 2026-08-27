/**
 * M11 Ch12 · Section 29 — "Handling infinity, and jumps, without mistakes"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept — subtopic 5 (Limits at Infinity & Special Cases), second section,
 * directly after Sec28 (which opened this subtopic with the rational-function-at-infinity
 * example and the greatest-integer staircase diagram). This section gives the THREE working
 * PROCEDURES that generalize Sec28's worked examples into reusable rules, framed by four
 * foundational caveats about ∞ not being a number.
 *
 * board_reveal_at_english  = [0.0, 6.57, 25.86, 44.63, 65.19, 82.6, 101.12, 118.02] (8 beats 0-7).
 * board_reveal_at_hinglish = [0.0, 6.66, 24.41, 44.29, 62.72, 81.92, 98.05, 114.18].
 * beat0 = seq1 heading, always-on title. beats 1-7 = seq2-8, gated `beat >= k`.
 *
 * Mostly text + formula (no major diagram — Sec28 already delivered the visuals for this
 * subtopic): a red-margin foundational caveat (b1) + supporting caveats, the 1/x sign
 * example folded into text rather than drawn since the vertical budget is tight across
 * seven beats (b2), then THREE labeled procedure rows — A (b3, normal, extends Sec28's
 * own rational-limit example with the actual ÷x² mechanics Sec28's audio skipped), B (b4,
 * HIGH, the ∞−∞ surd trick landed in a boxed green result), C (b5 stated + b6 its concrete
 * greatest-integer application, nested directly under C's row) — closing on a red banner
 * that reprises Sec2's original LHL=RHL comparison rule (b7).
 *
 * Layout plan (x-range × y-range per element; longer-language box noted where it differs):
 *  b0 | title (24,red,script,mid)            | T mid   | x~223..857(en)/~228..852(hi) y33..70 (bl58)
 *  b1 | red margin bar                        | Draw    | x50 y96..156
 *  b1 | caveat line1 (16,red,w700,start)      | T st    | x66..~322(en)/~346(hi) y105..123 (bl118)
 *  b1 | caveat line2 (16,red,w700,start)      | T st    | x66..~322 y137..155 (bl150)
 *  b2 | caveat line1 (15,ink,start)           | T st    | x66..~400(en)/~410(hi) y190..207 (bl202)
 *  b2 | caveat+example line2 (15,ink,start)   | T st    | x66..~704(en)/~636(hi) y222..239 (bl234)
 *  b2 | underline                              | Draw    | x66..720 y250
 *  b3 | dash accent (amber)                    | Draw    | x40..58 y304
 *  b3 | "Procedure A —" (16,amber,w700,start) | T st    | x66..~178 y288..305 (bl300)
 *  b3 | instruction (15,ink,start)             | T st    | x210..~705(en)/~700(hi) y288..305 (bl300)
 *  b3 | recap formula (13,amber,start)         | T st    | x66..~339 y320..334 (bl330)
 *  b4 | "Procedure B —" (15,amber,w700,start) | T st    | x66..~171 y388..405 (bl400)
 *  b4 | Limit x→∞ (17,ink,start)              | Limit   | x195..~221 y375..413 (bl400+cond)
 *  b4 | expr "√(x²+bx) − x" (17,ink,start)    | T st    | x255..~357 y376..405 (bl400)
 *  b4 | "=" (19,ink,mid)                       | T mid   | x387 y379..405 (bl400)
 *  b4 | Frac bx/[√(x²+bx)+x] (18,ink,w170)    | Frac    | x420..590 y375..412 (cx505,bl400)
 *  b4 | "÷x" arrow                             | Draw    | x608..638 y400
 *  b4 | "÷x" label (11,amber,mid)              | T mid   | x623 y384..391 (bl388)
 *  b4 | "=" (19,ink,mid)                       | T mid   | x660 y379..405 (bl400)
 *  b4 | boxed "b/2" (22,green)                 | Chip    | x680..744 y379..421
 *  b5 | dash accent (amber)                    | Draw    | x40..58 y458
 *  b5 | "Procedure C —" (15,amber,w700,start) | T st    | x66..~171 y450..467 (bl462)
 *  b5 | instruction (15,ink,start)             | T st    | x210..~623(en)/~641(hi) y450..467 (bl462)
 *  b6 | nesting connector                      | Draw    | x90 y478..492
 *  b6 | "just below n: [x]=n−1" (15,ink,start) | T st    | x110..~305(en)/~297(hi) y508..525 (bl520)
 *  b6 | "just above n: [x]=n" (15,ink,start)   | T st    | x520..~685(en)/~670(hi) y508..525 (bl520)
 *  b7 | red banner box                         | Draw    | x220..860 y549..593
 *  b7 | banner text (17,red,w800,mid)          | T mid   | x302..778 y564..593 (bl577)
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
  arrowD,
  Scene,
} from '@/components/scenes/kit';
import { Frac, Limit } from "./math-kit";

export default function M11Ch12Sec29({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={24} fill={RED} anchor="middle" script>
          {t("Handling infinity, and jumps, without mistakes", "Infinity aur jump ko sambhalna, bina galti ke")}
        </T>
      </Fade>

      {/* beat 1 — foundational caveat, red margin, HIGH */}
      <Draw on={beat >= 1} d="M50 96 L50 156" stroke={RED} sw={3} delay={dl(1, 0)} />
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={66} y={118} size={16} fill={RED} anchor="start" weight={700}>
          {t("∞ is a direction, not a number —", "∞ ek direction hai, number nahin —")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.7)}>
        <T x={66} y={150} size={16} fill={RED} anchor="start" weight={700}>
          {t("∞−∞ and ∞/∞ are indeterminate.", "∞−∞ aur ∞/∞ indeterminate hain.")}
        </T>
      </Fade>

      {/* beat 2 — two more caveats + a compact 1/x example folded into text */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={66} y={202} size={15} fill={INK} anchor="start">
          {t(
            "'Limit = ∞' describes behaviour, not a value;",
            "'Limit = ∞' behaviour batata hai, value nahin;"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.5)}>
        <T x={66} y={234} size={15} fill={INK} anchor="start">
          {t(
            "one-sided infinite limits can disagree in sign — 1/x → +∞ right of 0, −∞ left of 0.",
            "one-sided infinite limits sign mein disagree: 1/x → +∞ (right), −∞ (left)."
          )}
        </T>
      </Fade>
      <Draw on={beat >= 2} d="M66 250 L720 250" stroke={AMBER_DARK} sw={1.6} delay={dl(2, 1)} />

      {/* beat 3 — Procedure A: divide by the highest power (extends Sec28's own example) */}
      <Draw on={beat >= 3} d="M40 304 L58 304" stroke={AMBER_DARK} sw={3} delay={dl(3, 0)} />
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={66} y={300} size={16} fill={AMBER_DARK} anchor="start" weight={700}>
          {t("Procedure A —", "Procedure A —")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={210} y={300} size={15} fill={INK} anchor="start">
          {t(
            "divide every term by the highest power of x in the denominator.",
            "har term ko denominator ki highest power of x se divide kijiye."
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.1)}>
        <T x={66} y={330} size={13} fill={AMBER_DARK} anchor="start">
          (3x²+5)/(6x²−x) → (3+5/x²)/(6−1/x) → 1/2
        </T>
      </Fade>

      {/* beat 4 — Procedure B: the ∞−∞ surd trick, landed in a boxed green result (HIGH) */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={66} y={400} size={15} fill={AMBER_DARK} anchor="start" weight={700}>
          {t("Procedure B —", "Procedure B —")}
        </T>
      </Fade>
      <Limit on={beat >= 4} delay={dl(4, 0.3)} x={195} y={400} size={17} condition="x → ∞" anchor="start" fill={INK} />
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={255} y={400} size={17} fill={INK} anchor="start">
          √(x²+bx) − x
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.9)}>
        <T x={387} y={400} size={19} fill={INK} anchor="middle">
          =
        </T>
      </Fade>
      <Frac
        on={beat >= 4}
        delay={dl(4, 1.2)}
        x={505}
        y={400}
        size={18}
        numerator="bx"
        denominator="√(x²+bx) + x"
        width={170}
        fill={INK}
      />
      <Draw on={beat >= 4} d={arrowD(608, 400, 638, 400)} stroke={AMBER_DARK} sw={2} delay={dl(4, 1.8)} />
      <Fade on={beat >= 4} delay={dl(4, 1.8)}>
        <T x={623} y={388} size={11} fill={AMBER_DARK} anchor="middle">
          ÷x
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.3)}>
        <T x={660} y={400} size={19} fill={INK} anchor="middle">
          =
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.6)}>
        <Chip x={680} y={379} w={64} h={42} fill={CREAM} stroke={GREEN} textFill={GREEN_DARK} size={22} script={false}>
          b/2
        </Chip>
      </Fade>

      {/* beat 5 — Procedure C, stated: never substitute at a jump */}
      <Draw on={beat >= 5} d="M40 458 L58 458" stroke={AMBER_DARK} sw={3} delay={dl(5, 0)} />
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={66} y={462} size={15} fill={AMBER_DARK} anchor="start" weight={700}>
          {t("Procedure C —", "Procedure C —")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={210} y={462} size={15} fill={INK} anchor="start">
          {t(
            "at a jump, never substitute — split into LHL and RHL.",
            "jump par kabhi substitute mat kijiye — LHL/RHL mein split kijiye."
          )}
        </T>
      </Fade>

      {/* beat 6 — the concrete greatest-integer application, nested under Procedure C */}
      <Draw on={beat >= 6} d="M90 478 L90 492" stroke={AMBER_DARK} sw={2} delay={dl(6, 0)} />
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={110} y={520} size={15} fill={INK} anchor="start">
          {t("just below n:  [x] = n − 1", "n se neeche:  [x] = n − 1")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={520} y={520} size={15} fill={INK} anchor="start">
          {t("just above n:  [x] = n", "n se upar:  [x] = n")}
        </T>
      </Fade>

      {/* beat 7 — closing comparison-rule callback, red banner, HIGH */}
      <Draw on={beat >= 7} d="M220 549 L860 549 L860 593 L220 593 Z" stroke={RED} sw={2.2} delay={dl(7, 0)} />
      <Fade on={beat >= 7} delay={dl(7, 0.5)}>
        <T x={540} y={577} size={17} fill={RED} anchor="middle" weight={800}>
          {t(
            "Equal and finite ⇒ limit exists; otherwise it does not.",
            "Barabar aur finite ⇒ limit exist karti hai; warna nahin."
          )}
        </T>
      </Fade>
    </Scene>
  );
}
