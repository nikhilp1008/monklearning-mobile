/**
 * C11 Ch09 · Section 22 — "The double bond is the whole personality"
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 17.92, 30.38, 37.97, 47.36, 57.77, 70.4]):
 *  0 ethene structure drawn (C=C + 4 H) · 1 CnH2n chip · 2 "olefins"
 *  (oil-forming) · 3 caption: ethene C2H4 · 4 amber ring on the double bond:
 *  "whole personality" · 5 dashed π cloud above the bond, loosely held ·
 *  6 RED: alkenes add electrophiles across C=C
 *
 * Layout plan:
 *  b0 | ethene structure       | Draw+T | x100..260 y150..230
 *  b1 | chip CnH2n              | Chip   | x340..430 y170..206
 *  b2 | olefins line            | T mid  | x540 y270
 *  b3 | "ethene C2H4" caption   | T mid  | x175 y255
 *  b4 | ring on C=C + label     | Draw+T | c(175,190) rx45 ry26 · label x540 y305
 *  b5 | dashed π cloud + label  | Draw+T | c(180,125) rx55 ry16 · label x350 y128
 *  b6 | margin bar + red note   | Draw+T | bar x60 y345..381 · text bl367
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, ringD, INK, MUTED, AMBER_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';
import { doubleBondD, bondD } from "./chem-kit";

export default function C11Ch09Sec22({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={65} size={25} fill={RED} script>
          {t("the double bond is the whole personality", "double bond hi puri personality hai")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={97} size={15} fill={INK} weight={700}>
          {t("alkenes: the train with a folding double-seat", "alkenes: folding double-seat wali train")}
        </T>
      </Fade>

      {/* beat 0 — the ethene structure */}
      <Draw on={beat >= 0} delay={dl(0, 0.8)} d={doubleBondD(140, 190, 210, 190)} stroke={INK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 0} delay={dl(0, 1.4)} d={bondD(140, 190, 105, 160)} stroke={INK} sw={2} dur={0.3} />
      <Draw on={beat >= 0} delay={dl(0, 1.7)} d={bondD(140, 190, 105, 220)} stroke={INK} sw={2} dur={0.3} />
      <Draw on={beat >= 0} delay={dl(0, 2)} d={bondD(210, 190, 245, 160)} stroke={INK} sw={2} dur={0.3} />
      <Draw on={beat >= 0} delay={dl(0, 2.3)} d={bondD(210, 190, 245, 220)} stroke={INK} sw={2} dur={0.3} />
      <Fade on={beat >= 0} delay={dl(0, 2.7)}>
        <T x={90} y={155} size={13} fill={INK}>H</T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 2.85)}>
        <T x={90} y={230} size={13} fill={INK}>H</T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 3)}>
        <T x={260} y={155} size={13} fill={INK}>H</T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 3.15)}>
        <T x={260} y={230} size={13} fill={INK}>H</T>
      </Fade>

      {/* beat 1 — general formula */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <Chip x={340} y={170} w={90} h={36} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={19} script={false}>
          CnH2n
        </Chip>
      </Fade>

      {/* beat 2 — olefins */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={270} size={15} fill={INK}>
          {t("old name “olefins” — oil-forming", "purana naam “olefins” — oil-forming")}
        </T>
      </Fade>

      {/* beat 3 — caption the structure */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={175} y={255} size={15} fill={INK} weight={700}>
          {t("ethene C₂H₄", "ethene C₂H₄")}
        </T>
      </Fade>

      {/* beat 4 — the double bond is the personality */}
      <Draw on={beat >= 4} delay={dl(4, 0.3)} d={ringD(175, 190, 45, 26)} stroke={AMBER_DARK} sw={2.4} dur={0.7} />
      <Fade on={beat >= 4} delay={dl(4, 1.1)}>
        <T x={540} y={305} size={15} fill={AMBER_DARK} weight={700}>
          {t("= the entire personality of the molecule", "= molecule ki puri personality")}
        </T>
      </Fade>

      {/* beat 5 — pi electrons loosely held */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.3)}
        d="M 125 125 A 55 16 0 1 1 234.9 124.9"
        stroke={AMBER_DARK}
        sw={1.6}
        dur={0.6}
      />
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={180} y={112} size={14} fill={AMBER_DARK} weight={800}>π</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.4)}>
        <T x={350} y={128} size={14} fill={MUTED} script anchor="start">
          {t("loosely held, exposed electrons", "loosely held, exposed electrons")}
        </T>
      </Fade>

      {/* beat 6 — the theme */}
      <Draw on={beat >= 6} delay={dl(6, 0.3)} d="M 60 345 L 60 381" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={76} y={367} size={16} fill={RED} script anchor="start">
          {t("alkenes add electrophiles across C=C", "alkenes C=C ke across electrophiles add karte")}
        </T>
      </Fade>
    </Scene>
  );
}
