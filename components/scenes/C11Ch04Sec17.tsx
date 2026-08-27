/**
 * C11 Chemistry Ch04 · Section 17 — "Worked example: SF4 hybridisation, shape and polarity"
 * Canvas 1080×620 · safe x36–1044, y30–596. Only 7 beats.
 *
 * Beats (en [0, 16.13, 35.58, 48.13, 68.78, 85.93, 104.36]):
 *  0 intro: JEE Main, SF4 — hybridisation, shape, polarity
 *  1 H=1/2(6+4)=5 -> sp3d (SN=5 too)
 *  2 e-pair geometry: trigonal bipyramidal (3 eq + 2 ax)
 *  3 lone pair -> equatorial (fewer 90 deg neighbors)
 *  4 build see-saw structure: 2 axial F bent away, 2 equatorial F, LP
 *  5 asymmetric -> polar (vs SF6 symmetric, nonpolar)
 *  6 answer chip: sp3d, see-saw, polar
 *
 * Layout plan:
 *  b4 | see-saw structure | Draw/T | x460..600 y190..380
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, MUTED, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';
import { bondD, LonePair } from "./chem-kit";

export default function C11Ch04Sec17({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={58} size={19} fill={RED} script>
          {t("Worked example: SF₄", "Worked example: SF₄")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 3.0)} d="M 440 80 C 490 76, 590 76, 640 80" stroke={RED} sw={2.2} dur={0.6} />

      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={95} size={12} fill={MUTED} script>
          {t("JEE Main: SF₄ — find hybridisation, shape, polarity", "JEE Main: SF₄ — hybridisation, shape, polarity")}
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={118} size={12.5} fill={INK}>
          S: V=6, M=4 → H = ½(6+4) = 5 → sp³d (SN=4σ+1LP=5 {t("too", "bhi")})
        </T>
      </Fade>

      {/* beat 2 */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={141} size={12} fill={INK}>
          {t(
            "e-pair geometry: trigonal bipyramidal (3 equatorial + 2 axial)",
            "e-pair geometry: trigonal bipyramidal (3 equatorial + 2 axial)"
          )}
        </T>
      </Fade>

      {/* beat 3 */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={163} size={12} weight={700} fill={RED}>
          {t(
            "lone pair → EQUATORIAL (fewer 90° neighbors than axial)",
            "lone pair → EQUATORIAL (axial se kam 90° neighbors)"
          )}
        </T>
      </Fade>

      {/* beat 4 — build the see-saw structure */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={285} size={17} weight={700} fill={INK}>
          S
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <T x={460} y={285} size={14} weight={700} fill={INK}>
          F
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 0.7)} d={bondD(510, 285, 475, 285)} stroke={INK} sw={2} dur={0.3} />
      <Fade on={beat >= 4} delay={dl(4, 1.0)}>
        <T x={590} y={345} size={14} weight={700} fill={INK}>
          F
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1.2)} d={bondD(548.3, 295, 581.7, 335)} stroke={INK} sw={2} dur={0.3} />
      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <T x={500} y={190} size={14} weight={700} fill={INK}>
          F
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1.7)} d={bondD(535, 273, 505, 202)} stroke={INK} sw={2} dur={0.3} />
      <Fade on={beat >= 4} delay={dl(4, 2.0)}>
        <T x={500} y={380} size={14} weight={700} fill={INK}>
          F
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 2.2)} d={bondD(535, 297, 505, 368)} stroke={INK} sw={2} dur={0.3} />
      <LonePair on={beat >= 4} delay={dl(4, 2.6)} cx={600} cy={225} angle={0} spread={10} r={4} />
      <Fade on={beat >= 4} delay={dl(4, 3.0)}>
        <T x={540} y={405} size={13} weight={700} fill={GREEN}>
          {t("see-saw shape", "see-saw shape")}
        </T>
      </Fade>

      {/* beat 5 — polarity */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={430} size={11.5} fill={INK}>
          {t(
            "asymmetric → 4 S–F dipoles don't cancel → POLAR (vs SF₆: symmetric, nonpolar)",
            "asymmetric → 4 S–F dipoles cancel nahi hote → POLAR (SF₆ symmetric, nonpolar)"
          )}
        </T>
      </Fade>

      {/* beat 6 — answer */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Chip x={330} y={450} w={420} h={30} fill={GREEN} textFill="#fff" size={13} script={false}>
          {t("answer: sp³d · see-saw · POLAR", "answer: sp³d · see-saw · POLAR")}
        </Chip>
      </Fade>
    </Scene>
  );
}
