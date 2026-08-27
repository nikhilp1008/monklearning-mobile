/**
 * C11 Ch09 · Section 50 — "Electrophilic addition I: hydrogen and halogens"
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 10.84, 18.35, 27.99, 33.45, 48.21, 55.89, 65.45]):
 *  0 heading: two π bonds means two additions · 1 unsymmetrical follows
 *  Markovnikov · 2 H2/Ni,Pd,Pt: alkyne→alkene→alkane · 3 formula chain ·
 *  4 stop at alkene: Lindlar→cis, Na/NH3→trans · 5 halogens add in 2 stages
 *  · 6 formula chain · 7 RED: why twice
 *
 * Layout plan — two chain rows y185 / y320:
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, RED,
  Scene,
} from '@/components/scenes/kit';
import { ReactionArrow } from "./chem-kit";

export default function C11Ch09Sec50({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={62} size={24} fill={RED} script>
          {t("electrophilic addition I: hydrogen and halogens", "electrophilic addition I: hydrogen aur halogens")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={92} size={15} fill={INK} weight={700}>
          {t("two π bonds means two additions", "do π bonds matlab do additions")}
        </T>
      </Fade>

      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={540} y={125} size={14} fill={INK}>
          {t("for unsymmetrical alkynes this follows Markovnikov's rule", "unsymmetrical alkynes ke liye yeh Markovnikov's rule follow karta")}
        </T>
      </Fade>

      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={158} size={14} fill={INK}>
          {t("dihydrogen over Ni/Pd/Pt: alkyne → alkene → alkane", "Ni/Pd/Pt par dihydrogen: alkyne → alkene → alkane")}
        </T>
      </Fade>

      {/* beat 3 — the H2 chain */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={70} y={200} size={14} fill={INK} weight={700} anchor="start">HC≡CH</T>
      </Fade>
      <ReactionArrow on={beat >= 3} delay={dl(3, 0.6)} x1={150} x2={240} y={195} over={t("H2, Pt", "H2, Pt")} color={INK} />
      <Fade on={beat >= 3} delay={dl(3, 1.2)}>
        <T x={250} y={200} size={14} fill={INK} weight={700} anchor="start">H2C=CH2</T>
      </Fade>
      <ReactionArrow on={beat >= 3} delay={dl(3, 1.6)} x1={355} x2={445} y={195} over="H2" color={INK} />
      <Fade on={beat >= 3} delay={dl(3, 2.1)}>
        <T x={455} y={200} size={14} fill={INK} weight={700} anchor="start">CH3–CH3</T>
      </Fade>

      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={245} size={14} fill={INK}>
          {t("stop at the alkene: Lindlar → cis; Na/liq. NH3 → trans", "alkene pe roko: Lindlar → cis; Na/liq. NH3 → trans")}
        </T>
      </Fade>

      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={278} size={14} fill={INK}>
          {t("halogens add in two stages: dihalo-alkene, then tetrahalide", "halogens do stages mein add hote: dihalo-alkene, phir tetrahalide")}
        </T>
      </Fade>

      {/* beat 6 — the halogen chain */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={70} y={330} size={14} fill={INK} weight={700} anchor="start">HC≡CH</T>
      </Fade>
      <ReactionArrow on={beat >= 6} delay={dl(6, 0.6)} x1={150} x2={250} y={325} over="Br2" color={INK} />
      <Fade on={beat >= 6} delay={dl(6, 1.2)}>
        <T x={260} y={330} size={14} fill={INK} weight={700} anchor="start">CHBr=CHBr</T>
      </Fade>
      <ReactionArrow on={beat >= 6} delay={dl(6, 1.6)} x1={410} x2={510} y={325} over="Br2" color={INK} />
      <Fade on={beat >= 6} delay={dl(6, 2.1)}>
        <T x={520} y={330} size={14} fill={INK} weight={700} anchor="start">CHBr2–CHBr2</T>
      </Fade>

      {/* beat 7 — why twice */}
      <Draw on={beat >= 7} delay={dl(7, 0.3)} d="M 60 355 L 60 410" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 1)}>
        <T x={76} y={373} size={14} fill={RED} script anchor="start">
          {t("why twice? first addition makes a double bond;", "do baar kyun? pehla addition double bond banata;")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={76} y={400} size={14} fill={RED} script anchor="start">
          {t("the second saturates it", "doosra usse saturate karta")}
        </T>
      </Fade>
    </Scene>
  );
}
