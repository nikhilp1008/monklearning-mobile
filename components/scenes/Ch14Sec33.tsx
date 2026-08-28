/**
 * Ch14 · Section 33 — "Worked example: source-moving vs observer-moving"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 27.54, 32.96, 37.97, 48.4, 63.0, 79.28, 91.38]):
 *  0 hook badge + question: f=300Hz, v=330, both cases speed=30 → equal?
 *  1 same speed both sides — but mechanisms differ
 *  2 does WHO moves change the answer?
 *  3 TRAP: 'same speed → same f'... NO, sound Doppler is asymmetric
 *  4 Case 1 (source moving): f' = 300×330/300 = 330 Hz
 *  5 Case 2 (observer moving): f' = 300×360/330 = 327.3 Hz
 *  6 why: source compresses air's λ; observer changes meeting-rate
 *  7 verdict: NOT equal — source-moving always beats observer-moving
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | badge chip (13)               | Chip  | x90..350  y100..132
 *  b0 | question chip (h34)           | Chip  | x370..1020 y100..134
 *  b1 | note (12.5)                   | T mid | x540 bl155            y143..158
 *  b2 | note (12)                     | T mid | x540 bl180            y169..182
 *  b3 | trap chip (h40)               | Chip  | x200..880 y285..325
 *  b4 | Case 1 text (14)              | T st  | x60 bl365             y352..369
 *  b5 | Case 2 text (14)              | T st  | x560 bl365            y352..369
 *  b6 | why (12.5)                    | T mid | x540 bl405            y393..406
 *  b7 | verdict text (13)             | T mid | x540 bl500            y487..501
 *  b7 | final chip (h50,s18)          | Chip  | x350..730 y525..575
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, T, Chip, INK, MUTED, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch14Sec33({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={68} size={20} fill={RED} script>
          {t("worked example: source-moving vs observer-moving", "worked example: source-moving vs observer-moving")}
        </T>
      </Fade>

      {/* beat 0 — hook + question */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <Chip x={90} y={100} w={260} h={32} fill="#fff" stroke={MUTED} textFill={INK} size={13}>
          {t("★ built on THAT asymmetry!", "★ usi asymmetry pe bana hai!")}
        </Chip>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 1.0)}>
        <Chip x={370} y={100} w={650} h={34} fill="#fff" stroke={INK} textFill={INK} size={12.5} script={false}>
          {t(
            "f=300Hz, v=330m/s, both cases speed=30m/s → equal freqs?",
            "f=300Hz, v=330m/s, dono cases speed=30m/s → equal freqs?"
          )}
        </Chip>
      </Fade>

      {/* beat 1 — same speed, different mechanisms */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={155} size={12.5} fill={MUTED} script>
          {t("same speed both sides — but MECHANISMS differ!", "dono taraf same speed — par MECHANISMS alag!")}
        </T>
      </Fade>

      {/* beat 2 — the real question */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={180} size={12} fill={MUTED}>
          {t("does WHO moves change the answer?", "kaun move karta hai, kya isse answer badalta?")}
        </T>
      </Fade>

      {/* beat 3 — the trap */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <Chip x={200} y={285} w={680} h={40} fill="#fff" stroke={RED} textFill={RED} size={14} script={false}>
          {t(
            "TRAP: 'same speed → same f'... NO! sound Doppler is ASYMMETRIC!",
            "TRAP: 'same speed → same f'... NAHI! sound Doppler ASYMMETRIC!"
          )}
        </Chip>
      </Fade>

      {/* beat 4 — Case 1: source moving */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={60} y={365} size={14} fill={INK} anchor="start">
          {t("Case 1 (source): f'=300×330/300=330 Hz", "Case 1 (source): f'=300×330/300=330 Hz")}
        </T>
      </Fade>

      {/* beat 5 — Case 2: observer moving */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={560} y={365} size={14} fill={INK} anchor="start">
          {t("Case 2 (observer): f'=300×360/330=327.3 Hz", "Case 2 (observer): f'=300×360/330=327.3 Hz")}
        </T>
      </Fade>

      {/* beat 6 — why they differ */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={405} size={12.5} fill={INK} script>
          {t(
            "source compresses air's λ; observer just changes meeting-rate",
            "source air ka λ compress karta; observer sirf meeting-rate badalta"
          )}
        </T>
      </Fade>

      {/* beat 7 — the verdict */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={540} y={500} size={13} fill={GREEN} script>
          {t(
            "NOT equal! source-moving ALWAYS beats observer-moving",
            "EQUAL NAHI! source-moving HAMESHA observer-moving se zyada"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.1)}>
        <Chip x={350} y={525} w={380} h={50} fill={GREEN} textFill="#fff" size={18} script={false}>
          330 Hz ≠ 327.3 Hz
        </Chip>
      </Fade>
    </Scene>
  );
}
