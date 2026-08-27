/**
 * M11 Ch08 · Section 48 — "Three means for three different questions"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type=concept. Opens subtopic 5
 * (AM-GM-HM).
 *
 * Beats (en [0, 13.82, 25.09, 44.46, 56.32, 76.03, 88.83, 102.31]):
 *  0 title (always-on)
 *  1 text: AM — quantities ADD
 *  2 text: GM — quantities MULTIPLY
 *  3 text: HM — RATES over a fixed task
 *  4 THE DEMO: number line a...H...G...A...b, always in this order
 *  5 boxed: A ≥ G ≥ H, equality iff a=b
 *  6 formula: AH=G² ⇒ A,G,H form a GP
 *  7 red-margin: G is the GM of both pairs
 *
 * Layout plan:
 *  b1 | text bl100 cx540
 *  b2 | text bl128 cx540
 *  b3 | text bl156 cx540
 *  b4 | line y200 x150..700 · dots a220/H325/G400/A490/b630 · labels
 *       H/G/A bl184 · a/b bl225 · caption bl250 cx540
 *  b5 | chip x300 y270 w480 h40 (text bl~297)
 *  b6 | text bl335 cx540
 *  b7 | red bar x76 y360..430 · text bl380/420 x96
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, Chip, T, INK, INK_LIGHT, MUTED, AMBER_DARK, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';
import { axisD, IntervalDot } from "./math-kit";

export default function M11Ch08Sec48({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={22} fill={INK} anchor="middle" script>
          {t("One number, three honest averages", "Ek number, teen honest averages")}
        </T>
      </Fade>

      {/* beat 1 — AM */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={540} y={100} size={14} fill={AMBER_DARK} anchor="middle" script>
          {t("AM = (a+b)/2 — the average when quantities ADD", "AM = (a+b)/2 — jab quantities ADD hoti hain")}
        </T>
      </Fade>

      {/* beat 2 — GM */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={540} y={128} size={14} fill={GREEN_DARK} anchor="middle" script>
          {t("GM = √(ab) — the average when quantities MULTIPLY (growth, CAGR)", "GM = √(ab) — jab quantities MULTIPLY hoti hain (growth, CAGR)")}
        </T>
      </Fade>

      {/* beat 3 — HM */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={156} size={14} fill={RED} anchor="middle" script>
          {t("HM = 2ab/(a+b) — the average of RATES over a fixed task", "HM = 2ab/(a+b) — fixed task ke RATES ka average")}
        </T>
      </Fade>

      {/* beat 4 — THE DEMO: the number line, always in this order */}
      <Draw on={beat >= 4} delay={dl(4, 0.1)} d={axisD(150, 700, 200)} stroke={MUTED} sw={1.4} dur={0.4} />
      <IntervalDot on={beat >= 4} delay={dl(4, 0.4)} x={220} y={200} open={false} r={5} stroke={INK} />
      <IntervalDot on={beat >= 4} delay={dl(4, 0.6)} x={325} y={200} open={false} r={6} stroke={RED} />
      <IntervalDot on={beat >= 4} delay={dl(4, 0.8)} x={400} y={200} open={false} r={6} stroke={GREEN_DARK} />
      <IntervalDot on={beat >= 4} delay={dl(4, 1.0)} x={490} y={200} open={false} r={6} stroke={AMBER_DARK} />
      <IntervalDot on={beat >= 4} delay={dl(4, 1.2)} x={630} y={200} open={false} r={5} stroke={INK} />
      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <T x={220} y={225} size={13} fill={INK} anchor="middle">a</T>
        <T x={325} y={184} size={14} fill={RED} anchor="middle" weight={700}>H</T>
        <T x={400} y={184} size={14} fill={GREEN_DARK} anchor="middle" weight={700}>G</T>
        <T x={490} y={184} size={14} fill={AMBER_DARK} anchor="middle" weight={700}>A</T>
        <T x={630} y={225} size={13} fill={INK} anchor="middle">b</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.9)}>
        <T x={540} y={250} size={13} fill={INK_LIGHT} anchor="middle" script>
          {t("H, G, A always sit in this order between a and b", "H, G, A hamesha a aur b ke beech isi order mein hain")}
        </T>
      </Fade>

      {/* beat 5 — boxed inequality */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <Chip x={300} y={270} w={480} h={40} fill={CREAM} stroke={INK} textFill={INK} size={16}>
          {t("A ≥ G ≥ H, equality iff a = b", "A ≥ G ≥ H, equality iff a = b")}
        </Chip>
      </Fade>

      {/* beat 6 — AH=G² */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={335} size={16} fill={INK} anchor="middle">
          {"AH = G²  ⇒  A, G, H form a GP"}
        </T>
      </Fade>

      {/* beat 7 — red-margin: G is GM of both pairs */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 76 360 v 70" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.8)}>
        <T x={96} y={380} size={15} fill={RED} anchor="start" script>
          {t("G is the GM of the original pair", "G, original pair ka GM hai")}
        </T>
        <T x={96} y={420} size={15} fill={RED} anchor="start" script>
          {t("AND of the pair (A, H)", "AUR pair (A, H) ka bhi")}
        </T>
      </Fade>
    </Scene>
  );
}
