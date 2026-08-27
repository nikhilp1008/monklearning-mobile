/**
 * C11 Ch09 · Section 69 — "Five substitutions II: sulphonation and Friedel-Crafts"
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 4.54, 15.02, 19.87, 29.52, 33.19, 43.18]):
 *  0 heading · 1 (a) sulphonation: description · 2 formula (reversible) ·
 *  3 (b) FC alkylation: description · 4 formula · 5 (c) FC acylation:
 *  description · 6 RED formula + acylation cleaner than alkylation
 *
 * Layout plan — three labeled rows y128 / y225 / y322, red block y360-430:
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch09Sec69({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={62} size={23} fill={RED} script>
          {t("five substitutions II: sulphonation and Friedel-Crafts", "five substitutions II: sulphonation aur Friedel-Crafts")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={94} size={15} fill={INK} weight={700}>
          {t("the remaining three named reactions", "baaki teen named reactions")}
        </T>
      </Fade>

      {/* beat 1-2 — sulphonation */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={60} y={132} size={16} fill={INK} weight={800} anchor="start">
          {t("(a) Sulphonation", "(a) Sulphonation")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={540} y={132} size={13} fill={INK}>
          {t("benzene + oleum → benzenesulphonic acid, electrophile SO3", "benzene + oleum → benzenesulphonic acid, electrophile SO3")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={162} size={14} fill={INK} weight={700}>
          C6H6 + H2SO4(oleum) ⇌ C6H5SO3H + H2O
        </T>
      </Fade>

      {/* beat 3-4 — FC alkylation */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={60} y={225} size={16} fill={INK} weight={800} anchor="start">
          {t("(b) Friedel-Crafts alkylation", "(b) Friedel-Crafts alkylation")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.9)}>
        <T x={540} y={225} size={13} fill={INK}>
          {t("benzene + RCl / anhyd. AlCl3, electrophile R⁺", "benzene + RCl / anhyd. AlCl3, electrophile R⁺")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={255} size={14} fill={INK} weight={700}>
          C6H6 + CH3Cl → C6H5CH3 + HCl  (anhyd. AlCl3)
        </T>
      </Fade>

      {/* beat 5 — FC acylation */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={60} y={318} size={16} fill={INK} weight={800} anchor="start">
          {t("(c) Friedel-Crafts acylation", "(c) Friedel-Crafts acylation")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.9)}>
        <T x={540} y={318} size={13} fill={INK}>
          {t("benzene + RCOCl / anhyd. AlCl3, electrophile RCO⁺", "benzene + RCOCl / anhyd. AlCl3, electrophile RCO⁺")}
        </T>
      </Fade>

      {/* beat 6 — the red formula + note */}
      <Draw on={beat >= 6} delay={dl(6, 0.3)} d="M 60 355 L 60 445" stroke={RED} sw={3.4} dur={0.7} />
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={76} y={378} size={15} fill={RED} weight={700} anchor="start">
          C6H6 + CH3COCl → acetophenone  (AlCl3)
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={76} y={408} size={14} fill={RED} script anchor="start">
          {t("cleaner than alkylation — no rearrangement", "alkylation se saaf — rearrangement nahi hota")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={76} y={434} size={14} fill={RED} script anchor="start">
          {t("the ketone product is deactivated, so it stops here", "ketone product deactivated hai, yahin ruk jaata")}
        </T>
      </Fade>
    </Scene>
  );
}
