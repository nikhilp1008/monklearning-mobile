/**
 * C11 Chemistry Ch04 · Section 23 — "Building an MO diagram, and the second-period pattern"
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 13.74, 23.38, 39.59, 55.55, 80.38, 95.49, 119.72]):
 *  0 anchor: five-step recipe
 *  1 step1: count electrons card
 *  2 step2: choose ordering card
 *  3 step3: fill (Aufbau/Pauli/Hund's) card
 *  4 steps4-5: BO+magnetism card, N2 worked
 *  5 H2, He2 pattern
 *  6 Li2, Be2, B2 pattern
 *  7 closing: MOT explains what VBT can't, chip
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, MUTED, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch04Sec23({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const cards = [
    { n: 1, x: 70, l0: t("1. COUNT e⁻", "1. COUNT e⁻"), l1: t("total electrons", "total electrons"), l2: t("(± charge)", "(± charge)") },
    { n: 2, x: 310, l0: t("2. CHOOSE ordering", "2. CHOOSE ordering"), l1: t("≤N₂ vs >N₂ (O,F)", "≤N₂ vs >N₂ (O,F)"), l2: t("decides last-filled", "decides last-filled") },
    { n: 3, x: 550, l0: "3. FILL", l1: t("Aufbau · Pauli", "Aufbau · Pauli"), l2: t("· Hund's (singly first)", "· Hund's (pehle singly)") },
    { n: 4, x: 790, l0: t("4-5. BO + MAGNETISM", "4-5. BO + MAGNETISM"), l1: "BO=½(N_b−N_a)", l2: t("N₂: 14e⁻→BO=3, dia", "N₂: 14e⁻→BO=3, dia") },
  ];

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={58} size={19} fill={RED} script>
          {t("Building an MO diagram", "MO diagram banana")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 3.4)} d="M 420 80 C 470 76, 610 76, 660 80" stroke={RED} sw={2.2} dur={0.6} />

      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={95} size={12} fill={MUTED} script>
          {t("five steps: fill the orbitals, then count", "paanch steps: orbitals bharo, phir gino")}
        </T>
      </Fade>

      {/* beats 1-4 — step cards */}
      {cards.map((c) => (
        <React.Fragment key={c.n}>
          <Draw on={beat >= c.n} delay={dl(c.n, 0.1)} d={`M ${c.x} 110 h 220 v 65 h -220 z`} stroke={INK} sw={1.6} dur={0.4} />
          <Fade on={beat >= c.n} delay={dl(c.n, 0.4)}>
            <T x={c.x + 110} y={131} size={11.5} weight={800} fill={AMBER_DARK}>
              {c.l0}
            </T>
            <T x={c.x + 110} y={152} size={11} fill={INK}>
              {c.l1}
            </T>
            <T x={c.x + 110} y={167} size={9.5} fill={MUTED}>
              {c.l2}
            </T>
          </Fade>
        </React.Fragment>
      ))}

      {/* beat 5 — H2, He2 */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={150} y={215} size={14} weight={700} fill={INK}>
          H₂
        </T>
        <T x={150} y={237} size={11} fill={GREEN}>
          BO=1
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={370} y={215} size={14} weight={700} fill={INK}>
          He₂
        </T>
        <T x={370} y={237} size={10.5} weight={700} fill={RED}>
          {t("BO=0 → doesn't exist!", "BO=0 → exist nahi karta!")}
        </T>
      </Fade>

      {/* beat 6 — Li2, Be2, B2 */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={580} y={215} size={14} weight={700} fill={INK}>
          Li₂
        </T>
        <T x={580} y={237} size={11} fill={GREEN}>
          BO=1
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <T x={730} y={215} size={14} weight={700} fill={INK}>
          Be₂
        </T>
        <T x={730} y={237} size={11} fill={MUTED}>
          BO=0
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.9)}>
        <T x={910} y={215} size={14} weight={700} fill={INK}>
          B₂
        </T>
        <T x={910} y={237} size={10} weight={700} fill={RED}>
          {t("BO=1, PARAMAGNETIC", "BO=1, PARAMAGNETIC")}
        </T>
      </Fade>

      {/* beat 7 — closing */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={540} y={268} size={11} fill={INK}>
          {t(
            "MOT explains what VBT can't: O₂, B₂ paramagnetism · He₂ non-existence · NO (odd e⁻)",
            "MOT wo explain karta jo VBT nahi kar sakti: O₂, B₂ paramagnetism · He₂ non-existence · NO (odd e⁻)"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.7)}>
        <Chip x={310} y={288} w={460} h={28} fill={GREEN} textFill="#fff" size={12.5} script={false}>
          {t("one recipe: fill the orbitals, then count", "ek hi recipe: orbitals bharo, phir gino")}
        </Chip>
      </Fade>
    </Scene>
  );
}
