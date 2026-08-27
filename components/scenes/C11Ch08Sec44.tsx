/**
 * C11 Ch08 · Section 44 — "Quantitative analysis — how much of each?"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING(_CHEMISTRY).md.
 *
 * Beats (board_reveal_at, en [0, 7.17, 24.66, 37.12, 54.02, 64.09, 74.07, 85.93]):
 *  0 title (always-on, seq1) · 1 Liebig: C&H combustion · 2 Dumas: N via N2/KOH ·
 *  3 Kjeldahl: N via digestion+titration · 4 Carius: halogen via AgX · 5 Carius:
 *  sulphur via BaSO4 · 6 red note (method→element map) · 7 red closer (Kjeldahl
 *  limitation)
 *
 * 3-column table: METHOD x100, ELEMENT x350, PROCEDURE x520 (all anchor start).
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch08Sec44({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const Row = ({ y, on, delay, method, element, proc }: { y: number; on: boolean; delay: number; method: string; element: string; proc: string }) => (
    <Fade on={on} delay={delay}>
      <T x={100} y={y} size={13} fill={INK} weight={700} anchor="start">
        {method}
      </T>
      <T x={350} y={y} size={12} fill={INK} anchor="start">
        {element}
      </T>
      <T x={520} y={y} size={11.5} fill={MUTED} anchor="start">
        {proc}
      </T>
    </Fade>
  );

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={22} fill={RED} script>
          {t("Quantitative analysis — how much of each?", "Quantitative analysis — kitna har element?")}
        </T>
      </Fade>

      {/* header */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={100} y={95} size={11} fill={MUTED} weight={700} anchor="start">
          METHOD
        </T>
        <T x={350} y={95} size={11} fill={MUTED} weight={700} anchor="start">
          ELEMENT
        </T>
        <T x={520} y={95} size={11} fill={MUTED} weight={700} anchor="start">
          PROCEDURE
        </T>
      </Fade>

      {/* beat 1 — Liebig */}
      <Row y={125} on={beat >= 1} delay={dl(1, 0.2)} method="Liebig" element="C & H" proc={t("burn in O2, weigh CO2 + H2O", "O2 mein jalao, CO2 + H2O weigh karo")} />

      {/* beat 2 — Dumas */}
      <Row y={155} on={beat >= 2} delay={dl(2, 0.2)} method="Dumas" element="N" proc={t("combust → N2 over KOH, measure volume", "combust → N2 KOH ke upar, volume napo")} />

      {/* beat 3 — Kjeldahl */}
      <Row y={185} on={beat >= 3} delay={dl(3, 0.2)} method="Kjeldahl" element="N" proc={t("digest H2SO4 → NH3 → absorb → titrate", "digest H2SO4 → NH3 → absorb → titrate")} />

      {/* beat 4 — Carius, halogen */}
      <Row y={215} on={beat >= 4} delay={dl(4, 0.2)} method="Carius" element={t("Halogen", "Halogen")} proc={t("fuming HNO3 + AgNO3 → weigh AgX", "fuming HNO3 + AgNO3 → AgX weigh karo")} />

      {/* beat 5 — Carius, sulphur */}
      <Row y={245} on={beat >= 5} delay={dl(5, 0.2)} method="Carius" element={t("Sulphur", "Sulphur")} proc={t("oxidise → precipitate & weigh BaSO4", "oxidise → BaSO4 precipitate & weigh")} />

      {/* beat 6 — the method-to-element map */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 60 275 L 60 305" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={76} y={293} size={15} fill={RED} script anchor="start">
          {t(
            "method → element: Liebig → C&H · Dumas/Kjeldahl → N · Carius → halogen/S",
            "method → element: Liebig → C&H · Dumas/Kjeldahl → N · Carius → halogen/S"
          )}
        </T>
      </Fade>

      {/* beat 7 — the Kjeldahl limitation */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 60 320 L 60 350" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={76} y={338} size={15} fill={RED} script anchor="start">
          {t(
            "Kjeldahl fails for nitro/azo/ring N — not converted quantitatively to ammonium sulphate",
            "Kjeldahl nitro/azo/ring N ke liye fail — ammonium sulphate mein quantitatively convert nahi"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
