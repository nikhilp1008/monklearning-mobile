/**
 * M11 Ch07 · Section 46 — "Binomial Theorem — chapter formula recap"
 * Canvas 1080×620 · safe x36–1044, y30–596. section_type=formula_recap.
 * 10 board_content items, seq1=title. A 2-column grid of boxed formula
 * cards, one per beat, in the order the chapter taught them (subtopics
 * 1 through 7), plus a wide "backbone" card at the bottom.
 *
 * Beats (en [0, 9.81, 30.04, 50.78, 75.61, 93.87, 109.15, 124.68, 142.77, 158.47]):
 *  0 title
 *  1 subtopic 1: the theorem, general term, term count
 *  2 subtopic 2: net exponent, middle-term index
 *  3 subtopic 3: greatest coefficient/term
 *  4 subtopic 4a: sum identities
 *  5 subtopic 4b: reciprocal & square sums
 *  6 subtopic 5: any-index series, approximation
 *  7 subtopic 6: base-splitting, conjugate identity
 *  8 subtopic 7: multinomial theorem
 *  9 red-margin: the backbone (symmetry + Pascal's rule)
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD } from "./math-kit";

const CARDS = [
  { x: 140, y: 92, en: "(a+b)^n = ΣnCr·a^(n-r)b^r    #terms = n+1", hi: "(a+b)^n = ΣnCr·a^(n-r)b^r    #terms = n+1" },
  { x: 590, y: 92, en: "n even: T(n/2+1)   n odd: T((n+1)/2), T((n+3)/2)", hi: "n even: T(n/2+1)   n odd: T((n+1)/2), T((n+3)/2)" },
  { x: 140, y: 178, en: "greatest coeff = middle;   (n-r+1)/r · |b/a| ≥ 1", hi: "greatest coeff = middle;   (n-r+1)/r · |b/a| ≥ 1" },
  { x: 590, y: 178, en: "ΣCr = 2^n   Σ(-1)^rCr = 0   ΣrCr = n·2^(n-1)", hi: "ΣCr = 2^n   Σ(-1)^rCr = 0   ΣrCr = n·2^(n-1)" },
  { x: 140, y: 264, en: "ΣCr/(r+1) = (2^(n+1)-1)/(n+1)    ΣCr² = (2n)Cn", hi: "ΣCr/(r+1) = (2^(n+1)-1)/(n+1)    ΣCr² = (2n)Cn" },
  { x: 590, y: 264, en: "(1+x)^n ≈ 1+nx    (+ n(n-1)/2 x² for more precision)", hi: "(1+x)^n ≈ 1+nx    (zyada precision: + n(n-1)/2 x²)" },
  { x: 140, y: 350, en: "(1+K)^n ≡ 1+nK (mod K²)    (I+f)f' = (p²-q)^n", hi: "(1+K)^n ≡ 1+nK (mod K²)    (I+f)f' = (p²-q)^n" },
  { x: 590, y: 350, en: "multinomial coeff = n!/(n1!⋯nk!)   #terms = (n+k-1)C(k-1)", hi: "multinomial coeff = n!/(n1!⋯nk!)   #terms = (n+k-1)C(k-1)" },
];
const CARD_W = 430;
const CARD_H = 72;

export default function M11Ch07Sec46({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true}>
        <T x={540} y={58} size={20} fill={INK} script>
          {en ? "every essential formula, one screen (Cr = nCr)" : "har zaroori formula, ek screen pe (Cr = nCr)"}
        </T>
      </Fade>

      {CARDS.map((c, i) => (
        <React.Fragment key={i}>
          <Draw
            on={beat >= i + 1}
            delay={dl(i + 1, 0.2)}
            d={roundRectD(c.x, c.y, CARD_W, CARD_H)}
            stroke={AMBER_DARK}
            sw={2}
            dur={0.7}
          />
          <Fade on={beat >= i + 1} delay={dl(i + 1, 0.8)}>
            <T x={c.x + CARD_W / 2} y={c.y + CARD_H / 2 + 5} size={11.5} fill={AMBER_DARK} script>
              {en ? c.en : c.hi}
            </T>
          </Fade>
        </React.Fragment>
      ))}

      {/* beat 9 — the backbone, red, wide */}
      <Draw on={beat >= 9} delay={dl(9, 0.2)} d={roundRectD(140, 440, 880, 56)} stroke={RED} sw={2.4} dur={0.8} />
      <Fade on={beat >= 9} delay={dl(9, 0.9)}>
        <T x={580} y={472} size={15} fill={RED} script>
          {en
            ? "backbone: nCr = nC(n-r)     and     nCr + nC(r-1) = (n+1)Cr"
            : "backbone: nCr = nC(n-r)     aur     nCr + nC(r-1) = (n+1)Cr"}
        </T>
      </Fade>
    </Scene>
  );
}
