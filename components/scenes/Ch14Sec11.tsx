/**
 * Ch14 · Section 11 — "Beats: a note that throbs"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 6.5, 21.78, 37.06, 41.94, 49.42, 55.92, 66.65]):
 *  0 hook: two waves, almost same frequency — what happens?
 *  1 the figure: fast oscillation inside a slow swelling/fading envelope
 *  2 mechanism: loud where in-phase (ringed), soft where out-of-phase (ringed)
 *  3 that periodic swell & fade = BEATS
 *  4 f_beat = |f1 − f2|
 *  5 example: Δf=3 Hz → 3 throbs/sec, just subtraction
 *  6 application: tune by ear — throb slows, vanishes when matched
 *  7 limit: only works when close; >7 Hz gap → blur
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | caption (14,muted)            | T mid | x540 bl110            y99..114
 *  b1 | beat waveform                 | Draw  | x100..980 y302..438
 *  b1 | envelope upper                | Draw  | x100..980 y302..370
 *  b1 | envelope lower                | Draw  | x100..980 y370..438
 *  b2 | ring (loud, centre)           | Draw  | c(540,370) r20/68
 *  b2 | "loud (in phase)" (12,green)  | T mid | x540 bl455            y443..457
 *  b2 | ring (soft dip)               | Draw  | c(320,370) r14/10
 *  b2 | "soft (out of phase)" (12,red)| T mid | x320 bl455            y443..457
 *  b3 | "= BEATS..." (13,amber-d)     | T mid | x540 bl468            y451..475
 *  b4 | formula chip (h38,s18)        | Chip  | x400..680 y485..523
 *  b5 | example (13)                  | T st  | x150 bl535            y523..537
 *  b6 | tuning (13)                   | T st  | x580 bl535            y523..537
 *  b7 | limit warning (13,red)        | T mid | x540 bl565            y552..566
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  ringD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

function beatWaveD(x1: number, baseline: number, amp: number, nCarrier: number, nEnv: number, width: number): string {
  const N = 140;
  let d = "";
  for (let i = 0; i <= N; i++) {
    const u = i / N;
    const y = baseline - amp * Math.cos(2 * Math.PI * nEnv * u) * Math.sin(2 * Math.PI * nCarrier * u);
    const x = x1 + width * u;
    d += `${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)} `;
  }
  return d;
}

function envelopeD(x1: number, baseline: number, amp: number, nEnv: number, width: number, sign: number): string {
  const N = 60;
  let d = "";
  for (let i = 0; i <= N; i++) {
    const u = i / N;
    const y = baseline - sign * amp * Math.abs(Math.cos(2 * Math.PI * nEnv * u));
    const x = x1 + width * u;
    d += `${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)} `;
  }
  return d;
}

export default function Ch14Sec11({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={68} size={28} fill={RED} script>
          {t("beats: a note that throbs", "beats: throb karta hua note")}
        </T>
      </Fade>

      {/* beat 0 — hook */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={110} size={14} fill={MUTED} script>
          {t("two waves, almost the same frequency... what happens?", "do waves, lagbhag same frequency... kya hota hai?")}
        </T>
      </Fade>

      {/* beat 1 — the figure: fast oscillation inside a swelling envelope */}
      <Draw on={beat >= 1} delay={dl(1, 0.3)} d={envelopeD(100, 370, 65, 1, 880, 1)} stroke={AMBER} sw={1.4} dur={1} />
      <Draw on={beat >= 1} delay={dl(1, 1.1)} d={envelopeD(100, 370, 65, 1, 880, -1)} stroke={AMBER} sw={1.4} dur={1} />
      <Draw on={beat >= 1} delay={dl(1, 2.0)} d={beatWaveD(100, 370, 65, 14, 1, 880)} stroke={INK} sw={1.6} dur={1.4} />

      {/* beat 2 — mechanism: loud vs soft, ringed */}
      <Draw on={beat >= 2} delay={dl(2, 0.3)} d={ringD(540, 370, 20, 68)} stroke={GREEN} sw={2.2} dur={0.6} />
      <Fade on={beat >= 2} delay={dl(2, 1.0)}>
        <T x={540} y={455} size={12} fill={GREEN}>
          {t("loud (in phase)", "loud (in phase)")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.6)} d={ringD(320, 370, 14, 10)} stroke={RED} sw={2} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 2.2)}>
        <T x={320} y={455} size={12} fill={RED}>
          {t("soft (out of phase)", "soft (out of phase)")}
        </T>
      </Fade>

      {/* beat 3 — that's beats */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={478} size={13} fill={AMBER_DARK} script>
          {t("= BEATS (periodic swell & fade)", "= BEATS (baar-baar swell & fade)")}
        </T>
      </Fade>

      {/* beat 4 — the formula */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <Chip x={400} y={495} w={280} h={38} fill="#fff" stroke={AMBER} textFill={INK} size={18} script={false}>
          f_beat = |f₁ − f₂|
        </Chip>
      </Fade>

      {/* beat 5 — example */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={150} y={548} size={13} fill={INK} anchor="start">
          {t("e.g. Δf=3 Hz → 3 throbs/sec (just subtract!)", "jaise Δf=3 Hz → 3 throbs/sec (bas subtract!)")}
        </T>
      </Fade>

      {/* beat 6 — tuning by ear */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={580} y={548} size={13} fill={GREEN} anchor="start">
          {t("tune by ear: throb slows → vanishes = MATCHED", "kaan se tune: throb slow → gayab = MATCH!")}
        </T>
      </Fade>

      {/* beat 7 — the limit */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={540} y={578} size={13} fill={RED} script>
          {t(
            "only works if close — >7 Hz gap = too fast, sounds like a BLUR!",
            "sirf tab jab close ho — >7Hz gap = zyada tez, BLUR lagta!"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
