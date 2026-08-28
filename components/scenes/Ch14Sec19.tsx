/**
 * Ch14 · Section 19 — "Standing waves: a pattern that goes nowhere"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 10.92, 18.68, 28.45, 37.36, 43.11, 52.59, 63.51]):
 *  0 hook: pluck a string — it shimmers in place, doesn't race off
 *  1 the figure: nodes (N, still) and antinodes (A, max swing), 2 loops
 *  2 mechanism: wave hits the end, reflects — two waves, opposite ways
 *  3 superpose: nodes always cancel, antinodes always reinforce (ringed)
 *  4 key line: standing wave = forward wave + its own reflection
 *  5 skipping-rope analogy: the loop stays put, no energy leaves
 *  6 spacing: adjacent nodes λ/2 apart; node↔antinode λ/4 apart
 *  7 deep difference: energy trapped, sloshes rather than streams
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | caption (13,muted)            | T mid | x540 bl110            y97..117
 *  b1 | baseline                      | Draw  | x150..950 y380
 *  b1 | envelope upper (2 loops)      | Draw  | x150..950 y320..380
 *  b1 | envelope lower (2 loops)      | Draw  | x150..950 y380..440
 *  b1 | 3 node dots + "N" labels      | Draw+T| x150/550/950 y380 bl405
 *  b1 | 2 antinode "A" labels         | T mid | x350/750 bl300         y287..301
 *  b2 | arrow → / ← (mechanism)       | Draw  | x450..490 y175/195
 *  b2 | caption (12,muted)            | T mid | x540 bl218            y206..219
 *  b3 | ring (node, red)              | Draw  | c(550,380) r14/10
 *  b3 | "always cancel" (11,red)      | T st  | x580 bl384            y373..388
 *  b3 | ring (antinode, green)        | Draw  | c(350,320) r16/20
 *  b3 | "MAX amplitude!" (11,green)   | T st  | x382 bl325            y314..328
 *  b4 | key-line chip (h50,s18)       | Chip  | x250..830 y500..550
 *  b5 | loop icon (rope)              | Draw  | x430..490 y215..255
 *  b5 | rope label (12)               | T st  | x500 bl238            y226..240
 *  b6 | λ/2 arrow                     | Draw  | x150..550 y445
 *  b6 | "λ/2 apart" (12)              | T mid | x350 bl465            y453..467
 *  b6 | "(node↔antinode = λ/4)" (11)  | T mid | x350 bl483            y472..484
 *  b7 | closing (13,red)              | T mid | x540 bl578            y565..579
 */

import React from "react";
import { Circle } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD, ringD, INK, MUTED, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

function loopEnvelopeD(x1: number, baseline: number, amp: number, loops: number, width: number, sign: number): string {
  const N = 80;
  let d = "";
  for (let i = 0; i <= N; i++) {
    const u = i / N;
    const y = baseline - sign * amp * Math.abs(Math.sin(Math.PI * loops * u));
    const x = x1 + width * u;
    d += `${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)} `;
  }
  return d;
}

function doubleArrowH(xL: number, xR: number, y: number): string {
  const mid = (xL + xR) / 2;
  return `${arrowD(mid, y, xL, y)} ${arrowD(mid, y, xR, y)}`;
}

export default function Ch14Sec19({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={68} size={25} fill={RED} script>
          {t("standing waves: a pattern that goes nowhere", "standing waves: pattern jo kahin nahi jaata")}
        </T>
      </Fade>

      {/* beat 0 — hook */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={110} size={13} fill={MUTED} script>
          {t("pluck a string — it shimmers in place, doesn't race off", "string pluck karo — shimmer karti, bhagti nahi")}
        </T>
      </Fade>

      {/* beat 1 — the figure */}
      <Draw on={beat >= 1} delay={dl(1, 0.2)} d="M 150 380 L 950 380" stroke={MUTED} sw={1.6} dur={0.7} />
      <Draw on={beat >= 1} delay={dl(1, 1.0)} d={loopEnvelopeD(150, 380, 60, 2, 800, 1)} stroke={INK} sw={1.8} dur={1} />
      <Draw on={beat >= 1} delay={dl(1, 2.1)} d={loopEnvelopeD(150, 380, 60, 2, 800, -1)} stroke={INK} sw={1.8} dur={1} />
      <Fade on={beat >= 1} delay={dl(1, 3.2)}>
        <>
          {[150, 550, 950].map((x) => (
            <Circle key={x} cx={x} cy={380} r={4} fill={INK} />
          ))}
        </>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.6)}>
        <>
          {[150, 550, 950].map((x) => (
            <T key={x} x={x} y={405} size={13} fill={INK}>
              N
            </T>
          ))}
        </>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 4.1)}>
        <>
          {[350, 750].map((x) => (
            <T key={x} x={x} y={300} size={13} fill={INK}>
              A
            </T>
          ))}
        </>
      </Fade>

      {/* beat 2 — the mechanism */}
      <Draw on={beat >= 2} delay={dl(2, 0.3)} d={arrowD(450, 175, 490, 175)} stroke={AMBER_DARK} sw={2} dur={0.4} />
      <Draw on={beat >= 2} delay={dl(2, 0.9)} d={arrowD(490, 195, 450, 195)} stroke={GREEN} sw={2} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 1.5)}>
        <T x={540} y={218} size={12} fill={MUTED} script>
          {t("hits the end, reflects — now TWO waves, opposite ways", "end tak jaake reflect — ab DO waves, opposite ways")}
        </T>
      </Fade>

      {/* beat 3 — superpose: nodes cancel, antinodes reinforce */}
      <Draw on={beat >= 3} delay={dl(3, 0.3)} d={ringD(550, 380, 14, 10)} stroke={RED} sw={2} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 0.9)}>
        <T x={580} y={384} size={11} fill={RED} anchor="start">
          {t("always cancel", "hamesha cancel")}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 1.5)} d={ringD(350, 320, 16, 20)} stroke={GREEN} sw={2} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 2.1)}>
        <T x={382} y={325} size={11} fill={GREEN} anchor="start">
          {t("MAX amplitude!", "MAX amplitude!")}
        </T>
      </Fade>

      {/* beat 4 — the key line */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <Chip x={250} y={500} w={580} h={50} fill={GREEN} textFill="#fff" size={18} script={false}>
          {t(
            "standing wave = forward wave + its own reflection",
            "standing wave = forward wave + apni reflection"
          )}
        </Chip>
      </Fade>

      {/* beat 5 — skipping-rope analogy */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M 430 235 Q 460 210 490 235 Q 460 260 430 235" stroke={AMBER_DARK} sw={2} dur={0.6} />
      <Fade on={beat >= 5} delay={dl(5, 0.9)}>
        <T x={500} y={238} size={12} fill={INK} anchor="start">
          {t("skipping rope: loop stays put, energy stays too", "skipping rope: loop wahin rehta, energy bhi")}
        </T>
      </Fade>

      {/* beat 6 — the spacing */}
      <Draw on={beat >= 6} delay={dl(6, 0.3)} d={doubleArrowH(150, 550, 445)} stroke={AMBER_DARK} sw={2} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 1.0)}>
        <T x={350} y={465} size={12} fill={AMBER_DARK}>
          {t("λ/2 apart", "λ/2 door")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.5)}>
        <T x={350} y={483} size={11} fill={MUTED} script>
          {t("(node↔antinode = λ/4)", "(node↔antinode = λ/4)")}
        </T>
      </Fade>

      {/* beat 7 — the deep difference */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={540} y={578} size={13} fill={RED} script>
          {t(
            "energy TRAPPED between boundaries — sloshes, doesn't stream!",
            "energy TRAPPED boundaries ke beech — slosh karti, stream nahi!"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
