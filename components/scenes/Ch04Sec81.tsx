/**
 * Ch04 · Section 81 — "The critical speed: at the top, gravity is the helper"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 12.2, 37.03, 61.87, 86.7, 111.53, 136.36]):
 *  0 title
 *  1 diagram (left): top of loop, T=0 (limp string), mg alone provides pull, caption
 *  2 text (right): at the top, if speed just enough, T→0, gravity ALONE provides pull
 *  3 formula (right): mg = mv²_top/r → v_top,min = √(gr)
 *  4 text (right, red): slower than √gr → gravity gives MORE force than needed → falls inward
 *  5 formula (right): v_bottom,min = √5gr · v_mid,min = √3gr
 *  6 green margin: bucket of water — gravity IS the needed force, faster is safer
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl 52
 *  L fig | circle c(280,200) r90 · mg arr top(280,110→145) lbl(295,130) ·
 *    limp-string squiggle top(280,110) · "T=0" lbl cx280 bl 80 · caption cx280 bl 345
 *  R col x580..1020 | b2 st bl 110/134 · b3 line bl 170 · b4 st bl 206/230 · b5 line bl 266
 *  b6 | bar x66 y400..470 · lines st x84 bl 420 / 446
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, arrowD, INK, MUTED, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

const circleD = (cx: number, cy: number, r: number) =>
  `M ${cx - r} ${cy} a ${r} ${r} 0 1 0 ${2 * r} 0 a ${r} ${r} 0 1 0 ${-2 * r} 0`;

export default function Ch04Sec81({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={52} size={18} fill={INK} script>
          {t(
            "the critical speed — at the top, gravity is the helper",
            "critical speed — top par, gravity hi madadgaar hai"
          )}
        </T>
      </Fade>

      {/* beat 1 — the figure */}
      <Draw on={beat >= 1} delay={dl(1, 0.8)} d={circleD(280, 200, 90)} stroke={INK} sw={2.4} dur={1.2} />
      <Draw
        on={beat >= 1}
        delay={dl(1, 2.2)}
        d="M 280 110 q 15 -8 8 -20 q -15 6 -6 20"
        stroke={RED}
        sw={1.8}
        dur={0.4}
      />
      <Fade on={beat >= 1} delay={dl(1, 2.8)}>
        <T x={280} y={78} size={11} fill={RED} weight={700}>
          T = 0
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 3.4)}
        d={arrowD(280, 110, 280, 145)}
        stroke={GREEN}
        sw={2.6}
        dur={0.4}
      />
      <Fade on={beat >= 1} delay={dl(1, 4)}>
        <T x={295} y={132} size={11} fill={GREEN} weight={700} anchor="start">
          mg = mv²⁄r
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 4.8)}>
        <T x={280} y={345} size={11} fill={MUTED} script>
          {t(
            "at minimum speed the string goes limp, gravity alone turns the body",
            "minimum speed par string dheeli, gravity akeli body ghumaati"
          )}
        </T>
      </Fade>

      {/* beat 2 — T drops to zero */}
      <Fade on={beat >= 2} delay={dl(2, 1.5)}>
        <T x={580} y={110} size={13} fill={INK} script anchor="start">
          {t(
            "at the top, if speed is just barely enough",
            "top par, agar speed mushkil se kaafi ho"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 7)}>
        <T x={580} y={134} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "tension drops to ZERO — gravity ALONE provides the pull",
            "tension ZERO ho jaata — gravity AKELI khinchaai deti"
          )}
        </T>
      </Fade>

      {/* beat 3 — v_top,min */}
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <T x={580} y={170} size={14} fill={INK} weight={700} anchor="start">
          mg = mv²_top⁄r → v_top,min = √(gr)
        </T>
      </Fade>

      {/* beat 4 — slower is fatal */}
      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <T x={580} y={206} size={13} fill={RED} script anchor="start">
          {t(
            "slower than √gr? gravity gives MORE force than needed",
            "√gr se dheeme? gravity zaroorat se ZYADA force deti"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 7)}>
        <T x={580} y={230} size={13} fill={RED} script anchor="start">
          {t(
            "body falls inward, string slack — leaves as a projectile",
            "body andar girti, string dheeli — projectile ki tarah nikal jaati"
          )}
        </T>
      </Fade>

      {/* beat 5 — the three critical speeds */}
      <Fade on={beat >= 5} delay={dl(5, 1.5)}>
        <T x={580} y={266} size={14} fill={INK} weight={700} anchor="start">
          v_bottom,min = √5gr &nbsp;·&nbsp; v_mid,min = √3gr
        </T>
      </Fade>

      {/* beat 6 — the bucket of water */}
      <Draw on={beat >= 6} delay={dl(6, 0.6)} d="M 66 400 v 70" stroke={GREEN} sw={3.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={84} y={420} size={14} fill={GREEN} script anchor="start">
          {t(
            "bucket of water: at the top, gravity IS the inward force needed",
            "paani ki baalti: top par, gravity hi zaroori inward force hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 7)}>
        <T x={84} y={446} size={14} fill={GREEN} script anchor="start">
          {t(
            "fast enough (v > √gr)? water never spills — faster is safer, literally",
            "kaafi tez (v > √gr)? paani kabhi nahi girta — tez matlab safe, sach mein"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
