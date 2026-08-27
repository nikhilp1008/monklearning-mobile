/**
 * P12Ch01 · Section 23 — "Pitfalls and Pro-Tips for Coulomb's Law"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md & SCENE_PLAYBOOK.md.
 *
 * OBJECT-RICH OPEN CHALKBOARD DESIGN (NO HEAVY CONTAINERS):
 *  - Trap 1: Forgetting that Coulomb's Law ONLY applies strictly to POINT CHARGES (size << r)
 *  - Trap 2: Omitting dielectric constant K when charges are in water/oil (F_medium = F_vac / K)
 *  - Trap 3: Vector sign confusion — force signs (+/-) indicate attraction/repulsion, NOT vector components!
 *  - Cheat-sheet table comparing Point Charges vs Extended Bodies
 *
 * Beats (en [0, 6, 20, 36, 50, 64, 78, 90]):
 *  0 Title "pitfalls & pro-tips: coulomb's law" + drawn underline
 *  1 Hook note: avoiding classic exam mistakes on point charges, mediums, and vectors!
 *  2 Badge 1 & Trap 1: Extended sphere induction shifts charge center! (Size << r required)
 *  3 Badge 2 & Trap 2: Forgetting Dielectric Constant K (F_med = F_vac / K)
 *  4 Trap 3: Vector direction vs algebraic sign (+/- indicates attraction/repulsion!)
 *  5 Summary comparison table: Point Charge vs Extended Body
 *  6 Exam Pro-Tip: Draw force vectors BEFORE plugging in numerical values!
 *  7 Grand Verdict: Check point-charge validity & divide by K in media!
 */

import React from "react";
import { G, Rect } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
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

export default function P12Ch01Sec23({ currentTime, reveals, language }: SceneProps) {
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
            "pitfalls & pro-tips: coulomb's law",
            "pitfalls & pro-tips: coulomb's law"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 2.5)}
        d="M 320 70 C 440 66, 640 74, 760 69"
        stroke={RED}
        sw={2.4}
        dur={0.7}
      />

      {/* ── BEAT 1: Hook Note ── */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={60} y={110} size={15} fill={MUTED} script anchor="start">
          {t(
            "avoiding classic exam mistakes on point charges, mediums, and vectors!",
            "point charges, mediums aur vectors ke classic exam mistakes se bachein!"
          )}
        </T>
      </Fade>

      {/* ── BEAT 2: Badge 1 & Trap 1 (Point Charges Only) ── */}
      <Badge n={1} cx={52} cy={165} on={beat >= 2} delay={dl(2, 0.4)} />
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={74} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("TRAP 1: Extended Bodies & Charge Shift", "TRAP 1: Extended Bodies & Charge Shift")}
        </T>
      </Fade>

      <Fade on={beat >= 2} dim={beat >= 5}>
        <G transform="translate(60, 185)">
          <Rect x={0} y={10} width={430} height={85} rx={8} fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
          <T x={215} y={42} anchor="middle" size={15} fill={INK} weight={800}>
            Coulomb's Law STRICTLY requires Point Charges!
          </T>
          <T x={215} y={72} anchor="middle" size={12.5} fill={AMBER_DARK} script>
            {t(
              "Induction on large spheres shifts charge centers → r_effective ≠ center distance!",
              "Bade spheres par induction se charge center shift ho jata hai!"
            )}
          </T>
        </G>
      </Fade>

      {/* ── BEAT 3: Badge 2 & Trap 2 (Dielectric Medium) ── */}
      <Badge n={2} cx={540} cy={165} on={beat >= 3} delay={dl(3, 0.4)} />
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={562} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("TRAP 2: Omitting Dielectric Constant K", "TRAP 2: Dielectric Constant K Bhool Jaana")}
        </T>
      </Fade>

      <Fade on={beat >= 3} dim={beat >= 5}>
        <G transform="translate(540, 185)">
          <T x={0} y={25} anchor="start" size={13.5} fill={MUTED}>
            {t(
              "Immersing charges in water/oil reduces force by factor of K!",
              "Charges ko water/oil mein daalne par force K factor se kam ho jata hai!"
            )}
          </T>
          <T x={0} y={60} anchor="start" size={16} fill={RED} weight={800}>
            F_medium = F_vacuum / K
          </T>
          <Draw on={beat >= 3} delay={dl(3, 1.6)} d={ringD(100, 56, 120, 16)} stroke={RED} sw={1.8} />
        </G>
      </Fade>

      {/* ── BEAT 4: Trap 3 (Vector Signs vs Directions) ── */}
      <Fade on={beat >= 4} dim={beat >= 5}>
        <G transform="translate(60, 305)">
          <T x={0} y={20} anchor="start" size={14} weight={700} fill="#0369a1">
            {t("TRAP 3: Plus / Minus Signs in Vectors", "TRAP 3: Plus / Minus Signs in Vectors")}
          </T>
          <T x={0} y={48} anchor="start" size={13} script={true} fill={INK}>
            {t(
              "Signs (+/-) indicate attraction or repulsion. Draw unit vectors explicitly for direction!",
              "Signs (+/-) attraction/repulsion dikhate hain. Direction ke liye unit vectors draw karein!"
            )}
          </T>
        </G>
      </Fade>

      {/* ── BEAT 5: Summary Cheat-Sheet ── */}
      <Fade on={beat >= 5} dim={beat >= 7}>
        <G transform="translate(60, 380)">
          <T x={480} y={20} anchor="middle" size={14} weight={700} fill={INK}>
            {t("EXAM CHEAT SHEET — COULOMB'S LAW", "EXAM CHEAT SHEET — COULOMB'S LAW")}
          </T>
          <Draw on={beat >= 5} delay={dl(5, 0.4)} d="M 20 32 H 940" stroke="#cbd5e1" sw={1.5} />

          <T x={80} y={62} anchor="start" size={13} fill={INK}>Vacuum / Air</T>
          <T x={340} y={62} anchor="start" size={13} fill={GREEN} weight={700}>F_vac = k q₁ q₂ / r²</T>
          <T x={660} y={62} anchor="start" size={13} fill={RED} weight={700}>Maximum Force</T>

          <Draw on={beat >= 5} delay={dl(5, 0.8)} d="M 20 80 H 940" stroke="#cbd5e1" sw={1} />

          <T x={80} y={110} anchor="start" size={13} fill={INK}>Dielectric Medium (K)</T>
          <T x={340} y={110} anchor="start" size={13} fill={RED} weight={700}>F_med = F_vac / K</T>
          <T x={660} y={110} anchor="start" size={13} fill={GREEN} weight={700}>Reduced Force</T>
        </G>
      </Fade>

      {/* ── BEAT 7: Grand Verdict Chip ── */}
      <Fade on={beat >= 7}>
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
            "★ VERDICT: Check point-charge validity & divide by K in media!",
            "★ VERDICT: Check point-charge validity & divide by K in media!"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
