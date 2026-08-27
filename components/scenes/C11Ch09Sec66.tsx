/**
 * C11 Ch09 · Section 66 — "Physical properties and the evidence for resonance"
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 11.18, 25.26, 32.09, 39.94, 57.17, 73.47]):
 *  0 heading · 1 sooty, luminous flame · 2 benzene also toxic · 3 how do we
 *  know? heat of hydrogenation · 4 bars: cyclohexene ~120, predicted
 *  cyclohexatriene ~360 · 5 benzene releases far less; shortfall ≈150 =
 *  resonance energy · 6 RED: matches earlier number
 *
 * Layout plan — 3 bars x=150/320/490, baseline y=430:
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, GREEN, INK, MUTED, RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch09Sec66({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const BASE = 430;

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={62} size={22} fill={RED} script>
          {t("physical properties and the evidence for resonance", "physical properties aur resonance ka saboot")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={92} size={15} fill={INK} weight={700}>
          {t("non-polar, sooty-flamed, and toxic", "non-polar, sooty-flamed, aur toxic")}
        </T>
      </Fade>

      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={540} y={125} size={14} fill={INK}>
          {t("signature: a sooty, luminous flame (high C:H ratio)", "signature: sooty, luminous flame (high C:H ratio)")}
        </T>
      </Fade>

      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={157} size={14} fill={INK}>
          {t("benzene is also toxic — more on this at the sub-topic's end", "benzene toxic bhi hai — sub-topic ke end mein aur")}
        </T>
      </Fade>

      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={190} size={15} fill={INK} weight={700}>
          {t("how do we know the ring is extra-stable? heat of hydrogenation", "kaise pata ring extra-stable hai? heat of hydrogenation se")}
        </T>
      </Fade>

      {/* beat 4 — the bars */}
      <Draw on={beat >= 4} delay={dl(4, 0.3)} d={`M 130 ${BASE} H 190 V ${BASE - 60} H 130 Z`} stroke={GREEN} sw={2} dur={0.6} fill="none" />
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={160} y={BASE - 70} size={13} fill={GREEN} weight={700}>~120</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.3)}>
        <T x={160} y={BASE + 22} size={12} fill={MUTED} script>{t("cyclohexene", "cyclohexene")}</T>
      </Fade>

      <Draw on={beat >= 4} delay={dl(4, 1.8)} d={`M 300 ${BASE} H 360 V ${BASE - 180} H 300 Z`} stroke={MUTED} sw={2} dur={0.6} fill="none" />
      <Fade on={beat >= 4} delay={dl(4, 2.5)}>
        <T x={330} y={BASE - 190} size={13} fill={MUTED} weight={700}>~360</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.8)}>
        <T x={330} y={BASE + 22} size={12} fill={MUTED} script>{t("“cyclohexatriene” (predicted)", "“cyclohexatriene” (predicted)")}</T>
      </Fade>

      {/* beat 5 — benzene's actual bar + the shortfall */}
      <Draw on={beat >= 5} delay={dl(5, 0.3)} d={`M 470 ${BASE} H 530 V ${BASE - 210} H 470 Z`} stroke={INK} sw={2.2} dur={0.7} fill="none" />
      <Fade on={beat >= 5} delay={dl(5, 1.1)}>
        <T x={500} y={BASE + 22} size={12} fill={INK} script>{t("benzene (actual)", "benzene (actual)")}</T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 1.6)} d={`M 360 ${BASE - 180} H 470`} stroke={RED} sw={1.6} dur={0.5} />
      <Draw on={beat >= 5} delay={dl(5, 2)} d={`M 470 ${BASE - 180} L 470 ${BASE - 210}`} stroke={RED} sw={1.6} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 2.4)}>
        <T x={570} y={BASE - 195} size={13} fill={RED} weight={700} anchor="start">
          {t("shortfall ≈150 = resonance energy", "shortfall ≈150 = resonance energy")}
        </T>
      </Fade>

      {/* beat 6 — matches earlier */}
      <Draw on={beat >= 6} delay={dl(6, 0.3)} d="M 60 480 L 60 516" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={76} y={502} size={16} fill={RED} script anchor="start">
          {t("that measured number matches the resonance energy quoted earlier", "yeh measured number pehle wale resonance energy se match karta")}
        </T>
      </Fade>
    </Scene>
  );
}
