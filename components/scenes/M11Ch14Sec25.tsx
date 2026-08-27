/**
 * M11 Ch14 · Section 25 — "Worked example: which probability assignment is valid (CUET)"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type: worked_examples, JSON-flagged
 * "Speed Trap" — same MCQ cross-out + ring motif as Sec11.
 *
 * Beats (board_reveal_at_english [0,12.37,19.88,27.65,38.06,49.41,61.01]):
 *  0 heading
 *  1 problem: S={ω₁..ω₄}. Which is a valid probability assignment?
 *  2 four options (i)-(iv) listed
 *  3 GUARDRAIL: test only 2 axioms — all ≥ 0 AND sum = 1
 *  4 (ii) has −0.1 < 0 → dead instantly, crossed
 *  5 (i) sums 1.2, (iv) sums 1.1 — both ≠ 1, crossed
 *  6 (HIGH) (iii) ringed: 0.1+0.2+0.3+0.4=1.0, all ≥ 0 ⇒ valid
 *
 * Layout plan (4 option rows y165/196/227/258, label x140 start,
 * reasoning appended x460 start; longer language counts):
 *  b1 | problem (16, ink)                            | T mid | x220..860 y128..146
 *  b2 | 4 options (15, ink), x140 start               | T st  | y150..268
 *  b3 | guardrail chip (red, w780 h40)                | Chip  | x150..930 y282..322
 *  b4 | cross row(ii) + red reasoning appended         | Draw/T| x130..350 y182..214
 *  b5 | cross row(i)+(iv) + red reasoning appended      | Draw/T| y150..180 / y243..273
 *  b6 | ring row(iii) + boxed HIGH conclusion (18)        | Draw/T| x120..500 y212..244 / y440..490
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, crossD, ringD, INK, RED, GREEN, CREAM,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD } from "./math-kit";

const OPTIONS = ["(i) 0.3, 0.3, 0.3, 0.3", "(ii) 0.5, 0.2, −0.1, 0.4", "(iii) 0.1, 0.2, 0.3, 0.4", "(iv) 0.4, 0.4, 0.1, 0.2"];

export default function M11Ch14Sec25({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const rowY = [165, 196, 227, 258];

  return (
    <Scene>
      {/* title always-on */}
      <Fade on={true}>
        <T x={540} y={64} size={23} fill={RED} script>
          {t("hunt a negative, then check the sum — never anything more", "negative dhoondo, phir sum check karo — bas itna hi")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={100} size={18} fill={INK} weight={700}>
          {t("Speed Trap — which assignment is valid? (CUET)", "Speed Trap — kaunsa assignment valid hai? (CUET)")}
        </T>
      </Fade>

      {/* beat 1 — problem */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={136} size={16} fill={INK} weight={600}>
          {t("S = {ω₁, ω₂, ω₃, ω₄}. Which is a valid probability assignment?", "S = {ω₁, ω₂, ω₃, ω₄}. Kaunsa valid probability assignment hai?")}
        </T>
      </Fade>

      {/* beat 2 — four options */}
      {OPTIONS.map((o, i) => (
        <Fade key={o} on={beat >= 2} delay={dl(2, 0.3 + i * 0.4)}>
          <T x={140} y={rowY[i]} size={15} fill={INK} anchor="start" weight={600}>
            {o}
          </T>
        </Fade>
      ))}

      {/* beat 3 — GUARDRAIL */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <Chip x={150} y={282} w={780} h={40} fill={CREAM} stroke={RED} textFill={RED} size={15} script={false}>
          {t("test only 2 axioms: all ≥ 0 AND sum = 1", "sirf 2 axioms test karo: sab ≥ 0 AUR sum = 1")}
        </Chip>
      </Fade>

      {/* beat 4 — (ii) killed instantly */}
      <Draw on={beat >= 4} delay={dl(4, 0.3)} d={crossD(136, 182, 220, 24)} stroke={RED} sw={2.2} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 1.0)}>
        <T x={470} y={rowY[1]} size={14} fill={RED} anchor="start" weight={700}>
          {t("→ −0.1 < 0 → dead instantly", "→ −0.1 < 0 → turant khatam")}
        </T>
      </Fade>

      {/* beat 5 — (i) and (iv) fail normalization */}
      <Draw on={beat >= 5} delay={dl(5, 0.3)} d={crossD(136, 151, 190, 24)} stroke={RED} sw={2.2} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 1.0)}>
        <T x={440} y={rowY[0]} size={14} fill={RED} anchor="start" weight={700}>
          {"→ sum = 1.2 ≠ 1"}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 1.6)} d={crossD(136, 244, 190, 24)} stroke={RED} sw={2.2} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 2.3)}>
        <T x={440} y={rowY[3]} size={14} fill={RED} anchor="start" weight={700}>
          {"→ sum = 1.1 ≠ 1"}
        </T>
      </Fade>

      {/* beat 6 — (iii) survives, HIGH */}
      <Draw on={beat >= 6} delay={dl(6, 0.3)} d={ringD(300, 220, 200, 24)} stroke={GREEN} sw={2.4} dur={0.8} />
      <Draw on={beat >= 6} delay={dl(6, 1.2)} d={roundRectD(220, 435, 640, 50, 10)} stroke={GREEN} sw={2.4} dur={0.7} />
      <Fade on={beat >= 6} delay={dl(6, 2.0)}>
        <T x={540} y={466} size={18} fill={GREEN} weight={800}>
          {"(iii) 0.1+0.2+0.3+0.4 = 1.0, all ≥ 0 ⇒ valid"}
        </T>
      </Fade>
    </Scene>
  );
}
