/**
 * M11 Ch13 · Section 39 — "Worked example: reconstructing two missing observations"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples — applies Sec 35's procedure to real numbers.
 *
 * Verified: 5 obs, mean=6, variance=6.8, known 2,4,9.
 *  a+b = 5(6)-(2+4+9) = 30-15 = 15
 *  (a-6)²+(b-6)² = 5(6.8) - (16+4+9) = 34-29 = 5
 *  p=a-6,q=b-6: p+q=3, p²+q²=5 ⇒ (p+q)²=9=5+2pq ⇒ pq=2
 *  t²-3t+2=0 ⇒ (t-1)(t-2)=0 ⇒ t=1,2 ⇒ {a,b}={7,8}
 *  Check: 2,4,9,7,8 sum=30, mean=6 ✓. Deviations² 16,4,9,1,4 sum=34, /5=6.8 ✓
 *
 * Beats (board_reveal_at_english [0, 17.58, 27.56, 43.43, 63.74, 88.49, 106.41]):
 *  0 anchor: heading
 *  1 represent: given (5 obs, mean 6, variance 6.8, known 2,4,9, find a,b)
 *  2 represent: 2+4+9+a+b = 5×6 = 30 ⇒ a+b = 15
 *  3 represent: Σ(x_i-6)² = 5×6.8 = 34 ⇒ (a-6)²+(b-6)² = 5
 *  4 represent: p=a-6,q=b-6: p+q=3, p²+q²=5 ⇒ pq=2
 *  5 land (boxed, high emphasis): t²-3t+2=0 ⇒ t=1,2 ⇒ {a,b}={7,8}
 *  6 sanity check (red-margin): 2,4,9,7,8 → mean=6 ✓, variance=6.8 ✓
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  title (script 17, red, always-on)     | T mid | x540 y50
 *  b0 | heading (script 13, amber_dark)  | T mid | x540 y74
 *  b1 | text (13, ink)                   | T mid | x540 y98
 *  b2 | formula (14, ink)                | T mid | x540 y122
 *  b3 | formula (14, ink)                | T mid | x540 y146
 *  b4 | formula (14, ink)                | T mid | x540 y170
 *  b5 | boxed (17, green)                | Draw+T| box x260..820 y190..234
 *  b6 | red bar + note (2 lines, 14)     | Draw+T| x60 y256..294 · text y270/290
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD } from "./math-kit";

export default function M11Ch13Sec39({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={50} size={17} fill={RED} anchor="middle" script>
          {t("Reconstructing Two Missing Observations", "Do Missing Observations Reconstruct Karna")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={74} size={13} fill={AMBER_DARK} anchor="middle" script>
          {t("JEE Main: mean 6, variance 6.8, three of five known", "JEE Main: mean 6, variance 6.8, paanch mein teen known")}
        </T>
      </Fade>

      {/* beat 1 — given */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={98} size={13} fill={INK} anchor="middle">
          {t(
            "Five obs, mean 6, variance 6.8; three are 2, 4, 9. Find the other two, a and b.",
            "Paanch obs, mean 6, variance 6.8; teen hain 2, 4, 9. Baaki do, a aur b, nikaalo."
          )}
        </T>
      </Fade>

      {/* beat 2 — equation from the mean */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={540} y={122} size={14} fill={INK} anchor="middle" weight={700}>
          {"2+4+9+a+b = 5×6 = 30   ⇒   a+b = 15"}
        </T>
      </Fade>

      {/* beat 3 — equation from the variance */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={540} y={146} size={14} fill={INK} anchor="middle" weight={700}>
          {"Σ(x_i-6)² = 5×6.8 = 34   ⇒   (a-6)²+(b-6)² = 5"}
        </T>
      </Fade>

      {/* beat 4 — substitute p, q */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={540} y={170} size={14} fill={INK} anchor="middle" weight={700}>
          {"p=a-6, q=b-6:   p+q=3, p²+q²=5   ⇒   pq=2"}
        </T>
      </Fade>

      {/* beat 5 — land (boxed, high emphasis): solve the quadratic */}
      <Draw on={beat >= 5} delay={dl(5, 0)} d={roundRectD(240, 190, 600, 46)} stroke={GREEN} sw={2.2} dur={0.8} />
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={540} y={219} size={17} fill={GREEN} anchor="middle" weight={800}>
          {"t² - 3t + 2 = 0   ⇒   t = 1, 2   ⇒   {a,b} = {7,8}"}
        </T>
      </Fade>

      {/* beat 6 — sanity check */}
      <Draw on={beat >= 6} delay={dl(6, 0.1)} d="M 60 256 L 60 294" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={76} y={270} size={14} fill={RED} anchor="start" weight={700}>
          {t("Check: 2,4,9,7,8 → sum=30, mean=6 ✓", "Check: 2,4,9,7,8 → sum=30, mean=6 ✓")}
        </T>
        <T x={76} y={290} size={14} fill={RED} anchor="start" weight={700}>
          {"variance = (16+4+9+1+4)/5 = 34/5 = 6.8 ✓"}
        </T>
      </Fade>
    </Scene>
  );
}
