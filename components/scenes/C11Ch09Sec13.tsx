/**
 * C11 Ch09 · Section 13 — "Free-radical halogenation: the three-step chain"
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 18.94, 28.07, 38.06, 50.43, 61.7, 73.81, 85.5]):
 *  0 heading · 1 Step1 Initiation label · 2 Cl-Cl --hv--> Cl•+Cl• (single-
 *  barb curved arrows on the bond) · 3 Step2 Propagation label · 4 two
 *  propagation equations · 5 loop icon: cycle repeats · 6 Step3 Termination:
 *  2•CH3 -> C2H6 · 7 RED selectivity 3°>2°>1°
 *
 * Layout plan:
 *  b1 | "Step 1 — Initiation"  | T st  | x60 y130
 *  b2 | Cl-Cl bond + arrows    | Draw  | x165..215 y175 · reaction arrow x260..340
 *  b2 | product "Cl• + Cl•"    | T st  | x430 y185
 *  b3 | "Step 2 — Propagation" | T st  | x60 y230
 *  b4 | 2 equation lines       | T mid | y265 / y295
 *  b5 | loop icon + caption    | Draw+T| c(850,280) r25 · caption y320
 *  b6 | "Step 3 — Termination" + eq | T st+mid | x60 y350 · eq y385
 *  b7 | margin bar + red note  | Draw+T| bar x60 y420..460 · text bl440
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  INK,
  AMBER_DARK,
  RED,
  Scene,
} from '@/components/scenes/kit';
import { bondD, curvedArrowD, ReactionArrow } from "./chem-kit";

export default function C11Ch09Sec13({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={65} size={25} fill={RED} script>
          {t("free-radical halogenation: the three-step chain", "free-radical halogenation: teen-step chain")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={95} size={15} fill={INK}>
          {t("substitution by a radical chain in sunlight or UV", "sunlight ya UV mein radical chain se substitution")}
        </T>
      </Fade>

      {/* beat 1 — initiation */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={60} y={135} size={17} fill={INK} weight={800} anchor="start">
          {t("Step 1 — Initiation", "Step 1 — Initiation")}
        </T>
      </Fade>

      {/* beat 2 — homolytic split of Cl2 */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={150} y={182} size={17} fill={INK} weight={700}>Cl</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.7)} d={bondD(165, 177, 215, 177)} stroke={INK} sw={2} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={230} y={182} size={17} fill={INK} weight={700}>Cl</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.5)} d={curvedArrowD(190, 177, 168, 155, -16, true)} stroke={RED} sw={1.8} dur={0.5} />
      <Draw on={beat >= 2} delay={dl(2, 2)} d={curvedArrowD(190, 177, 212, 155, 16, true)} stroke={RED} sw={1.8} dur={0.5} />
      <ReactionArrow on={beat >= 2} delay={dl(2, 2.6)} x1={280} x2={370} y={177} over="hν" color={INK} />
      <Fade on={beat >= 2} delay={dl(2, 3.4)}>
        <T x={400} y={182} size={17} fill={INK} weight={700} anchor="start">
          Cl• + Cl•
        </T>
      </Fade>

      {/* beat 3 — propagation */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={60} y={230} size={17} fill={INK} weight={800} anchor="start">
          {t("Step 2 — Propagation", "Step 2 — Propagation")}
        </T>
      </Fade>

      {/* beat 4 — the two propagation equations */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={265} size={16} fill={INK} weight={700}>
          Cl• + CH4 → •CH3 + HCl
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.2)}>
        <T x={540} y={297} size={16} fill={INK} weight={700}>
          •CH3 + Cl2 → CH3Cl + Cl•
        </T>
      </Fade>

      {/* beat 5 — the cycle repeats */}
      <Draw on={beat >= 5} delay={dl(5, 0.3)} d="M 830 280 A 25 25 0 1 1 862 259 M 855 251 L 862 259 L 868 249" stroke={AMBER_DARK} sw={2} dur={0.7} />
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        <T x={845} y={325} size={13} fill={AMBER_DARK} script>
          {t("Cl• regenerated — chain repeats", "Cl• regenerate — chain repeat")}
        </T>
      </Fade>

      {/* beat 6 — termination */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={60} y={352} size={17} fill={INK} weight={800} anchor="start">
          {t("Step 3 — Termination", "Step 3 — Termination")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.1)}>
        <T x={540} y={387} size={16} fill={INK} weight={700}>
          2 •CH3 → C2H6
        </T>
      </Fade>

      {/* beat 7 — selectivity */}
      <Draw on={beat >= 7} delay={dl(7, 0.3)} d="M 60 420 L 60 456" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 1)}>
        <T x={76} y={442} size={16} fill={RED} script anchor="start">
          {t(
            "selectivity: 3° > 2° > 1° — the 3° radical is most stabilised",
            "selectivity: 3° > 2° > 1° — 3° radical sabse stabilised hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
