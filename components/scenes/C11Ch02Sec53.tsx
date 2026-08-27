/**
 * C11 Ch02 · Section 53 — "Worked example (JEE Main): 3d subshell and Fe2+"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md. `section_type: worked_examples`.
 *
 * Beats (en [0, 11.01, 25.77, 39.34, 53.16, 61.1, 69.63, 77.06]):
 *  0 anchor: several 3d subshell facts stacked, then an ion configuration
 *  1 formula (high, GREEN): L = √(l(l+1))·h/2π = √6·h/2π (l=2)
 *  2 formula: orbitals = 2l+1 = 5, max electrons = 4l+2 = 10
 *  3 formula: radial nodes of 3d = n−l−1 = 3−2−1 = 0
 *  4 given: neutral iron is [Ar] 3d⁶ 4s²
 *  5 guardrail (high, RED): remove the two highest-n electrons first — the 4s pair
 *  6 formula (high, GREEN): Fe²⁺ = [Ar] 3d⁶
 *  7 land: 4s leaves before 3d, even though 4s filled first
 *
 * Layout plan (single column, x540 center):
 *  title (always)          | T mid | x540 y52 script red
 *  b0 | anchor caption      | T mid | x540 y74            [dims@b1]
 *  b1 | formula chip (GRN)  | Chip  | x310..770 y98..132
 *  b2 | formula chip        | Chip  | x280..800 y148..180
 *  b3 | formula chip        | Chip  | x310..770 y196..228
 *  b4 | given chip          | Chip  | x370..710 y244..276
 *  b5 | guardrail (RED)     | Chip  | x230..850 y292..326
 *  b6 | formula chip (GRN)  | Chip  | x400..680 y342..378
 *  b7 | closing caption     | T mid | x540 y404
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, T, Chip, INK, GREEN, RED, CREAM, MUTED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch02Sec53({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={52} size={14} fill={RED} script>
          {t("[JEE Main] 3d subshell facts and Fe²⁺", "[JEE Main] 3d subshell facts aur Fe²⁺")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} dim={beat >= 1} delay={dl(0, 0.3)}>
        <T x={540} y={74} size={11} fill={RED} script>
          {t(
            "several 3d subshell facts stacked, then an ion configuration",
            "three-d subshell ke kai facts stack, phir ek ion configuration"
          )}
        </T>
      </Fade>

      {/* beat 1 — formula (high, GREEN): angular momentum */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <Chip x={280} y={98} w={520} h={34} fill={GREEN} textFill="#fff" size={14} script={false}>
          {"L = √(l(l+1)) · h/2π = √6 · h/2π  (l=2)"}
        </Chip>
      </Fade>

      {/* beat 2 — formula: orbitals and capacity */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <Chip x={260} y={148} w={560} h={32} fill={CREAM} stroke={MUTED} textFill={INK} size={13} script={false}>
          orbitals = 2l+1 = 5,  max electrons = 4l+2 = 10
        </Chip>
      </Fade>

      {/* beat 3 — formula: radial nodes of 3d */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <Chip x={300} y={196} w={480} h={32} fill={CREAM} stroke={MUTED} textFill={INK} size={13} script={false}>
          radial nodes of 3d = n−l−1 = 3−2−1 = 0
        </Chip>
      </Fade>

      {/* beat 4 — given: neutral iron */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <Chip x={370} y={244} w={340} h={32} fill={CREAM} stroke={MUTED} textFill={RED} size={13} script={false}>
          {"neutral iron is [Ar] 3d⁶ 4s²"}
        </Chip>
      </Fade>

      {/* beat 5 — guardrail (high, RED): highest n first */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Chip x={230} y={292} w={620} h={34} fill={CREAM} stroke={RED} textFill={RED} size={13} script={false}>
          {t(
            "remove the two highest-n electrons first — the 4s pair",
            "do highest-n electrons pehle hataao — 4s pair"
          )}
        </Chip>
      </Fade>

      {/* beat 6 — formula (high, GREEN): Fe²⁺ */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Chip x={400} y={342} w={280} h={36} fill={GREEN} textFill="#fff" size={16} script={false}>
          {"Fe²⁺ = [Ar] 3d⁶"}
        </Chip>
      </Fade>

      {/* beat 7 — land: last in, not last out */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={404} size={12} fill={GREEN} script>
          {t(
            "the 4s electrons leave before the 3d, even though 4s filled first",
            "4s electrons 3d se pehle jaate hain, chahe 4s pehle bhara ho"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
