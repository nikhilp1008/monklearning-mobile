/**
 * C11 Ch09 · Section 73 — "Carcinogenicity and toxicity"
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 5.03, 15.96, 25.86, 36.1, 47.27, 56.92]):
 *  0 heading · 1 combustion→PAH box chain appears · 2 sources caption ·
 *  3 PAH→metabolised→DNA-damage chain extends · 4 indirect-damage caption ·
 *  5 benzene itself is toxic · 6 RED: real-world reason it matters
 *
 * Layout plan — 4-box chain at cy=310, boxes 150 wide, arrows between:
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, RED,
  Scene,
} from '@/components/scenes/kit';
import { reactionArrowD } from "./chem-kit";

export default function C11Ch09Sec73({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const cy = 310, bh = 50;
  const box = (x: number, w: number) => `M ${x} ${cy - bh / 2} H ${x + w} V ${cy + bh / 2} H ${x} Z`;

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={62} size={26} fill={RED} script>
          {t("carcinogenicity and toxicity", "carcinogenicity aur toxicity")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={94} size={15} fill={INK} weight={700}>
          {t("the chapter closes on a sober note", "chapter ek sober note par khatam hota")}
        </T>
      </Fade>

      {/* beat 1 — combustion -> PAH */}
      <Draw on={beat >= 1} delay={dl(1, 0.3)} d={box(60, 170)} stroke={INK} sw={2} dur={0.6} fill="none" />
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={145} y={cy + 4} size={12} fill={INK}>
          {t("incomplete combustion", "incomplete combustion")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.1)} d={reactionArrowD(240, 300, cy)} stroke={INK} sw={2} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 1.3)} d={box(310, 130)} stroke={INK} sw={2} dur={0.6} fill="none" />
      <Fade on={beat >= 1} delay={dl(1, 1.8)}>
        <T x={375} y={cy + 6} size={16} fill={INK} weight={800}>PAH</T>
      </Fade>

      {/* beat 2 — sources + example caption */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={375} y={cy + 32} size={11} fill={MUTED} script>
          {t("e.g. benzo[a]pyrene", "jaise benzo[a]pyrene")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.7)}>
        <T x={540} y={400} size={13} fill={INK}>
          {t("sources: tobacco smoke, vehicle exhaust, coal soot, char-grilled food", "sources: tobacco smoke, vehicle exhaust, coal soot, char-grilled food")}
        </T>
      </Fade>

      {/* beat 3 — PAH -> metabolised -> DNA damage */}
      <Draw on={beat >= 3} delay={dl(3, 0.3)} d={reactionArrowD(440, 500, cy)} stroke={INK} sw={2} dur={0.4} />
      <Draw on={beat >= 3} delay={dl(3, 0.5)} d={box(510, 150)} stroke={INK} sw={2} dur={0.6} fill="none" />
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={585} y={cy + 4} size={12} fill={INK}>
          {t("metabolised", "metabolised")}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 1.3)} d={reactionArrowD(660, 720, cy)} stroke={RED} sw={2} dur={0.4} />
      <Draw on={beat >= 3} delay={dl(3, 1.5)} d={box(730, 190)} stroke={RED} sw={2.2} dur={0.6} fill="none" />
      <Fade on={beat >= 3} delay={dl(3, 2)}>
        <T x={825} y={cy + 5} size={13} fill={RED} weight={700}>
          {t("DNA-damaging species", "DNA-damaging species")}
        </T>
      </Fade>

      {/* beat 4 — indirect damage caption */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={432} size={13} fill={INK} script>
          {t("the damage is indirect — the body's own metabolism does this", "damage indirect hai — body ka apna metabolism yeh karta")}
        </T>
      </Fade>

      {/* beat 5 — benzene itself */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={470} size={15} fill={INK} weight={700}>
          {t("benzene itself: toxic, a recognised carcinogen on prolonged exposure", "benzene khud: toxic, prolonged exposure par recognised carcinogen")}
        </T>
      </Fade>

      {/* beat 6 — the guardrail */}
      <Draw on={beat >= 6} delay={dl(6, 0.3)} d="M 60 500 L 60 536" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={76} y={522} size={16} fill={RED} script anchor="start">
          {t("a real-world reason the aromatic ring matters beyond the exam hall", "exam hall se aage, aromatic ring ke matter karne ki real-world wajah")}
        </T>
      </Fade>
    </Scene>
  );
}
