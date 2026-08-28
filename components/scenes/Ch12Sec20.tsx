/**
 * Ch12 · Section 20 — "The rules of the idealised game"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 14.34, 32.17, 46.42, 55.89, 76.29, 94.63]):
 *  0 title + underline · 1 postulates 1&2 chips (large N random motion, point
 *    masses) · 2 postulate 3 chip (Newton's laws, no long-range forces) · 3
 *    THE DIAGRAM: box, 5 random-direction molecules + one bouncing elastically
 *    off the wall · 4 postulates 4&5 chips (elastic+instant, isotropic) · 5
 *    consequence lines (what each assumption buys) · 6 break-one-it-fails
 *    chips + verdict
 *
 * Layout plan (Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | title (script 23, red)          | T mid | x270..810 y37..76 (bl64)
 *  b0 | underline                        | Draw  | y86 x330..750
 *  b1 | postulate chips ×2               | Chip  | y100..134 x140/580
 *  b2 | postulate chip                   | Chip  | y142..176 x260..820
 *  b3 | box + 5 random dots+arrows       | Draw  | x200..880 y195..315
 *  b3 | bounce molecule + label           | mix   | near x850
 *  b4 | postulate chips ×2               | Chip  | y330..364 x180/580
 *  b5 | consequence lines ×3 (14, ink)   | T mid | y384/408/432
 *  b6 | break-one chips ×3 (red)         | Chip  | y462..494
 *  b6 | verdict (script 16, green)       | T mid | x540 y525
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
  arrowD,
  INK,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

const RANDOM_DOTS: [number, number, number, number][] = [
  [280, 230, 315, 210],
  [400, 275, 370, 300],
  [520, 220, 555, 238],
  [630, 285, 600, 258],
  [420, 240, 450, 220],
];

export default function Ch12Sec20({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={23} fill={RED} script>
          {t("the rules of the idealised game", "idealised game ke rules")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.3)} d="M 330 86 C 420 82, 660 90, 750 84" stroke={RED} sw={2.2} dur={0.6} />

      {/* beat 1 — postulates 1 & 2 */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <Chip x={100} y={100} w={430} h={34} fill={CREAM} stroke={AMBER} textFill={INK} size={13} script={false}>
          {t("1. very large N, identical, random motion", "1. bahut bada N, identical, random motion")}
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <Chip x={560} y={100} w={380} h={34} fill={CREAM} stroke={AMBER} textFill={INK} size={13} script={false}>
          {t("2. point masses (size negligible)", "2. point masses (size negligible)")}
        </Chip>
      </Fade>

      {/* beat 2 — postulate 3 */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <Chip x={260} y={142} w={560} h={34} fill={CREAM} stroke={AMBER} textFill={INK} size={13} script={false}>
          {t("3. Newton's laws: straight flight, no long-range forces", "3. Newton's laws: straight flight, no long-range forces")}
        </Chip>
      </Fade>

      {/* beat 3 — THE DIAGRAM: random motion + elastic bounce */}
      <Draw on={beat >= 3} delay={dl(3, 0.1)} d="M 200 195 h 680 v 120 h -680 z" stroke={INK} sw={2.2} dur={0.9} />
      {RANDOM_DOTS.map(([x, y, ax, ay], i) => (
        <G key={`${x}-${y}`}>
          <Fade on={beat >= 3} delay={dl(3, 0.8 + i * 0.3)}>
            <Circle cx={x} cy={y} r={6} fill={AMBER_DARK} />
          </Fade>
          <Draw on={beat >= 3} delay={dl(3, 1 + i * 0.3)} d={arrowD(x, y, ax, ay)} stroke={AMBER_DARK} sw={1.8} dur={0.3} />
        </G>
      ))}
      <Fade on={beat >= 3} delay={dl(3, 2.6)}>
        <Circle cx={800} cy={255} r={6} fill={GREEN} />
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 2.9)} d="M 760 225 L 800 255" stroke={GREEN} sw={2} dur={0.4} />
      <Draw on={beat >= 3} delay={dl(3, 3.3)} d={arrowD(800, 255, 762, 288)} stroke={GREEN} sw={2} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 3.8)}>
        <T x={800} y={300} size={11} fill={GREEN} anchor="end" script>
          {t("elastic bounce ✓", "elastic bounce ✓")}
        </T>
      </Fade>

      {/* beat 4 — postulates 4 & 5 */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <Chip x={140} y={330} w={400} h={34} fill={CREAM} stroke={AMBER} textFill={INK} size={13} script={false}>
          {t("4. all collisions elastic & instantaneous", "4. saare collisions elastic & instantaneous")}
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <Chip x={580} y={330} w={340} h={34} fill={CREAM} stroke={AMBER} textFill={INK} size={13} script={false}>
          {t("5. isotropic — no special direction", "5. isotropic — koi special direction nahi")}
        </Chip>
      </Fade>

      {/* beat 5 — consequences */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={384} size={14} fill={INK}>
          {t("elastic ⇒ molecules rebound undiminished", "elastic ⇒ molecules undiminished rebound")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={540} y={408} size={14} fill={INK}>
          {t("wall collisions = only force ⇒ gravity/attraction drop out", "wall collisions = only force ⇒ gravity/attraction gayab")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.7)}>
        <T x={540} y={432} size={14} fill={INK}>
          {t("isotropic ⇒ same mean-sq velocity on every axis", "isotropic ⇒ har axis par same mean-sq velocity")}
        </T>
      </Fade>

      {/* beat 6 — break one, it fails */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Chip x={100} y={462} w={280} h={32} fill={CREAM} stroke={RED} textFill={RED} size={12} script={false}>
          {t("charged + E-field → new force", "charged + E-field → naya force")}
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.9)}>
        <Chip x={400} y={462} w={280} h={32} fill={CREAM} stroke={RED} textFill={RED} size={12} script={false}>
          {t("preferred wall → isotropy lost", "preferred wall → isotropy khatam")}
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.5)}>
        <Chip x={700} y={462} w={280} h={32} fill={CREAM} stroke={RED} textFill={RED} size={12} script={false}>
          {t("dense gas → size & attraction return", "dense gas → size & attraction wapas")}
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.3)}>
        <T x={540} y={525} size={16} fill={GREEN} script weight={700}>
          {t(
            "kinetic theory = physics of a dilute gas of neutral molecules",
            "kinetic theory = dilute gas of neutral molecules ki physics"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
