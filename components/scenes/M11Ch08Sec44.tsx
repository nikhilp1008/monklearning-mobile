/**
 * M11 Ch08 · Section 44 — "Inserting four harmonic means"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type=worked_examples.
 *
 * Math check: reciprocals of 1 and 1/6 are 1 and 6. D=(6-1)/(4+1)=1, so
 * the reciprocal AP is 1,2,3,4,5,6. The 4 inserted HMs are the
 * reciprocals of the 4 interior AP terms: 1/2,1/3,1/4,1/5 ✓.
 *
 * Beats (en [0, 9.05, 22.19, 33.37, 44.03, 51.2, 63.15]):
 *  0 title (always-on)
 *  1 text: insert 4 AMs between the reciprocals
 *  2 formula: D = 1
 *  3 THE CHAIN: reciprocal AP 1,2,3,4,5,6, interior highlighted
 *  4 text: HMs are reciprocals of the interior terms
 *  5 formula: 1/2, 1/3, 1/4, 1/5
 *  6 red-margin: always reciprocal AP, then flip back
 *
 * Layout plan:
 *  b1 | text bl100 cx540
 *  b2 | text bl135 cx540
 *  b3 | 6 values bl175 cx170/320/470/620/770/920
 *  b4 | text bl215 cx540
 *  b5 | text bl250 cx540 (bold)
 *  b6 | red bar x76 y275..345 · text bl295/335 x96
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, INK_LIGHT, AMBER_DARK, GREEN_DARK, RED,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch08Sec44({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const chainCx = [170, 320, 470, 620, 770, 920];
  const chainVal = [1, 2, 3, 4, 5, 6];

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={21} fill={INK} anchor="middle" script>
          {t("Insert 4 harmonic means between 1 and 1/6", "1 aur 1/6 ke beech 4 harmonic means insert karo")}
        </T>
      </Fade>

      {/* beat 1 — the setup */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={540} y={100} size={14} fill={INK_LIGHT} anchor="middle" script>
          {t("insert 4 AMs between the reciprocals 1/1=1 and 1/(1/6)=6", "reciprocals 1/1=1 aur 1/(1/6)=6 ke beech 4 AMs insert karo")}
        </T>
      </Fade>

      {/* beat 2 — D */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={540} y={135} size={17} fill={INK} anchor="middle">
          {"D = (6-1)/(4+1) = 1"}
        </T>
      </Fade>

      {/* beat 3 — THE CHAIN: reciprocal AP */}
      {chainCx.map((cx, i) => (
        <Fade key={i} on={beat >= 3} delay={dl(3, 0.2 + i * 0.2)}>
          <T x={cx} y={175} size={18} fill={i === 0 || i === 5 ? INK : AMBER_DARK} anchor="middle" weight={700}>
            {chainVal[i]}
          </T>
        </Fade>
      ))}

      {/* beat 4 — HMs are reciprocals of interior terms */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={215} size={14} fill={INK_LIGHT} anchor="middle" script>
          {t("the HMs are the reciprocals of the interior AP terms", "HMs, interior AP terms ke reciprocals hain")}
        </T>
      </Fade>

      {/* beat 5 — the HMs */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={250} size={17} fill={GREEN_DARK} anchor="middle" weight={700}>
          {"1/2, 1/3, 1/4, 1/5"}
        </T>
      </Fade>

      {/* beat 6 — red-margin: reciprocal AP then flip back */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 76 275 v 70" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={96} y={295} size={15} fill={RED} anchor="start" script>
          {t("always work the means in the", "means ko hamesha reciprocal AP mein")}
        </T>
        <T x={96} y={335} size={15} fill={RED} anchor="start" script>
          {t("reciprocal AP, then flip back", "kaam karo, phir flip back karo")}
        </T>
      </Fade>
    </Scene>
  );
}
