/**
 * C11 Ch06 · Section 17 — "One story in two languages: Q-vs-K and the sign of ΔG"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING_CHEMISTRY.md
 * + SCENE_AUTHORING.md.
 *
 * Beats (board_reveal_at_english: [0, 8.8, 21.4, 29.4, 42.2, 49.3, 60.3, 71.3]):
 *  0 title + underline
 *  1 subtract the two master relations
 *  2 result, ringed: ΔG = RT ln(Q/K)
 *  3 row1: Q < K → ln(Q/K) < 0 → ΔG < 0
 *  4 confirm: matches the forward rule
 *  5 row2: Q > K → ln(Q/K) > 0 → ΔG > 0 → backward
 *  6 note: same Q-vs-K rule as before, now with a reason
 *  7 land, ringed: one idea, two languages
 *
 * Layout plan (centered stack; longer language counts):
 *  b0 | title (script 22, red)      | T mid  | x213..867  y30..88  (bl 64)
 *  b1 | "ΔG = ΔG° + RT ln Q" (16)   | T mid  | y97..117  (bl 112)
 *  b1 | "− (ΔG° = −RT ln K)" (16)   | T mid  | y125..145 (bl 140)
 *  b1 | subtraction rule            | Draw   | x400..680 y150
 *  b2 | "ΔG = RT ln(Q/K)" ringed    | T mid  | x436..644 y176..202 (bl 195)
 *  b3 | row1 (15, green)            | T mid  | y236..253 (bl 248)
 *  b4 | confirm (14, green-dark)    | T mid  | y264..289 (bl 282)
 *  b5 | row2 (15, red)              | T mid  | y303..320 (bl 315)
 *  b6 | note (14, muted, script)    | T mid  | y334..359 (bl 352)
 *  b7 | landing statement, ringed   | T mid  | x286..794 y384..406 (bl 400)
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, ringD, INK, MUTED, GREEN, GREEN_DARK, RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch06Sec17({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("one story, two languages: Q-vs-K and the sign of ΔG", "ek kahani, do languages: Q-vs-K aur ΔG ka sign")}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 6)}
        d="M 430 84 C 480 80, 600 87, 650 83"
        stroke={RED}
        sw={2.4}
        dur={0.6}
      />

      {/* beat 1 — subtract the two relations */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={540} y={112} size={16} fill={INK} anchor="middle">
          ΔG = ΔG° + RT ln Q
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <T x={540} y={140} size={16} fill={INK} anchor="middle">
          − (ΔG° = −RT ln K)
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.6)} d="M 400 150 L 680 150" stroke={INK} sw={1.8} dur={0.4} />

      {/* beat 2 — the compact result */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={195} size={24} fill={GREEN} weight={800} anchor="middle">
          ΔG = RT ln(Q/K)
        </T>
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 1.1)}
        d={ringD(540, 189, 104, 26)}
        stroke={GREEN}
        sw={2.4}
        dur={0.8}
      />

      {/* beat 3 — row 1: Q < K */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={248} size={15} fill={GREEN} anchor="middle">
          Q &lt; K  →  ln(Q/K) &lt; 0  →  ΔG &lt; 0
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={282} size={14} fill={GREEN_DARK} script anchor="middle">
          {t("✓ matches the forward rule", "✓ forward rule se match karta")}
        </T>
      </Fade>

      {/* beat 5 — row 2: Q > K */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={315} size={15} fill={RED} anchor="middle">
          Q &gt; K  →  ln(Q/K) &gt; 0  →  ΔG &gt; 0  →  backward
        </T>
      </Fade>

      {/* beat 6 — same rule, now with a reason */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={352} size={14} fill={MUTED} script anchor="middle">
          {t(
            "same Q-vs-K rule as before — now with a reason",
            "wahi Q-vs-K rule — ab ek reason ke saath"
          )}
        </T>
      </Fade>

      {/* beat 7 — land it */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={540} y={400} size={20} fill={GREEN} weight={800} anchor="middle">
          {t(
            "Q-vs-K and sign of ΔG — one idea, two languages",
            "Q-vs-K aur ΔG ka sign — ek idea, do languages"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 7}
        delay={dl(7, 1.1)}
        d={ringD(540, 395, 254, 23)}
        stroke={GREEN}
        sw={2.4}
        dur={0.8}
      />
    </Scene>
  );
}
