/**
 * C11 Chemistry Ch04 · Section 31 — "Bent's rule, Drago's rule, and the bond-angle framework"
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 11.61, 34.05, 49.24, 68.1, 83.46, 106.84, 123.22]):
 *  0 anchor: two refinements
 *  1 Bent's rule statement
 *  2 NH3 107° vs NF3 102°
 *  3 Drago's rule statement (heavy hydrides, EN<1.3)
 *  4 PH3/H2S/AsH3 ~90°
 *  5 priority chain (6 factors)
 *  6 fast diagnostic (Bent's vs Drago's)
 *  7 3c-2e bond intro + chip
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, MUTED, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch04Sec31({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={58} size={19} fill={RED} script>
          {t("Bent's rule, Drago's rule, bond angles", "Bent's rule, Drago's rule, bond angles")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 3.6)} d="M 380 80 C 450 76, 630 76, 700 80" stroke={RED} sw={2.2} dur={0.6} />

      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={95} size={12} fill={MUTED} script>
          {t("two refinements fix what hybridisation alone can't", "do refinements fix karte jo hybridisation akele nahi kar sakti")}
        </T>
      </Fade>

      {/* beat 1 — Bent's rule */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={117} size={12} fill={INK}>
          {t(
            "Bent's rule: s-character → electropositive subs/LPs · p-character → electronegative subs",
            "Bent's rule: s-character → electropositive subs/LPs · p-character → electronegative subs"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.7)}>
        <T x={540} y={139} size={11.5} fill={MUTED}>
          {t("(p orbitals ~90° → electronegative substituents PINCH the angle)", "(p orbitals ~90° → electronegative substituents angle PINCH karte)")}
        </T>
      </Fade>

      {/* beat 2 — NH3 vs NF3 */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={163} size={12.5} weight={700} fill={INK}>
          NH₃: 107° · NF₃: 102° {t("(F pulls p-character into N–F bonds)", "(F N–F bonds mein p-character khींchta)")}
        </T>
      </Fade>

      {/* beat 3 — Drago's rule */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={190} size={12} fill={INK}>
          {t(
            "Drago's rule (heavy hydrides): centre EN < 1.3 → barely hybridises → ~pure p bonds",
            "Drago's rule (heavy hydrides): centre EN < 1.3 → barely hybridise karta → ~pure p bonds"
          )}
        </T>
      </Fade>

      {/* beat 4 — PH3/H2S/AsH3 */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={213} size={12.5} weight={700} fill={INK}>
          PH₃: 93.5° · H₂S: 92° · AsH₃: 91.8° {t("(all hug 90°)", "(sab 90° ke paas)")}
        </T>
      </Fade>

      {/* beat 5 — priority chain */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={248} size={11} fill={INK}>
          {t(
            "priority: hybridisation/s-char → lone pairs → central EN → Drago's → Bent's → back-bonding/size",
            "priority: hybridisation/s-char → lone pairs → central EN → Drago's → Bent's → back-bonding/size"
          )}
        </T>
      </Fade>

      {/* beat 6 — fast diagnostic */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={280} size={12} weight={700} fill={GREEN}>
          {t("same centre, different substituent → BENT'S RULE", "same centre, alag substituent → BENT'S RULE")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.7)}>
        <T x={540} y={302} size={12} weight={700} fill={GREEN}>
          {t("same substituent, heavier centre → DRAGO'S RULE", "same substituent, heavier centre → DRAGO'S RULE")}
        </T>
      </Fade>

      {/* beat 7 — 3c-2e bond */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={330} size={12} fill={INK}>
          {t(
            "3c-2e bond: ONE electron pair smeared across 3 atoms",
            "3c-2e bond: EK electron pair 3 atoms par smeared"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.8)}>
        <Chip x={160} y={350} w={760} h={30} fill={RED} textFill="#fff" size={12.5} script={false}>
          {t(
            "hallmark of electron-deficient molecules — diborane, Al₂Cl₆",
            "electron-deficient molecules ki pehchaan — diborane, Al₂Cl₆"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
