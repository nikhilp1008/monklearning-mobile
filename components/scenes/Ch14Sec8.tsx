/**
 * Ch14 · Section 8 — "Worked example: pulse up a hanging rope"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 6.21, 19.88, 24.23, 40.69, 54.98, 64.61, 79.21]):
 *  0 hook badge: JEE Advanced — real physics now
 *  1 the picture: rope (5 kg, 2 m) + block (4 kg) + flick at the bottom
 *  2 g = 10 m/s²
 *  3 KEY INSIGHT: tension is NOT constant — T grows with height, so v grows too
 *  4 μ = 5/2 = 2.5 kg/m, T(x) = (4 + 2.5x)g
 *  5 v(x) = √(T/μ) = 2√(4 + 2.5x)
 *  6 integrate: t = ∫dx/v, u = 4+2.5x → t = 0.4 s
 *  7 physical check: slow at bottom, fast at top — single avg v is WRONG
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | badge chip (13)               | Chip  | x400..660 y100..130
 *  b0 | underline                     | Draw  | x400..640 y136
 *  b1 | ceiling hatch                 | Draw  | x150..280 y80..95
 *  b1 | rope line                     | Draw  | x200 y95..390
 *  b1 | "5 kg, 2 m" (13)              | T st  | x235 bl240            y228..241
 *  b1 | block                         | Draw  | x175..225 y390..422
 *  b1 | "4 kg" (12)                   | T mid | x200 bl410            y400..414
 *  b1 | flick arrow + "flick!" (11)   | Draw+T| x140..172 y406
 *  b1 | question chip (h34)           | Chip  | x400..720 y145..179
 *  b2 | "g = 10 m/s²" chip (h30)      | Chip  | x400..600 y188..218
 *  b3 | T-small tick + label (10)     | Draw+T| x215..235 y375
 *  b3 | T-big tick + label (10)       | Draw+T| x215..260 y120
 *  b3 | insight chip (h50,s15)        | Chip  | x400..1020 y230..280
 *  b4 | "μ=5/2=2.5 kg/m" (15)         | T st  | x400 bl300            y288..305
 *  b4 | "T(x)=(4+2.5x)g=...×10" (15)  | T st  | x400 bl330            y318..335
 *  b5 | "v(x)=√(T/μ)=2√(4+2.5x)" (16) | T st  | x400 bl368            y355..373
 *  b6 | "t=∫₀² dx/v(x)" (15)          | T st  | x400 bl403            y391..408
 *  b6 | "u=4+2.5x → t=(1/5)[2√u]₄⁹"   | T st  | x400 bl428            y416..432
 *  b6 | answer chip (h40,s18)         | Chip  | x400..580 y440..480
 *  b7 | physical-check (14)           | T mid | x540 bl520            y502..524
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
  arrowD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch14Sec8({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={68} size={24} fill={RED} script>
          {t("worked example: pulse up a hanging rope", "worked example: latakti rope pe pulse")}
        </T>
      </Fade>

      {/* beat 0 — hook */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <Chip x={400} y={100} w={260} h={30} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={13}>
          {t("★ JEE Advanced — real physics now", "★ JEE Advanced — ab asli physics")}
        </Chip>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.9)} d="M 400 136 L 640 136" stroke={AMBER_DARK} sw={1.8} dur={0.3} />

      {/* beat 1 — the picture */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.1)}
        d="M 160 95 L 152 80 M 180 95 L 172 80 M 200 95 L 192 80 M 220 95 L 212 80 M 240 95 L 232 80"
        stroke={MUTED}
        sw={1.5}
        dur={0.4}
      />
      <Draw on={beat >= 1} delay={dl(1, 0.5)} d="M 150 95 L 280 95" stroke={MUTED} sw={1.8} dur={0.3} />
      <Draw on={beat >= 1} delay={dl(1, 0.9)} d="M 200 95 L 200 390" stroke={INK} sw={3} dur={0.9} />
      <Fade on={beat >= 1} delay={dl(1, 2.0)}>
        <T x={235} y={240} size={13} fill={INK} anchor="start">
          5 kg, 2 m
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2.5)} d="M 175 390 h 50 v 32 h -50 z" stroke={INK} sw={2.2} dur={0.5} fill={CREAM} />
      <Fade on={beat >= 1} delay={dl(1, 3.2)}>
        <T x={200} y={410} size={12} fill={INK}>
          4 kg
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 3.7)} d={arrowD(140, 406, 172, 406)} stroke={AMBER_DARK} sw={2.2} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 4.1)}>
        <T x={140} y={392} size={11} fill={AMBER_DARK} anchor="start">
          {t("flick!", "flick!")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 4.6)}>
        <Chip x={400} y={145} w={320} h={34} fill="#fff" stroke={INK} textFill={INK} size={14} script={false}>
          {t("find: time to climb to top?", "find karo: top tak chadhne ka time?")}
        </Chip>
      </Fade>

      {/* beat 2 — g */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <Chip x={400} y={188} w={200} h={30} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={13} script={false}>
          g = 10 m/s²
        </Chip>
      </Fade>

      {/* beat 3 — key insight: tension is NOT constant */}
      <Draw on={beat >= 3} delay={dl(3, 0.2)} d="M 215 375 L 235 375" stroke={AMBER_DARK} sw={2} dur={0.3} />
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={240} y={378} size={10} fill={AMBER_DARK} anchor="start">
          {t("T small", "T kam")}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 1.0)} d="M 215 120 L 260 120" stroke={RED} sw={2.4} dur={0.3} />
      <Fade on={beat >= 3} delay={dl(3, 1.4)}>
        <T x={265} y={123} size={10} fill={RED} anchor="start">
          {t("T big", "T zyada")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.9)}>
        <Chip x={400} y={230} w={620} h={50} fill="#fff" stroke={RED} textFill={RED} size={14} script={false}>
          {t(
            "T is NOT constant — more weight below → more T → more v!",
            "T constant NAHI — neeche zyada weight → zyada T → zyada v!"
          )}
        </Chip>
      </Fade>

      {/* beat 4 — mu and T(x) */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={400} y={300} size={15} fill={INK} anchor="start">
          μ = 5/2 = 2.5 kg/m
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.1)}>
        <T x={400} y={330} size={15} fill={INK} anchor="start">
          T(x) = (4 + 2.5x)g = (4 + 2.5x)×10
        </T>
      </Fade>

      {/* beat 5 — v(x) */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={400} y={368} size={16} fill={INK} anchor="start">
          v(x) = √(T/μ) = 2√(4 + 2.5x)
        </T>
      </Fade>

      {/* beat 6 — integrate */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={400} y={403} size={15} fill={INK} anchor="start">
          t = ∫₀² dx/v(x)
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.1)}>
        <T x={400} y={428} size={14} fill={INK} anchor="start">
          u = 4+2.5x → t = (1/5)[2√u]₄⁹
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.8)}>
        <Chip x={400} y={440} w={180} h={40} fill={GREEN} textFill="#fff" size={18} script={false}>
          t = 0.4 s
        </Chip>
      </Fade>

      {/* beat 7 — physical check */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={540} y={520} size={14} fill={RED} script>
          {t(
            "pulse crawls at the bottom, speeds up climbing — a single average v is WRONG!",
            "pulse bottom pe rengta, chadhte hue tez hota — average v se time GALAT!"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
