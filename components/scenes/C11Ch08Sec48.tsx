/**
 * C11 Ch08 · Section 48 — "Worked example — Liebig C & H estimation (JEE Main)"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING(_CHEMISTRY).md.
 *
 * Beats (board_reveal_at, en [0, 7.94, 23.89, 37.8, 48.38, 58.88, 78.08, 88.75]):
 *  0 title (always-on, seq1) · 1 task (0.30g → 0.44g CO2 + 0.18g H2O) · 2 %C
 *  calculation (boxed) · 3 %H calculation (boxed) · 4 %O by difference · 5 red
 *  note (mass-fraction logic) · 6 the standard JEE Main format · 7 answer stamp
 */

import React from "react";
import { Rect } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, GREEN, RED, CREAM, AMBER,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch08Sec48({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={19} fill={RED} script>
          {t("Worked example — Liebig C & H estimation (JEE Main)", "Worked example — Liebig C & H estimation (JEE Main)")}
        </T>
      </Fade>

      {/* beat 1 — task */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={540} y={95} size={13} fill={INK}>
          {t("0.30 g compound → 0.44 g CO2 + 0.18 g H2O — find %C and %H", "0.30 g compound → 0.44 g CO2 + 0.18 g H2O — %C aur %H nikalo")}
        </T>
      </Fade>

      {/* beat 2 — %C */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <Rect x={280} y={120} width={520} height={38} rx={8} fill={CREAM} stroke={AMBER} strokeWidth={1.8} />
        <T x={540} y={145} size={15} fill={INK} weight={700}>
          %C = (12/44) × (0.44/0.30) × 100 = 40.0%
        </T>
      </Fade>

      {/* beat 3 — %H */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <Rect x={280} y={175} width={520} height={38} rx={8} fill={CREAM} stroke={AMBER} strokeWidth={1.8} />
        <T x={540} y={200} size={15} fill={INK} weight={700}>
          %H = (2/18) × (0.18/0.30) × 100 = 6.67%
        </T>
      </Fade>

      {/* beat 4 — %O by difference */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={240} size={13} fill={INK}>
          {t("%O = 100 − 40.0 − 6.67 = 53.33% (by difference)", "%O = 100 − 40.0 − 6.67 = 53.33% (difference se)")}
        </T>
      </Fade>

      {/* beat 5 — the mass-fraction logic */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M 60 260 L 60 290" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={76} y={278} size={15} fill={RED} script anchor="start">
          {t(
            "all carbon → CO2 (12/44 of it is C); all hydrogen → H2O (2/18 of it is H)",
            "sara carbon → CO2 (12/44 usme C hai); sara hydrogen → H2O (2/18 usme H hai)"
          )}
        </T>
      </Fade>

      {/* beat 6 — the standard format */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={315} size={13} fill={INK}>
          {t("mass-fraction + oxygen-by-difference — the standard JEE Main format", "mass-fraction + oxygen-by-difference — standard JEE Main format")}
        </T>
      </Fade>

      {/* beat 7 — the answer */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <Rect x={360} y={340} width={360} height={40} rx={8} fill={CREAM} stroke={GREEN} strokeWidth={2} />
        <T x={540} y={366} size={17} fill={GREEN} weight={800}>
          %C = 40.0%, %H = 6.67%
        </T>
      </Fade>
    </Scene>
  );
}
