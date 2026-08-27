/**
 * Ch06 · Section 25 — "Derivation: torque equals the rate of change of L"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 12.97, 13.97, 14.97, 15.97, 16.97, 17.97, 28.64] — b1..b5 are 1 s;
 * hi b6..b7 are 1 s → ALL staggers kept ≤0.9 s so both languages settle cleanly):
 *  0 title + goal
 *  1 figure right: O, r → P, p arrow, ⊙ L, caption
 *  2 step 1: L = r × p = r × mv
 *  3 step 2: product rule line
 *  4 red cross on first term + v × mv = 0 note
 *  5 step 3: dp/dt = F ⇒ dL/dt = r × F = τ
 *  6 green box τ_ext = dL/dt + caption
 *  7 amber corollary card + conservation tail
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b1 | O(790,290) dot · "O" end(778,308) · r →(960,190) "r"(870,252) ·
 *       p (960,190)→(1020,158) "p" st(1026,152) · ⊙ (760,255) green ·
 *       caption script11 cx880 bl 345
 *  b2 | sans17 st x80 bl 150
 *  b3 | sans17 st x80 bl 205
 *  b4 | crossD(195,192,88,16) red on split term st x195 · note script12 st x100 bl 245
 *  b5 | sans17 st x80 bl 300
 *  b6 | green box x80..560 y340..410 · cx320 bl 382 · caption script12 cx320 bl 435
 *  b7 | amber card x80..560 y465..525 · cx320 bl 500 · tail script12 st x80 bl 555
 */

import React from "react";
import { Circle, TSpan } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  arrowD,
  crossD,
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

export default function Ch06Sec25({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the CBSE favourite */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={22} fill={INK} script>
          {t(
            "deriving τ = dL/dt — the CBSE favourite",
            "τ = dL/dt ka derivation — CBSE favourite"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 6)}>
        <T x={540} y={92} size={12} fill={MUTED} script>
          {t(
            "and conservation of L falls out at the end — free",
            "aur ant mein L ka conservation muft mein milta hai"
          )}
        </T>
      </Fade>

      {/* beat 1 — the particle picture */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.1)}
        d="M 785 290 a 5 5 0 1 0 10 0 a 5 5 0 1 0 -10 0"
        stroke={INK}
        fill={INK}
        sw={2}
        dur={0.3}
      />
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={778} y={308} size={12} fill={MUTED} weight={700} anchor="end">
          O
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.3)} d={arrowD(790, 290, 960, 190)} stroke={INK} sw={2.6} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={870} y={252} size={14} fill={INK} weight={700}>
          r
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.6)} d={arrowD(960, 190, 1020, 158)} stroke={AMBER} sw={2.8} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={1026} y={152} size={14} fill={AMBER_DARK} anchor="start" weight={700}>
          p
        </T>
        <Circle cx={760} cy={255} r={9} fill="none" stroke={GREEN} strokeWidth={2} />
        <Circle cx={760} cy={255} r={2.5} fill={GREEN} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={880} y={345} size={11} fill={GREEN_DARK} script>
          {t("L = r × p — ⊙ out of the plane", "L = r × p — ⊙ plane se bahar")}
        </T>
      </Fade>

      {/* beat 2 — step 1 */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={80} y={150} size={17} fill={INK} anchor="start" weight={700}>
          1 ·  L = r × p = r × mv
        </T>
      </Fade>

      {/* beat 3 — step 2: product rule, order kept */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={80} y={205} size={17} fill={INK} anchor="start" weight={700}>
          2 ·  dL/dt =
        </T>
        <T x={195} y={205} size={17} fill={INK} anchor="start" weight={700}>
          (dr/dt) × p
        </T>
        <T x={300} y={205} size={17} fill={INK} anchor="start" weight={700}>
          + r × (dp/dt)
        </T>
      </Fade>

      {/* beat 4 — the first term dies */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.2)}
        d={crossD(195, 192, 88, 16)}
        stroke={RED}
        sw={2.4}
        dur={0.5}
      />
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={100} y={245} size={12} fill={RED} script anchor="start">
          {t(
            "first term = v × mv = 0 — a vector is parallel to itself",
            "pehla term = v × mv = 0 — vector khud ke parallel hai"
          )}
        </T>
      </Fade>

      {/* beat 5 — step 3: Newton II enters */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={80} y={300} size={17} fill={INK} anchor="start" weight={700}>
          3 ·  dp/dt = F  ⇒  dL/dt = r × F = τ
        </T>
      </Fade>

      {/* beat 6 — the result */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.1)}
        d="M 92 340 h 456 q 12 0 12 12 v 46 q 0 12 -12 12 h -456 q -12 0 -12 -12 v -46 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.8}
        dur={0.5}
        fill={CREAM}
      />
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <T x={320} y={382} size={22} fill={INK} weight={700}>
          τ
          <Sub>ext</Sub>
          <Up> = dL/dt</Up>
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.9)}>
        <T x={320} y={435} size={12} fill={GREEN_DARK} script>
          {t(
            "Newton II — written in angular language",
            "Newton II — angular bhasha mein likha hua"
          )}
        </T>
      </Fade>

      {/* beat 7 — conservation for free */}
      <Draw
        on={beat >= 7}
        delay={dl(7, 0.1)}
        d="M 92 465 h 456 q 12 0 12 12 v 36 q 0 12 -12 12 h -456 q -12 0 -12 -12 v -36 q 0 -12 12 -12"
        stroke={AMBER}
        sw={2.4}
        dur={0.5}
        fill={CREAM}
      />
      <Fade on={beat >= 7} delay={dl(7, 0.5)}>
        <T x={320} y={500} size={18} fill={INK} weight={700}>
          τ
          <Sub>ext</Sub>
          <Up> = 0  ⇒  L = constant</Up>
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.9)}>
        <T x={80} y={555} size={12} fill={GREEN_DARK} script anchor="start">
          {t(
            "conservation of L — the dancer, coupling wheels and planets all obey this line",
            "L ka conservation — dancer, coupling wheels aur planets sab isi line ko maante hain"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
