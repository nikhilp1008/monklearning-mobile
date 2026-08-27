/**
 * C11 Chemistry Ch04 · Section 37 — "Chapter formula recap: every equation in one place"
 * Canvas 1080×620 · safe x36–1044, y30–596. section_type: concept (chapter close, card recap).
 *
 * Beats (en [0, 8.28, 19.54, 33.71, 47.87, 61.7, 80.64, 94.12, 108.29]):
 *  0 anchor
 *  1 FC card
 *  2 dipole moment card
 *  3 % ionic character card
 *  4 bond length card
 *  5 SN/H card
 *  6 MOT bond order card
 *  7 MO orderings line
 *  8 anchor numbers lines
 *
 * Layout plan:
 *  b1-4 | 4 cards (row 1) | Draw/T | x56..1024 y100..178
 *  b5-6 | 2 cards (row 2) | Draw/T | x56..1008 y195..265
 *  b7   | MO order line   | T mid  | y300
 *  b8   | anchor numbers  | T mid  | y340 / y364
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch04Sec37({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const row1 = [
    { n: 1, x: 56, title: "FORMAL CHARGE", formula: "FC = V − L − B/2", note: t("ΣFC = charge", "ΣFC = charge") },
    { n: 2, x: 302, title: t("DIPOLE MOMENT", "DIPOLE MOMENT"), formula: "μ = q × d", note: "1D=3.336×10⁻³⁰ Cm" },
    { n: 3, x: 548, title: t("% IONIC CHAR.", "% IONIC CHAR."), formula: "(μobs/μionic)×100", note: "μionic = e·d" },
    { n: 4, x: 794, title: t("BOND LENGTH", "BOND LENGTH"), formula: "d = r_A + r_B", note: t("BO↑→H↑, d↓", "BO↑→H↑, d↓") },
  ];
  const row2 = [
    { n: 5, x: 56, w: 460, title: t("STERIC NUMBER / H", "STERIC NUMBER / H"), formula: "SN = σ+LP  ·  H = ½(V+M−C+A)", note: t("both count orbitals needed", "dono orbitals count karte") },
    { n: 6, x: 548, w: 460, title: t("MOT BOND ORDER", "MOT BOND ORDER"), formula: "BO = ½(bonding − antibonding)", note: t("BO>0 → exists; higher → shorter+stronger", "BO>0 → exists; zyada → shorter+stronger") },
  ];

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={58} size={19} fill={RED} script>
          {t("Chapter formula recap", "Chapter formula recap")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 3.4)} d="M 420 80 C 470 76, 610 76, 660 80" stroke={RED} sw={2.2} dur={0.6} />

      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={95} size={11} fill={MUTED} script>
          {t("every equation, tied to the job it does", "har equation, uske kaam ke saath")}
        </T>
      </Fade>

      {/* beats 1-4 — row 1 cards */}
      {row1.map((c, i) => (
        <React.Fragment key={c.n}>
          <Draw on={beat >= c.n} delay={dl(c.n, 0.1)} d={`M ${c.x} 100 h 230 v 78 h -230 z`} stroke={INK} sw={1.6} dur={0.4} />
          <Fade on={beat >= c.n} delay={dl(c.n, 0.4)}>
            <T x={c.x + 115} y={124} size={11.5} weight={800} fill={AMBER_DARK}>
              {c.title}
            </T>
            <T x={c.x + 115} y={148} size={12.5} weight={700} fill={INK}>
              {c.formula}
            </T>
            <T x={c.x + 115} y={168} size={9.5} fill={MUTED}>
              {c.note}
            </T>
          </Fade>
        </React.Fragment>
      ))}

      {/* beats 5-6 — row 2 cards */}
      {row2.map((c) => (
        <React.Fragment key={c.n}>
          <Draw on={beat >= c.n} delay={dl(c.n, 0.1)} d={`M ${c.x} 195 h ${c.w} v 70 h -${c.w} z`} stroke={INK} sw={1.6} dur={0.4} />
          <Fade on={beat >= c.n} delay={dl(c.n, 0.4)}>
            <T x={c.x + c.w / 2} y={219} size={11.5} weight={800} fill={AMBER_DARK}>
              {c.title}
            </T>
            <T x={c.x + c.w / 2} y={243} size={12.5} weight={700} fill={INK}>
              {c.formula}
            </T>
            <T x={c.x + c.w / 2} y={259} size={9.5} fill={MUTED}>
              {c.note}
            </T>
          </Fade>
        </React.Fragment>
      ))}

      {/* beat 7 — MO orderings */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={300} size={12} fill={INK}>
          {t(
            "MO order: ≤N₂ → π2p BELOW σ2pz · >N₂ (O,F) → σ2pz BELOW π2p",
            "MO order: ≤N₂ → π2p σ2pz SE NEECHE · >N₂ (O,F) → σ2pz π2p SE NEECHE"
          )}
        </T>
      </Fade>

      {/* beat 8 — anchor numbers */}
      <Fade on={beat >= 8} delay={dl(8, 0.3)}>
        <T x={540} y={340} size={12} fill={INK}>
          1 D = 3.336×10⁻³⁰ Cm · H₂: 74 pm, 435.8 kJ/mol
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 0.7)}>
        <T x={540} y={364} size={12} weight={700} fill={RED}>
          {t("ideal angles: 180° · 120° · 109.5° · 90°", "ideal angles: 180° · 120° · 109.5° · 90°")}
        </T>
      </Fade>
    </Scene>
  );
}
