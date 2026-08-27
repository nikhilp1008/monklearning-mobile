/**
 * C11 Ch09 · Section 55 — "Which liberates hydrogen with sodium?" (NEET)
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 7.59, 19.88, 28.84, 35.93, 44.97, 50.52]):
 *  0 heading · 1 rule: only H on triply-bonded C is acidic enough · 2 (A)
 *  but-2-yne: internal, no terminal H → no reaction · 3 (B) but-1-yne:
 *  terminal C-H → reacts, liberates H2 · 4 (C) but-2-ene: sp2/sp3 only, not
 *  acidic → no reaction · 5 RED answer: only (B) · 6 trap
 *
 * Layout plan — 3-row candidate list y185/225/265:
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, AMBER_DARK, GREEN, INK, MUTED, RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch09Sec55({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={65} size={24} fill={RED} script>
          {t("which liberates hydrogen with sodium?", "sodium ke saath kaun hydrogen chhodta hai?")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={95} size={14} fill={INK} weight={700}>[NEET]</T>
      </Fade>

      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={540} y={130} size={15} fill={AMBER_DARK} script>
          {t("rule: only a hydrogen on a triply-bonded carbon is acidic enough", "rule: sirf triply-bonded carbon wala hydrogen kaafi acidic hota")}
        </T>
      </Fade>

      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={60} y={190} size={15} fill={INK} anchor="start">
          (A) but-2-yne CH3C≡CCH3 — {t("no terminal H", "terminal H nahi")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={950} y={190} size={15} fill={RED} weight={700}>✗</T>
      </Fade>

      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={60} y={230} size={15} fill={INK} anchor="start">
          (B) but-1-yne CH3CH2C≡CH — {t("has terminal H", "terminal H hai")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={950} y={230} size={15} fill={GREEN} weight={700}>✓</T>
      </Fade>

      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={60} y={270} size={15} fill={INK} anchor="start">
          (C) but-2-ene — {t("only sp2/sp3 C–H", "sirf sp2/sp3 C–H")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={950} y={270} size={15} fill={RED} weight={700}>✗</T>
      </Fade>

      {/* beat 5 — the answer */}
      <Draw on={beat >= 5} delay={dl(5, 0.3)} d="M 60 300 L 60 336" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={76} y={322} size={17} fill={GREEN} weight={800} anchor="start">
          {t("Answer: only (B) but-1-yne", "Answer: sirf (B) but-1-yne")}
        </T>
      </Fade>

      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={365} size={14} fill={MUTED} script>
          {t("trap: seeing “yne” in (A) and assuming any alkyne reacts", "trap: (A) mein “yne” dekh kar maan lena ki har alkyne react karta")}
        </T>
      </Fade>
    </Scene>
  );
}
