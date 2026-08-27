/**
 * C11 Ch09 · Section 76 — "Second nitration of nitrobenzene" (JEE Main worked)
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 12.63, 18.86, 27.05, 33.96, 48.38, 63.74]):
 *  0 heading + tag · 1 –NO2 strongly withdrawing, meta-directing · 2 (i)
 *  second NO2 enters meta · 3 formula → 1,3-dinitrobenzene · 4 (ii)
 *  deactivates, slower than benzene · 5 one idea drives both parts ·
 *  6 RED: deactivating + meta-directing = EWG signature
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch09Sec76({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={62} size={24} fill={RED} script>
          {t("second nitration of nitrobenzene", "nitrobenzene ka doosra nitration")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={94} size={14} fill={INK} weight={700}>[JEE Main]</T>
      </Fade>

      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={540} y={130} size={15} fill={INK} weight={700}>
          {t("–NO2 is strongly electron-withdrawing, hence meta-directing", "–NO2 strongly electron-withdrawing hai, isliye meta-directing")}
        </T>
      </Fade>

      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={168} size={14} fill={INK}>
          {t("(i) the second nitro group enters the meta position", "(i) doosra nitro group meta position par jaata")}
        </T>
      </Fade>

      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={203} size={14} fill={INK} weight={700}>
          C6H5NO2 + HNO3 → 1,3-C6H4(NO2)2 + H2O  (conc. H2SO4)
        </T>
      </Fade>

      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={240} size={14} fill={INK}>
          {t("(ii) –NO2 deactivates the ring, so it reacts SLOWER than benzene", "(ii) –NO2 ring deactivate karta, isliye benzene se SLOWER react karta")}
        </T>
      </Fade>

      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={275} size={13} fill={INK} script>
          {t("one idea drives both: –NO2 destabilises the o/p arenium ion most", "ek hi idea dono chalaata: –NO2 o/p arenium ion ko sabse zyada destabilise karta")}
        </T>
      </Fade>

      {/* beat 6 — the signature */}
      <Draw on={beat >= 6} delay={dl(6, 0.3)} d="M 60 320 L 60 376" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={76} y={342} size={15} fill={RED} weight={700} anchor="start">
          {t("deactivating + meta-directing —", "deactivating + meta-directing —")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.5)}>
        <T x={76} y={368} size={15} fill={RED} weight={700} anchor="start">
          {t("the signature of an electron-withdrawing group", "electron-withdrawing group ka signature")}
        </T>
      </Fade>
    </Scene>
  );
}
