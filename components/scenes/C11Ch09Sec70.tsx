/**
 * C11 Ch09 · Section 70 — "Addition and combustion: breaking aromaticity"
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 6.83, 16.81, 26.54, 36.44, 44.71, 54.36]):
 *  0 heading · 1 hydrogenation formula · 2 halogenation (BHC/lindane) text ·
 *  3 both need vigorous conditions to overpower resonance · 4 combustion
 *  formula · 5 sooty luminous flame · 6 RED: addition breaks aromaticity
 *
 * Layout plan — (a) Addition row y130-230, (b) Combustion row y300-380:
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch09Sec70({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={62} size={24} fill={RED} script>
          {t("addition and combustion: breaking aromaticity", "addition aur combustion: aromaticity tootna")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={94} size={15} fill={INK} weight={700}>
          {t("under force, benzene will add and burn", "zabardasti karo to benzene add aur burn karta")}
        </T>
      </Fade>

      {/* beat 1-2 — addition */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={60} y={140} size={16} fill={INK} weight={800} anchor="start">
          {t("(a) Addition", "(a) Addition")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={540} y={140} size={14} fill={INK} weight={700}>
          C6H6 + 3 H2 → C6H12  (Ni, 473–523 K)
        </T>
      </Fade>

      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={175} size={14} fill={INK}>
          {t("C6H6 + 3 Cl2 in UV → benzene hexachloride (BHC, lindane)", "C6H6 + 3 Cl2, UV mein → benzene hexachloride (BHC, lindane)")}
        </T>
      </Fade>

      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={208} size={13} fill={INK} script>
          {t("both need vigorous conditions to overpower the ring's resonance stability", "dono ko vigorous conditions chahiye, ring ki resonance stability haraane ke liye")}
        </T>
      </Fade>

      {/* beat 4-5 — combustion */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={60} y={290} size={16} fill={INK} weight={800} anchor="start">
          {t("(b) Combustion", "(b) Combustion")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.9)}>
        <T x={540} y={290} size={14} fill={INK} weight={700}>
          2 C6H6 + 15 O2 → 12 CO2 + 6 H2O
        </T>
      </Fade>

      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={325} size={14} fill={INK}>
          {t("burns with a sooty, luminous flame — high C:H ratio", "sooty, luminous flame se jalta — high C:H ratio")}
        </T>
      </Fade>

      {/* beat 6 — the deepest reason */}
      <Draw on={beat >= 6} delay={dl(6, 0.3)} d="M 60 400 L 60 460" stroke={RED} sw={3.4} dur={0.6} />
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={76} y={422} size={16} fill={RED} weight={700} anchor="start">
          {t("addition always breaks aromaticity", "addition hamesha aromaticity todta")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={76} y={450} size={14} fill={RED} script anchor="start">
          {t("that's the deepest reason substitution, not addition, is the norm", "yahi sabse gehri wajah substitution norm hai, addition nahi")}
        </T>
      </Fade>
    </Scene>
  );
}
