/**
 * Ch07 · Section 8 — "Adding many pulls: the principle of superposition"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 7.85, 16.38, 29.7, 38.57, 47.79, 57.09, 65.96]):
 *  0 title
 *  1 diagram: target m₁ + three masses, force arrows toward each (staggered)
 *  2 formula F₁ = Σ G·m₁·mᵢ/r₁ᵢ² + "each along its own direction"
 *  3 amber note: compute each pair ALONE
 *  4 head-to-tail mini diagram + caption
 *  5 red note: equal pulls at an angle do NOT double
 *  6 recipe: resolve into Fx, Fy (line + underline)
 *  7 green box: F_net = √(Fx²+Fy²), then direction
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52 · diagram x60..420 y100..340: m₁ (200,220) r8 · m₂ (340,130) r10 ·
 *   m₃ (100,300) r12 · m₄ (350,290) r9 · arrows (210,214)→(260,182) / (192,227)→(145,264) /
 *   (211,225)→(266,250) · labels near dots · caption cx240 bl355
 *  b2 | formula cx770 bl130 · note cx770 bl162
 *  b3 | bar x560 y190..242 · lines st x578 bl210 / 236
 *  b4 | vecA (600,330)→(680,290) · vecB (680,290)→(760,310) · resultant (600,330)→(760,310) ·
 *      caption cx700 bl385
 *  b5 | bar x66 y390..442 · lines st x84 bl410 / 436
 *  b6 | line st x560 bl430 (→953) · underline M560 442 h250
 *  b7 | green box x340..760 y470..520 · text cx550 bl500
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
  arrowD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch07Sec8({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — many masses, one net pull */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "Superposition: many pulls add as vectors",
            "Superposition: kai pulls, vector jod"
          )}
        </T>
      </Fade>

      {/* beat 1 — fix the target, arrow toward every mass */}
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <Circle cx={200} cy={220} r={8} fill={INK} />
        <T x={178} y={202} size={13} fill={INK} weight={700}>
          m₁
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <Circle cx={340} cy={130} r={10} fill={MUTED} />
        <T x={366} y={135} size={13} fill={INK} weight={700}>
          m₂
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <Circle cx={100} cy={300} r={12} fill={MUTED} />
        <T x={128} y={305} size={13} fill={INK} weight={700}>
          m₃
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.5)}>
        <Circle cx={350} cy={290} r={9} fill={MUTED} />
        <T x={376} y={295} size={13} fill={INK} weight={700}>
          m₄
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 3.5)}
        d={arrowD(210, 214, 260, 182)}
        stroke={RED}
        sw={2.4}
        dur={0.4}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 4.5)}
        d={arrowD(192, 227, 145, 264)}
        stroke={RED}
        sw={2.4}
        dur={0.4}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 5.5)}
        d={arrowD(211, 225, 266, 250)}
        stroke={RED}
        sw={2.4}
        dur={0.4}
      />
      <Fade on={beat >= 1} delay={dl(1, 7)}>
        <T x={240} y={355} size={12} fill={AMBER_DARK} script>
          {t(
            "an arrow toward EVERY other mass",
            "har doosre mass ki taraf ek arrow"
          )}
        </T>
      </Fade>

      {/* beat 2 — the vector sum */}
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={770} y={130} size={18} fill={INK} weight={800}>
          F₁ = Σᵢ G·m₁·mᵢ ⁄ r₁ᵢ²
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 4.5)}>
        <T x={770} y={162} size={12} fill={MUTED} script>
          {t(
            "each term along its OWN direction — a vector sum",
            "har term apni direction ke saath — vector sum"
          )}
        </T>
      </Fade>

      {/* beat 3 — compute each pair alone */}
      <Draw on={beat >= 3} delay={dl(3, 0.5)} d="M 560 190 v 52" stroke={AMBER_DARK} sw={3.4} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 1.2)}>
        <T x={578} y={210} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "compute each pairwise force ALONE",
            "har pair ka force AKELE compute karo"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 4)}>
        <T x={578} y={236} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "as if the other masses were not there",
            "jaise baaki masses wahan hain hi nahi"
          )}
        </T>
      </Fade>

      {/* beat 4 — head to tail */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 1)}
        d={arrowD(600, 330, 680, 290)}
        stroke={INK}
        sw={2.2}
        dur={0.5}
      />
      <Draw
        on={beat >= 4}
        delay={dl(4, 1.8)}
        d={arrowD(680, 290, 760, 310)}
        stroke={INK}
        sw={2.2}
        dur={0.5}
      />
      <Draw
        on={beat >= 4}
        delay={dl(4, 2.8)}
        d={arrowD(600, 330, 760, 310)}
        stroke={GREEN}
        sw={2.6}
        dur={0.6}
      />
      <Fade on={beat >= 4} delay={dl(4, 4.5)}>
        <T x={700} y={385} size={12} fill={INK} script>
          {t(
            "head-to-tail, as vectors — magnitudes only if collinear",
            "head-to-tail, vectors ki tarah — magnitudes sirf collinear par"
          )}
        </T>
      </Fade>

      {/* beat 5 — pulls at an angle don't just double */}
      <Draw on={beat >= 5} delay={dl(5, 0.5)} d="M 66 390 v 52" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 1.3)}>
        <T x={84} y={410} size={13} fill={RED} script anchor="start">
          {t(
            "two equal pulls at an angle do NOT double",
            "angle par do barabar pulls sirf double NAHI hoti"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 5)}>
        <T x={84} y={436} size={13} fill={RED} script anchor="start">
          {t(
            "they may partly cancel — never shortcut",
            "partly cancel bhi ho sakti hain — shortcut kabhi nahi"
          )}
        </T>
      </Fade>

      {/* beat 6 — the safe recipe */}
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={560} y={430} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "safe recipe: resolve into Fx and Fy, add separately",
            "safe recipe: Fx aur Fy mein resolve karo, alag-alag jodo"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 3.5)} d="M 560 442 h 250" stroke={AMBER_DARK} sw={2} dur={0.4} />

      {/* beat 7 — recombine */}
      <Fade on={beat >= 7} delay={dl(7, 1)}>
        <Draw
          on={beat >= 7}
          delay={dl(7, 1)}
          d="M 352 470 h 396 q 12 0 12 12 v 26 q 0 12 -12 12 h -396 q -12 0 -12 -12 v -26 q 0 -12 12 -12"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.9)}>
        <T x={550} y={500} size={15} fill={INK} weight={800}>
          {t(
            "F(net) = √(Fx² + Fy²) — then read the direction",
            "F(net) = √(Fx² + Fy²) — phir direction padho"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
