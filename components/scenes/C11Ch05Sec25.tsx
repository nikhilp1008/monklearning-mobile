/**
 * C11 Chemistry Ch05 · Section 25 — "Pitfalls and pro-tips: units, the
 * surroundings sign, and rate" (closes subtopic 3)
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (board_reveal_at, en [0,6.83,20.65,37.38,49.07,62.81,76.37,80.13]):
 *  0 heading: Spontaneity traps + underline
 *  1 trap 1: kJ/J unit clash
 *  2 trap 2: surroundings entropy sign
 *  3 trap 3: spontaneity ≠ rate
 *  4 example (muted, not a trap): diamond → graphite
 *  5 trap 4: third law for pure crystals only
 *  6 divider + pro-tip heading (green) + underline
 *  7 pro-tip chip: crossover jump + K sanity check
 *
 * Layout plan (centered x540, 5 rows x780 w, x130..910, y=118+44i):
 *  b0 | heading (20, red, w800)       | T mid | y83..106 (bl100)
 *  b0 | underline                     | Draw  | y112 x400..680
 *  b1-5 | 5 rows (14)                 | Chip  | y118/162/206/250/294
 *  b6 | divider                       | Draw  | y352 x150..930
 *  b6 | pro-tip heading (19, green)   | T mid | y366..385 (bl380)
 *  b6 | underline2                    | Draw  | y390 x310..770
 *  b7 | pro-tip chip (14, green)      | Chip  | x130..910 y405..450
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
  MUTED,
  RED,
  GREEN,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

const ROWS = [
  { en: "kJ/J clash: ΔH is kJ, ΔS is J — convert ONE before using ΔG (the #1 error)",
    hi: "kJ/J clash: ΔH kJ mein hai, ΔS J mein — ΔG use karne se pehle EK convert karo",
    warn: true },
  { en: "ΔSsurr = −ΔHsys/T — exothermic gives POSITIVE ΔSsurr",
    hi: "ΔSsurr = −ΔHsys/T — exothermic se POSITIVE ΔSsurr milta hai",
    warn: true },
  { en: "spontaneity ≠ rate: ΔG<0 says a reaction CAN happen, not that it's fast",
    hi: "spontaneity ≠ rate: ΔG<0 kehta hai reaction CAN ho sakta hai, fast nahi",
    warn: true },
  { en: "example: diamond → graphite has ΔG<0, yet takes geological ages",
    hi: "example: diamond → graphite mein ΔG<0, phir bhi geological ages lagte hain",
    warn: false },
  { en: "third law is for PURE crystals only — not solutions or glasses (residual entropy)",
    hi: "third law sirf PURE crystals ke liye — solutions ya glasses ke liye nahi (residual entropy)",
    warn: true },
];

export default function C11Ch05Sec25({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={26} fill={RED} script>
          {t("pitfalls & pro-tips: units, sign, rate", "pitfalls & pro-tips: units, sign, rate")}
        </T>
      </Fade>

      {/* beat 0 — heading */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={100} size={20} weight={800} fill={RED}>
          {t("Spontaneity traps", "Spontaneity traps")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.5)} d="M 400 112 C 460 109, 620 109, 680 112" stroke={RED} sw={2} dur={0.5} />

      {/* beats 1-5 — trap rows */}
      {ROWS.map((row, i) => (
        <Fade key={i} on={beat >= 1 + i} delay={dl(1 + i, 0.1)}>
          <Chip
            x={130}
            y={118 + i * 44}
            w={780}
            h={34}
            fill={CREAM}
            stroke={row.warn ? RED : MUTED}
            textFill={row.warn ? RED : MUTED}
            size={14}
            script={false}
          >
            {t(row.en, row.hi)}
          </Chip>
        </Fade>
      ))}

      {/* beat 6 — pro-tip heading */}
      <Draw on={beat >= 6} delay={dl(6, 0)} d="M 150 352 L 930 352" stroke={GREEN} sw={1.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={380} size={19} weight={800} fill={GREEN}>
          {t("Pro-tip: crossover + sanity check", "Pro-tip: crossover + sanity check")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 0.8)} d="M 310 390 C 380 387, 700 387, 770 390" stroke={GREEN} sw={2} dur={0.5} />

      {/* beat 7 — pro-tip content */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <Chip x={130} y={405} w={780} h={45} fill={CREAM} stroke={GREEN} textFill={GREEN} size={14} script={false}>
          {t(
            "jump to T = ΔH/ΔS for above/below-T questions; negative ΔG° ⇒ K > 1",
            "above/below-T questions ke liye T=ΔH/ΔS par jump karo; negative ΔG° ⇒ K > 1"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
