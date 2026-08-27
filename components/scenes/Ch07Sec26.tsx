/**
 * Ch07 · Section 26 — "The acceleration g, and why it ignores the falling body"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 12.12, 24.58, 38.4, 46.34, 55.55, 65.02, 74.84]):
 *  0 title
 *  1 drop timeline: stone + 1s/2s/3s speed labels + hero g ≈ 9.8
 *  2 small + big ball, equal fall arrows, "no air: SAME g"
 *  3 Moon chip: hammer + feather together
 *  4 red: bigger m → bigger force
 *  5 g = F/m tokens, m's slashed out
 *  6 green: strength and sluggishness balance
 *  7 green box: g is the Earth's property
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52 · stone (150,130) r7 · drop dash M150 145 V300 ·
 *  speeds st x180 bl 185/235/285 · hero cx420 bl140 (22)
 *  b2 | balls (600,160) r6 / (680,163) r12 · arrows ↓ y240 · caption cx640 bl272
 *  b3 | chip x770..1040 y150..190
 *  b4 | bar x66 y330..382 · lines st x84 bl350 / 376
 *  b5 | "g = F ⁄ m" st x560 bl345 · tokens bl385: T1 x560, m1 x628, T3 x644, m2 x692 ·
 *      slashes M624 390 L644 370 / M688 390 L708 370
 *  b6 | line st x560 bl430
 *  b7 | green box x300..780 y470..522 (bl502)
 */

import React from "react";
import { Circle, Path } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  Chip,
  T,
  arrowD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch07Sec26({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the sharper question */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "g: how fast the pull speeds things up",
            "g: pull cheezon ko kitni tezi se raftaar deta hai"
          )}
        </T>
      </Fade>

      {/* beat 1 — 9.8 more every second */}
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <Circle cx={150} cy={130} r={7} fill={INK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <Path d="M 150 145 V 300" stroke={MUTED} strokeWidth={1.6} strokeDasharray="5 6" fill="none" />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.5)}>
        <T x={180} y={185} size={11} fill={INK} anchor="start" weight={700}>
          1s → 9.8 m⁄s
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 4)}>
        <T x={180} y={235} size={11} fill={INK} anchor="start" weight={700}>
          2s → 19.6 m⁄s
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 5.5)}>
        <T x={180} y={285} size={11} fill={INK} anchor="start" weight={700}>
          3s → 29.4 m⁄s
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 7.5)}>
        <T x={430} y={140} size={22} fill={INK} weight={800}>
          g ≈ 9.8 m ⁄ s²
        </T>
      </Fade>

      {/* beat 2 — it does not care what you drop */}
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <Circle cx={600} cy={160} r={6} fill={INK} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.8)}>
        <Circle cx={680} cy={163} r={12} fill={INK} />
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 2.6)}
        d={arrowD(600, 175, 600, 240)}
        stroke={AMBER_DARK}
        sw={2.2}
        dur={0.5}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 3.2)}
        d={arrowD(680, 182, 680, 240)}
        stroke={AMBER_DARK}
        sw={2.2}
        dur={0.5}
      />
      <Fade on={beat >= 2} delay={dl(2, 5)}>
        <T x={640} y={272} size={12} fill={GREEN} script>
          {t("no air: the SAME g", "bina hawa: wahi SAME g")}
        </T>
      </Fade>

      {/* beat 3 — the Moon demonstration */}
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <Chip x={770} y={150} w={270} h={40} fill={CREAM} stroke={INK} textFill={INK} size={12}>
          {t(
            "David Scott, Moon: hammer + feather ✓",
            "David Scott, Moon: hammer + feather ✓"
          )}
        </Chip>
      </Fade>

      {/* beat 4 — bigger m, bigger pull */}
      <Draw on={beat >= 4} delay={dl(4, 0.6)} d="M 66 330 v 52" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 1.4)}>
        <T x={84} y={350} size={13} fill={RED} script anchor="start">
          {t(
            "yes — the Earth pulls HARDER on heavier things",
            "haan — Earth bhaari cheez ko ZYADA zor se kheenchti hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 4.5)}>
        <T x={84} y={376} size={13} fill={RED} script anchor="start">
          {t(
            "F = G·M·m ⁄ R² — bigger m, bigger force",
            "F = G·M·m ⁄ R² — bada m, bada force"
          )}
        </T>
      </Fade>

      {/* beat 5 — but the mass cancels */}
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={560} y={345} size={15} fill={INK} anchor="start" weight={700}>
          g = F ⁄ m
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 3)}>
        <T x={560} y={385} size={16} fill={INK} anchor="start" weight={800}>
          g = G·M·
        </T>
        <T x={628} y={385} size={16} fill={INK} anchor="start" weight={800}>
          m
        </T>
        <T x={644} y={385} size={16} fill={INK} anchor="start" weight={800}>
          ⁄ R²·
        </T>
        <T x={692} y={385} size={16} fill={INK} anchor="start" weight={800}>
          m
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 5)} d="M 624 390 L 644 370" stroke={RED} sw={2.4} dur={0.3} />
      <Draw on={beat >= 5} delay={dl(5, 5.6)} d="M 688 390 L 708 370" stroke={RED} sw={2.4} dur={0.3} />

      {/* beat 6 — they balance perfectly */}
      <Fade on={beat >= 6} delay={dl(6, 1.5)}>
        <T x={560} y={430} size={13} fill={GREEN} script anchor="start">
          {t(
            "pull-strength and sluggishness scale together — perfect balance",
            "kheench aur susti saath-saath badhte hain — perfect balance"
          )}
        </T>
      </Fade>

      {/* beat 7 — a property of the Earth */}
      <Fade on={beat >= 7} delay={dl(7, 0.8)}>
        <Draw
          on={beat >= 7}
          delay={dl(7, 0.8)}
          d="M 312 470 h 456 q 12 0 12 12 v 28 q 0 12 -12 12 h -456 q -12 0 -12 -12 v -28 q 0 -12 12 -12"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={540} y={502} size={14} fill={INK} weight={800}>
          {t(
            "g = the EARTH's property (M, R) — not the falling object's",
            "g = EARTH ki property (M, R) — girti cheez ki nahi"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
