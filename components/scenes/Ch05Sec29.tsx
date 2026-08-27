/**
 * Ch05 · Section 29 — "The big consequence, and why the pendulum dies"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 12.4, 37.2, 58.4, 83.2, 108.0, 128.1, 152.9] · dur 168.7;
 *        hi [0, 10.2, 35.0, 54.3, 79.1, 103.9, 123.2, 148.1] · dur 162.5):
 *  0 title + subtitle
 *  1 reasoning + E = K + U = constant chip
 *  2 ideal pendulum: equal arcs, level never drops
 *  3 dying pendulum: shrinking arcs, friction skims
 *  4 subtlety: total energy always conserved (exactly 40 J)
 *  5 palms on a cold morning
 *  6 broader law + say "converted to heat"
 *  7 note: still there, we stopped counting
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52 · subtitle cx540 bl82
 *  b1 | chip x600..900 y120..158 · lines cx750 bl190 / bl216
 *  b2 | pivot (230,130)-(270,130) · strings to (160,235)/(340,235) · arc dashed
 *     | bobs r8 · green cx250 bl320
 *  b3 | pivot (230,360)-(270,360) · arcs shrinking · bob (250,470) r8
 *     | red cx250 bl545 · muted cx250 bl571
 *  b4 | cx790 bl250 / bl276 / bl302 · b5 | cx790 bl340
 *  b6 | cx790 bl380 / bl406
 *  b7 | bar x540 y430..495 · lines st x555 bl450 / bl476
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
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch05Sec29({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t("The Big Consequence — Why the Pendulum Dies", "Bada Nateeja — Pendulum Marta Kyun Hai")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 5)}>
        <T x={540} y={82} size={13} fill={MUTED} script>
          {t(
            "the payoff — and the honest refinement when friction shows up",
            "asli phal — aur wo imaandaar refinement jab friction aa jaye"
          )}
        </T>
      </Fade>

      {/* beat 1 — the reasoning */}
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <Chip x={600} y={120} w={300} h={38} fill={CREAM} stroke={GREEN} textFill={INK} size={16} script={false}>
          E = K + U = constant
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 8)}>
        <T x={750} y={190} size={13} fill={INK} script>
          {t(
            "only conservative forces at work → nothing skims",
            "sirf conservative forces kaam par → koi nahi kaat'ta"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 15)}>
        <T x={750} y={216} size={13} fill={GREEN} script>
          {t(
            "K ⇄ U trade back and forth — the sum never leaks",
            "K ⇄ U aage-peechhe trade — jod kabhi nahi risata"
          )}
        </T>
      </Fade>

      {/* beat 2 — the ideal pendulum */}
      <Draw on={beat >= 2} delay={dl(2, 1)} d="M 230 130 H 270" stroke={INK} sw={2.4} dur={0.3} />
      <Draw on={beat >= 2} delay={dl(2, 1.8)} d="M 250 130 L 160 235 M 250 130 L 340 235" stroke={MUTED} sw={1.8} dur={0.8} />
      <Draw on={beat >= 2} delay={dl(2, 3)} d="M 160 235 Q 250 285 340 235" stroke={MUTED} sw={1.4} dur={0.6} />
      <Fade on={beat >= 2} delay={dl(2, 4)}>
        <Circle cx={160} cy={235} r={8} fill={INK} />
        <Circle cx={340} cy={235} r={8} fill={INK} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 9)}>
        <T x={250} y={320} size={13} fill={GREEN} script>
          {t(
            "ideal: swings forever — the level never drops",
            "aadarsh: hamesha jhoolta — star kabhi nahi girta"
          )}
        </T>
      </Fade>

      {/* beat 3 — the dying pendulum */}
      <Draw on={beat >= 3} delay={dl(3, 1)} d="M 230 360 H 270" stroke={INK} sw={2.4} dur={0.3} />
      <Draw on={beat >= 3} delay={dl(3, 2)} d="M 170 450 Q 250 495 330 450" stroke={MUTED} sw={1.6} dur={0.5} />
      <Draw on={beat >= 3} delay={dl(3, 3)} d="M 195 455 Q 250 488 305 455" stroke={MUTED} sw={1.6} dur={0.5} />
      <Draw on={beat >= 3} delay={dl(3, 4)} d="M 218 458 Q 250 480 282 458" stroke={MUTED} sw={1.6} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 5)}>
        <Circle cx={250} cy={470} r={8} fill={INK} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 8)}>
        <T x={250} y={545} size={13} fill={RED} script>
          {t(
            "each swing: friction skims a slice → amplitude shrinks",
            "har swing: friction ek hissa kaat'ta hai → amplitude sikudti hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 16)}>
        <T x={250} y={571} size={12.5} fill={MUTED} script>
          {t("eventually it hangs still", "aakhirkaar wo sthir latak jaata hai")}
        </T>
      </Fade>

      {/* beat 4 — total energy always conserved */}
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <T x={790} y={250} size={13} fill={INK} script>
          {t(
            "mechanical E not conserved — TOTAL energy always is",
            "mechanical E conserve nahi — TOTAL energy hamesha hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 10)}>
        <T x={790} y={276} size={12.5} fill={INK} script>
          {t(
            "friction kills 40 J of KE → surfaces warm by EXACTLY 40 J",
            "friction 40 J KE khaye → satahen EXACTLY 40 J se garam"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 18)}>
        <T x={790} y={302} size={13} fill={GREEN} script>
          {t(
            "the books balance — the entry just moved columns",
            "kitaben barabar — entry bas column badal gayi"
          )}
        </T>
      </Fade>

      {/* beat 5 — the palms */}
      <Fade on={beat >= 5} delay={dl(5, 3)}>
        <T x={790} y={340} size={13} fill={AMBER_DARK} script>
          {t(
            "cold morning: rub your palms — work → warmth, real & exact",
            "thandi subah: hathelian ragdo — work → garmi, asli aur exact"
          )}
        </T>
      </Fade>

      {/* beat 6 — the broader law */}
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={790} y={380} size={13} fill={GREEN} script>
          {t(
            "energy only changes form — the grand total is fixed forever",
            "energy sirf roop badalti hai — kul jod hamesha ke liye tay"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 12)}>
        <T x={790} y={406} size={13} fill={RED} script>
          {t(
            "'lost' is shorthand — in exams write 'CONVERTED TO HEAT'",
            "'lost' shorthand hai — exam mein likho 'CONVERTED TO HEAT'"
          )}
        </T>
      </Fade>

      {/* beat 7 — the note */}
      <Draw on={beat >= 7} delay={dl(7, 0.5)} d="M 540 430 v 62" stroke={AMBER_DARK} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.5)}>
        <T x={555} y={450} size={13} fill={AMBER_DARK} script anchor="start">
          {t("the energy is still there —", "energy ab bhi wahin hai —")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 6)}>
        <T x={555} y={476} size={13} fill={AMBER_DARK} script anchor="start">
          {t("we just stopped counting it", "humne bas ginna band kar diya")}
        </T>
      </Fade>
    </Scene>
  );
}
