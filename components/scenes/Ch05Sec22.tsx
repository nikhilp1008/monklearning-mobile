/**
 * Ch05 · Section 22 — "Reading a potential-energy curve"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 22.9, 34.7, 59.6, 79.0, 103.3, 114.7, 137.6] · dur 162.4;
 *        hi [0, 21.9, 33.5, 58.3, 78.2, 102.0, 114.6, 139.4] · dur 164.3):
 *  0 title + subtitle
 *  1 axes + valley/hilltop curve
 *  2 F = −dU/dx: downhill arrow + chip + lines
 *  3 equilibrium dots (flat → F = 0)
 *  4 valley STABLE / hilltop UNSTABLE labels
 *  5 second-derivative chip
 *  6 memorise-as-a-pair lines
 *  7 E line, turning points, forbidden regions
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52 · subtitle cx540 bl82
 *  graph: y-axis (120,430)→(120,150) · x-axis (100,410)→(770,410)
 *   curve M150,260 C.. valley (280,370) · hill (480,210) · tail to (735,300)
 *  b2 | arrow (392,242)→(335,242) · "F" end x322 bl247 · chip x820..1020 y150..186
 *     | lines cx915 bl210 / bl236
 *  b3 | dots (280,370)/(480,210) r5 · line cx915 bl274
 *  b4 | valley lbl cx270 bl445 · hill lbl cx480 bl185
 *  b5 | chip x800..1040 y300..338
 *  b6 | lines cx915 bl372 / bl398
 *  b7 | E dashes y300 x150..740 · "E (total)" st x152 bl288 · dots (218,300)/(373,300)/(565,300)
 *     | lines st x84 bl480 / bl506 / bl532
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
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch05Sec22({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={22} fill={INK} script>
          {t("Reading a Potential-Energy Curve", "Potential-Energy Curve Padhna")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 6)}>
        <T x={540} y={82} size={13} fill={MUTED} script>
          {t(
            "one U-x graph secretly encodes the entire motion",
            "ek U-x graph chupke se poori motion encode kar leta hai"
          )}
        </T>
      </Fade>

      {/* beat 1 — the curve */}
      <Draw on={beat >= 1} delay={dl(1, 1)} d={arrowD(120, 430, 120, 150)} stroke={INK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 1.5)} d={arrowD(100, 410, 770, 410)} stroke={INK} sw={2.2} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 2.2)}>
        <T x={110} y={145} size={14} fill={INK} anchor="end" weight={700}>
          U
        </T>
        <T x={782} y={415} size={14} fill={INK} anchor="start" weight={700}>
          x
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 3.5)}
        d="M 150 260 C 200 340, 240 370, 280 370 C 330 370, 420 210, 480 210 C 540 210, 590 350, 650 350 C 690 350, 715 320, 735 300"
        stroke={INK}
        sw={3}
        dur={1.6}
      />

      {/* beat 2 — force = minus slope */}
      <Draw on={beat >= 2} delay={dl(2, 2)} d={arrowD(392, 242, 335, 242)} stroke={GREEN} sw={3} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 3)}>
        <T x={322} y={247} size={14} fill={GREEN} anchor="end" weight={700}>
          F
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 5)}>
        <Chip x={820} y={150} w={200} h={36} fill={CREAM} stroke={INK} textFill={INK} size={15} script={false}>
          F = − dU⁄dx
        </Chip>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 10)}>
        <T x={915} y={210} size={13} fill={GREEN} script>
          {t("force = − slope → points DOWNHILL", "force = − slope → DOWNHILL jata hai")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 16)}>
        <T x={915} y={236} size={12.5} fill={MUTED} script>
          {t("steeper curve → stronger force", "curve jitni steep → force utna tagda")}
        </T>
      </Fade>

      {/* beat 3 — equilibrium points */}
      <Fade on={beat >= 3} delay={dl(3, 2)}>
        <Circle cx={280} cy={370} r={5} fill={INK} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 3.5)}>
        <Circle cx={480} cy={210} r={5} fill={INK} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 6)}>
        <T x={915} y={274} size={13} fill={AMBER_DARK} script>
          {t("flat → slope 0 → F = 0 → equilibrium", "flat → slope 0 → F = 0 → equilibrium")}
        </T>
      </Fade>

      {/* beat 4 — stable vs unstable */}
      <Fade on={beat >= 4} delay={dl(4, 3)}>
        <T x={270} y={445} size={13} fill={GREEN} script>
          {t("valley — STABLE, nudged back", "valley — STABLE, wapas dhakelta hai")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 12)}>
        <T x={480} y={185} size={13} fill={RED} script>
          {t("hilltop — UNSTABLE, shoved away", "hilltop — UNSTABLE, door dhakelta hai")}
        </T>
      </Fade>

      {/* beat 5 — the packaged test */}
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <Chip x={800} y={300} w={240} h={38} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={12.5} script={false}>
          U″&gt;0 stable · U″&lt;0 unstable
        </Chip>
      </Fade>

      {/* beat 6 — memorise as a pair */}
      <Fade on={beat >= 6} delay={dl(6, 3)}>
        <T x={915} y={372} size={13} fill={GREEN} script>
          {t(
            "valley positive stable · hilltop negative unstable",
            "valley positive stable · hilltop negative unstable"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 12)}>
        <T x={915} y={398} size={12.5} fill={MUTED} script>
          {t("memorise it as a pair · = 0 → neutral plateau", "jode mein yaad karo · = 0 → neutral plateau")}
        </T>
      </Fade>

      {/* beat 7 — the E line and turning points */}
      <Draw
        on={beat >= 7}
        delay={dl(7, 2)}
        d="M 150 300 h 24 m 14 0 h 24 m 14 0 h 24 m 14 0 h 24 m 14 0 h 24 m 14 0 h 24 m 14 0 h 24 m 14 0 h 24 m 14 0 h 24 m 14 0 h 24 m 14 0 h 24 m 14 0 h 24 m 14 0 h 24 m 14 0 h 24 m 14 0 h 24 m 14 0 h 12"
        stroke={AMBER}
        sw={2.4}
        dur={1}
      />
      <Fade on={beat >= 7} delay={dl(7, 3.5)}>
        <T x={152} y={288} size={13} fill={AMBER_DARK} script anchor="start">
          {t("E (total)", "E (total)")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 6)}>
        <Circle cx={218} cy={300} r={4.5} fill={AMBER} />
        <Circle cx={373} cy={300} r={4.5} fill={AMBER} />
        <Circle cx={565} cy={300} r={4.5} fill={AMBER} />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 11)}>
        <T x={84} y={480} size={13} fill={GREEN} script anchor="start">
          {t(
            "turning points: U = E → K = 0 — stop & reverse",
            "turning points: U = E → K = 0 — ruko aur palto"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 16)}>
        <T x={84} y={506} size={13} fill={RED} script anchor="start">
          {t(
            "U > E = FORBIDDEN — K can never go negative",
            "U > E = FORBIDDEN — K kabhi negative nahi hoti"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 21)}>
        <T x={84} y={532} size={13} fill={AMBER_DARK} script anchor="start">
          {t("one graph — the whole motion", "ek graph — poori motion")}
        </T>
      </Fade>
    </Scene>
  );
}
