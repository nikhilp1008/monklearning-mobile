/**
 * C11 Ch02 · Section 52 — "Worked example (NEET): nodes of a 4d orbital"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md. `section_type: worked_examples`.
 *
 * Beats (en [0, 5.63, 16.21, 25.51, 34.13, 41.73, 54.36, 60.67]):
 *  0 anchor: a quick node-counting question — don't mix up the three counts
 *  1 given: for 4d, n=4, l=2
 *  2 guardrail: the trap — reporting n−1 as the radial count
 *  3 formula (high, GREEN): radial = n−l−1 = 4−2−1 = 1
 *  4 formula (high, GREEN): angular = l = 2, total = n−1 = 3
 *  5 guardrail (high, RED): self-check — radial+angular = 1+2 = 3 = n−1
 *  6 represent: a 1+2=3 dot tally (radial/angular/total)
 *  7 guardrail: if they don't sum to n−1, you slipped somewhere
 *
 * Layout plan (single column, x540 center):
 *  title (always)          | T mid | x540 y52 script red
 *  b0 | anchor caption      | T mid | x540 y74            [dims@b1]
 *  b1 | given chip          | Chip  | x380..700 y96..128
 *  b2 | guardrail caption   | T mid | x540 y158
 *  b3 | formula chip (GRN)  | Chip  | x330..750 y184..218
 *  b4 | formula chip (GRN)  | Chip  | x320..760 y232..266
 *  b5 | self-check (RED)    | Chip  | x260..820 y280..316
 *  b6 | dot tally + labels  | circ  | y356 / y382
 *  b7 | guardrail chip      | Chip  | x210..870 y408..444
 */

import React from "react";
import { Circle } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, T, Chip, GREEN, RED, CREAM, AMBER_DARK, MUTED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch02Sec52({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={52} size={14} fill={RED} script>
          {t("[NEET] nodes of a 4d orbital", "[NEET] 4d orbital ke nodes")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} dim={beat >= 1} delay={dl(0, 0.3)}>
        <T x={540} y={74} size={11} fill={RED} script>
          {t(
            "a quick node-counting question — don't mix up the three counts",
            "quick node-counting sawaal — teen counts mix mat karo"
          )}
        </T>
      </Fade>

      {/* beat 1 — given */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <Chip x={380} y={96} w={320} h={32} fill={CREAM} stroke={MUTED} textFill={RED} size={13} script={false}>
          GIVEN: 4d orbital → n=4, l=2
        </Chip>
      </Fade>

      {/* beat 2 — guardrail: the trap */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={158} size={12} fill={RED} script>
          {t(
            "the trap: reporting n−1 as the radial count",
            "trap: n−1 ko radial count report karna"
          )}
        </T>
      </Fade>

      {/* beat 3 — formula (high, GREEN): radial */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <Chip x={330} y={184} w={420} h={34} fill={GREEN} textFill="#fff" size={15} script={false}>
          radial = n−l−1 = 4−2−1 = 1
        </Chip>
      </Fade>

      {/* beat 4 — formula (high, GREEN): angular, total */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <Chip x={320} y={232} w={440} h={34} fill={GREEN} textFill="#fff" size={15} script={false}>
          angular = l = 2,  total = n−1 = 3
        </Chip>
      </Fade>

      {/* beat 5 — guardrail (high, RED): the self-check */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Chip x={260} y={280} w={560} h={36} fill={CREAM} stroke={RED} textFill={RED} size={14} script={false}>
          {"self-check: radial + angular = 1+2 = 3 = n−1 ✓"}
        </Chip>
      </Fade>

      {/* beat 6 — represent: the 1 + 2 = 3 tally */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <Circle cx={430} cy={356} r={8} fill={AMBER_DARK} />
        <T x={460} y={361} size={16} fill={MUTED}>
          +
        </T>
        <Circle cx={495} cy={356} r={8} fill={RED} />
        <Circle cx={515} cy={356} r={8} fill={RED} />
        <T x={550} y={361} size={16} fill={MUTED}>
          =
        </T>
        <Circle cx={585} cy={356} r={8} fill={GREEN} />
        <Circle cx={605} cy={356} r={8} fill={GREEN} />
        <Circle cx={625} cy={356} r={8} fill={GREEN} />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={430} y={382} size={10} fill={AMBER_DARK}>
          {t("radial", "radial")}
        </T>
        <T x={505} y={382} size={10} fill={RED}>
          {t("angular", "angular")}
        </T>
        <T x={605} y={382} size={10} fill={GREEN}>
          {t("total", "total")}
        </T>
      </Fade>

      {/* beat 7 — guardrail: the recheck habit */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Chip x={210} y={408} w={660} h={36} fill={CREAM} stroke={RED} textFill={RED} size={13} script={false}>
          {t(
            "if radial + angular ≠ n−1, you slipped somewhere — recheck",
            "agar radial + angular ≠ n−1, kahin phisle ho — recheck karo"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
