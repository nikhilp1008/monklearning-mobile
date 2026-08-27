/**
 * C11 Ch07 · Section 17 — Worked example (NEET speed trap): the coefficient of H⁺
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (en [0, 24.83, 36.18, 53.42, 65.45, 78.08, 97.54, 117.25]):
 *  0 heading: find only the H⁺ coefficient — don't balance everything
 *  1 reaction: MnO₄⁻ + C₂O₄²⁻ → Mn²⁺ + CO₂ (acidic)
 *  2 electrons: Mn +7→+2 gains 5e⁻ · oxalate (2C) +3→+4 each, loses 2e⁻ total
 *  3 red-margin: LCM=10 ⇒ 2 MnO₄⁻ and 5 C₂O₄²⁻
 *  4 full balanced: 2MnO₄⁻+5C₂O₄²⁻+16H⁺ → 2Mn²⁺+10CO₂+8H₂O
 *  5 speed logic: O left 2(4)+5(4)=28 · 10CO₂ holds 20 · 8O→8H₂O→16H⁺
 *  6 answer=16 (green) + traps line
 *  7 red-margin: never balance the whole equation — count e⁻, LCM, read off
 *  (everything stays)
 *
 * Layout plan (Anek sans bl−0.78s..+0.31s; longer language counts):
 *  b0 | heading (sans18 700)   | T mid | x540 bl100
 *  b1 | reaction (sans19)      | T mid | x540 bl136
 *  b2 | electrons (sans15)     | T mid | x540 bl172
 *  b3 | margin bar x64 y196..230, text (sans16 red) bl216
 *  b4 | full eqn (sans18)      | T mid | x540 bl262
 *  b5 | speed logic (sans15)   | T mid | x540 bl298
 *  b6 | answer (sans20 800 grn)| T mid | x540 bl336; traps (sans14 muted) bl368
 *  b7 | margin bar x64 y400..434, text (sans16 red) bl416
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
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch07Sec17({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("count electrons, take the LCM, read the coefficient off", "electrons count karo, LCM lo, coefficient padh lo")}
        </T>
      </Fade>

      {/* ===== beat 0 — heading ===== */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={100} size={18} fill={INK} weight={700}>
          {t("find only the H⁺ coefficient — don't balance everything", "sirf H⁺ ka coefficient chahiye — sab balance mat karo")}
        </T>
      </Fade>

      {/* ===== beat 1 — reaction ===== */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={136} size={19} fill={INK} weight={700}>
          MnO₄⁻ + C₂O₄²⁻ → Mn²⁺ + CO₂   ({t("acidic", "acidic")})
        </T>
      </Fade>

      {/* ===== beat 2 — electron count ===== */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={172} size={15} fill={INK}>
          {t(
            "Mn: +7 → +2 gains 5e⁻   ·   oxalate (2 C): +3 → +4 each, loses 2e⁻ total",
            "Mn: +7 → +2, 5e⁻ gain   ·   oxalate (2 C): +3 → +4 each, total 2e⁻ loss"
          )}
        </T>
      </Fade>

      {/* ===== beat 3 — LCM ===== */}
      <Draw on={beat >= 3} delay={dl(3, 0.2)} d="M 64 196 L 64 230" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 0.7)}>
        <T x={80} y={216} size={16} fill={RED} weight={700} anchor="start">
          {t("LCM = 10  ⇒  2 MnO₄⁻ and 5 C₂O₄²⁻", "LCM = 10  ⇒  2 MnO₄⁻ aur 5 C₂O₄²⁻")}
        </T>
      </Fade>

      {/* ===== beat 4 — full balanced ===== */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={262} size={18} fill={INK} weight={700}>
          2MnO₄⁻ + 5C₂O₄²⁻ + 16H⁺ → 2Mn²⁺ + 10CO₂ + 8H₂O
        </T>
      </Fade>

      {/* ===== beat 5 — speed logic ===== */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={298} size={15} fill={INK}>
          {t(
            "O left: 2(4) + 5(4) = 28   ·   10 CO₂ holds 20   ·   8 O → 8 H₂O → 16 H⁺",
            "O left: 2(4) + 5(4) = 28   ·   10 CO₂ mein 20   ·   8 O → 8 H₂O → 16 H⁺"
          )}
        </T>
      </Fade>

      {/* ===== beat 6 — answer + traps ===== */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={336} size={20} fill={GREEN} weight={800}>
          {t("Answer: 16", "Answer: 16")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={540} y={368} size={14} fill={MUTED}>
          {t(
            "traps: 5 oxalate → 5 CO₂ (it's 10)  ·  oxalate as 1e⁻ donor (it's 2)",
            "traps: 5 oxalate → 5 CO₂ (asal mein 10)  ·  oxalate ko 1e⁻ donor maanna (asal 2)"
          )}
        </T>
      </Fade>

      {/* ===== beat 7 — the habit ===== */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 64 400 L 64 434" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.7)}>
        <T x={80} y={416} size={16} fill={RED} script anchor="start">
          {t("never balance the whole equation — count e⁻, LCM, read off", "poori equation balance mat karo — e⁻ count, LCM, padh lo")}
        </T>
      </Fade>
    </Scene>
  );
}
