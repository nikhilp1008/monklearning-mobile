/**
 * M11 Ch12 · Section 13 — "Taming a 1-to-the-infinity form"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples. board_content seq1 heading ("Advanced: taming a
 * 1-to-the-infinity form") -> always-on title, distinct from DB title ("Taming a
 * 1-to-the-infinity form"). ONE example (lim(x→0) (cos x)^(1/x²)) worked in full by
 * applying Sec11's 1^∞ master rule (lim[f]^g = e^(lim g(f−1))), closing with a
 * reflective "pattern to internalise" summary that wraps up the whole worked-examples
 * arc (this section + Sec12 together) — hence the closing gets a distinct amber
 * "key insight" treatment (Sec7's amber-bordered pro-tip motif) rather than another
 * red/green worked-example beat.
 *
 * Only 7 reveal values this time (beats 0-6): beat0 = seq1 heading (always-on title),
 * beats1-6 = seq2-7.
 *
 * board_reveal_at_english  = [0.0, 9.64, 22.87, 36.1, 52.74, 65.97, 78.94].
 * board_reveal_at_hinglish = [0.0, 8.02, 21.68, 33.03, 52.65, 66.31, 79.02].
 *
 * Vertical stack (single-column, centered on x540 — this section has one flowing
 * derivation rather than Sec12's multi-example grid, so no column split needed):
 *  beat1 y~96-170   state the limit (real <Limit>) + identify the 1^∞ form
 *  beat2 y~194-277  master rule restated, boxed GREEN card (HIGH — the tool applied),
 *                   real <Limit> for the lim[f]^g condition, callback chip matches
 *                   Sec11's exact "e^(lim g(f−1))" chip styling
 *  beat3 y~302-366  compute g(f−1): row1 sets it up, row2 flips the sign and routes
 *                   through Sec11's own half-angle junction (1−cosx)/x²→1/2, negated —
 *                   no repeated <Limit>/<Frac> needed, this is pointwise algebra
 *                   (the "→" is the limit step, not the "="), matching Sec11's own
 *                   arrow-shorthand convention for junction-table results
 *  beat4 y~378-422  land it (HIGH): (cos x)^(1/x²) → e^(−1/2) = boxed green 1/√e,
 *                   checkD sanity stamp beside the chip (Sec12's landing convention)
 *  divider y447, amber box y464-584 (beats 5-6, the reflective closer):
 *  beat5  heading "The pattern to internalise" + box border + divider (amber, normal)
 *  beat6  the closing mantra (two lines) + checkD stamp — amber "key insight" box,
 *         not a warning red, since this is a takeaway not a guardrail
 *
 * Box-width arithmetic (Anek sans, width ≈ 0.50×size×chars, over-estimated):
 *  beat1 limit text "(cos x)^(1/x²)" 14ch@20 = 140. identify sentence ~47ch@15 = 352.5.
 *  beat2 condition "f → 1, g → ∞" 12ch@10(half-size subscript) = 60; "[f]^g =" 7ch@20 = 70;
 *   chip text "e^(lim g(f−1))" 14ch@18 = 126 (+26 pad = 152, chip w155).
 *  beat3 row1 "g(f − 1) = (cos x − 1)/x²" 25ch@18 = 225; row2 "= −(1 − cos x)/x² → −1/2"
 *   24ch@18 = 216.
 *  beat4 "(cos x)^(1/x²)" 14ch@22 = 154; "e^(−1/2)" 8ch@22 = 88; chip "1/√e" 4ch@24 = 48
 *   (+26 pad = 74, chip w80).
 *  beat6 longest line (EN) "Spot a base → 1 with an exponent → ∞?" 37ch@17 = 314.5 — fits
 *   easily inside the 760-wide amber box (160-920) with 40px+ padding either side.
 * All rows land well under their available width, per the "generous, not just
 * gate-passing" guidance.
 *
 * Row-height arithmetic (Anek sans: top = y−0.78×size, bottom = y+0.31×size):
 * every stacked pair below was placed with ≥14px text-text / ≥10px text-stroke /
 * ≥24px group-group clearance, verified by hand before first render (see commit
 * history of this file's planning) — re-checked against real getBoundingClientRect
 * after the first screenshot pass per Step 3.
 *
 * Layout plan (x-range × y-range per element):
 *  b1 | Limit x→0 (20,ink,start)                    | Limit | x433..~458  y96.4..118.2(bl112+cond)
 *  b1 | "(cos x)^(1/x²)" (20,ink,start)              | T st  | x508..648   y96.4..118.2 (bl112)
 *  b1 | identify sentence (15,ink,mid)               | T mid | x364..716(en)/~716(hi) y143.3..159.65 (bl155)
 *  b1 | underline                                    | Draw  | x362..718 y170
 *  b2 | card roundRectD(320,194,440,83,16) green sw3 | Draw  | x320..760 y194..277
 *  b2 | tag "MASTER RULE" (12,green_dark,w800,st)    | T st  | x340..~412  bl214
 *  b2 | Limit f→1,g→∞ (20,ink,start)                 | Limit | x380..~440  y232.4..260.4+ (bl248+cond)
 *  b2 | "[f]^g =" (20,ink,start)                     | T st  | x455..525   bl248
 *  b2 | Chip "e^(lim g(f−1))" (18,green)              | Chip  | x545..700 y223..261
 *  b3 | row1 "g(f − 1) = (cos x − 1)/x²" (18,ink,mid) | T mid | x427.5..652.5 bl316
 *  b3 | row2 "= −(1 − cos x)/x² → −1/2" (18,ink,mid)  | T mid | x432..648 bl350
 *  b3 | underline                                    | Draw  | x400..680 y366
 *  b4 | "(cos x)^(1/x²)" (22,ink,start)               | T st  | x325..479   bl408
 *  b4 | "→" (22,ink,mid)                              | T mid | x495..509   bl408
 *  b4 | "e^(−1/2)" (22,ink,start)                     | T st  | x524..612   bl408
 *  b4 | "=" (22,ink,mid)                              | T mid | x627..641   bl408
 *  b4 | Chip "1/√e" (24,green)                        | Chip  | x657..737 y378..422
 *  b4 | checkD beside chip                            | Draw  | x753..771 y391..409 (checkD@762,400)
 *  b5 | divider                                       | Draw  | x100..980 y447
 *  b5 | amber box M160,464..920,584                   | Draw  | x160..920 y464..584
 *  b5 | heading "The pattern to internalise" (15,amber_dark,w800,mid) | T mid | x~438..642(en) bl488
 *  b6 | line1 (17,ink,w600,mid)                       | T mid | x~383..697(en, widest) bl522
 *  b6 | line2 (17,ink,w600,mid)                       | T mid | x~417..663(en) bl557
 *  b6 | checkD beside line2                            | Draw  | x692..710 y549..565 (checkD@700,557)
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
import { Limit, roundRectD, checkD } from "./math-kit";

export default function M11Ch12Sec13({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={26} fill={RED} anchor="middle" script>
          {t(
            "Advanced: taming a 1-to-the-infinity form",
            "Advanced: 1-to-infinity form ko tame karna"
          )}
        </T>
      </Fade>

      {/* beat 1 — state the limit, identify the 1^∞ form */}
      <Limit on={beat >= 1} delay={dl(1, 0)} x={433} y={112} size={20} condition="x → 0" anchor="start" fill={INK} />
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={508} y={112} size={20} fill={INK} anchor="start">
          (cos x)^(1/x²)
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.2)}>
        <T x={540} y={155} size={15} fill={INK} anchor="middle">
          {t(
            "As x→0, cos x→1 and 1/x²→∞ — the form is 1^∞.",
            "x→0 par cos x→1 aur 1/x²→∞ — yeh form 1^∞ hai."
          )}
        </T>
      </Fade>
      <Draw on={beat >= 1} d="M362 170 L718 170" stroke={AMBER_DARK} sw={1.6} delay={dl(1, 1.9)} />

      {/* beat 2 — restate the master rule from Sec11 (HIGH, boxed) */}
      <Draw on={beat >= 2} d={roundRectD(320, 194, 440, 83, 16)} stroke={GREEN} sw={3} delay={dl(2, 0)} />
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={340} y={214} size={12} fill={GREEN_DARK} anchor="start" weight={800}>
          MASTER RULE
        </T>
      </Fade>
      <Limit on={beat >= 2} delay={dl(2, 0.8)} x={380} y={248} size={20} condition="f → 1, g → ∞" anchor="start" fill={INK} />
      <Fade on={beat >= 2} delay={dl(2, 1.1)}>
        <T x={455} y={248} size={20} fill={INK} anchor="start">
          [f]^g =
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <Chip x={545} y={223} w={155} h={38} fill={CREAM} stroke={GREEN} textFill={GREEN_DARK} size={18} script={false}>
          e^(lim g(f−1))
        </Chip>
      </Fade>

      {/* beat 3 — compute g(f−1), flip the sign, route through Sec11's half-angle junction */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={540} y={316} size={18} fill={INK} anchor="middle">
          g(f − 1) = (cos x − 1)/x²
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={540} y={350} size={18} fill={INK} anchor="middle">
          = −(1 − cos x)/x² → −1/2
        </T>
      </Fade>
      <Draw on={beat >= 3} d="M400 366 L680 366" stroke={AMBER_DARK} sw={1.6} delay={dl(3, 1.8)} />

      {/* beat 4 — land it (HIGH, boxed green) */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={325} y={408} size={22} fill={INK} anchor="start">
          (cos x)^(1/x²)
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={502} y={408} size={22} fill={INK} anchor="middle">
          →
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.7)}>
        <T x={524} y={408} size={22} fill={INK} anchor="start">
          e^(−1/2)
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.1)}>
        <T x={634} y={408} size={22} fill={INK} anchor="middle">
          =
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <Chip x={657} y={378} w={80} h={44} fill={CREAM} stroke={GREEN} textFill={GREEN_DARK} size={24} script={false}>
          1/√e
        </Chip>
      </Fade>
      <Draw on={beat >= 4} d={checkD(762, 400, 18)} stroke={GREEN} sw={2.2} delay={dl(4, 2)} />

      {/* divider before the reflective closer */}
      <Draw on={beat >= 5} d="M100 447 L980 447" stroke={AMBER_DARK} sw={1} delay={dl(5, 0)} />

      {/* beat 5 — amber "key insight" box + heading (closes out the whole worked-examples arc) */}
      <Draw on={beat >= 5} d="M160 464 L920 464 L920 584 L160 584 Z" stroke={AMBER_DARK} sw={2.2} delay={dl(5, 0.5)} />
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        <T x={540} y={488} size={15} fill={AMBER_DARK} anchor="middle" weight={800}>
          {t("The pattern to internalise", "Yaad rakhne wala pattern")}
        </T>
      </Fade>

      {/* beat 6 — the closing mantra */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={540} y={522} size={17} fill={INK} anchor="middle" weight={600}>
          {t(
            "Spot a base → 1 with an exponent → ∞?",
            "Base → 1, exponent → ∞ dikhe?"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={540} y={557} size={17} fill={INK} anchor="middle" weight={600}>
          {t(
            "Write e^(lim g(f−1)) at once.",
            "Turant likhiye e^(lim g(f−1))."
          )}
        </T>
      </Fade>
      <Draw on={beat >= 6} d={checkD(700, 557, 16)} stroke={GREEN} sw={2.2} delay={dl(6, 1.2)} />
    </Scene>
  );
}
