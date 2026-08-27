/**
 * M11 Ch02 · Section 26 — "Pitfalls and speed moves — functions"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: tips — closes subtopic 3 (Functions).
 *
 * Beats (board_reveal_at_english [0, 8.96, 17.41, 33.79, 52.22, 75.43, 91.22]):
 *  0 title (always-on) · 1 guardrail: rule constrains INPUTS, not outputs
 *  2 never reject for unused codomain/repeat output; many-to-one OK, one-to-many FATAL
 *  3 counting: relations=2^pq; functions=q^p; swap→p^q = worst trap
 *  4 strict vs non-strict: even-root closed, denom open, radical-in-denom strict>0
 *  5 boxed formula: Dom(f/g)=(Dom(f)∩Dom(g))−{g(x)=0}
 *  6 guardrail: signum{-1,0,1} vs modulus[0,∞) — swapped constantly
 *
 * Layout plan — single centered column, boxes estimated:
 *  b0 | title (script 27, red)          | T mid | x300..780  y32..72  (bl 64)
 *  b1 | margin bar (red)                 | Draw  | x60  y95..125
 *  b1 | guardrail (15, red)              | T st  | x76..458   y100..117 (bl 112)
 *  b2 | reject line (14)                 | T mid | x250..831  y142..156 (bl 152)
 *  b3 | counting line (14)               | T mid | x260..820  y172..186 (bl 182)
 *  b4 | strict/non-strict line (14)      | T mid | x306..775  y206..220 (bl 216)
 *  b5 | chip domain formula (16,green)   | Chip  | x375..705  y245..285
 *  b6 | margin bar (red)                 | Draw  | x60  y310..340
 *  b6 | guardrail (15, red)              | T st  | x76..473   y315..332 (bl 327)
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch02Sec26({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={64} size={27} fill={RED} anchor="middle" script>
          {t("Pitfalls — Functions", "Pitfalls — Functions")}
        </T>
      </Fade>

      {/* beat 1 — the rule constrains inputs, not outputs */}
      <Draw on={beat >= 1} d="M 60 95 L 60 125" stroke={RED} sw={3} delay={dl(1, 0)} />
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={76} y={112} size={15} fill={RED} anchor="start" weight={700}>
          {t(
            "The function rule constrains INPUTS, not outputs!",
            "Function ka rule INPUTS ko control karta hai, outputs ko nahi!"
          )}
        </T>
      </Fade>

      {/* beat 2 — don't reject for unused codomain / repeated output */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={540} y={152} size={14} fill={INK} anchor="middle">
          {t(
            "Never reject for unused codomain/repeat output. Many-to-one OK; one-to-many FATAL",
            "Unused codomain/repeat output dekh kar reject mat karo. Many-to-one OK; one-to-many FATAL"
          )}
        </T>
      </Fade>

      {/* beat 3 — the counting swap trap */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={540} y={182} size={14} fill={INK} anchor="middle">
          {"relations=2^pq; functions=q^p (outputs base, inputs exp). Swap→p^q=WORST trap!"}
        </T>
      </Fade>

      {/* beat 4 — strict vs non-strict domain conditions */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={540} y={216} size={14} fill={INK} anchor="middle">
          {"Even-root≥0(closed); denom≠0(open); radical IN denom⇒ STRICTLY>0"}
        </T>
      </Fade>

      {/* beat 5 — the quotient domain formula, boxed */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <Chip x={375} y={245} w={330} h={40} fill={GREEN} textFill="#FFFEFB" size={16} script={false}>
          {"Dom(f/g) = (Dom(f)∩Dom(g)) − {g(x)=0}"}
        </Chip>
      </Fade>

      {/* beat 6 — signum vs modulus range guardrail */}
      <Draw on={beat >= 6} d="M 60 310 L 60 340" stroke={RED} sw={3} delay={dl(6, 0)} />
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={76} y={327} size={15} fill={RED} anchor="start" weight={700}>
          {"Signum{-1,0,1} vs Modulus[0,∞) — swapped constantly!"}
        </T>
      </Fade>
    </Scene>
  );
}
