/**
 * Ch01 · Section 42 — "Example 2 [NEET trap]: the exponents you forgot to attach"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 24.8, 39.4, 53.3, 78.1, 91.4, 105.6, 130.4]):
 *  0 tag + question card: Z = A²B/√C, errors 2/1/4 %
 *  1 the lazy path: 2+1+4 = 7 % — wrong on two counts
 *  2 the two misses: the ² and the ½
 *  3 standard form: p = 2, q = 1, r = ½ (underlined)
 *  4 the power rule applied
 *  5 substitute → 7 % (chip)
 *  6 the cruel-joke panel: same answer, wrong road; δC = 6 % breaks the tie
 *  7 pitfall: always attach the exponent
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | tag x60..300 y40..78 · card x140..940 y92..152 · question bl 130
 *  b1 | lazy row (sans 18) x60 st bl 190 · note (script 14, red) x400 st bl 190
 *  b2 | misses (script 14, red) x60 / x340 bl 232
 *  b3 | form row (sans 17) x60..410 bl 284 · underline y298 x310..370
 *  b4 | rule (sans 20) x60 st bl 336
 *  b5 | substitute (sans 20) x60 st bl 384 · chip x420..540 y356..400
 *  b6 | panel x640..1020 y170..420 · header bl 200 · lines bl 240/272/312 ·
 *       test rows (sans 14) bl 352/384
 *  b7 | bar x51 y446..514 · pitfall (script 16, red) x62 st bl 470 · sub bl 506
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

export default function Ch01Sec42({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the devious one */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <Chip x={60} y={40} w={240} h={38} fill={INK} textFill={CREAM} size={15}>
          {t("EXAMPLE 2 · NEET TRAP", "EXAMPLE 2 · NEET TRAP")}
        </Chip>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 2)}
        d="M 152 92 h 776 q 12 0 12 12 v 36 q 0 12 -12 12 h -776 q -12 0 -12 -12 v -36 q 0 -12 12 -12"
        stroke={INK}
        sw={2.2}
        dur={0.9}
      />
      <Fade on={beat >= 0} delay={dl(0, 3.2)}>
        <T x={540} y={130} size={18} fill={INK} weight={700}>
          {t(
            "Z = A²B/√C ·  δA = 2 %  δB = 1 %  δC = 4 %  →  max δZ ?",
            "Z = A²B/√C ·  δA = 2 %  δB = 1 %  δC = 4 %  →  max δZ ?"
          )}
        </T>
      </Fade>

      {/* beat 1 — the lazy path */}
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <T x={60} y={190} size={18} fill={INK} weight={700} anchor="start">
          {t("lazy:  2 + 1 + 4 = 7 % ✓?", "aalsi:  2 + 1 + 4 = 7 % ✓?")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 9)}>
        <T x={400} y={190} size={14} fill={RED} script anchor="start">
          {t("wrong — on TWO counts", "galat — DO jagah se")}
        </T>
      </Fade>

      {/* beat 2 — the two misses */}
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <T x={60} y={232} size={14} fill={RED} script anchor="start">
          {t("missed the ² sitting on A", "A ke upar ² chhoot gaya")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 7)}>
        <T x={340} y={232} size={14} fill={RED} script anchor="start">
          {t("missed the √ sitting on C", "C ke upar √ chhoot gaya")}
        </T>
      </Fade>

      {/* beat 3 — the standard form */}
      <Fade on={beat >= 3} delay={dl(3, 2)}>
        <T x={60} y={284} size={17} fill={INK} weight={700} anchor="start">
          Z = Aᵖ Bᵍ / Cʳ  →  p = 2 · q = 1 · r = ½
        </T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 14)}
        d="M 310 298 C 328 295, 350 300, 370 296"
        stroke={AMBER}
        sw={2.2}
        dur={0.4}
      />
      <Fade on={beat >= 3} delay={dl(3, 15)}>
        <T x={400} y={284} size={13} fill={AMBER_DARK} script anchor="start">
          {t("(½ — not 1!)", "(½ — 1 nahi!)")}
        </T>
      </Fade>

      {/* beat 4 — the power rule */}
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <T x={60} y={336} size={20} fill={INK} weight={800} anchor="start">
          δZ = 2·δA + 1·δB + ½·δC
        </T>
      </Fade>

      {/* beat 5 — substitute */}
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <T x={60} y={384} size={20} fill={INK} weight={800} anchor="start">
          = 4 % + 1 % + 2 %
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 9)}>
        <Chip x={420} y={356} w={120} h={44} fill={INK} textFill={CREAM} size={20} script={false}>
          7 %
        </Chip>
      </Fade>

      {/* beat 6 — the cruel joke */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.8)}
        d="M 652 170 h 356 q 12 0 12 12 v 226 q 0 12 -12 12 h -356 q -12 0 -12 -12 v -226 q 0 -12 12 -12"
        stroke={AMBER}
        sw={2.2}
        dur={0.9}
      />
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={830} y={200} size={15} fill={AMBER_DARK} script>
          {t("the cruel joke", "zaalim mazaak")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 4)}>
        <T x={830} y={240} size={14} fill={INK} script>
          {t("same 7 % — but 4+1+2,", "wahi 7 % — par 4+1+2,")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 6)}>
        <T x={830} y={272} size={14} fill={INK} script>
          {t("not 2+1+4 — pure luck", "2+1+4 nahi — sirf kismat")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 12)}>
        <T x={830} y={312} size={13} fill={MUTED} script>
          {t("try δC = 6 % instead:", "δC = 6 % karke dekho:")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 15)}>
        <T x={830} y={352} size={14} fill={RED} weight={700}>
          {t("lazy → 9 % ✗", "aalsi → 9 % ✗")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 18)}>
        <T x={830} y={384} size={14} fill={GREEN} weight={700}>
          {t("correct → 8 % ✓", "sahi → 8 % ✓")}
        </T>
      </Fade>

      {/* beat 7 — the pitfall */}
      <Draw
        on={beat >= 7}
        delay={dl(7, 1)}
        d="M 51 446 L 51 514"
        stroke={RED}
        sw={3.4}
        dur={0.5}
      />
      <Fade on={beat >= 7} delay={dl(7, 2)}>
        <T x={62} y={470} size={16} fill={RED} script anchor="start">
          {t(
            "ALWAYS attach the exponent — a square doubles, a root halves",
            "exponent HAMESHA lagao — square dugna karta hai, root aadha"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 11)}>
        <T x={62} y={506} size={13} fill={MUTED} script anchor="start">
          {t(
            "the single most common error-analysis slip in NEET & JEE — it nearly escaped here",
            "NEET & JEE ki sabse aam error-analysis chook — yahan toh bach hi nikli thi"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
