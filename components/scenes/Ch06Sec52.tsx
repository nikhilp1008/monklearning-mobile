/**
 * Ch06 · Section 52 — "The rotational second law, and energy"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0,13.23,29.1,45.65,57.17,69.72,84.57,85.57] — b6,b7 fast in EN;
 * hi [0,11.52,24.92,39.17,47.62,60.07,73.9,91.56] — b6,b7 have room in HI →
 * b6/b7 kept ≤0.9 s to satisfy EN; b0..b5 have room in both):
 *  0 title + subline
 *  1 the analogy table: LINEAR | ROTATIONAL, 5 rows (s/θ, v/ω, a/α, m/I, F/τ)
 *  2 τ = Iα, compare with F = ma
 *  3 read off the replacements
 *  4 K_rot = ½Iω² — twin of ½mv²
 *  5 W = τθ — changes the rotational KE
 *  6 bridge: v = ωr, a = αr
 *  7 closing: learn the table once
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b1 | border x220..860 y110..292 · divider x540 y110..292 ·
 *       row lines y142/172/202/232/262 · headers cx380/cx700 bl132 ·
 *       rows bl163/193/223/253/283, cols cx380/cx700
 *  b2 | sans20 cx540 bl325 · sub script12 cx540 bl362
 *  b3 | sans14 cx540 bl400
 *  b4 | sans15 cx540 bl435
 *  b5 | sans15 cx540 bl470
 *  b6 | sans14 cx540 bl505
 *  b7 | script13 cx540 bl545 · underline y565 x300..780
 */

import React from "react";
import { Path, TSpan } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  GREEN_DARK,
  Scene,
} from '@/components/scenes/kit';

const ROWS: [string, string][] = [
  ["s", "θ"],
  ["v", "ω"],
  ["a", "α"],
  ["m", "I"],
  ["F", "τ"],
];

export default function Ch06Sec52({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — dynamics mirror too */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={22} fill={INK} script>
          {t(
            "the rotational second law, and energy",
            "rotational second law, aur energy"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 5)}>
        <T x={540} y={88} size={12} fill={MUTED} script>
          {t(
            "the full dictionary, laid out side by side",
            "poori dictionary, saath-saath bichi hui"
          )}
        </T>
      </Fade>

      {/* beat 1 — the analogy table */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.5)}
        d="M 220 110 h 640 v 192 h -640 z"
        stroke={INK}
        sw={2.2}
        dur={0.8}
      />
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <Path
          d="M 540 110 V 302 M 220 142 H 860"
          fill="none"
          stroke={INK}
          strokeWidth={1.6}
        />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.8)}>
        <T x={380} y={128} size={14} fill={INK} weight={700}>
          LINEAR
        </T>
        <T x={700} y={128} size={14} fill={INK} weight={700}>
          ROTATIONAL
        </T>
      </Fade>
      {ROWS.map(([l, r], i) => {
        const top = 142 + i * 32;
        const baseline = top + 21;
        return (
          <React.Fragment key={i}>
            <Fade on={beat >= 1} delay={dl(1, 2.3 + i * 1.3)}>
              {i < ROWS.length - 1 && (
                <Path d={`M 220 ${top + 32} H 860`} stroke={MUTED} strokeWidth={1} />
              )}
              <T x={380} y={baseline} size={16} fill={INK} weight={700}>
                {l}
              </T>
              <T x={700} y={baseline} size={16} fill={INK} weight={700}>
                {r}
              </T>
            </Fade>
          </React.Fragment>
        );
      })}

      {/* beat 2 — the centrepiece: τ = Iα */}
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={540} y={325} size={20} fill={INK} weight={700}>
          τ = I α
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3)}>
        <T x={540} y={362} size={12} fill={AMBER_DARK} script>
          {t("compare: F = ma — same pattern", "compare: F = ma — wahi pattern")}
        </T>
      </Fade>

      {/* beat 3 — the replacements */}
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={540} y={400} size={14} fill={INK} weight={700}>
          τ ↔ force  ·  I ↔ mass  ·  α ↔ acceleration
        </T>
      </Fade>

      {/* beat 4 — rotational kinetic energy */}
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={540} y={435} size={15} fill={INK} weight={700}>
          K
          <TSpan dy={5} fontSize={11}>
            rot
          </TSpan>
          <TSpan dy={-5}> = ½Iω²   {t("(twin of ½mv²)", "(½mv² ka twin)")}</TSpan>
        </T>
      </Fade>

      {/* beat 5 — work by a torque */}
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={540} y={470} size={15} fill={INK} weight={700}>
          W = τθ   —   {t("changes the rotational KE", "rotational KE badalta hai")}
        </T>
      </Fade>

      {/* beat 6 — the bridge (short) */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={505} size={14} fill={INK} weight={700}>
          {t("at radius r:  ", "radius r par:  ")}v = ωr ,  a = αr
        </T>
      </Fade>

      {/* beat 7 — the closing gift (short) */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={545} size={13} fill={GREEN_DARK} script>
          {t(
            "learn the table once — every rotational law writes itself",
            "table ek baar seekho — har rotational law khud likh jaata"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 0.6)} d="M 300 565 h 480" stroke={GREEN} sw={2.2} dur={0.6} />
    </Scene>
  );
}
