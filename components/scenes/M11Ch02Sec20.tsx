/**
 * M11 Ch02 · Section 20 — "Counting functions (q^p) and the algebra of real functions"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: formulas — a growing formula sheet, one identity landed per beat.
 *
 * Beats (board_reveal_at_english [0, 9.56, 21.42, 46.25, 66.9, 78.17, 100.52]):
 *  0 title (always-on) · 1 boxed: functions A→B = q^p = (n(B))^n(A)
 *  2 explain: each of p inputs picks 1 of q outputs (contrast with 2^pq)
 *  3 algebra: (f±g)(x), (fg)(x), (αf)(x)
 *  4 quotient: (f/g)(x) = f(x)/g(x), wherever g(x)≠0
 *  5 boxed: Dom(f±g)=Dom(fg)=Dom(f)∩Dom(g); Dom(f/g)=that−{g=0}
 *  6 guardrail (chant): outputs^inputs — q^p, NEVER p^q
 *
 * Layout plan — single centered column, boxes estimated:
 *  b0 | title (script 26, red)          | T mid | x300..780  y32..72  (bl 64)
 *  b1 | chip q^p formula (18,green)     | Chip  | x374..706  y95..133
 *  b2 | explain line (14)                | T mid | x330..750  y147..162 (bl 158)
 *  b2 | contrast sub-note (14, muted)    | T mid | x368..712  y177..192 (bl 188)
 *  b3 | algebra line (15)                 | T mid | x337..742  y210..227 (bl 222)
 *  b4 | quotient line (15)                | T mid | x397..682  y244..261 (bl 256)
 *  b5 | chip domain formula (16,amber)   | Chip  | x315..765  y285..327
 *  b6 | margin bar (red)                  | Draw  | x60  y350..380
 *  b6 | chant (15, red)                   | T st  | x76..383   y355..372 (bl 367)
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, MUTED, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch02Sec20({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={64} size={26} fill={RED} anchor="middle" script>
          {t("q^p and the Algebra of Real Functions", "q^p aur Real Functions ka Algebra")}
        </T>
      </Fade>

      {/* beat 1 — the headline count */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <Chip x={374} y={95} w={332} h={38} fill={GREEN} textFill="#FFFEFB" size={18} script={false}>
          {"functions A→B = q^p = (n(B))^n(A)"}
        </Chip>
      </Fade>

      {/* beat 2 — the logic, and the contrast with relations */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={540} y={158} size={14} fill={INK} anchor="middle">
          {t(
            "Each of p inputs picks 1 of q outputs: q×q×...×q (p times)",
            "Har p input, q outputs mein se 1 chunta hai: q×q×...×q (p baar)"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={540} y={188} size={14} fill={MUTED} anchor="middle">
          {t(
            "(relations were 2^pq — functions are far fewer)",
            "(relations the 2^pq — functions bahut kam hain)"
          )}
        </T>
      </Fade>

      {/* beat 3 — the algebra of real functions */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={540} y={222} size={15} fill={INK} anchor="middle" weight={700}>
          {"(f±g)(x)=f(x)±g(x),  (fg)(x)=f(x)g(x),  (αf)(x)=αf(x)"}
        </T>
      </Fade>

      {/* beat 4 — the quotient */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={540} y={256} size={15} fill={INK} anchor="middle" weight={700}>
          {"(f/g)(x) = f(x)/g(x),  wherever g(x)≠0"}
        </T>
      </Fade>

      {/* beat 5 — the domain bookkeeping, boxed */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <Chip x={315} y={285} w={450} h={42} fill="#FCF4E0" stroke={AMBER_DARK} textFill={AMBER_DARK} size={16} script={false}>
          {"Dom(f±g)=Dom(fg)=Dom(f)∩Dom(g); Dom(f/g)=that−{g=0}"}
        </Chip>
      </Fade>

      {/* beat 6 — the chant against the base-exponent swap */}
      <Draw on={beat >= 6} d="M 60 350 L 60 380" stroke={RED} sw={3} delay={dl(6, 0)} />
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={76} y={367} size={15} fill={RED} anchor="start" weight={700}>
          {"Chant: \"outputs^inputs\" — q^p, NEVER p^q"}
        </T>
      </Fade>
    </Scene>
  );
}
