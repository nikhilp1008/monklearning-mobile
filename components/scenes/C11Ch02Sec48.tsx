/**
 * C11 Ch02 · Section 48 — "Orbital shapes and the meaning of nodes"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md. `section_type: concept`.
 *
 * Beats (en [0, 9.47, 22.02, 34.22, 44.71, 57.6, 68.27, 81.15]):
 *  0 anchor: shape questions are exam staples — fix the picture, tie to nodes
 *  1 explain: s spherical — 1s no node, 2s one radial node
 *  2 explain: p dumbbell with one nodal plane — for pᵧ that's the xz-plane
 *  3 represent: angular node (a plane) vs radial node (a spherical shell)
 *  4 explain: d has 5 members — four cloverleaf (2 planes) + dz² (a ring)
 *  5 guardrail (high, RED): angular nodes (=l) carve shape; radial (=n−l−1) shells
 *  6 formula: L = √(l(l+1))·h/2π ⇒ 0 for any s orbital
 *  7 land: nodes always total n−1 — higher shells, larger structured cloud
 *
 * Layout plan (single column, x540 center):
 *  title (always)          | T mid | x540 y52 script red
 *  b0 | anchor caption      | T mid | x540 y74            [dims@b1]
 *  b1 | explain caption     | T mid | x540 y100
 *  b2 | explain caption     | T mid | x540 y128
 *  b3 | p-dumbbell + plane  | ellip | cx260 cy280
 *  b3 | s-sphere + shell    | circ  | cx780 cy280
 *  b3 | diagram labels      | T mid | y370
 *  b4 | explain caption     | T mid | x540 y400
 *  b5 | guardrail chip(RED) | Chip  | x160..920 y420..454
 *  b6 | formula chip        | Chip  | x300..780 y468..498
 *  b7 | closing caption     | T mid | x540 y524
 */

import React from "react";
import { Circle, Ellipse, Line } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, T, Chip, INK, GREEN, RED, CREAM, AMBER, AMBER_DARK,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch02Sec48({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={52} size={14} fill={RED} script>
          {t("orbital shapes and the meaning of nodes", "orbital shapes aur nodes ka matlab")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} dim={beat >= 1} delay={dl(0, 0.3)}>
        <T x={540} y={74} size={11} fill={RED} script>
          {t(
            "shape questions are exam staples — fix the picture, tie it to nodes",
            "shape ke sawaal exam staples hain — picture fix karo, nodes se jodo"
          )}
        </T>
      </Fade>

      {/* beat 1 — explain: s orbital nodes */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={100} size={12} fill={INK} script>
          {t(
            "an s orbital is spherical: 1s has no node; 2s has one spherical (radial) node",
            "s orbital spherical hai: 1s ka koi node nahi; 2s ka ek spherical (radial) node hai"
          )}
        </T>
      </Fade>

      {/* beat 2 — explain: p orbital's nodal plane */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={128} size={12} fill={INK} script>
          {t(
            "a p orbital is a dumbbell with one nodal plane — for pᵧ that's the xz-plane",
            "p orbital dumbbell hai ek nodal plane ke saath — pᵧ ke liye wo xz-plane hai"
          )}
        </T>
      </Fade>

      {/* beat 3 — represent: angular node vs radial node */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <Ellipse cx={260} cy={248} rx={26} ry={32} fill={AMBER} fillOpacity={0.32} stroke={AMBER} strokeWidth={1.4} />
        <Ellipse cx={260} cy={312} rx={26} ry={32} fill={AMBER} fillOpacity={0.32} stroke={AMBER} strokeWidth={1.4} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <Line x1={170} y1={280} x2={350} y2={280} stroke={RED} strokeWidth={2} strokeDasharray="6 4" />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <Circle cx={780} cy={280} r={70} fill={AMBER_DARK} fillOpacity={0.14} stroke={AMBER_DARK} strokeWidth={1.2} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.4)}>
        <Circle cx={780} cy={280} r={34} fill="none" stroke={RED} strokeWidth={2} strokeDasharray="6 4" />
        <Circle cx={780} cy={280} r={4} fill={INK} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.9)}>
        <T x={260} y={370} size={12} fill={RED}>
          {t("angular node: a plane", "angular node: ek plane")}
        </T>
        <T x={780} y={370} size={12} fill={RED}>
          {t("radial node: a spherical shell", "radial node: ek spherical shell")}
        </T>
      </Fade>

      {/* beat 4 — explain: the d orbitals */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={400} size={12} fill={INK} script>
          {t(
            "d has five members: four cloverleaf shapes (two nodal planes) + dz² (a ring)",
            "d ke paanch members: chaar cloverleaf shapes (do nodal planes) + dz² (ek ring)"
          )}
        </T>
      </Fade>

      {/* beat 5 — guardrail (high, RED): angular vs radial roles */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Chip x={160} y={420} w={760} h={34} fill={CREAM} stroke={RED} textFill={RED} size={13} script={false}>
          {t(
            "angular nodes (=l) carve the shape; radial nodes (=n−l−1) are nested spherical shells",
            "angular nodes (=l) shape carve karte; radial nodes (=n−l−1) nested spherical shells"
          )}
        </Chip>
      </Fade>

      {/* beat 6 — formula: angular momentum */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Chip x={280} y={468} w={520} h={30} fill={CREAM} stroke={INK} textFill={INK} size={13} script={false}>
          {"L = √(l(l+1)) · h/2π  ⇒  0 for any s orbital"}
        </Chip>
      </Fade>

      {/* beat 7 — land: nodes total n−1 */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={524} size={12} fill={GREEN} script>
          {t(
            "nodes always total n−1 — higher shells spread the cloud over a larger, structured region",
            "nodes hamesha total n−1 hote — higher shells cloud ko bade, structured region mein phailaate"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
