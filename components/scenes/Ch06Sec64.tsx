/**
 * Ch06 · Section 64 — "Worked example: fraction of energy in spin [CBSE]"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0,7.42,13.57,25.51,26.51,27.51,28.51,29.51] — b3..b7 fast in EN;
 * hi [0,7.94,13.65,23.47,30.21,34.99,42.07,52.65] — b0,b1,b2 have room in both):
 *  0 title + subline
 *  1 figure: ring ½, disc ⅓, sphere 2/7 (preview, three shapes)
 *  2 formula: fraction = (K²/R²)/(1+K²/R²), disc K²/R²=½
 *  3 substitute: ½/(1+½)
 *  4 green box: = ½/(3/2) = ⅓
 *  5 ⅓ rotational, ⅔ translational
 *  6 ring: ½ · sphere: 2/7
 *  7 pattern: more mass at rim → bigger spin share
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b1 | ring: c(180,175) r45/r34 · "ring" cx180 bl110 · "½" cx180 bl240 ·
 *       disc: c(400,175) r45 hatched · "disc" cx400 bl110 · "⅓" cx400 bl240 ·
 *       sphere: c(620,175) r45 dotted · "sphere" cx620 bl110 · "2/7" cx620 bl240
 *  b2 | sans13 st x700 bl150 / bl springs 178
 *  b3 | sans15 st x700 bl springs 220
 *  b4 | green box x springs 700..1000 y springs 245..290 cx850 bl springs 275
 *  b5 | script13 cx540 bl springs 330
 *  b6 | sans14 cx540 bl springs 365
 *  b7 | script13 cx540 bl springs 400
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER_DARK, GREEN, GREEN_DARK, CREAM,
  Scene,
} from '@/components/scenes/kit';

const HATCH = [-30, -15, 0, 15, 30]
  .map((d) => {
    const h = Math.sqrt(Math.max(0, 45 * 45 - d * d));
    return `M ${400 + d} ${175 - h} V ${175 + h}`;
  })
  .join(" ");

const DOTS = [
  [605, 160],
  [630, 155],
  [615, 180],
  [640, 175],
  [600, 190],
  [625, 195],
]
  .map(([x, y]) => `M ${x - 3} ${y} a 3 3 0 1 0 6 0 a 3 3 0 1 0 -6 0`)
  .join(" ");

export default function Ch06Sec64({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the energy-split test */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "fraction of energy in spin [CBSE board]",
            "spin mein energy ka fraction [CBSE board]"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 3)}>
        <T x={540} y={88} size={12} fill={MUTED} script>
          {t(
            "a rolling disc — what fraction of its KE is rotational?",
            "ek rolling disc — uski KE ka kitna fraction rotational?"
          )}
        </T>
      </Fade>

      {/* beat 1 — the three shapes, previewed */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.5)}
        d="M 135 175 a 45 45 0 1 0 90 0 a 45 45 0 1 0 -90 0 M 146 175 a 34 34 0 1 0 68 0 a 34 34 0 1 0 -68 0"
        stroke={INK}
        sw={2.2}
        dur={0.8}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 1.5)}
        d="M 355 175 a 45 45 0 1 0 90 0 a 45 45 0 1 0 -90 0"
        stroke={INK}
        sw={2.2}
        dur={0.7}
      />
      <Draw on={beat >= 1} delay={dl(1, 2.2)} d={HATCH} stroke={MUTED} sw={1.2} dur={0.6} />
      <Draw
        on={beat >= 1}
        delay={dl(1, 2.9)}
        d="M 575 175 a 45 45 0 1 0 90 0 a 45 45 0 1 0 -90 0"
        stroke={INK}
        sw={2.2}
        dur={0.7}
      />
      <Draw on={beat >= 1} delay={dl(1, 3.6)} d={DOTS} stroke={INK} fill={INK} sw={1.4} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 4.3)}>
        <T x={180} y={110} size={12} fill={MUTED} script>
          ring
        </T>
        <T x={400} y={110} size={12} fill={MUTED} script>
          disc
        </T>
        <T x={620} y={110} size={12} fill={MUTED} script>
          sphere
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 4.8)}>
        <T x={180} y={240} size={16} fill={INK} weight={700}>
          ½
        </T>
        <T x={400} y={240} size={16} fill={INK} weight={700}>
          ⅓
        </T>
        <T x={620} y={240} size={16} fill={INK} weight={700}>
          2/7
        </T>
      </Fade>

      {/* beat 2 — the fraction formula */}
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={700} y={150} size={13} fill={INK} anchor="start" weight={700}>
          {t(
            "fraction = (K²/R²) / (1 + K²/R²)",
            "fraction = (K²/R²) / (1 + K²/R²)"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 4)}>
        <T x={700} y={178} size={13} fill={AMBER_DARK} anchor="start" weight={700}>
          {t("disc: ", "disc: ")}K²/R² = ½
        </T>
      </Fade>

      {/* beat 3 — substitute (fast) */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={700} y={220} size={15} fill={INK} anchor="start" weight={700}>
          = ½ / (1 + ½)
        </T>
      </Fade>

      {/* beat 4 — the answer (fast) */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.1)}
        d="M 700 245 h 300 q 12 0 12 12 v 21 q 0 12 -12 12 h -300 q -12 0 -12 -12 v -21 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.4}
        dur={0.5}
        fill={CREAM}
      />
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={850} y={275} size={17} fill={INK} weight={700}>
          = ½/(3/2) = ⅓
        </T>
      </Fade>

      {/* beat 5 — the split in words (fast) */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={330} size={13} fill={GREEN_DARK} script>
          {t(
            "⅓ of the KE is rotational, ⅔ is translational",
            "⅓ KE rotational hai, ⅔ translational"
          )}
        </T>
      </Fade>

      {/* beat 6 — the other shapes (fast) */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={365} size={14} fill={INK} weight={700}>
          {t("ring: ½ ", "ring: ½ ")}·{t(" sphere: 2/7", " sphere: 2/7")}
        </T>
      </Fade>

      {/* beat 7 — the pattern (fast) */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={400} size={13} fill={GREEN_DARK} script>
          {t(
            "more mass at the rim → bigger share locked into spin",
            "rim par jitni zyada mass → utna bada hissa spin mein"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
