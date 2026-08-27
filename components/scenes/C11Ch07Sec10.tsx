/**
 * C11 Ch07 · Section 10 — Worked example (JEE Advanced): +2.5 in tetrathionate resolved by structure
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (en [0, 10.5, 24.49, 35.93, 50.26, 61.61, 73.64, 86.27]):
 *  0 heading: S in Na₂S₄O₆ averages +2.5 — resolve it
 *  1 naive average: 2(+1)+4x+6(−2)=0 ⇒ 4x=+10 ⇒ x=+2.5
 *  2 red-margin warning: +2.5 is a WARNING — average of unequal atoms
 *  3 THE structure: linear S–S–S–S, terminal S bear 3×O each, central S–S only
 *  4 rule text: equal-split (S−S→0 each) + terminal (3O+S→+5 each), combined
 *  5 diagram gets "0" · "0" above central S2, S3
 *  6 diagram gets "+5" · "+5" above terminal S1, S4
 *  7 verify calc + green answer stamp: 2×S(+5) + 2×S(0)
 *
 * Layout plan (Anek sans bl−0.78s..+0.31s; longer language counts):
 *  b0 | heading (sans18 700)      | T mid | x540 bl100
 *  b1 | calc (sans18)             | T mid | x540 bl136
 *  b2 | margin bar x64 y155..195, warning (script17) bl178
 *  b3 | structure: S1..S4 chain y320 x310/410/510/610; O's around S1,S4 y246..390
 *  b4 | rule text (sans15)        | T mid | x540 bl444
 *  b5 | "0" "0" annot (sans18)    | T mid | y408 x410/510
 *  b6 | "+5" "+5" annot (sans18)  | T mid | y408 x310/610
 *  b7 | verify (sans16) bl482; answer box x64..900 y505..550, text bl532
 */

import React from "react";
import { Rect } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  INK,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';
import { bondD } from "./chem-kit";

const S_X = [310, 410, 510, 610];
const S_Y = 320;

export default function C11Ch07Sec10({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={25} fill={RED} script>
          {t("a fraction on the board is a question, not an answer", "board par fraction ek sawaal hai, jawaab nahi")}
        </T>
      </Fade>

      {/* ===== beat 0 — heading ===== */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={100} size={18} fill={INK} weight={700}>
          {t("S in Na₂S₄O₆ averages +2.5 — resolve it", "Na₂S₄O₆ mein S ka average +2.5 — resolve karo")}
        </T>
      </Fade>

      {/* ===== beat 1 — naive average ===== */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={136} size={18} fill={INK} weight={700}>
          2(+1) + 4x + 6(−2) = 0  ⇒  4x = +10  ⇒  x = +2.5
        </T>
      </Fade>

      {/* ===== beat 2 — warning ===== */}
      <Draw on={beat >= 2} delay={dl(2, 0.2)} d="M 64 155 L 64 195" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 0.7)}>
        <T x={80} y={178} size={17} fill={RED} script anchor="start">
          {t("+2.5 is a WARNING — average of unequal atoms, not real", "+2.5 ek WARNING hai — unequal atoms ka average, real nahi")}
        </T>
      </Fade>

      {/* ===== beat 3 — the structure ===== */}
      <Draw on={beat >= 3} delay={dl(3, 0.2)} d={bondD(S_X[0] + 12, S_Y, S_X[1] - 12, S_Y)} stroke={INK} sw={2.2} dur={0.4} />
      <Draw on={beat >= 3} delay={dl(3, 0.4)} d={bondD(S_X[1] + 12, S_Y, S_X[2] - 12, S_Y)} stroke={INK} sw={2.2} dur={0.4} />
      <Draw on={beat >= 3} delay={dl(3, 0.6)} d={bondD(S_X[2] + 12, S_Y, S_X[3] - 12, S_Y)} stroke={INK} sw={2.2} dur={0.4} />
      <Draw on={beat >= 3} delay={dl(3, 0.9)} d={bondD(S_X[0] - 8, S_Y - 6, 258, 270)} stroke={INK} sw={2} dur={0.35} />
      <Draw on={beat >= 3} delay={dl(3, 1.1)} d={bondD(S_X[0], S_Y - 12, S_X[0], 266)} stroke={INK} sw={2} dur={0.35} />
      <Draw on={beat >= 3} delay={dl(3, 1.3)} d={bondD(S_X[0] - 8, S_Y + 6, 258, 367)} stroke={INK} sw={2} dur={0.35} />
      <Draw on={beat >= 3} delay={dl(3, 1.5)} d={bondD(S_X[3] + 8, S_Y - 6, 662, 270)} stroke={INK} sw={2} dur={0.35} />
      <Draw on={beat >= 3} delay={dl(3, 1.7)} d={bondD(S_X[3], S_Y - 12, S_X[3], 266)} stroke={INK} sw={2} dur={0.35} />
      <Draw on={beat >= 3} delay={dl(3, 1.9)} d={bondD(S_X[3] + 8, S_Y + 6, 662, 367)} stroke={INK} sw={2} dur={0.35} />

      {S_X.map((x, i) => (
        <Fade key={i} on={beat >= 3} delay={dl(3, 2.2 + i * 0.15)}>
          <T x={x} y={S_Y + 6} size={18} fill={INK} weight={800}>
            S
          </T>
        </Fade>
      ))}
      {[
        [250, 265],
        [S_X[0], 258],
        [250, 375],
        [670, 265],
        [S_X[3], 258],
        [670, 375],
      ].map(([x, y], i) => (
        <Fade key={i} on={beat >= 3} delay={dl(3, 2.9 + i * 0.1)}>
          <T x={x} y={y} size={14} fill={RED} weight={700}>
            O
          </T>
        </Fade>
      ))}

      {/* ===== beat 4 — the rule (combined) ===== */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={444} size={15} fill={AMBER_DARK}>
          {t(
            "equal-split: S−S bond → 0 each   ·   terminal S (3×O + S) → +5 each",
            "equal-split: S−S bond → 0 each   ·   terminal S (3×O + S) → +5 each"
          )}
        </T>
      </Fade>

      {/* ===== beat 5 — central S annotations ===== */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={S_X[1]} y={408} size={18} fill={AMBER_DARK} weight={800}>
          0
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={S_X[2]} y={408} size={18} fill={AMBER_DARK} weight={800}>
          0
        </T>
      </Fade>

      {/* ===== beat 6 — terminal S annotations ===== */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={S_X[0]} y={408} size={18} fill={RED} weight={800}>
          +5
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <T x={S_X[3]} y={408} size={18} fill={RED} weight={800}>
          +5
        </T>
      </Fade>

      {/* ===== beat 7 — verify + answer ===== */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={482} size={16} fill={INK}>
          [2(+5) + 2(0)] / 4 = +10 / 4 = +2.5 ✓
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1)}>
        <Rect x={64} y={505} width={836} height={45} rx={8} fill="none" stroke={GREEN} strokeWidth={2.4} />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.5)}>
        <T x={482} y={532} size={18} fill={GREEN} weight={800}>
          {t("2 terminal S = +5   ·   2 central S = 0", "2 terminal S = +5   ·   2 central S = 0")}
        </T>
      </Fade>
    </Scene>
  );
}
