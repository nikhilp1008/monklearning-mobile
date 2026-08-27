/**
 * C11 Ch08 · Section 40 — "Pitfalls & pro-tips — Reaction Mechanisms"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING(_CHEMISTRY).md.
 *
 * Beats (board_reveal_at, en [0, 8.45, 19.71, 36.95, 49.83, 61.1, 74.24, 96]):
 *  0 title (always-on, seq1) · 1 Pitfall 1 (fission swap) · 2 Pitfall 2 RED
 *  (cation/carbanion geometry) · 3 Pitfall 3 (charge as the test) · 4 Pitfall 4
 *  (forgetting resonance) · 5 Pitfall 5 (inverted carbanion order) · 6 pro-tip
 *  checklist · 7 red closer (first applicable item decides)
 *
 * Row1: 3 cards x=60/390/720 (w310), y95-175. Row2: 2 cards x=60/560 (w460),
 * y195-275. Pro-tip banner y295-330. Red closer y350-380.
 */

import React from "react";
import { Rect } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, GREEN, RED, CREAM, AMBER,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch08Sec40({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const Card = ({
    x,
    y,
    w,
    stroke,
    title,
    body,
  }: {
    x: number;
    y: number;
    w: number;
    stroke: string;
    title: string;
    body: string;
  }) => (
    <>
      <Rect x={x} y={y} width={w} height={80} rx={9} fill={CREAM} stroke={stroke} strokeWidth={stroke === RED ? 2.4 : 1.6} />
      <T x={x + w / 2} y={y + 26} size={13.5} fill={stroke === RED ? RED : INK} weight={700}>
        {title}
      </T>
      <T x={x + w / 2} y={y + 52} size={11} fill={MUTED}>
        {body}
      </T>
    </>
  );

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={22} fill={RED} script>
          {t("Pitfalls & pro-tips — Reaction Mechanisms", "Pitfalls & pro-tips — Reaction Mechanisms")}
        </T>
      </Fade>

      {/* beat 1 — pitfall 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <Card
          x={60}
          y={95}
          w={310}
          stroke={AMBER}
          title={t("✗ Pitfall 1: fission swap", "✗ Pitfall 1: fission swap")}
          body={t("homolytic → radicals; heterolytic → ion pair", "homolytic → radicals; heterolytic → ion pair")}
        />
      </Fade>

      {/* beat 2 — pitfall 2, red */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <Card
          x={390}
          y={95}
          w={310}
          stroke={RED}
          title={t("✗ Pitfall 2: cation/carbanion shape", "✗ Pitfall 2: cation/carbanion shape")}
          body={t("cation sp² planar; carbanion sp³ pyramidal", "cation sp² planar; carbanion sp³ pyramidal")}
        />
      </Fade>

      {/* beat 3 — pitfall 3 */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <Card
          x={720}
          y={95}
          w={310}
          stroke={AMBER}
          title={t("✗ Pitfall 3: charge as the test", "✗ Pitfall 3: charge ko test samajhna")}
          body={t("neutral NH3/H2O = nucleophile; BF3 = electrophile", "neutral NH3/H2O = nucleophile; BF3 = electrophile")}
        />
      </Fade>

      {/* beat 4 — pitfall 4 */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <Card
          x={60}
          y={195}
          w={460}
          stroke={AMBER}
          title={t("✗ Pitfall 4: forgetting resonance", "✗ Pitfall 4: resonance bhool jaana")}
          body={t("allyl/benzyl beat even tertiary — check resonance first", "allyl/benzyl tertiary se bhi jeette — pehle resonance check karo")}
        />
      </Fade>

      {/* beat 5 — pitfall 5 */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <Card
          x={560}
          y={195}
          w={460}
          stroke={AMBER}
          title={t("✗ Pitfall 5: inverted carbanion order", "✗ Pitfall 5: carbanion order ulta")}
          body={t("carbanion stability = OPPOSITE of carbocation", "carbanion stability = carbocation se OPPOSITE")}
        />
      </Fade>

      {/* beat 6 — the stability checklist */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <Rect x={150} y={295} width={780} height={38} rx={9} fill={CREAM} stroke={GREEN} strokeWidth={1.8} />
        <T x={540} y={319} size={14} fill={GREEN} weight={700}>
          {t("⚡ checklist: resonance → hyperconjugation/+I → adjacent ±M/±I", "⚡ checklist: resonance → hyperconjugation/+I → adjacent ±M/±I")}
        </T>
      </Fade>

      {/* beat 7 — closer */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 60 350 L 60 380" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={76} y={368} size={15} fill={RED} script anchor="start">
          {t(
            "the first item that applies usually decides — you rarely need to weigh all of them",
            "jo pehla item apply ho wahi usually decide karta — sab weigh karne ki zaroorat nahi"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
