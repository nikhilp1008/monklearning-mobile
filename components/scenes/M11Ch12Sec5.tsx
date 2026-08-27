/**
 * M11 Ch12 · Section 5 — "Worked example: a clean 0/0 by factoring"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples. board_content seq1 heading ("Worked example: a clean 0/0
 * by factoring") -> always-on title, distinct from the DB title ("Factoring a 0/0 limit,
 * and the ratio trick") — the app chrome shows the latter, the board shows the former.
 *
 * board_reveal_at_english = [0, 11.61, 26.71, 36.7, 47.79, 58.29, 68.44, 83.46] (8 beats 0-7).
 * board_reveal_at_hinglish = [0, 10.16, 25.09, 35.42, 46.68, 56.75, 67.67, 85.77].
 *
 * TWO worked examples stacked, divided by a horizontal rule (M11Ch02Sec15 pattern):
 * TOP zone = Example 1 (factor & cancel a 0/0), y~90-322. BOTTOM zone = Example 2, the
 * speed-trap degree-18 ratio (y~336-586).
 *
 * Beats:
 *  0(title, always-on) | "Worked example: a clean 0/0 by factoring"
 *  1 | seq2: state the limit lim(x→3)(x²−2x−3)/(x−3) + declare 0/0 form (Step 1)
 *  2 | seq3: factor the numerator, x²−2x−3 = (x−3)(x+1)
 *  3 | seq4 HIGH: cancel (x−3) [ticked], substitute, land boxed "4"
 *  4 | seq5 red-margin: always declare 0/0 before factoring — method marks
 *  5 | seq6: speed-trap heading + the new limit lim(x→1)(x¹⁸−1)/(x¹²−1) + staged WRONG
 *      move "(x−1)(x¹⁷+x¹⁶+…+1)" crossed out in red — the reversal beat itself
 *  6 | seq7: the smart rewrite — divide num/denom by (x−1), exposing two star-limit
 *      ratios; outer division of the fraction-of-fractions flattened to a plain "÷"
 *      between two <Frac> blocks (never nested <Frac> inside <Frac> — Frac's own
 *      numerator/denominator props are typed as plain strings, so true 2-D nesting
 *      isn't the primitive's job; a flat row reads just as clearly here)
 *  7 | seq8 HIGH: apply the star limit (n·a^(n−1) at a=1) top and bottom, land 3/2
 *
 * Layout plan (x-range × y-range per element):
 *  b1 | Limit x→3 (18,ink,start)            | Limit  | x380..415  y96..124 (bl112)
 *  b1 | Frac x²−2x−3 / x−3 (18,ink,w120)    | Frac   | x445..565  y85..122 (cx505,bl112)
 *  b1 | Step-1 declare text (14,ink,mid)     | T mid  | x~326..754(en)/~316..764(hi) y139..156 (bl152)
 *  b1 | underline                            | Draw   | x330..750 y168
 *  b2 | factor formula (19,ink,mid)          | T mid  | x~380..700  y185..208 (bl202)
 *  b2 | landing underline                     | Draw   | x410..670 y218
 *  b3 | Limit x→3 (18,ink,start)             | Limit  | x290..325  y246..272 (bl260)
 *  b3 | Frac (x−3)(x+1)/(x−3) (18,ink,w110)  | Frac   | x355..465  y233..272 (cx410,bl260)
 *  b3 | cancel tick — numerator's (x−3)       | Draw   | x368..414 y236..252
 *  b3 | cancel tick — denominator (x−3)       | Draw   | x388..432 y256..271
 *  b3 | "=" (18,ink,mid)                      | T mid  | x282..298  y288..316 (bl304)
 *  b3 | Limit x→3 (18,ink,start)             | Limit  | x330..365  y290..316 (bl304)
 *  b3 | "(x + 1)" (18,ink,start)              | T st   | x385..448  y290..308 (bl304)
 *  b3 | "=" (20,ink,mid)                      | T mid  | x462..478  y288..316 (bl304)
 *  b3 | boxed "4" (22,green)                  | Chip   | x495..539  y286..322
 *  b3 | ring around "4"                       | Draw   | ringD(517,304,36,30)
 *  b4 | red bar                               | Draw   | x740 y225..310
 *  b4 | note 3 lines (13.5,red,w700,start)    | T st   | x756..~975 y234..296
 *  --divider--                                | Draw   | x100..980 y322
 *  b5 | speed-trap heading (15,red,w800,mid)  | T mid  | x~348..732(en)/~366..714(hi) y346..363 (bl352... wait see below)
 *  b5 | Limit x→1 (18,ink,start)             | Limit  | x420..455  y392..420 (bl408)
 *  b5 | Frac x¹⁸−1 / x¹²−1 (18,ink,w100)     | Frac   | x495..595  y381..420 (cx545,bl408)
 *  b5 | "Not this:" (13.5,muted,start)        | T st   | x440..501  y438..452 (bl452)
 *  b5 | wrong-move formula (16,red,w700,st)   | T st   | x515..675  y436..452 (bl452)
 *  b5 | cross-out over wrong-move formula     | Draw   | crossD(515,439.5,160,17.5)
 *  b6 | Frac x¹⁸−1/x¹²−1 (18,ink,w80)        | Frac   | x355..435  y466..507 (cx395,bl495)
 *  b6 | "=" (20,ink,mid)                      | T mid  | x457..473  y481..505 (bl495)
 *  b6 | Frac x¹⁸−1/x−1 (18,ink,w80)          | Frac   | x500..580  y466..507 (cx540,bl495)
 *  b6 | "÷" (20,ink,mid)                      | T mid  | x606..624  y481..505 (bl495)
 *  b6 | Frac x¹²−1/x−1 (18,ink,w80)          | Frac   | x645..725  y466..507 (cx685,bl495)
 *  b6 | landing underline                     | Draw   | x350..730 y530
 *  b7 | Frac 18·1¹⁷/12·1¹¹ (22,ink,w100)     | Frac   | x370..470  y542..587 (cx420,bl572)
 *  b7 | "=" (24,ink,mid)                      | T mid  | x496..514  y552..580 (bl572)
 *  b7 | "18/12" (24,ink,start)                | T st   | x530..590  y552..580 (bl572)
 *  b7 | "=" (24,ink,mid)                      | T mid  | x606..624  y552..580 (bl572)
 *  b7 | boxed "3/2" (22,green)                | Chip   | x640..704  y545..583
 *  b7 | checkmark beside chip                 | Draw   | checkD(715,568,16)
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

export default function M11Ch12Sec5({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={26} fill={RED} anchor="middle" script>
          {t("Worked example: a clean 0/0 by factoring", "Worked example: factoring se saaf 0/0")}
        </T>
      </Fade>

      {/* beat 1 — state the limit, declare the 0/0 form (Step 1) */}
      <Limit on={beat >= 1} delay={dl(1, 0)} x={380} y={112} size={18} condition="x → 3" anchor="start" fill={INK} />
      <Frac on={beat >= 1} delay={dl(1, 0.4)} x={505} y={112} size={18} numerator="x² − 2x − 3" denominator="x − 3" width={120} fill={INK} />
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={540} y={152} size={14} fill={INK} anchor="middle">
          {t(
            "Step 1 — substitute x = 3: top = 0, bottom = 0. Form is 0/0.",
            "Step 1 — x = 3 rakhiye: top = 0, bottom = 0. Form hai 0/0."
          )}
        </T>
      </Fade>
      <Draw on={beat >= 1} d="M330 168 L750 168" stroke={AMBER_DARK} sw={1.6} delay={dl(1, 1.3)} />

      {/* beat 2 — factor the numerator */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={540} y={202} size={19} fill={INK} anchor="middle">
          x² − 2x − 3 = (x − 3)(x + 1)
        </T>
      </Fade>
      <Draw on={beat >= 2} d="M410 218 L670 218" stroke={AMBER_DARK} sw={1.6} delay={dl(2, 0.6)} />

      {/* beat 3 — cancel, substitute, land the boxed answer (HIGH) */}
      <Limit on={beat >= 3} delay={dl(3, 0)} x={290} y={260} size={18} condition="x → 3" anchor="start" fill={INK} />
      <Frac on={beat >= 3} delay={dl(3, 0.4)} x={410} y={260} size={18} numerator="(x−3)(x+1)" denominator="(x−3)" width={110} fill={INK} />
      <Draw on={beat >= 3} d="M368 252 L414 236" stroke={AMBER_DARK} sw={1.8} delay={dl(3, 0.9)} dur={0.5} />
      <Draw on={beat >= 3} d="M388 271 L432 256" stroke={AMBER_DARK} sw={1.8} delay={dl(3, 1.2)} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 1.6)}>
        <T x={290} y={304} size={18} fill={INK} anchor="middle">
          =
        </T>
      </Fade>
      <Limit on={beat >= 3} delay={dl(3, 1.6)} x={330} y={304} size={18} condition="x → 3" anchor="start" fill={INK} />
      <Fade on={beat >= 3} delay={dl(3, 1.6)}>
        <T x={385} y={304} size={18} fill={INK} anchor="start">
          (x + 1)
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2)}>
        <T x={470} y={304} size={20} fill={INK} anchor="middle">
          =
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.4)}>
        <Chip x={495} y={286} w={44} h={36} fill={CREAM} stroke={GREEN} textFill={GREEN_DARK} size={22} script={false}>
          4
        </Chip>
      </Fade>
      <Draw on={beat >= 3} d={ringD(517, 304, 36, 30)} stroke={GREEN} sw={2} delay={dl(3, 2.9)} />

      {/* beat 4 — red-margin guardrail note */}
      <Draw on={beat >= 4} d="M740 225 L740 310" stroke={RED} sw={3} delay={dl(4, 0)} />
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={756} y={245} size={13.5} fill={RED} anchor="start" weight={700}>
          {t("Always declare the 0/0", "Hamesha 0/0 form")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={756} y={268} size={13.5} fill={RED} anchor="start" weight={700}>
          {t("form before factoring —", "declare karo factoring se pehle —")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.9)}>
        <T x={756} y={291} size={13.5} fill={RED} anchor="start" weight={700}>
          {t("boards award method marks.", "boards method marks dete hain.")}
        </T>
      </Fade>

      {/* divider between the two examples */}
      <Draw on={beat >= 5} d="M100 322 L980 322" stroke={AMBER_DARK} sw={1} delay={dl(5, 0)} />

      {/* beat 5 — speed-trap heading + new limit + staged wrong move, crossed out */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={352} size={15} fill={RED} anchor="middle" weight={800}>
          {t("Speed trap — do NOT factor a degree-18 polynomial", "Speed trap — degree-18 factor MAT kijiye")}
        </T>
      </Fade>
      <Limit on={beat >= 5} delay={dl(5, 0.8)} x={420} y={408} size={18} condition="x → 1" anchor="start" fill={INK} />
      <Frac on={beat >= 5} delay={dl(5, 1.1)} x={545} y={408} size={18} numerator="x¹⁸ − 1" denominator="x¹² − 1" width={100} fill={INK} />
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={440} y={452} size={13.5} fill={MUTED} anchor="start">
          {t("Not this:", "Yeh nahin:")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.9)}>
        <T x={515} y={452} size={16} fill={RED} anchor="start" weight={700}>
          (x−1)(x¹⁷+x¹⁶+…+1)
        </T>
      </Fade>
      <Draw on={beat >= 5} d={crossD(515, 439.5, 160, 17.5)} stroke={RED} sw={2.2} delay={dl(5, 2.3)} />

      {/* beat 6 — the smart rewrite: divide num/denom by (x−1), outer division flattened to ÷ */}
      <Frac on={beat >= 6} delay={dl(6, 0)} x={395} y={495} size={18} numerator="x¹⁸ − 1" denominator="x¹² − 1" width={80} fill={INK} />
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={465} y={495} size={20} fill={INK} anchor="middle">
          =
        </T>
      </Fade>
      <Frac on={beat >= 6} delay={dl(6, 0.6)} x={540} y={495} size={18} numerator="x¹⁸ − 1" denominator="x − 1" width={80} fill={INK} />
      <Fade on={beat >= 6} delay={dl(6, 0.9)}>
        <T x={615} y={495} size={20} fill={INK} anchor="middle">
          ÷
        </T>
      </Fade>
      <Frac on={beat >= 6} delay={dl(6, 1.2)} x={685} y={495} size={18} numerator="x¹² − 1" denominator="x − 1" width={80} fill={INK} />
      <Draw on={beat >= 6} d="M350 530 L730 530" stroke={AMBER_DARK} sw={1.6} delay={dl(6, 1.6)} />

      {/* beat 7 — apply the star limit top and bottom, land 3/2 (HIGH) */}
      <Frac on={beat >= 7} delay={dl(7, 0)} x={420} y={572} size={22} numerator="18 · 1¹⁷" denominator="12 · 1¹¹" width={100} fill={INK} />
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={505} y={572} size={24} fill={INK} anchor="middle">
          =
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.7)}>
        <T x={530} y={572} size={24} fill={INK} anchor="start">
          18/12
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1)}>
        <T x={615} y={572} size={24} fill={INK} anchor="middle">
          =
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.4)}>
        <Chip x={640} y={545} w={64} h={38} fill={CREAM} stroke={GREEN} textFill={GREEN_DARK} size={22} script={false}>
          3/2
        </Chip>
      </Fade>
      <Draw on={beat >= 7} d={checkD(715, 568, 16)} stroke={GREEN} sw={2.2} delay={dl(7, 1.8)} />
    </Scene>
  );
}
