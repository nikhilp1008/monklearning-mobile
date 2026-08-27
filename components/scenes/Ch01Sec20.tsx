/**
 * Ch01 · Section 20 — "Why homogeneity MUST hold, and Procedure 1"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 12.6, 24.7, 37.2, 49.8, 74.6, 80.7, 98.1]):
 *  0 title + "a 30-second argument"
 *  1 A = B + C, each carrying a recipe
 *  2 suppose [B] ≠ [C] → adding a length to a time?!
 *  3 2 m + 3 s crossed out — the + sign refuses
 *  4 forced: [B] = [C] → [A] = [B] = [C]; not invented · divider
 *  5 PROCEDURE 1 header
 *  6 steps 1–2: LHS, then each RHS term separately
 *  7 step 3 compare + the asymmetry; necessary but not sufficient
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | title (script 28, red) x275..805 bl 62 · sub (script 15) bl 106
 *  b1 | "A = B + C" (sans 26) (250, bl 160) · note (script 14) x400 st bl 160
 *  b2 | "suppose [B] ≠ [C]" (sans 18) x60 st bl 210 · note (script 15, red) x300 st
 *  b3 | "2 m + 3 s" (sans 20) (180, bl 260) + cross · note x300 st bl 260
 *  b4 | "[B] = [C]" (150, bl 310) · arrow (235,304)→(285,304) · "[A] = [B] = [C]"
 *       (410, bl 310) · verdict (script 15, green) x620 st bl 310 · divider y345
 *  b5 | header (script 20, amber) mid bl 390
 *  b6 | chips y420..458: x60..260 · x290..640 · note (script 14, red) x670 st bl 446
 *  b7 | chip x60..260 y480..518 · verdicts x300/x520 bl 505 · bottom line mid bl 560
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
  crossD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch01Sec20({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — not arbitrary: forced */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={62} size={28} fill={RED} script>
          {t("why homogeneity MUST hold", "homogeneity kyun ZAROORI hai")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 6)}>
        <T x={540} y={106} size={15} fill={MUTED} script>
          {t("a thirty-second argument", "tees second ka argument")}
        </T>
      </Fade>

      {/* beat 1 — any equation at all */}
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <T x={250} y={160} size={26} fill={INK} weight={800}>
          A = B + C
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 6)}>
        <T x={420} y={160} size={14} fill={MUTED} script anchor="start">
          {t("each symbol carries a recipe", "har symbol apni recipe rakhta hai")}
        </T>
      </Fade>

      {/* beat 2 — the supposition */}
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <T x={60} y={210} size={18} fill={INK} weight={700} anchor="start">
          {t("suppose  [B] ≠ [C]", "maano  [B] ≠ [C]")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 6)}>
        <T x={300} y={210} size={15} fill={RED} script anchor="start">
          {t("→ adding a length to a time?!", "→ length mein time joda ja raha?!")}
        </T>
      </Fade>

      {/* beat 3 — the plus sign refuses */}
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <T x={180} y={260} size={20} fill={INK} weight={700}>
          2 m + 3 s
        </T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 3.5)}
        d={crossD(133, 245, 94, 20)}
        stroke={RED}
        sw={2.6}
        dur={0.5}
      />
      <Fade on={beat >= 3} delay={dl(3, 5.5)}>
        <T x={300} y={260} size={15} fill={RED} script anchor="start">
          {t("the + sign simply refuses to work", "+ ka nishaan kaam karne se mana kar deta hai")}
        </T>
      </Fade>

      {/* beat 4 — forced into it */}
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <T x={150} y={310} size={18} fill={INK} weight={700}>
          [B] = [C]
        </T>
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 6)}
        d={arrowD(235, 304, 285, 304)}
        stroke={AMBER}
        sw={2.4}
        dur={0.4}
      />
      <Fade on={beat >= 4} delay={dl(4, 7)}>
        <T x={410} y={310} size={18} fill={INK} weight={700}>
          [A] = [B] = [C]
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 16)}>
        <T x={620} y={310} size={15} fill={GREEN} script anchor="start">
          {t("forced on us — not invented", "majboori hai — kisi ki ijaad nahi")}
        </T>
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 20)}
        d="M 60 345 H 1020"
        stroke={MUTED}
        sw={1.4}
        dur={0.8}
      />

      {/* beat 5 — the workhorse */}
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={540} y={390} size={20} fill={AMBER_DARK} script>
          {t(
            "PROCEDURE 1 · the workhorse: checking an equation",
            "PROCEDURE 1 · sabse zyada kaam: equation check karna"
          )}
        </T>
      </Fade>

      {/* beat 6 — steps 1 and 2 */}
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <Chip x={60} y={420} w={200} h={38} fill={CREAM} stroke={AMBER} textFill={INK} size={15}>
          {t("STEP 1 · [LHS]", "STEP 1 · [LHS]")}
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 4)}>
        <Chip x={290} y={420} w={350} h={38} fill={CREAM} stroke={AMBER} textFill={INK} size={15}>
          {t("STEP 2 · [each RHS term] — separately!", "STEP 2 · [har RHS term] — alag-alag!")}
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 10)}>
        <T x={670} y={446} size={14} fill={RED} script anchor="start">
          {t("one term at a time — never lump", "ek-ek term — kabhi jodkar nahi")}
        </T>
      </Fade>

      {/* beat 7 — compare, and the asymmetry */}
      <Fade on={beat >= 7} delay={dl(7, 1)}>
        <Chip x={60} y={480} w={200} h={38} fill={CREAM} stroke={AMBER} textFill={INK} size={15}>
          {t("STEP 3 · compare", "STEP 3 · compare")}
        </Chip>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 4)}>
        <T x={300} y={505} size={15} fill={GREEN} script anchor="start">
          {t("all match → only a MAYBE ✓", "sab match → sirf SHAYAD ✓")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 7)}>
        <T x={540} y={505} size={15} fill={RED} script anchor="start">
          {t("one differs → CERTAINLY wrong ✗", "ek alag → PAKKA galat ✗")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 15)}>
        <T x={540} y={560} size={15} fill={AMBER_DARK} script>
          {t(
            "consistency is necessary — but never sufficient",
            "consistency zaroori hai — par kaafi kabhi nahi"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 7}
        delay={dl(7, 16)}
        d="M 340 576 C 460 572, 620 578, 740 574"
        stroke={AMBER}
        sw={2}
        dur={0.5}
      />
    </Scene>
  );
}
