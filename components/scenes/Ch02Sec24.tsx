/**
 * Ch02 · Section 24 — "Example 1 [CBSE]: the scooter's trapezium"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 24.8, 49.6, 60.3, 85.1, 100, 117.9, 133]):
 *  0 title + problem line
 *  1 v-t trapezium: axes, three segments, guides, tick labels
 *  2 chip: rate → SLOPE
 *  3 three slope labels (+5 · 0 · −4)
 *  4 chip: amount → AREA (split verticals already drawn as guides)
 *  5 three piece areas: 40 · 120 · 50
 *  6 sum card: 210 m
 *  7 red caveat: distance = displacement only because no reversal
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  scale: x = 150+50t · v20 → y260 · axis y440
 *  b1 | axes → (960,440)/(150,150) · segs (150,440)→(350,260)→(650,260)→(900,440) ·
 *       ticks bl 462 at 350/650/900 · "20" end (138,264) · dashed guides
 *  b2 | chip x630..830 y150..184
 *  b3 | labels cx210 bl 326 / cx500 bl 240 / cx850 bl 300
 *  b4 | chip x630..830 y200..234
 *  b5 | values (300,410) · (500,400) · (735,400)
 *  b6 | card x330..750 y480..532 (formula bl 512)
 *  b7 | bar x66 y550..594 · lines st x84 bl 568 / 592
 */

import React from "react";
import { Path } from 'react-native-svg';
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
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch02Sec24({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the problem */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "Example 1 [CBSE] — the scooter's trapezium",
            "Example 1 [CBSE] — scooter ka trapezium"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 6)}>
        <T x={540} y={86} size={12} fill={MUTED} script>
          {t(
            "rest → 20 m/s in 4 s · cruise 6 s · brake to rest in 5 s — find a per phase + total Δx",
            "rest → 20 m/s, 4 s mein · 6 s cruise · 5 s mein brake — har phase ka a + total Δx"
          )}
        </T>
      </Fade>

      {/* beat 1 — the trapezium, pre-split */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.8)}
        d={arrowD(150, 440, 960, 440)}
        stroke={INK}
        sw={2.2}
        dur={0.9}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 2)}
        d={arrowD(150, 440, 150, 150)}
        stroke={INK}
        sw={2.2}
        dur={0.7}
      />
      <Fade on={beat >= 1} delay={dl(1, 2.8)}>
        <T x={972} y={446} size={14} fill={INK} anchor="start" weight={700}>
          t
        </T>
        <T x={144} y={138} size={14} fill={INK} weight={700}>
          v
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 4)}
        d="M 150 440 L 350 260 M 350 260 H 650 M 650 260 L 900 440"
        stroke={INK}
        sw={2.8}
        dur={2}
      />
      <Fade on={beat >= 1} delay={dl(1, 7)}>
        <Path
          d="M 150 260 H 350 M 350 260 V 440 M 650 260 V 440"
          fill="none"
          stroke={MUTED}
          strokeWidth={1.6}
          strokeDasharray="6 6"
        />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 8.5)}>
        <T x={350} y={462} size={12} fill={INK} weight={700}>
          4
        </T>
        <T x={650} y={462} size={12} fill={INK} weight={700}>
          10
        </T>
        <T x={900} y={462} size={12} fill={INK} weight={700}>
          15
        </T>
        <T x={138} y={264} size={12} fill={INK} anchor="end" weight={700}>
          20
        </T>
      </Fade>

      {/* beat 2 — a rate: slope */}
      <Fade on={beat >= 2} delay={dl(2, 1.5)}>
        <Chip x={630} y={150} w={200} h={34} fill={CREAM} stroke={AMBER} textFill={AMBER_DARK} size={14}>
          {t("rate → SLOPE", "rate → SLOPE")}
        </Chip>
      </Fade>

      {/* beat 3 — three slopes fall out */}
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={210} y={326} size={13} fill={GREEN} script>
          a = +5 m/s²
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 7)}>
        <T x={500} y={240} size={13} fill={AMBER_DARK} script>
          {t("a = 0 (cruise)", "a = 0 (cruise)")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 12)}>
        <T x={850} y={300} size={13} fill={RED} script>
          a = −4 m/s²
        </T>
      </Fade>

      {/* beat 4 — an amount: area */}
      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <Chip x={630} y={200} w={200} h={34} fill={CREAM} stroke={GREEN} textFill={GREEN} size={14}>
          {t("amount → AREA", "amount → AREA")}
        </Chip>
      </Fade>

      {/* beat 5 — three easy pieces */}
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={300} y={410} size={15} fill={INK} weight={700}>
          40 m
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 6)}>
        <T x={500} y={400} size={15} fill={INK} weight={700}>
          120 m
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 11)}>
        <T x={735} y={400} size={15} fill={INK} weight={700}>
          50 m
        </T>
      </Fade>

      {/* beat 6 — the sum */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.8)}
        d="M 342 480 h 396 q 12 0 12 12 v 28 q 0 12 -12 12 h -396 q -12 0 -12 -12 v -28 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.4}
        dur={0.6}
        fill={CREAM}
      />
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={540} y={512} size={16} fill={INK} weight={700}>
          Δx = 40 + 120 + 50 = 210 m
        </T>
      </Fade>

      {/* beat 7 — the honest caveat */}
      <Draw on={beat >= 7} delay={dl(7, 0.8)} d="M 66 550 v 44" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={84} y={568} size={13} fill={RED} script anchor="start">
          {t(
            "all the area sits above the axis ⇒ distance = displacement — HERE",
            "saara area axis ke upar ⇒ distance = displacement — YAHAN"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 7)}>
        <T x={84} y={592} size={13} fill={RED} script anchor="start">
          {t(
            "not a rule: one dip below the axis and the two separate immediately",
            "rule nahi hai: axis ke neeche ek dubki, aur dono foran alag"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
