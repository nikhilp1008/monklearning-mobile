/**
 * Ch04 · Section 2 — "Momentum, and force as the rate that changes it"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 13.4, 25.5, 34.0, 46.1, 54.8, 66.5, 81.6]):
 *  0 title + p = m·v hero box (left col) + "both count" label
 *  1 vector hats over p and v + marks note
 *  2 not mass alone ✗ · not speed alone ✗ · PRODUCT ✓
 *  3 demo: slow truck vs fast bike, comparable momentum chip
 *  4 right col heading: Second Law, true form
 *  5 F = dp⁄dt hero box + doubling note + "complete" note
 *  6 red margin: force = interaction, not possession
 *  7 impulse payoff: violent-instant line + IMPULSE chip + closing
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl 52
 *  L col | box x192..358 y104..152 · "p = m·v" cx275 bl 138 sz30 ·
 *    label cx275 bl 180 · hats y96 over p(~228)/v(~316) · note cx275 bl 203 ·
 *    b2 chunks st x85/x255/x430 bl 242
 *  R col | head cx790 bl 110 · box x692..888 y128..176 · "F = dp⁄dt" bl 162 ·
 *    notes cx790 bl 205 / 232
 *  demo | ground y352 x110..970 · truck x130..320 y276..336 wheels cy344 ·
 *    "m = 3000 kg" (205,310) · arrow (330,316)→(382,316) · "5 km⁄h" cx356 bl 298 ·
 *    bike x640..700 y314..336 wheels cy344 · arrow (710,316)→(830,316) ·
 *    "80 km⁄h" cx770 bl 298 · "m = 150 kg" cx770 bl 336 · chip x400..680 y364..394
 *  b6 | bar x66 y404..462 · lines st x84 bl 424 / 450
 *  b7 | line st x84 bl 508 · chip x600..910 y488..522 · closing cx540 bl 560
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
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

const circleD = (cx: number, cy: number, r: number) =>
  `M ${cx - r} ${cy} a ${r} ${r} 0 1 0 ${2 * r} 0 a ${r} ${r} 0 1 0 ${-2 * r} 0`;

export default function Ch04Sec2({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — momentum, the quantity itself */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "Momentum — how much motion a body carries",
            "Momentum — body kitna motion carry karti hai"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 3)}
        d="M 204 104 h 142 q 12 0 12 12 v 24 q 0 12 -12 12 h -142 q -12 0 -12 -12 v -24 q 0 -12 12 -12"
        stroke={AMBER}
        sw={2.6}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 0} delay={dl(0, 4)}>
        <T x={275} y={138} size={30} fill={INK} weight={800}>
          p = m·v
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 8)}>
        <T x={275} y={180} size={13} fill={AMBER_DARK} script>
          {t(
            "m: how heavy · v: how fast — both count",
            "m: kitna bhaari · v: kitna tez — dono ginte hain"
          )}
        </T>
      </Fade>

      {/* beat 1 — the vector hats */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 1.2)}
        d={arrowD(218, 96, 240, 96)}
        stroke={RED}
        sw={2.2}
        dur={0.3}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 1.8)}
        d={arrowD(306, 96, 328, 96)}
        stroke={RED}
        sw={2.2}
        dur={0.3}
      />
      <Fade on={beat >= 1} delay={dl(1, 4)}>
        <T x={275} y={203} size={13} fill={RED} script>
          {t(
            "vector nature = where the marks are won",
            "vector nature = yahin marks jeete-haare jaate hain"
          )}
        </T>
      </Fade>

      {/* beat 2 — the product, not the parts */}
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={85} y={242} size={14} fill={RED} script anchor="start">
          {t("not speed alone ✗", "sirf speed nahi ✗")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.5)}>
        <T x={255} y={242} size={14} fill={RED} script anchor="start">
          {t("not mass alone ✗", "sirf mass nahi ✗")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 5)}>
        <T x={430} y={242} size={14} fill={GREEN} script anchor="start">
          {t("the PRODUCT ✓", "PRODUCT ✓")}
        </T>
      </Fade>

      {/* beat 3 — truck vs bike */}
      <Draw on={beat >= 3} delay={dl(3, 0.5)} d="M 110 352 H 970" stroke={INK} sw={2.4} dur={0.6} />
      <Draw
        on={beat >= 3}
        delay={dl(3, 1.2)}
        d={`M 130 276 h 150 v 60 h -150 z M 280 296 h 40 v 40 h -40 z ${circleD(165, 344, 8)} ${circleD(245, 344, 8)} ${circleD(300, 344, 8)}`}
        stroke={INK}
        sw={2.4}
        dur={1}
      />
      <Fade on={beat >= 3} delay={dl(3, 2.4)}>
        <T x={205} y={310} size={13} fill={INK} weight={700}>
          m = 3000 kg
        </T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 3.2)}
        d={arrowD(330, 316, 382, 316)}
        stroke={AMBER}
        sw={2.6}
        dur={0.3}
      />
      <Fade on={beat >= 3} delay={dl(3, 3.8)}>
        <T x={356} y={298} size={13} fill={AMBER_DARK} script>
          5 km⁄h
        </T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 5)}
        d={`M 640 314 h 60 v 22 h -60 z M 696 314 l 10 -12 ${circleD(650, 344, 8)} ${circleD(690, 344, 8)}`}
        stroke={INK}
        sw={2.4}
        dur={0.7}
      />
      <Fade on={beat >= 3} delay={dl(3, 5.8)}>
        <T x={770} y={336} size={13} fill={INK} weight={700} anchor="middle">
          m = 150 kg
        </T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 6.4)}
        d={arrowD(710, 316, 830, 316)}
        stroke={AMBER}
        sw={2.6}
        dur={0.4}
      />
      <Fade on={beat >= 3} delay={dl(3, 7)}>
        <T x={770} y={298} size={13} fill={AMBER_DARK} script>
          80 km⁄h
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 9)}>
        <Chip x={400} y={364} w={280} h={30} fill={CREAM} stroke={GREEN} textFill={GREEN} size={14}>
          {t("comparable momentum!", "momentum comparable!")}
        </Chip>
      </Fade>

      {/* beat 4 — the second law arrives */}
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={790} y={110} size={16} fill={AMBER_DARK} script>
          {t("Second Law — the TRUE form", "Second Law — asli waala roop")}
        </T>
      </Fade>

      {/* beat 5 — F = dp/dt */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.8)}
        d="M 704 128 h 172 q 12 0 12 12 v 24 q 0 12 -12 12 h -172 q -12 0 -12 -12 v -24 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.6}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={790} y={162} size={30} fill={INK} weight={800}>
          F = dp⁄dt
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 5)}>
        <T x={790} y={205} size={13} fill={INK} script>
          {t(
            "push 2× as hard → p changes 2× as fast",
            "2× zor se push → p 2× tezi se badlega"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 8.5)}>
        <T x={790} y={232} size={13} fill={GREEN} script>
          {t("the law, complete — nothing assumed", "poora law — koi assumption nahi")}
        </T>
      </Fade>

      {/* beat 6 — force is an interaction */}
      <Draw on={beat >= 6} delay={dl(6, 0.8)} d="M 66 404 v 58" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={84} y={424} size={14} fill={RED} script anchor="start">
          {t(
            "force is not a thing a body HAS in its pocket",
            "force koi cheez nahi jo body jeb mein rakhti hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 6)}>
        <T x={84} y={450} size={14} fill={RED} script anchor="start">
          {t(
            "it is an INTERACTION — and interactions change momentum",
            "ye ek INTERACTION hai — jo momentum badalta hai"
          )}
        </T>
      </Fade>

      {/* beat 7 — impulse, the payoff */}
      <Fade on={beat >= 7} delay={dl(7, 2)}>
        <T x={84} y={508} size={13} fill={INK} script anchor="start">
          {t(
            "bat on ball · car on barrier — a short, violent instant",
            "bat se ball · car se barrier — chhota, violent instant"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 8)}>
        <Chip x={600} y={488} w={310} h={34} fill={CREAM} stroke={GREEN} textFill={GREEN} size={16}>
          {t("IMPULSE J = Δp — the total kick", "IMPULSE J = Δp — total kick")}
        </Chip>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 12)}>
        <T x={540} y={560} size={13} fill={GREEN} script>
          {t(
            "stop tracking F each microsecond — count only the total kick",
            "har microsecond ki F chhodo — bas total kick gino"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
