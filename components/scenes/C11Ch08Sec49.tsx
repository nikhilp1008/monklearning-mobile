/**
 * C11 Ch08 · Section 49 — "Worked example — Dumas N estimation (JEE Advanced)"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING(_CHEMISTRY).md.
 *
 * Beats (board_reveal_at, en [0, 10.75, 31.57, 41.81, 59.48, 77.4, 87.55, 105.47]):
 *  0 title (always-on, seq1) · 1 task (2 lines) · 2 P_dry = 745-25 = 720mm · 3
 *  V(STP) = 43.1 mL · 4 mass N ≈ 0.0539 g · 5 %N = 19.24% (boxed) · 6 red note
 *  (aqueous-tension correction) · 7 closer (verified)
 */

import React from "react";
import { Rect } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, GREEN, RED, CREAM, AMBER,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch08Sec49({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={19} fill={RED} script>
          {t("Worked example — Dumas N estimation (JEE Advanced)", "Worked example — Dumas N estimation (JEE Advanced)")}
        </T>
      </Fade>

      {/* beat 1 — task */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={540} y={95} size={13} fill={INK}>
          {t("0.28g → 50mL N2 over water @300K, 745mm", "0.28g → 50mL N2 water ke upar @300K, 745mm")}
        </T>
        <T x={540} y={125} size={13} fill={INK}>
          {t("aqueous tension @300K = 25mm — find %N", "aqueous tension @300K = 25mm — %N nikalo")}
        </T>
      </Fade>

      {/* beat 2 — correct for water vapour */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={540} y={155} size={13} fill={INK} weight={700}>
          P_dry = 745 − 25 = 720 mm
        </T>
      </Fade>

      {/* beat 3 — convert to STP */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={185} size={13} fill={INK} weight={700}>
          V(STP) = 50 × (720/760) × (273/300) = 43.1 mL
        </T>
      </Fade>

      {/* beat 4 — mass of nitrogen */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={215} size={12.5} fill={INK} weight={700}>
          {t("moles N2 = 43.1/22400; ×2 for N; ×14 → mass N ≈ 0.0539 g", "moles N2 = 43.1/22400; ×2 N ke liye; ×14 → mass N ≈ 0.0539 g")}
        </T>
      </Fade>

      {/* beat 5 — %N */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <Rect x={340} y={240} width={400} height={38} rx={8} fill={CREAM} stroke={AMBER} strokeWidth={2} />
        <T x={540} y={265} size={16} fill={INK} weight={800}>
          %N = (0.0539/0.28) × 100 = 19.24%
        </T>
      </Fade>

      {/* beat 6 — where the marks hide */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 60 300 L 60 330" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={76} y={318} size={15} fill={RED} script anchor="start">
          {t(
            "the marks hide in the aqueous-tension correction — subtract 25mm BEFORE the STP conversion",
            "marks aqueous-tension correction mein chupe — STP conversion se PEHLE 25mm ghatao"
          )}
        </T>
      </Fade>

      {/* beat 7 — closer */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={355} size={14} fill={GREEN} weight={700}>
          {t("value verified: %N ≈ 19.24%", "value verified: %N ≈ 19.24%")}
        </T>
      </Fade>
    </Scene>
  );
}
