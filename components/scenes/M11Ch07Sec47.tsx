/**
 * M11 Ch07 · Section 47 — "Binomial Theorem — one-screen cheat sheet"
 * Canvas 1080×620 · safe x36–1044, y30–596. section_type=cheat_sheet.
 * FINAL section of the chapter. 10 board_content items, seq1=title.
 * Same 2-column grid as Sec 46, cards color-coded (red = rule/guardrail,
 * amber = formula), closing with a wide red "mantras" banner — the last
 * beat of the entire 47-section chapter.
 *
 * Beats (en [0, 9.98, 29.27, 49.24, 68.95, 87.73, 107.1, 125.36, 143.79, 159.41]):
 *  0 title
 *  1 red: n+1 terms, powers sum to n, symmetry
 *  2 amber: general term, off-by-one rule
 *  3 amber: net exponent E(r), integer/range requirement
 *  4 red: greatest coeff/term rules, k formula
 *  5 amber: the four sum identities
 *  6 amber: any-index approximation
 *  7 red: remainders golden move, parts product identity
 *  8 amber: multinomial coefficient/terms/sum
 *  9 red, wide, final: the four mantras
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD } from "./math-kit";

const CARDS = [
  { x: 140, y: 92, color: RED, en: "n+1 terms;  powers sum to n;  symmetry nCr = nC(n-r)", hi: "n+1 terms;  powers sum to n;  symmetry nCr = nC(n-r)" },
  { x: 590, y: 92, color: AMBER_DARK, en: "T(r+1) = nCr a^(n-r)b^r;   m-th term ⇒ r = m-1", hi: "T(r+1) = nCr a^(n-r)b^r;   m-th term ⇒ r = m-1" },
  { x: 140, y: 178, color: AMBER_DARK, en: "E(r) = p(n-r)-qr = k or 0;   need r ∈ {0,…,n}, integer", hi: "E(r) = p(n-r)-qr = k ya 0;   r ∈ {0,…,n}, integer chahiye" },
  { x: 590, y: 178, color: RED, en: "greatest coeff = middle;  term = where ratio crosses 1;  k = (n+1)|x|/(1+|x|)", hi: "greatest coeff = middle;  term = ratio 1 cross kare wahaan;  k = (n+1)|x|/(1+|x|)" },
  { x: 140, y: 264, color: AMBER_DARK, en: "ΣCr=2^n,  ΣrCr=n·2^(n-1),  ΣCr/(r+1)=(2^(n+1)-1)/(n+1),  ΣCr²=(2n)Cn", hi: "ΣCr=2^n,  ΣrCr=n·2^(n-1),  ΣCr/(r+1)=(2^(n+1)-1)/(n+1),  ΣCr²=(2n)Cn" },
  { x: 590, y: 264, color: AMBER_DARK, en: "|x| < 1:   (1+x)^n = 1+nx+⋯ ≈ 1+nx", hi: "|x| < 1:   (1+x)^n = 1+nx+⋯ ≈ 1+nx" },
  { x: 140, y: 350, color: RED, en: "remainders: make K appear inside the bracket;  parts: (I+f)f' = (p²-q)^n", hi: "remainders: K ko bracket ke andar laao;  parts: (I+f)f' = (p²-q)^n" },
  { x: 590, y: 350, color: AMBER_DARK, en: "multinomial: n!/(n1!⋯nk!);  #terms (n+k-1)C(k-1);  Σcoeff = k^n", hi: "multinomial: n!/(n1!⋯nk!);  #terms (n+k-1)C(k-1);  Σcoeff = k^n" },
];
const CARD_W = 430;
const CARD_H = 72;

export default function M11Ch07Sec47({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true}>
        <T x={540} y={58} size={21} fill={INK} script>
          {en ? "grab-and-go: rules, tools, and memory aids" : "grab-and-go: rules, tools, aur memory aids"}
        </T>
      </Fade>

      {CARDS.map((c, i) => (
        <React.Fragment key={i}>
          <Draw
            on={beat >= i + 1}
            delay={dl(i + 1, 0.2)}
            d={roundRectD(c.x, c.y, CARD_W, CARD_H)}
            stroke={c.color}
            sw={2}
            dur={0.7}
          />
          <Fade on={beat >= i + 1} delay={dl(i + 1, 0.8)}>
            <T x={c.x + CARD_W / 2} y={c.y + CARD_H / 2 + 5} size={11} fill={c.color} script>
              {en ? c.en : c.hi}
            </T>
          </Fade>
        </React.Fragment>
      ))}

      {/* beat 9 — the four mantras, wide, final beat of the whole chapter */}
      <Draw on={beat >= 9} delay={dl(9, 0.2)} d={roundRectD(140, 435, 880, 82)} stroke={RED} sw={2.8} dur={0.9} />
      <Fade on={beat >= 9} delay={dl(9, 1)}>
        <T x={580} y={465} size={14} fill={RED} script>
          {en ? "raise the WHOLE bracket · solve for r FIRST · read the weights, pick the tool" : "poora bracket raise karo · pehle r solve karo · weights padho, tool chuno"}
        </T>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 1.6)}>
        <T x={580} y={503} size={14} fill={RED} script>
          {en ? "· make the divisor appear inside the bracket" : "· divisor ko bracket ke andar laao"}
        </T>
      </Fade>
    </Scene>
  );
}
