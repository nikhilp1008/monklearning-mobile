/**
 * M11 Ch08 · Section 22 — "AP: the trap list and the pro-tips"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type=tips. Subtopic 2 (AP) closer.
 *
 * Beats (en [0, 9.22, 21.76, 35.75, 46.08, 58.2, 72.19, 84.82]):
 *  0 title (always-on)
 *  1 red top banner: off-by-one
 *  2-4 three red trap cells (row 1)
 *  5-6 two green pro-tip cells (row 2)
 *  7 red bottom banner: fast tests
 *
 * Layout plan:
 *  b1 | banner x160 y85 w760 h40 (text bl~110)
 *  cell(2-4) | box roundRect x cx±150 y140 w300 h95 · label bl160 · line1 bl182 · line2 bl202
 *  cell(5-6) | box roundRect x cx±170 y255 w340 h85 · label bl275 · line1 bl297 · line2 bl317
 *  b7 | banner x160 y365 w760 h42 (text bl~391)
 */

import React from "react";
import { Rect } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, INK_LIGHT, RED, GREEN_DARK, CREAM,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD } from "./math-kit";

type Cell = { beat: number; cx: number; w: number; label: string; l1: string; l2: string; color: string };

export default function M11Ch08Sec22({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const row1: Cell[] = [
    {
      beat: 2, cx: 220, w: 300, color: RED,
      label: t("TRAP", "TRAP"),
      l1: t("sum trap: S_n = An² + Bn + c", "sum trap: S_n = An² + Bn + c"),
      l2: t("with c≠0 is NOT an AP", "c≠0 ke saath AP NAHI hai"),
    },
    {
      beat: 3, cx: 540, w: 300, color: RED,
      label: t("TRAP", "TRAP"),
      l1: t("even symmetric pick uses", "even symmetric pick mein"),
      l2: t("CD 2d, not d — d can be ≤ 0", "CD 2d, d nahi — d ≤ 0 ho sakta"),
    },
    {
      beat: 4, cx: 860, w: 300, color: RED,
      label: t("TRAP", "TRAP"),
      l1: t("reject non-integer n and", "non-integer n reject karo"),
      l2: t("extraneous roots (domain check)", "extraneous roots (domain check)"),
    },
  ];

  const row2: Cell[] = [
    {
      beat: 5, cx: 355, w: 310, color: GREEN_DARK,
      label: t("PRO-TIP", "PRO-TIP"),
      l1: t("SUM given → switch to", "SUM diya → symmetric terms"),
      l2: t("symmetric terms; TERMS → a+(n-1)d", "pe switch karo; TERMS → a+(n-1)d"),
    },
    {
      beat: 6, cx: 725, w: 310, color: GREEN_DARK,
      label: t("PRO-TIP", "PRO-TIP"),
      l1: t("equidistant identity collapses", "equidistant identity collapse"),
      l2: t("'scattered terms' in one line", "karti hai 'scattered terms' ko"),
    },
  ];

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={20} fill={INK} anchor="middle" script>
          {t("AP — the traps that cost marks, and the shortcuts that save them", "AP — traps jo marks lete hain, aur shortcuts jo bachate hain")}
        </T>
      </Fade>

      {/* beat 1 — top banner: off-by-one */}
      <Draw on={beat >= 1} delay={dl(1, 0.1)} d={roundRectD(160, 85, 760, 40, 10)} stroke={RED} sw={2.4} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={540} y={110} size={15} fill={RED} anchor="middle" weight={700} script>
          {t("off-by-one: use a+(n-1)d, never a+nd", "off-by-one: a+(n-1)d use karo, a+nd nahi")}
        </T>
      </Fade>

      {row1.map((c, i) => (
        <React.Fragment key={i}>
          <Draw on={beat >= c.beat} delay={dl(c.beat, 0.1)} d={roundRectD(c.cx - c.w / 2, 140, c.w, 95, 10)} stroke={c.color} sw={2} dur={0.5} />
          <Fade on={beat >= c.beat} delay={dl(c.beat, 0.4)}>
            <Rect x={c.cx - c.w / 2} y={140} width={c.w} height={95} rx={10} fill={CREAM} opacity={0.5} />
          </Fade>
          <Fade on={beat >= c.beat} delay={dl(c.beat, 0.5)}>
            <T x={c.cx} y={160} size={13} fill={c.color} anchor="middle" weight={700} script>{c.label}</T>
          </Fade>
          <Fade on={beat >= c.beat} delay={dl(c.beat, 0.7)}>
            <T x={c.cx} y={182} size={12.5} fill={INK_LIGHT} anchor="middle" script>{c.l1}</T>
            <T x={c.cx} y={202} size={12.5} fill={INK_LIGHT} anchor="middle" script>{c.l2}</T>
          </Fade>
        </React.Fragment>
      ))}

      {row2.map((c, i) => (
        <React.Fragment key={i}>
          <Draw on={beat >= c.beat} delay={dl(c.beat, 0.1)} d={roundRectD(c.cx - c.w / 2, 255, c.w, 85, 10)} stroke={c.color} sw={2} dur={0.5} />
          <Fade on={beat >= c.beat} delay={dl(c.beat, 0.4)}>
            <Rect x={c.cx - c.w / 2} y={255} width={c.w} height={85} rx={10} fill={CREAM} opacity={0.5} />
          </Fade>
          <Fade on={beat >= c.beat} delay={dl(c.beat, 0.5)}>
            <T x={c.cx} y={275} size={13} fill={c.color} anchor="middle" weight={700} script>{c.label}</T>
          </Fade>
          <Fade on={beat >= c.beat} delay={dl(c.beat, 0.7)}>
            <T x={c.cx} y={297} size={12.5} fill={INK_LIGHT} anchor="middle" script>{c.l1}</T>
            <T x={c.cx} y={317} size={12.5} fill={INK_LIGHT} anchor="middle" script>{c.l2}</T>
          </Fade>
        </React.Fragment>
      ))}

      {/* beat 7 — bottom banner: fast tests */}
      <Draw on={beat >= 7} delay={dl(7, 0.1)} d={roundRectD(160, 365, 760, 42, 10)} stroke={RED} sw={2.4} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 0.5)}>
        <T x={540} y={391} size={15} fill={RED} anchor="middle" weight={700} script>
          {t("fast tests: a_n linear in n, or S_n quadratic, zero constant", "fast tests: a_n, n mein linear, ya S_n quadratic, zero constant")}
        </T>
      </Fade>
    </Scene>
  );
}
