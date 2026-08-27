/**
 * M11 Ch05 · Section 29 — "Worked example: consecutive odd numbers, the
 * hidden-domain trap"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. The continuous interval 10<x<19 is NOT the
 * answer — x must also be an odd natural, so only 4 discrete values qualify.
 *
 * Beats (en [0,21.25,28.67,41.56,55.04,68.52,84.57,109.4], hi
 * [0,19.54,26.88,37.8,51.37,64.09,78.85,101.03]):
 *  0 heading: the problem
 *  1 text: let smaller odd = x, next = x+2
 *  2 text: "both > 10" — x is the smaller, so x>10 guarantees both
 *  3 formula: x+(x+2)<40 ⇒ 2x+2<40 ⇒ x<19
 *  4 text: so 10<x<19 — now apply the hidden domain, x is an odd natural
 *  5 note (red-margin, high): x∈{11,13,15,17} — the interval is NOT the answer
 *  6 text: pairs (11,13)...(17,19); check x=17: 36<40 ✓; x=19: 40, excluded
 *  7 diagram: number line, open circles at 10,19; filled odd dots inside
 *
 * Layout plan:
 *  b0 | problem (17,ink,w700)      | T mid | bl 108
 *  b1 | caption (14,ink,scr)       | T mid | bl 144
 *  b2 | caption (14,ink,scr)       | T mid | bl 176
 *  b3 | formula (18,ink,w700)      | T mid | bl 212
 *  b4 | caption (14,ink,scr)       | T mid | bl 248
 *  b5 | boxed guardrail (15,red)   | Chip  | x210..870 y270..316
 *  b6 | caption (13,ink)           | T mid | bl 358
 *  b7 | number line + dots         | Draw/circle/T | y490, x150..860
 */

import React from "react";
import { Circle } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, MUTED, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';
import { axisD, tickD, IntervalDot, lineD } from "./math-kit";

const X0 = 150; // value 8
const STEP = 58;
const xFor = (v: number) => X0 + (v - 8) * STEP;

export default function M11Ch05Sec29({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={22} fill={RED} script>
          {t("the interval is continuous — the ANSWER might not be", "interval continuous hai — ANSWER shayad na ho")}
        </T>
      </Fade>

      {/* beat 0 — the problem */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={108} size={17} fill={INK} weight={700}>
          {t("consecutive odd naturals, both > 10, whose sum < 40", "consecutive odd naturals, dono > 10, jinka sum < 40")}
        </T>
      </Fade>

      {/* beat 1 — name the unknowns */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={144} size={14} fill={INK} script>
          {t("let the smaller odd number = x; the next = x+2", "chota odd number = x; agla = x+2")}
        </T>
      </Fade>

      {/* beat 2 — "both > 10" */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={176} size={14} fill={INK} script>
          {t("'both > 10': x is the smaller, so x>10 guarantees both", "'dono > 10': x chota hai, isliye x>10 dono guarantee karta hai")}
        </T>
      </Fade>

      {/* beat 3 — the inequality */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={212} size={18} fill={INK} weight={700}>
          x + (x+2) &lt; 40 ⇒ 2x+2 &lt; 40 ⇒ x &lt; 19
        </T>
      </Fade>

      {/* beat 4 — the hidden domain */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={248} size={14} fill={INK} script>
          {t(
            "so 10 < x < 19 — now apply the hidden domain: x is an odd natural",
            "toh 10 < x < 19 — ab hidden domain lagao: x ek odd natural hai"
          )}
        </T>
      </Fade>

      {/* beat 5 — the guardrail: discrete, not continuous */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Chip x={210} y={270} w={660} h={46} fill={CREAM} stroke={RED} textFill={RED} size={15}>
          {t(
            "x ∈ {11, 13, 15, 17} — the continuous interval is NOT the answer",
            "x ∈ {11, 13, 15, 17} — continuous interval ANSWER nahi hai"
          )}
        </Chip>
      </Fade>

      {/* beat 6 — check the pairs */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={358} size={13} fill={INK}>
          {t(
            "pairs: (11,13),(13,15),(15,17),(17,19) — x=17: 36<40 ✓; x=19: 40, excluded",
            "pairs: (11,13),(13,15),(15,17),(17,19) — x=17: 36<40 ✓; x=19: 40, excluded"
          )}
        </T>
      </Fade>

      {/* beat 7 — the number line */}
      <Draw on={beat >= 7} delay={dl(7, 0.3)} d={axisD(140, 870, 490)} stroke={INK} sw={2} dur={0.9} />
      <Draw
        on={beat >= 7}
        delay={dl(7, 1.1)}
        d={[8, 10, 12, 14, 16, 18, 20].map((v) => tickD(xFor(v), 490, 6)).join(" ")}
        stroke={INK}
        sw={1.4}
        dur={0.5}
      />
      {[8, 10, 12, 14, 16, 18, 20].map((v) => (
        <Fade key={v} on={beat >= 7} delay={dl(7, 1.6)}>
          <T x={xFor(v)} y={508} size={12} fill={MUTED}>
            {v}
          </T>
        </Fade>
      ))}
      <Draw on={beat >= 7} delay={dl(7, 2.1)} d={lineD(xFor(10), 490, xFor(19), 490)} stroke={GREEN} sw={5} dur={0.6} />
      <IntervalDot on={beat >= 7} delay={dl(7, 2.6)} x={xFor(10)} y={490} open={true} r={5} stroke={RED} />
      <IntervalDot on={beat >= 7} delay={dl(7, 2.9)} x={xFor(19)} y={490} open={true} r={5} stroke={RED} />
      {[11, 13, 15, 17].map((v, i) => (
        <React.Fragment key={v}>
          <Fade on={beat >= 7} delay={dl(7, 3.3 + i * 0.3)}>
            <Circle cx={xFor(v)} cy={490} r={5} fill={GREEN} stroke={INK} strokeWidth={1} />
          </Fade>
          <Fade on={beat >= 7} delay={dl(7, 3.5 + i * 0.3)}>
            <T x={xFor(v)} y={470} size={12} fill={INK} weight={700}>
              {v}
            </T>
          </Fade>
        </React.Fragment>
      ))}
    </Scene>
  );
}
