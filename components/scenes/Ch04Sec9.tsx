/**
 * Ch04 · Section 9 — "Worked Example 2 [NEET Speed Trap]: rifle recoil"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 8.0, 20.7, 35.8, 36.8, 37.8, 45.7, 62.7] — beats 3–5 rapid in
 * en, spread in hi):
 *  0 title
 *  1 problem data + find
 *  2 red margin: energy/force dead ends
 *  3 'fires' chip + reflex lines
 *  4 figure: BEFORE at rest (p=0) · AFTER bullet →, rifle ←, still 0
 *  5 equation m_b v_b = m_R v_R
 *  6 numbers → green box v = 2 m/s backward + conversion note
 *  7 red margin: same-direction option dies, recoil always backward
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl 52 · problem st x84 bl 92 / 116
 *  b2 | bar x66 y140..190 · lines st x84 bl 160 / 184
 *  b3 | chip x84..194 y215..247 · lines st x220 bl 237 / 262
 *  fig | BEFORE cx210 bl 296 · barrel x160..280 y312..326 + stock ·
 *    bullet rect x282..296 y316..322 · caption cx210 bl 372
 *    AFTER cx650 bl 296 · barrel x530..660 y312..326 + stock ·
 *    bullet c(700,319) r6 · arr (715,319)→(830,319) lbl cx775 bl 300 ·
 *    recoil arr (560,352)→(470,352) · "v = ?" end x458 bl 357 · caption cx650 bl 394
 *  b5 | eq cx540 bl 424
 *  b6 | note st x710 bl 462 · line st x120 bl 460 · box x430..680 y438..476 bl 462
 *  b7 | bar x66 y500..578 · lines st x84 bl 520 / 546 / 570
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
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

const circleD = (cx: number, cy: number, r: number) =>
  `M ${cx - r} ${cy} a ${r} ${r} 0 1 0 ${2 * r} 0 a ${r} ${r} 0 1 0 ${-2 * r} 0`;

export default function Ch04Sec9({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "Example 2 [NEET Speed Trap] — rifle recoil",
            "Example 2 [NEET Speed Trap] — rifle recoil"
          )}
        </T>
      </Fade>

      {/* beat 1 — the problem */}
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <T x={84} y={92} size={13} fill={INK} script anchor="start">
          {t(
            "rifle 4 kg · bullet 20 g · muzzle speed 400 m⁄s",
            "rifle 4 kg · bullet 20 g · muzzle speed 400 m⁄s"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 7)}>
        <T x={84} y={116} size={13} fill={AMBER_DARK} script anchor="start">
          {t("find: recoil speed of the rifle", "nikaalo: rifle ki recoil speed")}
        </T>
      </Fade>

      {/* beat 2 — the dead ends */}
      <Draw on={beat >= 2} delay={dl(2, 0.6)} d="M 66 140 v 52" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <T x={84} y={160} size={14} fill={RED} script anchor="start">
          {t(
            "trap: energy equations ✗ · hunting the internal force ✗",
            "trap: energy equations ✗ · andar ki force dhoondhna ✗"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 8)}>
        <T x={84} y={184} size={14} fill={RED} script anchor="start">
          {t(
            "dead ends — they eat the minute you don't have",
            "dead ends — wo minute kha jaate hain jo hai hi nahi"
          )}
        </T>
      </Fade>

      {/* beat 3 — the tell */}
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <Chip x={84} y={215} w={110} h={32} fill={CREAM} stroke={AMBER} textFill={AMBER_DARK} size={15}>
          {t("'fires'", "'fires'")}
        </Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 3)}>
        <T x={220} y={237} size={13} fill={INK} script anchor="start">
          {t(
            "explosion inside + no external horizontal force",
            "andar explosion + bahar koi horizontal force nahi"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 8)}>
        <T x={220} y={262} size={13} fill={GREEN} script anchor="start">
          {t(
            "→ conservation of momentum — a REFLEX, not a deduction",
            "→ conservation of momentum — REFLEX, deduction nahi"
          )}
        </T>
      </Fade>

      {/* beat 4 — before and after */}
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <T x={210} y={296} size={12} fill={MUTED} script>
          BEFORE
        </T>
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 1)}
        d="M 160 312 h 120 v 14 h -120 z M 160 312 L 130 336 L 148 340 L 168 326 M 282 316 h 14 v 6 h -14 z"
        stroke={INK}
        sw={2.2}
        dur={0.8}
      />
      <Fade on={beat >= 4} delay={dl(4, 2.5)}>
        <T x={210} y={372} size={13} fill={INK} script>
          {t("at rest — p_total = 0", "rest par — p_total = 0")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 4)}>
        <T x={650} y={296} size={12} fill={MUTED} script>
          AFTER
        </T>
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 4.5)}
        d={`M 530 312 h 130 v 14 h -130 z M 530 312 L 500 336 L 518 340 L 538 326 ${circleD(700, 319, 6)}`}
        stroke={INK}
        sw={2.2}
        dur={0.8}
      />
      <Draw
        on={beat >= 4}
        delay={dl(4, 5.8)}
        d={arrowD(715, 319, 830, 319)}
        stroke={GREEN}
        sw={2.6}
        dur={0.4}
      />
      <Fade on={beat >= 4} delay={dl(4, 6.2)}>
        <T x={775} y={300} size={13} fill={GREEN} script>
          400 m⁄s
        </T>
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 7)}
        d={arrowD(560, 352, 470, 352)}
        stroke={RED}
        sw={2.6}
        dur={0.4}
      />
      <Fade on={beat >= 4} delay={dl(4, 7.5)}>
        <T x={458} y={357} size={13} fill={RED} script anchor="end">
          v = ?
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 8.5)}>
        <T x={650} y={394} size={13} fill={INK} script>
          {t(
            "total must STILL be 0 — they cancel",
            "total ab bhi 0 — dono cancel karte hain"
          )}
        </T>
      </Fade>

      {/* beat 5 — the equation */}
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={540} y={424} size={16} fill={INK} weight={700}>
          {t(
            "m_bullet · v_bullet = m_rifle · v_rifle  (magnitudes)",
            "m_bullet · v_bullet = m_rifle · v_rifle  (magnitude mein)"
          )}
        </T>
      </Fade>

      {/* beat 6 — clean numbers */}
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={710} y={462} size={12} fill={AMBER_DARK} script anchor="start">
          {t("20 g → 0.02 kg INSTANTLY", "20 g → 0.02 kg TURANT")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.5)}>
        <T x={120} y={460} size={16} fill={INK} weight={700} anchor="start">
          v_rifle = (0.02 × 400) ÷ 4 = 8 ÷ 4
        </T>
      </Fade>
      <Draw
        on={beat >= 6}
        delay={dl(6, 7)}
        d="M 442 438 h 226 q 12 0 12 12 v 14 q 0 12 -12 12 h -226 q -12 0 -12 -12 v -14 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.6}
        dur={0.5}
        fill={CREAM}
      />
      <Fade on={beat >= 6} delay={dl(6, 7.6)}>
        <T x={555} y={462} size={17} fill={INK} weight={800}>
          {t("v = 2 m⁄s ← backward", "v = 2 m⁄s ← peechhe")}
        </T>
      </Fade>

      {/* beat 7 — free elimination */}
      <Draw on={beat >= 7} delay={dl(7, 0.6)} d="M 66 500 v 78" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={84} y={520} size={14} fill={RED} script anchor="start">
          {t(
            "option says 2 m⁄s ALONG the bullet? strike it — physics alone",
            "option kahe 2 m⁄s bullet ki SAME direction? physics se hi kaat do"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 7)}>
        <T x={84} y={546} size={14} fill={RED} script anchor="start">
          {t("recoil is ALWAYS backward", "recoil HAMESHA peechhe hota hai")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 11)}>
        <T x={84} y={570} size={14} fill={GREEN} script anchor="start">
          {t(
            "spot conservation on sight → a 10-second problem",
            "conservation dikhte hi pehchano → 10-second ki problem"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
