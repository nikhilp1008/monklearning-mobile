/**
 * M11 Ch13 · Section 17 — "Standard deviation: back to real units"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept.
 *
 * Batsman P: 44,46,45,43,47 (mean 45, tight). Batsman Q: 5,90,12,88,30
 * (mean 45, wild). Same mean, wildly different σ — reuses Sec1's two-row
 * shared-mean dot-plot pattern for direct visual continuity.
 *
 * Beats (board_reveal_at_english [0, 6.66, 18.69, 28.07, 38.4, 59.73, 74.41]):
 *  0 anchor: heading
 *  1 explain: variance comes out in marks² — awkward unit
 *  2 explain: cure — positive square root back to original units
 *  3 land (boxed, high emphasis): σ = +√(σ²)
 *  4 THE DIAGRAM: two-row dot plot, P tight vs Q wild, shared mean 45
 *  5 note (red-margin): for a must-win final, pick P — σ says so
 *  6 land: SIP investors use the same idea — lower σ = calmer ride
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  title (script 19, red, always-on)     | T mid | x540 y56
 *  b0 | heading (script 15, amber_dark)  | T mid | x540 y84
 *  b1 | text (14, ink)                   | T mid | x540 y108
 *  b2 | text (14, ink)                   | T mid | x540 y128
 *  b3 | boxed formula (18, green)        | Draw+T| box x430..650 y148..192
 *  b4 | axis P(y300)/Q(y400) + dots      | Draw  | x140..940
 *  b4 | shared mean dashed line          | Draw  | x500 y276..424
 *  b5 | red bar + note (14)              | Draw+T| x60 y450..468 · text y464
 *  b6 | closing line (script 14, green)  | T mid | x540 y496
 */

import React from "react";
import { Circle } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';
import { axisD, lineD, roundRectD } from "./math-kit";

const scaleV = (v: number) => 140 + v * 8;
const P = [44, 46, 45, 43, 47];
const Q = [5, 90, 12, 88, 30];
const MEAN = 45;

export default function M11Ch13Sec17({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);
  const meanX = scaleV(MEAN);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={56} size={19} fill={RED} anchor="middle" script>
          {t("Standard Deviation: Back to Real Units", "Standard Deviation: Real Units Mein Wapas")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={84} size={15} fill={AMBER_DARK} anchor="middle" script>
          {t("The units problem — and its cure", "Units ka problem — aur uska cure")}
        </T>
      </Fade>

      {/* beat 1 — explain: awkward units */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={108} size={14} fill={INK} anchor="middle">
          {t(
            "If data is in marks, variance comes out in marks² — nobody can read that.",
            "Data marks mein hai toh variance marks² mein aata hai — koi padh nahi sakta."
          )}
        </T>
      </Fade>

      {/* beat 2 — explain: the cure */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={540} y={128} size={14} fill={INK} anchor="middle">
          {t(
            "Cure: take the POSITIVE square root, back to the original units.",
            "Cure: POSITIVE square root lo, wapas original units mein."
          )}
        </T>
      </Fade>

      {/* beat 3 — land (boxed, high emphasis): σ = +√(σ²) */}
      <Draw on={beat >= 3} delay={dl(3, 0)} d={roundRectD(430, 148, 220, 44)} stroke={GREEN} sw={2.2} dur={0.7} />
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={540} y={176} size={18} fill={GREEN} anchor="middle" weight={800}>
          {"σ = +√(σ²)"}
        </T>
      </Fade>

      {/* beat 4 — THE DIAGRAM: P tight vs Q wild, shared mean */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={140} y={280} size={13} fill={GREEN} anchor="start" script>
          {t("Batsman P (tight): 44,46,45,43,47", "Batsman P (tight): 44,46,45,43,47")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 0.4)} d={axisD(140, 940, 300)} stroke={INK} sw={2} dur={0.7} />
      <Draw on={beat >= 4} delay={dl(4, 0.7)} d={axisD(140, 940, 400)} stroke={INK} sw={2} dur={0.7} />
      {P.map((v, i) => (
        <Fade key={`p${i}`} on={beat >= 4} delay={dl(4, 1.1 + i * 0.15)}>
          <Circle cx={scaleV(v)} cy={300} r={4} fill={GREEN} />
        </Fade>
      ))}
      {Q.map((v, i) => (
        <Fade key={`q${i}`} on={beat >= 4} delay={dl(4, 1.9 + i * 0.2)}>
          <Circle cx={scaleV(v)} cy={400} r={5} fill={RED} />
        </Fade>
      ))}
      <Fade on={beat >= 4} delay={dl(4, 3)}>
        <T x={140} y={420} size={13} fill={RED} anchor="start" script>
          {t("Batsman Q (wild): 5,90,12,88,30", "Batsman Q (wild): 5,90,12,88,30")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 3.5)} d={lineD(meanX, 276, meanX, 424)} stroke={AMBER_DARK} sw={1.8} dur={0.6} />
      <Fade on={beat >= 4} delay={dl(4, 4.1)}>
        <T x={meanX + 10} y={270} size={13} fill={AMBER_DARK} anchor="start">
          {t("mean = 45 (both)", "mean = 45 (dono)")}
        </T>
      </Fade>

      {/* beat 5 — note: pick P for a must-win final */}
      <Draw on={beat >= 5} delay={dl(5, 0.1)} d="M 60 450 L 60 468" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={76} y={464} size={14} fill={RED} anchor="start" weight={700}>
          {t(
            "Must-win final → pick P — σ is exactly why it's the safer bet.",
            "Must-win final → P chuno — σ hi wo number hai jo safer bet batata hai."
          )}
        </T>
      </Fade>

      {/* beat 6 — land: SIP investors use the same idea */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={496} size={14} fill={GREEN} anchor="middle" script>
          {t(
            "SIP investors: equal average returns, lower σ = the calmer ride.",
            "SIP investors: same average returns, kam σ = calmer ride."
          )}
        </T>
      </Fade>
    </Scene>
  );
}
