/**
 * Ch14 · Section 21 — "Board derivation: standing wave and string harmonics"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 3.61, 9.9, 13.83, 22.31, 29.69, 33.62, 41.16]):
 *  0 hook badge: two halves — standing wave, then harmonics
 *  1 y1 = a sin(ωt−kx) [+x], y2 = a sin(ωt+kx) [−x reflection]
 *  2 sum: y1+y2 = 2a·sin(kx)·cos(ωt)
 *  3 readout: space & time separate — amplitude fixed by position, it STANDS
 *  4 nodes: sin(kx)=0 → x=nλ/2 · antinodes: max → x=(2n+1)λ/4
 *  5 2nd half: only a whole number of half-loops fits in L
 *  6 boundary: node at x=0 and x=L → sin(kL)=0 → L=n·λ/2
 *  7 verdict: f_n=nv/2L → sonometer master formula
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | badge chip (13)               | Chip  | x90..430  y100..132
 *  b0 | underline                     | Draw  | x100..410 y138
 *  b1 | "y1=a sin(ωt−kx) [+x]" (15)   | T st  | x60 bl290             y278..295
 *  b1 | "y2=a sin(ωt+kx) [−x]" (15)   | T st  | x60 bl315             y303..320
 *  b2 | sum chip (h40,s16)            | Chip  | x200..600 y335..375
 *  b3 | readout (13)                  | T st  | x60 bl400             y388..403
 *  b4 | nodes (13)                    | T st  | x60 bl430             y418..433
 *  b4 | antinodes (13)                | T st  | x560 bl430            y418..433
 *  b5 | 2nd-half (13)                 | T mid | x540 bl500            y487..502
 *  b6 | boundary (13)                 | T mid | x540 bl525            y512..527
 *  b7 | verdict chip (h44,s17)        | Chip  | x300..780 y545..589
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, AMBER, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch14Sec21({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={68} size={24} fill={RED} script>
          {t("deriving the standing wave & harmonics", "standing wave & harmonics derive karna")}
        </T>
      </Fade>

      {/* beat 0 — hook */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <Chip x={90} y={100} w={340} h={32} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={13}>
          {t("★ 2 halves: standing wave, then harmonics (3-5 marks)", "★ 2 halves: standing wave, phir harmonics (3-5 marks)")}
        </Chip>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.9)} d="M 100 138 L 410 138" stroke={AMBER_DARK} sw={1.8} dur={0.3} />

      {/* beat 1 — the two waves */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={60} y={290} size={15} fill={INK} anchor="start">
          {t("y₁ = a sin(ωt−kx)  [+x wave]", "y₁ = a sin(ωt−kx)  [+x]")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.0)}>
        <T x={60} y={315} size={15} fill={INK} anchor="start">
          {t("y₂ = a sin(ωt+kx)  [−x reflection]", "y₂ = a sin(ωt+kx)  [−x, reflect]")}
        </T>
      </Fade>

      {/* beat 2 — the sum */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <Chip x={200} y={335} w={400} h={40} fill="#fff" stroke={AMBER} textFill={INK} size={16} script={false}>
          y₁+y₂ = 2a·sin(kx)·cos(ωt)
        </Chip>
      </Fade>

      {/* beat 3 — the physics readout */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={60} y={400} size={13} fill={INK} anchor="start">
          {t(
            "space & time SEPARATE: cos(ωt) in time, 2a·sin(kx) fixed by position → STANDS!",
            "space & time ALAG: cos(ωt) time mein, 2a·sin(kx) position se fixed → STANDS!"
          )}
        </T>
      </Fade>

      {/* beat 4 — nodes and antinodes */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={60} y={430} size={13} fill={RED} anchor="start">
          {t("nodes: sin(kx)=0 → x=nλ/2", "nodes: sin(kx)=0 → x=nλ/2")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.0)}>
        <T x={560} y={430} size={13} fill={GREEN} anchor="start">
          {t("antinodes: max → x=(2n+1)λ/4", "antinodes: max → x=(2n+1)λ/4")}
        </T>
      </Fade>

      {/* beat 5 — the second half: harmonics */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={500} size={13} fill={INK} script>
          {t(
            "2nd half: only a WHOLE number of half-loops fits in L",
            "2nd half: sirf POORI number of half-loops L mein fit"
          )}
        </T>
      </Fade>

      {/* beat 6 — the boundary condition */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={525} size={13} fill={INK}>
          {t("node at x=0 AND x=L → sin(kL)=0 → L = n·λ/2", "node x=0 AUR x=L → sin(kL)=0 → L = n·λ/2")}
        </T>
      </Fade>

      {/* beat 7 — the verdict */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <Chip x={300} y={545} w={480} h={44} fill={GREEN} textFill="#fff" size={17} script={false}>
          f_n = nv/2L → f = 1/(2L)√(T/μ)
        </Chip>
      </Fade>
    </Scene>
  );
}
