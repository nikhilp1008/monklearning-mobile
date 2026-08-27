/**
 * Ch03 · Section 29 — "The one big idea: two independent motions sharing a clock"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 14.1, 27.6, 39.1, 50.3, 63.6, 74.9, 85.3]):
 *  0 heading
 *  1 one number no longer enough
 *  2 the vector cast: r, v, a
 *  3 hero: two independent 1-D motions
 *  4 carrom diagram: glide + drift → path
 *  5 x-story / y-story never interfere
 *  6 shared: the clock (glyph)
 *  7 verdict: every 1-D tool, twice
 *
 * Layout plan (Kalam bl −1.3s..+0.5s · Anek bl −0.78s..+0.31s):
 *  b1 | line cx540 bl 84 s13
 *  b2 | line cx540 bl 112 s12 · underline M300 122 h480
 *  b3 | box x260..820 y140..186 text cx540 bl 170 s15
 *  b4 | board M132 240..x120..520 y240..460 · striker (160,420) · fwd (160,420)→(160,280)
 *       lbl end (150,345) s11 · drift (160,420)→(300,420) lbl cx230 bl 444 s11 ·
 *       path (160,420)→(420,280) lbl st (430,276) s11
 *  b5 | st x600 bl 260 / 288 / 316 s13
 *  b6 | chip x600 y350 w300 h40 · clock circle (960,370) r22 + hands
 *  b7 | bar M66 500 v56 · lines st x84 bl 518 / 542 / 566 s12
 */

import React from "react";
import { Circle } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  Chip,
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

export default function Ch03Sec29({ currentTime, reveals, language }: SceneProps) {
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
            "Motion in a plane = two 1-D motions at once",
            "Plane ki motion = ek saath do 1-D motions"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.2)} d="M 340 62 h 400" stroke={AMBER} sw={2.2} dur={0.6} />

      {/* beat 1 — one number is not enough */}
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={540} y={84} size={13} fill={INK} script>
          {t(
            "in a straight line, ONE signed number said everything — move sideways too, and it can't",
            "seedhi line mein EK signed number sab keh deta tha — sideways bhi chale, to nahi keh pata"
          )}
        </T>
      </Fade>

      {/* beat 2 — the vector cast */}
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={540} y={112} size={12} fill={INK_LIGHT} script>
          {t(
            "so: r (position) · v (always tangent to the path) · a (any direction at all)",
            "isliye: r (position) · v (hamesha path ka tangent) · a (koi bhi direction)"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 2)} d="M 300 122 h 480" stroke={AMBER} sw={1.8} dur={0.5} />

      {/* beat 3 — the big idea */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 0.6)}
        d="M 272 140 h 536 q 12 0 12 12 v 22 q 0 12 -12 12 h -536 q -12 0 -12 -12 v -22 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.6}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 3} delay={dl(3, 1.6)}>
        <T x={540} y={170} size={15} fill={GREEN} weight={800} script>
          {t(
            "the x-motion and the y-motion evolve ENTIRELY on their own",
            "x-motion aur y-motion POORI tarah apne-apne dum par chalte hain"
          )}
        </T>
      </Fade>

      {/* beat 4 — the carrom striker */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.6)}
        d="M 132 240 h 376 q 12 0 12 12 v 196 q 0 12 -12 12 h -376 q -12 0 -12 -12 v -196 q 0 -12 12 -12"
        stroke={MUTED}
        sw={1.6}
        dur={0.9}
      />
      <Fade on={beat >= 4} delay={dl(4, 1.6)}>
        <Circle cx={160} cy={420} r={7} fill="none" stroke={INK} strokeWidth={2.2} />
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 2.4)} d={arrowD(160, 406, 160, 280)} stroke={AMBER_DARK} sw={2.4} dur={0.6} />
      <Fade on={beat >= 4} delay={dl(4, 3.2)}>
        <T x={150} y={345} size={11} fill={AMBER_DARK} script anchor="end">
          {t("forward glide", "aage ki glide")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 4.2)} d={arrowD(174, 420, 300, 420)} stroke={GREEN} sw={2.4} dur={0.6} />
      <Fade on={beat >= 4} delay={dl(4, 5)}>
        <T x={237} y={444} size={11} fill={GREEN} script>
          {t("sideways drift", "sideways drift")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 6.2)} d={arrowD(160, 420, 420, 280)} stroke={INK} sw={2.8} dur={0.9} />
      <Fade on={beat >= 4} delay={dl(4, 7.4)}>
        <T x={430} y={276} size={11} fill={INK} script anchor="start">
          {t("the path you SEE", "jo path DIKHTA hai")}
        </T>
      </Fade>

      {/* beat 5 — never interfere */}
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={600} y={260} size={13} fill={AMBER_DARK} script anchor="start">
          {t("the x-story uses only x-components", "x-kahani sirf x-components use karti hai")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 3.5)}>
        <T x={600} y={288} size={13} fill={GREEN} script anchor="start">
          {t("the y-story uses only y-components", "y-kahani sirf y-components use karti hai")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 7)}>
        <T x={600} y={316} size={13} fill={INK} weight={700} anchor="start" script>
          {t("they NEVER interfere", "woh KABHI dakhal nahi dete")}
        </T>
      </Fade>

      {/* beat 6 — the shared clock */}
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <Chip x={600} y={350} w={300} h={40} fill={CREAM} stroke={INK} textFill={INK} size={14}>
          {t("shared: the CLOCK — same t", "shared: sirf GHADI — wahi t")}
        </Chip>
      </Fade>
      <Draw
        on={beat >= 6}
        delay={dl(6, 2)}
        d="M 938 370 a 22 22 0 1 0 44 0 a 22 22 0 1 0 -44 0"
        stroke={INK}
        sw={2}
        dur={0.6}
      />
      <Draw on={beat >= 6} delay={dl(6, 2.8)} d="M 960 370 V 356 M 960 370 L 971 376" stroke={INK} sw={1.8} dur={0.4} />

      {/* beat 7 — the principle */}
      <Draw on={beat >= 7} delay={dl(7, 0.8)} d="M 66 500 v 56" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={84} y={518} size={12} fill={GREEN} script anchor="start">
          {t(
            "the INDEPENDENCE of perpendicular motions — the chapter's engine",
            "perpendicular motions ki INDEPENDENCE — is chapter ka engine"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 4.5)}>
        <T x={84} y={542} size={12} fill={GREEN} script anchor="start">
          {t(
            "every straight-line tool, applied TWICE — once per axis",
            "har straight-line tool, DO baar — har axis par ek baar"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 8)}>
        <T x={84} y={566} size={12} fill={INK} script anchor="start">
          {t(
            "resolve → solve each axis → recombine",
            "resolve karo → har axis alag solve karo → phir jodo"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
