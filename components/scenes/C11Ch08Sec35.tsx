/**
 * C11 Ch08 · Section 35 — "Stability orders & the four reaction types"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING(_CHEMISTRY).md.
 *
 * Beats (board_reveal_at, en [0, 6.57, 22.7, 35.75, 44.71, 64.26, 74.75, 93.7]):
 *  0 title (always-on, seq1) · 1 carbocation order 3°>2°>1°>methyl · 2 red note
 *  (resonance trumps all, allyl/benzyl) · 3 radical order (same) · 4 carbanion
 *  order REVERSED · 5 substitution card · 6 addition/elimination/rearrangement
 *  cards · 7 red closer (path through most stable intermediate)
 *
 * 4 reaction-type cards x=80/320/560/800 (w220), y225-295.
 */

import React from "react";
import { Rect } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, RED, CREAM, AMBER,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch08Sec35({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const Card = ({ x, title, def }: { x: number; title: string; def: string }) => (
    <>
      <Rect x={x} y={225} width={220} height={70} rx={9} fill={CREAM} stroke={AMBER} strokeWidth={1.6} />
      <T x={x + 110} y={251} size={15} fill={INK} weight={700}>
        {title}
      </T>
      <T x={x + 110} y={274} size={11.5} fill={MUTED}>
        {def}
      </T>
    </>
  );

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={22} fill={RED} script>
          {t("Stability orders & the four reaction types", "Stability orders & chaar reaction types")}
        </T>
      </Fade>

      {/* beat 1 — carbocation order */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={540} y={95} size={15} fill={INK} weight={700}>
          {t("carbocations: 3° > 2° > 1° > methyl", "carbocations: 3° > 2° > 1° > methyl")}
        </T>
      </Fade>

      {/* beat 2 — resonance trumps all */}
      <Draw on={beat >= 2} delay={dl(2, 0.2)} d="M 60 115 L 60 145" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={76} y={133} size={15} fill={RED} script anchor="start">
          {t(
            "resonance trumps all: allyl & benzyl cations beat even 3° — exceptionally stable",
            "resonance sab se jeetta: allyl & benzyl cations 3° se bhi jyada stable"
          )}
        </T>
      </Fade>

      {/* beat 3 — free radical order */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={170} size={14} fill={INK}>
          {t("free radicals: 3° > 2° > 1° > methyl (same logic)", "free radicals: 3° > 2° > 1° > methyl (same logic)")}
        </T>
      </Fade>

      {/* beat 4 — carbanion order, reversed */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={200} size={14} fill={INK} weight={700}>
          {t("carbanions: methyl > 1° > 2° > 3° — REVERSED (stabilised by -I/-M)", "carbanions: methyl > 1° > 2° > 3° — REVERSED (-I/-M se stable)")}
        </T>
      </Fade>

      {/* beat 5 — substitution */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <Card x={80} title={t("Substitution", "Substitution")} def={t("1 group replaces another", "1 group dusre ki jagah")} />
      </Fade>

      {/* beat 6 — addition, elimination, rearrangement */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <Card x={320} title={t("Addition", "Addition")} def={t("across C=C, C=O", "C=C, C=O ke paar")} />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <Card x={560} title={t("Elimination", "Elimination")} def={t("reverse — forms multiple bond", "reverse — multiple bond banta")} />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <Card x={800} title={t("Rearrangement", "Rearrangement")} def={t("1,2-shift to stabler cation", "1,2-shift, stabler cation")} />
      </Fade>

      {/* beat 7 — stability predicts the product */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 60 330 L 60 360" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={76} y={348} size={15} fill={RED} script anchor="start">
          {t(
            "the reaction takes the path through the MOST STABLE intermediate — stability predicts the product",
            "reaction MOST STABLE intermediate wala path leta — stability se product predict hota"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
