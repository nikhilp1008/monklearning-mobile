/**
 * Ch14 · Section 4 — "The wave toolkit: master relations"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 11.13, 25.37, 39.17, 50.75, 65.44, 76.57, 95.26]):
 *  0 framing caption: keep these on speed dial
 *  1 master relation: v = fλ = λ/T = ω/k (four faces of one truth)
 *  2 bridges to angular world: ω = 2πf = 2π/T · k = 2π/λ
 *  3 travelling wave equation (+x direction)
 *  4 sign-flip trap: −x direction swaps minus → plus
 *  5 string speed recap: v = √(T/μ)
 *  6 particle velocity ≠ wave velocity
 *  7 verdict: v = fλ always holds across a medium change
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | caption (13,muted)            | T mid | x540 bl110            y97..117
 *  b0 | underline                     | Draw  | x440..640 y120
 *  b1 | 4 ticks (amber)               | Draw  | x350/410/670/730 y114..122
 *  b1 | master chip (h54,s24)         | Chip  | x190..890 y130..184
 *  b1 | subcaption (13,green)         | T mid | x540 bl200            y187..203
 *  b2 | brace                         | Draw  | x65 y297..333
 *  b2 | "ω=2πf=2π/T" (16)             | T st  | x80 bl308             y296..313
 *  b2 | "k=2π/λ" (16)                 | T st  | x80 bl336             y324..341
 *  b3 | equation chip (h44,s18)       | Chip  | x60..520 y360..404
 *  b3 | "(travelling in +x)" (12)     | T mid | x290 bl426            y416..430
 *  b4 | trap chip (h30,s13)           | Chip  | x60..520 y440..470
 *  b5 | check                        | Draw  | x560 y290..299
 *  b5 | "string: v=√(T/μ)" (16)       | T st  | x580 bl300            y288..305
 *  b6 | "≠" (16,red)                  | T mid | x545 bl360            y347..365
 *  b6 | particle line (14,amber-d)    | T st  | x580 bl345            y334..349
 *  b6 | wave line (14,green)          | T st  | x580 bl370            y359..374
 *  b6 | warning (12,red)              | T st  | x580 bl395            y385..399
 *  b7 | verdict chip (h56,s15)        | Chip  | x170..910 y505..561
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
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

const TICKS_X = [350, 410, 670, 730];

export default function Ch14Sec4({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={68} size={27} fill={RED} script>
          {t("the wave toolkit: master relations", "wave ka toolkit: master relations")}
        </T>
      </Fade>

      {/* beat 0 — framing */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={110} size={13} fill={MUTED} script>
          {t("keep these on speed dial", "inhe speed dial pe rakho")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.9)} d="M 440 120 L 640 120" stroke={MUTED} sw={1.4} dur={0.4} />

      {/* beat 1 — master relation */}
      {TICKS_X.map((x, i) => (
        <Draw key={x} on={beat >= 1} delay={dl(1, 0.2 + i * 0.15)} d={`M ${x} 114 L ${x} 122`} stroke={AMBER} sw={2} dur={0.2} />
      ))}
      <Fade on={beat >= 1} delay={dl(1, 1.0)}>
        <Chip x={190} y={130} w={700} h={54} fill="#fff" stroke={GREEN} textFill={INK} size={24} script={false}>
          v = fλ = λ/T = ω/k
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.0)}>
        <T x={540} y={200} size={13} fill={GREEN} script>
          {t("four faces of one truth", "ek hi sach ke chaar chehre")}
        </T>
      </Fade>

      {/* beat 2 — bridges to the angular world */}
      <Draw on={beat >= 2} delay={dl(2, 0.2)} d="M 65 297 Q 55 315 65 333" stroke={MUTED} sw={1.6} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={80} y={308} size={16} fill={INK} anchor="start">
          ω = 2πf = 2π/T
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <T x={80} y={336} size={16} fill={INK} anchor="start">
          k = 2π/λ
        </T>
      </Fade>

      {/* beat 3 — the travelling wave equation */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <Chip x={60} y={360} w={460} h={44} fill="#fff" stroke={AMBER} textFill={INK} size={18} script={false}>
          y = A sin(ωt − kx + φ)
        </Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.2)}>
        <T x={290} y={426} size={12} fill={MUTED} script>
          {t("(travelling in +x)", "(+x direction me)")}
        </T>
      </Fade>

      {/* beat 4 — the sign-flip trap */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <Chip x={60} y={440} w={460} h={30} fill="#fff" stroke={RED} textFill={RED} size={13} script={false}>
          {t("going −x? minus → plus — favourite trap!", "−x jaaye to minus → plus — favourite trap!")}
        </Chip>
      </Fade>

      {/* beat 5 — string speed recap */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M 560 293 l 4 4 l 8 -9" stroke={GREEN} sw={2} dur={0.3} />
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={580} y={300} size={16} fill={INK} anchor="start">
          {t("string: v = √(T/μ)", "string: v = √(T/μ)")}
        </T>
      </Fade>

      {/* beat 6 — particle velocity ≠ wave velocity */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={580} y={345} size={14} fill={AMBER_DARK} anchor="start">
          {t("particle: v_p = Aω cos(phase) → peak Aω", "particle: v_p = Aω cos(phase) → peak Aω")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.0)}>
        <T x={545} y={360} size={16} fill={RED}>
          ≠
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.4)}>
        <T x={580} y={370} size={14} fill={GREEN} anchor="start">
          {t("wave: v = fλ (the pattern's speed)", "wave: v = fλ (pattern ki speed)")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.1)}>
        <T x={580} y={395} size={12} fill={RED} script anchor="start">
          {t("don't confuse the two!", "dono ko mat ulajhao!")}
        </T>
      </Fade>

      {/* beat 7 — verdict: v = fλ always holds */}
      <Fade on={beat >= 7} delay={dl(7, 0.5)}>
        <Chip x={170} y={505} w={740} h={56} fill="#fff" stroke={AMBER_DARK} textFill={INK} size={15} script={false}>
          {t(
            "f is locked by the source; v & λ change together — v=fλ always holds",
            "f source se locked; v & λ saath badalte — v=fλ kabhi nahi tootta"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
