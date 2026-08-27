/**
 * Ch02 · Section 63 — "Limiting conditions, and the constant you must not drop"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 9.3, 34.1, 53.9, 70.4, 95.2, 120.1, 144.9]):
 *  0 title
 *  1 red note: the cardinal sin — forbidden, invisibly
 *  2 safe cards: the two definitions, no stamps
 *  3 safe-ground line
 *  4 consistency check: v dv = a dx recovers equation ③
 *  5 red note: the integration constant
 *  6 green pro-tip: definite integrals with limits
 *  7 amber: still 1-D — fix + first
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b1 | bar x66 y90..140 · lines st x84 bl 108 / 134
 *  b2 cards y170..230: x120..500 (bl 208) · x560..940 (bl 208) · sub cx540 bl 256
 *  b3 line cx540 bl 284
 *  b4 card x120..960 y305..400 (hdr bl 328 · l1 bl 358 · l2 bl 386)
 *  b5 | bar x66 y425..478 · lines st x84 bl 444 / 470
 *  b6 | bar x56 y498..552 · lines st x72 bl 518 / 544
 *  b7 | line st x84 bl 580
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
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

export default function Ch02Sec63({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — two ways off the safe ground */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={54} size={23} fill={INK} script>
          {t(
            "the fences — and the constant you must not drop",
            "baad — aur woh constant jo girana mana hai"
          )}
        </T>
      </Fade>

      {/* beat 1 — the cardinal sin */}
      <Draw on={beat >= 1} delay={dl(1, 0.8)} d="M 66 90 v 52" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 1.6)}>
        <T x={84} y={108} size={13} fill={RED} script anchor="start">
          {t(
            "the cardinal sin: the three equations are FORBIDDEN when a varies — not discouraged",
            "sabse bada paap: a badalte hi teeno equations VARJIT hain — bas hatot-saahit nahi"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 12)}>
        <T x={84} y={134} size={13} fill={RED} script anchor="start">
          {t(
            "nothing goes wrong visibly: right units, clean number — simply not true",
            "dikhne mein kuchh nahi bigadta: sahi units, saaf number — bas sach nahi"
          )}
        </T>
      </Fade>

      {/* beat 2 — the safe cards */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 0.6)}
        d="M 132 170 h 356 q 12 0 12 12 v 36 q 0 12 -12 12 h -356 q -12 0 -12 -12 v -36 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.6}
        dur={0.6}
        fill={CREAM}
      />
      <Fade on={beat >= 2} delay={dl(2, 1.8)}>
        <T x={310} y={208} size={19} fill={INK} weight={800}>
          v = dx⁄dt
        </T>
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 4)}
        d="M 572 170 h 356 q 12 0 12 12 v 36 q 0 12 -12 12 h -356 q -12 0 -12 -12 v -36 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.6}
        dur={0.6}
        fill={CREAM}
      />
      <Fade on={beat >= 2} delay={dl(2, 5.2)}>
        <T x={750} y={208} size={19} fill={INK} weight={800}>
          a = dv⁄dt = v·dv⁄dx
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 9)}>
        <T x={540} y={256} size={11} fill={GREEN} script>
          {t(
            "look at what is missing: no condition attached — no stamp on the box",
            "dekho kya gayab hai: koi shart nahi judi — dabbe par koi stamp nahi"
          )}
        </T>
      </Fade>

      {/* beat 3 — the retreat position */}
      <Fade on={beat >= 3} delay={dl(3, 2)}>
        <T x={540} y={284} size={12} fill={INK} script>
          {t(
            "true for ALL 1-D motion — the safe ground you retreat to when a shortcut expires",
            "HAR 1-D motion ke liye sach — jab shortcut ki miyaad khatam ho, yahin lauto"
          )}
        </T>
      </Fade>

      {/* beat 4 — the new tool contains the old */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.6)}
        d="M 132 305 h 816 q 12 0 12 12 v 71 q 0 12 -12 12 h -816 q -12 0 -12 -12 v -71 q 0 -12 12 -12"
        stroke={AMBER}
        sw={2.4}
        dur={0.8}
      />
      <Fade on={beat >= 4} delay={dl(4, 1.8)}>
        <T x={540} y={328} size={12} fill={AMBER_DARK} script>
          {t(
            "consistency check — the new tool contains the old:",
            "consistency jaanch — naya auzaar puraane ko samete hai:"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 5)}>
        <T x={540} y={358} size={14} fill={INK} weight={700}>
          v dv = a dx (a constant) → (v² − u²) ⁄ 2 = a·s
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 14)}>
        <T x={540} y={386} size={14} fill={GREEN} weight={700}>
          {t("⇒ v² = u² + 2as — equation ③, recovered", "⇒ v² = u² + 2as — equation ③, waapas mila")}
        </T>
      </Fade>

      {/* beat 5 — the quiet error */}
      <Draw on={beat >= 5} delay={dl(5, 0.8)} d="M 66 425 v 53" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={84} y={444} size={13} fill={RED} script anchor="start">
          {t(
            "every integration produces a CONSTANT — fix it from an initial condition",
            "har integration ek CONSTANT deta hai — use initial condition se tay karo"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 10)}>
        <T x={84} y={470} size={13} fill={RED} script anchor="start">
          {t(
            "the quiet error: the right shape, wrong by a fixed offset, everywhere",
            "chhupi galti: aakaar sahi, par ek pakke offset se galat, har jagah"
          )}
        </T>
      </Fade>

      {/* beat 6 — remove the problem, don't manage it */}
      <Draw on={beat >= 6} delay={dl(6, 0.8)} d="M 56 498 v 54" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={72} y={518} size={13} fill={GREEN} script anchor="start">
          {t(
            "pro-tip: use DEFINITE integrals with proper limits (v₀ → v, x₀ → x)",
            "pro-tip: DEFINITE integrals lo, sahi limits ke saath (v₀ → v, x₀ → x)"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 9)}>
        <T x={72} y={544} size={13} fill={GREEN} script anchor="start">
          {t(
            "the constant never appears, so it cannot be forgotten — sub-topic 3 did this silently",
            "constant aata hi nahi, to bhoolna mumkin nahi — sub-topic 3 mein yahi chupchaap hua tha"
          )}
        </T>
      </Fade>

      {/* beat 7 — the familiar first step */}
      <Fade on={beat >= 7} delay={dl(7, 2)}>
        <T x={84} y={580} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "still one dimension: a sign carries the direction — fix + first, as always",
            "ab bhi ek dimension: disha ek sign mein hai — pehle + tay karo, hamesha ki tarah"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
