/**
 * C11 Ch09 · Section 21 — "Alkane pitfalls and pro-tips" (closes Alkanes)
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 7.08, 17.83, 28.76, 36.52, 47.7, 61.1]):
 *  0 heading · 1 TRAP 1: miscounting monochloro products · 2 RED pro-tip:
 *  count distinct H environments · 3 TRAP 2: swapping eclipsed/staggered ·
 *  4 pro-tip: staggered=spread=stable · 5 TRAP 3: Wurtz for unsymmetrical
 *  alkanes · 6 RED TRAP 4: two orders differ, tag which reactivity
 *
 * Layout plan:
 *  b1 | "TRAP 1" + desc      | T st  | x60/150 y130
 *  b2 | margin bar + red tip | Draw+T| bar x60 y150..182 · text bl170
 *  b3 | "TRAP 2" + desc      | T st  | x60/150 y222
 *  b4 | amber pro-tip line   | T mid | y252
 *  b5 | "TRAP 3" + desc      | T st  | x60/150 y294
 *  b6 | margin bar + red note| Draw+T| bar x60 y330..372 · text bl348/368
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch09Sec21({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={65} size={27} fill={RED} script>
          {t("alkane pitfalls and pro-tips", "alkane pitfalls aur pro-tips")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={97} size={16} fill={INK} weight={700}>
          {t("four traps that cost marks on alkanes", "chaar traps jo alkanes mein marks kaatte")}
        </T>
      </Fade>

      {/* beat 1 — trap 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={60} y={135} size={16} fill={AMBER_DARK} weight={800} anchor="start">TRAP 1</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={155} y={135} size={15} fill={INK} anchor="start">
          {t("miscounting monochloro products", "monochloro products galat ginna")}
        </T>
      </Fade>

      {/* beat 2 — red pro-tip */}
      <Draw on={beat >= 2} delay={dl(2, 0.3)} d="M 60 152 L 60 184" stroke={RED} sw={3.2} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 0.9)}>
        <T x={76} y={172} size={15} fill={RED} script anchor="start">
          {t("count distinct H environments — equivalent methyls collapse to one", "distinct H environments ginno — equivalent methyls ek mein simat jaate")}
        </T>
      </Fade>

      {/* beat 3 — trap 2 */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={60} y={225} size={16} fill={AMBER_DARK} weight={800} anchor="start">TRAP 2</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.9)}>
        <T x={155} y={225} size={15} fill={INK} anchor="start">
          {t("swapping eclipsed and staggered", "eclipsed aur staggered ko badal dena")}
        </T>
      </Fade>

      {/* beat 4 — pro-tip */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={258} size={15} fill={AMBER_DARK} script>
          {t("“Staggered = Spread = Stable”; eclipsed = 0° = max strain", "“Staggered = Spread = Stable”; eclipsed = 0° = max strain")}
        </T>
      </Fade>

      {/* beat 5 — trap 3 */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={60} y={300} size={16} fill={AMBER_DARK} weight={800} anchor="start">TRAP 3</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.9)}>
        <T x={155} y={300} size={15} fill={INK} anchor="start">
          {t("using Wurtz for unsymmetrical alkanes", "unsymmetrical alkanes ke liye Wurtz use karna")}
        </T>
      </Fade>

      {/* beat 6 — trap 4, red */}
      <Draw on={beat >= 6} delay={dl(6, 0.3)} d="M 60 340 L 60 392" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={76} y={360} size={16} fill={RED} weight={800} anchor="start">TRAP 4</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={76} y={382} size={15} fill={RED} script anchor="start">
          {t("two orders differ — tag which “reactivity” the question means", "do orders alag hain — tag karo kaunsa “reactivity” poocha hai")}
        </T>
      </Fade>
    </Scene>
  );
}
