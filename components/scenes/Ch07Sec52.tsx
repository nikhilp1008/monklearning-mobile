/**
 * Ch07 · Section 52 — "Two confusions settled: weightlessness and negative energy"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 1, 2, 3, 4, 5, 6, 16.92]):
 *  0 title
 *  1 astronaut + station floating, "NOT beyond Earth's pull" caption
 *  2 (same, emphasis text)
 *  3 amber chip: gravity here ≈ 90% of surface value
 *  4 both falling together arrows, no contact force
 *  5 lift-with-snapped-cable analogy
 *  6 red bar: satellite total energy is negative — bound in the valley
 *  7 green margin: negative E = signature of a closed orbit
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  station rect (200..280, 220..260) · astronaut dot (240,200) ·
 *   Earth arc bottom-left c(180,420) r140 (top y280) · caption cx400 bl300
 *  b3 | chip x480 y150 w280 h34
 *  b4 | fall arrows (240,205)→(240,240) / (240,235)→(240,265) · label bl340
 *  b5 | lift box (700,180..300) + snapped cable zigzag · label bl330
 *  b6 | bar x66 y440..492 lines bl460/486
 *  b7 | bar x480 y440..492 lines bl460/486
 */

import React from "react";
import { Circle, Path, Rect } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  Chip,
  T,
  arrowD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch07Sec52({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — floating is not the absence of gravity */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "Floating is not the absence of gravity",
            "Tairna gravity ki gair-maujoodgi nahi hai"
          )}
        </T>
      </Fade>

      {/* beat 1 — station + astronaut, near the Earth */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.6)}
        d="M 40 280 A 140 140 0 0 1 320 280"
        stroke={INK}
        sw={2.2}
        dur={0.8}
        fill={CREAM}
      />
      <Fade on={beat >= 1} delay={dl(1, 1.6)}>
        <Rect x={200} y={220} width={80} height={40} rx={6} fill="none" stroke={INK} strokeWidth={2.2} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.2)}>
        <Circle cx={240} cy={200} r={7} fill={INK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3)}>
        <T x={400} y={220} size={13} fill={RED} script anchor="start">
          {t(
            "NOT beyond Earth's pull",
            "Earth ke pull se PARE NAHI"
          )}
        </T>
      </Fade>

      {/* beat 3 — 90% of surface gravity */}
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <Chip x={480} y={150} w={280} h={34} fill={CREAM} stroke={AMBER_DARK} textFill={AMBER_DARK} size={13}>
          {t("g(here) ≈ 90% of g(surface)", "g(yahan) ≈ 90% g(surface)")}
        </Chip>
      </Fade>

      {/* beat 4 — falling together, no contact force */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.6)}
        d={arrowD(240, 205, 240, 240)}
        stroke={AMBER_DARK}
        sw={2}
        dur={0.4}
      />
      <Draw
        on={beat >= 4}
        delay={dl(4, 1.2)}
        d={arrowD(240, 240, 240, 270)}
        stroke={AMBER_DARK}
        sw={2}
        dur={0.4}
      />
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <T x={400} y={340} size={12} fill={AMBER_DARK} script anchor="start">
          {t(
            "both falling together — no contact force",
            "dono saath gir rahe — koi contact force nahi"
          )}
        </T>
      </Fade>

      {/* beat 5 — the snapped-cable lift */}
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <Rect x={700} y={180} width={70} height={100} fill="none" stroke={INK} strokeWidth={2} />
        <Path d="M 735 130 L 730 150 L 740 165 L 733 180" stroke={RED} strokeWidth={2} fill="none" />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.5)}>
        <Circle cx={735} cy={220} r={6} fill={INK} />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2.3)}>
        <T x={700} y={310} size={12} fill={MUTED} script anchor="start">
          {t(
            "same as a lift with a snapped cable",
            "jaisi lift jiski cable toot gayi ho"
          )}
        </T>
      </Fade>

      {/* beat 6 — negative total energy */}
      <Draw on={beat >= 6} delay={dl(6, 0.5)} d="M 66 440 v 52" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 1.2)}>
        <T x={84} y={460} size={13} fill={RED} script anchor="start">
          {t(
            "a satellite's total energy is NEGATIVE",
            "satellite ki total energy NEGATIVE hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 4)}>
        <T x={84} y={486} size={13} fill={RED} script anchor="start">
          {t(
            "bound in the gravitational valley",
            "gravitational valley mein bound"
          )}
        </T>
      </Fade>

      {/* beat 7 — the signature of a closed orbit */}
      <Draw on={beat >= 7} delay={dl(7, 0.5)} d="M 480 440 v 52" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={498} y={460} size={13} fill={GREEN} script anchor="start">
          {t(
            "negative E = the signature of a CLOSED orbit",
            "negative E = CLOSED orbit ki pehchaan"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 4)}>
        <T x={498} y={486} size={13} fill={GREEN} script anchor="start">
          {t(
            "not a quirk — the very definition of trapped",
            "koi quirk nahi — trapped hone ki asli paribhasha"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
