/**
 * Ch03 · Section 47 — "Board-level: time of flight, height, and range"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 16.4, 28.9, 43.6, 61.7, 72.5, 83.0, 90.5]):
 *  0 heading + problem
 *  1 trig prep: sin30 = ½, sin60 ≈ 0.866
 *  2 (a) T = 2 s
 *  3 (b) H = 5 m
 *  4 the squaring warning
 *  5 (c) range setup
 *  6 R ≈ 34.6 m
 *  7 ANSWER box + trap line
 *
 * Layout plan (Kalam bl −1.3s..+0.5s · Anek bl −0.78s..+0.31s):
 *  b1 | st x84 bl 118 s13 · chips x84 y134 w200 h32 · x304 y134 w240 h32
 *  b2 | st x84 bl 210 s14 · st x104 bl 238 s14
 *  b3 | st x84 bl 278 s14 · st x104 bl 306 s14
 *  b4 | red st x84 bl 334 s12
 *  b5 | st x570 bl 210 s14 · st x590 bl 238 s14
 *  b6 | st x590 bl 266 s14
 *  b7 | box x570..1030 y296..344 text cx800 bl 328 s15 · red st x570 bl 380 s12
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  Chip,
  T,
  INK,
  INK_LIGHT,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch03Sec47({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the question */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={48} size={20} fill={INK} script>
          {t(
            "CBSE BOARD LEVEL — T, H and R in one launch",
            "CBSE BOARD LEVEL — ek launch mein T, H aur R"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.2)} d="M 340 62 h 400" stroke={AMBER} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 6)}>
        <T x={540} y={84} size={12} fill={MUTED} script>
          {t(
            "u = 20 m/s at 30° from the ground, g = 10 — find (a) T (b) H (c) R",
            "zameen se u = 20 m/s, 30° par, g = 10 — (a) T (b) H (c) R nikaalo"
          )}
        </T>
      </Fade>

      {/* beat 1 — trig prep */}
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={84} y={118} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "pure substitution — the skill is keeping the trig straight",
            "seedha substitution — hunar bas trig ko saaf rakhna hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 5)}>
        <Chip x={84} y={134} w={200} h={32} fill={CREAM} stroke={INK_LIGHT} textFill={INK} size={13} script={false}>
          sin 30° = ½
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 7)}>
        <Chip x={304} y={134} w={240} h={32} fill={CREAM} stroke={INK_LIGHT} textFill={INK} size={13} script={false}>
          sin 60° ≈ 0.866
        </Chip>
      </Fade>

      {/* beat 2 — time of flight */}
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={84} y={210} size={14} fill={INK} weight={700} anchor="start">
          (a)  T = 2u sinθ ⁄ g = 2·20·½ ⁄ 10
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 7)}>
        <T x={104} y={238} size={14} fill={INK} weight={800} anchor="start">
          T = 2 s, exactly
        </T>
      </Fade>

      {/* beat 3 — max height */}
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={84} y={278} size={14} fill={INK} weight={700} anchor="start">
          (b)  H = u² sin²θ ⁄ 2g = 400·¼ ⁄ 20
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 8)}>
        <T x={104} y={306} size={14} fill={INK} weight={800} anchor="start">
          H = 100 ⁄ 20 = 5 m
        </T>
      </Fade>

      {/* beat 4 — the squaring step */}
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={84} y={334} size={12} fill={RED} script anchor="start">
          {t(
            "watch it: sin30 = ½ becomes ¼ when SQUARED — forgetting to square is classic",
            "dhyan: sin30 = ½ SQUARE hokar ¼ banta hai — square bhoolna classic galti hai"
          )}
        </T>
      </Fade>

      {/* beat 5 — range setup */}
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={570} y={210} size={14} fill={INK} weight={700} anchor="start">
          (c)  R = u² sin 2θ ⁄ g,  2θ = 60°
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 6)}>
        <T x={590} y={238} size={14} fill={INK} weight={700} anchor="start">
          R = 400 × sin 60° ⁄ 10
        </T>
      </Fade>

      {/* beat 6 — the range */}
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={590} y={266} size={14} fill={INK} weight={800} anchor="start">
          R = 400 × 0.866 ⁄ 10 ≈ 34.6 m
        </T>
      </Fade>

      {/* beat 7 — the answers */}
      <Draw
        on={beat >= 7}
        delay={dl(7, 0.6)}
        d="M 582 296 h 436 q 12 0 12 12 v 24 q 0 12 -12 12 h -436 q -12 0 -12 -12 v -24 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.4}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={800} y={328} size={15} fill={INK} weight={800}>
          T = 2 s · H = 5 m · R ≈ 34.6 m
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 6)}>
        <T x={570} y={380} size={12} fill={RED} script anchor="start">
          {t(
            "the only real trap: sin²θ for height, sin 2θ for range",
            "asli trap bas ek: height mein sin²θ, range mein sin 2θ"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
