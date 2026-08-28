/**
 * Ch07 · Section 43 — "Escape velocity, from energy conservation"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 8.19, 18.77, 32.17, 47.62, 48.62, 49.62, 57.89, 63.7]):
 *  0 title
 *  1 diagram: Earth, launch arrow, "∞: U=0, KE≥0" caption
 *  2 amber: energy conserved, surface total = infinity minimum (0)
 *  3 setup line: ½mve² + (−GMm/R) = 0
 *  4 green box: ve = √(2GM/R) = √(2gR)
 *  5 red: mass cancels — independent of the body
 *  6 red: independent of direction too
 *  7 chip: ve ≈ 11.2 km/s for Earth
 *  8 green margin: ve = √2 · v(orbital)
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  Earth c(200,270) r80 · launch arrow (200,190)→(200,120) · caption cx200 bl380
 *  right col x480: b2 line bl150 · b3 line bl195 ·
 *  b4 green box x480..820 y220..272 (bl252)
 *  b5 bar x460 y295..347 lines bl315/341 · b6 line bl385
 *  b7 chip x480 y410 w300 h34 · b8 bar x66 y460..512 lines bl480/506
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
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch07Sec43({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the minimum speed to reach infinity */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "Escape velocity — the minimum speed to reach infinity",
            "Escape velocity — infinity tak pahunchne ki minimum speed"
          )}
        </T>
      </Fade>

      {/* beat 1 — launch to infinity, arriving with KE = 0 */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.6)}
        d="M 200 190 A 80 80 0 1 1 199.9 190"
        stroke={INK}
        sw={2.4}
        dur={0.7}
        fill={CREAM}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 1.6)}
        d={arrowD(200, 185, 200, 120)}
        stroke={RED}
        sw={2.4}
        dur={0.5}
      />
      <Fade on={beat >= 1} delay={dl(1, 2.6)}>
        <T x={220} y={130} size={12} fill={RED} anchor="start" weight={700}>
          v(e)
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.4)}>
        <T x={200} y={380} size={12} fill={MUTED} script>
          {t(
            "∞: U = 0, arrive with KE ≥ 0 — nothing to spare",
            "∞: U = 0, KE ≥ 0 ke saath — kuchh bacha nahi"
          )}
        </T>
      </Fade>

      {/* beat 2 — energy conservation */}
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={480} y={150} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "gravity is conservative: E(surface) = E(∞, min) = 0",
            "gravity conservative hai: E(surface) = E(∞, min) = 0"
          )}
        </T>
      </Fade>

      {/* beat 3 — set it up */}
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={480} y={195} size={15} fill={INK} anchor="start" weight={700}>
          ½·m·v(e)² + (−GMm ⁄ R) = 0
        </T>
      </Fade>

      {/* beat 4 — the result */}
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <Draw
          on={beat >= 4}
          delay={dl(4, 0.5)}
          d="M 492 220 h 316 q 12 0 12 12 v 28 q 0 12 -12 12 h -316 q -12 0 -12 -12 v -28 q 0 -12 12 -12"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.2)}>
        <T x={650} y={252} size={17} fill={INK} weight={800}>
          v(e) = √(2GM ⁄ R) = √(2gR)
        </T>
      </Fade>

      {/* beat 5 — mass cancels */}
      <Draw on={beat >= 5} delay={dl(5, 0.5)} d="M 460 295 v 52" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        <T x={478} y={315} size={13} fill={RED} script anchor="start">
          {t(
            "the body's mass CANCELS — independent of it",
            "body ka mass CANCEL ho jaata hai — us se independent"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 4)}>
        <T x={478} y={341} size={13} fill={RED} script anchor="start">
          {t(
            "a pebble and a spaceship need the SAME speed",
            "ek kankad aur ek spaceship ko SAME speed chahiye"
          )}
        </T>
      </Fade>

      {/* beat 6 — independent of direction */}
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={478} y={385} size={13} fill={RED} script anchor="start">
          {t(
            "also independent of direction — energy is a scalar",
            "direction se bhi independent — energy ek scalar hai"
          )}
        </T>
      </Fade>

      {/* beat 7 — the Earth's number */}
      <Fade on={beat >= 7} delay={dl(7, 0.5)}>
        <Chip x={480} y={410} w={300} h={34} fill={CREAM} stroke={AMBER_DARK} textFill={AMBER_DARK} size={14}>
          {t("Earth: v(e) ≈ 11.2 km/s", "Earth: v(e) ≈ 11.2 km/s")}
        </Chip>
      </Fade>

      {/* beat 8 — the link to orbital speed */}
      <Draw on={beat >= 8} delay={dl(8, 0.5)} d="M 66 460 v 52" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 8} delay={dl(8, 1.2)}>
        <T x={84} y={480} size={13} fill={GREEN} script anchor="start">
          {t(
            "v(e) = √2 · v(orbital) — memorise the link",
            "v(e) = √2 · v(orbital) — yeh link yaad rakho"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 4)}>
        <T x={84} y={506} size={13} fill={GREEN} script anchor="start">
          {t(
            "know one, and you instantly know the other",
            "ek jaano, dusra turant pata"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
