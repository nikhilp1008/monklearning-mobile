/**
 * P12Ch07 · Section 14 — "Three characters walk on stage: the resistor, the
 * inductor and the capacitor"
 * Subtopic: AC Voltage across R, L, C and LCR Series Circuits
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 14.98, 31.16, 49.73, 71.11, 91.64, 107.39, 135.77, 155.54]):
 *  0 DC panel: a resistor on a wire, one steady current arrow
 *  1 two new symbols appear beside it — an inductor coil, a capacitor's plates
 *  2 R / L / C drawn as three boxes under one "same push" wave — the frame
 *  3 R: current arrow rides the push exactly — "in phase"
 *  4 L: current arrow drawn visibly behind the push — "current LAGS"
 *  5 C: current arrow drawn visibly ahead of the push — "current LEADS"
 *  6 the three boxes erase; three small V/I graphs replace them at the same
 *    x-columns — solid voltage, dashed current, shifted per element
 *  7 amber margin note: R is indifferent to frequency; L and C are not
 *  8 verdict card: opposition = SIZE + TIMING, green double-underline
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  always | title (script 26, red)     | T mid  | x254..826  y30..79  (bl 66)
 *  b0 | DC box                         | Draw   | x90..330  y104..184
 *  b0 | "DC circuit" (16, ink)         | T mid  | x170..250 y115..133 (bl 128)
 *  b0 | zigzag + lead wire             | Draw   | y155  x110..310
 *  b0 | arrowhead                      | Draw   | (300,155)→(322,155)
 *  b0 | "resistance — the only face"   | T mid  | x106..314 y197..222 (bl 215) script muted
 *  b1 | L box                          | Draw   | x560..750 y104..184
 *  b1 | C box                          | Draw   | x770..960 y104..184
 *  b1 | coil symbol                    | Draw   | inside L box, y125..165
 *  b1 | plate symbol                   | Draw   | inside C box, x830..910 y122..168
 *  b1 | "cautious uncle" (14, script)  | T mid  | x601..709 y206..225 (bl 219)
 *  b1 | "eager teenager" (14, script)  | T mid  | x811..919 y206..225 (bl 219)
 *  b2 | push wave squiggle             | Draw   | y240..262 x100..980
 *  b2 | "same push" (16, amber, script)| T mid  | x470..610 y245..270 (bl 262)
 *  b2 | R box                          | Draw   | x100..320 y290..410
 *  b2 | L box                          | Draw   | x430..650 y290..410
 *  b2 | C box                          | Draw   | x760..980 y290..410
 *  b2 | R/L/C hero letters (32, ink)   | T mid  | x210/540/870  bl 355
 *  b3 | R current arrow                | Draw   | y380  x140..280
 *  b3 | "in phase" (14, green, script) | T mid  | x180..240 y388..410 (bl 402)
 *  b4 | L current arrow                | Draw   | y380  x470..610
 *  b4 | "current LAGS" (14, amberD)    | T mid  | x494..586 y388..410 (bl 402)
 *  b5 | C current arrow                | Draw   | y380  x818..940
 *  b5 | "current LEADS" (14, green)    | T mid  | x820..920 y388..410 (bl 402)
 *  b6 | R graph axis + V curve         | Draw   | x100..320 y300..460, base y400
 *  b6 | L graph axis + V curve         | Draw   | x430..650 y300..460, base y400
 *  b6 | C graph axis + V curve         | Draw   | x760..980 y300..460, base y400
 *  b6 | I curves (dashed, plain Fade — Draw's reveal trick fights dasharray)
 *  b6 | "R — in step / L — lags / C — leads" (13) | T mid | under each graph bl 472
 *  b7 | amber margin bar               | Draw   | x66  y486..556
 *  b7 | two note lines (15, script)    | T st   | x84..~700  bl 502 / 532
 *  b8 | verdict card (cream, h44)      | Draw   | x340..740 y538..582
 *  b8 | "opposition = SIZE + TIMING"   | T mid  | x360..720 y552..572 (bl 566)
 *  b8 | green double-underline         | Draw   | x364..716 y574 / y578
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
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function P12Ch07Sec14({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={66} size={26} fill={RED} script>
          {t("AC opposition: a size AND a timing", "AC mein opposition — size AUR timing dono")}
        </T>
      </Fade>

      {/* beat 0 — the DC panel: one face, resistance */}
      <Draw
        on={beat >= 0}
        delay={dl(0, 0.2)}
        d="M90 104 h240 v80 h-240 z"
        stroke={INK}
        sw={2.2}
        dur={0.7}
      />
      <Fade on={beat >= 0} delay={dl(0, 1)}>
        <T x={210} y={128} size={16} fill={INK} weight={700}>
          {t("DC circuit", "DC circuit")}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 1.8)}
        d="M110 155 H165 L172 143 L182 167 L192 143 L202 167 L212 143 L222 167 L232 143 L242 155 H300"
        stroke={INK}
        sw={2.2}
        dur={1}
      />
      <Draw
        on={beat >= 0}
        delay={dl(0, 2.9)}
        d={arrowD(300, 155, 322, 155)}
        stroke={INK}
        sw={2.2}
        dur={0.35}
      />
      <Fade on={beat >= 0} delay={dl(0, 3.6)}>
        <T x={210} y={215} size={14} fill={MUTED} script>
          {t("resistance — the only face", "resistance — ek hi chehra")}
        </T>
      </Fade>

      {/* beat 1 — two new characters: inductor, capacitor */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.2)}
        d="M560 104 h190 v80 h-190 z"
        stroke={INK}
        sw={2.2}
        dur={0.6}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.9)}
        d="M770 104 h190 v80 h-190 z"
        stroke={INK}
        sw={2.2}
        dur={0.6}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 1.7)}
        d="M580 155 c6 -20 12 -20 18 0 c6 -20 12 -20 18 0 c6 -20 12 -20 18 0 c6 -20 12 -20 18 0"
        stroke={INK}
        sw={2.2}
        dur={0.8}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 2.6)}
        d="M830 145 H858 M882 145 H910 M858 122 V168 M882 122 V168"
        stroke={INK}
        sw={2.2}
        dur={0.6}
      />
      <Fade on={beat >= 1} delay={dl(1, 3.4)}>
        <T x={655} y={219} size={14} fill={AMBER_DARK} script>
          {t("the cautious uncle", "wo dara hua uncle")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 4)}>
        <T x={865} y={219} size={14} fill={GREEN} script>
          {t("the eager teenager", "wo jaldi wala teenager")}
        </T>
      </Fade>

      {/* beat 2 — the frame: R, L, C under one push */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 0.2)}
        d="M100 278 C 300 268, 340 288, 540 278 C 740 268, 780 288, 980 278"
        stroke={AMBER}
        sw={2}
        dur={0.9}
      />
      <Fade on={beat >= 2} delay={dl(2, 1.2)}>
        <T x={540} y={262} size={16} fill={AMBER_DARK} script>
          {t("the same alternating push", "same push, sabke liye")}
        </T>
      </Fade>

      {/* The boxes, letters and arrows are one group so they can vacate the
          band together at beat 6 — dimming would leave their space occupied,
          and the graphs need exactly that space. */}
      <Fade on={beat >= 2 && beat < 6}>
      <Draw
        on={beat >= 2}
        delay={dl(2, 2)}
        d="M100 290 h220 v120 h-220 z"
        stroke={INK}
        sw={2.4}
        dur={0.7}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 2.8)}
        d="M430 290 h220 v120 h-220 z"
        stroke={INK}
        sw={2.4}
        dur={0.7}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 3.6)}
        d="M760 290 h220 v120 h-220 z"
        stroke={INK}
        sw={2.4}
        dur={0.7}
      />
      <Fade on={beat >= 2} delay={dl(2, 4.5)}>
        <T x={210} y={355} size={32} fill={INK} weight={800}>
          R
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 4.7)}>
        <T x={540} y={355} size={32} fill={AMBER_DARK} weight={800}>
          L
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 4.9)}>
        <T x={870} y={355} size={32} fill={GREEN} weight={800}>
          C
        </T>
      </Fade>

      {/* beat 3 — R: in phase */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 0.3)}
        d={arrowD(140, 380, 280, 380)}
        stroke={INK}
        sw={2.4}
        dur={0.6}
      />
      <Fade on={beat >= 3} delay={dl(3, 1.1)}>
        <T x={210} y={402} size={14} fill={GREEN} script>
          {t("in phase", "in phase, saath saath")}
        </T>
      </Fade>

      {/* beat 4 — L: current lags */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.3)}
        d={arrowD(470, 380, 610, 380)}
        stroke={AMBER_DARK}
        sw={2.4}
        dur={0.6}
      />
      <Fade on={beat >= 4} delay={dl(4, 1.1)}>
        <T x={540} y={402} size={14} fill={AMBER_DARK} script>
          {t("current LAGS", "current peeche rehta")}
        </T>
      </Fade>

      {/* beat 5 — C: current leads */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.3)}
        d={arrowD(818, 380, 940, 380)}
        stroke={GREEN}
        sw={2.4}
        dur={0.6}
      />
      <Fade on={beat >= 5} delay={dl(5, 1.1)}>
        <T x={870} y={402} size={14} fill={GREEN} script>
          {t("current LEADS", "current aage nikal jaata")}
        </T>
      </Fade>
      </Fade>

      {/* beat 6 — the boxes have vacated the band; the graphs prove the same
          claim with curves instead of arrows */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.2)}
        d="M100 400 H320 M100 300 V460"
        stroke={MUTED}
        sw={1.6}
        dur={0.5}
      />
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.2)}
        d="M430 400 H650 M430 300 V460"
        stroke={MUTED}
        sw={1.6}
        dur={0.5}
      />
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.2)}
        d="M760 400 H980 M760 300 V460"
        stroke={MUTED}
        sw={1.6}
        dur={0.5}
      />
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.9)}
        d="M110 400 C 140 350, 170 350, 200 400 C 230 450, 260 450, 290 400"
        stroke={INK}
        sw={2}
        dur={0.9}
      />
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.9)}
        d="M440 400 C 470 350, 500 350, 530 400 C 560 450, 590 450, 620 400"
        stroke={INK}
        sw={2}
        dur={0.9}
      />
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.9)}
        d="M770 400 C 800 350, 830 350, 860 400 C 890 450, 920 450, 950 400"
        stroke={INK}
        sw={2}
        dur={0.9}
      />
      {/* dashed current curves — Draw's stroke-reveal trick fights strokeDasharray,
          so these are a plain dashed path wrapped in Fade instead (see
          SCENE_PLAYBOOK.md §6.1). R: same phase. L: shifted right (late).
          C: shifted left (early). */}
      <Fade on={beat >= 6} delay={dl(6, 1.9)}>
        <Path
          d="M110 400 C 140 350, 170 350, 200 400 C 230 450, 260 450, 290 400"
          fill="none"
          stroke={GREEN}
          strokeWidth={2}
          strokeDasharray="6 5"
        />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.9)}>
        <Path
          d="M470 400 C 500 350, 530 350, 560 400 C 590 450, 620 450, 650 400"
          fill="none"
          stroke={AMBER_DARK}
          strokeWidth={2}
          strokeDasharray="6 5"
        />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.9)}>
        <Path
          d="M740 400 C 770 350, 800 350, 830 400 C 860 450, 890 450, 920 400"
          fill="none"
          stroke={GREEN}
          strokeWidth={2}
          strokeDasharray="6 5"
        />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.8)}>
        <T x={210} y={478} size={13} fill={INK} weight={600}>
          {t("R — in step", "R — saath saath")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 3)}>
        <T x={540} y={478} size={13} fill={AMBER_DARK} weight={600}>
          {t("L — lags", "L — peeche")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 3.2)}>
        <T x={870} y={478} size={13} fill={GREEN} weight={600}>
          {t("C — leads", "C — aage")}
        </T>
      </Fade>

      {/* beat 7 — frequency note, amber-margin motif */}
      <Draw
        on={beat >= 7}
        delay={dl(7, 0.2)}
        d="M66 490 V556"
        stroke={AMBER}
        sw={3}
        dur={0.5}
      />
      <Fade on={beat >= 7} delay={dl(7, 0.9)}>
        <T x={84} y={502} size={15} fill={INK} script anchor="start">
          {t("R never cares how fast the push swings.", "R ko frequency se koi farak nahi.")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.9)}>
        <T x={84} y={532} size={15} fill={AMBER_DARK} script anchor="start">
          {t(
            "L and C both do — that's the next fight.",
            "L aur C dono karte hain — agla topic yahi hai."
          )}
        </T>
      </Fade>

      {/* beat 8 — the verdict card */}
      <Draw
        on={beat >= 8}
        delay={dl(8, 0.2)}
        d="M340 538 h400 v44 h-400 z"
        stroke={GREEN}
        sw={2}
        fill={CREAM}
        dur={0.7}
      />
      <Fade on={beat >= 8} delay={dl(8, 1)}>
        <T x={540} y={566} size={19} fill={INK} weight={800}>
          {t("opposition = SIZE + TIMING", "opposition = SIZE + TIMING")}
        </T>
      </Fade>
      <Draw
        on={beat >= 8}
        delay={dl(8, 1.7)}
        d="M364 574 H716 M364 578 H716"
        stroke={GREEN}
        sw={1.8}
        dur={0.5}
      />
    </Scene>
  );
}
