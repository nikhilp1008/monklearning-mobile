/**
 * C11 Chemistry Ch05 · Section 11 — "Hess's law and the formation reference
 * table"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (board_reveal_at, en [0,8.87,25.26,40.02,48.98,66.39,71.17,89.94]):
 *  0 A and D nodes land (two fixed endpoints, any route)
 *  1 train-ticket analogy caption
 *  2 B node + direct arrow (A→D) + two-step arrows (A→B→D), all labelled
 *  3 red note: Hess's law = first law in chemical clothes
 *  4 power example caption: C + ½O2 → CO
 *  5 new heading + underline: the formation reference table
 *  6 content: zero ΔfH to elements in most stable form
 *  7 green equation chip: ΔH(direct) = ΔH(step1) + ΔH(step2)
 *
 * Layout plan (triangle A/D at y150, B at y330, centered x450):
 *  b0 | A dot+label / D dot+label     | circle+T | (250,150) (650,150)
 *  b1 | caption (14, muted)           | T mid    | y91..106 (bl102)
 *  b2 | B dot+label                   | circle+T | (450,330)
 *  b2 | direct arrow + label          | Draw+T   | (280,150)→(620,150)
 *  b2 | step1/step2 arrows + labels   | Draw+T   | via B
 *  b3 | red note chip (14)            | Chip     | x260..880 y375..410
 *  b4 | power caption (14)            | T mid    | y429..444 (bl440)
 *  b5 | heading5 (18, w800)           | T mid    | y461..481 (bl475)
 *  b5 | underline5                    | Draw     | y485 x360..720
 *  b6 | content6 (14)                 | T mid    | y504..519 (bl515)
 *  b7 | green chip (15)               | Chip     | x290..790 y530..566
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
  INK,
  MUTED,
  GREEN,
  RED,
  CREAM,
  AMBER_DARK,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch05Sec11({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={26} fill={RED} script>
          {t("Hess's law: constant heat summation", "Hess's law: constant heat summation")}
        </T>
      </Fade>

      {/* beat 0 — A and D, the fixed endpoints */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <Circle cx={250} cy={150} r={5} fill={INK} />
        <T x={250} y={135} size={16} weight={800} fill={INK}>
          A
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <Circle cx={650} cy={150} r={5} fill={INK} />
        <T x={650} y={135} size={16} weight={800} fill={INK}>
          D
        </T>
      </Fade>

      {/* beat 1 — train-ticket analogy */}
      <Fade on={beat >= 1} delay={dl(1, 0.1)}>
        <T x={540} y={102} size={14} fill={MUTED}>
          {t(
            "Chennai → Delhi: direct fare = two-leg fare via Nagpur",
            "Chennai → Delhi: direct fare = do-leg fare via Nagpur"
          )}
        </T>
      </Fade>

      {/* beat 2 — B node + direct arrow + two-step arrows */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <Circle cx={450} cy={330} r={5} fill={INK} />
        <T x={450} y={355} size={16} weight={800} fill={INK}>
          B
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.3)} d={arrowD(280, 150, 620, 150)} stroke={AMBER_DARK} sw={2.4} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 0.7)}>
        <T x={450} y={130} size={13} fill={AMBER_DARK}>
          {t("direct", "direct")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1)} d={arrowD(265, 168, 432, 312)} stroke={GREEN} sw={2.2} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 1.3)}>
        <T x={295} y={255} size={13} fill={GREEN}>
          {t("step 1", "step 1")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.6)} d={arrowD(468, 312, 635, 168)} stroke={GREEN} sw={2.2} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 1.9)}>
        <T x={605} y={255} size={13} fill={GREEN}>
          {t("step 2", "step 2")}
        </T>
      </Fade>

      {/* beat 3 — red note */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <Chip x={260} y={375} w={620} h={35} fill={CREAM} stroke={RED} textFill={RED} size={14} script={false}>
          {t(
            "Hess's law is the first law wearing chemical clothes",
            "Hess's law first law hi hai, bas chemistry ke kapde pehne hue"
          )}
        </Chip>
      </Fade>

      {/* beat 4 — power example */}
      <Fade on={beat >= 4} delay={dl(4, 0.1)}>
        <T x={540} y={440} size={14} fill={INK}>
          {t(
            "gives ΔH we can't measure directly: C + ½O2 → CO (some CO2 always forms)",
            "wo ΔH deta hai jo directly naap nahi sakte: C + ½O2 → CO (kuch CO2 bhi banta hai)"
          )}
        </T>
      </Fade>

      {/* beat 5 — new heading */}
      <Fade on={beat >= 5} delay={dl(5, 0.1)}>
        <T x={540} y={475} size={18} weight={800} fill={INK}>
          {t("The formation reference table", "The formation reference table")}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 0.6)} d="M 360 485 C 430 482, 650 482, 720 485" stroke={AMBER_DARK} sw={2} dur={0.5} />

      {/* beat 6 — zero ΔfH content */}
      <Fade on={beat >= 6} delay={dl(6, 0.1)}>
        <T x={540} y={515} size={14} fill={INK}>
          {t(
            "zero ΔfH to every element in its most stable form — a sea-level datum",
            "har element ko uske most stable form mein zero ΔfH do — ek sea-level datum"
          )}
        </T>
      </Fade>

      {/* beat 7 — equation chip */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <Chip x={290} y={530} w={500} h={36} fill={GREEN} textFill="#fff" size={15} script={false}>
          ΔH(direct) = ΔH(step1) + ΔH(step2)
        </Chip>
      </Fade>
    </Scene>
  );
}
