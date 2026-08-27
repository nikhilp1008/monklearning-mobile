/**
 * M11 Ch08 · Section 37 — "GP: the trap list and the pro-tips"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type=tips. Subtopic 3 (GP) closer.
 *
 * Beats (en [0, 7.17, 21.93, 34.56, 49.15, 63.32, 79.45, 88.49]):
 *  0 title (always-on)
 *  1 red top banner: convergence check
 *  2-4 three red trap cells (row 1)
 *  5-6 two green pro-tip cells (row 2)
 *  7 red bottom banner: recurring decimals
 *
 * Layout plan (cell x/w hand-checked to not overlap, per Sec22's lesson):
 *  b1 | banner x160 y85 w760 h40 (text bl~110)
 *  row1 | box roundRect cx±150 y140 w300 h95 · label bl160 · line1 bl182 · line2 bl202
 *  row2 | box roundRect cx±155 y255 w310 h85 · label bl275 · line1 bl297 · line2 bl317
 *  b7 | banner x160 y365 w760 h42 (text bl~391)
 */

import React from "react";
import { Rect } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, INK_LIGHT, RED, GREEN_DARK, CREAM,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD } from "./math-kit";

type Cell = { beat: number; cx: number; w: number; label: string; l1: string; l2: string; color: string };

export default function M11Ch08Sec37({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const row1: Cell[] = [
    {
      beat: 2, cx: 220, w: 300, color: RED,
      label: "TRAP",
      l1: t("sign of r: don't drop the", "r ka sign: mat chhodo"),
      l2: t("r < 0 alternating case", "r < 0 alternating case ko"),
    },
    {
      beat: 3, cx: 540, w: 300, color: RED,
      label: "TRAP",
      l1: t("GM sign: b = ±√ac;", "GM sign: b = ±√ac;"),
      l2: t("a GP cannot contain a zero term", "GP mein zero term nahi ho sakta"),
    },
    {
      beat: 4, cx: 860, w: 300, color: RED,
      label: "TRAP",
      l1: t("even symmetric pick uses r²;", "even symmetric pick mein r²;"),
      l2: t("r=1 means S_n=na, not division", "r=1 par S_n=na, division nahi"),
    },
  ];

  const row2: Cell[] = [
    {
      beat: 5, cx: 355, w: 310, color: GREEN_DARK,
      label: "PRO-TIP",
      l1: t("PRODUCT given → use a/r, a, ar;", "PRODUCT diya → a/r, a, ar use karo;"),
      l2: t("'a,b,c in GP' → use b² = ac", "'a,b,c GP mein' → b² = ac use karo"),
    },
    {
      beat: 6, cx: 725, w: 310, color: GREEN_DARK,
      label: "PRO-TIP",
      l1: t("take logs to convert a GP", "logs lo, GP problem ko"),
      l2: t("problem into the AP toolkit", "AP toolkit mein convert karo"),
    },
  ];

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={20} fill={INK} anchor="middle" script>
          {t("GP — the traps that cost marks, and the shortcuts that save them", "GP — traps jo marks lete hain, aur shortcuts jo bachate hain")}
        </T>
      </Fade>

      {/* beat 1 — top banner: convergence check */}
      <Draw on={beat >= 1} delay={dl(1, 0.1)} d={roundRectD(160, 85, 760, 40, 10)} stroke={RED} sw={2.4} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={540} y={110} size={14} fill={RED} anchor="middle" weight={700} script>
          {t("convergence: never write S_∞ = a/(1-r) without checking |r| < 1", "convergence: S_∞ = a/(1-r) mat likho bina |r| < 1 check kiye")}
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

      {/* beat 7 — bottom banner: recurring decimals */}
      <Draw on={beat >= 7} delay={dl(7, 0.1)} d={roundRectD(160, 365, 760, 42, 10)} stroke={RED} sw={2.4} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 0.5)}>
        <T x={540} y={391} size={14} fill={RED} anchor="middle" weight={700} script>
          {t("every recurring decimal is a convergent GP — recognise it on sight", "har recurring decimal ek convergent GP hai — turant pehchano")}
        </T>
      </Fade>
    </Scene>
  );
}
