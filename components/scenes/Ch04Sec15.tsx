/**
 * Ch04 · Section 15 — "The 'no doors' condition: when you may NOT conserve momentum"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 10.8, 26.6, 27.6, 33.6, 58.1, 76.0, 92.0]):
 *  0 title
 *  1 sealed room: box, three people, cash arrows, two labels
 *  2 red margin: no doors = no external force
 *  3 "two refinements:" (right col)
 *  4 projectile explosion: dashed parabola, burst, fragments, x ✓ / y ✗ lines
 *  5 timing line: impulsive ≫ gravity for the instant
 *  6 red margin: across the INSTANT only
 *  7 green chip: make troublesome forces internal
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl 52
 *  room x80..360 y90..250 · people c(140,190)/(220,160)/(300,200) r8 ·
 *    cash arrows (155,185)→(205,168) / (235,165)→(285,193) ·
 *    lbl1 cx220 bl 275 · lbl2 cx220 bl 298
 *  b2 | bar x66 y320..372 · lines st x84 bl 340 / 364
 *  b3 st x560 bl 100 · parabola M560 260 Q700 120 840 260 dashed ·
 *    burst at (700,190) · frags (705,185)→(760,150) / (695,185)→(640,155) ·
 *    x-line st x560 bl 330 · y-line st x560 bl 356
 *  b5 line st x84 bl 412
 *  b6 | bar x66 y435..490 · lines st x84 bl 455 / 480
 *  b7 chip x290..790 y520..556
 */

import React from "react";
import { Path } from 'react-native-svg';
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
  Scene,
} from '@/components/scenes/kit';

const circleD = (cx: number, cy: number, r: number) =>
  `M ${cx - r} ${cy} a ${r} ${r} 0 1 0 ${2 * r} 0 a ${r} ${r} 0 1 0 ${-2 * r} 0`;

export default function Ch04Sec15({ currentTime, reveals, language }: SceneProps) {
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
            "momentum = money in a sealed room with no doors",
            "momentum = band kamre mein paisa, koi darwaza nahi"
          )}
        </T>
      </Fade>

      {/* beat 1 — the sealed room */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 1)}
        d="M 80 90 h 280 v 160 h -280 z"
        stroke={INK}
        sw={3}
        dur={1}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 2.2)}
        d={`${circleD(140, 190, 8)} M 140 198 v 18 ${circleD(220, 160, 8)} M 220 168 v 18 ${circleD(300, 200, 8)} M 300 208 v 18`}
        stroke={INK}
        sw={2.2}
        dur={0.8}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 3.4)}
        d={arrowD(155, 185, 205, 168)}
        stroke={AMBER}
        sw={2.2}
        dur={0.4}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 4)}
        d={arrowD(235, 165, 285, 193)}
        stroke={AMBER}
        sw={2.2}
        dur={0.4}
      />
      <Fade on={beat >= 1} delay={dl(1, 5.5)}>
        <T x={220} y={275} size={12} fill={AMBER_DARK} script>
          {t("internal handovers — fine, all day", "andar ka len-den — theek hai, din bhar")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 8)}>
        <T x={220} y={298} size={12} fill={GREEN} script>
          {t("total in the room: FIXED", "kamre ka total: FIXED")}
        </T>
      </Fade>

      {/* beat 2 — the crucial condition */}
      <Draw on={beat >= 2} delay={dl(2, 0.5)} d="M 66 320 v 52" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 1.2)}>
        <T x={84} y={340} size={13} fill={RED} script anchor="start">
          {t(
            "'no doors' = no net external force — THE crucial condition",
            "'koi darwaza nahi' = net external force zero — YAHI asli shart"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 5)}>
        <T x={84} y={364} size={13} fill={RED} script anchor="start">
          {t(
            "open a door → the total changes → conservation gone",
            "darwaza khula → total badla → conservation gaya"
          )}
        </T>
      </Fade>

      {/* beat 3 — refinements */}
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={560} y={100} size={13} fill={AMBER_DARK} script anchor="start">
          {t("two refinements:", "do baarikiyan:")}
        </T>
      </Fade>

      {/* beat 4 — component-wise */}
      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <Path
          d="M 560 260 Q 700 120 840 260"
          fill="none"
          stroke={INK}
          strokeWidth={2}
          strokeDasharray="7 6"
        />
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 3)}
        d="M 690 180 l 20 16 M 710 180 l -20 16 M 700 174 v 28"
        stroke={RED}
        sw={2.4}
        dur={0.5}
      />
      <Draw
        on={beat >= 4}
        delay={dl(4, 3.8)}
        d={arrowD(705, 185, 760, 150)}
        stroke={INK}
        sw={2}
        dur={0.4}
      />
      <Draw
        on={beat >= 4}
        delay={dl(4, 4.3)}
        d={arrowD(695, 185, 640, 155)}
        stroke={INK}
        sw={2}
        dur={0.4}
      />
      <Fade on={beat >= 4} delay={dl(4, 6.5)}>
        <T x={560} y={330} size={13} fill={GREEN} script anchor="start">
          {t(
            "x: nothing external acts → p_x conserved ✓",
            "x: bahar se kuchh nahi → p_x conserved ✓"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 10)}>
        <T x={560} y={356} size={13} fill={RED} script anchor="start">
          {t(
            "y: gravity pulls the whole time → p_y NOT conserved ✗",
            "y: gravity poore waqt kheenchti → p_y NOT conserved ✗"
          )}
        </T>
      </Fade>

      {/* beat 5 — the timing permission */}
      <Fade on={beat >= 5} delay={dl(5, 1.5)}>
        <T x={84} y={412} size={13} fill={INK} script anchor="start">
          {t(
            "during the instant: impulsive forces ≫ gravity⁄friction → effectively isolated",
            "instant ke dauraan: impulsive forces ≫ gravity⁄friction → effectively isolated"
          )}
        </T>
      </Fade>

      {/* beat 6 — across the instant only */}
      <Draw on={beat >= 6} delay={dl(6, 0.6)} d="M 66 435 v 55" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={84} y={455} size={13} fill={RED} script anchor="start">
          {t(
            "over longer times, external forces DO change momentum",
            "lambe waqt mein external forces momentum badal HI deti hain"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 7)}>
        <T x={84} y={480} size={13} fill={RED} script anchor="start">
          {t(
            "conserve only ACROSS THE INSTANT of impact — never across the flight",
            "sirf impact ke INSTANT ke aar-paar conserve karo — poori udaan par kabhi nahi"
          )}
        </T>
      </Fade>

      {/* beat 7 — the habit worth more than formulas */}
      <Fade on={beat >= 7} delay={dl(7, 1.5)}>
        <Chip x={290} y={520} w={500} h={36} fill={CREAM} stroke={GREEN} textFill={GREEN} size={14}>
          {t(
            "pick the system so troublesome forces become INTERNAL",
            "system aisa chuno ki pareshan karti forces INTERNAL ban jayen"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
