/**
 * C11 Ch09 · Section 80 — "Hydrocarbons: chapter cheat sheet" (closes the chapter)
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 5.63, 21.42, 42.24, 59.9, 76.2, 92.33, 105.39]):
 *  0 heading · 1 alkanes summary · 2 alkenes summary · 3 alkynes summary ·
 *  4 arenes summary · 5 RED directive-influence one-liner · 6 the two
 *  orders (halogen reactivity, H replacement) · 7 RED closing mnemonics
 *
 * Layout plan — four family rows y120-250, red block y280-350, orders
 * y385, final red mnemonic block y420-540:
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch09Sec80({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={56} size={24} fill={RED} script>
          {t("hydrocarbons: chapter cheat sheet", "hydrocarbons: chapter cheat sheet")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={86} size={14} fill={INK} weight={700}>
          {t("the one-glance summary of the whole chapter", "poore chapter ka ek-nazar summary")}
        </T>
      </Fade>

      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={540} y={118} size={13} fill={INK}>
          {t("Alkanes: saturated, sp³ · made by hydrogenation, Wurtz, Kolbe, decarboxylation", "Alkanes: saturated, sp³ · hydrogenation, Wurtz, Kolbe, decarboxylation se banate")}
        </T>
      </Fade>

      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={150} size={13} fill={INK}>
          {t("Alkenes: sp² · electrophilic addition (Markovnikov) · 'Br Breaks the Rule'", "Alkenes: sp² · electrophilic addition (Markovnikov) · 'Br Breaks the Rule'")}
        </T>
      </Fade>

      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={182} size={13} fill={INK}>
          {t("Alkynes: sp, acidic terminal H · acetylides · Kucherov → carbonyl", "Alkynes: sp, acidic terminal H · acetylides · Kucherov → carbonyl")}
        </T>
      </Fade>

      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={214} size={13} fill={INK}>
          {t("Arenes: C6H6, 6π, RE ≈ 150 · EAS in 3 steps · substitutes, never adds", "Arenes: C6H6, 6π, RE ≈ 150 · EAS 3 steps mein · substitute karta, add nahi")}
        </T>
      </Fade>

      {/* beat 5 — directive influence, red */}
      <Draw on={beat >= 5} delay={dl(5, 0.3)} d="M 60 240 L 60 310" stroke={RED} sw={3.4} dur={0.6} />
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={76} y={260} size={13} fill={RED} weight={700} anchor="start">
          {t("directors: o/p activating (–OH, –NH2, –CH3)", "directors: o/p activating (–OH, –NH2, –CH3)")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.5)}>
        <T x={76} y={284} size={13} fill={RED} weight={700} anchor="start">
          {t("halogens o/p but deactivating · meta deactivating (–NO2, –COOH)", "halogens o/p par deactivating · meta deactivating (–NO2, –COOH)")}
        </T>
      </Fade>

      {/* beat 6 — the two orders */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={345} size={14} fill={INK} weight={700}>
          {t("halogen reactivity: F2 > Cl2 > Br2 > I2", "halogen reactivity: F2 > Cl2 > Br2 > I2")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.9)}>
        <T x={540} y={375} size={14} fill={INK} weight={700}>
          {t("H replacement: 3° > 2° > 1°", "H replacement: 3° > 2° > 1°")}
        </T>
      </Fade>

      {/* beat 7 — closing mnemonics, red */}
      <Draw on={beat >= 7} delay={dl(7, 0.3)} d="M 60 410 L 60 500" stroke={RED} sw={3.4} dur={0.7} />
      <Fade on={beat >= 7} delay={dl(7, 1)}>
        <T x={76} y={432} size={15} fill={RED} weight={800} anchor="start">
          {t("“Staggered = Spread = Stable”", "“Staggered = Spread = Stable”")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.5)}>
        <T x={76} y={462} size={15} fill={RED} weight={800} anchor="start">
          {t("“Br Breaks the Rule”", "“Br Breaks the Rule”")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 2)}>
        <T x={76} y={492} size={15} fill={RED} weight={800} anchor="start">
          {t("“Aromatic Substitutes, never Adds”", "“Aromatic Substitutes, never Adds”")}
        </T>
      </Fade>
    </Scene>
  );
}
