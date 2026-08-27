/**
 * M11 Ch12 · Section 9 — "Four conditions — break one, lose the marks"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept — the whole section IS a sequence of 4 guardrails qualifying
 * Sec8's lim(x→0) sin x/x = 1. Only 7 reveal values (beats 0-6), one board_content item
 * per beat, 1:1 with the 4 conditions (Condition 3 & 4 each get a formula beat then a
 * guardrail beat, same card, two-part).
 *
 * board_reveal_at_english  = [0.0, 7.68, 18.86, 34.9, 49.83, 62.21, 79.02].
 * board_reveal_at_hinglish = [0.0, 9.05, 20.57, 34.73, 49.83, 62.38, 77.23].
 *
 * Deviation from the default row bands: this is a 2×2 "condition card" grid (reusing
 * Sec7's trap-card grid + red-margin motif), not the story/demo/verdict row split.
 * Columns: L x60-515, R x565-1020 (50px gutter, matches Sec7). Rows: row1 (Conditions
 * 1&2, single-part) y94-234; row2 (Conditions 3&4, two-part: formula beat then guardrail
 * beat added below in the same card) y258-590.
 *
 * Beats:
 *  0(title, always-on) | "Four conditions — break one, lose the marks"
 *  1 | CARD 1 top-left (HIGH): radians-only note — degrees case π/180 ringed
 *  2 | CARD 2 top-right (normal): argument must → 0, small aside lim(x→π) sin x/x = 0
 *  3 | CARD 3 bottom-left part 1 (formula, normal): master rule sin(□)/□→1, then
 *      sin(5x)/(5x)→1 (green) vs sin(5x)/x→5 (amber)
 *  4 | CARD 3 bottom-left part 2 (HIGH guardrail): "Mismatch the boxes and you
 *      mismatch the answer." — thicker bar, divider, bold red 2-line stamp
 *  5 | CARD 4 bottom-right part 1 (formula, normal): (1−cosx)/x→0 (amber) vs
 *      (1−cosx)/x²→1/2 (green)
 *  6 | CARD 4 bottom-right part 2 (guardrail, normal): underline the x² exponent,
 *      divider, "Note the power before you quote a value."
 *
 * Layout plan (x-range × y-range per element):
 *  b1 | red bar (sw3.5)                      | Draw   | x60  y98..230
 *  b1 | "CONDITION 1" badge (15,red,w800,st)  | T st   | x80..~163  y110..127 (bl120)
 *  b1 | line1 (18,red,w800,st)                | T st   | x80..~197  y141..161 (bl155)
 *  b1 | formulaA (15,ink,w600,st)              | T st   | x80..~253(en)/268(hi) y185..205 (bl200)
 *  b1 | formulaB "π/180" (17,red,w800,st)      | T st   | x295..337  y187..205 (bl200)
 *  b1 | ring around π/180                       | Draw   | ringD(316,196,35,21)
 *  b2 | red bar (sw2.4)                        | Draw   | x565 y98..230
 *  b2 | "CONDITION 2" badge (12,red,w700,st)   | T st   | x585..~623 y110..124 (bl120)
 *  b2 | line1 (16,ink,w700,st)                 | T st   | x585..~753(hi) y143..160 (bl155)
 *  b2 | line2 (16,ink,w700,st)                 | T st   | x585..~769(hi) y167..184 (bl179)
 *  b2 | Limit x→π (14,ink,st)                  | Limit  | x605..626  y211..233 (bl222+cond)
 *  b2 | "sin x/x" (13,ink,w700,st)              | T st   | x642..688  y211..226 (bl222)
 *  b2 | "=" (14,ink,mid)                        | T mid  | x704..712  y209..227 (bl222)
 *  b2 | "0" (13,ink,w700,st)                    | T st   | x728..735  y211..226 (bl222)
 *  b2 | tag "(not 1)" (12,red,w800,st)          | T st   | x751..~805(hi) y213..225 (bl222)
 *  b2 | underline under "0"                      | Draw   | x726..737 y230
 *  b3 | red bar (sw2.4)                          | Draw   | x60 y262..445
 *  b3 | "CONDITION 3" badge (13,red,w700,st)     | T st   | x80..~157  y271..289 (bl282)
 *  b3 | master rule "sin(□)/□ → 1" (16,amber,st) | T st   | x80..~184  y301..320 (bl316)
 *  b3 | caption (12,muted,st)                     | T st   | x80..~230(hi) y326..340 (bl336)
 *  b3 | Limit x→0 row1 (18,ink,st)                | Limit  | x80..107   y357..383 (bl372+cond)
 *  b3 | "sin(5x)/(5x)" (18,ink,w700,st)            | T st   | x125..242  y358..377 (bl372)
 *  b3 | "=" row1 (20,ink,mid)                      | T mid  | x258..270  y356..378 (bl372)
 *  b3 | chip "1" (green)                            | Chip   | x286..326  y353..391
 *  b3 | Limit x→0 row2 (18,ink,st)                  | Limit  | x80..107   y407..433 (bl422+cond)
 *  b3 | "sin(5x)/x" (18,ink,w700,st)                | T st   | x125..215  y408..427 (bl422)
 *  b3 | "=" row2 (20,ink,mid)                        | T mid  | x231..243  y406..428 (bl422)
 *  b3 | chip "5" (amber)                              | Chip   | x259..299  y403..441
 *  b4 | red bar (sw3.5, HIGH)                          | Draw   | x60  y455..585
 *  b4 | divider (amber)                                 | Draw   | x75..505 y448
 *  b4 | "GUARDRAIL" tag (14,red,w800,st)                | T st   | x80..~168  y467..482 (bl478)
 *  b4 | line1 (18,red,w800,st)                          | T st   | x80..~287(en) y501..520 (bl515)
 *  b4 | line2 (18,red,w800,st)                          | T st   | x80..~305(en) y526..546 (bl540)
 *  b4 | underline under line2                            | Draw   | x78..~310 y550
 *  b5 | red bar (sw2.4)                                  | Draw   | x565 y262..585
 *  b5 | "CONDITION 4" badge (13,red,w700,st)             | T st   | x585..~662 y271..289 (bl282)
 *  b5 | Limit x→0 row1 (18,ink,st)                       | Limit  | x585..612  y357..383 (bl372+cond)
 *  b5 | "(1 − cos x)/x" (18,ink,w700,st)                 | T st   | x630..756  y358..377 (bl372)
 *  b5 | "=" row1 (20,ink,mid)                            | T mid  | x772..784  y356..378 (bl372)
 *  b5 | chip "0" (amber)                                  | Chip   | x800..840  y353..391
 *  b5 | Limit x→0 row2 (18,ink,st)                        | Limit  | x585..612  y409..435 (bl424+cond)
 *  b5 | "(1 − cos x)/" (18,ink,w700,st)                    | T st   | x630..738  y410..429 (bl424)
 *  b5 | "x²" (18,ink,w700,st)                              | T st   | x738..756  y410..429 (bl424)
 *  b5 | "=" row2 (20,ink,mid)                              | T mid  | x772..784  y408..430 (bl424)
 *  b5 | chip "1/2" (green)                                  | Chip   | x800..856  y403..441
 *  b6 | divider (amber)                                     | Draw   | x575..1010 y448
 *  b6 | underline under "x²"                                 | Draw   | x736..758 y431
 *  b6 | line (16,red,w700,st)                                | T st   | x585..~977(hi) y489..508 (bl505)
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
  ringD,
  Scene,
} from '@/components/scenes/kit';
import { Limit } from "./math-kit";

export default function M11Ch12Sec9({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={26} fill={RED} anchor="middle" script>
          {t("Four conditions — break one, lose the marks", "Chaar conditions — ek todo, marks gaye")}
        </T>
      </Fade>

      {/* beat 1 — CARD 1 (top-left, HIGH): radians only */}
      <Draw on={beat >= 1} d="M60 98 L60 230" stroke={RED} sw={3.5} delay={dl(1, 0)} />
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={80} y={120} size={15} fill={RED} anchor="start" weight={800}>
          CONDITION 1
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={80} y={155} size={18} fill={RED} anchor="start" weight={800}>
          {t("Radians only.", "Sirf radians.")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.4)}>
        <T x={80} y={200} size={15} fill={INK} anchor="start" weight={600}>
          {t("In degrees: sin(x)/x →", "Degrees mein: sin(x)/x →")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.8)}>
        <T x={295} y={200} size={17} fill={RED} anchor="start" weight={800}>
          π/180
        </T>
      </Fade>
      <Draw on={beat >= 1} d={ringD(316, 196, 35, 21)} stroke={RED} sw={2} delay={dl(1, 2.2)} dur={0.6} />

      {/* beat 2 — CARD 2 (top-right, normal): argument must → 0 */}
      <Draw on={beat >= 2} d="M565 98 L565 230" stroke={RED} sw={2.4} delay={dl(2, 0)} />
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={585} y={120} size={12} fill={RED} anchor="start" weight={700}>
          CONDITION 2
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.9)}>
        <T x={585} y={155} size={16} fill={INK} anchor="start" weight={700}>
          {t("The argument must", "Argument ko sach mein")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.3)}>
        <T x={585} y={179} size={16} fill={INK} anchor="start" weight={700}>
          {t("actually go to 0.", "zero tak jaana chahiye.")}
        </T>
      </Fade>
      <Limit on={beat >= 2} delay={dl(2, 1.9)} x={605} y={222} size={14} condition="x → π" anchor="start" fill={INK} />
      <Fade on={beat >= 2} delay={dl(2, 2.2)}>
        <T x={642} y={222} size={13} fill={INK} anchor="start" weight={700}>
          sin x/x
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.4)}>
        <T x={708} y={222} size={14} fill={INK} anchor="middle">
          =
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.6)}>
        <T x={728} y={222} size={13} fill={INK} anchor="start" weight={700}>
          0
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.9)}>
        <T x={751} y={222} size={12} fill={RED} anchor="start" weight={800}>
          {t("(not 1)", "(1 nahin)")}
        </T>
      </Fade>
      <Draw on={beat >= 2} d="M726 230 L737 230" stroke={RED} sw={1.6} delay={dl(2, 3.2)} dur={0.5} />

      {/* beat 3 — CARD 3 (bottom-left) part 1: master rule + 5x example */}
      <Draw on={beat >= 3} d="M60 262 L60 445" stroke={RED} sw={2.4} delay={dl(3, 0)} />
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={80} y={282} size={13} fill={RED} anchor="start" weight={700}>
          CONDITION 3
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.9)}>
        <T x={80} y={316} size={16} fill={AMBER_DARK} anchor="start" weight={700}>
          sin(□)/□ → 1
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.3)}>
        <T x={80} y={336} size={12} fill={MUTED} anchor="start">
          {t("(match top & bottom)", "(top & bottom match karo)")}
        </T>
      </Fade>
      <Limit on={beat >= 3} delay={dl(3, 1.9)} x={80} y={372} size={18} condition="x → 0" anchor="start" fill={INK} />
      <Fade on={beat >= 3} delay={dl(3, 2.2)}>
        <T x={125} y={372} size={18} fill={INK} anchor="start" weight={700}>
          sin(5x)/(5x)
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.5)}>
        <T x={264} y={372} size={20} fill={INK} anchor="middle">
          =
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.8)}>
        <Chip x={286} y={353} w={40} h={38} fill="#FCF4E0" stroke={GREEN} textFill={GREEN_DARK} size={20} script={false}>
          1
        </Chip>
      </Fade>
      <Limit on={beat >= 3} delay={dl(3, 3.3)} x={80} y={422} size={18} condition="x → 0" anchor="start" fill={INK} />
      <Fade on={beat >= 3} delay={dl(3, 3.6)}>
        <T x={125} y={422} size={18} fill={INK} anchor="start" weight={700}>
          sin(5x)/x
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 3.9)}>
        <T x={237} y={422} size={20} fill={INK} anchor="middle">
          =
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 4.2)}>
        <Chip x={259} y={403} w={40} h={38} fill="#FCF4E0" stroke={AMBER_DARK} textFill={AMBER_DARK} size={20} script={false}>
          5
        </Chip>
      </Fade>

      {/* beat 4 — CARD 3 part 2 (HIGH guardrail) */}
      <Draw on={beat >= 4} d="M60 455 L60 585" stroke={RED} sw={3.5} delay={dl(4, 0)} />
      <Draw on={beat >= 4} d="M75 448 L505 448" stroke={AMBER_DARK} sw={1.4} delay={dl(4, 0.3)} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={80} y={478} size={14} fill={RED} anchor="start" weight={800}>
          GUARDRAIL
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.3)}>
        <T x={80} y={515} size={18} fill={RED} anchor="start" weight={800}>
          {t("Mismatch the boxes and", "Boxes mismatch hue, to")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.7)}>
        <T x={80} y={540} size={18} fill={RED} anchor="start" weight={800}>
          {t("you mismatch the answer.", "answer bhi mismatch.")}
        </T>
      </Fade>
      <Draw on={beat >= 4} d={en ? "M78 550 L305 550" : "M78 550 L280 550"} stroke={RED} sw={1.6} delay={dl(4, 2.2)} dur={0.6} />

      {/* beat 5 — CARD 4 (bottom-right) part 1: (1-cos x)/x vs /x^2 */}
      <Draw on={beat >= 5} d="M565 262 L565 585" stroke={RED} sw={2.4} delay={dl(5, 0)} />
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={585} y={282} size={13} fill={RED} anchor="start" weight={700}>
          CONDITION 4
        </T>
      </Fade>
      <Limit on={beat >= 5} delay={dl(5, 0.9)} x={585} y={372} size={18} condition="x → 0" anchor="start" fill={INK} />
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        <T x={630} y={372} size={18} fill={INK} anchor="start" weight={700}>
          (1 − cos x)/x
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.5)}>
        <T x={778} y={372} size={20} fill={INK} anchor="middle">
          =
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.8)}>
        <Chip x={800} y={353} w={40} h={38} fill="#FCF4E0" stroke={AMBER_DARK} textFill={AMBER_DARK} size={20} script={false}>
          0
        </Chip>
      </Fade>
      <Limit on={beat >= 5} delay={dl(5, 2.3)} x={585} y={424} size={18} condition="x → 0" anchor="start" fill={INK} />
      <Fade on={beat >= 5} delay={dl(5, 2.6)}>
        <T x={630} y={424} size={18} fill={INK} anchor="start" weight={700}>
          (1 − cos x)/
        </T>
        <T x={738} y={424} size={18} fill={INK} anchor="start" weight={700}>
          x²
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 3.1)}>
        <T x={778} y={424} size={20} fill={INK} anchor="middle">
          =
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 3.4)}>
        <Chip x={800} y={403} w={56} h={38} fill="#FCF4E0" stroke={GREEN} textFill={GREEN_DARK} size={20} script={false}>
          1/2
        </Chip>
      </Fade>

      {/* beat 6 — CARD 4 part 2: note the power */}
      <Draw on={beat >= 6} d="M575 448 L1010 448" stroke={AMBER_DARK} sw={1.4} delay={dl(6, 0)} dur={0.5} />
      <Draw on={beat >= 6} d="M736 431 L758 431" stroke={AMBER_DARK} sw={2} delay={dl(6, 0.4)} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 1.0)}>
        <T x={585} y={505} size={16} fill={RED} anchor="start" weight={700}>
          {t("Note the power before you quote a value.", "Value batane se pehle hamesha power note kijiye.")}
        </T>
      </Fade>
    </Scene>
  );
}
