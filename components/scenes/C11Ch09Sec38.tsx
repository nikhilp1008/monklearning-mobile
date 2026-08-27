/**
 * C11 Ch09 · Section 38 — "Which alkene shows geometrical isomerism?" (NEET)
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 8.28, 18.09, 27.48, 38.74, 45.91, 50.18]):
 *  0 heading · 1 gate: each C=C carbon needs 2 DIFFERENT groups · 2 (A)
 *  fails · 3 (B) passes · 4 (C) fails · 5 RED answer: only (B) · 6 trap
 *
 * Layout plan — 3-row candidate list y185/225/265:
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, AMBER_DARK, GREEN, INK, MUTED, RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch09Sec38({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={65} size={24} fill={RED} script>
          {t("which alkene shows geometrical isomerism?", "kaunsa alkene geometrical isomerism dikhata hai?")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={95} size={14} fill={INK} weight={700}>[NEET]</T>
      </Fade>

      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={540} y={130} size={15} fill={AMBER_DARK} script>
          {t("gate: each C=C carbon must carry two DIFFERENT groups", "gate: har C=C carbon pe do ALAG groups hone chahiye")}
        </T>
      </Fade>

      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={60} y={185} size={15} fill={INK} anchor="start">
          (A) 2-methylbut-2-ene (CH3)2C=CHCH3
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={890} y={185} size={15} fill={RED} weight={700}>✗</T>
      </Fade>

      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={60} y={225} size={15} fill={INK} anchor="start">
          (B) pent-2-ene CH3CH=CHCH2CH3
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={890} y={225} size={15} fill={GREEN} weight={700}>✓</T>
      </Fade>

      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={60} y={265} size={15} fill={INK} anchor="start">
          (C) 2-methylprop-1-ene (CH3)2C=CH2
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={890} y={265} size={15} fill={RED} weight={700}>✗</T>
      </Fade>

      {/* beat 5 — the answer */}
      <Draw on={beat >= 5} delay={dl(5, 0.3)} d="M 60 300 L 60 336" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={76} y={322} size={17} fill={GREEN} weight={800} anchor="start">
          {t("Answer: only (B) pent-2-ene", "Answer: sirf (B) pent-2-ene")}
        </T>
      </Fade>

      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={365} size={14} fill={MUTED} script>
          {t("trap: assuming (A) qualifies just for being a branched 2-ene", "trap: (A) ko sirf branched 2-ene dekh kar qualify maan lena")}
        </T>
      </Fade>
    </Scene>
  );
}
