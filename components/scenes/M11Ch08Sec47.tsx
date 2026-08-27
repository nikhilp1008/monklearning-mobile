/**
 * M11 Ch08 · Section 47 — "HP: the trap list and the pro-tips"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type=tips. Subtopic 4 (HP) closer.
 *
 * Beats (en [0, 8.19, 20.31, 35.33, 50.52, 62.63, 75.61, 88.58]):
 *  0 title (always-on)
 *  1 red top banner: signature trap
 *  2-4 three red trap cells (row 1)
 *  5-6 two green pro-tip cells (row 2)
 *  7 red bottom banner: HM ≤ GM ≤ AM
 *
 * Layout plan (cell x/w hand-checked to not overlap):
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

export default function M11Ch08Sec47({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const row1: Cell[] = [
    {
      beat: 2, cx: 220, w: 300, color: RED,
      label: "TRAP",
      l1: t("missing '2': writing ab/(a+b)", "'2' bhoolna: ab/(a+b) likhna"),
      l2: t("instead of 2ab/(a+b) for HM", "2ab/(a+b) ki jagah, HM ke liye"),
    },
    {
      beat: 3, cx: 540, w: 300, color: RED,
      label: "TRAP",
      l1: t("never invent a sum formula", "kabhi sum formula mat banao"),
      l2: t("for an HP — there is none in general", "HP ke liye — general mein hota nahi"),
    },
    {
      beat: 4, cx: 860, w: 300, color: RED,
      label: "TRAP",
      l1: t("no zero terms allowed; reversing", "zero terms allowed nahi; reverse"),
      l2: t("A≥G≥H is a shared trap with Unit 5", "A≥G≥H, Unit 5 ka shared trap hai"),
    },
  ];

  const row2: Cell[] = [
    {
      beat: 5, cx: 355, w: 310, color: GREEN_DARK,
      label: "PRO-TIP",
      l1: t("reciprocate first, use the AP", "pehle reciprocate karo, AP"),
      l2: t("toolkit, flip back at the end", "toolkit use karo, aakhir mein flip"),
    },
    {
      beat: 6, cx: 725, w: 310, color: GREEN_DARK,
      label: "PRO-TIP",
      l1: t("'pth=q, qth=p' → answer is", "'pth=q, qth=p' → answer hai"),
      l2: t("a_n = pq/n — memorise it", "a_n = pq/n — yaad rakho"),
    },
  ];

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={20} fill={INK} anchor="middle" script>
          {t("HP — the traps that cost marks, and the shortcuts that save them", "HP — traps jo marks lete hain, aur shortcuts jo bachate hain")}
        </T>
      </Fade>

      {/* beat 1 — top banner: the signature trap */}
      <Draw on={beat >= 1} delay={dl(1, 0.1)} d={roundRectD(160, 85, 760, 40, 10)} stroke={RED} sw={2.4} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={540} y={110} size={14} fill={RED} anchor="middle" weight={700} script>
          {t("signature trap: attacking HP terms directly, not reciprocating", "signature trap: HP terms directly attack karna, reciprocate nahi")}
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

      {/* beat 7 — bottom banner: HM ≤ GM ≤ AM */}
      <Draw on={beat >= 7} delay={dl(7, 0.1)} d={roundRectD(160, 365, 760, 42, 10)} stroke={RED} sw={2.4} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 0.5)}>
        <T x={540} y={391} size={14} fill={RED} anchor="middle" weight={700} script>
          {t("remember HM ≤ GM ≤ AM: the HM is always the smallest", "yaad rakho HM ≤ GM ≤ AM: HM hamesha sabse chota hai")}
        </T>
      </Fade>
    </Scene>
  );
}
