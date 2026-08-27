/**
 * Ch02 · Section 30 — "Free fall: the most important case of uniform acceleration"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 13.9, 28.3, 51.3, 66.8, 85.9, 110.8, 134.1]):
 *  0 title
 *  1 picture: ball & feather, three level snapshots, ground · "land TOGETHER"
 *  2 chip: gravity alone, air ignored → mass drops out
 *  3 g card: 9.8 (≈10)
 *  4 Galileo note: the air talking
 *  5 green card: uniform a ⇒ toolkit applies, a = ±g
 *  6 red note (right): g is an acceleration, not a force
 *  7 red note (bottom): never mix 9.8 and 10
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  picture x80..420: shafts x180/x320 y120..400 dashed · snapshots y150/260/370 ·
 *  ground y400 · labels bl 424 · green line cx250 bl 456
 *  right: b2 chip x470..930 y110..146 · sub cx700 bl 172 · b3 card x470..1030 y195..255 ·
 *  b4 note cx750 bl 285 · b5 card x470..1030 y310..380 (bl 336/364) ·
 *  b6 bar x470 y400..452, lines st x486 bl 420/444
 *  b7 | bar x66 y480..540 · lines st x84 bl 500 / 526
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
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

const ball = (cy: number) => `M 170 ${cy} a 10 10 0 1 0 20 0 a 10 10 0 1 0 -20 0`;
const feather = (cy: number) =>
  `M 308 ${cy + 6} q 10 -18 24 -6 q -12 14 -24 6 M 310 ${cy + 4} l 18 -8`;

export default function Ch02Sec30({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the case with its own name */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={54} size={23} fill={INK} script>
          {t(
            "free fall — uniform acceleration, delivered by nature",
            "free fall — kudrat ka diya uniform acceleration"
          )}
        </T>
      </Fade>

      {/* beat 1 — ball and feather */}
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <Path
          d="M 180 120 V 395 M 320 120 V 395"
          fill="none"
          stroke={MUTED}
          strokeWidth={1.4}
          strokeDasharray="5 7"
        />
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.4)} d={ball(150)} stroke={INK} fill={INK} sw={2} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 2)} d={feather(150)} stroke={INK} sw={1.8} dur={0.6} />
      <Draw on={beat >= 1} delay={dl(1, 3.2)} d={ball(260)} stroke={INK} fill={INK} sw={2} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 3.8)} d={feather(260)} stroke={INK} sw={1.8} dur={0.6} />
      <Draw on={beat >= 1} delay={dl(1, 5)} d={ball(370)} stroke={INK} fill={INK} sw={2} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 5.6)} d={feather(370)} stroke={INK} sw={1.8} dur={0.6} />
      <Draw
        on={beat >= 1}
        delay={dl(1, 6.6)}
        d="M 120 400 h 280 M 150 400 l -10 12 M 220 400 l -10 12 M 290 400 l -10 12 M 360 400 l -10 12"
        stroke={INK}
        sw={2.2}
        dur={0.8}
      />
      <Fade on={beat >= 1} delay={dl(1, 7.6)}>
        <T x={180} y={424} size={11} fill={MUTED} script>
          {t("cricket ball", "cricket ball")}
        </T>
        <T x={320} y={424} size={11} fill={MUTED} script>
          {t("feather", "pankh")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 9)}>
        <T x={250} y={456} size={12} fill={GREEN} script>
          {t(
            "in vacuum: level all the way — land TOGETHER",
            "vacuum mein: poore raaste barabar — SAATH girte hain"
          )}
        </T>
      </Fade>

      {/* beat 2 — mass drops out */}
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <Chip x={470} y={110} w={460} h={36} fill={CREAM} stroke={AMBER} textFill={AMBER_DARK} size={13}>
          {t(
            "free fall = gravity alone, air resistance ignored",
            "free fall = sirf gravity, hawa ka virodh nazarandaaz"
          )}
        </Chip>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 6)}>
        <T x={700} y={172} size={11} fill={MUTED} script>
          {t(
            "ignore air → mass drops out: a heavy thing does NOT fall faster",
            "hawa hatao → mass gayab: bhaari cheez TEZ nahi girti"
          )}
        </T>
      </Fade>

      {/* beat 3 — the number */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 0.8)}
        d="M 482 195 h 536 q 12 0 12 12 v 36 q 0 12 -12 12 h -536 q -12 0 -12 -12 v -36 q 0 -12 12 -12"
        stroke={INK}
        sw={2.4}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 3} delay={dl(3, 2)}>
        <T x={750} y={230} size={17} fill={INK} weight={700}>
          {t("g ≈ 9.8 m/s²   (≈ 10 for quick work)", "g ≈ 9.8 m/s²   (jaldi ke liye ≈ 10)")}
        </T>
      </Fade>

      {/* beat 4 — Galileo */}
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <T x={750} y={285} size={12} fill={AMBER_DARK} script>
          {t(
            "Galileo: 'heavy falls faster' is the AIR talking, not gravity",
            "Galileo: 'bhaari tez girta hai' HAWA bol rahi hai, gravity nahi"
          )}
        </T>
      </Fade>

      {/* beat 5 — why it matters here */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.8)}
        d="M 482 310 h 536 q 12 0 12 12 v 46 q 0 12 -12 12 h -536 q -12 0 -12 -12 v -46 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.4}
        dur={0.7}
      />
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <T x={750} y={336} size={13} fill={GREEN} script>
          {t(
            "g constant ⇒ free fall IS uniform acceleration",
            "g constant ⇒ free fall uniform acceleration HAI"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 8)}>
        <T x={750} y={364} size={13} fill={GREEN} script>
          {t(
            "a = ±g and the whole toolkit applies — fix the sign, keep it",
            "a = ±g aur poora toolkit chalta hai — sign fix karo, nibhao"
          )}
        </T>
      </Fade>

      {/* beat 6 — an acceleration, not a force */}
      <Draw on={beat >= 6} delay={dl(6, 0.8)} d="M 470 400 v 52" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={486} y={420} size={13} fill={RED} script anchor="start">
          {t(
            "g is an ACCELERATION (m/s²), not a force",
            "g ek ACCELERATION hai (m/s²), force nahi"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 7)}>
        <T x={486} y={444} size={13} fill={RED} script anchor="start">
          {t(
            "the force is weight: F = mg, in newtons",
            "force to weight hai: F = mg, newton mein"
          )}
        </T>
      </Fade>

      {/* beat 7 — exam hygiene */}
      <Draw on={beat >= 7} delay={dl(7, 0.8)} d="M 66 480 v 56" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={84} y={500} size={14} fill={RED} script anchor="start">
          {t(
            "never mix 9.8 and 10 inside one problem — read which the question intends",
            "ek sawaal mein 9.8 aur 10 kabhi mat milao — dekho question kya chahta hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 9)}>
        <T x={84} y={526} size={14} fill={RED} script anchor="start">
          {t(
            "use it first line to last — half-and-half earns zero part marks",
            "pehli line se aakhri tak wahi — aadha-aadha karne par zero part marks"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
