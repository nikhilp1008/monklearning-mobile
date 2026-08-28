/**
 * Ch14 · Section 38 — "Cheat sheet: Waves quick recall" (final section)
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 7.09, 15.0, 23.18, 31.09, 38.46, 45.27, 50.46]):
 *  0 intro: memory aids for the exam hall — recover a method in a heartbeat
 *  1 string speed: tight & light goes fast (A, f never touch it)
 *  2 master relation: source sets f, medium sets v
 *  3 beats: plain difference, no halving
 *  4 forks: wax weighs it down, filing files it up
 *  5 pipes: closed=odd only, open=all
 *  6 resonance tube: subtract → e vanishes
 *  7 Doppler + closing: toward↑ away↓, red runs away — carry these 8 lines!
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | caption (13,muted)            | T mid | x540 bl110            y97..117
 *  b1 | string-speed chip (h36)       | Chip  | x60..480 y285..321
 *  b2 | master-relation chip (h36)    | Chip  | x60..480 y335..371
 *  b3 | beats chip (h36)              | Chip  | x60..480 y385..421
 *  b4 | forks chip (h36)              | Chip  | x560..1020 y285..321
 *  b5 | pipes chip (h36)              | Chip  | x560..1020 y335..371
 *  b6 | resonance-tube chip (h36)     | Chip  | x560..1020 y385..421
 *  b7 | Doppler chip (h44,s15)        | Chip  | x200..880 y460..504
 *  b7 | closing (13,green)            | T mid | x540 bl545            y532..549
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, T, Chip, INK, MUTED, AMBER, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch14Sec38({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={68} size={27} fill={RED} script>
          {t("cheat sheet: Waves quick recall", "cheat sheet: Waves quick recall")}
        </T>
      </Fade>

      {/* beat 0 — intro */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={110} size={13} fill={MUTED} script>
          {t(
            "memory aids for the exam hall — recover a method in a heartbeat!",
            "memory aids exam hall ke liye — ek pal mein method vapas!"
          )}
        </T>
      </Fade>

      {/* beat 1 — string speed */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <Chip x={60} y={285} w={420} h={36} fill="#fff" stroke={AMBER} textFill={INK} size={13} script={false}>
          {t("STRING SPEED: tight & light goes fast!", "STRING SPEED: tight & light fast jaata!")}
        </Chip>
      </Fade>

      {/* beat 2 — master relation */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <Chip x={60} y={335} w={420} h={36} fill="#fff" stroke={AMBER} textFill={INK} size={13} script={false}>
          {t("MASTER RELATION: source sets f, medium sets v!", "MASTER RELATION: source f tay karta, medium v!")}
        </Chip>
      </Fade>

      {/* beat 3 — beats */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <Chip x={60} y={385} w={420} h={36} fill="#fff" stroke={AMBER} textFill={INK} size={13} script={false}>
          {t("BEATS: plain difference, no halving!", "BEATS: plain difference, koi halving nahi!")}
        </Chip>
      </Fade>

      {/* beat 4 — tuning forks */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <Chip x={560} y={285} w={460} h={36} fill="#fff" stroke={AMBER} textFill={INK} size={13} script={false}>
          {t("FORKS: wax weighs DOWN; filing files UP!", "FORKS: wax neeche le jaata; filing upar!")}
        </Chip>
      </Fade>

      {/* beat 5 — pipes */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Chip x={560} y={335} w={460} h={36} fill="#fff" stroke={AMBER} textFill={INK} size={13} script={false}>
          {t("PIPES: closed=ODD only, open=ALL!", "PIPES: closed=sirf ODD, open=SAARE!")}
        </Chip>
      </Fade>

      {/* beat 6 — resonance tube */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Chip x={560} y={385} w={460} h={36} fill="#fff" stroke={AMBER} textFill={INK} size={13} script={false}>
          {t("RESONANCE TUBE: subtract → e vanishes!", "RESONANCE TUBE: subtract → e gayab!")}
        </Chip>
      </Fade>

      {/* beat 7 — Doppler + the grand closing */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Chip x={200} y={460} w={680} h={44} fill="#fff" stroke={RED} textFill={RED} size={15} script={false}>
          {t(
            "DOPPLER: toward↑ away↓; vs below, vo above; RED RUNS AWAY!",
            "DOPPLER: toward↑ away↓; vs neeche, vo upar; RED BHAAGTA HAI!"
          )}
        </Chip>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.1)}>
        <T x={540} y={545} size={13} fill={GREEN} script>
          {t(
            "carry these 8 lines — the whole chapter comes back on demand!",
            "ye 8 lines rakho — poora chapter demand pe vapas!"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
