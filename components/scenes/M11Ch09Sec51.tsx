/**
 * M11 Ch09 · Section 51 — "Pitfalls and pro-tips: angle bisectors"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: tips — CLOSES Subtopic 6 (Angle Bisectors, secs 44-51).
 *
 * Consistency check (per task instruction — Sec44/45/46/47 are still placeholder files, so
 * verified against their Supabase board_content directly, the authoritative pre-authoring
 * source): every rule restated here matches the subtopic's established notation exactly —
 * variables a1,b1,c1 / a2,b2,c2 (Sec44 formula item, Sec47 toolkit), the c1,c2 > 0 positive-
 * constant normalization step (Sec44 red-margin, Sec46 step1/red-margin, Sec47 red-margin),
 * "+" sign = origin's bisector (Sec46 step2, Sec47), a1a2+b1b2 > 0 ⇒ '+' obtuse / < 0 ⇒ '+'
 * acute (Sec46 formulas, Sec47 formula — same direction, not inverted), m1m2 = -1 for the two
 * bisectors (Sec46 red-margin, Sec47 "Always: m_b1 m_b2 = -1"), and each line's own
 * √(a²+b²) denominator, never shared (Sec45 red-margin, Sec47 red-margin). No contradictions.
 *
 * board_content has 8 items. item[0]=heading -> always-on title. items[1..7] gate at beat>=1..7.
 * Structural choice (documented per task instructions): only ONE beat (item[1]) is JSON-tagged
 * a trap/red-margin note; items[2..4] are plain reinforcement text (no red-margin style) and
 * item[5] is a red-margin note but its text is "Pro-tip:"-prefixed, so per this chapter's
 * established convention (Sec9/17/26/34/43 — the whisper-tagged pro-tip beat always renders
 * GREEN, matching segments_english seq6 <whisper> wrapping this exact item) it renders as the
 * green pro-tip card, not a second red card. Forcing items 2-4 into a padded 2x2 red grid (the
 * Sec17/26/34/43 pattern) would fabricate three traps the JSON never marks as such — instead:
 * ONE prominent red trap card (item1, full-width, the "biggest" warning) + a compact 3-item
 * amber-bordered checklist card (items 2-4, each a check-marked reinforcement row) + the
 * full-width green pro-tip card with a drawn mnemonic (item5, whisper-tagged) + closing text
 * (items 6-7) + the "Subtopic 6 — complete" chip, still ending exactly like every other tips
 * closer in this chapter.
 *
 * Beats (board_reveal_at_english [0, 6.06, 20.05, 35.41, 48.21, 58.79, 68.52, 76.97], 8 values):
 *  1 | trap (red): skipping c1,c2>0 normalization inverts every identification rule
 *  2 | checklist row 1: acute/obtuse sign rule (with c1,c2>0)
 *  3 | checklist row 2: m1m2 = -1 self-check
 *  4 | checklist row 3: each line's own √(a²+b²), never shared
 *  5 | pro-tip (green, whisper): origin's bisector = the '+' one — drawn mnemonic (2 crossing
 *      lines + the '+' bisector + an "O" dot on its side) with a legend row (Sec43-style
 *      discipline: name each ray in a legend, never a label sitting on the line itself)
 *  6 | text: compute a1a2+b1b2 only when the question actually asks acute vs obtuse
 *  7 | closing (script, amber_dark) + "Subtopic 6 — complete" chip
 *
 * Layout plan (all three stacked cards share x100..980 for a clean vertical rhythm):
 *  b1 | trap card (red) 2-line        | Draw+T   | box x100..980 y95..165, lines y125/151
 *  b2 | checklist card outline+row1   | Draw+T   | box x100..980 y183..291; row1 y216
 *  b3 |   row2                        | check+T  | y246
 *  b4 |   row3                        | check+T  | y276
 *  b5 | pro-tip card (green)          | Draw+T   | box x100..980 y309..463
 *  b5 |   title                       | T mid    | x540 y342
 *  b5 |   caption                     | T mid    | x540 y366
 *  b5 |   mnemonic: L1(494,386)-(586,426); L2(494,426)-(586,386); crossing P(540,406);
 *  b5 |     bisector amber (540,381)-(540,431); O dot (566,392) + label
 *  b5 |   legend row y444/450: L1 swatch+label x230/258, L2 x380/408, '+' bisector x560/588
 *  b6 | text + underline               | T mid + Draw | x540 y486, bar y501 x400..680
 *  b7 | closing line + chip            | T mid script + Chip | x540 y530, chip x420..660 y550..580
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
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD, lineD, checkD } from "./math-kit";

/** Trap/tip card: box draws first, then its (up to 2-line) text fades in — matches
 * the base spec's "thing first, name second" and this chapter's tips-closer convention
 * (Sec9/17/26/34/43). */
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

/** One checklist row: a drawn checkmark, then its text — reuses math-kit's checkD (a real
 * drawn stroke) instead of a fallback glyph, same reasoning as any other sanity-check stamp. */
function ChecklistRow({
  on,
  delay,
  y,
  text,
}: {
  on: boolean;
  delay: number;
  y: number;
  text: string;
}) {
  return (
    <>
      <Draw on={on} delay={delay} d={checkD(130, y - 4, 16)} stroke={AMBER_DARK} sw={2.4} dur={0.35} />
      <Fade on={on} delay={delay + 0.3}>
        <T x={155} y={y} size={14} fill={INK} anchor="start">
          {text}
        </T>
      </Fade>
    </>
  );
}

/** One legend entry: a short line swatch followed by its label — used to name each ray of the
 * mnemonic without any label touching a ray it doesn't belong to (Sec43's discipline). */
function Legend({
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

export default function M11Ch09Sec51({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  // mnemonic geometry — two crossing lines + the amber "+" bisector through P
  const P = { x: 540, y: 406 };

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={21} fill={RED} anchor="middle" script>
          {t("Pitfalls: Angle Bisectors", "Pitfalls: Angle Bisectors")}
        </T>
      </Fade>

      {/* beat 1 — trap: skipping c1,c2>0 normalization inverts every identification rule */}
      <Card
        on={beat >= 1}
        delay={dl(1, 0)}
        x={100}
        y={95}
        w={880}
        h={70}
        stroke={RED}
        sw={2.4}
        cx={540}
        textFill={RED}
        size={15}
        lines={[
          [t("Skipping the positive-constant normalization", "Positive-constant normalization skip karna"), 125],
          [
            t("inverts every identification rule.", "har identification rule ko invert kar deta hai."),
            151,
          ],
        ]}
      />

      {/* beats 2-4 — compact checklist card: 3 reinforcement rows, each its own beat */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 0)}
        d={roundRectD(100, 183, 880, 108)}
        stroke={AMBER_DARK}
        sw={2}
        dur={0.6}
      />
      <ChecklistRow
        on={beat >= 2}
        delay={dl(2, 0.7)}
        y={216}
        text={t(
          "Acute/obtuse: with c1, c2 > 0 — a1a2+b1b2 > 0 ⇒ '+' obtuse; < 0 ⇒ '+' acute.",
          "Acute/obtuse: c1, c2 > 0 ho, to a1a2+b1b2 > 0 ⇒ '+' obtuse; < 0 ⇒ '+' acute."
        )}
      />
      <ChecklistRow
        on={beat >= 3}
        delay={dl(3, 0)}
        y={246}
        text={t(
          "Bisectors must satisfy m1m2 = -1 — else an arithmetic error.",
          "Bisectors mein m1m2 = -1 hona chahiye — nahi to arithmetic error hai."
        )}
      />
      <ChecklistRow
        on={beat >= 4}
        delay={dl(4, 0)}
        y={276}
        text={t(
          "Each line gets its own √(a² + b²) — never share one denominator.",
          "Har line ka apna √(a² + b²) hota hai — ek denominator share mat karo."
        )}
      />

      {/* beat 5 — pro-tip (whisper-tagged): origin's bisector = the '+' one, drawn mnemonic */}
      <Draw on={beat >= 5} delay={dl(5, 0)} d={roundRectD(100, 309, 880, 154)} stroke={GREEN} sw={2.2} dur={0.7} />
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={540} y={342} size={16} fill={GREEN_DARK} anchor="middle" weight={700}>
          {t("Pro-tip: origin's bisector = the '+' one", "Pro-tip: origin ka bisector = '+' wala")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        <T x={540} y={366} size={13} fill={GREEN_DARK} anchor="middle">
          {t(
            "— after making both constants positive. Memorise this anchor.",
            "— dono constants positive banane ke baad. Yeh anchor yaad rakho."
          )}
        </T>
      </Fade>
      {/* mnemonic: two lines crossing at P, the amber "+" bisector through P, O on its side */}
      <Draw on={beat >= 5} delay={dl(5, 1.6)} d={lineD(494, 386, 586, 426)} stroke={INK} sw={2} dur={0.4} />
      <Draw on={beat >= 5} delay={dl(5, 1.9)} d={lineD(494, 426, 586, 386)} stroke={INK} sw={2} dur={0.4} />
      <Draw
        on={beat >= 5}
        delay={dl(5, 2.2)}
        d={lineD(P.x, 381, P.x, 431)}
        stroke={AMBER_DARK}
        sw={2.2}
        dur={0.4}
      />
      <Fade on={beat >= 5} delay={dl(5, 2.6)}>
        <Circle cx={566} cy={392} r={3.5} fill={GREEN_DARK} />
        <T x={575} y={396} size={11} fill={GREEN_DARK} anchor="start" weight={700}>
          O
        </T>
      </Fade>
      {/* legend naming each ray, spaced so no label sits over another ray */}
      <Legend on={beat >= 5} delay={dl(5, 3.0)} x1={230} x2={252} y={444} labelX={258} color={INK} label="L1" />
      <Legend on={beat >= 5} delay={dl(5, 3.2)} x1={380} x2={402} y={444} labelX={408} color={INK} label="L2" />
      <Legend
        on={beat >= 5}
        delay={dl(5, 3.4)}
        x1={560}
        x2={582}
        y={444}
        labelX={588}
        color={AMBER_DARK}
        label={t("'+' bisector → origin's side", "'+' bisector → origin ka side")}
      />

      {/* beat 6 — compute a1a2+b1b2 only when the question actually asks acute vs obtuse */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={540} y={486} size={14} fill={INK} anchor="middle">
          {t(
            "Compute a1a2+b1b2 only when the question asks acute vs obtuse.",
            "a1a2+b1b2 tabhi nikaalo jab sawaal acute vs obtuse maange."
          )}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 0.6)} d={lineD(400, 501, 680, 501)} stroke={AMBER_DARK} sw={2} dur={0.5} />

      {/* beat 7 — closing: don't compute everything; subtopic 6 complete */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <T x={540} y={530} size={14} fill={AMBER_DARK} anchor="middle" script>
          {t(
            "Don't compute everything — compute exactly what's asked.",
            "Sab kuch mat compute karo — bas wahi karo jo poocha gaya hai."
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.7)}>
        <Chip x={420} y={550} w={240} h={30} fill={CREAM} stroke={GREEN} textFill={GREEN_DARK} size={14}>
          {t("Subtopic 6 — complete", "Subtopic 6 — complete")}
        </Chip>
      </Fade>
    </Scene>
  );
}
