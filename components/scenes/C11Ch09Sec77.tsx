/**
 * C11 Ch09 · Section 77 — "Chlorobenzene: slow yet ortho/para" (JEE Advanced worked)
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 14.68, 22.44, 36.27, 44.89, 64.6, 75.86]):
 *  0 heading + tag · 1 chlorine has two opposing effects · 2 −I withdraws
 *  σ-density, destabilises cation everywhere · 3 so less reactive
 *  (deactivating) · 4 +R: lone pairs stabilise o/p arenium ion · 5 the
 *  two effects act on different things · 6 RED: −I=rate, +R=position,
 *  no contradiction
 *
 * Layout plan — left column −I (red) x60, right column +R (green) x620:
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, GREEN, INK, RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch09Sec77({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={62} size={23} fill={RED} script>
          {t("chlorobenzene: slow yet ortho/para", "chlorobenzene: slow phir bhi ortho/para")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={94} size={14} fill={INK} weight={700}>[JEE Advanced]</T>
      </Fade>

      {/* beat 1 — two opposing effects */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={540} y={128} size={15} fill={INK} weight={700}>
          {t("chlorine exerts two opposing electronic effects at once", "chlorine ek saath do opposing electronic effects dikhaata")}
        </T>
      </Fade>

      {/* beat 2 — -I effect, left column */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={60} y={175} size={16} fill={RED} weight={800} anchor="start">
          −I {t("(inductive)", "(inductive)")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.9)}>
        <T x={60} y={205} size={13} fill={INK} anchor="start">
          {t("withdraws σ-density, destabilises the", "σ-density khinch leta, cation ko")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.1)}>
        <T x={60} y={225} size={13} fill={INK} anchor="start">
          {t("cation at every position", "har position par destabilise karta")}
        </T>
      </Fade>

      {/* beat 3 — deactivating conclusion */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={60} y={258} size={14} fill={RED} weight={700} anchor="start">
          ⇒ {t("less reactive than benzene (deactivating)", "benzene se kam reactive (deactivating)")}
        </T>
      </Fade>

      {/* beat 4 — +R effect, right column */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={620} y={175} size={16} fill={GREEN} weight={800} anchor="start">
          +R {t("(resonance)", "(resonance)")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.9)}>
        <T x={620} y={205} size={13} fill={INK} anchor="start">
          {t("Cl's lone pairs stabilise the o/p", "Cl ke lone pairs o/p arenium ion")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.1)}>
        <T x={620} y={225} size={13} fill={INK} anchor="start">
          {t("arenium ion specifically", "ko specifically stabilise karte")}
        </T>
      </Fade>

      {/* beat 5 — the crucial insight */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={295} size={15} fill={INK} weight={700}>
          {t("the two effects act on different things — speed vs. position", "dono effects alag cheezon par kaam karte — speed vs. position")}
        </T>
      </Fade>

      {/* beat 6 — the resolution */}
      <Draw on={beat >= 6} delay={dl(6, 0.3)} d="M 60 340 L 60 410" stroke={RED} sw={3.4} dur={0.6} />
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={76} y={362} size={15} fill={RED} weight={700} anchor="start">
          {t("−I controls the RATE (deactivation)", "−I RATE control karta (deactivation)")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.5)}>
        <T x={76} y={387} size={15} fill={RED} weight={700} anchor="start">
          {t("+R controls the ORIENTATION (o/p)", "+R ORIENTATION control karta (o/p)")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={76} y={408} size={13} fill={RED} script anchor="start">
          {t("no real contradiction", "koi real contradiction nahi")}
        </T>
      </Fade>
    </Scene>
  );
}
