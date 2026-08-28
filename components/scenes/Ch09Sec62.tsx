/**
 * Ch09 · Section 62 — "Deriving the profile and the pi over eight"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * DRAFTED — UNVERIFIED (no audio uploaded for sec 13+ yet; see PROGRESS.md).
 *
 * Beats (en reveals [0, 1.0, 2.0, 3.0, 4.0, 5.0, 11.66]):
 *  0 title (always-on)
 *  1 text: take a coaxial fluid cylinder of radius s inside the tube
 *  2 concentric circles (tube radius r, coaxial cylinder radius s)
 *  3 formula ΔPπs² = −η(2πsl)(dv/ds)
 *  4 formula v(s) = ΔP/(4ηl) (r²−s²)
 *  5 text: sum thin annular rings to get the flow rate
 *  6 formula (green) Q = πΔPr⁴/(8ηl)
 *
 * Layout plan:
 *  b2 | outer circle (tube, r)     | circle | c(280,280) r80
 *  b2 | inner circle (s)           | circle | c(280,280) r45
 *  b2 | "r" radial + label         | Draw+T | (280,280)→(280,200) · bl 190
 *  b2 | "s" radial + label         | Draw+T | (280,280)→(280,235) · bl 250
 *  b1 | text (14, script)          | T mid  | x540  bl 114
 *  b3 | formula (15, w700)         | T mid  | x540  bl 410
 *  b4 | formula (16, w700)         | T mid  | x540  bl 440
 *  b5 | text (13, script)          | T mid  | x540  bl 468
 *  b6 | formula (20, w800, grn)    | T mid  | x540  bl 500
 */

import React from "react";
import { Circle } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch09Sec62({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={20} fill={RED} script>
          {t("deriving the profile and the pi over 8", "profile aur pi over 8 derive karte hain")}
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={114} size={14} fill={MUTED} script anchor="middle">
          {t("take a coaxial fluid cylinder of radius s inside the tube", "tube ke andar radius s ka ek coaxial fluid cylinder lo")}
        </T>
      </Fade>

      {/* beat 2 — the two radii */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <Circle cx={280} cy={280} r={80} fill="none" stroke={INK} strokeWidth={2.4} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <Circle cx={280} cy={280} r={45} fill="none" stroke={INK} strokeWidth={1.8} strokeDasharray="5 4" />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <Draw on={beat >= 2} d="M 280 280 V 200" stroke={INK} sw={1.6} dur={0.5} />
        <T x={280} y={190} size={13} fill={INK} anchor="middle">
          r
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.2)}>
        <Draw on={beat >= 2} d="M 280 280 L 245 245" stroke={INK} sw={1.6} dur={0.5} />
        <T x={230} y={235} size={12} fill={INK} anchor="middle">
          s
        </T>
      </Fade>

      {/* beat 3 */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={410} size={15} fill={INK} weight={700} anchor="middle">
          ΔPπs² = −η(2πsl)(dv/ds)
        </T>
      </Fade>

      {/* beat 4 */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={440} size={16} fill={INK} weight={700} anchor="middle">
          v(s) = ΔP/(4ηl) · (r²−s²)
        </T>
      </Fade>

      {/* beat 5 */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={468} size={13} fill={MUTED} script anchor="middle">
          {t("sum thin annular rings to get the flow rate", "flow rate ke liye thin annular rings sum karo")}
        </T>
      </Fade>

      {/* beat 6 */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={500} size={20} fill={GREEN} weight={800} anchor="middle">
          Q = πΔPr⁴ / 8ηl
        </T>
      </Fade>
    </Scene>
  );
}
