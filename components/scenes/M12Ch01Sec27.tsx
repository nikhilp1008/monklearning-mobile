/**
 * M12Ch01 · Section 27 — "Domain: which inputs are allowed?"
 * Subtopic: Domain and Range of Real Functions  (opening section)
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * The voice names exactly three "jams", so the board gives each one its own
 * real graph rather than a bullet: the hyperbola blowing up at its forbidden
 * denominator, the square root that simply does not exist to the left of zero,
 * and the logarithm walled off at x = 0. Then the routine is drawn as what it
 * actually is — three constraint bars stacked over one number line, with only
 * the stretch where ALL THREE overlap inked in as the domain. The closing line
 * (intersection, never union) is exactly what that picture shows.
 *
 * No specific function is ever named by the voice, so no numbers are invented:
 * the forbidden point is labelled x = a, and the constraint bars carry no tick
 * values — only their relationship.
 *
 * Layout grid:
 *   y  30–94   title band (title, underline, subtitle, full rule)
 *   y 100–216  the machine: box + accepted input + output on the left
 *              (x 40..430), the kitchen framing and ingredient tray on the
 *              right (x 450..1044)
 *   y 236      the "three jams" row heading
 *   y 250–408  three jam panels, split by rules at x = 383 and x = 729
 *                x 40..370 · x 396..716 · x 742..1044
 *   y 416      full rule
 *   y 424–458  the three-move routine as chips
 *   y 480–564  the three constraint bars and the number line they intersect on
 *   y 586      the closing line
 *
 * Beat map (8 segments, gates 0..7 — every beat used):
 *  0  "every function is a machine"        title + underline + subtitle + rule
 *                                          + the f box with x in and f(x) out
 *  1  "think of a kitchen — it jams"       the rejected input, the block, JAM,
 *                                          and the ingredient tray (3 ✓, 1 ✗)
 *  2  "jam one: division by zero"          row heading + the hyperbola with its
 *                                          forbidden vertical line at x = a
 *  3  "jam two: even root of a negative"   y = √x, the negative side crossed
 *                                          out, the closed endpoint at 0
 *  4  "jam three: log of a non-positive"   y = log x walled at x = 0, the
 *                                          non-positive side crossed out
 *  5  "find, write, intersect"             the three routine chips, then the
 *                                          three constraint bars
 *  6  "that intersection is the domain"    the number line + the inked-in
 *                                          overlap, labelled DOMAIN
 *  7  "intersection, never union"          the closing line
 *
 * Visual vocabulary (shared with Sections 25 and 26):
 *   the primary curve AMBER_DARK · forbidden things and warnings RED ·
 *   allowed things and results GREEN_DARK · secondary constraint BLUE ·
 *   scaffolding MUTED · chips CREAM on empty board.
 */

import React from "react";
import { Circle } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD, crossD,
  INK, INK_LIGHT, MUTED, AMBER, AMBER_DARK, GREEN, GREEN_DARK, RED, CREAM, PAPER,
  Scene,
} from '@/components/scenes/kit';

const BLUE = "#0284c7";

/* jam ① — y = 1/(x − a), forbidden line at x = 210, axis at y = 376 */
const HYP_RIGHT = "M 217 314 C 224 344, 238 364, 268 371 C 296 375, 326 375, 346 375";
const HYP_LEFT = "M 58 379 C 118 380, 168 384, 194 394 C 202 397, 206 400, 208 403";

/* jam ② — y = √x springing from the origin (500, 376) */
const ROOT_D = "M 500 376 C 516 352, 552 332, 600 322 C 640 314, 668 312, 690 310";

/* jam ③ — y = log x, wall at x = 810, crossing the axis at x = 850 */
const LOG_D = "M 816 404 C 826 388, 838 380, 850 376 C 890 363, 960 344, 1018 332";

export default function M12Ch01Sec27({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ═══════════ beat 0 — the machine and its question ═══════════ */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={50} size={25} fill={RED} script>
          {t("Domain — which inputs are allowed?",
             "Domain — kaun se inputs allowed hain?")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1)}
        d="M 318 66 C 470 62, 640 70, 762 64" stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 1.7)}>
        <T x={540} y={84} size={12.5} fill={MUTED} script>
          {t("a function is a machine — the domain is its list of legal inputs",
             "function ek machine hai — domain uske legal inputs ki list hai")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.4)} d="M 40 94 H 1044" stroke={MUTED} sw={1.2} dur={1} />

      <Fade on={beat >= 0} delay={dl(0, 3)}>
        <Chip x={180} y={112} w={124} h={56} fill={CREAM} stroke={INK}
          textFill={INK} size={30} script={false}>
          f
        </Chip>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 3.6)} d={arrowD(104, 140, 174, 140)} stroke={GREEN_DARK} sw={2.4} dur={0.4} />
      <Draw on={beat >= 0} delay={dl(0, 4)} d={arrowD(310, 140, 382, 140)} stroke={GREEN_DARK} sw={2.4} dur={0.4} />
      <Fade on={beat >= 0} delay={dl(0, 4.4)}>
        <T x={96} y={145} size={14} fill={GREEN_DARK} weight={900} anchor="end">x</T>
        <T x={390} y={145} size={13} fill={GREEN_DARK} weight={900} anchor="start">f(x)</T>
        <T x={242} y={190} size={12} fill={MUTED} weight={700}>
          {t("the machine", "machine")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 5)}>
        <T x={450} y={122} size={13.5} fill={INK} weight={700} anchor="start">
          {t("every function is a machine —", "har function ek machine hai —")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 6)}>
        <T x={450} y={148} size={14} fill={GREEN_DARK} weight={800} anchor="start">
          {t("the domain says which inputs it may accept",
             "domain batata hai kaun se inputs accept ho sakte hain")}
        </T>
      </Fade>

      {/* ═══════════ beat 1 — the kitchen: a bad ingredient jams it ═══════════ */}
      <Draw on={beat >= 1} delay={dl(1, 0.3)} d={arrowD(56, 186, 122, 186)} stroke={RED} sw={2.2} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={94} y={172} size={12} fill={RED} weight={800}>
          {t("bad x", "bad x")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.2)} d={crossD(134, 178, 16, 16)} stroke={RED} sw={2.6} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 1.6)}>
        <T x={144} y={214} size={12.5} fill={RED} weight={900}>JAM</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.4)}>
        <T x={450} y={172} size={12.5} fill={INK_LIGHT} weight={700} anchor="start">
          {t("a recipe accepts only its own ingredient list",
             "recipe sirf apni ingredient list accept karti hai")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.4)}>
        <Circle cx={470} cy={198} r={14} fill={CREAM} stroke={GREEN_DARK} strokeWidth={2} />
        <T x={470} y={203} size={13} fill={GREEN_DARK} weight={900}>✓</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.8)}>
        <Circle cx={516} cy={198} r={14} fill={CREAM} stroke={GREEN_DARK} strokeWidth={2} />
        <T x={516} y={203} size={13} fill={GREEN_DARK} weight={900}>✓</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 4.2)}>
        <Circle cx={562} cy={198} r={14} fill={CREAM} stroke={GREEN_DARK} strokeWidth={2} />
        <T x={562} y={203} size={13} fill={GREEN_DARK} weight={900}>✓</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 4.8)}>
        <Circle cx={608} cy={198} r={14} fill={CREAM} stroke={RED} strokeWidth={2.4} />
        <T x={608} y={203} size={13} fill={RED} weight={900}>✗</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 5.4)}>
        <T x={640} y={204} size={12} fill={RED} weight={800} anchor="start">
          {t("the red one jams the machine", "red wala machine ko jam kar deta hai")}
        </T>
      </Fade>

      {/* ═══════════ beat 2 — jam ①: division by zero ═══════════ */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={540} y={236} size={15} fill={RED} weight={800}>
          {t("exactly THREE jams to watch for", "dekhne ke liye bilkul TEEN jams")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.9)} d="M 383 252 L 383 408" stroke={MUTED} sw={1} dur={0.8} />
      <Draw on={beat >= 2} delay={dl(2, 1.1)} d="M 729 252 L 729 408" stroke={MUTED} sw={1} dur={0.8} />
      <Fade on={beat >= 2} delay={dl(2, 1.5)}>
        <T x={40} y={268} size={13} fill={RED} weight={800} anchor="start">
          {t("① division by zero", "① division by zero")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.4)}>
        <T x={40} y={290} size={12.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("denominator ≠ 0 — that x is forbidden",
             "denominator ≠ 0 — wo x forbidden hai")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 3.4)} d={arrowD(52, 376, 352, 376)} stroke={INK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 2} delay={dl(2, 3.8)} d={arrowD(140, 404, 140, 306)} stroke={INK} sw={2.2} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 4.2)}>
        <T x={360} y={381} size={11.5} fill={INK} weight={800} anchor="start">x</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 4.6)} d={HYP_RIGHT} stroke={AMBER_DARK} sw={2.6} dur={0.8} />
      <Draw on={beat >= 2} delay={dl(2, 5.2)} d={HYP_LEFT} stroke={AMBER_DARK} sw={2.6} dur={0.8} />
      <Draw on={beat >= 2} delay={dl(2, 6)} d="M 210 308 L 210 402" stroke={RED} sw={2.2} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 6.6)}>
        <T x={216} y={396} size={12} fill={RED} weight={900} anchor="start">x = a</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 7.2)} d={arrowD(246, 340, 218, 352)} stroke={RED} sw={1.8} dur={0.3} />
      <Fade on={beat >= 2} delay={dl(2, 7.6)}>
        <T x={252} y={340} size={11.5} fill={RED} weight={800} anchor="start">
          {t("explodes here", "yahan explode")}
        </T>
      </Fade>

      {/* ═══════════ beat 3 — jam ②: even root of a negative ═══════════ */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={396} y={268} size={13} fill={RED} weight={800} anchor="start">
          {t("② even root of a negative", "② negative ka even root")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.2)}>
        <T x={396} y={290} size={12.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("whatever sits under it ≥ 0", "uske neeche jo bhi ho ≥ 0")}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 2.2)} d={arrowD(410, 376, 700, 376)} stroke={INK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 3} delay={dl(3, 2.6)} d={arrowD(500, 404, 500, 306)} stroke={INK} sw={2.2} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 3)}>
        <T x={708} y={381} size={11.5} fill={INK} weight={800} anchor="start">x</T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 3.4)} d={ROOT_D} stroke={AMBER_DARK} sw={2.6} dur={0.9} />
      <Fade on={beat >= 3} delay={dl(3, 4.4)}>
        <T x={700} y={300} size={12} fill={AMBER_DARK} weight={800} anchor="end">y = √x</T>
        <Circle cx={500} cy={376} r={4.5} fill={GREEN_DARK} />
        <T x={506} y={392} size={11.5} fill={GREEN_DARK} weight={800} anchor="start">0</T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 5.4)} d={crossD(410, 320, 80, 46)} stroke={RED} sw={2.4} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 6)}>
        <T x={450} y={392} size={11.5} fill={RED} weight={800}>
          {t("not real", "real nahin")}
        </T>
      </Fade>

      {/* ═══════════ beat 4 — jam ③: logarithm of a non-positive ═══════════ */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={742} y={268} size={13} fill={RED} weight={800} anchor="start">
          {t("③ log of a non-positive", "③ non-positive ka log")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.2)}>
        <T x={742} y={290} size={12.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("the log's argument > 0, strictly", "log ka argument > 0, strictly")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 2.2)} d={arrowD(770, 376, 1032, 376)} stroke={INK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 4} delay={dl(4, 2.6)} d={arrowD(810, 404, 810, 306)} stroke={RED} sw={2.2} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 3)}>
        <T x={1038} y={381} size={11.5} fill={INK} weight={800} anchor="start">x</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 3.4)} d={LOG_D} stroke={AMBER_DARK} sw={2.6} dur={0.9} />
      <Fade on={beat >= 4} delay={dl(4, 4.4)}>
        <T x={1032} y={320} size={12} fill={AMBER_DARK} weight={800} anchor="end">y = log x</T>
        <Circle cx={810} cy={376} r={5} fill={PAPER} stroke={RED} strokeWidth={2} />
        <T x={818} y={392} size={11.5} fill={GREEN_DARK} weight={800} anchor="start">0</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 5.4)} d={crossD(770, 318, 28, 46)} stroke={RED} sw={2.4} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 6)}>
        <T x={802} y={392} size={11.5} fill={RED} weight={800} anchor="end">
          {t("undefined", "undefined")}
        </T>
      </Fade>

      {/* ═══════════ beat 5 — the routine, and the three constraint bars ═══════════ */}
      <Draw on={beat >= 5} delay={dl(5, 0.1)} d="M 40 416 H 1044" stroke={MUTED} sw={1.3} dur={0.9} />
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <Chip x={40} y={424} w={304} h={34} fill={CREAM} stroke={RED}
          textFill={RED} size={12} script={false}>
          {t("① find every possible jam", "① har possible jam dhoondho")}
        </Chip>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 1.2)} d={arrowD(348, 441, 368, 441)} stroke={MUTED} sw={2} dur={0.2} />
      <Fade on={beat >= 5} delay={dl(5, 1.5)}>
        <Chip x={372} y={424} w={304} h={34} fill={CREAM} stroke={BLUE}
          textFill={BLUE} size={12} script={false}>
          {t("② write the condition that avoids it", "② usse bachne wali condition likho")}
        </Chip>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 2.1)} d={arrowD(680, 441, 700, 441)} stroke={MUTED} sw={2} dur={0.2} />
      <Fade on={beat >= 5} delay={dl(5, 2.4)}>
        <Chip x={704} y={424} w={304} h={34} fill={CREAM} stroke={GREEN_DARK}
          textFill={GREEN_DARK} size={12} script={false}>
          {t("③ intersect ALL the conditions", "③ SAARI conditions ko intersect karo")}
        </Chip>
      </Fade>
      {/* constraint ① — a punched-out point */}
      <Draw on={beat >= 5} delay={dl(5, 3.4)} d="M 300 484 H 694" stroke={AMBER} sw={6} dur={0.6} />
      <Draw on={beat >= 5} delay={dl(5, 3.8)} d="M 706 484 H 1000" stroke={AMBER} sw={6} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 4.2)}>
        <Circle cx={700} cy={484} r={5} fill={PAPER} stroke={AMBER_DARK} strokeWidth={2} />
        <T x={44} y={489} size={12} fill={AMBER_DARK} weight={800} anchor="start">
          {t("① denominator ≠ 0", "① denominator ≠ 0")}
        </T>
      </Fade>
      {/* constraint ② — a closed ray */}
      <Draw on={beat >= 5} delay={dl(5, 5)} d="M 480 508 H 1000" stroke={GREEN} sw={6} dur={0.6} />
      <Fade on={beat >= 5} delay={dl(5, 5.5)}>
        <Circle cx={480} cy={508} r={5} fill={GREEN_DARK} />
        <T x={44} y={513} size={12} fill={GREEN_DARK} weight={800} anchor="start">
          {t("② under the even root ≥ 0", "② even root ke neeche ≥ 0")}
        </T>
      </Fade>
      {/* constraint ③ — an open ray */}
      <Draw on={beat >= 5} delay={dl(5, 6.3)} d="M 560 532 H 1000" stroke={BLUE} sw={6} dur={0.6} />
      <Fade on={beat >= 5} delay={dl(5, 6.8)}>
        <Circle cx={560} cy={532} r={5} fill={PAPER} stroke={BLUE} strokeWidth={2} />
        <T x={44} y={537} size={12} fill={BLUE} weight={800} anchor="start">
          {t("③ log argument > 0", "③ log ka argument > 0")}
        </T>
      </Fade>

      {/* ═══════════ beat 6 — the intersection IS the domain ═══════════ */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d={arrowD(292, 556, 1014, 556)} stroke={INK} sw={2} dur={0.6} />
      <Draw on={beat >= 6} delay={dl(6, 1)} d="M 560 556 H 694" stroke={GREEN_DARK} sw={8} dur={0.5} />
      <Draw on={beat >= 6} delay={dl(6, 1.4)} d="M 706 556 H 1000" stroke={GREEN_DARK} sw={8} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 1.9)}>
        <Circle cx={560} cy={556} r={5} fill={PAPER} stroke={GREEN_DARK} strokeWidth={2} />
        <Circle cx={700} cy={556} r={5} fill={PAPER} stroke={GREEN_DARK} strokeWidth={2} />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.6)}>
        <T x={44} y={562} size={13} fill={GREEN_DARK} weight={900} anchor="start">
          {t("DOMAIN = all three at once", "DOMAIN = teenon ek saath")}
        </T>
      </Fade>

      {/* ═══════════ beat 7 — say it aloud ═══════════ */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={586} size={14} fill={RED} weight={800}>
          {t("simultaneously means INTERSECTION, never union",
             "simultaneously ka matlab INTERSECTION hai, union kabhi nahin")}
        </T>
      </Fade>
    </Scene>
  );
}
