/**
 * Ch07 · Section 53 — "Two useful satellites: geostationary and polar"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 1, 2, 11.22, 18.73, 32.46, 42.02, 51.49]):
 *  0 title
 *  1 diagram: Earth, wide equatorial ellipse orbit + tight polar orbit
 *  2 geostationary dot + "36,000 km, equatorial" label
 *  3 same-direction spin arrow + "24 h period"
 *  4 amber: hovers over one spot → TV/phone/weather chip row
 *  5 polar dot + "~1000 km, N-S plane"
 *  6 amber: scans a fresh strip each pass
 *  7 green box: high-fixed = comms, low-sweep = imaging
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  Earth c(280,300) r70 · geo ellipse rx240 ry70 cx280 cy300 ·
 *   polar ellipse rx90 ry200 cx280 cy300 (rotated visually via path)
 *  geo dot (520,300) · polar dot (280,100)
 *  b2 | label st x540 bl290 (36,000 km)
 *  b3 | spin arrow on Earth + "24 h" label
 *  b4 | chips x700..1000 y150..230
 *  b5 | label st x300 bl90 (1000 km)
 *  b6 | line cx780 bl380
 *  b7 | green box x300..820 y460..512(bl492)
 */

import React from "react";
import { Circle, Ellipse } from 'react-native-svg';
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
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch07Sec53({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — two special kinds */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "High-and-fixed, or low-and-sweeping",
            "High-and-fixed, ya low-and-sweeping"
          )}
        </T>
      </Fade>

      {/* beat 1 — the two orbits */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.6)}
        d="M 210 300 A 70 70 0 1 1 209.9 300"
        stroke={INK}
        sw={2.4}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <Ellipse
          cx={280}
          cy={300}
          rx={240}
          ry={70}
          fill="none"
          stroke={MUTED}
          strokeWidth={1.6}
          strokeDasharray="6 7"
        />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.1)}>
        <Ellipse
          cx={280}
          cy={300}
          rx={70}
          ry={200}
          fill="none"
          stroke={MUTED}
          strokeWidth={1.6}
          strokeDasharray="6 7"
        />
      </Fade>

      {/* beat 2 — geostationary altitude */}
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <Circle cx={520} cy={300} r={7} fill={AMBER_DARK} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.4)}>
        <T x={540} y={290} size={12} fill={AMBER_DARK} anchor="start" weight={700}>
          {t("~36,000 km, equatorial", "~36,000 km, equatorial")}
        </T>
      </Fade>

      {/* beat 3 — same spin, 24 h */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 0.6)}
        d={arrowD(240, 240, 280, 232)}
        stroke={INK}
        sw={1.8}
        dur={0.4}
      />
      <Fade on={beat >= 3} delay={dl(3, 1.4)}>
        <T x={540} y={316} size={11} fill={INK} anchor="start" weight={700}>
          {t("24 h period, same direction", "24 h period, same direction")}
        </T>
      </Fade>

      {/* beat 4 — hovers, perfect for comms */}
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <Chip x={700} y={150} w={280} h={30} fill={CREAM} stroke={AMBER_DARK} textFill={AMBER_DARK} size={12}>
          {t("hovers over ONE fixed spot", "EK fixed spot par hovers")}
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.2)}>
        <Chip x={700} y={188} w={280} h={30} fill={CREAM} stroke={INK} textFill={INK} size={12}>
          {t("TV · phone · weather relay", "TV · phone · weather relay")}
        </Chip>
      </Fade>

      {/* beat 5 — polar altitude */}
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <Circle cx={280} cy={100} r={6} fill={INK} />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        <T x={300} y={90} size={12} fill={INK} anchor="start" weight={700}>
          {t("~1000 km, N–S plane", "~1000 km, N–S plane")}
        </T>
      </Fade>

      {/* beat 6 — fresh strip each pass */}
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={780} y={380} size={12} fill={AMBER_DARK} script anchor="start">
          {t(
            "Earth turns beneath it — fresh strip each pass",
            "Earth uske neeche ghoomti — har pass mein nayi patti"
          )}
        </T>
      </Fade>

      {/* beat 7 — the slogan */}
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <Draw
          on={beat >= 7}
          delay={dl(7, 0.6)}
          d="M 312 460 h 496 q 12 0 12 12 v 28 q 0 12 -12 12 h -496 q -12 0 -12 -12 v -28 q 0 -12 12 -12"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.3)}>
        <T x={560} y={492} size={13} fill={INK} weight={800}>
          {t(
            "high-and-fixed → comms · low-and-sweeping → imaging",
            "high-and-fixed → comms · low-and-sweeping → imaging"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
