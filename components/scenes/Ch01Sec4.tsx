/**
 * Ch01 · Section 4 — "Procedure A: cracking any derived unit down to base units"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 14.1, 26.6, 38.3, 51.8, 76.6, 95.2, 104.0]):
 *  0 title + "the move that saves you on unfamiliar quantities"
 *  1 STEP 1 chip + the defining relation P = F / A
 *  2 ring the definition — "the whole starting point"
 *  3 the chain skeleton: arrows fan down to F and A
 *  4 STEP 2: crack F open (F = m·a → kg·m/s²), A already base; the why
 *  5 STEP 3: combine → P = kg m⁻¹ s⁻² = pascal; the metre note
 *  6 verdict: the reasoning protects you, not the result
 *  7 the takeaway chain: definition → break → combine
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | title (script 28, red)       | T mid | x270..810  y30..80  (bl 66)
 *  b0 | subline (script 16, muted)   | T mid | x338..742  y81..110 (bl 102)
 *  b1 | STEP 1 chip (h38)            | Chip  | x60..250   y142..180
 *  b1 | "P = F / A" (sans 28)        | T mid | x477..603  y148..179 (bl 170)
 *  b2 | ring c(540,161) rx77 ry27    | Draw  | y126..198
 *  b2 | "the whole starting point"   | T st  | x640..822  y146..174 (bl 166, script 15)
 *  b3 | "break every piece" (15)     | T mid | x474..606  y231..258 (bl 250)
 *  b3 | arrows                       | Draw  | (480,190)→(328,272) · (600,190)→(744,272)
 *  b3 | "F" (322,bl 300) "A" (748,bl 300)  sans 22  boxes y283..307
 *  b4 | STEP 2 chip                  | Chip  | x60..250   y283..321
 *  b4 | "= m·a" x336 st · "= m²" x762 st (sans 22, bl 300)
 *  b4 | arrow (330,315)→(330,359) → "kg·m/s²" (360, bl 380) x305..415 y364..386
 *  b4 | "already base ✓" (750, bl 380, script 14, green) x696..804
 *  b4 | why-lines (script 15) x60 st | bl 415 / 447  y395..455
 *  b5 | STEP 3 chip                  | Chip  | x60..250   y468..506
 *  b5 | arrows (360,394)→(480,461) · (750,395)→(600,461)
 *  b5 | "P = kg m⁻¹ s⁻²" (sans 26)   | T mid | x449..631  y470..498 (bl 490)
 *  b5 | "= pascal" chip (h44)        | Chip  | x660..790  y462..506
 *  b5 | metre note (script 14)       | T mid | x440..640  y509..534 (bl 527)
 *  b6 | verdict (script 18, red)     | T st  | x60..535   y549..581 (bl 572)
 *  b7 | chain chips ×3 (h38)         | Chip  | y550..588  x560..700 / 730..840 / 870..990
 *       + arrows (706,569)→(724,569) · (846,569)→(864,569)
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
  arrowD,
  ringD,
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

export default function Ch01Sec4({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title + why this procedure matters */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={66} size={28} fill={RED} script>
          {t("Procedure A: crack it to base units", "Procedure A: base units tak todo")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 5)}>
        <T x={540} y={102} size={16} fill={MUTED} script>
          {t(
            "the move that saves you on unfamiliar quantities",
            "jab anjaan quantity aaye — yehi bachata hai"
          )}
        </T>
      </Fade>

      {/* beat 1 — STEP 1: start from the defining relation */}
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <Chip x={60} y={142} w={190} h={38} fill={CREAM} stroke={AMBER} textFill={INK} size={15}>
          {t("STEP 1 · definition", "STEP 1 · definition")}
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 7)}>
        <T x={540} y={170} size={28} fill={INK} weight={800}>
          P = F / A
        </T>
      </Fade>

      {/* beat 2 — that single line is the whole starting point */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 0.8)}
        d={ringD(540, 161, 77, 27)}
        stroke={AMBER}
        sw={3}
        dur={0.8}
      />
      <Fade on={beat >= 2} delay={dl(2, 2.2)}>
        <T x={640} y={166} size={15} fill={AMBER_DARK} script anchor="start">
          {t("the whole starting point", "yahin se sab shuru")}
        </T>
      </Fade>

      {/* beat 3 — the chain: break each piece on the right */}
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <T x={540} y={250} size={15} fill={MUTED} script>
          {t("break every piece", "har tukda todo")}
        </T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 2.5)}
        d={arrowD(480, 190, 328, 272)}
        stroke={INK}
        sw={2.2}
        dur={0.5}
      />
      <Draw
        on={beat >= 3}
        delay={dl(3, 3.3)}
        d={arrowD(600, 190, 744, 272)}
        stroke={INK}
        sw={2.2}
        dur={0.5}
      />
      <Fade on={beat >= 3} delay={dl(3, 3.9)}>
        <T x={322} y={300} size={22} fill={INK} weight={800}>
          F
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 4.4)}>
        <T x={748} y={300} size={22} fill={INK} weight={800}>
          A
        </T>
      </Fade>

      {/* beat 4 — STEP 2: crack force open; area is already base */}
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <Chip x={60} y={283} w={190} h={38} fill={CREAM} stroke={AMBER} textFill={INK} size={15}>
          {t("STEP 2 · break", "STEP 2 · todo")}
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 3.5)}>
        <T x={336} y={300} size={22} fill={INK} weight={700} anchor="start">
          = m·a
        </T>
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 5.5)}
        d={arrowD(330, 315, 330, 359)}
        stroke={AMBER}
        sw={2.4}
        dur={0.4}
      />
      <Fade on={beat >= 4} delay={dl(4, 6.3)}>
        <T x={360} y={380} size={20} fill={INK} weight={700}>
          kg·m/s²
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 10)}>
        <T x={762} y={300} size={22} fill={INK} weight={700} anchor="start">
          = m²
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 11)}>
        <T x={750} y={380} size={14} fill={GREEN} script>
          {t("already base ✓", "already base ✓")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 15)}>
        <T x={60} y={415} size={15} fill={AMBER_DARK} script anchor="start">
          {t("every derived unit", "har derived unit")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 16)}>
        <T x={60} y={447} size={15} fill={AMBER_DARK} script anchor="start">
          {t("→ the 7 base units", "→ wapas 7 base tak")}
        </T>
      </Fade>

      {/* beat 5 — STEP 3: combine into the pascal */}
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <Chip x={60} y={468} w={190} h={38} fill={CREAM} stroke={AMBER} textFill={INK} size={15}>
          {t("STEP 3 · combine", "STEP 3 · jodo")}
        </Chip>
      </Fade>
      <Draw
        on={beat >= 5}
        delay={dl(5, 1.5)}
        d={arrowD(360, 394, 480, 461)}
        stroke={AMBER}
        sw={2.4}
        dur={0.5}
      />
      <Draw
        on={beat >= 5}
        delay={dl(5, 2.2)}
        d={arrowD(750, 395, 600, 461)}
        stroke={AMBER}
        sw={2.4}
        dur={0.5}
      />
      <Fade on={beat >= 5} delay={dl(5, 3)}>
        <T x={540} y={490} size={26} fill={INK} weight={800}>
          P = kg m⁻¹ s⁻²
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 6.5)}>
        <Chip x={660} y={462} w={130} h={44} fill={INK} textFill={CREAM} size={20}>
          = pascal
        </Chip>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 10)}>
        <T x={540} y={527} size={14} fill={AMBER_DARK} script>
          {t("metre: one up, two down → m⁻¹", "metre: ek upar, do neeche → m⁻¹")}
        </T>
      </Fade>

      {/* beat 6 — the reasoning is what protects you */}
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={60} y={572} size={18} fill={RED} script anchor="start">
          {t(
            "the result doesn't protect you — the reasoning does",
            "rata hua result nahi — reasoning bachati hai"
          )}
        </T>
      </Fade>

      {/* beat 7 — the chain you carry into the exam */}
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <Chip x={560} y={550} w={140} h={38} fill={PAPER} stroke={GREEN} textFill={GREEN} size={16}>
          {t("definition", "definition")}
        </Chip>
      </Fade>
      <Draw
        on={beat >= 7}
        delay={dl(7, 1.2)}
        d={arrowD(706, 569, 724, 569)}
        stroke={GREEN}
        sw={2.4}
        dur={0.3}
      />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <Chip x={730} y={550} w={110} h={38} fill={PAPER} stroke={GREEN} textFill={GREEN} size={16}>
          {t("break", "todo")}
        </Chip>
      </Fade>
      <Draw
        on={beat >= 7}
        delay={dl(7, 2.2)}
        d={arrowD(846, 569, 864, 569)}
        stroke={GREEN}
        sw={2.4}
        dur={0.3}
      />
      <Fade on={beat >= 7} delay={dl(7, 2.6)}>
        <Chip x={870} y={550} w={120} h={38} fill={GREEN} textFill="#fff" size={16}>
          {t("combine", "jodo")}
        </Chip>
      </Fade>
    </Scene>
  );
}
