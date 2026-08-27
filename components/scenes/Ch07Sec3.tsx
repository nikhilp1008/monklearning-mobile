/**
 * Ch07 · Section 3 — "When you may use the clean formula: points and spheres"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 11.43, 23.47, 33.19, 40.02, 50.52, 59.82, 72.79]):
 *  0 title + two point masses with one clean r (dots, dashed r line)
 *  1 the formula F = Gm₁m₂/r² (right of the dots)
 *  2 shell theorem teaser (green line + drawn underline)
 *  3 SAFE 1 card: two genuine points
 *  4 SAFE 2 card: two uniform spheres, centre-to-centre r
 *  5 SAFE 3 card: sphere + point · green "only these three"
 *  6 danger row: rod/ring/arc/L in dashed red box → INTEGRATE
 *  7 red margin: classic mark-loser
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52 · dots (170,130)/(430,130) r5 · dash 180..420 y130 · "r" cx300 bl118 ·
 *  size note cx300 bl160 · formula cx750 bl135 (680..820) · note cx750 bl168
 *  b2 | line cx540 bl205 · underline M420 215 h240
 *  cards y240..390: c1 x64 w300 · c2 x390 w300 · c3 x716 w300 · titles st x+16 bl262 ·
 *   c1 dots (150,310)/(280,310) r6 dash between, m₁ m₂ bl340 · caption bl372
 *   c2 spheres (480,308)/(610,308) r26, center dash, "r" cx545 bl292, caption bl372
 *   c3 sphere (810,308) r26 + dot (950,308) r6, dash, caption bl372
 *  b5 | green line cx540 bl415
 *  b6 | dashed red box x80..550 y440..515 · rod M100 478 h110 · ring c(260,478) r20 ·
 *      arc M322 492 A30 → (382,492) · L M420 458 v40 h35 · ✗ cx520 bl468 ·
 *      label st x570 bl470 + bl496
 *  b7 | bar x66 y545..585 · line st x84 bl570
 */

import React from "react";
import { Circle, Path, Rect } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch07Sec3({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — written for point masses */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "The clean formula is written for POINT masses",
            "Saaf formula sirf POINT masses ke liye likha hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 3)}>
        <Circle cx={170} cy={130} r={5} fill={INK} />
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 3.6)}>
        <Circle cx={430} cy={130} r={5} fill={INK} />
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 4.2)}>
        <Path d="M 182 130 H 418" stroke={MUTED} strokeWidth={1.6} strokeDasharray="6 6" fill="none" />
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 5)}>
        <T x={300} y={118} size={14} fill={INK} weight={700}>
          r
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 6.5)}>
        <T x={300} y={160} size={11} fill={MUTED} script>
          {t("size ≪ separation", "size ≪ separation")}
        </T>
      </Fade>

      {/* beat 1 — the law in symbols */}
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <T x={750} y={135} size={20} fill={INK} weight={800}>
          F = G·m₁m₂ ⁄ r²
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 5)}>
        <T x={750} y={168} size={11} fill={MUTED} script>
          {t(
            "that single r = one clean distance",
            "wo akela r = ek hi saaf distance"
          )}
        </T>
      </Fade>

      {/* beat 2 — the shell theorem rescue */}
      <Fade on={beat >= 2} delay={dl(2, 2.5)}>
        <T x={540} y={205} size={13} fill={GREEN} script>
          {t(
            "shell theorem — Newton's gorgeous rescue",
            "shell theorem — Newton ka gorgeous result"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 3.4)} d="M 420 215 h 240" stroke={GREEN} sw={2} dur={0.5} />

      {/* beat 3 — SAFE 1: two genuine points */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 0.5)}
        d="M 76 240 h 276 q 12 0 12 12 v 126 q 0 12 -12 12 h -276 q -12 0 -12 -12 v -126 q 0 -12 12 -12"
        stroke={AMBER}
        sw={2}
        dur={0.6}
      />
      <Fade on={beat >= 3} delay={dl(3, 1.3)}>
        <T x={80} y={262} size={12} fill={AMBER_DARK} anchor="start" weight={800}>
          SAFE 1
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.9)}>
        <Circle cx={150} cy={310} r={6} fill={INK} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.4)}>
        <Circle cx={280} cy={310} r={6} fill={INK} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.9)}>
        <Path d="M 162 310 H 268" stroke={MUTED} strokeWidth={1.6} strokeDasharray="5 6" fill="none" />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 3.4)}>
        <T x={150} y={340} size={12} fill={INK} weight={700}>
          m₁
        </T>
        <T x={280} y={340} size={12} fill={INK} weight={700}>
          m₂
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 4.2)}>
        <T x={214} y={372} size={12} fill={INK} script>
          {t("two genuine point particles", "do asli point particles")}
        </T>
      </Fade>

      {/* beat 4 — SAFE 2: two uniform spheres */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.5)}
        d="M 402 240 h 276 q 12 0 12 12 v 126 q 0 12 -12 12 h -276 q -12 0 -12 -12 v -126 q 0 -12 12 -12"
        stroke={AMBER}
        sw={2}
        dur={0.6}
      />
      <Fade on={beat >= 4} delay={dl(4, 1.2)}>
        <T x={406} y={262} size={12} fill={AMBER_DARK} anchor="start" weight={800}>
          SAFE 2
        </T>
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 1.6)}
        d="M 480 282 A 26 26 0 1 1 479.9 282"
        stroke={INK}
        sw={2.2}
        dur={0.6}
      />
      <Draw
        on={beat >= 4}
        delay={dl(4, 2.4)}
        d="M 610 282 A 26 26 0 1 1 609.9 282"
        stroke={INK}
        sw={2.2}
        dur={0.6}
      />
      <Fade on={beat >= 4} delay={dl(4, 3.2)}>
        <Circle cx={480} cy={308} r={2.5} fill={INK} />
        <Circle cx={610} cy={308} r={2.5} fill={INK} />
        <Path d="M 486 308 H 604" stroke={MUTED} strokeWidth={1.6} strokeDasharray="5 6" fill="none" />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 3.8)}>
        <T x={545} y={292} size={13} fill={INK} weight={700}>
          r
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 5)}>
        <T x={540} y={372} size={12} fill={INK} script>
          {t("r: centre to centre", "r: centre se centre tak")}
        </T>
      </Fade>

      {/* beat 5 — SAFE 3: sphere + point, and the closed list */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.5)}
        d="M 728 240 h 276 q 12 0 12 12 v 126 q 0 12 -12 12 h -276 q -12 0 -12 -12 v -126 q 0 -12 12 -12"
        stroke={AMBER}
        sw={2}
        dur={0.6}
      />
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        <T x={732} y={262} size={12} fill={AMBER_DARK} anchor="start" weight={800}>
          SAFE 3
        </T>
      </Fade>
      <Draw
        on={beat >= 5}
        delay={dl(5, 1.6)}
        d="M 810 282 A 26 26 0 1 1 809.9 282"
        stroke={INK}
        sw={2.2}
        dur={0.6}
      />
      <Fade on={beat >= 5} delay={dl(5, 2.4)}>
        <Circle cx={950} cy={308} r={6} fill={INK} />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2.9)}>
        <Circle cx={810} cy={308} r={2.5} fill={INK} />
        <Path d="M 816 308 H 938" stroke={MUTED} strokeWidth={1.6} strokeDasharray="5 6" fill="none" />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 3.6)}>
        <T x={866} y={372} size={12} fill={INK} script>
          {t("sphere + point mass", "sphere + point mass")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 6)}>
        <T x={540} y={415} size={13} fill={GREEN} script>
          {t(
            "these three, and ONLY these three, plug straight in",
            "yahi TEEN, aur sirf yahi TEEN, seedhe plug hote hain"
          )}
        </T>
      </Fade>

      {/* beat 6 — rod, ring, arc, L: integrate */}
      <Draw on={beat >= 6} delay={dl(6, 1)} d="M 100 478 h 110" stroke={INK} sw={7} dur={0.5} />
      <Draw
        on={beat >= 6}
        delay={dl(6, 2)}
        d="M 260 458 A 20 20 0 1 1 259.9 458"
        stroke={INK}
        sw={2.4}
        dur={0.5}
      />
      <Draw
        on={beat >= 6}
        delay={dl(6, 3)}
        d="M 322 492 A 30 30 0 0 1 382 492"
        stroke={INK}
        sw={2.4}
        dur={0.4}
      />
      <Draw on={beat >= 6} delay={dl(6, 3.8)} d="M 420 458 v 40 h 35" stroke={INK} sw={2.4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 5.5)}>
        <Rect
          x={80}
          y={440}
          width={470}
          height={75}
          rx={10}
          fill="none"
          stroke={RED}
          strokeWidth={2}
          strokeDasharray="8 7"
        />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 6.3)}>
        <T x={520} y={468} size={18} fill={RED} weight={800}>
          ✗
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 7.5)}>
        <T x={570} y={470} size={13} fill={RED} script anchor="start">
          {t(
            "different pieces, different distances —",
            "alag tukde, alag distances —"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 9.5)}>
        <T x={570} y={496} size={13} fill={RED} script anchor="start">
          {t(
            "INTEGRATE every tiny pull",
            "har chhote pull ko INTEGRATE karo"
          )}
        </T>
      </Fade>

      {/* beat 7 — the classic mark-loser */}
      <Draw on={beat >= 7} delay={dl(7, 0.6)} d="M 66 545 v 40" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.4)}>
        <T x={84} y={570} size={13} fill={RED} script anchor="start">
          {t(
            "point formula on a rod = the classic mark-loser",
            "rod par point formula = marks gawaane ka classic tareeqa"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
