/**
 * C11 Chemistry Ch03 · Section 10 — "Worked example: strontium's mass by the triad rule"
 * Canvas 1080×620 · safe x36–1044, y30–596. CBSE worked example.
 *
 * Beats (en [0, 5.55, 20.22, 33.37, 44.97, 53.08, 63.83, 72.87, 77.65]):
 *  0 title + underline
 *  1 given: Ca(40.1 u) · Sr(? u) · Ba(137.3 u) — three cells
 *  2 setup: A(Sr) ≈ (A(Ca) + A(Ba)) ÷ 2
 *  3 substitute: ≈ (40.1 + 137.3) ÷ 2 = 177.4 ÷ 2
 *  4 answer stamp (green): ≈ 88.7 u
 *  5 red-margin: accepted value = 87.6 u — within ~1.3%
 *  6 verdict: ✓ valid Ca-Sr-Ba triad confirmed
 *  7 new heading: the exam lesson
 *  8 closing amber stamp: consistency check, not a law
 *
 * Layout plan:
 *  b1 | 3 cells (Ca/Sr/Ba)         | Draw   | x280..800  y100..156
 *  b2 | setup (19,w700,ink)        | T mid  | x?..?      y191..211 (bl 205)
 *  b3 | substitute, 2 lines        | T mid  | x?..?      y236..286 (bl 250/280)
 *  b4 | answer stamp (green)       | Chip   | x420..660  y304..354
 *  b5 | red margin bar + line      | Draw   | x70  y368..402 (bl 390)
 *  b6 | verdict (15,w700,green)    | T mid  | x?..?      y422..440 (bl 434)
 *  b7 | heading (18,w800,ink)      | T mid  | x?..?      y450..468 (bl 464)
 *  b7 | underline (amber)          | Draw   | y472 x420..660
 *  b8 | closing stamp (amber)      | Chip   | x175..905  y480..516
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
  INK,
  MUTED,
  AMBER,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch03Sec10({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={66} size={21} fill={RED} script>
          {t("strontium's mass by the triad rule (CBSE)", "strontium ka mass triad rule se (CBSE)")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 3.5)} d="M 420 90 C 480 87, 600 87, 660 90" stroke={RED} sw={2.4} dur={0.7} />

      {/* beat 1 — given: Ca, Sr(?), Ba */}
      <Draw on={beat >= 1} delay={dl(1, 0.2)} d="M 280 100 h 140 v 64 h -140 z" stroke={INK} sw={2} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 0.5)} d="M 470 100 h 140 v 64 h -140 z" stroke={RED} sw={2} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 0.8)} d="M 660 100 h 140 v 64 h -140 z" stroke={INK} sw={2} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 1.2)}>
        <T x={350} y={133.5} size={22} fill={INK} weight={800}>Ca</T>
        <T x={350} y={160} size={14} fill={MUTED}>40.1 u</T>
        <T x={540} y={133.5} size={22} fill={INK} weight={800}>Sr</T>
        <T x={540} y={160} size={16} fill={RED} weight={800}>? u</T>
        <T x={730} y={133.5} size={22} fill={INK} weight={800}>Ba</T>
        <T x={730} y={160} size={14} fill={MUTED}>137.3 u</T>
      </Fade>

      {/* beat 2 — set up the triad rule */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={205} size={19} weight={700} fill={INK}>
          A(Sr) ≈ (A(Ca) + A(Ba)) ÷ 2
        </T>
      </Fade>

      {/* beat 3 — substitute the numbers */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={250} size={18} weight={700} fill={INK}>
          ≈ (40.1 + 137.3) ÷ 2
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.2)}>
        <T x={540} y={280} size={18} weight={700} fill={INK}>
          = 177.4 ÷ 2
        </T>
      </Fade>

      {/* beat 4 — the answer */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <Chip x={420} y={304} w={240} h={50} fill={GREEN} textFill="#fff" size={22} script={false}>
          ≈ 88.7 u
        </Chip>
      </Fade>

      {/* beat 5 — compare with the accepted value */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M 70 368 L 70 402" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={94} y={390} size={16} weight={700} fill={INK} anchor="start">
          {t("accepted value = 87.6 u — within ~1.3%", "accepted value = 87.6 u — sirf ~1.3% off")}
        </T>
      </Fade>

      {/* beat 6 — verdict */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={434} size={15} weight={700} fill={GREEN}>
          {t("✓ valid Ca–Sr–Ba triad confirmed", "✓ valid Ca–Sr–Ba triad confirmed")}
        </T>
      </Fade>

      {/* beat 7 — new heading */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={464} size={18} weight={800} fill={INK}>
          {t("the exam lesson", "exam lesson")}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 1)} d="M 420 472 C 470 469, 610 469, 660 472" stroke={AMBER} sw={2.2} dur={0.5} />

      {/* beat 8 — closing insight */}
      <Fade on={beat >= 8} delay={dl(8, 0.3)}>
        <Chip x={175} y={480} w={730} h={36} fill={AMBER} textFill={INK} size={14} script={false}>
          {t("consistency check, not a law — big gap ⇒ not a real triad", "consistency check hai, law nahi — bada gap ⇒ asli triad nahi")}
        </Chip>
      </Fade>
    </Scene>
  );
}
