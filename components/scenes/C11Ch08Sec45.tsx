/**
 * C11 Ch08 · Section 45 — "Core estimation formulae"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING(_CHEMISTRY).md.
 *
 * Beats (board_reveal_at, en [0, 9.56, 19.71, 30.29, 42.67, 59.39, 67.16, 83.11]):
 *  0 title (always-on, seq1) · 1 %C formula · 2 %H formula · 3 %N (Kjeldahl) ·
 *  4 %halogen (Carius) · 5 Rf formula · 6 the 3 mass-fractions to memorise · 7
 *  red closer (O by difference)
 *
 * Five formula rows, centered, y100-220 (spacing 30).
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch08Sec45({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={24} fill={RED} script>
          {t("Core estimation formulae", "Core estimation formulae")}
        </T>
      </Fade>

      {/* beat 1 — %C */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={540} y={100} size={13} fill={INK} weight={700}>
          %C = 12/44 × (mCO₂ / mcompound) × 100
        </T>
      </Fade>

      {/* beat 2 — %H */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={540} y={130} size={13} fill={INK} weight={700}>
          %H = 2/18 × (mH₂O / mcompound) × 100
        </T>
      </Fade>

      {/* beat 3 — %N Kjeldahl */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={160} size={13} fill={INK} weight={700}>
          %N (Kjeldahl) = 1.4 × N × V / mcompound
        </T>
      </Fade>

      {/* beat 4 — %halogen Carius */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={190} size={13} fill={INK} weight={700}>
          %X (Carius) = (at.mass X / mol.mass AgX) × (mAgX / mcompound) × 100
        </T>
      </Fade>

      {/* beat 5 — Rf */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={220} size={13} fill={INK} weight={700}>
          Rf = {t("distance(component) / distance(solvent front)", "distance(component) / distance(solvent front)")}
        </T>
      </Fade>

      {/* beat 6 — memorise these three */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={250} size={13} fill={GREEN} weight={700}>
          {t("memorise: 12/44 (C) · 2/18 (H) · 1.4 (Kjeldahl factor)", "yaad rakho: 12/44 (C) · 2/18 (H) · 1.4 (Kjeldahl factor)")}
        </T>
      </Fade>

      {/* beat 7 — oxygen by difference */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 60 280 L 60 310" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={76} y={298} size={15} fill={RED} script anchor="start">
          {t(
            "oxygen is NEVER estimated directly — %O = 100 − (sum of the others)",
            "oxygen KABHI directly estimate nahi hota — %O = 100 − (baaki sabka sum)"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
