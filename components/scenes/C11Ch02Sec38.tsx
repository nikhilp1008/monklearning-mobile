/**
 * C11 Ch02 · Section 38 — "Worked example (NEET): same transition, different ion"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md. `section_type: worked_examples`.
 *
 * Beats (en [0, 6.91, 18.52, 26.79, 36.35, 46.76, 57, 63.83]):
 *  0 anchor: a pure speed question — lean on the Z² scaling
 *  1 given: H's first Lyman line = 1216 Å. Find for He⁺
 *  2 guardrail: the trap — relaunching the full Rydberg calculation
 *  3 explain: same transition ⇒ ν̄ ∝ Z² ⇒ λ ∝ 1/Z²
 *  4 formula (high, GREEN): λHe+/λH = ZH²/ZHe+² = 1/4
 *  5 formula (high, GREEN): λHe+ = 1216/4 = 304 Å
 *  6 explain: answer, in about ten seconds
 *  7 guardrail (high): Z² scaling — never recompute from scratch
 *
 * Layout plan (single column, x540 center):
 *  title (always)          | T mid | x540 y52 size14 script red
 *  b0 | anchor caption      | T mid | x540 y76             [dims@b1]
 *  b1 | given chip          | Chip  | x280..800 y96..130
 *  b2 | guardrail caption   | T mid | x540 y164
 *  b3 | scaling caption     | T mid | x540 y194
 *  b4 | ratio chip (GREEN)  | Chip  | x350..730 y214..248
 *  b5 | value chip (GREEN)  | Chip  | x380..700 y266..302
 *  b6 | answer caption      | T mid | x540 y330
 *  b7 | guardrail chip      | Chip  | x260..820 y358..396
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, T, Chip, INK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch02Sec38({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={52} size={14} fill={RED} script>
          {t("[NEET] Lyman line for He⁺ by scaling", "[NEET] He⁺ ki Lyman line, scaling se")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} dim={beat >= 1} delay={dl(0, 0.3)}>
        <T x={540} y={76} size={11} fill={RED} script>
          {t("a pure speed question — lean on the Z² scaling", "pure speed sawaal — Z² scaling par tiko")}
        </T>
      </Fade>

      {/* beat 1 — given */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <Chip x={280} y={96} w={520} h={34} fill={CREAM} stroke={INK} textFill={INK} size={14} script={false}>
          {t("GIVEN: H's first Lyman line = 1216 Å. Find for He⁺", "GIVEN: H ki first Lyman line = 1216 Å. He⁺ ke liye nikaalo")}
        </Chip>
      </Fade>

      {/* beat 2 — guardrail: the trap */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={164} size={12} fill={RED} script>
          {t(
            "the trap: relaunching the full Rydberg calculation for He⁺",
            "trap: He⁺ ke liye poora Rydberg calculation dobara chalana"
          )}
        </T>
      </Fade>

      {/* beat 3 — explain: the Z² scaling */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={194} size={13} fill={INK} script>
          same transition ⇒ ν̄ ∝ Z²  ⇒  λ ∝ 1/Z²
        </T>
      </Fade>

      {/* beat 4 — the ratio (high, GREEN) */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <Chip x={350} y={214} w={380} h={34} fill={GREEN} textFill="#fff" size={15} script={false}>
          λHe+/λH = ZH²/ZHe+² = 1/4
        </Chip>
      </Fade>

      {/* beat 5 — the value (high, GREEN) */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Chip x={380} y={266} w={320} h={36} fill={GREEN} textFill="#fff" size={17} script={false}>
          λHe+ = 1216/4 = 304 Å
        </Chip>
      </Fade>

      {/* beat 6 — explain: the answer, fast */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={330} size={13} fill={GREEN} script>
          {t("answer: 304 Å — in about ten seconds", "answer: 304 Å — lagbhag das second mein")}
        </T>
      </Fade>

      {/* beat 7 — guardrail (high): never recompute from scratch */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Chip x={260} y={358} w={560} h={38} fill={CREAM} stroke={RED} textFill={RED} size={14} script={false}>
          {t(
            "the whole game is Z² scaling — never recompute from scratch",
            "poora khel Z² scaling hai — scratch se dobara mat karo"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
