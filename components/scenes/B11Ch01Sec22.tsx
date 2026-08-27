/**
 * B11 Ch01 · Section 22 — "Worked examples: arrange the ranks & the
 * containment A-R"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Two independent examples. Example 1 (beats 0-3) occupies the whole
 * board, then vanishes (on={beat<4}) so Example 2 (beats 4-7) can reuse
 * the same coordinates without ghost-stacking.
 *
 * Beats (en [0, 15.22, 32.68, 40.13, 57.35, 68.85, 91.77, 105.26]):
 *  0 Example 1 title + the scrambled categories given
 *  1 sorted order: Species → Genus → Family → Order → Class → Phylum → Kingdom
 *  2 classic slip: family & order swapped
 *  3 the trend: toward kingdom, characters decrease, group size increases
 *  4 Example 2 title + Assertion & Reason (reusing the freed slot)
 *  5 A TRUE, R TRUE
 *  6 does R explain A? YES → option 1; 4 options listed
 *  7 the trap: option 3 (R as "mere restatement") crossed out
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, crossD, INK, MUTED, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

const SCRAMBLED: [number, number, string][] = [
  [300, 55, "Class"],
  [365, 67, "Species"],
  [442, 61, "Family"],
  [513, 67, "Kingdom"],
  [590, 55, "Genus"],
  [655, 55, "Order"],
  [720, 61, "Phylum"],
];

export default function B11Ch01Sec22({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — Example 1 title + scrambled categories */}
      <Fade on={beat >= 0 && beat < 4} delay={dl(0, 0.2)}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("Example 1 — arrange the categories (CBSE)", "Example 1 — categories arrange karo (CBSE)")}
        </T>
      </Fade>
      <Fade on={beat >= 0 && beat < 4} delay={dl(0, 1.8)}>
        <Draw on={true} d="M 330 86 C 430 82, 650 82, 750 86" stroke={RED} sw={2.2} dur={0.6} />
      </Fade>
      {SCRAMBLED.map(([x, w, label], i) => (
        <Fade key={label} on={beat >= 0 && beat < 4} delay={dl(0, 2.6 + i * 0.3)}>
          <Chip x={x} y={110} w={w} h={28} fill={CREAM} stroke={MUTED} textFill={INK} size={12} script={false}>
            {label}
          </Chip>
        </Fade>
      ))}

      {/* beat 1 — the sorted order */}
      <Fade on={beat >= 1 && beat < 4} delay={dl(1, 0.3)}>
        <T x={540} y={160} size={14} fill={GREEN} weight={700}>
          Species → Genus → Family → Order → Class → Phylum → Kingdom
        </T>
      </Fade>

      {/* beat 2 — the classic slip */}
      <Fade on={beat >= 2 && beat < 4} delay={dl(2, 0.3)}>
        <T x={540} y={195} size={13} fill={RED} script>
          {t("classic slip: family & order the WRONG way round", "classic slip: family aur order ULTA rakh dena")}
        </T>
      </Fade>

      {/* beat 3 — the trend */}
      <Fade on={beat >= 3 && beat < 4} delay={dl(3, 0.3)}>
        <T x={540} y={230} size={13} fill={INK} script={false}>
          {t(
            "toward KINGDOM: common characters DECREASE, group size INCREASES",
            "KINGDOM ki taraf: common characters DECREASE, group size INCREASES"
          )}
        </T>
      </Fade>

      {/* beat 4 — Example 2: the assertion-reason */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={64} size={20} fill={RED} script>
          {t("Example 2 — Assertion-Reason (HOTS)", "Example 2 — Assertion-Reason (HOTS)")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1.3)} d="M 330 86 C 430 82, 650 82, 750 86" stroke={RED} sw={2} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <T x={60} y={104} size={14} fill={INK} script={false} anchor="start">
          {t(
            "A: two insects in the same ORDER are certainly in the same CLASS",
            "A: same ORDER ke do insects pakke taur par same CLASS mein honge"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.8)}>
        <T x={60} y={132} size={14} fill={INK} script={false} anchor="start">
          {t(
            "R: a class is a higher category that CONTAINS its orders",
            "R: class ek higher category hai jo apne orders ko CONTAIN karti hai"
          )}
        </T>
      </Fade>

      {/* beat 5 — test each statement */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Draw on={true} d="M 902 96 L 908 102 L 920 88" stroke={GREEN} sw={2.2} dur={0.4} />
        <Chip x={928} y={88} w={82} h={24} fill={CREAM} stroke={GREEN} textFill={GREEN} size={12} script={false}>
          TRUE ✓
        </Chip>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        <Draw on={true} d="M 902 124 L 908 130 L 920 116" stroke={GREEN} sw={2.2} dur={0.4} />
        <Chip x={928} y={116} w={82} h={24} fill={CREAM} stroke={GREEN} textFill={GREEN} size={12} script={false}>
          TRUE ✓
        </Chip>
      </Fade>

      {/* beat 6 — does R explain A? */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={170} size={15} fill={GREEN} script>
          {t("does R explain A? — YES", "kya R hi A ki explanation hai? — HAAN")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.1)}>
        <T x={100} y={194} size={12} fill={GREEN} weight={700} anchor="start">
          1) Both true, R explains A ✓
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.7)}>
        <Draw on={true} d="M 98 197 L 336 197" stroke={GREEN} sw={2} dur={0.4} />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.2)}>
        <T x={100} y={216} size={12} fill={INK} script={false} anchor="start">
          2) Both true, R does NOT explain A
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.6)}>
        <T x={100} y={238} size={12} fill={INK} script={false} anchor="start">
          3) Both true, but R is a mere restatement, not an explanation
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 3)}>
        <T x={100} y={260} size={12} fill={INK} script={false} anchor="start">
          4) A false, R true
        </T>
      </Fade>

      {/* beat 7 — the trap: option 3 */}
      <Draw on={beat >= 7} delay={dl(7, 0.3)} d={crossD(96, 228, 380, 20)} stroke={RED} sw={2.2} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={540} y={290} size={13} fill={RED} script>
          {t(
            "R is the MECHANISM, not just a restatement — ask: does it EXPLAIN?",
            "R hi MECHANISM hai, sirf restatement nahi — pucho: kya ye EXPLAIN karta hai?"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
