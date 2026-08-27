/**
 * C11 Chemistry Ch03 · Section 13 — "Worked example: argon before potassium (JEE Advanced)"
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 7.94, 24.58, 42.75, 67.58, 81.15, 95.15, 103.85, 108.29]):
 *  0 title + underline
 *  1 given: Ar(Z=18, ~39.95u) before K(Z=19, ~39.10u) — Ar is heavier
 *  2 Part (a): strict weight order would invert the pair ✗
 *  3 red-margin: modern law needs no rescue — Ar(18)<K(19) automatic ✓
 *  4 Part (b): why heavier with fewer protons? mass depends on neutrons too
 *  5 nucleus pair (Ar bigger, K smaller) + isotope caption
 *  6 conclusion: more nucleons on average ⇒ heavier despite fewer protons
 *  7 new heading: the limitation this exposes
 *  8 closing green stamp: weight=nucleons(isotope-dep.); Z=electrons, fundamental
 *
 * Layout plan:
 *  b1 | given, 2 lines (16,w700)   | T mid  | x?..?     y89..134 (bl 104/130)
 *  b2 | Part(a) label + line       | T st   | x70..?    y150..189 (bl 160/184)
 *  b3 | red margin bar + line      | Draw   | x70  y204..236 (bl 224)
 *  b4 | Part(b) label + line       | T st   | x70..?    y248..287 (bl 258/282)
 *  b5 | Ar circle r48, K circle r44| Draw   | c(380,340) c(700,340)
 *  b5 | caption (script 13, muted) | T mid  | x?..?     y393..417 (bl 410)
 *  b6 | conclusion (15,w700,green) | T mid  | x?..?     y426..443 (bl 438)
 *  b7 | heading (18,w800,ink)      | T mid  | x?..?     y454..472 (bl 468)
 *  b7 | underline (amber)          | Draw   | y476 x400..680
 *  b8 | closing stamp (green)      | Chip   | x140..940 y484..524
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
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch03Sec13({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={21} fill={RED} script>
          {t("why argon precedes potassium (JEE Advanced)", "argon potassium se pehle kyun (JEE Advanced)")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 4)} d="M 380 88 C 450 84, 630 84, 700 88" stroke={RED} sw={2.4} dur={0.7} />

      {/* beat 1 — given */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={104} size={16} weight={700} fill={INK}>
          {t("GIVEN: Ar (Z=18, ~39.95 u) before K (Z=19, ~39.10 u)", "GIVEN: Ar (Z=18, ~39.95 u) potassium K (Z=19, ~39.10 u) se pehle")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.2)}>
        <T x={540} y={130} size={16} weight={700} fill={RED}>
          {t("yet argon is the heavier of the two", "phir bhi argon hi dono mein bhaari hai")}
        </T>
      </Fade>

      {/* beat 2 — Part (a): the weight-order problem */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={70} y={160} size={14} weight={800} fill={AMBER_DARK} anchor="start">
          {t("PART (a) — strict weight order", "PART (a) — strict weight order")}
        </T>
        <T x={70} y={184} size={15} fill={INK} anchor="start">
          {t("would invert the pair ⇒ noble gas lands among reactive metals ✗", "pair invert ho jata ⇒ noble gas reactive metals mein ✗")}
        </T>
      </Fade>

      {/* beat 3 — red-margin: modern law resolves it automatically */}
      <Draw on={beat >= 3} delay={dl(3, 0.2)} d="M 70 204 L 70 236" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={94} y={224} size={16} weight={700} fill={INK} anchor="start">
          {t("modern law needs no rescue: Ar(18) < K(19) ⇒ automatic ✓", "modern law ko rescue nahi chahiye: Ar(18) < K(19) ⇒ automatic ✓")}
        </T>
      </Fade>

      {/* beat 4 — Part (b): why heavier despite fewer protons */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={70} y={258} size={14} weight={800} fill={AMBER_DARK} anchor="start">
          {t("PART (b) — why heavier with fewer protons?", "PART (b) — kam protons ke saath bhaari kyun?")}
        </T>
        <T x={70} y={282} size={15} fill={INK} anchor="start">
          {t("atomic mass depends on NEUTRONS too, not just protons", "atomic mass NEUTRONS pe bhi depend karti, sirf protons pe nahi")}
        </T>
      </Fade>

      {/* beat 5 — nucleus comparison */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <Circle cx={380} cy={340} r={48} fill="#FFFEFB" stroke={INK} strokeWidth={2} />
        <Circle cx={700} cy={340} r={44} fill="#FFFEFB" stroke={INK} strokeWidth={2} />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={380} y={335} size={12} fill={INK} weight={700}>18p + 22n</T>
        <T x={380} y={355} size={11} fill={MUTED}>Ar</T>
        <T x={700} y={335} size={12} fill={INK} weight={700}>19p + 20n</T>
        <T x={700} y={355} size={11} fill={MUTED}>K</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.5)}>
        <T x={540} y={410} size={13} fill={MUTED} script>
          {t("Ar's mass-40 isotope (neutron-rich) dominates; K's main isotope is mass-39", "Ar ka mass-40 isotope (neutron-rich) dominate karta; K ka mass-39")}
        </T>
      </Fade>

      {/* beat 6 — the conclusion */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={438} size={15} weight={700} fill={GREEN}>
          {t("more nucleons on average ⇒ heavier, despite fewer protons", "average mein zyada nucleons ⇒ bhaari, kam protons ke bawajood")}
        </T>
      </Fade>

      {/* beat 7 — new heading */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={468} size={18} weight={800} fill={INK}>
          {t("the limitation this exposes", "isse jo limitation khulti hai")}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 1)} d="M 400 476 C 460 473, 620 473, 680 476" stroke={AMBER} sw={2.2} dur={0.5} />

      {/* beat 8 — closing insight */}
      <Fade on={beat >= 8} delay={dl(8, 0.3)}>
        <Chip x={140} y={484} w={800} h={40} fill={GREEN} textFill="#fff" size={14} script={false}>
          {t("weight tracks nucleons (isotope-dependent); Z tracks electrons — Z is fundamental", "weight nucleons track karta (isotope-dependent); Z electrons track karta — Z fundamental")}
        </Chip>
      </Fade>
    </Scene>
  );
}
