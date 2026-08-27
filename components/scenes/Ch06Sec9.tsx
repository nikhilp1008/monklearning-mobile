/**
 * Ch06 · Section 9 — "Worked example: the man on the boat [NEET]"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 13.65, 28.67, 41.56, 56.58, 66.82, 75.61, 82.09]):
 *  0 title + problem subline
 *  1 figure: BEFORE boat x260..560 man at left end (feet x260,y190) ·
 *    AFTER boat x80..380 man at right end (feet x360,y330) ·
 *    fixed CoM dashed line x=320 y115..378 + label st(335,265)
 *  2 red trap note (right col)
 *  3 green reason lines + walk arrow (296,168)→(376,168) + recoil arrow
 *    (310,385)→(180,385)
 *  4 mass-ratio shortcut fraction
 *  5 plug in numbers
 *  6 result box + "3 m" label under recoil arrow
 *  7 sanity lines
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | title script22 cx540 bl 52 · sub script13 cx540 bl 96 (x315..765)
 *  b1 | hulls (trapezoids) y190..222 / y330..362 · men (head r8 at feet−48) ·
 *       BEFORE st(585,210) · AFTER st(410,350) · CoM dash x320 ·
 *       label script12 st(335,265)
 *  b2 | red bar x640 y120..190 · L1 st x658 bl 145 · L2 st x658 bl 175
 *  b3 | green script13 st x640 bl 225 / bl 253 · walk label script11 cx336 bl 152
 *  b4 | "d_boat =" st x640 bl 320 · num cx800 bl 297 · bar x740..865 y312 ·
 *       den cx800 bl 344 · "× L" st x880 bl 320
 *  b5 | line sans16 st x640 bl 395
 *  b6 | green box x640..1000 y420..480 · result cx820 bl 456 ·
 *       "3 m" label script12 cx250 bl 412
 *  b7 | green script12 st x640 bl 520 / bl 548
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

// stick man with feet baseline at (x, y)
const man = (x: number, y: number) =>
  `M ${x - 8} ${y - 48} a 8 8 0 1 0 16 0 a 8 8 0 1 0 -16 0 ` +
  `M ${x} ${y - 40} L ${x} ${y - 15} ` +
  `M ${x} ${y - 15} L ${x - 8} ${y} M ${x} ${y - 15} L ${x + 8} ${y} ` +
  `M ${x - 10} ${y - 30} L ${x + 10} ${y - 30}`;

export default function Ch06Sec9({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the speed trap */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={22} fill={INK} script>
          {t(
            "the man on the boat [NEET speed trap]",
            "naav par aadmi [NEET speed trap]"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 6)}>
        <T x={540} y={96} size={13} fill={MUTED} script>
          {t(
            "60 kg man · 40 kg boat · L = 5 m — how far does the boat slide?",
            "60 kg aadmi · 40 kg naav · L = 5 m — naav kitna khisakti hai?"
          )}
        </T>
      </Fade>

      {/* beat 1 — before / after, CoM pinned */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 1)}
        d="M 260 190 L 560 190 L 540 222 L 280 222 z"
        stroke={INK}
        sw={2.4}
        dur={1}
      />
      <Draw on={beat >= 1} delay={dl(1, 2.3)} d={man(260, 190)} stroke={INK} sw={2.2} dur={0.8} />
      <Fade on={beat >= 1} delay={dl(1, 3.4)}>
        <T x={585} y={210} size={12} fill={MUTED} script anchor="start">
          BEFORE
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 5)}
        d="M 80 330 L 380 330 L 360 362 L 100 362 z"
        stroke={INK}
        sw={2.4}
        dur={1}
      />
      <Draw on={beat >= 1} delay={dl(1, 6.3)} d={man(360, 330)} stroke={INK} sw={2.2} dur={0.8} />
      <Fade on={beat >= 1} delay={dl(1, 7.4)}>
        <T x={410} y={350} size={12} fill={MUTED} script anchor="start">
          AFTER
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 9.5)}>
        <Path
          d="M 320 115 V 378"
          fill="none"
          stroke={RED}
          strokeWidth={2}
          strokeDasharray="7 6"
        />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 11)}>
        <T x={335} y={265} size={12} fill={RED} script anchor="start">
          {t("CoM — pinned, didn't move", "CoM — yahin ka yahin, hila nahi")}
        </T>
      </Fade>

      {/* beat 2 — the trap */}
      <Draw on={beat >= 2} delay={dl(2, 0.8)} d="M 640 120 v 70" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <T x={658} y={145} size={13} fill={RED} script anchor="start">
          {t("TRAP: “the man moves 5 m” — no!", "TRAP: “aadmi 5 m chala” — nahi!")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 5.5)}>
        <T x={658} y={175} size={13} fill={RED} script anchor="start">
          {t(
            "the boat slides back under him",
            "naav uske neeche se peeche sarakti hai"
          )}
        </T>
      </Fade>

      {/* beat 3 — why the CoM is pinned */}
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <T x={640} y={225} size={13} fill={GREEN_DARK} script anchor="start">
          {t(
            "no external horizontal force ⇒",
            "koi external horizontal force nahi ⇒"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 4)}>
        <T x={640} y={253} size={13} fill={GREEN_DARK} script anchor="start">
          {t(
            "the CoM cannot shift — not even a little",
            "CoM zara bhi shift nahi kar sakta"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 6.5)}
        d={arrowD(296, 168, 376, 168)}
        stroke={GREEN}
        sw={2.4}
        dur={0.5}
      />
      <Fade on={beat >= 3} delay={dl(3, 7.3)}>
        <T x={336} y={152} size={11} fill={GREEN_DARK} script>
          {t("man walks →", "aadmi chalta →")}
        </T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 9)}
        d={arrowD(310, 385, 180, 385)}
        stroke={AMBER}
        sw={2.6}
        dur={0.5}
      />

      {/* beat 4 — the mass-ratio shortcut */}
      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <T x={640} y={320} size={16} fill={INK} anchor="start" weight={700}>
          d
          <Sub>boat</Sub>
          <Up> =</Up>
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.3)}>
        <T x={800} y={297} size={15} fill={INK} weight={700}>
          m
          <Sub>man</Sub>
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 3)} d="M 740 312 h 125" stroke={INK} sw={2.2} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 3.7)}>
        <T x={800} y={344} size={15} fill={INK} weight={700}>
          m
          <Sub>man</Sub>
          <Up> + m</Up>
          <Sub>boat</Sub>
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 4.4)}>
        <T x={880} y={320} size={16} fill={INK} anchor="start" weight={700}>
          × L
        </T>
      </Fade>

      {/* beat 5 — plug in */}
      <Fade on={beat >= 5} delay={dl(5, 1.5)}>
        <T x={640} y={395} size={16} fill={INK} anchor="start" weight={700}>
          = 60/(60+40) × 5 = 0.6 × 5
        </T>
      </Fade>

      {/* beat 6 — three metres, opposite */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.8)}
        d="M 652 420 h 336 q 12 0 12 12 v 36 q 0 12 -12 12 h -336 q -12 0 -12 -12 v -36 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.6}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={820} y={456} size={18} fill={INK} weight={700}>
          d
          <Sub>boat</Sub>
          <Up> = 3 m — {t("opposite the man", "aadmi ke opposite")}</Up>
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 3.5)}>
        <T x={250} y={412} size={12} fill={AMBER_DARK} script>
          {t("boat: 3 m ←", "naav: 3 m ←")}
        </T>
      </Fade>

      {/* beat 7 — satisfying sanity */}
      <Fade on={beat >= 7} delay={dl(7, 1.5)}>
        <T x={640} y={520} size={12} fill={GREEN_DARK} script anchor="start">
          {t(
            "heavier mover → bigger recoil",
            "jo bhaari chalta hai → recoil utna bada"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 5)}>
        <T x={640} y={548} size={12} fill={GREEN_DARK} script anchor="start">
          {t(
            "man > boat ⇒ boat slides MORE than half its length ✓",
            "aadmi > naav ⇒ naav aadhi lambai se ZYADA sarki ✓"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
