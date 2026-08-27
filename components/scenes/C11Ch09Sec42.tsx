/**
 * C11 Ch09 · Section 42 — "Pull the carbons closer, add a third bond"
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 14.08, 21.76, 27.82, 35.5, 47.27, 62.04]):
 *  0 ethyne structure drawn (H-C≡C-H) · 1 CnH2n-2 chip · 2 ethyne = acetylene
 *  · 3 oxy-acetylene torch welds steel · 4 1σ + 2π label · 5 two dashed
 *  π-cloud lobes (cylinder) · 6 RED: 2π ⇒ can add TWO molecules
 *
 * Layout plan:
 *  b0 | H-C≡C-H skeleton   | Draw+T | x100..280 y190
 *  b1 | chip CnH2n-2        | Chip   | x340..430 y170..206
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, AMBER_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';
import { tripleBondD, bondD } from "./chem-kit";

export default function C11Ch09Sec42({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={65} size={25} fill={RED} script>
          {t("pull the carbons closer, add a third bond", "carbons ko aur paas khincho, teesra bond jodo")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={95} size={15} fill={INK} weight={700}>
          {t("the triple bond: tightest link in the chapter", "triple bond: chapter ka sabse tight link")}
        </T>
      </Fade>

      {/* beat 0 — the ethyne skeleton */}
      <Draw on={beat >= 0} delay={dl(0, 1)} d={bondD(105, 190, 145, 190)} stroke={INK} sw={2} dur={0.3} />
      <Draw on={beat >= 0} delay={dl(0, 1.4)} d={tripleBondD(150, 190, 230, 190)} stroke={INK} sw={2.2} dur={0.6} />
      <Draw on={beat >= 0} delay={dl(0, 2.1)} d={bondD(235, 190, 275, 190)} stroke={INK} sw={2} dur={0.3} />
      <Fade on={beat >= 0} delay={dl(0, 2.5)}>
        <T x={90} y={195} size={14} fill={INK}>H</T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 2.65)}>
        <T x={290} y={195} size={14} fill={INK}>H</T>
      </Fade>

      {/* beat 1 — general formula */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <Chip x={340} y={170} w={100} h={36} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={18} script={false}>
          CnH2n-2
        </Chip>
      </Fade>

      {/* beat 2 — ethyne / acetylene */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={180} y={230} size={14} fill={INK} weight={700}>
          {t("ethyne (acetylene)", "ethyne (acetylene)")}
        </T>
      </Fade>

      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={280} size={15} fill={INK}>
          {t("burned in an oxy-acetylene torch — hot enough to weld steel", "oxy-acetylene torch mein jalta — steel weld karne jitna garam")}
        </T>
      </Fade>

      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={313} size={16} fill={INK} weight={700}>
          {t("built from 1 σ bond + TWO weaker π bonds", "1 σ bond + DO weaker π bonds se bana")}
        </T>
      </Fade>

      {/* beat 5 — two pi clouds as a cylinder */}
      <Draw on={beat >= 5} delay={dl(5, 0.3)} d="M 120 165 A 70 20 0 1 1 259.9 164.9" stroke={AMBER_DARK} sw={1.6} dur={0.6} />
      <Draw on={beat >= 5} delay={dl(5, 0.9)} d="M 120 215 A 70 20 0 1 0 259.9 215.1" stroke={AMBER_DARK} sw={1.6} dur={0.6} />
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={190} y={148} size={12} fill={AMBER_DARK} script>
          {t("cylinder of two π clouds", "do π clouds ka cylinder")}
        </T>
      </Fade>

      {/* beat 6 — double-barrelled reactivity */}
      <Draw on={beat >= 6} delay={dl(6, 0.3)} d="M 60 355 L 60 391" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={76} y={377} size={16} fill={RED} script anchor="start">
          {t("two π bonds to spend ⇒ can add TWO molecules of a reagent", "kharch karne ko do π bonds ⇒ reagent ke DO molecules add ho sakte")}
        </T>
      </Fade>
    </Scene>
  );
}
