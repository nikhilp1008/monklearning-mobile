/**
 * C11 Ch07 · Section 36 — "How to classify, predict displacement, and the honest limits of O.N."
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (en [0, 10.15, 26.97, 49.75, 53.25, 67.67, 73.56, 89.34, 100.61]):
 *  0 heading: classify a redox reaction — step by step (erases at beat3)
 *  1 steps 1-2: assign O.N. both sides; confirm redox (no change = NOT redox)
 *  2 step 3: count combine/split + elements changed → read off the family
 *  3 heading: predict a displacement (erases at beat5)
 *  4 locate both in series; higher displaces lower; Cu rod in ZnSO₄ does nothing
 *  5 heading: the honest limits of the O.N. idea (stays)
 *  6 O.N. = hypothetical charge, not real; +2.5 in S₄O₆²⁻ describes no single atom
 *  7 organic/chain compounds: like-atom bonds make O.N. ambiguous
 *  8 red-margin: O.N. is NOT valency — valency unsigned, O.N. signed and can differ
 *
 * Layout plan (Anek sans bl−0.78s..+0.31s; longer language counts):
 *  b1 | line (sans15)          | T mid | x540 bl134
 *  b2 | line (sans15)          | T mid | x540 bl168
 *  b4 | 2 lines (sans15)       | T mid | x540 bl134/158
 *  b6 | 2 lines (sans15)       | T mid | x540 bl134/158
 *  b7 | line (sans15)          | T mid | x540 bl192
 *  b8 | margin bar x64 y216..252, text (sans15 red) x80 bl234
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
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch07Sec36({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("did the O.N. even change? one check kills the biggest trap", "O.N. change hua ya nahi? ek check sabse bada trap maar deta")}
        </T>
      </Fade>

      {/* ===== beat 0 — heading (erases at beat 3) ===== */}
      <Fade on={beat >= 0 && beat < 3} delay={dl(0, 0.3)}>
        <T x={540} y={100} size={18} fill={INK} weight={700}>
          {t("classify a redox reaction — step by step", "redox reaction classify karo — step by step")}
        </T>
      </Fade>

      {/* ===== beats 1-2 (erase at beat 3) ===== */}
      <Fade on={beat >= 1 && beat < 3} delay={dl(1, 0.3)}>
        <T x={540} y={134} size={15} fill={INK}>
          {t(
            "1-2 · assign O.N. both sides; confirm redox (no change = NOT redox)",
            "1-2 · dono side O.N. do; confirm redox (change nahi = redox NAHI)"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2 && beat < 3} delay={dl(2, 0.3)}>
        <T x={540} y={168} size={15} fill={INK}>
          {t(
            "3 · count combine/split + elements changed → read off the family",
            "3 · combine/split + changed elements gino → family padho"
          )}
        </T>
      </Fade>

      {/* ===== beat 3 — heading (erases at beat 5) ===== */}
      <Fade on={beat >= 3 && beat < 5} delay={dl(3, 0.3)}>
        <T x={540} y={100} size={18} fill={INK} weight={700}>
          {t("predict a displacement", "displacement predict karo")}
        </T>
      </Fade>

      {/* ===== beat 4 (erase at beat 5) ===== */}
      <Fade on={beat >= 4 && beat < 5} delay={dl(4, 0.3)}>
        <T x={540} y={134} size={15} fill={INK}>
          {t("locate both in the series; the higher one displaces the lower", "dono ko series mein dhundo; upar wala neeche wale ko displace karta")}
        </T>
      </Fade>
      <Fade on={beat >= 4 && beat < 5} delay={dl(4, 1)}>
        <T x={540} y={158} size={15} fill={INK}>
          {t("added species lower? no reaction — e.g. Cu rod in ZnSO₄ does nothing", "add wala neeche? no reaction — e.g. ZnSO₄ mein Cu rod kuch nahi karta")}
        </T>
      </Fade>

      {/* ===== beat 5 — heading (stays) ===== */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={100} size={18} fill={INK} weight={700}>
          {t("the honest limits of the O.N. idea", "O.N. idea ki honest limits")}
        </T>
      </Fade>

      {/* ===== beat 6 — not real charge ===== */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={134} size={15} fill={INK}>
          {t("O.N. = hypothetical charge, not real", "O.N. = hypothetical charge, real nahi")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={540} y={158} size={15} fill={INK}>
          {t("fractional/average (+2.5 in S₄O₆²⁻) describes no single atom", "fractional/average (+2.5, S₄O₆²⁻) kisi single atom ko describe nahi karta")}
        </T>
      </Fade>

      {/* ===== beat 7 — organic ambiguity ===== */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={192} size={15} fill={INK}>
          {t("organic/chain compounds: like-atom bonds (C−C, O−O) make O.N. ambiguous", "organic/chain compounds: like-atom bonds (C−C, O−O) se O.N. ambiguous")}
        </T>
      </Fade>

      {/* ===== beat 8 — not valency ===== */}
      <Draw on={beat >= 8} delay={dl(8, 0.2)} d="M 64 216 L 64 252" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 8} delay={dl(8, 0.7)}>
        <T x={80} y={234} size={15} fill={RED} weight={700} anchor="start">
          {t(
            "O.N. is NOT valency — valency: unsigned bonding capacity; O.N.: signed, can differ",
            "O.N. VALENCY nahi hai — valency: unsigned bonding capacity; O.N.: signed, alag ho sakta"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
