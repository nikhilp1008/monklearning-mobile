/**
 * Ch12 · Section 2 — "The force that sets the spacing"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 1, 19.43, 35.56, 52.2, 65.26, 80.96, 96.66]):
 *  0 title + underline · 1 attract (moderate dist.) vs repel (too close) mini
 *    pairs · 2 r₀ callout (net force = 0) · 3 THE GRAPH: F(r) and U(r) vs r,
 *    r₀ marked · 4 F = −dU/dr, slope = 0 at the U minimum · 5 restoring force
 *    at r₀ · 6 gas: far beyond force range · 7 heat: solid → liquid → gas
 *
 * Layout plan (Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s; house palette
 * only, no literal "blue" — U(r) is amber-dashed-look, not blue):
 *  b0 | title (script 28, red)         | T mid | x270..810  y36..86  (bl 72)
 *  b0 | underline                       | Draw  | y94  x330..750
 *  b1 | attract dots+arrow+caption      | mix   | x250/350 y140 · caption
 *       "moderate…attract" (14,green)  | T mid | x173..427  y164..189 (bl182)
 *  b1 | repel dots+arrows+caption       | mix   | x750/810 y140 · caption
 *       "too close…repel" (14,red)     | T mid | x684..876  y164..189 (bl182)
 *  b2 | r₀ callout (script 17, green)  | T mid | x311..769  y200..231 (bl222)
 *  b3 | axes (v x100 y290..460, h y400 x90..975) + r₀ line x420 y290..460
 *  b3 | F(r) curve (ink, solid)        | Draw  | y296..446 x130..950
 *  b3 | U(r) curve (amber_dark, dashed)| Fade  | y294..452 x140..950
 *  b3 | "F (force)" (13, ink, start)   | T st  | x250..314 y293..317 (bl310)
 *  b3 | "U (potential energy)" (13)    | T st  | x170..320 y253..277 (bl270)
 *  b3 | "r₀" tick label (12, ink)      | T mid | x413..427 y266..288 (bl282)
 *  b4 | "F = −dU/dr" chip              | Chip  | x440..640 y248..278
 *  b4 | arrow chip→U-minimum            | Draw  | (540,280)→(425,443)
 *  b4 | "slope = 0 here" (12, ink)     | T mid | x490..590 y279..300 (bl295)
 *  b5 | restoring arrows ×2 @ r₀        | Draw  | x390..450 y340
 *  b5 | "restoring force" (12, ink)    | T mid | x371..470 y304..326 (bl320)
 *  b6 | arrow → curve tail              | Draw  | x900 y300..385
 *  b6 | "gas lives here…" (13, green)  | T mid | x793..1007 y268..292 (bl285)
 *  b7 | SOLID/LIQUID/GAS chips ×3       | Chip  | y480..514  x150/460/790
 *  b7 | "+heat" arrows ×2 (red)        | Draw  | (290,497)→(460,497) ·
 *       (620,497)→(790,497), labels (13,red) above each
 */

import React from "react";
import { Circle, Path } from 'react-native-svg';
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
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch12Sec2({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={72} size={28} fill={RED} script>
          {t("the force that sets the spacing", "yeh force jo spacing set karti hai")}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 0.3)}
        d="M 330 94 C 420 90, 660 98, 750 92"
        stroke={RED}
        sw={2.4}
        dur={0.7}
      />

      {/* beat 1 — attract (moderate distance) vs repel (too close) */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <Circle cx={250} cy={140} r={10} fill={INK} />
        <Circle cx={350} cy={140} r={10} fill={INK} />
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.3)} d={arrowD(330, 120, 270, 120)} stroke={GREEN} sw={2.4} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 0.7)}>
        <T x={300} y={182} size={14} fill={GREEN} script>
          {t("moderate distance → weak attract", "moderate distance → halka attract")}
        </T>
      </Fade>

      <Fade on={beat >= 1} delay={dl(1, 1.1)}>
        <Circle cx={750} cy={140} r={10} fill={INK} />
        <Circle cx={810} cy={140} r={10} fill={INK} />
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.4)} d={arrowD(780, 120, 740, 120)} stroke={RED} sw={2.4} dur={0.35} />
      <Draw on={beat >= 1} delay={dl(1, 1.5)} d={arrowD(780, 120, 820, 120)} stroke={RED} sw={2.4} dur={0.35} />
      <Fade on={beat >= 1} delay={dl(1, 1.9)}>
        <T x={780} y={182} size={14} fill={RED} script>
          {t("too close → strong repel", "bahut close → strong repel")}
        </T>
      </Fade>

      {/* beat 2 — r0 callout */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={222} size={17} fill={GREEN} script>
          {t(
            "r₀ — attraction & repulsion cancel: net force = 0",
            "r₀ — attraction & repulsion cancel: net force zero"
          )}
        </T>
      </Fade>

      {/* beat 3 — THE GRAPH: F(r) and U(r) vs r */}
      <Draw on={beat >= 3} delay={dl(3, 0)} d={arrowD(90, 400, 975, 400)} stroke={INK} sw={2} dur={0.7} />
      <Draw on={beat >= 3} delay={dl(3, 0.2)} d={arrowD(100, 460, 100, 285)} stroke={INK} sw={2} dur={0.6} />
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={985} y={412} size={13} fill={INK} anchor="start">
          r
        </T>
        <T x={90} y={278} size={12} fill={INK} anchor="middle">
          F, U
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 1)} d="M 420 290 L 420 460" stroke={MUTED} sw={1.4} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 1.3)}>
        <T x={420} y={282} size={12} fill={INK}>
          r₀
        </T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 1.6)}
        d="M 130 300 C 220 300, 300 380, 420 400 C 480 415, 500 445, 560 445 C 680 445, 800 410, 950 396"
        stroke={INK}
        sw={2.8}
        dur={1.3}
      />
      <Fade on={beat >= 3} delay={dl(3, 3)}>
        <T x={250} y={310} size={13} fill={INK} anchor="start" script>
          F (force)
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 3.6)}>
        <Path
          d="M 140 294 C 220 330, 280 390, 340 400 C 380 425, 400 452, 420 452 C 460 452, 600 430, 950 392"
          fill="none"
          stroke={AMBER_DARK}
          strokeWidth={2}
          strokeDasharray="7 5"
        />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 4.2)}>
        <T x={170} y={270} size={13} fill={AMBER_DARK} anchor="start" script>
          U (potential energy)
        </T>
      </Fade>

      {/* beat 4 — F = -dU/dr, slope zero at the U minimum */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <Chip x={440} y={248} w={200} h={30} fill={CREAM} stroke={AMBER} textFill={INK} size={16} script={false}>
          F = −dU/dr
        </Chip>
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 1.4)}
        d={arrowD(540, 280, 425, 443)}
        stroke={AMBER_DARK}
        sw={2.2}
        dur={0.6}
      />
      <Fade on={beat >= 4} delay={dl(4, 2.1)}>
        <T x={540} y={295} size={12} fill={INK} script>
          {t("slope = 0 here", "yahaan slope = 0")}
        </T>
      </Fade>

      {/* beat 5 — restoring force at r0 */}
      <Draw on={beat >= 5} delay={dl(5, 0.3)} d={arrowD(392, 340, 414, 340)} stroke={GREEN} sw={2.2} dur={0.35} />
      <Draw on={beat >= 5} delay={dl(5, 0.6)} d={arrowD(448, 340, 426, 340)} stroke={GREEN} sw={2.2} dur={0.35} />
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={420} y={320} size={12} fill={GREEN} script>
          {t("restoring force", "restoring force")}
        </T>
      </Fade>

      {/* beat 6 — gas: far beyond force range */}
      <Draw on={beat >= 6} delay={dl(6, 0.3)} d={arrowD(900, 300, 900, 385)} stroke={GREEN} sw={2.2} dur={0.6} />
      <Fade on={beat >= 6} delay={dl(6, 1.2)}>
        <T x={900} y={285} size={13} fill={GREEN} script>
          {t("gas lives here — no force felt", "gas yahin rehta — force feel nahi")}
        </T>
      </Fade>

      {/* beat 7 — heat: solid -> liquid -> gas */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Chip x={150} y={480} w={140} h={34} fill={CREAM} stroke={INK} textFill={INK} size={16} script={false}>
          SOLID
        </Chip>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 1.3)} d={arrowD(290, 497, 460, 497)} stroke={RED} sw={2.2} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 1.7)}>
        <T x={375} y={485} size={13} fill={RED} script>
          +heat
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 2.6)}>
        <Chip x={460} y={480} w={160} h={34} fill={CREAM} stroke={INK} textFill={INK} size={16} script={false}>
          LIQUID
        </Chip>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 3.6)} d={arrowD(620, 497, 790, 497)} stroke={RED} sw={2.2} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 4)}>
        <T x={705} y={485} size={13} fill={RED} script>
          +heat
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 4.9)}>
        <Chip x={790} y={480} w={140} h={34} fill={CREAM} stroke={INK} textFill={INK} size={16} script={false}>
          GAS
        </Chip>
      </Fade>
    </Scene>
  );
}
