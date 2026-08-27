/**
 * Ch04 · Section 40 — "Derivation: the best angle to drag something at"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 20.1, 37.4, 62.2, 86.8, 109.1, 127.6, 128.6, 129.6] — 6..8
 * rapid in en, spread in hi):
 *  0 title
 *  1 figure: block, F at θ above horizontal, labels
 *  2 competing-effects lines (right col)
 *  3 vertical equation + N-not-mg warning
 *  4 verge equation + F expression box
 *  5 maximise-denominator note
 *  6 max = √(1+μ²) at tanθ = μ ⇒ θ = λ
 *  7 hero box F_min = mg·sinλ
 *  8 red margin: always wins, trolley shoulders
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl 52
 *  fig | floor M100 280 H480 · block x150..290 y210..280 "m" cx220 bl 250 ·
 *    F arr (295,222)→(420,150) "F"(430,144 st) · dash M295 222 H400 ·
 *    "θ"(352,208) · "rough floor, μ" cx290 bl 302
 *  R col | b2 bl 110/134/158 st x560 · b3 line bl 200 + note bl 226 ·
 *    b4 line bl 268 + box x572..920 y280..322 bl 306 · b5 bl 350 ·
 *    b6 bl 384 · b7 box x572..940 y404..448 bl 432
 *  b8 | bar x66 y480..570 · lines st x84 bl 500 / 526 / 550
 */

import React from "react";
import { Path } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  arrowD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch04Sec40({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={52} size={20} fill={INK} script>
          {t(
            "CBSE Derivation — the best angle to drag something at",
            "CBSE Derivation — gaseetne ka sabse achha angle"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 8)}>
        <T x={540} y={80} size={12} fill={MUTED} script>
          {t(
            "you already pull suitcases at a slant — your body solved this first",
            "aap suitcase pehle se tirchha kheenchte hain — sharir ne pehle hal kiya"
          )}
        </T>
      </Fade>

      {/* beat 1 — the setup */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 1)}
        d="M 100 280 H 480 M 150 210 h 140 v 70 h -140 z"
        stroke={INK}
        sw={2.4}
        dur={0.9}
      />
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <T x={220} y={250} size={14} fill={INK} weight={700}>
          m
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.6)}>
        <Path d="M 295 222 H 400" stroke={MUTED} strokeWidth={1.8} strokeDasharray="6 5" fill="none" />
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 3.2)}
        d={arrowD(295, 222, 420, 150)}
        stroke={AMBER}
        sw={3}
        dur={0.5}
      />
      <Fade on={beat >= 1} delay={dl(1, 3.8)}>
        <T x={430} y={144} size={14} fill={AMBER_DARK} weight={700} anchor="start">
          F
        </T>
        <T x={352} y={208} size={13} fill={INK} weight={700}>
          θ
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 6)}>
        <T x={290} y={302} size={11} fill={MUTED} script>
          {t("rough floor, coefficient μ", "rough farsh, coefficient μ")}
        </T>
      </Fade>

      {/* beat 2 — the competition */}
      <Fade on={beat >= 2} delay={dl(2, 1.5)}>
        <T x={560} y={110} size={13} fill={GREEN} script anchor="start">
          {t(
            "lifting ↑ : N falls → friction falls — GOOD",
            "uthana ↑ : N girta → friction girti — ACHHA"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 7)}>
        <T x={560} y={134} size={13} fill={RED} script anchor="start">
          {t(
            "but part of F now goes vertical — WASTED",
            "par F ka hissa ab vertical jaata hai — BARBAAD"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 15)}>
        <T x={560} y={158} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "two effects fighting → a sweet spot must exist",
            "do asar ladte hue → sweet spot hoga hi"
          )}
        </T>
      </Fade>

      {/* beat 3 — vertical equilibrium */}
      <Fade on={beat >= 3} delay={dl(3, 2)}>
        <T x={560} y={200} size={14} fill={INK} weight={700} anchor="start">
          vertical: N + F·sinθ = mg ⇒ N = mg − F·sinθ
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 12)}>
        <T x={560} y={226} size={12} fill={RED} script anchor="start">
          {t(
            "N is NOT mg any more — a blind 'N = mg' loses this problem",
            "N ab mg NAHI hai — aankh moond kar 'N = mg' likha to problem gayi"
          )}
        </T>
      </Fade>

      {/* beat 4 — at the verge */}
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <T x={560} y={268} size={14} fill={INK} weight={700} anchor="start">
          at the verge: F·cosθ = μ·N
        </T>
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 8)}
        d="M 584 280 h 324 q 12 0 12 12 v 18 q 0 12 -12 12 h -324 q -12 0 -12 -12 v -18 q 0 -12 12 -12"
        stroke={AMBER}
        sw={2.6}
        dur={0.5}
        fill={CREAM}
      />
      <Fade on={beat >= 4} delay={dl(4, 9)}>
        <T x={746} y={306} size={15} fill={INK} weight={800}>
          F = μmg ⁄ (cosθ + μ·sinθ)
        </T>
      </Fade>

      {/* beat 5 — where the physics hides */}
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <T x={560} y={350} size={12} fill={AMBER_DARK} script anchor="start">
          {t(
            "numerator constant → minimise F by MAXIMISING the denominator",
            "numerator constant → F chhota karne ko denominator BADA karo"
          )}
        </T>
      </Fade>

      {/* beat 6 — the maximisation */}
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={560} y={384} size={14} fill={INK} weight={700} anchor="start">
          max(cosθ + μ·sinθ) = √(1+μ²), at tanθ = μ ⇒ θ = λ
        </T>
      </Fade>

      {/* beat 7 — the elegant minimum */}
      <Draw
        on={beat >= 7}
        delay={dl(7, 0.6)}
        d="M 584 404 h 344 q 12 0 12 12 v 20 q 0 12 -12 12 h -344 q -12 0 -12 -12 v -20 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.8}
        dur={0.5}
        fill={CREAM}
      />
      <Fade on={beat >= 7} delay={dl(7, 1.4)}>
        <T x={756} y={432} size={16} fill={INK} weight={800}>
          F_min = μmg⁄√(1+μ²) = mg·sinλ
        </T>
      </Fade>

      {/* beat 8 — the angled pull always wins */}
      <Draw on={beat >= 8} delay={dl(8, 0.6)} d="M 66 480 v 78" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 8} delay={dl(8, 1.6)}>
        <T x={84} y={500} size={14} fill={RED} script anchor="start">
          {t(
            "horizontal pull costs μmg · pulling at λ costs mg·sinλ — ALWAYS less (sin < tan)",
            "horizontal kheenchna μmg leta hai · λ par sirf mg·sinλ — HAMESHA kam (sin < tan)"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 8)}>
        <T x={84} y={526} size={14} fill={RED} script anchor="start">
          {t(
            "lifting kills friction faster than it wastes your pull",
            "uthana friction ko usse tez maarta hai jitna wo khinchai barbaad karta hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 14)}>
        <T x={84} y={550} size={14} fill={GREEN} script anchor="start">
          {t(
            "tilting a trolley handle = solving this optimization with your shoulders",
            "trolley ka handle tirchha karna = kandhon se yahi optimization hal karna"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
