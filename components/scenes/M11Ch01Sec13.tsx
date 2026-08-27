/**
 * M11 Ch01 · Section 13 — "Subset counting formulas and why 2ⁿ"
 * Canvas 1080×620 · safe x36–1044, y30–596. section_type: formulas.
 *
 * Beats (board_reveal_at_english [0, 9.22, 19.46, 37.21, 52.31, 70.91, 92.67]):
 *  0 title (always-on)
 *  1 headline: n[P(A)] = 2ⁿ
 *  2 proper subsets = 2ⁿ−1 ; non-empty subsets = 2ⁿ−1
 *  3 non-empty proper = 2ⁿ−2 ; exactly r elements = C(n,r)
 *  4 DERIVE setup: each element gets an independent IN/OUT choice
 *  5 build the product live: 2 × 2 × ⋯ × 2 (n factors) = 2ⁿ
 *  6 cross-check: C(n,0)+C(n,1)+⋯+C(n,n) = (1+1)ⁿ = 2ⁿ
 *
 * Layout plan (estimated render boxes, longer language counts):
 *  b1 | "n[P(A)] = 2ⁿ" (26,red,mid)   | T mid | x540 y120
 *  b2 | "proper subsets = 2ⁿ−1" / "non-empty subsets = 2ⁿ−1" | T st (17) | x100/560 y160
 *  b3 | "non-empty proper = 2ⁿ−2" / "exactly r elements = C(n,r)" | T st (17) | x100/560 y195
 *  b4 | "each element gets an independent IN/OUT choice" | T mid (16) | x540 y300
 *  b5 | "2 × 2" / "× ⋯ ×" / " 2 = 2ⁿ" (28,mid chunks) | T st | x377/461/562 y350
 *  b5 | "(n factors — one per element)" | T mid script | x545 y380
 *  b6 | "C(n,0) + C(n,1) + ⋯ + C(n,n)"  | T mid (17)  | x540 y525
 *  b6 | "= (1+1)ⁿ = 2ⁿ" (18,green)      | T mid  | x540 y558
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, T, INK, MUTED, RED, GREEN,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch01Sec13({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={25} fill={RED} script>
          {t("the counting toolkit (n(A) = n)", "counting toolkit (n(A) = n)")}
        </T>
      </Fade>

      {/* beat 1 — headline formula */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={540} y={120} size={26} fill={RED} weight={800}>
          {"n[P(A)] = 2ⁿ"}
        </T>
      </Fade>

      {/* beat 2 — proper / non-empty */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={100} y={160} size={17} fill={INK} anchor="start" weight={700}>
          {"proper subsets = 2ⁿ − 1"}
        </T>
        <T x={560} y={160} size={17} fill={INK} anchor="start" weight={700}>
          {"non-empty subsets = 2ⁿ − 1"}
        </T>
      </Fade>

      {/* beat 3 — non-empty proper / exactly r */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={100} y={195} size={17} fill={INK} anchor="start" weight={700}>
          {"non-empty proper = 2ⁿ − 2"}
        </T>
        <T x={560} y={195} size={17} fill={INK} anchor="start" weight={700}>
          {"exactly r elements = C(n, r)"}
        </T>
      </Fade>

      {/* beat 4 — derivation setup */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={300} size={16} fill={INK} weight={700}>
          {t(
            "each element gets an independent IN/OUT choice",
            "har element ka apna independent IN/OUT choice"
          )}
        </T>
      </Fade>

      {/* beat 5 — build the product live */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={377} y={350} size={28} fill={INK} anchor="start" weight={800}>
          {"2 × 2"}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.3)}>
        <T x={461} y={350} size={28} fill={INK} anchor="start" weight={800}>
          {" × ⋯ ×"}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2.3)}>
        <T x={562} y={350} size={28} fill={RED} anchor="start" weight={800}>
          {" 2  =  2ⁿ"}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 3.3)}>
        <T x={545} y={380} size={13} fill={MUTED} script>
          {t("(n factors — one per element)", "(n factors — har element ka)")}
        </T>
      </Fade>

      {/* beat 6 — cross-check via binomial theorem */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={525} size={17} fill={INK} weight={700}>
          {"C(n,0) + C(n,1) + ⋯ + C(n,n)"}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.3)}>
        <T x={540} y={558} size={18} fill={GREEN} weight={800}>
          {"= (1 + 1)ⁿ = 2ⁿ"}
        </T>
      </Fade>
    </Scene>
  );
}
