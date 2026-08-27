/**
 * M11 Ch02 · Section 8 — "Worked: recovering A from A × A, and divisibility counting"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples (TOP = Ex3 recover-and-count, BOTTOM = Ex4 divisibility).
 *
 * Beats (board_reveal_at_english [0, 18.01, 42.84, 58.45, 74.92, 87.64, 107.61, 127.32]):
 *  0 Ex3 given: A×A has 16 elements; (1,4),(3,2) ∈ A×A
 *  1 n(A×A)=(n(A))²=16 ⇒ n(A)=4 ⇒ A={1,2,3,4}
 *  2 boxed: subsets of A×A containing (4,1) = 2^15 = 32768
 *  3 explain: fix (4,1) "always in" → remaining 15 pairs free
 *  4 Ex4 heading: A={1,...,6} — pairs with x|y
 *  5 #{x|y} = ⌊6/1⌋+...+⌊6/6⌋ = 6+3+2+1+1+1 = 14 (two lines, 2nd boxed)
 *  6 boxed: #{x|y or y|x} = 14+14-6 = 22
 *  7 why: inclusion-exclusion overlap forces x=y — 6 diagonal pairs
 *
 * Layout plan — TOP zone (Ex3, y89..230) + divider + BOTTOM zone (Ex4, y265..465):
 *  b0 | given (18,amber,w700)            | T mid  | x?..?      y90..110 (bl 104)
 *  b1 | deduction (16)                    | T mid  | x?..?      y128..145 (bl 140)
 *  b2 | chip subset-count (17,amber)     | Chip   | x340..740  y163..201
 *  b3 | explain (14, muted)               | T mid  | x?..?      y214..229 (bl 225)
 *  --divider-- y=250
 *  b4 | Ex4 heading (19,amber,w800)      | T mid  | x?..?      y265..286 (bl 280)
 *  b5 | floor-sum line (15)               | T mid  | x?..?      y303..320 (bl 315)
 *  b5 | chip "=6+3+2+1+1+1=14" (16,green)| Chip   | x430..650  y340..374
 *  b6 | chip "#{x|y or y|x}=22" (17,green)| Chip  | x380..700  y395..431
 *  b7 | why-line (15)                    | T mid  | x289..791  y449..465 (bl 460)
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
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch02Sec8({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={64} size={26} fill={RED} anchor="middle" script>
          {t("Worked Examples — Recovery & Counting", "Solved Examples — Recovery & Counting")}
        </T>
      </Fade>

      {/* beat 0 — Example 3 given */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={104} size={18} fill={AMBER_DARK} anchor="middle" weight={700}>
          {"Example 3 (JEE Main): A×A has 16 elements; (1,4),(3,2) ∈ A×A"}
        </T>
      </Fade>

      {/* beat 1 — deduce n(A) then A itself */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={140} size={16} fill={INK} anchor="middle" weight={700}>
          {"n(A×A) = (n(A))² = 16 ⇒ n(A) = 4 ⇒ A = {1, 2, 3, 4}"}
        </T>
      </Fade>

      {/* beat 2 — the subset count fixing (4,1) as always-in */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <Chip x={340} y={163} w={400} h={38} fill="#FCF4E0" stroke={AMBER_DARK} textFill={AMBER_DARK} size={17} script={false}>
          {"subsets with (4,1) = 2^15 = 32768"}
        </Chip>
      </Fade>

      {/* beat 3 — why the exponent is 15 */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={540} y={225} size={14} fill={MUTED} anchor="middle">
          {t(
            "Fix (4,1) as \"always in\" → remaining 15 pairs free (in/out)",
            "(4,1) ko \"hamesha in\" fix karo → baaki 15 pairs free"
          )}
        </T>
      </Fade>

      {/* divider */}
      <Draw on={beat >= 4} d="M 100 250 L 980 250" stroke={AMBER_DARK} sw={1} delay={dl(4, 0)} />

      {/* beat 4 — Example 4 heading */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={280} size={19} fill={AMBER_DARK} anchor="middle" weight={800}>
          {t("Example 4 (JEE Advanced): A={1,...,6} — pairs with x|y", "Example 4 (JEE Advanced): A={1,...,6} — x|y wale pairs")}
        </T>
      </Fade>

      {/* beat 5 — the floor-sum count via slicing */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={540} y={315} size={15} fill={INK} anchor="middle" weight={700}>
          {"#{x|y} = ⌊6/1⌋+⌊6/2⌋+⌊6/3⌋+⌊6/4⌋+⌊6/5⌋+⌊6/6⌋"}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.7)}>
        <Chip x={430} y={340} w={220} h={34} fill={GREEN} textFill="#FFFEFB" size={16} script={false}>
          {"= 6+3+2+1+1+1 = 14"}
        </Chip>
      </Fade>

      {/* beat 6 — inclusion-exclusion for x|y or y|x */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <Chip x={380} y={395} w={320} h={36} fill={GREEN} textFill="#FFFEFB" size={17} script={false}>
          {"#{x|y or y|x} = 14+14-6 = 22"}
        </Chip>
      </Fade>

      {/* beat 7 — why the overlap is 6 */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <T x={540} y={460} size={15} fill={INK} anchor="middle">
          {t(
            "Inclusion–exclusion: overlap forces x=y — exactly 6 diagonal pairs",
            "Inclusion-exclusion: overlap se x=y — exactly 6 diagonal pairs"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
