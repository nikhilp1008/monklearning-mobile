/**
 * C11 Ch02 · Section 12 — "Worked example (JEE Main): combine Millikan and Thomson"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md. `section_type: worked_examples`.
 *
 * Beats (en [0, 8.02, 17.07, 30.46, 41.81, 51.29, 60.5, 68.52]):
 *  0 anchor: "two concepts stitched together — see the structure"
 *  1 given: 4 droplet charges (4.8, 6.4, 8.0, 3.2 ×10⁻¹⁹ C)
 *  2 step 1: divide each by 1.6×10⁻¹⁹ ⇒ 3e, 4e, 5e, 2e
 *  3 formula (high): e = 1.6×10⁻¹⁹ C — the largest common unit
 *  4 explain: largest common unit is the elementary charge
 *  5 step 2: bring in Thomson's e/m = 1.76×10¹¹ C kg⁻¹
 *  6 land (high, GREEN): mₑ = e/(e/m) = 9.1×10⁻³¹ kg
 *  7 guardrail (high): neither experiment alone gives the mass
 *
 * Layout plan (4 columns x190/440/690/940):
 *  title (always)              | T mid | x540 y58 size16 script red
 *  b0 | anchor caption          | T mid | x540 y88            [dims@b1]
 *  b1 | 4 droplet chips         | Chip  | y110..140  x100/350/600/850
 *  b2 | 4 ÷ arrows              | Draw  | y145..155
 *  b2 | 4 result chips          | Chip  | y160..188
 *  b3 | e=1.6e-19 box (GREEN)   | Chip  | x400..680 y210..248
 *  b4 | "largest common unit"   | T mid | x540 y278
 *  b5 | Thomson ratio chip      | Chip  | x330..710 y300..332
 *  b6 | mₑ formula (GREEN)      | Chip  | x310..770 y346..392
 *  b7 | guardrail chip (RED)    | Chip  | x260..820 y410..444
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
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

const DROPLETS: [number, string][] = [
  [100, "4.8×10⁻¹⁹ C"],
  [350, "6.4×10⁻¹⁹ C"],
  [600, "8.0×10⁻¹⁹ C"],
  [850, "3.2×10⁻¹⁹ C"],
];

const RESULTS: [number, string][] = [
  [100, "= 3e"],
  [350, "= 4e"],
  [600, "= 5e"],
  [850, "= 2e"],
];

export default function C11Ch02Sec12({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={58} size={16} fill={RED} script>
          {t("[JEE Main] elementary charge, then electron mass", "[JEE Main] elementary charge, phir electron mass")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} dim={beat >= 1} delay={dl(0, 0.3)}>
        <T x={540} y={88} size={13} fill={RED} script>
          {t("two concepts stitched together — see the structure", "do concepts jode gaye — structure dekho")}
        </T>
      </Fade>

      {/* beat 1 — given: 4 droplet charges */}
      {DROPLETS.map(([x, v], i) => (
        <Fade key={`d${x}`} on={beat >= 1} delay={dl(1, 0.2 + i * 0.3)}>
          <Chip x={x} y={110} w={180} h={30} fill={CREAM} stroke={AMBER_DARK} textFill={AMBER_DARK} size={12} script={false}>
            {v}
          </Chip>
        </Fade>
      ))}

      {/* beat 2 — divide each by 1.6×10⁻¹⁹ */}
      {DROPLETS.map(([x], i) => (
        <Draw
          key={`a${x}`}
          on={beat >= 2}
          delay={dl(2, 0.2 + i * 0.2)}
          d={arrowD(x + 90, 145, x + 90, 157)}
          stroke={AMBER_DARK}
          sw={1.8}
          dur={0.3}
        />
      ))}
      {RESULTS.map(([x, v], i) => (
        <Fade key={`r${x}`} on={beat >= 2} delay={dl(2, 1 + i * 0.2)}>
          <Chip x={x} y={160} w={180} h={28} fill={CREAM} stroke={AMBER_DARK} textFill={AMBER_DARK} size={14} script={false}>
            {v}
          </Chip>
        </Fade>
      ))}

      {/* beat 3 — land: e = 1.6×10⁻¹⁹ C (high emphasis) */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <Chip x={400} y={210} w={280} h={38} fill={CREAM} stroke={GREEN} textFill={GREEN} size={18} script={false}>
          e = 1.6 × 10⁻¹⁹ C
        </Chip>
      </Fade>

      {/* beat 4 — explain: largest common unit */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={278} size={13} fill={AMBER_DARK} script>
          {t("largest common unit = the elementary charge", "largest common unit = elementary charge")}
        </T>
      </Fade>

      {/* beat 5 — step 2: bring in Thomson's ratio */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Chip x={330} y={300} w={380} h={32} fill={CREAM} stroke={AMBER_DARK} textFill={AMBER_DARK} size={15} script={false}>
          e/m = 1.76 × 10¹¹ C kg⁻¹
        </Chip>
      </Fade>

      {/* beat 6 — land (high, GREEN): the electron's mass */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Chip x={310} y={346} w={460} h={46} fill={GREEN} textFill="#fff" size={17} script={false}>
          mₑ = e/(e/m) = 9.1 × 10⁻³¹ kg
        </Chip>
      </Fade>

      {/* beat 7 — guardrail (high): the whole point */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Chip x={260} y={410} w={560} h={34} fill={CREAM} stroke={RED} textFill={RED} size={13} script={false}>
          {t(
            "neither experiment alone gives the mass — that's the whole point",
            "koi bhi ek experiment akela mass nahi deta — yahi poora point hai"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
