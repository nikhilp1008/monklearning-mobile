/**
 * C11 Chemistry Ch04 · Section 35 — "Worked example: the bonding in diborane"
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 17.66, 35.67, 46.42, 58.62, 76.71, 88.92, 113.75]):
 *  0 anchor: JEE Advanced, B2H6, 12 valence e-
 *  1 part a: 7 normal bonds need 14e-, only 12 -> electron deficient
 *  2 actual structure: 4 terminal (ordinary) + 2 bridging (banana, 3c-2e)
 *  3 part b: 4 terminal B-H = 8 e-
 *  4 2 bridging B-H-B (3c-2e) = 4 e-
 *  5 8+4=12 check
 *  6 part c: B sp3, geometry, bond lengths
 *  7 final answer chip
 *
 * Layout plan:
 *  b2 | diborane structure | Draw/T | x340..620 y200..345
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, MUTED, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';
import { bondD } from "./chem-kit";

export default function C11Ch04Sec35({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={58} size={19} fill={RED} script>
          {t("Worked example: bonding in diborane", "Worked example: diborane ki bonding")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 3.4)} d="M 380 80 C 450 76, 630 76, 700 80" stroke={RED} sw={2.2} dur={0.6} />

      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={95} size={12} fill={MUTED} script>
          {t("JEE Advanced: B₂H₆, only 12 valence e⁻", "JEE Advanced: B₂H₆, sirf 12 valence e⁻")}
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={119} size={11.5} fill={INK}>
          {t(
            "7 linkages as normal bonds → need 14 e⁻, but B₂H₆ has only 12 → electron deficient",
            "7 linkages normal bonds ki tarah → 14 e⁻ chahiye, par B₂H₆ ke paas sirf 12 → electron deficient"
          )}
        </T>
      </Fade>

      {/* beat 2 — build diborane structure */}
      <Fade on={beat >= 2} delay={dl(2, 0.1)}>
        <T x={400} y={276} size={17} weight={700} fill={INK}>
          B
        </T>
        <T x={560} y={276} size={17} weight={700} fill={INK}>
          B
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={340} y={228} size={14} weight={700} fill={INK}>
          H
        </T>
        <T x={340} y={318} size={14} weight={700} fill={INK}>
          H
        </T>
        <T x={620} y={228} size={14} weight={700} fill={INK}>
          H
        </T>
        <T x={620} y={318} size={14} weight={700} fill={INK}>
          H
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.5)} d={bondD(378, 258, 352, 233)} stroke={INK} sw={2} dur={0.3} />
      <Draw on={beat >= 2} delay={dl(2, 0.6)} d={bondD(378, 282, 352, 307)} stroke={INK} sw={2} dur={0.3} />
      <Draw on={beat >= 2} delay={dl(2, 0.7)} d={bondD(582, 258, 608, 233)} stroke={INK} sw={2} dur={0.3} />
      <Draw on={beat >= 2} delay={dl(2, 0.8)} d={bondD(582, 282, 608, 307)} stroke={INK} sw={2} dur={0.3} />
      <Draw on={beat >= 2} delay={dl(2, 1.1)} d="M 400 270 Q 480 212 560 270" stroke={RED} sw={2} dur={0.5} />
      <Draw on={beat >= 2} delay={dl(2, 1.3)} d="M 400 270 Q 480 328 560 270" stroke={RED} sw={2} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 1.7)}>
        <T x={480} y={200} size={13} weight={700} fill={INK}>
          H
        </T>
        <T x={480} y={347} size={13} weight={700} fill={INK}>
          H
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.1)}>
        <T x={540} y={368} size={10.5} fill={MUTED}>
          {t(
            "4 terminal (ordinary) + 2 bridging (banana, 3c-2e)",
            "4 terminal (ordinary) + 2 bridging (banana, 3c-2e)"
          )}
        </T>
      </Fade>

      {/* beat 3 */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={390} size={12} fill={INK}>
          {t("4 terminal B–H = 4×2 = 8 e⁻", "4 terminal B–H = 4×2 = 8 e⁻")}
        </T>
      </Fade>

      {/* beat 4 */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={412} size={12} fill={INK}>
          {t(
            "2 bridging B–H–B (3c-2e) = 2×2 = 4 e⁻ (delocalised over 2B+1H)",
            "2 bridging B–H–B (3c-2e) = 2×2 = 4 e⁻ (2B+1H par delocalised)"
          )}
        </T>
      </Fade>

      {/* beat 5 */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={434} size={12.5} weight={700} fill={GREEN}>
          {t(
            "8 + 4 = 12 ✓ — deficiency resolved by SPREADING pairs over 3 atoms",
            "8 + 4 = 12 ✓ — deficiency 3 atoms par pairs PHAILAKE resolve hoti"
          )}
        </T>
      </Fade>

      {/* beat 6 */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={457} size={10.5} fill={INK}>
          {t(
            "each B: sp³ · 4 terminal H + 2B in ONE plane · bridge H above/below · 133pm vs 119pm",
            "har B: sp³ · 4 terminal H + 2B EK plane mein · bridge H upar/neeche · 133pm vs 119pm"
          )}
        </T>
      </Fade>

      {/* beat 7 — final answer */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Chip x={160} y={476} w={760} h={30} fill={GREEN} textFill="#fff" size={12} script={false}>
          {t(
            "electron deficiency → 2×(3c-2e) bridges + 4 ordinary bonds, B = sp³",
            "electron deficiency → 2×(3c-2e) bridges + 4 ordinary bonds, B = sp³"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
