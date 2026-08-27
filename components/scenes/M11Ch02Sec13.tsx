/**
 * M11 Ch02 · Section 13 — "Procedures: rule ↔ roster, and why relations count as 2^pq"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * Three stacked procedure blocks, divided by thin rules.
 *
 * Beats (board_reveal_at_english [0, 9.3, 28.25, 50.01, 60.67, 85.08, 109.91]):
 *  0 title (always-on) · 1 Procedure1: Rule→Roster (filter, keep only if y∈B)
 *  2 guardrail: escapes B ⇒ thrown away, no exceptions
 *  3 domain/range read off the finished list
 *  4 Procedure2: Roster→Set-builder (spot pattern, verify both ways)
 *  5 Procedure3 formula (boxed): 2×2×...×2 = 2^pq (pq factors, no underbrace primitive
 *    — a small label substitutes per SCENE_AUTHORING_MATHS.md)
 *  6 each pq pair independent yes/no — includes ∅ and universal
 *
 * Layout plan — boxes estimated:
 *  b0 | title (script 25, red)          | T mid  | x290..790  y33..72  (bl 64)
 *  b1 | "1. Rule → Roster" (18,amber)   | T st   | x76..260   y88..108 (bl 102)
 *  b1 | filter line (15)                 | T st   | x76..428   y123..140 (bl 135)
 *  b2 | margin bar (red)                 | Draw   | x60  y150..180
 *  b2 | guardrail (14, red)              | T st   | x76..405   y157..172 (bl 168)
 *  b3 | domain/range line (14)           | T st   | x76..454   y193..208 (bl 204)
 *  --divider-- y=222
 *  b4 | "2. Roster → Set-builder" (18)   | T st   | x76..330   y236..256 (bl 250)
 *  b4 | pattern line (15)                | T st   | x76..571   y272..289 (bl 284)
 *  --divider-- y=302
 *  b5 | "3. Why 2^pq" (18,amber)         | T st   | x76..220   y316..336 (bl 330)
 *  b5 | chip "2×2×...×2=2^pq" (20,green)| Chip   | x442..638  y365..407
 *  b5 | factors label (13, muted)        | T mid  | x?..?      y418..432 (bl 428)
 *  b6 | independent-choice line (15)     | T mid  | x300..780  y449..465 (bl 460)
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch02Sec13({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={64} size={25} fill={RED} anchor="middle" script>
          {t("Three procedures that carry every question", "Teen procedures jo har question chalate hain")}
        </T>
      </Fade>

      {/* beat 1 — Procedure 1: Rule → Roster */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={76} y={102} size={18} fill={AMBER_DARK} anchor="start" weight={800}>
          {"1. Rule → Roster"}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={76} y={135} size={15} fill={INK} anchor="start">
          {t("For each x∈A: compute y; keep pair ONLY if y∈B", "Har x∈A ke liye: y compute karo; pair sirf tab jab y∈B")}
        </T>
      </Fade>

      {/* beat 2 — guardrail: escapes B ⇒ thrown away */}
      <Draw on={beat >= 2} d="M 60 150 L 60 180" stroke={RED} sw={3} delay={dl(2, 0)} />
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={76} y={168} size={14} fill={RED} anchor="start" weight={700}>
          {t("Output escapes B ⇒ thrown away — no exceptions!", "y agar B se bahar ⇒ pair phenk do — no exceptions!")}
        </T>
      </Fade>

      {/* beat 3 — domain/range read off the list */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={76} y={204} size={14} fill={INK} anchor="start">
          {"Domain = distinct 1st coords;  Range = distinct 2nd coords"}
        </T>
      </Fade>

      <Draw on={beat >= 4} d="M 60 222 L 1020 222" stroke={MUTED} sw={1} delay={dl(4, 0)} />

      {/* beat 4 — Procedure 2: Roster → Set-builder */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={76} y={250} size={18} fill={AMBER_DARK} anchor="start" weight={800}>
          {"2. Roster → Set-builder"}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.7)}>
        <T x={76} y={284} size={15} fill={INK} anchor="start">
          {t(
            "Spot the pattern (y=x+1? x+y=10?), write rule, verify BOTH ways",
            "Pattern dhoondo (y=x+1? x+y=10?), rule likho, DONO taraf verify karo"
          )}
        </T>
      </Fade>

      <Draw on={beat >= 5} d="M 60 302 L 1020 302" stroke={MUTED} sw={1} delay={dl(5, 0)} />

      {/* beat 5 — Procedure 3: why 2^pq */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={76} y={330} size={18} fill={AMBER_DARK} anchor="start" weight={800}>
          {"3. Why 2^pq"}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.7)}>
        <Chip x={442} y={365} w={196} h={42} fill={GREEN} textFill="#FFFEFB" size={20} script={false}>
          {"2×2×...×2 = 2^pq"}
        </Chip>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.3)}>
        <T x={540} y={428} size={13} fill={MUTED} anchor="middle">
          {t("(pq factors, each independent)", "(pq factors, har ek independent)")}
        </T>
      </Fade>

      {/* beat 6 — each pair independent yes/no, includes both extremes */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={540} y={460} size={15} fill={INK} anchor="middle">
          {t(
            "Each pq pair: independent yes/no \"in R?\" — incl. ∅ & universal",
            "Har pq pair: independent yes/no \"R mein?\" — ∅ aur universal shaamil"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
