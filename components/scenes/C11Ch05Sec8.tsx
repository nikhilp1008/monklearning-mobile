/**
 * C11 Chemistry Ch05 · Section 8 — "Isothermal reversible expansion and the
 * path-dependence of work" (worked examples)
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (board_reveal_at, en [0,1,2,3,4,5,6,7,8]):
 *  0 Example 3 heading (JEE Main) + underline
 *  1 given data
 *  2 red note: isothermal + ideal gas ⇒ ΔU=0, ΔH=0, q=−w
 *  3 formula: w ≈ −6.92 kJ
 *  4 result chip: q = +6.92 kJ, ΔU=ΔH=0 (green)
 *  5 divider + Example 4 heading (JEE Advanced) + underline
 *  6 formula: w(rev) ≈ −3458 J
 *  7 formula: w(irr) ≈ −1871 J
 *  8 red note: ΔU=0 both routes; reversible extracts more work
 *
 * Layout plan (centered x540, stacked):
 *  b0 | heading1 (18, w800)           | T mid  | y86..106  (bl100)
 *  b0 | underline1                    | Draw   | y110 x340..740
 *  b1 | given1 (14)                   | T mid  | y131..146 (bl142)
 *  b2 | red note1 chip (13)           | Chip   | x280..800 y158..192
 *  b3 | formula1 chip (17)            | Chip   | x280..800 y205..247
 *  b4 | result1 chip (16, green)      | Chip   | x340..740 y260..297
 *  b5 | divider                       | Draw   | y315 x150..930
 *  b5 | heading2 (18, w800)           | T mid  | y331..351 (bl345)
 *  b5 | underline2                    | Draw   | y355 x300..780
 *  b6 | formula2 chip (17)            | Chip   | x350..730 y372..412
 *  b7 | formula3 chip (17)            | Chip   | x350..730 y425..465
 *  b8 | red note2 chip (14)           | Chip   | x260..880 y480..520
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

export default function C11Ch05Sec8({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={26} fill={RED} script>
          {t("isothermal reversible work", "isothermal reversible work")}
        </T>
      </Fade>

      {/* beat 0 — Example 3 heading */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={100} size={18} weight={800} fill={INK}>
          {t("Example 3 (JEE Main): isothermal reversible", "Example 3 (JEE Main): isothermal reversible")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.5)} d="M 340 110 C 410 107, 670 107, 740 110" stroke={AMBER_DARK} sw={2} dur={0.5} />

      {/* beat 1 — given */}
      <Fade on={beat >= 1} delay={dl(1, 0.1)}>
        <T x={540} y={142} size={14} fill={INK}>
          {t(
            "2 mol ideal gas, 300 K, expands isothermally reversibly 5.0 L → 20.0 L",
            "2 mol ideal gas, 300 K par, isothermally reversibly 5.0 L se 20.0 L expand"
          )}
        </T>
      </Fade>

      {/* beat 2 — red note */}
      <Fade on={beat >= 2} delay={dl(2, 0.1)}>
        <Chip x={280} y={158} w={520} h={34} fill={CREAM} stroke={RED} textFill={RED} size={13} script={false}>
          {t("isothermal + ideal gas: ΔU = 0, ΔH = 0, so q = −w", "isothermal + ideal gas: ΔU = 0, ΔH = 0, isliye q = −w")}
        </Chip>
      </Fade>

      {/* beat 3 — work formula */}
      <Fade on={beat >= 3} delay={dl(3, 0.15)}>
        <Chip x={280} y={205} w={520} h={42} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={17} script={false}>
          w = −nRT ln(V2/V1) = −(2)(8.314)(300)ln4 ≈ −6.92 kJ
        </Chip>
      </Fade>

      {/* beat 4 — result */}
      <Fade on={beat >= 4} delay={dl(4, 0.15)}>
        <Chip x={340} y={260} w={400} h={37} fill={CREAM} stroke={GREEN} textFill={GREEN} size={16} script={false}>
          q = +6.92 kJ absorbed; ΔU = ΔH = 0
        </Chip>
      </Fade>

      {/* beat 5 — Example 4 heading */}
      <Draw on={beat >= 5} delay={dl(5, 0)} d="M 150 315 L 930 315" stroke={AMBER_DARK} sw={1.4} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={345} size={18} weight={800} fill={INK}>
          {t("Example 4 (JEE Advanced): two routes, same states", "Example 4 (JEE Advanced): do routes, same states")}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 0.8)} d="M 300 355 C 370 352, 710 352, 780 355" stroke={AMBER_DARK} sw={2} dur={0.5} />

      {/* beat 6 — reversible work */}
      <Fade on={beat >= 6} delay={dl(6, 0.15)}>
        <Chip x={350} y={372} w={380} h={40} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={17} script={false}>
          w(rev) = −(1)(8.314)(300)ln4 ≈ −3458 J
        </Chip>
      </Fade>

      {/* beat 7 — irreversible work */}
      <Fade on={beat >= 7} delay={dl(7, 0.15)}>
        <Chip x={350} y={425} w={380} h={40} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={17} script={false}>
          w(irr) = −Pext·ΔV ≈ −1871 J
        </Chip>
      </Fade>

      {/* beat 8 — red note */}
      <Fade on={beat >= 8} delay={dl(8, 0.15)}>
        <Chip x={260} y={480} w={620} h={40} fill={CREAM} stroke={RED} textFill={RED} size={14} script={false}>
          {t(
            "ΔU = 0 by both routes (state function); reversible extracts more work",
            "ΔU = 0 dono routes mein (state function); reversible zyada work deta hai"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
