/**
 * M11 Ch06 · Section 3 — "Factorial: the whole arrangement in one symbol"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md.
 *
 * Beats (board_reveal_at_english [0,8.53,29.18,36.1,48.64,63.91,76.63],
 * hinglish [0,7.85,27.99,34.73,46.59,59.56,69.29]):
 *  0 anchor: 5 trophies in a row, how many orders? + 5 empty slots drawn
 *  1 represent: counts 5,4,3,2,1 drop into the slots one at a time, ×'s
 *    fade, "= 120" stamps
 *  2 explain: underline the whole product, then "earns its own shorthand"
 *  3 land: "5! = 120" hero, ring drawn around "5!" (the new symbol)
 *  4 [erase group A] generalize: "n!" then "= n(n-1)(n-2)" then "⋯3·2·1",
 *    n! underlined
 *  5 guardrail (red): "0! = 0" written + crossed out, "0! = 1" written +
 *    checked, "(justified next)" caption
 *  6 [erase group B] boundary: mini number-line — green dots at 0..5 (valid),
 *    red crosses at -2,-1 and at 1/2 (invalid) — "not negatives, not
 *    fractions" as a diagram, not prose; closing chip
 *
 * Layout plan (boxes = estimated render boxes; longer language counts):
 *  always | title (script 24, red)               | T mid   | x295..790 y39..82 (Kalam bottom~82)
 *  b0 | anchor question (20, ink)                 | T mid   | x288..790 y114..136
 *  b0 | 5 empty slot boxes (64×64, gap40)          | Draw    | x300..780 y300..364
 *  [group A: aOn = beat 0..3]
 *  b1 | "fill one position at a time:" (16,muted)  | T mid   | x412..668 y267..285
 *  b1 | counts 5,4,3,2,1 in boxes (30, ink, w800)  | T mid   | x300..780 y316..349 (per-box)
 *  b1 | × signs ×4 (24, muted)                     | T mid   | x378..702 y321..347
 *  b1 | "= 120" stamp (34, green, w800)            | T start | x810..895 y313..351
 *  b2 | underline under boxes+stamp (amber)        | Draw    | x300..895 y378
 *  b2 | explain text (18, muted)                   | T mid   | x234..846 y406..426 (hinglish wider)
 *  b3 | "5!" hero (44, green, w800)                | T start | x448..492 y466..514
 *  b3 | "= 120" hero (44, green, w800)              | T start | x522..632 y466..514
 *  b3 | ring around "5!"                            | Draw    | x433..508 y443..538
 *  b3 | "(read: five factorial)" (16, muted)        | T mid   | x448..632 y550..571
 *  [group A erased at beat>=4]
 *  b4 | recall line (16, muted)                     | T mid   | x385..695 y248..265 (hinglish)
 *  b4 | "n!" (32, ink, w800)                        | T start | x364..396 y315..350
 *  b4 | underline under "n!" (amber)                | Draw    | x364..396 y362
 *  b4 | "= n(n-1)(n-2)" (32, ink, w800)              | T start | x404..612 y315..350
 *  b4 | "⋯3·2·1" (32, ink, w800)                     | T start | x620..716 y315..350
 *  b5 | "common trap:" (18, red, w700)               | T mid   | x481..599 y386..406
 *  b5 | "0! = 0" crossed (24, red, w700)              | T mid   | x394..466 y433..459 + Draw cross
 *  b5 | "0! = 1" checked (24, green, w800)            | T mid   | x614..686 y433..459 + Draw check
 *  b5 | "(why? justified in the next section)" (15,mu)| T mid   | x394..686 y483..500 (hinglish wider)
 *  [group B erased at beat>=6]
 *  b6 | header "n! is defined for:" (20, ink)         | T mid   | x385..695 y114..136 (hinglish wider)
 *  b6 | number line shaft + arrowhead                  | Draw    | x200..830 y290
 *  b6 | 8 tick marks (-2..5)                            | Draw    | x220..675 y284..296
 *  b6 | 6 green dots (0..5, valid)                      | circle  | x350..675 y284..296
 *  b6 | 6 green labels                                  | T mid   | x346..679 y309..324
 *  b6 | 2 red crosses (-2,-1, invalid)                  | Draw    | x213..292 y283..297
 *  b6 | 2 red labels (-2,-1)                             | T mid   | x213..292 y309..324
 *  b6 | 1 red cross (1/2, invalid)                       | Draw    | x376..390 y283..297
 *  b6 | 1 red label (1/2)                                | T mid   | x372..394 y309..324
 *  b6 | caption1 valid (16, green)                       | T mid   | x328..752 y347..365
 *  b6 | caption2 invalid (16, red)                        | T mid   | x420..660 y381..399
 *  b6 | checkmark                                          | Draw    | x274..306 y423..456
 *  b6 | closing chip (green, h54)                          | Chip    | x310..770 y420..474
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
  ringD,
  crossD,
  INK,
  MUTED,
  GREEN,
  RED,
  AMBER,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD, axisD, tickD, checkD } from "./math-kit";

export default function M11Ch06Sec3({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  // Group A (beats 0-3) is erased once the general n! formula lands (beat 4);
  // group B (beats 4-5) is erased once the boundary-rule diagram lands (beat
  // 6). Each element's own `on` is bounded to its beat window (rather than a
  // wrapper div's opacity) so the verifier's Fade-opacity visibility check —
  // which walks up to the nearest g.sc-fade, not an arbitrary ancestor — sees
  // the erasure too; seeking back into an earlier beat correctly restores it.
  const aOn = beat >= 0 && beat < 4;
  const bOn = beat >= 4 && beat < 6;

  const boxX = [300, 404, 508, 612, 716];
  const boxCenters = [332, 436, 540, 644, 748];
  const nums = [5, 4, 3, 2, 1];
  const gapCenters = [384, 488, 592, 696];

  return (
    <Scene>
      {/* title always-on */}
      <Fade on={true}>
        <T x={540} y={70} size={24} fill={RED} script>
          {t("one symbol, the whole arrangement: n!", "ek symbol mein, poori arrangement: n!")}
        </T>
      </Fade>

      {/* Group A — beats 0-3, erased when the n! formula arrives at beat 4 */}
      <Fade on={aOn && beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={130} size={20} fill={INK}>
          {t(
            "5 different trophies, one row — how many orders?",
            "5 alag trophies, ek row — kitne orders?"
          )}
        </T>
      </Fade>

      {/* 5 empty slots, drawn as one hand-sweep */}
      <Draw
        on={aOn && beat >= 0}
        delay={dl(0, 0.9)}
        d={boxX.map((x) => roundRectD(x, 300, 64, 64, 10)).join(" ")}
        stroke={INK}
        sw={2}
        dur={1.0}
      />

      {/* beat 1 — counts drop in, one position at a time */}
      <Fade on={aOn && beat >= 1} delay={dl(1, 0.0)}>
        <T x={540} y={280} size={16} fill={MUTED}>
          {t("fill one position at a time:", "ek waqt mein ek position bharo:")}
        </T>
      </Fade>
      {nums.map((n, i) => (
        <Fade key={i} on={aOn && beat >= 1} delay={dl(1, 0.4 + i * 0.7)}>
          <T x={boxCenters[i]} y={340} size={30} fill={INK} weight={800}>
            {n}
          </T>
        </Fade>
      ))}
      <Fade on={aOn && beat >= 1} delay={dl(1, 3.8)}>
        {gapCenters.map((x, i) => (
          <T key={i} x={x} y={340} size={24} fill={MUTED}>
            ×
          </T>
        ))}
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 4.5)}>
        <T x={810} y={340} size={34} fill={GREEN} weight={800} anchor="start">
          = 120
        </T>
      </Fade>

      {/* beat 2 — underline the whole product, then name it */}
      <Draw
        on={aOn && beat >= 2}
        delay={dl(2, 0.3)}
        d={`M300 378 L895 378`}
        stroke={AMBER}
        sw={2.2}
        dur={0.7}
      />
      <Fade on={aOn && beat >= 2} delay={dl(2, 1.1)}>
        <T x={540} y={420} size={18} fill={MUTED}>
          {t(
            "such a common descending product earns its own shorthand",
            "aisa descending product itna common hai — apna shorthand milta hai"
          )}
        </T>
      </Fade>

      {/* beat 3 — land: 5! = 120 */}
      <Fade on={aOn && beat >= 3} delay={dl(3, 0.3)}>
        <T x={448} y={500} size={44} fill={GREEN} weight={800} anchor="start">
          5!
        </T>
      </Fade>
      <Fade on={aOn && beat >= 3} delay={dl(3, 0.7)}>
        <T x={522} y={500} size={44} fill={GREEN} weight={800} anchor="start">
          = 120
        </T>
      </Fade>
      <Draw
        on={aOn && beat >= 3}
        delay={dl(3, 1.3)}
        d={ringD(470, 489.65, 36, 35.95)}
        stroke={AMBER}
        sw={2.4}
        dur={0.8}
      />
      <Fade on={aOn && beat >= 3} delay={dl(3, 2.3)}>
        <T x={540} y={566} size={16} fill={MUTED}>
          {t("(read: five factorial)", "(bolo: five factorial)")}
        </T>
      </Fade>

      {/* Group B — beats 4-5, erased when the boundary diagram lands at beat 6 */}
      <Fade on={bOn} delay={dl(4, 0.2)}>
        <T x={540} y={260} size={16} fill={MUTED}>
          {t("the same pattern, for any n:", "yehi pattern, kisi bhi n ke liye:")}
        </T>
      </Fade>
      <Fade on={bOn} delay={dl(4, 0.9)}>
        <T x={364} y={340} size={32} fill={INK} weight={800} anchor="start">
          n!
        </T>
      </Fade>
      <Draw
        on={bOn}
        delay={dl(4, 1.3)}
        d={`M364 362 L396 362`}
        stroke={AMBER}
        sw={2.4}
        dur={0.4}
      />
      <Fade on={bOn} delay={dl(4, 1.8)}>
        <T x={404} y={340} size={32} fill={INK} weight={800} anchor="start">
          = n(n-1)(n-2)
        </T>
      </Fade>
      <Fade on={bOn} delay={dl(4, 2.6)}>
        <T x={620} y={340} size={32} fill={INK} weight={800} anchor="start">
          ⋯3·2·1
        </T>
      </Fade>

      {/* beat 5 — guardrail: 0! = 1, never 0 */}
      <Fade on={bOn && beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={400} size={18} fill={RED} weight={700}>
          {t("common trap:", "common galti:")}
        </T>
      </Fade>
      <Fade on={bOn && beat >= 5} delay={dl(5, 0.9)}>
        <T x={430} y={452} size={24} fill={RED} weight={700}>
          0! = 0
        </T>
      </Fade>
      <Draw
        on={bOn && beat >= 5}
        delay={dl(5, 1.3)}
        d={crossD(394, 433.28, 72, 26.16)}
        stroke={RED}
        sw={2.4}
        dur={0.4}
      />
      <Fade on={bOn && beat >= 5} delay={dl(5, 1.9)}>
        <T x={650} y={452} size={24} fill={GREEN} weight={800}>
          0! = 1
        </T>
      </Fade>
      <Draw
        on={bOn && beat >= 5}
        delay={dl(5, 2.3)}
        d={checkD(710, 448, 18)}
        stroke={GREEN}
        sw={3}
        dur={0.4}
      />
      <Fade on={bOn && beat >= 5} delay={dl(5, 2.9)}>
        <T x={540} y={495} size={15} fill={MUTED}>
          {t("(why? justified in the next section)", "(kyun? agle section mein justify hoga)")}
        </T>
      </Fade>

      {/* beat 6 — boundary rule, as a diagram (group B erased) */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={130} size={20} fill={INK}>
          {t("n! is defined for:", "n! sirf inke liye defined hai:")}
        </T>
      </Fade>

      <Draw
        on={beat >= 6}
        delay={dl(6, 0.9)}
        d={axisD(200, 830, 290)}
        stroke={INK}
        sw={2}
        dur={0.8}
      />
      <Draw
        on={beat >= 6}
        delay={dl(6, 1.6)}
        d={[220, 285, 350, 415, 480, 545, 610, 675].map((x) => tickD(x, 290)).join(" ")}
        stroke={INK}
        sw={1.4}
        dur={0.4}
      />

      <Fade on={beat >= 6} delay={dl(6, 2.1)}>
        {[350, 415, 480, 545, 610, 675].map((x) => (
          <Circle key={x} cx={x} cy={290} r={6} fill={GREEN} />
        ))}
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.5)}>
        {[
          [350, "0"],
          [415, "1"],
          [480, "2"],
          [545, "3"],
          [610, "4"],
          [675, "5"],
        ].map(([x, label]) => (
          <T key={x} x={x as number} y={320} size={14} fill={GREEN}>
            {label}
          </T>
        ))}
      </Fade>

      <Draw
        on={beat >= 6}
        delay={dl(6, 2.9)}
        d={[220, 285].map((x) => crossD(x - 7, 283, 14, 14)).join(" ")}
        stroke={RED}
        sw={2.2}
        dur={0.4}
      />
      <Fade on={beat >= 6} delay={dl(6, 3.3)}>
        {[
          [220, "-2"],
          [285, "-1"],
        ].map(([x, label]) => (
          <T key={x} x={x as number} y={320} size={14} fill={RED}>
            {label}
          </T>
        ))}
      </Fade>

      <Draw
        on={beat >= 6}
        delay={dl(6, 3.7)}
        d={crossD(383 - 7, 283, 14, 14)}
        stroke={RED}
        sw={2.2}
        dur={0.4}
      />
      <Fade on={beat >= 6} delay={dl(6, 4.0)}>
        <T x={383} y={320} size={14} fill={RED}>
          1/2
        </T>
      </Fade>

      <Fade on={beat >= 6} delay={dl(6, 4.4)}>
        <T x={540} y={360} size={16} fill={GREEN}>
          {t(
            "valid: n = 0, 1, 2, 3, ... (non-negative integers)",
            "valid: n = 0, 1, 2, 3, ... (non-negative integers)"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 4.8)}>
        <T x={540} y={394} size={16} fill={RED}>
          {t("invalid: negatives, fractions", "invalid: negatives, fractions")}
        </T>
      </Fade>

      <Draw
        on={beat >= 6}
        delay={dl(6, 5.2)}
        d={checkD(290, 447, 16)}
        stroke={GREEN}
        sw={3}
        dur={0.5}
      />
      <Fade on={beat >= 6} delay={dl(6, 5.6)}>
        <Chip x={310} y={420} w={460} h={54} fill={GREEN} textFill="#fff" size={18} script={false}>
          {t(
            "n! = the count of every full arrangement",
            "n! = poori arrangement ginne ka tareeka"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
