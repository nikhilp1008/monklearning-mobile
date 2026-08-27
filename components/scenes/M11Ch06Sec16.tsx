/**
 * M11 Ch06 · Section 16 — "nPr in action, and the alike-objects trap"
 * SEVENTH section of Subtopic 2 "Permutations". Canvas 1080×620 · safe
 * x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * Direct sibling of Sec7/Sec8 (same "Example N" heading + boxed-hero-formula
 * landing conventions) — two worked examples. Example 1 is a straightforward
 * numeric nPr application (3 distinct posts from 8 members, order matters):
 * "⁸P₃" is a LITERAL numeric case (n=8, r=3) → real super/subscript digits
 * in non-script (Anek) text, per the notation rule (same treatment as
 * Sec15's "⁴P₂"). Example 2 is the SAMOSA alike-objects trap — the same
 * 6!/(2!·2!)=180 computation Sec12 already did as a compact live gut-check
 * inside its "not all distinct" formula beat, now given its own full
 * worked-example treatment (given → set up → work → answer boxed → sanity
 * check), closing on the non-negotiable "cross out the wrong reflex" beat:
 * 6! = 720 (treating all 6 letters as distinct) drawn and crossed out in
 * red, for contrast against the already-landed green 180.
 *
 * Beats (board_reveal_at_english [0,7.68,19.8,33.54,41.48,59.74,83.46],
 * hinglish [0,6.49,17.84,31.32,38.57,50.95,74.93]):
 *  0 Example 1 heading + underline flourish
 *  [group A: aOn = beat 0..2, erased at beat>=3]
 *  1 setup: "Three DISTINCT posts... order matters: ⁸P₃." + 3 labeled slots
 *    (President/Secretary/Treasurer) with falling counts 8,7,6 dropped in
 *    one at a time (the pool of 8 shrinking by 1 each pick — no repeats,
 *    since one person can't hold two posts), × signs, role labels, caption
 *  2 (HIGH) formula lands: "⁸P₃ = 8!/5! = 8×7×6 = 336" boxed green + check
 *  [group A erased at beat>=3]
 *  3 Example 2 heading + underline flourish (subheadBOn, persists to end)
 *  [group SETUP: setupOn = beat 4..5, erased at beat>=6 — its job (showing
 *   the word) is done once the trap needs the freed space]
 *  4 setup: "6 letters: S, A, M, O, S, A. S appears twice, A appears
 *    twice." + the word SAMOSA drawn large, S red / A amber-dark / M,O ink
 *    (exact color convention from Sec11/Sec12), underlines under the two
 *    repeated S's and two repeated A's
 *  5 (HIGH) formula lands, term by term: "6!/" (ink) "(2!·2!)" (amber-dark,
 *    echoing the repeated-letter coloring) " = 720/4 = " (ink) "180"
 *    (green) — boxed green hero + checkmark (formulaOn, persists to end)
 *  [group SETUP erased at beat>=6 — frees the demo band for the trap]
 *  6 (red guardrail, never erased) THE TRAP: lead-in "The tempting (wrong)
 *    reflex:", then "6! = 720" (treating all 6 letters as distinct) drawn
 *    and crossed out in red — visible at the same time as the already-
 *    boxed 180 for direct contrast — then a warning-triangle icon + chip
 *    explaining WHY: swapping the two S's (or the two A's) produces a
 *    letter-for-letter identical word, so 720 over-counts.
 *
 * Layout plan (boxes = estimated render boxes; longer language counts):
 *  always | title (script 24, red)                          | T mid  | x250..830 y39..82
 *  [group A: aOn = beat 0..2, erased at beat>=3]
 *  b0 | "Example 1 (CBSE): President, Secretary..." (22,ink,w700) | T mid | x188..892 y113..137
 *  b0 | underline flourish (amber)                                 | Draw | x208..872 y152
 *  b1 | intro "Three DISTINCT posts... ⁸P₃." (18,ink)                | T mid| x261..819 y186..206
 *  b1 | 3 slot boxes (64×64, centers 210/540/870)                     | Draw| x178..902 y280..344
 *  b1 | counts 8,7,6 (30,ink,w800, per box)                            | T mid| x196..884 y306..330
 *  b1 | × ×2 (24, muted, gap centers 375/705)                           | T mid| x367..713 y311..329
 *  b1 | labels President/Secretary/Treasurer (14, muted)                 | T mid| per-box y357..372
 *  b1 | caption "no repeats — pool shrinks by 1..." (16,amber-dk)          | T mid| x356..724 y392..410
 *  b2 | "⁸P₃ = 8!/5! = 8×7×6" (32,ink,w800) start x330                     | T st | x330..634 y505..540
 *  b2 | " = 336" (32,green,w800) start x654                                | T st | x654..750 y505..540
 *  b2 | hero box (green, rounded)                                          | Draw | x300..780 y486..570
 *  b2 | checkmark                                                          | Draw | x801..819 y512..527
 *  [group A erased at beat>=3]
 *  [group B: subheadBOn = beat>=3 (persists); setupOn = beat 4..5 (erased
 *   at beat>=6); formulaOn = beat>=5 (persists); guardOn = beat>=6 (persists)]
 *  b3 | "Example 2 (trap): arrangements of SAMOSA" (22,ink,w700)          | T mid | x320..760 y113..137
 *  b3 | underline flourish (amber)                                        | Draw | x340..740 y152
 *  b4 | intro "6 letters: S, A, M, O, S, A. S appears..." (18,ink)          | T mid| x261..819 y182..202
 *  b4 | SAMOSA letters ×6 (44,w800, S red/A amber-dk/M,O ink)                | T mid| x404..676 y246..294
 *  b4 | underlines under repeated S/A (red)                                  | Draw | x400..680 y306
 *  b5 | "6!/" (30,ink,w800) start x356                                       | T st | x356..401 y506..539
 *  b5 | "(2!·2!)" (30,amber-dk,w800) start x404                              | T st | x404..509 y506..539
 *  b5 | " = 720/4 = " (30,ink,w800) start x512                               | T st | x512..677 y506..539
 *  b5 | "180" (30,green,w800) start x680                                     | T st | x680..725 y506..539
 *  b5 | hero box (green, rounded)                                            | Draw | x320..760 y486..570
 *  b5 | checkmark                                                            | Draw | x776..794 y512..527
 *  [group SETUP erased at beat>=6]
 *  b6 | lead "The tempting (wrong) reflex:" (17,ink)                          | T mid| x417..663 y282..300
 *  b6 | "6! = 720" (36,ink,w800)                                              | T mid| x468..612 y322..361
 *  b6 | cross-out over "6! = 720" (red)                                       | Draw | x464..616 y318..365
 *  b6 | warning-triangle icon (red)                                           | Draw | x114..146 y410..440
 *  b6 | guardrail chip (cream/red border, w820 h50)                           | Chip | x170..990 y405..455
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
  crossD,
  INK,
  MUTED,
  GREEN,
  RED,
  AMBER,
  AMBER_DARK,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD, checkD, lineD } from "./math-kit";

export default function M11Ch06Sec16({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  // Group A (Example 1, beats 0-2) is fully erased at beat 3 — the two
  // worked examples are independent problems, same pattern as Sec7/Sec8.
  // Group B (Example 2) splits further: the heading (beat 3) persists to
  // the end; the SAMOSA-word setup (beat 4) is erased once the guardrail
  // (beat 6) needs the freed demo band for the crossed-out "6! = 720"
  // reflex; the landed formula (beat 5) persists so the boxed 180 stays
  // visible next to the crossed-out 720 for direct contrast. Each
  // element's own `on` is bounded to its beat window (never a wrapper
  // div's opacity) so the verifier's Fade-opacity visibility check — which
  // walks up to the nearest g.sc-fade, not an arbitrary ancestor — sees
  // every erasure correctly; seeking back into an earlier beat correctly
  // restores it.
  const aOn = beat >= 0 && beat < 3;
  const subheadBOn = beat >= 3;
  const setupOn = beat >= 4 && beat < 6;
  const formulaOn = beat >= 5;
  const guardOn = beat >= 6;

  // ---- Example 1 geometry: 3 slots (President, Secretary, Treasurer) ----
  const boxCenters = [210, 540, 870];
  const boxX = boxCenters.map((c) => c - 32);
  const gapCenters = [375, 705];
  const boxNums = [8, 7, 6];
  const boxLabels = [
    t("President", "President"),
    t("Secretary", "Secretary"),
    t("Treasurer", "Treasurer"),
  ];

  // ---- Example 2 geometry: SAMOSA letters, repeats flagged ----
  const samosaLetters = ["S", "A", "M", "O", "S", "A"];
  const samosaColors = [RED, AMBER_DARK, INK, INK, RED, AMBER_DARK];
  const samosaXs = [415, 465, 515, 565, 615, 665];
  const samosaY = 280;
  const underlineIdx = [0, 1, 4, 5];
  const underlinePath = underlineIdx
    .map((i) => `M ${samosaXs[i] - 15} 306 L ${samosaXs[i] + 15} 306`)
    .join(" ");

  return (
    <Scene>
      {/* title always-on */}
      <Fade on={true}>
        <T x={540} y={70} size={24} fill={RED} script>
          {t(
            "nPr in action, then the alike-objects trap",
            "nPr in action, phir alike-objects ka trap"
          )}
        </T>
      </Fade>

      {/* ===================== Example 1 (beats 0-2) ===================== */}
      <Fade on={aOn && beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={130} size={22} fill={INK} weight={700}>
          {t(
            "Example 1 (CBSE): President, Secretary, Treasurer from 8 members",
            "Example 1 (CBSE): President, Secretary, Treasurer from 8 members"
          )}
        </T>
      </Fade>
      <Draw
        on={aOn && beat >= 0}
        delay={dl(0, 0.7)}
        d={lineD(208, 152, 872, 152)}
        stroke={AMBER}
        sw={2}
        dur={0.6}
      />

      {/* beat 1 — 3 slots, falling counts 8,7,6 (pool shrinks — no repeats) */}
      <Fade on={aOn && beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={200} size={18} fill={INK}>
          {t(
            "Three DISTINCT posts, no one holds two, so order matters: ⁸P₃.",
            "Teen ALAG posts hain, koi bhi do nahi sambhal sakta, isliye order matters: ⁸P₃."
          )}
        </T>
      </Fade>
      <Draw
        on={aOn && beat >= 1}
        delay={dl(1, 0.6)}
        d={boxX.map((x) => roundRectD(x, 280, 64, 64, 10)).join(" ")}
        stroke={INK}
        sw={2}
        dur={1.0}
      />
      {boxNums.map((n, i) => (
        <Fade key={i} on={aOn && beat >= 1} delay={dl(1, 1.6 + i * 0.5)}>
          <T x={boxCenters[i]} y={320} size={30} fill={INK} weight={800}>
            {n}
          </T>
        </Fade>
      ))}
      <Fade on={aOn && beat >= 1} delay={dl(1, 3.1)}>
        {gapCenters.map((x) => (
          <T key={x} x={x} y={320} size={24} fill={MUTED}>
            ×
          </T>
        ))}
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 3.5)}>
        {boxLabels.map((lb, i) => (
          <T key={i} x={boxCenters[i]} y={368} size={14} fill={MUTED}>
            {lb}
          </T>
        ))}
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 4.0)}>
        <T x={540} y={405} size={16} fill={AMBER_DARK}>
          {t(
            "no repeats — the pool shrinks by 1 each pick",
            "repeat nahi — har baar pool 1 kam hota hai"
          )}
        </T>
      </Fade>

      {/* beat 2 — land: ⁸P₃ = 8!/5! = 8×7×6 = 336 */}
      <Fade on={aOn && beat >= 2} delay={dl(2, 0)}>
        <T x={330} y={530} size={32} fill={INK} weight={800} anchor="start">
          ⁸P₃ = 8!/5! = 8×7×6
        </T>
      </Fade>
      <Fade on={aOn && beat >= 2} delay={dl(2, 0.6)}>
        <T x={654} y={530} size={32} fill={GREEN} weight={800} anchor="start">
          {" "}
          = 336
        </T>
      </Fade>
      <Draw
        on={aOn && beat >= 2}
        delay={dl(2, 1.3)}
        d={roundRectD(300, 486, 480, 84, 14)}
        stroke={GREEN}
        sw={2.4}
        dur={0.8}
      />
      <Draw
        on={aOn && beat >= 2}
        delay={dl(2, 2.0)}
        d={checkD(810, 520, 18)}
        stroke={GREEN}
        sw={3}
        dur={0.5}
      />

      {/* ===================== Example 2 (beats 3-6) ===================== */}
      <Fade on={subheadBOn} delay={dl(3, 0.3)}>
        <T x={540} y={130} size={22} fill={INK} weight={700}>
          {t(
            "Example 2 (trap): arrangements of SAMOSA",
            "Example 2 (trap): arrangements of SAMOSA"
          )}
        </T>
      </Fade>
      <Draw
        on={subheadBOn}
        delay={dl(3, 0.7)}
        d={lineD(340, 152, 740, 152)}
        stroke={AMBER}
        sw={2}
        dur={0.6}
      />

      {/* beat 4 — setup: 6 letters, S/A repeats flagged */}
      <Fade on={setupOn} delay={dl(4, 0)}>
        <T x={540} y={196} size={18} fill={INK}>
          {t(
            "6 letters: S, A, M, O, S, A. S appears twice, A appears twice.",
            "6 letters: S, A, M, O, S, A. S do baar aata hai, A do baar aata hai."
          )}
        </T>
      </Fade>
      {samosaLetters.map((ch, i) => (
        <Fade key={i} on={setupOn} delay={dl(4, 0.8 + i * 0.15)}>
          <T x={samosaXs[i]} y={samosaY} size={44} fill={samosaColors[i]} weight={800}>
            {ch}
          </T>
        </Fade>
      ))}
      <Draw
        on={setupOn}
        delay={dl(4, 2.2)}
        d={underlinePath}
        stroke={RED}
        sw={2.2}
        dur={0.6}
      />

      {/* beat 5 — land, term by term: 6!/(2!·2!) = 720/4 = 180 */}
      <Fade on={formulaOn} delay={dl(5, 0)}>
        <T x={356} y={530} size={30} fill={INK} weight={800} anchor="start">
          6!/
        </T>
      </Fade>
      <Fade on={formulaOn} delay={dl(5, 0.4)}>
        <T x={404} y={530} size={30} fill={AMBER_DARK} weight={800} anchor="start">
          (2!·2!)
        </T>
      </Fade>
      <Fade on={formulaOn} delay={dl(5, 0.9)}>
        <T x={512} y={530} size={30} fill={INK} weight={800} anchor="start">
          {" "}
          = 720/4 ={" "}
        </T>
      </Fade>
      <Fade on={formulaOn} delay={dl(5, 1.5)}>
        <T x={680} y={530} size={30} fill={GREEN} weight={800} anchor="start">
          180
        </T>
      </Fade>
      <Draw
        on={formulaOn}
        delay={dl(5, 2.1)}
        d={roundRectD(320, 486, 440, 84, 14)}
        stroke={GREEN}
        sw={2.4}
        dur={0.8}
      />
      <Draw
        on={formulaOn}
        delay={dl(5, 2.8)}
        d={checkD(785, 520, 18)}
        stroke={GREEN}
        sw={3}
        dur={0.5}
      />

      {/* beat 6 — the trap: "6! = 720" drawn and crossed out in red, next
          to the already-boxed 180, then the guardrail explains why */}
      <Fade on={guardOn} delay={dl(6, 0)}>
        <T x={540} y={295} size={17} fill={INK} weight={600}>
          {t("The tempting (wrong) reflex:", "Lubhavna (galat) reflex:")}
        </T>
      </Fade>
      <Fade on={guardOn} delay={dl(6, 0.6)}>
        <T x={540} y={350} size={36} fill={INK} weight={800}>
          6! = 720
        </T>
      </Fade>
      <Draw
        on={guardOn}
        delay={dl(6, 1.3)}
        d={crossD(468, 322, 144, 40)}
        stroke={RED}
        sw={2.6}
        dur={0.5}
      />
      <Draw
        on={guardOn}
        delay={dl(6, 1.9)}
        d={`M130 410 L114 440 L146 440 Z M130 418 L130 429`}
        stroke={RED}
        sw={2.2}
        dur={0.5}
      />
      <Fade on={guardOn} delay={dl(6, 2.4)}>
        <Circle cx={130} cy={436} r={1.8} fill={RED} />
      </Fade>
      <Fade on={guardOn} delay={dl(6, 2.6)}>
        <Chip x={170} y={405} w={820} h={50} fill={CREAM} stroke={RED} textFill={RED} size={16} script={false}>
          {t(
            "Reflex 6! = 720 forgets swapping identical letters makes no new word.",
            "Reflex 6! = 720 bhool jaata hai — identical letters swap karne se naya word nahi banta."
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
