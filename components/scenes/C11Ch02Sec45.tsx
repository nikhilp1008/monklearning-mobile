/**
 * C11 Ch02 · Section 45 — "Assigning quantum numbers and counting nodes"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md. `section_type: concept`.
 *
 * Beats (en [0, 11.26, 27.65, 39.85, 50.69, 66.39, 77.57, 87.38]):
 *  0 anchor: the procedural core — assign 4 numbers, count nodes cleanly
 *  1 explain: work outward — l = 0..(n−1), ml = −l..+l, then spin
 *  2 guardrail: order matters — ml before l is a house number before the street
 *  3 formula (high, GREEN): radial=n−l−1, angular=l, total=n−1
 *  4 explain: total wiggle room set by n; angular claims l; rest = zero-shells
 *  5 formula: worked check on 3p — angular 1, radial 1, total 2 = n−1
 *  6 guardrail (high, RED): self-check — radial + angular = n−1
 *  7 land: a node is a surface where ψ²=0 + a radial-probability curve
 *
 * Layout plan (single column, x540 center):
 *  title (always)          | T mid | x540 y52 script red
 *  b0 | anchor caption      | T mid | x540 y74            [dims@b1]
 *  b1 | outward chip        | Chip  | x180..900 y100..130
 *  b2 | guardrail caption   | T mid | x540 y158
 *  b3 | formula chip (GRN)  | Chip  | x260..820 y184..218
 *  b4 | explain caption     | T mid | x540 y246
 *  b5 | 3p check chip       | Chip  | x230..850 y272..304
 *  b6 | self-check (RED)    | Chip  | x210..870 y332..366
 *  b7 | node caption        | T mid | x540 y390
 *  b7 | radial-P(r) curve   | Draw  | x200..880 baseline y560
 */

import React from "react";
import { Circle } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, GREEN, RED, CREAM, MUTED,
  Scene,
} from '@/components/scenes/kit';

const AXIS_D = "M 200 560 L 880 560";
const CURVE_D = "M 220 520 Q 275 460 330 460 Q 385 460 460 560 Q 520 460 650 430 Q 740 415 860 545";

export default function C11Ch02Sec45({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={52} size={14} fill={RED} script>
          {t("assigning quantum numbers and counting nodes", "quantum numbers assign karna aur nodes count karna")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} dim={beat >= 1} delay={dl(0, 0.3)}>
        <T x={540} y={74} size={11} fill={RED} script>
          {t(
            "the procedural core — assign four numbers, count nodes without slipping",
            "procedural core — chaar numbers assign karo, nodes count karo bina phisle"
          )}
        </T>
      </Fade>

      {/* beat 1 — explain: work outward from n */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <Chip x={180} y={100} w={720} h={30} fill={CREAM} stroke={INK} textFill={INK} size={12} script={false}>
          {t(
            "work outward: l = 0 to (n−1), then ml = −l to +l, then assign spin",
            "outward kaam karo: l = 0 se (n−1), phir ml = −l se +l, phir spin"
          )}
        </Chip>
      </Fade>

      {/* beat 2 — guardrail: order matters */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={158} size={12} fill={RED} script>
          {t(
            "order matters — fixing ml before l is a house number before the street",
            "order maayne rakhta hai — l se pehle ml fix karna, street jaane bina house number"
          )}
        </T>
      </Fade>

      {/* beat 3 — formula (high, GREEN): the three node counts */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <Chip x={260} y={184} w={560} h={34} fill={GREEN} textFill="#fff" size={14} script={false}>
          radial = n−l−1,  angular = l,  total = n−1
        </Chip>
      </Fade>

      {/* beat 4 — explain: the wiggle-room reasoning */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={246} size={12} fill={INK} script>
          {t(
            "total wiggle room set by n — angular claims l (the shape), the rest = zero-probability shells",
            "total wiggle room n se tay — angular l claim karta (shape), baaki zero-probability shells"
          )}
        </T>
      </Fade>

      {/* beat 5 — formula: worked check on 3p */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Chip x={230} y={272} w={620} h={32} fill={CREAM} stroke={MUTED} textFill={INK} size={12} script={false}>
          3p: l=1 ⇒ angular=1, radial=3−1−1=1, total=2=n−1
        </Chip>
      </Fade>

      {/* beat 6 — guardrail (high, RED): the self-check */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Chip x={210} y={332} w={660} h={34} fill={CREAM} stroke={RED} textFill={RED} size={13} script={false}>
          {t(
            "self-check: radial + angular = n−1 — if not, you slipped somewhere",
            "self-check: radial + angular = n−1 — agar sum nahi, kahin phisle ho"
          )}
        </Chip>
      </Fade>

      {/* beat 7 — land: what a node means, plus the radial-probability picture */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={390} size={12} fill={GREEN} script>
          {t(
            "a node is a surface where ψ²=0 — the electron is never found there",
            "node ek surface hai jahaan ψ²=0 — electron wahaan kabhi milta nahi"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 0.8)} d={AXIS_D} stroke={MUTED} sw={1.2} dur={0.5} />
      <Draw on={beat >= 7} delay={dl(7, 1.1)} d={CURVE_D} stroke={INK} sw={2} dur={1.2} />
      <Fade on={beat >= 7} delay={dl(7, 2.2)}>
        <Circle cx={460} cy={560} r={5} fill={RED} />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 2.5)}>
        <T x={460} y={582} size={10} fill={RED}>
          node: ψ² = 0
        </T>
        <T x={895} y={564} size={10} fill={MUTED} anchor="start">
          r →
        </T>
      </Fade>
    </Scene>
  );
}
