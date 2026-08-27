/**
 * C11 Ch09 · Section 19 — "Wurtz product and its monochloro count" (JEE Main)
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 9.39, 25.17, 33.37, 41.3, 47.96, 64.26]):
 *  0 heading · 1 A = isobutyl bromide, IUPAC name · 2 Wurtz couples through
 *  CH2 ends · 3 boxed Wurtz equation · 4 product B: 2,5-dimethylhexane ·
 *  5 distinct H's: 4 methyls, 2 tertiary, 2 methylene · 6 RED: 3 types ⇒ 3
 *  monochloro products
 *
 * Layout plan:
 *  b1 | A line               | T mid | y130
 *  b2 | Wurtz couples line   | T mid | y162
 *  b3 | boxed equation       | Draw+T| box x140..940 y188..224 · text bl209
 *  b4 | product B line       | T mid | y262
 *  b5 | distinct H's line    | T mid | y296
 *  b6 | margin bar + red note| Draw+T| bar x60 y335..371 · text bl357
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch09Sec19({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={65} size={24} fill={RED} script>
          {t("Wurtz product and its monochloro count", "Wurtz product aur uska monochloro count")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={95} size={15} fill={INK} weight={700}>
          [JEE Main] {t("isobutyl bromide, Wurtz, then count products", "isobutyl bromide, Wurtz, phir products ginno")}
        </T>
      </Fade>

      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={540} y={130} size={15} fill={INK}>
          A = (CH3)2CH–CH2–Br  ({t("IUPAC: 1-bromo-2-methylpropane", "IUPAC: 1-bromo-2-methylpropane")})
        </T>
      </Fade>

      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={162} size={15} fill={INK}>
          {t("Wurtz couples two such groups through their CH2 ends", "Wurtz do groups ko unke CH2 ends se couple karta hai")}
        </T>
      </Fade>

      {/* beat 3 — the boxed Wurtz equation */}
      <Draw on={beat >= 3} delay={dl(3, 0.3)} d="M 140 188 H 940 V 224 H 140 Z" stroke={AMBER_DARK} sw={1.6} dur={0.6} />
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={540} y={209} size={13.5} fill={INK} weight={700}>
          2 (CH3)2CHCH2Br + 2Na → (CH3)2CHCH2CH2CH(CH3)2 + 2NaBr  (dry ether)
        </T>
      </Fade>

      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={262} size={17} fill={INK} weight={700}>
          {t("Product B: 2,5-dimethylhexane", "Product B: 2,5-dimethylhexane")}
        </T>
      </Fade>

      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={296} size={15} fill={INK}>
          {t("distinct H's: 4 equivalent methyls · 2 tertiary H (C2/C5) · 2 methylene (C3/C4)", "distinct H's: 4 equivalent methyls · 2 tertiary H (C2/C5) · 2 methylene (C3/C4)")}
        </T>
      </Fade>

      {/* beat 6 — the answer */}
      <Draw on={beat >= 6} delay={dl(6, 0.3)} d="M 60 335 L 60 371" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={76} y={357} size={17} fill={RED} script anchor="start">
          {t("three types ⇒ 3 monochloro products", "teen types ⇒ 3 monochloro products")}
        </T>
      </Fade>
    </Scene>
  );
}
