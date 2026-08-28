/**
 * Ch09 · Section 67 — "Mean versus maximum velocity" (worked example)
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * DRAFTED — UNVERIFIED (no audio uploaded for sec 13+ yet; see PROGRESS.md).
 *
 * Beats (en reveals [0, 7.59, 14.51, 19.63, 27.99, 36.78, 48.47]):
 *  0 title (always-on)
 *  1 text: find where the local speed equals the mean speed
 *  2 outer circle (r) + dashed inner circle (s ≈ 0.71r, the mean-speed radius)
 *  3 formula v_max = ΔPr²/4ηl
 *  4 formula v_avg = Q/πr² = ΔPr²/8ηl = v_max/2
 *  5 formula (green) r²−s² = r²/2 ⇒ s = r/√2 ≈ 0.71r
 *  6 red-margin note: the mean speed sits about 71% of the way out
 *
 * Layout plan:
 *  b2 | outer circle (r)          | circle | c(280,280) r80
 *  b2 | dashed circle (s≈0.71r)   | circle | c(280,280) r57
 *  b2 | "s≈0.71r" (12, green)     | T st   | x345 bl 245
 *  b1 | text (14, script)         | T mid  | x540  bl 114
 *  b3 | formula (16, w700)        | T mid  | x540  bl 400
 *  b4 | formula (15, w700)        | T mid  | x540  bl 430
 *  b5 | formula (17, w800, grn)   | T mid  | x540  bl 462
 *  b6 | margin bar (red)          | Draw   | x460  y482..506
 *  b6 | note (script 14, red)     | T st   | x476.. bl 502
 */

import React from "react";
import { Circle, TSpan } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch09Sec67({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={22} fill={RED} script>
          {t("JEE Advanced: mean versus max", "JEE Advanced: mean versus max")}
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={114} size={14} fill={MUTED} script anchor="middle">
          {t("find where the local speed equals the mean speed", "wahan dhoondo jahan local speed mean speed ke barabar hai")}
        </T>
      </Fade>

      {/* beat 2 — the mean-speed radius */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <Circle cx={280} cy={280} r={80} fill="none" stroke={INK} strokeWidth={2.4} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.9)}>
        <Circle cx={280} cy={280} r={57} fill="none" stroke={GREEN} strokeWidth={2} strokeDasharray="6 5" />
        <T x={345} y={245} size={12} fill={GREEN} anchor="start">
          s≈0.71r
        </T>
      </Fade>

      {/* beat 3 */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={400} size={16} fill={INK} weight={700} anchor="middle">
          v<TSpan fontSize={11} dy={4}>max</TSpan>
          <TSpan dy={-4}> = ΔPr² / 4ηl</TSpan>
        </T>
      </Fade>

      {/* beat 4 */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={430} size={15} fill={INK} weight={700} anchor="middle">
          v<TSpan fontSize={10} dy={4}>avg</TSpan>
          <TSpan dy={-4}> = Q/πr² = ΔPr²/8ηl = v</TSpan>
          <TSpan fontSize={10} dy={4}>max</TSpan>
          <TSpan dy={-4}>/2</TSpan>
        </T>
      </Fade>

      {/* beat 5 */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={462} size={17} fill={GREEN} weight={800} anchor="middle">
          r²−s² = r²/2 ⇒ s = r/√2 ≈ 0.71r
        </T>
      </Fade>

      {/* beat 6 */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 460 482 L 460 506" stroke={RED} sw={3.2} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <T x={476} y={502} size={14} fill={RED} script anchor="start">
          {t("the mean speed sits about 71% of the way out", "mean speed lagbhag 71% raste mein hoti")}
        </T>
      </Fade>
    </Scene>
  );
}
