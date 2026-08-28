/**
 * Ch14 · Section 30 — "Board derivation: the two Doppler cases"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 4.47, 13.41, 28.61, 47.08, 55.72, 72.41, 87.91]):
 *  0 hook badge: derive both — see WHY they differ
 *  1 CASE A setup: source moves toward stationary observer (f, T=1/f, v)
 *  2 key event: source advances vs·T in time T → λ squeezed
 *  3 compute A: f' = f·v/(v−vs) — rises
 *  4 CASE B setup: observer moves toward stationary source (λ=v/f unchanged)
 *  5 observer sweeps at v+vo → f' = f·(v+vo)/v — rises
 *  6 compare at same u: A ≠ B, A slightly larger
 *  7 general formula: f' = f·(v+vo)/(v−vs) — sign logic, not 4 formulas
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | badge chip (13)               | Chip  | x90..470  y100..132
 *  b0 | underline                     | Draw  | x100..450 y138
 *  b1 | CASE A header (14)            | T st  | x60 bl290             y278..293
 *  b1 | CASE A sub (12)               | T st  | x60 bl312             y300..314
 *  b2 | key event A (12)              | T st  | x60 bl340             y328..341
 *  b3 | chip A (h40,s16)              | Chip  | x60..380  y360..400
 *  b4 | CASE B header (14)            | T st  | x560 bl290            y278..293
 *  b4 | CASE B sub (12)               | T st  | x560 bl312            y300..314
 *  b5 | key event B (12)              | T st  | x560 bl340            y328..341
 *  b5 | chip B (h40,s16)              | Chip  | x560..880 y360..400
 *  b6 | compare (13)                  | T mid | x540 bl500            y488..502
 *  b7 | final chip (h50,s17)          | Chip  | x250..830 y525..575
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch14Sec30({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={68} size={24} fill={RED} script>
          {t("deriving the two Doppler cases", "dono Doppler cases derive karna")}
        </T>
      </Fade>

      {/* beat 0 — hook */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <Chip x={90} y={100} w={380} h={32} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={13}>
          {t("★ derive both — see WHY they differ!", "★ dono derive karo — dekho WHY alag hain!")}
        </Chip>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.9)} d="M 100 138 L 450 138" stroke={AMBER_DARK} sw={1.8} dur={0.3} />

      {/* beat 1 — Case A setup */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={60} y={290} size={14} fill={INK} weight={700} anchor="start">
          {t("CASE A: source → observer", "CASE A: source → observer")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={60} y={312} size={12} fill={INK} anchor="start">
          f, T=1/f, sound speed=v
        </T>
      </Fade>

      {/* beat 2 — the key event */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={60} y={340} size={12} fill={AMBER_DARK} anchor="start">
          {t("source advances vs·T in time T → λ squeezed!", "source vs·T aage badhta T time mein → λ squeeze!")}
        </T>
      </Fade>

      {/* beat 3 — compute Case A */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <Chip x={60} y={360} w={320} h={40} fill={GREEN} textFill="#fff" size={16} script={false}>
          f' = f·v/(v−vs) ↑
        </Chip>
      </Fade>

      {/* beat 4 — Case B setup */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={560} y={290} size={14} fill={INK} weight={700} anchor="start">
          {t("CASE B: observer → source", "CASE B: observer → source")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.9)}>
        <T x={560} y={312} size={12} fill={INK} anchor="start">
          {t("λ=v/f unchanged", "λ=v/f unchanged")}
        </T>
      </Fade>

      {/* beat 5 — observer sweeps, compute Case B */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={560} y={340} size={12} fill={AMBER_DARK} anchor="start">
          {t("observer sweeps into waves at v+vo", "observer waves mein v+vo se ghusta")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.1)}>
        <Chip x={560} y={360} w={320} h={40} fill={GREEN} textFill="#fff" size={16} script={false}>
          f' = f·(v+vo)/v ↑
        </Chip>
      </Fade>

      {/* beat 6 — compare at the same speed */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={500} size={13} fill={INK} script>
          {t(
            "same u: A=f·v/(v−u) ≠ B=f·(v+u)/v — A is slightly larger!",
            "same u pe: A=f·v/(v−u) ≠ B=f·(v+u)/v — A thoda zyada!"
          )}
        </T>
      </Fade>

      {/* beat 7 — the general formula */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <Chip x={250} y={525} w={580} h={50} fill={GREEN} textFill="#fff" size={17} script={false}>
          {t(
            "f' = f·(v+vo)/(v−vs) — learn the SIGN LOGIC, not 4 formulas!",
            "f' = f·(v+vo)/(v−vs) — SIGN LOGIC seekho, 4 formulas nahi!"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
