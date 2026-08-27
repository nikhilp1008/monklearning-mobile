/**
 * C11 Ch09 · Section 39 — "Ozonolysis: identify the alkene" (JEE Main)
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 23.64, 30.98, 47.27, 54.36, 60.59, 79.87]):
 *  0 heading: C5H10, ozonolysis -> propanal + ethanal · 1 reverse: stitch
 *  carbonyl carbons into C=C · 2 propanal+ethanal, join carbons ·
 *  3 formula CH3CH2-CH=CH-CH3 · 4 =C5H10, A = pent-2-ene · 5 with
 *  HBr/peroxide -> mainly 3-bromopentane · 6 RED: peroxide reverses only
 *  with clear 1°-vs-2° choice
 *
 * Layout plan:
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, GREEN, INK, RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch09Sec39({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={65} size={25} fill={RED} script>
          {t("ozonolysis: identify the alkene", "ozonolysis: alkene identify karo")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={95} size={14} fill={INK} weight={700}>
          [JEE Main] C5H10 — {t("ozonolysis gives propanal + ethanal", "ozonolysis se propanal + ethanal milta")}
        </T>
      </Fade>

      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={540} y={135} size={15} fill={INK}>
          {t("reverse the ozonolysis: stitch the two carbonyl carbons into C=C", "ozonolysis ulta karo: dono carbonyl carbons ko C=C se jodo")}
        </T>
      </Fade>

      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={175} size={16} fill={INK} weight={700}>
          CH3CH2CHO + CH3CHO
        </T>
      </Fade>

      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={220} size={17} fill={INK} weight={800}>
          CH3CH2–CH=CH–CH3
        </T>
      </Fade>

      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={255} size={16} fill={GREEN} weight={700}>
          {t("= C5H10 — A is pent-2-ene", "= C5H10 — A pent-2-ene hai")}
        </T>
      </Fade>

      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={295} size={15} fill={INK}>
          {t("(ii) with HBr/peroxide → mainly 3-bromopentane", "(ii) HBr/peroxide ke saath → mainly 3-bromopentane")}
        </T>
      </Fade>

      {/* beat 6 — the teaching point */}
      <Draw on={beat >= 6} delay={dl(6, 0.3)} d="M 60 325 L 60 393" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={76} y={345} size={15} fill={RED} script anchor="start">
          {t("peroxide reverses orientation only with a clear", "peroxide orientation sirf tab palatta hai jab")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.5)}>
        <T x={76} y={377} size={15} fill={RED} script anchor="start">
          {t("1°-vs-2° choice — muted for an internal alkene", "clear 1°-vs-2° choice ho — internal alkene mein muted")}
        </T>
      </Fade>
    </Scene>
  );
}
