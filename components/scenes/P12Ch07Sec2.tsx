/**
 * P12Ch07 · Section 02 — "Why the average fails and RMS is born"
 * Subtopic: AC Fundamentals, Peak, RMS & Mean Values
 * OPEN CHALKBOARD DESIGN (ZERO CONTAINER BOXES):
 *  - Spacious open layout with linear I(t) cancellation vs squared I²(t) heating curves
 *  - Zero enclosing box cards around formulas/text
 */

import React from "react";
import { G, Line, Path } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip,
  INK, MUTED, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

function Badge({ n, cx, cy, on, delay }: { n: number; cx: number; cy: number; on: boolean; delay: number }) {
  return (
    <G>
      <Draw on={on} delay={delay}
        d={`M ${cx - 13} ${cy} A 13 13 0 1 1 ${cx + 13} ${cy} A 13 13 0 1 1 ${cx - 13} ${cy}`}
        stroke={RED} sw={2.2} dur={0.4} />
      <Fade on={on} delay={delay + 0.3}>
        <T x={cx} y={cy + 5} size={14} fill={RED} weight={800}>{n}</T>
      </Fade>
    </G>
  );
}

export default function P12Ch07Sec2({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* Title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("Why Full-Cycle Average Fails: The Genesis of Root-Mean-Square (RMS)", "Why Full-Cycle Average Fails: The Genesis of Root-Mean-Square (RMS)")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: OPEN I(t) SINE WAVE & AREA CANCELLATION */}
      <G transform="translate(40, 85)">
        <Badge n={1} cx={25} cy={25} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={48} y={30} size={16} fill={RED} weight={800} anchor="start">
            {t("LINEAR CURRENT I(t): FULL-CYCLE AVERAGE = 0", "LINEAR CURRENT I(t): FULL-CYCLE AVERAGE = 0")}
          </T>
        </Fade>

        <Fade on={beat >= 1}>
          {/* Open Axes */}
          <Line x1="20" y1="170" x2="470" y2="170" stroke={INK} strokeWidth={2} />
          <Line x1="20" y1="270" x2="20" y2="70" stroke={INK} strokeWidth={2} />

          {/* Shaded Areas: +Q green, -Q red */}
          <Path d="M 20 170 Q 132.5 50, 245 170 Z" fill={GREEN} opacity={0.2} />
          <Path d="M 245 170 Q 357.5 290, 470 170 Z" fill={RED} opacity={0.2} />

          {/* Sine Path */}
          <Draw on={beat >= 1} delay={dl(1, 0.6)} d="M 20 170 Q 132.5 50, 245 170 Q 357.5 290, 470 170" stroke={AMBER_DARK} sw={3.5} />

          <T x={132.5} y={130} size={15} fill={GREEN} weight={800}>+ Area (+Q)</T>
          <T x={357.5} y={210} size={15} fill={RED} weight={800}>− Area (−Q)</T>
          <T x={470} y={160} size={12} fill={INK} anchor="end">Net ⟨I⟩ = 0 A</T>
        </Fade>

        {/* Free Floating Formula (Spacious, No Box) */}
        <Fade on={beat >= 1}>
          <T x={245} y={340} anchor="middle" size={16} fill={INK} weight={800}>
            ⟨I⟩_full = (1/T) ∫₀^T I₀ sin(ωt) dt = 0  (Averages out to ZERO!)
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: OPEN I²(t) SQUARED WAVE & RMS HEATING EFFECT */}
      <G transform="translate(540, 85)">
        <Badge n={2} cx={25} cy={25} on={beat >= 5} delay={dl(5, 0.2)} />
        <Fade on={beat >= 5} delay={dl(5, 0.8)}>
          <T x={48} y={30} size={16} fill={RED} weight={800} anchor="start">
            {t("SQUARED CURRENT I²(t): JOULE HEATING POWER", "SQUARED CURRENT I²(t): JOULE HEATING POWER")}
          </T>
        </Fade>

        <Fade on={beat >= 5}>
          {/* Open Axes */}
          <Line x1="20" y1="270" x2="470" y2="270" stroke={INK} strokeWidth={2} />
          <Line x1="20" y1="270" x2="20" y2="70" stroke={INK} strokeWidth={2} />

          {/* I²(t) path (all positive peaks up to I₀²) */}
          <Draw on={beat >= 5} delay={dl(5, 0.6)}
            d="M 20 270 Q 132.5 70, 245 270 Q 357.5 70, 470 270" stroke={GREEN} sw={3.5} />

          {/* Mean I² line at 50% height */}
          <Line x1="20" y1="170" x2="470" y2="170" stroke={RED} strokeWidth={2.5} strokeDasharray="6 4" />
          <T x={465} y={160} size={14} fill={RED} weight={800} anchor="end">⟨I²⟩ = I₀² / 2</T>

          <T x={132.5} y={90} size={13} fill={GREEN} weight={800}>Peak I₀²</T>
        </Fade>

        {/* Free Floating Formula (Spacious, No Box) */}
        <Fade on={beat >= 5}>
          <T x={245} y={340} anchor="middle" size={18} fill={GREEN} weight={800}>
            I_rms = √( ⟨I²⟩ ) = √(I₀² / 2) = I₀ / √2 ≈ 0.707 I₀
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: OPEN SPACIOUS JOULE HEATING RECAP */}
      <G transform="translate(40, 470)">
        <Badge n={3} cx={25} cy={25} on={beat >= 7} delay={dl(7, 0.2)} />
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={48} y={30} size={16} fill={RED} weight={800} anchor="start">
            {t("JOULE HEATING EQUIVALENCE DEFINITION", "JOULE HEATING EQUIVALENCE DEFINITION")}
          </T>
        </Fade>

        <Fade on={beat >= 7}>
          <T x={500} y={30} anchor="middle" size={17} fill={GREEN} weight={800}>
            RMS current I_rms is the steady DC current that generates the EXACT SAME Joule heating energy in resistor R as AC!
          </T>
          <T x={500} y={65} anchor="middle" size={15} fill={AMBER_DARK} weight={700}>
            Heating Energy H = ∫₀^T I(t)² R dt = I_rms² R T  ⇒  I_rms = I₀ / √2 = 0.707 I₀ !
          </T>
        </Fade>
      </G>

      {/* Footer Summary Chip (Floating without card boxes) */}
      <Fade on={beat >= 7}>
        <Chip x={100} y={570} w={880} h={42} fill={GREEN} textFill="#ffffff" size={18}>
          {t(
            "★ RMS Origin: Full-cycle average fails (⟨I⟩=0), but RMS current I_rms = I₀ / √2 matches real Joule heating power P = I_rms² R! ✓",
            "★ RMS Origin: Full-cycle average ⟨I⟩=0 cancel hota hai, but RMS current I_rms = I₀ / √2 real Joule heating power P = I_rms² R se match karta hai! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
