/**
 * C11 Ch02 · Section 6 — "Rutherford's gold foil: reading the ricochets"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (en [0, 8.87, 17.49, 25.17, 40.87, 50.94, 69.97, 83.37]):
 *  0 anchor: "observe the evidence, follow the logic"
 *  1 explain the move: build the stage — α source + gold foil
 *  2 represent: fire the three trajectories (straight / slight bend / bounce)
 *  3 most pass straight through ⇒ atom is mostly empty space
 *  4 large-angle bends ⇒ a concentrated lump of + charge
 *  5 guardrail (high): ~1 in 20000 bounces back ⇒ tiny dense + nucleus
 *  6 the scale: nucleus ~10⁻¹⁵–10⁻¹³cm vs atom ~10⁻⁸cm
 *  7 guardrail: cricket ball at the pitch = nucleus; atom's edge = km away
 *
 * Layout plan:
 *  title (always)                 | T mid | x540 y62 size20 script red
 *  b0 | "observe…follow logic"    | T mid | x540 y100 size15 script [dims@b1]
 *  b1 | "α source" lbl            | T sta | x110 y170
 *  b1 | gold foil                  | Draw  | x520..528 y170..350
 *  b1 | "gold foil" lbl            | T mid | x524 y368
 *  b2 | straight path (GREEN)      | Draw  | y260  x145..910
 *  b2 | straight dot + label       | Fade/T| (910,260) / x700 y250
 *  b2 | slight-deflection (AMBER)  | Draw  | (145,205)→(524,215)→(910,160)
 *  b2 | deflection dot + label     | Fade/T| (910,160) / x750 y145
 *  b2 | bounced-back (RED)         | Draw  | (145,315)→(524,308)→(200,220)
 *  b2 | bounce dot + label         | Fade/T| (524,308) / x210 y205
 *  b3 | "mostly empty space" chip  | Chip  | x290..790 y396..428 (GREEN)
 *  b4 | "concentrated + lump" chip | Chip  | x250..810 y438..470 (AMBER)
 *  b5 | guardrail chip (RED)       | Chip  | x230..840 y480..514
 *  b6 | scale line                 | T mid | x540 y540 size13 script
 *  b7 | cricket-ball analogy       | T mid | x540 y574 size14 script green
 */

import React from "react";
import { Circle } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch02Sec6({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={62} size={20} fill={RED} script>
          {t("Rutherford's gold foil: reading the ricochets", "Rutherford ka gold foil: ricochets padhna")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} dim={beat >= 1} delay={dl(0, 0.3)}>
        <T x={540} y={100} size={15} fill={RED} script>
          {t("observe the evidence, follow the logic", "evidence dekho, logic follow karo")}
        </T>
      </Fade>

      {/* beat 1 — the stage: α source + gold foil */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={110} y={170} size={12} fill={INK} anchor="start">
          {t("α source", "α source")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.6)} d="M 520 170 h 8 v 180 h -8 z" stroke={AMBER_DARK} sw={2} dur={0.8} fill={CREAM} />
      <Fade on={beat >= 1} delay={dl(1, 1.6)}>
        <T x={524} y={368} size={12} fill={AMBER_DARK}>
          {t("gold foil", "gold foil")}
        </T>
      </Fade>

      {/* beat 2 — fire the three trajectories */}
      <Draw on={beat >= 2} delay={dl(2, 0.2)} d="M 145 260 L 910 260" stroke={GREEN} sw={2.2} dur={0.8} />
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <Circle cx={910} cy={260} r={4} fill={GREEN} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.3)}>
        <T x={700} y={250} size={12} fill={GREEN}>
          {t("straight through", "seedhe nikal jaate hain")}
        </T>
      </Fade>

      <Draw on={beat >= 2} delay={dl(2, 1.6)} d="M 145 205 L 524 215 L 910 160" stroke={AMBER_DARK} sw={2} dur={0.7} />
      <Fade on={beat >= 2} delay={dl(2, 2.1)}>
        <Circle cx={910} cy={160} r={4} fill={AMBER_DARK} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.4)}>
        <T x={750} y={145} size={12} fill={AMBER_DARK}>
          {t("slight deflection", "thoda mudte hain")}
        </T>
      </Fade>

      <Draw on={beat >= 2} delay={dl(2, 2.7)} d="M 145 315 L 524 308 L 200 220" stroke={RED} sw={2.2} dur={0.8} />
      <Fade on={beat >= 2} delay={dl(2, 3.3)}>
        <Circle cx={524} cy={308} r={4} fill={RED} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3.6)}>
        <T x={210} y={205} size={12} fill={RED} anchor="start">
          {t("bounced back!", "wapas bounce!")}
        </T>
      </Fade>

      {/* beat 3 — most pass straight through: mostly empty space */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <Chip x={290} y={396} w={500} h={32} fill={CREAM} stroke={GREEN} textFill={GREEN} size={13} script={false}>
          {t("most pass straight through ⇒ mostly empty space", "zyaadatar seedhe nikalte hain ⇒ mostly khaali space")}
        </Chip>
      </Fade>

      {/* beat 4 — large-angle bends: a concentrated + lump */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <Chip x={250} y={438} w={580} h={32} fill={CREAM} stroke={AMBER_DARK} textFill={AMBER_DARK} size={13} script={false}>
          {t("large-angle bends ⇒ a concentrated lump of + charge", "bade angle bends ⇒ concentrated + charge ka lump")}
        </Chip>
      </Fade>

      {/* beat 5 — guardrail (high): the nucleus */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Chip x={230} y={480} w={610} h={34} fill={CREAM} stroke={RED} textFill={RED} size={13} script={false}>
          {t(
            "~1 in 20000 bounces back ⇒ tiny, dense, massive, + nucleus",
            "~1 in 20000 wapas bounce ⇒ tiny, dense, massive, + nucleus"
          )}
        </Chip>
      </Fade>

      {/* beat 6 — the scale */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={540} size={13} fill={MUTED} script>
          {t(
            "nucleus ~10⁻¹⁵–10⁻¹³ cm  vs  atom ~10⁻⁸ cm — a 5-order-of-magnitude gulf",
            "nucleus ~10⁻¹⁵–10⁻¹³ cm  vs  atom ~10⁻⁸ cm — 5-order ka gulf"
          )}
        </T>
      </Fade>

      {/* beat 7 — guardrail: the cricket-ball analogy */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={574} size={14} fill={GREEN} script>
          {t(
            "cricket ball at the pitch = nucleus; atom's edge = kilometres away",
            "cricket ball pitch par = nucleus; atom ka kinaara = kilometres door"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
