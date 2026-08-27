/**
 * M11 Ch12 · Section 6 — "Worked example: the star limit with fractional powers"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples. board_content seq1 heading ("Worked example: the star limit
 * with fractional powers") -> always-on title, distinct from the DB `title` field
 * ("Fractional powers, and the find-a-b problem") — the app chrome shows the latter, the
 * board shows the former.
 *
 * board_reveal_at_english = [0, 10.33, 21.42, 31.57, 41.47, 58.2, 73.73, 90.28] (8 beats 0-7).
 * board_reveal_at_hinglish = [0, 9.22, 19.11, 28.5, 37.38, 51.97, 66.99, 79.19].
 *
 * TWO worked examples stacked, divided by a horizontal rule (M11Ch12Sec5 pattern):
 * TOP zone = Example 1 (star limit w/ fractional exponents), y~90-320. BOTTOM zone =
 * Example 2, the "find a,b for a finite limit" problem (y~340-590).
 *
 * Beats:
 *  0(title, always-on) | "Worked example: the star limit with fractional powers"
 *  1 | seq2: state lim(x→1) (x^(1/3)−1)/(x^(1/2)−1) + declare both pieces vanish (0/0)
 *  2 | seq3: rewrite dividing num & denom by (x−1) — flattened as three <Frac> blocks
 *      joined by "=" and "÷" (never nested <Frac> inside <Frac>, same technique as Sec5
 *      beat6's degree-18 rewrite)
 *  3 | seq4 HIGH: apply the star limit (n·a^(n−1) at a=1 ⇒ a^(n−1)=1, each piece is just
 *      n) — land the boxed answer 2/3
 *  4 | seq5 heading: NEW example — "find a,b so the limit is finite" + the problem's
 *      limit statement, lim(x→2)(x²+ax+b)/(x²−x−2) = 5/3
 *  5 | seq6 red-margin HIGH: the key insight, as a wide boxed banner (Sec2 beat4 /
 *      Sec4 beat7 motif, not a thin margin bar) — denominator→0 forces numerator→0 too
 *  6 | seq7: apply the insight — 2² + 2a + b = 0 ⇒ 2a + b = −4
 *  7 | seq8 HIGH: finish by factor-matching — x²+ax+b = (x−2)(x+3) ⇒ a=1, b=−6, both
 *      landed as boxed green chips
 *
 * Layout plan (x-range × y-range per element; formulas are language-agnostic, so only
 * prose/labels get separate EN/HI boxes):
 *  b1 | Limit x→1 (20,ink,start)              | Limit  | x390..430  y100..131 (bl118)
 *  b1 | Frac x^(1/3)−1 / x^(1/2)−1 (20,w150)  | Frac   | x460..610  y91..131  (cx535,bl118)
 *  b1 | declare text (14,ink,mid)              | T mid  | x~347..733(en)/330..750(hi) y146..164 (bl160)
 *  b1 | underline                              | Draw   | x320..760 y176
 *  b2 | Frac_LHS x^(1/3)−1/x^(1/2)−1 (17,w130) | Frac   | x315..445  y207..241 (cx380,bl232)
 *  b2 | "="                                     | T mid  | x473..483  y225..237 (bl232)
 *  b2 | Frac_A x^(1/3)−1 / x−1 (17,w110)       | Frac   | x500..610  y207..241 (cx555,bl232)
 *  b2 | "÷"                                     | T mid  | x645..655  y225..237 (bl232)
 *  b2 | Frac_B x^(1/2)−1 / x−1 (17,w110)       | Frac   | x670..780  y207..241 (cx725,bl232)
 *  b2 | underline                              | Draw   | x300..790 y258
 *  b3 | muted note "(a=1 ⇒ a^(n−1)=1):" (13)   | T st   | x290..433(en)/290..446(hi) y268..302 (bl298)
 *  b3 | Frac 1/3 over 1/2 (22,w50)             | Frac   | x465..515  y268..317 (cx490,bl298)
 *  b3 | "="                                     | T mid  | x533..557  y270..306 (bl298)
 *  b3 | "1/3 × 2/1" (22,ink,start)              | T st   | x575..674  y270..306 (bl298)
 *  b3 | "="                                     | T mid  | x692..718  y270..306 (bl298)
 *  b3 | boxed "2/3" (22,green)                  | Chip   | x732..796  y279..317
 *  b3 | checkmark beside chip                   | Draw   | checkD(815,300,16)
 *  --divider--                                  | Draw   | x100..980 y332
 *  b4 | heading (16,amber,mid,w800)             | T mid  | x~352..728(en)/~348..732(hi) y346..364 (bl358)
 *  b4 | underline under heading                 | Draw   | x340..740 y372
 *  b5 | Limit x→2 (20,ink,start)                | Limit  | x345..385  y394..425 (bl412)
 *  b4 | Frac x²+ax+b / x²−x−2 (20,w140)         | Frac   | x425..565  y385..425 (cx495,bl412)
 *  b4 | "="                                      | T mid  | x592..603  y391..419 (bl412)
 *  b4 | "5/3" (22,ink,start)                     | T st   | x622..655  y391..419 (bl412)
 *  b5 | red banner box                           | Draw   | x190..890 y446..500
 *  b5 | banner text (16,red,mid,w800)             | T mid  | x272..808(en)/268..812(hi) y466..489 (bl478)
 *  b6 | condition text (19,ink,mid,w700)          | T mid  | x402..678  y514..534 (bl528)
 *  b6 | underline                                 | Draw   | x385..695 y546
 *  b7 | "x²+ax+b = (x−2)(x+3)" (18,ink,start)      | T st   | x250..502  y558..572 (bl572)
 *  b7 | "⇒" (22,ink,mid)                           | T mid  | x529..551  y554..579 (bl572)
 *  b7 | boxed "a = 1" (19,green)                   | Chip   | x572..658  y552..586
 *  b7 | boxed "b = −6" (19,green)                  | Chip   | x680..776  y552..586
 *  b7 | checkmark beside chips                     | Draw   | checkD(792,573,15)
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
  Scene,
} from '@/components/scenes/kit';
import { Frac, Limit, checkD } from "./math-kit";

export default function M11Ch12Sec6({ currentTime, reveals, language }: SceneProps) {
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
            "Worked example: the star limit with fractional powers",
            "Worked example: fractional powers ka star limit"
          )}
        </T>
      </Fade>

      {/* beat 1 — state the limit, declare both pieces vanish (0/0) */}
      <Limit on={beat >= 1} delay={dl(1, 0)} x={390} y={118} size={20} condition="x → 1" anchor="start" fill={INK} />
      <Frac
        on={beat >= 1}
        delay={dl(1, 0.4)}
        x={535}
        y={118}
        size={20}
        numerator="x^(1/3) − 1"
        denominator="x^(1/2) − 1"
        width={150}
        fill={INK}
      />
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={540} y={160} size={14} fill={INK} anchor="middle">
          {t(
            "Both vanish at x = 1 → 0/0. Insert (x − 1) into each.",
            "Dono x = 1 par vanish → 0/0. Har piece mein (x − 1) daalo."
          )}
        </T>
      </Fade>
      <Draw on={beat >= 1} d="M320 176 L760 176" stroke={AMBER_DARK} sw={1.6} delay={dl(1, 1.3)} />

      {/* beat 2 — the rewrite: divide num & denom by (x−1), flattened as three Fracs */}
      <Frac
        on={beat >= 2}
        delay={dl(2, 0)}
        x={380}
        y={232}
        size={17}
        numerator="x^(1/3) − 1"
        denominator="x^(1/2) − 1"
        width={130}
        fill={INK}
      />
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={478} y={232} size={19} fill={INK} anchor="middle">
          =
        </T>
      </Fade>
      <Frac on={beat >= 2} delay={dl(2, 0.5)} x={555} y={232} size={17} numerator="x^(1/3) − 1" denominator="x − 1" width={110} fill={INK} />
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={650} y={232} size={19} fill={INK} anchor="middle">
          ÷
        </T>
      </Fade>
      <Frac on={beat >= 2} delay={dl(2, 1.0)} x={725} y={232} size={17} numerator="x^(1/2) − 1" denominator="x − 1" width={110} fill={INK} />
      <Draw on={beat >= 2} d="M300 258 L790 258" stroke={AMBER_DARK} sw={1.6} delay={dl(2, 1.4)} />

      {/* beat 3 — apply the star limit (a=1 ⇒ a^(n-1)=1, each piece is just n), land 2/3 (HIGH) */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={290} y={298} size={13} fill={MUTED} anchor="start">
          {t("(a = 1 ⇒ a^(n−1) = 1):", "(a = 1, to a^(n−1) = 1):")}
        </T>
      </Fade>
      <Frac on={beat >= 3} delay={dl(3, 0.4)} x={490} y={298} size={22} numerator="1/3" denominator="1/2" width={50} fill={INK} />
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={545} y={298} size={24} fill={INK} anchor="middle">
          =
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.1)}>
        <T x={575} y={298} size={22} fill={INK} anchor="start">
          1/3 × 2/1
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <T x={705} y={298} size={26} fill={INK} anchor="middle">
          =
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.9)}>
        <Chip x={732} y={279} w={64} h={38} fill={CREAM} stroke={GREEN} textFill={GREEN_DARK} size={22} script={false}>
          2/3
        </Chip>
      </Fade>
      <Draw on={beat >= 3} d={checkD(815, 300, 16)} stroke={GREEN} sw={2.2} delay={dl(3, 2.3)} />

      {/* divider between the two examples */}
      <Draw on={beat >= 4} d="M100 332 L980 332" stroke={AMBER_DARK} sw={1} delay={dl(4, 0)} />

      {/* beat 4 — NEW example: heading + the problem's limit statement */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={358} size={16} fill={AMBER_DARK} anchor="middle" weight={800}>
          {t("Advanced: find a and b so the limit is finite", "Advanced: a aur b dhoondo taaki limit finite ho")}
        </T>
      </Fade>
      <Draw on={beat >= 4} d="M340 372 L740 372" stroke={AMBER_DARK} sw={1.4} delay={dl(4, 0.7)} />
      <Limit on={beat >= 4} delay={dl(4, 1.0)} x={345} y={412} size={20} condition="x → 2" anchor="start" fill={INK} />
      <Frac on={beat >= 4} delay={dl(4, 1.3)} x={495} y={412} size={20} numerator="x² + ax + b" denominator="x² − x − 2" width={140} fill={INK} />
      <Fade on={beat >= 4} delay={dl(4, 1.7)}>
        <T x={598} y={412} size={22} fill={INK} anchor="middle">
          =
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.0)}>
        <T x={622} y={412} size={22} fill={INK} anchor="start">
          5/3
        </T>
      </Fade>

      {/* beat 5 — the key insight, as a wide boxed red banner (HIGH) */}
      <Draw on={beat >= 5} d="M190 446 L890 446 L890 500 L190 500 Z" stroke={RED} sw={2.4} delay={dl(5, 0)} />
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={540} y={478} size={16} fill={RED} anchor="middle" weight={800}>
          {t(
            "Denominator → 0, so for a finite limit the numerator must also → 0.",
            "Denominator → 0 hota hai, isliye numerator ko bhi → 0 hona padega."
          )}
        </T>
      </Fade>

      {/* beat 6 — apply the insight: one condition on a, b */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={540} y={528} size={19} fill={INK} anchor="middle" weight={700}>
          2² + 2a + b = 0 ⇒ 2a + b = −4
        </T>
      </Fade>
      <Draw on={beat >= 6} d="M385 546 L695 546" stroke={AMBER_DARK} sw={1.6} delay={dl(6, 0.6)} />

      {/* beat 7 — finish by factor-matching, land both a and b boxed (HIGH) */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <T x={250} y={572} size={18} fill={INK} anchor="start">
          x² + ax + b = (x − 2)(x + 3)
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={540} y={572} size={22} fill={INK} anchor="middle">
          ⇒
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.8)}>
        <Chip x={572} y={552} w={86} h={34} fill={CREAM} stroke={GREEN} textFill={GREEN_DARK} size={19} script={false}>
          a = 1
        </Chip>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.1)}>
        <Chip x={680} y={552} w={96} h={34} fill={CREAM} stroke={GREEN} textFill={GREEN_DARK} size={19} script={false}>
          b = −6
        </Chip>
      </Fade>
      <Draw on={beat >= 7} d={checkD(792, 573, 15)} stroke={GREEN} sw={2.2} delay={dl(7, 1.5)} />
    </Scene>
  );
}
