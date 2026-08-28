/**
 * Ch09 · Section 78 — "Work to blow a soap bubble" (worked example)
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * DRAFTED — UNVERIFIED (no audio uploaded for sec 13+ yet; see PROGRESS.md).
 *
 * Beats (en reveals [0, 6.91, 17.58, 24.41, 27.65, 35.75, 36.75]):
 *  0 title (always-on)
 *  1 text: soap bubble radius 3.0 cm; surface tension 0.030 N/m
 *  2 bubble (double ring, two surfaces) + r label
 *  3 text: total area created is 8πr²
 *  4 formula ΔA = 8π(0.030)² = 2.26×10⁻² m²
 *  5 formula (green) W = SΔA = 0.030×2.26×10⁻² = 6.8×10⁻⁴ J
 *  6 red-margin note: a drop of the same radius would take exactly half
 *
 * Layout plan:
 *  b2 | bubble (2 rings)          | circle | c(540,260) r70 & r64
 *  b2 | "r = 3.0 cm" (13)         | T mid  | x540  bl 350
 *  b1 | text (14, script)         | T mid  | x540  bl 114
 *  b3 | text (13, script)         | T mid  | x540  bl 385
 *  b4 | formula (16, w700)        | T mid  | x540  bl 415
 *  b5 | formula (16, w800, grn)   | T mid  | x540  bl 445
 *  b6 | margin bar (red)          | Draw   | x460  y467..491
 *  b6 | note (script 14, red)     | T st   | x476.. bl 487
 */

import React from "react";
import { Circle } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch09Sec78({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={24} fill={RED} script>
          {t("CBSE: work to blow a bubble", "CBSE: work to blow a bubble")}
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={114} size={14} fill={MUTED} script anchor="middle">
          {t("soap bubble radius 3.0 cm; surface tension 0.030 N/m", "soap bubble radius 3.0 cm; surface tension 0.030 N/m")}
        </T>
      </Fade>

      {/* beat 2 — the bubble, two surfaces */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <Circle cx={540} cy={260} r={70} fill="none" stroke={INK} strokeWidth={2.2} />
        <Circle cx={540} cy={260} r={62} fill="none" stroke={INK} strokeWidth={1.6} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={540} y={350} size={13} fill={MUTED} anchor="middle">
          r = 3.0 cm
        </T>
      </Fade>

      {/* beat 3 */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={385} size={13} fill={MUTED} script anchor="middle">
          {t("total area created is 8πr²", "total area created is 8πr²")}
        </T>
      </Fade>

      {/* beat 4 */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={415} size={16} fill={INK} weight={700} anchor="middle">
          ΔA = 8π(0.030)² = 2.26×10⁻² m²
        </T>
      </Fade>

      {/* beat 5 */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={445} size={16} fill={GREEN} weight={800} anchor="middle">
          W = SΔA = 0.030×2.26×10⁻² = 6.8×10⁻⁴ J
        </T>
      </Fade>

      {/* beat 6 */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 460 467 L 460 491" stroke={RED} sw={3.2} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <T x={476} y={487} size={14} fill={RED} script anchor="start">
          {t("a drop of the same radius would take exactly half", "same radius ka drop exactly half lega")}
        </T>
      </Fade>
    </Scene>
  );
}
