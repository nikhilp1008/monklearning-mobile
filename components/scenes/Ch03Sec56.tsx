/**
 * Ch03 · Section 56 — "The toolkit: the subtraction rule and its special cases"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 7.2, 20.4, 31.3, 43.9, 55.5, 67.8, 80.6]):
 *  0 heading
 *  1 core rule box + negative
 *  2 same line, same direction: subtract
 *  3 opposite directions: add
 *  4 the angle case header
 *  5 magnitude formula box
 *  6 red: the MINUS sign
 *  7 frame conversion: add it back
 *
 * Layout plan (Kalam bl −1.3s..+0.5s · Anek bl −0.78s..+0.31s):
 *  b1 | box x84..520 y96..142 text cx302 bl 126 s16 · caption st x84 bl 166 s11
 *  b2 | st x84 bl 210 s13 · trains glyph: (110,250)→(180,250) / (210,244)→(280,244)?
 *       simpler: arrows (110,248)→(180,248) and (200,248)→(290,248) + lbl bl 274
 *  b3 | st x84 bl 316 s13 · arrows (110,352)→(180,352) / (290,352)→(220,352) · lbl bl 380
 *  b4 | st x560 bl 210 s12
 *  b5 | box x560..1030 y230..278 text cx795 bl 262 s14
 *  b6 | bar M546 306 v52 · lines st x560 bl 324 / 348 s12
 *  b7 | st x560 bl 396 s14 · caption st x560 bl 420 s11
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
  INK_LIGHT,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch03Sec56({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — heading */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={48} size={20} fill={INK} script>
          {t("TOOLKIT — relative velocity", "TOOLKIT — relative velocity")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.2)} d="M 380 62 h 320" stroke={AMBER} sw={2.2} dur={0.6} />

      {/* beat 1 — the core rule */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.6)}
        d="M 96 96 h 412 q 12 0 12 12 v 22 q 0 12 -12 12 h -412 q -12 0 -12 -12 v -22 q 0 -12 12 -12"
        stroke={AMBER_DARK}
        sw={2.2}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 1} delay={dl(1, 1.6)}>
        <T x={302} y={126} size={16} fill={INK} weight={800}>
          v(AB) = vA − vB · v(BA) = −v(AB)
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 6)}>
        <T x={84} y={166} size={11} fill={MUTED} script anchor="start">
          {t(
            "every relative-velocity question runs on this line",
            "har relative-velocity sawaal isi line par chalta hai"
          )}
        </T>
      </Fade>

      {/* beat 2 — same direction: subtract */}
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={84} y={210} size={13} fill={INK} weight={700} anchor="start">
          {t(
            "same line, same way → SUBTRACT the speeds",
            "ek line, ek disha → speeds GHATAO"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 3)} d={arrowD(110, 248, 180, 248)} stroke={AMBER_DARK} sw={2.4} dur={0.4} />
      <Draw on={beat >= 2} delay={dl(2, 3.6)} d={arrowD(210, 248, 300, 248)} stroke={AMBER_DARK} sw={2.4} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 4.6)}>
        <T x={200} y={274} size={11} fill={MUTED} script>
          {t("chasing trains: closing at the difference", "peechha karti trains: antar se paas aati hain")}
        </T>
      </Fade>

      {/* beat 3 — opposite: add */}
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={84} y={316} size={13} fill={INK} weight={700} anchor="start">
          {t(
            "opposite directions → ADD the speeds",
            "ulti dishayen → speeds JODO"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 3)} d={arrowD(110, 352, 180, 352)} stroke={GREEN} sw={2.4} dur={0.4} />
      <Draw on={beat >= 3} delay={dl(3, 3.6)} d={arrowD(300, 352, 230, 352)} stroke={GREEN} sw={2.4} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 4.6)}>
        <T x={205} y={380} size={11} fill={MUTED} script>
          {t("head-on trains: closing at the sum", "aamne-saamne trains: jod se paas aati hain")}
        </T>
      </Fade>

      {/* beat 4 — the angle case */}
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={560} y={210} size={12} fill={AMBER_DARK} script anchor="start">
          {t(
            "angle θ between them → treat the subtraction as a parallelogram",
            "beech mein angle θ → subtraction ko parallelogram jaisa lo"
          )}
        </T>
      </Fade>

      {/* beat 5 — the magnitude */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.6)}
        d="M 572 230 h 446 q 12 0 12 12 v 24 q 0 12 -12 12 h -446 q -12 0 -12 -12 v -24 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.4}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={795} y={262} size={14} fill={INK} weight={800}>
          |v(AB)| = √(vA² + vB² − 2 vA vB cosθ)
        </T>
      </Fade>

      {/* beat 6 — the minus sign */}
      <Draw on={beat >= 6} delay={dl(6, 0.8)} d="M 546 306 v 52" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={560} y={324} size={12} fill={RED} script anchor="start">
          {t(
            "note the MINUS before the cosine — this is a SUBTRACTION",
            "cosine se pehle MINUS dekho — yeh SUBTRACTION hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 7)}>
        <T x={560} y={348} size={12} fill={RED} script anchor="start">
          {t(
            "writing a plus there is the most common error in these problems",
            "wahan plus likhna in sawaalon ki sabse aam galti hai"
          )}
        </T>
      </Fade>

      {/* beat 7 — frame conversion */}
      <Fade on={beat >= 7} delay={dl(7, 0.8)}>
        <T x={560} y={396} size={14} fill={INK} weight={700} anchor="start">
          {t(
            "back to the ground frame:  vA = v(AB) + vB",
            "wapas ground frame mein:  vA = v(AB) + vB"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 6)}>
        <T x={560} y={420} size={11} fill={GREEN} script anchor="start">
          {t(
            "subtract to ENTER a frame · add to LEAVE it",
            "frame mein GHUSNE ko ghatao · NIKALNE ko jodo"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
