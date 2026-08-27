/**
 * Ch02 · Section 8 — "Procedure B: is the data 'by distance' or 'by time'?"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 14.4, 38.8, 56.6, 65, 89.9, 112, 133.6]):
 *  0 title
 *  1 the question: equal DISTANCES? or equal TIMES? chips
 *  2 first-principles card: avg speed = total distance / total time
 *  3 two panels appear: headers + route/clock strips with mid ticks
 *  4 left: d@v₁ slow, d@v₂ fast · t = d/v₁+d/v₂ · slow leg hogs the clock ·
 *    harmonic mean result
 *  5 right: t@v₁, t@v₂ · D = v₁t+v₂t · equal slices equal weight ·
 *    arithmetic mean result
 *  6 red note: two free checks (between; closer to slower; 48 vs 50)
 *  7 green verdict: ask what's equal — don't memorise
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b1 | chips x180..370 / x470..630 y95..127 · "or" (420,116) · note cx540 bl 150
 *  b2 | card x280..800 y168..236 · formula cx540 bl 202 · sub cx540 bl 224
 *  b3 | headers cx290 / cx795 bl 272 · strips y318: L x100..480 tick 290 ·
 *       R x600..980 tick 790
 *  b4 | labels cx195/cx385 bl 300 · time cx290 bl 356 · punch cx290 bl 384 ·
 *       result cx290 bl 420 · sub cx290 bl 446
 *  b5 | labels cx695/cx885 bl 300 · dist cx795 bl 356 · note cx795 bl 384 ·
 *       result cx795 bl 420 · sub cx795 bl 446
 *  b6 | bar x66 y482..530 · lines st x84 bl 502 / 526
 *  b7 | bar x56 y546..590 · lines st x84 bl 566 (13) / 588 (12)
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
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch02Sec8({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the most-tested trap */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={58} size={23} fill={INK} script>
          {t(
            "two speeds, one average — the most-tested trap",
            "do speeds, ek average — sabse zyada poochha jaane wala trap"
          )}
        </T>
      </Fade>

      {/* beat 1 — the question nobody asks */}
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <Chip x={180} y={95} w={190} h={32} fill={CREAM} stroke={AMBER} textFill={AMBER_DARK} size={15}>
          {t("equal DISTANCES?", "equal DISTANCES?")}
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.5)}>
        <T x={420} y={116} size={15} fill={INK} weight={700}>
          {t("or", "ya")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 5)}>
        <Chip x={470} y={95} w={160} h={32} fill={CREAM} stroke={GREEN} textFill={GREEN} size={15}>
          {t("equal TIMES?", "equal TIMES?")}
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 11)}>
        <T x={540} y={150} size={13} fill={MUTED} script>
          {t(
            "same words, almost — completely different answers",
            "lagbhag same shabd — bilkul alag jawaab"
          )}
        </T>
      </Fade>

      {/* beat 2 — the generator */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 0.8)}
        d="M 292 168 h 496 q 12 0 12 12 v 44 q 0 12 -12 12 h -496 q -12 0 -12 -12 v -44 q 0 -12 12 -12"
        stroke={INK}
        sw={2.6}
        dur={0.8}
        fill={CREAM}
      />
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <T x={540} y={202} size={18} fill={INK} weight={700}>
          {t(
            "avg speed = total distance ⁄ total time",
            "avg speed = total distance ⁄ total time"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 8)}>
        <T x={540} y={224} size={12} fill={MUTED} script>
          {t(
            "the definition that generates everything",
            "woh definition jisse sab kuchh nikalta hai"
          )}
        </T>
      </Fade>

      {/* beat 3 — the two panels */}
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={290} y={272} size={14} fill={AMBER_DARK} script>
          {t("equal distances", "equal distances")}
        </T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 1.6)}
        d="M 100 318 H 480 M 290 310 v 16"
        stroke={AMBER_DARK}
        sw={3}
        dur={0.8}
      />
      <Fade on={beat >= 3} delay={dl(3, 3.5)}>
        <T x={795} y={272} size={14} fill={GREEN} script>
          {t("equal times", "equal times")}
        </T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 4.5)}
        d="M 600 318 H 980 M 790 310 v 16"
        stroke={GREEN}
        sw={3}
        dur={0.8}
      />

      {/* beat 4 — the slow leg hogs the clock */}
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={195} y={300} size={12} fill={RED} script>
          {t("d @ v₁ — slow", "d @ v₁ — dheema")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <T x={385} y={300} size={12} fill={GREEN} script>
          {t("d @ v₂ — fast", "d @ v₂ — tez")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 4.5)}>
        <T x={290} y={356} size={15} fill={INK} weight={700}>
          t = d⁄v₁ + d⁄v₂
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 10)}>
        <T x={290} y={384} size={12} fill={RED} script>
          {t("the slow leg hogs the clock", "dheemi leg ghadi hadap leti hai")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 17)}>
        <T x={290} y={420} size={16} fill={INK} weight={700}>
          v̄ = 2v₁v₂ ⁄ (v₁+v₂)
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 20)}>
        <T x={290} y={446} size={11} fill={AMBER_DARK} script>
          {t(
            "harmonic mean — dragged toward the slow one",
            "harmonic mean — dheemi taraf khincha hua"
          )}
        </T>
      </Fade>

      {/* beat 5 — equal slices, equal weight */}
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={695} y={300} size={12} fill={RED} script>
          t @ v₁
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.8)}>
        <T x={885} y={300} size={12} fill={GREEN} script>
          t @ v₂
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 4)}>
        <T x={795} y={356} size={15} fill={INK} weight={700}>
          D = v₁t + v₂t
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 8)}>
        <T x={795} y={384} size={12} fill={GREEN} script>
          {t("equal clock slices — equal weight", "barabar ghadi ke tukde — barabar wazan")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 13)}>
        <T x={795} y={420} size={16} fill={INK} weight={700}>
          v̄ = (v₁+v₂) ⁄ 2
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 16)}>
        <T x={795} y={446} size={11} fill={GREEN} script>
          {t("plain arithmetic mean", "seedha arithmetic mean")}
        </T>
      </Fade>

      {/* beat 6 — two free checks */}
      <Draw on={beat >= 6} delay={dl(6, 0.8)} d="M 66 482 v 48" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={84} y={502} size={13} fill={RED} script anchor="start">
          {t(
            "must land between v₁ & v₂ · equal-d ⇒ closer to the slower",
            "v₁ aur v₂ ke beech hi aayega · equal-d ⇒ dheeme ke paas"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 9)}>
        <T x={84} y={526} size={13} fill={RED} script anchor="start">
          {t(
            "40 & 60: answer 48 passes both · 50 fails the second",
            "40 & 60: jawaab 48 dono paas · 50 doosri mein fail"
          )}
        </T>
      </Fade>

      {/* beat 7 — don't memorise */}
      <Draw on={beat >= 7} delay={dl(7, 0.8)} d="M 56 546 v 44" stroke={GREEN} sw={3.4} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={84} y={566} size={13} fill={GREEN} script anchor="start">
          {t(
            "don't memorise the pair — ask which pieces are equal, then total distance ⁄ total time",
            "jodi ratto mat — poochho kya barabar hai, phir total distance ⁄ total time"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 8)}>
        <T x={84} y={588} size={12} fill={GREEN} script anchor="start">
          {t(
            "the memorisers are the ones who pick the wrong mean when the clock runs",
            "ratta maarne wale hi exam mein galat mean uthate hain"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
