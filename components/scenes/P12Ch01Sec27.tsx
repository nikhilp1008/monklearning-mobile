/**
 * P12Ch01 · Section 27 — "Electric Field Lines and Their Four Rules"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md & SCENE_PLAYBOOK.md.
 *
 * OBJECT-RICH OPEN CHALKBOARD DESIGN (NO HEAVY CONTAINERS):
 *  - Rule 1: Start on positive charges (+) and end on negative charges (-)
 *  - Rule 2: Tangent at any point gives the direction of Electric Field E
 *  - Rule 3: Field lines NEVER intersect each other!
 *  - Rule 4: Field lines NEVER form closed loops in electrostatics
 *  - Drawn field line patterns for isolated +Q, dipole (+Q & -Q), and line intersection contradiction
 *
 * Beats (en [0, 6, 16, 32, 42, 52, 62, 72, 84]):
 *  0 Title "electric field lines & their four core rules" + drawn underline
 *  1 Hook note: visualising electrostatic field geometry through Faraday's field lines!
 *  2 Badge 1 & Rule 1: Start on (+) and end on (-) charges
 *  3 Drawn dipole field line curves from +Q to -Q
 *  4 Badge 2 & Rule 2: Tangent gives direction of E vector
 *  5 Rule 3: Field lines NEVER intersect (would imply 2 directions of E at 1 point!)
 *  6 Rule 4: Field lines NEVER form closed loops in electrostatics
 *  7 Density of lines ∝ Field magnitude E (crowded = strong field)
 *  8 Grand Verdict: Field lines start (+), end (-), tangent gives E, NEVER intersect or loop!
 */

import React from "react";
import { Circle, G } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  arrowD,
  ringD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

function Badge({ n, cx, cy, on, delay }: { n: number; cx: number; cy: number; on: boolean; delay: number }) {
  return (
    <G>
      <Draw
        on={on}
        delay={delay}
        d={`M ${cx - 13} ${cy} A 13 13 0 1 1 ${cx + 13} ${cy} A 13 13 0 1 1 ${cx - 13} ${cy}`}
        stroke={RED}
        sw={2.2}
        dur={0.4}
      />
      <Fade on={on} delay={delay + 0.3}>
        <T x={cx} y={cy + 5} size={14} fill={RED} weight={800}>
          {n}
        </T>
      </Fade>
    </G>
  );
}

export default function P12Ch01Sec27({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ── BEAT 0: Title ── */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={58} size={24} fill={RED} script>
          {t(
            "electric field lines & their four core rules",
            "electric field lines aur unke chaar mukhya niyam"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 2.5)}
        d="M 260 70 C 440 66, 640 74, 820 69"
        stroke={RED}
        sw={2.4}
        dur={0.7}
      />

      {/* ── BEAT 1: Hook Note ── */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={60} y={110} size={15} fill={MUTED} script anchor="start">
          {t(
            "visualising electrostatic field geometry through Faraday's field lines!",
            "Faraday ki field lines se electrostatic field ko visualize karna!"
          )}
        </T>
      </Fade>

      {/* ── BEAT 2 & 3: Badge 1 & Rule 1 (Start (+) End (-)) + Dipole Drawing ── */}
      <Badge n={1} cx={52} cy={165} on={beat >= 2} delay={dl(2, 0.4)} />
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={74} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("RULE 1: Start on (+) & End on (-)", "RULE 1: (+) se start, (-) par end")}
        </T>
      </Fade>

      <Fade on={beat >= 2} dim={beat >= 6}>
        <G transform="translate(60, 185)">
          {/* Dipole Charges +Q and -Q */}
          <Circle cx={60} cy={60} r={16} fill="#ffe4e6" stroke={RED} strokeWidth={1.8} />
          <T x={60} y={66} anchor="middle" size={12} fill={RED} weight={800}>+Q</T>

          <Circle cx={220} cy={60} r={16} fill="#e0f2fe" stroke="#0284c7" strokeWidth={1.8} />
          <T x={220} y={66} anchor="middle" size={12} fill="#0284c7" weight={800}>-Q</T>

          {/* Curved Dipole Field Lines */}
          <Draw on={beat >= 3} delay={dl(3, 0.4)} d="M 76 60 H 204" stroke="#0284c7" sw={2} />
          <Draw on={beat >= 3} delay={dl(3, 0.6)} d="M 72 48 Q 140 10, 208 48" stroke="#0284c7" sw={2} />
          <Draw on={beat >= 3} delay={dl(3, 0.8)} d="M 72 72 Q 140 110, 208 72" stroke="#0284c7" sw={2} />
        </G>
      </Fade>

      {/* ── BEAT 4: Badge 2 & Rule 2 (Tangent gives E) ── */}
      <Badge n={2} cx={540} cy={165} on={beat >= 4} delay={dl(4, 0.4)} />
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={562} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("RULE 2: Tangent Gives E Vector", "RULE 2: Tangent E vector ki direction deta hai")}
        </T>
      </Fade>

      <Fade on={beat >= 4} dim={beat >= 6}>
        <G transform="translate(540, 185)">
          <T x={0} y={25} anchor="start" size={13.5} fill={INK}>
            {t(
              "Tangent drawn at any point on a field line gives direction of E!",
              "Field line ke kisi bhi point par tangent E ki direction batata hai!"
            )}
          </T>
        </G>
      </Fade>

      {/* ── BEAT 5: Rule 3 (NEVER Intersect) ── */}
      <Fade on={beat >= 5} dim={beat >= 7}>
        <G transform="translate(60, 315)">
          <T x={0} y={20} anchor="start" size={14} weight={700} fill={RED}>
            {t("RULE 3: Field Lines NEVER Intersect!", "RULE 3: Field lines KABHI intersect nahi karti!")}
          </T>
          <T x={0} y={48} anchor="start" size={13} fill={INK}>
            {t(
              "Intersection would mean TWO directions of E at 1 point — IMPOSSIBLE!",
              "Intersection ka matlab 1 point par DO directions of E — IMPOSSIBLE!"
            )}
          </T>
        </G>
      </Fade>

      {/* ── BEAT 6: Rule 4 (NEVER Form Closed Loops) ── */}
      <Fade on={beat >= 6} dim={beat >= 7}>
        <G transform="translate(540, 315)">
          <T x={0} y={20} anchor="start" size={14} weight={700} fill={GREEN}>
            {t("RULE 4: NEVER Form Closed Loops!", "RULE 4: KABHI closed loops nahi banati!")}
          </T>
          <T x={0} y={48} anchor="start" size={13} fill={INK}>
            {t(
              "Electrostatic field is CONSERVATIVE — closed loops would violate energy conservation!",
              "Electrostatic field conservative hai — closed loops energy conservation ko violate karegi!"
            )}
          </T>
        </G>
      </Fade>

      {/* ── BEAT 8: Grand Verdict Chip ── */}
      <Fade on={beat >= 8}>
        <Chip
          x={100}
          y={536}
          w={880}
          h={44}
          fill={GREEN}
          textFill="#ffffff"
          size={18}
        >
          {t(
            "★ VERDICT: Field lines start (+), end (-), tangent gives E, NEVER intersect or loop!",
            "★ VERDICT: Field lines start (+), end (-), tangent gives E, NEVER intersect or loop!"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
