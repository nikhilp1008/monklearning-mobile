/**
 * C11 Ch01 · Section 17 — "Rounding and the round-to-even rule"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (en [0,8.36,20.23,35.33,51.89,70.66,88.75]):
 *  0 anchor: most rounding you know — one case is taught wrong everywhere
 *  1 the easy part: >5 round up, <5 round down
 *  2 the tricky part: exactly 5 → round-to-even (odd climbs, even stays)
 *  3 worked pair: 2.745→2.74 (even stays) and 2.735→2.74 (odd climbs)
 *  4 the reason: round-to-even cancels bias over many calculations
 *  5 guardrail: the exam trap — reflexively rounding 5 up is wrong half the time
 *  6 discipline: carry guard digits, round only once at the very end
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | anchor (script14 ink)        | T mid | x540  y88
 *  b1 | easy rule (14 bold ink)      | T mid | x540  y115
 *  b2 | special case (14 bold red)   | T mid | x540  y145
 *  b2 | sub-rule (script13 amber-drk)| T mid | x540  y168
 *  b3 | worked l1/l2 (14 bold ink)   | T mid | x540  y200/225
 *  b3 | note (script13 green)        | T mid | x540  y250
 *  b4 | reason (script13 muted)      | T mid | x540  y280
 *  b5 | guardrail (script15 red)     | T mid | x540  y310
 *  b6 | discipline l1 (script14 ink) | T mid | x540  y345
 *  b6 | discipline l2 (script13 mut) | T mid | x540  y368
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, T, INK, MUTED, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch01Sec17({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={60} size={22} fill={RED} script>
          {t("rounding and the round-to-even rule", "rounding aur round-to-even rule")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={88} size={14} fill={INK} script>
          {t(
            "most rounding you already know — one case is taught wrong everywhere",
            "rounding ka zyada hissa pata hai — par ek case galat padhaya jata hai"
          )}
        </T>
      </Fade>

      {/* beat 1 — the easy part */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={540} y={115} size={14} fill={INK} weight={700} script={false}>
          &gt;5 → round UP · &lt;5 → round DOWN
        </T>
      </Fade>

      {/* beat 2 — the tricky part: exactly 5 */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={145} size={14} fill={RED} weight={700} script={false}>
          =5, nothing after → ROUND-TO-EVEN
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.4)}>
        <T x={540} y={168} size={13} fill={AMBER_DARK} script>
          {t("preceding digit ODD → +1 · EVEN → stays", "preceding digit ODD → +1 · EVEN → stays")}
        </T>
      </Fade>

      {/* beat 3 — worked pair */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={200} size={14} fill={INK} weight={700} script={false}>
          2.745 → 2.74 (4 is even, stays)
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.1)}>
        <T x={540} y={225} size={14} fill={INK} weight={700} script={false}>
          2.735 → 2.74 (3 is odd, climbs)
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.9)}>
        <T x={540} y={250} size={13} fill={GREEN} script>
          {t("same answer, different routes!", "same jawab, alag raaste!")}
        </T>
      </Fade>

      {/* beat 4 — the reason */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={280} size={13} fill={MUTED} script>
          {t(
            "always-round-up biases high — round-to-even cancels that bias over many calcs",
            "hamesha-upar-round bias high karta — round-to-even us bias ko cancel karta hai"
          )}
        </T>
      </Fade>

      {/* beat 5 — guardrail: the exam trap */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={310} size={15} fill={RED} script>
          {t(
            "the exam trap: reflexively rounding 5 up is wrong half the time",
            "exam trap: 5 ko hamesha upar round karna aadhi baar galat hai"
          )}
        </T>
      </Fade>

      {/* beat 6 — discipline: guard digits, round once */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={345} size={14} fill={INK} script>
          {t("carry 1–2 GUARD digits through every step", "har step mein 1–2 GUARD digits saath rakho")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.4)}>
        <T x={540} y={368} size={13} fill={MUTED} script>
          {t("round only ONCE — at the very end", "sirf EK BAAR round karo — bilkul end mein")}
        </T>
      </Fade>
    </Scene>
  );
}
