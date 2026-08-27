/**
 * C11 Ch08 · Section 39 — "Worked example — rank benzylic cations (JEE Advanced)"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING(_CHEMISTRY).md.
 *
 * Beats (board_reveal_at, en [0, 8.11, 18.43, 26.2, 37.55, 52.57, 58.28, 71.59]):
 *  0 title (always-on, seq1) · 1 task: rank 3 benzylic cations · 2 diagram: 3
 *  bare rings + CH2⁺ + names · 3 framing (all resonance-stabilised, tie-break =
 *  substituent) · 4 para-methoxy: +M donor → MOST stable · 5 benzyl: no donor/
 *  acceptor → intermediate · 6 para-nitro: -M/-I acceptor → LEAST stable · 7 red
 *  closer (final order)
 *
 * Three small rings, centers x=190/540/890, cy=145, r=42.
 */

import React from "react";
import { Circle } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';
import { bondD, ringD as hexRingD } from "./chem-kit";

export default function C11Ch08Sec39({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const Ring = ({ cx, delay }: { cx: number; delay: number }) => (
    <>
      <Draw on={beat >= 2} delay={delay} d={hexRingD(cx, 145, 42)} stroke={INK} sw={2.2} dur={0.7} />
      <Fade on={beat >= 2} delay={delay + 0.7}>
        <Circle cx={cx} cy={145} r={24} fill="none" stroke={INK} strokeWidth={1.4} />
      </Fade>
      <Draw on={beat >= 2} delay={delay + 0.9} d={bondD(cx + 36.4, 166, cx + 75, 185)} stroke={INK} sw={2} dur={0.3} />
      <Fade on={beat >= 2} delay={delay + 1.2}>
        <T x={cx + 90} y={190} size={13} fill={INK} weight={700} anchor="start">
          CH₂⁺
        </T>
      </Fade>
    </>
  );

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={19} fill={RED} script>
          {t("Worked example — rank benzylic cations (JEE Advanced)", "Worked example — benzylic cations rank karo (JEE Adv)")}
        </T>
      </Fade>

      {/* beat 1 — task */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={540} y={90} size={13} fill={INK}>
          {t("rank by decreasing stability: benzyl, p-methoxybenzyl, p-nitrobenzyl", "decreasing stability se rank: benzyl, p-methoxybenzyl, p-nitrobenzyl")}
        </T>
      </Fade>

      {/* beat 2 — the three rings, drawn */}
      <Ring cx={190} delay={dl(2, 0.2)} />
      <Ring cx={540} delay={dl(2, 1.6)} />
      <Ring cx={890} delay={dl(2, 3)} />
      <Fade on={beat >= 2} delay={dl(2, 4.4)}>
        <T x={190} y={228} size={12} fill={MUTED}>
          {t("p-methoxybenzyl", "p-methoxybenzyl")}
        </T>
        <T x={540} y={228} size={12} fill={MUTED}>
          {t("benzyl", "benzyl")}
        </T>
        <T x={890} y={228} size={12} fill={MUTED}>
          {t("p-nitrobenzyl", "p-nitrobenzyl")}
        </T>
      </Fade>

      {/* beat 3 — framing: tie-break is the substituent */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={258} size={13} fill={INK}>
          {t("all 3 resonance-stabilised — tie-break: substituent effect on the + carbon", "teeno resonance-stabilised — tie-break: substituent ka asar + carbon par")}
        </T>
      </Fade>

      {/* beat 4 — para-methoxy: strong +M donor */}
      <Draw on={beat >= 4} delay={dl(4, 0.2)} d={bondD(153.6, 124, 110, 105)} stroke={GREEN} sw={2.2} dur={0.3} />
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <T x={95} y={100} size={13} fill={GREEN} weight={700} anchor="end">
          OCH₃
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={190} y={288} size={13} fill={GREEN} weight={800}>
          {t("MOST STABLE", "MOST STABLE")}
        </T>
      </Fade>

      {/* beat 5 — plain benzyl: intermediate */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={288} size={13} fill={INK} weight={700}>
          {t("intermediate", "intermediate")}
        </T>
      </Fade>

      {/* beat 6 — para-nitro: strong -M/-I acceptor */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d={bondD(853.6, 124, 810, 105)} stroke={RED} sw={2.2} dur={0.3} />
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <T x={795} y={100} size={13} fill={RED} weight={700} anchor="end">
          NO₂
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={890} y={288} size={13} fill={RED} weight={800}>
          {t("LEAST STABLE", "LEAST STABLE")}
        </T>
      </Fade>

      {/* beat 7 — the final order */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 60 315 L 60 345" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={76} y={333} size={15} fill={RED} script anchor="start">
          {t(
            "order: p-methoxybenzyl → benzyl → p-nitrobenzyl — donor stabilises, acceptor destabilises",
            "order: p-methoxybenzyl → benzyl → p-nitrobenzyl — donor stabilise, acceptor destabilise"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
