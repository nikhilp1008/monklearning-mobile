/**
 * Ch04 · Section 3 — "The Third Law, and where the simple form stops working"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 8.8, 24.0, 34.8, 45.0, 63.2, 69.6, 90.3]):
 *  0 title
 *  1 bat + ball drawn · green arrow on ball, red arrow on bat, labels
 *  2 F_AB = −F_BA box (right col) + equal/opposite/same-line sub-line
 *  3 underlines beneath both labels + "two DIFFERENT bodies" line
 *  4 red margin: why they never cancel (3 lines, last green)
 *  5 heading: where the simple forms stop working
 *  6 F=ma chip (assumes m const) · red changing-m list · → F=dp⁄dt chip
 *  7 non-relativistic closing line
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl 52
 *  demo | bat handle x150..280 y174..186 + blade x280..355 y162..198 ·
 *    ball c(400,180) r18 · arrToBall (425,180)→(520,180) · lblBall cx475 bl 215 ·
 *    arrOnBat (358,205)→(265,205) · lblBat cx310 bl 232
 *  b2 | box x690..890 y120..168 · formula cx790 bl 152 sz26 · sub cx790 bl 192
 *  b3 | u1 M415 222 h120 · u2 M250 243 h120 · line cx540 bl 272
 *  b4 | bar x66 y300..375 · lines st x84 bl 320/346/370
 *  b5 | heading cx540 bl 412
 *  b6 | chipA x110..260 y436..470 lbl cx185 bl 492 · list st x300 bl 456 ·
 *    arrow (670,452)→(718,452) · chipB x730..950 y436..470 lbl cx840 bl 492
 *  b7 | closing cx540 bl 556
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
  arrowD,
  INK,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  MUTED,
  Scene,
} from '@/components/scenes/kit';

const circleD = (cx: number, cy: number, r: number) =>
  `M ${cx - r} ${cy} a ${r} ${r} 0 1 0 ${2 * r} 0 a ${r} ${r} 0 1 0 ${-2 * r} 0`;

export default function Ch04Sec3({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — forces never come alone */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "Newton's Third Law — forces never come alone",
            "Newton's Third Law — forces kabhi akeli nahi aati"
          )}
        </T>
      </Fade>

      {/* beat 1 — the bat-ball pair, same instant */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 1)}
        d="M 150 174 h 130 v 12 h -130 z M 292 162 h 51 q 12 0 12 18 t -12 18 h -51 q -12 0 -12 -18 t 12 -18"
        stroke={INK}
        sw={2.4}
        dur={0.9}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 2.2)}
        d={circleD(400, 180, 18)}
        stroke={INK}
        sw={2.4}
        dur={0.5}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 3.2)}
        d={arrowD(425, 180, 520, 180)}
        stroke={GREEN}
        sw={3}
        dur={0.4}
      />
      <Fade on={beat >= 1} delay={dl(1, 4)}>
        <T x={475} y={215} size={13} fill={GREEN} script>
          {t("F on BALL, by bat", "F BALL par, bat se")}
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 5.5)}
        d={arrowD(358, 205, 265, 205)}
        stroke={RED}
        sw={3}
        dur={0.4}
      />
      <Fade on={beat >= 1} delay={dl(1, 6.3)}>
        <T x={310} y={232} size={13} fill={RED} script>
          {t("F on BAT, by ball", "F BAT par, ball se")}
        </T>
      </Fade>

      {/* beat 2 — the equation */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 0.6)}
        d="M 702 120 h 176 q 12 0 12 12 v 24 q 0 12 -12 12 h -176 q -12 0 -12 -12 v -24 q 0 -12 12 -12"
        stroke={AMBER}
        sw={2.6}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 2} delay={dl(2, 1.4)}>
        <T x={790} y={152} size={24} fill={INK} weight={800}>
          F_AB = − F_BA
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 5)}>
        <T x={790} y={192} size={13} fill={INK} script>
          {t(
            "equal magnitude · opposite direction · same line",
            "equal magnitude · opposite direction · same line"
          )}
        </T>
      </Fade>

      {/* beat 3 — different bodies */}
      <Draw on={beat >= 3} delay={dl(3, 1)} d="M 415 222 h 120" stroke={AMBER} sw={2.8} dur={0.4} />
      <Draw on={beat >= 3} delay={dl(3, 2)} d="M 250 243 h 120" stroke={AMBER} sw={2.8} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 3.5)}>
        <T x={540} y={272} size={14} fill={AMBER_DARK} script>
          {t(
            "two arrows — two DIFFERENT bodies",
            "do arrows — do ALAG-ALAG bodies"
          )}
        </T>
      </Fade>

      {/* beat 4 — why they never cancel */}
      <Draw on={beat >= 4} delay={dl(4, 0.6)} d="M 66 300 v 78" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 1.4)}>
        <T x={84} y={320} size={14} fill={RED} script anchor="start">
          {t(
            "they act on DIFFERENT bodies — so they can NEVER cancel",
            "ye alag-alag bodies par lagti hain — isliye kabhi cancel NAHI hoti"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 6)}>
        <T x={84} y={346} size={14} fill={RED} script anchor="start">
          {t(
            "cancelling needs both forces on the SAME body — a pair never has that",
            "cancel ke liye dono ek hi body par chahiye — pair mein aisa kabhi nahi hota"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 12)}>
        <T x={84} y={370} size={14} fill={GREEN} script anchor="start">
          {t("that is why the ball actually flies", "isiliye ball sach mein udti hai")}
        </T>
      </Fade>

      {/* beat 5 — honesty heading */}
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={540} y={412} size={16} fill={AMBER_DARK} script>
          {t(
            "where the simple forms stop working",
            "jahan simple forms kaam karna band karte hain"
          )}
        </T>
      </Fade>

      {/* beat 6 — constant mass assumption */}
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <Chip
          x={110}
          y={436}
          w={150}
          h={34}
          fill={CREAM}
          stroke={AMBER}
          textFill={INK}
          size={16}
          script={false}
        >
          F = m·a
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={185} y={492} size={12} fill={AMBER_DARK} script>
          {t("assumes m CONSTANT", "m CONSTANT maanta hai")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 4.5)}>
        <T x={300} y={456} size={13} fill={RED} script anchor="start">
          {t(
            "rocket · falling chain · sand on belt — m changes ✗",
            "rocket · girti chain · belt par sand — m badal raha ✗"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 6}
        delay={dl(6, 12)}
        d={arrowD(670, 452, 718, 452)}
        stroke={INK}
        sw={2.4}
        dur={0.3}
      />
      <Fade on={beat >= 6} delay={dl(6, 13)}>
        <Chip
          x={730}
          y={436}
          w={220}
          h={34}
          fill={CREAM}
          stroke={GREEN}
          textFill={GREEN}
          size={16}
          script={false}
        >
          F = dp⁄dt
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 14.5)}>
        <T x={840} y={492} size={12} fill={GREEN} script>
          {t("the parent form always works", "parent form hamesha chalta hai")}
        </T>
      </Fade>

      {/* beat 7 — the honest footnote */}
      <Fade on={beat >= 7} delay={dl(7, 2)}>
        <T x={540} y={556} size={14} fill={MUTED} script>
          {t(
            "all non-relativistic: v ≪ c assumed — safe for NEET⁄JEE, but it IS an assumption",
            "sab non-relativistic: v ≪ c maana gaya — NEET⁄JEE ke liye safe, par hai ye assumption"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
