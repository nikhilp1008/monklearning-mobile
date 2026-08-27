/**
 * C11 Chemistry Ch04 · Section 38 — "Chapter cheat sheet: the whole chapter on one card"
 * Canvas 1080×620 · safe x36–1044, y30–596. Final section of the chapter. 10 beats.
 *
 * Beats (en [0,11.26,22.19,40.79,57,75.18,97.28,119.98,136.45,161.28]):
 *  0 anchor: nine ideas, one per theme
 *  1-4 row A: octet / formal charge / dipole moment / VSEPR (4 compact cards)
 *  5 row B: shapes-by-(bonds,LP) mini table, 6 columns
 *  6-8 row C: MOT / H-bond / refinements (3 cards)
 *  9 row D: mnemonics roundup, 5 lines
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch04Sec38({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const rowA = [
    { n: 1, x: 70, title: "1. OCTET RULE", l1: t("8 e⁻ (2 for H); fails:", "8 e⁻ (H ko 2); fails:"), l2: t("e⁻-deficient, expanded, odd-e⁻", "e⁻-deficient, expanded, odd-e⁻") },
    { n: 2, x: 310, title: t("2. FORMAL CHARGE", "2. FORMAL CHARGE"), l1: t("best: FC→0, neg on most EN;", "best: FC→0, neg most EN par;"), l2: "BO↑→H↑, length↓" },
    { n: 3, x: 550, title: t("3. DIPOLE MOMENT", "3. DIPOLE MOMENT"), l1: t("vector sum of bond dipoles;", "bond dipoles ka vector sum;"), l2: "Fajans: SHaPe→covalent" },
    { n: 4, x: 790, title: "4. VSEPR", l1: "LP-LP>LP-BP>BP-BP;", l2: t("SN→hybrid+geometry", "SN→hybrid+geometry") },
  ];
  const shapes = [
    { bl: "3b+1LP", name: t("pyramidal", "pyramidal") },
    { bl: "2b+2LP", name: t("bent", "bent") },
    { bl: "4b+1LP", name: t("see-saw", "see-saw") },
    { bl: "3b+2LP", name: t("T-shaped", "T-shaped") },
    { bl: "2b+3LP", name: t("linear", "linear") },
    { bl: "4b+2LP", name: t("sq. planar", "sq. planar") },
  ];
  const shapeX = [90, 255, 420, 585, 750, 915];
  const rowC = [
    { n: 6, x: 40, title: "6. MOT", l1: t("BO=½(bond−antibond); O₂ paramagnetic", "BO=½(bond−antibond); O₂ paramagnetic"), l2: "N₂=3, O₂=2, F₂=1, NO=2.5, NO⁺=3" },
    { n: 7, x: 380, title: t("7. H-BOND", "7. H-BOND"), l1: t("donors: F,O,N–H only;", "donors: sirf F,O,N–H;"), l2: t("inter ↑bp/solubility, intra ↓", "inter ↑bp/solubility, intra ↓") },
    { n: 8, x: 720, title: t("8. REFINEMENTS", "8. REFINEMENTS"), l1: t("coordinate (donor LP→acceptor);", "coordinate (donor LP→acceptor);"), l2: t("Bent's(NH₃>NF₃); Drago's(→90°); B₂H₆ 3c-2e", "Bent's(NH₃>NF₃); Drago's(→90°); B₂H₆ 3c-2e") },
  ];
  const mnemonics = [
    t("hybridisation series: Some People Sit Properly During Prayer", "hybridisation series: Some People Sit Properly During Prayer"),
    t("H-bond donors: F-O-N", "H-bond donors: F-O-N"),
    t("Fajans' covalent factors: SHaPe", "Fajans' covalent factors: SHaPe"),
    t("Bent's rule: bent eNegative gets P", "Bent's rule: bent eNegative gets P"),
    t("Drago's rule: Drago down to 90", "Drago's rule: Drago down to 90"),
  ];

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={58} size={19} fill={RED} script>
          {t("Chapter cheat sheet", "Chapter cheat sheet")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 3.4)} d="M 430 80 C 480 76, 600 76, 650 80" stroke={RED} sw={2.2} dur={0.6} />

      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={93} size={10.5} fill={MUTED} script>
          {t("nine ideas, one per theme, in order", "nau ideas, har theme ke liye ek, order mein")}
        </T>
      </Fade>

      {/* row A — beats 1-4 */}
      {rowA.map((c) => (
        <React.Fragment key={c.n}>
          <Draw on={beat >= c.n} delay={dl(c.n, 0.1)} d={`M ${c.x} 105 h 220 v 65 h -220 z`} stroke={INK} sw={1.4} dur={0.35} />
          <Fade on={beat >= c.n} delay={dl(c.n, 0.35)}>
            <T x={c.x + 110} y={122} size={10} weight={800} fill={AMBER_DARK}>
              {c.title}
            </T>
            <T x={c.x + 110} y={140} size={8.7} fill={INK}>
              {c.l1}
            </T>
            <T x={c.x + 110} y={155} size={8.7} fill={INK}>
              {c.l2}
            </T>
          </Fade>
        </React.Fragment>
      ))}

      {/* row B — beat 5, shapes table */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={188} size={11} weight={800} fill={AMBER_DARK}>
          {t("5. SHAPES (by bonds + lone pairs)", "5. SHAPES (bonds + lone pairs)")}
        </T>
      </Fade>
      {shapes.map((s, i) => (
        <Fade key={i} on={beat >= 5} delay={dl(5, 0.5 + i * 0.15)}>
          <T x={shapeX[i]} y={210} size={10} weight={700} fill={INK}>
            {s.bl}
          </T>
          <T x={shapeX[i]} y={228} size={9.5} fill={GREEN}>
            {s.name}
          </T>
        </Fade>
      ))}

      {/* row C — beats 6-8 */}
      {rowC.map((c) => (
        <React.Fragment key={c.n}>
          <Draw on={beat >= c.n} delay={dl(c.n, 0.1)} d={`M ${c.x} 255 h 320 v 68 h -320 z`} stroke={INK} sw={1.4} dur={0.35} />
          <Fade on={beat >= c.n} delay={dl(c.n, 0.35)}>
            <T x={c.x + 160} y={274} size={10.5} weight={800} fill={AMBER_DARK}>
              {c.title}
            </T>
            <T x={c.x + 160} y={293} size={8.7} fill={INK}>
              {c.l1}
            </T>
            <T x={c.x + 160} y={309} size={8.7} fill={INK}>
              {c.l2}
            </T>
          </Fade>
        </React.Fragment>
      ))}

      {/* row D — beat 9, mnemonics roundup */}
      <Fade on={beat >= 9} delay={dl(9, 0.2)}>
        <T x={540} y={350} size={11} weight={800} fill={RED}>
          {t("9. MNEMONICS ROUNDUP", "9. MNEMONICS ROUNDUP")}
        </T>
      </Fade>
      {mnemonics.map((m, i) => (
        <Fade key={i} on={beat >= 9} delay={dl(9, 0.5 + i * 0.35)}>
          <T x={540} y={370 + i * 18} size={10.5} fill={INK}>
            {m}
          </T>
        </Fade>
      ))}
    </Scene>
  );
}
