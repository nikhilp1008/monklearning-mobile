/**
 * Ch12 · Section 16 — Worked example [JEE Main]: total and partial pressure of a mixture
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 1, 2, 3, 4, 18.85, 36.34]):
 *  0 title + problem · 1 THE PICTURE: one vessel, O2 + He dots overlaid, each
 *    fills the whole volume · 2 Dalton's law statement · 3 convert to moles
 *    · 4 total pressure ≈1.56×10⁵ Pa · 5 He partial pressure ≈1.25×10⁵ Pa · 6
 *    lesson: pressures add, masses don't, He dominates despite being lighter
 *
 * Layout plan (Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | title (script 23, red)          | T mid | x270..810 y37..76 (bl64)
 *  b0 | problem (14, ink, script)       | T mid | x540 y94
 *  b1 | legend chips ×2                  | Chip  | x330..470 / x610..750 y104..132
 *  b1 | vessel box + O2/He dots          | Draw  | x300..780 y138..258
 *  b1 | caption (13, amber_dark)        | T mid | x540 y275
 *  b2 | Dalton line (14, ink, script)   | T mid | x540 y302
 *  b3 | mole conversion (15, ink)       | T mid | x540 y332
 *  b4 | total pressure (15, amber_dark) | T mid | x540 y362
 *  b5 | partial pressure (15, green)    | T mid | x540 y392
 *  b6 | lesson (script 16, green)       | T mid | x540 y430
 */

import React from "react";
import { Circle, G } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  INK,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

const O2_DOTS: [number, number][] = [
  [340, 165], [420, 220], [500, 180], [580, 235], [650, 160], [720, 210], [370, 235], [700, 175],
];
const HE_DOTS: [number, number][] = [
  [360, 200], [440, 165], [480, 230], [540, 200], [610, 230], [660, 190], [750, 220], [400, 175], [620, 165], [520, 245],
];

export default function Ch12Sec16({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={23} fill={RED} script>
          {t("total and partial pressure of a mixture [JEE Main]", "mixture ka total aur partial pressure [JEE Main]")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={94} size={14} fill={INK} script>
          {t(
            "10 L vessel: 4 g O₂ + 2 g He @ 300 K ⇒ P_total? P_He?",
            "10 L vessel: 4 g O₂ + 2 g He @ 300 K ⇒ P_total? P_He?"
          )}
        </T>
      </Fade>

      {/* beat 1 — THE PICTURE: each gas fills the whole vessel */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <Chip x={330} y={104} w={140} h={28} fill={CREAM} stroke={INK} textFill={INK} size={13} script={false}>
          O₂ = 4 g
        </Chip>
        <Chip x={610} y={104} w={140} h={28} fill={CREAM} stroke={AMBER_DARK} textFill={AMBER_DARK} size={13} script={false}>
          He = 2 g
        </Chip>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.7)} d="M 300 138 h 480 v 120 h -480 z" stroke={INK} sw={2.2} dur={0.9} />
      <Fade on={beat >= 1} delay={dl(1, 1.6)}>
        <G>
          {O2_DOTS.map(([x, y]) => (
            <Circle key={`o-${x}-${y}`} cx={x} cy={y} r={6} fill={INK} />
          ))}
        </G>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.3)}>
        <G>
          {HE_DOTS.map(([x, y]) => (
            <Circle key={`h-${x}-${y}`} cx={x} cy={y} r={4} fill={AMBER_DARK} />
          ))}
        </G>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3)}>
        <T x={540} y={275} size={13} fill={AMBER_DARK} script>
          {t("each fills the whole vessel — pressures add", "har ek poora vessel bharta — pressures add")}
        </T>
      </Fade>

      {/* beat 2 — Dalton's law */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={302} size={14} fill={INK} script>
          {t(
            "Dalton's law: each acts alone, partial pressures add",
            "Dalton's law: har ek akela act karta, partial pressures add"
          )}
        </T>
      </Fade>

      {/* beat 3 — convert to moles */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={332} size={15} fill={INK}>
          n(O₂)=4/32=0.125 mol, n(He)=2/4=0.5 mol ⇒ total=0.625 mol
        </T>
      </Fade>

      {/* beat 4 — total pressure */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={362} size={15} fill={AMBER_DARK}>
          P_total = nRT/V ≈ 1.56×10⁵ Pa (~1.5 atm)
        </T>
      </Fade>

      {/* beat 5 — partial pressure of He */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={392} size={15} fill={GREEN}>
          He: x = 0.5/0.625 = 0.8 ⇒ P_He ≈ 1.25×10⁵ Pa
        </T>
      </Fade>

      {/* beat 6 — the lesson */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={430} size={16} fill={GREEN} script weight={700}>
          {t(
            "pressures add, masses don't — He dominates despite being lighter",
            "pressures add, masses nahi — He light hoke bhi dominate karta"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
