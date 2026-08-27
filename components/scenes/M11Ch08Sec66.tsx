/**
 * M11 Ch08 · Section 66 — "The telescoping origin and the method of differences"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type=concept. FLAGGED — real
 * derivation, extra eye-check (task brief).
 *
 * Math check:
 *  Σk²: k³-(k-1)³=3k²-3k+1 (expand (k-1)³). Summing k=1..n, LHS
 *   telescopes to n³. So n³=3Σk²-3Σk+n; solving with Σk=n(n+1)/2 gives
 *   the standard Σk²=n(n+1)(2n+1)/6.
 *  Σk³: (k+1)⁴-k⁴=4k³+6k²+4k+1 (binomial expansion). Summing k=1..n,
 *   LHS telescopes to (n+1)⁴-1; solving with the known Σk², Σk gives
 *   the standard Σk³=[n(n+1)/2]².
 *  Worked check: t_n=n²+n+1 gives t_1..t_5 = 3,7,13,21,31 — first
 *   differences 4,6,8,10 (an AP, confirming t_n is quadratic) ✓.
 *
 * Beats (en [0, 7.42, 19.88, 32.26, 49.24, 57.77, 69.63, 86.36]):
 *  0 title (always-on)
 *  1 LEFT: the cubing identity
 *  2 LEFT: telescopes to n³
 *  3 LEFT: boxed Σk²
 *  4 RIGHT: same idea with 4th powers
 *  5 RIGHT: boxed Σk³
 *  6 text: method of differences insight
 *  7 red-margin: worked check
 *
 * Layout plan — two columns, cxL=285 cxR=795:
 *  b1 | label bl100 · text bl125
 *  b2 | text bl155
 *  b3 | chip x145 y180 w280 h40
 *  b4 | label bl100 · text bl125
 *  b5 | chip x665 y150 w260 h40
 *  b6 | text bl250 cx540
 *  b7 | red bar x76 y275..345 · text bl295/335 x96
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, Chip, T, INK, INK_LIGHT, AMBER_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch08Sec66({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const cxL = 285;
  const cxR = 795;

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={19} fill={INK} anchor="middle" script>
          {t("Where the standard sums come from, and how to find t_n", "Standard sums kahan se aate hain, aur t_n kaise dhoondein")}
        </T>
      </Fade>

      {/* beat 1 — LEFT: the cubing identity */}
      <Fade on={beat >= 1} delay={dl(1, 0.1)}>
        <T x={cxL} y={100} size={13} fill={AMBER_DARK} anchor="middle" weight={700} script>
          {t("Σk², from k³ telescoping", "Σk², k³ telescoping se")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={cxL} y={125} size={14} fill={INK} anchor="middle">
          {"k³ - (k-1)³ = 3k² - 3k + 1"}
        </T>
      </Fade>

      {/* beat 2 — LEFT: telescopes to n³ */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={cxL} y={155} size={13} fill={INK_LIGHT} anchor="middle" script>
          {t("sum k=1..n: left telescopes to n³", "sum k=1..n: left telescope hokar n³")}
        </T>
      </Fade>

      {/* beat 3 — LEFT: boxed Σk² */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <Chip x={145} y={180} w={280} h={40} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={13}>
          {"Σk² = n(n+1)(2n+1)/6"}
        </Chip>
      </Fade>

      {/* beat 4 — RIGHT: same idea, 4th powers */}
      <Fade on={beat >= 4} delay={dl(4, 0.1)}>
        <T x={cxR} y={100} size={13} fill={AMBER_DARK} anchor="middle" weight={700} script>
          {t("Σk³, from k⁴ telescoping", "Σk³, k⁴ telescoping se")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <T x={cxR} y={125} size={13} fill={INK_LIGHT} anchor="middle" script>
          {t("same idea with (k+1)⁴-k⁴ delivers Σn³", "same idea (k+1)⁴-k⁴ se Σn³ deta hai")}
        </T>
      </Fade>

      {/* beat 5 — RIGHT: boxed Σk³ */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <Chip x={665} y={150} w={260} h={40} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={16}>
          {"Σk³ = [n(n+1)/2]²"}
        </Chip>
      </Fade>

      {/* beat 6 — method of differences insight */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={250} size={15} fill={INK} anchor="middle" script>
          {t(
            "method of differences: if first differences form an AP, t_n is quadratic",
            "method of differences: agar first differences AP hain, t_n quadratic hai"
          )}
        </T>
      </Fade>

      {/* beat 7 — red-margin: worked check */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 76 275 v 70" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.8)}>
        <T x={96} y={295} size={15} fill={RED} anchor="start" script>
          {t("3, 7, 13, 21 → differences 4, 6, 8, 10 (AP)", "3, 7, 13, 21 → differences 4, 6, 8, 10 (AP)")}
        </T>
        <T x={96} y={335} size={15} fill={RED} anchor="start">
          {"→ t_n = n² + n + 1"}
        </T>
      </Fade>
    </Scene>
  );
}
