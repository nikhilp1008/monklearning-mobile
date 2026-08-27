/**
 * C11 Chemistry Ch05 · Section 29 — "Three derivations: adiabatic work,
 * the bomb, and the solution cycle"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (board_reveal_at, en [0,7,28.16,41.81,46.25,60.84,74.92,79.87]):
 *  0 panel1 heading + underline: adiabatic work
 *  1 chip: q=0 ⇒ ΔU=w=nCvΔT (high emphasis)
 *  2 red note: no heat in ⇒ work from internal energy ⇒ gas cools
 *  3 panel2 heading + underline: bomb-calorimeter measurement
 *  4 text: burn known mass in excess O2, fixed V, heat = ΔU
 *  5 text: find heat capacity first, report ΔH via Δngas·RT
 *  6 panel3 heading + underline: enrichments (Trouton, Kirchhoff)
 *  7 red note: Trouton's rule + Kirchhoff's law
 *
 * Layout plan (centered x540):
 *  b0 | heading1 (17,w800)+underline  | y86..106 (bl100); y108
 *  b1 | chip1 (16)                    | Chip | x370..710 y120..157
 *  b2 | red note1 chip (14)           | Chip | x260..880 y170..205
 *  b3 | heading2+underline            | y231..251 (bl245); y253
 *  b4 | text (14)                     | T mid | y267..282 (bl278)
 *  b5 | text (14)                     | T mid | y292..307 (bl303)
 *  b6 | heading3+underline            | y331..351 (bl345); y353
 *  b7 | red note2 chip (14)           | Chip | x190..890 y365..410
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  INK,
  RED,
  CREAM,
  AMBER_DARK,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch05Sec29({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={26} fill={RED} script>
          {t("three derivations", "three derivations")}
        </T>
      </Fade>

      {/* beat 0 — panel 1 heading */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={100} size={17} weight={800} fill={INK}>
          {t("Adiabatic work", "Adiabatic work")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.5)} d="M 440 108 C 480 105, 600 105, 640 108" stroke={AMBER_DARK} sw={2} dur={0.5} />

      {/* beat 1 — q=0 chip */}
      <Fade on={beat >= 1} delay={dl(1, 0.1)}>
        <Chip x={370} y={120} w={340} h={37} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={16} script={false}>
          q = 0 ⇒ ΔU = w = nCvΔT
        </Chip>
      </Fade>

      {/* beat 2 — red note */}
      <Fade on={beat >= 2} delay={dl(2, 0.15)}>
        <Chip x={260} y={170} w={620} h={35} fill={CREAM} stroke={RED} textFill={RED} size={14} script={false}>
          {t(
            "no heat in ⇒ expansion work spent FROM internal energy ⇒ gas cools",
            "heat andar nahi ⇒ expansion work internal energy SE hota hai ⇒ gas thanda hota hai"
          )}
        </Chip>
      </Fade>

      {/* beat 3 — panel 2 heading */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={540} y={245} size={17} weight={800} fill={INK}>
          {t("Bomb-calorimeter measurement", "Bomb-calorimeter measurement")}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 0.5)} d="M 350 253 C 420 250, 660 250, 730 253" stroke={AMBER_DARK} sw={2} dur={0.5} />

      {/* beat 4 — burn in excess O2 */}
      <Fade on={beat >= 4} delay={dl(4, 0.1)}>
        <T x={540} y={278} size={14} fill={INK}>
          {t(
            "burn known mass in excess O2; fixed V ⇒ measured heat = ΔU",
            "known mass ko excess O2 mein jalao; fixed V ⇒ measured heat = ΔU"
          )}
        </T>
      </Fade>

      {/* beat 5 — calorimeter constant first */}
      <Fade on={beat >= 5} delay={dl(5, 0.1)}>
        <T x={540} y={303} size={14} fill={INK}>
          {t(
            "find calorimeter's heat capacity first — report ΔH via Δngas·RT",
            "pehle calorimeter ki heat capacity nikaalo — ΔH report karo Δngas·RT se"
          )}
        </T>
      </Fade>

      {/* beat 6 — panel 3 heading */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={540} y={345} size={17} weight={800} fill={INK}>
          {t("Enrichments: Trouton and Kirchhoff", "Enrichments: Trouton aur Kirchhoff")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 0.5)} d="M 340 353 C 410 350, 670 350, 740 353" stroke={AMBER_DARK} sw={2} dur={0.5} />

      {/* beat 7 — Trouton + Kirchhoff */}
      <Fade on={beat >= 7} delay={dl(7, 0.15)}>
        <Chip x={190} y={365} w={700} h={45} fill={CREAM} stroke={RED} textFill={RED} size={14} script={false}>
          {t(
            "Trouton: molar ΔvapS ≈ constant · Kirchhoff: ΔrH drifts with T via ΔCp",
            "Trouton: molar ΔvapS ≈ constant · Kirchhoff: ΔrH, T ke saath ΔCp se drift karta hai"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
