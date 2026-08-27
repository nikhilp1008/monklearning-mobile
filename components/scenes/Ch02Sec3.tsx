/**
 * Ch02 · Section 3 — "Average over a journey vs the value at one instant"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 10.7, 30.7, 51.8, 70.4, 86.7, 111.5, 136.4]):
 *  0 title · time axis + motion curve draw
 *  1 full-journey bracket (average view) · red dot + pin (instantaneous view)
 *  2 two average cards: total distance/total time · net displacement/total time
 *  3 hatch-smear over the middle of the curve — "summary, not description"
 *  4 speed gun — wants THIS exact moment
 *  5 shrinking nested brackets toward the dot · limit card v = lim Δx/Δt = dx/dt
 *  6 red note: at an instant no path to bend ⇒ speed = |velocity| exactly
 *  7 green verdict: twins agree only at an instant
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | title mid bl 58 · axis (120,210)→(960,210) · "t" st (975,216) · curve y122..200
 *  b1 | bracket x140..930 y220..230 · label cx535 bl 252 · dot c(700,150) r5 ·
 *       arrow (780,112)→(708,141) · label cx820 bl 100
 *  b2 | cards x80..520 / x560..1000 y280..385 · headers bl 306 · nums bl 330 ·
 *       bars y345 x200..400 / x680..880 · dens bl 371
 *  b3 | hatches x445..631 y148..208 · note st? cx300 bl 412
 *  b4 | gun glyph x545..575 y410..440 · label st x600 bl 428
 *  b5 | nested spans y194/182/170 cx700 · label cx800 bl 264 · card x80..640 y460..560:
 *       formula cx360 bl 500 · sub cx360 bl 532
 *  b6 | bar x686 y470..550 · lines st x704 bl 492 / 516 / 540
 *  b7 | green ✓ at (254,584) · line cx555 bl 586
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  arrowD,
  INK,
  INK_LIGHT,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

const CURVE =
  "M 140 180 C 240 130, 320 200, 420 165 C 520 135, 600 190, 700 150 C 780 122, 860 170, 930 150";

export default function Ch02Sec3({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the stage: one motion over time */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={58} size={24} fill={INK} script>
          {t("one motion — two time windows", "ek hi motion — do time windows")}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 1.5)}
        d={arrowD(120, 210, 960, 210)}
        stroke={INK}
        sw={2.2}
        dur={0.9}
      />
      <Fade on={beat >= 0} delay={dl(0, 2.6)}>
        <T x={975} y={216} size={16} fill={INK} anchor="start" weight={700}>
          t
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 3.2)} d={CURVE} stroke={INK_LIGHT} sw={2.2} dur={1.8} />

      {/* beat 1 — the two views */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.8)}
        d="M 140 220 v 10 h 790 v -10"
        stroke={AMBER}
        sw={2.4}
        dur={1}
      />
      <Fade on={beat >= 1} delay={dl(1, 2.2)}>
        <T x={535} y={252} size={13} fill={AMBER_DARK} script>
          {t("the whole journey — AVERAGE view", "poora safar — AVERAGE nazariya")}
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 8)}
        d="M 695 150 a 5 5 0 1 0 10 0 a 5 5 0 1 0 -10 0"
        stroke={RED}
        fill={RED}
        sw={2}
        dur={0.4}
      />
      <Fade on={beat >= 1} delay={dl(1, 9.5)}>
        <T x={820} y={100} size={13} fill={RED} script>
          {t("one instant — INSTANTANEOUS", "ek pal — INSTANTANEOUS")}
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 10.5)}
        d={arrowD(780, 112, 708, 141)}
        stroke={RED}
        sw={2}
        dur={0.5}
      />

      {/* beat 2 — the two averages */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 0.6)}
        d="M 92 280 h 416 q 12 0 12 12 v 81 q 0 12 -12 12 h -416 q -12 0 -12 -12 v -81 q 0 -12 12 -12"
        stroke={AMBER}
        sw={2.4}
        dur={0.8}
      />
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <T x={300} y={306} size={14} fill={AMBER_DARK} script>
          average speed
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.8)}>
        <T x={300} y={330} size={16} fill={INK} weight={700}>
          {t("total distance", "total distance")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 3.8)} d="M 200 345 h 200" stroke={INK} sw={2} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 4.4)}>
        <T x={300} y={371} size={16} fill={INK} weight={700}>
          {t("total time", "total time")}
        </T>
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 8)}
        d="M 572 280 h 416 q 12 0 12 12 v 81 q 0 12 -12 12 h -416 q -12 0 -12 -12 v -81 q 0 -12 12 -12"
        stroke={RED}
        sw={2.4}
        dur={0.8}
      />
      <Fade on={beat >= 2} delay={dl(2, 9)}>
        <T x={780} y={306} size={14} fill={RED} script>
          average velocity
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 10.2)}>
        <T x={780} y={330} size={16} fill={INK} weight={700}>
          {t("net displacement", "net displacement")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 11.2)} d="M 680 345 h 200" stroke={INK} sw={2} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 11.8)}>
        <T x={780} y={371} size={16} fill={INK} weight={700}>
          {t("total time", "total time")}
        </T>
      </Fade>

      {/* beat 3 — the smear */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 1)}
        d="M 445 170 l 26 38 M 485 160 l 26 38 M 525 155 l 26 38 M 565 150 l 26 38 M 605 148 l 26 38"
        stroke={MUTED}
        sw={1.8}
        dur={1.2}
      />
      <Fade on={beat >= 3} delay={dl(3, 3)}>
        <T x={300} y={412} size={13} fill={MUTED} script>
          {t(
            "an average smears the middle — summary, not description",
            "average beech ka sab mila deta hai — summary, description nahi"
          )}
        </T>
      </Fade>

      {/* beat 4 — the speed gun */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.8)}
        d="M 545 410 h 30 v 14 h -30 z M 550 424 l -6 16 M 575 417 h 12"
        stroke={RED}
        sw={2}
        dur={0.7}
      />
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <T x={600} y={428} size={13} fill={RED} script anchor="start">
          {t(
            "speed gun: THIS moment, not the run-up average",
            "speed gun: YEH pal, run-up ka average nahi"
          )}
        </T>
      </Fade>

      {/* beat 5 — shrink the window: the derivative */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.8)}
        d="M 620 190 v 8 h 160 v -8"
        stroke={GREEN}
        sw={2}
        dur={0.5}
      />
      <Draw
        on={beat >= 5}
        delay={dl(5, 1.6)}
        d="M 655 178 v 8 h 90 v -8"
        stroke={GREEN}
        sw={2}
        dur={0.5}
      />
      <Draw
        on={beat >= 5}
        delay={dl(5, 2.4)}
        d="M 685 166 v 8 h 30 v -8"
        stroke={GREEN}
        sw={2}
        dur={0.5}
      />
      <Fade on={beat >= 5} delay={dl(5, 3.4)}>
        <T x={800} y={264} size={12} fill={GREEN} script>
          {t("Δt shrinks → the ratio settles", "Δt sikudta hai → ratio tik jaata hai")}
        </T>
      </Fade>
      <Draw
        on={beat >= 5}
        delay={dl(5, 5.5)}
        d="M 92 460 h 536 q 12 0 12 12 v 76 q 0 12 -12 12 h -536 q -12 0 -12 -12 v -76 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.6}
        dur={0.9}
        fill={CREAM}
      />
      <Fade on={beat >= 5} delay={dl(5, 7)}>
        <T x={360} y={500} size={22} fill={INK} weight={700}>
          v = lim Δx ⁄ Δt = dx ⁄ dt
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 9.5)}>
        <T x={360} y={532} size={13} fill={MUTED} script>
          {t(
            "as Δt → 0 — shrink the window to nothing",
            "jab Δt → 0 — window ko sikod kar kuchh nahi tak"
          )}
        </T>
      </Fade>

      {/* beat 6 — the lovely red note */}
      <Draw on={beat >= 6} delay={dl(6, 0.8)} d="M 686 470 v 80" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 1.8)}>
        <T x={704} y={492} size={13} fill={RED} script anchor="start">
          {t("at one instant — no interval,", "ek pal par — koi interval nahi,")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 5)}>
        <T x={704} y={516} size={13} fill={RED} script anchor="start">
          {t("no path left to bend ⇒", "koi raasta bacha hi nahi mudne ko ⇒")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 9)}>
        <T x={704} y={540} size={13} fill={RED} script anchor="start">
          {t(
            "inst. speed = |inst. velocity| EXACTLY",
            "inst. speed = |inst. velocity| BILKUL"
          )}
        </T>
      </Fade>

      {/* beat 7 — when the twins agree */}
      <Draw
        on={beat >= 7}
        delay={dl(7, 0.8)}
        d="M 254 584 l 6 7 l 12 -14"
        stroke={GREEN}
        sw={2.6}
        dur={0.5}
      />
      <Fade on={beat >= 7} delay={dl(7, 1.8)}>
        <T x={555} y={586} size={13} fill={GREEN} script>
          {t(
            "twins agree only AT an instant — any interval, and they part ways again",
            "twins sirf EK PAL par sehmat — koi bhi interval, aur phir alag raaste"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
