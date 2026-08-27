/**
 * C11 Chemistry Ch03 · Section 8 — "From atomic weight to atomic number: the reasoning chain"
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 9.73, 27.99, 44.63, 61.95, 79.19, 101.46, 119.55, 123.14]):
 *  0 title + underline
 *  1 STEP 1 card: anomalies — Ar lands after K by weight ✗
 *  2 caption under the row: same trouble at Te/I and Co/Ni — hand-swapped
 *  3 STEP 2 card: deeper variable — chemistry = e⁻, e⁻ count = protons
 *  4 STEP 3 card: Moseley's evidence — X-ray spectra ⇒ whole-number Z
 *  5 STEP 4 card (key tag): order by Z — 18<19 · 52<53 · 27<28 ✓
 *  6 nucleus pair: K(19p+20n) vs Ar(18p+22n, visibly bigger) — neutron-rich
 *    explanation for why Ar still outweighs K
 *  7 new heading: the takeaway
 *  8 closing green stamp: Z counts protons, fixes chemistry — fundamental ruler
 *
 * Layout plan:
 *  b1-5 | 4 step cards + arrows     | Draw  | x50..1030  y100..190
 *  b2 | caption (script 13, muted)  | T mid | x?..?      y197..217 (bl 210)
 *  b6 | K nucleus circle r52        | Draw  | c(350,300)
 *  b6 | Ar nucleus circle r56       | Draw  | c(650,300)
 *  b6 | labels ×2                   | T mid | y366..380 (bl 376)
 *  b6 | caption (script 14, red)    | T mid | x?..?      y386..411 (bl 404)
 *  b7 | heading (19,w800,ink)       | T mid | x?..?      y425..443 (bl 440)
 *  b7 | underline (amber)           | Draw  | y448 x400..680
 *  b8 | closing stamp (green)       | Chip  | x255..825  y458..498
 */

import React from "react";
import { Circle, Rect } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  arrowD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

function StepCard({
  on,
  delay,
  x,
  n,
  badgeFill,
  header,
  detail,
  detailFill,
}: {
  on: boolean;
  delay: number;
  x: number;
  n: string;
  badgeFill: string;
  header: string;
  detail: string;
  detailFill: string;
}) {
  return (
    <Fade on={on} delay={delay}>
      <Rect x={x} y={100} width={230} height={90} rx={6} fill="none" stroke={MUTED} strokeWidth={1.6} />
      <Circle cx={x + 22} cy={132} r={16} fill={badgeFill} />
      <T x={x + 22} y={137.5} size={14} fill="#fff" weight={800}>{n}</T>
      <T x={x + 48} y={128} size={13} weight={800} fill={INK} anchor="start">{header}</T>
      <T x={x + 48} y={152} size={11} fill={detailFill} anchor="start">{detail}</T>
    </Fade>
  );
}

export default function C11Ch03Sec8({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={23} fill={RED} script>
          {t("the reasoning chain: weight → number", "reasoning chain: weight → number")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 4)} d="M 380 88 C 450 84, 630 84, 700 88" stroke={RED} sw={2.4} dur={0.7} />

      {/* beat 1 — Step 1: the anomalies */}
      <StepCard
        on={beat >= 1}
        delay={dl(1, 0.2)}
        x={50}
        n="1"
        badgeFill={AMBER}
        header={t("anomalies", "anomalies")}
        detail={t("Ar after K by weight ✗", "Ar after K by weight ✗")}
        detailFill={RED}
      />

      {/* beat 2 — the same trouble, two more pairs */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={210} size={13} fill={MUTED} script>
          {t("+ same trouble: Te/I and Co/Ni — hand-swapped by Mendeleev", "+ wahi trouble: Te/I aur Co/Ni — Mendeleev ne haath se swap kiya")}
        </T>
      </Fade>

      {/* beat 3 — Step 2: a deeper variable */}
      <Draw on={beat >= 3} delay={dl(3, 0.1)} d={arrowD(282, 132, 298, 132)} stroke={INK} sw={1.8} dur={0.3} />
      <StepCard
        on={beat >= 3}
        delay={dl(3, 0.3)}
        x={300}
        n="2"
        badgeFill={AMBER}
        header={t("deeper variable", "deeper variable")}
        detail={t("e⁻ count = protons", "e⁻ count = protons")}
        detailFill={INK}
      />

      {/* beat 4 — Step 3: Moseley's evidence */}
      <Draw on={beat >= 4} delay={dl(4, 0.1)} d={arrowD(532, 132, 548, 132)} stroke={INK} sw={1.8} dur={0.3} />
      <StepCard
        on={beat >= 4}
        delay={dl(4, 0.3)}
        x={550}
        n="3"
        badgeFill={AMBER}
        header={t("Moseley's evidence", "Moseley ka evidence")}
        detail={t("X-ray spectra ⇒ whole-number Z", "X-ray spectra ⇒ whole-number Z")}
        detailFill={INK}
      />

      {/* beat 5 — Step 4: order by Z, the key step */}
      <Draw on={beat >= 5} delay={dl(5, 0.1)} d={arrowD(782, 132, 798, 132)} stroke={INK} sw={1.8} dur={0.3} />
      <StepCard
        on={beat >= 5}
        delay={dl(5, 0.3)}
        x={800}
        n="4"
        badgeFill={RED}
        header={t("order by Z", "Z se order karo")}
        detail={t("18<19 · 52<53 · 27<28 ✓", "18<19 · 52<53 · 27<28 ✓")}
        detailFill={GREEN}
      />

      {/* beat 6 — why Ar still outweighs K: neutron-rich
          (filled Draw shapes must stay wrapped in Fade — Draw's own `on` only
          animates the stroke-dash, never the fill, so an unwrapped filled
          Draw would show its fill at t=0, breaking the blank-board contract) */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <Draw on={beat >= 6} d="M 350 300 m -52 0 a 52 52 0 1 0 104 0 a 52 52 0 1 0 -104 0" stroke={INK} sw={2} dur={0.6} fill="#FFFEFB" />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.7)}>
        <Draw on={beat >= 6} d="M 650 300 m -56 0 a 56 56 0 1 0 112 0 a 56 56 0 1 0 -112 0" stroke={INK} sw={2} dur={0.6} fill="#FFFEFB" />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.3)}>
        <T x={350} y={305} size={13} fill={INK} weight={700}>19p + 20n</T>
        <T x={650} y={305} size={13} fill={INK} weight={700}>18p + 22n</T>
        <T x={350} y={376} size={13} fill={MUTED}>{t("K, mass ≈ 39", "K, mass ≈ 39")}</T>
        <T x={650} y={376} size={13} fill={MUTED}>{t("Ar, mass ≈ 40", "Ar, mass ≈ 40")}</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={540} y={404} size={14} fill={RED} script>
          {t("fewer protons, MORE neutrons ⇒ still heavier", "kam protons, ZYADA neutrons ⇒ phir bhi bhaari")}
        </T>
      </Fade>

      {/* beat 7 — new heading */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={440} size={19} weight={800} fill={INK}>
          {t("the takeaway", "the takeaway")}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 1)} d="M 400 448 C 460 445, 620 445, 680 448" stroke={AMBER} sw={2.2} dur={0.5} />

      {/* beat 8 — closing insight */}
      <Fade on={beat >= 8} delay={dl(8, 0.3)}>
        <Chip x={255} y={458} w={570} h={40} fill={GREEN} textFill="#fff" size={14} script={false}>
          {t("Z counts protons and fixes chemistry ⇒ the more fundamental ruler", "Z protons ginta hai aur chemistry fix karta ⇒ zyada fundamental ruler")}
        </Chip>
      </Fade>
    </Scene>
  );
}
