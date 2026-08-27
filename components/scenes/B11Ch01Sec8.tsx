/**
 * B11 Ch01 · Section 8 — "Worked examples: the dividing alga & statement count"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Two independent NEET examples, back to back. Example 3 (beats 0-3) occupies
 * the whole board, then vanishes cleanly (on={beat<4}) so Example 4 (beats
 * 4-7) can reuse the same coordinate space without ghost-stacking.
 *
 * Beats (en [0, 15.56, 25.66, 50.09, 66.97, 78.83, 93.51, 117.34]):
 *  0 Example 3 title + question + 4 option chips
 *  1 DIAGRAM: alga cell divides → 2 daughters → "growth AND reproduction"
 *  2 answer banner: option 3 — BOTH; underline on option-3 chip
 *  3 speed-trap: options 1/2 crossed out (forcing one box)
 *  4 Example 4 title + 4 statements A-D (reusing the freed slot)
 *  5 statement A marked FALSE
 *  6 statements B, C, D marked TRUE
 *  7 verdict: THREE correct (B,C,D) — A is the most-tested misconception
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | title (script22 red)        | T mid  | x?..?  y30..75  (bl64, longer=HI)
 *  b0 | underline swoosh            | Draw   | y86  x330..750
 *  b0 | question (14 anek ink)      | T mid  | x169..911 y99..115 (bl110)
 *  b0 | 4 option chips (12 anek)    | Chip   | y136..164  x314/438/598/680
 *  b1 | cell circle (green)         | Draw   | c(200,250) r36
 *  b1 | arrow → daughters           | Draw   | (236,250)→(300,250)
 *  b1 | 2 daughter circles (green)  | Draw   | c(350,214) r24 · c(350,286) r24
 *  b1 | outcome chip (amber-d)      | Chip   | x400..600  y228..272
 *  b2 | banner (ink→cream)          | Chip   | x340..740  y322..354
 *  b2 | underline on option 3 chip  | Draw   | y168  x598..666
 *  b3 | cross-out option 1          | Draw   | x314 y136 w110 h28
 *  b3 | cross-out option 2          | Draw   | x438 y136 w146 h28
 *  b3 | trap (script14 red)         | T mid  | x?..?  y362..388 (bl380)
 *  b4 | title2 (script22 red)       | T mid  | x?..?  y30..75  (bl64)
 *  b4 | underline                   | Draw   | y86  x330..750
 *  b4 | statements A-D (15 anek)    | T st   | x80..492  y104..224 (bl120/152/184/216)
 *  b5 | "FALSE ✗" tag (red)         | Chip   | x870..1000  y107..133
 *  b6 | "TRUE ✓" tags ×3 (green)    | Chip   | x870..1000  y139/171/203
 *  b7 | verdict banner (ink→cream)  | Chip   | x300..780  y260..296
 *  b7 | note (script14 red)         | T mid  | x?..?  y302..327 (bl320)
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
  crossD,
  INK,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

const OPTIONS: [number, number, string][] = [
  [314, 110, "1) growth only"],
  [438, 146, "2) reproduction only"],
  [598, 68, "3) both"],
  [680, 86, "4) neither"],
];

const STATEMENTS: [number, string, string][] = [
  [120, "A: an isolated test-tube reaction counts as 'living'", "A: ek isolated test-tube reaction 'living' maana jaata hai"],
  [152, "B: a mule is alive, though it cannot reproduce", "B: mule alive hai, chahe reproduce na kar sake"],
  [184, "C: consciousness is the defining property", "C: consciousness defining property maani jaati hai"],
  [216, "D: humans alone are self-aware", "D: sirf insaan hi self-aware hain"],
];

export default function B11Ch01Sec8({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — Example 3: title, question, options */}
      <Fade on={beat >= 0 && beat < 4} delay={dl(0, 0.2)}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("Example 3 — The dividing alga (NEET)", "Example 3 — Dividing alga (NEET)")}
        </T>
      </Fade>
      <Fade on={beat >= 0 && beat < 4} delay={dl(0, 1.3)}>
        <Draw on={true} d="M 330 86 C 430 82, 650 82, 750 86" stroke={RED} sw={2.2} dur={0.6} />
      </Fade>
      <Fade on={beat >= 0 && beat < 4} delay={dl(0, 2.1)}>
        <T x={540} y={110} size={14} fill={INK} script={false}>
          {t(
            "alga cell divides → 2 daughters — growth only? reproduction only? both? neither?",
            "alga cell divide hoke → 2 daughters — growth only? reproduction only? both? neither?"
          )}
        </T>
      </Fade>
      {OPTIONS.map(([x, w, label], i) => (
        <Fade key={label} on={beat >= 0 && beat < 4} delay={dl(0, 3 + i * 0.5)}>
          <Chip x={x} y={136} w={w} h={28} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={12} script={false}>
            {label}
          </Chip>
        </Fade>
      ))}

      {/* beat 1 — the diagram */}
      <Fade on={beat >= 1 && beat < 4} delay={dl(1, 0.2)}>
        <Draw on={true} d="M 164 250 a 36 36 0 1 0 72 0 a 36 36 0 1 0 -72 0" stroke={GREEN} sw={2.2} dur={0.7} />
      </Fade>
      <Fade on={beat >= 1 && beat < 4} delay={dl(1, 0.8)}>
        <T x={200} y={253} size={10} fill={INK} script={false}>
          {t("alga cell", "alga cell")}
        </T>
      </Fade>
      <Fade on={beat >= 1 && beat < 4} delay={dl(1, 1.4)}>
        <Draw on={true} d={arrowD(236, 250, 300, 250)} stroke={AMBER_DARK} sw={2.2} dur={0.5} />
      </Fade>
      <Fade on={beat >= 1 && beat < 4} delay={dl(1, 2)}>
        <Draw on={true} d="M 326 214 a 24 24 0 1 0 48 0 a 24 24 0 1 0 -48 0" stroke={GREEN} sw={2} dur={0.5} />
      </Fade>
      <Fade on={beat >= 1 && beat < 4} delay={dl(1, 2.4)}>
        <Draw on={true} d="M 326 286 a 24 24 0 1 0 48 0 a 24 24 0 1 0 -48 0" stroke={GREEN} sw={2} dur={0.5} />
      </Fade>
      <Fade on={beat >= 1 && beat < 4} delay={dl(1, 3.1)}>
        <Chip x={400} y={228} w={200} h={44} fill={CREAM} stroke={AMBER_DARK} textFill={AMBER_DARK} size={13} script={false}>
          {t("growth AND reproduction", "growth AND reproduction")}
        </Chip>
      </Fade>

      {/* beat 2 — the answer */}
      <Fade on={beat >= 2 && beat < 4} delay={dl(2, 0.3)}>
        <Chip x={340} y={322} w={400} h={32} fill={INK} textFill={CREAM} size={15} script={false}>
          {t("ANSWER: option 3 — BOTH (synonymous)", "ANSWER: option 3 — BOTH (synonymous)")}
        </Chip>
      </Fade>
      <Fade on={beat >= 2 && beat < 4} delay={dl(2, 1.2)}>
        <Draw on={true} d="M 598 168 L 666 168" stroke={GREEN} sw={2} dur={0.4} />
      </Fade>

      {/* beat 3 — the speed-trap */}
      <Fade on={beat >= 3 && beat < 4} delay={dl(3, 0.3)}>
        <Draw on={true} d={crossD(314, 136, 110, 28)} stroke={RED} sw={2.2} dur={0.5} />
      </Fade>
      <Fade on={beat >= 3 && beat < 4} delay={dl(3, 0.9)}>
        <Draw on={true} d={crossD(438, 136, 146, 28)} stroke={RED} sw={2.2} dur={0.5} />
      </Fade>
      <Fade on={beat >= 3 && beat < 4} delay={dl(3, 1.6)}>
        <T x={540} y={380} size={14} fill={RED} script>
          {t(
            "speed-trap: options 1/2 force it into ONE box — don't split what's synonymous",
            "speed-trap: options 1/2 ek hi box mein force karte hain — synonymous ko split mat karo"
          )}
        </T>
      </Fade>

      {/* beat 4 — Example 4: title + the four statements */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("Example 4 — Count the correct statements (NEET)", "Example 4 — Sahi statements count karo (NEET)")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1.3)} d="M 330 86 C 430 82, 650 82, 750 86" stroke={RED} sw={2.2} dur={0.6} />
      {STATEMENTS.map(([y, e2, h2], i) => (
        <Fade key={y} on={beat >= 4} delay={dl(4, 2.1 + i * 0.7)}>
          <T x={80} y={y} size={15} fill={INK} script={false} anchor="start">
            {t(e2, h2)}
          </T>
        </Fade>
      ))}

      {/* beat 5 — statement A is FALSE */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Draw on={true} d={crossD(875, 108, 18, 14)} stroke={RED} sw={2} dur={0.4} />
        <Chip x={900} y={107} w={100} h={26} fill={CREAM} stroke={RED} textFill={RED} size={12} script={false}>
          FALSE ✗
        </Chip>
      </Fade>

      {/* beat 6 — statements B, C, D are TRUE */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Draw on={true} d="M 877 143 L 883 149 L 895 135" stroke={GREEN} sw={2.2} dur={0.35} />
        <Chip x={900} y={139} w={100} h={26} fill={CREAM} stroke={GREEN} textFill={GREEN} size={12} script={false}>
          TRUE ✓
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.9)}>
        <Draw on={true} d="M 877 175 L 883 181 L 895 167" stroke={GREEN} sw={2.2} dur={0.35} />
        <Chip x={900} y={171} w={100} h={26} fill={CREAM} stroke={GREEN} textFill={GREEN} size={12} script={false}>
          TRUE ✓
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.5)}>
        <Draw on={true} d="M 877 207 L 883 213 L 895 199" stroke={GREEN} sw={2.2} dur={0.35} />
        <Chip x={900} y={203} w={100} h={26} fill={CREAM} stroke={GREEN} textFill={GREEN} size={12} script={false}>
          TRUE ✓
        </Chip>
      </Fade>

      {/* beat 7 — the verdict */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Chip x={300} y={260} w={480} h={36} fill={INK} textFill={CREAM} size={16} script={false}>
          {t("ANSWER: THREE correct — B, C, D", "ANSWER: THREE correct — B, C, D")}
        </Chip>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.4)}>
        <T x={540} y={320} size={14} fill={RED} script>
          {t(
            "A = the most-tested misconception in this whole subtopic",
            "A = is poore subtopic ki sabse zyada test hone wali misconception"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
