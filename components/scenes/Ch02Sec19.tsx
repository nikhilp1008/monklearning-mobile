/**
 * Ch02 · Section 19 — "Signed area: displacement vs distance"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 12.5, 31.5, 51.6, 76.5, 97.2, 122, 146.9]):
 *  0 title
 *  1 picture: v-t line crossing the axis · green hatches above, red below · +/−
 *  2 below-axis explanation line
 *  3 two-readings card (signs → displacement · magnitudes → distance)
 *  4 red note (right column): the confident wrong answer
 *  5 orange dot at the crossing + "split here" label + leader
 *  6 v-t shape dictionary strip: three icon entries
 *  7 a-t chip: area = Δv
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b1 | axes: x M120,270→600 · y M120,110..430 · line (150,160)→(560,348) ·
 *       hatches x180..330 above / x430..545 below · "+" (240,240) · "−" (505,305)
 *  b2 | line cx340 bl 455
 *  b3 | box x640..1040 y124..228 · lines bl 152 / 184 / 212
 *  b4 | bar x652 y250..310 · lines st x668 bl 270 / 296
 *  b5 | dot c(390,270) r6 · label cx260 bl 330 · arrow (320,304)→(380,280)
 *  b6 | header cx540 bl 495 · icons/labels y505..532
 *  b7 | chip x250..830 y556..592
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

export default function Ch02Sec19({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the number one mistake */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={54} size={23} fill={INK} script>
          {t(
            "signed area — the number one graph mistake",
            "signed area — graph ki sabse badi galti"
          )}
        </T>
      </Fade>

      {/* beat 1 — the two triangles */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.8)}
        d={arrowD(120, 270, 600, 270)}
        stroke={INK}
        sw={2.2}
        dur={0.8}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 1.8)}
        d="M 120 430 V 110"
        stroke={INK}
        sw={2.2}
        dur={0.6}
      />
      <Fade on={beat >= 1} delay={dl(1, 2.4)}>
        <T x={612} y={276} size={14} fill={INK} anchor="start" weight={700}>
          t
        </T>
        <T x={112} y={100} size={14} fill={INK} weight={700}>
          v
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 3.4)}
        d="M 150 160 L 560 348"
        stroke={INK}
        sw={2.6}
        dur={1.4}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 5.5)}
        d="M 180 265 V 180 M 230 265 V 200 M 280 265 V 224 M 330 265 V 246"
        stroke={GREEN}
        sw={1.6}
        dur={1}
      />
      <Fade on={beat >= 1} delay={dl(1, 6.8)}>
        <T x={240} y={240} size={16} fill={GREEN} weight={800}>
          +
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 8.5)}
        d="M 430 275 V 285 M 470 275 V 303 M 510 275 V 321 M 545 275 V 337"
        stroke={RED}
        sw={1.6}
        dur={1}
      />
      <Fade on={beat >= 1} delay={dl(1, 9.8)}>
        <T x={505} y={305} size={16} fill={RED} weight={800}>
          −
        </T>
      </Fade>

      {/* beat 2 — undoing progress */}
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <T x={340} y={455} size={12} fill={RED} script>
          {t(
            "below the axis v < 0 — each sliver v·Δt subtracts: undoing progress",
            "axis ke neeche v < 0 — har sliver v·Δt ghatata hai: pragati ka ulta"
          )}
        </T>
      </Fade>

      {/* beat 3 — same picture, two readings */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 0.8)}
        d="M 652 124 h 376 q 12 0 12 12 v 80 q 0 12 -12 12 h -376 q -12 0 -12 -12 v -80 q 0 -12 12 -12"
        stroke={AMBER}
        sw={2.4}
        dur={0.7}
      />
      <Fade on={beat >= 3} delay={dl(3, 2)}>
        <T x={840} y={152} size={13} fill={GREEN} script>
          {t(
            "with signs (+ up, − down) → DISPLACEMENT",
            "signs ke saath (+ upar, − neeche) → DISPLACEMENT"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 7)}>
        <T x={840} y={184} size={13} fill={AMBER_DARK} script>
          {t("magnitudes only → DISTANCE", "sirf magnitudes → DISTANCE")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 14)}>
        <T x={840} y={212} size={11} fill={MUTED} script>
          {t(
            "sub-topic 1's split, in graphical clothing",
            "sub-topic 1 wala fark, graph ke kapdon mein"
          )}
        </T>
      </Fade>

      {/* beat 4 — the confident wrong answer */}
      <Draw on={beat >= 4} delay={dl(4, 0.8)} d="M 652 250 v 60" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 1.6)}>
        <T x={668} y={270} size={12} fill={RED} script anchor="start">
          {t(
            "add all areas as + and you've computed DISTANCE,",
            "sab areas + karke jodo to DISTANCE nikla hai,"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 6)}>
        <T x={668} y={296} size={12} fill={RED} script anchor="start">
          {t(
            "then labelled it displacement — confident, and wrong",
            "phir naam diya displacement — aatmavishwaasi, aur galat"
          )}
        </T>
      </Fade>

      {/* beat 5 — the crossing is a flag */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.8)}
        d="M 384 270 a 6 6 0 1 0 12 0 a 6 6 0 1 0 -12 0"
        stroke={AMBER}
        fill={AMBER}
        sw={2}
        dur={0.4}
      />
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <T x={260} y={330} size={12} fill={AMBER_DARK} script>
          {t(
            "crossing = reversal — split here",
            "crossing = palatna — yahin todo"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 5}
        delay={dl(5, 3.5)}
        d={arrowD(320, 304, 380, 280)}
        stroke={AMBER_DARK}
        sw={2}
        dur={0.5}
      />

      {/* beat 6 — the v-t dictionary */}
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={540} y={495} size={12} fill={MUTED} script>
          {t(
            "the v-t shape dictionary — same rule, three situations",
            "v-t shape dictionary — wahi rule, teen haalaat"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 6}
        delay={dl(6, 2.2)}
        d="M 100 520 h 60"
        stroke={INK}
        sw={2.4}
        dur={0.4}
      />
      <Fade on={beat >= 6} delay={dl(6, 2.8)}>
        <T x={175} y={525} size={12} fill={INK} script anchor="start">
          {t("uniform v → a = 0", "uniform v → a = 0")}
        </T>
      </Fade>
      <Draw
        on={beat >= 6}
        delay={dl(6, 5)}
        d="M 340 538 l 60 -30"
        stroke={INK}
        sw={2.4}
        dur={0.4}
      />
      <Fade on={beat >= 6} delay={dl(6, 5.6)}>
        <T x={420} y={525} size={12} fill={INK} script anchor="start">
          {t("straight slant → uniform a", "seedhi dhalaan → uniform a")}
        </T>
      </Fade>
      <Draw
        on={beat >= 6}
        delay={dl(6, 8)}
        d="M 635 524 h 65 M 640 508 l 52 30"
        stroke={INK}
        sw={2.2}
        dur={0.5}
      />
      <Fade on={beat >= 6} delay={dl(6, 8.8)}>
        <T x={720} y={525} size={12} fill={RED} script anchor="start">
          {t("crosses the axis → REVERSAL", "axis paar → REVERSAL")}
        </T>
      </Fade>

      {/* beat 7 — the full set */}
      <Fade on={beat >= 7} delay={dl(7, 2)}>
        <Chip x={250} y={556} w={580} h={36} fill={CREAM} stroke={GREEN} textFill={GREEN} size={14}>
          {t(
            "a-t graph: area = Δv — same slicing logic, full set complete",
            "a-t graph: area = Δv — wahi slicing logic, poora set taiyaar"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
