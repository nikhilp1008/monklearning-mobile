/**
 * Ch07 · Section 10 — "Worked example: think in ratios, not numbers (NEET)"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 1, 2, 3, 7.78, 17.85, 24.85]):
 *  0 title
 *  1 problem line
 *  2 formula F ∝ m₁m₂/r²
 *  3 factor card 1: ×3 mass → F ×3
 *  4 factor card 2: r ÷ 2 → r² ÷ 4 → F ×4 (the sneaky square)
 *  5 green box: F_new = 3 × 4 × F₀ = 12 F₀
 *  6 red trap: 6F₀ crossed out — distance enters as a SQUARE
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52 · problem cx540 bl84
 *  formula cx540 bl150 (22 sans)
 *  card1 x150..480 y200..300: "one mass × 3" bl235 · "F × 3" bl278
 *  card2 x600..930 y200..300: "r ÷ 2 → r² ÷ 4" bl235 · "F × 4" bl278
 *  green box x340..740 y350..405 · text cx540 bl385
 *  b6 | bar x66 y450..510 · l1 st x84 bl470 · "6F₀" cx480 bl488 + cross · l2 st x84 bl496
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  crossD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch07Sec10({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — ten seconds, in your head */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "Example [NEET] — think in ratios, respect the square",
            "Example [NEET] — ratios mein socho, square ki izzat karo"
          )}
        </T>
      </Fade>

      {/* beat 1 — the problem */}
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={540} y={84} size={12} fill={MUTED} script>
          {t(
            "force is F₀ · one mass ×3 · distance halved — find the new force",
            "force hai F₀ · ek mass ×3 · distance aadha — naya force nikaalo"
          )}
        </T>
      </Fade>

      {/* beat 2 — the ratio machine */}
      <Fade on={beat >= 2} delay={dl(2, 0.5)}>
        <T x={540} y={150} size={22} fill={INK} weight={800}>
          F ∝ m₁·m₂ ⁄ r²
        </T>
      </Fade>

      {/* beat 3 — factor one */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 0.5)}
        d="M 162 200 h 306 q 12 0 12 12 v 76 q 0 12 -12 12 h -306 q -12 0 -12 -12 v -76 q 0 -12 12 -12"
        stroke={AMBER}
        sw={2}
        dur={0.5}
      />
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={315} y={235} size={14} fill={AMBER_DARK} script>
          {t("one mass × 3", "ek mass × 3")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.6)}>
        <T x={315} y={278} size={18} fill={GREEN} weight={800}>
          F × 3
        </T>
      </Fade>

      {/* beat 4 — the sneaky square */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.8)}
        d="M 612 200 h 306 q 12 0 12 12 v 76 q 0 12 -12 12 h -306 q -12 0 -12 -12 v -76 q 0 -12 12 -12"
        stroke={AMBER}
        sw={2}
        dur={0.5}
      />
      <Fade on={beat >= 4} delay={dl(4, 1.6)}>
        <T x={765} y={235} size={14} fill={AMBER_DARK} script>
          {t("r ÷ 2  →  r² ÷ 4", "r ÷ 2  →  r² ÷ 4")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 4)}>
        <T x={765} y={278} size={18} fill={GREEN} weight={800}>
          F × 4
        </T>
      </Fade>

      {/* beat 5 — combine */}
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <Draw
          on={beat >= 5}
          delay={dl(5, 0.8)}
          d="M 352 350 h 376 q 12 0 12 12 v 31 q 0 12 -12 12 h -376 q -12 0 -12 -12 v -31 q 0 -12 12 -12"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={540} y={385} size={17} fill={INK} weight={800}>
          F(new) = 3 × 4 × F₀ = 12·F₀
        </T>
      </Fade>

      {/* beat 6 — the 6F₀ trap */}
      <Draw on={beat >= 6} delay={dl(6, 0.5)} d="M 66 450 v 60" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 1.2)}>
        <T x={84} y={470} size={13} fill={RED} script anchor="start">
          {t(
            "the classic trap: answering 3 × 2 =",
            "classic trap: 3 × 2 = likh dena"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 3)}>
        <T x={420} y={475} size={20} fill={RED} weight={800}>
          6F₀
        </T>
      </Fade>
      <Draw
        on={beat >= 6}
        delay={dl(6, 4)}
        d={crossD(396, 460, 48, 20)}
        stroke={RED}
        sw={2.6}
        dur={0.5}
      />
      <Fade on={beat >= 6} delay={dl(6, 5.5)}>
        <T x={84} y={496} size={13} fill={RED} script anchor="start">
          {t(
            "distance enters as a SQUARE — halving boosts by 4, not 2",
            "distance SQUARE mein aata hai — aadha karne par ×4, ×2 nahi"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
