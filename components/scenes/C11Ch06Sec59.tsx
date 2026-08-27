/**
 * C11 Ch06 · Section 59 — "How a buffer holds steady"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING_CHEMISTRY.md
 * + SCENE_AUTHORING.md.
 *
 * Beats (board_reveal_at_english: [0, 8, 16.9, 25.3, 34.2, 45.1, 57.5, 65.9]):
 *  0 title + underline
 *  1 two big reservoirs: HOAc tank and OAc⁻ tank, both full
 *  2 + acid: OAc⁻ reservoir absorbs it → HOAc
 *  3 + base: HOAc reservoir absorbs it → OAc⁻
 *  4 note: ratio barely changes → pH barely moves (Henderson)
 *  5 capacity, boxed: greatest at pH = pKa (half-neutralization)
 *  6 numeric: ammonia buffer + acid, ΔpH < 0.1 unit
 *  7 contrast: same acid + pure water, ΔpH several units (7→2)
 *
 * Layout plan (centered stack; longer language counts):
 *  b1 | two tanks (fill+outline)    | Draw   | x250..650 y130..220
 *  b1 | tank labels (14)            | T mid  | y241..255 (bl 245)
 *  b2 | +acid arrow (red)           | Draw   | x350..550 y165
 *  b3 | +base arrow (green)         | Draw   | x350..550 y195
 *  b4 | note (14, muted)            | T mid  | y267..282 (bl 278)
 *  b5 | capacity box (amber)        | rect   | x230..850 y300..342
 *  b6 | numeric (15, green)         | T mid  | y365..381 (bl 370)
 *  b7 | contrast (15, red)          | T mid  | y395..411 (bl 400)
 */

import React from "react";
import { Rect } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, arrowD, INK, MUTED, AMBER, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch06Sec59({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={21} fill={RED} script>
          {t("how a buffer holds steady", "buffer steady kaise rehta")}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 6)}
        d="M 430 84 C 480 80, 600 87, 650 83"
        stroke={RED}
        sw={2.4}
        dur={0.6}
      />

      {/* beat 1 — the two reservoirs */}
      <Draw on={beat >= 1} d="M 250 130 H 350 V 220 H 250 Z" stroke={INK} sw={2.2} dur={beat > 1 ? 0.3 : 0.8} />
      <Draw on={beat >= 1} delay={dl(1, 0.3)} d="M 550 130 H 650 V 220 H 550 Z" stroke={INK} sw={2.2} dur={0.8} />
      <Fade on={beat >= 1} delay={dl(1, 0.7)}>
        <Rect x={252} y={150} width={96} height={68} fill={AMBER} opacity={0.2} />
        <Rect x={552} y={150} width={96} height={68} fill={AMBER} opacity={0.2} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.2)}>
        <T x={300} y={245} size={14} fill={INK} weight={700} anchor="middle">HOAc</T>
        <T x={600} y={245} size={14} fill={INK} weight={700} anchor="middle">OAc⁻</T>
      </Fade>

      {/* beat 2 — add acid: acetate absorbs it */}
      <Draw on={beat >= 2} delay={dl(2, 0.3)} d={arrowD(550, 165, 350, 165)} stroke={RED} sw={2.4} dur={0.6} />
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={450} y={155} size={12} fill={RED} anchor="middle">
          {t("+ acid", "+ acid")}
        </T>
      </Fade>

      {/* beat 3 — add base: acid absorbs it */}
      <Draw on={beat >= 3} delay={dl(3, 0.3)} d={arrowD(350, 195, 550, 195)} stroke={GREEN} sw={2.4} dur={0.6} />
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={450} y={210} size={12} fill={GREEN} anchor="middle">
          {t("+ base", "+ base")}
        </T>
      </Fade>

      {/* beat 4 — the ratio barely changes */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={278} size={14} fill={MUTED} anchor="middle">
          {t(
            "ratio barely changes → pH barely moves (Henderson)",
            "ratio bamuskil badalta → pH bamuskil hilta (Henderson)"
          )}
        </T>
      </Fade>

      {/* beat 5 — maximum capacity */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Rect x={230} y={300} width={620} height={42} rx={10} fill={CREAM} stroke={AMBER} strokeWidth={1.8} />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={540} y={326} size={15} fill={AMBER_DARK} weight={600} anchor="middle">
          {t(
            "greatest capacity at pH = pKa (half-neutralization)",
            "sabse zyada capacity pH = pKa par (half-neutralization)"
          )}
        </T>
      </Fade>

      {/* beat 6 — the numeric proof */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={370} size={15} fill={GREEN} anchor="middle">
          {t("ammonia buffer + acid: ΔpH < 0.1 unit", "ammonia buffer + acid: ΔpH < 0.1 unit")}
        </T>
      </Fade>

      {/* beat 7 — the contrast */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={540} y={400} size={15} fill={RED} anchor="middle">
          {t(
            "same acid + pure water: ΔpH several units (7→2)",
            "same acid + pure water: ΔpH kai units (7→2)"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
