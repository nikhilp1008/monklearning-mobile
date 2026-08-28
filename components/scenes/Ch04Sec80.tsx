/**
 * Ch04 · Section 80 — "Now gravity lies in the plane, so the speed is never constant"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 22.78, 47.36, 72.19, 90.11, 114.94, 139.78, 162.13]):
 *  0 title
 *  1 diagram (left): vertical circle, T & mg arrows at top and bottom, caption
 *  2 text (right): horizontal circles had gravity ⊥ plane · vertical: gravity IN the plane
 *  3 text (right): speed varies — max at bottom, min at top
 *  4 formula (right): bottom T−mg=mv²/r · top T+mg=mv²/r
 *  5 red margin: bottom opposes (hardest), top cooperates (pulls less, even zero)
 *  6 formula box: v²_bottom = v²_top + 4gr
 *  7 closing: rises height 2r, KE→PE is where 4gr comes from
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl 52
 *  L fig | circle c(280,200) r90 · T arr top(280,110→138) lbl(270,150) · mg arr top(310,112→140) lbl(320,150) ·
 *    T arr bot(280,290→262) lbl(270,255) · mg arr bot(310,288→320) lbl(320,315) · caption cx280 bl 345
 *  R col x580..1020 | b2 st bl 110/134 · b3 st bl 170/194 · b4 st bl 230/254
 *  b5 | bar x66 y380..450 · lines st x84 bl 400 / 426
 *  b6 box x260..820 y470..514 bl 498
 *  b7 line cx540 bl 548
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, arrowD, INK, MUTED, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

const circleD = (cx: number, cy: number, r: number) =>
  `M ${cx - r} ${cy} a ${r} ${r} 0 1 0 ${2 * r} 0 a ${r} ${r} 0 1 0 ${-2 * r} 0`;

export default function Ch04Sec80({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={52} size={18} fill={INK} script>
          {t(
            "gravity now lies in the plane — the speed is never constant",
            "gravity ab plane mein hai — speed kabhi constant nahi"
          )}
        </T>
      </Fade>

      {/* beat 1 — the figure */}
      <Draw on={beat >= 1} delay={dl(1, 0.8)} d={circleD(280, 200, 90)} stroke={INK} sw={2.4} dur={1.2} />
      <Draw
        on={beat >= 1}
        delay={dl(1, 2.2)}
        d={arrowD(280, 110, 280, 138)}
        stroke={GREEN}
        sw={2.4}
        dur={0.3}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 2.6)}
        d={arrowD(310, 112, 310, 140)}
        stroke={RED}
        sw={2.4}
        dur={0.3}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 3)}
        d={arrowD(280, 290, 280, 262)}
        stroke={GREEN}
        sw={2.4}
        dur={0.3}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 3.4)}
        d={arrowD(310, 288, 310, 320)}
        stroke={RED}
        sw={2.4}
        dur={0.3}
      />
      <Fade on={beat >= 1} delay={dl(1, 4)}>
        <T x={270} y={150} size={11} fill={GREEN} weight={700} anchor="end">
          T
        </T>
        <T x={320} y={150} size={11} fill={RED} weight={700} anchor="start">
          mg
        </T>
        <T x={270} y={255} size={11} fill={GREEN} weight={700} anchor="end">
          T
        </T>
        <T x={320} y={315} size={11} fill={RED} weight={700} anchor="start">
          mg
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 4.8)}>
        <T x={280} y={345} size={11} fill={MUTED} script>
          {t(
            "at the top both forces point inward; at the bottom they oppose",
            "top par dono forces inward; bottom par wo virodh karti"
          )}
        </T>
      </Fade>

      {/* beat 2 — horizontal vs vertical */}
      <Fade on={beat >= 2} delay={dl(2, 1.5)}>
        <T x={580} y={110} size={13} fill={INK} script anchor="start">
          {t(
            "horizontal circles: gravity ⊥ the plane, speed constant",
            "horizontal circles: gravity plane ke ⊥, speed constant"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 7)}>
        <T x={580} y={134} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "vertical circle: gravity lies IN the plane",
            "vertical circle: gravity plane ke ANDAR"
          )}
        </T>
      </Fade>

      {/* beat 3 — speed varies */}
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <T x={580} y={170} size={13} fill={INK} script anchor="start">
          {t(
            "gravity speeds it up going down, slows it going up",
            "gravity neeche jaate tez, upar jaate dheemi karti"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 7)}>
        <T x={580} y={194} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "speed max at the BOTTOM, min at the TOP",
            "speed BOTTOM par max, TOP par min"
          )}
        </T>
      </Fade>

      {/* beat 4 — the two equations */}
      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <T x={580} y={230} size={14} fill={INK} weight={700} anchor="start">
          {t("bottom: T − mg = mv²⁄r", "bottom: T − mg = mv²⁄r")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 7)}>
        <T x={580} y={254} size={14} fill={INK} weight={700} anchor="start">
          {t("top: T + mg = mv²⁄r", "top: T + mg = mv²⁄r")}
        </T>
      </Fade>

      {/* beat 5 — oppose vs cooperate */}
      <Draw on={beat >= 5} delay={dl(5, 0.6)} d="M 66 380 v 70" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={84} y={400} size={14} fill={RED} script anchor="start">
          {t(
            "bottom: T and mg OPPOSE — the string works hardest here",
            "bottom: T aur mg VIRODH — string yahaan sabse kadi mehnat karti"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 7)}>
        <T x={84} y={426} size={14} fill={GREEN} script anchor="start">
          {t(
            "top: both COOPERATE — the string can pull less, even nothing at all",
            "top: dono SAATH dete — string kam khinch sakti, kabhi kuchh nahi"
          )}
        </T>
      </Fade>

      {/* beat 6 — the energy link */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.8)}
        d="M 260 470 h 560 q 12 0 12 12 v 22 q 0 12 -12 12 h -560 q -12 0 -12 -12 v -22 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.8}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 6} delay={dl(6, 1.8)}>
        <T x={540} y={498} size={16} fill={INK} weight={800}>
          v²_bottom = v²_top + 4gr
        </T>
      </Fade>

      {/* beat 7 — where 4gr comes from */}
      <Fade on={beat >= 7} delay={dl(7, 1.5)}>
        <T x={540} y={548} size={13} fill={AMBER_DARK} script>
          {t(
            "rises height 2r (the diameter) — KE→PE is exactly where 4gr comes from",
            "2r (vyaas) ki oonchai chadhta — KE→PE se hi 4gr aata hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
