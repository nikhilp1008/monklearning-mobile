/**
 * C11 Ch02 · Section 7 — "Distance of closest approach: the energy argument"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (en [0, 8.02, 20.31, 34.13, 45.23, 52.74, 63.06, 74.41]):
 *  0 anchor: how close can a head-on α get?
 *  1 explain the move: α approaches the nucleus, Coulomb repulsion: KE → PE
 *  2 guardrail: at the closest point the particle is at rest — all KE spent
 *  3 represent: KE = (2e)(Ze) / (4πε₀ r₀)
 *  4 land (boxed): solve for r₀ = 2Ze² / (4πε₀ · KE)
 *  5 guardrail: nucleus recoil ignored — thousands× heavier
 *  6 explain: energy conservation used, not force — only the turning point
 *  7 guardrail (high): r₀ ∝ 1/KE — fire harder, punches closer in
 *
 * Layout plan:
 *  title (always)                | T mid | x540 y62 size19 script red
 *  b0 | anchor caption            | T mid | x540 y100 size16 script  [dims@b1]
 *  b1 | path guide line           | Draw  | y260 x150..860
 *  b1 | nucleus dot + label       | Fade/T| cx860 cy260 r10 / y290
 *  b1 | α dot + label             | Fade/T| cx200 cy260 r6 / y235
 *  b1 | approach arrow            | Draw  | x215..600 y260
 *  b1 | "Coulomb repulsion" cap   | T mid | x400 y300
 *  b2 | closest-point dot         | Fade  | cx700 cy260 r6 (RED)
 *  b2 | "r₀" label                | T mid | x780 y245
 *  b2 | "at rest…" caption (RED)  | T mid | x700 y300
 *  b3 | KE fraction               | T/Draw| numer y344 bar y358 denom y380
 *  b4 | r₀ fraction (boxed GREEN) | T/Draw| numer y418 bar y430 denom y452
 *  b5 | guardrail chip (RED)      | Chip  | x340..740 y478..508
 *  b6 | "energy not force" cap    | T mid | x540 y534
 *  b7 | guardrail chip (RED)      | Chip  | x340..740 y556..588
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

export default function C11Ch02Sec7({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={62} size={19} fill={RED} script>
          {t(
            "distance of closest approach: the energy argument",
            "closest approach ki distance: energy wala argument"
          )}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} dim={beat >= 1} delay={dl(0, 0.3)}>
        <T x={540} y={100} size={16} fill={RED} script>
          {t("how close can a head-on α get?", "head-on α kitna paas jaa sakta hai?")}
        </T>
      </Fade>

      {/* beat 1 — approach: Coulomb repulsion converts KE into PE */}
      <Draw on={beat >= 1} delay={dl(1, 0.1)} d="M 150 260 L 860 260" stroke={MUTED} sw={1.5} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <Circle cx={860} cy={260} r={10} fill={RED} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.2)}>
        <T x={860} y={290} size={12} fill={INK}>
          {t("nucleus +Ze", "nucleus +Ze")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.6)}>
        <Circle cx={200} cy={260} r={6} fill={AMBER_DARK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.9)}>
        <T x={200} y={235} size={12} fill={INK}>
          {t("α (+2e), KE", "α (+2e), KE")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2.3)} d={arrowD(215, 260, 600, 260)} stroke={AMBER_DARK} sw={2} dur={0.7} />
      <Fade on={beat >= 1} delay={dl(1, 3.2)}>
        <T x={400} y={300} size={13} fill={AMBER_DARK} script>
          {t("Coulomb repulsion: KE → PE", "Coulomb repulsion: KE → PE")}
        </T>
      </Fade>

      {/* beat 2 — guardrail: at rest at the closest point */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <Circle cx={700} cy={260} r={6} fill={RED} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={780} y={245} size={13} fill={INK}>
          r₀
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.4)}>
        <T x={700} y={300} size={13} fill={RED} script>
          {t("at rest here — all KE spent", "yahan rest par — saari KE kharch")}
        </T>
      </Fade>

      {/* beat 3 — represent: KE = (2e)(Ze) / (4πε₀ r₀) */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={344} size={16} fill={INK}>
          (2e)(Ze)
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 0.7)} d="M 500 358 L 580 358" stroke={INK} sw={1.8} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 1.1)}>
        <T x={540} y={380} size={16} fill={INK}>
          4πε₀ r₀
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.4)}>
        <T x={490} y={364} size={18} fill={INK} anchor="end">
          KE =
        </T>
      </Fade>

      {/* beat 4 — land (boxed): r₀ = 2Ze² / (4πε₀ · KE) */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={418} size={16} fill={GREEN}>
          2Ze²
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 0.6)} d="M 510 430 L 570 430" stroke={GREEN} sw={1.8} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={540} y={452} size={16} fill={GREEN}>
          4πε₀ · KE
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.3)}>
        <T x={498} y={438} size={18} fill={GREEN} anchor="end">
          r₀ =
        </T>
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 1.7)}
        d="M 400 402 h 240 v 64 h -240 z"
        stroke={GREEN}
        sw={2.2}
        dur={0.6}
      />

      {/* beat 5 — guardrail: nucleus recoil ignored */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Chip x={340} y={478} w={400} h={30} fill={CREAM} stroke={RED} textFill={RED} size={12} script={false}>
          {t("nucleus recoil ignored — thousands× heavier", "nucleus ka recoil ignore — hazaaron guna bhaari")}
        </Chip>
      </Fade>

      {/* beat 6 — why energy, not force */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={534} size={13} fill={MUTED} script>
          {t(
            "energy conservation, not force — we only care about the turning point",
            "energy conservation, not force — hume sirf turning point chahiye"
          )}
        </T>
      </Fade>

      {/* beat 7 — guardrail (high): the proportionality */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Chip x={340} y={556} w={400} h={32} fill={CREAM} stroke={RED} textFill={RED} size={12} script={false}>
          {t("r₀ ∝ 1/KE — fire harder ⇒ punches closer in", "r₀ ∝ 1/KE — zyaada zor se firo ⇒ paas punch")}
        </Chip>
      </Fade>
    </Scene>
  );
}
