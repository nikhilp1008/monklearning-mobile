/**
 * Ch14 · Section 1 — "What a wave actually is"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 12.91, 23.73, 37.06, 53.71, 61.63, 76.62, 85.78]):
 *  0 stadium-wave hook: a row of 9 dots (the medium), a ripple runs through them
 *  1 ring the centre dot: it only moves up/down, never travels
 *  2 verdict chip: energy & momentum travel, not the medium
 *  3 pond/twig cameo (story band): ripples expand, twig only bobs
 *  4 every particle: two more tick-marks + caption
 *  5 phase handed dot-to-dot: a quick chain of arrows sweeps the row
 *  6 verdict chip swaps: speed is the medium's rule, not the source's
 *  7 verdict chip swaps again: louder/higher-pitched ≠ faster
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | title (script 28, red)        | T mid | x540 bl68            y38..75
 *  b0 | mean line (dashed look)       | Draw  | x90..990  y400
 *  b0 | 9 dots (r6) + ripple anim     | Fade  | x120..960 y378..406 (settled bump −22..0)
 *  b0 | caption "each dot=particle"   | T mid | x540 bl456           (dim at beat4)
 *  b1 | ring on centre dot            | Draw  | cx540 cy378 rx16 ry16
 *  b1 | double arrow (up/down)        | Draw  | x590  y345..410
 *  b1 | "stays right here" (13,red)   | T mid | x590 bl326           y309..335
 *  b2 | verdict chip (h44)            | Chip  | x300..780 y500..544  (dim at beat6)
 *  b3 | drop dot + 3 rings            | Draw  | c(540,175) r20/38/56  y95..231
 *  b3 | twig stroke                   | Draw  | x577..593 y138..144
 *  b3 | twig bob arrow                | Draw  | x585  y100..130
 *  b3 | "only bobs" (12,red)          | T st  | x600  bl118          y104..124
 *  b3 | outward arrow                 | Draw  | x606..666 y175
 *  b3 | "energy outward" (12,green)   | T mid | x636 bl196           y183..199
 *  b4 | 2 tick-marks on dots 2 & 6    | Draw  | x330/750  y381..391
 *  b4 | caption "every particle..."   | T mid | x540 bl456           (dim at beat5)
 *  b5 | 8 handoff arrows along row    | Draw  | x120..960 y400
 *  b5 | caption "phase passed on"     | T mid | x540 bl456           (final)
 *  b6 | verdict chip swap (h44)       | Chip  | x300..780 y500..544  (dim at beat7)
 *  b7 | verdict chip swap (h44)       | Chip  | x300..780 y500..544  (final)
 */

import React from "react";
import { Circle } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  arrowD,
  ringD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
  Bob,
} from '@/components/scenes/kit';

const DOT_X = [120, 225, 330, 435, 540, 645, 750, 855, 960];
const SETTLED = [0, -4, -14, -20, -22, -20, -14, -4, 0];

function doubleArrowD(x: number, yTop: number, yBot: number): string {
  const mid = (yTop + yBot) / 2;
  return `${arrowD(x, mid, x, yTop)} ${arrowD(x, mid, x, yBot)}`;
}

export default function Ch14Sec1({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      

      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={68} size={28} fill={RED} script>
          {t("the pattern travels, not the particles", "pattern travel karta hai, particles nahi")}
        </T>
      </Fade>

      {/* beat 0 — the row of particles + a ripple through them */}
      <Draw
        on={beat >= 0}
        delay={dl(0, 0.2)}
        d="M 90 400 L 990 400"
        stroke={MUTED}
        sw={1.6}
        dur={0.6}
      />
      <Fade on={beat >= 0} delay={dl(0, 0.6)}>
        <>
          {DOT_X.map((x, i) => (
            // Each particle only bobs in place; the per-dot stagger is what
            // makes a ripple appear to travel, which is the scene's whole point.
            <Bob
              key={i}
              active={beat === 0}
              delay={i * 90}
              settled={beat > 0 ? SETTLED[i] : 0}>
              <Circle cx={x} cy={400} r={6} fill={INK} />
            </Bob>
          ))}
        </>
      </Fade>
      <Fade on={beat >= 0} dim={beat >= 4} delay={dl(0, 1.4)}>
        <T x={540} y={456} size={13} fill={INK} script>
          {t("each dot = one particle of the medium", "har dot = medium ka ek particle")}
        </T>
      </Fade>

      {/* beat 1 — the centre particle only bobs, it never travels */}
      <Draw on={beat >= 1} delay={dl(1, 0.3)} d={ringD(540, 378, 16, 16)} stroke={AMBER} sw={2.4} dur={0.6} />
      <Draw
        on={beat >= 1}
        delay={dl(1, 1.0)}
        d={doubleArrowD(590, 345, 410)}
        stroke={RED}
        sw={2.4}
        dur={0.5}
      />
      <Fade on={beat >= 1} delay={dl(1, 1.7)}>
        <T x={590} y={326} size={13} fill={RED} script>
          {t("stays right here", "yahin ruka rehta")}
        </T>
      </Fade>

      {/* beat 2 — verdict: energy & momentum travel, not the medium */}
      <Fade on={beat >= 2} dim={beat >= 6} delay={dl(2, 1.2)}>
        <Chip x={300} y={500} w={480} h={44} fill="#fff" stroke={GREEN} textFill={INK} size={17}>
          {t("energy & momentum travel, not the medium", "energy-momentum travel karte, medium nahi")}
        </Chip>
      </Fade>

      {/* beat 3 — pond & twig cameo */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <Circle cx={540} cy={175} r={3} fill={INK} />
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 0.5)} d="M 520 175 A 20 20 0 1 1 560 175 A 20 20 0 1 1 520 175" stroke={GREEN} sw={1.8} dur={0.5} />
      <Draw on={beat >= 3} delay={dl(3, 1.0)} d="M 502 175 A 38 38 0 1 1 578 175 A 38 38 0 1 1 502 175" stroke={GREEN} sw={1.8} dur={0.5} />
      <Draw on={beat >= 3} delay={dl(3, 1.5)} d="M 484 175 A 56 56 0 1 1 596 175 A 56 56 0 1 1 484 175" stroke={GREEN} sw={1.8} dur={0.5} />
      <Draw
        on={beat >= 3}
        delay={dl(3, 2.2)}
        d="M 577 138 L 593 144"
        stroke={AMBER_DARK}
        sw={3}
        dur={0.3}
      />
      <Draw
        on={beat >= 3}
        delay={dl(3, 2.6)}
        d={doubleArrowD(585, 100, 130)}
        stroke={RED}
        sw={2}
        dur={0.4}
      />
      <Fade on={beat >= 3} delay={dl(3, 3.1)}>
        <T x={600} y={118} size={12} fill={RED} script anchor="start">
          {t("only bobs", "sirf bobs karta")}
        </T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 3.6)}
        d={arrowD(606, 175, 666, 175)}
        stroke={GREEN}
        sw={2.2}
        dur={0.4}
      />
      <Fade on={beat >= 3} delay={dl(3, 4.1)}>
        <T x={636} y={196} size={12} fill={GREEN}>
          {t("energy outward", "energy bahar")}
        </T>
      </Fade>

      {/* beat 4 — every particle does its own tiny oscillation */}
      <Draw on={beat >= 4} delay={dl(4, 0.4)} d="M 330 381 L 330 391" stroke={MUTED} sw={2} dur={0.3} />
      <Draw on={beat >= 4} delay={dl(4, 0.7)} d="M 750 381 L 750 391" stroke={MUTED} sw={2} dur={0.3} />
      <Fade on={beat >= 4} dim={beat >= 5} delay={dl(4, 1.3)}>
        <T x={540} y={456} size={13} fill={INK} script>
          {t("every particle: its own tiny oscillation", "har particle: apna chhota oscillation")}
        </T>
      </Fade>

      {/* beat 5 — the phase is handed from particle to particle */}
      {DOT_X.slice(0, -1).map((x, i) => (
        <Draw
          key={x}
          on={beat >= 5}
          delay={dl(5, 0.3 + i * 0.15)}
          d={arrowD(x + 12, 400, DOT_X[i + 1] - 12, 400)}
          stroke={AMBER}
          sw={1.8}
          dur={0.25}
        />
      ))}
      <Fade on={beat >= 5} delay={dl(5, 1.8)}>
        <T x={540} y={456} size={13} fill={AMBER_DARK} script>
          {t("phase passed on, particle to particle", "phase agle particle ko pass hota")}
        </T>
      </Fade>

      {/* beat 6 — verdict swap: speed is the medium's rule */}
      <Fade on={beat >= 6} dim={beat >= 7} delay={dl(6, 1.0)}>
        <Chip x={300} y={500} w={480} h={44} fill="#fff" stroke={AMBER_DARK} textFill={INK} size={17}>
          {t("wave speed = medium's rule, not the source's", "wave speed = medium ka rule, source ka nahi")}
        </Chip>
      </Fade>

      {/* beat 7 — verdict swap: louder/higher-pitched ≠ faster */}
      <Fade on={beat >= 7} delay={dl(7, 0.8)}>
        <Chip x={300} y={500} w={480} h={44} fill="#fff" stroke={RED} textFill={RED} size={17}>
          {t("loud or high-pitched ≠ faster wave", "loud ya high-pitch ≠ fast wave nahi")}
        </Chip>
      </Fade>
    </Scene>
  );
}
