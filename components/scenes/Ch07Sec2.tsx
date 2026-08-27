/**
 * Ch07 · Section 2 — "Everything pulls everything — but gravity is feeble"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 10.75, 19.8, 27.14, 36.95, 45.4, 52.22, 60.16]):
 *  0 title + YOU circle (hub)
 *  1 four spokes out: book / neighbour / Sun / far galaxy (chips + arrows)
 *  2 red note: why does nothing slide over? gravity is WEAK
 *  3 two protons: electric push vs gravity pull, hero 10³⁶ line
 *  4 pile up mass → planet (dots → arrow → planet circle)
 *  5 Earth's pull rules your day (line + drawn underline)
 *  6 your pull on the spoon: comically tiny arrow
 *  7 red margin verdict: never zero, never off
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52 · YOU c(280,215) r26, label inside bl 220
 *  b1 | chips: book x75 y96 w120 h28 · neighbour x370 y96 w130 h28 · Sun x85 y300 w100 h28 ·
 *      galaxy x370 y300 w150 h28 · arrows (253,196)→(161,129) · (307,196)→(407,129) ·
 *      (253,234)→(163,295) · (308,234)→(413,295)
 *  b2 | bar x540 y100..152 · lines st x558 bl 122 / 148 (max →965)
 *  b3 | protons c(640,240)/(800,240) r16 · e-arrows (618,240)→(573,240) / (822,240)→(867,240) ·
 *      e-label cx720 bl204 · g-arrows (668,266)→(692,266) / (772,266)→(748,266) · g-label cx720 bl296 ·
 *      hero cx720 bl335 (616..824)
 *  b4 | dots (120..180, 395..440) · arrow (205,417)→(258,417) · planet c(300,415) r36 ·
 *      label cx200 bl480 (54..346)
 *  b5 | line st x560 bl400 (→975) · underline M560 412 h200
 *  b6 | line st x560 bl440 · tiny arrow (560,462)→(578,462) · F label st x590 bl467
 *  b7 | bar x66 y520..576 · lines st x84 bl 542 / 568
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
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch07Sec2({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — every mass tugs every other */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "Every mass tugs on every other mass",
            "Har mass, har doosre mass ko kheenchta hai"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 4)}
        d="M 280 189 A 26 26 0 1 1 279.9 189"
        stroke={INK}
        sw={2.4}
        dur={0.8}
      />
      <Fade on={beat >= 0} delay={dl(0, 5)}>
        <T x={280} y={220} size={13} fill={INK} weight={800}>
          {t("YOU", "AAP")}
        </T>
      </Fade>

      {/* beat 1 — pulled toward all of them at once */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.5)}
        d={arrowD(253, 196, 161, 129)}
        stroke={MUTED}
        sw={1.8}
        dur={0.4}
      />
      <Fade on={beat >= 1} delay={dl(1, 1.2)}>
        <Chip x={75} y={96} w={120} h={28} fill={CREAM} stroke={INK} textFill={INK} size={12}>
          {t("physics book", "physics book")}
        </Chip>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 2.2)}
        d={arrowD(307, 196, 407, 129)}
        stroke={MUTED}
        sw={1.8}
        dur={0.4}
      />
      <Fade on={beat >= 1} delay={dl(1, 2.9)}>
        <Chip x={370} y={96} w={130} h={28} fill={CREAM} stroke={INK} textFill={INK} size={12}>
          {t("neighbour", "padosi")}
        </Chip>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 4.2)}
        d={arrowD(253, 234, 163, 295)}
        stroke={MUTED}
        sw={1.8}
        dur={0.4}
      />
      <Fade on={beat >= 1} delay={dl(1, 4.9)}>
        <Chip x={85} y={300} w={100} h={28} fill={CREAM} stroke={INK} textFill={INK} size={12}>
          Sun
        </Chip>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 5.8)}
        d={arrowD(308, 234, 413, 295)}
        stroke={MUTED}
        sw={1.8}
        dur={0.4}
      />
      <Fade on={beat >= 1} delay={dl(1, 6.5)}>
        <Chip x={370} y={300} w={150} h={28} fill={CREAM} stroke={INK} textFill={INK} size={12}>
          {t("a far galaxy", "door ki galaxy")}
        </Chip>
      </Fade>

      {/* beat 2 — so why does nothing move? */}
      <Draw on={beat >= 2} delay={dl(2, 0.5)} d="M 540 100 v 52" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 1.2)}>
        <T x={558} y={122} size={13} fill={RED} script anchor="start">
          {t(
            "why has no textbook slid over to greet you?",
            "koi textbook khisak kar milne kyun nahi aayi?"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 4.5)}>
        <T x={558} y={148} size={13} fill={RED} script anchor="start">
          {t(
            "because gravity is staggeringly WEAK",
            "kyunki gravity had se zyada WEAK hai"
          )}
        </T>
      </Fade>

      {/* beat 3 — two protons: the 10³⁶ humiliation */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 0.8)}
        d="M 640 224 A 16 16 0 1 1 639.9 224"
        stroke={INK}
        sw={2.2}
        dur={0.5}
      />
      <Draw
        on={beat >= 3}
        delay={dl(3, 1.5)}
        d="M 800 224 A 16 16 0 1 1 799.9 224"
        stroke={INK}
        sw={2.2}
        dur={0.5}
      />
      <Fade on={beat >= 3} delay={dl(3, 2.2)}>
        <T x={640} y={245} size={14} fill={INK} weight={800}>
          +
        </T>
        <T x={800} y={245} size={14} fill={INK} weight={800}>
          +
        </T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 3)}
        d={arrowD(618, 240, 573, 240)}
        stroke={RED}
        sw={3}
        dur={0.4}
      />
      <Draw
        on={beat >= 3}
        delay={dl(3, 3.6)}
        d={arrowD(822, 240, 867, 240)}
        stroke={RED}
        sw={3}
        dur={0.4}
      />
      <Fade on={beat >= 3} delay={dl(3, 4.4)}>
        <T x={720} y={204} size={12} fill={RED} script>
          {t("electric push apart", "electric dhakka")}
        </T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 5.5)}
        d={arrowD(668, 266, 692, 266)}
        stroke={GREEN}
        sw={1.6}
        dur={0.3}
      />
      <Draw
        on={beat >= 3}
        delay={dl(3, 5.9)}
        d={arrowD(772, 266, 748, 266)}
        stroke={GREEN}
        sw={1.6}
        dur={0.3}
      />
      <Fade on={beat >= 3} delay={dl(3, 6.6)}>
        <T x={720} y={296} size={11} fill={GREEN} script>
          gravity
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 7.6)}>
        <T x={720} y={335} size={16} fill={INK} weight={800}>
          electric ≈ 10³⁶ × gravity
        </T>
      </Fade>

      {/* beat 4 — gravity needs a planet's worth of mass */}
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <Circle cx={125} cy={402} r={4} fill={MUTED} />
        <Circle cx={145} cy={418} r={4} fill={MUTED} />
        <Circle cx={122} cy={432} r={4} fill={MUTED} />
        <Circle cx={162} cy={400} r={4} fill={MUTED} />
        <Circle cx={170} cy={428} r={4} fill={MUTED} />
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 1.8)}
        d={arrowD(205, 417, 258, 417)}
        stroke={MUTED}
        sw={2}
        dur={0.4}
      />
      <Fade on={beat >= 4} delay={dl(4, 2.5)}>
        <Draw
          on={beat >= 4}
          delay={dl(4, 2.5)}
          d="M 300 379 A 36 36 0 1 1 299.9 379"
          stroke={INK}
          sw={2.4}
          dur={0.7}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 3.4)}>
        <T x={300} y={420} size={13} fill={INK} weight={700}>
          planet
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 5)}>
        <T x={200} y={480} size={13} fill={AMBER_DARK} script>
          {t(
            "pile up planet-scale mass → gravity wins",
            "planet-bhar mass → gravity jeet jaati hai"
          )}
        </T>
      </Fade>

      {/* beat 5 — Earth's pull rules your day */}
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={560} y={400} size={13} fill={INK} script anchor="start">
          {t(
            "Earth's pull rules your day — walking, dropping a spoon",
            "Earth ka pull har kaam par haavi — chalna, chammach girana"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 3.5)} d="M 560 412 h 200" stroke={AMBER_DARK} sw={2.2} dur={0.5} />

      {/* beat 6 — your pull on the spoon */}
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={560} y={440} size={13} fill={INK} script anchor="start">
          {t(
            "your own pull on that spoon — far too tiny to notice",
            "aapka apna pull us chammach par — kabhi mehsoos nahi hota"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 6}
        delay={dl(6, 3.5)}
        d={arrowD(560, 462, 578, 462)}
        stroke={MUTED}
        sw={2}
        dur={0.3}
      />
      <Fade on={beat >= 6} delay={dl(6, 4.2)}>
        <T x={590} y={467} size={11} fill={MUTED} anchor="start" weight={700}>
          {t("F(you) ≈ 0.000…N", "F(aap) ≈ 0.000…N")}
        </T>
      </Fade>

      {/* beat 7 — never zero, never off */}
      <Draw on={beat >= 7} delay={dl(7, 0.6)} d="M 66 520 v 56" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.4)}>
        <T x={84} y={542} size={13} fill={RED} script anchor="start">
          {t("weak, yes — but NEVER zero", "weak, haan — par kabhi ZERO nahi")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 4.5)}>
        <T x={84} y={568} size={13} fill={RED} script anchor="start">
          {t(
            "and it can never be switched off",
            "aur ise kabhi band (off) nahi kiya ja sakta"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
