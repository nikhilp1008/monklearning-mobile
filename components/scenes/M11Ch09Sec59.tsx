/**
 * M11 Ch09 · Section 59 — "Pitfalls and pro-tips: foot, image and reflection"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: tips — CLOSES Subtopic 7 (Foot of Perpendicular, Image and Reflection) AND is the
 * last CONTENT tips section before the chapter's final Recap/Cheat Sheet subtopic (secs 60-62).
 *
 * STRUCTURAL CHOICE (per task instruction — padded grid, NOT Sec51's lighter layout): the JSON's
 * board_content formally tags only ONE beat (seq5 / this file's beat>=4, "denominator a²+b², no
 * root") as style:"red-margin". BUT segments_english explicitly narrates beats 1-4 as "Trap one",
 * "Trap two", "Trap three", "Trap four" by name (verified live via Supabase REST, chapter_id
 * 5edf4eb2-af54-5da2-b8fa-bfbb3270e702, position 59) — four genuine, named traps. That is the
 * opposite of Sec51 (only one real trap, correctly given a light single-card layout) and matches
 * Sec17/26/34/43 (four named traps each) — so this section follows THEIR padded 2x2 red-trap-grid
 * precedent, copying Sec43's exact card geometry for visual consistency across the chapter's tips
 * closers. seq6 (this file's beat>=5) is ALSO JSON-tagged red-margin + high emphasis, but its text
 * is "Pro-tip:"-prefixed and segments_english wraps it in <whisper>...</whisper> — per this
 * chapter's established convention (Sec9/17/26/34/43/51: whisper-tagged pro-tip -> GREEN card, not
 * a 5th red card) it renders as the green pro-tip card below the grid.
 *
 * board_content has 8 items. item[0]=heading -> always-on title. items[1..7] gate at beat>=1..7:
 * 4 red traps (b1-b4: drop-the-2 foot-vs-image factor, swap/negate for the 3 special mirrors,
 * can't-reflect-an-equation-directly except y=x, a²+b² denominator has NO root unlike distance's
 * √(a²+b²)), one green pro-tip card (b5 — one image point + the mirror intersection is enough,
 * drawn mnemonic), a supporting text line (b6 — halves the work vs. reflecting two points), and the
 * closing line + "Subtopic 7 — complete" chip (b7 — factor-of-two summary; last CONTENT subtopic,
 * only the Recap/Cheat Sheet subtopic remains after this).
 *
 * VERIFICATION (task-required consistency check, done live via Supabase REST against positions
 * 52-55, all real/authored): every rule restated here matches exactly. Sec52/53 establish the foot
 * step -(ax1+by1+c)/(a²+b²) with denominator a²+b² and NO square root (Sec52 seq7 formula, Sec53
 * seq7 formula) — beat4 here restates that denominator/no-root fact verbatim, contrasted against
 * the distance formula's √(a²+b²) (Sec27-30's own d=|Ax1+By1+C|/√(A²+B²)). Sec54 seq3-5 derive the
 * image as using parameter 2t — exactly double the foot's step — matching beat1 here ("the image
 * uses twice that — do not drop the 2"). Sec55 beats 4-6 give the three special mirrors y=x ->
 * (y,x), x-axis -> (x,-y), y-axis -> (-x,y) — all swap/negate operations, matching beat2 here.
 * Sec54 seq6 states you cannot tweak a line's equation directly to reflect it (except the y=x case,
 * where swapping x/y works) — reflect two points instead — matching beat3 here exactly, including
 * the y=x exception. Sec54 seq7-8 (red-margin) is the direct source of this section's pro-tip: "if
 * m and the mirror intersect, the reflection also passes through that intersection... one image
 * point plus that intersection is enough — half the work" — matching beat5/beat6 here verbatim (the
 * "halves the work versus reflecting two separate points" line is Sec54's own closing sentence,
 * reused as this section's beat6). No contradictions found anywhere.
 *
 * DATA-TIMING QUIRK (documented per Sec25/26 precedent, PROGRESS-math9.md — not treated as a scene
 * defect): board_reveal_at_english = [0, 5.97, 16.3, 29.61, 43.09, 55.98, 80.81, 77.91]. Index 6
 * (80.81) EXCEEDS this section's own English audio duration (78.41s per Supabase
 * duration_sec_english), and index 7 (77.91) is LESS than index 6 — a non-monotonic pair, unusual
 * even by Sec25/26's precedent (which was merely "cramped", not out-of-order/out-of-bounds). Given
 * useBeat's break-on-first-false loop (kit.tsx), any currentTime in (77.91, 80.81] cannot activate
 * beat>=6 (the check at i=6 fails and the loop stops before ever inspecting i=7), and no real
 * currentTime can exceed the audio's own duration during normal playback or the verifier's capped
 * seek (`Math.min(reveal+1, duration-0.5)`) — so the automated English pass necessarily freezes at
 * beat 5 for its b6/b7/final frames (verified: this does not itself trigger a FAIL, since beat 5's
 * content alone has no overlap/overflow — it only prints as an advisory `stall`, beats 6-7 simply
 * never get exercised by the English run). Cross-checked two ways, both clean:
 * (1) Hinglish reveals = [0, 4.78, 15.02, 25.26, 38.57, 51.11, 61.7, 66.73] are well-ordered and
 *     comfortably inside duration_sec_hinglish=71.93 — beats 6 and 7 (and the closing chip) render
 *     correctly with no overlap/overflow in the Hinglish run.
 * (2) Manual override: the lesson page's `?t=` debug param sets React `currentTime` state directly
 *     from the raw URL value with NO clamp to the audio's real duration (only the `<audio>` element
 *     itself silently clamps its own playback position — the React prop feeding the Scene does
 *     not) — confirmed in src/app/lessons/[chapterId]/page.tsx. So navigating to
 *     `?sec=59&t=81` (or higher) legitimately forces `currentTime` past 80.81 and activates
 *     beat>=6 and beat>=7 exactly as real playback would if the data were monotonic. Used this to
 *     screenshot the fully-settled beat-7 frame directly — confirmed clean (see WORKFLOW report).
 * This is an upstream data artifact (a swapped/duplicated pair of reveal_at values), same category
 * as Sec25/26's cramped-final-beat quirk — not a defect in this scene's code, which maps all 8
 * reveal indices straight to beats 0-7 exactly as instructed, no reordering performed here.
 *
 * Beats (board_reveal_at_english, 8 values):
 *  1 | trap 1 (red): foot step -(ax1+by1+c)/(a²+b²); image = TWICE that — don't drop the 2
 *  2 | trap 2 (red): for y=x / x-axis / y-axis, swap or negate — faster, error-proof
 *  3 | trap 3 (red): can't reflect an equation directly (except y=x) — reflect points instead
 *  4 | trap 4 (red, JSON red-margin): denominator a²+b², NO root — contrast distance's √(a²+b²)
 *  5 | pro-tip (green, JSON red-margin + whisper): one image point + the mirror intersection is
 *      enough — drawn mnemonic: mirror line M, original line L crossing it at I, one image point
 *      P' (reflection of a point P on L), image line L' through I and P' — legend row naming M/L/
 *      I/P' so no label sits on a stroke (Sec43/51 discipline)
 *  6 | text: halves the work versus reflecting two separate points
 *  7 | closing (script, amber_dark) + "Subtopic 7 — complete" chip
 *
 * Layout plan (identical geometry to Sec43's verified 2x2 red-trap-grid + green pro-tip card +
 * closing band, for visual consistency across this chapter's tips closers):
 *  b1 | card1 (red) 2-line   | Draw+T | box x60..520  y100..165
 *  b2 | card2 (red) 2-line   | Draw+T | box x560..1020 y100..165
 *  b3 | card3 (red) 2-line   | Draw+T | box x60..520  y185..250
 *  b4 | card4 (red) 2-line   | Draw+T | box x560..1020 y185..250
 *  b5 | pro-tip card (green) | Draw+T | box x100..980 y275..450
 *  b5 |   title              | T mid  | x540 y310
 *  b5 |   caption             | T mid  | x540 y336
 *  b5 |   mnemonic: mirror M (486,390)-(594,390) amber; I=(540,390) amber dot (on M);
 *  b5 |     L: I(540,390)-P(572,364) ink; connector P-P' (572,364)-(572,416) muted;
 *  b5 |     P dot ink (572,364); P' dot green_dark (572,416); L': I(540,390)-P'(572,416) green_dark
 *  b5 |   legend row y434: L swatch+label x200/222/228, M swatch+label x290/312/318,
 *  b5 |     I dot+label cx460/470, P' dot+label cx650/660
 *  b6 | text + underline     | T mid + Draw | x540 y478, bar y490 x400..680
 *  b7 | closing line + chip  | T mid script + Chip | x540 y508, chip x420..660 y536..570
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
  AMBER_DARK,
  GREEN,
  GREEN_DARK,
  RED,
  MUTED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD, lineD } from "./math-kit";

/** Trap/tip card: box draws first, then its (up to 2-line) text fades in — matches
 * the base spec's "thing first, name second" and this chapter's tips-closer convention
 * (Sec9/17/26/34/43/51). */
function Card({
  on,
  delay,
  x,
  y,
  w,
  h,
  stroke,
  sw = 2,
  cx,
  lines,
  textFill,
  size = 14,
}: {
  on: boolean;
  delay: number;
  x: number;
  y: number;
  w: number;
  h: number;
  stroke: string;
  sw?: number;
  cx: number;
  lines: [string, number][];
  textFill: string;
  size?: number;
}) {
  return (
    <>
      <Draw on={on} delay={delay} d={roundRectD(x, y, w, h)} stroke={stroke} sw={sw} dur={0.6} />
      <Fade on={on} delay={delay + 0.7}>
        {lines.map(([txt, ty], i) => (
          <T key={i} x={cx} y={ty} size={size} fill={textFill} anchor="middle" weight={700}>
            {txt}
          </T>
        ))}
      </Fade>
    </>
  );
}

/** One line-legend entry: a short swatch stroke followed by its label — used to name the
 * mirror/line rays of the mnemonic without any label sitting on a stroke (Sec43/51 discipline). */
function LineLegend({
  on,
  delay,
  x1,
  x2,
  y,
  labelX,
  color,
  label,
}: {
  on: boolean;
  delay: number;
  x1: number;
  x2: number;
  y: number;
  labelX: number;
  color: string;
  label: string;
}) {
  return (
    <>
      <Draw on={on} delay={delay} d={lineD(x1, y, x2, y)} stroke={color} sw={2.6} dur={0.35} />
      <Fade on={on} delay={delay + 0.2}>
        <T x={labelX} y={y + 6} size={13} fill={color} anchor="start" weight={700}>
          {label}
        </T>
      </Fade>
    </>
  );
}

/** One point-legend entry: a small dot swatch followed by its label — same discipline as
 * LineLegend, for the mnemonic's two named points (I and P'). */
function DotLegend({
  on,
  delay,
  cx,
  y,
  labelX,
  color,
  label,
}: {
  on: boolean;
  delay: number;
  cx: number;
  y: number;
  labelX: number;
  color: string;
  label: string;
}) {
  return (
    <>
      <Fade on={on} delay={delay}>
        <Circle cx={cx} cy={y} r={4} fill={color} />
      </Fade>
      <Fade on={on} delay={delay + 0.2}>
        <T x={labelX} y={y + 5} size={13} fill={color} anchor="start" weight={700}>
          {label}
        </T>
      </Fade>
    </>
  );
}

export default function M11Ch09Sec59({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  // mnemonic geometry — mirror M through I, original line L to point P, image line L' to P'
  const M_Y = 390;
  const I = { x: 540, y: M_Y };
  const P = { x: 572, y: 364 };
  const Pp = { x: 572, y: 2 * M_Y - P.y }; // (572, 416) — reflection of P across the mirror

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={21} fill={RED} anchor="middle" script>
          {t("Pitfalls: Foot, Image & Reflection", "Pitfalls: Foot, Image & Reflection")}
        </T>
      </Fade>

      {/* beat 1 — trap: foot step vs image step, don't drop the factor of 2 */}
      <Card
        on={beat >= 1}
        delay={dl(1, 0)}
        x={60}
        y={100}
        w={460}
        h={65}
        stroke={RED}
        sw={2.4}
        cx={290}
        textFill={RED}
        lines={[
          [t("Foot uses -(ax₁+by₁+c)/(a²+b²);", "Foot mein -(ax₁+by₁+c)/(a²+b²) aata hai;"), 127],
          [t("image = TWICE that — don't drop the 2.", "image uska DOUBLE hai — 2 mat bhoolna."), 151],
        ]}
      />

      {/* beat 2 — trap: special mirrors use swap or negate */}
      <Card
        on={beat >= 2}
        delay={dl(2, 0)}
        x={560}
        y={100}
        w={460}
        h={65}
        stroke={RED}
        cx={790}
        textFill={RED}
        lines={[
          [t("For y=x, the x-axis, y-axis —", "y=x, x-axis, y-axis ke liye —"), 127],
          [t("use swap or negate. Faster, error-proof.", "swap ya negate karo — fast, error-free."), 151],
        ]}
      />

      {/* beat 3 — trap: can't reflect an equation directly (except y=x) */}
      <Card
        on={beat >= 3}
        delay={dl(3, 0)}
        x={60}
        y={185}
        w={460}
        h={65}
        stroke={RED}
        cx={290}
        textFill={RED}
        lines={[
          [t("Can't reflect an EQUATION directly", "EQUATION seedha reflect nahi hoti"), 212],
          [t("(except y=x) — reflect points instead.", "(y=x chhodkar) — points reflect karo."), 236],
        ]}
      />

      {/* beat 4 — trap/guardrail (JSON red-margin): a²+b², no root */}
      <Card
        on={beat >= 4}
        delay={dl(4, 0)}
        x={560}
        y={185}
        w={460}
        h={65}
        stroke={RED}
        cx={790}
        textFill={RED}
        lines={[
          [t("Denominator is a²+b² — NO root.", "Denominator a²+b² hai — root NAHI hai."), 212],
          [t("Distance formula uses √(a²+b²) instead.", "Distance formula mein √(a²+b²) hota hai."), 236],
        ]}
      />

      {/* beat 5 — pro-tip (JSON red-margin, whisper-narrated): one image point + the mirror
          intersection is enough. Drawn mnemonic: mirror M, line L through I, image point P',
          image line L' through I and P'. */}
      <Draw on={beat >= 5} delay={dl(5, 0)} d={roundRectD(100, 275, 880, 175)} stroke={GREEN} sw={2.2} dur={0.7} />
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={540} y={310} size={16} fill={GREEN_DARK} anchor="middle" weight={700}>
          {t("Pro-tip: reflecting a line?", "Pro-tip: line reflect karni hai?")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        <T x={540} y={336} size={14} fill={GREEN_DARK} anchor="middle">
          {t(
            "One image point + the mirror intersection is enough.",
            "Ek image point + mirror intersection kaafi hai."
          )}
        </T>
      </Fade>
      {/* mirror M, drawn first (the "thing" the rest is measured against) */}
      <Draw on={beat >= 5} delay={dl(5, 1.6)} d={lineD(486, M_Y, 594, M_Y)} stroke={AMBER_DARK} sw={2.2} dur={0.4} />
      {/* original line L: from I through P (above the mirror) */}
      <Draw on={beat >= 5} delay={dl(5, 1.9)} d={lineD(I.x, I.y, P.x, P.y)} stroke={INK} sw={2} dur={0.4} />
      {/* I marked on the mirror, P marked on L */}
      <Fade on={beat >= 5} delay={dl(5, 2.2)}>
        <Circle cx={I.x} cy={I.y} r={4} fill={AMBER_DARK} />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2.4)}>
        <Circle cx={P.x} cy={P.y} r={3.5} fill={INK} />
      </Fade>
      {/* connector P-P' (thin, muted — the reflection step across the mirror) */}
      <Draw on={beat >= 5} delay={dl(5, 2.6)} d={lineD(P.x, P.y, Pp.x, Pp.y)} stroke={MUTED} sw={1.6} dur={0.4} />
      {/* P' — the one image point — and the image line L' through I and P' */}
      <Fade on={beat >= 5} delay={dl(5, 3.0)}>
        <Circle cx={Pp.x} cy={Pp.y} r={4} fill={GREEN_DARK} />
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 3.2)} d={lineD(I.x, I.y, Pp.x, Pp.y)} stroke={GREEN_DARK} sw={2.2} dur={0.4} />
      {/* legend row — names every stroke/point so nothing sits labeled on the icon itself */}
      <LineLegend on={beat >= 5} delay={dl(5, 3.6)} x1={200} x2={222} y={434} labelX={228} color={INK} label="L" />
      <LineLegend
        on={beat >= 5}
        delay={dl(5, 3.8)}
        x1={290}
        x2={312}
        y={434}
        labelX={318}
        color={AMBER_DARK}
        label={t("M (mirror)", "M (mirror)")}
      />
      <DotLegend on={beat >= 5} delay={dl(5, 4.0)} cx={460} y={434} labelX={470} color={AMBER_DARK} label="I" />
      <DotLegend
        on={beat >= 5}
        delay={dl(5, 4.2)}
        cx={650}
        y={434}
        labelX={660}
        color={GREEN_DARK}
        label={t("P' (image)", "P' (image)")}
      />

      {/* beat 6 — halves the work versus reflecting two separate points */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={540} y={478} size={15} fill={INK} anchor="middle">
          {t(
            "That halves the work versus reflecting two separate points.",
            "Isse do alag points reflect karne se kaam aadha ho jaata hai."
          )}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 0.6)} d={lineD(400, 490, 680, 490)} stroke={AMBER_DARK} sw={2} dur={0.5} />

      {/* beat 7 — closing: factor-of-two summary; Subtopic 7 (last content subtopic) complete */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <T x={540} y={508} size={14} fill={AMBER_DARK} anchor="middle" script>
          {t(
            "One step to the foot, two steps to the mirror — keep the factor of two straight.",
            "Foot tak ek step, mirror tak do steps — factor of two seedha rakho."
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.7)}>
        <Chip x={420} y={536} w={240} h={34} fill={CREAM} stroke={GREEN} textFill={GREEN_DARK} size={14}>
          {t("Subtopic 7 — complete", "Subtopic 7 — complete")}
        </Chip>
      </Fade>
    </Scene>
  );
}
