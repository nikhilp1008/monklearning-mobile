/**
 * Ch01 · Section 89 — "Example 4 [JEE Advanced]: chaining two indirect methods"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 24.8, 48, 62.6, 87.5, 112.3, 126.2, 139.8]):
 *  0 given chips
 *  1 b = 2 AU — the quiet test
 *  2 D = b/θ = 7.5 × 10¹⁶ m
 *  3 conversions: 7.9 ly · 2.4 pc · consistency ✓
 *  4 why Advanced: the angle means nothing without D
 *  5 d = αD = 3 × 10⁹ m
 *  6 ≈ 2.2 × the Sun
 *  7 the chain + a physically real object
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | chips y76..108 x80(w300)/x400(w220)/x640(w220)/x80 y116(w300)
 *  b1 | amber mid bl 172
 *  b2 | 17 st x100 bl 215
 *  b3 | 16 st x100 bl 258 · green 13 st x100 bl 288
 *  b4 | script 14 st x100 bl 332 · muted 12 st x100 bl 358
 *  b5 | 17 st x100 bl 402
 *  b6 | green 18 st x100 bl 446 + box
 *  b7 | script 14 mid bl 520 · green 13 mid bl 550
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
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch01Sec89({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — givens */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={50} size={22} fill={INK} script>
          {t(
            "JEE Advanced — chaining two indirect methods",
            "JEE Advanced — do indirect vidhiyon ki zanjeer"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 6)}>
        <Chip x={80} y={76} w={300} h={32} fill={CREAM} stroke={INK_LIGHT} textFill={INK} size={13} script={false}>
          {t("b = 3 × 10¹¹ m (orbit diameter)", "b = 3 × 10¹¹ m (kaksha ka vyaas)")}
        </Chip>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 10)}>
        <Chip x={400} y={76} w={220} h={32} fill={CREAM} stroke={INK_LIGHT} textFill={INK} size={13} script={false}>
          θ = 4 × 10⁻⁶ rad
        </Chip>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 15)}>
        <Chip x={640} y={76} w={220} h={32} fill={CREAM} stroke={INK_LIGHT} textFill={INK} size={13} script={false}>
          α = 4 × 10⁻⁸ rad
        </Chip>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 20)}>
        <Chip x={80} y={116} w={300} h={32} fill={CREAM} stroke={INK_LIGHT} textFill={INK} size={13} script={false}>
          d(Sun) = 1.39 × 10⁹ m
        </Chip>
      </Fade>

      {/* beat 1 — the quiet test */}
      <Fade on={beat >= 1} delay={dl(1, 3)}>
        <T x={540} y={176} size={14} fill={AMBER_DARK} script>
          {t(
            "3 × 10¹¹ m = 2 AU — the FULL orbit diameter; the question quietly tests that you know this",
            "3 × 10¹¹ m = 2 AU — POORI kaksha ka vyaas; sawaal chupchaap jaanch raha hai ki tum yeh jaante ho"
          )}
        </T>
      </Fade>

      {/* beat 2 — the distance */}
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <T x={100} y={218} size={17} fill={INK} weight={700} anchor="start">
          D = b ⁄ θ = 3 × 10¹¹ ÷ 4 × 10⁻⁶ = 7.5 × 10¹⁶ m
        </T>
      </Fade>

      {/* beat 3 — the conversions */}
      <Fade on={beat >= 3} delay={dl(3, 2)}>
        <T x={100} y={260} size={16} fill={INK} weight={600} anchor="start">
          ÷ 9.46 × 10¹⁵ → 7.9 ly      ·      ÷ 3.08 × 10¹⁶ → 2.4 pc
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 15)}>
        <T x={100} y={290} size={13} fill={GREEN} script anchor="start">
          {t(
            "consistency: 7.9 ly ÷ 3.26 = 2.4 pc ✓ — three unit systems, all agreeing",
            "sangati: 7.9 ly ÷ 3.26 = 2.4 pc ✓ — teen unit systems, sab sehmat"
          )}
        </T>
      </Fade>

      {/* beat 4 — why the order matters */}
      <Fade on={beat >= 4} delay={dl(4, 3)}>
        <T x={100} y={334} size={14} fill={AMBER_DARK} script anchor="start">
          {t(
            "part b could NOT come first — an angle alone says nothing about size",
            "part b pehle ho hi nahi sakta tha — akela kon aakaar ke baare mein kuchh nahi kehta"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 13)}>
        <T x={100} y={360} size={12} fill={MUTED} script anchor="start">
          {t(
            "a small nearby thing and a huge distant thing subtend the same angle — you need D first",
            "paas ki chhoti cheez aur door ki vishaal cheez ek hi kon banati hain — pehle D chahiye"
          )}
        </T>
      </Fade>

      {/* beat 5 — the diameter */}
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <T x={100} y={404} size={17} fill={INK} weight={700} anchor="start">
          d = α D = 4 × 10⁻⁸ × 7.5 × 10¹⁶ = 3 × 10⁹ m
        </T>
      </Fade>

      {/* beat 6 — as suns */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 1)}
        d="M 112 424 h 496 q 12 0 12 12 v 22 q 0 12 -12 12 h -496 q -12 0 -12 -12 v -22 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.4}
        dur={0.7}
      />
      <Fade on={beat >= 6} delay={dl(6, 2.5)}>
        <T x={360} y={454} size={17} fill={GREEN} weight={700}>
          3 × 10⁹ ÷ 1.39 × 10⁹ ≈ 2.2 × {t("the Sun", "sooraj")}
        </T>
      </Fade>

      {/* beat 7 — the chain */}
      <Fade on={beat >= 7} delay={dl(7, 4)}>
        <T x={540} y={520} size={14} fill={AMBER_DARK} script>
          {t(
            "two indirect methods, chained — parallax hands its D to the angular size: the astronomer's actual two-step",
            "do indirect vidhiyan, zanjeer mein — parallax apna D angular size ko deta hai: khagolshastri ka asli do-kadam"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 15)}>
        <T x={540} y={550} size={13} fill={GREEN} script>
          {t(
            "and the answer is a real object: a star 2.2 suns wide, eight light years away — measured from a chair",
            "aur answer ek asli vastu hai: 2.2 sooraj chauda taara, aath light year door — kursi se naapa gaya"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
