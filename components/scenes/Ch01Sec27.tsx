/**
 * Ch01 · Section 27 — "Example 2 [NEET trap]: which pair does NOT match?"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 18.8, 35.4, 44.3, 59.8, 74.6, 99.4, 106.2]):
 *  0 tag + question + four pair-chips (2×2)
 *  1 the pull: "tension" in the name (squiggle under D)
 *  2 the trap: it's force PER LENGTH
 *  3 the algebra: [M L T⁻²]/[L] = [M T⁻²]
 *  4 side by side: force vs surface tension — one L apart
 *  5 the fast route through A, B, C
 *  6 answer chip: D (underlined)
 *  7 pitfall: never judge dimensions by the name
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | tag x60..300 y40..78 · question (sans 18) x330 st bl 65
 *  b0 | chips (h38): A x60..500 y96..134 · B x540..1000 y96..134 ·
 *       C x60..500 y142..180 · D x540..1000 y142..180
 *  b1 | squiggle y190 x550..990 · note (script 14) x540 st bl 214
 *  b2 | trap line (script 15, red) x60..500 bl 214
 *  b3 | algebra (sans 19) x60..400 bl 262
 *  b4 | chips y290..330: x60..300 / 340..640 · note (script 15, red) x680 st bl 316
 *  b5 | rows (sans 15) x60 st bl 380/412/444 · note (script 13) x600 st bl 380
 *  b6 | underline under D y186 · answer chip x60..420 y480..524
 *  b7 | pitfall lines x460 st bl 505 / 545 / 580
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
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  PAPER,
  Scene,
} from '@/components/scenes/kit';

export default function Ch01Sec27({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the question */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <Chip x={60} y={40} w={240} h={38} fill={INK} textFill={CREAM} size={15}>
          {t("EXAMPLE 2 · NEET TRAP", "EXAMPLE 2 · NEET TRAP")}
        </Chip>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 1.5)}>
        <T x={330} y={65} size={18} fill={INK} weight={700} anchor="start">
          {t("which pair does NOT match?", "kaunsa pair match NAHI karta?")}
        </T>
      </Fade>
      {(
        [
          ["A · work & torque", 60, 96],
          ["B · impulse & momentum", 540, 96],
          ["C · pressure & stress", 60, 142],
          ["D · force & surface tension", 540, 142],
        ] as [string, number, number][]
      ).map(([label, x, y], i) => (
        <Fade key={label} on={beat >= 0} delay={dl(0, 4 + i * 2.5)}>
          <Chip x={x} y={y} w={440} h={38} fill={PAPER} stroke={INK} textFill={INK} size={15} script={false}>
            {label}
          </Chip>
        </Fade>
      ))}

      {/* beat 1 — the pull of the name */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 2)}
        d="M 550 190 C 660 186, 850 192, 990 188"
        stroke={AMBER}
        sw={2.2}
        dur={0.6}
      />
      <Fade on={beat >= 1} delay={dl(1, 4)}>
        <T x={540} y={214} size={14} fill={AMBER_DARK} script anchor="start">
          {t("'tension' in the name → brain says force…", "'tension' naam mein → dimaag bola force…")}
        </T>
      </Fade>

      {/* beat 2 — the trap */}
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <T x={60} y={214} size={15} fill={RED} script anchor="start">
          {t("it is NOT a force — it's force PER LENGTH", "ye force NAHI hai — force PER LENGTH hai")}
        </T>
      </Fade>

      {/* beat 3 — do the algebra */}
      <Fade on={beat >= 3} delay={dl(3, 2)}>
        <T x={60} y={262} size={19} fill={INK} weight={700} anchor="start">
          ST = [M L T⁻²] / [L] = [M T⁻²]
        </T>
      </Fade>

      {/* beat 4 — side by side */}
      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <Chip x={60} y={290} w={240} h={40} fill={PAPER} stroke={INK} textFill={INK} size={15} script={false}>
          force: [M L T⁻²]
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 4)}>
        <Chip x={340} y={290} w={300} h={40} fill={PAPER} stroke={RED} textFill={RED} size={15} script={false}>
          surface tension: [M T⁻²]
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 8)}>
        <T x={680} y={316} size={15} fill={RED} script anchor="start">
          {t("≠ — exactly one L apart!", "≠ — theek ek L ka fark!")}
        </T>
      </Fade>

      {/* beat 5 — the fast route */}
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <T x={60} y={380} size={15} fill={INK} weight={600} anchor="start">
          {t("A: both F × d → [M L² T⁻²] — same ✓", "A: dono F × d → [M L² T⁻²] — same ✓")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 8)}>
        <T x={60} y={412} size={15} fill={INK} weight={600} anchor="start">
          {t("B: both [M L T⁻¹] — impulse-momentum theorem — same ✓", "B: dono [M L T⁻¹] — impulse-momentum theorem — same ✓")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 15)}>
        <T x={60} y={444} size={15} fill={INK} weight={600} anchor="start">
          {t("C: both F / A → [M L⁻¹ T⁻²] — same ✓", "C: dono F / A → [M L⁻¹ T⁻²] — same ✓")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 20)}>
        <T x={620} y={380} size={13} fill={MUTED} script anchor="start">
          {t("90 seconds — no time for regret", "90 second — pachtane ka time nahi")}
        </T>
      </Fade>

      {/* beat 6 — the answer */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 1)}
        d="M 550 186 C 660 182, 850 188, 990 184"
        stroke={GREEN}
        sw={2.6}
        dur={0.5}
      />
      <Fade on={beat >= 6} delay={dl(6, 2.5)}>
        <Chip x={60} y={480} w={360} h={44} fill={GREEN} textFill="#fff" size={17}>
          {t("answer: D · force & surface tension", "answer: D · force & surface tension")}
        </Chip>
      </Fade>

      {/* beat 7 — the pitfall */}
      <Fade on={beat >= 7} delay={dl(7, 3)}>
        <T x={460} y={505} size={16} fill={RED} script anchor="start">
          {t("never judge dimensions by the NAME", "dimensions kabhi NAAM se mat aanko")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 10)}>
        <T x={460} y={545} size={15} fill={GREEN} script anchor="start">
          {t(
            "the name is decoration — the algebra is the truth",
            "naam sirf sajavat hai — algebra hi sach hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 17)}>
        <T x={460} y={580} size={13} fill={MUTED} script anchor="start">
          {t(
            "('constant' in G doesn't make it dimensionless either)",
            "('constant' likha hai toh G dimensionless nahi ho jaata)"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
