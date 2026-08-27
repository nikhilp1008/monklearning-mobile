/**
 * M11 Ch14 · Section 1 — "Random experiments and the sample space"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type: concept. Opens Chapter 14 (Probability),
 * Subtopic 1 "Sample Space and Events".
 *
 * Beats (board_reveal_at_english [0,13.74,29.1,43.52,54.36,65.88,77.4,84.39]):
 *  0 anchor: "What is a RANDOM EXPERIMENT?" + cannot-predict/can-list contrast chips
 *  1 three everyday examples: toss a coin / roll a die / draw a card
 *  2 GUARDRAIL: "2+3=5" crossed out — no uncertainty, NOT random
 *  [group A erased at beat>=3]
 *  3 OUTCOME defined: one die card ("4") = one sample point
 *  4 SAMPLE SPACE S defined: opening brace "S = {"
 *  5 die roster builds: 6 cards fill in one at a time, closing brace, n(S)=6
 *  6 coin roster: H/T cards, n(S)=2
 *  7 closing tagline: hold this image — S is the complete menu
 *
 * Layout plan (estimated render boxes, longer language counts):
 *  b0 | heading (22, ink)                    | T mid  | x381..699 y93..117
 *  b0 | "cannot predict ✗" chip (red, h46)    | Chip   | x150..470 y140..186
 *  b0 | "CAN list in advance ✓" chip (green)  | Chip   | x610..930 y140..186
 *  b1 | "e.g." label (14, muted)              | T mid  | x500..580 y206..217
 *  b1 | 3 example chips (h40)                 | Chip   | x150..370/430..650/710..930 y222..262
 *  b2 | "2 + 3 = 5" (20, ink, crossed red)    | T mid  | x460..620 y277..301
 *  b2 | "no uncertainty → NOT random" (14,red)| T mid  | x420..660 y316..330
 *  [group A erased beat>=3]
 *  b3 | "OUTCOME = one result..." (20,green)  | T mid  | x300..780 y93..117
 *  b3 | single die card w60 h70 "4"           | Draw/T | x510..570 y130..200
 *  b3 | "= 1 outcome (sample point)" (16,ink) | T st   | x585..900 y172..188
 *  b4 | "SAMPLE SPACE S = complete menu.."    | T mid  | x270..810 y225..249 (20,ink)
 *  b4 | "S = {" opening (24,ink)              | T st   | x270..330 y300..325
 *  b5 | 6 die cards (w54 h64) row             | Draw/T | x303..777 y280..344
 *  b5 | closing "}" + "n(S) = 6" chip (green) | T/Chip | x780..820 / x420..660 y280..380
 *  b6 | 2 coin cards H/T (w60 h70)            | Draw/T | x480..660 y400..470
 *  b6 | "n(S) = 2" chip (green, h40)          | Chip   | x460..680 y484..524
 *  b7 | closing tagline (16, ink, ringed)      | T mid  | x300..780 y550..570
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
  crossD,
  ringD,
  INK,
  MUTED,
  GREEN,
  RED,
  CREAM,
  AMBER,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD } from "./math-kit";

const DIE_ROSTER = [1, 2, 3, 4, 5, 6];

export default function M11Ch14Sec1({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  // Group A (beats 0-2: anchor question, examples, guardrail) is erased once
  // vocabulary building starts (beat 3) — it has made its point and the board
  // needs the space for the die/coin roster payoff.
  const aOn = beat >= 0 && beat < 3;

  const dieCardW = 54;
  const dieCardH = 64;
  const dieGap = 30;
  const dieStep = dieCardW + dieGap;
  const dieStartX = 540 - (6 * dieCardW + 5 * dieGap) / 2; // 303

  return (
    <Scene>
      {/* title always-on */}
      <Fade on={true}>
        <T x={540} y={64} size={25} fill={RED} script>
          {t("the result is a surprise — the list of options isn't", "result surprise hai — options ki list nahi")}
        </T>
      </Fade>

      {/* ===================== Group A — beats 0-2 ===================== */}

      <Fade on={aOn && beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={110} size={22} fill={INK} weight={700}>
          {t("What is a RANDOM EXPERIMENT?", "RANDOM EXPERIMENT kya hai?")}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 0} delay={dl(0, 1.1)}>
        <Chip x={150} y={140} w={320} h={46} fill={CREAM} stroke={RED} textFill={RED} size={15} script={false}>
          {t("result: CANNOT predict ✗", "result: predict NAHI kar sakte ✗")}
        </Chip>
      </Fade>
      <Fade on={aOn && beat >= 0} delay={dl(0, 1.8)}>
        <Chip x={610} y={140} w={320} h={46} fill={CREAM} stroke={GREEN} textFill={GREEN} size={14} script={false}>
          {t("full list: CAN write in advance ✓", "poori list: pehle se likh sakte ✓")}
        </Chip>
      </Fade>

      <Fade on={aOn && beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={212} size={14} fill={MUTED}>
          {t("everyday random experiments:", "roz ke random experiments:")}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 1.0)}>
        <Chip x={150} y={222} w={220} h={40} fill={CREAM} stroke={INK} textFill={INK} size={15}>
          {t("toss a coin", "sikka uchalo")}
        </Chip>
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 1.5)}>
        <Chip x={430} y={222} w={220} h={40} fill={CREAM} stroke={INK} textFill={INK} size={15}>
          {t("roll a die", "die roll karo")}
        </Chip>
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 2.0)}>
        <Chip x={710} y={222} w={220} h={40} fill={CREAM} stroke={INK} textFill={INK} size={15}>
          {t("draw a card", "card nikaalo")}
        </Chip>
      </Fade>

      <Fade on={aOn && beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={295} size={20} fill={INK} weight={700}>
          2 + 3 = 5
        </T>
      </Fade>
      <Draw
        on={aOn && beat >= 2}
        delay={dl(2, 1.0)}
        d={crossD(462, 279, 156, 26)}
        stroke={RED}
        sw={2.4}
        dur={0.5}
      />
      <Fade on={aOn && beat >= 2} delay={dl(2, 1.7)}>
        <T x={540} y={324} size={14} fill={RED} script weight={700}>
          {t("no uncertainty → NOT random", "uncertainty nahi → random NAHI")}
        </T>
      </Fade>

      {/* ===================== Group B — beats 3-7, never erased ===================== */}

      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={110} size={20} fill={GREEN} weight={700}>
          {t("OUTCOME = one result (a sample point)", "OUTCOME = ek result (ek sample point)")}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 1.0)} d={roundRectD(510, 130, 60, 70, 8)} stroke={INK} sw={2} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 1.6)}>
        <T x={540} y={174} size={26} fill={INK} weight={800}>
          4
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.1)}>
        <T x={585} y={172} size={16} fill={GREEN} anchor="start" weight={700}>
          {t("= 1 outcome", "= 1 outcome")}
        </T>
      </Fade>

      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={230} size={19} fill={INK} weight={700}>
          {t("SAMPLE SPACE S = complete menu of outcomes", "SAMPLE SPACE S = outcomes ka poora menu")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.0)}>
        <T x={270} y={318} size={24} fill={INK} anchor="start" weight={800}>
          {"S = {"}
        </T>
      </Fade>

      {/* beat 5 — die roster builds one card at a time */}
      {DIE_ROSTER.map((face, i) => {
        const x = dieStartX + i * dieStep;
        return (
          <React.Fragment key={face}>
            <Draw
              on={beat >= 5}
              delay={dl(5, 0.2 + i * 0.35)}
              d={roundRectD(x, 280, dieCardW, dieCardH, 8)}
              stroke={AMBER}
              sw={2}
              dur={0.4}
            />
            <Fade on={beat >= 5} delay={dl(5, 0.45 + i * 0.35)}>
              <T x={x + dieCardW / 2} y={280 + dieCardH / 2 + 8} size={22} fill={INK} weight={700}>
                {face}
              </T>
            </Fade>
          </React.Fragment>
        );
      })}
      <Fade on={beat >= 5} delay={dl(5, 2.5)}>
        <T x={dieStartX + 6 * dieStep - 8} y={318} size={24} fill={INK} anchor="start" weight={800}>
          {"}"}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 3.1)}>
        <Chip x={420} y={358} w={240} h={40} fill={GREEN} textFill="#fff" size={17} script={false}>
          {"n(S) = 6"}
        </Chip>
      </Fade>

      {/* beat 6 — coin roster */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={432} size={15} fill={MUTED}>
          {t("one coin toss:", "ek coin toss:")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 0.7)} d={roundRectD(447, 448, 60, 68, 8)} stroke={AMBER} sw={2} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 1.0)}>
        <T x={477} y={490} size={19} fill={INK} weight={700}>
          H
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.3)} d={roundRectD(573, 448, 60, 68, 8)} stroke={AMBER} sw={2} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={603} y={490} size={19} fill={INK} weight={700}>
          T
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.1)}>
        <Chip x={440} y={528} w={200} h={38} fill={GREEN} textFill="#fff" size={16} script={false}>
          {"n(S) = 2"}
        </Chip>
      </Fade>

      {/* beat 7 — closing tagline */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={578} size={15} fill={INK} script weight={700}>
          {t("hold this image: S = the complete menu, before you even play", "yeh yaad rakho: S = poora menu, khelne se pehle hi")}
        </T>
      </Fade>
      <Draw
        on={beat >= 7}
        delay={dl(7, 1.1)}
        d={ringD(540, 573, 260, 20)}
        stroke={AMBER}
        sw={2}
        dur={0.7}
      />
    </Scene>
  );
}
