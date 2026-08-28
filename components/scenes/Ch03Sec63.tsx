/**
 * Ch03 · Section 63 — "Pro-tip: jump into the other body's frame"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 10.1, 22.3, 36.6, 42.0, 57.9, 71.5, 84.9]):
 *  0 heading
 *  1 the move: sit on one body, freeze it
 *  2 hero: straight line, geometry
 *  3 two checks header
 *  4 same-a → zero relative-a
 *  5 closest approach = ⊥ distance
 *  6 the core rule reprised
 *  7 mnemonic hero
 *
 * Layout plan (Kalam bl −1.3s..+0.5s · Anek bl −0.78s..+0.31s):
 *  b1 | line st x84 bl 118 s13
 *  b2 | box x230..850 y138..184 text cx540 bl 168 s14
 *  b3 | header st x84 bl 236 s13 · underline M84 244 h340
 *  b4 | box x84..500 y264..310 text cx292 bl 296 s13 · caption st x84 bl 330 s11
 *  b5 | box x560..1010 y264..310 text cx785 bl 296 s13
 *  b6 | st x84 bl 400 s14 · caption st x84 bl 424 s11
 *  b7 | box x280..800 y460..512 text cx540 bl 492 s16 script
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
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

export default function Ch03Sec63({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — heading */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={48} size={20} fill={INK} script>
          {t(
            "PRO-TIP — change frames to simplify",
            "PRO-TIP — frame badlo, saral banao"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.2)} d="M 340 62 h 400" stroke={AMBER} sw={2.2} dur={0.6} />

      {/* beat 1 — the move */}
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={84} y={118} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "chase or approach? don't track both — sit on ONE body and freeze it",
            "peechha ya paas aana? dono ko mat tako — EK par baitho, use jama do"
          )}
        </T>
      </Fade>

      {/* beat 2 — the hero */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 0.6)}
        d="M 230 138 h 620 q 12 0 12 12 v 34 q 0 12 -12 12 h -620 q -12 0 -12 -12 v -34 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.6}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <T x={540} y={168} size={14} fill={GREEN} weight={800} script>
          {t(
            "the other moves in a STRAIGHT LINE — geometry, not a chase",
            "doosra ek SEEDHI LINE mein chalta hai — peechha nahi, geometry"
          )}
        </T>
      </Fade>

      {/* beat 3 — two checks header */}
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={84} y={236} size={13} fill={INK} script anchor="start">
          {t("TWO RELIABLE CHECKS", "DO PAKKE CHECKS")}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 1.4)} d="M 84 244 h 340" stroke={AMBER} sw={1.8} dur={0.5} />

      {/* beat 4 — same acceleration */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.6)}
        d="M 96 264 h 392 q 12 0 12 12 v 22 q 0 12 -12 12 h -392 q -12 0 -12 -12 v -22 q 0 -12 12 -12"
        stroke={INK_LIGHT}
        sw={2}
        dur={0.6}
        fill={CREAM}
      />
      <Fade on={beat >= 4} delay={dl(4, 1.6)}>
        <T x={292} y={296} size={13} fill={INK} weight={800}>
          {t("same a → relative a = 0", "same a → relative a = 0")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 6)}>
        <T x={84} y={330} size={11} fill={MUTED} script anchor="start">
          {t(
            "curved when it should be straight? that's the error",
            "seedha hona chahiye tha aur mudi hui hai? wahi galti hai"
          )}
        </T>
      </Fade>

      {/* beat 5 — closest approach */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.6)}
        d="M 572 264 h 426 q 12 0 12 12 v 22 q 0 12 -12 12 h -426 q -12 0 -12 -12 v -22 q 0 -12 12 -12"
        stroke={INK_LIGHT}
        sw={2}
        dur={0.6}
        fill={CREAM}
      />
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={785} y={296} size={13} fill={INK} weight={800}>
          {t("closest = ⊥ distance to v(AB)", "sabse kam = v(AB) tak ⊥ doori")}
        </T>
      </Fade>

      {/* beat 6 — the core rule again */}
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={84} y={400} size={14} fill={INK} weight={700} anchor="start">
          v(AB) = vA − vB  (reverse it → sign flips)
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 6)}>
        <T x={84} y={424} size={11} fill={MUTED} script anchor="start">
          {t(
            "everything in this sub-topic is that one line, in a well-chosen frame",
            "is sub-topic ka sab kuchh wahi ek line hai, sahi frame ke saath"
          )}
        </T>
      </Fade>

      {/* beat 7 — the mnemonic */}
      <Draw
        on={beat >= 7}
        delay={dl(7, 0.6)}
        d="M 292 460 h 496 q 12 0 12 12 v 28 q 0 12 -12 12 h -496 q -12 0 -12 -12 v -28 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.6}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={540} y={492} size={16} fill={GREEN} weight={800} script>
          {t(
            "Sit on one body — the world simplifies",
            "Ek body par baitho — duniya saral ho jaati hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
