/**
 * M11 Ch01 · Section 11 — "The ∈ vs ⊆ distinction, universal set, and intervals"
 * Canvas 1080×620 · safe x36–1044, y30–596. section_type: concept.
 *
 * Beats (board_reveal_at_english [0, 9.81, 24.66, 46.08, 70.91, 92.59, 111.02]):
 *  0 title (always-on)
 *  1 GUARDRAIL: ∈ = element→set, ⊆ = set→set — never mix
 *  2 example: 1∈{1,2} ✓ / {1}⊆{1,2} ✓; "1⊆A" is a category error
 *  3 universal set U: box U containing small A, B boxes — every set ⊆ U
 *  4 interval def: unbroken stretch of R; < → ( open, ≤ → [ closed
 *  5 REPRESENT: number line [2,5) — 2 closed (filled), 5 open (hollow)
 *  6 GUARDRAIL: (2,5) is an INFINITE set despite "looking small"
 *
 * Layout plan (estimated render boxes, longer language counts):
 *  b1 | "∈" (38,red) / "⊆" (38,green) | T mid | x220/780 y130
 *  b1 | "element → set" / "set → set" | T mid script | x220/780 y160
 *  b1 | "never mix these levels!"     | T mid script red | x540 y195
 *  b2 | "1∈{1,2} ✓" / "{1}⊆{1,2} ✓"   | T mid | x220/780 y225
 *  b2 | category-error caption        | T mid script red | x540 y252
 *  b3 | box U (roundRect)             | Draw  | x300..780 y290..390
 *  b3 | "U" corner label              | T st  | x320 y312
 *  b3 | inner boxes A, B              | Draw  | x350..450 / x500..620 y330..375
 *  b3 | "every set here ⊆ U"          | T mid script | x540 y420
 *  b4 | interval definition (one line)| T mid | x540 y455
 *  b5 | axis y530 x150..950 + ticks 0..8 + labels
 *  b5 | shaded span [2,5) + closed dot@2 + open dot@5
 *  b5 | "[2, 5) = {x : 2 ≤ x < 5}"    | T mid | x500 y495
 *  b5 | "closed"/"open" mini-labels   | T st script | x350/680 y512
 *  b6 | infinite-set guardrail line   | T mid script red | x540 y583
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD, axisD, tickD, IntervalDot } from "./math-kit";

const AXIS_Y = 530;
const XI = (k: number) => 150 + k * 100;

export default function M11Ch01Sec11({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={25} fill={RED} script>
          {t("element-to-set vs set-to-set", "element-to-set vs set-to-set")}
        </T>
      </Fade>

      {/* beat 1 — GUARDRAIL: ∈ vs ⊆ */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={220} y={130} size={38} fill={RED} weight={800}>
          {"∈"}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.7)}>
        <T x={780} y={130} size={38} fill={GREEN} weight={800}>
          {"⊆"}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.3)}>
        <T x={220} y={160} size={14} fill={MUTED} script>
          {t("element → set", "element → set")}
        </T>
        <T x={780} y={160} size={14} fill={MUTED} script>
          {t("set → set", "set → set")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <T x={540} y={195} size={16} fill={RED} script weight={700}>
          {t("never mix these levels!", "inhe kabhi mix mat karo!")}
        </T>
      </Fade>

      {/* beat 2 — example + category error */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={220} y={225} size={16} fill={INK} weight={700}>
          {"1 ∈ {1, 2} ✓"}
        </T>
        <T x={780} y={225} size={16} fill={INK} weight={700}>
          {"{1} ⊆ {1, 2} ✓"}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.3)}>
        <T x={540} y={252} size={14} fill={RED} script>
          {t("writing “1 ⊆ A” is a category error ✗", "“1 ⊆ A” likhna category error hai ✗")}
        </T>
      </Fade>

      {/* beat 3 — universal set U */}
      <Draw on={beat >= 3} d={roundRectD(300, 290, 480, 100, 14)} stroke={AMBER_DARK} sw={2.2} delay={dl(3, 0.3)} dur={1} />
      <Fade on={beat >= 3} delay={dl(3, 1.4)}>
        <T x={320} y={312} size={17} fill={AMBER_DARK} anchor="start" weight={700}>
          {"U"}
        </T>
      </Fade>
      <Draw on={beat >= 3} d={roundRectD(350, 330, 100, 45, 8)} stroke={INK} sw={2} delay={dl(3, 2)} dur={0.6} />
      <Draw on={beat >= 3} d={roundRectD(500, 330, 120, 45, 8)} stroke={INK} sw={2} delay={dl(3, 2.5)} dur={0.6} />
      <Fade on={beat >= 3} delay={dl(3, 3.2)}>
        <T x={365} y={357} size={15} fill={INK} anchor="start" weight={700}>
          {"A"}
        </T>
        <T x={515} y={357} size={15} fill={INK} anchor="start" weight={700}>
          {"B"}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 3.9)}>
        <T x={540} y={420} size={15} fill={AMBER_DARK} script>
          {t("every set here is a subset of U", "yahan har set U ka subset hai")}
        </T>
      </Fade>

      {/* beat 4 — interval definition */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={455} size={14} fill={INK} weight={600}>
          {t(
            "interval = unbroken stretch of R;  <  →  ( open,   ≤  →  [ closed",
            "interval = R ka unbroken stretch;  <  →  ( open,   ≤  →  [ closed"
          )}
        </T>
      </Fade>

      {/* beat 5 — REPRESENT: the interval [2, 5) on a number line */}
      <Draw on={beat >= 5} d={axisD(150, 950, AXIS_Y)} stroke={INK} sw={2.2} delay={dl(5, 0.3)} dur={1} />
      {Array.from({ length: 9 }, (_, k) => k).map((k, i) => (
        <React.Fragment key={k}>
          <Draw
            on={beat >= 5}
            d={tickD(XI(k), AXIS_Y, 5)}
            stroke={MUTED}
            sw={1.4}
            delay={dl(5, 1.3 + i * 0.06)}
            dur={0.3}
          />
          <Fade on={beat >= 5} delay={dl(5, 1.4 + i * 0.06)}>
            <T x={XI(k)} y={550} size={11} fill={MUTED}>
              {k}
            </T>
          </Fade>
        </React.Fragment>
      ))}
      <Draw
        on={beat >= 5}
        d={`M ${XI(2)} ${AXIS_Y} L ${XI(5)} ${AXIS_Y}`}
        stroke={AMBER_DARK}
        sw={6}
        delay={dl(5, 2.3)}
        dur={0.6}
      />
      <IntervalDot on={beat >= 5} delay={dl(5, 3)} x={XI(2)} y={AXIS_Y} open={false} r={7} stroke={AMBER_DARK} />
      <IntervalDot on={beat >= 5} delay={dl(5, 3.4)} x={XI(5)} y={AXIS_Y} open={true} r={7} stroke={AMBER_DARK} />
      <Fade on={beat >= 5} delay={dl(5, 4.2)}>
        <T x={500} y={495} size={18} fill={INK} weight={700}>
          {"[2, 5) = {x : 2 ≤ x < 5}"}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 5)}>
        <T x={XI(2)} y={512} size={12} fill={GREEN} script anchor="start">
          {t("closed", "closed")}
        </T>
        <T x={XI(5) + 30} y={512} size={12} fill={RED} script anchor="start">
          {t("open", "open")}
        </T>
      </Fade>

      {/* beat 6 — GUARDRAIL: infinite despite looking small */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={583} size={14} fill={RED} script weight={700}>
          {t(
            "though it “looks small”, (2, 5) is an INFINITE set!",
            "“chota” dikhta hai, par (2, 5) INFINITE set hai!"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
