/**
 * C11 Ch01 · Section 22 — "The five laws and Dalton's atomic theory"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (en [0,18.77,28.84,50.43,75.27,92.16,117,141.83]):
 *  0 anchor: grandma's masala — fixed ratio, same everywhere
 *  1 change the ratio → not masala anymore; nature is even stricter
 *  2 historical context: thousands of weighings revealed fixed proportions
 *  3 the five laws, listed (fully fades at beat 4)
 *  4 LEGO analogy: wall A, ratio 2:1 always (definite proportions)
 *  5 LEGO analogy cont'd: wall B, different ratio; whole numbers; mass conserved
 *  6 Dalton's atomic theory (1808), four postulates
 *  7 guardrail: where the theory breaks; what survives
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | anchor (script13 ink)        | T mid | x540  y90
 *  b1 | l1 (script13 ink)            | T mid | x540  y113
 *  b2 | l2 (script12 muted)          | T mid | x540  y136
 *  b3 | 5 laws (12 ink, start)       | T st  | x140  y162/184/206/228/250 [fade@b4]
 *  b4 | wall A bricks (6, 2:1)       | Draw  | x200..316 y175..222
 *  b4 | wall A label (12 bold)       | T mid | x258  y245
 *  b5 | wall B bricks (4, 1:1)       | Draw  | x650..708 y175..222
 *  b5 | wall B label (12 bold)       | T mid | x679  y245
 *  b5 | caption 1/2 (script12 muted) | T mid | x540  y270/293
 *  b6 | Dalton title (14 bold)       | T mid | x540  y320
 *  b6 | postulate ×4 (13 ink)        | T mid | x540  y345/366/387/408
 *  b7 | guardrail (script14 red)     | T mid | x540  y440
 *  b7 | items (script12 red)         | T mid | x540  y462
 *  b7 | survives (script13 green)    | T mid | x540  y488
 */

import React from "react";
import { Rect } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, T, INK, MUTED, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

const LAWS = [
  "1. Conservation of Mass — the books always balance",
  "2. Definite Proportions — one compound, one recipe",
  "3. Multiple Proportions — small whole-number ratios",
  "4. Reciprocal Proportions — links 3 elements via a common one",
  "5. Combining Volumes — whole-number simplicity for gases",
];

const WALL_A: [number, number, string][] = [
  [200, 175, "A"], [244, 175, "A"], [288, 175, "A"],
  [200, 200, "A"], [244, 200, "B"], [288, 200, "B"],
];
const WALL_B: [number, number, string][] = [
  [650, 175, "A"], [680, 175, "B"],
  [650, 200, "B"], [680, 200, "A"],
];

export default function C11Ch01Sec22({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={58} size={20} fill={RED} script>
          {t("the five laws and Dalton's atomic theory", "paanch laws aur Dalton ka atomic theory")}
        </T>
      </Fade>

      {/* beat 0 — anchor: grandma's masala */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={90} size={13} fill={INK} script>
          {t(
            "grandma's masala: 2 cumin : 1 pepper — same ratio, Chennai or Amritsar",
            "dadi ka masala: 2 cumin : 1 pepper — ratio wahi, Chennai ho ya Amritsar"
          )}
        </T>
      </Fade>

      {/* beat 1 — nature is even stricter */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={540} y={113} size={13} fill={INK} script>
          {t(
            "change the ratio → not masala anymore — nature is even stricter",
            "ratio badlo → masala nahi raha — nature dadi se bhi zyada strict hai"
          )}
        </T>
      </Fade>

      {/* beat 2 — historical context */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={136} size={12} fill={MUTED} script>
          {t(
            "late 1700s: thousands of careful weighings revealed fixed proportions",
            "1700s ke aakhir mein: hazaaron weighings ne fixed proportions dikhaye"
          )}
        </T>
      </Fade>

      {/* beat 3 — the five laws (fully fades once the LEGO analogy starts) */}
      {LAWS.map((law, i) => (
        <Fade key={law} on={beat >= 3 && beat < 4} delay={dl(3, 0.3 + i * 0.4)}>
          <T x={140} y={[162, 184, 206, 228, 250][i]} size={12} fill={INK} script anchor="start">
            {law}
          </T>
        </Fade>
      ))}

      {/* beat 4 — LEGO wall A: definite proportions */}
      {WALL_A.map(([x, y, type], i) => (
        <Fade key={`${x}-${y}`} on={beat >= 4} delay={dl(4, 0.2 + i * 0.15)}>
          <Rect x={x} y={y} width={40} height={20} fill={type === "A" ? RED : AMBER_DARK} stroke={INK} strokeWidth={1} />
        </Fade>
      ))}
      <Fade on={beat >= 4} delay={dl(4, 1.4)}>
        <T x={258} y={245} size={12} fill={INK} weight={700} script={false}>
          {t("A:B = 2:1, ALWAYS (definite proportions)", "A:B = 2:1, HAMESHA (definite proportions)")}
        </T>
      </Fade>

      {/* beat 5 — LEGO wall B: multiple proportions + conservation */}
      {WALL_B.map(([x, y, type], i) => (
        <Fade key={`${x}-${y}`} on={beat >= 5} delay={dl(5, 0.2 + i * 0.15)}>
          <Rect x={x} y={y} width={28} height={20} fill={type === "A" ? RED : AMBER_DARK} stroke={INK} strokeWidth={1} />
        </Fade>
      ))}
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={664} y={245} size={12} fill={INK} weight={700} script={false}>
          {t("A:B = 1:1 — a DIFFERENT recipe", "A:B = 1:1 — ek ALAG recipe")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.8)}>
        <T x={540} y={270} size={12} fill={MUTED} script>
          {t(
            "different recipes → simple WHOLE-NUMBER ratios (multiple proportions)",
            "alag recipes → simple WHOLE-NUMBER ratios (multiple proportions)"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2.5)}>
        <T x={540} y={293} size={12} fill={MUTED} script>
          {t(
            "no half-bricks — total mass conserved, before = after",
            "aadhi brick nahi — total mass conserved, pehle = baad mein"
          )}
        </T>
      </Fade>

      {/* beat 6 — Dalton's atomic theory */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={320} size={14} fill={INK} weight={700} script={false}>
          {t("DALTON'S ATOMIC THEORY (1808)", "DALTON KA ATOMIC THEORY (1808)")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={540} y={345} size={13} fill={INK} script>
          {t("atoms: tiny, indivisible", "atoms: chhote, indivisible")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={540} y={366} size={13} fill={INK} script>
          {t("all atoms of an element: identical", "ek element ke saare atoms: identical")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.2)}>
        <T x={540} y={387} size={13} fill={INK} script>
          {t("combine in whole-number ratios", "whole-number ratios mein combine hote")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.8)}>
        <T x={540} y={408} size={13} fill={INK} script>
          {t("conserved in reactions", "reactions mein conserved rehte")}
        </T>
      </Fade>

      {/* beat 7 — guardrail: where the theory breaks */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={540} y={440} size={14} fill={RED} script>
          {t("where the theory breaks:", "theory kahaan tootti hai:")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={540} y={462} size={12} fill={RED} script>
          isotopes (mass DIFFERS) · atom IS divisible · isobars/allotropes exist
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 2)}>
        <T x={540} y={488} size={13} fill={GREEN} script>
          {t("what survives: conservation of ATOMS in reactions", "jo bacha: reactions mein ATOMS ka conservation")}
        </T>
      </Fade>
    </Scene>
  );
}
