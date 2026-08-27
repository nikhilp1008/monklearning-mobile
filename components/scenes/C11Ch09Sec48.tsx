/**
 * C11 Ch09 · Section 48 — "Preparing alkynes: two routes"
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 7.51, 14.68, 26.97, 35.93, 41.47, 50.09, 60.5]):
 *  0 heading · 1 (a) calcium carbide, industrial · 2 chain: CaCO3->CaO->
 *  CaC2->C2H2 · 3 limestone->quicklime->carbide->ethyne on water · 4 (b)
 *  from vicinal dihalides: two eliminations · 5 alc. KOH removes 1st HX ->
 *  vinyl halide · 6 NaNH2 removes 2nd HX -> triple bond · 7 RED: match base
 *  to difficulty
 *
 * Layout plan — chain row y185, elimination row y320:
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, RED,
  Scene,
} from '@/components/scenes/kit';
import { ReactionArrow } from "./chem-kit";

export default function C11Ch09Sec48({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={62} size={26} fill={RED} script>
          {t("preparing alkynes: two routes", "alkynes banana: do routes")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={92} size={15} fill={INK} weight={700}>
          {t("two routes to an alkyne", "alkyne tak pahunchne ke do routes")}
        </T>
      </Fade>

      {/* beat 1 — route a label */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={60} y={125} size={16} fill={INK} weight={800} anchor="start">
          {t("(a) Calcium carbide — industrial", "(a) Calcium carbide — industrial")}
        </T>
      </Fade>

      {/* beat 2 — the chain */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={70} y={185} size={14} fill={INK} weight={700} anchor="start">CaCO3</T>
      </Fade>
      <ReactionArrow on={beat >= 2} delay={dl(2, 0.6)} x1={140} x2={225} y={180} over="Δ" color={INK} />
      <Fade on={beat >= 2} delay={dl(2, 1.1)}>
        <T x={235} y={185} size={14} fill={INK} weight={700} anchor="start">CaO</T>
      </Fade>
      <ReactionArrow on={beat >= 2} delay={dl(2, 1.4)} x1={290} x2={375} y={180} over="+3C" color={INK} />
      <Fade on={beat >= 2} delay={dl(2, 1.9)}>
        <T x={385} y={185} size={14} fill={INK} weight={700} anchor="start">CaC2</T>
      </Fade>
      <ReactionArrow on={beat >= 2} delay={dl(2, 2.2)} x1={450} x2={555} y={180} over={t("+2H2O", "+2H2O")} color={INK} />
      <Fade on={beat >= 2} delay={dl(2, 2.7)}>
        <T x={565} y={185} size={14} fill={INK} weight={700} anchor="start">C2H2</T>
      </Fade>

      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={230} size={14} fill={INK} script>
          {t("limestone → quick lime → carbide → ethyne on contact with water", "limestone → quick lime → carbide → paani se ethyne")}
        </T>
      </Fade>

      {/* beat 4 — route b label */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={60} y={280} size={16} fill={INK} weight={800} anchor="start">
          {t("(b) From vicinal dihalides — two eliminations", "(b) Vicinal dihalides se — do eliminations")}
        </T>
      </Fade>

      {/* beat 5 — first elimination */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={175} y={325} size={15} fill={INK} weight={700} anchor="start">
          {t("dihalide", "dihalide")}
        </T>
      </Fade>
      <ReactionArrow on={beat >= 5} delay={dl(5, 1)} x1={280} x2={410} y={320} over={t("alc. KOH", "alc. KOH")} color={INK} />
      <Fade on={beat >= 5} delay={dl(5, 1.8)}>
        <T x={430} y={325} size={15} fill={INK} weight={700} anchor="start">
          {t("vinyl halide", "vinyl halide")}
        </T>
      </Fade>

      {/* beat 6 — second elimination */}
      <ReactionArrow on={beat >= 6} delay={dl(6, 0.3)} x1={600} x2={730} y={320} over="NaNH2" color={INK} />
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={750} y={325} size={16} fill={INK} weight={800} anchor="start">
          {t("triple bond!", "triple bond!")}
        </T>
      </Fade>

      {/* beat 7 — match base to difficulty */}
      <Draw on={beat >= 7} delay={dl(7, 0.3)} d="M 60 360 L 60 396" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 1)}>
        <T x={76} y={382} size={16} fill={RED} script anchor="start">
          {t("match base to difficulty: alc. KOH first, stronger NaNH2 second", "base ko difficulty se match karo: pehle alc. KOH, phir strong NaNH2")}
        </T>
      </Fade>
    </Scene>
  );
}
