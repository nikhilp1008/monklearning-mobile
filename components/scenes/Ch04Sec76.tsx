/**
 * Ch04 · Section 76 — "Worked Example 2 [NEET Speed Trap]: tension in a chain"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 19.88, 39.51, 59.48, 72.53, 97.37, 108.54]):
 *  0 title
 *  1 problem: 1kg-2kg-3kg chain, F=12N on 1kg block, find T between 2kg & 3kg
 *  2 red margin: the trap — grinding through 3 coupled equations. Don't.
 *  3 diagram: chain of 3 blocks, F arrow, cut mark, caption
 *  4 formula box: a = F/(1+2+3) = 12/6 = 2 m/s²
 *  5 formula box: T = 3×a = 3×2 = 6 N — only drags the far-side block
 *  6 red margin: tension at any cut = far-side mass × a, last/first string rule
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl 52 · problem st x84 bl 92 / 116
 *  b2 | bar x66 y140..172 · line st x84 bl 160
 *  b3 diagram: floor y245 · block1(1kg) x260..310 · block2(2kg) x330..390 · block3(3kg) x410..480 ·
 *    F arr (200,227)→(260,227) lbl (195,215) · cut mark x392..408 y215..235 lbl (400,205) ·
 *    mass lbls cx285/360/445 y265 · caption cx540 bl 288
 *  b4 box x300..780 y310..354 bl 338
 *  b5 box x300..780 y374..418 bl 402
 *  b6 | bar x66 y446..540 · lines st x84 bl 466 / 492 / 518
 */

import React from "react";
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
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch04Sec76({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={52} size={19} fill={INK} script>
          {t(
            "Example 2 [NEET Speed Trap] — tension in a chain",
            "Example 2 [NEET Speed Trap] — chain mein tension"
          )}
        </T>
      </Fade>

      {/* beat 1 — problem */}
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <T x={84} y={92} size={13} fill={INK} script anchor="start">
          {t(
            "1 kg, 2 kg, 3 kg blocks in a line, pulled by F = 12 N on the 1 kg block",
            "1 kg, 2 kg, 3 kg blocks kataar mein, F = 12 N se 1 kg block khincha"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 8)}>
        <T x={84} y={116} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "find: tension in the string between the 2 kg and 3 kg blocks",
            "nikaalo: 2 kg aur 3 kg blocks ke beech string ka tension"
          )}
        </T>
      </Fade>

      {/* beat 2 — the trap */}
      <Draw on={beat >= 2} delay={dl(2, 0.6)} d="M 66 140 v 32" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <T x={84} y={160} size={14} fill={RED} script anchor="start">
          {t(
            "the trap: grinding through three coupled equations. Don't.",
            "trap: teen coupled equations pisna. Mat karo."
          )}
        </T>
      </Fade>

      {/* beat 3 — diagram */}
      <Draw on={beat >= 3} delay={dl(3, 0.8)} d="M 190 245 H 500" stroke={INK} sw={2.4} dur={0.5} />
      <Draw
        on={beat >= 3}
        delay={dl(3, 1.6)}
        d="M 260 210 h 50 v 35 h -50 z"
        stroke={INK}
        sw={2.2}
        dur={0.5}
      />
      <Draw on={beat >= 3} delay={dl(3, 2.2)} d="M 310 227 H 330" stroke={INK} sw={1.8} dur={0.3} />
      <Draw
        on={beat >= 3}
        delay={dl(3, 2.6)}
        d="M 330 210 h 60 v 35 h -60 z"
        stroke={INK}
        sw={2.2}
        dur={0.5}
      />
      <Draw on={beat >= 3} delay={dl(3, 3.2)} d="M 390 227 H 410" stroke={INK} sw={1.8} dur={0.3} />
      <Draw
        on={beat >= 3}
        delay={dl(3, 3.6)}
        d="M 410 210 h 70 v 35 h -70 z"
        stroke={INK}
        sw={2.2}
        dur={0.5}
      />
      <Draw
        on={beat >= 3}
        delay={dl(3, 4.4)}
        d={arrowD(200, 227, 260, 227)}
        stroke={AMBER_DARK}
        sw={2.6}
        dur={0.4}
      />
      <Fade on={beat >= 3} delay={dl(3, 5)}>
        <T x={195} y={215} size={12} fill={AMBER_DARK} weight={700} anchor="end">
          F = 12 N
        </T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 5.6)}
        d="M 392 215 L 408 235 M 392 235 L 408 215"
        stroke={RED}
        sw={2.2}
        dur={0.4}
      />
      <Fade on={beat >= 3} delay={dl(3, 6.2)}>
        <T x={400} y={205} size={10} fill={RED} weight={700}>
          {t("cut", "cut")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 6.8)}>
        <T x={285} y={265} size={12} fill={INK} weight={700}>
          1 kg
        </T>
        <T x={360} y={265} size={12} fill={INK} weight={700}>
          2 kg
        </T>
        <T x={445} y={265} size={12} fill={INK} weight={700}>
          3 kg
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 7.6)}>
        <T x={540} y={288} size={11} fill={MUTED} script>
          {t(
            "the tension at any cut only drags the mass on the far side",
            "kisi bhi cut par tension sirf door waali taraf ka mass ghaseetta"
          )}
        </T>
      </Fade>

      {/* beat 4 — the acceleration */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.8)}
        d="M 312 310 h 456 q 12 0 12 12 v 20 q 0 12 -12 12 h -456 q -12 0 -12 -12 v -20 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.8}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 4} delay={dl(4, 1.8)}>
        <T x={540} y={338} size={16} fill={INK} weight={800}>
          a = F ÷ (1+2+3) = 12 ÷ 6 = 2 m⁄s²
        </T>
      </Fade>

      {/* beat 5 — the tension */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.8)}
        d="M 312 374 h 456 q 12 0 12 12 v 20 q 0 12 -12 12 h -456 q -12 0 -12 -12 v -20 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.8}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 5} delay={dl(5, 1.8)}>
        <T x={540} y={402} size={16} fill={INK} weight={800}>
          T = 3 × a = 3 × 2 = 6 N
        </T>
      </Fade>

      {/* beat 6 — bank the rule */}
      <Draw on={beat >= 6} delay={dl(6, 0.6)} d="M 66 446 v 94" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={84} y={466} size={14} fill={RED} script anchor="start">
          {t(
            "tension at any cut = (mass on the far side) × a",
            "kisi bhi cut par tension = (door waali taraf ka mass) × a"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 7)}>
        <T x={84} y={492} size={14} fill={RED} script anchor="start">
          {t(
            "last string pulls only the last block · first string pulls all but the front",
            "aakhri string sirf aakhri block kheenchti · pehli string aage ke chhodkar sab"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 13)}>
        <T x={84} y={518} size={14} fill={GREEN} script anchor="start">
          {t(
            "a once, then multiply — a 3-equation problem collapses to one line",
            "a ek baar, phir gunaa karo — 3-equation problem ek line mein simat jaata"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
