/**
 * P12Ch01 · Section 39 — "Worked Example: The Two-to-One Ratio Speed Trap"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md & SCENE_PLAYBOOK.md.
 *
 * OBJECT-RICH OPEN CHALKBOARD DESIGN (NO HEAVY CONTAINERS):
 *  - Problem setup: Short dipole has axial field E_axial = 100 N/C at distance r = 10 cm.
 *  - Part 1: Find equatorial field E_eq at SAME distance r = 10 cm.
 *  - Solution Part 1: E_eq = E_axial / 2 = 100 / 2 = 50 N/C!
 *  - Part 2 (SPEED TRAP): Find distance r' on equatorial line where field is ALSO 100 N/C!
 *  - Solution Part 2: E_eq(r') = k p / (r')³ = 100 N/C  ⇒  r' = r / 2^(1/3) ≈ 10 / 1.26 = 7.94 cm!
 *
 * Beats (en [0, 6, 20, 34, 46, 58, 70, 80]):
 *  0 Title "worked example: two-to-one ratio speed trap" + drawn underline
 *  1 Hook note: solving board numericals and avoiding distance power traps!
 *  2 Badge 1 & Part 1 (Same distance r = 10 cm): E_eq = E_axial / 2 = 50 N/C
 *  3 Step 1 calculation details: 100 N/C / 2 = 50 N/C
 *  4 Badge 2 & Part 2 (Equal field distance r'): E_eq(r') = 100 N/C  ⇒  r' = r / 2^(1/3)
 *  5 Part 2 numerical evaluation: r' = 10 / 1.260 = 7.94 cm
 *  6 Speed trap warning: 2:1 ratio applies ONLY at SAME distance r, NOT for same field value!
 *  7 Grand Verdict: E_eq(10 cm) = 50 N/C  |  Equal field at r' = 7.94 cm (r / 2^(1/3))!
 */

import React from "react";
import { G, Rect } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  ringD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

function Badge({ n, cx, cy, on, delay }: { n: number; cx: number; cy: number; on: boolean; delay: number }) {
  return (
    <G>
      <Draw
        on={on}
        delay={delay}
        d={`M ${cx - 13} ${cy} A 13 13 0 1 1 ${cx + 13} ${cy} A 13 13 0 1 1 ${cx - 13} ${cy}`}
        stroke={RED}
        sw={2.2}
        dur={0.4}
      />
      <Fade on={on} delay={delay + 0.3}>
        <T x={cx} y={cy + 5} size={14} fill={RED} weight={800}>
          {n}
        </T>
      </Fade>
    </G>
  );
}

export default function P12Ch01Sec39({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ── BEAT 0: Title ── */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={58} size={24} fill={RED} script>
          {t(
            "worked example: two-to-one ratio speed trap",
            "worked example: 2:1 ratio speed trap"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 2.5)}
        d="M 240 70 C 440 66, 640 74, 840 69"
        stroke={RED}
        sw={2.4}
        dur={0.7}
      />

      {/* ── BEAT 1: Hook Note ── */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={60} y={110} size={15} fill={MUTED} script anchor="start">
          {t(
            "solving board numericals and avoiding distance power traps!",
            "board numericals solve karna aur distance power traps se bachna!"
          )}
        </T>
      </Fade>

      {/* ── BEAT 2: Badge 1 & Part 1 (Same distance r = 10 cm) ── */}
      <Badge n={1} cx={52} cy={165} on={beat >= 2} delay={dl(2, 0.4)} />
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={74} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("PART 1: Field at Same Distance r = 10 cm", "PART 1: Same Distance r = 10 cm par Field")}
        </T>
      </Fade>

      <Fade on={beat >= 2} dim={beat >= 4}>
        <G transform="translate(60, 185)">
          <Rect x={0} y={10} width={430} height={85} rx={8} fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
          <T x={215} y={48} anchor="middle" size={22} fill={INK} weight={800}>
            E_eq = E_axial / 2 = 100 / 2 = 50 N/C
          </T>
          <T x={215} y={78} anchor="middle" size={13} fill={AMBER_DARK} script>
            {t("At same distance r, equatorial field is half!", "Same distance r par equatorial field aadha hota hai!")}
          </T>
          <Draw on={beat >= 2} delay={dl(2, 1.6)} d="M 100 56 h 230 M 100 60 h 230" stroke={AMBER_DARK} sw={1.5} />
        </G>
      </Fade>

      {/* ── BEAT 4: Badge 2 & Part 2 (Equal field distance r') ── */}
      <Badge n={2} cx={540} cy={165} on={beat >= 4} delay={dl(4, 0.4)} />
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={562} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("PART 2 (SPEED TRAP): Distance for Equal Field E = 100 N/C", "PART 2 (SPEED TRAP): Equal Field ke liye Distance")}
        </T>
      </Fade>

      <Fade on={beat >= 4} dim={beat >= 6}>
        <G transform="translate(540, 185)">
          <T x={0} y={25} anchor="start" size={14} fill={INK} weight={700}>
            k p / (r')³ = 2 k p / r³  ⇒  (r')³ = r³ / 2
          </T>
          <T x={0} y={65} anchor="start" size={20} fill={RED} weight={800}>
            r' = r / 2^(1/3) = 10 / 1.26 = 7.94 cm!
          </T>
        </G>
      </Fade>

      {/* ── BEAT 7: Grand Verdict Chip ── */}
      <Fade on={beat >= 7}>
        <Chip
          x={100}
          y={536}
          w={880}
          h={44}
          fill={GREEN}
          textFill="#ffffff"
          size={18}
        >
          {t(
            "★ VERDICT: E_eq(10 cm) = 50 N/C  |  Equal field at r' = 7.94 cm (r / 2^(1/3))!",
            "★ VERDICT: E_eq(10 cm) = 50 N/C  |  Equal field at r' = 7.94 cm (r / 2^(1/3))!"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
