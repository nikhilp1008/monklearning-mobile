/**
 * M11 Ch14 · Section 8 — "Procedure: building a valid sample space"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type: concept.
 *
 * Beats (board_reveal_at_english [0,8.28,21.16,30.21,48.21,59.48,70.14,82.6]):
 *  0 heading
 *  1 STEP 1: what do you record? S changes with what you observe
 *  2 STEP 2: single stage → list every distinct outcome once
 *  3 STEP 3: multi-stage → build a TREE, root-to-leaf = one outcome
 *  4 STEP 4: with/without replacement — without SHRINKS S
 *  5 formula (HIGH, ringed): n(S) = m₁ × m₂ × ⋯ × mₖ
 *  6 GUARDRAIL: list ≠ product → missed or duplicated a branch
 *  [group A erased at beat>=7]
 *  7 tree: coin→die, 2 branches × 6 = 12 leaves
 *
 * Layout plan (estimated render boxes, longer language counts):
 *  b1..b4 | 4 STEP lines (15, ink), stacked        | T mid | y120..234, 28px pitch
 *  b5 | ringed formula (20, green)                  | T mid | x300..780 y275..300
 *  b6 | guardrail chip (red, w760 h42)               | Chip  | x160..920 y325..367
 *  [group A erased beat>=7]
 *  b7 | "toss a coin, then roll a die" (15,muted)    | T mid | x360..720 y108..122
 *  b7 | root dot + 2 branches to H/T                  | Draw  | x130..260 y190..410
 *  b7 | H roster (6 cards w40 h44)                     | Draw/T| x340..820 y168..212
 *  b7 | T roster (6 cards w40 h44)                      | Draw/T| x340..820 y388..432
 *  b7 | "2 × 6 = 12 leaves → n(S) = 12" chip (green)      | Chip  | x330..750 y470..514
 */

import React from "react";
import { Circle, TSpan } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  arrowD,
  ringD,
  INK,
  MUTED,
  GREEN,
  RED,
  AMBER_DARK,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD } from "./math-kit";

const FACES = [1, 2, 3, 4, 5, 6];

export default function M11Ch14Sec8({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const aOn = beat >= 0 && beat < 7;

  const cardW = 40;
  const cardH = 44;
  const cardStep = 68;
  const rosterStartX = 340;

  return (
    <Scene>
      {/* title always-on */}
      <Fade on={true}>
        <T x={540} y={64} size={25} fill={RED} script>
          {t("list ≠ product? you missed or duplicated a branch", "list ≠ product? branch miss ya duplicate hui")}
        </T>
      </Fade>

      <Fade on={aOn && beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={100} size={20} fill={INK} weight={700}>
          {t("Procedure: building the sample space", "Procedure: sample space banana")}
        </T>
      </Fade>

      {/* ===================== Group A — beats 1-6 ===================== */}

      <Fade on={aOn && beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={132} size={15} fill={INK} weight={600}>
          <TSpan fill={AMBER_DARK} fontWeight={800}>{t("STEP 1 — ", "STEP 1 — ")}</TSpan>
          {t("what do you record? S changes with what you observe", "kya record kar rahe ho? observe karne se S badalta hai")}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={162} size={15} fill={INK} weight={600}>
          <TSpan fill={AMBER_DARK} fontWeight={800}>{t("STEP 2 — ", "STEP 2 — ")}</TSpan>
          {t("single stage: list every distinct outcome once", "single stage: har outcome ek baar list karo")}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={192} size={15} fill={INK} weight={600}>
          <TSpan fill={AMBER_DARK} fontWeight={800}>{t("STEP 3 — ", "STEP 3 — ")}</TSpan>
          {t("multi-stage: build a TREE, root-to-leaf = one outcome", "multi-stage: TREE banao, root-to-leaf = ek outcome")}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={222} size={15} fill={INK} weight={600}>
          <TSpan fill={AMBER_DARK} fontWeight={800}>{t("STEP 4 — ", "STEP 4 — ")}</TSpan>
          {t("with/without replacement: \"without\" SHRINKS S", "with/without replacement: \"without\" S ko chota karta hai")}
        </T>
      </Fade>

      <Fade on={aOn && beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={288} size={20} fill={GREEN} weight={800}>
          {"n(S) = m₁ × m₂ × ⋯ × mₖ"}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 5} delay={dl(5, 1.0)}>
        <T x={540} y={310} size={13} fill={MUTED}>
          {t("(k independent stages)", "(k independent stages)")}
        </T>
      </Fade>
      <Draw on={aOn && beat >= 5} delay={dl(5, 1.5)} d={ringD(540, 279, 220, 30)} stroke={AMBER_DARK} sw={2.2} dur={0.7} />

      <Fade on={aOn && beat >= 6} delay={dl(6, 0.3)}>
        <Chip x={160} y={345} w={760} h={42} fill={CREAM} stroke={RED} textFill={RED} size={15} script={false}>
          {t("list ≠ product → you missed or duplicated a branch", "list ≠ product → branch miss ya duplicate hui")}
        </Chip>
      </Fade>

      {/* ===================== Group B — beat 7, never erased ===================== */}

      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={540} y={115} size={15} fill={MUTED} weight={600}>
          {t("toss a coin, then roll a die", "sikka uchalo, phir die roll karo")}
        </T>
      </Fade>

      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <Circle cx={130} cy={300} r={5} fill={INK} />
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 0.9)} d={arrowD(140, 300, 245, 190)} stroke={INK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 7} delay={dl(7, 1.3)} d={arrowD(140, 300, 245, 410)} stroke={INK} sw={2.2} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 1.8)}>
        <T x={225} y={178} size={18} fill={INK} weight={800}>H</T>
        <T x={225} y={432} size={18} fill={INK} weight={800}>T</T>
      </Fade>

      {/* H roster */}
      <Draw on={beat >= 7} delay={dl(7, 2.1)} d={arrowD(258, 185, rosterStartX - 8, 190)} stroke={AMBER_DARK} sw={2} dur={0.4} />
      {FACES.map((f, i) => {
        const x = rosterStartX + i * cardStep;
        return (
          <React.Fragment key={`h${f}`}>
            <Draw on={beat >= 7} delay={dl(7, 2.4 + i * 0.12)} d={roundRectD(x, 168, cardW, cardH, 6)} stroke={AMBER_DARK} sw={1.8} dur={0.3} />
            <Fade on={beat >= 7} delay={dl(7, 2.5 + i * 0.12)}>
              <T x={x + cardW / 2} y={168 + cardH / 2 + 6} size={16} fill={INK} weight={700}>
                {"H" + f}
              </T>
            </Fade>
          </React.Fragment>
        );
      })}

      {/* T roster */}
      <Draw on={beat >= 7} delay={dl(7, 3.3)} d={arrowD(258, 415, rosterStartX - 8, 410)} stroke={AMBER_DARK} sw={2} dur={0.4} />
      {FACES.map((f, i) => {
        const x = rosterStartX + i * cardStep;
        return (
          <React.Fragment key={`t${f}`}>
            <Draw on={beat >= 7} delay={dl(7, 3.6 + i * 0.12)} d={roundRectD(x, 388, cardW, cardH, 6)} stroke={AMBER_DARK} sw={1.8} dur={0.3} />
            <Fade on={beat >= 7} delay={dl(7, 3.7 + i * 0.12)}>
              <T x={x + cardW / 2} y={388 + cardH / 2 + 6} size={16} fill={INK} weight={700}>
                {"T" + f}
              </T>
            </Fade>
          </React.Fragment>
        );
      })}

      <Fade on={beat >= 7} delay={dl(7, 4.6)}>
        <Chip x={330} y={470} w={420} h={44} fill={GREEN} textFill="#fff" size={17} script={false}>
          {"2 × 6 = 12 → n(S) = 12"}
        </Chip>
      </Fade>
    </Scene>
  );
}
