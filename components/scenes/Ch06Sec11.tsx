/**
 * Ch06 · Section 11 — "Worked example: rod of varying density [JEE Advanced]"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 18.52, 28.76, 38.23, 48.64, 59.05, 71.94, 89.09]):
 *  0 title + λ(x) subline
 *  1 figure: tapered rod x150..750 (thin→thick), hatch density rising, 0/L labels,
 *    "denser →", red dot at 5L/9 with "?" (b1..4)
 *  2 dm line
 *  3 total mass integral
 *  4 first moment integral
 *  5 divide → result box 5L/9 + dashed drop + "5L/9" stamp on figure
 *  6 intuition: L/2 tick + green arrow L/2→5L/9 + line
 *  7 handshake line + underline
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | title script22 cx540 bl 52 · sub script13 cx540 bl 96
 *  b1 | rod M150,214 L750,204 L750,236 L150,226 z · hatch verticals ·
 *       "0" cx150 bl 260 · "L" cx750 bl 260 · "denser →" script12 cx600 bl 185 ·
 *       dot (483,220) r5 red · "?" cx483 bl 192 (b1..4)
 *  b2 | sans16 st x120 bl 300
 *  b3 | sans16 st x120 bl 350
 *  b4 | sans16 st x120 bl 400
 *  b5 | sans16 st x120 bl 450 · green box x560..920 y420..480 cx740 bl 456 ·
 *       drop dash (483,236)→(483,258) · "5L/9" red cx483 bl 275
 *  b6 | L/2 dash (450,195)→(450,250) · "L/2" end(443,268) · arrow (452,290)→(476,290) ·
 *       line script13 st x120 bl 520
 *  b7 | line script13 st x120 bl 552 · underline y572 x120..560
 */

import React from "react";
import { Path, TSpan } from 'react-native-svg';
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
  AMBER_DARK,
  GREEN,
  GREEN_DARK,
  RED,
  CREAM,
  AMBER,
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

const HATCH_XS = [200, 280, 350, 410, 465, 515, 560, 600, 640, 675, 705, 730];
const hatch = HATCH_XS.map((x) => {
  const top = (214 - (x - 150) / 60).toFixed(1);
  const bot = (226 + (x - 150) / 60).toFixed(1);
  return `M ${x} ${top} V ${bot}`;
}).join(" ");

export default function Ch06Sec11({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the problem */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={22} fill={INK} script>
          {t(
            "rod of varying density [JEE Advanced]",
            "badalti density wali rod [JEE Advanced]"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 7)}>
        <T x={540} y={96} size={13} fill={MUTED} script>
          {t(
            "rod 0 → L · λ(x) = λ₀(1 + x/L) — heavier toward the far end · CoM?",
            "rod 0 → L · λ(x) = λ₀(1 + x/L) — door waale sire par bhaari · CoM?"
          )}
        </T>
      </Fade>

      {/* beat 1 — the tapered rod */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 1)}
        d="M 150 214 L 750 204 L 750 236 L 150 226 z"
        stroke={INK}
        sw={2.4}
        dur={1.2}
      />
      <Draw on={beat >= 1} delay={dl(1, 2.6)} d={hatch} stroke={INK} sw={1.2} dur={1.6} />
      <Fade on={beat >= 1} delay={dl(1, 4.6)}>
        <T x={150} y={260} size={13} fill={INK} weight={700}>
          0
        </T>
        <T x={750} y={260} size={13} fill={INK} weight={700}>
          L
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 5.6)}>
        <T x={600} y={185} size={12} fill={AMBER_DARK} script>
          {t("denser →", "ghani hoti →")}
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 7.5)}
        d="M 478 220 a 5 5 0 1 0 10 0 a 5 5 0 1 0 -10 0"
        stroke={RED}
        fill={RED}
        sw={2}
        dur={0.4}
      />
      <Fade on={beat >= 1 && beat < 5} delay={dl(1, 8.3)}>
        <T x={483} y={192} size={14} fill={RED} weight={700}>
          ?
        </T>
      </Fade>

      {/* beat 2 — the mass element */}
      <Fade on={beat >= 2} delay={dl(2, 1.5)}>
        <T x={120} y={300} size={16} fill={INK} anchor="start" weight={700}>
          dm = λ₀(1 + x/L) dx
        </T>
      </Fade>

      {/* beat 3 — total mass */}
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <T x={120} y={350} size={16} fill={INK} anchor="start" weight={700}>
          M = ∫₀
          <TSpan dy={-6} fontSize={11}>
            L
          </TSpan>
          <TSpan dy={6}> λ₀(1+x/L)dx = λ₀(L + L/2) = 3λ₀L/2</TSpan>
        </T>
      </Fade>

      {/* beat 4 — first moment */}
      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <T x={120} y={400} size={16} fill={INK} anchor="start" weight={700}>
          ∫₀
          <TSpan dy={-6} fontSize={11}>
            L
          </TSpan>
          <TSpan dy={6}> x dm = λ₀(L²/2 + L²/3) = 5λ₀L²/6</TSpan>
        </T>
      </Fade>

      {/* beat 5 — divide, and land at 5L/9 */}
      <Fade on={beat >= 5} delay={dl(5, 1.5)}>
        <T x={120} y={450} size={16} fill={INK} anchor="start" weight={700}>
          x
          <Sub>cm</Sub>
          <Up> = (5λ₀L²/6) / (3λ₀L/2)</Up>
        </T>
      </Fade>
      <Draw
        on={beat >= 5}
        delay={dl(5, 5)}
        d="M 572 420 h 336 q 12 0 12 12 v 36 q 0 12 -12 12 h -336 q -12 0 -12 -12 v -36 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.6}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 5} delay={dl(5, 6.2)}>
        <T x={740} y={456} size={19} fill={INK} weight={700}>
          x
          <Sub>cm</Sub>
          <Up> = 5L/9 ≈ 0.556 L</Up>
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 8)}>
        <Path
          d="M 483 236 V 258"
          fill="none"
          stroke={RED}
          strokeWidth={1.6}
          strokeDasharray="5 4"
        />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 8.8)}>
        <T x={483} y={275} size={13} fill={RED} weight={700}>
          5L/9
        </T>
      </Fade>

      {/* beat 6 — against intuition */}
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <Path
          d="M 450 195 V 250"
          fill="none"
          stroke={MUTED}
          strokeWidth={1.6}
          strokeDasharray="5 4"
        />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={443} y={268} size={12} fill={MUTED} anchor="end" weight={700}>
          L/2
        </T>
      </Fade>
      <Draw
        on={beat >= 6}
        delay={dl(6, 3.5)}
        d={arrowD(452, 290, 476, 290)}
        stroke={GREEN}
        sw={2.2}
        dur={0.4}
      />
      <Fade on={beat >= 6} delay={dl(6, 5.5)}>
        <T x={120} y={520} size={13} fill={GREEN_DARK} script anchor="start">
          {t(
            "uniform rod balances at L/2 — here density grows rightward, so the CoM shifts right",
            "uniform rod L/2 par balance hoti — yahan density right badhti hai, to CoM right khiskta hai"
          )}
        </T>
      </Fade>

      {/* beat 7 — the handshake */}
      <Fade on={beat >= 7} delay={dl(7, 1.5)}>
        <T x={120} y={552} size={13} fill={GREEN} script anchor="start">
          {t(
            "5L/9 > L/2 ✓ — the physics and the algebra shake hands",
            "5L/9 > L/2 ✓ — physics aur algebra haath milaate hain"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 4.5)} d="M 120 572 h 440" stroke={AMBER} sw={2.2} dur={0.7} />
    </Scene>
  );
}
