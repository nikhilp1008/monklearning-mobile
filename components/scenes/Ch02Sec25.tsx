/**
 * Ch02 · Section 25 — "Example 2 [NEET speed trap]: the straight, inclined x-t line"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 14.4, 33.1, 47.8, 66.7, 91.5, 112.3, 125.7]):
 *  0 title + question line
 *  1 graph: axes + inclined line + red same-run/same-rise staircases
 *  2 options column A–D
 *  3 red note: the "goes up ⇒ speeding up" instinct
 *  4 amber line: the vertical axis is POSITION
 *  5 green retrace + "slope = v ⇒ constant" label
 *  6 chip B restroked green + verdict line
 *  7 crosses on A/C/D + cue line
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  graph: axes o(140,440)→(600,440)/(140,150) · line (170,420)→(560,190) ·
 *  staircases M230,385 H310 V338 · M390,291 H470 V244 · run label cx270 bl 405
 *  chips x650..1030 h34: A y150 · B y196 · C y242 · D y288
 *  b5 label cx330 bl 140 · b3 bar x66 y474..500, l st x84 bl 492 ·
 *  b4 bl 522 · b6 bl 548 · b7 bl 576
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
  crossD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch02Sec25({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const opts = [
    t("A · speeding up", "A · tez ho raha hai"),
    t("B · uniform velocity", "B · uniform velocity"),
    t("C · uniformly accelerating", "C · uniform acceleration"),
    t("D · at rest", "D · at rest"),
  ];

  return (
    <Scene>
      {/* beat 0 — the deceptively simple question */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "Example 2 [NEET] — the straight, inclined x-t line",
            "Example 2 [NEET] — seedhi, jhuki hui x-t line"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 6)}>
        <T x={540} y={84} size={12} fill={MUTED} script>
          {t(
            "x-t graph is a straight line at a fixed angle — the body is doing what?",
            "x-t graph ek fixed angle par seedhi line hai — body kya kar rahi hai?"
          )}
        </T>
      </Fade>

      {/* beat 1 — the picture with construction marks */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.8)}
        d={arrowD(140, 440, 600, 440)}
        stroke={INK}
        sw={2.2}
        dur={0.8}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 1.8)}
        d={arrowD(140, 440, 140, 150)}
        stroke={INK}
        sw={2.2}
        dur={0.7}
      />
      <Fade on={beat >= 1} delay={dl(1, 2.4)}>
        <T x={612} y={446} size={14} fill={INK} anchor="start" weight={700}>
          t
        </T>
        <T x={132} y={138} size={14} fill={INK} weight={700}>
          x
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 3.4)}
        d="M 170 420 L 560 190"
        stroke={INK}
        sw={2.8}
        dur={1.2}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 6)}
        d="M 230 385 H 310 V 338"
        stroke={RED}
        sw={1.8}
        dur={0.7}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 7.5)}
        d="M 390 291 H 470 V 244"
        stroke={RED}
        sw={1.8}
        dur={0.7}
      />
      <Fade on={beat >= 1} delay={dl(1, 9)}>
        <T x={270} y={405} size={11} fill={RED} script>
          {t("same run → same rise", "same run → same rise")}
        </T>
      </Fade>

      {/* beat 2 — the options */}
      {opts.map((o, i) => (
        <Fade key={i} on={beat >= 2} delay={dl(2, 0.8 + i * 1.4)}>
          <Chip
            x={650}
            y={150 + i * 46}
            w={380}
            h={34}
            fill={CREAM}
            stroke={INK}
            textFill={INK}
            size={13}
            script={false}
          >
            {o}
          </Chip>
        </Fade>
      ))}

      {/* beat 3 — the instinct */}
      <Draw on={beat >= 3} delay={dl(3, 0.8)} d="M 66 474 v 26" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 1.6)}>
        <T x={84} y={492} size={13} fill={RED} script anchor="start">
          {t(
            "the trap: 'it goes UP ⇒ speeding up' — natural, and completely wrong",
            "trap: 'UPAR ja rahi hai ⇒ tez ho rahi hai' — swabhavik, aur poora galat"
          )}
        </T>
      </Fade>

      {/* beat 4 — read the axis */}
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <T x={84} y={522} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "the vertical axis is POSITION — rising = moving forward, nothing more",
            "vertical axis POSITION hai — chadhna = aage badhna, bas itna"
          )}
        </T>
      </Fade>

      {/* beat 5 — the fast solution */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.8)}
        d="M 170 420 L 560 190"
        stroke={GREEN}
        sw={3.6}
        dur={1}
      />
      <Fade on={beat >= 5} delay={dl(5, 2.5)}>
        <T x={330} y={140} size={13} fill={GREEN} script>
          {t(
            "slope = v · straight ⇒ constant slope ⇒ constant v",
            "slope = v · seedhi ⇒ constant slope ⇒ constant v"
          )}
        </T>
      </Fade>

      {/* beat 6 — B it is */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.8)}
        d="M 662 196 h 356 q 12 0 12 12 v 10 q 0 12 -12 12 h -356 q -12 0 -12 -12 v -10 q 0 -12 12 -12"
        stroke={GREEN}
        sw={3}
        dur={0.6}
      />
      <Fade on={beat >= 6} delay={dl(6, 2.5)}>
        <T x={84} y={548} size={13} fill={GREEN} script anchor="start">
          {t(
            "B — uniform velocity ⇒ a = 0: neither speeding up nor slowing down",
            "B — uniform velocity ⇒ a = 0: na tez ho raha, na dheema"
          )}
        </T>
      </Fade>

      {/* beat 7 — the two-second cue */}
      <Draw
        on={beat >= 7}
        delay={dl(7, 0.8)}
        d={crossD(650, 150, 380, 34)}
        stroke={RED}
        sw={2.2}
        dur={0.5}
      />
      <Draw
        on={beat >= 7}
        delay={dl(7, 1.6)}
        d={crossD(650, 242, 380, 34)}
        stroke={RED}
        sw={2.2}
        dur={0.5}
      />
      <Draw
        on={beat >= 7}
        delay={dl(7, 2.4)}
        d={crossD(650, 288, 380, 34)}
        stroke={RED}
        sw={2.2}
        dur={0.5}
      />
      <Fade on={beat >= 7} delay={dl(7, 4.5)}>
        <T x={84} y={576} size={13} fill={GREEN} script anchor="start">
          {t(
            "cue: straight x-t = steady speed · only a CURVED x-t means acceleration",
            "cue: seedhi x-t = steady speed · sirf CURVED x-t ka matlab acceleration"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
