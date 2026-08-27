/**
 * Ch02 · Section 20 — "The ladder: slope steps down, area climbs up"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 11.8, 31.9, 47.4, 64.5, 83.5, 107.2, 129.6]):
 *  0 title
 *  1 three boxes x · v · a with names
 *  2 red slope arrows rightward + labels
 *  3 green area arrows leftward + labels
 *  4 chant chip: slope steps DOWN · area climbs UP
 *  5 real-reasoning card: derivative / integral, literally
 *  6 red note: inverse operations — fundamental theorem in physics clothes
 *  7 warning: area gives Δ, never the absolute — add v₀ / x₀
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  boxes 90×70 y170..240 at cx 260/540/820 · letters bl 215 · names bl 262
 *  red arrows y150 (320→480, 600→760) · labels bl 134
 *  green arrows y290 (760→600, 480→320) · labels bl 316
 *  b4 | chip x330..750 y350..388
 *  b5 | box x120..560 y410..490 · lines bl 438 / 468
 *  b6 | bar x610 y415..480 · lines st x626 bl 436 / 462
 *  b7 | bar x66 y510..586 · lines st x84 bl 530 / 556 / 582
 */

import React from "react";
import { G } from 'react-native-svg';
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

const BOX = (cx: number) =>
  `M ${cx - 33} 170 h 66 q 12 0 12 12 v 46 q 0 12 -12 12 h -66 q -12 0 -12 -12 v -46 q 0 -12 12 -12`;

export default function Ch02Sec20({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — carry one thing */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={54} size={23} fill={INK} script>
          {t(
            "the ladder — if you carry one thing, carry this",
            "ladder — ek hi cheez le jaani ho, to yahi"
          )}
        </T>
      </Fade>

      {/* beat 1 — three rungs */}
      {[260, 540, 820].map((cx, i) => (
        <G key={i}>
          <Draw
            on={beat >= 1}
            delay={dl(1, 0.8 + i * 2.2)}
            d={BOX(cx)}
            stroke={INK}
            sw={2.6}
            dur={0.6}
          />
          <Fade on={beat >= 1} delay={dl(1, 1.6 + i * 2.2)}>
            <T x={cx} y={215} size={30} fill={INK} weight={800}>
              {["x", "v", "a"][i]}
            </T>
          </Fade>
          <Fade on={beat >= 1} delay={dl(1, 2.2 + i * 2.2)}>
            <T x={cx} y={262} size={11} fill={MUTED} script>
              {
                [
                  t("position", "position"),
                  t("velocity", "velocity"),
                  t("acceleration", "acceleration"),
                ][i]
              }
            </T>
          </Fade>
        </G>
      ))}

      {/* beat 2 — slope steps right (down the chain) */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 0.8)}
        d={arrowD(320, 150, 480, 150)}
        stroke={RED}
        sw={2.8}
        dur={0.7}
      />
      <Fade on={beat >= 2} delay={dl(2, 1.8)}>
        <T x={400} y={134} size={13} fill={RED} script>
          slope
        </T>
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 5)}
        d={arrowD(600, 150, 760, 150)}
        stroke={RED}
        sw={2.8}
        dur={0.7}
      />
      <Fade on={beat >= 2} delay={dl(2, 6)}>
        <T x={680} y={134} size={13} fill={RED} script>
          slope
        </T>
      </Fade>

      {/* beat 3 — area climbs back */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 0.8)}
        d={arrowD(760, 290, 600, 290)}
        stroke={GREEN}
        sw={2.8}
        dur={0.7}
      />
      <Fade on={beat >= 3} delay={dl(3, 1.8)}>
        <T x={680} y={316} size={13} fill={GREEN} script>
          area
        </T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 5)}
        d={arrowD(480, 290, 320, 290)}
        stroke={GREEN}
        sw={2.8}
        dur={0.7}
      />
      <Fade on={beat >= 3} delay={dl(3, 6)}>
        <T x={400} y={316} size={13} fill={GREEN} script>
          area
        </T>
      </Fade>

      {/* beat 4 — the chant */}
      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <Chip x={330} y={350} w={420} h={38} fill={CREAM} stroke={AMBER} textFill={AMBER_DARK} size={15}>
          {t("slope steps DOWN · area climbs UP", "slope neeche utarta · area upar chadhta")}
        </Chip>
      </Fade>

      {/* beat 5 — not a mnemonic */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.8)}
        d="M 132 410 h 416 q 12 0 12 12 v 56 q 0 12 -12 12 h -416 q -12 0 -12 -12 v -56 q 0 -12 12 -12"
        stroke={AMBER}
        sw={2.2}
        dur={0.7}
      />
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <T x={340} y={438} size={13} fill={INK} script>
          {t(
            "slope = derivative — dx⁄dt, literally",
            "slope = derivative — dx⁄dt, sach mein"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 8)}>
        <T x={340} y={468} size={13} fill={INK} script>
          {t(
            "area = integral — ∫ v dt, literally",
            "area = integral — ∫ v dt, sach mein"
          )}
        </T>
      </Fade>

      {/* beat 6 — why it works both ways */}
      <Draw on={beat >= 6} delay={dl(6, 0.8)} d="M 610 415 v 62" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={626} y={436} size={12} fill={RED} script anchor="start">
          {t(
            "differentiate ↓ and integrate ↑ undo each other —",
            "differentiate ↓ aur integrate ↑ ek doosre ko kaatte hain —"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 8)}>
        <T x={626} y={462} size={12} fill={RED} script anchor="start">
          {t(
            "the fundamental theorem of calculus, in physics clothes",
            "calculus ka fundamental theorem, physics ke kapdon mein"
          )}
        </T>
      </Fade>

      {/* beat 7 — the strong-student trap */}
      <Draw on={beat >= 7} delay={dl(7, 0.8)} d="M 66 510 v 78" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={84} y={530} size={13} fill={RED} script anchor="start">
          {t(
            "going UP you need the starting value: area under a-t = Δv, NOT v",
            "UPAR jaate waqt shuruaati value chahiye: a-t ka area = Δv, v NAHI"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 7)}>
        <T x={84} y={556} size={13} fill={RED} script anchor="start">
          {t(
            "actual v = v₀ + Δv · actual x = x₀ + area under v-t",
            "asli v = v₀ + Δv · asli x = x₀ + v-t ka area"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 13)}>
        <T x={84} y={582} size={13} fill={GREEN} script anchor="start">
          {t(
            "a beautiful area minus the initial condition = a lost mark",
            "sundar area minus initial condition = kata hua mark"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
