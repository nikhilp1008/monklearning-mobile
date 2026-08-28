/**
 * Ch08 · Section 28 — "The volume relation and why nu cannot exceed 0.5"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * A number line (ν=0 to 0.5) that gets annotated and extended through the beats.
 *
 * Beats (en [0, 9.47, 20.82, 30.38, 40.62, 62.81, 63.81]):
 *  0 title only
 *  1 diagram: number line ν=0..0.5, shaded valid range
 *  2 text: lengthening adds volume, thinning removes it — which wins?
 *  3 boxed hero: ΔV/V = (1−2ν)(ΔL/L)
 *  4 callouts on the line: ν<0.5 grows, ν=0.5 incompressible
 *  5 red: forbidden extension past 0.5 + margin note
 *  6 closing: that's why ν can't exceed 0.5
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title (script 22, red, ALWAYS ON) cx540 bl64
 *  b2 | text (14)           | T mid| x317..763 bl110 (y91..117)
 *  b1 | line + ticks        | Draw | x150..750 y144..156
 *  b1 | shaded range        | Fade | x150..750 y144..156
 *  b1 | "ν=0"/"ν=0.5" (12)  | T mid| x150/750 bl178 (y168..182)
 *  b3 | hero box            | Draw | x300..780 y240..310
 *  b3 | formula (22)        | T mid| x540 bl283 (y266..291)
 *  b4 | "ν<0.5 GROWS" (13)  | T mid| x400 bl205 (y195..209)
 *  b4 | "ν=0.5 incompr."(11)| T mid| x750 bl205 (y196..208)
 *  b5 | forbidden ext.      | Draw | x750..800 y150 + X
 *  b5 | margin bar          | Draw | x60 y345..373
 *  b5 | note (15)           | T st | x76..505 bl365 (y345..372)
 *  b6 | closing (14)        | T mid| x375..706 bl410 (y392..417)
 */

import React from "react";
import { Rect } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  crossD,
  INK,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch08Sec28({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("does stretching change the volume?", "kya stretching se volume badalta hai?")}
        </T>
      </Fade>

      {/* beat 1 — the number line */}
      <Draw on={beat >= 1} delay={dl(1, 0.2)} d="M150 150 H750 M150 144 V156 M750 144 V156" stroke={INK} sw={2} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <Rect x={150} y={144} width={600} height={12} fill={GREEN} fillOpacity={0.3} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.3)}>
        <T x={150} y={178} size={12} fill={INK}>
          ν = 0
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <T x={750} y={178} size={12} fill={RED}>
          ν = 0.5
        </T>
      </Fade>

      {/* beat 2 — the competition */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={540} y={110} size={14} fill={AMBER_DARK} script>
          {t("lengthening adds volume, thinning removes it — which wins?", "lengthening volume badhati, thinning ghataati — kaun jeetega?")}
        </T>
      </Fade>

      {/* beat 3 — the hero relation */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 0.2)}
        d="M312 240 h456 q12 0 12 12 v46 q0 12 -12 12 h-456 q-12 0 -12 -12 v-46 q0 -12 12 -12"
        stroke={AMBER}
        sw={2.6}
        dur={0.5}
      />
      <Fade on={beat >= 3} delay={dl(3, 0.7)}>
        <T x={540} y={283} size={22} fill={INK} weight={800}>
          ΔV/V = (1−2ν)(ΔL/L)
        </T>
      </Fade>

      {/* beat 4 — read the bracket */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={400} y={205} size={13} fill={GREEN} weight={700}>
          {t("ν < 0.5: volume GROWS", "ν < 0.5: volume GROWS")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={750} y={205} size={11} fill={RED} weight={700}>
          {t("ν = 0.5: incompressible", "ν = 0.5: incompressible")}
        </T>
      </Fade>

      {/* beat 5 — the forbidden zone */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M750 150 L800 150" stroke={RED} sw={2.2} dur={0.3} />
      <Draw on={beat >= 5} delay={dl(5, 0.6)} d={crossD(792, 142, 16, 16)} stroke={RED} sw={2} dur={0.3} />
      <Draw on={beat >= 5} delay={dl(5, 1)} d="M60 345 L60 373" stroke={RED} sw={3.4} dur={0.3} />
      <Fade on={beat >= 5} delay={dl(5, 1.4)}>
        <T x={76} y={365} size={15} fill={RED} script anchor="start">
          {t("ν>0.5 would shrink volume on stretching — forbidden", "ν>0.5 stretching par volume ghata deta — forbidden")}
        </T>
      </Fade>

      {/* beat 6 — the deep reason */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={410} size={14} fill={GREEN} script>
          {t("that's the deep reason ν cannot exceed 0.5", "yehi wajah hai ν kabhi 0.5 se zyada nahi")}
        </T>
      </Fade>
    </Scene>
  );
}
