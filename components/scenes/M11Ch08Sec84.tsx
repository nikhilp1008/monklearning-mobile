/**
 * M11 Ch08 · Section 84 — "Your complete Sequences & Series toolkit"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type=formula_recap. Grab-and-go grid
 * covering all 8 subtopics, revealed in teaching order.
 *
 * Beats (en [0, 13.48, 29.61, 46.17, 58.28, 74.24, 89.86, 99.41, 114.52]):
 *  0 title (always-on)
 *  1-4 row 1 cards: AP, GP, HP, Means
 *  5-7 row 2 cards: AGP, Sums, Telescope
 *  8 red-margin: the complete toolkit
 *
 * Layout plan:
 *  row1 | box roundRect cx160/390/620/850 y95 w210 h85 · label bl115 ·
 *         line1 bl140 · line2 bl162
 *  row2 | box roundRect cx280/540/800 y230 w220 h85 · label bl250 ·
 *         line1 bl275 · line2 bl297
 *  b8 | banner x160 y355 w760 h55 (text bl~387)
 */

import React from "react";
import { Rect } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, AMBER_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD } from "./math-kit";

type Card = { beat: number; cx: number; w: number; label: string; l1: string; l2: string };

export default function M11Ch08Sec84({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const row1: Card[] = [
    { beat: 1, cx: 160, w: 210, label: "AP", l1: "a_n = a+(n-1)d", l2: "S_n = (n/2)(a+l)" },
    { beat: 2, cx: 390, w: 210, label: "GP", l1: "a_n = a·r^(n-1)", l2: "S_∞ = a/(1-r), |r|<1" },
    { beat: 3, cx: 620, w: 210, label: "HP", l1: "1/a_n in AP", l2: "H = 2ab/(a+b)" },
    { beat: 4, cx: 850, w: 210, label: t("Means", "Means"), l1: "A ≥ G ≥ H, AH=G²", l2: "a,b = A±√(A²-G²)" },
  ];

  const row2: Card[] = [
    { beat: 5, cx: 280, w: 220, label: "AGP", l1: "t_n = [a+(n-1)d]r^(n-1)", l2: "S_∞ = a/(1-r)+dr/(1-r)²" },
    { beat: 6, cx: 540, w: 220, label: t("Sums", "Sums"), l1: "Σr² = n(n+1)(2n+1)/6", l2: "Σr³ = (Σr)²" },
    { beat: 7, cx: 800, w: 220, label: t("Telescope", "Telescope"), l1: "t_r = V_r - V_(r+1)", l2: "Σ = V_1 - V_(n+1)" },
  ];

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={21} fill={INK} anchor="middle" script>
          {t("Every formula from the chapter, in one place", "Chapter ka har formula, ek jagah")}
        </T>
      </Fade>

      {row1.map((c, i) => (
        <Fade key={i} on={beat >= c.beat} delay={dl(c.beat, 0.2)}>
          <Draw on={beat >= c.beat} delay={dl(c.beat, 0)} d={roundRectD(c.cx - c.w / 2, 95, c.w, 85, 8)} stroke={AMBER_DARK} sw={1.8} dur={0.4} />
          <Rect x={c.cx - c.w / 2} y={95} width={c.w} height={85} rx={8} fill={CREAM} opacity={0.5} />
          <T x={c.cx} y={115} size={13} fill={AMBER_DARK} anchor="middle" weight={700} script>{c.label}</T>
          <T x={c.cx} y={140} size={11.5} fill={INK} anchor="middle">{c.l1}</T>
          <T x={c.cx} y={162} size={11.5} fill={INK} anchor="middle">{c.l2}</T>
        </Fade>
      ))}

      {row2.map((c, i) => (
        <Fade key={i} on={beat >= c.beat} delay={dl(c.beat, 0.2)}>
          <Draw on={beat >= c.beat} delay={dl(c.beat, 0)} d={roundRectD(c.cx - c.w / 2, 230, c.w, 85, 8)} stroke={AMBER_DARK} sw={1.8} dur={0.4} />
          <Rect x={c.cx - c.w / 2} y={230} width={c.w} height={85} rx={8} fill={CREAM} opacity={0.5} />
          <T x={c.cx} y={250} size={13} fill={AMBER_DARK} anchor="middle" weight={700} script>{c.label}</T>
          <T x={c.cx} y={275} size={11.5} fill={INK} anchor="middle">{c.l1}</T>
          <T x={c.cx} y={297} size={11.5} fill={INK} anchor="middle">{c.l2}</T>
        </Fade>
      ))}

      {/* beat 8 — red banner: the complete toolkit */}
      <Draw on={beat >= 8} delay={dl(8, 0.1)} d={roundRectD(160, 350, 760, 70, 10)} stroke={RED} sw={2.4} dur={0.5} />
      <Fade on={beat >= 8} delay={dl(8, 0.5)}>
        <T x={540} y={372} size={14} fill={RED} anchor="middle" weight={700} script>
          {t("this is your complete toolkit —", "yeh tumhara complete toolkit hai —")}
        </T>
        <T x={540} y={412} size={14} fill={RED} anchor="middle" weight={700} script>
          {t("every result the chapter rests on, on one board", "chapter ka har result, ek board pe")}
        </T>
      </Fade>
    </Scene>
  );
}
