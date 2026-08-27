/**
 * M11 Ch02 · Section 6 — "Proof of distributivity + recovering A and B from A × B"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * FLAGGED — real proof (top half) + procedure (bottom half), extra eye-check.
 *
 * Beats (board_reveal_at_english [0, 13.4, 27.82, 46.17, 71.0, 95.4, 106.24, 120.58]):
 *  0 title (always-on) · 1 strategy: prove ⊆ both ways via one reversible chain
 *  2 unpack: (x,y)∈A×(B∩C) ⟺ x∈A and (y∈B and y∈C)  [Box0]
 *  3 the tree: regroup branches into (x∈A,y∈B) and (x∈A,y∈C), converge to the answer
 *  4 guardrail: the subtle move is duplicating x∈A onto both branches
 *  5 SECOND heading: Procedure — recovering A, B from a given A×B (divider + sub-header)
 *  6 steps 1&2: harvest distinct 1st/2nd coordinates → A, B
 *  7 step 3: sanity check n(A)·n(B) = pairs given (boxed)
 *
 * Layout plan — TOP zone (proof, y100..304) + divider + BOTTOM zone (procedure,
 * y325..547), boxes estimated:
 *  b0 | title (script 26, red)          | T mid  | x325..754  y36..82  (bl 70)
 *  b1 | strategy (15, muted)             | T mid  | x307..772  y100..117 (bl 112)
 *  b2 | Box0 unpack (16)                 | T mid  | x368..712  y133..150 (bl 145)
 *  b3 | branch arrows                    | Draw   | (500,158)→(270,183) · (580,158)→(810,183)
 *  b3 | Box1 "x∈A,y∈B" (15)              | Chip   | x200..316  y185..217
 *  b3 | Box2 "x∈A,y∈C" (15)              | Chip   | x764..880  y185..217
 *  b3 | converge arrows                  | Draw   | (258,222)→(490,223) · (822,222)→(590,223)
 *  b3 | Box3 result (16, green)          | Chip   | x439..641  y228..262
 *  b4 | "duplicated!" (12, red)          | T mid  | x505..575  y166..178 (bl 172)
 *  b4 | margin bar (red)                 | Draw   | x60  y285..315
 *  b4 | guardrail sentence (14, red)     | T st   | x76..470   y293..308 (bl 300)
 *  b5 | divider                          | Draw   | x100..980  y325
 *  b5 | sub-heading (22, amber)          | T mid  | x290..790  y338..362 (bl 355)
 *  b6 | step1 (17)                       | T st   | x150..507  y387..411 (bl 400)
 *  b6 | step2 (17)                       | T st   | x150..515  y422..446 (bl 435)
 *  b7 | chip "check n(A)·n(B)=pairs"(18) | Chip   | x379..702  y475..515
 *  b7 | caption (14, red)                | T mid  | x344..736  y532..547 (bl 543)
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
  arrowD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  GREEN_DARK,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch02Sec6({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={70} size={26} fill={RED} anchor="middle" script>
          {t("Proving A × (B ∩ C) = (A × B) ∩ (A × C)", "Proof: A × (B ∩ C) = (A × B) ∩ (A × C)")}
        </T>
      </Fade>

      {/* beat 1 — strategy */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={112} size={15} fill={MUTED} anchor="middle">
          {t(
            "Strategy: prove ⊆ both ways at once via one reversible chain",
            "Strategy: dono ⊆ directions ek reversible chain se prove karo"
          )}
        </T>
      </Fade>

      {/* beat 2 — unpack the membership test */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={540} y={145} size={16} fill={INK} anchor="middle" weight={700}>
          {"(x,y) ∈ A×(B∩C)  ⟺  x∈A and (y∈B and y∈C)"}
        </T>
      </Fade>

      {/* beat 3 — the tree: duplicate x∈A onto both branches, converge to the answer */}
      <Draw on={beat >= 3} d={arrowD(500, 158, 270, 183)} stroke={INK} sw={1.8} delay={dl(3, 0)} />
      <Draw on={beat >= 3} d={arrowD(580, 158, 810, 183)} stroke={INK} sw={1.8} delay={dl(3, 0.1)} />
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <Chip x={200} y={185} w={116} h={32} fill="#FCF4E0" stroke={INK} textFill={INK} size={15} script={false}>
          x∈A, y∈B
        </Chip>
        <Chip x={764} y={185} w={116} h={32} fill="#FCF4E0" stroke={INK} textFill={INK} size={15} script={false}>
          x∈A, y∈C
        </Chip>
      </Fade>
      <Draw on={beat >= 3} d={arrowD(258, 222, 488, 226)} stroke={GREEN_DARK} sw={1.8} delay={dl(3, 1.0)} />
      <Draw on={beat >= 3} d={arrowD(822, 222, 592, 226)} stroke={GREEN_DARK} sw={1.8} delay={dl(3, 1.1)} />
      <Fade on={beat >= 3} delay={dl(3, 1.6)}>
        <Chip x={439} y={228} w={202} h={34} fill={GREEN} textFill="#FFFEFB" size={16} script={false}>
          {"(x,y) ∈ (A×B)∩(A×C)"}
        </Chip>
      </Fade>

      {/* beat 4 — guardrail: the subtle duplication move */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={540} y={172} size={12} fill={RED} anchor="middle" weight={700}>
          {t("duplicated!", "duplicate!")}
        </T>
      </Fade>
      <Draw on={beat >= 4} d="M 60 285 L 60 315" stroke={RED} sw={3} delay={dl(4, 0.5)} />
      <Fade on={beat >= 4} delay={dl(4, 0.9)}>
        <T x={76} y={300} size={14} fill={RED} anchor="start">
          {t(
            "The subtle move: duplicate x∈A onto both branches",
            "Subtle move: x∈A ko dono branches mein duplicate karo"
          )}
        </T>
      </Fade>

      {/* beat 5 — second heading: the recovery procedure */}
      <Draw on={beat >= 5} d="M 100 325 L 980 325" stroke={MUTED} sw={1} delay={dl(5, 0)} />
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={355} size={22} fill={AMBER_DARK} anchor="middle" weight={800}>
          {t(
            "Procedure — recovering A and B from a given A × B",
            "Procedure — diye gaye A × B se A aur B nikalna"
          )}
        </T>
      </Fade>

      {/* beat 6 — steps 1 and 2 */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={150} y={400} size={17} fill={INK} anchor="start">
          {t("1. Harvest distinct FIRST coordinates → A", "1. Distinct PEHLA coordinates jodo → A")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={150} y={435} size={17} fill={INK} anchor="start">
          {t("2. Harvest distinct SECOND coordinates → B", "2. Distinct DUSRA coordinates jodo → B")}
        </T>
      </Fade>

      {/* beat 7 — step 3: the sanity check */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <Chip x={379} y={475} w={323} h={40} fill="#FCF4E0" stroke={AMBER_DARK} textFill={AMBER_DARK} size={18} script={false}>
          {t("3. Check: n(A)·n(B) = pairs given", "3. Check: n(A)·n(B) = diye gaye pairs")}
        </Chip>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.7)}>
        <T x={540} y={543} size={14} fill={RED} anchor="middle">
          {t(
            "(else: a pair's missing, or it's not a genuine product!)",
            "(warna: pair missing hai, ya genuine product nahi tha!)"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
