/**
 * M11 Ch08 · Section 17 — "Inserting eleven arithmetic means"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type=worked_examples.
 *
 * Math check: d=(10-28)/(11+1)=-18/12=-3/2. A_5=28+5d=28-7.5=41/2 ✓.
 * A_6=28+6d=28-9=19 ✓ = AM(28,10)=(28+10)/2=19 ✓ (must be the centre,
 * since 6 is exactly the middle of 1..11). A_7=28+7d=28-10.5=35/2 ✓.
 *
 * Beats (en [0, 10.92, 23.21, 33.37, 43.01, 52.91, 70.31]):
 *  0 title (always-on)
 *  1 chain: 28, A_1, A_2, ⋯, A_11, 10 — caption "12 gaps"
 *  2 formula: d
 *  3 position row 1..11, middle three (5,6,7) highlighted
 *  4 formula: A_5, A_6, A_7
 *  5 red-margin: A_6 is the AM, the centre
 *  6 boxed answer
 *
 * Layout plan:
 *  b1 | 6 tokens bl100 cx130/290/450/610/770/930 · caption bl130 cx540
 *  b2 | text bl170 cx540
 *  b3 | 11 numbers bl205 cx220..860 step64 · caption bl235 cx540
 *  b4 | text bl265 cx540
 *  b5 | red bar x76 y290..360 · text bl310/350 x96
 *  b6 | chip x330 y380 w420 h44 (text bl~407)
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, Chip, T, INK, INK_LIGHT, MUTED, AMBER_DARK, RED, GREEN_DARK, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch08Sec17({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const chainCx = [130, 290, 450, 610, 770, 930];
  const chainLabel = ["28", "A_1", "A_2", "⋯", "A_11", "10"];
  const posCx = Array.from({ length: 11 }, (_, i) => 220 + i * 64);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={21} fill={INK} anchor="middle" script>
          {t("Insert 11 AMs between 28 and 10; find the three middle means", "28 aur 10 ke beech 11 AMs insert karo; teen middle means nikalo")}
        </T>
      </Fade>

      {/* beat 1 — the extended chain */}
      {chainCx.map((cx, i) => (
        <Fade key={i} on={beat >= 1} delay={dl(1, 0.2 + i * 0.2)}>
          <T x={cx} y={100} size={16} fill={i === 0 || i === 5 ? INK : AMBER_DARK} anchor="middle" weight={700}>
            {chainLabel[i]}
          </T>
        </Fade>
      ))}
      <Fade on={beat >= 1} delay={dl(1, 1.4)}>
        <T x={540} y={130} size={13} fill={INK_LIGHT} anchor="middle" script>
          {t("the extended AP has 12 gaps", "extended AP mein 12 gaps hain")}
        </T>
      </Fade>

      {/* beat 2 — d */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={540} y={170} size={16} fill={INK} anchor="middle">
          {"d = (10-28)/(11+1) = -18/12 = -3/2"}
        </T>
      </Fade>

      {/* beat 3 — position row, middle three highlighted */}
      {posCx.map((x, i) => (
        <Fade key={i} on={beat >= 3} delay={dl(3, 0.1 + i * 0.08)}>
          <T x={x} y={205} size={13} fill={i >= 4 && i <= 6 ? AMBER_DARK : MUTED} anchor="middle" weight={i >= 4 && i <= 6 ? 700 : 400}>
            {i + 1}
          </T>
        </Fade>
      ))}
      <Fade on={beat >= 3} delay={dl(3, 1.2)}>
        <T x={540} y={235} size={14} fill={INK} anchor="middle" script>
          {t("three middle ones: A_5, A_6, A_7", "teen middle: A_5, A_6, A_7")}
        </T>
      </Fade>

      {/* beat 4 — compute the three means */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={265} size={16} fill={INK} anchor="middle">
          {"A_5 = 28+5d = 41/2,   A_6 = 19,   A_7 = 35/2"}
        </T>
      </Fade>

      {/* beat 5 — red-margin: the centre */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M 76 290 v 70" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={96} y={310} size={15} fill={RED} anchor="start" script>
          {t("A_6=19 is the AM of 28 and 10 —", "A_6=19, 28 aur 10 ka AM hai —")}
        </T>
        <T x={96} y={350} size={15} fill={RED} anchor="start" script>
          {t("the centre of a symmetric AP", "symmetric AP ka centre")}
        </T>
      </Fade>

      {/* beat 6 — boxed answer */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <Chip x={330} y={380} w={420} h={44} fill={CREAM} stroke={GREEN_DARK} textFill={GREEN_DARK} size={16}>
          {t("middle means: 41/2, 19, 35/2", "middle means: 41/2, 19, 35/2")}
        </Chip>
      </Fade>
    </Scene>
  );
}
