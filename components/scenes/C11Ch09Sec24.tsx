/**
 * C11 Ch09 · Section 24 — "cis and trans: a plank, not a swivel"
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 9.05, 18.52, 30.12, 45.14, 55.72, 66.39]):
 *  0 heading: rigid plank · 1 π locks rotation, snap the rubber band ·
 *  2 two different groups freeze cis/trans · 3 diagram: cis vs trans
 *  but-2-ene · 4 cis dipoles add, trans often cancel · 5 cis≈0.33D, trans
 *  ~non-polar · 6 RED gate: needs 2 DIFFERENT groups per carbon
 *
 * Layout plan — cis structure centered x175, trans centered x480, both
 *  bond-row y270:
 *  b3 | cis title + bond + 4 subs + caption   | Draw+T | x100..250 y230..335
 *  b3 | trans title + bond + 4 subs + caption | Draw+T | x405..555 y230..335
 *  b4 | polarity compare line   | T mid | y365
 *  b5 | dipole values line      | T mid | y395
 *  b6 | margin bar + red note   | Draw+T| bar x60 y428..464 · text bl450
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';
import { bondD, doubleBondD } from "./chem-kit";

export default function C11Ch09Sec24({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={65} size={25} fill={RED} script>
          {t("cis and trans: a plank, not a swivel", "cis aur trans: ek plank, swivel nahi")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={97} size={15} fill={INK} weight={700}>
          {t("picture the double bond as a rigid plank", "double bond ko ek rigid plank ki tarah socho")}
        </T>
      </Fade>

      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={540} y={128} size={15} fill={INK}>
          {t("the π bond locks rotation — you'd have to snap the rubber band", "π bond rotation lock kar deta — rubber band todni padegi")}
        </T>
      </Fade>

      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={158} size={15} fill={INK}>
          {t("two different groups on each end-carbon freeze cis or trans", "har end-carbon pe do alag groups cis ya trans mein freeze karte")}
        </T>
      </Fade>

      {/* beat 3 — cis vs trans but-2-ene */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={175} y={222} size={15} fill={GREEN} weight={700}>cis-but-2-ene</T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 0.6)} d={doubleBondD(140, 270, 210, 270)} stroke={INK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 3} delay={dl(3, 1.1)} d={bondD(140, 270, 110, 240)} stroke={INK} sw={2} dur={0.3} />
      <Draw on={beat >= 3} delay={dl(3, 1.3)} d={bondD(140, 270, 110, 300)} stroke={INK} sw={2} dur={0.3} />
      <Draw on={beat >= 3} delay={dl(3, 1.5)} d={bondD(210, 270, 240, 240)} stroke={INK} sw={2} dur={0.3} />
      <Draw on={beat >= 3} delay={dl(3, 1.7)} d={bondD(210, 270, 240, 300)} stroke={INK} sw={2} dur={0.3} />
      <Fade on={beat >= 3} delay={dl(3, 1.9)}>
        <T x={95} y={232} size={12} fill={INK}>CH3</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2)}>
        <T x={95} y={312} size={12} fill={INK}>H</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.1)}>
        <T x={248} y={232} size={12} fill={INK}>CH3</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.2)}>
        <T x={253} y={312} size={12} fill={INK}>H</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.4)}>
        <T x={175} y={332} size={12} fill={GREEN} script>{t("both CH3 same side", "dono CH3 ek hi taraf")}</T>
      </Fade>

      <Fade on={beat >= 3} delay={dl(3, 2.6)}>
        <T x={480} y={222} size={15} fill={RED} weight={700}>trans-but-2-ene</T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 3)} d={doubleBondD(445, 270, 515, 270)} stroke={INK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 3} delay={dl(3, 3.4)} d={bondD(445, 270, 415, 240)} stroke={INK} sw={2} dur={0.3} />
      <Draw on={beat >= 3} delay={dl(3, 3.6)} d={bondD(445, 270, 415, 300)} stroke={INK} sw={2} dur={0.3} />
      <Draw on={beat >= 3} delay={dl(3, 3.8)} d={bondD(515, 270, 545, 240)} stroke={INK} sw={2} dur={0.3} />
      <Draw on={beat >= 3} delay={dl(3, 4)} d={bondD(515, 270, 545, 300)} stroke={INK} sw={2} dur={0.3} />
      <Fade on={beat >= 3} delay={dl(3, 4.2)}>
        <T x={400} y={312} size={12} fill={INK}>CH3</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 4.3)}>
        <T x={400} y={232} size={12} fill={INK}>H</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 4.4)}>
        <T x={553} y={232} size={12} fill={INK}>CH3</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 4.5)}>
        <T x={558} y={312} size={12} fill={INK}>H</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 4.7)}>
        <T x={480} y={332} size={12} fill={RED} script>{t("CH3 opposite sides", "CH3 opposite taraf")}</T>
      </Fade>

      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={365} size={15} fill={INK}>
          {t("cis = bond dipoles add (more polar); trans = often cancel (~0 net)", "cis = bond dipoles jud jaate (zyada polar); trans = aksar cancel (~0 net)")}
        </T>
      </Fade>

      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={397} size={15} fill={INK}>
          {t("cis-but-2-ene dipole ≈ 0.33 D; trans essentially non-polar", "cis-but-2-ene dipole ≈ 0.33 D; trans lagbhag non-polar")}
        </T>
      </Fade>

      {/* beat 6 — the gate */}
      <Draw on={beat >= 6} delay={dl(6, 0.3)} d="M 60 428 L 60 464" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={76} y={450} size={16} fill={RED} script anchor="start">
          {t(
            "gate: cis-trans needs two DIFFERENT groups on each doubly-bonded carbon",
            "gate: cis-trans ke liye har carbon pe do ALAG groups chahiye"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
