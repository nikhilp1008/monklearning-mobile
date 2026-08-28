/**
 * Ch06 · Section 44 — "MOI of a rod, and the perpendicular axis theorem"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0,1,2,3,20.92,34.57,53.86,67.6] — b0..b3 fast in EN;
 * hi [0,8.45,21.67,36.27,37.27,38.27,39.27,40.27] — b3..b6 fast in HI →
 * every beat kept to short (≤0.9 s) staggers so both settle cleanly):
 *  0 title
 *  1 LEFT: rod figure — axis O, element dx at distance x, end labels
 *  2 LEFT: λ = M/L, dm = (M/L)dx, dI = x²dm
 *  3 LEFT: integral line + green result box I = ML²/12
 *  4 RIGHT: lamina figure — point P(x,y), r line, r² = x²+y²
 *  5 RIGHT: I_z = ∫(x²+y²)dm = I_y + I_x
 *  6 RIGHT: red note — needs every element IN the plane, fails for 3D bodies
 *  7 RIGHT: amber "laminar only" exam-trap chip
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  divider x540 y90..580 (from beat1)
 *  b1 | rod x80..460 y195..205 · axis dashed x270 y110..260 · O end(258,275) ·
 *       element rect x360..374 y193..207 amber · dim dashed y225 x270..367 ·
 *       "x" cx318 bl242 · "dx" cx367 bl175 · "−L/2" cx80 bl235 · "+L/2" cx460 bl235
 *  b2 | sans14 st x60 bl300 / bl325
 *  b3 | sans14 st x60 bl360 · green box x60..460 y388..438 · cx260 bl420
 *  b4 | lamina rect x620..820 y140..230 · x-axis →(870,230) "x" st(878,236) ·
 *       y-axis →(620,120) "y" cx620 bl108 · P dot (760,175) r4 amber ·
 *       dashed (760,230)-(760,175) / (620,175)-(760,175) · r line green ·
 *       "P" st(768,168) · "r²=x²+y²" cx740 bl258
 *  b5 | sans14 st x560 bl300 / bl325
 *  b6 | red bar x546 y360..420 · L1 st x564 bl383 · L2 st x564 bl411
 *  b7 | chip x560 y445 w420 h38
 */

import React from "react";
import { Path, TSpan } from 'react-native-svg';
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
  GREEN_DARK,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

const Sub = ({ children }: { children: string | number | (string | number)[] }) => (
  <TSpan dy={5} fontSize={11}>
    {children}
  </TSpan>
);
const Up = ({ children }: { children: string | number | (string | number)[] }) => (
  <TSpan dy={-5}>{children}</TSpan>
);

export default function Ch06Sec44({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — two derivations, one section */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={52} size={20} fill={INK} script>
          {t(
            "MOI of a rod, and the perpendicular-axis theorem",
            "rod ka MOI, aur perpendicular-axis theorem"
          )}
        </T>
      </Fade>

      {/* divider */}
      <Fade on={beat >= 1} delay={dl(1, 0.1)}>
        <Path d="M 540 90 V 580" fill="none" stroke={MUTED} strokeWidth={1.2} strokeDasharray="6 6" />
      </Fade>

      {/* beat 1 — LEFT: the rod, sliced into dx */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.2)}
        d="M 80 195 h 380 v 10 h -380 z"
        stroke={INK}
        sw={2.2}
        dur={0.6}
      />
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <Path
          d="M 270 110 V 260"
          fill="none"
          stroke={MUTED}
          strokeWidth={1.6}
          strokeDasharray="6 5"
        />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={258} y={275} size={11} fill={MUTED} anchor="end" weight={700}>
          O
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.6)}
        d="M 360 193 h 14 v 14 h -14 z"
        stroke={AMBER}
        fill={AMBER}
        sw={1.6}
        dur={0.4}
      />
      <Fade on={beat >= 1} delay={dl(1, 0.7)}>
        <Path
          d="M 270 225 H 367"
          fill="none"
          stroke={AMBER_DARK}
          strokeWidth={1.6}
          strokeDasharray="5 4"
        />
        <T x={318} y={242} size={12} fill={AMBER_DARK} weight={700}>
          x
        </T>
        <T x={367} y={175} size={12} fill={AMBER_DARK} weight={700}>
          dx
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={80} y={235} size={11} fill={INK} weight={700}>
          −L/2
        </T>
        <T x={460} y={235} size={11} fill={INK} weight={700}>
          +L/2
        </T>
      </Fade>

      {/* beat 2 — LEFT: λ, dm, dI */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={60} y={300} size={14} fill={INK} anchor="start" weight={700}>
          λ = M/L ,   dm = (M/L) dx
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.5)}>
        <T x={60} y={325} size={14} fill={INK} anchor="start" weight={700}>
          dI = x² dm
        </T>
      </Fade>

      {/* beat 3 — LEFT: integrate to ML²/12 */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={60} y={360} size={13} fill={INK} anchor="start" weight={700}>
          I = (M/L) ∫ x² dx  {t("from −L/2 to +L/2", "−L/2 se +L/2 tak")}
        </T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 0.5)}
        d="M 60 388 h 400 q 12 0 12 12 v 26 q 0 12 -12 12 h -400 q -12 0 -12 -12 v -26 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.4}
        dur={0.5}
        fill={CREAM}
      />
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={260} y={420} size={18} fill={INK} weight={700}>
          I = ML²/12
        </T>
      </Fade>

      {/* beat 4 — RIGHT: the lamina and its point P */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.1)}
        d="M 620 140 h 200 v 90 h -200 z"
        stroke={INK}
        sw={2.2}
        dur={0.7}
      />
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.3)}
        d={`${arrowD(620, 230, 870, 230)} ${arrowD(620, 230, 620, 120)}`}
        stroke={INK}
        sw={2}
        dur={0.5}
      />
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <T x={878} y={236} size={12} fill={INK} anchor="start" weight={700}>
          x
        </T>
        <T x={620} y={108} size={12} fill={INK} weight={700}>
          y
        </T>
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.6)}
        d="M 756 171 a 4 4 0 1 0 8 0 a 4 4 0 1 0 -8 0"
        stroke={AMBER}
        fill={AMBER}
        sw={1.6}
        dur={0.3}
      />
      <Fade on={beat >= 4} delay={dl(4, 0.7)}>
        <Path
          d="M 760 230 V 175 M 620 175 H 760"
          fill="none"
          stroke={MUTED}
          strokeWidth={1.4}
          strokeDasharray="5 4"
        />
        <Path d="M 620 230 L 760 175" fill="none" stroke={GREEN} strokeWidth={2} />
        <T x={768} y={168} size={12} fill={AMBER_DARK} anchor="start" weight={700}>
          P
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.9)}>
        <T x={740} y={258} size={13} fill={GREEN_DARK} weight={700}>
          r² = x² + y²
        </T>
      </Fade>

      {/* beat 5 — RIGHT: I_z splits into I_x + I_y */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={560} y={300} size={14} fill={INK} anchor="start" weight={700}>
          I
          <Sub>z</Sub>
          <Up> = ∫ (x² + y²) dm</Up>
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={560} y={325} size={14} fill={INK} anchor="start" weight={700}>
          = ∫x²dm + ∫y²dm = I
          <Sub>y</Sub>
          <Up> + I</Up>
          <Sub>x</Sub>
        </T>
      </Fade>

      {/* beat 6 — RIGHT: why it needs a lamina */}
      <Draw on={beat >= 6} delay={dl(6, 0.1)} d="M 546 360 v 60" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={564} y={383} size={12} fill={RED} script anchor="start">
          {t(
            "needs every element IN the plane",
            "har element ka PLANE MEIN hona zaroori"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.7)}>
        <T x={564} y={411} size={12} fill={RED} script anchor="start">
          {t(
            "fails for spheres, cylinders, cubes",
            "spheres, cylinders, cubes par fail"
          )}
        </T>
      </Fade>

      {/* beat 7 — RIGHT: the favourite exam trap */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Chip x={560} y={445} w={420} h={38} fill={CREAM} stroke={AMBER} textFill={AMBER_DARK} size={14}>
          {t("LAMINAR ONLY — a favourite exam trap", "LAMINAR HI — pasandida exam trap")}
        </Chip>
      </Fade>
    </Scene>
  );
}
