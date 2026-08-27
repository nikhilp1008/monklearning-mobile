/**
 * Ch06 · Section 33 — "Balance, levers, and centre of gravity"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 7.42, 17.24, 29.18, 30.18, 31.18, 39.72, 50.73] — b3/b4 are 1 s
 * in EN → instant staggers there):
 *  0 title
 *  1 seesaw: level plank, pivot, heavy uncle near pivot, small child far out
 *  2 amber principle-of-moments card (right)
 *  3 moment equation + equal-moments line (instant)
 *  4 lever chips + mechanical-advantage line (instant)
 *  5 green CG definition
 *  6 support demo: under-CG balance ✓ vs offset support topple ✗
 *  7 green CG = CoM link + underline
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b1 | plank (150,240)→(560,240) · pivot apex(355,244) base 335/375 y272 ·
 *       uncle rect x275..315 y196..236 (left of pivot) label cx295 bl 180 · child rect x520..540
 *       y216..236 label cx530 bl 204
 *  b2 | amber card x640..1030 y150..210 · sans15 cx835 bl 178 · sub script11 cx835 bl 200
 *  b3 | sans15 st x640 bl 250 · script11 st x640 bl 276
 *  b4 | chip x640 y300 w390 h34 · script11 st x640 bl 360
 *  b5 | script12 st x640 bl 400
 *  b6 | A: rect x120..220 y340..400 + CG dot (170,370) + tri apex(170,404) ·
 *       "✓" cx170 bl 455 · B: rect x300..400 y340..400 + CG dot (350,370) +
 *       tri apex(390,404) · red arc + "✗" cx340 bl 455
 *  b7 | script13 st x80 bl 555 · underline y575 x80..640
 */

import React from "react";
import { TSpan } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  Chip,
  T,
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
  <TSpan dy={5} fontSize={10}>
    {children}
  </TSpan>
);
const Up = ({ children }: { children: string | number | (string | number)[] }) => (
  <TSpan dy={-5}>{children}</TSpan>
);

export default function Ch06Sec33({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — everyday balance */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={23} fill={INK} script>
          {t(
            "balance, levers, and centre of gravity",
            "balance, levers, aur centre of gravity"
          )}
        </T>
      </Fade>

      {/* beat 1 — the seesaw */}
      <Draw on={beat >= 1} delay={dl(1, 1)} d="M 150 240 H 560" stroke={INK} sw={3} dur={0.8} />
      <Draw
        on={beat >= 1}
        delay={dl(1, 2)}
        d="M 355 244 L 335 272 h 40 z"
        stroke={INK}
        sw={2.2}
        dur={0.5}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 3)}
        d="M 275 196 h 40 v 40 h -40 z"
        stroke={INK}
        sw={2.4}
        dur={0.5}
      />
      <Fade on={beat >= 1} delay={dl(1, 3.8)}>
        <T x={295} y={180} size={11} fill={MUTED} script>
          {t("uncle — heavy, close", "uncle — bhaari, paas")}
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 4.6)}
        d="M 520 216 h 20 v 20 h -20 z"
        stroke={INK}
        sw={2}
        dur={0.4}
      />
      <Fade on={beat >= 1} delay={dl(1, 5.2)}>
        <T x={530} y={204} size={11} fill={MUTED} script>
          {t("child — far out", "bachcha — door")}
        </T>
      </Fade>

      {/* beat 2 — the principle */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 0.8)}
        d="M 652 150 h 366 q 12 0 12 12 v 36 q 0 12 -12 12 h -366 q -12 0 -12 -12 v -36 q 0 -12 12 -12"
        stroke={AMBER}
        sw={2.4}
        dur={0.6}
        fill={CREAM}
      />
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <T x={835} y={178} size={15} fill={INK} weight={700}>
          {t("CLOCKWISE = ANTICLOCKWISE", "CLOCKWISE = ANTICLOCKWISE")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 5)}>
        <T x={835} y={200} size={11} fill={AMBER_DARK} script>
          {t("the principle of moments", "principle of moments")}
        </T>
      </Fade>

      {/* beat 3 — the equation (1 s in EN) */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={640} y={250} size={15} fill={INK} anchor="start" weight={700}>
          W
          <Sub>child</Sub>
          <Up> × d</Up>
          <Sub>big</Sub>
          <Up> = W</Up>
          <Sub>uncle</Sub>
          <Up> × d</Up>
          <Sub>small</Sub>
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={640} y={276} size={11} fill={AMBER_DARK} script anchor="start">
          {t("equal MOMENTS — not equal weights", "barabar MOMENTS — barabar weight nahi")}
        </T>
      </Fade>

      {/* beat 4 — every lever you own (1 s in EN) */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <Chip x={640} y={300} w={390} h={34} fill={CREAM} stroke={AMBER} textFill={INK} size={13}>
          {t("crowbar · scissors · opener · forearm", "crowbar · kainchi · opener · forearm")}
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={640} y={360} size={11} fill={MUTED} script anchor="start">
          {t(
            "longer effort arm → mechanical advantage multiplies your force",
            "lamba effort arm → mechanical advantage force ko multiply karta"
          )}
        </T>
      </Fade>

      {/* beat 5 — centre of gravity */}
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={640} y={400} size={12} fill={GREEN_DARK} script anchor="start">
          {t(
            "CG = the ONE point where the whole weight acts",
            "CG = wo EK point jahan poora weight act karta hai"
          )}
        </T>
      </Fade>

      {/* beat 6 — support under the CG, or topple */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 1)}
        d="M 120 340 h 100 v 60 h -100 z M 166 370 a 4 4 0 1 0 8 0 a 4 4 0 1 0 -8 0 M 170 404 L 155 430 h 30 z"
        stroke={INK}
        fill="none"
        sw={2.2}
        dur={1.2}
      />
      <Fade on={beat >= 6} delay={dl(6, 2.5)}>
        <T x={170} y={455} size={12} fill={GREEN_DARK} script>
          {t("under the CG — balance ✓", "CG ke neeche — balance ✓")}
        </T>
      </Fade>
      <Draw
        on={beat >= 6}
        delay={dl(6, 4.5)}
        d="M 300 340 h 100 v 60 h -100 z M 346 370 a 4 4 0 1 0 8 0 a 4 4 0 1 0 -8 0 M 390 404 L 375 430 h 30 z"
        stroke={INK}
        fill="none"
        sw={2.2}
        dur={1.2}
      />
      <Draw
        on={beat >= 6}
        delay={dl(6, 6)}
        d="M 300 330 A 55 55 0 0 0 275 382 M 271 368 L 275 382 L 287 377"
        stroke={RED}
        sw={2.2}
        dur={0.6}
      />
      <Fade on={beat >= 6} delay={dl(6, 7)}>
        <T x={345} y={455} size={12} fill={RED} script>
          {t("offset — toppling torque ✗", "hatke — toppling torque ✗")}
        </T>
      </Fade>

      {/* beat 7 — CG meets CoM */}
      <Fade on={beat >= 7} delay={dl(7, 1.5)}>
        <T x={80} y={555} size={13} fill={GREEN_DARK} script anchor="start">
          {t(
            "uniform g ⇒ the CG sits exactly at the CoM — they part only for very tall bodies",
            "uniform g ⇒ CG theek CoM par baithta hai — sirf bahut oonchi bodies mein alag hote"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 5)} d="M 80 575 h 640" stroke={GREEN} sw={2.2} dur={0.7} />
    </Scene>
  );
}
