/**
 * M11 Ch03 · Section 23 — "Periods, ranges and amplitudes"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples — three quick reads, three columns, left to right.
 *
 * Beats (board_reveal_at_english [0, 4.35, 23.81, 29.1, 43.01, 49.75, 57.26]):
 *  0 Ex1 heading: read off three periods
 *  1 formula: sin3x=2π/3; tan2x=π/2; cos(x/2)=4π
 *  2 Ex2 heading: range and period of 3+2sinx
 *  3 text: amp=2,shift=3 ⇒ range=[1,5]; unscaled x ⇒ period=2π
 *  4 Ex3 heading: amplitude and period of -4cos(x/3)
 *  5 formula: amp=4, T=6π (boxed)
 *  6 red-margin: minus flips vertically, doesn't touch amp/period
 *
 * Layout plan — three columns: Ex1 x60-380, Ex2 x420-740, Ex3 x760-1020:
 *  b0 | "Example 1..." (15,amber,w700)  | T st | x60..350  y104..119 (bl 110)
 *  b1 | 3 short lines (14)              | T st | x60..250   y139..197
 *  b2 | "Example 2..." (14,amber,w700)  | T st | x420..700 y104..119 (bl 110)
 *  b3 | 2 lines (13)                    | T st | x420..680  y139..174
 *  b4 | "Example 3..." (13,amber,w700)  | T st | x760..1010 y104..119 (bl 110)
 *  b5 | chip "amp=4, T=6π"              | Chip | x760..1020  y140..176
 *  b6 | margin bar (red)                 | Draw | x760  y200..245
 *  b6 | closer 2 lines (13,red)          | T st | x776..1030  y214..240
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch03Sec23({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={22} fill={RED} anchor="middle" script>
          {t("Periods, Ranges and Amplitudes", "Periods, Ranges aur Amplitudes")}
        </T>
      </Fade>

      {/* beat 0 — Example 1 heading */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={60} y={110} size={15} fill={AMBER_DARK} anchor="start" weight={700}>
          {t("Example 1 — read off three periods", "Example 1 — teen periods padho")}
        </T>
      </Fade>
      <Draw on={beat >= 0} d="M 60 118 L 350 118" stroke={AMBER_DARK} sw={1.6} delay={dl(0, 0.4)} />

      {/* beat 1 — the three period reads */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={60} y={145} size={14} fill={INK} anchor="start">sin3x: 2π/3</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={60} y={171} size={14} fill={INK} anchor="start">tan2x: π/2</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.0)}>
        <T x={60} y={197} size={14} fill={INK} anchor="start" weight={700}>cos(x/2): 2π/(1/2)=4π</T>
      </Fade>

      {/* beat 2 — Example 2 heading */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={420} y={110} size={14} fill={AMBER_DARK} anchor="start" weight={700}>
          {t("Example 2 — range/period of 3+2sinx", "Example 2 — 3+2sinx ka range/period")}
        </T>
      </Fade>
      <Draw on={beat >= 2} d="M 420 118 L 700 118" stroke={AMBER_DARK} sw={1.6} delay={dl(2, 0.4)} />

      {/* beat 3 — the answer */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={420} y={145} size={13} fill={INK} anchor="start">
          {t("amp=2, shift=3 ⇒ range=[1,5]", "amp=2, shift=3 ⇒ range=[1,5]")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={420} y={171} size={13} fill={INK} anchor="start" weight={700}>
          {t("x unscaled ⇒ period=2π", "x unscaled ⇒ period=2π")}
        </T>
      </Fade>

      {/* beat 4 — Example 3 heading */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={760} y={110} size={13} fill={AMBER_DARK} anchor="start" weight={700}>
          {t("Example 3 — amp/period of -4cos(x/3)", "Example 3 — -4cos(x/3) ka amp/period")}
        </T>
      </Fade>
      <Draw on={beat >= 4} d="M 760 118 L 1010 118" stroke={AMBER_DARK} sw={1.6} delay={dl(4, 0.4)} />

      {/* beat 5 — the answer, boxed */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <Chip x={760} y={140} w={260} h={36} fill="#FCF4E0" stroke={INK} textFill={INK} size={13} script={false}>
          amp=4, T=2π/(1/3)=6π
        </Chip>
      </Fade>

      {/* beat 6 — red-margin: what the minus does and doesn't do */}
      <Draw on={beat >= 6} d="M 760 200 L 760 245" stroke={RED} sw={3} delay={dl(6, 0)} />
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={776} y={216} size={13} fill={RED} anchor="start">
          {t("The minus flips vertically -", "Minus vertically flip karta hai -")}
        </T>
        <T x={776} y={238} size={13} fill={RED} anchor="start" weight={700}>
          {t("no change to amp or period.", "amp ya period nahi badalta.")}
        </T>
      </Fade>
    </Scene>
  );
}
