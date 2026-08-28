/**
 * Ch04 · Section 61 — "The puller, the pusher, and the one that does both"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 16.6, 41.4, 66.2, 91.1, 112.2, 137.1, 161.9]):
 *  0 title
 *  1 string (puller) vs floor (pusher) — two personalities
 *  2 tension: ideal string, same everywhere, same over ideal pulley
 *  3 spring: Hooke's law, pulls AND pushes
 *  4 F = −kx, the minus is "restoring"
 *  5 red margin: negative N or T = impossible, rethink the picture
 *  6 rolling friction: μr ≪ μk, why wheels
 *  7 closing chip: the menu is complete
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl 52
 *  b1 | string sketch x84..220 y88..120 · floor sketch x84..220 y128..160 (icons+labels)
 *  b2 st x84 bl 195 / 219 / 243
 *  b3 | spring zigzag x600..820 y100..130 · st x600 bl 165 / 189
 *  b4 box x600..920 y210..252 bl 238
 *  b5 | bar x66 y285..360 · lines st x84 bl 305 / 331 / 355
 *  b6 st x84 bl 400 / 424
 *  b7 chip x260..820 y470..510
 */

import React from "react";
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
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

const circleD = (cx: number, cy: number, r: number) =>
  `M ${cx - r} ${cy} a ${r} ${r} 0 1 0 ${2 * r} 0 a ${r} ${r} 0 1 0 ${-2 * r} 0`;

export default function Ch04Sec61({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={52} size={19} fill={INK} script>
          {t(
            "tension, the spring, and what a negative answer means",
            "tension, spring, aur negative answer ka matlab"
          )}
        </T>
      </Fade>

      {/* beat 1 — two personalities */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 1)}
        d={`M 84 100 H 200 ${circleD(210, 100, 8)}`}
        stroke={GREEN}
        sw={2.2}
        dur={0.6}
      />
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <T x={84} y={90} size={12} fill={GREEN} script anchor="start">
          {t("string: PULLER only", "string: sirf PULLER")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 3)} d="M 84 148 H 220" stroke={AMBER_DARK} sw={2.2} dur={0.5} />
      <Draw
        on={beat >= 1}
        delay={dl(1, 3.6)}
        d={arrowD(150, 148, 150, 118)}
        stroke={AMBER_DARK}
        sw={2.2}
        dur={0.3}
      />
      <Fade on={beat >= 1} delay={dl(1, 4.2)}>
        <T x={84} y={168} size={12} fill={AMBER_DARK} script anchor="start">
          {t("floor: PUSHER only", "floor: sirf PUSHER")}
        </T>
      </Fade>

      {/* beat 2 — tension */}
      <Fade on={beat >= 2} delay={dl(2, 1.5)}>
        <T x={84} y={195} size={13} fill={INK} script anchor="start">
          {t(
            "ideal string (massless, inextensible): tension SAME everywhere",
            "ideal string (massless, inextensible): tension HAR jagah SAME"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 8)}>
        <T x={84} y={219} size={13} fill={GREEN} script anchor="start">
          {t(
            "unchanged over an ideal pulley — the workhorse of every pulley problem",
            "ideal pulley par bhi wahi — har pulley problem ka workhorse"
          )}
        </T>
      </Fade>

      {/* beat 3 — spring */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 1)}
        d="M 600 115 l 16 -14 l 16 24 l 16 -24 l 16 24 l 16 -24 l 16 24 l 16 -14"
        stroke={INK}
        sw={2.2}
        dur={1}
      />
      <Fade on={beat >= 3} delay={dl(3, 2.5)}>
        <T x={600} y={165} size={13} fill={INK} script anchor="start">
          {t(
            "Hooke's law — unlike a string, a spring does BOTH jobs",
            "Hooke's law — string ke ulat, spring DONO kaam karti hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 8)}>
        <T x={600} y={189} size={13} fill={AMBER_DARK} script anchor="start">
          {t("stretch → pulls back · compress → pushes back", "khincho → wapas kheenchti · dabao → wapas dhakelti")}
        </T>
      </Fade>

      {/* beat 4 — F = -kx */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.8)}
        d="M 612 210 h 296 q 12 0 12 12 v 22 q 0 12 -12 12 h -296 q -12 0 -12 -12 v -22 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.8}
        dur={0.6}
        fill={CREAM}
      />
      <Fade on={beat >= 4} delay={dl(4, 1.8)}>
        <T x={760} y={238} size={16} fill={INK} weight={800}>
          F = −kx — the minus IS "restoring"
        </T>
      </Fade>

      {/* beat 5 — the diagnostic */}
      <Draw on={beat >= 5} delay={dl(5, 0.6)} d="M 66 285 v 82" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={84} y={305} size={14} fill={RED} script anchor="start">
          {t(
            "negative N or negative T? DO NOT write it down — stop",
            "negative N ya negative T? LIKHO mat — ruko"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 7)}>
        <T x={84} y={331} size={14} fill={RED} script anchor="start">
          {t(
            "negative N: it lifted off, N is really 0 · negative T: the string went slack",
            "negative N: wo uth gaya, N sach mein 0 · negative T: string dheeli pad gayi"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 13)}>
        <T x={84} y={355} size={14} fill={GREEN} script anchor="start">
          {t(
            "not a real answer — it's a signal to rethink the configuration",
            "asli answer nahi — configuration dobara sochne ka ishaara"
          )}
        </T>
      </Fade>

      {/* beat 6 — rolling friction */}
      <Fade on={beat >= 6} delay={dl(6, 1.5)}>
        <T x={84} y={400} size={13} fill={INK} script anchor="start">
          {t(
            "rolling friction: f_r = μr·N, with μr ≪ μk",
            "rolling friction: f_r = μr·N, jahan μr ≪ μk"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 7)}>
        <T x={84} y={424} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "that tiny μr is the whole reason we put wheels under heavy loads",
            "wahi chhota μr hi wajah hai ki bhaari bojh ke neeche pahiye lagate hain"
          )}
        </T>
      </Fade>

      {/* beat 7 — menu complete */}
      <Fade on={beat >= 7} delay={dl(7, 1.5)}>
        <Chip x={260} y={470} w={560} h={40} fill={CREAM} stroke={GREEN} textFill={GREEN} size={14}>
          {t(
            "the menu is complete: gravity, N, friction, tension, spring, rolling",
            "menu poora: gravity, N, friction, tension, spring, rolling"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
