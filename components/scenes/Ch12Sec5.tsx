/**
 * Ch12 · Section 5 — Worked example [CBSE]: fraction of a gas that's molecules
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 16.21, 29.1, 47.45, 55.98, 71.0, 72.0]):
 *  0 title + problem statement · 1 picture it: near-empty container + sparse
 *    specks + a thin preview bar · 2 given data (r, molar volume, Nₐ) · 3
 *    formula: V_molecules = Nₐ×(4/3)πr³ · 4 plug in numbers · 5 divide by
 *    molar volume → fraction · 6 verdict: ~4 in 10,000, point-mass justified
 *
 * Layout plan (Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | title (script 26, red)          | T mid | x255..825 y37..83 (bl70)
 *  b0 | problem (15, ink)               | T mid | x540 y110
 *  b1 | container + specks              | Draw  | x260..760 y140..260
 *  b1 | preview bar + sliver            | Draw  | x800..840 y140..260
 *  b2 | data chips ×3                    | Chip  | y288..322  x100/365/650
 *  b3 | formula (18, ink, bold)          | T mid | x540 y358
 *  b4 | plug-in (16, ink)                | T mid | x540 y398
 *  b5 | divide (16, amber_dark)          | T mid | x540 y436
 *  b6 | answer chip (big, green)         | Chip  | x390..690 y460..504
 *  b6 | verdict (script 17, green)       | T mid | x540 y540
 */

import React from "react";
import { Circle, Rect } from 'react-native-svg';
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
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

const SPECKS: [number, number][] = [
  [300, 165], [340, 220], [400, 185], [460, 240], [520, 160], [580, 210],
  [630, 175], [690, 230], [720, 195], [370, 250], [480, 150], [700, 155],
];

export default function Ch12Sec5({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={70} size={26} fill={RED} script>
          {t("how much of a gas is molecules? [CBSE]", "gas mein kitna hissa molecules hai? [CBSE]")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={110} size={15} fill={INK} script>
          {t(
            "1 mole O₂ @ STP, d = 3 Å ⇒ fraction of volume filled by molecules?",
            "1 mole O₂ @ STP, d = 3 Å ⇒ volume ka kitna fraction molecules hai?"
          )}
        </T>
      </Fade>

      {/* beat 1 — picture it: near-empty container + preview bar */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.2)}
        d="M 260 140 h 500 v 120 h -500 z"
        stroke={INK}
        sw={2.2}
        dur={0.9}
      />
      {SPECKS.map(([x, y], i) => (
        <Fade key={`${x}-${y}`} on={beat >= 1} delay={dl(1, 1.1 + i * 0.1)}>
          <Circle cx={x} cy={y} r={2.2} fill={RED} />
        </Fade>
      ))}
      <Fade on={beat >= 1} delay={dl(1, 2.6)}>
        <T x={510} y={280} size={13} fill={MUTED} script>
          {t("almost entirely empty", "lagbhag poora empty")}
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 3.2)}
        d="M 800 140 h 40 v 120 h -40 z"
        stroke={INK}
        sw={1.8}
        dur={0.6}
      />
      <Fade on={beat >= 1} delay={dl(1, 4)}>
        <Rect x={801} y={257} width={38} height={2.5} fill={AMBER_DARK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 4.3)}>
        <T x={820} y={128} size={12} fill={MUTED} script>
          {t("preview", "preview")}
        </T>
      </Fade>

      {/* beat 2 — given data */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <Chip x={100} y={288} w={230} h={34} fill={CREAM} stroke={AMBER} textFill={INK} size={14} script={false}>
          r = 1.5×10⁻¹⁰ m
        </Chip>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.3)}>
        <Chip x={355} y={288} w={280} h={34} fill={CREAM} stroke={AMBER} textFill={INK} size={14} script={false}>
          Vₘ = 22.4×10⁻³ m³
        </Chip>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.3)}>
        <Chip x={660} y={288} w={260} h={34} fill={CREAM} stroke={AMBER} textFill={INK} size={14} script={false}>
          Nₐ = 6.022×10²³
        </Chip>
      </Fade>

      {/* beat 3 — formula */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={360} size={18} fill={INK} weight={700}>
          V_molecules = Nₐ × (4/3)πr³
        </T>
      </Fade>

      {/* beat 4 — plug in numbers */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={398} size={16} fill={INK}>
          {t(
            "1 sphere ≈ 1.41×10⁻²⁹ m³ ⇒ ×Nₐ ≈ 8.5×10⁻⁶ m³",
            "1 sphere ≈ 1.41×10⁻²⁹ m³ ⇒ ×Nₐ ≈ 8.5×10⁻⁶ m³"
          )}
        </T>
      </Fade>

      {/* beat 5 — divide by molar volume */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={436} size={16} fill={AMBER_DARK}>
          fraction = 8.5×10⁻⁶ ÷ 22.4×10⁻³ ≈ 3.8×10⁻⁴
        </T>
      </Fade>

      {/* beat 6 — verdict */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <Chip x={390} y={460} w={300} h={44} fill={GREEN} textFill="#fff" size={22} script={false}>
          ≈ 3.8×10⁻⁴ (0.038%)
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={540} y={540} size={17} fill={GREEN} script>
          {t(
            "only ~4 in 10,000 is molecules ⇒ point-mass model justified",
            "sirf ~4 in 10,000 hi molecules ⇒ point-mass model justified"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
