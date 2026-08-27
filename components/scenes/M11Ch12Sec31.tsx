/**
 * M11 Ch12 · Section 31 — "Worked example: a rational limit at infinity"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples. board_content seq1 heading ("Worked example: a rational limit
 * at infinity") -> always-on title, distinct from the DB title ("A rational limit at infinity,
 * and a surd ∞−∞") — the app chrome shows the latter, the board shows the former.
 *
 * board_reveal_at_english  = [0.0, 13.31, 33.45, 46.42, 63.91, 75.43, 90.71, 101.55] (8 beats 0-7).
 * board_reveal_at_hinglish = [0.0, 10.24, 25.17, 37.63, 54.87, 66.3, 80.98, 92.84].
 *
 * TWO worked examples stacked, divided by a horizontal rule (M11Ch12Sec5/Sec19 pattern):
 * TOP zone = Example 1 (Procedure A: divide by x², a rational limit at ∞), y~90-218.
 * BOTTOM zone = Example 2, the ∞−∞ surd speed trap confirming Sec30's b/2 pattern, y~248-590.
 *
 * VERIFICATION (worked by hand before laying out pixels):
 *  (3x²+2x−1)/(5x²−x+4), x→∞: divide every term by x² → (3+2/x−1/x²)/(5−1/x+4/x²) → 3/5 as
 *   x→∞ (every 1/x^k → 0) ✓. Equal degree (m=n=2) ⇒ ratio of leading coeffs 3/5 — matches
 *   Sec30's own degree-rule master fact ✓.
 *  √(x²+x) − x, x→∞: rationalize by the conjugate → [(x²+x)−x²]/[√(x²+x)+x] = x/[√(x²+x)+x] →
 *   divide top/bottom by x → 1/[√(1+1/x)+1] → 1/[1+1] = 1/2 ✓. Matches Sec29/Sec30's general
 *   √(x²+bx)−x → b/2 pattern with b=1 ⇒ 1/2 ✓ — the section's own closing confirmation.
 *
 * Beats:
 *  0(title, always-on) | "Worked example: a rational limit at infinity"
 *  1 | seq2: state the original limit, then divide every term by x² (arrow annotation) into
 *      the transformed fraction — the literal seq2 formula is the transformed expression
 *  2 | seq3 HIGH: take the limit as x→∞, land boxed 3/5; small note confirms the degree-rule
 *      shortcut agrees (Sec30 callback)
 *  --divider--
 *  3 | seq4: speed-trap heading + the new limit √(x²+x)−x, staged wrong move "∞−∞ = 0 ✗"
 *      crossed out in red — the reversal beat itself
 *  4 | seq5: rationalize by the conjugate, landing the single fraction x/[√(x²+x)+x]
 *  5 | seq6 HIGH: divide top/bottom by x, land boxed 1/2
 *  6 | seq7: confirm the general b/2 pattern from Sec30/29 (b=1 here)
 *  7 | seq8 red-margin HIGH: closing reflex guardrail banner
 *
 * Layout plan (x-range × y-range per element; formulas are language-agnostic per
 * SCENE_AUTHORING_MATHS convention, only labels/headings differ EN/HI):
 *  title  | T mid script (22,red)              | x261..819(en)/280..800(hi) y30..69 (bl58)
 *  b1 | Limit x→∞ (16,ink,start)               | Limit | x66..90    y112..136 (bl124)
 *  b1 | Frac (3x²+2x−1)/(5x²−x+4) (17,ink,w140)| Frac  | x106..246  y101..135 (cx176,bl124)
 *  b1 | "÷x²" arrow                             | Draw  | x266..306 y124
 *  b1 | "÷x²" label (11,amber,mid)              | T mid | x278..294  y104..115 (bl112)
 *  b1 | "=" (19,ink,mid)                        | T mid | x326..336  y109..130 (bl124)
 *  b1 | Frac (3+2/x−1/x²)/(5−1/x+4/x²) (17,w160)| Frac  | x356..516  y101..135 (cx436,bl124)
 *  b2 | "→" (22,ink,mid)                        | T mid | x535..546  y107..131 (bl124)
 *  b2 | "(x→∞)" (11,ink,mid)                    | T mid | x526..554  y133..141 (bl137.6)
 *  b2 | boxed "3/5" (22,green)                  | Chip  | x600..664  y103..145
 *  b2 | ring around chip                        | Draw  | ringD(632,124,46,33)
 *  b2 | degree-rule note (14,amber,mid)         | T mid | x354..726(en)/358..722(hi) y184..199 (bl195)
 *  --divider--                                   | Draw  | x100..980 y218
 *  b3 | speed-trap heading (17,red,w800,mid)    | T mid | x332..748(en)/336..744(hi) y239..257 (bl252)
 *  b3 | Limit x→∞ (18,ink,start)                | Limit | x380..407  y283..312 (bl298)
 *  b3 | "√(x²+x) − x" (18,ink,start)            | T st  | x425..524  y284..303 (bl298)
 *  b3 | "Not this:" (13.5,muted,start)          | T st  | x425..486(en)/425..493(hi) y329..340 (bl340)
 *  b3 | "∞ − ∞ = 0 ✗" (16,red,w700,start)      | T st  | x510..598  y328..345 (bl340)
 *  b3 | cross-out over wrong-move text           | Draw  | crossD(510,327.5,88,17.4)
 *  b4 | "√(x²+x) − x" (17,ink,start)            | T st  | x150..244  y377..395 (bl390)
 *  b4 | "=" (19,ink,mid)                         | T mid | x268..278  y375..396 (bl390)
 *  b4 | Frac [(x²+x)−x²]/[√(x²+x)+x] (17,w130)  | Frac  | x298..428  y367..401 (cx363,bl390)
 *  b4 | "=" (19,ink,mid)                         | T mid | x453..463  y375..396 (bl390)
 *  b4 | Frac x/[√(x²+x)+x] (17,w130)             | Frac  | x483..613  y367..401 (cx548,bl390)
 *  b4 | landing underline                         | Draw  | x150..613 y415
 *  b5 | "÷x" arrow                                | Draw  | x100..140 y460
 *  b5 | "÷x" label (11,amber,mid)                | T mid | x112..128  y440..451 (bl448)
 *  b5 | Frac 1/[√(1+1/x)+1] (18,ink,w150)        | Frac  | x160..310  y435..472 (cx235,bl460)
 *  b5 | "→" (22,ink,mid)                          | T mid | x345..355  y443..467 (bl460)
 *  b5 | "(x→∞)" (11,ink,mid)                      | T mid | x336..364  y469..477 (bl473.6)
 *  b5 | boxed "1/2" (22,green)                    | Chip  | x400..464  y439..481
 *  b5 | ring around chip                           | Draw  | ringD(432,460,46,33)
 *  b6 | dash accent (amber)                        | Draw  | x40..58 y528
 *  b6 | pattern text (15,ink,start)                | T st  | x66..426(en)/66..426(hi) y517..532 (bl528)
 *  b7 | red banner box                              | Draw  | x140..940 y550..590 (roundRect r14)
 *  b7 | banner text (17,red,w800,mid)               | T mid | x242..838(en)/226..855(hi) y562..580 (bl575)
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
  arrowD,
  Scene,
} from '@/components/scenes/kit';
import { Frac, Limit, roundRectD } from "./math-kit";

export default function M11Ch12Sec31({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={22} fill={RED} anchor="middle" script>
          {t("Worked example: a rational limit at infinity", "Worked example: infinity par rational limit")}
        </T>
      </Fade>

      {/* beat 1 — state the original limit, divide every term by x² into the transformed fraction */}
      <Limit on={beat >= 1} delay={dl(1, 0)} x={66} y={124} size={16} condition="x → ∞" anchor="start" fill={INK} />
      <Frac on={beat >= 1} delay={dl(1, 0.4)} x={176} y={124} size={17} numerator="3x² + 2x − 1" denominator="5x² − x + 4" width={140} fill={INK} />
      <Draw on={beat >= 1} d={arrowD(266, 124, 306, 124)} stroke={AMBER_DARK} sw={2} delay={dl(1, 0.9)} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 1.0)}>
        <T x={286} y={112} size={11} fill={AMBER_DARK} anchor="middle">
          ÷x²
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.4)}>
        <T x={331} y={124} size={19} fill={INK} anchor="middle">
          =
        </T>
      </Fade>
      <Frac on={beat >= 1} delay={dl(1, 1.7)} x={436} y={124} size={17} numerator="3 + 2/x − 1/x²" denominator="5 − 1/x + 4/x²" width={160} fill={INK} />

      {/* beat 2 — take the limit, land boxed 3/5 (HIGH), degree-rule note */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={540} y={124} size={22} fill={INK} anchor="middle">
          →
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={540} y={137.6} size={11} fill={INK} anchor="middle">
          (x→∞)
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <Chip x={600} y={103} w={64} h={42} fill={CREAM} stroke={GREEN} textFill={GREEN_DARK} size={22} script={false}>
          3/5
        </Chip>
      </Fade>
      <Draw on={beat >= 2} d={ringD(632, 124, 46, 33)} stroke={GREEN} sw={2} delay={dl(2, 0.8)} />
      <Fade on={beat >= 2} delay={dl(2, 1.2)}>
        <T x={540} y={195} size={14} fill={AMBER_DARK} anchor="middle">
          {t(
            "Equal degree ⇒ ratio of leading coefficients: 3/5.",
            "Degree barabar ⇒ leading coefficients ka ratio: 3/5."
          )}
        </T>
      </Fade>

      {/* divider between the two examples */}
      <Draw on={beat >= 3} d="M100 218 L980 218" stroke={AMBER_DARK} sw={1} delay={dl(3, 0)} />

      {/* beat 3 — speed-trap heading + the new limit, staged wrong move crossed out */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={252} size={17} fill={RED} anchor="middle" weight={800}>
          {t("Speed trap: infinity minus infinity is not zero", "Speed trap: infinity minus infinity zero nahin")}
        </T>
      </Fade>
      <Limit on={beat >= 3} delay={dl(3, 0.7)} x={380} y={298} size={18} condition="x → ∞" anchor="start" fill={INK} />
      <Fade on={beat >= 3} delay={dl(3, 0.7)}>
        <T x={425} y={298} size={18} fill={INK} anchor="start">
          √(x²+x) − x
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.2)}>
        <T x={425} y={340} size={13.5} fill={MUTED} anchor="start">
          {t("Not this:", "Yeh nahin:")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <T x={510} y={340} size={16} fill={RED} anchor="start" weight={700}>
          ∞ − ∞ = 0 ✗
        </T>
      </Fade>
      <Draw on={beat >= 3} d={crossD(510, 327.5, 88, 17.4)} stroke={RED} sw={2.2} delay={dl(3, 1.9)} dur={0.5} />

      {/* beat 4 — rationalize by the conjugate */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={150} y={390} size={17} fill={INK} anchor="start">
          √(x²+x) − x
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={273} y={390} size={19} fill={INK} anchor="middle">
          =
        </T>
      </Fade>
      <Frac on={beat >= 4} delay={dl(4, 0.7)} x={363} y={390} size={17} numerator="(x²+x) − x²" denominator="√(x²+x) + x" width={130} fill={INK} />
      <Fade on={beat >= 4} delay={dl(4, 1.1)}>
        <T x={458} y={390} size={19} fill={INK} anchor="middle">
          =
        </T>
      </Fade>
      <Frac on={beat >= 4} delay={dl(4, 1.4)} x={548} y={390} size={17} numerator="x" denominator="√(x²+x) + x" width={130} fill={INK} />
      <Draw on={beat >= 4} d="M150 415 L613 415" stroke={AMBER_DARK} sw={1.6} delay={dl(4, 1.8)} />

      {/* beat 5 — divide by x, land boxed 1/2 (HIGH) */}
      <Draw on={beat >= 5} d={arrowD(100, 460, 140, 460)} stroke={AMBER_DARK} sw={2} delay={dl(5, 0)} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={120} y={448} size={11} fill={AMBER_DARK} anchor="middle">
          ÷x
        </T>
      </Fade>
      <Frac on={beat >= 5} delay={dl(5, 0.4)} x={235} y={460} size={18} numerator="1" denominator="√(1+1/x) + 1" width={150} fill={INK} />
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={350} y={460} size={22} fill={INK} anchor="middle">
          →
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={350} y={473.6} size={11} fill={INK} anchor="middle">
          (x→∞)
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        <Chip x={400} y={439} w={64} h={42} fill={CREAM} stroke={GREEN} textFill={GREEN_DARK} size={22} script={false}>
          1/2
        </Chip>
      </Fade>
      <Draw on={beat >= 5} d={ringD(432, 460, 46, 33)} stroke={GREEN} sw={2} delay={dl(5, 1.6)} />

      {/* beat 6 — confirm the general b/2 pattern (Sec29/30 callback) */}
      <Draw on={beat >= 6} d="M40 528 L58 528" stroke={AMBER_DARK} sw={3} delay={dl(6, 0)} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={66} y={528} size={15} fill={INK} anchor="start">
          {t(
            "Pattern: √(x²+bx) − x → b/2. Here b = 1 → 1/2.",
            "Pattern: √(x²+bx) − x → b/2. Yahaan b = 1 → 1/2."
          )}
        </T>
      </Fade>

      {/* beat 7 — closing reflex guardrail, red banner, HIGH */}
      <Draw on={beat >= 7} d={roundRectD(140, 550, 800, 40, 14)} stroke={RED} sw={2.2} delay={dl(7, 0)} dur={0.8} />
      <Fade on={beat >= 7} delay={dl(7, 0.5)}>
        <T x={540} y={575} size={17} fill={RED} anchor="middle" weight={800}>
          {t(
            "For ∞−∞ surds, rationalise first — then divide by the highest power.",
            "∞−∞ surds ke liye pehle rationalise karo — phir highest power se divide."
          )}
        </T>
      </Fade>
    </Scene>
  );
}
