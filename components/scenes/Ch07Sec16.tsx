/**
 * Ch07 · Section 16 — "The shell theorem: why planets are easy"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 8.45, 20.31, 27.56, 35.58, 51.46, 59.05, 70.49]):
 *  0 title
 *  1 left shell + outside point pulled toward centre ("acts as a point")
 *  2 right shell + off-centre inside point
 *  3 E = 0 inside, everywhere (label + caption)
 *  4 near patch (small, close) vs far patch (large, far) + equal-opposite arrows
 *  5 nested shells planet (3 concentric circles)
 *  6 outside dot + arrow; two lines: outside acts as point / tunnelling in, shells above stop
 *  7 green margin: layered simplicity
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52
 *  b1 | shell c(230,210) r85 sw3 · centre dot r4 + "saara mass yahan" bl235 (11) ·
 *      P1 (420,150) r5 · arrow (408,157)→(360,172) · "outside point" cx420 bl130 ·
 *      caption cx230 bl330
 *  b2 | shell c(720,210) r85 sw3 · P2 (760,240) r5
 *  b3 | "E = 0" cx690 bl255 (15) · caption cx720 bl330
 *  b4 | near patch arc θ15..60 sw5 · far patch arc θ170..265 sw5 ·
 *      arrows (766,244)→(783,257) / (754,236)→(737,223) · caption cx720 bl358
 *  b5 | circles c(230,470) r20/38/56 · label cx230 bl555
 *  b6 | dot (360,440) · arrow (348,443)→(300,454) · lines st x420 bl470 / 496
 *  b7 | bar x660 y530..570 · line st x678 bl552
 */

import React from "react";
import { Circle } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  arrowD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch07Sec16({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the magical property */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "The shell theorem — one magical property of spheres",
            "Shell theorem — spheres ki ek jaadui property"
          )}
        </T>
      </Fade>

      {/* beat 1 — outside: a point at the centre */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 1)}
        d="M 230 125 A 85 85 0 1 1 229.9 125"
        stroke={INK}
        sw={3}
        dur={0.9}
      />
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <Circle cx={230} cy={210} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.6)}>
        <T x={230} y={235} size={11} fill={MUTED} script>
          {t("all the mass, here", "saara mass yahan")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.4)}>
        <Circle cx={420} cy={150} r={5} fill={INK} />
        <T x={420} y={130} size={12} fill={INK} script>
          {t("outside point", "bahar ka point")}
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 4.2)}
        d={arrowD(408, 157, 360, 172)}
        stroke={GREEN}
        sw={2.2}
        dur={0.4}
      />
      <Fade on={beat >= 1} delay={dl(1, 6)}>
        <T x={230} y={330} size={12} fill={GREEN} script>
          {t(
            "pulls as if it were a point at the centre",
            "aise kheenchta hai jaise centre par point ho"
          )}
        </T>
      </Fade>

      {/* beat 2 — inside, off-centre */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 1)}
        d="M 720 125 A 85 85 0 1 1 719.9 125"
        stroke={INK}
        sw={3}
        dur={0.9}
      />
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <Circle cx={760} cy={240} r={5} fill={INK} />
      </Fade>

      {/* beat 3 — zero, everywhere inside */}
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={690} y={255} size={15} fill={GREEN} weight={800}>
          E = 0
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.5)}>
        <T x={720} y={330} size={12} fill={RED} script>
          {t(
            "zero EVERYWHERE inside — perfectly balanced",
            "andar HAR jagah zero — perfectly balanced"
          )}
        </T>
      </Fade>

      {/* beat 4 — why: the patch trade-off */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 1)}
        d="M 802.1 232 A 85 85 0 0 1 762.5 283.6"
        stroke={AMBER}
        sw={5}
        dur={0.5}
      />
      <Draw
        on={beat >= 4}
        delay={dl(4, 2.5)}
        d="M 636.3 224.8 A 85 85 0 0 1 712.6 125.3"
        stroke={AMBER}
        sw={5}
        dur={0.7}
      />
      <Draw
        on={beat >= 4}
        delay={dl(4, 4)}
        d={arrowD(766, 244, 783, 257)}
        stroke={RED}
        sw={2}
        dur={0.3}
      />
      <Draw
        on={beat >= 4}
        delay={dl(4, 4.6)}
        d={arrowD(754, 236, 737, 223)}
        stroke={RED}
        sw={2}
        dur={0.3}
      />
      <Fade on={beat >= 4} delay={dl(4, 6.5)}>
        <T x={720} y={358} size={12} fill={AMBER_DARK} script>
          {t(
            "small-but-close ↔ large-but-far: they cancel exactly",
            "chhota-par-kareeb ↔ bada-par-door: exact cancel"
          )}
        </T>
      </Fade>

      {/* beat 5 — a planet is nested shells */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.8)}
        d="M 230 450 A 20 20 0 1 1 229.9 450"
        stroke={INK}
        sw={2.2}
        dur={0.4}
      />
      <Draw
        on={beat >= 5}
        delay={dl(5, 1.6)}
        d="M 230 432 A 38 38 0 1 1 229.9 432"
        stroke={INK}
        sw={2.2}
        dur={0.5}
      />
      <Draw
        on={beat >= 5}
        delay={dl(5, 2.4)}
        d="M 230 414 A 56 56 0 1 1 229.9 414"
        stroke={INK}
        sw={2.2}
        dur={0.6}
      />
      <Fade on={beat >= 5} delay={dl(5, 3.5)}>
        <T x={230} y={555} size={12} fill={INK} script>
          {t("a planet = a stack of nested shells", "planet = nested shells ka dher")}
        </T>
      </Fade>

      {/* beat 6 — outside a point; inside, the upper shells go quiet */}
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <Circle cx={360} cy={440} r={5} fill={INK} />
      </Fade>
      <Draw
        on={beat >= 6}
        delay={dl(6, 1.2)}
        d={arrowD(348, 443, 300, 454)}
        stroke={GREEN}
        sw={2.2}
        dur={0.4}
      />
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={420} y={470} size={13} fill={INK} script anchor="start">
          {t(
            "from outside: every shell = a point → the whole planet too",
            "bahar se: har shell = centre par point → poora planet bhi"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 6)}>
        <T x={420} y={496} size={13} fill={INK} script anchor="start">
          {t(
            "tunnelling in: the shells above you stop pulling",
            "surang mein: upar wale shells kheenchna band"
          )}
        </T>
      </Fade>

      {/* beat 7 — the gift */}
      <Draw on={beat >= 7} delay={dl(7, 0.6)} d="M 660 530 v 40" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.4)}>
        <T x={678} y={552} size={13} fill={GREEN} script anchor="start">
          {t(
            "messy geometry → clean, layered simplicity",
            "messy geometry → saaf, partdaar simplicity"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
