/**
 * Ch03 · Section 16 — "The dot product: how much of one vector lies along another"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 9.6, 27.5, 45.6, 65.8, 79.5, 101.2, 126.0]):
 *  0 heading
 *  1 archetype: work = along-part only
 *  2 thela diagram: F at angle, Fx/Fy split, cart + ground
 *  3 horizontal slice works, vertical is wasted
 *  4 formula box: A·B = AB cosθ
 *  5 projection = shadow
 *  6 red: plain NUMBER
 *  7 green: ⊥ → zero (bag vs gravity)
 *
 * Layout plan (Kalam bl −1.3s..+0.5s · Anek bl −0.78s..+0.31s):
 *  b1 | line cx540 bl 84 s13 · underline M300 94 h480
 *  b2 | decomp: O(210,250) · F→(290,320) lbl (232,296) s13 · Fx→(290,250)
 *       lbl st (298,255) · Fy→(210,320) lbl end (200,290) · arc r30 sweep1
 *       θ (262,276) s11 · cart x120..300 y340..395 · wheels (160,405)/(260,405) r10 ·
 *       ground M80 415 h420 · move arrow (320,370)→(390,370) lbl cx355 bl 392 s11
 *  b3 | captions cx240 bl 440 / 464 s12
 *  b4 | box x580..1000 y150..200 text cx790 bl 182 s18 · caption cx790 bl 224 s11
 *  b5 | st x580 bl 264 s13 · caption st x580 bl 288 s11
 *  b6 | bar M566 320 v44 · lines st x580 bl 338 / 362 s12
 *  b7 | bar M566 400 v56 · lines st x580 bl 418 / 442 / 466 s12
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
  INK_LIGHT,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch03Sec16({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — heading */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={48} size={20} fill={INK} script>
          {t(
            "DOT PRODUCT — how much lies ALONG",
            "DOT PRODUCT — kitna SAATH mein hai"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.2)} d="M 340 62 h 400" stroke={AMBER} sw={2.2} dur={0.6} />

      {/* beat 1 — the archetype */}
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={540} y={84} size={13} fill={INK} script>
          {t(
            "the archetype is WORK: only the part of the force ALONG the motion does any work",
            "archetype hai WORK: force ka sirf woh hissa jo motion ke SAATH hai, kaam karta hai"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2.2)} d="M 300 94 h 480" stroke={AMBER} sw={1.8} dur={0.6} />

      {/* beat 2 — the thela */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 0.8)}
        d="M 132 340 h 156 q 12 0 12 12 v 31 q 0 12 -12 12 h -156 q -12 0 -12 -12 v -31 q 0 -12 12 -12"
        stroke={INK}
        sw={2.4}
        dur={0.8}
      />
      <Fade on={beat >= 2} delay={dl(2, 1.8)}>
        <Circle cx={160} cy={405} r={10} fill="none" stroke={INK} strokeWidth={2.2} />
        <Circle cx={260} cy={405} r={10} fill="none" stroke={INK} strokeWidth={2.2} />
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 2.5)} d="M 80 415 h 420" stroke={MUTED} sw={1.6} dur={0.6} />
      <Fade on={beat >= 2} delay={dl(2, 3)}>
        <T x={210} y={372} size={12} fill={INK_LIGHT} script>
          {t("loaded thela", "bhara thela")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 3.8)} d={arrowD(210, 250, 290, 320)} stroke={INK} sw={2.8} dur={0.7} />
      <Fade on={beat >= 2} delay={dl(2, 4.6)}>
        <T x={232} y={296} size={13} fill={INK} weight={700}>F</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 5.4)} d={arrowD(210, 250, 290, 250)} stroke={GREEN} sw={2.8} dur={0.6} />
      <Fade on={beat >= 2} delay={dl(2, 6)}>
        <T x={298} y={255} size={12} fill={GREEN} weight={700} anchor="start">Fx</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 6.8)} d={arrowD(210, 250, 210, 320)} stroke={RED} sw={2.8} dur={0.6} />
      <Fade on={beat >= 2} delay={dl(2, 7.4)}>
        <T x={200} y={290} size={12} fill={RED} weight={700} anchor="end">Fy</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 8.2)} d="M 240 250 A 30 30 0 0 1 232.6 269.7" stroke={AMBER_DARK} sw={2} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 8.8)}>
        <T x={262} y={276} size={11} fill={AMBER_DARK} weight={700}>θ</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 9.8)} d={arrowD(320, 370, 390, 370)} stroke={GREEN} sw={2.2} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 10.4)}>
        <T x={355} y={392} size={11} fill={GREEN} script>
          {t("moves this way", "is taraf chalta hai")}
        </T>
      </Fade>

      {/* beat 3 — which slice works */}
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={240} y={440} size={12} fill={GREEN} script>
          {t(
            "the horizontal slice — that alone moves it",
            "horizontal hissa — sirf wahi use chalata hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 6)}>
        <T x={240} y={464} size={12} fill={RED} script>
          {t(
            "the vertical slice presses the road — zero use",
            "vertical hissa sadak ko dabata hai — zero fayda"
          )}
        </T>
      </Fade>

      {/* beat 4 — the definition */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.6)}
        d="M 592 150 h 396 q 12 0 12 12 v 26 q 0 12 -12 12 h -396 q -12 0 -12 -12 v -26 q 0 -12 12 -12"
        stroke={AMBER_DARK}
        sw={2.4}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 4} delay={dl(4, 1.6)}>
        <T x={790} y={182} size={18} fill={INK} weight={800}>
          A · B = A B cos θ
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 6)}>
        <T x={790} y={224} size={11} fill={MUTED} script>
          {t(
            "two sizes, scaled by the agreement factor",
            "do sizes, agreement factor se ghataye hue"
          )}
        </T>
      </Fade>

      {/* beat 5 — the shadow */}
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={580} y={264} size={13} fill={INK} weight={700} anchor="start">
          {t(
            "B cosθ = B's shadow on A — the PROJECTION",
            "B cosθ = A par B ki parchhai — PROJECTION"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 6)}>
        <T x={580} y={288} size={11} fill={AMBER_DARK} script anchor="start">
          {t(
            "dot = |A| × (how much of B lies along A) — nothing more mysterious",
            "dot = |A| × (B ka kitna A ke saath hai) — bas itna hi raaz hai"
          )}
        </T>
      </Fade>

      {/* beat 6 — a plain number */}
      <Draw on={beat >= 6} delay={dl(6, 0.8)} d="M 566 320 v 44" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={580} y={338} size={12} fill={RED} script anchor="start">
          {t(
            "the answer is a plain NUMBER — “agreement” has no direction",
            "jawaab ek seedha NUMBER hai — “agreement” ki koi direction nahi"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 8)}>
        <T x={580} y={362} size={12} fill={RED} script anchor="start">
          {t(
            "work = joules, directionless · an î or ĵ inside a dot = instant error",
            "work = joule, bina direction · dot ke andar î ya ĵ = seedha error"
          )}
        </T>
      </Fade>

      {/* beat 7 — the perpendicular collapse */}
      <Draw on={beat >= 7} delay={dl(7, 0.8)} d="M 566 400 v 56" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={580} y={418} size={12} fill={GREEN} script anchor="start">
          {t(
            "⊥ → cos 90° = 0 → A·B = 0: no agreement to measure",
            "⊥ → cos 90° = 0 → A·B = 0: naapne ko agreement hi nahi"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 9)}>
        <T x={580} y={442} size={12} fill={GREEN} script anchor="start">
          {t(
            "carry a bag across a room: gravity ⊥ motion → zero work",
            "bag lekar kamra paar karo: gravity ⊥ motion → zero work"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 15)}>
        <T x={580} y={466} size={12} fill={INK} script anchor="start">
          {t(
            "the dot product is honest about it",
            "dot product is baare mein imaandaar hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
