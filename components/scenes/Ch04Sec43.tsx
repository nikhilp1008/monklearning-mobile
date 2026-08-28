/**
 * Ch04 · Section 43 — "Worked Example 2 [NEET Speed Trap]: the coin on a book"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 12.9, 25.7, 50.3, 72.4, 82.6, 93.4, 116.2]):
 *  0 title
 *  1 problem + find
 *  2 red margin: the grind trap (components, then mg cancels anyway)
 *  3 figure: tilted book + coin + 30° + the wording ringed as a definition
 *  4 recognition line: 'starts to slide' IS θr, and θr = λ
 *  5 hero box: μs = tan30° = 1/√3 ≈ 0.58
 *  6 what the fast route never touched + missing-mass hint
 *  7 red margin: distractors 0.5 and 0.87 + the reflex
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl 52 · problem st x84 bl 92 / 116
 *  b2 | bar x66 y140..196 · lines st x84 bl 160 / 184
 *  fig | book M120 400 L470 400 L470 232 Z · coin ellipse (330,290) rx16 ry6 tilted ·
 *    30° arc at (120,400) "30°"(180,388) · caption cx300 bl 440
 *  R col | b4 st x540 bl 240 / 264 · b5 box x540..1000 y290..342 bl 324 ·
 *    b6 st x540 bl 380 / 404
 *  b7 | bar x66 y470..560 · lines st x84 bl 490 / 516 / 542
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  ringD,
  INK,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch04Sec43({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "Example 2 [NEET Speed Trap] — the coin on a book",
            "Example 2 [NEET Speed Trap] — kitaab par coin"
          )}
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <T x={84} y={92} size={13} fill={INK} script anchor="start">
          {t(
            "a coin on a closed book STARTS TO SLIDE the moment the book reaches 30°",
            "band kitaab par rakha coin 30° par pahunchte hi SARAKNA SHURU kar deta hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 8)}>
        <T x={84} y={116} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "find: μs between coin and cover — note the mass is never given",
            "nikaalo: coin aur cover ke beech μs — dhyaan do, mass diya hi nahi"
          )}
        </T>
      </Fade>

      {/* beat 2 — the grind trap */}
      <Draw on={beat >= 2} delay={dl(2, 0.6)} d="M 66 140 v 56" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <T x={84} y={160} size={14} fill={RED} script anchor="start">
          {t(
            "trap: draw mg·sinθ, mg·cosθ, set up full equilibrium, grind…",
            "trap: mg·sinθ, mg·cosθ banao, poori equilibrium khadi karo, piso…"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 10)}>
        <T x={84} y={184} size={14} fill={RED} script anchor="start">
          {t(
            "…and watch mg cancel anyway — a minute gone, and a question lost elsewhere",
            "…aur mg waise bhi cancel — ek minute gaya, kahin aur ka sawaal gaya"
          )}
        </T>
      </Fade>

      {/* beat 3 — the figure */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 1)}
        d="M 120 400 L 470 400 L 470 232 Z"
        stroke={INK}
        sw={2.6}
        dur={1}
      />
      <Draw
        on={beat >= 3}
        delay={dl(3, 2.4)}
        d="M 300 312 L 348 289 L 356 300 L 308 323 Z"
        stroke={AMBER}
        sw={2.4}
        dur={0.5}
      />
      <Draw
        on={beat >= 3}
        delay={dl(3, 3.2)}
        d="M 176 400 Q 174 384 162 382"
        stroke={INK}
        sw={1.8}
        dur={0.3}
      />
      <Fade on={beat >= 3} delay={dl(3, 3.6)}>
        <T x={188} y={390} size={13} fill={AMBER_DARK} weight={700} anchor="start">
          30°
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 6)}>
        <T x={300} y={440} size={13} fill={AMBER_DARK} script>
          {t(
            "'just begins to slide' is not a description — it is a DEFINITION",
            "'bas sarakne lagta hai' vivaran nahi — ye PARIBHASHA hai"
          )}
        </T>
      </Fade>

      {/* beat 4 — the recognition */}
      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <T x={540} y={240} size={13} fill={INK} script anchor="start">
          {t(
            "the question has handed you θr directly: θr = 30°",
            "sawaal ne θr seedha thama diya hai: θr = 30°"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 6)}>
        <T x={540} y={264} size={13} fill={GREEN} script anchor="start">
          {t(
            "and we proved it two sections ago: tan θr = μs",
            "aur do section pehle prove kiya tha: tan θr = μs"
          )}
        </T>
      </Fade>

      {/* beat 5 — one line */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.8)}
        d="M 552 290 h 436 q 12 0 12 12 v 28 q 0 12 -12 12 h -436 q -12 0 -12 -12 v -28 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.8}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 5} delay={dl(5, 1.8)}>
        <T x={770} y={324} size={18} fill={INK} weight={800}>
          μs = tan30° = 1⁄√3 ≈ 0.58
        </T>
      </Fade>

      {/* beat 6 — what the fast route skipped */}
      <Fade on={beat >= 6} delay={dl(6, 1.5)}>
        <T x={540} y={380} size={13} fill={GREEN} script anchor="start">
          {t(
            "no resolution · no equilibrium equations · no mass",
            "na resolution · na equilibrium equations · na mass"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 7)}>
        <T x={540} y={404} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "a missing mass is a HINT — it is telling you it will cancel",
            "gayab mass ek ISHAARA hai — bata raha hai ki wo cancel hoga"
          )}
        </T>
      </Fade>

      {/* beat 7 — the distractors */}
      <Draw on={beat >= 7} delay={dl(7, 0.6)} d="M 66 470 v 82" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={84} y={490} size={14} fill={RED} script anchor="start">
          {t(
            "distractors 0.5 and 0.87 are sin30° and cos30° — set deliberately",
            "distractors 0.5 aur 0.87 hain sin30° aur cos30° — jaanbujhkar rakhe gaye"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 8)}>
        <T x={84} y={516} size={14} fill={RED} script anchor="start">
          {t(
            "they catch whoever built the components but forgot they collapse to a TANGENT",
            "wo unhe pakadte hain jinhone components to banaye par bhool gaye ki wo TANGENT ban jaate hain"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 15)}>
        <T x={84} y={542} size={14} fill={GREEN} script anchor="start">
          {t(
            "bank the reflex: 'just begins to slide at θ' → μ = tanθ → move on",
            "reflex bank karo: 'θ par sarakne lagta hai' → μ = tanθ → aage badho"
          )}
        </T>
      </Fade>

      {/* the ringed definition — annotation on the caption, beat 4 */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 10)}
        d={ringD(300, 435, 190, 16)}
        stroke={AMBER}
        sw={2}
        dur={0.7}
      />
    </Scene>
  );
}
