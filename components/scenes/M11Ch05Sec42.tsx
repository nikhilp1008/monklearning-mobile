/**
 * M11 Ch05 · Section 42 — "The complete inequalities toolkit"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type=formula_recap — every formula
 * from the chapter on one board, closing subtopics 1-4. Shoelace flattened
 * to the concrete 3-vertex numeral-subscript case (as in Sec 18) since no
 * Σ-with-i/i+1 primitive is vetted; the general-form comparison list
 * "(≤, ≥, <, >)" reuses Sec 18's exact flattening of lessgtr.
 *
 * Beats (en [0,15.87,29.7,43.18,54.95,66.99,77.91,92.76,99.84], hi
 * [0,14.08,25.51,37.97,50.01,64.34,74.58,88.15,95.06]):
 *  0 heading: every formula from the chapter, on one board
 *  1 formula (high, boxed amber): a<b, c<0 ⇒ ca>cb (negative flips)
 *  2 formula: ax+b>0: x>-b/a (a>0), x<-b/a (a<0)
 *  3 formula: ax+by(≤,≥,<,>)c: intercepts (c/a,0), (0,c/b)
 *  4 formula: shoelace area, concrete 3-vertex form
 *  5 formula: average sum/n≥A; mixture pure/total
 *  6 formula (high, boxed amber): |x|<a⇔-a<x<a; |x|>a⇔x<-a or x>a
 *  7 formula (high, boxed amber): a>0: ax²+bx+c<0 between roots; >0 outside
 *  8 note (red-margin, high): num roots in for ≤/≥; denom roots always out;
 *    ∞ always round
 *
 * Layout plan (all single-line, generously spaced, well within safe area):
 *  b0 | heading (17,ink,w700)      | T mid | bl 100
 *  b1 | boxed formula (16,amber)   | Chip  | x260..820 y125..165
 *  b2 | formula (16,ink,w700)      | T mid | bl 200
 *  b3 | formula (16,ink,w700)      | T mid | bl 232
 *  b4 | formula (16,ink,w700)      | T mid | bl 264
 *  b5 | formula (16,ink,w700)      | T mid | bl 296
 *  b6 | boxed formula (15,amber)   | Chip  | x240..840 y326..366
 *  b7 | boxed formula (15,amber)   | Chip  | x230..850 y386..426
 *  b8 | boxed guardrail (14,red)   | Chip  | x150..930 y446..492
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, T, Chip, INK, RED, AMBER, AMBER_DARK, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch05Sec42({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={20} fill={RED} script>
          {t("the whole chapter, one board — every rule you need", "poora chapter, ek board — jo bhi rule chahiye")}
        </T>
      </Fade>

      {/* beat 0 — heading */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={100} size={17} fill={INK} weight={700}>
          {t("every formula from the chapter, on one board", "chapter ka har formula, ek hi board par")}
        </T>
      </Fade>

      {/* beat 1 — negative flips */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <Chip x={260} y={125} w={560} h={40} fill={CREAM} stroke={AMBER} textFill={AMBER_DARK} size={16} script={false}>
          a &lt; b, c &lt; 0 ⇒ ca &gt; cb (negative flips)
        </Chip>
      </Fade>

      {/* beat 2 — one-variable linear form */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={200} size={16} fill={INK} weight={700}>
          ax + b &gt; 0: &nbsp; x &gt; -b/a (a&gt;0), &nbsp; x &lt; -b/a (a&lt;0)
        </T>
      </Fade>

      {/* beat 3 — two-variable general form + intercepts */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={232} size={16} fill={INK} weight={700}>
          ax + by (≤, ≥, &lt;, &gt;) c: &nbsp; intercepts (c/a, 0), (0, c/b)
        </T>
      </Fade>

      {/* beat 4 — shoelace area */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={264} size={16} fill={INK} weight={700}>
          Area = ½ |x₁y₂ − x₂y₁ + x₂y₃ − x₃y₂ + x₃y₁ − x₁y₃|
        </T>
      </Fade>

      {/* beat 5 — average and mixture templates */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={296} size={16} fill={INK} weight={700}>
          {t("average: sum/n ≥ A;   mixture: pure/total", "average: sum/n ≥ A;   mixture: pure/total")}
        </T>
      </Fade>

      {/* beat 6 — modulus results */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Chip x={240} y={326} w={600} h={40} fill={CREAM} stroke={AMBER} textFill={AMBER_DARK} size={15} script={false}>
          |x| &lt; a ⇔ -a &lt; x &lt; a; &nbsp; |x| &gt; a ⇔ x &lt; -a or x &gt; a
        </Chip>
      </Fade>

      {/* beat 7 — quadratic results */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Chip x={230} y={386} w={620} h={40} fill={CREAM} stroke={AMBER} textFill={AMBER_DARK} size={15} script={false}>
          {t(
            "a>0: ax²+bx+c<0 between roots;   >0 outside",
            "a>0: ax²+bx+c<0 roots ke beech;   >0 bahar"
          )}
        </Chip>
      </Fade>

      {/* beat 8 — the endpoint guardrail */}
      <Fade on={beat >= 8} delay={dl(8, 0.3)}>
        <Chip x={150} y={446} w={780} h={46} fill={CREAM} stroke={RED} textFill={RED} size={14}>
          {t(
            "numerator roots in for ≤/≥; denominator roots always out; ∞ always round",
            "numerator roots ≤/≥ ke liye in hain; denominator roots hamesha out; ∞ hamesha round"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
