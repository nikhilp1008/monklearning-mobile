/**
 * Ch01 · Section 39 — "Derivation B: error in a product and a quotient"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 17.8, 25.7, 32.4, 54.0, 78.9, 103.7, 116.9]):
 *  0 title + setup: x ± Δx = (a ± Δa)(b ± Δb)
 *  1 two brackets, each with its own wobble
 *  2 expand — keep everything
 *  3 the four terms, labelled
 *  4 why ΔaΔb dies: tiny × tiny (struck out, honestly)
 *  5 divide by ab → everything turns relative automatically
 *  6 worst case → Δx/x = Δa/a + Δb/b
 *  7 quotient identical → one rule for both
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | title mid bl 62 · setup (sans 20) mid bl 130
 *  b1 | note (script 14) mid bl 172
 *  b2 | note (script 14, amber) x60 st bl 214
 *  b3 | expansion (sans 20) x60 st bl 258 · term labels (script 12) bl 292 at 88/160/255
 *  b4 | strike (229,262)→(280,242) · line (script 14, red) x60 st bl 336 ·
 *       note (script 13, green) x520 st bl 336
 *  b5 | divide row (sans 19) x60 st bl 392 · note (script 14, amber) x60 st bl 430
 *  b6 | chip x620..920 y380..424 · note (script 13) x620 st bl 450
 *  b7 | line (script 15) x60 st bl 494 · chip x400..940 y510..554
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
  Scene,
} from '@/components/scenes/kit';

export default function Ch01Sec39({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the setup */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={62} size={28} fill={RED} script>
          {t("derivation B — product & quotient", "derivation B — guna aur bhaag")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 5)}>
        <T x={540} y={130} size={20} fill={INK} weight={800}>
          x ± Δx = (a ± Δa)(b ± Δb)
        </T>
      </Fade>

      {/* beat 1 — two wobbling brackets */}
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <T x={540} y={172} size={14} fill={MUTED} script>
          {t(
            "two brackets, each carrying its own wobble — multiply them out",
            "do brackets, dono apna-apna wobble liye — guna kar do"
          )}
        </T>
      </Fade>

      {/* beat 2 — don't be clever yet */}
      <Fade on={beat >= 2} delay={dl(2, 1.5)}>
        <T x={60} y={214} size={14} fill={AMBER_DARK} script anchor="start">
          {t("expand — keep every term, don't be clever yet", "sab kholo — har term rakho, abhi hoshiyari nahi")}
        </T>
      </Fade>

      {/* beat 3 — the four terms */}
      <Fade on={beat >= 3} delay={dl(3, 2)}>
        <T x={60} y={258} size={20} fill={INK} weight={800} anchor="start">
          = ab ± aΔb ± bΔa ± ΔaΔb
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 7)}>
        <T x={88} y={292} size={12} fill={GREEN} script>
          {t("the answer", "jawab")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 10)}>
        <T x={168} y={292} size={12} fill={MUTED} script>
          {t("expected errors", "expected errors")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 14)}>
        <T x={262} y={292} size={12} fill={AMBER_DARK} script>
          {t("interesting…", "dilchasp…")}
        </T>
      </Fade>

      {/* beat 4 — the honest discard */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 2)}
        d="M 229 262 L 282 242"
        stroke={RED}
        sw={2.2}
        dur={0.4}
      />
      <Fade on={beat >= 4} delay={dl(4, 4)}>
        <T x={60} y={336} size={14} fill={RED} script anchor="start">
          {t(
            "ΔaΔb = tiny × tiny ≈ one part in 10⁴ — negligible beside its neighbours",
            "ΔaΔb = nanha × nanha ≈ 10⁴ mein ek — padosiyon ke saamne kuch nahi"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 18)}>
        <T x={620} y={336} size={13} fill={GREEN} script anchor="start">
          {t("thrown away — HONESTLY", "phenka — IMAANDARI se")}
        </T>
      </Fade>

      {/* beat 5 — divide by ab */}
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <T x={60} y={392} size={19} fill={INK} weight={700} anchor="start">
          ÷ x (= ab) :   1 ± Δx/x = 1 ± Δb/b ± Δa/a
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 14)}>
        <T x={60} y={430} size={14} fill={AMBER_DARK} script anchor="start">
          {t(
            "the division converts everything to RELATIVE — all by itself",
            "bhaag dene se sab RELATIVE ban gaya — apne aap"
          )}
        </T>
      </Fade>

      {/* beat 6 — the result */}
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <Chip x={620} y={380} w={300} h={44} fill={INK} textFill={CREAM} size={19} script={false}>
          Δx/x = Δa/a + Δb/b
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 8)}>
        <T x={620} y={450} size={13} fill={MUTED} script anchor="start">
          {t("worst case — errors reinforcing", "worst case — errors milkar dhakelte")}
        </T>
      </Fade>

      {/* beat 7 — one rule, both operations */}
      <Fade on={beat >= 7} delay={dl(7, 2)}>
        <T x={60} y={494} size={15} fill={INK} script anchor="start">
          {t(
            "the quotient x = a/b: a near-identical argument, the very same result",
            "quotient x = a/b: lagbhag wahi argument, bilkul wahi result"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 10)}>
        <Chip x={400} y={510} w={540} h={44} fill={GREEN} textFill="#fff" size={16}>
          {t("ONE rule: × and ÷ both add relative errors", "EK rule: × ho ya ÷ — relative errors judte hain")}
        </Chip>
      </Fade>
    </Scene>
  );
}
