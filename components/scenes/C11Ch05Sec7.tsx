/**
 * C11 Chemistry Ch05 · Section 7 — "Applying the first law and the delta-H
 * bridge" (worked examples)
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (board_reveal_at, en/hi both [0,1,2,3,4,5,6,7]):
 *  0 Example 1 heading (CBSE: find ΔU) + underline
 *  1 given data
 *  2 sign setup: q=+250 J, w=-80 J
 *  3 answer chip: ΔU = +170 J (green)
 *  4 divider + Example 2 heading (NEET: ΔH from ΔU) + underline
 *  5 given data
 *  6 formula/substitution chip: ΔH ≈ 14.5 kJ
 *  7 red trap note
 *
 * Layout plan (both examples centered x540, stacked):
 *  b0 | heading1 (19, ink, w800)      | T mid  | x?..?      y85..106 (bl100)
 *  b0 | underline1                    | Draw   | y110 x380..700
 *  b1 | given1 (15, ink)              | T mid  | x?..?      y133..150 (bl145)
 *  b2 | setup1 (16, ink, w700)        | T mid  | x?..?      y167..185 (bl180)
 *  b3 | answer1 chip (20, green)      | Chip   | x300..780  y200..245
 *  b4 | divider                       | Draw   | y270 x150..930
 *  b4 | heading2 (19, ink, w800)      | T mid  | x?..?      y285..306 (bl300)
 *  b4 | underline2                    | Draw   | y310 x350..730
 *  b5 | given2 (15, ink)              | T mid  | x?..?      y333..350 (bl345)
 *  b6 | formula2 chip (18)            | Chip   | x260..820  y365..415
 *  b7 | trap chip (14, red)           | Chip   | x200..880  y430..475
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
  INK,
  GREEN,
  RED,
  CREAM,
  AMBER_DARK,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch05Sec7({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={26} fill={RED} script>
          {t("worked examples: first law + ΔH bridge", "worked examples: first law + ΔH bridge")}
        </T>
      </Fade>

      {/* beat 0 — Example 1 heading */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={100} size={19} weight={800} fill={INK}>
          {t("Example 1 (CBSE): find ΔU", "Example 1 (CBSE): ΔU nikaalo")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.5)} d="M 380 110 C 440 107, 640 107, 700 110" stroke={AMBER_DARK} sw={2} dur={0.5} />

      {/* beat 1 — given */}
      <Fade on={beat >= 1} delay={dl(1, 0.1)}>
        <T x={540} y={145} size={15} fill={INK}>
          {t(
            "flask absorbs 250 J heat; expanding, does 80 J work on surroundings",
            "flask 250 J heat leta hai; expand karte hue 80 J work karta hai"
          )}
        </T>
      </Fade>

      {/* beat 2 — sign setup */}
      <Fade on={beat >= 2} delay={dl(2, 0.1)}>
        <T x={540} y={180} size={16} weight={700} fill={INK}>
          {t("q = +250 J   ·   w = −80 J (work BY system)", "q = +250 J   ·   w = −80 J (system se work)")}
        </T>
      </Fade>

      {/* beat 3 — answer */}
      <Fade on={beat >= 3} delay={dl(3, 0.15)}>
        <Chip x={300} y={200} w={480} h={45} fill={CREAM} stroke={GREEN} textFill={GREEN} size={20} script={false}>
          ΔU = q + w = 250 + (−80) = +170 J
        </Chip>
      </Fade>

      {/* beat 4 — Example 2 heading */}
      <Draw on={beat >= 4} delay={dl(4, 0)} d="M 150 270 L 930 270" stroke={AMBER_DARK} sw={1.4} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={300} size={19} weight={800} fill={INK}>
          {t("Example 2 (NEET): ΔH from ΔU", "Example 2 (NEET): ΔU se ΔH")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 0.8)} d="M 350 310 C 420 307, 660 307, 730 310" stroke={AMBER_DARK} sw={2} dur={0.5} />

      {/* beat 5 — given */}
      <Fade on={beat >= 5} delay={dl(5, 0.1)}>
        <T x={540} y={345} size={15} fill={INK}>
          {t(
            "1 mol → 2 mol gas at 300 K, ΔU = +12.0 kJ, Δngas = +1",
            "1 mol → 2 mol gas, 300 K par, ΔU = +12.0 kJ, Δngas = +1"
          )}
        </T>
      </Fade>

      {/* beat 6 — formula/substitution */}
      <Fade on={beat >= 6} delay={dl(6, 0.15)}>
        <Chip x={260} y={365} w={560} h={50} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={18} script={false}>
          ΔH = ΔU + Δngas·RT = 12000 + (1)(8.314)(300) ≈ 14.5 kJ
        </Chip>
      </Fade>

      {/* beat 7 — red trap */}
      <Fade on={beat >= 7} delay={dl(7, 0.15)}>
        <Chip x={200} y={430} w={680} h={45} fill={CREAM} stroke={RED} textFill={RED} size={14} script={false}>
          {t(
            "trap: use R = 8.314 (J), T in kelvin; Δngas = +1 ⇒ ΔH > ΔU",
            "trap: R = 8.314 (J) lo, T kelvin mein; Δngas = +1 ⇒ ΔH > ΔU"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
