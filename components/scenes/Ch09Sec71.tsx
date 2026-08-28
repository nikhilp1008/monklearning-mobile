/**
 * Ch09 · Section 71 — "Excess pressure in drops and bubbles"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * DRAFTED — UNVERIFIED (no audio uploaded for sec 13+ yet; see PROGRESS.md).
 *
 * Beats (en reveals [0, 24.83, 25.83, 26.83, 27.83, 28.83, 29.83, 38.96]):
 *  0 title (always-on)
 *  1 text: a curved surface has higher pressure on its concave side
 *  2 drop (single circle) vs bubble (double circle, two surfaces)
 *  3 formula ΔP_drop = 2S/r
 *  4 formula ΔP_bubble = 4S/r
 *  5 red-margin note: a soap bubble has two surfaces — twice the excess
 *  6 text: an air bubble inside a liquid has one surface, like a drop
 *  7 red-margin note: always ask — how many surfaces?
 *
 * Layout plan:
 *  b2 | drop (cream, 1 circle)    | circle | c(280,280) r60
 *  b2 | "drop" (13)               | T mid  | x280  bl 360
 *  b2 | bubble (2 circles)        | circle | c(700,280) r60 & r54
 *  b2 | "bubble, 2 surfaces" (13) | T mid  | x700  bl 360
 *  b1 | text (14, script)         | T mid  | x540  bl 114
 *  b3 | formula (18, w700)        | T mid  | x540  bl 395
 *  b4 | formula (18, w700)        | T mid  | x540  bl 425
 *  b5 | margin bar (red)          | Draw   | x460  y445..469
 *  b5 | note (script 14, red)     | T st   | x476.. bl 465
 *  b6 | text (13, script)         | T mid  | x540  bl 492
 *  b7 | margin bar (red)          | Draw   | x460  y512..536
 *  b7 | note (script 14, red)     | T st   | x476.. bl 532
 */

import React from "react";
import { Circle, TSpan } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch09Sec71({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={22} fill={RED} script>
          {t("excess pressure in drops and bubbles", "drops aur bubbles mein excess pressure")}
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={114} size={14} fill={MUTED} script anchor="middle">
          {t("a curved surface has higher pressure on its concave side", "curved surface ke concave side pe pressure zyada hota")}
        </T>
      </Fade>

      {/* beat 2 — one surface vs two */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <Circle cx={280} cy={280} r={60} fill={CREAM} stroke={INK} strokeWidth={2.4} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={280} y={360} size={13} fill={MUTED} anchor="middle">
          {t("drop", "drop")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.3)}>
        <Circle cx={700} cy={280} r={60} fill="none" stroke={INK} strokeWidth={2.2} />
        <Circle cx={700} cy={280} r={52} fill="none" stroke={INK} strokeWidth={1.6} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.1)}>
        <T x={700} y={360} size={13} fill={MUTED} anchor="middle">
          {t("bubble, 2 surfaces", "bubble, 2 surfaces")}
        </T>
      </Fade>

      {/* beat 3 */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={395} size={18} fill={INK} weight={700} anchor="middle">
          ΔP<TSpan fontSize={12} dy={4}>drop</TSpan>
          <TSpan dy={-4}> = 2S/r</TSpan>
        </T>
      </Fade>

      {/* beat 4 */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={425} size={18} fill={INK} weight={700} anchor="middle">
          ΔP<TSpan fontSize={12} dy={4}>bubble</TSpan>
          <TSpan dy={-4}> = 4S/r</TSpan>
        </T>
      </Fade>

      {/* beat 5 */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M 460 445 L 460 469" stroke={RED} sw={3.2} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={476} y={465} size={14} fill={RED} script anchor="start">
          {t("a soap bubble has two surfaces — twice the excess", "soap bubble ke do surfaces hote — double excess")}
        </T>
      </Fade>

      {/* beat 6 */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={492} size={13} fill={MUTED} script anchor="middle">
          {t("an air bubble inside a liquid has one surface, like a drop", "liquid ke andar air bubble ka ek surface hota, drop jaisa")}
        </T>
      </Fade>

      {/* beat 7 */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 460 512 L 460 536" stroke={RED} sw={3.2} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.5)}>
        <T x={476} y={532} size={14} fill={RED} script anchor="start">
          {t("always ask: how many surfaces?", "hamesha pucho: kitne surfaces hain?")}
        </T>
      </Fade>
    </Scene>
  );
}
