/**
 * M11 Ch08 · Section 8 — "Foundations: the four traps and the golden habit"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type=tips. Subtopic 1 (Foundations) closer.
 *
 * Beats (en [0, 8.62, 22.27, 34.82, 44.03, 54.1, 67.33, 75.26]):
 *  0 title (always-on)
 *  1-4 four red trap cells (2x2 within a 3-col grid, cells 1-4)
 *  5-6 two green pro-tip cells (cells 5-6)
 *  7 wide red closing banner: the golden habit
 *
 * Layout plan — 2x3 grid, cells 300x92, cols cx220/540/860, rows y104/216:
 *  cell N | box roundRect · label bl(top+20) · line1 bl(top+46) · line2 bl(top+68)
 *  b7 | banner x160 y330 w760 h48 (text bl~360)
 */

import React from "react";
import { Rect } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK_LIGHT, RED, GREEN_DARK, CREAM,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD } from "./math-kit";

type Cell = { beat: number; cx: number; top: number; label: string; l1: string; l2: string; color: string };

export default function M11Ch08Sec8({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const cells: Cell[] = [
    {
      beat: 1, cx: 220, top: 104, color: RED,
      label: t("TRAP 1", "TRAP 1"),
      l1: t("confusing the nth term a_n", "nth term a_n ko confuse"),
      l2: t("with the sum S_n", "karna sum S_n se"),
    },
    {
      beat: 2, cx: 540, top: 104, color: RED,
      label: t("TRAP 2", "TRAP 2"),
      l1: t("declaring a general term from", "3 terms se general term"),
      l2: t("3 terms without checking a 4th", "declare karna, 4th check kiye bina"),
    },
    {
      beat: 3, cx: 860, top: 104, color: RED,
      label: t("TRAP 3", "TRAP 3"),
      l1: t("misreading the limits of Σ —", "Σ ki limits galat padhna —"),
      l2: t("starting at 1 when it's 2", "1 se shuru jab asal mein 2 se"),
    },
    {
      beat: 4, cx: 220, top: 216, color: RED,
      label: t("TRAP 4", "TRAP 4"),
      l1: t("treating a sequence as a set,", "sequence ko set jaisa maanna,"),
      l2: t("losing order and repetition", "order aur repetition kho dena"),
    },
    {
      beat: 5, cx: 540, top: 216, color: GREEN_DARK,
      label: t("PRO-TIP", "PRO-TIP"),
      l1: t("write a_n FIRST, then decide —", "pehle a_n likho, phir decide —"),
      l2: t("list, sum, or test AP/GP", "list, sum, ya AP/GP test"),
    },
    {
      beat: 6, cx: 860, top: 216, color: GREEN_DARK,
      label: t("PRO-TIP", "PRO-TIP"),
      l1: t("constant differences → linear;", "constant differences → linear;"),
      l2: t("constant ratios → GP", "constant ratios → GP"),
    },
  ];

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={25} fill={INK_LIGHT} anchor="middle" script>
          {t("Foundations — mistakes to hunt, habits to keep", "Foundations — mistakes dhoondo, habits rakho")}
        </T>
      </Fade>

      {cells.map((c, i) => (
        <React.Fragment key={i}>
          <Draw
            on={beat >= c.beat}
            delay={dl(c.beat, 0.1)}
            d={roundRectD(c.cx - 150, c.top, 300, 92, 10)}
            stroke={c.color}
            sw={2}
            dur={0.5}
          />
          <Fade on={beat >= c.beat} delay={dl(c.beat, 0.4)}>
            <Rect x={c.cx - 150} y={c.top} width={300} height={92} rx={10} fill={CREAM} opacity={0.5} />
          </Fade>
          <Fade on={beat >= c.beat} delay={dl(c.beat, 0.5)}>
            <T x={c.cx} y={c.top + 20} size={13} fill={c.color} anchor="middle" weight={700} script>
              {c.label}
            </T>
          </Fade>
          <Fade on={beat >= c.beat} delay={dl(c.beat, 0.7)}>
            <T x={c.cx} y={c.top + 46} size={12.5} fill={INK_LIGHT} anchor="middle" script>
              {c.l1}
            </T>
            <T x={c.cx} y={c.top + 68} size={12.5} fill={INK_LIGHT} anchor="middle" script>
              {c.l2}
            </T>
          </Fade>
        </React.Fragment>
      ))}

      {/* beat 7 — wide closing banner: the golden habit */}
      <Draw on={beat >= 7} delay={dl(7, 0.1)} d={roundRectD(160, 330, 760, 48, 10)} stroke={RED} sw={2.4} dur={0.6} />
      <Fade on={beat >= 7} delay={dl(7, 0.5)}>
        <T x={540} y={360} size={16} fill={RED} anchor="middle" weight={700} script>
          {t("golden habit: position → general term a_n → then list or sum", "golden habit: position → general term a_n → phir list ya sum")}
        </T>
      </Fade>
    </Scene>
  );
}
