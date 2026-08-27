/**
 * C11 Ch02 · Section 3 — "Two rival blueprints: plum-pudding vs nuclear"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (en [0, 7.42, 14.42, 25.69, 33.71, 46.17, 57.94, 70.49]):
 *  0 anchor: same 3 parts (e⁻/p⁺/n), scattered with a "?" — how are they packed?
 *  1 set up two empty slots (dashed circles) divided by "VS"
 *  2 represent: Thomson's plum-pudding fills the left slot
 *  3 represent: Rutherford's nuclear atom fills the right slot
 *  4 explain the move: ring the nucleus — nearly all mass+charge crushed there
 *  5 guardrail: most of the atom is empty space, electrons whirl far outside
 *  6 guardrail (high): explains scattering, FAILS stability + line spectra
 *  7 land/teaser: atoms don't collapse — gap opens the Bohr model
 *
 * Layout plan:
 *  title (always)                | T mid | x540 y62 size22 script red
 *  b0 | recap circle              | Fade  | cx540 cy140 r50
 *  b0 | "?" overlay                | T mid | cx540 y148 size30           [dims@b1]
 *  b0 | e⁻/p⁺/n scattered labels  | T     | ~x505..575 y108..172        [dims@b1]
 *  b0 | "same parts — how packed?"| T mid | x540 y206
 *  b1 | left slot (dashed circle) | Fade  | cx290 cy300 r75 → x215..365 y225..375
 *  b1 | right slot (dashed circle)| Fade  | cx790 cy300 r75 → x715..865 y225..375
 *  b1 | "VS"                     | T mid | x540 y308
 *  b1 | left "?" (removed@b2)    | T mid | cx290 y308
 *  b1 | right "?" (removed@b3)   | T mid | cx790 y308
 *  b2 | Thomson fill wash        | Fade  | cx290 cy300 r70
 *  b2 | 5 embedded electron dots | Fade  | inside left circle
 *  b2 | "Thomson: plum-pudding"  | T mid | x290 y415
 *  b3 | nucleus dot               | Fade  | cx790 cy300 r6 (RED)
 *  b3 | orbit ring (thin)         | Fade  | cx790 cy300 r55
 *  b3 | 4 orbiting electron dots | Fade  | corners of r55 circle
 *  b3 | "Rutherford: nuclear"    | T mid | x790 y415
 *  b4 | ring on nucleus           | Draw  | ringD(790,300,16,14)
 *  b4 | leader + annotation       | Draw/T| x810..880 y300 → lbl x888 y304
 *  b5 | "mostly empty space" lbl | T mid | x540 y458
 *  b6 | guardrail chip (RED)     | Chip  | x280..800 y486..520
 *  b7 | teaser line (GREEN)      | T mid | x540 y560
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
  ringD,
  INK,
  MUTED,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

const RUTHERFORD_ELECTRONS: [number, number][] = [
  [828.9, 338.9],
  [751.1, 338.9],
  [751.1, 261.1],
  [828.9, 261.1],
];

const THOMSON_ELECTRONS: [number, number][] = [
  [265, 275],
  [315, 280],
  [280, 320],
  [325, 315],
  [255, 310],
];

export default function C11Ch02Sec3({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={62} size={22} fill={RED} script>
          {t(
            "how are the pieces packed inside the atom?",
            "atom ke andar pieces kaise packed hain?"
          )}
        </T>
      </Fade>

      {/* beat 0 — anchor: same 3 parts, but how are they arranged? */}
      <Fade on={beat >= 0} dim={beat >= 1} delay={dl(0, 0.2)}>
        <Circle cx={540} cy={140} r={50} fill="none" stroke={MUTED} strokeWidth={2} />
      </Fade>
      <Fade on={beat >= 0} dim={beat >= 1} delay={dl(0, 0.8)}>
        <T x={540} y={148} size={30} fill={MUTED}>
          ?
        </T>
      </Fade>
      <Fade on={beat >= 0} dim={beat >= 1} delay={dl(0, 1.4)}>
        <T x={510} y={108} size={12} fill={INK}>
          e⁻
        </T>
      </Fade>
      <Fade on={beat >= 0} dim={beat >= 1} delay={dl(0, 1.8)}>
        <T x={572} y={150} size={12} fill={INK} anchor="start">
          p⁺
        </T>
      </Fade>
      <Fade on={beat >= 0} dim={beat >= 1} delay={dl(0, 2.2)}>
        <T x={505} y={172} size={12} fill={INK} anchor="start">
          n
        </T>
      </Fade>
      <Fade on={beat >= 0} dim={beat >= 1} delay={dl(0, 2.8)}>
        <T x={540} y={206} size={13} fill={MUTED} script>
          {t("same parts — how packed?", "same parts — kaise packed?")}
        </T>
      </Fade>

      {/* beat 1 — two empty slots, divided by VS */}
      <Fade on={beat >= 1} delay={dl(1, 0.1)}>
        <Circle cx={290} cy={300} r={75} fill="none" stroke={MUTED} strokeWidth={2} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <Circle cx={790} cy={300} r={75} fill="none" stroke={MUTED} strokeWidth={2} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.1)}>
        <T x={540} y={308} size={22} fill={INK} weight={700}>
          VS
        </T>
      </Fade>
      <Fade on={beat === 1} delay={dl(1, 1.4)}>
        <T x={290} y={308} size={28} fill={MUTED}>
          ?
        </T>
      </Fade>
      <Fade on={beat >= 1 && beat < 3} delay={dl(1, 1.7)}>
        <T x={790} y={308} size={28} fill={MUTED}>
          ?
        </T>
      </Fade>

      {/* beat 2 — represent: Thomson's plum-pudding */}
      <Fade on={beat >= 2} delay={dl(2, 0.1)}>
        <Circle cx={290} cy={300} r={70} fill={CREAM} />
      </Fade>
      {THOMSON_ELECTRONS.map(([x, y], i) => (
        <Fade key={`te${i}`} on={beat >= 2} delay={dl(2, 0.8 + i * 0.2)}>
          <Circle cx={x} cy={y} r={5} fill={INK} />
        </Fade>
      ))}
      <Fade on={beat >= 2} delay={dl(2, 2.2)}>
        <T x={290} y={415} size={13} fill={INK} weight={700}>
          {t("Thomson: plum-pudding", "Thomson: plum-pudding")}
        </T>
      </Fade>

      {/* beat 3 — represent: Rutherford's nuclear atom */}
      <Fade on={beat >= 3} delay={dl(3, 0.1)}>
        <Circle cx={790} cy={300} r={6} fill={RED} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <Circle cx={790} cy={300} r={55} fill="none" stroke={MUTED} strokeWidth={1.4} />
      </Fade>
      {RUTHERFORD_ELECTRONS.map(([x, y], i) => (
        <Fade key={`re${i}`} on={beat >= 3} delay={dl(3, 1.2 + i * 0.2)}>
          <Circle cx={x} cy={y} r={4} fill={INK} />
        </Fade>
      ))}
      <Fade on={beat >= 3} delay={dl(3, 2.4)}>
        <T x={790} y={415} size={13} fill={INK} weight={700}>
          {t("Rutherford: nuclear", "Rutherford: nuclear")}
        </T>
      </Fade>

      {/* beat 4 — explain the move: ring the nucleus */}
      <Draw on={beat >= 4} delay={dl(4, 0.2)} d={ringD(790, 300, 16, 14)} stroke={RED} sw={2} dur={0.6} />
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.9)}
        d="M 810 300 L 880 300"
        stroke={RED}
        sw={1.8}
        dur={0.4}
      />
      <Fade on={beat >= 4} delay={dl(4, 1.4)}>
        <T x={888} y={304} size={11} fill={RED} anchor="start" script>
          {t("≈ all mass + charge here", "≈ saara mass + charge yahin")}
        </T>
      </Fade>

      {/* beat 5 — guardrail: mostly empty space */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={458} size={15} fill={MUTED} script>
          {t(
            "most of the atom is empty space — electrons whirl far outside",
            "atom ka zyada hissa khaali space hai — electrons door ghoomte hain"
          )}
        </T>
      </Fade>

      {/* beat 6 — guardrail (high): explains scattering, fails stability/spectra */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Chip x={280} y={486} w={520} h={34} fill={CREAM} stroke={RED} textFill={RED} size={14} script={false}>
          {t("explains scattering, but FAILS: stability + line spectra", "scattering explain karta hai, par FAILS: stability + spectra")}
        </Chip>
      </Fade>

      {/* beat 7 — land/teaser: the gap that opens the Bohr model */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={540} y={560} size={16} fill={GREEN} script>
          {t(
            "atoms don't collapse — this gap opens the Bohr model",
            "atoms collapse nahi hote — yahi gap Bohr model kholta hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
