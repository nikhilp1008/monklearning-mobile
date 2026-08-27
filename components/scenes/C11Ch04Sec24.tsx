/**
 * C11 Chemistry Ch04 · Section 24 — "Ionisation that strengthens a bond, and two kinds of hydrogen bond"
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 9.56, 24.49, 45.65, 64.0, 80.21, 101.8, 126.63]):
 *  0 anchor: removing e- can strengthen a bond
 *  1 logic: pull from antibonding -> Na down -> BO up
 *  2 NO (BO 2.5) vs NO+ (BO 3, stronger/shorter)
 *  3 H-bond classification check: donor then acceptor
 *  4 intermolecular panel
 *  5 intramolecular panel
 *  6 consequences: water bp, ice floats
 *  7 biology + closing chip
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, MUTED, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch04Sec24({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={58} size={19} fill={RED} script>
          {t("Ionisation that strengthens a bond", "Ionisation jo bond ko strong karta")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 3.4)} d="M 400 80 C 460 76, 620 76, 680 80" stroke={RED} sw={2.2} dur={0.6} />

      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={95} size={12} fill={MUTED} script>
          {t("removing an electron doesn't always weaken a bond", "electron hataana hamesha bond weak nahi karta")}
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={119} size={12} weight={700} fill={INK}>
          {t("pull e⁻ from ANTIBONDING → N_a↓ → BO↑ (bond strengthens!)", "e⁻ ANTIBONDING se khींcho → N_a↓ → BO↑ (bond strong hota!)")}
        </T>
      </Fade>

      {/* beat 2 */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={540} y={144} size={12.5} fill={INK}>
          NO: BO = 2.5
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={540} y={167} size={12.5} weight={700} fill={GREEN}>
          {t("NO⁺: BO = 3 — stronger, shorter (lost e⁻ was π*)", "NO⁺: BO = 3 — stronger, shorter (khoya e⁻ π* tha)")}
        </T>
      </Fade>

      {/* beat 3 — H-bond classification check */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={195} size={11.5} fill={INK}>
          {t(
            "H-bond check: (1) donor — is H bonded to F/O/N? (2) acceptor — nearby F/O/N lone pair?",
            "H-bond check: (1) donor — kya H, F/O/N se bonded? (2) acceptor — paas F/O/N lone pair?"
          )}
        </T>
      </Fade>

      {/* beat 4 — intermolecular panel */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={270} y={225} size={13} weight={800} fill={GREEN}>
          {t("INTERMOLECULAR", "INTERMOLECULAR")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <T x={270} y={247} size={10.5} fill={INK}>
          {t("different molecules", "alag molecules")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={270} y={267} size={10.5} weight={700} fill={GREEN}>
          {t("↑ bp, mp, viscosity, solubility", "↑ bp, mp, viscosity, solubility")}
        </T>
      </Fade>

      {/* beat 5 — intramolecular panel */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={810} y={225} size={13} weight={800} fill={RED}>
          {t("INTRAMOLECULAR", "INTRAMOLECULAR")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={810} y={247} size={10.5} fill={INK}>
          {t("same molecule (e.g. ortho)", "same molecule (jaise ortho)")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={810} y={267} size={10.5} weight={700} fill={RED}>
          {t("↓ bp, solubility (vs isomer)", "↓ bp, solubility (isomer ke muqable)")}
        </T>
      </Fade>

      {/* beat 6 — consequences */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={302} size={11.5} fill={INK}>
          {t(
            "water's high bp: extended H-bond network must break to vaporise",
            "water ka high bp: vaporise karne ke liye H-bond network todna padta"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={540} y={324} size={11.5} fill={INK}>
          {t("ice: open hexagonal cage → LESS dense → floats", "ice: open hexagonal cage → LESS dense → tairta")}
        </T>
      </Fade>

      {/* beat 7 — biology + closing */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={540} y={352} size={11.5} fill={INK}>
          {t("same weak bond: DNA base pairing, protein folding", "yahi weak bond: DNA base pairing, protein folding")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.7)}>
        <Chip x={230} y={370} w={620} h={28} fill={GREEN} textFill="#fff" size={12} script={false}>
          {t(
            "one flimsy bond, multiplied — some of chemistry's biggest anomalies",
            "ek flimsy bond, multiply hoke — chemistry ki sabse badi anomalies"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
