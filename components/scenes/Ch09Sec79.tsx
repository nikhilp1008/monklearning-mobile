/**
 * Ch09 · Section 79 — "Excess pressure: bubble beats drop two to one" (worked example)
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * DRAFTED — UNVERIFIED (no audio uploaded for sec 13+ yet; see PROGRESS.md).
 *
 * Beats (en reveals [0, 5.46, 16.55, 22.87, 28.59, 35.84, 36.84]):
 *  0 title (always-on)
 *  1 text: a raindrop and a soap bubble, same radius, same surface tension
 *  2 drop (2S/r) vs bubble (4S/r)
 *  3 red-margin note: the trap — treating both as 2S/r gives a wrong 1:1
 *  4 formula (green) ΔP_bubble/ΔP_drop = (4S/r)/(2S/r) = 2
 *  5 red-margin note: the bubble's two surfaces double its excess pressure
 *  6 text (green): bubble beats drop, two to one
 *
 * Layout plan:
 *  b2 | drop (cream, 1 circle)    | circle | c(280,260) r55
 *  b2 | "drop, 2S/r" (13)         | T mid  | x280  bl 335
 *  b2 | bubble (2 circles)        | circle | c(700,260) r55 & r49
 *  b2 | "bubble, 4S/r" (13)       | T mid  | x700  bl 335
 *  b1 | text (14, script)         | T mid  | x540  bl 114
 *  b3 | margin bar (red)          | Draw   | x460  y357..381
 *  b3 | note (script 14, red)     | T st   | x476.. bl 377
 *  b4 | formula (18, w800, grn)   | T mid  | x540  bl 410
 *  b5 | margin bar (red)          | Draw   | x460  y430..454
 *  b5 | note (script 14, red)     | T st   | x476.. bl 450
 *  b6 | text (15, script, grn)    | T mid  | x540  bl 478
 */

import React from "react";
import { Circle, TSpan } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch09Sec79({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={22} fill={RED} script>
          {t("NEET speed trap: bubble vs drop", "NEET speed trap: bubble vs drop")}
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={114} size={14} fill={MUTED} script anchor="middle">
          {t("a raindrop and a soap bubble, same radius, same S", "raindrop aur soap bubble, same radius, same S")}
        </T>
      </Fade>

      {/* beat 2 — 2S/r vs 4S/r */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <Circle cx={280} cy={260} r={55} fill={CREAM} stroke={INK} strokeWidth={2.2} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={280} y={335} size={13} fill={MUTED} anchor="middle">
          {t("drop, 2S/r", "drop, 2S/r")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.3)}>
        <Circle cx={700} cy={260} r={55} fill="none" stroke={INK} strokeWidth={2.2} />
        <Circle cx={700} cy={260} r={48} fill="none" stroke={INK} strokeWidth={1.6} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.1)}>
        <T x={700} y={335} size={13} fill={MUTED} anchor="middle">
          {t("bubble, 4S/r", "bubble, 4S/r")}
        </T>
      </Fade>

      {/* beat 3 */}
      <Draw on={beat >= 3} delay={dl(3, 0.2)} d="M 460 357 L 460 381" stroke={RED} sw={3.2} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <T x={476} y={377} size={14} fill={RED} script anchor="start">
          {t("the trap: treating both as 2S/r gives a wrong 1:1", "trap: dono ko 2S/r maanna galat 1:1 deta")}
        </T>
      </Fade>

      {/* beat 4 */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={410} size={16} fill={GREEN} weight={800} anchor="middle">
          ΔP<TSpan fontSize={11} dy={4}>bubble</TSpan>
          <TSpan dy={-4}> / ΔP</TSpan>
          <TSpan fontSize={11} dy={4}>drop</TSpan>
          <TSpan dy={-4}> = (4S/r)/(2S/r) = 2</TSpan>
        </T>
      </Fade>

      {/* beat 5 */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M 460 430 L 460 454" stroke={RED} sw={3.2} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={476} y={450} size={14} fill={RED} script anchor="start">
          {t("the bubble's two surfaces double its excess pressure", "bubble ke do surfaces excess pressure double karte")}
        </T>
      </Fade>

      {/* beat 6 */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={478} size={15} fill={GREEN} script anchor="middle">
          {t("bubble beats drop, two to one", "bubble drop ko two-to-one se beat karta")}
        </T>
      </Fade>
    </Scene>
  );
}
