/**
 * C11 Ch07 · Section 9 — Worked example (JEE Main): the CrO₅ '+10' error — peroxide structure
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (en [0, 13.48, 28.5, 46.51, 59.48, 70.49, 85.67, 96.94]):
 *  0 heading: why is Cr in CrO₅ not +10?
 *  1 naive calc: all 5 O at −2 ⇒ x=+10 (result crossable in beat2)
 *  2 cross-out "+10" + red-margin: Cr max = +6 — impossible
 *  3 THE structure: butterfly — 1 terminal oxo Cr=O, 2 peroxo O−O links
 *  4 explanation: 2 peroxide links (4×O at −1) + 1 oxo O (−2)
 *  5 correct calc: x+4(−1)+1(−2)=0 ⇒ x−6=0 ⇒ x=+6
 *  6 redox prediction: Cr at ceiling ⇒ cannot be oxidised, only reduced
 *  7 answer box: Cr=+6 (correct); CrO₅ acts ONLY as oxidising agent
 *  (everything stays)
 *
 * Layout plan (Anek sans bl−0.78s..+0.31s; longer language counts):
 *  b0 | heading (sans18 700)         | T mid | x540 bl100
 *  b1 | reasoning + result (sans17/18)| T st | x64 bl136, result x361 bl136
 *  b2 | cross-out on result; margin bar x64 y155..195, note bl178
 *  b3 | structure: Cr(540,320) + 5 O, bonds, 2 peroxo links highlighted — y225..370
 *  b4 | explanation (sans16)         | T mid| x540 bl404
 *  b5 | correct calc (sans18)        | T mid| x540 bl440
 *  b6 | redox line (sans17)          | T mid| x540 bl476
 *  b7 | answer box x64..760 y505..575, 2 lines bl526/560
 */

import React from "react";
import { Rect } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  crossD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';
import { bondD, doubleBondD } from "./chem-kit";

export default function C11Ch07Sec9({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const CR = { x: 540, y: 320 };

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={25} fill={RED} script>
          {t("structure fixes the bookkeeping, not the rule", "structure bookkeeping thik karta hai, rule nahi")}
        </T>
      </Fade>

      {/* ===== beat 0 — heading ===== */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={100} size={18} fill={INK} weight={700}>
          {t("why is Cr in CrO₅ not +10?", "CrO₅ mein Cr, +10 kyun nahi?")}
        </T>
      </Fade>

      {/* ===== beat 1 — naive calc ===== */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={64} y={136} size={17} fill={INK} anchor="start">
          {t("all 5 O at −2:  x + 5(−2) = 0  ⇒ ", "sab 5 O ko −2:  x + 5(−2) = 0  ⇒ ")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <T x={361} y={136} size={18} fill={RED} weight={800} anchor="start">
          x = +10
        </T>
      </Fade>

      {/* ===== beat 2 — impossible, cross it out ===== */}
      <Draw on={beat >= 2} delay={dl(2, 0.3)} d={crossD(361, 122, 63, 20)} stroke={RED} sw={2.2} dur={0.5} />
      <Draw on={beat >= 2} delay={dl(2, 1)} d="M 64 155 L 64 195" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 1.5)}>
        <T x={80} y={178} size={17} fill={RED} script anchor="start">
          {t("Cr max = +6 (group limit) — impossible ✗", "Cr max = +6 (group limit) — impossible ✗")}
        </T>
      </Fade>

      {/* ===== beat 3 — the butterfly structure ===== */}
      <Draw on={beat >= 3} delay={dl(3, 0.2)} d={doubleBondD(CR.x, CR.y - 8, CR.x, 258, 3)} stroke={INK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 3} delay={dl(3, 0.5)} d={bondD(CR.x - 8, CR.y - 6, 438, 289)} stroke={INK} sw={2.2} dur={0.4} />
      <Draw on={beat >= 3} delay={dl(3, 0.7)} d={bondD(CR.x - 8, CR.y + 6, 438, 351)} stroke={INK} sw={2.2} dur={0.4} />
      <Draw on={beat >= 3} delay={dl(3, 1)} d={bondD(430, 297, 430, 343)} stroke={AMBER_DARK} sw={2.6} dur={0.4} />
      <Draw on={beat >= 3} delay={dl(3, 1.3)} d={bondD(CR.x + 8, CR.y - 6, 642, 289)} stroke={INK} sw={2.2} dur={0.4} />
      <Draw on={beat >= 3} delay={dl(3, 1.5)} d={bondD(CR.x + 8, CR.y + 6, 642, 351)} stroke={INK} sw={2.2} dur={0.4} />
      <Draw on={beat >= 3} delay={dl(3, 1.8)} d={bondD(650, 297, 650, 343)} stroke={AMBER_DARK} sw={2.6} dur={0.4} />

      <Fade on={beat >= 3} delay={dl(3, 2.3)}>
        <T x={CR.x} y={CR.y + 6} size={20} fill={INK} weight={800}>
          Cr
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.6)}>
        <T x={CR.x} y={250} size={18} fill={RED} weight={800}>
          O
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.8)}>
        <T x={430} y={289} size={18} fill={AMBER_DARK} weight={800}>
          O
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 3)}>
        <T x={430} y={359} size={18} fill={AMBER_DARK} weight={800}>
          O
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 3.2)}>
        <T x={650} y={289} size={18} fill={AMBER_DARK} weight={800}>
          O
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 3.4)}>
        <T x={650} y={359} size={18} fill={AMBER_DARK} weight={800}>
          O
        </T>
      </Fade>

      {/* ===== beat 4 — explanation ===== */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={404} size={16} fill={AMBER_DARK}>
          {t("2 peroxide links (4 × O at −1)  +  1 oxo O (−2)", "2 peroxide links (4 × O at −1)  +  1 oxo O (−2)")}
        </T>
      </Fade>

      {/* ===== beat 5 — correct calc ===== */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={440} size={18} fill={INK} weight={700}>
          x + 4(−1) + 1(−2) = 0  ⇒  x − 6 = 0  ⇒  x = +6
        </T>
      </Fade>

      {/* ===== beat 6 — redox prediction ===== */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={476} size={17} fill={GREEN} weight={700}>
          {t("Cr is at its ceiling (+6) ⇒ cannot be oxidised — only reduced", "Cr apni ceiling (+6) par hai ⇒ oxidise nahi ho sakta — sirf reduce")}
        </T>
      </Fade>

      {/* ===== beat 7 — answer box ===== */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Rect x={64} y={505} width={760} height={70} rx={8} fill="none" stroke={GREEN} strokeWidth={2.4} />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1)}>
        <T x={84} y={526} size={18} fill={GREEN} weight={800} anchor="start">
          {t("Cr = +6 (correct)", "Cr = +6 (correct)")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={84} y={560} size={17} fill={GREEN} weight={800} anchor="start">
          {t("CrO₅ acts ONLY as an oxidising agent", "CrO₅ SIRF oxidising agent ki tarah act karta hai")}
        </T>
      </Fade>
    </Scene>
  );
}
