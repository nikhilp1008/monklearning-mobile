/**
 * Ch02 · Section 11 — "Example 1 [CBSE]: the jogger who turned around"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 20.6, 45.4, 65, 80.6, 103.4, 120.6, 136.9]):
 *  0 title + problem line
 *  1 picture: axis with E(+), two leg arrows drawn
 *  2 data locked: leg labels with signs
 *  3 (a) distance card: 300+100 = 400 m
 *  4 (b) displacement card: +300+(−100) = +200 m east · endpoint ✓
 *  5 (c) avg speed card: 400/150 ≈ 2.67
 *  6 (d) avg velocity card: +200/150 ≈ +1.33 east
 *  7 red note: 2.67 > 1.33 — the turn opened the gap
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | title bl 54 · problem cx540 bl 88
 *  b1 | leg1 arrow y138 (180→776) · axis y190 (140→960) + ticks 180/580/780 ·
 *       tick labels bl 216 · leg2 arrow y162 (780→584) · "E (+)" st (975,196)
 *  b2 | leg1 label cx480 bl 122 · leg2 label st x800 bl 168
 *  cards: (a) x80..520 y250..350 · (b) x560..1000 y250..350 ·
 *         (c) x80..520 y374..470 · (d) x560..1000 y374..470
 *         headers bl top+24 · formulas bl top+60 · notes bl top+86
 *  b7 | bar x66 y505..558 · lines st x84 bl 524 / 550
 */

import React from "react";
import { G } from 'react-native-svg';
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

function ACard({
  on,
  d1,
  d2,
  d3,
  x,
  y,
  header,
  formula,
  note,
  stroke,
  hFill,
}: {
  on: boolean;
  d1: number;
  d2: number;
  d3: number;
  x: number;
  y: number;
  header: string;
  formula: string;
  note: string;
  stroke: string;
  hFill: string;
}) {
  return (
    <G>
      <Draw
        on={on}
        delay={d1}
        d={`M ${x + 12} ${y} h 416 q 12 0 12 12 v 72 q 0 12 -12 12 h -416 q -12 0 -12 -12 v -72 q 0 -12 12 -12`}
        stroke={stroke}
        sw={2.2}
        dur={0.6}
      />
      <Fade on={on} delay={d1 + 0.8}>
        <T x={x + 220} y={y + 24} size={12} fill={hFill} script>
          {header}
        </T>
      </Fade>
      <Fade on={on} delay={d2}>
        <T x={x + 220} y={y + 60} size={16} fill={INK} weight={700}>
          {formula}
        </T>
      </Fade>
      <Fade on={on} delay={d3}>
        <T x={x + 220} y={y + 86} size={11} fill={MUTED} script>
          {note}
        </T>
      </Fade>
    </G>
  );
}

export default function Ch02Sec11({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the problem */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={54} size={22} fill={INK} script>
          {t(
            "Example 1 [CBSE] — the jogger who turned around",
            "Example 1 [CBSE] — jogger jo palat gaya"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 6)}>
        <T x={540} y={88} size={13} fill={MUTED} script>
          {t(
            "300 m east in 100 s, then 100 m west in 50 s — find distance · Δx · avg speed · avg velocity",
            "300 m east 100 s mein, phir 100 m west 50 s mein — distance · Δx · avg speed · avg velocity nikaalo"
          )}
        </T>
      </Fade>

      {/* beat 1 — the picture is the whole battle */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.8)}
        d={arrowD(140, 190, 960, 190)}
        stroke={INK}
        sw={2.2}
        dur={1}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 2)}
        d="M 180 183 v 14 M 580 183 v 14 M 780 183 v 14"
        stroke={INK}
        sw={1.8}
        dur={0.5}
      />
      <Fade on={beat >= 1} delay={dl(1, 2.8)}>
        <T x={180} y={216} size={12} fill={INK} weight={700}>
          0
        </T>
        <T x={580} y={216} size={12} fill={INK} weight={700}>
          +200
        </T>
        <T x={780} y={216} size={12} fill={INK} weight={700}>
          +300
        </T>
        <T x={975} y={196} size={13} fill={INK} anchor="start" weight={700}>
          E (+)
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 6)}
        d={arrowD(180, 138, 776, 138)}
        stroke={GREEN}
        sw={2.8}
        dur={1.2}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 10)}
        d={arrowD(780, 162, 584, 162)}
        stroke={RED}
        sw={2.8}
        dur={0.8}
      />

      {/* beat 2 — data with signs locked */}
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={480} y={122} size={12} fill={GREEN} script>
          {t("leg 1: +300 m in 100 s", "leg 1: +300 m, 100 s")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 4)}>
        <T x={800} y={168} size={12} fill={RED} script anchor="start">
          {t("leg 2: −100 m in 50 s", "leg 2: −100 m, 50 s")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 8)}>
        <T x={480} y={104} size={11} fill={MUTED} script>
          {t("east = + — locked for the whole problem", "east = + — poore sawaal ke liye pakka")}
        </T>
      </Fade>

      {/* beat 3 — (a) distance */}
      <ACard
        on={beat >= 3}
        d1={dl(3, 0.6)}
        d2={dl(3, 2.5)}
        d3={dl(3, 6)}
        x={80}
        y={250}
        header={t("(a) distance — magnitudes only", "(a) distance — sirf magnitudes")}
        formula="300 + 100 = 400 m"
        note={t("doesn't care about direction", "direction se koi matlab nahi")}
        stroke={AMBER}
        hFill={AMBER_DARK}
      />

      {/* beat 4 — (b) displacement */}
      <ACard
        on={beat >= 4}
        d1={dl(4, 0.6)}
        d2={dl(4, 2.5)}
        d3={dl(4, 8)}
        x={560}
        y={250}
        header={t("(b) displacement — signs on", "(b) displacement — sign ke saath")}
        formula="+300 + (−100) = +200 m east"
        note={t("endpoint check: 200 − 0 = 200 ✓", "endpoint jaanch: 200 − 0 = 200 ✓")}
        stroke={RED}
        hFill={RED}
      />

      {/* beat 5 — (c) average speed */}
      <ACard
        on={beat >= 5}
        d1={dl(5, 0.6)}
        d2={dl(5, 4)}
        d3={dl(5, 9)}
        x={80}
        y={374}
        header={t("(c) avg speed = 400 ⁄ 150", "(c) avg speed = 400 ⁄ 150")}
        formula="≈ 2.67 m/s"
        note={t("total time = 100 + 50 = 150 s", "total time = 100 + 50 = 150 s")}
        stroke={AMBER}
        hFill={AMBER_DARK}
      />

      {/* beat 6 — (d) average velocity */}
      <ACard
        on={beat >= 6}
        d1={dl(6, 0.6)}
        d2={dl(6, 3)}
        d3={dl(6, 8)}
        x={560}
        y={374}
        header={t("(d) avg velocity = +200 ⁄ 150", "(d) avg velocity = +200 ⁄ 150")}
        formula="≈ +1.33 m/s east"
        note={t("same denominator, different numerator", "wahi denominator, alag numerator")}
        stroke={RED}
        hFill={RED}
      />

      {/* beat 7 — the turn opened the gap */}
      <Draw on={beat >= 7} delay={dl(7, 0.8)} d="M 66 505 v 53" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={84} y={524} size={14} fill={RED} script anchor="start">
          {t(
            "2.67 > 1.33 — exactly as the inequality promised",
            "2.67 > 1.33 — theek jaisa inequality ne kaha tha"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 7)}>
        <T x={84} y={550} size={14} fill={RED} script anchor="start">
          {t(
            "no reversal ⇒ they'd be equal — the TURN opened the gap",
            "na palat'ta ⇒ dono barabar hote — PALATNE ne gap khola"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
