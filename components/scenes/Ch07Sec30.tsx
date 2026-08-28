/**
 * Ch07 · Section 30 — "g with altitude: exact form and the small-height rule"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 9.73, 20.99, 34.65, 46.51, 57.94, 58.94, 59.94]):
 *  0 title + Earth arc, body at height h, R+h dimension
 *  1 g–h graph: exact curve + straight tangent (with labels)
 *  2 green box: exact form
 *  3 amber: from outside, still a point → replace R by R+h
 *  4 green box: small-h approximation
 *  5 red: the factor is 2h/R, not h/R
 *  6 chip: 1% up → 2% drop
 *  7 red margin: fails for satellites
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  Earth arc c(190,470) r120 (top y350) · body sq (182..198, 236..252) ·
 *   dim M190 254 V348 + "h" (206,300) · "R+h" st (120,205)
 *  graph axes (420,300)→(760,300)/(420,140) · exact M420 160 Q520 240 758 285 ·
 *   tangent M420 160 L640 300 · labels "exact" (700,268) / "linear" (600,318) ·
 *   "g" (408,150) · "h" (768,318)
 *  right col st x800: b2 green box x800..1040 y150..202 (bl182) ·
 *   b3 line bl240 · b4 green box x800..1040 y270..322 (bl302)
 *  b5 bar x66 y400..428 line bl420 · b6 chip x420 y450 w360 h34 · b7 bar x66 y500..528 bl520
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
  arrowD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch07Sec30({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — climbing away from the centre */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t("How g falls as you rise", "Upar chadhne par g kaise girta hai")}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 2)}
        d="M 70 470 A 120 120 0 0 1 310 470"
        stroke={INK}
        sw={2.6}
        dur={0.9}
        fill={CREAM}
      />
      <Fade on={beat >= 0} delay={dl(0, 3.2)}>
        <T x={190} y={430} size={13} fill={INK} weight={700}>
          M, R
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 4)}
        d="M 182 236 h 16 v 16 h -16 Z"
        stroke={INK}
        sw={2}
        dur={0.4}
      />
      <Fade on={beat >= 0} delay={dl(0, 4.8)}>
        <Path d="M 190 256 V 346 M 184 256 h 12 M 184 346 h 12" stroke={MUTED} strokeWidth={1.4} fill="none" />
        <T x={208} y={304} size={13} fill={INK} anchor="start" weight={700}>
          h
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 6)}>
        <T x={120} y={205} size={13} fill={AMBER_DARK} anchor="start" weight={700}>
          distance = R + h
        </T>
      </Fade>

      {/* beat 1 — exact curve vs the straight shortcut */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.5)}
        d={`${arrowD(420, 300, 760, 300)} ${arrowD(420, 300, 420, 140)}`}
        stroke={INK}
        sw={1.8}
        dur={0.6}
      />
      <Fade on={beat >= 1} delay={dl(1, 1.1)}>
        <T x={406} y={150} size={12} fill={INK} weight={700}>
          g
        </T>
        <T x={770} y={318} size={12} fill={INK} weight={700}>
          h
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 1.6)}
        d="M 420 160 Q 520 240 758 285"
        stroke={GREEN}
        sw={2.8}
        dur={0.9}
      />
      <Fade on={beat >= 1} delay={dl(1, 2.8)}>
        <T x={700} y={268} size={11} fill={GREEN} anchor="start" weight={700}>
          exact
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 3.4)}
        d="M 420 160 L 640 300"
        stroke={AMBER_DARK}
        sw={2}
        dur={0.6}
      />
      <Fade on={beat >= 1} delay={dl(1, 4.2)}>
        <T x={572} y={330} size={11} fill={AMBER_DARK} anchor="start" weight={700}>
          linear shortcut
        </T>
      </Fade>

      {/* beat 2 — the exact form */}
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <Draw
          on={beat >= 2}
          delay={dl(2, 0.6)}
          d="M 812 150 h 216 q 12 0 12 12 v 28 q 0 12 -12 12 h -216 q -12 0 -12 -12 v -28 q 0 -12 12 -12"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.3)}>
        <T x={920} y={182} size={15} fill={INK} weight={800}>
          g(h) = GM ⁄ (R+h)²
        </T>
      </Fade>

      {/* beat 3 — why: still a point from outside */}
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={800} y={240} size={12} fill={AMBER_DARK} script anchor="start">
          {t(
            "still a point from outside — swap R → R+h",
            "bahar se abhi bhi point — R → R+h badal do"
          )}
        </T>
      </Fade>

      {/* beat 4 — the small-height rule */}
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <Draw
          on={beat >= 4}
          delay={dl(4, 0.6)}
          d="M 812 270 h 216 q 12 0 12 12 v 28 q 0 12 -12 12 h -216 q -12 0 -12 -12 v -28 q 0 -12 12 -12"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.3)}>
        <T x={920} y={302} size={15} fill={INK} weight={800}>
          h ≪ R:  g(h) ≈ g(1 − 2h⁄R)
        </T>
      </Fade>

      {/* beat 5 — the factor of two */}
      <Draw on={beat >= 5} delay={dl(5, 0.3)} d="M 480 400 v 28" stroke={RED} sw={3.4} dur={0.3} />
      <Fade on={beat >= 5} delay={dl(5, 0.7)}>
        <T x={498} y={420} size={13} fill={RED} script anchor="start">
          {t(
            "the factor is 2h ⁄ R — NOT h ⁄ R: g falls twice as fast per metre",
            "factor 2h ⁄ R hai — h ⁄ R NAHI: g do guna tezi se girta hai"
          )}
        </T>
      </Fade>

      {/* beat 6 — the concrete number */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Chip x={498} y={450} w={360} h={34} fill={CREAM} stroke={AMBER_DARK} textFill={AMBER_DARK} size={13}>
          {t("1% up in altitude → g drops ≈ 2%", "altitude 1% upar → g ≈ 2% girta hai")}
        </Chip>
      </Fade>

      {/* beat 7 — where the shortcut dies */}
      <Draw on={beat >= 7} delay={dl(7, 0.3)} d="M 66 500 v 28" stroke={RED} sw={3.4} dur={0.3} />
      <Fade on={beat >= 7} delay={dl(7, 0.7)}>
        <T x={84} y={520} size={13} fill={RED} script anchor="start">
          {t(
            "satellites: h ~ R → the linear rule fails badly — use the exact form",
            "satellites: h ~ R → linear rule bura fail — exact form use karo"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
