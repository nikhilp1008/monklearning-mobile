/**
 * Ch12 · Section 37 — "What is a degree of freedom?"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 24.83, 46.42, 59.39, 78.76, 79.76, 80.76]):
 *  0 title + intro (each independent way of moving stores energy) · 1 coin
 *    analogy: slide/spin/wobble · 2 monatomic panel: marble, 3 dof · 3
 *    diatomic panel: dumbbell, 5 dof (+2=7 hot) · 4 why not 3 rotations
 *    (bond-axis I≈0) · 5 polyatomic panel: bent triple, 6 dof + vibration
 *    frozen-out caution · 6 defaults summary + hydrogen freeze note
 *
 * Layout plan (Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | title (script 22, red)          | T mid | x260..820 y33..70 (bl58)
 *  b0 | intro (13, ink, script)         | T mid | x540 y86
 *  b1 | coin analogy line (13, ink)     | T mid | x540 y112
 *  b2 | monatomic panel                  | mix   | col x100..300 y135..270
 *  b3 | diatomic panel                   | mix   | col x400..680 y135..270
 *  b4 | why-not-3 line (13, ink, script)| T mid | x540 y300
 *  b5 | polyatomic panel + caution      | mix   | col x780..980 y135..270 ·
 *       caution (13,red) x540 y326
 *  b6 | defaults chips ×3 + note        | Chip  | y352..386 · note y418
 */

import React from "react";
import { Circle } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  arrowD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch12Sec37({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={58} size={22} fill={RED} script>
          {t("what is a degree of freedom?", "degree of freedom kya hai?")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={86} size={13} fill={INK} script>
          {t(
            "each independent way of moving stores energy — a degree of freedom",
            "move karne ka har independent tarika energy store karta"
          )}
        </T>
      </Fade>

      {/* beat 1 — coin analogy */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={540} y={112} size={13} fill={INK}>
          {t(
            "a coin can slide (translation) · spin (rotation) · wobble (vibration)",
            "coin slide kar sakta (translation) · spin (rotation) · wobble (vibration)"
          )}
        </T>
      </Fade>

      {/* beat 2 — monatomic: marble, 3 dof */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={200} y={135} size={14} fill={INK} weight={700}>
          {t("MONATOMIC (He)", "MONATOMIC (He)")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.5)}>
        <Circle cx={200} cy={190} r={14} fill={AMBER_DARK} />
      </Fade>
      {[
        [200, 190, 200, 155],
        [200, 190, 235, 210],
        [200, 190, 165, 215],
      ].map(([x, y, ax, ay], i) => (
        <Draw key={i} on={beat >= 2} delay={dl(2, 0.9 + i * 0.2)} d={arrowD(x, y, ax, ay)} stroke={AMBER_DARK} sw={1.8} dur={0.3} />
      ))}
      <Fade on={beat >= 2} delay={dl(2, 1.7)}>
        <T x={200} y={255} size={14} fill={AMBER_DARK} weight={700}>
          3 dof
        </T>
      </Fade>

      {/* beat 3 — diatomic: dumbbell, 5 dof (+2=7 hot) */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={540} y={135} size={14} fill={INK} weight={700}>
          {t("DIATOMIC (N₂)", "DIATOMIC (N₂)")}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 0.4)} d="M 505 190 H 575" stroke={INK} sw={2.2} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 0.9)}>
        <Circle cx={505} cy={190} r={10} fill={INK} />
        <Circle cx={575} cy={190} r={10} fill={INK} />
      </Fade>
      {[
        [540, 190, 540, 155],
        [540, 190, 570, 218],
        [540, 190, 510, 218],
      ].map(([x, y, ax, ay], i) => (
        <Draw key={i} on={beat >= 3} delay={dl(3, 1.3 + i * 0.2)} d={arrowD(x, y, ax, ay)} stroke={AMBER_DARK} sw={1.8} dur={0.3} />
      ))}
      <Draw on={beat >= 3} delay={dl(3, 2)} d="M 505 175 A 15 15 0 1 1 505 205" stroke={GREEN} sw={1.6} dur={0.35} />
      <Draw on={beat >= 3} delay={dl(3, 2.2)} d="M 575 175 A 15 15 0 1 0 575 205" stroke={GREEN} sw={1.6} dur={0.35} />
      <Fade on={beat >= 3} delay={dl(3, 2.6)}>
        <T x={540} y={255} size={14} fill={AMBER_DARK} weight={700}>
          {t("5 dof (+2 = 7 hot)", "5 dof (+2 = 7 garam)")}
        </T>
      </Fade>

      {/* beat 4 — why not 3 rotations */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={300} size={13} fill={INK} script>
          {t(
            "why not 3 rotations? spin about the bond axis stores nothing (I≈0 there)",
            "3 rotations kyun nahi? bond axis ka spin kuch store nahi karta (I≈0)"
          )}
        </T>
      </Fade>

      {/* beat 5 — polyatomic: bent triple, 6 dof */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={880} y={135} size={14} fill={INK} weight={700}>
          {t("POLYATOMIC (H₂O)", "POLYATOMIC (H₂O)")}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 0.3)} d="M 880 175 L 850 205 M 880 175 L 910 205" stroke={INK} sw={2} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <Circle cx={880} cy={175} r={9} fill={INK} />
        <Circle cx={850} cy={205} r={7} fill={INK} />
        <Circle cx={910} cy={205} r={7} fill={INK} />
      </Fade>
      {[
        [880, 190, 880, 155],
        [880, 190, 915, 165],
      ].map(([x, y, ax, ay], i) => (
        <Draw key={i} on={beat >= 5} delay={dl(5, 1.2 + i * 0.2)} d={arrowD(x, y, ax, ay)} stroke={AMBER_DARK} sw={1.8} dur={0.3} />
      ))}
      <Fade on={beat >= 5} delay={dl(5, 1.7)}>
        <T x={880} y={255} size={14} fill={AMBER_DARK} weight={700}>
          6 dof
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2.2)}>
        <T x={540} y={326} size={13} fill={RED} script>
          {t(
            "vibration is frozen out at room T — use room-T counts unless told",
            "vibration room T par frozen out — room-T counts hi use karo"
          )}
        </T>
      </Fade>

      {/* beat 6 — defaults summary */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Chip x={110} y={352} w={230} h={34} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={14} script={false}>
          mono = 3
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <Chip x={370} y={352} w={340} h={34} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={14} script={false}>
          diatomic = 5 (+2 hot = 7)
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.7)}>
        <Chip x={740} y={352} w={230} h={34} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={14} script={false}>
          polyatomic = 6
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.4)}>
        <T x={540} y={418} size={13} fill={MUTED} script>
          {t("H₂ rotation even freezes out below ~50 K", "H₂ ka rotation ~50 K ke neeche freeze")}
        </T>
      </Fade>
    </Scene>
  );
}
