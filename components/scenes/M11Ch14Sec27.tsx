/**
 * M11 Ch14 · Section 27 — "Worked example: a die loaded by face value (JEE Advanced)"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type: worked_examples. FLAGGED for
 * extra scrutiny — the capstone case the whole subtopic was built for:
 * P(k)=ck normalizes to c=1/21, so P(k)=k/21 (verified: Σk for k=1..6 =
 * 21, so 21c=1). Group A (algebra) is compact/centered and erased once
 * the bar chart (Group B) takes the full board as the closing payoff —
 * bar heights are genuinely proportional to k (20px per unit), not just
 * illustrative.
 *
 * Beats (board_reveal_at_english [0,16.3,29.87,48.3,72.36,83.88,105.56,124.59]):
 *  0 heading
 *  1 problem: P(face k) ∝ k. Find each P(k), then P(prime), P(even OR >4)
 *  2 (HIGH, ringed) P(k)=ck, Σck=21c=1 ⇒ c=1/21, so P(k)=k/21
 *  3 (HIGH) GUARDRAIL: n(A)/n(S) is WRONG here — sum the sand instead
 *  4 P(prime) = P(2)+P(3)+P(5) = (2+3+5)/21 = 10/21
 *  5 E={2,4,6}, G={5,6}, E∩G={6}: P(E∪G) = 12/21+11/21−6/21 = 17/21
 *  6 check: E∪G={2,4,5,6}, sand=(2+4+5+6)/21=17/21 ✓
 *  [group A erased at beat>=7]
 *  7 bar chart: 6 bars, height ∝ k, P(k)=k/21 labeled above each
 *
 * Layout plan (Group A compact centered, erased beat>=7; Group B fresh
 * full-canvas bar chart, baseline y=480, bars at x=303..723 step84,
 * height=20k; longer language counts):
 *  b1 | problem, 2 lines (15, ink)                  | T mid | x150..930 y120..152
 *  b2 | "P(k)=ck, Σck=21c=1⇒c=1/21" (16) + ringed "P(k)=k/21" (19,green)
 *  b3 | guardrail chip (red, w800 h44)                | Chip  | x140..940 y248..292
 *  b4 | "P(prime)=..=10/21" (16, ink)                  | T mid | y318
 *  b5 | "E={2,4,6}..." (15) + "P(E∪G)=..17/21" (16)      | T mid | y345 / y370
 *  b6 | check caption (13, green)                          | T mid | y398
 *  [group A erased beat>=7]
 *  b7 | 6 bars height=20k + P(k)=k/21 labels + face nums      | Draw/T| y360..505
 *  b7 | closing caption (14, ink)                                | T mid | y545
 */

import React from "react";
import { Rect } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, ringD, INK, MUTED, GREEN, RED, AMBER_DARK, CREAM,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD, lineD } from "./math-kit";

const SLOT_X = [303, 387, 471, 555, 639, 723];

export default function M11Ch14Sec27({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const aOn = beat >= 0 && beat < 7;
  const baseline = 480;
  const barW = 50;

  return (
    <Scene>
      {/* title always-on */}
      <Fade on={true}>
        <T x={540} y={64} size={21} fill={RED} script>
          {t("the case that breaks the classical recipe — sum the sand", "yeh case classical recipe todta hai — sand sum karo")}
        </T>
      </Fade>

      {/* ===================== Group A — beats 0-6 ===================== */}

      <Fade on={aOn && beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={100} size={17} fill={INK} weight={700}>
          {t("Loaded die — axioms beat the counting formula (JEE Advanced)", "Loaded die — axioms counting formula ko haraate hain (JEE Advanced)")}
        </T>
      </Fade>

      <Fade on={aOn && beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={130} size={15} fill={INK} weight={600}>
          {t("P(face k) ∝ k. Find each face's probability,", "P(face k) ∝ k. Har face ki probability nikaalo,")}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 1.0)}>
        <T x={540} y={152} size={15} fill={INK} weight={600}>
          {t("then P(prime) and P(even OR > 4)", "phir P(prime) aur P(even OR > 4)")}
        </T>
      </Fade>

      <Fade on={aOn && beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={185} size={16} fill={INK} weight={700}>
          {"P(k) = ck,  Σ ck = 21c = 1  ⇒  c = 1/21"}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 2} delay={dl(2, 1.2)}>
        <T x={540} y={215} size={19} fill={GREEN} weight={800}>
          {"P(k) = k/21"}
        </T>
      </Fade>
      <Draw on={aOn && beat >= 2} delay={dl(2, 1.9)} d={ringD(540, 205, 110, 25)} stroke={AMBER_DARK} sw={2.2} dur={0.7} />

      <Fade on={aOn && beat >= 3} delay={dl(3, 0.3)}>
        <Chip x={140} y={248} w={800} h={44} fill={CREAM} stroke={RED} textFill={RED} size={15} script={false}>
          {t("n(A)/n(S) is WRONG here — not equally likely, sum the sand", "n(A)/n(S) GALAT hai yahan — equally likely nahi, sand sum karo")}
        </Chip>
      </Fade>

      <Fade on={aOn && beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={320} size={16} fill={INK} weight={700}>
          {"P(prime) = P(2)+P(3)+P(5) = (2+3+5)/21 = 10/21"}
        </T>
      </Fade>

      <Fade on={aOn && beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={349} size={14} fill={INK} weight={600}>
          {"E = {2,4,6},  G = {5,6},  E∩G = {6}:"}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 5} delay={dl(5, 1.1)}>
        <T x={540} y={373} size={16} fill={INK} weight={700}>
          {"P(E∪G) = 12/21 + 11/21 − 6/21 = 17/21"}
        </T>
      </Fade>

      <Fade on={aOn && beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={402} size={13} fill={GREEN} weight={700}>
          {"check: E∪G = {2,4,5,6}, sand = (2+4+5+6)/21 = 17/21 ✓"}
        </T>
      </Fade>

      {/* ===================== Group B — beat 7, never erased ===================== */}

      <Fade on={beat >= 7} delay={dl(7, 0.1)}>
        <T x={540} y={110} size={16} fill={INK} weight={700}>
          {t("Loaded die: P(k) = k/21", "Loaded die: P(k) = k/21")}
        </T>
      </Fade>

      <Draw on={beat >= 7} delay={dl(7, 0.5)} d={lineD(260, baseline, 770, baseline)} stroke={INK} sw={2} dur={0.5} />

      {SLOT_X.map((x, i) => {
        const k = i + 1;
        const h = 20 * k;
        const top = baseline - h;
        return (
          <React.Fragment key={k}>
            <Draw
              on={beat >= 7}
              delay={dl(7, 0.9 + i * 0.3)}
              d={roundRectD(x - barW / 2, top, barW, h, 4)}
              stroke={AMBER_DARK}
              sw={2}
              dur={0.4}
            />
            <Fade on={beat >= 7} delay={dl(7, 1.0 + i * 0.3)}>
              <Rect x={x - barW / 2 + 2} y={top + 2} width={barW - 4} height={h - 4} fill={AMBER_DARK} opacity={0.4} />
            </Fade>
            <Fade on={beat >= 7} delay={dl(7, 1.2 + i * 0.3)}>
              <T x={x} y={top - 10} size={13} fill={INK} weight={700}>
                {k}/21
              </T>
              <T x={x} y={baseline + 24} size={14} fill={MUTED} weight={700}>
                {k}
              </T>
            </Fade>
          </React.Fragment>
        );
      })}

      <Fade on={beat >= 7} delay={dl(7, 3.2)}>
        <T x={540} y={545} size={14} fill={INK} weight={600}>
          {t("sand climbs with face value — 6 carries 6× the sand of 1", "face value ke saath sand badhta hai — 6, 1 se 6× zyada")}
        </T>
      </Fade>
    </Scene>
  );
}
