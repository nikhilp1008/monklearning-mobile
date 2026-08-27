/**
 * M11 Ch12 · Section 20 — "Derivative of aˣ, and differentiability at an oscillating point"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples. board_content seq1 heading ("Worked example: derivative of
 * a^x from first principle") -> always-on title, distinct from the DB title ("Derivative of
 * aˣ, and differentiability at an oscillating point"). Follows the Sec19 "two examples stacked,
 * divided by a rule" pattern. Example 2 reuses Sec10's Squeeze (Sandwich) Theorem verbatim —
 * a small pinch-icon callback (two converging curves + dot, AMBER_DARK, same motif as Sec10's
 * beat1 icon) marks that reuse instead of re-deriving the theorem.
 *
 * board_reveal_at_english  = [0.0, 7.59, 18.18, 29.18, 41.05, 58.11, 80.3, 96.43] (8 beats 0-7).
 * board_reveal_at_hinglish = [0.0, 7.42, 17.66, 28.07, 42.58, 61.53, 78.51, 95.15].
 * beat0 = seq1 heading, always-on title. beats1-7 = seq2-8, gated `beat >= k`:
 *  0(title, always-on) | "Worked example: derivative of a^x from first principle"
 *  1 | seq2 (normal) — set up difference quotient, factor out a^x: f'(x) = lim(h→0)
 *      [a^(x+h)-a^x]/h = a^x · lim(h→0) (a^h-1)/h
 *  2 | seq3 HIGH (green) — land it: the remaining limit is the standard a^h-1)/h -> ln a
 *      junction, so d/dx a^x = a^x · ln a, boxed + checked
 *  3 | seq4 (normal) — the e self-check: a=e, ln e=1, recovers d/dx e^x = e^x, checked
 *  4 | seq5 (normal, RED heading) — Example 2: "Advanced: differentiability at an oscillating
 *      point" + the given piecewise definition f(x)=x²sin(1/x) (x≠0), f(0)=0, drawn with a
 *      hand-drawn bracket (no cases-brace primitive exists — see SCENE_AUTHORING_MATHS notation)
 *  5 | seq6 (normal) — set up via first principle AT THE POINT: f'(0) = lim(h→0)
 *      [h²sin(1/h)-0]/h = lim(h→0) h·sin(1/h)
 *  6 | seq7 HIGH (green) — the squeeze: -|h| ≤ h·sin(1/h) ≤ |h|, pinch-icon callback to Sec10,
 *      land f'(0) = 0 boxed + checked
 *  7 | seq8 RED margin, HIGH — closing subtlety: differentiable at 0, yet f' not continuous
 *      there — placed in the RIGHT MARGIN (x812+) beside beats 5-6, same unused-space strategy
 *      as Sec19's beat7 (no vertical room left below the beat-6 chip before safe y596).
 *
 * Formulas are language-agnostic (byte-identical EN/HI, symbolic) — only prose (title, beat4
 * heading, beat2/3 asides, beat6 side-note, beat7 note) differs per language, box-checked
 * against the longer string each time.
 *
 * Layout plan (x-range × y-range per element; Frac/Limit's `y` is the shared row baseline,
 * same convention as Sec18/19; Anek-sans box math: top = y-0.78×size, bottom = y+0.31×size;
 * Frac box: top = y-1.363×size, bottom = y+0.664×size, derived from Frac's internal
 * numY=y-0.7×size at size×0.85 and denY=y+0.4×size at size×0.85):
 *  title       | T mid script (22,red)              | x213..867(en)/~similar(hi) y31..71 (bl60)
 *  --Example 1: top zone, y~89-280--
 *  b1 | "f'(x) ="(19,ink,w700,st)                    | T st    | x210..276  y100..135 (bl115)
 *  b1 | Limit1 "h→0"(18,ink,st)                       | Limit  | x300..342  y101..144 (bl115)
 *  b1 | Frac1 a^(x+h)-a^x / h (19,ink,w150)           | Frac   | x385..535  y89.1..127.6 (cx460,bl115)
 *  b1 | "="(19,ink,w700,st)                           | T st    | x560..575  y100..135 (bl115)
 *  b1 | "a^x ·"(19,ink,w700,st)                       | T st    | x594..642  y100..135 (bl115)
 *  b1 | Limit2 "h→0"(18,ink,st)                       | Limit  | x660..702  y101..144 (bl115)
 *  b1 | Frac2 a^h-1 / h (19,ink,w90)                  | Frac   | x755..845  y89.1..127.6 (cx800,bl115)
 *  b1 | underline under "a^x ·"                       | Draw   | x594..642 y132
 *  b2 | callback "(a^h-1)/h → ln a — standard limit"(14,ink,mid) | T mid | x393..687(en) y145..160 (bl156)
 *  b2 | boxed "d/dx a^x = a^x · ln a"(18,green,script=false)     | Chip  | x430..650 y172..212
 *  b2 | check beside chip                             | Draw   | checkD(672,192,18)
 *  b3 | line1 "Set a = e: since ln e = 1,"(15,ink,mid) | T mid  | x442..638 y224..241 (bl236)
 *  b3 | line2 "...recovers d/dx e^x = e^x — a clean check."(15,ink,mid) | T mid | x371..709 y250..267 (bl262)
 *  b3 | check beside line2                            | Draw   | checkD(732,258,16)
 *  --divider (drawn on beat4)--                       | Draw   | x100..980 y280
 *  --Example 2: bottom zone, y~290-590--
 *  b4 | heading "Advanced: differentiability at an oscillating point"(17,red,w800,mid) | T mid | x323..757(en) y295..313 (bl308)
 *  b4 | hand-drawn bracket "["                        | Draw   | x366..374 y326..372
 *  b4 | def line1 "f(x) = x² sin(1/x), x ≠ 0"(16,ink,st) | T st | x380..580 y327..347 (bl340)
 *  b4 | def line2 "f(x) = 0, x = 0"(16,ink,st)          | T st | x380..500 y353..373 (bl366)
 *  b5 | "f'(0) ="(19,ink,w700,st)                     | T st   | x260..327 y405..440 (bl420)
 *  b5 | Limit1 "h→0"(18,ink,st)                       | Limit | x346..388  y406..449 (bl420)
 *  b5 | Frac1 h²sin(1/h)-0 / h (19,ink,w160)          | Frac  | x403..563  y394.1..432.6 (cx483,bl420)
 *  b5 | "="(19,ink,w700,st)                           | T st   | x578..588  y405..440 (bl420)
 *  b5 | Limit2 "h→0"(18,ink,st)                       | Limit | x606..648  y406..449 (bl420)
 *  b5 | "h · sin(1/h)"(19,ink,w700,st)                | T st   | x666..780  y405..440 (bl420)
 *  b5 | underline under "h·sin(1/h)"                   | Draw  | x666..780 y436
 *  b6 | inequality "-|h| ≤ h · sin(1/h) ≤ |h|"(20,ink,w700,mid) | T mid | x415..665 y449..470 (bl465)
 *  b6 | pinch-icon curves (callback to Sec10)          | Draw  | x500..552 y494..518
 *  b6 | dot + "0" label                                 | Fade  | (552,506) r3 + T x562 y510
 *  b6 | side note "both bounds → 0"(13,muted,st)        | T st  | x585..690(en) y500..514 (bl510)
 *  b6 | boxed "f'(0) = 0"(20,green,script=false)        | Chip  | x480..600 y540..580
 *  b6 | check beside chip                               | Draw  | checkD(622,560,18)
 *  b7 | red bar                                          | Draw | x812 y402..520
 *  b7 | note 4 lines (14,red,w700,st)                   | T st  | x828..1003(en)/1003(hi) y412..502
 */

import React from "react";
import { Circle } from 'react-native-svg';
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

export default function M11Ch12Sec20({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={60} size={22} fill={RED} anchor="middle" script>
          {t(
            "Worked example: derivative of a^x from first principle",
            "Worked example: a^x ka derivative, first principle se"
          )}
        </T>
      </Fade>

      {/* beat 1 — set up the difference quotient, factor out a^x */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={210} y={115} size={19} fill={INK} anchor="start" weight={700}>
          f&apos;(x) =
        </T>
      </Fade>
      <Limit on={beat >= 1} delay={dl(1, 0.4)} x={300} y={115} size={18} condition="h → 0" anchor="start" fill={INK} />
      <Frac on={beat >= 1} delay={dl(1, 0.9)} x={460} y={115} size={19} numerator="a^(x+h) − a^x" denominator="h" width={150} fill={INK} />
      <Fade on={beat >= 1} delay={dl(1, 1.4)}>
        <T x={560} y={115} size={19} fill={INK} anchor="start" weight={700}>
          =
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.7)}>
        <T x={594} y={115} size={19} fill={INK} anchor="start" weight={700}>
          a^x ·
        </T>
      </Fade>
      <Limit on={beat >= 1} delay={dl(1, 2.0)} x={660} y={115} size={18} condition="h → 0" anchor="start" fill={INK} />
      <Frac on={beat >= 1} delay={dl(1, 2.4)} x={800} y={115} size={19} numerator="a^h − 1" denominator="h" width={90} fill={INK} />
      <Draw on={beat >= 1} d="M594 132 L642 132" stroke={AMBER_DARK} sw={1.6} delay={dl(1, 2.8)} />

      {/* beat 2 — land it: the remaining limit is ln a, boxed + checked (HIGH) */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={540} y={156} size={14} fill={INK} anchor="middle">
          {t(
            "(a^h − 1)/h → ln a — the standard limit.",
            "(a^h − 1)/h → ln a — standard limit hai."
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <Chip x={430} y={172} w={220} h={40} fill={CREAM} stroke={GREEN} textFill={GREEN_DARK} size={18} script={false}>
          {"d/dx a^x = a^x · ln a"}
        </Chip>
      </Fade>
      <Draw on={beat >= 2} d={checkD(672, 192, 18)} stroke={GREEN} sw={2.2} delay={dl(2, 1.0)} />

      {/* beat 3 — the e self-check, checked */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={540} y={236} size={15} fill={INK} anchor="middle">
          {t("Set a = e: since ln e = 1,", "a = e rakhiye: ln e = 1 hai,")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <T x={540} y={262} size={15} fill={INK} anchor="middle" weight={600}>
          {t(
            "this recovers d/dx e^x = e^x — a clean check.",
            "isse d/dx e^x = e^x milta hai — clean check."
          )}
        </T>
      </Fade>
      <Draw on={beat >= 3} d={checkD(732, 258, 16)} stroke={GREEN} sw={2.2} delay={dl(3, 1.0)} />

      {/* divider between the two examples */}
      <Draw on={beat >= 4} d="M100 280 L980 280" stroke={AMBER_DARK} sw={1} delay={dl(4, 0)} />

      {/* beat 4 — Example 2 heading + the given piecewise definition */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={308} size={17} fill={RED} anchor="middle" weight={800}>
          {t(
            "Advanced: differentiability at an oscillating point",
            "Advanced: oscillating point par differentiability"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 4} d="M374 326 L366 326 L366 372 L374 372" stroke={INK} sw={2.2} delay={dl(4, 0.9)} />
      <Fade on={beat >= 4} delay={dl(4, 1.2)}>
        <T x={380} y={340} size={16} fill={INK} anchor="start">
          {"f(x) = x² sin(1/x), x ≠ 0"}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.6)}>
        <T x={380} y={366} size={16} fill={INK} anchor="start">
          {"f(x) = 0, x = 0"}
        </T>
      </Fade>

      {/* beat 5 — set up via first principle AT THE POINT */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={260} y={420} size={19} fill={INK} anchor="start" weight={700}>
          f&apos;(0) =
        </T>
      </Fade>
      <Limit on={beat >= 5} delay={dl(5, 0.4)} x={346} y={420} size={18} condition="h → 0" anchor="start" fill={INK} />
      <Frac on={beat >= 5} delay={dl(5, 0.9)} x={483} y={420} size={19} numerator="h² sin(1/h) − 0" denominator="h" width={160} fill={INK} />
      <Fade on={beat >= 5} delay={dl(5, 1.4)}>
        <T x={578} y={420} size={19} fill={INK} anchor="start" weight={700}>
          =
        </T>
      </Fade>
      <Limit on={beat >= 5} delay={dl(5, 1.7)} x={606} y={420} size={18} condition="h → 0" anchor="start" fill={INK} />
      <Fade on={beat >= 5} delay={dl(5, 2.0)}>
        <T x={666} y={420} size={19} fill={INK} anchor="start" weight={700}>
          {"h · sin(1/h)"}
        </T>
      </Fade>
      <Draw on={beat >= 5} d="M666 436 L780 436" stroke={AMBER_DARK} sw={1.6} delay={dl(5, 2.4)} />

      {/* beat 6 — squeeze it (callback to Sec10), land f'(0) = 0, boxed + checked (HIGH) */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={540} y={465} size={20} fill={INK} anchor="middle" weight={700}>
          {"−|h| ≤ h · sin(1/h) ≤ |h|"}
        </T>
      </Fade>
      <Draw on={beat >= 6} d="M500 494 Q524 506 552 506" stroke={AMBER_DARK} sw={1.8} delay={dl(6, 0.6)} dur={0.5} />
      <Draw on={beat >= 6} d="M500 518 Q524 506 552 506" stroke={AMBER_DARK} sw={1.8} delay={dl(6, 1.3)} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <Circle cx={552} cy={506} r={3} fill={AMBER_DARK} />
        <T x={562} y={510} size={13} fill={AMBER_DARK} anchor="start" weight={700}>
          0
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.9)}>
        <T x={585} y={510} size={13} fill={MUTED} anchor="start">
          {t("both bounds → 0", "dono bounds → 0")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.3)}>
        <Chip x={480} y={540} w={120} h={40} fill={CREAM} stroke={GREEN} textFill={GREEN_DARK} size={20} script={false}>
          {"f'(0) = 0"}
        </Chip>
      </Fade>
      <Draw on={beat >= 6} d={checkD(622, 560, 18)} stroke={GREEN} sw={2.2} delay={dl(6, 2.7)} />

      {/* beat 7 — closing red-margin subtlety (right margin, beside beats 5-6) */}
      <Draw on={beat >= 7} d="M812 402 L812 520" stroke={RED} sw={3} delay={dl(7, 0)} dur={0.6} />
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={828} y={426} size={14} fill={RED} anchor="start" weight={700}>
          {t("Differentiable here, yet", "Gehra point: f, zero par")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={828} y={450} size={14} fill={RED} anchor="start" weight={700}>
          {t("f' is not continuous", "differentiable hai, phir")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.9)}>
        <T x={828} y={474} size={14} fill={RED} anchor="start" weight={700}>
          {t("at 0 — an Advanced", "bhi f' wahan continuous")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={828} y={498} size={14} fill={RED} anchor="start" weight={700}>
          {t("favourite.", "nahin.")}
        </T>
      </Fade>
    </Scene>
  );
}
