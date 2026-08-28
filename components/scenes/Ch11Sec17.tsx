/**
 * Ch11 · Section 17 — "Work is the area under the P-V curve"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * UNVERIFIED — audio for sec 17 not yet uploaded, verify-scene.mjs could
 * not be run. Re-run once audio lands.
 *
 * Beats (8): 0 hook · 1 W=area under curve (shaded) · 2 second path,
 *  different area ⇒ path-dependent · 3 closed loop ⇒ W=enclosed area ·
 *  4 verdict: drives every engine problem · 5 needs quasi-static ·
 *  6 free-expansion exception (W=0) · 7 ideal-gas-only caveat.
 *
 * Layout plan (Anek bl−0.78s..+0.31s):
 *  title (script 24, red)     | T mid | x289..790 y36..76 (bl 64)
 *  b0 | hook (13,script)      | T mid | x540 y96
 *  b1 | label (13)            | T mid | x335 y140
 *  b1 | axes                  | Draw  | x190 y150..370 · y370 x190..480
 *  b1 | curve1 + shaded area  | Draw  | 250,200→430,300
 *  b2 | curve2 (dashed green) | Draw  | 250,200→430,300 (lower)
 *  b2 | label (12,script)     | T mid | x335 y400
 *  b3 | loop + shaded         | Draw  | c(775,260) rx120 ry70
 *  b3 | loop label (14,w700)  | T mid | x775 y260
 *  b4 | verdict (14,w700)     | T mid | x540 y420
 *  b5 | quasi-static (12,scr) | T mid | x540 y450
 *  b6 | gas/vacuum boxes      | Draw  | x350..430 / 430..510 y475..515
 *  b6 | caption (13,w700)     | T mid | x460 y545
 *  b7 | caveat (12,script)    | T mid | x540 y575
 */

import React from "react";
import { Path } from 'react-native-svg';
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
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch11Sec17({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={24} fill={RED} script>
          {t("work is the area under the P-V curve", "work = P-V curve ke neeche ka area")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={96} size={13} fill={MUTED} script>
          {t("the deepest fact — every heat-engine problem needs this", "sabse deep fact — har heat-engine problem ko chahiye")}
        </T>
      </Fade>

      {/* beat 1 — work as shaded area under one curve */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={335} y={140} size={13} fill={AMBER_DARK} script={false}>
          {t("W = area under the curve", "W = curve ke neeche ka area")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.7)} d="M 190 370 V 150" stroke={INK} sw={2} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 1)} d="M 190 370 H 480" stroke={INK} sw={2} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 1.4)}>
        <T x={182} y={155} size={12} fill={INK} anchor="end" script={false}>
          P
        </T>
        <T x={490} y={375} size={12} fill={INK} anchor="start" script={false}>
          V
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.7)}>
        <Path d="M 250 200 Q 350 210, 430 300 L 430 370 L 250 370 Z" fill={AMBER} opacity={0.3} />
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.9)} d="M 250 200 Q 350 210, 430 300" stroke={AMBER_DARK} sw={2.6} dur={0.7} />

      {/* beat 2 — a second path, a different area */}
      <Draw on={beat >= 2} delay={dl(2, 0.3)} d="M 250 200 Q 370 320, 430 300" stroke={GREEN} sw={2.2} dur={0.8} />
      <Fade on={beat >= 2} delay={dl(2, 1.2)}>
        <T x={335} y={400} size={12} fill={GREEN} script>
          {t("different path, different area ⇒ path-dependent", "alag path, alag area ⇒ path-dependent")}
        </T>
      </Fade>

      {/* beat 3 — closed loop: cycle work */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <Path
          d="M 655 260 C 655 215, 855 215, 895 260 C 855 305, 655 305, 655 260"
          fill={AMBER}
          opacity={0.3}
        />
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 0.5)}
        d="M 655 260 C 655 215, 855 215, 895 260 C 855 305, 655 305, 655 260"
        stroke={INK}
        sw={2.4}
        dur={1}
      />
      <Draw on={beat >= 3} delay={dl(3, 1.4)} d={arrowD(760, 216, 800, 216)} stroke={INK} sw={2.2} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 1.8)}>
        <T x={775} y={264} size={14} fill={INK} weight={700} script={false}>
          {t("W = enclosed area", "W = enclosed area")}
        </T>
      </Fade>

      {/* beat 4 — verdict */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={420} size={14} fill={INK} weight={700} script={false}>
          {t("this single idea drives every heat-engine problem", "yehi idea har heat-engine problem chalata hai")}
        </T>
      </Fade>

      {/* beat 5 — the quasi-static condition */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={450} size={12} fill={MUTED} script>
          {t("needs quasi-static: ONE defined pressure at every instant", "quasi-static chahiye: har instant par EK hi pressure")}
        </T>
      </Fade>

      {/* beat 6 — the free-expansion exception */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 350 475 h 80 v 40 h -80 z" stroke={INK} sw={2} dur={0.5} />
      <Draw on={beat >= 6} delay={dl(6, 0.5)} d="M 430 475 h 80 v 40 h -80 z" stroke={MUTED} sw={2} dur={0.5} />
      <Draw on={beat >= 6} delay={dl(6, 1)} d={arrowD(375, 495, 485, 495)} stroke={AMBER_DARK} sw={2.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={460} y={545} size={13} fill={INK} weight={700} script={false}>
          {t("free expansion into vacuum ⇒ W = 0", "vacuum mein free expansion ⇒ W = 0")}
        </T>
      </Fade>

      {/* beat 7 — the ideal-gas caveat */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={540} y={575} size={12} fill={MUTED} script>
          {t("these relations are for an IDEAL gas — real gases deviate", "yeh relations IDEAL gas ke liye hain — real gas alag")}
        </T>
      </Fade>
    </Scene>
  );
}
