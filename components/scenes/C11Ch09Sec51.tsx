/**
 * C11 Ch09 · Section 51 — "Electrophilic addition II: hydrogen halides"
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 6.83, 18.35, 23.98, 32.77, 46.93, 56.58]):
 *  0 heading: adding HX twice makes a gem-dihalide · 1 2 HX (Markovnikov),
 *  both halogens SAME carbon · 2 formula HC≡CH+2HBr→CH3CHBr2 · 3 propyne:
 *  both Br on central C → 2,2-dibromopropane · 4 gem vs vicinal · 5
 *  orientation via vinylic cation · 6 RED memory rule
 *
 * Layout plan:
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch09Sec51({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={65} size={24} fill={RED} script>
          {t("electrophilic addition II: hydrogen halides", "electrophilic addition II: hydrogen halides")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={97} size={15} fill={INK} weight={700}>
          {t("adding HX twice makes a gem-dihalide", "HX do baar add karne se gem-dihalide banta")}
        </T>
      </Fade>

      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={540} y={135} size={15} fill={INK}>
          {t("two molecules of HX add (Markovnikov), both halogens on the SAME carbon", "HX ke do molecules add hote (Markovnikov), dono halogens EK carbon pe")}
        </T>
      </Fade>

      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={175} size={16} fill={INK} weight={700}>
          HC≡CH + 2HBr → CH3–CHBr2  (1,1-dibromoethane)
        </T>
      </Fade>

      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={215} size={15} fill={INK}>
          {t("for propyne, both bromines land on the central carbon → 2,2-dibromopropane", "propyne mein, dono bromines central carbon pe → 2,2-dibromopropane")}
        </T>
      </Fade>

      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={255} size={15} fill={INK}>
          {t("gem = both X on one carbon (from HX); vicinal = adjacent carbons (from X2)", "gem = ek carbon pe dono X (HX se); vicinal = adjacent carbons (X2 se)")}
        </T>
      </Fade>

      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={295} size={15} fill={INK}>
          {t("orientation follows Markovnikov through the more stable vinylic cation", "orientation Markovnikov se, zyada stable vinylic cation ke through")}
        </T>
      </Fade>

      {/* beat 6 — the memory rule */}
      <Draw on={beat >= 6} delay={dl(6, 0.3)} d="M 60 320 L 60 356" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={76} y={342} size={16} fill={RED} script anchor="start">
          {t("track the reagent: 2 HX gives gem; one X2 gives vicinal", "reagent track karo: 2 HX se gem; ek X2 se vicinal")}
        </T>
      </Fade>
    </Scene>
  );
}
