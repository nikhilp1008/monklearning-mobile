/**
 * M11 Ch02 · Section 16 — "Pitfalls and speed moves — relations"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: tips — closes subtopic 2 (Relations).
 *
 * Beats (board_reveal_at_english [0, 8.87, 29.1, 47.62, 71.85, 85.33, 96.51]):
 *  0 title (always-on) · 1 guardrail: Domain Left, Range Right — never swap!
 *  2 chip: Codomain=DECLARED; Range=REACHED — don't copy B
 *  3 pq vs 2^pq — always exponentiate; kill phantom pairs
 *  4 boxed formula: k forced pairs ⇒ count=2^(pq−k)
 *  5 "at least one" ⇒ complement, subtract from 2^pq
 *  6 mantra (red-margin): relation = highlighted slice of A×B
 *
 * Layout plan — single centered column, boxes estimated:
 *  b0 | title (script 27, red)          | T mid | x300..780  y32..72  (bl 64)
 *  b1 | margin bar (red)                 | Draw  | x60  y100..140
 *  b1 | guardrail (15, red)              | T st  | x76..451   y107..123 (bl 122)
 *  b2 | chip codomain-vs-range (15,amber)| Chip  | x344..737  y160..198
 *  b3 | pq-vs-2^pq line (14)             | T mid | x316..764  y219..234 (bl 230)
 *  b4 | chip forced-pairs (18,green)     | Chip  | x379..702  y265..307
 *  b5 | complement line (14)             | T mid | x344..736  y329..344 (bl 340)
 *  b6 | margin bar (red)                 | Draw  | x60  y375..415
 *  b6 | mantra (15, red)                 | T st  | x76..421   y385..401 (bl 397)
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch02Sec16({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={64} size={27} fill={RED} anchor="middle" script>
          {t("Pitfalls — Relations", "Pitfalls — Relations")}
        </T>
      </Fade>

      {/* beat 1 — Domain Left, Range Right, never swap */}
      <Draw on={beat >= 1} d="M 60 100 L 60 140" stroke={RED} sw={3} delay={dl(1, 0)} />
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={76} y={122} size={15} fill={RED} anchor="start" weight={700}>
          {t(
            "Domain Left, Range Right (D-L, R-R) — never swap!",
            "Domain Left, Range Right (D-L, R-R) — kabhi swap mat karo!"
          )}
        </T>
      </Fade>

      {/* beat 2 — codomain vs range */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <Chip x={344} y={160} w={393} h={38} fill="#FCF4E0" stroke={AMBER_DARK} textFill={AMBER_DARK} size={15} script={false}>
          {t("Codomain=DECLARED; Range=REACHED — don't copy B!", "Codomain=DECLARED; Range=REACHED — B copy mat karo!")}
        </Chip>
      </Fade>

      {/* beat 3 — pq vs 2^pq, and phantom pairs */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={540} y={230} size={14} fill={INK} anchor="middle">
          {t(
            "pq=pairs; 2^pq=relations — always exponentiate! Check outputs∈B",
            "pq=pairs; 2^pq=relations — hamesha exponentiate karo! outputs∈B check karo"
          )}
        </T>
      </Fade>

      {/* beat 4 — the forced-pair formula, boxed */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <Chip x={379} y={265} w={323} h={42} fill={GREEN} textFill="#FFFEFB" size={18} script={false}>
          {"k forced pairs ⇒ count = 2^(pq−k)"}
        </Chip>
      </Fade>

      {/* beat 5 — the complement speed move */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={540} y={340} size={14} fill={INK} anchor="middle">
          {t(
            '"At least one" ⇒ complement (none), subtract from 2^pq',
            '"Kam se kam ek" ⇒ complement (koi nahi), 2^pq se ghatao'
          )}
        </T>
      </Fade>

      {/* beat 6 — the closing mantra */}
      <Draw on={beat >= 6} d="M 60 375 L 60 415" stroke={RED} sw={3} delay={dl(6, 0)} />
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={76} y={397} size={15} fill={RED} anchor="start" weight={700}>
          {t("Mantra: relation = highlighted slice of A × B", "Mantra: relation = A × B ka highlighted slice hai")}
        </T>
      </Fade>
    </Scene>
  );
}
