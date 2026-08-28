/**
 * Ch13 · Section 55 — "Worked example (JEE Advanced): a pendulum clock in summer"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 8.18, 28.43, 45.96, 62.32, 76.73, 88.03, 96.2]):
 *  0 shelf
 *  1 clock keeps perfect time at 20°C; rod α=1.2×10⁻⁵/K; at 40°C fast or slow, by how much/day?
 *  2 rod lengthens ⇒ T∝√L increases ⇒ each tick longer ⇒ clock runs slow
 *  3 ΔT/T=½αΔθ=½(1.2×10⁻⁵)(20)=1.2×10⁻⁴
 *  4 hero (high): Δt=(ΔT/T)×86400 s ≈ 10.4 s per day
 *  5 hero (high): temp rise lengthens rod ⇒ clock loses time; drop ⇒ gains (warm=slow)
 *  6 precision pendulum clocks use temperature-compensated rods
 *  7 answer: clock runs slow, losing ≈10.4 s per day
 *
 * Layout plan (Anek bl−0.78s..+0.31s), text-only (no diagram event this section):
 *  b0 | shelf y80 x60..1020
 *  b1 | st x70 bl110 size13 · st x70 bl142 size13
 *  b2 | st x70 bl172 size12
 *  b3 | st x70 bl205 size13
 *  b4 | box x70..500 y240..290 rx14 · line cx285 bl270 size16
 *  b5 | box x70..640 y320..375 rx14 · line cx355 bl352 size14
 *  b6 | st x70 bl415 size13
 *  b7 | st x70 bl450 size14
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, GREEN, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch13Sec55({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={52} size={19} fill={INK} script>
          {t("A longer rod means a slower clock", "Lambi rod ka matlab dheemi clock")}
        </T>
      </Fade>

      {/* beat 0 — the shelf */}
      <Draw on={beat >= 0} delay={dl(0, 0.3)} d="M 60 80 L 1020 80" stroke={INK} sw={1.4} dur={0.6} />

      {/* beat 1 — the given data */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={70} y={110} size={13} fill={INK} anchor="start" weight={700}>
          {t(
            "clock keeps perfect time at 20°C; rod has α=1.2×10⁻⁵ per K",
            "clock 20°C par perfect time rakhta hai; rod ka α=1.2×10⁻⁵ per K"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={70} y={142} size={13} fill={INK} anchor="start" weight={700}>
          {t(
            "at 40°C: does it run fast or slow, and by how much per day?",
            "40°C par: fast chalega ya slow, aur kitna per day?"
          )}
        </T>
      </Fade>

      {/* beat 2 — the direction of the error */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={70} y={172} size={12} fill={INK} anchor="start">
          {t(
            "rod lengthens ⇒ T∝√L increases ⇒ each tick longer ⇒ clock runs slow",
            "rod lambi hoti hai ⇒ T∝√L badhta hai ⇒ har tick lambi ⇒ clock slow chalta hai"
          )}
        </T>
      </Fade>

      {/* beat 3 — the fractional change */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={70} y={205} size={13} fill={INK} anchor="start" weight={700}>
          ΔT/T=½αΔθ=½(1.2×10⁻⁵)(20)=1.2×10⁻⁴
        </T>
      </Fade>

      {/* beat 4 — the seconds lost, high emphasis */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <Draw
          on={beat >= 4}
          delay={dl(4, 0.3)}
          d="M 84 240 h 402 q 14 0 14 14 v 22 q 0 14 -14 14 h -402 q -14 0 -14 -14 v -22 q 0 -14 14 -14"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.1)}>
        <T x={285} y={270} size={16} fill={INK} weight={800}>
          Δt=(ΔT/T)×86400 s ≈ 10.4 s per day
        </T>
      </Fade>

      {/* beat 5 — the sign rule, high emphasis */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Draw
          on={beat >= 5}
          delay={dl(5, 0.3)}
          d="M 84 320 h 542 q 14 0 14 14 v 27 q 0 14 -14 14 h -542 q -14 0 -14 -14 v -27 q 0 -14 14 -14"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.1)}>
        <T x={355} y={352} size={14} fill={INK} weight={800}>
          {t(
            "temp rise lengthens rod ⇒ clock loses time; drop ⇒ gains (warm=slow)",
            "temp rise se rod lambi ⇒ clock time khota hai; drop se ⇒ paata hai (warm=slow)"
          )}
        </T>
      </Fade>

      {/* beat 6 — the practical fix */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={70} y={415} size={13} fill={INK} anchor="start" weight={700}>
          {t(
            "precision pendulum clocks use temperature-compensated rods",
            "precision pendulum clocks temperature-compensated rods use karte hain"
          )}
        </T>
      </Fade>

      {/* beat 7 — the answer */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={70} y={450} size={14} fill={INK} anchor="start" weight={800}>
          {t(
            "answer: clock runs slow, losing ≈10.4 s per day",
            "answer: clock slow chalta hai, ≈10.4 s per day khota hua"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
