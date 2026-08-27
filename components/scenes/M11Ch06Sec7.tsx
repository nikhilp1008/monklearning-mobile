/**
 * M11 Ch06 · Section 7 — "Worked examples: clean multiplication and the
 * AND/OR mix"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. Two back-to-back worked examples (payoff of
 * Sec1/Sec2/Sec4): Example 1 is a pure repetition-allowed multiplication
 * (Sec4's nʳ vocabulary — the digit slots do NOT shrink, unlike Sec3/Sec6's
 * falling-factorial slots); Example 2 is an OR-of-two-alternatives where one
 * alternative is itself an AND-bracket (Sec2's AND/OR vocabulary), landing on
 * the generalizable rule "bracket each AND-group with ×, then join
 * alternatives with +."
 *
 * Beats (board_reveal_at_english [0,7.51,28.33,46.34,63.06,80.73,100.18],
 * hinglish [0,7.77,28.59,47.96,58.54,71.94,89.6]):
 *  0 Example 1 heading + underline flourish
 *  1 setup: "code = 1 letter, then 3 digits:" + 4 slot boxes (1 letter + 3
 *    digit), option counts 26/10/10/10 dropped in, type labels below, caption
 *    "digits CAN repeat" (the pool does NOT shrink across the 3 digit slots)
 *  2 formula lands: "26 × 10 × 10 × 10 = 26,000" boxed green + checkmark
 *  [erase group A (Example 1) at beat>=3 — independent problem, full erase]
 *  3 Example 2 heading + underline flourish
 *  [group setup: beat 4..5, erased at beat>=6 once the guardrail needs the space]
 *  4 OR-fork setup: branch A = "ready plate (3)" (simple circle+dots), OR,
 *    branch B = an AND-bracket box containing "paratha (4)" AND "chutney (5)"
 *    as two sub-circles joined by an "AND" connector
 *  5 [group setup still visible] formula lands: "3 + (4 × 5) = 23" boxed
 *    green, with the "(4 × 5)" sub-expression itself boxed in amber — the
 *    AND-bracket grouping made visually explicit before beat 6 states the rule
 *  [group setup erased at beat>=6 — its job is done, formula (beat 5) persists]
 *  6 guardrail (red, stamped in the space the OR-fork used to occupy):
 *    "Bracket each AND-group with ×, then join alternatives with +."
 *
 * Layout plan (boxes = estimated render boxes; longer language counts):
 *  always | title (script 24, red)                    | T mid   | x263..817 y39..82
 *  [group A: aOn = beat 0..2, erased at beat>=3]
 *  b0 | "Example 1 (CBSE): ID codes" (22,ink,w700)     | T mid   | x391..689 y107..137
 *  b0 | underline flourish (amber)                     | Draw    | x400..680 y152
 *  b1 | intro "code = 1 letter, then 3 digits:" (18)    | T mid   | x396..684 y186..206
 *  b1 | 4 slot boxes (64×64, gap40)                      | Draw    | x352..728 y280..344
 *  b1 | counts 26,10,10,10 (30,ink,w800, per box)          | T mid  | x369..711 y306..330
 *  b1 | × ×3 (24, muted)                                    | T mid | x424..656 y311..329
 *  b1 | labels letter/digit/digit/digit (14, muted)          | T mid | per-box y357..372
 *  b1 | caption "digits CAN repeat..." (16, amber-dk)         | T mid | x356..724 y387..405
 *  b2 | "26 × 10 × 10 × 10" (32,ink,w800) start x330          | T start | x330..602 y505..540
 *  b2 | " = 26,000" (32,green,w800) start x622                | T start | x622..750 y505..540
 *  b2 | outer box (green)                                      | Draw   | x300..780 y486..570
 *  b2 | checkmark                                                | Draw  | x801..819 y512..527
 *  [group A erased at beat>=3]
 *  [group B: subheading persists beat>=3; setup persists beat 4..5, erased at beat>=6; formula persists beat>=5]
 *  b3 | "Example 2: breakfast order (AND vs OR)" (22,ink,w700) | T mid | x320..760 y107..137
 *  b3 | underline flourish (amber)                              | Draw | x380..700 y152
 *  b4 | intro "pick ONE option:" (18)                            | T mid | x468..612 y186..206
 *  b4 | branch A circle (r55) + 3 dots                            | Draw/circle | x155..265 y295..405
 *  b4 | branch A label "ready plate (3)" (16, muted)                | T mid | x150..270 y418..436
 *  b4 | "OR"/"YA" (34, ink, w800)                                    | T mid | x455..489 y346..370
 *  b4 | bracket box (amber, 330×160)                                 | Draw | x680..1010 y270..430
 *  b4 | sub-circles (r42 ×2) + dots (4 + 5)                            | Draw/circle | x728..962 y308..392
 *  b4 | connector "AND" (18, ink, w800)                                | T mid | x832..859 y346..362
 *  b4 | sub-labels "paratha (4)" / "chutney (5)" (14, muted)            | T mid | x710..830 / x860..980 y403..421
 *  b4 | top label "combo (AND)" (15, amber-dk)                          | T mid | x804..887 y242..259
 *  b5 | "3 +" (32,ink,w800) start x418                                  | T start | x418..466 y505..540
 *  b5 | "(4 × 5)" (32,amber-dk,w800) start x476                         | T start | x476..588 y505..540
 *  b5 | inner box around "(4 × 5)" (amber)                               | Draw  | x470..594 y499..546
 *  b5 | "= 23" (32,green,w800) start x598                                | T start | x598..662 y505..540
 *  b5 | outer box (green)                                                 | Draw | x380..700 y486..570
 *  b5 | checkmark                                                         | Draw | x721..739 y512..527
 *  [setup group erased at beat>=6]
 *  b6 | warning-triangle icon (red)                                       | Draw | x124..156 y222..252
 *  b6 | rule chip (cream/red border, w720 h40)                            | Chip | x180..900 y217..257
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
  GREEN,
  RED,
  AMBER,
  AMBER_DARK,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD, circleD, lineD, checkD } from "./math-kit";

export default function M11Ch06Sec7({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  // Group A (Example 1, beats 0-2) is fully erased at beat 3 — the two worked
  // examples are independent problems, so Example 1's board doesn't need to
  // stay visible during Example 2. Group B (Example 2) splits further: the
  // subheading (beat 3) and the landed formula (beat 5) persist to the end,
  // but the OR-fork setup diagram (beats 4-5) is erased at beat 6 once its
  // pedagogical job is done, so the guardrail rule can land in that freed
  // space rather than being squeezed in beside it. Each element's own `on` is
  // bounded to its beat window (rather than a wrapper div's opacity) so the
  // verifier's Fade-opacity visibility check — which walks up to the nearest
  // g.sc-fade, not an arbitrary ancestor — sees the erasure too; seeking back
  // into an earlier beat correctly restores it.
  const aOn = beat >= 0 && beat < 3;
  const subheadBOn = beat >= 3;
  const setupOn = beat >= 4 && beat < 6;
  const formulaOn = beat >= 5;
  const guardOn = beat >= 6;

  // ---- Example 1 geometry ----
  const boxX = [352, 456, 560, 664];
  const boxCenters = [384, 488, 592, 696];
  const gapCenters = [436, 540, 644];
  const boxNums = [26, 10, 10, 10];
  const boxLabels = [t("letter", "letter"), t("digit", "digit"), t("digit", "digit"), t("digit", "digit")];

  return (
    <Scene>
      {/* title always-on */}
      <Fade on={true}>
        <T x={540} y={70} size={24} fill={RED} script>
          {t("clean multiplication, then the AND/OR mix", "seedha multiplication, phir AND/OR ka mix")}
        </T>
      </Fade>

      {/* ===================== Example 1 (beats 0-2) ===================== */}
      <Fade on={aOn && beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={130} size={22} fill={INK} weight={700}>
          {t("Example 1 (CBSE): ID codes", "Example 1 (CBSE): ID codes")}
        </T>
      </Fade>
      <Draw
        on={aOn && beat >= 0}
        delay={dl(0, 0.7)}
        d={lineD(400, 152, 680, 152)}
        stroke={AMBER}
        sw={2}
        dur={0.6}
      />

      {/* beat 1 — 4 slots: 1 letter + 3 digits, digits do NOT shrink */}
      <Fade on={aOn && beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={200} size={18} fill={INK}>
          {t("code = 1 letter, then 3 digits:", "code = 1 letter, phir 3 digits:")}
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
      <Fade on={aOn && beat >= 1} delay={dl(1, 3.6)}>
        {gapCenters.map((x) => (
          <T key={x} x={x} y={320} size={24} fill={MUTED}>
            ×
          </T>
        ))}
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 4.0)}>
        {boxLabels.map((lb, i) => (
          <T key={i} x={boxCenters[i]} y={368} size={14} fill={MUTED}>
            {lb}
          </T>
        ))}
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 4.5)}>
        <T x={540} y={400} size={16} fill={AMBER_DARK}>
          {t(
            "digits CAN repeat — same 10 choices every slot",
            "digits CAN repeat — har baar wahi 10 options"
          )}
        </T>
      </Fade>

      {/* beat 2 — land: 26 × 10 × 10 × 10 = 26,000 */}
      <Fade on={aOn && beat >= 2} delay={dl(2, 0)}>
        <T x={330} y={530} size={32} fill={INK} weight={800} anchor="start">
          26 × 10 × 10 × 10
        </T>
      </Fade>
      <Fade on={aOn && beat >= 2} delay={dl(2, 0.6)}>
        <T x={622} y={530} size={32} fill={GREEN} weight={800} anchor="start">
          = 26,000
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
          {t("Example 2: breakfast order (AND vs OR)", "Example 2: breakfast order (AND vs OR)")}
        </T>
      </Fade>
      <Draw
        on={subheadBOn}
        delay={dl(3, 0.7)}
        d={lineD(380, 152, 700, 152)}
        stroke={AMBER}
        sw={2}
        dur={0.6}
      />

      {/* beat 4 — OR-fork setup: branch A (simple) OR branch B (AND-bracket) */}
      <Fade on={setupOn} delay={dl(4, 0)}>
        <T x={540} y={200} size={18} fill={INK}>
          {t("pick ONE option:", "ek hi option choose karo:")}
        </T>
      </Fade>
      <Draw
        on={setupOn}
        delay={dl(4, 0.6)}
        d={circleD(210, 350, 55)}
        stroke={INK}
        sw={2}
        dur={0.7}
      />
      <Fade on={setupOn} delay={dl(4, 1.5)}>
        <Circle cx={195} cy={335} r={5} fill={INK} />
        <Circle cx={225} cy={335} r={5} fill={INK} />
        <Circle cx={210} cy={365} r={5} fill={INK} />
      </Fade>
      <Fade on={setupOn} delay={dl(4, 1.9)}>
        <T x={210} y={430} size={16} fill={MUTED}>
          {t("ready plate (3)", "ready plate (3)")}
        </T>
      </Fade>
      <Fade on={setupOn} delay={dl(4, 2.3)}>
        <T x={472} y={358} size={34} fill={INK} weight={800}>
          {t("OR", "YA")}
        </T>
      </Fade>
      <Draw
        on={setupOn}
        delay={dl(4, 2.8)}
        d={roundRectD(680, 270, 330, 160, 14)}
        stroke={AMBER}
        sw={2}
        dur={0.8}
      />
      <Draw
        on={setupOn}
        delay={dl(4, 3.8)}
        d={`${circleD(770, 350, 42)} ${circleD(920, 350, 42)}`}
        stroke={INK}
        sw={1.8}
        dur={0.7}
      />
      <Fade on={setupOn} delay={dl(4, 4.7)}>
        <Circle cx={755} cy={335} r={5} fill={INK} />
        <Circle cx={785} cy={335} r={5} fill={INK} />
        <Circle cx={755} cy={365} r={5} fill={INK} />
        <Circle cx={785} cy={365} r={5} fill={INK} />
        <Circle cx={920} cy={350} r={5} fill={INK} />
        <Circle cx={900} cy={330} r={5} fill={INK} />
        <Circle cx={940} cy={330} r={5} fill={INK} />
        <Circle cx={900} cy={370} r={5} fill={INK} />
        <Circle cx={940} cy={370} r={5} fill={INK} />
      </Fade>
      <Fade on={setupOn} delay={dl(4, 5.1)}>
        <T x={845} y={356} size={18} fill={INK} weight={800}>
          {t("AND", "AND")}
        </T>
      </Fade>
      <Fade on={setupOn} delay={dl(4, 5.5)}>
        <T x={770} y={414} size={14} fill={MUTED}>
          {t("paratha (4)", "paratha (4)")}
        </T>
        <T x={920} y={414} size={14} fill={MUTED}>
          {t("chutney (5)", "chutney (5)")}
        </T>
      </Fade>
      <Fade on={setupOn} delay={dl(4, 5.9)}>
        <T x={845} y={254} size={15} fill={AMBER_DARK}>
          {t("combo (AND)", "combo (AND)")}
        </T>
      </Fade>

      {/* beat 5 — land: 3 + (4 × 5) = 23, the (4×5) AND-group boxed in amber */}
      <Fade on={formulaOn} delay={dl(5, 0)}>
        <T x={418} y={530} size={32} fill={INK} weight={800} anchor="start">
          3 +
        </T>
      </Fade>
      <Fade on={formulaOn} delay={dl(5, 0.5)}>
        <T x={476} y={530} size={32} fill={AMBER_DARK} weight={800} anchor="start">
          (4 × 5)
        </T>
      </Fade>
      <Draw
        on={formulaOn}
        delay={dl(5, 1.0)}
        d={roundRectD(470, 499, 124, 47, 8)}
        stroke={AMBER}
        sw={2}
        dur={0.5}
      />
      <Fade on={formulaOn} delay={dl(5, 1.6)}>
        <T x={598} y={530} size={32} fill={GREEN} weight={800} anchor="start">
          = 23
        </T>
      </Fade>
      <Draw
        on={formulaOn}
        delay={dl(5, 2.2)}
        d={roundRectD(380, 486, 320, 84, 14)}
        stroke={GREEN}
        sw={2.4}
        dur={0.8}
      />
      <Draw
        on={formulaOn}
        delay={dl(5, 2.9)}
        d={checkD(730, 520, 18)}
        stroke={GREEN}
        sw={3}
        dur={0.5}
      />

      {/* beat 6 — guardrail rule, lands where the OR-fork setup used to be */}
      <Draw
        on={guardOn}
        delay={dl(6, 0.3)}
        d={`M140 222 L124 252 L156 252 Z M140 230 L140 241`}
        stroke={RED}
        sw={2.2}
        dur={0.5}
      />
      <Fade on={guardOn} delay={dl(6, 0.9)}>
        <Circle cx={140} cy={248} r={1.8} fill={RED} />
      </Fade>
      <Fade on={guardOn} delay={dl(6, 1.1)}>
        <Chip x={180} y={217} w={720} h={40} fill={CREAM} stroke={RED} textFill={RED} size={16}>
          {t(
            "Bracket each AND-group with ×, then join alternatives with +.",
            "Har AND-group ko × se bracket karo, phir alternatives ko + se jodo."
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
