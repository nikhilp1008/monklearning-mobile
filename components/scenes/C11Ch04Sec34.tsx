/**
 * C11 Chemistry Ch04 · Section 34 — "Worked example: bond angles by Bent's rule and Drago's rule"
 * Canvas 1080×620 · safe x36–1044, y30–596. Two side-by-side panels.
 *
 * Beats (en [0, 12.29, 28.25, 50.94, 64.43, 79.45, 101.55]):
 *  0 intro: 2 facts, identify which rule
 *  1 LEFT: NH3 107 vs NF3 102, same centre/LPs/sp3
 *  2 LEFT: diagnosis -> Bent's rule, F pulls p-character
 *  3 LEFT: answer chip
 *  4 RIGHT: NH3 107 vs PH3 93.5, same substituent, centre changed
 *  5 RIGHT: diagnosis -> Drago's rule
 *  6 RIGHT: answer chip + shared closing insight
 *
 * Layout plan:
 *  b1-3 | left panel (Bent's)  | T/Chip | x80..460  y120..286, center x270
 *  b4-6 | right panel (Drago's)| T/Chip | x620..1000 y120..286, center x810
 *  b6   | closing line          | T mid  | y306
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, MUTED, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch04Sec34({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={58} size={19} fill={RED} script>
          {t("Worked example: Bent's vs Drago's", "Worked example: Bent's vs Drago's")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 3.4)} d="M 400 80 C 460 76, 620 76, 680 80" stroke={RED} sw={2.2} dur={0.6} />

      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={95} size={12} fill={MUTED} script>
          {t("JEE Main: two facts — which rule applies to each?", "JEE Main: do facts — kaunsa rule kis par lagta?")}
        </T>
      </Fade>

      {/* beat 1 — LEFT: NH3 vs NF3 */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={270} y={120} size={13} weight={700} fill={INK}>
          NH₃: 107°
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={270} y={142} size={13} weight={700} fill={INK}>
          NF₃: 102°
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={270} y={164} size={10.5} fill={MUTED}>
          {t("same centre, same LPs, same sp³", "same centre, same LPs, same sp³")}
        </T>
      </Fade>

      {/* beat 2 — LEFT: diagnosis */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={270} y={192} size={11} fill={INK}>
          {t("only substituent changed (H→F)", "sirf substituent badla (H→F)")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={270} y={214} size={14} weight={700} fill={GREEN}>
          → BENT'S RULE
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.0)}>
        <T x={270} y={238} size={10} fill={INK}>
          {t("F pulls p-character into N–F bonds → smaller angle", "F N–F bonds mein p-character khींchta → chhota angle")}
        </T>
      </Fade>

      {/* beat 3 — LEFT answer */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <Chip x={80} y={258} w={380} h={28} fill={GREEN} textFill="#fff" size={12} script={false}>
          {t("ANSWER 1: Bent's rule", "ANSWER 1: Bent's rule")}
        </Chip>
      </Fade>

      {/* beat 4 — RIGHT: NH3 vs PH3 */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={810} y={120} size={13} weight={700} fill={INK}>
          NH₃: 107°
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <T x={810} y={142} size={13} weight={700} fill={INK}>
          PH₃: 93.5°
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.9)}>
        <T x={810} y={164} size={10.5} fill={MUTED}>
          {t("same substituent (H), centre changed down group", "same substituent (H), centre group mein badla")}
        </T>
      </Fade>

      {/* beat 5 — RIGHT: diagnosis */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={810} y={192} size={11} fill={INK}>
          {t("central atom changed (N→P)", "central atom badla (N→P)")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={810} y={214} size={14} weight={700} fill={RED}>
          → DRAGO'S RULE
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.0)}>
        <T x={810} y={238} size={10} fill={INK}>
          {t("P: large + weak EN → ~pure p bonds → ~90°", "P: large + weak EN → ~pure p bonds → ~90°")}
        </T>
      </Fade>

      {/* beat 6 — RIGHT answer + shared closing */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Chip x={620} y={258} w={380} h={28} fill={RED} textFill="#fff" size={12} script={false}>
          {t("ANSWER 2: Drago's rule", "ANSWER 2: Drago's rule")}
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.9)}>
        <T x={540} y={306} size={12} weight={700} fill={INK}>
          {t(
            "spot what changed — substituent → Bent's · central atom → Drago's",
            "kya badla pehchano — substituent → Bent's · central atom → Drago's"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
