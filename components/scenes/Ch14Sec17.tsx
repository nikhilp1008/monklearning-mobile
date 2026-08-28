/**
 * Ch14 · Section 17 — "Worked example: a one-newton tension nudge"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 8.84, 15.99, 18.82, 24.84, 30.48, 37.82, 42.52]):
 *  0 hook badge + setup: 2 wires, 100N each, 400Hz unison, +1N one wire
 *  1 the picture: both start in unison (0 beats), one wire nudged +1N
 *  2 the real question: how much does +1N shift f?
 *  3 f = 1/(2L)√(T/μ) → f ∝ √T (only T changes)
 *  4 small-change calculus: Δf/f = ½(ΔT/T)
 *  5 plug in: Δf = ½×(1/100)×400 = 2 Hz
 *  6 result: 402 Hz vs 400 Hz → beat = 2/sec
 *  7 sanity: 1% ΔT → only 0.5% Δf — small nudge, small beat
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | badge chip (13)               | Chip  | x90..350  y100..132
 *  b0 | setup chip (h34)              | Chip  | x370..1020 y110..144
 *  b1 | wire 1 + pegs                 | Draw  | x150..330 y170
 *  b1 | "400 Hz" (13)                 | T mid | x240 bl195            y182..196
 *  b1 | wire 2 + pegs                 | Draw  | x420..600 y170
 *  b1 | "400 Hz" (13)                 | T mid | x510 bl195            y182..196
 *  b1 | nudge arrow + "+1 N" (12,red) | Draw+T| x510 y230..175
 *  b1 | caption (12,muted)            | T mid | x340 bl225            y213..227
 *  b2 | question (15)                 | T st  | x60 bl290             y278..295
 *  b3 | "f=1/(2L)√(T/μ)→f∝√T" (15)    | T st  | x60 bl325             y313..330
 *  b4 | "Δf/f=½·(ΔT/T)" (16)          | T st  | x60 bl360             y347..365
 *  b5 | "Δf=½×(1/100)×400=2Hz" (15)   | T st  | x60 bl395             y383..400
 *  b6 | result chip (h44,s18)         | Chip  | x60..400  y415..459
 *  b7 | sanity (13,green)             | T mid | x540 bl510            y497..514
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD, INK, MUTED, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch14Sec17({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={68} size={24} fill={RED} script>
          {t("worked example: a one-newton tension nudge", "worked example: ek-newton tension nudge")}
        </T>
      </Fade>

      {/* beat 0 — hook + setup */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <Chip x={90} y={100} w={260} h={32} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={13}>
          {t("★ JEE Advanced: small changes", "★ JEE Advanced: chhote changes")}
        </Chip>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 1.0)}>
        <Chip x={370} y={110} w={650} h={34} fill="#fff" stroke={INK} textFill={INK} size={13} script={false}>
          {t(
            "2 wires, 100N each, 400Hz unison → +1N one wire → beats?",
            "2 wires, 100N each, 400Hz unison → +1N ek wire → beats?"
          )}
        </Chip>
      </Fade>

      {/* beat 1 — the picture */}
      <Draw on={beat >= 1} delay={dl(1, 0.2)} d="M 150 155 L 150 185 M 330 155 L 330 185 M 150 170 L 330 170" stroke={INK} sw={2.4} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 1.0)}>
        <T x={240} y={195} size={13} fill={INK}>
          400 Hz
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.4)} d="M 420 155 L 420 185 M 600 155 L 600 185 M 420 170 L 600 170" stroke={INK} sw={2.4} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 2.2)}>
        <T x={510} y={195} size={13} fill={INK}>
          400 Hz
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.7)}>
        <T x={340} y={225} size={12} fill={MUTED} script>
          {t("both start in unison — 0 beats", "dono unison mein — 0 beats")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 3.4)} d={arrowD(510, 230, 510, 175)} stroke={RED} sw={2.2} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 3.9)}>
        <T x={528} y={230} size={12} fill={RED} anchor="start">
          +1 N
        </T>
      </Fade>

      {/* beat 2 — the real question */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={60} y={290} size={15} fill={INK} anchor="start">
          {t("real question: how much does +1N shift f?", "asli sawaal: +1N se f kitna shift hota?")}
        </T>
      </Fade>

      {/* beat 3 — f proportional to root T */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={60} y={325} size={15} fill={INK} anchor="start">
          f = 1/(2L)·√(T/μ) → f ∝ √T
        </T>
      </Fade>

      {/* beat 4 — the differential */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={60} y={360} size={16} fill={INK} anchor="start">
          Δf/f = ½ · (ΔT/T)
        </T>
      </Fade>

      {/* beat 5 — plug in */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={60} y={395} size={15} fill={INK} anchor="start">
          Δf = ½ × (1/100) × 400 = 2 Hz
        </T>
      </Fade>

      {/* beat 6 — the result */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <Chip x={60} y={415} w={340} h={44} fill={GREEN} textFill="#fff" size={18} script={false}>
          402 Hz vs 400 Hz → beat = 2/sec
        </Chip>
      </Fade>

      {/* beat 7 — the sanity check */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={540} y={510} size={13} fill={GREEN} script>
          {t(
            "1% ΔT → only 0.5% Δf — small nudge, small beat!",
            "1% ΔT → sirf 0.5% Δf — chhota nudge, chhota beat!"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
