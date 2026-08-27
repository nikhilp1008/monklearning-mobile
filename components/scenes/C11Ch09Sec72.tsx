/**
 * C11 Ch09 · Section 72 — "Activating, deactivating, and the halogen exception"
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 9.9, 20.39, 31.32, 45.65, 58.45, 72.87]):
 *  0 heading · 1 activating o/p list (green) · 2 deactivating meta list
 *  (amber) · 3 RED: halogens are the exception · 4 rule of thumb ·
 *  5 Friedel-Crafts fails on deactivated rings · 6 alkylation's extra
 *  problems, acylation avoids both
 *
 * Layout plan — two columns y140-200, red halogen block y240-310:
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, AMBER_DARK, GREEN, INK, MUTED, RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch09Sec72({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={62} size={23} fill={RED} script>
          {t("activating, deactivating, and the halogen exception", "activating, deactivating, aur halogen exception")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={92} size={15} fill={INK} weight={700}>
          {t("two effects, sometimes pulling opposite ways", "do effects, kabhi-kabhi opposite direction mein khinchte")}
        </T>
      </Fade>

      {/* beat 1 — activating o/p list */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={60} y={140} size={16} fill={GREEN} weight={800} anchor="start">
          {t("Activating (o/p-directing)", "Activating (o/p-directing)")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={60} y={172} size={14} fill={INK} anchor="start">
          –OH, –NH2, –OR, –CH3 {t("and other alkyls", "aur baaki alkyls")}
        </T>
      </Fade>

      {/* beat 2 — deactivating meta list */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={620} y={140} size={16} fill={AMBER_DARK} weight={800} anchor="start">
          {t("Deactivating (meta-directing)", "Deactivating (meta-directing)")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={620} y={172} size={14} fill={INK} anchor="start">
          –NO2, –COOH, –CHO, –SO3H, –CN
        </T>
      </Fade>

      {/* beat 3 — the halogen exception, RED */}
      <Draw on={beat >= 3} delay={dl(3, 0.3)} d="M 60 220 L 60 290" stroke={RED} sw={3.4} dur={0.6} />
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={76} y={242} size={16} fill={RED} weight={800} anchor="start">
          {t("halogens are the exception", "halogens exception hain")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <T x={76} y={272} size={14} fill={RED} script anchor="start">
          {t("deactivating (via −I) yet still o/p-directing (via +R)", "deactivating (−I se) phir bhi o/p-directing (+R se)")}
        </T>
      </Fade>

      {/* beat 4 — rule of thumb */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={355} size={15} fill={INK} weight={700}>
          {t("donors activate & send o/p · withdrawers deactivate & send meta", "donors activate karte, o/p bhejte · withdrawers deactivate, meta bhejte")}
        </T>
      </Fade>

      {/* beat 5 — Friedel-Crafts practical footnote */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={400} size={14} fill={INK}>
          {t("Friedel-Crafts fails on strongly deactivated rings (e.g. nitrobenzene)", "Friedel-Crafts strongly deactivated rings par fail hota (jaise nitrobenzene)")}
        </T>
      </Fade>

      {/* beat 6 — alkylation's extra problems */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={434} size={13} fill={MUTED} script>
          {t("alkylation also suffers polyalkylation and carbocation rearrangement — acylation avoids both", "alkylation mein polyalkylation aur carbocation rearrangement bhi hota — acylation dono se bacha leta")}
        </T>
      </Fade>
    </Scene>
  );
}
