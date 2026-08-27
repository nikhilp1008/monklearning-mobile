/**
 * Ch01 · Section 88 — "Example 3 [JEE Main]: the size of an oleic-acid molecule"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 24.8, 33.8, 48.6, 71.2, 96, 106.7, 122.3]):
 *  0 given chips
 *  1 read the dilution twice
 *  2 concentration = 1/400 — dilutions multiply
 *  3 V = 0.05 × 1/400 = 1.25 × 10⁻⁴ cm³
 *  4 the skipped step: 400× too big — bacterium-sized molecule
 *  5 A = πr² = 314 cm²
 *  6 t = V/A = 3.98 × 10⁻⁷ cm
 *  7 ≈ 4 nm green + sanity check + estimate note
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | chips row1 y76..108 x80/x330/x580/x800 · title bl 50
 *  b1 | amber mid bl 150
 *  b2 | 17 st x100 bl 195 · note st x640
 *  b3 | 17 st x100 bl 240
 *  b4 | red script st x100 bl 285 · red 12 st x100 bl 311
 *  b5 | 17 st x100 bl 356
 *  b6 | 17 st x100 bl 400
 *  b7 | box x100..640 y424..468 (17 bl 452) · script mid bl 510 · muted mid bl 540
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  Chip,
  T,
  INK,
  INK_LIGHT,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch01Sec88({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the givens */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={50} size={22} fill={INK} script>
          {t(
            "JEE Main — the size of an oleic-acid molecule",
            "JEE Main — oleic-acid anu ka aakaar"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 6)}>
        <Chip x={80} y={76} w={230} h={32} fill={CREAM} stroke={INK_LIGHT} textFill={INK} size={13} script={false}>
          1 cm³ {t("acid", "acid")} → 20 cm³
        </Chip>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 10)}>
        <Chip x={330} y={76} w={230} h={32} fill={CREAM} stroke={INK_LIGHT} textFill={INK} size={13} script={false}>
          1 cm³ {t("of that", "uska")} → 20 cm³
        </Chip>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 15)}>
        <Chip x={580} y={76} w={200} h={32} fill={CREAM} stroke={INK_LIGHT} textFill={INK} size={13} script={false}>
          {t("drop = 0.05 cm³", "boond = 0.05 cm³")}
        </Chip>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 19)}>
        <Chip x={800} y={76} w={180} h={32} fill={CREAM} stroke={INK_LIGHT} textFill={INK} size={13} script={false}>
          {t("film r = 10 cm", "film r = 10 cm")}
        </Chip>
      </Fade>

      {/* beat 1 — where the question lives */}
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <T x={540} y={150} size={14} fill={AMBER_DARK} script>
          {t(
            "read the dilution twice — the whole question lives there; the rest is arithmetic",
            "dilution do baar padho — poora sawaal wahin rehta hai; baaki arithmetic hai"
          )}
        </T>
      </Fade>

      {/* beat 2 — the concentration */}
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <T x={100} y={195} size={17} fill={INK} weight={700} anchor="start">
          {t("concentration = 1⁄20 × 1⁄20 = 1⁄400", "saandrata = 1⁄20 × 1⁄20 = 1⁄400")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 10)}>
        <T x={640} y={195} size={13} fill={AMBER_DARK} script anchor="start">
          {t("dilutions MULTIPLY — they don't add", "dilutions GUNA hoti hain — judti nahi")}
        </T>
      </Fade>

      {/* beat 3 — pure acid in one drop */}
      <Fade on={beat >= 3} delay={dl(3, 2)}>
        <T x={100} y={240} size={17} fill={INK} weight={700} anchor="start">
          V = 0.05 × 1⁄400 = 1.25 × 10⁻⁴ cm³
        </T>
      </Fade>

      {/* beat 4 — the skipped step */}
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <T x={100} y={285} size={14} fill={RED} script anchor="start">
          {t(
            "the skipped step: using 0.05 directly — but the drop is almost entirely alcohol",
            "chhoda hua step: 0.05 seedha istemal — par boond to lagbhag poori alcohol hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 12)}>
        <T x={100} y={311} size={12} fill={RED} script anchor="start">
          {t(
            "that lands 400× too big — a molecule the size of a bacterium ✗",
            "usse 400× bada milta hai — jeevaanu jitna bada anu ✗"
          )}
        </T>
      </Fade>

      {/* beat 5 — the area */}
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <T x={100} y={356} size={17} fill={INK} weight={700} anchor="start">
          A = πr² = 3.14 × 10² = 314 cm²
        </T>
      </Fade>

      {/* beat 6 — the thickness */}
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={100} y={400} size={17} fill={INK} weight={700} anchor="start">
          t = V ⁄ A = 1.25 × 10⁻⁴ ÷ 314 = 3.98 × 10⁻⁷ cm
        </T>
      </Fade>

      {/* beat 7 — nanometres, and the sanity check */}
      <Draw
        on={beat >= 7}
        delay={dl(7, 1)}
        d="M 112 424 h 516 q 12 0 12 12 v 20 q 0 12 -12 12 h -516 q -12 0 -12 -12 v -20 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.4}
        dur={0.7}
      />
      <Fade on={beat >= 7} delay={dl(7, 2.5)}>
        <T x={370} y={452} size={17} fill={GREEN} weight={700}>
          t ≈ 4.0 × 10⁻⁹ m — {t("a few nanometres", "kuchh nanometre")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 10)}>
        <T x={540} y={510} size={13} fill={INK} script>
          {t(
            "sanity check: molecules live near 10⁻⁹ m, atoms near 10⁻¹⁰ — a long chain at a few nm is exactly right",
            "sanity check: anu ~10⁻⁹ m par, parmanu ~10⁻¹⁰ par — lambi shrinkhla kuchh nm par bilkul sahi"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 19)}>
        <T x={540} y={540} size={13} fill={MUTED} script>
          {t(
            "it all rests on the monolayer assumption — report an ESTIMATE, not a precise figure",
            "sab monolayer waali dhaarna par tika hai — ANUMAAN likho, sateek aankda nahi"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
