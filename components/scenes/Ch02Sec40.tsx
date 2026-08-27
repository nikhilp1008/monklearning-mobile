/**
 * Ch02 · Section 40 — "Example 2 [NEET speed trap]: double the speed, quadruple the distance"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 21.9, 41.7, 50.3, 70.7, 82.1, 106.9, 122.8]):
 *  0 title + question
 *  1 two bars to scale (1 : 4)
 *  2 options row A–D
 *  3 red note: the linear instinct + arrow at B
 *  4 amber line: square of speed, from equation ③
 *  5 derivation card: d = u²/2a, d ∝ v²
 *  6 green ring on D + proportionality line
 *  7 green cue: square the factor + highway reading
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  bar1 x150..350 y126..144 + label st x365 bl 140 · bar2 x150..950 y176..194 +
 *  label st x965 bl 190
 *  chips y240..276: A x120 · B x340 · C x560 · D x780 (w 180)
 *  b3 | bar x66 y305..355 · l1 st x84 bl 324 · l2 bl 350 · arrow (390,300)→(415,281)
 *  b4 | line cx540 bl 385 · b5 | card x150..660 y405..480 (bl 435 / 462)
 *  b6 | ring c(870,258) rx104 ry24 · line cx540 bl 510
 *  b7 | bar x56 y535..590 · lines st x72 bl 554 / 580
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
  ringD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch02Sec40({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const opts = ["A · d", "B · 2d", "C · 3d", "D · 4d"];

  return (
    <Scene>
      {/* beat 0 — the question */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "Example 2 [NEET] — double the speed, then what?",
            "Example 2 [NEET] — speed dugni, phir kya?"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 8)}>
        <T x={540} y={84} size={12} fill={MUTED} script>
          {t(
            "brakes stop it in d from speed v — from 2v, same brakes: stopping distance?",
            "speed v se brake maara to d mein ruki — 2v se, wahi brakes: kitni doori?"
          )}
        </T>
      </Fade>

      {/* beat 1 — drawn to scale */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.8)}
        d="M 150 126 h 200 v 18 h -200 z"
        stroke={GREEN}
        sw={2.4}
        dur={0.7}
      />
      <Fade on={beat >= 1} delay={dl(1, 1.8)}>
        <T x={365} y={140} size={12} fill={GREEN} script anchor="start">
          {t("speed v → distance d", "speed v → doori d")}
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 4)}
        d="M 150 176 h 800 v 18 h -800 z"
        stroke={RED}
        sw={2.4}
        dur={1.4}
      />
      <Fade on={beat >= 1} delay={dl(1, 5.8)}>
        <T x={965} y={190} size={12} fill={RED} script anchor="start">
          {t("2v → ?", "2v → ?")}
        </T>
      </Fade>

      {/* beat 2 — the options */}
      {opts.map((o, i) => (
        <Fade key={i} on={beat >= 2} delay={dl(2, 0.8 + i * 1.4)}>
          <Chip
            x={120 + i * 220}
            y={240}
            w={180}
            h={36}
            fill={CREAM}
            stroke={INK}
            textFill={INK}
            size={14}
            script={false}
          >
            {o}
          </Chip>
        </Fade>
      ))}

      {/* beat 3 — the linear instinct */}
      <Draw on={beat >= 3} delay={dl(3, 0.8)} d="M 66 305 v 50" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 1.6)}>
        <T x={84} y={324} size={13} fill={RED} script anchor="start">
          {t(
            "the linear instinct: 'double speed, double distance' → 2d — right in life, wrong here",
            "linear soch: 'speed dugni, doori dugni' → 2d — zindagi mein sahi, yahan galat"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 4)}
        d={arrowD(390, 300, 415, 281)}
        stroke={RED}
        sw={2}
        dur={0.5}
      />
      <Fade on={beat >= 3} delay={dl(3, 10)}>
        <T x={84} y={350} size={13} fill={RED} script anchor="start">
          {t(
            "braking distance is NOT linear in speed",
            "braking ki doori speed mein linear NAHI hai"
          )}
        </T>
      </Fade>

      {/* beat 4 — the square */}
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <T x={540} y={385} size={13} fill={AMBER_DARK} script>
          {t(
            "it grows with the SQUARE of speed — straight out of equation ③",
            "yeh speed ke VARG se badhti hai — seedha equation ③ se"
          )}
        </T>
      </Fade>

      {/* beat 5 — the one-line physics */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.6)}
        d="M 162 405 h 486 q 12 0 12 12 v 51 q 0 12 -12 12 h -486 q -12 0 -12 -12 v -51 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.2}
        dur={0.6}
      />
      <Fade on={beat >= 5} delay={dl(5, 1.8)}>
        <T x={405} y={435} size={15} fill={INK} weight={700}>
          v² = u² + 2as, v = 0 ⇒ d = u² ⁄ 2a
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 12)}>
        <T x={405} y={462} size={12} fill={GREEN} script>
          {t("same brakes ⇒ a fixed ⇒ d ∝ v²", "wahi brakes ⇒ a pakka ⇒ d ∝ v²")}
        </T>
      </Fade>

      {/* beat 6 — D, without a single number */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.8)}
        d={ringD(870, 258, 104, 24)}
        stroke={GREEN}
        sw={2.6}
        dur={0.7}
      />
      <Fade on={beat >= 6} delay={dl(6, 2.5)}>
        <T x={540} y={510} size={13} fill={GREEN} script>
          {t(
            "×2² = 4 → answer D: 4d — no numbers needed, the proportionality did the work",
            "×2² = 4 → jawaab D: 4d — koi number nahi laga, proportionality ne kaam kiya"
          )}
        </T>
      </Fade>

      {/* beat 7 — the cue and the road */}
      <Draw on={beat >= 7} delay={dl(7, 0.8)} d="M 56 535 v 52" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={72} y={554} size={13} fill={GREEN} script anchor="start">
          {t(
            "cue: 'speed ×k, same braking' → square the factor: 2 → 4× · 3 → 9×",
            "cue: 'speed ×k, wahi brake' → factor ka varg: 2 → 4× · 3 → 9×"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 10)}>
        <T x={72} y={580} size={13} fill={GREEN} script anchor="start">
          {t(
            "and the real-world reading: this is exactly why highway speed limits matter",
            "aur asli duniya ka paath: highway ke speed limits isiliye maayne rakhte hain"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
